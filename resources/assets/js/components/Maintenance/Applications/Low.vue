<template>
    <main class="main">
        <div>
            <div class="card mx-3 mt-3 ">
                <div class="card-header d-flex align-items-center">
                    <i class="fas fa-angle-double-down fa-2x text-primary mr-2"></i>
                    <span class="h5 mb-0">Baja de Herramientas o Equipo </span>
                    <button class="btn btn-primary  ml-auto rounded-pill" @click="create">
                        <i class="fas fa-plus mr-2"></i>
                        Solicitud de Baja
                    </button>
                </div>
                <div class="card-body">
                <vue-element-loading :active="toolsTable_loading" />
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
                                    <button class="dropdown-item text-primary" >
                                        <i class="fas fa-bookmark text-primary"></i> Detalles
                                    </button>
                                    <button 
                                        @click="update(props.row.id)"
                                        class="dropdown-item text-primary"
                                        >
                                        <i class="fas fa-edit text-primary"></i> Actualizar
                                    </button>
                                    <button 
                                        class="dropdown-item text-danger"
                                        >
                                        <i class="fas fa-trash-alt text-danger"></i> Eliminar
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

export default {
    data(){
        return{
            retrieveAll:[],
            toolsTable_loading:false,
            columns:[
                'folio',
                'equipment_name',
                'brand',
                'model',
                'reason',
                'decommission_type',
                'serial_number',
                'id'
            ],
            options:{
                headings:{
                    'folio':'Folio',
                    'equipment_name':'Nombre del equipo o herramienta',
                    'brand':'Marca',
                    'model':'Modelo',
                    'reason':'Motivo de baja',
                    'decommission_type':'Tipo de baja',
                    'serial_number': 'N° serie', 
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
        update(id){
            this.$router.push({name:'UpdateLow', params:{id}})
        },
        create(){
            this.$router.push('/maintenance/createLow')
        },
        async retrieve(){
            this.toolsTable_loading = true
            try {
                const response = await axios.get('toolsLow')
                this.retrieveAll =  response.data
            } catch (error) {
                toastr.error(error.response?.data?.message || 'Error')
            }finally{
                this.toolsTable_loading = false
            }
        },
    }
}
</script>