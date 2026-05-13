<?php
namespace App\Http\Controllers\Maintenance;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Maintenence\MaintenanceRequestModel;
use PhpOffice\PhpSpreadsheet\IOFactory;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use App\RHModels\Empleado;


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

                // ── MAPEO DE CAMPOS ─────────────────────────────────────
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

                // ── CHECKBOXES ──────────────────────────────────────────
                $sheet->setCellValue('H10', $maintenance->request_type === 'Normal' ? '✓' : '');
                $sheet->setCellValue('J10', $maintenance->request_type === 'Urgente' ? '✓' : '');
                $sheet->setCellValue('C18', $maintenance->maintenance_type === 'Correctivo' ? '✓' : '');
                $sheet->setCellValue('F18', $maintenance->maintenance_type === 'Preventivo' ? '✓' : '');

                foreach (['H10', 'J10', 'C18', 'F18'] as $cell) {
                    $sheet->getStyle($cell)->applyFromArray([
                        'alignment' => [
                            'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER,
                            'vertical'   => \PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER,
                        ],
                        'font' => [
                            'bold' => true,
                            'size' => 12,
                        ],
                    ]);
                }

                // ── ESTILO TEXTO ────────────────────────────────────────
                $styleLeft = [
                    'alignment' => [
                        'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_LEFT,
                        'vertical'   => \PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER,
                        'wrapText'   => true,
                    ],
                    'font' => [
                        'size' => 10,
                    ],
                ];

                // ── HELPERS ─────────────────────────────────────────────
                $splitLines = function($text) {
                    if (!$text) return [];
                    $text = str_replace(["\r\n", "\r"], "\n", $text);
                    return array_values(array_filter(array_map('trim', explode("\n", $text))));
                };

                $fillSection = function($items, $startRow, $minRows, $colText = 'B', $colNum = 'A') use ($sheet, $styleLeft) {
                    $total = count($items);
                    $extra = max(0, $total - $minRows);

                    if ($extra > 0) {
                        $sheet->insertNewRowBefore($startRow + $minRows, $extra);
                    }

                    foreach ($items as $i => $v) {
                        $row = $startRow + $i;

                        // 🔢 Número
                        $sheet->setCellValue($colNum . $row, $i + 1);

                        // 📝 Texto
                        $sheet->setCellValue($colText . $row, $v);

                        // Estilos
                        $sheet->getStyle($colText . $row)->applyFromArray($styleLeft);
                        $sheet->getStyle($colNum . $row)->applyFromArray([
                            'alignment' => [
                                'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER,
                                'vertical'   => \PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER,
                            ]
                        ]);
                    }

                    return max($total, $minRows);
                };

                // ── DATOS ───────────────────────────────────────────────
                $actStart = 21; $actMin = 5;
                $danoStart = 28; $danoMin = 4;
                $cambioStart = 34; $cambioMin = 4;
                $refStart = 40; $refMin = 4;

                $actividades = $splitLines($maintenance->activities_to_perform);
                $danos = $splitLines($maintenance->damages_found);
                $cambios = $splitLines($maintenance->changes_repairs);
                $refacciones = $splitLines($maintenance->spare_parts_used);
                $residuos = $splitLines($maintenance->waste_generated);

                // ── LLENADO DINÁMICO ────────────────────────────────────
                $offset1 = max(0, count($actividades) - $actMin);
                $fillSection($actividades, $actStart, $actMin);

                $danoStart += $offset1;
                $offset2 = $offset1 + max(0, count($danos) - $danoMin);
                $fillSection($danos, $danoStart, $danoMin);

                $cambioStart += $offset2;
                $offset3 = $offset2 + max(0, count($cambios) - $cambioMin); // ✅ CORREGIDO
                $fillSection($cambios, $cambioStart, $cambioMin);

                $refStart += $offset3;
                $fillSection($refacciones, $refStart, $refMin);

                foreach ($residuos as $i => $v) {
                $row = $refStart + $i;

                // 🔢 Número en columna G
                $sheet->setCellValue('G' . $row, $i + 1);

                // 🗑️ Texto en columna H
                $sheet->setCellValue('H' . $row, $v);

                // Estilos
                    $sheet->getStyle('H' . $row)->applyFromArray($styleLeft);
                    $sheet->getStyle('G' . $row)->applyFromArray([
                        'alignment' => [
                            'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER,
                            'vertical'   => \PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER,
                        ]
                    ]);
                }
                // ── DESCARGAR EXCEL ─────────────────────────────────────
                $writer = new Xlsx($spreadsheet);
                $requestNumber = preg_replace('/[^A-Za-z0-9_\-]/', '_', $maintenance->request_number);
                $fileName = "PMN-04_F-02_Mantenimiento_de_equipos_y_herramientas_NR01_1_{$requestNumber}.xlsx";

                return response()->streamDownload(function () use ($writer) {
                    $writer->save('php://output');
                }, $fileName, [
                    'Content-Type' => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                    'Content-Disposition' => "attachment; filename=\"{$fileName}\"",
                ]);

            } catch (\Exception $e) {
                return response()->json([
                    'status' => 'error',
                    'message' => $e->getMessage()
                ], 500);
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
        public function employee(){
        $procedure = Empleado::select( 
            \DB::raw("CONCAT(nombre, ' ', ap_paterno, ' ', ap_materno) as full_name")
        )
        ->where('condicion', 1)
        ->orderByRaw("CONCAT(nombre, ' ', ap_paterno, ' ', ap_materno) ASC")
        ->get();

        return response()->json($procedure);
        }
}
