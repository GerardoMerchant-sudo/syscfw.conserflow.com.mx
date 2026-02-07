<template>
    <main class="main">
      <div class="">
        <div class="card mx-3 mt-3">
          <div class="card-header">
            <i class="fas fa-cogs fa-2x text-primary"></i>
            <span class="h5">Competencias de empleado</span>
            <button v-show="PermisosCRUD.Create" type="button" class="btn btn-primary float-right mt-1" @click="createCompetence">
                <i class="fas fa-plus mr-2"></i>Nueva Competencia</button>
            </div>
            <div class="card-body">
                <vue-element-loading :active="isObtenerCompetence_loading" />
                <v-client-table :columns="columns" :data="retrieveCompetence" :options="options" ref="myTable">
                    <template slot="id" slot-scope="props">
                        <div class="btn-group" role="group">
                            <div class="btn-group dropup" role="group">
                                <button id="btnGroupDrop1" type="button" class="btn btn-outline-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fas fa-grip-horizontal"></i>
                                </button>
                                <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                    <template>
                                        <button  type="button" class="dropdown-item" @click="RetrieveEmployee(props.row.id)">
                                            <i class="fas fa-diagnoses"></i>Detalles Empleado</button>
                                    </template>
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
import Utilerias from "../../../Herramientas/utilerias";

var config = require("../../../Herramientas/config-vuetables-client").call(this);
export default {
    data() {
        return {
            isObtenerCompetence_loading: false,
            columns: [
                'full_name',
                'id',
            ],
            retrieveCompetence: [],
            options: {
                headings:
                {
                    'full_name': 'Nombre del empleado',
                    "id": "Acciones",
                },
                perPage: 10,
                perPageValues: [],
                skin: config.skin,
                sortIcon: config.sortIcon,
                filterByColumn: true,
                filterable: ['full_name'],
                texts: config.texts
            },
            PermisosCRUD:{},
        };
    },
    mounted(){
        this.PermisosCRUD = Utilerias.getCRUD(this.$route.path)
        this.retrieve()
    },
    
    methods:{
        async retrieve(){
            this.isObtenerCompetence_loading = true
            try {
                const response = await axios.get('rh/competence')
                this.retrieveCompetence = response.data 
            } catch (error) {
                toastr.error(error.data.message)
            }finally{
                this.isObtenerCompetence_loading = false
            }
        },
            RetrieveEmployee(id){
            
            this.$router.push({name: 'RetrieveEmployee',params: { id }})
        },

        createCompetence() {
            this.$router.push('/rh/empleados/competence/competencias/createCompetencia')
        }


    },

};
</script>