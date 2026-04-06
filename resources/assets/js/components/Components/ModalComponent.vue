<template>
  <div class="modal fade" :class="{ show: showModal, 'd-block': showModal }" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content excel-modal p-4">

        <h2 class="title">Sube tu archivo Excel</h2>

        <!-- DROP FILE -->
        <div class="excel-drop" @click="triggerFile">
          <input 
            type="file"
            :key="resetKey"
            ref="fileInput"
            accept=".xlsx, .xls"
            class="hidden-input"
            @change="handleFileSelect"
          >

          <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" fill="currentColor" class="excel-icon"
            viewBox="0 0 16 16">
            <path d="M5.884 6.68a1 1 0 0 0-1.768 0l-3 5.5A1 1 0 0 0 2 13.5h2a1 1 0 0 0 .894-.553L5 11l.106-.213L7 13.5a1 1 0 0 0 .894.553h2a1 1 0 0 0 .884-1.447l-3-5.5z"/>
            <path d="M14 4.5V14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-.5h1V14a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.5H14z"/>
            <path d="M10.5 0A1.5 1.5 0 0 1 12 1.5V4H4V1.5A1.5 1.5 0 0 1 5.5 0h5z"/>
          </svg>

          <span class="excel-text">
            Click aquí para elegir archivo Excel
          </span>

          <p v-if="selectedFile" class="file-selected">
            Seleccionado: <strong>{{ selectedFile.name }}</strong>
          </p>
        </div>

        <!-- LOADING -->
        <div v-if="loading" class="loading-box">
          <div class="loader"></div>
          <p>Cargando archivo...</p>
        </div>

        <!-- BOTÓN CARGAR -->
        <button class="btn-upload" @click="upload" :disabled="!selectedFile || loading">
          <span v-if="!loading" class="flex-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="upload-icon-btn"
              viewBox="0 0 16 16">
              <path d="M.5 9.9a.5.5 0 0 1 .5-.4h4v5a.5.5 0 0 0 1 0v-5h4a.5.5 0 0 1 0 1H6v4a.5.5 0 0 1-1 0v-4H1a.5.5 0 0 1-.5-.6z"/>
              <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3.182 3.182a.5.5 0 0 1-.707.707L8.5 2.707V10.5a.5.5 0 0 1-1 0V2.707L5.646 5.035a.5.5 0 1 1-.707-.707L7.646 1.146z"/>
            </svg>
            Cargar Excel
          </span>

          <span v-else>
            Procesando...
          </span>
        </button>

        <!-- CERRAR -->
        <span class="close-btn" @click="closeModal">×</span>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showModal: Boolean,
    loading: Boolean
  },

  data() {
    return {
      selectedFile: null,
      resetKey: 0, // para resetear input file
    };
  },

  methods: {
    triggerFile() {
      this.$refs.fileInput.click();
    },

    handleFileSelect(event) {
      const file = event.target.files[0];
      this.selectedFile = file;
    },

    upload() {
      if (!this.selectedFile) return;

      this.$emit("set-loading", true);
      this.$emit("file-upload", this.selectedFile);
    },

    closeModal() {
      this.selectedFile = null;
      this.resetKey++;            // 🔥 reinicia el input file
      this.$emit("close");        // 🔥 cierra modal en parent
    },
  }
};
</script>

<style scoped>
.d-block { display: block !important; }

.modal {
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
}

.excel-modal {
  border-radius: 18px;
  position: relative;
  border: none;
  box-shadow: 0px 15px 40px rgba(0, 0, 0, 0.25);
}

.title {
  text-align: center;
  font-weight: 700;
  font-size: 22px;
  margin-bottom: 25px;
}

.excel-drop {
  border: 2px dashed #2e7d32;
  background: #f6fff6;
  border-radius: 16px;
  padding: 40px 20px;
  text-align: center;
  cursor: pointer;
  transition: 0.25s ease;
}

.excel-drop:hover {
  background: #e8ffe8;
  border-color: #1b5e20;
}

.excel-icon { color: #2e7d32; margin-bottom: 10px; }

.excel-text { color: #333; font-size: 15px; }

.file-selected {
  margin-top: 12px;
  color: #333;
}

.hidden-input { display: none; }

.btn-upload {
  margin-top: 30px;
  width: 100%;
  padding: 14px 0;
  border-radius: 12px;
  background: #2e7d32;
  color: #fff;
  font-size: 17px;
  font-weight: 600;
  border: none;
  transition: 0.25s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

.btn-upload:hover { background: #1b5e20; }
.btn-upload:disabled { background: #a5d6a7; cursor: not-allowed; }

.upload-icon-btn { margin-bottom: 2px; }

.close-btn {
  position: absolute;
  top: 12px;
  right: 14px;
  font-size: 26px;
  cursor: pointer;
  color: #777;
}

.close-btn:hover { color: #222; }

.loading-box { text-align: center; margin-top: 20px; }

.loader {
  width: 38px;
  height: 38px;
  border: 4px solid #2e7d32;
  border-bottom-color: transparent;
  border-radius: 50%;
  animation: spin .8s linear infinite;
  margin: 0 auto 10px;
}

@keyframes spin { to { transform: rotate(360deg); } }
</style>
