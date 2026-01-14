<template>
<main class="main">
        <div class="container-fluid">
           <div class="card shadow-sm" style="min-height: 80vh">
                <div class="card-header bg-white border-0 pb-0">
                    <h5 class="mb-0">
                        <i class="fa fa-file-text  mr-2 text-success"></i>
                        <strong>Reporte General de Compras</strong>
                    </h5>
                </div>
                <div class="card-body">
                <div class="d-flex justify-content-end border-top mb-4" style="border-top: 6px solid #000;"></div>

                <i class="fa fa-calendar  mr-2 text-primary"></i>
                <strong>Generar Reporte por Rango de Fechas</strong>
                <div class="row g-3 mb-4">

                    <div class="col-md-3">
                    <label class="text-muted small">Fecha inicial</label>
                    <input
                        type="date"
                        class="form-control"
                        v-model="dateStart"
                        @change="dateRange"
                    />
                </div>

                <div class="col-md-3">
                <label class="text-muted small">Fecha final</label>
                <input
                    type="date"
                    class="form-control"
                    v-model="dateEnd"
                    @change="dateRange"
                />
                </div>
                <div class="card-body">
                        <i class="fa fa-calendar  mr-2 text-primary"></i>
                        <strong>Generar Reporte por Periodos</strong>
                        <div class="dropdown float-sm mt-4">
                        <button
                            class="btn btn-secondary dropdown-toggle"
                            type="button"
                            data-toggle="dropdown"
                        >
                            {{ periodSelected ? nombrePeriodo : 'Seleccione periodo' }}
                        </button>

                        <div class="dropdown-menu">
                            <button
                                class="dropdown-item"
                                @click="seleccionarPeriodo(2, 2025)"
                            >
                                Febrero 2025
                            </button>

                            <button
                                class="dropdown-item"
                                @click="seleccionarPeriodo(8, 2025)"
                            >
                                Agosto 2025
                            </button>
                        </div>
                    </div>

                    </div>

                <div class="col-md-6">
                <label class="text-muted small">Proyectos</label>
                <v-select
                    label="nombre_corto"
                    multiple
                    :options="listaProyectos"
                    v-model="proyectos"
                />
                </div>
            </div>

            <div class="row mb-2">
                <div class="col-md-12">
                <div class="form-check">
                    <input
                    class="form-check-input"
                    type="checkbox"
                    id="defaultCheck1"
                    v-model="mostrarTodos"
                    @change="onToggleProyectos"
                    />
                    <label class="form-check-label text-muted" for="defaultCheck1">
                    Todos los proyectos
                    </label>
                </div>
                </div>

            </div>
            <button
            class="btn btn-success px-4 mb-4"
            @click="DescargarReporte()"
            >
            <i class="fas fa-file-excel mr-2"></i>
            Generar Reporte
            </button>
            </div>
        </div>
    </div>
</main>
</template>


<script>


var config = require('../../Herramientas/config-vuetables-client').call(this);
export default
{
    data()
    {
        return {
            listaProyectos: [],
            mostrarTodos:false,
            proyectos:[],
            dateStart: null,
            dateEnd: null,
            periods: [],
            selectedPeriod: null,
            anio: null,
            mes: null,
            yearSince: null,
            yearUntil: null,
            periodSelected: false, 
            periodEnd:null,
            periodStart:null
        }
    },

    mounted()
    {
        this.allProyects()

    },
        computed: {
            nombrePeriodo() {
                if (!this.mes || !this.anio) return ''
                return `${this.mes === 2 ? 'Febrero' : 'Agosto'} ${this.anio}`
            }
        },

    methods:
    {
        /**
         * Obtener todos los proyectos
         */
        // ObtenrProyectos()
        // {
        //     axios.get('generales/proyectos/asd').then(res =>
        //     {
        //         this.listaProyectos = res.data.proyectos;
        //     });
        // },

        
        // Obtener todos los proyectos
        async allProyects() {
            const res = await axios.get('generales/proyectos/asd')
            this.listaProyectos = res.data.proyectos;
            return res.data.proyectos
        },
        async onToggleProyectos(){
            if(this.mostrarTodos){
                this.proyectos = await this.allProyects()
            }else {
                this.proyectos= []
            }
        },

        //obtener proyectos por rangos de fecha

        async dateRange(){
            if(this.dateStart && this.dateEnd){
                if(new Date(this.dateStart) > new Date(this.dateEnd)){
                    alert('La fecha de inicio no puede ser posterior a la fecha de fin.')
                    this.dateEnd = ''
                    this.periodStart = null
                    this.periodEnd = null
                    this.periodSelected = false
                    this.mes = null
                    this.anio = null
                }
            }   

        this.$emit('date-range-selected', { start: this.dateStart, end: this.dateEnd });
            },

            //Obtener los proyectos por periodos
            
            setPeriodoActual(){
                const today = new Date()
                const currentMonth = today.getMonth() + 1
                const currentYear = today.getFullYear()

                this.anio = currentYear

                if(currentMonth >= 2 && currentMonth <= 7){
                    this.mes = 8 // agosto
                }else {
                    this.mes = 2 // febrero
                }

                this.ObtenrProyectos()
            },
            
            generatePeriods(){
                this.periods = []

                for(let year = this.yearSince; year <= this.yearUntil; year ++){
                    this.periods.push({
                        month : `Febrero ${year}`,
                        anio: year,
                        mes:2
                    })
                    this.periods.push({
                        month: `Agosto ${year}`,
                        anio: year,
                        mes: 8
                    })
                } 
            },
        seleccionarPeriodo(mes, anio) {
            this.mes = mes
            this.anio = anio
            this.periodSelected = true

            this.dateStart = null
            this.dateEnd = null
 
            if (mes === 2) {
                this.periodStart = `${anio - 1}-08-01`
                this.periodEnd = `${anio}-01-31`
            }

            if (mes === 8) {
                this.periodStart = `${anio}-02-01`
                this.periodEnd = `${anio}-07-31`
            }
        },


        DescargarReporte() {

            if (!this.proyectos || this.proyectos.length === 0) {
                toastr.warning('Seleccione un proyecto')
                return
            }

            const ids = this.proyectos.reduce((acc, p) => acc + `${p.id}&`, '')
            let url = "compras/reporte/generalcompras/" + ids

            // RANGO LIBRE
            if (this.dateStart && this.dateEnd) {
                url += `?inicio=${this.dateStart}&fin=${this.dateEnd}`
            }

            // PERIODO
            else if (this.periodStart && this.periodEnd) {
                url += `?inicio_p=${this.periodStart}&fin_p=${this.periodEnd}`
            }

            window.open(url, '_blank')

            // reset
            this.dateStart = null
            this.dateEnd = null
            this.periodStart = null
            this.periodEnd = null
            this.periodSelected = false
            this.proyectos = []
        }



    },
    
}
</script>
