<?php
namespace App\Http\Controllers\Maintenance;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Maintenence\MaintenanceRequestModel;
use PhpOffice\PhpSpreadsheet\IOFactory;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

class MaintenanceRequestController extends Controller
{
    // Crear una nueva solicitud
    public function store(Request $request){
        $maintenance = MaintenanceRequestModel::create([
        "requested_by"      =>  $request->requested_by,
        "request_date"      =>  $request->request_date,
        "request_number"    =>  $request->request_number,
        "request_time"      =>  $request->request_time,
        "equipment_tool"    =>  $request->equipment_tool,
        "serial_number"     =>  $request->serial_number,
        "request_type"      =>  $request->request_type,
        "problem_description"=> $request->problem_description,
        "authorized_by"     =>  $request->authorized_by,
        "auth_date"         =>  $request->auth_date,
        "maintenance_type"  =>  $request->maintenance_type,
        "start_date"        =>  $request->start_date,
        "end_date"          =>  $request->end_date,
        "activities_to_perform" =>  $request->activities_to_perform,
        "damages_found"     =>  $request->damages_found,
        "changes_repairs"   =>  $request->changes_repairs,
        "spare_parts_used"  =>  $request->spare_parts_used,
        "waste_generated"   =>  $request->waste_generated,
        "observations"      =>  $request->observations,
        ]);

        return response()->json($maintenance,201);
    }

        //actuaizar 
    public function update(Request $request, $id){
        $maintenance = MaintenanceRequestModel::findOrFail($id);

        $data = [
            "requested_by"      =>  $request->requested_by,
            "request_date"      =>  $request->request_date,
            "request_number"    =>  $request->request_number,
            "request_time"      =>  $request->request_time,
            "equipment_tool"    =>  $request->equipment_tool,
            "serial_number"     =>  $request->serial_number,
            "request_type"      =>  $request->request_type,
            "problem_description"=> $request->problem_description,
            "authorized_by"     =>  $request->authorized_by,
            "auth_date"         =>  $request->auth_date,
            "maintenance_type"  =>  $request->maintenance_type,
            "start_date"        =>  $request->start_date,
            "end_date"          =>  $request->end_date,
            "activities_to_perform" => $request->activities_to_perform,
            "damages_found"     =>  $request->damages_found,
            "changes_repairs"   =>  $request->changes_repairs,
            "spare_parts_used"  =>  $request->spare_parts_used,
            "waste_generated"   =>  $request->waste_generated,
            "observations"      =>  $request->observations,
        ];

        $maintenance->update($data);
        return response()->json($maintenance, 202);
    }

    public function show($id){
        return response()->json(
            MaintenanceRequestModel::findOrFail($id)
        );
    }

    //ver todas las solicitudes
    public function index(){
        return MaintenanceRequestModel::all();
    }
 // Agregar responsable y fecha de mantenimiento a un registro existente
    public function addMaintenance(Request $request)
    {
        $request->validate([
            'maintenanceId'   => 'required|integer',
            'responsible'     => 'required|string|max:255',
            'maintenanceDate' => 'required|date',
        ]);
        // Usar MaintenanceRequestModel en lugar de la clase Maintenance (que no existe)
        $maintenance = MaintenanceRequestModel::findOrFail($request->maintenanceId);
        $maintenance->responsible      = $request->responsible;
        $maintenance->maintenanceDate  = $request->maintenanceDate;
        $maintenance->save();
        return response()->json([
            'message' => 'Responsable agregado correctamente',
            'data'    => $maintenance,
        ]);
    }

    /**
     * Exportar en excel solicitud de mantenimineto 
     * Exportar solicitud de mantenimiento por ID
     * @param {id} - Id del registro de la solicitud
     *      
     * */
    public function ExportRequestM($id)
    {
        $maintenance = MaintenanceRequestModel::findOrFail($id);

        $templatePath = storage_path('app/Mantenimiento/SolicitudMantenimientoEquiposherramientas.xlsx');
        if (!file_exists($templatePath)) {
            return response()->json(['status' => 'error', 'message' => 'Plantilla no encontrada']);
        }

        try {
            $spreadsheet = IOFactory::load($templatePath); //Abre excel
            $sheet = $spreadsheet->getActiveSheet(); //Toma la hoja activa 

            //Mapeo de los campos
            $map = [
                'requested_by'        => 'A8',
                'request_date'        => 'E8',
                'request_number'      => 'G8',
                'equipment_tool'      => 'A10',
                'serial_number'       => 'E10',
                'request_time'        => 'F10',
                'problem_description' => 'A12',
                'authorized_by'       => 'A14',
                'auth_date'           => 'I14',
                'start_date'          => 'G18',
                'end_date'            => 'I18',
                'observations'        => 'A46'                
            ];

            //Recorre todo los campos
            foreach ($map as $field => $cell) {
                $sheet->setCellValue($cell, $maintenance->$field ?? ''); //Inserta datos
            }

            // ── Checkboxes ───────────────────────────────────────────────
            $sheet->setCellValue('H10', $maintenance->request_type === 'Normal'        ? '✅' : '');
            $sheet->setCellValue('J10', $maintenance->request_type === 'Urgente'       ? '✅' : '');
            $sheet->setCellValue('C18', $maintenance->maintenance_type === 'Correctivo' ? '✅' : '');
            $sheet->setCellValue('F18', $maintenance->maintenance_type === 'Preventivo' ? '✅' : '');


      // ── Helper ─────────────────────────────────────────────
        $formatAndSplit = function($text, $limit = 120) {
            if (!$text) return [];

            $lines = preg_split('/\r\n|\r|\n/', $text); //separa las lineas y lo convierte en array 
            $text = implode(', ', array_filter(array_map('trim', $lines))); //limpiar el array y unir 
            $words = explode(' ', $text); //separa las palabras
            $result = [];
            $current = '';

            foreach ($words as $word) {
                if (strlen($current . ' ' . $word) <= $limit) //Construye una linea sin el parse del limite 
                    {
                    $current .= ($current ? ' ' : '') . $word;
                } else {
                    $result[] = $current; // cuando se llena guarda línea
                    $current = $word;
                }
            }

            if ($current) $result[] = $current;

            return $result;
        };

        // ── Estilo ─────────────────────────────────────────────
        $styleLeft = [
            'alignment' => [
                'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_LEFT,
                'vertical'   => \PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER,
            ],
        ];

        // ── ACTIVIDADES ────────────────────────────────────────
        $lines = $formatAndSplit($maintenance->activities_to_perform, 120);

        foreach ($lines as $i => $line) {
            $cell = 'B' . (21 + $i);

            $sheet->setCellValue($cell, $line);
            $sheet->getStyle($cell)->applyFromArray($styleLeft);
        }

        // ── DAÑOS ──────────────────────────────────────────────
        $lines = $formatAndSplit($maintenance->damages_found, 120);

        foreach ($lines as $i => $line) {
            $cell = 'B' . (28 + $i);

            $sheet->setCellValue($cell, $line);
            $sheet->getStyle($cell)->applyFromArray($styleLeft);
        }

        // ── CAMBIOS ────────────────────────────────────────────
        $lines = $formatAndSplit($maintenance->changes_repairs, 120);

        foreach ($lines as $i => $line) {
            $cell = 'B' . (34 + $i);

            $sheet->setCellValue($cell, $line);
            $sheet->getStyle($cell)->applyFromArray($styleLeft);
        }

        // ── REFACCIONES ────────────────────────────────────────
        $lines = $formatAndSplit($maintenance->spare_parts_used, 100);

        foreach ($lines as $i => $line) {
            $cell = 'B' . (40 + $i);

            $sheet->setCellValue($cell, $line);
            $sheet->getStyle($cell)->applyFromArray($styleLeft);
        }

        // ── RESIDUOS ───────────────────────────────────────────
        $lines = $formatAndSplit($maintenance->waste_generated, 40);

        foreach ($lines as $i => $line) {
            $cell = 'H' . (40 + $i);

            $sheet->setCellValue($cell, $line);
            $sheet->getStyle($cell)->applyFromArray($styleLeft);
        }

        //detecta si estas en windowa
            $isWindows = strtoupper(substr(PHP_OS, 0, 3)) === 'WIN';

            // ── LOCAL devuelve XLSX ───────────────────────────────────────
            if ($isWindows) {
                $writer = new Xlsx($spreadsheet);
                return response()->streamDownload(function () use ($writer) {
                    $writer->save('php://output');
                }, "PMN-04_F-02 Mantenimiento de equipos y herramientas NR01.xlsx", [
                    'Content-Type' => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                ]);
            }

            // ── PRODUCCIÓN devuelve PDF ───────────────────────────────────
            
            
            if (!file_exists($tmpDir)) mkdir($tmpDir, 0755, true);

            $tmpXlsx = $tmpDir . '/' . uniqid('mnt_') . '.xlsx';
            $tmpPdf  = str_replace('.xlsx', '.pdf', $tmpXlsx);

            (new Xlsx($spreadsheet))->save($tmpXlsx);

            exec('libreoffice --headless --convert-to pdf --outdir '
                . escapeshellarg($tmpDir) . ' '
                . escapeshellarg($tmpXlsx) . ' 2>&1', $output, $code);

            @unlink($tmpXlsx);

            if ($code !== 0 || !file_exists($tmpPdf)) {
                return response()->json(['status' => 'error', 'message' => implode("\n", $output)], 500);
            }

            $pdf = file_get_contents($tmpPdf);
            @unlink($tmpPdf);

            $filename = "PMN-04_F-02 Mantenimiento de equipos y herramientas NR01_{$id}.pdf";
            return response($pdf, 200, [
                'Content-Type' => 'application/pdf',
                'Content-Disposition' => "attachment; filename=\"reporte.pdf\"; filename*=UTF-8''" . rawurlencode($filename),
            ]);

        } catch (\Exception $e) {
            return response()->json(['status' => 'error', 'message' => $e->getMessage()], 500);
        }
    }

}
