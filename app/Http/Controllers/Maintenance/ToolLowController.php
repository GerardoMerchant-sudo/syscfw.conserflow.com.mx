<?php

namespace App\Http\Controllers\Maintenance;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Maintenence\ToolLowModel;
use PhpOffice\PhpSpreadsheet\IOFactory;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

class ToolLowController extends Controller
{
    //crear solicitud de baja 
    public function store(Request $request){
        $toolLow = ToolLowModel::Create([
        'folio'                     =>  $request->folio,
        'date'                      =>  $request->date,
        'equipment_name'            =>  $request->equipment_name,
        'general_characteristics'   =>  $request->general_characteristics,
        'brand'                     =>  $request->brand,
        'model'                     =>  $request->model,
        'internal_code'             =>  $request->internal_code,
        'serial_number'             =>  $request->serial_number,
        'physical_verification'     =>  $request->physical_verification,
        'functional_verification'   =>  $request->functional_verification,
        'corrective_maintenance'    =>  $request->corrective_maintenance,
        'reason'                    =>  $request->reason,
        'decommission_type'         =>  $request->decommission_type,
        'reusable_parts_description'=>  $request->reusable_parts_description,
        ]);
        
        return response()->json($toolLow, 201);
    }

    //actualizar
    public function update(Request $request, $id){
        $toolLow = ToolLowModel::findOrFail($id);
        $data = [
        'folio'                     =>  $request->folio,
        'date'                      =>  $request->date,
        'equipment_name'            =>  $request->equipment_name,
        'general_characteristics'   =>  $request->general_characteristics,
        'brand'                     =>  $request->brand,
        'model'                     =>  $request->model,
        'internal_code'             =>  $request->internal_code,
        'serial_number'             =>  $request->serial_number,
        'physical_verification'     =>  $request->physical_verification,
        'functional_verification'   =>  $request->functional_verification,
        'corrective_maintenance'    =>  $request->corrective_maintenance,
        'reason'                    =>  $request->reason,
        'decommission_type'         =>  $request->decommission_type,
        'reusable_parts_description'=>  $request->reusable_parts_description,
        ];

        $toolLow->update($data);
        return response()->json($toolLow, 202);
    }

    public function show($id){
        return response()->json(
            ToolLowModel::findOrFail($id)
        );

    }

    //Retrieve All
    public function index(){
        return ToolLowModel::all();
    }

    /**
     *  Exportar a PDF
     */

    public function exportPDFLoow($id){
        $toollow = ToolLowModel::findOrFail($id);

        $templatePath = storage_path('app/Mantenimiento/Dictamen_baja_equipos.xlsx');
        if(!file_exists($templatePath)){
            return response()->json(['status' => 'error', 'message' => 'Plantilla no encontrada']);
        }

        try {
            $spreadsheet = IOFactory::load($templatePath);
            $sheet = $spreadsheet->getActiveSheet();
            
            $map = [        
            'folio'                    =>   'L6',             
            'date'                     =>   'L7',
            'equipment_name'           =>   'A10',
            'general_characteristics'  =>   'G10',
            'brand'                    =>   'A12',
            'model'                    =>   'D12',
            'internal_code'            =>   'G12',
            'serial_number'            =>   'J12',
            'physical_verification'    =>   'A16',
            'functional_verification'  =>   'A18', 
            'corrective_maintenance'   =>   'A20',     
            'reusable_parts_description' => 'H30',
            ];

            foreach ($map as $field => $cell){
                $sheet->setCellValue($cell, $toollow->$field ??  '');
            }
            // Hacer los checkboxer
            //Motivo de baja
            $sheet->setCellValue('B26', $toollow->reason == 'Costo Beneficio' ? '✖️' : '');
            $sheet->setCellValue('H26', $toollow->reason == 'Daño irreparable'  ? '✖️' : '');
            
            //Tipo de baja
            $sheet->setCellValue('A30', $toollow->decommission_type == 'Baja definitiva' ? '✖️' : '');
            $sheet->setCellValue('A31', $toollow->decommission_type == 'Baja para depósito y aprovechamiento futuro de piezas y componentes' ? '✖️' : '');
            $sheet->setCellValue('A32', $toollow->decommission_type == 'Baja para donación a otras instituciones' ? '✖️' : '');

            $isWindows = strtoupper((substr(PHP_OS,0,3)) == 'WIN') ;
        
            // local devuelve el XLSX
            if ($isWindows) {
                    $writer = new Xlsx($spreadsheet);
                    return response()->streamDownload(function () use ($writer) {
                        $writer->save('php://output');
                    }, "SolicitudLoow_{$id}.xlsx", [
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
                'Content-Disposition' => "attachment; filename=\"PMN-04_F-03_Dictamen_de_baja_de_equipos_y_herramientas_NR01_{$id}.pdf\"",
            ]);

        } catch (\Exception $e) {
            return response()->json(['status' => 'error', 'message' => $e->getMessage()], 500);
        }
    }

    
}
