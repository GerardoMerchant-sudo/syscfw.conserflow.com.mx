<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class ImportSepomex extends Command
{
    /**
     * The name and signature of the console command.
     *
     * --truncate limpia la tabla antes de importar
     */
    protected $signature = 'sepomex:import {--truncate}';

    /**
     * The console command description.
     */
    protected $description = 'Importa el catálogo SEPOMEX desde CPdescarga.txt';

    public function handle()
    {
        $path = storage_path('app/sepomex/CPdescarga.txt');

        if (!file_exists($path)) {
            $this->error('Archivo CPdescarga.txt no encontrado');
            return;
        }

        if ($this->option('truncate')) {
            DB::table('sepomex')->truncate();
            $this->info('Tabla sepomex limpiada');
        }

        $handle = fopen($path, 'r');
        $batch  = [];
        $count  = 0;

        DB::beginTransaction();

        try {

            while (($line = fgets($handle)) !== false) {

                $data = explode('|', trim($line));

                // El archivo válido tiene mínimo 14 columnas
                if (count($data) < 14) {
                    continue;
                }

                $cp = $data[0];

                // Saltar encabezados y líneas inválidas
                if (!is_numeric($cp) || strlen($cp) !== 5) {
                    continue;
                }

                $batch[] = [
                    'cp'         => $cp,                           // d_codigo
                    'colonia'   => utf8_encode($data[1]),          // d_asenta
                    'tipo'      => utf8_encode($data[2]),          // d_tipo_asenta
                    'municipio' => utf8_encode($data[3]),          // D_mnpio
                    'estado'    => utf8_encode($data[4]),          // d_estado
                    'ciudad'    => utf8_encode($data[5]),          // d_ciudad
                    'zona'      => utf8_encode($data[13]),         // d_zona
                    'created_at'=> now(),
                    'updated_at'=> now(),
                ];

                if (count($batch) === 1000) {
                    DB::table('sepomex')->insert($batch);
                    $count += count($batch);
                    $batch = [];
                    $this->info("Insertados: {$count}");
                }
            }

            if (!empty($batch)) {
                DB::table('sepomex')->insert($batch);
                $count += count($batch);
            }

            DB::commit();
            fclose($handle);

            $this->info("✅ Importación finalizada correctamente");
            $this->info("📦 Total de registros insertados: {$count}");

        } catch (\Exception $e) {

            DB::rollBack();
            fclose($handle);

            $this->error('❌ Error durante la importación');
            $this->error($e->getMessage());
        }
    }
}
