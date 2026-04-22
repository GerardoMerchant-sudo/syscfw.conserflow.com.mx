<?php

namespace App\TIModels;

use Illuminate\Database\Eloquent\Model;
use MyCLabs\Enum\Enum;

class RequestChangesERPModel extends Model
{
    protected $fillable = [
    "requeSt_user_id",
    "area",
    "resquest_date",
    "position_id",
    "module_erp_id",
    "type_change" -> ENUM('Nueva Funcionalidad','Mejora','Corrección de Error'),
    "reason_request",
    "responsible_area"
    ];
    protected $table = 'request_changes';
}
