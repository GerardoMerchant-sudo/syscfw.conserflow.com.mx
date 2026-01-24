<template>
  <div>
    <h2>Competencias</h2>

    <!-- Formulario -->
    <form @submit.prevent="saveCompetence">
      <select v-model="form.empleado_id" required>
        <option value="">Seleccione un empleado</option>
        <option v-for="empleado in empleados" :key="empleado.id" :value="empleado.id">
          {{ empleado.full_name }}
        </option>
      </select>

      <select v-model="form.type" required>
        <option value="">Tipo de competencia</option>
        <option value="CERTIFICATION">CERTIFICATION</option>
        <option value="COURSE">COURSE</option>
        <option value="DIPLOMA">DIPLOMA</option>
        <option value="SKILL">SKILL</option>
        <option value="EXPERIENCE">EXPERIENCE</option>
      </select>

      <input v-model="form.nameCompetence" placeholder="Nombre de la competencia" required />

      <button type="submit">{{ form.id ? 'Actualizar' : 'Crear' }}</button>
    </form>

    <!-- Tabla -->
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Empleado</th>
          <th>Tipo</th>
          <th>Nombre</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="c in competences" :key="c.id">
          <td>{{ c.id }}</td>
          <td>{{ c.empleado.nombre }} {{ c.empleado.ap_paterno }} {{ c.empleado.ap_materno }}</td>
          <td>{{ c.type }}</td>
          <td>{{ c.nameCompetence }}</td>
          <td>
            <button @click="editCompetence(c.id)">Editar</button>
            <button @click="deleteCompetence(c.id)">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      competences: [],
      empleados: [],
      form: {
        id: null,
        empleado_id: '',
        type: '',
        nameCompetence: ''
      }
    }
  },
  mounted() {
    this.fetchCompetences();
    this.fetchEmpleados();
  },
  methods: {
    fetchCompetences() {
      axios.get('/api/competences').then(res => {
        this.competences = res.data;
      });
    },
    fetchEmpleados() {
      axios.get('/api/competences/create').then(res => {
        this.empleados = res.data;
      });
    },
    saveCompetence() {
      if (this.form.id) {
        axios.put(`/api/competences/${this.form.id}`, this.form).then(() => {
          this.fetchCompetences();
          this.resetForm();
        });
      } else {
        axios.post('/api/competences', this.form).then(() => {
          this.fetchCompetences();
          this.resetForm();
        });
      }
    },
    editCompetence(id) {
      axios.get(`/api/competences/${id}/edit`).then(res => {
        this.form = res.data.competence;
        this.empleados = res.data.empleados;
      });
    },
    deleteCompetence(id) {
      axios.delete(`/api/competences/${id}`).then(() => {
        this.fetchCompetences();
      });
    },
    resetForm() {
      this.form = { id: null, empleado_id: '', type: '', nameCompetence: '' };
    }
  }
}
</script>
