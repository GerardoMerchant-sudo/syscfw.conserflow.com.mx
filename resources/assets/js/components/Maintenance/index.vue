<template>
    <div class="main">
        
        <div class="container mt-4">
            <!-- Header -->
            <div class="row mb-4">
                <div class="col">
                    <h3 class="fw-bold">Mantenimiento de Herramientas</h3>
                    <p class="text-muted mb-0">Resumen general del sistema</p>
                </div>
            </div>

            <!-- Cards -->
            <div class="row g-4">

                <!-- Solicitudes -->
                <div class="col-md-4">
                    <div class="card shadow-sm border-0 h-100 counter-card solicitudes">
                        <div class="card-body">

                            <div class="d-flex justify-content-between align-items-center mb-3">
                                <div class="icon-wrapper bg-primary-soft">
                                    <i class="fas fa-tools"></i>
                                </div>
                                <span class="badge bg-primary-soft text-primary">
                                    Pendientes
                                </span>
                            </div>

                            <h6 class="text-muted">Solicitudes de Mantenimiento</h6>
                            <h2 class="fw-bold">{{ stats.solicitudes }}</h2>
                            <p class="text-muted mb-0">
                                Herramientas reportadas para revisión
                            </p>

                        </div>
                    </div>
                </div>

                <!-- Bajas -->
                <div class="col-md-4">
                    <div class="card shadow-sm border-0 h-100 counter-card bajas">
                        <div class="card-body">

                            <div class="d-flex justify-content-between align-items-center mb-3">
                                <div class="icon-wrapper bg-danger-soft">
                                    <i class="fas fa-times-circle"></i>
                                </div>
                                <span class="badge bg-danger-soft text-danger">
                                    Fuera de Servicio
                                </span>
                            </div>

                            <h6 class="text-muted">Herramientas Dadas de Baja</h6>
                            <h2 class="fw-bold">{{ stats.bajas }}</h2>
                            <p class="text-muted mb-0">
                                Equipos retirados del inventario
                            </p>

                        </div>
                    </div>
                </div>

                <!-- Bitácora -->
                <div class="col-md-4">
                    <div class="card shadow-sm border-0 h-100 counter-card bitacora">
                        <div class="card-body">

                            <div class="d-flex justify-content-between align-items-center mb-3">
                                <div class="icon-wrapper bg-warning-soft">
                                    <i class="fas fa-clipboard-list"></i>
                                </div>
                                <span class="badge bg-warning-soft text-warning">
                                    Registros
                                </span>
                            </div>

                            <h6 class="text-muted">Bitácora de Mantenimiento</h6>
                            <h2 class="fw-bold">{{ stats.bitacora }}</h2>
                            <p class="text-muted mb-0">
                                Eventos y actividades registradas
                            </p>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DashboardMantenimiento',

    data() {
        return {
            stats: {
                solicitudes: 0,
                bajas: 0,
                bitacora: 0
            }
        }
    },

    created() {
        this.fetchStats();
    },

    methods: {
        fetchStats() {
            axios.get('/mantenimiento/stats')
                .then(response => {
                    this.stats = response.data;
                })
                .catch(error => {
                    console.error('Error al cargar estadísticas:', error);
                });
        }
    }
}
</script>

<style scoped>
.counter-card {
    border-radius: 16px;
    transition: all 0.25s ease;
    cursor: pointer;
}

.counter-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08) !important;
}

.icon-wrapper {
    width: 46px;
    height: 46px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
}

.bg-primary-soft {
    background: rgba(13, 110, 253, 0.1);
}

.bg-danger-soft {
    background: rgba(220, 53, 69, 0.1);
}

.bg-warning-soft {
    background: rgba(255, 193, 7, 0.15);
}

.solicitudes {
    border-left: 4px solid var(--bs-primary);
}

.bajas {
    border-left: 4px solid var(--bs-danger);
}

.bitacora {
    border-left: 4px solid var(--bs-warning);
}

h2 {
    margin: 0;
}
</style>