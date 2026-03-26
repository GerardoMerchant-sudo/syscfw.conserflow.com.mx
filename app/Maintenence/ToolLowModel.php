<?php

namespace App\Maintenence;

use Illuminate\Database\Eloquent\Model;

class ToolLowModel extends Model
{
    protected $fillable = [
        'folio',
        'date',
        'equipment_name',
        'general_characteristics',
        'brand',
        'model',
        'internal_code',
        'serial_number',
        'physical_verification',
        'functional_verification',
        'corrective_maintenance',
        'reason',
        'decommission_type',
        'reusable_parts_description',
    ];
    protected $table = 'toollow';
}
