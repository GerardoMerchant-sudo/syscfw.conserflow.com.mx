<?php

namespace App\Http\Controllers\Calidad;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\CalidadModels\ProcedureModels;
use App\RHModels\Empleado;

class ProcedureController extends Controller
{
    public function index()
    {
        return ProcedureModels::all();
    }  

    private function storeFile($request, $field)
    {
        if (!$request->hasFile($field)) {
            return null;
        }
        $file = $request->file($field);
        $fileName = time().'_'.$file->getClientOriginalName();
        return $file->storeAs('Calidad/Procedure', $fileName);
    }


    public function store(Request $request)
    {
        $filePathWPS = null;
        $filePathPQR = null;
        //$filePathWPQ = null;

        $filePathWPS = $this->storeFile($request, 'filePathWPS');
        $filePathPQR = $this->storeFile($request, 'filePathPQR');
        //$filePathWPQ = $this->storeFile($request, 'filePathWPQ');
        
        $procedure = ProcedureModels::create([
        'nameProcedure'  => mb_strtoupper($request->nameProcedure,'UTF-8'),
        'dateElab'       => empty($request->dateElab) ? null : $request->dateElab,
        'datePQR'        => empty($request->datePQR)  ? null : $request->datePQR,
        'weldingProcess' => mb_strtoupper($request->weldingProcess,'UTF-8'),
        'baseMetal'      => mb_strtoupper($request->baseMetal,'UTF-8'),
        'slot'           => mb_strtoupper($request->slot,'UTF-8'),
        'filletWelding'  => mb_strtoupper($request->filletWelding,'UTF-8'),
        'fillerMetal'    => mb_strtoupper($request->fillerMetal,'UTF-8'),
        'namePQR'        => mb_strtoupper($request->namePQR,'UTF-8'),
        'appliTest'      => mb_strtoupper($request->appliTest,'UTF-8'),
        'appliCode'      => mb_strtoupper($request->appliCode,'UTF-8'),
        'filePathWPS'    => $filePathWPS,
        'filePathPQR'    => $filePathPQR,
        //'filePathWPQ'    => $filePathWPQ,
    ]);

        return response()->json($procedure, 201);
    }


    public function update(Request $request, $id)
        {
            // 1. Buscamos el registro primero
            $procedure = ProcedureModels::findOrFail($id);

            // 2. Preparamos los datos de texto
            $data = [
                'nameProcedure'  => mb_strtoupper($request->nameProcedure,'UTF-8'),
                'dateElab'       => $request->dateElab, // No uses mb_strtoupper en fechas
                'weldingProcess' => mb_strtoupper($request->weldingProcess,'UTF-8'),
                'baseMetal'      => mb_strtoupper($request->baseMetal,'UTF-8'),
                'slot'           => mb_strtoupper($request->slot,'UTF-8'),
                'filletWelding'  => mb_strtoupper($request->filletWelding,'UTF-8'),
                'fillerMetal'    => mb_strtoupper($request->fillerMetal,'UTF-8'),
                'namePQR'        => mb_strtoupper($request->namePQR,'UTF-8'),
                'datePQR'        => $request->datePQR,
                'appliTest'      => mb_strtoupper($request->appliTest,'UTF-8'),
                'appliCode'      => mb_strtoupper($request->appliCode,'UTF-8'),
            ];

            // 3. Manejo de archivos inteligente
            // Solo actualizamos la ruta si el usuario subió un archivo nuevo
            if ($request->hasFile('filePathWPS')) {
                // Opcional: Eliminar archivo físico anterior aquí si deseas
                $data['filePathWPS'] = $this->storeFile($request, 'filePathWPS');
            }

            if ($request->hasFile('filePathPQR')) {
                $data['filePathPQR'] = $this->storeFile($request, 'filePathPQR');
            }

          

            // 4. Actualizamos solo lo que cambió
            $procedure->update($data);

            return response()->json($procedure, 202);
        }

    public function show($id){
        return response()->json(
            ProcedureModels::findOrFail($id)
        );
    }

    // Descargar archivos WPS y PQR
    public function downloadWPS($id){
        try {
            $procedure = ProcedureModels::findOrFail($id);
            $fileNameWPS = basename($procedure->filePathWPS);
            $pathWPS = storage_path('app/Calidad/Procedure/'.$fileNameWPS);
            
            if(!file_exists($pathWPS)){
                return response()->json(['message' => 'Archivo no encontrado'], 404);
            }
            return response()->download(
                $pathWPS,
                $fileNameWPS,
                [
                    'content-type' => 'application/pdf',
                    'content-disposition' => 'inline; filename="'.$fileNameWPS.'"'
                ]
            );
        } catch (\Exception $e) {
            Utilidades::errors($e);
            return view('errors.500');
        }
    }

    // Descargar PQR
    public function downloadPQR($id){
        try {
            $procedure = ProcedureModels::findOrFail($id);
            $fileNamePQR = basename($procedure->filePathPQR);
            $pathPQR = storage_path('app/Calidad/Procedure/'.$fileNamePQR);
            
            if(!file_exists($pathPQR)){
                return response()->json(['message' => 'Archivo no encontrado'], 404);
            }
            return response()->download(
                $pathPQR,
                $fileNamePQR,
                [
                    'content-type' => 'application/pdf',
                    'content-disposition' => 'inline; filename="'.$fileNamePQR.'"'
                ]
            );
        } catch (\Exception $e) {
            Utilidades::errors($e);
            return view('errors.500');
        }
    }

    

    //Traer empleados para calificar
    public function employee(){
        $procedure = Empleado::select(
            'id',
            'puesto_id',
            \DB::raw("CONCAT(nombre, ' ', ap_paterno, ' ', ap_materno) as full_name"))
            ->whereIn('puesto_id', [44,51,92,97,100,108,112,138,145,155])
            ->orderByRaw("CONCAT(nombre, ' ', ap_paterno, ' ', ap_materno) ASC")
            ->get();
        return response()->json($procedure, );
    }


    // Calificar empleado para WPQ
  public function qualifyEmployee(Request $request)
{
    $request->validate([
        'empleado_id'  => 'exists:empleados,id',
        'procedure_id' => 'exists:procedures,id',
        'welderCode'   => 'string|nullable',
        'testPosition' => 'string|nullable',
        'filePathWPQ'  => 'file|mimes:pdf|nullable'
    ]);

    $data = [
        'welderCode'   => mb_strtoupper($request->welderCode),
        'testPosition' => mb_strtoupper($request->testPosition),
        'updated_at'   => now(),
    ];

    // ✅ Cada empleado guarda SU PDF
    if ($request->hasFile('filePathWPQ')) {
        $data['filePathWPQ'] = $this->storeFile($request, 'filePathWPQ');
    }

    \DB::table('procedure_employee')->updateOrInsert(
        [
            'empleado_id'  => $request->empleado_id,
            'procedure_id' => $request->procedure_id,
        ],
        $data + ['created_at' => now()]
    );

    return response()->json([
        'message' => 'Empleado calificado exitosamente'
    ], 201);
}


    //elimar un procedimiento con todos los empleados calificados para ese procedimiento
    public function destroy($id)
    {
        $procedure = ProcedureModels::findOrFail($id);
        $procedure->delete();

        // Eliminar calificaciones relacionadas
        \DB::table('procedure_employee')->where('procedure_id', $id)->delete();

        return response()->json(['message' => 'Procedimiento eliminado correctamente'], 200);
    }

    // Recuperar calificaciones WPQ para un procedimiento específico
    public function retrieveWPQ($id){
        $wpq = \DB::table('procedure_employee')
        ->join('empleados','procedure_employee.empleado_id','=','empleados.id')
        ->where('procedure_id', $id)
        ->select(
            'procedure_employee.*', 
            \DB::raw("CONCAT(empleados.nombre, ' ', empleados.ap_paterno, ' ', empleados.ap_materno) as fullName")
        )
        ->get();

        return response()->json($wpq);
    }

    
    public function updateWPQ(Request $request, $id)
    {
        try {

            $request->validate([
                'welderCode'   => 'string|nullable',
                'testPosition' => 'string|nullable',
                'filePathWPQ'  => 'file|mimes:pdf|nullable'
            ]);

            $qualification = \DB::table('procedure_employee')
                ->where('id', $id)
                ->first();

            if (!$qualification) {
                return response()->json(['message' => 'Calificación no encontrada'], 404);
            }

            $data = [
                'welderCode'   => mb_strtoupper($request->welderCode),
                'testPosition' => mb_strtoupper($request->testPosition),
                'updated_at'   => now(),
            ];

            if ($request->hasFile('filePathWPQ')) {

                if ($qualification->filePathWPQ && \Storage::exists($qualification->filePathWPQ)) {
                    \Storage::delete($qualification->filePathWPQ);
                }
                $data['filePathWPQ'] = $this->storeFile($request, 'filePathWPQ');
            }
            \DB::table('procedure_employee')
                ->where('id', $id)
                ->update($data);

            return response()->json(['message' => 'Actualizado correctamente'], 202);

        } catch (\Exception $e) {
            Utilidades::errors($e);
            return response()->json(['message' => 'Error al actualizar'], 500);
        }
    }

    //eliminar calificación WPQ
    public function deleteQualification($id){
        $deleted = \DB::table('procedure_employee')->where('id', $id)->delete();

        if ($deleted) {
            return response()->json(['message' => 'Calificación eliminada correctamente'], 200);
        } else {
            return response()->json(['message' => 'Calificación no encontrada'], 404);
        }  
    }
    //descargar WPQ
   public function downloadWPQ($id)
{
    try {

        // ✅ Buscar la calificación, NO el procedimiento
        $qualification = \DB::table('procedure_employee')
            ->where('id', $id)
            ->first();

        if (!$qualification || !$qualification->filePathWPQ) {
            return response()->json(['message' => 'Archivo no encontrado'], 404);
        }

        $fileNameWPQ = basename($qualification->filePathWPQ);
        $pathWPQ = storage_path('app/'.$qualification->filePathWPQ);

        if (!file_exists($pathWPQ)) {
            return response()->json(['message' => 'Archivo no encontrado'], 404);
        }

        return response()->download(
            $pathWPQ,
            $fileNameWPQ,
            [
                'content-type' => 'application/pdf',
                'content-disposition' => 'inline; filename="'.$fileNameWPQ.'"'
            ]
        );

    } catch (\Exception $e) {
        Utilidades::errors($e);
        return response()->json(['message' => 'Error al descargar archivo'], 500);
    }
}


}
