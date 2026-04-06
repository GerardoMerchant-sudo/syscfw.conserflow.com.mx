<template>
    <main class="main">
        <div> 
            <div class="card mx-3 mt-3 ">
                <div class="card-header d-flex align-items-center">
                    <i class="fas fa-tools fa-2x text-primary mr-2"></i>
                    <span class="h5 mb-0">Mantenimiento de Equipos</span>
                    <button class="btn btn-primary  ml-auto rounded-pill" @click="create">
                        <i class="fas fa-plus mr-2"></i>
                        Solicitud de mantenimiento
                    </button>
                </div>
                <div class="card-body">
                    <vue-element-loading :active="maintenanceTable_loading" />
                    <v-client-table
                    :columns="columns"
                    :data="retrieveAll"
                    :options="options"
                    ref="myTable"
                    class="text-center"
                    >
                <template slot="id" slot-scope="props">
                    <div class="btn-group" role="group">
                    <div class="btn-group dropup" role="group">
                        <button 
                        id="btnGroupDrop1" 
                        type="button" 
                        class="btn btn-outline-dark dropdown-toggle rounded-pill" 
                        data-toggle="dropdown">
                        <i class="fas fa-grip-horizontal"></i>
                        </button>

                        <div class="dropdown-menu">
                        <button 
                            class="dropdown-item text-primary"
                            @click="descargarPDf(props.row.id)"
                            >
                            <i class="fas fa-file-excel text-primary"></i> Excel
                        </button>
                        <button 
                            class="dropdown-item text-primary"
                            @click="update(props.row.id)" 
                            >
                            <i class="fas fa-edit text-primary"></i> Actualizar
                        </button>
                        </div>
                    </div>
                    </div>
                </template>
                </v-client-table>
                </div>
            </div>    
        </div>
    </main>
</template>
<script>

var config = require('../../Herramientas/config-vuetables-client').call(this)
export default{
    data(){
        return{
            maintenanceTable_loading:false,
            retrieveAll: [],
            columns:[
            'requested_by',
            'request_date',
            'observations',
            'serial_number',
            'request_number',
            'id'
            ],
            options:{
                headings:{
                    'requested_by':'Requerido',
                    'request_date':'Fecha',
                    'observations':'Observaciones',
                    'serial_number': 'N° Serie',
                    'request_number': 'N° Solicitud',
                    'id':'Acciones'
                },
                perPage: 10,
                perPageValues: [],
                skin: config.skin,
                sortIcon: config.sortIcon,
                filterByColumn: true,
                filterable: true,
                texts: config.texts,
                
            }
        }
    },
    mounted(){
        this.init()
    },
    methods:{
        init(){
            this.retrieve()
        },
        create(){
            this.$router.push('/maintenance/create')
        },
        update(id){
            this.$router.push({name:'UpdateApp', params:{id}})
        },  
        async retrieve(){
            this.maintenanceTable_loading = true
            try {
                const res = await axios.get('maintenance')
                this.retrieveAll = res.data
            } catch (error) {
                toastr.error(error.response?.data?.message || 'Error al Cargar')
            }finally{
                this.maintenanceTable_loading = false
            }
        },
        descargarPDf(id){
            try {
                window.open(`maintenance/export/${id}`, '_blank')
            } catch (error) {
                toastr.error(error.response?.data?.message || 'Error al guardar')
            }
        }
    }

}
</script>