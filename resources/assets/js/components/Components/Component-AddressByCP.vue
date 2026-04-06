
!-- Aun no funcional debido a limitaciones de la API gratuita 
<template>
    <div class="card shadow">
        <div class="card-header bg-primary text-white">
            <strong>Dirección</strong>
        </div>
        <div class="card-body">
            <div class="form-group">
                <label>Código Postal</label>
                <input 
                    type="text"
                    class="form-control"
                    v-model="cp"
                    maxlength="5"
                    placeholder="45000"
                    @input="onCpChange"
                    >
                    <small class="form-text text-muted">
                        Ingrese el código postal para autocompletar
                    </small>
            </div>
            <div 
                v-if="loading"
                class="text-center mb-3"
            >
                <span
                class="spinner-border spinner-border-sm text-primary"></span>
                Buscando información...
            </div>
            <div class="form-group">
                <label >Estado</label>
                <input 
                    type="text"
                    class="form-control"
                    v-model="state"
                    readonly
                    >
            </div>
            <div class="form-group">
                <label>Municipio</label>
                <input 
                    type="text"
                    class="form-control"
                    v-model="municipality"
                    readonly
                    >
            </div>
            <div class="form-group">
                <label>Colonia</label>
                <select 
                class="form-control"
                v-model="neighborhood"
                :disabled="neighborhoods.length === 0"
                >
                <option value="">Selecciona una colonia</option>
                <option 
                    v-for="(c, i) in neighborhoods"
                    :key = "i"
                    :value="c"
                    >{{ c }}</option>
            </select>
            </div>
            <div class="form-group">
                <label>Calle</label>
                <input 
                    type="text"
                    class="form-control"
                    v-model="street"
                    placeholder="Av. Ejemplo"
                >
            </div>
            <div class="form-group">
                <label>No. Exterior</label>
                <input 
                type="text"
                class="form-control"
                v-model="noExterior"
                placeholder="123"
                >
            </div>
            <div class="form-group">
                <label>No. Interior</label>
                <input 
                type="text"
                class="form-control"
                v-model="noInterior"
                placeholder="123"
                >
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    model:{
        prop:'value',
        event: 'input'
    },
    props:{
        value:{
            default: () => ({})
        }

    },
    data:() => ({
        cp:null,
        state:null,
        municipality:null,
        neighborhood:null,
        neighborhoods:[],
        street:null,
        noExterior:null,
        noInterior:null,
        loading:false,
    }),

    methods:{
        async onCpChange(){
            if(this.cp.length !== 5){
                this.resetCP()
                return
            }
            try {
                this.loading = true
                const res = await axios.get(`https://api.zippopotam.us/mx/${this.cp}`)
                const data = res.data

                this.state = data.places[0]['state']
                this.municipality = data.places[0]['place name']
                this.neighborhoods = data.places.map(p => p['place name'])

                //emitir datos al padre

                this.emitAddress()

            } catch (e) {
                this.error('CP no valido')
                this.resetCP()
                this.emitAddress()
            }finally{
                this.loading = false 
            }
        },
        resetCP(){
            this.state = null
            this.municipality = null
            this.neighborhood = null
            this.neighborhoods = []
        },
        emitAddress(){
            this.$emit('input',{
                cp: this.cp,
                state: this.state,
                municipality: this.municipality,
                neighborhood: this.neighborhood,
                street: this.street,
                noExterior: this.noExterior,
                noInterior: this.noInterior,
            })
        }
    },
    watch:{
        //detectar cambios en los campos para emitir al padre
        neighborhood(){this.emitAddress()},
        street(){this.emitAddress()},
        noExterior(){this.emitAddress()},
        noInterior(){this.emitAddress()}


    }
}
</script>