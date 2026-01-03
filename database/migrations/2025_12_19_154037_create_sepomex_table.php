<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSepomexTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sepomex', function (Blueprint $table) {
            $table->increments('id');
            $table->string('cp', 5)->index();
            $table->string('estado');
            $table->string('municipio');
            $table->string('ciudad')->nullable();
            $table->string('colonia');
            $table->string('tipo')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sepomex');
    }
}
