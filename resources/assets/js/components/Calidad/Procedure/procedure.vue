<template>
    <main class="main">
        <div> 
            <div class="card mx-3 mt-3 ">
                <div class="card-header d-flex align-items-center">
                    <i class="fas fa-tasks fa-2x text-primary mr-2"></i>
                    <span class="h5 mb-0">PROCEDIMIENTOS DE SOLDADURA</span>
                    <button v-show="PermisosCRUD.Create" class="btn btn-primary  ml-auto rounded-pill" @click="createProcedure">
                        <i class="fas fa-plus mr-2"></i>
                        REGISTRAR PROCEDIMIENTO
                    </button>
                </div>
                <div class="card-body">
                    <vue-element-loading :active="procedureTable_loading" />
                    <v-client-table
                    :columns="columns"
                    :data="retrieveProcedure"
                    :options="options"
                    ref="myTable"
                    class="text-center"
                    >
                    <template slot="h__dateElab">
                    <div class="text-center">
                        <div>FECHA</div>
                        <div>LABORACIÓN</div>
                    </div>
                    </template>

                <template slot="h__slot">
                <div class="text-center">
                    <div class="font-weight-bold">
                    RANGO DE ESPESOR
                    </div>
                    <div>
                    Ranura
                    </div>
                </div>
                </template>
                <template slot="h__filletWelding">
                <div class="text-center">
                    <div class="font-weight-bold">
                    RANGO DE ESPESOR
                    </div>
                    <div>
                    Filete
                    </div>
                </div>
                </template>
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
                        <button class="dropdown-item text-primary" @click="RetrievePQR(props.row.id)">
                            <i class="fas fa-check-double text-primary"></i> PQR
                        </button>
                        <button 
                            v-show="PermisosCRUD.Update"
                            class="dropdown-item text-primary"
                            @click="update(props.row.id)">
                            <i class="fas fa-edit text-primary"></i> Actualizar
                        </button>

                        <button 
                            v-show="PermisosCRUD.Delete"
                            class="dropdown-item text-danger"
                            @click="deleteProcedure(props.row.id)">
                            <i class="fas fa-trash-alt text-danger"></i> Eliminar
                        </button>
                        </div>
                    </div>
                    </div>

                    <div class="btn-group" role="group">
                    <div class="btn-group dropup" role="group">
                        <button 
                        v-show="PermisosCRUD.Download"
                        type="button" 
                        class="btn btn-outline-dark dropdown-toggle"
                        data-toggle="dropdown">
                        <i class="fas fa-file-download"></i>
                        </button>

                        <div class="dropdown-menu">
                        <button 
                            v-if="props.row.filePathWPS"
                            class="dropdown-item text-primary"
                            @click="downloadWPS(props.row.id)">
                            <i class="fas fa-file-download text-primary"></i> Descargar WPS
                        </button>

                        <button 
                            v-if="props.row.filePathPQR"
                            class="dropdown-item text-primary"
                            @click="downloadPQR(props.row.id)">
                            <i class="fas fa-file-download text-primary"></i> Descargar PQR
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
import utilerias from "../../Herramientas/utilerias";
var config = require("../../Herramientas/config-vuetables-client").call(this)
export default{
    data:()=>{
        return {
            PermisosCRUD:{},
            procedureTable_loading:false,
            retrieveProcedure:[],
            columns:[
                'nameProcedure',
                'dateElab',
                'weldingProcess',
                'baseMetal',
                'slot',
                'filletWelding',
                'fillerMetal',
                'id'
            ],
            options:{
                headings:
                {
                    'nameProcedure': 'WPS',
                    'dateElab':'FECHA LABORACION',
                    'weldingProcess': 'PROCESO',
                    'baseMetal': 'METAL BASE',
                    'slot': ' RANURA',
                    'filletWelding': 'FILETE',
                    'fillerMetal':'METAL APORTE',
                    'id': 'Acciones'
                },
                perPage: 10,
                perPageValues: [],
                skin: config.skin,
                sortIcon: config.sortIcon,
                filterByColumn: true,
                filterable: true,
                texts: config.texts,
                
            },
        }
    },
    mounted(){
        this.init()
    },
    methods: {
        init() {
            this.retrieve()
            this.PermisosCRUD = utilerias.getCRUD(this.$route.path)
        },
        async retrieve(){
            this.procedureTable_loading = true
            try {
                const response = await axios.get('/procedure/')
                this.retrieveProcedure = response.data
            } catch (error) {
                toastr.error(error.response?.data?.message || 'Error al Cargar')
            }finally{
                this.procedureTable_loading = false
            }
        },
        RetrievePQR(id){
            this.$router.push({name:'RetrievePQR', params:{id}})
        },
        createProcedure() {
            this.$router.push('/calidad/procedure/create')
        },
        update(id){
            this.$router.push({name:'UpdateProcedure', params:{id}})
        },
        async deleteProcedure(id){
            if (confirm('¿Está seguro de eliminar este procedimiento?')) {
                try {
                    await axios.delete(`/procedure/${id}`)
                    toastr.success('Procedimiento eliminado exitosamente')
                    this.retrieve()
                } catch (error) {
                    toastr.error(error.response?.data?.message || 'Error al eliminar')
                }
            }
        },
        // Método para descargar WPS
        downloadWPS(id) {
            window.open(`/procedure/download/wps/${id}`, '_blank');
        },
        // Método para descargar PQR
        downloadPQR(id) {
            window.open(`/procedure/download/pqr/${id}`, '_blank');
        },

        //modal para registrar un soldador

     

    }
}
</script>   
