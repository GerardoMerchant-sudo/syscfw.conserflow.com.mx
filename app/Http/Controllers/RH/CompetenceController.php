<?php

namespace App\Http\Controllers\RH;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\RHModels\CompetenceModel;
use App\RHModels\Empleado;
use Carbon\Carbon;

class CompetenceController extends Controller
{
    //Trae empleados que tienen competencias asignadas:

        public function index()
            {
                return Empleado::with('competences')
                ->select(
                    'id',
                    'condicion',
                    \DB::raw("CONCAT(nombre, ' ', ap_paterno, ' ', ap_materno) as full_name")
                )
                ->where('condicion', 1)
                ->whereHas('competences')
                ->get();
            }


    //Trae TODOS los empleados activos (tengan o no competencias):
    public function create()
    {
        $empleados = Empleado::select('id','condicion',\DB::raw("CONCAT(nombre, ' ', ap_paterno, ' ', ap_materno) as full_name"))
        ->where('condicion',1)
        //para ordenar de la A a la Z cuando esta concatenado
        ->orderByRaw("CONCAT(nombre, ' ', ap_paterno, ' ', ap_materno) ASC")
        ->get();
        return response()->json($empleados);
    }

    public function retrieveEmployee($id){
        $empleado = Empleado::with('competences')
        ->select(
            'id',
            'condicion',
            'nombre',
            'ap_paterno',
            'ap_materno',
            \DB::raw("CONCAT(nombre, ' ', ap_paterno, ' ',ap_materno) as full_name")
        )
        ->where('id',$id)
        ->where('condicion', 1)
        ->first(); 

        if (!$empleado) {
            return response()->json([
                'message' => 'Empleado no encontrado',
                'id' => $id
            ], 404);
        }

        return response()->json($empleado);
    }


    private function createAndUpdate(Request $request){ 
        $type = [
            'CERTIFICATION' =>  'Certificación',
            'COURSE'        =>  'Curso',
            'DIPLOMA'       =>  'Diplomado',
            'EXPERIENCE'    =>  'Experiencia Laboral',
        ];
        $rules = [
            'empleado_id'       => 'required|exists:empleados,id',
            'type'              => 'required|in:CERTIFICATION,COURSE,DIPLOMA,SKILL,EXPERIENCE',
            'nameCompetence'    => 'required|string|max:255',
            'certificado'       => 'nullable|file|mimes:pdf'  
        ];

        switch ($request->type) {
            case 'CERTIFICATION':
                $rules += [
                    'folio'           => 'required|string',
                    'institution'     => 'required|string',
                    'instructor'      => 'string',
                    'startDate'       => 'required|date',
                    'endDate'         => 'date',
                    'hours'           => 'required|integer',
                    'worker_category' => 'required|max:100',
                ];
                break;
            case 'COURSE':
                $rules += [
                    'institution'   =>  'required|string',
                    'hours'         =>  'integer',
                    'startDate'     =>  'required|date',
                    'modality'      =>  'string',
                    'description'   =>  'string',
                    ];
                    break;
            case 'DIPLOMA':
                $rules += [
                    'institution' => 'required|string|max:255',
                    'startDate'   => 'required|date',
                    'endDate'     => 'required|date|after_or_equal:startDate',
                    'hours'       => 'required|integer',
                    'description' => 'string',
                    'certificate_type' => 'string',
                    'modality'    =>  'string',
                ];
                break;
            break;
            case 'EXPERIENCE':
                $rules += [
                    'description'       => 'required|string',
                    'facility'          =>  'required|string',
                    'worker_category'   => 'required|string',
                    'period'            => 'required|string',
                    'institution'       =>  'required|string',
                    'proyect'           =>  'required|string',
                ];
            break;
        }
        $data = $request->validate($rules);
        
        $data['type'] = $type[$request->type];

        if ($request->type === 'EXPERIENCE') {
        $data['startDate'] = Carbon::now()->format('Y-m-d'); 
    }
        if($request->hasFile('certificado')){
            $data['_has_file'] = true;
        }

        return $data;
    }


    public function store(Request $request)
    {
        $data = $this->createAndUpdate($request);

        if ($request->hasFile('certificado')) {
            $file = $request->file('certificado');
            $fileName = $fileName = time() . '_' . $file->getClientOriginalName();
            $data['file_path'] = $file->storeAs('RH/competence', $fileName);
        }
        unset($data['_has_file']);

        $competence = CompetenceModel::create($data);
            return response()->json($competence, 201);
        
            
        }
    
    public function update(Request $request, $id){
        $competence = CompetenceModel::findOrFail($id);
        $data = $this->createAndUpdate($request);

        if($request->hasFile('certificado')){
            if($competence->file_path && \Storage::exists($competence->file_path)){
                \Storage::delete($competence->file_path);
            }

            $file = $request->file('certificado');
            $fileName = $fileName = time() . '-' . $file->getClientOriginalName();
            $data['file_path'] = $file->storeAs('RH/competence', $fileName);
        }
        unset($data['_has_file']);
        $competence->update($data);

        return response()->json($competence);

    }

    public function show($id)
    {
        return response()->json(
            CompetenceModel::findOrFail($id)
        );
    }

        function download($nombre)
        {
            try {
                $fileName = basename($nombre);
                $path = storage_path('app/RH/competence/' . $fileName);

                if (!file_exists($path)) {
                    return view('errors.404');
                }

                return response()->download(
                    $path,
                    $fileName,
                    [
                        'Content-Type' => 'application/pdf',
                        'Content-Disposition' => 'inline; filename="'.$fileName.'"'
                    ]
                );
            } catch (\Exception $e) {
                Utilidades::errors($e);
                return view('errors.500');
            }
        }





    public function destroy($id)
    {
        $competence = CompetenceModel::findOrFail($id);
        $competence->delete();

        return response()->json(['message' => 'Competencia eliminada']);
    }


}
