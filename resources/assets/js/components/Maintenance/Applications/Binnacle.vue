<template>
    <main class="main">
        <div class="card mx-3 mt-3">
            <div class="card-header d-flex align-items-center">
                <i class="fas fa-clipboard-list fa-2x text-primary mr-2"></i>
                <span class="h5 mb-0">Bitácora de control de mantenimiento a equipo y herramientas</span>
                <button 
                class="btn btn-primary ml-auto rounded-pill"
                @click="exportBinnacle"
                :disabled="isLoadingExcel"
                >
                    <span v-if="isLoadingExcel">
                        <span class="spinner-grow spinner-grow-sm me-2" role="status"></span>
                        Exportando...
                    </span>

                    <span v-else>
                        <i class="fas fa-file-excel mr-2"></i>
                        Exportar Excel
                    </span>
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
                                    data-toggle="dropdown"
                                >
                                    <i class="fas fa-grip-horizontal"></i>
                                </button>
                                <div class="dropdown-menu">
                                    <button
                                        class="dropdown-item text-primary"
                                        @click="openModalStaff(props.row)"
                                    >
                                        <i class="fas fa-plus text-primary"></i> Agregar Responsable
                                    </button>
                                </div>
                            </div>
                        </div>
                    </template>
                </v-client-table>
            </div>
        </div>

        <!-- Modal Responsable & Fecha -->
       <!-- Modal Responsable & Fecha -->
<div
    v-if="seeModalStaff"
    class="modal fade show"
    tabindex="-1"
    role="dialog"
    style="display: block; background: rgba(0,0,0,0.5);"
>
    <div class="modal-dialog" role="document">
        <div class="modal-content">

            <!-- Header -->
            <div class="modal-header" style="background: #005D94; color: white;">
                <h5 class="modal-title mb-0">
                    <i class="fas fa-user-check mr-2"></i> Responsable &amp; Fecha
                </h5>
                <button
                    type="button"
                    style="background: none; border: none; color: white; font-size: 1.4rem; cursor: pointer;"
                    @click="closeModalStaff()"
                >
                    <i class="fas fa-times-circle"></i>
                </button>
            </div>

            <!-- Body -->
            <div class="modal-body">

                <!-- Responsable -->
                <div class="form-group mb-3">
                    <label for="responsableInput">Responsable</label>
                    <input
                        id="responsableInput"
                        name="responsible"
                        v-validate="'required'"
                        data-vv-as="Responsable"
                        type="text"
                        class="form-control rounded-pill"
                        placeholder="Nombre del responsable"
                        v-model="form.responsible"
                    />
                    <span class="text-danger small">{{ errors.first('responsible') }}</span>
                </div>

                <!-- Fecha de mantenimiento -->
                <div class="form-group">
                    <label for="fechaInput">Fecha de mantenimiento</label>
                    <input
                        id="fechaInput"
                        name="maintenanceDate"
                        v-validate="'required'"
                        data-vv-as="Fecha de mantenimiento"
                        type="date"
                        class="form-control rounded-pill"
                        v-model="form.maintenanceDate"
                    />
                    <span class="text-danger small">{{ errors.first('maintenanceDate') }}</span>
                </div>

            </div>

            <!-- Footer -->
            <div class="modal-footer">
                <button
                    type="button"
                    class="btn btn-secondary rounded-pill"
                    @click="closeModalStaff()"
                >
                    <i class="fas fa-times"></i> Cancelar
                </button>
                <button
                    type="button"
                    class="btn btn-primary rounded-pill"
                    @click="saveResponsible()"
                    :disabled="isLoading || !isFormValid"
                >
                    <span v-if="isLoading">
                        <span class="spinner-grow spinner-grow-sm mr-1" role="status" aria-hidden="true"></span>
                        GUARDANDO...
                    </span>
                    <span v-else>
                        <i class="fas fa-save mr-1"></i> GUARDAR
                    </span>
                </button>
            </div>

        </div>
    </div>
</div>
        <!-- Backdrop modal para cerrar al hacer clic fuera -->
        <div
            v-if="seeModalStaff"
            class="modal-backdrop fade show"
            @click="closeModalStaff()"
            style="z-index: -1;"
        ></div>
    </main>
</template>

<script>
var config = require('../../Herramientas/config-vuetables-client').call(this)

export default {
    data() {
        return {
            isLoadingExcel: false,
            maintenanceTable_loading: false,
            isLoading: false,
            seeModalStaff: false,
            selectedRow: null,           
            retrieveAll: [],
            form: {
                responsible: null,
                maintenanceDate: null
            },
            columns: [
                'request_number',
                'equipment_tool',
                'serial_number',
                'maintenance_type',
                'waste_generated',
                'responsible',
                'maintenanceDate',
                'id'
            ],
            options: {
                headings: {
                    'request_number': 'Folio',
                    'equipment_tool': 'Equipo o Herramienta',
                    'serial_number': 'N° Serie',
                    'maintenance_type': 'Tipo de Mantenimiento',
                    'waste_generated': 'Residuo Generado',
                    'responsible': 'Responsable',
                    'maintenanceDate': 'Fecha de mantenimiento',
                    'id': 'Acciones'
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

    computed: {
        // El formulario es válido solo si ambos campos están llenos
        isFormValid() {
            return this.form.responsible && this.form.responsible.trim() !== ''
                && this.form.maintenanceDate && this.form.maintenanceDate.trim() !== ''
        }
    },

    mounted() {
        this.init()
    },

    methods: {
        init() {
            this.retrieve()
        },

        create() {
            this.$router.push('/maintenance/create')
        },

        // Abre el modal y guarda la fila seleccionada
        openModalStaff(row) {
            this.selectedRow = row
            // Pre-llenar si ya tiene datos
            this.form.responsible = row.responsible || null
            this.form.maintenanceDate = row.maintenanceDate || null
            this.seeModalStaff = true
        },

        // Cierra el modal y limpia el formulario
        closeModalStaff() {
            this.seeModalStaff = false
            this.selectedRow = null
            this.form.responsible = null
            this.form.maintenanceDate = null
            this.$validator.reset()
        },

        // Guarda el responsable llamando a la API
        async saveResponsible() {
            // Validar con vee-validate
            const isValid = await this.$validator.validateAll()
            if (!isValid) return

            this.isLoading = true
            try {
                const payload = {
                    responsible: this.form.responsible,
                    maintenanceDate: this.form.maintenanceDate,
                    // Incluye el id del registro si lo necesita el backend
                    ...(this.selectedRow && { maintenanceId: this.selectedRow.id })
                }

                const response = await axios.post('maintenance/responsible', payload)

                toastr.success(response.data?.message || 'Responsable guardado correctamente')
                this.closeModalStaff()
                // Recargar la tabla para reflejar los cambios
                await this.retrieve()

            } catch (error) {
                const msg = error.response?.data?.message || 'Error al guardar el responsable'
                toastr.error(msg)
            } finally {
                this.isLoading = false
            }
        },

        // Carga todos los registros de mantenimiento
        async retrieve() {
            this.maintenanceTable_loading = true
            try {
                const res = await axios.get('maintenance')
                this.retrieveAll = res.data
            } catch (error) {
                toastr.error(error.response?.data?.message || 'Error al cargar los registros')
            } finally {
                this.maintenanceTable_loading = false
            }
        },
        //exporter de bitácora
        async exportBinnacle() {
            this.isLoadingExcel = true
            try {
                const response = await axios.get('maintenance/binnacle/export', {
                    responseType: 'blob'
                })
                const url = window.URL.createObjectURL(new Blob([response.data]))
                const link = document.createElement('a')
                link.href = url
                link.setAttribute('download', 'Bitacora_' + new Date().toISOString().slice(0, 10) + '.xlsx')
                document.body.appendChild(link)
                link.click()
                link.remove()
                window.URL.revokeObjectURL(url)
            } catch (error) {
                toastr.error('Error al exportar la bitácora')
            }finally {
                this.isLoadingExcel = false
            }
        },
    }
}
</script>

<style scoped>
.modal.show {
    z-index: 1050;
}
.modal-backdrop {
    z-index: 1040;
}
.modal-header.custom-header {
    border-radius: 0;
}
.gap-2 {
    gap: 0.5rem;
}
</style>