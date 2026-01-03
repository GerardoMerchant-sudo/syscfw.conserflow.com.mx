<template>
  <main class="main-container">
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
    />

    <section class="modulos-grid">
      <article
        v-for="modulo in arrayModulos"
        :key="modulo.nombre"
        class="modulo-card"
        :style="{ '--accent': modulo.color }"
        @click="$emit('click', modulo.id, modulo.submenu, modulo.nombre, modulo.page)"
      >
        <div class="icon-box">
          <span class="material-symbols-outlined">
            {{ modulo.icono }}
          </span>
        </div>

        <p class="modulo-title">{{ modulo.nombre }}</p>
      </article>
    </section>
  </main>
</template>


<script>
import axios from 'axios';

export default {
  data() {
    return {
      arrayModulos: []
    };
  },
  methods: {
    getRutas() {
      axios.get('/modulos/por-usuario')
        .then((response) => {
          this.arrayModulos = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    }
  },
  mounted() {
    this.getRutas();
  }
};
</script>

<style scoped>
/* Fondo general */
.main-container {
  min-height: 100vh;
  padding: 3rem 2rem;
  background: #f9fafb; /* blanco suave */
  display: flex;
  justify-content: center;
}

/* Grid */
.modulos-grid {
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
  gap: 2rem;
}

/* Card */
.modulo-card {
  --accent: #2563eb;

  height: 180px;
  border-radius: 18px;
  background: #ffffff;
  border: 1px solid #e5e7eb;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  transition:
    transform 0.3s cubic-bezier(.4,0,.2,1),
    box-shadow 0.3s ease,
    border-color 0.3s ease;
}

/* Hover elegante */
.modulo-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 35px rgba(0, 0, 0, 0.12);
  border-color: var(--accent);
}

/* Icon container */
.icon-box {
  width: 56px;
  height: 56px;
  border-radius: 14px;
  background: var(--accent);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}


/* Micro movimiento */
.modulo-card:hover .icon-box {
  transform: translateY(-4px);
}

/* Icono */
.material-symbols-outlined {
  font-size: 30px;
  color: #000000;
}

/* Texto */
.modulo-title {
  margin-top: 1rem;
  font-size: 0.95rem;
  font-weight: 500;
  color: #000000;
  text-align: center;
  letter-spacing: 0.3px;
}

/* Click feedback */
.modulo-card:active {
  transform: translateY(-2px) scale(0.98);
}

</style>
