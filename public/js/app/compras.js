<<<<<<< HEAD
(self["webpackChunk"] = self["webpackChunk"] || []).push([["compras"],{

<<<<<<< HEAD
=======
/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Components/ModalComponent.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Components/ModalComponent.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    showModal: Boolean,
    loading: Boolean
  },
  data: function data() {
    return {
      selectedFile: null,
      resetKey: 0 // para resetear input file
    };
  },
  methods: {
    triggerFile: function triggerFile() {
      this.$refs.fileInput.click();
    },
    handleFileSelect: function handleFileSelect(event) {
      var file = event.target.files[0];
      this.selectedFile = file;
    },
    upload: function upload() {
      if (!this.selectedFile) return;
      this.$emit("set-loading", true);
      this.$emit("file-upload", this.selectedFile);
    },
    closeModal: function closeModal() {
      this.selectedFile = null;
      this.resetKey++; // 🔥 reinicia el input file
      this.$emit("close"); // 🔥 cierra modal en parent
    }
  }
});

/***/ }),

>>>>>>> develop
/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Catalogos/EstadoCompras.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Catalogos/EstadoCompras.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************/
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
      url: '/estadocompra',
      isLoading_obtener: false,
      edoCompra: {
        id: 0,
        nombre: ''
      },
      modal: 0,
      tituloModal: '',
      tipoAccion: 0,
      isLoading: false,
      columns_estados: ['id', 'nombre'],
      list_estados: [],
      options_estados: {
        headings: {
          'id': 'Acciones',
          'nombre': 'Nombre'
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
  computed: {},
  methods: {
    /**
     * Obtener los estados de compra
     */
    ObtenerEstados: function ObtenerEstados() {
      var _this = this;
      this.isLoading_obtener = true;
      axios.get(this.url).then(function (res) {
        _this.isLoading_obtener = false;
        if (res.data.status) {
          _this.list_estados = res.data.estados;
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    /**
     * Guardar estado de compra
     */
    guardaredoCompra: function guardaredoCompra(nuevo) {
      var _this2 = this;
      this.$validator.validate().then(function (result) {
        if (result) {
          _this2.isLoading = true;
          axios({
            method: nuevo ? 'POST' : 'PUT',
            url: nuevo ? _this2.url : _this2.url + '/' + _this2.id,
            data: {
              'id': _this2.edoCompra.id,
              'nombre': _this2.edoCompra.nombre
            }
          }).then(function (res) {
            _this2.isLoading = false;
            if (res.data.status) {
              _this2.cerrarModal();
              _this2.ObtenerEstados();
              if (nuevo) {
                toastr.success('Estado Agregado Correctamente');
              } else {
                toastr.success('Estado Actualizado Correctamente');
              }
            } else {
              toastr.error(res.data.mensaje);
            }
          });
        }
      });
    },
    /**
     * Cerrar modal
     */
    cerrarModal: function cerrarModal() {
      this.modal = 0;
      this.tituloModal = '';
      this.edoCompra = {};
    },
    /**
     * Abrir modal para registro/actualización
     */
    abrirModal: function abrirModal() {
      var nuevo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      this.modal = 1;
      if (nuevo) {
        this.tipoAccion = 1;
        this.tituloModal = 'Registrar Estado';
      } else {
        this.tipoAccion = 2;
        this.tituloModal = 'Actualizar Estado';
        this.edoCompra.id = data['id'];
        this.edoCompra.nombre = data['nombre'];
      }
    }
  },
  mounted: function mounted() {
    this.ObtenerEstados();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Catalogos/MttoVehicular.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Catalogos/MttoVehicular.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************/
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
      url: '/catmantenimientovehiculos',
      desabilitado: 0,
      catalogo: {
        id: 0,
        descripcion: '',
        codigo: '',
        marca: '',
        comentario: ''
      },
      centro_costo: [],
      modal: 0,
      tituloModal: '',
      tipoAccion: 0,
      isLoading: false,
      isLoading_servicios: false,
      columns_servicios: ['id', 'descripcion', 'codigo', 'marca', 'comentario'],
      list_servicios: [],
      options_servicios: {
        headings: {
          'id': 'Acción',
          'descripcion': 'Descripción'
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
  computed: {},
  methods: {
    /**
     * Obtener todos los servicios registrados
     */
    ObtenerServicios: function ObtenerServicios() {
      var _this = this;
      this.isLoading_servicios = true;
      axios.get(this.url).then(function (res) {
        _this.isLoading_servicios = false;
        if (res.data.status) {
          _this.list_servicios = res.data.servicios;
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    /**
     * Registrar o actualizar servicio 
     */
    guardarServicio: function guardarServicio(nuevo) {
      var _this2 = this;
      this.$validator.validate().then(function (result) {
        if (result) {
          _this2.isLoading = true;
          axios({
            method: nuevo ? 'POST' : 'PUT',
            url: nuevo ? _this2.url : _this2.url + '/' + _this2.id,
            data: {
              'id': _this2.catalogo.id,
              'descripcion': _this2.catalogo.descripcion,
              'codigo': _this2.catalogo.codigo,
              'marca': _this2.catalogo.marca,
              'comentario': _this2.catalogo.comentario
            }
          }).then(function (res) {
            _this2.isLoading = false;
            if (res.data.status) {
              _this2.cerrarModal();
              _this2.ObtenerServicios();
              if (nuevo) {
                toastr.success('Servicio Agregado Correctamente');
              } else {
                toastr.success('Servicio Actualizado Correctamente');
              }
            } else {
              toastr.error(res.data.mensaje);
            }
          });
        }
      });
    },
    /**
     * Cerrar modal de registro/actualización
     */
    cerrarModal: function cerrarModal() {
      this.modal = 0;
      this.tituloModal = '';
      _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.catalogo);
    },
    /**
     * Abrir modal para registro/actualización del servicio 
     */
    abrirModal: function abrirModal() {
      var nuevo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      this.modal = 1;
      if (nuevo) {
        this.tituloModal = 'Registrar Catalogo';
        this.tipoAccion = 1;
      } else {
        this.tituloModal = 'Actualizar Catalogo';
        this.catalogo.id = data['id'];
        this.tipoAccion = 2;
        this.catalogo.descripcion = data['descripcion'];
        this.catalogo.codigo = data['codigo'];
        this.catalogo.marca = data['marca'];
        this.catalogo.comentario = data['comentario'];
      }
    }
  },
  mounted: function mounted() {
    this.ObtenerServicios();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Catalogos/Servicios.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Catalogos/Servicios.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************/
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
      url: '/catservicios',
      desabilitado: 0,
      servicio: {
        id: 0,
        nombre_servicio: '',
        proveedor_marca: '',
        unidad_medida: 'Servicio'
      },
      modal: 0,
      tituloModal: '',
      tipoAccion: 0,
      isLoading: false,
      isLoading_servicios: false,
      columns: ['id', 'nombre_servicio', 'proveedor_marca', 'unidad_medida'],
      list_servicios: [],
      options: {
        headings: {
          'id': 'Acción',
          'nombre_servicio': 'Nombre del Servicio',
          'proveedor_marca': 'Marca/Servicio',
          'unidad_medida': 'Unidad de Medida'
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
  computed: {},
  methods: {
    /**
     * Obtener todos los servicios
     */
    ObtenerServicios: function ObtenerServicios() {
      var _this = this;
      this.isLoading_servicios = true;
      axios.get(this.url).then(function (res) {
        _this.isLoading_servicios = false;
        if (res.data.status) {
          _this.list_servicios = res.data.servicios;
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    /**
     * Registrar o actualizar el servicio
     */
    guardarServicio: function guardarServicio(nuevo) {
      var _this2 = this;
      this.$validator.validate().then(function (result) {
        if (result) {
          _this2.isLoading = true;
          axios({
            method: nuevo ? 'POST' : 'PUT',
            url: nuevo ? _this2.url : _this2.url + '/' + _this2.id,
            data: {
              'id': _this2.servicio.id,
              'nombre_servicio': _this2.servicio.nombre_servicio,
              'proveedor_marca': _this2.servicio.proveedor_marca,
              'unidad_medida': _this2.servicio.unidad_medida
            }
          }).then(function (res) {
            _this2.isLoading = false;
            if (res.data.status) {
              _this2.cerrarModal();
              _this2.ObtenerServicios();
              if (nuevo) {
                toastr.success('Servicio Agregado Correctamente');
              } else {
                toastr.success('Servicio Actualizado Correctamente');
              }
            } else {
              toastr.error(res.data.mensaje);
            }
          });
        }
      });
    },
    /**
     * Cerrar modal
     */
    cerrarModal: function cerrarModal() {
      this.modal = 0;
      this.tituloModal = '';
      _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.servicio);
    },
    /**
     * Abrir modal para registro/actualización del servicio
     */
    abrirModal: function abrirModal() {
      var nuevo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      this.modal = 1;
      if (nuevo) {
        this.tipoAccion = 1;
        this.tituloModal = 'Registrar Servicio';
        this.servicio.unidad_medida = 'Servicio';
      } else {
        this.tipoAccion = 2;
        this.tituloModal = 'Actualizar Servicio';
        this.servicio.id = data['id'];
        this.servicio.nombre_servicio = data['nombre_servicio'];
        this.servicio.proveedor_marca = data['proveedor_marca'];
        this.servicio.unidad_medida = data['unidad_medida'];
      }
    }
  },
  mounted: function mounted() {
    this.ObtenerServicios();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Compra/CardPrincipal.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Compra/CardPrincipal.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Herramientas/utilerias.js */ "./resources/assets/js/components/Herramientas/utilerias.js");
var _this = undefined;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var ModalImpuestos = function ModalImpuestos(r) {
  return __webpack_require__.e(/*! require.ensure | compras */ "compras").then((function () {
    return r(__webpack_require__(/*! ./ModalImpuestos.vue */ "./resources/assets/js/components/Compras/Compra/ModalImpuestos.vue"));
  }).bind(null, __webpack_require__))['catch'](__webpack_require__.oe);
};
var Partidas = function Partidas(r) {
  return __webpack_require__.e(/*! require.ensure | compras */ "compras").then((function () {
    return r(__webpack_require__(/*! ./Partidas.vue */ "./resources/assets/js/components/Compras/Compra/Partidas.vue"));
  }).bind(null, __webpack_require__))['catch'](__webpack_require__.oe);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return _defineProperty(_defineProperty(_defineProperty(_defineProperty({
      listaPeriodoEntrega: [{
        id: 1,
        name: '1 día'
      }, {
        id: 2,
        name: '2 días'
      }, {
        id: 3,
        name: '3 días'
      }, {
        id: 4,
        name: '4 días'
      }, {
        id: 5,
        name: '5 días'
      }, {
        id: 6,
        name: '6 días'
      }, {
        id: 7,
        name: '1 semana'
      }, {
        id: 8,
        name: '2 semanas'
      }, {
        id: 9,
        name: '3 semanas'
      }, {
        id: 10,
        name: '4 semanas'
      }, {
        id: 11,
        name: '5 semanas'
      }, {
        id: 12,
        name: '6 semanas'
      }, {
        id: 13,
        name: '7 semanas'
      }, {
        id: 14,
        name: '8 semanas'
      }, {
        id: 15,
        name: '9 semanas'
      }, {
        id: 16,
        name: '10 semanas'
      }, {
        id: 17,
        name: '11 semanas'
      }, {
        id: 18,
        name: '12 semanas'
      }, {
        id: 19,
        name: '13 semanas'
      }, {
        id: 20,
        name: '14 semanas'
      }, {
        id: 21,
        name: '15 semanas'
      }, {
        id: 22,
        name: '16 semanas'
      }, {
        id: 23,
        name: '17 semanas'
      }, {
        id: 24,
        name: '18 semanas'
      }, {
        id: 25,
        name: '19 semanas'
      }, {
        id: 26,
        name: '20 semanas'
      }, {
        id: 27,
        name: '21 semanas'
      }, {
        id: 28,
        name: '22 semanas'
      }, {
        id: 29,
        name: '23 semanas'
      }, {
        id: 30,
        name: '24 semanas'
      }, {
        id: 31,
        name: '25 semanas'
      }, {
        id: 32,
        name: '26 semanas'
      }, {
        id: 33,
        name: '27 semanas'
      }, {
        id: 34,
        name: '28 semanas'
      }, {
        id: 35,
        name: '29 semanas'
      }, {
        id: 36,
        name: '30 semanas'
      }, {
        id: 37,
        name: '31 semanas'
      }, {
        id: 38,
        name: '32 semanas'
      }, {
        id: 39,
        name: '33 semanas'
      }, {
        id: 40,
        name: '34 semanas'
      }, {
        id: 41,
        name: '35 semanas'
      }, {
        id: 42,
        name: '36 semanas'
      }, {
        id: 43,
        name: '37 semanas'
      }, {
        id: 44,
        name: '38 semanas'
      }, {
        id: 45,
        name: '39 semanas'
      }, {
        id: 46,
        name: '40 semanas'
      }],
      preq: {
        cotizacionre: '',
        cotizacionreid: ''
      },
      mostrar: 0,
      getDoc: false,
      upload: false,
      isLoading: false,
      widgets: {
        modalimpuestos: false
      },
      datosBancarios: [],
      selected: [],
      listImpuestos: [],
      conrequisicion: 0,
      asignacion_costos: 0,
      enabledb: true,
      compra: {
        id: 0,
        transferencia: '',
        cuenta: '',
        folio: '',
        condicion: 0,
        ordenes_formato: '',
        condicion_pago: '',
        periodo_entrega: '',
        fecha_orden: '',
        lugar_entrega: '',
        observaciones: '',
        total: '',
        tipo_cambio: 0,
        moneda: '',
        referencia: '',
        cie: '',
        sucursal: '',
        titular: '',
        proveedore_id: '',
        cotizacione_id: '',
        estado_id: '',
        elabora_empleado_id: '',
        autoriza_empleado_id: '',
        rango_dias: 0,
        pagos: 0,
        descuento: 0,
        proyecto_id: '',
        comentario_condicion_pago: '',
        fecha_probable_pago: '',
        prioridad: '',
        nombre_categoria: '',
        proveedore_csct_id: ''
      },
      nombre_categoria: '',
      tituloModal: '',
      Metodo: '',
      tipoAccion: 0,
      listaProvedores: [],
      listaProvedores_CSCT: [],
      listaCotizaciones: [],
      listaEmpleados: [],
      listaEmpleados_elabora: [],
      listaProyectos: [],
      listaCondicionPago: [],
      tableData: [],
      mostrareinpuesto: 0,
      nuevo: null,
      ClassL_a: 'btn btn-info',
      BtnL_a: 'Actualizar',
      BtnL_a2: 'Subir Archivo'
    }, "Metodo", ''), "array_asignaciones", []), "centro_costo", []), "tabla_asignacion", {
      proyecto_id: '',
      porcentaje: '',
      centro_costo_id: ''
    });
  },
  components: {
    'modalimpuestos': ModalImpuestos,
    'partidas': Partidas
  },
  watch: {
    compra: {
      deep: true,
      handler: function handler(nuevoValor, valorAnterior) {
        var me = _this;
        if (nuevoValor.proyecto_id != null) {
          me.nombre_categoria = nuevoValor.proyecto_id.categoria;
        }
      }
    }
  },
  methods: {
    regresardb: function regresardb() {
      this.enabledb = true;
    },
    llenarCamposBanco: function llenarCamposBanco(data) {
      this.compra.cuenta = '';
      this.compra.clabe = '';
      this.compra.titular = '';
      if (data.target.value === '0') {
        this.enabledb = false;
        this.compra.transferencia = '';
      } else {
        this.enabledb = true;
        this.compra.cuenta = this.datosBancarios[data.target.selectedIndex]['cuenta'];
        this.compra.clabe = this.datosBancarios[data.target.selectedIndex]['clabe'];
        this.compra.titular = this.compra.proveedore_id.razon_social;
      }
    },
    buscarDatosBancarios: function buscarDatosBancarios(data) {
      var _this2 = this;
      this.enabledb = true;
      if (data != '') {
        axios.get("compras/proveedores/bancarios/" + data.id).then(function (response) {
          _this2.datosBancarios = response.data;
        })["catch"](function (error) {
          console.error(error);
        });
      }
    },
    creardates: function creardates() {
      $('#fechas').html('');
    },
    cambiarcondicion: function cambiarcondicion() {
      $('#fechas').html('');
    },
    /**
    * [getListas Metodos de consulta a la BD ]
    * @return {Response} [Objetos almacenados en diferentes variables]
    */
    getListas: function getListas() {
      var me = this;
      me.mostrar = 1;
      axios.get("compras/proveedores/todos").then(function (res) {
        if (res.data.status) {
          me.listaProvedores = res.data.proveedores.map(function (p) {
            return _objectSpread(_objectSpread({}, p), {}, {
              razon_social: "".concat(p.id, " - ").concat(p.nombre, " (").concat(p.razon_social, ")")
            });
          });
        } else {
          toastr.error(res.data.mensaje);
        }
      });
      axios.get('/proyecto-listar-todos').then(function (response) {
        me.listaProyectos = [];
        response.data.forEach(function (data) {
          me.listaProyectos.push({
            id: data.id,
            name: data.nombre_corto + ' ' + data.nombre,
            categoria: data.nombre_categoria,
            nombre_corto: data.nombre_corto
          });
        });
      })["catch"](function (error) {
        console.log(error);
      });
      me.listaEmpleados = [];
      me.listaEmpleados.push({
        id: 164,
        name: 'DIEGO CRUZ MARTINEZ'
      });
      me.listaEmpleados_elabora = [{
        id: 1149,
        name: 'DOMINICK TOVANY MARTINEZ'
      }, {
        id: 422,
        name: 'ADRIANA HERRERA FLORES'
      }, {
        id: 833,
        name: 'DIANA LARISA PEREZ DIAZ'
      }, {
        id: 893,
        name: 'JOSEFINA GUADALUPE LOPEZ BARTOLO'
      }, {
        id: 154,
        name: 'VALERIA HERNANDEZ MARTINEZ'
      }, {
        id: 390,
        name: 'MARIA DE LA LUZ MARTINEZ HERRERA'
      }];
      axios.get('/condicion_pago/ver').then(function (response) {
        me.listaCondicionPago = response.data;
        me.isLoading = false;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    cargarcardprincipal: function cargarcardprincipal(modelo, accion) {
      var _this3 = this;
      var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      this.p(data);
      this.isLoading = true;
      var me = this;
      me.getListas();
      me.tableData = data;
      switch (modelo) {
        case "compra":
          {
            switch (accion) {
              case 'registrar':
                {
                  // this.modal= 1;
                  this.tituloModal = 'Registrar compra';
                  this.Metodo = 'Nuevo';
                  _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.compra);
                  this.tipoAccion = 1;
                  this.disabled = 0;
                  this.principal = true;
                  this.mostrareinpuesto = 0;
                  break;
                }
              case 'actualizar':
                {
                  this.selected = [];
                  this.upload = true;
                  _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.compra);
                  this.array_asignaciones = [];
                  this.tituloModal = 'Actualizar compra';
                  this.compra.id = data['id'];
                  this.tipoAccion = 2;
                  this.disabled = 1;
                  this.mostrareinpuesto = 1;
                  this.compra.folio = data['folio'];
                  this.compra.ordenes_formato = data['ordenes_formato'];
                  this.compra.condicion_pago = data['condicion_pago_id'];
                  this.compra.periodo_entrega = {
                    id: 0,
                    name: data['periodo_entrega']
                  };
                  this.compra.fecha_orden = data['fecha_orden'];
                  this.compra.lugar_entrega = data['lugar_entrega'];
                  this.compra.observaciones = data['observaciones'];
                  this.compra.descuento = data['descuento'];
                  this.compra.total = data['total'];
                  this.compra.tipo_cambio = data['tipo_cambio'];
                  this.compra.moneda = data['moneda'];
                  this.compra.referencia = data['referencia'];
                  this.compra.cie = data['cie'];
                  this.compra.sucursal = data['sucursal'];
                  this.compra.transferencia = data['datos_bancarios'] == null ? '' : data['datos_bancarios']['banco'];
                  this.compra.clabe = data['datos_bancarios'] == null ? '' : data['datos_bancarios']['clabe'];
                  this.compra.cuenta = data['datos_bancarios'] == null ? '' : data['datos_bancarios']['cuenta'];
                  this.compra.titular = data['datos_bancarios'] == null ? '' : data['datos_bancarios']['titular'];
                  this.compra.fecha_probable_pago = data['fecha_probable_pago'] == null ? '' : data['fecha_probable_pago'];
                  this.compra.prioridad = data['prioridad'] == null ? '' : data['prioridad'];
                  this.compra.proveedore_id = {
                    id: data['proveedore_id'],
                    razon_social: data['proveedor_razon_social']
                  };
                  this.compra.proveedore_csct_id = {
                    id: data['proveedore_csct_id'],
                    razon_social: data['proveedor_razon_social_csct']
                  };
                  // Obtener impuestos
                  axios.get("/comprabusquedaimpuesto/" + data.id).then(function (res) {
                    _this3.listImpuestos = res.data;
                  });
                  this.compra.estado_id = data['estado_id'];
                  this.compra.elabora_empleado_id = {
                    id: data['elabora_empleado_id'],
                    name: data['nombre_empleado_elabora']
                  };
                  this.compra.autoriza_empleado_id = {
                    id: data['autoriza_empleado_id'],
                    name: data['nombre_empleado_autoriza']
                  };
                  this.compra.rango_dias = data['rango_dias'];
                  this.compra.pagos = data['pagos'];
                  this.compra.condicion = data['condicion'];
                  this.compra.proyecto_id = {
                    id: data['proyecto_id'],
                    name: data['nombre_corto_proyecto'] + ' ' + data['nombre_proyeto'],
                    nombre_categoria: data['nombre_categoria']
                  };
                  this.compra.comentario_condicion_pago = data['comentario_condicion_pago'];
                  this.Metodo = 'Actualizar';
                  this.principal = true;
                  this.nombre_categoria = data['nombre_categoria'];
                  break;
                }
            }
          }
      }
    },
    cerrar: function cerrar() {
      var d = 3;
      this.upload = false;
      this.$emit('cardprincipal:click');
      this.ClassL_a = 'btn btn-info';
      this.BtnL_a = 'Actualizar';
      this.BtnL_a2 = 'Subir Archivo';
      if (this.tipoAccion == 2) {
        $('#file_factura').html('');
      }
      _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.compra);
      this.preq.cotizacionre = "";
      this.getDoc = false;
    },
    cerrarModal: function cerrarModal() {
      this.mostrar = 0;
      this.$emit('cardprincipalcerrarmodal:click');
    },
    cerrarModalActualizar: function cerrarModalActualizar() {
      this.mostrar = 0;
      this.$emit('comprascerrarmodal:click');
    },
    cerraruno: function cerraruno(data) {
      this.$emit('cardprincipaluno:click', data);
    },
    agregarinpuestos: function agregarinpuestos(num, id) {
      var me = this;
      me.widgets.modalimpuestos = true;
      var childmodalimpuestos = this.$refs.modalimpuestos;
      childmodalimpuestos.cargarinpuesto(num, id, this.listImpuestos);
    },
    grabar: function grabar(nuevo) {
      this.nuevo = nuevo;
    },
    asignacion: function asignacion(datos) {
      this.preq.cotizacionre = datos[0];
      this.preq.cotizacionreid = datos[1];
    },
    /**
    * [GuardarCompra description]
    * @param {Int} nuevo [description]
    */
    GuardarCompra: function GuardarCompra(nuevo) {
      var _this4 = this;
      this.$validator.validate().then(function (result) {
        if (result) {
          _this4.isLoading = true;
          var me = _this4;
          var conrequisicion = me.conrequisicion;
          var tipos = [];
          var porcentajes = [];
          var ret = [];
          _this4.nuevo = _this4.listImpuestos;
          var n = 0;
          if (me.nuevo != null) {
            me.nuevo.forEach(function (item, i) {
              if (item.id === "0") {
                _this4.p(item);
                tipos.push(item.tipo);
                porcentajes.push(item.porcentaje);
                ret.push(item.retenido);
                n += 1;
              }
            });
            var tam = n;
            var impuestovar = me.nuevo;
          }
          var proyectos = [];
          var porcentaje = [];
          var catalogo_costos = [];
          var tam_asignacion = 0;
          var id_asignacion = [];
          if (me.array_asignaciones != null) {
            me.array_asignaciones.forEach(function (item, i) {
              proyectos.push(item.proyecto_id);
              porcentaje.push(item.porcentaje);
              catalogo_costos.push(item.centro_costo_id);
              id_asignacion.push(item.id);
            });
            tam_asignacion = me.array_asignaciones.length;
          }
          var cotizaciones = [];
          if (_this4.compra.cotizacione_id != null) {
            for (var i = 0; i < Object.keys(_this4.compra.cotizacione_id).length; i++) {
              cotizaciones.push(_this4.compra.cotizacione_id[i].id);
            }
          }
          var dias = parseInt(_this4.compra.pagos);
          var arreglo_fechas = [];
          var formData = new FormData();
          formData.append('metodo', _this4.Metodo);
          formData.append('id', _this4.compra.id);
          formData.append('folio', _this4.compra.folio);
          formData.append('ordenes_formato', _this4.compra.ordenes_formato);
          formData.append('condicion_pago_id', _this4.compra.condicion_pago);
          formData.append('periodo_entrega', _this4.compra.periodo_entrega.name);
          formData.append('fecha_orden', _this4.compra.fecha_orden);
          formData.append('lugar_entrega', _this4.compra.lugar_entrega);
          formData.append('observaciones', _this4.compra.observaciones);
          formData.append('total', _this4.compra.total);
          formData.append('descuento', _this4.compra.descuento);
          formData.append('tipo_cambio', _this4.compra.tipo_cambio);
          formData.append('moneda', _this4.compra.moneda);
          formData.append('referencia', _this4.compra.referencia);
          formData.append('cie', _this4.compra.cie);
          formData.append('sucursal', _this4.compra.sucursal);
          formData.append('proveedore_id', _this4.compra.proveedore_id.id);
          formData.append('cotizacione_id', cotizaciones);
          formData.append('proyecto_id', _this4.compra.proyecto_id.id);
          formData.append('proveedore_csct_id', _this4.compra.proveedore_csct_id == '' ? _this4.compra.proveedore_csct_id : _this4.compra.proveedore_csct_id.id);
          formData.append('estado_id', _this4.compra.estado_id);
          formData.append('elabora_empleado_id', _this4.compra.elabora_empleado_id.id);
          formData.append('autoriza_empleado_id', _this4.compra.autoriza_empleado_id.id);
          formData.append('rango_dias', _this4.compra.rango_dias);
          formData.append('pagos', _this4.compra.pagos);
          formData.append('tipos', tipos);
          formData.append('porcentaje', porcentajes);
          formData.append('retenido', ret);
          formData.append('tamanio', tam);
          formData.append('comentario_condicion_pago', _this4.compra.comentario_condicion_pago);
          formData.append('conrequisicion', conrequisicion);
          formData.append('fecha_probable_pago', _this4.compra.fecha_probable_pago);
          formData.append('prioridad', _this4.compra.prioridad);
          formData.append('banco', _this4.compra.transferencia);
          formData.append('clabe', _this4.compra.clabe);
          formData.append('cuenta', _this4.compra.cuenta);
          formData.append('titular', _this4.compra.titular);
          formData.append('fechas', arreglo_fechas);
          axios.post('/compras', formData).then(function (response) {
            me.isLoading = false;
            if (response.data.status) {
              if (response.data.status === 'error') {
                swal({
                  type: 'error',
                  html: 'Ha ocurrido un error notifiqué al administrador y recargue la página'
                });
              } else {
                me.enabledb = true;
                $("#input_impuesto").html('');
                me.listImpuestos = [];
                if (!nuevo) {
                  toastr.success('Compra Actualizada Correctamente');
                  me.nuevo = null;
                  me.cerrar();
                  me.cerraruno(me.tableData.proyecto_id);
                } else {
                  if (me.conrequisicion == 0) {
                    me.proceso(response.data.compra);
                  } else {
                    me.procesodos(response.data.compra);
                  }
                  toastr.success('Compra Agregada Correctamente');
                  me.nuevo = null;
                  // me.cerrarModal();
                }
              }
            } else {
              swal({
                type: 'error',
                html: response.data.errors.join('<br>')
              });
            }
          });
        } else {
          toastr.warning("Complete todos los campos obligatorios", "Atención");
        }
      });
    },
    /**
    * [cargardetalle description]
    * @param  {Array}  [dataEmpleado=[]] [description]
    * @return {[Response]}                   [description]
    */
    proceso: function proceso(data) {
      this.$emit('cardprincipalproceso:click', data);
    },
    procesodos: function procesodos(data) {
      this.$emit('cardprincipalprocesodos:click', data);
    },
    cambiar: function cambiar(data) {
      if (data.target.checked == true) {
        this.conrequisicion = 1;
      } else {
        this.conrequisicion = 0;
      }
    },
    vaciarAsignacion: function vaciarAsignacion() {
      _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.tabla_asignacion);
    },
    actualizarImpuestos: function actualizarImpuestos(imps) {
      this.p(imps);
      this.listImpuestos = imps;
    },
    p: function p(asd) {
      console.error(asd);
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Compra/Compras.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Compra/Compras.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Herramientas/utilerias.js */ "./resources/assets/js/components/Herramientas/utilerias.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var config = (__webpack_require__(/*! ../../Herramientas/config-vuetables-client */ "./resources/assets/js/components/Herramientas/config-vuetables-client.js").call)(undefined);
var CardPrincipal = function CardPrincipal(r) {
  return __webpack_require__.e(/*! require.ensure | compras */ "compras").then((function () {
    return r(__webpack_require__(/*! ./CardPrincipal.vue */ "./resources/assets/js/components/Compras/Compra/CardPrincipal.vue"));
  }).bind(null, __webpack_require__))['catch'](__webpack_require__.oe);
};
var Partidas = function Partidas(r) {
  return __webpack_require__.e(/*! require.ensure | compras */ "compras").then((function () {
    return r(__webpack_require__(/*! ./Partidas.vue */ "./resources/assets/js/components/Compras/Compra/Partidas.vue"));
  }).bind(null, __webpack_require__))['catch'](__webpack_require__.oe);
};
var PartidasDos = function PartidasDos(r) {
  return __webpack_require__.e(/*! require.ensure | compras */ "compras").then((function () {
    return r(__webpack_require__(/*! ./PartidasDos.vue */ "./resources/assets/js/components/Compras/Compra/PartidasDos.vue"));
  }).bind(null, __webpack_require__))['catch'](__webpack_require__.oe);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      texto_b: '',
      PermisosCrud: {},
      url: '/compras',
      empleado: null,
      objeto: 1,
      detalle: 0,
      nuevo: null,
      principal: false,
      estadomodalimpuesto: null,
      impuestocatalogo: [],
      mostrareinpuesto: 0,
      modal_ver_requisiciones: 0,
      widgets: {
        cardprincipal: false,
        partidas: false,
        partidasdos: false,
        facturas: false
      },
      compra: {
        id: 0,
        folio: '',
        condicion: 0,
        condicion_pago: '',
        periodo_entrega: '',
        lugar_entrega: '',
        total: ''
      },
      validado: 0,
      listaEmpleados: [],
      listaCotizaciones: [],
      listaProvedores: [],
      listaCondicionPago: [],
      modal: 0,
      modalb: 0,
      tituloModal: '',
      tipoAccion: 0,
      tipoAccionpr: 0,
      disabled: 0,
      isLoading: false,
      isLoadingg: false,
      isLoadingDetalle: false,
      columns: ['id', 'descargar', 'folio', 'nombre_condicion_pago', 'periodo_entrega', 'total', 'moneda', 'proveedor_razon_social', 'format', 'condicion'],
      tableData: [],
      options: {
        headings: {
          'id': 'Acciones',
          'folio': 'Folio',
          'nombre_condicion_pago': 'Condición de Pago',
          'periodo_entrega': 'Período de Entrega',
          // 'lugar_entrega': 'Lugar de Entrega',
          'total': 'Total',
          'proveedor_razon_social': 'Proveedor',
          'condicion': 'Condición',
          'estado_id': 'Estado',
          'descargar': '',
          'format': 'Descargar'
        },
        perPage: 10,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        filterByColumn: true,
        texts: config.texts,
        columnsDisplay: {},
        listColumns: {
          moneda: [{
            id: 1,
            text: 'Dolares'
          }, {
            id: 2,
            text: 'Moneda Nacional'
          }, {
            id: 3,
            text: 'Euros'
          }],
          nombre_condicion_pago: [{
            id: 1,
            text: 'Crédito'
          }, {
            id: 2,
            text: 'Contado'
          }]
        },
        requestAdapter: function requestAdapter(data) {
          var arr = [];
          arr.push({
            'folio': data.query.folio,
            'condicion_pago_id': data.query.nombre_condicion_pago,
            'periodo_entrega': data.query.periodo_entrega,
            'lugar_entrega': data.query.lugar_entrega,
            'total': data.query.total,
            'moneda': data.query.moneda,
            'p.razon_social': data.query.proveedor_razon_social
          });
          data.query = arr[0];
          return data;
        }
      }
    };
  },
  components: {
    'cardprincipal': CardPrincipal,
    'partidas': Partidas,
    'partidasdos': PartidasDos
  },
  methods: {
    verBotton: function verBotton(data) {
      console.log(data);
      this.texto_b = 'Acciones';
    },
    /**
     * [getData metodo de consultas a la BD]
     * @return {Response} [Objeto almacenado en tableData]
     */
    getData: function getData(data) {
      var me = this;
      // me.objeto = 0;
      me.objeto = data;
      me.detalle = 1;
      // me.$refs.myTable.refresh();
      me.PermisosCrud = _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].getCRUD(me.$route.path);

      // this.isLoading = true;
      // axios.get('/compras/' + data).then(response => {
      //   me.tableData = response.data;
      //   me.isLoading = false;
      // })
      // .catch(function (error) {
      //   console.log(error);
      // });
    },
    /**
     * [actdesact activar o desactivar orden de compra]
     * @param  {Int} id      [description]
     * @param  {Int} activar [0 = no y 1 = si]
     * @return {Response}           [status = true]
     */
    actdesact: function actdesact(id, activar) {
      var _this = this;
      if (activar) {
        this.swal_titulo = 'Esta seguro de activar esta compra?';
        this.swal_tle = 'Activado';
        this.swal_msg = 'El registro ha sido activado con éxito.';
      } else {
        this.swal_titulo = 'Esta seguro de desactivar esta compra?';
        this.swal_tle = 'Desactivado!';
        this.swal_msg = 'El registro ha sido desactivado con éxito.';
      }
      swal({
        title: this.swal_titulo,
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Aceptar!',
        cancelButtonText: 'Cancelar',
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-danger',
        buttonsStyling: false,
        reverseButtons: true
      }).then(function (result) {
        if (result.value) {
          var _me = _this;
          axios.get(_me.url + '/' + id + '/edit').then(function (response) {
            var _toastr$options;
            if (activar) {
              toastr.success(_me.swal_tle, _me.swal_msg, 'success');
            } else {
              toastr.error(_me.swal_tle, _me.swal_msg, 'error');
            }
            toastr.options = (_toastr$options = {
              "closeButton": false
            }, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_toastr$options, "closeButton", false), "debug", false), "newestOnTop", true), "progressBar", true), "positionClass", "toast-top-center"), "preventDuplicates", false), "onclick", null), "showDuration", "300"), "hideDuration", "1000"), "timeOut", "5000"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_toastr$options, "extendedTimeOut", "1000"), "showEasing", "swing"), "hideEasing", "linear"), "showMethod", "fadeIn"), "hideMethod", "fadeOut"));
            _me.getData();
          })["catch"](function (error) {
            console.log(error);
          });
        } else if (result.dismiss === swal.DismissReason.cancel) {}
      });
    },
    cerrar: function cerrar(d) {
      $("#input_impuesto").html('');
      this.principal = false;
      this.detalle = 0;
      this.nuevo = null;
      var me = this;
      me.widgets.cardprincipal = false;
    },
    /**
     * [agregarinpuestos description]
     * @param  {Int} num [description]
     * @param  {Int} id  [description]
     * @return {Response}     [description]
     */
    agregarinpuestos: function agregarinpuestos(num, id) {
      me.widgets.requisicionesalmacen = true;
      var childrequisicionesalmacen = this.$refs.requisicionesalmacen;
      childrequisicionesalmacen.cargarcompras();
    },
    /**
     * [abrirEdicionR description]
     * @param  {Array}  [data=[]] [description]
     * @return {[type]}           [description]
     */
    abrirEdicionR: function abrirEdicionR() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      this.tipoAccionpr = 2;
      this.partidascompras.articulo_id = data['articulo_id'];
      this.partidascompras.peso = data['peso'];
      this.partidascompras.equivalente = data['equivale'];
      this.partidascompras.fecha_requerido = data['frequerido'];
    },
    /**
     * [abrirModal description]
     * @param  {[String]} modelo    [description]
     * @param  {[String]} accion    [description]
     * @param  {Array}  [data=[]] [description]
     * @return {}           [description]
     */
    abrirModal: function abrirModal(modelo, accion) {
      var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var me = this;
      this.detalle = 2;
      me.widgets.cardprincipal = true;
      var childcardprincipal = this.$refs.cardprincipal;
      childcardprincipal.cargarcardprincipal(modelo, accion, data);
    },
    cerrarprincipal: function cerrarprincipal(id) {
      var me = this;
      me.getData(id);
    },
    /**
     * [cargardetalle description]
     * @param  {Array}  [dataEmpleado=[]] [description]
     * @return {[Response]}                   [description]
     */
    cargardetalle: function cargardetalle() {
      var dataEmpleado = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var me = this;
      if (dataEmpleado.conrequisicion === 0) {
        me.widgets.partidas = true;
        var childpartidas = this.$refs.partidas;
        childpartidas.cargarpartidas(dataEmpleado);
        this.detalle = 0;
      } else if (dataEmpleado.conrequisicion === 1) {
        me.widgets.partidasdos = true;
        var childpartidasdos = this.$refs.partidasdos;
        childpartidasdos.cargarpartidas(dataEmpleado);
        this.detalle = 0;
      }
    },
    maestro: function maestro(data) {
      var me = this;
      this.detalle = 0;
      me.widgets.partidas = false;
      me.widgets.partidasdos = false;
      me.isLoading = false;
      me.getData(data);
    },
    maestroPrincipal: function maestroPrincipal() {
      this.$emit('compras:maestro');
    },
    abrirBusquedaArticulo: function abrirBusquedaArticulo() {
      this.tipoAccionpr = 1;
      this.modal = 1;
    },
    cerrarModal: function cerrarModal() {
      this.modala = 0;
    },
    /**
     * [descargar description]
     * @param  {[type]} data [description]
     * @return {[type]}      [description]
     */
    descargar: function descargar(data) {
      window.open('descargar-compran/' + data.id, '_blank');
      var me = this;
      me.getData(data.proyecto_id);
    },
    descargarn: function descargarn(data) {
      window.open('descargar-compran/' + data.id, '_blank');
      var me = this;
      me.getData(data.proyecto_id);
    },
    /**
     * [finalizarCompra description]
     * @param  {Array}  [data=[]] [description]
     * @return {[type]}           [description]
     */
    finalizarCompra: function finalizarCompra() {
      var _this2 = this;
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      Swal.fire({
        title: 'Esta seguro(a) de Finalizar?',
        text: "Esta opción no se podrá desahacer!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si',
        cancelButtonText: 'No'
      }).then(function (result) {
        if (result.value) {
          var _me2 = _this2;
          var total = data['total'];
          var id = data['id'];
          if (total == 0 || total == null) {
            toastr.warning('Atención', 'Esta compra no puede se cerrada hasta tener artículos registrados');
          } else {
            axios.post("/compras/cerraroc", {
              id: id
            }).then(function (res) {
              if (res.data.status) {
                toastr.success('Correcto', 'Compra cerrada correctamente');
                _me2.getData(data['proyecto_id']);
                _this2.$refs.myTable.refresh();
              } else toastr.error(res.data.mensaje);
            });
          }
        }
      });
    },
    cerrarModalActualizar: function cerrarModalActualizar() {
      this.detalle = 1;
    },
    ver_facturas: function ver_facturas(data) {
      this.widgets.facturas = true;
      this.detalle = 0;
      var childfacturas = this.$refs.facturas;
      childfacturas.cargar(data, this.listaProvedores, this.UsoFactura);
    },
    cerrarfacturas: function cerrarfacturas() {
      this.widgets.facturas = false;
      this.detalle = 1;
    },
    descargarequimodal: function descargarequimodal() {
      this.modal_ver_requisiciones = 1;
    },
    cerrarModalRequi: function cerrarModalRequi() {
      this.modal_ver_requisiciones = 0;
    }
  },
  mounted: function mounted() {
    // this.getData();
    // this.getArticulosRequisicion();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Compra/MantenimientoVehiculosModal.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Compra/MantenimientoVehiculosModal.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
      url: '/catmantenimientovehiculos',
      desabilitado: 0,
      catalogo: {
        id: 0,
        descripcion: '',
        codigo: '',
        marca: '',
        comentario: ''
      },
      centro_costo: [],
      modal: 0,
      tituloModal: '',
      tipoAccion: 0,
      isLoading: false,
      columns: ['id', 'descripcion', 'codigo', 'marca', 'comentario'],
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
        sortable: ['descripcion', 'codigo', 'marca', 'comentario'],
        filterable: ['descripcion', 'codigo', 'marca', 'comentario'],
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
              'id': _this.catalogo.id,
              'descripcion': _this.catalogo.descripcion,
              'codigo': _this.catalogo.codigo,
              'marca': _this.catalogo.marca,
              'comentario': _this.catalogo.comentario
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
                // me.getData();
                if (!nuevo) {
                  toastr.success('Estado Actualizado Correctamente');
                } else {
                  toastr.success('Estado Agregado Correctamente');
                  me.cerrarModalAbrir();
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
      _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.catalogo);
    },
    cerrarModalAbrir: function cerrarModalAbrir() {
      this.$emit('cerrarAbrir');
    },
    abrirModal: function abrirModal(modelo, accion) {
      var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      switch (modelo) {
        case "catalogo":
          {
            switch (accion) {
              case 'registrar':
                {
                  this.modal = 1;
                  this.desabilitado = 1;
                  this.tituloModal = 'Registrar Catalogo';
                  _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.catalogo);
                  // this.codigo.unidad_medida='Catalogo';
                  this.tipoAccion = 1;
                  break;
                }
              case 'actualizar':
                {
                  this.modal = 1;
                  this.desabilitado = 1;
                  this.tituloModal = 'Actualizar Catalogo';
                  this.catalogo.id = data['id'];
                  this.tipoAccion = 2;
                  this.catalogo.descripcion = data['descripcion'];
                  this.catalogo.codigo = data['codigo'];
                  this.catalogo.marca = data['marca'];
                  this.catalogo.comentario = data['comentario'];
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Compra/ModalImpuestos.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Compra/ModalImpuestos.vue?vue&type=script&lang=js ***!
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
      id: 0,
      modal: 0,
      mostrar: 0,
      estadomodalimpuesto: null,
      temporal: {
        tipo: '',
        porcentaje: '',
        retenido: 0
      },
      impuestocatalogo: [],
      nuevo: []
    };
  },
  components: {},
  methods: {
    cargarinpuesto: function cargarinpuesto(num, id, imps) {
      this.mostrar = 1;
      this.modal = 1;
      // this.estadomodalimpuesto = num;
      this.id = id;
      var me = this;
      axios.get('comprabusquedaimpuesto/' + id).then(function (response) {
        me.impuestocatalogo = response.data; //.concat(imps);
      })["catch"](function (error) {
        console.log(error);
      });
    },
    cerrarModalInpuesto: function cerrarModalInpuesto() {
      /*if (this.temporal.tipo != '' && this.temporal.porcentaje === '')
      {
          toastr.warning('Acompletar el porcentaje del impuesto para continuar o vaciar el campo');
      }
      else if (this.temporal.tipo === '' && this.temporal.porcentaje != '')
      {
          toastr.warning('Acompletar el tipo del impuesto para continuar o vaciar el campo');
      }
      else
      {
          this.mostrar = 1;
          this.modal = 0;
          this.$emit('modalimpuestos:click', this.nuevo);
          this.nuevo = [];
      }*/
      this.mostrar = 1;
      this.modal = 0;
      this.$emit('modalimpuestos:click', this.nuevo);
      this.nuevo = [];

      // Regresar impuestos ingresados
      this.$emit('update', this.impuestocatalogo);
    },
    vaciar: function vaciar() {
      this.temporal.tipo = '';
      this.temporal.porcentaje = '';
      this.temporal.retenido = 0;
    },
    /**
     * [crear description]
     * @return {[type]} [description]
     */
    crear: function crear() {
      var _this = this;
      this.$validator.validate().then(function (result) {
        if (_this.temporal.tipo == "") {
          toastr.warning("Ingrese un tipo");
          return;
        }
        if (_this.temporal.porcentaje == "") {
          toastr.warning("Ingrese un porcentaje");
          return;
        } else {
          if (_this.temporal.porcentaje <= 0) {
            toastr.warning("Ingrese un porcentaje válido");
            return;
          }
        }
        if (result) {
          _this.impuestocatalogo.push({
            id: '0',
            tipo: _this.temporal.tipo,
            porcentaje: _this.temporal.porcentaje,
            retenido: _this.temporal.retenido == true ? 1 : 0
          });
          _this.nuevo.push({
            id: '0',
            tipo: _this.temporal.tipo,
            porcentaje: _this.temporal.porcentaje,
            retenido: _this.temporal.retenido == true ? 1 : 0
          });
          _this.vaciar();
        }
      });
    },
    /**
     * [eliminar description]
     * @param  {Array}  [data=[]] [description]
     * @return {[type]}           [description]
     */
    eliminar: function eliminar() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var index = arguments.length > 1 ? arguments[1] : undefined;
      if (data.id == 0) {
        this.impuestocatalogo.splice(index, 1);
      } else {
        var me = this;
        var id = data['id'];
        axios.get('impuestoeliminar/' + id).then(function (response) {
          // me.modal = 0;
          me.cargarinpuesto(0, me.id);
        })["catch"](function (error) {
          console.log(error);
        });
      }
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Compra/Partidas.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Compra/Partidas.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Herramientas/utilerias.js */ "./resources/assets/js/components/Herramientas/utilerias.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var config = (__webpack_require__(/*! ../../Herramientas/config-vuetables-client */ "./resources/assets/js/components/Herramientas/config-vuetables-client.js").call)(undefined);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return _defineProperty(_defineProperty(_defineProperty({
      boton_centro_costo: 0,
      boton_actualizar_partida: 0,
      desabilitar: false,
      verequivalente: false,
      guardarequivalente: false,
      desabilitar_precios: false,
      compra: {
        condicion: ''
      },
      mostrar: 0,
      partidascompras: {
        requisicione_id: 0,
        orden_compra_id: 0,
        articulo_id: 0,
        servicio_id: 0,
        articulo_uno_id: 0,
        servicio_uno_id: 0,
        nombrearti: '',
        nombrearti_uno: '',
        nombreserv_uno: '',
        cantidad: 0,
        precio_unitario: '',
        proyecto_id: 0,
        adicionales: 0,
        pda: '',
        cambio_equivalente: 0,
        comentario: '',
        cantidad_real: 0,
        centro_costo_id: '',
        id: '',
        vehiculo_id: 0,
        mantenimiento_v_id: 0
      },
      clases: {
        nombrearti: '',
        precio_unitario: '',
        cantidad: ''
      },
      tituloModala: '',
      empleado: null,
      tipoAccionpr: 0,
      detalle: 0,
      modala: 0,
      estadomodal: 0,
      modalarticulos: 0,
      isLoadingDetalle: false,
      tableDataPartidasCompras: [],
      dataTableArticulo: [],
      //
      Vehiculos: [],
      //
      MantenimientoV: [],
      columnsart: ['codigo', 'nombre', 'descripcion', 'nombreproveedor', 'marca', 'calidad'],
      //
      columnsa: ['codigo', 'nombre', 'descripcion', 'marca', 'calidad'],
      columnsas: ['rf', 'descripciona', 'proyecton', 'rfs', 'cantidad_compra'],
      columnsserv: ['nombre_servicio', 'proveedor_marca', 'unidad_medida'],
      columnsvehi: ['descripcion'],
      columnsmanv: ['descripcion', 'codigo', 'marca', 'comentario'],
      columnscompras: ['id', 'proyecton', 'ad', 'cantidad', 'precio_unitario', 'total'],
      //
      optionsart: {
        headings: {
          nombre: 'Nombre',
          descripcion: 'Descripción',
          marca: 'Marca',
          codigo: 'Codigo',
          id: 'Acción'
        },
        perPage: 10,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        sortable: ['codigo', 'nombre', 'descripcion', 'nombreproveedor', 'marca'],
        filterable: ['codigo', 'nombre', 'descripcion', 'nombreproveedor', 'marca'],
        filterByColumn: true,
        texts: config.texts,
        debounce: 700,
        childRow: true
      },
      optionsa: {
        headings: {
          nombre: 'Nombre',
          descripcion: 'Descripción',
          nombreproveedor: 'Nombre Proveedor',
          marca: 'Marca',
          codigo: 'Codigo',
          id: 'Acciones'
        },
        perPage: 10,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        filterByColumn: true,
        sortable: ['codigo', 'nombre', 'descripcion', 'marca'],
        filterable: ['codigo', 'nombre', 'descripcion', 'marca'],
        texts: config.texts,
        debounce: 700
      },
      optionsserv: {
        headings: {
          nombre_servicio: 'Nombre del Servicio',
          proveedor_marca: 'Proveedor/Marca',
          unidad_medida: 'Unidad de Medida',
          id: 'Acciones'
        },
        perPage: 10,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        filterByColumn: true,
        texts: config.texts
      },
      optionsvehi: {
        headings: {
          descripcion: 'Descripción',
          id: 'Acciones'
        },
        perPage: 10,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        filterByColumn: true,
        texts: config.texts
      },
      optionsmanv: {
        headings: {
          descripcion: 'Descripción'
        },
        perPage: 10,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        sortable: ['descripcion', 'codigo', 'marca', 'comentario'],
        filterable: ['descripcion', 'codigo', 'marca', 'comentario'],
        filterByColumn: true,
        texts: config.texts
      }
    }, "optionsa", {
      headings: {
        rf: 'Folio de requisición',
        descripciona: 'Descripcion Artículo',
        proyecton: 'Proyecto',
        rfs: 'Fecha solicitud de la requisición',
        cantidad_compra: 'Cantidad'
      },
      perPage: 10,
      perPageValues: [],
      skin: config.skin,
      sortIcon: config.sortIcon,
      //  sortable: ['empleado.folio'],
      //  filterable: ['empleado.folio'],
      filterByColumn: true,
      texts: config.texts
    }), "optionscompras", {
      headings: {
        'id': 'Acción',
        // 'requisicione_id' : '',
        'proyecton': 'Proyecto',
        'ad': 'Artículo',
        'cantidad': 'Cantidad'
      },
      perPage: 10,
      perPageValues: [],
      skin: config.skin,
      sortIcon: config.sortIcon,
      sortable: ['proyecton', 'ad', 'cantidad', 'precio_unitario'],
      filterable: ['proyecton', 'ad', 'cantidad', 'precio_unitario'],
      filterByColumn: true,
      listColumns: {
        condicion: [{
          id: 1,
          text: 'Activo'
        }, {
          id: 0,
          text: 'Dado de Baja'
        }]
      },
      texts: config.texts
    }), "centro_costo", []);
  },
  components: {
    'catalogo': __webpack_require__(/*! ./MantenimientoVehiculosModal.vue */ "./resources/assets/js/components/Compras/Compra/MantenimientoVehiculosModal.vue")
  },
  methods: {
    cargarpartidas: function cargarpartidas(data) {
      this.mostrar = 1;
      this.boton_centro_costo = 0;
      this.isLoadingDetalle = true;
      this.empleado = data;
      data.condicion == 2 ? this.desabilitar = true : this.desabilitar = false;
      this.compra.condicion = data['condicion'];
      this.partidascompras.orden_compra_id = data.id;
      var me = this;
      axios.get('/compras/' + data.id + '/' + 'compras').then(function (response) {
        me.tableDataPartidasCompras = response.data;
        me.isLoadingDetalle = false;
      })["catch"](function (error) {
        console.log(error);
      });
      axios.get('catvehiculos').then(function (response) {
        me.Vehiculos = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
      axios.get('catmantenimientovehiculos').then(function (res) {
        if (res.data.status) {
          me.MantenimientoV = res.data.servicios;
        } else toastr.error(res.data.mensaje);
      })["catch"](function (error) {
        console.log(error);
      });
    },
    getMantenimientoV: function getMantenimientoV() {
      var me = this;
      axios.get('catmantenimientovehiculos').then(function (response) {
        me.MantenimientoV = response.data.servicios;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    /**
     * [abrirModalA description]
     * @param  {String} modelo    [description]
     * @param  {String} accion    [description]
     * @param  {[Int]} id        [description]
     * @param  {Array}  [data=[]] [description]
     * @return {}           [description]
     */
    abrirModalA: function abrirModalA(modelo, accion, id) {
      var data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
      // me.widgets.autorizarequisicion = true;

      switch (modelo) {
        case "articulo":
          {
            switch (accion) {
              case 'registrar':
                {
                  this.modala = 1;
                  this.tituloModala = 'Registrar artículo a la compra ';
                  _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.partidascompras);
                  _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.modala);
                  this.tipoAccionpr = 1;
                  this.partidascompras.orden_compra_id = id;
                  this.getArticulosRequisicion();
                  this.verequivalente = false;
                  this.guardarequivalente = false;
                  this.$refs.myTableArticulo.refresh();
                  break;
                }
            }
          }
      }
    },
    /**
     * [getArticulosRequisicion Metodo de consultas a la BD]
     * @return {Response} [Objeto almacenado en dataTableArticulo]
     *
     */
    getArticulosRequisicion: function getArticulosRequisicion() {
      var me = this;
      // var url = '/partidare';
      // url = url + me.empleado.proyecto_id == null ? '' : '/'me.empleado.proyecto_id
      axios.get('/partidare/' + (me.empleado.proyecto_id == null ? '' : me.empleado.proyecto_id)).then(function (response) {
        me.dataTableArticulo = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    /**
     * [seleccionarArticulo2 description]
     * @param  {Object} data [description]
     * @return {}      [description]
     */
    seleccionarArticulo2: function seleccionarArticulo2(data) {
      var me = this;
      this.partidascompras.articulo_id = data.row.id;
      this.partidascompras.servicio_id = data.row.servicio_id;
      this.partidascompras.nombrearti = data.row.descripcion;
      this.partidascompras.proyecto_id = this.empleado.proyecto_id;
      this.partidascompras.centro_costo_id = data.row.centro_costo_id;
      if (data.row.equivalente == 1) {
        this.verequivalente = false; //ambos en true
      } else {
        this.verequivalente = false; //ambos en true
      }
      this.modala = 0;
      this.isLoadingg = false;
      me.cerrarModal();
    },
    seleccionarArticulosDos: function seleccionarArticulosDos(data) {
      this.partidascompras.articulo_id = data.row.id;
      this.partidascompras.nombrearti = data.row.descripcion;
      this.partidascompras.centro_costo_id = data.row.centro_costo_id;
      if (this.partidascompras.articulo_id == this.partidascompras.articulo_uno_id) {
        toastr.warning('Atención', 'Seleccione un artículo equivalente diferente al original');
      } else {
        this.modalarticulos = 0;
        this.verequivalente = false;
        this.guardarequivalente = true;
        this.partidascompras.cambio_equivalente = 1;
      }
    },
    seleccionarServicio: function seleccionarServicio(data) {
      this.partidascompras.servicio_id = data.row.id;
      this.partidascompras.nombrearti = data.row.nombre_servicio + ' ' + data.row.proveedor_marca;
      this.partidascompras.centro_costo_id = data.row.centro_costos_id;
      if (this.partidascompras.servicio_id == this.partidascompras.servicio_uno_id) {
        toastr.warning('Atención', 'Seleccione un servicio equivalente diferente al original');
      } else {
        this.modala = 0;
        this.verequivalente = false;
        this.guardarequivalente = true;
        this.partidascompras.cambio_equivalente = 1;
      }
    },
    seleccionarVehiculo: function seleccionarVehiculo(data) {
      this.partidascompras.vehiculo_id = data.row.id;
      this.partidascompras.nombrearti = data.row.descripcion;
      this.partidascompras.centro_costo_id = data.row.centro_costo_id;
      this.modala = 0;
    },
    seleccionarMantenimiento: function seleccionarMantenimiento(data) {
      this.partidascompras.mantenimiento_v_id = data.row.id;
      this.partidascompras.nombrearti = data.row.descripcion;
      this.modala = 0;
    },
    cerrarModal: function cerrarModal() {
      this.modala = 0;
    },
    maestro: function maestro() {
      var me = this;
      me.mostrar = 0;
      this.$emit('partidas:click', me.empleado.proyecto_id);
      this.cancelar();
    },
    validardetalle: function validardetalle() {
      if (this.partidascompras.nombrearti === '') {
        this.mensaje();
        this.validado = 0;
        this.clases.nombrearti = ' is-invalid';
      } else if (this.partidascompras.precio_unitario === '') {
        this.mensaje();
        this.validado = 0;
        this.clases.nombrearti = '';
        this.clases.precio_unitario = ' is-invalid';
      } else if (this.partidascompras.cantidad === '') {
        this.mensaje();
        this.validado = 0;
        this.clases.precio_unitario = '';
        this.clases.cantidad = ' is-invalid';
      } else {
        this.validado = 1;
        this.clases.cantidad = '';
      }
    },
    mensaje: function mensaje() {
      swal({
        title: 'Error complete todos los campos',
        type: 'warning',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Aceptar!',
        confirmButtonClass: 'btn btn-succeguardarEquivalentess',
        buttonsStyling: false,
        reverseButtons: true
      });
    },
    /**
     * [guardarPR guarda una partida a la compra]
     * @param  {Int} nuevo [description]
     * @param  {Int} idr   [description]
     * @return {Response}       [status = true]
     */
    guardarPR: function guardarPR(nuevo, idr) {
      if (this.validado == 1) {
        this.isLoadingDetalle = true;
        this.detalle = 1;
        var me = this;
        axios({
          method: nuevo ? 'POST' : 'PUT',
          url: nuevo ? '/partidacomprasinrequisicion' : '/requisicioncompra' + '/' + this.partidascompras.requisicione_id,
          data: {
            'requisicione_id': this.partidascompras.requisicione_id,
            'orden_compra_id': this.partidascompras.orden_compra_id,
            'articulo_id': this.partidascompras.articulo_id,
            'servicio_id': this.partidascompras.servicio_id,
            'vehiculo_id': this.partidascompras.vehiculo_id,
            'mantenimiento_v_id': this.partidascompras.mantenimiento_v_id,
            'cantidad': this.partidascompras.cantidad,
            'precio_unitario': this.partidascompras.precio_unitario,
            'proyecto_id': this.partidascompras.proyecto_id,
            'adicionales': this.partidascompras.adicionales,
            'articulo_uno_id': this.partidascompras.articulo_uno_id,
            'servicio_uno_id': this.partidascompras.servicio_uno_id,
            'nombrearti_uno': this.partidascompras.nombrearti_uno,
            'folio': this.empleado.folio,
            'pda': this.partidascompras.pda,
            'cambio_equivalente': this.partidascompras.cambio_equivalente,
            'comentario': this.partidascompras.comentario,
            'centro_costo_id': this.partidascompras.centro_costo_id
          }
        }).then(function (response) {
          me.isLoadingDetalle = false;
          if (response.data.status) {
            if (response.data.status === 'error') {
              swal({
                type: 'error',
                html: 'Ha ocurrido un error notifiqué al administrador y recarge la página'
              });
            } else {
              me.cargarpartidas(me.empleado);
              me.cerrarModal();
              me.cancelar();
              me.getArticulosRequisicion();
              toastr.success('Correcto', 'Partida agregada a la compra correctamente');
            }
          } else {
            me.isLoadingDetalle = false;
            me.cerrarModal();
            me.cancelar();
            swal('Error!', 'No se pueden agregar articulos de diferentes proyectos!', 'warning');
          }
        })["catch"](function (error) {
          me.cancelar();
          me.isLoadingDetalle = false;
        });
      }
    },
    cancelar: function cancelar() {
      this.partidascompras.articulo_id = 0;
      this.partidascompras.servicio_id = 0;
      this.partidascompras.vehiculo_id = 0;
      this.partidascompras.mantenimiento_v_id = 0;
      this.partidascompras.peso = 0;
      this.partidascompras.precio_unitario = "";
      this.partidascompras.cantidad = 0;
      this.partidascompras.fecha_requerido = "";
      this.partidascompras.nombrearti = "";
      this.tipoAccionpr = 0;
      this.partidascompras.requisicione_id = 0;
      this.partidascompras.adicionales = 0;
      this.verequivalente = false;
      this.guardarequivalente = false;
      this.desabilitar_precios = false;
      this.partidascompras.cambio_equivalente = 0;
      this.partidascompras.comentario = "";
      this.partidascompras.centro_costo_id = "";
      this.boton_centro_costo = 0;
      this.boton_actualizar_partida = 0;
    },
    /**
     * [eliminarpartidacompra description]
     * @param  {[type]} id      [description]
     * @param  {[type]} idr     [description]
     * @param  {[type]} activar [description]
     * @return {[type]}         [description]
     */
    eliminarpartidacompra: function eliminarpartidacompra(data, activar) {
      var _this = this;
      if (!activar) {
        this.swal_titulo = 'Esta seguro de remover este artículo de la compra?';
        this.swal_tle = 'Removido!';
        this.swal_msg = 'El registro ha sido removido con éxito.';
      }
      swal({
        title: this.swal_titulo,
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Aceptar!',
        cancelButtonText: 'Cancelar',
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-danger',
        buttonsStyling: false,
        reverseButtons: true
      }).then(function (result) {
        if (result.value) {
          var me = _this;
          axios.get('/requisicioncompra/' + data['id'] + '/edit').then(function (response) {})["catch"](function (error) {
            console.log(error);
          });
          //
          axios.get('/partidacomprasinrequisicion/eliminar/' + data['articulo_id'] + '&' + data['requisicione_id'] + '&' + data['servicio_id'] + '&' + data['vehiculo_id']).then(function (response) {
            if (!activar) {
              toastr.success('Eliminado Correctamente');
            }
            me.cargarpartidas(me.empleado);
            me.getArticulosRequisicion();
          })["catch"](function (error) {
            console.log(error);
          });
        } else if (result.dismiss === swal.DismissReason.cancel) {}
      });
    },
    comprarEquivalente: function comprarEquivalente() {
      var me = this;
      // me.isLoadingDetalle = true;
      toastr.warning('Atención', 'Seleccione el articulo/servicio equivalente');
      this.modalarticulos = 1;
      this.partidascompras.articulo_uno_id = this.partidascompras.articulo_id;
      this.partidascompras.nombrearti_uno = this.partidascompras.nombrearti;
      this.partidascompras.servicio_uno_id = this.partidascompras.servicio_id;
      this.desabilitar_precios = false;
      this.tipoAccionpr = 1;
    },
    guardarEquivalente: function guardarEquivalente() {
      var me = this;
      me.isLoadingDetalle = true;
      axios.post('/comprarequivalente', {
        requisicione_id: this.partidascompras.requisicione_id,
        articulo_id: this.partidascompras.articulo_id,
        servicio_id: this.partidascompras.servicio_id,
        articulo_uno_id: this.partidascompras.articulo_uno_id,
        servicio_uno_id: this.partidascompras.servicio_uno_id,
        nombrearti_uno: this.partidascompras.nombrearti_uno,
        folio: this.empleado.folio,
        pda: this.partidascompras.pda
      }).then(function (response) {
        me.cancelar();
        me.isLoadingDetalle = false;
        me.desabilitar_precios = false;
      })["catch"](function (error) {
        console.error(error);
      });
    },
    cerrarModalArticulos: function cerrarModalArticulos() {
      this.modalarticulos = 0;
    },
    cambiarEstado: function cambiarEstado(edo) {
      this.estadomodal = edo;
    },
    agregarArt: function agregarArt() {
      var me = this;
      me.$refs.articulo.abrirModal('articulo', 'registrar');
    },
    agregarCatV: function agregarCatV() {
      var me = this;
      me.$refs.catalogo.abrirModal('catalogo', 'registrar');
    },
    abrirModal: function abrirModal(data) {
      var me = this;
      me.$refs.articulo.abrirModal('articulo', 'actualizar', data);
      me.cerrarModal();
    },
    actualizarpartidacomprauno: function actualizarpartidacomprauno(data, n) {
      this.partidascompras.nombrearti = data.ad;
      this.partidascompras.id = data.id;
      this.partidascompras.comentario = data.comentario;
      this.partidascompras.cantidad = data.cantidad;
      this.partidascompras.precio_unitario = data.precio_unitario;
      this.partidascompras.centro_costo_id = data.catalogo_centro_costos_id;
      this.boton_actualizar_partida = 1;
    },
    guardarAP: function guardarAP() {
      var _this2 = this;
      if (this.partidascompras.precio_unitario === '') {
        toastr.warning('Escriba un precio unitario');
      } else if (this.partidascompras.cantidad === '') {
        toastr.warning('Escriba la cantidad real comprada');
      } else {
        axios.put('guardaractualizapartida', {
          'id_partida': this.partidascompras.id,
          'precio_unitario': this.partidascompras.precio_unitario,
          'cantidad': this.partidascompras.cantidad,
          'comentario': this.partidascompras.comentario
        }).then(function (response) {
          if (response.data.status === 'error') {
            swal({
              type: 'error',
              html: 'Ha ocurrido un error notifiqué al administrador y recarge la página'
            });
          } else {
            _this2.boton_actualizar_partida = 0;
            _this2.cargarpartidas(_this2.empleado);
            _this2.cerrarModal();
            _this2.cancelar();
            _this2.getArticulosRequisicion();
            toastr.success('Correcto', 'Partida actualizada correctamente');
          }
        })["catch"](function (error) {
          console.error(error);
        });
      }
    },
    formatPrecio: function formatPrecio(valor) {
      return parseFloat(valor);
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Compra/PartidasDos.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Compra/PartidasDos.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************/
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
      estadomodal: 0,
      boton_centro_costo: 0,
      boton_actualizar_partida: 0,
      boton_apartados: 0,
      desabilitar: false,
      verequivalente: false,
      guardarequivalente: false,
      desabilitar_precios: false,
      compra: {
        condicion: ''
      },
      partidascompras: {
        requisicione_id: 0,
        orden_compra_id: 0,
        articulo_id: 0,
        servicio_id: 0,
        articulo_uno_id: 0,
        servicio_uno_id: 0,
        nombrearti: '',
        nombrearti_uno: '',
        nombreserv_uno: '',
        cantidad: 0,
        precio_unitario: '',
        proyecto_id: 0,
        adicionales: 0,
        pda: '',
        cambio_equivalente: 0,
        comentario: '',
        cantidad_real: 0,
        centro_costo_id: '',
        id: ''
      },
      clases: {
        nombrearti: '',
        precio_unitario: '',
        cantidad: ''
      },
      tituloModala: '',
      empleado: null,
      tipoAccionpr: 0,
      detalle: 0,
      modala: 0,
      modal_agregar: 0,
      mostrar: 0,
      modalarticulos: 0,
      isLoadingDetalle: false,
      tableDataPartidasCompras: [],
      dataTableArticulo: [],
      //
      columnsart: ['codigo', 'nombre', 'descripcion', 'marca', 'calidad'],
      //
      columnsa: ['rf', 'descripciona', 'proyecton', 'rfs', 'cantidad_compra', 'unidad'],
      columnsserv: ['nombre_servicio', 'proveedor_marca', 'unidad_medida'],
      columnscompras: ['id', 'rf', 'rfs', 'ad', 'cantidad', 'precio_unitario'],
      //
      optionsart: {
        headings: {
          nombre: 'Nombre',
          descripcion: 'Descripción',
          marca: 'Marca',
          codigo: 'Codigo',
          id: 'Acción'
        },
        perPage: 10,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        sortable: ['codigo', 'nombre', 'descripcion', 'marca'],
        filterable: ['codigo', 'nombre', 'descripcion', 'marca'],
        filterByColumn: true,
        texts: config.texts
      },
      optionsserv: {
        headings: {
          nombre_servicio: 'Nombre del Servicio',
          proveedor_marca: 'Proveedor/Marca',
          unidad_medida: 'Unidad de Medida',
          id: 'Acciones'
        },
        perPage: 10,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        filterByColumn: true,
        texts: config.texts
      },
      optionsa: {
        headings: {
          rf: 'Folio de requisición',
          descripciona: 'Descripcion Artículo',
          proyecton: 'Proyecto',
          rfs: 'Fecha solicitud de la requisición',
          cantidad_compra: 'Cantidad'
        },
        perPage: 10,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        //  sortable: ['empleado.folio'],
        //  filterable: ['empleado.folio'],
        filterByColumn: true,
        texts: config.texts
      },
      optionscompras: {
        headings: {
          'id': 'Acción',
          // 'requisicione_id' : '',
          'rf': 'Folio Requisición',
          'rfs': 'Fecha Solicitud Requisición',
          'proyecton': 'Proyecto',
          'ad': 'Artículo',
          'cantidad': 'Cantidad'
        },
        perPage: 10,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        sortable: ['rf', 'rfs', 'proyecton', 'ad', 'cantidad', 'precio_unitario'],
        filterable: ['rf', 'rfs', 'proyecton', 'ad', 'cantidad', 'precio_unitario'],
        filterByColumn: true,
        listColumns: {
          condicion: [{
            id: 1,
            text: 'Activo'
          }, {
            id: 0,
            text: 'Dado de Baja'
          }]
        },
        texts: config.texts
      },
      centro_costo: []
    };
  },
  components: {},
  methods: {
    cargarpartidas: function cargarpartidas(data) {
      this.mostrar = 1;
      this.boton_centro_costo = 0;
      this.isLoadingDetalle = true;
      this.empleado = data;
      data.condicion == 2 ? this.desabilitar = true : this.desabilitar = false;
      this.compra.condicion = data['condicion'];
      this.partidascompras.orden_compra_id = data.id;
      var me = this;
      axios.get('/compras/' + data.id + '/' + 'compras').then(function (response) {
        me.tableDataPartidasCompras = response.data;
        me.isLoadingDetalle = false;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    /**
    * [abrirModalA description]
    * @param  {String} modelo    [description]
    * @param  {String} accion    [description]
    * @param  {[Int]} id        [description]
    * @param  {Array}  [data=[]] [description]
    * @return {}           [description]
    */
    abrirModalA: function abrirModalA(modelo, accion, id) {
      var data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
      // me.widgets.autorizarequisicion = true;

      switch (modelo) {
        case "articulo":
          {
            switch (accion) {
              case 'registrar':
                {
                  this.modala = 1;
                  this.tituloModala = 'Registrar artículo a la compra ';
                  _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.partidascompras);
                  _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.modala);
                  this.tipoAccionpr = 1;
                  this.partidascompras.orden_compra_id = id;
                  this.getArticulosRequisicion();
                  this.verequivalente = false;
                  this.guardarequivalente = false;
                  this.tipo = 0;
                  break;
                }
              case 'agregar':
                {
                  this.tipo = 1;
                  this.modal_agregar = 1;
                  _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.partidascompras);
                  _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.modala);
                  this.tipoAccionpr = 1;
                  this.partidascompras.orden_compra_id = id;
                  this.getArticulosRequisicion();
                  this.verequivalente = false;
                  this.guardarequivalente = false;
                  this.$refs.myTableArticulo.refresh();
                  break;
                }
            }
          }
      }
    },
    /**
    * [getArticulosRequisicion Metodo de consultas a la BD]
    * @return {Response} [Objeto almacenado en dataTableArticulo]
    *
    */
    getArticulosRequisicion: function getArticulosRequisicion() {
      var me = this;
      // var url = '/partidare';
      // url = url + me.empleado.proyecto_id == null ? '' : '/'me.empleado.proyecto_id
      axios.get('/partidare/' + (me.empleado.proyecto_id == null ? '' : me.empleado.proyecto_id)).then(function (response) {
        me.dataTableArticulo = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    /**
    * [seleccionarArticulo2 description]
    * @param  {Object} data [description]
    * @return {}      [description]
    */
    seleccionarArticulo2: function seleccionarArticulo2(data) {
      var me = this;
      this.partidascompras.comentario = data.row.comentario;
      this.partidascompras.pda = data.row.pda;
      this.partidascompras.requisicione_id = data.row.rid;
      this.partidascompras.articulo_id = data.row.articulo_id;
      this.partidascompras.servicio_id = data.row.servicio_id;
      this.partidascompras.nombrearti = data.row.descripciona;
      this.partidascompras.cantidad = data.row.cantidad_compra;
      this.partidascompras.cantidad_real = data.row.cantidad_compra;
      this.partidascompras.proyecto_id = data.row.proyectoi;
      if (data.row.equivalente == 1) {
        this.verequivalente = true;
      } else {
        this.verequivalente = true;
      }
      this.modala = 0;
      this.isLoadingg = false;
      me.cerrarModal();
    },
    seleccionarArticulosDos: function seleccionarArticulosDos(data) {
      this.partidascompras.articulo_id = data.row.id;
      this.partidascompras.nombrearti = data.row.descripcion;
      if (this.partidascompras.articulo_id == this.partidascompras.articulo_uno_id) {
        toastr.warning('Atención', 'Seleccione un artículo equivalente diferente al original');
      } else {
        this.modalarticulos = 0;
        this.verequivalente = false;
        this.guardarequivalente = true;
        this.partidascompras.cambio_equivalente = 1;
      }
    },
    seleccionarServicio: function seleccionarServicio(data) {
      this.partidascompras.servicio_id = data.row.id;
      this.partidascompras.nombrearti = data.row.nombre_servicio + ' ' + data.row.proveedor_marca;
      if (this.partidascompras.servicio_id == this.partidascompras.servicio_uno_id) {
        toastr.warning('Atención', 'Seleccione un servicio equivalente diferente al original');
      } else {
        this.modalarticulos = 0;
        this.verequivalente = false;
        this.guardarequivalente = true;
        this.partidascompras.cambio_equivalente = 1;
      }
    },
    cerrarModal: function cerrarModal() {
      this.modala = 0;
    },
    cerrarModalAgregar: function cerrarModalAgregar() {
      this.modal_agregar = 0;
    },
    maestro: function maestro() {
      var me = this;
      me.mostrar = 0;
      this.$emit('partidas:click', me.empleado.proyecto_id);
      this.cancelar();
    },
    validardetalle: function validardetalle() {
      if (this.partidascompras.nombrearti === '') {
        this.mensaje();
        this.validado = 0;
        this.clases.nombrearti = ' is-invalid';
      } else if (this.partidascompras.precio_unitario === '') {
        this.mensaje();
        this.validado = 0;
        this.clases.nombrearti = '';
        this.clases.precio_unitario = ' is-invalid';
      } else if (this.partidascompras.cantidad === '') {
        this.mensaje();
        this.validado = 0;
        this.clases.precio_unitario = '';
        this.clases.cantidad = ' is-invalid';
      } else {
        this.validado = 1;
        this.clases.cantidad = '';
      }
    },
    mensaje: function mensaje() {
      swal({
        title: 'Error complete todos los campos',
        type: 'warning',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Aceptar!',
        confirmButtonClass: 'btn btn-succeguardarEquivalentess',
        buttonsStyling: false,
        reverseButtons: true
      });
    },
    /**
    * [guardarPR guarda una partida a la compra]
    * @param  {Int} nuevo [description]
    * @param  {Int} idr   [description]
    * @return {Response}       [status = true]
    */
    guardarPR: function guardarPR(nuevo, idr) {
      //  console.log(this.partidascompras);
      if (this.validado == 1) {
        this.isLoadingDetalle = true;
        this.detalle = 1;
        var me = this;
        axios({
          method: nuevo ? 'POST' : 'PUT',
          url: nuevo ? '/requisicioncompra' : '/requisicioncompra' + '/' + this.partidascompras.requisicione_id,
          data: {
            'requisicione_id': this.partidascompras.requisicione_id,
            'orden_compra_id': this.partidascompras.orden_compra_id,
            'articulo_id': this.partidascompras.articulo_id,
            'servicio_id': this.partidascompras.servicio_id,
            'cantidad': this.partidascompras.cantidad,
            'precio_unitario': this.partidascompras.precio_unitario,
            'proyecto_id': this.partidascompras.proyecto_id,
            'adicionales': this.partidascompras.adicionales,
            'articulo_uno_id': this.partidascompras.articulo_uno_id,
            'servicio_uno_id': this.partidascompras.servicio_uno_id,
            'nombrearti_uno': this.partidascompras.nombrearti_uno,
            'folio': this.empleado.folio,
            'pda': this.partidascompras.pda,
            'cambio_equivalente': this.partidascompras.cambio_equivalente,
            'comentario': this.partidascompras.comentario,
            'centro_costo_id': this.partidascompras.centro_costo_id,
            'tipo': this.tipo
          }
        }).then(function (response) {
          me.isLoadingDetalle = false;
          if (response.data.status) {
            if (response.data.status === 'error') {
              swal({
                type: 'error',
                html: 'Ha ocurrido un error notifiqué al administrador y recarge la página'
              });
            } else {
              me.cargarpartidas(me.empleado);
              me.cerrarModal();
              me.cancelar();
              me.getArticulosRequisicion();
              me.tipo = 0;
              toastr.success('Correcto', 'Partida agregada a la compra correctamente');
            }
          } else {
            me.isLoadingDetalle = false;
            me.cerrarModal();
            me.cancelar();
            swal('Error!', 'No se pueden agregar articulos de diferentes proyectos!', 'warning');
          }
        })["catch"](function (error) {
          me.cancelar();
          me.isLoadingDetalle = false;
        });
      }
    },
    cancelar: function cancelar() {
      this.partidascompras.articulo_id = 0;
      this.partidascompras.servicio_id = 0;
      this.partidascompras.peso = 0;
      this.partidascompras.precio_unitario = "";
      this.partidascompras.cantidad = 0;
      this.partidascompras.fecha_requerido = "";
      this.partidascompras.nombrearti = "";
      this.tipoAccionpr = 0;
      this.partidascompras.requisicione_id = 0;
      this.partidascompras.adicionales = 0;
      this.verequivalente = false;
      this.guardarequivalente = false;
      this.desabilitar_precios = false;
      this.partidascompras.cambio_equivalente = 0;
      this.partidascompras.comentario = "";
      this.partidascompras.centro_costo_id = "";
      this.boton_centro_costo = 0;
      this.boton_apartados = 0;
      this.boton_actualizar_partida = 0;
    },
    /**
    * [eliminarpartidacompra description]
    * @param  {[type]} id      [description]
    * @param  {[type]} idr     [description]
    * @param  {[type]} activar [description]
    * @return {[type]}         [description]
    */
    eliminarpartidacompra: function eliminarpartidacompra(data, activar) {
      var _this = this;
      console.log(data);
      if (!activar) {
        this.swal_titulo = 'Esta seguro de remover este artículo de la compra?';
        this.swal_tle = 'Removido!';
        this.swal_msg = 'El registro ha sido removido con éxito.';
      }
      swal({
        title: this.swal_titulo,
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Aceptar!',
        cancelButtonText: 'Cancelar',
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-danger',
        buttonsStyling: false,
        reverseButtons: true
      }).then(function (result) {
        if (result.value) {
          var me = _this;
          axios.get('/requisicioncompra/' + data['id'] + '/edit').then(function (response) {})["catch"](function (error) {
            console.log(error);
          });
          //
          axios.get('/partidare/' + data['articulo_id'] + '&' + data['requisicione_id'] + '&' + data['servicio_id'] + '/activ').then(function (response) {
            if (!activar) {
              toastr.success('Eliminado Correctamente');
            }
            me.cargarpartidas(me.empleado);
            me.getArticulosRequisicion();
          })["catch"](function (error) {
            console.log(error);
          });
        } else if (result.dismiss === swal.DismissReason.cancel) {}
      });
    },
    comprarEquivalente: function comprarEquivalente() {
      var me = this;
      // me.isLoadingDetalle = true;
      toastr.warning('Atención', 'Seleccione el articulo/servicio equivalente');
      this.modalarticulos = 1;
      this.partidascompras.articulo_uno_id = this.partidascompras.articulo_id;
      this.partidascompras.nombrearti_uno = this.partidascompras.nombrearti;
      this.partidascompras.servicio_uno_id = this.partidascompras.servicio_id;
      this.desabilitar_precios = false;
      this.tipoAccionpr = 1;
    },
    //agragarsser vicio_id y servicio_id_uno y su description y ver como se guarda
    guardarEquivalente: function guardarEquivalente() {
      var me = this;
      me.isLoadingDetalle = true;
      // console.log(this.partidascompras);
      axios.post('/comprarequivalente', {
        requisicione_id: this.partidascompras.requisicione_id,
        articulo_id: this.partidascompras.articulo_id,
        servicio_id: this.partidascompras.servicio_id,
        articulo_uno_id: this.partidascompras.articulo_uno_id,
        servicio_uno_id: this.partidascompras.servicio_uno_id,
        nombrearti_uno: this.partidascompras.nombrearti_uno,
        folio: this.empleado.folio,
        pda: this.partidascompras.pda
      }).then(function (response) {
        me.cancelar();
        me.isLoadingDetalle = false;
        me.desabilitar_precios = false;
      })["catch"](function (error) {
        console.error(error);
      });
    },
    cerrarModalArticulos: function cerrarModalArticulos() {
      this.modalarticulos = 0;
    },
    actualizarpartidacomprauno: function actualizarpartidacomprauno(data, n) {
      this.partidascompras.nombrearti = data.ad;
      this.partidascompras.id = data.id;
      this.partidascompras.comentario = data.comentario;
      this.partidascompras.cantidad = data.cantidad;
      this.partidascompras.precio_unitario = data.precio_unitario;
      this.partidascompras.centro_costo_id = data.catalogo_centro_costos_id;
      this.boton_actualizar_partida = 1;
    },
    guardarAP: function guardarAP() {
      var _this2 = this;
      if (this.partidascompras.precio_unitario === '') {
        toastr.warning('Escriba un precio unitario');
      } else if (this.partidascompras.cantidad === '') {
        toastr.warning('Escriba la cantidad real comprada');
      } else {
        axios.put('guardaractualizapartida', {
          'id_partida': this.partidascompras.id,
          'precio_unitario': this.partidascompras.precio_unitario,
          'cantidad': this.partidascompras.cantidad,
          'comentario': this.partidascompras.comentario
        }).then(function (response) {
          if (response.data.status === 'error') {
            swal({
              type: 'error',
              html: 'Ha ocurrido un error notifiqué al administrador y recarge la página'
            });
          } else {
            _this2.boton_actualizar_partida = 0;
            _this2.cargarpartidas(_this2.empleado);
            _this2.cerrarModal();
            _this2.cancelar();
            _this2.getArticulosRequisicion();
            toastr.success('Correcto', 'Partida actualizada correctamente');
          }
        })["catch"](function (error) {
          console.error(error);
        });
      }
    },
    /**
    * [seleccionarArticuloAgregar description]
    * @param  {Object} data [description]
    * @return {}      [description]
    */
    seleccionarArticuloAgregar: function seleccionarArticuloAgregar(data) {
      var me = this;
      //this.partidascompras.pda = data.row.pda; //se crea en el controlador
      //this.partidascompras.requisicione_id = data.row.rid;//se crea en el controlador
      this.partidascompras.articulo_id = data.row.id;
      this.partidascompras.servicio_id = data.row.servicio_id;
      this.partidascompras.nombrearti = data.row.descripcion;
      //this.partidascompras.cantidad = data.row.cantidad_compra;
      //this.partidascompras.cantidad_real = data.row.cantidad_compra;
      this.partidascompras.proyecto_id = this.empleado.proyecto_id;
      if (data.row.equivalente == 1) {
        this.verequivalente = false; //ambos en true
      } else {
        this.verequivalente = false; //ambos en true
      }
      this.modal_agregar = 0;
      this.isLoadingg = false;
      this.tipo = 1;
      me.cerrarModalAgregar();
    },
    seleccionarServicioAgregar: function seleccionarServicioAgregar(data) {
      this.tipo = 1;
      this.partidascompras.servicio_id = data.row.id;
      this.partidascompras.nombrearti = data.row.nombre_servicio + ' ' + data.row.proveedor_marca;
      if (this.partidascompras.servicio_id == this.partidascompras.servicio_uno_id) {
        toastr.warning('Atención', 'Seleccione un servicio equivalente diferente al original');
      } else {
        this.modal_agregar = 0;
        this.verequivalente = false;
        this.guardarequivalente = true;
        this.partidascompras.cambio_equivalente = 1;
      }
    },
    cambiarEstado: function cambiarEstado(edo) {
      edo == 1 ? this.estadomodal = 1 : this.estadomodal = 2;
    },
    agregarArt: function agregarArt() {
      var me = this;
      me.$refs.articulo.abrirModal('articulo', 'registrar');
    },
    abrirModal: function abrirModal(data) {
      //this.$emit('enviar',data);
      //this.mostrar = false;
      var me = this;
      me.$refs.articulo.abrirModal('articulo', 'actualizar', data);
      me.cerrarModalAgregar();
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Compra/ProyectosCompras.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Compra/ProyectosCompras.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Herramientas/utilerias.js */ "./resources/assets/js/components/Herramientas/utilerias.js");

var config = (__webpack_require__(/*! ../../Herramientas/config-vuetables-client */ "./resources/assets/js/components/Herramientas/config-vuetables-client.js").call)(undefined);
var Compras = function Compras(r) {
  return __webpack_require__.e(/*! require.ensure | compras */ "compras").then((function () {
    return r(__webpack_require__(/*! ./Compras.vue */ "./resources/assets/js/components/Compras/Compra/Compras.vue"));
  }).bind(null, __webpack_require__))['catch'](__webpack_require__.oe);
};
var CardPrincipal = function CardPrincipal(r) {
  return __webpack_require__.e(/*! require.ensure | compras */ "compras").then((function () {
    return r(__webpack_require__(/*! ./CardPrincipal.vue */ "./resources/assets/js/components/Compras/Compra/CardPrincipal.vue"));
  }).bind(null, __webpack_require__))['catch'](__webpack_require__.oe);
};
var Partidas = function Partidas(r) {
  return __webpack_require__.e(/*! require.ensure | compras */ "compras").then((function () {
    return r(__webpack_require__(/*! ./Partidas.vue */ "./resources/assets/js/components/Compras/Compra/Partidas.vue"));
  }).bind(null, __webpack_require__))['catch'](__webpack_require__.oe);
};
var PartidasDos = function PartidasDos(r) {
  return __webpack_require__.e(/*! require.ensure | compras */ "compras").then((function () {
    return r(__webpack_require__(/*! ./PartidasDos.vue */ "./resources/assets/js/components/Compras/Compra/PartidasDos.vue"));
  }).bind(null, __webpack_require__))['catch'](__webpack_require__.oe);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      detalle: 1,
      detalles: false,
      PermisosCrud: {},
      cardprincipal: false,
      columns: ['id', 'nombre_corto', 'ciudad', 'fecha_inicio', 'fecha_fin'],
      tableData: [],
      options: {
        headings: {
          'id': 'Acciones',
          'nombre': 'Nombre',
          'nombre_corto': 'Nombre corto',
          'ciudad': 'Ciudad',
          'fecha_inicio': 'F. Inicio',
          'fecha_fin': 'F. Fin'
        },
        perPage: 10,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        sortable: ['nombre', 'nombre_corto', 'ciudad', 'fecha_inicio', 'fecha_fin', 'condicion'],
        filterable: ['nombre', 'nombre_corto', 'ciudad', 'fecha_inicio', 'fecha_fin', 'condicion'],
        filterByColumn: true,
        texts: config.texts
      }
    };
  },
  components: {
    'compras': Compras,
    'cardprincipal': CardPrincipal,
    'partidas': Partidas,
    'partidasdos': PartidasDos
  },
  methods: {
    getData: function getData() {},
    verdetalles: function verdetalles(data) {
      this.detalle = 2;
      var childCompras = this.$refs.compras;
      childCompras.getData(data.id);
    },
    maestro: function maestro(data) {
      this.detalle = 2;
      var childCompras = this.$refs.compras;
      childCompras.getData(data);
    },
    maestrob: function maestrob() {
      this.detalle = 1;
    },
    /**
     * [abrirModal description]
     * @param  {[String]} modelo    [description]
     * @param  {[String]} accion    [description]
     * @param  {Array}  [data=[]] [description]
     * @return {}           [description]
     */
    abrirModal: function abrirModal(modelo, accion) {
      var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var me = this;
      this.detalle = 3;
      var childcardprincipal = this.$refs.cardprincipal;
      childcardprincipal.cargarcardprincipal(modelo, accion, data, me.tableData);
    },
    cerrar: function cerrar(data) {
      this.detalle = 2;
    },
    cerrarModal: function cerrarModal() {
      this.detalle = 1;
    },
    //no hay requisicion
    cerrardos: function cerrardos(data) {
      var me = this;
      var childpartidas = this.$refs.partidas;
      childpartidas.cargarpartidas(data);
      this.detalle = 4;
    },
    //tiene requisicion
    cerrartres: function cerrartres(data) {
      var me = this;
      var childpartidasdos = this.$refs.partidasdos;
      childpartidasdos.cargarpartidas(data);
      this.detalle = 5;
    }
  },
  mounted: function mounted() {
    this.PermisosCrud = _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].getCRUD(this.$route.path);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Dashboard/Dashboard.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Dashboard/Dashboard.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Requisiciones = function Requisiciones(r) {
  return __webpack_require__.e(/*! require.ensure | compras */ "compras").then((function () {
    return r(__webpack_require__(/*! ./Requisiciones.vue */ "./resources/assets/js/components/Compras/Dashboard/Requisiciones.vue"));
  }).bind(null, __webpack_require__))['catch'](__webpack_require__.oe);
};
var modulo_id = 5;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      isLoading: false,
      listaPermisos: [],
      widgets: {
        autorizarequisicion: true,
        servicios: true,
        precios2: false
      }
    };
  },
  components: {
    'autorizarequisicion': Requisiciones
  },
  methods: {
    getListaPermisos: function getListaPermisos() {
      var _this = this;
      var id = 25;
      this.isLoading = true;
      var me = this;
      axios.post('/permisosdashboard/porusuariomodulo', {
        modulo_id: modulo_id
      }).then(function (response) {
        me.listaPermisos = response.data;
        me.isLoading = false;
        if (me.listaPermisos.indexOf('autorizarequisicion') >= 0) {
          me.widgets.autorizarequisicion = true;
          var childautorizarequisicion = _this.$refs.autorizarequisicion;
        }
      })["catch"](function (error) {
        console.log(error);
      });
    }
  },
  mounted: function mounted() {
    this.getListaPermisos();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Dashboard/Requisiciones.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Dashboard/Requisiciones.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************/
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
      isLoading: false,
      nuevo: null,
      solicitud: [],
      ver_partidas: false,
      detalles_solicitudes: null,
      tipo_cambio: 0,
      moneda: 0,
      list_requis: [],
      columns_requis: ['id', 'folio', 'nombrep', 'fecha_solicitud', 'nombre_solicita', 'nombre_autoriza', 'condicion'],
      options: {
        headings: {
          'id': 'Acciones',
          'nombrep': 'Proyecto',
          'nombre_solicita': 'Empleado que solicita',
          'nombre_autoriza': 'Empleado que autoriza',
          'condicion': 'Recibir'
        },
        perPage: 10,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        filterByColumn: true,
        texts: config.texts
      },
      list_partidas: [],
      columns_partidas: ['req.descripciona', 'req.cantidad_compra', 'req.um', 'req.fecha_requerido'],
      options_partidas: {
        headings: {
          'req.descripciona': 'Articulo/Servicio',
          'req.um': 'Unidad',
          'req.fecha_requerido': 'Fecha requerida',
          'req.cantidad_compra': 'Cantidad a comprar'
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
    /**
     * Obtiene las requisiciones por autorizar de compras
     */
    getData: function getData() {
      var _this = this;
      this.isLoading = true;
      axios.get('/requisicionesrecibir').then(function (res) {
        _this.isLoading = false;
        if (res.data.status) {
          _this.list_requis = res.data.requisiciones;
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    /**
     * Mostrar las partidas de la requi seleccionada
     */
    cargardetalle: function cargardetalle(id) {
      var _this2 = this;
      this.isLoading = true;
      this.ver_partidas = true;
      axios.get('/requisicioncompserart/' + id).then(function (res) {
        _this2.detalles_solicitudes = res.data;
        _this2.list_partidas = res.data;
        _this2.isLoading = false;
      });
    },
    /**
     * Autoriza o rechaza la requi seleccionada
     */
    autorizar: function autorizar(estado, id) {
      var _this3 = this;
      this.isLoading = true;
      if (estado == 4) {
        swal({
          title: '¿Autorizar requisición?',
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#4dbd74',
          cancelButtonColor: '#f86c6b',
          confirmButtonText: 'Aceptar',
          cancelButtonText: 'Cancelar',
          reverseButtons: true
        }).then(function (result) {
          _this3.isLoading = false;
          if (result.value) {
            axios.post('/autorizarequisicionproyectos', {
              id: id,
              estado: estado
            }).then(function (response) {
              toastr.success('Correcto', 'Requisición aprobada correctamente');
              _this3.getData();
            });
          }
        });
      } else {
        var cadena = ['Almacén', 'Supervisor'];
        var cadenaid = [10, 11];
        swal({
          title: 'Direccionar a...',
          input: 'select',
          inputOptions: cadena,
          inputPlaceholder: 'Seleccionar Estado',
          confirmButtonText: 'Continuar <i class="fa fa-arrow-right></i>',
          showCancelButton: true,
          customClass: 'form-check form-check-inline',
          inputValidator: function inputValidator(result) {
            return !result && 'Se Requiere Elegir un Elemento';
          }
        }).then(function (result) {
          _this3.isLoading = false;
          if (result.value) {
            axios.post('/autorizarequisicionproyectos', {
              id: id,
              estado: cadenaid[result.value]
            }).then(function (response) {
              if (response == 4) {
                toastr.success('Requisición recibida correctamente');
              } else {
                toastr.warning('Requisición rechazada');
              }
              _this3.getData();
            });
          }
        });
      }
    },
    /**
     * Descargar la requisición seleccionada
     */
    descargar: function descargar(data) {
      window.open('descargar-requisicionew/' + data.id, '_blank');
    },
    /**
     * Actualiza la descripción del artículo/servicio actual
     */
    guardarcorrecion: function guardarcorrecion(e, data) {
      axios.post('agregar/correciones/partidas', {
        requisicion_id: data.rid,
        pda: data.pda,
        articulo_servicio: data.articulo_id != null ? 1 : 0,
        articulo_servicio_id: data.articulo_id != null ? data.articulo_id : data.servicio_id,
        comentario: e.target.value
      }).then(function (res) {
        toastr.success('Guardado');
      });
    },
    /**
     * Regresar a la card de requisiciones
     */
    regresar: function regresar() {
      this.ver_partidas = false;
      this.detalles_solicitudes = null;
    }
  },
  mounted: function mounted() {
    this.getData();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Proveedores/Evaluacion.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Proveedores/Evaluacion.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Herramientas/utilerias.js */ "./resources/assets/js/components/Herramientas/utilerias.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

var config = (__webpack_require__(/*! ../../Herramientas/config-vuetables-client */ "./resources/assets/js/components/Herramientas/config-vuetables-client.js").call)(undefined);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      n_temp: 0,
      banco_edit: {},
      tipo_guardar: 1,
      ListBancos_temp: [],
      ListBancos: [],
      listaEmpleados: [],
      temp_proveedor_cuenta: '',
      temp_proveedor_clabe: '',
      temp_proveedor_banco: '',
      columnsProvedores: ["id", "banco", "cuenta", "clabe"],
      tableDataProveedores: [],
      optionsProveedores: {
        headings: {
          clabe: "Clabe",
          banco: "Banco de transferencia",
          cuenta: "No. de Cuenta",
          id: 'Acciones'
        },
        perPage: 10,
        perPageValues: [],
        skin: config.skin,
        texts: config.texts,
        filterable: false
      },
      modalProveedor: 0,
      PermisosCrud: {},
      Proveedor: {
        nombre: '',
        razon_social: '',
        direccion: '',
        banco_transferencia: '',
        // titular_cuenta : '',
        numero_cuenta: '',
        clabe: '',
        limite_credito: 0,
        condicion: 0,
        categoria: '',
        condicion_pago: '',
        giro: '',
        rfc: '',
        ciudad: '',
        estado: '',
        contacto: '',
        telefono: '',
        correo: '',
        pagina: '',
        descripcion: '',
        tipo_moneda: 0,
        tipo_cambio: ''
      },
      calificacion: {
        id: 0,
        uno: '',
        dos: '',
        tres: '',
        cuatro: '',
        cinco: '',
        seis: '',
        siete: '',
        ocho: '',
        nueve: '',
        diez: '',
        once: '',
        doce: '',
        trece: '',
        catorce: '',
        quince: '',
        diesiseis: '',
        diesisiete: '',
        diesiocho: '',
        fecha: '',
        evaluador: ''
      },
      listaProveedores: [],
      modal: 0,
      tituloModal: '',
      tipoAccion: 0,
      isLoading: false,
      isLoading_proveedores: false,
      columns: ['id', 'idControl', 'nombre', 'razon_social',
      //'rfc',
      'IdentificadorFiscal', 'total_evaluacion', 'fecha', 'direccion'],
      list_proveedores: [],
      options_proveedores: {
        headings: {
          id: 'Acciones',
          idControl: 'ID',
          nombre: 'Nombre',
          razon_social: 'Razón Social',
          direccion: 'Dirección',
          total_eval: 'Calificación',
          IdentificadorFiscal: 'Identificador Fiscal',
          fecha: 'Fecha'
        },
        perPage: 10,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        filterByColumn: true,
        texts: config.texts
      },
      periods: [],
      yearSince: 2021,
      yearUntil: 2025,
      selectedPeriod: null,
      anio: null,
      mes: null
    };
  },
  computed: {},
  created: function created() {
    this.setPeriodoActual();
  },
  mounted: function mounted() {
    this.getData();
    this.generatePeriods();
    this.setPeriodoActual();
  },
  methods: {
    setPeriodoActual: function setPeriodoActual() {
      var today = new Date();
      var currentMonth = today.getMonth() + 1;
      var currentYear = today.getFullYear();
      this.anio = currentYear;
      if (currentMonth >= 2 && currentMonth <= 7) {
        this.mes = 8; // Agosto
      } else {
        this.mes = 2; // febrero 
      }
      this.ObtenerProveedores();
    },
    getData: function getData() {
      this.PermisosCrud = _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].getCRUD(this.$route.path);
      this.listaEmpleados.push({
        id: 390,
        name: 'DOMINICK TOVANY MARTINEZ'
      }, {
        id: 422,
        name: 'ADRIANA HERRERA FLORES'
      }, {
        id: 833,
        name: 'DIANA LARISA PEREZ DIAZ'
      }, {
        id: 154,
        name: 'VALERIA HERNANDEZ MARTINEZ'
      }, {
        id: 893,
        name: 'JOSEFINA GUADALUPE LOPEZ BARTOLO'
      }, {
        id: 390,
        name: 'MARIA DE LA LUZ MARTINEZ HERRERA'
      });
    },
    /*periodo de evaluación del 2021 al 2025 */generatePeriods: function generatePeriods() {
      this.periods = [];
      for (var year = this.yearSince; year <= this.yearUntil; year++) {
        this.periods.push({
          month: "Febrero ".concat(year),
          anio: year,
          mes: 2
        });
        this.periods.push({
          month: "Agosto ".concat(year),
          anio: year,
          mes: 8
        });
      }
    },
    selectPeriods: function selectPeriods(anio, mes) {
      this.anio = anio;
      this.mes = mes;
      this.ObtenerProveedores();
    },
    /**
     * Obtiene los proveedores registrados y la evaluación del año seleccionado
     */
    ObtenerProveedores: function ObtenerProveedores() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var res, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _this.isLoading_proveedores = true;
              _context.p = 1;
              _context.n = 2;
              return axios.get("compras/evaluacion/obtenerproveedores/".concat(_this.anio, "/").concat(_this.mes));
            case 2:
              res = _context.v;
              if (res.data.status) {
                _this.list_proveedores = Array.isArray(res.data.proveedores) ? res.data.proveedores : [];
              } else {
                _this.list_proveedores = [];
                toastr.error(res.data.mensaje);
              }
              _context.n = 4;
              break;
            case 3:
              _context.p = 3;
              _t = _context.v;
              _this.list_proveedores = [];
              toastr.error('Error al obtener proveedores');
            case 4:
              _context.p = 4;
              _this.isLoading_proveedores = false;
              return _context.f(4);
            case 5:
              return _context.a(2);
          }
        }, _callee, null, [[1, 3, 4, 5]]);
      }))();
    },
    /**
     * Registrar evaluación de proveedor
     */
    GuardarEvaluacion: function GuardarEvaluacion(nuevo) {
      var _this2 = this;
      this.$validator.validate().then(function (result) {
        if (!result) return;
        _this2.isLoading = true;
        var data = new FormData();
        if (!nuevo) data.append("id", _this2.calificacion.id);
        data.append("uno", _this2.calificacion.uno);
        data.append("dos", _this2.calificacion.dos);
        data.append("tres", _this2.calificacion.tres);
        data.append("cuatro", _this2.calificacion.cuatro);
        data.append("cinco", _this2.calificacion.cinco);
        data.append("seis", _this2.calificacion.seis);
        data.append("siete", _this2.calificacion.siete);
        data.append("ocho", _this2.calificacion.ocho);
        data.append("nueve", _this2.calificacion.nueve);
        data.append("diez", _this2.calificacion.diez);
        data.append("once", _this2.calificacion.once);
        data.append("doce", _this2.calificacion.doce);
        data.append("trece", _this2.calificacion.trece);
        data.append("catorce", _this2.calificacion.catorce);
        data.append("quince", _this2.calificacion.quince);
        data.append("diesiseis", _this2.calificacion.diesiseis);
        data.append("diesisiete", _this2.calificacion.diesisiete);
        data.append("diesiocho", _this2.calificacion.diesiocho);
        data.append("evaluador", _this2.calificacion.evaluador.id);
        data.append("fecha", _this2.calificacion.fecha);
        data.append("proveedor_id", _this2.calificacion.proveedor_id);
        axios.post('compras/evaluacion/guardar', data).then(function (res) {
          _this2.isLoading = false;
          if (res.data.status) {
            _this2.CerrarModalEvaluacion();
            _this2.ObtenerProveedores();
            if (nuevo) toastr.success('Calificación Agregada Correctamente');else toastr.success('Calificación Actualizada Correctamente');
          } else {
            toastr.error(res.data.mensaje);
          }
        });
      });
    },
    /**
     * Cerrar modal de evaluación
     */
    CerrarModalEvaluacion: function CerrarModalEvaluacion() {
      this.modal = 0;
      this.LimpiarCalificacion();
      this.tituloModal = '';
      _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.calificacion);
    },
    /**
     * Borrar los datos de la calificación
     */
    LimpiarCalificacion: function LimpiarCalificacion() {
      var f = new Date();
      var anio = f.getFullYear();
      var mes = (f.getMonth() + 1).toString().padStart(2, "0");
      var dia = f.getDate().toString().padStart(2, "0");
      // TODO: Fecha temporal para terminar evaluaciones del 2021
      var fecha = "".concat(2021, "-", 12, "-", 22);
      this.calificacion = {
        id: 0,
        uno: 1,
        dos: 1,
        tres: 1,
        cuatro: 1,
        cinco: 1,
        seis: 1,
        siete: 1,
        ocho: 1,
        nueve: 1,
        diez: 1,
        once: 1,
        doce: 1,
        trece: 1,
        catorce: 1,
        quince: 1,
        diesiseis: 1,
        diesisiete: 1,
        diesiocho: 1,
        fecha: fecha,
        evaluador: {}
      };
    },
    /**
     * Abrir modal para registro/actualización de la evaluación
     */
    AbrirModalEvaluacion: function AbrirModalEvaluacion(evaluacion) {
      var _this3 = this;
      this.modal = 1;
      var tipo = "";
      if (evaluacion.ep_id == null) {
        this.LimpiarCalificacion();
        this.calificacion.proveedor_id = evaluacion.id;
        // Nuevo
        tipo = "Registar";
        this.tipoAccion = 1;
      } else {
        axios.get("compras/evaluacion/obtener/" + evaluacion.ep_id).then(function (res) {
          if (res.data.status) {
            tipo = "Actualizar";
            _this3.tipoAccion = 2;
            _this3.calificacion = _objectSpread({}, res.data.evaluacion);
            _this3.calificacion.evaluador = {
              id: res.data.evaluacion.evaluador,
              name: res.data.evaluacion.empleado
            };
          } else {
            toastr.error(res.data.mensaje);
          }
        });
      }
      this.tituloModal = "".concat(tipo, " evaluacion de ").concat(evaluacion.razon_social);
    },
    /**
     * Descargar el formato de evaluación de proveedor
     */
    DescargrEvaluacion: function DescargrEvaluacion(evaluacion) {
      window.open("compras/evaluacion/descargar/" + evaluacion.ep_id, '_blank');
    },
    /**
     * Descarga el reporte del año seleccionado
     */
    DescargarReporte: function DescargarReporte() {
      window.open("compras/evaluacion/descargarreporte/" + this.anio);
    },
    DescargarCartas: function DescargarCartas() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var response, url, link, _error$response, _t2;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              if (!(!_this4.anio || !_this4.mes)) {
                _context2.n = 1;
                break;
              }
              return _context2.a(2);
            case 1:
              _context2.p = 1;
              _this4.isLoading_proveedores = true;
              _context2.n = 2;
              return axios({
                url: "compras/evaluacion/download-cards/".concat(_this4.anio, "/").concat(_this4.mes),
                method: 'GET',
                responseType: 'blob'
              });
            case 2:
              response = _context2.v;
              url = window.URL.createObjectURL(new Blob([response.data]));
              link = document.createElement('a');
              link.href = url;
              link.setAttribute('download', "Cartas_".concat(_this4.mes, "_").concat(_this4.anio, ".zip"));
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
              window.URL.revokeObjectURL(url);
              _context2.n = 4;
              break;
            case 3:
              _context2.p = 3;
              _t2 = _context2.v;
              console.error('Error al descargar las cartas:', _t2);
              toastr.error(((_error$response = _t2.response) === null || _error$response === void 0 || (_error$response = _error$response.data) === null || _error$response === void 0 ? void 0 : _error$response.message) || 'No se pudo descargar el ZIP. Intenta de nuevo.');
            case 4:
              _context2.p = 4;
              _this4.isLoading_proveedores = false;
              return _context2.f(4);
            case 5:
              return _context2.a(2);
          }
        }, _callee2, null, [[1, 3, 4, 5]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Proveedores/Proveedor.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Proveedores/Proveedor.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
<<<<<<< HEAD
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../Components/ModalComponent.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
=======
/* harmony import */ var _Components_ModalComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Components/ModalComponent.vue */ "./resources/assets/js/components/Components/ModalComponent.vue");
>>>>>>> develop
/* harmony import */ var _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Herramientas/utilerias.js */ "./resources/assets/js/components/Herramientas/utilerias.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


var config = (__webpack_require__(/*! ../../Herramientas/config-vuetables-client */ "./resources/assets/js/components/Herramientas/config-vuetables-client.js").call)(undefined);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
<<<<<<< HEAD
    ModalComponent: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../Components/ModalComponent.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
=======
    ModalComponent: _Components_ModalComponent_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
>>>>>>> develop
  },
  data: function data() {
    return {
      n_temp: 0,
      banco_edit: {},
      tipo_guardar: 1,
      ListBancos_temp: [],
      ListBancos: [],
      temp2_proveedor_cuenta: '',
      temp2_proveedor_clabe: '',
      temp2_proveedor_condiciones: "",
      temp2_proveedor_moneda: "MXN",
      temp2_proveedor_banco: '',
      temp_proveedor_cuenta: '',
      temp_proveedor_clabe: '',
      temp_proveedor_condiciones: "",
      temp_proveedor_moneda: "MXN",
      temp_proveedor_banco: '',
      rfc_valido: false,
      isLoading_proveedores: false,
      url: '/proveedores',
      columnsProvedores: ["banco", "cuenta", "clabe", "moneda", "condiciones"],
      tableDataProveedores: [],
      optionsProveedores: {
        headings: {
          clabe: "Clabe",
          condiciones: "Condición de pago",
          cuenta: "No. de Cuenta"
        },
        perPage: 20,
        perPageValues: [],
        skin: config.skin,
        texts: config.texts,
        filterable: false
      },
      modalProveedor: 0,
      tipo_proveedor: 1,
      PermisosCrud: {},
      proveedor: {},
      listaProveedores: [],
      modal: 0,
      tituloModal: '',
      tipoAccion: 0,
      isLoading: false,
      columns: ['id', 'idControl', 'nombre', 'razon_social',
      //"rfc",
      "IdentificadorFiscal", "contacto", 'categoria', "condicion"],
      list_proveedores: [],
      options: {
        headings: {
          id: 'Acciones',
          idControl: 'ID',
          nombre: 'Nombre Comercial',
          IdentificadorFiscal: 'Indentificador Fiscal',
          razon_social: 'Razón Social',
          direccion: 'Dirección',
          condicion: 'Estado'
        },
        perPage: 20,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        filterByColumn: true,
        texts: config.texts
      },
      /**Modal historial */
      list_historial: [],
      nombre_proveedor: "",
      ver_modal_historial: false,
      isObtenerHistorial_loading: false,
      /* Listas de opciones */
      list_giro_suministro: [],
      list_modificaciones: [],
      list_modificaciones_db: [],
      list_tipos_documentos: [],
      list_tipos_documentos_db: [],
      anio: null,
      rfcTouched: false,
      taxidTouched: false,
      Years: [],
      yearSince: 2020,
      yearUntil: new Date().getFullYear(),
      showModalExcel: false,
      loading: false,
      isDownloading: false,
      taxidValido: false,
      form: {
        razon_social: '',
        nombre: '',
        giro: '',
        nacionalidad: '',
        calle: '',
        no_exterior: '',
        no_interior: '',
        cp: '',
        colonia: '',
        municipio: '',
        ciudad: '',
        estado: '',
        temp2_proveedor_banco: '',
        temp2_proveedor_cuenta: '',
        temp2_proveedor_clabe: '',
        temp2_proveedor_moneda: '',
        limite_credito: '',
        ventas_contacto: '',
        ventas_telefono: '',
        ventas_celular: '',
        ventas_correo: '',
        facturacion_contacto: '',
        facturacion_telefono: '',
        facturacion_celular: '',
        facturacion_correo: ''
      }
    };
  },
  watch: {
    //Observar cambios para el RFC
    'proveedor.rfc': function proveedorRfc(newVal) {
      //si viene vacio 
      if (!newVal) {
        this.rfc_valido = false;
        this.rfcTouched = false;
        return;
      }
      //Letras en mayusculas
      var rfc = newVal.toUpperCase();
      if (rfc !== newVal) {
        this.proveedor.rfc = rfc;
        return;
      }
      //Marca como tocado
      this.rfcTouched = true;

      //validar RFC
      this.rfc_valido = this.AuxValidarRFC(rfc);
    },
    'proveedor.taxid': function proveedorTaxid(nuevoValor) {
      if (!nuevoValor) {
        this.taxidValido = false;
        this.taxidTouched = false;
        return;
      }
      // Formatear automáticamente con guion
      this.proveedor.taxid = this.formatEIN(nuevoValor);

      // Marcar como tocado
      this.taxidTouched = true;

      // 3Validar EIN
      this.taxidValido = this.validarTaxIdUSA(this.proveedor.taxid);
    }
  },
  created: function created() {
    this.setperiodCurrentYear();
  },
  computed: {
    typePeople: function typePeople() {
      if (!this.proveedor.rfc) return null;
      if (this.proveedor.rfc.length === 12) return 'moral';
      if (this.proveedor.rfc.length === 13) return 'fisica';
      return null;
    },
    rfcDisabled: function rfcDisabled() {
      !!this.proveedor.rfc;
      return;
    },
    taxidDisabled: function taxidDisabled() {
      !!this.proveedor.taxid;
      return;
    }
  },
  methods: {
    setperiodCurrentYear: function setperiodCurrentYear() {
      this.anio = new Date().getFullYear();
    },
    /** Periodo de proveedores 2020 a  fecha actual */generateYears: function generateYears() {
      this.Years = [];
      for (var year = this.yearSince; year <= this.yearUntil; year++) {
        this.Years.push({
          anio: year
        });
      }
    },
    selectYear: function selectYear(anio) {
      this.anio = anio;
      this.ObtenerProveedores();
    },
    /**
     * Obtener todos los proveedores
     */
    ObtenerProveedores: function ObtenerProveedores() {
      var _this = this;
      this.isLoading_proveedores = true;
      axios.get("/compras/proveedores/obtener/" + this.anio).then(function (res) {
        _this.isLoading_proveedores = false;
        if (res.data.status) {
          _this.list_proveedores = res.data.proveedores;
        } else toastr.error(res.data.mensaje);
      });
    },
    /**
      * Registra o actualiza el proveedore actual
      */
    GuardarProveedor: function GuardarProveedor(nuevo) {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var isValid, tieneRFC, tieneTaxID, data, res, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _context.p = 0;
              _context.n = 1;
              return _this2.$validator.validate();
            case 1:
              isValid = _context.v;
              if (isValid) {
                _context.n = 2;
                break;
              }
              return _context.a(2);
            case 2:
              tieneRFC = !!_this2.proveedor.rfc;
              tieneTaxID = !!_this2.proveedor.taxid;
              if (!(tieneRFC && tieneTaxID)) {
                _context.n = 3;
                break;
              }
              toastr.warning('No puede enviar RFC y TAX ID juntos');
              return _context.a(2);
            case 3:
              if (!(!tieneRFC && !tieneTaxID)) {
                _context.n = 4;
                break;
              }
              toastr.warning('Debe ingresar RFC o TAX ID');
              return _context.a(2);
            case 4:
              if (!(_this2.tipo_proveedor === 1 && !_this2.rfc_valido)) {
                _context.n = 5;
                break;
              }
              toastr.warning("Ingrese un RFC válido");
              return _context.a(2);
            case 5:
              if (!(_this2.tipo_proveedor === 2 && !_this2.taxidValido)) {
                _context.n = 6;
                break;
              }
              toastr.warning("Ingrese un Tax ID válido");
              return _context.a(2);
            case 6:
              if (_this2.tipo_proveedor == 1) {
                _this2.proveedor.nacionalidad = 'NACIONAL';
              } else if (_this2.tipo_proveedor == 2) {
                _this2.proveedor.nacionalidad = 'EXTRANJERO';
              } else {
                _this2.proveedor.nacionalidad = null;
              }
              Object.keys(_this2.proveedor).forEach(function (key) {
                if (_this2.proveedor[key] === '' || _this2.proveedor[key] === 'N/A') {
                  _this2.proveedor[key] = null;
                }
              });
              data = new FormData();
              _this2.isLoading = true;
              _this2.proveedor.tipos_modificacion = _this2.list_modificaciones_db.join(',');
              _this2.proveedor.tipos_documentos = _this2.list_tipos_documentos_db.join(',');
              if (!nuevo) data.append("id", _this2.proveedor.id);
              data.append("nombre", _this2.proveedor.nombre);
              data.append("direccion", _this2.proveedor.direccion);
              data.append("razon_social", _this2.proveedor.razon_social);
              data.append("giro", _this2.proveedor.giro);
              if (_this2.tipo_proveedor == 1) {
                data.append("rfc", _this2.proveedor.rfc);
              }
              if (_this2.tipo_proveedor == 2) {
                data.append("taxid", _this2.proveedor.taxid);
              }
              data.append("pagina", _this2.proveedor.pagina);
              data.append("lista_bancos", JSON.stringify(_this2.ListBancos.filter(function (b) {
                return b.temp;
              })));
              data.append("regimen_fiscal", _this2.proveedor.regimen_fiscal);
              data.append("limite_credito", _this2.proveedor.limite_credito);
              data.append("calle", _this2.proveedor.calle);
              data.append("no_exterior", _this2.proveedor.no_exterior);
              data.append("no_interior", _this2.proveedor.no_interior);
              data.append("estado", _this2.proveedor.estado);
              data.append("ciudad", _this2.proveedor.ciudad);
              data.append("cp", _this2.proveedor.cp);
              data.append("nacionalidad", _this2.proveedor.nacionalidad);
              data.append("colonia", _this2.proveedor.colonia);
              data.append("municipio", _this2.proveedor.municipio);
              data.append("ventas_contacto", _this2.proveedor.ventas_contacto);
              data.append("ventas_telefono", _this2.proveedor.ventas_telefono);
              data.append("ventas_celular", _this2.proveedor.ventas_celular);
              data.append("ventas_correo", _this2.proveedor.ventas_correo);
              data.append("facturacion_contacto", _this2.proveedor.facturacion_contacto);
              data.append("facturacion_telefono", _this2.proveedor.facturacion_telefono);
              data.append("facturacion_celular", _this2.proveedor.facturacion_celular);
              data.append("facturacion_correo", _this2.proveedor.facturacion_correo);
              data.append("modificacion", _this2.proveedor.modificacion);
              data.append("anexos", _this2.proveedor.anexos);
              data.append("tipos_modificacion", _this2.proveedor.tipos_modificacion);
              data.append("tipos_documentos", _this2.proveedor.tipos_documentos);
              // Banco inicial
              data.append("temp2_proveedor_cuenta", _this2.temp2_proveedor_cuenta);
              data.append("temp2_proveedor_clabe", _this2.temp2_proveedor_clabe);
              data.append("temp2_proveedor_condiciones", _this2.temp2_proveedor_condiciones);
              data.append("temp2_proveedor_moneda", _this2.temp2_proveedor_moneda);
              data.append("temp2_proveedor_banco", _this2.temp2_proveedor_banco);
              _context.n = 7;
              return axios.post(_this2.url, data).then(function (res) {
                if (res.data.status) {
                  _this2.cerrarModal();
                  _this2.ObtenerProveedores();
                  if (nuevo) {
                    toastr.success('Proveedor Registrado Correctamente');
                  } else {
                    toastr.success('Proveedor Actualizado Correctamente');
                  }
                }
              });
            case 7:
              res = _context.v;
              _context.n = 9;
              break;
            case 8:
              _context.p = 8;
              _t = _context.v;
              toastr.error(_t.response.data.message);
            case 9:
              _context.p = 9;
              _this2.isLoading = false;
              return _context.f(9);
            case 10:
              return _context.a(2);
          }
        }, _callee, null, [[0, 8, 9, 10]]);
      }))();
    },
    /**
     * Activar o desactivar el proveedor seleccionado
     */
    actdesact: function actdesact(id, activar) {
      var _this3 = this;
      var data = new FormData();
      data.append("id", id);
      data.append("condicion", activar);
      axios.post("compras/proveedores/activar", data).then(function (res) {
        if (res.data.status) {
          toastr.success("Actualizado correctamente");
          _this3.ObtenerProveedores();
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    /**
     * Cerrar modal de proveedores
     */
    cerrarModal: function cerrarModal() {
      var _this4 = this;
      this.ListBancos = [];
      this.modal = 0;
      this.tituloModal = '';
      this.n_temp = 0;
      var tempBancos = this.ListBancos.filter(function (b) {
        return b.id > 100;
      });
      tempBancos.forEach(function (b) {
        var s = _this4.ListBancos.indexOf(b);
        var index = _this4.ListBancos.indexOf(b);
        _this4.ListBancos.splice(index, 1);
      });
      this.proveedor = {};
    },
    LimpiarProveedor: function LimpiarProveedor() {
      this.proveedor = {
        razon_social: "",
        nombre: "N/D",
        giro: "N/D",
        // rfc: "XAXX010101000",
        rfc: "",
        regimen_fiscal: "N/D",
        nacionalidad: "N/D",
        regimen: "N/D",
        calle: "N/D",
        colonia: "N/D",
        ciudad: "N/D",
        no_exterior: "N/D",
        no_interior: "N/D",
        cp: "00000",
        municipio: "N/D",
        limite_credito: 0,
        estado: "N/D",
        pagina: "N/D",
        ventas_contacto: "N/D",
        ventas_telefono: "N/D",
        ventas_correo: "N/D",
        ventas_celular: "-",
        facturacion_contacto: "N/D",
        facturacion_telefono: "-",
        facturacion_correo: "-",
        facturacion_celular: "-",
        modificacion: "-",
        anexos: "-",
        tiposdocumentos: "",
        tipos_modificacion: "",
        tipos_documentos: ""
      };
      this.temp2_proveedor_cuenta = '000000';
      this.temp2_proveedor_clabe = '000000';
      this.temp2_proveedor_condiciones = "N/D";
      this.temp2_proveedor_moneda = "MXN";
      this.temp2_proveedor_banco = 'N/D';
      this.temp_proveedor_cuenta = 'N/D';
      this.temp_proveedor_clabe = 'N/D';
      this.temp_proveedor_condiciones = "N/D";
      this.temp_proveedor_moneda = "MXN";
      this.temp_proveedor_banco = 'N/D';
      this.list_giro_suministro = [];
      this.list_modificaciones = [];
      this.list_tipos_documentos = [];
    },
    /**
     * Abrir modal para el registro/actualización del proveedore
     */
    abrirModal: function abrirModal() {
      var nuevo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.LimpiarProveedor();
      this.modal = 1;
      this.n_temp = 100;
      if (nuevo)
        // Registar
        {
          this.ListBancos = [];
          this.tituloModal = 'Registrar Nuevo proveedor';
          this.tipoAccion = 1;
          this.list_modificaciones_db = [];
          this.list_tipos_documentos_db = [];
          this.CargarSuministrosGiros("", true);
          this.CargarModificaciones("", true);
          this.CargarTipoDocumento("", true);
        } else {
        // Actualizar
        this.ListBancos = data["bancos"];
        this.tituloModal = 'Actualizar proveedor';
        this.tipoAccion = 2;
        this.proveedor = _objectSpread(_objectSpread({}, data), {}, {
          anexos: "-",
          modificacion: "ACTUALIZACIÓN DE DATOS"
        });
        this.ValidarRFC();
        this.CargarSuministrosGiros(data.giro, false);
        this.CargarModificaciones(this.proveedor.tipos_modificacion, false);
        this.CargarTipoDocumento(this.proveedor.tipos_documentos, false);
      }
    },
    /**
     * Abrir modal de registro de bancos de proveedor
     */
    AbrirModalBancos: function AbrirModalBancos(nuevo, model) {
      this.modalProveedor = 1;
      this.temp_proveedor_condiciones = "-";
      this.temp_proveedor_moneda = "MXN";
      if (nuevo == 1)
        //Crear nuevo
        {
          this.tipo_guardar = 1;
        } else
        //actualizar
        {
          this.tipo_guardar = 2;
          this.banco_edit = model;
          this.temp_proveedor_banco = model.banco;
          this.temp_proveedor_clabe = model.clabe;
          this.temp_proveedor_cuenta = model.cuenta;
        }
    },
    /**
     * Cerrar modal de registro de bancos
     */
    CerrarModalProveedores: function CerrarModalProveedores() {
      this.modalProveedor = 0;
      this.ListBancos_temp = [];
      // this.ListBancos = [];
    },
    /**
     * Guardar temporalmente el banco creado
     */
    guardarProveedoresTemp: function guardarProveedoresTemp(tipo) {
      var t = this;
      if (t.temp_proveedor_banco == '') {
        toastr.warning("Ingrese un banco");
        return;
      }
      if (t.temp_proveedor_cuenta == '') {
        toastr.warning("Ingrese una cuenta");
        return;
      }
      if (t.temp_proveedor_clabe == '') {
        toastr.warning("Ingrese una clabe");
        return;
      }
      if (tipo == 1)
        //nuevo
        {
          // Guardar temporal
          var nuevo = {
            id: t.n_temp,
            banco: t.temp_proveedor_banco,
            cuenta: t.temp_proveedor_cuenta,
            clabe: t.temp_proveedor_clabe,
            condiciones: t.temp_proveedor_condiciones,
            moneda: t.temp_proveedor_moneda,
            temp: true
          };
          this.ListBancos.push(nuevo);
          t.temp_proveedor_banco = "";
          t.temp_proveedor_cuenta = "";
          t.temp_proveedor_clabe = "";
          this.CerrarModalProveedores();
          toastr.info("Banco registrado temporalmente");
          toastr.success("Presione Actualizar par guardar el banco");
          t.n_temp += 1;
        } else
        // actualizar
        {
          var anterior = t.banco_edit;
          var _nuevo = {
            id: t.banco_edit.id,
            banco: t.temp_proveedor_banco,
            cuenta: t.temp_proveedor_cuenta,
            clabe: t.temp_proveedor_clabe,
            proveedor_id: t.banco_edit.proveedor_id
          };
          var index = this.ListBancos.findIndex(function (b) {
            return b.id == t.banco_edit.id;
          });
          if (index >= 0) {
            this.ListBancos.splice(index, 1, _nuevo);
          } else {
            toastr.error("Datos bancarios no encontrados");
          }
          t.temp_proveedor_banco = "";
          t.temp_proveedor_cuenta = "";
          t.temp_proveedor_clabe = "";
          this.CerrarModalProveedores();
        }
    },
    /**
     * Desactivar el banco seleccionado
     */
    DesactivarBanco: function DesactivarBanco(model) {
      if (model.temp) {
        //temporal
        var index = this.ListBancos.indexOf(model);
        this.ListBancos.splice(index, 1);
        toastr.success("Banco temporal eliminado");
        this.CerrarModalProveedores();
      }
    },
    /**
     * Descargar el reporte de los proveedores
     */
    DescargarReporte: function DescargarReporte() {
      window.open("compras/reportes/catalogoproveedores/" + this.anio, '_blank');
    },
    ValidarRFC: function ValidarRFC() {
      var rfc = this.proveedor.rfc;
      this.rfc_valido = this.AuxValidarRFC(rfc, false);
    },
    /**
     * Validar RFC
     */
    AuxValidarRFC: function AuxValidarRFC(rfc) {
      var aceptarGenerico = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      if (!rfc) return false;
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
    },
    /**Validación TAX ID */formatEIN: function formatEIN(value) {
      var digits = value.replace(/\D/g, ''); // solo numeros
      if (digits.length > 9) digits = digits.slice(0, 9);
      return digits.length > 2 ? digits.slice(0, 2) + '-' + digits.slice(2) : digits;
    },
    validarTaxIdUSA: function validarTaxIdUSA(taxid) {
      var einRegex = /^\d{2}-\d{7}$/;
      return einRegex.test(taxid);
    },
    /**
     * Obtener el historial de los cambios del proveedore seleccioando
     */
    Historial: function Historial(proveedor) {
      var _this5 = this;
      this.nombre_proveedor = proveedor.nombre;
      var id = proveedor.id;
      this.ver_modal_historial = true;
      this.isObtenerHistorial_loading = true;
      axios.get("compras/proveedores/historial/" + id).then(function (res) {
        _this5.isObtenerHistorial_loading = false;
        if (res.data.status) {
          _this5.list_historial = res.data.historial;
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    CerrarModalHistorial: function CerrarModalHistorial() {
      this.ver_modal_historial = false;
      this.list_historial = [];
    },
    /**
     * Descargar el formato de alta/modificacion
     */
    DescargarHistorial: function DescargarHistorial(id) {
      window.open("compras/proveedores/descargarhistorial/" + id);
    },
    DescargarReporteTemp: function DescargarReporteTemp() {
      window.open("compras/reportes/proveedores2");
    },
    CargarSuministrosGiros: function CargarSuministrosGiros(giroRegistrado) {
      var nuevo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var suministros = ["ALIMENTOS", "CALIBRACIÓN DE EQUIPOS", "CERTIFICACIÓN", "CERTIFICADOS MÉDICOS", "COMBUSTIBLE", "CONSUMIBLES / HERRAMIENTAS", "CURSOS", "EPP", "EQUIPOS DE SEGURIDAD Y/O EMERGENCIA", "FARMACIA", "FLETE / PAQUETERÍA / LOGISTICA", "HIDRATACIÓN", "HOSPEDAJE", "INSTRUMENTOS", "LABORATORIO DE ENSAYO", "LIMPIEZA", "MANTENIMIENTO EQUIPOS Y HERRAMIENTAS", "MATERIAL CIVIL", "MATERIAL ELÉCTRICO", "MATERIAL ESTRUCTURAL", "MATERIAL MECÁNICO", "MATERIAL NEUMÁTICO", "MATERIAL PARA EMBALAJE", "PAPELERÍA / INFORMÁTICA / IMPRENTA", "PINTURA", "PROGRAMA DE PROTECCIÓN CIVIL", "PRUEBAS DE CALIDAD (PNDS)", "RECOLECCIÓN DE RESIDUOS", "SANITARIOS PORTÁTILES", "SERVICIO GRÚAS / MONTACARGAS", "SERVICIOS MAQUINADO", "SERVICIOS PARA LIBRANZA", "VEHÍCULOS"];
      if (!nuevo) {
        if (giroRegistrado && !suministros.some(function (s) {
          return s === giroRegistrado.toUpperCase();
        })) {
          suministros.push(giroRegistrado);
        }
      }
      this.list_giro_suministro = suministros.sort();
    },
    CargarModificaciones: function CargarModificaciones(smodificaciones) {
      var nuevo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var motivoModificaciones = ["Cambio de domicilio", "Cambio datos bancarios", "Cambio de datos de contacto de ventas", "Cambio de datos de contacto de facturación"];
      if (!nuevo) {
        this.list_modificaciones_db = smodificaciones ? smodificaciones.split(',') : [];
      }
      this.list_modificaciones = motivoModificaciones;
    },
    CargarTipoDocumento: function CargarTipoDocumento(sdocumentos) {
      var nuevo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var tiposDocumentos = ["Cambio de datos de contacto de ventas", "Caratula bancaría", "Aplicables conforme a los criterios adicionales (PCO-02/F-05)"];
      if (!nuevo) {
        this.list_tipos_documentos_db = sdocumentos ? sdocumentos.split(',') : [];
      }
      this.list_tipos_documentos = tiposDocumentos;
    },
    openModalExcel: function openModalExcel() {
      var _this6 = this;
      this.showModalExcel = false;
      this.$nextTick(function () {
        _this6.showModalExcel = true;
      });
    },
    closeModalExcel: function closeModalExcel() {
      this.showModalExcel = false;
    },
    loadExcel: function loadExcel(file) {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var form, res, d, giroExcel, match, _t2;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              if (file) {
                _context2.n = 1;
                break;
              }
              return _context2.a(2);
            case 1:
              _this7.loading = true;
              form = new FormData();
              form.append('file', file);
              _context2.p = 2;
              _context2.n = 3;
              return axios.post('/read-excel', form, {
                headers: {
                  'content-type': 'multipart/form-data'
                }
              });
            case 3:
              res = _context2.v;
              if (res.data.status) {
                d = res.data.data; // JSON que llega del Excel
                giroExcel = (d["Suministrar"] || "").trim().toLowerCase();
                match = _this7.list_giro_suministro.find(function (g) {
                  return g.trim().toLowerCase() === giroExcel;
                }); //Datos principales
                _this7.proveedor.razon_social = d["Razón Social"];
                _this7.proveedor.nombre = d["Nombre Comercial"];
                _this7.proveedor.giro = match || "";
                _this7.proveedor.nacionalidad = d["Nacionalidad"];
                _this7.proveedor.rfc = d["RFC"];
                _this7.$nextTick(function () {
                  if (_this7.proveedor.rfc) {
                    _this7.rfcTouched = true;
                    _this7.rfc_valido = _this7.AuxValidarRFC(_this7.proveedor.rfc);
                  }
                });
                _this7.proveedor.limite_credito = d["Limite de credito"] !== '' && d["Limite de credito"] != null ? d["Limite de credito"] : null;
                //Dirección
                _this7.proveedor.calle = d["Calle"];
                _this7.proveedor.no_exterior = d["No. Exterior"];
                _this7.proveedor.no_interior = d["No.interior"];
                _this7.proveedor.cp = d["CP"];
                _this7.proveedor.colonia = d["Colonia"];
                _this7.proveedor.municipio = d["Alcadía/Municipio"];
                _this7.proveedor.estado = d["Estado"];

                //Datos bancarios
                _this7.temp2_proveedor_banco = d["Banco"];
                _this7.temp2_proveedor_clabe = d["Cuenta Clabe"];
                _this7.temp2_proveedor_cuenta = d["Cuenta Clabe"];
                _this7.temp2_proveedor_moneda = d["Tipo de moneda"];

                //Contacto de ventas
                _this7.proveedor.ventas_contacto = d["Contacto de ventas"];
                _this7.proveedor.ventas_telefono = d["Teléfono de ventas"];
                _this7.proveedor.ventas_celular = d["Celular"];
                _this7.proveedor.ventas_correo = d["Correo"];

                //Contacto de facturación
                _this7.proveedor.facturacion_contacto = d["Contacto de facturación"];
                _this7.proveedor.facturacion_telefono = d["Teléfono"];
                _this7.proveedor.facturacion_celular = d["Celular"];
                _this7.proveedor.facturacion_correo = d["correo"];

                //Modificaciones
                _this7.list_modificaciones_db = [];
                if (d["Cambio de domicilio"] === "SI") _this7.list_modificaciones_db.push(1);
                if (d["Cambio de datos bancarios"] === "SI") _this7.list_modificaciones_db.push(2);
                if (d["Cambio de datos de contacto de ventas"] === "SI") _this7.list_modificaciones_db.push(3);
                if (d["Cambio de datos de contacto de facturacion"] === "SI") _this7.list_modificaciones_db.push(4);

                //Documentos
                _this7.list_tipos_documentos_db = [];
                if (d["Constancia de situación fiscal"] === "SI") _this7.list_tipos_documentos_db.push(1);
                if (d["Caratula Bancaria"] === "SI") _this7.list_tipos_documentos_db.push(2);
                toastr.success("Datos cargados desde Excel");
              } else {
                toastr.error("Error al procesar el Excel");
              }
              _context2.n = 5;
              break;
            case 4:
              _context2.p = 4;
              _t2 = _context2.v;
              toastr.error("Error al cargar el archivo");
            case 5:
              _context2.p = 5;
              _this7.loading = false;
              _this7.closeModalExcel();
              return _context2.f(5);
            case 6:
              return _context2.a(2);
          }
        }, _callee2, null, [[2, 4, 5, 6]]);
      }))();
    },
    descargarExcel: function descargarExcel() {
      var _this8 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var response, url, link, _t3;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              _this8.isDownloading = true;
              _context3.p = 1;
              _this8.form = {
                razon_social: _this8.proveedor.razon_social,
                nombre: _this8.proveedor.nombre,
                rfc: _this8.proveedor.rfc,
                taxid: _this8.proveedor.taxid,
                giro: _this8.proveedor.giro,
                nacionalidad: _this8.proveedor.nacionalidad,
                calle: _this8.proveedor.calle,
                no_exterior: _this8.proveedor.no_exterior,
                no_interior: _this8.proveedor.no_interior,
                cp: _this8.proveedor.cp,
                colonia: _this8.proveedor.colonia,
                municipio: _this8.proveedor.municipio,
                ciudad: _this8.proveedor.ciudad,
                estado: _this8.proveedor.estado,
                temp2_proveedor_banco: _this8.temp2_proveedor_banco,
                temp2_proveedor_clabe: _this8.temp2_proveedor_clabe,
                temp2_proveedor_moneda: _this8.temp_proveedor_moneda,
                limite_credito: _this8.proveedor.limite_credito,
                ventas_contacto: _this8.proveedor.ventas_contacto,
                ventas_telefono: _this8.proveedor.ventas_telefono,
                ventas_celular: _this8.proveedor.ventas_celular,
                ventas_correo: _this8.proveedor.ventas_correo,
                facturacion_contacto: _this8.proveedor.facturacion_contacto,
                facturacion_telefono: _this8.proveedor.facturacion_telefono,
                facturacion_celular: _this8.proveedor.facturacion_celular,
                facturacion_correo: _this8.proveedor.facturacion_correo
              };
              _context3.n = 2;
              return axios.post('/proveedor/export', _this8.form, {
                responseType: 'blob'
              });
            case 2:
              response = _context3.v;
              url = window.URL.createObjectURL(response.data);
              link = document.createElement('a');
              link.href = url;
              link.download = 'PCO-02_F-01 Alta y Modificacion de Proveedores NR02.xlsx';
              link.click();
              _context3.n = 4;
              break;
            case 3:
              _context3.p = 3;
              _t3 = _context3.v;
              toastr.error("Error al descargar el archivo");
            case 4:
              _context3.p = 4;
              _this8.isDownloading = false;
              return _context3.f(4);
            case 5:
              return _context3.a(2);
          }
        }, _callee3, null, [[1, 3, 4, 5]]);
      }))();
    }
  },
  mounted: function mounted() {
    this.PermisosCrud = _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_1__["default"].getCRUD(this.$route.path);
    this.ObtenerProveedores();
    this.generateYears();
    this.setperiodCurrentYear();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Reportes/GeneralCompras.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Reportes/GeneralCompras.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var config = (__webpack_require__(/*! ../../Herramientas/config-vuetables-client */ "./resources/assets/js/components/Herramientas/config-vuetables-client.js").call)(undefined);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      listaProyectos: [],
      mostrarTodos: false,
      proyectos: [],
      dateStart: null,
      dateEnd: null
      // periods: [],
      // selectedPeriod: null,
      // anio: null,
      // mes: null,
      // yearSince: null,
      // yearUntil: null,
      // periodSelected: false, 
      // periodEnd:null,
      // periodStart:null
    };
  },
  mounted: function mounted() {
    this.allProyects();
  },
  computed: {
    nombrePeriodo: function nombrePeriodo() {
      if (!this.mes || !this.anio) return '';
      return "".concat(this.mes === 2 ? 'Febrero' : 'Agosto', " ").concat(this.anio);
    }
  },
  methods: {
    /**
     * Obtener todos los proyectos
     */
    // ObtenrProyectos()
    // {
    //     axios.get('generales/proyectos/asd').then(res =>
    //     {
    //         this.listaProyectos = res.data.proyectos;
    //     });
    // },
    // Obtener todos los proyectos
    allProyects: function allProyects() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var res;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.n = 1;
              return axios.get('generales/proyectos/asd');
            case 1:
              res = _context.v;
              _this.listaProyectos = res.data.proyectos;
              return _context.a(2, res.data.proyectos);
          }
        }, _callee);
      }))();
    },
    onToggleProyectos: function onToggleProyectos() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              if (!_this2.mostrarTodos) {
                _context2.n = 2;
                break;
              }
              _context2.n = 1;
              return _this2.allProyects();
            case 1:
              _this2.proyectos = _context2.v;
              _context2.n = 3;
              break;
            case 2:
              _this2.proyectos = [];
            case 3:
              return _context2.a(2);
          }
        }, _callee2);
      }))();
    },
    //obtener proyectos por rangos de fecha
    dateRange: function dateRange() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              if (_this3.dateStart && _this3.dateEnd) {
                if (new Date(_this3.dateStart) > new Date(_this3.dateEnd)) {
                  alert('La fecha de inicio no puede ser posterior a la fecha de fin.');
                  _this3.dateEnd = '';
                  _this3.periodStart = null;
                  _this3.periodEnd = null;
                  _this3.periodSelected = false;
                  _this3.mes = null;
                  _this3.anio = null;
                }
              }
              _this3.$emit('date-range-selected', {
                start: _this3.dateStart,
                end: _this3.dateEnd
              });
            case 1:
              return _context3.a(2);
          }
        }, _callee3);
      }))();
    },
    //Obtener los proyectos por periodos
    //     setPeriodoActual(){
    //         const today = new Date()
    //         const currentMonth = today.getMonth() + 1
    //         const currentYear = today.getFullYear()
    //         this.anio = currentYear
    //         if(currentMonth >= 2 && currentMonth <= 7){
    //             this.mes = 8 // agosto
    //         }else {
    //             this.mes = 2 // febrero
    //         }
    //         this.ObtenrProyectos()
    //     },
    //     generatePeriods(){
    //         this.periods = []
    //         for(let year = this.yearSince; year <= this.yearUntil; year ++){
    //             this.periods.push({
    //                 month : `Febrero ${year}`,
    //                 anio: year,
    //                 mes:2
    //             })
    //             this.periods.push({
    //                 month: `Agosto ${year}`,
    //                 anio: year,
    //                 mes: 8
    //             })
    //         } 
    //     },
    // seleccionarPeriodo(mes, anio) {
    //     this.mes = mes
    //     this.anio = anio
    //     this.periodSelected = true
    //     this.dateStart = null
    //     this.dateEnd = null
    //     if (mes === 2) {
    //         this.periodStart = `${anio - 1}-08-01`
    //         this.periodEnd = `${anio}-01-31`
    //     }
    //     if (mes === 8) {
    //         this.periodStart = `${anio}-02-01`
    //         this.periodEnd = `${anio}-07-31`
    //     }
    // },
    DescargarReporte: function DescargarReporte() {
      if (!this.proyectos || this.proyectos.length === 0) {
        toastr.warning('Seleccione un proyecto');
        return;
      }
      var ids = this.proyectos.reduce(function (acc, p) {
        return acc + "".concat(p.id, "&");
      }, '');
      var url = "compras/reporte/generalcompras/" + ids;

      // RANGO LIBRE
      if (this.dateStart && this.dateEnd) {
        url += "?inicio=".concat(this.dateStart, "&fin=").concat(this.dateEnd);
      }

      // PERIODO
      else if (this.periodStart && this.periodEnd) {
        url += "?inicio_p=".concat(this.periodStart, "&fin_p=").concat(this.periodEnd);
      }
      window.open(url, '_blank');

      // reset
      this.dateStart = null;
      this.dateEnd = null;
      // this.periodStart = null
      // this.periodEnd = null
      // this.periodSelected = false
      this.proyectos = [];
    }
  }
});

/***/ }),

<<<<<<< HEAD
=======
/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Components/ModalComponent.vue?vue&type=template&id=a5d63b3c&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Components/ModalComponent.vue?vue&type=template&id=a5d63b3c&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "modal fade",
    "class": {
      show: _vm.showModal,
      "d-block": _vm.showModal
    },
    attrs: {
      tabindex: "-1",
      role: "dialog"
    }
  }, [_c("div", {
    staticClass: "modal-dialog modal-dialog-centered",
    attrs: {
      role: "document"
    }
  }, [_c("div", {
    staticClass: "modal-content excel-modal p-4"
  }, [_c("h2", {
    staticClass: "title"
  }, [_vm._v("Sube tu archivo Excel")]), _vm._v(" "), _c("div", {
    staticClass: "excel-drop",
    on: {
      click: _vm.triggerFile
    }
  }, [_c("input", {
    key: _vm.resetKey,
    ref: "fileInput",
    staticClass: "hidden-input",
    attrs: {
      type: "file",
      accept: ".xlsx, .xls"
    },
    on: {
      change: _vm.handleFileSelect
    }
  }), _vm._v(" "), _c("svg", {
    staticClass: "excel-icon",
    attrs: {
      xmlns: "http://www.w3.org/2000/svg",
      width: "62",
      height: "62",
      fill: "currentColor",
      viewBox: "0 0 16 16"
    }
  }, [_c("path", {
    attrs: {
      d: "M5.884 6.68a1 1 0 0 0-1.768 0l-3 5.5A1 1 0 0 0 2 13.5h2a1 1 0 0 0 .894-.553L5 11l.106-.213L7 13.5a1 1 0 0 0 .894.553h2a1 1 0 0 0 .884-1.447l-3-5.5z"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M14 4.5V14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-.5h1V14a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.5H14z"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M10.5 0A1.5 1.5 0 0 1 12 1.5V4H4V1.5A1.5 1.5 0 0 1 5.5 0h5z"
    }
  })]), _vm._v(" "), _c("span", {
    staticClass: "excel-text"
  }, [_vm._v("\n          Click aquí para elegir archivo Excel\n        ")]), _vm._v(" "), _vm.selectedFile ? _c("p", {
    staticClass: "file-selected"
  }, [_vm._v("\n          Seleccionado: "), _c("strong", [_vm._v(_vm._s(_vm.selectedFile.name))])]) : _vm._e()]), _vm._v(" "), _vm.loading ? _c("div", {
    staticClass: "loading-box"
  }, [_c("div", {
    staticClass: "loader"
  }), _vm._v(" "), _c("p", [_vm._v("Cargando archivo...")])]) : _vm._e(), _vm._v(" "), _c("button", {
    staticClass: "btn-upload",
    attrs: {
      disabled: !_vm.selectedFile || _vm.loading
    },
    on: {
      click: _vm.upload
    }
  }, [!_vm.loading ? _c("span", {
    staticClass: "flex-center"
  }, [_c("svg", {
    staticClass: "upload-icon-btn",
    attrs: {
      xmlns: "http://www.w3.org/2000/svg",
      width: "22",
      height: "22",
      fill: "currentColor",
      viewBox: "0 0 16 16"
    }
  }, [_c("path", {
    attrs: {
      d: "M.5 9.9a.5.5 0 0 1 .5-.4h4v5a.5.5 0 0 0 1 0v-5h4a.5.5 0 0 1 0 1H6v4a.5.5 0 0 1-1 0v-4H1a.5.5 0 0 1-.5-.6z"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M7.646 1.146a.5.5 0 0 1 .708 0l3.182 3.182a.5.5 0 0 1-.707.707L8.5 2.707V10.5a.5.5 0 0 1-1 0V2.707L5.646 5.035a.5.5 0 1 1-.707-.707L7.646 1.146z"
    }
  })]), _vm._v("\n          Cargar Excel\n        ")]) : _c("span", [_vm._v("\n          Procesando...\n        ")])]), _vm._v(" "), _c("span", {
    staticClass: "close-btn",
    on: {
      click: _vm.closeModal
    }
  }, [_vm._v("×")])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

>>>>>>> develop
/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Catalogos/EstadoCompras.vue?vue&type=template&id=3a180cc8":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Catalogos/EstadoCompras.vue?vue&type=template&id=3a180cc8 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  }), _vm._v(" Estado de compras\r\n                "), _c("button", {
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
    staticClass: "fas fa-plus"
  }), _vm._v("Nuevo\r\n                ")])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isLoading_obtener
    }
  }), _vm._v(" "), _c("v-client-table", {
    ref: "myTable",
    attrs: {
      columns: _vm.columns_estados,
      data: _vm.list_estados,
      options: _vm.options_estados
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
              return _vm.abrirModal(false, props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-edit"
        }), _vm._v("Actualizar estado.\r\n                                    ")])])])])];
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
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label",
    attrs: {
      "for": "Nombre"
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
      value: _vm.edoCompra.nombre,
      expression: "edoCompra.nombre"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "Nombre",
      placeholder: "Nombre",
      autocomplete: "off",
      id: "Nombre"
    },
    domProps: {
      value: _vm.edoCompra.nombre
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.edoCompra, "nombre", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Nombre")))])])])])], 1), _vm._v(" "), _c("div", {
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
        return _vm.guardaredoCompra(true);
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
        return _vm.guardaredoCompra(false);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v("Actualizar")]) : _vm._e()])], 1)])])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Catalogos/MttoVehicular.vue?vue&type=template&id=16763be6":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Catalogos/MttoVehicular.vue?vue&type=template&id=16763be6 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  }), _vm._v(" Servicios vehiculares\r\n                "), _c("button", {
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
    staticClass: "fas fa-plus"
  }), _vm._v("Nuevo\r\n                ")])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("v-client-table", {
    ref: "myTable",
    attrs: {
      columns: _vm.columns_servicios,
      data: _vm.list_servicios,
      options: _vm.options_servicios
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
              return _vm.abrirModal(false, props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-edit"
        }), _vm._v("Actualizar\r\n                                    ")])])])])];
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
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Descripción")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("textarea", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.catalogo.descripcion,
      expression: "catalogo.descripcion"
    }],
    staticClass: "form-control",
    attrs: {
      "data-vv-name": "descripcion",
      placeholder: "Descripción",
      autocomplete: "off",
      rows: "8",
      cols: "80"
    },
    domProps: {
      value: _vm.catalogo.descripcion
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.catalogo, "descripcion", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("descripcion")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Código")]), _vm._v(" "), _c("div", {
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
      value: _vm.catalogo.codigo,
      expression: "catalogo.codigo"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      "data-vv-name": "codigo",
      placeholder: "Codígo",
      autocomplete: "off"
    },
    domProps: {
      value: _vm.catalogo.codigo
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.catalogo, "codigo", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("codigo")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Marca")]), _vm._v(" "), _c("div", {
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
      value: _vm.catalogo.marca,
      expression: "catalogo.marca"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      "data-vv-name": "marca",
      placeholder: "Marca",
      autocomplete: "off"
    },
    domProps: {
      value: _vm.catalogo.marca
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.catalogo, "marca", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("marca")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Comentario")]), _vm._v(" "), _c("div", {
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
      value: _vm.catalogo.comentario,
      expression: "catalogo.comentario"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      "data-vv-name": "comentario",
      placeholder: "Comentario",
      autocomplete: "off"
    },
    domProps: {
      value: _vm.catalogo.comentario
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.catalogo, "comentario", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("comentario")))])])])])], 1), _vm._v(" "), _c("div", {
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
        return _vm.guardarServicio(1);
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
        return _vm.guardarServicio(0);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v("Actualizar")]) : _vm._e()])], 1)])])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Catalogos/Servicios.vue?vue&type=template&id=245d150a":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Catalogos/Servicios.vue?vue&type=template&id=245d150a ***!
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
  }), _vm._v(" Servicios\r\n                "), _c("button", {
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
    staticClass: "fas fa-plus"
  }), _vm._v("Nuevo\r\n                ")])]), _vm._v(" "), _c("vue-element-loading", {
    attrs: {
      active: _vm.isLoading_servicios
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("v-client-table", {
    ref: "myTable",
    attrs: {
      columns: _vm.columns,
      data: _vm.list_servicios,
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
              return _vm.abrirModal(false, props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-edit"
        }), _vm._v("Actualizar servicio.\r\n                                    ")])])])])];
      }
    }])
  })], 1)], 1)]), _vm._v(" "), _c("div", {
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
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Nombre del Servicio")]), _vm._v(" "), _c("div", {
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
      value: _vm.servicio.nombre_servicio,
      expression: "servicio.nombre_servicio"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      "data-vv-name": "Nombre",
      name: "nombre_servicio",
      placeholder: "Nombre del Servicio",
      autocomplete: "off"
    },
    domProps: {
      value: _vm.servicio.nombre_servicio
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.servicio, "nombre_servicio", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Nombre")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Marca/Proveedor")]), _vm._v(" "), _c("div", {
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
      value: _vm.servicio.proveedor_marca,
      expression: "servicio.proveedor_marca"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      "data-vv-name": "Marca/Proveedor",
      placeholder: "Marca/Proveedor",
      autocomplete: "off"
    },
    domProps: {
      value: _vm.servicio.proveedor_marca
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.servicio, "proveedor_marca", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Marca/Proveedor")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Unidad de Medida")]), _vm._v(" "), _c("div", {
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
      value: _vm.servicio.unidad_medida,
      expression: "servicio.unidad_medida"
    }],
    staticClass: "form-control",
    attrs: {
      disabled: "",
      type: "text",
      name: "unidad_medida",
      placeholder: "Unidad de Medida",
      autocomplete: "off"
    },
    domProps: {
      value: _vm.servicio.unidad_medida
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.servicio, "unidad_medida", $event.target.value);
      }
    }
  })])])])], 1), _vm._v(" "), _c("div", {
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
        return _vm.guardarServicio(1);
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
        return _vm.guardarServicio(0);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v("Actualizar")]) : _vm._e()])], 1)])])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Compra/CardPrincipal.vue?vue&type=template&id=3d18737e":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Compra/CardPrincipal.vue?vue&type=template&id=3d18737e ***!
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
  return _vm.mostrar == 1 ? _c("div", {
    staticClass: "card"
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isLoading
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "card-header"
  }, [_c("h4", {
    staticClass: "title",
    domProps: {
      textContent: _vm._s(_vm.tituloModal)
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("input", {
    attrs: {
      type: "hidden",
      name: "id"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-4 mb-3"
  }, [_c("label", {
    attrs: {
      "for": "proyecto_id"
    }
  }, [_vm._v("Proyecto")]), _vm._v(" "), _c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    attrs: {
      options: _vm.listaProyectos,
      disabled: _vm.tipoAccion == 2 && _vm.compra.condicion == 2,
      id: "proyecto_id",
      name: "proyecto_id",
      label: "name",
      "data-vv-name": "Proyecto"
    },
    model: {
      value: _vm.compra.proyecto_id,
      callback: function callback($$v) {
        _vm.$set(_vm.compra, "proyecto_id", $$v);
      },
      expression: "compra.proyecto_id"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Proyecto")))])], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 mb-3"
  }, [_c("label", {
    attrs: {
      "for": "proveedore_id"
    }
  }, [_vm._v("Proveedor")]), _vm._v(" "), _c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    attrs: {
      options: _vm.listaProvedores,
      id: "proveedore_id",
      name: "proveedore_id",
      label: "razon_social",
      "data-vv-name": "Proveedor"
    },
    on: {
      input: function input($event) {
        return _vm.buscarDatosBancarios($event);
      }
    },
    model: {
      value: _vm.compra.proveedore_id,
      callback: function callback($$v) {
        _vm.$set(_vm.compra, "proveedore_id", $$v);
      },
      expression: "compra.proveedore_id"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Proveedor")))])], 1), _vm._v(" "), _vm.compra.proveedore_id.razon_social === "CSCT Constructora y Servicios Calderon Torres S.A. de C.V." || _vm.compra.proveedore_id.razon_social === "Conserflow Constructora y Servicios Calderon Torres S.A. de C.V." || _vm.compra.proveedore_id.razon_social === "Constructora y Servicios Calderon Torres S.A. de C.V." ? _c("div", {
    staticClass: "col-md-4 mb-3"
  }, [_c("label", {
    attrs: {
      "for": "proveedore_id"
    }
  }, [_vm._v("Proveedor CSCT")]), _vm._v(" "), _c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    attrs: {
      options: _vm.listaProvedores_CSCT,
      label: "name",
      "data-vv-name": "Proveedor CSCT"
    },
    model: {
      value: _vm.compra.proveedore_csct_id,
      callback: function callback($$v) {
        _vm.$set(_vm.compra, "proveedore_csct_id", $$v);
      },
      expression: "compra.proveedore_csct_id"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Proveedor CSCT")))])], 1) : _vm._e()]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-4 mb-3"
  }, [_c("label", {
    attrs: {
      "for": "folio"
    }
  }, [_vm._v("Comentario de condición de pago")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.compra.comentario_condicion_pago,
      expression: "compra.comentario_condicion_pago"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "comentario_condicion_pago",
      placeholder: "Comentario",
      autocomplete: "off",
      id: "comentario_condicion_pago"
    },
    domProps: {
      value: _vm.compra.comentario_condicion_pago
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.compra, "comentario_condicion_pago", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("comentario_condicion_pago")))])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4 mb-3"
  }, [_c("label", {
    attrs: {
      "for": "condicion_pago"
    }
  }, [_vm._v("Condición Pago")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.compra.condicion_pago,
      expression: "compra.condicion_pago"
    }],
    staticClass: "form-control",
    attrs: {
      id: "condicion_pago",
      name: "condicion_pago",
      "data-vv-as": "condicion_pago"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.compra, "condicion_pago", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, function ($event) {
        return _vm.cambiarcondicion();
      }]
    }
  }, _vm._l(_vm.listaCondicionPago, function (item) {
    return _c("option", {
      key: item.id,
      domProps: {
        value: item.id
      }
    }, [_vm._v(_vm._s(item.nombre) + " ")]);
  }), 0), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("condicion_pago")))])]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.compra.condicion_pago == 1,
      expression: "compra.condicion_pago == 1"
    }],
    staticClass: "col-md-4 mb-3"
  }, [_c("label", {
    attrs: {
      "for": "sueldo_mensual"
    }
  }, [_vm._v("Rango de dias a pagar")]), _vm._v(" "), _c("div", {
    staticClass: "input-group"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.compra.rango_dias,
      expression: "compra.rango_dias"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      min: "0",
      pattern: "^[0-9]",
      name: "rango_dias",
      placeholder: "Rango Dias",
      "data-vv-as": "Rango dias",
      autocomplete: "off",
      id: "rango_dias"
    },
    domProps: {
      value: _vm.compra.rango_dias
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.compra, "rango_dias", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm._m(0), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.compra.pagos,
      expression: "compra.pagos"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      min: "0",
      pattern: "^[0-9]",
      name: "pagos",
      placeholder: "Pagos",
      "data-vv-as": "Pagos",
      autocomplete: "off",
      id: "pagos"
    },
    domProps: {
      value: _vm.compra.pagos
    },
    on: {
      blur: function blur($event) {
        return _vm.creardates();
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.compra, "pagos", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm._m(1)])])]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-4 mb-3"
  }, [_c("label", {
    attrs: {
      "for": "periodo_entrega"
    }
  }, [_vm._v("Período Entrega")]), _vm._v(" "), _c("v-select", {
    attrs: {
      options: _vm.listaPeriodoEntrega,
      label: "name",
      "data-vv-name": "periodo_entrega"
    },
    model: {
      value: _vm.compra.periodo_entrega,
      callback: function callback($$v) {
        _vm.$set(_vm.compra, "periodo_entrega", $$v);
      },
      expression: "compra.periodo_entrega"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("periodo_entrega")))])], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-4 mb-3"
  }, [_c("label", {
    attrs: {
      "for": "fecha_orden"
    }
  }, [_vm._v("Fecha Orden")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.compra.fecha_orden,
      expression: "compra.fecha_orden"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date",
      name: "fecha_orden",
      "data-vv-name": "Fecha orden",
      placeholder: "Fecha orden",
      autocomplete: "off",
      id: "fecha_orden"
    },
    domProps: {
      value: _vm.compra.fecha_orden
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.compra, "fecha_orden", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Fecha orden")))])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4 mb-3"
  }, [_c("label", {
    attrs: {
      "for": "lugar_entrega"
    }
  }, [_vm._v("Lugar Entrega")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.compra.lugar_entrega,
      expression: "compra.lugar_entrega"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "lugar_entrega",
      "data-vv-name": "Lugar entrega",
      placeholder: "Lugar Entrega",
      autocomplete: "off",
      id: "lugar_entrega"
    },
    domProps: {
      value: _vm.compra.lugar_entrega
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.compra, "lugar_entrega", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Lugar entrega")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }), _vm._v(" "), _c("hr"), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v("Fecha requerida de pago")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.compra.fecha_probable_pago,
      expression: "compra.fecha_probable_pago"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date"
    },
    domProps: {
      value: _vm.compra.fecha_probable_pago
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.compra, "fecha_probable_pago", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-1 mb-3"
  }, [_c("label", [_vm._v("Urgente :")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.compra.prioridad,
      expression: "compra.prioridad"
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
        _vm.$set(_vm.compra, "prioridad", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "0"
    }
  }, [_vm._v("No")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("Si")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-5 mb-3"
  }, [_c("label", {
    attrs: {
      "for": "observaciones"
    }
  }, [_vm._v("Observaciones")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.compra.observaciones,
      expression: "compra.observaciones"
    }],
    staticClass: "form-control",
    attrs: {
      name: "observaciones",
      rows: "2",
      cols: "80",
      id: "observaciones"
    },
    domProps: {
      value: _vm.compra.observaciones
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.compra, "observaciones", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("observaciones")))])])]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("div", {
    staticClass: "form-group row container"
  }, [_c("h5", [_vm._v("Impuestos")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("button", {
    staticClass: "btn btn-secondary btn-sm",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.agregarinpuestos(1, _vm.compra.id);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  }), _vm._v(" Agregar\n      ")])])]), _vm._v(" "), _c("div", {
    staticClass: "container mt-2"
  }, [_vm._m(2), _vm._v(" "), _vm._l(_vm.listImpuestos, function (vi, index) {
    return _c("li", {
      key: index,
      staticClass: "list-group-item"
    }, [_c("div", {
      staticClass: "form-row my-0"
    }, [_c("div", {
      staticClass: "form-group form-sm col-md-4 my-0"
    }, [_c("label", [_vm._v(_vm._s(vi.tipo))])]), _vm._v(" "), _c("div", {
      staticClass: "form-group col-md-2 my-0"
    }, [_c("label", [_vm._v(_vm._s(vi.porcentaje))])]), _vm._v(" "), _c("div", {
      staticClass: "form-group col-md-2 my-0"
    }, [vi.retenido ? [_c("label", [_vm._v("Sí")])] : [_c("label", [_vm._v("No")])]], 2)])]);
  }), _vm._v(" "), _c("br"), _vm._v(" "), _c("br")], 2), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-4 mb-3"
  }, [_c("label", {
    attrs: {
      "for": "descuento"
    }
  }, [_vm._v("Descuento")]), _vm._v(" "), _c("div", {
    staticClass: "input-group"
  }, [_vm._m(3), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.compra.descuento,
      expression: "compra.descuento"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "descuento",
      placeholder: "Referencia",
      autocomplete: "off",
      id: "descuento"
    },
    domProps: {
      value: _vm.compra.descuento
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.compra, "descuento", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("descuento")))])])]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-2 mb-3"
  }, [_c("label", {
    attrs: {
      "for": "moneda"
    }
  }, [_vm._v("Moneda de pago")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.compra.moneda,
      expression: "compra.moneda"
    }],
    staticClass: "form-control",
    attrs: {
      name: "moneda",
      id: "moneda"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.compra, "moneda", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "1",
      selected: ""
    }
  }, [_vm._v("Dolares (USD)")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "2"
    }
  }, [_vm._v("Moneda Nacional (MXN)")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "3"
    }
  }, [_vm._v("Euros (EUR)")])]), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("moneda")))])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", {
    attrs: {
      "for": "sucursal"
    }
  }, [_vm._v("Sucursal")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.compra.sucursal,
      expression: "compra.sucursal"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "sucursal",
      placeholder: "Sucursal",
      autocomplete: "off",
      id: "sucursal"
    },
    domProps: {
      value: _vm.compra.sucursal
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.compra, "sucursal", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("sucursal")))])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4 mb-3"
  }, [_c("label", {
    attrs: {
      "for": "referencia"
    }
  }, [_vm._v("Referencia")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.compra.referencia,
      expression: "compra.referencia"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "referencia",
      placeholder: "Referencia",
      autocomplete: "off",
      id: "referencia"
    },
    domProps: {
      value: _vm.compra.referencia
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.compra, "referencia", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("referencia")))])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", {
    attrs: {
      "for": "cie"
    }
  }, [_vm._v("Convenio CIE")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.compra.cie,
      expression: "compra.cie"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "cie",
      placeholder: "CIE",
      autocomplete: "off",
      id: "cie"
    },
    domProps: {
      value: _vm.compra.cie
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.compra, "cie", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("cie")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", {
    attrs: {
      "for": "referencia"
    }
  }, [_vm._v("Banco de Transferencia")]), _vm._v(" "),  false ? 0 : _vm._e(), _vm._v(" "),  true ? [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.compra.transferencia,
      expression: "compra.transferencia"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "transferencia",
      placeholder: "Escriba el nombre del banco",
      autocomplete: "off",
      id: "bancoTrans"
    },
    domProps: {
      value: _vm.compra.transferencia
    },
    on: {
      keyup: function keyup($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])) return null;
        return _vm.regresardb.apply(null, arguments);
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.compra, "transferencia", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("transferencia")))]), _c("br")] : 0], 2), _vm._v(" "), _vm.enabledb == false ? [_c("div", {
    staticClass: "col-md-1 mb-3"
  }, [_c("label", [_vm._v(" ")]), _c("br"), _vm._v(" "), _c("button", {
    staticClass: "btn btn-outline-dark",
    attrs: {
      name: "button"
    },
    on: {
      click: _vm.regresardb
    }
  }, [_vm._v("Cancelar")])])] : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", {
    attrs: {
      "for": "sucursal"
    }
  }, [_vm._v("Número de Cuenta")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.compra.cuenta,
      expression: "compra.cuenta"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "cuenta",
      placeholder: "N° Cuenta",
      autocomplete: "off",
      id: "numCuenta"
    },
    domProps: {
      value: _vm.compra.cuenta
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.compra, "cuenta", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("sucursal")))])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", {
    attrs: {
      "for": "referencia"
    }
  }, [_vm._v("Cuenta CLABE")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.compra.clabe,
      expression: "compra.clabe"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "referencia",
      placeholder: "CLABE",
      autocomplete: "off",
      id: "ctaClabe"
    },
    domProps: {
      value: _vm.compra.clabe
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.compra, "clabe", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("referencia")))])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", {
    attrs: {
      "for": "cie"
    }
  }, [_vm._v("Titular de la Cuenta")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.compra.titular,
      expression: "compra.titular"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "cie",
      placeholder: "Titular",
      autocomplete: "off",
      id: "titular"
    },
    domProps: {
      value: _vm.compra.titular
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.compra, "titular", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("cie")))])])], 2), _vm._v(" "), _c("hr"), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-4 mb-3"
  }, [_c("label", {
    attrs: {
      "for": "elabora_empleado_id"
    }
  }, [_vm._v("Empleado que elabora")]), _vm._v(" "), _c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    attrs: {
      options: _vm.listaEmpleados_elabora,
      id: "elabora_empleado_id",
      name: "elabora_empleado_id",
      label: "name",
      "data-vv-name": "Elabora empleado",
      disabled: _vm.tipoAccion == 2 && _vm.compra.condicion == 2
    },
    model: {
      value: _vm.compra.elabora_empleado_id,
      callback: function callback($$v) {
        _vm.$set(_vm.compra, "elabora_empleado_id", $$v);
      },
      expression: "compra.elabora_empleado_id"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Elabora empleado")))])], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-4 mb-3"
  }, [_c("label", {
    attrs: {
      "for": "autoriza_empleado_id"
    }
  }, [_vm._v("Autorizado por")]), _vm._v(" "), _c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    attrs: {
      options: _vm.listaEmpleados,
      id: "autoriza_empleado_id",
      name: "autoriza_empleado_id",
      label: "name",
      "data-vv-name": "Autoriza empleado",
      disabled: _vm.tipoAccion == 2 && _vm.compra.condicion == 2
    },
    model: {
      value: _vm.compra.autoriza_empleado_id,
      callback: function callback($$v) {
        _vm.$set(_vm.compra, "autoriza_empleado_id", $$v);
      },
      expression: "compra.autoriza_empleado_id"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Autoriza empleado")))])], 1), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.tipoAccion != 2,
      expression: "tipoAccion != 2"
    }],
    staticClass: "col-auto my-1 col-md-4 mb-3"
  }, [_c("div", {
    staticClass: "form-check"
  }, [_c("label", {
    staticClass: "form-check-label col-md-6",
    attrs: {
      "for": "autoSizingCheck2"
    }
  }, [_vm._v("\n          Compra con requisición ?  \n        ")]), _vm._v(" "), _c("label", {
    staticClass: "switch switch-default switch-pill switch-dark"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.conrequisicion,
      expression: "conrequisicion"
    }],
    staticClass: "switch-input",
    attrs: {
      type: "checkbox",
      id: "autoSizingCheck2"
    },
    domProps: {
      checked: Array.isArray(_vm.conrequisicion) ? _vm._i(_vm.conrequisicion, null) > -1 : _vm.conrequisicion
    },
    on: {
      change: [function ($event) {
        var $$a = _vm.conrequisicion,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.conrequisicion = $$a.concat([$$v]));
          } else {
            $$i > -1 && (_vm.conrequisicion = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.conrequisicion = $$c;
        }
      }, function ($event) {
        return _vm.cambiar($event);
      }]
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "switch-label"
  }), _vm._v(" "), _c("span", {
    staticClass: "switch-handle"
  })])])])])]), _vm._v(" "), _c("div", {
    staticClass: "card-footer"
  }, [_vm.tipoAccion == 1 ? _c("button", {
    staticClass: "btn btn-dark float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.cerrarModal();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-close"
  }), _vm._v(" Cerrar")]) : _vm._e(), _vm._v(" \n  "), _vm.tipoAccion == 2 ? _c("button", {
    staticClass: "btn btn-dark float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.cerrarModalActualizar();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-close"
  }), _vm._v(" Cerrar")]) : _vm._e(), _vm._v(" \n  "), _vm.tipoAccion == 1 ? _c("button", {
    staticClass: "btn btn-secondary float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.GuardarCompra(1);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Guardar")]) : _vm._e(), _vm._v(" "), _vm.tipoAccion == 2 ? _c("button", {
    staticClass: "btn btn-secondary float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.GuardarCompra(0);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-edit"
  }), _vm._v(" Actualizar")]) : _vm._e()]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.widgets.modalimpuestos,
      expression: "widgets.modalimpuestos"
    }]
  }, [_c("modalimpuestos", {
    ref: "modalimpuestos",
    on: {
      "modalimpuestos:click": function modalimpuestosClick($event) {
        return _vm.grabar($event);
      },
      update: _vm.actualizarImpuestos
    }
  })], 1), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.widgets.partidas,
      expression: "widgets.partidas"
    }]
  }, [_c("partidas", {
    ref: "partidas",
    on: {
      "partidas:click": function partidasClick($event) {
        return _vm.maestro($event);
      }
    }
  })], 1)], 1) : _vm._e();
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "input-group-addon"
  }, [_c("span", {
    staticClass: "input-group-text"
  }, [_vm._v("días a:")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "input-group-addon"
  }, [_c("span", {
    staticClass: "input-group-text"
  }, [_vm._v("pagos.")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "form-row mt-2 ml-3"
  }, [_c("div", {
    staticClass: "form-group col-md-3"
  }, [_c("p", {
    staticClass: "font-weight-bold"
  }, [_vm._v("Tipo")])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-2"
  }, [_c("p", {
    staticClass: "font-weight-bold"
  }, [_vm._v("Porcentaje")])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-2"
  }, [_c("p", {
    staticClass: "font-weight-bold"
  }, [_vm._v("Retenido")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "input-group-addon"
  }, [_c("span", {
    staticClass: "input-group-text"
  }, [_vm._v("%")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Compra/Compras.vue?vue&type=template&id=ba2efc96":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Compra/Compras.vue?vue&type=template&id=ba2efc96 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [_vm.detalle == 1 ? _c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("i", {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" ORDENES DE COMPRA\r\n            "), _c("button", {
    staticClass: "btn btn-secondary float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.maestroPrincipal();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-arrow-left"
  }), _vm._v(" Atras\r\n            ")])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isLoading
    }
  }), _vm._v(" "), _c("v-server-table", {
    ref: "myTable",
    attrs: {
      columns: _vm.columns,
      url: "compras/busqueda/" + _vm.objeto,
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
            "data-placement": "top",
            title: "Acciones",
            "aria-haspopup": "true",
            "aria-expanded": "false"
          }
        }, [_c("i", {
          staticClass: "fas fa-grip-horizontal"
        }), _vm._v(_vm._s(_vm.texto_b) + "\r\n                            ")]), _vm._v(" "), _c("div", {
          staticClass: "dropdown-menu",
          attrs: {
            "aria-labelledby": "btnGroupDrop1"
          }
        }, [props.row.condicion == 1 || props.row.condicion == 2 ? [_c("a", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: _vm.PermisosCrud.Download,
            expression: "PermisosCrud.Download"
          }],
          staticClass: "dropdown-item",
          attrs: {
            href: "#"
          },
          on: {
            click: function click($event) {
              return _vm.descargarn(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-file-pdf"
        }), _vm._v(" Descargar Formato\r\n                                    ")])] : _vm._e(), _vm._v(" "), props.row.condicion > 0 ? _c("div", [_c("a", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: props.row.estado_id == 3 && _vm.PermisosCrud.Update,
            expression: "props.row.estado_id == 3 && PermisosCrud.Update"
          }],
          staticClass: "dropdown-item",
          attrs: {
            type: "button",
            href: "#"
          },
          on: {
            click: function click($event) {
              $event.preventDefault();
              return _vm.abrirModal("compra", "actualizar", props.row);
            }
          }
        }, [_c("i", {
          staticClass: "icon-pencil"
        }), _vm._v(" Actualizar compra\r\n                                    ")])]) : _vm._e(), _vm._v(" "), props.row.condicion != 2 ? _c("div", [_c("a", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: props.row.estado_id == 3 && _vm.PermisosCrud.Delete,
            expression: "props.row.estado_id == 3 && PermisosCrud.Delete"
          }],
          staticClass: "dropdown-item",
          attrs: {
            href: "#"
          },
          on: {
            click: function click($event) {
              return _vm.finalizarCompra(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "far fa-window-close"
        }), _vm._v(" Finalizar compra\r\n                                    ")])]) : _vm._e()], 2)])])];
      }
    }, {
      key: "descargar",
      fn: function fn(props) {
        return [_c("button", {
          staticClass: "btn btn-outline-dark",
          attrs: {
            disabled: !_vm.PermisosCrud.Create
          },
          on: {
            click: function click($event) {
              return _vm.cargardetalle(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-list"
        }), _vm._v(" Partidas\r\n                    ")])];
      }
    }, {
      key: "format",
      fn: function fn(props) {
        return [props.row.condicion == 1 || props.row.condicion == 2 ? [_c("button", {
          staticClass: "btn btn-outline-dark",
          attrs: {
            disabled: !_vm.PermisosCrud.Download
          },
          on: {
            click: function click($event) {
              return _vm.descargarn(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-file-pdf"
        }), _vm._v("  "), _c("i", {
          staticClass: "fas fa-download"
        })])] : _vm._e()];
      }
    }, {
      key: "condicion",
      fn: function fn(props) {
        return [props.row.condicion == 1 ? [_c("span", {
          staticClass: "btn btn-outline-success"
        }, [_vm._v("Activo")])] : _vm._e(), _vm._v(" "), props.row.condicion == 0 ? [_c("span", {
          staticClass: "btn btn-outline-danger"
        }, [_vm._v("Dado de Baja")])] : _vm._e(), _vm._v(" "), props.row.condicion == 2 ? [_c("span", {
          staticClass: "btn btn-outline-warning"
        }, [_vm._v("Cerrada")])] : _vm._e()];
      }
    }, {
      key: "estado_id",
      fn: function fn(props) {
        return [props.row.estado_id == 3 ? [_c("span", {
          staticClass: "btn btn-outline-danger"
        }, [_vm._v("No programado")])] : _vm._e(), _vm._v(" "), props.row.estado_id == 2 ? [_c("span", {
          staticClass: "btn btn-outline-warning"
        }, [_vm._v("Programada")])] : _vm._e(), _vm._v(" "), props.row.estado_id == 1 ? [_c("span", {
          staticClass: "btn btn-outline-success"
        }, [_vm._v("Pagado")])] : _vm._e()];
      }
    }, {
      key: "moneda",
      fn: function fn(props) {
        return [props.row.moneda == 1 ? [_c("span", {
          staticClass: "btn btn-outline-success"
        }, [_vm._v("USD")])] : _vm._e(), _vm._v(" "), props.row.moneda == 2 ? [_c("span", {
          staticClass: "btn btn-outline-success"
        }, [_vm._v("MXN")])] : _vm._e(), _vm._v(" "), props.row.moneda == 3 ? [_c("span", {
          staticClass: "btn btn-outline-success"
        }, [_vm._v("EUR")])] : _vm._e()];
      }
    }], null, false, 3000850357)
  })], 1)]) : _vm._e(), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.widgets.cardprincipal,
      expression: "widgets.cardprincipal"
    }]
  }, [_c("cardprincipal", {
    ref: "cardprincipal",
    on: {
      "cardprincipal:click": function cardprincipalClick($event) {
        return _vm.cerrar($event);
      },
      "cardprincipalcerrarmodal:click": function cardprincipalcerrarmodalClick($event) {
        return _vm.cerrar();
      },
      "cardprincipaluno:click": function cardprincipalunoClick($event) {
        return _vm.cerrarprincipal($event);
      },
      "comprascerrarmodal:click": function comprascerrarmodalClick($event) {
        return _vm.cerrarModalActualizar();
      }
    }
  })], 1), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.widgets.partidas,
      expression: "widgets.partidas"
    }]
  }, [_c("partidas", {
    ref: "partidas",
    on: {
      "partidas:click": function partidasClick($event) {
        return _vm.maestro($event);
      }
    }
  })], 1), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.widgets.partidasdos,
      expression: "widgets.partidasdos"
    }]
  }, [_c("partidasdos", {
    ref: "partidasdos",
    on: {
      "partidas:click": function partidasClick($event) {
        return _vm.maestro($event);
      }
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "modal fade",
    "class": {
      mostrar: _vm.modal_ver_requisiciones
    },
    staticStyle: {
      display: "none"
    },
    attrs: {
      tabindex: "-1",
      "data-focus-on": "input:first"
    }
  }, [_c("div", {
    staticClass: "modal-dialog modal-dark modal-lg"
  }, [_c("div", {
    staticClass: "modal-content"
  }, [_c("div", {
    staticClass: "modal-header"
  }, [_c("h4", {
    staticClass: "modal-title"
  }, [_vm._v("Requisiciones")]), _vm._v(" "), _c("button", {
    staticClass: "close",
    attrs: {
      type: "button",
      "aria-label": "Close"
    },
    on: {
      click: function click($event) {
        return _vm.cerrarModalRequi();
      }
    }
  }, [_c("span", {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("×")])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.cerrarModalRequi();
      }
    }
  }, [_vm._v("Cerrar")])])])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Compra/MantenimientoVehiculosModal.vue?vue&type=template&id=77db3c85":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Compra/MantenimientoVehiculosModal.vue?vue&type=template&id=77db3c85 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "col-md-6"
  }, [_c("textarea", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.catalogo.descripcion,
      expression: "catalogo.descripcion"
    }],
    staticClass: "form-control",
    attrs: {
      "data-vv-name": "descripcion",
      placeholder: "Descripción",
      autocomplete: "off",
      rows: "8",
      cols: "80"
    },
    domProps: {
      value: _vm.catalogo.descripcion
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.catalogo, "descripcion", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("descripcion")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Codigo")]), _vm._v(" "), _c("div", {
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
      value: _vm.catalogo.codigo,
      expression: "catalogo.codigo"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      "data-vv-name": "codigo",
      placeholder: "Codígo",
      autocomplete: "off"
    },
    domProps: {
      value: _vm.catalogo.codigo
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.catalogo, "codigo", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("codigo")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Marca")]), _vm._v(" "), _c("div", {
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
      value: _vm.catalogo.marca,
      expression: "catalogo.marca"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      "data-vv-name": "marca",
      placeholder: "Marca",
      autocomplete: "off"
    },
    domProps: {
      value: _vm.catalogo.marca
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.catalogo, "marca", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("marca")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Comentario")]), _vm._v(" "), _c("div", {
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
      value: _vm.catalogo.comentario,
      expression: "catalogo.comentario"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      "data-vv-name": "comentario",
      placeholder: "Comentario",
      autocomplete: "off"
    },
    domProps: {
      value: _vm.catalogo.comentario
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.catalogo, "comentario", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("comentario")))])])])]), _vm._v(" "), _c("div", {
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Compra/ModalImpuestos.vue?vue&type=template&id=264e3c38":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Compra/ModalImpuestos.vue?vue&type=template&id=264e3c38 ***!
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
  return _vm.mostrar == 1 ? _c("div", {
    staticClass: "card"
  }, [_c("div", {
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
    staticClass: "modal-title"
  }, [_vm._v("Agregar impuestos")]), _vm._v(" "), _c("button", {
    staticClass: "close",
    attrs: {
      type: "button",
      "aria-label": "Close"
    },
    on: {
      click: function click($event) {
        return _vm.cerrarModalInpuesto();
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
    staticClass: "col-auto"
  }, [_c("label", [_vm._v("Tipo de impuestos")]), _vm._v(" "), _c("div", {
    staticClass: "input-group mb-2"
  }, [_vm._m(0), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.temporal.tipo,
      expression: "temporal.tipo"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    attrs: {
      type: "txet",
      placeholder: "Tipo de impuesto"
    },
    domProps: {
      value: _vm.temporal.tipo
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.temporal, "tipo", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-auto"
  }, [_c("label", [_vm._v("Porcentaje")]), _vm._v(" "), _c("div", {
    staticClass: "input-group mb-2"
  }, [_vm._m(1), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.temporal.porcentaje,
      expression: "temporal.porcentaje"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      min: "0",
      max: "100",
      pattern: "^[0-9]+",
      placeholder: "0"
    },
    domProps: {
      value: _vm.temporal.porcentaje
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.temporal, "porcentaje", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-auto"
  }, [_c("div", {
    staticClass: "form-check mb-2"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.temporal.retenido,
      expression: "temporal.retenido"
    }],
    staticClass: "ml-2",
    attrs: {
      name: "chkRetenido",
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.temporal.retenido) ? _vm._i(_vm.temporal.retenido, null) > -1 : _vm.temporal.retenido
    },
    on: {
      change: function change($event) {
        var $$a = _vm.temporal.retenido,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.temporal, "retenido", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.temporal, "retenido", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.temporal, "retenido", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label ml-2",
    attrs: {
      "for": "chkRetenido"
    }
  }, [_vm._v("\r\n                                    Retenido\r\n                                ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-auto"
  }, [_c("label"), _vm._v(" "), _c("div", {
    staticClass: "mb-2"
  }, [_c("div", {
    staticClass: "mt-2 ml-2"
  }, [_c("button", {
    staticClass: "btn btn-sm btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.crear();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Agregar\r\n                                    ")])])])])]), _vm._v(" "), _vm._m(2), _vm._v(" "), _vm._l(_vm.impuestocatalogo, function (vi, index) {
    return _c("li", {
      staticClass: "list-group-item"
    }, [_c("div", {
      staticClass: "form-row"
    }, [_c("div", {
      staticClass: "form-group col-md-4"
    }, [_c("label", [_vm._v(_vm._s(vi.tipo))])]), _vm._v(" "), _c("div", {
      staticClass: "form-group col-md-2"
    }, [_c("label", [_vm._v(_vm._s(vi.porcentaje))])]), _vm._v(" "), _c("div", {
      staticClass: "form-group col-md-2"
    }, [vi.retenido == 0 ? [_c("label", [_vm._v("No")])] : _vm._e(), _vm._v(" "), vi.retenido == 1 ? [_c("label", [_vm._v("Sí")])] : _vm._e()], 2), _vm._v(" "), _c("div", {
      staticClass: "form-group col-md-2"
    }, [_c("a", {
      on: {
        click: function click($event) {
          return _vm.eliminar(vi, index);
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
  }, [_c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.cerrarModalInpuesto();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-times"
  }), _vm._v(" Cerrar")])])])])])]) : _vm._e();
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "input-group-addon"
  }, [_c("div", {
    staticClass: "input-group-text"
  }, [_vm._v("$")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "input-group-addon"
  }, [_c("div", {
    staticClass: "input-group-text"
  }, [_vm._v("%")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "form-row mt-2 ml-3"
  }, [_c("div", {
    staticClass: "form-group col-md-3"
  }, [_c("p", {
    staticClass: "font-weight-bold"
  }, [_vm._v("Tipo")])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-2"
  }, [_c("p", {
    staticClass: "font-weight-bold"
  }, [_vm._v("Porcentaje")])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-2"
  }, [_c("p", {
    staticClass: "font-weight-bold"
  }, [_vm._v("Retenido")])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-2"
  }, [_c("label", [_c("b")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Compra/Partidas.vue?vue&type=template&id=262e6ca0":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Compra/Partidas.vue?vue&type=template&id=262e6ca0 ***!
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
  return _vm.mostrar == 1 ? _c("div", {
    staticClass: "card"
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isLoadingDetalle
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "card-header"
  }, [_c("i", {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" Detalles de la compra con folio: " + _vm._s(_vm.empleado == null ? "" : _vm.empleado.folio) + "\r\n        "), _c("button", {
    staticClass: "btn btn-secondary float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.maestro();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-arrow-left"
  }), _vm._v(" Atras\r\n        ")])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("v-client-table", {
    ref: "myTabledescuento",
    attrs: {
      columns: _vm.columnscompras,
      data: _vm.tableDataPartidasCompras,
      options: _vm.optionscompras
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
        })]), _vm._v(" "), _c("div", {
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
              return _vm.eliminarpartidacompra(props.row, 0);
            }
          }
        }, [_c("i", {
          staticClass: "icon-trash"
        }), _vm._v(" Eliminar.\r\n                            ")]), _vm._v(" "), _c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.actualizarpartidacomprauno(props.row, 0);
            }
          }
        }, [_c("i", {
          staticClass: "icon-trash"
        }), _vm._v(" Actualizar Partida.\r\n                            ")])])])])];
      }
    }, {
      key: "ad",
      fn: function fn(props) {
        return [_vm._v("\r\n                " + _vm._s(props.row.ad) + " " + _vm._s(props.row.comentario == null ? "" : props.row.comentario) + "\r\n            ")];
      }
    }, {
      key: "precio_unitario",
      fn: function fn(props) {
        return [_vm._v("\r\n                " + _vm._s(_vm.formatPrecio(props.row.precio_unitario)) + "\r\n            ")];
      }
    }, {
      key: "cantidad",
      fn: function fn(props) {
        return [_vm._v("\r\n                " + _vm._s(_vm.formatPrecio(props.row.cantidad)) + "\r\n            ")];
      }
    }, {
      key: "total",
      fn: function fn(props) {
        return [_vm._v("\r\n                " + _vm._s(_vm.formatPrecio(props.row.total)) + "\r\n            ")];
      }
    }], null, false, 2233513375)
  })], 1), _vm._v(" "), _c("div", {
    ref: "formLote",
    staticClass: "card"
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isLoadingDetalle
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "card-header"
  }), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("form", [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.partidascompras.orden_compra_id,
      expression: "partidascompras.orden_compra_id"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "orden_compra_id",
      name: "orden_compra_id",
      placeholder: "Articulo",
      hidden: ""
    },
    domProps: {
      value: _vm.partidascompras.orden_compra_id
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.partidascompras, "orden_compra_id", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.partidascompras.requisicione_id,
      expression: "partidascompras.requisicione_id"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "requisicione_id",
      name: "requisicione_id",
      placeholder: "Articulo",
      hidden: ""
    },
    domProps: {
      value: _vm.partidascompras.requisicione_id
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.partidascompras, "requisicione_id", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.partidascompras.proyecto_id,
      expression: "partidascompras.proyecto_id"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "proyecto_id",
      name: "proyecto_id",
      hidden: ""
    },
    domProps: {
      value: _vm.partidascompras.proyecto_id
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.partidascompras, "proyecto_id", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-8"
  }, [_c("label", [_vm._v("Artículo")]), _vm._v(" "), _c("div", {
    staticClass: "input-group"
  }, [_c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.partidascompras.nombrearti,
      expression: "partidascompras.nombrearti"
    }],
    "class": "form-control" + _vm.clases.nombrearti,
    attrs: {
      name: "name",
      rows: "2",
      cols: "80",
      readonly: ""
    },
    domProps: {
      value: _vm.partidascompras.nombrearti
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.partidascompras, "nombrearti", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "input-group-append"
  }, [_c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.abrirModalA("articulo", "registrar", _vm.partidascompras.orden_compra_id);
      }
    }
  }, [_vm._v("Buscar")]), _vm._v(" "), _c("button", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.verequivalente,
      expression: "verequivalente"
    }],
    staticClass: "btn btn-success",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.comprarEquivalente();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-exchange-alt"
  }), _vm._v(" Cambiar")]), _vm._v(" "), _vm.empleado.nombre_corto_proyecto == "MANTENIMIENTO VEHICULAR" ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.agregarCatV();
      }
    }
  }, [_vm._v("Agregar")]) : _vm._e()])]), _vm._v(" "), _c("catalogo", {
    ref: "catalogo",
    on: {
      cerrarAbrir: function cerrarAbrir($event) {
        return _vm.getMantenimientoV();
      }
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-8"
  }, [_c("label", {
    attrs: {
      "for": "comentario"
    }
  }, [_vm._v("Comentario para Proveedor")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.partidascompras.comentario,
      expression: "partidascompras.comentario"
    }],
    staticClass: "form-control",
    attrs: {
      title: "Texto que aparecera en el formato!",
      autocomplete: "off",
      id: "comentario",
      rows: "3"
    },
    domProps: {
      value: _vm.partidascompras.comentario
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.partidascompras, "comentario", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", {
    attrs: {
      "for": "validationDefaultUsername"
    }
  }, [_vm._v("Precio Unitario")]), _vm._v(" "), _c("div", {
    staticClass: "input-group"
  }, [_vm._m(0), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "decimal:6",
      expression: "'decimal:6'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.partidascompras.precio_unitario,
      expression: "partidascompras.precio_unitario"
    }],
    "class": "form-control" + _vm.clases.precio_unitario,
    attrs: {
      type: "text",
      disabled: _vm.desabilitar_precios,
      min: "0",
      pattern: "^[0-9]+",
      placeholder: "Precio unitario",
      autocomplete: "off",
      id: "precio_unitario",
      "data-vv-name": "precio_unitario"
    },
    domProps: {
      value: _vm.partidascompras.precio_unitario
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.partidascompras, "precio_unitario", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("precio_unitario")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", {
    attrs: {
      "for": "validationDefaultUsername"
    }
  }, [_vm._v("Adicionales")]), _vm._v(" "), _c("div", {
    staticClass: "input-group"
  }, [_vm._m(1), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "decimal:6",
      expression: "'decimal:6'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.partidascompras.adicionales,
      expression: "partidascompras.adicionales"
    }],
    "class": "form-control" + _vm.clases.precio_unitario,
    attrs: {
      type: "text",
      disabled: _vm.desabilitar_precios,
      min: "0",
      pattern: "^[0-9]+",
      placeholder: "Adicionales",
      autocomplete: "off",
      id: "adicionales",
      "data-vv-name": "adicionales"
    },
    domProps: {
      value: _vm.partidascompras.adicionales
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.partidascompras, "adicionales", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("adicionales")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Cantidad requerida")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.partidascompras.cantidad_real,
      expression: "partidascompras.cantidad_real"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.partidascompras.cantidad_real
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.partidascompras, "cantidad_real", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", {
    attrs: {
      "for": "validationDefaultUsername"
    }
  }, [_vm._v("Cantidad real comprada")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "decimal:3",
      expression: "'decimal:3'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.partidascompras.cantidad,
      expression: "partidascompras.cantidad"
    }],
    "class": "form-control" + _vm.clases.cantidad,
    attrs: {
      type: "text",
      disabled: _vm.desabilitar_precios,
      min: "0",
      pattern: "^[0-9]+",
      placeholder: "Cantidad real a comprar",
      autocomplete: "off",
      id: "cantidad",
      "data-vv-name": "cantidad"
    },
    domProps: {
      value: _vm.partidascompras.cantidad
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.partidascompras, "cantidad", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("cantidad")))])])])])]), _vm._v(" "), _c("div", {
    staticClass: "card-footer"
  }, [_c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.cancelar();
      }
    }
  }, [_vm._v("Cancelar")]), _vm._v(" "), _vm.tipoAccionpr == 1 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        _vm.validardetalle();
        _vm.guardarPR(1, _vm.partidascompras.orden_compra_id);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Agregar")]) : _vm._e(), _vm._v(" "), _vm.boton_actualizar_partida == 1 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.guardarAP();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Actualizar Partida")]) : _vm._e()])], 1), _vm._v(" "), _c("div", {
    staticClass: "modal fade",
    "class": {
      mostrar: _vm.modalarticulos
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
  }, [_c("div", [_c("vue-element-loading", {
    attrs: {
      active: _vm.isLoadingDetalle
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "modal-header"
  }, [_c("h4", {
    staticClass: "modal-title",
    domProps: {
      textContent: _vm._s(_vm.tituloModala)
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
    staticClass: "modal-body"
  }, [_c("v-server-table", {
    ref: "myTable",
    attrs: {
      url: "/articulo/busqueda",
      columns: _vm.columnsa,
      options: _vm.optionsa
    },
    on: {
      "row-click": _vm.seleccionarArticulo2
    },
    scopedSlots: _vm._u([{
      key: "calidad",
      fn: function fn(props) {
        return [props.row.calidad_id != null ? [_c("button", {
          staticClass: "btn btn-warning",
          attrs: {
            type: "button",
            "data-toggle": "tooltip",
            "data-placement": "top",
            title: props.row.descal
          }
        }, [_vm._v("\r\n                                            " + _vm._s(props.row.calidad) + "\r\n                                        ")])] : _vm._e()];
      }
    }], null, false, 1710625463)
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.cerrarModal();
      }
    }
  }, [_vm._v("Cerrar")])])], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "modal fade",
    "class": {
      mostrar: _vm.modala
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
  }, [_vm._v("Seleccionar " + _vm._s(_vm.empleado.nombre_corto_proyecto != "VEHÍCULOS" ? "artículo/servicio" : "vehículos"))]), _vm._v(" "), _c("button", {
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
    staticClass: "modal-body"
  }, [_c("div", {
    staticClass: "accordion",
    attrs: {
      id: "accordiondos"
    }
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header bg-dark justify-content-center",
    attrs: {
      id: "headingUno"
    }
  }, [_c("h5", {
    staticClass: "mb-0"
  }, [_vm.empleado.nombre_corto_proyecto != "VEHÍCULOS" && _vm.empleado.nombre_corto_proyecto != "MANTENIMIENTO VEHICULAR" ? _c("button", {
    staticClass: "btn btn-dark collapsed",
    on: {
      click: function click($event) {
        return _vm.cambiarEstado(1);
      }
    }
  }, [_c("b", [_vm._v(" Articulos ")])]) : _vm._e(), _vm._v(" "), _vm.empleado.nombre_corto_proyecto != "VEHÍCULOS" && _vm.empleado.nombre_corto_proyecto != "MANTENIMIENTO VEHICULAR" ? _c("button", {
    staticClass: "btn btn-dark collapsed",
    on: {
      click: function click($event) {
        return _vm.cambiarEstado(2);
      }
    }
  }, [_c("b", [_vm._v(" Servicios ")])]) : _vm._e(), _vm._v(" "), _vm.empleado.nombre_corto_proyecto == "VEHÍCULOS" ? _c("button", {
    staticClass: "btn btn-dark collapsed",
    on: {
      click: function click($event) {
        return _vm.cambiarEstado(3);
      }
    }
  }, [_c("b", [_vm._v(" Vehículos ")])]) : _vm._e(), _vm._v(" "), _vm.empleado.nombre_corto_proyecto == "MANTENIMIENTO VEHICULAR" ? _c("button", {
    staticClass: "btn btn-dark collapsed",
    on: {
      click: function click($event) {
        return _vm.cambiarEstado(4);
      }
    }
  }, [_c("b", [_vm._v(" Mantenimiento Vehiculos ")])]) : _vm._e()])]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.estadomodal == 1,
      expression: "estadomodal == 1"
    }]
  }, [_c("v-server-table", {
    ref: "myTableArticulo",
    attrs: {
      url: "/articulo/busqueda",
      columns: _vm.columnsart,
      options: _vm.optionsart
    },
    on: {
      "row-click": _vm.seleccionarArticulo2
    },
    scopedSlots: _vm._u([{
      key: "calidad",
      fn: function fn(props) {
        return [props.row.calidad_id != null ? [_c("button", {
          staticClass: "btn btn-warning",
          attrs: {
            type: "button",
            "data-toggle": "tooltip",
            "data-placement": "top",
            title: props.row.descal
          }
        }, [_vm._v("\r\n                                                        " + _vm._s(props.row.calidad) + "\r\n                                                    ")])] : _vm._e()];
      }
    }, {
      key: "child_row",
      fn: function fn(props) {
        return [_c("div", {
          staticClass: "btn-group",
          attrs: {
            role: "group",
            "aria-label": "Button group with nested dropdown"
          }
        }, [_c("div", {
          staticClass: "btn-group",
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
        }), _vm._v(" Acciones\r\n                                                        ")]), _vm._v(" "), _c("div", {
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
              return _vm.abrirModal(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "icon-pencil"
        }), _vm._v(" Actualizar Articulo\r\n                                                            ")])])])])];
      }
    }], null, false, 2488657088)
  })], 1), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.estadomodal == 2,
      expression: "estadomodal == 2"
    }]
  }, [_c("v-server-table", {
    ref: "myTable",
    attrs: {
      url: "/catservicio/busqueda",
      columns: _vm.columnsserv,
      options: _vm.optionsserv
    },
    on: {
      "row-click": _vm.seleccionarServicio
    }
  })], 1), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.estadomodal == 3,
      expression: "estadomodal == 3"
    }]
  }, [_c("v-client-table", {
    ref: "myTable",
    attrs: {
      data: _vm.Vehiculos,
      columns: _vm.columnsvehi,
      options: _vm.optionsvehi
    },
    on: {
      "row-click": _vm.seleccionarVehiculo
    }
  })], 1), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.estadomodal == 4,
      expression: "estadomodal == 4"
    }]
  }, [_c("v-client-table", {
    ref: "myTable",
    attrs: {
      data: _vm.MantenimientoV,
      columns: _vm.columnsmanv,
      options: _vm.optionsmanv
    },
    on: {
      "row-click": _vm.seleccionarMantenimiento
    }
  })], 1)])])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.cerrarModal();
      }
    }
  }, [_vm._v("Cerrar")])])])])])])], 1) : _vm._e();
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "input-group-addon"
  }, [_c("span", {
    staticClass: "input-group-text"
  }, [_vm._v("$")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "input-group-addon"
  }, [_c("span", {
    staticClass: "input-group-text"
  }, [_vm._v("$")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Compra/PartidasDos.vue?vue&type=template&id=352b44b0":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Compra/PartidasDos.vue?vue&type=template&id=352b44b0 ***!
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
  return _vm.mostrar == 1 ? _c("div", {
    staticClass: "card"
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isLoadingDetalle
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "card-header"
  }, [_c("i", {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" Detalles de la compra con folio:  " + _vm._s(_vm.empleado == null ? "" : _vm.empleado.folio) + "\n      "), _c("button", {
    staticClass: "btn btn-secondary float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.maestro();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-arrow-left"
  }), _vm._v(" Atras\n      ")])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("v-client-table", {
    ref: "myTabledescuento",
    attrs: {
      columns: _vm.columnscompras,
      data: _vm.tableDataPartidasCompras,
      options: _vm.optionscompras
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
        })]), _vm._v(" "), _c("div", {
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
              return _vm.eliminarpartidacompra(props.row, 0);
            }
          }
        }, [_c("i", {
          staticClass: "icon-trash"
        }), _vm._v(" Eliminar.\n                ")]), _vm._v(" "), _c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.actualizarpartidacomprauno(props.row, 0);
            }
          }
        }, [_c("i", {
          staticClass: "icon-trash"
        }), _vm._v(" Actualizar Partida.\n                ")])])])])];
      }
    }, {
      key: "ad",
      fn: function fn(props) {
        return [_vm._v("\n      " + _vm._s(props.row.ad) + " " + _vm._s(props.row.comentario == null ? "" : props.row.comentario) + "\n    ")];
      }
    }], null, false, 3207334592)
  })], 1), _vm._v(" "), _c("div", {
    ref: "formLote",
    staticClass: "card"
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isLoadingDetalle
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "card-header"
  }), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("form", [_c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-8"
  }, [_c("label", [_vm._v("Artículo")]), _vm._v(" "), _c("div", {
    staticClass: "input-group"
  }, [_c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.partidascompras.nombrearti,
      expression: "partidascompras.nombrearti"
    }],
    "class": "form-control" + _vm.clases.nombrearti,
    attrs: {
      name: "name",
      rows: "4",
      cols: "80",
      readonly: ""
    },
    domProps: {
      value: _vm.partidascompras.nombrearti
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.partidascompras, "nombrearti", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "input-group-append"
  }, [_c("div", {
    staticClass: "dropdown"
  }, [_c("button", {
    staticClass: "btn btn-secondary dropdown-toggle",
    attrs: {
      type: "button",
      id: "dropdownMenu2",
      "data-toggle": "dropdown",
      "aria-haspopup": "true",
      "aria-expanded": "false"
    }
  }, [_vm._v("\n                  Opciones\n                ")]), _vm._v(" "), _c("div", {
    staticClass: "dropdown-menu",
    attrs: {
      "aria-labelledby": "dropdownMenu2"
    }
  }, [_c("button", {
    staticClass: "dropdown-item btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.abrirModalA("articulo", "registrar", _vm.partidascompras.orden_compra_id);
      }
    }
  }, [_vm._v("Buscar Requisición")]), _vm._v(" "), _c("button", {
    staticClass: "dropdown-item btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.abrirModalA("articulo", "agregar", _vm.partidascompras.orden_compra_id);
      }
    }
  }, [_vm._v("Agregar Articulo/Servicio")]), _vm._v(" "), _c("button", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.verequivalente,
      expression: "verequivalente"
    }],
    staticClass: "dropdown-item btn btn-success",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.comprarEquivalente();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-exchange-alt"
  }), _vm._v(" Cambiar")])])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-8"
  }, [_c("label", {
    attrs: {
      "for": "comentario"
    }
  }, [_vm._v("Comentario de Proveedor")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "max:75",
      expression: "'max:75'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.partidascompras.comentario,
      expression: "partidascompras.comentario"
    }],
    staticClass: "form-control",
    attrs: {
      maxlength: "75",
      title: "Texto que aparecera en el formato!",
      autocomplete: "off",
      id: "comentario",
      rows: "4"
    },
    domProps: {
      value: _vm.partidascompras.comentario
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.partidascompras, "comentario", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", {
    attrs: {
      "for": "validationDefaultUsername"
    }
  }, [_vm._v("Precio Unitario")]), _vm._v(" "), _c("div", {
    staticClass: "input-group"
  }, [_vm._m(0), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "decimal:2",
      expression: "'decimal:2'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.partidascompras.precio_unitario,
      expression: "partidascompras.precio_unitario"
    }],
    "class": "form-control" + _vm.clases.precio_unitario,
    attrs: {
      type: "text",
      disabled: _vm.desabilitar_precios,
      min: "0",
      pattern: "^[0-9]+",
      placeholder: "Precio unitario",
      autocomplete: "off",
      id: "precio_unitario",
      "data-vv-name": "precio_unitario"
    },
    domProps: {
      value: _vm.partidascompras.precio_unitario
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.partidascompras, "precio_unitario", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("precio_unitario")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", {
    attrs: {
      "for": "validationDefaultUsername"
    }
  }, [_vm._v("Adicionales")]), _vm._v(" "), _c("div", {
    staticClass: "input-group"
  }, [_vm._m(1), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "decimal:2",
      expression: "'decimal:2'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.partidascompras.adicionales,
      expression: "partidascompras.adicionales"
    }],
    "class": "form-control" + _vm.clases.precio_unitario,
    attrs: {
      type: "text",
      disabled: _vm.desabilitar_precios,
      min: "0",
      pattern: "^[0-9]+",
      placeholder: "Adicionales",
      autocomplete: "off",
      id: "adicionales",
      "data-vv-name": "adicionales"
    },
    domProps: {
      value: _vm.partidascompras.adicionales
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.partidascompras, "adicionales", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("adicionales")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Cantidad requerida")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.partidascompras.cantidad_real,
      expression: "partidascompras.cantidad_real"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      disabled: ""
    },
    domProps: {
      value: _vm.partidascompras.cantidad_real
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.partidascompras, "cantidad_real", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", {
    attrs: {
      "for": "validationDefaultUsername"
    }
  }, [_vm._v("Cantidad real comprada")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "decimal:2",
      expression: "'decimal:2'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.partidascompras.cantidad,
      expression: "partidascompras.cantidad"
    }],
    "class": "form-control" + _vm.clases.cantidad,
    attrs: {
      type: "text",
      disabled: _vm.desabilitar_precios,
      min: "0",
      pattern: "^[0-9]+",
      placeholder: "Cantidad real a comprar",
      autocomplete: "off",
      id: "cantidad",
      "data-vv-name": "cantidad"
    },
    domProps: {
      value: _vm.partidascompras.cantidad
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.partidascompras, "cantidad", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("cantidad")))])])])])]), _vm._v(" "), _c("div", {
    staticClass: "card-footer"
  }, [_c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.cancelar();
      }
    }
  }, [_vm._v("Cancelar")]), _vm._v(" "), _vm.tipoAccionpr == 1 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        _vm.validardetalle();
        _vm.guardarPR(1, _vm.partidascompras.orden_compra_id);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Agregar")]) : _vm._e(), _vm._v(" "), _vm.boton_actualizar_partida == 1 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.guardarAP();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Actualizar Partida")]) : _vm._e()])], 1), _vm._v(" "), _c("div", {
    staticClass: "modal fade",
    "class": {
      mostrar: _vm.modala
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
  }, [_c("div", [_c("vue-element-loading", {
    attrs: {
      active: _vm.isLoadingDetalle
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "modal-header"
  }, [_c("h4", {
    staticClass: "modal-title",
    domProps: {
      textContent: _vm._s(_vm.tituloModala)
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
  }, [_vm._v("x")])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_c("input", {
    attrs: {
      type: "hidden",
      name: "id"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_c("v-client-table", {
    ref: "myTable",
    attrs: {
      data: _vm.dataTableArticulo,
      columns: _vm.columnsa,
      options: _vm.optionsa
    },
    on: {
      "row-click": _vm.seleccionarArticulo2
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.cerrarModal();
      }
    }
  }, [_vm._v("Cerrar")])])], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "modal fade",
    "class": {
      mostrar: _vm.modal_agregar
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
  }, [_vm._v("Seleccionar artículo/servicio")]), _vm._v(" "), _c("button", {
    staticClass: "close",
    attrs: {
      type: "button",
      "aria-label": "Close"
    },
    on: {
      click: function click($event) {
        return _vm.cerrarModalAgregar();
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
    staticClass: "modal-body"
  }, [_c("div", {
    staticClass: "accordion",
    attrs: {
      id: "accordiondos"
    }
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header bg-dark justify-content-center",
    attrs: {
      id: "headingUno"
    }
  }, [_c("h5", {
    staticClass: "mb-0"
  }, [_c("button", {
    staticClass: "btn btn-dark collapsed",
    on: {
      click: function click($event) {
        return _vm.cambiarEstado(1);
      }
    }
  }, [_c("b", [_vm._v(" Articulos ")])]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-dark collapsed",
    on: {
      click: function click($event) {
        return _vm.cambiarEstado(2);
      }
    }
  }, [_c("b", [_vm._v(" Servicios ")])])])]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.estadomodal == 1,
      expression: "estadomodal == 1"
    }]
  }, [_c("v-server-table", {
    ref: "myTableArticulo",
    attrs: {
      url: "/articulo/busqueda",
      columns: _vm.columnsart,
      options: _vm.optionsart
    },
    on: {
      "row-click": _vm.seleccionarArticuloAgregar
    },
    scopedSlots: _vm._u([{
      key: "calidad",
      fn: function fn(props) {
        return [props.row.calidad_id != null ? [_c("button", {
          staticClass: "btn btn-warning",
          attrs: {
            type: "button",
            "data-toggle": "tooltip",
            "data-placement": "top",
            title: props.row.descal
          }
        }, [_vm._v("\n                              " + _vm._s(props.row.calidad) + "\n                            ")])] : _vm._e()];
      }
    }, {
      key: "child_row",
      fn: function fn(props) {
        return [_c("div", {
          staticClass: "btn-group",
          attrs: {
            role: "group",
            "aria-label": "Button group with nested dropdown"
          }
        }, [_c("div", {
          staticClass: "btn-group",
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
        }), _vm._v(" Acciones\n                              ")]), _vm._v(" "), _c("div", {
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
              return _vm.abrirModal(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "icon-pencil"
        }), _vm._v(" Actualizar Articulo\n                                ")])])])])];
      }
    }], null, false, 2799618880)
  })], 1), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.estadomodal == 2,
      expression: "estadomodal == 2"
    }]
  }, [_c("v-server-table", {
    ref: "myTable",
    attrs: {
      url: "/catservicio/busqueda",
      columns: _vm.columnsserv,
      options: _vm.optionsserv
    },
    on: {
      "row-click": _vm.seleccionarServicioAgregar
    }
  })], 1)])])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.cerrarModalAgregar();
      }
    }
  }, [_vm._v("Cerrar")])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "modal fade",
    "class": {
      mostrar: _vm.modalarticulos
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
  }, [_vm._v("Seleccionar artículo equivalente")]), _vm._v(" "), _c("button", {
    staticClass: "close",
    attrs: {
      type: "button",
      "aria-label": "Close"
    },
    on: {
      click: function click($event) {
        return _vm.cerrarModalArticulos();
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
    staticClass: "modal-body"
  }, [_c("div", {
    staticClass: "accordion",
    attrs: {
      id: "accordiondos"
    }
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header bg-dark justify-content-center",
    attrs: {
      id: "headingUno"
    }
  }, [_c("h5", {
    staticClass: "mb-0"
  }, [_c("button", {
    staticClass: "btn btn-dark collapsed",
    attrs: {
      disabled: _vm.partidascompras.articulo_id == null,
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#collapsecinco",
      "aria-expanded": "false",
      "aria-controls": "collapseTres"
    }
  }, [_c("b", [_vm._v(" Articulos ")])]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-dark collapsed",
    attrs: {
      disabled: _vm.partidascompras.servicio_id == null,
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#collapseseis",
      "aria-expanded": "false",
      "aria-controls": "collapseCuatro"
    }
  }, [_c("b", [_vm._v(" Servicios ")])])])]), _vm._v(" "), _c("div", {
    staticClass: "collapse",
    attrs: {
      id: "collapsecinco",
      "aria-labelledby": "headingUno",
      "data-parent": "#accordiondos"
    }
  }, [_c("v-server-table", {
    ref: "myTable",
    attrs: {
      url: "/articulo/busqueda",
      columns: _vm.columnsart,
      options: _vm.optionsart
    },
    on: {
      "row-click": _vm.seleccionarArticulosDos
    },
    scopedSlots: _vm._u([{
      key: "calidad",
      fn: function fn(props) {
        return [props.row.calidad_id != null ? [_c("button", {
          staticClass: "btn btn-warning",
          attrs: {
            type: "button",
            "data-toggle": "tooltip",
            "data-placement": "top",
            title: props.row.descal
          }
        }, [_vm._v("\n                      " + _vm._s(props.row.calidad) + "\n                    ")])] : _vm._e()];
      }
    }], null, false, 1181390583)
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "collapse",
    attrs: {
      id: "collapseseis",
      "aria-labelledby": "headingDos",
      "data-parent": "#accordiondos"
    }
  }, [_c("v-server-table", {
    ref: "myTable",
    attrs: {
      url: "/catservicio/busqueda",
      columns: _vm.columnsserv,
      options: _vm.optionsserv
    },
    on: {
      "row-click": _vm.seleccionarServicio
    }
  })], 1)])])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.cerrarModalArticulos();
      }
    }
  }, [_vm._v("Cerrar")])])])])])])], 1) : _vm._e();
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "input-group-addon"
  }, [_c("span", {
    staticClass: "input-group-text"
  }, [_vm._v("$")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "input-group-addon"
  }, [_c("span", {
    staticClass: "input-group-text"
  }, [_vm._v("$")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Compra/ProyectosCompras.vue?vue&type=template&id=450763f7":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Compra/ProyectosCompras.vue?vue&type=template&id=450763f7 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "container-fliud"
  }, [_vm.detalle == 1 ? _c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("i", {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" Compras\r\n                "), _c("button", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.PermisosCrud.Create,
      expression: "PermisosCrud.Create"
    }],
    staticClass: "btn btn-dark float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.abrirModal("compra", "registrar");
      }
    }
  }, [_c("i", {
    staticClass: "icon-plus"
  }), _vm._v(" Nuevo\r\n                ")])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("v-server-table", {
    ref: "myTable",
    attrs: {
      columns: _vm.columns,
      url: "/proyectos/buscarcompras",
      options: _vm.options
    },
    scopedSlots: _vm._u([{
      key: "condicion",
      fn: function fn(props) {
        return [props.row.condicion == 1 ? [_c("button", {
          staticClass: "btn btn-outline-success",
          attrs: {
            type: "button"
          }
        }, [_vm._v("Activo")])] : _vm._e(), _vm._v(" "), props.row.condicion == 0 ? [_c("button", {
          staticClass: "btn btn-outline-danger",
          attrs: {
            type: "button"
          }
        }, [_vm._v("Terminado")])] : _vm._e(), _vm._v(" "), props.row.condicion == 2 ? [_c("button", {
          staticClass: "btn btn-outline-warning",
          attrs: {
            type: "button"
          }
        }, [_vm._v("Pausa")])] : _vm._e(), _vm._v(" "), props.row.condicion == 3 ? [_c("button", {
          staticClass: "btn btn-outline-dark",
          attrs: {
            type: "button"
          }
        }, [_vm._v("Rechazado")])] : _vm._e()];
      }
    }, {
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
        }), _vm._v("  Acciones\r\n                                ")]), _vm._v(" "), _c("div", {
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
              return _vm.verdetalles(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-eye"
        }), _vm._v("  Ver ordenes de compra\r\n                                    ")])])])])];
      }
    }], null, false, 3268132591)
  })], 1)]) : _vm._e(), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.detalle == 2,
      expression: "detalle == 2"
    }]
  }, [_c("compras", {
    ref: "compras",
    on: {
      "compras:maestro": _vm.maestrob
    }
  })], 1), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.detalle == 3,
      expression: "detalle == 3"
    }]
  }, [_c("cardprincipal", {
    ref: "cardprincipal",
    on: {
      "cardprincipal:click": function cardprincipalClick($event) {
        return _vm.cerrar($event);
      },
      "cardprincipalproceso:click": function cardprincipalprocesoClick($event) {
        return _vm.cerrardos($event);
      },
      "cardprincipalprocesodos:click": function cardprincipalprocesodosClick($event) {
        return _vm.cerrartres($event);
      },
      "cardprincipalcerrarmodal:click": function cardprincipalcerrarmodalClick($event) {
        return _vm.cerrarModal();
      }
    }
  })], 1), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.detalle == 4,
      expression: "detalle == 4"
    }]
  }, [_c("partidas", {
    ref: "partidas",
    on: {
      "partidas:click": function partidasClick($event) {
        return _vm.maestro($event);
      }
    }
  })], 1), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.detalle == 5,
      expression: "detalle == 5"
    }]
  }, [_c("partidasdos", {
    ref: "partidasdos",
    on: {
      "partidas:click": function partidasClick($event) {
        return _vm.maestro($event);
      }
    }
  })], 1)])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Dashboard/Dashboard.vue?vue&type=template&id=79cedc58":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Dashboard/Dashboard.vue?vue&type=template&id=79cedc58 ***!
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
  return _c("main", {
    staticClass: "main"
  }, [_c("div", {
    staticClass: "container-fluid"
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isLoading
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.widgets.autorizarequisicion,
      expression: "widgets.autorizarequisicion"
    }],
    staticClass: "col-md-12"
  }, [_c("autorizarequisicion", {
    ref: "autorizarequisicion"
  })], 1)])], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Dashboard/Requisiciones.vue?vue&type=template&id=3709d3ff":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Dashboard/Requisiciones.vue?vue&type=template&id=3709d3ff ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "card border-dark"
  }, [_c("div", {
    staticClass: "card-header bg-dark text-white"
  }, [_c("i", {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" Requisiciones por recibir:\r\n        "), _vm.ver_partidas ? _c("button", {
    staticClass: "btn btn-secondary float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.regresar();
      }
    }
  }, [_c("i", {
    staticClass: "icon-arrow-left"
  }), _vm._v("Regresar\r\n        ")]) : _vm._e()]), _vm._v(" "), _c("vue-element-loading", {
    attrs: {
      active: _vm.isLoading
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("v-client-table", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.ver_partidas,
      expression: "!ver_partidas"
    }],
    attrs: {
      data: _vm.list_requis,
      columns: _vm.columns_requis,
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
        }), _vm._v(" Acciones\r\n                        ")]), _vm._v(" "), _c("div", {
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
              return _vm.cargardetalle(props.row.id);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-eye"
        }), _vm._v(" Ver partidas\r\n                            ")]), _vm._v(" "), _c("button", {
          staticClass: "dropdown-item",
          on: {
            click: function click($event) {
              return _vm.descargar(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-file-pdf"
        }), _vm._v("Descargar Requisición\r\n                            ")])])])])];
      }
    }, {
      key: "condicion",
      fn: function fn(props) {
        return [_c("button", {
          staticClass: "btn btn-sm btn-success",
          on: {
            click: function click($event) {
              return _vm.autorizar(4, props.row.id);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-check"
        }), _vm._v(" Sí")]), _vm._v(" "), _c("button", {
          staticClass: "btn btn-sm btn-danger",
          on: {
            click: function click($event) {
              return _vm.autorizar(0, props.row.id);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-close"
        }), _vm._v(" No")])];
      }
    }])
  }), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.ver_partidas,
      expression: "ver_partidas"
    }]
  }, [_c("v-client-table", {
    attrs: {
      data: _vm.list_partidas,
      options: _vm.options_partidas,
      columns: _vm.columns_partidas
    },
    scopedSlots: _vm._u([{
      key: "req.descripciona",
      fn: function fn(props) {
        return [_c("textarea", {
          attrs: {
            rows: "6",
            cols: "40"
          },
          domProps: {
            value: props.row.correccion != null ? props.row.correccion.comentario : props.row.req.descripciona + " " + (props.row.req.comentario == null ? "" : props.row.req.comentario)
          },
          on: {
            keyup: function keyup($event) {
              if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
              return _vm.guardarcorrecion($event, props.row.req);
            }
          }
        })];
      }
    }])
  })], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Proveedores/Evaluacion.vue?vue&type=template&id=ce6102be":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Proveedores/Evaluacion.vue?vue&type=template&id=ce6102be ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "fa fa-clipboard-check fa-2x"
  }), _vm._v(" Evaluación de Proveedores "), _c("strong", [_vm._v(_vm._s(_vm.mes === 2 ? "Febrero" : "Agosto") + " " + _vm._s(_vm.anio))]), _vm._v(" "), _c("button", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.PermisosCrud.Download,
      expression: "PermisosCrud.Download"
    }],
    staticClass: "btn btn-dark float-sm-right ml-2",
    on: {
      click: _vm.DescargarReporte
    }
  }, [_c("i", {
    staticClass: "fas fa-download mr-1"
  }), _vm._v("Reporte\r\n                ")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-primary float-sm-right ml-2",
    attrs: {
      type: "button",
      disabled: _vm.isLoading_proveedores
    },
    on: {
      click: _vm.DescargarCartas
    }
  }, [_c("i", {
    staticClass: "fas fa-file-archive-o mr-1"
  }), _vm._v("\r\n                        " + _vm._s(_vm.isLoading_proveedores ? "Descargando..." : "Descargar Cartas") + "\r\n                    ")]), _vm._v(" "), _c("div", {
    staticClass: "dropdown float-sm-right"
  }, [_c("button", {
    staticClass: "btn btn-primary dropdown-toggle",
    attrs: {
      type: "button",
      id: "dropdownMenu2",
      "data-toggle": "dropdown",
      "aria-haspopup": "true",
      "aria-expanded": "false"
    }
  }, [_vm._v("\r\n                    " + _vm._s(_vm.mes === 2 ? "Febrero" : "Agosto") + " " + _vm._s(_vm.anio) + "\r\n                    ")]), _vm._v(" "), _c("div", {
    staticClass: "dropdown-menu",
    attrs: {
      "aria-labelledby": "dropdownMenu2"
    }
  }, _vm._l(_vm.periods, function (p) {
    return _c("button", {
      key: p.month,
      staticClass: "dropdown-item",
      attrs: {
        type: "button"
      },
      on: {
        click: function click($event) {
          return _vm.selectPeriods(p.anio, p.mes);
        }
      }
    }, [_vm._v(_vm._s(p.month) + "\r\n                        ")]);
  }), 0)])]), _vm._v(" "), _c("vue-element-loading", {
    attrs: {
      active: _vm.isLoading_proveedores
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("v-client-table", {
    ref: "myTable",
    attrs: {
      columns: _vm.columns,
      data: _vm.list_proveedores,
      options: _vm.options_proveedores
    },
    scopedSlots: _vm._u([{
      key: "id",
      fn: function fn(props) {
        return [_c("button", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: _vm.PermisosCrud.Create,
            expression: "PermisosCrud.Create"
          }],
          staticClass: "btn btn-outline-dark",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.AbrirModalEvaluacion(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-tasks"
        })]), _vm._v(" "), props.row.total_evaluacion != null ? [_c("button", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: _vm.PermisosCrud.Download,
            expression: "PermisosCrud.Download"
          }],
          staticClass: "btn btn-outline-dark",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.DescargrEvaluacion(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-download"
        })])] : _vm._e()];
      }
    }, {
      key: "total_evaluacion",
      fn: function fn(props) {
        return [props.row.total_evaluacion == null ? [_c("span", [_vm._v("N/D")])] : [props.row.total_evaluacion >= 54 ? _c("span", {
          staticClass: "text-success"
        }, [_vm._v("\r\n                                APROBADO\r\n                            ")]) : _vm._e(), _vm._v(" "), props.row.total_evaluacion >= 36 && props.row.total_evaluacion <= 53 ? _c("span", {
          staticClass: "text-warning"
        }, [_vm._v("\r\n                                CONDICIONADO\r\n                            ")]) : _vm._e(), _vm._v(" "), props.row.total_evaluacion >= 18 && props.row.total_evaluacion <= 35 ? _c("span", {
          staticClass: "text-danger"
        }, [_vm._v("\r\n                                No APTO\r\n                            ")]) : _vm._e()]];
      }
    }])
  })], 1)], 1)]), _vm._v(" "), _c("div", {
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
  }, [_c("div", [_c("vue-element-loading", {
    attrs: {
      active: _vm.isLoading
    }
  }), _vm._v(" "), _c("div", {
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
        return _vm.CerrarModalEvaluacion();
      }
    }
  }, [_c("span", {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("×")])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "accordion",
    attrs: {
      id: "accordion"
    }
  }, [_c("div", {
    staticClass: "card"
  }, [_vm._m(1), _vm._v(" "), _c("div", {
    staticClass: "collapse",
    attrs: {
      id: "collapseOne",
      "aria-labelledby": "headingOne",
      "data-parent": "#accordion"
    }
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-6 form-control-label"
  }, [_vm._v("\r\n                                                Atención recibida (cortesía, amabilidad)\r\n                                            ")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.calificacion.uno,
      expression: "calificacion.uno"
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
        _vm.$set(_vm.calificacion, "uno", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "4"
    }
  }, [_vm._v("Excelente")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "3"
    }
  }, [_vm._v("Bien")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "2"
    }
  }, [_vm._v("Regular")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("Deficiente")])])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-6 form-control-label"
  }, [_vm._v("\r\n                                                Rapidez en la atención\r\n                                            ")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.calificacion.dos,
      expression: "calificacion.dos"
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
        _vm.$set(_vm.calificacion, "dos", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "4"
    }
  }, [_vm._v("Excelente")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "3"
    }
  }, [_vm._v("Bien")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "2"
    }
  }, [_vm._v("Regular")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("Deficiente")])])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-6 form-control-label"
  }, [_vm._v("\r\n                                                Agilidad ante un problema, duda, sugerencia o requerimiento.\r\n                                            ")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.calificacion.tres,
      expression: "calificacion.tres"
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
        _vm.$set(_vm.calificacion, "tres", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "4"
    }
  }, [_vm._v("Excelente")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "3"
    }
  }, [_vm._v("Bien")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "2"
    }
  }, [_vm._v("Regular")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("Deficiente")])])])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "accordion",
    attrs: {
      id: "accordionTwo"
    }
  }, [_c("div", {
    staticClass: "card"
  }, [_vm._m(2), _vm._v(" "), _c("div", {
    staticClass: "collapse",
    attrs: {
      id: "collapseTwo",
      "aria-labelledby": "headingTwo",
      "data-parent": "#accordionTwo"
    }
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-6 form-control-label"
  }, [_vm._v("\r\n                                                Trato personal recibido (cortesía, amabilidad)\r\n                                            ")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.calificacion.cuatro,
      expression: "calificacion.cuatro"
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
        _vm.$set(_vm.calificacion, "cuatro", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "4"
    }
  }, [_vm._v("Excelente")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "3"
    }
  }, [_vm._v("Bien")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "2"
    }
  }, [_vm._v("Regular")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("Deficiente")])])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-6 form-control-label"
  }, [_vm._v("\r\n                                                Actitud y atención a la hora de hacer una consulta o reclamación")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.calificacion.cinco,
      expression: "calificacion.cinco"
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
        _vm.$set(_vm.calificacion, "cinco", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "4"
    }
  }, [_vm._v("Excelente")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "3"
    }
  }, [_vm._v("Bien")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "2"
    }
  }, [_vm._v("Regular")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("Deficiente")])])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-6 form-control-label"
  }, [_vm._v("\r\n                                                Facilidad para contactar con la persona adecuada\r\n                                            ")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.calificacion.seis,
      expression: "calificacion.seis"
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
        _vm.$set(_vm.calificacion, "seis", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "4"
    }
  }, [_vm._v("Excelente")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "3"
    }
  }, [_vm._v("Bien")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "2"
    }
  }, [_vm._v("Regular")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("Deficiente")])])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-6 form-control-label"
  }, [_vm._v("\r\n                                                Nivel de información recibido sobre los servicios\r\n                                            ")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.calificacion.siete,
      expression: "calificacion.siete"
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
        _vm.$set(_vm.calificacion, "siete", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "4"
    }
  }, [_vm._v("Excelente")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "3"
    }
  }, [_vm._v("Bien")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "2"
    }
  }, [_vm._v("Regular")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("Deficiente")])])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-6 form-control-label"
  }, [_vm._v("\r\n                                                Claridad de las cotizaciones, cumple con sus requisitos y requerimientos de forma\r\n                                            ")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.calificacion.ocho,
      expression: "calificacion.ocho"
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
        _vm.$set(_vm.calificacion, "ocho", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "4"
    }
  }, [_vm._v("Excelente")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "3"
    }
  }, [_vm._v("Bien")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "2"
    }
  }, [_vm._v("Regular")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("Deficiente")])])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-6 form-control-label"
  }, [_vm._v("Cotización oportuna")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.calificacion.nueve,
      expression: "calificacion.nueve"
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
        _vm.$set(_vm.calificacion, "nueve", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "4"
    }
  }, [_vm._v("Excelente")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "3"
    }
  }, [_vm._v("Bien")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "2"
    }
  }, [_vm._v("Regular")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("Deficiente")])])])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "accordion",
    attrs: {
      id: "accordionThree"
    }
  }, [_c("div", {
    staticClass: "card"
  }, [_vm._m(3), _vm._v(" "), _c("div", {
    staticClass: "collapse",
    attrs: {
      id: "collapseThree",
      "aria-labelledby": "headingThree",
      "data-parent": "#accordionThree"
    }
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-6 form-control-label"
  }, [_vm._v("\r\n                                                Tiempo de respuesta respecto a su factura\r\n                                            ")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.calificacion.diez,
      expression: "calificacion.diez"
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
        _vm.$set(_vm.calificacion, "diez", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "4"
    }
  }, [_vm._v("Excelente")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "3"
    }
  }, [_vm._v("Bien")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "2"
    }
  }, [_vm._v("Regular")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("Deficiente")])])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-6 form-control-label"
  }, [_vm._v("\r\n                                                Actitud y atención a la hora de hacer una consulta o reclamación\r\n                                            ")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.calificacion.once,
      expression: "calificacion.once"
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
        _vm.$set(_vm.calificacion, "once", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "4"
    }
  }, [_vm._v("Excelente")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "3"
    }
  }, [_vm._v("Bien")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "2"
    }
  }, [_vm._v("Regular")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("Deficiente")])])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-6 form-control-label"
  }, [_vm._v("\r\n                                                Facilidad para contactar con la persona adecuada\r\n                                            ")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.calificacion.doce,
      expression: "calificacion.doce"
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
        _vm.$set(_vm.calificacion, "doce", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "4"
    }
  }, [_vm._v("Excelente")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "3"
    }
  }, [_vm._v("Bien")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "2"
    }
  }, [_vm._v("Regular")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("Deficiente")])])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-6 form-control-label"
  }, [_vm._v("\r\n                                                Nivel de información de las facturas enviadas\r\n                                            ")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.calificacion.trece,
      expression: "calificacion.trece"
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
        _vm.$set(_vm.calificacion, "trece", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "4"
    }
  }, [_vm._v("Excelente")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "3"
    }
  }, [_vm._v("Bien")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "2"
    }
  }, [_vm._v("Regular")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("Deficiente")])])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-6 form-control-label"
  }, [_vm._v("\r\n                                                Nivel de satisfacción general con este servicio\r\n                                            ")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.calificacion.catorce,
      expression: "calificacion.catorce"
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
        _vm.$set(_vm.calificacion, "catorce", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "4"
    }
  }, [_vm._v("Excelente")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "3"
    }
  }, [_vm._v("Bien")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "2"
    }
  }, [_vm._v("Regular")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("Deficiente")])])])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "accordion",
    attrs: {
      id: "accordionFour"
    }
  }, [_c("div", {
    staticClass: "card"
  }, [_vm._m(4), _vm._v(" "), _c("div", {
    staticClass: "collapse",
    attrs: {
      id: "collapseFour",
      "aria-labelledby": "headingFour",
      "data-parent": "#accordionFour"
    }
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-6 form-control-label"
  }, [_vm._v("\r\n                                                Cumplimiento del plazo de entrega acordado\r\n                                            ")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.calificacion.quince,
      expression: "calificacion.quince"
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
        _vm.$set(_vm.calificacion, "quince", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "4"
    }
  }, [_vm._v("Excelente")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "3"
    }
  }, [_vm._v("Bien")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "2"
    }
  }, [_vm._v("Regular")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("Deficiente")])])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-6 form-control-label"
  }, [_vm._v("Cumplimiento en las cantidades entregadas de acuerdo con lo acordado")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.calificacion.diesiseis,
      expression: "calificacion.diesiseis"
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
        _vm.$set(_vm.calificacion, "diesiseis", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "4"
    }
  }, [_vm._v("Excelente")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "3"
    }
  }, [_vm._v("Bien")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "2"
    }
  }, [_vm._v("Regular")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("Deficiente")])])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-6 form-control-label"
  }, [_vm._v("Cumplimiento a las especificaciones de embalaje y transporte de acuerdo con lo solicitado")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.calificacion.diesisiete,
      expression: "calificacion.diesisiete"
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
        _vm.$set(_vm.calificacion, "diesisiete", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "4"
    }
  }, [_vm._v("Excelente")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "3"
    }
  }, [_vm._v("Bien")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "2"
    }
  }, [_vm._v("Regular")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("Deficiente")])])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-6 form-control-label"
  }, [_vm._v("\r\n                                                Cumplimiento a las especificaciones del producto de acuerdo con lo solicitado\r\n                                            ")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.calificacion.diesiocho,
      expression: "calificacion.diesiocho"
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
        _vm.$set(_vm.calificacion, "diesiocho", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "4"
    }
  }, [_vm._v("Excelente")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "3"
    }
  }, [_vm._v("Bien")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "2"
    }
  }, [_vm._v("Regular")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("Deficiente")])])])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-6"
  }, [_c("label", [_vm._v("Evaluador")]), _vm._v(" "), _c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    attrs: {
      options: _vm.listaEmpleados,
      id: "elabora_empleado_id",
      name: "elabora_empleado_id",
      label: "name",
      "data-vv-name": "Elabora empleado"
    },
    model: {
      value: _vm.calificacion.evaluador,
      callback: function callback($$v) {
        _vm.$set(_vm.calificacion, "evaluador", $$v);
      },
      expression: "calificacion.evaluador"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Elabora empleado")))])], 1), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-6"
  }, [_c("label", [_vm._v("Fecha de evaluacion")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.calificacion.fecha,
      expression: "calificacion.fecha"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date"
    },
    domProps: {
      value: _vm.calificacion.fecha
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.calificacion, "fecha", $event.target.value);
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
        return _vm.CerrarModalEvaluacion();
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
        return _vm.GuardarEvaluacion(1);
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
        return _vm.GuardarEvaluacion(0);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v("Actualizar")]) : _vm._e()])], 1)])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-2"
  }, [_c("label")]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-10"
  }, [_c("label", [_c("b", [_vm._v("INSTRUCCIONES: Selecionar el puntaje correspondiente al desempeño observado.")])])])]);
}, function () {
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
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#collapseOne",
      "aria-expanded": "true",
      "aria-controls": "collapseOne"
    }
  }, [_vm._v("\r\n                                            A) ATENCIÓN TELEFÓNICA / CORREO ELECTRÓNICO\r\n                                        ")])])]);
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
    staticClass: "btn btn-link",
    attrs: {
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#collapseTwo",
      "aria-expanded": "true",
      "aria-controls": "collapseTwo"
    }
  }, [_vm._v("\r\n                                            B) ATENCIÓN COMERCIAL\r\n                                        ")])])]);
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
    staticClass: "btn btn-link",
    attrs: {
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#collapseThree",
      "aria-expanded": "true",
      "aria-controls": "collapseThree"
    }
  }, [_vm._v("\r\n                                            C) SERVICIO DE ADMINISTRACIÓN Y FACTURACION\r\n                                        ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header",
    attrs: {
      id: "headingFour"
    }
  }, [_c("h5", {
    staticClass: "mb-0"
  }, [_c("button", {
    staticClass: "btn btn-link",
    attrs: {
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#collapseFour",
      "aria-expanded": "true",
      "aria-controls": "collapseFour"
    }
  }, [_vm._v("\r\n                                            D) PRODUCTO/SERVICIO\r\n                                        ")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Proveedores/Proveedor.vue?vue&type=template&id=5f13fd5a":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Proveedores/Proveedor.vue?vue&type=template&id=5f13fd5a ***!
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
  }), _vm._v(" Registro de Proveedores - " + _vm._s(_vm.anio) + "\r\n                 "),  true ? [_c("div", {
    staticClass: "dropdown float-sm-right mx-1"
  }, [_c("button", {
    staticClass: "btn btn-primary dropdown-toggle",
    attrs: {
      type: "button",
      id: "dropdownMenu2",
      "data-toggle": "dropdown",
      "aria-haspopup": "true",
      "aria-expanded": "false"
    }
  }, [_vm._v("\r\n                                " + _vm._s(_vm.anio) + "\r\n                            ")]), _vm._v(" "), _c("div", {
    staticClass: "dropdown-menu",
    attrs: {
      "aria-labelledby": "dropdownMenu2"
    }
  }, _vm._l(_vm.Years, function (year) {
    return _c("button", {
      key: year.anio,
      staticClass: "dropdown-item",
      attrs: {
        type: "button"
      },
      on: {
        click: function click($event) {
          return _vm.selectYear(year.anio);
        }
      }
    }, [_vm._v("\r\n                                    " + _vm._s(year.anio) + "\r\n                                ")]);
  }), 0)]), _vm._v(" "), _c("button", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.PermisosCrud.Create,
      expression: "PermisosCrud.Create"
    }],
    staticClass: "btn btn-primary float-sm-right mx-1",
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
  }), _vm._v(" Nuevo\r\n                        ")]), _vm._v(" "), _c("button", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.PermisosCrud.Download,
      expression: "PermisosCrud.Download"
    }],
    staticClass: "btn btn-success float-sm-right mx-1",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.DescargarReporte();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-file-excel"
  }), _vm._v(" Descargar\r\n                        ")])] : 0], 2), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isLoading_proveedores
    }
  }), _vm._v(" "), _c("v-client-table", {
    ref: "myTable",
    attrs: {
      columns: _vm.columns,
      data: _vm.list_proveedores,
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
        })]), _vm._v(" "), _c("div", {
          staticClass: "dropdown-menu",
          attrs: {
            "aria-labelledby": "btnGroupDrop1"
          }
        }, [_c("button", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: _vm.PermisosCrud.Update,
            expression: "PermisosCrud.Update"
          }],
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
        }), _vm._v("Actualizar proveedor\r\n                                    ")]), _vm._v(" "), props.row.condicion ? _c("button", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: _vm.PermisosCrud.Delete,
            expression: "PermisosCrud.Delete"
          }],
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.actdesact(props.row.id, 0);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-ban"
        }), _vm._v("Desactivar proveedor\r\n                                    ")]) : _c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.actdesact(props.row.id, 1);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-check"
        }), _vm._v("Activar proveedor\r\n                                    ")]), _vm._v(" "), _c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.Historial(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-list-alt"
        }), _vm._v("Historial\r\n                                    ")])])])])];
      }
    }, {
      key: "condicion",
      fn: function fn(props) {
        return [props.row.condicion == 1 ? _c("span", {
          staticClass: "btn btn-outline-success"
        }, [_vm._v("Activo")]) : _c("span", {
          staticClass: "btn btn-outline-danger"
        }, [_vm._v("Desactivado")])];
      }
    }, {
      key: "categoria",
      fn: function fn(props) {
        return [props.row.total_evaluacion == null ? _c("p", [_vm._v("N/D")]) : _vm._e(), _vm._v(" "), props.row.total_evaluacion >= 54 ? _c("span", {
          staticClass: "text-success"
        }, [_vm._v("APROBADO")]) : _vm._e(), _vm._v(" "), props.row.total_evaluacion >= 36 && props.row.total_evaluacion <= 53 ? _c("span", {
          staticClass: "text-warning"
        }, [_vm._v("CONDICIONADO")]) : _vm._e(), _vm._v(" "), props.row.total_evaluacion >= 18 && props.row.total_evaluacion <= 35 ? _c("span", {
          staticClass: "text-danger"
        }, [_vm._v("NO APTO")]) : _vm._e()];
      }
    }, {
      key: "total_evaluacion",
      fn: function fn(props) {
        return [props.row.total_evaluacion == null ? _c("span", [_vm._v("0")]) : _c("span", [_vm._v(_vm._s(props.row.total_evaluacion))])];
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
  }, [_c("div", {
    staticClass: "modal-dialog modal-lg",
    attrs: {
      role: "document"
    }
  }, [_c("div", {
    staticClass: "modal-content"
  }, [_c("div", [_c("vue-element-loading", {
    attrs: {
      active: _vm.isLoading
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "modal-header"
  }, [_c("h5", {
    staticClass: "modal-title mb-0"
  }, [_vm._v("\r\n                            " + _vm._s(_vm.tituloModal) + "\r\n                        ")]), _vm._v(" "), _c("button", {
    staticClass: "close ml-auto",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.cerrarModal();
      }
    }
  }, [_c("span", [_vm._v("×")])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_c("div", {
    staticClass: "row mb-3"
  }, [_c("div", {
    staticClass: "col-md-8 offset-md-2"
  }, [_c("div", {
    staticClass: "form-floating"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.proveedor.razon_social,
      expression: "proveedor.razon_social"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "razon_social",
      name: "razon_social",
      placeholder: "Razón Social",
      autocomplete: "off",
      "data-vv-name": "Razon Social"
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
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "razon_social"
    }
  }, [_vm._v("Razón Social")])]), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("\r\n                                        " + _vm._s(_vm.errors.first("razon_social")) + "\r\n                                    ")])])]), _vm._v(" "), _c("div", {
    staticClass: "row mb-3"
  }, [_c("div", {
    staticClass: "col-md-8 offset-md-2"
  }, [_c("div", {
    staticClass: "form-floating"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.proveedor.nombre,
      expression: "proveedor.nombre"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "nombre",
      placeholder: "Nombre",
      autocomplete: "off",
      id: "nombre",
      "data-vv-name": "Nombre"
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
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "nombre"
    }
  }, [_vm._v("Nombre comercial")])]), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("nombre")))])])]), _vm._v(" "), _c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "row mb-3"
  }, [_c("div", {
    staticClass: "col"
  }, [_c("div", {
    staticClass: "form-floating"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.tipo_proveedor,
      expression: "tipo_proveedor"
    }],
    staticClass: "form-select",
    attrs: {
      id: "tipo_proveedor"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.tipo_proveedor = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c("option", {
    attrs: {
      value: "",
      disabled: ""
    }
  }, [_vm._v("Seleccione el origen")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("Nacional")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "2"
    }
  }, [_vm._v("Extranjero")])]), _vm._v(" "), _c("label", {
    attrs: {
      "for": "tipo_proveedor"
    }
  }, [_vm._v("Origen del proveedor")])])]), _vm._v(" "), _c("div", {
    staticClass: "col"
  }, [_vm.tipo_proveedor == 1 ? _c("div", [_c("div", {
    staticClass: "form-floating mb-1"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.proveedor.rfc,
      expression: "proveedor.rfc"
    }],
    staticClass: "form-control",
    "class": {
      "is-invalid": _vm.rfcTouched && !_vm.proveedor.rfc
    },
    attrs: {
      type: "text",
      id: "rfc",
      placeholder: "RFC",
      maxlength: "13",
      autocomplete: "off"
    },
    domProps: {
      value: _vm.proveedor.rfc
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.proveedor, "rfc", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "rfc"
    }
  }, [_vm._v("RFC")])]), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("RFC")))]), _vm._v(" "), _vm.rfcTouched && _vm.rfc_valido ? _c("span", {
    staticClass: "text-success"
  }, [_vm._v("\r\n                                                RFC válido\r\n                                            ")]) : _vm._e(), _vm._v(" "), _vm.rfcTouched && !_vm.rfc_valido ? _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("\r\n                                                RFC inválido\r\n                                            ")]) : _vm._e(), _vm._v(" "), _c("small", {
    staticClass: "text-muted d-block"
  }, [_vm._v("\r\n                                                " + _vm._s(_vm.proveedor.rfc ? _vm.proveedor.rfc.length : 0) + "/13\r\n                                            ")])]) : _vm._e(), _vm._v(" "), _vm.tipo_proveedor == 2 ? _c("div", [_c("div", {
    staticClass: "form-floating mb-1"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.proveedor.taxid,
      expression: "proveedor.taxid"
    }],
    staticClass: "form-control",
    "class": {
      "is-valid": _vm.taxidTouched && _vm.proveedor.taxid
    },
    attrs: {
      type: "text",
      id: "taxid",
      placeholder: "TAX ID",
      maxlength: "10",
      autocomplete: "off"
    },
    domProps: {
      value: _vm.proveedor.taxid
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.proveedor, "taxid", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "taxid"
    }
  }, [_vm._v("TAX ID")])]), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("TAX ID")))]), _vm._v(" "), _vm.taxidTouched && _vm.taxidValido ? _c("span", {
    staticClass: "text-success"
  }, [_vm._v("\r\n                                                TAX ID válido\r\n                                            ")]) : _vm._e(), _vm._v(" "), _vm.taxidTouched && !_vm.taxidValido ? _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("\r\n                                                TAX ID inválido\r\n                                            ")]) : _vm._e(), _vm._v(" "), _c("small", {
    staticClass: "text-muted d-block"
  }, [_vm._v("\r\n                                                " + _vm._s(_vm.proveedor.taxid ? _vm.proveedor.taxid.length : 0) + "/10\r\n                                            ")])]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "col"
  }, [_c("div", {
    staticClass: "form-floating"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.proveedor.giro,
      expression: "proveedor.giro"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-select",
    attrs: {
      id: "giro",
      "data-vv-name": "Giro"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.proveedor, "giro", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "",
      disabled: ""
    }
  }, [_vm._v("Seleccione un suministro")]), _vm._v(" "), _vm._l(_vm.list_giro_suministro, function (Suministro) {
    return _c("option", {
      key: Suministro,
      domProps: {
        value: Suministro
      }
    }, [_vm._v("\r\n                                                    " + _vm._s(Suministro) + "\r\n                                                ")]);
  })], 2), _vm._v(" "), _c("label", {
    attrs: {
      "for": "giro"
    }
  }, [_vm._v("Suministro / Giro")])]), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("\r\n                                            " + _vm._s(_vm.errors.first("giro")) + "\r\n                                        ")])])])]), _vm._v(" "), _c("hr", {
    staticStyle: {
      border: "1px solid #000",
      width: "100%",
      margin: "20px auto"
    }
  }), _vm._v(" "), _c("p", {
    staticClass: "font-weight-bold h6"
  }, [_vm._v("Dirección")]), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "row mb-4"
  }, [_c("div", {
    staticClass: "col"
  }, [_c("div", {
    staticClass: "form-floating"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.proveedor.calle,
      expression: "proveedor.calle"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      maxlength: "75",
      minlength: "3",
      "data-vv-name": "Calle",
      autocomplete: "off",
      placeholder: "Calle",
      id: "calle"
    },
    domProps: {
      value: _vm.proveedor.calle
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.proveedor, "calle", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "calle"
    }
  }, [_vm._v("Calle")]), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Calle")))])])]), _vm._v(" "), _c("div", {
    staticClass: "col"
  }, [_c("div", {
    staticClass: "form-floating"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.proveedor.colonia,
      expression: "proveedor.colonia"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      maxlength: "75",
      minlength: "3",
      "data-vv-name": "Colonia",
      autocomplete: "off",
      id: "colonia",
      placeholder: "Colonia"
    },
    domProps: {
      value: _vm.proveedor.colonia
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.proveedor, "colonia", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "colonia"
    }
  }, [_vm._v("Colonia")]), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Colonia")))])])])])]), _vm._v(" "), _c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "row mb-3"
  }, [_c("div", {
    staticClass: "col"
  }, [_c("div", {
    staticClass: "form-floating"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.proveedor.no_exterior,
      expression: "proveedor.no_exterior"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      maxlength: "10",
      "data-vv-name": "No. Exterior",
      autocomplete: "off",
      id: "no.Exterior",
      placeholder: "N° Exterior"
    },
    domProps: {
      value: _vm.proveedor.no_exterior
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.proveedor, "no_exterior", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "no.Exterior"
    }
  }, [_vm._v("N° Exterior")]), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("No. Exterior")))])])]), _vm._v(" "), _c("div", {
    staticClass: "col"
  }, [_c("div", {
    staticClass: "form-floating"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.proveedor.no_interior,
      expression: "proveedor.no_interior"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      "data-vv-name": "No.  Interior",
      autocomplete: "off",
      placeholder: "n.Interior"
    },
    domProps: {
      value: _vm.proveedor.no_interior
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.proveedor, "no_interior", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "n.Interior"
    }
  }, [_vm._v("N° Interior")]), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("No. Interior")))])])]), _vm._v(" "), _c("div", {
    staticClass: "col"
  }, [_c("div", {
    staticClass: "form-floating"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.proveedor.cp,
      expression: "proveedor.cp"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      maxlength: "5",
      minlength: "5",
      "data-vv-name": "C.P.",
      autocomplete: "off",
      placeholder: "C.P"
    },
    domProps: {
      value: _vm.proveedor.cp
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.proveedor, "cp", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "cp"
    }
  }, [_vm._v("C.P")]), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("C.P.")))])])])])]), _vm._v(" "), _c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "row mb-3"
  }, [_c("div", {
    staticClass: "col"
  }, [_c("div", {
    staticClass: "form-floating"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.proveedor.municipio,
      expression: "proveedor.municipio"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      maxlength: "75",
      minlength: "3",
      "data-vv-name": "Municipio",
      autocomplete: "off",
      placeholder: "Municipio",
      id: "muni"
    },
    domProps: {
      value: _vm.proveedor.municipio
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.proveedor, "municipio", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "muni"
    }
  }, [_vm._v("Municipio")]), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Municipio")))])])]), _vm._v(" "), _c("div", {
    staticClass: "col"
  }, [_c("div", {
    staticClass: "form-floating"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.proveedor.ciudad,
      expression: "proveedor.ciudad"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      maxlength: "75",
      minlength: "3",
      "data-vv-name": "ciudad",
      autocomplete: "off",
      placeholder: "Ciudad",
      id: "ciudad"
    },
    domProps: {
      value: _vm.proveedor.ciudad
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.proveedor, "ciudad", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "ciudad"
    }
  }, [_vm._v("Ciudad")]), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Ciudad")))])])]), _vm._v(" "), _c("div", {
    staticClass: "col"
  }, [_c("div", {
    staticClass: "form-floating"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.proveedor.estado,
      expression: "proveedor.estado"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      maxlength: "75",
      minlength: "3",
      "data-vv-name": "Estado",
      autocomplete: "off",
      placeholder: "Estado",
      id: "estado"
    },
    domProps: {
      value: _vm.proveedor.estado
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.proveedor, "estado", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "estado"
    }
  }, [_vm._v("Estado")]), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Estado")))])])])])]), _vm._v(" "), _vm.tipoAccion == 1 ? [_c("hr", {
    staticStyle: {
      border: "1px solid #000",
      width: "100%",
      margin: "20px auto"
    }
  }), _vm._v(" "), _c("p", {
    staticClass: "font-weight-bold h6"
  }, [_vm._v("Datos Bancarios")]), _vm._v(" "), _c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "row mb-3"
  }, [_c("div", {
    staticClass: "col"
  }, [_c("div", {
    staticClass: "form-floating"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.temp2_proveedor_banco,
      expression: "temp2_proveedor_banco"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      maxlength: "50",
      name: "banco_transferencia",
      placeholder: "Banco de transferencia",
      autocomplete: "off",
      id: "banco_transferencia",
      "data-vv-name": "banco transferencia"
    },
    domProps: {
      value: _vm.temp2_proveedor_banco
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.temp2_proveedor_banco = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "banco_transferencia"
    }
  }, [_vm._v("Banco de transferencia")]), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("banco_transferencia")))])])]), _vm._v(" "), _c("div", {
    staticClass: "col"
  }, [_c("div", {
    staticClass: "form-floating"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.temp2_proveedor_cuenta,
      expression: "temp2_proveedor_cuenta"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      maxlength: "50",
      pattern: "^[0-9]+",
      name: "numero_cuenta",
      placeholder: "Número de cuenta",
      autocomplete: "off",
      id: "numero_cuenta",
      "data-vv-name": "número cuenta"
    },
    domProps: {
      value: _vm.temp2_proveedor_cuenta
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.temp2_proveedor_cuenta = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "numero_cuenta"
    }
  }, [_vm._v("Número de cuenta")]), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("número cuenta")))])])])])]), _vm._v(" "), _c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "row mb-3"
  }, [_c("div", {
    staticClass: "col"
  }, [_c("div", {
    staticClass: "form-floating"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.temp2_proveedor_clabe,
      expression: "temp2_proveedor_clabe"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      maxlength: "50",
      pattern: "^[0-9]+",
      name: "clabe",
      placeholder: " Cuenta Clabe",
      autocomplete: "off",
      id: "clabe",
      "data-vv-name": "clabe"
    },
    domProps: {
      value: _vm.temp2_proveedor_clabe
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.temp2_proveedor_clabe = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "clabe"
    }
  }, [_vm._v("Cuenta Clabe")]), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("clabe")))])])]), _vm._v(" "), _c("div", {
    staticClass: "col"
  }, [_c("div", {
    staticClass: "form-floating"
  }, [_c("select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.temp2_proveedor_moneda,
      expression: "temp2_proveedor_moneda"
    }],
    staticClass: "form-select",
    attrs: {
      "data-vv-name": "moneda",
      placeholder: "Tipo de moneda",
      id: "tipoM"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.temp2_proveedor_moneda = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c("option", {
    attrs: {
      value: "",
      disabled: ""
    }
  }, [_vm._v("Tipo de moneda $")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "MXN"
    }
  }, [_vm._v("MXN")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "USD"
    }
  }, [_vm._v("USD")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "EUR"
    }
  }, [_vm._v("EUR")])]), _vm._v(" "), _c("label", {
    attrs: {
      "for": "tipoM"
    }
  }, [_vm._v("Tipo de moneda")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "row mb-3"
  }, [_c("div", {
    staticClass: "col-6"
  }, [_c("div", {
    staticClass: "form-floating"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.proveedor.tiene_credito,
      expression: "proveedor.tiene_credito"
    }],
    staticClass: "form-select",
    attrs: {
      id: "tiene_credito"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.proveedor, "tiene_credito", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "",
      disabled: ""
    }
  }, [_vm._v("Seleccione")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("Sí")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "0"
    }
  }, [_vm._v("No")])]), _vm._v(" "), _c("label", {
    attrs: {
      "for": "tiene_credito"
    }
  }, [_vm._v("¿Tiene crédito?")])])]), _vm._v(" "), _vm.proveedor.tiene_credito == 1 ? _c("div", {
    staticClass: "col"
  }, [_c("div", {
    staticClass: "form-floating"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required|decimal",
      expression: "'required|decimal'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.proveedor.limite_credito,
      expression: "proveedor.limite_credito"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      min: "0",
      step: "0.01",
      placeholder: "Límite de crédito",
      autocomplete: "off",
      id: "limite_credito",
      "data-vv-name": "Límite de crédito"
    },
    domProps: {
      value: _vm.proveedor.limite_credito
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.proveedor, "limite_credito", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "limite_credito"
    }
  }, [_vm._v("Límite de crédito")])]), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("\r\n                                                " + _vm._s(_vm.errors.first("Límite de crédito")) + "\r\n                                            ")])]) : _vm._e()])])] : _vm._e(), _vm._v(" "), _c("hr", {
    staticStyle: {
      border: "1px solid #000",
      width: "100%",
      margin: "20px auto"
    }
  }), _vm._v(" "), _c("p", {
    staticClass: "font-weight-bold h6"
  }, [_vm._v("Contacto")]), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "row mb-3"
  }, [_c("div", {
    staticClass: "col"
  }, [_c("div", {
    staticClass: "form-floating"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.proveedor.ventas_contacto,
      expression: "proveedor.ventas_contacto"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      maxlength: "45",
      minlength: "3",
      "data-vv-name": "Contacto de Ventas",
      autocomplete: "off",
      id: "conVentas",
      placeholder: "Contacto de ventas"
    },
    domProps: {
      value: _vm.proveedor.ventas_contacto
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.proveedor, "ventas_contacto", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "conVentas"
    }
  }, [_vm._v("Contacto de ventas")]), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Contacto de Ventas")))])])]), _vm._v(" "), _c("div", {
    staticClass: "col"
  }, [_c("div", {
    staticClass: "form-floating"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.proveedor.ventas_telefono,
      expression: "proveedor.ventas_telefono"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      maxlength: "10",
      "data-vv-name": "Teléfono de Ventas",
      autocomplete: "off",
      id: "telVentas",
      placeholder: "Teléfono de ventas"
    },
    domProps: {
      value: _vm.proveedor.ventas_telefono
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.proveedor, "ventas_telefono", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "telVentas"
    }
  }, [_vm._v("Teléfono de ventas")]), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Teléfono de Ventas")))])])]), _vm._v(" "), _c("div", {
    staticClass: "col"
  }, [_c("div", {
    staticClass: "form-floating"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.proveedor.ventas_celular,
      expression: "proveedor.ventas_celular"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      maxlength: "10",
      "data-vv-name": "Celular de Ventas",
      autocomplete: "off",
      id: "celVentas",
      placeholder: "Celular de ventas"
    },
    domProps: {
      value: _vm.proveedor.ventas_celular
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.proveedor, "ventas_celular", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "celVentas"
    }
  }, [_vm._v("Celular de ventas")]), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Celular de Ventas")))])])])]), _vm._v(" "), _c("div", {
    staticClass: "row mb-4"
  }, [_c("div", {
    staticClass: "col"
  }, [_c("div", {
    staticClass: "form-floating"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.proveedor.ventas_correo,
      expression: "proveedor.ventas_correo"
    }],
    staticClass: "form-control",
    attrs: {
      type: "email",
      maxlength: "45",
      minlength: "3",
      "data-vv-name": "Correo de Ventas",
      autocomplete: "off",
      id: "coVentas",
      placeholder: "Correo de ventas"
    },
    domProps: {
      value: _vm.proveedor.ventas_correo
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.proveedor, "ventas_correo", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "coVentas"
    }
  }, [_vm._v("Correo de ventas")]), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Correo de Ventas")))])])])])]), _vm._v(" "), _c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "row mb-3"
  }, [_c("div", {
    staticClass: "col"
  }, [_c("div", {
    staticClass: "form-floating"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.proveedor.facturacion_contacto,
      expression: "proveedor.facturacion_contacto"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      maxlength: "45",
      minlength: "3",
      "data-vv-name": "Contacto de Facturación",
      autocomplete: "off",
      id: "conFact",
      placeholder: "Contacto facturación"
    },
    domProps: {
      value: _vm.proveedor.facturacion_contacto
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.proveedor, "facturacion_contacto", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "conFact"
    }
  }, [_vm._v("Contacto facturación")]), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Contacto de Facturación")))])])]), _vm._v(" "), _c("div", {
    staticClass: "col"
  }, [_c("div", {
    staticClass: "form-floating"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.proveedor.facturacion_telefono,
      expression: "proveedor.facturacion_telefono"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      maxlength: "10",
      "data-vv-name": "Teléfono de Facturación",
      autocomplete: "off",
      id: "telFac",
      placeholder: "Teléfono de facturación"
    },
    domProps: {
      value: _vm.proveedor.facturacion_telefono
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.proveedor, "facturacion_telefono", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "telFac"
    }
  }, [_vm._v("Teléfono de facturación")]), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Teléfono de Facturación")))])])]), _vm._v(" "), _c("div", {
    staticClass: "col"
  }, [_c("div", {
    staticClass: "form-floating"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.proveedor.facturacion_celular,
      expression: "proveedor.facturacion_celular"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      maxlength: "10",
      "data-vv-name": "Celular de Facturación",
      autocomplete: "off",
      id: "celFac",
      placeholder: "Celular de facturación"
    },
    domProps: {
      value: _vm.proveedor.facturacion_celular
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.proveedor, "facturacion_celular", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Celular de Facturación")))]), _vm._v(" "), _c("label", {
    attrs: {
      "for": "celFac"
    }
  }, [_vm._v("Celular de facturación")])])])]), _vm._v(" "), _c("div", {
    staticClass: "row mb-3"
  }, [_c("div", {
    staticClass: "col"
  }, [_c("div", {
    staticClass: "form-floating"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.proveedor.facturacion_correo,
      expression: "proveedor.facturacion_correo"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      maxlength: "45",
      "data-vv-name": "Correo de Facturación",
      autocomplete: "off",
      id: "coFac",
      placeholder: "coFac"
    },
    domProps: {
      value: _vm.proveedor.facturacion_correo
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.proveedor, "facturacion_correo", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "coFac"
    }
  }, [_vm._v("Correo de facturación")]), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Correo de Facturación")))])])])])]), _vm._v(" "), _c("hr", {
    staticStyle: {
      border: "1px solid #000",
      width: "100%",
      margin: "20px auto"
    }
  }), _vm._v(" "), _vm.tipoAccion == 2 ? _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2 form-control-label"
  }, [_vm._v("Modificación")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-9 ml-4"
  }, _vm._l(_vm.list_modificaciones, function (item, index) {
    return _c("div", {
      key: index,
      staticClass: "form-check"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.list_modificaciones_db,
        expression: "list_modificaciones_db"
      }],
      staticClass: "form-check-input",
      attrs: {
        type: "checkbox",
        id: "mod-" + index
      },
      domProps: {
        value: item,
        checked: Array.isArray(_vm.list_modificaciones_db) ? _vm._i(_vm.list_modificaciones_db, item) > -1 : _vm.list_modificaciones_db
      },
      on: {
        change: function change($event) {
          var $$a = _vm.list_modificaciones_db,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;
          if (Array.isArray($$a)) {
            var $$v = item,
              $$i = _vm._i($$a, $$v);
            if ($$el.checked) {
              $$i < 0 && (_vm.list_modificaciones_db = $$a.concat([$$v]));
            } else {
              $$i > -1 && (_vm.list_modificaciones_db = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
            }
          } else {
            _vm.list_modificaciones_db = $$c;
          }
        }
      }
    }), _vm._v(" "), _c("label", {
      staticClass: "form-check-label",
      attrs: {
        "for": "mod-" + index
      }
    }, [_vm._v(_vm._s(item))])]);
  }), 0)]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2 form-control-label"
  }, [_vm._v("Documentos")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-9 ml-4"
  }, _vm._l(_vm.list_tipos_documentos, function (item, index) {
    return _c("div", {
      key: index,
      staticClass: "form-check"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.list_tipos_documentos_db,
        expression: "list_tipos_documentos_db"
      }],
      staticClass: "form-check-input",
      attrs: {
        type: "checkbox",
        id: "doc-" + index
      },
      domProps: {
        value: item,
        checked: Array.isArray(_vm.list_tipos_documentos_db) ? _vm._i(_vm.list_tipos_documentos_db, item) > -1 : _vm.list_tipos_documentos_db
      },
      on: {
        change: function change($event) {
          var $$a = _vm.list_tipos_documentos_db,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;
          if (Array.isArray($$a)) {
            var $$v = item,
              $$i = _vm._i($$a, $$v);
            if ($$el.checked) {
              $$i < 0 && (_vm.list_tipos_documentos_db = $$a.concat([$$v]));
            } else {
              $$i > -1 && (_vm.list_tipos_documentos_db = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
            }
          } else {
            _vm.list_tipos_documentos_db = $$c;
          }
        }
      }
    }), _vm._v(" "), _c("label", {
      staticClass: "form-check-label",
      attrs: {
        "for": "doc-" + index
      }
    }, [_vm._v(_vm._s(item))])]);
  }), 0)]), _vm._v(" "), _vm.tipoAccion == 2 ? _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2 form-control-label"
  }, [_vm._v("Anexos")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-9"
  }, [_c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.proveedor.anexos,
      expression: "proveedor.anexos"
    }],
    staticClass: "form-control",
    attrs: {
      rows: "3",
      maxlength: "300"
    },
    domProps: {
      value: _vm.proveedor.anexos
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.proveedor, "anexos", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.tipoAccion == 2,
      expression: "tipoAccion == 2"
    }],
    staticClass: "form-group row"
  }, [_c("div", {
    staticClass: "col-md-11 mx-auto"
  }, [_c("div", {
    staticClass: "form-row"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "col"
  }, [_c("button", {
    staticClass: "btn btn-dark mb-3 float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.AbrirModalBancos(1);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  }), _vm._v("Agregar\r\n                                            ")])])]), _vm._v(" "), _c("v-client-table", {
    attrs: {
      columns: _vm.columnsProvedores,
      data: _vm.ListBancos,
      options: _vm.optionsProveedores
    }
  })], 1)])], 2), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("button", {
    staticClass: "btn btn-success",
    on: {
      click: function click($event) {
        return _vm.openModalExcel();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-upload mr-1"
  }), _vm._v("Carga Excel\r\n                            ")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-success",
    attrs: {
      disabled: _vm.isDownloading
    },
    on: {
      click: function click($event) {
        return _vm.descargarExcel();
      }
    }
  }, [_vm.isDownloading ? _c("span", [_c("i", {
    staticClass: "fas fa-spinner fa-spin mr-1"
  }), _vm._v("\r\n                                    Generando...\r\n                                ")]) : _c("span", [_c("i", {
    staticClass: "fas fa-download mr-1"
  }), _vm._v("\r\n                                    Descargar Excel\r\n                                ")])]), _vm._v(" "), _vm.tipoAccion == 1 ? _c("button", {
    staticClass: "btn btn-primary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.GuardarProveedor(true);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save mr-1"
  }), _vm._v("Crear")]) : _vm._e(), _vm._v(" "), _vm.tipoAccion == 2 ? _c("button", {
    staticClass: "btn btn-primary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.GuardarProveedor(false);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save mr-1"
  }), _vm._v("Actualizar")]) : _vm._e()])], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "modal fade",
    "class": {
      mostrar: _vm.modalProveedor
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
    staticClass: "modal-title"
  }, [_vm._v("Bancos del Proveedor")]), _vm._v(" "), _c("button", {
    staticClass: "close",
    attrs: {
      type: "button",
      "aria-label": "Close"
    },
    on: {
      click: function click($event) {
        return _vm.CerrarModalProveedores();
      }
    }
  }, [_c("span", {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("x")])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2 form-control-label",
    attrs: {
      "for": "banco_transferencia"
    }
  }, [_vm._v("Banco")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-9"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.temp_proveedor_banco,
      expression: "temp_proveedor_banco"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      maxlength: "50",
      name: "banco_transferencia",
      placeholder: "Banco de transferencia",
      autocomplete: "off",
      id: "banco_transferencia",
      "data-vv-name": "banco transferencia"
    },
    domProps: {
      value: _vm.temp_proveedor_banco
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.temp_proveedor_banco = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("banco_transferencia")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2 form-control-label",
    attrs: {
      "for": "numero_cuenta"
    }
  }, [_vm._v("Cuenta")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-9"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.temp_proveedor_cuenta,
      expression: "temp_proveedor_cuenta"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      maxlength: "50",
      pattern: "^[0-9]+",
      name: "numero_cuenta",
      placeholder: "Número de cuenta",
      autocomplete: "off",
      id: "numero_cuenta",
      "data-vv-name": "número cuenta"
    },
    domProps: {
      value: _vm.temp_proveedor_cuenta
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.temp_proveedor_cuenta = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("numero_cuenta")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2 form-control-label",
    attrs: {
      "for": "clabe"
    }
  }, [_vm._v("Clabe")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-9"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.temp_proveedor_clabe,
      expression: "temp_proveedor_clabe"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      maxlength: "50",
      pattern: "^[0-9]+",
      name: "clabe",
      placeholder: "Clabe",
      autocomplete: "off",
      id: "clabe",
      "data-vv-name": "clabe"
    },
    domProps: {
      value: _vm.temp_proveedor_clabe
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.temp_proveedor_clabe = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("clabe")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2 form-control-label",
    attrs: {
      "for": "clabe"
    }
  }, [_vm._v("Condiciones de pago")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-9"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.temp_proveedor_condiciones,
      expression: "temp_proveedor_condiciones"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      maxlength: "50",
      placeholder: "Condiciones de pago",
      autocomplete: "off",
      "data-vv-name": "condiciones"
    },
    domProps: {
      value: _vm.temp_proveedor_condiciones
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.temp_proveedor_condiciones = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Condiciones")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2 form-control-label",
    attrs: {
      "for": "clabe"
    }
  }, [_vm._v("Moneda")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.temp_proveedor_moneda,
      expression: "temp_proveedor_moneda"
    }],
    staticClass: "form-control",
    attrs: {
      "data-vv-name": "moneda"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.temp_proveedor_moneda = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c("option", {
    attrs: {
      value: "MXN"
    }
  }, [_vm._v("MXN")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "USD"
    }
  }, [_vm._v("USD")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "EUR"
    }
  }, [_vm._v("EUR")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("button", {
    staticClass: "btn btn-outline-dark",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.CerrarModalProveedores();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-window-close mr-1"
  }), _vm._v("Cancelar")]), _vm._v(" "), _vm.tipo_guardar == 1 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.guardarProveedoresTemp(1);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save mr-1"
  }), _vm._v("Guardar")]) : _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.guardarProveedoresTemp(2);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save mr-1"
  }), _vm._v("Actualizar")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "modal fade",
    "class": {
      mostrar: _vm.ver_modal_historial
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
  }, [_vm._v(_vm._s(_vm.nombre_proveedor))]), _vm._v(" "), _c("button", {
    staticClass: "close",
    attrs: {
      type: "button",
      "aria-label": "Close"
    },
    on: {
      click: function click($event) {
        return _vm.CerrarModalHistorial();
      }
    }
  }, [_c("span", {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("x")])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isObtenerHistorial_loading
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "container"
  }, [_vm.list_historial.length > 0 ? _c("div", [_c("table", {
    staticClass: "table table-sm"
  }, [_vm._m(1), _vm._v(" "), _c("tbody", _vm._l(_vm.list_historial, function (h, i) {
    return _c("tr", {
      key: i
    }, [_c("th", {
      attrs: {
        scope: "row"
      }
    }, [_vm._v(_vm._s(i + 1))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(h.fecha))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(h.tipo_movimiento))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(h.modificacion))]), _vm._v(" "), _c("td", [_c("button", {
      staticClass: "btn btn-sm btn-dark",
      on: {
        click: function click($event) {
          return _vm.DescargarHistorial(h.id);
        }
      }
    }, [_c("i", {
      staticClass: "fas fa-download"
    })])])]);
  }), 0)])]) : _c("div", [_c("h5", {
    staticClass: "text-center"
  }, [_vm._v("Sin Cambios")])])])], 1), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("button", {
    staticClass: "btn btn-outline-dark",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.CerrarModalHistorial();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-window-close"
  }), _vm._v("\r\n                             Cerrar\r\n                        ")])])])])])]), _vm._v(" "), _c("modal-component", {
    attrs: {
      showModal: _vm.showModalExcel,
      loading: _vm.loading
    },
    on: {
      "set-loading": function setLoading($event) {
        _vm.setLoading = $event;
      },
      close: function close($event) {
        _vm.showModalExcel = false;
      },
      "file-upload": _vm.loadExcel
    }
  })], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col mx-auto"
  }, [_c("label", {
    staticClass: "font-weight-bold"
  }, [_vm._v("Datos bancarios")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "thead-dark"
  }, [_c("tr", [_c("th", {
    attrs: {
      scope: "col"
    }
  }, [_vm._v("#")]), _vm._v(" "), _c("th", {
    attrs: {
      scope: "col"
    }
  }, [_vm._v("Fecha")]), _vm._v(" "), _c("th", {
    attrs: {
      scope: "col"
    }
  }, [_vm._v("Tipo de Movimiento")]), _vm._v(" "), _c("th", {
    attrs: {
      scope: "col"
    }
  }, [_vm._v("Modificación")]), _vm._v(" "), _c("th", {
    attrs: {
      scope: "col"
    }
  })])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Reportes/GeneralCompras.vue?vue&type=template&id=33985539":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Reportes/GeneralCompras.vue?vue&type=template&id=33985539 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "card shadow-sm",
    staticStyle: {
      "min-height": "80vh"
    }
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "d-flex justify-content-end border-top mb-4",
    staticStyle: {
      "border-top": "6px solid #000"
    }
  }), _vm._v(" "), _c("i", {
    staticClass: "fa fa-calendar mr-2 text-primary"
  }), _vm._v(" "), _c("strong", [_vm._v("Generar Reporte por Rango de Fechas")]), _vm._v(" "), _c("div", {
    staticClass: "row g-3 mb-4"
  }, [_c("div", {
    staticClass: "col-md-3"
  }, [_c("label", {
    staticClass: "text-muted small"
  }, [_vm._v("Fecha inicial")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dateStart,
      expression: "dateStart"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date"
    },
    domProps: {
      value: _vm.dateStart
    },
    on: {
      change: _vm.dateRange,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.dateStart = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3"
  }, [_c("label", {
    staticClass: "text-muted small"
  }, [_vm._v("Fecha final")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dateEnd,
      expression: "dateEnd"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date"
    },
    domProps: {
      value: _vm.dateEnd
    },
    on: {
      change: _vm.dateRange,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.dateEnd = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("label", {
    staticClass: "text-muted small"
  }, [_vm._v("Proyectos")]), _vm._v(" "), _c("v-select", {
    attrs: {
      label: "nombre_corto",
      multiple: "",
      options: _vm.listaProyectos
    },
    model: {
      value: _vm.proyectos,
      callback: function callback($$v) {
        _vm.proyectos = $$v;
      },
      expression: "proyectos"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "row mb-2"
  }, [_c("div", {
    staticClass: "col-md-12"
  }, [_c("div", {
    staticClass: "form-check"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.mostrarTodos,
      expression: "mostrarTodos"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      id: "defaultCheck1"
    },
    domProps: {
      checked: Array.isArray(_vm.mostrarTodos) ? _vm._i(_vm.mostrarTodos, null) > -1 : _vm.mostrarTodos
    },
    on: {
      change: [function ($event) {
        var $$a = _vm.mostrarTodos,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.mostrarTodos = $$a.concat([$$v]));
          } else {
            $$i > -1 && (_vm.mostrarTodos = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.mostrarTodos = $$c;
        }
      }, _vm.onToggleProyectos]
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label text-muted",
    attrs: {
      "for": "defaultCheck1"
    }
  }, [_vm._v("\r\n                    Todos los proyectos\r\n                    ")])])])]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-success px-4 mb-4",
    on: {
      click: function click($event) {
        return _vm.DescargarReporte();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-file-excel mr-2"
  }), _vm._v("\r\n            Generar Reporte\r\n            ")])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header bg-white border-0 pb-0"
  }, [_c("h5", {
    staticClass: "mb-0"
  }, [_c("i", {
    staticClass: "fa fa-file-text mr-2 text-success"
  }), _vm._v(" "), _c("strong", [_vm._v("Reporte General de Compras")])])]);
}];
render._withStripped = true;


/***/ }),

<<<<<<< HEAD
=======
/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Components/ModalComponent.vue?vue&type=style&index=0&id=a5d63b3c&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Components/ModalComponent.vue?vue&type=style&index=0&id=a5d63b3c&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.d-block[data-v-a5d63b3c] { display: block !important;\n}\n.modal[data-v-a5d63b3c] {\r\n  background: rgba(0, 0, 0, 0.5);\r\n  backdrop-filter: blur(4px);\n}\n.excel-modal[data-v-a5d63b3c] {\r\n  border-radius: 18px;\r\n  position: relative;\r\n  border: none;\r\n  box-shadow: 0px 15px 40px rgba(0, 0, 0, 0.25);\n}\n.title[data-v-a5d63b3c] {\r\n  text-align: center;\r\n  font-weight: 700;\r\n  font-size: 22px;\r\n  margin-bottom: 25px;\n}\n.excel-drop[data-v-a5d63b3c] {\r\n  border: 2px dashed #2e7d32;\r\n  background: #f6fff6;\r\n  border-radius: 16px;\r\n  padding: 40px 20px;\r\n  text-align: center;\r\n  cursor: pointer;\r\n  transition: 0.25s ease;\n}\n.excel-drop[data-v-a5d63b3c]:hover {\r\n  background: #e8ffe8;\r\n  border-color: #1b5e20;\n}\n.excel-icon[data-v-a5d63b3c] { color: #2e7d32; margin-bottom: 10px;\n}\n.excel-text[data-v-a5d63b3c] { color: #333; font-size: 15px;\n}\n.file-selected[data-v-a5d63b3c] {\r\n  margin-top: 12px;\r\n  color: #333;\n}\n.hidden-input[data-v-a5d63b3c] { display: none;\n}\n.btn-upload[data-v-a5d63b3c] {\r\n  margin-top: 30px;\r\n  width: 100%;\r\n  padding: 14px 0;\r\n  border-radius: 12px;\r\n  background: #2e7d32;\r\n  color: #fff;\r\n  font-size: 17px;\r\n  font-weight: 600;\r\n  border: none;\r\n  transition: 0.25s ease;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 8px;\n}\n.btn-upload[data-v-a5d63b3c]:hover { background: #1b5e20;\n}\n.btn-upload[data-v-a5d63b3c]:disabled { background: #a5d6a7; cursor: not-allowed;\n}\n.upload-icon-btn[data-v-a5d63b3c] { margin-bottom: 2px;\n}\n.close-btn[data-v-a5d63b3c] {\r\n  position: absolute;\r\n  top: 12px;\r\n  right: 14px;\r\n  font-size: 26px;\r\n  cursor: pointer;\r\n  color: #777;\n}\n.close-btn[data-v-a5d63b3c]:hover { color: #222;\n}\n.loading-box[data-v-a5d63b3c] { text-align: center; margin-top: 20px;\n}\n.loader[data-v-a5d63b3c] {\r\n  width: 38px;\r\n  height: 38px;\r\n  border: 4px solid #2e7d32;\r\n  border-bottom-color: transparent;\r\n  border-radius: 50%;\r\n  animation: spin-a5d63b3c .8s linear infinite;\r\n  margin: 0 auto 10px;\n}\n@keyframes spin-a5d63b3c {\nto { transform: rotate(360deg);\n}\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

>>>>>>> develop
/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Compra/Partidas.vue?vue&type=style&index=0&id=262e6ca0&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Compra/Partidas.vue?vue&type=style&index=0&id=262e6ca0&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.VueTables__child-row-toggler--closed::before {\r\n    content: \"+\";\n}\n.VueTables__child-row-toggler--open::before {\r\n    content: \"-\";\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Proveedores/Proveedor.vue?vue&type=style&index=0&id=5f13fd5a&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Proveedores/Proveedor.vue?vue&type=style&index=0&id=5f13fd5a&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.form-check-label {\r\n    padding-left: 0.1rem;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

<<<<<<< HEAD
=======
/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Components/ModalComponent.vue?vue&type=style&index=0&id=a5d63b3c&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Components/ModalComponent.vue?vue&type=style&index=0&id=a5d63b3c&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalComponent_vue_vue_type_style_index_0_id_a5d63b3c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ModalComponent.vue?vue&type=style&index=0&id=a5d63b3c&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Components/ModalComponent.vue?vue&type=style&index=0&id=a5d63b3c&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalComponent_vue_vue_type_style_index_0_id_a5d63b3c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalComponent_vue_vue_type_style_index_0_id_a5d63b3c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

>>>>>>> develop
/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Compra/Partidas.vue?vue&type=style&index=0&id=262e6ca0&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Compra/Partidas.vue?vue&type=style&index=0&id=262e6ca0&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Partidas_vue_vue_type_style_index_0_id_262e6ca0_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Partidas.vue?vue&type=style&index=0&id=262e6ca0&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Compra/Partidas.vue?vue&type=style&index=0&id=262e6ca0&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Partidas_vue_vue_type_style_index_0_id_262e6ca0_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Partidas_vue_vue_type_style_index_0_id_262e6ca0_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Proveedores/Proveedor.vue?vue&type=style&index=0&id=5f13fd5a&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Proveedores/Proveedor.vue?vue&type=style&index=0&id=5f13fd5a&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Proveedor_vue_vue_type_style_index_0_id_5f13fd5a_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Proveedor.vue?vue&type=style&index=0&id=5f13fd5a&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Proveedores/Proveedor.vue?vue&type=style&index=0&id=5f13fd5a&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Proveedor_vue_vue_type_style_index_0_id_5f13fd5a_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Proveedor_vue_vue_type_style_index_0_id_5f13fd5a_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

<<<<<<< HEAD
=======
/***/ "./resources/assets/js/components/Components/ModalComponent.vue":
/*!**********************************************************************!*\
  !*** ./resources/assets/js/components/Components/ModalComponent.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ModalComponent_vue_vue_type_template_id_a5d63b3c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalComponent.vue?vue&type=template&id=a5d63b3c&scoped=true */ "./resources/assets/js/components/Components/ModalComponent.vue?vue&type=template&id=a5d63b3c&scoped=true");
/* harmony import */ var _ModalComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalComponent.vue?vue&type=script&lang=js */ "./resources/assets/js/components/Components/ModalComponent.vue?vue&type=script&lang=js");
/* harmony import */ var _ModalComponent_vue_vue_type_style_index_0_id_a5d63b3c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ModalComponent.vue?vue&type=style&index=0&id=a5d63b3c&scoped=true&lang=css */ "./resources/assets/js/components/Components/ModalComponent.vue?vue&type=style&index=0&id=a5d63b3c&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ModalComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ModalComponent_vue_vue_type_template_id_a5d63b3c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _ModalComponent_vue_vue_type_template_id_a5d63b3c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "a5d63b3c",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/Components/ModalComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Components/ModalComponent.vue?vue&type=script&lang=js":
/*!**********************************************************************************************!*\
  !*** ./resources/assets/js/components/Components/ModalComponent.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ModalComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Components/ModalComponent.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Components/ModalComponent.vue?vue&type=style&index=0&id=a5d63b3c&scoped=true&lang=css":
/*!******************************************************************************************************************************!*\
  !*** ./resources/assets/js/components/Components/ModalComponent.vue?vue&type=style&index=0&id=a5d63b3c&scoped=true&lang=css ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalComponent_vue_vue_type_style_index_0_id_a5d63b3c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ModalComponent.vue?vue&type=style&index=0&id=a5d63b3c&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Components/ModalComponent.vue?vue&type=style&index=0&id=a5d63b3c&scoped=true&lang=css");


/***/ }),

/***/ "./resources/assets/js/components/Components/ModalComponent.vue?vue&type=template&id=a5d63b3c&scoped=true":
/*!****************************************************************************************************************!*\
  !*** ./resources/assets/js/components/Components/ModalComponent.vue?vue&type=template&id=a5d63b3c&scoped=true ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalComponent_vue_vue_type_template_id_a5d63b3c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalComponent_vue_vue_type_template_id_a5d63b3c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalComponent_vue_vue_type_template_id_a5d63b3c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ModalComponent.vue?vue&type=template&id=a5d63b3c&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Components/ModalComponent.vue?vue&type=template&id=a5d63b3c&scoped=true");


/***/ }),

>>>>>>> develop
/***/ "./resources/assets/js/components/Compras/Catalogos/EstadoCompras.vue":
/*!****************************************************************************!*\
  !*** ./resources/assets/js/components/Compras/Catalogos/EstadoCompras.vue ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EstadoCompras_vue_vue_type_template_id_3a180cc8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EstadoCompras.vue?vue&type=template&id=3a180cc8 */ "./resources/assets/js/components/Compras/Catalogos/EstadoCompras.vue?vue&type=template&id=3a180cc8");
/* harmony import */ var _EstadoCompras_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EstadoCompras.vue?vue&type=script&lang=js */ "./resources/assets/js/components/Compras/Catalogos/EstadoCompras.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EstadoCompras_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _EstadoCompras_vue_vue_type_template_id_3a180cc8__WEBPACK_IMPORTED_MODULE_0__.render,
  _EstadoCompras_vue_vue_type_template_id_3a180cc8__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/Compras/Catalogos/EstadoCompras.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Compras/Catalogos/EstadoCompras.vue?vue&type=script&lang=js":
/*!****************************************************************************************************!*\
  !*** ./resources/assets/js/components/Compras/Catalogos/EstadoCompras.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EstadoCompras_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EstadoCompras.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Catalogos/EstadoCompras.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EstadoCompras_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Compras/Catalogos/EstadoCompras.vue?vue&type=template&id=3a180cc8":
/*!**********************************************************************************************************!*\
  !*** ./resources/assets/js/components/Compras/Catalogos/EstadoCompras.vue?vue&type=template&id=3a180cc8 ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EstadoCompras_vue_vue_type_template_id_3a180cc8__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EstadoCompras_vue_vue_type_template_id_3a180cc8__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EstadoCompras_vue_vue_type_template_id_3a180cc8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EstadoCompras.vue?vue&type=template&id=3a180cc8 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Catalogos/EstadoCompras.vue?vue&type=template&id=3a180cc8");


/***/ }),

/***/ "./resources/assets/js/components/Compras/Catalogos/MttoVehicular.vue":
/*!****************************************************************************!*\
  !*** ./resources/assets/js/components/Compras/Catalogos/MttoVehicular.vue ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MttoVehicular_vue_vue_type_template_id_16763be6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MttoVehicular.vue?vue&type=template&id=16763be6 */ "./resources/assets/js/components/Compras/Catalogos/MttoVehicular.vue?vue&type=template&id=16763be6");
/* harmony import */ var _MttoVehicular_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MttoVehicular.vue?vue&type=script&lang=js */ "./resources/assets/js/components/Compras/Catalogos/MttoVehicular.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MttoVehicular_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _MttoVehicular_vue_vue_type_template_id_16763be6__WEBPACK_IMPORTED_MODULE_0__.render,
  _MttoVehicular_vue_vue_type_template_id_16763be6__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/Compras/Catalogos/MttoVehicular.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Compras/Catalogos/MttoVehicular.vue?vue&type=script&lang=js":
/*!****************************************************************************************************!*\
  !*** ./resources/assets/js/components/Compras/Catalogos/MttoVehicular.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MttoVehicular_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MttoVehicular.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Catalogos/MttoVehicular.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MttoVehicular_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Compras/Catalogos/MttoVehicular.vue?vue&type=template&id=16763be6":
/*!**********************************************************************************************************!*\
  !*** ./resources/assets/js/components/Compras/Catalogos/MttoVehicular.vue?vue&type=template&id=16763be6 ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MttoVehicular_vue_vue_type_template_id_16763be6__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MttoVehicular_vue_vue_type_template_id_16763be6__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MttoVehicular_vue_vue_type_template_id_16763be6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MttoVehicular.vue?vue&type=template&id=16763be6 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Catalogos/MttoVehicular.vue?vue&type=template&id=16763be6");


/***/ }),

/***/ "./resources/assets/js/components/Compras/Catalogos/Servicios.vue":
/*!************************************************************************!*\
  !*** ./resources/assets/js/components/Compras/Catalogos/Servicios.vue ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Servicios_vue_vue_type_template_id_245d150a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Servicios.vue?vue&type=template&id=245d150a */ "./resources/assets/js/components/Compras/Catalogos/Servicios.vue?vue&type=template&id=245d150a");
/* harmony import */ var _Servicios_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Servicios.vue?vue&type=script&lang=js */ "./resources/assets/js/components/Compras/Catalogos/Servicios.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Servicios_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Servicios_vue_vue_type_template_id_245d150a__WEBPACK_IMPORTED_MODULE_0__.render,
  _Servicios_vue_vue_type_template_id_245d150a__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/Compras/Catalogos/Servicios.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Compras/Catalogos/Servicios.vue?vue&type=script&lang=js":
/*!************************************************************************************************!*\
  !*** ./resources/assets/js/components/Compras/Catalogos/Servicios.vue?vue&type=script&lang=js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Servicios_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Servicios.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Catalogos/Servicios.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Servicios_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Compras/Catalogos/Servicios.vue?vue&type=template&id=245d150a":
/*!******************************************************************************************************!*\
  !*** ./resources/assets/js/components/Compras/Catalogos/Servicios.vue?vue&type=template&id=245d150a ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Servicios_vue_vue_type_template_id_245d150a__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Servicios_vue_vue_type_template_id_245d150a__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Servicios_vue_vue_type_template_id_245d150a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Servicios.vue?vue&type=template&id=245d150a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Catalogos/Servicios.vue?vue&type=template&id=245d150a");


/***/ }),

/***/ "./resources/assets/js/components/Compras/Compra/CardPrincipal.vue":
/*!*************************************************************************!*\
  !*** ./resources/assets/js/components/Compras/Compra/CardPrincipal.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CardPrincipal_vue_vue_type_template_id_3d18737e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardPrincipal.vue?vue&type=template&id=3d18737e */ "./resources/assets/js/components/Compras/Compra/CardPrincipal.vue?vue&type=template&id=3d18737e");
/* harmony import */ var _CardPrincipal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardPrincipal.vue?vue&type=script&lang=js */ "./resources/assets/js/components/Compras/Compra/CardPrincipal.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CardPrincipal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CardPrincipal_vue_vue_type_template_id_3d18737e__WEBPACK_IMPORTED_MODULE_0__.render,
  _CardPrincipal_vue_vue_type_template_id_3d18737e__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/Compras/Compra/CardPrincipal.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Compras/Compra/CardPrincipal.vue?vue&type=script&lang=js":
/*!*************************************************************************************************!*\
  !*** ./resources/assets/js/components/Compras/Compra/CardPrincipal.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardPrincipal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CardPrincipal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Compra/CardPrincipal.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardPrincipal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Compras/Compra/CardPrincipal.vue?vue&type=template&id=3d18737e":
/*!*******************************************************************************************************!*\
  !*** ./resources/assets/js/components/Compras/Compra/CardPrincipal.vue?vue&type=template&id=3d18737e ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CardPrincipal_vue_vue_type_template_id_3d18737e__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CardPrincipal_vue_vue_type_template_id_3d18737e__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CardPrincipal_vue_vue_type_template_id_3d18737e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CardPrincipal.vue?vue&type=template&id=3d18737e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Compra/CardPrincipal.vue?vue&type=template&id=3d18737e");


/***/ }),

/***/ "./resources/assets/js/components/Compras/Compra/Compras.vue":
/*!*******************************************************************!*\
  !*** ./resources/assets/js/components/Compras/Compra/Compras.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Compras_vue_vue_type_template_id_ba2efc96__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Compras.vue?vue&type=template&id=ba2efc96 */ "./resources/assets/js/components/Compras/Compra/Compras.vue?vue&type=template&id=ba2efc96");
/* harmony import */ var _Compras_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Compras.vue?vue&type=script&lang=js */ "./resources/assets/js/components/Compras/Compra/Compras.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Compras_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Compras_vue_vue_type_template_id_ba2efc96__WEBPACK_IMPORTED_MODULE_0__.render,
  _Compras_vue_vue_type_template_id_ba2efc96__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/Compras/Compra/Compras.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Compras/Compra/Compras.vue?vue&type=script&lang=js":
/*!*******************************************************************************************!*\
  !*** ./resources/assets/js/components/Compras/Compra/Compras.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Compras_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Compras.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Compra/Compras.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Compras_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Compras/Compra/Compras.vue?vue&type=template&id=ba2efc96":
/*!*************************************************************************************************!*\
  !*** ./resources/assets/js/components/Compras/Compra/Compras.vue?vue&type=template&id=ba2efc96 ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Compras_vue_vue_type_template_id_ba2efc96__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Compras_vue_vue_type_template_id_ba2efc96__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Compras_vue_vue_type_template_id_ba2efc96__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Compras.vue?vue&type=template&id=ba2efc96 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Compra/Compras.vue?vue&type=template&id=ba2efc96");


/***/ }),

/***/ "./resources/assets/js/components/Compras/Compra/MantenimientoVehiculosModal.vue":
/*!***************************************************************************************!*\
  !*** ./resources/assets/js/components/Compras/Compra/MantenimientoVehiculosModal.vue ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MantenimientoVehiculosModal_vue_vue_type_template_id_77db3c85__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MantenimientoVehiculosModal.vue?vue&type=template&id=77db3c85 */ "./resources/assets/js/components/Compras/Compra/MantenimientoVehiculosModal.vue?vue&type=template&id=77db3c85");
/* harmony import */ var _MantenimientoVehiculosModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MantenimientoVehiculosModal.vue?vue&type=script&lang=js */ "./resources/assets/js/components/Compras/Compra/MantenimientoVehiculosModal.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MantenimientoVehiculosModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _MantenimientoVehiculosModal_vue_vue_type_template_id_77db3c85__WEBPACK_IMPORTED_MODULE_0__.render,
  _MantenimientoVehiculosModal_vue_vue_type_template_id_77db3c85__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/Compras/Compra/MantenimientoVehiculosModal.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Compras/Compra/MantenimientoVehiculosModal.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************!*\
  !*** ./resources/assets/js/components/Compras/Compra/MantenimientoVehiculosModal.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MantenimientoVehiculosModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MantenimientoVehiculosModal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Compra/MantenimientoVehiculosModal.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MantenimientoVehiculosModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Compras/Compra/MantenimientoVehiculosModal.vue?vue&type=template&id=77db3c85":
/*!*********************************************************************************************************************!*\
  !*** ./resources/assets/js/components/Compras/Compra/MantenimientoVehiculosModal.vue?vue&type=template&id=77db3c85 ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MantenimientoVehiculosModal_vue_vue_type_template_id_77db3c85__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MantenimientoVehiculosModal_vue_vue_type_template_id_77db3c85__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MantenimientoVehiculosModal_vue_vue_type_template_id_77db3c85__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MantenimientoVehiculosModal.vue?vue&type=template&id=77db3c85 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Compra/MantenimientoVehiculosModal.vue?vue&type=template&id=77db3c85");


/***/ }),

/***/ "./resources/assets/js/components/Compras/Compra/ModalImpuestos.vue":
/*!**************************************************************************!*\
  !*** ./resources/assets/js/components/Compras/Compra/ModalImpuestos.vue ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ModalImpuestos_vue_vue_type_template_id_264e3c38__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalImpuestos.vue?vue&type=template&id=264e3c38 */ "./resources/assets/js/components/Compras/Compra/ModalImpuestos.vue?vue&type=template&id=264e3c38");
/* harmony import */ var _ModalImpuestos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalImpuestos.vue?vue&type=script&lang=js */ "./resources/assets/js/components/Compras/Compra/ModalImpuestos.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ModalImpuestos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ModalImpuestos_vue_vue_type_template_id_264e3c38__WEBPACK_IMPORTED_MODULE_0__.render,
  _ModalImpuestos_vue_vue_type_template_id_264e3c38__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/Compras/Compra/ModalImpuestos.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Compras/Compra/ModalImpuestos.vue?vue&type=script&lang=js":
/*!**************************************************************************************************!*\
  !*** ./resources/assets/js/components/Compras/Compra/ModalImpuestos.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalImpuestos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ModalImpuestos.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Compra/ModalImpuestos.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalImpuestos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Compras/Compra/ModalImpuestos.vue?vue&type=template&id=264e3c38":
/*!********************************************************************************************************!*\
  !*** ./resources/assets/js/components/Compras/Compra/ModalImpuestos.vue?vue&type=template&id=264e3c38 ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalImpuestos_vue_vue_type_template_id_264e3c38__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalImpuestos_vue_vue_type_template_id_264e3c38__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalImpuestos_vue_vue_type_template_id_264e3c38__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ModalImpuestos.vue?vue&type=template&id=264e3c38 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Compra/ModalImpuestos.vue?vue&type=template&id=264e3c38");


/***/ }),

/***/ "./resources/assets/js/components/Compras/Compra/Partidas.vue":
/*!********************************************************************!*\
  !*** ./resources/assets/js/components/Compras/Compra/Partidas.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Partidas_vue_vue_type_template_id_262e6ca0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Partidas.vue?vue&type=template&id=262e6ca0 */ "./resources/assets/js/components/Compras/Compra/Partidas.vue?vue&type=template&id=262e6ca0");
/* harmony import */ var _Partidas_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Partidas.vue?vue&type=script&lang=js */ "./resources/assets/js/components/Compras/Compra/Partidas.vue?vue&type=script&lang=js");
/* harmony import */ var _Partidas_vue_vue_type_style_index_0_id_262e6ca0_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Partidas.vue?vue&type=style&index=0&id=262e6ca0&lang=css */ "./resources/assets/js/components/Compras/Compra/Partidas.vue?vue&type=style&index=0&id=262e6ca0&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Partidas_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Partidas_vue_vue_type_template_id_262e6ca0__WEBPACK_IMPORTED_MODULE_0__.render,
  _Partidas_vue_vue_type_template_id_262e6ca0__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/Compras/Compra/Partidas.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Compras/Compra/Partidas.vue?vue&type=script&lang=js":
/*!********************************************************************************************!*\
  !*** ./resources/assets/js/components/Compras/Compra/Partidas.vue?vue&type=script&lang=js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Partidas_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Partidas.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Compra/Partidas.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Partidas_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Compras/Compra/Partidas.vue?vue&type=style&index=0&id=262e6ca0&lang=css":
/*!****************************************************************************************************************!*\
  !*** ./resources/assets/js/components/Compras/Compra/Partidas.vue?vue&type=style&index=0&id=262e6ca0&lang=css ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Partidas_vue_vue_type_style_index_0_id_262e6ca0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Partidas.vue?vue&type=style&index=0&id=262e6ca0&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Compra/Partidas.vue?vue&type=style&index=0&id=262e6ca0&lang=css");


/***/ }),

/***/ "./resources/assets/js/components/Compras/Compra/Partidas.vue?vue&type=template&id=262e6ca0":
/*!**************************************************************************************************!*\
  !*** ./resources/assets/js/components/Compras/Compra/Partidas.vue?vue&type=template&id=262e6ca0 ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Partidas_vue_vue_type_template_id_262e6ca0__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Partidas_vue_vue_type_template_id_262e6ca0__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Partidas_vue_vue_type_template_id_262e6ca0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Partidas.vue?vue&type=template&id=262e6ca0 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Compra/Partidas.vue?vue&type=template&id=262e6ca0");


/***/ }),

/***/ "./resources/assets/js/components/Compras/Compra/PartidasDos.vue":
/*!***********************************************************************!*\
  !*** ./resources/assets/js/components/Compras/Compra/PartidasDos.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PartidasDos_vue_vue_type_template_id_352b44b0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PartidasDos.vue?vue&type=template&id=352b44b0 */ "./resources/assets/js/components/Compras/Compra/PartidasDos.vue?vue&type=template&id=352b44b0");
/* harmony import */ var _PartidasDos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PartidasDos.vue?vue&type=script&lang=js */ "./resources/assets/js/components/Compras/Compra/PartidasDos.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PartidasDos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _PartidasDos_vue_vue_type_template_id_352b44b0__WEBPACK_IMPORTED_MODULE_0__.render,
  _PartidasDos_vue_vue_type_template_id_352b44b0__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/Compras/Compra/PartidasDos.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Compras/Compra/PartidasDos.vue?vue&type=script&lang=js":
/*!***********************************************************************************************!*\
  !*** ./resources/assets/js/components/Compras/Compra/PartidasDos.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PartidasDos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PartidasDos.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Compra/PartidasDos.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PartidasDos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Compras/Compra/PartidasDos.vue?vue&type=template&id=352b44b0":
/*!*****************************************************************************************************!*\
  !*** ./resources/assets/js/components/Compras/Compra/PartidasDos.vue?vue&type=template&id=352b44b0 ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PartidasDos_vue_vue_type_template_id_352b44b0__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PartidasDos_vue_vue_type_template_id_352b44b0__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PartidasDos_vue_vue_type_template_id_352b44b0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PartidasDos.vue?vue&type=template&id=352b44b0 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Compra/PartidasDos.vue?vue&type=template&id=352b44b0");


/***/ }),

/***/ "./resources/assets/js/components/Compras/Compra/ProyectosCompras.vue":
/*!****************************************************************************!*\
  !*** ./resources/assets/js/components/Compras/Compra/ProyectosCompras.vue ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProyectosCompras_vue_vue_type_template_id_450763f7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProyectosCompras.vue?vue&type=template&id=450763f7 */ "./resources/assets/js/components/Compras/Compra/ProyectosCompras.vue?vue&type=template&id=450763f7");
/* harmony import */ var _ProyectosCompras_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProyectosCompras.vue?vue&type=script&lang=js */ "./resources/assets/js/components/Compras/Compra/ProyectosCompras.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProyectosCompras_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProyectosCompras_vue_vue_type_template_id_450763f7__WEBPACK_IMPORTED_MODULE_0__.render,
  _ProyectosCompras_vue_vue_type_template_id_450763f7__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/Compras/Compra/ProyectosCompras.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Compras/Compra/ProyectosCompras.vue?vue&type=script&lang=js":
/*!****************************************************************************************************!*\
  !*** ./resources/assets/js/components/Compras/Compra/ProyectosCompras.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProyectosCompras_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProyectosCompras.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Compra/ProyectosCompras.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProyectosCompras_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Compras/Compra/ProyectosCompras.vue?vue&type=template&id=450763f7":
/*!**********************************************************************************************************!*\
  !*** ./resources/assets/js/components/Compras/Compra/ProyectosCompras.vue?vue&type=template&id=450763f7 ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProyectosCompras_vue_vue_type_template_id_450763f7__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProyectosCompras_vue_vue_type_template_id_450763f7__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProyectosCompras_vue_vue_type_template_id_450763f7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProyectosCompras.vue?vue&type=template&id=450763f7 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Compra/ProyectosCompras.vue?vue&type=template&id=450763f7");


/***/ }),

/***/ "./resources/assets/js/components/Compras/Dashboard/Dashboard.vue":
/*!************************************************************************!*\
  !*** ./resources/assets/js/components/Compras/Dashboard/Dashboard.vue ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Dashboard_vue_vue_type_template_id_79cedc58__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=79cedc58 */ "./resources/assets/js/components/Compras/Dashboard/Dashboard.vue?vue&type=template&id=79cedc58");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js */ "./resources/assets/js/components/Compras/Dashboard/Dashboard.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_79cedc58__WEBPACK_IMPORTED_MODULE_0__.render,
  _Dashboard_vue_vue_type_template_id_79cedc58__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/Compras/Dashboard/Dashboard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Compras/Dashboard/Dashboard.vue?vue&type=script&lang=js":
/*!************************************************************************************************!*\
  !*** ./resources/assets/js/components/Compras/Dashboard/Dashboard.vue?vue&type=script&lang=js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Dashboard/Dashboard.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Compras/Dashboard/Dashboard.vue?vue&type=template&id=79cedc58":
/*!******************************************************************************************************!*\
  !*** ./resources/assets/js/components/Compras/Dashboard/Dashboard.vue?vue&type=template&id=79cedc58 ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_79cedc58__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_79cedc58__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_79cedc58__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=template&id=79cedc58 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Dashboard/Dashboard.vue?vue&type=template&id=79cedc58");


/***/ }),

/***/ "./resources/assets/js/components/Compras/Dashboard/Requisiciones.vue":
/*!****************************************************************************!*\
  !*** ./resources/assets/js/components/Compras/Dashboard/Requisiciones.vue ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Requisiciones_vue_vue_type_template_id_3709d3ff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Requisiciones.vue?vue&type=template&id=3709d3ff */ "./resources/assets/js/components/Compras/Dashboard/Requisiciones.vue?vue&type=template&id=3709d3ff");
/* harmony import */ var _Requisiciones_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Requisiciones.vue?vue&type=script&lang=js */ "./resources/assets/js/components/Compras/Dashboard/Requisiciones.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Requisiciones_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Requisiciones_vue_vue_type_template_id_3709d3ff__WEBPACK_IMPORTED_MODULE_0__.render,
  _Requisiciones_vue_vue_type_template_id_3709d3ff__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/Compras/Dashboard/Requisiciones.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Compras/Dashboard/Requisiciones.vue?vue&type=script&lang=js":
/*!****************************************************************************************************!*\
  !*** ./resources/assets/js/components/Compras/Dashboard/Requisiciones.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Requisiciones_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Requisiciones.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Dashboard/Requisiciones.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Requisiciones_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Compras/Dashboard/Requisiciones.vue?vue&type=template&id=3709d3ff":
/*!**********************************************************************************************************!*\
  !*** ./resources/assets/js/components/Compras/Dashboard/Requisiciones.vue?vue&type=template&id=3709d3ff ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Requisiciones_vue_vue_type_template_id_3709d3ff__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Requisiciones_vue_vue_type_template_id_3709d3ff__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Requisiciones_vue_vue_type_template_id_3709d3ff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Requisiciones.vue?vue&type=template&id=3709d3ff */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Dashboard/Requisiciones.vue?vue&type=template&id=3709d3ff");


/***/ }),

/***/ "./resources/assets/js/components/Compras/Proveedores/Evaluacion.vue":
/*!***************************************************************************!*\
  !*** ./resources/assets/js/components/Compras/Proveedores/Evaluacion.vue ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Evaluacion_vue_vue_type_template_id_ce6102be__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Evaluacion.vue?vue&type=template&id=ce6102be */ "./resources/assets/js/components/Compras/Proveedores/Evaluacion.vue?vue&type=template&id=ce6102be");
/* harmony import */ var _Evaluacion_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Evaluacion.vue?vue&type=script&lang=js */ "./resources/assets/js/components/Compras/Proveedores/Evaluacion.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Evaluacion_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Evaluacion_vue_vue_type_template_id_ce6102be__WEBPACK_IMPORTED_MODULE_0__.render,
  _Evaluacion_vue_vue_type_template_id_ce6102be__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/Compras/Proveedores/Evaluacion.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Compras/Proveedores/Evaluacion.vue?vue&type=script&lang=js":
/*!***************************************************************************************************!*\
  !*** ./resources/assets/js/components/Compras/Proveedores/Evaluacion.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Evaluacion_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Evaluacion.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Proveedores/Evaluacion.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Evaluacion_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Compras/Proveedores/Evaluacion.vue?vue&type=template&id=ce6102be":
/*!*********************************************************************************************************!*\
  !*** ./resources/assets/js/components/Compras/Proveedores/Evaluacion.vue?vue&type=template&id=ce6102be ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Evaluacion_vue_vue_type_template_id_ce6102be__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Evaluacion_vue_vue_type_template_id_ce6102be__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Evaluacion_vue_vue_type_template_id_ce6102be__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Evaluacion.vue?vue&type=template&id=ce6102be */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Proveedores/Evaluacion.vue?vue&type=template&id=ce6102be");


/***/ }),

/***/ "./resources/assets/js/components/Compras/Proveedores/Proveedor.vue":
/*!**************************************************************************!*\
  !*** ./resources/assets/js/components/Compras/Proveedores/Proveedor.vue ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Proveedor_vue_vue_type_template_id_5f13fd5a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Proveedor.vue?vue&type=template&id=5f13fd5a */ "./resources/assets/js/components/Compras/Proveedores/Proveedor.vue?vue&type=template&id=5f13fd5a");
/* harmony import */ var _Proveedor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Proveedor.vue?vue&type=script&lang=js */ "./resources/assets/js/components/Compras/Proveedores/Proveedor.vue?vue&type=script&lang=js");
/* harmony import */ var _Proveedor_vue_vue_type_style_index_0_id_5f13fd5a_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Proveedor.vue?vue&type=style&index=0&id=5f13fd5a&lang=css */ "./resources/assets/js/components/Compras/Proveedores/Proveedor.vue?vue&type=style&index=0&id=5f13fd5a&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Proveedor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Proveedor_vue_vue_type_template_id_5f13fd5a__WEBPACK_IMPORTED_MODULE_0__.render,
  _Proveedor_vue_vue_type_template_id_5f13fd5a__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/Compras/Proveedores/Proveedor.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Compras/Proveedores/Proveedor.vue?vue&type=script&lang=js":
/*!**************************************************************************************************!*\
  !*** ./resources/assets/js/components/Compras/Proveedores/Proveedor.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Proveedor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Proveedor.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Proveedores/Proveedor.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Proveedor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Compras/Proveedores/Proveedor.vue?vue&type=style&index=0&id=5f13fd5a&lang=css":
/*!**********************************************************************************************************************!*\
  !*** ./resources/assets/js/components/Compras/Proveedores/Proveedor.vue?vue&type=style&index=0&id=5f13fd5a&lang=css ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Proveedor_vue_vue_type_style_index_0_id_5f13fd5a_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Proveedor.vue?vue&type=style&index=0&id=5f13fd5a&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Proveedores/Proveedor.vue?vue&type=style&index=0&id=5f13fd5a&lang=css");


/***/ }),

/***/ "./resources/assets/js/components/Compras/Proveedores/Proveedor.vue?vue&type=template&id=5f13fd5a":
/*!********************************************************************************************************!*\
  !*** ./resources/assets/js/components/Compras/Proveedores/Proveedor.vue?vue&type=template&id=5f13fd5a ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Proveedor_vue_vue_type_template_id_5f13fd5a__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Proveedor_vue_vue_type_template_id_5f13fd5a__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Proveedor_vue_vue_type_template_id_5f13fd5a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Proveedor.vue?vue&type=template&id=5f13fd5a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Proveedores/Proveedor.vue?vue&type=template&id=5f13fd5a");


/***/ }),

/***/ "./resources/assets/js/components/Compras/Reportes/GeneralCompras.vue":
/*!****************************************************************************!*\
  !*** ./resources/assets/js/components/Compras/Reportes/GeneralCompras.vue ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GeneralCompras_vue_vue_type_template_id_33985539__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GeneralCompras.vue?vue&type=template&id=33985539 */ "./resources/assets/js/components/Compras/Reportes/GeneralCompras.vue?vue&type=template&id=33985539");
/* harmony import */ var _GeneralCompras_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GeneralCompras.vue?vue&type=script&lang=js */ "./resources/assets/js/components/Compras/Reportes/GeneralCompras.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GeneralCompras_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _GeneralCompras_vue_vue_type_template_id_33985539__WEBPACK_IMPORTED_MODULE_0__.render,
  _GeneralCompras_vue_vue_type_template_id_33985539__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/Compras/Reportes/GeneralCompras.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Compras/Reportes/GeneralCompras.vue?vue&type=script&lang=js":
/*!****************************************************************************************************!*\
  !*** ./resources/assets/js/components/Compras/Reportes/GeneralCompras.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneralCompras_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GeneralCompras.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Reportes/GeneralCompras.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneralCompras_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Compras/Reportes/GeneralCompras.vue?vue&type=template&id=33985539":
/*!**********************************************************************************************************!*\
  !*** ./resources/assets/js/components/Compras/Reportes/GeneralCompras.vue?vue&type=template&id=33985539 ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneralCompras_vue_vue_type_template_id_33985539__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneralCompras_vue_vue_type_template_id_33985539__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneralCompras_vue_vue_type_template_id_33985539__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GeneralCompras.vue?vue&type=template&id=33985539 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Compras/Reportes/GeneralCompras.vue?vue&type=template&id=33985539");


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

/***/ })

}]);
=======
/*! For license information please see compras.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[392],{1473:(a,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>s});var o=e(60173),r=e(14941).call(void 0);const i={data:function(){return{tipo:0,estadomodal:0,boton_centro_costo:0,boton_actualizar_partida:0,boton_apartados:0,desabilitar:!1,verequivalente:!1,guardarequivalente:!1,desabilitar_precios:!1,compra:{condicion:""},partidascompras:{requisicione_id:0,orden_compra_id:0,articulo_id:0,servicio_id:0,articulo_uno_id:0,servicio_uno_id:0,nombrearti:"",nombrearti_uno:"",nombreserv_uno:"",cantidad:0,precio_unitario:"",proyecto_id:0,adicionales:0,pda:"",cambio_equivalente:0,comentario:"",cantidad_real:0,centro_costo_id:"",id:""},clases:{nombrearti:"",precio_unitario:"",cantidad:""},tituloModala:"",empleado:null,tipoAccionpr:0,detalle:0,modala:0,modal_agregar:0,mostrar:0,modalarticulos:0,isLoadingDetalle:!1,tableDataPartidasCompras:[],dataTableArticulo:[],columnsart:["codigo","nombre","descripcion","marca","calidad"],columnsa:["rf","descripciona","proyecton","rfs","cantidad_compra","unidad"],columnsserv:["nombre_servicio","proveedor_marca","unidad_medida"],columnscompras:["id","rf","rfs","ad","cantidad","precio_unitario"],optionsart:{headings:{nombre:"Nombre",descripcion:"Descripción",marca:"Marca",codigo:"Codigo",id:"Acción"},perPage:10,perPageValues:[],skin:r.skin,sortIcon:r.sortIcon,sortable:["codigo","nombre","descripcion","marca"],filterable:["codigo","nombre","descripcion","marca"],filterByColumn:!0,texts:r.texts},optionsserv:{headings:{nombre_servicio:"Nombre del Servicio",proveedor_marca:"Proveedor/Marca",unidad_medida:"Unidad de Medida",id:"Acciones"},perPage:10,perPageValues:[],skin:r.skin,sortIcon:r.sortIcon,filterByColumn:!0,texts:r.texts},optionsa:{headings:{rf:"Folio de requisición",descripciona:"Descripcion Artículo",proyecton:"Proyecto",rfs:"Fecha solicitud de la requisición",cantidad_compra:"Cantidad"},perPage:10,perPageValues:[],skin:r.skin,sortIcon:r.sortIcon,filterByColumn:!0,texts:r.texts},optionscompras:{headings:{id:"Acción",rf:"Folio Requisición",rfs:"Fecha Solicitud Requisición",proyecton:"Proyecto",ad:"Artículo",cantidad:"Cantidad"},perPage:10,perPageValues:[],skin:r.skin,sortIcon:r.sortIcon,sortable:["rf","rfs","proyecton","ad","cantidad","precio_unitario"],filterable:["rf","rfs","proyecton","ad","cantidad","precio_unitario"],filterByColumn:!0,listColumns:{condicion:[{id:1,text:"Activo"},{id:0,text:"Dado de Baja"}]},texts:r.texts},centro_costo:[]}},components:{},methods:{cargarpartidas:function(a){this.mostrar=1,this.boton_centro_costo=0,this.isLoadingDetalle=!0,this.empleado=a,2==a.condicion?this.desabilitar=!0:this.desabilitar=!1,this.compra.condicion=a.condicion,this.partidascompras.orden_compra_id=a.id;var t=this;axios.get("/compras/"+a.id+"/compras").then(function(a){t.tableDataPartidasCompras=a.data,t.isLoadingDetalle=!1}).catch(function(a){console.log(a)})},abrirModalA:function(a,t,e){if("articulo"===a)switch(t){case"registrar":this.modala=1,this.tituloModala="Registrar artículo a la compra ",o.A.resetObject(this.partidascompras),o.A.resetObject(this.modala),this.tipoAccionpr=1,this.partidascompras.orden_compra_id=e,this.getArticulosRequisicion(),this.verequivalente=!1,this.guardarequivalente=!1,this.tipo=0;break;case"agregar":this.tipo=1,this.modal_agregar=1,o.A.resetObject(this.partidascompras),o.A.resetObject(this.modala),this.tipoAccionpr=1,this.partidascompras.orden_compra_id=e,this.getArticulosRequisicion(),this.verequivalente=!1,this.guardarequivalente=!1,this.$refs.myTableArticulo.refresh()}},getArticulosRequisicion:function(){var a=this;axios.get("/partidare/"+(null==a.empleado.proyecto_id?"":a.empleado.proyecto_id)).then(function(t){a.dataTableArticulo=t.data}).catch(function(a){console.log(a)})},seleccionarArticulo2:function(a){this.partidascompras.comentario=a.row.comentario,this.partidascompras.pda=a.row.pda,this.partidascompras.requisicione_id=a.row.rid,this.partidascompras.articulo_id=a.row.articulo_id,this.partidascompras.servicio_id=a.row.servicio_id,this.partidascompras.nombrearti=a.row.descripciona,this.partidascompras.cantidad=a.row.cantidad_compra,this.partidascompras.cantidad_real=a.row.cantidad_compra,this.partidascompras.proyecto_id=a.row.proyectoi,a.row.equivalente,this.verequivalente=!0,this.modala=0,this.isLoadingg=!1,this.cerrarModal()},seleccionarArticulosDos:function(a){this.partidascompras.articulo_id=a.row.id,this.partidascompras.nombrearti=a.row.descripcion,this.partidascompras.articulo_id==this.partidascompras.articulo_uno_id?toastr.warning("Atención","Seleccione un artículo equivalente diferente al original"):(this.modalarticulos=0,this.verequivalente=!1,this.guardarequivalente=!0,this.partidascompras.cambio_equivalente=1)},seleccionarServicio:function(a){this.partidascompras.servicio_id=a.row.id,this.partidascompras.nombrearti=a.row.nombre_servicio+" "+a.row.proveedor_marca,this.partidascompras.servicio_id==this.partidascompras.servicio_uno_id?toastr.warning("Atención","Seleccione un servicio equivalente diferente al original"):(this.modalarticulos=0,this.verequivalente=!1,this.guardarequivalente=!0,this.partidascompras.cambio_equivalente=1)},cerrarModal:function(){this.modala=0},cerrarModalAgregar:function(){this.modal_agregar=0},maestro:function(){this.mostrar=0,this.$emit("partidas:click",this.empleado.proyecto_id),this.cancelar()},validardetalle:function(){""===this.partidascompras.nombrearti?(this.mensaje(),this.validado=0,this.clases.nombrearti=" is-invalid"):""===this.partidascompras.precio_unitario?(this.mensaje(),this.validado=0,this.clases.nombrearti="",this.clases.precio_unitario=" is-invalid"):""===this.partidascompras.cantidad?(this.mensaje(),this.validado=0,this.clases.precio_unitario="",this.clases.cantidad=" is-invalid"):(this.validado=1,this.clases.cantidad="")},mensaje:function(){swal({title:"Error complete todos los campos",type:"warning",confirmButtonColor:"#3085d6",confirmButtonText:"Aceptar!",confirmButtonClass:"btn btn-succeguardarEquivalentess",buttonsStyling:!1,reverseButtons:!0})},guardarPR:function(a,t){if(1==this.validado){this.isLoadingDetalle=!0,this.detalle=1;var e=this;axios({method:a?"POST":"PUT",url:a?"/requisicioncompra":"/requisicioncompra/"+this.partidascompras.requisicione_id,data:{requisicione_id:this.partidascompras.requisicione_id,orden_compra_id:this.partidascompras.orden_compra_id,articulo_id:this.partidascompras.articulo_id,servicio_id:this.partidascompras.servicio_id,cantidad:this.partidascompras.cantidad,precio_unitario:this.partidascompras.precio_unitario,proyecto_id:this.partidascompras.proyecto_id,adicionales:this.partidascompras.adicionales,articulo_uno_id:this.partidascompras.articulo_uno_id,servicio_uno_id:this.partidascompras.servicio_uno_id,nombrearti_uno:this.partidascompras.nombrearti_uno,folio:this.empleado.folio,pda:this.partidascompras.pda,cambio_equivalente:this.partidascompras.cambio_equivalente,comentario:this.partidascompras.comentario,centro_costo_id:this.partidascompras.centro_costo_id,tipo:this.tipo}}).then(function(a){e.isLoadingDetalle=!1,a.data.status?"error"===a.data.status?swal({type:"error",html:"Ha ocurrido un error notifiqué al administrador y recarge la página"}):(e.cargarpartidas(e.empleado),e.cerrarModal(),e.cancelar(),e.getArticulosRequisicion(),e.tipo=0,toastr.success("Correcto","Partida agregada a la compra correctamente")):(e.isLoadingDetalle=!1,e.cerrarModal(),e.cancelar(),swal("Error!","No se pueden agregar articulos de diferentes proyectos!","warning"))}).catch(function(a){e.cancelar(),e.isLoadingDetalle=!1})}},cancelar:function(){this.partidascompras.articulo_id=0,this.partidascompras.servicio_id=0,this.partidascompras.peso=0,this.partidascompras.precio_unitario="",this.partidascompras.cantidad=0,this.partidascompras.fecha_requerido="",this.partidascompras.nombrearti="",this.tipoAccionpr=0,this.partidascompras.requisicione_id=0,this.partidascompras.adicionales=0,this.verequivalente=!1,this.guardarequivalente=!1,this.desabilitar_precios=!1,this.partidascompras.cambio_equivalente=0,this.partidascompras.comentario="",this.partidascompras.centro_costo_id="",this.boton_centro_costo=0,this.boton_apartados=0,this.boton_actualizar_partida=0},eliminarpartidacompra:function(a,t){var e=this;console.log(a),t||(this.swal_titulo="Esta seguro de remover este artículo de la compra?",this.swal_tle="Removido!",this.swal_msg="El registro ha sido removido con éxito."),swal({title:this.swal_titulo,type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Aceptar!",cancelButtonText:"Cancelar",confirmButtonClass:"btn btn-success",cancelButtonClass:"btn btn-danger",buttonsStyling:!1,reverseButtons:!0}).then(function(o){if(o.value){var r=e;axios.get("/requisicioncompra/"+a.id+"/edit").then(function(a){}).catch(function(a){console.log(a)}),axios.get("/partidare/"+a.articulo_id+"&"+a.requisicione_id+"&"+a.servicio_id+"/activ").then(function(a){t||toastr.success("Eliminado Correctamente"),r.cargarpartidas(r.empleado),r.getArticulosRequisicion()}).catch(function(a){console.log(a)})}else o.dismiss,swal.DismissReason.cancel})},comprarEquivalente:function(){toastr.warning("Atención","Seleccione el articulo/servicio equivalente"),this.modalarticulos=1,this.partidascompras.articulo_uno_id=this.partidascompras.articulo_id,this.partidascompras.nombrearti_uno=this.partidascompras.nombrearti,this.partidascompras.servicio_uno_id=this.partidascompras.servicio_id,this.desabilitar_precios=!1,this.tipoAccionpr=1},guardarEquivalente:function(){var a=this;a.isLoadingDetalle=!0,axios.post("/comprarequivalente",{requisicione_id:this.partidascompras.requisicione_id,articulo_id:this.partidascompras.articulo_id,servicio_id:this.partidascompras.servicio_id,articulo_uno_id:this.partidascompras.articulo_uno_id,servicio_uno_id:this.partidascompras.servicio_uno_id,nombrearti_uno:this.partidascompras.nombrearti_uno,folio:this.empleado.folio,pda:this.partidascompras.pda}).then(function(t){a.cancelar(),a.isLoadingDetalle=!1,a.desabilitar_precios=!1}).catch(function(a){console.error(a)})},cerrarModalArticulos:function(){this.modalarticulos=0},actualizarpartidacomprauno:function(a,t){this.partidascompras.nombrearti=a.ad,this.partidascompras.id=a.id,this.partidascompras.comentario=a.comentario,this.partidascompras.cantidad=a.cantidad,this.partidascompras.precio_unitario=a.precio_unitario,this.partidascompras.centro_costo_id=a.catalogo_centro_costos_id,this.boton_actualizar_partida=1},guardarAP:function(){var a=this;""===this.partidascompras.precio_unitario?toastr.warning("Escriba un precio unitario"):""===this.partidascompras.cantidad?toastr.warning("Escriba la cantidad real comprada"):axios.put("guardaractualizapartida",{id_partida:this.partidascompras.id,precio_unitario:this.partidascompras.precio_unitario,cantidad:this.partidascompras.cantidad,comentario:this.partidascompras.comentario}).then(function(t){"error"===t.data.status?swal({type:"error",html:"Ha ocurrido un error notifiqué al administrador y recarge la página"}):(a.boton_actualizar_partida=0,a.cargarpartidas(a.empleado),a.cerrarModal(),a.cancelar(),a.getArticulosRequisicion(),toastr.success("Correcto","Partida actualizada correctamente"))}).catch(function(a){console.error(a)})},seleccionarArticuloAgregar:function(a){this.partidascompras.articulo_id=a.row.id,this.partidascompras.servicio_id=a.row.servicio_id,this.partidascompras.nombrearti=a.row.descripcion,this.partidascompras.proyecto_id=this.empleado.proyecto_id,a.row.equivalente,this.verequivalente=!1,this.modal_agregar=0,this.isLoadingg=!1,this.tipo=1,this.cerrarModalAgregar()},seleccionarServicioAgregar:function(a){this.tipo=1,this.partidascompras.servicio_id=a.row.id,this.partidascompras.nombrearti=a.row.nombre_servicio+" "+a.row.proveedor_marca,this.partidascompras.servicio_id==this.partidascompras.servicio_uno_id?toastr.warning("Atención","Seleccione un servicio equivalente diferente al original"):(this.modal_agregar=0,this.verequivalente=!1,this.guardarequivalente=!0,this.partidascompras.cambio_equivalente=1)},cambiarEstado:function(a){this.estadomodal=1==a?1:2},agregarArt:function(){this.$refs.articulo.abrirModal("articulo","registrar")},abrirModal:function(a){this.$refs.articulo.abrirModal("articulo","actualizar",a),this.cerrarModalAgregar()}},mounted:function(){}};const s=(0,e(14486).A)(i,function(){var a=this,t=a._self._c;return 1==a.mostrar?t("div",{staticClass:"card"},[t("vue-element-loading",{attrs:{active:a.isLoadingDetalle}}),a._v(" "),t("div",{staticClass:"card-header"},[t("i",{staticClass:"fa fa-align-justify"}),a._v(" Detalles de la compra con folio:  "+a._s(null==a.empleado?"":a.empleado.folio)+"\n      "),t("button",{staticClass:"btn btn-secondary float-sm-right",attrs:{type:"button"},on:{click:function(t){return a.maestro()}}},[t("i",{staticClass:"fas fa-arrow-left"}),a._v(" Atras\n      ")])]),a._v(" "),t("div",{staticClass:"card-body"},[t("v-client-table",{ref:"myTabledescuento",attrs:{columns:a.columnscompras,data:a.tableDataPartidasCompras,options:a.optionscompras},scopedSlots:a._u([{key:"id",fn:function(e){return[t("div",{staticClass:"btn-group",attrs:{role:"group","aria-label":"Button group with nested dropdown"}},[t("div",{staticClass:"btn-group dropup",attrs:{role:"group"}},[t("button",{staticClass:"btn btn-outline-dark dropdown-toggle",attrs:{id:"btnGroupDrop1",type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t("i",{staticClass:"fas fa-grip-horizontal"})]),a._v(" "),t("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"btnGroupDrop1"}},[t("button",{staticClass:"dropdown-item",attrs:{type:"button"},on:{click:function(t){return a.eliminarpartidacompra(e.row,0)}}},[t("i",{staticClass:"icon-trash"}),a._v(" Eliminar.\n                ")]),a._v(" "),t("button",{staticClass:"dropdown-item",attrs:{type:"button"},on:{click:function(t){return a.actualizarpartidacomprauno(e.row,0)}}},[t("i",{staticClass:"icon-trash"}),a._v(" Actualizar Partida.\n                ")])])])])]}},{key:"ad",fn:function(t){return[a._v("\n      "+a._s(t.row.ad)+" "+a._s(null==t.row.comentario?"":t.row.comentario)+"\n    ")]}}],null,!1,3207334592)})],1),a._v(" "),t("div",{ref:"formLote",staticClass:"card"},[t("vue-element-loading",{attrs:{active:a.isLoadingDetalle}}),a._v(" "),t("div",{staticClass:"card-header"}),a._v(" "),t("div",{staticClass:"card-body"},[t("form",[t("div",{staticClass:"form-row"},[t("div",{staticClass:"form-group col-md-8"},[t("label",[a._v("Artículo")]),a._v(" "),t("div",{staticClass:"input-group"},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:a.partidascompras.nombrearti,expression:"partidascompras.nombrearti"}],class:"form-control"+a.clases.nombrearti,attrs:{name:"name",rows:"4",cols:"80",readonly:""},domProps:{value:a.partidascompras.nombrearti},on:{input:function(t){t.target.composing||a.$set(a.partidascompras,"nombrearti",t.target.value)}}}),a._v(" "),t("div",{staticClass:"input-group-append"},[t("div",{staticClass:"dropdown"},[t("button",{staticClass:"btn btn-secondary dropdown-toggle",attrs:{type:"button",id:"dropdownMenu2","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[a._v("\n                  Opciones\n                ")]),a._v(" "),t("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdownMenu2"}},[t("button",{staticClass:"dropdown-item btn btn-secondary",attrs:{type:"button"},on:{click:function(t){return a.abrirModalA("articulo","registrar",a.partidascompras.orden_compra_id)}}},[a._v("Buscar Requisición")]),a._v(" "),t("button",{staticClass:"dropdown-item btn btn-secondary",attrs:{type:"button"},on:{click:function(t){return a.abrirModalA("articulo","agregar",a.partidascompras.orden_compra_id)}}},[a._v("Agregar Articulo/Servicio")]),a._v(" "),t("button",{directives:[{name:"show",rawName:"v-show",value:a.verequivalente,expression:"verequivalente"}],staticClass:"dropdown-item btn btn-success",attrs:{type:"button"},on:{click:function(t){return a.comprarEquivalente()}}},[t("i",{staticClass:"fas fa-exchange-alt"}),a._v(" Cambiar")])])])])])])]),a._v(" "),t("div",{staticClass:"form-row"},[t("div",{staticClass:"form-group col-md-8"},[t("label",{attrs:{for:"comentario"}},[a._v("Comentario de Proveedor")]),a._v(" "),t("textarea",{directives:[{name:"validate",rawName:"v-validate",value:"max:75",expression:"'max:75'"},{name:"model",rawName:"v-model",value:a.partidascompras.comentario,expression:"partidascompras.comentario"}],staticClass:"form-control",attrs:{maxlength:"75",title:"Texto que aparecera en el formato!",autocomplete:"off",id:"comentario",rows:"4"},domProps:{value:a.partidascompras.comentario},on:{input:function(t){t.target.composing||a.$set(a.partidascompras,"comentario",t.target.value)}}})])]),a._v(" "),t("div",{staticClass:"form-row"},[t("div",{staticClass:"form-group col-md-4"},[t("label",{attrs:{for:"validationDefaultUsername"}},[a._v("Precio Unitario")]),a._v(" "),t("div",{staticClass:"input-group"},[a._m(0),a._v(" "),t("input",{directives:[{name:"validate",rawName:"v-validate",value:"decimal:2",expression:"'decimal:2'"},{name:"model",rawName:"v-model",value:a.partidascompras.precio_unitario,expression:"partidascompras.precio_unitario"}],class:"form-control"+a.clases.precio_unitario,attrs:{type:"text",disabled:a.desabilitar_precios,min:"0",pattern:"^[0-9]+",placeholder:"Precio unitario",autocomplete:"off",id:"precio_unitario","data-vv-name":"precio_unitario"},domProps:{value:a.partidascompras.precio_unitario},on:{input:function(t){t.target.composing||a.$set(a.partidascompras,"precio_unitario",t.target.value)}}})]),a._v(" "),t("span",{staticClass:"text-danger"},[a._v(a._s(a.errors.first("precio_unitario")))])]),a._v(" "),t("div",{staticClass:"form-group col-md-4"},[t("label",{attrs:{for:"validationDefaultUsername"}},[a._v("Adicionales")]),a._v(" "),t("div",{staticClass:"input-group"},[a._m(1),a._v(" "),t("input",{directives:[{name:"validate",rawName:"v-validate",value:"decimal:2",expression:"'decimal:2'"},{name:"model",rawName:"v-model",value:a.partidascompras.adicionales,expression:"partidascompras.adicionales"}],class:"form-control"+a.clases.precio_unitario,attrs:{type:"text",disabled:a.desabilitar_precios,min:"0",pattern:"^[0-9]+",placeholder:"Adicionales",autocomplete:"off",id:"adicionales","data-vv-name":"adicionales"},domProps:{value:a.partidascompras.adicionales},on:{input:function(t){t.target.composing||a.$set(a.partidascompras,"adicionales",t.target.value)}}})]),a._v(" "),t("span",{staticClass:"text-danger"},[a._v(a._s(a.errors.first("adicionales")))])])]),a._v(" "),t("div",{staticClass:"form-row"},[t("div",{staticClass:"form-group col-md-4"},[t("label",[a._v("Cantidad requerida")]),a._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:a.partidascompras.cantidad_real,expression:"partidascompras.cantidad_real"}],staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:a.partidascompras.cantidad_real},on:{input:function(t){t.target.composing||a.$set(a.partidascompras,"cantidad_real",t.target.value)}}})]),a._v(" "),t("div",{staticClass:"form-group col-md-4"},[t("label",{attrs:{for:"validationDefaultUsername"}},[a._v("Cantidad real comprada")]),a._v(" "),t("input",{directives:[{name:"validate",rawName:"v-validate",value:"decimal:2",expression:"'decimal:2'"},{name:"model",rawName:"v-model",value:a.partidascompras.cantidad,expression:"partidascompras.cantidad"}],class:"form-control"+a.clases.cantidad,attrs:{type:"text",disabled:a.desabilitar_precios,min:"0",pattern:"^[0-9]+",placeholder:"Cantidad real a comprar",autocomplete:"off",id:"cantidad","data-vv-name":"cantidad"},domProps:{value:a.partidascompras.cantidad},on:{input:function(t){t.target.composing||a.$set(a.partidascompras,"cantidad",t.target.value)}}}),a._v(" "),t("span",{staticClass:"text-danger"},[a._v(a._s(a.errors.first("cantidad")))])])])])]),a._v(" "),t("div",{staticClass:"card-footer"},[t("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(t){return a.cancelar()}}},[a._v("Cancelar")]),a._v(" "),1==a.tipoAccionpr?t("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(t){a.validardetalle(),a.guardarPR(1,a.partidascompras.orden_compra_id)}}},[t("i",{staticClass:"fas fa-save"}),a._v(" Agregar")]):a._e(),a._v(" "),1==a.boton_actualizar_partida?t("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(t){return a.guardarAP()}}},[t("i",{staticClass:"fas fa-save"}),a._v(" Actualizar Partida")]):a._e()])],1),a._v(" "),t("div",{staticClass:"modal fade",class:{mostrar:a.modala},staticStyle:{display:"none"},attrs:{tabindex:"-1",role:"dialog","aria-labelledby":"myModalLabel","aria-hidden":"true"}},[t("div",{staticClass:"modal-dialog modal-dark modal-lg",attrs:{role:"document"}},[t("div",{staticClass:"modal-content"},[t("div",[t("vue-element-loading",{attrs:{active:a.isLoadingDetalle}}),a._v(" "),t("div",{staticClass:"modal-header"},[t("h4",{staticClass:"modal-title",domProps:{textContent:a._s(a.tituloModala)}}),a._v(" "),t("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(t){return a.cerrarModal()}}},[t("span",{attrs:{"aria-hidden":"true"}},[a._v("x")])])]),a._v(" "),t("div",{staticClass:"modal-body"},[t("input",{attrs:{type:"hidden",name:"id"}}),a._v(" "),t("div",{staticClass:"modal-body"},[t("v-client-table",{ref:"myTable",attrs:{data:a.dataTableArticulo,columns:a.columnsa,options:a.optionsa},on:{"row-click":a.seleccionarArticulo2}})],1)]),a._v(" "),t("div",{staticClass:"modal-footer"},[t("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(t){return a.cerrarModal()}}},[a._v("Cerrar")])])],1)])])]),a._v(" "),t("div",{staticClass:"modal fade",class:{mostrar:a.modal_agregar},staticStyle:{display:"none"},attrs:{tabindex:"-1",role:"dialog","aria-labelledby":"myModalLabel","aria-hidden":"true"}},[t("div",{staticClass:"modal-dialog modal-dark modal-lg",attrs:{role:"document"}},[t("div",{staticClass:"modal-content"},[t("div",[t("div",{staticClass:"modal-header"},[t("h4",{staticClass:"modal-title"},[a._v("Seleccionar artículo/servicio")]),a._v(" "),t("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(t){return a.cerrarModalAgregar()}}},[t("span",{attrs:{"aria-hidden":"true"}},[a._v("×")])])]),a._v(" "),t("div",{staticClass:"modal-body"},[t("input",{attrs:{type:"hidden",name:"id"}}),a._v(" "),t("div",{staticClass:"modal-body"},[t("div",{staticClass:"accordion",attrs:{id:"accordiondos"}},[t("div",{staticClass:"card"},[t("div",{staticClass:"card-header bg-dark justify-content-center",attrs:{id:"headingUno"}},[t("h5",{staticClass:"mb-0"},[t("button",{staticClass:"btn btn-dark collapsed",on:{click:function(t){return a.cambiarEstado(1)}}},[t("b",[a._v(" Articulos ")])]),a._v(" "),t("button",{staticClass:"btn btn-dark collapsed",on:{click:function(t){return a.cambiarEstado(2)}}},[t("b",[a._v(" Servicios ")])])])]),a._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:1==a.estadomodal,expression:"estadomodal == 1"}]},[t("v-server-table",{ref:"myTableArticulo",attrs:{url:"/articulo/busqueda",columns:a.columnsart,options:a.optionsart},on:{"row-click":a.seleccionarArticuloAgregar},scopedSlots:a._u([{key:"calidad",fn:function(e){return[null!=e.row.calidad_id?[t("button",{staticClass:"btn btn-warning",attrs:{type:"button","data-toggle":"tooltip","data-placement":"top",title:e.row.descal}},[a._v("\n                              "+a._s(e.row.calidad)+"\n                            ")])]:a._e()]}},{key:"child_row",fn:function(e){return[t("div",{staticClass:"btn-group",attrs:{role:"group","aria-label":"Button group with nested dropdown"}},[t("div",{staticClass:"btn-group",attrs:{role:"group"}},[t("button",{staticClass:"btn btn-outline-dark dropdown-toggle",attrs:{id:"btnGroupDrop1",type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t("i",{staticClass:"fas fa-grip-horizontal"}),a._v(" Acciones\n                              ")]),a._v(" "),t("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"btnGroupDrop1"}},[t("button",{staticClass:"dropdown-item",attrs:{type:"button"},on:{click:function(t){return a.abrirModal(e.row)}}},[t("i",{staticClass:"icon-pencil"}),a._v(" Actualizar Articulo\n                                ")])])])])]}}],null,!1,2799618880)})],1),a._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:2==a.estadomodal,expression:"estadomodal == 2"}]},[t("v-server-table",{ref:"myTable",attrs:{url:"/catservicio/busqueda",columns:a.columnsserv,options:a.optionsserv},on:{"row-click":a.seleccionarServicioAgregar}})],1)])])])]),a._v(" "),t("div",{staticClass:"modal-footer"},[t("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(t){return a.cerrarModalAgregar()}}},[a._v("Cerrar")])])])])])]),a._v(" "),t("div",{staticClass:"modal fade",class:{mostrar:a.modalarticulos},staticStyle:{display:"none"},attrs:{tabindex:"-1",role:"dialog","aria-labelledby":"myModalLabel","aria-hidden":"true"}},[t("div",{staticClass:"modal-dialog modal-dark modal-lg",attrs:{role:"document"}},[t("div",{staticClass:"modal-content"},[t("div",[t("div",{staticClass:"modal-header"},[t("h4",{staticClass:"modal-title"},[a._v("Seleccionar artículo equivalente")]),a._v(" "),t("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(t){return a.cerrarModalArticulos()}}},[t("span",{attrs:{"aria-hidden":"true"}},[a._v("×")])])]),a._v(" "),t("div",{staticClass:"modal-body"},[t("input",{attrs:{type:"hidden",name:"id"}}),a._v(" "),t("div",{staticClass:"modal-body"},[t("div",{staticClass:"accordion",attrs:{id:"accordiondos"}},[t("div",{staticClass:"card"},[t("div",{staticClass:"card-header bg-dark justify-content-center",attrs:{id:"headingUno"}},[t("h5",{staticClass:"mb-0"},[t("button",{staticClass:"btn btn-dark collapsed",attrs:{disabled:null==a.partidascompras.articulo_id,type:"button","data-toggle":"collapse","data-target":"#collapsecinco","aria-expanded":"false","aria-controls":"collapseTres"}},[t("b",[a._v(" Articulos ")])]),a._v(" "),t("button",{staticClass:"btn btn-dark collapsed",attrs:{disabled:null==a.partidascompras.servicio_id,type:"button","data-toggle":"collapse","data-target":"#collapseseis","aria-expanded":"false","aria-controls":"collapseCuatro"}},[t("b",[a._v(" Servicios ")])])])]),a._v(" "),t("div",{staticClass:"collapse",attrs:{id:"collapsecinco","aria-labelledby":"headingUno","data-parent":"#accordiondos"}},[t("v-server-table",{ref:"myTable",attrs:{url:"/articulo/busqueda",columns:a.columnsart,options:a.optionsart},on:{"row-click":a.seleccionarArticulosDos},scopedSlots:a._u([{key:"calidad",fn:function(e){return[null!=e.row.calidad_id?[t("button",{staticClass:"btn btn-warning",attrs:{type:"button","data-toggle":"tooltip","data-placement":"top",title:e.row.descal}},[a._v("\n                      "+a._s(e.row.calidad)+"\n                    ")])]:a._e()]}}],null,!1,1181390583)})],1),a._v(" "),t("div",{staticClass:"collapse",attrs:{id:"collapseseis","aria-labelledby":"headingDos","data-parent":"#accordiondos"}},[t("v-server-table",{ref:"myTable",attrs:{url:"/catservicio/busqueda",columns:a.columnsserv,options:a.optionsserv},on:{"row-click":a.seleccionarServicio}})],1)])])])]),a._v(" "),t("div",{staticClass:"modal-footer"},[t("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(t){return a.cerrarModalArticulos()}}},[a._v("Cerrar")])])])])])])],1):a._e()},[function(){var a=this._self._c;return a("div",{staticClass:"input-group-addon"},[a("span",{staticClass:"input-group-text"},[this._v("$")])])},function(){var a=this._self._c;return a("div",{staticClass:"input-group-addon"},[a("span",{staticClass:"input-group-text"},[this._v("$")])])}],!1,null,null,null).exports},3975:(a,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>v});var o=e(60173);function r(a){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},r(a)}function i(a,t){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(a);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})),e.push.apply(e,o)}return e}function s(a,t,e){return(t=function(a){var t=function(a,t){if("object"!=r(a)||!a)return a;var e=a[Symbol.toPrimitive];if(void 0!==e){var o=e.call(a,t||"default");if("object"!=r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(a)}(a,"string");return"symbol"==r(t)?t:t+""}(t))in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}function n(){var a,t,e="function"==typeof Symbol?Symbol:{},o=e.iterator||"@@iterator",r=e.toStringTag||"@@toStringTag";function i(e,o,r,i){var n=o&&o.prototype instanceof l?o:l,d=Object.create(n.prototype);return c(d,"_invoke",function(e,o,r){var i,n,c,l=0,d=r||[],u=!1,p={p:0,n:0,v:a,a:v,f:v.bind(a,4),d:function(t,e){return i=t,n=0,c=a,p.n=e,s}};function v(e,o){for(n=e,c=o,t=0;!u&&l&&!r&&t<d.length;t++){var r,i=d[t],v=p.p,m=i[2];e>3?(r=m===o)&&(c=i[(n=i[4])?5:(n=3,3)],i[4]=i[5]=a):i[0]<=v&&((r=e<2&&v<i[1])?(n=0,p.v=o,p.n=i[1]):v<m&&(r=e<3||i[0]>o||o>m)&&(i[4]=e,i[5]=o,p.n=m,n=0))}if(r||e>1)return s;throw u=!0,o}return function(r,d,m){if(l>1)throw TypeError("Generator is already running");for(u&&1===d&&v(d,m),n=d,c=m;(t=n<2?a:c)||!u;){i||(n?n<3?(n>1&&(p.n=-1),v(n,c)):p.n=c:p.v=c);try{if(l=2,i){if(n||(r="next"),t=i[r]){if(!(t=t.call(i,c)))throw TypeError("iterator result is not an object");if(!t.done)return t;c=t.value,n<2&&(n=0)}else 1===n&&(t=i.return)&&t.call(i),n<2&&(c=TypeError("The iterator does not provide a '"+r+"' method"),n=1);i=a}else if((t=(u=p.n<0)?c:e.call(o,p))!==s)break}catch(t){i=a,n=1,c=t}finally{l=1}}return{value:t,done:u}}}(e,r,i),!0),d}var s={};function l(){}function d(){}function u(){}t=Object.getPrototypeOf;var p=[][o]?t(t([][o]())):(c(t={},o,function(){return this}),t),v=u.prototype=l.prototype=Object.create(p);function m(a){return Object.setPrototypeOf?Object.setPrototypeOf(a,u):(a.__proto__=u,c(a,r,"GeneratorFunction")),a.prototype=Object.create(v),a}return d.prototype=u,c(v,"constructor",u),c(u,"constructor",d),d.displayName="GeneratorFunction",c(u,r,"GeneratorFunction"),c(v),c(v,r,"Generator"),c(v,o,function(){return this}),c(v,"toString",function(){return"[object Generator]"}),(n=function(){return{w:i,m}})()}function c(a,t,e,o){var r=Object.defineProperty;try{r({},"",{})}catch(a){r=0}c=function(a,t,e,o){function i(t,e){c(a,t,function(a){return this._invoke(t,e,a)})}t?r?r(a,t,{value:e,enumerable:!o,configurable:!o,writable:!o}):a[t]=e:(i("next",0),i("throw",1),i("return",2))},c(a,t,e,o)}function l(a,t,e,o,r,i,s){try{var n=a[i](s),c=n.value}catch(a){return void e(a)}n.done?t(c):Promise.resolve(c).then(o,r)}function d(a){return function(){var t=this,e=arguments;return new Promise(function(o,r){var i=a.apply(t,e);function s(a){l(i,o,r,s,n,"next",a)}function n(a){l(i,o,r,s,n,"throw",a)}s(void 0)})}}var u=e(14941).call(void 0);const p={data:function(){return{n_temp:0,banco_edit:{},tipo_guardar:1,ListBancos_temp:[],ListBancos:[],listaEmpleados:[],temp_proveedor_cuenta:"",temp_proveedor_clabe:"",temp_proveedor_banco:"",columnsProvedores:["id","banco","cuenta","clabe"],tableDataProveedores:[],optionsProveedores:{headings:{clabe:"Clabe",banco:"Banco de transferencia",cuenta:"No. de Cuenta",id:"Acciones"},perPage:10,perPageValues:[],skin:u.skin,texts:u.texts,filterable:!1},modalProveedor:0,PermisosCrud:{},Proveedor:{nombre:"",razon_social:"",direccion:"",banco_transferencia:"",numero_cuenta:"",clabe:"",limite_credito:0,condicion:0,categoria:"",condicion_pago:"",giro:"",rfc:"",ciudad:"",estado:"",contacto:"",telefono:"",correo:"",pagina:"",descripcion:"",tipo_moneda:0,tipo_cambio:""},calificacion:{id:0,uno:"",dos:"",tres:"",cuatro:"",cinco:"",seis:"",siete:"",ocho:"",nueve:"",diez:"",once:"",doce:"",trece:"",catorce:"",quince:"",diesiseis:"",diesisiete:"",diesiocho:"",fecha:"",evaluador:""},listaProveedores:[],modal:0,tituloModal:"",tipoAccion:0,isLoading:!1,isLoading_proveedores:!1,columns:["id","idControl","nombre","razon_social","IdentificadorFiscal","total_evaluacion","fecha","direccion"],list_proveedores:[],options_proveedores:{headings:{id:"Acciones",idControl:"ID",nombre:"Nombre",razon_social:"Razón Social",direccion:"Dirección",total_eval:"Calificación",IdentificadorFiscal:"Identificador Fiscal",fecha:"Fecha"},perPage:10,perPageValues:[],skin:u.skin,sortIcon:u.sortIcon,filterByColumn:!0,texts:u.texts},periods:[],yearSince:2021,yearUntil:2025,selectedPeriod:null,anio:null,mes:null}},computed:{},created:function(){this.setPeriodoActual()},mounted:function(){this.getData(),this.generatePeriods(),this.setPeriodoActual()},methods:{setPeriodoActual:function(){var a=new Date,t=a.getMonth()+1,e=a.getFullYear();this.anio=e,this.mes=t>=2&&t<=7?8:2,this.ObtenerProveedores()},getData:function(){this.PermisosCrud=o.A.getCRUD(this.$route.path),this.listaEmpleados.push({id:390,name:"DOMINICK TOVANY MARTINEZ"},{id:422,name:"ADRIANA HERRERA FLORES"},{id:833,name:"DIANA LARISA PEREZ DIAZ"},{id:154,name:"VALERIA HERNANDEZ MARTINEZ"},{id:893,name:"JOSEFINA GUADALUPE LOPEZ BARTOLO"},{id:390,name:"MARIA DE LA LUZ MARTINEZ HERRERA"})},generatePeriods:function(){this.periods=[];for(var a=this.yearSince;a<=this.yearUntil;a++)this.periods.push({month:"Febrero ".concat(a),anio:a,mes:2}),this.periods.push({month:"Agosto ".concat(a),anio:a,mes:8})},selectPeriods:function(a,t){this.anio=a,this.mes=t,this.ObtenerProveedores()},ObtenerProveedores:function(){var a=this;return d(n().m(function t(){var e;return n().w(function(t){for(;;)switch(t.p=t.n){case 0:return a.isLoading_proveedores=!0,t.p=1,t.n=2,axios.get("compras/evaluacion/obtenerproveedores/".concat(a.anio,"/").concat(a.mes));case 2:(e=t.v).data.status?a.list_proveedores=Array.isArray(e.data.proveedores)?e.data.proveedores:[]:(a.list_proveedores=[],toastr.error(e.data.mensaje)),t.n=4;break;case 3:t.p=3,t.v,a.list_proveedores=[],toastr.error("Error al obtener proveedores");case 4:return t.p=4,a.isLoading_proveedores=!1,t.f(4);case 5:return t.a(2)}},t,null,[[1,3,4,5]])}))()},GuardarEvaluacion:function(a){var t=this;this.$validator.validate().then(function(e){if(e){t.isLoading=!0;var o=new FormData;a||o.append("id",t.calificacion.id),o.append("uno",t.calificacion.uno),o.append("dos",t.calificacion.dos),o.append("tres",t.calificacion.tres),o.append("cuatro",t.calificacion.cuatro),o.append("cinco",t.calificacion.cinco),o.append("seis",t.calificacion.seis),o.append("siete",t.calificacion.siete),o.append("ocho",t.calificacion.ocho),o.append("nueve",t.calificacion.nueve),o.append("diez",t.calificacion.diez),o.append("once",t.calificacion.once),o.append("doce",t.calificacion.doce),o.append("trece",t.calificacion.trece),o.append("catorce",t.calificacion.catorce),o.append("quince",t.calificacion.quince),o.append("diesiseis",t.calificacion.diesiseis),o.append("diesisiete",t.calificacion.diesisiete),o.append("diesiocho",t.calificacion.diesiocho),o.append("evaluador",t.calificacion.evaluador.id),o.append("fecha",t.calificacion.fecha),o.append("proveedor_id",t.calificacion.proveedor_id),axios.post("compras/evaluacion/guardar",o).then(function(e){t.isLoading=!1,e.data.status?(t.CerrarModalEvaluacion(),t.ObtenerProveedores(),a?toastr.success("Calificación Agregada Correctamente"):toastr.success("Calificación Actualizada Correctamente")):toastr.error(e.data.mensaje)})}})},CerrarModalEvaluacion:function(){this.modal=0,this.LimpiarCalificacion(),this.tituloModal="",o.A.resetObject(this.calificacion)},LimpiarCalificacion:function(){var a=new Date,t=(a.getFullYear(),(a.getMonth()+1).toString().padStart(2,"0"),a.getDate().toString().padStart(2,"0"),"".concat(2021,"-",12,"-",22));this.calificacion={id:0,uno:1,dos:1,tres:1,cuatro:1,cinco:1,seis:1,siete:1,ocho:1,nueve:1,diez:1,once:1,doce:1,trece:1,catorce:1,quince:1,diesiseis:1,diesisiete:1,diesiocho:1,fecha:t,evaluador:{}}},AbrirModalEvaluacion:function(a){var t=this;this.modal=1;var e="";null==a.ep_id?(this.LimpiarCalificacion(),this.calificacion.proveedor_id=a.id,e="Registar",this.tipoAccion=1):axios.get("compras/evaluacion/obtener/"+a.ep_id).then(function(a){a.data.status?(e="Actualizar",t.tipoAccion=2,t.calificacion=function(a){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?i(Object(e),!0).forEach(function(t){s(a,t,e[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach(function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))})}return a}({},a.data.evaluacion),t.calificacion.evaluador={id:a.data.evaluacion.evaluador,name:a.data.evaluacion.empleado}):toastr.error(a.data.mensaje)}),this.tituloModal="".concat(e," evaluacion de ").concat(a.razon_social)},DescargrEvaluacion:function(a){window.open("compras/evaluacion/descargar/"+a.ep_id,"_blank")},DescargarReporte:function(){window.open("compras/evaluacion/descargarreporte/"+this.anio)},DescargarCartas:function(){var a=this;return d(n().m(function t(){var e,o,r,i,s;return n().w(function(t){for(;;)switch(t.p=t.n){case 0:if(a.anio&&a.mes){t.n=1;break}return t.a(2);case 1:return t.p=1,a.isLoading_proveedores=!0,t.n=2,axios({url:"compras/evaluacion/download-cards/".concat(a.anio,"/").concat(a.mes),method:"GET",responseType:"blob"});case 2:e=t.v,o=window.URL.createObjectURL(new Blob([e.data])),(r=document.createElement("a")).href=o,r.setAttribute("download","Cartas_".concat(a.mes,"_").concat(a.anio,".zip")),document.body.appendChild(r),r.click(),document.body.removeChild(r),window.URL.revokeObjectURL(o),t.n=4;break;case 3:t.p=3,s=t.v,console.error("Error al descargar las cartas:",s),toastr.error((null===(i=s.response)||void 0===i||null===(i=i.data)||void 0===i?void 0:i.message)||"No se pudo descargar el ZIP. Intenta de nuevo.");case 4:return t.p=4,a.isLoading_proveedores=!1,t.f(4);case 5:return t.a(2)}},t,null,[[1,3,4,5]])}))()}}};const v=(0,e(14486).A)(p,function(){var a=this,t=a._self._c;return t("main",{staticClass:"main"},[t("div",{staticClass:"container-fluid"},[t("div",{staticClass:"card"},[t("div",{staticClass:"card-header"},[t("i",{staticClass:"fa fa-clipboard-check fa-2x"}),a._v(" Evaluación de Proveedores "),t("strong",[a._v(a._s(2===a.mes?"Febrero":"Agosto")+" "+a._s(a.anio))]),a._v(" "),t("button",{directives:[{name:"show",rawName:"v-show",value:a.PermisosCrud.Download,expression:"PermisosCrud.Download"}],staticClass:"btn btn-dark float-sm-right ml-2",on:{click:a.DescargarReporte}},[t("i",{staticClass:"fas fa-download mr-1"}),a._v("Reporte\r\n                ")]),a._v(" "),t("button",{staticClass:"btn btn-primary float-sm-right ml-2",attrs:{type:"button",disabled:a.isLoading_proveedores},on:{click:a.DescargarCartas}},[t("i",{staticClass:"fas fa-file-archive-o mr-1"}),a._v("\r\n                        "+a._s(a.isLoading_proveedores?"Descargando...":"Descargar Cartas")+"\r\n                    ")]),a._v(" "),t("div",{staticClass:"dropdown float-sm-right"},[t("button",{staticClass:"btn btn-primary dropdown-toggle",attrs:{type:"button",id:"dropdownMenu2","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[a._v("\r\n                    "+a._s(2===a.mes?"Febrero":"Agosto")+" "+a._s(a.anio)+"\r\n                    ")]),a._v(" "),t("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdownMenu2"}},a._l(a.periods,function(e){return t("button",{key:e.month,staticClass:"dropdown-item",attrs:{type:"button"},on:{click:function(t){return a.selectPeriods(e.anio,e.mes)}}},[a._v(a._s(e.month)+"\r\n                        ")])}),0)])]),a._v(" "),t("vue-element-loading",{attrs:{active:a.isLoading_proveedores}}),a._v(" "),t("div",{staticClass:"card-body"},[t("v-client-table",{ref:"myTable",attrs:{columns:a.columns,data:a.list_proveedores,options:a.options_proveedores},scopedSlots:a._u([{key:"id",fn:function(e){return[t("button",{directives:[{name:"show",rawName:"v-show",value:a.PermisosCrud.Create,expression:"PermisosCrud.Create"}],staticClass:"btn btn-outline-dark",attrs:{type:"button"},on:{click:function(t){return a.AbrirModalEvaluacion(e.row)}}},[t("i",{staticClass:"fas fa-tasks"})]),a._v(" "),null!=e.row.total_evaluacion?[t("button",{directives:[{name:"show",rawName:"v-show",value:a.PermisosCrud.Download,expression:"PermisosCrud.Download"}],staticClass:"btn btn-outline-dark",attrs:{type:"button"},on:{click:function(t){return a.DescargrEvaluacion(e.row)}}},[t("i",{staticClass:"fas fa-download"})])]:a._e()]}},{key:"total_evaluacion",fn:function(e){return[null==e.row.total_evaluacion?[t("span",[a._v("N/D")])]:[e.row.total_evaluacion>=54?t("span",{staticClass:"text-success"},[a._v("\r\n                                APROBADO\r\n                            ")]):a._e(),a._v(" "),e.row.total_evaluacion>=36&&e.row.total_evaluacion<=53?t("span",{staticClass:"text-warning"},[a._v("\r\n                                CONDICIONADO\r\n                            ")]):a._e(),a._v(" "),e.row.total_evaluacion>=18&&e.row.total_evaluacion<=35?t("span",{staticClass:"text-danger"},[a._v("\r\n                                No APTO\r\n                            ")]):a._e()]]}}])})],1)],1)]),a._v(" "),t("div",{staticClass:"modal fade",class:{mostrar:a.modal},staticStyle:{display:"none"},attrs:{tabindex:"-1",role:"dialog","aria-labelledby":"myModalLabel","aria-hidden":"true"}},[t("div",{staticClass:"modal-dialog modal-dark modal-lg",attrs:{role:"document"}},[t("div",{staticClass:"modal-content"},[t("div",[t("vue-element-loading",{attrs:{active:a.isLoading}}),a._v(" "),t("div",{staticClass:"modal-header"},[t("h4",{staticClass:"modal-title",domProps:{textContent:a._s(a.tituloModal)}}),a._v(" "),t("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(t){return a.CerrarModalEvaluacion()}}},[t("span",{attrs:{"aria-hidden":"true"}},[a._v("×")])])]),a._v(" "),t("div",{staticClass:"modal-body"},[a._m(0),a._v(" "),t("div",{staticClass:"accordion",attrs:{id:"accordion"}},[t("div",{staticClass:"card"},[a._m(1),a._v(" "),t("div",{staticClass:"collapse",attrs:{id:"collapseOne","aria-labelledby":"headingOne","data-parent":"#accordion"}},[t("div",{staticClass:"card-body"},[t("div",{staticClass:"form-group row"},[t("label",{staticClass:"col-md-6 form-control-label"},[a._v("\r\n                                                Atención recibida (cortesía, amabilidad)\r\n                                            ")]),a._v(" "),t("div",{staticClass:"col-md-3"},[t("select",{directives:[{name:"model",rawName:"v-model",value:a.calificacion.uno,expression:"calificacion.uno"}],staticClass:"form-control",on:{change:function(t){var e=Array.prototype.filter.call(t.target.options,function(a){return a.selected}).map(function(a){return"_value"in a?a._value:a.value});a.$set(a.calificacion,"uno",t.target.multiple?e:e[0])}}},[t("option",{attrs:{value:"4"}},[a._v("Excelente")]),a._v(" "),t("option",{attrs:{value:"3"}},[a._v("Bien")]),a._v(" "),t("option",{attrs:{value:"2"}},[a._v("Regular")]),a._v(" "),t("option",{attrs:{value:"1"}},[a._v("Deficiente")])])])]),a._v(" "),t("div",{staticClass:"form-group row"},[t("label",{staticClass:"col-md-6 form-control-label"},[a._v("\r\n                                                Rapidez en la atención\r\n                                            ")]),a._v(" "),t("div",{staticClass:"col-md-3"},[t("select",{directives:[{name:"model",rawName:"v-model",value:a.calificacion.dos,expression:"calificacion.dos"}],staticClass:"form-control",on:{change:function(t){var e=Array.prototype.filter.call(t.target.options,function(a){return a.selected}).map(function(a){return"_value"in a?a._value:a.value});a.$set(a.calificacion,"dos",t.target.multiple?e:e[0])}}},[t("option",{attrs:{value:"4"}},[a._v("Excelente")]),a._v(" "),t("option",{attrs:{value:"3"}},[a._v("Bien")]),a._v(" "),t("option",{attrs:{value:"2"}},[a._v("Regular")]),a._v(" "),t("option",{attrs:{value:"1"}},[a._v("Deficiente")])])])]),a._v(" "),t("div",{staticClass:"form-group row"},[t("label",{staticClass:"col-md-6 form-control-label"},[a._v("\r\n                                                Agilidad ante un problema, duda, sugerencia o requerimiento.\r\n                                            ")]),a._v(" "),t("div",{staticClass:"col-md-3"},[t("select",{directives:[{name:"model",rawName:"v-model",value:a.calificacion.tres,expression:"calificacion.tres"}],staticClass:"form-control",on:{change:function(t){var e=Array.prototype.filter.call(t.target.options,function(a){return a.selected}).map(function(a){return"_value"in a?a._value:a.value});a.$set(a.calificacion,"tres",t.target.multiple?e:e[0])}}},[t("option",{attrs:{value:"4"}},[a._v("Excelente")]),a._v(" "),t("option",{attrs:{value:"3"}},[a._v("Bien")]),a._v(" "),t("option",{attrs:{value:"2"}},[a._v("Regular")]),a._v(" "),t("option",{attrs:{value:"1"}},[a._v("Deficiente")])])])])])])])]),a._v(" "),t("div",{staticClass:"accordion",attrs:{id:"accordionTwo"}},[t("div",{staticClass:"card"},[a._m(2),a._v(" "),t("div",{staticClass:"collapse",attrs:{id:"collapseTwo","aria-labelledby":"headingTwo","data-parent":"#accordionTwo"}},[t("div",{staticClass:"card-body"},[t("div",{staticClass:"form-group row"},[t("label",{staticClass:"col-md-6 form-control-label"},[a._v("\r\n                                                Trato personal recibido (cortesía, amabilidad)\r\n                                            ")]),a._v(" "),t("div",{staticClass:"col-md-3"},[t("select",{directives:[{name:"model",rawName:"v-model",value:a.calificacion.cuatro,expression:"calificacion.cuatro"}],staticClass:"form-control",on:{change:function(t){var e=Array.prototype.filter.call(t.target.options,function(a){return a.selected}).map(function(a){return"_value"in a?a._value:a.value});a.$set(a.calificacion,"cuatro",t.target.multiple?e:e[0])}}},[t("option",{attrs:{value:"4"}},[a._v("Excelente")]),a._v(" "),t("option",{attrs:{value:"3"}},[a._v("Bien")]),a._v(" "),t("option",{attrs:{value:"2"}},[a._v("Regular")]),a._v(" "),t("option",{attrs:{value:"1"}},[a._v("Deficiente")])])])]),a._v(" "),t("div",{staticClass:"form-group row"},[t("label",{staticClass:"col-md-6 form-control-label"},[a._v("\r\n                                                Actitud y atención a la hora de hacer una consulta o reclamación")]),a._v(" "),t("div",{staticClass:"col-md-3"},[t("select",{directives:[{name:"model",rawName:"v-model",value:a.calificacion.cinco,expression:"calificacion.cinco"}],staticClass:"form-control",on:{change:function(t){var e=Array.prototype.filter.call(t.target.options,function(a){return a.selected}).map(function(a){return"_value"in a?a._value:a.value});a.$set(a.calificacion,"cinco",t.target.multiple?e:e[0])}}},[t("option",{attrs:{value:"4"}},[a._v("Excelente")]),a._v(" "),t("option",{attrs:{value:"3"}},[a._v("Bien")]),a._v(" "),t("option",{attrs:{value:"2"}},[a._v("Regular")]),a._v(" "),t("option",{attrs:{value:"1"}},[a._v("Deficiente")])])])]),a._v(" "),t("div",{staticClass:"form-group row"},[t("label",{staticClass:"col-md-6 form-control-label"},[a._v("\r\n                                                Facilidad para contactar con la persona adecuada\r\n                                            ")]),a._v(" "),t("div",{staticClass:"col-md-3"},[t("select",{directives:[{name:"model",rawName:"v-model",value:a.calificacion.seis,expression:"calificacion.seis"}],staticClass:"form-control",on:{change:function(t){var e=Array.prototype.filter.call(t.target.options,function(a){return a.selected}).map(function(a){return"_value"in a?a._value:a.value});a.$set(a.calificacion,"seis",t.target.multiple?e:e[0])}}},[t("option",{attrs:{value:"4"}},[a._v("Excelente")]),a._v(" "),t("option",{attrs:{value:"3"}},[a._v("Bien")]),a._v(" "),t("option",{attrs:{value:"2"}},[a._v("Regular")]),a._v(" "),t("option",{attrs:{value:"1"}},[a._v("Deficiente")])])])]),a._v(" "),t("div",{staticClass:"form-group row"},[t("label",{staticClass:"col-md-6 form-control-label"},[a._v("\r\n                                                Nivel de información recibido sobre los servicios\r\n                                            ")]),a._v(" "),t("div",{staticClass:"col-md-3"},[t("select",{directives:[{name:"model",rawName:"v-model",value:a.calificacion.siete,expression:"calificacion.siete"}],staticClass:"form-control",on:{change:function(t){var e=Array.prototype.filter.call(t.target.options,function(a){return a.selected}).map(function(a){return"_value"in a?a._value:a.value});a.$set(a.calificacion,"siete",t.target.multiple?e:e[0])}}},[t("option",{attrs:{value:"4"}},[a._v("Excelente")]),a._v(" "),t("option",{attrs:{value:"3"}},[a._v("Bien")]),a._v(" "),t("option",{attrs:{value:"2"}},[a._v("Regular")]),a._v(" "),t("option",{attrs:{value:"1"}},[a._v("Deficiente")])])])]),a._v(" "),t("div",{staticClass:"form-group row"},[t("label",{staticClass:"col-md-6 form-control-label"},[a._v("\r\n                                                Claridad de las cotizaciones, cumple con sus requisitos y requerimientos de forma\r\n                                            ")]),a._v(" "),t("div",{staticClass:"col-md-3"},[t("select",{directives:[{name:"model",rawName:"v-model",value:a.calificacion.ocho,expression:"calificacion.ocho"}],staticClass:"form-control",on:{change:function(t){var e=Array.prototype.filter.call(t.target.options,function(a){return a.selected}).map(function(a){return"_value"in a?a._value:a.value});a.$set(a.calificacion,"ocho",t.target.multiple?e:e[0])}}},[t("option",{attrs:{value:"4"}},[a._v("Excelente")]),a._v(" "),t("option",{attrs:{value:"3"}},[a._v("Bien")]),a._v(" "),t("option",{attrs:{value:"2"}},[a._v("Regular")]),a._v(" "),t("option",{attrs:{value:"1"}},[a._v("Deficiente")])])])]),a._v(" "),t("div",{staticClass:"form-group row"},[t("label",{staticClass:"col-md-6 form-control-label"},[a._v("Cotización oportuna")]),a._v(" "),t("div",{staticClass:"col-md-3"},[t("select",{directives:[{name:"model",rawName:"v-model",value:a.calificacion.nueve,expression:"calificacion.nueve"}],staticClass:"form-control",on:{change:function(t){var e=Array.prototype.filter.call(t.target.options,function(a){return a.selected}).map(function(a){return"_value"in a?a._value:a.value});a.$set(a.calificacion,"nueve",t.target.multiple?e:e[0])}}},[t("option",{attrs:{value:"4"}},[a._v("Excelente")]),a._v(" "),t("option",{attrs:{value:"3"}},[a._v("Bien")]),a._v(" "),t("option",{attrs:{value:"2"}},[a._v("Regular")]),a._v(" "),t("option",{attrs:{value:"1"}},[a._v("Deficiente")])])])])])])])]),a._v(" "),t("div",{staticClass:"accordion",attrs:{id:"accordionThree"}},[t("div",{staticClass:"card"},[a._m(3),a._v(" "),t("div",{staticClass:"collapse",attrs:{id:"collapseThree","aria-labelledby":"headingThree","data-parent":"#accordionThree"}},[t("div",{staticClass:"card-body"},[t("div",{staticClass:"form-group row"},[t("label",{staticClass:"col-md-6 form-control-label"},[a._v("\r\n                                                Tiempo de respuesta respecto a su factura\r\n                                            ")]),a._v(" "),t("div",{staticClass:"col-md-3"},[t("select",{directives:[{name:"model",rawName:"v-model",value:a.calificacion.diez,expression:"calificacion.diez"}],staticClass:"form-control",on:{change:function(t){var e=Array.prototype.filter.call(t.target.options,function(a){return a.selected}).map(function(a){return"_value"in a?a._value:a.value});a.$set(a.calificacion,"diez",t.target.multiple?e:e[0])}}},[t("option",{attrs:{value:"4"}},[a._v("Excelente")]),a._v(" "),t("option",{attrs:{value:"3"}},[a._v("Bien")]),a._v(" "),t("option",{attrs:{value:"2"}},[a._v("Regular")]),a._v(" "),t("option",{attrs:{value:"1"}},[a._v("Deficiente")])])])]),a._v(" "),t("div",{staticClass:"form-group row"},[t("label",{staticClass:"col-md-6 form-control-label"},[a._v("\r\n                                                Actitud y atención a la hora de hacer una consulta o reclamación\r\n                                            ")]),a._v(" "),t("div",{staticClass:"col-md-3"},[t("select",{directives:[{name:"model",rawName:"v-model",value:a.calificacion.once,expression:"calificacion.once"}],staticClass:"form-control",on:{change:function(t){var e=Array.prototype.filter.call(t.target.options,function(a){return a.selected}).map(function(a){return"_value"in a?a._value:a.value});a.$set(a.calificacion,"once",t.target.multiple?e:e[0])}}},[t("option",{attrs:{value:"4"}},[a._v("Excelente")]),a._v(" "),t("option",{attrs:{value:"3"}},[a._v("Bien")]),a._v(" "),t("option",{attrs:{value:"2"}},[a._v("Regular")]),a._v(" "),t("option",{attrs:{value:"1"}},[a._v("Deficiente")])])])]),a._v(" "),t("div",{staticClass:"form-group row"},[t("label",{staticClass:"col-md-6 form-control-label"},[a._v("\r\n                                                Facilidad para contactar con la persona adecuada\r\n                                            ")]),a._v(" "),t("div",{staticClass:"col-md-3"},[t("select",{directives:[{name:"model",rawName:"v-model",value:a.calificacion.doce,expression:"calificacion.doce"}],staticClass:"form-control",on:{change:function(t){var e=Array.prototype.filter.call(t.target.options,function(a){return a.selected}).map(function(a){return"_value"in a?a._value:a.value});a.$set(a.calificacion,"doce",t.target.multiple?e:e[0])}}},[t("option",{attrs:{value:"4"}},[a._v("Excelente")]),a._v(" "),t("option",{attrs:{value:"3"}},[a._v("Bien")]),a._v(" "),t("option",{attrs:{value:"2"}},[a._v("Regular")]),a._v(" "),t("option",{attrs:{value:"1"}},[a._v("Deficiente")])])])]),a._v(" "),t("div",{staticClass:"form-group row"},[t("label",{staticClass:"col-md-6 form-control-label"},[a._v("\r\n                                                Nivel de información de las facturas enviadas\r\n                                            ")]),a._v(" "),t("div",{staticClass:"col-md-3"},[t("select",{directives:[{name:"model",rawName:"v-model",value:a.calificacion.trece,expression:"calificacion.trece"}],staticClass:"form-control",on:{change:function(t){var e=Array.prototype.filter.call(t.target.options,function(a){return a.selected}).map(function(a){return"_value"in a?a._value:a.value});a.$set(a.calificacion,"trece",t.target.multiple?e:e[0])}}},[t("option",{attrs:{value:"4"}},[a._v("Excelente")]),a._v(" "),t("option",{attrs:{value:"3"}},[a._v("Bien")]),a._v(" "),t("option",{attrs:{value:"2"}},[a._v("Regular")]),a._v(" "),t("option",{attrs:{value:"1"}},[a._v("Deficiente")])])])]),a._v(" "),t("div",{staticClass:"form-group row"},[t("label",{staticClass:"col-md-6 form-control-label"},[a._v("\r\n                                                Nivel de satisfacción general con este servicio\r\n                                            ")]),a._v(" "),t("div",{staticClass:"col-md-3"},[t("select",{directives:[{name:"model",rawName:"v-model",value:a.calificacion.catorce,expression:"calificacion.catorce"}],staticClass:"form-control",on:{change:function(t){var e=Array.prototype.filter.call(t.target.options,function(a){return a.selected}).map(function(a){return"_value"in a?a._value:a.value});a.$set(a.calificacion,"catorce",t.target.multiple?e:e[0])}}},[t("option",{attrs:{value:"4"}},[a._v("Excelente")]),a._v(" "),t("option",{attrs:{value:"3"}},[a._v("Bien")]),a._v(" "),t("option",{attrs:{value:"2"}},[a._v("Regular")]),a._v(" "),t("option",{attrs:{value:"1"}},[a._v("Deficiente")])])])])])])])]),a._v(" "),t("div",{staticClass:"accordion",attrs:{id:"accordionFour"}},[t("div",{staticClass:"card"},[a._m(4),a._v(" "),t("div",{staticClass:"collapse",attrs:{id:"collapseFour","aria-labelledby":"headingFour","data-parent":"#accordionFour"}},[t("div",{staticClass:"card-body"},[t("div",{staticClass:"form-group row"},[t("label",{staticClass:"col-md-6 form-control-label"},[a._v("\r\n                                                Cumplimiento del plazo de entrega acordado\r\n                                            ")]),a._v(" "),t("div",{staticClass:"col-md-3"},[t("select",{directives:[{name:"model",rawName:"v-model",value:a.calificacion.quince,expression:"calificacion.quince"}],staticClass:"form-control",on:{change:function(t){var e=Array.prototype.filter.call(t.target.options,function(a){return a.selected}).map(function(a){return"_value"in a?a._value:a.value});a.$set(a.calificacion,"quince",t.target.multiple?e:e[0])}}},[t("option",{attrs:{value:"4"}},[a._v("Excelente")]),a._v(" "),t("option",{attrs:{value:"3"}},[a._v("Bien")]),a._v(" "),t("option",{attrs:{value:"2"}},[a._v("Regular")]),a._v(" "),t("option",{attrs:{value:"1"}},[a._v("Deficiente")])])])]),a._v(" "),t("div",{staticClass:"form-group row"},[t("label",{staticClass:"col-md-6 form-control-label"},[a._v("Cumplimiento en las cantidades entregadas de acuerdo con lo acordado")]),a._v(" "),t("div",{staticClass:"col-md-3"},[t("select",{directives:[{name:"model",rawName:"v-model",value:a.calificacion.diesiseis,expression:"calificacion.diesiseis"}],staticClass:"form-control",on:{change:function(t){var e=Array.prototype.filter.call(t.target.options,function(a){return a.selected}).map(function(a){return"_value"in a?a._value:a.value});a.$set(a.calificacion,"diesiseis",t.target.multiple?e:e[0])}}},[t("option",{attrs:{value:"4"}},[a._v("Excelente")]),a._v(" "),t("option",{attrs:{value:"3"}},[a._v("Bien")]),a._v(" "),t("option",{attrs:{value:"2"}},[a._v("Regular")]),a._v(" "),t("option",{attrs:{value:"1"}},[a._v("Deficiente")])])])]),a._v(" "),t("div",{staticClass:"form-group row"},[t("label",{staticClass:"col-md-6 form-control-label"},[a._v("Cumplimiento a las especificaciones de embalaje y transporte de acuerdo con lo solicitado")]),a._v(" "),t("div",{staticClass:"col-md-3"},[t("select",{directives:[{name:"model",rawName:"v-model",value:a.calificacion.diesisiete,expression:"calificacion.diesisiete"}],staticClass:"form-control",on:{change:function(t){var e=Array.prototype.filter.call(t.target.options,function(a){return a.selected}).map(function(a){return"_value"in a?a._value:a.value});a.$set(a.calificacion,"diesisiete",t.target.multiple?e:e[0])}}},[t("option",{attrs:{value:"4"}},[a._v("Excelente")]),a._v(" "),t("option",{attrs:{value:"3"}},[a._v("Bien")]),a._v(" "),t("option",{attrs:{value:"2"}},[a._v("Regular")]),a._v(" "),t("option",{attrs:{value:"1"}},[a._v("Deficiente")])])])]),a._v(" "),t("div",{staticClass:"form-group row"},[t("label",{staticClass:"col-md-6 form-control-label"},[a._v("\r\n                                                Cumplimiento a las especificaciones del producto de acuerdo con lo solicitado\r\n                                            ")]),a._v(" "),t("div",{staticClass:"col-md-3"},[t("select",{directives:[{name:"model",rawName:"v-model",value:a.calificacion.diesiocho,expression:"calificacion.diesiocho"}],staticClass:"form-control",on:{change:function(t){var e=Array.prototype.filter.call(t.target.options,function(a){return a.selected}).map(function(a){return"_value"in a?a._value:a.value});a.$set(a.calificacion,"diesiocho",t.target.multiple?e:e[0])}}},[t("option",{attrs:{value:"4"}},[a._v("Excelente")]),a._v(" "),t("option",{attrs:{value:"3"}},[a._v("Bien")]),a._v(" "),t("option",{attrs:{value:"2"}},[a._v("Regular")]),a._v(" "),t("option",{attrs:{value:"1"}},[a._v("Deficiente")])])])])])])])]),a._v(" "),t("div",{staticClass:"form-row"},[t("div",{staticClass:"form-group col-md-6"},[t("label",[a._v("Evaluador")]),a._v(" "),t("v-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{options:a.listaEmpleados,id:"elabora_empleado_id",name:"elabora_empleado_id",label:"name","data-vv-name":"Elabora empleado"},model:{value:a.calificacion.evaluador,callback:function(t){a.$set(a.calificacion,"evaluador",t)},expression:"calificacion.evaluador"}}),a._v(" "),t("span",{staticClass:"text-danger"},[a._v(a._s(a.errors.first("Elabora empleado")))])],1),a._v(" "),t("div",{staticClass:"form-group col-md-6"},[t("label",[a._v("Fecha de evaluacion")]),a._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:a.calificacion.fecha,expression:"calificacion.fecha"}],staticClass:"form-control",attrs:{type:"date"},domProps:{value:a.calificacion.fecha},on:{input:function(t){t.target.composing||a.$set(a.calificacion,"fecha",t.target.value)}}})])])]),a._v(" "),t("div",{staticClass:"modal-footer"},[t("button",{staticClass:"btn btn-outline-dark",attrs:{type:"button"},on:{click:function(t){return a.CerrarModalEvaluacion()}}},[t("i",{staticClass:"fas fa-window-close"}),a._v("Cerrar")]),a._v(" "),1==a.tipoAccion?t("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(t){return a.GuardarEvaluacion(1)}}},[t("i",{staticClass:"fas fa-save"}),a._v("Guardar")]):a._e(),a._v(" "),2==a.tipoAccion?t("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(t){return a.GuardarEvaluacion(0)}}},[t("i",{staticClass:"fas fa-save"}),a._v("Actualizar")]):a._e()])],1)])])])])},[function(){var a=this,t=a._self._c;return t("div",{staticClass:"form-row"},[t("div",{staticClass:"form-group col-md-2"},[t("label")]),a._v(" "),t("div",{staticClass:"form-group col-md-10"},[t("label",[t("b",[a._v("INSTRUCCIONES: Selecionar el puntaje correspondiente al desempeño observado.")])])])])},function(){var a=this._self._c;return a("div",{staticClass:"card-header",attrs:{id:"headingOne"}},[a("h5",{staticClass:"mb-0"},[a("button",{staticClass:"btn btn-link",attrs:{type:"button","data-toggle":"collapse","data-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"}},[this._v("\r\n                                            A) ATENCIÓN TELEFÓNICA / CORREO ELECTRÓNICO\r\n                                        ")])])])},function(){var a=this._self._c;return a("div",{staticClass:"card-header",attrs:{id:"headingTwo"}},[a("h5",{staticClass:"mb-0"},[a("button",{staticClass:"btn btn-link",attrs:{type:"button","data-toggle":"collapse","data-target":"#collapseTwo","aria-expanded":"true","aria-controls":"collapseTwo"}},[this._v("\r\n                                            B) ATENCIÓN COMERCIAL\r\n                                        ")])])])},function(){var a=this._self._c;return a("div",{staticClass:"card-header",attrs:{id:"headingThree"}},[a("h5",{staticClass:"mb-0"},[a("button",{staticClass:"btn btn-link",attrs:{type:"button","data-toggle":"collapse","data-target":"#collapseThree","aria-expanded":"true","aria-controls":"collapseThree"}},[this._v("\r\n                                            C) SERVICIO DE ADMINISTRACIÓN Y FACTURACION\r\n                                        ")])])])},function(){var a=this._self._c;return a("div",{staticClass:"card-header",attrs:{id:"headingFour"}},[a("h5",{staticClass:"mb-0"},[a("button",{staticClass:"btn btn-link",attrs:{type:"button","data-toggle":"collapse","data-target":"#collapseFour","aria-expanded":"true","aria-controls":"collapseFour"}},[this._v("\r\n                                            D) PRODUCTO/SERVICIO\r\n                                        ")])])])}],!1,null,null,null).exports},6741:(a,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>i});e(60173);var o=e(14941).call(void 0);const r={data:function(){return{url:"/estadocompra",isLoading_obtener:!1,edoCompra:{id:0,nombre:""},modal:0,tituloModal:"",tipoAccion:0,isLoading:!1,columns_estados:["id","nombre"],list_estados:[],options_estados:{headings:{id:"Acciones",nombre:"Nombre"},perPage:10,perPageValues:[],skin:o.skin,sortIcon:o.sortIcon,filterByColumn:!0,texts:o.texts}}},computed:{},methods:{ObtenerEstados:function(){var a=this;this.isLoading_obtener=!0,axios.get(this.url).then(function(t){a.isLoading_obtener=!1,t.data.status?a.list_estados=t.data.estados:toastr.error(t.data.mensaje)})},guardaredoCompra:function(a){var t=this;this.$validator.validate().then(function(e){e&&(t.isLoading=!0,axios({method:a?"POST":"PUT",url:a?t.url:t.url+"/"+t.id,data:{id:t.edoCompra.id,nombre:t.edoCompra.nombre}}).then(function(e){t.isLoading=!1,e.data.status?(t.cerrarModal(),t.ObtenerEstados(),a?toastr.success("Estado Agregado Correctamente"):toastr.success("Estado Actualizado Correctamente")):toastr.error(e.data.mensaje)}))})},cerrarModal:function(){this.modal=0,this.tituloModal="",this.edoCompra={}},abrirModal:function(){var a=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];this.modal=1,a?(this.tipoAccion=1,this.tituloModal="Registrar Estado"):(this.tipoAccion=2,this.tituloModal="Actualizar Estado",this.edoCompra.id=t.id,this.edoCompra.nombre=t.nombre)}},mounted:function(){this.ObtenerEstados()}};const i=(0,e(14486).A)(r,function(){var a=this,t=a._self._c;return t("main",{staticClass:"main"},[t("div",{staticClass:"container-fluid"},[t("br"),a._v(" "),t("div",{staticClass:"card"},[t("div",{staticClass:"card-header"},[t("i",{staticClass:"fa fa-align-justify"}),a._v(" Estado de compras\r\n                "),t("button",{staticClass:"btn btn-dark float-sm-right",attrs:{type:"button"},on:{click:function(t){return a.abrirModal()}}},[t("i",{staticClass:"fas fa-plus"}),a._v("Nuevo\r\n                ")])]),a._v(" "),t("div",{staticClass:"card-body"},[t("vue-element-loading",{attrs:{active:a.isLoading_obtener}}),a._v(" "),t("v-client-table",{ref:"myTable",attrs:{columns:a.columns_estados,data:a.list_estados,options:a.options_estados},scopedSlots:a._u([{key:"id",fn:function(e){return[t("div",{staticClass:"btn-group",attrs:{role:"group"}},[t("div",{staticClass:"btn-group dropup",attrs:{role:"group"}},[t("button",{staticClass:"btn btn-outline-dark dropdown-toggle",attrs:{id:"btnGroupDrop1",type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t("i",{staticClass:"fas fa-grip-horizontal"}),a._v(" Acciones\r\n                                ")]),a._v(" "),t("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"btnGroupDrop1"}},[t("button",{staticClass:"dropdown-item",attrs:{type:"button"},on:{click:function(t){return a.abrirModal(!1,e.row)}}},[t("i",{staticClass:"fas fa-edit"}),a._v("Actualizar estado.\r\n                                    ")])])])])]}}])})],1)])]),a._v(" "),t("div",{staticClass:"modal fade",class:{mostrar:a.modal},staticStyle:{display:"none"},attrs:{tabindex:"-1",role:"dialog","aria-labelledby":"myModalLabel","aria-hidden":"true"}},[t("div",{staticClass:"modal-dialog modal-dark modal-lg",attrs:{role:"document"}},[t("div",{staticClass:"modal-content"},[t("div",[t("div",{staticClass:"modal-header"},[t("h4",{staticClass:"modal-title",domProps:{textContent:a._s(a.tituloModal)}}),a._v(" "),t("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(t){return a.cerrarModal()}}},[t("span",{attrs:{"aria-hidden":"true"}},[a._v("×")])])]),a._v(" "),t("div",{staticClass:"modal-body"},[t("vue-element-loading",{attrs:{active:a.isLoading}}),a._v(" "),t("div",[t("div",{staticClass:"form-group row"},[t("label",{staticClass:"col-md-3 form-control-label",attrs:{for:"Nombre"}},[a._v("Nombre")]),a._v(" "),t("div",{staticClass:"col-md-9"},[t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:a.edoCompra.nombre,expression:"edoCompra.nombre"}],staticClass:"form-control",attrs:{type:"text",name:"Nombre",placeholder:"Nombre",autocomplete:"off",id:"Nombre"},domProps:{value:a.edoCompra.nombre},on:{input:function(t){t.target.composing||a.$set(a.edoCompra,"nombre",t.target.value)}}}),a._v(" "),t("span",{staticClass:"text-danger"},[a._v(a._s(a.errors.first("Nombre")))])])])])],1),a._v(" "),t("div",{staticClass:"modal-footer"},[t("vue-element-loading",{attrs:{active:a.isLoading}}),a._v(" "),t("div",[t("button",{staticClass:"btn btn-outline-dark",attrs:{type:"button"},on:{click:function(t){return a.cerrarModal()}}},[t("i",{staticClass:"fas fa-window-close"}),a._v("Cerrar")]),a._v(" "),1==a.tipoAccion?t("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(t){return a.guardaredoCompra(!0)}}},[t("i",{staticClass:"fas fa-save"}),a._v("Guardar")]):a._e(),a._v(" "),2==a.tipoAccion?t("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(t){return a.guardaredoCompra(!1)}}},[t("i",{staticClass:"fas fa-save"}),a._v("Actualizar")]):a._e()])],1)])])])])])},[],!1,null,null,null).exports},14941:a=>{a.exports=function(){return{dateColumns:[],listColumns:{},datepickerOptions:{locale:{cancelLabel:"Clear"}},datepickerPerColumnOptions:{},initialPage:1,perPage:10,perPageValues:[10,25,50,100],groupBy:!1,collapseGroups:!1,destroyEventBus:!1,sendEmptyFilters:!1,params:{},sortable:!0,filterable:!0,groupMeta:[],initFilters:{},customFilters:[],templates:{},debounce:250,dateFormat:"DD/MM/YYYY",dateFormatPerColumn:{},toMomentFormat:!1,skin:"table table-striped table-bordered table-hover table-sm",skinBusqueda:"table table-striped table-bordered table-hover table-sm busqueda",columnsDisplay:{},columnsDropdown:!1,texts:{count:"Mostrando del {from} al  {to} de {count} registros|{count} registros|Un registro",first:"Primero",last:"Ultimo",filter:"Buscar:",filterPlaceholder:"Buscar...",limit:"Registros:",page:"Pagina:",noResults:"No se encontraron registros",filterBy:"Filtrar por {column}",loading:"Cargando...",defaultOption:"Seleccionar {column}",columns:"Columnas"},sortIcon:{base:"fa",up:"fa-chevron-up",down:"fa-chevron-down",is:"fa-sort"},sortingAlgorithm:function(a,t){return a.sort(this.getSortFn(t))},customSorting:{},multiSorting:{},clientMultiSorting:!0,serverMultiSorting:!1,filterByColumn:!1,highlightMatches:!1,orderBy:!1,descOrderColumns:[],footerHeadings:!1,headings:{},headingsTooltips:{},pagination:{dropdown:!1,chunk:10,edge:!1,align:"center",nav:"fixed"},childRow:!1,childRowTogglerFirst:!0,uniqueKey:"id",requestFunction:!1,requestAdapter:function(a){return a},responseAdapter:function(a){var t=this.getResponseData(a);return{data:t.data,count:t.count}},requestKeys:{query:"query",limit:"limit",orderBy:"orderBy",ascending:"ascending",page:"page",byColumn:"byColumn"},rowClassCallback:!1,preserveState:!1,saveState:!1,storage:"local",columnsClasses:{},columnCondicion:[{id:1,text:"Activo"},{id:0,text:"Desactivado"}]}}},16941:(a,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>r});e(60173),e(14941).call(void 0);const o={data:function(){return{id:0,modal:0,mostrar:0,estadomodalimpuesto:null,temporal:{tipo:"",porcentaje:"",retenido:0},impuestocatalogo:[],nuevo:[]}},components:{},methods:{cargarinpuesto:function(a,t,e){this.mostrar=1,this.modal=1,this.id=t;var o=this;axios.get("comprabusquedaimpuesto/"+t).then(function(a){o.impuestocatalogo=a.data}).catch(function(a){console.log(a)})},cerrarModalInpuesto:function(){this.mostrar=1,this.modal=0,this.$emit("modalimpuestos:click",this.nuevo),this.nuevo=[],this.$emit("update",this.impuestocatalogo)},vaciar:function(){this.temporal.tipo="",this.temporal.porcentaje="",this.temporal.retenido=0},crear:function(){var a=this;this.$validator.validate().then(function(t){""!=a.temporal.tipo?""!=a.temporal.porcentaje?a.temporal.porcentaje<=0?toastr.warning("Ingrese un porcentaje válido"):t&&(a.impuestocatalogo.push({id:"0",tipo:a.temporal.tipo,porcentaje:a.temporal.porcentaje,retenido:1==a.temporal.retenido?1:0}),a.nuevo.push({id:"0",tipo:a.temporal.tipo,porcentaje:a.temporal.porcentaje,retenido:1==a.temporal.retenido?1:0}),a.vaciar()):toastr.warning("Ingrese un porcentaje"):toastr.warning("Ingrese un tipo")})},eliminar:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;if(0==a.id)this.impuestocatalogo.splice(t,1);else{var e=this,o=a.id;axios.get("impuestoeliminar/"+o).then(function(a){e.cargarinpuesto(0,e.id)}).catch(function(a){console.log(a)})}}},mounted:function(){}};const r=(0,e(14486).A)(o,function(){var a=this,t=a._self._c;return 1==a.mostrar?t("div",{staticClass:"card"},[t("div",{staticClass:"modal fade",class:{mostrar:a.modal},staticStyle:{display:"none"},attrs:{tabindex:"-1",role:"dialog","aria-labelledby":"myModalLabel","aria-hidden":"true"}},[t("div",{staticClass:"modal-dialog modal-dark modal-lg",attrs:{role:"document"}},[t("div",{staticClass:"modal-content"},[t("div",{staticClass:"modal-header"},[t("h4",{staticClass:"modal-title"},[a._v("Agregar impuestos")]),a._v(" "),t("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(t){return a.cerrarModalInpuesto()}}},[t("span",{attrs:{"aria-hidden":"true"}},[a._v("×")])])]),a._v(" "),t("div",{staticClass:"modal-body"},[t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-auto"},[t("label",[a._v("Tipo de impuestos")]),a._v(" "),t("div",{staticClass:"input-group mb-2"},[a._m(0),a._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:a.temporal.tipo,expression:"temporal.tipo"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{type:"txet",placeholder:"Tipo de impuesto"},domProps:{value:a.temporal.tipo},on:{input:function(t){t.target.composing||a.$set(a.temporal,"tipo",t.target.value)}}})])]),a._v(" "),t("div",{staticClass:"col-auto"},[t("label",[a._v("Porcentaje")]),a._v(" "),t("div",{staticClass:"input-group mb-2"},[a._m(1),a._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:a.temporal.porcentaje,expression:"temporal.porcentaje"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{type:"number",min:"0",max:"100",pattern:"^[0-9]+",placeholder:"0"},domProps:{value:a.temporal.porcentaje},on:{input:function(t){t.target.composing||a.$set(a.temporal,"porcentaje",t.target.value)}}})])]),a._v(" "),t("div",{staticClass:"col-auto"},[t("div",{staticClass:"form-check mb-2"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.temporal.retenido,expression:"temporal.retenido"}],staticClass:"ml-2",attrs:{name:"chkRetenido",type:"checkbox"},domProps:{checked:Array.isArray(a.temporal.retenido)?a._i(a.temporal.retenido,null)>-1:a.temporal.retenido},on:{change:function(t){var e=a.temporal.retenido,o=t.target,r=!!o.checked;if(Array.isArray(e)){var i=a._i(e,null);o.checked?i<0&&a.$set(a.temporal,"retenido",e.concat([null])):i>-1&&a.$set(a.temporal,"retenido",e.slice(0,i).concat(e.slice(i+1)))}else a.$set(a.temporal,"retenido",r)}}}),a._v(" "),t("label",{staticClass:"form-check-label ml-2",attrs:{for:"chkRetenido"}},[a._v("\r\n                                    Retenido\r\n                                ")])])]),a._v(" "),t("div",{staticClass:"col-auto"},[t("label"),a._v(" "),t("div",{staticClass:"mb-2"},[t("div",{staticClass:"mt-2 ml-2"},[t("button",{staticClass:"btn btn-sm btn-secondary",attrs:{type:"button"},on:{click:function(t){return a.crear()}}},[t("i",{staticClass:"fas fa-save"}),a._v(" Agregar\r\n                                    ")])])])])]),a._v(" "),a._m(2),a._v(" "),a._l(a.impuestocatalogo,function(e,o){return t("li",{staticClass:"list-group-item"},[t("div",{staticClass:"form-row"},[t("div",{staticClass:"form-group col-md-4"},[t("label",[a._v(a._s(e.tipo))])]),a._v(" "),t("div",{staticClass:"form-group col-md-2"},[t("label",[a._v(a._s(e.porcentaje))])]),a._v(" "),t("div",{staticClass:"form-group col-md-2"},[0==e.retenido?[t("label",[a._v("No")])]:a._e(),a._v(" "),1==e.retenido?[t("label",[a._v("Sí")])]:a._e()],2),a._v(" "),t("div",{staticClass:"form-group col-md-2"},[t("a",{on:{click:function(t){return a.eliminar(e,o)}}},[t("span",{staticClass:"fas fa-trash",attrs:{"arial-hidden":"true"}})])])])])})],2),a._v(" "),t("div",{staticClass:"modal-footer"},[t("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(t){return a.cerrarModalInpuesto()}}},[t("i",{staticClass:"fas fa-times"}),a._v(" Cerrar")])])])])])]):a._e()},[function(){var a=this._self._c;return a("div",{staticClass:"input-group-addon"},[a("div",{staticClass:"input-group-text"},[this._v("$")])])},function(){var a=this._self._c;return a("div",{staticClass:"input-group-addon"},[a("div",{staticClass:"input-group-text"},[this._v("%")])])},function(){var a=this,t=a._self._c;return t("div",{staticClass:"form-row mt-2 ml-3"},[t("div",{staticClass:"form-group col-md-3"},[t("p",{staticClass:"font-weight-bold"},[a._v("Tipo")])]),a._v(" "),t("div",{staticClass:"form-group col-md-2"},[t("p",{staticClass:"font-weight-bold"},[a._v("Porcentaje")])]),a._v(" "),t("div",{staticClass:"form-group col-md-2"},[t("p",{staticClass:"font-weight-bold"},[a._v("Retenido")])]),a._v(" "),t("div",{staticClass:"form-group col-md-2"},[t("label",[t("b")])])])}],!1,null,null,null).exports},20815:(a,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>c});function o(){var a,t,e="function"==typeof Symbol?Symbol:{},i=e.iterator||"@@iterator",s=e.toStringTag||"@@toStringTag";function n(e,o,i,s){var n=o&&o.prototype instanceof l?o:l,d=Object.create(n.prototype);return r(d,"_invoke",function(e,o,r){var i,s,n,l=0,d=r||[],u=!1,p={p:0,n:0,v:a,a:v,f:v.bind(a,4),d:function(t,e){return i=t,s=0,n=a,p.n=e,c}};function v(e,o){for(s=e,n=o,t=0;!u&&l&&!r&&t<d.length;t++){var r,i=d[t],v=p.p,m=i[2];e>3?(r=m===o)&&(n=i[(s=i[4])?5:(s=3,3)],i[4]=i[5]=a):i[0]<=v&&((r=e<2&&v<i[1])?(s=0,p.v=o,p.n=i[1]):v<m&&(r=e<3||i[0]>o||o>m)&&(i[4]=e,i[5]=o,p.n=m,s=0))}if(r||e>1)return c;throw u=!0,o}return function(r,d,m){if(l>1)throw TypeError("Generator is already running");for(u&&1===d&&v(d,m),s=d,n=m;(t=s<2?a:n)||!u;){i||(s?s<3?(s>1&&(p.n=-1),v(s,n)):p.n=n:p.v=n);try{if(l=2,i){if(s||(r="next"),t=i[r]){if(!(t=t.call(i,n)))throw TypeError("iterator result is not an object");if(!t.done)return t;n=t.value,s<2&&(s=0)}else 1===s&&(t=i.return)&&t.call(i),s<2&&(n=TypeError("The iterator does not provide a '"+r+"' method"),s=1);i=a}else if((t=(u=p.n<0)?n:e.call(o,p))!==c)break}catch(t){i=a,s=1,n=t}finally{l=1}}return{value:t,done:u}}}(e,i,s),!0),d}var c={};function l(){}function d(){}function u(){}t=Object.getPrototypeOf;var p=[][i]?t(t([][i]())):(r(t={},i,function(){return this}),t),v=u.prototype=l.prototype=Object.create(p);function m(a){return Object.setPrototypeOf?Object.setPrototypeOf(a,u):(a.__proto__=u,r(a,s,"GeneratorFunction")),a.prototype=Object.create(v),a}return d.prototype=u,r(v,"constructor",u),r(u,"constructor",d),d.displayName="GeneratorFunction",r(u,s,"GeneratorFunction"),r(v),r(v,s,"Generator"),r(v,i,function(){return this}),r(v,"toString",function(){return"[object Generator]"}),(o=function(){return{w:n,m}})()}function r(a,t,e,o){var i=Object.defineProperty;try{i({},"",{})}catch(a){i=0}r=function(a,t,e,o){function s(t,e){r(a,t,function(a){return this._invoke(t,e,a)})}t?i?i(a,t,{value:e,enumerable:!o,configurable:!o,writable:!o}):a[t]=e:(s("next",0),s("throw",1),s("return",2))},r(a,t,e,o)}function i(a,t,e,o,r,i,s){try{var n=a[i](s),c=n.value}catch(a){return void e(a)}n.done?t(c):Promise.resolve(c).then(o,r)}function s(a){return function(){var t=this,e=arguments;return new Promise(function(o,r){var s=a.apply(t,e);function n(a){i(s,o,r,n,c,"next",a)}function c(a){i(s,o,r,n,c,"throw",a)}n(void 0)})}}e(14941).call(void 0);const n={data:function(){return{listaProyectos:[],mostrarTodos:!1,proyectos:[],dateStart:null,dateEnd:null}},mounted:function(){this.allProyects()},computed:{nombrePeriodo:function(){return this.mes&&this.anio?"".concat(2===this.mes?"Febrero":"Agosto"," ").concat(this.anio):""}},methods:{allProyects:function(){var a=this;return s(o().m(function t(){var e;return o().w(function(t){for(;;)switch(t.n){case 0:return t.n=1,axios.get("generales/proyectos/asd");case 1:return e=t.v,a.listaProyectos=e.data.proyectos,t.a(2,e.data.proyectos)}},t)}))()},onToggleProyectos:function(){var a=this;return s(o().m(function t(){return o().w(function(t){for(;;)switch(t.n){case 0:if(!a.mostrarTodos){t.n=2;break}return t.n=1,a.allProyects();case 1:a.proyectos=t.v,t.n=3;break;case 2:a.proyectos=[];case 3:return t.a(2)}},t)}))()},dateRange:function(){var a=this;return s(o().m(function t(){return o().w(function(t){for(;;)switch(t.n){case 0:a.dateStart&&a.dateEnd&&new Date(a.dateStart)>new Date(a.dateEnd)&&(alert("La fecha de inicio no puede ser posterior a la fecha de fin."),a.dateEnd="",a.periodStart=null,a.periodEnd=null,a.periodSelected=!1,a.mes=null,a.anio=null),a.$emit("date-range-selected",{start:a.dateStart,end:a.dateEnd});case 1:return t.a(2)}},t)}))()},DescargarReporte:function(){if(this.proyectos&&0!==this.proyectos.length){var a="compras/reporte/generalcompras/"+this.proyectos.reduce(function(a,t){return a+"".concat(t.id,"&")},"");this.dateStart&&this.dateEnd?a+="?inicio=".concat(this.dateStart,"&fin=").concat(this.dateEnd):this.periodStart&&this.periodEnd&&(a+="?inicio_p=".concat(this.periodStart,"&fin_p=").concat(this.periodEnd)),window.open(a,"_blank"),this.dateStart=null,this.dateEnd=null,this.proyectos=[]}else toastr.warning("Seleccione un proyecto")}}};const c=(0,e(14486).A)(n,function(){var a=this,t=a._self._c;return t("main",{staticClass:"main"},[t("div",{staticClass:"container-fluid"},[t("div",{staticClass:"card shadow-sm",staticStyle:{"min-height":"80vh"}},[a._m(0),a._v(" "),t("div",{staticClass:"card-body"},[t("div",{staticClass:"d-flex justify-content-end border-top mb-4",staticStyle:{"border-top":"6px solid #000"}}),a._v(" "),t("i",{staticClass:"fa fa-calendar mr-2 text-primary"}),a._v(" "),t("strong",[a._v("Generar Reporte por Rango de Fechas")]),a._v(" "),t("div",{staticClass:"row g-3 mb-4"},[t("div",{staticClass:"col-md-3"},[t("label",{staticClass:"text-muted small"},[a._v("Fecha inicial")]),a._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:a.dateStart,expression:"dateStart"}],staticClass:"form-control",attrs:{type:"date"},domProps:{value:a.dateStart},on:{change:a.dateRange,input:function(t){t.target.composing||(a.dateStart=t.target.value)}}})]),a._v(" "),t("div",{staticClass:"col-md-3"},[t("label",{staticClass:"text-muted small"},[a._v("Fecha final")]),a._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:a.dateEnd,expression:"dateEnd"}],staticClass:"form-control",attrs:{type:"date"},domProps:{value:a.dateEnd},on:{change:a.dateRange,input:function(t){t.target.composing||(a.dateEnd=t.target.value)}}})]),a._v(" "),t("div",{staticClass:"col-md-6"},[t("label",{staticClass:"text-muted small"},[a._v("Proyectos")]),a._v(" "),t("v-select",{attrs:{label:"nombre_corto",multiple:"",options:a.listaProyectos},model:{value:a.proyectos,callback:function(t){a.proyectos=t},expression:"proyectos"}})],1)]),a._v(" "),t("div",{staticClass:"row mb-2"},[t("div",{staticClass:"col-md-12"},[t("div",{staticClass:"form-check"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.mostrarTodos,expression:"mostrarTodos"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"defaultCheck1"},domProps:{checked:Array.isArray(a.mostrarTodos)?a._i(a.mostrarTodos,null)>-1:a.mostrarTodos},on:{change:[function(t){var e=a.mostrarTodos,o=t.target,r=!!o.checked;if(Array.isArray(e)){var i=a._i(e,null);o.checked?i<0&&(a.mostrarTodos=e.concat([null])):i>-1&&(a.mostrarTodos=e.slice(0,i).concat(e.slice(i+1)))}else a.mostrarTodos=r},a.onToggleProyectos]}}),a._v(" "),t("label",{staticClass:"form-check-label text-muted",attrs:{for:"defaultCheck1"}},[a._v("\r\n                    Todos los proyectos\r\n                    ")])])])]),a._v(" "),t("button",{staticClass:"btn btn-success px-4 mb-4",on:{click:function(t){return a.DescargarReporte()}}},[t("i",{staticClass:"fas fa-file-excel mr-2"}),a._v("\r\n            Generar Reporte\r\n            ")])])])])])},[function(){var a=this,t=a._self._c;return t("div",{staticClass:"card-header bg-white border-0 pb-0"},[t("h5",{staticClass:"mb-0"},[t("i",{staticClass:"fa fa-file-text mr-2 text-success"}),a._v(" "),t("strong",[a._v("Reporte General de Compras")])])])}],!1,null,null,null).exports},24553:(a,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>s});var o=e(60173),r=e(14941).call(void 0);const i={data:function(){return{url:"/catmantenimientovehiculos",desabilitado:0,catalogo:{id:0,descripcion:"",codigo:"",marca:"",comentario:""},centro_costo:[],modal:0,tituloModal:"",tipoAccion:0,isLoading:!1,columns:["id","descripcion","codigo","marca","comentario"],tableData:[],options:{headings:{id:"Acción",descripcion:"Descripción"},perPage:10,perPageValues:[],skin:r.skin,sortIcon:r.sortIcon,sortable:["descripcion","codigo","marca","comentario"],filterable:["descripcion","codigo","marca","comentario"],filterByColumn:!0,texts:r.texts}}},computed:{},methods:{getData:function(){var a=this;axios.get(a.url).then(function(t){a.tableData=t.data}).catch(function(a){console.log(a)})},guardarServicio:function(a){var t=this;this.$validator.validate().then(function(e){if(e){t.isLoading=!0;var o=t;axios({method:a?"POST":"PUT",url:a?o.url:o.url+"/"+t.id,data:{id:t.catalogo.id,descripcion:t.catalogo.descripcion,codigo:t.catalogo.codigo,marca:t.catalogo.marca,comentario:t.catalogo.comentario}}).then(function(t){o.isLoading=!1,t.data.status?"error"===t.data.status?swal({type:"error",html:"Ha ocurrido un error notifiqué al administrador y recarge la página"}):(o.cerrarModal(),a?(toastr.success("Estado Agregado Correctamente"),o.cerrarModalAbrir()):toastr.success("Estado Actualizado Correctamente")):swal({type:"error",html:t.data.errors.join("<br>")})}).catch(function(a){console.log(a)})}})},cerrarModal:function(){this.modal=0,this.tituloModal="",o.A.resetObject(this.catalogo)},cerrarModalAbrir:function(){this.$emit("cerrarAbrir")},abrirModal:function(a,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];if("catalogo"===a)switch(t){case"registrar":this.modal=1,this.desabilitado=1,this.tituloModal="Registrar Catalogo",o.A.resetObject(this.catalogo),this.tipoAccion=1;break;case"actualizar":this.modal=1,this.desabilitado=1,this.tituloModal="Actualizar Catalogo",this.catalogo.id=e.id,this.tipoAccion=2,this.catalogo.descripcion=e.descripcion,this.catalogo.codigo=e.codigo,this.catalogo.marca=e.marca,this.catalogo.comentario=e.comentario}}},mounted:function(){this.getData(),this.$root.limpiarDashboard()}};const s=(0,e(14486).A)(i,function(){var a=this,t=a._self._c;return t("main",{staticClass:"main"},[t("div",{staticClass:"modal fade",class:{mostrar:a.modal},staticStyle:{display:"none"},attrs:{tabindex:"-1",role:"dialog","aria-labelledby":"myModalLabel","aria-hidden":"true"}},[t("vue-element-loading",{attrs:{active:a.isLoading}}),a._v(" "),t("div",{staticClass:"modal-dialog modal-dark modal-lg",attrs:{role:"document"}},[t("div",{staticClass:"modal-content"},[t("div",[t("div",{staticClass:"modal-header"},[t("h4",{staticClass:"modal-title",domProps:{textContent:a._s(a.tituloModal)}}),a._v(" "),t("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(t){return a.cerrarModal()}}},[t("span",{attrs:{"aria-hidden":"true"}},[a._v("×")])])]),a._v(" "),t("div",{staticClass:"modal-body"},[t("input",{attrs:{type:"hidden",name:"id"}}),a._v(" "),t("div",{staticClass:"form-group row"},[t("label",{staticClass:"col-md-3 form-control-label"},[a._v("Descripción")]),a._v(" "),t("div",{staticClass:"col-md-6"},[t("textarea",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:a.catalogo.descripcion,expression:"catalogo.descripcion"}],staticClass:"form-control",attrs:{"data-vv-name":"descripcion",placeholder:"Descripción",autocomplete:"off",rows:"8",cols:"80"},domProps:{value:a.catalogo.descripcion},on:{input:function(t){t.target.composing||a.$set(a.catalogo,"descripcion",t.target.value)}}}),a._v(" "),t("span",{staticClass:"text-danger"},[a._v(a._s(a.errors.first("descripcion")))])])]),a._v(" "),t("div",{staticClass:"form-group row"},[t("label",{staticClass:"col-md-3 form-control-label"},[a._v("Codigo")]),a._v(" "),t("div",{staticClass:"col-md-6"},[t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:a.catalogo.codigo,expression:"catalogo.codigo"}],staticClass:"form-control",attrs:{type:"text","data-vv-name":"codigo",placeholder:"Codígo",autocomplete:"off"},domProps:{value:a.catalogo.codigo},on:{input:function(t){t.target.composing||a.$set(a.catalogo,"codigo",t.target.value)}}}),a._v(" "),t("span",{staticClass:"text-danger"},[a._v(a._s(a.errors.first("codigo")))])])]),a._v(" "),t("div",{staticClass:"form-group row"},[t("label",{staticClass:"col-md-3 form-control-label"},[a._v("Marca")]),a._v(" "),t("div",{staticClass:"col-md-6"},[t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:a.catalogo.marca,expression:"catalogo.marca"}],staticClass:"form-control",attrs:{type:"text","data-vv-name":"marca",placeholder:"Marca",autocomplete:"off"},domProps:{value:a.catalogo.marca},on:{input:function(t){t.target.composing||a.$set(a.catalogo,"marca",t.target.value)}}}),a._v(" "),t("span",{staticClass:"text-danger"},[a._v(a._s(a.errors.first("marca")))])])]),a._v(" "),t("div",{staticClass:"form-group row"},[t("label",{staticClass:"col-md-3 form-control-label"},[a._v("Comentario")]),a._v(" "),t("div",{staticClass:"col-md-6"},[t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:a.catalogo.comentario,expression:"catalogo.comentario"}],staticClass:"form-control",attrs:{type:"text","data-vv-name":"comentario",placeholder:"Comentario",autocomplete:"off"},domProps:{value:a.catalogo.comentario},on:{input:function(t){t.target.composing||a.$set(a.catalogo,"comentario",t.target.value)}}}),a._v(" "),t("span",{staticClass:"text-danger"},[a._v(a._s(a.errors.first("comentario")))])])])]),a._v(" "),t("div",{staticClass:"modal-footer"},[t("button",{staticClass:"btn btn-outline-dark",attrs:{type:"button"},on:{click:function(t){return a.cerrarModal()}}},[t("i",{staticClass:"fas fa-window-close"}),a._v(" Cerrar")]),a._v(" "),1==a.tipoAccion?t("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(t){return a.guardarServicio(1)}}},[t("i",{staticClass:"fas fa-save"}),a._v(" Guardar")]):a._e(),a._v(" "),2==a.tipoAccion?t("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(t){return a.guardarServicio(0)}}},[t("i",{staticClass:"fas fa-save"}),a._v(" Actualizar")]):a._e()])])])])],1)])},[],!1,null,null,null).exports},25672:(a,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>i});var o=e(14941).call(void 0);const r={data:function(){return{isLoading:!1,nuevo:null,solicitud:[],ver_partidas:!1,detalles_solicitudes:null,tipo_cambio:0,moneda:0,list_requis:[],columns_requis:["id","folio","nombrep","fecha_solicitud","nombre_solicita","nombre_autoriza","condicion"],options:{headings:{id:"Acciones",nombrep:"Proyecto",nombre_solicita:"Empleado que solicita",nombre_autoriza:"Empleado que autoriza",condicion:"Recibir"},perPage:10,perPageValues:[],skin:o.skin,sortIcon:o.sortIcon,filterByColumn:!0,texts:o.texts},list_partidas:[],columns_partidas:["req.descripciona","req.cantidad_compra","req.um","req.fecha_requerido"],options_partidas:{headings:{"req.descripciona":"Articulo/Servicio","req.um":"Unidad","req.fecha_requerido":"Fecha requerida","req.cantidad_compra":"Cantidad a comprar"},perPage:10,perPageValues:[],skin:o.skin,sortIcon:o.sortIcon,filterByColumn:!0,texts:o.texts}}},methods:{getData:function(){var a=this;this.isLoading=!0,axios.get("/requisicionesrecibir").then(function(t){a.isLoading=!1,t.data.status?a.list_requis=t.data.requisiciones:toastr.error(t.data.mensaje)})},cargardetalle:function(a){var t=this;this.isLoading=!0,this.ver_partidas=!0,axios.get("/requisicioncompserart/"+a).then(function(a){t.detalles_solicitudes=a.data,t.list_partidas=a.data,t.isLoading=!1})},autorizar:function(a,t){var e=this;if(this.isLoading=!0,4==a)swal({title:"¿Autorizar requisición?",type:"warning",showCancelButton:!0,confirmButtonColor:"#4dbd74",cancelButtonColor:"#f86c6b",confirmButtonText:"Aceptar",cancelButtonText:"Cancelar",reverseButtons:!0}).then(function(o){e.isLoading=!1,o.value&&axios.post("/autorizarequisicionproyectos",{id:t,estado:a}).then(function(a){toastr.success("Correcto","Requisición aprobada correctamente"),e.getData()})});else{var o=[10,11];swal({title:"Direccionar a...",input:"select",inputOptions:["Almacén","Supervisor"],inputPlaceholder:"Seleccionar Estado",confirmButtonText:'Continuar <i class="fa fa-arrow-right></i>',showCancelButton:!0,customClass:"form-check form-check-inline",inputValidator:function(a){return!a&&"Se Requiere Elegir un Elemento"}}).then(function(a){e.isLoading=!1,a.value&&axios.post("/autorizarequisicionproyectos",{id:t,estado:o[a.value]}).then(function(a){4==a?toastr.success("Requisición recibida correctamente"):toastr.warning("Requisición rechazada"),e.getData()})})}},descargar:function(a){window.open("descargar-requisicionew/"+a.id,"_blank")},guardarcorrecion:function(a,t){axios.post("agregar/correciones/partidas",{requisicion_id:t.rid,pda:t.pda,articulo_servicio:null!=t.articulo_id?1:0,articulo_servicio_id:null!=t.articulo_id?t.articulo_id:t.servicio_id,comentario:a.target.value}).then(function(a){toastr.success("Guardado")})},regresar:function(){this.ver_partidas=!1,this.detalles_solicitudes=null}},mounted:function(){this.getData()}};const i=(0,e(14486).A)(r,function(){var a=this,t=a._self._c;return t("div",{staticClass:"card border-dark"},[t("div",{staticClass:"card-header bg-dark text-white"},[t("i",{staticClass:"fa fa-align-justify"}),a._v(" Requisiciones por recibir:\r\n        "),a.ver_partidas?t("button",{staticClass:"btn btn-secondary float-sm-right",attrs:{type:"button"},on:{click:function(t){return a.regresar()}}},[t("i",{staticClass:"icon-arrow-left"}),a._v("Regresar\r\n        ")]):a._e()]),a._v(" "),t("vue-element-loading",{attrs:{active:a.isLoading}}),a._v(" "),t("div",{staticClass:"card-body"},[t("v-client-table",{directives:[{name:"show",rawName:"v-show",value:!a.ver_partidas,expression:"!ver_partidas"}],attrs:{data:a.list_requis,columns:a.columns_requis,options:a.options},scopedSlots:a._u([{key:"id",fn:function(e){return[t("div",{staticClass:"btn-group",attrs:{role:"group","aria-label":"Button group with nested dropdown"}},[t("div",{staticClass:"btn-group dropup",attrs:{role:"group"}},[t("button",{staticClass:"btn btn-outline-dark dropdown-toggle",attrs:{id:"btnGroupDrop1",type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t("i",{staticClass:"fas fa-grip-horizontal"}),a._v(" Acciones\r\n                        ")]),a._v(" "),t("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"btnGroupDrop1"}},[t("button",{staticClass:"dropdown-item",attrs:{type:"button"},on:{click:function(t){return a.cargardetalle(e.row.id)}}},[t("i",{staticClass:"fas fa-eye"}),a._v(" Ver partidas\r\n                            ")]),a._v(" "),t("button",{staticClass:"dropdown-item",on:{click:function(t){return a.descargar(e.row)}}},[t("i",{staticClass:"fas fa-file-pdf"}),a._v("Descargar Requisición\r\n                            ")])])])])]}},{key:"condicion",fn:function(e){return[t("button",{staticClass:"btn btn-sm btn-success",on:{click:function(t){return a.autorizar(4,e.row.id)}}},[t("i",{staticClass:"fas fa-check"}),a._v(" Sí")]),a._v(" "),t("button",{staticClass:"btn btn-sm btn-danger",on:{click:function(t){return a.autorizar(0,e.row.id)}}},[t("i",{staticClass:"fas fa-close"}),a._v(" No")])]}}])}),a._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:a.ver_partidas,expression:"ver_partidas"}]},[t("v-client-table",{attrs:{data:a.list_partidas,options:a.options_partidas,columns:a.columns_partidas},scopedSlots:a._u([{key:"req.descripciona",fn:function(e){return[t("textarea",{attrs:{rows:"6",cols:"40"},domProps:{value:null!=e.row.correccion?e.row.correccion.comentario:e.row.req.descripciona+" "+(null==e.row.req.comentario?"":e.row.req.comentario)},on:{keyup:function(t){return!t.type.indexOf("key")&&a._k(t.keyCode,"enter",13,t.key,"Enter")?null:a.guardarcorrecion(t,e.row.req)}}})]}}])})],1)],1)],1)},[],!1,null,null,null).exports},36354:(a,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>l});var o=e(60173);function r(a){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},r(a)}function i(a,t){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(a);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})),e.push.apply(e,o)}return e}function s(a){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?i(Object(e),!0).forEach(function(t){n(a,t,e[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach(function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))})}return a}function n(a,t,e){return(t=function(a){var t=function(a,t){if("object"!=r(a)||!a)return a;var e=a[Symbol.toPrimitive];if(void 0!==e){var o=e.call(a,t||"default");if("object"!=r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(a)}(a,"string");return"symbol"==r(t)?t:t+""}(t))in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}const c={data:function(){return n(n(n(n({listaPeriodoEntrega:[{id:1,name:"1 día"},{id:2,name:"2 días"},{id:3,name:"3 días"},{id:4,name:"4 días"},{id:5,name:"5 días"},{id:6,name:"6 días"},{id:7,name:"1 semana"},{id:8,name:"2 semanas"},{id:9,name:"3 semanas"},{id:10,name:"4 semanas"},{id:11,name:"5 semanas"},{id:12,name:"6 semanas"},{id:13,name:"7 semanas"},{id:14,name:"8 semanas"},{id:15,name:"9 semanas"},{id:16,name:"10 semanas"},{id:17,name:"11 semanas"},{id:18,name:"12 semanas"},{id:19,name:"13 semanas"},{id:20,name:"14 semanas"},{id:21,name:"15 semanas"},{id:22,name:"16 semanas"},{id:23,name:"17 semanas"},{id:24,name:"18 semanas"},{id:25,name:"19 semanas"},{id:26,name:"20 semanas"},{id:27,name:"21 semanas"},{id:28,name:"22 semanas"},{id:29,name:"23 semanas"},{id:30,name:"24 semanas"},{id:31,name:"25 semanas"},{id:32,name:"26 semanas"},{id:33,name:"27 semanas"},{id:34,name:"28 semanas"},{id:35,name:"29 semanas"},{id:36,name:"30 semanas"},{id:37,name:"31 semanas"},{id:38,name:"32 semanas"},{id:39,name:"33 semanas"},{id:40,name:"34 semanas"},{id:41,name:"35 semanas"},{id:42,name:"36 semanas"},{id:43,name:"37 semanas"},{id:44,name:"38 semanas"},{id:45,name:"39 semanas"},{id:46,name:"40 semanas"}],preq:{cotizacionre:"",cotizacionreid:""},mostrar:0,getDoc:!1,upload:!1,isLoading:!1,widgets:{modalimpuestos:!1},datosBancarios:[],selected:[],listImpuestos:[],conrequisicion:0,asignacion_costos:0,enabledb:!0,compra:{id:0,transferencia:"",cuenta:"",folio:"",condicion:0,ordenes_formato:"",condicion_pago:"",periodo_entrega:"",fecha_orden:"",lugar_entrega:"",observaciones:"",total:"",tipo_cambio:0,moneda:"",referencia:"",cie:"",sucursal:"",titular:"",proveedore_id:"",cotizacione_id:"",estado_id:"",elabora_empleado_id:"",autoriza_empleado_id:"",rango_dias:0,pagos:0,descuento:0,proyecto_id:"",comentario_condicion_pago:"",fecha_probable_pago:"",prioridad:"",nombre_categoria:"",proveedore_csct_id:""},nombre_categoria:"",tituloModal:"",Metodo:"",tipoAccion:0,listaProvedores:[],listaProvedores_CSCT:[],listaCotizaciones:[],listaEmpleados:[],listaEmpleados_elabora:[],listaProyectos:[],listaCondicionPago:[],tableData:[],mostrareinpuesto:0,nuevo:null,ClassL_a:"btn btn-info",BtnL_a:"Actualizar",BtnL_a2:"Subir Archivo"},"Metodo",""),"array_asignaciones",[]),"centro_costo",[]),"tabla_asignacion",{proyecto_id:"",porcentaje:"",centro_costo_id:""})},components:{modalimpuestos:function(a){return e.e(392).then(function(){return a(e(16941))}.bind(null,e)).catch(e.oe)},partidas:function(a){return e.e(392).then(function(){return a(e(71076))}.bind(null,e)).catch(e.oe)}},watch:{compra:{deep:!0,handler:function(a,t){var e=undefined;null!=a.proyecto_id&&(e.nombre_categoria=a.proyecto_id.categoria)}}},methods:{regresardb:function(){this.enabledb=!0},llenarCamposBanco:function(a){this.compra.cuenta="",this.compra.clabe="",this.compra.titular="","0"===a.target.value?(this.enabledb=!1,this.compra.transferencia=""):(this.enabledb=!0,this.compra.cuenta=this.datosBancarios[a.target.selectedIndex].cuenta,this.compra.clabe=this.datosBancarios[a.target.selectedIndex].clabe,this.compra.titular=this.compra.proveedore_id.razon_social)},buscarDatosBancarios:function(a){var t=this;this.enabledb=!0,""!=a&&axios.get("compras/proveedores/bancarios/"+a.id).then(function(a){t.datosBancarios=a.data}).catch(function(a){console.error(a)})},creardates:function(){$("#fechas").html("")},cambiarcondicion:function(){$("#fechas").html("")},getListas:function(){var a=this;a.mostrar=1,axios.get("compras/proveedores/todos").then(function(t){t.data.status?a.listaProvedores=t.data.proveedores.map(function(a){return s(s({},a),{},{razon_social:"".concat(a.id," - ").concat(a.nombre," (").concat(a.razon_social,")")})}):toastr.error(t.data.mensaje)}),axios.get("/proyecto-listar-todos").then(function(t){a.listaProyectos=[],t.data.forEach(function(t){a.listaProyectos.push({id:t.id,name:t.nombre_corto+" "+t.nombre,categoria:t.nombre_categoria,nombre_corto:t.nombre_corto})})}).catch(function(a){console.log(a)}),a.listaEmpleados=[],a.listaEmpleados.push({id:164,name:"DIEGO CRUZ MARTINEZ"}),a.listaEmpleados_elabora=[{id:1149,name:"DOMINICK TOVANY MARTINEZ"},{id:422,name:"ADRIANA HERRERA FLORES"},{id:833,name:"DIANA LARISA PEREZ DIAZ"},{id:893,name:"JOSEFINA GUADALUPE LOPEZ BARTOLO"},{id:154,name:"VALERIA HERNANDEZ MARTINEZ"},{id:390,name:"MARIA DE LA LUZ MARTINEZ HERRERA"}],axios.get("/condicion_pago/ver").then(function(t){a.listaCondicionPago=t.data,a.isLoading=!1}).catch(function(a){console.log(a)})},cargarcardprincipal:function(a,t){var e=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];this.p(r),this.isLoading=!0;if(this.getListas(),this.tableData=r,"compra"===a)switch(t){case"registrar":this.tituloModal="Registrar compra",this.Metodo="Nuevo",o.A.resetObject(this.compra),this.tipoAccion=1,this.disabled=0,this.principal=!0,this.mostrareinpuesto=0;break;case"actualizar":this.selected=[],this.upload=!0,o.A.resetObject(this.compra),this.array_asignaciones=[],this.tituloModal="Actualizar compra",this.compra.id=r.id,this.tipoAccion=2,this.disabled=1,this.mostrareinpuesto=1,this.compra.folio=r.folio,this.compra.ordenes_formato=r.ordenes_formato,this.compra.condicion_pago=r.condicion_pago_id,this.compra.periodo_entrega={id:0,name:r.periodo_entrega},this.compra.fecha_orden=r.fecha_orden,this.compra.lugar_entrega=r.lugar_entrega,this.compra.observaciones=r.observaciones,this.compra.descuento=r.descuento,this.compra.total=r.total,this.compra.tipo_cambio=r.tipo_cambio,this.compra.moneda=r.moneda,this.compra.referencia=r.referencia,this.compra.cie=r.cie,this.compra.sucursal=r.sucursal,this.compra.transferencia=null==r.datos_bancarios?"":r.datos_bancarios.banco,this.compra.clabe=null==r.datos_bancarios?"":r.datos_bancarios.clabe,this.compra.cuenta=null==r.datos_bancarios?"":r.datos_bancarios.cuenta,this.compra.titular=null==r.datos_bancarios?"":r.datos_bancarios.titular,this.compra.fecha_probable_pago=null==r.fecha_probable_pago?"":r.fecha_probable_pago,this.compra.prioridad=null==r.prioridad?"":r.prioridad,this.compra.proveedore_id={id:r.proveedore_id,razon_social:r.proveedor_razon_social},this.compra.proveedore_csct_id={id:r.proveedore_csct_id,razon_social:r.proveedor_razon_social_csct},axios.get("/comprabusquedaimpuesto/"+r.id).then(function(a){e.listImpuestos=a.data}),this.compra.estado_id=r.estado_id,this.compra.elabora_empleado_id={id:r.elabora_empleado_id,name:r.nombre_empleado_elabora},this.compra.autoriza_empleado_id={id:r.autoriza_empleado_id,name:r.nombre_empleado_autoriza},this.compra.rango_dias=r.rango_dias,this.compra.pagos=r.pagos,this.compra.condicion=r.condicion,this.compra.proyecto_id={id:r.proyecto_id,name:r.nombre_corto_proyecto+" "+r.nombre_proyeto,nombre_categoria:r.nombre_categoria},this.compra.comentario_condicion_pago=r.comentario_condicion_pago,this.Metodo="Actualizar",this.principal=!0,this.nombre_categoria=r.nombre_categoria}},cerrar:function(){this.upload=!1,this.$emit("cardprincipal:click"),this.ClassL_a="btn btn-info",this.BtnL_a="Actualizar",this.BtnL_a2="Subir Archivo",2==this.tipoAccion&&$("#file_factura").html(""),o.A.resetObject(this.compra),this.preq.cotizacionre="",this.getDoc=!1},cerrarModal:function(){this.mostrar=0,this.$emit("cardprincipalcerrarmodal:click")},cerrarModalActualizar:function(){this.mostrar=0,this.$emit("comprascerrarmodal:click")},cerraruno:function(a){this.$emit("cardprincipaluno:click",a)},agregarinpuestos:function(a,t){this.widgets.modalimpuestos=!0,this.$refs.modalimpuestos.cargarinpuesto(a,t,this.listImpuestos)},grabar:function(a){this.nuevo=a},asignacion:function(a){this.preq.cotizacionre=a[0],this.preq.cotizacionreid=a[1]},GuardarCompra:function(a){var t=this;this.$validator.validate().then(function(e){if(e){t.isLoading=!0;var o=t,r=o.conrequisicion,i=[],s=[],n=[];t.nuevo=t.listImpuestos;var c=0;if(null!=o.nuevo){o.nuevo.forEach(function(a,e){"0"===a.id&&(t.p(a),i.push(a.tipo),s.push(a.porcentaje),n.push(a.retenido),c+=1)});var l=c;o.nuevo}var d=[],u=[],p=[],v=[];null!=o.array_asignaciones&&(o.array_asignaciones.forEach(function(a,t){d.push(a.proyecto_id),u.push(a.porcentaje),p.push(a.centro_costo_id),v.push(a.id)}),o.array_asignaciones.length);var m=[];if(null!=t.compra.cotizacione_id)for(var _=0;_<Object.keys(t.compra.cotizacione_id).length;_++)m.push(t.compra.cotizacione_id[_].id);parseInt(t.compra.pagos);var f=new FormData;f.append("metodo",t.Metodo),f.append("id",t.compra.id),f.append("folio",t.compra.folio),f.append("ordenes_formato",t.compra.ordenes_formato),f.append("condicion_pago_id",t.compra.condicion_pago),f.append("periodo_entrega",t.compra.periodo_entrega.name),f.append("fecha_orden",t.compra.fecha_orden),f.append("lugar_entrega",t.compra.lugar_entrega),f.append("observaciones",t.compra.observaciones),f.append("total",t.compra.total),f.append("descuento",t.compra.descuento),f.append("tipo_cambio",t.compra.tipo_cambio),f.append("moneda",t.compra.moneda),f.append("referencia",t.compra.referencia),f.append("cie",t.compra.cie),f.append("sucursal",t.compra.sucursal),f.append("proveedore_id",t.compra.proveedore_id.id),f.append("cotizacione_id",m),f.append("proyecto_id",t.compra.proyecto_id.id),f.append("proveedore_csct_id",""==t.compra.proveedore_csct_id?t.compra.proveedore_csct_id:t.compra.proveedore_csct_id.id),f.append("estado_id",t.compra.estado_id),f.append("elabora_empleado_id",t.compra.elabora_empleado_id.id),f.append("autoriza_empleado_id",t.compra.autoriza_empleado_id.id),f.append("rango_dias",t.compra.rango_dias),f.append("pagos",t.compra.pagos),f.append("tipos",i),f.append("porcentaje",s),f.append("retenido",n),f.append("tamanio",l),f.append("comentario_condicion_pago",t.compra.comentario_condicion_pago),f.append("conrequisicion",r),f.append("fecha_probable_pago",t.compra.fecha_probable_pago),f.append("prioridad",t.compra.prioridad),f.append("banco",t.compra.transferencia),f.append("clabe",t.compra.clabe),f.append("cuenta",t.compra.cuenta),f.append("titular",t.compra.titular),f.append("fechas",[]),axios.post("/compras",f).then(function(t){o.isLoading=!1,t.data.status?"error"===t.data.status?swal({type:"error",html:"Ha ocurrido un error notifiqué al administrador y recargue la página"}):(o.enabledb=!0,$("#input_impuesto").html(""),o.listImpuestos=[],a?(0==o.conrequisicion?o.proceso(t.data.compra):o.procesodos(t.data.compra),toastr.success("Compra Agregada Correctamente"),o.nuevo=null):(toastr.success("Compra Actualizada Correctamente"),o.nuevo=null,o.cerrar(),o.cerraruno(o.tableData.proyecto_id))):swal({type:"error",html:t.data.errors.join("<br>")})})}else toastr.warning("Complete todos los campos obligatorios","Atención")})},proceso:function(a){this.$emit("cardprincipalproceso:click",a)},procesodos:function(a){this.$emit("cardprincipalprocesodos:click",a)},cambiar:function(a){1==a.target.checked?this.conrequisicion=1:this.conrequisicion=0},vaciarAsignacion:function(){o.A.resetObject(this.tabla_asignacion)},actualizarImpuestos:function(a){this.p(a),this.listImpuestos=a},p:function(a){console.error(a)}},mounted:function(){}};const l=(0,e(14486).A)(c,function(){var a=this,t=a._self._c;return 1==a.mostrar?t("div",{staticClass:"card"},[t("vue-element-loading",{attrs:{active:a.isLoading}}),a._v(" "),t("div",{staticClass:"card-header"},[t("h4",{staticClass:"title",domProps:{textContent:a._s(a.tituloModal)}})]),a._v(" "),t("div",{staticClass:"card-body"},[t("input",{attrs:{type:"hidden",name:"id"}}),a._v(" "),t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-4 mb-3"},[t("label",{attrs:{for:"proyecto_id"}},[a._v("Proyecto")]),a._v(" "),t("v-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{options:a.listaProyectos,disabled:2==a.tipoAccion&&2==a.compra.condicion,id:"proyecto_id",name:"proyecto_id",label:"name","data-vv-name":"Proyecto"},model:{value:a.compra.proyecto_id,callback:function(t){a.$set(a.compra,"proyecto_id",t)},expression:"compra.proyecto_id"}}),a._v(" "),t("span",{staticClass:"text-danger"},[a._v(a._s(a.errors.first("Proyecto")))])],1),a._v(" "),t("div",{staticClass:"col-md-6 mb-3"},[t("label",{attrs:{for:"proveedore_id"}},[a._v("Proveedor")]),a._v(" "),t("v-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{options:a.listaProvedores,id:"proveedore_id",name:"proveedore_id",label:"razon_social","data-vv-name":"Proveedor"},on:{input:function(t){return a.buscarDatosBancarios(t)}},model:{value:a.compra.proveedore_id,callback:function(t){a.$set(a.compra,"proveedore_id",t)},expression:"compra.proveedore_id"}}),a._v(" "),t("span",{staticClass:"text-danger"},[a._v(a._s(a.errors.first("Proveedor")))])],1),a._v(" "),"CSCT Constructora y Servicios Calderon Torres S.A. de C.V."===a.compra.proveedore_id.razon_social||"Conserflow Constructora y Servicios Calderon Torres S.A. de C.V."===a.compra.proveedore_id.razon_social||"Constructora y Servicios Calderon Torres S.A. de C.V."===a.compra.proveedore_id.razon_social?t("div",{staticClass:"col-md-4 mb-3"},[t("label",{attrs:{for:"proveedore_id"}},[a._v("Proveedor CSCT")]),a._v(" "),t("v-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{options:a.listaProvedores_CSCT,label:"name","data-vv-name":"Proveedor CSCT"},model:{value:a.compra.proveedore_csct_id,callback:function(t){a.$set(a.compra,"proveedore_csct_id",t)},expression:"compra.proveedore_csct_id"}}),a._v(" "),t("span",{staticClass:"text-danger"},[a._v(a._s(a.errors.first("Proveedor CSCT")))])],1):a._e()]),a._v(" "),t("hr"),a._v(" "),t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-4 mb-3"},[t("label",{attrs:{for:"folio"}},[a._v("Comentario de condición de pago")]),a._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:a.compra.comentario_condicion_pago,expression:"compra.comentario_condicion_pago"}],staticClass:"form-control",attrs:{type:"text",name:"comentario_condicion_pago",placeholder:"Comentario",autocomplete:"off",id:"comentario_condicion_pago"},domProps:{value:a.compra.comentario_condicion_pago},on:{input:function(t){t.target.composing||a.$set(a.compra,"comentario_condicion_pago",t.target.value)}}}),a._v(" "),t("span",{staticClass:"text-danger"},[a._v(a._s(a.errors.first("comentario_condicion_pago")))])]),a._v(" "),t("div",{staticClass:"col-md-4 mb-3"},[t("label",{attrs:{for:"condicion_pago"}},[a._v("Condición Pago")]),a._v(" "),t("select",{directives:[{name:"model",rawName:"v-model",value:a.compra.condicion_pago,expression:"compra.condicion_pago"}],staticClass:"form-control",attrs:{id:"condicion_pago",name:"condicion_pago","data-vv-as":"condicion_pago"},on:{change:[function(t){var e=Array.prototype.filter.call(t.target.options,function(a){return a.selected}).map(function(a){return"_value"in a?a._value:a.value});a.$set(a.compra,"condicion_pago",t.target.multiple?e:e[0])},function(t){return a.cambiarcondicion()}]}},a._l(a.listaCondicionPago,function(e){return t("option",{key:e.id,domProps:{value:e.id}},[a._v(a._s(e.nombre)+" ")])}),0),a._v(" "),t("span",{staticClass:"text-danger"},[a._v(a._s(a.errors.first("condicion_pago")))])]),a._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:1==a.compra.condicion_pago,expression:"compra.condicion_pago == 1"}],staticClass:"col-md-4 mb-3"},[t("label",{attrs:{for:"sueldo_mensual"}},[a._v("Rango de dias a pagar")]),a._v(" "),t("div",{staticClass:"input-group"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.compra.rango_dias,expression:"compra.rango_dias"}],staticClass:"form-control",attrs:{type:"number",min:"0",pattern:"^[0-9]",name:"rango_dias",placeholder:"Rango Dias","data-vv-as":"Rango dias",autocomplete:"off",id:"rango_dias"},domProps:{value:a.compra.rango_dias},on:{input:function(t){t.target.composing||a.$set(a.compra,"rango_dias",t.target.value)}}}),a._v(" "),a._m(0),a._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:a.compra.pagos,expression:"compra.pagos"}],staticClass:"form-control",attrs:{type:"number",min:"0",pattern:"^[0-9]",name:"pagos",placeholder:"Pagos","data-vv-as":"Pagos",autocomplete:"off",id:"pagos"},domProps:{value:a.compra.pagos},on:{blur:function(t){return a.creardates()},input:function(t){t.target.composing||a.$set(a.compra,"pagos",t.target.value)}}}),a._v(" "),a._m(1)])])]),a._v(" "),t("hr"),a._v(" "),t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-4 mb-3"},[t("label",{attrs:{for:"periodo_entrega"}},[a._v("Período Entrega")]),a._v(" "),t("v-select",{attrs:{options:a.listaPeriodoEntrega,label:"name","data-vv-name":"periodo_entrega"},model:{value:a.compra.periodo_entrega,callback:function(t){a.$set(a.compra,"periodo_entrega",t)},expression:"compra.periodo_entrega"}}),a._v(" "),t("span",{staticClass:"text-danger"},[a._v(a._s(a.errors.first("periodo_entrega")))])],1),a._v(" "),t("div",{staticClass:"col-md-4 mb-3"},[t("label",{attrs:{for:"fecha_orden"}},[a._v("Fecha Orden")]),a._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:a.compra.fecha_orden,expression:"compra.fecha_orden"}],staticClass:"form-control",attrs:{type:"date",name:"fecha_orden","data-vv-name":"Fecha orden",placeholder:"Fecha orden",autocomplete:"off",id:"fecha_orden"},domProps:{value:a.compra.fecha_orden},on:{input:function(t){t.target.composing||a.$set(a.compra,"fecha_orden",t.target.value)}}}),a._v(" "),t("span",{staticClass:"text-danger"},[a._v(a._s(a.errors.first("Fecha orden")))])]),a._v(" "),t("div",{staticClass:"col-md-4 mb-3"},[t("label",{attrs:{for:"lugar_entrega"}},[a._v("Lugar Entrega")]),a._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:a.compra.lugar_entrega,expression:"compra.lugar_entrega"}],staticClass:"form-control",attrs:{type:"text",name:"lugar_entrega","data-vv-name":"Lugar entrega",placeholder:"Lugar Entrega",autocomplete:"off",id:"lugar_entrega"},domProps:{value:a.compra.lugar_entrega},on:{input:function(t){t.target.composing||a.$set(a.compra,"lugar_entrega",t.target.value)}}}),a._v(" "),t("span",{staticClass:"text-danger"},[a._v(a._s(a.errors.first("Lugar entrega")))])])]),a._v(" "),t("div",{staticClass:"form-row"}),a._v(" "),t("hr"),a._v(" "),t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-3 mb-3"},[t("label",[a._v("Fecha requerida de pago")]),a._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:a.compra.fecha_probable_pago,expression:"compra.fecha_probable_pago"}],staticClass:"form-control",attrs:{type:"date"},domProps:{value:a.compra.fecha_probable_pago},on:{input:function(t){t.target.composing||a.$set(a.compra,"fecha_probable_pago",t.target.value)}}})]),a._v(" "),t("div",{staticClass:"col-md-1 mb-3"},[t("label",[a._v("Urgente :")]),a._v(" "),t("select",{directives:[{name:"model",rawName:"v-model",value:a.compra.prioridad,expression:"compra.prioridad"}],staticClass:"form-control",on:{change:function(t){var e=Array.prototype.filter.call(t.target.options,function(a){return a.selected}).map(function(a){return"_value"in a?a._value:a.value});a.$set(a.compra,"prioridad",t.target.multiple?e:e[0])}}},[t("option",{attrs:{value:"0"}},[a._v("No")]),a._v(" "),t("option",{attrs:{value:"1"}},[a._v("Si")])])]),a._v(" "),t("div",{staticClass:"col-md-5 mb-3"},[t("label",{attrs:{for:"observaciones"}},[a._v("Observaciones")]),a._v(" "),t("textarea",{directives:[{name:"model",rawName:"v-model",value:a.compra.observaciones,expression:"compra.observaciones"}],staticClass:"form-control",attrs:{name:"observaciones",rows:"2",cols:"80",id:"observaciones"},domProps:{value:a.compra.observaciones},on:{input:function(t){t.target.composing||a.$set(a.compra,"observaciones",t.target.value)}}}),a._v(" "),t("span",{staticClass:"text-danger"},[a._v(a._s(a.errors.first("observaciones")))])])]),a._v(" "),t("hr"),a._v(" "),t("div",{staticClass:"form-group row container"},[t("h5",[a._v("Impuestos")]),a._v(" "),t("div",{staticClass:"col-md-6"},[t("button",{staticClass:"btn btn-secondary btn-sm",attrs:{type:"button"},on:{click:function(t){return a.agregarinpuestos(1,a.compra.id)}}},[t("i",{staticClass:"fas fa-plus"}),a._v(" Agregar\n      ")])])]),a._v(" "),t("div",{staticClass:"container mt-2"},[a._m(2),a._v(" "),a._l(a.listImpuestos,function(e,o){return t("li",{key:o,staticClass:"list-group-item"},[t("div",{staticClass:"form-row my-0"},[t("div",{staticClass:"form-group form-sm col-md-4 my-0"},[t("label",[a._v(a._s(e.tipo))])]),a._v(" "),t("div",{staticClass:"form-group col-md-2 my-0"},[t("label",[a._v(a._s(e.porcentaje))])]),a._v(" "),t("div",{staticClass:"form-group col-md-2 my-0"},[e.retenido?[t("label",[a._v("Sí")])]:[t("label",[a._v("No")])]],2)])])}),a._v(" "),t("br"),a._v(" "),t("br")],2),a._v(" "),t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-4 mb-3"},[t("label",{attrs:{for:"descuento"}},[a._v("Descuento")]),a._v(" "),t("div",{staticClass:"input-group"},[a._m(3),a._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:a.compra.descuento,expression:"compra.descuento"}],staticClass:"form-control",attrs:{type:"text",name:"descuento",placeholder:"Referencia",autocomplete:"off",id:"descuento"},domProps:{value:a.compra.descuento},on:{input:function(t){t.target.composing||a.$set(a.compra,"descuento",t.target.value)}}})]),a._v(" "),t("span",{staticClass:"text-danger"},[a._v(a._s(a.errors.first("descuento")))])])]),a._v(" "),t("hr"),a._v(" "),t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-2 mb-3"},[t("label",{attrs:{for:"moneda"}},[a._v("Moneda de pago")]),a._v(" "),t("select",{directives:[{name:"model",rawName:"v-model",value:a.compra.moneda,expression:"compra.moneda"}],staticClass:"form-control",attrs:{name:"moneda",id:"moneda"},on:{change:function(t){var e=Array.prototype.filter.call(t.target.options,function(a){return a.selected}).map(function(a){return"_value"in a?a._value:a.value});a.$set(a.compra,"moneda",t.target.multiple?e:e[0])}}},[t("option",{attrs:{value:"1",selected:""}},[a._v("Dolares (USD)")]),a._v(" "),t("option",{attrs:{value:"2"}},[a._v("Moneda Nacional (MXN)")]),a._v(" "),t("option",{attrs:{value:"3"}},[a._v("Euros (EUR)")])]),a._v(" "),t("span",{staticClass:"text-danger"},[a._v(a._s(a.errors.first("moneda")))])]),a._v(" "),t("div",{staticClass:"col-md-3 mb-3"},[t("label",{attrs:{for:"sucursal"}},[a._v("Sucursal")]),a._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:a.compra.sucursal,expression:"compra.sucursal"}],staticClass:"form-control",attrs:{type:"text",name:"sucursal",placeholder:"Sucursal",autocomplete:"off",id:"sucursal"},domProps:{value:a.compra.sucursal},on:{input:function(t){t.target.composing||a.$set(a.compra,"sucursal",t.target.value)}}}),a._v(" "),t("span",{staticClass:"text-danger"},[a._v(a._s(a.errors.first("sucursal")))])]),a._v(" "),t("div",{staticClass:"col-md-4 mb-3"},[t("label",{attrs:{for:"referencia"}},[a._v("Referencia")]),a._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:a.compra.referencia,expression:"compra.referencia"}],staticClass:"form-control",attrs:{type:"text",name:"referencia",placeholder:"Referencia",autocomplete:"off",id:"referencia"},domProps:{value:a.compra.referencia},on:{input:function(t){t.target.composing||a.$set(a.compra,"referencia",t.target.value)}}}),a._v(" "),t("span",{staticClass:"text-danger"},[a._v(a._s(a.errors.first("referencia")))])]),a._v(" "),t("div",{staticClass:"col-md-3 mb-3"},[t("label",{attrs:{for:"cie"}},[a._v("Convenio CIE")]),a._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:a.compra.cie,expression:"compra.cie"}],staticClass:"form-control",attrs:{type:"text",name:"cie",placeholder:"CIE",autocomplete:"off",id:"cie"},domProps:{value:a.compra.cie},on:{input:function(t){t.target.composing||a.$set(a.compra,"cie",t.target.value)}}}),a._v(" "),t("span",{staticClass:"text-danger"},[a._v(a._s(a.errors.first("cie")))])])]),a._v(" "),t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-3 mb-3"},[t("label",{attrs:{for:"referencia"}},[a._v("Banco de Transferencia")]),a._v(" "),a._e(),a._v(" "),[t("input",{directives:[{name:"model",rawName:"v-model",value:a.compra.transferencia,expression:"compra.transferencia"}],staticClass:"form-control",attrs:{type:"text",name:"transferencia",placeholder:"Escriba el nombre del banco",autocomplete:"off",id:"bancoTrans"},domProps:{value:a.compra.transferencia},on:{keyup:function(t){return!t.type.indexOf("key")&&a._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:a.regresardb.apply(null,arguments)},input:function(t){t.target.composing||a.$set(a.compra,"transferencia",t.target.value)}}}),a._v(" "),t("span",{staticClass:"text-danger"},[a._v(a._s(a.errors.first("transferencia")))]),t("br")]],2),a._v(" "),0==a.enabledb?[t("div",{staticClass:"col-md-1 mb-3"},[t("label",[a._v(" ")]),t("br"),a._v(" "),t("button",{staticClass:"btn btn-outline-dark",attrs:{name:"button"},on:{click:a.regresardb}},[a._v("Cancelar")])])]:a._e(),a._v(" "),t("div",{staticClass:"col-md-3 mb-3"},[t("label",{attrs:{for:"sucursal"}},[a._v("Número de Cuenta")]),a._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:a.compra.cuenta,expression:"compra.cuenta"}],staticClass:"form-control",attrs:{type:"text",name:"cuenta",placeholder:"N° Cuenta",autocomplete:"off",id:"numCuenta"},domProps:{value:a.compra.cuenta},on:{input:function(t){t.target.composing||a.$set(a.compra,"cuenta",t.target.value)}}}),a._v(" "),t("span",{staticClass:"text-danger"},[a._v(a._s(a.errors.first("sucursal")))])]),a._v(" "),t("div",{staticClass:"col-md-3 mb-3"},[t("label",{attrs:{for:"referencia"}},[a._v("Cuenta CLABE")]),a._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:a.compra.clabe,expression:"compra.clabe"}],staticClass:"form-control",attrs:{type:"text",name:"referencia",placeholder:"CLABE",autocomplete:"off",id:"ctaClabe"},domProps:{value:a.compra.clabe},on:{input:function(t){t.target.composing||a.$set(a.compra,"clabe",t.target.value)}}}),a._v(" "),t("span",{staticClass:"text-danger"},[a._v(a._s(a.errors.first("referencia")))])]),a._v(" "),t("div",{staticClass:"col-md-3 mb-3"},[t("label",{attrs:{for:"cie"}},[a._v("Titular de la Cuenta")]),a._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:a.compra.titular,expression:"compra.titular"}],staticClass:"form-control",attrs:{type:"text",name:"cie",placeholder:"Titular",autocomplete:"off",id:"titular"},domProps:{value:a.compra.titular},on:{input:function(t){t.target.composing||a.$set(a.compra,"titular",t.target.value)}}}),a._v(" "),t("span",{staticClass:"text-danger"},[a._v(a._s(a.errors.first("cie")))])])],2),a._v(" "),t("hr"),a._v(" "),t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-4 mb-3"},[t("label",{attrs:{for:"elabora_empleado_id"}},[a._v("Empleado que elabora")]),a._v(" "),t("v-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{options:a.listaEmpleados_elabora,id:"elabora_empleado_id",name:"elabora_empleado_id",label:"name","data-vv-name":"Elabora empleado",disabled:2==a.tipoAccion&&2==a.compra.condicion},model:{value:a.compra.elabora_empleado_id,callback:function(t){a.$set(a.compra,"elabora_empleado_id",t)},expression:"compra.elabora_empleado_id"}}),a._v(" "),t("span",{staticClass:"text-danger"},[a._v(a._s(a.errors.first("Elabora empleado")))])],1),a._v(" "),t("div",{staticClass:"col-md-4 mb-3"},[t("label",{attrs:{for:"autoriza_empleado_id"}},[a._v("Autorizado por")]),a._v(" "),t("v-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{options:a.listaEmpleados,id:"autoriza_empleado_id",name:"autoriza_empleado_id",label:"name","data-vv-name":"Autoriza empleado",disabled:2==a.tipoAccion&&2==a.compra.condicion},model:{value:a.compra.autoriza_empleado_id,callback:function(t){a.$set(a.compra,"autoriza_empleado_id",t)},expression:"compra.autoriza_empleado_id"}}),a._v(" "),t("span",{staticClass:"text-danger"},[a._v(a._s(a.errors.first("Autoriza empleado")))])],1),a._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:2!=a.tipoAccion,expression:"tipoAccion != 2"}],staticClass:"col-auto my-1 col-md-4 mb-3"},[t("div",{staticClass:"form-check"},[t("label",{staticClass:"form-check-label col-md-6",attrs:{for:"autoSizingCheck2"}},[a._v("\n          Compra con requisición ?  \n        ")]),a._v(" "),t("label",{staticClass:"switch switch-default switch-pill switch-dark"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.conrequisicion,expression:"conrequisicion"}],staticClass:"switch-input",attrs:{type:"checkbox",id:"autoSizingCheck2"},domProps:{checked:Array.isArray(a.conrequisicion)?a._i(a.conrequisicion,null)>-1:a.conrequisicion},on:{change:[function(t){var e=a.conrequisicion,o=t.target,r=!!o.checked;if(Array.isArray(e)){var i=a._i(e,null);o.checked?i<0&&(a.conrequisicion=e.concat([null])):i>-1&&(a.conrequisicion=e.slice(0,i).concat(e.slice(i+1)))}else a.conrequisicion=r},function(t){return a.cambiar(t)}]}}),a._v(" "),t("span",{staticClass:"switch-label"}),a._v(" "),t("span",{staticClass:"switch-handle"})])])])])]),a._v(" "),t("div",{staticClass:"card-footer"},[1==a.tipoAccion?t("button",{staticClass:"btn btn-dark float-sm-right",attrs:{type:"button"},on:{click:function(t){return a.cerrarModal()}}},[t("i",{staticClass:"fas fa-close"}),a._v(" Cerrar")]):a._e(),a._v(" \n  "),2==a.tipoAccion?t("button",{staticClass:"btn btn-dark float-sm-right",attrs:{type:"button"},on:{click:function(t){return a.cerrarModalActualizar()}}},[t("i",{staticClass:"fas fa-close"}),a._v(" Cerrar")]):a._e(),a._v(" \n  "),1==a.tipoAccion?t("button",{staticClass:"btn btn-secondary float-sm-right",attrs:{type:"button"},on:{click:function(t){return a.GuardarCompra(1)}}},[t("i",{staticClass:"fas fa-save"}),a._v(" Guardar")]):a._e(),a._v(" "),2==a.tipoAccion?t("button",{staticClass:"btn btn-secondary float-sm-right",attrs:{type:"button"},on:{click:function(t){return a.GuardarCompra(0)}}},[t("i",{staticClass:"fas fa-edit"}),a._v(" Actualizar")]):a._e()]),a._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:a.widgets.modalimpuestos,expression:"widgets.modalimpuestos"}]},[t("modalimpuestos",{ref:"modalimpuestos",on:{"modalimpuestos:click":function(t){return a.grabar(t)},update:a.actualizarImpuestos}})],1),a._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:a.widgets.partidas,expression:"widgets.partidas"}]},[t("partidas",{ref:"partidas",on:{"partidas:click":function(t){return a.maestro(t)}}})],1)],1):a._e()},[function(){var a=this._self._c;return a("div",{staticClass:"input-group-addon"},[a("span",{staticClass:"input-group-text"},[this._v("días a:")])])},function(){var a=this._self._c;return a("div",{staticClass:"input-group-addon"},[a("span",{staticClass:"input-group-text"},[this._v("pagos.")])])},function(){var a=this,t=a._self._c;return t("div",{staticClass:"form-row mt-2 ml-3"},[t("div",{staticClass:"form-group col-md-3"},[t("p",{staticClass:"font-weight-bold"},[a._v("Tipo")])]),a._v(" "),t("div",{staticClass:"form-group col-md-2"},[t("p",{staticClass:"font-weight-bold"},[a._v("Porcentaje")])]),a._v(" "),t("div",{staticClass:"form-group col-md-2"},[t("p",{staticClass:"font-weight-bold"},[a._v("Retenido")])])])},function(){var a=this._self._c;return a("div",{staticClass:"input-group-addon"},[a("span",{staticClass:"input-group-text"},[this._v("%")])])}],!1,null,null,null).exports},37778:(a,t,e)=>{"use strict";e.d(t,{A:()=>i});var o=e(76798),r=e.n(o)()(function(a){return a[1]});r.push([a.id,".form-check-label{padding-left:.1rem}",""]);const i=r},38473:(a,t,e)=>{"use strict";e.d(t,{A:()=>i});var o=e(76798),r=e.n(o)()(function(a){return a[1]});r.push([a.id,".d-block[data-v-09e94ab4]{display:block!important}.modal[data-v-09e94ab4]{backdrop-filter:blur(4px);background:rgba(0,0,0,.5)}.excel-modal[data-v-09e94ab4]{border:none;border-radius:18px;box-shadow:0 15px 40px rgba(0,0,0,.25);position:relative}.title[data-v-09e94ab4]{font-size:22px;font-weight:700;margin-bottom:25px;text-align:center}.excel-drop[data-v-09e94ab4]{background:#f6fff6;border:2px dashed #2e7d32;border-radius:16px;cursor:pointer;padding:40px 20px;text-align:center;transition:.25s ease}.excel-drop[data-v-09e94ab4]:hover{background:#e8ffe8;border-color:#1b5e20}.excel-icon[data-v-09e94ab4]{color:#2e7d32;margin-bottom:10px}.excel-text[data-v-09e94ab4]{color:#333;font-size:15px}.file-selected[data-v-09e94ab4]{color:#333;margin-top:12px}.hidden-input[data-v-09e94ab4]{display:none}.btn-upload[data-v-09e94ab4]{align-items:center;background:#2e7d32;border:none;border-radius:12px;color:#fff;display:flex;font-size:17px;font-weight:600;gap:8px;justify-content:center;margin-top:30px;padding:14px 0;transition:.25s ease;width:100%}.btn-upload[data-v-09e94ab4]:hover{background:#1b5e20}.btn-upload[data-v-09e94ab4]:disabled{background:#a5d6a7;cursor:not-allowed}.upload-icon-btn[data-v-09e94ab4]{margin-bottom:2px}.close-btn[data-v-09e94ab4]{color:#777;cursor:pointer;font-size:26px;position:absolute;right:14px;top:12px}.close-btn[data-v-09e94ab4]:hover{color:#222}.loading-box[data-v-09e94ab4]{margin-top:20px;text-align:center}.loader[data-v-09e94ab4]{animation:spin-09e94ab4 .8s linear infinite;border:4px solid #2e7d32;border-bottom-color:transparent;border-radius:50%;height:38px;margin:0 auto 10px;width:38px}@keyframes spin-09e94ab4{to{transform:rotate(1turn)}}",""]);const i=r},56289:(a,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>s});var o=e(60173),r=e(14941).call(void 0);const i={data:function(){return{detalle:1,detalles:!1,PermisosCrud:{},cardprincipal:!1,columns:["id","nombre_corto","ciudad","fecha_inicio","fecha_fin"],tableData:[],options:{headings:{id:"Acciones",nombre:"Nombre",nombre_corto:"Nombre corto",ciudad:"Ciudad",fecha_inicio:"F. Inicio",fecha_fin:"F. Fin"},perPage:10,perPageValues:[],skin:r.skin,sortIcon:r.sortIcon,sortable:["nombre","nombre_corto","ciudad","fecha_inicio","fecha_fin","condicion"],filterable:["nombre","nombre_corto","ciudad","fecha_inicio","fecha_fin","condicion"],filterByColumn:!0,texts:r.texts}}},components:{compras:function(a){return e.e(392).then(function(){return a(e(59470))}.bind(null,e)).catch(e.oe)},cardprincipal:function(a){return e.e(392).then(function(){return a(e(36354))}.bind(null,e)).catch(e.oe)},partidas:function(a){return e.e(392).then(function(){return a(e(71076))}.bind(null,e)).catch(e.oe)},partidasdos:function(a){return e.e(392).then(function(){return a(e(1473))}.bind(null,e)).catch(e.oe)}},methods:{getData:function(){},verdetalles:function(a){this.detalle=2,this.$refs.compras.getData(a.id)},maestro:function(a){this.detalle=2,this.$refs.compras.getData(a)},maestrob:function(){this.detalle=1},abrirModal:function(a,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];this.detalle=3,this.$refs.cardprincipal.cargarcardprincipal(a,t,e,this.tableData)},cerrar:function(a){this.detalle=2},cerrarModal:function(){this.detalle=1},cerrardos:function(a){this.$refs.partidas.cargarpartidas(a),this.detalle=4},cerrartres:function(a){this.$refs.partidasdos.cargarpartidas(a),this.detalle=5}},mounted:function(){this.PermisosCrud=o.A.getCRUD(this.$route.path)}};const s=(0,e(14486).A)(i,function(){var a=this,t=a._self._c;return t("main",{staticClass:"main"},[t("div",{staticClass:"container-fliud"},[1==a.detalle?t("div",{staticClass:"card"},[t("div",{staticClass:"card-header"},[t("i",{staticClass:"fa fa-align-justify"}),a._v(" Compras\r\n                "),t("button",{directives:[{name:"show",rawName:"v-show",value:a.PermisosCrud.Create,expression:"PermisosCrud.Create"}],staticClass:"btn btn-dark float-sm-right",attrs:{type:"button"},on:{click:function(t){return a.abrirModal("compra","registrar")}}},[t("i",{staticClass:"icon-plus"}),a._v(" Nuevo\r\n                ")])]),a._v(" "),t("div",{staticClass:"card-body"},[t("v-server-table",{ref:"myTable",attrs:{columns:a.columns,url:"/proyectos/buscarcompras",options:a.options},scopedSlots:a._u([{key:"condicion",fn:function(e){return[1==e.row.condicion?[t("button",{staticClass:"btn btn-outline-success",attrs:{type:"button"}},[a._v("Activo")])]:a._e(),a._v(" "),0==e.row.condicion?[t("button",{staticClass:"btn btn-outline-danger",attrs:{type:"button"}},[a._v("Terminado")])]:a._e(),a._v(" "),2==e.row.condicion?[t("button",{staticClass:"btn btn-outline-warning",attrs:{type:"button"}},[a._v("Pausa")])]:a._e(),a._v(" "),3==e.row.condicion?[t("button",{staticClass:"btn btn-outline-dark",attrs:{type:"button"}},[a._v("Rechazado")])]:a._e()]}},{key:"id",fn:function(e){return[t("div",{staticClass:"btn-group",attrs:{role:"group","aria-label":"Button group with nested dropdown"}},[t("div",{staticClass:"btn-group dropup",attrs:{role:"group"}},[t("button",{staticClass:"btn btn-outline-dark dropdown-toggle",attrs:{id:"btnGroupDrop1",type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t("i",{staticClass:"fas fa-grip-horizontal"}),a._v("  Acciones\r\n                                ")]),a._v(" "),t("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"btnGroupDrop1"}},[t("button",{staticClass:"dropdown-item",attrs:{type:"button"},on:{click:function(t){return a.verdetalles(e.row)}}},[t("i",{staticClass:"fas fa-eye"}),a._v("  Ver ordenes de compra\r\n                                    ")])])])])]}}],null,!1,3268132591)})],1)]):a._e(),a._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:2==a.detalle,expression:"detalle == 2"}]},[t("compras",{ref:"compras",on:{"compras:maestro":a.maestrob}})],1),a._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:3==a.detalle,expression:"detalle == 3"}]},[t("cardprincipal",{ref:"cardprincipal",on:{"cardprincipal:click":function(t){return a.cerrar(t)},"cardprincipalproceso:click":function(t){return a.cerrardos(t)},"cardprincipalprocesodos:click":function(t){return a.cerrartres(t)},"cardprincipalcerrarmodal:click":function(t){return a.cerrarModal()}}})],1),a._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:4==a.detalle,expression:"detalle == 4"}]},[t("partidas",{ref:"partidas",on:{"partidas:click":function(t){return a.maestro(t)}}})],1),a._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:5==a.detalle,expression:"detalle == 5"}]},[t("partidasdos",{ref:"partidasdos",on:{"partidas:click":function(t){return a.maestro(t)}}})],1)])])},[],!1,null,null,null).exports},59470:(a,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>c});var o=e(60173);function r(a){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},r(a)}function i(a,t,e){return(t=function(a){var t=function(a,t){if("object"!=r(a)||!a)return a;var e=a[Symbol.toPrimitive];if(void 0!==e){var o=e.call(a,t||"default");if("object"!=r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(a)}(a,"string");return"symbol"==r(t)?t:t+""}(t))in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}var s=e(14941).call(void 0);const n={data:function(){return{texto_b:"",PermisosCrud:{},url:"/compras",empleado:null,objeto:1,detalle:0,nuevo:null,principal:!1,estadomodalimpuesto:null,impuestocatalogo:[],mostrareinpuesto:0,modal_ver_requisiciones:0,widgets:{cardprincipal:!1,partidas:!1,partidasdos:!1,facturas:!1},compra:{id:0,folio:"",condicion:0,condicion_pago:"",periodo_entrega:"",lugar_entrega:"",total:""},validado:0,listaEmpleados:[],listaCotizaciones:[],listaProvedores:[],listaCondicionPago:[],modal:0,modalb:0,tituloModal:"",tipoAccion:0,tipoAccionpr:0,disabled:0,isLoading:!1,isLoadingg:!1,isLoadingDetalle:!1,columns:["id","descargar","folio","nombre_condicion_pago","periodo_entrega","total","moneda","proveedor_razon_social","format","condicion"],tableData:[],options:{headings:{id:"Acciones",folio:"Folio",nombre_condicion_pago:"Condición de Pago",periodo_entrega:"Período de Entrega",total:"Total",proveedor_razon_social:"Proveedor",condicion:"Condición",estado_id:"Estado",descargar:"",format:"Descargar"},perPage:10,perPageValues:[],skin:s.skin,sortIcon:s.sortIcon,filterByColumn:!0,texts:s.texts,columnsDisplay:{},listColumns:{moneda:[{id:1,text:"Dolares"},{id:2,text:"Moneda Nacional"},{id:3,text:"Euros"}],nombre_condicion_pago:[{id:1,text:"Crédito"},{id:2,text:"Contado"}]},requestAdapter:function(a){var t=[];return t.push({folio:a.query.folio,condicion_pago_id:a.query.nombre_condicion_pago,periodo_entrega:a.query.periodo_entrega,lugar_entrega:a.query.lugar_entrega,total:a.query.total,moneda:a.query.moneda,"p.razon_social":a.query.proveedor_razon_social}),a.query=t[0],a}}}},components:{cardprincipal:function(a){return e.e(392).then(function(){return a(e(36354))}.bind(null,e)).catch(e.oe)},partidas:function(a){return e.e(392).then(function(){return a(e(71076))}.bind(null,e)).catch(e.oe)},partidasdos:function(a){return e.e(392).then(function(){return a(e(1473))}.bind(null,e)).catch(e.oe)}},methods:{verBotton:function(a){console.log(a),this.texto_b="Acciones"},getData:function(a){var t=this;t.objeto=a,t.detalle=1,t.PermisosCrud=o.A.getCRUD(t.$route.path)},actdesact:function(a,t){var e=this;t?(this.swal_titulo="Esta seguro de activar esta compra?",this.swal_tle="Activado",this.swal_msg="El registro ha sido activado con éxito."):(this.swal_titulo="Esta seguro de desactivar esta compra?",this.swal_tle="Desactivado!",this.swal_msg="El registro ha sido desactivado con éxito."),swal({title:this.swal_titulo,type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Aceptar!",cancelButtonText:"Cancelar",confirmButtonClass:"btn btn-success",cancelButtonClass:"btn btn-danger",buttonsStyling:!1,reverseButtons:!0}).then(function(o){if(o.value){var r=e;axios.get(r.url+"/"+a+"/edit").then(function(a){var e;t?toastr.success(r.swal_tle,r.swal_msg,"success"):toastr.error(r.swal_tle,r.swal_msg,"error"),toastr.options=(i(i(i(i(i(i(i(i(i(i(e={closeButton:!1},"closeButton",!1),"debug",!1),"newestOnTop",!0),"progressBar",!0),"positionClass","toast-top-center"),"preventDuplicates",!1),"onclick",null),"showDuration","300"),"hideDuration","1000"),"timeOut","5000"),i(i(i(i(i(e,"extendedTimeOut","1000"),"showEasing","swing"),"hideEasing","linear"),"showMethod","fadeIn"),"hideMethod","fadeOut")),r.getData()}).catch(function(a){console.log(a)})}else o.dismiss,swal.DismissReason.cancel})},cerrar:function(a){$("#input_impuesto").html(""),this.principal=!1,this.detalle=0,this.nuevo=null;this.widgets.cardprincipal=!1},agregarinpuestos:function(a,t){me.widgets.requisicionesalmacen=!0,this.$refs.requisicionesalmacen.cargarcompras()},abrirEdicionR:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.tipoAccionpr=2,this.partidascompras.articulo_id=a.articulo_id,this.partidascompras.peso=a.peso,this.partidascompras.equivalente=a.equivale,this.partidascompras.fecha_requerido=a.frequerido},abrirModal:function(a,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];this.detalle=2,this.widgets.cardprincipal=!0,this.$refs.cardprincipal.cargarcardprincipal(a,t,e)},cerrarprincipal:function(a){this.getData(a)},cargardetalle:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(0===a.conrequisicion)this.widgets.partidas=!0,this.$refs.partidas.cargarpartidas(a),this.detalle=0;else if(1===a.conrequisicion){this.widgets.partidasdos=!0,this.$refs.partidasdos.cargarpartidas(a),this.detalle=0}},maestro:function(a){var t=this;this.detalle=0,t.widgets.partidas=!1,t.widgets.partidasdos=!1,t.isLoading=!1,t.getData(a)},maestroPrincipal:function(){this.$emit("compras:maestro")},abrirBusquedaArticulo:function(){this.tipoAccionpr=1,this.modal=1},cerrarModal:function(){this.modala=0},descargar:function(a){window.open("descargar-compran/"+a.id,"_blank");this.getData(a.proyecto_id)},descargarn:function(a){window.open("descargar-compran/"+a.id,"_blank");this.getData(a.proyecto_id)},finalizarCompra:function(){var a=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];Swal.fire({title:"Esta seguro(a) de Finalizar?",text:"Esta opción no se podrá desahacer!",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si",cancelButtonText:"No"}).then(function(e){if(e.value){var o=a,r=t.total,i=t.id;0==r||null==r?toastr.warning("Atención","Esta compra no puede se cerrada hasta tener artículos registrados"):axios.post("/compras/cerraroc",{id:i}).then(function(e){e.data.status?(toastr.success("Correcto","Compra cerrada correctamente"),o.getData(t.proyecto_id),a.$refs.myTable.refresh()):toastr.error(e.data.mensaje)})}})},cerrarModalActualizar:function(){this.detalle=1},ver_facturas:function(a){this.widgets.facturas=!0,this.detalle=0,this.$refs.facturas.cargar(a,this.listaProvedores,this.UsoFactura)},cerrarfacturas:function(){this.widgets.facturas=!1,this.detalle=1},descargarequimodal:function(){this.modal_ver_requisiciones=1},cerrarModalRequi:function(){this.modal_ver_requisiciones=0}},mounted:function(){}};const c=(0,e(14486).A)(n,function(){var a=this,t=a._self._c;return t("div",[1==a.detalle?t("div",{staticClass:"card"},[t("div",{staticClass:"card-header"},[t("i",{staticClass:"fa fa-align-justify"}),a._v(" ORDENES DE COMPRA\r\n            "),t("button",{staticClass:"btn btn-secondary float-sm-right",attrs:{type:"button"},on:{click:function(t){return a.maestroPrincipal()}}},[t("i",{staticClass:"fas fa-arrow-left"}),a._v(" Atras\r\n            ")])]),a._v(" "),t("div",{staticClass:"card-body"},[t("vue-element-loading",{attrs:{active:a.isLoading}}),a._v(" "),t("v-server-table",{ref:"myTable",attrs:{columns:a.columns,url:"compras/busqueda/"+a.objeto,options:a.options},scopedSlots:a._u([{key:"id",fn:function(e){return[t("div",{staticClass:"btn-group",attrs:{role:"group","aria-label":"Button group with nested dropdown"}},[t("div",{staticClass:"btn-group dropup",attrs:{role:"group"}},[t("button",{staticClass:"btn btn-outline-dark dropdown-toggle",attrs:{id:"btnGroupDrop1",type:"button","data-toggle":"dropdown","data-placement":"top",title:"Acciones","aria-haspopup":"true","aria-expanded":"false"}},[t("i",{staticClass:"fas fa-grip-horizontal"}),a._v(a._s(a.texto_b)+"\r\n                            ")]),a._v(" "),t("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"btnGroupDrop1"}},[1==e.row.condicion||2==e.row.condicion?[t("a",{directives:[{name:"show",rawName:"v-show",value:a.PermisosCrud.Download,expression:"PermisosCrud.Download"}],staticClass:"dropdown-item",attrs:{href:"#"},on:{click:function(t){return a.descargarn(e.row)}}},[t("i",{staticClass:"fas fa-file-pdf"}),a._v(" Descargar Formato\r\n                                    ")])]:a._e(),a._v(" "),e.row.condicion>0?t("div",[t("a",{directives:[{name:"show",rawName:"v-show",value:3==e.row.estado_id&&a.PermisosCrud.Update,expression:"props.row.estado_id == 3 && PermisosCrud.Update"}],staticClass:"dropdown-item",attrs:{type:"button",href:"#"},on:{click:function(t){return t.preventDefault(),a.abrirModal("compra","actualizar",e.row)}}},[t("i",{staticClass:"icon-pencil"}),a._v(" Actualizar compra\r\n                                    ")])]):a._e(),a._v(" "),2!=e.row.condicion?t("div",[t("a",{directives:[{name:"show",rawName:"v-show",value:3==e.row.estado_id&&a.PermisosCrud.Delete,expression:"props.row.estado_id == 3 && PermisosCrud.Delete"}],staticClass:"dropdown-item",attrs:{href:"#"},on:{click:function(t){return a.finalizarCompra(e.row)}}},[t("i",{staticClass:"far fa-window-close"}),a._v(" Finalizar compra\r\n                                    ")])]):a._e()],2)])])]}},{key:"descargar",fn:function(e){return[t("button",{staticClass:"btn btn-outline-dark",attrs:{disabled:!a.PermisosCrud.Create},on:{click:function(t){return a.cargardetalle(e.row)}}},[t("i",{staticClass:"fas fa-list"}),a._v(" Partidas\r\n                    ")])]}},{key:"format",fn:function(e){return[1==e.row.condicion||2==e.row.condicion?[t("button",{staticClass:"btn btn-outline-dark",attrs:{disabled:!a.PermisosCrud.Download},on:{click:function(t){return a.descargarn(e.row)}}},[t("i",{staticClass:"fas fa-file-pdf"}),a._v("  "),t("i",{staticClass:"fas fa-download"})])]:a._e()]}},{key:"condicion",fn:function(e){return[1==e.row.condicion?[t("span",{staticClass:"btn btn-outline-success"},[a._v("Activo")])]:a._e(),a._v(" "),0==e.row.condicion?[t("span",{staticClass:"btn btn-outline-danger"},[a._v("Dado de Baja")])]:a._e(),a._v(" "),2==e.row.condicion?[t("span",{staticClass:"btn btn-outline-warning"},[a._v("Cerrada")])]:a._e()]}},{key:"estado_id",fn:function(e){return[3==e.row.estado_id?[t("span",{staticClass:"btn btn-outline-danger"},[a._v("No programado")])]:a._e(),a._v(" "),2==e.row.estado_id?[t("span",{staticClass:"btn btn-outline-warning"},[a._v("Programada")])]:a._e(),a._v(" "),1==e.row.estado_id?[t("span",{staticClass:"btn btn-outline-success"},[a._v("Pagado")])]:a._e()]}},{key:"moneda",fn:function(e){return[1==e.row.moneda?[t("span",{staticClass:"btn btn-outline-success"},[a._v("USD")])]:a._e(),a._v(" "),2==e.row.moneda?[t("span",{staticClass:"btn btn-outline-success"},[a._v("MXN")])]:a._e(),a._v(" "),3==e.row.moneda?[t("span",{staticClass:"btn btn-outline-success"},[a._v("EUR")])]:a._e()]}}],null,!1,3000850357)})],1)]):a._e(),a._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:a.widgets.cardprincipal,expression:"widgets.cardprincipal"}]},[t("cardprincipal",{ref:"cardprincipal",on:{"cardprincipal:click":function(t){return a.cerrar(t)},"cardprincipalcerrarmodal:click":function(t){return a.cerrar()},"cardprincipaluno:click":function(t){return a.cerrarprincipal(t)},"comprascerrarmodal:click":function(t){return a.cerrarModalActualizar()}}})],1),a._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:a.widgets.partidas,expression:"widgets.partidas"}]},[t("partidas",{ref:"partidas",on:{"partidas:click":function(t){return a.maestro(t)}}})],1),a._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:a.widgets.partidasdos,expression:"widgets.partidasdos"}]},[t("partidasdos",{ref:"partidasdos",on:{"partidas:click":function(t){return a.maestro(t)}}})],1),a._v(" "),t("div",{staticClass:"modal fade",class:{mostrar:a.modal_ver_requisiciones},staticStyle:{display:"none"},attrs:{tabindex:"-1","data-focus-on":"input:first"}},[t("div",{staticClass:"modal-dialog modal-dark modal-lg"},[t("div",{staticClass:"modal-content"},[t("div",{staticClass:"modal-header"},[t("h4",{staticClass:"modal-title"},[a._v("Requisiciones")]),a._v(" "),t("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(t){return a.cerrarModalRequi()}}},[t("span",{attrs:{"aria-hidden":"true"}},[a._v("×")])])]),a._v(" "),t("div",{staticClass:"modal-body"}),a._v(" "),t("div",{staticClass:"modal-footer"},[t("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(t){return a.cerrarModalRequi()}}},[a._v("Cerrar")])])])])])])},[],!1,null,null,null).exports},60173:(a,t,e)=>{"use strict";function o(a){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},o(a)}e.d(t,{A:()=>r});const r={resetObject:function(a){for(var t in a)"string"==typeof a[t]?a[t]="":"number"==typeof a[t]?a[t]=0:void 0===o(a[t])?a[t]=null:"object"===o(a[t])&&(a[t]={})},getCRUD:function(a){var t=new FormData;t.append("ruta",a),t.append("identificador",1);var e={Create:!1,Read:!1,Update:!1,Delete:!1,Download:!1,Upload:!1};return axios.post("/CRUD",t).then(function(a){for(var t=0;t<a.data.length;t++)1==a.data[t].control_id&&(e.Create=!0),2==a.data[t].control_id&&(e.Read=!0),3==a.data[t].control_id&&(e.Update=!0),4==a.data[t].control_id&&(e.Delete=!0),5==a.data[t].control_id&&(e.Download=!0),6==a.data[t].control_id&&(e.Upload=!0)}).catch(function(a){console.log(a)}),e}}},71076:(a,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>p});var o=e(60173);function r(a){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},r(a)}function i(a,t,e){return(t=function(a){var t=function(a,t){if("object"!=r(a)||!a)return a;var e=a[Symbol.toPrimitive];if(void 0!==e){var o=e.call(a,t||"default");if("object"!=r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(a)}(a,"string");return"symbol"==r(t)?t:t+""}(t))in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}var s=e(14941).call(void 0);const n={data:function(){return i(i(i({boton_centro_costo:0,boton_actualizar_partida:0,desabilitar:!1,verequivalente:!1,guardarequivalente:!1,desabilitar_precios:!1,compra:{condicion:""},mostrar:0,partidascompras:{requisicione_id:0,orden_compra_id:0,articulo_id:0,servicio_id:0,articulo_uno_id:0,servicio_uno_id:0,nombrearti:"",nombrearti_uno:"",nombreserv_uno:"",cantidad:0,precio_unitario:"",proyecto_id:0,adicionales:0,pda:"",cambio_equivalente:0,comentario:"",cantidad_real:0,centro_costo_id:"",id:"",vehiculo_id:0,mantenimiento_v_id:0},clases:{nombrearti:"",precio_unitario:"",cantidad:""},tituloModala:"",empleado:null,tipoAccionpr:0,detalle:0,modala:0,estadomodal:0,modalarticulos:0,isLoadingDetalle:!1,tableDataPartidasCompras:[],dataTableArticulo:[],Vehiculos:[],MantenimientoV:[],columnsart:["codigo","nombre","descripcion","nombreproveedor","marca","calidad"],columnsa:["codigo","nombre","descripcion","marca","calidad"],columnsas:["rf","descripciona","proyecton","rfs","cantidad_compra"],columnsserv:["nombre_servicio","proveedor_marca","unidad_medida"],columnsvehi:["descripcion"],columnsmanv:["descripcion","codigo","marca","comentario"],columnscompras:["id","proyecton","ad","cantidad","precio_unitario","total"],optionsart:{headings:{nombre:"Nombre",descripcion:"Descripción",marca:"Marca",codigo:"Codigo",id:"Acción"},perPage:10,perPageValues:[],skin:s.skin,sortIcon:s.sortIcon,sortable:["codigo","nombre","descripcion","nombreproveedor","marca"],filterable:["codigo","nombre","descripcion","nombreproveedor","marca"],filterByColumn:!0,texts:s.texts,debounce:700,childRow:!0},optionsa:{headings:{nombre:"Nombre",descripcion:"Descripción",nombreproveedor:"Nombre Proveedor",marca:"Marca",codigo:"Codigo",id:"Acciones"},perPage:10,perPageValues:[],skin:s.skin,sortIcon:s.sortIcon,filterByColumn:!0,sortable:["codigo","nombre","descripcion","marca"],filterable:["codigo","nombre","descripcion","marca"],texts:s.texts,debounce:700},optionsserv:{headings:{nombre_servicio:"Nombre del Servicio",proveedor_marca:"Proveedor/Marca",unidad_medida:"Unidad de Medida",id:"Acciones"},perPage:10,perPageValues:[],skin:s.skin,sortIcon:s.sortIcon,filterByColumn:!0,texts:s.texts},optionsvehi:{headings:{descripcion:"Descripción",id:"Acciones"},perPage:10,perPageValues:[],skin:s.skin,sortIcon:s.sortIcon,filterByColumn:!0,texts:s.texts},optionsmanv:{headings:{descripcion:"Descripción"},perPage:10,perPageValues:[],skin:s.skin,sortIcon:s.sortIcon,sortable:["descripcion","codigo","marca","comentario"],filterable:["descripcion","codigo","marca","comentario"],filterByColumn:!0,texts:s.texts}},"optionsa",{headings:{rf:"Folio de requisición",descripciona:"Descripcion Artículo",proyecton:"Proyecto",rfs:"Fecha solicitud de la requisición",cantidad_compra:"Cantidad"},perPage:10,perPageValues:[],skin:s.skin,sortIcon:s.sortIcon,filterByColumn:!0,texts:s.texts}),"optionscompras",{headings:{id:"Acción",proyecton:"Proyecto",ad:"Artículo",cantidad:"Cantidad"},perPage:10,perPageValues:[],skin:s.skin,sortIcon:s.sortIcon,sortable:["proyecton","ad","cantidad","precio_unitario"],filterable:["proyecton","ad","cantidad","precio_unitario"],filterByColumn:!0,listColumns:{condicion:[{id:1,text:"Activo"},{id:0,text:"Dado de Baja"}]},texts:s.texts}),"centro_costo",[])},components:{catalogo:e(24553)},methods:{cargarpartidas:function(a){this.mostrar=1,this.boton_centro_costo=0,this.isLoadingDetalle=!0,this.empleado=a,2==a.condicion?this.desabilitar=!0:this.desabilitar=!1,this.compra.condicion=a.condicion,this.partidascompras.orden_compra_id=a.id;var t=this;axios.get("/compras/"+a.id+"/compras").then(function(a){t.tableDataPartidasCompras=a.data,t.isLoadingDetalle=!1}).catch(function(a){console.log(a)}),axios.get("catvehiculos").then(function(a){t.Vehiculos=a.data}).catch(function(a){console.log(a)}),axios.get("catmantenimientovehiculos").then(function(a){a.data.status?t.MantenimientoV=a.data.servicios:toastr.error(a.data.mensaje)}).catch(function(a){console.log(a)})},getMantenimientoV:function(){var a=this;axios.get("catmantenimientovehiculos").then(function(t){a.MantenimientoV=t.data.servicios}).catch(function(a){console.log(a)})},abrirModalA:function(a,t,e){if("articulo"===a)if("registrar"===t)this.modala=1,this.tituloModala="Registrar artículo a la compra ",o.A.resetObject(this.partidascompras),o.A.resetObject(this.modala),this.tipoAccionpr=1,this.partidascompras.orden_compra_id=e,this.getArticulosRequisicion(),this.verequivalente=!1,this.guardarequivalente=!1,this.$refs.myTableArticulo.refresh()},getArticulosRequisicion:function(){var a=this;axios.get("/partidare/"+(null==a.empleado.proyecto_id?"":a.empleado.proyecto_id)).then(function(t){a.dataTableArticulo=t.data}).catch(function(a){console.log(a)})},seleccionarArticulo2:function(a){this.partidascompras.articulo_id=a.row.id,this.partidascompras.servicio_id=a.row.servicio_id,this.partidascompras.nombrearti=a.row.descripcion,this.partidascompras.proyecto_id=this.empleado.proyecto_id,this.partidascompras.centro_costo_id=a.row.centro_costo_id,a.row.equivalente,this.verequivalente=!1,this.modala=0,this.isLoadingg=!1,this.cerrarModal()},seleccionarArticulosDos:function(a){this.partidascompras.articulo_id=a.row.id,this.partidascompras.nombrearti=a.row.descripcion,this.partidascompras.centro_costo_id=a.row.centro_costo_id,this.partidascompras.articulo_id==this.partidascompras.articulo_uno_id?toastr.warning("Atención","Seleccione un artículo equivalente diferente al original"):(this.modalarticulos=0,this.verequivalente=!1,this.guardarequivalente=!0,this.partidascompras.cambio_equivalente=1)},seleccionarServicio:function(a){this.partidascompras.servicio_id=a.row.id,this.partidascompras.nombrearti=a.row.nombre_servicio+" "+a.row.proveedor_marca,this.partidascompras.centro_costo_id=a.row.centro_costos_id,this.partidascompras.servicio_id==this.partidascompras.servicio_uno_id?toastr.warning("Atención","Seleccione un servicio equivalente diferente al original"):(this.modala=0,this.verequivalente=!1,this.guardarequivalente=!0,this.partidascompras.cambio_equivalente=1)},seleccionarVehiculo:function(a){this.partidascompras.vehiculo_id=a.row.id,this.partidascompras.nombrearti=a.row.descripcion,this.partidascompras.centro_costo_id=a.row.centro_costo_id,this.modala=0},seleccionarMantenimiento:function(a){this.partidascompras.mantenimiento_v_id=a.row.id,this.partidascompras.nombrearti=a.row.descripcion,this.modala=0},cerrarModal:function(){this.modala=0},maestro:function(){this.mostrar=0,this.$emit("partidas:click",this.empleado.proyecto_id),this.cancelar()},validardetalle:function(){""===this.partidascompras.nombrearti?(this.mensaje(),this.validado=0,this.clases.nombrearti=" is-invalid"):""===this.partidascompras.precio_unitario?(this.mensaje(),this.validado=0,this.clases.nombrearti="",this.clases.precio_unitario=" is-invalid"):""===this.partidascompras.cantidad?(this.mensaje(),this.validado=0,this.clases.precio_unitario="",this.clases.cantidad=" is-invalid"):(this.validado=1,this.clases.cantidad="")},mensaje:function(){swal({title:"Error complete todos los campos",type:"warning",confirmButtonColor:"#3085d6",confirmButtonText:"Aceptar!",confirmButtonClass:"btn btn-succeguardarEquivalentess",buttonsStyling:!1,reverseButtons:!0})},guardarPR:function(a,t){if(1==this.validado){this.isLoadingDetalle=!0,this.detalle=1;var e=this;axios({method:a?"POST":"PUT",url:a?"/partidacomprasinrequisicion":"/requisicioncompra/"+this.partidascompras.requisicione_id,data:{requisicione_id:this.partidascompras.requisicione_id,orden_compra_id:this.partidascompras.orden_compra_id,articulo_id:this.partidascompras.articulo_id,servicio_id:this.partidascompras.servicio_id,vehiculo_id:this.partidascompras.vehiculo_id,mantenimiento_v_id:this.partidascompras.mantenimiento_v_id,cantidad:this.partidascompras.cantidad,precio_unitario:this.partidascompras.precio_unitario,proyecto_id:this.partidascompras.proyecto_id,adicionales:this.partidascompras.adicionales,articulo_uno_id:this.partidascompras.articulo_uno_id,servicio_uno_id:this.partidascompras.servicio_uno_id,nombrearti_uno:this.partidascompras.nombrearti_uno,folio:this.empleado.folio,pda:this.partidascompras.pda,cambio_equivalente:this.partidascompras.cambio_equivalente,comentario:this.partidascompras.comentario,centro_costo_id:this.partidascompras.centro_costo_id}}).then(function(a){e.isLoadingDetalle=!1,a.data.status?"error"===a.data.status?swal({type:"error",html:"Ha ocurrido un error notifiqué al administrador y recarge la página"}):(e.cargarpartidas(e.empleado),e.cerrarModal(),e.cancelar(),e.getArticulosRequisicion(),toastr.success("Correcto","Partida agregada a la compra correctamente")):(e.isLoadingDetalle=!1,e.cerrarModal(),e.cancelar(),swal("Error!","No se pueden agregar articulos de diferentes proyectos!","warning"))}).catch(function(a){e.cancelar(),e.isLoadingDetalle=!1})}},cancelar:function(){this.partidascompras.articulo_id=0,this.partidascompras.servicio_id=0,this.partidascompras.vehiculo_id=0,this.partidascompras.mantenimiento_v_id=0,this.partidascompras.peso=0,this.partidascompras.precio_unitario="",this.partidascompras.cantidad=0,this.partidascompras.fecha_requerido="",this.partidascompras.nombrearti="",this.tipoAccionpr=0,this.partidascompras.requisicione_id=0,this.partidascompras.adicionales=0,this.verequivalente=!1,this.guardarequivalente=!1,this.desabilitar_precios=!1,this.partidascompras.cambio_equivalente=0,this.partidascompras.comentario="",this.partidascompras.centro_costo_id="",this.boton_centro_costo=0,this.boton_actualizar_partida=0},eliminarpartidacompra:function(a,t){var e=this;t||(this.swal_titulo="Esta seguro de remover este artículo de la compra?",this.swal_tle="Removido!",this.swal_msg="El registro ha sido removido con éxito."),swal({title:this.swal_titulo,type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Aceptar!",cancelButtonText:"Cancelar",confirmButtonClass:"btn btn-success",cancelButtonClass:"btn btn-danger",buttonsStyling:!1,reverseButtons:!0}).then(function(o){if(o.value){var r=e;axios.get("/requisicioncompra/"+a.id+"/edit").then(function(a){}).catch(function(a){console.log(a)}),axios.get("/partidacomprasinrequisicion/eliminar/"+a.articulo_id+"&"+a.requisicione_id+"&"+a.servicio_id+"&"+a.vehiculo_id).then(function(a){t||toastr.success("Eliminado Correctamente"),r.cargarpartidas(r.empleado),r.getArticulosRequisicion()}).catch(function(a){console.log(a)})}else o.dismiss,swal.DismissReason.cancel})},comprarEquivalente:function(){toastr.warning("Atención","Seleccione el articulo/servicio equivalente"),this.modalarticulos=1,this.partidascompras.articulo_uno_id=this.partidascompras.articulo_id,this.partidascompras.nombrearti_uno=this.partidascompras.nombrearti,this.partidascompras.servicio_uno_id=this.partidascompras.servicio_id,this.desabilitar_precios=!1,this.tipoAccionpr=1},guardarEquivalente:function(){var a=this;a.isLoadingDetalle=!0,axios.post("/comprarequivalente",{requisicione_id:this.partidascompras.requisicione_id,articulo_id:this.partidascompras.articulo_id,servicio_id:this.partidascompras.servicio_id,articulo_uno_id:this.partidascompras.articulo_uno_id,servicio_uno_id:this.partidascompras.servicio_uno_id,nombrearti_uno:this.partidascompras.nombrearti_uno,folio:this.empleado.folio,pda:this.partidascompras.pda}).then(function(t){a.cancelar(),a.isLoadingDetalle=!1,a.desabilitar_precios=!1}).catch(function(a){console.error(a)})},cerrarModalArticulos:function(){this.modalarticulos=0},cambiarEstado:function(a){this.estadomodal=a},agregarArt:function(){this.$refs.articulo.abrirModal("articulo","registrar")},agregarCatV:function(){this.$refs.catalogo.abrirModal("catalogo","registrar")},abrirModal:function(a){this.$refs.articulo.abrirModal("articulo","actualizar",a),this.cerrarModal()},actualizarpartidacomprauno:function(a,t){this.partidascompras.nombrearti=a.ad,this.partidascompras.id=a.id,this.partidascompras.comentario=a.comentario,this.partidascompras.cantidad=a.cantidad,this.partidascompras.precio_unitario=a.precio_unitario,this.partidascompras.centro_costo_id=a.catalogo_centro_costos_id,this.boton_actualizar_partida=1},guardarAP:function(){var a=this;""===this.partidascompras.precio_unitario?toastr.warning("Escriba un precio unitario"):""===this.partidascompras.cantidad?toastr.warning("Escriba la cantidad real comprada"):axios.put("guardaractualizapartida",{id_partida:this.partidascompras.id,precio_unitario:this.partidascompras.precio_unitario,cantidad:this.partidascompras.cantidad,comentario:this.partidascompras.comentario}).then(function(t){"error"===t.data.status?swal({type:"error",html:"Ha ocurrido un error notifiqué al administrador y recarge la página"}):(a.boton_actualizar_partida=0,a.cargarpartidas(a.empleado),a.cerrarModal(),a.cancelar(),a.getArticulosRequisicion(),toastr.success("Correcto","Partida actualizada correctamente"))}).catch(function(a){console.error(a)})},formatPrecio:function(a){return parseFloat(a)}},mounted:function(){}};var c=e(85072),l=e.n(c),d=e(99487),u={insert:"head",singleton:!1};l()(d.A,u);d.A.locals;const p=(0,e(14486).A)(n,function(){var a=this,t=a._self._c;return 1==a.mostrar?t("div",{staticClass:"card"},[t("vue-element-loading",{attrs:{active:a.isLoadingDetalle}}),a._v(" "),t("div",{staticClass:"card-header"},[t("i",{staticClass:"fa fa-align-justify"}),a._v(" Detalles de la compra con folio: "+a._s(null==a.empleado?"":a.empleado.folio)+"\r\n        "),t("button",{staticClass:"btn btn-secondary float-sm-right",attrs:{type:"button"},on:{click:function(t){return a.maestro()}}},[t("i",{staticClass:"fas fa-arrow-left"}),a._v(" Atras\r\n        ")])]),a._v(" "),t("div",{staticClass:"card-body"},[t("v-client-table",{ref:"myTabledescuento",attrs:{columns:a.columnscompras,data:a.tableDataPartidasCompras,options:a.optionscompras},scopedSlots:a._u([{key:"id",fn:function(e){return[t("div",{staticClass:"btn-group",attrs:{role:"group","aria-label":"Button group with nested dropdown"}},[t("div",{staticClass:"btn-group dropup",attrs:{role:"group"}},[t("button",{staticClass:"btn btn-outline-dark dropdown-toggle",attrs:{id:"btnGroupDrop1",type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t("i",{staticClass:"fas fa-grip-horizontal"})]),a._v(" "),t("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"btnGroupDrop1"}},[t("button",{staticClass:"dropdown-item",attrs:{type:"button"},on:{click:function(t){return a.eliminarpartidacompra(e.row,0)}}},[t("i",{staticClass:"icon-trash"}),a._v(" Eliminar.\r\n                            ")]),a._v(" "),t("button",{staticClass:"dropdown-item",attrs:{type:"button"},on:{click:function(t){return a.actualizarpartidacomprauno(e.row,0)}}},[t("i",{staticClass:"icon-trash"}),a._v(" Actualizar Partida.\r\n                            ")])])])])]}},{key:"ad",fn:function(t){return[a._v("\r\n                "+a._s(t.row.ad)+" "+a._s(null==t.row.comentario?"":t.row.comentario)+"\r\n            ")]}},{key:"precio_unitario",fn:function(t){return[a._v("\r\n                "+a._s(a.formatPrecio(t.row.precio_unitario))+"\r\n            ")]}},{key:"cantidad",fn:function(t){return[a._v("\r\n                "+a._s(a.formatPrecio(t.row.cantidad))+"\r\n            ")]}},{key:"total",fn:function(t){return[a._v("\r\n                "+a._s(a.formatPrecio(t.row.total))+"\r\n            ")]}}],null,!1,2233513375)})],1),a._v(" "),t("div",{ref:"formLote",staticClass:"card"},[t("vue-element-loading",{attrs:{active:a.isLoadingDetalle}}),a._v(" "),t("div",{staticClass:"card-header"}),a._v(" "),t("div",{staticClass:"card-body"},[t("form",[t("input",{directives:[{name:"model",rawName:"v-model",value:a.partidascompras.orden_compra_id,expression:"partidascompras.orden_compra_id"}],staticClass:"form-control",attrs:{type:"text",id:"orden_compra_id",name:"orden_compra_id",placeholder:"Articulo",hidden:""},domProps:{value:a.partidascompras.orden_compra_id},on:{input:function(t){t.target.composing||a.$set(a.partidascompras,"orden_compra_id",t.target.value)}}}),a._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:a.partidascompras.requisicione_id,expression:"partidascompras.requisicione_id"}],staticClass:"form-control",attrs:{type:"text",id:"requisicione_id",name:"requisicione_id",placeholder:"Articulo",hidden:""},domProps:{value:a.partidascompras.requisicione_id},on:{input:function(t){t.target.composing||a.$set(a.partidascompras,"requisicione_id",t.target.value)}}}),a._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:a.partidascompras.proyecto_id,expression:"partidascompras.proyecto_id"}],staticClass:"form-control",attrs:{type:"text",id:"proyecto_id",name:"proyecto_id",hidden:""},domProps:{value:a.partidascompras.proyecto_id},on:{input:function(t){t.target.composing||a.$set(a.partidascompras,"proyecto_id",t.target.value)}}}),a._v(" "),t("div",{staticClass:"form-row"},[t("div",{staticClass:"form-group col-md-8"},[t("label",[a._v("Artículo")]),a._v(" "),t("div",{staticClass:"input-group"},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:a.partidascompras.nombrearti,expression:"partidascompras.nombrearti"}],class:"form-control"+a.clases.nombrearti,attrs:{name:"name",rows:"2",cols:"80",readonly:""},domProps:{value:a.partidascompras.nombrearti},on:{input:function(t){t.target.composing||a.$set(a.partidascompras,"nombrearti",t.target.value)}}}),a._v(" "),t("div",{staticClass:"input-group-append"},[t("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(t){return a.abrirModalA("articulo","registrar",a.partidascompras.orden_compra_id)}}},[a._v("Buscar")]),a._v(" "),t("button",{directives:[{name:"show",rawName:"v-show",value:a.verequivalente,expression:"verequivalente"}],staticClass:"btn btn-success",attrs:{type:"button"},on:{click:function(t){return a.comprarEquivalente()}}},[t("i",{staticClass:"fas fa-exchange-alt"}),a._v(" Cambiar")]),a._v(" "),"MANTENIMIENTO VEHICULAR"==a.empleado.nombre_corto_proyecto?t("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(t){return a.agregarCatV()}}},[a._v("Agregar")]):a._e()])]),a._v(" "),t("catalogo",{ref:"catalogo",on:{cerrarAbrir:function(t){return a.getMantenimientoV()}}})],1)]),a._v(" "),t("div",{staticClass:"form-row"},[t("div",{staticClass:"form-group col-md-8"},[t("label",{attrs:{for:"comentario"}},[a._v("Comentario para Proveedor")]),a._v(" "),t("textarea",{directives:[{name:"model",rawName:"v-model",value:a.partidascompras.comentario,expression:"partidascompras.comentario"}],staticClass:"form-control",attrs:{title:"Texto que aparecera en el formato!",autocomplete:"off",id:"comentario",rows:"3"},domProps:{value:a.partidascompras.comentario},on:{input:function(t){t.target.composing||a.$set(a.partidascompras,"comentario",t.target.value)}}})])]),a._v(" "),t("div",{staticClass:"form-row"},[t("div",{staticClass:"form-group col-md-4"},[t("label",{attrs:{for:"validationDefaultUsername"}},[a._v("Precio Unitario")]),a._v(" "),t("div",{staticClass:"input-group"},[a._m(0),a._v(" "),t("input",{directives:[{name:"validate",rawName:"v-validate",value:"decimal:6",expression:"'decimal:6'"},{name:"model",rawName:"v-model",value:a.partidascompras.precio_unitario,expression:"partidascompras.precio_unitario"}],class:"form-control"+a.clases.precio_unitario,attrs:{type:"text",disabled:a.desabilitar_precios,min:"0",pattern:"^[0-9]+",placeholder:"Precio unitario",autocomplete:"off",id:"precio_unitario","data-vv-name":"precio_unitario"},domProps:{value:a.partidascompras.precio_unitario},on:{input:function(t){t.target.composing||a.$set(a.partidascompras,"precio_unitario",t.target.value)}}})]),a._v(" "),t("span",{staticClass:"text-danger"},[a._v(a._s(a.errors.first("precio_unitario")))])]),a._v(" "),t("div",{staticClass:"form-group col-md-4"},[t("label",{attrs:{for:"validationDefaultUsername"}},[a._v("Adicionales")]),a._v(" "),t("div",{staticClass:"input-group"},[a._m(1),a._v(" "),t("input",{directives:[{name:"validate",rawName:"v-validate",value:"decimal:6",expression:"'decimal:6'"},{name:"model",rawName:"v-model",value:a.partidascompras.adicionales,expression:"partidascompras.adicionales"}],class:"form-control"+a.clases.precio_unitario,attrs:{type:"text",disabled:a.desabilitar_precios,min:"0",pattern:"^[0-9]+",placeholder:"Adicionales",autocomplete:"off",id:"adicionales","data-vv-name":"adicionales"},domProps:{value:a.partidascompras.adicionales},on:{input:function(t){t.target.composing||a.$set(a.partidascompras,"adicionales",t.target.value)}}})]),a._v(" "),t("span",{staticClass:"text-danger"},[a._v(a._s(a.errors.first("adicionales")))])])]),a._v(" "),t("div",{staticClass:"form-row"},[t("div",{staticClass:"form-group col-md-4"},[t("label",[a._v("Cantidad requerida")]),a._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:a.partidascompras.cantidad_real,expression:"partidascompras.cantidad_real"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:a.partidascompras.cantidad_real},on:{input:function(t){t.target.composing||a.$set(a.partidascompras,"cantidad_real",t.target.value)}}})]),a._v(" "),t("div",{staticClass:"form-group col-md-4"},[t("label",{attrs:{for:"validationDefaultUsername"}},[a._v("Cantidad real comprada")]),a._v(" "),t("input",{directives:[{name:"validate",rawName:"v-validate",value:"decimal:3",expression:"'decimal:3'"},{name:"model",rawName:"v-model",value:a.partidascompras.cantidad,expression:"partidascompras.cantidad"}],class:"form-control"+a.clases.cantidad,attrs:{type:"text",disabled:a.desabilitar_precios,min:"0",pattern:"^[0-9]+",placeholder:"Cantidad real a comprar",autocomplete:"off",id:"cantidad","data-vv-name":"cantidad"},domProps:{value:a.partidascompras.cantidad},on:{input:function(t){t.target.composing||a.$set(a.partidascompras,"cantidad",t.target.value)}}}),a._v(" "),t("span",{staticClass:"text-danger"},[a._v(a._s(a.errors.first("cantidad")))])])])])]),a._v(" "),t("div",{staticClass:"card-footer"},[t("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(t){return a.cancelar()}}},[a._v("Cancelar")]),a._v(" "),1==a.tipoAccionpr?t("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(t){a.validardetalle(),a.guardarPR(1,a.partidascompras.orden_compra_id)}}},[t("i",{staticClass:"fas fa-save"}),a._v(" Agregar")]):a._e(),a._v(" "),1==a.boton_actualizar_partida?t("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(t){return a.guardarAP()}}},[t("i",{staticClass:"fas fa-save"}),a._v(" Actualizar Partida")]):a._e()])],1),a._v(" "),t("div",{staticClass:"modal fade",class:{mostrar:a.modalarticulos},staticStyle:{display:"none"},attrs:{tabindex:"-1",role:"dialog","aria-labelledby":"myModalLabel","aria-hidden":"true"}},[t("div",{staticClass:"modal-dialog modal-dark modal-lg",attrs:{role:"document"}},[t("div",{staticClass:"modal-content"},[t("div",[t("vue-element-loading",{attrs:{active:a.isLoadingDetalle}}),a._v(" "),t("div",{staticClass:"modal-header"},[t("h4",{staticClass:"modal-title",domProps:{textContent:a._s(a.tituloModala)}}),a._v(" "),t("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(t){return a.cerrarModal()}}},[t("span",{attrs:{"aria-hidden":"true"}},[a._v("×")])])]),a._v(" "),t("div",{staticClass:"modal-body"},[t("input",{attrs:{type:"hidden",name:"id"}}),a._v(" "),t("div",{staticClass:"modal-body"},[t("v-server-table",{ref:"myTable",attrs:{url:"/articulo/busqueda",columns:a.columnsa,options:a.optionsa},on:{"row-click":a.seleccionarArticulo2},scopedSlots:a._u([{key:"calidad",fn:function(e){return[null!=e.row.calidad_id?[t("button",{staticClass:"btn btn-warning",attrs:{type:"button","data-toggle":"tooltip","data-placement":"top",title:e.row.descal}},[a._v("\r\n                                            "+a._s(e.row.calidad)+"\r\n                                        ")])]:a._e()]}}],null,!1,1710625463)})],1)]),a._v(" "),t("div",{staticClass:"modal-footer"},[t("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(t){return a.cerrarModal()}}},[a._v("Cerrar")])])],1)])])]),a._v(" "),t("div",{staticClass:"modal fade",class:{mostrar:a.modala},staticStyle:{display:"none"},attrs:{tabindex:"-1",role:"dialog","aria-labelledby":"myModalLabel","aria-hidden":"true"}},[t("div",{staticClass:"modal-dialog modal-dark modal-lg",attrs:{role:"document"}},[t("div",{staticClass:"modal-content"},[t("div",[t("div",{staticClass:"modal-header"},[t("h4",{staticClass:"modal-title"},[a._v("Seleccionar "+a._s("VEHÍCULOS"!=a.empleado.nombre_corto_proyecto?"artículo/servicio":"vehículos"))]),a._v(" "),t("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(t){return a.cerrarModal()}}},[t("span",{attrs:{"aria-hidden":"true"}},[a._v("×")])])]),a._v(" "),t("div",{staticClass:"modal-body"},[t("input",{attrs:{type:"hidden",name:"id"}}),a._v(" "),t("div",{staticClass:"modal-body"},[t("div",{staticClass:"accordion",attrs:{id:"accordiondos"}},[t("div",{staticClass:"card"},[t("div",{staticClass:"card-header bg-dark justify-content-center",attrs:{id:"headingUno"}},[t("h5",{staticClass:"mb-0"},["VEHÍCULOS"!=a.empleado.nombre_corto_proyecto&&"MANTENIMIENTO VEHICULAR"!=a.empleado.nombre_corto_proyecto?t("button",{staticClass:"btn btn-dark collapsed",on:{click:function(t){return a.cambiarEstado(1)}}},[t("b",[a._v(" Articulos ")])]):a._e(),a._v(" "),"VEHÍCULOS"!=a.empleado.nombre_corto_proyecto&&"MANTENIMIENTO VEHICULAR"!=a.empleado.nombre_corto_proyecto?t("button",{staticClass:"btn btn-dark collapsed",on:{click:function(t){return a.cambiarEstado(2)}}},[t("b",[a._v(" Servicios ")])]):a._e(),a._v(" "),"VEHÍCULOS"==a.empleado.nombre_corto_proyecto?t("button",{staticClass:"btn btn-dark collapsed",on:{click:function(t){return a.cambiarEstado(3)}}},[t("b",[a._v(" Vehículos ")])]):a._e(),a._v(" "),"MANTENIMIENTO VEHICULAR"==a.empleado.nombre_corto_proyecto?t("button",{staticClass:"btn btn-dark collapsed",on:{click:function(t){return a.cambiarEstado(4)}}},[t("b",[a._v(" Mantenimiento Vehiculos ")])]):a._e()])]),a._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:1==a.estadomodal,expression:"estadomodal == 1"}]},[t("v-server-table",{ref:"myTableArticulo",attrs:{url:"/articulo/busqueda",columns:a.columnsart,options:a.optionsart},on:{"row-click":a.seleccionarArticulo2},scopedSlots:a._u([{key:"calidad",fn:function(e){return[null!=e.row.calidad_id?[t("button",{staticClass:"btn btn-warning",attrs:{type:"button","data-toggle":"tooltip","data-placement":"top",title:e.row.descal}},[a._v("\r\n                                                        "+a._s(e.row.calidad)+"\r\n                                                    ")])]:a._e()]}},{key:"child_row",fn:function(e){return[t("div",{staticClass:"btn-group",attrs:{role:"group","aria-label":"Button group with nested dropdown"}},[t("div",{staticClass:"btn-group",attrs:{role:"group"}},[t("button",{staticClass:"btn btn-outline-dark dropdown-toggle",attrs:{id:"btnGroupDrop1",type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t("i",{staticClass:"fas fa-grip-horizontal"}),a._v(" Acciones\r\n                                                        ")]),a._v(" "),t("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"btnGroupDrop1"}},[t("button",{staticClass:"dropdown-item",attrs:{type:"button"},on:{click:function(t){return a.abrirModal(e.row)}}},[t("i",{staticClass:"icon-pencil"}),a._v(" Actualizar Articulo\r\n                                                            ")])])])])]}}],null,!1,2488657088)})],1),a._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:2==a.estadomodal,expression:"estadomodal == 2"}]},[t("v-server-table",{ref:"myTable",attrs:{url:"/catservicio/busqueda",columns:a.columnsserv,options:a.optionsserv},on:{"row-click":a.seleccionarServicio}})],1),a._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:3==a.estadomodal,expression:"estadomodal == 3"}]},[t("v-client-table",{ref:"myTable",attrs:{data:a.Vehiculos,columns:a.columnsvehi,options:a.optionsvehi},on:{"row-click":a.seleccionarVehiculo}})],1),a._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:4==a.estadomodal,expression:"estadomodal == 4"}]},[t("v-client-table",{ref:"myTable",attrs:{data:a.MantenimientoV,columns:a.columnsmanv,options:a.optionsmanv},on:{"row-click":a.seleccionarMantenimiento}})],1)])])])]),a._v(" "),t("div",{staticClass:"modal-footer"},[t("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(t){return a.cerrarModal()}}},[a._v("Cerrar")])])])])])])],1):a._e()},[function(){var a=this._self._c;return a("div",{staticClass:"input-group-addon"},[a("span",{staticClass:"input-group-text"},[this._v("$")])])},function(){var a=this._self._c;return a("div",{staticClass:"input-group-addon"},[a("span",{staticClass:"input-group-text"},[this._v("$")])])}],!1,null,null,null).exports},71181:(a,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>r});const o={data:function(){return{isLoading:!1,listaPermisos:[],widgets:{autorizarequisicion:!0,servicios:!0,precios2:!1}}},components:{autorizarequisicion:function(a){return e.e(392).then(function(){return a(e(25672))}.bind(null,e)).catch(e.oe)}},methods:{getListaPermisos:function(){var a=this;this.isLoading=!0;var t=this;axios.post("/permisosdashboard/porusuariomodulo",{modulo_id:5}).then(function(e){if(t.listaPermisos=e.data,t.isLoading=!1,t.listaPermisos.indexOf("autorizarequisicion")>=0){t.widgets.autorizarequisicion=!0;a.$refs.autorizarequisicion}}).catch(function(a){console.log(a)})}},mounted:function(){this.getListaPermisos()}};const r=(0,e(14486).A)(o,function(){var a=this,t=a._self._c;return t("main",{staticClass:"main"},[t("div",{staticClass:"container-fluid"},[t("vue-element-loading",{attrs:{active:a.isLoading}}),a._v(" "),t("div",{staticClass:"row"},[t("div",{directives:[{name:"show",rawName:"v-show",value:a.widgets.autorizarequisicion,expression:"widgets.autorizarequisicion"}],staticClass:"col-md-12"},[t("autorizarequisicion",{ref:"autorizarequisicion"})],1)])],1)])},[],!1,null,null,null).exports},72174:(a,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>s});var o=e(60173),r=e(14941).call(void 0);const i={data:function(){return{url:"/catmantenimientovehiculos",desabilitado:0,catalogo:{id:0,descripcion:"",codigo:"",marca:"",comentario:""},centro_costo:[],modal:0,tituloModal:"",tipoAccion:0,isLoading:!1,isLoading_servicios:!1,columns_servicios:["id","descripcion","codigo","marca","comentario"],list_servicios:[],options_servicios:{headings:{id:"Acción",descripcion:"Descripción"},perPage:10,perPageValues:[],skin:r.skin,sortIcon:r.sortIcon,filterByColumn:!0,texts:r.texts}}},computed:{},methods:{ObtenerServicios:function(){var a=this;this.isLoading_servicios=!0,axios.get(this.url).then(function(t){a.isLoading_servicios=!1,t.data.status?a.list_servicios=t.data.servicios:toastr.error(t.data.mensaje)})},guardarServicio:function(a){var t=this;this.$validator.validate().then(function(e){e&&(t.isLoading=!0,axios({method:a?"POST":"PUT",url:a?t.url:t.url+"/"+t.id,data:{id:t.catalogo.id,descripcion:t.catalogo.descripcion,codigo:t.catalogo.codigo,marca:t.catalogo.marca,comentario:t.catalogo.comentario}}).then(function(e){t.isLoading=!1,e.data.status?(t.cerrarModal(),t.ObtenerServicios(),a?toastr.success("Servicio Agregado Correctamente"):toastr.success("Servicio Actualizado Correctamente")):toastr.error(e.data.mensaje)}))})},cerrarModal:function(){this.modal=0,this.tituloModal="",o.A.resetObject(this.catalogo)},abrirModal:function(){var a=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];this.modal=1,a?(this.tituloModal="Registrar Catalogo",this.tipoAccion=1):(this.tituloModal="Actualizar Catalogo",this.catalogo.id=t.id,this.tipoAccion=2,this.catalogo.descripcion=t.descripcion,this.catalogo.codigo=t.codigo,this.catalogo.marca=t.marca,this.catalogo.comentario=t.comentario)}},mounted:function(){this.ObtenerServicios()}};const s=(0,e(14486).A)(i,function(){var a=this,t=a._self._c;return t("main",{staticClass:"main"},[t("div",{staticClass:"container-fluid"},[t("div",{staticClass:"card"},[t("div",{staticClass:"card-header"},[t("i",{staticClass:"fa fa-align-justify"}),a._v(" Servicios vehiculares\r\n                "),t("button",{staticClass:"btn btn-dark float-sm-right",attrs:{type:"button"},on:{click:function(t){return a.abrirModal()}}},[t("i",{staticClass:"fas fa-plus"}),a._v("Nuevo\r\n                ")])]),a._v(" "),t("div",{staticClass:"card-body"},[t("v-client-table",{ref:"myTable",attrs:{columns:a.columns_servicios,data:a.list_servicios,options:a.options_servicios},scopedSlots:a._u([{key:"id",fn:function(e){return[t("div",{staticClass:"btn-group",attrs:{role:"group","aria-label":"Button group with nested dropdown"}},[t("div",{staticClass:"btn-group dropup",attrs:{role:"group"}},[t("button",{staticClass:"btn btn-outline-dark dropdown-toggle",attrs:{id:"btnGroupDrop1",type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t("i",{staticClass:"fas fa-grip-horizontal"}),a._v(" Acciones\r\n                                ")]),a._v(" "),t("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"btnGroupDrop1"}},[t("button",{staticClass:"dropdown-item",attrs:{type:"button"},on:{click:function(t){return a.abrirModal(!1,e.row)}}},[t("i",{staticClass:"fas fa-edit"}),a._v("Actualizar\r\n                                    ")])])])])]}}])})],1)])]),a._v(" "),t("div",{staticClass:"modal fade",class:{mostrar:a.modal},staticStyle:{display:"none"},attrs:{tabindex:"-1",role:"dialog","aria-labelledby":"myModalLabel","aria-hidden":"true"}},[t("div",{staticClass:"modal-dialog modal-dark modal-lg",attrs:{role:"document"}},[t("div",{staticClass:"modal-content"},[t("div",[t("div",{staticClass:"modal-header"},[t("h4",{staticClass:"modal-title",domProps:{textContent:a._s(a.tituloModal)}}),a._v(" "),t("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(t){return a.cerrarModal()}}},[t("span",{attrs:{"aria-hidden":"true"}},[a._v("×")])])]),a._v(" "),t("div",{staticClass:"modal-body"},[t("vue-element-loading",{attrs:{active:a.isLoading}}),a._v(" "),t("div",[t("div",{staticClass:"form-group row"},[t("label",{staticClass:"col-md-3 form-control-label"},[a._v("Descripción")]),a._v(" "),t("div",{staticClass:"col-md-6"},[t("textarea",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:a.catalogo.descripcion,expression:"catalogo.descripcion"}],staticClass:"form-control",attrs:{"data-vv-name":"descripcion",placeholder:"Descripción",autocomplete:"off",rows:"8",cols:"80"},domProps:{value:a.catalogo.descripcion},on:{input:function(t){t.target.composing||a.$set(a.catalogo,"descripcion",t.target.value)}}}),a._v(" "),t("span",{staticClass:"text-danger"},[a._v(a._s(a.errors.first("descripcion")))])])]),a._v(" "),t("div",{staticClass:"form-group row"},[t("label",{staticClass:"col-md-3 form-control-label"},[a._v("Código")]),a._v(" "),t("div",{staticClass:"col-md-6"},[t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:a.catalogo.codigo,expression:"catalogo.codigo"}],staticClass:"form-control",attrs:{type:"text","data-vv-name":"codigo",placeholder:"Codígo",autocomplete:"off"},domProps:{value:a.catalogo.codigo},on:{input:function(t){t.target.composing||a.$set(a.catalogo,"codigo",t.target.value)}}}),a._v(" "),t("span",{staticClass:"text-danger"},[a._v(a._s(a.errors.first("codigo")))])])]),a._v(" "),t("div",{staticClass:"form-group row"},[t("label",{staticClass:"col-md-3 form-control-label"},[a._v("Marca")]),a._v(" "),t("div",{staticClass:"col-md-6"},[t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:a.catalogo.marca,expression:"catalogo.marca"}],staticClass:"form-control",attrs:{type:"text","data-vv-name":"marca",placeholder:"Marca",autocomplete:"off"},domProps:{value:a.catalogo.marca},on:{input:function(t){t.target.composing||a.$set(a.catalogo,"marca",t.target.value)}}}),a._v(" "),t("span",{staticClass:"text-danger"},[a._v(a._s(a.errors.first("marca")))])])]),a._v(" "),t("div",{staticClass:"form-group row"},[t("label",{staticClass:"col-md-3 form-control-label"},[a._v("Comentario")]),a._v(" "),t("div",{staticClass:"col-md-6"},[t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:a.catalogo.comentario,expression:"catalogo.comentario"}],staticClass:"form-control",attrs:{type:"text","data-vv-name":"comentario",placeholder:"Comentario",autocomplete:"off"},domProps:{value:a.catalogo.comentario},on:{input:function(t){t.target.composing||a.$set(a.catalogo,"comentario",t.target.value)}}}),a._v(" "),t("span",{staticClass:"text-danger"},[a._v(a._s(a.errors.first("comentario")))])])])])],1),a._v(" "),t("div",{staticClass:"modal-footer"},[t("vue-element-loading",{attrs:{active:a.isLoading}}),a._v(" "),t("div",[t("button",{staticClass:"btn btn-outline-dark",attrs:{type:"button"},on:{click:function(t){return a.cerrarModal()}}},[t("i",{staticClass:"fas fa-window-close"}),a._v("Cerrar")]),a._v(" "),1==a.tipoAccion?t("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(t){return a.guardarServicio(1)}}},[t("i",{staticClass:"fas fa-save"}),a._v("Guardar")]):a._e(),a._v(" "),2==a.tipoAccion?t("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(t){return a.guardarServicio(0)}}},[t("i",{staticClass:"fas fa-save"}),a._v("Actualizar")]):a._e()])],1)])])])])])},[],!1,null,null,null).exports},77210:(a,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>x});const o={props:{showModal:Boolean,loading:Boolean},data:function(){return{selectedFile:null,resetKey:0}},methods:{triggerFile:function(){this.$refs.fileInput.click()},handleFileSelect:function(a){var t=a.target.files[0];this.selectedFile=t},upload:function(){this.selectedFile&&(this.$emit("set-loading",!0),this.$emit("file-upload",this.selectedFile))},closeModal:function(){this.selectedFile=null,this.resetKey++,this.$emit("close")}}};var r=e(85072),i=e.n(r),s=e(38473),n={insert:"head",singleton:!1};i()(s.A,n);s.A.locals;var c=e(14486);const l=(0,c.A)(o,function(){var a=this,t=a._self._c;return t("div",{staticClass:"modal fade",class:{show:a.showModal,"d-block":a.showModal},attrs:{tabindex:"-1",role:"dialog"}},[t("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[t("div",{staticClass:"modal-content excel-modal p-4"},[t("h2",{staticClass:"title"},[a._v("Sube tu archivo Excel")]),a._v(" "),t("div",{staticClass:"excel-drop",on:{click:a.triggerFile}},[t("input",{key:a.resetKey,ref:"fileInput",staticClass:"hidden-input",attrs:{type:"file",accept:".xlsx, .xls"},on:{change:a.handleFileSelect}}),a._v(" "),t("svg",{staticClass:"excel-icon",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"62",height:"62",fill:"currentColor",viewBox:"0 0 16 16"}},[t("path",{attrs:{d:"M5.884 6.68a1 1 0 0 0-1.768 0l-3 5.5A1 1 0 0 0 2 13.5h2a1 1 0 0 0 .894-.553L5 11l.106-.213L7 13.5a1 1 0 0 0 .894.553h2a1 1 0 0 0 .884-1.447l-3-5.5z"}}),a._v(" "),t("path",{attrs:{d:"M14 4.5V14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-.5h1V14a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.5H14z"}}),a._v(" "),t("path",{attrs:{d:"M10.5 0A1.5 1.5 0 0 1 12 1.5V4H4V1.5A1.5 1.5 0 0 1 5.5 0h5z"}})]),a._v(" "),t("span",{staticClass:"excel-text"},[a._v("\n          Click aquí para elegir archivo Excel\n        ")]),a._v(" "),a.selectedFile?t("p",{staticClass:"file-selected"},[a._v("\n          Seleccionado: "),t("strong",[a._v(a._s(a.selectedFile.name))])]):a._e()]),a._v(" "),a.loading?t("div",{staticClass:"loading-box"},[t("div",{staticClass:"loader"}),a._v(" "),t("p",[a._v("Cargando archivo...")])]):a._e(),a._v(" "),t("button",{staticClass:"btn-upload",attrs:{disabled:!a.selectedFile||a.loading},on:{click:a.upload}},[a.loading?t("span",[a._v("\n          Procesando...\n        ")]):t("span",{staticClass:"flex-center"},[t("svg",{staticClass:"upload-icon-btn",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",fill:"currentColor",viewBox:"0 0 16 16"}},[t("path",{attrs:{d:"M.5 9.9a.5.5 0 0 1 .5-.4h4v5a.5.5 0 0 0 1 0v-5h4a.5.5 0 0 1 0 1H6v4a.5.5 0 0 1-1 0v-4H1a.5.5 0 0 1-.5-.6z"}}),a._v(" "),t("path",{attrs:{d:"M7.646 1.146a.5.5 0 0 1 .708 0l3.182 3.182a.5.5 0 0 1-.707.707L8.5 2.707V10.5a.5.5 0 0 1-1 0V2.707L5.646 5.035a.5.5 0 1 1-.707-.707L7.646 1.146z"}})]),a._v("\n          Cargar Excel\n        ")])]),a._v(" "),t("span",{staticClass:"close-btn",on:{click:a.closeModal}},[a._v("×")])])])])},[],!1,null,"09e94ab4",null).exports;var d=e(60173);function u(a){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},u(a)}function p(a,t){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(a);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})),e.push.apply(e,o)}return e}function v(a){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?p(Object(e),!0).forEach(function(t){m(a,t,e[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):p(Object(e)).forEach(function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))})}return a}function m(a,t,e){return(t=function(a){var t=function(a,t){if("object"!=u(a)||!a)return a;var e=a[Symbol.toPrimitive];if(void 0!==e){var o=e.call(a,t||"default");if("object"!=u(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(a)}(a,"string");return"symbol"==u(t)?t:t+""}(t))in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}function _(){var a,t,e="function"==typeof Symbol?Symbol:{},o=e.iterator||"@@iterator",r=e.toStringTag||"@@toStringTag";function i(e,o,r,i){var c=o&&o.prototype instanceof n?o:n,l=Object.create(c.prototype);return f(l,"_invoke",function(e,o,r){var i,n,c,l=0,d=r||[],u=!1,p={p:0,n:0,v:a,a:v,f:v.bind(a,4),d:function(t,e){return i=t,n=0,c=a,p.n=e,s}};function v(e,o){for(n=e,c=o,t=0;!u&&l&&!r&&t<d.length;t++){var r,i=d[t],v=p.p,m=i[2];e>3?(r=m===o)&&(c=i[(n=i[4])?5:(n=3,3)],i[4]=i[5]=a):i[0]<=v&&((r=e<2&&v<i[1])?(n=0,p.v=o,p.n=i[1]):v<m&&(r=e<3||i[0]>o||o>m)&&(i[4]=e,i[5]=o,p.n=m,n=0))}if(r||e>1)return s;throw u=!0,o}return function(r,d,m){if(l>1)throw TypeError("Generator is already running");for(u&&1===d&&v(d,m),n=d,c=m;(t=n<2?a:c)||!u;){i||(n?n<3?(n>1&&(p.n=-1),v(n,c)):p.n=c:p.v=c);try{if(l=2,i){if(n||(r="next"),t=i[r]){if(!(t=t.call(i,c)))throw TypeError("iterator result is not an object");if(!t.done)return t;c=t.value,n<2&&(n=0)}else 1===n&&(t=i.return)&&t.call(i),n<2&&(c=TypeError("The iterator does not provide a '"+r+"' method"),n=1);i=a}else if((t=(u=p.n<0)?c:e.call(o,p))!==s)break}catch(t){i=a,n=1,c=t}finally{l=1}}return{value:t,done:u}}}(e,r,i),!0),l}var s={};function n(){}function c(){}function l(){}t=Object.getPrototypeOf;var d=[][o]?t(t([][o]())):(f(t={},o,function(){return this}),t),u=l.prototype=n.prototype=Object.create(d);function p(a){return Object.setPrototypeOf?Object.setPrototypeOf(a,l):(a.__proto__=l,f(a,r,"GeneratorFunction")),a.prototype=Object.create(u),a}return c.prototype=l,f(u,"constructor",l),f(l,"constructor",c),c.displayName="GeneratorFunction",f(l,r,"GeneratorFunction"),f(u),f(u,r,"Generator"),f(u,o,function(){return this}),f(u,"toString",function(){return"[object Generator]"}),(_=function(){return{w:i,m:p}})()}function f(a,t,e,o){var r=Object.defineProperty;try{r({},"",{})}catch(a){r=0}f=function(a,t,e,o){function i(t,e){f(a,t,function(a){return this._invoke(t,e,a)})}t?r?r(a,t,{value:e,enumerable:!o,configurable:!o,writable:!o}):a[t]=e:(i("next",0),i("throw",1),i("return",2))},f(a,t,e,o)}function b(a,t,e,o,r,i,s){try{var n=a[i](s),c=n.value}catch(a){return void e(a)}n.done?t(c):Promise.resolve(c).then(o,r)}function g(a){return function(){var t=this,e=arguments;return new Promise(function(o,r){var i=a.apply(t,e);function s(a){b(i,o,r,s,n,"next",a)}function n(a){b(i,o,r,s,n,"throw",a)}s(void 0)})}}var h=e(14941).call(void 0);const C={components:{ModalComponent:l},data:function(){return{n_temp:0,banco_edit:{},tipo_guardar:1,ListBancos_temp:[],ListBancos:[],temp2_proveedor_cuenta:"",temp2_proveedor_clabe:"",temp2_proveedor_condiciones:"",temp2_proveedor_moneda:"MXN",temp2_proveedor_banco:"",temp_proveedor_cuenta:"",temp_proveedor_clabe:"",temp_proveedor_condiciones:"",temp_proveedor_moneda:"MXN",temp_proveedor_banco:"",rfc_valido:!1,isLoading_proveedores:!1,url:"/proveedores",columnsProvedores:["banco","cuenta","clabe","moneda","condiciones"],tableDataProveedores:[],optionsProveedores:{headings:{clabe:"Clabe",condiciones:"Condición de pago",cuenta:"No. de Cuenta"},perPage:20,perPageValues:[],skin:h.skin,texts:h.texts,filterable:!1},modalProveedor:0,tipo_proveedor:1,PermisosCrud:{},proveedor:{},listaProveedores:[],modal:0,tituloModal:"",tipoAccion:0,isLoading:!1,columns:["id","idControl","nombre","razon_social","IdentificadorFiscal","contacto","categoria","condicion"],list_proveedores:[],options:{headings:{id:"Acciones",idControl:"ID",nombre:"Nombre Comercial",IdentificadorFiscal:"Indentificador Fiscal",razon_social:"Razón Social",direccion:"Dirección",condicion:"Estado"},perPage:20,perPageValues:[],skin:h.skin,sortIcon:h.sortIcon,filterByColumn:!0,texts:h.texts},list_historial:[],nombre_proveedor:"",ver_modal_historial:!1,isObtenerHistorial_loading:!1,list_giro_suministro:[],list_modificaciones:[],list_modificaciones_db:[],list_tipos_documentos:[],list_tipos_documentos_db:[],anio:null,rfcTouched:!1,taxidTouched:!1,Years:[],yearSince:2020,yearUntil:(new Date).getFullYear(),showModalExcel:!1,loading:!1,isDownloading:!1,taxidValido:!1,form:{razon_social:"",nombre:"",giro:"",nacionalidad:"",calle:"",no_exterior:"",no_interior:"",cp:"",colonia:"",municipio:"",ciudad:"",estado:"",temp2_proveedor_banco:"",temp2_proveedor_cuenta:"",temp2_proveedor_clabe:"",temp2_proveedor_moneda:"",limite_credito:"",ventas_contacto:"",ventas_telefono:"",ventas_celular:"",ventas_correo:"",facturacion_contacto:"",facturacion_telefono:"",facturacion_celular:"",facturacion_correo:""}}},watch:{"proveedor.rfc":function(a){if(!a)return this.rfc_valido=!1,void(this.rfcTouched=!1);var t=a.toUpperCase();t===a?(this.rfcTouched=!0,this.rfc_valido=this.AuxValidarRFC(t)):this.proveedor.rfc=t},"proveedor.taxid":function(a){if(!a)return this.taxidValido=!1,void(this.taxidTouched=!1);this.proveedor.taxid=this.formatEIN(a),this.taxidTouched=!0,this.taxidValido=this.validarTaxIdUSA(this.proveedor.taxid)}},created:function(){this.setperiodCurrentYear()},computed:{typePeople:function(){return this.proveedor.rfc?12===this.proveedor.rfc.length?"moral":13===this.proveedor.rfc.length?"fisica":null:null},rfcDisabled:function(){this.proveedor.rfc},taxidDisabled:function(){this.proveedor.taxid}},methods:{setperiodCurrentYear:function(){this.anio=(new Date).getFullYear()},generateYears:function(){this.Years=[];for(var a=this.yearSince;a<=this.yearUntil;a++)this.Years.push({anio:a})},selectYear:function(a){this.anio=a,this.ObtenerProveedores()},ObtenerProveedores:function(){var a=this;this.isLoading_proveedores=!0,axios.get("/compras/proveedores/obtener/"+this.anio).then(function(t){a.isLoading_proveedores=!1,t.data.status?a.list_proveedores=t.data.proveedores:toastr.error(t.data.mensaje)})},GuardarProveedor:function(a){var t=this;return g(_().m(function e(){var o,r,i,s;return _().w(function(e){for(;;)switch(e.p=e.n){case 0:return e.p=0,e.n=1,t.$validator.validate();case 1:if(e.v){e.n=2;break}return e.a(2);case 2:if(o=!!t.proveedor.rfc,r=!!t.proveedor.taxid,!o||!r){e.n=3;break}return toastr.warning("No puede enviar RFC y TAX ID juntos"),e.a(2);case 3:if(o||r){e.n=4;break}return toastr.warning("Debe ingresar RFC o TAX ID"),e.a(2);case 4:if(1!==t.tipo_proveedor||t.rfc_valido){e.n=5;break}return toastr.warning("Ingrese un RFC válido"),e.a(2);case 5:if(2!==t.tipo_proveedor||t.taxidValido){e.n=6;break}return toastr.warning("Ingrese un Tax ID válido"),e.a(2);case 6:return 1==t.tipo_proveedor?t.proveedor.nacionalidad="NACIONAL":2==t.tipo_proveedor?t.proveedor.nacionalidad="EXTRANJERO":t.proveedor.nacionalidad=null,Object.keys(t.proveedor).forEach(function(a){""!==t.proveedor[a]&&"N/A"!==t.proveedor[a]||(t.proveedor[a]=null)}),i=new FormData,t.isLoading=!0,t.proveedor.tipos_modificacion=t.list_modificaciones_db.join(","),t.proveedor.tipos_documentos=t.list_tipos_documentos_db.join(","),a||i.append("id",t.proveedor.id),i.append("nombre",t.proveedor.nombre),i.append("direccion",t.proveedor.direccion),i.append("razon_social",t.proveedor.razon_social),i.append("giro",t.proveedor.giro),1==t.tipo_proveedor&&i.append("rfc",t.proveedor.rfc),2==t.tipo_proveedor&&i.append("taxid",t.proveedor.taxid),i.append("pagina",t.proveedor.pagina),i.append("lista_bancos",JSON.stringify(t.ListBancos.filter(function(a){return a.temp}))),i.append("regimen_fiscal",t.proveedor.regimen_fiscal),i.append("limite_credito",t.proveedor.limite_credito),i.append("calle",t.proveedor.calle),i.append("no_exterior",t.proveedor.no_exterior),i.append("no_interior",t.proveedor.no_interior),i.append("estado",t.proveedor.estado),i.append("ciudad",t.proveedor.ciudad),i.append("cp",t.proveedor.cp),i.append("nacionalidad",t.proveedor.nacionalidad),i.append("colonia",t.proveedor.colonia),i.append("municipio",t.proveedor.municipio),i.append("ventas_contacto",t.proveedor.ventas_contacto),i.append("ventas_telefono",t.proveedor.ventas_telefono),i.append("ventas_celular",t.proveedor.ventas_celular),i.append("ventas_correo",t.proveedor.ventas_correo),i.append("facturacion_contacto",t.proveedor.facturacion_contacto),i.append("facturacion_telefono",t.proveedor.facturacion_telefono),i.append("facturacion_celular",t.proveedor.facturacion_celular),i.append("facturacion_correo",t.proveedor.facturacion_correo),i.append("modificacion",t.proveedor.modificacion),i.append("anexos",t.proveedor.anexos),i.append("tipos_modificacion",t.proveedor.tipos_modificacion),i.append("tipos_documentos",t.proveedor.tipos_documentos),i.append("temp2_proveedor_cuenta",t.temp2_proveedor_cuenta),i.append("temp2_proveedor_clabe",t.temp2_proveedor_clabe),i.append("temp2_proveedor_condiciones",t.temp2_proveedor_condiciones),i.append("temp2_proveedor_moneda",t.temp2_proveedor_moneda),i.append("temp2_proveedor_banco",t.temp2_proveedor_banco),e.n=7,axios.post(t.url,i).then(function(e){e.data.status&&(t.cerrarModal(),t.ObtenerProveedores(),a?toastr.success("Proveedor Registrado Correctamente"):toastr.success("Proveedor Actualizado Correctamente"))});case 7:e.v,e.n=9;break;case 8:e.p=8,s=e.v,toastr.error(s.response.data.message);case 9:return e.p=9,t.isLoading=!1,e.f(9);case 10:return e.a(2)}},e,null,[[0,8,9,10]])}))()},actdesact:function(a,t){var e=this,o=new FormData;o.append("id",a),o.append("condicion",t),axios.post("compras/proveedores/activar",o).then(function(a){a.data.status?(toastr.success("Actualizado correctamente"),e.ObtenerProveedores()):toastr.error(a.data.mensaje)})},cerrarModal:function(){var a=this;this.ListBancos=[],this.modal=0,this.tituloModal="",this.n_temp=0,this.ListBancos.filter(function(a){return a.id>100}).forEach(function(t){a.ListBancos.indexOf(t);var e=a.ListBancos.indexOf(t);a.ListBancos.splice(e,1)}),this.proveedor={}},LimpiarProveedor:function(){this.proveedor={razon_social:"",nombre:"N/D",giro:"N/D",rfc:"",regimen_fiscal:"N/D",nacionalidad:"N/D",regimen:"N/D",calle:"N/D",colonia:"N/D",ciudad:"N/D",no_exterior:"N/D",no_interior:"N/D",cp:"00000",municipio:"N/D",limite_credito:0,estado:"N/D",pagina:"N/D",ventas_contacto:"N/D",ventas_telefono:"N/D",ventas_correo:"N/D",ventas_celular:"-",facturacion_contacto:"N/D",facturacion_telefono:"-",facturacion_correo:"-",facturacion_celular:"-",modificacion:"-",anexos:"-",tiposdocumentos:"",tipos_modificacion:"",tipos_documentos:""},this.temp2_proveedor_cuenta="000000",this.temp2_proveedor_clabe="000000",this.temp2_proveedor_condiciones="N/D",this.temp2_proveedor_moneda="MXN",this.temp2_proveedor_banco="N/D",this.temp_proveedor_cuenta="N/D",this.temp_proveedor_clabe="N/D",this.temp_proveedor_condiciones="N/D",this.temp_proveedor_moneda="MXN",this.temp_proveedor_banco="N/D",this.list_giro_suministro=[],this.list_modificaciones=[],this.list_tipos_documentos=[]},abrirModal:function(){var a=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.LimpiarProveedor(),this.modal=1,this.n_temp=100,a?(this.ListBancos=[],this.tituloModal="Registrar Nuevo proveedor",this.tipoAccion=1,this.list_modificaciones_db=[],this.list_tipos_documentos_db=[],this.CargarSuministrosGiros("",!0),this.CargarModificaciones("",!0),this.CargarTipoDocumento("",!0)):(this.ListBancos=t.bancos,this.tituloModal="Actualizar proveedor",this.tipoAccion=2,this.proveedor=v(v({},t),{},{anexos:"-",modificacion:"ACTUALIZACIÓN DE DATOS"}),this.ValidarRFC(),this.CargarSuministrosGiros(t.giro,!1),this.CargarModificaciones(this.proveedor.tipos_modificacion,!1),this.CargarTipoDocumento(this.proveedor.tipos_documentos,!1))},AbrirModalBancos:function(a,t){this.modalProveedor=1,this.temp_proveedor_condiciones="-",this.temp_proveedor_moneda="MXN",1==a?this.tipo_guardar=1:(this.tipo_guardar=2,this.banco_edit=t,this.temp_proveedor_banco=t.banco,this.temp_proveedor_clabe=t.clabe,this.temp_proveedor_cuenta=t.cuenta)},CerrarModalProveedores:function(){this.modalProveedor=0,this.ListBancos_temp=[]},guardarProveedoresTemp:function(a){var t=this;if(""!=t.temp_proveedor_banco)if(""!=t.temp_proveedor_cuenta)if(""!=t.temp_proveedor_clabe)if(1==a){var e={id:t.n_temp,banco:t.temp_proveedor_banco,cuenta:t.temp_proveedor_cuenta,clabe:t.temp_proveedor_clabe,condiciones:t.temp_proveedor_condiciones,moneda:t.temp_proveedor_moneda,temp:!0};this.ListBancos.push(e),t.temp_proveedor_banco="",t.temp_proveedor_cuenta="",t.temp_proveedor_clabe="",this.CerrarModalProveedores(),toastr.info("Banco registrado temporalmente"),toastr.success("Presione Actualizar par guardar el banco"),t.n_temp+=1}else{t.banco_edit;var o={id:t.banco_edit.id,banco:t.temp_proveedor_banco,cuenta:t.temp_proveedor_cuenta,clabe:t.temp_proveedor_clabe,proveedor_id:t.banco_edit.proveedor_id},r=this.ListBancos.findIndex(function(a){return a.id==t.banco_edit.id});r>=0?this.ListBancos.splice(r,1,o):toastr.error("Datos bancarios no encontrados"),t.temp_proveedor_banco="",t.temp_proveedor_cuenta="",t.temp_proveedor_clabe="",this.CerrarModalProveedores()}else toastr.warning("Ingrese una clabe");else toastr.warning("Ingrese una cuenta");else toastr.warning("Ingrese un banco")},DesactivarBanco:function(a){if(a.temp){var t=this.ListBancos.indexOf(a);this.ListBancos.splice(t,1),toastr.success("Banco temporal eliminado"),this.CerrarModalProveedores()}},DescargarReporte:function(){window.open("compras/reportes/catalogoproveedores/"+this.anio,"_blank")},ValidarRFC:function(){var a=this.proveedor.rfc;this.rfc_valido=this.AuxValidarRFC(a,!1)},AuxValidarRFC:function(a){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!a)return!1;var e=a.match(/^([A-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$/);if(!e)return!1;var o,r,i=e.pop(),s=e.slice(1).join(""),n=s.length,c=n+1;o=12==n?0:481;for(var l=0;l<n;l++)o+="0123456789ABCDEFGHIJKLMN&OPQRSTUVWXYZ Ñ".indexOf(s.charAt(l))*(c-l);return 11==(r=11-o%11)?r=0:10==r&&(r="A"),!!(i==r||t&&s+i=="XAXX010101000")&&!(!t&&s+i=="XEXX010101000")},formatEIN:function(a){var t=a.replace(/\D/g,"");return t.length>9&&(t=t.slice(0,9)),t.length>2?t.slice(0,2)+"-"+t.slice(2):t},validarTaxIdUSA:function(a){return/^\d{2}-\d{7}$/.test(a)},Historial:function(a){var t=this;this.nombre_proveedor=a.nombre;var e=a.id;this.ver_modal_historial=!0,this.isObtenerHistorial_loading=!0,axios.get("compras/proveedores/historial/"+e).then(function(a){t.isObtenerHistorial_loading=!1,a.data.status?t.list_historial=a.data.historial:toastr.error(a.data.mensaje)})},CerrarModalHistorial:function(){this.ver_modal_historial=!1,this.list_historial=[]},DescargarHistorial:function(a){window.open("compras/proveedores/descargarhistorial/"+a)},DescargarReporteTemp:function(){window.open("compras/reportes/proveedores2")},CargarSuministrosGiros:function(a){var t=["ALIMENTOS","CALIBRACIÓN DE EQUIPOS","CERTIFICACIÓN","CERTIFICADOS MÉDICOS","COMBUSTIBLE","CONSUMIBLES / HERRAMIENTAS","CURSOS","EPP","EQUIPOS DE SEGURIDAD Y/O EMERGENCIA","FARMACIA","FLETE / PAQUETERÍA / LOGISTICA","HIDRATACIÓN","HOSPEDAJE","INSTRUMENTOS","LABORATORIO DE ENSAYO","LIMPIEZA","MANTENIMIENTO EQUIPOS Y HERRAMIENTAS","MATERIAL CIVIL","MATERIAL ELÉCTRICO","MATERIAL ESTRUCTURAL","MATERIAL MECÁNICO","MATERIAL NEUMÁTICO","MATERIAL PARA EMBALAJE","PAPELERÍA / INFORMÁTICA / IMPRENTA","PINTURA","PROGRAMA DE PROTECCIÓN CIVIL","PRUEBAS DE CALIDAD (PNDS)","RECOLECCIÓN DE RESIDUOS","SANITARIOS PORTÁTILES","SERVICIO GRÚAS / MONTACARGAS","SERVICIOS MAQUINADO","SERVICIOS PARA LIBRANZA","VEHÍCULOS"];arguments.length>1&&void 0!==arguments[1]&&arguments[1]||a&&!t.some(function(t){return t===a.toUpperCase()})&&t.push(a),this.list_giro_suministro=t.sort()},CargarModificaciones:function(a){arguments.length>1&&void 0!==arguments[1]&&arguments[1]||(this.list_modificaciones_db=a?a.split(","):[]),this.list_modificaciones=["Cambio de domicilio","Cambio datos bancarios","Cambio de datos de contacto de ventas","Cambio de datos de contacto de facturación"]},CargarTipoDocumento:function(a){arguments.length>1&&void 0!==arguments[1]&&arguments[1]||(this.list_tipos_documentos_db=a?a.split(","):[]),this.list_tipos_documentos=["Cambio de datos de contacto de ventas","Caratula bancaría","Aplicables conforme a los criterios adicionales (PCO-02/F-05)"]},openModalExcel:function(){var a=this;this.showModalExcel=!1,this.$nextTick(function(){a.showModalExcel=!0})},closeModalExcel:function(){this.showModalExcel=!1},loadExcel:function(a){var t=this;return g(_().m(function e(){var o,r,i,s,n;return _().w(function(e){for(;;)switch(e.p=e.n){case 0:if(a){e.n=1;break}return e.a(2);case 1:return t.loading=!0,(o=new FormData).append("file",a),e.p=2,e.n=3,axios.post("/read-excel",o,{headers:{"content-type":"multipart/form-data"}});case 3:(r=e.v).data.status?(i=r.data.data,s=(i.Suministrar||"").trim().toLowerCase(),n=t.list_giro_suministro.find(function(a){return a.trim().toLowerCase()===s}),t.proveedor.razon_social=i["Razón Social"],t.proveedor.nombre=i["Nombre Comercial"],t.proveedor.giro=n||"",t.proveedor.nacionalidad=i.Nacionalidad,t.proveedor.rfc=i.RFC,t.$nextTick(function(){t.proveedor.rfc&&(t.rfcTouched=!0,t.rfc_valido=t.AuxValidarRFC(t.proveedor.rfc))}),t.proveedor.limite_credito=""!==i["Limite de credito"]&&null!=i["Limite de credito"]?i["Limite de credito"]:null,t.proveedor.calle=i.Calle,t.proveedor.no_exterior=i["No. Exterior"],t.proveedor.no_interior=i["No.interior"],t.proveedor.cp=i.CP,t.proveedor.colonia=i.Colonia,t.proveedor.municipio=i["Alcadía/Municipio"],t.proveedor.estado=i.Estado,t.temp2_proveedor_banco=i.Banco,t.temp2_proveedor_clabe=i["Cuenta Clabe"],t.temp2_proveedor_cuenta=i["Cuenta Clabe"],t.temp2_proveedor_moneda=i["Tipo de moneda"],t.proveedor.ventas_contacto=i["Contacto de ventas"],t.proveedor.ventas_telefono=i["Teléfono de ventas"],t.proveedor.ventas_celular=i.Celular,t.proveedor.ventas_correo=i.Correo,t.proveedor.facturacion_contacto=i["Contacto de facturación"],t.proveedor.facturacion_telefono=i["Teléfono"],t.proveedor.facturacion_celular=i.Celular,t.proveedor.facturacion_correo=i.correo,t.list_modificaciones_db=[],"SI"===i["Cambio de domicilio"]&&t.list_modificaciones_db.push(1),"SI"===i["Cambio de datos bancarios"]&&t.list_modificaciones_db.push(2),"SI"===i["Cambio de datos de contacto de ventas"]&&t.list_modificaciones_db.push(3),"SI"===i["Cambio de datos de contacto de facturacion"]&&t.list_modificaciones_db.push(4),t.list_tipos_documentos_db=[],"SI"===i["Constancia de situación fiscal"]&&t.list_tipos_documentos_db.push(1),"SI"===i["Caratula Bancaria"]&&t.list_tipos_documentos_db.push(2),toastr.success("Datos cargados desde Excel")):toastr.error("Error al procesar el Excel"),e.n=5;break;case 4:e.p=4,e.v,toastr.error("Error al cargar el archivo");case 5:return e.p=5,t.loading=!1,t.closeModalExcel(),e.f(5);case 6:return e.a(2)}},e,null,[[2,4,5,6]])}))()},descargarExcel:function(){var a=this;return g(_().m(function t(){var e,o,r;return _().w(function(t){for(;;)switch(t.p=t.n){case 0:return a.isDownloading=!0,t.p=1,a.form={razon_social:a.proveedor.razon_social,nombre:a.proveedor.nombre,rfc:a.proveedor.rfc,taxid:a.proveedor.taxid,giro:a.proveedor.giro,nacionalidad:a.proveedor.nacionalidad,calle:a.proveedor.calle,no_exterior:a.proveedor.no_exterior,no_interior:a.proveedor.no_interior,cp:a.proveedor.cp,colonia:a.proveedor.colonia,municipio:a.proveedor.municipio,ciudad:a.proveedor.ciudad,estado:a.proveedor.estado,temp2_proveedor_banco:a.temp2_proveedor_banco,temp2_proveedor_clabe:a.temp2_proveedor_clabe,temp2_proveedor_moneda:a.temp_proveedor_moneda,limite_credito:a.proveedor.limite_credito,ventas_contacto:a.proveedor.ventas_contacto,ventas_telefono:a.proveedor.ventas_telefono,ventas_celular:a.proveedor.ventas_celular,ventas_correo:a.proveedor.ventas_correo,facturacion_contacto:a.proveedor.facturacion_contacto,facturacion_telefono:a.proveedor.facturacion_telefono,facturacion_celular:a.proveedor.facturacion_celular,facturacion_correo:a.proveedor.facturacion_correo},t.n=2,axios.post("/proveedor/export",a.form,{responseType:"blob"});case 2:e=t.v,o=window.URL.createObjectURL(e.data),(r=document.createElement("a")).href=o,r.download="PCO-02_F-01 Alta y Modificacion de Proveedores NR02.xlsx",r.click(),t.n=4;break;case 3:t.p=3,t.v,toastr.error("Error al descargar el archivo");case 4:return t.p=4,a.isDownloading=!1,t.f(4);case 5:return t.a(2)}},t,null,[[1,3,4,5]])}))()}},mounted:function(){this.PermisosCrud=d.A.getCRUD(this.$route.path),this.ObtenerProveedores(),this.generateYears(),this.setperiodCurrentYear()}};var y=e(37778),w={insert:"head",singleton:!1};i()(y.A,w);y.A.locals;const x=(0,c.A)(C,function(){var a=this,t=a._self._c;return t("main",{staticClass:"main"},[t("div",{staticClass:"container-fluid"},[t("div",{staticClass:"card"},[t("div",{staticClass:"card-header"},[t("i",{staticClass:"fa fa-align-justify"}),a._v(" Registro de Proveedores - "+a._s(a.anio)+"\r\n                 "),[t("div",{staticClass:"dropdown float-sm-right mx-1"},[t("button",{staticClass:"btn btn-primary dropdown-toggle",attrs:{type:"button",id:"dropdownMenu2","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[a._v("\r\n                                "+a._s(a.anio)+"\r\n                            ")]),a._v(" "),t("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdownMenu2"}},a._l(a.Years,function(e){return t("button",{key:e.anio,staticClass:"dropdown-item",attrs:{type:"button"},on:{click:function(t){return a.selectYear(e.anio)}}},[a._v("\r\n                                    "+a._s(e.anio)+"\r\n                                ")])}),0)]),a._v(" "),t("button",{directives:[{name:"show",rawName:"v-show",value:a.PermisosCrud.Create,expression:"PermisosCrud.Create"}],staticClass:"btn btn-primary float-sm-right mx-1",attrs:{type:"button"},on:{click:function(t){return a.abrirModal()}}},[t("i",{staticClass:"fas fa-plus mr-1"}),a._v(" Nuevo\r\n                        ")]),a._v(" "),t("button",{directives:[{name:"show",rawName:"v-show",value:a.PermisosCrud.Download,expression:"PermisosCrud.Download"}],staticClass:"btn btn-success float-sm-right mx-1",attrs:{type:"button"},on:{click:function(t){return a.DescargarReporte()}}},[t("i",{staticClass:"fas fa-file-excel"}),a._v(" Descargar\r\n                        ")])]],2),a._v(" "),t("div",{staticClass:"card-body"},[t("vue-element-loading",{attrs:{active:a.isLoading_proveedores}}),a._v(" "),t("v-client-table",{ref:"myTable",attrs:{columns:a.columns,data:a.list_proveedores,options:a.options},scopedSlots:a._u([{key:"id",fn:function(e){return[t("div",{staticClass:"btn-group",attrs:{role:"group","aria-label":"Button group with nested dropdown"}},[t("div",{staticClass:"btn-group dropup",attrs:{role:"group"}},[t("button",{staticClass:"btn btn-outline-dark dropdown-toggle",attrs:{id:"btnGroupDrop1",type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t("i",{staticClass:"fas fa-grip-horizontal"})]),a._v(" "),t("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"btnGroupDrop1"}},[t("button",{directives:[{name:"show",rawName:"v-show",value:a.PermisosCrud.Update,expression:"PermisosCrud.Update"}],staticClass:"dropdown-item",attrs:{type:"button"},on:{click:function(t){return a.abrirModal(!1,e.row)}}},[t("i",{staticClass:"fas fa-edit"}),a._v("Actualizar proveedor\r\n                                    ")]),a._v(" "),e.row.condicion?t("button",{directives:[{name:"show",rawName:"v-show",value:a.PermisosCrud.Delete,expression:"PermisosCrud.Delete"}],staticClass:"dropdown-item",attrs:{type:"button"},on:{click:function(t){return a.actdesact(e.row.id,0)}}},[t("i",{staticClass:"fas fa-ban"}),a._v("Desactivar proveedor\r\n                                    ")]):t("button",{staticClass:"dropdown-item",attrs:{type:"button"},on:{click:function(t){return a.actdesact(e.row.id,1)}}},[t("i",{staticClass:"fas fa-check"}),a._v("Activar proveedor\r\n                                    ")]),a._v(" "),t("button",{staticClass:"dropdown-item",attrs:{type:"button"},on:{click:function(t){return a.Historial(e.row)}}},[t("i",{staticClass:"fas fa-list-alt"}),a._v("Historial\r\n                                    ")])])])])]}},{key:"condicion",fn:function(e){return[1==e.row.condicion?t("span",{staticClass:"btn btn-outline-success"},[a._v("Activo")]):t("span",{staticClass:"btn btn-outline-danger"},[a._v("Desactivado")])]}},{key:"categoria",fn:function(e){return[null==e.row.total_evaluacion?t("p",[a._v("N/D")]):a._e(),a._v(" "),e.row.total_evaluacion>=54?t("span",{staticClass:"text-success"},[a._v("APROBADO")]):a._e(),a._v(" "),e.row.total_evaluacion>=36&&e.row.total_evaluacion<=53?t("span",{staticClass:"text-warning"},[a._v("CONDICIONADO")]):a._e(),a._v(" "),e.row.total_evaluacion>=18&&e.row.total_evaluacion<=35?t("span",{staticClass:"text-danger"},[a._v("NO APTO")]):a._e()]}},{key:"total_evaluacion",fn:function(e){return[null==e.row.total_evaluacion?t("span",[a._v("0")]):t("span",[a._v(a._s(e.row.total_evaluacion))])]}}])})],1)])]),a._v(" "),t("div",{staticClass:"modal fade",class:{mostrar:a.modal},staticStyle:{display:"none"},attrs:{tabindex:"-1",role:"dialog","aria-labelledby":"myModalLabel","aria-hidden":"true"}},[t("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[t("div",{staticClass:"modal-content"},[t("div",[t("vue-element-loading",{attrs:{active:a.isLoading}}),a._v(" "),t("div",{staticClass:"modal-header"},[t("h5",{staticClass:"modal-title mb-0"},[a._v("\r\n                            "+a._s(a.tituloModal)+"\r\n                        ")]),a._v(" "),t("button",{staticClass:"close ml-auto",attrs:{type:"button"},on:{click:function(t){return a.cerrarModal()}}},[t("span",[a._v("×")])])]),a._v(" "),t("div",{staticClass:"modal-body"},[t("div",{staticClass:"row mb-3"},[t("div",{staticClass:"col-md-8 offset-md-2"},[t("div",{staticClass:"form-floating"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.proveedor.razon_social,expression:"proveedor.razon_social"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{type:"text",id:"razon_social",name:"razon_social",placeholder:"Razón Social",autocomplete:"off","data-vv-name":"Razon Social"},domProps:{value:a.proveedor.razon_social},on:{input:function(t){t.target.composing||a.$set(a.proveedor,"razon_social",t.target.value)}}}),a._v(" "),t("label",{attrs:{for:"razon_social"}},[a._v("Razón Social")])]),a._v(" "),t("span",{staticClass:"text-danger"},[a._v("\r\n                                        "+a._s(a.errors.first("razon_social"))+"\r\n                                    ")])])]),a._v(" "),t("div",{staticClass:"row mb-3"},[t("div",{staticClass:"col-md-8 offset-md-2"},[t("div",{staticClass:"form-floating"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.proveedor.nombre,expression:"proveedor.nombre"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{type:"text",name:"nombre",placeholder:"Nombre",autocomplete:"off",id:"nombre","data-vv-name":"Nombre"},domProps:{value:a.proveedor.nombre},on:{input:function(t){t.target.composing||a.$set(a.proveedor,"nombre",t.target.value)}}}),a._v(" "),t("label",{attrs:{for:"nombre"}},[a._v("Nombre comercial")])]),a._v(" "),t("span",{staticClass:"text-danger"},[a._v(a._s(a.errors.first("nombre")))])])]),a._v(" "),t("div",{staticClass:"container"},[t("div",{staticClass:"row mb-3"},[t("div",{staticClass:"col"},[t("div",{staticClass:"form-floating"},[t("select",{directives:[{name:"model",rawName:"v-model",value:a.tipo_proveedor,expression:"tipo_proveedor"}],staticClass:"form-select",attrs:{id:"tipo_proveedor"},on:{change:function(t){var e=Array.prototype.filter.call(t.target.options,function(a){return a.selected}).map(function(a){return"_value"in a?a._value:a.value});a.tipo_proveedor=t.target.multiple?e:e[0]}}},[t("option",{attrs:{value:"",disabled:""}},[a._v("Seleccione el origen")]),a._v(" "),t("option",{attrs:{value:"1"}},[a._v("Nacional")]),a._v(" "),t("option",{attrs:{value:"2"}},[a._v("Extranjero")])]),a._v(" "),t("label",{attrs:{for:"tipo_proveedor"}},[a._v("Origen del proveedor")])])]),a._v(" "),t("div",{staticClass:"col"},[1==a.tipo_proveedor?t("div",[t("div",{staticClass:"form-floating mb-1"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.proveedor.rfc,expression:"proveedor.rfc"}],staticClass:"form-control",class:{"is-invalid":a.rfcTouched&&!a.proveedor.rfc},attrs:{type:"text",id:"rfc",placeholder:"RFC",maxlength:"13",autocomplete:"off"},domProps:{value:a.proveedor.rfc},on:{input:function(t){t.target.composing||a.$set(a.proveedor,"rfc",t.target.value)}}}),a._v(" "),t("label",{attrs:{for:"rfc"}},[a._v("RFC")])]),a._v(" "),t("span",{staticClass:"text-danger"},[a._v(a._s(a.errors.first("RFC")))]),a._v(" "),a.rfcTouched&&a.rfc_valido?t("span",{staticClass:"text-success"},[a._v("\r\n                                                RFC válido\r\n                                            ")]):a._e(),a._v(" "),a.rfcTouched&&!a.rfc_valido?t("span",{staticClass:"text-danger"},[a._v("\r\n                                                RFC inválido\r\n                                            ")]):a._e(),a._v(" "),t("small",{staticClass:"text-muted d-block"},[a._v("\r\n                                                "+a._s(a.proveedor.rfc?a.proveedor.rfc.length:0)+"/13\r\n                                            ")])]):a._e(),a._v(" "),2==a.tipo_proveedor?t("div",[t("div",{staticClass:"form-floating mb-1"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.proveedor.taxid,expression:"proveedor.taxid"}],staticClass:"form-control",class:{"is-valid":a.taxidTouched&&a.proveedor.taxid},attrs:{type:"text",id:"taxid",placeholder:"TAX ID",maxlength:"10",autocomplete:"off"},domProps:{value:a.proveedor.taxid},on:{input:function(t){t.target.composing||a.$set(a.proveedor,"taxid",t.target.value)}}}),a._v(" "),t("label",{attrs:{for:"taxid"}},[a._v("TAX ID")])]),a._v(" "),t("span",{staticClass:"text-danger"},[a._v(a._s(a.errors.first("TAX ID")))]),a._v(" "),a.taxidTouched&&a.taxidValido?t("span",{staticClass:"text-success"},[a._v("\r\n                                                TAX ID válido\r\n                                            ")]):a._e(),a._v(" "),a.taxidTouched&&!a.taxidValido?t("span",{staticClass:"text-danger"},[a._v("\r\n                                                TAX ID inválido\r\n                                            ")]):a._e(),a._v(" "),t("small",{staticClass:"text-muted d-block"},[a._v("\r\n                                                "+a._s(a.proveedor.taxid?a.proveedor.taxid.length:0)+"/10\r\n                                            ")])]):a._e()]),a._v(" "),t("div",{staticClass:"col"},[t("div",{staticClass:"form-floating"},[t("select",{directives:[{name:"model",rawName:"v-model",value:a.proveedor.giro,expression:"proveedor.giro"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-select",attrs:{id:"giro","data-vv-name":"Giro"},on:{change:function(t){var e=Array.prototype.filter.call(t.target.options,function(a){return a.selected}).map(function(a){return"_value"in a?a._value:a.value});a.$set(a.proveedor,"giro",t.target.multiple?e:e[0])}}},[t("option",{attrs:{value:"",disabled:""}},[a._v("Seleccione un suministro")]),a._v(" "),a._l(a.list_giro_suministro,function(e){return t("option",{key:e,domProps:{value:e}},[a._v("\r\n                                                    "+a._s(e)+"\r\n                                                ")])})],2),a._v(" "),t("label",{attrs:{for:"giro"}},[a._v("Suministro / Giro")])]),a._v(" "),t("span",{staticClass:"text-danger"},[a._v("\r\n                                            "+a._s(a.errors.first("giro"))+"\r\n                                        ")])])])]),a._v(" "),t("hr",{staticStyle:{border:"1px solid #000",width:"100%",margin:"20px auto"}}),a._v(" "),t("p",{staticClass:"font-weight-bold h6"},[a._v("Dirección")]),a._v(" "),t("br"),a._v(" "),t("div",{staticClass:"container"},[t("div",{staticClass:"row mb-4"},[t("div",{staticClass:"col"},[t("div",{staticClass:"form-floating"},[t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:a.proveedor.calle,expression:"proveedor.calle"}],staticClass:"form-control",attrs:{type:"text",maxlength:"75",minlength:"3","data-vv-name":"Calle",autocomplete:"off",placeholder:"Calle",id:"calle"},domProps:{value:a.proveedor.calle},on:{input:function(t){t.target.composing||a.$set(a.proveedor,"calle",t.target.value)}}}),a._v(" "),t("label",{attrs:{for:"calle"}},[a._v("Calle")]),a._v(" "),t("span",{staticClass:"text-danger"},[a._v(a._s(a.errors.first("Calle")))])])]),a._v(" "),t("div",{staticClass:"col"},[t("div",{staticClass:"form-floating"},[t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:a.proveedor.colonia,expression:"proveedor.colonia"}],staticClass:"form-control",attrs:{type:"text",maxlength:"75",minlength:"3","data-vv-name":"Colonia",autocomplete:"off",id:"colonia",placeholder:"Colonia"},domProps:{value:a.proveedor.colonia},on:{input:function(t){t.target.composing||a.$set(a.proveedor,"colonia",t.target.value)}}}),a._v(" "),t("label",{attrs:{for:"colonia"}},[a._v("Colonia")]),a._v(" "),t("span",{staticClass:"text-danger"},[a._v(a._s(a.errors.first("Colonia")))])])])])]),a._v(" "),t("div",{staticClass:"container"},[t("div",{staticClass:"row mb-3"},[t("div",{staticClass:"col"},[t("div",{staticClass:"form-floating"},[t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:a.proveedor.no_exterior,expression:"proveedor.no_exterior"}],staticClass:"form-control",attrs:{type:"text",maxlength:"10","data-vv-name":"No. Exterior",autocomplete:"off",id:"no.Exterior",placeholder:"N° Exterior"},domProps:{value:a.proveedor.no_exterior},on:{input:function(t){t.target.composing||a.$set(a.proveedor,"no_exterior",t.target.value)}}}),a._v(" "),t("label",{attrs:{for:"no.Exterior"}},[a._v("N° Exterior")]),a._v(" "),t("span",{staticClass:"text-danger"},[a._v(a._s(a.errors.first("No. Exterior")))])])]),a._v(" "),t("div",{staticClass:"col"},[t("div",{staticClass:"form-floating"},[t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:a.proveedor.no_interior,expression:"proveedor.no_interior"}],staticClass:"form-control",attrs:{type:"text","data-vv-name":"No.  Interior",autocomplete:"off",placeholder:"n.Interior"},domProps:{value:a.proveedor.no_interior},on:{input:function(t){t.target.composing||a.$set(a.proveedor,"no_interior",t.target.value)}}}),a._v(" "),t("label",{attrs:{for:"n.Interior"}},[a._v("N° Interior")]),a._v(" "),t("span",{staticClass:"text-danger"},[a._v(a._s(a.errors.first("No. Interior")))])])]),a._v(" "),t("div",{staticClass:"col"},[t("div",{staticClass:"form-floating"},[t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:a.proveedor.cp,expression:"proveedor.cp"}],staticClass:"form-control",attrs:{type:"text",maxlength:"5",minlength:"5","data-vv-name":"C.P.",autocomplete:"off",placeholder:"C.P"},domProps:{value:a.proveedor.cp},on:{input:function(t){t.target.composing||a.$set(a.proveedor,"cp",t.target.value)}}}),a._v(" "),t("label",{attrs:{for:"cp"}},[a._v("C.P")]),a._v(" "),t("span",{staticClass:"text-danger"},[a._v(a._s(a.errors.first("C.P.")))])])])])]),a._v(" "),t("div",{staticClass:"container"},[t("div",{staticClass:"row mb-3"},[t("div",{staticClass:"col"},[t("div",{staticClass:"form-floating"},[t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:a.proveedor.municipio,expression:"proveedor.municipio"}],staticClass:"form-control",attrs:{type:"text",maxlength:"75",minlength:"3","data-vv-name":"Municipio",autocomplete:"off",placeholder:"Municipio",id:"muni"},domProps:{value:a.proveedor.municipio},on:{input:function(t){t.target.composing||a.$set(a.proveedor,"municipio",t.target.value)}}}),a._v(" "),t("label",{attrs:{for:"muni"}},[a._v("Municipio")]),a._v(" "),t("span",{staticClass:"text-danger"},[a._v(a._s(a.errors.first("Municipio")))])])]),a._v(" "),t("div",{staticClass:"col"},[t("div",{staticClass:"form-floating"},[t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:a.proveedor.ciudad,expression:"proveedor.ciudad"}],staticClass:"form-control",attrs:{type:"text",maxlength:"75",minlength:"3","data-vv-name":"ciudad",autocomplete:"off",placeholder:"Ciudad",id:"ciudad"},domProps:{value:a.proveedor.ciudad},on:{input:function(t){t.target.composing||a.$set(a.proveedor,"ciudad",t.target.value)}}}),a._v(" "),t("label",{attrs:{for:"ciudad"}},[a._v("Ciudad")]),a._v(" "),t("span",{staticClass:"text-danger"},[a._v(a._s(a.errors.first("Ciudad")))])])]),a._v(" "),t("div",{staticClass:"col"},[t("div",{staticClass:"form-floating"},[t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:a.proveedor.estado,expression:"proveedor.estado"}],staticClass:"form-control",attrs:{type:"text",maxlength:"75",minlength:"3","data-vv-name":"Estado",autocomplete:"off",placeholder:"Estado",id:"estado"},domProps:{value:a.proveedor.estado},on:{input:function(t){t.target.composing||a.$set(a.proveedor,"estado",t.target.value)}}}),a._v(" "),t("label",{attrs:{for:"estado"}},[a._v("Estado")]),a._v(" "),t("span",{staticClass:"text-danger"},[a._v(a._s(a.errors.first("Estado")))])])])])]),a._v(" "),1==a.tipoAccion?[t("hr",{staticStyle:{border:"1px solid #000",width:"100%",margin:"20px auto"}}),a._v(" "),t("p",{staticClass:"font-weight-bold h6"},[a._v("Datos Bancarios")]),a._v(" "),t("div",{staticClass:"container"},[t("div",{staticClass:"row mb-3"},[t("div",{staticClass:"col"},[t("div",{staticClass:"form-floating"},[t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:a.temp2_proveedor_banco,expression:"temp2_proveedor_banco"}],staticClass:"form-control",attrs:{type:"text",maxlength:"50",name:"banco_transferencia",placeholder:"Banco de transferencia",autocomplete:"off",id:"banco_transferencia","data-vv-name":"banco transferencia"},domProps:{value:a.temp2_proveedor_banco},on:{input:function(t){t.target.composing||(a.temp2_proveedor_banco=t.target.value)}}}),a._v(" "),t("label",{attrs:{for:"banco_transferencia"}},[a._v("Banco de transferencia")]),a._v(" "),t("span",{staticClass:"text-danger"},[a._v(a._s(a.errors.first("banco_transferencia")))])])]),a._v(" "),t("div",{staticClass:"col"},[t("div",{staticClass:"form-floating"},[t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:a.temp2_proveedor_cuenta,expression:"temp2_proveedor_cuenta"}],staticClass:"form-control",attrs:{type:"text",maxlength:"50",pattern:"^[0-9]+",name:"numero_cuenta",placeholder:"Número de cuenta",autocomplete:"off",id:"numero_cuenta","data-vv-name":"número cuenta"},domProps:{value:a.temp2_proveedor_cuenta},on:{input:function(t){t.target.composing||(a.temp2_proveedor_cuenta=t.target.value)}}}),a._v(" "),t("label",{attrs:{for:"numero_cuenta"}},[a._v("Número de cuenta")]),a._v(" "),t("span",{staticClass:"text-danger"},[a._v(a._s(a.errors.first("número cuenta")))])])])])]),a._v(" "),t("div",{staticClass:"container"},[t("div",{staticClass:"row mb-3"},[t("div",{staticClass:"col"},[t("div",{staticClass:"form-floating"},[t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:a.temp2_proveedor_clabe,expression:"temp2_proveedor_clabe"}],staticClass:"form-control",attrs:{type:"text",maxlength:"50",pattern:"^[0-9]+",name:"clabe",placeholder:" Cuenta Clabe",autocomplete:"off",id:"clabe","data-vv-name":"clabe"},domProps:{value:a.temp2_proveedor_clabe},on:{input:function(t){t.target.composing||(a.temp2_proveedor_clabe=t.target.value)}}}),a._v(" "),t("label",{attrs:{for:"clabe"}},[a._v("Cuenta Clabe")]),a._v(" "),t("span",{staticClass:"text-danger"},[a._v(a._s(a.errors.first("clabe")))])])]),a._v(" "),t("div",{staticClass:"col"},[t("div",{staticClass:"form-floating"},[t("select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:a.temp2_proveedor_moneda,expression:"temp2_proveedor_moneda"}],staticClass:"form-select",attrs:{"data-vv-name":"moneda",placeholder:"Tipo de moneda",id:"tipoM"},on:{change:function(t){var e=Array.prototype.filter.call(t.target.options,function(a){return a.selected}).map(function(a){return"_value"in a?a._value:a.value});a.temp2_proveedor_moneda=t.target.multiple?e:e[0]}}},[t("option",{attrs:{value:"",disabled:""}},[a._v("Tipo de moneda $")]),a._v(" "),t("option",{attrs:{value:"MXN"}},[a._v("MXN")]),a._v(" "),t("option",{attrs:{value:"USD"}},[a._v("USD")]),a._v(" "),t("option",{attrs:{value:"EUR"}},[a._v("EUR")])]),a._v(" "),t("label",{attrs:{for:"tipoM"}},[a._v("Tipo de moneda")])])])])]),a._v(" "),t("div",{staticClass:"container"},[t("div",{staticClass:"row mb-3"},[t("div",{staticClass:"col-6"},[t("div",{staticClass:"form-floating"},[t("select",{directives:[{name:"model",rawName:"v-model",value:a.proveedor.tiene_credito,expression:"proveedor.tiene_credito"}],staticClass:"form-select",attrs:{id:"tiene_credito"},on:{change:function(t){var e=Array.prototype.filter.call(t.target.options,function(a){return a.selected}).map(function(a){return"_value"in a?a._value:a.value});a.$set(a.proveedor,"tiene_credito",t.target.multiple?e:e[0])}}},[t("option",{attrs:{value:"",disabled:""}},[a._v("Seleccione")]),a._v(" "),t("option",{attrs:{value:"1"}},[a._v("Sí")]),a._v(" "),t("option",{attrs:{value:"0"}},[a._v("No")])]),a._v(" "),t("label",{attrs:{for:"tiene_credito"}},[a._v("¿Tiene crédito?")])])]),a._v(" "),1==a.proveedor.tiene_credito?t("div",{staticClass:"col"},[t("div",{staticClass:"form-floating"},[t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|decimal",expression:"'required|decimal'"},{name:"model",rawName:"v-model",value:a.proveedor.limite_credito,expression:"proveedor.limite_credito"}],staticClass:"form-control",attrs:{type:"number",min:"0",step:"0.01",placeholder:"Límite de crédito",autocomplete:"off",id:"limite_credito","data-vv-name":"Límite de crédito"},domProps:{value:a.proveedor.limite_credito},on:{input:function(t){t.target.composing||a.$set(a.proveedor,"limite_credito",t.target.value)}}}),a._v(" "),t("label",{attrs:{for:"limite_credito"}},[a._v("Límite de crédito")])]),a._v(" "),t("span",{staticClass:"text-danger"},[a._v("\r\n                                                "+a._s(a.errors.first("Límite de crédito"))+"\r\n                                            ")])]):a._e()])])]:a._e(),a._v(" "),t("hr",{staticStyle:{border:"1px solid #000",width:"100%",margin:"20px auto"}}),a._v(" "),t("p",{staticClass:"font-weight-bold h6"},[a._v("Contacto")]),a._v(" "),t("br"),a._v(" "),t("div",{staticClass:"container"},[t("div",{staticClass:"row mb-3"},[t("div",{staticClass:"col"},[t("div",{staticClass:"form-floating"},[t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:a.proveedor.ventas_contacto,expression:"proveedor.ventas_contacto"}],staticClass:"form-control",attrs:{type:"text",maxlength:"45",minlength:"3","data-vv-name":"Contacto de Ventas",autocomplete:"off",id:"conVentas",placeholder:"Contacto de ventas"},domProps:{value:a.proveedor.ventas_contacto},on:{input:function(t){t.target.composing||a.$set(a.proveedor,"ventas_contacto",t.target.value)}}}),a._v(" "),t("label",{attrs:{for:"conVentas"}},[a._v("Contacto de ventas")]),a._v(" "),t("span",{staticClass:"text-danger"},[a._v(a._s(a.errors.first("Contacto de Ventas")))])])]),a._v(" "),t("div",{staticClass:"col"},[t("div",{staticClass:"form-floating"},[t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:a.proveedor.ventas_telefono,expression:"proveedor.ventas_telefono"}],staticClass:"form-control",attrs:{type:"text",maxlength:"10","data-vv-name":"Teléfono de Ventas",autocomplete:"off",id:"telVentas",placeholder:"Teléfono de ventas"},domProps:{value:a.proveedor.ventas_telefono},on:{input:function(t){t.target.composing||a.$set(a.proveedor,"ventas_telefono",t.target.value)}}}),a._v(" "),t("label",{attrs:{for:"telVentas"}},[a._v("Teléfono de ventas")]),a._v(" "),t("span",{staticClass:"text-danger"},[a._v(a._s(a.errors.first("Teléfono de Ventas")))])])]),a._v(" "),t("div",{staticClass:"col"},[t("div",{staticClass:"form-floating"},[t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:a.proveedor.ventas_celular,expression:"proveedor.ventas_celular"}],staticClass:"form-control",attrs:{type:"text",maxlength:"10","data-vv-name":"Celular de Ventas",autocomplete:"off",id:"celVentas",placeholder:"Celular de ventas"},domProps:{value:a.proveedor.ventas_celular},on:{input:function(t){t.target.composing||a.$set(a.proveedor,"ventas_celular",t.target.value)}}}),a._v(" "),t("label",{attrs:{for:"celVentas"}},[a._v("Celular de ventas")]),a._v(" "),t("span",{staticClass:"text-danger"},[a._v(a._s(a.errors.first("Celular de Ventas")))])])])]),a._v(" "),t("div",{staticClass:"row mb-4"},[t("div",{staticClass:"col"},[t("div",{staticClass:"form-floating"},[t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:a.proveedor.ventas_correo,expression:"proveedor.ventas_correo"}],staticClass:"form-control",attrs:{type:"email",maxlength:"45",minlength:"3","data-vv-name":"Correo de Ventas",autocomplete:"off",id:"coVentas",placeholder:"Correo de ventas"},domProps:{value:a.proveedor.ventas_correo},on:{input:function(t){t.target.composing||a.$set(a.proveedor,"ventas_correo",t.target.value)}}}),a._v(" "),t("label",{attrs:{for:"coVentas"}},[a._v("Correo de ventas")]),a._v(" "),t("span",{staticClass:"text-danger"},[a._v(a._s(a.errors.first("Correo de Ventas")))])])])])]),a._v(" "),t("div",{staticClass:"container"},[t("div",{staticClass:"row mb-3"},[t("div",{staticClass:"col"},[t("div",{staticClass:"form-floating"},[t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:a.proveedor.facturacion_contacto,expression:"proveedor.facturacion_contacto"}],staticClass:"form-control",attrs:{type:"text",maxlength:"45",minlength:"3","data-vv-name":"Contacto de Facturación",autocomplete:"off",id:"conFact",placeholder:"Contacto facturación"},domProps:{value:a.proveedor.facturacion_contacto},on:{input:function(t){t.target.composing||a.$set(a.proveedor,"facturacion_contacto",t.target.value)}}}),a._v(" "),t("label",{attrs:{for:"conFact"}},[a._v("Contacto facturación")]),a._v(" "),t("span",{staticClass:"text-danger"},[a._v(a._s(a.errors.first("Contacto de Facturación")))])])]),a._v(" "),t("div",{staticClass:"col"},[t("div",{staticClass:"form-floating"},[t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:a.proveedor.facturacion_telefono,expression:"proveedor.facturacion_telefono"}],staticClass:"form-control",attrs:{type:"text",maxlength:"10","data-vv-name":"Teléfono de Facturación",autocomplete:"off",id:"telFac",placeholder:"Teléfono de facturación"},domProps:{value:a.proveedor.facturacion_telefono},on:{input:function(t){t.target.composing||a.$set(a.proveedor,"facturacion_telefono",t.target.value)}}}),a._v(" "),t("label",{attrs:{for:"telFac"}},[a._v("Teléfono de facturación")]),a._v(" "),t("span",{staticClass:"text-danger"},[a._v(a._s(a.errors.first("Teléfono de Facturación")))])])]),a._v(" "),t("div",{staticClass:"col"},[t("div",{staticClass:"form-floating"},[t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:a.proveedor.facturacion_celular,expression:"proveedor.facturacion_celular"}],staticClass:"form-control",attrs:{type:"text",maxlength:"10","data-vv-name":"Celular de Facturación",autocomplete:"off",id:"celFac",placeholder:"Celular de facturación"},domProps:{value:a.proveedor.facturacion_celular},on:{input:function(t){t.target.composing||a.$set(a.proveedor,"facturacion_celular",t.target.value)}}}),a._v(" "),t("span",{staticClass:"text-danger"},[a._v(a._s(a.errors.first("Celular de Facturación")))]),a._v(" "),t("label",{attrs:{for:"celFac"}},[a._v("Celular de facturación")])])])]),a._v(" "),t("div",{staticClass:"row mb-3"},[t("div",{staticClass:"col"},[t("div",{staticClass:"form-floating"},[t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:a.proveedor.facturacion_correo,expression:"proveedor.facturacion_correo"}],staticClass:"form-control",attrs:{type:"text",maxlength:"45","data-vv-name":"Correo de Facturación",autocomplete:"off",id:"coFac",placeholder:"coFac"},domProps:{value:a.proveedor.facturacion_correo},on:{input:function(t){t.target.composing||a.$set(a.proveedor,"facturacion_correo",t.target.value)}}}),a._v(" "),t("label",{attrs:{for:"coFac"}},[a._v("Correo de facturación")]),a._v(" "),t("span",{staticClass:"text-danger"},[a._v(a._s(a.errors.first("Correo de Facturación")))])])])])]),a._v(" "),t("hr",{staticStyle:{border:"1px solid #000",width:"100%",margin:"20px auto"}}),a._v(" "),2==a.tipoAccion?t("div",{staticClass:"form-group row"},[t("label",{staticClass:"col-md-2 form-control-label"},[a._v("Modificación")]),a._v(" "),t("div",{staticClass:"col-md-9 ml-4"},a._l(a.list_modificaciones,function(e,o){return t("div",{key:o,staticClass:"form-check"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.list_modificaciones_db,expression:"list_modificaciones_db"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"mod-"+o},domProps:{value:e,checked:Array.isArray(a.list_modificaciones_db)?a._i(a.list_modificaciones_db,e)>-1:a.list_modificaciones_db},on:{change:function(t){var o=a.list_modificaciones_db,r=t.target,i=!!r.checked;if(Array.isArray(o)){var s=e,n=a._i(o,s);r.checked?n<0&&(a.list_modificaciones_db=o.concat([s])):n>-1&&(a.list_modificaciones_db=o.slice(0,n).concat(o.slice(n+1)))}else a.list_modificaciones_db=i}}}),a._v(" "),t("label",{staticClass:"form-check-label",attrs:{for:"mod-"+o}},[a._v(a._s(e))])])}),0)]):a._e(),a._v(" "),t("div",{staticClass:"form-group row"},[t("label",{staticClass:"col-md-2 form-control-label"},[a._v("Documentos")]),a._v(" "),t("div",{staticClass:"col-md-9 ml-4"},a._l(a.list_tipos_documentos,function(e,o){return t("div",{key:o,staticClass:"form-check"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.list_tipos_documentos_db,expression:"list_tipos_documentos_db"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"doc-"+o},domProps:{value:e,checked:Array.isArray(a.list_tipos_documentos_db)?a._i(a.list_tipos_documentos_db,e)>-1:a.list_tipos_documentos_db},on:{change:function(t){var o=a.list_tipos_documentos_db,r=t.target,i=!!r.checked;if(Array.isArray(o)){var s=e,n=a._i(o,s);r.checked?n<0&&(a.list_tipos_documentos_db=o.concat([s])):n>-1&&(a.list_tipos_documentos_db=o.slice(0,n).concat(o.slice(n+1)))}else a.list_tipos_documentos_db=i}}}),a._v(" "),t("label",{staticClass:"form-check-label",attrs:{for:"doc-"+o}},[a._v(a._s(e))])])}),0)]),a._v(" "),2==a.tipoAccion?t("div",{staticClass:"form-group row"},[t("label",{staticClass:"col-md-2 form-control-label"},[a._v("Anexos")]),a._v(" "),t("div",{staticClass:"col-md-9"},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:a.proveedor.anexos,expression:"proveedor.anexos"}],staticClass:"form-control",attrs:{rows:"3",maxlength:"300"},domProps:{value:a.proveedor.anexos},on:{input:function(t){t.target.composing||a.$set(a.proveedor,"anexos",t.target.value)}}})])]):a._e(),a._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:2==a.tipoAccion,expression:"tipoAccion == 2"}],staticClass:"form-group row"},[t("div",{staticClass:"col-md-11 mx-auto"},[t("div",{staticClass:"form-row"},[a._m(0),a._v(" "),t("div",{staticClass:"col"},[t("button",{staticClass:"btn btn-dark mb-3 float-sm-right",attrs:{type:"button"},on:{click:function(t){return a.AbrirModalBancos(1)}}},[t("i",{staticClass:"fas fa-plus"}),a._v("Agregar\r\n                                            ")])])]),a._v(" "),t("v-client-table",{attrs:{columns:a.columnsProvedores,data:a.ListBancos,options:a.optionsProveedores}})],1)])],2),a._v(" "),t("div",{staticClass:"modal-footer"},[t("button",{staticClass:"btn btn-success",on:{click:function(t){return a.openModalExcel()}}},[t("i",{staticClass:"fas fa-upload mr-1"}),a._v("Carga Excel\r\n                            ")]),a._v(" "),t("button",{staticClass:"btn btn-success",attrs:{disabled:a.isDownloading},on:{click:function(t){return a.descargarExcel()}}},[a.isDownloading?t("span",[t("i",{staticClass:"fas fa-spinner fa-spin mr-1"}),a._v("\r\n                                    Generando...\r\n                                ")]):t("span",[t("i",{staticClass:"fas fa-download mr-1"}),a._v("\r\n                                    Descargar Excel\r\n                                ")])]),a._v(" "),1==a.tipoAccion?t("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(t){return a.GuardarProveedor(!0)}}},[t("i",{staticClass:"fas fa-save mr-1"}),a._v("Crear")]):a._e(),a._v(" "),2==a.tipoAccion?t("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(t){return a.GuardarProveedor(!1)}}},[t("i",{staticClass:"fas fa-save mr-1"}),a._v("Actualizar")]):a._e()])],1)])])]),a._v(" "),t("div",{staticClass:"modal fade",class:{mostrar:a.modalProveedor},staticStyle:{display:"none"},attrs:{tabindex:"-1",role:"dialog","aria-labelledby":"myModalLabel","aria-hidden":"true"}},[t("div",{staticClass:"modal-dialog modal-dark modal-lg",attrs:{role:"document"}},[t("div",{staticClass:"modal-content"},[t("div",{staticClass:"modal-header"},[t("h4",{staticClass:"modal-title"},[a._v("Bancos del Proveedor")]),a._v(" "),t("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(t){return a.CerrarModalProveedores()}}},[t("span",{attrs:{"aria-hidden":"true"}},[a._v("x")])])]),a._v(" "),t("div",{staticClass:"modal-body"},[t("div",{staticClass:"form-group row"},[t("label",{staticClass:"col-md-2 form-control-label",attrs:{for:"banco_transferencia"}},[a._v("Banco")]),a._v(" "),t("div",{staticClass:"col-md-9"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.temp_proveedor_banco,expression:"temp_proveedor_banco"}],staticClass:"form-control",attrs:{type:"text",maxlength:"50",name:"banco_transferencia",placeholder:"Banco de transferencia",autocomplete:"off",id:"banco_transferencia","data-vv-name":"banco transferencia"},domProps:{value:a.temp_proveedor_banco},on:{input:function(t){t.target.composing||(a.temp_proveedor_banco=t.target.value)}}}),a._v(" "),t("span",{staticClass:"text-danger"},[a._v(a._s(a.errors.first("banco_transferencia")))])])]),a._v(" "),t("div",{staticClass:"form-group row"},[t("label",{staticClass:"col-md-2 form-control-label",attrs:{for:"numero_cuenta"}},[a._v("Cuenta")]),a._v(" "),t("div",{staticClass:"col-md-9"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.temp_proveedor_cuenta,expression:"temp_proveedor_cuenta"}],staticClass:"form-control",attrs:{type:"text",maxlength:"50",pattern:"^[0-9]+",name:"numero_cuenta",placeholder:"Número de cuenta",autocomplete:"off",id:"numero_cuenta","data-vv-name":"número cuenta"},domProps:{value:a.temp_proveedor_cuenta},on:{input:function(t){t.target.composing||(a.temp_proveedor_cuenta=t.target.value)}}}),a._v(" "),t("span",{staticClass:"text-danger"},[a._v(a._s(a.errors.first("numero_cuenta")))])])]),a._v(" "),t("div",{staticClass:"form-group row"},[t("label",{staticClass:"col-md-2 form-control-label",attrs:{for:"clabe"}},[a._v("Clabe")]),a._v(" "),t("div",{staticClass:"col-md-9"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.temp_proveedor_clabe,expression:"temp_proveedor_clabe"}],staticClass:"form-control",attrs:{type:"text",maxlength:"50",pattern:"^[0-9]+",name:"clabe",placeholder:"Clabe",autocomplete:"off",id:"clabe","data-vv-name":"clabe"},domProps:{value:a.temp_proveedor_clabe},on:{input:function(t){t.target.composing||(a.temp_proveedor_clabe=t.target.value)}}}),a._v(" "),t("span",{staticClass:"text-danger"},[a._v(a._s(a.errors.first("clabe")))])])]),a._v(" "),t("div",{staticClass:"form-group row"},[t("label",{staticClass:"col-md-2 form-control-label",attrs:{for:"clabe"}},[a._v("Condiciones de pago")]),a._v(" "),t("div",{staticClass:"col-md-9"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.temp_proveedor_condiciones,expression:"temp_proveedor_condiciones"}],staticClass:"form-control",attrs:{type:"text",maxlength:"50",placeholder:"Condiciones de pago",autocomplete:"off","data-vv-name":"condiciones"},domProps:{value:a.temp_proveedor_condiciones},on:{input:function(t){t.target.composing||(a.temp_proveedor_condiciones=t.target.value)}}}),a._v(" "),t("span",{staticClass:"text-danger"},[a._v(a._s(a.errors.first("Condiciones")))])])]),a._v(" "),t("div",{staticClass:"form-group row"},[t("label",{staticClass:"col-md-2 form-control-label",attrs:{for:"clabe"}},[a._v("Moneda")]),a._v(" "),t("div",{staticClass:"col-md-3"},[t("select",{directives:[{name:"model",rawName:"v-model",value:a.temp_proveedor_moneda,expression:"temp_proveedor_moneda"}],staticClass:"form-control",attrs:{"data-vv-name":"moneda"},on:{change:function(t){var e=Array.prototype.filter.call(t.target.options,function(a){return a.selected}).map(function(a){return"_value"in a?a._value:a.value});a.temp_proveedor_moneda=t.target.multiple?e:e[0]}}},[t("option",{attrs:{value:"MXN"}},[a._v("MXN")]),a._v(" "),t("option",{attrs:{value:"USD"}},[a._v("USD")]),a._v(" "),t("option",{attrs:{value:"EUR"}},[a._v("EUR")])])])])]),a._v(" "),t("div",{staticClass:"modal-footer"},[t("button",{staticClass:"btn btn-outline-dark",attrs:{type:"button"},on:{click:function(t){return a.CerrarModalProveedores()}}},[t("i",{staticClass:"fas fa-window-close mr-1"}),a._v("Cancelar")]),a._v(" "),1==a.tipo_guardar?t("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(t){return a.guardarProveedoresTemp(1)}}},[t("i",{staticClass:"fas fa-save mr-1"}),a._v("Guardar")]):t("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(t){return a.guardarProveedoresTemp(2)}}},[t("i",{staticClass:"fas fa-save mr-1"}),a._v("Actualizar")])])])])]),a._v(" "),t("div",{staticClass:"modal fade",class:{mostrar:a.ver_modal_historial},staticStyle:{display:"none"},attrs:{tabindex:"-1",role:"dialog","aria-labelledby":"myModalLabel","aria-hidden":"true"}},[t("div",{staticClass:"modal-dialog modal-dark modal-lg",attrs:{role:"document"}},[t("div",{staticClass:"modal-content"},[t("div",[t("div",{staticClass:"modal-header"},[t("h4",{staticClass:"modal-title"},[a._v(a._s(a.nombre_proveedor))]),a._v(" "),t("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(t){return a.CerrarModalHistorial()}}},[t("span",{attrs:{"aria-hidden":"true"}},[a._v("x")])])]),a._v(" "),t("div",{staticClass:"modal-body"},[t("vue-element-loading",{attrs:{active:a.isObtenerHistorial_loading}}),a._v(" "),t("div",{staticClass:"container"},[a.list_historial.length>0?t("div",[t("table",{staticClass:"table table-sm"},[a._m(1),a._v(" "),t("tbody",a._l(a.list_historial,function(e,o){return t("tr",{key:o},[t("th",{attrs:{scope:"row"}},[a._v(a._s(o+1))]),a._v(" "),t("td",[a._v(a._s(e.fecha))]),a._v(" "),t("td",[a._v(a._s(e.tipo_movimiento))]),a._v(" "),t("td",[a._v(a._s(e.modificacion))]),a._v(" "),t("td",[t("button",{staticClass:"btn btn-sm btn-dark",on:{click:function(t){return a.DescargarHistorial(e.id)}}},[t("i",{staticClass:"fas fa-download"})])])])}),0)])]):t("div",[t("h5",{staticClass:"text-center"},[a._v("Sin Cambios")])])])],1),a._v(" "),t("div",{staticClass:"modal-footer"},[t("button",{staticClass:"btn btn-outline-dark",attrs:{type:"button"},on:{click:function(t){return a.CerrarModalHistorial()}}},[t("i",{staticClass:"fas fa-window-close"}),a._v("\r\n                             Cerrar\r\n                        ")])])])])])]),a._v(" "),t("modal-component",{attrs:{showModal:a.showModalExcel,loading:a.loading},on:{"set-loading":function(t){a.setLoading=t},close:function(t){a.showModalExcel=!1},"file-upload":a.loadExcel}})],1)},[function(){var a=this._self._c;return a("div",{staticClass:"col mx-auto"},[a("label",{staticClass:"font-weight-bold"},[this._v("Datos bancarios")])])},function(){var a=this,t=a._self._c;return t("thead",{staticClass:"thead-dark"},[t("tr",[t("th",{attrs:{scope:"col"}},[a._v("#")]),a._v(" "),t("th",{attrs:{scope:"col"}},[a._v("Fecha")]),a._v(" "),t("th",{attrs:{scope:"col"}},[a._v("Tipo de Movimiento")]),a._v(" "),t("th",{attrs:{scope:"col"}},[a._v("Modificación")]),a._v(" "),t("th",{attrs:{scope:"col"}})])])}],!1,null,null,null).exports},81796:(a,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>s});var o=e(60173),r=e(14941).call(void 0);const i={data:function(){return{url:"/catservicios",desabilitado:0,servicio:{id:0,nombre_servicio:"",proveedor_marca:"",unidad_medida:"Servicio"},modal:0,tituloModal:"",tipoAccion:0,isLoading:!1,isLoading_servicios:!1,columns:["id","nombre_servicio","proveedor_marca","unidad_medida"],list_servicios:[],options:{headings:{id:"Acción",nombre_servicio:"Nombre del Servicio",proveedor_marca:"Marca/Servicio",unidad_medida:"Unidad de Medida"},perPage:10,perPageValues:[],skin:r.skin,sortIcon:r.sortIcon,filterByColumn:!0,texts:r.texts}}},computed:{},methods:{ObtenerServicios:function(){var a=this;this.isLoading_servicios=!0,axios.get(this.url).then(function(t){a.isLoading_servicios=!1,t.data.status?a.list_servicios=t.data.servicios:toastr.error(t.data.mensaje)})},guardarServicio:function(a){var t=this;this.$validator.validate().then(function(e){e&&(t.isLoading=!0,axios({method:a?"POST":"PUT",url:a?t.url:t.url+"/"+t.id,data:{id:t.servicio.id,nombre_servicio:t.servicio.nombre_servicio,proveedor_marca:t.servicio.proveedor_marca,unidad_medida:t.servicio.unidad_medida}}).then(function(e){t.isLoading=!1,e.data.status?(t.cerrarModal(),t.ObtenerServicios(),a?toastr.success("Servicio Agregado Correctamente"):toastr.success("Servicio Actualizado Correctamente")):toastr.error(e.data.mensaje)}))})},cerrarModal:function(){this.modal=0,this.tituloModal="",o.A.resetObject(this.servicio)},abrirModal:function(){var a=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];this.modal=1,a?(this.tipoAccion=1,this.tituloModal="Registrar Servicio",this.servicio.unidad_medida="Servicio"):(this.tipoAccion=2,this.tituloModal="Actualizar Servicio",this.servicio.id=t.id,this.servicio.nombre_servicio=t.nombre_servicio,this.servicio.proveedor_marca=t.proveedor_marca,this.servicio.unidad_medida=t.unidad_medida)}},mounted:function(){this.ObtenerServicios()}};const s=(0,e(14486).A)(i,function(){var a=this,t=a._self._c;return t("main",{staticClass:"main"},[t("div",{staticClass:"container-fluid"},[t("div",{staticClass:"card"},[t("div",{staticClass:"card-header"},[t("i",{staticClass:"fa fa-align-justify"}),a._v(" Servicios\r\n                "),t("button",{staticClass:"btn btn-dark float-sm-right",attrs:{type:"button"},on:{click:function(t){return a.abrirModal()}}},[t("i",{staticClass:"fas fa-plus"}),a._v("Nuevo\r\n                ")])]),a._v(" "),t("vue-element-loading",{attrs:{active:a.isLoading_servicios}}),a._v(" "),t("div",{staticClass:"card-body"},[t("v-client-table",{ref:"myTable",attrs:{columns:a.columns,data:a.list_servicios,options:a.options},scopedSlots:a._u([{key:"id",fn:function(e){return[t("div",{staticClass:"btn-group",attrs:{role:"group","aria-label":"Button group with nested dropdown"}},[t("div",{staticClass:"btn-group dropup",attrs:{role:"group"}},[t("button",{staticClass:"btn btn-outline-dark dropdown-toggle",attrs:{id:"btnGroupDrop1",type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t("i",{staticClass:"fas fa-grip-horizontal"}),a._v(" Acciones\r\n                                ")]),a._v(" "),t("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"btnGroupDrop1"}},[t("button",{staticClass:"dropdown-item",attrs:{type:"button"},on:{click:function(t){return a.abrirModal(!1,e.row)}}},[t("i",{staticClass:"fas fa-edit"}),a._v("Actualizar servicio.\r\n                                    ")])])])])]}}])})],1)],1)]),a._v(" "),t("div",{staticClass:"modal fade",class:{mostrar:a.modal},staticStyle:{display:"none"},attrs:{tabindex:"-1",role:"dialog","aria-labelledby":"myModalLabel","aria-hidden":"true"}},[t("div",{staticClass:"modal-dialog modal-dark modal-lg",attrs:{role:"document"}},[t("div",{staticClass:"modal-content"},[t("div",[t("div",{staticClass:"modal-header"},[t("h4",{staticClass:"modal-title",domProps:{textContent:a._s(a.tituloModal)}}),a._v(" "),t("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(t){return a.cerrarModal()}}},[t("span",{attrs:{"aria-hidden":"true"}},[a._v("×")])])]),a._v(" "),t("div",{staticClass:"modal-body"},[t("vue-element-loading",{attrs:{active:a.isLoading}}),a._v(" "),t("div",[t("div",{staticClass:"form-group row"},[t("label",{staticClass:"col-md-3 form-control-label"},[a._v("Nombre del Servicio")]),a._v(" "),t("div",{staticClass:"col-md-9"},[t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:a.servicio.nombre_servicio,expression:"servicio.nombre_servicio"}],staticClass:"form-control",attrs:{type:"text","data-vv-name":"Nombre",name:"nombre_servicio",placeholder:"Nombre del Servicio",autocomplete:"off"},domProps:{value:a.servicio.nombre_servicio},on:{input:function(t){t.target.composing||a.$set(a.servicio,"nombre_servicio",t.target.value)}}}),a._v(" "),t("span",{staticClass:"text-danger"},[a._v(a._s(a.errors.first("Nombre")))])])]),a._v(" "),t("div",{staticClass:"form-group row"},[t("label",{staticClass:"col-md-3 form-control-label"},[a._v("Marca/Proveedor")]),a._v(" "),t("div",{staticClass:"col-md-9"},[t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:a.servicio.proveedor_marca,expression:"servicio.proveedor_marca"}],staticClass:"form-control",attrs:{type:"text","data-vv-name":"Marca/Proveedor",placeholder:"Marca/Proveedor",autocomplete:"off"},domProps:{value:a.servicio.proveedor_marca},on:{input:function(t){t.target.composing||a.$set(a.servicio,"proveedor_marca",t.target.value)}}}),a._v(" "),t("span",{staticClass:"text-danger"},[a._v(a._s(a.errors.first("Marca/Proveedor")))])])]),a._v(" "),t("div",{staticClass:"form-group row"},[t("label",{staticClass:"col-md-3 form-control-label"},[a._v("Unidad de Medida")]),a._v(" "),t("div",{staticClass:"col-md-9"},[t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:a.servicio.unidad_medida,expression:"servicio.unidad_medida"}],staticClass:"form-control",attrs:{disabled:"",type:"text",name:"unidad_medida",placeholder:"Unidad de Medida",autocomplete:"off"},domProps:{value:a.servicio.unidad_medida},on:{input:function(t){t.target.composing||a.$set(a.servicio,"unidad_medida",t.target.value)}}})])])])],1),a._v(" "),t("div",{staticClass:"modal-footer"},[t("vue-element-loading",{attrs:{active:a.isLoading}}),a._v(" "),t("div",[t("button",{staticClass:"btn btn-outline-dark",attrs:{type:"button"},on:{click:function(t){return a.cerrarModal()}}},[t("i",{staticClass:"fas fa-window-close"}),a._v("Cerrar")]),a._v(" "),1==a.tipoAccion?t("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(t){return a.guardarServicio(1)}}},[t("i",{staticClass:"fas fa-save"}),a._v("Guardar")]):a._e(),a._v(" "),2==a.tipoAccion?t("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(t){return a.guardarServicio(0)}}},[t("i",{staticClass:"fas fa-save"}),a._v("Actualizar")]):a._e()])],1)])])])])])},[],!1,null,null,null).exports},99487:(a,t,e)=>{"use strict";e.d(t,{A:()=>i});var o=e(76798),r=e.n(o)()(function(a){return a[1]});r.push([a.id,'.VueTables__child-row-toggler--closed:before{content:"+"}.VueTables__child-row-toggler--open:before{content:"-"}',""]);const i=r}}]);
>>>>>>> almacen
