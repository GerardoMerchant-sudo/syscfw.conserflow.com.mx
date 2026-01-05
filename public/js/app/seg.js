(self["webpackChunk"] = self["webpackChunk"] || []).push([["seg"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/Alcoholimetria.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/Alcoholimetria.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************/
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
    return _defineProperty(_defineProperty({
      url: "seguridad/pruebasalcohol/",
      ver_modal_pruebas: 0,
      tituloModal: '',
      prueba: {},
      list_empleados: [],
      tipoAccion: 0,
      isPruebas_loading: false,
      isGuardarpl_loading: false,
      columns_pruebas: ["id", "fecha", "ubicacion", "responsable", "observaciones", "documento"],
      list_pruebas: [],
      options_pruebas: {
        headings: {
          id: 'Acción',
          nombre: 'Nombre'
        },
        perPage: 10,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        filterByColumn: true,
        texts: config.texts
      },
      // Participantes
      participante: {},
      resultado: "",
      list_participantes: [],
      participantes: [],
      tipoCard: 1,
      isParticipantes_loading: false,
      isGuardarparticip_loading: false,
      columns_participantes: ["nombre", "puesto", "resultado"]
    }, "list_participantes", []), "options_participantes", {
      headings: {
        id: 'Acción',
        nombre: "Empleado"
      },
      perPage: 10,
      perPageValues: [],
      skin: config.skin,
      sortIcon: config.sortIcon,
      filterByColumn: true,
      texts: config.texts
    });
  },
  computed: {},
  methods: {
    /**
     * Obtener todas las pruebaalcohol
     */
    ObtenerPruebas: function ObtenerPruebas() {
      var _this = this;
      this.isPruebas_loading = true;
      axios.get(this.url + "obtenerpruebas").then(function (res) {
        if (res.data.status) {
          _this.isPruebas_loading = false;
          _this.list_pruebas = res.data.pruebas;
        } else toastr.error(res.data.status);
      });
    },
    AbrirModalPruebas: function AbrirModalPruebas() {
      var nuevo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var prueba = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.ver_modal_pruebas = true;
      if (nuevo) {
        this.tipoAccion = 1;
        this.tituloModal = "Registar plática";
      } else {
        this.tipoAccion = 2;
        this.tituloModal = "Actualizar plática";
        this.prueba = _objectSpread({}, prueba);
        this.prueba.responsable = {
          id: prueba.responsable_id,
          nombre: prueba.responsable
        };
      }
    },
    /**
     * Obtener todos los empleados
     */
    ObtenerEmpleados: function ObtenerEmpleados() {
      var _this2 = this;
      axios.get("generales/empleadoactivos").then(function (res) {
        if (res.data.status) {
          _this2.list_empleados = res.data.empleados;
        } else toastr.error(res.data.mensaje);
      });
    },
    /**
     * Registrar plática
     */
    GuardarPrueba: function GuardarPrueba() {
      var _this3 = this;
      var nuevo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.$validator.validate().then(function (isValid) {
        if (!isValid) return;
        _this3.isGuardarpl_loading = true;
        var data = new FormData();
        if (!nuevo) data.append("id", _this3.prueba.id);
        data.append("fecha", _this3.prueba.fecha);
        data.append("ubicacion", _this3.prueba.ubicacion);
        data.append("observaciones", _this3.prueba.observaciones);
        data.append("responsable_id", _this3.prueba.responsable.id);
        axios.post(_this3.url + "guardar", data).then(function (res) {
          _this3.isGuardarpl_loading = false;
          if (res.data.status) {
            toastr.success("Plática guardada correctamente");
            _this3.CerrarModalPruebas();
            _this3.ObtenerPruebas();
          } else {
            toastr.error(res.data.mensaje);
          }
        });
      });
    },
    CerrarModalPruebas: function CerrarModalPruebas() {
      this.ver_modal_pruebas = 0;
      this.prueba = {
        responsable: {}
      };
    },
    VerParticipantes: function VerParticipantes(prueba) {
      this.tipoCard = 2;
      this.prueba_id = prueba.id;
      this.isParticipantes_loading = true;
      this.ObtenerParticipantes(prueba.id);
    },
    // Obtener los participante de la prueba selecionada
    ObtenerParticipantes: function ObtenerParticipantes() {
      var _this4 = this;
      this.isParticipantes_loading = true;
      axios.get(this.url + "participantes/obtener/" + this.prueba_id).then(function (res) {
        _this4.isParticipantes_loading = false;
        if (res.data.status) {
          _this4.list_participantes = res.data.participantes;
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    /**
     * Guardar los participantes en la prueba seleccinoada
     */
    GuadarParticipantes: function GuadarParticipantes() {
      var _this5 = this;
      if (this.participantes.length == 0) return;
      this.isGuardarparticip_loading = true;
      axios.post(this.url + "participantes/guardar", {
        "prueba_id": this.prueba_id,
        "participantes": this.participantes,
        "resultado": this.resultado
      }).then(function (res) {
        _this5.isGuardarparticip_loading = false;
        if (res.data.status) {
          _this5.participantes = [];
          _this5.resultado = "";
          toastr.success("Guardado correctamente");
          _this5.ObtenerParticipantes();
        } else toastr.error(res.data.mensaje);
      });
    },
    DescargarPlantilla: function DescargarPlantilla(p_id) {
      window.open(this.url + 'descargarplantilla/' + p_id, '_blank');
    },
    /**
     * Subir pdf de platica
     */
    SubirEvidencia: function SubirEvidencia(id) {
      var _this6 = this;
      Swal.fire({
        title: "Cargar documento de la prueba",
        input: "file",
        confirmButtonText: "Cargar"
      }).then(function (result) {
        console.error(result);
        if (result.value == null) return;
        if (result.value.type === "application/pdf") {
          var data = new FormData();
          data.append("prueba_id", id);
          data.append("evidencia", result.value);
          axios.post(_this6.url + "subirevidencia", data).then(function (res) {
            if (res.data.status) {
              toastr.success("Documento subido correctamente");
              _this6.ObtenerPruebas();
            } else {
              toastr.error(res.data.mensaje);
            }
          })["catch"](function (r) {
            console.error(r);
            toastr.error("Error al subir el documento");
          });
        } else {
          toastr.warning("Seleccione un PDF");
        }
      });
    },
    DescargarEvidencia: function DescargarEvidencia(id) {
      window.open(this.url + 'descargarevidencia/' + id, '_blank');
    }
  },
  mounted: function mounted() {
    this.ObtenerPruebas();
    this.ObtenerEmpleados();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/AnalisisSeguridad.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/AnalisisSeguridad.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************/
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
      tituloModal: '',
      modal: 0,
      modal_participantes: 0,
      tipoAccion: 0,
      isLoading: false,
      ///
      id: 0,
      ubicacion: '',
      permiso: '',
      descripcion: '',
      operaciones: [],
      shso: '',
      empleado: '',
      fecha: '',
      //
      listaCatalogo: [],
      catalogo: '',
      listado_data: [],
      listado_id: [],
      listado_supervisor: [],
      vs_options: [],
      supervisor: '',
      ///
      tableData: [],
      columns: ['id', 'fecha', 'numero_permiso', 'ubicacion', 'descripcion', 'descargar'],
      options: {
        headings: {
          'id': 'ACCIONES'
        },
        perPage: 10,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        filterByColumn: true,
        texts: config.texts
      },
      ////
      tableDataParticipantes: [],
      columnsParticipantes: ['empleado_id', 'empleado'],
      optionsParticipantes: {
        headings: {
          'empleado_id': 'ACCIONES'
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
    getDataInicial: function getDataInicial() {
      var _this = this;
      axios.get('get/analisis/seguridad').then(function (response) {
        _this.tableData = response.data;
      })["catch"](function (e) {
        console.error(e);
      });
    },
    getData: function getData() {
      var _this2 = this;
      this.listaCatalogo = [];
      axios.get('get/lista/catalogo/analisis').then(function (response) {
        _this2.listaCatalogo = response.data;
      })["catch"](function (e) {
        console.error(e);
      });
      axios.get('vertodosempleados').then(function (response) {
        // console.log(response);
        response.data.forEach(function (item, i) {
          _this2.vs_options.push({
            id: item.id,
            name: item.nombre + ' ' + item.ap_paterno + ' ' + item.ap_materno
          });
        });
      })["catch"](function (e) {
        console.error(e);
      });
    },
    abrirModal: function abrirModal(modelo, accion) {
      var _this3 = this;
      var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      switch (modelo) {
        case "analisis":
          {
            switch (accion) {
              case 'registrar':
                {
                  this.modal = 1;
                  this.tituloModal = 'Registrar análisis';
                  this.tipoAccion = 1;
                  this.VaciarDos();
                  break;
                }
              case 'actualizar':
                {
                  this.listado_data = [];
                  this.listado_id = [];
                  this.listado_supervisor = [];
                  // console.log(data);
                  axios.get('get/lista/evaluacion/riesgo/' + data.id).then(function (response) {
                    response.data.forEach(function (item, i) {
                      _this3.listado_data.push({
                        id: item.id,
                        actividad: item.secuencia,
                        riesgo: item.riesgo,
                        medidas: item.recomendacion,
                        supervisor: item.supervisor
                      });
                      _this3.listado_supervisor.push(item.supervisor_id);
                      _this3.listado_id.push(item.catalogo_analisis_seguridad_id);
                    });
                  })["catch"](function (e) {
                    console.error(e);
                  });
                  this.operaciones = {
                    id: data['empleado_operaciones'],
                    name: data['operaciones_empleado']
                  };
                  this.shso = {
                    id: data['empleado_shso'],
                    name: data['shso_empleado']
                  };
                  this.id = data['id'];
                  this.ubicacion = data['ubicacion'];
                  this.permiso = data['numero_permiso'];
                  this.descripcion = data['descripcion'];
                  this.fecha = data['fecha'];
                  this.modal = 1;
                  this.tituloModal = 'Actualizar análisis';
                  this.tipoAccion = 2;
                  break;
                }
            }
          }
      }
    },
    Cerrar: function Cerrar() {
      this.modal = 0;
    },
    guardarasignacion: function guardarasignacion() {
      var _this4 = this;
      if (this.listado_data.find(function (info) {
        return info.actividad == _this4.catalogo.secuencia;
      })) {
        toastr.warning('Ya seleccionado');
      } else {
        if (this.catalogo != '') {
          this.listado_data.push({
            actividad: this.catalogo.secuencia,
            riesgo: this.catalogo.riesgo,
            medidas: this.catalogo.recomendacion,
            supervisor: this.supervisor.name,
            temp: true
          });
          this.listado_id.push(this.catalogo.id);
          this.listado_supervisor.push(this.supervisor.id);
          this.catalogo = '';
          this.supervisor = '';
        }
      }
    },
    /**
     * Borrar el riesgo en temporal
     */
    deleteu: function deleteu(index) {
      this.listado_data.splice(index, 1);
      this.listado_id.splice(index, 1);
      this.listado_supervisor.splice(index, 1);
    },
    /**
     * Elimina el riesgo seleccionado en la DB
     */
    BorrarRiesgo: function BorrarRiesgo(id) {
      var _this5 = this;
      axios.post("seguridad/analisis/eliminar", {
        id: id
      }).then(function (res) {
        if (res.data.status) {
          toastr.success("Eliminado correctamente");
          //mostrar nuevos
          _this5.listado_data = []; // Limpiar para duplicados
          _this5.listado_supervisor = [];
          _this5.listado_id = [];
          res.data.riesgos.forEach(function (item, i) {
            _this5.listado_data.push({
              id: item.id,
              actividad: item.secuencia,
              riesgo: item.riesgo,
              medidas: item.recomendacion,
              supervisor: item.supervisor,
              temp: false
            });
            _this5.listado_supervisor.push(item.supervisor_id);
            _this5.listado_id.push(item.catalogo_analisis_seguridad_id);
          });
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    Guardar: function Guardar(nuevo) {
      var _this6 = this;
      this.$validator.validate().then(function (result) {
        if (result) {
          var me = _this6;
          axios({
            method: nuevo ? 'POST' : 'PUT',
            url: nuevo ? '/guardar/analisis/seguridad' : '/actualizar/analisis/seguridad',
            data: {
              id: _this6.id,
              ubicacion: _this6.ubicacion,
              permiso: _this6.permiso,
              descripcion: _this6.descripcion,
              operaciones: _this6.operaciones.id,
              shso: _this6.shso.id,
              listado_id: _this6.listado_id,
              listado_supervisor: _this6.listado_supervisor,
              fecha: _this6.fecha
            }
          }).then(function (response) {
            _this6.getDataInicial();
            _this6.Vaciar();
          })["catch"](function (e) {
            console.error(e);
          });
        }
      });
    },
    Vaciar: function Vaciar() {
      this.id = 0;
      this.ubicacion = '';
      this.permiso = '';
      this.descripcion = '';
      this.operaciones = '';
      this.shso = '';
      this.listado_data = [];
      this.listado_id = [];
      this.modal = 0;
      this.fecha = '';
    },
    VaciarDos: function VaciarDos() {
      this.id = 0;
      this.ubicacion = '';
      this.permiso = '';
      this.descripcion = '';
      this.operaciones = '';
      this.shso = '';
      this.fecha = '';
      this.listado_data = [];
      this.listado_id = [];
      this.listado_supervisor = [];
    },
    participantes: function participantes(data) {
      this.analisis_id = data.id;
      this.modal_participantes = 1;
      this.getParticipantes(data.id);
    },
    getParticipantes: function getParticipantes(id) {
      var _this7 = this;
      this.tableDataParticipantes = [];
      axios.get('get/participantes/analisis/seguridad/' + id).then(function (response) {
        _this7.tableDataParticipantes = response.data;
      })["catch"](function (e) {
        console.error(e);
      });
    },
    cerrarModalP: function cerrarModalP() {
      this.modal_participantes = 0;
    },
    agregarEmpleado: function agregarEmpleado() {
      var _this8 = this;
      axios.post('guardar/participantes/analisis/seguridad', {
        id: this.analisis_id,
        empleado: this.empleado.id
      }).then(function (response) {
        // console.log(response);
        _this8.getParticipantes(_this8.analisis_id);
      })["catch"](function (error) {
        console.error(error);
      });
    },
    eliminarParticipante: function eliminarParticipante(empleado_id) {
      var _this9 = this;
      axios.get('eliminar/participantes/analisis/seguridad/' + empleado_id + '&' + this.analisis_id).then(function (response) {
        _this9.getParticipantes(_this9.analisis_id);
      })["catch"](function (e) {
        console.error(e);
      });
    },
    descargar: function descargar(data) {
      window.open('descargar/analisis/seguridad/' + data, '_blank');
    },
    eliminar: function eliminar(id) {
      var _this0 = this;
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
          axios.get('eliminar/analisis/seguridad/' + id).then(function (response) {
            toastr.success('Eliminado Correctamente !!!');
            _this0.getDataInicial();
          })["catch"](function (e) {
            console.error(e);
          });
        }
      });
    }
  },
  mounted: function mounted() {
    this.getData();
    this.getDataInicial();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/BitacoraResiduos.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/BitacoraResiduos.vue?vue&type=script&lang=js ***!
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
      data_: '',
      detalle: false,
      id_gral: 0,
      folio: '',
      responsable: '',
      localidad: '',
      modal: 0,
      modal_gral: 0,
      tituloModal: '',
      tituloModalGral: '',
      tipoAccion: 0,
      tipoAccionGral: 0,
      departamentosList: [],
      listaEmpleados: [],
      area_proceso_array: '',
      destino: 1,
      id: 0,
      uno: {
        fecha: '',
        nombre: '',
        tipo: '',
        cantidad: '',
        unidad: '',
        area_proceso: '',
        fecha_salida_rme: ''
      },
      dos: {
        crebit: '',
        fecha: '',
        clave: '',
        no_autorizacion: '',
        proveedor: '',
        num_manifiesto: ''
      },
      options: {
        headings: {
          id: 'Acciones',
          responsable_nombre: 'Responsable'
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
      columns: ['id', 'fecha', 'tipo', 'residuo'],
      tableData: [],
      options_gral: {
        headings: {
          id: 'Acciones',
          responsable_nombre: 'Responsable'
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
      columns_gral: ['id', 'folio', 'responsable_nombre', 'localidad', 'descargar'],
      tableDataGral: [],
      list_residuos_uno: [],
      list_residuos_dos: []
    };
  },
  methods: {
    getEmpleado: function getEmpleado() {
      var _this = this;
      this.listaEmpleados = [];
      axios.get('/vertodosempleados').then(function (response) {
        response.data.forEach(function (data) {
          _this.listaEmpleados.push({
            id: data.id,
            name: data.nombre + ' ' + data.ap_paterno + ' ' + data.ap_materno
          });
        });
      })["catch"](function (error) {
        console.log(error);
      });
      axios.get('get/lista/catalogo/residuos').then(function (response) {
        response.data.forEach(function (item, i) {
          if (item.residuo.tipo == 1) {
            _this.list_residuos_uno.push(item);
          } else if (item.residuo.tipo == 2) {
            _this.list_residuos_dos.push(item);
          }
        });
      })["catch"](function (e) {
        console.error(e);
      });
    },
    getData: function getData() {
      var _this2 = this;
      axios.get('seguridad/residuos/get/bitacora/gral').then(function (response) {
        _this2.tableDataGral = response.data;
      })["catch"](function (e) {
        console.error(e);
      });
    },
    abrirModal: function abrirModal(modelo, accion) {
      var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      switch (modelo) {
        case "bitacora":
          {
            switch (accion) {
              case 'registrar':
                {
                  this.vaciarUno();
                  // Utilerias.resetObject(this.uno);
                  // Utilerias.resetObject(this.dos);
                  this.modal_gral = 0;
                  this.modal = 1;
                  this.tituloModal = 'Registrar';
                  this.tipoAccion = 1;
                  break;
                }
              case 'actualizar':
                {
                  // console.log(data,'dfgh');
                  this.modal_gral = 0;
                  this.modal = 1;
                  this.tituloModal = 'Actualizar';
                  this.tipoAccion = 2;
                  this.uno.fecha = data['fecha'];
                  this.uno.tipo = data['tipo'];
                  if (this.uno.tipo == 1) {
                    this.uno.nombre = this.list_residuos_uno.find(function (info) {
                      return info.residuo.id == data['nombre'];
                    });
                  } else if (this.uno.tipo == 2) {
                    this.uno.nombre = this.list_residuos_dos.find(function (info) {
                      return info.residuo.id == data['nombre'];
                    });
                  }
                  this.uno.cantidad = data['cantidad'];
                  this.uno.unidad = data['unidad'];
                  this.destino = data['destino'];
                  // this.Asignar();
                  this.uno.area_proceso = data['area_proceso'];
                  this.uno.fecha_salida_rme = data['fecha_salida_rme'];
                  this.dos.fecha = data['fecha_dos'];
                  this.dos.proveedor = data['proveedor'];
                  this.dos.crebit = data['crebit'];
                  this.dos.no_autorizacion = data['no_autorizacion'];
                  this.dos.clave = data['clave'];
                  this.dos.num_manifiesto = data['num_manifiesto'];
                  this.id = data['id'];
                  break;
                }
              case 'registrar_gral':
                {
                  this.modal_gral = 1;
                  this.tituloModalGral = 'Registrar';
                  this.tipoAccionGral = 1;
                  this.VaciarGral();
                  break;
                }
              case 'actualizar_gral':
                {
                  // console.log(data);
                  this.VaciarGral();
                  this.modal_gral = 1;
                  this.tituloModalGral = 'Actualizar';
                  this.tipoAccionGral = 2;
                  this.responsable = {
                    id: data['responsable'],
                    name: data['responsable_nombre']
                  };
                  this.localidad = data['localidad'];
                  this.folio = data['folio'];
                  this.id_gral = data['id'];
                  break;
                }
            }
          }
      }
    },
    vaciarUno: function vaciarUno() {
      this.uno.fecha = '';
      this.uno.cantidad = '';
      this.uno.unidad = '';
      this.uno.fecha_salida_rme = '';
      _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.dos);
    },
    Guardar: function Guardar(nuevo) {
      var _this3 = this;
      this.$validator.validate().then(function (result) {
        // console.log(result);
        if (result) {
          axios({
            method: nuevo ? 'POST' : 'PUT',
            url: nuevo ? 'seguridad/residuos/guardar/bitacora' : 'seguridad/residuos/actualizar/bitacora',
            data: {
              id: _this3.id,
              bitacora_residuos_entrada_general_id: _this3.id_gral,
              fecha: _this3.uno.fecha,
              nombre: _this3.uno.nombre.residuo.id,
              tipo: _this3.uno.tipo,
              cantidad: _this3.uno.cantidad,
              unidad: _this3.uno.unidad,
              area_proceso: _this3.uno.area_proceso,
              fecha_salida_rme: _this3.uno.fecha_salida_rme,
              crebit: _this3.dos.crebit,
              destino: _this3.destino,
              fecha_dos: _this3.dos.fecha,
              proveedor: _this3.dos.proveedor,
              no_autorizacion: _this3.dos.no_autorizacion,
              clave: _this3.dos.clave,
              num_manifiesto: _this3.dos.num_manifiesto
              // localidad : this.localidad,
              // responsable : this.responsable.id,
            }
          }).then(function (response) {
            console.log(response.data);
            toastr.success('Guardado correctamente !!!');
            _this3.cerrarModal();
            _this3.actualizarDetalle(_this3.data_);
            // this.Vaciar();
          })["catch"](function (e) {
            console.error(e);
          });
        }
      });
    },
    cerrarModal: function cerrarModal() {
      this.modal = 0;
    },
    cerrarModalGral: function cerrarModalGral() {
      this.modal_gral = 0;
    },
    Vaciar: function Vaciar() {
      _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.uno);
      _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.dos);
    },
    VaciarGral: function VaciarGral() {
      this.localidad = '';
      this.folio = '';
      this.responsable = '';
    },
    Asignar: function Asignar() {
      switch (this.uno.nombre) {
        case '7':
          this.area_proceso_array = ['Oficina', 'Almacén', 'Comedor', 'Baños'];
          break;
        case '8':
          this.area_proceso_array = ['Comedor'];
          break;
        case '9':
          this.area_proceso_array = ['Oficina', 'Comedor', 'Taller'];
          break;
        case '10':
          this.area_proceso_array = ['Oficina', 'Comedor'];
          break;
        case '11':
          this.area_proceso_array = ['Oficinas'];
          break;
        case '12':
          this.area_proceso_array = ['Oficina', 'Almacén', 'Taller'];
          break;
        case '13':
          this.area_proceso_array = ['Taller'];
          break;
        case '1':
          this.area_proceso_array = ['Taller'];
          break;
        case '2':
          this.area_proceso_array = ['Taller'];
          break;
        case '3':
          this.area_proceso_array = ['Taller', 'Oficinas'];
          break;
        case '4':
          this.area_proceso_array = ['Taller'];
          break;
        case '5':
          this.area_proceso_array = ['Vehículos'];
          break;
        case '6':
          this.area_proceso_array = ['Vehículos', 'Oficina (TI)'];
          break;
      }
    },
    /**
     * Descarga el formato de rp o rme
     */
    descargar: function descargar(data) {
      window.open('descargar/bitacora/descargar/' + data, '_blank');
    },
    verdetalle: function verdetalle(data) {
      var _this4 = this;
      // console.log(data);
      this.detalle = true;
      this.data_ = data;
      this.id_gral = data.id;
      axios.get('seguridad/residuos/get/bitacora/' + data.id).then(function (response) {
        _this4.tableData = response.data;
      })["catch"](function (e) {
        console.error(e);
      });
    },
    actualizarDetalle: function actualizarDetalle(data) {
      var _this5 = this;
      axios.get('seguridad/residuos/get/bitacora/' + data.id).then(function (response) {
        _this5.tableData = response.data;
      })["catch"](function (e) {
        console.error(e);
      });
    },
    atras: function atras() {
      this.detalle = false;
    },
    GuardarGral: function GuardarGral(nuevo) {
      var _this6 = this;
      axios({
        method: nuevo ? 'POST' : 'PUT',
        url: nuevo ? 'seguridad/residuos/guardar/bitacora/gral' : 'seguridad/residuos/actualizar/bitacora/gral',
        data: {
          id: this.id_gral,
          localidad: this.localidad,
          responsable: this.responsable.id,
          folio: this.folio
        }
      }).then(function (response) {
        // console.log(response.data);
        toastr.success('Guardado correctamente !!!');
        _this6.VaciarGral();
        _this6.cerrarModalGral();
        _this6.getData();
      })["catch"](function (e) {
        console.error(e);
      });
    },
    eliminar: function eliminar(id) {
      var _this7 = this;
      swal({
        title: 'Esta seguro(a) eliminar',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#4dbd74',
        cancelButtonColor: '#f86c6b',
        confirmButtonText: 'Aceptar!',
        cancelButtonText: 'Cancelar',
        reverseButtons: true
      }).then(function (result) {
        if (result.value) {
          axios.get('eliminar/bitacora/residuos/' + id).then(function (response) {
            _this7.getData();
            toastr.success('Eliminado Correctamente');
          })["catch"](function (e) {
            console.error(e);
          });
        }
      });
    }
  },
  mounted: function mounted() {
    this.getData();
    this.getEmpleado();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/Botiquines.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/Botiquines.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************/
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
      url: "seguridad/inspeccionbotiquin/",
      ver_modal_inspeccion: 0,
      tituloModal: '',
      columns_botiquines: ["id", "material", "existencia", "reposicion", "fecha_vencimiento", "observacion"],
      list_botiquines: [],
      options_botiquines: {
        headings: {
          id: 'Acción'
        },
        perPage: 10,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        filterByColumn: true,
        texts: config.texts,
        filterable: ["id", "material", "existencia", "reposicion", "fecha_vencimiento", "observacion"],
        sortable: ["id", "material", "existencia", "reposicion", "fecha_vencimiento", "observacion"]
      },
      inspeccion: {
        visible: 1,
        buen_estado: 1,
        tipo: 1,
        recomendaciones: "-"
      },
      list_empleados: [],
      tipoAccion: 0,
      isInspecciones_loading: false,
      isGuardarInspeccion_loading: false,
      columns_inspecciones: ["id", "fecha", "area", "tipo", "numero", "inspector", "responsable"],
      list_inspecciones: [],
      options_inspeccion: {
        headings: {
          id: 'Acción',
          area: "Área"
        },
        perPage: 10,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        filterByColumn: true,
        texts: config.texts
      },
      // Participantes
      participante: {},
      participantes: [],
      tipoCard: 1,
      isBotiquines_loading: false,
      isGuardarBotiquin_loading: false,
      botiquin_modal: {},
      tipoAccion_botiquin: 1,
      tituloModal_Botiquin: "",
      area: "",
      ver_modal_botiquin: false
    };
  },
  computed: {},
  methods: {
    /**
     * Obtener todas las inspeccion
     */
    ObtenerInspecciones: function ObtenerInspecciones() {
      var _this = this;
      this.isInspecciones_loading = true;
      axios.get(this.url + "obtener").then(function (res) {
        if (res.data.status) {
          _this.isInspecciones_loading = false;
          _this.list_inspecciones = res.data.inspecciones;
        } else toastr.error(res.data.status);
      });
    },
    AbrirModalInspeccion: function AbrirModalInspeccion() {
      var nuevo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var inspeccion = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.ver_modal_inspeccion = true;
      if (nuevo) {
        this.tipoAccion = 1;
        this.tituloModal = "Registar Inspección";
      } else {
        this.tipoAccion = 2;
        this.tituloModal = "Actualizar Inspección";
        this.inspeccion = _objectSpread({}, inspeccion);
        this.inspeccion.inspector = {
          id: inspeccion.inspector_id,
          nombre: inspeccion.inspector
        };
        this.inspeccion.responsable = {
          id: inspeccion.responsable_id,
          nombre: inspeccion.responsable
        };
      }
    },
    /**
     * Obtener todos los empleados
     */
    ObtenerEmpleados: function ObtenerEmpleados() {
      var _this2 = this;
      axios.get("generales/empleadoactivos").then(function (res) {
        if (res.data.status) {
          _this2.list_empleados = res.data.empleados;
        } else toastr.error(res.data.mensaje);
      });
    },
    /**
     * Registrar inspeccion
     */
    GuardarInspeccion: function GuardarInspeccion() {
      var _this3 = this;
      var nuevo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.$validator.validate().then(function (isValid) {
        if (!isValid) return;
        _this3.isGuardarInspeccion_loading = true;
        var data = new FormData();
        if (!nuevo) data.append("id", _this3.inspeccion.id);
        data.append("area", _this3.inspeccion.area);
        data.append("numero", _this3.inspeccion.numero);
        data.append("fecha", _this3.inspeccion.fecha);
        data.append("inspector_id", _this3.inspeccion.inspector.id);
        data.append("responsable_id", _this3.inspeccion.responsable.id);
        data.append("tipo", _this3.inspeccion.tipo);
        data.append("visible", _this3.inspeccion.visible);
        data.append("buen_estado", _this3.inspeccion.buen_estado);
        data.append("recomendaciones", _this3.inspeccion.recomendaciones);
        axios.post(_this3.url + "guardar", data).then(function (res) {
          _this3.isGuardarInspeccion_loading = false;
          if (res.data.status) {
            toastr.success("Inspección guardada correctamente");
            _this3.CerrarModalInspeccion();
            _this3.ObtenerInspecciones();
          } else {
            toastr.error(res.data.mensaje);
          }
        });
      });
    },
    CerrarModalInspeccion: function CerrarModalInspeccion() {
      this.ver_modal_inspeccion = 0;
      this.inspeccion = {
        responsable: {},
        inspector: {},
        visible: 1,
        buen_estado: 1,
        tipo: 1,
        recomendaciones: "-"
      };
    },
    VerBotiquines: function VerBotiquines(inspeccion) {
      this.tipoCard = 2;
      this.inspeccion_id = inspeccion.id;
      this.isBotiquines_loading = true;
      this.area = inspeccion.area;
      this.ObtenerBotiquines(inspeccion.id);
    },
    // Obtener los botiquines de la inspección actual
    ObtenerBotiquines: function ObtenerBotiquines() {
      var _this4 = this;
      this.isBotiquines_loading = true;
      axios.get(this.url + "botiquines/obtener/" + this.inspeccion_id).then(function (res) {
        _this4.isBotiquines_loading = false;
        if (res.data.status) {
          _this4.list_botiquines = res.data.botiquines;
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    /**
     * Guardar los botiquines
     */
    GuardarBotiquin: function GuardarBotiquin(nuevo) {
      var _this5 = this;
      this.$validator.validate().then(function (isValid) {
        if (!isValid) return;
        _this5.isGuardarBotiquin_loading = true;
        var data = new FormData();
        if (!nuevo) data.append("id", _this5.botiquin_modal.id);
        data.append("sib_id", _this5.inspeccion_id);
        data.append("apoyo", _this5.botiquin_modal.apoyo ? 1 : 0);
        data.append("fecha_vencimiento", _this5.botiquin_modal.fecha_vencimiento);
        data.append("existencia", _this5.botiquin_modal.existencia);
        data.append("reposicion", _this5.botiquin_modal.reposicion);
        data.append("material", _this5.botiquin_modal.material);
        data.append("observacion", _this5.botiquin_modal.observacion);
        axios.post(_this5.url + "botiquines/guardar", data).then(function (res) {
          _this5.isGuardarBotiquin_loading = false;
          if (res.data.status) {
            toastr.success("Guardado correctamente");
            _this5.CerrarModalBotiquin();
            _this5.ObtenerBotiquines();
          } else toastr.error(res.data.mensaje);
        });
      });
    },
    /**
     * Abrirl modal para registro de botiquin
     */
    AbrirModalBotiquin: function AbrirModalBotiquin(nuevo) {
      var botiquin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.LimpiarBotiquin();
      this.ver_modal_botiquin = true;
      if (nuevo) {
        this.tituloModal_Botiquin = "Registrar botiquín";
        this.tipoAccion_botiquin = 1;
      } else {
        this.tituloModal_Botiquin = "Actualizar botiquín";
        this.botiquin_modal = _objectSpread({}, botiquin);
        this.tipoAccion_botiquin = 2;
      }
    },
    /**
     * 
     */
    LimpiarBotiquin: function LimpiarBotiquin() {
      this.botiquin_modal = {
        apoyo: false,
        existencia: 0,
        reposicion: 0,
        material: "",
        observacion: "-"
      };
    },
    /**
     * Cerrar modal botiquin
     */
    CerrarModalBotiquin: function CerrarModalBotiquin() {
      this.ver_modal_botiquin = false;
    },
    Descargar: function Descargar(p_id) {
      window.open(this.url + 'descargar/' + p_id, '_blank');
    }
  },
  mounted: function mounted() {
    this.ObtenerInspecciones();
    this.ObtenerEmpleados();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/CatalogoAnalisis.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/CatalogoAnalisis.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Herramientas/utilerias.js */ "./resources/assets/js/components/Herramientas/utilerias.js");
/* CAMBIAR UBICACIÓN  */

var config = (__webpack_require__(/*! ../Herramientas/config-vuetables-client */ "./resources/assets/js/components/Herramientas/config-vuetables-client.js").call)(undefined);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      // Tabla
      tipo: 1,
      ver_modal_analisis: 0,
      ver_modal_residuos: 0,
      columns_analisis: ['id', 'secuencia', 'riesgo', 'recomendacion'],
      columns_residuos: ['residuo.id', 'residuo.residuo', 'fuente'],
      list_analisis: [],
      list_residuos: [],
      options_analisis: {
        headings: {
          id: 'Acciones',
          secuencia: 'Secuencia',
          riesgo: 'Riesgo',
          recomendacion: 'Recomendación'
        },
        // Headings,
        perPage: 10,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        sortable: ['id', 'secuencia', 'riesgo', 'recomendacion'],
        filterable: ['id', 'secuencia', 'riesgo', 'recomendacion'],
        filterByColumn: true,
        texts: config.texts
      },
      //options
      options_residuos: {
        headings: {
          'residuo.id': 'Acciones',
          'residuo.residuo': 'Residuo'
        },
        // Headings,
        perPage: 10,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        // sortable: ['id','secuencia','riesgo','recomendacion'],
        // filterable: ['id','secuencia','riesgo','recomendacion'],
        filterByColumn: true,
        texts: config.texts
      },
      //options
      // Modal
      titulo_modal_analisis: '',
      tipoAccion_modal_analisis: 0,
      analisis_modal: {},
      titulo_modal_residuos: '',
      tipoAccion_modal_residuos: 0,
      residuos_modal: {
        residuo: '',
        fuente: '',
        tipo: '',
        id: 0
      }
    }; // return
  },
  //data
  computed: {},
  methods: {
    getData: function getData() {
      var _this = this;
      axios.get('get/lista/catalogo/analisis').then(function (response) {
        _this.list_analisis = response.data;
      })["catch"](function (e) {
        console.error(e);
      });
      axios.get('get/lista/catalogo/residuos').then(function (response) {
        _this.list_residuos = response.data;
      })["catch"](function (e) {
        console.error(e);
      });
    },
    AbrirModalAnalisis: function AbrirModalAnalisis(nuevo) {
      var model = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      this.ver_modal_analisis = true;
      if (nuevo) {
        // Crear nuevo
        this.titulo_modal_analisis = 'Registrar Analisis';
        this.tipoAccion_modal_analisis = 1;
      } else {
        // Actualizar
        this.titulo_modal_analisis = 'Actualizar Analisis';
        this.tipoAccion_modal_analisis = 2;
        this.analisis_modal.recomendacion = model.recomendacion;
        this.analisis_modal.riesgo = model.riesgo;
        this.analisis_modal.secuencia = model.secuencia;
        this.analisis_modal.id = model.id;
      } // Fin if
    },
    AbrirModalResiduos: function AbrirModalResiduos(nuevo) {
      var model = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      this.ver_modal_residuos = true;
      if (nuevo) {
        this.titulo_modal_residuos = 'Registrar';
        this.tipoAccion_modal_residuos = 1;
      } else {
        var array = [];
        model.fuente.forEach(function (item, i) {
          array.push(item.fuente_generacion);
        });
        console.log(array);
        this.titulo_modal_residuos = 'Actualizar';
        this.tipoAccion_modal_residuos = 2;
        this.residuos_modal.residuo = model.residuo.residuo;
        this.residuos_modal.id = model.residuo.id;
        this.residuos_modal.tipo = model.residuo.tipo;
        this.residuos_modal.fuente = array;
      }
    },
    CerrarModalAnalisis: function CerrarModalAnalisis() {
      this.ver_modal_analisis = false;
      _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.analisis_modal);
    },
    CerrarModalResiduos: function CerrarModalResiduos() {
      this.ver_modal_residuos = false;
      _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.residuos_modal);
    },
    GuardarAnalisis: function GuardarAnalisis(nuevo) {
      var _this2 = this;
      axios({
        method: nuevo ? 'POST' : 'PUT',
        url: nuevo ? 'guardar/lista/catalogo/analisis' : 'actualizar/lista/catalogo/analisis',
        data: {
          id: nuevo ? 0 : this.analisis_modal.id,
          secuencia: this.analisis_modal.secuencia,
          riesgo: this.analisis_modal.riesgo,
          recomendacion: this.analisis_modal.recomendacion
        }
      }).then(function (response) {
        _this2.getData();
        toastr.success('Correcto!!!');
        _this2.CerrarModalAnalisis();
      })["catch"](function (e) {
        console.error(e);
      });
    },
    GuardarResiduos: function GuardarResiduos(nuevo) {
      var _this3 = this;
      axios({
        method: nuevo ? 'POST' : 'PUT',
        url: nuevo ? 'guardar/lista/catalogo/residuos' : 'actualizar/lista/catalogo/residuos',
        data: {
          id: nuevo ? 0 : this.residuos_modal.id,
          residuo: this.residuos_modal.residuo,
          tipo: this.residuos_modal.tipo,
          fuente: this.residuos_modal.fuente
        }
      }).then(function (response) {
        _this3.getData();
        toastr.success('Correcto!!!');
        _this3.CerrarModalResiduos();
      })["catch"](function (e) {
        console.error(e);
      });
    },
    /**
     * Eliminar la secuencia seleccionada
     */
    Eliminar: function Eliminar(id) {
      var _this4 = this;
      Swal.fire({
        title: "Eliminar la secuencia seleccionada",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Eliminar',
        cancellButtonText: 'Cancelar'
      }).then(function (result) {
        if (result.value == null) return;
        if (result.value) {
          axios.post("eliminar/lista/catalogo/analisis", {
            id: id
          }).then(function (res) {
            if (res.data.status) {
              toastr.success("Eliminado correctamente");
              _this4.getData();
            } else {
              toastr.error(res.data.mensaje);
            }
          });
        }
      });
    }
  },
  // Fin metodos
  mounted: function mounted() {
    this.getData();
    //this.CargarProyectos();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/CatalogoAnalisis2.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/CatalogoAnalisis2.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Herramientas/utilerias.js */ "./resources/assets/js/components/Herramientas/utilerias.js");
/* CAMBIAR UBICACIÓN  */

var config = (__webpack_require__(/*! ../Herramientas/config-vuetables-client */ "./resources/assets/js/components/Herramientas/config-vuetables-client.js").call)(undefined);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      // Tabla
      url: "/seguridad/catalogos",
      tipo: 0,
      ver_modal_analisis: 0,
      ver_modal_residuos: 0,
      columns_analisis: ['id', 'secuencia', 'riesgo', 'recomendacion'],
      columns_residuos: ['residuo.id', 'residuo.residuo', 'fuente'],
      list_analisis: [],
      list_residuos: [],
      options_analisis: {
        headings: {
          id: 'Acciones',
          secuencia: 'Secuencia',
          riesgo: 'Riesgo',
          recomendacion: 'Recomendación'
        },
        // Headings,
        perPage: 10,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        sortable: ['id', 'secuencia', 'riesgo', 'recomendacion'],
        filterable: ['id', 'secuencia', 'riesgo', 'recomendacion'],
        filterByColumn: true,
        texts: config.texts
      },
      //options
      options_residuos: {
        headings: {
          'residuo.id': 'Acciones',
          'residuo.residuo': 'Residuo'
        },
        // Headings,
        perPage: 10,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        // sortable: ['id','secuencia','riesgo','recomendacion'],
        // filterable: ['id','secuencia','riesgo','recomendacion'],
        filterByColumn: true,
        texts: config.texts
      },
      //options
      // Modal
      titulo_modal_analisis: '',
      tipoAccion_modal_analisis: 0,
      analisis_modal: {},
      titulo_modal_residuos: '',
      tipoAccion_modal_residuos: 0,
      residuos_modal: {
        residuo: '',
        fuente: '',
        tipo: '',
        id: 0
      },
      nuevo_analisis: false,
      id_analisis: 0,
      listRecomendaciones: [],
      listSecuencias: [],
      listRiesgos: []
    }; // return
  },
  //data
  computed: {},
  methods: {
    /**
     * Obtener los analisis de seguridad
     */
    CargarAnalisis: function CargarAnalisis() {
      var _this = this;
      axios.get(this.url + "/analisis/obtener").then(function (res) {
        if (res.data.status) {
          _this.list_analisis = res.data.analisis;
        } else {
          toastr.error(res.data.mensaje);
        }
      })["catch"](function (e) {
        console.error(e);
      });
    },
    /**
     * Obtiene los residuos
     */
    CargarResiduos: function CargarResiduos() {
      var _this2 = this;
      axios.get('get/lista/catalogo/residuos').then(function (response) {
        _this2.list_residuos = response.data;
      })["catch"](function (e) {
        console.error(e);
      });
    },
    /**
     * Secuencia input
     */
    SecuenciaInput: function SecuenciaInput() {
      var secuencia = this.analisis_modal.secuencia;
      if (secuencia == null) return;
      if (secuencia.id == null) return;
      if (secuencia.id == -99) {
        // Registrar nuevo
        this.RegistrarTipo(1); // Secuencia
      } else {
        this.CargarRiesgos();
      }
    },
    /**
     * Riesgo input
     */
    RiesgoInput: function RiesgoInput() {
      var riesgo = this.analisis_modal.riesgo;
      if (riesgo == null) return;
      if (riesgo.id == null) return;
      if (riesgo.id == -99) {
        // Registrar nuevo
        this.RegistrarTipo(2, this.analisis_modal.secuencia.id); // Riesgo
      } else {
        this.CargarRecomendaciones();
      }
    },
    /**
     * Recomendacion input
     */
    RecomendacionInput: function RecomendacionInput() {
      var recomendacion = this.analisis_modal.recomendacion;
      if (recomendacion == null) return;
      if (recomendacion.id == null) return;
      if (recomendacion.id == -99) {
        // Registrar nuevo
        this.RegistrarTipo(3, this.analisis_modal.riesgo.id); // Recomendacion
      } else {
        this.CargarRecomendaciones();
      }
    },
    /**
     * Obtener las secuencias de seguridad
     */
    CargarSecuencias: function CargarSecuencias() {
      var _this3 = this;
      axios.get(this.url + "/secuencia/cargar").then(function (res) {
        if (res.data.status) {
          _this3.listSecuencias = res.data.secuencias;
          // this.listSecuencias.push(
          // {
          //     id: -99,
          //     nombre: "Nueva secuencia"
          // });
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    /**
     * Obtener las riesgos de la secuencia ingresada
     */
    CargarRiesgos: function CargarRiesgos() {
      var _this4 = this;
      axios.get(this.url + "/riesgo/cargar/").then(function (res) {
        if (res.data.status) {
          _this4.listRiesgos = res.data.riesgos;
          // this.listRiesgos.push(
          // {
          //     id: -99,
          //     nombre: "Nuevo riesgo"
          // });
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    /**
     * Obtener las recomendaciones del riesgo selecionado
     */
    CargarRecomendaciones: function CargarRecomendaciones() {
      var _this5 = this;
      axios.get(this.url + "/recomendacion/cargar/").then(function (res) {
        if (res.data.status) {
          _this5.listRecomendaciones = res.data.recomendaciones;
          // this.listRecomendaciones.push(
          // {
          //     id: -99,
          //     nombre: "Nueva recomendación"
          // });
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    /**
     * Registra un nuevo tipo (secuencia,riesgo,recomenación)
     */
    RegistrarTipo: function RegistrarTipo(tipo, idTipo) {
      var _this6 = this;
      var nombre = tipo == 1 ? "Secuencia" : tipo == 2 ? "Riesgo" : "Recomendación";
      var aux_url = tipo == 1 ? "secuencia" : tipo == 2 ? "riesgo" : "recomendacion";
      var aux_id = tipo == 2 ? "secuencia" : "riesgo";
      Swal.fire({
        title: nombre,
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Registrar'
      }).then(function (res) {
        if (res.value == null) return;
        if (res.value.length == 0) return;
        var data = new FormData();
        data.append("nombre", res.value);
        data.append(aux_id + "_id", idTipo);
        axios.post(_this6.url + "/registrar" + aux_url, data).then(function (res) {
          if (res.data.status) {
            if (tipo == 1) _this6.CargarSecuencias();else if (tipo == 2) _this6.CargarRiesgos();else _this6.CargarRecomendaciones();
          } else {
            toastr.error(res.data.mensaje);
          }
        });
      });
    },
    AbrirModalAnalisis: function AbrirModalAnalisis(nuevo) {
      var model = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      // Cargar todas las Secuencias
      this.CargarSecuencias();
      this.ver_modal_analisis = true;
      this.nuevo_analisis = nuevo;
      if (nuevo) {
        // Crear nuevo
        this.titulo_modal_analisis = 'Registrar Análisis';
        this.tipoAccion_modal_analisis = 1;
      } else {
        this.id_analisis = model.id;
        // Actualizar
        this.titulo_modal_analisis = 'Actualizar Análisis';
        this.tipoAccion_modal_analisis = 2;
        this.analisis_modal.secuencia = {
          id: model.secuencia_id,
          nombre: model.secuencia
        };
        this.analisis_modal.riesgo = {
          id: model.riesgo_id,
          nombre: model.riesgo
        };
        this.analisis_modal.recomendacion = {
          id: model.recomendacion_id,
          nombre: model.recomendacion
        };
        this.analisis_modal.id = model.id;
      } // Fin if
    },
    AbrirModalResiduos: function AbrirModalResiduos(nuevo) {
      var model = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      this.ver_modal_residuos = true;
      if (nuevo) {
        this.titulo_modal_residuos = 'Registrar';
        this.tipoAccion_modal_residuos = 1;
      } else {
        var array = [];
        model.fuente.forEach(function (item, i) {
          array.push(item.fuente_generacion);
        });
        this.titulo_modal_residuos = 'Actualizar';
        this.tipoAccion_modal_residuos = 2;
        this.residuos_modal.residuo = model.residuo.residuo;
        this.residuos_modal.id = model.residuo.id;
        this.residuos_modal.tipo = model.residuo.tipo;
        this.residuos_modal.fuente = array;
      }
    },
    CerrarModalAnalisis: function CerrarModalAnalisis() {
      this.ver_modal_analisis = false;
      _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.analisis_modal);
    },
    CerrarModalResiduos: function CerrarModalResiduos() {
      this.ver_modal_residuos = false;
      _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.residuos_modal);
    },
    GuardarAnalisis: function GuardarAnalisis(nuevo) {
      var _this7 = this;
      if (!this.ValidarModal()) {
        toastr.warning("Seleccione todos los campos");
        return;
      }
      var data = new FormData();
      if (!this.nuevo_analisis) data.append("id", this.id_analisis);
      data.append("riesgo_id", this.analisis_modal.riesgo.id);
      data.append("recomendacion_id", this.analisis_modal.recomendacion.id);
      data.append("secuencia_id", this.analisis_modal.secuencia.id);
      axios.post(this.url + "/analisis/guardar", data).then(function (res) {
        if (res.data.status) {
          toastr.success("Analisis registrado");
          _this7.CerrarModalAnalisis();
          _this7.CargarAnalisis();
        }
      });
    },
    ValidarModal: function ValidarModal() {
      if (this.analisis_modal.secuencia == null) return false;
      if (this.analisis_modal.secuencia.id == null) return false;
      if (this.analisis_modal.riesgo.id == null) return false;
      if (this.analisis_modal.recomendacion.id == null) return false;
      return true;
    },
    GuardarResiduos: function GuardarResiduos(nuevo) {
      var _this8 = this;
      axios({
        method: nuevo ? 'POST' : 'PUT',
        url: nuevo ? 'guardar/lista/catalogo/residuos' : 'actualizar/lista/catalogo/residuos',
        data: {
          id: nuevo ? 0 : this.residuos_modal.id,
          residuo: this.residuos_modal.residuo,
          tipo: this.residuos_modal.tipo,
          fuente: this.residuos_modal.fuente
        }
      }).then(function (response) {
        _this8.CargarResiduos();
        toastr.success('Correcto!!!');
        _this8.CerrarModalResiduos();
      })["catch"](function (e) {
        console.error(e);
      });
    }
  },
  // Fin metodos
  mounted: function mounted() {
    this.CargarAnalisis();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/Catalogos/Folios.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/Catalogos/Folios.vue?vue&type=script&lang=js ***!
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
      //// Folios_Permisos
      url_folios_permisos: "seguridad/folios_permisos",
      tipoAccion_folios_permisos: 1,
      tipoCardFolios_Permisos: 1,
      PermisosCRUD: {},
      ver_modal_folios_permisos: false,
      tituloModal_folios_permisos: "",
      folios_permisos_id: 0,
      isGuardarfolios_permisos_loading: false,
      isObtenerfolios_permisos_loading: false,
      columns_folios_permisos: ["proyecto", "nombre"],
      list_proyectos: [],
      list_folios_permisos: [],
      folios_permisos: {},
      options_folios_permisos: {
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
    ObtenerFolios_Permisos: function ObtenerFolios_Permisos() {
      var _this = this;
      this.isObtenerfolios_permisos_loading = true;
      axios.get(this.url_folios_permisos + "/obtener").then(function (res) {
        _this.isObtenerfolios_permisos_loading = false;
        if (res.data.status) {
          _this.list_folios_permisos = res.data.folios_proyectos;
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    /**
     * Obtener todos los proyectos
     */
    ObtenerProyectos: function ObtenerProyectos() {
      var _this2 = this;
      axios.get("generales/proyectos/1").then(function (res) {
        console.error(res.data.proyectos);
        if (res.data.status) {
          _this2.list_proyectos = res.data.proyectos;
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    /**
     * Abrir modal Folios_Permisos
     */
    AbrirModalFolios_Permisos: function AbrirModalFolios_Permisos(nuevo) {
      this.ver_modal_folios_permisos = true;
      if (nuevo) {
        this.tituloModal_folios_permisos = "Registrar Folio de Proyectos";
        this.tipoAccion_folios_permisos = 1;
      }
    },
    /**
     * Registrar Folios_Permisos
     */
    RegistrarFolios_Permisos: function RegistrarFolios_Permisos(nuevo) {
      var _this3 = this;
      this.$validator.validate().then(function (isValid) {
        if (!isValid) return;
        var data = new FormData();
        if (!nuevo) data.append("id", _this3.folios_permisos.id);
        data.append("proyecto_id", _this3.folios_permisos.proyecto.id);
        data.append("nombre", _this3.folios_permisos.nombre);
        _this3.isGuardarfolios_permisos_loading = true;
        axios.post(_this3.url_folios_permisos + "/guardar", data).then(function (res) {
          _this3.isGuardarfolios_permisos_loading = false;
          if (res.data.status) {
            toastr.success("Guardado correctamente");
            _this3.ObtenerFolios_Permisos();
            _this3.CerrarModalFolios_Permisos();
          } else {
            toastr.error(res.data.mensaje);
          }
        });
      });
    },
    /**
     * Cerrar modal
     */
    CerrarModalFolios_Permisos: function CerrarModalFolios_Permisos() {
      this.ver_modal_folios_permisos = false;
      this.Folios_Permisos = {};
    }
  },
  mounted: function mounted() {
    this.ObtenerFolios_Permisos();
    this.ObtenerProyectos();
    this.PermisosCRUD = _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].getCRUD(this.$route.path);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/InspeccionEpp.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/InspeccionEpp.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************/
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
    return _defineProperty(_defineProperty(_defineProperty(_defineProperty({
      url: "seguridad/inspeccionepp/",
      ver_modal_inspecciones: 0,
      tituloModal: '',
      Inspeccion: {},
      list_empleados: [],
      tipoAccion: 0,
      isInspeccion_loading: false,
      isGuardarpl_loading: false,
      columns_inspecciones: ["id", "fecha", "realiza", "revisa", "observaciones"],
      list_inspecciones: [],
      options_inspecciones: {
        headings: _defineProperty({
          id: 'Acción',
          nombre: 'Nombre'
        }, "nombre", "Responsable"),
        perPage: 10,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        filterByColumn: true,
        texts: config.texts
      },
      // Participantes
      participante: {},
      ver_modal_trabajador: false,
      list_participantes: [],
      participantes: [],
      trabajador: {},
      tituloModal_trabajador: "",
      tipoAccion_trabajador: 1,
      tipoCard: 1,
      isParticipantes_loading: false,
      isGuardarparticip_loading: false,
      columns_participantes: ["id", "empleado", "puesto"]
    }, "list_participantes", []), "opciones", [{
      clave: "OK",
      nombre: "BUENAS CONDICIONES"
    }, {
      clave: "X",
      nombre: "MALAS CONDICIONES"
    }, {
      clave: "CD",
      nombre: "CAMBIO POR DESGASTE"
    }, {
      clave: "N/A",
      nombre: "NO APLICA"
    }]), "trabajador_id", 0), "options_participantes", {
      headings: {
        id: 'Acción'
      },
      pperPage: 10,
      perPageValues: [],
      skin: config.skin,
      filterable: ["id", "empleado", "puesto"],
      sortable: ["id", "empleado", "puesto"],
      sortIcon: config.sortIcon,
      filterByColumn: true,
      texts: config.texts
    });
  },
  computed: {},
  methods: {
    /**
     * Obtener todas las inspecciones
     */
    ObtenerInspeccion: function ObtenerInspeccion() {
      var _this = this;
      this.isInspeccion_loading = true;
      axios.get(this.url + "obtener").then(function (res) {
        if (res.data.status) {
          _this.isInspeccion_loading = false;
          _this.list_inspecciones = res.data.inspecciones;
        } else toastr.error(res.data.status);
      });
    },
    AbrirModalInspeccion: function AbrirModalInspeccion() {
      var nuevo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var inspeccion = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.ver_modal_inspecciones = true;
      if (nuevo) {
        this.tipoAccion = 1;
        this.tituloModal = "Registar Inspección";
      } else {
        this.tipoAccion = 2;
        this.tituloModal = "Actualizar Inspección";
        this.Inspeccion = _objectSpread({}, inspeccion);
        this.Inspeccion = {
          id: inspeccion.id,
          fecha: inspeccion.fecha,
          ubicacion: inspeccion.ubicacion,
          observaciones: inspeccion.observaciones,
          revisa: {
            id: inspeccion.empleado_revisa_id,
            nombre: inspeccion.revisa
          },
          realiza: {
            id: inspeccion.empleado_realiza_id,
            nombre: inspeccion.realiza
          }
        };
      }
    },
    /**
     * Obtener todos los empleados
     */
    ObtenerEmpleados: function ObtenerEmpleados() {
      var _this2 = this;
      axios.get("generales/empleadoactivos").then(function (res) {
        if (res.data.status) {
          _this2.list_empleados = res.data.empleados;
        } else toastr.error(res.data.mensaje);
      });
    },
    /**
     * Registrar plática
     */
    GuardarInspeccion: function GuardarInspeccion() {
      var _this3 = this;
      var nuevo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.$validator.validate().then(function (isValid) {
        if (!isValid) return;
        _this3.isGuardarpl_loading = true;
        var data = new FormData();
        if (!nuevo) data.append("id", _this3.Inspeccion.id);
        data.append("fecha", _this3.Inspeccion.fecha);
        data.append("ubicacion", _this3.Inspeccion.ubicacion);
        data.append("observaciones", _this3.Inspeccion.observaciones);
        data.append("empleado_realiza_id", _this3.Inspeccion.realiza.id);
        data.append("empleado_revisa_id", _this3.Inspeccion.revisa.id);
        axios.post(_this3.url + "guardar", data).then(function (res) {
          _this3.isGuardarpl_loading = false;
          if (res.data.status) {
            toastr.success("Plática guardada correctamente");
            _this3.CerrarModalInspeccion();
            _this3.ObtenerInspeccion();
          } else {
            toastr.error(res.data.mensaje);
          }
        });
      });
    },
    CerrarModalInspeccion: function CerrarModalInspeccion() {
      this.ver_modal_inspecciones = 0;
      this.Inspeccion = {
        revisa: {},
        realiza: {}
      };
    },
    VerParticipantes: function VerParticipantes(Inspeccion) {
      this.tipoCard = 2;
      this.Inspeccion_id = Inspeccion.id;
      this.isParticipantes_loading = true;
      this.ObtenerParticipantes(Inspeccion.id);
    },
    // Obtener los participante de la Inspeccion selecionada
    ObtenerParticipantes: function ObtenerParticipantes() {
      var _this4 = this;
      this.isParticipantes_loading = true;
      axios.get(this.url + "participantes/obtener/" + this.Inspeccion_id).then(function (res) {
        _this4.isParticipantes_loading = false;
        if (res.data.status) {
          _this4.list_participantes = res.data.participantes;
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    /**
     * Guardar los participantes en la Inspeccion seleccinoada
     */
    GuardarTrabajador: function GuardarTrabajador(nuevo) {
      var _this5 = this;
      this.$validator.validate().then(function (isValid) {
        if (!isValid) return;
        _this5.isGuardarparticip_loading = true;
        var data = new FormData();
        if (!nuevo) data.append("id", _this5.trabajador_id);
        data.append("sip_id", _this5.Inspeccion_id);
        data.append("inspeccion_id", _this5.Inspeccion_id);
        data.append("empleado_id", _this5.trabajador.empleado.id);
        data.append("epp_overol", _this5.trabajador.epp_overol);
        data.append("epp_calzado", _this5.trabajador.epp_calzado);
        data.append("epp_casco", _this5.trabajador.epp_casco);
        data.append("epp_guantes", _this5.trabajador.epp_guantes);
        data.append("epp_ocular", _this5.trabajador.epp_ocular);
        data.append("epp_respiratoria", _this5.trabajador.epp_respiratoria);
        data.append("epp_auditiva", _this5.trabajador.epp_auditiva);
        data.append("epp_barbiquejo", _this5.trabajador.epp_barbiquejo);
        data.append("epa_respiratoria", _this5.trabajador.epa_respiratoria);
        data.append("epa_arnes", _this5.trabajador.epa_arnes);
        data.append("epa_careta", _this5.trabajador.epa_careta);
        data.append("epa_mangas", _this5.trabajador.epa_mangas);
        data.append("epa_mascarilla", _this5.trabajador.epa_mascarilla);
        axios.post(_this5.url + "participantes/guardar", data).then(function (res) {
          _this5.isGuardarparticip_loading = false;
          if (res.data.status) {
            _this5.participantes = [];
            toastr.success("Guardado correctamente");
            _this5.ObtenerParticipantes();
            _this5.CerrarModalTrabajador();
          } else toastr.error(res.data.mensaje);
        });
      });
    },
    /**
     * Registra un nuevo empleado en la inspección
     */
    AbrirModalTrabajador: function AbrirModalTrabajador(nuevo, data) {
      this.ver_modal_trabajador = true;
      if (nuevo) {
        this.LimpiarTrabajador();
        this.tituloModal_trabajador = "Registrar empleado";
        this.tipoAccion_trabajador = 1;
      } else {
        this.tipoAccion_trabajador = 2;
        this.tituloModal_trabajador = "Actualizar empleado";
        this.tipoAccion_trabajador = 2;
        this.trabajador_id = data.id;
        this.trabajador = _objectSpread(_objectSpread({}, data), {}, {
          empleado: {
            id: data.empleado_id,
            nombre: data.empleado
          }
        });
      }
    },
    CerrarModalTrabajador: function CerrarModalTrabajador() {
      this.ver_modal_trabajador = false;
    },
    LimpiarTrabajador: function LimpiarTrabajador() {
      this.trabajador = {
        epp_overol: "OK",
        epp_calzado: "OK",
        epp_casco: "OK",
        epp_guantes: "OK",
        epp_ocular: "OK",
        epp_respiratoria: "OK",
        epp_auditiva: "OK",
        epp_barbiquejo: "OK",
        epa_respiratoria: "OK",
        epa_arnes: "OK",
        epa_careta: "OK",
        epa_mangas: "OK",
        epa_mascarilla: "OK"
      };
    },
    /**
     * Formato
     */
    Descargar: function Descargar(p_id) {
      window.open(this.url + 'descargar/' + p_id, '_blank');
    }
  },
  mounted: function mounted() {
    this.ObtenerInspeccion();
    this.CerrarModalInspeccion();
    this.ObtenerEmpleados();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/ListaAsistencia.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/ListaAsistencia.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      date: '',
      reporte_estado: '',
      tipo: '',
      nave: ''
    };
  },
  methods: {
    generate: function generate() {
      var _this = this;
      this.$validator.validate().then(function (result) {
        if (result) {
          if (_this.tipo == 1) {
            window.open('lista/asistencia/seguridad/' + _this.date + '&' + _this.reporte_estado + '&' + _this.tipo, '_blank');
          } else if (_this.tipo == 2) {
            window.open('lista/asistencia/seguridad/' + _this.date + '&' + _this.nave + '&' + _this.tipo, '_blank');
          }
          _this.reporte_estado = '';
          _this.tipo = '';
        } else {
          toastr.success('Complete todos los campos');
        }
      });
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/NuevoAnalisisSeguridad.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/NuevoAnalisisSeguridad.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
      tituloModal: '',
      modal: 0,
      modal_participantes: 0,
      tipoAccion: 0,
      isLoading: false,
      ///
      id: 0,
      ubicacion: '',
      permiso: '',
      descripcion: '',
      operaciones: [],
      shso: '',
      empleado: '',
      fecha: '',
      //
      listaCatalogo: [],
      catalogo: '',
      isPartcipantesLoading: false,
      analisis: {},
      list_empleados: [],
      listado_data: [],
      listado_id: [],
      listado_supervisor: [],
      vs_options: [],
      supervisor: '',
      ///
      isLoadingPartidas: false,
      tableData: [],
      columns: ['id', 'fecha', 'no_permiso', 'ubicacion', 'descripcion', 'descargar'],
      options: {
        headings: {
          id: 'Acciones'
        },
        perPage: 10,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        filterByColumn: true,
        texts: config.texts
      },
      recomendacion: {},
      isLoadingRiesgos: false,
      listRecomendaciones: [],
      tableDataParticipantes: [],
      columnsParticipantes: ['empleado_id', 'empleado'],
      optionsParticipantes: {
        headings: {
          'empleado_id': 'ACCIONES'
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
     * Obtiene los ananlisis de seguridad registrados
     */
    getDataInicial: function getDataInicial() {
      var _this = this;
      axios.get('/seguridad/nuevoanalisis/obtener').then(function (res) {
        if (res.data.status) {
          _this.tableData = res.data.analisis;
        } else {
          toastr.error(res.data.mensaje);
        }
      })["catch"](function (e) {
        console.error(e);
      });
    },
    /**
     * Obtiene todos las secuencias de seguridad registrados 
     */
    ObtenerSecuencias: function ObtenerSecuencias() {
      var _this2 = this;
      this.listaCatalogo = [];
      axios.get('/seguridad/nuevoanalisis/obtenersecuencias').then(function (res) {
        if (res.data.status) {
          _this2.listaCatalogo = res.data.secuencias;
        } else {
          toastr.error(res.data.mensaje);
        }
      })["catch"](function (e) {
        console.error(e);
      });
      axios.get('vertodosempleados').then(function (response) {
        response.data.forEach(function (item, i) {
          _this2.vs_options.push({
            id: item.id,
            name: item.nombre + ' ' + item.ap_paterno + ' ' + item.ap_materno
          });
        });
      })["catch"](function (e) {
        console.error(e);
      });
    },
    /**
     * Obtiene los reisgos y recomendaciones del anlisis ingresado
     */
    ObtenerRiesgos: function ObtenerRiesgos() {
      var _this3 = this;
      if (this.analisis == null) return;
      if (this.analisis.id == null) return;
      this.isLoadingRiesgos = true;
      axios.get("/seguridad/nuevoanalisis/obtenerrecomedaciones/" + this.analisis.id).then(function (res) {
        8;
        if (res.data.status) {
          _this3.listRecomendaciones = res.data.recomendaciones;
        } else {
          toastr.error(res.data.mensaje);
        }
        _this3.isLoadingRiesgos = false;
      });
    },
    abrirModal: function abrirModal(nuevo) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      this.ObtenerSecuencias();
      if (nuevo) {
        this.modal = 1;
        this.tituloModal = 'Registrar análisis';
        this.tipoAccion = 1;
        this.id = null;
        this.listado_data = [];
        this.listado_id = [];
        this.listado_supervisor = [];
      } else {
        this.id = data['id'];
        this.ObtenerPartidas(); // Carga las partidas del analisis
        // Mostrar datos del model
        this.operaciones = {
          id: data['id_empleado_operaciones'],
          name: data['operaciones_nombre']
        };
        this.shso = {
          id: data['id_empleado_sho'],
          name: data['seguridad_nombre']
        };
        this.ubicacion = data['ubicacion'];
        this.permiso = data['no_permiso'];
        this.descripcion = data['descripcion'];
        this.fecha = data['fecha'];
        this.modal = 1;
        this.tituloModal = 'Actualizar análisis';
        this.tipoAccion = 2;
      }
    },
    /**
     * Obtener partidas del analisis actual
     */
    ObtenerPartidas: function ObtenerPartidas() {
      var _this4 = this;
      this.isLoadingPartidas = true;
      axios.get("/seguridad/nuevoanalisis/obtenerpartidas/" + this.id).then(function (res) {
        if (res.data.status) {
          var aux_listado_data = [];
          res.data.partidas.forEach(function (p) {
            aux_listado_data.push({
              id: p.id,
              analisis: {
                id: p.secuencia_id,
                nombre: p.secuencia
              },
              riesgo_recomen: {
                riesgo_id: p.riesgo_id,
                riesgo: p.riesgo,
                recomendacion: p.recomendacion,
                recomendacion_id: p.recomendacion_id
              },
              supervisor: {
                id: p.supervisor_id,
                name: p.supervisor_nombre
              }
            });
          });
          _this4.listado_data = aux_listado_data;
          // Cargar partidas actuales
        } else {
          toastr.error(res.data.mensaje);
        }
        _this4.isLoadingPartidas = false;
      });
    },
    Cerrar: function Cerrar() {
      this.modal = false; // Cerrar modal de registo de analisis
      this.listado_data = [];
      this.listado_id = [];
      this.listado_supervisor = [];
    },
    /**
     * Guarda de manera temporal el analisis seleccionado
     */
    guardarasignacion: function guardarasignacion() {
      if (this.analisis == null) return;
      if (this.recomendacion == null) return;
      if (this.supervisor == null) return;

      // Comprobar registro duplicado
      var analisis_aux = this.recomendacion;
      // if (this.listado_data.find(a => a.actividad == this.analisis.secuencia))
      if (false) // removed by dead control flow
{} else {
        this.listado_data.push({
          analisis: this.analisis,
          riesgo_recomen: this.recomendacion,
          supervisor: this.supervisor,
          temp: true
        });
      }
      this.analisis = {};
      this.recomendacion = {};
      this.supervisor = {};
    },
    /**
     * Elimina el riesgo actual de la lista de temporales
     */
    BorrarTemp: function BorrarTemp(index) {
      this.listado_data.splice(index, 1);
      this.listado_id.splice(index, 1);
      this.listado_supervisor.splice(index, 1);
    },
    /**
     * Elimina el registro actual de la db
     */
    Borrar: function Borrar(id) {
      var _this5 = this;
      axios.post("seguridad/nuevoanalisis/eliminarpartida/", {
        id: id
      }).then(function (res) {
        if (res.data.status) {
          toastr.success("Eliminado correctamente");
          _this5.ObtenerPartidas();
        }
      });
    },
    /**
     * Registra los analisis-riesgo-recomendacion seleccionados
     */
    Guardar: function Guardar(nuevo) {
      var _this6 = this;
      this.$validator.validate().then(function (result) {
        // if (!result) return;
        var data = new FormData();
        if (!nuevo) data.append("id", _this6.id);
        // Obter riesgos temporales
        data.append("ubicacion", _this6.ubicacion);
        data.append("no_permiso", _this6.permiso);
        data.append("descripcion", _this6.descripcion);
        data.append("id_empleado_operaciones", _this6.operaciones.id);
        data.append("id_empleado_sho", _this6.shso.id);
        data.append("fecha", _this6.fecha);
        var temporales = _this6.listado_data.filter(function (a) {
          return a.temp;
        });
        var list_temporales = "";
        temporales.forEach(function (t) {
          list_temporales += t.analisis.id + "|" + t.riesgo_recomen.riesgo_id + "|" + t.riesgo_recomen.recomendacion_id + "|" + t.supervisor.id + "&";
        });
        data.append("ids", list_temporales);
        axios.post('seguridad/nuevoanalisis/guardar', data).then(function (res) {
          if (res.data.status) {
            _this6.getDataInicial();
            _this6.Vaciar();
            toastr.success("Registrado correctamente");
          } else {
            toastr.error(res.data.mensaje);
          }
        })["catch"](function (e) {
          console.error(e);
        });
      });
    },
    /**
     * Cerrar modal  y limpiar datos del analisis
     */
    Vaciar: function Vaciar() {
      this.id = null;
      this.ubicacion = '';
      this.permiso = '';
      this.descripcion = '';
      this.operaciones = '';
      this.shso = '';
      this.listado_data = [];
      this.listado_id = [];
      this.modal = 0;
      this.fecha = '';
    },
    VaciarDos: function VaciarDos() {
      this.id = 0;
      this.ubicacion = '';
      this.permiso = '';
      this.descripcion = '';
      this.operaciones = '';
      this.shso = '';
      this.fecha = '';
      this.listado_data = [];
      this.listado_id = [];
      this.listaCatalogo = [];
    },
    participantes: function participantes(analisis) {
      this.ObtenerEmpleados();
      this.analisis_id = analisis.id;
      this.modal_participantes = true;
      this.getParticipantes(analisis.id);
    },
    /**
     * Carga todos los empleados para asignar participantes
     */
    ObtenerEmpleados: function ObtenerEmpleados() {
      var _this7 = this;
      axios.get("vertodosempleados").then(function (res) {
        _this7.list_empleados = [];
        if (res.status) {
          res.data.forEach(function (item) {
            _this7.list_empleados.push({
              id: item.id,
              name: item.nombre + ' ' + item.ap_paterno + ' ' + item.ap_materno
            });
          });
        } else {
          toastr.error("Error al obtener los empleados");
        }
      });
    },
    /**
     * Obtiene los participantes del analisis actual
     */
    getParticipantes: function getParticipantes(id) {
      var _this8 = this;
      axios.get("seguridad/nuevoanalisis/participantes/obtener/" + id).then(function (res) {
        if (res.data.status) {
          _this8.tableDataParticipantes = res.data.participantes;
        } else {
          toastr.error(res.data.mensaje);
        }
      })["catch"](function (e) {
        console.error(e);
      });
    },
    cerrarModalP: function cerrarModalP() {
      this.tableDataParticipantes = [];
      this.modal_participantes = false;
    },
    agregarEmpleado: function agregarEmpleado() {
      var _this9 = this;
      if (this.empleado == null) return;
      if (this.empleado.id == null) return;
      this.isPartcipantesLoading = true;
      axios.post('seguridad/nuevoanalisis/participantes/guardar', {
        id: this.analisis_id,
        empleado_id: this.empleado.id,
        analisis_id: this.analisis_id
      }).then(function (res) {
        _this9.isPartcipantesLoading = false;
        if (res.data.status) {
          toastr.success("Registrado correctamente");
          _this9.getParticipantes(_this9.analisis_id);
        } else {
          toastr.error(res.data.mensaje);
        }
        _this9.getParticipantes(_this9.analisis_id);
      })["catch"](function (error) {
        console.error(error);
      });
    },
    eliminarParticipante: function eliminarParticipante(empleado_id) {
      var _this0 = this;
      this.isPartcipantesLoading = true;
      var data = new FormData();
      data.append("empleado_id", empleado_id);
      data.append("analisis_id", this.analisis_id);
      axios.post("seguridad/nuevoanalisis/participantes/eliminar", data).then(function (res) {
        _this0.isPartcipantesLoading = false;
        if (res.data.status) {
          _this0.getParticipantes(_this0.analisis_id);
        } else {
          toastr.error(res.data.mensaje);
        }
      })["catch"](function (e) {
        console.error(e);
      });
    },
    descargar: function descargar(data) {
      window.open('seguridad/nuevoanalisis/descargar/' + data, '_blank');
    },
    /**
     * Elimina un analisis de seguirdad
     */
    eliminar: function eliminar(id) {
      var _this1 = this;
      Swal.fire({
        title: '¿Desea eliminar el análisis?',
        text: "Esta opción no se podrá desahacer",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí',
        cancelButtonText: 'No'
      }).then(function (result) {
        if (result.value) {
          axios.post("seguridad/nuevoanalisis/eliminar", {
            id: id
          }).then(function (res) {
            if (res.data.status) {
              toastr.success('Eliminado correctamente');
              _this1.getDataInicial();
            } else {
              toastr.error(res.data.mensaje);
            }
          })["catch"](function (e) {
            console.error(e);
          });
        }
      });
    }
  },
  mounted: function mounted() {
    this.getDataInicial();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/PermisoSeguridad.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/PermisoSeguridad.vue?vue&type=script&lang=js ***!
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
      isPermisos_loading: false,
      list_proyectos: [],
      list_folios: [],
      proyecto: {},
      folio_asociado: {},
      tableData: [],
      columns: ['uno.id', 'uno.uno', 'uno.dos', 'uno.tres', 'descarga'],
      options: {
        headings: {
          'uno.id': 'ACCIONES',
          'uno.uno': 'Folio',
          'uno.dos': 'Asociado',
          'uno.tres': 'Fecha Elaboración'
        },
        perPage: 10,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        filterByColumn: true,
        texts: config.texts
      },
      modal: 0,
      tituloModal: '',
      tipoAccion: 0,
      id: 0,
      uno: {
        uno: '',
        dos: '',
        tres: '',
        cuatro: '',
        cinco: '',
        seis: '',
        tipo: ""
      },
      dos: {
        uno: '',
        dos: '',
        tres: '',
        cuatro: '',
        cinco: '',
        seis: ''
      },
      tres: {
        uno: '',
        dos: '',
        tres: '',
        cuatro: ''
      },
      cuatro: {
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
        trece: ''
      },
      cinco: {
        uno: false,
        dos: false,
        tres: false,
        cuatro: false,
        cinco: false,
        seis: ''
      },
      seis: {
        uno: false,
        dos: false,
        tres: false,
        cuatro: false,
        cinco: false,
        seis: false,
        siete: false,
        ocho: false
      },
      siete: {
        uno: ''
      },
      ocho: {
        uno: '',
        dos: '',
        tres: '',
        cuatro: '',
        cinco: '',
        seis: ''
      },
      temporal: {
        uno: '',
        dos: '',
        tres: '',
        cuatro: '',
        cinco: '',
        seis: '',
        siete: '',
        ocho: '',
        nueve: '',
        diez: ''
      },
      nueve: {
        uno: '',
        dos: '',
        tres: '',
        cuatro: '',
        cinco: ''
      },
      diez: {
        uno: '',
        dos: '',
        tres: '',
        cuatro: '',
        cinco: '',
        seis: ''
      },
      listaEmpleados: [],
      once: []
    };
  },
  methods: {
    getLista: function getLista() {
      var _this = this;
      this.isPermisos_loading = true;
      axios.get('get/permisos/seguridad').then(function (response) {
        _this.isPermisos_loading = false;
        _this.tableData = response.data;
      })["catch"](function (e) {
        console.error(e);
      });
    },
    getData: function getData() {
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
    },
    ObtenerProyectos: function ObtenerProyectos() {
      var _this3 = this;
      axios.get("seguridad/permisotrabajo/obtenerproyectos").then(function (res) {
        if (res.data.status) {
          _this3.list_proyectos = res.data.proyectos;
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    /**
     * Obtener folios para asociar
     */
    ObtenerFolios: function ObtenerFolios() {
      var _this4 = this;
      axios.get("seguridad/permisotrabajo/obtenerfolios").then(function (res) {
        if (res.data.status) {
          _this4.list_folios = res.data.folios;
          _this4.list_folios.unshift({
            id: 0,
            folio: "NUEVO"
          });
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    abrirModal: function abrirModal(modelo, accion) {
      var _this5 = this;
      var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      this.ObtenerProyectos();
      this.ObtenerFolios();
      switch (modelo) {
        case "analisis":
          {
            switch (accion) {
              case 'registrar':
                {
                  // Utilerias.resetObject(this.uno);
                  _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.dos);
                  _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.tres);
                  _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.cuatro);
                  _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.cinco);
                  _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.seis);
                  _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.siete);
                  _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.ocho);
                  _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.nueve);
                  _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.diez);
                  _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.temporal);
                  this.once = [];
                  this.modal = 1;
                  this.tituloModal = 'Registrar permiso';
                  this.tipoAccion = 1;
                  break;
                }
              case 'actualizar':
                {
                  // Utilerias.resetObject(this.uno);
                  // Utilerias.resetObject(this.dos);
                  // Utilerias.resetObject(this.tres);
                  // Utilerias.resetObject(this.cuatro);
                  // Utilerias.resetObject(this.cinco);
                  // Utilerias.resetObject(this.seis);
                  // Utilerias.resetObject(this.siete);
                  // Utilerias.resetObject(this.ocho);
                  // Utilerias.resetObject(this.nueve);
                  // Utilerias.resetObject(this.diez);
                  // Utilerias.resetObject(this.temporal);
                  this.once = [];
                  this.modal = 1;
                  this.tituloModal = 'Actualizar permiso';
                  this.tipoAccion = 2;
                  this.uno = data.uno;
                  this.dos = data.dos;
                  this.tres = data.tres;
                  this.cuatro = data.cuatro;
                  this.cinco = data.cinco;
                  this.seis = data.seis;
                  this.siete = data.siete;
                  this.ocho = data.ocho;
                  this.ocho = {
                    uno: {
                      id: data.ocho.uno,
                      name: data.ocho.residente
                    },
                    dos: data.ocho.dos,
                    tres: {
                      id: data.ocho.tres,
                      name: data.ocho.supervisor
                    },
                    cuatro: this.ocho.cuatro,
                    cinco: {
                      id: data.ocho.cinco,
                      name: data.ocho.shso
                    },
                    seis: data.ocho.seis
                  };
                  this.nueve = data.nueve;
                  // this.diez = data.diez;
                  this.diez = {
                    uno: {
                      id: data.diez.uno,
                      name: data.diez.e_uno
                    },
                    dos: data.diez.dos,
                    tres: data.diez.tres,
                    cuatro: {
                      id: data.diez.cuatro,
                      name: data.diez.e_cuatro
                    },
                    cinco: data.diez.cinco,
                    seis: data.diez.seis
                  };
                  // this.once = data.once;
                  data.once.forEach(function (item, i) {
                    _this5.once.push({
                      uno: item.uno,
                      dos: item.dos,
                      tres: item.tres,
                      cuatro: {
                        id: item.cuatro,
                        name: item.e_cuatro
                      },
                      cinco: item.cinco,
                      seis: item.seis,
                      siete: item.siete,
                      ocho: {
                        id: item.ocho,
                        name: item.e_ocho
                      },
                      nueve: item.nueve,
                      diez: item.diez
                    });
                  });

                  // this.once =
                  // {
                  //   uno : data.once.uno,
                  //   dos : data.once.dos,
                  //   tres : data.once.tres,
                  //   cuatro : {id : data.once.cuatro, name : data.once.e_cuatro},
                  //   cinco : data.once.cinco,
                  //   seis : data.once.seis,
                  //   siete : data.once.siete,
                  //   ocho : {id : data.once.ocho, name : data.once.e_ocho}
                  //   nueve : data.once.nueve,
                  //   diez : data.once.diez,
                  // };

                  this.id = data.uno.id;
                  break;
                }
            }
          }
      }
    },
    /**
     * Todos los campos necesarios fueron ingresados
     */
    Validar: function Validar() {
      var mensaje = "";
      var status = false;
      if (this.ocho.uno == null) mensaje = "Residente de Obra";else if (this.ocho.uno.id == null) mensaje = "Residente de Obra";else if (this.ocho.tres == null) mensaje = "Supervisor de Trabajo";else if (this.ocho.tres.id == null) mensaje = "Supervisor de Trabajo";else if (this.ocho.cinco == null) mensaje = "Responsable de SSMA";else if (this.ocho.cinco.id == null) mensaje = "Responsable de SSMA";else status = true;
      return {
        status: status,
        mensaje: mensaje
      };
    },
    Guardar: function Guardar(nuevo) {
      var _this6 = this;
      var isValid = this.Validar();
      if (!isValid.status) {
        toastr.warning("Ingrese el campo " + isValid.mensaje);
        return;
      }
      // Nuevo
      if (this.tipoAccion == 1) this.uno.proyecto_id = this.proyecto.id;
      axios({
        method: nuevo ? 'POST' : 'PUT',
        url: nuevo ? 'seguridad/permiso/general/guardar' : 'seguridad/permiso/general/actualizar',
        data: {
          uno: this.uno,
          dos: this.dos,
          tres: this.tres,
          cuatro: this.cuatro,
          cinco: this.cinco,
          seis: this.seis,
          siete: this.siete,
          ocho: this.ocho,
          nueve: this.nueve,
          diez: this.diez,
          once: this.once,
          id: this.id
        }
      }).then(function (res) {
        if (res.data.status) {
          _this6.modal = 0;
          _this6.getLista();
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    Cerrar: function Cerrar() {
      this.modal = 0;
    },
    Crear: function Crear() {
      var _this7 = this;
      axios.post('abc', this.temporal).then(function (result) {
        _this7.once.push({
          uno: result.data.uno,
          dos: result.data.dos,
          tres: result.data.tres,
          cuatro: result.data.cuatro,
          cinco: result.data.cinco,
          seis: result.data.seis,
          siete: result.data.siete,
          ocho: result.data.ocho,
          nueve: result.data.nueve,
          diez: result.data.diez
        });
        _this7.vaciado();
      })["catch"](function (e) {
        console.error(e);
      });
      // this.once.push(this.temporal);
      // this.once.push(this.temporal);
      // console.log(this.once);
      // // setTimeout(() =>{
      // //   let me = this;
      //   this.temporal.uno = '';
      //   console.log(this.temporal);

      // // }, 1000);
      //   me.temporal.dos = '';
      //   me.temporal.tres = '';
      //   me.temporal.cuatro = '';
      //   me.temporal.cinco = '';
      //   me.temporal.seis = '';
      //   me.temporal.siete = '';
      //   me.temporal.ocho = '';
      //   me.temporal.nueve = '';
      //   me.temporal.diez = '';
    },
    vaciado: function vaciado() {
      _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.temporal);
    },
    deleteu: function deleteu(index) {
      this.once.splice(index, 1);
    },
    llenarC: function llenarC() {
      if (this.dos.uno == 1) {
        this.cuatro.uno = '1';
        this.cuatro.dos = '1';
        this.cuatro.catorce = '1';
        this.cuatro.tres = '1';
        this.cuatro.cuatro = '1';
        this.cuatro.cinco = '2';
        this.cuatro.seis = '3';
        this.cuatro.siete = '1';
        this.cuatro.ocho = '1';
        this.cuatro.nueve = '1';
        this.cuatro.diez = '3';
        this.cuatro.once = '1';
        this.cuatro.doce = '1';
        this.cuatro.trece = '1';
        this.cinco.uno = true;
        this.cinco.dos = true;
        this.cinco.tres = true;
        this.cinco.cuatro = true;
        this.cinco.cinco = true;
        this.seis.uno = false;
        this.seis.dos = false;
        this.seis.tres = false;
        this.seis.cuatro = true;
        this.seis.cinco = true;
        this.seis.seis = true;
        this.seis.siete = true;
        this.seis.ocho = true;
      }
    },
    llenarE: function llenarE() {
      if (this.dos.cuatro == 1) {
        this.cuatro.uno = '1';
        this.cuatro.dos = '1';
        this.cuatro.catorce = '1';
        this.cuatro.tres = '1';
        this.cuatro.cuatro = '3';
        this.cuatro.cinco = '3';
        this.cuatro.seis = '1';
        this.cuatro.siete = '3';
        this.cuatro.ocho = '1';
        this.cuatro.nueve = '1';
        this.cuatro.diez = '1';
        this.cuatro.once = '3';
        this.cuatro.doce = '3';
        this.cuatro.trece = '3';
        this.cinco.uno = true;
        this.cinco.dos = true;
        this.cinco.tres = true;
        this.cinco.cuatro = true;
        this.cinco.cinco = true;
        this.seis.uno = false;
        this.seis.dos = false;
        this.seis.tres = false;
        this.seis.cuatro = true;
        this.seis.cinco = true;
        this.seis.seis = true;
        this.seis.siete = true;
        this.seis.ocho = true;
      }
    },
    descargar: function descargar(data) {
      window.open('seguridad/permiso/general/descargar/' + data, '_blank');
    },
    eliminar: function eliminar(id) {
      var _this8 = this;
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
          axios.get('seguridad/permiso/general/eliminar/' + id).then(function (response) {
            toastr.success('Eliminado Correctamente !!!');
            _this8.getLista();
          })["catch"](function (e) {
            console.error(e);
          });
        }
      });
    }
  },
  mounted: function mounted() {
    console.error(this.uno);
    this.getData();
    this.getLista();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/Platicas.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/Platicas.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************/
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
    return _defineProperty(_defineProperty({
      url: "seguridad/platicas/",
      ver_modal_platicas: 0,
      tituloModal: '',
      platica: {},
      list_empleados: [],
      tipoAccion: 0,
      isPlaticas_loading: false,
      isGuardarpl_loading: false,
      columns_platicas: ["id", "fecha", "tema", "nombre", "documento"],
      list_platicas: [],
      options_platicas: {
        headings: _defineProperty(_defineProperty({
          id: 'Acción',
          nombre: 'Nombre'
        }, "nombre", "Responsable"), "documento", "Evidencia"),
        perPage: 10,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        filterByColumn: true,
        texts: config.texts
      },
      // Participantes
      participante: {},
      list_participantes: [],
      participantes: [],
      tipoCard: 1,
      isParticipantes_loading: false,
      isGuardarparticip_loading: false,
      columns_participantes: ["nombre", "puesto"]
    }, "list_participantes", []), "options_participantes", {
      headings: {
        id: 'Acción',
        nombre: "Empleado"
      },
      perPage: 10,
      perPageValues: [],
      skin: config.skin,
      sortIcon: config.sortIcon,
      filterByColumn: true,
      texts: config.texts
    });
  },
  computed: {},
  methods: {
    /**
     * Obtener todas las platicas
     */
    ObtenerPlaticas: function ObtenerPlaticas() {
      var _this = this;
      this.isPlaticas_loading = true;
      axios.get(this.url + "obtenerplaticas").then(function (res) {
        if (res.data.status) {
          _this.isPlaticas_loading = false;
          _this.list_platicas = res.data.platicas;
        } else toastr.error(res.data.status);
      });
    },
    AbrirModalPlaticas: function AbrirModalPlaticas() {
      var nuevo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var platica = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.ver_modal_platicas = true;
      if (nuevo) {
        this.tipoAccion = 1;
        this.tituloModal = "Registar plática";
      } else {
        this.tipoAccion = 2;
        this.tituloModal = "Actualizar plática";
        this.platica = _objectSpread({}, platica);
        this.platica.responsable = {
          id: platica.responsable_id,
          nombre: platica.nombre
        };
      }
    },
    /**
     * Obtener todos los empleados
     */
    ObtenerEmpleados: function ObtenerEmpleados() {
      var _this2 = this;
      axios.get("generales/empleadoactivos").then(function (res) {
        if (res.data.status) {
          _this2.list_empleados = res.data.empleados;
        } else toastr.error(res.data.mensaje);
      });
    },
    /**
     * Registrar plática
     */
    GuardarPlatica: function GuardarPlatica() {
      var _this3 = this;
      var nuevo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.$validator.validate().then(function (isValid) {
        if (!isValid) return;
        _this3.isGuardarpl_loading = true;
        var data = new FormData();
        if (!nuevo) data.append("id", _this3.platica.id);
        data.append("fecha", _this3.platica.fecha);
        data.append("ubicacion", _this3.platica.ubicacion);
        data.append("tema", _this3.platica.tema);
        data.append("responsable_id", _this3.platica.responsable.id);
        axios.post(_this3.url + "guardar", data).then(function (res) {
          _this3.isGuardarpl_loading = false;
          if (res.data.status) {
            toastr.success("Plática guardada correctamente");
            _this3.CerrarModalPlaticas();
            _this3.ObtenerPlaticas();
          } else {
            toastr.error(res.data.mensaje);
          }
        });
      });
    },
    CerrarModalPlaticas: function CerrarModalPlaticas() {
      this.ver_modal_platicas = 0;
      this.platica = {
        responsable: {}
      };
    },
    VerParticipantes: function VerParticipantes(platica) {
      this.tipoCard = 2;
      this.platica_id = platica.id;
      this.isParticipantes_loading = true;
      this.ObtenerParticipantes(platica.id);
    },
    // Obtener los participante de la platica selecionada
    ObtenerParticipantes: function ObtenerParticipantes() {
      var _this4 = this;
      this.isParticipantes_loading = true;
      axios.get(this.url + "participantes/obtener/" + this.platica_id).then(function (res) {
        _this4.isParticipantes_loading = false;
        if (res.data.status) {
          _this4.list_participantes = res.data.participantes;
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    /**
     * Guardar los participantes en la platica seleccinoada
     */
    GuadarParticipantes: function GuadarParticipantes() {
      var _this5 = this;
      if (this.participantes.length == 0) return;
      this.isGuardarparticip_loading = true;
      axios.post(this.url + "participantes/guardar", {
        "platica_id": this.platica_id,
        "participantes": this.participantes
      }).then(function (res) {
        _this5.isGuardarparticip_loading = false;
        if (res.data.status) {
          _this5.participantes = [];
          toastr.success("Guardado correctamente");
          _this5.ObtenerParticipantes();
        } else toastr.error(res.data.mensaje);
      });
    },
    /**
     * Genera la plantilla para las platicas
     */
    DescargarPlantilla: function DescargarPlantilla(id) {
      window.open(this.url + "descargarplantilla/" + id, "_blank");
    },
    /**
     * Subir pdf de platica
     */
    SubirEvidencia: function SubirEvidencia(id) {
      var _this6 = this;
      Swal.fire({
        title: "Cargar documento de la plática",
        input: "file",
        confirmButtonText: "Cargar"
      }).then(function (result) {
        console.error(result);
        if (result.value == null) return;
        if (result.value.type === "application/pdf") {
          var data = new FormData();
          data.append("platica_id", id);
          data.append("evidencia", result.value);
          axios.post(_this6.url + "subirevidencia", data).then(function (res) {
            if (res.data.status) {
              toastr.success("Documento subido correctamente");
              _this6.ObtenerPlaticas();
            } else {
              toastr.error(res.data.mensaje);
            }
          })["catch"](function (r) {
            console.error(r);
            toastr.error("Error al subir el documento");
          });
        } else {
          toastr.warning("Seleccione un PDF");
        }
      });
    },
    DescargarEvidencia: function DescargarEvidencia(id) {
      window.open(this.url + 'descargarevidencia/' + id, '_blank');
    }
  },
  mounted: function mounted() {
    this.ObtenerPlaticas();
    this.ObtenerEmpleados();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/Residuos.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/Residuos.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************/
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
      modal: 0,
      tituloModal: '',
      tipoAccion: 0,
      anio: 2023,
      tableData: [],
      columns: ['id', 'fechas', 'residuo', 'cantidad', 'unidad', 'fecha_salida', 'entrega', 'proveedor', 'folio'],
      options: {
        headings: {
          id: 'Acciones'
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
      dataSelect: '',
      residuo: '',
      cantidad: '',
      unidad: '',
      fecha_salida: '',
      empleado_entrega: '',
      proveedor: '',
      id: 0,
      listaEmpleados: [],
      folio: ''
    };
  },
  methods: {
    getLista: function getLista() {
      var _this = this;
      axios.get('/residuos/urbanos/seguridad/get').then(function (response) {
        _this.tableData = response.data;
      })["catch"](function (e) {
        console.error(e);
      });
    },
    abrirModal: function abrirModal(modelo, accion) {
      var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      switch (modelo) {
        case "bitacora":
          {
            switch (accion) {
              case 'registrar':
                {
                  this.modal = 1;
                  this.tituloModal = 'Registrar';
                  this.tipoAccion = 1;
                  break;
                }
              case 'actualizar':
                {
                  console.log(data);
                  var valores = data['fechas'].split(',');
                  var fechas = valores.pop();
                  this.modal = 1;
                  this.tituloModal = 'Actualizar';
                  this.tipoAccion = 2;
                  this.residuo = data['residuo'];
                  this.cantidad = data['cantidad'];
                  this.unidad = data['unidad'];
                  this.fecha_salida = data['fecha_salida'];
                  this.empleado_entrega = {
                    id: data['empleado_entrega_id'],
                    name: data['entrega']
                  };
                  this.proveedor = data['proveedor'];
                  this.id = data['id'];
                  this.dataSelect = valores;
                  this.folio = data['folio'];
                  break;
                }
            }
          }
      }
    },
    Vaciar: function Vaciar() {
      this.residuo = '';
      this.cantidad = '';
      this.unidad = '';
      this.fecha_salida = '';
      this.empleado_entrega = '';
      this.proveedor = '';
      this.id = 0;
      this.folio = '';
      this.dataSelect = '';
    },
    cerrarModal: function cerrarModal() {
      this.modal = 0;
    },
    getData: function getData() {
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
    },
    Guardar: function Guardar(nuevo) {
      var _this3 = this;
      this.$validator.validate().then(function (result) {
        if (result) {
          axios({
            method: nuevo ? 'POST' : 'PUT',
            url: nuevo ? '/residuos/urbanos/seguridad/guardar' : '/residuos/urbanos/seguridad/actualizar',
            data: {
              id: _this3.id,
              residuo: _this3.residuo,
              cantidad: _this3.cantidad,
              unidad: _this3.unidad,
              fecha_salida: _this3.fecha_salida,
              empleado_entrega: _this3.empleado_entrega.id,
              proveedor: _this3.proveedor,
              fechas: _this3.dataSelect,
              folio: _this3.folio
            }
          }).then(function (response) {
            console.log(response);
            _this3.cerrarModal();
            _this3.Vaciar();
            _this3.getLista();
            toastr.success(nuevo ? 'Guardado Correctamente' : 'Actualizado Correctamente');
          })["catch"](function (e) {
            console.error();
          });
        }
      });
    },
    Descargar: function Descargar() {
      window.open('residuos/urbanos/seguridad/descargar/' + this.anio);
    }
  },
  mounted: function mounted() {
    this.getData();
    this.getLista();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/Secuencias.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/Secuencias.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* CAMBIAR UBICACIÓN  */

var config = (__webpack_require__(/*! ../Herramientas/config-vuetables-client */ "./resources/assets/js/components/Herramientas/config-vuetables-client.js").call)(undefined);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      url: "/seguridad/catalogos",
      // Tabla 
      ver_modal: 0,
      columns_secuencia: ["id", "nombre"],
      list_secuencia: [],
      list_riesgo: [],
      list_recomendacion: [],
      registro_modal: {},
      options_secuencia: {
        headings: {
          id: 'Acciones',
          nombre: "Nombre"
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
      // Modal
      titulo_modal_secuencia: '',
      tipoAccion_modal_secuencia: 0,
      secuencia_modal: {}
    }; // return
  },
  //data
  computed: {},
  methods: {
    /**
     * Abre el modal para el registro
     */
    AbrirModal: function AbrirModal(nuevo, tipo) {
      var model = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      this.ver_modal = true;
      var nombre = tipo == 1 ? "Secuencia" : tipo == 2 ? "Riesgo" : "Recomendación";
      this.tipo_registro = tipo;
      if (nuevo) {
        // Crear nuevo
        this.titulo_modal_secuencia = "Registrar " + nombre;
        this.tipoAccion_modal_secuencia = 1;
      } else {
        // Actualizar
        this.titulo_modal_secuencia = "Actualizar " + nombre;
        this.tipoAccion_modal_secuencia = 2;
        this.registro_modal.id = model.id;
        this.registro_modal.nombre = model.nombre;
      } // Fin if
    },
    /**
     * Guarda un registro del tipo seleccionado
     */
    Guardar: function Guardar(nuevo) {
      var _this = this;
      this.$validator.validate().then(function (isValid) {
        if (!isValid) return;
        // Url del catalogo
        var path = _this.tipo_registro == 1 ? "/secuencia" : _this.tipo_registro == 2 ? "/riesgo" : "/recomendacion";
        var data = new FormData();
        if (!nuevo) data.append("id", _this.registro_modal.id);
        data.append("nombre", _this.registro_modal.nombre);
        axios.post(_this.url + path + "/registrar", data).then(function (res) {
          if (res.data.status) {
            console.error(_this.tipo_registro);
            toastr.success("Registrado correctamente");
            _this.CerrarModal();
            if (_this.tipo_registro == 1) _this.ObtenerSecuencias();else if (_this.tipo_registro == 2) _this.ObtenerRiesgos();else _this.ObtenerRecomendaciones();
          } else {
            toastr.danger(res.data.mensaje);
          }
        });
      });
    },
    /**
     * Obtener las secuencias registradas
     */
    ObtenerSecuencias: function ObtenerSecuencias() {
      var _this2 = this;
      axios.get(this.url + "/secuencia/cargar").then(function (res) {
        if (res.data.status) {
          _this2.list_secuencia = res.data.secuencias;
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    /**
     * Obtener los riesgos registradas
     */
    ObtenerRiesgos: function ObtenerRiesgos() {
      var _this3 = this;
      axios.get(this.url + "/riesgo/cargar").then(function (res) {
        if (res.data.status) {
          _this3.list_riesgo = res.data.riesgos;
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    /**
     * Obtener las recomenciones registradas
     */
    ObtenerRecomendaciones: function ObtenerRecomendaciones() {
      var _this4 = this;
      axios.get(this.url + "/recomendacion/cargar").then(function (res) {
        if (res.data.status) {
          _this4.list_recomendacion = res.data.recomendaciones;
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    CerrarModal: function CerrarModal() {
      this.ver_modal = false;
      this.registro_modal = {};
    }
  },
  // Fin metodos
  mounted: function mounted() {
    this.ObtenerSecuencias();
    this.ObtenerRiesgos();
    this.ObtenerRecomendaciones();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/Vale.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/Vale.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_qrcode_reader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-qrcode-reader */ "./node_modules/vue-qrcode-reader/dist/VueQrcodeReader.common.js");
/* harmony import */ var vue_qrcode_reader__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_qrcode_reader__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Herramientas/utilerias.js */ "./resources/assets/js/components/Herramientas/utilerias.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


var config = (__webpack_require__(/*! ../Herramientas/config-vuetables-client */ "./resources/assets/js/components/Herramientas/config-vuetables-client.js").call)(undefined);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      modal_autorizar: false,
      tab: 1,
      id_entrega: 0,
      estilo_form: "",
      isLoading: false,
      modal_actualizar: 0,
      data_detalle: '',
      autorizado: false,
      listaEmpleados: [],
      listadoArticulos: [],
      empleado_entrega: '',
      empleado_autoriza: {},
      motivo: 1,
      empleado_autorizado: '',
      empleado_supervisor: '',
      articulo_epp: '',
      proyectoId: '',
      fecha: '',
      observaciones: "Sin observaciones",
      tableData: [],
      listaProyectos: [],
      columns: ['empleado_id', 'empleado', 'descargar'],
      options: {
        headings: {
          empleado_id: 'Acciones'
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

      tableDataDetalle: [],
      columnsDetalle: ['id', 'descripcion', 'cantidad', 'fecha', 'autoriza', "observaciones"],
      optionsDetalle: {
        headings: {
          id: 'Acciones'
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

      tableDataArticulos: [],
      columnsarticulos: ['descripcion', 'cantidad', 'fecha', 'empleador', 'empleadoa'],
      optionsarticulos: {
        headings: {
          id: 'Acciones',
          empleador: 'Recibe',
          empleadoa: 'Autoriza'
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

      modal: 0,
      tituloModal: '',
      tipoAccion: 0,
      listaCatalogo: [],
      catalogo: '',
      cantidad: '',
      listado_data: [],
      id: 0,
      detalle: false,
      partida: {
        id: 0,
        articulo: '',
        cantidad: '',
        fecha: '',
        autoriza: ''
      }
    };
  },
  methods: {
    getInicial: function getInicial() {
      var _this = this;
      axios.get('/vale/epp/seguridad/emp').then(function (response) {
        _this.tableData = response.data;
      })["catch"](function (e) {
        console.error(e);
      });
      axios.get('/vale/epp/seguridad/ver/articulos').then(function (response) {
        _this.listadoArticulos = response.data;
        _this.listadoArticulos.push({
          id: 0,
          descripcion: 'TODOS'
        });
      })["catch"](function (e) {
        console.error(e);
      });
    },
    getData: function getData() {
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
    },
    /**
     * [getProyecto Obtiene todos los proyectos existentes]
     * @return {[type]} [description]
     */
    getProyecto: function getProyecto() {
      this.PermisosCRUD = _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_1__["default"].getCRUD(this.$route.path);
      var me = this;
      axios.get('/proyecto').then(function (response) {
        response.data.forEach(function (value) {
          me.listaProyectos.push({
            id: value.proyecto.id,
            name: value.proyecto.nombre_corto
          });
        });
        me.listaProyectos.push({
          id: -1,
          name: "Sin proyecto"
        });
        me.proyectoId = {
          id: -1,
          name: "Sin proyecto"
        };
      })["catch"](function (error) {
        console.log(error);
      });
    },
    abrirModal: function abrirModal(modelo, accion) {
      var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      switch (modelo) {
        case "vale":
          {
            switch (accion) {
              case 'registrar':
                {
                  this.modal = 1;
                  this.tituloModal = 'Registrar';
                  this.tipoAccion = 1;
                  break;
                }
              case 'actualizar':
                {
                  this.modal = 1;
                  this.tituloModal = 'Actualizar';
                  this.tipoAccion = 2;
                  break;
                }
            }
          }
      }
    },
    cerrarModal: function cerrarModal() {
      this.modal = 0;
      this.autorizado = false;
    },
    Guardar: function Guardar(nuevo) {
      var _this3 = this;
      if (this.listado_data.length == 0) {
        toastr.warning("Seleccione un artículo");
        return;
      }
      this.isLoading = true;
      axios({
        method: nuevo ? 'POST' : 'PUT',
        url: nuevo ? '/vale/epp/seguridad/guardar' : '/vale/epp/seguridad/actualizar',
        data: {
          id: this.id,
          datos: this.listado_data
        }
      }).then(function (response) {
        _this3.estilo_form = {
          'pointer-events': 'auto'
        };
        _this3.autorizado = false;
        _this3.getInicial();
        _this3.listado_data = [];
        _this3.empleado_supervisor = '';
        _this3.empleado_autoriza = '';
        _this3.modal = 0;
        toastr.success(nuevo ? 'Guardado Correctamente' : 'Actualizado Correctamente');
        // console.log(response);
        _this3.isLoading = false;
      })["catch"](function (e) {
        _this3.isLoading = false;
        console.error(e);
      });
    },
    buscar: function buscar(search, loading) {
      //  ... do some asynchronous stuff!
      // console.log(search,'doe');
      if (search.length > 2) {
        var me = this;
        setTimeout(function () {
          axios.post('get/articulos/descripcion/', {
            des: search
          }).then(function (response) {
            me.listaCatalogo = response.data;
          })["catch"](function (e) {
            console.error(e);
          });
        }, 1000);
      }
      // console.log(loading,'see');
    },
    guardarasignacion: function guardarasignacion() {
      if (this.fecha === '') {
        toastr.warning('Seleccione una fecha');
        return;
      }
      if (this.cantidad === '') {
        toastr.warning('Escriba una cantidad');
        return;
      }
      if (this.catalogo === '') {
        toastr.warning('Seleccione un artículo');
        return;
      }
      if (this.empleado_entrega === '') {
        toastr.warning('Seleccione un empleado');
        return;
      }
      this.listado_data.push({
        id: this.catalogo.id,
        descripcion: this.catalogo.descripcion,
        cantidad: this.cantidad,
        fecha: this.fecha,
        observaciones: this.observaciones,
        motivo: this.motivo,
        autoriza: this.empleado_autoriza.id,
        iniciales: this.GetIniciales(this.empleado_autoriza.name),
        empleado: this.empleado_entrega.name,
        empleado_id: this.empleado_entrega.id,
        proyecto: this.proyectoId.name,
        proyecto_id: this.proyectoId.id
      });
      this.catalogo = '';
      this.observaciones = "Sin observaciones";
    },
    deleteu: function deleteu(index) {
      this.listado_data.splice(index, 1);
    },
    atras: function atras() {
      this.detalle = false;
    },
    detalles: function detalles(data) {
      var _this4 = this;
      // console.log(data);
      this.detalle = true;
      this.data_detalle = data;
      axios.get('/vale/epp/seguridad/emp/detalle/' + data.empleado_id).then(function (response) {
        _this4.tableDataDetalle = response.data;
      })["catch"](function (e) {
        console.error(e);
      });
    },
    eliminar: function eliminar(id) {
      var me = this;
      axios.get('/vale/epp/seguridad/emp/eliminar/' + id).then(function (response) {
        me.detalles(me.data_detalle);
        toastr.success('Correcto');
      })["catch"](function (e) {
        console.error(e);
      });
    },
    descargar: function descargar(data, tipo) {
      // 1. Antiguo. 2. Nuevo (SGI)
      window.open('/vale/epp/seguridad/emp/descargar/' + data.empleado_id + "&" + tipo, '_blank');
    },
    GetIniciales: function GetIniciales(data) {
      var porciones = data.split(' ');
      var iniciales = '';
      porciones.forEach(function (item, i) {
        iniciales += item.substring(0, 1);
      });
      return iniciales;
    },
    Actualizar: function Actualizar(data) {
      this.modal_actualizar = 1;
      this.partida.id = data['id'];
      this.partida.articulo = {
        id: data['articulo_id'],
        descripcion: data['descripcion']
      };
      this.partida.cantidad = data['cantidad'];
      this.partida.fecha = data['fecha'];
      this.partida.autoriza = {
        id: data['autoriza_id'],
        name: data['autoriza']
      };
    },
    cerrarModalAct: function cerrarModalAct() {
      this.modal_actualizar = 0;
    },
    GuardarAct: function GuardarAct() {
      var _this5 = this;
      axios.post('guardar/act/partida/vale/epp', {
        id: this.partida.id,
        articulo_id: this.partida.articulo.id,
        cantidad: this.partida.cantidad,
        fecha: this.partida.fecha,
        autoriza_id: this.partida.autoriza.id
      }).then(function (response) {
        _this5.detalles(_this5.data_detalle);
        _this5.cerrarModalAct();
      })["catch"](function (e) {
        console.error(e);
      });
    },
    setId: function setId(id) {
      this.tab = id;
    },
    BuscarArtEpp: function BuscarArtEpp() {
      var _this6 = this;
      axios.get('buscar/historico/art/vale/epp/' + this.articulo_epp.id).then(function (response) {
        _this6.tableDataArticulos = response.data;
      })["catch"](function (e) {
        console.error(e);
      });
    },
    /**
     * Autoriza la entrega con el QR
     */
    Autorizar: function Autorizar() {
      this.modal_autorizar = true;
    },
    CerrarModalAutorizar: function CerrarModalAutorizar() {
      this.modal_autorizar = false;
      this.empleado_autorizado = "";
    },
    onInit: function onInit(promise) {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _context.p = 0;
              _context.n = 1;
              return promise;
            case 1:
              _context.n = 3;
              break;
            case 2:
              _context.p = 2;
              _t = _context.v;
              if (_t.name === 'NotAllowedError') {
                _this7.error = "ERROR: Permiso a la cámara denegado";
              } else if (_t.name === 'NotFoundError') {
                _this7.error = "ERROR: Ninugna cámara detectada";
              } else if (_t.name === 'NotSupportedError') {
                _this7.error = "ERROR: secure context required (HTTPS, localhost)";
              } else if (_t.name === 'NotReadableError') {
                _this7.error = "ERROR: La cámara se encuentra en uso";
              } else if (_t.name === 'OverconstrainedError') {
                _this7.error = "ERROR: installed cameras are not suitable";
              } else if (_t.name === 'StreamApiNotSupportedError') {
                _this7.error = "ERROR: Navegador no soportado";
              }
            case 3:
              return _context.a(2);
          }
        }, _callee, null, [[0, 2]]);
      }))();
    },
    onDecodeAutorizar: function onDecodeAutorizar(result) {
      var _this8 = this;
      var dts = result.split("|");
      if (dts.length != 2) {
        toastr.warning("Nope");
        return;
      }
      var id = dts[0];
      var nombre = dts[1];
      console.error("id", id);
      console.error("nombre", nombre);
      console.error("empleado", this.empleado_entrega);
      if (id == this.empleado_entrega.id) {
        this.autorizado = true;
        toastr.success("Autorizado");
        this.estilo_form = {
          'pointer-events': 'none'
        };
      } else {
        toastr.error("No Autorizado");
      }
      setTimeout(function () {
        _this8.CerrarModalAutorizar();
      }, 2000);
      return;
      // removed by dead control flow

    },
    ExportarArtEpp: function ExportarArtEpp() {
      window.open('exportar/historico/art/vale/epp/' + this.articulo_epp.id, '_blank');
    },
    reporteEpp: function reporteEpp() {
      window.open("seguridad/entregaepp/reporteconsumo");
    }
  },
  mounted: function mounted() {
    this.getData();
    this.getInicial();
    this.getProyecto();
    this.tab = 1;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/Alcoholimetria.vue?vue&type=template&id=4042309f":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/Alcoholimetria.vue?vue&type=template&id=4042309f ***!
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
    staticClass: "container-fluid",
    staticStyle: {
      "min-height": "40vh"
    }
  }, [_vm.tipoCard == 1 ? _c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("i", {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" Pruebas de Alcoholimetría\n                "), _c("button", {
    staticClass: "btn btn-dark float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.AbrirModalPruebas();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  }), _vm._v(" Nuevo\n                ")])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isPruebas_loading
    }
  }), _vm._v(" "), _c("v-client-table", {
    attrs: {
      columns: _vm.columns_pruebas,
      data: _vm.list_pruebas,
      options: _vm.options_pruebas
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
        }), _vm._v("  Acciones\n                                ")]), _vm._v(" "), _c("div", {
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
              return _vm.AbrirModalPruebas(false, props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-edit"
        }), _vm._v("  Actualizar\n                                    ")]), _vm._v(" "), _c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.DescargarPlantilla(props.row.id);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-file-pdf"
        }), _vm._v("  Descargar Plantilla\n                                    ")]), _vm._v(" "), _c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.SubirEvidencia(props.row.id);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-file-pdf"
        }), _vm._v("  Subir Evidencia\n                                    ")])])])])];
      }
    }, {
      key: "documento",
      fn: function fn(props) {
        return [props.row.documento == null ? _c("span", {
          staticClass: "btn btn-dark"
        }, [_vm._v("N/D")]) : _c("button", {
          staticClass: "btn btn-dark",
          on: {
            click: function click($event) {
              return _vm.DescargarEvidencia(props.row.id);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-download"
        })])];
      }
    }], null, false, 3391742086)
  })], 1)]) : _vm._e(), _vm._v(" "), _vm.tipoCard == 2 ? _c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("i", {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" Participantes\n                "), _c("button", {
    staticClass: "btn btn-dark float-sm-right mx-1",
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
  }), _vm._v(" Regresar\n                ")])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("br"), _vm._v(" "), _c("vue-element-loading", {
    attrs: {
      active: _vm.isGuardarparticip_loading
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2 form-control-label"
  }, [_vm._v("Responsable")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    attrs: {
      multiple: "",
      options: _vm.list_empleados,
      "data-vv-name": "Participantes",
      label: "nombre"
    },
    model: {
      value: _vm.participantes,
      callback: function callback($$v) {
        _vm.participantes = $$v;
      },
      expression: "participantes"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Participantes")))])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2 form-control-label"
  }, [_vm._v("Resultado")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.resultado,
      expression: "resultado"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control col-9",
    attrs: {
      type: "text",
      "data-vv-name": "Resultado",
      maxlength: "50"
    },
    domProps: {
      value: _vm.resultado
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.resultado = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Resultado")))])]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-dark",
    on: {
      click: function click($event) {
        return _vm.GuadarParticipantes();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  })])]), _vm._v(" "), _c("br"), _vm._v(" "), _c("br"), _vm._v(" "), _c("vue-element-loading", {
    attrs: {
      active: _vm.isParticipantes_loading
    }
  }), _vm._v(" "), _c("v-client-table", {
    attrs: {
      columns: _vm.columns_participantes,
      data: _vm.list_participantes,
      options: _vm.options_participantes
    }
  })], 1)]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "modal fade",
    "class": {
      mostrar: _vm.ver_modal_pruebas
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
      active: _vm.isGuardarpl_loading
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
        return _vm.CerrarModalPruebas();
      }
    }
  }, [_c("span", {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("×")])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
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
      value: _vm.prueba.fecha,
      expression: "prueba.fecha"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date",
      "data-vv-name": "Fecha"
    },
    domProps: {
      value: _vm.prueba.fecha
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.prueba, "fecha", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Fecha")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2 form-control-label"
  }, [_vm._v("Ubicación")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required|max:50",
      expression: "'required|max:50'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.prueba.ubicacion,
      expression: "prueba.ubicacion"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      "data-vv-name": "Ubicación",
      autocomplete: "off"
    },
    domProps: {
      value: _vm.prueba.ubicacion
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.prueba, "ubicacion", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Ubicación")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2 form-control-label"
  }, [_vm._v("Responsable")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    attrs: {
      options: _vm.list_empleados,
      "data-vv-name": "Responsable",
      label: "nombre"
    },
    model: {
      value: _vm.prueba.responsable,
      callback: function callback($$v) {
        _vm.$set(_vm.prueba, "responsable", $$v);
      },
      expression: "prueba.responsable"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Responsable")))])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2 form-control-label"
  }, [_vm._v("Observaciones")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("textarea", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required|max:100",
      expression: "'required|max:100'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.prueba.observaciones,
      expression: "prueba.observaciones"
    }],
    staticClass: "form-control",
    attrs: {
      "data-vv-name": "Observaciones"
    },
    domProps: {
      value: _vm.prueba.observaciones
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.prueba, "observaciones", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Observaciones")))])])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("button", {
    staticClass: "btn btn-outline-dark",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.CerrarModalPruebas();
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
        return _vm.GuardarPrueba(true);
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
        return _vm.GuardarPrueba(false);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Actualizar")]) : _vm._e()])], 1)])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/AnalisisSeguridad.vue?vue&type=template&id=341fad04":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/AnalisisSeguridad.vue?vue&type=template&id=341fad04 ***!
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
  }), _vm._v(" ANÁLISIS DE SEGURIDAD EN EL TRABAJO (AST)\n\n                "), _c("button", {
    staticClass: "btn btn-dark float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.abrirModal("analisis", "registrar");
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  }), _vm._v(" Nuevo\n                ")])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("v-client-table", {
    attrs: {
      data: _vm.tableData,
      columns: _vm.columns,
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
        }, [_c("a", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button",
            href: "#"
          },
          on: {
            click: function click($event) {
              $event.preventDefault();
              return _vm.abrirModal("analisis", "actualizar", props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-pencil-alt"
        }), _vm._v(" Actualizar analisis\n                                    ")]), _vm._v(" "), _c("a", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button",
            href: "#"
          },
          on: {
            click: function click($event) {
              return _vm.participantes(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-user-friends"
        }), _vm._v(" Agregar Participantes\n                                    ")]), _vm._v(" "), _c("a", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button",
            href: "#"
          },
          on: {
            click: function click($event) {
              return _vm.eliminar(props.row.id);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-trash"
        }), _vm._v(" Eliminar\n                                    ")])])])])];
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
              return _vm.descargar(props.row.id);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-download"
        }), _vm._v(" "), _c("i", {
          staticClass: "fas fa-file-pdf"
        })])];
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
  }, [_vm._v(_vm._s(_vm.tituloModal))]), _vm._v(" "), _c("button", {
    staticClass: "close",
    attrs: {
      type: "button",
      "aria-label": "Close"
    },
    on: {
      click: function click($event) {
        return _vm.Cerrar();
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
  }), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-4 mb-3"
  }, [_c("label", [_vm._v("Ubicación de trabajo")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.ubicacion,
      expression: "ubicacion"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      "data-vv-name": "ubicacion"
    },
    domProps: {
      value: _vm.ubicacion
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.ubicacion = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("ubicacion")))])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4 mb-3"
  }, [_c("label", [_vm._v("Número de permiso")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.permiso,
      expression: "permiso"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      "data-vv-name": "permiso"
    },
    domProps: {
      value: _vm.permiso
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.permiso = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("permiso")))])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4 mb-3"
  }, [_c("label", [_vm._v("Fecha")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.fecha,
      expression: "fecha"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date",
      "data-vv-name": "fecha"
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
  }, [_vm._v(_vm._s(_vm.errors.first("fecha")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-8 mb-3"
  }, [_c("label", [_vm._v("Descripción del trabajo")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.descripcion,
      expression: "descripcion"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    attrs: {
      "data-vv-name": "descripcion",
      rows: "2",
      cols: "40"
    },
    domProps: {
      value: _vm.descripcion
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.descripcion = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("descripcion")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-5 mb-3"
  }, [_c("label", [_vm._v("Seleccione")]), _vm._v(" "), _c("v-select", {
    attrs: {
      options: _vm.listaCatalogo,
      label: "secuencia",
      "data-vv-name": "catalogo"
    },
    model: {
      value: _vm.catalogo,
      callback: function callback($$v) {
        _vm.catalogo = $$v;
      },
      expression: "catalogo"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("catalogo")))])], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-4 mb-3"
  }, [_c("label", [_vm._v("Supervisor")]), _vm._v(" "), _c("v-select", {
    attrs: {
      options: _vm.vs_options,
      label: "name",
      "data-vv-as": "operaciones"
    },
    model: {
      value: _vm.supervisor,
      callback: function callback($$v) {
        _vm.supervisor = $$v;
      },
      expression: "supervisor"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" ")]), _c("br"), _vm._v(" "), _c("button", {
    staticClass: "btn btn-outline-dark",
    attrs: {
      name: "button"
    },
    on: {
      click: function click($event) {
        return _vm.guardarasignacion();
      }
    }
  }, [_vm._v("Crear")])])]), _vm._v(" "), _c("hr"), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._l(_vm.listado_data, function (vi, index) {
    return _c("li", {
      staticClass: "list-group-item"
    }, [_c("div", {
      staticClass: "form-row"
    }, [_c("div", {
      staticClass: "form-group col-md-3"
    }, [_c("label", [_vm._v(_vm._s(vi.actividad))])]), _vm._v(" "), _c("div", {
      staticClass: "form-group col-md-2"
    }, [_c("label", [_vm._v(_vm._s(vi.riesgo))])]), _vm._v(" "), _c("div", {
      staticClass: "form-group col-md-3"
    }, [_c("label", [_vm._v(_vm._s(vi.medidas))])]), _vm._v(" "), _c("div", {
      staticClass: "form-group col-md-2"
    }, [_c("label", [_vm._v(_vm._s(vi.supervisor))])]), _vm._v(" "), _c("div", {
      staticClass: "form-group col-md-2"
    }, [vi.temp ? _c("a", {
      on: {
        click: function click($event) {
          return _vm.deleteu(index);
        }
      }
    }, [_c("span", {
      staticClass: "fas fa-trash",
      attrs: {
        "arial-hidden": "true"
      }
    })]) : _c("a", {
      on: {
        click: function click($event) {
          return _vm.BorrarRiesgo(vi.id);
        }
      }
    }, [_c("span", {
      staticClass: "fas fa-trash",
      attrs: {
        "arial-hidden": "true"
      }
    })])])])]);
  }), _vm._v(" "), _c("hr"), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-6 mb-3"
  }, [_c("label", [_vm._v("Responsable del Área (Operaciones)")]), _vm._v(" "), _c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    attrs: {
      options: _vm.vs_options,
      label: "name",
      "data-vv-name": "operaciones"
    },
    model: {
      value: _vm.operaciones,
      callback: function callback($$v) {
        _vm.operaciones = $$v;
      },
      expression: "operaciones"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("operaciones")))])], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 mb-3"
  }, [_c("label", [_vm._v("Responsable del Área (SSMA)")]), _vm._v(" "), _c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    attrs: {
      options: _vm.vs_options,
      label: "name",
      "data-vv-name": "shso"
    },
    model: {
      value: _vm.shso,
      callback: function callback($$v) {
        _vm.shso = $$v;
      },
      expression: "shso"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("shso")))])], 1)])], 2), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("button", {
    staticClass: "btn btn-outline-dark",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.Cerrar();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-window-close"
  }), _vm._v(" Cerrar\n                            ")]), _vm._v(" "), _c("button", {
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
  }, [_vm._v("\n                                Guardar\n                            ")]), _vm._v(" "), _c("button", {
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
  }, [_vm._v("\n                                Actualizar\n                            ")])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "modal fade",
    "class": {
      mostrar: _vm.modal_participantes
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
  }, [_vm._v("Participantes")]), _vm._v(" "), _c("button", {
    staticClass: "close",
    attrs: {
      type: "button",
      "aria-label": "Close"
    },
    on: {
      click: function click($event) {
        return _vm.cerrarModalP();
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
  }), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-6 mb-3"
  }, [_c("label", [_vm._v("Empleado")]), _vm._v(" "), _c("v-select", {
    attrs: {
      options: _vm.vs_options,
      label: "name",
      "data-vv-as": "shso"
    },
    model: {
      value: _vm.empleado,
      callback: function callback($$v) {
        _vm.empleado = $$v;
      },
      expression: "empleado"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-4 mb-3"
  }, [_c("label", [_vm._v(" ")]), _c("br"), _vm._v(" "), _c("button", {
    staticClass: "btn btn-outline-dark",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.agregarEmpleado();
      }
    }
  }, [_vm._v("Agregar")])])]), _vm._v(" "), _c("v-client-table", {
    attrs: {
      data: _vm.tableDataParticipantes,
      options: _vm.optionsParticipantes,
      columns: _vm.columnsParticipantes
    },
    scopedSlots: _vm._u([{
      key: "empleado_id",
      fn: function fn(props) {
        return [_c("a", {
          on: {
            click: function click($event) {
              return _vm.eliminarParticipante(props.row.empleado_id);
            }
          }
        }, [_c("span", {
          staticClass: "fas fa-trash",
          attrs: {
            "arial-hidden": "true"
          }
        })])];
      }
    }])
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("button", {
    staticClass: "btn btn-outline-dark",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.cerrarModalP();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-window-close"
  }), _vm._v(" Cerrar\n                            ")])])])])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-3"
  }, [_c("label", [_c("b", [_vm._v("Actividad")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-2"
  }, [_c("label", [_c("b", [_vm._v("Riesgos")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-3"
  }, [_c("label", [_c("b", [_vm._v("Medidas")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-2"
  }, [_c("label", [_c("b", [_vm._v("Supervisor")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-2"
  }, [_c("label", [_c("b", [_vm._v("ACCIONES")])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/BitacoraResiduos.vue?vue&type=template&id=598bffc3":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/BitacoraResiduos.vue?vue&type=template&id=598bffc3 ***!
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
  }, [_c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.detalle == false,
      expression: "detalle == false"
    }],
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("i", {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" Bitacora RP-RME\n        "), _c("button", {
    staticClass: "btn btn-dark float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.abrirModal("bitacora", "registrar_gral");
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  }), _vm._v(" Nuevo\n        ")])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("v-client-table", {
    attrs: {
      data: _vm.tableDataGral,
      options: _vm.options_gral,
      columns: _vm.columns_gral
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
        }, [_c("a", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button",
            href: "#"
          },
          on: {
            click: function click($event) {
              return _vm.abrirModal("bitacora", "actualizar_gral", props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-pencil-alt"
        }), _vm._v(" Actualizar analisis\n                  ")]), _vm._v(" "), _c("a", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button",
            href: "#"
          },
          on: {
            click: function click($event) {
              return _vm.verdetalle(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-eye"
        }), _vm._v(" Detalle\n                  ")]), _vm._v(" "), _c("a", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button",
            href: "#"
          },
          on: {
            click: function click($event) {
              return _vm.eliminar(props.row.id);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-trash"
        }), _vm._v(" Eliminar\n                  ")])])])])];
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
              return _vm.descargar(props.row.id);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-download"
        }), _vm._v(" "), _c("i", {
          staticClass: "fas fa-file-pdf"
        })])];
      }
    }])
  })], 1)]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.detalle == true,
      expression: "detalle == true"
    }],
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("i", {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" Bitacora\n        "), _c("button", {
    staticClass: "btn btn-dark float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.abrirModal("bitacora", "registrar");
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  }), _vm._v(" Nuevo\n        ")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-secondary float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.atras();
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-arrow-left"
  }), _vm._v(" Atras\n        ")])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("v-client-table", {
    attrs: {
      data: _vm.tableData,
      columns: _vm.columns,
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
        }, [_c("a", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button",
            href: "#"
          },
          on: {
            click: function click($event) {
              $event.preventDefault();
              return _vm.abrirModal("bitacora", "actualizar", props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-pencil-alt"
        }), _vm._v(" Actualizar analisis\n                  ")])])])])];
      }
    }, {
      key: "tipo",
      fn: function fn(props) {
        return [props.row.tipo == 1 ? [_vm._v("\n              RME\n            ")] : _vm._e(), _vm._v(" "), props.row.tipo == 2 ? [_vm._v("\n              RP\n            ")] : _vm._e()];
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
  }, [_vm._v(_vm._s(_vm.tituloModal))]), _vm._v(" "), _c("button", {
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
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v("Fecha de ingreso (AT)")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.uno.fecha,
      expression: "uno.fecha"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date",
      "data-vv-name": "Fecha"
    },
    domProps: {
      value: _vm.uno.fecha
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.uno, "fecha", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Fecha")))])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 mb-3"
  }, [_c("label", [_vm._v("Tipo de Residuos")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.uno.tipo,
      expression: "uno.tipo"
    }],
    staticClass: "form-control",
    attrs: {
      "data-vv-name": "Tipo"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.uno, "tipo", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }), _vm._v(" "), _c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("RME")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "2"
    }
  }, [_vm._v("RP")])]), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Tipo")))])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-7 mb-3"
  }, [_c("label", [_vm._v("Nombre del residuo")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.uno.nombre,
      expression: "uno.nombre"
    }],
    staticClass: "form-control",
    attrs: {
      "data-vv-name": "Nombre"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.uno, "nombre", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_vm.uno.tipo == 2 ? _vm._l(_vm.list_residuos_dos, function (b, i) {
    return _c("option", {
      key: i,
      domProps: {
        value: b
      }
    }, [_vm._v(_vm._s(b.residuo.residuo))]);
  }) : _vm._e(), _vm._v(" "), _vm.uno.tipo == 1 ? _vm._l(_vm.list_residuos_uno, function (a, i) {
    return _c("option", {
      key: i,
      domProps: {
        value: a
      }
    }, [_vm._v(_vm._s(a.residuo.residuo))]);
  }) : _vm._e()], 2), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Nombre")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_vm.uno.nombre != "" ? [_c("div", {
    staticClass: "col-md-6 mb-3"
  }, [_c("label", [_vm._v("Area o proceso")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.uno.area_proceso,
      expression: "uno.area_proceso"
    }],
    staticClass: "form-control",
    attrs: {
      "data-vv-name": "Area"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.uno, "area_proceso", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, _vm._l(_vm.uno.nombre.fuente, function (t, i) {
    return _c("option", {
      key: i,
      domProps: {
        value: t.fuente_generacion
      }
    }, [_vm._v(_vm._s(t.fuente_generacion))]);
  }), 0), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Area")))])])] : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 mb-3"
  }, [_c("label", [_vm._v("Destino")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.destino,
      expression: "destino"
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
        _vm.destino = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c("option", {
    attrs: {
      selected: "",
      value: "1"
    }
  }, [_vm._v("Reuso")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "2"
    }
  }, [_vm._v("Recicle")])])])], 2), _vm._v(" "), _c("hr"), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-2 mb-3"
  }, [_c("label", [_vm._v("Cantidad")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.uno.cantidad,
      expression: "uno.cantidad"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      "data-vv-name": "Cantidad"
    },
    domProps: {
      value: _vm.uno.cantidad
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.uno, "cantidad", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Cantidad")))])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v("Unidad Medida")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.uno.unidad,
      expression: "uno.unidad"
    }],
    staticClass: "form-control",
    attrs: {
      "data-vv-name": "Unidad"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.uno, "unidad", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "KG"
    }
  }, [_vm._v("KILOGRAMO")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "LT"
    }
  }, [_vm._v("LITRO")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "GR"
    }
  }, [_vm._v("GRAMO")])]), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Unidad")))])]), _vm._v(" "), _vm.uno.tipo == 1 ? [_c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v("Fecha salida RME")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.uno.fecha_salida_rme,
      expression: "uno.fecha_salida_rme"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date"
    },
    domProps: {
      value: _vm.uno.fecha_salida_rme
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.uno, "fecha_salida_rme", $event.target.value);
      }
    }
  })])] : _vm._e()], 2), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_vm.uno.tipo == 2 ? [_c("div", {
    staticClass: "col-md-4 mb-3"
  }, [_c("label", [_vm._v("CRETIB")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dos.crebit,
      expression: "dos.crebit"
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
        _vm.$set(_vm.dos, "crebit", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("Corrosivo")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "2"
    }
  }, [_vm._v("Reactivo")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "3"
    }
  }, [_vm._v("Explosivo")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "4"
    }
  }, [_vm._v("Tóxico")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "5"
    }
  }, [_vm._v("Tóxico Ambiental")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "6"
    }
  }, [_vm._v("Tóxico Agudo")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "7"
    }
  }, [_vm._v("Tóxico Crónico")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "8"
    }
  }, [_vm._v("Inflamable")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "9"
    }
  }, [_vm._v("Biologicamente Infeccioso")])])])] : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v("Fecha Salida")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dos.fecha,
      expression: "dos.fecha"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date",
      "data-vv-name": "Salida"
    },
    domProps: {
      value: _vm.dos.fecha
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.dos, "fecha", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Salida")))])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-5 mb-3"
  }, [_c("label", [_vm._v("Proveedor")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dos.proveedor,
      expression: "dos.proveedor"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      "data-vv-name": "Proveedor"
    },
    domProps: {
      value: _vm.dos.proveedor
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.dos, "proveedor", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Proveedor")))])])], 2), _vm._v(" "), _vm.uno.tipo == 2 ? [_c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v("No. de Autorización")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dos.no_autorizacion,
      expression: "dos.no_autorizacion"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.dos.no_autorizacion
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.dos, "no_autorizacion", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v("Clave Generica")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dos.clave,
      expression: "dos.clave"
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
        _vm.$set(_vm.dos, "clave", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("SO1")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "2"
    }
  }, [_vm._v("O1")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "3"
    }
  }, [_vm._v("SO5")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "4"
    }
  }, [_vm._v("L5")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "5"
    }
  }, [_vm._v("1")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v("Núm De Manifiesto")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dos.num_manifiesto,
      expression: "dos.num_manifiesto"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.dos.num_manifiesto
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.dos, "num_manifiesto", $event.target.value);
      }
    }
  })])])] : _vm._e()], 2), _vm._v(" "), _c("div", {
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
  }, [_vm._v("\n                Actualizar\n              ")])])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "modal fade",
    "class": {
      mostrar: _vm.modal_gral
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
  }, [_vm._v(_vm._s(_vm.tituloModalGral))]), _vm._v(" "), _c("button", {
    staticClass: "close",
    attrs: {
      type: "button",
      "aria-label": "Close"
    },
    on: {
      click: function click($event) {
        return _vm.cerrarModalGral();
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
    staticClass: "col-md-2 mb-3"
  }, [_c("label", [_vm._v("Folio")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.folio,
      expression: "folio"
    }],
    staticClass: "form-control",
    attrs: {
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
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Folio")))])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-5 mb-3"
  }, [_c("label", [_vm._v("Localidad")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.localidad,
      expression: "localidad"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      "data-vv-name": "Localidad"
    },
    domProps: {
      value: _vm.localidad
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.localidad = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Localidad")))])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-5 mb-3"
  }, [_c("label", [_vm._v("Responsable")]), _vm._v(" "), _c("v-select", {
    attrs: {
      options: _vm.listaEmpleados,
      label: "name",
      "data-vv-name": "Responsable"
    },
    model: {
      value: _vm.responsable,
      callback: function callback($$v) {
        _vm.responsable = $$v;
      },
      expression: "responsable"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Responsable")))])], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("button", {
    staticClass: "btn btn-outline-dark",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.cerrarModalGral();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-window-close"
  }), _vm._v(" Cerrar\n            ")]), _vm._v(" "), _c("button", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.tipoAccionGral == 1,
      expression: "tipoAccionGral == 1"
    }],
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.GuardarGral(1);
      }
    }
  }, [_vm._v("\n              Guardar\n            ")]), _vm._v(" "), _c("button", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.tipoAccionGral == 2,
      expression: "tipoAccionGral == 2"
    }],
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.GuardarGral(0);
      }
    }
  }, [_vm._v("\n              Actualizar\n            ")])])])])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/Botiquines.vue?vue&type=template&id=541239cf":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/Botiquines.vue?vue&type=template&id=541239cf ***!
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
    staticClass: "container-fluid",
    staticStyle: {
      "min-height": "40vh"
    }
  }, [_vm.tipoCard == 1 ? _c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("i", {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" Inspección de Botiquines\n                "), _c("button", {
    staticClass: "btn btn-dark float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.AbrirModalInspeccion();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  }), _vm._v(" Nuevo\n                ")])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isInspecciones_loading
    }
  }), _vm._v(" "), _c("v-client-table", {
    attrs: {
      columns: _vm.columns_inspecciones,
      data: _vm.list_inspecciones,
      options: _vm.options_inspeccion
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
        }), _vm._v("  Acciones\n                                ")]), _vm._v(" "), _c("div", {
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
              return _vm.AbrirModalInspeccion(false, props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-edit"
        }), _vm._v("  Actualizar\n                                    ")]), _vm._v(" "), _c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.VerBotiquines(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-eye"
        }), _vm._v("  Ver\n                                    ")]), _vm._v(" "), _c("button", {
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
        }), _vm._v("  Descargar\n                                    ")])])])])];
      }
    }, {
      key: "tipo",
      fn: function fn(props) {
        return [props.row.tipo == 1 ? _c("p", [_vm._v("Portátil")]) : _vm._e(), _vm._v(" "), props.row.tipo == 2 ? _c("p", [_vm._v("Fijo")]) : _vm._e()];
      }
    }], null, false, 1345082423)
  })], 1)]) : _vm._e(), _vm._v(" "), _vm.tipoCard == 2 ? _c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("i", {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" Botiquín de " + _vm._s(_vm.area) + "\n                "), _c("button", {
    staticClass: "btn btn-dark float-sm-right mx-1",
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
  }), _vm._v(" Regresar\n                ")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-dark float-sm-right mx-1",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.AbrirModalBotiquin(true);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  }), _vm._v(" Nuevo\n                ")])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("v-client-table", {
    attrs: {
      columns: _vm.columns_botiquines,
      data: _vm.list_botiquines,
      options: _vm.options_botiquines
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
        }), _vm._v("  Acciones\n                                ")]), _vm._v(" "), _c("div", {
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
              return _vm.AbrirModalBotiquin(false, props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-edit"
        }), _vm._v("  Actualizar\n                                    ")])])])])];
      }
    }], null, false, 3665954911)
  })], 1)]) : _vm._e()]), _vm._v(" "), _vm.ver_modal_inspeccion ? _c("div", {
    staticClass: "modal fade",
    "class": {
      mostrar: _vm.ver_modal_inspeccion
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
      active: _vm.isGuardarBotiquin_loading
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
        return _vm.CerrarModalBotiquin();
      }
    }
  }, [_c("span", {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("×")])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
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
      value: _vm.inspeccion.fecha,
      expression: "inspeccion.fecha"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date",
      "data-vv-name": "Fecha"
    },
    domProps: {
      value: _vm.inspeccion.fecha
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.inspeccion, "fecha", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Fecha")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2 form-control-label"
  }, [_vm._v("Área")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required|max:50",
      expression: "'required|max:50'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.inspeccion.area,
      expression: "inspeccion.area"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      "data-vv-name": "Área",
      autocomplete: "off"
    },
    domProps: {
      value: _vm.inspeccion.area
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.inspeccion, "area", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Área")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2 form-control-label"
  }, [_vm._v("Tipo")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.inspeccion.tipo,
      expression: "inspeccion.tipo"
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
        _vm.$set(_vm.inspeccion, "tipo", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("Portátil")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "2"
    }
  }, [_vm._v("Fijo")])])]), _vm._v(" "), _c("label", {
    staticClass: "col-md-2 form-control-label"
  }, [_vm._v("No. de Botiquín")]), _vm._v(" "), _c("div", {
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
      value: _vm.inspeccion.numero,
      expression: "inspeccion.numero"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      min: "1",
      max: "100",
      "data-vv-name": "Número de Botiquín"
    },
    domProps: {
      value: _vm.inspeccion.numero
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.inspeccion, "numero", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Número de Botiquín")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-4 form-control-label"
  }, [_vm._v("El botiquín está en un lugar visible")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.inspeccion.visible,
      expression: "inspeccion.visible"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.inspeccion.visible, "1")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.inspeccion, "visible", "1");
      }
    }
  }), _vm._v(" Sí\n                                "), _c("span", {
    staticClass: "mx-5"
  }), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.inspeccion.visible,
      expression: "inspeccion.visible"
    }],
    attrs: {
      type: "radio",
      value: "2"
    },
    domProps: {
      checked: _vm._q(_vm.inspeccion.visible, "2")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.inspeccion, "visible", "2");
      }
    }
  }), _vm._v(" No\n                            ")])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-4 form-control-label"
  }, [_vm._v("El botiquín está en buen estado")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.inspeccion.buen_estado,
      expression: "inspeccion.buen_estado"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.inspeccion.buen_estado, "1")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.inspeccion, "buen_estado", "1");
      }
    }
  }), _vm._v(" Sí\n                                "), _c("span", {
    staticClass: "mx-5"
  }), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.inspeccion.buen_estado,
      expression: "inspeccion.buen_estado"
    }],
    attrs: {
      type: "radio",
      value: "2"
    },
    domProps: {
      checked: _vm._q(_vm.inspeccion.buen_estado, "2")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.inspeccion, "buen_estado", "2");
      }
    }
  }), _vm._v(" No\n                            ")])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2 form-control-label"
  }, [_vm._v("Inspector")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    attrs: {
      options: _vm.list_empleados,
      label: "nombre",
      "data-vv-name": "Inspector"
    },
    model: {
      value: _vm.inspeccion.inspector,
      callback: function callback($$v) {
        _vm.$set(_vm.inspeccion, "inspector", $$v);
      },
      expression: "inspeccion.inspector"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Inspector")))])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2 form-control-label"
  }, [_vm._v("Responsable")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    attrs: {
      options: _vm.list_empleados,
      label: "nombre"
    },
    model: {
      value: _vm.inspeccion.responsable,
      callback: function callback($$v) {
        _vm.$set(_vm.inspeccion, "responsable", $$v);
      },
      expression: "inspeccion.responsable"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Responsable")))])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2 form-control-label"
  }, [_vm._v("Recomendaciones")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-8"
  }, [_c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.inspeccion.recomendaciones,
      expression: "inspeccion.recomendaciones"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    attrs: {
      rows: "4",
      "data-vv-name": "Recomendaciones"
    },
    domProps: {
      value: _vm.inspeccion.recomendaciones
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.inspeccion, "recomendaciones", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Recomendaciones")))])])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("button", {
    staticClass: "btn btn-outline-dark",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.CerrarModalInspeccion();
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
        return _vm.GuardarInspeccion(true);
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
        return _vm.GuardarInspeccion(false);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Actualizar")]) : _vm._e()])], 1)])])]) : _vm._e(), _vm._v(" "), _vm.ver_modal_botiquin ? _c("div", {
    staticClass: "modal fade",
    "class": {
      mostrar: _vm.ver_modal_botiquin
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
      active: _vm.isGuardarInspeccion_loading
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "modal-header"
  }, [_c("h4", {
    staticClass: "modal-title",
    domProps: {
      textContent: _vm._s(_vm.tituloModal_Botiquin)
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "close",
    attrs: {
      type: "button",
      "aria-label": "Close"
    },
    on: {
      click: function click($event) {
        return _vm.CerrarModalBotiquin();
      }
    }
  }, [_c("span", {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("×")])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2 form-control-label"
  }, [_vm._v("Material")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-5"
  }, [_c("textarea", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.botiquin_modal.material,
      expression: "botiquin_modal.material"
    }],
    staticClass: "form-control",
    attrs: {
      maxlength: "100",
      "data-vv-name": "Material"
    },
    domProps: {
      value: _vm.botiquin_modal.material
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.botiquin_modal, "material", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Material")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-check form-inline"
  }, [_c("label", {
    staticClass: "form-check-label col-md-6"
  }, [_vm._v("\n                                    Elemento de apoyo\n                                ")]), _vm._v(" "), _c("label", {
    staticClass: "switch switch-default switch-pill switch-dark"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.botiquin_modal.apoyo,
      expression: "botiquin_modal.apoyo"
    }],
    staticClass: "switch-input",
    attrs: {
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.botiquin_modal.apoyo) ? _vm._i(_vm.botiquin_modal.apoyo, null) > -1 : _vm.botiquin_modal.apoyo
    },
    on: {
      change: function change($event) {
        var $$a = _vm.botiquin_modal.apoyo,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.botiquin_modal, "apoyo", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.botiquin_modal, "apoyo", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.botiquin_modal, "apoyo", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "switch-label"
  }), _vm._v(" "), _c("span", {
    staticClass: "switch-handle"
  })]), _vm._v(" "), _c("span", {
    staticClass: "ml-3"
  }, [_vm._v(_vm._s(_vm.botiquin_modal.apoyo ? "Sí" : "No"))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2 form-control-label"
  }, [_vm._v("Existencia")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required|decimal:0",
      expression: "'required|decimal:0'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.botiquin_modal.existencia,
      expression: "botiquin_modal.existencia"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      min: "1",
      step: "1",
      "data-vv-name": "Existencia"
    },
    domProps: {
      value: _vm.botiquin_modal.existencia
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.botiquin_modal, "existencia", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Existencia")))])]), _vm._v(" "), _c("label", {
    staticClass: "col-md-2 form-control-label"
  }, [_vm._v("Reposición")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required|decimal:0",
      expression: "'required|decimal:0'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.botiquin_modal.reposicion,
      expression: "botiquin_modal.reposicion"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      min: "0",
      step: "1",
      "data-vv-name": "Reposición"
    },
    domProps: {
      value: _vm.botiquin_modal.reposicion
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.botiquin_modal, "reposicion", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Reposición")))])]), _vm._v(" "), _c("label", {
    staticClass: "col-md-2 form-control-label"
  }, [_vm._v("Fecha de vencimiento")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.botiquin_modal.fecha_vencimiento,
      expression: "botiquin_modal.fecha_vencimiento"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date",
      "data-vv-name": "Fecha de vencimiento"
    },
    domProps: {
      value: _vm.botiquin_modal.fecha_vencimiento
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.botiquin_modal, "fecha_vencimiento", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Fecha de vencimiento")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2 form-control-label"
  }, [_vm._v("Observación")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-8"
  }, [_c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.botiquin_modal.observacion,
      expression: "botiquin_modal.observacion"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    attrs: {
      rows: "4",
      "data-vv-name": "Recomendaciones"
    },
    domProps: {
      value: _vm.botiquin_modal.observacion
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.botiquin_modal, "observacion", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Recomendaciones")))])])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("button", {
    staticClass: "btn btn-outline-dark",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.CerrarModalBotiquin();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-times"
  }), _vm._v(" Cerrar")]), _vm._v(" "), _vm.tipoAccion_botiquin == 1 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.GuardarBotiquin(true);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Guardar")]) : _vm._e(), _vm._v(" "), _vm.tipoAccion_botiquin == 2 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.GuardarBotiquin(false);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Actualizar")]) : _vm._e()])], 1)])])]) : _vm._e()]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/CatalogoAnalisis.vue?vue&type=template&id=16477ad0":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/CatalogoAnalisis.vue?vue&type=template&id=16477ad0 ***!
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
  return _c("div", {
    staticClass: "main"
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("i", {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" " + _vm._s(_vm.tipo == 1 ? "Catálogo Analisis" : _vm.tipo == 2 ? "Catálogo Residuos" : "Catálogos") + "\n            "), _c("button", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.tipo == 1,
      expression: "tipo == 1"
    }],
    staticClass: "btn btn-dark float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.AbrirModalAnalisis(true);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  }, [_vm._v(" ")]), _vm._v("Nuevo\n            ")]), _vm._v(" "), _c("button", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.tipo == 2,
      expression: "tipo == 2"
    }],
    staticClass: "btn btn-dark float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.AbrirModalResiduos(true);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  }, [_vm._v(" ")]), _vm._v("Nuevo\n            ")]), _vm._v(" "), _c("div", {
    staticClass: "dropdown float-sm-right"
  }, [_c("button", {
    staticClass: "btn btn-secondary dropdown-toggle",
    attrs: {
      type: "button",
      id: "dropmenub",
      "data-toggle": "dropdown",
      "aria-haspopup": "true",
      "aria-expanded": "false",
      name: "button"
    }
  }, [_vm._v("\n                    Tipo\n                ")]), _vm._v(" "), _c("div", {
    staticClass: "dropdown-menu",
    attrs: {
      "aria-labelledby": "dropdown"
    }
  }, [_c("button", {
    staticClass: "dropdown-item",
    on: {
      click: function click($event) {
        _vm.tipo = 1;
      }
    }
  }, [_vm._v("Analisis")]), _vm._v(" "), _c("button", {
    staticClass: "dropdown-item",
    on: {
      click: function click($event) {
        _vm.tipo = 2;
      }
    }
  }, [_vm._v("Residuos")])])])]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.tipo == 1,
      expression: "tipo == 1"
    }],
    staticClass: "card-body"
  }, [_c("div", {}, [_c("div", {}, [_c("v-client-table", {
    ref: "tbl_analisis",
    attrs: {
      columns: _vm.columns_analisis,
      data: _vm.list_analisis,
      options: _vm.options_analisis
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
        }), _vm._v("  Acciones\n                                ")]), _vm._v(" "), _c("div", {
          staticClass: "dropdown-menu"
        }, [_c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.AbrirModalAnalisis(false, props.row);
            }
          }
        }, [_c("i", {
          staticClass: "icon-pencil"
        }), _vm._v(" Actualizar\n                                    ")]), _vm._v(" "), _c("button", {
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
          staticClass: "fas fa-trash"
        }), _vm._v(" Eliminar\n                                    ")])])])];
      }
    }])
  })], 1)])]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.tipo == 2,
      expression: "tipo == 2"
    }],
    staticClass: "card-body"
  }, [_c("v-client-table", {
    attrs: {
      columns: _vm.columns_residuos,
      data: _vm.list_residuos,
      options: _vm.options_residuos
    },
    scopedSlots: _vm._u([{
      key: "residuo.id",
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
        }), _vm._v("  Acciones\n                        ")]), _vm._v(" "), _c("div", {
          staticClass: "dropdown-menu"
        }, [[_c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.AbrirModalResiduos(false, props.row);
            }
          }
        }, [_c("i", {
          staticClass: "icon-pencil"
        }), _vm._v(" Actualizar\n                                ")])]], 2)])];
      }
    }, {
      key: "fuente",
      fn: function fn(props) {
        return [_vm._l(props.row.fuente, function (t) {
          return [_vm._v("\n                        " + _vm._s(t.fuente_generacion) + ",\n                    ")];
        })];
      }
    }])
  })], 1), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.tipo == 0,
      expression: "tipo == 0"
    }],
    staticClass: "card-body"
  })]), _vm._v(" "), _c("div", {
    staticClass: "modal fade",
    "class": {
      mostrar: _vm.ver_modal_analisis
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
      textContent: _vm._s(_vm.titulo_modal_analisis)
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "close",
    attrs: {
      type: "button",
      "aria-label": "Close"
    },
    on: {
      click: function click($event) {
        return _vm.CerrarModalAnalisis();
      }
    }
  }, [_c("span", {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("×")])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Secuencia")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-9"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.analisis_modal.secuencia,
      expression: "analisis_modal.secuencia"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.analisis_modal.secuencia
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.analisis_modal, "secuencia", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Riesgo")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-9"
  }, [_c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.analisis_modal.riesgo,
      expression: "analisis_modal.riesgo"
    }],
    staticClass: "form-control",
    attrs: {
      name: "name",
      rows: "4",
      cols: "80"
    },
    domProps: {
      value: _vm.analisis_modal.riesgo
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.analisis_modal, "riesgo", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Recomendación")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-9"
  }, [_c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.analisis_modal.recomendacion,
      expression: "analisis_modal.recomendacion"
    }],
    staticClass: "form-control",
    attrs: {
      name: "name",
      rows: "4",
      cols: "80"
    },
    domProps: {
      value: _vm.analisis_modal.recomendacion
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.analisis_modal, "recomendacion", $event.target.value);
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
        return _vm.CerrarModalAnalisis();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-times"
  }), _vm._v(" Cerrar")]), _vm._v(" "), _vm.tipoAccion_modal_analisis == 1 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.GuardarAnalisis(1);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Guardar")]) : _vm._e(), _vm._v(" "), _vm.tipoAccion_modal_analisis == 2 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.GuardarAnalisis(0);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Actualizar")]) : _vm._e()])])])]), _vm._v(" "), _c("div", {
    staticClass: "modal fade",
    "class": {
      mostrar: _vm.ver_modal_residuos
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
      textContent: _vm._s(_vm.titulo_modal_residuos)
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "close",
    attrs: {
      type: "button",
      "aria-label": "Close"
    },
    on: {
      click: function click($event) {
        return _vm.CerrarModalResiduos();
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
    staticClass: "col-md-10 mb-3"
  }, [_c("label", [_vm._v("Residuo")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.residuos_modal.residuo,
      expression: "residuos_modal.residuo"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.residuos_modal.residuo
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.residuos_modal, "residuo", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 mb-3"
  }, [_c("label", [_vm._v("Tipo")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.residuos_modal.tipo,
      expression: "residuos_modal.tipo"
    }],
    staticClass: "form-control",
    attrs: {
      "data-vv-name": "Tipo"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.residuos_modal, "tipo", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }), _vm._v(" "), _c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("RME")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "2"
    }
  }, [_vm._v("RP")])])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-12 mb-3"
  }, [_c("label", [_vm._v("Fuente")]), _vm._v(" "), _c("v-select", {
    attrs: {
      taggable: "",
      multiple: ""
    },
    model: {
      value: _vm.residuos_modal.fuente,
      callback: function callback($$v) {
        _vm.$set(_vm.residuos_modal, "fuente", $$v);
      },
      expression: "residuos_modal.fuente"
    }
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("button", {
    staticClass: "btn btn-outline-dark",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.CerrarModalResiduos();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-times"
  }), _vm._v(" Cerrar")]), _vm._v(" "), _vm.tipoAccion_modal_residuos == 1 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.GuardarResiduos(1);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Guardar")]) : _vm._e(), _vm._v(" "), _vm.tipoAccion_modal_residuos == 2 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.GuardarResiduos(0);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Actualizar")]) : _vm._e()])])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/CatalogoAnalisis2.vue?vue&type=template&id=b2788c6c":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/CatalogoAnalisis2.vue?vue&type=template&id=b2788c6c ***!
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
    staticClass: "fas fa-list"
  }), _vm._v(" Caltálogo de análisis\n            "), _c("button", {
    staticClass: "btn btn-dark float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.AbrirModalAnalisis(true);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  }, [_vm._v(" ")]), _vm._v("Nuevo\n            ")])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("v-client-table", {
    ref: "tbl_analisis",
    attrs: {
      columns: _vm.columns_analisis,
      data: _vm.list_analisis,
      options: _vm.options_analisis
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
        }), _vm._v("  Acciones\n                        ")]), _vm._v(" "), _c("div", {
          staticClass: "dropdown-menu"
        }, [[_c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.AbrirModalAnalisis(false, props.row);
            }
          }
        }, [_c("i", {
          staticClass: "icon-pencil"
        }), _vm._v(" Actualizar\n                                ")])]], 2)])];
      }
    }])
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "modal fade",
    "class": {
      mostrar: _vm.ver_modal_analisis
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
      textContent: _vm._s(_vm.titulo_modal_analisis)
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "close",
    attrs: {
      type: "button",
      "aria-label": "Close"
    },
    on: {
      click: function click($event) {
        return _vm.CerrarModalAnalisis();
      }
    }
  }, [_c("span", {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("×")])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Secuencia")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-9"
  }, [_c("v-select", {
    attrs: {
      label: "nombre",
      options: _vm.listSecuencias
    },
    on: {
      input: _vm.SecuenciaInput
    },
    model: {
      value: _vm.analisis_modal.secuencia,
      callback: function callback($$v) {
        _vm.$set(_vm.analisis_modal, "secuencia", $$v);
      },
      expression: "analisis_modal.secuencia"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Riesgo")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-9"
  }, [_c("v-select", {
    attrs: {
      label: "nombre",
      options: _vm.listRiesgos
    },
    on: {
      input: _vm.RiesgoInput
    },
    model: {
      value: _vm.analisis_modal.riesgo,
      callback: function callback($$v) {
        _vm.$set(_vm.analisis_modal, "riesgo", $$v);
      },
      expression: "analisis_modal.riesgo"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Recomendación")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-9"
  }, [_c("v-select", {
    attrs: {
      label: "nombre",
      options: _vm.listRecomendaciones
    },
    on: {
      input: _vm.RecomendacionInput
    },
    model: {
      value: _vm.analisis_modal.recomendacion,
      callback: function callback($$v) {
        _vm.$set(_vm.analisis_modal, "recomendacion", $$v);
      },
      expression: "analisis_modal.recomendacion"
    }
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("button", {
    staticClass: "btn btn-outline-dark",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.CerrarModalAnalisis();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-times"
  }), _vm._v(" Cerrar")]), _vm._v(" "), _vm.tipoAccion_modal_analisis == 1 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.GuardarAnalisis(1);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Guardar")]) : _vm._e(), _vm._v(" "), _vm.tipoAccion_modal_analisis == 2 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.GuardarAnalisis(0);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Actualizar")]) : _vm._e()])])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/Catalogos/Folios.vue?vue&type=template&id=09918b9c":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/Catalogos/Folios.vue?vue&type=template&id=09918b9c ***!
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
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.tipoCardFolios_Permisos == 1,
      expression: "tipoCardFolios_Permisos==1"
    }],
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("i", {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" FOLIO DE PROYECTOS\n            "), _vm.PermisosCRUD.Create ? [_c("button", {
    staticClass: "btn btn-dark float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.AbrirModalFolios_Permisos(true);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus mr-1"
  }), _vm._v("Nuevo\n                ")])] : _vm._e()], 2), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isObtenerfolios_permisos_loading
    }
  }), _vm._v(" "), _c("v-client-table", {
    attrs: {
      columns: _vm.columns_folios_permisos,
      data: _vm.list_folios_permisos,
      options: _vm.options_folios_permisos
    }
  })], 1)]), _vm._v(" "), _vm.ver_modal_folios_permisos ? _c("div", {
    staticClass: "modal fade",
    "class": {
      mostrar: _vm.ver_modal_folios_permisos
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
      textContent: _vm._s(_vm.tituloModal_folios_permisos)
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "close",
    attrs: {
      type: "button",
      "aria-label": "Close"
    },
    on: {
      click: function click($event) {
        return _vm.CerrarModalFolios_Permisos();
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
      active: _vm.isGuardarfolios_permisos_loading
    }
  }), _vm._v(" "), _c("div", [_c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Proyecto")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-9"
  }, [_c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    attrs: {
      label: "nombre_corto",
      options: _vm.list_proyectos,
      "data-vv-name": "Proyecto"
    },
    model: {
      value: _vm.folios_permisos.proyecto,
      callback: function callback($$v) {
        _vm.$set(_vm.folios_permisos, "proyecto", $$v);
      },
      expression: "folios_permisos.proyecto"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Proyecto")))])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Nombre")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.folios_permisos.nombre,
      expression: "folios_permisos.nombre"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      maxlength: "5",
      minlength: "1",
      "data-vv-name": "Nombre",
      autocomplete: "off"
    },
    domProps: {
      value: _vm.folios_permisos.nombre
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.folios_permisos, "nombre", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Nombre")))])])])])], 1), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isGuardarfolios_permisos_loading
    }
  }), _vm._v(" "), _c("div", [_c("button", {
    staticClass: "btn btn-outline-dark",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.CerrarModalFolios_Permisos();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-window-close"
  }), _vm._v(" Cerrar\n                            ")]), _vm._v(" "), _vm.tipoAccion_folios_permisos == 1 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.RegistrarFolios_Permisos(true);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Guardar\n                            ")]) : _vm._e()])], 1)])])])]) : _vm._e()]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/InspeccionEpp.vue?vue&type=template&id=192b409a":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/InspeccionEpp.vue?vue&type=template&id=192b409a ***!
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
  return _c("main", {
    staticClass: "main"
  }, [_c("div", {
    staticClass: "container-fluid",
    staticStyle: {
      "min-height": "40vh"
    }
  }, [_vm.tipoCard == 1 ? _c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("i", {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" Inspección de EPP\n                "), _c("button", {
    staticClass: "btn btn-dark float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.AbrirModalInspeccion();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  }), _vm._v(" Nuevo\n                ")])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isInspeccion_loading
    }
  }), _vm._v(" "), _c("v-client-table", {
    attrs: {
      columns: _vm.columns_inspecciones,
      data: _vm.list_inspecciones,
      options: _vm.options_inspecciones
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
        }), _vm._v("  Acciones\n                                ")]), _vm._v(" "), _c("div", {
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
              return _vm.AbrirModalInspeccion(false, props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-edit"
        }), _vm._v("  Actualizar\n                                    ")]), _vm._v(" "), _c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.VerParticipantes(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-users"
        }), _vm._v("  Ver participantes\n                                    ")]), _vm._v(" "), _c("button", {
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
        }), _vm._v("  Descargar\n                                    ")])])])])];
      }
    }], null, false, 2740052029)
  })], 1)]) : _vm._e(), _vm._v(" "), _vm.tipoCard == 2 ? _c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("i", {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" Participantes\n                "), _c("button", {
    staticClass: "btn btn-dark float-sm-right mx-1",
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
  }), _vm._v(" Regresar\n                ")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-dark float-sm-right mx-1",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.AbrirModalTrabajador(true);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  }), _vm._v(" Nuevo\n                ")])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isParticipantes_loading
    }
  }), _vm._v(" "), _c("v-client-table", {
    attrs: {
      columns: _vm.columns_participantes,
      data: _vm.list_participantes,
      options: _vm.options_participantes
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
        }), _vm._v("  Acciones\n                                ")]), _vm._v(" "), _c("div", {
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
              return _vm.AbrirModalTrabajador(false, props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-edit"
        }), _vm._v("  Detalles\n                                    ")])])])])];
      }
    }], null, false, 38627062)
  })], 1)]) : _vm._e()]), _vm._v(" "), _vm.ver_modal_inspecciones ? _c("div", {
    staticClass: "modal fade",
    "class": {
      mostrar: _vm.ver_modal_inspecciones
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
      active: _vm.isGuardarpl_loading
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
        return _vm.CerrarModalInspeccion();
      }
    }
  }, [_c("span", {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("×")])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2 form-control-label"
  }, [_vm._v("Fecha")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.Inspeccion.fecha,
      expression: "Inspeccion.fecha"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date",
      "data-vv-name": "Fecha"
    },
    domProps: {
      value: _vm.Inspeccion.fecha
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.Inspeccion, "fecha", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Fecha")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2 form-control-label"
  }, [_vm._v("Ubicación")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required|max:50",
      expression: "'required|max:50'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.Inspeccion.ubicacion,
      expression: "Inspeccion.ubicacion"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      "data-vv-name": "Ubicación",
      autocomplete: "off"
    },
    domProps: {
      value: _vm.Inspeccion.ubicacion
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.Inspeccion, "ubicacion", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Ubicación")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2 form-control-label"
  }, [_vm._v("Realizó")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    attrs: {
      options: _vm.list_empleados,
      "data-vv-name": "Realizó",
      label: "nombre"
    },
    model: {
      value: _vm.Inspeccion.realiza,
      callback: function callback($$v) {
        _vm.$set(_vm.Inspeccion, "realiza", $$v);
      },
      expression: "Inspeccion.realiza"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Realizó")))])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2 form-control-label"
  }, [_vm._v("Revisó")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    attrs: {
      options: _vm.list_empleados,
      "data-vv-name": "Revisó",
      label: "nombre"
    },
    model: {
      value: _vm.Inspeccion.revisa,
      callback: function callback($$v) {
        _vm.$set(_vm.Inspeccion, "revisa", $$v);
      },
      expression: "Inspeccion.revisa"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Revisó")))])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2 form-control-label"
  }, [_vm._v("Observaciones")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.Inspeccion.observaciones,
      expression: "Inspeccion.observaciones"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    attrs: {
      "data-vv-name": "Observaciones"
    },
    domProps: {
      value: _vm.Inspeccion.observaciones
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.Inspeccion, "observaciones", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Observaciones")))])])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("button", {
    staticClass: "btn btn-outline-dark",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.CerrarModalInspeccion();
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
        return _vm.GuardarInspeccion(true);
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
        return _vm.GuardarInspeccion(false);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Actualizar")]) : _vm._e()])], 1)])])]) : _vm._e(), _vm._v(" "), _vm.ver_modal_trabajador ? _c("div", {
    staticClass: "modal fade",
    "class": {
      mostrar: _vm.ver_modal_trabajador
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
      active: _vm.isGuardarparticip_loading
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "modal-header"
  }, [_c("h4", {
    staticClass: "modal-title",
    domProps: {
      textContent: _vm._s(_vm.tituloModal_trabajador)
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "close",
    attrs: {
      type: "button",
      "aria-label": "Close"
    },
    on: {
      click: function click($event) {
        return _vm.CerrarModalTrabajador();
      }
    }
  }, [_c("span", {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("×")])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2 form-control-label"
  }, [_vm._v("Empleado")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-5"
  }, [_c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    attrs: {
      disabled: _vm.tipoAccion_trabajador == 2,
      options: _vm.list_empleados,
      "data-vv-name": "Empleado",
      label: "nombre"
    },
    model: {
      value: _vm.trabajador.empleado,
      callback: function callback($$v) {
        _vm.$set(_vm.trabajador, "empleado", $$v);
      },
      expression: "trabajador.empleado"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Empleado")))])], 1)]), _vm._v(" "), _c("br"), _vm._v(" "), _c("hr"), _vm._v(" "), _c("p", {
    staticClass: "h5 text-mutted my-2 mb-3"
  }, [_vm._v("Equipo de Protección Personal")]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-5 form-control-label font-weight-bold1"
  }, [_vm._v("Overol o ropa de algodón RF")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.trabajador.epp_overol,
      expression: "trabajador.epp_overol"
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
        _vm.$set(_vm.trabajador, "epp_overol", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, _vm._l(_vm.opciones, function (op, i) {
    return _c("option", {
      key: i,
      domProps: {
        value: op.clave
      }
    }, [_vm._v(_vm._s(op.nombre))]);
  }), 0)])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-5 form-control-label font-weight-bold1"
  }, [_vm._v("Calzado de Seguridad")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.trabajador.epp_calzado,
      expression: "trabajador.epp_calzado"
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
        _vm.$set(_vm.trabajador, "epp_calzado", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, _vm._l(_vm.opciones, function (op, i) {
    return _c("option", {
      key: i,
      domProps: {
        value: op.clave
      }
    }, [_vm._v(_vm._s(op.nombre))]);
  }), 0)])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-5 form-control-label font-weight-bold1"
  }, [_vm._v("Casco con logo ")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.trabajador.epp_casco,
      expression: "trabajador.epp_casco"
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
        _vm.$set(_vm.trabajador, "epp_casco", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, _vm._l(_vm.opciones, function (op, i) {
    return _c("option", {
      key: i,
      domProps: {
        value: op.clave
      }
    }, [_vm._v(_vm._s(op.nombre))]);
  }), 0)])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-5 form-control-label font-weight-bold1"
  }, [_vm._v("Guantes adecuados al riesgo de trabajo")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.trabajador.epp_guantes,
      expression: "trabajador.epp_guantes"
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
        _vm.$set(_vm.trabajador, "epp_guantes", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, _vm._l(_vm.opciones, function (op, i) {
    return _c("option", {
      key: i,
      domProps: {
        value: op.clave
      }
    }, [_vm._v(_vm._s(op.nombre))]);
  }), 0)])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-5 form-control-label font-weight-bold1"
  }, [_vm._v("Protección ocular")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.trabajador.epp_ocular,
      expression: "trabajador.epp_ocular"
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
        _vm.$set(_vm.trabajador, "epp_ocular", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, _vm._l(_vm.opciones, function (op, i) {
    return _c("option", {
      key: i,
      domProps: {
        value: op.clave
      }
    }, [_vm._v(_vm._s(op.nombre))]);
  }), 0)])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-5 form-control-label font-weight-bold1"
  }, [_vm._v("Protección respiratoria")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.trabajador.epp_respiratoria,
      expression: "trabajador.epp_respiratoria"
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
        _vm.$set(_vm.trabajador, "epp_respiratoria", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, _vm._l(_vm.opciones, function (op, i) {
    return _c("option", {
      key: i,
      domProps: {
        value: op.clave
      }
    }, [_vm._v(_vm._s(op.nombre))]);
  }), 0)])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-5 form-control-label font-weight-bold1"
  }, [_vm._v("Protección Auditiva")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.trabajador.epp_auditiva,
      expression: "trabajador.epp_auditiva"
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
        _vm.$set(_vm.trabajador, "epp_auditiva", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, _vm._l(_vm.opciones, function (op, i) {
    return _c("option", {
      key: i,
      domProps: {
        value: op.clave
      }
    }, [_vm._v(_vm._s(op.nombre))]);
  }), 0)])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-5 form-control-label font-weight-bold1"
  }, [_vm._v("Barbiquejo")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.trabajador.epp_barbiquejo,
      expression: "trabajador.epp_barbiquejo"
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
        _vm.$set(_vm.trabajador, "epp_barbiquejo", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, _vm._l(_vm.opciones, function (op, i) {
    return _c("option", {
      key: i,
      domProps: {
        value: op.clave
      }
    }, [_vm._v(_vm._s(op.nombre))]);
  }), 0)])]), _vm._v(" "), _c("br"), _vm._v(" "), _c("hr"), _vm._v(" "), _c("p", {
    staticClass: "h5 text-mutted my-2 mb-3"
  }, [_vm._v("Equipo de Protección Personal")]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-5 form-control-label font-weight-bold1"
  }, [_vm._v("Protección Respiratoria ERA")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.trabajador.epa_respiratoria,
      expression: "trabajador.epa_respiratoria"
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
        _vm.$set(_vm.trabajador, "epa_respiratoria", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, _vm._l(_vm.opciones, function (op, i) {
    return _c("option", {
      key: i,
      domProps: {
        value: op.clave
      }
    }, [_vm._v(_vm._s(op.nombre))]);
  }), 0)])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-5 form-control-label font-weight-bold1"
  }, [_vm._v("Arnes de Seguridad")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.trabajador.epa_arnes,
      expression: "trabajador.epa_arnes"
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
        _vm.$set(_vm.trabajador, "epa_arnes", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, _vm._l(_vm.opciones, function (op, i) {
    return _c("option", {
      key: i,
      domProps: {
        value: op.clave
      }
    }, [_vm._v(_vm._s(op.nombre))]);
  }), 0)])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-5 form-control-label font-weight-bold1"
  }, [_vm._v("Careta Facial")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.trabajador.epa_careta,
      expression: "trabajador.epa_careta"
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
        _vm.$set(_vm.trabajador, "epa_careta", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, _vm._l(_vm.opciones, function (op, i) {
    return _c("option", {
      key: i,
      domProps: {
        value: op.clave
      }
    }, [_vm._v(_vm._s(op.nombre))]);
  }), 0)])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-5 form-control-label font-weight-bold1"
  }, [_vm._v("Mangas, peto, polainas,rodillera ")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.trabajador.epa_mangas,
      expression: "trabajador.epa_mangas"
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
        _vm.$set(_vm.trabajador, "epa_mangas", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, _vm._l(_vm.opciones, function (op, i) {
    return _c("option", {
      key: i,
      domProps: {
        value: op.clave
      }
    }, [_vm._v(_vm._s(op.nombre))]);
  }), 0)])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-5 form-control-label font-weight-bold1"
  }, [_vm._v("Mascarilla de media cara/Cara completa")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.trabajador.epa_mascarilla,
      expression: "trabajador.epa_mascarilla"
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
        _vm.$set(_vm.trabajador, "epa_mascarilla", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, _vm._l(_vm.opciones, function (op, i) {
    return _c("option", {
      key: i,
      domProps: {
        value: op.clave
      }
    }, [_vm._v(_vm._s(op.nombre))]);
  }), 0)])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("button", {
    staticClass: "btn btn-outline-dark",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.CerrarModalTrabajador();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-times"
  }), _vm._v(" Cerrar")]), _vm._v(" "), _vm.tipoAccion_trabajador == 1 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.GuardarTrabajador(true);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Guardar")]) : _vm._e(), _vm._v(" "), _vm.tipoAccion_trabajador == 2 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.GuardarTrabajador(false);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Actualizar")]) : _vm._e()])], 1)])])]) : _vm._e()]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/ListaAsistencia.vue?vue&type=template&id=e236add2":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/ListaAsistencia.vue?vue&type=template&id=e236add2 ***!
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
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header"
  }), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-3"
  }, [_c("label", [_vm._v("Fecha")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.date,
      expression: "date"
    }],
    ref: "date_two",
    staticClass: "form-control",
    attrs: {
      type: "date"
    },
    domProps: {
      value: _vm.date
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.date = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-3"
  }, [_c("label", [_vm._v("Tipo")]), _vm._v(" "), _c("select", {
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
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.tipo = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("Asistencia")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "2"
    }
  }, [_vm._v("Ubicacion")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-2"
  }, [_vm.tipo == 1 ? [_c("label", [_vm._v("Generar Reporte")]), _vm._v(" "), _c("br"), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.reporte_estado,
      expression: "reporte_estado"
    }],
    staticClass: "form-control",
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.reporte_estado = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, _vm.generate]
    }
  }, [_c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("Conserflow Semanal")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "2"
    }
  }, [_vm._v("Conserflow Quincenal")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "3"
    }
  }, [_vm._v("CSCT Semanal")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "4"
    }
  }, [_vm._v("CSCT Quincenal")])])] : _vm._e(), _vm._v(" "), _vm.tipo == 2 ? [_c("label", [_vm._v("Generar Reporte")]), _vm._v(" "), _c("br"), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.nave,
      expression: "nave"
    }],
    staticClass: "form-control",
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.nave = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, _vm.generate]
    }
  }, [_c("option", {
    attrs: {
      value: "Nave 1"
    }
  }, [_vm._v("Nave 1")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Nave 2"
    }
  }, [_vm._v("Nave 2")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Nave 4"
    }
  }, [_vm._v("Nave 4")])])] : _vm._e()], 2)])])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/NuevoAnalisisSeguridad.vue?vue&type=template&id=1886a47a":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/NuevoAnalisisSeguridad.vue?vue&type=template&id=1886a47a ***!
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
  }), _vm._v(" ANÁLISIS DE SEGURIDAD EN EL TRABAJO (AST)\n\n                "), _c("button", {
    staticClass: "btn btn-dark float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.abrirModal(true);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  }), _vm._v(" Nuevo\n                ")])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("v-client-table", {
    attrs: {
      data: _vm.tableData,
      columns: _vm.columns,
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
        }, [_c("a", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button",
            href: "#"
          },
          on: {
            click: function click($event) {
              $event.preventDefault();
              return _vm.abrirModal(false, props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-pencil-alt"
        }), _vm._v(" Actualizar analisis\n                                    ")]), _vm._v(" "), _c("a", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button",
            href: "#"
          },
          on: {
            click: function click($event) {
              return _vm.participantes(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-user-friends"
        }), _vm._v(" Agregar Participantes\n                                    ")]), _vm._v(" "), _c("a", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button",
            href: "#"
          },
          on: {
            click: function click($event) {
              return _vm.eliminar(props.row.id);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-trash"
        }), _vm._v(" Eliminar\n                                    ")])])])])];
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
              return _vm.descargar(props.row.id);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-download"
        }), _vm._v(" "), _c("i", {
          staticClass: "fas fa-file-pdf"
        })])];
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
  }, [_vm._v(_vm._s(_vm.tituloModal))]), _vm._v(" "), _c("button", {
    staticClass: "close",
    attrs: {
      type: "button",
      "aria-label": "Close"
    },
    on: {
      click: function click($event) {
        return _vm.Cerrar();
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
  }), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-4 mb-3"
  }, [_c("label", [_vm._v("Ubicación de trabajo")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.ubicacion,
      expression: "ubicacion"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      "data-vv-name": "ubicacion"
    },
    domProps: {
      value: _vm.ubicacion
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.ubicacion = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("ubicacion")))])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4 mb-3"
  }, [_c("label", [_vm._v("Número de permiso")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.permiso,
      expression: "permiso"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      "data-vv-name": "permiso"
    },
    domProps: {
      value: _vm.permiso
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.permiso = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("permiso")))])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4 mb-3"
  }, [_c("label", [_vm._v("Fecha")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.fecha,
      expression: "fecha"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date",
      "data-vv-name": "fecha"
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
  }, [_vm._v(_vm._s(_vm.errors.first("fecha")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-12 mb-3"
  }, [_c("label", [_vm._v("Descripción del trabajo")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.descripcion,
      expression: "descripcion"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    attrs: {
      "data-vv-name": "descripcion",
      rows: "3",
      cols: "40"
    },
    domProps: {
      value: _vm.descripcion
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.descripcion = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("descripcion")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-10 mb-3"
  }, [_c("label", [_vm._v("Análisis")]), _vm._v(" "), _c("v-select", {
    attrs: {
      options: _vm.listaCatalogo,
      label: "nombre",
      "data-vv-name": "Análisis"
    },
    on: {
      input: _vm.ObtenerRiesgos
    },
    model: {
      value: _vm.analisis,
      callback: function callback($$v) {
        _vm.analisis = $$v;
      },
      expression: "analisis"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Análisis")))])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-10 mb-3"
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isLoadingRiesgos
    }
  }), _vm._v(" "), _c("label", [_vm._v("Riesgo - Recomendación")]), _vm._v(" "), _c("v-select", {
    attrs: {
      options: _vm.listRecomendaciones,
      label: "riesgo_recomen",
      "data-vv-name": "Recomendación"
    },
    model: {
      value: _vm.recomendacion,
      callback: function callback($$v) {
        _vm.recomendacion = $$v;
      },
      expression: "recomendacion"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Recomendación")))])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-7 mb-3"
  }, [_c("label", [_vm._v("Supervisor")]), _vm._v(" "), _c("v-select", {
    attrs: {
      options: _vm.vs_options,
      label: "name",
      "data-vv-as": "operaciones"
    },
    model: {
      value: _vm.supervisor,
      callback: function callback($$v) {
        _vm.supervisor = $$v;
      },
      expression: "supervisor"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" ")]), _c("br"), _vm._v(" "), _c("button", {
    staticClass: "btn btn-outline-dark",
    attrs: {
      name: "button"
    },
    on: {
      click: function click($event) {
        return _vm.guardarasignacion();
      }
    }
  }, [_vm._v("Crear")])])]), _vm._v(" "), _c("hr"), _vm._v(" "), _vm._m(0), _vm._v(" "), _c("vue-element-loading", {
    attrs: {
      active: _vm.isLoadingPartidas
    }
  }), _vm._v(" "), _c("div", _vm._l(_vm.listado_data, function (analisis, index) {
    return _c("li", {
      staticClass: "list-group-item"
    }, [_c("div", {
      staticClass: "form-row"
    }, [_c("div", {
      staticClass: "form-group col-md-3"
    }, [_c("label", [_vm._v(_vm._s(analisis.analisis.nombre))])]), _vm._v(" "), _c("div", {
      staticClass: "form-group col-md-2"
    }, [_c("label", [_vm._v(_vm._s(analisis.riesgo_recomen.riesgo))])]), _vm._v(" "), _c("div", {
      staticClass: "form-group col-md-3"
    }, [_c("label", [_vm._v(_vm._s(analisis.riesgo_recomen.recomendacion))])]), _vm._v(" "), _c("div", {
      staticClass: "form-group col-md-2"
    }, [_c("label", [_vm._v(_vm._s(analisis.supervisor.name))])]), _vm._v(" "), _c("div", {
      staticClass: "form-group col-md-2"
    }, [analisis.temp ? _c("a", {
      on: {
        click: function click($event) {
          return _vm.BorrarTemp(index);
        }
      }
    }, [_c("span", {
      staticClass: "fas fa-trash",
      attrs: {
        "arial-hidden": "true"
      }
    })]) : _c("a", {
      on: {
        click: function click($event) {
          return _vm.Borrar(analisis.id);
        }
      }
    }, [_c("span", {
      staticClass: "fas fa-trash",
      attrs: {
        "arial-hidden": "true"
      }
    })])])])]);
  }), 0), _vm._v(" "), _c("hr"), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-6 mb-3"
  }, [_c("label", [_vm._v("Responsable del Área (Operaciones)")]), _vm._v(" "), _c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    attrs: {
      options: _vm.vs_options,
      label: "name",
      "data-vv-name": "operaciones"
    },
    model: {
      value: _vm.operaciones,
      callback: function callback($$v) {
        _vm.operaciones = $$v;
      },
      expression: "operaciones"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("operaciones")))])], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 mb-3"
  }, [_c("label", [_vm._v("Responsable del Área (SSMA)")]), _vm._v(" "), _c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    attrs: {
      options: _vm.vs_options,
      label: "name",
      "data-vv-name": "shso"
    },
    model: {
      value: _vm.shso,
      callback: function callback($$v) {
        _vm.shso = $$v;
      },
      expression: "shso"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("shso")))])], 1)])], 1), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("button", {
    staticClass: "btn btn-outline-dark",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.Cerrar();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-window-close"
  }), _vm._v(" Cerrar\n                            ")]), _vm._v(" "), _c("button", {
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
  }, [_vm._v("\n                                Guardar\n                            ")]), _vm._v(" "), _c("button", {
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
  }, [_vm._v("\n                                Actualizar\n                            ")])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "modal fade",
    "class": {
      mostrar: _vm.modal_participantes
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
  }, [_vm._v("Participantes")]), _vm._v(" "), _c("button", {
    staticClass: "close",
    attrs: {
      type: "button",
      "aria-label": "Close"
    },
    on: {
      click: function click($event) {
        return _vm.cerrarModalP();
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
  }), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-6 mb-3"
  }, [_c("label", [_vm._v("Empleado")]), _vm._v(" "), _c("v-select", {
    attrs: {
      options: _vm.list_empleados,
      label: "name",
      "data-vv-as": "shso"
    },
    model: {
      value: _vm.empleado,
      callback: function callback($$v) {
        _vm.empleado = $$v;
      },
      expression: "empleado"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-4 mb-3"
  }, [_c("label", [_vm._v(" ")]), _c("br"), _vm._v(" "), _c("button", {
    staticClass: "btn btn-outline-dark",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.agregarEmpleado();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  })])])]), _vm._v(" "), _c("vue-element-loading", {
    attrs: {
      active: _vm.isPartcipantesLoading
    }
  }), _vm._v(" "), _c("div", [_c("v-client-table", {
    attrs: {
      data: _vm.tableDataParticipantes,
      options: _vm.optionsParticipantes,
      columns: _vm.columnsParticipantes
    },
    scopedSlots: _vm._u([{
      key: "empleado_id",
      fn: function fn(props) {
        return [_c("a", {
          on: {
            click: function click($event) {
              return _vm.eliminarParticipante(props.row.empleado_id);
            }
          }
        }, [_c("span", {
          staticClass: "fas fa-trash",
          attrs: {
            "arial-hidden": "true"
          }
        })])];
      }
    }])
  })], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("button", {
    staticClass: "btn btn-outline-dark",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.cerrarModalP();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-window-close"
  }), _vm._v(" Cerrar\n                            ")])])])])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-3"
  }, [_c("label", [_c("b", [_vm._v("Actividad")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-2"
  }, [_c("label", [_c("b", [_vm._v("Riesgos")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-3"
  }, [_c("label", [_c("b", [_vm._v("Medidas")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-2"
  }, [_c("label", [_c("b", [_vm._v("Supervisor")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-2"
  }, [_c("label", [_c("b", [_vm._v("ACCIONES")])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/PermisoSeguridad.vue?vue&type=template&id=52fc26b1":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/PermisoSeguridad.vue?vue&type=template&id=52fc26b1 ***!
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
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("i", {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" PERMISO DE TRABAJO\n                "), _c("button", {
    staticClass: "btn btn-dark float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.abrirModal("analisis", "registrar");
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  }), _vm._v(" Nuevo\n                ")])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isPermisos_loading
    }
  }), _vm._v(" "), _c("v-client-table", {
    attrs: {
      data: _vm.tableData,
      columns: _vm.columns,
      options: _vm.options
    },
    scopedSlots: _vm._u([{
      key: "uno.id",
      fn: function fn(props) {
        return props.row.uno.condicion == 1 ? [_c("button", {
          staticClass: "btn btn-outline-dark",
          on: {
            click: function click($event) {
              $event.preventDefault();
              return _vm.abrirModal("analisis", "actualizar", props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-pencil-alt"
        }), _vm._v(" \n                        ")]), _vm._v(" "), _c("button", {
          staticClass: "btn btn-outline-dark",
          on: {
            click: function click($event) {
              $event.preventDefault();
              return _vm.eliminar(props.row.uno.id);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-trash"
        }), _vm._v(" \n                        ")])] : undefined;
      }
    }, {
      key: "descarga",
      fn: function fn(props) {
        return [props.row.uno.condicion == 1 ? _c("button", {
          staticClass: "btn btn-outline-dark",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.descargar(props.row.uno.id);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-download"
        }), _vm._v(" "), _c("i", {
          staticClass: "fas fa-file-pdf"
        })]) : _vm._e(), _vm._v(" "), props.row.uno.condicion == 0 ? _c("button", {
          staticClass: "btn btn-outline-danger",
          attrs: {
            type: "button"
          }
        }, [_vm._v("\n                            Eliminado\n                        ")]) : _vm._e()];
      }
    }], null, true)
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
  }, [_vm._v(_vm._s(_vm.tituloModal))]), _vm._v(" "), _c("button", {
    staticClass: "close",
    attrs: {
      type: "button",
      "aria-label": "Close"
    },
    on: {
      click: function click($event) {
        return _vm.Cerrar();
      }
    }
  }, [_c("span", {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("x")])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.tipoAccion == 1,
      expression: "tipoAccion==1"
    }],
    staticClass: "col-md-8 mb-3"
  }, [_c("label", [_vm._v("Proyecto")]), _vm._v(" "), _c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    attrs: {
      label: "nombre_corto",
      options: _vm.list_proyectos,
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
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.tipoAccion == 2,
      expression: "tipoAccion==2"
    }],
    staticClass: "col-md-4 mb-3"
  }, [_c("label", [_vm._v(" Folio")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.uno.uno,
      expression: "uno.uno"
    }],
    staticClass: "form-control",
    attrs: {
      readonly: "",
      maxlength: "60",
      type: "text"
    },
    domProps: {
      value: _vm.uno.uno
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.uno, "uno", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-4 mb-3"
  }, [_c("label", [_vm._v(" Asociado")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.uno.dos,
      expression: "uno.dos"
    }],
    staticClass: "form-control",
    attrs: {
      maxlength: "20",
      type: "text",
      "data-vv-name": "Asociado"
    },
    domProps: {
      value: _vm.uno.dos
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.uno, "dos", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Asociado")))])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4 mb-3"
  }, [_c("label", [_vm._v(" Fecha Elaboración")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.uno.tres,
      expression: "uno.tres"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date",
      "data-vv-name": "Fecha"
    },
    domProps: {
      value: _vm.uno.tres
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.uno, "tres", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Fecha")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-5 mb-3"
  }, [_c("label", [_vm._v(" Instalación")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.uno.cuatro,
      expression: "uno.cuatro"
    }],
    staticClass: "form-control",
    attrs: {
      maxlength: "60",
      type: "text",
      "data-vv-name": "Folio"
    },
    domProps: {
      value: _vm.uno.cuatro
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.uno, "cuatro", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Folio")))])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4 mb-3"
  }, [_c("label", [_vm._v(" Ubicación")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.uno.cinco,
      expression: "uno.cinco"
    }],
    staticClass: "form-control",
    attrs: {
      maxlength: "60",
      type: "text",
      "data-vv-name": "Asociado"
    },
    domProps: {
      value: _vm.uno.cinco
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.uno, "cinco", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Asociado")))])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" Nivel Riesgo")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.uno.seis,
      expression: "uno.seis"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    attrs: {
      "data-vv-name": "Nivel Riesgo"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.uno, "seis", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "0"
    }
  }, [_vm._v("A")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("B")])]), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Nivel Riesgo")))])])]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("div", {
    attrs: {
      id: "accordion"
    }
  }, [_c("div", {
    staticClass: "card"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "collapse",
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
    staticClass: "col-md-3 mb-2"
  }, [_c("label", [_vm._v(" Trabajo Caliente")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dos.uno,
      expression: "dos.uno"
    }],
    staticClass: "form-control",
    on: {
      click: function click($event) {
        return _vm.llenarC();
      },
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.dos, "uno", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }), _vm._v(" "), _c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("SI")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "0"
    }
  }, [_vm._v("NO")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-2"
  }, [_c("label", [_vm._v(" Espacios confinados")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dos.dos,
      expression: "dos.dos"
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
        _vm.$set(_vm.dos, "dos", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }), _vm._v(" "), _c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("SI")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "0"
    }
  }, [_vm._v("NO")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-2"
  }, [_c("label", [_vm._v(" Altura")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dos.tres,
      expression: "dos.tres"
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
        _vm.$set(_vm.dos, "tres", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }), _vm._v(" "), _c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("SI")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "0"
    }
  }, [_vm._v("NO")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-2"
  }, [_c("label", [_vm._v(" Eléctricos")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dos.cuatro,
      expression: "dos.cuatro"
    }],
    staticClass: "form-control",
    on: {
      click: function click($event) {
        return _vm.llenarE();
      },
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.dos, "cuatro", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }), _vm._v(" "), _c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("SI")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "0"
    }
  }, [_vm._v("NO")])])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-4"
  }, [_c("label", [_vm._v("Otros Trabajos")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dos.cinco,
      expression: "dos.cinco"
    }],
    staticClass: "form-control",
    attrs: {
      name: "name",
      rows: "2",
      cols: "80"
    },
    domProps: {
      value: _vm.dos.cinco
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.dos, "cinco", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-8"
  }, [_c("label", [_vm._v("Descripción de la tarea")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dos.seis,
      expression: "dos.seis"
    }],
    staticClass: "form-control",
    attrs: {
      name: "name",
      rows: "2",
      cols: "80"
    },
    domProps: {
      value: _vm.dos.seis
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.dos, "seis", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("br")])])]), _vm._v(" "), _c("div", {
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
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" Fecha inicio")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.tres.uno,
      expression: "tres.uno"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date"
    },
    domProps: {
      value: _vm.tres.uno
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.tres, "uno", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" Hora")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.tres.dos,
      expression: "tres.dos"
    }],
    staticClass: "form-control",
    attrs: {
      type: "time"
    },
    domProps: {
      value: _vm.tres.dos
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.tres, "dos", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" Fecha termino")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.tres.tres,
      expression: "tres.tres"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date"
    },
    domProps: {
      value: _vm.tres.tres
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.tres, "tres", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" Hora")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.tres.cuatro,
      expression: "tres.cuatro"
    }],
    staticClass: "form-control",
    attrs: {
      type: "time"
    },
    domProps: {
      value: _vm.tres.cuatro
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.tres, "cuatro", $event.target.value);
      }
    }
  })])])])])]), _vm._v(" "), _c("div", {
    staticClass: "card"
  }, [_vm._m(2), _vm._v(" "), _c("div", {
    staticClass: "collapse",
    attrs: {
      id: "collapseThree",
      "aria-labelledby": "headingThree",
      "data-parent": "#accordion"
    }
  }, [_c("div", {
    staticClass: "card-body"
  }, [_vm._m(3), _vm._v(" "), _c("div", {
    staticClass: "tab-content",
    attrs: {
      id: "nav-tabContent"
    }
  }, [_c("div", {
    staticClass: "tab-pane fade show active",
    attrs: {
      id: "nav-home",
      role: "tabpanel",
      "aria-labelledby": "nav-home-tab"
    }
  }, [_c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "form-control-label col-md-6"
  }, [_vm._v("Los factores meteorológicos permiten realizar el trabajo.")]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-2"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.cuatro.uno,
      expression: "cuatro.uno"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.cuatro.uno, "1")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.cuatro, "uno", "1");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-control-label"
  }, [_vm._v("SI")])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-2"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.cuatro.uno,
      expression: "cuatro.uno"
    }],
    attrs: {
      type: "radio",
      value: "2"
    },
    domProps: {
      checked: _vm._q(_vm.cuatro.uno, "2")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.cuatro, "uno", "2");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "radio-inspeccion"
  }, [_vm._v("NO")])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-2"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.cuatro.uno,
      expression: "cuatro.uno"
    }],
    attrs: {
      type: "radio",
      value: "3"
    },
    domProps: {
      checked: _vm._q(_vm.cuatro.uno, "3")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.cuatro, "uno", "3");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-control-label"
  }, [_vm._v("N/A")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "form-control-label col-md-6"
  }, [_vm._v("La iluminación del área de trabajo es la correcta para realizar la actividad.")]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-2"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.cuatro.dos,
      expression: "cuatro.dos"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.cuatro.dos, "1")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.cuatro, "dos", "1");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-control-label"
  }, [_vm._v("SI")])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-2"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.cuatro.dos,
      expression: "cuatro.dos"
    }],
    attrs: {
      type: "radio",
      value: "2"
    },
    domProps: {
      checked: _vm._q(_vm.cuatro.dos, "2")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.cuatro, "dos", "2");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "radio-inspeccion"
  }, [_vm._v("NO")])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-2"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.cuatro.dos,
      expression: "cuatro.dos"
    }],
    attrs: {
      type: "radio",
      value: "3"
    },
    domProps: {
      checked: _vm._q(_vm.cuatro.dos, "3")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.cuatro, "dos", "3");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-control-label"
  }, [_vm._v("N/A")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "form-control-label col-md-6"
  }, [_vm._v("El área se encuentra con accesos rapidos para su entrada y salida.")]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-2"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.cuatro.catorce,
      expression: "cuatro.catorce"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.cuatro.catorce, "1")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.cuatro, "catorce", "1");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-control-label"
  }, [_vm._v("SI")])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-2"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.cuatro.catorce,
      expression: "cuatro.catorce"
    }],
    attrs: {
      type: "radio",
      value: "2"
    },
    domProps: {
      checked: _vm._q(_vm.cuatro.catorce, "2")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.cuatro, "catorce", "2");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "radio-inspeccion"
  }, [_vm._v("NO")])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-2"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.cuatro.catorce,
      expression: "cuatro.catorce"
    }],
    attrs: {
      type: "radio",
      value: "3"
    },
    domProps: {
      checked: _vm._q(_vm.cuatro.catorce, "3")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.cuatro, "catorce", "3");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-control-label"
  }, [_vm._v("N/A")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "form-control-label col-md-6"
  }, [_vm._v("Los equipos estan puestas a tierra.")]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-2"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.cuatro.tres,
      expression: "cuatro.tres"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.cuatro.tres, "1")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.cuatro, "tres", "1");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-control-label"
  }, [_vm._v("SI")])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-2"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.cuatro.tres,
      expression: "cuatro.tres"
    }],
    attrs: {
      type: "radio",
      value: "2"
    },
    domProps: {
      checked: _vm._q(_vm.cuatro.tres, "2")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.cuatro, "tres", "2");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "radio-inspeccion"
  }, [_vm._v("NO")])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-2"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.cuatro.tres,
      expression: "cuatro.tres"
    }],
    attrs: {
      type: "radio",
      value: "3"
    },
    domProps: {
      checked: _vm._q(_vm.cuatro.tres, "3")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.cuatro, "tres", "3");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-control-label"
  }, [_vm._v("N/A")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "form-control-label col-md-6"
  }, [_vm._v("Se han instalado mamparas para proteger y aislar las personas y equipos de las áreas vecinas.")]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-2"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.cuatro.cuatro,
      expression: "cuatro.cuatro"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.cuatro.cuatro, "1")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.cuatro, "cuatro", "1");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-control-label"
  }, [_vm._v("SI")])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-2"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.cuatro.cuatro,
      expression: "cuatro.cuatro"
    }],
    attrs: {
      type: "radio",
      value: "2"
    },
    domProps: {
      checked: _vm._q(_vm.cuatro.cuatro, "2")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.cuatro, "cuatro", "2");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "radio-inspeccion"
  }, [_vm._v("NO")])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-2"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.cuatro.cuatro,
      expression: "cuatro.cuatro"
    }],
    attrs: {
      type: "radio",
      value: "3"
    },
    domProps: {
      checked: _vm._q(_vm.cuatro.cuatro, "3")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.cuatro, "cuatro", "3");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-control-label"
  }, [_vm._v("N/A")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "form-control-label col-md-6"
  }, [_vm._v("Los andamios han sido inspeccionados")]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-2"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.cuatro.cinco,
      expression: "cuatro.cinco"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.cuatro.cinco, "1")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.cuatro, "cinco", "1");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-control-label"
  }, [_vm._v("SI")])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-2"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.cuatro.cinco,
      expression: "cuatro.cinco"
    }],
    attrs: {
      type: "radio",
      value: "2"
    },
    domProps: {
      checked: _vm._q(_vm.cuatro.cinco, "2")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.cuatro, "cinco", "2");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "radio-inspeccion"
  }, [_vm._v("NO")])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-2"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.cuatro.cinco,
      expression: "cuatro.cinco"
    }],
    attrs: {
      type: "radio",
      value: "3"
    },
    domProps: {
      checked: _vm._q(_vm.cuatro.cinco, "3")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.cuatro, "cinco", "3");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-control-label"
  }, [_vm._v("N/A")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "form-control-label col-md-6"
  }, [_vm._v("La instalación y equipos eléctricos son antiexplosivos.")]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-2"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.cuatro.seis,
      expression: "cuatro.seis"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.cuatro.seis, "1")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.cuatro, "seis", "1");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-control-label"
  }, [_vm._v("SI")])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-2"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.cuatro.seis,
      expression: "cuatro.seis"
    }],
    attrs: {
      type: "radio",
      value: "2"
    },
    domProps: {
      checked: _vm._q(_vm.cuatro.seis, "2")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.cuatro, "seis", "2");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "radio-inspeccion"
  }, [_vm._v("NO")])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-2"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.cuatro.seis,
      expression: "cuatro.seis"
    }],
    attrs: {
      type: "radio",
      value: "3"
    },
    domProps: {
      checked: _vm._q(_vm.cuatro.seis, "3")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.cuatro, "seis", "3");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-control-label"
  }, [_vm._v("N/A")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "form-control-label col-md-6"
  }, [_vm._v("Herramientas: estan en condiciones y acordes a las tareas.")]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-2"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.cuatro.siete,
      expression: "cuatro.siete"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.cuatro.siete, "1")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.cuatro, "siete", "1");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-control-label"
  }, [_vm._v("SI")])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-2"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.cuatro.siete,
      expression: "cuatro.siete"
    }],
    attrs: {
      type: "radio",
      value: "2"
    },
    domProps: {
      checked: _vm._q(_vm.cuatro.siete, "2")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.cuatro, "siete", "2");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "radio-inspeccion"
  }, [_vm._v("NO")])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-2"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.cuatro.siete,
      expression: "cuatro.siete"
    }],
    attrs: {
      type: "radio",
      value: "3"
    },
    domProps: {
      checked: _vm._q(_vm.cuatro.siete, "3")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.cuatro, "siete", "3");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-control-label"
  }, [_vm._v("N/A")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "form-control-label col-md-6"
  }, [_vm._v("Se ha desenergizado el equipo ")]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-2"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.cuatro.ocho,
      expression: "cuatro.ocho"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.cuatro.ocho, "1")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.cuatro, "ocho", "1");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-control-label"
  }, [_vm._v("SI")])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-2"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.cuatro.ocho,
      expression: "cuatro.ocho"
    }],
    attrs: {
      type: "radio",
      value: "2"
    },
    domProps: {
      checked: _vm._q(_vm.cuatro.ocho, "2")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.cuatro, "ocho", "2");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "radio-inspeccion"
  }, [_vm._v("NO")])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-2"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.cuatro.ocho,
      expression: "cuatro.ocho"
    }],
    attrs: {
      type: "radio",
      value: "3"
    },
    domProps: {
      checked: _vm._q(_vm.cuatro.ocho, "3")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.cuatro, "ocho", "3");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-control-label"
  }, [_vm._v("N/A")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "form-control-label col-md-6"
  }, [_vm._v("Esta limitado el acceso de personal al área de trabajo.")]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-2"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.cuatro.nueve,
      expression: "cuatro.nueve"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.cuatro.nueve, "1")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.cuatro, "nueve", "1");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-control-label"
  }, [_vm._v("SI")])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-2"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.cuatro.nueve,
      expression: "cuatro.nueve"
    }],
    attrs: {
      type: "radio",
      value: "2"
    },
    domProps: {
      checked: _vm._q(_vm.cuatro.nueve, "2")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.cuatro, "nueve", "2");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "radio-inspeccion"
  }, [_vm._v("NO")])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-2"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.cuatro.nueve,
      expression: "cuatro.nueve"
    }],
    attrs: {
      type: "radio",
      value: "3"
    },
    domProps: {
      checked: _vm._q(_vm.cuatro.nueve, "3")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.cuatro, "nueve", "3");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-control-label"
  }, [_vm._v("N/A")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "form-control-label col-md-6"
  }, [_vm._v("Los materiales combustibles se encuentren dentro de un radio de 11 metros (35 pies) del área de trabajo. ")]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-2"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.cuatro.diez,
      expression: "cuatro.diez"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.cuatro.diez, "1")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.cuatro, "diez", "1");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-control-label"
  }, [_vm._v("SI")])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-2"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.cuatro.diez,
      expression: "cuatro.diez"
    }],
    attrs: {
      type: "radio",
      value: "2"
    },
    domProps: {
      checked: _vm._q(_vm.cuatro.diez, "2")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.cuatro, "diez", "2");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "radio-inspeccion"
  }, [_vm._v("NO")])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-2"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.cuatro.diez,
      expression: "cuatro.diez"
    }],
    attrs: {
      type: "radio",
      value: "3"
    },
    domProps: {
      checked: _vm._q(_vm.cuatro.diez, "3")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.cuatro, "diez", "3");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-control-label"
  }, [_vm._v("N/A")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "form-control-label col-md-6"
  }, [_vm._v("El equipo de soldadura ha sido inspeccionado y se encuentra en buen estado. ")]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-2"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.cuatro.once,
      expression: "cuatro.once"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.cuatro.once, "1")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.cuatro, "once", "1");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-control-label"
  }, [_vm._v("SI")])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-2"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.cuatro.once,
      expression: "cuatro.once"
    }],
    attrs: {
      type: "radio",
      value: "2"
    },
    domProps: {
      checked: _vm._q(_vm.cuatro.once, "2")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.cuatro, "once", "2");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "radio-inspeccion"
  }, [_vm._v("NO")])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-2"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.cuatro.once,
      expression: "cuatro.once"
    }],
    attrs: {
      type: "radio",
      value: "3"
    },
    domProps: {
      checked: _vm._q(_vm.cuatro.once, "3")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.cuatro, "once", "3");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-control-label"
  }, [_vm._v("N/A")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "form-control-label col-md-6"
  }, [_vm._v("Los cilindros se encuentran en posición vertical, bien asegurados y libres de fugas.")]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-2"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.cuatro.doce,
      expression: "cuatro.doce"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.cuatro.doce, "1")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.cuatro, "doce", "1");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-control-label"
  }, [_vm._v("SI")])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-2"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.cuatro.doce,
      expression: "cuatro.doce"
    }],
    attrs: {
      type: "radio",
      value: "2"
    },
    domProps: {
      checked: _vm._q(_vm.cuatro.doce, "2")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.cuatro, "doce", "2");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "radio-inspeccion"
  }, [_vm._v("NO")])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-2"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.cuatro.doce,
      expression: "cuatro.doce"
    }],
    attrs: {
      type: "radio",
      value: "3"
    },
    domProps: {
      checked: _vm._q(_vm.cuatro.doce, "3")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.cuatro, "doce", "3");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-control-label"
  }, [_vm._v("N/A")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "form-control-label col-md-6"
  }, [_vm._v("Los cilindros cumplen con el estándar de identificación (Nombre del producto y rotulación NFPA o UN).")]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-2"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.cuatro.trece,
      expression: "cuatro.trece"
    }],
    attrs: {
      type: "radio",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.cuatro.trece, "1")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.cuatro, "trece", "1");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-control-label"
  }, [_vm._v("SI")])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-2"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.cuatro.trece,
      expression: "cuatro.trece"
    }],
    attrs: {
      type: "radio",
      value: "2"
    },
    domProps: {
      checked: _vm._q(_vm.cuatro.trece, "2")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.cuatro, "trece", "2");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "radio-inspeccion"
  }, [_vm._v("NO")])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-2"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.cuatro.trece,
      expression: "cuatro.trece"
    }],
    attrs: {
      type: "radio",
      value: "3"
    },
    domProps: {
      checked: _vm._q(_vm.cuatro.trece, "3")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.cuatro, "trece", "3");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-control-label"
  }, [_vm._v("N/A")])])])]), _vm._v(" "), _c("div", {
    staticClass: "tab-pane fade",
    attrs: {
      id: "nav-profile",
      role: "tabpanel",
      "aria-labelledby": "nav-profile-tab"
    }
  }, [_c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "form-control-label col-md-6"
  }, [_vm._v("Casco contraimpacto")]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-2"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.cinco.uno,
      expression: "cinco.uno"
    }],
    attrs: {
      type: "checkbox",
      value: "1"
    },
    domProps: {
      checked: Array.isArray(_vm.cinco.uno) ? _vm._i(_vm.cinco.uno, "1") > -1 : _vm.cinco.uno
    },
    on: {
      change: function change($event) {
        var $$a = _vm.cinco.uno,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "1",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.cinco, "uno", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.cinco, "uno", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.cinco, "uno", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-control-label"
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "form-control-label col-md-6"
  }, [_vm._v("Ropa de trabajo")]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-2"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.cinco.dos,
      expression: "cinco.dos"
    }],
    attrs: {
      type: "checkbox",
      value: "1"
    },
    domProps: {
      checked: Array.isArray(_vm.cinco.dos) ? _vm._i(_vm.cinco.dos, "1") > -1 : _vm.cinco.dos
    },
    on: {
      change: function change($event) {
        var $$a = _vm.cinco.dos,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "1",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.cinco, "dos", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.cinco, "dos", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.cinco, "dos", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-control-label"
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "form-control-label col-md-6"
  }, [_vm._v("Protección ocular")]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-2"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.cinco.tres,
      expression: "cinco.tres"
    }],
    attrs: {
      type: "checkbox",
      value: "1"
    },
    domProps: {
      checked: Array.isArray(_vm.cinco.tres) ? _vm._i(_vm.cinco.tres, "1") > -1 : _vm.cinco.tres
    },
    on: {
      change: function change($event) {
        var $$a = _vm.cinco.tres,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "1",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.cinco, "tres", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.cinco, "tres", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.cinco, "tres", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-control-label"
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "form-control-label col-md-6"
  }, [_vm._v("Calzado de seguridad")]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-2"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.cinco.cuatro,
      expression: "cinco.cuatro"
    }],
    attrs: {
      type: "checkbox",
      value: "1"
    },
    domProps: {
      checked: Array.isArray(_vm.cinco.cuatro) ? _vm._i(_vm.cinco.cuatro, "1") > -1 : _vm.cinco.cuatro
    },
    on: {
      change: function change($event) {
        var $$a = _vm.cinco.cuatro,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "1",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.cinco, "cuatro", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.cinco, "cuatro", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.cinco, "cuatro", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-control-label"
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "form-control-label col-md-6"
  }, [_vm._v("Protección auditiva")]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-2"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.cinco.cinco,
      expression: "cinco.cinco"
    }],
    attrs: {
      type: "checkbox",
      value: "1"
    },
    domProps: {
      checked: Array.isArray(_vm.cinco.cinco) ? _vm._i(_vm.cinco.cinco, "1") > -1 : _vm.cinco.cinco
    },
    on: {
      change: function change($event) {
        var $$a = _vm.cinco.cinco,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "1",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.cinco, "cinco", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.cinco, "cinco", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.cinco, "cinco", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-control-label"
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "form-control-label col-md-6"
  }, [_vm._v("OTROS")]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-6"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.cinco.seis,
      expression: "cinco.seis"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.cinco.seis
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.cinco, "seis", $event.target.value);
      }
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "tab-pane fade",
    attrs: {
      id: "nav-contact",
      role: "tabpanel",
      "aria-labelledby": "nav-contact-tab"
    }
  }, [_c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "form-control-label col-md-6"
  }, [_vm._v("Ayudante contraincendio")]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-2"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.seis.uno,
      expression: "seis.uno"
    }],
    attrs: {
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.seis.uno) ? _vm._i(_vm.seis.uno, null) > -1 : _vm.seis.uno
    },
    on: {
      change: function change($event) {
        var $$a = _vm.seis.uno,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.seis, "uno", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.seis, "uno", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.seis, "uno", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-control-label"
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "form-control-label col-md-6"
  }, [_vm._v("Manguera Contraincendio")]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-2"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.seis.dos,
      expression: "seis.dos"
    }],
    attrs: {
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.seis.dos) ? _vm._i(_vm.seis.dos, null) > -1 : _vm.seis.dos
    },
    on: {
      change: function change($event) {
        var $$a = _vm.seis.dos,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.seis, "dos", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.seis, "dos", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.seis, "dos", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-control-label"
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "form-control-label col-md-6"
  }, [_vm._v("Cortina de agua")]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-2"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.seis.tres,
      expression: "seis.tres"
    }],
    attrs: {
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.seis.tres) ? _vm._i(_vm.seis.tres, null) > -1 : _vm.seis.tres
    },
    on: {
      change: function change($event) {
        var $$a = _vm.seis.tres,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.seis, "tres", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.seis, "tres", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.seis, "tres", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-control-label"
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "form-control-label col-md-6"
  }, [_vm._v("Barreras y letreros de seguridad ")]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-2"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.seis.cuatro,
      expression: "seis.cuatro"
    }],
    attrs: {
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.seis.cuatro) ? _vm._i(_vm.seis.cuatro, null) > -1 : _vm.seis.cuatro
    },
    on: {
      change: function change($event) {
        var $$a = _vm.seis.cuatro,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.seis, "cuatro", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.seis, "cuatro", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.seis, "cuatro", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-control-label"
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "form-control-label col-md-6"
  }, [_vm._v("Colocar lonas para cubrir drenajes y equipos delicados y humedecerlas ")]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-2"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.seis.cinco,
      expression: "seis.cinco"
    }],
    attrs: {
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.seis.cinco) ? _vm._i(_vm.seis.cinco, null) > -1 : _vm.seis.cinco
    },
    on: {
      change: function change($event) {
        var $$a = _vm.seis.cinco,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.seis, "cinco", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.seis, "cinco", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.seis, "cinco", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-control-label"
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "form-control-label col-md-6"
  }, [_vm._v("Extintor")]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-2"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.seis.seis,
      expression: "seis.seis"
    }],
    attrs: {
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.seis.seis) ? _vm._i(_vm.seis.seis, null) > -1 : _vm.seis.seis
    },
    on: {
      change: function change($event) {
        var $$a = _vm.seis.seis,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.seis, "seis", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.seis, "seis", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.seis, "seis", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-control-label"
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "form-control-label col-md-6"
  }, [_vm._v("Eliminar todo el material combustible")]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-2"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.seis.siete,
      expression: "seis.siete"
    }],
    attrs: {
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.seis.siete) ? _vm._i(_vm.seis.siete, null) > -1 : _vm.seis.siete
    },
    on: {
      change: function change($event) {
        var $$a = _vm.seis.siete,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.seis, "siete", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.seis, "siete", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.seis, "siete", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-control-label"
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "form-control-label col-md-6"
  }, [_vm._v("Proteger Instrumentación e iluminación")]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-2"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.seis.ocho,
      expression: "seis.ocho"
    }],
    attrs: {
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.seis.ocho) ? _vm._i(_vm.seis.ocho, null) > -1 : _vm.seis.ocho
    },
    on: {
      change: function change($event) {
        var $$a = _vm.seis.ocho,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.seis, "ocho", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.seis, "ocho", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.seis, "ocho", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-control-label"
  })])])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "card"
  }, [_vm._m(4), _vm._v(" "), _c("div", {
    staticClass: "collapse",
    attrs: {
      id: "collapseFour",
      "aria-labelledby": "headingFour",
      "data-parent": "#accordion"
    }
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-mb-8 md-3"
  }, [_c("label", [_vm._v("PRECAUCIONES")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.siete.uno,
      expression: "siete.uno"
    }],
    staticClass: "form-control",
    attrs: {
      name: "name",
      rows: "8",
      cols: "80"
    },
    domProps: {
      value: _vm.siete.uno
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.siete, "uno", $event.target.value);
      }
    }
  })])])])])]), _vm._v(" "), _c("div", {
    staticClass: "card"
  }, [_vm._m(5), _vm._v(" "), _c("div", {
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
    staticClass: "col-md-6 mb-3"
  }, [_c("label", [_vm._v("Residente de Obra")]), _vm._v(" "), _c("v-select", {
    attrs: {
      options: _vm.listaEmpleados,
      label: "name"
    },
    model: {
      value: _vm.ocho.uno,
      callback: function callback($$v) {
        _vm.$set(_vm.ocho, "uno", $$v);
      },
      expression: "ocho.uno"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v("Fecha")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.ocho.dos,
      expression: "ocho.dos"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date"
    },
    domProps: {
      value: _vm.ocho.dos
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.ocho, "dos", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-6 mb-3"
  }, [_c("label", [_vm._v("Supervisor de Trabajo")]), _vm._v(" "), _c("v-select", {
    attrs: {
      options: _vm.listaEmpleados,
      label: "name"
    },
    model: {
      value: _vm.ocho.tres,
      callback: function callback($$v) {
        _vm.$set(_vm.ocho, "tres", $$v);
      },
      expression: "ocho.tres"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 md-3"
  }, [_c("label", [_vm._v("Fecha")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.ocho.cuatro,
      expression: "ocho.cuatro"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date"
    },
    domProps: {
      value: _vm.ocho.cuatro
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.ocho, "cuatro", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-6 mb-3"
  }, [_c("label", [_vm._v("Responsable de SSMA")]), _vm._v(" "), _c("v-select", {
    attrs: {
      options: _vm.listaEmpleados,
      label: "name"
    },
    model: {
      value: _vm.ocho.cinco,
      callback: function callback($$v) {
        _vm.$set(_vm.ocho, "cinco", $$v);
      },
      expression: "ocho.cinco"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v("Fecha")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.ocho.seis,
      expression: "ocho.seis"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date"
    },
    domProps: {
      value: _vm.ocho.seis
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.ocho, "seis", $event.target.value);
      }
    }
  })])])])])]), _vm._v(" "), _c("div", {
    staticClass: "card"
  }, [_vm._m(6), _vm._v(" "), _c("div", {
    staticClass: "collapse",
    attrs: {
      id: "collapseSeis",
      "aria-labelledby": "headingSeis",
      "data-parent": "#accordion"
    }
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "form-row"
  }, [_vm._m(7), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v("Fecha")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.temporal.uno,
      expression: "temporal.uno"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date"
    },
    domProps: {
      value: _vm.temporal.uno
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.temporal, "uno", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 mb-3"
  }, [_c("label", [_vm._v("Desde")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.temporal.dos,
      expression: "temporal.dos"
    }],
    staticClass: "form-control",
    attrs: {
      type: "time"
    },
    domProps: {
      value: _vm.temporal.dos
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.temporal, "dos", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 mb-3"
  }, [_c("label", [_vm._v("Hasta")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.temporal.tres,
      expression: "temporal.tres"
    }],
    staticClass: "form-control",
    attrs: {
      type: "time"
    },
    domProps: {
      value: _vm.temporal.tres
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.temporal, "tres", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-5 mb-3"
  }, [_c("label", [_vm._v("Nombre")]), _vm._v(" "), _c("v-select", {
    attrs: {
      options: _vm.listaEmpleados,
      label: "name"
    },
    model: {
      value: _vm.temporal.cuatro,
      callback: function callback($$v) {
        _vm.$set(_vm.temporal, "cuatro", $$v);
      },
      expression: "temporal.cuatro"
    }
  })], 1)]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_vm._m(8), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v("Fecha")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.temporal.cinco,
      expression: "temporal.cinco"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date"
    },
    domProps: {
      value: _vm.temporal.cinco
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.temporal, "cinco", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 mb-3"
  }, [_c("label", [_vm._v("Desde")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.temporal.seis,
      expression: "temporal.seis"
    }],
    staticClass: "form-control",
    attrs: {
      type: "time"
    },
    domProps: {
      value: _vm.temporal.seis
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.temporal, "seis", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 mb-3"
  }, [_c("label", [_vm._v("Hasta")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.temporal.siete,
      expression: "temporal.siete"
    }],
    staticClass: "form-control",
    attrs: {
      type: "time"
    },
    domProps: {
      value: _vm.temporal.siete
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.temporal, "siete", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-5 mb-3"
  }, [_c("label", [_vm._v("Nombre")]), _vm._v(" "), _c("v-select", {
    attrs: {
      options: _vm.listaEmpleados,
      label: "name"
    },
    model: {
      value: _vm.temporal.ocho,
      callback: function callback($$v) {
        _vm.$set(_vm.temporal, "ocho", $$v);
      },
      expression: "temporal.ocho"
    }
  })], 1)]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_vm._m(9), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 mb-3"
  }, [_c("label", [_vm._v("Hora")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.temporal.nueve,
      expression: "temporal.nueve"
    }],
    staticClass: "form-control",
    attrs: {
      type: "time"
    },
    domProps: {
      value: _vm.temporal.nueve
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.temporal, "nueve", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v("Fecha")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.temporal.diez,
      expression: "temporal.diez"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date"
    },
    domProps: {
      value: _vm.temporal.diez
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.temporal, "diez", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v(" ")]), _vm._v(" "), _c("br"), _vm._v(" "), _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.Crear();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  }), _vm._v(" Crear")])])]), _vm._v(" "), _vm._m(10), _vm._v(" "), _vm._l(_vm.once, function (vi, index) {
    return _c("li", {
      key: index,
      staticClass: "list-group-item"
    }, [_c("div", {
      staticClass: "form-row"
    }, [_c("div", {
      staticClass: "form-group col-md-3"
    }, [_c("label", [_vm._v(_vm._s(vi["cuatro"] != null ? vi["cuatro"]["name"] : ""))])]), _vm._v(" "), _c("div", {
      staticClass: "form-group col-md-2"
    }, [_c("label", [_vm._v(_vm._s(vi["uno"]))])]), _vm._v(" "), _c("div", {
      staticClass: "form-group col-md-3"
    }, [_c("label", [_vm._v(_vm._s(vi["ocho"] != null ? vi["ocho"]["name"] : ""))])]), _vm._v(" "), _c("div", {
      staticClass: "form-group col-md-2"
    }, [_c("label", [_vm._v(_vm._s(vi["cinco"]))])]), _vm._v(" "), _c("div", {
      staticClass: "form-group col-md-2"
    }, [_c("a", {
      on: {
        click: function click($event) {
          return _vm.deleteu(index);
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
  }, [_vm._m(11), _vm._v(" "), _c("div", {
    staticClass: "collapse",
    attrs: {
      id: "collapseSeven",
      "aria-labelledby": "headingSeven",
      "data-parent": "#accordion"
    }
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "form-control-label col-md-6"
  }, [_vm._v("Ha sido completado")]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-2"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.nueve.uno,
      expression: "nueve.uno"
    }],
    attrs: {
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.nueve.uno) ? _vm._i(_vm.nueve.uno, null) > -1 : _vm.nueve.uno
    },
    on: {
      change: function change($event) {
        var $$a = _vm.nueve.uno,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.nueve, "uno", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.nueve, "uno", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.nueve, "uno", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-control-label"
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "form-control-label col-md-6"
  }, [_vm._v("No ha sido iniciado ")]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-2"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.nueve.dos,
      expression: "nueve.dos"
    }],
    attrs: {
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.nueve.dos) ? _vm._i(_vm.nueve.dos, null) > -1 : _vm.nueve.dos
    },
    on: {
      change: function change($event) {
        var $$a = _vm.nueve.dos,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.nueve, "dos", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.nueve, "dos", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.nueve, "dos", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-control-label"
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "form-control-label col-md-6"
  }, [_vm._v("Término de la jornada de trabajo.")]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-2"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.nueve.tres,
      expression: "nueve.tres"
    }],
    attrs: {
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.nueve.tres) ? _vm._i(_vm.nueve.tres, null) > -1 : _vm.nueve.tres
    },
    on: {
      change: function change($event) {
        var $$a = _vm.nueve.tres,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.nueve, "tres", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.nueve, "tres", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.nueve, "tres", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-control-label"
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "form-control-label col-md-6"
  }, [_vm._v("Suspendida o no iniciada por haberse realizado observaciones de seguridad. ")]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-2"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.nueve.cuatro,
      expression: "nueve.cuatro"
    }],
    attrs: {
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.nueve.cuatro) ? _vm._i(_vm.nueve.cuatro, null) > -1 : _vm.nueve.cuatro
    },
    on: {
      change: function change($event) {
        var $$a = _vm.nueve.cuatro,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.nueve, "cuatro", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.nueve, "cuatro", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.nueve, "cuatro", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-control-label"
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "form-control-label col-md-6"
  }, [_vm._v("El lugar de trabajo ha quedado en condiciones de seguridad, orden y limpieza.")]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-2"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.nueve.cinco,
      expression: "nueve.cinco"
    }],
    attrs: {
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.nueve.cinco) ? _vm._i(_vm.nueve.cinco, null) > -1 : _vm.nueve.cinco
    },
    on: {
      change: function change($event) {
        var $$a = _vm.nueve.cinco,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.nueve, "cinco", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.nueve, "cinco", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.nueve, "cinco", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-control-label"
  })])])])])]), _vm._v(" "), _c("div", {
    staticClass: "card"
  }, [_vm._m(12), _vm._v(" "), _c("div", {
    staticClass: "collapse",
    attrs: {
      id: "collapseOcho",
      "aria-labelledby": "headingOcho",
      "data-parent": "#accordion"
    }
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "form-row"
  }, [_vm._m(13), _vm._v(" "), _c("div", {
    staticClass: "col-md-5 mb-3"
  }, [_c("label", [_vm._v("Nombre")]), _vm._v(" "), _c("v-select", {
    attrs: {
      options: _vm.listaEmpleados,
      label: "name"
    },
    model: {
      value: _vm.diez.uno,
      callback: function callback($$v) {
        _vm.$set(_vm.diez, "uno", $$v);
      },
      expression: "diez.uno"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 mb-3"
  }, [_c("label", [_vm._v("Hora")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.diez.dos,
      expression: "diez.dos"
    }],
    staticClass: "form-control",
    attrs: {
      type: "time"
    },
    domProps: {
      value: _vm.diez.dos
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.diez, "dos", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v("Fecha")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.diez.tres,
      expression: "diez.tres"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date"
    },
    domProps: {
      value: _vm.diez.tres
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.diez, "tres", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_vm._m(14), _vm._v(" "), _c("div", {
    staticClass: "col-md-5 mb-3"
  }, [_c("label", [_vm._v("Nombre")]), _vm._v(" "), _c("v-select", {
    attrs: {
      options: _vm.listaEmpleados,
      label: "name"
    },
    model: {
      value: _vm.diez.cuatro,
      callback: function callback($$v) {
        _vm.$set(_vm.diez, "cuatro", $$v);
      },
      expression: "diez.cuatro"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 mb-3"
  }, [_c("label", [_vm._v("Hora")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.diez.cinco,
      expression: "diez.cinco"
    }],
    staticClass: "form-control",
    attrs: {
      type: "time"
    },
    domProps: {
      value: _vm.diez.cinco
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.diez, "cinco", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v("Fecha")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.diez.seis,
      expression: "diez.seis"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date"
    },
    domProps: {
      value: _vm.diez.seis
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.diez, "seis", $event.target.value);
      }
    }
  })])])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("button", {
    staticClass: "btn btn-outline-dark",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.Cerrar();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-window-close"
  }), _vm._v(" Cerrar\n                            ")]), _vm._v(" "), _c("button", {
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
  }, [_vm._v("\n                                Guardar\n                            ")]), _vm._v(" "), _c("button", {
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
  }, [_vm._v("\n                                Actualizar\n                            ")])])])])])])])]);
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
  }, [_vm._v("\n                                                1. DESCRIPCIÓN DEL TRABAJO\n                                            ")])])]);
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
  }, [_vm._v("\n                                                2. FECHA DE INICIO Y TÉRMINO\n                                            ")])])]);
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
  }, [_vm._v("\n                                                3. REQUISITOS A CUMPLIR ANTES DE LA EJECUCION DEL TRABAJO\n                                            ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("nav", [_c("div", {
    staticClass: "nav nav-tabs",
    attrs: {
      id: "nav-tab",
      role: "tablist"
    }
  }, [_c("a", {
    staticClass: "nav-item nav-link active",
    attrs: {
      id: "nav-home-tab",
      "data-toggle": "tab",
      href: "#nav-home",
      role: "tab",
      "aria-controls": "nav-home",
      "aria-selected": "true"
    }
  }, [_vm._v("RESPONSABLES DE OPERACIÓN ")]), _vm._v(" "), _c("a", {
    staticClass: "nav-item nav-link",
    attrs: {
      id: "nav-profile-ta b",
      "data-toggle": "tab",
      href: "#nav-profile",
      role: "tab",
      "aria-controls": "nav-profile",
      "aria-selected": "false"
    }
  }, [_vm._v("EQUIPO DE PROTECCIÓN PERSONAL ")]), _vm._v(" "), _c("a", {
    staticClass: "nav-item nav-link",
    attrs: {
      id: "nav-contact-tab",
      "data-toggle": "tab",
      href: "#nav-contact",
      role: "tab",
      "aria-controls": "nav-contact",
      "aria-selected": "false"
    }
  }, [_vm._v("PRECAUCIONES CONTRA INCENDIO")])])]);
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
    staticClass: "btn btn-link collapsed",
    attrs: {
      "data-toggle": "collapse",
      "data-target": "#collapseFour",
      "aria-expanded": "false",
      "aria-controls": "collapseFour"
    }
  }, [_vm._v("\n                                                4. PRECAUCIONES ESPECIALES Y RIESGOS POTENCIALES\n                                            ")])])]);
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
  }, [_vm._v("\n                                                5. VERIFICACION EN CAMPO DEL CUMPLIMIENTO DE LOS REQUISITOS SOLICITADOS\n                                            ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header",
    attrs: {
      id: "headingSeis"
    }
  }, [_c("h5", {
    staticClass: "mb-0"
  }, [_c("button", {
    staticClass: "btn btn-link collapsed",
    attrs: {
      "data-toggle": "collapse",
      "data-target": "#collapseSeis",
      "aria-expanded": "false",
      "aria-controls": "collapseSeis"
    }
  }, [_vm._v("\n                                                6. REVALIDACIONES\n                                            ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-md-12"
  }, [_c("label", [_vm._v("VALIDACION /REVALIDACIÓN")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-md-12"
  }, [_c("label", [_vm._v("ACEPTACIÓN DEL PERMISO")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-md-12"
  }, [_c("label", [_vm._v("SUSPENSIÓN DEL PERMISO")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-3"
  }, [_c("label", [_c("b", [_vm._v("Nombre")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-2"
  }, [_c("label", [_c("b", [_vm._v("Fecha")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-3"
  }, [_c("label", [_c("b", [_vm._v("Nombre")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-2"
  }, [_c("label", [_c("b", [_vm._v("Fecha")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-2"
  }, [_c("label", [_c("b", [_vm._v("ACCIONES")])])])]);
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
  }, [_vm._v("\n                                                7.CANCELACIÓN DEL TRABAJO\n                                            ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header",
    attrs: {
      id: "headingOcho"
    }
  }, [_c("h5", {
    staticClass: "mb-0"
  }, [_c("button", {
    staticClass: "btn btn-link collapsed",
    attrs: {
      "data-toggle": "collapse",
      "data-target": "#collapseOcho",
      "aria-expanded": "false",
      "aria-controls": "collapseOcho"
    }
  }, [_vm._v("\n                                                8. TERMINACIÓN DE LOS TRABAJOS (Por el Resdidente)\n                                            ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-md-12 mb-3"
  }, [_c("label", [_vm._v("CANCELACION DEL PERMISO (Trabajo completo)")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-md-12 mb-3"
  }, [_c("label", [_vm._v("CANCELACION DEL PERMISO (Trabajo no completo)")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/Platicas.vue?vue&type=template&id=26a57411":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/Platicas.vue?vue&type=template&id=26a57411 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "container-fluid",
    staticStyle: {
      "min-height": "40vh"
    }
  }, [_vm.tipoCard == 1 ? _c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("i", {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" Pláticas de Seguridad\n                "), _c("button", {
    staticClass: "btn btn-dark float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.AbrirModalPlaticas();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  }), _vm._v(" Nuevo\n                ")])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isPlaticas_loading
    }
  }), _vm._v(" "), _c("v-client-table", {
    attrs: {
      columns: _vm.columns_platicas,
      data: _vm.list_platicas,
      options: _vm.options_platicas
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
        }), _vm._v("  Acciones\n                                ")]), _vm._v(" "), _c("div", {
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
              return _vm.AbrirModalPlaticas(false, props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-edit"
        }), _vm._v("  Actualizar\n                                    ")]), _vm._v(" "), _c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.DescargarPlantilla(props.row.id);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-file-pdf"
        }), _vm._v("  Descargar Plantilla\n                                    ")]), _vm._v(" "), _c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.SubirEvidencia(props.row.id);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-file-pdf"
        }), _vm._v("  Subir Evidencia\n                                    ")])])])])];
      }
    }, {
      key: "documento",
      fn: function fn(props) {
        return [props.row.documento == null ? _c("span", {
          staticClass: "btn btn-dark"
        }, [_vm._v("N/D")]) : _c("button", {
          staticClass: "btn btn-dark",
          on: {
            click: function click($event) {
              return _vm.DescargarEvidencia(props.row.id);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-download"
        })])];
      }
    }], null, false, 3232101397)
  })], 1)]) : _vm._e(), _vm._v(" "), _vm.tipoCard == 2 ? _c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("i", {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" Participantes\n                "), _c("button", {
    staticClass: "btn btn-dark float-sm-right mx-1",
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
  }), _vm._v(" Regresar\n                ")])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("br"), _vm._v(" "), _c("vue-element-loading", {
    attrs: {
      active: _vm.isGuardarparticip_loading
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2 form-control-label"
  }, [_vm._v("Responsable")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    attrs: {
      multiple: "",
      options: _vm.list_empleados,
      "data-vv-name": "Participantes",
      label: "nombre"
    },
    model: {
      value: _vm.participantes,
      callback: function callback($$v) {
        _vm.participantes = $$v;
      },
      expression: "participantes"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Participantes")))])], 1), _vm._v(" "), _c("button", {
    staticClass: "btn btn-dark",
    on: {
      click: function click($event) {
        return _vm.GuadarParticipantes();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  })])]), _vm._v(" "), _c("br"), _vm._v(" "), _c("br"), _vm._v(" "), _c("vue-element-loading", {
    attrs: {
      active: _vm.isParticipantes_loading
    }
  }), _vm._v(" "), _c("v-client-table", {
    attrs: {
      columns: _vm.columns_participantes,
      data: _vm.list_participantes,
      options: _vm.options_participantes
    }
  })], 1)]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "modal fade",
    "class": {
      mostrar: _vm.ver_modal_platicas
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
      active: _vm.isGuardarpl_loading
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
        return _vm.CerrarModalPlaticas();
      }
    }
  }, [_c("span", {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("×")])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
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
      value: _vm.platica.fecha,
      expression: "platica.fecha"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date",
      "data-vv-name": "Fecha"
    },
    domProps: {
      value: _vm.platica.fecha
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.platica, "fecha", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Fecha")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2 form-control-label"
  }, [_vm._v("Ubicación")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required|max:50",
      expression: "'required|max:50'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.platica.ubicacion,
      expression: "platica.ubicacion"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      "data-vv-name": "Ubicación",
      autocomplete: "off"
    },
    domProps: {
      value: _vm.platica.ubicacion
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.platica, "ubicacion", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Ubicación")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2 form-control-label"
  }, [_vm._v("Tema")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("textarea", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required|max:100",
      expression: "'required|max:100'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.platica.tema,
      expression: "platica.tema"
    }],
    staticClass: "form-control",
    attrs: {
      "data-vv-name": "Tema"
    },
    domProps: {
      value: _vm.platica.tema
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.platica, "tema", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Tema")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2 form-control-label"
  }, [_vm._v("Responsable")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    attrs: {
      options: _vm.list_empleados,
      "data-vv-name": "Responsable",
      label: "nombre"
    },
    model: {
      value: _vm.platica.responsable,
      callback: function callback($$v) {
        _vm.$set(_vm.platica, "responsable", $$v);
      },
      expression: "platica.responsable"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Responsable")))])], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("button", {
    staticClass: "btn btn-outline-dark",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.CerrarModalPlaticas();
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
        return _vm.GuardarPlatica(true);
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
        return _vm.GuardarPlatica(false);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Actualizar")]) : _vm._e()])], 1)])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/Residuos.vue?vue&type=template&id=8aa1a4d8":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/Residuos.vue?vue&type=template&id=8aa1a4d8 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
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
  }), _vm._v(" Bitacora\n                "), _c("button", {
    staticClass: "btn btn-dark float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.abrirModal("bitacora", "registrar");
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  }), _vm._v(" Nuevo\n                ")]), _vm._v(" "), _vm._m(0)]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "collapse multi-collapse",
    attrs: {
      id: "collapseDescargar"
    }
  }, [_c("div", {
    staticClass: "container row"
  }, [_c("div", {
    staticClass: "col-md-3"
  }, [_c("div", {}, [_c("label", [_vm._v("Año")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.anio,
      expression: "anio"
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
        _vm.anio = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c("option", {
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
  }, [_vm._v("2023")])]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-dark mt-2",
    on: {
      click: function click($event) {
        return _vm.Descargar();
      }
    }
  }, [_vm._v("Generar")])])])])]), _vm._v(" "), _c("br"), _vm._v(" "), _c("v-client-table", {
    attrs: {
      data: _vm.tableData,
      options: _vm.options,
      columns: _vm.columns
    },
    scopedSlots: _vm._u([{
      key: "id",
      fn: function fn(props) {
        return [_c("button", {
          staticClass: "btn btn-outline-dark",
          on: {
            click: function click($event) {
              $event.preventDefault();
              return _vm.abrirModal("bitacora", "actualizar", props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-pencil-alt"
        }), _vm._v(" Actualizar\n                        ")])];
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
  }, [_vm._v(_vm._s(_vm.tituloModal))]), _vm._v(" "), _c("button", {
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
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-6 mb-3"
  }, [_c("label", [_vm._v("Fecha Entrada")]), _vm._v(" "), _c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    attrs: {
      taggable: "",
      multiple: "",
      "data-vv-name": "Fecha entrada"
    },
    model: {
      value: _vm.dataSelect,
      callback: function callback($$v) {
        _vm.dataSelect = $$v;
      },
      expression: "dataSelect"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Fecha entrada")))])], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 mb-3"
  }, [_c("label", [_vm._v("Residuo")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.residuo,
      expression: "residuo"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      "data-vv-name": "Residuo"
    },
    domProps: {
      value: _vm.residuo
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.residuo = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Residuo")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v("Cantidad")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "decimal:2",
      expression: "'decimal:2'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.cantidad,
      expression: "cantidad"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
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
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Cantidad")))])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v("Unidad")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.unidad,
      expression: "unidad"
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
        _vm.unidad = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c("option", {
    attrs: {
      value: "BOLSA"
    }
  }, [_vm._v("BOLSA")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "M3"
    }
  }, [_vm._v("M3")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "KG"
    }
  }, [_vm._v("KG")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v("Fecha Salida")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.fecha_salida,
      expression: "fecha_salida"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date"
    },
    domProps: {
      value: _vm.fecha_salida
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.fecha_salida = $event.target.value;
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-6 mb-3"
  }, [_c("label", [_vm._v("Nombre personal entrega")]), _vm._v(" "), _c("v-select", {
    attrs: {
      options: _vm.listaEmpleados,
      label: "name"
    },
    model: {
      value: _vm.empleado_entrega,
      callback: function callback($$v) {
        _vm.empleado_entrega = $$v;
      },
      expression: "empleado_entrega"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 mb-3"
  }, [_c("label", [_vm._v("Proveedor que recolecto")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.proveedor,
      expression: "proveedor"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.proveedor
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.proveedor = $event.target.value;
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v("Folio")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.folio,
      expression: "folio"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
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
  })])])]), _vm._v(" "), _c("div", {
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
  }), _vm._v(" Cerrar\n                            ")]), _vm._v(" "), _c("button", {
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
  }, [_vm._v("\n                                Guardar\n                            ")]), _vm._v(" "), _c("button", {
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
  }, [_vm._v("\n                                Actualizar\n                            ")])])])])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("button", {
    staticClass: "btn btn-dark float-sm-right mr-1",
    attrs: {
      "data-toggle": "collapse",
      href: "#collapseDescargar",
      role: "button",
      "aria-expanded": "false",
      "aria-controls": "collapseDescargar"
    }
  }, [_c("i", {
    staticClass: "fas fa-file-pdf mr-1"
  }), _vm._v("Descargar\n                ")]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/Secuencias.vue?vue&type=template&id=7ab0d39b":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/Secuencias.vue?vue&type=template&id=7ab0d39b ***!
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
  return _c("div", {
    staticClass: "main"
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "tab-content",
    attrs: {
      id: "nav-tabContent"
    }
  }, [_c("div", {
    staticClass: "tab-pane fade show active",
    attrs: {
      id: "nav-home",
      role: "tabpanel",
      "aria-labelledby": "nav-home-tab"
    }
  }, [_c("button", {
    staticClass: "btn btn-dark float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.AbrirModal(true, 1);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  }, [_vm._v(" ")]), _vm._v("Nuevo\n                    ")]), _vm._v(" "), _c("v-client-table", {
    ref: "tbl_secuencia",
    attrs: {
      columns: _vm.columns_secuencia,
      data: _vm.list_secuencia,
      options: _vm.options_secuencia
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
        }), _vm._v("  Acciones\n                                ")]), _vm._v(" "), _c("div", {
          staticClass: "dropdown-menu"
        }, [[_c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.AbrirModal(false, 1, props.row);
            }
          }
        }, [_c("i", {
          staticClass: "icon-pencil"
        }), _vm._v(" Actualizar\n                                        ")])]], 2)])];
      }
    }])
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "tab-pane fade",
    attrs: {
      id: "nav-profile",
      role: "tabpanel",
      "aria-labelledby": "nav-profile-tab"
    }
  }, [_c("button", {
    staticClass: "btn btn-dark float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.AbrirModal(true, 2);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  }, [_vm._v(" ")]), _vm._v("Nuevo\n                    ")]), _vm._v(" "), _c("v-client-table", {
    ref: "tbl_secuencia",
    attrs: {
      columns: _vm.columns_secuencia,
      data: _vm.list_riesgo,
      options: _vm.options_secuencia
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
        }), _vm._v("  Acciones\n                                ")]), _vm._v(" "), _c("div", {
          staticClass: "dropdown-menu"
        }, [[_c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.AbrirModal(false, 2, props.row);
            }
          }
        }, [_c("i", {
          staticClass: "icon-pencil"
        }), _vm._v(" Actualizar\n                                        ")])]], 2)])];
      }
    }])
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "tab-pane fade",
    attrs: {
      id: "nav-contact",
      role: "tabpanel",
      "aria-labelledby": "nav-contact-tab"
    }
  }, [_c("button", {
    staticClass: "btn btn-dark float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.AbrirModal(true, 3);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  }, [_vm._v(" ")]), _vm._v("Nuevo\n                    ")]), _vm._v(" "), _c("v-client-table", {
    ref: "tbl_secuencia",
    attrs: {
      columns: _vm.columns_secuencia,
      data: _vm.list_recomendacion,
      options: _vm.options_secuencia
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
        }), _vm._v("  Acciones\n                                ")]), _vm._v(" "), _c("div", {
          staticClass: "dropdown-menu"
        }, [[_c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.AbrirModal(false, 3, props.row);
            }
          }
        }, [_c("i", {
          staticClass: "icon-pencil"
        }), _vm._v(" Actualizar\n                                        ")])]], 2)])];
      }
    }])
  })], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "modal fade",
    "class": {
      mostrar: _vm.ver_modal
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
    staticClass: "modal-dialog modal-dark",
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
      textContent: _vm._s(_vm.titulo_modal_secuencia)
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
  }, [_c("form", {
    staticClass: "form-horizontal",
    attrs: {
      action: "",
      method: "post",
      enctype: "multipart/form-data"
    }
  }, [_c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Acciones")]), _vm._v(" "), _c("div", {
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
      value: _vm.registro_modal.nombre,
      expression: "registro_modal.nombre"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "nombre"
    },
    domProps: {
      value: _vm.registro_modal.nombre
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.registro_modal, "nombre", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("nombre")))])])])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("button", {
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
    staticClass: "fas fa-times"
  }), _vm._v(" Cerrar")]), _vm._v(" "), _vm.tipoAccion_modal_secuencia == 1 ? _c("button", {
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
    staticClass: "fas fa-save"
  }), _vm._v(" Guardar")]) : _vm._e(), _vm._v(" "), _vm.tipoAccion_modal_secuencia == 2 ? _c("button", {
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
    staticClass: "fas fa-save"
  }), _vm._v(" Actualizar")]) : _vm._e()])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("nav", [_c("div", {
    staticClass: "nav nav-tabs",
    attrs: {
      id: "nav-tab",
      role: "tablist"
    }
  }, [_c("a", {
    staticClass: "nav-link active",
    attrs: {
      id: "nav-home-tab",
      "data-toggle": "tab",
      href: "#nav-home",
      role: "tab",
      "aria-controls": "nav-home",
      "aria-selected": "true"
    }
  }, [_vm._v("\n                        Secuencia "), _c("i", {
    staticClass: "fas fa-walking"
  })]), _vm._v(" "), _c("a", {
    staticClass: "nav-link",
    attrs: {
      id: "nav-profile-tab",
      "data-toggle": "tab",
      href: "#nav-profile",
      role: "tab",
      "aria-controls": "nav-profile",
      "aria-selected": "false"
    }
  }, [_vm._v("\n                        Riesgo "), _c("i", {
    staticClass: "fas fa-exclamation-triangle"
  })]), _vm._v(" "), _c("a", {
    staticClass: "nav-link",
    attrs: {
      id: "nav-contact-tab",
      "data-toggle": "tab",
      href: "#nav-contact",
      role: "tab",
      "aria-controls": "nav-contact",
      "aria-selected": "false"
    }
  }, [_vm._v("\n                        Recomendación "), _c("i", {
    staticClass: "fas fa-exclamation"
  })])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/Vale.vue?vue&type=template&id=a263650c":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/Vale.vue?vue&type=template&id=a263650c ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "card-body"
  }, [_c("ul", {
    ref: "tabs",
    staticClass: "nav nav-tabs",
    attrs: {
      role: "tablist"
    }
  }, [_c("li", {
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
    staticClass: "fas fa-plus"
  }), _vm._v(" Vales EPP")])]), _vm._v(" "), _c("li", {
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
    staticClass: "fas fa-book"
  }), _vm._v(" Consulta")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "tab-content"
  }, [_c("div", {
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
  }, [_c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.detalle == false,
      expression: "detalle == false"
    }],
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("i", {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" Vale entrega EPP\n                        "), _c("button", {
    staticClass: "btn btn-dark float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.abrirModal("vale", "registrar");
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  }), _vm._v(" Nuevo\n                        ")]), _vm._v(" "), _c("button", {
    staticClass: "mr-1 btn btn-dark float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.reporteEpp
    }
  }, [_c("i", {
    staticClass: "fas fa-download mr-1"
  }), _vm._v("Reporte\n                        ")])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("v-client-table", {
    attrs: {
      data: _vm.tableData,
      options: _vm.options,
      columns: _vm.columns
    },
    scopedSlots: _vm._u([{
      key: "empleado_id",
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
            type: "button",
            href: "#"
          },
          on: {
            click: function click($event) {
              return _vm.detalles(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-eye"
        }), _vm._v(" Detalles\n                                            ")])])])])];
      }
    }, {
      key: "descargar",
      fn: function fn(props) {
        return [_c("button", {
          staticClass: "btn btn-dark",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.descargar(props.row, 2);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-file-pdf mr-1"
        }), _vm._v(" Descargar\n                                ")])];
      }
    }])
  })], 1)]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.detalle == true,
      expression: "detalle == true"
    }],
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("i", {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" Detalle de " + _vm._s(_vm.data_detalle == "" ? "" : _vm.data_detalle.empleado) + "\n                        "), _c("button", {
    staticClass: "btn btn-secondary float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.atras();
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-arrow-left"
  }), _vm._v(" Atras\n                        ")])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("v-client-table", {
    attrs: {
      data: _vm.tableDataDetalle,
      options: _vm.optionsDetalle,
      columns: _vm.columnsDetalle
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
        }, [!props.row.autorizado ? _c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button",
            href: "#"
          },
          on: {
            click: function click($event) {
              return _vm.eliminar(props.row.id);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-trash"
        }), _vm._v(" Eliminar\n                                            ")]) : _vm._e(), _vm._v(" "), !props.row.autorizado ? _c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button",
            href: "#"
          },
          on: {
            click: function click($event) {
              return _vm.Actualizar(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-save"
        }), _vm._v(" Actualizar\n                                            ")]) : _vm._e()])])])];
      }
    }, {
      key: "autorizado",
      fn: function fn(props) {
        return [props.row.autorizado ? _c("button", {
          staticClass: "btn btn-outline-success"
        }, [_vm._v("Autorizado")]) : _c("button", {
          staticClass: "btn btn-outline-danger"
        }, [_vm._v("No autorizado")])];
      }
    }])
  })], 1)])]), _vm._v(" "), _c("div", {
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
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-10 mb-3"
  }, [_c("v-select", {
    attrs: {
      options: _vm.listadoArticulos,
      label: "descripcion"
    },
    model: {
      value: _vm.articulo_epp,
      callback: function callback($$v) {
        _vm.articulo_epp = $$v;
      },
      expression: "articulo_epp"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-1 mb-3"
  }, [_c("button", {
    staticClass: "btn btn-outline-dark",
    on: {
      click: function click($event) {
        return _vm.BuscarArtEpp();
      }
    }
  }, [_vm._v("Buscar")])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-1 mb-3"
  }, [_c("button", {
    staticClass: "btn btn-outline-success",
    on: {
      click: function click($event) {
        return _vm.ExportarArtEpp();
      }
    }
  }, [_vm._v("Exportar")])])]), _vm._v(" "), _c("v-client-table", {
    attrs: {
      data: _vm.tableDataArticulos,
      options: _vm.optionsarticulos,
      columns: _vm.columnsarticulos
    }
  })], 1)])])]), _vm._v(" "), _c("div", {
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
    staticClass: "modal-dialog modal-dark modal-xlg",
    attrs: {
      role: "document"
    }
  }, [_c("div", {
    staticClass: "modal-content"
  }, [_c("div", [_c("div", {
    staticClass: "modal-header"
  }, [_c("h4", {
    staticClass: "modal-title"
  }, [_vm._v(_vm._s(_vm.tituloModal))]), _vm._v(" "), _c("button", {
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
    staticClass: "modal-body",
    style: _vm.estilo_form
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isLoading
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-6 mb-3"
  }, [_c("label", [_vm._v("Nombre empleado")]), _vm._v(" "), _c("v-select", {
    attrs: {
      options: _vm.listaEmpleados,
      label: "name"
    },
    model: {
      value: _vm.empleado_entrega,
      callback: function callback($$v) {
        _vm.empleado_entrega = $$v;
      },
      expression: "empleado_entrega"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 mb-3"
  }, [_c("label", [_vm._v("Proyecto")]), _vm._v(" "), _c("v-select", {
    attrs: {
      options: _vm.listaProyectos,
      label: "name"
    },
    model: {
      value: _vm.proyectoId,
      callback: function callback($$v) {
        _vm.proyectoId = $$v;
      },
      expression: "proyectoId"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-12 mb-3"
  }, [_c("label", [_vm._v("Seleccione")]), _vm._v(" "), _c("v-select", {
    attrs: {
      options: _vm.listaCatalogo,
      label: "descripcion",
      "data-vv-name": "catalogo"
    },
    on: {
      search: _vm.buscar
    },
    model: {
      value: _vm.catalogo,
      callback: function callback($$v) {
        _vm.catalogo = $$v;
      },
      expression: "catalogo"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("catalogo")))])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-2 mb-3"
  }, [_c("label", [_vm._v("Cantidad")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.cantidad,
      expression: "cantidad"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
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
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 mb-3"
  }, [_c("label", [_vm._v("Fecha")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.fecha,
      expression: "fecha"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date"
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
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-7 mb-3"
  }, [_c("label", [_vm._v("Autorizó")]), _vm._v(" "), _c("v-select", {
    attrs: {
      options: _vm.listaEmpleados,
      label: "name"
    },
    model: {
      value: _vm.empleado_autoriza,
      callback: function callback($$v) {
        _vm.empleado_autoriza = $$v;
      },
      expression: "empleado_autoriza"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-1 mb-3"
  }, [_c("label", [_vm._v(" ")]), _c("br"), _vm._v(" "), _c("button", {
    staticClass: "btn btn-outline-dark",
    attrs: {
      name: "button"
    },
    on: {
      click: function click($event) {
        return _vm.guardarasignacion();
      }
    }
  }, [_vm._v("Crear")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("label", {
    staticClass: "col-form-label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("Observaciones")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.observaciones,
      expression: "observaciones"
    }],
    staticClass: "form-control",
    attrs: {
      rows: "3",
      type: "text"
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
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-row mt-4"
  }, [_c("label", {
    staticClass: "col-md-1 col-form-label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("Motivo")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.motivo,
      expression: "motivo"
    }],
    staticClass: "form-control col-md-3",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.motivo = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("Cambio por desgaste")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "2"
    }
  }, [_vm._v("Cambio por extravío")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "3"
    }
  }, [_vm._v("Personal de nuevo ingreso")])])]), _vm._v(" "), _c("hr"), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._l(_vm.listado_data, function (vi, index) {
    return _c("li", {
      key: index,
      staticClass: "list-group-item"
    }, [_c("div", {
      staticClass: "form-row"
    }, [_c("div", {
      staticClass: "form-group col-md-3"
    }, [_c("label", [_vm._v(_vm._s(vi.descripcion))])]), _vm._v(" "), _c("div", {
      staticClass: "form-group col-md-2"
    }, [_c("label", [_vm._v(_vm._s(vi.empleado))])]), _vm._v(" "), _c("div", {
      staticClass: "form-group col-md-1"
    }, [_c("label", [_vm._v(_vm._s(vi.proyecto))])]), _vm._v(" "), _c("div", {
      staticClass: "form-group col-md-1"
    }, [_c("label", [_vm._v(_vm._s(vi.cantidad))])]), _vm._v(" "), _c("div", {
      staticClass: "form-group col-md-1"
    }, [_c("label", [_vm._v(_vm._s(vi.fecha))])]), _vm._v(" "), _c("div", {
      staticClass: "form-group col-md-2"
    }, [_c("label", [_vm._v(_vm._s(vi.observaciones))])]), _vm._v(" "), _c("div", {
      staticClass: "form-group col-md-1"
    }, [_c("label", [_vm._v(_vm._s(vi.iniciales))])]), _vm._v(" "), _c("div", {
      staticClass: "form-group col-md-1"
    }, [_c("a", {
      on: {
        click: function click($event) {
          return _vm.deleteu(index);
        }
      }
    }, [_c("span", {
      staticClass: "fas fa-trash",
      attrs: {
        "arial-hidden": "true"
      }
    })])])])]);
  }), _vm._v(" "), _c("br"), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "text-center"
  }, [_c("p", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.autorizado,
      expression: "!autorizado"
    }],
    staticClass: "h2 text-danger"
  }, [_vm._v("No autorizado")]), _vm._v(" "), _c("p", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.autorizado,
      expression: "autorizado"
    }],
    staticClass: "h2 text-success"
  }, [_vm._v("Autorizado")])]), _vm._v(" "), _c("br")], 2), _vm._v(" "), _c("div", {
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
  }), _vm._v(" Cerrar\n                            ")]), _vm._v(" "), _c("button", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.autorizado,
      expression: "!autorizado"
    }],
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.Autorizar();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-lock mr-1"
  }), _vm._v("Autorizar\n                            ")]), _vm._v(" "), _c("button", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.autorizado && _vm.tipoAccion == 1,
      expression: "autorizado && tipoAccion == 1"
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
  }, [_c("i", {
    staticClass: "fas fa-save mr-1"
  }), _vm._v("Guardar\n                            ")]), _vm._v(" "), _c("button", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.autorizado && _vm.tipoAccion == 2,
      expression: "autorizado && tipoAccion == 2"
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
  }, [_c("i", {
    staticClass: "fas fa-save mr-1"
  }), _vm._v("Actualizar\n                            ")])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "modal fade",
    "class": {
      mostrar: _vm.modal_actualizar
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
  }, [_vm._v("Actualizar")]), _vm._v(" "), _c("button", {
    staticClass: "close",
    attrs: {
      type: "button",
      "aria-label": "Close"
    },
    on: {
      click: function click($event) {
        return _vm.cerrarModalAct();
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
    staticClass: "col-md-12 mb-3"
  }, [_c("label", [_vm._v("Seleccione")]), _vm._v(" "), _c("v-select", {
    attrs: {
      options: _vm.listaCatalogo,
      label: "descripcion",
      "data-vv-name": "catalogo"
    },
    on: {
      search: _vm.buscar
    },
    model: {
      value: _vm.partida.articulo,
      callback: function callback($$v) {
        _vm.$set(_vm.partida, "articulo", $$v);
      },
      expression: "partida.articulo"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("catalogo")))])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v("Cantidad")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.partida.cantidad,
      expression: "partida.cantidad"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.partida.cantidad
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.partida, "cantidad", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v("Fecha")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.partida.fecha,
      expression: "partida.fecha"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date"
    },
    domProps: {
      value: _vm.partida.fecha
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.partida, "fecha", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-5 mb-3"
  }, [_c("label", [_vm._v("Autorizó")]), _vm._v(" "), _c("v-select", {
    attrs: {
      options: _vm.listaEmpleados,
      label: "name"
    },
    model: {
      value: _vm.partida.autoriza,
      callback: function callback($$v) {
        _vm.$set(_vm.partida, "autoriza", $$v);
      },
      expression: "partida.autoriza"
    }
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("button", {
    staticClass: "btn btn-outline-dark",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.cerrarModalAct();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-window-close"
  }), _vm._v(" Cerrar\n                            ")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.GuardarAct();
      }
    }
  }, [_vm._v("\n                                Actualizar\n                            ")])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "modal fade",
    "class": {
      mostrar: _vm.modal_autorizar
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
  }, [_vm._v("Autorizar Entrega de EPP")]), _vm._v(" "), _c("button", {
    staticClass: "close",
    attrs: {
      type: "button",
      "aria-label": "Close"
    },
    on: {
      click: function click($event) {
        return _vm.CerrarModalAutorizar();
      }
    }
  }, [_c("span", {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("x")])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-8"
  }, [_vm.modal_autorizar ? _c("qrcode-stream", {
    on: {
      decode: _vm.onDecodeAutorizar,
      init: _vm.onInit
    }
  }) : _vm._e()], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12"
  }, [_c("br"), _vm._v(" "), _c("h2", {
    staticStyle: {
      "font-family": "'Share Tech Mono', monospace",
      "text-align": "center"
    }
  }, [_vm._v("\n                                    " + _vm._s(_vm.empleado_autorizado) + "\n                                ")])])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("button", {
    staticClass: "btn btn-outline-dark",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.CerrarModalAutorizar();
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
        return _vm.GuardarAutorizacion();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Guardar")]) : _vm._e()])])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-3"
  }, [_c("label", [_c("b", [_vm._v("Articulo")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-2"
  }, [_c("label", [_c("b", [_vm._v("Empleado")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-1"
  }, [_c("label", [_c("b", [_vm._v("Proyecto")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-1"
  }, [_c("label", [_c("b", [_vm._v("Cantidad")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-1"
  }, [_c("label", [_c("b", [_vm._v("Fecha")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-2"
  }, [_c("label", [_c("b", [_vm._v("Observaciones")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-1"
  }, [_c("label", [_c("b", [_vm._v("Aut")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-1"
  }, [_c("label", [_c("b", [_vm._v(".")])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/Vale.vue?vue&type=style&index=0&id=a263650c&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/Vale.vue?vue&type=style&index=0&id=a263650c&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.modal-xlg {\n    max-width: 1200px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/Vale.vue?vue&type=style&index=0&id=a263650c&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/Vale.vue?vue&type=style&index=0&id=a263650c&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Vale_vue_vue_type_style_index_0_id_a263650c_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Vale.vue?vue&type=style&index=0&id=a263650c&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/Vale.vue?vue&type=style&index=0&id=a263650c&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Vale_vue_vue_type_style_index_0_id_a263650c_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Vale_vue_vue_type_style_index_0_id_a263650c_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/assets/js/components/Seguridad/Alcoholimetria.vue":
/*!*********************************************************************!*\
  !*** ./resources/assets/js/components/Seguridad/Alcoholimetria.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Alcoholimetria_vue_vue_type_template_id_4042309f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Alcoholimetria.vue?vue&type=template&id=4042309f */ "./resources/assets/js/components/Seguridad/Alcoholimetria.vue?vue&type=template&id=4042309f");
/* harmony import */ var _Alcoholimetria_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Alcoholimetria.vue?vue&type=script&lang=js */ "./resources/assets/js/components/Seguridad/Alcoholimetria.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Alcoholimetria_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Alcoholimetria_vue_vue_type_template_id_4042309f__WEBPACK_IMPORTED_MODULE_0__.render,
  _Alcoholimetria_vue_vue_type_template_id_4042309f__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/Seguridad/Alcoholimetria.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Seguridad/Alcoholimetria.vue?vue&type=script&lang=js":
/*!*********************************************************************************************!*\
  !*** ./resources/assets/js/components/Seguridad/Alcoholimetria.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Alcoholimetria_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Alcoholimetria.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/Alcoholimetria.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Alcoholimetria_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Seguridad/Alcoholimetria.vue?vue&type=template&id=4042309f":
/*!***************************************************************************************************!*\
  !*** ./resources/assets/js/components/Seguridad/Alcoholimetria.vue?vue&type=template&id=4042309f ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Alcoholimetria_vue_vue_type_template_id_4042309f__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Alcoholimetria_vue_vue_type_template_id_4042309f__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Alcoholimetria_vue_vue_type_template_id_4042309f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Alcoholimetria.vue?vue&type=template&id=4042309f */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/Alcoholimetria.vue?vue&type=template&id=4042309f");


/***/ }),

/***/ "./resources/assets/js/components/Seguridad/AnalisisSeguridad.vue":
/*!************************************************************************!*\
  !*** ./resources/assets/js/components/Seguridad/AnalisisSeguridad.vue ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AnalisisSeguridad_vue_vue_type_template_id_341fad04__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnalisisSeguridad.vue?vue&type=template&id=341fad04 */ "./resources/assets/js/components/Seguridad/AnalisisSeguridad.vue?vue&type=template&id=341fad04");
/* harmony import */ var _AnalisisSeguridad_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnalisisSeguridad.vue?vue&type=script&lang=js */ "./resources/assets/js/components/Seguridad/AnalisisSeguridad.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AnalisisSeguridad_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _AnalisisSeguridad_vue_vue_type_template_id_341fad04__WEBPACK_IMPORTED_MODULE_0__.render,
  _AnalisisSeguridad_vue_vue_type_template_id_341fad04__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/Seguridad/AnalisisSeguridad.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Seguridad/AnalisisSeguridad.vue?vue&type=script&lang=js":
/*!************************************************************************************************!*\
  !*** ./resources/assets/js/components/Seguridad/AnalisisSeguridad.vue?vue&type=script&lang=js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AnalisisSeguridad_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AnalisisSeguridad.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/AnalisisSeguridad.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AnalisisSeguridad_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Seguridad/AnalisisSeguridad.vue?vue&type=template&id=341fad04":
/*!******************************************************************************************************!*\
  !*** ./resources/assets/js/components/Seguridad/AnalisisSeguridad.vue?vue&type=template&id=341fad04 ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AnalisisSeguridad_vue_vue_type_template_id_341fad04__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AnalisisSeguridad_vue_vue_type_template_id_341fad04__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AnalisisSeguridad_vue_vue_type_template_id_341fad04__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AnalisisSeguridad.vue?vue&type=template&id=341fad04 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/AnalisisSeguridad.vue?vue&type=template&id=341fad04");


/***/ }),

/***/ "./resources/assets/js/components/Seguridad/BitacoraResiduos.vue":
/*!***********************************************************************!*\
  !*** ./resources/assets/js/components/Seguridad/BitacoraResiduos.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BitacoraResiduos_vue_vue_type_template_id_598bffc3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BitacoraResiduos.vue?vue&type=template&id=598bffc3 */ "./resources/assets/js/components/Seguridad/BitacoraResiduos.vue?vue&type=template&id=598bffc3");
/* harmony import */ var _BitacoraResiduos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BitacoraResiduos.vue?vue&type=script&lang=js */ "./resources/assets/js/components/Seguridad/BitacoraResiduos.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BitacoraResiduos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _BitacoraResiduos_vue_vue_type_template_id_598bffc3__WEBPACK_IMPORTED_MODULE_0__.render,
  _BitacoraResiduos_vue_vue_type_template_id_598bffc3__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/Seguridad/BitacoraResiduos.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Seguridad/BitacoraResiduos.vue?vue&type=script&lang=js":
/*!***********************************************************************************************!*\
  !*** ./resources/assets/js/components/Seguridad/BitacoraResiduos.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BitacoraResiduos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BitacoraResiduos.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/BitacoraResiduos.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BitacoraResiduos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Seguridad/BitacoraResiduos.vue?vue&type=template&id=598bffc3":
/*!*****************************************************************************************************!*\
  !*** ./resources/assets/js/components/Seguridad/BitacoraResiduos.vue?vue&type=template&id=598bffc3 ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BitacoraResiduos_vue_vue_type_template_id_598bffc3__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BitacoraResiduos_vue_vue_type_template_id_598bffc3__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BitacoraResiduos_vue_vue_type_template_id_598bffc3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BitacoraResiduos.vue?vue&type=template&id=598bffc3 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/BitacoraResiduos.vue?vue&type=template&id=598bffc3");


/***/ }),

/***/ "./resources/assets/js/components/Seguridad/Botiquines.vue":
/*!*****************************************************************!*\
  !*** ./resources/assets/js/components/Seguridad/Botiquines.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Botiquines_vue_vue_type_template_id_541239cf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Botiquines.vue?vue&type=template&id=541239cf */ "./resources/assets/js/components/Seguridad/Botiquines.vue?vue&type=template&id=541239cf");
/* harmony import */ var _Botiquines_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Botiquines.vue?vue&type=script&lang=js */ "./resources/assets/js/components/Seguridad/Botiquines.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Botiquines_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Botiquines_vue_vue_type_template_id_541239cf__WEBPACK_IMPORTED_MODULE_0__.render,
  _Botiquines_vue_vue_type_template_id_541239cf__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/Seguridad/Botiquines.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Seguridad/Botiquines.vue?vue&type=script&lang=js":
/*!*****************************************************************************************!*\
  !*** ./resources/assets/js/components/Seguridad/Botiquines.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Botiquines_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Botiquines.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/Botiquines.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Botiquines_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Seguridad/Botiquines.vue?vue&type=template&id=541239cf":
/*!***********************************************************************************************!*\
  !*** ./resources/assets/js/components/Seguridad/Botiquines.vue?vue&type=template&id=541239cf ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Botiquines_vue_vue_type_template_id_541239cf__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Botiquines_vue_vue_type_template_id_541239cf__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Botiquines_vue_vue_type_template_id_541239cf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Botiquines.vue?vue&type=template&id=541239cf */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/Botiquines.vue?vue&type=template&id=541239cf");


/***/ }),

/***/ "./resources/assets/js/components/Seguridad/CatalogoAnalisis.vue":
/*!***********************************************************************!*\
  !*** ./resources/assets/js/components/Seguridad/CatalogoAnalisis.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CatalogoAnalisis_vue_vue_type_template_id_16477ad0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CatalogoAnalisis.vue?vue&type=template&id=16477ad0 */ "./resources/assets/js/components/Seguridad/CatalogoAnalisis.vue?vue&type=template&id=16477ad0");
/* harmony import */ var _CatalogoAnalisis_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CatalogoAnalisis.vue?vue&type=script&lang=js */ "./resources/assets/js/components/Seguridad/CatalogoAnalisis.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CatalogoAnalisis_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CatalogoAnalisis_vue_vue_type_template_id_16477ad0__WEBPACK_IMPORTED_MODULE_0__.render,
  _CatalogoAnalisis_vue_vue_type_template_id_16477ad0__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/Seguridad/CatalogoAnalisis.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Seguridad/CatalogoAnalisis.vue?vue&type=script&lang=js":
/*!***********************************************************************************************!*\
  !*** ./resources/assets/js/components/Seguridad/CatalogoAnalisis.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CatalogoAnalisis_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CatalogoAnalisis.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/CatalogoAnalisis.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CatalogoAnalisis_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Seguridad/CatalogoAnalisis.vue?vue&type=template&id=16477ad0":
/*!*****************************************************************************************************!*\
  !*** ./resources/assets/js/components/Seguridad/CatalogoAnalisis.vue?vue&type=template&id=16477ad0 ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CatalogoAnalisis_vue_vue_type_template_id_16477ad0__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CatalogoAnalisis_vue_vue_type_template_id_16477ad0__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CatalogoAnalisis_vue_vue_type_template_id_16477ad0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CatalogoAnalisis.vue?vue&type=template&id=16477ad0 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/CatalogoAnalisis.vue?vue&type=template&id=16477ad0");


/***/ }),

/***/ "./resources/assets/js/components/Seguridad/CatalogoAnalisis2.vue":
/*!************************************************************************!*\
  !*** ./resources/assets/js/components/Seguridad/CatalogoAnalisis2.vue ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CatalogoAnalisis2_vue_vue_type_template_id_b2788c6c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CatalogoAnalisis2.vue?vue&type=template&id=b2788c6c */ "./resources/assets/js/components/Seguridad/CatalogoAnalisis2.vue?vue&type=template&id=b2788c6c");
/* harmony import */ var _CatalogoAnalisis2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CatalogoAnalisis2.vue?vue&type=script&lang=js */ "./resources/assets/js/components/Seguridad/CatalogoAnalisis2.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CatalogoAnalisis2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CatalogoAnalisis2_vue_vue_type_template_id_b2788c6c__WEBPACK_IMPORTED_MODULE_0__.render,
  _CatalogoAnalisis2_vue_vue_type_template_id_b2788c6c__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/Seguridad/CatalogoAnalisis2.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Seguridad/CatalogoAnalisis2.vue?vue&type=script&lang=js":
/*!************************************************************************************************!*\
  !*** ./resources/assets/js/components/Seguridad/CatalogoAnalisis2.vue?vue&type=script&lang=js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CatalogoAnalisis2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CatalogoAnalisis2.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/CatalogoAnalisis2.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CatalogoAnalisis2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Seguridad/CatalogoAnalisis2.vue?vue&type=template&id=b2788c6c":
/*!******************************************************************************************************!*\
  !*** ./resources/assets/js/components/Seguridad/CatalogoAnalisis2.vue?vue&type=template&id=b2788c6c ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CatalogoAnalisis2_vue_vue_type_template_id_b2788c6c__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CatalogoAnalisis2_vue_vue_type_template_id_b2788c6c__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CatalogoAnalisis2_vue_vue_type_template_id_b2788c6c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CatalogoAnalisis2.vue?vue&type=template&id=b2788c6c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/CatalogoAnalisis2.vue?vue&type=template&id=b2788c6c");


/***/ }),

/***/ "./resources/assets/js/components/Seguridad/Catalogos/Folios.vue":
/*!***********************************************************************!*\
  !*** ./resources/assets/js/components/Seguridad/Catalogos/Folios.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Folios_vue_vue_type_template_id_09918b9c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Folios.vue?vue&type=template&id=09918b9c */ "./resources/assets/js/components/Seguridad/Catalogos/Folios.vue?vue&type=template&id=09918b9c");
/* harmony import */ var _Folios_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Folios.vue?vue&type=script&lang=js */ "./resources/assets/js/components/Seguridad/Catalogos/Folios.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Folios_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Folios_vue_vue_type_template_id_09918b9c__WEBPACK_IMPORTED_MODULE_0__.render,
  _Folios_vue_vue_type_template_id_09918b9c__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/Seguridad/Catalogos/Folios.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Seguridad/Catalogos/Folios.vue?vue&type=script&lang=js":
/*!***********************************************************************************************!*\
  !*** ./resources/assets/js/components/Seguridad/Catalogos/Folios.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Folios_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Folios.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/Catalogos/Folios.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Folios_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Seguridad/Catalogos/Folios.vue?vue&type=template&id=09918b9c":
/*!*****************************************************************************************************!*\
  !*** ./resources/assets/js/components/Seguridad/Catalogos/Folios.vue?vue&type=template&id=09918b9c ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Folios_vue_vue_type_template_id_09918b9c__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Folios_vue_vue_type_template_id_09918b9c__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Folios_vue_vue_type_template_id_09918b9c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Folios.vue?vue&type=template&id=09918b9c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/Catalogos/Folios.vue?vue&type=template&id=09918b9c");


/***/ }),

/***/ "./resources/assets/js/components/Seguridad/InspeccionEpp.vue":
/*!********************************************************************!*\
  !*** ./resources/assets/js/components/Seguridad/InspeccionEpp.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _InspeccionEpp_vue_vue_type_template_id_192b409a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InspeccionEpp.vue?vue&type=template&id=192b409a */ "./resources/assets/js/components/Seguridad/InspeccionEpp.vue?vue&type=template&id=192b409a");
/* harmony import */ var _InspeccionEpp_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InspeccionEpp.vue?vue&type=script&lang=js */ "./resources/assets/js/components/Seguridad/InspeccionEpp.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _InspeccionEpp_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _InspeccionEpp_vue_vue_type_template_id_192b409a__WEBPACK_IMPORTED_MODULE_0__.render,
  _InspeccionEpp_vue_vue_type_template_id_192b409a__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/Seguridad/InspeccionEpp.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Seguridad/InspeccionEpp.vue?vue&type=script&lang=js":
/*!********************************************************************************************!*\
  !*** ./resources/assets/js/components/Seguridad/InspeccionEpp.vue?vue&type=script&lang=js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InspeccionEpp_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InspeccionEpp.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/InspeccionEpp.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InspeccionEpp_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Seguridad/InspeccionEpp.vue?vue&type=template&id=192b409a":
/*!**************************************************************************************************!*\
  !*** ./resources/assets/js/components/Seguridad/InspeccionEpp.vue?vue&type=template&id=192b409a ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InspeccionEpp_vue_vue_type_template_id_192b409a__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InspeccionEpp_vue_vue_type_template_id_192b409a__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InspeccionEpp_vue_vue_type_template_id_192b409a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InspeccionEpp.vue?vue&type=template&id=192b409a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/InspeccionEpp.vue?vue&type=template&id=192b409a");


/***/ }),

/***/ "./resources/assets/js/components/Seguridad/ListaAsistencia.vue":
/*!**********************************************************************!*\
  !*** ./resources/assets/js/components/Seguridad/ListaAsistencia.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ListaAsistencia_vue_vue_type_template_id_e236add2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListaAsistencia.vue?vue&type=template&id=e236add2 */ "./resources/assets/js/components/Seguridad/ListaAsistencia.vue?vue&type=template&id=e236add2");
/* harmony import */ var _ListaAsistencia_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListaAsistencia.vue?vue&type=script&lang=js */ "./resources/assets/js/components/Seguridad/ListaAsistencia.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ListaAsistencia_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ListaAsistencia_vue_vue_type_template_id_e236add2__WEBPACK_IMPORTED_MODULE_0__.render,
  _ListaAsistencia_vue_vue_type_template_id_e236add2__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/Seguridad/ListaAsistencia.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Seguridad/ListaAsistencia.vue?vue&type=script&lang=js":
/*!**********************************************************************************************!*\
  !*** ./resources/assets/js/components/Seguridad/ListaAsistencia.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListaAsistencia_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ListaAsistencia.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/ListaAsistencia.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListaAsistencia_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Seguridad/ListaAsistencia.vue?vue&type=template&id=e236add2":
/*!****************************************************************************************************!*\
  !*** ./resources/assets/js/components/Seguridad/ListaAsistencia.vue?vue&type=template&id=e236add2 ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListaAsistencia_vue_vue_type_template_id_e236add2__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListaAsistencia_vue_vue_type_template_id_e236add2__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListaAsistencia_vue_vue_type_template_id_e236add2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ListaAsistencia.vue?vue&type=template&id=e236add2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/ListaAsistencia.vue?vue&type=template&id=e236add2");


/***/ }),

/***/ "./resources/assets/js/components/Seguridad/NuevoAnalisisSeguridad.vue":
/*!*****************************************************************************!*\
  !*** ./resources/assets/js/components/Seguridad/NuevoAnalisisSeguridad.vue ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NuevoAnalisisSeguridad_vue_vue_type_template_id_1886a47a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NuevoAnalisisSeguridad.vue?vue&type=template&id=1886a47a */ "./resources/assets/js/components/Seguridad/NuevoAnalisisSeguridad.vue?vue&type=template&id=1886a47a");
/* harmony import */ var _NuevoAnalisisSeguridad_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NuevoAnalisisSeguridad.vue?vue&type=script&lang=js */ "./resources/assets/js/components/Seguridad/NuevoAnalisisSeguridad.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NuevoAnalisisSeguridad_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _NuevoAnalisisSeguridad_vue_vue_type_template_id_1886a47a__WEBPACK_IMPORTED_MODULE_0__.render,
  _NuevoAnalisisSeguridad_vue_vue_type_template_id_1886a47a__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/Seguridad/NuevoAnalisisSeguridad.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Seguridad/NuevoAnalisisSeguridad.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************!*\
  !*** ./resources/assets/js/components/Seguridad/NuevoAnalisisSeguridad.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NuevoAnalisisSeguridad_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NuevoAnalisisSeguridad.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/NuevoAnalisisSeguridad.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NuevoAnalisisSeguridad_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Seguridad/NuevoAnalisisSeguridad.vue?vue&type=template&id=1886a47a":
/*!***********************************************************************************************************!*\
  !*** ./resources/assets/js/components/Seguridad/NuevoAnalisisSeguridad.vue?vue&type=template&id=1886a47a ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NuevoAnalisisSeguridad_vue_vue_type_template_id_1886a47a__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NuevoAnalisisSeguridad_vue_vue_type_template_id_1886a47a__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NuevoAnalisisSeguridad_vue_vue_type_template_id_1886a47a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NuevoAnalisisSeguridad.vue?vue&type=template&id=1886a47a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/NuevoAnalisisSeguridad.vue?vue&type=template&id=1886a47a");


/***/ }),

/***/ "./resources/assets/js/components/Seguridad/PermisoSeguridad.vue":
/*!***********************************************************************!*\
  !*** ./resources/assets/js/components/Seguridad/PermisoSeguridad.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PermisoSeguridad_vue_vue_type_template_id_52fc26b1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PermisoSeguridad.vue?vue&type=template&id=52fc26b1 */ "./resources/assets/js/components/Seguridad/PermisoSeguridad.vue?vue&type=template&id=52fc26b1");
/* harmony import */ var _PermisoSeguridad_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PermisoSeguridad.vue?vue&type=script&lang=js */ "./resources/assets/js/components/Seguridad/PermisoSeguridad.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PermisoSeguridad_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _PermisoSeguridad_vue_vue_type_template_id_52fc26b1__WEBPACK_IMPORTED_MODULE_0__.render,
  _PermisoSeguridad_vue_vue_type_template_id_52fc26b1__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/Seguridad/PermisoSeguridad.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Seguridad/PermisoSeguridad.vue?vue&type=script&lang=js":
/*!***********************************************************************************************!*\
  !*** ./resources/assets/js/components/Seguridad/PermisoSeguridad.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PermisoSeguridad_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PermisoSeguridad.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/PermisoSeguridad.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PermisoSeguridad_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Seguridad/PermisoSeguridad.vue?vue&type=template&id=52fc26b1":
/*!*****************************************************************************************************!*\
  !*** ./resources/assets/js/components/Seguridad/PermisoSeguridad.vue?vue&type=template&id=52fc26b1 ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PermisoSeguridad_vue_vue_type_template_id_52fc26b1__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PermisoSeguridad_vue_vue_type_template_id_52fc26b1__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PermisoSeguridad_vue_vue_type_template_id_52fc26b1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PermisoSeguridad.vue?vue&type=template&id=52fc26b1 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/PermisoSeguridad.vue?vue&type=template&id=52fc26b1");


/***/ }),

/***/ "./resources/assets/js/components/Seguridad/Platicas.vue":
/*!***************************************************************!*\
  !*** ./resources/assets/js/components/Seguridad/Platicas.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Platicas_vue_vue_type_template_id_26a57411__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Platicas.vue?vue&type=template&id=26a57411 */ "./resources/assets/js/components/Seguridad/Platicas.vue?vue&type=template&id=26a57411");
/* harmony import */ var _Platicas_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Platicas.vue?vue&type=script&lang=js */ "./resources/assets/js/components/Seguridad/Platicas.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Platicas_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Platicas_vue_vue_type_template_id_26a57411__WEBPACK_IMPORTED_MODULE_0__.render,
  _Platicas_vue_vue_type_template_id_26a57411__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/Seguridad/Platicas.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Seguridad/Platicas.vue?vue&type=script&lang=js":
/*!***************************************************************************************!*\
  !*** ./resources/assets/js/components/Seguridad/Platicas.vue?vue&type=script&lang=js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Platicas_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Platicas.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/Platicas.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Platicas_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Seguridad/Platicas.vue?vue&type=template&id=26a57411":
/*!*********************************************************************************************!*\
  !*** ./resources/assets/js/components/Seguridad/Platicas.vue?vue&type=template&id=26a57411 ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Platicas_vue_vue_type_template_id_26a57411__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Platicas_vue_vue_type_template_id_26a57411__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Platicas_vue_vue_type_template_id_26a57411__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Platicas.vue?vue&type=template&id=26a57411 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/Platicas.vue?vue&type=template&id=26a57411");


/***/ }),

/***/ "./resources/assets/js/components/Seguridad/Residuos.vue":
/*!***************************************************************!*\
  !*** ./resources/assets/js/components/Seguridad/Residuos.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Residuos_vue_vue_type_template_id_8aa1a4d8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Residuos.vue?vue&type=template&id=8aa1a4d8 */ "./resources/assets/js/components/Seguridad/Residuos.vue?vue&type=template&id=8aa1a4d8");
/* harmony import */ var _Residuos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Residuos.vue?vue&type=script&lang=js */ "./resources/assets/js/components/Seguridad/Residuos.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Residuos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Residuos_vue_vue_type_template_id_8aa1a4d8__WEBPACK_IMPORTED_MODULE_0__.render,
  _Residuos_vue_vue_type_template_id_8aa1a4d8__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/Seguridad/Residuos.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Seguridad/Residuos.vue?vue&type=script&lang=js":
/*!***************************************************************************************!*\
  !*** ./resources/assets/js/components/Seguridad/Residuos.vue?vue&type=script&lang=js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Residuos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Residuos.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/Residuos.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Residuos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Seguridad/Residuos.vue?vue&type=template&id=8aa1a4d8":
/*!*********************************************************************************************!*\
  !*** ./resources/assets/js/components/Seguridad/Residuos.vue?vue&type=template&id=8aa1a4d8 ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Residuos_vue_vue_type_template_id_8aa1a4d8__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Residuos_vue_vue_type_template_id_8aa1a4d8__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Residuos_vue_vue_type_template_id_8aa1a4d8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Residuos.vue?vue&type=template&id=8aa1a4d8 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/Residuos.vue?vue&type=template&id=8aa1a4d8");


/***/ }),

/***/ "./resources/assets/js/components/Seguridad/Secuencias.vue":
/*!*****************************************************************!*\
  !*** ./resources/assets/js/components/Seguridad/Secuencias.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Secuencias_vue_vue_type_template_id_7ab0d39b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Secuencias.vue?vue&type=template&id=7ab0d39b */ "./resources/assets/js/components/Seguridad/Secuencias.vue?vue&type=template&id=7ab0d39b");
/* harmony import */ var _Secuencias_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Secuencias.vue?vue&type=script&lang=js */ "./resources/assets/js/components/Seguridad/Secuencias.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Secuencias_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Secuencias_vue_vue_type_template_id_7ab0d39b__WEBPACK_IMPORTED_MODULE_0__.render,
  _Secuencias_vue_vue_type_template_id_7ab0d39b__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/Seguridad/Secuencias.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Seguridad/Secuencias.vue?vue&type=script&lang=js":
/*!*****************************************************************************************!*\
  !*** ./resources/assets/js/components/Seguridad/Secuencias.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Secuencias_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Secuencias.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/Secuencias.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Secuencias_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Seguridad/Secuencias.vue?vue&type=template&id=7ab0d39b":
/*!***********************************************************************************************!*\
  !*** ./resources/assets/js/components/Seguridad/Secuencias.vue?vue&type=template&id=7ab0d39b ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Secuencias_vue_vue_type_template_id_7ab0d39b__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Secuencias_vue_vue_type_template_id_7ab0d39b__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Secuencias_vue_vue_type_template_id_7ab0d39b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Secuencias.vue?vue&type=template&id=7ab0d39b */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/Secuencias.vue?vue&type=template&id=7ab0d39b");


/***/ }),

/***/ "./resources/assets/js/components/Seguridad/Vale.vue":
/*!***********************************************************!*\
  !*** ./resources/assets/js/components/Seguridad/Vale.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Vale_vue_vue_type_template_id_a263650c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vale.vue?vue&type=template&id=a263650c */ "./resources/assets/js/components/Seguridad/Vale.vue?vue&type=template&id=a263650c");
/* harmony import */ var _Vale_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Vale.vue?vue&type=script&lang=js */ "./resources/assets/js/components/Seguridad/Vale.vue?vue&type=script&lang=js");
/* harmony import */ var _Vale_vue_vue_type_style_index_0_id_a263650c_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Vale.vue?vue&type=style&index=0&id=a263650c&lang=css */ "./resources/assets/js/components/Seguridad/Vale.vue?vue&type=style&index=0&id=a263650c&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Vale_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Vale_vue_vue_type_template_id_a263650c__WEBPACK_IMPORTED_MODULE_0__.render,
  _Vale_vue_vue_type_template_id_a263650c__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/Seguridad/Vale.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Seguridad/Vale.vue?vue&type=script&lang=js":
/*!***********************************************************************************!*\
  !*** ./resources/assets/js/components/Seguridad/Vale.vue?vue&type=script&lang=js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Vale_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Vale.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/Vale.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Vale_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Seguridad/Vale.vue?vue&type=style&index=0&id=a263650c&lang=css":
/*!*******************************************************************************************************!*\
  !*** ./resources/assets/js/components/Seguridad/Vale.vue?vue&type=style&index=0&id=a263650c&lang=css ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Vale_vue_vue_type_style_index_0_id_a263650c_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Vale.vue?vue&type=style&index=0&id=a263650c&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/Vale.vue?vue&type=style&index=0&id=a263650c&lang=css");


/***/ }),

/***/ "./resources/assets/js/components/Seguridad/Vale.vue?vue&type=template&id=a263650c":
/*!*****************************************************************************************!*\
  !*** ./resources/assets/js/components/Seguridad/Vale.vue?vue&type=template&id=a263650c ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Vale_vue_vue_type_template_id_a263650c__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Vale_vue_vue_type_template_id_a263650c__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Vale_vue_vue_type_template_id_a263650c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Vale.vue?vue&type=template&id=a263650c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Seguridad/Vale.vue?vue&type=template&id=a263650c");


/***/ })

}]);