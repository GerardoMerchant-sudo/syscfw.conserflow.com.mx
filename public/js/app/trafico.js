(self["webpackChunk"] = self["webpackChunk"] || []).push([["trafico"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/AsignacionVehiculo.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/AsignacionVehiculo.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Herramientas/utilerias.js */ "./resources/assets/js/components/Herramientas/utilerias.js");

var config = (__webpack_require__(/*! ../Herramientas/config-vuetables-client */ "./resources/assets/js/components/Herramientas/config-vuetables-client.js").call)(undefined);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      detalle: false,
      empleado: null,
      modal: 0,
      tituloModal: '',
      tipoAccion: 0,
      isLoading: false,
      columns: ['id', 'nombre', 'ap_paterno', 'ap_materno'],
      tableData: [],
      options: {
        headings: {
          'id': 'Formatos',
          'nombre': 'Nombre',
          'ap_paterno': 'A Paterno',
          'ap_materno': 'A Materno'
        },
        perPage: 10,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        sortable: ['nombre', 'ap_paterno', 'ap_materno'],
        filterable: ['nombre', 'ap_paterno', 'ap_materno'],
        filterByColumn: true,
        texts: config.texts
      }
    };
  },
  computed: {},
  methods: {
    getData: function getData() {
      var me = this;
      axios.get('/listaasignacion').then(function (response) {
        me.tableData = response.data;
        console.log(response.data);
      })["catch"](function (error) {
        console.log(error);
      });
    },
    descargar1: function descargar1(data) {
      console.log(data);
      window.open('descargar-valeresguardoT/' + data, '_blank');
    },
    maestro: function maestro() {
      this.$refs.myTable.setFilter({
        'nombre': '',
        'ap_paterno': '',
        'ap_materno': ''
      });
      this.detalle = false;
    },
    setTab: function setTab(tabName) {
      this.activeTab = tabName;
    }
  },
  mounted: function mounted() {
    this.getData();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/Conductores.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/Conductores.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var config = (__webpack_require__(/*! ../Herramientas/config-vuetables-client */ "./resources/assets/js/components/Herramientas/config-vuetables-client.js").call)(undefined);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      modal: 0,
      tituloModal: '',
      tipoAccion: 0,
      isLoading_conductores: false,
      isLoading: false,
      listaEmpleados: [],
      img: [],
      id: 0,
      empleado: '',
      licencia: '',
      entidad: "",
      tipo: '',
      vigencia: ''
    }, "id", 0), "poliza", ''), "list_conductores_activos", []), "list_conductores_inactivos", []), "columns_conductores_inactivos", ['nombre', 'licencia', 'tipo', 'vigencia', 'estado']), "columns", ['id', 'nombre', 'licencia', 'tipo', 'vigencia', 'estado', 'licencia_doc']), "options_conductores", {
      headings: {
        'id': 'Acciones',
        'nombre': 'Empleado',
        'licencia': 'Licencia',
        'tipo': 'Tipo',
        'vigencia': 'Vigencia',
        'estado': "Entidad",
        "licencia_doc": "Licencia"
      },
      perPage: 10,
      perPageValues: [],
      skin: config.skin,
      sortIcon: config.sortIcon,
      filterByColumn: true,
      texts: config.texts
    });
  },
  methods: {
    /**
     * Obtener los conductores activos
     */
    ObtenerConductores: function ObtenerConductores() {
      var _this = this;
      this.isLoading_conductores = true;
      axios.get('vehiculos/conductores/obtener').then(function (res) {
        if (res.data.status) {
          _this.list_conductores_activos = res.data.conductores.filter(function (c) {
            return c.condicion == 1;
          });
          _this.list_conductores_inactivos = res.data.conductores.filter(function (c) {
            return c.condicion == 0;
          });
          _this.isLoading_conductores = false;
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    /**
     * Obtener todos los empleados activos para registrar conductor
     */
    ObtenerEmpleados: function ObtenerEmpleados() {
      var _this2 = this;
      axios.get('generales/empleadoactivos').then(function (res) {
        if (res.data.status) _this2.listaEmpleados = res.data.empleados;else toastr.error(res.data.mensaje);
      });
    },
    /**
     * Abrir modal para registro/actualización de conductor
     */
    abrirModal: function abrirModal() {
      var nuevo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      this.ObtenerEmpleados();
      this.modal = 1;
      if (nuevo) {
        this.tipoAccion = 1;
        this.tituloModal = "Registrar Conductor";
      } else {
        this.tipoAccion = 2;
        this.tituloModal = 'Actualizar Conductor';
        this.id = data.id;
        this.empleado = {
          id: data.empleado_id,
          nombre: data.nombre
        };
        this.licencia = data.licencia;
        this.entidad = data.estado;
        this.tipo = data.tipo;
        this.vigencia = data.vigencia;
      }
    },
    /**
     * Cerrar modal
     */
    CerrarModal: function CerrarModal() {
      this.modal = 0;
      this.empleado = {};
      this.licencia = "";
      this.tipo = "";
      this.vigencia = "";
      this.entidad = "";
      this.img = [];
      $("#file_comprobante").val("");
    },
    /**
     * Registrar/actualizar conductor
     */
    Guardar: function Guardar(nuevo) {
      var _this3 = this;
      this.$validator.validate().then(function (result) {
        if (result) {
          var files = $("#file_comprobante").prop("files");
          var formData = new FormData();

          // Si es actualización, pdf no es obligatorio
          if (nuevo) {
            if (files.length < 1) {
              toastr.warning("Ingrese la licencia del conductor");
              return;
            }
            formData.append('comprobante', files[0]);
          }
          _this3.isLoading = true;
          if (!nuevo) formData.append('id', _this3.id);
          formData.append('empleado_id', _this3.empleado.id);
          formData.append('licencia', _this3.licencia);
          formData.append('tipo', _this3.tipo);
          formData.append('vigencia', _this3.vigencia);
          formData.append('estado', _this3.entidad);
          if (files.length == 1) formData.append('comprobante', files[0]);
          axios.post("vehiculos/conductores/guardar", formData).then(function (res) {
            _this3.isLoading = false;
            if (res.data.status) {
              toastr.success('Guardado correctamente');
              _this3.CerrarModal();
              _this3.ObtenerConductores();
            } else toastr.error(res.data.mensaje);
          });
        }
      });
    },
    /**
     * Descarga el comprobante de licencia
     */
    descargarComprobante: function descargarComprobante(archivo) {
      axios({
        url: '/vehiculos/conductores/licencia/' + archivo,
        method: 'GET',
        responseType: 'blob' // importante
      }).then(function (response) {
        var url = window.URL.createObjectURL(new Blob([response.data]));
        var link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', archivo); //archivo = nombre del archivo alojado en el ftp
        document.body.appendChild(link);
        link.click();
        axios.get('vehiculos/conductores/del_temp/' + archivo).then(_)["catch"](function (error) {
          alert("Error al descargar el archivo. Notifique al administrador");
          console.log(error);
        });
      })["catch"](function (r) {
        toastr.error("Documento no encontrado");
      });
    }
  },
  mounted: function mounted() {
    this.ObtenerConductores();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/EntregaRecepcion.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/EntregaRecepcion.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Herramientas/utilerias.js */ "./resources/assets/js/components/Herramientas/utilerias.js");

var config = (__webpack_require__(/*! ../Herramientas/config-vuetables-client */ "./resources/assets/js/components/Herramientas/config-vuetables-client.js").call)(undefined);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      img: [],
      modal: 0,
      tipoAccion: 0,
      listaCatalogo: [],
      listaEmpleados: [],
      listaProyectos: [],
      id: 0,
      id_rel: 0,
      edo: '',
      datos: {
        unidad: '',
        fecha_entrega: '',
        kilometraje_entrega: '',
        lugar_entrega: '',
        proyecto: '',
        destinatario: ''
      },
      usuario: {
        nombre: ''
      },
      personal: {
        entrega: '',
        recibe: ''
      },
      accesorios_e: {
        uno: 'SI',
        dos: 'SI',
        tres: 'SI',
        cuatro: 'SI',
        cinco: 'SI',
        seis: 'SI',
        siete: 'SI',
        ocho: 'SI',
        nueve: 'SI',
        diez: 'SI',
        once: 'SI',
        doce: 'SI',
        trece: 'SI',
        catorce: 'SI',
        quince: 'SI',
        dieciseis: 'SI',
        diecisiete: 'SI',
        dieciocho: 'SI',
        diecinueve: 'SI',
        veinte: 'SI',
        ventiuno: 'SI',
        ventidos: 'SI'
      },
      accesorios_i: {
        uno: 'SI',
        dos: 'SI',
        tres: 'SI',
        cuatro: 'SI',
        cinco: 'SI',
        seis: 'SI',
        siete: 'SI',
        ocho: 'SI',
        nueve: 'SI',
        diez: 'SI'
      },
      niveles: {
        uno: 'FULL',
        dos: 'FULL',
        tres: 'FULL',
        cuatro: 'FULL',
        cinco: 'FULL',
        seis: 'FULL'
      },
      carroceria: {
        uno: 'BUENO',
        dos: 'BUENO',
        tres: 'BUENO',
        cuatro: 'BUENO',
        cinco: 'BUENO',
        seis: 'BUENO',
        siete: 'BUENO',
        ocho: 'BUENO',
        nueve: 'BUENO',
        diez: 'BUENO',
        once: 'BUENO',
        doce: 'BUENO',
        trece: 'LIMPIO',
        catorce: 'LIMPIO'
      },
      funcionamiento: {
        uno: 'BUENO',
        dos: 'BUENO',
        tres: 'BUENO',
        cuatro: 'BUENO',
        cinco: 'BUENO',
        seis: 'BUENO',
        siete: 'BUENO',
        ocho: 'BUENO',
        nueve: 'BUENO',
        diez: 'BUENO'
      },
      accesorios: {
        uno: 'SI',
        dos: 'SI',
        tres: 'SI',
        cuatro: 'SI',
        cinco: 'SI',
        seis: 'SI',
        siete: 'SI',
        ocho: 'SI',
        nueve: 'SI',
        diez: 'SI'
      },
      cofre: {
        uno: 'SI',
        dos: 'SI',
        tres: 'SI',
        cuatro: 'SI',
        cinco: 'SI',
        seis: 'SI'
      },
      llantas: {
        uno: 'NUEVA',
        dos: 'NUEVA',
        tres: 'NUEVA',
        cuatro: 'NUEVA',
        cinco: 'NUEVA',
        seis: 'NUEVA',
        siete: 'NUEVA',
        ocho: 'NUEVA',
        nueve: 'NUEVA',
        diez: 'NUEVA',
        once: 'NUEVA',
        doce: 'NUEVA',
        trece: 'NUEVA'
      },
      luces: {
        uno: 'SI',
        dos: 'SI',
        tres: 'SI',
        cuatro: 'SI',
        cinco: 'SI',
        seis: 'SI'
      },
      observaciones: '',
      tableData: [],
      columns: ['data.id', 'fecha_entrega', 'unidad', 'placas', 'proyecto', 'descargar', 'condicion'],
      options: {
        headings: {
          'data.id': 'Acciones'
        },
        // Headings,
        perPage: 10,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        filterByColumn: true,
        texts: config.texts
      } //options
    };
  },
  methods: {
    getData: function getData() {
      var _this = this;
      axios.get('vehiculos/unidades/obtener/3').then(function (response) {
        _this.listaCatalogo = response.data.unidades;
      })["catch"](function (e) {
        console.error(e);
      });
      axios.get('entrega/vehiculos/get/').then(function (response) {
        _this.tableData = response.data;
      })["catch"](function (e) {
        console.error(e);
      });
    },
    getLista: function getLista() {
      var _this2 = this;
      this.listaEmpleados = [];
      axios.get('/vertodosempleados').then(function (response) {
        response.data.forEach(function (data) {
          _this2.listaEmpleados.push({
            id: data.id,
            name: data.nombre + ' ' + data.ap_paterno + ' ' + data.ap_materno
          });
        });
      })["catch"](function (error) {
        console.log(error);
      });
      axios.get('/proyecto-listar-todos').then(function (response) {
        response.data.forEach(function (item, i) {
          _this2.listaProyectos.push({
            id: item.id,
            name: item.nombre_corto,
            ubicacion: item.ciudad
          });
        });
      })["catch"](function (e) {
        console.error(e);
      });
    },
    abrirModal: function abrirModal(edo) {
      var _this3 = this;
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      if (edo == 1) {
        this.edo = edo;
        _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.datos);
        this.datos.unidad = '';
        _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.usuario);
        _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.personal);
        this.observaciones = '';
        this.img = [];
        this.modal = 1;
        this.tipoAccion = 1;
      } else if (edo == 2) {
        this.edo = edo;
        _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.datos);
        this.datos.unidad = '';
        _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.usuario);
        _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.personal);
        this.observaciones = '';
        this.img = [];
        this.modal = 1;
        this.tipoAccion = 2;
        this.id = data['id'];
        this.datos = JSON.parse(data['datos']);
        this.usuario.nombre = {
          id: data['usuario'],
          name: data['nombre_usuario']
        };
        this.personal = {
          entrega: {
            id: data['entrega'],
            name: data['nombre_entrega']
          },
          recibe: {
            id: data['recibe'],
            name: data['nombre_recibe']
          }
        };
        this.accesorios_e = JSON.parse(data['accesorios_e']);
        this.accesorios_i = JSON.parse(data['accesorios_i']);
        this.niveles = JSON.parse(data['niveles']);
        this.carroceria = JSON.parse(data['carroceria']);
        this.funcionamiento = JSON.parse(data['funcionamiento']);
        this.accesorios = JSON.parse(data['accesorios']);
        this.cofre = JSON.parse(data['cofre']);
        this.llantas = JSON.parse(data['llantas']);
        this.luces = JSON.parse(data['luces']);
        this.observaciones = data['observaciones'];
        this.getImages(data['id']);
      } else if (edo == 3) {
        this.edo = edo;
        _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.datos);
        this.datos.unidad = '';
        _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.usuario);
        _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.personal);
        this.observaciones = '';
        this.modal = 1;
        this.tipoAccion = 3;
        this.img = [];
        this.id_rel = data['id'];
        this.datos = JSON.parse(data['datos']);
        this.usuario.nombre = {
          id: data['usuario'],
          name: data['nombre_usuario']
        };
        this.personal = {
          entrega: {
            id: data['entrega'],
            name: data['nombre_entrega']
          },
          recibe: {
            id: data['recibe'],
            name: data['nombre_recibe']
          }
        };
        this.accesorios_e = JSON.parse(data['accesorios_e']);
        this.accesorios_i = JSON.parse(data['accesorios_i']);
        this.niveles = JSON.parse(data['niveles']);
        this.carroceria = JSON.parse(data['carroceria']);
        this.funcionamiento = JSON.parse(data['funcionamiento']);
        this.accesorios = JSON.parse(data['accesorios']);
        this.cofre = JSON.parse(data['cofre']);
        this.llantas = JSON.parse(data['llantas']);
        this.luces = JSON.parse(data['luces']);
        this.observaciones = data['observaciones'];
        // this.getImages(data['id']);
      } else if (edo == 4) {
        this.edo = edo;
        _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.datos);
        this.datos.unidad = '';
        _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.usuario);
        _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.personal);
        this.observaciones = '';
        this.modal = 1;
        this.tipoAccion = 4;
        axios.get('get/recepcion/trafico/' + data['id']).then(function (response) {
          _this3.id = response.data['id'];
          _this3.datos = JSON.parse(response.data['datos']);
          _this3.usuario.nombre = {
            id: response.data['usuario'],
            name: response.data['nombre_usuario']
          };
          _this3.personal = {
            entrega: {
              id: response.data['entrega'],
              name: response.data['nombre_entrega']
            },
            recibe: {
              id: response.data['recibe'],
              name: response.data['nombre_recibe']
            }
          };
          _this3.accesorios_e = JSON.parse(response.data['accesorios_e']);
          _this3.accesorios_i = JSON.parse(response.data['accesorios_i']);
          _this3.niveles = JSON.parse(response.data['niveles']);
          _this3.carroceria = JSON.parse(response.data['carroceria']);
          _this3.funcionamiento = JSON.parse(response.data['funcionamiento']);
          _this3.accesorios = JSON.parse(response.data['accesorios']);
          _this3.cofre = JSON.parse(response.data['cofre']);
          _this3.llantas = JSON.parse(response.data['llantas']);
          _this3.luces = JSON.parse(response.data['luces']);
          _this3.observaciones = response.data['observaciones'];
          _this3.getImages(response.data['id']);
        })["catch"](function (e) {
          console.error(e);
        });
      }
    },
    getImages: function getImages(id) {
      var _this4 = this;
      this.img = [];
      axios.get('get/imagenes/entrega/vehiculos/' + id).then(function (response) {
        response.data.forEach(function (item, i) {
          _this4.img.push({
            id: item.id,
            id_rel: item.id_rel,
            name: item.img
          });
        });
      })["catch"](function (e) {
        console.error(e);
      });
    },
    cerrarModal: function cerrarModal() {
      this.modal = 0;
      this.edo = 0;
      this.LimpiarModal();
    },
    cargarImg: function cargarImg() {
      var selectedImage = this.$refs.adjunto.files[0];
      this.imageToBase64(selectedImage);
    },
    imageToBase64: function imageToBase64(file) {
      var _this5 = this;
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        _this5.img.push({
          id: 0,
          id_rel: 0,
          name: reader.result
        });
      };
      reader.onerror = function (error) {
        console.log('Error: ', error);
      };
    },
    deleteu: function deleteu(data, index) {
      var _this6 = this;
      if (data.id == 0) {
        this.img.splice(index, 1);
      } else if (data.id != 0) {
        axios.get('delete/imagenes/entrega/vehiculos/' + data.id).then(function (response) {
          _this6.getImages(_this6.id);
        })["catch"](function (e) {
          console.error(e);
        });
      }
    },
    Guardar: function Guardar(nuevo) {
      var _this7 = this;
      this.$validator.validate().then(function (result) {
        if (result) {
          axios({
            method: nuevo ? 'POST' : 'PUT',
            url: nuevo ? 'entrega/vehiculos/guardar/' : 'entrega/vehiculos/actualizar/',
            data: {
              id: _this7.id,
              datos: _this7.datos,
              usuario: _this7.usuario,
              personal: _this7.personal,
              accesorios_e: _this7.accesorios_e,
              accesorios_i: _this7.accesorios_i,
              niveles: _this7.niveles,
              carroceria: _this7.carroceria,
              funcionamiento: _this7.funcionamiento,
              accesorios: _this7.accesorios,
              cofre: _this7.cofre,
              llantas: _this7.llantas,
              luces: _this7.luces,
              imagenes: _this7.img,
              observaciones: _this7.observaciones
            }
          }).then(function (response) {
            toastr.success(nuevo ? 'Guardado Correctamente' : 'Actualizado Correctamente');
            _this7.modal = 0;
            _this7.getData();
          })["catch"](function (e) {
            console.error(e);
          });
        } else {
          toastr.warning('Complete los campos obligatorios');
        }
      });
    },
    GuardarRep: function GuardarRep(nuevo) {
      var _this8 = this;
      this.$validator.validate().then(function (result) {
        if (result) {
          axios({
            method: nuevo ? 'POST' : 'PUT',
            url: nuevo ? 'recepcion/vehiculos/guardar/' : 'recepcion/vehiculos/actualizar/',
            data: {
              id: _this8.id,
              id_rel: _this8.id_rel,
              datos: _this8.datos,
              usuario: _this8.usuario,
              personal: _this8.personal,
              accesorios_e: _this8.accesorios_e,
              accesorios_i: _this8.accesorios_i,
              niveles: _this8.niveles,
              carroceria: _this8.carroceria,
              funcionamiento: _this8.funcionamiento,
              accesorios: _this8.accesorios,
              cofre: _this8.cofre,
              llantas: _this8.llantas,
              luces: _this8.luces,
              imagenes: _this8.img,
              observaciones: _this8.observaciones
            }
          }).then(function (response) {
            toastr.success(nuevo ? 'Guardado Correctamente' : 'Actualizado Correctamente');
            _this8.modal = 0;
            _this8.getData();
          })["catch"](function (e) {
            console.error(e);
          });
        } else {
          toastr.warning('Complete os campos obligatorios !!!');
        }
      });
    },
    descargar: function descargar(data) {
      window.open('trafico/descargar/entrega/recepcion/' + data['id'], '_blank');
    },
    /**
     * Limpiar el modal
     */
    LimpiarModal: function LimpiarModal() {
      this.datos = {
        unidad: '',
        fecha_entrega: '',
        kilometraje_entrega: '',
        lugar_entrega: '',
        proyecto: '',
        destinatario: ''
      };
      this.usuario = {
        nombre: ''
      };
      this.personal = {
        entrega: '',
        recibe: ''
      };
      this.accesorios_e = {
        uno: 'SI',
        dos: 'SI',
        tres: 'SI',
        cuatro: 'SI',
        cinco: 'SI',
        seis: 'SI',
        siete: 'SI',
        ocho: 'SI',
        nueve: 'SI',
        diez: 'SI',
        once: 'SI',
        doce: 'SI',
        trece: 'SI',
        catorce: 'SI',
        quince: 'SI',
        dieciseis: 'SI',
        diecisiete: 'SI',
        dieciocho: 'SI',
        diecinueve: 'SI',
        veinte: 'SI',
        ventiuno: 'SI',
        ventidos: 'SI'
      };
      this.accesorios_i = {
        uno: 'SI',
        dos: 'SI',
        tres: 'SI',
        cuatro: 'SI',
        cinco: 'SI',
        seis: 'SI',
        siete: 'SI',
        ocho: 'SI',
        nueve: 'SI',
        diez: 'SI'
      };
      this.niveles = {
        uno: 'FULL',
        dos: 'FULL',
        tres: 'FULL',
        cuatro: 'FULL',
        cinco: 'FULL',
        seis: 'FULL'
      };
      this.carroceria = {
        uno: 'BUENO',
        dos: 'BUENO',
        tres: 'BUENO',
        cuatro: 'BUENO',
        cinco: 'BUENO',
        seis: 'BUENO',
        siete: 'BUENO',
        ocho: 'BUENO',
        nueve: 'BUENO',
        diez: 'BUENO',
        once: 'BUENO',
        doce: 'BUENO',
        trece: 'LIMPIO',
        catorce: 'LIMPIO'
      };
      this.funcionamiento = {
        uno: 'BUENO',
        dos: 'BUENO',
        tres: 'BUENO',
        cuatro: 'BUENO',
        cinco: 'BUENO',
        seis: 'BUENO',
        siete: 'BUENO',
        ocho: 'BUENO',
        nueve: 'BUENO',
        diez: 'BUENO'
      };
      this.accesorios = {
        uno: 'SI',
        dos: 'SI',
        tres: 'SI',
        cuatro: 'SI',
        cinco: 'SI',
        seis: 'SI',
        siete: 'SI',
        ocho: 'SI',
        nueve: 'SI',
        diez: 'SI'
      };
      this.cofre = {
        uno: 'SI',
        dos: 'SI',
        tres: 'SI',
        cuatro: 'SI',
        cinco: 'SI',
        seis: 'SI'
      };
      this.llantas = {
        uno: 'NUEVA',
        dos: 'NUEVA',
        tres: 'NUEVA',
        cuatro: 'NUEVA',
        cinco: 'NUEVA',
        seis: 'NUEVA',
        siete: 'NUEVA',
        ocho: 'NUEVA',
        nueve: 'NUEVA',
        diez: 'NUEVA',
        once: 'NUEVA',
        doce: 'NUEVA',
        trece: 'NUEVA'
      };
      this.luces = {
        uno: 'SI',
        dos: 'SI',
        tres: 'SI',
        cuatro: 'SI',
        cinco: 'SI',
        seis: 'SI'
      };
      this.observaciones = '';
    }
  },
  mounted: function mounted() {
    this.getData();
    this.getLista();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/Mantenimiento/Mantenimiento.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/Mantenimiento/Mantenimiento.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Herramientas/utilerias.js */ "./resources/assets/js/components/Herramientas/utilerias.js");
/* CAMBIAR UBICACIÓN  */

var config = (__webpack_require__(/*! ../../Herramientas/config-vuetables-client */ "./resources/assets/js/components/Herramientas/config-vuetables-client.js").call)(undefined);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      // Tabla
      ver_modal_mantenimiento: 0,
      columns_mantenimiento: ['id', 'vehiculo_desc', 'descripcion', 'fecha_inicio', 'fecha_salida', 'empleado_solicita', "tipo"],
      list_mantenimiento: [],
      listaCatalogo: [],
      listaEmpleados: [],
      options_mantenimiento: {
        headings: {
          id: 'Acciones',
          vehiculo: 'Unidad'
        },
        // Headings,
        perPage: 10,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        filterByColumn: true,
        texts: config.texts,
        listColumns: {
          tipo: [{
            id: 1,
            text: 'Preventivo'
          }, {
            id: 2,
            text: 'Correctivo'
          }]
        }
      },
      //options
      // Modal
      titulo_modal_mantenimiento: '',
      tipoAccion_modal_mantenimiento: 0,
      mantenimiento: {
        id: 0,
        unidad: '',
        tipo: '',
        descripcion: '',
        solicita: '',
        recibe: '',
        fecha_inicio: '',
        fecha_salida: '',
        proveedor: '',
        detalle: '',
        materiales: '',
        quimicos: '',
        entrega: '',
        recibe_empleado: ''
      },
      empresa: 1
    }; // return
  },
  //data
  computed: {},
  methods: {
    getDataInicial: function getDataInicial() {
      var _this = this;
      this.list_mantenimiento = [];
      axios.get('mantenimiento/vehiculo/get').then(function (response) {
        response.data.forEach(function (item, i) {
          if (item.empresa == _this.empresa) {
            _this.list_mantenimiento.push(item);
          }
        });
      })["catch"](function (e) {
        console.error(e);
      });
    },
    getData: function getData() {
      var _this2 = this;
      this.listaCatalogo = [];
      axios.get('vehiculos/unidades/obtener/' + this.empresa).then(function (res) {
        if (res.data.status) _this2.listaCatalogo = res.data.unidades;else toastr.error(res.data.mensaje);
      })["catch"](function (e) {
        console.error(e);
      });
    },
    getLista: function getLista() {
      var _this3 = this;
      this.listaEmpleados = [];
      axios.get('/vertodosempleados').then(function (response) {
        response.data.forEach(function (data) {
          _this3.listaEmpleados.push({
            id: data.id,
            name: data.nombre + ' ' + data.ap_paterno + ' ' + data.ap_materno
          });
        });
      })["catch"](function (error) {
        console.log(error);
      });
    },
    AbrirModalMantenimiento: function AbrirModalMantenimiento(nuevo) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      this.getData();
      this.getLista();
      this.ver_modal_mantenimiento = true;
      if (nuevo) {
        // Crear nuevo
        this.titulo_modal_mantenimiento = 'Registrar Mantenimiento';
        this.tipoAccion_modal_mantenimiento = 1;
      } else {
        // Actualizar
        this.titulo_modal_mantenimiento = 'Actualizar Mantenimiento';
        this.tipoAccion_modal_mantenimiento = 2;
        this.mantenimiento.id = data['id'];
        this.mantenimiento.unidad = {
          id: data['unidad_id'],
          unidad: data['unidad'],
          modelo: data['modelo'],
          marca: data['marca'],
          placas: data['placas']
        };
        this.mantenimiento.tipo = data['tipo'];
        this.mantenimiento.descripcion = data['descripcion'];
        this.mantenimiento.solicita = {
          id: data['solicita'],
          name: data['empleado_solicita']
        };
        this.mantenimiento.recibe = {
          id: data['recibe'],
          name: data['empleado_recibe']
        };
        this.mantenimiento.fecha_inicio = data['fecha_inicio'];
        this.mantenimiento.fecha_salida = data['fecha_salida'];
        this.mantenimiento.proveedor = data['proveedor'];
        this.mantenimiento.detalle = data['detalle'];
        this.mantenimiento.materiales = data['materiales'];
        this.mantenimiento.quimicos = data['quimicos'];
        this.mantenimiento.entrega = {
          id: data['entrega'],
          name: data['empleado_entrega']
        };
        this.mantenimiento.recibe_empleado = {
          id: data['recibe'],
          name: data['empleado_recibe_uno']
        };
      } // Fin if
    },
    CerrarModalMantenimiento: function CerrarModalMantenimiento() {
      this.ver_modal_mantenimiento = false;
      _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.mantenimiento);
      this.mantenimiento.unidad = '';
    },
    GuardarMantenimiento: function GuardarMantenimiento(nuevo) {
      var _this4 = this;
      this.$validator.validate().then(function (result) {
        if (result) {
          axios({
            method: nuevo ? 'POST' : 'PUT',
            url: nuevo ? 'mantenimiento/vehiculo/guardar' : 'mantenimiento/vehiculo/actualizar',
            data: {
              id: _this4.mantenimiento.id,
              unidad_id: _this4.mantenimiento.unidad.id,
              tipo: _this4.mantenimiento.tipo,
              descripcion: _this4.mantenimiento.descripcion,
              solicita: _this4.mantenimiento.solicita.id,
              recibe: _this4.mantenimiento.recibe.id,
              fecha_inicio: _this4.mantenimiento.fecha_inicio,
              fecha_salida: _this4.mantenimiento.fecha_salida,
              proveedor: _this4.mantenimiento.proveedor,
              detalle: _this4.mantenimiento.detalle,
              materiales: _this4.mantenimiento.materiales,
              quimicos: _this4.mantenimiento.quimicos,
              entrega: _this4.mantenimiento.entrega.id,
              recibe_empleado: _this4.mantenimiento.recibe_empleado.id,
              empresa: _this4.empresa
            }
          }).then(function (response) {
            _this4.getDataInicial();
            _this4.CerrarModalMantenimiento();
            toastr.success('Correcto !!!');
          })["catch"](function (e) {
            console.error(e);
          });
        } else {
          toastr.warning('Complete todos los campos');
        }
      });
    },
    eliminar: function eliminar(id) {
      var _this5 = this;
      Swal.fire({
        title: 'Esta seguro(a) de eliminar ?',
        text: "Esta opción no se podrá desahacer!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si',
        cancelButtonText: 'No'
      }).then(function (result) {
        if (result.value) {
          axios.get('mantenimiento/vehiculo/eliminar/' + id).then(function (response) {
            toastr.success('Eliminado Correctamente !!!');
            _this5.getDataInicial();
          })["catch"](function (e) {
            console.error(e);
          });
        }
      });
    },
    Descargar: function Descargar(id) {
      window.open("mantenimiento/vehiculo/descargar/" + id, '_blank');
    }
  },
  // Fin metodos
  mounted: function mounted() {
    this.getDataInicial();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/ProveedoresVehiculos.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/ProveedoresVehiculos.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var config = (__webpack_require__(/*! ../Herramientas/config-vuetables-client */ "./resources/assets/js/components/Herramientas/config-vuetables-client.js").call)(undefined);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      //// Proveedor
      url_proveedor: "vehiculos/proveedor",
      tipoAccion_proveedor: 1,
      tipoCardProveedor: 1,
      ver_modal_proveedor: false,
      tituloModal_proveedor: "",
      proveedor_id: 0,
      isGuardarproveedor_loading: false,
      isObtenerproveedor_loading: false,
      rfc_valido: false,
      columns_proveedor: ["id", "nombre", "razon_social", "rfc"],
      list_proveedor: [],
      proveedor: {},
      options_proveedor: {
        headings: {
          id: "Acciones",
          nombre: "Nombre comercial",
          razon_social: "Razón social",
          rfc: "RFC"
        },
        perPage: 10,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        filterByColumn: true,
        texts: config.texts
      }
    };
  },
  methods: {
    // Metodos
    /**
     * Obtener todos los registros
     */
    ObtenerProveedor: function ObtenerProveedor() {
      var _this = this;
      this.isObtenerproveedor_loading = true;
      axios.get(this.url_proveedor + "/obtener").then(function (res) {
        _this.isObtenerproveedor_loading = false;
        if (res.data.status) {
          _this.list_proveedor = res.data.proveedores;
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    /**
     * Abrir modal Proveedor
     */
    AbrirModalProveedor: function AbrirModalProveedor(nuevo) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.ver_modal_proveedor = true;
      if (nuevo) {
        this.tituloModal_proveedor = "Registrar Proveedores";
        this.tipoAccion_proveedor = 1;
      } else {
        this.tituloModal_proveedor = "Actualizar Proveedores";
        this.tipoAccion_proveedor = 2;
        this.proveedor_id = data.id;
        this.proveedor = _objectSpread({}, data);
      }
    },
    /**
     * Registrar Proveedor
     */
    RegistrarProveedor: function RegistrarProveedor(nuevo) {
      var _this2 = this;
      this.$validator.validate().then(function (isValid) {
        if (!isValid) return;
        if (!_this2.rfc_valido) return;
        var data = new FormData();
        if (!nuevo) data.append("id", _this2.proveedor_id);
        data.append("nombre", _this2.proveedor.nombre);
        data.append("razon_social", _this2.proveedor.razon_social);
        data.append("rfc", _this2.proveedor.rfc);
        _this2.isGuardarproveedor_loading = true;
        axios.post(_this2.url_proveedor + "/guardar", data).then(function (res) {
          _this2.isGuardarproveedor_loading = false;
          if (res.data.status) {
            toastr.success("Guardado correctamente");
            _this2.ObtenerProveedor();
            _this2.CerrarModalProveedor();
          } else {
            toastr.error(res.data.mensaje);
          }
        });
      });
    },
    /**
     * Cerrar modal
     */
    CerrarModalProveedor: function CerrarModalProveedor() {
      this.ver_modal_proveedor = false;
      this.proveedor = {};
    },
    ValidarRFC: function ValidarRFC() {
      this.rfc_valido = this.ValidarRFC_aux();
    },
    /**
     * Validar RFC
     */
    ValidarRFC_aux: function ValidarRFC_aux() {
      var rfc = this.proveedor.rfc;
      var aceptarGenerico = true;
      var re = /^([A-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$/;
      var validado = rfc.match(re);
      if (!validado)
        //Coincide con el formato general del regex?
        return false;

      //Separar el dígito verificador del resto del RFC
      var digitoVerificador = validado.pop(),
        rfcSinDigito = validado.slice(1).join(''),
        len = rfcSinDigito.length,
        //Obtener el digito esperado
        diccionario = "0123456789ABCDEFGHIJKLMN&OPQRSTUVWXYZ Ñ",
        indice = len + 1;
      var suma, digitoEsperado;
      if (len == 12) suma = 0;else suma = 481; //Ajuste para persona moral

      for (var i = 0; i < len; i++) suma += diccionario.indexOf(rfcSinDigito.charAt(i)) * (indice - i);
      digitoEsperado = 11 - suma % 11;
      if (digitoEsperado == 11) digitoEsperado = 0;else if (digitoEsperado == 10) digitoEsperado = "A";

      //El dígito verificador coincide con el esperado?
      // o es un RFC Genérico (ventas a público general)?
      if (digitoVerificador != digitoEsperado && (!aceptarGenerico || rfcSinDigito + digitoVerificador != "XAXX010101000")) return false;else if (!aceptarGenerico && rfcSinDigito + digitoVerificador == "XEXX010101000") return false;
      return true;
    }
  },
  mounted: function mounted() {
    this.ObtenerProveedor();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/Reportes/Combustibles.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/Reportes/Combustibles.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Herramientas/utilerias.js */ "./resources/assets/js/components/Herramientas/utilerias.js");

var config = (__webpack_require__(/*! ../../Herramientas/config-vuetables-client */ "./resources/assets/js/components/Herramientas/config-vuetables-client.js").call)(undefined);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      PermisosCRUD: {},
      id: 0,
      cantidad_bidones: 1,
      tipo_vale: 0,
      proveedor: {},
      isGuardar_loading: false,
      isObtener_loading: false,
      empresa_nombre: "",
      empresa: 0,
      // Todos
      folio: '',
      fecha: '',
      tipo_deposito: 1,
      proyecto: {},
      list_proveedores: [],
      operador: '',
      factura: '',
      placas: '',
      unidad: {},
      producto: '',
      kilometraje: '',
      cancelado: false,
      cantidad: '',
      precio: '',
      subtotal: '',
      iva: '',
      total: '',
      ubicacion: 1,
      reporte: {
        inicio: "",
        fin: ""
      },
      listaEmpleados: [],
      listaProyectos: [],
      list_unidades: [],
      total_aux: 0,
      horas: 0,
      img: [],
      list_combustible: [],
      columns: ['id', 'vp_nombre', 'folio', 'fecha', 'nombre_corto', 'operador', 'factura', 'unidad', "cantidad_bidones", 'total', "condicion", "ubicacion", "tipo_deposito"],
      options: {
        headings: {
          id: 'Acciones',
          vp_nombre: "Proveedor",
          nombre_corto: "Proyecto",
          tipo_deposito: "Tipo"
        },
        perPage: 10,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        filterByColumn: true,
        texts: config.texts,
        listColumns: {
          "condicion": [{
            id: 1,
            text: "Activo"
          }, {
            id: 0,
            text: "Cancelado"
          }],
          "ubicacion": [{
            id: 1,
            text: "Tehuacán"
          }, {
            id: 2,
            text: "Coatzacoalcos"
          }],
          "tipo_deposito": [{
            id: 1,
            text: "VALE"
          }, {
            id: 2,
            text: "TRANSFERENCIA"
          }]
        }
      },
      modal: 0,
      titulo: '',
      tipoAccion: 0,
      ubicacion_formato: 1
    };
  },
  methods: {
    /**
     * Cambiar empresa
     */
    MostrarEmpresa: function MostrarEmpresa(empresa_id) {
      this.empresa = empresa_id;
      if (empresa_id == 1) this.empresa_nombre = "CONSERFLOW";else if (empresa_id == 2) this.empresa_nombre = "CSCT";else this.empresa_nombre = "PENDIENTE";
      // this.empresa_nombre=empresa_id==1?"":"CSCT";
      this.ObtenerCombustible();
    },
    /**
     * Obtiene los registros del combustible
     */
    ObtenerCombustible: function ObtenerCombustible() {
      var _this = this;
      this.isObtener_loading = true;
      axios.get('vehiculos/combustible/obtener/' + this.empresa).then(function (res) {
        _this.isObtener_loading = false;
        if (res.data.status) {
          _this.list_combustible = res.data.combustible;
        } else toastr.error(res.data.mensaje);
      });
    },
    ObtenerEmpleados: function ObtenerEmpleados() {
      var _this2 = this;
      axios.get('generales/empleadoactivos').then(function (res) {
        if (res.data.status) {
          _this2.listaEmpleados = res.data.empleados;
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    ObtenerProyectos: function ObtenerProyectos() {
      var _this3 = this;
      axios.get("generales/proyectos/1").then(function (res) {
        if (res.data.status) {
          _this3.listaProyectos = res.data.proyectos;
        } else {
          toastr.mensaje(res.data.mensaje);
        }
      });
    },
    ObtenerProveedores: function ObtenerProveedores() {
      var _this4 = this;
      axios.get("vehiculos/proveedor/obtener").then(function (res) {
        if (res.data.status) {
          _this4.list_proveedores = res.data.proveedores;
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    ObtenerUnidades: function ObtenerUnidades() {
      var _this5 = this;
      axios.get("vehiculos/combustible/obtenerunidades").then(function (res) {
        if (res.data.status) {
          _this5.list_unidades = res.data.unidades;
        } else toastr.error(ress.data.mensaje);
      });
    },
    abrirModal: function abrirModal(edo) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      this.ObtenerEmpleados();
      this.ObtenerProyectos();
      this.ObtenerUnidades();
      this.ObtenerProveedores();
      this.modal = 1;
      if (edo == 1) {
        this.titulo = 'Guardar';
        this.tipoAccion = 1;
      } else if (edo == 2) {
        if (data["unidad_id"] == -1)
          // Bidones
          {
            this.tipo_vale = 2;
            this.cantidad_bidones = data["cantidad_bidones"];
          } else {
          this.tipo_vale = 1;
        }
        this.proveedor = {
          id: data["vp_id"],
          razon_social: data["vp_nombre"]
        };
        this.titulo = 'Actualizar';
        this.tipoAccion = 2;
        this.id = data['id'];
        // this.proveedor = data['proveedor'];
        this.folio = data['folio'];
        this.fecha = data['fecha'];
        this.proyecto = {
          id: data['proyecto_id'],
          nombre_corto: data['nombre_corto']
        };
        this.operador = {
          id: data["operador_id"],
          nombre: data['operador']
        };
        this.factura = data['factura'];
        this.unidad = {
          id: data["unidad_id"],
          placas: data['placas'],
          unidad: data['unidad']
        };
        this.producto = data['producto_id'];
        this.horas = data['horas'];
        this.kilometraje = data['kilometraje'];
        this.cantidad = data['cantidad'];
        this.precio = data['precio'];
        this.subtotal = data['subtotal'];
        this.iva = data['iva'];
        this.ubicacion = data['ubicacion'];
        this.total = data['total'];
        this.tipo_deposito = data['tipo_deposito'];
        this.getImages(data['id']);
      }
    },
    getImages: function getImages(id) {
      var _this6 = this;
      this.img = [];
      axios.get('vehiculos/combustible/obtenerimg/' + id).then(function (response) {
        if (response.data.length != 0) {
          _this6.img.push({
            id: response.data.id,
            name: response.data.img
          });
        }
      });
    },
    vaciar: function vaciar() {
      this.id = 0;
      this.folio = '';
      this.tipo_deposito = 1;
      this.fecha = '';
      this.proyecto = {};
      this.operador = {};
      this.factura = '';
      this.placas = '';
      this.unidad = {};
      this.producto = 1;
      this.kilometraje = 0;
      this.cantidad = 0;
      this.precio = 0;
      this.subtotal = 0;
      this.iva = 0;
      this.total = 0;
      this.img = [];
    },
    CerrarModal: function CerrarModal() {
      this.modal = 0;
      this.vaciar();
      this.proyecto = {};
      this.tipo_vale = 0;
    },
    cargarImg: function cargarImg() {
      if (this.img.length > 0) {
        toastr.warning('Solo se puede adjuntar un archivo');
      } else {
        var selectedImage = this.$refs.adjunto.files[0];
        this.imageToBase64(selectedImage);
      }
    },
    imageToBase64: function imageToBase64(file) {
      var _this7 = this;
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        _this7.img.push({
          id: 0,
          name: reader.result
        });
      };
      reader.onerror = function (error) {
        console.log('Error: ', error);
      };
    },
    /**
     * Registrar el vale de combustible
     */
    Guardar: function Guardar(nuevo) {
      var _this8 = this;
      this.$validator.validate().then(function (isValid) {
        if (!isValid) return;
        _this8.isGuardar_loading = true;
        var data = new FormData();
        // Comprobar imagen
        if (_this8.img.length == 1) data.append("adjunto", _this8.img[0]["name"]);
        if (_this8.tipo_vale == 2) {
          _this8.unidad.id = -1;
        } else {
          _this8.cantidad_bidones = 0;
        }
        if (_this8.cancelado) data.append("condicion", 0);
        if (!nuevo) data.append("id", _this8.id);
        data.append("proveedor_id", _this8.proveedor.id);
        data.append("folio", _this8.folio);
        data.append("fecha", _this8.fecha);
        data.append("proyecto_id", _this8.proyecto.id);
        data.append("cantidad_bidones", _this8.cantidad_bidones);
        data.append("operador_id", _this8.operador.id);
        data.append("factura", _this8.factura);
        data.append("tipo_deposito", _this8.tipo_deposito);
        data.append("ubicacion", _this8.ubicacion);
        data.append("unidad_id", _this8.unidad.id);
        data.append("producto_id", _this8.producto);
        data.append("kilometraje", _this8.kilometraje);
        data.append("horas", _this8.horas);
        data.append("cantidad", _this8.cantidad);
        data.append("precio", _this8.precio);
        data.append("subtotal", _this8.subtotal);
        data.append("iva", _this8.iva);
        data.append("total", _this8.total);
        axios.post("vehiculos/combustible/guardar", data).then(function (res) {
          _this8.isGuardar_loading = false;
          if (res.data.status) {
            toastr.success('Registrado correctamente');
            _this8.ObtenerCombustible();
            _this8.CerrarModal();
          } else {
            toastr.error(res.data.mensaje);
          }
        })["catch"](function (e) {
          console.error(e);
        });
      });
    },
    deleteu: function deleteu(data, index) {
      var _this9 = this;
      if (data.id == 0) {
        this.img.splice(index, 1);
      } else if (data.id != 0) {
        axios.get('vehiculos/combustible/borrarimg/' + data.id).then(function (response) {
          _this9.getImages(_this9.id);
        })["catch"](function (e) {
          console.error(e);
        });
      }
    },
    eliminar: function eliminar(id) {
      var _this0 = this;
      axios.get('vehiculos/combustible/eliminar/' + id).then(function (res) {
        if (res.data.status) {
          toastr.success('Eliminado correctamente');
          _this0.ObtenerCombustible();
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    // Registrar vale como cancelado
    CancelarVale: function CancelarVale() {
      this.proyecto = {
        id: -99,
        nombre_corto: "N/A"
      };
      this.operador = {
        id: -99,
        nombre: "N/A"
      };
      this.tipo_vale = 1;
      this.unidad = {
        id: -99,
        placas: "N/A",
        modelo: "N/A"
      };
      this.horas = 0;
      this.kilometraje = 0;
      this.cantidad = 0;
      this.cantidad_bidones = 0;
      this.precio = 0;
      this.producto = 0;
      this.subtotal = 0;
      this.factura = "CANCELADO";
      this.iva = 0;
      this.total = 0;
    },
    CambiarTipoDeposito: function CambiarTipoDeposito() {
      this.folio = "TRANSFERENCIA";
    },
    Reporte: function Reporte() {
      if (this.reporte.inicio == "") return;
      if (this.reporte.fin == "") return;
      window.open('vehiculos/combustible/reporte/' + this.reporte.inicio + "&" + this.reporte.fin + "&" + this.ubicacion_formato, '_blank');
    }
  },
  mounted: function mounted() {
    this.PermisosCRUD = _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].getCRUD(this.$route.path);
    this.MostrarEmpresa(1);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/Servicios/MantenimientoAnual.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/Servicios/MantenimientoAnual.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* CAMBIAR UBICACIÓN  */
var config = (__webpack_require__(/*! ../../Herramientas/config-vuetables-client */ "./resources/assets/js/components/Herramientas/config-vuetables-client.js").call)(undefined);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      folio: "",
      tipoCard: 1,
      url: "/vehiculos/mttoanual",
      // Tabla 
      ver_modal_anual: 0,
      empresa: 1,
      columns_anual: ['id', 'vehiculo', 'placas', 'servicio', 'mes', 'anio', 'observaciones'],
      columns_anios: ['id', "descripcion", "descargar"],
      list_anual: [],
      list_anios: [],
      options_anual: {
        headings: {
          id: 'Acciones',
          descripcion: "Descripción"
        },
        // Headings,
        perPage: 10,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        filterByColumn: true,
        texts: config.texts
      },
      //options 
      options_anios: {
        headings: {
          id: 'Acciones'
        },
        // Headings,
        perPage: 10,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        filterByColumn: true,
        sortable: ['id', "descripcion", "descargar"],
        filterable: ['id', "descripcion", "descargar"],
        texts: config.texts
      },
      //options 
      // Modal
      list_vehiculos: [],
      list_placas: [],
      titulo_modal_anual: '',
      tipoAccion_modal_anual: 0,
      anual_modal: {
        vehiculo: {
          placas: ""
        }
      },
      list_meses: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] // return
    };
  },
  //data
  computed: {},
  methods: {
    /**
     * Obtiene los reportes por año
     */
    ObtenerAnios: function ObtenerAnios() {
      var _this = this;
      axios.get(this.url + "/obteneranios/" + this.empresa).then(function (res) {
        if (res.data.status) {
          _this.list_anios = res.data.anios;
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    /**
     * Obtener los mantenimientos de la empresa actual
     */
    ObtenerMantenimientos: function ObtenerMantenimientos(anio) {
      var _this2 = this;
      this.tipoCard = 2;
      this.isMantenimientosLoading = true;
      axios.get(this.url + "/obtener/" + this.empresa + "&" + anio).then(function (res) {
        _this2.isMantenimientosLoading = false;
        if (res.data.status) {
          _this2.folio = "Programa de servicios vehiculares " + anio;
          _this2.list_anual = res.data.mantenimientos;
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    AbrirModalAnual: function AbrirModalAnual(nuevo) {
      var model = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      this.ObtenerVehiculos();
      this.ver_modal_anual = true;
      if (nuevo) {
        // Crear nuevo
        this.titulo_modal_anual = 'Registrar';
        this.tipoAccion_modal_anual = 1;
      } else {
        // Actualizar
        this.titulo_modal_anual = 'Actualizar';
        this.tipoAccion_modal_anual = 2;
        this.anual_modal = {
          id: model.id,
          vehiculo: {
            id: model.unidad_id,
            nombre: model.nombre,
            placas: model.placas
          },
          mes: model.mes,
          anio: model.anio,
          observaciones: model.observaciones,
          servicio: model.servicio
        };
      } // Fin if
    },
    CerrarModalAnual: function CerrarModalAnual() {
      this.ver_modal_anual = false;
      this.anual_modal = {
        vehiculo: {
          placas: ""
        },
        mes: this.list_meses[0],
        anio: "2018"
      };
    },
    /**
     * Obtiene todos los vehiculos
     */
    ObtenerVehiculos: function ObtenerVehiculos() {
      var _this3 = this;
      axios.get(this.url + "/obtenerunidades/" + this.empresa).then(function (res) {
        _this3.list_vehiculos = res.data.unidades;
      });
    },
    /**
     * Registra o actualiza
     */
    GuardarAnual: function GuardarAnual(nuevo) {
      var _this4 = this;
      this.$validator.validate().then(function (isValid) {
        if (!isValid) return;
        var data = new FormData();
        if (!nuevo) data.append("id", _this4.anual_modal.id);
        data.append("unidad_id", _this4.anual_modal.vehiculo.id);
        data.append("servicio", _this4.anual_modal.servicio);
        data.append("mes", _this4.anual_modal.mes);
        data.append("anio", _this4.anual_modal.anio);
        data.append("empresa", _this4.empresa);
        data.append("observaciones", _this4.anual_modal.observaciones);
        _this4.isGuardarLoading = true;
        axios.post(_this4.url + "/guardar", data).then(function (res) {
          if (res.data.status) {
            _this4.isGuardarLoading = false;
            toastr.success("Guardado correctamente");
            _this4.ObtenerMantenimientos(_this4.anual_modal.anio);
            _this4.CerrarModalAnual();
          } else {
            toastr.error(res.data.mensaje);
          }
        });
      });
    },
    /**
     * Obtiene el nombre del mes ingresado
     */
    ObtenerMes: function ObtenerMes(n) {
      var meses = ["ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"];
      return meses[n - 1];
    },
    /**
     * Descargar formato
     */
    Descargar: function Descargar(anio) {
      window.open(this.url + "/descargar/" + this.empresa + "&" + anio, '_blank');
    }
  },
  // Fin metodos
  mounted: function mounted() {
    this.ObtenerAnios();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/Solicitud/Solicitud.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/Solicitud/Solicitud.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Herramientas/utilerias.js */ "./resources/assets/js/components/Herramientas/utilerias.js");
/* CAMBIAR UBICACIÓN  */

var config = (__webpack_require__(/*! ../../Herramientas/config-vuetables-client */ "./resources/assets/js/components/Herramientas/config-vuetables-client.js").call)(undefined);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      url: "/vehiculos/solicitud",
      empresa: 1,
      // Tabla 
      ver_modal_solicitud: 0,
      columns_solicitud: ['id', "proyecto", 'fecha_solicitud', 'folio', 'clase_tipo', 'tiempo'],
      list_solicitud: [],
      isGuardarLoading: false,
      options_solicitud: {
        headings: {
          id: 'Acciones',
          fecha_solicitud: 'Fecha',
          folio: 'Folio',
          clase_tipo: 'Tipo Unidad',
          tiempo: 'Lapso de tiempo',
          fecha_inicio: 'Fecha de inicio',
          fecha_fin: 'Fecha de fin',
          ciudad: 'Ciudad',
          estado: 'Estado',
          poblacion: 'Población',
          necesidad: 'Necesidad',
          solicita_id: 'Empleado Solicita',
          autoriza_id: 'Empleado Autoriza'
        },
        // Headings,
        perPage: 10,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        filterByColumn: true,
        texts: config.texts
      },
      //options 
      list_unidades: [],
      lista_responsables: [],
      responsable: {},
      list_empleados: [],
      list_tipos: [],
      list_proyectos: [],
      // Modal
      titulo_modal_solicitud: '',
      tipoAccion_modal_solicitud: 0,
      solicitud_modal: {}
    }; // return
  },
  //data
  computed: {},
  methods: {
    /**
     * Obtiene las solicitudes de vehiculos
     */
    ObtenerSolicitudes: function ObtenerSolicitudes() {
      var _this = this;
      this.isSolicitudesLading = true;
      axios.get(this.url + "/obtener/" + this.empresa).then(function (res) {
        _this.isSolicitudesLading = false;
        if (res.data.status) {
          _this.list_solicitud = res.data.solicitudes;
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    AbrirModalSolicitud: function AbrirModalSolicitud(nuevo) {
      var model = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      this.ObtenerEmpleados();
      this.ObtenerProyectos();
      this.ObtenerTiposUnidad();
      this.ver_modal_solicitud = true;
      if (nuevo) {
        this.solicitud_modal.proyecto = {
          id: -1,
          nombre_corto: "Sin proyecto"
        };
        // Crear nuevo
        this.titulo_modal_solicitud = 'Registrar Solicitud';
        this.tipoAccion_modal_solicitud = 1;
      } else {
        console.error(model);
        // Obtener Participantes
        this.ObtenerResponsables(model.id);
        this.solicitud_modal.unidad = {
          id: model.unidad_id,
          nombre: model.nombre_unidad,
          placas: model.placas,
          modelo: model.modelo
        };
        this.solicitud_modal.id = model.id;
        // Actualizar
        this.titulo_modal_solicitud = 'Actualizar Solicitud';
        this.tipoAccion_modal_solicitud = 2;
        this.solicitud_modal.fecha_solicitud = model.fecha_solicitud;
        this.solicitud_modal.folio = model.folio;
        this.solicitud_modal.tipo_unidad = {
          id: model.tipo_unidad_id,
          clase_tipo: model.clase_tipo
        };
        this.solicitud_modal.tiempo = model.tiempo;
        this.solicitud_modal.fecha_inicio = model.fecha_inicio;
        this.solicitud_modal.fecha_fin = model.fecha_fin;
        this.solicitud_modal.ciudad = model.ciudad;
        this.solicitud_modal.estado = model.estado;
        this.solicitud_modal.poblacion = model.poblacion;
        this.solicitud_modal.necesidad = model.necesidad;
        this.solicitud_modal.solicita = {
          id: model.solicita_id,
          nombre: model.solicita
        };
        this.solicitud_modal.autoriza = {
          id: model.autoriza_id,
          nombre: model.autoriza
        };
        this.solicitud_modal.proyecto = {
          id: model.proyecto_id,
          nombre_corto: model.proyecto
        };
      } // Fin if
    },
    /**
     * Obtiene los responsables de la solicitud
     */
    ObtenerResponsables: function ObtenerResponsables(id) {
      var _this2 = this;
      axios.get(this.url + "/obtenerresponsables/" + id).then(function (res) {
        if (res.data.status) {
          _this2.lista_responsables = res.data.responsables;
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    /**
     * Obtiene todos los empleados
     */
    ObtenerEmpleados: function ObtenerEmpleados() {
      var _this3 = this;
      axios.get("generales/empleadoactivos").then(function (res) {
        if (res.data.status) {
          _this3.list_empleados = res.data.empleados;
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    /**
     * Obtiene todos los proyectos
     */
    ObtenerProyectos: function ObtenerProyectos() {
      var _this4 = this;
      axios.get("generales/proyectos/1").then(function (res) {
        if (res.data.status) {
          _this4.list_proyectos = res.data.proyectos;
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    /**
     * Obtiene los tipos de unidad registrados
     */
    ObtenerTiposUnidad: function ObtenerTiposUnidad() {
      var _this5 = this;
      axios.get("vehiculos/solicitud/clasetipo").then(function (res) {
        if (res.data.status) _this5.list_tipos = res.data.tipos;else toastr.error(res.data.mensaje);
      });
    },
    /**
     * Registra o actualiza la solicitud actual
     */
    GuardarSolicitud: function GuardarSolicitud(nuevo) {
      var _this6 = this;
      // Validar personas responsables
      if (this.lista_responsables.length == 0) {
        toastr.warning("Seleccione al menos un responsable");
        return;
      }
      var temporales = this.lista_responsables.filter(function (a) {
        return a.temp;
      });
      var ids = [];
      temporales.forEach(function (r) {
        ids.push(r.id);
      });
      // Validar datos
      this.$validator.validate().then(function (isValid) {
        if (!isValid) return;
        var data = new FormData();
        if (!nuevo) data.append("id", _this6.solicitud_modal.id);
        data.append("fecha_solicitud", _this6.solicitud_modal.fecha_solicitud);
        data.append("folio", _this6.solicitud_modal.folio);
        data.append("tipo_unidad_id", _this6.solicitud_modal.tipo_unidad.id);
        data.append("unidad_id", _this6.solicitud_modal.unidad.id);
        data.append("tiempo", _this6.solicitud_modal.tiempo);
        data.append("fecha_inicio", _this6.solicitud_modal.fecha_inicio);
        data.append("fecha_fin", _this6.solicitud_modal.fecha_fin);
        data.append("ciudad", _this6.solicitud_modal.ciudad);
        data.append("estado", _this6.solicitud_modal.estado);
        data.append("poblacion", _this6.solicitud_modal.poblacion);
        data.append("necesidad", _this6.solicitud_modal.necesidad);
        data.append("solicita_id", _this6.solicitud_modal.solicita.id);
        data.append("autoriza_id", _this6.solicitud_modal.autoriza.id);
        data.append("responsables", ids);
        data.append("empresa", _this6.empresa);
        data.append("proyecto_id", _this6.solicitud_modal.proyecto.id);
        _this6.isGuardarLoading = true;
        axios.post(_this6.url + "/guardar", data).then(function (res) {
          if (res.data.status) {
            _this6.isGuardarLoading = false;
            toastr.success("Guardado correctamente");
            _this6.CerrarModalSolicitud();
            _this6.ObtenerSolicitudes();
          } else {
            toastr.error(res.data.mensaje);
          }
        });
      });
    },
    /**
     * Anade un participante a la lista
     */
    AgregarResponsable: function AgregarResponsable() {
      if (this.responsable == null) return;
      if (this.responsable.id == null) return;
      this.lista_responsables.push({
        id: this.responsable.id,
        nombre: this.responsable.nombre,
        temp: true
      });
      this.responsable = {};
    },
    /**
     * Elimina el riesgo actual de la lista de temporales
     */
    BorrarTemp: function BorrarTemp(index) {
      this.lista_responsables.splice(index, 1);
    },
    CerrarModalSolicitud: function CerrarModalSolicitud() {
      this.ver_modal_solicitud = false;
      this.solicitud_modal = {
        solicita: {},
        autoriza: {}
      };
      this.lista_responsables = [];
    },
    /**
     * Obtiene las unidades del tipo seleccionado
     */
    ObtenerUnidades: function ObtenerUnidades() {
      var _this7 = this;
      if (this.solicitud_modal.tipo_unidad == null) return;
      axios.get(this.url + "/portipo/" + this.empresa + "&" + this.solicitud_modal.tipo_unidad.id).then(function (res) {
        if (res.data.status) {
          _this7.list_unidades = res.data.unidades;
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    /**
     * Descarga el formato de la solicitud
     */
    Descargar: function Descargar(id) {
      window.open(this.url + "/descargar/" + id, '_blank');
    }
  },
  // Fin metodos
  mounted: function mounted() {
    this.ObtenerSolicitudes();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/TipoServicio.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/TipoServicio.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Herramientas/utilerias.js */ "./resources/assets/js/components/Herramientas/utilerias.js");

var config = (__webpack_require__(/*! ../Herramientas/config-vuetables-client */ "./resources/assets/js/components/Herramientas/config-vuetables-client.js").call)(undefined);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      tipoServicio: {
        id: 0,
        nombre: ''
      },
      modal: 0,
      tituloModal: '',
      tipoAccion: 0,
      isLoading: false,
      columns: ['id', 'nombre'],
      tableData: [],
      options: {
        headings: {
          nombre: 'Nombre',
          id: 'Acciones'
        },
        perPage: 10,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        sortable: ['nombre'],
        filterable: ['nombre'],
        filterByColumn: true,
        texts: config.texts
      }
    };
  },
  computed: {},
  methods: {
    getData: function getData() {
      var me = this;
      axios.get('/tiposerviciotrafico').then(function (response) {
        me.tableData = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    guardarTipoServicio: function guardarTipoServicio(nuevo) {
      var _this = this;
      this.$validator.validate().then(function (result) {
        if (result) {
          _this.isLoading = true;
          var me = _this;
          axios({
            method: nuevo ? 'POST' : 'PUT',
            url: nuevo ? '/tiposerviciotrafico/registrar' : '/tiposervicios/actualizar',
            data: {
              'nombre': _this.tipoServicio.nombre,
              'id': _this.tipoServicio.id
            }
          }).then(function (response) {
            me.isLoading = false;
            if (response.data.status) {
              me.cerrarModal();
              me.getData();
              if (!nuevo) {
                toastr.success('Tipo de servicio Actualizado Correctamente');
              } else {
                toastr.success('Tipo de servicio Registrado Correctamente');
              }
            } else {
              swal({
                type: 'error',
                html: response.data.errors.join('<br>')
              });
            }
          })["catch"](function (error) {
            console.log(error);
          });
        }
      });
    },
    cerrarModal: function cerrarModal() {
      this.modal = 0;
      this.tituloModal = '';
      _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.tipoServicio);
    },
    abrirModal: function abrirModal(modelo, accion) {
      var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      switch (modelo) {
        case "tipo-servicio":
          {
            switch (accion) {
              case 'registrar':
                {
                  this.modal = 1;
                  this.tituloModal = 'Registrar tipo servicio';
                  _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.tipoServicio);
                  this.tipoAccion = 1;
                  break;
                }
              case 'actualizar':
                {
                  this.modal = 1;
                  this.tituloModal = 'Actualizar tipo servicio';
                  this.tipoAccion = 2;
                  this.tipoServicio.id = data['id'];
                  this.tipoServicio.nombre = data['nombre'];
                  break;
                }
            }
          }
      }
    }
  },
  mounted: function mounted() {
    this.getData();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/Unidades/DetalleUnidades.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/Unidades/DetalleUnidades.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Servicios = function Servicios(r) {
  return __webpack_require__.e(/*! require.ensure | trafico */ "trafico").then((function () {
    return r(__webpack_require__(/*! ./Servicio.vue */ "./resources/assets/js/components/Trafico/Unidades/Servicio.vue"));
  }).bind(null, __webpack_require__))['catch'](__webpack_require__.oe);
};
var Poliza = function Poliza(r) {
  return __webpack_require__.e(/*! require.ensure | trafico */ "trafico").then((function () {
    return r(__webpack_require__(/*! ./Poliza.vue */ "./resources/assets/js/components/Trafico/Unidades/Poliza.vue"));
  }).bind(null, __webpack_require__))['catch'](__webpack_require__.oe);
};
var Verificacion = function Verificacion(r) {
  return __webpack_require__.e(/*! require.ensure | trafico */ "trafico").then((function () {
    return r(__webpack_require__(/*! ../Verificacion.vue */ "./resources/assets/js/components/Trafico/Verificacion.vue"));
  }).bind(null, __webpack_require__))['catch'](__webpack_require__.oe);
};
// const Control = r => require.ensure([], () => r(require('./Control.vue')), 'trafico');
var Tenencia = function Tenencia(r) {
  return __webpack_require__.e(/*! require.ensure | trafico */ "trafico").then((function () {
    return r(__webpack_require__(/*! ./Tenencia.vue */ "./resources/assets/js/components/Trafico/Unidades/Tenencia.vue"));
  }).bind(null, __webpack_require__))['catch'](__webpack_require__.oe);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      Unidades: {
        id: '',
        unidad: '',
        marca: '',
        modelo: '',
        anio: '',
        placas: '',
        estado: '',
        comentarios: '',
        tipo: '',
        propietario: '',
        proveedor: '',
        tiempo: '',
        costo_renta: '',
        factura: '',
        clase_tipo: '',
        combustible: '',
        numero_tarjeta_circulacion: '',
        tarjeta: '',
        excento: false,
        segundo_semestre: '',
        primer_semestre: '',
        numero_serie: '',
        color: '',
        no_motor: '',
        capacidad: '',
        cilindros: ''
      },
      tipo: 0,
      catalogotrafico: [],
      clase_tipo: [],
      combustible: [],
      tab: 1
    };
  },
  components: {
    'servicios': Servicios,
    'verificacion': Verificacion,
    'poliza': Poliza,
    'tenencia': Tenencia
  },
  methods: {
    cargarDatos: function cargarDatos(data, catalogotrafico, catalogoclasetipo, catalogocombustible) {
      this.tab = 0;
      this.Unidades.id = data.id;
      this.Unidades.unidad = data.unidad;
      this.Unidades.marca = data.marca;
      this.Unidades.modelo = data.modelo;
      this.Unidades.anio = data.anio;
      this.Unidades.placas = data.placas;
      this.Unidades.estado = data.estado;
      this.Unidades.comentarios = data.comentarios;
      this.Unidades.tipo = data.tipo;
      this.Unidades.propietario = data.propietario;
      this.Unidades.proveedor = data.proveedor;
      this.Unidades.tiempo = data.tiempo;
      this.Unidades.costo_renta = data.costo_renta;
      this.Unidades.factura = data.factura;
      this.Unidades.clase_tipo = data.clase_tipo;
      this.Unidades.combustible = data.combustible;
      this.Unidades.primer_semestre = data.primer_semestre;
      this.Unidades.segundo_semestre = data.segundo_semestre;
      this.Unidades.excento = data.excento == 0 ? false : true;
      this.Unidades.numero_tarjeta_circulacion = data.numero_tarjeta_circulacion;
      this.Unidades.tarjeta = data.tarjeta;
      this.Unidades.numero_serie = data.numero_serie;
      this.catalogotrafico = catalogotrafico;
      this.clase_tipo = catalogoclasetipo;
      this.combustible = catalogocombustible;
      this.Unidades.color = data.color;
      this.Unidades.no_motor = data.no_motor;
      this.Unidades.capacidad = data.capacidad;
      this.Unidades.cilindros = data.cilindros;
      if (data.tipo == 1) {
        $("#propio").prop("checked", true);
        this.formpropio();
      } else if (data.tipo == 2) {
        this.formrentado();
        $("#rentado").prop("checked", true);
      }
    },
    maestro: function maestro() {
      this.tab = 0;
      this.$emit('maestro:atras');
    },
    registrar: function registrar() {
      this.$emit('detalle:actualizar', this.Unidades);
    },
    setId: function setId(id) {
      this.tab = id;
      var ChildServicio = this.$refs.servicios;
      var ChildPoliza = this.$refs.poliza;
      var ChildVerficacion = this.$refs.verificacion;
      var ChildTenencia = this.$refs.tenencia;
      var ChildFotos = this.$refs.fotos;
      if (id == 1) {
        ChildServicio.ObtenerMantenimientos(this.Unidades.id);
      }
      if (id == 2) {
        ChildPoliza.getId(this.Unidades.id);
      }
      if (id == 3) {
        ChildVerficacion.getId(this.Unidades.id);
      }
      if (id == 4) {
        ChildTenencia.getId(this.Unidades.id);
      }
      if (id == 5) {
        ChildFotos.getId(this.Unidades.id);
      }
    },
    formpropio: function formpropio() {
      this.tipo = 1;
      this.Unidades.tipo = 1;
    },
    formrentado: function formrentado() {
      this.tipo = 2;
      this.Unidades.tipo = 2;
    },
    onChange: function onChange(e) {
      this.Unidades.factura = e.target.files[0];
    },
    onChangeT: function onChangeT(e) {
      this.Unidades.tarjeta = e.target.files[0];
    },
    descargar: function descargar(archivo) {
      var me = this;
      axios({
        url: '/UnidadesStore/' + archivo,
        method: 'GET',
        responseType: 'blob' // importante
      }).then(function (response) {
        var url = window.URL.createObjectURL(new Blob([response.data]));
        var link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', archivo); //archivo = nombre del archivo alojado en el ftp
        document.body.appendChild(link);
        link.click();
        //--Llama el metodo para borrar el archivo local una ves descargado--//
        axios.get('/UnidadesStore/' + archivo + '/edit').then(function (response) {})["catch"](function (error) {
          console.log(error);
        });
        //--fin del metodo borrar--//
      });
    },
    actualiza: function actualiza() {
      this.Unidades.factura = '';
    },
    actualizaT: function actualizaT() {
      this.Unidades.tarjeta = '';
    },
    excento: function excento() {
      this.Unidades.primer_semestre = '';
      this.Unidades.segundo_semestre = '';
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/Unidades/Poliza.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/Unidades/Poliza.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Herramientas/utilerias.js */ "./resources/assets/js/components/Herramientas/utilerias.js");

var config = (__webpack_require__(/*! ../../Herramientas/config-vuetables-client */ "./resources/assets/js/components/Herramientas/config-vuetables-client.js").call)(undefined);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      tipo: 0,
      Tipo_Edo: 1,
      operacion_array: '',
      id: '',
      datapoliza: [],
      columnspoliza: ['id', 'proveedor', 'contacto', 'numero_poliza', 'numero_inciso', 'fecha_inicio', 'fecha_termino'],
      isLoading: false,
      poliza: {
        id: 0,
        proveedor: '',
        numero_poliza: '',
        fecha_inicio: '',
        fecha_termino: '',
        comprobante: '',
        numero_inciso: '',
        contacto: ""
      },
      optionspoliza: {
        headings: {
          id: 'Acciones',
          numero_poliza: '# Poliza'
        },
        perPage: 5,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        filterByColumn: true,
        listColumns: {},
        texts: config.texts
      }
    };
  },
  methods: {
    /**
     * Obtiene las polizas de la unidad actual
     */
    getData: function getData() {
      var _this = this;
      this.isLoading = true;
      axios.get('vehiculos/polizas/unidades/' + this.id).then(function (res) {
        _this.isLoading = false;
        if (res.data.status) {
          _this.datapoliza = res.data.polizas;
        } else toastr.error(res.data.mensaje);
      });
    },
    getId: function getId(id) {
      this.id = id;
      this.getData();
    },
    onChange: function onChange(e) {
      this.poliza.comprobante = e.target.files[0];
    },
    guardarMto: function guardarMto(nuevo) {
      var _this2 = this;
      this.$validator.validate().then(function (result) {
        if (result) {
          _this2.isLoading = true;
          var me = _this2;
          var formData = new FormData();
          formData.append('id', _this2.poliza.id);
          formData.append('proveedor', _this2.poliza.proveedor);
          formData.append('numero_poliza', _this2.poliza.numero_poliza);
          formData.append('contacto', _this2.poliza.contacto);
          formData.append('numero_inciso', _this2.poliza.numero_inciso);
          formData.append('fecha_inicio', _this2.poliza.fecha_inicio);
          formData.append('fecha_termino', _this2.poliza.fecha_termino);
          formData.append('comprobante', _this2.poliza.comprobante);
          formData.append('unidad_id', _this2.id);
          formData.append('metodo', nuevo);
          axios.post('vehiculos/polizas/unidades', formData).then(function (response) {
            me.isLoading = false;
            if (response.data.status) {
              me.getData();
              me.cerrarModal();
              if (nuevo) {
                toastr.success('Poliza guardada correctamente');
              } else {
                toastr.success('Poliza actualizada correctamente');
              }
            } else {
              toastr.error(res.data.mensaje);
            }
          });
        }
      });
    },
    actualizar: function actualizar(data) {
      this.Tipo_Edo = 2;
      this.poliza.id = data.id;
      this.poliza.proveedor = data.proveedor;
      this.poliza.numero_poliza = data.numero_poliza;
      this.poliza.fecha_inicio = data.fecha_inicio;
      this.poliza.fecha_termino = data.fecha_termino;
      this.poliza.comprobante = data.comprobante;
      this.poliza.contacto = data.contacto;
      this.poliza.unidad_id = data.unidad_id;
      this.poliza.numero_inciso = data.numero_inciso;
    },
    actualiza: function actualiza() {
      this.poliza.comprobante = '';
    },
    cerrarModal: function cerrarModal() {
      _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.poliza);
      this.Tipo_Edo = 1;
    },
    Eliminar: function Eliminar(id) {
      var _this3 = this;
      axios.post("vehiculos/polizas/eliminar", {
        id: id
      }).then(function (res) {
        if (res.data.status) {
          toastr.success("Eliminado correctamente");
          _this3.getData();
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    descargar: function descargar(archivo) {
      console.error(archivo);
      var me = this;
      axios({
        url: 'vehiculos/polizas/unidades/descargar/' + archivo,
        method: 'GET',
        responseType: 'blob' // importante
      }).then(function (response) {
        var url = window.URL.createObjectURL(new Blob([response.data]));
        var link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', archivo); //archivo = nombre del archivo alojado en el ftp
        document.body.appendChild(link);
        link.click();
        //--Llama el metodo para borrar el archivo local una ves descargado--//
        axios.get('/polizaeditar/' + archivo).then(function (response) {})["catch"](function (error) {
          console.log(error);
        });
        //--fin del metodo borrar--//
      });
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/Unidades/Servicio.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/Unidades/Servicio.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var config = (__webpack_require__(/*! ../../Herramientas/config-vuetables-client */ "./resources/assets/js/components/Herramientas/config-vuetables-client.js").call)(undefined);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      id: '',
      list_mttos: [],
      columnsmto: ["fecha", "proveedor", "responsable", "partidas", "tipo"],
      optionsmto: {
        headings: {},
        perPage: 10,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        filterByColumn: true,
        listColumns: {},
        texts: config.texts
      }
    };
  },
  methods: {
    /**
     * Obtiene todos los mantenimientos y servicios de la unidad ingresada
     */
    ObtenerMantenimientos: function ObtenerMantenimientos(id) {
      var _this = this;
      this.isLoading = true;
      axios.get('vehiculos/mttos/obtenermttos/' + id).then(function (res) {
        if (res.data.status) {
          _this.isLoading = false;
          _this.list_mttos = res.data.mantenimientos;
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/Unidades/Tenencia.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/Unidades/Tenencia.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Herramientas/utilerias.js */ "./resources/assets/js/components/Herramientas/utilerias.js");

var config = (__webpack_require__(/*! ../../Herramientas/config-vuetables-client */ "./resources/assets/js/components/Herramientas/config-vuetables-client.js").call)(undefined);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      tipo: 0,
      Tipo_Edo: 1,
      operacion_array: '',
      id: '',
      datatenencia: [],
      columnstenencia: ['id', 'fecha', 'folio', 'anio', 'costo', "comprobante"],
      isLoading: false,
      isDatosLoading: false,
      tenencia: {
        id: 0,
        fecha: '',
        folio: '',
        anio: '',
        costo: '',
        comprobante: ''
      },
      optionstenencia: {
        headings: {
          id: 'Acciones',
          anio: "Año"
        },
        perPage: 5,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        filterByColumn: true,
        listColumns: {},
        texts: config.texts
      }
    };
  },
  methods: {
    getData: function getData() {
      var _this = this;
      this.isLoading = true;
      axios.get('vehiculos/tenencia/' + this.id).then(function (response) {
        _this.datatenencia = response.data;
        _this.isLoading = false;
      })["catch"](function (err) {
        console.error(err);
      });
    },
    getId: function getId(id) {
      this.id = id;
      this.getData();
    },
    onChange: function onChange(e) {
      this.tenencia.comprobante = e.target.files[0];
    },
    guardarMto: function guardarMto(nuevo) {
      var _this2 = this;
      this.$validator.validate().then(function (result) {
        if (result) {
          _this2.isLoading = true;
          var me = _this2;
          var formData = new FormData();
          formData.append('id', _this2.tenencia.id);
          formData.append('fecha', _this2.tenencia.fecha);
          formData.append('folio', _this2.tenencia.folio);
          formData.append('anio', _this2.tenencia.anio);
          formData.append('costo', _this2.tenencia.costo);
          formData.append('comprobante', _this2.tenencia.comprobante);
          formData.append('unidad_id', _this2.id);
          formData.append('metodo', nuevo);
          axios.post('vehiculos/tenencia', formData).then(function (response) {
            me.isLoading = false;
            if (response.data.status) {
              if (!nuevo) {
                toastr.success('Tenencia Actualizada Correctamente');
                me.getData();
                me.cerrarModal();
              } else {
                toastr.success('Tenencia Registrada Correctamente');
                me.getData();
                me.cerrarModal();
              }
              _this2.actualiza();
            } else {
              toastr.error(response.data.mensaje);
            }
          })["catch"](function (err) {
            console.error(err);
          });
        }
      });
    },
    actualizar: function actualizar(data) {
      this.Tipo_Edo = 2;
      this.tenencia.id = data.id;
      this.tenencia.fecha = data.fecha;
      this.tenencia.folio = data.folio;
      this.tenencia.anio = data.anio;
      this.tenencia.costo = data.costo;
      this.tenencia.unidad_id = data.unidad_id;
      this.tenencia.comprobante = data.comprobante;
    },
    actualiza: function actualiza() {
      this.tenencia.comprobante = '';
    },
    cerrarModal: function cerrarModal() {
      _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.tenencia);
      this.Tipo_Edo = 1;
    },
    /**
     * Descargar comprobante
     */
    descargar: function descargar(archivo) {
      var _this3 = this;
      var me = this;
      this.isDatosLoading = true;
      axios({
        url: '/UnidadesStore/' + archivo,
        method: 'GET',
        responseType: 'blob' // importante
      }).then(function (response) {
        _this3.isDatosLoading = false;
        var url = window.URL.createObjectURL(new Blob([response.data]));
        var link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', archivo); //archivo = nombre del archivo alojado en el ftp
        document.body.appendChild(link);
        link.click();
        //--Llama el metodo para borrar el archivo local una ves descargado--//
        axios.get('/UnidadesStore/' + archivo + '/edit').then(function (response) {})["catch"](function (error) {
          console.error(error);
        });
        //--fin del metodo borrar--//
      })["catch"](function (x) {
        _this3.isDatosLoading = false;
        console.error("ERROR:", x);
        toastr.error("Documento no encontrado");
      });
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/Unidades/Unidades.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/Unidades/Unidades.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Herramientas/utilerias.js */ "./resources/assets/js/components/Herramientas/utilerias.js");
var DetalleUnidades = function DetalleUnidades(r) {
  return __webpack_require__.e(/*! require.ensure | trafico */ "trafico").then((function () {
    return r(__webpack_require__(/*! ./DetalleUnidades.vue */ "./resources/assets/js/components/Trafico/Unidades/DetalleUnidades.vue"));
  }).bind(null, __webpack_require__))['catch'](__webpack_require__.oe);
};

var config = (__webpack_require__(/*! ../../Herramientas/config-vuetables-client */ "./resources/assets/js/components/Herramientas/config-vuetables-client.js").call)(undefined);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      empresa: 1,
      empresa_nombre: "",
      url: '/UnidadesStore',
      PermisosCRUD: {},
      tipo: 0,
      Unidades: {
        id: 0,
        unidad: '',
        marca: '',
        modelo: '',
        anio: '',
        placas: '',
        estado: '',
        comentarios: '',
        tipo: '',
        propietario: '',
        proveedor: '',
        tiempo: '',
        costo_renta: '',
        factura: '',
        clase_tipo: '',
        combustible: '',
        numero_tarjeta_circulacion: '',
        tarjeta: '',
        excento: false,
        segundo_semestre: '',
        primer_semestre: '',
        numero_serie: '',
        color: '',
        no_motor: '',
        capacidad: '',
        cilindros: ''
      },
      detalleu: false,
      Metodo: '',
      modal: 0,
      tituloModal: '',
      tipoAccion: 0,
      isLoading: false,
      isLoading_vehiculos: false,
      columns: ['id', 'unidad', 'modelo', 'placas', "condicion"],
      columns_inactivos: ['id', 'unidad', 'modelo', 'placas', "condicion"],
      list_vehiculos: [],
      list_vehiculos_inactivos: [],
      tableUnidades: [],
      catalogotrafico: [],
      list_tipos: [],
      list_combustibles: [],
      options: {
        headings: {
          placas: 'Placas',
          modelo: 'Modelo',
          unidad: 'Unidad',
          id: 'Opciones'
        },
        perPage: 10,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        filterByColumn: true,
        texts: config.texts
      },
      options_inactivos: {
        headings: {
          placas: 'Placas',
          modelo: 'Modelo',
          unidad: 'Unidad',
          id: 'Opciones'
        },
        perPage: 10,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        filterByColumn: true,
        texts: config.texts
      }
    };
  },
  components: {
    'detalleunidades': DetalleUnidades
  },
  methods: {
    /**
     * Obtiene todas las unidades de la empesa ingresada
     */
    ObtenerUnidades: function ObtenerUnidades() {
      var _this = this;
      var emp = this.empresa;
      this.empresa_nombre = emp == 1 ? "Conserflow" : emp == 2 ? "CSCT" : emp == 3 ? "DIEGO CRUZ M." : "RAMON CRUZ M.";
      this.PermisosCRUD = _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].getCRUD(this.$route.path);
      this.isLoading_vehiculos = true;
      axios.get("vehiculos/unidades/obtener/" + this.empresa).then(function (res) {
        _this.isLoading_vehiculos = false;
        if (res.data.status) {
          _this.list_vehiculos = res.data.unidades.filter(function (x) {
            return x.condicion >= 1;
          });
          _this.list_vehiculos_inactivos = res.data.unidades.filter(function (x) {
            return x.condicion == 0;
          });
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    /**
     * Obtener catalogos para registro de los vehiculos
     */
    ObtenerCatalogos: function ObtenerCatalogos() {
      var _this2 = this;
      axios.get('vehiculos/unidades/catalogostrafico').then(function (res) {
        if (res.data.status) _this2.catalogotrafico = res.data.catalogo;else toastr.error(res.data.mensaje);
      });
      axios.get('vehiculos/catalogos/clasetipo').then(function (res) {
        if (res.data.status) {
          _this2.list_tipos = res.data.tipos;
        } else toastr.error(res.data.mensaje);
      });
      axios.get('vehiculos/catalogos/combustibles').then(function (res) {
        if (res.data.status) {
          _this2.list_combustibles = res.data.combustibles;
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    //FIXME:asd
    onChange: function onChange(e) {
      this.Unidades.factura = e.target.files[0];
    },
    //FIXME:asd
    onChangeT: function onChangeT(e) {
      this.Unidades.tarjeta = e.target.files[0];
    },
    //FIXME:asd
    descargar: function descargar(archivo) {
      var _this3 = this;
      var me = this;
      axios({
        url: this.url + '/' + archivo,
        method: 'GET',
        responseType: 'blob' // importante
      }).then(function (response) {
        var url = window.URL.createObjectURL(new Blob([response.data]));
        var link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', archivo); //archivo = nombre del archivo alojado en el ftp
        document.body.appendChild(link);
        link.click();
        //--Llama el metodo para borrar el archivo local una ves descargado--//
        axios.get(_this3.url + '/' + archivo + '/edit').then(function (response) {})["catch"](function (error) {
          console.log(error);
        });
        //--fin del metodo borrar--//
      });
    },
    /**
     * Registra una nueva unidad
     */
    registrar: function registrar(nuevo) {
      var _this4 = this;
      this.$validator.validate().then(function (result) {
        if (result) {
          var me = _this4;
          _this4.isLoading = true;
          var formData = new FormData();
          formData.append('metodo', _this4.Metodo);
          formData.append('unidad', _this4.Unidades.unidad);
          formData.append('marca', _this4.Unidades.marca);
          formData.append('modelo', _this4.Unidades.modelo);
          formData.append('anio', _this4.Unidades.anio);
          formData.append('placas', _this4.Unidades.placas);
          formData.append('estado', _this4.Unidades.estado);
          formData.append('comentarios', _this4.Unidades.comentarios);
          formData.append('tipo', _this4.Unidades.tipo);
          formData.append('factura', _this4.Unidades.factura);
          formData.append('propietario', _this4.Unidades.propietario);
          formData.append('proveedor', _this4.Unidades.proveedor);
          formData.append('tiempo', _this4.Unidades.tiempo);
          formData.append('costo_renta', _this4.Unidades.costo_renta);
          formData.append('clase_tipo', _this4.Unidades.clase_tipo);
          formData.append('combustible', _this4.Unidades.combustible);
          formData.append('numero_tarjeta_circulacion', _this4.Unidades.numero_tarjeta_circulacion);
          formData.append('tarjeta', _this4.Unidades.tarjeta);
          formData.append('id', _this4.Unidades.id);
          formData.append('primer_semestre', _this4.Unidades.primer_semestre);
          formData.append('segundo_semestre', _this4.Unidades.segundo_semestre);
          formData.append('excento', _this4.Unidades.excento);
          formData.append('empresa', _this4.empresa);
          formData.append('numero_serie', _this4.Unidades.numero_serie);
          formData.append('color', _this4.Unidades.color);
          formData.append('no_motor', _this4.Unidades.no_motor);
          formData.append('capacidad', _this4.Unidades.capacidad);
          formData.append('cilindros', _this4.Unidades.cilindros);
          axios.post(_this4.url, formData).then(function (response) {
            me.isLoading = false;
            if (response.data.status) {
              if (!nuevo) {
                toastr.success('Unidad Actualizada Correctamente');
                me.cerrarModal();
                me.ObtenerUnidades();
              } else {
                toastr.success('Unidad Registrado Correctamente');
                me.cerrarModal();
                me.ObtenerUnidades();
              }
            } else {
              swal({
                type: 'error',
                html: response.data.errors.join('<br>')
              });
            }
          })["catch"](function (error) {
            console.log(error);
          });
        } else {
          toastr.warning('Complete todos los campos');
        }
      });
    },
    /**
     * Cerrar modal de unidades
     */
    cerrarModal: function cerrarModal() {
      this.modal = 0;
      this.tituloModal = '';
      _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.Unidades);
    },
    /**
     * Abrir modal para registro de unidad
     */
    AbrirModal: function AbrirModal() {
      var nuevo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      this.modal = 1;
      if (nuevo) {
        this.tipoAccion = 1;
        this.Metodo = 'Nuevo';
        this.tituloModal = 'Registrar Nueva Unidad';
      } else {
        this.tituloModal = 'Actualizar Nueva Unidad';
        this.tipoAccion = 2;
        this.Metodo = 'Actualizar';
        this.Unidades.id = data['id'];
        this.Unidades.unidad = data['unidad'];
        this.Unidades.marca = data['marca'];
        this.Unidades.modelo = data['modelo'];
        this.Unidades.anio = data['anio'];
        this.Unidades.placas = data['placas'];
        this.Unidades.estado = data['estado'];
        this.Unidades.comentarios = data['comentarios'];
        this.Unidades.tipo = data['tipo'];
        this.Unidades.factura = data['factura'];
        this.Unidades.propietario = data['propietario'];
        this.Unidades.proveedor = data['proveedor'];
        this.Unidades.tiempo = data['tiempo'];
        this.Unidades.costo_renta = data['costo_renta'];
        this.Unidades.clase_tipo = data['clase_tipo'];
        this.Unidades.combustible = data['combustible'];
        this.Unidades.numero_tarjeta_circulacion = data['numero_tarjeta_circulacion'];
        this.Unidades.tarjeta = data['tarjeta'];
        this.Unidades.excento = data['excento'];
        this.Unidades.primer_semestre = data['primer_semestre'];
        this.Unidades.segundo_semestre = data['segundo_semestre'];
        this.Unidades.numero_serie = data['numero_serie'];
        this.Unidades.color = data['color'];
        this.Unidades.no_motor = data['no_motor'];
        this.Unidades.capacidad = data['capacidad'];
        this.Unidades.cilindros = data['cilindros'];
      }
    },
    /**
     * Ver sección de detalles
     */
    detalles: function detalles(data) {
      this.detalleu = true;
      var ChildDetalle = this.$refs.detalleunidades;
      ChildDetalle.cargarDatos(data, this.catalogotrafico, this.list_tipos, this.list_combustibles);
    },
    /**
     * Regresar al card principal
     */
    maestro: function maestro() {
      this.detalleu = false;
    },
    /**
     * Actualliza la unidad actual
     */
    actualiza: function actualiza(data) {
      this.AbrirModal(false, data);
      this.registrar(0);
    },
    /**
     * Mostrar formulario de vehículo propio
     */
    formpropio: function formpropio() {
      this.tipo = 1;
      this.Unidades.tipo = 1;
    },
    /**
     *Mostrar formulario de vehículo rentado
     */
    formrentado: function formrentado() {
      this.tipo = 2;
      this.Unidades.tipo = 2;
    },
    /**
     * Marcar el vehiculo actual como excento de revisión
     */
    excento: function excento() {
      this.Unidades.primer_semestre = '';
      this.Unidades.segundo_semestre = '';
    },
    /**
     * Descargar reporte de todos las unidades
     */
    DescargarInventario: function DescargarInventario() {
      window.open('vehiculos/unidades/inventario/' + this.empresa, '_blank');
    },
    /**
     * Desactiva la unidad ingresada
     */
    Desactivar: function Desactivar(id) {
      var _this5 = this;
      axios.post("vehiculos/unidades/desactivar", {
        id: id
      }).then(function (res) {
        if (res.data.status) {
          toastr.success("Unidad desactivada correctamente");
          _this5.ObtenerUnidades();
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    /**
     * Marca unidad como 'Préstamo'
     */
    Prestamo: function Prestamo(data, condicion) {
      var _this6 = this;
      Swal.mixin({
        confirmButtonText: "Siguiente &rarr;",
        showCancelButton: true,
        progressSteps: ["1", "2"]
      }).queue([{
        title: "Tipo",
        text: "Seleccione el tipo",
        input: 'select',
        inputOptions: {
          2: "Venta",
          3: "Renta",
          4: "Préstamo"
        }
      }, {
        text: "Ingrese el motivo",
        input: 'text',
        title: "Motivo",
        inputAttributes: {
          autocapitalize: 'off'
        }
      }]).then(function (result) {
        if (result.value == null) return;
        if (result.value[1].length <= 3) return;
        var tipo = result.value[0];
        var unidad_id = data.id;
        var prestamo_id = data.prestamo_id;
        var motivo = result.value[1];
        axios.post("vehiculos/unidades/prestamo", {
          unidad_id: unidad_id,
          prestamo_id: prestamo_id,
          motivo: motivo,
          condicion: condicion,
          tipo: tipo
        }).then(function (res) {
          if (res.data.status) {
            toastr.success("Registrado correctamente");
            _this6.ObtenerUnidades();
          } else {
            toastr.error(res.data.mensaje);
          }
        });
      });
    },
    /**
     * Regresar unidad de prestamo
     */
    RegresarPrestamo: function RegresarPrestamo(unidad) {
      var _this7 = this;
      Swal.fire({
        title: "Inidique el motivo ",
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: "Cancelar"
      }).then(function (result) {
        if (result.value == null) return;
        if (result.value.length < 5) return;
        var motivo = result.value;
        var unidad_id = unidad.id;
        var condicion = 1; // Tipo Regreso
        var prestamo_id = unidad.prestamo_id;
        var tipo = 1; // Regresar a activo
        axios.post("vehiculos/unidades/prestamo", {
          unidad_id: unidad_id,
          prestamo_id: prestamo_id,
          motivo: motivo,
          condicion: condicion,
          tipo: tipo
        }).then(function (res) {
          if (res.data.status) {
            toastr.success("Registrado correctamente");
            _this7.ObtenerUnidades();
          } else {
            toastr.error(res.data.mensaje);
          }
        });
      });
    },
    /**
     * Mustra los detalles del prestamo
     */
    DetallesPrestamo: function DetallesPrestamo(data) {
      var tipo = "del préstamo";
      if (data.condicion == 2) tipo = "de la venta";else if (data.condicion == 3) tipo = "de la renta";
      axios.get("vehiculos/unidades/prestamos/detalles/" + data.prestamo_id).then(function (res) {
        if (res.data.status) {
          Swal.fire({
            title: "Detalles ".concat(tipo),
            icon: 'info',
            html: "<br><strong>".concat(data.unidad, " - ").concat(data.modelo, "</strong> <br>\n                        Fecha: ").concat(res.data.prestamo.fecha_prestamo, " <br>\n                        Motivo: ").concat(res.data.prestamo.motivo_prestamo),
            showCloseButton: true
          });
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    }
  },
  mounted: function mounted() {
    this.ObtenerUnidades();
    this.ObtenerCatalogos();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/ValeResguardo.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/ValeResguardo.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* CAMBIAR UBICACIÓN  */
var config = (__webpack_require__(/*! ../Herramientas/config-vuetables-client */ "./resources/assets/js/components/Herramientas/config-vuetables-client.js").call)(undefined);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      // Tabla 
      empresa: 1,
      url: "/vehiculos/valeresguardo",
      ver_modal_resguardo: 0,
      columns_resguardo: ['id', 'fecha', 'periodo', "unidad", 'poliza_seguro', "responsable", 'entrega'],
      list_resguardo: [],
      list_empleados: [],
      list_polizas: []
    }, "list_empleados", []), "list_solicitudes", []), "options_resguardo", {
      headings: {
        id: 'Acciones',
        fecha: 'Fecha',
        solicitud_id: 'Solicitud',
        periodo: 'Periodo',
        marca: 'Marca',
        modelo: 'Modelo',
        color: 'Color',
        placas: 'Placas',
        no_serie: 'No_serie',
        no_motor: 'No_motor',
        capacidad_carga: 'Capacidad_carga',
        cilindros: 'Cilindros',
        poliza_seguro: 'Poliza_seguro',
        tarjeta: 'Tarjeta',
        responsable_id: 'Responsable',
        entrega_id: 'Entrega'
      },
      // Headings,
      perPage: 10,
      perPageValues: [],
      skin: config.skin,
      sortIcon: config.sortIcon,
      filterByColumn: true,
      texts: config.texts
    }), "titulo_modal_resguardo", ''), "tipoAccion_modal_resguardo", 0), "resguardo_modal", {
      solicitud: {},
      poliza: {}
    }); // return
  },
  //data
  computed: {},
  methods: {
    ObtenerSolicitudes: function ObtenerSolicitudes() {
      var _this = this;
      axios.get(this.url + "/obenersolicitudes/" + this.empresa).then(function (res) {
        if (res.data.status) {
          _this.list_solicitudes = res.data.solicitudes;
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    AbrirModalResguardo: function AbrirModalResguardo(nuevo) {
      var model = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      this.ObtenerSolicitudes();
      this.ObtenerEmpleados();
      // Cargar solicitudes
      this.ver_modal_resguardo = true;
      if (nuevo) {
        // Crear nuevo
        this.titulo_modal_resguardo = 'Registrar Resguardo';
        this.tipoAccion_modal_resguardo = 1;
      } else {
        // Actualizar
        this.titulo_modal_resguardo = 'Actualizar Resguardo';
        this.tipoAccion_modal_resguardo = 2;
        this.resguardo_modal.id = model.id;
        this.resguardo_modal.fecha = model.fecha;
        this.resguardo_modal.solicitud = {
          vs_id: model.vs_id,
          vs_fecha_solicitud: model.fecha_solicitud,
          s_folio: model.vs_folio,
          periodo: model.periodo,
          vs_solicita_id: "XXXX",
          unidad_id: model.u_id,
          unidad: model.u_nombre,
          placas: model.placas,
          marca: model.marca,
          modelo: model.modelo,
          color: model.color,
          no_serie: model.numero_serie,
          no_motor: model.no_motor,
          capacidad_carga: model.capacidad,
          cilindros: model.cilindros,
          tarjeta: model.u_tarjeta,
          empledo_solicita: model.responsable,
          unidad_solicitud: model.vs_folio + " - " + model.placas
        };
        this.resguardo_modal.poliza = {
          id: model.p_id,
          fecha_inicio: model.fecha_inicio,
          fecha_termino: model.fecha_termino,
          proveedor: model.proveedor,
          numero_poliza: model.poliza_seguro,
          nombre: model.proveedor + " " + model.poliza_seguro + " "
        };
        this.resguardo_modal.entrega = {
          id: model.ee_id,
          nombre: model.entrega
        };
      } // Fin if
    },
    CerrarModalResguardo: function CerrarModalResguardo() {
      this.ver_modal_resguardo = false;
      this.resguardo_modal = {
        solicitud: {}
      };
    },
    /**
     * Obtener las polizas del vehiculo seleccionado
     */
    ObtenerPolizas: function ObtenerPolizas() {
      var _this2 = this;
      if (this.resguardo_modal.solicitud.unidad_id == null) return;
      axios.get(this.url + "/obenerpolizas/" + this.resguardo_modal.solicitud.unidad_id).then(function (res) {
        if (res.data.status) {
          _this2.list_polizas = res.data.polizas;
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    /**
     * Obtener los empleados
     */
    ObtenerEmpleados: function ObtenerEmpleados() {
      var _this3 = this;
      axios.get("/vertodosempleados").then(function (res) {
        var asd = [];
        res.data.forEach(function (e) {
          asd.push({
            id: e.id,
            nombre: e.nombre + " " + e.ap_paterno + " " + e.ap_materno
          });
        });
        _this3.list_empleados = asd;
      });
    },
    /**
     * Guarda el reporte
     */
    GuardarResguardo: function GuardarResguardo(nuevo) {
      var _this4 = this;
      this.$validator.validate().then(function (isValid) {
        console.error(isValid);
        if (!isValid) return;
        var data = new FormData();
        if (!nuevo) data.append("id", _this4.resguardo_modal.id);
        data.append("solicitud_id", _this4.resguardo_modal.solicitud.vs_id);
        data.append("fecha", _this4.resguardo_modal.fecha);
        data.append("entega_id", _this4.resguardo_modal.entrega.id);
        data.append("poliza_id", _this4.resguardo_modal.poliza.id);
        data.append("empresa", _this4.empresa);
        axios.post(_this4.url + "/guardar", data).then(function (res) {
          if (res.data.status) {
            toastr.success("Guardado correctamente");
            _this4.CerrarModalResguardo();
            _this4.ObtenerVales();
          } else {
            toastr.error(res.data.mensaje);
          }
        });
      });
    },
    /**
     * Obteiene todos los vales de la empresa actual
     */
    ObtenerVales: function ObtenerVales() {
      var _this5 = this;
      this.isLoadingVales = true;
      axios.get(this.url + "/obtener/" + this.empresa).then(function (res) {
        _this5.isLoadingVales = false;
        if (res.data.status) {
          _this5.list_resguardo = res.data.vales;
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    Descargar: function Descargar(id) {
      window.open(this.url + "/descargar/" + id, "_blank");
    }
  },
  // Fin metodos
  mounted: function mounted() {
    this.ObtenerVales();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/Vehiculos.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/Vehiculos.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Herramientas/utilerias.js */ "./resources/assets/js/components/Herramientas/utilerias.js");

var config = (__webpack_require__(/*! ../Herramientas/config-vuetables-client */ "./resources/assets/js/components/Herramientas/config-vuetables-client.js").call)(undefined);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      url: '/catvehiculos',
      desabilitado: 0,
      vehiculo: {
        id: 0,
        descripcion: ''
      },
      centro_costo: [],
      modal: 0,
      tituloModal: '',
      tipoAccion: 0,
      isLoading: false,
      columns: ['id', 'descripcion'],
      tableData: [],
      options: {
        headings: {
          'id': 'Acción',
          'descripcion': 'Descripción'
        },
        perPage: 10,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        sortable: ['descripcion'],
        filterable: ['descripcion'],
        filterByColumn: true,
        texts: config.texts
      }
    };
  },
  computed: {},
  methods: {
    getData: function getData() {
      var me = this;
      axios.get(me.url).then(function (response) {
        me.tableData = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    guardarServicio: function guardarServicio(nuevo) {
      var _this = this;
      this.$validator.validate().then(function (result) {
        if (result) {
          _this.isLoading = true;
          var me = _this;
          axios({
            method: nuevo ? 'POST' : 'PUT',
            url: nuevo ? me.url : me.url + '/' + _this.id,
            data: {
              'id': _this.vehiculo.id,
              'descripcion': _this.vehiculo.descripcion
            }
          }).then(function (response) {
            me.isLoading = false;
            if (response.data.status) {
              if (response.data.status === 'error') {
                swal({
                  type: 'error',
                  html: 'Ha ocurrido un error notifiqué al administrador y recarge la página'
                });
              } else {
                me.cerrarModal();
                me.getData();
                if (!nuevo) {
                  toastr.success('Estado Actualizado Correctamente');
                } else {
                  toastr.success('Estado Agregado Correctamente');
                }
              }
            } else {
              swal({
                type: 'error',
                html: response.data.errors.join('<br>')
              });
            }
          })["catch"](function (error) {
            console.log(error);
          });
        }
      });
    },
    cerrarModal: function cerrarModal() {
      this.modal = 0;
      this.tituloModal = '';
      _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.vehiculo);
    },
    abrirModal: function abrirModal(modelo, accion) {
      var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      switch (modelo) {
        case "vehiculo":
          {
            switch (accion) {
              case 'registrar':
                {
                  this.modal = 1;
                  this.desabilitado = 1;
                  this.tituloModal = 'Registrar Vehículo';
                  _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.vehiculo);
                  this.vehiculo.unidad_medida = 'Vehículo';
                  this.tipoAccion = 1;
                  break;
                }
              case 'actualizar':
                {
                  this.modal = 1;
                  this.desabilitado = 1;
                  this.tituloModal = 'Actualizar Vehículo';
                  this.vehiculo.id = data['id'];
                  this.tipoAccion = 2;
                  this.vehiculo.descripcion = data['descripcion'];
                  break;
                }
            }
          }
      }
    }
  },
  mounted: function mounted() {
    this.getData();
    this.$root.limpiarDashboard();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/Verificacion.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/Verificacion.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Herramientas/utilerias.js */ "./resources/assets/js/components/Herramientas/utilerias.js");

var config = (__webpack_require__(/*! ../Herramientas/config-vuetables-client */ "./resources/assets/js/components/Herramientas/config-vuetables-client.js").call)(undefined);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      tipo: 0,
      Tipo_Edo: 1,
      operacion_array: '',
      id: '',
      dataverificar: [],
      columnsverificar: ['id', 'fecha', 'periodo', 'costo', 'costo_multa', "comprobante"],
      isLoading: false,
      isDocumentoLoading: false,
      verificar: {
        id: 0,
        fecha: '',
        comprobante: '',
        costo: '',
        costo_multa: '',
        periodo: ''
      },
      optionsverificar: {
        headings: {
          id: 'Acciones'
        },
        perPage: 5,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        filterByColumn: true,
        listColumns: {},
        texts: config.texts
      }
    };
  },
  methods: {
    getData: function getData() {
      var _this = this;
      this.isLoading = true;
      axios.get('vehiculos/verificaciones/' + this.id).then(function (response) {
        _this.dataverificar = response.data;
        _this.isLoading = false;
      })["catch"](function (err) {
        console.error(err);
      });
    },
    getId: function getId(id) {
      this.id = id;
      this.getData();
    },
    onChange: function onChange(e) {
      this.verificar.comprobante = e.target.files[0];
    },
    guardarMto: function guardarMto(nuevo) {
      var _this2 = this;
      this.$validator.validate().then(function (result) {
        if (result) {
          _this2.isLoading = true;
          var me = _this2;
          var formData = new FormData();
          formData.append('id', _this2.verificar.id);
          formData.append('fecha', _this2.verificar.fecha);
          formData.append('comprobante', _this2.verificar.comprobante);
          formData.append('costo', _this2.verificar.costo);
          formData.append('costo_multa', _this2.verificar.costo_multa);
          formData.append('periodo', _this2.verificar.periodo);
          formData.append('unidad_id', _this2.id);
          formData.append('metodo', nuevo);
          axios.post('vehiculos/verificaciones', formData).then(function (response) {
            me.isLoading = false;
            if (response.data.status) {
              _this2.actualiza();
              if (!nuevo) {
                toastr.success('Verificación Actualizada Correctamente');
                me.getData();
                me.cerrarModal();
              } else {
                toastr.success('Verificación Registrado Correctamente');
                me.getData();
                me.cerrarModal();
              }
            } else {
              toastr.error(response.data.mensaje);
            }
          })["catch"](function (err) {
            console.error(err);
          });
        }
      });
    },
    actualizar: function actualizar(data) {
      this.Tipo_Edo = 2;
      this.verificar.id = data.id;
      this.verificar.fecha = data.fecha;
      this.verificar.comprobante = data.comprobante;
      this.verificar.unidad_id = data.unidad_id;
      this.verificar.costo = data.costo;
      this.verificar.costo_multa = data.costo_multa;
      this.verificar.periodo = data.periodo;
    },
    actualiza: function actualiza() {
      this.verificar.comprobante = '';
    },
    cerrarModal: function cerrarModal() {
      _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.verificar);
      this.Tipo_Edo = 1;
    },
    descargar: function descargar(archivo) {
      var _this3 = this;
      this.isDocumentoLoading = true;
      var me = this;
      axios({
        url: '/UnidadesStore/' + archivo,
        method: 'GET',
        responseType: 'blob' // importante
      }).then(function (response) {
        _this3.isDocumentoLoading = false;
        var url = window.URL.createObjectURL(new Blob([response.data]));
        var link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', archivo); //archivo = nombre del archivo alojado en el ftp
        document.body.appendChild(link);
        link.click();
        //--Llama el metodo para borrar el archivo local una ves descargado--//
        axios.get('/UnidadesStore/' + archivo + '/edit').then(function (response) {})["catch"](function (error) {
          console.log(error);
        });
        //--fin del metodo borrar--//
      })["catch"](function (x) {
        _this3.isDocumentoLoading = false;
        console.error("ERROR:", x);
        toastr.error("Documento no encontrado");
      });
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/AsignacionVehiculo.vue?vue&type=template&id=34cd0281":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/AsignacionVehiculo.vue?vue&type=template&id=34cd0281 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("main", {
    staticClass: "main"
  }, [_c("div", {
    staticClass: "container-fluid"
  }, [_c("br"), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.detalle,
      expression: "!detalle"
    }],
    staticClass: "card"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("v-client-table", {
    ref: "myTable",
    attrs: {
      columns: _vm.columns,
      data: _vm.tableData,
      options: _vm.options
    },
    scopedSlots: _vm._u([{
      key: "id",
      fn: function fn(props) {
        return [_c("div", {
          staticClass: "btn-group",
          attrs: {
            role: "group",
            "aria-label": "Button group with nested dropdown"
          }
        }, [_c("div", {
          staticClass: "btn-group dropup",
          attrs: {
            role: "group"
          }
        }, [_c("button", {
          staticClass: "btn btn-outline-dark dropdown-toggle",
          attrs: {
            id: "btnGroupDrop1",
            type: "button",
            "data-toggle": "dropdown",
            "aria-haspopup": "true",
            "aria-expanded": "false"
          }
        }, [_c("i", {
          staticClass: "far fa-file-pdf"
        }), _vm._v("  Formatos PDF\n                ")]), _vm._v(" "), _c("div", {
          staticClass: "dropdown-menu",
          attrs: {
            "aria-labelledby": "btnGroupDrop1"
          }
        }, [_c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.descargar1(props.row.id);
            }
          }
        }, [_c("i", {
          staticClass: "far fa-file-pdf"
        }), _vm._v(" Vale de Resguardo")])])])])];
      }
    }])
  })], 1)]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.detalle,
      expression: "detalle"
    }],
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("i", {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" CV - " + _vm._s(_vm.empleado == null ? "" : _vm.nombre + " " + _vm.ap_paterno + " " + _vm.ap_materno) + "\n        "), _c("button", {
    staticClass: "btn btn-secondary float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.maestro();
      }
    }
  })])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header"
  }, [_c("i", {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" Formato para resguardo de vehículo.\n      ")]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/Conductores.vue?vue&type=template&id=2edfa191":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/Conductores.vue?vue&type=template&id=2edfa191 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("main", {
    staticClass: "main"
  }, [_c("div", {
    staticClass: "container-fluid"
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("i", {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" Conductores\r\n                "), _c("button", {
    staticClass: "btn btn-dark float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.abrirModal();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus mr-1"
  }), _vm._v("Nuevo\r\n                ")])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isLoading_conductores
    }
  }), _vm._v(" "), _c("h5", [_vm._v("Activos")]), _vm._v(" "), _c("v-client-table", {
    attrs: {
      data: _vm.list_conductores_activos,
      columns: _vm.columns,
      options: _vm.options_conductores
    },
    scopedSlots: _vm._u([{
      key: "id",
      fn: function fn(props) {
        return [_c("div", {
          staticClass: "btn-group",
          attrs: {
            role: "group"
          }
        }, [_c("button", {
          staticClass: "btn btn-outline-dark dropdown-toggle",
          attrs: {
            id: "btn_id",
            type: "button",
            "data-toggle": "dropdown",
            "aria-haspopup": "true",
            "aria-expanded": "false"
          }
        }, [_c("i", {
          staticClass: "fas fa-grip-horizontal"
        }), _vm._v(" Acciones\r\n                            ")]), _vm._v(" "), _c("div", {
          staticClass: "dropdown-menu"
        }, [_c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.abrirModal(false, props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-edit"
        }), _vm._v("Actualizar\r\n                                ")])])])];
      }
    }, {
      key: "licencia_doc",
      fn: function fn(props) {
        return [_c("button", {
          staticClass: "btn btn-outline-dark",
          on: {
            click: function click($event) {
              return _vm.descargarComprobante(props.row.licencia_doc);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-file-pdf"
        }), _vm._v(" "), _c("i", {
          staticClass: "fas fa-download"
        })])];
      }
    }])
  }), _vm._v(" "), _c("br"), _vm._v(" "), _c("hr"), _vm._v(" "), _c("h5", [_vm._v("Inactivos")]), _vm._v(" "), _c("v-client-table", {
    attrs: {
      data: _vm.list_conductores_inactivos,
      columns: _vm.columns_conductores_inactivos,
      options: _vm.options_conductores
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "modal fade",
    "class": {
      mostrar: _vm.modal
    },
    staticStyle: {
      display: "none"
    },
    attrs: {
      tabindex: "-1",
      role: "dialog",
      "aria-labelledby": "myModalLabel",
      "aria-hidden": "true"
    }
  }, [_c("div", {
    staticClass: "modal-dialog modal-dark modal-lg",
    attrs: {
      role: "document"
    }
  }, [_c("div", {
    staticClass: "modal-content"
  }, [_c("div", {
    staticClass: "modal-header"
  }, [_c("h4", {
    staticClass: "modal-title",
    domProps: {
      textContent: _vm._s(_vm.tituloModal)
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "close",
    attrs: {
      type: "button",
      "aria-label": "Close"
    },
    on: {
      click: function click($event) {
        return _vm.CerrarModal();
      }
    }
  }, [_c("span", {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("×")])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isLoading
    }
  }), _vm._v(" "), _c("div", [_c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-7 mb-3"
  }, [_c("label", [_vm._v("Empleado")]), _vm._v(" "), _c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    attrs: {
      options: _vm.listaEmpleados,
      label: "nombre",
      "data-vv-name": "Empleado"
    },
    model: {
      value: _vm.empleado,
      callback: function callback($$v) {
        _vm.empleado = $$v;
      },
      expression: "empleado"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Empleado")))])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-4 mb-3"
  }, [_c("label", [_vm._v("No. Licencia")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.licencia,
      expression: "licencia"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    attrs: {
      placeholder: "No. de licencia",
      maxlength: "20",
      type: "text",
      "data-vv-name": "Licencia"
    },
    domProps: {
      value: _vm.licencia
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.licencia = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Licencia")))])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4 mb-3"
  }, [_c("label", [_vm._v("Tipo")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.tipo,
      expression: "tipo"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Tipo de licencia",
      maxlength: "35",
      "data-vv-name": "Tipo"
    },
    domProps: {
      value: _vm.tipo
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.tipo = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Tipo")))])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4 mb-3"
  }, [_c("label", [_vm._v("Vigencia")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.vigencia,
      expression: "vigencia"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date",
      "data-vv-name": "Vigencia"
    },
    domProps: {
      value: _vm.vigencia
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.vigencia = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Vigencia")))])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-4 mb-3"
  }, [_c("label", [_vm._v("Entidad")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.entidad,
      expression: "entidad"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Estado",
      maxlength: "20",
      "data-vv-name": "Entidad"
    },
    domProps: {
      value: _vm.entidad
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.entidad = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Entidad")))])]), _vm._v(" "), _vm._m(0)])])], 1), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isLoading
    }
  }), _vm._v(" "), _c("div", [_c("button", {
    staticClass: "btn btn-outline-dark",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.CerrarModal();
      }
    }
  }, [_c("i", {
    staticClass: "mr-1 fas fa-times"
  }), _vm._v("Cerrar")]), _vm._v(" "), _vm.tipoAccion == 1 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.Guardar(true);
      }
    }
  }, [_c("i", {
    staticClass: "mr-1 fas fa-save"
  }), _vm._v("Guardar")]) : _vm._e(), _vm._v(" "), _vm.tipoAccion == 2 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.Guardar(false);
      }
    }
  }, [_c("i", {
    staticClass: "mr-1 fas fa-save"
  }), _vm._v("Actualizar")]) : _vm._e()])], 1)])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-md-6 mb-3"
  }, [_c("label", [_vm._v("Licencia")]), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      id: "file_comprobante",
      accept: "application/pdf",
      type: "file",
      name: "pdf"
    }
  })]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/EntregaRecepcion.vue?vue&type=template&id=89fb6348":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/EntregaRecepcion.vue?vue&type=template&id=89fb6348 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("main", {
    staticClass: "main"
  }, [_c("div", {
    staticClass: "container-fluid"
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("button", {
    staticClass: "btn btn-dark float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.abrirModal(1);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  }), _vm._v(" Nuevo\n        ")])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("v-client-table", {
    attrs: {
      data: _vm.tableData,
      columns: _vm.columns,
      options: _vm.options
    },
    scopedSlots: _vm._u([{
      key: "data.id",
      fn: function fn(props) {
        return [_c("div", {
          staticClass: "btn-group",
          attrs: {
            role: "group"
          }
        }, [_c("button", {
          staticClass: "btn btn-outline-dark dropdown-toggle",
          attrs: {
            id: "btn_id",
            type: "button",
            "data-toggle": "dropdown",
            "aria-haspopup": "true",
            "aria-expanded": "false"
          }
        }, [_c("i", {
          staticClass: "fas fa-grip-horizontal"
        }), _vm._v(" \n              ")]), _vm._v(" "), _c("div", {
          staticClass: "dropdown-menu"
        }, [[_c("button", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: props.row.data.condicion == 1,
            expression: "props.row.data.condicion == 1"
          }],
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.abrirModal(2, props.row.data);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-pencil-alt"
        }), _vm._v(" Actualizar Entrega\n                      ")]), _vm._v(" "), _c("button", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: props.row.data.condicion == 1,
            expression: "props.row.data.condicion == 1"
          }],
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.abrirModal(3, props.row.data);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-file"
        }), _vm._v(" Recepción\n                      ")]), _vm._v(" "), _c("button", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: props.row.data.condicion == 2,
            expression: "props.row.data.condicion == 2"
          }],
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.abrirModal(4, props.row.data);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-file"
        }), _vm._v(" Actualizar Recepción\n                      ")])]], 2)])];
      }
    }, {
      key: "condicion",
      fn: function fn(props) {
        return [props.row.data.condicion == 1 ? [_c("button", {
          staticClass: "btn btn-outline-success",
          attrs: {
            type: "button"
          }
        }, [_vm._v("Entrega")])] : _vm._e(), _vm._v(" "), props.row.data.condicion == 2 ? [_c("button", {
          staticClass: "btn btn-outline-primary",
          attrs: {
            type: "button"
          }
        }, [_vm._v("Entrega / Recepción")])] : _vm._e()];
      }
    }, {
      key: "descargar",
      fn: function fn(props) {
        return [_c("button", {
          staticClass: "btn btn-outline-dark",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.descargar(props.row.data);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-download"
        }), _vm._v(" \n          ")])];
      }
    }])
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "modal fade",
    "class": {
      mostrar: _vm.modal
    },
    staticStyle: {
      display: "none"
    },
    attrs: {
      tabindex: "-1",
      role: "dialog",
      "aria-labelledby": "myModalLabel",
      "aria-hidden": "true"
    }
  }, [_c("div", {
    staticClass: "modal-dialog modal-dark modal-lg",
    attrs: {
      role: "document"
    }
  }, [_c("div", {
    staticClass: "modal-content"
  }, [_c("div", [_c("div", {
    staticClass: "modal-header"
  }, [_c("h4", {
    staticClass: "modal-title"
  }, [_vm._v("Entrega / Recepción")]), _vm._v(" "), _c("button", {
    staticClass: "close",
    attrs: {
      type: "button",
      "aria-label": "Close"
    },
    on: {
      click: function click($event) {
        return _vm.cerrarModal();
      }
    }
  }, [_c("span", {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("×")])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_c("div", {
    attrs: {
      id: "accordion"
    }
  }, [_c("div", {
    staticClass: "card"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "collapse show",
    attrs: {
      id: "collapseOne",
      "aria-labelledby": "headingOne",
      "data-parent": "#accordion"
    }
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-6 mb-3"
  }, [_c("label", [_vm._v("Unidad")]), _vm._v(" "), _c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    attrs: {
      options: _vm.listaCatalogo,
      label: "placas",
      "data-vv-name": "unidad"
    },
    model: {
      value: _vm.datos.unidad,
      callback: function callback($$v) {
        _vm.$set(_vm.datos, "unidad", $$v);
      },
      expression: "datos.unidad"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("unidad")))])], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 mb-3"
  }, [_c("span", [_vm._v(_vm._s(_vm.datos.unidad == "" ? "" : _vm.datos.unidad == null ? "" : _vm.datos.unidad.unidad + " " + _vm.datos.unidad.modelo + " " + _vm.datos.unidad.marca))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(_vm._s(_vm.edo < 3 ? "Fecha Entrega" : _vm.edo > 2 ? "Fecha Recepción" : ""))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datos.fecha_entrega,
      expression: "datos.fecha_entrega"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date",
      "data-vv-name": "fecha_entrega"
    },
    domProps: {
      value: _vm.datos.fecha_entrega
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datos, "fecha_entrega", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("fecha_entrega")))])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(_vm._s(_vm.edo < 3 ? "Kilometraje Entrega" : _vm.edo > 2 ? "Kilometraje Recepción" : ""))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datos.kilometraje_entrega,
      expression: "datos.kilometraje_entrega"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      "data-vv-name": "kilometraje_entrega"
    },
    domProps: {
      value: _vm.datos.kilometraje_entrega
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datos, "kilometraje_entrega", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("kilometraje_entrega")))])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 mb-3"
  }, [_c("label", [_vm._v(_vm._s(_vm.edo < 3 ? "Lugar de entrega" : _vm.edo > 2 ? "Lugar de recepción" : ""))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datos.lugar_entrega,
      expression: "datos.lugar_entrega"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      "data-vv-name": "lugar_entrega"
    },
    domProps: {
      value: _vm.datos.lugar_entrega
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datos, "lugar_entrega", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("lugar_entrega")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-6 mb-3"
  }, [_c("label", [_vm._v("Proyecto")]), _vm._v(" "), _c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    attrs: {
      options: _vm.listaProyectos,
      label: "name",
      name: "name",
      "data-vv-name": "Proyecto"
    },
    model: {
      value: _vm.datos.proyecto,
      callback: function callback($$v) {
        _vm.$set(_vm.datos, "proyecto", $$v);
      },
      expression: "datos.proyecto"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Proyecto")))])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-6 mb-3"
  }, [_c("label", [_vm._v("Destinatario")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datos.destinatario,
      expression: "datos.destinatario"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      "data-vv-name": "destinatario"
    },
    domProps: {
      value: _vm.datos.destinatario
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datos, "destinatario", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("destinatario")))])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "card"
  }, [_vm._m(1), _vm._v(" "), _c("div", {
    staticClass: "collapse",
    attrs: {
      id: "collapseTwo",
      "aria-labelledby": "headingTwo",
      "data-parent": "#accordion"
    }
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-5 mb-3"
  }, [_c("label", [_vm._v("Nombre")]), _vm._v(" "), _c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    attrs: {
      options: _vm.listaEmpleados,
      label: "name",
      "data-vv-name": "nombre"
    },
    model: {
      value: _vm.usuario.nombre,
      callback: function callback($$v) {
        _vm.$set(_vm.usuario, "nombre", $$v);
      },
      expression: "usuario.nombre"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("nombre")))])], 1), _vm._v(" "), _vm._m(2)])])])]), _vm._v(" "), _c("div", {
    staticClass: "card"
  }, [_vm._m(3), _vm._v(" "), _c("div", {
    staticClass: "collapse",
    attrs: {
      id: "collapseThree",
      "aria-labelledby": "headingThree",
      "data-parent": "#accordion"
    }
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" ESPEJO LATERAL DERECHO")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.accesorios_e.uno,
      expression: "accesorios_e.uno"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.accesorios_e, "uno", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "SI"
    }
  }, [_vm._v("SI")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "NO"
    }
  }, [_vm._v("NO")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" ESPEJO LATERAL IZQUIERDO")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.accesorios_e.dos,
      expression: "accesorios_e.dos"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.accesorios_e, "dos", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "SI"
    }
  }, [_vm._v("SI")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "NO"
    }
  }, [_vm._v("NO")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" PARABRISAS")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.accesorios_e.tres,
      expression: "accesorios_e.tres"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.accesorios_e, "tres", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "SI"
    }
  }, [_vm._v("SI")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "NO"
    }
  }, [_vm._v("NO")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" MEDALLÓN TRASERO")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.accesorios_e.cuatro,
      expression: "accesorios_e.cuatro"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.accesorios_e, "cuatro", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "SI"
    }
  }, [_vm._v("SI")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "NO"
    }
  }, [_vm._v("NO")])])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" CRISTALES DE PUERTAS (LATERALES)")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.accesorios_e.cinco,
      expression: "accesorios_e.cinco"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.accesorios_e, "cinco", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "SI"
    }
  }, [_vm._v("SI")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "NO"
    }
  }, [_vm._v("NO")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" TAPÓN DE GASOLINA")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.accesorios_e.seis,
      expression: "accesorios_e.seis"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.accesorios_e, "seis", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "SI"
    }
  }, [_vm._v("SI")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "NO"
    }
  }, [_vm._v("NO")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" LIMPIADORES")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.accesorios_e.siete,
      expression: "accesorios_e.siete"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.accesorios_e, "siete", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "SI"
    }
  }, [_vm._v("SI")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "NO"
    }
  }, [_vm._v("NO")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" FAROS Y LUCES")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.accesorios_e.ocho,
      expression: "accesorios_e.ocho"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.accesorios_e, "ocho", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "SI"
    }
  }, [_vm._v("SI")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "NO"
    }
  }, [_vm._v("NO")])])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" BIRLOS DE LLANTAS")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.accesorios_e.nueve,
      expression: "accesorios_e.nueve"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.accesorios_e, "nueve", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "SI"
    }
  }, [_vm._v("SI")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "NO"
    }
  }, [_vm._v("NO")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" MOLDURAS")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.accesorios_e.diez,
      expression: "accesorios_e.diez"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.accesorios_e, "diez", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "SI"
    }
  }, [_vm._v("SI")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "NO"
    }
  }, [_vm._v("NO")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" CALAVERAS")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.accesorios_e.once,
      expression: "accesorios_e.once"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.accesorios_e, "once", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "SI"
    }
  }, [_vm._v("SI")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "NO"
    }
  }, [_vm._v("NO")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" MATA CHISPAS")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.accesorios_e.doce,
      expression: "accesorios_e.doce"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.accesorios_e, "doce", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "SI"
    }
  }, [_vm._v("SI")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "NO"
    }
  }, [_vm._v("NO")])])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" ANTENA")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.accesorios_e.trece,
      expression: "accesorios_e.trece"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.accesorios_e, "trece", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "SI"
    }
  }, [_vm._v("SI")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "NO"
    }
  }, [_vm._v("NO")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" DEFENSAS")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.accesorios_e.catorce,
      expression: "accesorios_e.catorce"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.accesorios_e, "catorce", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "SI"
    }
  }, [_vm._v("SI")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "NO"
    }
  }, [_vm._v("NO")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" PARILLA")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.accesorios_e.quince,
      expression: "accesorios_e.quince"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.accesorios_e, "quince", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "SI"
    }
  }, [_vm._v("SI")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "NO"
    }
  }, [_vm._v("NO")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" PORTA LLANTAS")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.accesorios_e.dieciseis,
      expression: "accesorios_e.dieciseis"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.accesorios_e, "dieciseis", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "SI"
    }
  }, [_vm._v("SI")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "NO"
    }
  }, [_vm._v("NO")])])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" PLACA DELANTERA / TRASERA")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.accesorios_e.diecisiete,
      expression: "accesorios_e.diecisiete"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.accesorios_e, "diecisiete", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "SI"
    }
  }, [_vm._v("SI")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "NO"
    }
  }, [_vm._v("NO")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" DEFENSAS")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.accesorios_e.dieciocho,
      expression: "accesorios_e.dieciocho"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.accesorios_e, "dieciocho", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "SI"
    }
  }, [_vm._v("SI")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "NO"
    }
  }, [_vm._v("NO")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" TAPÓNES DE RUEDAS")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.accesorios_e.diecinueve,
      expression: "accesorios_e.diecinueve"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.accesorios_e, "diecinueve", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "SI"
    }
  }, [_vm._v("SI")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "NO"
    }
  }, [_vm._v("NO")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" LLANTA DE REFACCION")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.accesorios_e.veinte,
      expression: "accesorios_e.veinte"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.accesorios_e, "veinte", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "SI"
    }
  }, [_vm._v("SI")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "NO"
    }
  }, [_vm._v("NO")])])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" PLUMAS")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.accesorios_e.ventiuno,
      expression: "accesorios_e.ventiuno"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.accesorios_e, "ventiuno", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "SI"
    }
  }, [_vm._v("SI")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "NO"
    }
  }, [_vm._v("NO")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" ROLLE CAGE")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.accesorios_e.ventidos,
      expression: "accesorios_e.ventidos"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.accesorios_e, "ventidos", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "SI"
    }
  }, [_vm._v("SI")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "NO"
    }
  }, [_vm._v("NO")])])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "card"
  }, [_vm._m(4), _vm._v(" "), _c("div", {
    staticClass: "collapse",
    attrs: {
      id: "collapseFive",
      "aria-labelledby": "headingFive",
      "data-parent": "#accordion"
    }
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" ESPEJO RETROVISOR")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.accesorios_i.uno,
      expression: "accesorios_i.uno"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.accesorios_i, "uno", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "SI"
    }
  }, [_vm._v("SI")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "NO"
    }
  }, [_vm._v("NO")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" TAPETES")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.accesorios_i.dos,
      expression: "accesorios_i.dos"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.accesorios_i, "dos", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "SI"
    }
  }, [_vm._v("SI")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "NO"
    }
  }, [_vm._v("NO")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" ENCENDEDOR")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.accesorios_i.tres,
      expression: "accesorios_i.tres"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.accesorios_i, "tres", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "SI"
    }
  }, [_vm._v("SI")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "NO"
    }
  }, [_vm._v("NO")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" CLAXON")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.accesorios_i.cuatro,
      expression: "accesorios_i.cuatro"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.accesorios_i, "cuatro", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "SI"
    }
  }, [_vm._v("SI")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "NO"
    }
  }, [_vm._v("NO")])])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" VISERAS")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.accesorios_i.cinco,
      expression: "accesorios_i.cinco"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.accesorios_i, "cinco", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "SI"
    }
  }, [_vm._v("SI")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "NO"
    }
  }, [_vm._v("NO")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" CINTURONES DE SEGURIDAD")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.accesorios_i.seis,
      expression: "accesorios_i.seis"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.accesorios_i, "seis", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "SI"
    }
  }, [_vm._v("SI")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "NO"
    }
  }, [_vm._v("NO")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" MANIJAS")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.accesorios_i.siete,
      expression: "accesorios_i.siete"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.accesorios_i, "siete", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "SI"
    }
  }, [_vm._v("SI")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "NO"
    }
  }, [_vm._v("NO")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" RADIO")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.accesorios_i.ocho,
      expression: "accesorios_i.ocho"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.accesorios_i, "ocho", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "SI"
    }
  }, [_vm._v("SI")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "NO"
    }
  }, [_vm._v("NO")])])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" RADIO / CD")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.accesorios_i.nueve,
      expression: "accesorios_i.nueve"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.accesorios_i, "nueve", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "SI"
    }
  }, [_vm._v("SI")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "NO"
    }
  }, [_vm._v("NO")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" CLIMA")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.accesorios_i.diez,
      expression: "accesorios_i.diez"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.accesorios_i, "diez", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "SI"
    }
  }, [_vm._v("SI")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "NO"
    }
  }, [_vm._v("NO")])])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "card"
  }, [_vm._m(5), _vm._v(" "), _c("div", {
    staticClass: "collapse",
    attrs: {
      id: "collapseSix",
      "aria-labelledby": "headingSix",
      "data-parent": "#accordion"
    }
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" GASOLINA")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.niveles.uno,
      expression: "niveles.uno"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.niveles, "uno", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "FULL"
    }
  }, [_vm._v("FULL")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "3/4"
    }
  }, [_vm._v("3/4")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1/2"
    }
  }, [_vm._v("1/2")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1/4"
    }
  }, [_vm._v("1/4")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "VACIO"
    }
  }, [_vm._v("VACIO")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" LIQUIDO DE FRENOS")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.niveles.dos,
      expression: "niveles.dos"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.niveles, "dos", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "FULL"
    }
  }, [_vm._v("FULL")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "3/4"
    }
  }, [_vm._v("3/4")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1/2"
    }
  }, [_vm._v("1/2")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1/4"
    }
  }, [_vm._v("1/4")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "VACIO"
    }
  }, [_vm._v("VACIO")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" ACEITE DE MOTOR")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.niveles.tres,
      expression: "niveles.tres"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.niveles, "tres", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "FULL"
    }
  }, [_vm._v("FULL")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "3/4"
    }
  }, [_vm._v("3/4")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1/2"
    }
  }, [_vm._v("1/2")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1/4"
    }
  }, [_vm._v("1/4")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "VACIO"
    }
  }, [_vm._v("VACIO")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" ANTICONGELANTE")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.niveles.cuatro,
      expression: "niveles.cuatro"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.niveles, "cuatro", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "FULL"
    }
  }, [_vm._v("FULL")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "3/4"
    }
  }, [_vm._v("3/4")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1/2"
    }
  }, [_vm._v("1/2")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1/4"
    }
  }, [_vm._v("1/4")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "VACIO"
    }
  }, [_vm._v("VACIO")])])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" DIRECCIÓN HIDRAULICA")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.niveles.cinco,
      expression: "niveles.cinco"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.niveles, "cinco", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "FULL"
    }
  }, [_vm._v("FULL")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "3/4"
    }
  }, [_vm._v("3/4")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1/2"
    }
  }, [_vm._v("1/2")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1/4"
    }
  }, [_vm._v("1/4")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "VACIO"
    }
  }, [_vm._v("VACIO")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" LIQUIDO LIMPIA PARABRISAS")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.niveles.seis,
      expression: "niveles.seis"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.niveles, "seis", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "FULL"
    }
  }, [_vm._v("FULL")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "3/4"
    }
  }, [_vm._v("3/4")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1/2"
    }
  }, [_vm._v("1/2")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1/4"
    }
  }, [_vm._v("1/4")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "VACIO"
    }
  }, [_vm._v("VACIO")])])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "card"
  }, [_vm._m(6), _vm._v(" "), _c("div", {
    staticClass: "collapse",
    attrs: {
      id: "collapseSeven",
      "aria-labelledby": "headingSeven",
      "data-parent": "#accordion"
    }
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" COSTADO DERECHO")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.carroceria.uno,
      expression: "carroceria.uno"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.carroceria, "uno", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "BUENO"
    }
  }, [_vm._v("BUENO")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "REGULAR"
    }
  }, [_vm._v("REGULAR")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "MALO"
    }
  }, [_vm._v("MALO")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" CAJUELA")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.carroceria.dos,
      expression: "carroceria.dos"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.carroceria, "dos", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "BUENO"
    }
  }, [_vm._v("BUENO")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "REGULAR"
    }
  }, [_vm._v("REGULAR")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "MALO"
    }
  }, [_vm._v("MALO")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" COSTADO IZQUIERDO")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.carroceria.tres,
      expression: "carroceria.tres"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.carroceria, "tres", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "BUENO"
    }
  }, [_vm._v("BUENO")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "REGULAR"
    }
  }, [_vm._v("REGULAR")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "MALO"
    }
  }, [_vm._v("MALO")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" PINTURA")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.carroceria.cuatro,
      expression: "carroceria.cuatro"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.carroceria, "cuatro", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "BUENO"
    }
  }, [_vm._v("BUENO")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "REGULAR"
    }
  }, [_vm._v("REGULAR")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "MALO"
    }
  }, [_vm._v("MALO")])])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" COFRE")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.carroceria.cinco,
      expression: "carroceria.cinco"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.carroceria, "cinco", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "BUENO"
    }
  }, [_vm._v("BUENO")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "REGULAR"
    }
  }, [_vm._v("REGULAR")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "MALO"
    }
  }, [_vm._v("MALO")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" SISTEMA DE ALARMA")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.carroceria.seis,
      expression: "carroceria.seis"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.carroceria, "seis", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "BUENO"
    }
  }, [_vm._v("BUENO")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "REGULAR"
    }
  }, [_vm._v("REGULAR")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "MALO"
    }
  }, [_vm._v("MALO")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" TOLDO")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.carroceria.siete,
      expression: "carroceria.siete"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.carroceria, "siete", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "BUENO"
    }
  }, [_vm._v("BUENO")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "REGULAR"
    }
  }, [_vm._v("REGULAR")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "MALO"
    }
  }, [_vm._v("MALO")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" VESTIDURAS")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.carroceria.ocho,
      expression: "carroceria.ocho"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.carroceria, "ocho", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "BUENO"
    }
  }, [_vm._v("BUENO")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "REGULAR"
    }
  }, [_vm._v("REGULAR")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "MALO"
    }
  }, [_vm._v("MALO")])])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" ASIENTOS")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.carroceria.nueve,
      expression: "carroceria.nueve"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.carroceria, "nueve", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "BUENO"
    }
  }, [_vm._v("BUENO")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "REGULAR"
    }
  }, [_vm._v("REGULAR")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "MALO"
    }
  }, [_vm._v("MALO")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" CARROCERIA")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.carroceria.diez,
      expression: "carroceria.diez"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.carroceria, "diez", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "BUENO"
    }
  }, [_vm._v("BUENO")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "REGULAR"
    }
  }, [_vm._v("REGULAR")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "MALO"
    }
  }, [_vm._v("MALO")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" VENTANAS")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.carroceria.once,
      expression: "carroceria.once"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.carroceria, "once", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "BUENO"
    }
  }, [_vm._v("BUENO")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "REGULAR"
    }
  }, [_vm._v("REGULAR")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "MALO"
    }
  }, [_vm._v("MALO")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" CHASIS")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.carroceria.doce,
      expression: "carroceria.doce"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.carroceria, "doce", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "BUENO"
    }
  }, [_vm._v("BUENO")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "REGULAR"
    }
  }, [_vm._v("REGULAR")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "MALO"
    }
  }, [_vm._v("MALO")])])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" EXTERIOR")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.carroceria.trece,
      expression: "carroceria.trece"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.carroceria, "trece", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "LIMPIO"
    }
  }, [_vm._v("LIMPIO")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "SUCIO"
    }
  }, [_vm._v("SUCIO")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" INTERIOR")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.carroceria.catorce,
      expression: "carroceria.catorce"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.carroceria, "catorce", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "LIMPIO"
    }
  }, [_vm._v("LIMPIO")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "SUCIO"
    }
  }, [_vm._v("SUCIO")])])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "card"
  }, [_vm._m(7), _vm._v(" "), _c("div", {
    staticClass: "collapse",
    attrs: {
      id: "collapseEight",
      "aria-labelledby": "headingEight",
      "data-parent": "#accordion"
    }
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" MOTOR")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.funcionamiento.uno,
      expression: "funcionamiento.uno"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.funcionamiento, "uno", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "BUENO"
    }
  }, [_vm._v("BUENO")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "REGULAR"
    }
  }, [_vm._v("REGULAR")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "MALO"
    }
  }, [_vm._v("MALO")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "N/A"
    }
  }, [_vm._v("N/A")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" CLUTCH")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.funcionamiento.dos,
      expression: "funcionamiento.dos"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.funcionamiento, "dos", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "BUENO"
    }
  }, [_vm._v("BUENO")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "REGULAR"
    }
  }, [_vm._v("REGULAR")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "MALO"
    }
  }, [_vm._v("MALO")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "N/A"
    }
  }, [_vm._v("N/A")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" DIRECCIÓN HIDRAULICA")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.funcionamiento.tres,
      expression: "funcionamiento.tres"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.funcionamiento, "tres", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "BUENO"
    }
  }, [_vm._v("BUENO")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "REGULAR"
    }
  }, [_vm._v("REGULAR")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "MALO"
    }
  }, [_vm._v("MALO")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "N/A"
    }
  }, [_vm._v("N/A")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" LIMPIA PARA PARABRISAS")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.funcionamiento.cuatro,
      expression: "funcionamiento.cuatro"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.funcionamiento, "cuatro", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "BUENO"
    }
  }, [_vm._v("BUENO")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "REGULAR"
    }
  }, [_vm._v("REGULAR")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "MALO"
    }
  }, [_vm._v("MALO")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "N/A"
    }
  }, [_vm._v("N/A")])])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" CAJA DE VELOCIDADES")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.funcionamiento.cinco,
      expression: "funcionamiento.cinco"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.funcionamiento, "cinco", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "BUENO"
    }
  }, [_vm._v("BUENO")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "REGULAR"
    }
  }, [_vm._v("REGULAR")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "MALO"
    }
  }, [_vm._v("MALO")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "N/A"
    }
  }, [_vm._v("N/A")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" FRENOS")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.funcionamiento.seis,
      expression: "funcionamiento.seis"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.funcionamiento, "seis", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "BUENO"
    }
  }, [_vm._v("BUENO")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "REGULAR"
    }
  }, [_vm._v("REGULAR")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "MALO"
    }
  }, [_vm._v("MALO")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "N/A"
    }
  }, [_vm._v("N/A")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" GPS")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.funcionamiento.siete,
      expression: "funcionamiento.siete"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.funcionamiento, "siete", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "BUENO"
    }
  }, [_vm._v("BUENO")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "REGULAR"
    }
  }, [_vm._v("REGULAR")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "MALO"
    }
  }, [_vm._v("MALO")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "N/A"
    }
  }, [_vm._v("N/A")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" CAMARA REVERSA")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.funcionamiento.ocho,
      expression: "funcionamiento.ocho"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.funcionamiento, "ocho", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "BUENO"
    }
  }, [_vm._v("BUENO")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "REGULAR"
    }
  }, [_vm._v("REGULAR")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "MALO"
    }
  }, [_vm._v("MALO")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "N/A"
    }
  }, [_vm._v("N/A")])])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" REVERSERO")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.funcionamiento.nueve,
      expression: "funcionamiento.nueve"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.funcionamiento, "nueve", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "BUENO"
    }
  }, [_vm._v("BUENO")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "REGULAR"
    }
  }, [_vm._v("REGULAR")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "MALO"
    }
  }, [_vm._v("MALO")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "N/A"
    }
  }, [_vm._v("N/A")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" OTRO")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.funcionamiento.diez,
      expression: "funcionamiento.diez"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.funcionamiento, "diez", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "BUENO"
    }
  }, [_vm._v("BUENO")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "REGULAR"
    }
  }, [_vm._v("REGULAR")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "MALO"
    }
  }, [_vm._v("MALO")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "N/A"
    }
  }, [_vm._v("N/A")])])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "card"
  }, [_vm._m(8), _vm._v(" "), _c("div", {
    staticClass: "collapse",
    attrs: {
      id: "collapseNine",
      "aria-labelledby": "headingNine",
      "data-parent": "#accordion"
    }
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" EXTINTOR")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.accesorios.uno,
      expression: "accesorios.uno"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.accesorios, "uno", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "SI"
    }
  }, [_vm._v("SI")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "NO"
    }
  }, [_vm._v("NO")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" BOTIQUIN DE PRIMEROS AUXILIOS")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.accesorios.dos,
      expression: "accesorios.dos"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.accesorios, "dos", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "SI"
    }
  }, [_vm._v("SI")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "NO"
    }
  }, [_vm._v("NO")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" GATO HIDRAULICO")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.accesorios.tres,
      expression: "accesorios.tres"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.accesorios, "tres", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "SI"
    }
  }, [_vm._v("SI")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "NO"
    }
  }, [_vm._v("NO")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" FANTASMAS O SEÑALAMIENTOS REVERSA")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.accesorios.cuatro,
      expression: "accesorios.cuatro"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.accesorios, "cuatro", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "SI"
    }
  }, [_vm._v("SI")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "NO"
    }
  }, [_vm._v("NO")])])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" LLAVE DE CRUZ O ELE")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.accesorios.cinco,
      expression: "accesorios.cinco"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.accesorios, "cinco", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "SI"
    }
  }, [_vm._v("SI")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "NO"
    }
  }, [_vm._v("NO")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" LLAVES, DESAMADORES, PINZAS")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.accesorios.seis,
      expression: "accesorios.seis"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.accesorios, "seis", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "SI"
    }
  }, [_vm._v("SI")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "NO"
    }
  }, [_vm._v("NO")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" BIRLO DE SEGURIDAD")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.accesorios.siete,
      expression: "accesorios.siete"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.accesorios, "siete", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "SI"
    }
  }, [_vm._v("SI")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "NO"
    }
  }, [_vm._v("NO")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" EXTENSIONES Y GANCHOS")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.accesorios.ocho,
      expression: "accesorios.ocho"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.accesorios, "ocho", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "SI"
    }
  }, [_vm._v("SI")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "NO"
    }
  }, [_vm._v("NO")])])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" CABLES PARA CORRIENTE")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.accesorios.nueve,
      expression: "accesorios.nueve"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.accesorios, "nueve", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "SI"
    }
  }, [_vm._v("SI")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "NO"
    }
  }, [_vm._v("NO")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" LAMPARA, IMPERMEABLE")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.accesorios.diez,
      expression: "accesorios.diez"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.accesorios, "diez", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "SI"
    }
  }, [_vm._v("SI")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "NO"
    }
  }, [_vm._v("NO")])])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "card"
  }, [_vm._m(9), _vm._v(" "), _c("div", {
    staticClass: "collapse",
    attrs: {
      id: "collapseTen",
      "aria-labelledby": "headingTen",
      "data-parent": "#accordion"
    }
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" TAPÓN DE RADIADOR")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.cofre.uno,
      expression: "cofre.uno"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.cofre, "uno", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "SI"
    }
  }, [_vm._v("SI")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "NO"
    }
  }, [_vm._v("NO")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" TAPÓN DE ACEITE")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.cofre.dos,
      expression: "cofre.dos"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.cofre, "dos", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "SI"
    }
  }, [_vm._v("SI")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "NO"
    }
  }, [_vm._v("NO")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" BAYONETA ACEITE")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.cofre.tres,
      expression: "cofre.tres"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.cofre, "tres", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "SI"
    }
  }, [_vm._v("SI")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "NO"
    }
  }, [_vm._v("NO")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" TAPÓN DE DIRECCIÓN")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.cofre.cuatro,
      expression: "cofre.cuatro"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.cofre, "cuatro", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "SI"
    }
  }, [_vm._v("SI")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "NO"
    }
  }, [_vm._v("NO")])])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" SUJETADOR DE BATERIA")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.cofre.cinco,
      expression: "cofre.cinco"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.cofre, "cinco", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "SI"
    }
  }, [_vm._v("SI")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "NO"
    }
  }, [_vm._v("NO")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" TAPÓN LIMPIA PARABRISAS")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.cofre.seis,
      expression: "cofre.seis"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.cofre, "seis", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "SI"
    }
  }, [_vm._v("SI")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "NO"
    }
  }, [_vm._v("NO")])])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "card"
  }, [_vm._m(10), _vm._v(" "), _c("div", {
    staticClass: "collapse",
    attrs: {
      id: "collapseOnce",
      "aria-labelledby": "headingOnce",
      "data-parent": "#accordion"
    }
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" DELANTERA DERECHA")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.llantas.uno,
      expression: "llantas.uno"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.llantas, "uno", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "NUEVA"
    }
  }, [_vm._v("NUEVA")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1/2 VIDA"
    }
  }, [_vm._v("1/2 VIDA")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "LISA"
    }
  }, [_vm._v("LISA")]), _c("option", {
    attrs: {
      value: "3/4 VIDA"
    }
  }, [_vm._v("3/4 VIDA")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" DELANTERA IZQUIERDA")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.llantas.dos,
      expression: "llantas.dos"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.llantas, "dos", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "NUEVA"
    }
  }, [_vm._v("NUEVA")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1/2 VIDA"
    }
  }, [_vm._v("1/2 VIDA")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "LISA"
    }
  }, [_vm._v("LISA")]), _c("option", {
    attrs: {
      value: "3/4 VIDA"
    }
  }, [_vm._v("3/4 VIDA")])])]), _vm._v(" "), _vm.datos.unidad != "" ? [_vm.datos.unidad.clase_tipo > 2 ? [_c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" TRASERA DERECHA")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.llantas.tres,
      expression: "llantas.tres"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.llantas, "tres", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "NUEVA"
    }
  }, [_vm._v("NUEVA")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1/2 VIDA"
    }
  }, [_vm._v("1/2 VIDA")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "LISA"
    }
  }, [_vm._v("LISA")]), _c("option", {
    attrs: {
      value: "3/4 VIDA"
    }
  }, [_vm._v("3/4 VIDA")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" TRASERA IZQUIERDA")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.llantas.cuatro,
      expression: "llantas.cuatro"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.llantas, "cuatro", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "NUEVA"
    }
  }, [_vm._v("NUEVA")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1/2 VIDA"
    }
  }, [_vm._v("1/2 VIDA")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "LISA"
    }
  }, [_vm._v("LISA")]), _c("option", {
    attrs: {
      value: "3/4 VIDA"
    }
  }, [_vm._v("3/4 VIDA")])])])] : _vm._e()] : _vm._e()], 2), _vm._v(" "), _vm.datos.unidad != "" ? [_vm.datos.unidad.clase_tipo == 1 ? [_c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" CENTRAL DERECHA 1")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.llantas.seis,
      expression: "llantas.seis"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.llantas, "seis", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "NUEVA"
    }
  }, [_vm._v("NUEVA")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1/2 VIDA"
    }
  }, [_vm._v("1/2 VIDA")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "LISA"
    }
  }, [_vm._v("LISA")]), _c("option", {
    attrs: {
      value: "3/4 VIDA"
    }
  }, [_vm._v("3/4 VIDA")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" CENTRAL DERECHA 2")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.llantas.siete,
      expression: "llantas.siete"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.llantas, "siete", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "NUEVA"
    }
  }, [_vm._v("NUEVA")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1/2 VIDA"
    }
  }, [_vm._v("1/2 VIDA")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "LISA"
    }
  }, [_vm._v("LISA")]), _c("option", {
    attrs: {
      value: "3/4 VIDA"
    }
  }, [_vm._v("3/4 VIDA")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" CENTRAL IZQUIERDA 1")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.llantas.ocho,
      expression: "llantas.ocho"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.llantas, "ocho", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "NUEVA"
    }
  }, [_vm._v("NUEVA")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1/2 VIDA"
    }
  }, [_vm._v("1/2 VIDA")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "LISA"
    }
  }, [_vm._v("LISA")]), _c("option", {
    attrs: {
      value: "3/4 VIDA"
    }
  }, [_vm._v("3/4 VIDA")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" CENTRAL IZQUIERDA 2")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.llantas.nueve,
      expression: "llantas.nueve"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.llantas, "nueve", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "NUEVA"
    }
  }, [_vm._v("NUEVA")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1/2 VIDA"
    }
  }, [_vm._v("1/2 VIDA")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "LISA"
    }
  }, [_vm._v("LISA")]), _c("option", {
    attrs: {
      value: "3/4 VIDA"
    }
  }, [_vm._v("3/4 VIDA")])])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" TRASERA DERECHA 1")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.llantas.diez,
      expression: "llantas.diez"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.llantas, "diez", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "NUEVA"
    }
  }, [_vm._v("NUEVA")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1/2 VIDA"
    }
  }, [_vm._v("1/2 VIDA")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "LISA"
    }
  }, [_vm._v("LISA")]), _c("option", {
    attrs: {
      value: "3/4 VIDA"
    }
  }, [_vm._v("3/4 VIDA")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" TRASERA DERECHA 2")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.llantas.once,
      expression: "llantas.once"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.llantas, "once", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "NUEVA"
    }
  }, [_vm._v("NUEVA")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1/2 VIDA"
    }
  }, [_vm._v("1/2 VIDA")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "LISA"
    }
  }, [_vm._v("LISA")]), _c("option", {
    attrs: {
      value: "3/4 VIDA"
    }
  }, [_vm._v("3/4 VIDA")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" TRASERA IZQUIERDA 1")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.llantas.doce,
      expression: "llantas.doce"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.llantas, "doce", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "NUEVA"
    }
  }, [_vm._v("NUEVA")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1/2 VIDA"
    }
  }, [_vm._v("1/2 VIDA")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "LISA"
    }
  }, [_vm._v("LISA")]), _c("option", {
    attrs: {
      value: "3/4 VIDA"
    }
  }, [_vm._v("3/4 VIDA")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" TRASERA IZQUIERDA 2")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.llantas.trece,
      expression: "llantas.trece"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.llantas, "trece", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "NUEVA"
    }
  }, [_vm._v("NUEVA")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1/2 VIDA"
    }
  }, [_vm._v("1/2 VIDA")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "LISA"
    }
  }, [_vm._v("LISA")]), _c("option", {
    attrs: {
      value: "3/4 VIDA"
    }
  }, [_vm._v("3/4 VIDA")])])])])] : _vm._e(), _vm._v(" "), _vm.datos.unidad != "" ? [_vm.datos.unidad.clase_tipo == 2 ? [_c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" TRASERA DERECHA 1")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.llantas.diez,
      expression: "llantas.diez"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.llantas, "diez", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "NUEVA"
    }
  }, [_vm._v("NUEVA")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1/2 VIDA"
    }
  }, [_vm._v("1/2 VIDA")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "LISA"
    }
  }, [_vm._v("LISA")]), _c("option", {
    attrs: {
      value: "3/4 VIDA"
    }
  }, [_vm._v("3/4 VIDA")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" TRASERA DERECHA 2")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.llantas.once,
      expression: "llantas.once"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.llantas, "once", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "NUEVA"
    }
  }, [_vm._v("NUEVA")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1/2 VIDA"
    }
  }, [_vm._v("1/2 VIDA")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "LISA"
    }
  }, [_vm._v("LISA")]), _c("option", {
    attrs: {
      value: "3/4 VIDA"
    }
  }, [_vm._v("3/4 VIDA")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" TRASERA IZQUIERDA 1")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.llantas.doce,
      expression: "llantas.doce"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.llantas, "doce", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "NUEVA"
    }
  }, [_vm._v("NUEVA")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1/2 VIDA"
    }
  }, [_vm._v("1/2 VIDA")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "LISA"
    }
  }, [_vm._v("LISA")]), _c("option", {
    attrs: {
      value: "3/4 VIDA"
    }
  }, [_vm._v("3/4 VIDA")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" TRASERA IZQUIERDA 2")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.llantas.trece,
      expression: "llantas.trece"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.llantas, "trece", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "NUEVA"
    }
  }, [_vm._v("NUEVA")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1/2 VIDA"
    }
  }, [_vm._v("1/2 VIDA")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "LISA"
    }
  }, [_vm._v("LISA")]), _c("option", {
    attrs: {
      value: "3/4 VIDA"
    }
  }, [_vm._v("3/4 VIDA")])])])])] : _vm._e()] : _vm._e()] : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" REFACCIÓN")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.llantas.cinco,
      expression: "llantas.cinco"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.llantas, "cinco", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "NUEVA"
    }
  }, [_vm._v("NUEVA")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1/2 VIDA"
    }
  }, [_vm._v("1/2 VIDA")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "LISA"
    }
  }, [_vm._v("LISA")]), _c("option", {
    attrs: {
      value: "3/4 VIDA"
    }
  }, [_vm._v("3/4 VIDA")])])])])], 2)])]), _vm._v(" "), _c("div", {
    staticClass: "card"
  }, [_vm._m(11), _vm._v(" "), _c("div", {
    staticClass: "collapse",
    attrs: {
      id: "collapseDoce",
      "aria-labelledby": "headingDoce",
      "data-parent": "#accordion"
    }
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" CARRETERA (LARGA)")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.luces.uno,
      expression: "luces.uno"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.luces, "uno", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "SI"
    }
  }, [_vm._v("SI")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "NO"
    }
  }, [_vm._v("NO")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" CRUCE (CORTA)")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.luces.dos,
      expression: "luces.dos"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.luces, "dos", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "SI"
    }
  }, [_vm._v("SI")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "NO"
    }
  }, [_vm._v("NO")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" DIRECCIÓNALES")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.luces.tres,
      expression: "luces.tres"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.luces, "tres", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "SI"
    }
  }, [_vm._v("SI")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "NO"
    }
  }, [_vm._v("NO")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" STOP")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.luces.cuatro,
      expression: "luces.cuatro"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.luces, "cuatro", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "SI"
    }
  }, [_vm._v("SI")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "NO"
    }
  }, [_vm._v("NO")])])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" REVERSA")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.luces.cinco,
      expression: "luces.cinco"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.luces, "cinco", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "SI"
    }
  }, [_vm._v("SI")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "NO"
    }
  }, [_vm._v("NO")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" NIEBLA")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.luces.seis,
      expression: "luces.seis"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.luces, "seis", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "SI"
    }
  }, [_vm._v("SI")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "NO"
    }
  }, [_vm._v("NO")])])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "card"
  }, [_vm._m(12), _vm._v(" "), _c("div", {
    staticClass: "collapse",
    attrs: {
      id: "collapseTrece",
      "aria-labelledby": "headingTrece",
      "data-parent": "#accordion"
    }
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" Foto")]), _vm._v(" "), _c("input", {
    ref: "adjunto",
    attrs: {
      type: "file",
      accept: "image/*",
      capture: "camera"
    },
    on: {
      change: function change($event) {
        return _vm.cargarImg();
      }
    }
  })])])]), _vm._v(" "), _vm._m(13), _vm._v(" "), _vm._l(_vm.img, function (vi, index) {
    return _c("li", {
      staticClass: "list-group-item"
    }, [_c("div", {
      staticClass: "form-row"
    }, [_c("div", {
      staticClass: "form-group col-md-2"
    }, [_c("label", [_vm._v(_vm._s(index + 1))])]), _vm._v(" "), _c("div", {
      staticClass: "form-group col-md-6"
    }, [_c("label"), _vm._v(" "), _c("img", {
      attrs: {
        src: vi.name,
        width: "200px",
        height: "150px"
      }
    })]), _vm._v(" "), _c("div", {
      staticClass: "form-group col-md-1"
    }, [_c("a", {
      on: {
        click: function click($event) {
          return _vm.deleteu(vi, index);
        }
      }
    }, [_c("span", {
      staticClass: "fas fa-trash",
      attrs: {
        "arial-hidden": "true"
      }
    })])])])]);
  })], 2)])]), _vm._v(" "), _c("div", {
    staticClass: "card"
  }, [_vm._m(14), _vm._v(" "), _c("div", {
    staticClass: "collapse",
    attrs: {
      id: "collapseCatorce",
      "aria-labelledby": "headingCatorce",
      "data-parent": "#accordion"
    }
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-12 mb-3"
  }, [_c("label", [_vm._v(" OBSERVACIONES")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.observaciones,
      expression: "observaciones"
    }],
    staticClass: "form-control",
    attrs: {
      name: "name",
      rows: "4",
      cols: "80"
    },
    domProps: {
      value: _vm.observaciones
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.observaciones = $event.target.value;
      }
    }
  })])])])])]), _vm._v(" "), _c("div", {
    staticClass: "card"
  }, [_vm._m(15), _vm._v(" "), _c("div", {
    staticClass: "collapse",
    attrs: {
      id: "collapseQuince",
      "aria-labelledby": "headingQuince",
      "data-parent": "#accordion"
    }
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-5 mb-3"
  }, [_c("label", [_vm._v(" PERSONA QUE ENTREGA")]), _vm._v(" "), _c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    attrs: {
      options: _vm.listaEmpleados,
      label: "name",
      "data-vv-name": "entrega"
    },
    model: {
      value: _vm.personal.entrega,
      callback: function callback($$v) {
        _vm.$set(_vm.personal, "entrega", $$v);
      },
      expression: "personal.entrega"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("entrega")))])], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-5 mb-3"
  }, [_c("label", [_vm._v(" PERSONA QUE RECIBE")]), _vm._v(" "), _c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    attrs: {
      options: _vm.listaEmpleados,
      label: "name",
      "data-vv-name": "recibe"
    },
    model: {
      value: _vm.personal.recibe,
      callback: function callback($$v) {
        _vm.$set(_vm.personal, "recibe", $$v);
      },
      expression: "personal.recibe"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("recibe")))])], 1)])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("button", {
    staticClass: "btn btn-outline-dark",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.cerrarModal();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-window-close"
  }), _vm._v(" Cerrar\n              ")]), _vm._v(" "), _c("button", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.tipoAccion == 1,
      expression: "tipoAccion == 1"
    }],
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.Guardar(1);
      }
    }
  }, [_vm._v("\n                Guardar\n              ")]), _vm._v(" "), _c("button", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.tipoAccion == 3,
      expression: "tipoAccion == 3"
    }],
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.GuardarRep(1);
      }
    }
  }, [_vm._v("\n                Guardar\n              ")]), _vm._v(" "), _c("button", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.tipoAccion == 2,
      expression: "tipoAccion == 2"
    }],
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.Guardar(0);
      }
    }
  }, [_vm._v("\n                Actualizar\n              ")]), _vm._v(" "), _c("button", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.tipoAccion == 4,
      expression: "tipoAccion == 4"
    }],
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.GuardarRep(0);
      }
    }
  }, [_vm._v("\n                Actualizar\n              ")])])])])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header",
    attrs: {
      id: "headingOne"
    }
  }, [_c("h5", {
    staticClass: "mb-0"
  }, [_c("button", {
    staticClass: "btn btn-link",
    attrs: {
      "data-toggle": "collapse",
      "data-target": "#collapseOne",
      "aria-expanded": "true",
      "aria-controls": "collapseOne"
    }
  }, [_vm._v("\n                        DATOS DE LA UNIDAD\n                      ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header",
    attrs: {
      id: "headingTwo"
    }
  }, [_c("h5", {
    staticClass: "mb-0"
  }, [_c("button", {
    staticClass: "btn btn-link collapsed",
    attrs: {
      "data-toggle": "collapse",
      "data-target": "#collapseTwo",
      "aria-expanded": "false",
      "aria-controls": "collapseTwo"
    }
  }, [_vm._v("\n                        DATOS DEL USUARIO\n                      ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" ")]), _vm._v(" "), _c("span")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header",
    attrs: {
      id: "headingThree"
    }
  }, [_c("h5", {
    staticClass: "mb-0"
  }, [_c("button", {
    staticClass: "btn btn-link collapsed",
    attrs: {
      "data-toggle": "collapse",
      "data-target": "#collapseThree",
      "aria-expanded": "false",
      "aria-controls": "collapseThree"
    }
  }, [_vm._v("\n                        ACCESORIOS EXTERNOS\n                      ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header",
    attrs: {
      id: "headingFive"
    }
  }, [_c("h5", {
    staticClass: "mb-0"
  }, [_c("button", {
    staticClass: "btn btn-link collapsed",
    attrs: {
      "data-toggle": "collapse",
      "data-target": "#collapseFive",
      "aria-expanded": "false",
      "aria-controls": "collapseFive"
    }
  }, [_vm._v("\n                        ACCESORIOS INTERNOS\n                      ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header",
    attrs: {
      id: "headingSix"
    }
  }, [_c("h5", {
    staticClass: "mb-0"
  }, [_c("button", {
    staticClass: "btn btn-link collapsed",
    attrs: {
      "data-toggle": "collapse",
      "data-target": "#collapseSix",
      "aria-expanded": "false",
      "aria-controls": "collapseSix"
    }
  }, [_vm._v("\n                        NIVELES\n                      ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header",
    attrs: {
      id: "headingSeven"
    }
  }, [_c("h5", {
    staticClass: "mb-0"
  }, [_c("button", {
    staticClass: "btn btn-link collapsed",
    attrs: {
      "data-toggle": "collapse",
      "data-target": "#collapseSeven",
      "aria-expanded": "false",
      "aria-controls": "collapseSeven"
    }
  }, [_vm._v("\n                        CARROCERÍA E INTERIORES\n                      ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header",
    attrs: {
      id: "headingEight"
    }
  }, [_c("h5", {
    staticClass: "mb-0"
  }, [_c("button", {
    staticClass: "btn btn-link collapsed",
    attrs: {
      "data-toggle": "collapse",
      "data-target": "#collapseEight",
      "aria-expanded": "false",
      "aria-controls": "collapseEight"
    }
  }, [_vm._v("\n                        DETALLES DE FUNCIONAMIENTO\n                      ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header",
    attrs: {
      id: "headingNine"
    }
  }, [_c("h5", {
    staticClass: "mb-0"
  }, [_c("button", {
    staticClass: "btn btn-link collapsed",
    attrs: {
      "data-toggle": "collapse",
      "data-target": "#collapseNine",
      "aria-expanded": "false",
      "aria-controls": "collapseNine"
    }
  }, [_vm._v("\n                        ACCESORIOS Y HERRAMIENTAS AUXILIARES\n                      ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header",
    attrs: {
      id: "headingTen"
    }
  }, [_c("h5", {
    staticClass: "mb-0"
  }, [_c("button", {
    staticClass: "btn btn-link collapsed",
    attrs: {
      "data-toggle": "collapse",
      "data-target": "#collapseTen",
      "aria-expanded": "false",
      "aria-controls": "collapseTen"
    }
  }, [_vm._v("\n                        COFRE\n                      ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header",
    attrs: {
      id: "headingOnce"
    }
  }, [_c("h5", {
    staticClass: "mb-0"
  }, [_c("button", {
    staticClass: "btn btn-link collapsed",
    attrs: {
      "data-toggle": "collapse",
      "data-target": "#collapseOnce",
      "aria-expanded": "false",
      "aria-controls": "collapseOnce"
    }
  }, [_vm._v("\n                        LLANTAS\n                      ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header",
    attrs: {
      id: "headingDoce"
    }
  }, [_c("h5", {
    staticClass: "mb-0"
  }, [_c("button", {
    staticClass: "btn btn-link collapsed",
    attrs: {
      "data-toggle": "collapse",
      "data-target": "#collapseDoce",
      "aria-expanded": "false",
      "aria-controls": "collapseDoce"
    }
  }, [_vm._v("\n                        LUCES\n                      ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header",
    attrs: {
      id: "headingTrece"
    }
  }, [_c("h5", {
    staticClass: "mb-0"
  }, [_c("button", {
    staticClass: "btn btn-link collapsed",
    attrs: {
      "data-toggle": "collapse",
      "data-target": "#collapseTrece",
      "aria-expanded": "false",
      "aria-controls": "collapseTrece"
    }
  }, [_vm._v("\n                        FOTOS\n                      ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-2"
  }, [_c("label", [_c("b", [_vm._v("#")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-6"
  }, [_c("label", [_c("b", [_vm._v("Preview")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-1"
  }, [_c("label", [_c("b", [_vm._v(".")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header",
    attrs: {
      id: "headingCatorce"
    }
  }, [_c("h5", {
    staticClass: "mb-0"
  }, [_c("button", {
    staticClass: "btn btn-link collapsed",
    attrs: {
      "data-toggle": "collapse",
      "data-target": "#collapseCatorce",
      "aria-expanded": "false",
      "aria-controls": "collapseCatorce"
    }
  }, [_vm._v("\n                        OBSERVACIONES\n                      ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header",
    attrs: {
      id: "headingQuince"
    }
  }, [_c("h5", {
    staticClass: "mb-0"
  }, [_c("button", {
    staticClass: "btn btn-link collapsed",
    attrs: {
      "data-toggle": "collapse",
      "data-target": "#collapseQuince",
      "aria-expanded": "false",
      "aria-controls": "collapseQuince"
    }
  }, [_vm._v("\n                        PERSONAL\n                      ")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/Mantenimiento/Mantenimiento.vue?vue&type=template&id=e6732ace":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/Mantenimiento/Mantenimiento.vue?vue&type=template&id=e6732ace ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "main"
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("i", {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" Mantenimiento Vehicular " + _vm._s(_vm.empresa == 1 ? "CONSERFLOW" : "CSCT") + "\r\n            "), _c("div", {
    staticClass: "dropdown"
  }, [_c("button", {
    staticClass: "btn btn-secondary dropdown-toggle float-sm-right",
    attrs: {
      type: "button",
      id: "dropdownMenu2",
      "data-toggle": "dropdown",
      "aria-haspopup": "true",
      "aria-expanded": "false"
    }
  }, [_vm._v("\r\n                    Empresa\r\n                ")]), _vm._v(" "), _c("div", {
    staticClass: "dropdown-menu",
    attrs: {
      "aria-labelledby": "dropdownMenu2"
    }
  }, [_c("button", {
    staticClass: "dropdown-item",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        _vm.empresa = 1;
        _vm.getDataInicial();
        _vm.getData();
      }
    }
  }, [_vm._v("Conserflow")]), _vm._v(" "), _c("button", {
    staticClass: "dropdown-item",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        _vm.empresa = 2;
        _vm.getDataInicial();
        _vm.getData();
      }
    }
  }, [_vm._v("Constructora")]), _vm._v(" "), _c("button", {
    staticClass: "dropdown-item",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        _vm.empresa = 3;
        _vm.getDataInicial();
        _vm.getData();
      }
    }
  }, [_vm._v("Diego Cruz M.")]), _vm._v(" "), _c("button", {
    staticClass: "dropdown-item",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        _vm.empresa = 4;
        _vm.getDataInicial();
        _vm.getData();
      }
    }
  }, [_vm._v("Ramón Cruz M.")])])]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-dark float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.AbrirModalMantenimiento(true);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  }, [_vm._v(" ")]), _vm._v("Nuevo\r\n            ")])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {}, [_c("div", {}, [_c("v-client-table", {
    ref: "tbl_mantenimiento",
    attrs: {
      columns: _vm.columns_mantenimiento,
      data: _vm.list_mantenimiento,
      options: _vm.options_mantenimiento
    },
    scopedSlots: _vm._u([{
      key: "id",
      fn: function fn(props) {
        return [_c("div", {
          staticClass: "btn-group",
          attrs: {
            role: "group"
          }
        }, [_c("button", {
          staticClass: "btn btn-outline-dark dropdown-toggle",
          attrs: {
            id: "btn_id",
            type: "button",
            "data-toggle": "dropdown",
            "aria-haspopup": "true",
            "aria-expanded": "false"
          }
        }, [_c("i", {
          staticClass: "fas fa-grip-horizontal"
        }), _vm._v("  Acciones\r\n                                ")]), _vm._v(" "), _c("div", {
          staticClass: "dropdown-menu"
        }, [[_c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.AbrirModalMantenimiento(false, props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-edit"
        }), _vm._v(" Actualizar\r\n                                        ")]), _vm._v(" "), _c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.Descargar(props.row.id);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-download"
        }), _vm._v(" Descargar\r\n                                        ")]), _vm._v(" "), _c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.eliminar(props.row.id);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-trash"
        }), _vm._v(" Eliminar\r\n                                        ")])]], 2)])];
      }
    }, {
      key: "tipo",
      fn: function fn(props) {
        return [props.row.tipo == 1 ? _c("button", {
          staticClass: "btn btn-outline-success",
          attrs: {
            type: "button"
          }
        }, [_vm._v("\r\n                                Preventivo\r\n                            ")]) : _c("button", {
          staticClass: "btn btn-outline-warning",
          attrs: {
            type: "button"
          }
        }, [_vm._v("\r\n                                Correctivo\r\n                            ")])];
      }
    }])
  })], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "modal fade",
    "class": {
      mostrar: _vm.ver_modal_mantenimiento
    },
    staticStyle: {
      display: "none"
    },
    attrs: {
      tabindex: "-1",
      role: "dialog",
      "aria-labelledby": "myModalLabel",
      "aria-hidden": "true"
    }
  }, [_c("div", {
    staticClass: "modal-dialog modal-dark modal-lg",
    attrs: {
      role: "document"
    }
  }, [_c("div", {
    staticClass: "modal-content"
  }, [_c("div", {
    staticClass: "modal-header"
  }, [_c("h4", {
    staticClass: "modal-title",
    domProps: {
      textContent: _vm._s(_vm.titulo_modal_mantenimiento)
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "close",
    attrs: {
      type: "button",
      "aria-label": "Close"
    },
    on: {
      click: function click($event) {
        return _vm.CerrarModalMantenimiento();
      }
    }
  }, [_c("span", {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("×")])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-6 mb-3"
  }, [_c("label", [_vm._v("Unidad")]), _vm._v(" "), _c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    attrs: {
      options: _vm.listaCatalogo,
      label: "placas",
      "data-vv-name": "unidad"
    },
    model: {
      value: _vm.mantenimiento.unidad,
      callback: function callback($$v) {
        _vm.$set(_vm.mantenimiento, "unidad", $$v);
      },
      expression: "mantenimiento.unidad"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("unidad")))])], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 mb-3"
  }, [_c("span", [_vm._v(_vm._s(_vm.mantenimiento.unidad == "" ? "" : _vm.mantenimiento.unidad == null ? "" : _vm.mantenimiento.unidad.unidad + " " + _vm.mantenimiento.unidad.modelo + " " + _vm.mantenimiento.unidad.marca))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v("Tipo")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.mantenimiento.tipo,
      expression: "mantenimiento.tipo"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.mantenimiento, "tipo", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("Preventivo")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "2"
    }
  }, [_vm._v("Correctivo")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-9 mb-3"
  }, [_c("label", [_vm._v(_vm._s(_vm.mantenimiento.tipo == 1 ? "Descripción del servicio a realizar" : _vm.mantenimiento.tipo == 2 ? "Descripción del daño, falla o avería detectada" : ""))]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.mantenimiento.descripcion,
      expression: "mantenimiento.descripcion"
    }],
    staticClass: "form-control",
    attrs: {
      rows: "4",
      cols: "80"
    },
    domProps: {
      value: _vm.mantenimiento.descripcion
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.mantenimiento, "descripcion", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-6 mb-3"
  }, [_c("label", [_vm._v("Nombre quién solicita el mantenimiento")]), _vm._v(" "), _c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    attrs: {
      options: _vm.listaEmpleados,
      label: "name",
      "data-vv-name": "nombre"
    },
    model: {
      value: _vm.mantenimiento.solicita,
      callback: function callback($$v) {
        _vm.$set(_vm.mantenimiento, "solicita", $$v);
      },
      expression: "mantenimiento.solicita"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("nombre")))])], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 mb-3"
  }, [_c("label", [_vm._v("Nombre de quién recibe la solicitud de mantenimiento")]), _vm._v(" "), _c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    attrs: {
      options: _vm.listaEmpleados,
      label: "name",
      "data-vv-name": "nombre"
    },
    model: {
      value: _vm.mantenimiento.recibe,
      callback: function callback($$v) {
        _vm.$set(_vm.mantenimiento, "recibe", $$v);
      },
      expression: "mantenimiento.recibe"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("nombre")))])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-6 mb-3"
  }, [_c("label", [_vm._v("Fecha inicio")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.mantenimiento.fecha_inicio,
      expression: "mantenimiento.fecha_inicio"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date",
      "data-vv-name": "fecha inicio"
    },
    domProps: {
      value: _vm.mantenimiento.fecha_inicio
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.mantenimiento, "fecha_inicio", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("fecha_inicio")))])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 mb-3"
  }, [_c("label", [_vm._v("Fecha salida")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.mantenimiento.fecha_salida,
      expression: "mantenimiento.fecha_salida"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date",
      "data-vv-name": "fecha salida"
    },
    domProps: {
      value: _vm.mantenimiento.fecha_salida
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.mantenimiento, "fecha_salida", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-8 mb-3"
  }, [_c("label", [_vm._v("Proveedor asignado")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.mantenimiento.proveedor,
      expression: "mantenimiento.proveedor"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.mantenimiento.proveedor
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.mantenimiento, "proveedor", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-12 mb-3"
  }, [_c("label", [_vm._v("Detalles del servicio efectuados")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.mantenimiento.detalle,
      expression: "mantenimiento.detalle"
    }],
    staticClass: "form-control",
    attrs: {
      name: "name",
      rows: "4",
      cols: "80"
    },
    domProps: {
      value: _vm.mantenimiento.detalle
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.mantenimiento, "detalle", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-6 mb-3"
  }, [_c("label", [_vm._v("Refacciones y materiales empleados")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.mantenimiento.materiales,
      expression: "mantenimiento.materiales"
    }],
    staticClass: "form-control",
    attrs: {
      name: "name",
      rows: "4",
      cols: "80"
    },
    domProps: {
      value: _vm.mantenimiento.materiales
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.mantenimiento, "materiales", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 mb-3"
  }, [_c("label", [_vm._v("Quimicos empleados")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.mantenimiento.quimicos,
      expression: "mantenimiento.quimicos"
    }],
    staticClass: "form-control",
    attrs: {
      name: "name",
      rows: "4",
      cols: "80"
    },
    domProps: {
      value: _vm.mantenimiento.quimicos
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.mantenimiento, "quimicos", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-5 mb-3"
  }, [_c("label", [_vm._v("Elaboró")]), _vm._v(" "), _c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    attrs: {
      options: _vm.listaEmpleados,
      label: "name",
      "data-vv-name": "entrega"
    },
    model: {
      value: _vm.mantenimiento.entrega,
      callback: function callback($$v) {
        _vm.$set(_vm.mantenimiento, "entrega", $$v);
      },
      expression: "mantenimiento.entrega"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("entrega")))])], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-5 mb-3"
  }, [_c("label", [_vm._v("Recibió vehículo")]), _vm._v(" "), _c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    attrs: {
      options: _vm.listaEmpleados,
      label: "name",
      "data-vv-name": "recibe"
    },
    model: {
      value: _vm.mantenimiento.recibe_empleado,
      callback: function callback($$v) {
        _vm.$set(_vm.mantenimiento, "recibe_empleado", $$v);
      },
      expression: "mantenimiento.recibe_empleado"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("recibe")))])], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("button", {
    staticClass: "btn btn-outline-dark",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.CerrarModalMantenimiento();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-times"
  }), _vm._v(" Cerrar")]), _vm._v(" "), _vm.tipoAccion_modal_mantenimiento == 1 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.GuardarMantenimiento(1);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Guardar")]) : _vm._e(), _vm._v(" "), _vm.tipoAccion_modal_mantenimiento == 2 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.GuardarMantenimiento(0);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Actualizar")]) : _vm._e()])])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/ProveedoresVehiculos.vue?vue&type=template&id=7e542eb6":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/ProveedoresVehiculos.vue?vue&type=template&id=7e542eb6 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("main", {
    staticClass: "main"
  }, [_c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.tipoCardProveedor == 1,
      expression: "tipoCardProveedor==1"
    }],
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("i", {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" PROVEEDORES\r\n            "), _c("button", {
    staticClass: "btn btn-dark float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.AbrirModalProveedor(true);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  }), _vm._v(" Nuevo\r\n            ")])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isObtenerproveedor_loading
    }
  }), _vm._v(" "), _c("v-client-table", {
    attrs: {
      columns: _vm.columns_proveedor,
      data: _vm.list_proveedor,
      options: _vm.options_proveedor
    },
    scopedSlots: _vm._u([{
      key: "id",
      fn: function fn(props) {
        return [_c("div", {
          staticClass: "btn-group",
          attrs: {
            role: "group"
          }
        }, [_c("div", {
          staticClass: "btn-group dropup",
          attrs: {
            role: "group"
          }
        }, [_c("button", {
          staticClass: "btn btn-outline-dark dropdown-toggle",
          attrs: {
            type: "button",
            "data-toggle": "dropdown",
            "aria-haspopup": "true",
            "aria-expanded": "false"
          }
        }, [_c("i", {
          staticClass: "fas fa-grip-horizontal"
        }), _vm._v(" Acciones\r\n                            ")]), _vm._v(" "), _c("div", {
          staticClass: "dropdown-menu"
        }, [_c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.AbrirModalProveedor(false, props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-edit"
        }), _vm._v(" Actualizar\r\n                                ")])])])])];
      }
    }])
  })], 1)]), _vm._v(" "), _vm.ver_modal_proveedor ? _c("div", {
    staticClass: "modal fade",
    "class": {
      mostrar: _vm.ver_modal_proveedor
    },
    staticStyle: {
      display: "none"
    },
    attrs: {
      tabindex: "-1",
      role: "dialog",
      "aria-labelledby": "myModalLabel",
      "aria-hidden": "true"
    }
  }, [_c("div", {
    staticClass: "modal-dialog modal-dark modal-lg",
    attrs: {
      role: "document"
    }
  }, [_c("div", {
    staticClass: "modal-content"
  }, [_c("div", [_c("div", {
    staticClass: "modal-header"
  }, [_c("h4", {
    staticClass: "modal-title",
    domProps: {
      textContent: _vm._s(_vm.tituloModal_proveedor)
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "close",
    attrs: {
      type: "button",
      "aria-label": "Close"
    },
    on: {
      click: function click($event) {
        return _vm.CerrarModalProveedor();
      }
    }
  }, [_c("span", {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("×")])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isGuardarproveedor_loading
    }
  }), _vm._v(" "), _c("div", [_c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Nombre comercial")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.proveedor.nombre,
      expression: "proveedor.nombre"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      maxlength: "150",
      minlength: "5",
      "data-vv-name": "Nombre comercial",
      autocomplete: "off"
    },
    domProps: {
      value: _vm.proveedor.nombre
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.proveedor, "nombre", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Nombre comercial")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Razón social")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-9"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.proveedor.razon_social,
      expression: "proveedor.razon_social"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      maxlength: "150",
      minlength: "5",
      "data-vv-name": "Razón social",
      autocomplete: "off"
    },
    domProps: {
      value: _vm.proveedor.razon_social
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.proveedor, "razon_social", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Razón social")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("RFC")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.proveedor.rfc,
      expression: "proveedor.rfc"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      maxlength: "13",
      minlength: "12",
      "data-vv-name": "RFC",
      autocomplete: "off"
    },
    domProps: {
      value: _vm.proveedor.rfc
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.proveedor, "rfc", $event.target.value);
      }, function ($event) {
        return _vm.ValidarRFC();
      }]
    }
  }), _vm._v(" "), _c("span", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.rfc_valido,
      expression: "!rfc_valido"
    }],
    staticClass: "text-danger"
  }, [_vm._v("El RFC no es válido")])])])])], 1), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isGuardarproveedor_loading
    }
  }), _vm._v(" "), _c("div", [_c("button", {
    staticClass: "btn btn-outline-dark",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.CerrarModalProveedor();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-window-close"
  }), _vm._v(" Cerrar\r\n                            ")]), _vm._v(" "), _vm.tipoAccion_proveedor == 1 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.RegistrarProveedor(true);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Guardar\r\n                            ")]) : _vm._e(), _vm._v(" "), _vm.tipoAccion_proveedor == 2 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.RegistrarProveedor(false);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Actualizar\r\n                            ")]) : _vm._e()])], 1)])])])]) : _vm._e()]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/Reportes/Combustibles.vue?vue&type=template&id=0b777396":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/Reportes/Combustibles.vue?vue&type=template&id=0b777396 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("main", {
    staticClass: "main"
  }, [_c("div", {
    staticClass: "container-fluid"
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("i", {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" Combustible\r\n                "), _vm._v(" "), _c("button", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.PermisosCRUD.Create,
      expression: "PermisosCRUD.Create"
    }],
    staticClass: "btn btn-dark float-sm-right mr-1",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.abrirModal(1);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus mr-1"
  }), _vm._v("Nuevo\r\n                ")])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_c("div", {
    staticClass: "collapse multi-collapse",
    attrs: {
      id: "multiCollapseExample1"
    }
  }, [_c("div", {
    staticClass: "container row"
  }, [_c("div", {
    staticClass: "col-md-6"
  }, [_c("div", {}, [_c("label", [_vm._v("Inicio")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.reporte.inicio,
      expression: "reporte.inicio"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date"
    },
    domProps: {
      value: _vm.reporte.inicio
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.reporte, "inicio", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("label", [_vm._v("Fin")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.reporte.fin,
      expression: "reporte.fin"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date"
    },
    domProps: {
      value: _vm.reporte.fin
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.reporte, "fin", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.ubicacion_formato,
      expression: "ubicacion_formato"
    }],
    staticClass: "mt-1 form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.ubicacion_formato = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("Tehuacán")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "2"
    }
  }, [_vm._v("Coatzacoalcos")])]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-dark mt-2",
    on: {
      click: _vm.Reporte
    }
  }, [_vm._v("Generar")])])])])])])]), _vm._v(" "), _c("br"), _vm._v(" "), _c("vue-element-loading", {
    attrs: {
      active: _vm.isObtener_loading
    }
  }), _vm._v(" "), _c("v-client-table", {
    attrs: {
      data: _vm.list_combustible,
      columns: _vm.columns,
      options: _vm.options
    },
    scopedSlots: _vm._u([{
      key: "id",
      fn: function fn(props) {
        return [_c("div", {
          staticClass: "btn-group",
          attrs: {
            role: "group"
          }
        }, [_c("button", {
          staticClass: "btn btn-outline-dark dropdown-toggle",
          attrs: {
            id: "btn_id",
            type: "button",
            "data-toggle": "dropdown",
            "aria-haspopup": "true",
            "aria-expanded": "false"
          }
        }, [_c("i", {
          staticClass: "fas fa-grip-horizontal"
        })]), _vm._v(" "), _c("div", {
          staticClass: "dropdown-menu"
        }, [[props.row.condicion == 1 ? _c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.abrirModal(2, props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-edit"
        }), _vm._v("Actualizar\r\n                                    ")]) : _vm._e(), _vm._v(" "), props.row.condicion == 1 ? _c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.eliminar(props.row.id);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-trash"
        }), _vm._v("Cancelar\r\n                                    ")]) : _vm._e()]], 2)])];
      }
    }, {
      key: "condicion",
      fn: function fn(props) {
        return [props.row.condicion == 1 ? _c("button", {
          staticClass: "btn btn-outline-success"
        }, [_vm._v("Activo")]) : _c("button", {
          staticClass: "btn btn-outline-danger"
        }, [_vm._v("Cancelado")])];
      }
    }, {
      key: "vp_nombre",
      fn: function fn(props) {
        return [props.row.vp_nombre != null ? _c("p", [_vm._v(_vm._s(props.row.vp_nombre))]) : _c("p", {
          staticClass: "text-warning"
        }, [_vm._v(_vm._s(props.row.proveedor))])];
      }
    }, {
      key: "unidad",
      fn: function fn(props) {
        return [props.row.unidad_id == -1 ? _c("p", [_vm._v(_vm._s(props.row.cantidad_bidones) + " Bidones")]) : props.row.unidad_id == -99 ? _c("p", [_vm._v("CANCELADO")]) : _c("p", [_vm._v(_vm._s(props.row.unidad) + " - " + _vm._s(props.row.modelo) + " ")])];
      }
    }, {
      key: "nombre_corto",
      fn: function fn(props) {
        return [props.row.unidad_id == -99 ? _c("p", [_vm._v("CANCELADO")]) : _c("p", [_vm._v(_vm._s(props.row.nombre_corto))])];
      }
    }, {
      key: "operador",
      fn: function fn(props) {
        return [props.row.unidad_id == -99 ? _c("p", [_vm._v("CANCELADO")]) : _c("p", [_vm._v(_vm._s(props.row.operador))])];
      }
    }, {
      key: "tipo_deposito",
      fn: function fn(props) {
        return [props.row.tipo_deposito == 1 ? _c("p", [_vm._v("VALE")]) : props.row.tipo_deposito == 2 ? _c("p", [_vm._v("TRANSFERENCIA")]) : _c("p", [_vm._v("-")])];
      }
    }, {
      key: "ubicacion",
      fn: function fn(props) {
        return [props.row.ubicacion == 1 ? _c("p", [_vm._v("TEHUACÁN")]) : props.row.ubicacion ? _c("p", [_vm._v("COATZACOALCOS")]) : _c("p", [_vm._v("-")])];
      }
    }])
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "modal fade",
    "class": {
      mostrar: _vm.modal
    },
    staticStyle: {
      display: "none"
    },
    attrs: {
      tabindex: "-1",
      role: "dialog",
      "aria-labelledby": "myModalLabel",
      "aria-hidden": "true"
    }
  }, [_c("div", {
    staticClass: "modal-dialog modal-dark modal-lg",
    attrs: {
      role: "document"
    }
  }, [_c("div", {
    staticClass: "modal-content"
  }, [_c("div", {
    staticClass: "modal-header"
  }, [_c("h4", {
    staticClass: "modal-title",
    domProps: {
      textContent: _vm._s(_vm.titulo)
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "close",
    attrs: {
      type: "button",
      "aria-label": "Close"
    },
    on: {
      click: function click($event) {
        return _vm.CerrarModal();
      }
    }
  }, [_c("span", {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("×")])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-6 mb-3"
  }, [_c("label", [_vm._v("Proveedor")]), _vm._v(" "), _c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    attrs: {
      options: _vm.list_proveedores,
      "data-vv-name": "Proveedor",
      label: "razon_social"
    },
    model: {
      value: _vm.proveedor,
      callback: function callback($$v) {
        _vm.proveedor = $$v;
      },
      expression: "proveedor"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Proveedor")))])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-4 mb-3"
  }, [_c("label", [_vm._v("Ubicación")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.ubicacion,
      expression: "ubicacion"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.ubicacion = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("TEHUACÁN")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "2"
    }
  }, [_vm._v("COATZACOALCOS")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v("Tipo")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.tipo_deposito,
      expression: "tipo_deposito"
    }],
    staticClass: "form-control",
    on: {
      input: _vm.CambiarTipoDeposito,
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.tipo_deposito = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("VALE")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "2"
    }
  }, [_vm._v("TRANSFERENCIA")])])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v("Folio")]), _vm._v(" "), _vm.tipo_deposito == 1 ? _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.folio,
      expression: "folio"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      min: "1",
      step: "1",
      max: "3000",
      "data-vv-name": "Folio"
    },
    domProps: {
      value: _vm.folio
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.folio = $event.target.value;
      }
    }
  }) : _vm._e(), _vm._v(" "), _vm.tipo_deposito == 2 ? _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.folio,
      expression: "folio"
    }],
    staticClass: "form-control",
    attrs: {
      disabled: "",
      type: "text",
      "data-vv-name": "Folio"
    },
    domProps: {
      value: _vm.folio
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.folio = $event.target.value;
      }
    }
  }) : _vm._e(), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Folio")))])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v("Fecha")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.fecha,
      expression: "fecha"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date",
      "data-vv-name": "Fecha"
    },
    domProps: {
      value: _vm.fecha
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.fecha = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Fecha")))])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 mb-3"
  }, [_c("label", [_vm._v("Factura")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.factura,
      expression: "factura"
    }],
    staticClass: "form-control",
    attrs: {
      disabled: _vm.cancelado,
      type: "text",
      "data-vv-name": "Factura"
    },
    domProps: {
      value: _vm.factura
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.factura = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Factura")))])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 mb-3"
  }, [_c("div", {
    staticClass: "form-check form-inline"
  }, [_c("label", {
    staticClass: "form-check-label"
  }, [_vm._v("\r\n                                        ¿Cancelado?\r\n                                    ")]), _vm._v(" "), _c("label", {
    staticClass: "switch switch-default switch-pill switch-dark"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.cancelado,
      expression: "cancelado"
    }],
    staticClass: "switch-input",
    attrs: {
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.cancelado) ? _vm._i(_vm.cancelado, null) > -1 : _vm.cancelado
    },
    on: {
      input: _vm.CancelarVale,
      change: function change($event) {
        var $$a = _vm.cancelado,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.cancelado = $$a.concat([$$v]));
          } else {
            $$i > -1 && (_vm.cancelado = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.cancelado = $$c;
        }
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "switch-label"
  }), _vm._v(" "), _c("span", {
    staticClass: "switch-handle"
  })]), _vm._v(" "), _c("span", {
    staticClass: "ml-3"
  }, [_vm._v(_vm._s(_vm.cancelado ? "Sí" : "No"))])])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-6 mb-3"
  }, [_c("label", [_vm._v("Proyecto")]), _vm._v(" "), _c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    attrs: {
      disabled: _vm.cancelado,
      options: _vm.listaProyectos,
      label: "nombre_corto",
      name: "name",
      "data-vv-name": "Proyecto"
    },
    model: {
      value: _vm.proyecto,
      callback: function callback($$v) {
        _vm.proyecto = $$v;
      },
      expression: "proyecto"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Proyecto")))])], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 mb-3"
  }, [_c("label", [_vm._v("Operador")]), _vm._v(" "), _c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    attrs: {
      disabled: _vm.cancelado,
      options: _vm.listaEmpleados,
      label: "nombre",
      "data-vv-name": "operador"
    },
    model: {
      value: _vm.operador,
      callback: function callback($$v) {
        _vm.operador = $$v;
      },
      expression: "operador"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("operador")))])], 1)]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_vm.tipo_vale == 0 ? [_c("label", [_vm._v("Tipo")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.tipo_vale,
      expression: "tipo_vale"
    }],
    staticClass: "form-control",
    attrs: {
      disabled: _vm.cancelado
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.tipo_vale = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("Vehículo")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "2"
    }
  }, [_vm._v("Bidón")])])] : _vm._e(), _vm._v(" "), _vm.tipo_vale == 1 ? [_c("label", [_vm._v("Unidad")]), _vm._v(" "), _c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    attrs: {
      disabled: _vm.cancelado,
      options: _vm.list_unidades,
      label: "placas",
      "data-vv-name": "unidad"
    },
    model: {
      value: _vm.unidad,
      callback: function callback($$v) {
        _vm.unidad = $$v;
      },
      expression: "unidad"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("unidad")))])] : _vm._e(), _vm._v(" "), _vm.tipo_vale == 2 ? [_c("label", [_vm._v("Cantidad")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.cantidad_bidones,
      expression: "cantidad_bidones"
    }],
    staticClass: "form-control",
    attrs: {
      disabled: _vm.cancelado
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.cantidad_bidones = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("1 Bidón")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "2"
    }
  }, [_vm._v("2 Bidones")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "3"
    }
  }, [_vm._v("3 Bidones")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "4"
    }
  }, [_vm._v("4 Bidones")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "5"
    }
  }, [_vm._v("5 Bidones")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "6"
    }
  }, [_vm._v("6 Bidones")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "7"
    }
  }, [_vm._v("7 Bidones")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "8"
    }
  }, [_vm._v("8 Bidones")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "9"
    }
  }, [_vm._v("9 Bidones")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "10"
    }
  }, [_vm._v("10 Bidones")])])] : _vm._e()], 2), _vm._v(" "), _vm.tipo_vale == 1 ? [_c("div", {
    staticClass: "col-md-2 mb-3"
  }, [_c("label", [_vm._v("Placas")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.unidad.placas,
      expression: "unidad.placas"
    }],
    staticClass: "form-control",
    attrs: {
      disabled: "",
      type: "text",
      "data-vv-name": "Placas"
    },
    domProps: {
      value: _vm.unidad.placas
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.unidad, "placas", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Placas")))])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4 mb-3"
  }, [_c("label", [_vm._v("Modelo")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.unidad.modelo,
      expression: "unidad.modelo"
    }],
    staticClass: "form-control",
    attrs: {
      disabled: "",
      type: "text",
      "data-vv-name": "Modelo"
    },
    domProps: {
      value: _vm.unidad.modelo
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.unidad, "modelo", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Modelo")))])])] : _vm._e()], 2), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v("Producto")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.producto,
      expression: "producto"
    }],
    staticClass: "form-control",
    attrs: {
      disabled: _vm.cancelado
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.producto = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c("option", {
    attrs: {
      value: "1",
      selected: ""
    }
  }, [_vm._v("GASOLINA MAGNA")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "2"
    }
  }, [_vm._v("GASOLINA PREMIUM")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "3"
    }
  }, [_vm._v("DIESEL")])]), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Producto")))])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v("Horas motor")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required|decimal:4",
      expression: "'required|decimal:4'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.horas,
      expression: "horas"
    }],
    staticClass: "form-control",
    attrs: {
      disabled: _vm.cancelado,
      type: "number",
      step: "1",
      "data-vv-name": "Horas"
    },
    domProps: {
      value: _vm.horas
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.horas = $event.target.value;
      }
    }
  }), _vm._v(" "), !_vm.cancelado ? _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Horas")))]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v("Kilometraje")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required|decimal:4",
      expression: "'required|decimal:4'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.kilometraje,
      expression: "kilometraje"
    }],
    staticClass: "form-control",
    attrs: {
      disabled: _vm.cancelado,
      type: "number",
      "data-vv-name": "Kilometraje"
    },
    domProps: {
      value: _vm.kilometraje
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.kilometraje = $event.target.value;
      }
    }
  }), _vm._v(" "), !_vm.cancelado ? _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Kilometraje")))]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v("Cantidad")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required|decimal:4",
      expression: "'required|decimal:4'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.cantidad,
      expression: "cantidad"
    }],
    staticClass: "form-control",
    attrs: {
      disabled: _vm.cancelado,
      type: "number",
      min: "1",
      "data-vv-name": "Cantidad"
    },
    domProps: {
      value: _vm.cantidad
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.cantidad = $event.target.value;
      }
    }
  }), _vm._v(" "), !_vm.cancelado ? _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Cantidad")))]) : _vm._e()])]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v("Precio")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required|decimal:4",
      expression: "'required|decimal:4'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.precio,
      expression: "precio"
    }],
    staticClass: "form-control",
    attrs: {
      disabled: _vm.cancelado,
      type: "number",
      min: "1",
      "data-vv-name": "Precio"
    },
    domProps: {
      value: _vm.precio
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.precio = $event.target.value;
      }
    }
  }), _vm._v(" "), !_vm.cancelado ? _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Precio")))]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v("SubTotal")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.subtotal,
      expression: "subtotal"
    }],
    staticClass: "form-control",
    attrs: {
      disabled: _vm.cancelado,
      type: "number",
      min: "1",
      "data-vv-name": "SubTotal"
    },
    domProps: {
      value: _vm.subtotal
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.subtotal = $event.target.value;
      }
    }
  }), _vm._v(" "), !_vm.cancelado ? _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("SubTotal")))]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v("IVA")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.iva,
      expression: "iva"
    }],
    staticClass: "form-control",
    attrs: {
      disabled: _vm.cancelado,
      type: "number",
      min: "1",
      "data-vv-name": "IVA"
    },
    domProps: {
      value: _vm.iva
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.iva = $event.target.value;
      }
    }
  }), _vm._v(" "), !_vm.cancelado ? _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("IVA")))]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v("Total")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.total,
      expression: "total"
    }],
    staticClass: "form-control",
    attrs: {
      disabled: _vm.cancelado,
      type: "number",
      min: "1",
      "data-vv-name": "Total"
    },
    domProps: {
      value: _vm.total
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.total = $event.target.value;
      }
    }
  }), _vm._v(" "), !_vm.cancelado ? _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Total")))]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-4 mb-3"
  }, [_c("label"), _vm._v(" "), _c("input", {
    ref: "adjunto",
    attrs: {
      disabled: _vm.cancelado,
      type: "file",
      accept: "image/*"
    },
    on: {
      change: function change($event) {
        return _vm.cargarImg();
      }
    }
  })])]), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm._l(_vm.img, function (vi, index) {
    return _c("li", {
      key: index,
      staticClass: "list-group-item"
    }, [_c("div", {
      staticClass: "form-row"
    }, [_c("div", {
      staticClass: "form-group col-md-2"
    }, [_c("label", [_vm._v(_vm._s(index + 1))])]), _vm._v(" "), _c("div", {
      staticClass: "form-group col-md-6"
    }, [_c("label"), _vm._v(" "), _c("img", {
      attrs: {
        src: vi.name,
        width: "200px",
        height: "150px"
      }
    })]), _vm._v(" "), _c("div", {
      staticClass: "form-group col-md-1"
    }, [_c("a", {
      on: {
        click: function click($event) {
          return _vm.deleteu(vi, index);
        }
      }
    }, [_c("span", {
      staticClass: "fas fa-trash",
      attrs: {
        "arial-hidden": "true"
      }
    })])])])]);
  })], 2), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isGuardar_loading
    }
  }), _vm._v(" "), _c("div", [_c("button", {
    staticClass: "btn btn-outline-dark",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.CerrarModal();
      }
    }
  }, [_c("i", {
    staticClass: "mr-1 fas fa-times"
  }), _vm._v("Cerrar")]), _vm._v(" "), _vm.tipoAccion == 1 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.Guardar(1);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save mr-1"
  }), _vm._v("Guardar")]) : _vm._e(), _vm._v(" "), _vm.tipoAccion == 2 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.Guardar(0);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save mr-1"
  }), _vm._v("Actualizar")]) : _vm._e()])], 1)])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", [_c("a", {
    staticClass: "btn btn-secondary",
    attrs: {
      "data-toggle": "collapse",
      href: "#multiCollapseExample1",
      role: "button",
      "aria-expanded": "false",
      "aria-controls": "multiCollapseExample1"
    }
  }, [_vm._v("\r\n                        Generar reporte\r\n                    ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-2"
  }, [_c("label", [_c("b", [_vm._v("#")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-6"
  }, [_c("label", [_c("b", [_vm._v("Preview")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-1"
  }, [_c("label", [_c("b", [_vm._v(".")])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/Servicios/MantenimientoAnual.vue?vue&type=template&id=95fda89a":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/Servicios/MantenimientoAnual.vue?vue&type=template&id=95fda89a ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "main"
  }, [_c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.tipoCard == 2,
      expression: "tipoCard==2"
    }],
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("i", {
    staticClass: "fa fa-align-justify"
  }), _vm._v("\r\n            " + _vm._s(_vm.folio) + "\r\n            "), _c("button", {
    staticClass: "btn btn-dark float-sm-right mr-1",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        _vm.tipoCard = 1;
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-arrow-left"
  }, [_vm._v(" ")]), _vm._v("Regresar\r\n            ")])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {}, [_c("div", {}, [_c("v-client-table", {
    ref: "tbl_anual",
    attrs: {
      columns: _vm.columns_anual,
      data: _vm.list_anual,
      options: _vm.options_anual
    },
    scopedSlots: _vm._u([{
      key: "id",
      fn: function fn(props) {
        return [_c("div", {
          staticClass: "btn-group",
          attrs: {
            role: "group"
          }
        }, [_c("button", {
          staticClass: "btn btn-outline-dark dropdown-toggle",
          attrs: {
            id: "btn_id",
            type: "button",
            "data-toggle": "dropdown",
            "aria-haspopup": "true",
            "aria-expanded": "false"
          }
        }, [_c("i", {
          staticClass: "fas fa-grip-horizontal"
        }), _vm._v("  Acciones\r\n                                ")]), _vm._v(" "), _c("div", {
          staticClass: "dropdown-menu"
        }, [[_c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.AbrirModalAnual(false, props.row);
            }
          }
        }, [_c("i", {
          staticClass: "icon-pencil"
        }), _vm._v(" Actualizar\r\n                                        ")])]], 2)])];
      }
    }, {
      key: "mes",
      fn: function fn(props) {
        return [_c("p", [_vm._v(_vm._s(_vm.ObtenerMes(props.row.mes)))])];
      }
    }])
  })], 1)])])]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.tipoCard == 1,
      expression: "tipoCard==1"
    }],
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("i", {
    staticClass: "fa fa-align-justify"
  }), _vm._v("\r\n            Programación de Servicios Vehículares - " + _vm._s(_vm.empresa == 1 ? "CONSERFLOW" : "CSCT") + "\r\n            "), _c("div", {
    staticClass: "dropdown"
  }, [_c("button", {
    staticClass: "btn btn-secondary dropdown-toggle float-sm-right",
    attrs: {
      type: "button",
      id: "dropdownMenu2",
      "data-toggle": "dropdown",
      "aria-haspopup": "true",
      "aria-expanded": "false"
    }
  }, [_vm._v("\r\n                    Empresa\r\n                ")]), _vm._v(" "), _c("div", {
    staticClass: "dropdown-menu"
  }, [_c("button", {
    staticClass: "dropdown-item",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        _vm.empresa = 1;
        _vm.ObtenerAnios();
      }
    }
  }, [_vm._v("Conserflow")]), _vm._v(" "), _c("button", {
    staticClass: "dropdown-item",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        _vm.empresa = 2;
        _vm.ObtenerAnios();
      }
    }
  }, [_vm._v("CSCT")])])]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-dark float-sm-right mr-1",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.AbrirModalAnual(true);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  }, [_vm._v(" ")]), _vm._v("Nuevo\r\n            ")])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {}, [_c("div", {}, [_c("v-client-table", {
    attrs: {
      columns: _vm.columns_anios,
      data: _vm.list_anios,
      options: _vm.options_anios
    },
    scopedSlots: _vm._u([{
      key: "id",
      fn: function fn(props) {
        return [_c("div", {
          staticClass: "btn-group",
          attrs: {
            role: "group"
          }
        }, [_c("button", {
          staticClass: "btn btn-outline-dark dropdown-toggle",
          attrs: {
            id: "btn_id",
            type: "button",
            "data-toggle": "dropdown",
            "aria-haspopup": "true",
            "aria-expanded": "false"
          }
        }, [_c("i", {
          staticClass: "fas fa-grip-horizontal"
        }), _vm._v("  Acciones\r\n                                ")]), _vm._v(" "), _c("div", {
          staticClass: "dropdown-menu"
        }, [[_c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.ObtenerMantenimientos(props.row.anio);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-eye"
        }), _vm._v(" Ver Detalles\r\n                                        ")])]], 2)])];
      }
    }, {
      key: "descripcion",
      fn: function fn(props) {
        return [_c("p", [_vm._v("Programa de servicios vehiculares " + _vm._s(props.row.anio))])];
      }
    }, {
      key: "descargar",
      fn: function fn(props) {
        return [_c("button", {
          staticClass: "btn btn-sm btn-dark",
          on: {
            click: function click($event) {
              return _vm.Descargar(props.row.anio);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-file-pdf"
        })])];
      }
    }])
  })], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "modal fade",
    "class": {
      mostrar: _vm.ver_modal_anual
    },
    staticStyle: {
      display: "none"
    },
    attrs: {
      tabindex: "-1",
      role: "dialog",
      "aria-labelledby": "myModalLabel",
      "aria-hidden": "true"
    }
  }, [_c("div", {
    staticClass: "modal-dialog modal-dark modal-lg",
    attrs: {
      role: "document"
    }
  }, [_c("div", {
    staticClass: "modal-content"
  }, [_c("div", {
    staticClass: "modal-header"
  }, [_c("h4", {
    staticClass: "modal-title",
    domProps: {
      textContent: _vm._s(_vm.titulo_modal_anual)
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "close",
    attrs: {
      type: "button",
      "aria-label": "Close"
    },
    on: {
      click: function click($event) {
        return _vm.CerrarModalAnual();
      }
    }
  }, [_c("span", {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("×")])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_c("div", {
    staticClass: "form-horizontal"
  }, [_c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2 form-control-label"
  }, [_vm._v("Vehículo")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-9"
  }, [_c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: '"required"'
    }],
    attrs: {
      "data-vv-name": "vehiculo",
      options: _vm.list_vehiculos,
      label: "nombre"
    },
    model: {
      value: _vm.anual_modal.vehiculo,
      callback: function callback($$v) {
        _vm.$set(_vm.anual_modal, "vehiculo", $$v);
      },
      expression: "anual_modal.vehiculo"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("vehiculo")))])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2 form-control-label"
  }, [_vm._v("Placas")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-9"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: '"required"'
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.anual_modal.vehiculo.placas,
      expression: "anual_modal.vehiculo.placas"
    }],
    staticClass: "form-control",
    attrs: {
      disabled: "",
      type: "text",
      "data-vv-name": "placas"
    },
    domProps: {
      value: _vm.anual_modal.vehiculo.placas
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.anual_modal.vehiculo, "placas", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("placas")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2 form-control-label"
  }, [_vm._v("Servicio")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-9"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: '"required"'
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.anual_modal.servicio,
      expression: "anual_modal.servicio"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      "data-vv-name": "servicio"
    },
    domProps: {
      value: _vm.anual_modal.servicio
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.anual_modal, "servicio", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("servicio")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2 form-control-label"
  }, [_vm._v("Mes")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.anual_modal.mes,
      expression: "anual_modal.mes"
    }],
    staticClass: "form-control col",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.anual_modal, "mes", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, _vm._l(_vm.list_meses, function (mes, index) {
    return _c("option", {
      key: index,
      domProps: {
        value: mes
      }
    }, [_vm._v(_vm._s(_vm.ObtenerMes(mes)))]);
  }), 0), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("mes")))])]), _vm._v(" "), _c("label", {
    staticClass: "col-md-1 form-control-label"
  }, [_vm._v("Año")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.anual_modal.anio,
      expression: "anual_modal.anio"
    }],
    staticClass: "form-control col",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.anual_modal, "anio", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "2018"
    }
  }, [_vm._v("2018")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "2019"
    }
  }, [_vm._v("2019")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "2020"
    }
  }, [_vm._v("2020")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "2021"
    }
  }, [_vm._v("2021")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "2022"
    }
  }, [_vm._v("2022")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "2023"
    }
  }, [_vm._v("2023")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "2024"
    }
  }, [_vm._v("2024")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "2025"
    }
  }, [_vm._v("2025")])])]), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("anio")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2 form-control-label"
  }, [_vm._v("Observaciones")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-10"
  }, [_c("textarea", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.anual_modal.observaciones,
      expression: "anual_modal.observaciones"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      "data-vv-name": "observaciones"
    },
    domProps: {
      value: _vm.anual_modal.observaciones
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.anual_modal, "observaciones", $event.target.value);
      }
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("button", {
    staticClass: "btn btn-outline-dark",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.CerrarModalAnual();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-times"
  }), _vm._v(" Cerrar")]), _vm._v(" "), _vm.tipoAccion_modal_anual == 1 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.GuardarAnual(1);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Guardar")]) : _vm._e(), _vm._v(" "), _vm.tipoAccion_modal_anual == 2 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.GuardarAnual(0);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Actualizar")]) : _vm._e()])])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/Solicitud/Solicitud.vue?vue&type=template&id=27586956":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/Solicitud/Solicitud.vue?vue&type=template&id=27586956 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "main"
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("i", {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" Solicitud de vehiculos - " + _vm._s(_vm.empresa == 1 ? "CONSERFLOW" : "CSCT") + "\r\n\r\n            "), _c("div", {
    staticClass: "dropdown"
  }, [_c("button", {
    staticClass: "btn btn-secondary dropdown-toggle float-sm-right",
    attrs: {
      type: "button",
      id: "dropdownMenu2",
      "data-toggle": "dropdown",
      "aria-haspopup": "true",
      "aria-expanded": "false"
    }
  }, [_vm._v("\r\n                    Empresa\r\n                ")]), _vm._v(" "), _c("div", {
    staticClass: "dropdown-menu"
  }, [_c("button", {
    staticClass: "dropdown-item",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        _vm.empresa = 1;
        _vm.ObtenerSolicitudes();
      }
    }
  }, [_vm._v("Conserflow")]), _vm._v(" "), _c("button", {
    staticClass: "dropdown-item",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        _vm.empresa = 2;
        _vm.ObtenerSolicitudes();
      }
    }
  }, [_vm._v("CSCT")])])]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-dark float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.AbrirModalSolicitud(true);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  }, [_vm._v(" ")]), _vm._v("Nuevo\r\n            ")])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {}, [_c("div", {}, [_c("v-client-table", {
    ref: "tbl_solicitud",
    attrs: {
      columns: _vm.columns_solicitud,
      data: _vm.list_solicitud,
      options: _vm.options_solicitud
    },
    scopedSlots: _vm._u([{
      key: "id",
      fn: function fn(props) {
        return [_c("div", {
          staticClass: "btn-group",
          attrs: {
            role: "group"
          }
        }, [_c("button", {
          staticClass: "btn btn-outline-dark dropdown-toggle",
          attrs: {
            id: "btn_id",
            type: "button",
            "data-toggle": "dropdown",
            "aria-haspopup": "true",
            "aria-expanded": "false"
          }
        }, [_c("i", {
          staticClass: "fas fa-grip-horizontal"
        }), _vm._v("  Acciones\r\n                                ")]), _vm._v(" "), _c("div", {
          staticClass: "dropdown-menu"
        }, [[_c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.AbrirModalSolicitud(false, props.row);
            }
          }
        }, [_c("i", {
          staticClass: "icon-pencil"
        }), _vm._v(" Actualizar\r\n                                        ")]), _vm._v(" "), _c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.Descargar(props.row.id);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-file-pdf"
        }), _vm._v(" Descargar\r\n                                        ")])]], 2)])];
      }
    }])
  })], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "modal fade",
    "class": {
      mostrar: _vm.ver_modal_solicitud
    },
    staticStyle: {
      display: "none"
    },
    attrs: {
      tabindex: "-1",
      role: "dialog",
      "aria-labelledby": "myModalLabel",
      "aria-hidden": "true"
    }
  }, [_c("div", {
    staticClass: "modal-dialog modal-dark modal-lg",
    attrs: {
      role: "document"
    }
  }, [_c("div", {
    staticClass: "modal-content"
  }, [_c("div", {
    staticClass: "modal-header"
  }, [_c("h4", {
    staticClass: "modal-title",
    domProps: {
      textContent: _vm._s(_vm.titulo_modal_solicitud)
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "close",
    attrs: {
      type: "button",
      "aria-label": "Close"
    },
    on: {
      click: function click($event) {
        return _vm.CerrarModalSolicitud();
      }
    }
  }, [_c("span", {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("×")])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isGuardarLoading
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "form-horizontal"
  }, [_c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2 form-control-label"
  }, [_vm._v("Fecha")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.solicitud_modal.fecha_solicitud,
      expression: "solicitud_modal.fecha_solicitud"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date",
      "data-vv-name": "Fecha Solicitud"
    },
    domProps: {
      value: _vm.solicitud_modal.fecha_solicitud
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.solicitud_modal, "fecha_solicitud", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Fecha Solicitud")))])]), _vm._v(" "), _c("label", {
    staticClass: "col-md-1 form-control-label"
  }, [_vm._v("Folio")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.solicitud_modal.folio,
      expression: "solicitud_modal.folio"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      "data-vv-name": "Folio"
    },
    domProps: {
      value: _vm.solicitud_modal.folio
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.solicitud_modal, "folio", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Folio")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2 form-control-label"
  }, [_vm._v("Tipo Unidad")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4"
  }, [_c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    attrs: {
      label: "clase_tipo",
      "data-vv-name": "Tipo unidad",
      options: _vm.list_tipos
    },
    on: {
      input: _vm.ObtenerUnidades
    },
    model: {
      value: _vm.solicitud_modal.tipo_unidad,
      callback: function callback($$v) {
        _vm.$set(_vm.solicitud_modal, "tipo_unidad", $$v);
      },
      expression: "solicitud_modal.tipo_unidad"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Tipo unidad")))])], 1), _vm._v(" "), _c("label", {
    staticClass: "col-md-1 form-control-label"
  }, [_vm._v("Unidad")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-5"
  }, [_c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    attrs: {
      label: "nombre",
      "data-vv-name": "Unidad",
      options: _vm.list_unidades
    },
    model: {
      value: _vm.solicitud_modal.unidad,
      callback: function callback($$v) {
        _vm.$set(_vm.solicitud_modal, "unidad", $$v);
      },
      expression: "solicitud_modal.unidad"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Tipo unidad")))])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Lapso de tiempo")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.solicitud_modal.tiempo,
      expression: "solicitud_modal.tiempo"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      "data-vv-name": "Lapso"
    },
    domProps: {
      value: _vm.solicitud_modal.tiempo
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.solicitud_modal, "tiempo", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Lapso")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-3"
  }, [_c("label", [_vm._v("Fecha de inicio")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.solicitud_modal.fecha_inicio,
      expression: "solicitud_modal.fecha_inicio"
    }],
    staticClass: "form-control",
    attrs: {
      "data-vv-name": "Fecha inicio",
      type: "date"
    },
    domProps: {
      value: _vm.solicitud_modal.fecha_inicio
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.solicitud_modal, "fecha_inicio", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Fecha inicio")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-3"
  }, [_c("label", [_vm._v("Fecha de fin")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.solicitud_modal.fecha_fin,
      expression: "solicitud_modal.fecha_fin"
    }],
    staticClass: "form-control",
    attrs: {
      "data-vv-name": "Fecha fin",
      type: "date"
    },
    domProps: {
      value: _vm.solicitud_modal.fecha_fin
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.solicitud_modal, "fecha_fin", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Fecha fin")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", {}, [_vm._v("Ciudad")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.solicitud_modal.ciudad,
      expression: "solicitud_modal.ciudad"
    }],
    staticClass: "form-control",
    attrs: {
      "data-vv-name": "Ciudad",
      type: "text"
    },
    domProps: {
      value: _vm.solicitud_modal.ciudad
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.solicitud_modal, "ciudad", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Ciudad")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Estado")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.solicitud_modal.estado,
      expression: "solicitud_modal.estado"
    }],
    staticClass: "form-control",
    attrs: {
      "data-vv-name": "Estado",
      type: "text"
    },
    domProps: {
      value: _vm.solicitud_modal.estado
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.solicitud_modal, "estado", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Estado")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Población")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.solicitud_modal.poblacion,
      expression: "solicitud_modal.poblacion"
    }],
    staticClass: "form-control",
    attrs: {
      "data-vv-name": "Población",
      type: "text"
    },
    domProps: {
      value: _vm.solicitud_modal.poblacion
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.solicitud_modal, "poblacion", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Población")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Proyecto")]), _vm._v(" "), _c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    attrs: {
      label: "nombre_corto",
      "data-vv-name": "Proyecto",
      options: _vm.list_proyectos
    },
    model: {
      value: _vm.solicitud_modal.proyecto,
      callback: function callback($$v) {
        _vm.$set(_vm.solicitud_modal, "proyecto", $$v);
      },
      expression: "solicitud_modal.proyecto"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Proyecto")))])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("div", {
    staticClass: "col"
  }, [_c("label", {}, [_vm._v("Necesidad de la unidad")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.solicitud_modal.necesidad,
      expression: "solicitud_modal.necesidad"
    }],
    staticClass: "form-control",
    attrs: {
      "data-vv-name": "Necesidad",
      cols: "10",
      rows: "6"
    },
    domProps: {
      value: _vm.solicitud_modal.necesidad
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.solicitud_modal, "necesidad", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Necesidad")))])])]), _vm._v(" "), _c("div", {
    staticClass: "container-fluid"
  }, [_c("p", {
    staticClass: "h5"
  }, [_vm._v("Responsables")]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("label", {
    staticClass: "col-md-2"
  }, [_vm._v("Empleado")]), _vm._v(" "), _c("v-select", {
    staticClass: "col-md-6",
    attrs: {
      label: "nombre",
      options: _vm.list_empleados
    },
    model: {
      value: _vm.responsable,
      callback: function callback($$v) {
        _vm.responsable = $$v;
      },
      expression: "responsable"
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "ml-2 btn btn-sm btn-dark mr-1",
    on: {
      click: _vm.AgregarResponsable
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  })])], 1), _vm._v(" "), _c("br"), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._l(_vm.lista_responsables, function (responsable, index) {
    return _c("li", {
      key: index,
      staticClass: "list-group-item"
    }, [_c("div", {
      staticClass: "form-row"
    }, [_c("div", {
      staticClass: "form-group col-md-1"
    }, [_c("label", [_vm._v(_vm._s(index + 1))])]), _vm._v(" "), _c("div", {
      staticClass: "form-group col-md-5"
    }, [_c("label", [_vm._v(_vm._s(responsable.nombre))])]), _vm._v(" "), responsable.temp ? _c("div", {
      staticClass: "form-group col-md-2"
    }, [_c("i", {
      staticClass: "fas fa-trash",
      on: {
        click: function click($event) {
          return _vm.BorrarTemp(index);
        }
      }
    })]) : _vm._e()])]);
  })], 2), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("div", {
    staticClass: "col"
  }, [_c("label", {
    staticClass: "col form-control-label"
  }, [_vm._v("Empleado Solicita")]), _vm._v(" "), _c("div", {
    staticClass: "col"
  }, [_c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    attrs: {
      label: "nombre",
      "data-vv-name": "Solicita",
      options: _vm.list_empleados
    },
    model: {
      value: _vm.solicitud_modal.solicita,
      callback: function callback($$v) {
        _vm.$set(_vm.solicitud_modal, "solicita", $$v);
      },
      expression: "solicitud_modal.solicita"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Solicita")))])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col"
  }, [_c("label", {
    staticClass: "col form-control-label"
  }, [_vm._v("Empleado Autoriza")]), _vm._v(" "), _c("div", {
    staticClass: "col"
  }, [_c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    attrs: {
      label: "nombre",
      "data-vv-name": "Autoriza",
      options: _vm.list_empleados
    },
    model: {
      value: _vm.solicitud_modal.autoriza,
      callback: function callback($$v) {
        _vm.$set(_vm.solicitud_modal, "autoriza", $$v);
      },
      expression: "solicitud_modal.autoriza"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Autoriza")))])], 1)])])])], 1), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("button", {
    staticClass: "btn btn-outline-dark",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.CerrarModalSolicitud();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-times"
  }), _vm._v(" Cerrar")]), _vm._v(" "), _vm.tipoAccion_modal_solicitud == 1 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.GuardarSolicitud(1);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Guardar")]) : _vm._e(), _vm._v(" "), _vm.tipoAccion_modal_solicitud == 2 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.GuardarSolicitud(0);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Actualizar")]) : _vm._e()])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-2"
  }, [_c("label", [_c("b", [_vm._v("#")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-3"
  }, [_c("label", [_c("b", [_vm._v("Responsable")])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/TipoServicio.vue?vue&type=template&id=89b3fc44":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/TipoServicio.vue?vue&type=template&id=89b3fc44 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("main", {
    staticClass: "main"
  }, [_c("div", {
    staticClass: "container-fluid"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("i", {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" Tipo de Servicio\n                "), _c("button", {
    staticClass: "btn btn-dark float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.abrirModal("tipo-servicio", "registrar");
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  }), _vm._v(" Nuevo\n                ")])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("v-client-table", {
    ref: "myTable",
    attrs: {
      columns: _vm.columns,
      data: _vm.tableData,
      options: _vm.options
    },
    scopedSlots: _vm._u([{
      key: "id",
      fn: function fn(props) {
        return [_c("div", {
          staticClass: "btn-group",
          attrs: {
            role: "group",
            "aria-label": "Button group with nested dropdown"
          }
        }, [_c("div", {
          staticClass: "btn-group dropup",
          attrs: {
            role: "group"
          }
        }, [_c("button", {
          staticClass: "btn btn-outline-dark dropdown-toggle",
          attrs: {
            id: "btnGroupDrop1",
            type: "button",
            "data-toggle": "dropdown",
            "aria-haspopup": "true",
            "aria-expanded": "false"
          }
        }, [_c("i", {
          staticClass: "fas fa-grip-horizontal"
        }), _vm._v("  Acciones\n                            ")]), _vm._v(" "), _c("div", {
          staticClass: "dropdown-menu",
          attrs: {
            "aria-labelledby": "btnGroupDrop1"
          }
        }, [_c("a", {
          staticClass: "dropdown-item",
          attrs: {
            href: "#"
          },
          on: {
            click: function click($event) {
              $event.preventDefault();
              return _vm.abrirModal("tipo-servicio", "actualizar", props.row);
            }
          }
        }, [_c("i", {
          staticClass: "icon-pencil"
        }), _vm._v("  Actualizar\n                        ")])])])])];
      }
    }])
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "modal fade",
    "class": {
      mostrar: _vm.modal
    },
    staticStyle: {
      display: "none"
    },
    attrs: {
      tabindex: "-1",
      role: "dialog",
      "aria-labelledby": "myModalLabel",
      "aria-hidden": "true"
    }
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isLoading
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "modal-dialog modal-dark modal-lg",
    attrs: {
      role: "document"
    }
  }, [_c("div", {
    staticClass: "modal-content"
  }, [_c("div", [_c("div", {
    staticClass: "modal-header"
  }, [_c("h4", {
    staticClass: "modal-title",
    domProps: {
      textContent: _vm._s(_vm.tituloModal)
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "close",
    attrs: {
      type: "button",
      "aria-label": "Close"
    },
    on: {
      click: function click($event) {
        return _vm.cerrarModal();
      }
    }
  }, [_c("span", {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("×")])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_c("input", {
    attrs: {
      type: "hidden",
      name: "id"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label",
    attrs: {
      "for": "nombre"
    }
  }, [_vm._v("Nombre")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-9"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.tipoServicio.nombre,
      expression: "tipoServicio.nombre"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "nombre",
      placeholder: "Nombre del tipo de servicio",
      autocomplete: "off",
      id: "nombre"
    },
    domProps: {
      value: _vm.tipoServicio.nombre
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.tipoServicio, "nombre", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("nombre")))])])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("button", {
    staticClass: "btn btn-outline-dark",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.cerrarModal();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-times"
  }), _vm._v(" Cerrar")]), _vm._v(" "), _vm.tipoAccion == 1 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.guardarTipoServicio(1);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Guardar")]) : _vm._e(), _vm._v(" "), _vm.tipoAccion == 2 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.guardarTipoServicio(0);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Actualizar")]) : _vm._e()])])])])], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/Unidades/DetalleUnidades.vue?vue&type=template&id=5c0c7b26":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/Unidades/DetalleUnidades.vue?vue&type=template&id=5c0c7b26 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("ul", {
    ref: "tabs",
    staticClass: "nav nav-tabs",
    attrs: {
      role: "tablist"
    }
  }, [_c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link active",
    attrs: {
      "data-toggle": "tab",
      href: "#home",
      role: "tab"
    },
    on: {
      click: function click($event) {
        return _vm.setId(0);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-book"
  }), _vm._v(" Generales")])]), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link",
    attrs: {
      "data-toggle": "tab",
      href: "#menu1",
      role: "tab"
    },
    on: {
      click: function click($event) {
        return _vm.setId(1);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-tools"
  }), _vm._v(" Servicios")])]), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link",
    attrs: {
      "data-toggle": "tab",
      href: "#menu2",
      role: "tab"
    },
    on: {
      click: function click($event) {
        return _vm.setId(2);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-certificate"
  }), _vm._v(" Polizas")])]), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link",
    attrs: {
      "data-toggle": "tab",
      href: "#menu3",
      role: "tab"
    },
    on: {
      click: function click($event) {
        return _vm.setId(3);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-tasks"
  }), _vm._v(" Verificación")])]), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link",
    attrs: {
      "data-toggle": "tab",
      href: "#menu4",
      role: "tab"
    },
    on: {
      click: function click($event) {
        return _vm.setId(4);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-sticky-note"
  }), _vm._v(" Tenencia")])]), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link",
    attrs: {
      "data-toggle": "tab",
      role: "tab"
    },
    on: {
      click: function click($event) {
        return _vm.maestro();
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-arrow-left"
  }), _vm._v(" Atras")])])]), _vm._v(" "), _c("div", {
    staticClass: "tab-content"
  }, [_c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.tab == 0,
      expression: "tab == 0"
    }],
    staticClass: "tab-pane fade in active show",
    attrs: {
      id: "home"
    }
  }, [_c("div", {
    staticClass: "card",
    staticStyle: {
      border: "0"
    }
  }, [_c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Unidad")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.Unidades.unidad,
      expression: "Unidades.unidad"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "unidad",
      placeholder: "Unidad",
      "data-vv-name": "Unidad",
      autocomplete: "off",
      id: "unidad_actualizar"
    },
    domProps: {
      value: _vm.Unidades.unidad
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.Unidades, "unidad", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Unidad")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Marca:")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.Unidades.marca,
      expression: "Unidades.marca"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "marca",
      placeholder: "Marca",
      "data-vv-name": "Marca",
      id: "marca_actualizar"
    },
    domProps: {
      value: _vm.Unidades.marca
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.Unidades, "marca", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Marca")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Modelo:")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.Unidades.modelo,
      expression: "Unidades.modelo"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "modelo",
      "data-vv-name": "Modelo",
      placeholder: "Modelo",
      id: "modelo_actualizar"
    },
    domProps: {
      value: _vm.Unidades.modelo
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.Unidades, "modelo", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Modelo")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-3"
  }, [_c("label", [_vm._v("Color")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.Unidades.color,
      expression: "Unidades.color"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "color",
      "data-vv-name": "Color",
      placeholder: "Color",
      autocomplete: "off",
      id: "color"
    },
    domProps: {
      value: _vm.Unidades.color
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.Unidades, "color", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Color")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-3"
  }, [_c("label", [_vm._v("No.Motor")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.Unidades.no_motor,
      expression: "Unidades.no_motor"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "unidad",
      "data-vv-name": "No Motor",
      placeholder: "No Motor",
      autocomplete: "off",
      id: "no_motor"
    },
    domProps: {
      value: _vm.Unidades.no_motor
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.Unidades, "no_motor", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("No Motor")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-3"
  }, [_c("label", [_vm._v("Capacidad carga")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.Unidades.capacidad,
      expression: "Unidades.capacidad"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "capacidad",
      "data-vv-name": "Capacidad",
      placeholder: "Capacidad",
      autocomplete: "off",
      id: "capacidad"
    },
    domProps: {
      value: _vm.Unidades.capacidad
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.Unidades, "capacidad", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Capacidad")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-3"
  }, [_c("label", [_vm._v("Cilindros")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.Unidades.cilindros,
      expression: "Unidades.cilindros"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "cilindros",
      "data-vv-name": "Cilindros",
      placeholder: "Cilindros",
      autocomplete: "off",
      id: "cilindros"
    },
    domProps: {
      value: _vm.Unidades.cilindros
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.Unidades, "cilindros", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Cilindros")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Año")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.Unidades.anio,
      expression: "Unidades.anio"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      name: "anio",
      "data-vv-name": "Año",
      placeholder: "Año",
      id: "anio_actualizar"
    },
    domProps: {
      value: _vm.Unidades.anio
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.Unidades, "anio", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Año")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Placas de criculación")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.Unidades.placas,
      expression: "Unidades.placas"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "placas",
      "data-vv-name": "Placas",
      placeholder: "Placas",
      id: "placas_actualizar"
    },
    domProps: {
      value: _vm.Unidades.placas
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.Unidades, "placas", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Placas")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Estado")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.Unidades.estado,
      expression: "Unidades.estado"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "estado",
      "data-vv-name": "Estado",
      placeholder: "Estado",
      id: "estado_actualizar"
    },
    domProps: {
      value: _vm.Unidades.estado
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.Unidades, "estado", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Estado")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Número de serie")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.Unidades.numero_serie,
      expression: "Unidades.numero_serie"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      "data-vv-name": "Número de serie"
    },
    domProps: {
      value: _vm.Unidades.numero_serie
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.Unidades, "numero_serie", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Número de serie")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Clase y tipo")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.Unidades.clase_tipo,
      expression: "Unidades.clase_tipo"
    }],
    staticClass: "form-control",
    attrs: {
      "data-vv-name": "Clase-Tipo"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.Unidades, "clase_tipo", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, _vm._l(_vm.clase_tipo, function (item) {
    return _c("option", {
      key: item.id,
      domProps: {
        value: item.id
      }
    }, [_vm._v(_vm._s(item.clase_tipo))]);
  }), 0), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Clase-Tipo")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Combustible")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.Unidades.combustible,
      expression: "Unidades.combustible"
    }],
    staticClass: "form-control",
    attrs: {
      "data-vv-name": "Combustible"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.Unidades, "combustible", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, _vm._l(_vm.combustible, function (item) {
    return _c("option", {
      key: item.id,
      domProps: {
        value: item.id
      }
    }, [_vm._v(_vm._s(item.nombre))]);
  }), 0), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Combustible")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Verificación 1er. semestre")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.Unidades.primer_semestre,
      expression: "Unidades.primer_semestre"
    }],
    staticClass: "form-control",
    attrs: {
      name: "primer_semestre_actualizar",
      id: "primer_semestre",
      disabled: _vm.Unidades.excento
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.Unidades, "primer_semestre", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "",
      selected: ""
    }
  }, [_vm._v("--Seleccione--")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "ENERO-FEBRERO"
    }
  }, [_vm._v("ENERO-FEBRERO")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "FEBRERO-MARZO"
    }
  }, [_vm._v("FEBRERO-MARZO")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "MARZO-ABRIL"
    }
  }, [_vm._v("MARZO-ABRIL")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "ABRIL-MAYO"
    }
  }, [_vm._v("ABRIL-MAYO")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "MAYO-JUNIO"
    }
  }, [_vm._v("MAYO-JUNIO")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Verificación 2do. semestre")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.Unidades.segundo_semestre,
      expression: "Unidades.segundo_semestre"
    }],
    staticClass: "form-control",
    attrs: {
      name: "segundo_semestre_actualizar",
      id: "segundo_semestre",
      disabled: _vm.Unidades.excento
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.Unidades, "segundo_semestre", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "",
      selected: ""
    }
  }, [_vm._v("--Seleccione--")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "JULIO-AGOSTO"
    }
  }, [_vm._v("JULIO-AGOSTO")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "AGOSTO-SEPTIEMBRE"
    }
  }, [_vm._v("AGOSTO-SEPTIEMBRE")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "SEPTIEMBRE-OCTUBRE"
    }
  }, [_vm._v("SEPTIEMBRE-OCTUBRE")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "OCTUBRE-NOVIEMBRE"
    }
  }, [_vm._v("OCTUBRE-NOVIEMBRE")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "NOVIEMBRE-DICIEMBRE"
    }
  }, [_vm._v("NOVIEMBRE-DICIEMBRE")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-2"
  }, [_c("label", [_vm._v("Excento")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.Unidades.excento,
      expression: "Unidades.excento"
    }],
    staticClass: "form-control",
    attrs: {
      type: "checkbox",
      value: "excento"
    },
    domProps: {
      checked: Array.isArray(_vm.Unidades.excento) ? _vm._i(_vm.Unidades.excento, "excento") > -1 : _vm.Unidades.excento
    },
    on: {
      change: [function ($event) {
        var $$a = _vm.Unidades.excento,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "excento",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.Unidades, "excento", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.Unidades, "excento", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.Unidades, "excento", $$c);
        }
      }, function ($event) {
        return _vm.excento();
      }]
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Número tarjeta circulación")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.Unidades.numero_tarjeta_circulacion,
      expression: "Unidades.numero_tarjeta_circulacion"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "numero_tarjeta_circulacion_actualizar",
      "data-vv-name": "Número tarjeta circulación",
      placeholder: "Número tarjeta circulación",
      id: "numero_tarjeta_circulacion_actualizar"
    },
    domProps: {
      value: _vm.Unidades.numero_tarjeta_circulacion
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.Unidades, "numero_tarjeta_circulacion", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Número tarjeta circulación")))])]), _vm._v(" "), _vm.Unidades.tarjeta != "" ? [_c("div", {
    staticClass: "form-group col-md-2"
  }, [_c("label", [_vm._v(" ")]), _vm._v(" "), _c("button", {
    staticClass: "form-control",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.descargar(_vm.Unidades.tarjeta);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-file-download"
  }), _vm._v(" Descargar\n            ")])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-2"
  }, [_c("label", [_vm._v(" ")]), _vm._v(" "), _c("button", {
    staticClass: "form-control",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.actualizaT();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-file"
  }), _vm._v(" Actualizar Archivo\n            ")])])] : _vm._e(), _vm._v(" "), _vm.Unidades.tarjeta == "" ? [_c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Tarjeta")]), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      type: "file",
      "data-vv-name": "tarjeta",
      name: "tarjeta_actualizar",
      id: "tarjeta_actualizar"
    },
    on: {
      change: function change($event) {
        return _vm.onChangeT($event);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("tarjeta")))])])] : _vm._e()], 2), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-8"
  }, [_c("label", [_vm._v("Comentarios")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.Unidades.comentarios,
      expression: "Unidades.comentarios"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "comentarios_actualizar",
      "data-vv-name": "Comentarios",
      placeholder: "Comentarios",
      id: "comentarios_actualizar"
    },
    domProps: {
      value: _vm.Unidades.comentarios
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.Unidades, "comentarios", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Comentarios")))])]), _vm._v(" "), _vm.Unidades.factura != "" ? [_c("div", {
    staticClass: "form-group col-md-2"
  }, [_c("label", [_vm._v(" ")]), _vm._v(" "), _c("button", {
    staticClass: "form-control",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.descargar(_vm.Unidades.factura);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-file-download"
  }), _vm._v(" Descargar\n            ")])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-2"
  }, [_c("label", [_vm._v(" ")]), _vm._v(" "), _c("button", {
    staticClass: "form-control",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.actualiza();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-file"
  }), _vm._v(" Actualizar Archivo\n            ")])])] : _vm._e(), _vm._v(" "), _vm.Unidades.factura == "" ? [_c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Factura")]), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      type: "file",
      name: "factura_actualizar",
      id: "factura_actualizar",
      "data-vv-name": "Factura"
    },
    on: {
      change: function change($event) {
        return _vm.onChange($event);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Factura")))])])] : _vm._e()], 2), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_vm._v("\n        Propio\n        "), _c("label", {
    staticClass: "switch switch-default switch-pill switch-dark"
  }, [_c("input", {
    staticClass: "switch-input",
    attrs: {
      type: "radio",
      id: "propio",
      name: "customRadioInline1"
    },
    on: {
      change: function change($event) {
        return _vm.formpropio($event);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "switch-label"
  }), _vm._v(" "), _c("span", {
    staticClass: "switch-handle"
  })]), _vm._v("\n         \n        Rentado\n        "), _c("label", {
    staticClass: "switch switch-default switch-pill switch-dark"
  }, [_c("input", {
    staticClass: "switch-input",
    attrs: {
      type: "radio",
      id: "rentado",
      name: "customRadioInline1"
    },
    on: {
      change: function change($event) {
        return _vm.formrentado($event);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "switch-label"
  }), _vm._v(" "), _c("span", {
    staticClass: "switch-handle"
  })])]), _vm._v(" "), _vm.tipo == 1 ? [_c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Propietario")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.Unidades.propietario,
      expression: "Unidades.propietario"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "propietario",
      "data-vv-name": "Propietario",
      placeholder: "Propietario",
      id: "propietario_actualizar"
    },
    domProps: {
      value: _vm.Unidades.propietario
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.Unidades, "propietario", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Propietario")))])])])] : _vm._e(), _vm._v(" "), _vm.tipo == 2 ? [_c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Proveedor")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.Unidades.proveedor,
      expression: "Unidades.proveedor"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "proveedor",
      "data-vv-name": "Proveedor",
      placeholder: "Proveedor",
      id: "proveedor_actualizar"
    },
    domProps: {
      value: _vm.Unidades.proveedor
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.Unidades, "proveedor", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Proveedor")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Tiempo")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.Unidades.tiempo,
      expression: "Unidades.tiempo"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "tiempo",
      "data-vv-name": "Tiempo de renta",
      placeholder: "Tiempo de renta",
      id: "tiempo_actualizar"
    },
    domProps: {
      value: _vm.Unidades.tiempo
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.Unidades, "tiempo", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Tiempo de renta")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Costo Renta")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "decimal:2",
      expression: "'decimal:2'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.Unidades.costo_renta,
      expression: "Unidades.costo_renta"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "costo_renta",
      "data-vv-name": "Costo Renta",
      placeholder: "Costo Renta",
      id: "costo_renta_actualizar"
    },
    domProps: {
      value: _vm.Unidades.costo_renta
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.Unidades, "costo_renta", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Costo Renta")))])])])] : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.registrar(0);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Actualizar")])])], 2)]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.tab == 1,
      expression: "tab == 1"
    }],
    staticClass: "tab-pane fade",
    attrs: {
      id: "menu1"
    }
  }, [_c("servicios", {
    ref: "servicios"
  })], 1), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.tab == 2,
      expression: "tab == 2"
    }],
    staticClass: "tab-pane fade",
    attrs: {
      id: "menu2"
    }
  }, [_c("h4", [_vm._v("Registro de Polizas")]), _vm._v(" "), _c("poliza", {
    ref: "poliza"
  })], 1), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.tab == 3,
      expression: "tab == 3"
    }],
    staticClass: "tab-pane fade",
    attrs: {
      id: "menu3"
    }
  }, [_c("h4", [_vm._v("Registro de verificacion")]), _vm._v(" "), _c("verificacion", {
    ref: "verificacion"
  })], 1), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.tab == 4,
      expression: "tab == 4"
    }],
    staticClass: "tab-pane fade",
    attrs: {
      id: "menu4"
    }
  }, [_c("h4", [_vm._v("Tenencia")]), _vm._v(" "), _c("tenencia", {
    ref: "tenencia"
  })], 1)])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/Unidades/Poliza.vue?vue&type=template&id=4b4f2f6e":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/Unidades/Poliza.vue?vue&type=template&id=4b4f2f6e ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isLoading
    }
  }), _vm._v(" "), [_c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Compañía de seguro")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.poliza.proveedor,
      expression: "poliza.proveedor"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "proveedor",
      "data-vv-name": "Compañía de seguro"
    },
    domProps: {
      value: _vm.poliza.proveedor
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.poliza, "proveedor", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Compañía de seguro")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("No.poliza de seguro")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.poliza.numero_poliza,
      expression: "poliza.numero_poliza"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "numero_poliza",
      "data-vv-name": "No.poliza de seguro"
    },
    domProps: {
      value: _vm.poliza.numero_poliza
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.poliza, "numero_poliza", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("No.poliza de seguro")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("No. de inciso")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.poliza.numero_inciso,
      expression: "poliza.numero_inciso"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "numero_inciso",
      "data-vv-name": "No. de inciso"
    },
    domProps: {
      value: _vm.poliza.numero_inciso
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.poliza, "numero_inciso", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("No. de inciso")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Fecha de renovación (Inicio)")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.poliza.fecha_inicio,
      expression: "poliza.fecha_inicio"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date",
      name: "fecha_inicio",
      "data-vv-name": "Fecha de renovación (Inicio)"
    },
    domProps: {
      value: _vm.poliza.fecha_inicio
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.poliza, "fecha_inicio", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Fecha de renovación (Inicio)")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Fecha de renovación (Termino)")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.poliza.fecha_termino,
      expression: "poliza.fecha_termino"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date",
      name: "fecha_termino",
      "data-vv-name": "Fecha de renovación (Termino)"
    },
    domProps: {
      value: _vm.poliza.fecha_termino
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.poliza, "fecha_termino", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Fecha de renovación (Termino)")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Contacto")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.poliza.contacto,
      expression: "poliza.contacto"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      "data-vv-name": "Contacto"
    },
    domProps: {
      value: _vm.poliza.contacto
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.poliza, "contacto", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Contacto")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_vm.poliza.comprobante != "" ? [_c("div", {
    staticClass: "form-group col-md-2"
  }, [_c("label", [_vm._v(" ")]), _vm._v(" "), _c("button", {
    staticClass: "form-control",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.descargar(_vm.poliza.comprobante);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-file-download"
  }), _vm._v(" Descargar\r\n                            ")])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-2"
  }, [_c("label", [_vm._v(" ")]), _vm._v(" "), _c("button", {
    staticClass: "form-control",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.actualiza();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-file"
  }), _vm._v(" Actualizar Archivo\r\n                            ")])])] : _vm._e(), _vm._v(" "), _vm.poliza.comprobante == "" ? [_c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Comprobante")]), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      type: "file",
      name: "comprobante"
    },
    on: {
      change: function change($event) {
        return _vm.onChange($event);
      }
    }
  })])] : _vm._e()], 2), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_vm.Tipo_Edo == 2 ? _c("button", {
    staticClass: "btn btn-outline-dark",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.cerrarModal();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-window-close"
  }), _vm._v(" Cerrar")]) : _vm._e(), _vm._v(" "), _vm.Tipo_Edo == 1 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.guardarMto(1);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Guardar")]) : _vm._e(), _vm._v(" "), _vm.Tipo_Edo == 2 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.guardarMto(0);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Actualizar")]) : _vm._e()])], _vm._v(" "), [_c("v-client-table", {
    ref: "tablePoliza",
    attrs: {
      data: _vm.datapoliza,
      options: _vm.optionspoliza,
      columns: _vm.columnspoliza
    },
    scopedSlots: _vm._u([{
      key: "id",
      fn: function fn(props) {
        return [_c("div", {
          staticClass: "btn-group",
          attrs: {
            role: "group",
            "aria-label": "Button group with nested dropdown"
          }
        }, [_c("div", {
          staticClass: "btn-group dropup",
          attrs: {
            role: "group"
          }
        }, [_c("button", {
          staticClass: "btn btn-outline-dark dropdown-toggle",
          attrs: {
            id: "btnGroupDrop1",
            type: "button",
            "data-toggle": "dropdown",
            "aria-haspopup": "true",
            "aria-expanded": "false"
          }
        }, [_c("i", {
          staticClass: "fas fa-grip-horizontal"
        }), _vm._v(" Acciones\r\n                                ")]), _vm._v(" "), _c("div", {
          staticClass: "dropdown-menu",
          attrs: {
            "aria-labelledby": "btnGroupDrop1"
          }
        }, [_c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.actualizar(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-edit"
        }), _vm._v("  Actualizar\r\n                                    ")]), _vm._v(" "), _c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.Eliminar(props.row.id);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-times"
        }), _vm._v("  Eliminar\r\n                                    ")])])])])];
      }
    }])
  })]], 2)])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/Unidades/Servicio.vue?vue&type=template&id=153b843c":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/Unidades/Servicio.vue?vue&type=template&id=153b843c ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("v-client-table", {
    ref: "tableMto",
    attrs: {
      data: _vm.list_mttos,
      options: _vm.optionsmto,
      columns: _vm.columnsmto
    },
    scopedSlots: _vm._u([{
      key: "tipo",
      fn: function fn(props) {
        return [props.row.tipo == 1 ? _c("button", {
          staticClass: "btn btn-outline-warning"
        }, [_vm._v("Mantenimiento")]) : _c("button", {
          staticClass: "btn btn-outline-success"
        }, [_vm._v("Servicio")])];
      }
    }, {
      key: "partidas",
      fn: function fn(props) {
        return [_c("ul", _vm._l(props.row.partidas, function (p, index) {
          return _c("li", {
            key: index,
            staticStyle: {
              "list-style": "none"
            }
          }, [_c("span", {
            staticClass: "badge badge-pill badge-primary",
            staticStyle: {
              "font-size": "12px"
            }
          }, [_vm._v(_vm._s(p.nombre))])]);
        }), 0)];
      }
    }])
  })], 1)])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/Unidades/Tenencia.vue?vue&type=template&id=79dc9d5b":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/Unidades/Tenencia.vue?vue&type=template&id=79dc9d5b ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isLoading
    }
  }), _vm._v(" "), [_c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Fecha")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.tenencia.fecha,
      expression: "tenencia.fecha"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date",
      name: "fecha",
      "data-vv-name": "Fecha"
    },
    domProps: {
      value: _vm.tenencia.fecha
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.tenencia, "fecha", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Fecha")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Folio")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.tenencia.folio,
      expression: "tenencia.folio"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "folio",
      "data-vv-name": "Folio"
    },
    domProps: {
      value: _vm.tenencia.folio
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.tenencia, "folio", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Folio")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Año del ejercicio")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.tenencia.anio,
      expression: "tenencia.anio"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      name: "anio",
      "data-vv-name": "Año del ejercicio"
    },
    domProps: {
      value: _vm.tenencia.anio
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.tenencia, "anio", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Año del ejercicio")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Costo")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.tenencia.costo,
      expression: "tenencia.costo"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required|decimal:2",
      expression: "'required|decimal:2'"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "costo",
      "data-vv-name": "Costo"
    },
    domProps: {
      value: _vm.tenencia.costo
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.tenencia, "costo", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Costo")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_vm.tenencia.comprobante != "" ? [_c("div", {
    staticClass: "form-group col-md-2"
  }, [_c("label", [_vm._v(" ")]), _vm._v(" "), _c("button", {
    staticClass: "form-control",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.descargar(_vm.tenencia.comprobante);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-file-download"
  }), _vm._v(" Descargar\r\n                            ")])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-2"
  }, [_c("label", [_vm._v(" ")]), _vm._v(" "), _c("button", {
    staticClass: "form-control",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.actualiza();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-file"
  }), _vm._v(" Actualizar Archivo\r\n                            ")])])] : _vm._e(), _vm._v(" "), _vm.tenencia.comprobante == "" ? [_c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Comprobante")]), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      type: "file",
      name: "comprobante"
    },
    on: {
      change: function change($event) {
        return _vm.onChange($event);
      }
    }
  })])] : _vm._e()], 2), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_vm.Tipo_Edo == 2 ? _c("button", {
    staticClass: "btn btn-outline-dark",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.cerrarModal();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-window-close"
  }), _vm._v(" Cerrar")]) : _vm._e(), _vm._v(" "), _vm.Tipo_Edo == 1 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.guardarMto(1);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Guardar")]) : _vm._e(), _vm._v(" "), _vm.Tipo_Edo == 2 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.guardarMto(0);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Actualizar")]) : _vm._e()])], _vm._v(" "), _c("vue-element-loading", {
    attrs: {
      active: _vm.isDatosLoading
    }
  }), _vm._v(" "), [_c("v-client-table", {
    ref: "tablePoliza",
    attrs: {
      data: _vm.datatenencia,
      options: _vm.optionstenencia,
      columns: _vm.columnstenencia
    },
    scopedSlots: _vm._u([{
      key: "id",
      fn: function fn(props) {
        return [_c("div", {
          staticClass: "btn-group",
          attrs: {
            role: "group",
            "aria-label": "Button group with nested dropdown"
          }
        }, [_c("div", {
          staticClass: "btn-group dropup",
          attrs: {
            role: "group"
          }
        }, [_c("button", {
          staticClass: "btn btn-outline-dark dropdown-toggle",
          attrs: {
            id: "btnGroupDrop1",
            type: "button",
            "data-toggle": "dropdown",
            "aria-haspopup": "true",
            "aria-expanded": "false"
          }
        }, [_c("i", {
          staticClass: "fas fa-grip-horizontal"
        }), _vm._v(" Acciones\r\n                                ")]), _vm._v(" "), _c("div", {
          staticClass: "dropdown-menu",
          attrs: {
            "aria-labelledby": "btnGroupDrop1"
          }
        }, [_c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.actualizar(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "icon-pencil"
        }), _vm._v("  Actualizar\r\n                                    ")])])])])];
      }
    }, {
      key: "comprobante",
      fn: function fn(props) {
        return [props.row.comprobante == null ? [_c("button", {
          staticClass: "btn btn-dark"
        }, [_vm._v("\r\n                                N/D\r\n                            ")])] : [_c("button", {
          staticClass: "btn btn-dark",
          on: {
            click: function click($event) {
              return _vm.descargar(props.row.comprobante);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-download"
        })])]];
      }
    }])
  })]], 2)])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/Unidades/Unidades.vue?vue&type=template&id=4c861f6b":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/Unidades/Unidades.vue?vue&type=template&id=4c861f6b ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("main", {
    staticClass: "main"
  }, [_c("div", {
    staticClass: "container-fluid"
  }, [_c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.detalleu,
      expression: "!detalleu"
    }],
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("i", {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" Unidades " + _vm._s(_vm.empresa_nombre) + "\r\n                "), _c("div", {
    staticClass: "dropdown",
    staticStyle: {
      "margin-top": "-1rem"
    }
  }, [_c("button", {
    staticClass: "btn btn-secondary dropdown-toggle float-sm-right",
    attrs: {
      type: "button",
      id: "dropdownMenu2",
      "data-toggle": "dropdown",
      "aria-haspopup": "true",
      "aria-expanded": "false"
    }
  }, [_vm._v("\r\n                        Empresa\r\n                    ")]), _vm._v(" "), _c("div", {
    staticClass: "dropdown-menu",
    attrs: {
      "aria-labelledby": "dropdownMenu2"
    }
  }, [_c("button", {
    staticClass: "dropdown-item",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        _vm.empresa = 1;
        _vm.ObtenerUnidades();
      }
    }
  }, [_vm._v("Conserflow")]), _vm._v(" "), _c("button", {
    staticClass: "dropdown-item",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        _vm.empresa = 2;
        _vm.ObtenerUnidades();
      }
    }
  }, [_vm._v("Constructora")]), _vm._v(" "), _c("button", {
    staticClass: "dropdown-item",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        _vm.empresa = 3;
        _vm.ObtenerUnidades();
      }
    }
  }, [_vm._v("Diego Cruz M.")]), _vm._v(" "), _c("button", {
    staticClass: "dropdown-item",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        _vm.empresa = 4;
        _vm.ObtenerUnidades();
      }
    }
  }, [_vm._v("Ramón Cruz M.")])])]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-dark float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.AbrirModal();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus mr-1"
  }), _vm._v("Nuevo\r\n                ")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-dark float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.DescargarInventario();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-download mr-1"
  }), _vm._v("Descargar\r\n                ")])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isLoading_vehiculos
    }
  }), _vm._v(" "), _c("h4", {
    staticClass: "mt-2"
  }, [_vm._v("Unidades Activas")]), _vm._v(" "), _c("v-client-table", {
    ref: "myTable",
    attrs: {
      columns: _vm.columns,
      data: _vm.list_vehiculos,
      options: _vm.options
    },
    scopedSlots: _vm._u([{
      key: "id",
      fn: function fn(props) {
        return [_c("div", {
          staticClass: "btn-group",
          attrs: {
            role: "group",
            "aria-label": "Button group with nested dropdown"
          }
        }, [_c("div", {
          staticClass: "btn-group dropup",
          attrs: {
            role: "group"
          }
        }, [_c("button", {
          staticClass: "btn btn-outline-dark dropdown-toggle",
          attrs: {
            id: "btnGroupDrop1",
            type: "button",
            "data-toggle": "dropdown",
            "aria-haspopup": "true",
            "aria-expanded": "false"
          }
        }, [_c("i", {
          staticClass: "fas fa-grip-horizontal"
        }), _vm._v(" Acciones\r\n                                ")]), _vm._v(" "), _c("div", {
          staticClass: "dropdown-menu",
          attrs: {
            "aria-labelledby": "btnGroupDrop1"
          }
        }, [_c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.detalles(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-eye"
        }), _vm._v("Detalles\r\n                                    ")]), _vm._v(" "), props.row.condicion == 1 ? [_c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.Desactivar(props.row.id);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-times"
        }), _vm._v("Eliminar\r\n                                        ")]), _vm._v(" "), _c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.Prestamo(props.row, 2);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-exchange-alt"
        }), _vm._v(" Préstamo\r\n                                        ")])] : [_c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.RegresarPrestamo(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-exchange-alt"
        }), _vm._v(" Regresar\r\n                                        ")]), _vm._v(" "), _c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.DetallesPrestamo(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-eye"
        }), _vm._v(" "), [props.row.condicion == 2 ? _c("span", [_vm._v("Detalles de la venta")]) : props.row.condicion == 3 ? _c("span", [_vm._v("Detalles de la renta")]) : _c("span", [_vm._v("Detalles del préstamo")])]], 2)]], 2)])])];
      }
    }, {
      key: "condicion",
      fn: function fn(props) {
        return [props.row.condicion == 0 ? _c("button", {
          staticClass: "btn btn-outline-danger"
        }, [_vm._v("Inactivo")]) : props.row.condicion == 1 ? _c("button", {
          staticClass: "btn btn-outline-success"
        }, [_vm._v("Activo")]) : props.row.condicion == 2 ? _c("button", {
          staticClass: "btn btn-outline-dark"
        }, [_vm._v("Venta")]) : props.row.condicion == 3 ? _c("button", {
          staticClass: "btn btn-outline-warning"
        }, [_vm._v("Renta")]) : props.row.condicion == 4 ? _c("button", {
          staticClass: "btn btn-outline-primary"
        }, [_vm._v("Préstamo")]) : _vm._e()];
      }
    }])
  }), _vm._v(" "), _c("br"), _vm._v(" "), _c("hr"), _vm._v(" "), _c("br"), _vm._v(" "), _c("h4", {
    staticClass: "mt-2"
  }, [_vm._v("Unidades Inactivas")]), _vm._v(" "), _c("v-client-table", {
    ref: "myTable",
    attrs: {
      columns: _vm.columns_inactivos,
      data: _vm.list_vehiculos_inactivos,
      options: _vm.options_inactivos
    }
  }, [_c("template", {
    slot: "id"
  }, [_c("div", {
    staticClass: "btn-group",
    attrs: {
      role: "group",
      "aria-label": "Button group with nested dropdown"
    }
  }, [_c("div", {
    staticClass: "btn-group dropup",
    attrs: {
      role: "group"
    }
  }, [_c("button", {
    staticClass: "btn btn-outline-dark dropdown-toggle",
    attrs: {
      id: "btnGroupDrop1",
      type: "button",
      "data-toggle": "dropdown",
      "aria-haspopup": "true",
      "aria-expanded": "false"
    }
  }, [_c("i", {
    staticClass: "fas fa-grip-horizontal"
  }), _vm._v(" Acciones\r\n                                ")])])])]), _vm._v(" "), _c("template", {
    slot: "condicion"
  }, [_c("button", {
    staticClass: "btn btn-outline-danger"
  }, [_vm._v("Inactivo")])])], 2)], 1)]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.detalleu,
      expression: "detalleu"
    }]
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isLoading
    }
  }), _vm._v(" "), _c("detalleunidades", {
    ref: "detalleunidades",
    on: {
      "maestro:atras": function maestroAtras($event) {
        return _vm.maestro();
      },
      "detalle:actualizar": function detalleActualizar($event) {
        return _vm.actualiza($event);
      }
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "modal fade",
    "class": {
      mostrar: _vm.modal
    },
    staticStyle: {
      display: "none"
    },
    attrs: {
      tabindex: "-1",
      role: "dialog",
      "aria-labelledby": "myModalLabel",
      "aria-hidden": "true"
    }
  }, [_c("div", {
    staticClass: "modal-dialog modal-dark modal-lg",
    attrs: {
      role: "document"
    }
  }, [_c("div", {
    staticClass: "modal-content"
  }, [_c("div", [_c("div", {
    staticClass: "modal-header"
  }, [_c("h4", {
    staticClass: "modal-title",
    domProps: {
      textContent: _vm._s(_vm.tituloModal)
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "close",
    attrs: {
      type: "button",
      "aria-label": "Close"
    },
    on: {
      click: function click($event) {
        return _vm.cerrarModal();
      }
    }
  }, [_c("span", {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("×")])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isLoading
    }
  }), _vm._v(" "), _c("div", [_c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Unidad")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.Unidades.unidad,
      expression: "Unidades.unidad"
    }],
    staticClass: "form-control",
    attrs: {
      maxlength: "50",
      type: "text",
      name: "unidad",
      "data-vv-name": "Unidad",
      placeholder: "Unidad",
      autocomplete: "off",
      id: "unidad"
    },
    domProps: {
      value: _vm.Unidades.unidad
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.Unidades, "unidad", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Unidad")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Marca")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.Unidades.marca,
      expression: "Unidades.marca"
    }],
    staticClass: "form-control",
    attrs: {
      maxlength: "30",
      type: "text",
      name: "marca",
      placeholder: "Marca",
      "data-vv-name": "Marca",
      id: "marca"
    },
    domProps: {
      value: _vm.Unidades.marca
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.Unidades, "marca", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Marca")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Modelo")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.Unidades.modelo,
      expression: "Unidades.modelo"
    }],
    staticClass: "form-control",
    attrs: {
      maxlength: "20",
      type: "text",
      name: "modelo",
      "data-vv-name": "Modelo",
      placeholder: "Modelo",
      id: "modelo"
    },
    domProps: {
      value: _vm.Unidades.modelo
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.Unidades, "modelo", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Modelo")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-3"
  }, [_c("label", [_vm._v("Color")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.Unidades.color,
      expression: "Unidades.color"
    }],
    staticClass: "form-control",
    attrs: {
      maxlength: "30",
      type: "text",
      name: "color",
      "data-vv-name": "Color",
      placeholder: "Color",
      autocomplete: "off",
      id: "color"
    },
    domProps: {
      value: _vm.Unidades.color
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.Unidades, "color", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Color")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-3"
  }, [_c("label", [_vm._v("No. Motor")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.Unidades.no_motor,
      expression: "Unidades.no_motor"
    }],
    staticClass: "form-control",
    attrs: {
      maxlength: "45",
      type: "text",
      name: "unidad",
      "data-vv-name": "No Motor",
      placeholder: "No Motor",
      autocomplete: "off",
      id: "no_motor"
    },
    domProps: {
      value: _vm.Unidades.no_motor
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.Unidades, "no_motor", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("No Motor")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-3"
  }, [_c("label", [_vm._v("Capacidad carga")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.Unidades.capacidad,
      expression: "Unidades.capacidad"
    }],
    staticClass: "form-control",
    attrs: {
      max: "25",
      type: "text",
      name: "capacidad",
      "data-vv-name": "Capacidad",
      placeholder: "Capacidad",
      autocomplete: "off",
      id: "capacidad"
    },
    domProps: {
      value: _vm.Unidades.capacidad
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.Unidades, "capacidad", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Capacidad")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-3"
  }, [_c("label", [_vm._v("Cilindros")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.Unidades.cilindros,
      expression: "Unidades.cilindros"
    }],
    staticClass: "form-control",
    attrs: {
      maxlength: "25",
      type: "text",
      name: "cilindros",
      "data-vv-name": "Cilindros",
      placeholder: "Cilindros",
      autocomplete: "off",
      id: "cilindros"
    },
    domProps: {
      value: _vm.Unidades.cilindros
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.Unidades, "cilindros", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Cilindros")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Año")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.Unidades.anio,
      expression: "Unidades.anio"
    }],
    staticClass: "form-control",
    attrs: {
      minlength: "4",
      maxlength: "4",
      min: "1900",
      max: "2025",
      type: "number",
      name: "anio",
      "data-vv-name": "Año",
      placeholder: "Año",
      id: "anio"
    },
    domProps: {
      value: _vm.Unidades.anio
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.Unidades, "anio", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Año")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Placas de circulación")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.Unidades.placas,
      expression: "Unidades.placas"
    }],
    staticClass: "form-control",
    attrs: {
      maxlength: "10",
      type: "text",
      name: "placas",
      "data-vv-name": "Placas",
      placeholder: "Placas",
      id: "placas"
    },
    domProps: {
      value: _vm.Unidades.placas
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.Unidades, "placas", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Placas")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Estado")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.Unidades.estado,
      expression: "Unidades.estado"
    }],
    staticClass: "form-control",
    attrs: {
      maxlength: "20",
      type: "text",
      name: "estado",
      "data-vv-name": "Estado",
      placeholder: "Estado",
      id: "estado"
    },
    domProps: {
      value: _vm.Unidades.estado
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.Unidades, "estado", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Estado")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Número de serie")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.Unidades.numero_serie,
      expression: "Unidades.numero_serie"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      max: "30",
      "data-vv-name": "Número de serie"
    },
    domProps: {
      value: _vm.Unidades.numero_serie
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.Unidades, "numero_serie", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Número de serie")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Clase y tipo")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.Unidades.clase_tipo,
      expression: "Unidades.clase_tipo"
    }],
    staticClass: "form-control",
    attrs: {
      "data-vv-name": "Clase-Tipo"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.Unidades, "clase_tipo", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, _vm._l(_vm.list_tipos, function (item) {
    return _c("option", {
      key: item.id,
      domProps: {
        value: item.id
      }
    }, [_vm._v(_vm._s(item.clase_tipo))]);
  }), 0), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Clase-Tipo")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Combustible")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.Unidades.combustible,
      expression: "Unidades.combustible"
    }],
    staticClass: "form-control",
    attrs: {
      "data-vv-name": "Combustible"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.Unidades, "combustible", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, _vm._l(_vm.list_combustibles, function (item) {
    return _c("option", {
      key: item.id,
      domProps: {
        value: item.id
      }
    }, [_vm._v(_vm._s(item.nombre))]);
  }), 0), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Combustible")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Verificación 1er. semestre")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.Unidades.primer_semestre,
      expression: "Unidades.primer_semestre"
    }],
    staticClass: "form-control",
    attrs: {
      name: "primer_semestre",
      id: "primer_semestre",
      disabled: _vm.Unidades.excento
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.Unidades, "primer_semestre", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "Enero-Febrero"
    }
  }, [_vm._v("Enero-Febrero")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Febrero-Marzo"
    }
  }, [_vm._v("Febrero-Marzo")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Marzo-Abril"
    }
  }, [_vm._v("Marzo-Abril")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Abril-Mayo"
    }
  }, [_vm._v("Abril-Mayo")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Mayo-Junio"
    }
  }, [_vm._v("Mayo-Junio")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Verificación 2do. semestre")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.Unidades.segundo_semestre,
      expression: "Unidades.segundo_semestre"
    }],
    staticClass: "form-control",
    attrs: {
      name: "segundo_semestre",
      id: "segundo_semestre",
      disabled: _vm.Unidades.excento
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.Unidades, "segundo_semestre", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "Julio-Agosto"
    }
  }, [_vm._v("Julio-Agosto")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Agosto-Septiembre"
    }
  }, [_vm._v("Agosto-Septiembre")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Septiembre-Octubre"
    }
  }, [_vm._v("Septiembre-Octubre")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Octubre-Noviembre"
    }
  }, [_vm._v("Octubre-Noviembre")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Noviembre-Diciembre"
    }
  }, [_vm._v("Noviembre-Diciembre")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-2"
  }, [_c("label", [_vm._v("Excento")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.Unidades.excento,
      expression: "Unidades.excento"
    }],
    staticClass: "form-control",
    attrs: {
      type: "checkbox",
      value: "excento"
    },
    domProps: {
      checked: Array.isArray(_vm.Unidades.excento) ? _vm._i(_vm.Unidades.excento, "excento") > -1 : _vm.Unidades.excento
    },
    on: {
      change: [function ($event) {
        var $$a = _vm.Unidades.excento,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "excento",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.Unidades, "excento", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.Unidades, "excento", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.Unidades, "excento", $$c);
        }
      }, function ($event) {
        return _vm.excento();
      }]
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Número tarjeta circulación")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.Unidades.numero_tarjeta_circulacion,
      expression: "Unidades.numero_tarjeta_circulacion"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "numero_tarjeta_circulacion",
      "data-vv-name": "Número tarjeta circulación",
      placeholder: "Número tarjeta circulación",
      id: "numero_tarjeta_circulacion"
    },
    domProps: {
      value: _vm.Unidades.numero_tarjeta_circulacion
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.Unidades, "numero_tarjeta_circulacion", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Número tarjeta circulación")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Tarjeta")]), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      maxlength: "40",
      type: "file",
      "data-vv-name": "tarjeta",
      name: "tarjeta",
      id: "tarjeta"
    },
    on: {
      change: function change($event) {
        return _vm.onChangeT($event);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("tarjeta")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-8"
  }, [_c("label", [_vm._v("Comentarios")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.Unidades.comentarios,
      expression: "Unidades.comentarios"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "comentarios",
      "data-vv-name": "Comentarios",
      placeholder: "Comentarios",
      id: "comentarios"
    },
    domProps: {
      value: _vm.Unidades.comentarios
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.Unidades, "comentarios", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Comentarios")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Factura")]), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      type: "file",
      "data-vv-name": "Factura",
      name: "factura",
      id: "factura"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Factura")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_vm._v("\r\n                                Propio\r\n                                "), _c("label", {
    staticClass: "switch switch-default switch-pill switch-dark"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.Unidades.tipo,
      expression: "Unidades.tipo"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "switch-input",
    attrs: {
      type: "radio",
      "data-vv-name": "Tipo",
      name: "customRadioInline1"
    },
    domProps: {
      checked: _vm._q(_vm.Unidades.tipo, null)
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.Unidades, "tipo", null);
      }, function ($event) {
        return _vm.formpropio($event);
      }]
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "switch-label"
  }), _vm._v(" "), _c("span", {
    staticClass: "switch-handle"
  })]), _vm._v("\r\n                                Rentado\r\n                                "), _c("label", {
    staticClass: "switch switch-default switch-pill switch-dark"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.Unidades.tipo,
      expression: "Unidades.tipo"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "switch-input",
    attrs: {
      type: "radio",
      "data-vv-name": "Tipo",
      name: "customRadioInline1"
    },
    domProps: {
      checked: _vm._q(_vm.Unidades.tipo, null)
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.Unidades, "tipo", null);
      }, function ($event) {
        return _vm.formrentado($event);
      }]
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "switch-label"
  }), _vm._v(" "), _c("span", {
    staticClass: "switch-handle"
  })]), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Tipo")))])]), _vm._v(" "), _vm.tipo == 1 ? [_c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Propietario")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.Unidades.propietario,
      expression: "Unidades.propietario"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "propietario",
      "data-vv-name": "Propietario",
      placeholder: "Propietario",
      id: "propietario"
    },
    domProps: {
      value: _vm.Unidades.propietario
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.Unidades, "propietario", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Propietario")))])])])] : _vm._e(), _vm._v(" "), _vm.tipo == 2 ? [_c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Proveedor")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.Unidades.proveedor,
      expression: "Unidades.proveedor"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "proveedor",
      "data-vv-name": "Proveedor",
      placeholder: "Proveedor",
      id: "proveedor"
    },
    domProps: {
      value: _vm.Unidades.proveedor
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.Unidades, "proveedor", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Proveedor")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Tiempo")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.Unidades.tiempo,
      expression: "Unidades.tiempo"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "tiempo",
      "data-vv-name": "Tiempo de renta",
      placeholder: "Tiempo de renta",
      id: "tiempo"
    },
    domProps: {
      value: _vm.Unidades.tiempo
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.Unidades, "tiempo", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Tiempo de renta")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Costo Renta")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "decimal:2",
      expression: "'decimal:2'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.Unidades.costo_renta,
      expression: "Unidades.costo_renta"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "costo_renta",
      "data-vv-name": "Costo Renta",
      placeholder: "Costo Renta",
      id: "costo_renta"
    },
    domProps: {
      value: _vm.Unidades.costo_renta
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.Unidades, "costo_renta", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Costo Renta")))])])])] : _vm._e()], 2)], 1), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isLoading
    }
  }), _vm._v(" "), _c("div", [_c("button", {
    staticClass: "btn btn-outline-dark",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.cerrarModal();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-window-close"
  }), _vm._v("Cerrar")]), _vm._v(" "), _vm.tipoAccion == 1 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.registrar(1);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v("Guardar")]) : _vm._e(), _vm._v(" "), _vm.tipoAccion == 2 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.registrar(0);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v("Actualizar")]) : _vm._e()])], 1)])])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/ValeResguardo.vue?vue&type=template&id=4a946d02":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/ValeResguardo.vue?vue&type=template&id=4a946d02 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "main"
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("i", {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" Vales de Resguardo - " + _vm._s(_vm.empresa == 1 ? "CONSERFLOW" : "CSCT") + "\r\n            "), _c("div", {
    staticClass: "dropdown"
  }, [_c("button", {
    staticClass: "btn btn-secondary dropdown-toggle float-sm-right",
    attrs: {
      type: "button",
      id: "dropdownMenu2",
      "data-toggle": "dropdown",
      "aria-haspopup": "true",
      "aria-expanded": "false"
    }
  }, [_vm._v("\r\n                    Empresa\r\n                ")]), _vm._v(" "), _c("div", {
    staticClass: "dropdown-menu"
  }, [_c("button", {
    staticClass: "dropdown-item",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        _vm.empresa = 1;
        _vm.ObtenerVales();
      }
    }
  }, [_vm._v("Conserflow")]), _vm._v(" "), _c("button", {
    staticClass: "dropdown-item",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        _vm.empresa = 2;
        _vm.ObtenerVales();
      }
    }
  }, [_vm._v("CSCT")])])]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-dark float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.AbrirModalResguardo(true);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  }), _vm._v("Nuevo\r\n            ")])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {}, [_c("div", {}, [_c("v-client-table", {
    ref: "tbl_resguardo",
    attrs: {
      columns: _vm.columns_resguardo,
      data: _vm.list_resguardo,
      options: _vm.options_resguardo
    },
    scopedSlots: _vm._u([{
      key: "id",
      fn: function fn(props) {
        return [_c("div", {
          staticClass: "btn-group",
          attrs: {
            role: "group"
          }
        }, [_c("button", {
          staticClass: "btn btn-outline-dark dropdown-toggle",
          attrs: {
            id: "btn_id",
            type: "button",
            "data-toggle": "dropdown",
            "aria-haspopup": "true",
            "aria-expanded": "false"
          }
        }, [_c("i", {
          staticClass: "fas fa-grip-horizontal"
        }), _vm._v(" Acciones\r\n                                ")]), _vm._v(" "), _c("div", {
          staticClass: "dropdown-menu"
        }, [[_c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.AbrirModalResguardo(false, props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-edit"
        }), _vm._v("Actualizar\r\n                                        ")]), _vm._v(" "), _c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.Descargar(props.row.id);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-download"
        }), _vm._v("Descargar\r\n                                        ")])]], 2)])];
      }
    }])
  })], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "modal fade",
    "class": {
      mostrar: _vm.ver_modal_resguardo
    },
    staticStyle: {
      display: "none"
    },
    attrs: {
      tabindex: "-1",
      role: "dialog",
      "aria-labelledby": "myModalLabel",
      "aria-hidden": "true"
    }
  }, [_c("div", {
    staticClass: "modal-dialog modal-dark modal-lg",
    attrs: {
      role: "document"
    }
  }, [_c("div", {
    staticClass: "modal-content"
  }, [_c("div", {
    staticClass: "modal-header"
  }, [_c("h4", {
    staticClass: "modal-title",
    domProps: {
      textContent: _vm._s(_vm.titulo_modal_resguardo)
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "close",
    attrs: {
      type: "button",
      "aria-label": "Close"
    },
    on: {
      click: function click($event) {
        return _vm.CerrarModalResguardo();
      }
    }
  }, [_c("span", {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("×")])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_c("div", {
    staticClass: "form-horizontal"
  }, [_c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2 form-control-label"
  }, [_vm._v("Fecha")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: '"required"'
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.resguardo_modal.fecha,
      expression: "resguardo_modal.fecha"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date",
      "data-vv-name": "Fecha"
    },
    domProps: {
      value: _vm.resguardo_modal.fecha
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.resguardo_modal, "fecha", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Fecha")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2 form-control-label"
  }, [_vm._v("Solicitud")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: '"required"'
    }],
    attrs: {
      options: _vm.list_solicitudes,
      label: "unidad_solicitud",
      "data-vv-name": "Solicitud"
    },
    on: {
      input: _vm.ObtenerPolizas
    },
    model: {
      value: _vm.resguardo_modal.solicitud,
      callback: function callback($$v) {
        _vm.$set(_vm.resguardo_modal, "solicitud", $$v);
      },
      expression: "resguardo_modal.solicitud"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Solicitud")))])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2 form-control-label"
  }, [_vm._v("Periodo")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: '"required"'
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.resguardo_modal.solicitud.periodo,
      expression: "resguardo_modal.solicitud.periodo"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      disabled: "",
      "data-vv-name": "Periodo"
    },
    domProps: {
      value: _vm.resguardo_modal.solicitud.periodo
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.resguardo_modal.solicitud, "periodo", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Periodo")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-3"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Marca")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: '"required"'
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.resguardo_modal.solicitud.marca,
      expression: "resguardo_modal.solicitud.marca"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      disabled: "",
      "data-vv-name": "Marca"
    },
    domProps: {
      value: _vm.resguardo_modal.solicitud.marca
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.resguardo_modal.solicitud, "marca", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Marca")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-5"
  }, [_c("label", {
    staticClass: "form-control-label"
  }, [_vm._v("Modelo")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: '"required"'
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.resguardo_modal.solicitud.modelo,
      expression: "resguardo_modal.solicitud.modelo"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      disabled: "",
      "data-vv-name": "Modelo"
    },
    domProps: {
      value: _vm.resguardo_modal.solicitud.modelo
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.resguardo_modal.solicitud, "modelo", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Mdelo")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-3"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Color")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: '"required"'
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.resguardo_modal.solicitud.color,
      expression: "resguardo_modal.solicitud.color"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      disabled: "",
      "data-vv-name": "Color"
    },
    domProps: {
      value: _vm.resguardo_modal.solicitud.color
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.resguardo_modal.solicitud, "color", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Color")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", {
    staticClass: "form-control-label"
  }, [_vm._v("No. serie")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: '"required"'
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.resguardo_modal.solicitud.no_serie,
      expression: "resguardo_modal.solicitud.no_serie"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      disabled: "",
      "data-vv-name": "No_serie"
    },
    domProps: {
      value: _vm.resguardo_modal.solicitud.no_serie
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.resguardo_modal.solicitud, "no_serie", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("No_serie")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", {
    staticClass: "form-control-label"
  }, [_vm._v("No. motor")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: '"required"'
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.resguardo_modal.solicitud.no_motor,
      expression: "resguardo_modal.solicitud.no_motor"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      disabled: "",
      "data-vv-name": "No_motor"
    },
    domProps: {
      value: _vm.resguardo_modal.solicitud.no_motor
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.resguardo_modal.solicitud, "no_motor", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("No_motor")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", {
    staticClass: "form-control-label"
  }, [_vm._v("Capacidad de carga")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: '"required"'
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.resguardo_modal.solicitud.capacidad_carga,
      expression: "resguardo_modal.solicitud.capacidad_carga"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      disabled: "",
      "data-vv-name": "Capacidad_carga"
    },
    domProps: {
      value: _vm.resguardo_modal.solicitud.capacidad_carga
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.resguardo_modal.solicitud, "capacidad_carga", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Capacidad_carga")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", {
    staticClass: "form-control-label"
  }, [_vm._v("Cilindros")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: '"required"'
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.resguardo_modal.solicitud.cilindros,
      expression: "resguardo_modal.solicitud.cilindros"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      disabled: "",
      "data-vv-name": "Cilindros"
    },
    domProps: {
      value: _vm.resguardo_modal.solicitud.cilindros
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.resguardo_modal.solicitud, "cilindros", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Cilindros")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", {
    staticClass: "form-control-label"
  }, [_vm._v("Tarjeta")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: '"required"'
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.resguardo_modal.solicitud.tarjeta,
      expression: "resguardo_modal.solicitud.tarjeta"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      disabled: "",
      "data-vv-name": "Tarjeta"
    },
    domProps: {
      value: _vm.resguardo_modal.solicitud.tarjeta
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.resguardo_modal.solicitud, "tarjeta", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Tarjeta")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("div", {
    staticClass: "form-group col-md-8"
  }, [_c("label", {
    staticClass: "form-control-label"
  }, [_vm._v("Poliza seguro")]), _vm._v(" "), _c("v-select", {
    attrs: {
      label: "nombre",
      "data-vv-name": "poliza_seguro",
      options: _vm.list_polizas
    },
    model: {
      value: _vm.resguardo_modal.poliza,
      callback: function callback($$v) {
        _vm.$set(_vm.resguardo_modal, "poliza", $$v);
      },
      expression: "resguardo_modal.poliza"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("poliza_seguro")))])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2 form-control-label"
  }, [_vm._v("Responsable")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-8"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: '"required"'
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.resguardo_modal.solicitud.empledo_solicita,
      expression: "resguardo_modal.solicitud.empledo_solicita"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      disabled: "",
      "data-vv-name": "responsable"
    },
    domProps: {
      value: _vm.resguardo_modal.solicitud.empledo_solicita
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.resguardo_modal.solicitud, "empledo_solicita", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("responsable")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2 form-control-label"
  }, [_vm._v("Entrega")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-8"
  }, [_c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: '"required"'
    }],
    attrs: {
      label: "nombre",
      options: _vm.list_empleados,
      "data-vv-name": "Entrega"
    },
    model: {
      value: _vm.resguardo_modal.entrega,
      callback: function callback($$v) {
        _vm.$set(_vm.resguardo_modal, "entrega", $$v);
      },
      expression: "resguardo_modal.entrega"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Entrega")))])], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("button", {
    staticClass: "btn btn-outline-dark",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.CerrarModalResguardo();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-times"
  }), _vm._v("Cerrar")]), _vm._v(" "), _vm.tipoAccion_modal_resguardo == 1 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.GuardarResguardo(1);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v("Guardar")]) : _vm._e(), _vm._v(" "), _vm.tipoAccion_modal_resguardo == 2 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.GuardarResguardo(0);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v("Actualizar")]) : _vm._e()])])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/Vehiculos.vue?vue&type=template&id=2c9f14aa":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/Vehiculos.vue?vue&type=template&id=2c9f14aa ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("main", {
    staticClass: "main"
  }, [_c("div", {
    staticClass: "container-fluid"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("i", {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" Vehículos.\n        "), _c("button", {
    staticClass: "btn btn-dark float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.abrirModal("vehiculo", "registrar");
      }
    }
  }, [_c("i", {
    staticClass: "icon-plus"
  }), _vm._v(" Nuevo\n        ")])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("v-client-table", {
    ref: "myTable",
    attrs: {
      columns: _vm.columns,
      data: _vm.tableData,
      options: _vm.options
    },
    scopedSlots: _vm._u([{
      key: "id",
      fn: function fn(props) {
        return [_c("div", {
          staticClass: "btn-group",
          attrs: {
            role: "group",
            "aria-label": "Button group with nested dropdown"
          }
        }, [_c("div", {
          staticClass: "btn-group dropup",
          attrs: {
            role: "group"
          }
        }, [_c("button", {
          staticClass: "btn btn-outline-primary dropdown-toggle",
          attrs: {
            id: "btnGroupDrop1",
            type: "button",
            "data-toggle": "dropdown",
            "aria-haspopup": "true",
            "aria-expanded": "false"
          }
        }, [_c("i", {
          staticClass: "fas fa-grip-horizontal"
        }), _vm._v(" Acciones\n               ")]), _vm._v(" "), _c("div", {
          staticClass: "dropdown-menu",
          attrs: {
            "aria-labelledby": "btnGroupDrop1"
          }
        }, [_c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.abrirModal("vehiculo", "actualizar", props.row);
            }
          }
        }, [_c("i", {
          staticClass: "icon-pencil"
        }), _vm._v(" Actualizar vehiculo.\n            ")])])])])];
      }
    }])
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "modal fade",
    "class": {
      mostrar: _vm.modal
    },
    staticStyle: {
      display: "none"
    },
    attrs: {
      tabindex: "-1",
      role: "dialog",
      "aria-labelledby": "myModalLabel",
      "aria-hidden": "true"
    }
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isLoading
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "modal-dialog modal-dark modal-lg",
    attrs: {
      role: "document"
    }
  }, [_c("div", {
    staticClass: "modal-content"
  }, [_c("div", [_c("div", {
    staticClass: "modal-header"
  }, [_c("h4", {
    staticClass: "modal-title",
    domProps: {
      textContent: _vm._s(_vm.tituloModal)
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "close",
    attrs: {
      type: "button",
      "aria-label": "Close"
    },
    on: {
      click: function click($event) {
        return _vm.cerrarModal();
      }
    }
  }, [_c("span", {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("×")])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_c("input", {
    attrs: {
      type: "hidden",
      name: "id"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Descripción")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-9"
  }, [_c("textarea", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.vehiculo.descripcion,
      expression: "vehiculo.descripcion"
    }],
    staticClass: "form-control",
    attrs: {
      "data-vv-name": "descripcion",
      placeholder: "Nombre del Vehiculo",
      autocomplete: "off",
      rows: "8",
      cols: "80"
    },
    domProps: {
      value: _vm.vehiculo.descripcion
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.vehiculo, "descripcion", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("descripcion")))])])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("button", {
    staticClass: "btn btn-outline-dark",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.cerrarModal();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-window-close"
  }), _vm._v(" Cerrar")]), _vm._v(" "), _vm.tipoAccion == 1 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.guardarServicio(1);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Guardar")]) : _vm._e(), _vm._v(" "), _vm.tipoAccion == 2 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.guardarServicio(0);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Actualizar")]) : _vm._e()])])])])], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/Verificacion.vue?vue&type=template&id=f0abaf00":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/Verificacion.vue?vue&type=template&id=f0abaf00 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isLoading
    }
  }), _vm._v(" "), [_c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Fecha")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.verificar.fecha,
      expression: "verificar.fecha"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date",
      name: "fecha",
      "data-vv-name": "Fecha"
    },
    domProps: {
      value: _vm.verificar.fecha
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.verificar, "fecha", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Fecha")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Costo")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required|decimal:2",
      expression: "'required|decimal:2'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.verificar.costo,
      expression: "verificar.costo"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      "data-vv-name": "Costo"
    },
    domProps: {
      value: _vm.verificar.costo
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.verificar, "costo", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Costo")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Multa")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.verificar.costo_multa,
      expression: "verificar.costo_multa"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number"
    },
    domProps: {
      value: _vm.verificar.costo_multa
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.verificar, "costo_multa", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Periodo registrado")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.verificar.periodo,
      expression: "verificar.periodo"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      "data-vv-name": "Periodo"
    },
    domProps: {
      value: _vm.verificar.periodo
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.verificar, "periodo", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Periodo")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_vm.verificar.comprobante != "" ? [_c("div", {
    staticClass: "form-group col-md-2"
  }, [_c("label", [_vm._v(" ")]), _vm._v(" "), _c("button", {
    staticClass: "form-control",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.descargar(_vm.verificar.comprobante);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-file-download"
  }), _vm._v(" Descargar\r\n                            ")])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-2"
  }, [_c("label", [_vm._v(" ")]), _vm._v(" "), _c("button", {
    staticClass: "form-control",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.actualiza();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-file"
  }), _vm._v(" Actualizar Archivo\r\n                            ")])])] : _vm._e(), _vm._v(" "), _vm.verificar.comprobante == "" ? [_c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Comprobante")]), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      type: "file",
      name: "comprobante"
    },
    on: {
      change: function change($event) {
        return _vm.onChange($event);
      }
    }
  })])] : _vm._e()], 2), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_vm.Tipo_Edo == 2 ? _c("button", {
    staticClass: "btn btn-outline-dark",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.cerrarModal();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-window-close"
  }), _vm._v(" Cerrar")]) : _vm._e(), _vm._v(" "), _vm.Tipo_Edo == 1 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.guardarMto(1);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Guardar")]) : _vm._e(), _vm._v(" "), _vm.Tipo_Edo == 2 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.guardarMto(0);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Actualizar")]) : _vm._e()])], _vm._v(" "), _c("vue-element-loading", {
    attrs: {
      active: _vm.isDocumentoLoading
    }
  }), _vm._v(" "), _c("div", [_c("v-client-table", {
    ref: "tablePoliza",
    attrs: {
      data: _vm.dataverificar,
      options: _vm.optionsverificar,
      columns: _vm.columnsverificar
    },
    scopedSlots: _vm._u([{
      key: "id",
      fn: function fn(props) {
        return [_c("div", {
          staticClass: "btn-group",
          attrs: {
            role: "group",
            "aria-label": "Button group with nested dropdown"
          }
        }, [_c("div", {
          staticClass: "btn-group dropup",
          attrs: {
            role: "group"
          }
        }, [_c("button", {
          staticClass: "btn btn-outline-dark dropdown-toggle",
          attrs: {
            id: "btnGroupDrop1",
            type: "button",
            "data-toggle": "dropdown",
            "aria-haspopup": "true",
            "aria-expanded": "false"
          }
        }, [_c("i", {
          staticClass: "fas fa-grip-horizontal"
        }), _vm._v(" Acciones\r\n                                ")]), _vm._v(" "), _c("div", {
          staticClass: "dropdown-menu",
          attrs: {
            "aria-labelledby": "btnGroupDrop1"
          }
        }, [_c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.actualizar(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "icon-pencil"
        }), _vm._v("  Actualizar\r\n                                    ")])])])])];
      }
    }, {
      key: "comprobante",
      fn: function fn(props) {
        return [props.row.comprobante == null ? [_c("button", {
          staticClass: "btn btn-dark"
        }, [_vm._v("\r\n                                N/D\r\n                            ")])] : [_c("button", {
          staticClass: "btn btn-dark",
          on: {
            click: function click($event) {
              return _vm.descargar(props.row.comprobante);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-download"
        })])]];
      }
    }])
  })], 1)], 2)])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/ValeResguardo.vue?vue&type=style&index=0&id=4a946d02&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/ValeResguardo.vue?vue&type=style&index=0&id=4a946d02&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.lol {\r\n    margin: 1rem;\r\n    padding: 1rem;\r\n    border: black 10px solid;\r\n    background-color: #9fd5d1;\r\n    color: white\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/ValeResguardo.vue?vue&type=style&index=0&id=4a946d02&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/ValeResguardo.vue?vue&type=style&index=0&id=4a946d02&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ValeResguardo_vue_vue_type_style_index_0_id_4a946d02_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ValeResguardo.vue?vue&type=style&index=0&id=4a946d02&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/ValeResguardo.vue?vue&type=style&index=0&id=4a946d02&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ValeResguardo_vue_vue_type_style_index_0_id_4a946d02_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ValeResguardo_vue_vue_type_style_index_0_id_4a946d02_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/assets/js/components/Herramientas/config-vuetables-client.js":
/*!********************************************************************************!*\
  !*** ./resources/assets/js/components/Herramientas/config-vuetables-client.js ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = function () {
  return {
    dateColumns: [],
    listColumns: {},
    datepickerOptions: {
      locale: {
        cancelLabel: 'Clear'
      }
    },
    datepickerPerColumnOptions: {},
    initialPage: 1,
    perPage: 10,
    perPageValues: [10, 25, 50, 100],
    groupBy: false,
    collapseGroups: false,
    destroyEventBus: false,
    sendEmptyFilters: false,
    params: {},
    sortable: true,
    filterable: true,
    groupMeta: [],
    initFilters: {},
    customFilters: [],
    templates: {},
    debounce: 250,
    dateFormat: "DD/MM/YYYY",
    dateFormatPerColumn: {},
    toMomentFormat: false,
    skin: 'table table-striped table-bordered table-hover table-sm',
    skinBusqueda: 'table table-striped table-bordered table-hover table-sm busqueda',
    columnsDisplay: {},
    columnsDropdown: false,
    texts: {
      count: "Mostrando del {from} al  {to} de {count} registros|{count} registros|Un registro",
      first: 'Primero',
      last: 'Ultimo',
      filter: "Buscar:",
      filterPlaceholder: "Buscar...",
      limit: "Registros:",
      page: "Pagina:",
      noResults: "No se encontraron registros",
      filterBy: "Filtrar por {column}",
      loading: 'Cargando...',
      defaultOption: 'Seleccionar {column}',
      columns: 'Columnas'
    },
    sortIcon: {
      base: 'fa',
      up: 'fa-chevron-up',
      down: 'fa-chevron-down',
      is: 'fa-sort'
    },
    sortingAlgorithm: function sortingAlgorithm(data, column) {
      return data.sort(this.getSortFn(column));
    },
    customSorting: {},
    multiSorting: {},
    clientMultiSorting: true,
    serverMultiSorting: false,
    filterByColumn: false,
    highlightMatches: false,
    orderBy: false,
    descOrderColumns: [],
    footerHeadings: false,
    headings: {},
    headingsTooltips: {},
    pagination: {
      dropdown: false,
      chunk: 10,
      edge: false,
      align: 'center',
      nav: 'fixed'
    },
    childRow: false,
    childRowTogglerFirst: true,
    uniqueKey: 'id',
    requestFunction: false,
    requestAdapter: function requestAdapter(data) {
      return data;
    },
    responseAdapter: function responseAdapter(resp) {
      var data = this.getResponseData(resp);
      return {
        data: data.data,
        count: data.count
      };
    },
    requestKeys: {
      query: 'query',
      limit: 'limit',
      orderBy: 'orderBy',
      ascending: 'ascending',
      page: 'page',
      byColumn: 'byColumn'
    },
    rowClassCallback: false,
    preserveState: false,
    saveState: false,
    storage: 'local',
    columnsClasses: {},
    columnCondicion: [{
      id: 1,
      text: 'Activo'
    }, {
      id: 0,
      text: 'Desactivado'
    }]
  };
};

/***/ }),

/***/ "./resources/assets/js/components/Herramientas/utilerias.js":
/*!******************************************************************!*\
  !*** ./resources/assets/js/components/Herramientas/utilerias.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  resetObject: function resetObject(obj) {
    for (var key in obj) {
      if (typeof obj[key] === 'string') obj[key] = '';else if (typeof obj[key] === 'number') obj[key] = 0;else if (_typeof(obj[key]) === undefined) obj[key] = null;else if (_typeof(obj[key]) === 'object') obj[key] = {};
    }
  },
  getCRUD: function getCRUD(ruta) {
    var formData = new FormData();
    formData.append('ruta', ruta);
    formData.append('identificador', 1);
    var permisos = {
      Create: false,
      Read: false,
      Update: false,
      Delete: false,
      Download: false,
      Upload: false
    };
    axios.post('/CRUD', formData).then(function (response) {
      for (var i = 0; i < response.data.length; i++) {
        if (response.data[i].control_id == 1) {
          permisos.Create = true;
        }
        if (response.data[i].control_id == 2) {
          permisos.Read = true;
        }
        if (response.data[i].control_id == 3) {
          permisos.Update = true;
        }
        if (response.data[i].control_id == 4) {
          permisos.Delete = true;
        }
        if (response.data[i].control_id == 5) {
          permisos.Download = true;
        }
        if (response.data[i].control_id == 6) {
          permisos.Upload = true;
        }
      }
    })["catch"](function (error) {
      console.log(error);
    });
    return permisos;
  }
});

/***/ }),

/***/ "./resources/assets/js/components/Trafico/AsignacionVehiculo.vue":
/*!***********************************************************************!*\
  !*** ./resources/assets/js/components/Trafico/AsignacionVehiculo.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AsignacionVehiculo_vue_vue_type_template_id_34cd0281__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsignacionVehiculo.vue?vue&type=template&id=34cd0281 */ "./resources/assets/js/components/Trafico/AsignacionVehiculo.vue?vue&type=template&id=34cd0281");
/* harmony import */ var _AsignacionVehiculo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsignacionVehiculo.vue?vue&type=script&lang=js */ "./resources/assets/js/components/Trafico/AsignacionVehiculo.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AsignacionVehiculo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _AsignacionVehiculo_vue_vue_type_template_id_34cd0281__WEBPACK_IMPORTED_MODULE_0__.render,
  _AsignacionVehiculo_vue_vue_type_template_id_34cd0281__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/Trafico/AsignacionVehiculo.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Trafico/AsignacionVehiculo.vue?vue&type=script&lang=js":
/*!***********************************************************************************************!*\
  !*** ./resources/assets/js/components/Trafico/AsignacionVehiculo.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AsignacionVehiculo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AsignacionVehiculo.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/AsignacionVehiculo.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AsignacionVehiculo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Trafico/AsignacionVehiculo.vue?vue&type=template&id=34cd0281":
/*!*****************************************************************************************************!*\
  !*** ./resources/assets/js/components/Trafico/AsignacionVehiculo.vue?vue&type=template&id=34cd0281 ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AsignacionVehiculo_vue_vue_type_template_id_34cd0281__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AsignacionVehiculo_vue_vue_type_template_id_34cd0281__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AsignacionVehiculo_vue_vue_type_template_id_34cd0281__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AsignacionVehiculo.vue?vue&type=template&id=34cd0281 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/AsignacionVehiculo.vue?vue&type=template&id=34cd0281");


/***/ }),

/***/ "./resources/assets/js/components/Trafico/Conductores.vue":
/*!****************************************************************!*\
  !*** ./resources/assets/js/components/Trafico/Conductores.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Conductores_vue_vue_type_template_id_2edfa191__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Conductores.vue?vue&type=template&id=2edfa191 */ "./resources/assets/js/components/Trafico/Conductores.vue?vue&type=template&id=2edfa191");
/* harmony import */ var _Conductores_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Conductores.vue?vue&type=script&lang=js */ "./resources/assets/js/components/Trafico/Conductores.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Conductores_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Conductores_vue_vue_type_template_id_2edfa191__WEBPACK_IMPORTED_MODULE_0__.render,
  _Conductores_vue_vue_type_template_id_2edfa191__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/Trafico/Conductores.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Trafico/Conductores.vue?vue&type=script&lang=js":
/*!****************************************************************************************!*\
  !*** ./resources/assets/js/components/Trafico/Conductores.vue?vue&type=script&lang=js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Conductores_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Conductores.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/Conductores.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Conductores_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Trafico/Conductores.vue?vue&type=template&id=2edfa191":
/*!**********************************************************************************************!*\
  !*** ./resources/assets/js/components/Trafico/Conductores.vue?vue&type=template&id=2edfa191 ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Conductores_vue_vue_type_template_id_2edfa191__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Conductores_vue_vue_type_template_id_2edfa191__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Conductores_vue_vue_type_template_id_2edfa191__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Conductores.vue?vue&type=template&id=2edfa191 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/Conductores.vue?vue&type=template&id=2edfa191");


/***/ }),

/***/ "./resources/assets/js/components/Trafico/EntregaRecepcion.vue":
/*!*********************************************************************!*\
  !*** ./resources/assets/js/components/Trafico/EntregaRecepcion.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EntregaRecepcion_vue_vue_type_template_id_89fb6348__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EntregaRecepcion.vue?vue&type=template&id=89fb6348 */ "./resources/assets/js/components/Trafico/EntregaRecepcion.vue?vue&type=template&id=89fb6348");
/* harmony import */ var _EntregaRecepcion_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EntregaRecepcion.vue?vue&type=script&lang=js */ "./resources/assets/js/components/Trafico/EntregaRecepcion.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EntregaRecepcion_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _EntregaRecepcion_vue_vue_type_template_id_89fb6348__WEBPACK_IMPORTED_MODULE_0__.render,
  _EntregaRecepcion_vue_vue_type_template_id_89fb6348__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/Trafico/EntregaRecepcion.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Trafico/EntregaRecepcion.vue?vue&type=script&lang=js":
/*!*********************************************************************************************!*\
  !*** ./resources/assets/js/components/Trafico/EntregaRecepcion.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EntregaRecepcion_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EntregaRecepcion.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/EntregaRecepcion.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EntregaRecepcion_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Trafico/EntregaRecepcion.vue?vue&type=template&id=89fb6348":
/*!***************************************************************************************************!*\
  !*** ./resources/assets/js/components/Trafico/EntregaRecepcion.vue?vue&type=template&id=89fb6348 ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EntregaRecepcion_vue_vue_type_template_id_89fb6348__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EntregaRecepcion_vue_vue_type_template_id_89fb6348__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EntregaRecepcion_vue_vue_type_template_id_89fb6348__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EntregaRecepcion.vue?vue&type=template&id=89fb6348 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/EntregaRecepcion.vue?vue&type=template&id=89fb6348");


/***/ }),

/***/ "./resources/assets/js/components/Trafico/Mantenimiento/Mantenimiento.vue":
/*!********************************************************************************!*\
  !*** ./resources/assets/js/components/Trafico/Mantenimiento/Mantenimiento.vue ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Mantenimiento_vue_vue_type_template_id_e6732ace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Mantenimiento.vue?vue&type=template&id=e6732ace */ "./resources/assets/js/components/Trafico/Mantenimiento/Mantenimiento.vue?vue&type=template&id=e6732ace");
/* harmony import */ var _Mantenimiento_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Mantenimiento.vue?vue&type=script&lang=js */ "./resources/assets/js/components/Trafico/Mantenimiento/Mantenimiento.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Mantenimiento_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Mantenimiento_vue_vue_type_template_id_e6732ace__WEBPACK_IMPORTED_MODULE_0__.render,
  _Mantenimiento_vue_vue_type_template_id_e6732ace__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/Trafico/Mantenimiento/Mantenimiento.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Trafico/Mantenimiento/Mantenimiento.vue?vue&type=script&lang=js":
/*!********************************************************************************************************!*\
  !*** ./resources/assets/js/components/Trafico/Mantenimiento/Mantenimiento.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Mantenimiento_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Mantenimiento.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/Mantenimiento/Mantenimiento.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Mantenimiento_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Trafico/Mantenimiento/Mantenimiento.vue?vue&type=template&id=e6732ace":
/*!**************************************************************************************************************!*\
  !*** ./resources/assets/js/components/Trafico/Mantenimiento/Mantenimiento.vue?vue&type=template&id=e6732ace ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Mantenimiento_vue_vue_type_template_id_e6732ace__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Mantenimiento_vue_vue_type_template_id_e6732ace__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Mantenimiento_vue_vue_type_template_id_e6732ace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Mantenimiento.vue?vue&type=template&id=e6732ace */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/Mantenimiento/Mantenimiento.vue?vue&type=template&id=e6732ace");


/***/ }),

/***/ "./resources/assets/js/components/Trafico/ProveedoresVehiculos.vue":
/*!*************************************************************************!*\
  !*** ./resources/assets/js/components/Trafico/ProveedoresVehiculos.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProveedoresVehiculos_vue_vue_type_template_id_7e542eb6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProveedoresVehiculos.vue?vue&type=template&id=7e542eb6 */ "./resources/assets/js/components/Trafico/ProveedoresVehiculos.vue?vue&type=template&id=7e542eb6");
/* harmony import */ var _ProveedoresVehiculos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProveedoresVehiculos.vue?vue&type=script&lang=js */ "./resources/assets/js/components/Trafico/ProveedoresVehiculos.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProveedoresVehiculos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProveedoresVehiculos_vue_vue_type_template_id_7e542eb6__WEBPACK_IMPORTED_MODULE_0__.render,
  _ProveedoresVehiculos_vue_vue_type_template_id_7e542eb6__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/Trafico/ProveedoresVehiculos.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Trafico/ProveedoresVehiculos.vue?vue&type=script&lang=js":
/*!*************************************************************************************************!*\
  !*** ./resources/assets/js/components/Trafico/ProveedoresVehiculos.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProveedoresVehiculos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProveedoresVehiculos.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/ProveedoresVehiculos.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProveedoresVehiculos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Trafico/ProveedoresVehiculos.vue?vue&type=template&id=7e542eb6":
/*!*******************************************************************************************************!*\
  !*** ./resources/assets/js/components/Trafico/ProveedoresVehiculos.vue?vue&type=template&id=7e542eb6 ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProveedoresVehiculos_vue_vue_type_template_id_7e542eb6__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProveedoresVehiculos_vue_vue_type_template_id_7e542eb6__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProveedoresVehiculos_vue_vue_type_template_id_7e542eb6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProveedoresVehiculos.vue?vue&type=template&id=7e542eb6 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/ProveedoresVehiculos.vue?vue&type=template&id=7e542eb6");


/***/ }),

/***/ "./resources/assets/js/components/Trafico/Reportes/Combustibles.vue":
/*!**************************************************************************!*\
  !*** ./resources/assets/js/components/Trafico/Reportes/Combustibles.vue ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Combustibles_vue_vue_type_template_id_0b777396__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Combustibles.vue?vue&type=template&id=0b777396 */ "./resources/assets/js/components/Trafico/Reportes/Combustibles.vue?vue&type=template&id=0b777396");
/* harmony import */ var _Combustibles_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Combustibles.vue?vue&type=script&lang=js */ "./resources/assets/js/components/Trafico/Reportes/Combustibles.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Combustibles_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Combustibles_vue_vue_type_template_id_0b777396__WEBPACK_IMPORTED_MODULE_0__.render,
  _Combustibles_vue_vue_type_template_id_0b777396__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/Trafico/Reportes/Combustibles.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Trafico/Reportes/Combustibles.vue?vue&type=script&lang=js":
/*!**************************************************************************************************!*\
  !*** ./resources/assets/js/components/Trafico/Reportes/Combustibles.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Combustibles_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Combustibles.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/Reportes/Combustibles.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Combustibles_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Trafico/Reportes/Combustibles.vue?vue&type=template&id=0b777396":
/*!********************************************************************************************************!*\
  !*** ./resources/assets/js/components/Trafico/Reportes/Combustibles.vue?vue&type=template&id=0b777396 ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Combustibles_vue_vue_type_template_id_0b777396__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Combustibles_vue_vue_type_template_id_0b777396__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Combustibles_vue_vue_type_template_id_0b777396__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Combustibles.vue?vue&type=template&id=0b777396 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/Reportes/Combustibles.vue?vue&type=template&id=0b777396");


/***/ }),

/***/ "./resources/assets/js/components/Trafico/Servicios/MantenimientoAnual.vue":
/*!*********************************************************************************!*\
  !*** ./resources/assets/js/components/Trafico/Servicios/MantenimientoAnual.vue ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MantenimientoAnual_vue_vue_type_template_id_95fda89a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MantenimientoAnual.vue?vue&type=template&id=95fda89a */ "./resources/assets/js/components/Trafico/Servicios/MantenimientoAnual.vue?vue&type=template&id=95fda89a");
/* harmony import */ var _MantenimientoAnual_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MantenimientoAnual.vue?vue&type=script&lang=js */ "./resources/assets/js/components/Trafico/Servicios/MantenimientoAnual.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MantenimientoAnual_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _MantenimientoAnual_vue_vue_type_template_id_95fda89a__WEBPACK_IMPORTED_MODULE_0__.render,
  _MantenimientoAnual_vue_vue_type_template_id_95fda89a__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/Trafico/Servicios/MantenimientoAnual.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Trafico/Servicios/MantenimientoAnual.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************!*\
  !*** ./resources/assets/js/components/Trafico/Servicios/MantenimientoAnual.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MantenimientoAnual_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MantenimientoAnual.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/Servicios/MantenimientoAnual.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MantenimientoAnual_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Trafico/Servicios/MantenimientoAnual.vue?vue&type=template&id=95fda89a":
/*!***************************************************************************************************************!*\
  !*** ./resources/assets/js/components/Trafico/Servicios/MantenimientoAnual.vue?vue&type=template&id=95fda89a ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MantenimientoAnual_vue_vue_type_template_id_95fda89a__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MantenimientoAnual_vue_vue_type_template_id_95fda89a__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MantenimientoAnual_vue_vue_type_template_id_95fda89a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MantenimientoAnual.vue?vue&type=template&id=95fda89a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/Servicios/MantenimientoAnual.vue?vue&type=template&id=95fda89a");


/***/ }),

/***/ "./resources/assets/js/components/Trafico/Solicitud/Solicitud.vue":
/*!************************************************************************!*\
  !*** ./resources/assets/js/components/Trafico/Solicitud/Solicitud.vue ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Solicitud_vue_vue_type_template_id_27586956__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Solicitud.vue?vue&type=template&id=27586956 */ "./resources/assets/js/components/Trafico/Solicitud/Solicitud.vue?vue&type=template&id=27586956");
/* harmony import */ var _Solicitud_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Solicitud.vue?vue&type=script&lang=js */ "./resources/assets/js/components/Trafico/Solicitud/Solicitud.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Solicitud_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Solicitud_vue_vue_type_template_id_27586956__WEBPACK_IMPORTED_MODULE_0__.render,
  _Solicitud_vue_vue_type_template_id_27586956__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/Trafico/Solicitud/Solicitud.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Trafico/Solicitud/Solicitud.vue?vue&type=script&lang=js":
/*!************************************************************************************************!*\
  !*** ./resources/assets/js/components/Trafico/Solicitud/Solicitud.vue?vue&type=script&lang=js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Solicitud_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Solicitud.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/Solicitud/Solicitud.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Solicitud_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Trafico/Solicitud/Solicitud.vue?vue&type=template&id=27586956":
/*!******************************************************************************************************!*\
  !*** ./resources/assets/js/components/Trafico/Solicitud/Solicitud.vue?vue&type=template&id=27586956 ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Solicitud_vue_vue_type_template_id_27586956__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Solicitud_vue_vue_type_template_id_27586956__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Solicitud_vue_vue_type_template_id_27586956__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Solicitud.vue?vue&type=template&id=27586956 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/Solicitud/Solicitud.vue?vue&type=template&id=27586956");


/***/ }),

/***/ "./resources/assets/js/components/Trafico/TipoServicio.vue":
/*!*****************************************************************!*\
  !*** ./resources/assets/js/components/Trafico/TipoServicio.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TipoServicio_vue_vue_type_template_id_89b3fc44__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TipoServicio.vue?vue&type=template&id=89b3fc44 */ "./resources/assets/js/components/Trafico/TipoServicio.vue?vue&type=template&id=89b3fc44");
/* harmony import */ var _TipoServicio_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TipoServicio.vue?vue&type=script&lang=js */ "./resources/assets/js/components/Trafico/TipoServicio.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TipoServicio_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _TipoServicio_vue_vue_type_template_id_89b3fc44__WEBPACK_IMPORTED_MODULE_0__.render,
  _TipoServicio_vue_vue_type_template_id_89b3fc44__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/Trafico/TipoServicio.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Trafico/TipoServicio.vue?vue&type=script&lang=js":
/*!*****************************************************************************************!*\
  !*** ./resources/assets/js/components/Trafico/TipoServicio.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TipoServicio_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TipoServicio.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/TipoServicio.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TipoServicio_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Trafico/TipoServicio.vue?vue&type=template&id=89b3fc44":
/*!***********************************************************************************************!*\
  !*** ./resources/assets/js/components/Trafico/TipoServicio.vue?vue&type=template&id=89b3fc44 ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TipoServicio_vue_vue_type_template_id_89b3fc44__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TipoServicio_vue_vue_type_template_id_89b3fc44__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TipoServicio_vue_vue_type_template_id_89b3fc44__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TipoServicio.vue?vue&type=template&id=89b3fc44 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/TipoServicio.vue?vue&type=template&id=89b3fc44");


/***/ }),

/***/ "./resources/assets/js/components/Trafico/Unidades/DetalleUnidades.vue":
/*!*****************************************************************************!*\
  !*** ./resources/assets/js/components/Trafico/Unidades/DetalleUnidades.vue ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DetalleUnidades_vue_vue_type_template_id_5c0c7b26__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DetalleUnidades.vue?vue&type=template&id=5c0c7b26 */ "./resources/assets/js/components/Trafico/Unidades/DetalleUnidades.vue?vue&type=template&id=5c0c7b26");
/* harmony import */ var _DetalleUnidades_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DetalleUnidades.vue?vue&type=script&lang=js */ "./resources/assets/js/components/Trafico/Unidades/DetalleUnidades.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DetalleUnidades_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _DetalleUnidades_vue_vue_type_template_id_5c0c7b26__WEBPACK_IMPORTED_MODULE_0__.render,
  _DetalleUnidades_vue_vue_type_template_id_5c0c7b26__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/Trafico/Unidades/DetalleUnidades.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Trafico/Unidades/DetalleUnidades.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************!*\
  !*** ./resources/assets/js/components/Trafico/Unidades/DetalleUnidades.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetalleUnidades_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DetalleUnidades.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/Unidades/DetalleUnidades.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetalleUnidades_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Trafico/Unidades/DetalleUnidades.vue?vue&type=template&id=5c0c7b26":
/*!***********************************************************************************************************!*\
  !*** ./resources/assets/js/components/Trafico/Unidades/DetalleUnidades.vue?vue&type=template&id=5c0c7b26 ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DetalleUnidades_vue_vue_type_template_id_5c0c7b26__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DetalleUnidades_vue_vue_type_template_id_5c0c7b26__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DetalleUnidades_vue_vue_type_template_id_5c0c7b26__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DetalleUnidades.vue?vue&type=template&id=5c0c7b26 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/Unidades/DetalleUnidades.vue?vue&type=template&id=5c0c7b26");


/***/ }),

/***/ "./resources/assets/js/components/Trafico/Unidades/Poliza.vue":
/*!********************************************************************!*\
  !*** ./resources/assets/js/components/Trafico/Unidades/Poliza.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Poliza_vue_vue_type_template_id_4b4f2f6e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Poliza.vue?vue&type=template&id=4b4f2f6e */ "./resources/assets/js/components/Trafico/Unidades/Poliza.vue?vue&type=template&id=4b4f2f6e");
/* harmony import */ var _Poliza_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Poliza.vue?vue&type=script&lang=js */ "./resources/assets/js/components/Trafico/Unidades/Poliza.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Poliza_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Poliza_vue_vue_type_template_id_4b4f2f6e__WEBPACK_IMPORTED_MODULE_0__.render,
  _Poliza_vue_vue_type_template_id_4b4f2f6e__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/Trafico/Unidades/Poliza.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Trafico/Unidades/Poliza.vue?vue&type=script&lang=js":
/*!********************************************************************************************!*\
  !*** ./resources/assets/js/components/Trafico/Unidades/Poliza.vue?vue&type=script&lang=js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Poliza_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Poliza.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/Unidades/Poliza.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Poliza_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Trafico/Unidades/Poliza.vue?vue&type=template&id=4b4f2f6e":
/*!**************************************************************************************************!*\
  !*** ./resources/assets/js/components/Trafico/Unidades/Poliza.vue?vue&type=template&id=4b4f2f6e ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Poliza_vue_vue_type_template_id_4b4f2f6e__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Poliza_vue_vue_type_template_id_4b4f2f6e__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Poliza_vue_vue_type_template_id_4b4f2f6e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Poliza.vue?vue&type=template&id=4b4f2f6e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/Unidades/Poliza.vue?vue&type=template&id=4b4f2f6e");


/***/ }),

/***/ "./resources/assets/js/components/Trafico/Unidades/Servicio.vue":
/*!**********************************************************************!*\
  !*** ./resources/assets/js/components/Trafico/Unidades/Servicio.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Servicio_vue_vue_type_template_id_153b843c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Servicio.vue?vue&type=template&id=153b843c */ "./resources/assets/js/components/Trafico/Unidades/Servicio.vue?vue&type=template&id=153b843c");
/* harmony import */ var _Servicio_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Servicio.vue?vue&type=script&lang=js */ "./resources/assets/js/components/Trafico/Unidades/Servicio.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Servicio_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Servicio_vue_vue_type_template_id_153b843c__WEBPACK_IMPORTED_MODULE_0__.render,
  _Servicio_vue_vue_type_template_id_153b843c__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/Trafico/Unidades/Servicio.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Trafico/Unidades/Servicio.vue?vue&type=script&lang=js":
/*!**********************************************************************************************!*\
  !*** ./resources/assets/js/components/Trafico/Unidades/Servicio.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Servicio_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Servicio.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/Unidades/Servicio.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Servicio_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Trafico/Unidades/Servicio.vue?vue&type=template&id=153b843c":
/*!****************************************************************************************************!*\
  !*** ./resources/assets/js/components/Trafico/Unidades/Servicio.vue?vue&type=template&id=153b843c ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Servicio_vue_vue_type_template_id_153b843c__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Servicio_vue_vue_type_template_id_153b843c__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Servicio_vue_vue_type_template_id_153b843c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Servicio.vue?vue&type=template&id=153b843c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/Unidades/Servicio.vue?vue&type=template&id=153b843c");


/***/ }),

/***/ "./resources/assets/js/components/Trafico/Unidades/Tenencia.vue":
/*!**********************************************************************!*\
  !*** ./resources/assets/js/components/Trafico/Unidades/Tenencia.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Tenencia_vue_vue_type_template_id_79dc9d5b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tenencia.vue?vue&type=template&id=79dc9d5b */ "./resources/assets/js/components/Trafico/Unidades/Tenencia.vue?vue&type=template&id=79dc9d5b");
/* harmony import */ var _Tenencia_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tenencia.vue?vue&type=script&lang=js */ "./resources/assets/js/components/Trafico/Unidades/Tenencia.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Tenencia_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Tenencia_vue_vue_type_template_id_79dc9d5b__WEBPACK_IMPORTED_MODULE_0__.render,
  _Tenencia_vue_vue_type_template_id_79dc9d5b__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/Trafico/Unidades/Tenencia.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Trafico/Unidades/Tenencia.vue?vue&type=script&lang=js":
/*!**********************************************************************************************!*\
  !*** ./resources/assets/js/components/Trafico/Unidades/Tenencia.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tenencia_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Tenencia.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/Unidades/Tenencia.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tenencia_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Trafico/Unidades/Tenencia.vue?vue&type=template&id=79dc9d5b":
/*!****************************************************************************************************!*\
  !*** ./resources/assets/js/components/Trafico/Unidades/Tenencia.vue?vue&type=template&id=79dc9d5b ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Tenencia_vue_vue_type_template_id_79dc9d5b__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Tenencia_vue_vue_type_template_id_79dc9d5b__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Tenencia_vue_vue_type_template_id_79dc9d5b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Tenencia.vue?vue&type=template&id=79dc9d5b */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/Unidades/Tenencia.vue?vue&type=template&id=79dc9d5b");


/***/ }),

/***/ "./resources/assets/js/components/Trafico/Unidades/Unidades.vue":
/*!**********************************************************************!*\
  !*** ./resources/assets/js/components/Trafico/Unidades/Unidades.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Unidades_vue_vue_type_template_id_4c861f6b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Unidades.vue?vue&type=template&id=4c861f6b */ "./resources/assets/js/components/Trafico/Unidades/Unidades.vue?vue&type=template&id=4c861f6b");
/* harmony import */ var _Unidades_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Unidades.vue?vue&type=script&lang=js */ "./resources/assets/js/components/Trafico/Unidades/Unidades.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Unidades_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Unidades_vue_vue_type_template_id_4c861f6b__WEBPACK_IMPORTED_MODULE_0__.render,
  _Unidades_vue_vue_type_template_id_4c861f6b__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/Trafico/Unidades/Unidades.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Trafico/Unidades/Unidades.vue?vue&type=script&lang=js":
/*!**********************************************************************************************!*\
  !*** ./resources/assets/js/components/Trafico/Unidades/Unidades.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Unidades_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Unidades.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/Unidades/Unidades.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Unidades_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Trafico/Unidades/Unidades.vue?vue&type=template&id=4c861f6b":
/*!****************************************************************************************************!*\
  !*** ./resources/assets/js/components/Trafico/Unidades/Unidades.vue?vue&type=template&id=4c861f6b ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Unidades_vue_vue_type_template_id_4c861f6b__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Unidades_vue_vue_type_template_id_4c861f6b__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Unidades_vue_vue_type_template_id_4c861f6b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Unidades.vue?vue&type=template&id=4c861f6b */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/Unidades/Unidades.vue?vue&type=template&id=4c861f6b");


/***/ }),

/***/ "./resources/assets/js/components/Trafico/ValeResguardo.vue":
/*!******************************************************************!*\
  !*** ./resources/assets/js/components/Trafico/ValeResguardo.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ValeResguardo_vue_vue_type_template_id_4a946d02__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ValeResguardo.vue?vue&type=template&id=4a946d02 */ "./resources/assets/js/components/Trafico/ValeResguardo.vue?vue&type=template&id=4a946d02");
/* harmony import */ var _ValeResguardo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ValeResguardo.vue?vue&type=script&lang=js */ "./resources/assets/js/components/Trafico/ValeResguardo.vue?vue&type=script&lang=js");
/* harmony import */ var _ValeResguardo_vue_vue_type_style_index_0_id_4a946d02_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ValeResguardo.vue?vue&type=style&index=0&id=4a946d02&lang=css */ "./resources/assets/js/components/Trafico/ValeResguardo.vue?vue&type=style&index=0&id=4a946d02&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ValeResguardo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ValeResguardo_vue_vue_type_template_id_4a946d02__WEBPACK_IMPORTED_MODULE_0__.render,
  _ValeResguardo_vue_vue_type_template_id_4a946d02__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/Trafico/ValeResguardo.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Trafico/ValeResguardo.vue?vue&type=script&lang=js":
/*!******************************************************************************************!*\
  !*** ./resources/assets/js/components/Trafico/ValeResguardo.vue?vue&type=script&lang=js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ValeResguardo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ValeResguardo.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/ValeResguardo.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ValeResguardo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Trafico/ValeResguardo.vue?vue&type=style&index=0&id=4a946d02&lang=css":
/*!**************************************************************************************************************!*\
  !*** ./resources/assets/js/components/Trafico/ValeResguardo.vue?vue&type=style&index=0&id=4a946d02&lang=css ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ValeResguardo_vue_vue_type_style_index_0_id_4a946d02_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ValeResguardo.vue?vue&type=style&index=0&id=4a946d02&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/ValeResguardo.vue?vue&type=style&index=0&id=4a946d02&lang=css");


/***/ }),

/***/ "./resources/assets/js/components/Trafico/ValeResguardo.vue?vue&type=template&id=4a946d02":
/*!************************************************************************************************!*\
  !*** ./resources/assets/js/components/Trafico/ValeResguardo.vue?vue&type=template&id=4a946d02 ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ValeResguardo_vue_vue_type_template_id_4a946d02__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ValeResguardo_vue_vue_type_template_id_4a946d02__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ValeResguardo_vue_vue_type_template_id_4a946d02__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ValeResguardo.vue?vue&type=template&id=4a946d02 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/ValeResguardo.vue?vue&type=template&id=4a946d02");


/***/ }),

/***/ "./resources/assets/js/components/Trafico/Vehiculos.vue":
/*!**************************************************************!*\
  !*** ./resources/assets/js/components/Trafico/Vehiculos.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Vehiculos_vue_vue_type_template_id_2c9f14aa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vehiculos.vue?vue&type=template&id=2c9f14aa */ "./resources/assets/js/components/Trafico/Vehiculos.vue?vue&type=template&id=2c9f14aa");
/* harmony import */ var _Vehiculos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Vehiculos.vue?vue&type=script&lang=js */ "./resources/assets/js/components/Trafico/Vehiculos.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Vehiculos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Vehiculos_vue_vue_type_template_id_2c9f14aa__WEBPACK_IMPORTED_MODULE_0__.render,
  _Vehiculos_vue_vue_type_template_id_2c9f14aa__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/Trafico/Vehiculos.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Trafico/Vehiculos.vue?vue&type=script&lang=js":
/*!**************************************************************************************!*\
  !*** ./resources/assets/js/components/Trafico/Vehiculos.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Vehiculos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Vehiculos.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/Vehiculos.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Vehiculos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Trafico/Vehiculos.vue?vue&type=template&id=2c9f14aa":
/*!********************************************************************************************!*\
  !*** ./resources/assets/js/components/Trafico/Vehiculos.vue?vue&type=template&id=2c9f14aa ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Vehiculos_vue_vue_type_template_id_2c9f14aa__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Vehiculos_vue_vue_type_template_id_2c9f14aa__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Vehiculos_vue_vue_type_template_id_2c9f14aa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Vehiculos.vue?vue&type=template&id=2c9f14aa */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/Vehiculos.vue?vue&type=template&id=2c9f14aa");


/***/ }),

/***/ "./resources/assets/js/components/Trafico/Verificacion.vue":
/*!*****************************************************************!*\
  !*** ./resources/assets/js/components/Trafico/Verificacion.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Verificacion_vue_vue_type_template_id_f0abaf00__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Verificacion.vue?vue&type=template&id=f0abaf00 */ "./resources/assets/js/components/Trafico/Verificacion.vue?vue&type=template&id=f0abaf00");
/* harmony import */ var _Verificacion_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Verificacion.vue?vue&type=script&lang=js */ "./resources/assets/js/components/Trafico/Verificacion.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Verificacion_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Verificacion_vue_vue_type_template_id_f0abaf00__WEBPACK_IMPORTED_MODULE_0__.render,
  _Verificacion_vue_vue_type_template_id_f0abaf00__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/Trafico/Verificacion.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Trafico/Verificacion.vue?vue&type=script&lang=js":
/*!*****************************************************************************************!*\
  !*** ./resources/assets/js/components/Trafico/Verificacion.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Verificacion_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Verificacion.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/Verificacion.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Verificacion_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Trafico/Verificacion.vue?vue&type=template&id=f0abaf00":
/*!***********************************************************************************************!*\
  !*** ./resources/assets/js/components/Trafico/Verificacion.vue?vue&type=template&id=f0abaf00 ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Verificacion_vue_vue_type_template_id_f0abaf00__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Verificacion_vue_vue_type_template_id_f0abaf00__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Verificacion_vue_vue_type_template_id_f0abaf00__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Verificacion.vue?vue&type=template&id=f0abaf00 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Trafico/Verificacion.vue?vue&type=template&id=f0abaf00");


/***/ })

}]);