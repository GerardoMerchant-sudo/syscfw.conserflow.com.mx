<template>
    <main class="main">
        <div>
            <div class="card mx-3 mt-3">
                <div class="card-header d-flex align-items-center">
                    <span class="h5">
                        <i class="fas fa-tools text-primary"></i>
                        {{ isEdit ? 'Editar Solicitud de Baja' : 'Solicitud de Mantenimiento' }}
                    </span>
                    <div class="ml-auto">
                        <i class="fas fa-arrow-left fa-2x text-primary mr-2" style="cursor: pointer;" @click="back"></i>
                    </div>
                </div>
                <div class="card-body">
                    <div class="container">
                        <div class="row mb-3">
                            <div class="col-3 ms-auto">
                                <div class="form-floating mb-3">
                                    <input
                                        id="folio"
                                        type="text"
                                        class="form-control rounded-pill"
                                        v-model="form.folio"
                                        placeholder="Folio">
                                    <label for="folio">Folio</label>
                                </div>
                                <div class="form-floating mt-3">
                                    <input
                                        type="date"
                                        class="form-control rounded-pill"
                                        placeholder="Fecha"
                                        id="date"
                                        v-model="form.date">
                                    <label for="date">Fecha</label>
                                </div>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col">
                                <div class="form-floating">
                                    <input
                                        class="form-control rounded-pill"
                                        id="name"
                                        type="text"
                                        placeholder="Nombre"
                                        v-model="form.equipment_name">
                                    <label for="name">Nombre del Equipo o Herramienta</label>
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-floating">
                                    <input
                                        type="text"
                                        id="brand"
                                        class="form-control rounded-pill"
                                        placeholder="Marca"
                                        v-model="form.brand">
                                    <label for="brand">Marca</label>
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-floating">
                                    <input
                                        type="text"
                                        id="model"
                                        class="form-control rounded-pill"
                                        placeholder="Modelo"
                                        v-model="form.model">
                                    <label for="model">Modelo</label>
                                </div>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col">
                                <div class="form-floating mb-3">
                                    <input
                                        type="text"
                                        id="internal"
                                        class="form-control rounded-pill"
                                        v-model="form.internal_code"
                                        placeholder="Código Interno">
                                    <label for="internal">Código Interno</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input
                                        type="text"
                                        id="serial"
                                        class="form-control rounded-pill"
                                        placeholder="N° de Serie"
                                        v-model="form.serial_number">
                                    <label for="serial">N° de Serie</label>
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-floating">
                                    <textarea
                                        style="height: 130px; overflow-y: auto;"
                                        id="generales"
                                        class="form-control"
                                        placeholder="Caracteristicas Generales"
                                        v-model="form.general_characteristics">
                                    </textarea>
                                    <label for="generales">Características generales</label>
                                </div>
                            </div>
                        </div>
                        <div class="divider mb-3"></div>
                        <div class="row mb-3">
                            <strong class="h6 text-primary text-center">Inspección del Equipo o Herramienta</strong>
                            <div class="col">
                                <div class="form-floating">
                                    <textarea
                                        style="height: 130px; overflow-y: auto;"
                                        id="physical"
                                        class="form-control"
                                        placeholder="Verificación Física"
                                        v-model="form.physical_verification">
                                    </textarea>
                                    <label for="physical">Verificación Física</label>
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-floating">
                                    <textarea
                                        style="height: 130px; overflow-y: auto;"
                                        id="functional"
                                        class="form-control"
                                        placeholder="Verificación Funcional"
                                        v-model="form.functional_verification">
                                    </textarea>
                                    <label for="functional">Verificación Funcional</label>
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-floating">
                                    <textarea
                                        style="height: 130px; overflow-y: auto;"
                                        id="corrective"
                                        class="form-control"
                                        placeholder="Mantenimientos Correctivos"
                                        v-model="form.corrective_maintenance">
                                    </textarea>
                                    <label for="corrective">Mantenimientos Correctivos</label>
                                </div>
                            </div>
                        </div>
                        <div class="divider mb-3"></div>
                        <div class="row mb-3">
                            <strong class="h6 text-primary text-center">Dictamén Técnico</strong>
                            <small class="text-primary text-center mb-3">De acuerdo al análisis anterior se sugiere dar de baja el equipo por:</small>
                            <div class="col mb-3">
                                <div class="form-floating mb-3">
                                    <select
                                        id="reason"
                                        class="form-select rounded-pill"
                                        v-model="form.reason"
                                        placeholder="Seleccionar el Motivo">
                                        <option value="" disabled>Seleccionar</option>
                                        <option value="Costo Beneficio">Costo Beneficio</option>
                                        <option value="Daño irreparable">Daño irreparable</option>
                                    </select>
                                    <label for="reason">Seleccionar el Motivo</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <select
                                        id="decommission"
                                        v-model="form.decommission_type"
                                        placeholder="Seleccionar el Tipo de Baja"
                                        class="form-select rounded-pill">
                                        <option value="" disabled>Seleccionar</option>
                                        <option value="Baja definitiva">Baja definitiva</option>
                                        <option value="Baja para depósito y aprovechamiento futuro de piezas y componentes">Baja para depósito y aprovechamiento futuro de piezas y componentes</option>
                                        <option value="Baja para donación a otras instituciones">Baja para donación a otras instituciones</option>
                                    </select>
                                    <label for="decommission">Seleccionar el Tipo de Baja</label>
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-floating">
                                    <textarea
                                        style="height: 130px; overflow-y: auto;"
                                        id="reusable"
                                        class="form-control"
                                        v-model="form.reusable_parts_description"
                                        placeholder="Descripción de Piezas y/o Componentes Aprovechables">
                                    </textarea>
                                    <label for="reusable">Descripción de Piezas y/o Componentes Aprovechables</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button
                        class="btn btn-primary rounded-pill float-right"
                        @click="submit"
                        :disabled="isLoading">
                        <span v-if="isLoading">
                            <span class="spinner-grow spinner-grow-sm me-2" role="status" aria-hidden="true"></span>
                            {{ isEdit ? 'Actualizando...' : 'Creando...' }}
                        </span>
                        <span v-else>
                            {{ isEdit ? 'Actualizar Solicitud de Baja' : 'Crear Solicitud de Baja' }}
                        </span>
                    </button>
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
            res: null,
            form: {
                folio: null,
                date: null,
                equipment_name: null,
                general_characteristics: null,
                brand: null,
                model: null,
                internal_code: null,
                serial_number: null,
                physical_verification: null,
                functional_verification: null,
                corrective_maintenance: null,
                reason: null,
                decommission_type: null,
                reusable_parts_description: null,
            }
        }
    },
    mounted() {
        this.init()
    },
    computed: {
        isEdit() {
            return !!this.$route.params.id
        }
    },
    methods: {
        init() {
            if (this.isEdit) {
                this.loadRecord()
            }
        },
        async loadRecord() {
            try {
                const res = await axios.get(`/toolsLow/${this.$route.params.id}`)
                this.form = { ...this.form, ...res.data }
            } catch (error) {
                toastr.error('Error al cargar la solicitud')
            }
        },
        async submit() {
            this.isLoading = true
            try {
                if (this.isEdit) {
                    const res = await axios.put(
                        `/toolsLow/${this.$route.params.id}`,
                        this.form
                    )
                    this.res = res.data
                    toastr.success('Solicitud de baja actualizada con éxito')
                } else {
                    const res = await axios.post('toolsLow', this.form)
                    this.res = res.data
                    toastr.success('Solicitud de baja creada con éxito')
                }
                console.log(this.res)
                this.back()
            } catch (error) {
                toastr.error(error.response?.data?.message || 'Error al guardar')
            } finally {
                this.isLoading = false
            }
        },
        back() {
            this.$router.go(-1)
        }
    }
}
</script>

<style>
.divider {
    height: 1px;
    background-color: #e0e0e0;
    margin: 16px 0;
}
</style>