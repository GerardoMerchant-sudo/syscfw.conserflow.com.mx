<template>
    <main class="main">
        <div>
            <div class="card mx-3 mt-3">
                <div class="card-header d-flex align-items-center">
                    <i class="fas fa-tools text-primary"></i>
                    <span class="h5 ml-2">{{ isEdit ? 'Editar Solicitud de Mantenimiento' : 'Solicitud de Mantenimiento' }}</span>
                    <div class="ml-auto">
                        <i class="fas fa-arrow-left fa-2x text-primary mr-2" style="cursor: pointer;" @click="back"></i>
                    </div>
                </div>
                <div class="card-body">
                    <div class="container">
                        <div class="row mb-3">
                            <div class="col">
                                 <div class="form-floating">
                                    <select style="cursor:pointer;" id="type" class="form-select rounded-pill"
                                        v-model="form.requested_by" placeholder="Requerido por"
                                        >
                                        <option value="" disabled>Selecciona</option>
                                        <option v-for="employee in listEmployee" :key="employee.id" :value="employee.full_name">
                                            {{ employee.full_name }}
                                        </option>
                                    </select>
                                    <label for="type">Requerido por</label>
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-floating">
                                    <input type="date" class="form-control rounded-pill" id="date"
                                        v-model="form.request_date" placeholder="Fecha">
                                    <label for="date">Fecha</label>
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-floating">
                                    <input type="text" class="form-control rounded-pill" v-model="form.request_number"
                                        id="number" placeholder="N° De Solicitud">
                                    <label for="number">N° De Solicitud</label>
                                </div>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col">
                                <div class="form-floating">
                                    <input 
                                    class="form-control rounded-pill"
                                    type="text" 
                                    id="tools"
                                    placeholder="Nombre de Herramienta/Equipo"
                                    v-model="form.equipment_tool"
                                    >
                                    <label for="tools">Nombre de Herramienta/Equipo</label>
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-floating">
                                    <input type="text" class="form-control rounded-pill" id="serial"
                                        v-model="form.serial_number" placeholder="No. Serie">
                                    <label for="serial">No. Serie</label>
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-floating">
                                    <input type="time" class="form-control rounded-pill" id="hora"
                                        v-model="form.request_time" placeholder="Hora">
                                    <label for="hora">Hora</label>
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-floating">
                                    <select style="cursor:pointer;" id="type" class="form-select rounded-pill"
                                        v-model="form.request_type" placeholder="Tipo de Solicitud">
                                        <option value="" disabled>Selecciona</option>
                                        <option value="Normal">Normal</option>
                                        <option value="Urgente">Urgente</option>
                                    </select>
                                    <label for="type">Tipo de Solicitud</label>
                                </div>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-6">
                                <div class="form-floating">
                                    <textarea style="height:130px;" id="problem" class="form-control rounded-textarea"
                                        v-model="form.problem_description" placeholder="Descripción del Problema">
                                    </textarea>
                                    <label for="problem">Descripción del problema</label>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-floating">
                                    <input type="text" class="form-control rounded-pill" id="authorized"
                                        v-model="form.authorized_by" placeholder="Autorizo">
                                    <label for="authorized">Autorizo</label>
                                </div>
                                <div class="form-floating mt-3">
                                    <input type="date" class="form-control rounded-pill" id="auth_date"
                                        v-model="form.auth_date" placeholder="Fecha">
                                    <label for="auth_date">Fecha de Autorización</label>
                                </div>
                            </div>
                        </div>
                        <div class="divider mb-3"></div>
                        <div class="row mb-3">
                            <div class="col">
                                <div class="form-floating">
                                    <select style="cursor: pointer;" class="form-select rounded-pill"
                                        id="maintenance_type" v-model="form.maintenance_type"
                                        placeholder="Tipo de Mantenimiento">
                                        <option value="" disabled>Selecciona</option>
                                        <option value="Correctivo">Correctivo</option>
                                        <option value="Preventivo">Preventivo</option>
                                    </select>
                                    <label for="maintenance_type">Tipo de Mantenimiento</label>
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-floating">
                                    <input type="date" class="form-control rounded-pill" id="start_date"
                                        v-model="form.start_date" placeholder="Fecha">
                                    <label for="start_date">Fecha de Inicio</label>
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-floating">
                                    <input type="date" class="form-control rounded-pill" id="end_date"
                                        v-model="form.end_date" placeholder="Fecha">
                                    <label for="end_date">Fecha de Termino</label>
                                </div>
                            </div>
                        </div>

                        <!-- Actividades -->
                        <div class="divider mb-3"></div>
                        <div class="row">
                            <strong class="h6 text-primary my-3 text-center">ACTIVIDADES A REALIZAR</strong>
                            <div class="col-5">
                                <div class="form-floating position-relative">
                                    <input type="text" id="activity" class="form-control rounded-pill pe-5"
                                        placeholder="Escribe una actividad" v-model="nuevaActividad"
                                        @keyup.enter="agregarActividad">
                                    <label for="activity">Actividades a realizar</label>
                                    <span @click="agregarActividad" v-if="nuevaActividad"
                                        style="position: absolute; top: 50%; right: 1rem; transform: translateY(-50%); cursor: pointer;">
                                        <i class="fas fa-plus text-primary"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="col">
                                <div class="border rounded p-3 h-100">
                                    <h6 class="mb-3">Actividades</h6>
                                    <div style="max-height: 135px; overflow-y: auto;">
                                        <div v-for="(actividad, index) in actividades" :key="index"
                                            class="card mb-2 shadow-sm rounded-pill">
                                            <div class="card-body d-flex justify-content-between align-items-center p-2">
                                                {{ actividad }}
                                                <span @click="eliminarActividad(index)"
                                                    style="position: absolute; top: 50%; right: 1rem; transform: translateY(-50%); cursor: pointer;">
                                                    <i class="fas fa-times-circle text-danger"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-if="actividades.length === 0" class="text-muted">
                                        No hay actividades agregadas
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Daños -->
                        <div class="divider mb-3"></div>
                        <div class="row">
                            <strong class="h6 text-primary my-3 text-center">DAÑOS ENCONTRADOS</strong>
                            <div class="col-5">
                                <div class="form-floating position-relative">
                                    <input type="text" id="damages" class="form-control rounded-pill pe-5"
                                        placeholder="Escribe un daño" v-model="newdamages"
                                        @keyup.enter="adddamages">
                                    <label for="damages">Daños encontrados</label>
                                    <span @click="adddamages" v-if="newdamages"
                                        style="position: absolute; top: 50%; right: 1rem; transform: translateY(-50%); cursor: pointer;">
                                        <i class="fas fa-plus text-primary"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="col">
                                <div class="border rounded p-3 h-100">
                                    <h6 class="mb-3">Daños</h6>
                                    <div style="max-height: 135px; overflow-y: auto;">
                                        <div v-for="(damage, index) in damages" :key="index"
                                            class="card mb-2 shadow-sm">
                                            <div class="card-body d-flex justify-content-between align-items-center p-2">
                                                {{ damage }}
                                                <span @click="eliminardaños(index)"
                                                    style="position: absolute; top: 50%; right: 1rem; transform: translateY(-50%); cursor: pointer;">
                                                    <i class="fas fa-times-circle text-danger"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-if="damages.length === 0" class="text-muted">
                                        No hay daños agregados
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Cambios -->
                        <div class="divider mb-3"></div>
                        <div class="row">
                            <strong class="h6 text-primary my-3 text-center">CAMBIOS Y/O REPARACIONES</strong>
                            <div class="col-5">
                                <div class="form-floating position-relative">
                                    <input type="text" id="changes" class="form-control rounded-pill pe-5"
                                        placeholder="Escribe un cambio" v-model="newChanges"
                                        @keyup.enter="addChanges">
                                    <label for="changes">Cambio y/o reparaciones</label>
                                    <span @click="addChanges" v-if="newChanges"
                                        style="position: absolute; top: 50%; right: 1rem; transform: translateY(-50%); cursor: pointer;">
                                        <i class="fas fa-plus text-primary"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="col">
                                <div class="border rounded p-3 h-100">
                                    <h6 class="mb-3">Cambios y/o reparaciones</h6>
                                    <div style="max-height: 135px; overflow-y: auto;">
                                        <div v-for="(change, index) in changes" :key="index"
                                            class="card mb-2 shadow-sm">
                                            <div class="card-body d-flex justify-content-between align-items-center p-2">
                                                {{ change }}
                                                <span @click="eliminarChanges(index)"
                                                    style="position: absolute; top: 50%; right: 1rem; transform: translateY(-50%); cursor: pointer;">
                                                    <i class="fas fa-times-circle text-danger"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-if="changes.length === 0" class="text-muted">
                                        No hay cambios agregados
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Refacciones -->
                        <div class="divider mb-3"></div>
                        <div class="row">
                        <strong class="h6 text-primary my-3 text-center">REFACCIONES</strong>

                        <div class="col-5">
                            <div class="form-floating position-relative">
                                <input type="text" class="form-control rounded-pill pe-5"
                                    v-model="newSparePart"
                                    placeholder="Refacción"
                                    @keyup.enter="addSparePart">
                                <label>Refacción</label>

                                <span @click="addSparePart" v-if="newSparePart"
                                    style="position: absolute; top: 50%; right: 1rem; transform: translateY(-50%); cursor: pointer;">
                                    <i class="fas fa-plus text-primary"></i>
                                </span>
                            </div>
                        </div>

                        <div class="col">
                            <div class="border rounded p-3 h-100">
                                <h6 class="mb-3">Lista de refacciones</h6>

                                <div style="max-height: 135px; overflow-y: auto;">
                                    <div v-for="(item, index) in spareParts" :key="index"
                                        class="card mb-2 shadow-sm">

                                        <div class="card-body d-flex justify-content-between align-items-center p-2">
                                            {{ item }}

                                            <span @click="removeSparePart(index)"
                                                style="cursor: pointer;">
                                                <i class="fas fa-times-circle text-danger"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div v-if="spareParts.length === 0" class="text-muted">
                                    No hay refacciones
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="divider mb-3"></div>
                    <div class="row">
                        <strong class="h6 text-primary my-3 text-center">RESIDUOS GENERADOS</strong>

                        <div class="col-5">
                            <div class="form-floating position-relative">
                                <input type="text" class="form-control rounded-pill pe-5"
                                    v-model="newWaste"
                                    placeholder="Residuo"
                                    @keyup.enter="addWaste">
                                <label>Residuo generado</label>

                                <span @click="addWaste" v-if="newWaste"
                                    style="position: absolute; top: 50%; right: 1rem; transform: translateY(-50%); cursor: pointer;">
                                    <i class="fas fa-plus text-primary"></i>
                                </span>
                            </div>
                        </div>

                        <div class="col">
                            <div class="border rounded p-3 h-100">
                                <h6 class="mb-3">Lista de residuos</h6>

                                <div style="max-height: 135px; overflow-y: auto;">
                                    <div v-for="(item, index) in wastes" :key="index"
                                        class="card mb-2 shadow-sm">

                                        <div class="card-body d-flex justify-content-between align-items-center p-2">
                                            {{ item }}

                                            <span @click="removeWaste(index)"
                                                style="cursor: pointer;">
                                                <i class="fas fa-times-circle text-danger"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div v-if="wastes.length === 0" class="text-muted">
                                    No hay residuos
                                </div>
                            </div>
                        </div>
</div>
                        <div class="row mt-3">
                            <div class="col-6">
                                <div class="form-floating">
                                    <textarea class="form-control rounded-textarea" id="observation" v-model="form.observations"
                                        placeholder="Observaciones" style="height:100px;"></textarea>
                                    <label for="observation">Observaciones</label>
                                </div>
                            </div>
                        </div>

                        <div class="modal-footer mt-3">
                            <button
                                class="btn btn-primary mt-3 float-right rounded-pill"
                                @click="submit"
                                :disabled="isLoading || !isFormValid">
                                <span v-if="isLoading">
                                    <span class="spinner-grow spinner-grow-sm me-2"
                                        role="status" aria-hidden="true"></span>
                                    {{ isEdit ? 'Actualizando...' : 'Creando...' }}
                                </span>
                                <span v-else>
                                    {{ isEdit ? 'Actualizar solicitud' : 'Crear Solicitud' }}
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

export default {
    data() {
        return {
            isLoading: false,
            isDownloading:false,
            listEmployee: [],
            form: {
                requested_by: null,
                request_date: null,
                request_number: null,
                request_time: null,
                equipment_tool: null,
                serial_number: null,
                request_type: null,
                problem_description: null,
                authorized_by: "Valeria Hernandez Martinez",
                auth_date: null,
                maintenance_type: null,
                start_date: null,
                end_date: null,
                activities_to_perform: null,
                damages_found: null,
                changes_repairs: null,
                spare_parts_used: null,
                waste_generated: null,
                observations: null,
                performed_by: null,
                supervised_by: null,
                conformity_by: null,
            },
            nuevaActividad: '',
            actividades: [],
            newdamages: '',
            damages: [],
            newChanges: '',
            changes: [],
            newSparePart: '',
            spareParts: [],
            newWaste: '',
            wastes: [],
        }
    },
    mounted() {
        this.init()
    },
    computed: {
        isEdit() {
            return !!this.$route.params.id
            
        },
        isFormValid() {
            return this.form.requested_by &&
                this.form.request_date &&
                this.form.equipment_tool &&
                this.form.maintenance_type
        }
    },
    methods: {
        init() {
            this.getEmployee()
            if (this.isEdit) {
                this.loadMaintenance()
            }
        },
        async loadMaintenance() {
            try {
                const res = await axios.get(`/maintenance/${this.$route.params.id}`)
                this.form = { ...this.form, ...res.data }

                // Reconstruir arrays desde strings separados por \n
                this.actividades = res.data.activities_to_perform
                    ? res.data.activities_to_perform.split('\n').filter(Boolean)
                    : []
                this.damages = res.data.damages_found
                    ? res.data.damages_found.split('\n').filter(Boolean)
                    : []
                this.changes = res.data.changes_repairs
                    ? res.data.changes_repairs.split('\n').filter(Boolean)
                    : []
                this.spareParts = res.data.spare_parts_used
                ? res.data.spare_parts_used.split('\n').filter(Boolean)
                : []

            this.wastes = res.data.waste_generated
                ? res.data.waste_generated.split('\n').filter(Boolean)
                : []
                
            } catch (error) {
                toastr.error('Error al cargar el mantenimiento')
            }
        },
        async submit() {
            this.isLoading = true
            try {
                // Armar los campos antes de enviar
                this.form.activities_to_perform = this.actividades.join('\n')
                this.form.damages_found = this.damages.join('\n')
                this.form.changes_repairs = this.changes.join('\n')
                this.form.spare_parts_used = this.spareParts.join('\n')
                this.form.waste_generated = this.wastes.join('\n')

                const formData = new FormData()
                Object.entries(this.form).forEach(([key, value]) => {
                    if (value !== null && value !== undefined) {
                        formData.append(key, value)
                    }
                })

                const headers = { 'Content-Type': 'multipart/form-data' }
                let response

                if (this.isEdit) {
                    formData.append('_method', 'PUT')
                    response = await axios.post(
                        `/maintenance/${this.$route.params.id}`,
                        formData,
                        { headers }
                    )
                    toastr.success('La solicitud se actualizó correctamente')
                } else {
                    response = await axios.post(
                        '/maintenance',
                        formData,
                        { headers }
                    )
                    toastr.success('La solicitud se creó correctamente')
                }
                this.back()

            } catch (error) {
                toastr.error(error.response?.data?.message || 'Error al guardar')
            } finally {
                this.isLoading = false
            }
        },
        async getEmployee() {
            try {
                const response = await axios.get("employee") 
                this.listEmployee = response.data
                console.log(this.listEmployee)
            } catch (error) {
                toastr.error(error.response?.data?.message || 'Error al Cargar Empleados')
            }
        },
        back() {
            this.$router.go(-1)
        },
        // Actividades
        agregarActividad() {
            if (!this.nuevaActividad.trim()) return
            this.actividades.push(this.nuevaActividad.trim())
            this.nuevaActividad = ''
        },
        eliminarActividad(index) {
            this.actividades.splice(index, 1)
        },
        // Daños
        adddamages() {
            if (!this.newdamages.trim()) return
            this.damages.push(this.newdamages.trim())
            this.newdamages = ''
        },
        eliminardaños(index) {
            this.damages.splice(index, 1)
        },
        // Cambios
        addChanges() {
            if (!this.newChanges.trim()) return
            this.changes.push(this.newChanges.trim())
            this.newChanges = ''
        },
        eliminarChanges(index) {
            this.changes.splice(index, 1)
        },
        // REFACCIONES
        addSparePart() {
            if (!this.newSparePart.trim()) return
            this.spareParts.push(this.newSparePart.trim())
            this.newSparePart = ''
        },
        removeSparePart(index) {
            this.spareParts.splice(index, 1)
        },

        // RESIDUOS
        addWaste() {
            if (!this.newWaste.trim()) return
            this.wastes.push(this.newWaste.trim())
            this.newWaste = ''
        },
        removeWaste(index) {
            this.wastes.splice(index, 1)
        },
    }
}
</script>

<style>
.divider {
    height: 1px;
    background-color: #e0e0e0;
    margin: 16px 0;
}
.rounded-textarea {
    border-radius: 0.5rem;

}
</style>