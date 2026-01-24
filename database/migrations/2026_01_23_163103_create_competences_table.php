<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCompetencesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('competences', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('empleado_id');
            $table->string('type');
            $table->string('nameCompetence');
            $table->string('institution')->nullable();
            $table->date('startDate')->nullable();
            $table->date('endDate')->nullable();
            $table->string('validity')->nullable();
            $table->string('nameCertificate')->nullable();
            $table->unsignedInteger('empleado_registra_id');
            $table->timestamps();

            //foreing Keys

            $table->foreign('empleado_id')->references('id')->on('empleados');
            $table->foreign('empleado_registra_id')->references('id')->on('empleados');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('competences');
    }
}
