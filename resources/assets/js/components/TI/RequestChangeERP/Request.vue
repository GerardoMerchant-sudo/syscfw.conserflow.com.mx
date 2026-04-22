<template>
    <main class="main">
        <div> 
            <div class="card mx-3 mt-3 ">
                <div class="card-header d-flex align-items-center">
                    <i class="fas fa-laptop-code fa-2x text-primary mr-2"></i>
                    <span class="h5 mb-0">Solicitud de Cambios en ERP</span>
                    <button class="btn btn-primary  ml-auto rounded-pill" @click="Create">
                        <i class="fas fa-plus mr-2"></i>
                        Solicitar Cambio
                    </button>
                </div>
                <div class="card-body">
                   
                </div>
            </div>
        </div>
    </main>
</template>
<script>

export default{
    data(){
        return{

        }
    },
    methods:{
        Create(){
            this.$router.push({ name: 'CreateRequest' })
        }
    }
}
</script>