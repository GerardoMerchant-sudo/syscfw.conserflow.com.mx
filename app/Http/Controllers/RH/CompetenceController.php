<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\CompetenceModel;
use App\Empleado;

class CompetenceController extends Controller
{
    public function index()
    {
        return CompetenceModel::with('empleado:id,nombre,ap_paterno,ap_materno')->get();
    }

    public function create()
    {
        $empleados = Empleado::select('id', \DB::raw("CONCAT(nombre, ' ', ap_paterno, ' ', ap_materno) as full_name"))->get();
        return response()->json($empleados);
    }

    public function store(Request $request)
    {
        $request->validate([
            'empleado_id'     => 'required|exists:empleados,id',
            'type'            => 'required|in:CERTIFICATION,COURSE,DIPLOMA,SKILL,EXPERIENCE',
            'nameCompetence'  => 'required|string|max:255'
        ]);

        $competence = CompetenceModel::create($request->all());
        return response()->json($competence, 201);
    }

    public function edit($id)
    {
        $competence = CompetenceModel::findOrFail($id);
        $empleados = Empleado::select('id', \DB::raw("CONCAT(nombre, ' ', ap_paterno, ' ', ap_materno) as full_name"))->get();

        return response()->json([
            'competence' => $competence,
            'empleados' => $empleados
        ]);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'empleado_id'     => 'required|exists:empleados,id',
            'type'            => 'required|in:CERTIFICATION,COURSE,DIPLOMA,SKILL,EXPERIENCE',
            'nameCompetence'  => 'required|string|max:255'
        ]);

        $competence = CompetenceModel::findOrFail($id);
        $competence->update($request->all());

        return response()->json($competence);
    }

    public function destroy($id)
    {
        $competence = CompetenceModel::findOrFail($id);
        $competence->delete();

        return response()->json(['message' => 'Competencia eliminada']);
    }
}
