<template>
    <main class="main">
        <div> 
            <div class="card mx-3 mt-3">
                <div class="card-header d-flex align-items-center">
                    <i class="fas fa-check-square fa-2x text-primary mr-2"></i>
                    <span class="h5 mb-0">
                        {{ retrieveProcedure[0]?.nameProcedure }}
                    </span>
                    <div class="ml-auto">
                        <button class="btn btn-primary rounded-pill" @click="back()">
                            <i class="fas fa-arrow-left mr-2"></i>
                            REGRESAR
                        </button>
                        <button class="btn btn-primary rounded-pill mr-2" @click="qualify()">
                            <i class="fas fa-user-check mr-2"></i>
                            REGISTRAR CALIFICACIÓN
                        </button>
                    </div>
                </div>
                <div class="card-body">
                    <vue-element-loading :active="procedurePQR_loading"/>
                    <v-client-table
                    :columns="columns"
                    :data="retrieveProcedure"
                    :options="options"
                    ref="myTable"
                    >
                       <template slot="appliTest" slot-scope="{ row }">
                            <div v-if="row.appliTest">
                                <div v-for="(line, index) in formatAppliTest(row.appliTest)" :key="index"
                                    class="applitest-item">
                                    ▪️ {{ line }}
                                </div>
                            </div>
                            <span v-else class="text-muted">—</span>
                        </template>
                    </v-client-table>
                </div>

                <div class="container">
                    <div class="section-header mb-4 ml-3">
                        <span class="badge bg-secondary mb-2">
                            WPQ
                        </span>
                        <h6 class="text-uppercase fw-bold">
                            CALIFICACIONES DE RENDIMIENTO DEL OPERADOR DE SOLDADURA 
                        </h6>
                    </div>
                    <div class="card-body">
                        <vue-element-loading :active="procedureWPQ_loading"/>
                        <v-client-table
                        :columns="columnWPQ"
                        :data="retrieveWPQ"
                        :options="optionsWPQ"
                        ref="myTable"
                        >
                        <template slot="id" slot-scope="props">
                        <div class="btn-group" role="group">
                            <div class="btn-group dropup" role="group">
                                <button 
                                    id="btnGroupDrop1" 
                                    type="button" 
                                    class="btn btn-outline-dark dropdown-toggle" 
                                    data-toggle="dropdown" 
                                    aria-haspopup="true" 
                                    aria-expanded="false">
                                    <i class="fas fa-grip-horizontal"></i>
                                </button>
                                <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                    <template>
                                        <button 
                                        v-if="props.row.filePathWPQ"
                                        class="dropdown-item text-primary"
                                        @click="downloadWPQ(props.row.id)">
                                        <i class="fas fa-file-download text-primary"></i> Descargar WPQ
                                    </button>
                                        <button
                                        type="button" 
                                        class="dropdown-item text-primary"
                                        @click="qualify(props.row.id)"
                                        >
                                            <i class="fas fa-user-edit text-primary"></i>Actualizar</button>
                                        <button
                                        type="button" 
                                        class="dropdown-item text-danger"
                                        @click="deleteQualification(props.row.id)"
                                        >
                                            <i class="fas fa-trash-alt text-danger"></i>Eliminar</button>
                                    </template>
                                </div>
                            </div>
                        </div>
                    </template>
                        </v-client-table>
                </div>
            </div>
            </div>
        </div>
        <div v-if="seeModalStaff" class="modal fade" tabindex="-1" :class="{ 'mostrar': seeModalStaff }" role="dialog"
            aria-labelledby="myModalLabel" style="display: none;" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div>
                        <div class="modal-header custom-header">
                            <div class="header-left">
                                <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                </div>
                                <div class="header-text">
                                    {{isEdit ? 'EDITAR CALIFICACIÓN' : 'REGISTRAR CALIFICACIÓN'}}
                                </div>
                                <span class="badge custom-badge">
                                    WPQ
                                </span>
                            </div>
                            <button type="button" class="close custom-close" @click="closeModalStaff()"
                                aria-label="Close">
                                <i class="fas fa-times-circle"></i>
                            </button>
                        </div>
                <div class="modal-body">
                    <div>
                        <div class="row mb-3">
                            <div class="col">
                                <div class="form-floating">
                                    <select
                                    :disabled="currentQualificationId !== null"
                                    class="form-select rounded-pill"
                                    name="staff"
                                    v-validate="'required'"
                                    data-vv-as="SOLDADOR"
                                    id="staffSelect"
                                    style="cursor: pointer;"
                                    v-model="form.empleado_id"
                                    >
                                    <option value="" disabled>Seleccione un empleado</option>
                                    <option 
                                    v-for="employees in listEmployee" 
                                    :key="employees.id" 
                                    :value="employees.id">
                                    {{ employees.full_name }}
                                </option>
                                </select>
                                <label for="staffSelect">Selecione Empleado</label>
                                <span class="text-danger">{{ errors.first('staff')}}</span>
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-floating">
                                    <input
                                    name="welderCode"
                                    v-validate="'required'"
                                    data-vv-as="CÓDIGO DE SOLDADOR"
                                    type="text"
                                    class="form-control uppercase rounded-pill"
                                    id="welderCodeInput"
                                    placeholder="CÓDIGO DE SOLDADOR"
                                    v-model="form.welderCode"
                                    >
                                    <label for="welderCodeInput">CÓDIGO DE SOLDADOR</label>
                                    <span class="text-danger">{{ errors.first('welderCode') }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col">
                                <div class="form-floating">
                                    <input
                                    name="testPosition"
                                    v-validate="'required'"
                                    data-vv-as="POSICIÓN DE PRUEBA"
                                    type="text"
                                    class="form-control uppercase rounded-pill"
                                    id="testPositionInput"
                                    placeholder="POSICIÓN DE PRUEBA"
                                    v-model="form.testPosition"
                                    >
                                    <label for="testPositionInput">POSICIÓN DE PRUEBA</label>
                                    <span class="text-danger">{{ errors.first('testPosition') }}</span>
                                </div>
                            </div>
                                <div class="col">
                                    <div class="form-floating">
                                        <input 
                                        name="filePathWPQ"
                                        v-validate="'required'"
                                        data-vv-as="ARCHIVO WPQ"
                                        ref="filePathWPQ"
                                        class="form-control rounded-pill" 
                                        type="file"
                                        id="fileInput2"
                                        accept="application/pdf"
                                        >
                                        <strong class="text-secondary" for="fileInput2">CARGAR ARCHIVO PQW</strong>
                                        <span class="text-danger">{{ errors.first('filePathWPQ') }}</span>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                    <div class="modal-footer">
                            <button 
                                class="btn btn-primary mt-3 float-right rounded-pill" 
                                @click="saveQualification" 
                                :disabled="isLoading || !isFormValid">
                                <span v-if="isLoading">
                                    <span class="spinner-grow spinner-grow-sm me-2" role="status"
                                        aria-hidden="true"></span>
                                    {{ isEdit ? 'ACTUALIZANDO...' : 'GUARDANDO...' }}
                                </span>
                                <span v-else>
                                    {{ isEdit ? 'ACTUALIZAR CALIFICACIÓN' : 'GUARDAR CALIFICACIÓN' }}
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<script>
var config = require("../../Herramientas/config-vuetables-client").call(this)
export default{
    data:()=>{
        return {
            procedurePQR_loading: false,
            procedureWPQ_loading:false,
            currentQualificationId: null,
            procedure:null,
            seeModalStaff:false,
            isLoading:false,
            titleModalStaff:"",
            retrieveProcedure:[],
            columns:[
                'namePQR',
                'datePQR',
                'appliTest',
                'appliCode',
            ],
            options:{
                headings:
                {
                    'namePQR':'PQR',
                    'datePQR': 'FECHA ELABORACIÖN',
                    'appliTest':'PRUEBAS APLICABLES',
                    'appliCode':'CODIGO APLICABLE',
                },
                perPage: 10,
                perPageValues: [],
                skin: config.skin,
                sortIcon: config.sortIcon,
                filterByColumn: true,
                filterable: true,
                texts: config.texts
            },
            columnWPQ:[
                'fullName',
                'welderCode',
                'testPosition',
                'id'
            ],
            optionsWPQ:{
                headings:
                {
                    'fullName': 'SOLDADOR',
                    'welderCode': 'CÓDIGO DE SOLDADOR',
                    'testPosition': 'POSICIÓN DE PRUEBA',
                    'id': 'ACCIONES'
                },
                perPage: 10,
                perPageValues: [],
                skin: config.skin,
                sortIcon: config.sortIcon,
                filterByColumn: true,
                filterable: true,
                texts: config.texts
            },
            retrieveWPQ:[],
            form :{
                'empleado_id':null,
                'procedure_id':null,
                'welderCode':null,
                'testPosition':null,
            },
            listEmployee: []
        }
    },
    mounted(){
        this.init()
    },
    computed:{
        isEdit() {
            return this.currentQualificationId !== null
        },
        isFormValid(){
            return(
                this.form.empleado_id &&
                this.form.welderCode &&
                this.form.testPosition
            )
        }
    }, 

    methods: {
        async init() {
            const id = this.$route.params.id
            this.form.procedure_id = id
            await this.retrieve(id)
            await this.getEmployee()
            await this.retrieveAllWPQ(id)
        },

        async retrieve(id){
                this.procedurePQR_loading = true
            try {
                const response = await axios.get(`/procedure/${id}`)
                this.retrieveProcedure = [response.data]
            } catch (error) {
                toastr.error(error.response?.data?.message || 'Error al Cargar')
            }finally{
                this.procedurePQR_loading = false 
            }
        },

        //abir modal para que 
        qualify(id = null) {
            this.seeModalStaff = true

            if (id !== null) {
                this.currentQualificationId = id
                this.loadUser(id)
            } else {
                this.currentQualificationId = null
            }
        },

        closeModalStaff() {
            this.seeModalStaff = false
        },
        back() {
            this.$router.go(-1)
            },

        //crear una nueva calificación
        async saveQualification() {
            this.isLoading = true

            try {
                let isValid = await this.$validator.validate()
                if(!isValid) return
                const formData = new FormData()
                formData.append('empleado_id', this.form.empleado_id)
                formData.append('procedure_id', this.form.procedure_id)
                formData.append('welderCode', this.form.welderCode || '')
                formData.append('testPosition', this.form.testPosition || '')
                if (this.$refs.filePathWPQ?.files.length > 0) {
                    formData.append('filePathWPQ', this.$refs.filePathWPQ.files[0])
                }
                if (this.currentQualificationId) {
                    formData.append('_method', 'PUT')  
                    await axios.post(
                        `/procedure/qualification/${this.currentQualificationId}`,
                        formData,
                        {
                            headers: { 'Content-Type': 'multipart/form-data' }
                        }
                    )
                    toastr.success('Calificación actualizada correctamente')
                }
            else {
                    const alreadyExists = this.retrieveWPQ.some(
                        wpq => wpq.empleado_id === this.form.empleado_id
                    )
                    if (alreadyExists) {
                        toastr.error('Este empleado ya ha sido calificado')
                        return
                    }
                    await axios.post(
                        "/procedure/qualify",
                        formData,
                        {
                            headers: { 'Content-Type': 'multipart/form-data' }
                        }
                    )
                    toastr.success('Calificación registrada con éxito')
                }
                await this.retrieveAllWPQ(this.form.procedure_id)
                this.closeModalStaff()
                this.resetForm()
            } catch (error) {
                toastr.error(error.response?.data?.message || 'Error al guardar')
            } finally {
                this.isLoading = false
            }
        },
        resetForm(){
            this.form = {
                empleado_id: null,
                procedure_id: this.$route.params.id,
                welderCode: null,
                testPosition: null,
            }
        },

        async loadUser(id){
            try {
                const response = await axios.get(`/procedure/qualifications/${this.form.procedure_id}`)

                const wpq = response.data.find(item => item.id === id)

                this.form = {
                    empleado_id: wpq.empleado_id,
                    procedure_id: wpq.procedure_id,
                    welderCode: wpq.welderCode,
                    testPosition: wpq.testPosition,
                    fullName: wpq.fullName
                }

            } catch (error) {
                toastr.error('Error al cargar calificación')
            }
        },

        async getEmployee() {
            try {
                const response = await axios.get("/procedure/employee") 
                this.listEmployee = response.data
            } catch (error) {
                toastr.error(error.response?.data?.message || 'Error al Cargar Empleados')
            }
        },

        async retrieveAllWPQ(id){
            this.procedureWPQ_loading = true
            try {
                const response = await axios.get(`/procedure/qualifications/${id}`)
                this.retrieveWPQ = response.data
            } catch (error) {
                toastr.error(error.response?.data?.message || 'Error al Cargar WPQ')
            }finally{
                this.procedureWPQ_loading = false
            }
        },
           // Método para descargar WPQ
        downloadWPQ(id) {
            window.open(`/procedure/download/wpq/${id}`, '_blank');
        },
        //eliminar una calificación
        async deleteQualification(id) {
            if (!confirm('¿Estás seguro de eliminar esta calificación?')) {
                return
            }
            try {
                await axios.delete(`/procedure/qualification/delete/${id}`)
                toastr.success('Calificación eliminada correctamente')
                await this.retrieveAllWPQ(this.form.procedure_id)
            } catch (error) {
                toastr.error(error.response?.data?.message || 'Error al eliminar calificación')
            }
        },
         formatAppliTest(value) {
        return value
            .split('\n')
            .map(v => v.trim())
            .filter(v => v.length)
    }

    }
}
</script>
<style scoped>

.uppercase {
    text-transform: uppercase;
}
.custom-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 22px;
    background: linear-gradient(135deg, #1f2933, #111827);
    color: white;
    border-bottom: none;
    box-shadow: 0 4px 10px rgba(0,0,0,0.15);
}

.header-left {
    display: flex;
    align-items: center;
    gap: 14px;
}

.stars {
    display: flex;
    gap: 3px;
    color: #fbbf24;
    font-size: 20px;
}

.header-text {
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 0.4px;
}

.custom-badge {
    background: rgba(255,255,255,0.12);
    color: white;
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
    backdrop-filter: blur(6px);
}

.custom-close {
    color: rgba(255,255,255,0.7);
    font-size: 22px;
    transition: all 0.2s ease;
}

.custom-close:hover {
    color: #f87171;
    transform: scale(1.1);
}
.applitest-item {
    font-size: 13px;
    padding: 2px 0;
    line-height: 1.4;
}

.applitest-item {
    font-size: 13px;
    padding: 4px 8px;
    border-radius: 6px;
    background: #f8f9fa;
    margin-bottom: 4px;
}

</style>