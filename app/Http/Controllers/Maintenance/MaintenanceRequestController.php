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
         * @param: $request
         */
        public function ExportRequestM($id)
        {
            $maintenance = MaintenanceRequestModel::findOrFail($id);

            $templatePath = storage_path('app/Mantenimiento/SolicitudMantenimientoEquiposherramientas.xlsx');
            if (!file_exists($templatePath)) {
                return response()->json(['status' => 'error', 'message' => 'Plantilla no encontrada']);
            }

            try {
                $spreadsheet = IOFactory::load($templatePath);
                $sheet = $spreadsheet->getActiveSheet();

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

                foreach ($map as $field => $cell) {
                    $sheet->setCellValue($cell, $maintenance->$field ?? '');
                }

                // ── Checkboxes ───────────────────────────────────────────────
                $sheet->setCellValue('H10', $maintenance->request_type === 'Normal'        ? '✓' : '');
                $sheet->setCellValue('J10', $maintenance->request_type === 'Urgente'       ? '✓' : '');
                $sheet->setCellValue('C18', $maintenance->maintenance_type === 'Correctivo' ? '✓' : '');
                $sheet->setCellValue('F18', $maintenance->maintenance_type === 'Preventivo' ? '✓' : '');

                foreach (['H10', 'J10', 'C18', 'F18'] as $checkCell) {
                    $sheet->getStyle($checkCell)->applyFromArray([
                        'alignment' => [
                            'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER,
                            'vertical'   => \PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER,
                        ],
                        'font' => [
                            'bold'  => true,
                            'size'  => 12,
                            'color' => ['argb' => '003366'],
                        ],
                    ]);
                }

        // ── Helper ─────────────────────────────────────────────
            $formatAndSplit = function($text, $limit = 120) {
                if (!$text) return [];

                $lines = preg_split('/\r\n|\r|\n/', $text);
                $text = implode(', ', array_filter(array_map('trim', $lines)));

                $words = explode(' ', $text);
                $result = [];
                $current = '';

                foreach ($words as $word) {
                    if (strlen($current . ' ' . $word) <= $limit) {
                        $current .= ($current ? ' ' : '') . $word;
                    } else {
                        $result[] = $current;
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

                $isWindows = strtoupper(substr(PHP_OS, 0, 3)) === 'WIN';

                // ── LOCAL devuelve XLSX ───────────────────────────────────────
                if ($isWindows) {
                    $writer = new Xlsx($spreadsheet);
                    return response()->streamDownload(function () use ($writer) {
                        $writer->save('php://output');
                    }, "SolicitudMantenimiento_{$id}.xlsx", [
                        'Content-Type' => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                    ]);
                }

            // ── PRODUCCIÓN devuelve PDF con LibreOffice ───────────────────
            $tmpDir = storage_path('app/tmp');
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

            return response($pdf, 200, [
                'Content-Type'        => 'application/pdf',
                'Content-Disposition' => "attachment; filename=\"PMN-04_F-02_Mantenimiento_de_equipos_y_herramientas_NR01_{$id}.pdf\"",
            ]);
            } catch (\Exception $e) {
                return response()->json(['status' => 'error', 'message' => $e->getMessage()], 500);
            }
        }

        public function exportBinnacleExcel()
        {
            // Todos los registros
            $binnacles = MaintenanceRequestModel::all();

            $templatePath = storage_path('app/Mantenimiento/Bitacora_Control_Equipos_Herramientas.xlsx');
            if (!file_exists($templatePath)) {
                return response()->json(['status' => 'error', 'message' => 'Plantilla no encontrada']);
            }
            try {
                $spreadsheet = IOFactory::load($templatePath);
                $sheet = $spreadsheet->getActiveSheet();
                $startRow = 8;
                foreach ($binnacles as $index => $binnacle) {
                    $row = $startRow + $index; 
                    $sheet->setCellValue('A' . $row, $binnacle->request_number   ?? '');
                    $sheet->setCellValue('B' . $row, $binnacle->equipment_tool   ?? '');
                    $sheet->setCellValue('C' . $row, $binnacle->serial_number    ?? '');
                    $sheet->setCellValue('D' . $row, $binnacle->maintenance_type ?? '');
                    $sheet->setCellValue('E' . $row, $binnacle->responsible      ?? '');
                    $sheet->setCellValue('F' . $row, $binnacle->maintenanceDate  ?? '');
                    $waste = $binnacle->waste_generated ?? '';
                    $waste = preg_replace('/\r\n|\r|\n/', ', ', $waste);
                    $waste = trim($waste, ', '); 
                    $sheet->setCellValue('G' . $row, $waste);
                }
                $writer = new Xlsx($spreadsheet);
                $fileName = 'PMN-04_F-04_Bitacora_de_Control_de_Equipos_y_Herramientas_NR00' . now()->format('Ymd_His') . '.xlsx';
                return response()->streamDownload(function () use ($writer) {
                    $writer->save('php://output');
                }, $fileName, [
                    'Content-Type' => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                    'Cache-Control' => 'max-age=0',
                ]);
            } catch (\Exception $e) {
                return response()->json(['status' => 'error', 'message' => $e->getMessage()], 500);
            }
        }

        public function stats()
        {
            return response()->json([
                'solicitudes' => MaintenanceRequestModel::count(),
                'bajas'       => \App\Maintenence\ToolLowModel::count(),
                'bitacora'    => MaintenanceRequestModel::whereNotNull('responsible')->count(),
            ]);
        }
}
