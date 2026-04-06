<template>
    <main class="main">
        <div>
            <div>
                <div class="card mx-3 mt-3">
                    <div class="card-header">
                        <i class="fas fa-clipboard-check fa-2x text-primary"></i>
                        <span class="h5">{{ isEdit? 'EDITAR PROCEDIMIENTO DE SOLDADURA' : 'CREAR PROCEDIMIENTO DE SOLDADURA' }}</span>
                        <button type="button"  class="rounded-pill btn btn-primary float-right mt-1" @click="back">
                            <i class="fas fa-arrow-left mr-2"></i> REGRESAR
                        </button>
                    </div>
                    <div class="card-body">
                        <div class="container">
                            <div class="section-header mb-4">
                                <span class="badge bg-secondary mb-2">
                                    WPS
                                </span>
                                <h6 class="text-uppercase fw-bold">
                                    ESPECIFICACIONES DEL PROCEDIMIENTO DE SOLDADURA
                                </h6>
                            </div>
                            <div class="row mb-3">
                                <div class="col">
                                    <div class="form-floating mb-3">
                                        <input 
                                            name="nameProcedure"
                                            v-validate="'required'"
                                            data-vv-as="NOMBRE DEL PROCEDIMIENTO"
                                            class="form-control uppercase rounded-pill" 
                                            id="nameProcedure"
                                            placeholder="NOMBRE DEL PROCEDIMIENTO"
                                            v-model="form.nameProcedure"
                                            >
                                        <label for="nameProcedure">
                                        NOMBRE DEL PROCEDIMIENTO <strong style="color: red;">*</strong>
                                        </label>
                                        <span class="text-danger">{{ errors.first('nameProcedure') }}</span>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-floating mb-3">
                                        <input
                                        name="dateLab"
                                        v-validate="'required'"
                                        data-vv-as="FECHA DE ELABORACIÓN" 
                                        type="date"
                                        class="form-control rounded-pill"
                                        id="dateLab"
                                        v-model="form.dateElab"
                                        placeholder="FECHA DE ELABORACIÖN"
                                        >
                                        <label for="dateLab">FECHA DE ELABORACIÖN <strong style="color: red;">*</strong></label>
                                        <span class="text-danger">{{ errors.first('dateLab') }}</span>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-floating mb-3">
                                        <select
                                        name="weldingPro"
                                        v-validate="'required'"
                                        data-vv-as="PROCESO DE SOLDADURA"
                                        v-model="form.weldingProcess"
                                        id="weldingPro"
                                        class="form-select rounded-pill"
                                        style="cursor: pointer;"
                                        placeholder="PROCESO DE SOLDADURA"                                        
                                        >
                                        <option value="" disabled>Seleccione Proceso</option>
                                        <option value="GTAW">GTAW</option>
                                        <option value="SMAW">SMAW</option>
                                        <option value="GMAW">GMAW</option>
                                        </select>
                                        <label for="weldingPro">PROCESO DE SOLDADURA <strong style="color: red;">*</strong></label>
                                        <span class="text-danger">{{ errors.first('weldingPro') }}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-6">
                                    <div class="form-floating mb-3">
                                        <input
                                            name="metalBase"
                                            v-validate="'required'"
                                            data-vv-as="METAL BASE" 
                                            class="form-control uppercase rounded-pill" 
                                            id="metalBase"
                                            placeholder="METAL BASE"
                                            v-model="form.baseMetal"
                                            >
                                        <label for="metalBase">
                                        METAL BASE <strong style="color: red;">*</strong>
                                        </label>
                                        <span class="text-danger">{{ errors.first('metalBase') }}</span>
                                    </div>
                                    <div class="form-floating">
                                        <input
                                        name="fillerMetal"
                                        v-validate="'required'"
                                        data-vv-as="METAL DE APORTE"    
                                        type="text" 
                                        class="form-control uppercase rounded-pill my-5"
                                        id="fillerMetal"
                                        placeholder="METAL DE APORTE"
                                        v-model="form.fillerMetal"
                                        >
                                        <label for="fillerMetal">METAL DE APORTE <strong style="color: red;">*</strong></label>
                                        <span class="text-danger">{{ errors.first('fillerMetal') }}</span>
                                </div>
                                <div class="form-floating">
                                    <input
                                        name="filePathWPS"
                                        :v-validate=" isEdit ? '' : 'required'"
                                        data-vv-as="ARCHIVO WPS"
                                        ref="filePathWPS" 
                                        class="form-control rounded-pill "
                                        type="file" 
                                        accept="application/pdf rounded-pill" 
                                        id="fileInput"
                                    >
                                        <strong class="text-secondary" for="fileInput">
                                            CARGAR ARCHIVO WPS
                                            <strong v-if="!isEdit" style="color: red;">*</strong>
                                        </strong>
                                        <span class="text-danger">{{ errors.first('filePathWPS') }}</span>
                                </div>
                                </div>
                                
                                <div class="card-header col-6 mb-3 " >
                                    <span class="py-3 d-block text-center fw-bold">RANGO DE ESPESOR</span>
                                    <div class="col">
                                        <div class="form-floating mb-3">
                                            <input 
                                                type="text"
                                                class="form-control uppercase rounded-pill "
                                                id="slot"
                                                placeholder="SLOT"
                                                v-model="form.slot"
                                                name="slot"
                                                v-validate="'required'"
                                                data-vv-as="RANURA">
                                            <label for="slot">RANURA <strong style="color: red;">*</strong></label>
                                            <span class="text-danger">{{ errors.first('slot') }}</span>
                                            <small class="text-secondary">RANGO DE ESPESOR</small>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-floating mb-3">
                                            <input
                                                name="filletWelding"
                                                v-validate="'required'"
                                                data-vv-as="FILETE"
                                                type="text"
                                                class="form-control uppercase rounded-pill"
                                                id="filletWelding"
                                                placeholder="FILETE"
                                                v-model="form.filletWelding">
                                            <label for="filletWelding">FILETE <strong style="color: red;">*</strong></label>
                                            <span class="text-danger">{{ errors.first('filletWelding') }}</span>
                                            <small class="text-secondary">RANGO DE ESPESOR</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="divider mb-3"></div>
                            <div class="section-header mb-3">
                                <span class="badge bg-secondary mb-2">
                                    PQR
                                </span>
                                <h6 class="text-uppercase fw-bold">
                                    REGISTRO DE CALIFICACIÓN DEL PROCEDIMIENTO
                                </h6>
                            </div>
                            <div class="row mb-3">
                                <div class="col">
                                    <div class="form-floating">
                                        <input 
                                        type="text" 
                                        class="form-control uppercase rounded-pill"
                                        id="namePQR"
                                        placeholder="NOMBRE PQR"
                                        v-model="form.namePQR"
                                        >
                                        <label for="namePQR">NOMBRE PQR </label>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-floating mb-3">
                                        <input 
                                        type="date"
                                        class="form-control rounded-pill"
                                        id="dateLab"
                                        v-model="form.datePQR"
                                        placeholder="FECHA DE ELABORACIÖN"
                                        >
                                        <label for="dateLab">FECHA DE ELABORACIÖN </label>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="form-floating">
                                        <input 
                                        type="text" 
                                        class="form-control uppercase rounded-pill"
                                        id="appCode"
                                        v-model="form.appliCode"
                                        placeholder="CÓDIGO APLICABLE"
                                        >
                                        <label for="appCode">CÓDIGO APLICABLE </label>
                                    </div>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col">

                                    <!-- TEXTAREA BONITO -->
                                    <div class="mb-3">
                                        <label class="form-label fw-bold text-secondary">
                                            PRUEBAS APLICABLES
                                        </label>

                                        <textarea 
                                    class="form-control textarea-custom"
                                    :value="form.appliTest"
                                    readonly>
                                </textarea>


                                    </div>

                                    <!-- SELECTOR TIPO TARJETAS -->
                                    <div class="card shadow-sm border-0">
                                        <div class="card-body option-container">

                                            <div 
                                                class="option-item"
                                                v-for="(label, key) in options"
                                                :key="key"
                                                :class="{ active: selectedOptions.includes(key) }"
                                                @click="toggleOption(key)"
                                            >
                                                <div class="d-flex align-items-center">
                                                    <i class="fas fa-check-circle me-2"></i>
                                                    <span>{{ label }}</span>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>

                                <div class="col">
                                    <div class="form-floating">
                                        <input 
                                        ref="filePathPQR"
                                        class="form-control rounded-pill" 
                                        type="file"
                                        id="fileInput2"
                                        accept="application/pdf"
                                        >
                                        <strong class="text-secondary" for="fileInput2">CARGAR ARCHIVO PQR</strong>
                                    </div>
                                </div>
                            </div>
                            <div class="divider"></div>
                            
                            <div class="modal-footer">
                                <button
                                class="btn btn-primary mt-3 float-right rounded-pill"
                                @click="submit"
                                :disabled="isLoading || !isFormValid"
                                >
                                <span v-if="isLoading">
                                    <span
                                    class="spinner-grow spinner-grow-sm me-2"
                                    role="status"
                                    aria-hidden="true"
                                    ></span>
                                    {{isEdit ? 'ACTUALIZANDO...' : 'GUARDANDO...'}}
                                </span>
                                <span v-else>
                                    {{ isEdit ? 'ACTUALIZAR PROCEDIMIENTO' : 'GUARDAR PROCEDIMIENTO'  }}
                                </span>
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<script>
export default {
    data: () => {
        return{
            isLoading: false,
            procedure:null,
            form:{
                nameProcedure: null,
                dateElab: null,
                weldingProcess: null,
                baseMetal: null,
                slot: null,
                filletWelding: null,
                fillerMetal: null,
                namePQR: null,
                datePQR: null,
                appliTest: null,
                appliCode: null,
            },
            selectedOptions: [],
            options: {
                op1: 'Ensayo de Tensión.',
                op2: 'Ensayo de Dobles Guiado.',
                op3: 'Pruebas de Tenacidad',
                op4: 'Perfil de Dureza Vickers.',
                op5: 'Ensayo de Nick break',
                op6: 'Examen Radiografico.',
                op7: 'Ensayo de Impacto Charpy.',
                },
            listEmployee: [],
        }
    },
    mounted(){
        this.init()
    },
    watch: {

        selectedOptions(newVal) {
        this.form.appliTest = newVal
            .map(op => this.options[op])
            .join('\n') 
        },
    },

    computed:{
        isEdit() {
            return !!this.$route.params.id
        },
        isFormValid() {
            return (
                this.form.nameProcedure &&
                this.form.dateElab &&
                this.form.weldingProcess &&
                this.form.baseMetal &&
                this.form.slot &&
                this.form.filletWelding &&
                this.form.fillerMetal
            )
        },
        tareaTexto() {
            if (!this.selectedOptions.length) return ''

            return this.selectedOptions
                .map(op => '▪️ ' + this.options[op])
                .join('\n')
        }
    },
    methods:{
        async init() {
            if (this.isEdit) {
                this.loadProcedure()
            }
        },
        async submit() {
            this.isLoading = true
            try {
                let isValid = await this.$validator.validate()
                if (!isValid) return
                const formData = new FormData()
                Object.keys(this.form).forEach(key => {
                    const value = this.form[key]
                    if (value !== null && value !== '' && value !== undefined) {
                        formData.append(key, value)
                    }
                })
                if (this.$refs.filePathWPS && this.$refs.filePathWPS.files.length > 0) {
                    formData.append('filePathWPS', this.$refs.filePathWPS.files[0])
                }
                if (this.$refs.filePathPQR && this.$refs.filePathPQR.files.length > 0) {
                    formData.append('filePathPQR', this.$refs.filePathPQR.files[0])
                }

                let response
                if (this.isEdit) {
                    formData.append('_method', 'PUT')
                    response = await axios.post(
                        `/procedure/${this.$route.params.id}`,
                        formData,
                        { headers: { 'Content-Type': 'multipart/form-data' } }
                    )
                    toastr.success('El Procedimiento se actualizó correctamente')
                } else {
                    response = await axios.post(
                        '/procedure/',
                        formData,
                        { headers: { 'Content-Type': 'multipart/form-data' } }
                    )
                    toastr.success('El Procedimiento se creó correctamente')
                }
                this.procedure = response.data
                this.back()

            } catch (error) {
                toastr.error(error.response?.data?.message || 'Error al guardar')
            } finally {
                this.isLoading = false
            }
        },
       async loadProcedure() {
    try {
        const response = await axios.get(`/procedure/${this.$route.params.id}`)
        const data = response.data

        this.form = { ...data }

        /* ✅ SOLO reconstruimos selección */
        if (data.appliTest) {

            const lines = data.appliTest
                .split('\n')
                .map(l => l.trim())
                .filter(l => l.length)

            this.selectedOptions = Object.keys(this.options)
                .filter(key => lines.includes(this.options[key]))
        } else {
            this.selectedOptions = []
        }

    } catch (error) {
        toastr.error(error.response?.data?.message || 'Error al cargar el procedimiento')
    }
},

        extractFileName(path) {
            if (!path) return ''
            const parts = path.split('/')
            return parts[parts.length - 1]
        },
        async getEmployee(){
            try {
                const response = await axios.get("/procedure/")
                this.listEmployee = response.data
            } catch (error) {
                toastr.error(error.response?.data?.message || 'Error al Cargar Empleados')
            }
        },
        back(){
            this.$router.go(-1)
        },
    toggleOption(key) {
        const index = this.selectedOptions.indexOf(key)

        if (index > -1) {
            this.selectedOptions.splice(index, 1)
        } else {
            this.selectedOptions.push(key)
        }
    }
    }
}
</script>
<style scoped>
.divider {
    height: 1px;
    background-color: #e0e0e0;
    margin: 16px 0;
}

.uppercase {
    text-transform: uppercase;
}
.textarea-custom {
    height: 110px;
    border-radius: 12px;
    resize: none;
    background: #f8f9fa;
    font-weight: 500;
}

.option-container {
    max-height: 180px;
    overflow-y: auto;
    padding: 5px;
}

.option-item {
    padding: 10px 14px;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.2s ease;
    margin-bottom: 6px;
    background: #f8f9fa;
    border: 1px solid transparent;
    font-size: 14px;
}

.option-item:hover {
    background: #e9ecef;
}

.option-item.active {
    background: #0d6efd;
    color: white;
    border-color: #0d6efd;
    transform: scale(0.98);
}

.option-item i {
    opacity: 0.7;
}

.option-item.active i {
    opacity: 1;
}


</style>