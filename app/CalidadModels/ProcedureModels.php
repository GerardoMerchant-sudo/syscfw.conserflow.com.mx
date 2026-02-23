<?php

namespace App\CalidadModels;

use Illuminate\Database\Eloquent\Model;

class ProcedureModels extends Model
{
    protected $table = 'procedures';

    protected $fillable = [
        'nameProcedure',
        'dateElab',
        'datePQR',
        'weldingProcess',
        'baseMetal',
        'slot',
        'filletWelding',
        'fillerMetal',
        'namePQR',
        'appliTest',
        'appliCode',
        'filePathWPS',
        'filePathPQR'
    ];

    public function empleados()
    {
        return $this->belongsToMany(
            \App\RHModels\Empleado::class,
            'procedure_employee',
            'procedure_id',
            'empleado_id'
        )->withPivot('filePathWPQ','welderCode', 'testPosition')
        ->withTimestamps();
    }
}
