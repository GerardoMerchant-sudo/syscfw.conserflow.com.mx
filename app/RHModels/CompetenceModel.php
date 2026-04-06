<?php

namespace App\RHModels;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class CompetenceModel extends Model
{
    protected $table = 'competences';

    protected $fillable = [
        'empleado_id',
        'type',
        'nameCompetence',
        'institution',
        'description',
        'startDate',
        'endDate',
        'hours',
        'modality',
        'folio',
        'instructor',
        'worker_category',
        'project',
        'facility',
        'certificate_type',
        'period',
        'proyect',
        'file_path',
        'observations',
    ];

  
    protected $appends = ['validity'];

   public function getValidityAttribute()
    {
        // // Si NO hay ninguna fecha → SIN FECHA
        // if ($this->startDate === null && $this->endDate === null) {
        //     return 'SIN FECHA';
        // }

        // Solo endDate es null → vigente
        if ($this->endDate === null) {
            return 'VIGENTE';
        }

        $today = Carbon::today();
        $end   = Carbon::parse($this->endDate);

        if ($today->gt($end)) {
            return 'VENCIDO';
        }

        if ($today->diffInDays($end, false) <= 7) {
            return 'POR VENCER';
        }

        return 'VIGENTE';
    }

    public function empleado()
    {
        return $this->belongsTo(Empleado::class, 'empleado_id');
    }
}
