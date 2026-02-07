    <template>
        <main class="main">
            <div class="">
                <div class="card mx-3 mt-3">
                    <div class="card-header">
                        <i class="fas fa-user fa-2x text-primary"></i>
                        <span class="h5"> {{retrieveEmployee.full_name }}</span>
                        <button type="button" class="btn btn-primary float-right mr-2" @click="back"><i
                                class="fas fa-arrow-left mr-2"></i>Atrás</button>
                    </div>
                    <div class="card-body">
                        <!-- <strong class="opacity-25">Total de competencias: {{ retrieveAll.length }}</strong> -->
                        <v-client-table :columns="columns" :data="retrieveAll" :options="options"  :key="retrieveAll.length" ref="myTable">
                        <template slot="id" slot-scope="props">
                            <div class="btn-group" role="group">
                                <div class="btn-group dropup" role="group">
                                    <button id="btnGroupDrop1" type="button" class="btn btn-outline-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="fas fa-grip-horizontal"></i>
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                        <template>
                                            <button  type="button" class="dropdown-item"   @click="openEdit(props.row.id)">
                                                <i class="fas fa-pencil-square fa-lg text-primary"></i>Actualizar</button>
                                        </template>
                                        <template>
                                            <button  type="button" class="dropdown-item" @click="deleteCompetence(props.row.id)">
                                                <i class="fas fa-trash  fa-lg text-danger"></i>Eliminar</button>
                                        </template>
                                    </div>
                                </div>
                            </div>
                        </template>
                            <template slot="file_path" slot-scope="props">
                                <div class="text-center">
                                    <template v-if="props.row.file_path">
                                        <button class="btn btn-outline-dark"
                                            @click="download(props.row.file_path)">
                                            <i class="fas fa-download"></i>
                                        </button>
                                    </template>
                                    <template v-else>
                                        <button class="btn btn-outline-dark">N/D</button>
                                    </template>
                                </div>
                            </template>
                            <template slot="worker_category" slot-scope="props">
                               <span>
                                    {{ getNombrePuesto(props.row.worker_category) }}
                                </span>
                            </template>
                            <template slot="institution" slot-scope="props">
                                <span>
                                    {{ props.row.institution ? props.row.institution : 'N/A' }}
                                </span>
                            </template>
                        <template slot="validity" slot-scope="props">
                        <button v-if="props.row.validity=='VIGENTE'" class="btn btn-outline-success">
                            <i class="fas fa-check mr-1"></i>VIGENTE
                        </button>
                        <button v-if="props.row.validity=='POR VENCER'" class="btn btn-outline-warning">
                            <i class="fas fa-exclamation mr-1"></i>POR VENCER
                        </button>
                        <button v-if="props.row.validity=='VENCIDO'" class="btn btn-outline-danger">
                            <i class="fas fa-exclamation-triangle mr-1"></i>VENCIDO
                        </button>
                        <button v-if="props.row.validity=='SIN FECHA'" class="btn btn-outline-secondary">
                            <i class="fas fa-exclamation-triangle mr-1"></i>SIN FECHA   
                        </button>
                    </template>
                    </v-client-table>
                    </div>
                </div>
            </div>
        </main>
    </template> 
    <script>
import axios from "axios";
// import utilerias from "../../../Herramientas/utilerias";

var config = require("../../../Herramientas/config-vuetables-client").call(this);
    export default{
        data(){
            return {
                // PermisosCRUD:{},
                columns:[
                    'type',
                    'nameCompetence',
                    'worker_category',
                    'institution',
                    'startDate',
                    'validity',
                    'file_path',
                    'id'
                ],
                retrieveEmployee:{},
                retrieveAll:null,
                options:{
                    headings:
                    {
                        'type': 'Competencia',
                        'nameCompetence': 'Nombre',
                        'worker_category':'Categoria',
                        'institution': ' Institución',
                        'startDate': 'Fecha de registro',
                        'validity': 'Estatus',
                        'file_path': 'Documento',
                        'id': 'Acciones'
                    },
                    perPage: 10,
                    perPageValues: [],
                    skin: config.skin,
                    sortIcon: config.sortIcon,
                    filterByColumn: true,
                    filterable: ['type','nameCompetence','institution','startDate','validity','worker_category'],
                    texts: config.texts
                },
                list_puestos:[],

            }
        },
        mounted(){
           this.init()
        },
        methods: {
            async init(){
                await this.positio()
                const id = this.$route.params.id
                await this.retrieve(id)
            },

            async retrieve(id) {
                try {
                    const response = await axios.get(`/rh/competence/employee/${id}`)
                    this.retrieveEmployee = response.data
                    this.$set(this, 'retrieveAll', response.data.competences)

                } catch (error) {
                    toastr.error('Error al cargar competencias')
                }
            },
            download(filePath) {

                const fileName = filePath.split('/').pop(); 
                window.open(`/rh/competences/${fileName}`, '_blank');
            },
            openEdit(id) {
                this.$router.push({ name: 'updateCompetence', params: { id } })
            },
            back() {
            this.$router.go(-1)
            },
            deleteCompetence(id){
                if(!confirm('¿Estás seguro de eliminar esta competencia?'))
                return
                this.deleteC(id)
            },
            async deleteC(id) {
                try {
                    await axios.delete(`rh/competence/${id}`)
                    toastr.success('Competencia Eliminada Correctamente')

                    // Obtener el id del empleado desde la ruta
                    const employeeId = this.$route.params.id

                    // Recargar las competencias
                    await this.retrieve(employeeId)

                    // Verificar si no hay competencias
                    if (!this.retrieveAll || this.retrieveAll.length === 0) {
                        this.$router.go(-1)
                    }
                } catch (error) {
                    toastr.error('Error al eliminar esta competencia')
                }
            },
            createCompetence() {
            this.$router.push('/rh/empleados/competence/competencias/createCompetencia')
            },
            async positio(){
            try {
                const response = await axios.get("rh/catalogos/puestosnombre")
                this.list_puestos = response.data.puestos
            } catch (error) {
                toastr.error(error.data.message)
            }
        },
            getNombrePuesto(id) {
                const puesto = this.list_puestos.find(
                    p => String(p.id) === String(id)
                )
                return puesto ? puesto.nombre : 'N/A'
            }


        }
    }
    </script>