(self["webpackChunk"] = self["webpackChunk"] || []).push([["proyecto"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Proyecto/Dashboard/Dashboard.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Proyecto/Dashboard/Dashboard.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var RequisicionesAutorizar = function RequisicionesAutorizar(r) {
  return __webpack_require__.e(/*! require.ensure | proyecto */ "proyecto").then((function () {
    return r(__webpack_require__(/*! ./RequisicionesAutorizar.vue */ "./resources/assets/js/components/Proyecto/Dashboard/RequisicionesAutorizar.vue"));
  }).bind(null, __webpack_require__))['catch'](__webpack_require__.oe);
};
var RequisicionesValidar = function RequisicionesValidar(r) {
  return __webpack_require__.e(/*! require.ensure | proyecto */ "proyecto").then((function () {
    return r(__webpack_require__(/*! ./RequisicionesValidar.vue */ "./resources/assets/js/components/Proyecto/Dashboard/RequisicionesValidar.vue"));
  }).bind(null, __webpack_require__))['catch'](__webpack_require__.oe);
};
var modulo_id = 3;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      isLoading: false,
      listaPermisos: [],
      widgets: {
        autorizarequisicion: false,
        validarequisicion: false
      }
    };
  },
  components: {
    'autorizarequisicion': RequisicionesAutorizar,
    'validarequisicion': RequisicionesValidar
  },
  methods: {
    escucharHijo: function escucharHijo() {
      this.getListaPermisos();
    },
    getListaPermisos: function getListaPermisos() {
      var _this = this;
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
          childautorizarequisicion.cargarequisicion();
        }
        if (me.listaPermisos.indexOf('validarequisicion') >= 0) {
          me.widgets.validarequisicion = true;
          var childvalidarequisicion = _this.$refs.validarequisicion;
          childvalidarequisicion.cargarequisicion();
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Proyecto/Dashboard/RequisicionesAutorizar.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Proyecto/Dashboard/RequisicionesAutorizar.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
      id_requisicion: 0,
      isLoading: false,
      solicitudes: [],
      detalle: false,
      nuevo: null,
      solicitud: [],
      detalles_ver: false,
      detalles_solicitudes: null,
      tipo_cambio: 0,
      moneda: 0,
      columns: ['id', 'folio', 'nombrep', 'fecha_solicitud', 'nombre_solicita', 'descripcion_uso', 'condicion'],
      dataTable: [],
      options: {
        headings: {
          'id': 'Acciones',
          'articulo_descripcion': 'Artículo',
          'nombrep': 'Proyecto',
          'nombre_solicita': 'Empleado que solicita',
          'descripcion_uso': 'Uso',
          'condicion': 'Validar'
        },
        perPage: 10,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        filterByColumn: true,
        texts: config.texts
      },
      dataTableDetalle: [],
      columnsDetalle: ['req.descripcion', 'req.cantidades', 'req.cantidad_almacen', 'req.cantidad_compra', 'req.unidad_articulo', 'req.comentario_partida', 'req.frequerido', 'autorizar'],
      optionsDetalle: {
        headings: {
          'req.descripcion': 'Articulo',
          'req.cantidades': 'Cantidad solicitada',
          'req.cantidad_compra': 'Cantidad a comprar',
          'req.cantidad_almacen': 'Cantidad en almacén',
          'req.unidad_articulo': 'Unidad',
          'req.comentario_partida': 'Comentario',
          'req.frequerido': 'Fecha requerida',
          'req.id': ''
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
    getData: function getData() {
      this.isLoading = true;
      var me = this;
      axios.get('/requisicionesporautorizar').then(function (response) {
        me.solicitudes = response.data;
        me.dataTable = response.data;
        me.isLoading = false;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    cargarequisicion: function cargarequisicion() {
      this.getData();
    },
    cargardetalle: function cargardetalle(id) {
      this.isLoading = true;
      this.detalles_ver = true;
      this.detalle = true;
      this.id_requisicion = id;
      var me = this;
      axios.get('/consultadashp/' + id).then(function (response) {
        me.detalles_solicitudes = response.data;
        me.dataTableDetalle = response.data;
        me.isLoading = false;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    autorizar: function autorizar(estado, id) {
      this.isLoading = true;
      var me = this;
      var cadena = ['Almacén', 'Supervisor'];
      var cadenaid = [12, 14];
      if (estado == 3) {
        swal({
          title: estado != 0 ? 'Esta seguro(a) autorizar la requisición?' : 'Esta seguro(a) de rechazar la requisición',
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#4dbd74',
          cancelButtonColor: '#f86c6b',
          confirmButtonText: 'Aceptar!',
          cancelButtonText: 'Cancelar',
          reverseButtons: true
        }).then(function (result) {
          if (result.value) {
            axios.post('/autorizarequisicionproyectos', {
              id: id,
              estado: estado
            }).then(function (response) {
              me.isLoading = false;
              if (response.data == 3) {
                toastr.success('Correcto', 'Requisicion autorizada !!!');
              } else if (response.data == 0) {
                toastr.warning('Atención', 'Requisicion no autorizada !!!');
              }
              me.getData();
              me.isLoading = false;
            })["catch"](function (error) {
              console.error(error);
            });
          } else {
            me.isLoading = false;
          }
        });
      } else {
        swal({
          title: 'Motivo del rechazo de la requisición',
          input: 'textarea',
          // inputAttributes: {
          //   autocapitalize: 'off'
          // },
          inputValue: 'Indicado en cada partida',
          showCancelButton: true,
          confirmButtonText: 'Continuar',
          showLoaderOnConfirm: true
        }).then(function (result) {
          if (result.value) {
            axios.post('enviarcomentariorechazorequi', {
              id: id,
              data: result.value
            }).then(function (response) {
              console.log('Guardado correctamente');
            });
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
              if (result.value) {
                axios.post('/autorizarequisicionproyectos', {
                  id: id,
                  estado: cadenaid[result.value]
                }).then(function (response) {
                  me.isLoading = false;
                  if (response == 3) {
                    toastr.success('Correcto', 'Requisición recibida correctamente');
                  } else {
                    toastr.warning('Atención', 'Requisición no recibida');
                  }
                  me.getData();
                })["catch"](function (error) {
                  console.error(error);
                });
              } else {
                me.isLoading = false;
              }
            })["catch"](function (e) {
              console.error(e);
            });
          }
          console.log(result);
          me.isLoading = false;
        });
      }
    },
    maestro: function maestro() {
      this.detalles_ver = false;
      this.detalle = false;
      this.detalles_solicitudes = null;
    },
    /**
    * [descargar description]
    * @param  {[type]} data [description]
    * @return {[type]}      [description]
    */
    descargar: function descargar(data) {
      // window.open('descargar-requisicion/' + data.id, '_blank');
      window.open('descargar-requisicionew/' + data, '_blank');
    },
    guardarcorrecion: function guardarcorrecion(data) {
      var _this = this;
      swal({
        title: 'Motivo del rechazo de la requisición',
        input: 'textarea',
        inputAttributes: {
          autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Continuar',
        showLoaderOnConfirm: true
      }).then(function (result) {
        if (result.value) {
          axios.post('agregar/correciones/partidas', {
            requisicion_id: data.id,
            pda: data.pda,
            articulo_servicio: data.articulo_id != null ? 1 : 0,
            articulo_servicio_id: data.articulo_id != null ? data.articulo_id : data.servicio_id,
            comentario: result.value
          }).then(function (response) {
            // console.log(response);
            _this.cargardetalle(_this.id_requisicion);
          })["catch"](function (e) {
            console.error(e);
          });
        }
      });
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Proyecto/Dashboard/RequisicionesValidar.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Proyecto/Dashboard/RequisicionesValidar.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
      columns: ['id', 'folio', 'nombrep', 'fecha_solicitud', 'nombre_solicita', 'descripcion_uso', 'condicion'],
      dataTable: [],
      options: {
        headings: {
          'id': 'Acciones',
          'articulo_descripcion': 'Artículo',
          'nombrep': 'Proyecto',
          'nombre_solicita': 'Empleado que solicita',
          'descripcion_uso': 'Uso',
          'condicion': 'Validar'
        },
        perPage: 10,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        filterByColumn: true,
        texts: config.texts
      },
      isLoading: false,
      solicitudes: [],
      detalle: false,
      nuevo: null,
      solicitud: [],
      detalles_ver: false,
      detalles_solicitudes: null,
      tipo_cambio: 0,
      moneda: 0,
      dataTableDetalle: [],
      columnsDetalle: ['req.descripcion', 'req.cantidades', 'req.unidad_articulo', 'req.comentario_partida', 'req.frequerido'],
      optionsDetalle: {
        headings: {
          'req.descripcion': 'Articulo',
          'req.cantidades': 'Cantidad',
          'req.unidad_articulo': 'Unidad',
          'req.comentario_partida': 'Comentario',
          'req.frequerido': 'Fecha requerida',
          'req.id': ''
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
  components: {},
  methods: {
    emitirEventoHijo: function emitirEventoHijo() {
      this.$emit('validarequisicion:change');
    },
    getData: function getData() {
      this.isLoading = true;
      var me = this;
      axios.get('/requisicionesporvalidar').then(function (response) {
        me.solicitudes = response.data;
        me.dataTable = response.data;
        me.isLoading = false;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    cargarequisicion: function cargarequisicion() {
      this.getData();
    },
    cargardetalle: function cargardetalle(id) {
      this.isLoading = true;
      this.detalles_ver = true;
      this.detalle = true;
      var me = this;
      axios.get('/consultadashp/' + id).then(function (response) {
        me.detalles_solicitudes = response.data;
        me.dataTableDetalle = response.data;
        me.isLoading = false;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    autorizar: function autorizar(estado, id) {
      var _this = this;
      swal({
        title: estado != 0 ? 'Esta seguro(a) validar la requisición?' : 'Esta seguro(a) de rechazar la requisición',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#4dbd74',
        cancelButtonColor: '#f86c6b',
        confirmButtonText: 'Aceptar!',
        cancelButtonText: 'Cancelar',
        reverseButtons: true
      }).then(function (result) {
        if (result.value) {
          _this.isLoading = true;
          var me = _this;
          axios.post('/autorizarequisicionproyectos', {
            id: id,
            estado: estado
          }).then(function (response) {
            me.emitirEventoHijo();
            if (response.data == 8) {
              toastr.success('Correcto', 'Requisicion validada !!!');
            } else if (response.data == 0) {
              toastr.warning('Atención', 'Requisicion no validada !!!');
            }
            me.getData();
            me.isLoading = false;
          })["catch"](function (error) {
            console.error(error);
          });
        }
      });
    },
    maestro: function maestro() {
      this.detalles_ver = false;
      this.detalle = false;
      this.detalles_solicitudes = null;
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Proyecto/Proyecto.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Proyecto/Proyecto.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Herramientas/utilerias.js */ "./resources/assets/js/components/Herramientas/utilerias.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var config = (__webpack_require__(/*! ../Herramientas/config-vuetables-client */ "./resources/assets/js/components/Herramientas/config-vuetables-client.js").call)(undefined);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  //NOTA muy importante para exportar a excel
  computed: {
    updated: function updated() {
      return this.exportar(this.$refs.myTable.allFilteredData);
    }
  },
  data: function data() {
    return {
      actualizar_nombre: false,
      proyecto_documento_id: 0,
      PermisosCrud: {},
      modalPDF: 0,
      nombre_archivo: '',
      nombre_archivo2: '',
      url: '/proyecto',
      modal: 0,
      listaClientes: 0,
      listaSubcategorias: [],
      isLoading: false,
      swal_titulo: '',
      swal_msg: '',
      swal_tle: '',
      id: 0,
      nombre: '',
      nombre_corto: '',
      clave: '',
      monto_total: 0,
      ciudad: '',
      fecha_inicio: '',
      moneda: "MXN",
      cotizacion: "",
      fecha_fin: '',
      cliente_id: 0,
      proyecto_id: 0,
      condicional: 0,
      pm_cliente: '',
      pm_interno: '',
      adicional: false,
      agrupador: false,
      listarProyAgrp: [],
      subcategoria_id: 0,
      deshabilitar: true,
      tituloModal: '',
      isProyectos_loading: false,
      tipoAccion: 0,
      fechavalidar: 0,
      error: 0,
      errorMostrarMsj: [],
      tableDocumentosProyectos: [],
      arreglo: {
        titulo: 'Proyectos',
        emit: 'abrirModal',
        modulo: 'proyecto',
        accion: 'registrar'
      },
      json_fields: {
        'nombre': 'String',
        'nombre_corto': 'String',
        'clave': 'String',
        'monto_total': 'String',
        'ciudad': 'String',
        'condicion': 'String',
        'fecha_inicio': 'String',
        'fecha_fin': 'String',
        'updated_at': 'String'
      },
      json_data: [],
      json_meta: [[{
        "key": "charset",
        "value": "utf-8"
      }]],
      columns: ['id', 'nombre_corto', 'folio', 'clave', 'monto_total', 'ciudad', "total_oc", "total_req", 'condicion', "fecha_inicio", "fecha_fin"],
      tableData: [],
      options: {
        headings: {
          'id': 'Acciones',
          'nombre': 'Nombre Real del Proyecto',
          'nombre_corto': 'Nombre en Orden de Compra',
          'clave': 'Número de Orden de Compra',
          'monto_total': 'Monto Total de OC',
          'ciudad': 'Ciudad',
          'fecha_inicio': 'Fecha de Inicio',
          'fecha_fin': 'Fecha de Fin',
          'condicion': 'Condición',
          'adicional': 'P/A',
          "total_oc": "Total OC",
          "total_req": "Total REQ",
          'nombre_proyecto': 'Proyecto Padre'
        },
        perPage: 10,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        filterByColumn: true,
        listColumns: {
          'condicion': [{
            id: 1,
            text: 'Activo'
          }, {
            id: 0,
            text: 'Terminado'
          }, {
            id: 2,
            text: 'Pausa'
          }, {
            id: 3,
            text: 'Rechazado'
          }],
          'adicional': [{
            id: 1,
            text: 'Adicional'
          }, {
            id: 0,
            text: 'Principal'
          }]
        },
        texts: config.texts
      }
    };
  },
  methods: {
    validar: function validar() {
      var a = this.fecha_inicio;
      var b = this.fecha_fin;
      var fechaInicio = new Date(a).getTime();
      var fechaFin = new Date(b).getTime();
      var diff = fechaFin - fechaInicio;
      var diferencia = diff / (1000 * 60 * 60 * 24);
      if (diferencia < 0) {
        this.fechavalidar = 1;
        toastr.error('La fecha de finalizacion del Proyecto no debe ser menor a la fecha de Inicio');
      } else {
        this.fechavalidar = 0;
      }
    },
    horaActual: function horaActual() {
      var hoy = new Date();
      var dd = hoy.getDate();
      var mm = hoy.getMonth() + 1; //hoy es 0!
      var yyyy = hoy.getFullYear();
      if (dd < 10) {
        dd = '0' + dd;
      }
      if (mm < 10) {
        mm = '0' + mm;
      }
      hoy = yyyy + '-' + mm + '-' + dd;
      this.fecha_inicio = hoy;
    },
    /**
     * Obtener todos los proyectos
     */
    listar: function listar() {
      var _this = this;
      this.isProyectos_loading = true;
      var me = this;
      this.PermisosCrud = _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].getCRUD(this.$route.path);
      axios.get('proyectos/obtener/conoc').then(function (response) {
        _this.isProyectos_loading = false;
        me.tableData = response.data.proyectos;
      })["catch"](function (error) {
        this.isProyectos_loading = false;
        console.log(error);
      });
      axios.get('/clientes').then(function (response) {
        me.listaClientes = response.data.clientes;
      })["catch"](function (error) {
        console.log(error);
      });

      // No hay tabla en el sistema
      // axios.get('/listaAgrupador').then(response =>
      // {
      //     me.listarProyAgrp = response.data;
      //     console.log(response.data);
      // }).catch(function (error)
      // {
      //     console.log(error);
      // });

      // axios.get('/proyecto/sum/').then(response => {
      //     me.listaClientes = response.data;
      // })
      // .catch(function (error) {
      //     console.log(error);
      // });
    },
    subirDocumento: function subirDocumento(data, metodo) {
      var _this2 = this;
      swal({
        title: 'Documento P.O.',
        input: 'file',
        inputAttributes: {
          'accept': 'application/pdf',
          'aria-label': 'Upload your profile picture'
        },
        confirmButtonText: 'Subir Archivo',
        showCancelButton: true,
        inputValidator: function inputValidator(file) {
          return !file && 'Este Campo no puede estar Vacío';
        }
      }).then(function (file) {
        var me = _this2;
        if (file.value) {
          var formData = new FormData();
          formData.append('metodo', metodo);
          formData.append('documento_po', file.value);
          formData.append('id', data.id);
          axios.post('/proyecto/subir/documento/', formData).then(function (response) {
            if (response.data.status) {
              if (metodo == 1) {
                toastr.success('Archivo Subido Correctamente');
              }
              if (metodo == 2) {
                toastr.success('Archivo Actualizado Correctamente');
              }
              me.listar();
            } else {
              swal({
                type: 'error',
                html: response.data.errors.join('<br>')
              });
            }
          })["catch"](function (error) {
            console.log(error);
          });
        } else if (file.dismiss === swal.DismissReason.cancel) {}
      });
    },
    registrar: function registrar() {
      var _this3 = this;
      if (this.adicional == true && this.proyecto_id == 0) {
        toastr.error('Seleccionar proyecto padre.');
        return;
      }
      if (this.fechavalidar == 0) {
        this.$validator.validate().then(function (result) {
          if (result) {
            _this3.isLoading = true;
            var me = _this3;
            axios.post(me.url, {
              'metodo': 0,
              'nombre': _this3.nombre,
              'nombre_corto': _this3.nombre_corto,
              'clave': _this3.clave,
              'moneda': _this3.moneda,
              'monto_total': _this3.monto_total,
              'ciudad': _this3.ciudad,
              'fecha_inicio': _this3.fecha_inicio,
              'fecha_fin': _this3.fecha_fin,
              "cotizacion": _this3.cotizacion,
              'cliente_id': _this3.cliente_id,
              'pm_cliente': _this3.pm_cliente,
              'pm_interno': _this3.pm_interno,
              'adicional': _this3.adicional,
              'proyecto_id': _this3.adicional ? _this3.proyecto_id.id : null,
              'proyecto_subcategorias_id': _this3.subcategoria_id
            }).then(function (response) {
              me.isLoading = false;
              if (response.data.status) {
                me.cerrarModal();
                me.listar();
                toastr.success('Proyecto Registrado Correctamente');
              } else {
                toastr.error(response.data.mensaje);
              }
            })["catch"](function (error) {
              console.log(error);
            });
          }
        });
      }
    },
    actualizar: function actualizar() {
      var _this4 = this;
      if (this.fechavalidar == 0) {
        this.$validator.validate().then(function (result) {
          if (result) {
            _this4.isLoading = true;
            var me = _this4;
            axios.put(me.url + '/' + _this4.id, {
              'nombre': _this4.nombre,
              'nombre_corto': _this4.nombre_corto,
              "cotizacion": _this4.cotizacion,
              'clave': _this4.clave,
              'monto_total': _this4.monto_total,
              'ciudad': _this4.ciudad,
              'moneda': _this4.moneda,
              'fecha_inicio': _this4.fecha_inicio,
              'fecha_fin': _this4.fecha_fin,
              'cliente_id': _this4.cliente_id,
              'pm_cliente': _this4.pm_cliente,
              'pm_interno': _this4.pm_interno,
              'adicional': _this4.adicional,
              'proyecto_id': _this4.adicional ? _this4.proyecto_id : null,
              'proyecto_subcategorias_id': _this4.subcategoria_id
            }).then(function (response) {
              me.isLoading = false;
              me.cerrarModal();
              me.listar();
              toastr.success('Proyecto Actualizado Correctamente');
            })["catch"](function (error) {
              console.log(error);
            });
          }
        });
      }
    },
    getListaSubcategorias: function getListaSubcategorias() {
      var me = this;
      axios.get('/prosubcategoria/getlist').then(function (response) {
        me.listaSubcategorias = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    actdesact: function actdesact(id, activar) {
      var _this5 = this;
      if (activar) {
        this.swal_titulo = 'El proyecto ha finalizado, desea activarlo nuevamente?';
        this.swal_tle = 'Activado';
        this.swal_msg = 'Proyecto activado con éxito.';
      } else {
        this.swal_titulo = 'Esta seguro que el proyecto concluyó?';
        this.swal_tle = 'Desactivado!';
        this.swal_msg = 'Proyecto finalizado.';
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
          var me = _this5;
          axios.get(me.url + '/' + id + '/edit').then(function (response) {
            var _toastr$options;
            if (activar) {
              toastr.success(me.swal_tle, me.swal_msg, 'success');
            } else {
              toastr.error(me.swal_tle, me.swal_msg, 'error');
            }
            toastr.options = (_toastr$options = {
              "closeButton": false
            }, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_toastr$options, "closeButton", false), "debug", false), "newestOnTop", true), "progressBar", true), "positionClass", "toast-top-center"), "preventDuplicates", false), "onclick", null), "showDuration", "300"), "hideDuration", "1000"), "timeOut", "5000"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_toastr$options, "extendedTimeOut", "1000"), "showEasing", "swing"), "hideEasing", "linear"), "showMethod", "fadeIn"), "hideMethod", "fadeOut"));
            me.listar();
          })["catch"](function (error) {
            console.log(error);
          });
        } else if (result.dismiss === swal.DismissReason.cancel) {}
      });
    },
    pausar: function pausar(id) {
      var _this6 = this;
      this.swal_titulo = 'Esta seguro de pausar el proyecto?';
      this.swal_tle = 'Pausa!';
      this.swal_msg = 'Proyecto pausado.';
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
          var me = _this6;
          axios.get('proyecto-pausar/' + id).then(function (response) {
            var _toastr$options2;
            toastr.error(me.swal_tle, me.swal_msg, 'error');
            toastr.options = (_toastr$options2 = {
              "closeButton": false
            }, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_toastr$options2, "closeButton", false), "debug", false), "newestOnTop", true), "progressBar", true), "positionClass", "toast-top-center"), "preventDuplicates", false), "onclick", null), "showDuration", "300"), "hideDuration", "1000"), "timeOut", "5000"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_toastr$options2, "extendedTimeOut", "1000"), "showEasing", "swing"), "hideEasing", "linear"), "showMethod", "fadeIn"), "hideMethod", "fadeOut"));
            me.listar();
          })["catch"](function (error) {
            console.log(error);
          });
        } else if (result.dismiss === swal.DismissReason.cancel) {}
      });
    },
    rechazar: function rechazar(id) {
      var _this7 = this;
      this.swal_titulo = 'Esta seguro de rechazar el proyecto?';
      this.swal_tle = 'Rechazado!';
      this.swal_msg = 'Proyecto rechazado.';
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
          var me = _this7;
          axios.get('proyecto-rechazar/' + id).then(function (response) {
            var _toastr$options3;
            toastr.error(me.swal_tle, me.swal_msg, 'error');
            toastr.options = (_toastr$options3 = {
              "closeButton": false
            }, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_toastr$options3, "closeButton", false), "debug", false), "newestOnTop", true), "progressBar", true), "positionClass", "toast-top-center"), "preventDuplicates", false), "onclick", null), "showDuration", "300"), "hideDuration", "1000"), "timeOut", "5000"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_toastr$options3, "extendedTimeOut", "1000"), "showEasing", "swing"), "hideEasing", "linear"), "showMethod", "fadeIn"), "hideMethod", "fadeOut"));
            me.listar();
          })["catch"](function (error) {
            console.log(error);
          });
        } else if (result.dismiss === swal.DismissReason.cancel) {}
      });
    },
    exportar: function exportar(datos) {
      var _this8 = this;
      var condicion = '';
      var sexo = '';
      this.json_data = [];
      this.json_data.push({
        'nombre': 'Nombre',
        'nombre_corto': 'Nombre Corto',
        'clave': 'Clave',
        'monto_total': 'Monto Total',
        'ciudad': 'Ciudad',
        'condicion': 'Estado',
        'fecha_fin': 'F. Inicio',
        'fecha_inicio': 'F. Fin',
        'updated_at': 'Actualizado por ultima vez'
      });
      datos.forEach(function (dato) {
        _this8.json_data.push({
          'nombre': dato.nombre,
          'nombre_corto': dato.nombre_corto,
          'clave': dato.clave,
          'monto_total': dato.monto_total,
          'ciudad': dato.ciudad,
          'fecha_inicio': dato.fecha_inicio,
          'condicion': condicion,
          'fecha_fin': dato.fecha_fin,
          'updated_at': dato.updated_at
        });
      });
      return this.json_data;
    },
    cerrarModal: function cerrarModal() {
      this.modal = 0;
      this.tituloModal = '';
    },
    abrirModalPDF: function abrirModalPDF(id) {
      var _this9 = this;
      this.proyecto_documento_id = id;
      axios.get('/proyecto-obtener-documentos/' + id).then(function (response) {
        //console.log(response.data);
        _this9.tableDocumentosProyectos = response.data;
      })["catch"](function (error) {
        console.error(error);
      });
      this.modalPDF = 1;
    },
    cerrarModalPDF: function cerrarModalPDF() {
      var method = 2;
      axios.get('/proyecto-delete-temporal/' + this.proyecto_documento_id).then(function (response) {
        //console.log(response.data);
      })["catch"](function (error) {
        console.error(error);
      });
      this.nombre_archivo = '';
      // this.nombre_archivo2 = '';
      this.modalPDF = 0;
    },
    deshabilitarAgrupador: function deshabilitarAgrupador(data) {
      //console.log(data);

      if (data.target.checked) {
        this.deshabilitar = false;
      } else {
        this.deshabilitar = true;
      }
    },
    guardarAgrupador: function guardarAgrupador() {
      this.isLoading = true;
      var me = this;
      axios({
        method: 'POST',
        url: '/guardarAgrupador',
        data: {
          'nombre': this.nombre
        }
      }).then(function (response) {
        me.isLoading = false;
        me.tableData = response.data;
        me.cerrarModal();
        me.listar();
        toastr.success('Proyecto Registrado Correctamente');
      })["catch"](function (error) {
        console.log(error);
      });
    },
    abrirModal: function abrirModal(modelo) {
      var accion = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var data = modelo[2];
      switch (modelo[0]) {
        case "proyecto":
          {
            switch (modelo[1]) {
              case 'registrar':
                {
                  this.actualizar_nombre = false;
                  this.modal = 1;
                  this.tituloModal = 'Registrar Proyecto';
                  this.proyecto = '';
                  this.nombre = '';
                  this.nombre_corto = '';
                  this.clave = '';
                  this.monto_total = '';
                  this.ciudad = '';
                  this.moneda = 'MXN';
                  this.fecha_inicio = '';
                  this.fecha_fin = '';
                  this.horaActual();
                  this.tipoAccion = 1;
                  this.cliente_id = 0;
                  this.pm_cliente = '';
                  this.pm_interno = '';
                  this.adicional = false;
                  this.proyecto_id = 0;
                  this.subcategoria_id = 0;
                  break;
                }
              case 'actualizar':
                {
                  this.actualizar_nombre = true;
                  this.modal = 1;
                  this.tituloModal = 'Actualizar Proyecto';
                  this.id = data.id;
                  this.moneda = data.moneda;
                  this.nombre = data.nombre;
                  this.nombre_corto = data.nombre_corto;
                  this.clave = data.clave;
                  this.monto_total = data.monto_total;
                  this.ciudad = data.ciudad;
                  this.cotizacion = data.cotizacion;
                  this.fecha_inicio = data.fecha_inicio;
                  this.fecha_fin = data.fecha_fin;
                  this.tipoAccion = 2;
                  this.cliente_id = data.cliente_id;
                  this.pm_cliente = data.pm_cliente;
                  this.pm_interno = data.pm_interno;
                  this.adicional = data.adicional;
                  this.proyecto_id = data.proyecto_id;
                  this.subcategoria_id = data.proyecto_subcategorias_id;
                  break;
                }
            }
          }
      }
    },
    deleteu: function deleteu(data) {
      var _this0 = this;
      Swal.fire({
        title: 'Esta seguro de eliminar?',
        text: "No se podra revertir!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!'
      }).then(function (result) {
        if (result.value) {
          axios.get('delete/documento/proyecto/' + data.id).then(function (response) {
            toastr.success('Eliminado Correctamente !!!');
            _this0.abrirModalPDF(_this0.proyecto_documento_id);
          })["catch"](function (e) {
            console.error(e);
          });
        }
      });
    },
    verdocumentos: function verdocumentos(data) {
      var _this1 = this;
      // console.log(data);
      axios.post('proyecto-obtenerarchivos/', {
        id: data.id
      }).then(function (response) {
        console.log(response.data);
        _this1.nombre_archivo = 'temp/' + response.data;
      })["catch"](function (e) {
        console.error(e);
      });
    },
    /**
     * Descargar reporte de los proyectos
     */
    Descargar: function Descargar() {
      window.open("proyectos/reporte/descargar");
    }
  },
  mounted: function mounted() {
    this.listar();
    this.horaActual();
    this.getListaSubcategorias();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Proyecto/Requisiciones/AprobarRequisiciones.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Proyecto/Requisiciones/AprobarRequisiciones.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_vue_tables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/vue-tables */ "./resources/assets/js/utils/vue-tables.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/utils */ "./resources/assets/js/utils/utils.js");
/* harmony import */ var _components_Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/Herramientas/utilerias.js */ "./resources/assets/js/components/Herramientas/utilerias.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "requisiciones-main",
  components: {},
  data: function data() {
    return {
      permisosCRUD: {},
      empleado_actual: {},
      url: "requisiciones/proyectos",
      columns_requisiciones: ["id", "proyecto.nombre_corto", "requisiciones2__folio", "tipo.nombre", "fecha_emision", "solicita.raw_nom_solicita", "aprueba.raw_nom_solicita"],
      options_requisiciones: _objectSpread(_objectSpread({}, _utils_vue_tables__WEBPACK_IMPORTED_MODULE_0__.config.options), {}, {
        headings: {
          "id": "Acciones",
          "requisiciones2__folio": "Folio",
          "proyecto.nombre_corto": "Proyecto",
          "solicita.raw_nom_solicita": "Solicita",
          "aprueba.raw_nom_solicita": "Aprueba",
          "tipo.nombre": "Tipo",
          "fecha_emision": "Fecha"
        },
        sortable: ["id", "proyecto.nombre_corto", "requisiciones2__folio", "tipo.nombre", "fecha_emision", "aprueba.raw_nom_solicita", "solicita.raw_nom_solicita"],
        filterable: ["id", "proyecto.nombre_corto", "requisiciones2__folio", "tipo.nombre", "fecha_emision", "solicita.raw_nom_solicita", "aprueba.raw_nom_solicita"]
      }),
      loading_guardarRequisicion: {
        enable: false
      }
    };
  },
  methods: {
    /**
     * Obtener las requisiciones registradas
     */
    obtenerRequisiciones: function obtenerRequisiciones() {
      this.$refs.tblRequisiciones.refresh();
    },
    /**
     * Abrir ventana de detalles
     */
    verDetalles: function verDetalles(row) {
      this.$router.push({
        name: "proyectos-requisiciones-detalles",
        params: {
          id: row.id
        }
      });
    },
    /**
     * Rechazar la requisición
     */
    rechazar: function rechazar(id) {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var res_motivo, motivo, data;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.n = 1;
              return (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.getText)("Ingrese el motivo de rechazo");
            case 1:
              res_motivo = _context.v;
              if (res_motivo.isConfirmed) {
                _context.n = 2;
                break;
              }
              return _context.a(2);
            case 2:
              motivo = res_motivo.value.trim();
              if (!(motivo == "")) {
                _context.n = 3;
                break;
              }
              return _context.a(2);
            case 3:
              data = {
                id: id,
                motivo: motivo
              };
              (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.postPut)("".concat(_this.url, "/rechazar"), data, null, "Requisición rechazada correctamente", _this.loading_guardarRequisicion, function () {
                _this.obtenerRequisiciones();
              });
            case 4:
              return _context.a(2);
          }
        }, _callee);
      }))();
    },
    /**
     * Aprobar la requisición
     */
    aprobar: function aprobar(id) {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var res, data;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              _context2.n = 1;
              return (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.question)("¿Desea aproba la requisición?", "Se aprobara la requisición");
            case 1:
              res = _context2.v;
              if (res.isConfirmed) {
                _context2.n = 2;
                break;
              }
              return _context2.a(2);
            case 2:
              data = {
                id: id
              };
              (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.postPut)("".concat(_this2.url, "/aprobar"), data, null, "Requisición aprobada correctamente", _this2.loading_guardarRequisicion, function () {
                _this2.obtenerRequisiciones();
              });
            case 3:
              return _context2.a(2);
          }
        }, _callee2);
      }))();
    }
  },
  mounted: function mounted() {
    this.permisosCRUD = _components_Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_2__["default"].getCRUD(this.$route.path);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Proyecto/Requisiciones/Detalle.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Proyecto/Requisiciones/Detalle.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
      requisiicion: null,
      max_comentarios: 300,
      validar_pendiente: false,
      validar: false,
      modaluno: 0,
      modaldos: 0,
      doc_req: [],
      isLoading: false,
      tituloModala: '',
      requisicion: {
        id: 0,
        folio: '',
        area_solicita_id: '',
        formato_requisiciones: '',
        fecha_solicitud: '',
        descripcion_uso: '',
        tipo_compra: '',
        proyecto_id: '',
        estado_id: 0,
        solicita_empleado_id: '',
        autoriza_empleado_id: '',
        valida_empleado_id: '',
        recibe_empleado_id: '',
        condicion: 0,
        Area: ''
      },
      produccion: false,
      /*Tabla de Servicios*/
      tableDatadetallerequisicionServ: [],
      columnsdetallerequisicionServ: ['req.servicio_id', 'req.nservicio', 'req.nproveedor', 'req.comentario_partida', 'req.cantidades', 'req.equivalente', 'req.frequerido'],
      optionsdetallerequisicionServ: {
        headings: {
          'req.servicio_id': 'Acciones',
          'req.nservicio': 'Servicio',
          'req.nproveedor': 'Proveedor/Marca1',
          'req.comentario_partida': 'Comentario1',
          'req.cantidades': 'Cantidad',
          'req.equivalente': 'Equivalente',
          'req.frequerido': 'Fecha requerido'
        },
        perPage: 10,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        sortable: ['id', 'folio', 'nservicio', 'nservicio', 'cantidades'],
        filterable: ['folio', 'nservicio', 'nservicio', 'cantidades'],
        filterByColumn: true,
        listColumns: {
          condicion: [{
            id: 1,
            text: 'SI'
          }, {
            id: 0,
            text: 'NO'
          }]
        },
        texts: config.texts
      },
      /**/
      columnsa: ['codigo', 'nombre', 'descripcion', 'unidad', 'marca', 'calidad'],
      columnss: ['nombre_servicio', 'proveedor_marca', 'unidad_medida'],
      columnsp: ['codigo', 'nombre', 'descripcion', 'marca', 'calidad'],
      columnsdetallerequisicion: ['req.articulo_id', 'req.narticulo', 'req.comentario_partida', 'req.carticulo', 'req.cantidades', 'req.equivalente', 'req.frequerido'],
      tableDatadetallerequisicion: [],
      // Articulos
      optionsdetallerequisicion: {
        headings: {
          'req.articulo_id': 'Acciones',
          'req.narticulo': 'Nombre artículo',
          'req.carticulo': 'Código',
          'req.darticulo': 'Descripción',
          'req.peso': 'Peso',
          'req.comentario_partida': 'Comentario',
          'req.cantidades': 'Cantidad',
          'req.equivalente': 'Equivalente',
          'req.frequerido': 'Fecha requerido'
        },
        perPage: 10,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        sortable: ['req.narticulo', 'req.carticulo', 'req.darticulo', 'req.peso', 'req.cantidades', 'req.comentario_partida', 'req.frequerido'],
        filterable: ['req.narticulo', 'req.carticulo', 'req.darticulo', 'req.peso', 'req.cantidades', 'req.comentario_partida', 'req.frequerido'],
        filterByColumn: true,
        listColumns: {
          condicion: [{
            id: 1,
            text: 'SI'
          }, {
            id: 0,
            text: 'NO'
          }]
        },
        texts: config.texts
      },
      optionsa: {
        headings: {
          nombre: 'Nombre',
          descripcion: 'Descripción',
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
        debounce: 700,
        childRow: true
      },
      optionss: {
        headings: {
          nombre_servicio: 'Nombre del Servicio',
          proveedor_marca: 'Proveedor/Marca2',
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
      optionsp: {
        headings: {
          nombre: 'Nombre',
          descripcion: 'Descripción',
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
      preq: {
        requisicione_id: 0,
        articulo_id: 0,
        servicio_id: 0,
        peso: 0,
        cantidad: '',
        equivalente: 0,
        fecha_requerido: '',
        comentario: '',
        nombrearti: '',
        validado: 0,
        documentacionre: '',
        documentacionreid: '',
        pendiente: 0,
        req_com_id: 0,
        part_entr: 0,
        req_antigua: 0
      },
      clases: {
        peso: '',
        cantidades: '',
        fecharequerido: ''
      },
      tipoAccionpr: 0,
      documentos: null,
      tipoAcciondos: 1
    };
  },
  components: {},
  methods: {
    getListas: function getListas() {
      var me = this;
      axios.get('ducumentosrequeridos').then(function (response) {
        me.documentos = response.data;
      })["catch"](function (error) {
        console.error();
      });
    },
    /**
     * [seleccionarArticulo2 description]
     * @param  {[type]} data [description]
     * @return {[type]}      [description]
     */
    seleccionarArticulo2: function seleccionarArticulo2(data) {
      var me = this;
      this.max_comentarios = 300;
      this.validar = false;
      this.validar_pendiente = false;
      this.preq.servicio_id = null;
      this.preq.articulo_id = data.row.id;
      this.preq.nombrearti = "".concat(data.row.nombre, " ").concat(data.row.descripcion);
      me.cerrarModal();
    },
    seleccionarServicio: function seleccionarServicio(data) {
      // Quitar limite de comentario
      this.max_comentarios = 300;
      var me = this;
      this.validar = true;
      this.validar_pendiente = false;
      this.preq.peso = 0;
      this.preq.articulo_id = null;
      this.preq.servicio_id = data.row.id;
      this.preq.nombrearti = data.row.nombre_servicio + '/' + data.row.proveedor_marca;
      this.cerrarModal();
    },
    seleccionarPendiente: function seleccionarPendiente(data) {
      var me = this;
      max_comentarios = 300;
      this.validar = false;
      this.validar_pendiente = true;
      this.preq.servicio_id = null;
      this.preq.articulo_id = data.row.id;
      this.preq.nombrearti = data.row.descripcion;
      this.preq.cantidad = data.row.cantidad;
      this.preq.pendiente = data.row.pendiente;
      this.preq.req_com_id = data.row.req_com_id;
      this.preq.part_entr = data.row.PartEntr;
      this.preq.req_antigua = data.row.ReqAntigua;
      me.cerrarModal();
    },
    emitirEventoHijo: function emitirEventoHijo() {
      this.$emit('detallerequisiciones:change');
    },
    cargardetalle: function cargardetalle(data) {
      this.detalle = true;
      this.isLoading = true;
      var me = this;
      this.requisiicion = data;
      this.preq.requisicione_id = data.id;
      axios.get('/requisicion/' + data.id + '/' + 'requisicion').then(function (response) {
        me.tableDatadetallerequisicion = response.data;
        me.isLoading = false;
      })["catch"](function (error) {
        console.log(error);
      });

      /*Detalle Servicios*/
      axios.get('/catservicios/' + data.id).then(function (response) {
        me.tableDatadetallerequisicionServ = response.data;
        me.isLoading = false;
      })["catch"](function (error) {
        console.log(error);
      });
      /**/
    },
    maestro: function maestro() {
      this.emitirEventoHijo();
      this.cancelar();
    },
    /**
     * [abrirModalA description]
     * @param  {[type]} modelo    [description]
     * @param  {[type]} accion    [description]
     * @param  {[type]} id        [description]
     * @param  {Array}  [data=[]] [description]
     * @return {[type]}           [description]guardarPR
     */
    abrirModalA: function abrirModalA(modelo, accion, id) {
      var data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
      switch (modelo) {
        case "articulo":
          {
            switch (accion) {
              case 'registrar':
                {
                  this.modaluno = 1;
                  this.tituloModala = 'Registrar partida requisición';
                  _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.preq);
                  this.tipoAccionpr = 1;
                  this.preq.requisicione_id = id;
                  this.$refs.myTableArticulo.refresh();
                  break;
                }
              // case ''
              case 'documentos':
                {
                  this.modaldos = 1;
                  this.tipoAcciondos = 1;
                  this.preq.documentacionre = '';
                  this.doc_req = [];
                  this.tituloModala = 'Registrar los documentos requeridos';
                  break;
                }
              case 'actualizar':
                {
                  this.modaldos = 1;
                  this.tipoAcciondos = 0;
                  this.tituloModala = 'Documentos Requeridos';
                  if (data['servicio_id'] == undefined) {
                    var ids = null;
                  } else {
                    var ids = data['servicio_id'];
                  }
                  this.preq.servicio_id = ids;
                  var ida = data['articulo_id'];
                  this.preq.articulo_id = ida;
                  var idr = data['requisicione_id'];
                  this.preq.requisicione_id = idr;
                  var cadenadoc = [];
                  axios.get('/partidadocumentos/' + ida + '&' + idr + '&' + ids).then(function (response) {
                    for (var i = 0; i < response.data.length; i++) {
                      cadenadoc.push(response.data[i].documento_id);
                    }
                  })["catch"](function (error) {
                    console.log(error);
                  });
                  this.doc_req = cadenadoc;
                  break;
                }
              case 'actualizar_articulo':
                {
                  this.preq.articulo_id = data['articulo_id'];
                  this.preq.pda = data['pda'];
                  this.preq.nombrearti = data['darticulo'];
                  this.preq.comentario = data['comentario_partida'];
                  this.preq.peso = data['peso'];
                  this.preq.cantidad = data['cantidades'];
                  this.preq.equivalente = data['equivalente'];
                  this.preq.fecha_requerido = data['frequerido'];
                  this.produccion = data['produccion'] == 1 ? true : false;
                  this.tipoAccionpr = 2;
                  this.preq.validado = 1;
                  break;
                }
              case 'actualizar_servicio':
                {
                  this.preq.servicio_id = data['servicio_id'];
                  this.preq.pda = data['pda'];
                  this.preq.nombrearti = data['nservicio'];
                  this.preq.comentario = data['comentario_partida'];
                  this.preq.peso = data['peso'];
                  this.preq.cantidad = data['cantidades'];
                  this.preq.equivalente = data['equivalente'];
                  this.preq.fecha_requerido = data['frequerido'];
                  this.tipoAccionpr = 2;
                  this.preq.validado = 1;
                  break;
                }
            }
          }
      }
    },
    /**
     * [cerrarModal description]
     * @return {[type]} [description]
     */
    cerrarModal: function cerrarModal() {
      this.modaluno = 0;
      this.modaldos = 0;
      this.tituloModal = '';
      _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.requisicion);
    },
    /**
     * [cancelar description]
     * @return {[type]} [description]
     */
    cancelar: function cancelar() {
      this.validar = false;
      this.validar_pendiente = false;
      this.preq.pendiente = 0;
      this.preq.articulo_id = 0;
      this.preq.servicio_id = 0;
      this.preq.peso = '';
      this.preq.cantidad = '';
      this.preq.equivalente = 0;
      this.preq.fecha_requerido = "";
      this.preq.nombrearti = "";
      this.tipoAccionpr = 0;
      this.preq.comentario = "";
      this.preq.documentacionre = "";
      this.doc_req = [];
      this.preq.pendiente = 0;
      this.preq.req_com_id = 0;
      this.preq.part_entr = 0;
      this.preq.req_antigua = 0;
      _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.clases);
    },
    /**
     * [guardardocumentos description]
     * @return {[type]} [description]
     */
    guardardocumentos: function guardardocumentos() {
      var data = this.doc_req;
      var cadena = [];
      var cadenauno = [];
      for (var i = 0; i < data.length; i++) {
        axios.get('ducumentosrequeridosb/' + data[i]).then(function (response) {
          cadena.push(response.data[0].nombre);
          cadenauno.push(response.data[0].id);
        })["catch"](function (error) {
          console.error(error);
        });
      }
      this.preq.documentacionre = cadena;
      this.preq.documentacionreid = cadenauno;
      this.modaldos = 0;
    },
    /**
     * [validarpartida description]
     * @return {[type]} [description]
     */
    validarpartida: function validarpartida() {
      if (this.preq.cantidad === '') {
        this.mensaje();
        this.clases.peso = '';
        this.clases.cantidades = ' is-invalid';
      } else if (this.preq.fecha_requerido === '') {
        this.mensaje();
        this.clases.cantidades = '';
        this.clases.fecharequerido = ' is-invalid';
      } else {
        this.preq.validado = 1;
        this.clases.fecharequerido = '';
      }
    },
    /**
     * [mensaje description]
     * @return {[type]} [description]
     */
    mensaje: function mensaje() {
      swal({
        title: 'Error complete todos los campos',
        type: 'warning',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Aceptar!',
        confirmButtonClass: 'btn btn-success',
        buttonsStyling: false,
        reverseButtons: true
      });
    },
    /**
     * [guardarPR description]
     * @param  {[type]} nuevo [description]
     * @param  {[type]} idr   [description]
     * @return {[type]}       [description]
     */
    guardarPR: function guardarPR(nuevo, idr) {
      if (this.preq.validado == 1) {
        this.isLoading = true;
        this.detalle = true;
        var me = this;
        axios({
          method: nuevo ? 'POST' : 'PUT',
          url: nuevo ? '/partidare' : '/partidare/' + this.preq.pda,
          data: {
            'requisicione_id': this.preq.requisicione_id,
            'articulo_id': this.preq.articulo_id,
            'servicio_id': this.preq.servicio_id,
            'peso': this.preq.peso,
            'cantidad': this.preq.cantidad,
            'equivalente': this.preq.equivalente,
            'fecha_requerido': this.preq.fecha_requerido,
            'comentario': this.preq.comentario,
            'documentacionreid': this.preq.documentacionreid,
            'pda': this.preq.pda,
            'pendiente': this.preq.pendiente,
            'req_com_id': this.preq.req_com_id,
            'part_entr': this.preq.part_entr,
            'req_antigua': this.preq.req_antigua,
            'produccion': this.produccion == true ? 1 : 0
          }
        }).then(function (response) {
          me.max_comentarios = 300;
          if (response.data.status) {
            me.isLoading = false;
            me.cargardetalle(me.requisiicion);
            me.cerrarModal();
            me.cancelar();
            me.$refs.myTablePend.refresh();
            me.preq.validado = 0;
            // me.getData();
            if (!nuevo) {
              toastr.success('Partida Actualizada Correctamente');
            } else {
              toastr.success('Partida Registrada Correctamente');
            }
          } else {
            /**/
            swal({
              title: 'Error no se puede seleccionar \n 2 articulos iguales \n en la misma requisición',
              type: 'warning',
              confirmButtonColor: '#3085d6',
              confirmButtonText: 'Aceptar!',
              confirmButtonClass: 'btn btn-warning',
              buttonsStyling: false,
              reverseButtons: true
            });
            me.cancelar();
            me.isLoading = false;
            /**/
          }
        })["catch"](function (error) {
          console.log(error);
          me.cancelar();
          me.isLoading = false;
        });
      }
    },
    /**
     * [actdesactreq description]
     * @param  {[type]} id      [description]
     * @param  {[type]} prid    [description]
     * @param  {[type]} activar [description]
     * @return {[type]}         [description]
     */
    actdesactreq: function actdesactreq(id, prid, activar, idserv, row) {
      var _this = this;
      if (!activar) {
        this.swal_titulo = 'Esta seguro de remover este articulo ó servicio de la requisición?';
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
          axios.get('/partidare' + '/' + id + '&' + prid + '&' + idserv + '/edit').then(function (response) {
            if (!activar) {
              toastr.success(me.swal_tle, me.swal_msg, 'success');
              me.$refs.myTablePend.refresh();
            }
            me.cargardetalle(me.requisiicion);
          })["catch"](function (error) {
            console.log(error);
          });
        } else if (result.dismiss === swal.DismissReason.cancel) {}
      });
    },
    /**
     * [guardardocumentosupdate description]
     * @return {[type]} [description]
     */
    guardardocumentosupdate: function guardardocumentosupdate() {
      var array = [];
      var id = this.preq.requisicione_id;
      var me = this;
      axios.put('/partidare/' + this.preq.articulo_id + '/updatedoc', {
        'documento_id': this.doc_req,
        'partidarequisicione_art': this.preq.articulo_id,
        'partidarequisicione_req': this.preq.requisicione_id,
        'partidarequisicione_serv': this.preq.servicio_id
      }).then(function (response) {
        me.cerrarModal();
        me.cargardetalle(me.requisiicion);
        toastr.success('Correcto', 'Documentos actualizados correctamente');
      })["catch"](function (error) {
        console.log(error);
      });
    },
    agregarArt: function agregarArt() {
      var me = this;
      me.$refs.articulo.abrirModal('articulo', 'registrar');
    },
    abrirModal: function abrirModal(data) {
      var me = this;
      me.$refs.articulo.abrirModal('articulo', 'actualizar', data);
      me.cerrarModal();
    }
  },
  mounted: function mounted() {
    this.getListas();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Proyecto/Requisiciones/Modal.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Proyecto/Requisiciones/Modal.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
      url: '/requisicion',
      isEnabled: true,
      proyecto: {},
      modal: 0,
      isLoading: false,
      tituloModal: '',
      tipoAccion: 0,
      principal: null,
      optionsvs: [],
      //
      requisicion: {
        id: 0,
        folio: '',
        area_solicita_id: '',
        formato_requisiciones: '',
        fecha_solicitud: '',
        descripcion_uso: '',
        tipo_compra: '',
        proyecto_id: 0,
        estado_id: 0,
        solicita_empleado_id: '',
        autoriza_empleado_id: '',
        valida_empleado_id: '',
        recibe_empleado_id: '',
        condicion: 0,
        Area: ''
      },
      listaAreasSol: [],
      //
      listaProyecto: [] //
    };
  },
  methods: {
    /**
    * [getListas description]
    * @return {[type]} [description]
    */
    getListas: function getListas() {
      var _this = this;
      var me = this;
      axios.get("rh/catalogos/departamento/obtener").then(function (res) {
        if (res.data.status) {
          me.listaAreasSol = res.data.departamentos;
        } else {
          toastr.error(res.data.mensaje);
        }
      })["catch"](function (error) {
        console.log(error);
      });
      axios.get('/proyecto').then(function (response) {
        me.listaProyecto = []; //response.data;

        response.data.forEach(function (p) {
          var proyecto = {
            id: p.proyecto.id,
            nombre_corto: p.proyecto.nombre_corto
          };
          me.listaProyecto.push(proyecto);
        });
      })["catch"](function (error) {
        console.log(error);
      });
      axios.get('/vertodosempleados').then(function (response) {
        for (var i = 0; i < response.data.length; i++) {
          _this.optionsvs.push({
            id: response.data[i].id,
            name: response.data[i].nombre + ' ' + response.data[i].ap_paterno + ' ' + response.data[i].ap_materno
          });
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    /**
    * [guardarRequisicion description]
    * @param  {Int} nuevo [description]
    * @return {Response}       [description]
    */
    guardarRequisicion: function guardarRequisicion(nuevo) {
      var _this2 = this;
      this.$validator.validate().then(function (result) {
        if (result) {
          _this2.isLoading = true;
          _this2.detalle = false;
          var me = _this2;
          axios({
            method: nuevo ? 'POST' : 'PUT',
            url: nuevo ? me.url : me.url + '/' + _this2.requisicion.id,
            data: {
              'id': _this2.requisicion.id,
              'folio': _this2.requisicion.folio,
              'area_solicita_id': _this2.requisicion.area_solicita_id,
              'fecha_solicitud': _this2.requisicion.fecha_solicitud,
              'descripcion_uso': _this2.requisicion.descripcion_uso,
              'tipo_compra': _this2.requisicion.tipo_compra,
              'proyecto_id': me.proyecto.id,
              'estado_id': _this2.requisicion.estado_id,
              'solicita_empleado_id': _this2.requisicion.solicita_empleado_id.id,
              'autoriza_empleado_id': _this2.requisicion.autoriza_empleado_id.id,
              'valida_empleado_id': _this2.requisicion.valida_empleado_id.id,
              'recibe_empleado_id': _this2.requisicion.recibe_empleado_id,
              'identificador': 0
            }
          }).then(function (response) {
            me.isLoading = false;
            console.log(response.status);
            if (response.data.status) {
              me.cerrarModal();
              if (!nuevo) {
                toastr.success('Requisicion Actualizada Correctamente');
                me.getData(me.principal);
              } else {
                me.getPrincipal(response.data.data.proyecto_id);
                toastr.success('Requisicion Registrada Correctamente');
              }
            } else {
              swal({
                type: 'error',
                html: response.data.errors.join('<br>')
              });
              me.cerrarModal();
            }
          })["catch"](function (error) {
            console.log(error);
          });
        } else {
          swal({
            title: 'Complete todos los campos',
            type: 'warning',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Aceptar!',
            confirmButtonClass: 'btn btn-success',
            buttonsStyling: false,
            reverseButtons: true
          });
        }
      });
    },
    /**
    * [abrirModal description]
    * @param  {String} modelo    [description]
    * @param  {String} accion    [description]
    * @param  {Array}  [data=[]] [description]
    * @return {[type]}           [description]
    */
    abrirModal: function abrirModal(modelo, accion) {
      var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      switch (modelo) {
        case "requisicion":
          {
            switch (accion) {
              case 'registrar':
                {
                  this.isEnabled = true;
                  this.modal = 1;
                  this.tituloModal = 'Registrar requisición';
                  _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.requisicion);
                  this.tipoAccion = 1;
                  this.disabled = 0;
                  break;
                }
              case 'actualizar':
                {
                  var me = this;
                  this.isEnabled = false;
                  console.error(data);
                  this.principal = data['proyecto_id'];
                  _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.requisicion);
                  this.modal = 1;
                  this.tituloModal = 'Actualizar requisición';
                  this.requisicion.id = data['id'];
                  this.tipoAccion = 2;
                  this.disabled = 1;
                  this.requisicion.folio = data['folio'];
                  this.requisicion.area_solicita_id = data['area_solicita_id'];
                  this.requisicion.fecha_solicitud = data['fecha_solicitud'];
                  this.requisicion.descripcion_uso = data['descripcion_uso'];
                  this.requisicion.tipo_compra = data['tipo_compra'];
                  this.proyecto = {
                    id: data['proyecto_id'],
                    nombre_corto: data['p_nombre_corto']
                  };
                  this.requisicion.estado_id = data['estado_id'];
                  this.requisicion.solicita_empleado_id = {
                    id: data['solicita_empleado_id'],
                    name: data['nombre_empleado_solicita']
                  };
                  this.requisicion.autoriza_empleado_id = {
                    id: data['autoriza_empleado_id'],
                    name: data['nombre_empleado_autoriza']
                  };
                  this.requisicion.valida_empleado_id = {
                    id: data['valida_empleado_id'],
                    name: data['nombre_empleado_valida']
                  };
                  // this.requisicion.recibe_empleado_id	 = data['recibe_empleado_id'];
                  break;
                }
            }
          }
      }
    },
    /**
    * [cerrarModal description]
    * @return {} [description]
    */
    cerrarModal: function cerrarModal() {
      this.modal = 0;
      this.tituloModal = '';
      _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.requisicion);
    },
    getData: function getData(data) {
      this.$emit('modal:click', data);
    },
    getPrincipal: function getPrincipal(data) {
      this.modal = 0;
      this.$emit('modal:nuevo', data);
    }
  },
  mounted: function mounted() {
    this.getListas();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Proyecto/Requisiciones/PrincipalRequisiciones.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Proyecto/Requisiciones/PrincipalRequisiciones.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Herramientas/utilerias.js */ "./resources/assets/js/components/Herramientas/utilerias.js");
var Requisiciones = function Requisiciones(r) {
  return __webpack_require__.e(/*! require.ensure | proyecto */ "proyecto").then((function () {
    return r(__webpack_require__(/*! ./Requisiciones.vue */ "./resources/assets/js/components/Proyecto/Requisiciones/Requisiciones.vue"));
  }).bind(null, __webpack_require__))['catch'](__webpack_require__.oe);
};
var Modal = function Modal(r) {
  return __webpack_require__.e(/*! require.ensure | proyecto */ "proyecto").then((function () {
    return r(__webpack_require__(/*! ./Modal.vue */ "./resources/assets/js/components/Proyecto/Requisiciones/Modal.vue"));
  }).bind(null, __webpack_require__))['catch'](__webpack_require__.oe);
};

var config = (__webpack_require__(/*! ../../Herramientas/config-vuetables-client */ "./resources/assets/js/components/Herramientas/config-vuetables-client.js").call)(undefined);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      detalle: false,
      modal: false,
      columns: ['id', 'nombre_corto', 'clave', 'ciudad', 'fecha_inicio', 'fecha_fin', 'condicion'],
      tableData: [],
      options: {
        headings: {
          'id': 'Acciones',
          'nombre': 'Nombre',
          'nombre_corto': 'Nombre corto',
          'clave': 'Ord Comp',
          'ciudad': 'Ciudad',
          'fecha_inicio': 'F. Inicio',
          'fecha_fin': 'F. Fin',
          'condicion': 'Condición',
          'updated_at': 'Ultima Actualización'
        },
        perPage: 10,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        sortable: ['nombre', 'nombre_corto', 'clave', 'ciudad', 'fecha_inicio', 'fecha_fin', 'condicion'],
        filterable: ['nombre', 'nombre_corto', 'clave', 'ciudad', 'fecha_inicio', 'fecha_fin', 'condicion'],
        filterByColumn: true,
        texts: config.texts
      }
    };
  },
  components: {
    'requisiciones': Requisiciones,
    'modal': Modal
  },
  methods: {
    getData: function getData() {
      var me = this;
      axios.get('/proyecto-listar').then(function (response) {
        me.tableData = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    verrequisiciones: function verrequisiciones(data) {
      this.detalle = true;
      var ChilRequisiciones = this.$refs.requisiciones;
      ChilRequisiciones.getData(data);
    },
    maestro: function maestro() {
      this.detalle = false;
    },
    abrirModal: function abrirModal(estado, accion) {
      this.modal = true;
      var ChildModal = this.$refs.modal;
      ChildModal.abrirModal(estado, accion);
    },
    cerrarModalNuevo: function cerrarModalNuevo() {
      var me = this;
      me.getData();
      me.modal = false;
    }
  },
  mounted: function mounted() {
    this.getData();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Proyecto/Requisiciones/Requisiciones.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Proyecto/Requisiciones/Requisiciones.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
var Detalle = function Detalle(r) {
  return __webpack_require__.e(/*! require.ensure | proyecto */ "proyecto").then((function () {
    return r(__webpack_require__(/*! ./Detalle.vue */ "./resources/assets/js/components/Proyecto/Requisiciones/Detalle.vue"));
  }).bind(null, __webpack_require__))['catch'](__webpack_require__.oe);
};
var Modal = function Modal(r) {
  return __webpack_require__.e(/*! require.ensure | proyecto */ "proyecto").then((function () {
    return r(__webpack_require__(/*! ./Modal.vue */ "./resources/assets/js/components/Proyecto/Requisiciones/Modal.vue"));
  }).bind(null, __webpack_require__))['catch'](__webpack_require__.oe);
};

var config = (__webpack_require__(/*! ../../Herramientas/config-vuetables-client */ "./resources/assets/js/components/Herramientas/config-vuetables-client.js").call)(undefined);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      PermisosCrud: {},
      url: '/requisicion',
      detallerequisiciones: false,
      principal: null,
      modal: false,
      doc_req: [],
      optionsvs: [],
      //
      widgets: {
        detallerequisiciones: false
      },
      /***/
      requisicion: {
        id: 0,
        folio: '',
        area_solicita_id: '',
        formato_requisiciones: '',
        fecha_solicitud: '',
        descripcion_uso: '',
        tipo_compra: '',
        proyecto_id: 0,
        estado_id: 0,
        solicita_empleado_id: '',
        autoriza_empleado_id: '',
        valida_empleado_id: '',
        recibe_empleado_id: '',
        condicion: 0,
        Area: ''
      },
      /****/
      listaEmpleados: [],
      listaAreasSol: [],
      //
      listaProyecto: []
    }, "modal", 0), "tituloModal", ''), "tipoAccion", 0), "tipoAcciondos", 1), "disabled", 0), "isLoading", false), "columns", ['r.id', 'r.partida', 'r.folio', 'r.p_nombre_corto', 'r.fecha_solicitud', 'r.descripcion_uso', 'r.nombre_empleado_solicita', 'r.descargar', 'r.estado_id', 'r.responsable']), "tableData", []), "options", {
      headings: {
        'r.id': 'Acción',
        'r.partida': 'Partidas',
        'r.descargar': 'Descargar',
        'r.folio': 'Folio',
        'r.p_nombre_corto': 'Nombre proyecto',
        'r.fecha_solicitud': 'Fecha solicitud',
        'r.estado_id': 'Estado',
        'r.descripcion_uso': 'Descripción',
        'r.nombre_empleado_solicita': 'Solicita',
        'r.responsable': 'Responsable(s)'
      },
      perPage: 10,
      perPageValues: [],
      skin: config.skin,
      sortIcon: config.sortIcon,
      // sortable: ['r.folio','r.nombrep','r.fecha_solicitud','r.descripcion_uso','r.nombre_empleado_solicita','r.estado_id'],
      // filterable: ['r.folio','r.nombrep','r.fecha_solicitud','r.descripcion_uso','r.nombre_empleado_solicita','r.estado_id'],
      filterByColumn: true,
      listColumns: {
        'r.estado_id': [{
          id: 0,
          text: 'Nuevo'
        }, {
          id: 1,
          text: 'En espera (Validación)'
        }, {
          id: 2,
          text: 'En espera (Autorización)'
        }, {
          id: 3,
          text: 'Autorizado(En Almacén)'
        }, {
          id: 4,
          text: 'No autorizado'
        }, {
          id: 5,
          text: 'Recibido (Compras)'
        }, {
          id: 6,
          text: 'Autorizado(En Compras)'
        }, {
          id: 7,
          text: 'Por Equivalente'
        }, {
          id: 8,
          text: 'En Espera (Calidad)'
        }]
      },
      texts: config.texts
    });
  },
  computed: {},
  components: {
    'detallerequisiciones': Detalle,
    'modal': Modal
  },
  methods: {
    grabar: function grabar(nuevo) {
      var me = this;
      me.getData(nuevo);
    },
    /**
    * [getData description]
    * @return {[type]} [description]
    */
    getData: function getData(data) {
      var me = this;
      this.PermisosCrud = _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].getCRUD(this.$route.path);
      me.isLoading = true;
      me.principal = data;
      axios.get('/requisicion/' + data).then(function (response) {
        me.tableData = response.data;
        me.isLoading = false;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    /**
    * [actdesact description]
    * @param  {[type]} id      [description]
    * @param  {[type]} activar [description]
    * @return {[type]}         [description]
    */
    actdesact: function actdesact(id, activar) {
      var _this = this;
      if (activar) {
        this.swal_titulo = 'Esta seguro de activar esta requisición?';
        this.swal_tle = 'Activado';
        this.swal_msg = 'El registro ha sido activado con éxito.';
      } else {
        this.swal_titulo = 'Esta seguro de desactivar esta requisición?';
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
          var me = _this;
          axios.get(me.url + '/' + id + '/edit').then(function (response) {
            if (activar) {
              toastr.success(me.swal_tle, me.swal_msg, 'success');
            } else {
              toastr.error(me.swal_tle, me.swal_msg, 'error');
            }
            me.getData(me.principal);
          })["catch"](function (error) {
            console.log(error);
          });
        } else if (result.dismiss === swal.DismissReason.cancel) {}
      });
    },
    ///
    /**
    * [cerrarModal description]
    * @return {} [description]
    */
    cerrarModal: function cerrarModal() {
      this.modal = 0;
      this.tituloModal = '';
      _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.requisicion);
    },
    /**
    * [abrirModal description]
    * @param  {String} modelo    [description]
    * @param  {String} accion    [description]
    * @param  {Array}  [data=[]] [description]
    * @return {[type]}           [description]
    */
    abrirModal: function abrirModal(estado, accion, data) {
      this.modal = true;
      var ChildModal = this.$refs.modal;
      ChildModal.abrirModal(estado, accion, data);
    },
    /**
    * [cargardetalle description]
    * @param  {Array}  [dataEmpleado=[]] [description]
    * @return {[type]}                   [description]
    */
    cargardetalle: function cargardetalle() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      this.widgets.detallerequisiciones = true;
      var childDetalle = this.$refs.detallerequisiciones;
      childDetalle.cargardetalle(data);
      this.detallerequisiciones = true;
    },
    /**
    * [maestro description]
    * @return {[type]} [description]
    */
    maestro: function maestro() {
      this.widgets.detallerequisiciones = false;
      this.detallerequisiciones = false;
      this.tipoAccionpr = 0;
      this.isLoading = false;
    },
    /******************/
    /**
    * [cancelar description]
    * @return {[type]} [description]
    */
    cancelar: function cancelar() {
      this.tipoAccionpr = 0;
    },
    /**********/
    /**
    * [abrirBusquedaArticulo description]
    * @return {[type]} [description]
    */
    abrirBusquedaArticulo: function abrirBusquedaArticulo() {
      this.tipoAccionpr = 1;
      this.modal = 1;
    },
    /**
    * [descargar description]
    * @param  {[type]} data [description]
    * @return {[type]}      [description]
    */
    descargar: function descargar(data) {
      window.open('descargar-requisicion/' + data.id, '_blank');
    },
    descargarnew: function descargarnew(data) {
      window.open('descargar-requisicionew/' + data.id, '_blank');
      var me = this;
      me.getData(data.proyecto_id);
    },
    subirFormato: function subirFormato(data) {
      var _this2 = this;
      swal({
        title: 'Requisición Firmada',
        input: 'file',
        inputAttributes: {
          'accept': 'application/pdf',
          'aria-label': 'Upload your profile picture'
        },
        confirmButtonText: 'Subir Archivo',
        showCancelButton: true,
        inputValidator: function inputValidator(file) {
          return !file && 'Este Campo no puede estar Vacío';
        }
      }).then(function (file) {
        var me = _this2;
        if (file.value) {
          var formData = new FormData();
          formData.append('identificador', 1);
          formData.append('adjunto', file.value);
          formData.append('proyecto_id', data.proyecto_id);
          formData.append('id', data.id);
          axios.post(me.url, formData).then(function (response) {
            if (response.data.status) {
              toastr.success('Archivo Subido Correctamente');
              me.getData(me.principal);
            } else {
              swal({
                type: 'error',
                html: response.data.errors.join('<br>')
              });
            }
          })["catch"](function (error) {
            console.log(error);
          });
        } else if (file.dismiss === swal.DismissReason.cancel) {}
      });
    },
    /**
    * [cerrarRequisicion description]
    * @param  {Array}  [data=[]] [description]
    * @return {[type]}           [description]
    */
    cerrarRequisicion: function cerrarRequisicion() {
      var _this3 = this;
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      swal({
        title: 'Esta seguro de cerrar la requisición?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#4dbd74',
        cancelButtonColor: '#f86c6b',
        confirmButtonText: 'Aceptar!',
        cancelButtonText: 'Cancelar',
        reverseButtons: true
      }).then(function (result) {
        if (result.value) {
          var me = _this3;
          axios.get('/vercantidadpartidas/' + data.id).then(function (response) {
            // console.log(response.data.length);
            if (response.data.length == 0) {
              toastr.warning('Atención', 'Esta requisición no puede se cerrada hasta tener artículos registrados');
            } else {
              axios.get('/finalizarequisicion/' + data.id).then(function (response) {
                toastr.success('Correcto', 'Requisición cerrada correctamente');
                me.getData(me.principal);
              })["catch"](function (error) {
                console.error(error);
              });
            }
          })["catch"](function (error) {
            console.error(error);
          });
        }
      });
    },
    maestroInicial: function maestroInicial() {
      this.$emit('requisiciones:click');
    },
    vercomentarios: function vercomentarios(id) {
      swal(id);
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Proyecto/Dashboard/Dashboard.vue?vue&type=template&id=8366e674":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Proyecto/Dashboard/Dashboard.vue?vue&type=template&id=8366e674 ***!
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
    staticClass: "container"
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isLoading
    }
  }), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.widgets.validarequisicion,
      expression: "widgets.validarequisicion"
    }],
    staticClass: "col col-md-10"
  }, [_c("validarequisicion", {
    ref: "validarequisicion",
    on: {
      "validarequisicion:change": _vm.escucharHijo
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.widgets.autorizarequisicion,
      expression: "widgets.autorizarequisicion"
    }],
    staticClass: "col col-md-10-md-12"
  }, [_c("autorizarequisicion", {
    ref: "autorizarequisicion"
  })], 1)])], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Proyecto/Dashboard/RequisicionesAutorizar.vue?vue&type=template&id=470be5f0":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Proyecto/Dashboard/RequisicionesAutorizar.vue?vue&type=template&id=470be5f0 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "card border-dark"
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isLoading
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "card-header bg-dark text-white"
  }, [_c("i", {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" Requisiciones por autorizar:\n        "), _vm.detalles_ver ? _c("button", {
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
    staticClass: "icon-arrow-left"
  }), _vm._v(" Atras\n        ")]) : _vm._e(), _vm._v(" "), _vm.detalles_ver ? _c("button", {
    staticClass: "btn btn-outline-white float-sm-right",
    on: {
      click: function click($event) {
        return _vm.descargar(_vm.id_requisicion);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-file-pdf"
  }), _vm._v(" "), _c("i", {
    staticClass: "fas fa-download"
  }), _vm._v(" Descargar\n        ")]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("v-client-table", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.detalle,
      expression: "!detalle"
    }],
    ref: "myTable",
    attrs: {
      columns: _vm.columns,
      data: _vm.dataTable,
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
        }), _vm._v(" Acciones\n                ")]), _vm._v(" "), _c("div", {
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
        }), _vm._v("  Ver partidas\n                  ")])])])])];
      }
    }, {
      key: "condicion",
      fn: function fn(props) {
        return [_c("button", {
          staticClass: "btn btn-sm btn-success",
          on: {
            click: function click($event) {
              return _vm.autorizar(3, props.row.id);
            }
          }
        }, [_c("i", {
          staticClass: "far fa-check-square"
        }), _vm._v("  Si  ")]), _vm._v(" "), _c("button", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: props.row.condicion == 1,
            expression: "props.row.condicion == 1"
          }],
          staticClass: "btn btn-sm btn-danger",
          on: {
            click: function click($event) {
              return _vm.autorizar(0, props.row.id);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-window-close"
        }), _vm._v("  No")])];
      }
    }])
  }), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.detalles_ver,
      expression: "detalles_ver"
    }]
  }, [_c("v-client-table", {
    attrs: {
      data: _vm.dataTableDetalle,
      options: _vm.optionsDetalle,
      columns: _vm.columnsDetalle
    },
    scopedSlots: _vm._u([{
      key: "autorizar",
      fn: function fn(props) {
        return [props.row.correccion == null ? [_c("button", {
          staticClass: "btn btn-sm btn-danger",
          on: {
            click: function click($event) {
              return _vm.guardarcorrecion(props.row.req);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-window-close"
        }), _vm._v("  No")])] : _vm._e(), _vm._v(" "), props.row.correccion != null ? [_vm._v("\n                " + _vm._s(props.row.correccion.comentario) + "\n              ")] : _vm._e()];
      }
    }, {
      key: "req.comentario_partida",
      fn: function fn(props) {
        return [_vm._v("\n              " + _vm._s(props.row.req.comentario_partida)), _c("br"), _vm._v(" "), props.row.regresados != null ? [_c("span", {
          staticClass: "badge badge-pill badge-warning"
        }, [_vm._v("Corregido")])] : _vm._e(), _vm._v(" "), props.row.regresados == null ? [_c("span", {
          staticClass: "badge badge-pill badge-info"
        }, [_vm._v("Sin observaciones")])] : _vm._e()];
      }
    }])
  })], 1)], 1)], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Proyecto/Dashboard/RequisicionesValidar.vue?vue&type=template&id=1ba696a0":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Proyecto/Dashboard/RequisicionesValidar.vue?vue&type=template&id=1ba696a0 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isLoading
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "card-header bg-dark text-white"
  }, [_c("i", {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" Requisiciones por revisar:\r\n        "), _vm.detalles_ver ? _c("button", {
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
    staticClass: "icon-arrow-left"
  }), _vm._v(" Atras\r\n        ")]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("v-client-table", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.detalle,
      expression: "!detalle"
    }],
    ref: "myTable",
    attrs: {
      columns: _vm.columns,
      data: _vm.dataTable,
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
        }), _vm._v("  Ver partidas\r\n                            ")])])])])];
      }
    }, {
      key: "condicion",
      fn: function fn(props) {
        return [_c("button", {
          staticClass: "btn btn-sm btn-success",
          on: {
            click: function click($event) {
              return _vm.autorizar(2, props.row.id);
            }
          }
        }, [_c("i", {
          staticClass: "far fa-check-square"
        }), _vm._v("  Si  ")]), _vm._v(" "), _c("button", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: props.row.condicion == 1,
            expression: "props.row.condicion == 1"
          }],
          staticClass: "btn btn-sm btn-danger",
          on: {
            click: function click($event) {
              return _vm.autorizar(0, props.row.id);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-window-close"
        }), _vm._v("  No")])];
      }
    }])
  }), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.detalles_ver,
      expression: "detalles_ver"
    }]
  }, [_c("v-client-table", {
    attrs: {
      data: _vm.dataTableDetalle,
      options: _vm.optionsDetalle,
      columns: _vm.columnsDetalle
    }
  })], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Proyecto/Proyecto.vue?vue&type=template&id=74cc0b70":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Proyecto/Proyecto.vue?vue&type=template&id=74cc0b70 ***!
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
  }, [_c("div", {}, [_c("div", {
    staticClass: "card",
    staticStyle: {
      "min-height": "60vh"
    }
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("i", {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" Proyectos\r\n                "), _vm.PermisosCrud.Create ? _c("button", {
    staticClass: "btn btn-dark float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.abrirModal(["proyecto", "registrar"]);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  }), _vm._v(" Nuevo\r\n                ")]) : _vm._e(), _vm._v(" "), _vm.PermisosCrud.Download ? _c("button", {
    staticClass: "btn btn-dark float-sm-right mr-1",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.Descargar
    }
  }, [_c("i", {
    staticClass: "fas fa-download"
  }), _vm._v(" Descargar\r\n                ")]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isProyectos_loading
    }
  }), _vm._v(" "), _c("v-client-table", {
    ref: "myTable",
    attrs: {
      columns: _vm.columns,
      data: _vm.tableData,
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
      key: "adicional",
      fn: function fn(props) {
        return [props.row.adicional == 0 ? [_c("button", {
          staticClass: "btn btn-find",
          attrs: {
            type: "button",
            "data-toggle": "tooltip",
            "data-placement": "top",
            title: props.row
          }
        }, [_vm._v("\r\n                                Principal\r\n                            ")])] : _vm._e(), _vm._v(" "), props.row.adicional == 1 ? [_c("button", {
          staticClass: "btn btn-greg",
          attrs: {
            type: "button",
            "data-toggle": "tooltip",
            "data-placement": "top",
            title: props.row
          }
        }, [_vm._v("\r\n                                Adicional\r\n                            ")])] : _vm._e()];
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
          directives: [{
            name: "show",
            rawName: "v-show",
            value: _vm.PermisosCrud.Upload,
            expression: "PermisosCrud.Upload"
          }],
          staticClass: "dropdown-item",
          on: {
            click: function click($event) {
              return _vm.subirDocumento(props.row, 1);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-file-upload"
        }), _vm._v(" Subir Documento P.O.\r\n                                    ")]), _vm._v(" "), _c("button", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: _vm.PermisosCrud.Download,
            expression: "PermisosCrud.Download"
          }],
          staticClass: "dropdown-item",
          on: {
            click: function click($event) {
              return _vm.abrirModalPDF(props.row.id);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-eye"
        }), _vm._v(" Visualizar Documento P.O.\r\n                                    ")]), _vm._v(" "), _c("button", {
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
              return _vm.abrirModal(["proyecto", "actualizar", props.row]);
            }
          }
        }, [_c("i", {
          staticClass: "icon-pencil"
        }), _vm._v("  Actualizar\r\n                                    ")]), _vm._v(" "), props.row.condicion == 1 ? [_c("button", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: _vm.PermisosCrud.Delete,
            expression: "PermisosCrud.Delete"
          }],
          staticClass: "dropdown-item",
          on: {
            click: function click($event) {
              return _vm.actdesact(props.row.id, 0);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-flag"
        }), _vm._v("  Terminar\r\n                                        ")]), _vm._v(" "), _c("button", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: _vm.PermisosCrud.Read,
            expression: "PermisosCrud.Read"
          }],
          staticClass: "dropdown-item",
          on: {
            click: function click($event) {
              return _vm.pausar(props.row.id);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-pause"
        }), _vm._v("  Pausar\r\n                                        ")]), _vm._v(" "), _c("button", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: _vm.PermisosCrud.Delete,
            expression: "PermisosCrud.Delete"
          }],
          staticClass: "dropdown-item",
          on: {
            click: function click($event) {
              return _vm.rechazar(props.row.id);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-backspace"
        }), _vm._v("  Rechazar\r\n                                        ")])] : [_c("button", {
          staticClass: "dropdown-item",
          on: {
            click: function click($event) {
              return _vm.actdesact(props.row.id, 1);
            }
          }
        }, [_c("i", {
          staticClass: "icon-check"
        }), _vm._v("  Activar\r\n                                        ")])]], 2)])])];
      }
    }, {
      key: "folio",
      fn: function fn(props) {
        return [props.row.folio == null ? _c("p", [_vm._v("N/D")]) : _c("p", [_vm._v(_vm._s(props.row.folio))])];
      }
    }, {
      key: "total_oc",
      fn: function fn(props) {
        return [[_c("button", {
          staticClass: "btn btn-outline-dark btn-sm"
        }, [_vm._v(_vm._s(props.row.total_oc))])]];
      }
    }, {
      key: "total_req",
      fn: function fn(props) {
        return [[_c("button", {
          staticClass: "btn btn-outline-dark btn-sm"
        }, [_vm._v(_vm._s(props.row.total_req))])]];
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
        return _vm.cerrarModal();
      }
    }
  }, [_c("span", {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("X")])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_c("form", {
    staticClass: "form-horizontal",
    attrs: {
      action: "",
      method: "post",
      enctype: "multipart/form-data"
    }
  }, [_vm.tipoAccion == 1 ? _c("div", {
    staticClass: "form"
  }, [_c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2",
    attrs: {
      "for": "text-input"
    }
  }, [_vm._v("Nombre real del Proyecto")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required|max:300",
      expression: "'required|max:300'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.nombre,
      expression: "nombre"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "nombre",
      placeholder: "Nombre",
      rows: "4",
      cols: "80",
      autocomplete: "off"
    },
    domProps: {
      value: _vm.nombre
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.nombre = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("nombre")))])])]), _vm._v(" "), _vm.deshabilitar ? [_c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2",
    attrs: {
      "for": "text-input"
    }
  }, [_vm._v("Número de Cotización")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required|max:30",
      expression: "'required|max:30'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.cotizacion,
      expression: "cotizacion"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "cotizacion",
      placeholder: "Número de Cotización"
    },
    domProps: {
      value: _vm.cotizacion
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.cotizacion = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("cotizacion")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2",
    attrs: {
      "for": "text-input"
    }
  }, [_vm._v("Número de Orden de Compra")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required|max:30",
      expression: "'required|max:30'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.clave,
      expression: "clave"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "no_oc",
      placeholder: "Número de Orden de Compra"
    },
    domProps: {
      value: _vm.clave
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.clave = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("no_oc")))])]), _vm._v(" "), _c("label", {
    staticClass: "col-md-2",
    attrs: {
      "for": "text-input"
    }
  }, [_vm._v("Monto Total de la Orden Compra")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required|max:14|decimal:2",
      expression: "'required|max:14|decimal:2'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.monto_total,
      expression: "monto_total"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "monto_total",
      placeholder: "Monto Total de la Orden de Compra"
    },
    domProps: {
      value: _vm.monto_total
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.monto_total = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("monto_total")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2",
    attrs: {
      "for": "text-input"
    }
  }, [_vm._v("Moneda")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.moneda,
      expression: "moneda"
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
        _vm.moneda = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c("option", {
    attrs: {
      value: "BRL"
    }
  }, [_vm._v("BRL - Real Brasileño")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "EUR"
    }
  }, [_vm._v("EUR - EURO")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "MXN"
    }
  }, [_vm._v("MXN - Peso Mexicano")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "USD"
    }
  }, [_vm._v("USD - Dolar")])])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2",
    attrs: {
      "for": "text-input"
    }
  }, [_vm._v("Nombre corto del Proyecto")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required|max:40",
      expression: "'required|max:40'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.nombre_corto,
      expression: "nombre_corto"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "nombre_corto",
      placeholder: "Nombre para las Ordenes de Compra",
      rows: "4",
      cols: "80"
    },
    domProps: {
      value: _vm.nombre_corto
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.nombre_corto = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("nombre_corto")))])]), _vm._v(" "), _c("label", {
    staticClass: "col-md-2",
    attrs: {
      "for": "text-input"
    }
  }, [_vm._v("Ciudad")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required|max:125",
      expression: "'required|max:125'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.ciudad,
      expression: "ciudad"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "ciudad",
      placeholder: "Ciudad"
    },
    domProps: {
      value: _vm.ciudad
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.ciudad = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("ciudad")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2",
    attrs: {
      "for": "text-input"
    }
  }, [_vm._v("Fecha Inicio")]), _vm._v(" "), _c("div", {
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
      value: _vm.fecha_inicio,
      expression: "fecha_inicio"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date",
      name: "fecha_inicio",
      placeholder: "Fecha de inicio"
    },
    domProps: {
      value: _vm.fecha_inicio
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.fecha_inicio = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("fecha_inicio")))])]), _vm._v(" "), _c("label", {
    staticClass: "col-md-2",
    attrs: {
      "for": "text-input"
    }
  }, [_vm._v("Fecha Fin")]), _vm._v(" "), _c("div", {
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
      value: _vm.fecha_fin,
      expression: "fecha_fin"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date",
      name: "fecha_fin",
      placeholder: "Fecha de finalización"
    },
    domProps: {
      value: _vm.fecha_fin
    },
    on: {
      change: _vm.validar,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.fecha_fin = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("fecha_fin")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2",
    attrs: {
      "for": "text-input"
    }
  }, [_vm._v("Subcategoria")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-10"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.subcategoria_id,
      expression: "subcategoria_id"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "excluded:0",
      expression: "'excluded:0'"
    }],
    staticClass: "form-control",
    attrs: {
      id: "subcategoria_id",
      name: "subcategoria_id",
      "data-vv-as": "Subcategoria"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.subcategoria_id = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, _vm._l(_vm.listaSubcategorias, function (item) {
    return _c("option", {
      key: item.id,
      domProps: {
        value: item.id
      }
    }, [_vm._v(_vm._s(item.nombre) + " ")]);
  }), 0), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("subcategoria_id")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2",
    attrs: {
      "for": "text-input"
    }
  }, [_vm._v("Cliente")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-10"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.cliente_id,
      expression: "cliente_id"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "excluded:0",
      expression: "'excluded:0'"
    }],
    staticClass: "form-control",
    attrs: {
      id: "cliente_id",
      name: "cliente_id",
      "data-vv-as": "Cliente"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.cliente_id = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, _vm._l(_vm.listaClientes, function (item) {
    return _c("option", {
      key: item.id,
      domProps: {
        value: item.id
      }
    }, [_vm._v(_vm._s(item.nombre) + " ")]);
  }), 0), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("cliente_id")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2",
    attrs: {
      "for": "text-input"
    }
  }, [_vm._v("PM Cliente")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-10"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required|max:250",
      expression: "'required|max:250'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.pm_cliente,
      expression: "pm_cliente"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "pm_cliente",
      placeholder: "PM Cliente"
    },
    domProps: {
      value: _vm.pm_cliente
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.pm_cliente = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("pm_cliente")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2",
    attrs: {
      "for": "text-input"
    }
  }, [_vm._v("PM Interno")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-10"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required|max:250",
      expression: "'required|max:250'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.pm_interno,
      expression: "pm_interno"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "pm_interno",
      placeholder: "PM Interno"
    },
    domProps: {
      value: _vm.pm_interno
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.pm_interno = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("pm_interno")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2",
    attrs: {
      "for": "text-input"
    }
  }, [_vm._v("Asignar")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.adicional,
      expression: "adicional"
    }],
    staticClass: "form-control form-check-input",
    attrs: {
      type: "checkbox",
      id: "adicional"
    },
    domProps: {
      checked: Array.isArray(_vm.adicional) ? _vm._i(_vm.adicional, null) > -1 : _vm.adicional
    },
    on: {
      change: function change($event) {
        var $$a = _vm.adicional,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.adicional = $$a.concat([$$v]));
          } else {
            $$i > -1 && (_vm.adicional = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.adicional = $$c;
        }
      }
    }
  })]), _vm._v(" "), _c("label", {
    staticClass: "col-md-2",
    attrs: {
      "for": "text-input"
    }
  }, [_vm._v("Proyecto Principal")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.proyecto_id,
      expression: "proyecto_id"
    }],
    staticClass: "form-control",
    attrs: {
      id: "proyecto_id",
      name: "proyecto_id",
      "data-vv-name": "Proyecto",
      disabled: !_vm.adicional
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.proyecto_id = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, _vm._l(_vm.listarProyAgrp, function (item) {
    return _c("option", {
      key: item.id,
      domProps: {
        value: item
      }
    }, [_vm._v(_vm._s(item.nombre) + " ")]);
  }), 0)])])] : _vm._e()], 2) : _vm._e(), _vm._v(" "), _vm.tipoAccion == 2 ? _c("div", {
    staticClass: "form"
  }, [_c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label",
    attrs: {
      "for": "text-input"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "col-md-9"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.id,
      expression: "id"
    }],
    staticClass: "form-control",
    attrs: {
      type: "hidden"
    },
    domProps: {
      value: _vm.id
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.id = $event.target.value;
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2",
    attrs: {
      "for": "text-input"
    }
  }, [_vm._v("Nombre")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.nombre,
      expression: "nombre"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "name",
      placeholder: "Nombre",
      rows: "4",
      cols: "80"
    },
    domProps: {
      value: _vm.nombre
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.nombre = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("nombre")))])]), _vm._v(" "), _c("label", {
    staticClass: "col-md-2",
    attrs: {
      "for": "text-input"
    }
  }, [_vm._v("Orden compra")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required|max:30",
      expression: "'required|max:30'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.clave,
      expression: "clave"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "oc",
      placeholder: "Orden compra"
    },
    domProps: {
      value: _vm.clave
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.clave = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("oc")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2",
    attrs: {
      "for": "text-input"
    }
  }, [_vm._v("Número de Cotización")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required|max:30",
      expression: "'required|max:30'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.cotizacion,
      expression: "cotizacion"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "cotizacion",
      placeholder: "Número de Cotización"
    },
    domProps: {
      value: _vm.cotizacion
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.cotizacion = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("cotizacion")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2",
    attrs: {
      "for": "text-input"
    }
  }, [_vm._v("Monto Total de la Orden Compra")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required|max:14|decimal:2",
      expression: "'required|max:14|decimal:2'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.monto_total,
      expression: "monto_total"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "monto_total",
      placeholder: "Monto Total"
    },
    domProps: {
      value: _vm.monto_total
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.monto_total = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("monto_total")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2",
    attrs: {
      "for": "text-input"
    }
  }, [_vm._v("Moneda")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.moneda,
      expression: "moneda"
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
        _vm.moneda = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c("option", {
    attrs: {
      value: "BRL"
    }
  }, [_vm._v("BRL - Real Brasileño")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "EUR"
    }
  }, [_vm._v("EUR - EURO")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "MXN"
    }
  }, [_vm._v("MXN - Peso Mexicano")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "USD"
    }
  }, [_vm._v("USD - Dolar")])]), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("moneda")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2",
    attrs: {
      "for": "text-input"
    }
  }, [_vm._v("Nombre Folio")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4"
  }, [_c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.nombre_corto,
      expression: "nombre_corto"
    }],
    staticClass: "form-control",
    attrs: {
      disabled: _vm.actualizar,
      name: "name",
      placeholder: "FOLIO CORTO",
      rows: "4",
      cols: "80"
    },
    domProps: {
      value: _vm.nombre_corto
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.nombre_corto = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("nombre_corto")))])]), _vm._v(" "), _c("label", {
    staticClass: "col-md-2",
    attrs: {
      "for": "text-input"
    }
  }, [_vm._v("Ciudad")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required|max:125",
      expression: "'required|max:125'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.ciudad,
      expression: "ciudad"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "ciudad",
      placeholder: "Ciudad"
    },
    domProps: {
      value: _vm.ciudad
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.ciudad = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("ciudad")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2",
    attrs: {
      "for": "text-input"
    }
  }, [_vm._v("Fecha Inicio")]), _vm._v(" "), _c("div", {
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
      value: _vm.fecha_inicio,
      expression: "fecha_inicio"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date",
      name: "fecha_inicio",
      placeholder: "Fecha de inicio"
    },
    domProps: {
      value: _vm.fecha_inicio
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.fecha_inicio = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("label", {
    staticClass: "col-md-2",
    attrs: {
      "for": "text-input"
    }
  }, [_vm._v("Fecha Fin")]), _vm._v(" "), _c("div", {
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
      value: _vm.fecha_fin,
      expression: "fecha_fin"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date",
      name: "fecha_fin",
      placeholder: "Fecha de finalización"
    },
    domProps: {
      value: _vm.fecha_fin
    },
    on: {
      change: _vm.validar,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.fecha_fin = $event.target.value;
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2",
    attrs: {
      "for": "text-input"
    }
  }, [_vm._v("Subcategoria")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-10"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.subcategoria_id,
      expression: "subcategoria_id"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "excluded:0",
      expression: "'excluded:0'"
    }],
    staticClass: "form-control",
    attrs: {
      id: "subcategoria_id",
      name: "subcategoria_id",
      "data-vv-as": "Subcategoria"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.subcategoria_id = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, _vm._l(_vm.listaSubcategorias, function (item) {
    return _c("option", {
      key: item.id,
      domProps: {
        value: item.id
      }
    }, [_vm._v(_vm._s(item.nombre) + " ")]);
  }), 0), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("subcategoria_id")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2",
    attrs: {
      "for": "text-input"
    }
  }, [_vm._v("Cliente")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-10"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.cliente_id,
      expression: "cliente_id"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "excluded:0",
      expression: "'excluded:0'"
    }],
    staticClass: "form-control",
    attrs: {
      id: "cliente_id",
      name: "cliente_id",
      "data-vv-as": "Cliente"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.cliente_id = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, _vm._l(_vm.listaClientes, function (item) {
    return _c("option", {
      key: item.id,
      domProps: {
        value: item.id
      }
    }, [_vm._v(_vm._s(item.nombre) + " ")]);
  }), 0), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("cliente_id")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2",
    attrs: {
      "for": "text-input"
    }
  }, [_vm._v("PM Cliente")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-10"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required|max:250",
      expression: "'required|max:250'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.pm_cliente,
      expression: "pm_cliente"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "pm_cliente",
      placeholder: "PM Cliente"
    },
    domProps: {
      value: _vm.pm_cliente
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.pm_cliente = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("pm_cliente")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2",
    attrs: {
      "for": "text-input"
    }
  }, [_vm._v("PM Interno")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-10"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required|max:250",
      expression: "'required|max:250'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.pm_interno,
      expression: "pm_interno"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "pm_interno",
      placeholder: "PM Interno"
    },
    domProps: {
      value: _vm.pm_interno
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.pm_interno = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("pm_interno")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2",
    attrs: {
      "for": "text-input"
    }
  }, [_vm._v("Proyecto Principal")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.adicional,
      expression: "adicional"
    }],
    staticClass: "form-control form-check-input",
    attrs: {
      type: "checkbox",
      id: "adicional"
    },
    domProps: {
      checked: Array.isArray(_vm.adicional) ? _vm._i(_vm.adicional, null) > -1 : _vm.adicional
    },
    on: {
      change: function change($event) {
        var $$a = _vm.adicional,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.adicional = $$a.concat([$$v]));
          } else {
            $$i > -1 && (_vm.adicional = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.adicional = $$c;
        }
      }
    }
  })]), _vm._v(" "), _c("label", {
    staticClass: "col-md-2",
    attrs: {
      "for": "text-input"
    }
  }, [_vm._v("Proyecto")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.proyecto_id,
      expression: "proyecto_id"
    }],
    staticClass: "form-control",
    attrs: {
      id: "proyecto_id",
      name: "proyecto_id",
      "data-vv-name": "Proyecto",
      disabled: !_vm.adicional
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.proyecto_id = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, _vm._l(_vm.tableData, function (item) {
    return _c("option", {
      key: item.id,
      domProps: {
        value: item.id
      }
    }, [_vm._v(_vm._s(item.nombre_corto) + " ")]);
  }), 0)])])]) : _vm._e(), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.error,
      expression: "error"
    }],
    staticClass: "form-group row div-error"
  }, [_c("div", {
    staticClass: "text-center text-error"
  }, _vm._l(_vm.errorMostrarMsj, function (error) {
    return _c("div", {
      key: error,
      domProps: {
        textContent: _vm._s(error)
      }
    });
  }), 0)])])]), _vm._v(" "), _vm.deshabilitar ? [_c("div", {
    staticClass: "modal-footer"
  }, [_c("div", [_c("vue-element-loading", {
    attrs: {
      active: _vm.isLoading
    }
  }), _vm._v(" "), _c("button", {
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
        return _vm.registrar();
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
        return _vm.actualizar();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Actualizar")]) : _vm._e()], 1)])] : _vm._e(), _vm._v(" "), [!_vm.deshabilitar ? _c("div", {
    staticClass: "modal-footer"
  }, [_c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.guardarAgrupador();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Guardar")])]) : _vm._e()]], 2)])]), _vm._v(" "), _c("div", {
    staticClass: "modal fade",
    "class": {
      mostrar: _vm.modalPDF
    },
    staticStyle: {
      display: "none"
    },
    attrs: {
      tabindex: "-1",
      "data-focus-on": "input:first"
    }
  }, [_c("div", {
    staticClass: "modal-dialog modal-dark modal-el"
  }, [_c("div", {
    staticClass: "modal-content"
  }, [_c("div", {
    staticClass: "modal-header"
  }, [_c("h4", {
    staticClass: "modal-title"
  }, [_vm._v("Documento P.O.")]), _vm._v(" "), _c("button", {
    staticClass: "close",
    attrs: {
      type: "button",
      "aria-label": "Close"
    },
    on: {
      click: function click($event) {
        return _vm.cerrarModalPDF();
      }
    }
  }, [_c("span", {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("X")])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-4"
  }, [_vm._m(0), _vm._v(" "), _vm._l(_vm.tableDocumentosProyectos, function (vi) {
    return _c("li", {
      key: vi.id,
      staticClass: "list-group-item"
    }, [_c("div", {
      staticClass: "form-row"
    }, [_c("div", {
      staticClass: "form-group col-md-8"
    }, [_c("label", [_vm._v(_vm._s(vi.documento))])]), _vm._v(" "), _c("div", {
      staticClass: "form-group col-md-4"
    }, [_c("a", {
      on: {
        click: function click($event) {
          return _vm.deleteu(vi);
        }
      }
    }, [_c("span", {
      staticClass: "fas fa-trash",
      attrs: {
        "arial-hidden": "true"
      }
    })]), _vm._v(" "), _c("a", {
      on: {
        click: function click($event) {
          return _vm.verdocumentos(vi);
        }
      }
    }, [_c("span", {
      staticClass: "fas fa-eye",
      attrs: {
        "arial-hidden": "true"
      }
    })])])])]);
  })], 2), _vm._v(" "), _c("div", {
    staticClass: "col-md-8"
  }, [_c("iframe", {
    attrs: {
      src: this.nombre_archivo,
      width: "100%",
      height: "700",
      frameborder: "0"
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.cerrarModalPDF();
      }
    }
  }, [_vm._v("Cerrar")])])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-8"
  }, [_c("label", [_c("b", [_vm._v("Documento")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_c("b", [_vm._v("ACCIONES")])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Proyecto/Requisiciones/AprobarRequisiciones.vue?vue&type=template&id=2fe2ef0b":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Proyecto/Requisiciones/AprobarRequisiciones.vue?vue&type=template&id=2fe2ef0b ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "card"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.loading_guardarRequisicion.enable
    }
  }), _vm._v(" "), _c("v-server-table", {
    ref: "tblRequisiciones",
    attrs: {
      columns: _vm.columns_requisiciones,
      url: this.url + "?query={}&limit=10&ascending=0&page=1&byColumn=1&orderBy=requisiciones2__folio",
      options: _vm.options_requisiciones
    },
    scopedSlots: _vm._u([{
      key: "id",
      fn: function fn(props) {
        return [_c("actions", {
          scopedSlots: _vm._u([{
            key: "options",
            fn: function fn() {
              return [_c("action", {
                attrs: {
                  title: "Detalles",
                  icon: "fas fa-list"
                },
                on: {
                  click: function click($event) {
                    return _vm.verDetalles(props.row);
                  }
                }
              }), _vm._v(" "), _c("action", {
                attrs: {
                  title: "Aprobar",
                  icon: "fas fa-check"
                },
                on: {
                  click: function click($event) {
                    return _vm.aprobar(props.row.id);
                  }
                }
              }), _vm._v(" "), _c("action", {
                attrs: {
                  title: "Rechazar",
                  icon: "fas fa-times"
                },
                on: {
                  click: function click($event) {
                    return _vm.rechazar(props.row.id);
                  }
                }
              })];
            },
            proxy: true
          }], null, true)
        })];
      }
    }])
  })], 1)])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header"
  }, [_c("i", {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" REQUISICIONES POR APROBAR\r\n        ")]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Proyecto/Requisiciones/Detalle.vue?vue&type=template&id=5c0048d0":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Proyecto/Requisiciones/Detalle.vue?vue&type=template&id=5c0048d0 ***!
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
  return _c("div", [_c("div", {
    staticClass: "card"
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isLoading
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "card-header"
  }, [_c("i", {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" Detalles de requisicion pertenecientes al proyecto: " + _vm._s(_vm.requisiicion == null ? "" : _vm.requisiicion.p_nombre_corto + " con folio " + _vm.requisiicion.folio) + "\r\n            "), _c("button", {
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
  }), _vm._v(" Atras\r\n            ")])]), _vm._v(" "), _c("div", {
    staticClass: "accordion",
    attrs: {
      id: "accordion"
    }
  }, [_c("div", {
    staticClass: "card"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "collapse",
    attrs: {
      id: "collapseTres",
      "aria-labelledby": "headingTres",
      "data-parent": "#accordion"
    }
  }, [_c("v-client-table", {
    ref: "myTabledescuento",
    attrs: {
      columns: _vm.columnsdetallerequisicion,
      data: _vm.tableDatadetallerequisicion,
      options: _vm.optionsdetallerequisicion
    },
    scopedSlots: _vm._u([{
      key: "req.narticulo",
      fn: function fn(props) {
        return [props.row.correccion != null ? [_c("span", {
          staticClass: "text-danger"
        }, [_vm._v(_vm._s(props.row.req.descripcion) + " " + _vm._s(props.row.correccion.comentario))])] : [_c("span", [_vm._v(_vm._s(props.row.req.narticulo))])]];
      }
    }, {
      key: "req.equivalente",
      fn: function fn(props) {
        return [props.row.req.equivalente ? [_c("button", {
          staticClass: "btn btn-success",
          attrs: {
            type: "button"
          }
        }, [_vm._v("SI")])] : [_c("button", {
          staticClass: "btn btn-danger",
          attrs: {
            type: "button"
          }
        }, [_vm._v("No")])]];
      }
    }, {
      key: "req.articulo_id",
      fn: function fn(props) {
        return [_c("div", {
          staticClass: "dropdown2"
        }, [_c("button", {
          staticClass: "dropbtn2"
        }, [_c("i", {
          staticClass: "fas fa-cogs"
        })]), _vm._v(" "), _c("div", {
          staticClass: "dropdown-content2"
        }, [_c("a", {
          staticClass: "button2",
          attrs: {
            disabled: _vm.requisiicion.estado_id == 1 || _vm.requisiicion.estado_id == 2 || _vm.requisiicion.estado_id == 3 || _vm.requisiicion.estado_id == 5 || _vm.requisiicion.estado_id == 6 || _vm.requisiicion.estado_id == 7
          },
          on: {
            click: function click($event) {
              return _vm.actdesactreq(props.row.req.pda, _vm.preq.requisicione_id, 0, null, props);
            }
          }
        }, [_c("i", {
          staticClass: "far fa-window-close"
        }), _vm._v("  Remover")]), _vm._v(" "), _c("a", {
          staticClass: "button2",
          attrs: {
            disabled: _vm.requisiicion.estado_id == 1 || _vm.requisiicion.estado_id == 2 || _vm.requisiicion.estado_id == 3 || _vm.requisiicion.estado_id == 5 || _vm.requisiicion.estado_id == 6 || _vm.requisiicion.estado_id == 7
          },
          on: {
            click: function click($event) {
              return _vm.abrirModalA("articulo", "actualizar", props.row.req.articulo_id, props.row.req);
            }
          }
        }, [_c("i", {
          staticClass: "far fa-file-alt"
        }), _vm._v("  Actualizar Documentos")]), _vm._v(" "), _c("a", {
          staticClass: "button2",
          attrs: {
            href: "#formulario",
            disabled: _vm.requisiicion.estado_id == 1 || _vm.requisiicion.estado_id == 2 || _vm.requisiicion.estado_id == 3 || _vm.requisiicion.estado_id == 5 || _vm.requisiicion.estado_id == 6 || _vm.requisiicion.estado_id == 7
          },
          on: {
            click: function click($event) {
              return _vm.abrirModalA("articulo", "actualizar_articulo", 0, props.row.req);
            }
          }
        }, [_c("i", {
          staticClass: "far fa-edit"
        }), _vm._v("  Actualizar")])])])];
      }
    }])
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "collapse",
    attrs: {
      id: "collapseCuatro",
      "aria-labelledby": "headingTres",
      "data-parent": "#accordion"
    }
  }, [_c("v-client-table", {
    ref: "myTabledescuento",
    attrs: {
      columns: _vm.columnsdetallerequisicionServ,
      data: _vm.tableDatadetallerequisicionServ,
      options: _vm.optionsdetallerequisicionServ
    },
    scopedSlots: _vm._u([{
      key: "req.nservicio",
      fn: function fn(props) {
        return [props.row.correccion != null ? [_c("span", {
          staticClass: "text-danger"
        }, [_vm._v(_vm._s(props.row.req.descripcion) + " " + _vm._s(props.row.correccion.comentario))])] : [_c("span", [_vm._v(_vm._s(props.row.req.nservicio))])]];
      }
    }, {
      key: "req.equivalente",
      fn: function fn(props) {
        return [props.row.req.equivalente ? [_c("button", {
          staticClass: "btn btn-success"
        }, [_vm._v("SI")])] : [_c("button", {
          staticClass: "btn btn-danger"
        }, [_vm._v("NO")])]];
      }
    }, {
      key: "req.servicio_id",
      fn: function fn(props) {
        return [_c("div", {
          staticClass: "dropdown2"
        }, [_c("button", {
          staticClass: "dropbtn2"
        }, [_c("i", {
          staticClass: "fas fa-cogs"
        })]), _vm._v(" "), _c("div", {
          staticClass: "dropdown-content2"
        }, [_c("a", {
          staticClass: "button2",
          attrs: {
            type: "button",
            disabled: _vm.requisiicion.estado_id == 1 || _vm.requisiicion.estado_id == 2 || _vm.requisiicion.estado_id == 3 || _vm.requisiicion.estado_id == 5 || _vm.requisiicion.estado_id == 6 || _vm.requisiicion.estado_id == 7
          },
          on: {
            click: function click($event) {
              return _vm.actdesactreq(null, _vm.preq.requisicione_id, 0, props.row.req.pda, null);
            }
          }
        }, [_c("i", {
          staticClass: "far fa-window-close"
        }), _vm._v("  Remover")]), _vm._v(" "), _c("a", {
          staticClass: "button2",
          attrs: {
            type: "button",
            disabled: _vm.requisiicion.estado_id == 1 || _vm.requisiicion.estado_id == 2 || _vm.requisiicion.estado_id == 3 || _vm.requisiicion.estado_id == 5 || _vm.requisiicion.estado_id == 6 || _vm.requisiicion.estado_id == 7
          },
          on: {
            click: function click($event) {
              return _vm.abrirModalA("articulo", "actualizar", props.row.req.articulo_id, props.row.req);
            }
          }
        }, [_c("i", {
          staticClass: "far fa-file-alt"
        }), _vm._v("  Actualizar Documentos")]), _vm._v(" "), _c("a", {
          staticClass: "button2",
          attrs: {
            type: "button",
            disabled: _vm.requisiicion.estado_id == 1 || _vm.requisiicion.estado_id == 2 || _vm.requisiicion.estado_id == 3 || _vm.requisiicion.estado_id == 5 || _vm.requisiicion.estado_id == 6 || _vm.requisiicion.estado_id == 7,
            href: "#formulario"
          },
          on: {
            click: function click($event) {
              return _vm.abrirModalA("articulo", "actualizar_servicio", 0, props.row.req);
            }
          }
        }, [_c("i", {
          staticClass: "far fa-edit"
        }), _vm._v("  Actualizar")])])])];
      }
    }])
  })], 1)])])], 1), _vm._v(" "), _c("div", {
    ref: "formLote",
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header"
  }), _vm._v(" "), _c("div", {
    staticClass: "card-body",
    attrs: {
      id: "formulario"
    }
  }, [_c("form", [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.preq.requisicione_id,
      expression: "preq.requisicione_id"
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
      value: _vm.preq.requisicione_id
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.preq, "requisicione_id", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.preq.articulo_id,
      expression: "preq.articulo_id"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "articulo_id",
      name: "articulo_id",
      placeholder: "Articulo",
      hidden: ""
    },
    domProps: {
      value: _vm.preq.articulo_id
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.preq, "articulo_id", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.preq.pda,
      expression: "preq.pda"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "pda",
      name: "pda",
      placeholder: "Partida",
      hidden: ""
    },
    domProps: {
      value: _vm.preq.pda
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.preq, "pda", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.preq.documentacionreid,
      expression: "preq.documentacionreid"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "documentacionreid",
      name: "documentacionreid",
      placeholder: "Articulo",
      hidden: ""
    },
    domProps: {
      value: _vm.preq.documentacionreid
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.preq, "documentacionreid", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2 form-control-label",
    attrs: {
      "for": "inputArticulo"
    }
  }, [_vm._v("Articulo/Servicio")]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-9"
  }, [_c("div", {
    staticClass: "input-group mb-3"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.preq.nombrearti,
      expression: "preq.nombrearti"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Articulo/Servicio",
      readonly: ""
    },
    domProps: {
      value: _vm.preq.nombrearti
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.preq, "nombrearti", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "input-group-append"
  }, [_c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button",
      disabled: _vm.requisiicion == null ? "" : _vm.requisiicion.estado_id == 1 || _vm.requisiicion.estado_id == 2 || _vm.requisiicion.estado_id == 3 || _vm.requisiicion.estado_id == 5 || _vm.requisiicion.estado_id == 7 || _vm.tipoAccionpr == 2
    },
    on: {
      click: function click($event) {
        return _vm.abrirModalA("articulo", "registrar", _vm.preq.requisicione_id);
      }
    }
  }, [_vm._v("Buscar")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2 form-control-label",
    attrs: {
      "for": "comentario"
    }
  }, [_vm._v("Comentario")]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-6"
  }, [_c("textarea", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "max:" + _vm.max_comentarios,
      expression: "'max:'+max_comentarios"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.preq.comentario,
      expression: "preq.comentario"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      rows: "5",
      name: "comentario",
      maxlength: _vm.max_comentarios,
      "aria-label": "With textarea",
      autocomplete: "off",
      id: "comentario"
    },
    domProps: {
      value: _vm.preq.comentario
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.preq, "comentario", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("comentario")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2 form-control-label",
    attrs: {
      "for": "cantidad"
    }
  }, [_vm._v("Cantidad")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "decimal:2",
      expression: "'decimal:2'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.preq.cantidad,
      expression: "preq.cantidad"
    }],
    "class": "form-control" + _vm.clases.cantidades,
    attrs: {
      type: "text",
      name: "cantidad",
      autocomplete: "off",
      id: "cantidad",
      disabled: _vm.validar_pendiente == true
    },
    domProps: {
      value: _vm.preq.cantidad
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.preq, "cantidad", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("cantidad")))])]), _vm._v(" "), _c("label", {
    staticClass: "col-md-2 form-control-label",
    attrs: {
      "for": "fecha_requerido"
    }
  }, [_vm._v("Fecha Requerida")]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-2"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.preq.fecha_requerido,
      expression: "preq.fecha_requerido"
    }],
    "class": "form-control" + _vm.clases.fecharequerido,
    attrs: {
      type: "date",
      name: "fecha_requerido",
      autocomplete: "off",
      id: "fecha_requerido"
    },
    domProps: {
      value: _vm.preq.fecha_requerido
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.preq, "fecha_requerido", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("fecha_requerido")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2 form-control-label pr-1",
    attrs: {
      "for": "equivalente"
    }
  }, [_vm._v("Equivalente")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2"
  }, [_c("select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.preq.equivalente,
      expression: "preq.equivalente"
    }],
    staticClass: "form-control",
    attrs: {
      id: "equivalente",
      name: "equivalente",
      "data-vv-name": "equivalente",
      disabled: _vm.validar_pendiente == true
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.preq, "equivalente", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("SI")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "0"
    }
  }, [_vm._v("NO")])]), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("equivalente")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2 form-control-label",
    attrs: {
      "for": "inputArticulo"
    }
  }, [_vm._v("Documentos Requeridos")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-9"
  }, [_c("div", {
    staticClass: "input-group mb-3"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.preq.documentacionre,
      expression: "preq.documentacionre"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Documentos Requeridos",
      readonly: ""
    },
    domProps: {
      value: _vm.preq.documentacionre
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.preq, "documentacionre", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "input-group-append"
  }, [_c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button",
      disabled: _vm.tipoAccionpr == 2
    },
    on: {
      click: function click($event) {
        return _vm.abrirModalA("articulo", "documentos", _vm.preq.requisicione_id);
      }
    }
  }, [_vm._v("Buscar")])])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "card-footer"
  }, [_c("button", {
    staticClass: "btn btn-outline-dark",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.cancelar();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-times"
  }), _vm._v(" Cancelar")]), _vm._v(" "), _vm.tipoAccionpr == 1 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        _vm.validarpartida();
        _vm.guardarPR(1, _vm.preq.requisicione_id);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Guardar")]) : _vm._e(), _vm._v(" "), _vm.tipoAccionpr == 2 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.guardarPR(0, _vm.preq.pda);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Actualizar")]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "modal fade",
    "class": {
      mostrar: _vm.modaluno
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
  }, [_c("div", {
    staticClass: "accordion",
    attrs: {
      id: "accordiondos"
    }
  }, [_c("div", {
    staticClass: "card"
  }, [_vm._m(1), _vm._v(" "), _c("div", {
    staticClass: "collapse",
    attrs: {
      id: "collapsecinco",
      "aria-labelledby": "headingUno",
      "data-parent": "#accordiondos"
    }
  }, [_c("v-server-table", {
    ref: "myTableArticulo",
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
        }, [_vm._v("\r\n                                                    " + _vm._s(props.row.calidad) + "\r\n                                                ")])] : _vm._e()];
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
        }), _vm._v(" Acciones\r\n                                                    ")]), _vm._v(" "), _c("div", {
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
        }), _vm._v(" Actualizar Articulo\r\n                                                        ")])])])])];
      }
    }])
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
      columns: _vm.columnss,
      options: _vm.optionss
    },
    on: {
      "row-click": _vm.seleccionarServicio
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "collapse",
    attrs: {
      id: "collapsiete",
      "aria-labelledby": "headingTres",
      "data-parent": "#accordiondos"
    }
  }, [_c("v-server-table", {
    ref: "myTablePend",
    attrs: {
      url: "/catpendiente/busqueda",
      columns: _vm.columnsp,
      options: _vm.optionsp
    },
    on: {
      "row-click": _vm.seleccionarPendiente
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
        }, [_vm._v("\r\n                                                    " + _vm._s(props.row.calidad) + "\r\n                                                ")])] : _vm._e()];
      }
    }])
  })], 1)])])]), _vm._v(" "), _c("div", {
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
  }, [_c("i", {
    staticClass: "fas fa-times"
  }), _vm._v(" Cerrar")])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "modal fade",
    "class": {
      mostrar: _vm.modaldos
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
  }, [_c("div", {
    staticClass: "form-group row"
  }, _vm._l(_vm.documentos, function (doc, i) {
    return _c("div", {
      key: i,
      staticClass: "col-md-4"
    }, [_c("div", {
      staticClass: "form-ch eck checkbox"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.doc_req,
        expression: "doc_req"
      }],
      attrs: {
        id: doc.id,
        type: "checkbox"
      },
      domProps: {
        value: doc.id,
        checked: Array.isArray(_vm.doc_req) ? _vm._i(_vm.doc_req, doc.id) > -1 : _vm.doc_req
      },
      on: {
        change: function change($event) {
          var $$a = _vm.doc_req,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;
          if (Array.isArray($$a)) {
            var $$v = doc.id,
              $$i = _vm._i($$a, $$v);
            if ($$el.checked) {
              $$i < 0 && (_vm.doc_req = $$a.concat([$$v]));
            } else {
              $$i > -1 && (_vm.doc_req = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
            }
          } else {
            _vm.doc_req = $$c;
          }
        }
      }
    }), _vm._v(" "), _c("label", {
      staticClass: "form-check-label",
      attrs: {
        "for": "doc.id"
      }
    }, [_vm._v("\r\n                                            " + _vm._s(doc.nombre.replace("Certificado", "Cert.")) + "\r\n                                        ")])])]);
  }), 0)])]), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("button", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.tipoAcciondos == 1,
      expression: "tipoAcciondos==1"
    }],
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.guardardocumentos();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Guardar")]), _vm._v(" "), _c("button", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.tipoAcciondos == 0,
      expression: "tipoAcciondos==0"
    }],
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.guardardocumentosupdate();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Actualizar")]), _vm._v(" "), _c("button", {
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
  }), _vm._v(" Cerrar")])])])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header bg-dark justify-content-center",
    attrs: {
      id: "headingTres"
    }
  }, [_c("h5", {
    staticClass: "mb-0"
  }, [_c("button", {
    staticClass: "btn btn-dark collapsed",
    attrs: {
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#collapseCuatro",
      "aria-expanded": "false",
      "aria-controls": "collapseCuatro"
    }
  }, [_c("b", [_vm._v(" SERVICIOS ")])]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-dark collapsed",
    attrs: {
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#collapseTres",
      "aria-expanded": "false",
      "aria-controls": "collapseTres"
    }
  }, [_c("b", [_vm._v(" ARTICULOS")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header bg-dark justify-content-center",
    attrs: {
      id: "headingUno"
    }
  }, [_c("h5", {
    staticClass: "mb-0"
  }, [_c("button", {
    staticClass: "btn btn-dark collapsed",
    attrs: {
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#collapsecinco",
      "aria-expanded": "false",
      "aria-controls": "collapseTres"
    }
  }, [_c("b", [_vm._v(" Articulos ")])]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-dark collapsed",
    attrs: {
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#collapseseis",
      "aria-expanded": "false",
      "aria-controls": "collapseCuatro"
    }
  }, [_c("b", [_vm._v(" Servicios ")])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Proyecto/Requisiciones/Modal.vue?vue&type=template&id=04045174":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Proyecto/Requisiciones/Modal.vue?vue&type=template&id=04045174 ***!
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
  return _c("div", [_c("div", {
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
      "for": "folio"
    }
  }, [_vm._v("Folio")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.requisicion.folio,
      expression: "requisicion.folio"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "folio",
      "data-vv-name": "folio",
      placeholder: "Folio",
      autocomplete: "off",
      id: "folio",
      readonly: ""
    },
    domProps: {
      value: _vm.requisicion.folio
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.requisicion, "folio", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("folio")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label",
    attrs: {
      "for": "area_solicita_id"
    }
  }, [_vm._v("Área Solicitante")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-9"
  }, [_c("select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.requisicion.area_solicita_id,
      expression: "requisicion.area_solicita_id"
    }],
    staticClass: "form-control",
    attrs: {
      id: "area_solicita_id",
      name: "area_solicita_id",
      "data-vv-name": "área solicitante"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.requisicion, "area_solicita_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, _vm._l(_vm.listaAreasSol, function (item) {
    return _c("option", {
      key: item.id,
      domProps: {
        value: item.id
      }
    }, [_vm._v(_vm._s(item.nombre) + " ")]);
  }), 0), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("área solicitante")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label",
    attrs: {
      "for": "fecha_solicitud"
    }
  }, [_vm._v("Fecha Solicitud")]), _vm._v(" "), _c("div", {
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
      value: _vm.requisicion.fecha_solicitud,
      expression: "requisicion.fecha_solicitud"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date",
      name: "fecha_solicitud",
      placeholder: "Fecha",
      autocomplete: "off",
      "data-vv-name": "fecha solicitud",
      id: "fecha_solicitud"
    },
    domProps: {
      value: _vm.requisicion.fecha_solicitud
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.requisicion, "fecha_solicitud", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("fecha solicitud")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label",
    attrs: {
      "for": "descripcion_uso"
    }
  }, [_vm._v("Descripcion de uso")]), _vm._v(" "), _c("div", {
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
      value: _vm.requisicion.descripcion_uso,
      expression: "requisicion.descripcion_uso"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "descripcion_uso",
      placeholder: "Uso",
      autocomplete: "off",
      "data-vv-name": "descripcion uso",
      id: "descripción uso"
    },
    domProps: {
      value: _vm.requisicion.descripcion_uso
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.requisicion, "descripcion_uso", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("descripcion uso")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label",
    attrs: {
      "for": "tipo_compra"
    }
  }, [_vm._v("Tipo de Compra")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3"
  }, [_c("select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.requisicion.tipo_compra,
      expression: "requisicion.tipo_compra"
    }],
    staticClass: "form-control",
    attrs: {
      id: "tipo_compra",
      name: "tipo_compra",
      "data-vv-name": "tipo de compra"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.requisicion, "tipo_compra", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("Programada")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "2"
    }
  }, [_vm._v("Inmediata")])]), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("tipo de compra")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label",
    attrs: {
      "for": "proyecto_id"
    }
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
      disabled: !_vm.isEnabled,
      id: "proyecto",
      label: "nombre_corto",
      name: "proyecto",
      options: _vm.listaProyecto
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
  }, [_vm._v(_vm._s(_vm.errors.first("proyecto")))])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label",
    attrs: {
      "for": "solicita_empleado_id"
    }
  }, [_vm._v("Solicitado por")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-9"
  }, [_c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    attrs: {
      options: _vm.optionsvs,
      id: "solicita_empleado_id",
      name: "solicita_empleado_id",
      label: "name",
      "data-vv-name": "empleado que solicita"
    },
    model: {
      value: _vm.requisicion.solicita_empleado_id,
      callback: function callback($$v) {
        _vm.$set(_vm.requisicion, "solicita_empleado_id", $$v);
      },
      expression: "requisicion.solicita_empleado_id"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("empleado que solicita")))])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label",
    attrs: {
      "for": "valida_empleado_id"
    }
  }, [_vm._v("Revisado por")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-9"
  }, [_c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    attrs: {
      options: _vm.optionsvs,
      id: "valida_empleado_id",
      name: "valida_empleado_id",
      label: "name",
      "data-vv-name": "empleado que valida"
    },
    model: {
      value: _vm.requisicion.valida_empleado_id,
      callback: function callback($$v) {
        _vm.$set(_vm.requisicion, "valida_empleado_id", $$v);
      },
      expression: "requisicion.valida_empleado_id"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("validado por")))])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label",
    attrs: {
      "for": "autoriza_empleado_id"
    }
  }, [_vm._v("Autorizado por ")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-9"
  }, [_c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    attrs: {
      options: _vm.optionsvs,
      id: "autoriza_empleado_id",
      name: "autoriza_empleado_id",
      label: "name",
      "data-vv-name": "empleado que autoriza"
    },
    model: {
      value: _vm.requisicion.autoriza_empleado_id,
      callback: function callback($$v) {
        _vm.$set(_vm.requisicion, "autoriza_empleado_id", $$v);
      },
      expression: "requisicion.autoriza_empleado_id"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("empleado que autoriza")))])], 1)])]), _vm._v(" "), _c("div", {
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
        return _vm.guardarRequisicion(1);
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
        return _vm.guardarRequisicion(0);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Actualizar")]) : _vm._e()])])])])], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Proyecto/Requisiciones/PrincipalRequisiciones.vue?vue&type=template&id=f64c8838":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Proyecto/Requisiciones/PrincipalRequisiciones.vue?vue&type=template&id=f64c8838 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_c("div", [_c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.detalle,
      expression: "!detalle"
    }],
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("i", {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" Requisiciones\r\n                "), _c("button", {
    staticClass: "btn btn-dark float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.abrirModal("requisicion", "registrar");
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  }), _vm._v(" Nuevo\r\n                ")])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("v-client-table", {
    ref: "myTable",
    attrs: {
      columns: _vm.columns,
      data: _vm.tableData,
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
              return _vm.verrequisiciones(props.row.id);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-eye"
        }), _vm._v("  Ver requisiciones\r\n                                    ")])])])])];
      }
    }])
  })], 1)]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.detalle,
      expression: "detalle"
    }]
  }, [_c("requisiciones", {
    ref: "requisiciones",
    on: {
      "requisiciones:click": _vm.maestro
    }
  })], 1), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.modal,
      expression: "modal"
    }]
  }, [_c("modal", {
    ref: "modal",
    on: {
      "modal:nuevo": function modalNuevo($event) {
        return _vm.verrequisiciones($event);
      }
    }
  })], 1)])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Proyecto/Requisiciones/Requisiciones.vue?vue&type=template&id=01fbd854":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Proyecto/Requisiciones/Requisiciones.vue?vue&type=template&id=01fbd854 ***!
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
  return _c("div", [_c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.detallerequisiciones,
      expression: "!detallerequisiciones"
    }],
    staticClass: "card"
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isLoading
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "card-header"
  }, [_c("i", {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" Requisiciones\n      "), _c("button", {
    staticClass: "btn btn-secondary float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.maestroInicial();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-arrow-left"
  }), _vm._v(" Atras\n      ")])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("v-client-table", {
    ref: "myTable",
    attrs: {
      columns: _vm.columns,
      data: _vm.tableData,
      options: _vm.options
    },
    scopedSlots: _vm._u([{
      key: "r.partida",
      fn: function fn(props) {
        return [_c("button", {
          staticClass: "btn btn-outline-dark",
          on: {
            click: function click($event) {
              return _vm.cargardetalle(props.row.r);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-list"
        }), _vm._v(" Partidas\n          ")])];
      }
    }, {
      key: "r.descargar",
      fn: function fn(props) {
        return [_c("button", {
          staticClass: "btn btn-outline-dark",
          on: {
            click: function click($event) {
              return _vm.descargarnew(props.row.r);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-file-pdf"
        }), _vm._v(" "), _c("i", {
          staticClass: "fas fa-download"
        })])];
      }
    }, {
      key: "r.id",
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
        }), _vm._v(" \n              ")]), _vm._v(" "), _c("div", {
          staticClass: "dropdown-menu",
          attrs: {
            "aria-labelledby": "btnGroupDrop1"
          }
        }, [props.row.r.formato_requisiciones == null || props.row.r.formato_requisiciones == "" ? void 0 : _vm._e(), _vm._v(" "), props.row.r.condicion == 0 ? void 0 : _vm._e(), _vm._v(" "), props.row.r.estado_id == 0 || props.row.r.estado_id == 4 ? _c("div", [_c("a", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: _vm.PermisosCrud.Update,
            expression: "PermisosCrud.Update"
          }],
          staticClass: "dropdown-item",
          attrs: {
            type: "button",
            href: "#"
          },
          on: {
            click: function click($event) {
              return _vm.abrirModal("requisicion", "actualizar", props.row.r);
            }
          }
        }, [_c("i", {
          staticClass: "icon-pencil"
        }), _vm._v(" Actualizar requisición\n    ")])]) : _vm._e(), _vm._v(" "), props.row.r.estado_id == 0 || props.row.r.estado_id == 4 || props.row.r.estado_id == 7 ? _c("div", [_c("a", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: _vm.PermisosCrud.Delete,
            expression: "PermisosCrud.Delete"
          }],
          staticClass: "dropdown-item",
          attrs: {
            href: "#"
          },
          on: {
            click: function click($event) {
              return _vm.cerrarRequisicion(props.row.r);
            }
          }
        }, [_c("i", {
          staticClass: "far fa-window-close"
        }), _vm._v(" Cerrar requisición\n    ")])]) : _vm._e()], 2)])])];
      }
    }, {
      key: "r.folio",
      fn: function fn(props) {
        return [props.row.c != null ? [_c("span", {
          staticClass: "text-danger"
        }, [_vm._v(_vm._s(props.row.r.folio) + " Clic en el botón "), _c("b", [_vm._v("No autorizado")]), _vm._v(" para mas detalles ")])] : [_vm._v("\n    " + _vm._s(props.row.r.folio) + "\n  ")]];
      }
    }, {
      key: "r.estado_id",
      fn: function fn(props) {
        return [props.row.r.estado_id == 0 ? [_c("button", {
          staticClass: "btn btn-uno",
          attrs: {
            type: "button"
          }
        }, [_c("i", {
          staticClass: "fas fa-plus"
        }), _vm._v(" Nuevo")])] : _vm._e(), _vm._v(" "), props.row.r.estado_id == 1 ? [_c("button", {
          staticClass: "btn btn-dos",
          attrs: {
            type: "button"
          }
        }, [_c("i", {
          staticClass: "fa fa-exclamation-circle"
        }), _vm._v(" En espera de validación por")])] : _vm._e(), _vm._v(" "), props.row.r.estado_id == 2 ? [_c("button", {
          staticClass: "btn btn-tres",
          attrs: {
            type: "button"
          }
        }, [_c("i", {
          staticClass: "fa fa-exclamation-triangle"
        }), _vm._v(" En espera de autorización")])] : _vm._e(), _vm._v(" "), props.row.r.estado_id == 3 ? [_c("button", {
          staticClass: "btn btn-cuatro",
          attrs: {
            type: "button"
          }
        }, [_c("i", {
          staticClass: "fa fa-check-circle"
        }), _vm._v(" En revisión por almacén")])] : _vm._e(), _vm._v(" "), props.row.r.estado_id == 5 ? [_c("button", {
          staticClass: "btn btn-nueve",
          attrs: {
            type: "button"
          }
        }, [_c("i", {
          staticClass: "fa fa-check-circle"
        }), _vm._v(" Autorizado por compras")])] : _vm._e(), _vm._v(" "), props.row.r.estado_id == 4 ? [_c("button", {
          staticClass: "btn btn-ocho",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.vercomentarios(props.row.c.comentario);
            }
          }
        }, [_c("i", {
          staticClass: "fa fa-times"
        }), _vm._v(" No autorizado")])] : _vm._e(), _vm._v(" "), props.row.r.estado_id == 6 ? [_c("button", {
          staticClass: "btn btn-siete",
          attrs: {
            type: "button"
          }
        }, [_c("i", {
          staticClass: "fa fa-caret-square-o-left"
        }), _vm._v(" Espera autorización compras")])] : _vm._e(), _vm._v(" "), props.row.r.estado_id == 7 ? [_c("button", {
          staticClass: "btn btn-seis",
          attrs: {
            type: "button"
          }
        }, [_c("i", {
          staticClass: "fa fa-caret-square-o-left"
        }), _vm._v(" Por Equivalente")])] : _vm._e(), _vm._v(" "), props.row.r.estado_id == 8 ? [_c("button", {
          staticClass: "btn btn-cinco",
          attrs: {
            type: "button"
          }
        }, [_c("i", {
          staticClass: "fa fa-caret-square-o-left"
        }), _vm._v(" En Espera (Calidad)")])] : _vm._e()];
      }
    }, {
      key: "r.responsable",
      fn: function fn(props) {
        return [props.row.r.estado_id == 1 ? [_c("span", [_vm._v(_vm._s(props.row.r.nombre_empleado_valida))])] : _vm._e(), _vm._v(" "), props.row.r.estado_id == 2 ? [_c("span", [_vm._v(_vm._s(props.row.r.nombre_empleado_autoriza))])] : _vm._e(), _vm._v(" "), props.row.r.estado_id == 3 ? [_c("span", [_vm._v("ALMACÉN")])] : _vm._e(), _vm._v(" "), props.row.r.estado_id == 5 || props.row.r.estado_id == 6 ? [_c("span", [_vm._v("COMPRAS")])] : _vm._e()];
      }
    }])
  })], 1)], 1), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.widgets.detallerequisiciones,
      expression: "widgets.detallerequisiciones"
    }]
  }, [_c("detallerequisiciones", {
    ref: "detallerequisiciones",
    on: {
      "detallerequisiciones:change": _vm.maestro
    }
  })], 1), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.modal,
      expression: "modal"
    }]
  }, [_c("modal", {
    ref: "modal",
    on: {
      "modal:click": function modalClick($event) {
        return _vm.grabar($event);
      }
    }
  })], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Proyecto/Proyecto.vue?vue&type=style&index=0&id=74cc0b70&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Proyecto/Proyecto.vue?vue&type=style&index=0&id=74cc0b70&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.btn-greg {\r\n    color: #fff;\r\n    background-color: #2095d8;\r\n    border-color: #2095d8;\n}\n.modal-el {\r\n    max-width: 1200px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Proyecto/Requisiciones/Detalle.vue?vue&type=style&index=0&id=5c0048d0&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Proyecto/Requisiciones/Detalle.vue?vue&type=style&index=0&id=5c0048d0&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.VueTables__child-row-toggler--closed::before {\r\n    content: \"+\";\n}\n.VueTables__child-row-toggler--open::before {\r\n    content: \"-\";\n}\n.dropbtn2 {\r\n    background-color: #000000;\r\n    color: rgb(255, 255, 255);\r\n    padding: 15px;\r\n    font-size: 15px;\r\n    border: none;\n}\n.dropdown2 {\r\n    position: relative;\r\n    display: inline-block;\n}\n.dropdown-content2 {\r\n    display: none;\r\n    position: sticky;\r\n    background-color: #adb1c5;\r\n    min-width: 50px;\r\n    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\r\n    z-index: 1;\n}\n.dropdown-content2 a {\r\n    color: black;\r\n    padding: 15px 20px;\r\n    text-decoration: none;\r\n    display: block;\n}\n.button2 {\r\n    background-color: white;\r\n    /* Green */\r\n    color: white;\r\n    padding: auto;\r\n    border: solid 1px;\r\n    padding: 1px;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 15px;\n}\n.dropdown-content2 button2:hover {\r\n    background-color: rgb(206, 36, 36);\n}\n.dropdown2:hover .dropdown-content2 {\r\n    display: block;\n}\n.dropdown2:hover .dropbtn2 {\r\n    background-color: #000000;\n}\nth,\r\ntd {\r\n    text-align: left;\n}\nth:nth-child(n+2),\r\ntd:nth-child(n+2) {\r\n    text-align: center;\n}\nthead tr:nth-child(2) th {\r\n    font-weight: normal;\n}\n.VueTables__sort-icon {\r\n    margin-left: 40px;\n}\n.VueTables__dropdown-pagination {\r\n    margin-left: 40px;\n}\n.VueTables__highlight {\r\n    background: yellow;\r\n    font-weight: normal;\n}\n.VueTables__sortable {\r\n    cursor: pointer;\n}\n.VueTables__date-filter {\r\n    border: 1px solid #ccc;\r\n    padding: 16px;\r\n    border-radius: 4px;\r\n    cursor: pointer;\n}\n.VueTables__filter-placeholder {\r\n    color: #aaa;\n}\n.VueTables__list-filter {\r\n    width: auto;\r\n    height: auto;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Proyecto/Requisiciones/Modal.vue?vue&type=style&index=0&id=04045174&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Proyecto/Requisiciones/Modal.vue?vue&type=style&index=0&id=04045174&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.style-chooser .vs__search::-moz-placeholder {\r\n    background: #dfe5fb;\r\n    border: none;\r\n    color: #394066;\r\n    text-transform: lowercase;\r\n    font-variant: small-caps;\n}\n.style-chooser .vs__search::placeholder,\r\n  .style-chooser .vs__dropdown-toggle,\r\n  .style-chooser .vs__dropdown-menu {\r\n    background: #dfe5fb;\r\n    border: none;\r\n    color: #394066;\r\n    text-transform: lowercase;\r\n    font-variant: small-caps;\n}\n.style-chooser .vs__clear,\r\n  .style-chooser .vs__open-indicator {\r\n    fill: #394066;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Proyecto/Requisiciones/Requisiciones.vue?vue&type=style&index=0&id=01fbd854&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Proyecto/Requisiciones/Requisiciones.vue?vue&type=style&index=0&id=01fbd854&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.btn-uno {\r\n  color: rgb(255, 255, 255);\r\n  background-color: #f6a152;\r\n  border-color: #f6a152;\r\n  border-radius: 2px;\n}\n.btn-dos {\r\n  color: rgb(0, 0, 0);\r\n  background-color: #e9b443;\r\n  border-color: #e9b443;\r\n  border-radius: 2px;\n}\r\n/* no */\n.btn-tres {\r\n  color: rgb(0, 0, 0);\r\n  background-color: #8bbbef;\r\n  border-color: #8bbbef;\r\n  border-radius: 2px;\n}\n.btn-cuatro {\r\n  color: rgb(255, 255, 255);\r\n  background-color: #40d0d0;\r\n  border-color: #40d0d0;\r\n  border-radius: 2px;\n}\n.btn-cinco {\r\n  color: rgb(255, 255, 255);\r\n  background-color: #0d4da3;\r\n  border-color: #0d4da3;\r\n  border-radius: 2px;\n}\r\n/* no */\n.btn-seis {\r\n  color: rgb(255, 255, 255);\r\n  background-color: #0d98a3;\r\n  border-color: #0d98a3;\r\n  border-radius: 2px;\n}\n.btn-siete {\r\n  color: rgb(255, 255, 255);\r\n  background-color: #25a30d;\r\n  border-color: #25a30d;\r\n  border-radius: 2px;\n}\n.btn-ocho {\r\n  color: rgb(255, 255, 255);\r\n  background-color: #d04040;\r\n  border-color: #d04040;\r\n  border-radius: 2px;\n}\n.btn-nueve {\r\n  color: rgb(0, 0, 0);\r\n  background-color: #40d088;\r\n  border-color: #40d088;\r\n  border-radius: 2px;\n}\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Proyecto/Proyecto.vue?vue&type=style&index=0&id=74cc0b70&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Proyecto/Proyecto.vue?vue&type=style&index=0&id=74cc0b70&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Proyecto_vue_vue_type_style_index_0_id_74cc0b70_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Proyecto.vue?vue&type=style&index=0&id=74cc0b70&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Proyecto/Proyecto.vue?vue&type=style&index=0&id=74cc0b70&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Proyecto_vue_vue_type_style_index_0_id_74cc0b70_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Proyecto_vue_vue_type_style_index_0_id_74cc0b70_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Proyecto/Requisiciones/Detalle.vue?vue&type=style&index=0&id=5c0048d0&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Proyecto/Requisiciones/Detalle.vue?vue&type=style&index=0&id=5c0048d0&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Detalle_vue_vue_type_style_index_0_id_5c0048d0_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Detalle.vue?vue&type=style&index=0&id=5c0048d0&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Proyecto/Requisiciones/Detalle.vue?vue&type=style&index=0&id=5c0048d0&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Detalle_vue_vue_type_style_index_0_id_5c0048d0_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Detalle_vue_vue_type_style_index_0_id_5c0048d0_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Proyecto/Requisiciones/Modal.vue?vue&type=style&index=0&id=04045174&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Proyecto/Requisiciones/Modal.vue?vue&type=style&index=0&id=04045174&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_id_04045174_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Modal.vue?vue&type=style&index=0&id=04045174&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Proyecto/Requisiciones/Modal.vue?vue&type=style&index=0&id=04045174&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_id_04045174_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_id_04045174_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Proyecto/Requisiciones/Requisiciones.vue?vue&type=style&index=0&id=01fbd854&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Proyecto/Requisiciones/Requisiciones.vue?vue&type=style&index=0&id=01fbd854&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Requisiciones_vue_vue_type_style_index_0_id_01fbd854_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Requisiciones.vue?vue&type=style&index=0&id=01fbd854&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Proyecto/Requisiciones/Requisiciones.vue?vue&type=style&index=0&id=01fbd854&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Requisiciones_vue_vue_type_style_index_0_id_01fbd854_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Requisiciones_vue_vue_type_style_index_0_id_01fbd854_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/sweetalert2/dist/sweetalert2.all.js":
/*!**********************************************************!*\
  !*** ./node_modules/sweetalert2/dist/sweetalert2.all.js ***!
  \**********************************************************/
/***/ (function(module) {

/*!
* sweetalert2 v11.26.4
* Released under the MIT License.
*/
(function (global, factory) {
   true ? module.exports = factory() :
  0;
})(this, (function () { 'use strict';

  function _assertClassBrand(e, t, n) {
    if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n;
    throw new TypeError("Private element is not present on this object");
  }
  function _checkPrivateRedeclaration(e, t) {
    if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
  function _classPrivateFieldGet2(s, a) {
    return s.get(_assertClassBrand(s, a));
  }
  function _classPrivateFieldInitSpec(e, t, a) {
    _checkPrivateRedeclaration(e, t), t.set(e, a);
  }
  function _classPrivateFieldSet2(s, a, r) {
    return s.set(_assertClassBrand(s, a), r), r;
  }

  const RESTORE_FOCUS_TIMEOUT = 100;

  /** @type {GlobalState} */
  const globalState = {};
  const focusPreviousActiveElement = () => {
    if (globalState.previousActiveElement instanceof HTMLElement) {
      globalState.previousActiveElement.focus();
      globalState.previousActiveElement = null;
    } else if (document.body) {
      document.body.focus();
    }
  };

  /**
   * Restore previous active (focused) element
   *
   * @param {boolean} returnFocus
   * @returns {Promise<void>}
   */
  const restoreActiveElement = returnFocus => {
    return new Promise(resolve => {
      if (!returnFocus) {
        return resolve();
      }
      const x = window.scrollX;
      const y = window.scrollY;
      globalState.restoreFocusTimeout = setTimeout(() => {
        focusPreviousActiveElement();
        resolve();
      }, RESTORE_FOCUS_TIMEOUT); // issues/900

      window.scrollTo(x, y);
    });
  };

  const swalPrefix = 'swal2-';

  /**
   * @typedef {Record<SwalClass, string>} SwalClasses
   */

  /**
   * @typedef {'success' | 'warning' | 'info' | 'question' | 'error'} SwalIcon
   * @typedef {Record<SwalIcon, string>} SwalIcons
   */

  /** @type {SwalClass[]} */
  const classNames = ['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'no-transition', 'toast', 'toast-shown', 'show', 'hide', 'close', 'title', 'html-container', 'actions', 'confirm', 'deny', 'cancel', 'footer', 'icon', 'icon-content', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'label', 'textarea', 'inputerror', 'input-label', 'validation-message', 'progress-steps', 'active-progress-step', 'progress-step', 'progress-step-line', 'loader', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen', 'rtl', 'timer-progress-bar', 'timer-progress-bar-container', 'scrollbar-measure', 'icon-success', 'icon-warning', 'icon-info', 'icon-question', 'icon-error', 'draggable', 'dragging'];
  const swalClasses = classNames.reduce((acc, className) => {
    acc[className] = swalPrefix + className;
    return acc;
  }, /** @type {SwalClasses} */{});

  /** @type {SwalIcon[]} */
  const icons = ['success', 'warning', 'info', 'question', 'error'];
  const iconTypes = icons.reduce((acc, icon) => {
    acc[icon] = swalPrefix + icon;
    return acc;
  }, /** @type {SwalIcons} */{});

  const consolePrefix = 'SweetAlert2:';

  /**
   * Capitalize the first letter of a string
   *
   * @param {string} str
   * @returns {string}
   */
  const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);

  /**
   * Standardize console warnings
   *
   * @param {string | string[]} message
   */
  const warn = message => {
    console.warn(`${consolePrefix} ${typeof message === 'object' ? message.join(' ') : message}`);
  };

  /**
   * Standardize console errors
   *
   * @param {string} message
   */
  const error = message => {
    console.error(`${consolePrefix} ${message}`);
  };

  /**
   * Private global state for `warnOnce`
   *
   * @type {string[]}
   * @private
   */
  const previousWarnOnceMessages = [];

  /**
   * Show a console warning, but only if it hasn't already been shown
   *
   * @param {string} message
   */
  const warnOnce = message => {
    if (!previousWarnOnceMessages.includes(message)) {
      previousWarnOnceMessages.push(message);
      warn(message);
    }
  };

  /**
   * Show a one-time console warning about deprecated params/methods
   *
   * @param {string} deprecatedParam
   * @param {string?} useInstead
   */
  const warnAboutDeprecation = (deprecatedParam, useInstead = null) => {
    warnOnce(`"${deprecatedParam}" is deprecated and will be removed in the next major release.${useInstead ? ` Use "${useInstead}" instead.` : ''}`);
  };

  /**
   * If `arg` is a function, call it (with no arguments or context) and return the result.
   * Otherwise, just pass the value through
   *
   * @param {(() => *) | *} arg
   * @returns {*}
   */
  const callIfFunction = arg => typeof arg === 'function' ? arg() : arg;

  /**
   * @param {*} arg
   * @returns {boolean}
   */
  const hasToPromiseFn = arg => arg && typeof arg.toPromise === 'function';

  /**
   * @param {*} arg
   * @returns {Promise<*>}
   */
  const asPromise = arg => hasToPromiseFn(arg) ? arg.toPromise() : Promise.resolve(arg);

  /**
   * @param {*} arg
   * @returns {boolean}
   */
  const isPromise = arg => arg && Promise.resolve(arg) === arg;

  /**
   * Gets the popup container which contains the backdrop and the popup itself.
   *
   * @returns {HTMLElement | null}
   */
  const getContainer = () => document.body.querySelector(`.${swalClasses.container}`);

  /**
   * @param {string} selectorString
   * @returns {HTMLElement | null}
   */
  const elementBySelector = selectorString => {
    const container = getContainer();
    return container ? container.querySelector(selectorString) : null;
  };

  /**
   * @param {string} className
   * @returns {HTMLElement | null}
   */
  const elementByClass = className => {
    return elementBySelector(`.${className}`);
  };

  /**
   * @returns {HTMLElement | null}
   */
  const getPopup = () => elementByClass(swalClasses.popup);

  /**
   * @returns {HTMLElement | null}
   */
  const getIcon = () => elementByClass(swalClasses.icon);

  /**
   * @returns {HTMLElement | null}
   */
  const getIconContent = () => elementByClass(swalClasses['icon-content']);

  /**
   * @returns {HTMLElement | null}
   */
  const getTitle = () => elementByClass(swalClasses.title);

  /**
   * @returns {HTMLElement | null}
   */
  const getHtmlContainer = () => elementByClass(swalClasses['html-container']);

  /**
   * @returns {HTMLElement | null}
   */
  const getImage = () => elementByClass(swalClasses.image);

  /**
   * @returns {HTMLElement | null}
   */
  const getProgressSteps = () => elementByClass(swalClasses['progress-steps']);

  /**
   * @returns {HTMLElement | null}
   */
  const getValidationMessage = () => elementByClass(swalClasses['validation-message']);

  /**
   * @returns {HTMLButtonElement | null}
   */
  const getConfirmButton = () => (/** @type {HTMLButtonElement} */elementBySelector(`.${swalClasses.actions} .${swalClasses.confirm}`));

  /**
   * @returns {HTMLButtonElement | null}
   */
  const getCancelButton = () => (/** @type {HTMLButtonElement} */elementBySelector(`.${swalClasses.actions} .${swalClasses.cancel}`));

  /**
   * @returns {HTMLButtonElement | null}
   */
  const getDenyButton = () => (/** @type {HTMLButtonElement} */elementBySelector(`.${swalClasses.actions} .${swalClasses.deny}`));

  /**
   * @returns {HTMLElement | null}
   */
  const getInputLabel = () => elementByClass(swalClasses['input-label']);

  /**
   * @returns {HTMLElement | null}
   */
  const getLoader = () => elementBySelector(`.${swalClasses.loader}`);

  /**
   * @returns {HTMLElement | null}
   */
  const getActions = () => elementByClass(swalClasses.actions);

  /**
   * @returns {HTMLElement | null}
   */
  const getFooter = () => elementByClass(swalClasses.footer);

  /**
   * @returns {HTMLElement | null}
   */
  const getTimerProgressBar = () => elementByClass(swalClasses['timer-progress-bar']);

  /**
   * @returns {HTMLElement | null}
   */
  const getCloseButton = () => elementByClass(swalClasses.close);

  // https://github.com/jkup/focusable/blob/master/index.js
  const focusable = `
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`;
  /**
   * @returns {HTMLElement[]}
   */
  const getFocusableElements = () => {
    const popup = getPopup();
    if (!popup) {
      return [];
    }
    /** @type {NodeListOf<HTMLElement>} */
    const focusableElementsWithTabindex = popup.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])');
    const focusableElementsWithTabindexSorted = Array.from(focusableElementsWithTabindex)
    // sort according to tabindex
    .sort((a, b) => {
      const tabindexA = parseInt(a.getAttribute('tabindex') || '0');
      const tabindexB = parseInt(b.getAttribute('tabindex') || '0');
      if (tabindexA > tabindexB) {
        return 1;
      } else if (tabindexA < tabindexB) {
        return -1;
      }
      return 0;
    });

    /** @type {NodeListOf<HTMLElement>} */
    const otherFocusableElements = popup.querySelectorAll(focusable);
    const otherFocusableElementsFiltered = Array.from(otherFocusableElements).filter(el => el.getAttribute('tabindex') !== '-1');
    return [...new Set(focusableElementsWithTabindexSorted.concat(otherFocusableElementsFiltered))].filter(el => isVisible$1(el));
  };

  /**
   * @returns {boolean}
   */
  const isModal = () => {
    return hasClass(document.body, swalClasses.shown) && !hasClass(document.body, swalClasses['toast-shown']) && !hasClass(document.body, swalClasses['no-backdrop']);
  };

  /**
   * @returns {boolean}
   */
  const isToast = () => {
    const popup = getPopup();
    if (!popup) {
      return false;
    }
    return hasClass(popup, swalClasses.toast);
  };

  /**
   * @returns {boolean}
   */
  const isLoading = () => {
    const popup = getPopup();
    if (!popup) {
      return false;
    }
    return popup.hasAttribute('data-loading');
  };

  /**
   * Securely set innerHTML of an element
   * https://github.com/sweetalert2/sweetalert2/issues/1926
   *
   * @param {HTMLElement} elem
   * @param {string} html
   */
  const setInnerHtml = (elem, html) => {
    elem.textContent = '';
    if (html) {
      const parser = new DOMParser();
      const parsed = parser.parseFromString(html, `text/html`);
      const head = parsed.querySelector('head');
      if (head) {
        Array.from(head.childNodes).forEach(child => {
          elem.appendChild(child);
        });
      }
      const body = parsed.querySelector('body');
      if (body) {
        Array.from(body.childNodes).forEach(child => {
          if (child instanceof HTMLVideoElement || child instanceof HTMLAudioElement) {
            elem.appendChild(child.cloneNode(true)); // https://github.com/sweetalert2/sweetalert2/issues/2507
          } else {
            elem.appendChild(child);
          }
        });
      }
    }
  };

  /**
   * @param {HTMLElement} elem
   * @param {string} className
   * @returns {boolean}
   */
  const hasClass = (elem, className) => {
    if (!className) {
      return false;
    }
    const classList = className.split(/\s+/);
    for (let i = 0; i < classList.length; i++) {
      if (!elem.classList.contains(classList[i])) {
        return false;
      }
    }
    return true;
  };

  /**
   * @param {HTMLElement} elem
   * @param {SweetAlertOptions} params
   */
  const removeCustomClasses = (elem, params) => {
    Array.from(elem.classList).forEach(className => {
      if (!Object.values(swalClasses).includes(className) && !Object.values(iconTypes).includes(className) && !Object.values(params.showClass || {}).includes(className)) {
        elem.classList.remove(className);
      }
    });
  };

  /**
   * @param {HTMLElement} elem
   * @param {SweetAlertOptions} params
   * @param {string} className
   */
  const applyCustomClass = (elem, params, className) => {
    removeCustomClasses(elem, params);
    if (!params.customClass) {
      return;
    }
    const customClass = params.customClass[(/** @type {keyof SweetAlertCustomClass} */className)];
    if (!customClass) {
      return;
    }
    if (typeof customClass !== 'string' && !customClass.forEach) {
      warn(`Invalid type of customClass.${className}! Expected string or iterable object, got "${typeof customClass}"`);
      return;
    }
    addClass(elem, customClass);
  };

  /**
   * @param {HTMLElement} popup
   * @param {import('./renderers/renderInput').InputClass | SweetAlertInput} inputClass
   * @returns {HTMLInputElement | null}
   */
  const getInput$1 = (popup, inputClass) => {
    if (!inputClass) {
      return null;
    }
    switch (inputClass) {
      case 'select':
      case 'textarea':
      case 'file':
        return popup.querySelector(`.${swalClasses.popup} > .${swalClasses[inputClass]}`);
      case 'checkbox':
        return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.checkbox} input`);
      case 'radio':
        return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.radio} input:checked`) || popup.querySelector(`.${swalClasses.popup} > .${swalClasses.radio} input:first-child`);
      case 'range':
        return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.range} input`);
      default:
        return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.input}`);
    }
  };

  /**
   * @param {HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement} input
   */
  const focusInput = input => {
    input.focus();

    // place cursor at end of text in text input
    if (input.type !== 'file') {
      // http://stackoverflow.com/a/2345915
      const val = input.value;
      input.value = '';
      input.value = val;
    }
  };

  /**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[] | undefined} classList
   * @param {boolean} condition
   */
  const toggleClass = (target, classList, condition) => {
    if (!target || !classList) {
      return;
    }
    if (typeof classList === 'string') {
      classList = classList.split(/\s+/).filter(Boolean);
    }
    classList.forEach(className => {
      if (Array.isArray(target)) {
        target.forEach(elem => {
          if (condition) {
            elem.classList.add(className);
          } else {
            elem.classList.remove(className);
          }
        });
      } else {
        if (condition) {
          target.classList.add(className);
        } else {
          target.classList.remove(className);
        }
      }
    });
  };

  /**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[] | undefined} classList
   */
  const addClass = (target, classList) => {
    toggleClass(target, classList, true);
  };

  /**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[] | undefined} classList
   */
  const removeClass = (target, classList) => {
    toggleClass(target, classList, false);
  };

  /**
   * Get direct child of an element by class name
   *
   * @param {HTMLElement} elem
   * @param {string} className
   * @returns {HTMLElement | undefined}
   */
  const getDirectChildByClass = (elem, className) => {
    const children = Array.from(elem.children);
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child instanceof HTMLElement && hasClass(child, className)) {
        return child;
      }
    }
  };

  /**
   * @param {HTMLElement} elem
   * @param {string} property
   * @param {string | number | null | undefined} value
   */
  const applyNumericalStyle = (elem, property, value) => {
    if (value === `${parseInt(`${value}`)}`) {
      value = parseInt(value);
    }
    if (value || parseInt(`${value}`) === 0) {
      elem.style.setProperty(property, typeof value === 'number' ? `${value}px` : value);
    } else {
      elem.style.removeProperty(property);
    }
  };

  /**
   * @param {HTMLElement | null} elem
   * @param {string} display
   */
  const show = (elem, display = 'flex') => {
    if (!elem) {
      return;
    }
    elem.style.display = display;
  };

  /**
   * @param {HTMLElement | null} elem
   */
  const hide = elem => {
    if (!elem) {
      return;
    }
    elem.style.display = 'none';
  };

  /**
   * @param {HTMLElement | null} elem
   * @param {string} display
   */
  const showWhenInnerHtmlPresent = (elem, display = 'block') => {
    if (!elem) {
      return;
    }
    new MutationObserver(() => {
      toggle(elem, elem.innerHTML, display);
    }).observe(elem, {
      childList: true,
      subtree: true
    });
  };

  /**
   * @param {HTMLElement} parent
   * @param {string} selector
   * @param {string} property
   * @param {string} value
   */
  const setStyle = (parent, selector, property, value) => {
    /** @type {HTMLElement | null} */
    const el = parent.querySelector(selector);
    if (el) {
      el.style.setProperty(property, value);
    }
  };

  /**
   * @param {HTMLElement} elem
   * @param {boolean | string | null | undefined} condition
   * @param {string} display
   */
  const toggle = (elem, condition, display = 'flex') => {
    if (condition) {
      show(elem, display);
    } else {
      hide(elem);
    }
  };

  /**
   * borrowed from jquery $(elem).is(':visible') implementation
   *
   * @param {HTMLElement | null} elem
   * @returns {boolean}
   */
  const isVisible$1 = elem => !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));

  /**
   * @returns {boolean}
   */
  const allButtonsAreHidden = () => !isVisible$1(getConfirmButton()) && !isVisible$1(getDenyButton()) && !isVisible$1(getCancelButton());

  /**
   * @param {HTMLElement} elem
   * @returns {boolean}
   */
  const isScrollable = elem => !!(elem.scrollHeight > elem.clientHeight);

  /**
   * @param {HTMLElement} element
   * @param {HTMLElement} stopElement
   * @returns {boolean}
   */
  const selfOrParentIsScrollable = (element, stopElement) => {
    let parent = element;
    while (parent && parent !== stopElement) {
      if (isScrollable(parent)) {
        return true;
      }
      parent = parent.parentElement;
    }
    return false;
  };

  /**
   * borrowed from https://stackoverflow.com/a/46352119
   *
   * @param {HTMLElement} elem
   * @returns {boolean}
   */
  const hasCssAnimation = elem => {
    const style = window.getComputedStyle(elem);
    const animDuration = parseFloat(style.getPropertyValue('animation-duration') || '0');
    const transDuration = parseFloat(style.getPropertyValue('transition-duration') || '0');
    return animDuration > 0 || transDuration > 0;
  };

  /**
   * @param {number} timer
   * @param {boolean} reset
   */
  const animateTimerProgressBar = (timer, reset = false) => {
    const timerProgressBar = getTimerProgressBar();
    if (!timerProgressBar) {
      return;
    }
    if (isVisible$1(timerProgressBar)) {
      if (reset) {
        timerProgressBar.style.transition = 'none';
        timerProgressBar.style.width = '100%';
      }
      setTimeout(() => {
        timerProgressBar.style.transition = `width ${timer / 1000}s linear`;
        timerProgressBar.style.width = '0%';
      }, 10);
    }
  };
  const stopTimerProgressBar = () => {
    const timerProgressBar = getTimerProgressBar();
    if (!timerProgressBar) {
      return;
    }
    const timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    timerProgressBar.style.removeProperty('transition');
    timerProgressBar.style.width = '100%';
    const timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    const timerProgressBarPercent = timerProgressBarWidth / timerProgressBarFullWidth * 100;
    timerProgressBar.style.width = `${timerProgressBarPercent}%`;
  };

  /**
   * Detect Node env
   *
   * @returns {boolean}
   */
  const isNodeEnv = () => typeof window === 'undefined' || typeof document === 'undefined';

  const sweetHTML = `
 <div aria-labelledby="${swalClasses.title}" aria-describedby="${swalClasses['html-container']}" class="${swalClasses.popup}" tabindex="-1">
   <button type="button" class="${swalClasses.close}"></button>
   <ul class="${swalClasses['progress-steps']}"></ul>
   <div class="${swalClasses.icon}"></div>
   <img class="${swalClasses.image}" />
   <h2 class="${swalClasses.title}" id="${swalClasses.title}"></h2>
   <div class="${swalClasses['html-container']}" id="${swalClasses['html-container']}"></div>
   <input class="${swalClasses.input}" id="${swalClasses.input}" />
   <input type="file" class="${swalClasses.file}" />
   <div class="${swalClasses.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${swalClasses.select}" id="${swalClasses.select}"></select>
   <div class="${swalClasses.radio}"></div>
   <label class="${swalClasses.checkbox}">
     <input type="checkbox" id="${swalClasses.checkbox}" />
     <span class="${swalClasses.label}"></span>
   </label>
   <textarea class="${swalClasses.textarea}" id="${swalClasses.textarea}"></textarea>
   <div class="${swalClasses['validation-message']}" id="${swalClasses['validation-message']}"></div>
   <div class="${swalClasses.actions}">
     <div class="${swalClasses.loader}"></div>
     <button type="button" class="${swalClasses.confirm}"></button>
     <button type="button" class="${swalClasses.deny}"></button>
     <button type="button" class="${swalClasses.cancel}"></button>
   </div>
   <div class="${swalClasses.footer}"></div>
   <div class="${swalClasses['timer-progress-bar-container']}">
     <div class="${swalClasses['timer-progress-bar']}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g, '');

  /**
   * @returns {boolean}
   */
  const resetOldContainer = () => {
    const oldContainer = getContainer();
    if (!oldContainer) {
      return false;
    }
    oldContainer.remove();
    removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['has-column']]);
    return true;
  };
  const resetValidationMessage$1 = () => {
    globalState.currentInstance.resetValidationMessage();
  };
  const addInputChangeListeners = () => {
    const popup = getPopup();
    const input = getDirectChildByClass(popup, swalClasses.input);
    const file = getDirectChildByClass(popup, swalClasses.file);
    /** @type {HTMLInputElement} */
    const range = popup.querySelector(`.${swalClasses.range} input`);
    /** @type {HTMLOutputElement} */
    const rangeOutput = popup.querySelector(`.${swalClasses.range} output`);
    const select = getDirectChildByClass(popup, swalClasses.select);
    /** @type {HTMLInputElement} */
    const checkbox = popup.querySelector(`.${swalClasses.checkbox} input`);
    const textarea = getDirectChildByClass(popup, swalClasses.textarea);
    input.oninput = resetValidationMessage$1;
    file.onchange = resetValidationMessage$1;
    select.onchange = resetValidationMessage$1;
    checkbox.onchange = resetValidationMessage$1;
    textarea.oninput = resetValidationMessage$1;
    range.oninput = () => {
      resetValidationMessage$1();
      rangeOutput.value = range.value;
    };
    range.onchange = () => {
      resetValidationMessage$1();
      rangeOutput.value = range.value;
    };
  };

  /**
   * @param {string | HTMLElement} target
   * @returns {HTMLElement}
   */
  const getTarget = target => typeof target === 'string' ? document.querySelector(target) : target;

  /**
   * @param {SweetAlertOptions} params
   */
  const setupAccessibility = params => {
    const popup = getPopup();
    popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
    popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');
    if (!params.toast) {
      popup.setAttribute('aria-modal', 'true');
    }
  };

  /**
   * @param {HTMLElement} targetElement
   */
  const setupRTL = targetElement => {
    if (window.getComputedStyle(targetElement).direction === 'rtl') {
      addClass(getContainer(), swalClasses.rtl);
      globalState.isRTL = true;
    }
  };

  /**
   * Add modal + backdrop to DOM
   *
   * @param {SweetAlertOptions} params
   */
  const init = params => {
    // Clean up the old popup container if it exists
    const oldContainerExisted = resetOldContainer();
    if (isNodeEnv()) {
      error('SweetAlert2 requires document to initialize');
      return;
    }
    const container = document.createElement('div');
    container.className = swalClasses.container;
    if (oldContainerExisted) {
      addClass(container, swalClasses['no-transition']);
    }
    setInnerHtml(container, sweetHTML);
    container.dataset['swal2Theme'] = params.theme;
    const targetElement = getTarget(params.target);
    targetElement.appendChild(container);
    if (params.topLayer) {
      container.setAttribute('popover', '');
      container.showPopover();
    }
    setupAccessibility(params);
    setupRTL(targetElement);
    addInputChangeListeners();
  };

  /**
   * @param {HTMLElement | object | string} param
   * @param {HTMLElement} target
   */
  const parseHtmlToContainer = (param, target) => {
    // DOM element
    if (param instanceof HTMLElement) {
      target.appendChild(param);
    }

    // Object
    else if (typeof param === 'object') {
      handleObject(param, target);
    }

    // Plain string
    else if (param) {
      setInnerHtml(target, param);
    }
  };

  /**
   * @param {object} param
   * @param {HTMLElement} target
   */
  const handleObject = (param, target) => {
    // JQuery element(s)
    if (param.jquery) {
      handleJqueryElem(target, param);
    }

    // For other objects use their string representation
    else {
      setInnerHtml(target, param.toString());
    }
  };

  /**
   * @param {HTMLElement} target
   * @param {object} elem
   */
  const handleJqueryElem = (target, elem) => {
    target.textContent = '';
    if (0 in elem) {
      for (let i = 0; i in elem; i++) {
        target.appendChild(elem[i].cloneNode(true));
      }
    } else {
      target.appendChild(elem.cloneNode(true));
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderActions = (instance, params) => {
    const actions = getActions();
    const loader = getLoader();
    if (!actions || !loader) {
      return;
    }

    // Actions (buttons) wrapper
    if (!params.showConfirmButton && !params.showDenyButton && !params.showCancelButton) {
      hide(actions);
    } else {
      show(actions);
    }

    // Custom class
    applyCustomClass(actions, params, 'actions');

    // Render all the buttons
    renderButtons(actions, loader, params);

    // Loader
    setInnerHtml(loader, params.loaderHtml || '');
    applyCustomClass(loader, params, 'loader');
  };

  /**
   * @param {HTMLElement} actions
   * @param {HTMLElement} loader
   * @param {SweetAlertOptions} params
   */
  function renderButtons(actions, loader, params) {
    const confirmButton = getConfirmButton();
    const denyButton = getDenyButton();
    const cancelButton = getCancelButton();
    if (!confirmButton || !denyButton || !cancelButton) {
      return;
    }

    // Render buttons
    renderButton(confirmButton, 'confirm', params);
    renderButton(denyButton, 'deny', params);
    renderButton(cancelButton, 'cancel', params);
    handleButtonsStyling(confirmButton, denyButton, cancelButton, params);
    if (params.reverseButtons) {
      if (params.toast) {
        actions.insertBefore(cancelButton, confirmButton);
        actions.insertBefore(denyButton, confirmButton);
      } else {
        actions.insertBefore(cancelButton, loader);
        actions.insertBefore(denyButton, loader);
        actions.insertBefore(confirmButton, loader);
      }
    }
  }

  /**
   * @param {HTMLElement} confirmButton
   * @param {HTMLElement} denyButton
   * @param {HTMLElement} cancelButton
   * @param {SweetAlertOptions} params
   */
  function handleButtonsStyling(confirmButton, denyButton, cancelButton, params) {
    if (!params.buttonsStyling) {
      removeClass([confirmButton, denyButton, cancelButton], swalClasses.styled);
      return;
    }
    addClass([confirmButton, denyButton, cancelButton], swalClasses.styled);

    // Apply custom background colors to action buttons
    if (params.confirmButtonColor) {
      confirmButton.style.setProperty('--swal2-confirm-button-background-color', params.confirmButtonColor);
    }
    if (params.denyButtonColor) {
      denyButton.style.setProperty('--swal2-deny-button-background-color', params.denyButtonColor);
    }
    if (params.cancelButtonColor) {
      cancelButton.style.setProperty('--swal2-cancel-button-background-color', params.cancelButtonColor);
    }

    // Apply the outline color to action buttons
    applyOutlineColor(confirmButton);
    applyOutlineColor(denyButton);
    applyOutlineColor(cancelButton);
  }

  /**
   * @param {HTMLElement} button
   */
  function applyOutlineColor(button) {
    const buttonStyle = window.getComputedStyle(button);
    if (buttonStyle.getPropertyValue('--swal2-action-button-focus-box-shadow')) {
      // If the button already has a custom outline color, no need to change it
      return;
    }
    const outlineColor = buttonStyle.backgroundColor.replace(/rgba?\((\d+), (\d+), (\d+).*/, 'rgba($1, $2, $3, 0.5)');
    button.style.setProperty('--swal2-action-button-focus-box-shadow', buttonStyle.getPropertyValue('--swal2-outline').replace(/ rgba\(.*/, ` ${outlineColor}`));
  }

  /**
   * @param {HTMLElement} button
   * @param {'confirm' | 'deny' | 'cancel'} buttonType
   * @param {SweetAlertOptions} params
   */
  function renderButton(button, buttonType, params) {
    const buttonName = /** @type {'Confirm' | 'Deny' | 'Cancel'} */capitalizeFirstLetter(buttonType);
    toggle(button, params[`show${buttonName}Button`], 'inline-block');
    setInnerHtml(button, params[`${buttonType}ButtonText`] || ''); // Set caption text
    button.setAttribute('aria-label', params[`${buttonType}ButtonAriaLabel`] || ''); // ARIA label

    // Add buttons custom classes
    button.className = swalClasses[buttonType];
    applyCustomClass(button, params, `${buttonType}Button`);
  }

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderCloseButton = (instance, params) => {
    const closeButton = getCloseButton();
    if (!closeButton) {
      return;
    }
    setInnerHtml(closeButton, params.closeButtonHtml || '');

    // Custom class
    applyCustomClass(closeButton, params, 'closeButton');
    toggle(closeButton, params.showCloseButton);
    closeButton.setAttribute('aria-label', params.closeButtonAriaLabel || '');
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderContainer = (instance, params) => {
    const container = getContainer();
    if (!container) {
      return;
    }
    handleBackdropParam(container, params.backdrop);
    handlePositionParam(container, params.position);
    handleGrowParam(container, params.grow);

    // Custom class
    applyCustomClass(container, params, 'container');
  };

  /**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['backdrop']} backdrop
   */
  function handleBackdropParam(container, backdrop) {
    if (typeof backdrop === 'string') {
      container.style.background = backdrop;
    } else if (!backdrop) {
      addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
    }
  }

  /**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['position']} position
   */
  function handlePositionParam(container, position) {
    if (!position) {
      return;
    }
    if (position in swalClasses) {
      addClass(container, swalClasses[position]);
    } else {
      warn('The "position" parameter is not valid, defaulting to "center"');
      addClass(container, swalClasses.center);
    }
  }

  /**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['grow']} grow
   */
  function handleGrowParam(container, grow) {
    if (!grow) {
      return;
    }
    addClass(container, swalClasses[`grow-${grow}`]);
  }

  /**
   * This module contains `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */

  var privateProps = {
    innerParams: new WeakMap(),
    domCache: new WeakMap()
  };

  /// <reference path="../../../../sweetalert2.d.ts"/>


  /** @type {InputClass[]} */
  const inputClasses = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderInput = (instance, params) => {
    const popup = getPopup();
    if (!popup) {
      return;
    }
    const innerParams = privateProps.innerParams.get(instance);
    const rerender = !innerParams || params.input !== innerParams.input;
    inputClasses.forEach(inputClass => {
      const inputContainer = getDirectChildByClass(popup, swalClasses[inputClass]);
      if (!inputContainer) {
        return;
      }

      // set attributes
      setAttributes(inputClass, params.inputAttributes);

      // set class
      inputContainer.className = swalClasses[inputClass];
      if (rerender) {
        hide(inputContainer);
      }
    });
    if (params.input) {
      if (rerender) {
        showInput(params);
      }
      // set custom class
      setCustomClass(params);
    }
  };

  /**
   * @param {SweetAlertOptions} params
   */
  const showInput = params => {
    if (!params.input) {
      return;
    }
    if (!renderInputType[params.input]) {
      error(`Unexpected type of input! Expected ${Object.keys(renderInputType).join(' | ')}, got "${params.input}"`);
      return;
    }
    const inputContainer = getInputContainer(params.input);
    if (!inputContainer) {
      return;
    }
    const input = renderInputType[params.input](inputContainer, params);
    show(inputContainer);

    // input autofocus
    if (params.inputAutoFocus) {
      setTimeout(() => {
        focusInput(input);
      });
    }
  };

  /**
   * @param {HTMLInputElement} input
   */
  const removeAttributes = input => {
    for (let i = 0; i < input.attributes.length; i++) {
      const attrName = input.attributes[i].name;
      if (!['id', 'type', 'value', 'style'].includes(attrName)) {
        input.removeAttribute(attrName);
      }
    }
  };

  /**
   * @param {InputClass} inputClass
   * @param {SweetAlertOptions['inputAttributes']} inputAttributes
   */
  const setAttributes = (inputClass, inputAttributes) => {
    const popup = getPopup();
    if (!popup) {
      return;
    }
    const input = getInput$1(popup, inputClass);
    if (!input) {
      return;
    }
    removeAttributes(input);
    for (const attr in inputAttributes) {
      input.setAttribute(attr, inputAttributes[attr]);
    }
  };

  /**
   * @param {SweetAlertOptions} params
   */
  const setCustomClass = params => {
    if (!params.input) {
      return;
    }
    const inputContainer = getInputContainer(params.input);
    if (inputContainer) {
      applyCustomClass(inputContainer, params, 'input');
    }
  };

  /**
   * @param {HTMLInputElement | HTMLTextAreaElement} input
   * @param {SweetAlertOptions} params
   */
  const setInputPlaceholder = (input, params) => {
    if (!input.placeholder && params.inputPlaceholder) {
      input.placeholder = params.inputPlaceholder;
    }
  };

  /**
   * @param {Input} input
   * @param {Input} prependTo
   * @param {SweetAlertOptions} params
   */
  const setInputLabel = (input, prependTo, params) => {
    if (params.inputLabel) {
      const label = document.createElement('label');
      const labelClass = swalClasses['input-label'];
      label.setAttribute('for', input.id);
      label.className = labelClass;
      if (typeof params.customClass === 'object') {
        addClass(label, params.customClass.inputLabel);
      }
      label.innerText = params.inputLabel;
      prependTo.insertAdjacentElement('beforebegin', label);
    }
  };

  /**
   * @param {SweetAlertInput} inputType
   * @returns {HTMLElement | undefined}
   */
  const getInputContainer = inputType => {
    const popup = getPopup();
    if (!popup) {
      return;
    }
    return getDirectChildByClass(popup, swalClasses[(/** @type {SwalClass} */inputType)] || swalClasses.input);
  };

  /**
   * @param {HTMLInputElement | HTMLOutputElement | HTMLTextAreaElement} input
   * @param {SweetAlertOptions['inputValue']} inputValue
   */
  const checkAndSetInputValue = (input, inputValue) => {
    if (['string', 'number'].includes(typeof inputValue)) {
      input.value = `${inputValue}`;
    } else if (!isPromise(inputValue)) {
      warn(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof inputValue}"`);
    }
  };

  /** @type {Record<SweetAlertInput, (input: Input | HTMLElement, params: SweetAlertOptions) => Input>} */
  const renderInputType = {};

  /**
   * @param {HTMLInputElement} input
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */
  renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = renderInputType.search = renderInputType.date = renderInputType['datetime-local'] = renderInputType.time = renderInputType.week = renderInputType.month = /** @type {(input: Input | HTMLElement, params: SweetAlertOptions) => Input} */
  (input, params) => {
    checkAndSetInputValue(input, params.inputValue);
    setInputLabel(input, input, params);
    setInputPlaceholder(input, params);
    input.type = params.input;
    return input;
  };

  /**
   * @param {HTMLInputElement} input
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */
  renderInputType.file = (input, params) => {
    setInputLabel(input, input, params);
    setInputPlaceholder(input, params);
    return input;
  };

  /**
   * @param {HTMLInputElement} range
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */
  renderInputType.range = (range, params) => {
    const rangeInput = range.querySelector('input');
    const rangeOutput = range.querySelector('output');
    checkAndSetInputValue(rangeInput, params.inputValue);
    rangeInput.type = params.input;
    checkAndSetInputValue(rangeOutput, params.inputValue);
    setInputLabel(rangeInput, range, params);
    return range;
  };

  /**
   * @param {HTMLSelectElement} select
   * @param {SweetAlertOptions} params
   * @returns {HTMLSelectElement}
   */
  renderInputType.select = (select, params) => {
    select.textContent = '';
    if (params.inputPlaceholder) {
      const placeholder = document.createElement('option');
      setInnerHtml(placeholder, params.inputPlaceholder);
      placeholder.value = '';
      placeholder.disabled = true;
      placeholder.selected = true;
      select.appendChild(placeholder);
    }
    setInputLabel(select, select, params);
    return select;
  };

  /**
   * @param {HTMLInputElement} radio
   * @returns {HTMLInputElement}
   */
  renderInputType.radio = radio => {
    radio.textContent = '';
    return radio;
  };

  /**
   * @param {HTMLLabelElement} checkboxContainer
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */
  renderInputType.checkbox = (checkboxContainer, params) => {
    const checkbox = getInput$1(getPopup(), 'checkbox');
    checkbox.value = '1';
    checkbox.checked = Boolean(params.inputValue);
    const label = checkboxContainer.querySelector('span');
    setInnerHtml(label, params.inputPlaceholder || params.inputLabel);
    return checkbox;
  };

  /**
   * @param {HTMLTextAreaElement} textarea
   * @param {SweetAlertOptions} params
   * @returns {HTMLTextAreaElement}
   */
  renderInputType.textarea = (textarea, params) => {
    checkAndSetInputValue(textarea, params.inputValue);
    setInputPlaceholder(textarea, params);
    setInputLabel(textarea, textarea, params);

    /**
     * @param {HTMLElement} el
     * @returns {number}
     */
    const getMargin = el => parseInt(window.getComputedStyle(el).marginLeft) + parseInt(window.getComputedStyle(el).marginRight);

    // https://github.com/sweetalert2/sweetalert2/issues/2291
    setTimeout(() => {
      // https://github.com/sweetalert2/sweetalert2/issues/1699
      if ('MutationObserver' in window) {
        const initialPopupWidth = parseInt(window.getComputedStyle(getPopup()).width);
        const textareaResizeHandler = () => {
          // check if texarea is still in document (i.e. popup wasn't closed in the meantime)
          if (!document.body.contains(textarea)) {
            return;
          }
          const textareaWidth = textarea.offsetWidth + getMargin(textarea);
          if (textareaWidth > initialPopupWidth) {
            getPopup().style.width = `${textareaWidth}px`;
          } else {
            applyNumericalStyle(getPopup(), 'width', params.width);
          }
        };
        new MutationObserver(textareaResizeHandler).observe(textarea, {
          attributes: true,
          attributeFilter: ['style']
        });
      }
    });
    return textarea;
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderContent = (instance, params) => {
    const htmlContainer = getHtmlContainer();
    if (!htmlContainer) {
      return;
    }
    showWhenInnerHtmlPresent(htmlContainer);
    applyCustomClass(htmlContainer, params, 'htmlContainer');

    // Content as HTML
    if (params.html) {
      parseHtmlToContainer(params.html, htmlContainer);
      show(htmlContainer, 'block');
    }

    // Content as plain text
    else if (params.text) {
      htmlContainer.textContent = params.text;
      show(htmlContainer, 'block');
    }

    // No content
    else {
      hide(htmlContainer);
    }
    renderInput(instance, params);
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderFooter = (instance, params) => {
    const footer = getFooter();
    if (!footer) {
      return;
    }
    showWhenInnerHtmlPresent(footer);
    toggle(footer, Boolean(params.footer), 'block');
    if (params.footer) {
      parseHtmlToContainer(params.footer, footer);
    }

    // Custom class
    applyCustomClass(footer, params, 'footer');
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderIcon = (instance, params) => {
    const innerParams = privateProps.innerParams.get(instance);
    const icon = getIcon();
    if (!icon) {
      return;
    }

    // if the given icon already rendered, apply the styling without re-rendering the icon
    if (innerParams && params.icon === innerParams.icon) {
      // Custom or default content
      setContent(icon, params);
      applyStyles(icon, params);
      return;
    }
    if (!params.icon && !params.iconHtml) {
      hide(icon);
      return;
    }
    if (params.icon && Object.keys(iconTypes).indexOf(params.icon) === -1) {
      error(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${params.icon}"`);
      hide(icon);
      return;
    }
    show(icon);

    // Custom or default content
    setContent(icon, params);
    applyStyles(icon, params);

    // Animate icon
    addClass(icon, params.showClass && params.showClass.icon);

    // Re-adjust the success icon on system theme change
    const colorSchemeQueryList = window.matchMedia('(prefers-color-scheme: dark)');
    colorSchemeQueryList.addEventListener('change', adjustSuccessIconBackgroundColor);
  };

  /**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */
  const applyStyles = (icon, params) => {
    for (const [iconType, iconClassName] of Object.entries(iconTypes)) {
      if (params.icon !== iconType) {
        removeClass(icon, iconClassName);
      }
    }
    addClass(icon, params.icon && iconTypes[params.icon]);

    // Icon color
    setColor(icon, params);

    // Success icon background color
    adjustSuccessIconBackgroundColor();

    // Custom class
    applyCustomClass(icon, params, 'icon');
  };

  // Adjust success icon background color to match the popup background color
  const adjustSuccessIconBackgroundColor = () => {
    const popup = getPopup();
    if (!popup) {
      return;
    }
    const popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
    /** @type {NodeListOf<HTMLElement>} */
    const successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');
    for (let i = 0; i < successIconParts.length; i++) {
      successIconParts[i].style.backgroundColor = popupBackgroundColor;
    }
  };

  /**
   *
   * @param {SweetAlertOptions} params
   * @returns {string}
   */
  const successIconHtml = params => `
  ${params.animation ? '<div class="swal2-success-circular-line-left"></div>' : ''}
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div>
  ${params.animation ? '<div class="swal2-success-fix"></div>' : ''}
  ${params.animation ? '<div class="swal2-success-circular-line-right"></div>' : ''}
`;
  const errorIconHtml = `
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`;

  /**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */
  const setContent = (icon, params) => {
    if (!params.icon && !params.iconHtml) {
      return;
    }
    let oldContent = icon.innerHTML;
    let newContent = '';
    if (params.iconHtml) {
      newContent = iconContent(params.iconHtml);
    } else if (params.icon === 'success') {
      newContent = successIconHtml(params);
      oldContent = oldContent.replace(/ style=".*?"/g, ''); // undo adjustSuccessIconBackgroundColor()
    } else if (params.icon === 'error') {
      newContent = errorIconHtml;
    } else if (params.icon) {
      const defaultIconHtml = {
        question: '?',
        warning: '!',
        info: 'i'
      };
      newContent = iconContent(defaultIconHtml[params.icon]);
    }
    if (oldContent.trim() !== newContent.trim()) {
      setInnerHtml(icon, newContent);
    }
  };

  /**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */
  const setColor = (icon, params) => {
    if (!params.iconColor) {
      return;
    }
    icon.style.color = params.iconColor;
    icon.style.borderColor = params.iconColor;
    for (const sel of ['.swal2-success-line-tip', '.swal2-success-line-long', '.swal2-x-mark-line-left', '.swal2-x-mark-line-right']) {
      setStyle(icon, sel, 'background-color', params.iconColor);
    }
    setStyle(icon, '.swal2-success-ring', 'border-color', params.iconColor);
  };

  /**
   * @param {string} content
   * @returns {string}
   */
  const iconContent = content => `<div class="${swalClasses['icon-content']}">${content}</div>`;

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderImage = (instance, params) => {
    const image = getImage();
    if (!image) {
      return;
    }
    if (!params.imageUrl) {
      hide(image);
      return;
    }
    show(image, '');

    // Src, alt
    image.setAttribute('src', params.imageUrl);
    image.setAttribute('alt', params.imageAlt || '');

    // Width, height
    applyNumericalStyle(image, 'width', params.imageWidth);
    applyNumericalStyle(image, 'height', params.imageHeight);

    // Class
    image.className = swalClasses.image;
    applyCustomClass(image, params, 'image');
  };

  let dragging = false;
  let mousedownX = 0;
  let mousedownY = 0;
  let initialX = 0;
  let initialY = 0;

  /**
   * @param {HTMLElement} popup
   */
  const addDraggableListeners = popup => {
    popup.addEventListener('mousedown', down);
    document.body.addEventListener('mousemove', move);
    popup.addEventListener('mouseup', up);
    popup.addEventListener('touchstart', down);
    document.body.addEventListener('touchmove', move);
    popup.addEventListener('touchend', up);
  };

  /**
   * @param {HTMLElement} popup
   */
  const removeDraggableListeners = popup => {
    popup.removeEventListener('mousedown', down);
    document.body.removeEventListener('mousemove', move);
    popup.removeEventListener('mouseup', up);
    popup.removeEventListener('touchstart', down);
    document.body.removeEventListener('touchmove', move);
    popup.removeEventListener('touchend', up);
  };

  /**
   * @param {MouseEvent | TouchEvent} event
   */
  const down = event => {
    const popup = getPopup();
    if (event.target === popup || getIcon().contains(/** @type {HTMLElement} */event.target)) {
      dragging = true;
      const clientXY = getClientXY(event);
      mousedownX = clientXY.clientX;
      mousedownY = clientXY.clientY;
      initialX = parseInt(popup.style.insetInlineStart) || 0;
      initialY = parseInt(popup.style.insetBlockStart) || 0;
      addClass(popup, 'swal2-dragging');
    }
  };

  /**
   * @param {MouseEvent | TouchEvent} event
   */
  const move = event => {
    const popup = getPopup();
    if (dragging) {
      let {
        clientX,
        clientY
      } = getClientXY(event);
      const deltaX = clientX - mousedownX;
      // In RTL mode, negate the horizontal delta since insetInlineStart refers to the right edge
      popup.style.insetInlineStart = `${initialX + (globalState.isRTL ? -deltaX : deltaX)}px`;
      popup.style.insetBlockStart = `${initialY + (clientY - mousedownY)}px`;
    }
  };
  const up = () => {
    const popup = getPopup();
    dragging = false;
    removeClass(popup, 'swal2-dragging');
  };

  /**
   * @param {MouseEvent | TouchEvent} event
   * @returns {{ clientX: number, clientY: number }}
   */
  const getClientXY = event => {
    let clientX = 0,
      clientY = 0;
    if (event.type.startsWith('mouse')) {
      clientX = /** @type {MouseEvent} */event.clientX;
      clientY = /** @type {MouseEvent} */event.clientY;
    } else if (event.type.startsWith('touch')) {
      clientX = /** @type {TouchEvent} */event.touches[0].clientX;
      clientY = /** @type {TouchEvent} */event.touches[0].clientY;
    }
    return {
      clientX,
      clientY
    };
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderPopup = (instance, params) => {
    const container = getContainer();
    const popup = getPopup();
    if (!container || !popup) {
      return;
    }

    // Width
    // https://github.com/sweetalert2/sweetalert2/issues/2170
    if (params.toast) {
      applyNumericalStyle(container, 'width', params.width);
      popup.style.width = '100%';
      const loader = getLoader();
      if (loader) {
        popup.insertBefore(loader, getIcon());
      }
    } else {
      applyNumericalStyle(popup, 'width', params.width);
    }

    // Padding
    applyNumericalStyle(popup, 'padding', params.padding);

    // Color
    if (params.color) {
      popup.style.color = params.color;
    }

    // Background
    if (params.background) {
      popup.style.background = params.background;
    }
    hide(getValidationMessage());

    // Classes
    addClasses$1(popup, params);
    if (params.draggable && !params.toast) {
      addClass(popup, swalClasses.draggable);
      addDraggableListeners(popup);
    } else {
      removeClass(popup, swalClasses.draggable);
      removeDraggableListeners(popup);
    }
  };

  /**
   * @param {HTMLElement} popup
   * @param {SweetAlertOptions} params
   */
  const addClasses$1 = (popup, params) => {
    const showClass = params.showClass || {};
    // Default Class + showClass when updating Swal.update({})
    popup.className = `${swalClasses.popup} ${isVisible$1(popup) ? showClass.popup : ''}`;
    if (params.toast) {
      addClass([document.documentElement, document.body], swalClasses['toast-shown']);
      addClass(popup, swalClasses.toast);
    } else {
      addClass(popup, swalClasses.modal);
    }

    // Custom class
    applyCustomClass(popup, params, 'popup');
    // TODO: remove in the next major
    if (typeof params.customClass === 'string') {
      addClass(popup, params.customClass);
    }

    // Icon class (#1842)
    if (params.icon) {
      addClass(popup, swalClasses[`icon-${params.icon}`]);
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderProgressSteps = (instance, params) => {
    const progressStepsContainer = getProgressSteps();
    if (!progressStepsContainer) {
      return;
    }
    const {
      progressSteps,
      currentProgressStep
    } = params;
    if (!progressSteps || progressSteps.length === 0 || currentProgressStep === undefined) {
      hide(progressStepsContainer);
      return;
    }
    show(progressStepsContainer);
    progressStepsContainer.textContent = '';
    if (currentProgressStep >= progressSteps.length) {
      warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
    }
    progressSteps.forEach((step, index) => {
      const stepEl = createStepElement(step);
      progressStepsContainer.appendChild(stepEl);
      if (index === currentProgressStep) {
        addClass(stepEl, swalClasses['active-progress-step']);
      }
      if (index !== progressSteps.length - 1) {
        const lineEl = createLineElement(params);
        progressStepsContainer.appendChild(lineEl);
      }
    });
  };

  /**
   * @param {string} step
   * @returns {HTMLLIElement}
   */
  const createStepElement = step => {
    const stepEl = document.createElement('li');
    addClass(stepEl, swalClasses['progress-step']);
    setInnerHtml(stepEl, step);
    return stepEl;
  };

  /**
   * @param {SweetAlertOptions} params
   * @returns {HTMLLIElement}
   */
  const createLineElement = params => {
    const lineEl = document.createElement('li');
    addClass(lineEl, swalClasses['progress-step-line']);
    if (params.progressStepsDistance) {
      applyNumericalStyle(lineEl, 'width', params.progressStepsDistance);
    }
    return lineEl;
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderTitle = (instance, params) => {
    const title = getTitle();
    if (!title) {
      return;
    }
    showWhenInnerHtmlPresent(title);
    toggle(title, Boolean(params.title || params.titleText), 'block');
    if (params.title) {
      parseHtmlToContainer(params.title, title);
    }
    if (params.titleText) {
      title.innerText = params.titleText;
    }

    // Custom class
    applyCustomClass(title, params, 'title');
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const render = (instance, params) => {
    renderPopup(instance, params);
    renderContainer(instance, params);
    renderProgressSteps(instance, params);
    renderIcon(instance, params);
    renderImage(instance, params);
    renderTitle(instance, params);
    renderCloseButton(instance, params);
    renderContent(instance, params);
    renderActions(instance, params);
    renderFooter(instance, params);
    const popup = getPopup();
    if (typeof params.didRender === 'function' && popup) {
      params.didRender(popup);
    }
    globalState.eventEmitter.emit('didRender', popup);
  };

  /*
   * Global function to determine if SweetAlert2 popup is shown
   */
  const isVisible = () => {
    return isVisible$1(getPopup());
  };

  /*
   * Global function to click 'Confirm' button
   */
  const clickConfirm = () => {
    var _dom$getConfirmButton;
    return (_dom$getConfirmButton = getConfirmButton()) === null || _dom$getConfirmButton === void 0 ? void 0 : _dom$getConfirmButton.click();
  };

  /*
   * Global function to click 'Deny' button
   */
  const clickDeny = () => {
    var _dom$getDenyButton;
    return (_dom$getDenyButton = getDenyButton()) === null || _dom$getDenyButton === void 0 ? void 0 : _dom$getDenyButton.click();
  };

  /*
   * Global function to click 'Cancel' button
   */
  const clickCancel = () => {
    var _dom$getCancelButton;
    return (_dom$getCancelButton = getCancelButton()) === null || _dom$getCancelButton === void 0 ? void 0 : _dom$getCancelButton.click();
  };

  /** @type {Record<DismissReason, DismissReason>} */
  const DismissReason = Object.freeze({
    cancel: 'cancel',
    backdrop: 'backdrop',
    close: 'close',
    esc: 'esc',
    timer: 'timer'
  });

  /**
   * @param {GlobalState} globalState
   */
  const removeKeydownHandler = globalState => {
    if (globalState.keydownTarget && globalState.keydownHandlerAdded) {
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }
  };

  /**
   * @param {GlobalState} globalState
   * @param {SweetAlertOptions} innerParams
   * @param {(dismiss: DismissReason) => void} dismissWith
   */
  const addKeydownHandler = (globalState, innerParams, dismissWith) => {
    removeKeydownHandler(globalState);
    if (!innerParams.toast) {
      globalState.keydownHandler = e => keydownHandler(innerParams, e, dismissWith);
      globalState.keydownTarget = innerParams.keydownListenerCapture ? window : getPopup();
      globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
      globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = true;
    }
  };

  /**
   * @param {number} index
   * @param {number} increment
   */
  const setFocus = (index, increment) => {
    var _dom$getPopup;
    const focusableElements = getFocusableElements();
    // search for visible elements and select the next possible match
    if (focusableElements.length) {
      index = index + increment;

      // shift + tab when .swal2-popup is focused
      if (index === -2) {
        index = focusableElements.length - 1;
      }

      // rollover to first item
      if (index === focusableElements.length) {
        index = 0;

        // go to last item
      } else if (index === -1) {
        index = focusableElements.length - 1;
      }
      focusableElements[index].focus();
      return;
    }
    // no visible focusable elements, focus the popup
    (_dom$getPopup = getPopup()) === null || _dom$getPopup === void 0 || _dom$getPopup.focus();
  };
  const arrowKeysNextButton = ['ArrowRight', 'ArrowDown'];
  const arrowKeysPreviousButton = ['ArrowLeft', 'ArrowUp'];

  /**
   * @param {SweetAlertOptions} innerParams
   * @param {KeyboardEvent} event
   * @param {(dismiss: DismissReason) => void} dismissWith
   */
  const keydownHandler = (innerParams, event, dismissWith) => {
    if (!innerParams) {
      return; // This instance has already been destroyed
    }

    // Ignore keydown during IME composition
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event#ignoring_keydown_during_ime_composition
    // https://github.com/sweetalert2/sweetalert2/issues/720
    // https://github.com/sweetalert2/sweetalert2/issues/2406
    if (event.isComposing || event.keyCode === 229) {
      return;
    }
    if (innerParams.stopKeydownPropagation) {
      event.stopPropagation();
    }

    // ENTER
    if (event.key === 'Enter') {
      handleEnter(event, innerParams);
    }

    // TAB
    else if (event.key === 'Tab') {
      handleTab(event);
    }

    // ARROWS - switch focus between buttons
    else if ([...arrowKeysNextButton, ...arrowKeysPreviousButton].includes(event.key)) {
      handleArrows(event.key);
    }

    // ESC
    else if (event.key === 'Escape') {
      handleEsc(event, innerParams, dismissWith);
    }
  };

  /**
   * @param {KeyboardEvent} event
   * @param {SweetAlertOptions} innerParams
   */
  const handleEnter = (event, innerParams) => {
    // https://github.com/sweetalert2/sweetalert2/issues/2386
    if (!callIfFunction(innerParams.allowEnterKey)) {
      return;
    }
    const input = getInput$1(getPopup(), innerParams.input);
    if (event.target && input && event.target instanceof HTMLElement && event.target.outerHTML === input.outerHTML) {
      if (['textarea', 'file'].includes(innerParams.input)) {
        return; // do not submit
      }
      clickConfirm();
      event.preventDefault();
    }
  };

  /**
   * @param {KeyboardEvent} event
   */
  const handleTab = event => {
    const targetElement = event.target;
    const focusableElements = getFocusableElements();
    let btnIndex = -1;
    for (let i = 0; i < focusableElements.length; i++) {
      if (targetElement === focusableElements[i]) {
        btnIndex = i;
        break;
      }
    }

    // Cycle to the next button
    if (!event.shiftKey) {
      setFocus(btnIndex, 1);
    }

    // Cycle to the prev button
    else {
      setFocus(btnIndex, -1);
    }
    event.stopPropagation();
    event.preventDefault();
  };

  /**
   * @param {string} key
   */
  const handleArrows = key => {
    const actions = getActions();
    const confirmButton = getConfirmButton();
    const denyButton = getDenyButton();
    const cancelButton = getCancelButton();
    if (!actions || !confirmButton || !denyButton || !cancelButton) {
      return;
    }
    /** @type HTMLElement[] */
    const buttons = [confirmButton, denyButton, cancelButton];
    if (document.activeElement instanceof HTMLElement && !buttons.includes(document.activeElement)) {
      return;
    }
    const sibling = arrowKeysNextButton.includes(key) ? 'nextElementSibling' : 'previousElementSibling';
    let buttonToFocus = document.activeElement;
    if (!buttonToFocus) {
      return;
    }
    for (let i = 0; i < actions.children.length; i++) {
      buttonToFocus = buttonToFocus[sibling];
      if (!buttonToFocus) {
        return;
      }
      if (buttonToFocus instanceof HTMLButtonElement && isVisible$1(buttonToFocus)) {
        break;
      }
    }
    if (buttonToFocus instanceof HTMLButtonElement) {
      buttonToFocus.focus();
    }
  };

  /**
   * @param {KeyboardEvent} event
   * @param {SweetAlertOptions} innerParams
   * @param {(dismiss: DismissReason) => void} dismissWith
   */
  const handleEsc = (event, innerParams, dismissWith) => {
    event.preventDefault();
    if (callIfFunction(innerParams.allowEscapeKey)) {
      dismissWith(DismissReason.esc);
    }
  };

  /**
   * This module contains `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */

  var privateMethods = {
    swalPromiseResolve: new WeakMap(),
    swalPromiseReject: new WeakMap()
  };

  // From https://developer.paciellogroup.com/blog/2018/06/the-current-state-of-modal-dialog-accessibility/
  // Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
  // elements not within the active modal dialog will not be surfaced if a user opens a screen
  // reader’s list of elements (headings, form controls, landmarks, etc.) in the document.

  const setAriaHidden = () => {
    const container = getContainer();
    const bodyChildren = Array.from(document.body.children);
    bodyChildren.forEach(el => {
      if (el.contains(container)) {
        return;
      }
      if (el.hasAttribute('aria-hidden')) {
        el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden') || '');
      }
      el.setAttribute('aria-hidden', 'true');
    });
  };
  const unsetAriaHidden = () => {
    const bodyChildren = Array.from(document.body.children);
    bodyChildren.forEach(el => {
      if (el.hasAttribute('data-previous-aria-hidden')) {
        el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden') || '');
        el.removeAttribute('data-previous-aria-hidden');
      } else {
        el.removeAttribute('aria-hidden');
      }
    });
  };

  // @ts-ignore
  const isSafariOrIOS = typeof window !== 'undefined' && !!window.GestureEvent; // true for Safari desktop + all iOS browsers https://stackoverflow.com/a/70585394

  /**
   * Fix iOS scrolling
   * http://stackoverflow.com/q/39626302
   */
  const iOSfix = () => {
    if (isSafariOrIOS && !hasClass(document.body, swalClasses.iosfix)) {
      const offset = document.body.scrollTop;
      document.body.style.top = `${offset * -1}px`;
      addClass(document.body, swalClasses.iosfix);
      lockBodyScroll();
    }
  };

  /**
   * https://github.com/sweetalert2/sweetalert2/issues/1246
   */
  const lockBodyScroll = () => {
    const container = getContainer();
    if (!container) {
      return;
    }
    /** @type {boolean} */
    let preventTouchMove;
    /**
     * @param {TouchEvent} event
     */
    container.ontouchstart = event => {
      preventTouchMove = shouldPreventTouchMove(event);
    };
    /**
     * @param {TouchEvent} event
     */
    container.ontouchmove = event => {
      if (preventTouchMove) {
        event.preventDefault();
        event.stopPropagation();
      }
    };
  };

  /**
   * @param {TouchEvent} event
   * @returns {boolean}
   */
  const shouldPreventTouchMove = event => {
    const target = event.target;
    const container = getContainer();
    const htmlContainer = getHtmlContainer();
    if (!container || !htmlContainer) {
      return false;
    }
    if (isStylus(event) || isZoom(event)) {
      return false;
    }
    if (target === container) {
      return true;
    }
    if (!isScrollable(container) && target instanceof HTMLElement && !selfOrParentIsScrollable(target, htmlContainer) &&
    // #2823
    target.tagName !== 'INPUT' &&
    // #1603
    target.tagName !== 'TEXTAREA' &&
    // #2266
    !(isScrollable(htmlContainer) &&
    // #1944
    htmlContainer.contains(target))) {
      return true;
    }
    return false;
  };

  /**
   * https://github.com/sweetalert2/sweetalert2/issues/1786
   *
   * @param {object} event
   * @returns {boolean}
   */
  const isStylus = event => {
    return event.touches && event.touches.length && event.touches[0].touchType === 'stylus';
  };

  /**
   * https://github.com/sweetalert2/sweetalert2/issues/1891
   *
   * @param {TouchEvent} event
   * @returns {boolean}
   */
  const isZoom = event => {
    return event.touches && event.touches.length > 1;
  };
  const undoIOSfix = () => {
    if (hasClass(document.body, swalClasses.iosfix)) {
      const offset = parseInt(document.body.style.top, 10);
      removeClass(document.body, swalClasses.iosfix);
      document.body.style.top = '';
      document.body.scrollTop = offset * -1;
    }
  };

  /**
   * Measure scrollbar width for padding body during modal show/hide
   * https://github.com/twbs/bootstrap/blob/master/js/src/modal.js
   *
   * @returns {number}
   */
  const measureScrollbar = () => {
    const scrollDiv = document.createElement('div');
    scrollDiv.className = swalClasses['scrollbar-measure'];
    document.body.appendChild(scrollDiv);
    const scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  };

  /**
   * Remember state in cases where opening and handling a modal will fiddle with it.
   * @type {number | null}
   */
  let previousBodyPadding = null;

  /**
   * @param {string} initialBodyOverflow
   */
  const replaceScrollbarWithPadding = initialBodyOverflow => {
    // for queues, do not do this more than once
    if (previousBodyPadding !== null) {
      return;
    }
    // if the body has overflow
    if (document.body.scrollHeight > window.innerHeight || initialBodyOverflow === 'scroll' // https://github.com/sweetalert2/sweetalert2/issues/2663
    ) {
      // add padding so the content doesn't shift after removal of scrollbar
      previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
      document.body.style.paddingRight = `${previousBodyPadding + measureScrollbar()}px`;
    }
  };
  const undoReplaceScrollbarWithPadding = () => {
    if (previousBodyPadding !== null) {
      document.body.style.paddingRight = `${previousBodyPadding}px`;
      previousBodyPadding = null;
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {HTMLElement} container
   * @param {boolean} returnFocus
   * @param {() => void} didClose
   */
  function removePopupAndResetState(instance, container, returnFocus, didClose) {
    if (isToast()) {
      triggerDidCloseAndDispose(instance, didClose);
    } else {
      restoreActiveElement(returnFocus).then(() => triggerDidCloseAndDispose(instance, didClose));
      removeKeydownHandler(globalState);
    }

    // workaround for https://github.com/sweetalert2/sweetalert2/issues/2088
    // for some reason removing the container in Safari will scroll the document to bottom
    if (isSafariOrIOS) {
      container.setAttribute('style', 'display:none !important');
      container.removeAttribute('class');
      container.innerHTML = '';
    } else {
      container.remove();
    }
    if (isModal()) {
      undoReplaceScrollbarWithPadding();
      undoIOSfix();
      unsetAriaHidden();
    }
    removeBodyClasses();
  }

  /**
   * Remove SweetAlert2 classes from body
   */
  function removeBodyClasses() {
    removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['height-auto'], swalClasses['no-backdrop'], swalClasses['toast-shown']]);
  }

  /**
   * Instance method to close sweetAlert
   *
   * @param {SweetAlertResult | undefined} resolveValue
   */
  function close(resolveValue) {
    resolveValue = prepareResolveValue(resolveValue);
    const swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
    const didClose = triggerClosePopup(this);
    if (this.isAwaitingPromise) {
      // A swal awaiting for a promise (after a click on Confirm or Deny) cannot be dismissed anymore #2335
      if (!resolveValue.isDismissed) {
        handleAwaitingPromise(this);
        swalPromiseResolve(resolveValue);
      }
    } else if (didClose) {
      // Resolve Swal promise
      swalPromiseResolve(resolveValue);
    }
  }
  const triggerClosePopup = instance => {
    const popup = getPopup();
    if (!popup) {
      return false;
    }
    const innerParams = privateProps.innerParams.get(instance);
    if (!innerParams || hasClass(popup, innerParams.hideClass.popup)) {
      return false;
    }
    removeClass(popup, innerParams.showClass.popup);
    addClass(popup, innerParams.hideClass.popup);
    const backdrop = getContainer();
    removeClass(backdrop, innerParams.showClass.backdrop);
    addClass(backdrop, innerParams.hideClass.backdrop);
    handlePopupAnimation(instance, popup, innerParams);
    return true;
  };

  /**
   * @param {Error | string} error
   */
  function rejectPromise(error) {
    const rejectPromise = privateMethods.swalPromiseReject.get(this);
    handleAwaitingPromise(this);
    if (rejectPromise) {
      // Reject Swal promise
      rejectPromise(error);
    }
  }

  /**
   * @param {SweetAlert} instance
   */
  const handleAwaitingPromise = instance => {
    if (instance.isAwaitingPromise) {
      delete instance.isAwaitingPromise;
      // The instance might have been previously partly destroyed, we must resume the destroy process in this case #2335
      if (!privateProps.innerParams.get(instance)) {
        instance._destroy();
      }
    }
  };

  /**
   * @param {SweetAlertResult | undefined} resolveValue
   * @returns {SweetAlertResult}
   */
  const prepareResolveValue = resolveValue => {
    // When user calls Swal.close()
    if (typeof resolveValue === 'undefined') {
      return {
        isConfirmed: false,
        isDenied: false,
        isDismissed: true
      };
    }
    return Object.assign({
      isConfirmed: false,
      isDenied: false,
      isDismissed: false
    }, resolveValue);
  };

  /**
   * @param {SweetAlert} instance
   * @param {HTMLElement} popup
   * @param {SweetAlertOptions} innerParams
   */
  const handlePopupAnimation = (instance, popup, innerParams) => {
    var _globalState$eventEmi;
    const container = getContainer();
    // If animation is supported, animate
    const animationIsSupported = hasCssAnimation(popup);
    if (typeof innerParams.willClose === 'function') {
      innerParams.willClose(popup);
    }
    (_globalState$eventEmi = globalState.eventEmitter) === null || _globalState$eventEmi === void 0 || _globalState$eventEmi.emit('willClose', popup);
    if (animationIsSupported) {
      animatePopup(instance, popup, container, innerParams.returnFocus, innerParams.didClose);
    } else {
      // Otherwise, remove immediately
      removePopupAndResetState(instance, container, innerParams.returnFocus, innerParams.didClose);
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {HTMLElement} popup
   * @param {HTMLElement} container
   * @param {boolean} returnFocus
   * @param {() => void} didClose
   */
  const animatePopup = (instance, popup, container, returnFocus, didClose) => {
    globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, returnFocus, didClose);
    /**
     * @param {AnimationEvent | TransitionEvent} e
     */
    const swalCloseAnimationFinished = function (e) {
      if (e.target === popup) {
        var _globalState$swalClos;
        (_globalState$swalClos = globalState.swalCloseEventFinishedCallback) === null || _globalState$swalClos === void 0 || _globalState$swalClos.call(globalState);
        delete globalState.swalCloseEventFinishedCallback;
        popup.removeEventListener('animationend', swalCloseAnimationFinished);
        popup.removeEventListener('transitionend', swalCloseAnimationFinished);
      }
    };
    popup.addEventListener('animationend', swalCloseAnimationFinished);
    popup.addEventListener('transitionend', swalCloseAnimationFinished);
  };

  /**
   * @param {SweetAlert} instance
   * @param {() => void} didClose
   */
  const triggerDidCloseAndDispose = (instance, didClose) => {
    setTimeout(() => {
      var _globalState$eventEmi2;
      if (typeof didClose === 'function') {
        didClose.bind(instance.params)();
      }
      (_globalState$eventEmi2 = globalState.eventEmitter) === null || _globalState$eventEmi2 === void 0 || _globalState$eventEmi2.emit('didClose');
      // instance might have been destroyed already
      if (instance._destroy) {
        instance._destroy();
      }
    });
  };

  /**
   * Shows loader (spinner), this is useful with AJAX requests.
   * By default the loader be shown instead of the "Confirm" button.
   *
   * @param {HTMLButtonElement | null} [buttonToReplace]
   */
  const showLoading = buttonToReplace => {
    let popup = getPopup();
    if (!popup) {
      new Swal();
    }
    popup = getPopup();
    if (!popup) {
      return;
    }
    const loader = getLoader();
    if (isToast()) {
      hide(getIcon());
    } else {
      replaceButton(popup, buttonToReplace);
    }
    show(loader);
    popup.setAttribute('data-loading', 'true');
    popup.setAttribute('aria-busy', 'true');
    popup.focus();
  };

  /**
   * @param {HTMLElement} popup
   * @param {HTMLButtonElement | null} [buttonToReplace]
   */
  const replaceButton = (popup, buttonToReplace) => {
    const actions = getActions();
    const loader = getLoader();
    if (!actions || !loader) {
      return;
    }
    if (!buttonToReplace && isVisible$1(getConfirmButton())) {
      buttonToReplace = getConfirmButton();
    }
    show(actions);
    if (buttonToReplace) {
      hide(buttonToReplace);
      loader.setAttribute('data-button-to-replace', buttonToReplace.className);
      actions.insertBefore(loader, buttonToReplace);
    }
    addClass([popup, actions], swalClasses.loading);
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const handleInputOptionsAndValue = (instance, params) => {
    if (params.input === 'select' || params.input === 'radio') {
      handleInputOptions(instance, params);
    } else if (['text', 'email', 'number', 'tel', 'textarea'].some(i => i === params.input) && (hasToPromiseFn(params.inputValue) || isPromise(params.inputValue))) {
      showLoading(getConfirmButton());
      handleInputValue(instance, params);
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} innerParams
   * @returns {SweetAlertInputValue}
   */
  const getInputValue = (instance, innerParams) => {
    const input = instance.getInput();
    if (!input) {
      return null;
    }
    switch (innerParams.input) {
      case 'checkbox':
        return getCheckboxValue(input);
      case 'radio':
        return getRadioValue(input);
      case 'file':
        return getFileValue(input);
      default:
        return innerParams.inputAutoTrim ? input.value.trim() : input.value;
    }
  };

  /**
   * @param {HTMLInputElement} input
   * @returns {number}
   */
  const getCheckboxValue = input => input.checked ? 1 : 0;

  /**
   * @param {HTMLInputElement} input
   * @returns {string | null}
   */
  const getRadioValue = input => input.checked ? input.value : null;

  /**
   * @param {HTMLInputElement} input
   * @returns {FileList | File | null}
   */
  const getFileValue = input => input.files && input.files.length ? input.getAttribute('multiple') !== null ? input.files : input.files[0] : null;

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const handleInputOptions = (instance, params) => {
    const popup = getPopup();
    if (!popup) {
      return;
    }
    /**
     * @param {*} inputOptions
     */
    const processInputOptions = inputOptions => {
      if (params.input === 'select') {
        populateSelectOptions(popup, formatInputOptions(inputOptions), params);
      } else if (params.input === 'radio') {
        populateRadioOptions(popup, formatInputOptions(inputOptions), params);
      }
    };
    if (hasToPromiseFn(params.inputOptions) || isPromise(params.inputOptions)) {
      showLoading(getConfirmButton());
      asPromise(params.inputOptions).then(inputOptions => {
        instance.hideLoading();
        processInputOptions(inputOptions);
      });
    } else if (typeof params.inputOptions === 'object') {
      processInputOptions(params.inputOptions);
    } else {
      error(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof params.inputOptions}`);
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const handleInputValue = (instance, params) => {
    const input = instance.getInput();
    if (!input) {
      return;
    }
    hide(input);
    asPromise(params.inputValue).then(inputValue => {
      input.value = params.input === 'number' ? `${parseFloat(inputValue) || 0}` : `${inputValue}`;
      show(input);
      input.focus();
      instance.hideLoading();
    }).catch(err => {
      error(`Error in inputValue promise: ${err}`);
      input.value = '';
      show(input);
      input.focus();
      instance.hideLoading();
    });
  };

  /**
   * @param {HTMLElement} popup
   * @param {InputOptionFlattened[]} inputOptions
   * @param {SweetAlertOptions} params
   */
  function populateSelectOptions(popup, inputOptions, params) {
    const select = getDirectChildByClass(popup, swalClasses.select);
    if (!select) {
      return;
    }
    /**
     * @param {HTMLElement} parent
     * @param {string} optionLabel
     * @param {string} optionValue
     */
    const renderOption = (parent, optionLabel, optionValue) => {
      const option = document.createElement('option');
      option.value = optionValue;
      setInnerHtml(option, optionLabel);
      option.selected = isSelected(optionValue, params.inputValue);
      parent.appendChild(option);
    };
    inputOptions.forEach(inputOption => {
      const optionValue = inputOption[0];
      const optionLabel = inputOption[1];
      // <optgroup> spec:
      // https://www.w3.org/TR/html401/interact/forms.html#h-17.6
      // "...all OPTGROUP elements must be specified directly within a SELECT element (i.e., groups may not be nested)..."
      // check whether this is a <optgroup>
      if (Array.isArray(optionLabel)) {
        // if it is an array, then it is an <optgroup>
        const optgroup = document.createElement('optgroup');
        optgroup.label = optionValue;
        optgroup.disabled = false; // not configurable for now
        select.appendChild(optgroup);
        optionLabel.forEach(o => renderOption(optgroup, o[1], o[0]));
      } else {
        // case of <option>
        renderOption(select, optionLabel, optionValue);
      }
    });
    select.focus();
  }

  /**
   * @param {HTMLElement} popup
   * @param {InputOptionFlattened[]} inputOptions
   * @param {SweetAlertOptions} params
   */
  function populateRadioOptions(popup, inputOptions, params) {
    const radio = getDirectChildByClass(popup, swalClasses.radio);
    if (!radio) {
      return;
    }
    inputOptions.forEach(inputOption => {
      const radioValue = inputOption[0];
      const radioLabel = inputOption[1];
      const radioInput = document.createElement('input');
      const radioLabelElement = document.createElement('label');
      radioInput.type = 'radio';
      radioInput.name = swalClasses.radio;
      radioInput.value = radioValue;
      if (isSelected(radioValue, params.inputValue)) {
        radioInput.checked = true;
      }
      const label = document.createElement('span');
      setInnerHtml(label, radioLabel);
      label.className = swalClasses.label;
      radioLabelElement.appendChild(radioInput);
      radioLabelElement.appendChild(label);
      radio.appendChild(radioLabelElement);
    });
    const radios = radio.querySelectorAll('input');
    if (radios.length) {
      radios[0].focus();
    }
  }

  /**
   * Converts `inputOptions` into an array of `[value, label]`s
   *
   * @param {*} inputOptions
   * @typedef {string[]} InputOptionFlattened
   * @returns {InputOptionFlattened[]}
   */
  const formatInputOptions = inputOptions => {
    /** @type {InputOptionFlattened[]} */
    const result = [];
    if (inputOptions instanceof Map) {
      inputOptions.forEach((value, key) => {
        let valueFormatted = value;
        if (typeof valueFormatted === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }
        result.push([key, valueFormatted]);
      });
    } else {
      Object.keys(inputOptions).forEach(key => {
        let valueFormatted = inputOptions[key];
        if (typeof valueFormatted === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }
        result.push([key, valueFormatted]);
      });
    }
    return result;
  };

  /**
   * @param {string} optionValue
   * @param {SweetAlertInputValue} inputValue
   * @returns {boolean}
   */
  const isSelected = (optionValue, inputValue) => {
    return !!inputValue && inputValue.toString() === optionValue.toString();
  };

  /**
   * @param {SweetAlert} instance
   */
  const handleConfirmButtonClick = instance => {
    const innerParams = privateProps.innerParams.get(instance);
    instance.disableButtons();
    if (innerParams.input) {
      handleConfirmOrDenyWithInput(instance, 'confirm');
    } else {
      confirm(instance, true);
    }
  };

  /**
   * @param {SweetAlert} instance
   */
  const handleDenyButtonClick = instance => {
    const innerParams = privateProps.innerParams.get(instance);
    instance.disableButtons();
    if (innerParams.returnInputValueOnDeny) {
      handleConfirmOrDenyWithInput(instance, 'deny');
    } else {
      deny(instance, false);
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {(dismiss: DismissReason) => void} dismissWith
   */
  const handleCancelButtonClick = (instance, dismissWith) => {
    instance.disableButtons();
    dismissWith(DismissReason.cancel);
  };

  /**
   * @param {SweetAlert} instance
   * @param {'confirm' | 'deny'} type
   */
  const handleConfirmOrDenyWithInput = (instance, type) => {
    const innerParams = privateProps.innerParams.get(instance);
    if (!innerParams.input) {
      error(`The "input" parameter is needed to be set when using returnInputValueOn${capitalizeFirstLetter(type)}`);
      return;
    }
    const input = instance.getInput();
    const inputValue = getInputValue(instance, innerParams);
    if (innerParams.inputValidator) {
      handleInputValidator(instance, inputValue, type);
    } else if (input && !input.checkValidity()) {
      instance.enableButtons();
      instance.showValidationMessage(innerParams.validationMessage || input.validationMessage);
    } else if (type === 'deny') {
      deny(instance, inputValue);
    } else {
      confirm(instance, inputValue);
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertInputValue} inputValue
   * @param {'confirm' | 'deny'} type
   */
  const handleInputValidator = (instance, inputValue, type) => {
    const innerParams = privateProps.innerParams.get(instance);
    instance.disableInput();
    const validationPromise = Promise.resolve().then(() => asPromise(innerParams.inputValidator(inputValue, innerParams.validationMessage)));
    validationPromise.then(validationMessage => {
      instance.enableButtons();
      instance.enableInput();
      if (validationMessage) {
        instance.showValidationMessage(validationMessage);
      } else if (type === 'deny') {
        deny(instance, inputValue);
      } else {
        confirm(instance, inputValue);
      }
    });
  };

  /**
   * @param {SweetAlert} instance
   * @param {*} value
   */
  const deny = (instance, value) => {
    const innerParams = privateProps.innerParams.get(instance || undefined);
    if (innerParams.showLoaderOnDeny) {
      showLoading(getDenyButton());
    }
    if (innerParams.preDeny) {
      instance.isAwaitingPromise = true; // Flagging the instance as awaiting a promise so it's own promise's reject/resolve methods doesn't get destroyed until the result from this preDeny's promise is received
      const preDenyPromise = Promise.resolve().then(() => asPromise(innerParams.preDeny(value, innerParams.validationMessage)));
      preDenyPromise.then(preDenyValue => {
        if (preDenyValue === false) {
          instance.hideLoading();
          handleAwaitingPromise(instance);
        } else {
          instance.close(/** @type SweetAlertResult */{
            isDenied: true,
            value: typeof preDenyValue === 'undefined' ? value : preDenyValue
          });
        }
      }).catch(error => rejectWith(instance || undefined, error));
    } else {
      instance.close(/** @type SweetAlertResult */{
        isDenied: true,
        value
      });
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {*} value
   */
  const succeedWith = (instance, value) => {
    instance.close(/** @type SweetAlertResult */{
      isConfirmed: true,
      value
    });
  };

  /**
   *
   * @param {SweetAlert} instance
   * @param {string} error
   */
  const rejectWith = (instance, error) => {
    instance.rejectPromise(error);
  };

  /**
   *
   * @param {SweetAlert} instance
   * @param {*} value
   */
  const confirm = (instance, value) => {
    const innerParams = privateProps.innerParams.get(instance || undefined);
    if (innerParams.showLoaderOnConfirm) {
      showLoading();
    }
    if (innerParams.preConfirm) {
      instance.resetValidationMessage();
      instance.isAwaitingPromise = true; // Flagging the instance as awaiting a promise so it's own promise's reject/resolve methods doesn't get destroyed until the result from this preConfirm's promise is received
      const preConfirmPromise = Promise.resolve().then(() => asPromise(innerParams.preConfirm(value, innerParams.validationMessage)));
      preConfirmPromise.then(preConfirmValue => {
        if (isVisible$1(getValidationMessage()) || preConfirmValue === false) {
          instance.hideLoading();
          handleAwaitingPromise(instance);
        } else {
          succeedWith(instance, typeof preConfirmValue === 'undefined' ? value : preConfirmValue);
        }
      }).catch(error => rejectWith(instance || undefined, error));
    } else {
      succeedWith(instance, value);
    }
  };

  /**
   * Hides loader and shows back the button which was hidden by .showLoading()
   */
  function hideLoading() {
    // do nothing if popup is closed
    const innerParams = privateProps.innerParams.get(this);
    if (!innerParams) {
      return;
    }
    const domCache = privateProps.domCache.get(this);
    hide(domCache.loader);
    if (isToast()) {
      if (innerParams.icon) {
        show(getIcon());
      }
    } else {
      showRelatedButton(domCache);
    }
    removeClass([domCache.popup, domCache.actions], swalClasses.loading);
    domCache.popup.removeAttribute('aria-busy');
    domCache.popup.removeAttribute('data-loading');
    domCache.confirmButton.disabled = false;
    domCache.denyButton.disabled = false;
    domCache.cancelButton.disabled = false;
  }
  const showRelatedButton = domCache => {
    const buttonToReplace = domCache.popup.getElementsByClassName(domCache.loader.getAttribute('data-button-to-replace'));
    if (buttonToReplace.length) {
      show(buttonToReplace[0], 'inline-block');
    } else if (allButtonsAreHidden()) {
      hide(domCache.actions);
    }
  };

  /**
   * Gets the input DOM node, this method works with input parameter.
   *
   * @returns {HTMLInputElement | null}
   */
  function getInput() {
    const innerParams = privateProps.innerParams.get(this);
    const domCache = privateProps.domCache.get(this);
    if (!domCache) {
      return null;
    }
    return getInput$1(domCache.popup, innerParams.input);
  }

  /**
   * @param {SweetAlert} instance
   * @param {string[]} buttons
   * @param {boolean} disabled
   */
  function setButtonsDisabled(instance, buttons, disabled) {
    const domCache = privateProps.domCache.get(instance);
    buttons.forEach(button => {
      domCache[button].disabled = disabled;
    });
  }

  /**
   * @param {HTMLInputElement | null} input
   * @param {boolean} disabled
   */
  function setInputDisabled(input, disabled) {
    const popup = getPopup();
    if (!popup || !input) {
      return;
    }
    if (input.type === 'radio') {
      /** @type {NodeListOf<HTMLInputElement>} */
      const radios = popup.querySelectorAll(`[name="${swalClasses.radio}"]`);
      for (let i = 0; i < radios.length; i++) {
        radios[i].disabled = disabled;
      }
    } else {
      input.disabled = disabled;
    }
  }

  /**
   * Enable all the buttons
   * @this {SweetAlert}
   */
  function enableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], false);
  }

  /**
   * Disable all the buttons
   * @this {SweetAlert}
   */
  function disableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], true);
  }

  /**
   * Enable the input field
   * @this {SweetAlert}
   */
  function enableInput() {
    setInputDisabled(this.getInput(), false);
  }

  /**
   * Disable the input field
   * @this {SweetAlert}
   */
  function disableInput() {
    setInputDisabled(this.getInput(), true);
  }

  /**
   * Show block with validation message
   *
   * @param {string} error
   * @this {SweetAlert}
   */
  function showValidationMessage(error) {
    const domCache = privateProps.domCache.get(this);
    const params = privateProps.innerParams.get(this);
    setInnerHtml(domCache.validationMessage, error);
    domCache.validationMessage.className = swalClasses['validation-message'];
    if (params.customClass && params.customClass.validationMessage) {
      addClass(domCache.validationMessage, params.customClass.validationMessage);
    }
    show(domCache.validationMessage);
    const input = this.getInput();
    if (input) {
      input.setAttribute('aria-invalid', 'true');
      input.setAttribute('aria-describedby', swalClasses['validation-message']);
      focusInput(input);
      addClass(input, swalClasses.inputerror);
    }
  }

  /**
   * Hide block with validation message
   *
   * @this {SweetAlert}
   */
  function resetValidationMessage() {
    const domCache = privateProps.domCache.get(this);
    if (domCache.validationMessage) {
      hide(domCache.validationMessage);
    }
    const input = this.getInput();
    if (input) {
      input.removeAttribute('aria-invalid');
      input.removeAttribute('aria-describedby');
      removeClass(input, swalClasses.inputerror);
    }
  }

  const defaultParams = {
    title: '',
    titleText: '',
    text: '',
    html: '',
    footer: '',
    icon: undefined,
    iconColor: undefined,
    iconHtml: undefined,
    template: undefined,
    toast: false,
    draggable: false,
    animation: true,
    theme: 'light',
    showClass: {
      popup: 'swal2-show',
      backdrop: 'swal2-backdrop-show',
      icon: 'swal2-icon-show'
    },
    hideClass: {
      popup: 'swal2-hide',
      backdrop: 'swal2-backdrop-hide',
      icon: 'swal2-icon-hide'
    },
    customClass: {},
    target: 'body',
    color: undefined,
    backdrop: true,
    heightAuto: true,
    allowOutsideClick: true,
    allowEscapeKey: true,
    allowEnterKey: true,
    stopKeydownPropagation: true,
    keydownListenerCapture: false,
    showConfirmButton: true,
    showDenyButton: false,
    showCancelButton: false,
    preConfirm: undefined,
    preDeny: undefined,
    confirmButtonText: 'OK',
    confirmButtonAriaLabel: '',
    confirmButtonColor: undefined,
    denyButtonText: 'No',
    denyButtonAriaLabel: '',
    denyButtonColor: undefined,
    cancelButtonText: 'Cancel',
    cancelButtonAriaLabel: '',
    cancelButtonColor: undefined,
    buttonsStyling: true,
    reverseButtons: false,
    focusConfirm: true,
    focusDeny: false,
    focusCancel: false,
    returnFocus: true,
    showCloseButton: false,
    closeButtonHtml: '&times;',
    closeButtonAriaLabel: 'Close this dialog',
    loaderHtml: '',
    showLoaderOnConfirm: false,
    showLoaderOnDeny: false,
    imageUrl: undefined,
    imageWidth: undefined,
    imageHeight: undefined,
    imageAlt: '',
    timer: undefined,
    timerProgressBar: false,
    width: undefined,
    padding: undefined,
    background: undefined,
    input: undefined,
    inputPlaceholder: '',
    inputLabel: '',
    inputValue: '',
    inputOptions: {},
    inputAutoFocus: true,
    inputAutoTrim: true,
    inputAttributes: {},
    inputValidator: undefined,
    returnInputValueOnDeny: false,
    validationMessage: undefined,
    grow: false,
    position: 'center',
    progressSteps: [],
    currentProgressStep: undefined,
    progressStepsDistance: undefined,
    willOpen: undefined,
    didOpen: undefined,
    didRender: undefined,
    willClose: undefined,
    didClose: undefined,
    didDestroy: undefined,
    scrollbarPadding: true,
    topLayer: false
  };
  const updatableParams = ['allowEscapeKey', 'allowOutsideClick', 'background', 'buttonsStyling', 'cancelButtonAriaLabel', 'cancelButtonColor', 'cancelButtonText', 'closeButtonAriaLabel', 'closeButtonHtml', 'color', 'confirmButtonAriaLabel', 'confirmButtonColor', 'confirmButtonText', 'currentProgressStep', 'customClass', 'denyButtonAriaLabel', 'denyButtonColor', 'denyButtonText', 'didClose', 'didDestroy', 'draggable', 'footer', 'hideClass', 'html', 'icon', 'iconColor', 'iconHtml', 'imageAlt', 'imageHeight', 'imageUrl', 'imageWidth', 'preConfirm', 'preDeny', 'progressSteps', 'returnFocus', 'reverseButtons', 'showCancelButton', 'showCloseButton', 'showConfirmButton', 'showDenyButton', 'text', 'title', 'titleText', 'theme', 'willClose'];

  /** @type {Record<string, string | undefined>} */
  const deprecatedParams = {
    allowEnterKey: undefined
  };
  const toastIncompatibleParams = ['allowOutsideClick', 'allowEnterKey', 'backdrop', 'draggable', 'focusConfirm', 'focusDeny', 'focusCancel', 'returnFocus', 'heightAuto', 'keydownListenerCapture'];

  /**
   * Is valid parameter
   *
   * @param {string} paramName
   * @returns {boolean}
   */
  const isValidParameter = paramName => {
    return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
  };

  /**
   * Is valid parameter for Swal.update() method
   *
   * @param {string} paramName
   * @returns {boolean}
   */
  const isUpdatableParameter = paramName => {
    return updatableParams.indexOf(paramName) !== -1;
  };

  /**
   * Is deprecated parameter
   *
   * @param {string} paramName
   * @returns {string | undefined}
   */
  const isDeprecatedParameter = paramName => {
    return deprecatedParams[paramName];
  };

  /**
   * @param {string} param
   */
  const checkIfParamIsValid = param => {
    if (!isValidParameter(param)) {
      warn(`Unknown parameter "${param}"`);
    }
  };

  /**
   * @param {string} param
   */
  const checkIfToastParamIsValid = param => {
    if (toastIncompatibleParams.includes(param)) {
      warn(`The parameter "${param}" is incompatible with toasts`);
    }
  };

  /**
   * @param {string} param
   */
  const checkIfParamIsDeprecated = param => {
    const isDeprecated = isDeprecatedParameter(param);
    if (isDeprecated) {
      warnAboutDeprecation(param, isDeprecated);
    }
  };

  /**
   * Show relevant warnings for given params
   *
   * @param {SweetAlertOptions} params
   */
  const showWarningsForParams = params => {
    if (params.backdrop === false && params.allowOutsideClick) {
      warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
    }
    if (params.theme && !['light', 'dark', 'auto', 'minimal', 'borderless', 'bootstrap-4', 'bootstrap-4-light', 'bootstrap-4-dark', 'bootstrap-5', 'bootstrap-5-light', 'bootstrap-5-dark', 'material-ui', 'material-ui-light', 'material-ui-dark', 'embed-iframe', 'bulma', 'bulma-light', 'bulma-dark'].includes(params.theme)) {
      warn(`Invalid theme "${params.theme}"`);
    }
    for (const param in params) {
      checkIfParamIsValid(param);
      if (params.toast) {
        checkIfToastParamIsValid(param);
      }
      checkIfParamIsDeprecated(param);
    }
  };

  /**
   * Updates popup parameters.
   *
   * @param {SweetAlertOptions} params
   */
  function update(params) {
    const container = getContainer();
    const popup = getPopup();
    const innerParams = privateProps.innerParams.get(this);
    if (!popup || hasClass(popup, innerParams.hideClass.popup)) {
      warn(`You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.`);
      return;
    }
    const validUpdatableParams = filterValidParams(params);
    const updatedParams = Object.assign({}, innerParams, validUpdatableParams);
    showWarningsForParams(updatedParams);
    container.dataset['swal2Theme'] = updatedParams.theme;
    render(this, updatedParams);
    privateProps.innerParams.set(this, updatedParams);
    Object.defineProperties(this, {
      params: {
        value: Object.assign({}, this.params, params),
        writable: false,
        enumerable: true
      }
    });
  }

  /**
   * @param {SweetAlertOptions} params
   * @returns {SweetAlertOptions}
   */
  const filterValidParams = params => {
    const validUpdatableParams = {};
    Object.keys(params).forEach(param => {
      if (isUpdatableParameter(param)) {
        validUpdatableParams[param] = params[param];
      } else {
        warn(`Invalid parameter to update: ${param}`);
      }
    });
    return validUpdatableParams;
  };

  /**
   * Dispose the current SweetAlert2 instance
   */
  function _destroy() {
    const domCache = privateProps.domCache.get(this);
    const innerParams = privateProps.innerParams.get(this);
    if (!innerParams) {
      disposeWeakMaps(this); // The WeakMaps might have been partly destroyed, we must recall it to dispose any remaining WeakMaps #2335
      return; // This instance has already been destroyed
    }

    // Check if there is another Swal closing
    if (domCache.popup && globalState.swalCloseEventFinishedCallback) {
      globalState.swalCloseEventFinishedCallback();
      delete globalState.swalCloseEventFinishedCallback;
    }
    if (typeof innerParams.didDestroy === 'function') {
      innerParams.didDestroy();
    }
    globalState.eventEmitter.emit('didDestroy');
    disposeSwal(this);
  }

  /**
   * @param {SweetAlert} instance
   */
  const disposeSwal = instance => {
    disposeWeakMaps(instance);
    // Unset this.params so GC will dispose it (#1569)
    delete instance.params;
    // Unset globalState props so GC will dispose globalState (#1569)
    delete globalState.keydownHandler;
    delete globalState.keydownTarget;
    // Unset currentInstance
    delete globalState.currentInstance;
  };

  /**
   * @param {SweetAlert} instance
   */
  const disposeWeakMaps = instance => {
    // If the current instance is awaiting a promise result, we keep the privateMethods to call them once the promise result is retrieved #2335
    if (instance.isAwaitingPromise) {
      unsetWeakMaps(privateProps, instance);
      instance.isAwaitingPromise = true;
    } else {
      unsetWeakMaps(privateMethods, instance);
      unsetWeakMaps(privateProps, instance);
      delete instance.isAwaitingPromise;
      // Unset instance methods
      delete instance.disableButtons;
      delete instance.enableButtons;
      delete instance.getInput;
      delete instance.disableInput;
      delete instance.enableInput;
      delete instance.hideLoading;
      delete instance.disableLoading;
      delete instance.showValidationMessage;
      delete instance.resetValidationMessage;
      delete instance.close;
      delete instance.closePopup;
      delete instance.closeModal;
      delete instance.closeToast;
      delete instance.rejectPromise;
      delete instance.update;
      delete instance._destroy;
    }
  };

  /**
   * @param {object} obj
   * @param {SweetAlert} instance
   */
  const unsetWeakMaps = (obj, instance) => {
    for (const i in obj) {
      obj[i].delete(instance);
    }
  };

  var instanceMethods = /*#__PURE__*/Object.freeze({
    __proto__: null,
    _destroy: _destroy,
    close: close,
    closeModal: close,
    closePopup: close,
    closeToast: close,
    disableButtons: disableButtons,
    disableInput: disableInput,
    disableLoading: hideLoading,
    enableButtons: enableButtons,
    enableInput: enableInput,
    getInput: getInput,
    handleAwaitingPromise: handleAwaitingPromise,
    hideLoading: hideLoading,
    rejectPromise: rejectPromise,
    resetValidationMessage: resetValidationMessage,
    showValidationMessage: showValidationMessage,
    update: update
  });

  /**
   * @param {SweetAlertOptions} innerParams
   * @param {DomCache} domCache
   * @param {(dismiss: DismissReason) => void} dismissWith
   */
  const handlePopupClick = (innerParams, domCache, dismissWith) => {
    if (innerParams.toast) {
      handleToastClick(innerParams, domCache, dismissWith);
    } else {
      // Ignore click events that had mousedown on the popup but mouseup on the container
      // This can happen when the user drags a slider
      handleModalMousedown(domCache);

      // Ignore click events that had mousedown on the container but mouseup on the popup
      handleContainerMousedown(domCache);
      handleModalClick(innerParams, domCache, dismissWith);
    }
  };

  /**
   * @param {SweetAlertOptions} innerParams
   * @param {DomCache} domCache
   * @param {(dismiss: DismissReason) => void} dismissWith
   */
  const handleToastClick = (innerParams, domCache, dismissWith) => {
    // Closing toast by internal click
    domCache.popup.onclick = () => {
      if (innerParams && (isAnyButtonShown(innerParams) || innerParams.timer || innerParams.input)) {
        return;
      }
      dismissWith(DismissReason.close);
    };
  };

  /**
   * @param {SweetAlertOptions} innerParams
   * @returns {boolean}
   */
  const isAnyButtonShown = innerParams => {
    return !!(innerParams.showConfirmButton || innerParams.showDenyButton || innerParams.showCancelButton || innerParams.showCloseButton);
  };
  let ignoreOutsideClick = false;

  /**
   * @param {DomCache} domCache
   */
  const handleModalMousedown = domCache => {
    domCache.popup.onmousedown = () => {
      domCache.container.onmouseup = function (e) {
        domCache.container.onmouseup = () => {};
        // We only check if the mouseup target is the container because usually it doesn't
        // have any other direct children aside of the popup
        if (e.target === domCache.container) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  /**
   * @param {DomCache} domCache
   */
  const handleContainerMousedown = domCache => {
    domCache.container.onmousedown = e => {
      // prevent the modal text from being selected on double click on the container (allowOutsideClick: false)
      if (e.target === domCache.container) {
        e.preventDefault();
      }
      domCache.popup.onmouseup = function (e) {
        domCache.popup.onmouseup = () => {};
        // We also need to check if the mouseup target is a child of the popup
        if (e.target === domCache.popup || e.target instanceof HTMLElement && domCache.popup.contains(e.target)) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  /**
   * @param {SweetAlertOptions} innerParams
   * @param {DomCache} domCache
   * @param {(dismiss: DismissReason) => void} dismissWith
   */
  const handleModalClick = (innerParams, domCache, dismissWith) => {
    domCache.container.onclick = e => {
      if (ignoreOutsideClick) {
        ignoreOutsideClick = false;
        return;
      }
      if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) {
        dismissWith(DismissReason.backdrop);
      }
    };
  };

  const isJqueryElement = elem => typeof elem === 'object' && elem.jquery;
  const isElement = elem => elem instanceof Element || isJqueryElement(elem);
  const argsToParams = args => {
    const params = {};
    if (typeof args[0] === 'object' && !isElement(args[0])) {
      Object.assign(params, args[0]);
    } else {
      ['title', 'html', 'icon'].forEach((name, index) => {
        const arg = args[index];
        if (typeof arg === 'string' || isElement(arg)) {
          params[name] = arg;
        } else if (arg !== undefined) {
          error(`Unexpected type of ${name}! Expected "string" or "Element", got ${typeof arg}`);
        }
      });
    }
    return params;
  };

  /**
   * Main method to create a new SweetAlert2 popup
   *
   * @param  {...SweetAlertOptions} args
   * @returns {Promise<SweetAlertResult>}
   */
  function fire(...args) {
    return new this(...args);
  }

  /**
   * Returns an extended version of `Swal` containing `params` as defaults.
   * Useful for reusing Swal configuration.
   *
   * For example:
   *
   * Before:
   * const textPromptOptions = { input: 'text', showCancelButton: true }
   * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
   * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
   *
   * After:
   * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
   * const {value: firstName} = await TextPrompt('What is your first name?')
   * const {value: lastName} = await TextPrompt('What is your last name?')
   *
   * @param {SweetAlertOptions} mixinParams
   * @returns {SweetAlert}
   */
  function mixin(mixinParams) {
    class MixinSwal extends this {
      _main(params, priorityMixinParams) {
        return super._main(params, Object.assign({}, mixinParams, priorityMixinParams));
      }
    }
    // @ts-ignore
    return MixinSwal;
  }

  /**
   * If `timer` parameter is set, returns number of milliseconds of timer remained.
   * Otherwise, returns undefined.
   *
   * @returns {number | undefined}
   */
  const getTimerLeft = () => {
    return globalState.timeout && globalState.timeout.getTimerLeft();
  };

  /**
   * Stop timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @returns {number | undefined}
   */
  const stopTimer = () => {
    if (globalState.timeout) {
      stopTimerProgressBar();
      return globalState.timeout.stop();
    }
  };

  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @returns {number | undefined}
   */
  const resumeTimer = () => {
    if (globalState.timeout) {
      const remaining = globalState.timeout.start();
      animateTimerProgressBar(remaining);
      return remaining;
    }
  };

  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @returns {number | undefined}
   */
  const toggleTimer = () => {
    const timer = globalState.timeout;
    return timer && (timer.running ? stopTimer() : resumeTimer());
  };

  /**
   * Increase timer. Returns number of milliseconds of an updated timer.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @param {number} ms
   * @returns {number | undefined}
   */
  const increaseTimer = ms => {
    if (globalState.timeout) {
      const remaining = globalState.timeout.increase(ms);
      animateTimerProgressBar(remaining, true);
      return remaining;
    }
  };

  /**
   * Check if timer is running. Returns true if timer is running
   * or false if timer is paused or stopped.
   * If `timer` parameter isn't set, returns undefined
   *
   * @returns {boolean}
   */
  const isTimerRunning = () => {
    return !!(globalState.timeout && globalState.timeout.isRunning());
  };

  let bodyClickListenerAdded = false;
  const clickHandlers = {};

  /**
   * @param {string} attr
   */
  function bindClickHandler(attr = 'data-swal-template') {
    clickHandlers[attr] = this;
    if (!bodyClickListenerAdded) {
      document.body.addEventListener('click', bodyClickListener);
      bodyClickListenerAdded = true;
    }
  }
  const bodyClickListener = event => {
    for (let el = event.target; el && el !== document; el = el.parentNode) {
      for (const attr in clickHandlers) {
        const template = el.getAttribute(attr);
        if (template) {
          clickHandlers[attr].fire({
            template
          });
          return;
        }
      }
    }
  };

  // Source: https://gist.github.com/mudge/5830382?permalink_comment_id=2691957#gistcomment-2691957

  class EventEmitter {
    constructor() {
      /** @type {Events} */
      this.events = {};
    }

    /**
     * @param {string} eventName
     * @returns {EventHandlers}
     */
    _getHandlersByEventName(eventName) {
      if (typeof this.events[eventName] === 'undefined') {
        // not Set because we need to keep the FIFO order
        // https://github.com/sweetalert2/sweetalert2/pull/2763#discussion_r1748990334
        this.events[eventName] = [];
      }
      return this.events[eventName];
    }

    /**
     * @param {string} eventName
     * @param {EventHandler} eventHandler
     */
    on(eventName, eventHandler) {
      const currentHandlers = this._getHandlersByEventName(eventName);
      if (!currentHandlers.includes(eventHandler)) {
        currentHandlers.push(eventHandler);
      }
    }

    /**
     * @param {string} eventName
     * @param {EventHandler} eventHandler
     */
    once(eventName, eventHandler) {
      /**
       * @param {Array} args
       */
      const onceFn = (...args) => {
        this.removeListener(eventName, onceFn);
        eventHandler.apply(this, args);
      };
      this.on(eventName, onceFn);
    }

    /**
     * @param {string} eventName
     * @param {Array} args
     */
    emit(eventName, ...args) {
      this._getHandlersByEventName(eventName).forEach(
      /**
       * @param {EventHandler} eventHandler
       */
      eventHandler => {
        try {
          eventHandler.apply(this, args);
        } catch (error) {
          console.error(error);
        }
      });
    }

    /**
     * @param {string} eventName
     * @param {EventHandler} eventHandler
     */
    removeListener(eventName, eventHandler) {
      const currentHandlers = this._getHandlersByEventName(eventName);
      const index = currentHandlers.indexOf(eventHandler);
      if (index > -1) {
        currentHandlers.splice(index, 1);
      }
    }

    /**
     * @param {string} eventName
     */
    removeAllListeners(eventName) {
      if (this.events[eventName] !== undefined) {
        // https://github.com/sweetalert2/sweetalert2/pull/2763#discussion_r1749239222
        this.events[eventName].length = 0;
      }
    }
    reset() {
      this.events = {};
    }
  }

  globalState.eventEmitter = new EventEmitter();

  /**
   * @param {string} eventName
   * @param {EventHandler} eventHandler
   */
  const on = (eventName, eventHandler) => {
    globalState.eventEmitter.on(eventName, eventHandler);
  };

  /**
   * @param {string} eventName
   * @param {EventHandler} eventHandler
   */
  const once = (eventName, eventHandler) => {
    globalState.eventEmitter.once(eventName, eventHandler);
  };

  /**
   * @param {string} [eventName]
   * @param {EventHandler} [eventHandler]
   */
  const off = (eventName, eventHandler) => {
    // Remove all handlers for all events
    if (!eventName) {
      globalState.eventEmitter.reset();
      return;
    }
    if (eventHandler) {
      // Remove a specific handler
      globalState.eventEmitter.removeListener(eventName, eventHandler);
    } else {
      // Remove all handlers for a specific event
      globalState.eventEmitter.removeAllListeners(eventName);
    }
  };

  var staticMethods = /*#__PURE__*/Object.freeze({
    __proto__: null,
    argsToParams: argsToParams,
    bindClickHandler: bindClickHandler,
    clickCancel: clickCancel,
    clickConfirm: clickConfirm,
    clickDeny: clickDeny,
    enableLoading: showLoading,
    fire: fire,
    getActions: getActions,
    getCancelButton: getCancelButton,
    getCloseButton: getCloseButton,
    getConfirmButton: getConfirmButton,
    getContainer: getContainer,
    getDenyButton: getDenyButton,
    getFocusableElements: getFocusableElements,
    getFooter: getFooter,
    getHtmlContainer: getHtmlContainer,
    getIcon: getIcon,
    getIconContent: getIconContent,
    getImage: getImage,
    getInputLabel: getInputLabel,
    getLoader: getLoader,
    getPopup: getPopup,
    getProgressSteps: getProgressSteps,
    getTimerLeft: getTimerLeft,
    getTimerProgressBar: getTimerProgressBar,
    getTitle: getTitle,
    getValidationMessage: getValidationMessage,
    increaseTimer: increaseTimer,
    isDeprecatedParameter: isDeprecatedParameter,
    isLoading: isLoading,
    isTimerRunning: isTimerRunning,
    isUpdatableParameter: isUpdatableParameter,
    isValidParameter: isValidParameter,
    isVisible: isVisible,
    mixin: mixin,
    off: off,
    on: on,
    once: once,
    resumeTimer: resumeTimer,
    showLoading: showLoading,
    stopTimer: stopTimer,
    toggleTimer: toggleTimer
  });

  class Timer {
    /**
     * @param {() => void} callback
     * @param {number} delay
     */
    constructor(callback, delay) {
      this.callback = callback;
      this.remaining = delay;
      this.running = false;
      this.start();
    }

    /**
     * @returns {number}
     */
    start() {
      if (!this.running) {
        this.running = true;
        this.started = new Date();
        this.id = setTimeout(this.callback, this.remaining);
      }
      return this.remaining;
    }

    /**
     * @returns {number}
     */
    stop() {
      if (this.started && this.running) {
        this.running = false;
        clearTimeout(this.id);
        this.remaining -= new Date().getTime() - this.started.getTime();
      }
      return this.remaining;
    }

    /**
     * @param {number} n
     * @returns {number}
     */
    increase(n) {
      const running = this.running;
      if (running) {
        this.stop();
      }
      this.remaining += n;
      if (running) {
        this.start();
      }
      return this.remaining;
    }

    /**
     * @returns {number}
     */
    getTimerLeft() {
      if (this.running) {
        this.stop();
        this.start();
      }
      return this.remaining;
    }

    /**
     * @returns {boolean}
     */
    isRunning() {
      return this.running;
    }
  }

  const swalStringParams = ['swal-title', 'swal-html', 'swal-footer'];

  /**
   * @param {SweetAlertOptions} params
   * @returns {SweetAlertOptions}
   */
  const getTemplateParams = params => {
    const template = typeof params.template === 'string' ? (/** @type {HTMLTemplateElement} */document.querySelector(params.template)) : params.template;
    if (!template) {
      return {};
    }
    /** @type {DocumentFragment} */
    const templateContent = template.content;
    showWarningsForElements(templateContent);
    const result = Object.assign(getSwalParams(templateContent), getSwalFunctionParams(templateContent), getSwalButtons(templateContent), getSwalImage(templateContent), getSwalIcon(templateContent), getSwalInput(templateContent), getSwalStringParams(templateContent, swalStringParams));
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @returns {Record<string, string | boolean | number>}
   */
  const getSwalParams = templateContent => {
    /** @type {Record<string, string | boolean | number>} */
    const result = {};
    /** @type {HTMLElement[]} */
    const swalParams = Array.from(templateContent.querySelectorAll('swal-param'));
    swalParams.forEach(param => {
      showWarningsForAttributes(param, ['name', 'value']);
      const paramName = /** @type {keyof SweetAlertOptions} */param.getAttribute('name');
      const value = param.getAttribute('value');
      if (!paramName || !value) {
        return;
      }
      if (typeof defaultParams[paramName] === 'boolean') {
        result[paramName] = value !== 'false';
      } else if (typeof defaultParams[paramName] === 'object') {
        result[paramName] = JSON.parse(value);
      } else {
        result[paramName] = value;
      }
    });
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @returns {Record<string, () => void>}
   */
  const getSwalFunctionParams = templateContent => {
    /** @type {Record<string, () => void>} */
    const result = {};
    /** @type {HTMLElement[]} */
    const swalFunctions = Array.from(templateContent.querySelectorAll('swal-function-param'));
    swalFunctions.forEach(param => {
      const paramName = /** @type {keyof SweetAlertOptions} */param.getAttribute('name');
      const value = param.getAttribute('value');
      if (!paramName || !value) {
        return;
      }
      result[paramName] = new Function(`return ${value}`)();
    });
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @returns {Record<string, string | boolean>}
   */
  const getSwalButtons = templateContent => {
    /** @type {Record<string, string | boolean>} */
    const result = {};
    /** @type {HTMLElement[]} */
    const swalButtons = Array.from(templateContent.querySelectorAll('swal-button'));
    swalButtons.forEach(button => {
      showWarningsForAttributes(button, ['type', 'color', 'aria-label']);
      const type = button.getAttribute('type');
      if (!type || !['confirm', 'cancel', 'deny'].includes(type)) {
        return;
      }
      result[`${type}ButtonText`] = button.innerHTML;
      result[`show${capitalizeFirstLetter(type)}Button`] = true;
      if (button.hasAttribute('color')) {
        result[`${type}ButtonColor`] = button.getAttribute('color');
      }
      if (button.hasAttribute('aria-label')) {
        result[`${type}ButtonAriaLabel`] = button.getAttribute('aria-label');
      }
    });
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @returns {Pick<SweetAlertOptions, 'imageUrl' | 'imageWidth' | 'imageHeight' | 'imageAlt'>}
   */
  const getSwalImage = templateContent => {
    const result = {};
    /** @type {HTMLElement | null} */
    const image = templateContent.querySelector('swal-image');
    if (image) {
      showWarningsForAttributes(image, ['src', 'width', 'height', 'alt']);
      if (image.hasAttribute('src')) {
        result.imageUrl = image.getAttribute('src') || undefined;
      }
      if (image.hasAttribute('width')) {
        result.imageWidth = image.getAttribute('width') || undefined;
      }
      if (image.hasAttribute('height')) {
        result.imageHeight = image.getAttribute('height') || undefined;
      }
      if (image.hasAttribute('alt')) {
        result.imageAlt = image.getAttribute('alt') || undefined;
      }
    }
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @returns {object}
   */
  const getSwalIcon = templateContent => {
    const result = {};
    /** @type {HTMLElement | null} */
    const icon = templateContent.querySelector('swal-icon');
    if (icon) {
      showWarningsForAttributes(icon, ['type', 'color']);
      if (icon.hasAttribute('type')) {
        result.icon = icon.getAttribute('type');
      }
      if (icon.hasAttribute('color')) {
        result.iconColor = icon.getAttribute('color');
      }
      result.iconHtml = icon.innerHTML;
    }
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @returns {object}
   */
  const getSwalInput = templateContent => {
    /** @type {object} */
    const result = {};
    /** @type {HTMLElement | null} */
    const input = templateContent.querySelector('swal-input');
    if (input) {
      showWarningsForAttributes(input, ['type', 'label', 'placeholder', 'value']);
      result.input = input.getAttribute('type') || 'text';
      if (input.hasAttribute('label')) {
        result.inputLabel = input.getAttribute('label');
      }
      if (input.hasAttribute('placeholder')) {
        result.inputPlaceholder = input.getAttribute('placeholder');
      }
      if (input.hasAttribute('value')) {
        result.inputValue = input.getAttribute('value');
      }
    }
    /** @type {HTMLElement[]} */
    const inputOptions = Array.from(templateContent.querySelectorAll('swal-input-option'));
    if (inputOptions.length) {
      result.inputOptions = {};
      inputOptions.forEach(option => {
        showWarningsForAttributes(option, ['value']);
        const optionValue = option.getAttribute('value');
        if (!optionValue) {
          return;
        }
        const optionName = option.innerHTML;
        result.inputOptions[optionValue] = optionName;
      });
    }
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @param {string[]} paramNames
   * @returns {Record<string, string>}
   */
  const getSwalStringParams = (templateContent, paramNames) => {
    /** @type {Record<string, string>} */
    const result = {};
    for (const i in paramNames) {
      const paramName = paramNames[i];
      /** @type {HTMLElement | null} */
      const tag = templateContent.querySelector(paramName);
      if (tag) {
        showWarningsForAttributes(tag, []);
        result[paramName.replace(/^swal-/, '')] = tag.innerHTML.trim();
      }
    }
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   */
  const showWarningsForElements = templateContent => {
    const allowedElements = swalStringParams.concat(['swal-param', 'swal-function-param', 'swal-button', 'swal-image', 'swal-icon', 'swal-input', 'swal-input-option']);
    Array.from(templateContent.children).forEach(el => {
      const tagName = el.tagName.toLowerCase();
      if (!allowedElements.includes(tagName)) {
        warn(`Unrecognized element <${tagName}>`);
      }
    });
  };

  /**
   * @param {HTMLElement} el
   * @param {string[]} allowedAttributes
   */
  const showWarningsForAttributes = (el, allowedAttributes) => {
    Array.from(el.attributes).forEach(attribute => {
      if (allowedAttributes.indexOf(attribute.name) === -1) {
        warn([`Unrecognized attribute "${attribute.name}" on <${el.tagName.toLowerCase()}>.`, `${allowedAttributes.length ? `Allowed attributes are: ${allowedAttributes.join(', ')}` : 'To set the value, use HTML within the element.'}`]);
      }
    });
  };

  const SHOW_CLASS_TIMEOUT = 10;

  /**
   * Open popup, add necessary classes and styles, fix scrollbar
   *
   * @param {SweetAlertOptions} params
   */
  const openPopup = params => {
    const container = getContainer();
    const popup = getPopup();
    if (typeof params.willOpen === 'function') {
      params.willOpen(popup);
    }
    globalState.eventEmitter.emit('willOpen', popup);
    const bodyStyles = window.getComputedStyle(document.body);
    const initialBodyOverflow = bodyStyles.overflowY;
    addClasses(container, popup, params);

    // scrolling is 'hidden' until animation is done, after that 'auto'
    setTimeout(() => {
      setScrollingVisibility(container, popup);
    }, SHOW_CLASS_TIMEOUT);
    if (isModal()) {
      fixScrollContainer(container, params.scrollbarPadding, initialBodyOverflow);
      setAriaHidden();
    }
    if (!isToast() && !globalState.previousActiveElement) {
      globalState.previousActiveElement = document.activeElement;
    }
    if (typeof params.didOpen === 'function') {
      setTimeout(() => params.didOpen(popup));
    }
    globalState.eventEmitter.emit('didOpen', popup);
  };

  /**
   * @param {AnimationEvent} event
   */
  const swalOpenAnimationFinished = event => {
    const popup = getPopup();
    if (event.target !== popup) {
      return;
    }
    const container = getContainer();
    popup.removeEventListener('animationend', swalOpenAnimationFinished);
    popup.removeEventListener('transitionend', swalOpenAnimationFinished);
    container.style.overflowY = 'auto';

    // no-transition is added in init() in case one swal is opened right after another
    removeClass(container, swalClasses['no-transition']);
  };

  /**
   * @param {HTMLElement} container
   * @param {HTMLElement} popup
   */
  const setScrollingVisibility = (container, popup) => {
    if (hasCssAnimation(popup)) {
      container.style.overflowY = 'hidden';
      popup.addEventListener('animationend', swalOpenAnimationFinished);
      popup.addEventListener('transitionend', swalOpenAnimationFinished);
    } else {
      container.style.overflowY = 'auto';
    }
  };

  /**
   * @param {HTMLElement} container
   * @param {boolean} scrollbarPadding
   * @param {string} initialBodyOverflow
   */
  const fixScrollContainer = (container, scrollbarPadding, initialBodyOverflow) => {
    iOSfix();
    if (scrollbarPadding && initialBodyOverflow !== 'hidden') {
      replaceScrollbarWithPadding(initialBodyOverflow);
    }

    // sweetalert2/issues/1247
    setTimeout(() => {
      container.scrollTop = 0;
    });
  };

  /**
   * @param {HTMLElement} container
   * @param {HTMLElement} popup
   * @param {SweetAlertOptions} params
   */
  const addClasses = (container, popup, params) => {
    addClass(container, params.showClass.backdrop);
    if (params.animation) {
      // this workaround with opacity is needed for https://github.com/sweetalert2/sweetalert2/issues/2059
      popup.style.setProperty('opacity', '0', 'important');
      show(popup, 'grid');
      setTimeout(() => {
        // Animate popup right after showing it
        addClass(popup, params.showClass.popup);
        // and remove the opacity workaround
        popup.style.removeProperty('opacity');
      }, SHOW_CLASS_TIMEOUT); // 10ms in order to fix #2062
    } else {
      show(popup, 'grid');
    }
    addClass([document.documentElement, document.body], swalClasses.shown);
    if (params.heightAuto && params.backdrop && !params.toast) {
      addClass([document.documentElement, document.body], swalClasses['height-auto']);
    }
  };

  var defaultInputValidators = {
    /**
     * @param {string} string
     * @param {string} [validationMessage]
     * @returns {Promise<string | void>}
     */
    email: (string, validationMessage) => {
      return /^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid email address');
    },
    /**
     * @param {string} string
     * @param {string} [validationMessage]
     * @returns {Promise<string | void>}
     */
    url: (string, validationMessage) => {
      // taken from https://stackoverflow.com/a/3809435 with a small change from #1306 and #2013
      return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid URL');
    }
  };

  /**
   * @param {SweetAlertOptions} params
   */
  function setDefaultInputValidators(params) {
    // Use default `inputValidator` for supported input types if not provided
    if (params.inputValidator) {
      return;
    }
    if (params.input === 'email') {
      params.inputValidator = defaultInputValidators['email'];
    }
    if (params.input === 'url') {
      params.inputValidator = defaultInputValidators['url'];
    }
  }

  /**
   * @param {SweetAlertOptions} params
   */
  function validateCustomTargetElement(params) {
    // Determine if the custom target element is valid
    if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
      warn('Target parameter is not valid, defaulting to "body"');
      params.target = 'body';
    }
  }

  /**
   * Set type, text and actions on popup
   *
   * @param {SweetAlertOptions} params
   */
  function setParameters(params) {
    setDefaultInputValidators(params);

    // showLoaderOnConfirm && preConfirm
    if (params.showLoaderOnConfirm && !params.preConfirm) {
      warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
    }
    validateCustomTargetElement(params);

    // Replace newlines with <br> in title
    if (typeof params.title === 'string') {
      params.title = params.title.split('\n').join('<br />');
    }
    init(params);
  }

  /** @type {SweetAlert} */
  let currentInstance;
  var _promise = /*#__PURE__*/new WeakMap();
  class SweetAlert {
    /**
     * @param {...(SweetAlertOptions | string)} args
     * @this {SweetAlert}
     */
    constructor(...args) {
      /**
       * @type {Promise<SweetAlertResult>}
       */
      _classPrivateFieldInitSpec(this, _promise, void 0);
      // Prevent run in Node env
      if (typeof window === 'undefined') {
        return;
      }
      currentInstance = this;

      // @ts-ignore
      const outerParams = Object.freeze(this.constructor.argsToParams(args));

      /** @type {Readonly<SweetAlertOptions>} */
      this.params = outerParams;

      /** @type {boolean} */
      this.isAwaitingPromise = false;
      _classPrivateFieldSet2(_promise, this, this._main(currentInstance.params));
    }
    _main(userParams, mixinParams = {}) {
      showWarningsForParams(Object.assign({}, mixinParams, userParams));
      if (globalState.currentInstance) {
        const swalPromiseResolve = privateMethods.swalPromiseResolve.get(globalState.currentInstance);
        const {
          isAwaitingPromise
        } = globalState.currentInstance;
        globalState.currentInstance._destroy();
        if (!isAwaitingPromise) {
          swalPromiseResolve({
            isDismissed: true
          });
        }
        if (isModal()) {
          unsetAriaHidden();
        }
      }
      globalState.currentInstance = currentInstance;
      const innerParams = prepareParams(userParams, mixinParams);
      setParameters(innerParams);
      Object.freeze(innerParams);

      // clear the previous timer
      if (globalState.timeout) {
        globalState.timeout.stop();
        delete globalState.timeout;
      }

      // clear the restore focus timeout
      clearTimeout(globalState.restoreFocusTimeout);
      const domCache = populateDomCache(currentInstance);
      render(currentInstance, innerParams);
      privateProps.innerParams.set(currentInstance, innerParams);
      return swalPromise(currentInstance, domCache, innerParams);
    }

    // `catch` cannot be the name of a module export, so we define our thenable methods here instead
    then(onFulfilled) {
      return _classPrivateFieldGet2(_promise, this).then(onFulfilled);
    }
    finally(onFinally) {
      return _classPrivateFieldGet2(_promise, this).finally(onFinally);
    }
  }

  /**
   * @param {SweetAlert} instance
   * @param {DomCache} domCache
   * @param {SweetAlertOptions} innerParams
   * @returns {Promise}
   */
  const swalPromise = (instance, domCache, innerParams) => {
    return new Promise((resolve, reject) => {
      // functions to handle all closings/dismissals
      /**
       * @param {DismissReason} dismiss
       */
      const dismissWith = dismiss => {
        instance.close({
          isDismissed: true,
          dismiss,
          isConfirmed: false,
          isDenied: false
        });
      };
      privateMethods.swalPromiseResolve.set(instance, resolve);
      privateMethods.swalPromiseReject.set(instance, reject);
      domCache.confirmButton.onclick = () => {
        handleConfirmButtonClick(instance);
      };
      domCache.denyButton.onclick = () => {
        handleDenyButtonClick(instance);
      };
      domCache.cancelButton.onclick = () => {
        handleCancelButtonClick(instance, dismissWith);
      };
      domCache.closeButton.onclick = () => {
        dismissWith(DismissReason.close);
      };
      handlePopupClick(innerParams, domCache, dismissWith);
      addKeydownHandler(globalState, innerParams, dismissWith);
      handleInputOptionsAndValue(instance, innerParams);
      openPopup(innerParams);
      setupTimer(globalState, innerParams, dismissWith);
      initFocus(domCache, innerParams);

      // Scroll container to top on open (#1247, #1946)
      setTimeout(() => {
        domCache.container.scrollTop = 0;
      });
    });
  };

  /**
   * @param {SweetAlertOptions} userParams
   * @param {SweetAlertOptions} mixinParams
   * @returns {SweetAlertOptions}
   */
  const prepareParams = (userParams, mixinParams) => {
    const templateParams = getTemplateParams(userParams);
    const params = Object.assign({}, defaultParams, mixinParams, templateParams, userParams); // precedence is described in #2131
    params.showClass = Object.assign({}, defaultParams.showClass, params.showClass);
    params.hideClass = Object.assign({}, defaultParams.hideClass, params.hideClass);
    if (params.animation === false) {
      params.showClass = {
        backdrop: 'swal2-noanimation'
      };
      params.hideClass = {};
    }
    return params;
  };

  /**
   * @param {SweetAlert} instance
   * @returns {DomCache}
   */
  const populateDomCache = instance => {
    const domCache = {
      popup: getPopup(),
      container: getContainer(),
      actions: getActions(),
      confirmButton: getConfirmButton(),
      denyButton: getDenyButton(),
      cancelButton: getCancelButton(),
      loader: getLoader(),
      closeButton: getCloseButton(),
      validationMessage: getValidationMessage(),
      progressSteps: getProgressSteps()
    };
    privateProps.domCache.set(instance, domCache);
    return domCache;
  };

  /**
   * @param {GlobalState} globalState
   * @param {SweetAlertOptions} innerParams
   * @param {(dismiss: DismissReason) => void} dismissWith
   */
  const setupTimer = (globalState, innerParams, dismissWith) => {
    const timerProgressBar = getTimerProgressBar();
    hide(timerProgressBar);
    if (innerParams.timer) {
      globalState.timeout = new Timer(() => {
        dismissWith('timer');
        delete globalState.timeout;
      }, innerParams.timer);
      if (innerParams.timerProgressBar) {
        show(timerProgressBar);
        applyCustomClass(timerProgressBar, innerParams, 'timerProgressBar');
        setTimeout(() => {
          if (globalState.timeout && globalState.timeout.running) {
            // timer can be already stopped or unset at this point
            animateTimerProgressBar(innerParams.timer);
          }
        });
      }
    }
  };

  /**
   * Initialize focus in the popup:
   *
   * 1. If `toast` is `true`, don't steal focus from the document.
   * 2. Else if there is an [autofocus] element, focus it.
   * 3. Else if `focusConfirm` is `true` and confirm button is visible, focus it.
   * 4. Else if `focusDeny` is `true` and deny button is visible, focus it.
   * 5. Else if `focusCancel` is `true` and cancel button is visible, focus it.
   * 6. Else focus the first focusable element in a popup (if any).
   *
   * @param {DomCache} domCache
   * @param {SweetAlertOptions} innerParams
   */
  const initFocus = (domCache, innerParams) => {
    if (innerParams.toast) {
      return;
    }
    // TODO: this is dumb, remove `allowEnterKey` param in the next major version
    if (!callIfFunction(innerParams.allowEnterKey)) {
      warnAboutDeprecation('allowEnterKey');
      blurActiveElement();
      return;
    }
    if (focusAutofocus(domCache)) {
      return;
    }
    if (focusButton(domCache, innerParams)) {
      return;
    }
    setFocus(-1, 1);
  };

  /**
   * @param {DomCache} domCache
   * @returns {boolean}
   */
  const focusAutofocus = domCache => {
    const autofocusElements = Array.from(domCache.popup.querySelectorAll('[autofocus]'));
    for (const autofocusElement of autofocusElements) {
      if (autofocusElement instanceof HTMLElement && isVisible$1(autofocusElement)) {
        autofocusElement.focus();
        return true;
      }
    }
    return false;
  };

  /**
   * @param {DomCache} domCache
   * @param {SweetAlertOptions} innerParams
   * @returns {boolean}
   */
  const focusButton = (domCache, innerParams) => {
    if (innerParams.focusDeny && isVisible$1(domCache.denyButton)) {
      domCache.denyButton.focus();
      return true;
    }
    if (innerParams.focusCancel && isVisible$1(domCache.cancelButton)) {
      domCache.cancelButton.focus();
      return true;
    }
    if (innerParams.focusConfirm && isVisible$1(domCache.confirmButton)) {
      domCache.confirmButton.focus();
      return true;
    }
    return false;
  };
  const blurActiveElement = () => {
    if (document.activeElement instanceof HTMLElement && typeof document.activeElement.blur === 'function') {
      document.activeElement.blur();
    }
  };

  // Assign instance methods from src/instanceMethods/*.js to prototype
  SweetAlert.prototype.disableButtons = disableButtons;
  SweetAlert.prototype.enableButtons = enableButtons;
  SweetAlert.prototype.getInput = getInput;
  SweetAlert.prototype.disableInput = disableInput;
  SweetAlert.prototype.enableInput = enableInput;
  SweetAlert.prototype.hideLoading = hideLoading;
  SweetAlert.prototype.disableLoading = hideLoading;
  SweetAlert.prototype.showValidationMessage = showValidationMessage;
  SweetAlert.prototype.resetValidationMessage = resetValidationMessage;
  SweetAlert.prototype.close = close;
  SweetAlert.prototype.closePopup = close;
  SweetAlert.prototype.closeModal = close;
  SweetAlert.prototype.closeToast = close;
  SweetAlert.prototype.rejectPromise = rejectPromise;
  SweetAlert.prototype.update = update;
  SweetAlert.prototype._destroy = _destroy;

  // Assign static methods from src/staticMethods/*.js to constructor
  Object.assign(SweetAlert, staticMethods);

  // Proxy to instance methods to constructor, for now, for backwards compatibility
  Object.keys(instanceMethods).forEach(key => {
    /**
     * @param {...(SweetAlertOptions | string | undefined)} args
     * @returns {SweetAlertResult | Promise<SweetAlertResult> | undefined}
     */
    SweetAlert[key] = function (...args) {
      if (currentInstance && currentInstance[key]) {
        return currentInstance[key](...args);
      }
      return null;
    };
  });
  SweetAlert.DismissReason = DismissReason;
  SweetAlert.version = '11.26.4';

  const Swal = SweetAlert;
  // @ts-ignore
  Swal.default = Swal;

  return Swal;

}));
if (typeof this !== 'undefined' && this.Sweetalert2){this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2}
"undefined"!=typeof document&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t}catch(e){n.innerText=t}}(document,":root{--swal2-outline: 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-container-padding: 0.625em;--swal2-backdrop: rgba(0, 0, 0, 0.4);--swal2-backdrop-transition: background-color 0.15s;--swal2-width: 32em;--swal2-padding: 0 0 1.25em;--swal2-border: none;--swal2-border-radius: 0.3125rem;--swal2-background: white;--swal2-color: #545454;--swal2-show-animation: swal2-show 0.3s;--swal2-hide-animation: swal2-hide 0.15s forwards;--swal2-icon-zoom: 1;--swal2-icon-animations: true;--swal2-title-padding: 0.8em 1em 0;--swal2-html-container-padding: 1em 1.6em 0.3em;--swal2-input-border: 1px solid #d9d9d9;--swal2-input-border-radius: 0.1875em;--swal2-input-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-background: transparent;--swal2-input-transition: border-color 0.2s, box-shadow 0.2s;--swal2-input-hover-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-focus-border: 1px solid #b4dbed;--swal2-input-focus-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-progress-step-background: #add8e6;--swal2-validation-message-background: #f0f0f0;--swal2-validation-message-color: #666;--swal2-footer-border-color: #eee;--swal2-footer-background: transparent;--swal2-footer-color: inherit;--swal2-timer-progress-bar-background: rgba(0, 0, 0, 0.3);--swal2-close-button-position: initial;--swal2-close-button-inset: auto;--swal2-close-button-font-size: 2.5em;--swal2-close-button-color: #ccc;--swal2-close-button-transition: color 0.2s, box-shadow 0.2s;--swal2-close-button-outline: initial;--swal2-close-button-box-shadow: inset 0 0 0 3px transparent;--swal2-close-button-focus-box-shadow: inset var(--swal2-outline);--swal2-close-button-hover-transform: none;--swal2-actions-justify-content: center;--swal2-actions-width: auto;--swal2-actions-margin: 1.25em auto 0;--swal2-actions-padding: 0;--swal2-actions-border-radius: 0;--swal2-actions-background: transparent;--swal2-action-button-transition: background-color 0.2s, box-shadow 0.2s;--swal2-action-button-hover: black 10%;--swal2-action-button-active: black 10%;--swal2-confirm-button-box-shadow: none;--swal2-confirm-button-border-radius: 0.25em;--swal2-confirm-button-background-color: #7066e0;--swal2-confirm-button-color: #fff;--swal2-deny-button-box-shadow: none;--swal2-deny-button-border-radius: 0.25em;--swal2-deny-button-background-color: #dc3741;--swal2-deny-button-color: #fff;--swal2-cancel-button-box-shadow: none;--swal2-cancel-button-border-radius: 0.25em;--swal2-cancel-button-background-color: #6e7881;--swal2-cancel-button-color: #fff;--swal2-toast-show-animation: swal2-toast-show 0.5s;--swal2-toast-hide-animation: swal2-toast-hide 0.1s forwards;--swal2-toast-border: none;--swal2-toast-box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075), 0 1px 2px hsl(0deg 0% 0% / 0.075), 1px 2px 4px hsl(0deg 0% 0% / 0.075), 1px 3px 8px hsl(0deg 0% 0% / 0.075), 2px 4px 16px hsl(0deg 0% 0% / 0.075)}[data-swal2-theme=dark]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}@media(prefers-color-scheme: dark){[data-swal2-theme=auto]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px var(--swal2-backdrop)}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}@media print{body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) .swal2-container{position:static !important}}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:\"top-start     top            top-end\" \"center-start  center         center-end\" \"bottom-start  bottom-center  bottom-end\";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:var(--swal2-container-padding);overflow-x:hidden;transition:var(--swal2-backdrop-transition);-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:var(--swal2-backdrop)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container)[popover]{width:auto;border:0}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:var(--swal2-width);max-width:100%;padding:var(--swal2-padding);border:var(--swal2-border);border-radius:var(--swal2-border-radius);background:var(--swal2-background);color:var(--swal2-color);font-family:inherit;font-size:1rem;container-name:swal2-popup}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable{cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable div:where(.swal2-icon){cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging{cursor:grabbing}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging div:where(.swal2-icon){cursor:grabbing}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:var(--swal2-title-padding);color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;overflow-wrap:break-word;cursor:initial}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:var(--swal2-actions-justify-content);width:var(--swal2-actions-width);margin:var(--swal2-actions-margin);padding:var(--swal2-actions-padding);border-radius:var(--swal2-actions-border-radius);background:var(--swal2-actions-background)}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:var(--swal2-action-button-transition);border:none;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border-radius:var(--swal2-confirm-button-border-radius);background:initial;background-color:var(--swal2-confirm-button-background-color);box-shadow:var(--swal2-confirm-button-box-shadow);color:var(--swal2-confirm-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):hover{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):active{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border-radius:var(--swal2-deny-button-border-radius);background:initial;background-color:var(--swal2-deny-button-background-color);box-shadow:var(--swal2-deny-button-box-shadow);color:var(--swal2-deny-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):hover{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):active{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border-radius:var(--swal2-cancel-button-border-radius);background:initial;background-color:var(--swal2-cancel-button-background-color);box-shadow:var(--swal2-cancel-button-box-shadow);color:var(--swal2-cancel-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):hover{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):active{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none;box-shadow:var(--swal2-action-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-styled)[disabled]:not(.swal2-loading){opacity:.4}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid var(--swal2-footer-border-color);background:var(--swal2-footer-background);color:var(--swal2-footer-color);font-size:1em;text-align:center;cursor:initial}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:var(--swal2-border-radius);border-bottom-left-radius:var(--swal2-border-radius)}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:var(--swal2-timer-progress-bar-background)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em;cursor:initial}div:where(.swal2-container) button:where(.swal2-close){position:var(--swal2-close-button-position);inset:var(--swal2-close-button-inset);z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:var(--swal2-close-button-transition);border:none;border-radius:var(--swal2-border-radius);outline:var(--swal2-close-button-outline);background:rgba(0,0,0,0);color:var(--swal2-close-button-color);font-family:monospace;font-size:var(--swal2-close-button-font-size);cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:var(--swal2-close-button-hover-transform);background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:var(--swal2-close-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-html-container){z-index:1;justify-content:center;margin:0;padding:var(--swal2-html-container-padding);overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;overflow-wrap:break-word;word-break:break-word;cursor:initial}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:var(--swal2-input-transition);border:var(--swal2-input-border);border-radius:var(--swal2-input-border-radius);background:var(--swal2-input-background);box-shadow:var(--swal2-input-box-shadow);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):hover,div:where(.swal2-container) input:where(.swal2-file):hover,div:where(.swal2-container) textarea:where(.swal2-textarea):hover{box-shadow:var(--swal2-input-hover-box-shadow)}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:var(--swal2-input-focus-border);outline:none;box-shadow:var(--swal2-input-focus-box-shadow)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:var(--swal2-background)}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:var(--swal2-input-background);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:var(--swal2-input-background);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:var(--swal2-background);color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:var(--swal2-validation-message-background);color:var(--swal2-validation-message-color);font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:var(--swal2-progress-step-background);color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:var(--swal2-progress-step-background)}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;zoom:var(--swal2-icon-zoom);border:.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}}div:where(.swal2-icon).swal2-warning{border-color:#f8bb86;color:#f8bb86}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}}div:where(.swal2-icon).swal2-info{border-color:#3fc3ee;color:#3fc3ee}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}}div:where(.swal2-icon).swal2-question{border-color:#87adbd;color:#87adbd}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:var(--swal2-show-animation)}.swal2-hide{animation:var(--swal2-hide-animation)}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;border:var(--swal2-toast-border);background:var(--swal2-background);box-shadow:var(--swal2-toast-box-shadow);pointer-events:all}.swal2-toast>*{grid-column:2}.swal2-toast h2:where(.swal2-title){margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-toast .swal2-loading{justify-content:center}.swal2-toast input:where(.swal2-input){height:2em;margin:.5em;font-size:1em}.swal2-toast .swal2-validation-message{font-size:1em}.swal2-toast div:where(.swal2-footer){margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-toast button:where(.swal2-close){grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-toast div:where(.swal2-html-container){margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-toast div:where(.swal2-html-container):empty{padding:0}.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-toast div:where(.swal2-actions){justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-toast button:where(.swal2-styled){margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}@container swal2-popup style(--swal2-icon-animations:true){.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}}.swal2-toast.swal2-show{animation:var(--swal2-toast-show-animation)}.swal2-toast.swal2-hide{animation:var(--swal2-toast-hide-animation)}@keyframes swal2-show{0%{transform:translate3d(0, -50px, 0) scale(0.9);opacity:0}100%{transform:translate3d(0, 0, 0) scale(1);opacity:1}}@keyframes swal2-hide{0%{transform:translate3d(0, 0, 0) scale(1);opacity:1}100%{transform:translate3d(0, -50px, 0) scale(0.9);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}");

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

/***/ "./resources/assets/js/components/Proyecto/Dashboard/Dashboard.vue":
/*!*************************************************************************!*\
  !*** ./resources/assets/js/components/Proyecto/Dashboard/Dashboard.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Dashboard_vue_vue_type_template_id_8366e674__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=8366e674 */ "./resources/assets/js/components/Proyecto/Dashboard/Dashboard.vue?vue&type=template&id=8366e674");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js */ "./resources/assets/js/components/Proyecto/Dashboard/Dashboard.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_8366e674__WEBPACK_IMPORTED_MODULE_0__.render,
  _Dashboard_vue_vue_type_template_id_8366e674__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/Proyecto/Dashboard/Dashboard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Proyecto/Dashboard/Dashboard.vue?vue&type=script&lang=js":
/*!*************************************************************************************************!*\
  !*** ./resources/assets/js/components/Proyecto/Dashboard/Dashboard.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Proyecto/Dashboard/Dashboard.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Proyecto/Dashboard/Dashboard.vue?vue&type=template&id=8366e674":
/*!*******************************************************************************************************!*\
  !*** ./resources/assets/js/components/Proyecto/Dashboard/Dashboard.vue?vue&type=template&id=8366e674 ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_8366e674__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_8366e674__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_8366e674__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=template&id=8366e674 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Proyecto/Dashboard/Dashboard.vue?vue&type=template&id=8366e674");


/***/ }),

/***/ "./resources/assets/js/components/Proyecto/Dashboard/RequisicionesAutorizar.vue":
/*!**************************************************************************************!*\
  !*** ./resources/assets/js/components/Proyecto/Dashboard/RequisicionesAutorizar.vue ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RequisicionesAutorizar_vue_vue_type_template_id_470be5f0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RequisicionesAutorizar.vue?vue&type=template&id=470be5f0 */ "./resources/assets/js/components/Proyecto/Dashboard/RequisicionesAutorizar.vue?vue&type=template&id=470be5f0");
/* harmony import */ var _RequisicionesAutorizar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RequisicionesAutorizar.vue?vue&type=script&lang=js */ "./resources/assets/js/components/Proyecto/Dashboard/RequisicionesAutorizar.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RequisicionesAutorizar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _RequisicionesAutorizar_vue_vue_type_template_id_470be5f0__WEBPACK_IMPORTED_MODULE_0__.render,
  _RequisicionesAutorizar_vue_vue_type_template_id_470be5f0__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/Proyecto/Dashboard/RequisicionesAutorizar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Proyecto/Dashboard/RequisicionesAutorizar.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************!*\
  !*** ./resources/assets/js/components/Proyecto/Dashboard/RequisicionesAutorizar.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RequisicionesAutorizar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RequisicionesAutorizar.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Proyecto/Dashboard/RequisicionesAutorizar.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RequisicionesAutorizar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Proyecto/Dashboard/RequisicionesAutorizar.vue?vue&type=template&id=470be5f0":
/*!********************************************************************************************************************!*\
  !*** ./resources/assets/js/components/Proyecto/Dashboard/RequisicionesAutorizar.vue?vue&type=template&id=470be5f0 ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RequisicionesAutorizar_vue_vue_type_template_id_470be5f0__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RequisicionesAutorizar_vue_vue_type_template_id_470be5f0__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RequisicionesAutorizar_vue_vue_type_template_id_470be5f0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RequisicionesAutorizar.vue?vue&type=template&id=470be5f0 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Proyecto/Dashboard/RequisicionesAutorizar.vue?vue&type=template&id=470be5f0");


/***/ }),

/***/ "./resources/assets/js/components/Proyecto/Dashboard/RequisicionesValidar.vue":
/*!************************************************************************************!*\
  !*** ./resources/assets/js/components/Proyecto/Dashboard/RequisicionesValidar.vue ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RequisicionesValidar_vue_vue_type_template_id_1ba696a0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RequisicionesValidar.vue?vue&type=template&id=1ba696a0 */ "./resources/assets/js/components/Proyecto/Dashboard/RequisicionesValidar.vue?vue&type=template&id=1ba696a0");
/* harmony import */ var _RequisicionesValidar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RequisicionesValidar.vue?vue&type=script&lang=js */ "./resources/assets/js/components/Proyecto/Dashboard/RequisicionesValidar.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RequisicionesValidar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _RequisicionesValidar_vue_vue_type_template_id_1ba696a0__WEBPACK_IMPORTED_MODULE_0__.render,
  _RequisicionesValidar_vue_vue_type_template_id_1ba696a0__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/Proyecto/Dashboard/RequisicionesValidar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Proyecto/Dashboard/RequisicionesValidar.vue?vue&type=script&lang=js":
/*!************************************************************************************************************!*\
  !*** ./resources/assets/js/components/Proyecto/Dashboard/RequisicionesValidar.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RequisicionesValidar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RequisicionesValidar.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Proyecto/Dashboard/RequisicionesValidar.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RequisicionesValidar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Proyecto/Dashboard/RequisicionesValidar.vue?vue&type=template&id=1ba696a0":
/*!******************************************************************************************************************!*\
  !*** ./resources/assets/js/components/Proyecto/Dashboard/RequisicionesValidar.vue?vue&type=template&id=1ba696a0 ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RequisicionesValidar_vue_vue_type_template_id_1ba696a0__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RequisicionesValidar_vue_vue_type_template_id_1ba696a0__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RequisicionesValidar_vue_vue_type_template_id_1ba696a0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RequisicionesValidar.vue?vue&type=template&id=1ba696a0 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Proyecto/Dashboard/RequisicionesValidar.vue?vue&type=template&id=1ba696a0");


/***/ }),

/***/ "./resources/assets/js/components/Proyecto/Proyecto.vue":
/*!**************************************************************!*\
  !*** ./resources/assets/js/components/Proyecto/Proyecto.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Proyecto_vue_vue_type_template_id_74cc0b70__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Proyecto.vue?vue&type=template&id=74cc0b70 */ "./resources/assets/js/components/Proyecto/Proyecto.vue?vue&type=template&id=74cc0b70");
/* harmony import */ var _Proyecto_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Proyecto.vue?vue&type=script&lang=js */ "./resources/assets/js/components/Proyecto/Proyecto.vue?vue&type=script&lang=js");
/* harmony import */ var _Proyecto_vue_vue_type_style_index_0_id_74cc0b70_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Proyecto.vue?vue&type=style&index=0&id=74cc0b70&lang=css */ "./resources/assets/js/components/Proyecto/Proyecto.vue?vue&type=style&index=0&id=74cc0b70&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Proyecto_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Proyecto_vue_vue_type_template_id_74cc0b70__WEBPACK_IMPORTED_MODULE_0__.render,
  _Proyecto_vue_vue_type_template_id_74cc0b70__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/Proyecto/Proyecto.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Proyecto/Proyecto.vue?vue&type=script&lang=js":
/*!**************************************************************************************!*\
  !*** ./resources/assets/js/components/Proyecto/Proyecto.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Proyecto_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Proyecto.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Proyecto/Proyecto.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Proyecto_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Proyecto/Proyecto.vue?vue&type=style&index=0&id=74cc0b70&lang=css":
/*!**********************************************************************************************************!*\
  !*** ./resources/assets/js/components/Proyecto/Proyecto.vue?vue&type=style&index=0&id=74cc0b70&lang=css ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Proyecto_vue_vue_type_style_index_0_id_74cc0b70_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Proyecto.vue?vue&type=style&index=0&id=74cc0b70&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Proyecto/Proyecto.vue?vue&type=style&index=0&id=74cc0b70&lang=css");


/***/ }),

/***/ "./resources/assets/js/components/Proyecto/Proyecto.vue?vue&type=template&id=74cc0b70":
/*!********************************************************************************************!*\
  !*** ./resources/assets/js/components/Proyecto/Proyecto.vue?vue&type=template&id=74cc0b70 ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Proyecto_vue_vue_type_template_id_74cc0b70__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Proyecto_vue_vue_type_template_id_74cc0b70__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Proyecto_vue_vue_type_template_id_74cc0b70__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Proyecto.vue?vue&type=template&id=74cc0b70 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Proyecto/Proyecto.vue?vue&type=template&id=74cc0b70");


/***/ }),

/***/ "./resources/assets/js/components/Proyecto/Requisiciones/AprobarRequisiciones.vue":
/*!****************************************************************************************!*\
  !*** ./resources/assets/js/components/Proyecto/Requisiciones/AprobarRequisiciones.vue ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AprobarRequisiciones_vue_vue_type_template_id_2fe2ef0b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AprobarRequisiciones.vue?vue&type=template&id=2fe2ef0b */ "./resources/assets/js/components/Proyecto/Requisiciones/AprobarRequisiciones.vue?vue&type=template&id=2fe2ef0b");
/* harmony import */ var _AprobarRequisiciones_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AprobarRequisiciones.vue?vue&type=script&lang=js */ "./resources/assets/js/components/Proyecto/Requisiciones/AprobarRequisiciones.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AprobarRequisiciones_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _AprobarRequisiciones_vue_vue_type_template_id_2fe2ef0b__WEBPACK_IMPORTED_MODULE_0__.render,
  _AprobarRequisiciones_vue_vue_type_template_id_2fe2ef0b__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/Proyecto/Requisiciones/AprobarRequisiciones.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Proyecto/Requisiciones/AprobarRequisiciones.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************!*\
  !*** ./resources/assets/js/components/Proyecto/Requisiciones/AprobarRequisiciones.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AprobarRequisiciones_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AprobarRequisiciones.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Proyecto/Requisiciones/AprobarRequisiciones.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AprobarRequisiciones_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Proyecto/Requisiciones/AprobarRequisiciones.vue?vue&type=template&id=2fe2ef0b":
/*!**********************************************************************************************************************!*\
  !*** ./resources/assets/js/components/Proyecto/Requisiciones/AprobarRequisiciones.vue?vue&type=template&id=2fe2ef0b ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AprobarRequisiciones_vue_vue_type_template_id_2fe2ef0b__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AprobarRequisiciones_vue_vue_type_template_id_2fe2ef0b__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AprobarRequisiciones_vue_vue_type_template_id_2fe2ef0b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AprobarRequisiciones.vue?vue&type=template&id=2fe2ef0b */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Proyecto/Requisiciones/AprobarRequisiciones.vue?vue&type=template&id=2fe2ef0b");


/***/ }),

/***/ "./resources/assets/js/components/Proyecto/Requisiciones/Detalle.vue":
/*!***************************************************************************!*\
  !*** ./resources/assets/js/components/Proyecto/Requisiciones/Detalle.vue ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Detalle_vue_vue_type_template_id_5c0048d0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Detalle.vue?vue&type=template&id=5c0048d0 */ "./resources/assets/js/components/Proyecto/Requisiciones/Detalle.vue?vue&type=template&id=5c0048d0");
/* harmony import */ var _Detalle_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Detalle.vue?vue&type=script&lang=js */ "./resources/assets/js/components/Proyecto/Requisiciones/Detalle.vue?vue&type=script&lang=js");
/* harmony import */ var _Detalle_vue_vue_type_style_index_0_id_5c0048d0_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Detalle.vue?vue&type=style&index=0&id=5c0048d0&lang=css */ "./resources/assets/js/components/Proyecto/Requisiciones/Detalle.vue?vue&type=style&index=0&id=5c0048d0&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Detalle_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Detalle_vue_vue_type_template_id_5c0048d0__WEBPACK_IMPORTED_MODULE_0__.render,
  _Detalle_vue_vue_type_template_id_5c0048d0__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/Proyecto/Requisiciones/Detalle.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Proyecto/Requisiciones/Detalle.vue?vue&type=script&lang=js":
/*!***************************************************************************************************!*\
  !*** ./resources/assets/js/components/Proyecto/Requisiciones/Detalle.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Detalle_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Detalle.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Proyecto/Requisiciones/Detalle.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Detalle_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Proyecto/Requisiciones/Detalle.vue?vue&type=style&index=0&id=5c0048d0&lang=css":
/*!***********************************************************************************************************************!*\
  !*** ./resources/assets/js/components/Proyecto/Requisiciones/Detalle.vue?vue&type=style&index=0&id=5c0048d0&lang=css ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Detalle_vue_vue_type_style_index_0_id_5c0048d0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Detalle.vue?vue&type=style&index=0&id=5c0048d0&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Proyecto/Requisiciones/Detalle.vue?vue&type=style&index=0&id=5c0048d0&lang=css");


/***/ }),

/***/ "./resources/assets/js/components/Proyecto/Requisiciones/Detalle.vue?vue&type=template&id=5c0048d0":
/*!*********************************************************************************************************!*\
  !*** ./resources/assets/js/components/Proyecto/Requisiciones/Detalle.vue?vue&type=template&id=5c0048d0 ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Detalle_vue_vue_type_template_id_5c0048d0__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Detalle_vue_vue_type_template_id_5c0048d0__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Detalle_vue_vue_type_template_id_5c0048d0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Detalle.vue?vue&type=template&id=5c0048d0 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Proyecto/Requisiciones/Detalle.vue?vue&type=template&id=5c0048d0");


/***/ }),

/***/ "./resources/assets/js/components/Proyecto/Requisiciones/Modal.vue":
/*!*************************************************************************!*\
  !*** ./resources/assets/js/components/Proyecto/Requisiciones/Modal.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Modal_vue_vue_type_template_id_04045174__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal.vue?vue&type=template&id=04045174 */ "./resources/assets/js/components/Proyecto/Requisiciones/Modal.vue?vue&type=template&id=04045174");
/* harmony import */ var _Modal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal.vue?vue&type=script&lang=js */ "./resources/assets/js/components/Proyecto/Requisiciones/Modal.vue?vue&type=script&lang=js");
/* harmony import */ var _Modal_vue_vue_type_style_index_0_id_04045174_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modal.vue?vue&type=style&index=0&id=04045174&lang=css */ "./resources/assets/js/components/Proyecto/Requisiciones/Modal.vue?vue&type=style&index=0&id=04045174&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Modal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Modal_vue_vue_type_template_id_04045174__WEBPACK_IMPORTED_MODULE_0__.render,
  _Modal_vue_vue_type_template_id_04045174__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/Proyecto/Requisiciones/Modal.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Proyecto/Requisiciones/Modal.vue?vue&type=script&lang=js":
/*!*************************************************************************************************!*\
  !*** ./resources/assets/js/components/Proyecto/Requisiciones/Modal.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Modal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Proyecto/Requisiciones/Modal.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Proyecto/Requisiciones/Modal.vue?vue&type=style&index=0&id=04045174&lang=css":
/*!*********************************************************************************************************************!*\
  !*** ./resources/assets/js/components/Proyecto/Requisiciones/Modal.vue?vue&type=style&index=0&id=04045174&lang=css ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_id_04045174_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Modal.vue?vue&type=style&index=0&id=04045174&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Proyecto/Requisiciones/Modal.vue?vue&type=style&index=0&id=04045174&lang=css");


/***/ }),

/***/ "./resources/assets/js/components/Proyecto/Requisiciones/Modal.vue?vue&type=template&id=04045174":
/*!*******************************************************************************************************!*\
  !*** ./resources/assets/js/components/Proyecto/Requisiciones/Modal.vue?vue&type=template&id=04045174 ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_template_id_04045174__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_template_id_04045174__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_template_id_04045174__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Modal.vue?vue&type=template&id=04045174 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Proyecto/Requisiciones/Modal.vue?vue&type=template&id=04045174");


/***/ }),

/***/ "./resources/assets/js/components/Proyecto/Requisiciones/PrincipalRequisiciones.vue":
/*!******************************************************************************************!*\
  !*** ./resources/assets/js/components/Proyecto/Requisiciones/PrincipalRequisiciones.vue ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PrincipalRequisiciones_vue_vue_type_template_id_f64c8838__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PrincipalRequisiciones.vue?vue&type=template&id=f64c8838 */ "./resources/assets/js/components/Proyecto/Requisiciones/PrincipalRequisiciones.vue?vue&type=template&id=f64c8838");
/* harmony import */ var _PrincipalRequisiciones_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PrincipalRequisiciones.vue?vue&type=script&lang=js */ "./resources/assets/js/components/Proyecto/Requisiciones/PrincipalRequisiciones.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PrincipalRequisiciones_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _PrincipalRequisiciones_vue_vue_type_template_id_f64c8838__WEBPACK_IMPORTED_MODULE_0__.render,
  _PrincipalRequisiciones_vue_vue_type_template_id_f64c8838__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/Proyecto/Requisiciones/PrincipalRequisiciones.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Proyecto/Requisiciones/PrincipalRequisiciones.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************!*\
  !*** ./resources/assets/js/components/Proyecto/Requisiciones/PrincipalRequisiciones.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PrincipalRequisiciones_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PrincipalRequisiciones.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Proyecto/Requisiciones/PrincipalRequisiciones.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PrincipalRequisiciones_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Proyecto/Requisiciones/PrincipalRequisiciones.vue?vue&type=template&id=f64c8838":
/*!************************************************************************************************************************!*\
  !*** ./resources/assets/js/components/Proyecto/Requisiciones/PrincipalRequisiciones.vue?vue&type=template&id=f64c8838 ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PrincipalRequisiciones_vue_vue_type_template_id_f64c8838__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PrincipalRequisiciones_vue_vue_type_template_id_f64c8838__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PrincipalRequisiciones_vue_vue_type_template_id_f64c8838__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PrincipalRequisiciones.vue?vue&type=template&id=f64c8838 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Proyecto/Requisiciones/PrincipalRequisiciones.vue?vue&type=template&id=f64c8838");


/***/ }),

/***/ "./resources/assets/js/components/Proyecto/Requisiciones/Requisiciones.vue":
/*!*********************************************************************************!*\
  !*** ./resources/assets/js/components/Proyecto/Requisiciones/Requisiciones.vue ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Requisiciones_vue_vue_type_template_id_01fbd854__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Requisiciones.vue?vue&type=template&id=01fbd854 */ "./resources/assets/js/components/Proyecto/Requisiciones/Requisiciones.vue?vue&type=template&id=01fbd854");
/* harmony import */ var _Requisiciones_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Requisiciones.vue?vue&type=script&lang=js */ "./resources/assets/js/components/Proyecto/Requisiciones/Requisiciones.vue?vue&type=script&lang=js");
/* harmony import */ var _Requisiciones_vue_vue_type_style_index_0_id_01fbd854_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Requisiciones.vue?vue&type=style&index=0&id=01fbd854&lang=css */ "./resources/assets/js/components/Proyecto/Requisiciones/Requisiciones.vue?vue&type=style&index=0&id=01fbd854&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Requisiciones_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Requisiciones_vue_vue_type_template_id_01fbd854__WEBPACK_IMPORTED_MODULE_0__.render,
  _Requisiciones_vue_vue_type_template_id_01fbd854__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/Proyecto/Requisiciones/Requisiciones.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Proyecto/Requisiciones/Requisiciones.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************!*\
  !*** ./resources/assets/js/components/Proyecto/Requisiciones/Requisiciones.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Requisiciones_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Requisiciones.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Proyecto/Requisiciones/Requisiciones.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Requisiciones_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Proyecto/Requisiciones/Requisiciones.vue?vue&type=style&index=0&id=01fbd854&lang=css":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/assets/js/components/Proyecto/Requisiciones/Requisiciones.vue?vue&type=style&index=0&id=01fbd854&lang=css ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Requisiciones_vue_vue_type_style_index_0_id_01fbd854_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Requisiciones.vue?vue&type=style&index=0&id=01fbd854&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Proyecto/Requisiciones/Requisiciones.vue?vue&type=style&index=0&id=01fbd854&lang=css");


/***/ }),

/***/ "./resources/assets/js/components/Proyecto/Requisiciones/Requisiciones.vue?vue&type=template&id=01fbd854":
/*!***************************************************************************************************************!*\
  !*** ./resources/assets/js/components/Proyecto/Requisiciones/Requisiciones.vue?vue&type=template&id=01fbd854 ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Requisiciones_vue_vue_type_template_id_01fbd854__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Requisiciones_vue_vue_type_template_id_01fbd854__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Requisiciones_vue_vue_type_template_id_01fbd854__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Requisiciones.vue?vue&type=template&id=01fbd854 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Proyecto/Requisiciones/Requisiciones.vue?vue&type=template&id=01fbd854");


/***/ }),

/***/ "./resources/assets/js/utils/utils.js":
/*!********************************************!*\
  !*** ./resources/assets/js/utils/utils.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   del: () => (/* binding */ del),
/* harmony export */   error: () => (/* binding */ error),
/* harmony export */   get: () => (/* binding */ get),
/* harmony export */   getText: () => (/* binding */ getText),
/* harmony export */   info: () => (/* binding */ info),
/* harmony export */   postPut: () => (/* binding */ postPut),
/* harmony export */   question: () => (/* binding */ question),
/* harmony export */   success: () => (/* binding */ success),
/* harmony export */   validateSelect: () => (/* binding */ validateSelect)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


/**
 * Mostrar mensaje de error
 * @param string  mensaje Mensaje a mostrar 
 */
var error = function error(mensaje) {
  toastr.error(mensaje);
};

/**
 * Mostrar mensaje de error
 * @param string  mensaje Mensaje a mostrar 
 */
var success = function success(mensaje) {
  toastr.success(mensaje);
};

/**
 * Mostrar mensaje de pregunta
 * @param {string} title Title
 * @param {String} text Text
 * @param {String} icon Icon
 */
var question = function question(title, text) {
  var icon = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "question";
  return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
    title: title,
    text: text,
    icon: icon,
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Aceptar",
    cancelButtonText: "Cancelar"
  });
};

/**
 * Solicitar un texto
  * @param {string} title Title
 */
var getText = function getText(title) {
  return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
    title: title,
    input: "text",
    icon: "info",
    inputAttributes: {
      autocapitalize: "off"
    },
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    showCancelButton: true,
    confirmButtonText: "Aceptar",
    cancelButtonText: "Cancelar"
  });
};

/**
 * Realiza una peticion GET a la URL ingresada
 * @param {String} url URL a consultar
 * @param {String} successMessage Mensaje de correcto
 * @param {Object} loading Objeto de loading
 * @param {Function} callback Acciones en caso de correcto
 */
var get = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(url, successMessage, loading, callback) {
    var res, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          _context.p = 0;
          if (_typeof(loading) === "object" && loading != null) loading.enable = true;
          _context.n = 1;
          return axios.get(url);
        case 1:
          res = _context.v;
          if (_typeof(loading) === "object" && loading != null) loading.enable = false;
          if (res.data.status || res.data.success) {
            if (typeof callback == "function") callback(res);
            if (successMessage != null && successMessage != "") success(successMessage);
          } else {
            error(res.data.message);
          }
          _context.n = 3;
          break;
        case 2:
          _context.p = 2;
          _t = _context.v;
          console.error(_t);
          error("URL: ".concat(url, "\n") + _t);
        case 3:
          return _context.a(2);
      }
    }, _callee, null, [[0, 2]]);
  }));
  return function get(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * Realiza una peticion POST o PUT a la URL ingresada
 * @param {String} url URL a consultar
 * @param {Object} data Objecto con data a guardar
 * @param {Number} id Id del objeto (En caso de actualización)
 * @param {String} successMessage Mensaje de correcto
 * @param {Object} loading Objeto de loading
 * @param {Function} callback Acciones en caso de correcto
 */
var postPut = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(url, data, id, successMessage, loading, callback) {
    var method, res;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          if (loading && _typeof(loading) === "object") loading.enable = true;
          method = id == null || id == 0 ? "POST" : "PUT";
          url += method == "POST" ? "" : "/".concat(id);
          _context2.n = 1;
          return axios({
            method: method,
            url: url,
            data: data
          });
        case 1:
          res = _context2.v;
          if (!(callback == null)) {
            _context2.n = 2;
            break;
          }
          return _context2.a(2, res);
        case 2:
          if (loading && _typeof(loading) === "object") loading.enable = false;
          if (res.data.status || res.data.success) {
            if (typeof callback == "function") {
              callback(res);
            }
            if (successMessage != null && successMessage != "") success(successMessage);
          } else {
            error(res.data.message);
          }
        case 3:
          return _context2.a(2);
      }
    }, _callee2);
  }));
  return function postPut(_x5, _x6, _x7, _x8, _x9, _x0) {
    return _ref2.apply(this, arguments);
  };
}();

/**
 * Realiza una peticion DEL a la URL ingresada
 * @param {String} url URL a consultar
 * @param {Number} id Id del objeto
 * @param {String} successMessage Mensaje de correcto
 * @param {Object} loading Objeto de loading
 * @param {Function} callback Acciones en caso de correcto
 */
var del = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(url, id, successMessage, loading, callback) {
    var res;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.n) {
        case 0:
          if (_typeof(loading) === "object") loading.enable = true;
          url += "/".concat(id);
          _context3.n = 1;
          return axios["delete"](url);
        case 1:
          res = _context3.v;
          if (_typeof(loading) === "object") loading.enable = false;
          if (res.data.status || res.data.success) {
            if (typeof callback === "function") {
              callback(res);
            }
            if (successMessage != null && successMessage != "") success(successMessage);
          } else {
            error(res.data.message);
          }
        case 2:
          return _context3.a(2);
      }
    }, _callee3);
  }));
  return function del(_x1, _x10, _x11, _x12, _x13) {
    return _ref3.apply(this, arguments);
  };
}();

/**
 * Comprueba que los models de los select ingresados sean válidos
 * @param selects Modelos a validar 
 */
var validateSelect = function validateSelect(selects) {
  var aux_validation = function aux_validation(obj) {
    if (obj == null || obj.id == null) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        title: "Error",
        text: "Ingrese todos los campos",
        icon: "error",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Aceptar"
      });
      return false;
    }
    return true;
  };
  if (selects.length) {
    var isValid = true;
    var _iterator = _createForOfIteratorHelper(selects),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var s = _step.value;
        var res = aux_validation(s);
        if (!res) isValid = false;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return isValid;
  } else {
    return aux_validation(selects);
  }
};

/**
 * Mostrar ventana de informacion
 * @param {string} title Titulo
 * @param {string} text Mensaje
 */
var info = function info(title, text) {
  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
    title: title,
    text: text,
    icon: "info",
    confirmButtonColor: "#3085d6",
    confirmButtonText: "Aceptar"
  });
};

/***/ }),

/***/ "./resources/assets/js/utils/vue-tables.js":
/*!*************************************************!*\
  !*** ./resources/assets/js/utils/vue-tables.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: () => (/* binding */ config)
/* harmony export */ });
var config = {
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
  skin: 'table table-striped table-bordered',
  skinBusqueda: '',
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
  columnCondicion: [],
  options: {
    perPage: 10,
    perPageValues: [],
    skin: "table table-striped table-bordered",
    sortIcon: {
      base: 'fa',
      up: 'fa-chevron-up',
      down: 'fa-chevron-down',
      is: 'fa-sort'
    },
    filterByColumn: true,
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
    }
  }
};

/***/ })

}]);