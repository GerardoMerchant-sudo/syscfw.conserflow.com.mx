<?php

namespace App\Http\Controllers\Maintenance;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Maintenence\ToolLowModel;

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
}
