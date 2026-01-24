<?php

namespace App;

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
        'validity',
        'hours',
        'level',
        'modality',
        'folio',
        'instructor',
        'evaluation_method',
        'period',
        'file_path',
        'observations'
    ];

    public function empleado()
    {
        return $this->belongsTo(Empleado::class, 'empleado_id');
    }
}
