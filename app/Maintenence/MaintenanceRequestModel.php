<?php

namespace App\Maintenence;

use Illuminate\Database\Eloquent\Model;

class MaintenanceRequestModel extends Model
{
    protected $fillable = [
        "requested_by",
        "request_date",
        "request_number",
        "request_time",
        "equipment_tool",
        "serial_number",
        "request_type",
        "problem_description",
        "authorized_by",
        "auth_date",
        "maintenance_type",
        "start_date",
        "end_date",
        "activities_to_perform",
        "damages_found",
        "changes_repairs",
        "spare_parts_used",
        "waste_generated",
        "observations",
        "performed_by",
        "supervised_by",
        "conformity_by",
        'responsible',
        'maintenanceDate',
    ];
    protected $table = "maintenance_request";
}
