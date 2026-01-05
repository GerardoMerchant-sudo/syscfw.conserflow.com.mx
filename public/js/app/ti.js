(self["webpackChunk"] = self["webpackChunk"] || []).push([["ti"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/Bitacora/Bitacora.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/Bitacora/Bitacora.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************/
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
      responsable_i: '',
      ruta: '',
      anio: 2020,
      tamanio: '',
      fecha: '',
      ubicacion: '',
      responsable_r: '',
      observaciones: '',
      listaEmpleados: [],
      modal: 0,
      tituloModal: '',
      tipoAccion: '',
      tableData: [],
      columns: ['id', 'fecha', "ubicacion", 'ruta', 'tamanio', 'empleado_ii', 'empleado_ri'],
      options: {
        headings: {
          'id': 'Acciones',
          'tamanio': 'Tamaño',
          'empleado_ii': 'Propietario',
          'empleado_ri': 'Realiza'
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
      axios.get('get/data/bitacora/resguardo/info').then(function (response) {
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
        _this2.listaEmpleados.push({
          id: -1,
          name: "SERVIDOR"
        });
      })["catch"](function (error) {
        console.log(error);
      });
    },
    AbrirModal: function AbrirModal(edo) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      if (edo == 1) {
        this.vaciar();
        this.modal = 1;
        this.tituloModal = 'Guardar';
        this.tipoAccion = 1;
      } else if (edo == 2) {
        this.vaciar();
        this.modal = 1;
        this.tituloModal = 'Actualizar';
        this.tipoAccion = 2;
        this.id = data['id'];
        this.responsable_i = {
          id: data['responsable_i'],
          name: data['empleado_ii']
        };
        this.ruta = data['ruta'];
        this.tamanio = data['tamanio'];
        this.fecha = data['fecha'];
        this.ubicacion = data['ubicacion'];
        this.responsable_r = {
          id: data['responsable_r'],
          name: data['empleado_ri']
        };
        this.observaciones = data['observaciones'];
      }
    },
    vaciar: function vaciar() {
      this.responsable_i = "";
      this.ruta = "";
      this.tamanio = "";
      this.fecha = "";
      this.ubicacion = "";
      this.responsable_r = "";
      this.observaciones = "";
    },
    Guardar: function Guardar(nuevo) {
      var _this3 = this;
      this.$validator.validate().then(function (result) {
        if (result) {
          axios({
            method: nuevo ? 'POST' : 'PUT',
            url: nuevo ? 'guardar/data/bitacora/resguardo/info' : 'actualizar/data/bitacora/resguardo/info',
            data: {
              id: _this3.id,
              responsable_i: _this3.responsable_i.id,
              ruta: _this3.ruta,
              tamanio: _this3.tamanio,
              fecha: _this3.fecha,
              ubicacion: _this3.ubicacion,
              responsable_r: _this3.responsable_r.id,
              observaciones: _this3.observaciones
            }
          }).then(function (response) {
            toastr.success(nuevo ? 'Guardado Correctamente !!!' : 'Actualizado Correctamente !!!');
            _this3.getData();
            _this3.cerrarModal();
          })["catch"](function (e) {
            console.error(e);
          });
        }
      });
    },
    cerrarModal: function cerrarModal() {
      this.modal = 0;
    },
    descargar: function descargar() {
      window.open('descargar/data/bitacora/resguardo/info/' + this.anio, '_blank');
    }
  },
  mounted: function mounted() {
    this.getData();
    this.getLista();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/Inventario/Accesorios.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/Inventario/Accesorios.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************/
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
      url: "ti/inventario/accesorios",
      // Tabla
      ver_modal_accesorio: 0,
      columns_accesorio: ['id', 'descripcion', 'modelo', 'marca', 'no_serie', 'cantidad', 'condicion'],
      list_accesorio: [],
      options_accesorio: {
        headings: {
          id: 'Acciones',
          descripcion: 'Descripción',
          modelo: 'Modelo',
          marca: 'Marca',
          no_serie: 'No. Serie',
          condicion: 'Estado'
        },
        // Headings,
        perPage: 10,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        // sortable: ['id', 'descripcion', 'modelo', 'marca', 'no_serie', 'condicion'],
        // filterable: ['id', 'descripcion', 'modelo', 'marca', 'no_serie', 'condicion'],
        filterByColumn: true,
        listColumns: {
          'condicion': [{
            id: 0,
            text: 'Inactivo'
          }, {
            id: 1,
            text: 'Activo'
          }, {
            id: 2,
            text: 'En resguardo'
          }, {
            id: 3,
            text: 'En sitio'
          }]
        },
        texts: config.texts
      },
      //options
      // Modal
      titulo_modal_accesorio: '',
      tipoAccion_modal_accesorio: 0,
      accesorio_modal: {}
    }; // return
  },
  //data
  computed: {},
  methods: {
    CargarAccesorios: function CargarAccesorios() {
      var _this = this;
      axios.get(this.url + "/obtener").then(function (res) {
        if (res.data.status) {
          _this.list_accesorio = res.data.accesorios;
        } else {
          _this.Error(res.data.mensaje);
        }
      });
    },
    AbrirModalAccesorio: function AbrirModalAccesorio(nuevo) {
      var model = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      this.ver_modal_accesorio = true;
      if (nuevo) {
        // Crear nuevo
        this.titulo_modal_accesorio = 'Registrar Accesorio';
        this.tipoAccion_modal_accesorio = 1;
      } else {
        // Actualizar
        this.titulo_modal_accesorio = 'Actualizar Accesorio';
        this.tipoAccion_modal_accesorio = 2;
        this.accesorio_modal.id = model.id;
        this.accesorio_modal.descripcion = model.descripcion;
        this.accesorio_modal.modelo = model.modelo;
        this.accesorio_modal.marca = model.marca;
        this.accesorio_modal.no_serie = model.no_serie;
        this.accesorio_modal.cantidad = model.cantidad;
        // console.error(this.accesorio_modal);
      } // Fin if
    },
    CerrarModalAccesorio: function CerrarModalAccesorio() {
      this.ver_modal_accesorio = false;
      _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.accesorio_modal);
    },
    GuardarAccesorio: function GuardarAccesorio(nuevo) {
      var _this2 = this;
      this.$validator.validate().then(function (res) {
        if (!res) return;
        var ms = nuevo ? "registrda" : "actualizada";
        axios.post(_this2.url + "/guardar", {
          "id": _this2.accesorio_modal.id,
          "descripcion": _this2.accesorio_modal.descripcion,
          "marca": _this2.accesorio_modal.marca,
          "modelo": _this2.accesorio_modal.modelo,
          "no_serie": _this2.accesorio_modal.no_serie,
          "cantidad": _this2.accesorio_modal.cantidad
        }).then(function (res) {
          if (res.data.status) {
            _this2.CerrarModalAccesorio();
            _this2.CargarAccesorios();
            toastr.success("Accesorio " + ms + " correctamente");
          } else {
            toastr.error(res.data.mensaje);
          }
        });
      });
    },
    // Cambia el estado(activado|desactivado)
    Activar: function Activar(accesorio, condicion) {
      var _this3 = this;
      axios.post(this.url + "/activar", {
        id: accesorio.id,
        condicion: condicion
      }).then(function (res) {
        if (res.data.status) {
          _this3.CargarAccesorios();
          toastr.success("Estado cambiado correctamente");
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    Eliminar: function Eliminar(data) {
      var _this4 = this;
      if (data.condicion > 1) {
        toastr.warning('No se puede eliminar al contar con asignacion');
      } else if (data.condicion <= 1) {
        axios.get('ti/inventario/accesorios/eliminar/' + data.id).then(function (response) {
          _this4.CargarAccesorios();
          toastr.success('Eliminado Correctamente !!!');
        })["catch"](function (e) {
          console.error(e);
        });
      }
    }
  },
  // Fin metodos
  mounted: function mounted() {
    this.CargarAccesorios();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/Inventario/Equipos.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/Inventario/Equipos.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************/
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
      url: "ti/inv/equipos",
      // Tabla
      company: 1,
      isObtener_Loading: false,
      isGuardar_Loading: false,
      ver_modal_computadoras: 0,
      columns_computadoras: ["id", "no_serie", "marca_modelo", "cpu", "ram", "almacenamiento", "tarjeta_video", "tarjeta_red", "mac", "codigo_barras", "observaciones", "cantidad", "condicion"],
      list_computadoras: [],
      options_computadoras: {
        headings: {
          id: "Acciones",
          no_serie: "No. serie",
          marca_modelo: "Marca/Modelo",
          cpu: "CPU",
          ram: "RAM",
          almacenamiento: "Almacenamiento",
          tarjeta_video: "Tarjeta de video",
          tarjeta_red: "Tarjeta de red",
          mac: "MAC",
          observaciones: "Observaciones",
          codigo_barras: "Código de barras"
        },
        // Headings,
        perPage: 10,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        filterByColumn: true,
        listColumns: {
          "condicion": [{
            id: 0,
            text: "Inactivo"
          }, {
            id: 1,
            text: "Activo"
          }, {
            id: 2,
            text: "En resguardo"
          }, {
            id: 3,
            text: "En sitio"
          }]
        },
        texts: config.texts
      },
      //options
      // Modal
      titulo_modal_computadoras: "",
      tipoAccion_modal_computadoras: 0,
      computadoras_modal: {}
    }; // return
  },
  //data
  computed: {},
  methods: {
    CargarEquipos: function CargarEquipos() {
      var _this = this;
      this.isObtener_Loading = true;
      axios.get(this.url + "/obtener/" + this.company).then(function (res) {
        _this.isObtener_Loading = false;
        if (res.data.status) {
          _this.list_computadoras = res.data.equipos;
        } else {
          _this.Error("obtener los equipos");
        }
      });
    },
    AbrirModalComputadoras: function AbrirModalComputadoras(nuevo) {
      var model = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      this.ver_modal_computadoras = true;
      if (nuevo) {
        // Crear nuevo
        this.titulo_modal_computadoras = "Registrar Equipo de Cómputo";
        this.tipoAccion_modal_computadoras = 1;
      } else {
        // Actualizar
        this.titulo_modal_computadoras = "Actualizar Equipo de Cómputo";
        this.tipoAccion_modal_computadoras = 2;
        this.computadoras_modal = model;
      } // Fin if
    },
    CerrarModalComputadoras: function CerrarModalComputadoras() {
      this.ver_modal_computadoras = false;
      _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.computadoras_modal);
    },
    GuardarComputadoras: function GuardarComputadoras(nuevo) {
      var _this2 = this;
      var x = this;
      this.$validator.validate().then(function (res) {
        if (!res) return;
        //Validar formato de MAC
        if (_this2.computadoras_modal.mac.match("^([0-9A-F]{2}[:-]){5}([0-9A-F]{2})$") == null) {
          toastr.warning("Ingresa una MAC válida");
          return;
        }
        var nurl = nuevo ? "/registrar" : "/actualizar";
        _this2.isGuardar_Loading = true;
        axios.post(_this2.url + nurl, _this2.computadoras_modal).then(function (res) {
          _this2.isGuardar_Loading = false;
          if (res.data.status) {
            toastr.success("Equipo guardado correctemente");
            _this2.CargarEquipos();
            _this2.CerrarModalComputadoras();
          } else _this2.Error("guardar el equipo");
        });
      });
    },
    descargar: function descargar() {
      window.open("ti/inv/equipos/descargar/inv/comp/" + this.company, "_blank");
    },
    Activar: function Activar(n, row) {
      var _this3 = this;
      axios.post(this.url + "/cambiarestado", {
        n: n,
        id: row.id
      }).then(function (res) {
        if (res.data.status) {
          toastr.success("Equipo guardado correctemente");
          _this3.CargarEquipos();
        } else {
          _this3.Error("cambiar estado");
        }
      });
    },
    Error: function Error(ms) {
      toastr.error("Error al " + ms);
    },
    Eliminar: function Eliminar(data) {
      var _this4 = this;
      if (data.condicion > 1) {
        toastr.warning("No se puede eliminar al contar con asignacion");
      } else if (data.condicion <= 1) {
        axios.get("ti/inv/equipos/eliminar/" + data.id).then(function (response) {
          _this4.CargarEquipos();
          toastr.success("Eliminado Correctamente !!!");
        })["catch"](function (e) {
          console.error(e);
        });
      }
    }
  },
  // Fin metodos
  mounted: function mounted() {
    this.CargarEquipos();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/Inventario/Impresion.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/Inventario/Impresion.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************/
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
      url: "ti/inventario/impresoras",
      // Tabla
      ver_modal_impresora: 0,
      columns_impresora: ['id', 'descripcion', 'modelo', 'marca', 'no_serie', 'cantidad', 'condicion', 'mac'],
      list_impresora: [],
      isObtener_Loading: false,
      isGuardar_Loading: false,
      options_impresora: {
        headings: {
          id: 'Acciones',
          descripcion: 'Descripción',
          modelo: 'Modelo',
          marca: 'Marca',
          no_serie: 'No. Serie',
          mac: "MAC",
          condicion: 'Estado'
        },
        // Headings,
        perPage: 10,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        filterByColumn: true,
        listColumns: {
          'condicion': [{
            id: 0,
            text: 'Inactivo'
          }, {
            id: 1,
            text: 'Activo'
          }, {
            id: 2,
            text: 'En resguardo'
          }, {
            id: 3,
            text: 'En sitio'
          }]
        },
        texts: config.texts
      },
      //options
      // Modal
      titulo_modal_impresora: '',
      tipoAccion_modal_impresora: 0,
      impresora_modal: {}
    }; // return
  },
  //data
  computed: {},
  methods: {
    CargarImpresoras: function CargarImpresoras() {
      var _this = this;
      this.isObtener_Loading = true;
      axios.get(this.url + "/obtener").then(function (res) {
        _this.isObtener_Loading = false;
        if (res.data.status) {
          _this.list_impresora = res.data.impresoras;
        } else {
          _this.Error(res.data.mensaje);
        }
      });
    },
    AbrirModalImpresora: function AbrirModalImpresora(nuevo) {
      var model = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      this.ver_modal_impresora = true;
      if (nuevo) {
        // Crear nuevo
        this.titulo_modal_impresora = 'Registrar Impresora';
        this.tipoAccion_modal_impresora = 1;
      } else {
        // Actualizar
        this.titulo_modal_impresora = 'Actualizar Impresora';
        this.tipoAccion_modal_impresora = 2;
        this.impresora_modal.id = model.id;
        this.impresora_modal.descripcion = model.descripcion;
        this.impresora_modal.modelo = model.modelo;
        this.impresora_modal.marca = model.marca;
        this.impresora_modal.no_serie = model.no_serie;
        this.impresora_modal.cantidad = model.cantidad;
        this.impresora_modal.mac = model.mac;
      } // Fin if
    },
    CerrarModalImpresora: function CerrarModalImpresora() {
      this.ver_modal_impresora = false;
      this.impresora_modal = {};
    },
    GuardarImpresora: function GuardarImpresora(nuevo) {
      var _this2 = this;
      this.$validator.validate().then(function (res) {
        if (!res) return;
        var ms = nuevo ? "registrda" : "actualizada";
        axios.post(_this2.url + "/guardar", {
          "id": _this2.impresora_modal.id,
          "descripcion": _this2.impresora_modal.descripcion,
          "marca": _this2.impresora_modal.marca,
          "modelo": _this2.impresora_modal.modelo,
          "no_serie": _this2.impresora_modal.no_serie,
          "cantidad": _this2.impresora_modal.cantidad,
          "mac": _this2.impresora_modal.mac
        }).then(function (res) {
          if (res.data.status) {
            _this2.CargarImpresoras();
            _this2.CerrarModalImpresora();
            toastr.success("Impresora " + ms + " correctamente");
          } else {
            toastr.error(res.data.mensaje);
          }
        });
      });
    },
    // Cambia el estado de la impresora (activado|desactivado)
    Activar: function Activar(impresora, estado) {
      var _this3 = this;
      axios.post(this.url + "/activar", {
        id: impresora.id,
        condicion: estado
      }).then(function (res) {
        if (res.data.status) {
          _this3.CargarImpresoras();
          toastr.success("Estado cambiado correctamente");
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    Eliminar: function Eliminar(data) {
      var _this4 = this;
      if (data.condicion > 1) {
        toastr.warning('No se puede eliminar al contar con asignacion');
      } else if (data.condicion <= 1) {
        axios.get('ti/inventario/impresoras/eliminar/' + data.id).then(function (response) {
          _this4.CargarImpresoras();
          toastr.success('Eliminado Correctamente !!!');
        })["catch"](function (e) {
          console.error(e);
        });
      }
    }
  },
  // Fin metodos
  mounted: function mounted() {
    this.CargarImpresoras();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/Inventario/Red.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/Inventario/Red.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************/
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
      url: "ti/inventario/red",
      // Tabla
      ver_modal_equipo_red: 0,
      columns_equipo_red: ['id', 'descripcion', 'marca', 'no_serie', 'mac', 'ip', 'observaciones', 'cantidad', 'condicion'],
      list_equipo_red: [],
      options_equipo_red: {
        headings: {
          id: 'Acciones',
          descripcion: 'Descripción',
          modelo: 'Modelo',
          marca: 'Marca',
          no_serie: 'No. Serie',
          condicion: 'Estado',
          mac: "MAC",
          ip: "IP"
        },
        // Headings,
        perPage: 10,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        // sortable: ['id', 'descripcion', 'modelo', 'marca', 'no_serie', 'condicion'],
        // filterable: ['id', 'descripcion', 'modelo', 'marca', 'no_serie', 'condicion'],
        filterByColumn: true,
        listColumns: {
          'condicion': [{
            id: 0,
            text: 'Inactivo'
          }, {
            id: 1,
            text: 'Activo'
          }, {
            id: 2,
            text: 'En resguardo'
          }, {
            id: 3,
            text: 'En sitio'
          }]
        },
        texts: config.texts
      },
      //options
      // Modal
      titulo_modal_equipo_red: '',
      tipoAccion_modal_equipo_red: 0,
      equipo_red_modal: {}
    }; // return
  },
  //data
  computed: {},
  methods: {
    CargarEquipoReds: function CargarEquipoReds() {
      var _this = this;
      axios.get(this.url + "/obtener").then(function (res) {
        if (res.data.status) {
          _this.list_equipo_red = res.data.equipo_reds;
        } else {
          _this.Error(res.data.mensaje);
        }
      });
    },
    AbrirModalEquipoRed: function AbrirModalEquipoRed(nuevo) {
      var model = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      this.ver_modal_equipo_red = true;
      if (nuevo) {
        // Crear nuevo
        this.titulo_modal_equipo_red = 'Registrar Equipo de red';
        this.tipoAccion_modal_equipo_red = 1;
      } else {
        // Actualizar
        this.titulo_modal_equipo_red = 'Actualizar Equipo de red';
        this.tipoAccion_modal_equipo_red = 2;
        this.equipo_red_modal.id = model.id;
        this.equipo_red_modal.descripcion = model.descripcion;
        this.equipo_red_modal.modelo = model.modelo;
        this.equipo_red_modal.marca = model.marca;
        this.equipo_red_modal.no_serie = model.no_serie;
        this.equipo_red_modal.mac = model.mac;
        this.equipo_red_modal.ip = model.ip;
        this.equipo_red_modal.observaciones = model.observaciones;
        this.equipo_red_modal.cantidad = model.cantidad;
        // console.error(this.equipo_red_modal);
      } // Fin if
    },
    CerrarModalEquipoRed: function CerrarModalEquipoRed() {
      this.ver_modal_equipo_red = false;
      _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.equipo_red_modal);
    },
    GuardarEquipoRed: function GuardarEquipoRed(nuevo) {
      var _this2 = this;
      this.$validator.validate().then(function (res) {
        if (!res) return;
        var ms = nuevo ? "registrda" : "actualizada";
        axios.post(_this2.url + "/guardar", {
          "id": _this2.equipo_red_modal.id,
          "descripcion": _this2.equipo_red_modal.descripcion,
          "marca": _this2.equipo_red_modal.marca,
          "no_serie": _this2.equipo_red_modal.no_serie,
          "mac": _this2.equipo_red_modal.mac,
          "ip": _this2.equipo_red_modal.ip,
          "observaciones": _this2.equipo_red_modal.observaciones,
          "cantidad": _this2.equipo_red_modal.cantidad
        }).then(function (res) {
          if (res.data.status) {
            _this2.CerrarModalEquipoRed();
            _this2.CargarEquipoReds();
            toastr.success("Equipo de red " + ms + " correctamente");
          } else {
            toastr.error(res.data.mensaje);
          }
        });
      });
    },
    // Cambia el estado(activado|desactivado)
    Activar: function Activar(red, condicion) {
      var _this3 = this;
      axios.post(this.url + "/activar", {
        id: red.id,
        condicion: condicion
      }).then(function (res) {
        if (res.data.status) {
          _this3.CargarEquipoReds();
          toastr.success("Estado cambiado correctamente");
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    Eliminar: function Eliminar(data) {
      var _this4 = this;
      if (data.condicion > 1) {
        toastr.warning('No se puede eliminar al contar con asignacion');
      } else if (data.condicion <= 1) {
        axios.get('ti/inventario/red/eliminar/' + data.id).then(function (response) {
          _this4.CargarEquipoReds();
          toastr.success('Eliminado Correctamente !!!');
        })["catch"](function (e) {
          console.error(e);
        });
      }
    }
  },
  // Fin metodos
  mounted: function mounted() {
    this.CargarEquipoReds();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/Inventario/Video.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/Inventario/Video.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************/
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
      url: "ti/inventario/video",
      // Tabla
      PermisosCRUD: {},
      isGuardar_Loading: false,
      isObtener_Loading: false,
      ver_modal_equipo_video: 0,
      columns_equipo_video: ["id", "descripcion", "no_serie", "cantidad", "condicion"],
      list_equipo_video: [],
      options_equipo_video: {
        headings: {
          id: "Acciones",
          descripcion: "Descripción",
          no_serie: "No. Serie",
          condicion: "Estado"
        },
        // Headings,
        perPage: 10,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        filterByColumn: true,
        listColumns: {
          "condicion": [{
            id: 0,
            text: "Inactivo"
          }, {
            id: 1,
            text: "Activo"
          }, {
            id: 2,
            text: "En resguardo"
          }, {
            id: 3,
            text: "En sitio"
          }]
        },
        texts: config.texts
      },
      //options
      // Modal
      titulo_modal_equipo_video: "",
      tipoAccion_modal_equipo_video: 0,
      equipo_video_modal: {}
    }; // return
  },
  //data
  computed: {},
  methods: {
    CargarEquipoVideos: function CargarEquipoVideos() {
      var _this = this;
      this.isObtener_Loading = true;
      axios.get(this.url + "/obtener").then(function (res) {
        _this.isObtener_Loading = false;
        if (res.data.status) {
          _this.list_equipo_video = res.data.equipo_video;
        } else {
          _this.Error(res.data.mensaje);
        }
      });
    },
    AbrirModalEquipoVideo: function AbrirModalEquipoVideo(nuevo) {
      var model = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      this.ver_modal_equipo_video = true;
      if (nuevo) {
        // Crear nuevo
        this.titulo_modal_equipo_video = "Registrar Equipo de vídeo";
        this.tipoAccion_modal_equipo_video = 1;
      } else {
        // Actualizar
        this.titulo_modal_equipo_video = "Actualizar Equipo de vídeo";
        this.tipoAccion_modal_equipo_video = 2;
        this.equipo_video_modal.id = model.id;
        this.equipo_video_modal.descripcion = model.descripcion;
        this.equipo_video_modal.no_serie = model.no_serie;
        this.equipo_video_modal.cantidad = model.cantidad;
      } // Fin if
    },
    CerrarModalEquipoVideo: function CerrarModalEquipoVideo() {
      this.ver_modal_equipo_video = false;
      _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.equipo_video_modal);
    },
    GuardarEquipoVideo: function GuardarEquipoVideo(nuevo) {
      var _this2 = this;
      this.$validator.validate().then(function (res) {
        if (!res) return;
        var ms = nuevo ? "registrda" : "actualizada";
        axios.post(_this2.url + "/guardar", {
          "id": _this2.equipo_video_modal.id,
          "descripcion": _this2.equipo_video_modal.descripcion,
          "no_serie": _this2.equipo_video_modal.no_serie,
          "cantidad": _this2.equipo_video_modal.cantidad
        }).then(function (res) {
          if (res.data.status) {
            _this2.CerrarModalEquipoVideo();
            _this2.CargarEquipoVideos();
            toastr.success("Equipo de vídeo " + ms + " correctamente");
          } else {
            toastr.error(res.data.mensaje);
          }
        });
      });
    },
    // Cambia el estado de la (activado|desactivado)
    Activar: function Activar(video, condicion) {
      var _this3 = this;
      axios.post(this.url + "/activar", {
        id: video.id,
        condicion: condicion
      }).then(function (res) {
        if (res.data.status) {
          _this3.CargarEquipoVideos();
          toastr.success("Estado cambiado correctamente");
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    Eliminar: function Eliminar(data) {
      var _this4 = this;
      if (data.condicion > 1) {
        toastr.warning("No se puede eliminar al contar con asignacion");
      } else if (data.condicion <= 1) {
        this.isObtener_Loading = true;
        axios.post("ti/inventario/video/eliminar/", {
          id: data.id
        }).then(function (res) {
          if (res.data.status) {
            _this4.isObtener_Loading = false;
            toastr.success("Eliminado Correctamente");
            _this4.CargarEquipoVideos();
          } else {
            toastr.error(res.data.mensaje);
          }
        });
      }
    }
  },
  // Fin metodos
  mounted: function mounted() {
    this.PermisosCRUD = _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].getCRUD(this.$route.path);
    this.CargarEquipoVideos();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/Mantenimientos/Impresoras.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/Mantenimientos/Impresoras.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
/* CAMBIAR UBICACIÓN  */
var config = (__webpack_require__(/*! ../../Herramientas/config-vuetables-client */ "./resources/assets/js/components/Herramientas/config-vuetables-client.js").call)(undefined);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      url: "ti/mtto/impresoras",
      // Tabla
      ver_modal_impresora: 0,
      columns_impresora: ["id", "descripcion", "marca_modelo", "no_serie", "ultimo_mtto", "condicion"],
      list_impresora: [],
      isObtener_Loading: false,
      isGuardar_Loading: false,
      options_impresora: {
        headings: {
          id: "Acciones",
          descripcion: "Descripción",
          no_serie: "No. Serie",
          marca_modelo: "Marca/Modelo",
          ultimo_mtto: "Ult. Mtto.",
          condicion: "Estado"
        },
        // Headings,
        perPage: 10,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        filterByColumn: true,
        listColumns: {
          "condicion": [{
            id: 0,
            text: "Inactivo"
          }, {
            id: 1,
            text: "Activo"
          }, {
            id: 2,
            text: "En resguardo"
          }, {
            id: 3,
            text: "En sitio"
          }]
        },
        texts: config.texts
      },
      //options
      // Modal
      titulo_modal_impresora: "",
      tipoAccion_modal_impresora: 0,
      impresora_modal: {
        c: "NO",
        m: "NO",
        y: "NO",
        k: "NO"
      },
      // Historial
      ver_modal_historial: false,
      isHistorial_Loading: false,
      historial_mttos: []
    }; // return
  },
  //data
  computed: {},
  methods: {
    CargarImpresoras: function CargarImpresoras() {
      var _this = this;
      this.isObtener_Loading = true;
      axios.get(this.url + "/obtener").then(function (res) {
        _this.isObtener_Loading = false;
        if (res.data.status) {
          _this.list_impresora = res.data.impresoras;
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    AbrirModalImpresora: function AbrirModalImpresora(nuevo) {
      var model = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      this.ver_modal_impresora = true;
      this.impresora_modal = {
        impresora_id: model.id,
        c: "NO",
        m: "NO",
        y: "NO",
        k: "NO"
      };
      this.titulo_modal_impresora = "Registrar Mantenimiento de impresora";
      this.tipoAccion_modal_impresora = 1;
    },
    CerrarModalImpresora: function CerrarModalImpresora() {
      this.ver_modal_impresora = false;
    },
    GuardarMtto: function GuardarMtto() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var isValid;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
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
              axios.post(_this2.url + "/guardar", {
                "impresora_id": _this2.impresora_modal.impresora_id,
                "ubicacion": _this2.impresora_modal.ubicacion,
                "total_hojas": _this2.impresora_modal.total_hojas,
                "fecha": _this2.impresora_modal.fecha,
                "c": _this2.impresora_modal.c,
                "m": _this2.impresora_modal.m,
                "y": _this2.impresora_modal.y,
                "k": _this2.impresora_modal.k,
                "observaciones": _this2.impresora_modal.observaciones
              }).then(function (res) {
                if (res.data.status) {
                  _this2.CargarImpresoras();
                  _this2.CerrarModalImpresora();
                  toastr.success("Guardado correctamente");
                } else {
                  toastr.error(res.data.mensaje);
                }
              });
            case 3:
              return _context.a(2);
          }
        }, _callee);
      }))();
    },
    Historial: function Historial(id) {
      var _this3 = this;
      this.isHistorial_Loading = true;
      this.ver_modal_historial = true;
      axios.get(this.url + "/historial/" + id).then(function (res) {
        _this3.isHistorial_Loading = false;
        if (res.data.status) {
          _this3.historial_mttos = res.data.historial;
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    CerrarModalHistorial: function CerrarModalHistorial() {
      this.ver_modal_historial = false;
      this.historial_mttos = [];
    }
  },
  // Fin metodos
  mounted: function mounted() {
    this.CargarImpresoras();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/Mantenimientos/Programa.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/Mantenimientos/Programa.vue?vue&type=script&lang=js ***!
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
      modal: 0,
      tituloModal: '',
      tipoAccion: 0,
      isLoading: false,
      company: 1,
      anio_busqueda: '',
      detalle: false,
      caiv: '',
      tipo: '',
      marca: '',
      modelo: '',
      num_serie: '',
      mes: '',
      id: 0,
      anio: '',
      empresa: '',
      listaCatalogo: [],
      tableData: [],
      columns: ['anio', 'descripcion', 'descargar'],
      options: {
        headings: {
          'anio': 'Acciones'
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
      columnsDetalle: ['data.id', 'tipo', 'data.mes', 'data.anio'],
      optionsDetalle: {
        headings: {
          'data.id': 'Acciones',
          'data.mes': 'Mes',
          'data.anio': 'Año'
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
    getDataI: function getDataI() {
      var _this = this;
      axios.get('ti/programanamtto/obtenerprogramas/' + this.company).then(function (response) {
        _this.tableData = response.data;
      })["catch"](function (e) {
        console.error(e);
      });
    },
    buscarCFW: function buscarCFW() {
      this.getDataI();
    },
    buscarCSCT: function buscarCSCT() {
      this.getDataI();
    },
    buscar: function buscar(search, loading) {
      if (this.tipo === '') {
        toastr.warning('Seleccione un tipo para realizar una busqueda');
      } else {
        if (search.length > 2) {
          var me = this;
          // FIXME: cambiar obtener equipos
          setTimeout(function () {
            axios.post('get/material/ti/descripcion/programa', {
              des: search,
              tipo: me.tipo
            }).then(function (response) {
              me.listaCatalogo = response.data;
            })["catch"](function (e) {
              console.error(e);
            });
          }, 1000);
        }
      }
    },
    asignar: function asignar() {
      this.marca = this.caiv.marca;
      this.modelo = this.caiv.modelo;
      this.num_serie = this.caiv.no_serie;
    },
    vaciar: function vaciar() {
      this.caiv = "";
      this.tipo = "";
      this.marca = "";
      this.modelo = "";
      this.num_serie = "";
      this.mes = "";
      this.anio = "";
      this.empresa = "";
    },
    abrirModal: function abrirModal(edo) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      if (edo == 1) {
        this.vaciar();
        this.modal = 1;
        this.tituloModal = 'Guardar';
        this.tipoAccion = 1;
      } else if (edo == 2) {
        this.vaciar();
        this.modal = 1;
        this.tituloModal = 'Actualizar';
        this.tipoAccion = 2;
        this.caiv = {
          id: data['data']['caiv'],
          descripcion: data['tipo'],
          marca: data['data']['marca'],
          modelo: data['data']['modelo'],
          no_serie: data['data']['num_serie']
        };
        this.id = data['data']['id'];
        this.tipo = data['data']['tipo'];
        this.marca = data['data']['marca'];
        this.modelo = data['data']['modelo'];
        this.num_serie = data['data']['num_serie'];
        this.mes = data['data']['mes'];
        this.anio = data['data']['anio'];
        this.empresa = data['data']['empresa'];
      }
    },
    cerrarModal: function cerrarModal() {
      this.modal = 0;
    },
    descargar: function descargar(anio) {
      window.open('ti/programanamtto/descargar/' + anio + '&' + this.company, '_blank');
    },
    Guardar: function Guardar(nuevo) {
      var _this2 = this;
      this.$validator.validate().then(function (result) {
        if (result) {
          _this2.isLoading = true;
          axios({
            method: nuevo ? 'POST' : 'PUT',
            url: nuevo ? 'ti/programanamtto/guardar' : 'ti/programanamtto/actualizar',
            data: {
              id: _this2.id,
              caiv: _this2.caiv.id,
              tipo: _this2.tipo,
              marca: _this2.marca,
              modelo: _this2.modelo,
              num_serie: _this2.num_serie,
              mes: _this2.mes,
              anio: _this2.anio,
              empresa: _this2.empresa
            }
          }).then(function (response) {
            toastr.success(nuevo ? 'Guardado Correctamente' : 'Actualizado Correctamente');
            _this2.getDataI();
            _this2.cerrarModal();
            if (!nuevo) {
              _this2.verdetalle(_this2.anio_busqueda);
            }
            _this2.isLoading = false;
          })["catch"](function (e) {
            _this2.isLoading = false;
            console.error(e);
          });
        }
      });
    },
    verdetalle: function verdetalle(anio) {
      var _this3 = this;
      this.anio_busqueda = anio;
      axios.get('ti/programanamtto/obtenerequipos' + anio + '&' + this.company).then(function (response) {
        _this3.detalle = true;
        _this3.tableDataDetalle = response.data;
      })["catch"](function (e) {
        console.error();
      });
    },
    atras: function atras() {
      this.detalle = false;
    },
    eliminar: function eliminar(id) {
      var _this4 = this;
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
          axios.get('ti/programanamtto/eliminar/' + id).then(function (response) {
            _this4.verdetalle(_this4.anio_busqueda);
          })["catch"](function (e) {
            console.error();
          });
        }
      });
    }
  },
  mounted: function mounted() {
    this.getDataI();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/Mantenimientos/ReportePreventivo.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/Mantenimientos/ReportePreventivo.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************/
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
      url: "ti/mtto/preventivo",
      list_empleados: [],
      editar: true,
      // Tabla 
      ver_modal_mtto: 0,
      tipo_equipo_buscar: 1,
      columns_mtto: ["mtto.id", "mtto.tipo_equipo", "equipo.no_serie", "mtto.fecha", "mtto.actividades", "mtto.empleado_sigado", "mtto.empelado_revisa"],
      list_mtto: [],
      options_mtto: {
        headings: {
          "mtto.id": "Acciones",
          "mtto.tipo_equipo": "Tipo",
          "equipo.no_serie": "No. Serie",
          "mtto.fecha": "Fecha",
          "mtto.actividades": "Actividades",
          "mtto.empleado_sigado": "Responsable",
          "mtto.empelado_revisa": "Autorizó"
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
      titulo_modal_mtto: '',
      tipoAccion_modal_mtto: 0,
      mtto_modal: {
        equipo: {}
      },
      // Modal equipos
      list_consumibles_checked: [],
      list_consumibles: [],
      isConsumibles_loading: false,
      ver_modal_equipos: false,
      columns_equipos: ["no_serie", "marca_modelo", "descripcion", "tipo"],
      list_equipos: [],
      options_equipos: {
        perPage: 10,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        filterByColumn: true,
        texts: config.texts,
        listColumns: {
          'tipo': [{
            id: 1,
            text: 'Cómputo'
          }, {
            id: 2,
            text: 'Impresión'
          }, {
            id: 3,
            text: 'Red'
          }]
        }
      } //options 
    }; // return
  },
  //data
  computed: {},
  methods: {
    AbrirModalMtto: function AbrirModalMtto(nuevo) {
      var _this = this;
      var model = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      // Cargar empleados
      axios.get(this.url + "/obtenerpersonal").then(function (res) {
        if (res.data.status) {
          _this.list_empleados = res.data.empleados;
        } else {
          toastr.error(res.data.mensaje);
        }
      });
      this.ver_modal_mtto = true;
      if (nuevo) {
        this.editar = true;
        this.ObtenerConsumibles();
        // Mostrar todos los consumibles sin checar
        // Crear nuevo
        this.titulo_modal_mtto = 'Registrar Mantenimiento';
        this.tipoAccion_modal_mtto = 1;
      } else {
        this.editar = false;
        // Actualizar
        this.titulo_modal_mtto = 'Actualizar Mantenimiento';
        this.tipoAccion_modal_mtto = 2;
        this.mtto_modal.equipo.no_serie = model.equipo.no_serie;
        this.mtto_modal.equipo.marca_modelo = model.equipo.marca_modelo;
        this.mtto_modal.equipo.descripcion = model.equipo.descripcion;
        this.mtto_modal.fecha = model.mtto.fecha;
        this.mtto_modal.hora_inicio = model.mtto.hora_inicio;
        this.mtto_modal.hora_termino = model.mtto.hora_final;
        this.mtto_modal.empleado_realizo = {
          id: model.mtto.empleado_asignado,
          nombre: model.mtto.empleado_sigado
        };
        this.mtto_modal.activades = model.mtto.actividades;
        this.mtto_modal.observaciones = model.mtto.observaciones;
        this.mtto_modal.empleado_valido = {
          id: model.mtto.empleado_autoriza,
          nombre: model.mtto.empelado_revisa
        };
        // Activar consumibles.  CAMBIAR
        this.list_consumibles_checked = model.consumibles;
      }
    },
    CerrarModalMtto: function CerrarModalMtto() {
      this.ver_modal_mtto = false;
      this.mtto_modal = {
        equipo: {}
      };
    },
    /**
     * Cargar los consumibles de los mantenimientos
     */
    ObtenerConsumibles: function ObtenerConsumibles() {
      var _this2 = this;
      var list_checked = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      this.isConsumibles_loading = true;
      axios.get(this.url + "/obtenerconsumibles").then(function (res) {
        _this2.isConsumibles_loading = false;
        if (res.data.status) {
          var aux = [];
          _this2.list_consumibles = res.data.consumibles;
          _this2.list_consumibles.forEach(function (c) {
            aux.push({
              "id": c.id,
              "checked": false
            });
          });
          _this2.list_consumibles_checked = aux;
        } else {
          toast.errror(res.data.mensaje);
        }
      });
    },
    /**
     * Muestra todos los equipos para su búqueda
     */
    AbrirModalEquipos: function AbrirModalEquipos() {
      var _this3 = this;
      this.ver_modal_equipos = true;
      // Buscar equipos
      axios.get(this.url + "/obtenerequipos/" + this.tipo_equipo_buscar).then(function (res) {
        if (res.data.status) {
          _this3.list_equipos = res.data.equipos;
        } else {
          toast.error(res.data.mensaje);
        }
      });
    },
    CerrarModalEquipos: function CerrarModalEquipos() {
      this.ver_modal_equipos = 0;
    },
    /**
     * Selecciona el equipo
     */
    SeleccionarEquipo: function SeleccionarEquipo(data) {
      var equipo = data.row;
      console.error(data.row);
      this.mtto_modal.equipo = {
        id: equipo.id,
        no_serie: equipo.no_serie,
        marca_modelo: equipo.marca_modelo,
        descripcion: equipo.descripcion,
        tipo: equipo.tipo
      };
      this.ver_modal_equipos = false;
    },
    /**
     * Guardar mantenimiento
     */
    GuardarMtto: function GuardarMtto(nuevo) {
      var _this4 = this;
      this.$validator.validate().then(function (isValid) {
        if (!isValid) {
          Swal.fire({
            title: 'Llena todos los campos, padre santo',
            text: '¿Acaso eres de #Cantidad?',
            imageUrl: 'https://i.insider.com/5d9b47375d21aa31517a1c09?width=1000&format=jpeg&auto=webp',
            imageWidth: 300,
            imageHeight: 150,
            imageAlt: 'No se ve dx'
          });
          return;
        }
        if (_this4.mtto_modal.equipo.id == null) {
          toastr.warning("Weeee, te falta el equipo");
          return;
        }
        _this4.isMtto_loading = true;

        //Obtener Refacciones
        var aux_ids = _this4.list_consumibles_checked.filter(function (c) {
          return c.checked;
        });
        var ms = "";
        aux_ids.forEach(function (c) {
          ms += c.id + "&";
        });
        var data = new FormData();
        if (!nuevo) data.append("id", _this4.mtto_modal.id);
        data.append("fecha", _this4.mtto_modal.fecha);
        data.append("tipo_equipo", _this4.mtto_modal.equipo.tipo);
        data.append("equipo_id", _this4.mtto_modal.equipo.id);
        data.append("hora_inicio", _this4.mtto_modal.hora_inicio);
        data.append("hora_final", _this4.mtto_modal.hora_termino);
        data.append("empleado_asignado", _this4.mtto_modal.empleado_realizo.id);
        data.append("empleado_autoriza", _this4.mtto_modal.empleado_valido.id);
        data.append("actividades", _this4.mtto_modal.activades);
        data.append("observaciones", _this4.mtto_modal.observaciones);
        data.append("list_consumibles", ms);
        axios.post(_this4.url + "/guardar", data).then(function (res) {
          _this4.isMtto_loading = false;
          if (res.data.status) {
            toastr.success("Registrado correctamente");
            _this4.CerrarModalMtto();
            _this4.ObtenerMttos();
          } else {
            toastr.error(res.data.mensaje);
          }
        });
      });
    },
    /**
     * Obtiene los mantenimientos
     */
    ObtenerMttos: function ObtenerMttos() {
      var _this5 = this;
      this.isMttos_loading = true;
      axios.get(this.url + "/obtener").then(function (res) {
        _this5.isMttos_loading = true;
        if (res.data.status) {
          _this5.list_mtto = res.data.mantenimientos;
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    /**
     * Registra un nuevo cosumible
     */
    NuevoConsumible: function NuevoConsumible() {
      var _this6 = this;
      Swal.fire({
        title: "Registrar Consumible/Refacción",
        input: "text",
        showCancelButton: true,
        confirmButtonText: "Guardar",
        showLoaderOnConfirm: true
      }).then(function (result) {
        if (result.value != null) {
          if (result.value.length >= 3) {
            axios.post(_this6.url + "registrarconsumible", {
              nombre: result.value
            }).then(function (res) {
              if (res.data.status) {
                toastr.success("Registrado");
                _this6.ObtenerConsumibles();
              } else {
                toast.error(res.data.mensaje);
              }
            });
          }
        }
      });
    },
    /**
     * Generar Reporte en PDF
     */
    Reporte: function Reporte(mtto) {
      window.open(this.url + "/reporte/" + mtto.id, "_blank");
    }
  },
  // Fin metodos
  mounted: function mounted() {
    this.ObtenerMttos();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/MatrizPorPuesto.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/MatrizPorPuesto.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Herramientas/utilerias.js */ "./resources/assets/js/components/Herramientas/utilerias.js");
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
      //// MatrizRequisitos
      url_matrizrequisitos: "ti/matrizrequisitos",
      tipoAccion_matrizrequisitos: 1,
      tipoCardMatrizRequisitos: 1,
      list_puestos: [],
      PermisosCRUD: {},
      ver_modal_matrizrequisitos: false,
      tituloModal_matrizrequisitos: "",
      matrizrequisitos_id: 0,
      isGuardarmatrizrequisitos_loading: false,
      isObtenermatrizrequisitos_loading: false,
      columns_matrizrequisitos: ["id", "puesto", "puesto_jefe", "software", "equipo", "accesorios", "impresora", "red", "otro"],
      list_matrizrequisitos: [],
      matrizrequisitos: {},
      options_matrizrequisitos: {
        headings: {
          id: "Acciones",
          puesto_id: "Puesto",
          puesto_jefe_id: "Jefatura del puesto",
          software: "Software",
          equipo: "Características del equipo",
          accesorios: "Accesorios",
          impresora: "Impresora",
          red: "Red",
          otro: "Otro"
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
    ObtenerMatrizRequisitos: function ObtenerMatrizRequisitos() {
      var _this = this;
      this.isObtenermatrizrequisitos_loading = true;
      axios.get(this.url_matrizrequisitos + "/obtener").then(function (res) {
        _this.isObtenermatrizrequisitos_loading = false;
        if (res.data.status) {
          _this.list_matrizrequisitos = res.data.matrizrequisitos;
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    /**
     * Abrir modal MatrizRequisitos
     */
    AbrirModalMatrizRequisitos: function AbrirModalMatrizRequisitos(nuevo) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.ObtenerPuestos();
      this.ver_modal_matrizrequisitos = true;
      if (nuevo) {
        this.tituloModal_matrizrequisitos = "Registrar Matriz de Requisitos";
        this.tipoAccion_matrizrequisitos = 1;
      } else {
        this.tituloModal_matrizrequisitos = "Actualizar Matriz de Requisitos";
        this.tipoAccion_matrizrequisitos = 2;
        this.matrizrequisitos = _objectSpread({}, data);
        this.matrizrequisitos.puesto_jefe = {
          id: data.puesto_jefe_id,
          nombre: data.puesto_jefe
        };
      }
    },
    /**
     * Obtener todos los puestos
     */
    ObtenerPuestos: function ObtenerPuestos() {
      var _this2 = this;
      axios.get("generales/puestos").then(function (res) {
        if (res.data.status) {
          _this2.list_puestos = res.data.puestos;
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    /**
     * Registrar MatrizRequisitos
     */
    RegistrarMatrizRequisitos: function RegistrarMatrizRequisitos(nuevo) {
      var _this3 = this;
      this.$validator.validate().then(function (isValid) {
        if (!isValid) return;
        var data = new FormData();
        if (!nuevo) data.append("id", _this3.matrizrequisitos.id);
        data.append("puesto", _this3.matrizrequisitos.puesto);
        data.append("puesto_jefe_id", _this3.matrizrequisitos.puesto_jefe.id);
        data.append("software", _this3.matrizrequisitos.software);
        data.append("equipo", _this3.matrizrequisitos.equipo);
        data.append("accesorios", _this3.matrizrequisitos.accesorios);
        data.append("impresora", _this3.matrizrequisitos.impresora);
        data.append("red", _this3.matrizrequisitos.red);
        data.append("otro", _this3.matrizrequisitos.otro);
        _this3.isGuardarmatrizrequisitos_loading = true;
        axios.post(_this3.url_matrizrequisitos + "/guardar", data).then(function (res) {
          _this3.isGuardarmatrizrequisitos_loading = false;
          if (res.data.status) {
            toastr.success("Guardado correctamente");
            _this3.ObtenerMatrizRequisitos();
            _this3.CerrarModalMatrizRequisitos();
          } else {
            toastr.error(res.data.mensaje);
          }
        });
      });
    },
    Descargar: function Descargar() {
      window.open(this.url_matrizrequisitos + "/descargar");
    },
    /**
     * Cerrar modal
     */
    CerrarModalMatrizRequisitos: function CerrarModalMatrizRequisitos() {
      this.ver_modal_matrizrequisitos = false;
      this.matrizrequisitos = {};
    }
  },
  mounted: function mounted() {
    this.PermisosCRUD = _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].getCRUD(this.$route.path);
    this.ObtenerMatrizRequisitos();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/PropuestaEquipo.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/PropuestaEquipo.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Herramientas/utilerias.js */ "./resources/assets/js/components/Herramientas/utilerias.js");
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
      //// propuesta
      url_propuesta: "ti/propuesta",
      tipoAccion_propuesta: 1,
      tipoCardpropuesta: 1,
      PermisosCRUD: {},
      ver_modal_propuesta: false,
      tituloModal_propuesta: "",
      propuesta_id: 0,
      isGuardarpropuesta_loading: false,
      isObtenerpropuesta_loading: false,
      columns_propuesta: ["id", "fecha", "puesto_nombre", "necesidad_especial", "tipo", "marca", "modelo", "descargar"],
      list_propuesta: [],
      list_puestos: [],
      propuesta: {
        tipo: 1,
        puesto: {}
      },
      options_propuesta: {
        headings: {
          id: "Acciones",
          fecha: "Fecha",
          necesidad_especial: "Necesidad Especial",
          tipo: "Tipo",
          marca: "Marca",
          modelo: "Modelo",
          puesto_nombre: "Puesto",
          accesorios: "Accesorios Adicionales"
        },
        perPage: 10,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        filterByColumn: true,
        texts: config.texts
      },
      //// cotizacion
      url_cotizacion: "ti/cotizacion",
      tipoAccion_cotizacion: 1,
      tipoCardcotizacion: 1,
      ver_modal_cotizacion: false,
      tituloModal_cotizacion: "",
      cotizacion_id: 0,
      isGuardarcotizacion_loading: false,
      isObtenercotizacion_loading: false,
      columns_cotizacion: ["proveedor", "marca", "costo", "forma_pago"],
      list_cotizacion: [],
      cotizacion: {},
      options_cotizacion: {
        headings: {
          proveedor: "Proveedor",
          marca: "Marca",
          costo: "Costo",
          forma_pago: "Forma de pago"
        },
        perPage: 10,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        filterable: [],
        sortable: [],
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
    Obtenerpropuesta: function Obtenerpropuesta() {
      var _this = this;
      this.isObtenerpropuesta_loading = true;
      axios.get(this.url_propuesta + "/obtener").then(function (res) {
        _this.isObtenerpropuesta_loading = false;
        if (res.data.status) {
          _this.list_propuesta = res.data.propuestas;
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    ObtenerPuestos: function ObtenerPuestos() {
      var _this2 = this;
      axios.get("generales/puestos").then(function (res) {
        if (res.data.status) {
          _this2.list_puestos = res.data.puestos;
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    /**
     * Abrir modal propuesta
     */
    AbrirModalpropuesta: function AbrirModalpropuesta(nuevo) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.ObtenerPuestos();
      this.ver_modal_propuesta = true;
      if (nuevo) {
        this.tituloModal_propuesta = "Registrar Propuesta de equipo";
        this.tipoAccion_propuesta = 1;
      } else {
        this.tituloModal_propuesta = "Actualizar Propuesta de equipo";
        this.tipoAccion_propuesta = 2;
        this.propuesta = _objectSpread(_objectSpread({}, data), {}, {
          puesto: {
            id: data.puesto_id,
            nombre: data.puesto_nombre
          }
        });
        this.Obtenercotizacion();
      }
    },
    /**
     * Registrar propuesta
     */
    Registrarpropuesta: function Registrarpropuesta(nuevo) {
      var _this3 = this;
      this.$validator.validate().then(function (isValid) {
        if (!isValid) return;
        if (_this3.propuesta.puesto.id == null) {
          toastr.warning("Seleccione un puesto");
          return;
        }
        var data = new FormData();
        if (!nuevo) data.append("id", _this3.propuesta.id);
        data.append("fecha", _this3.propuesta.fecha);
        data.append("necesidad_especial", _this3.propuesta.necesidad_especial);
        data.append("tipo", _this3.propuesta.tipo);
        data.append("marca", _this3.propuesta.marca);
        data.append("puesto_id", _this3.propuesta.puesto.id);
        data.append("modelo", _this3.propuesta.modelo);
        data.append("almacenamiento", _this3.propuesta.almacenamiento);
        data.append("procesador", _this3.propuesta.procesador);
        data.append("ram", _this3.propuesta.ram);
        data.append("comentarios", _this3.propuesta.comentarios);
        data.append("accesorios", _this3.propuesta.accesorios);
        _this3.isGuardarpropuesta_loading = true;
        axios.post(_this3.url_propuesta + "/guardar", data).then(function (res) {
          _this3.isGuardarpropuesta_loading = false;
          if (res.data.status) {
            toastr.success("Guardado correctamente");
            _this3.Obtenerpropuesta();
            _this3.CerrarModalpropuesta();
          } else {
            toastr.error(res.data.mensaje);
          }
        });
      });
    },
    /**
     * Cerrar modal
     */
    CerrarModalpropuesta: function CerrarModalpropuesta() {
      this.ver_modal_propuesta = false;
      this.propuesta = {};
    },
    // Metodos
    /**
     * Obtener todos los registros
     */
    Obtenercotizacion: function Obtenercotizacion() {
      var _this4 = this;
      this.isObtenercotizacion_loading = true;
      axios.get(this.url_cotizacion + "/obtener/" + this.propuesta.id).then(function (res) {
        _this4.isObtenercotizacion_loading = false;
        if (res.data.status) {
          _this4.list_cotizacion = res.data.cotizacion;
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    /**
     * Abrir modal cotizacion
     */
    AbrirModalcotizacion: function AbrirModalcotizacion(nuevo) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.ver_modal_cotizacion = true;
      if (nuevo) {
        this.tituloModal_cotizacion = "Registrar Cotizaciones";
        this.tipoAccion_cotizacion = 1;
      } else {
        this.tituloModal_cotizacion = "Actualizar Cotizaciones";
        this.tipoAccion_cotizacion = 2;
        this.cotizacion = _objectSpread({}, data);
      }
    },
    /**
     * Registrar cotizacion
     */
    Registrarcotizacion: function Registrarcotizacion(nuevo) {
      var _this5 = this;
      this.$validator.validate().then(function (isValid) {
        if (!isValid) return;
        var data = new FormData();
        if (!nuevo) data.append("id", _this5.cotizacion.id);
        data.append("propuesta_id", _this5.propuesta.id);
        data.append("proveedor", _this5.cotizacion.proveedor);
        data.append("marca", _this5.cotizacion.marca);
        data.append("costo", _this5.cotizacion.costo);
        data.append("forma_pago", _this5.cotizacion.forma_pago);
        _this5.isGuardarcotizacion_loading = true;
        axios.post(_this5.url_cotizacion + "/guardar", data).then(function (res) {
          _this5.isGuardarcotizacion_loading = false;
          if (res.data.status) {
            toastr.success("Guardado correctamente");
            _this5.Obtenercotizacion();
            _this5.CerrarModalcotizacion();
          } else {
            toastr.error(res.data.mensaje);
          }
        });
      });
    },
    /**
     * Cerrar modal
     */
    CerrarModalcotizacion: function CerrarModalcotizacion() {
      this.ver_modal_cotizacion = false;
      this.cotizacion = {};
    },
    /**
     * Descargar propuesta
     */
    Descargar: function Descargar(id) {
      window.open(this.url_propuesta + "/descargar/" + id);
    }
  },
  mounted: function mounted() {
    this.PermisosCRUD = _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].getCRUD(this.$route.path);
    this.Obtenerpropuesta();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/Servicios/Historico.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/Servicios/Historico.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************/
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
      url: "ti/historico",
      isObtenerLoading: false,
      isGuardarLoading: false,
      modal: 0,
      tituloModal: "",
      tipoAccion: 0,
      listaEmpleados: [],
      id: 0,
      tipo: "",
      usuario: "",
      problema_servicio: "",
      fecha_reporte: "",
      solucion: "",
      fecha_solucion: "",
      reincidencia: "",
      realiza: {},
      list_empleados: [],
      list_historico: [],
      columns: ["id", "tipo", "nombre_usuario", "problema_servicio", "fecha_reporte", "fecha_solucion", "empleado_realiza"],
      reporte_inicio: "",
      reporte_fin: "",
      anio: 2022,
      options: {
        headings: {
          "id": "Acciones",
          "empleado_realiza": "Realiza"
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
    /**
     * Obtiene todos los mantenimientos registrados
     */
    ObtenerHistoricos: function ObtenerHistoricos() {
      var _this = this;
      this.isObtenerLoading = true;
      axios.get(this.url + "/obtener").then(function (res) {
        _this.isObtenerLoading = false;
        if (res.data.status) {
          _this.list_historico = res.data.historico;
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    AbrirModalHistorico: function AbrirModalHistorico(nuevo) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      this.ObtenerEmpleados();
      this.modal = 1;
      if (nuevo) {
        this.tituloModal = "GuardarHistorico";
        this.tipoAccion = 1;
      } else {
        this.tituloModal = "Actualizar";
        this.tipoAccion = 2;
        this.id = data["id"];
        this.tipo = data["tipo"];
        this.usuario = data["nombre_usuario"];
        this.problema_servicio = data["problema_servicio"];
        this.fecha_reporte = data["fecha_reporte"];
        this.solucion = data["solucion"];
        this.fecha_solucion = data["fecha_solucion"];
        this.reincidencia = data["reincidencia"];
        this.realiza = {
          id: data["empleado_realiza_id"],
          nombre: data["empleado_realiza"]
        };
      }
    },
    CerrarModalHistorico: function CerrarModalHistorico() {
      this.vaciar();
      this.modal = 0;
    },
    /**
     * Limpiar modal
     */
    vaciar: function vaciar() {
      this.tipo = "";
      this.usuario = "";
      this.problema_servicio = "";
      this.fecha_reporte = "";
      this.solucion = "";
      this.fecha_solucion = "";
      this.reincidencia = "";
    },
    /**
     * Guardar el registro
     */
    GuardarHistorico: function GuardarHistorico(nuevo) {
      var _this2 = this;
      this.$validator.validate().then(function (isValid) {
        if (!isValid) return;
        _this2.isGuardarLoading = true;
        var data = new FormData();
        if (!nuevo) data.append("id", _this2.id);
        data.append("tipo", _this2.tipo);
        data.append("empleado_id", 0);
        data.append("nombre_usuario", _this2.usuario);
        data.append("problema_servicio", _this2.problema_servicio);
        data.append("fecha_reporte", _this2.fecha_reporte);
        data.append("solucion", _this2.solucion);
        data.append("fecha_solucion", _this2.fecha_solucion);
        data.append("reincidencia", _this2.reincidencia);
        data.append("empleado_realiza_id", _this2.realiza.id);
        axios.post(_this2.url + "/guardar", data).then(function (res) {
          _this2.isGuardarLoading = false;
          if (res.data.status) {
            toastr.success("Guardado Correctamente");
            _this2.CerrarModalHistorico();
            _this2.ObtenerHistoricos();
          } else {
            toastr.error(res.data.mensaje);
          }
        });
      });
    },
    /**
     * Eliminar registro
     */
    Eliminar: function Eliminar(id) {
      var _this3 = this;
      this.isObtenerLoading = true;
      axios.post(this.url + "/eliminar", {
        id: id
      }).then(function (res) {
        _this3.isObtenerLoading = false;
        if (res.data.status) {
          toastr.success("Eliminado Correctamente");
          _this3.ObtenerHistoricos();
        } else {
          toastr.error(res.data);
        }
      });
    },
    /**
     * Obtiene todos los empleados
     */
    ObtenerEmpleados: function ObtenerEmpleados() {
      var _this4 = this;
      axios.get("generales/empleadoactivos").then(function (res) {
        if (res.data.status) {
          _this4.list_empleados = res.data.empleados;
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    /**
     * Descargar historico
     */
    DescargarHistorico: function DescargarHistorico() {
      window.open("".concat(this.url, "/descargar/").concat(this.anio));
    }
  },
  mounted: function mounted() {
    this.ObtenerHistoricos();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/Vales/Resguardo.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/Vales/Resguardo.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var config = (__webpack_require__(/*! ../../Herramientas/config-vuetables-client */ "./resources/assets/js/components/Herramientas/config-vuetables-client.js").call)(undefined);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      listado_data_accesorios: [],
      list_accesorios: [],
      isObtenerDatos_Loading: false,
      url: "ti/resguardos",
      isGuardarLoading: false,
      empresa: 1,
      editar: true,
      list_equipos: [],
      error: "",
      listaCatalogo: [],
      resguardo: {
        id: 0,
        fecha: "",
        fecha_retorno: "",
        tipo: 0,
        caiv: "",
        observacion_uno: "",
        observacion_dos: "",
        check: false,
        cantidad: "",
        cantidad_temporal: "",
        empresa: "1",
        observacion_retorno: "",
        cantidad_defectuoso: 0,
        cantidad_accesorio: "",
        cantidad_accesorio_temporal: "",
        accesorios_data: ""
      },
      empleado_recibe: "",
      empleado_entrega: "",
      listaEmpleados: [],
      listaEmpleadosEntrega: [],
      modal: 0,
      tipoAccion: 0,
      tituloModal: "",
      list_vales: [],
      columns_vales: ["id", "fecha", "descripcion", "tipo", "observacion_dos", "cantidad", "empleado_r", "autorizado", "estado", "fecha_retorno", "descargar"],
      options_vales: {
        headings: {
          "id": "Acciones",
          "fecha": "Fecha",
          "accesorios": "Accesorios",
          "observacion_dos": "Observaciones entrega",
          "cantidad": "Cantidad",
          "empleado_r": "Usuario asignado",
          "estado": "Estado",
          "tipo": "Tipo",
          "autorizado": "Autorizado"
        },
        // Headings,
        perPage: 10,
        perPageValues: [],
        skin: config.skin,
        isObtenerEquipos_loading: false,
        list_equipos: [],
        sortIcon: config.sortIcon,
        filterByColumn: true,
        listColumns: {
          "estado": [{
            id: 1,
            text: "En resguardo"
          }, {
            id: 2,
            text: "Retornado"
          }],
          "tipo": [{
            id: 1,
            text: "Computo"
          }, {
            id: 2,
            text: "Accesorios"
          }, {
            id: 3,
            text: "Impresión"
          }, {
            id: 4,
            text: "Video"
          }]
        },
        texts: config.texts
      },
      //options
      // Modal autorizar
      modal_autorizar: false,
      empleado_autoriza: "",
      mostrar_qr_autorizar: false
    };
  },
  methods: {
    CargarDatos: function CargarDatos(empresa) {
      this.empresa = empresa;
      this.CargarDatosAux();
    },
    CargarDatosAux: function CargarDatosAux() {
      var _this = this;
      this.isObtenerDatos_Loading = true;
      axios.get(this.url + "/obtener/" + this.empresa).then(function (res) {
        _this.isObtenerDatos_Loading = false;
        if (res.data.status) {
          _this.list_vales = res.data.resguardos;
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    /**
     * Obtener elos empleados de la empresa seleccionada
     */
    ObtenerEmpleados: function ObtenerEmpleados() {
      var _this2 = this;
      axios.get("generales/empleadoactivos/").then(function (res) {
        if (res.data.status) {
          _this2.listaEmpleados = res.data.empleados;
          axios.get("generales/empleadoactual").then(function (res2) {
            if (res2.data.status) {
              if (res2.data.empleados[0].id == 150) _this2.listaEmpleadosEntrega = _toConsumableArray(_this2.listaEmpleados);else {
                _this2.listaEmpleadosEntrega = res2.data.empleados;
                _this2.empleado_entrega = res2.data.empleados[0];
              }
            } else {
              toastr.error(res2.data.mensaje);
            }
          });
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    /**
     * Obtener lista de accesorios
     */
    ObtenerAccesorios: function ObtenerAccesorios() {
      var _this3 = this;
      axios.get(this.url + "/obteneraccesorios").then(function (res) {
        if (res.data.status) {
          _this3.list_accesorios = res.data.accesorios;
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    AbrirModal: function AbrirModal(nuevo) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      this.ObtenerEmpleados();
      this.ObtenerAccesorios();
      this.modal = 1;
      this.editar = nuevo;
      if (nuevo) {
        this.tituloModal = "Registrar resguardo";
        this.tipoAccion = 1;
      } else {
        this.tituloModal = "Actualizar resguardo";
        this.tipoAccion = 2;
        this.resguardo = _objectSpread({}, data);
        this.resguardo.caiv = {
          id: data.caiv,
          descripcion: data.descripcion,
          cantidad: data.cantidad
        };
        this.empleado_recibe = {
          id: data.empleado_recibe,
          nombre: data.empleado_r
        };
        this.empleado_entrega = {
          id: data.empleado_entrega,
          nombre: data.empleado_e
        };
        var asd = [];
        if (data.accesorios_listado != []) asd = [];else asd = JSON.parse(JSON.parse(data.accesorios_listado));
        this.listado_data_accesorios = asd;
      }
    },
    CerrarModal: function CerrarModal() {
      this.modal = 0;
      this.resguardo = {
        empleado_recibe: {},
        empleado_entrega: {}
      };
      this.listado_data_accesorios = [];
      this.empleado_recibe = "";
    },
    onInit: function onInit(promise) {
      var _this4 = this;
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
                _this4.error = "ERROR: you need to grant camera access permisson";
              } else if (_t.name === 'NotFoundError') {
                _this4.error = "ERROR: no camera on this device";
              } else if (_t.name === 'NotSupportedError') {
                _this4.error = "ERROR: secure context required (HTTPS, localhost)";
              } else if (_t.name === 'NotReadableError') {
                _this4.error = "ERROR: is the camera already in use?";
              } else if (_t.name === 'OverconstrainedError') {
                _this4.error = "ERROR: installed cameras are not suitable";
              } else if (_t.name === 'StreamApiNotSupportedError') {
                _this4.error = "ERROR: Stream API is not supported in this browser";
              }
            case 3:
              return _context.a(2);
          }
        }, _callee, null, [[0, 2]]);
      }))();
    },
    onDecodeAutorizar: function onDecodeAutorizar(result) {
      var _this5 = this;
      var dts = result.split("|");
      if (dts.length != 2) {
        toastr.warning("Nope");
        return;
      }
      var id = dts[0];
      var nombre = dts[1];
      this.empleado_autoriza = nombre;
      axios.post("ti/resguardo/autorizar", {
        "empleado_id": id,
        "resguardo_id": this.id_autoriza
      }).then(function (res) {
        if (res.data.status) {
          toastr.success("Autorizado correctamente");
          setTimeout(function () {
            _this5.CerrarModalAutorizar();
            _this5.CargarDatosAux();
          }, 2000);
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    /**
     * Guardar vale de resguardo
     */
    GuardarResguardo: function GuardarResguardo() {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var isValid, data;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              _context2.n = 1;
              return _this6.$validator.validate();
            case 1:
              isValid = _context2.v;
              if (isValid) {
                _context2.n = 2;
                break;
              }
              return _context2.a(2);
            case 2:
              _this6.isGuardarLoading = true;
              data = new FormData();
              data.append("fecha", _this6.resguardo.fecha);
              data.append("tipo", _this6.resguardo.tipo);
              data.append("observacion_uno", _this6.resguardo.observacion_uno);
              data.append("observacion_dos", _this6.resguardo.observacion_dos);
              data.append("empleado_recibe", _this6.empleado_recibe.id);
              data.append("empleado_entrega", _this6.empleado_entrega.id);
              data.append("caiv", _this6.resguardo.caiv.id);
              data.append("cantidad", _this6.resguardo.cantidad);
              data.append("empresa", _this6.empresa);
              data.append("accesorios", JSON.stringify(_this6.listado_data_accesorios));
              axios.post(_this6.url + "/guardar", data).then(function (res) {
                _this6.isGuardarLoading = false;
                if (res.data.status) {
                  toastr.success("Guardado Correctamente");
                  _this6.CerrarModal();
                  _this6.CargarDatosAux();
                } else {
                  toastr.error(res.data.mensaje);
                }
              });
            case 3:
              return _context2.a(2);
          }
        }, _callee2);
      }))();
    },
    ActualizarResguardo: function ActualizarResguardo() {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var isValid, data;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              _context3.n = 1;
              return _this7.$validator.validate();
            case 1:
              isValid = _context3.v;
              if (isValid) {
                _context3.n = 2;
                break;
              }
              return _context3.a(2);
            case 2:
              _this7.isGuardarLoading = true;
              data = new FormData();
              data.append("id", _this7.resguardo.id);
              data.append("observacion_uno", _this7.resguardo.observacion_uno);
              data.append("observacion_dos", _this7.resguardo.observacion_dos);
              data.append("empleado_entrega", _this7.empleado_entrega.id);
              axios.post(_this7.url + "/actualizar", data).then(function (res) {
                _this7.isGuardarLoading = false;
                if (res.data.status) {
                  toastr.success("Actualizado Correctamente");
                  _this7.CerrarModal();
                  _this7.CargarDatosAux();
                } else {
                  toastr.error(res.data.mensaje);
                }
              });
            case 3:
              return _context3.a(2);
          }
        }, _callee3);
      }))();
    },
    /**
     * Obtener los equipos de acuerdo al tipo seleccionado
     */
    ObtenerEquipos: function ObtenerEquipos() {
      var _this8 = this;
      this.isObtenerEquipos_loading = true;
      axios.get(this.url + "/obtenerequipos/" + this.resguardo.tipo).then(function (res) {
        _this8.isObtenerEquipos_loading = false;
        if (res.data.status) {
          _this8.list_equipos = res.data.list_equipos;
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    /*
     * Regresa el equipo
     */
    Regresar: function Regresar(data) {
      this.editar = false;
      this.tituloModal = "Regresar equipo";
      this.modal = true;
      this.tipoAccion = 3;
      this.resguardo = _objectSpread({}, data);
      this.resguardo.caiv = {
        id: data.caiv,
        descripcion: data.descripcion,
        cantidad: data.cantidad
      };
      this.empleado_recibe = {
        id: data.empleado_recibe,
        nombre: data.empleado_r
      };
      this.empleado_entrega = {
        id: data.empleado_entrega,
        nombre: data.empleado_e
      };
      var asd = [];
      if (data.accesorios_listado != []) asd = [];else asd = JSON.parse(JSON.parse(data.accesorios_listado));
      this.listado_data_accesorios = asd;
      this.resguardo.cantidad_defectuoso = 0;
    },
    /**
     * Registra el retorno del equipo
     */
    GuardarRetorno: function GuardarRetorno() {
      var _this9 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var isValid, data;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              isValid = _this9.$validator.validate();
              if (isValid) {
                _context4.n = 1;
                break;
              }
              return _context4.a(2);
            case 1:
              _this9.isGuardarLoading = true;
              data = new FormData();
              data.append("id", _this9.resguardo.id);
              data.append("fecha_retorno", _this9.resguardo.fecha_retorno);
              data.append("observacion_recepcion", _this9.resguardo.observacion_retorno);
              data.append("cantidad_defectuoso", _this9.resguardo.cantidad_defectuoso);
              axios.post(_this9.url + "/regresar", data).then(function (res) {
                _this9.isGuardarLoading = false;
                if (res.data.status) {
                  toastr.success("Guardado correctamente");
                  _this9.CerrarModal();
                  _this9.CargarDatosAux();
                } else {
                  toastr.error(res.data.mensaje);
                }
              });
            case 2:
              return _context4.a(2);
          }
        }, _callee4);
      }))();
    },
    /**
     * Descargar el vale de resguardo
     */
    Descargar: function Descargar(data) {
      window.open(this.url + "/descagar/" + data.id);
    },
    /**
     * Guardar listado de accesorios de manera temporal
     **/
    GuardarAccesorio: function GuardarAccesorio() {
      if (this.resguardo.cantidad_accesorio <= 0) {
        toastr.warning("Ingrese una cantidad válida");
        return;
      }
      if (this.resguardo.cantidad_accesorio > this.resguardo.accesorios_data.cantidad) {
        toastr.warning("Cantidad insufuciente");
        return;
      }
      this.listado_data_accesorios.push({
        id: this.resguardo.accesorios_data.id,
        descripcion: this.resguardo.accesorios_data.descripcion,
        cantidad: this.resguardo.cantidad_accesorio,
        nuevo: 0,
        temp: true
      });
      this.resguardo.accesorios_data = "";
      this.resguardo.cantidad_accesorio = "";
      this.resguardo.cantidad_accesorio_temporal = "";
    },
    /**
     * Eliminar el accesorio temporal
     */
    EliminarTemporal: function EliminarTemporal(index, vi) {
      this.listado_data_accesorios.splice(index, 1);
    },
    /**
     * Abre el modal para autorizar la entrega
     */
    AbrirModalAutorizar: function AbrirModalAutorizar(entrega) {
      this.id_autoriza = entrega.id;
      this.modal_autorizar = true;
    },
    /**
     * Cerrar modal de autorización
     */
    CerrarModalAutorizar: function CerrarModalAutorizar() {
      this.modal_autorizar = false;
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/Vales/Sitio.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/Vales/Sitio.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Herramientas/utilerias.js */ "./resources/assets/js/components/Herramientas/utilerias.js");
/* harmony import */ var vue_qrcode_reader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-qrcode-reader */ "./node_modules/vue-qrcode-reader/dist/VueQrcodeReader.common.js");
/* harmony import */ var vue_qrcode_reader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_qrcode_reader__WEBPACK_IMPORTED_MODULE_1__);
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
      empresa: "1",
      error: "",
      editar: true,
      salida_sitio_id: 0,
      tituloModal: "",
      modal: 0,
      tipoAccion: 0,
      modal_retorno: 0,
      sitio: {
        id: 0,
        proyecto: "",
        fecha_salida: "",
        fecha_retorno: "",
        solicita: "",
        check: false,
        tipo: "",
        empresa: "1"
      },
      cantidad_temp: "",
      unidad_temp: "",
      catalogo: "",
      list_equipos: [],
      empleado_recibe: "",
      listaEmpleados: [],
      listaProyectos: [],
      empleado_entrega: [],
      listaCatalogo: [],
      listado_data: [],
      tableData: [],
      columns: ["id", "fecha_salida", "nombre_corto", "solicita_empleado", "descargar", "condicion"],
      options: {
        headings: {
          "id": "Acciones",
          "nombre_corto": "Proyecto"
        },
        // Headings,
        perPage: 10,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        filterByColumn: true,
        listColumns: {
          "condicion": [{
            id: 1,
            text: "En sitio"
          }, {
            id: 2,
            text: "Retornado"
          }]
        },
        texts: config.texts
      } //options
    };
  },
  methods: {
    onInit: function onInit(promise) {
      var _this = this;
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
              if (_t.name === "NotAllowedError") {
                _this.error = "ERROR: you need to grant camera access permisson";
              } else if (_t.name === "NotFoundError") {
                _this.error = "ERROR: no camera on this device";
              } else if (_t.name === "NotSupportedError") {
                _this.error = "ERROR: secure context required (HTTPS, localhost)";
              } else if (_t.name === "NotReadableError") {
                _this.error = "ERROR: is the camera already in use?";
              } else if (_t.name === "OverconstrainedError") {
                _this.error = "ERROR: installed cameras are not suitable";
              } else if (_t.name === "StreamApiNotSupportedError") {
                _this.error = "ERROR: Stream API is not supported in this browser";
              }
            case 3:
              return _context.a(2);
          }
        }, _callee, null, [[0, 2]]);
      }))();
    },
    onDecode: function onDecode(result) {
      this.result = result;
      var porciones = this.result.split("|");
      this.empleado_recibe = {
        id: porciones[0],
        name: porciones[1]
      };
    },
    /**
     * Obtener las salidas a sitio
     */
    CargarDatos: function CargarDatos() {
      var empresa = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this.empresa = empresa;
      this.CargarDatosAux();
    },
    CargarDatosAux: function CargarDatosAux() {
      var _this2 = this;
      axios.get("ti/sitio/obtener/" + this.empresa).then(function (response) {
        _this2.tableData = response.data;
      });
    },
    /**
     * Obtener los empledos y proyectos
     */
    getData: function getData() {
      var _this3 = this;
      this.listaEmpleados = [];
      axios.get("generales/empleadoactivos").then(function (res) {
        _this3.listaEmpleados = res.data.empleados;
      });
      axios.get("generales/proyectos/1").then(function (res) {
        if (res.data.status) {
          _this3.listaProyectos = res.data.proyectos;
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    vaciar: function vaciar() {
      this.sitio.proyecto = "";
      this.sitio.fecha_salida = "";
      this.empleado_recibe = "";
      this.sitio.tipo = "";
      this.listado_data = [];
    },
    AbrirModal: function AbrirModal(nuevo) {
      var _this4 = this;
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      this.getData();
      this.modal = 1;
      if (nuevo) {
        this.tituloModal = "Guardar";
        this.tipoAccion = 1;
        this.editar = true;
      } else {
        this.editar = false;
        this.editar = false;
        this.tituloModal = "Actualizar";
        this.tipoAccion = 2;
        this.sitio = _objectSpread(_objectSpread({}, data), {}, {
          proyecto: {
            id: data["proyecto_id"],
            nombre_corto: data["nombre_corto"]
          }
        });
        this.empleado_recibe = {
          id: data["solicita"],
          nombre: data["solicita_empleado"]
        };
        axios.get("ti/sitio/obtenerpartidas/" + data["id"]).then(function (response) {
          response.data.forEach(function (item, i) {
            _this4.listado_data.push({
              id: item["data"]["material_id"],
              descripcion: item["descripcion"],
              cantidad: item["data"]["cantidad"],
              unidad: item["data"]["unidad"],
              tipo: item["data"]["tipo"]
            });
          });
        })["catch"](function (e) {
          console.error(e);
        });
      }
    },
    CerrarModal: function CerrarModal() {
      this.modal = 0;
      this.listado_data = [];
    },
    asignar: function asignar() {
      if (this.catalogo != "") {
        this.cantidad_temp = this.catalogo.cantidad;
      }
    },
    guardarasignacion: function guardarasignacion() {
      if (this.catalogo != "") {
        this.listado_data.push({
          id: this.catalogo.id,
          descripcion: this.catalogo.descripcion,
          cantidad: this.cantidad_temp,
          unidad: this.unidad_temp,
          tipo: this.sitio.tipo,
          temp: true
        });

        // this.listado_id.push(this.catalogo.id);
        // this.listado_supervisor.push(this.supervisor.id);
        this.catalogo = "";
        this.cantidad_temp = "";
        this.unidad_temp = "";
        // this.sitio.tipo = "";
      }
    },
    deleteu: function deleteu(index) {
      this.listado_data.splice(index, 1);
    },
    /**
     * Guardar salida a sitio
     */
    Guardar: function Guardar(nuevo) {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var isValid, data;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              isValid = _this5.$validator.validate();
              if (isValid) {
                _context2.n = 1;
                break;
              }
              return _context2.a(2);
            case 1:
              data = new FormData();
              if (!nuevo) data.append("id", _this5.sitio.id);
              data.append("proyecto", _this5.sitio.proyecto.id);
              data.append("fecha_salida", _this5.sitio.fecha_salida);
              data.append("solicita", _this5.empleado_recibe.id);
              data.append("data", JSON.stringify(_this5.listado_data.filter(function (e) {
                return e.temp;
              })));
              data.append("empresa", _this5.empresa);
              axios.post("ti/sitio/guardar", data).then(function (res) {
                if (res.data.status) {
                  toastr.success("Actualizado Correctamente");
                  _this5.CerrarModal();
                  _this5.CargarDatosAux();
                } else {
                  toastr.warning(res.data.mensaje);
                }
              });
            case 2:
              return _context2.a(2);
          }
        }, _callee2);
      }))();
    },
    descargar: function descargar(id) {
      window.open("ti/sitio/descargar/" + id, "_blank");
    },
    retorno: function retorno(id) {
      var _this6 = this;
      this.salida_sitio_id = id;
      this.listado_data = [];
      axios.get("ti/sitio/obtenerpendeintes/" + id).then(function (response) {
        response.data.forEach(function (item, i) {
          _this6.listado_data.push({
            id: item["data"]["material_id"],
            descripcion: item["descripcion"],
            cantidad: item["data"]["cantidad"],
            unidad: item["data"]["unidad"],
            tipo: item["data"]["tipo"]
          });
        });
      })["catch"](function (e) {
        console.error(e);
      });
      this.modal_retorno = 1;
    },
    CerrarModalRetorno: function CerrarModalRetorno() {
      this.modal_retorno = 0;
    },
    limpiar: function limpiar() {
      this.listaCatalogo = [];
    },
    retornado: function retornado(data, estado) {
      var _this7 = this;
      axios.get("ti/sitio/regresarpartida/" + data.id + "&" + this.salida_sitio_id + "&" + estado).then(function (response) {
        toastr.success("Correcto !!!");
        _this7.retorno(_this7.salida_sitio_id);
        _this7.CargarDatos(_this7.empresa);
        _this7.sitio.tipo = "";
        _this7.listaCatalogo = [];
      })["catch"](function (e) {
        console.error(e);
      });
    },
    /**
     * Obtener los equipos de acuerdo al tipo seleccionado
     */
    ObtenerEquipos: function ObtenerEquipos() {
      var _this8 = this;
      axios.get("ti/resguardos/obtenerequipos/" + this.sitio.tipo).then(function (res) {
        if (res.data.status) {
          _this8.list_equipos = res.data.list_equipos;
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/Vales/Vale.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/Vales/Vale.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Herramientas/utilerias.js */ "./resources/assets/js/components/Herramientas/utilerias.js");

var Resguardo = function Resguardo(r) {
  return __webpack_require__.e(/*! require.ensure | ti */ "ti").then((function () {
    return r(__webpack_require__(/*! ./Resguardo.vue */ "./resources/assets/js/components/TI/Vales/Resguardo.vue"));
  }).bind(null, __webpack_require__))['catch'](__webpack_require__.oe);
};
var Sitio = function Sitio(r) {
  return __webpack_require__.e(/*! require.ensure | ti */ "ti").then((function () {
    return r(__webpack_require__(/*! ./Sitio.vue */ "./resources/assets/js/components/TI/Vales/Sitio.vue"));
  }).bind(null, __webpack_require__))['catch'](__webpack_require__.oe);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      tab: 1,
      empresa: 1,
      PermisosCRUD: {}
    };
  },
  components: {
    'resguardo': Resguardo,
    'sitio': Sitio
  },
  methods: {
    /**
     * Cambia el tab
     */
    CambiarTab: function CambiarTab(id) {
      this.tab = id;
    },
    /**
     * Abrir modal para registro de resguardo
     */
    AbrirModalResguardo: function AbrirModalResguardo() {
      var childResguardo = this.$refs.resguardo;
      childResguardo.AbrirModal(true);
    },
    /**
     * Abrir modal para registro de sitio
     */
    AbrirModalSitio: function AbrirModalSitio() {
      var childSitio = this.$refs.sitio;
      childSitio.AbrirModal(true);
    },
    /**
     * Cargargar los vales de resguardo
     */
    ObtenerResguardos: function ObtenerResguardos() {
      var childResguardo1 = this.$refs.resguardo;
      childResguardo1.CargarDatos(this.empresa);
    },
    /**
     * Cargargar los vales de sitio
     */
    ObtenerSitios: function ObtenerSitios() {
      var ChildSitio = this.$refs.sitio;
      ChildSitio.CargarDatos(this.empresa);
    },
    CargarInicio: function CargarInicio() {
      this.CambiarTab(1);
    },
    /**
     * Descargar todos los resguardos registrados
     */
    DescargarReporte: function DescargarReporte() {
      window.open("ti/vales/descargar");
    }
  },
  mounted: function mounted() {
    this.PermisosCRUD = _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].getCRUD(this.$route.path);
    this.CargarInicio();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/Bitacora/Bitacora.vue?vue&type=template&id=4ecbe5e8":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/Bitacora/Bitacora.vue?vue&type=template&id=4ecbe5e8 ***!
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
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("i", {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" Bitácora de resguardo\n                "), _c("button", {
    staticClass: "btn btn-dark float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.AbrirModal(1);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  }, [_vm._v(" ")]), _vm._v("Nuevo\n                ")]), _vm._v(" "), _vm._m(0)]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "collapse multi-collapse",
    attrs: {
      id: "multiCollapseExample1"
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
        return _vm.descargar();
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
        }), _vm._v(" \n                            ")]), _vm._v(" "), _c("div", {
          staticClass: "dropdown-menu"
        }, [[_c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.AbrirModal(2, props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-pencil"
        }), _vm._v(" Actualizar\n                                    ")])]], 2)])];
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
  }, [_vm._v("x")])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-4 mb-3"
  }, [_c("label", [_vm._v("Responsable Información")]), _vm._v(" "), _c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    attrs: {
      options: _vm.listaEmpleados,
      label: "name",
      "data-vv-name": "responsable"
    },
    model: {
      value: _vm.responsable_i,
      callback: function callback($$v) {
        _vm.responsable_i = $$v;
      },
      expression: "responsable_i"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("responsable")))])], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-5 mb-3"
  }, [_c("label", [_vm._v("Ruta de respaldo")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.ruta,
      expression: "ruta"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      "data-vv-name": "ruta"
    },
    domProps: {
      value: _vm.ruta
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.ruta = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("ruta")))])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v("Tamaño")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.tamanio,
      expression: "tamanio"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      "data-vv-name": "tamaño"
    },
    domProps: {
      value: _vm.tamanio
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.tamanio = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("tamaño")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v("Fecha Resguardo")]), _vm._v(" "), _c("input", {
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
  }, [_vm._v(_vm._s(_vm.errors.first("fecha")))])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-5 mb-3"
  }, [_c("label", [_vm._v("Ubicación Resguardo")]), _vm._v(" "), _c("input", {
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
  }, [_c("label", [_vm._v("Responsable Respaldo")]), _vm._v(" "), _c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    attrs: {
      options: _vm.listaEmpleados,
      label: "name",
      "data-vv-name": "responsable"
    },
    model: {
      value: _vm.responsable_r,
      callback: function callback($$v) {
        _vm.responsable_r = $$v;
      },
      expression: "responsable_r"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("responsable")))])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-6 mb-3"
  }, [_c("label", [_vm._v("Observaciones")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.observaciones,
      expression: "observaciones"
    }],
    staticClass: "form-control",
    attrs: {
      name: "name",
      rows: "2",
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
    staticClass: "fas fa-times"
  }), _vm._v(" Cerrar")]), _vm._v(" "), _vm.tipoAccion == 1 ? _c("button", {
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
    staticClass: "fas fa-save"
  }), _vm._v(" Guardar")]) : _vm._e(), _vm._v(" "), _vm.tipoAccion == 2 ? _c("button", {
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
    staticClass: "fas fa-save"
  }), _vm._v(" Actualizar")]) : _vm._e()])])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("button", {
    staticClass: "btn btn-dark float-sm-right mr-1",
    attrs: {
      "data-toggle": "collapse",
      href: "#multiCollapseExample1",
      role: "button",
      "aria-expanded": "false",
      "aria-controls": "multiCollapseExample1"
    }
  }, [_c("i", {
    staticClass: "fas fa-file-pdf mr-1"
  }), _vm._v("Descargar\n                ")]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/Inventario/Accesorios.vue?vue&type=template&id=23093ed4":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/Inventario/Accesorios.vue?vue&type=template&id=23093ed4 ***!
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
  return _c("div", {
    staticClass: "main"
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("i", {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" Accesorio\n            "), _c("button", {
    staticClass: "btn btn-dark float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.AbrirModalAccesorio(true);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  }, [_vm._v(" ")]), _vm._v("Nuevo\n            ")])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {}, [_c("div", {}, [_c("v-client-table", {
    ref: "tbl_accesorio",
    attrs: {
      columns: _vm.columns_accesorio,
      data: _vm.list_accesorio,
      options: _vm.options_accesorio
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
              return _vm.AbrirModalAccesorio(false, props.row);
            }
          }
        }, [_c("i", {
          staticClass: "icon-pencil"
        }), _vm._v(" Actualizar\n                                        ")]), _vm._v(" "), props.row.condicion == 0 ? _c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.Activar(props.row, 1);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-check"
        }), _vm._v(" Activar\n                                        ")]) : _vm._e(), _vm._v(" "), props.row.condicion == 1 ? _c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.Activar(props.row, 0);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-check"
        }), _vm._v(" Desactivar\n                                        ")]) : _vm._e(), _vm._v(" "), _c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.Eliminar(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-times"
        }), _vm._v(" Eliminar\n                                        ")])]], 2)])];
      }
    }, {
      key: "condicion",
      fn: function fn(props) {
        return [props.row.condicion == 1 ? _c("button", {
          staticClass: "btn btn-success"
        }, [_vm._v("Activo")]) : _vm._e(), _vm._v(" "), props.row.condicion == 0 ? _c("button", {
          staticClass: "btn btn-warning"
        }, [_vm._v("Inactivo")]) : _vm._e(), _vm._v(" "), props.row.condicion == 2 ? _c("button", {
          staticClass: "btn btn-primary"
        }, [_vm._v("En resguardo")]) : _vm._e()];
      }
    }])
  })], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "modal fade",
    "class": {
      mostrar: _vm.ver_modal_accesorio
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
      textContent: _vm._s(_vm.titulo_modal_accesorio)
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "close",
    attrs: {
      type: "button",
      "aria-label": "Close"
    },
    on: {
      click: function click($event) {
        return _vm.CerrarModalAccesorio();
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
  }, [_vm._v("Descripción")]), _vm._v(" "), _c("div", {
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
      value: _vm.accesorio_modal.descripcion,
      expression: "accesorio_modal.descripcion"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "descripcion"
    },
    domProps: {
      value: _vm.accesorio_modal.descripcion
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.accesorio_modal, "descripcion", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("descripcion")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Modelo")]), _vm._v(" "), _c("div", {
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
      value: _vm.accesorio_modal.modelo,
      expression: "accesorio_modal.modelo"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "modelo"
    },
    domProps: {
      value: _vm.accesorio_modal.modelo
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.accesorio_modal, "modelo", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("modelo")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Marca")]), _vm._v(" "), _c("div", {
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
      value: _vm.accesorio_modal.marca,
      expression: "accesorio_modal.marca"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "marca"
    },
    domProps: {
      value: _vm.accesorio_modal.marca
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.accesorio_modal, "marca", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("marca")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("No. Serie")]), _vm._v(" "), _c("div", {
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
      value: _vm.accesorio_modal.no_serie,
      expression: "accesorio_modal.no_serie"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "ns"
    },
    domProps: {
      value: _vm.accesorio_modal.no_serie
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.accesorio_modal, "no_serie", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("ns")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Cantidad")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-9"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required|decimal:2",
      expression: "'required|decimal:2'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.accesorio_modal.cantidad,
      expression: "accesorio_modal.cantidad"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "cantidad"
    },
    domProps: {
      value: _vm.accesorio_modal.cantidad
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.accesorio_modal, "cantidad", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("cantidad")))])])])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("button", {
    staticClass: "btn btn-outline-dark",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.CerrarModalAccesorio();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-times"
  }), _vm._v(" Cerrar")]), _vm._v(" "), _vm.tipoAccion_modal_accesorio == 1 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.GuardarAccesorio(1);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Guardar")]) : _vm._e(), _vm._v(" "), _vm.tipoAccion_modal_accesorio == 2 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.GuardarAccesorio(0);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Actualizar")]) : _vm._e()])])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/Inventario/Equipos.vue?vue&type=template&id=28a06dc9":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/Inventario/Equipos.vue?vue&type=template&id=28a06dc9 ***!
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
  }), _vm._v(" Equipo de Cómputo " + _vm._s(_vm.company == 1 ? "Conserflow" : "CSCT") + "\n            "), _c("div", {
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
  }, [_vm._v("\n                    Empresa\n                ")]), _vm._v(" "), _c("div", {
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
        _vm.company = 1;
        _vm.CargarEquipos();
      }
    }
  }, [_vm._v("Conserflow")]), _vm._v(" "), _c("button", {
    staticClass: "dropdown-item",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        _vm.company = 2;
        _vm.CargarEquipos();
      }
    }
  }, [_vm._v("CSCT")])])]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-dark float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.AbrirModalComputadoras(true);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  }, [_vm._v(" ")]), _vm._v("Nuevo\n            ")])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {}, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isObtener_Loading
    }
  }), _vm._v(" "), _c("div", {}, [_c("v-client-table", {
    ref: "tbl_computadoras",
    attrs: {
      columns: _vm.columns_computadoras,
      data: _vm.list_computadoras,
      options: _vm.options_computadoras
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
        }), _vm._v(" \n                                ")]), _vm._v(" "), _c("div", {
          staticClass: "dropdown-menu"
        }, [[_c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.AbrirModalComputadoras(false, props.row);
            }
          }
        }, [_c("i", {
          staticClass: "icon-pencil"
        }), _vm._v(" Actualizar\n                                        ")]), _vm._v(" "), props.row.condicion == 0 ? _c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.Activar(1, props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-check"
        }), _vm._v(" Activar\n                                        ")]) : _vm._e(), _vm._v(" "), props.row.condicion == 1 ? _c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.Activar(0, props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-times"
        }), _vm._v(" Desactivar\n                                        ")]) : _vm._e(), _vm._v(" "), _c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.Eliminar(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-times"
        }), _vm._v(" Eliminar\n                                        ")])]], 2)])];
      }
    }, {
      key: "condicion",
      fn: function fn(props) {
        return [props.row.condicion == 1 ? _c("button", {
          staticClass: "btn btn-success"
        }, [_vm._v("Activo")]) : _vm._e(), _vm._v(" "), props.row.condicion == 0 ? _c("button", {
          staticClass: "btn btn-warning"
        }, [_vm._v("Inactivo")]) : _vm._e(), _vm._v(" "), props.row.condicion == 2 ? _c("button", {
          staticClass: "btn btn-primary"
        }, [_vm._v("En resguardo")]) : _vm._e(), _vm._v(" "), props.row.condicion == 3 ? _c("button", {
          staticClass: "btn btn-primary"
        }, [_vm._v("Sito")]) : _vm._e()];
      }
    }])
  })], 1)], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "modal fade",
    "class": {
      mostrar: _vm.ver_modal_computadoras
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
      textContent: _vm._s(_vm.titulo_modal_computadoras)
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "close",
    attrs: {
      type: "button",
      "aria-label": "Close"
    },
    on: {
      click: function click($event) {
        return _vm.CerrarModalComputadoras();
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
    staticClass: "col-md-4 mb-3"
  }, [_c("label", [_vm._v("No. Serie")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.computadoras_modal.no_serie,
      expression: "computadoras_modal.no_serie"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "no_serie"
    },
    domProps: {
      value: _vm.computadoras_modal.no_serie
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.computadoras_modal, "no_serie", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("no_serie")))])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4 mb-3"
  }, [_c("label", [_vm._v("Marca/Modelo")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.computadoras_modal.marca_modelo,
      expression: "computadoras_modal.marca_modelo"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "marca_modelo"
    },
    domProps: {
      value: _vm.computadoras_modal.marca_modelo
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.computadoras_modal, "marca_modelo", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("marca_modelo")))])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4 mb-3"
  }, [_c("label", [_vm._v("CPU")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.computadoras_modal.cpu,
      expression: "computadoras_modal.cpu"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "cpu"
    },
    domProps: {
      value: _vm.computadoras_modal.cpu
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.computadoras_modal, "cpu", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("cpu")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-4 mb-3"
  }, [_c("label", [_vm._v("SO")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.computadoras_modal.so,
      expression: "computadoras_modal.so"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "so"
    },
    domProps: {
      value: _vm.computadoras_modal.so
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.computadoras_modal, "so", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("so")))])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4 mb-3"
  }, [_c("label", [_vm._v("RAM")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.computadoras_modal.ram,
      expression: "computadoras_modal.ram"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "ram"
    },
    domProps: {
      value: _vm.computadoras_modal.ram
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.computadoras_modal, "ram", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("ram")))])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4 mb-3"
  }, [_c("label", [_vm._v("Almacenamiento")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.computadoras_modal.almacenamiento,
      expression: "computadoras_modal.almacenamiento"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "almacenamiento"
    },
    domProps: {
      value: _vm.computadoras_modal.almacenamiento
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.computadoras_modal, "almacenamiento", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("almacenamiento")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-4 mb-3"
  }, [_c("label", [_vm._v("Tarjeta de video")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.computadoras_modal.tarjeta_video,
      expression: "computadoras_modal.tarjeta_video"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "tarjeta_video"
    },
    domProps: {
      value: _vm.computadoras_modal.tarjeta_video
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.computadoras_modal, "tarjeta_video", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("tarjeta_video")))])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4 mb-3"
  }, [_c("label", [_vm._v("Tarjeta de red")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.computadoras_modal.tarjeta_red,
      expression: "computadoras_modal.tarjeta_red"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "tarjeta_red"
    },
    domProps: {
      value: _vm.computadoras_modal.tarjeta_red
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.computadoras_modal, "tarjeta_red", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("tarjeta_red")))])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4 mb-3"
  }, [_c("label", [_vm._v("MAC")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.computadoras_modal.mac,
      expression: "computadoras_modal.mac"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "mac"
    },
    domProps: {
      value: _vm.computadoras_modal.mac
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.computadoras_modal, "mac", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("mac")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-4 mb-3"
  }, [_c("label", [_vm._v("Código de barras")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.computadoras_modal.codigo_barras,
      expression: "computadoras_modal.codigo_barras"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "codigo_barras"
    },
    domProps: {
      value: _vm.computadoras_modal.codigo_barras
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.computadoras_modal, "codigo_barras", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("codigo_barras")))])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4 mb-3"
  }, [_c("label", [_vm._v("Cantidad")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required|decimal:2",
      expression: "'required|decimal:2'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.computadoras_modal.cantidad,
      expression: "computadoras_modal.cantidad"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "cantidad"
    },
    domProps: {
      value: _vm.computadoras_modal.cantidad
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.computadoras_modal, "cantidad", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("cantidad")))])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4 mb-3"
  }, [_c("label", [_vm._v("Color")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.computadoras_modal.color,
      expression: "computadoras_modal.color"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "color"
    },
    domProps: {
      value: _vm.computadoras_modal.color
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.computadoras_modal, "color", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("color")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-8 mb-3"
  }, [_c("label", [_vm._v("Observaciones")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.computadoras_modal.observaciones,
      expression: "computadoras_modal.observaciones"
    }],
    staticClass: "form-control",
    attrs: {
      rows: "4",
      "data-vv-name": "observaciones"
    },
    domProps: {
      value: _vm.computadoras_modal.observaciones
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.computadoras_modal, "observaciones", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("observaciones")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-4 mb-3"
  }, [_c("label", [_vm._v("Empresa")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.computadoras_modal.empresa,
      expression: "computadoras_modal.empresa"
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
        _vm.$set(_vm.computadoras_modal, "empresa", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("Conserflow")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "2"
    }
  }, [_vm._v("CSCT")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isGuardar_Loading
    }
  }), _vm._v(" "), _c("div", [_c("button", {
    staticClass: "btn btn-outline-dark",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.CerrarModalComputadoras();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-times"
  }), _vm._v(" Cerrar")]), _vm._v(" "), _vm.tipoAccion_modal_computadoras == 1 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.GuardarComputadoras(1);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Guardar")]) : _vm._e(), _vm._v(" "), _vm.tipoAccion_modal_computadoras == 2 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.GuardarComputadoras(0);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Actualizar")]) : _vm._e()])], 1)])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/Inventario/Impresion.vue?vue&type=template&id=698f0aa9":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/Inventario/Impresion.vue?vue&type=template&id=698f0aa9 ***!
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
  return _c("div", {
    staticClass: "main"
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("i", {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" Impresora\n            "), _c("button", {
    staticClass: "btn btn-dark float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.AbrirModalImpresora(true);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  }, [_vm._v(" ")]), _vm._v("Nuevo\n            ")])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isObtener_Loading
    }
  }), _vm._v(" "), _c("div", {}, [_c("div", {}, [_c("v-client-table", {
    ref: "tbl_impresora",
    attrs: {
      columns: _vm.columns_impresora,
      data: _vm.list_impresora,
      options: _vm.options_impresora
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
              return _vm.AbrirModalImpresora(false, props.row);
            }
          }
        }, [_c("i", {
          staticClass: "icon-pencil"
        }), _vm._v(" Actualizar\n                                        ")]), _vm._v(" "), props.row.condicion == 1 ? _c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.Activar(props.row, 0);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-times"
        }), _vm._v(" Desactivar\n                                        ")]) : _vm._e(), _vm._v(" "), props.row.condicion == 0 ? _c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.Activar(props.row, 1);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-check"
        }), _vm._v(" Activar\n                                        ")]) : _vm._e(), _vm._v(" "), _c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.Eliminar(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-times"
        }), _vm._v(" Eliminar\n                                        ")])]], 2)])];
      }
    }, {
      key: "condicion",
      fn: function fn(props) {
        return [props.row.condicion == 1 ? _c("button", {
          staticClass: "btn btn-success"
        }, [_vm._v("Activo")]) : _vm._e(), _vm._v(" "), props.row.condicion == 0 ? _c("button", {
          staticClass: "btn btn-warning"
        }, [_vm._v("Inactivo")]) : _vm._e(), _vm._v(" "), props.row.condicion == 2 ? _c("button", {
          staticClass: "btn btn-primary"
        }, [_vm._v("En resguardo")]) : _vm._e(), _vm._v(" "), props.row.condicion == 3 ? _c("button", {
          staticClass: "btn btn-primary"
        }, [_vm._v("Sito")]) : _vm._e()];
      }
    }])
  })], 1)])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "modal fade",
    "class": {
      mostrar: _vm.ver_modal_impresora
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
      textContent: _vm._s(_vm.titulo_modal_impresora)
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "close",
    attrs: {
      type: "button",
      "aria-label": "Close"
    },
    on: {
      click: function click($event) {
        return _vm.CerrarModalImpresora();
      }
    }
  }, [_c("span", {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("x")])])]), _vm._v(" "), _c("div", {
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
  }, [_vm._v("Descripción")]), _vm._v(" "), _c("div", {
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
      value: _vm.impresora_modal.descripcion,
      expression: "impresora_modal.descripcion"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "descripcion"
    },
    domProps: {
      value: _vm.impresora_modal.descripcion
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.impresora_modal, "descripcion", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("descripcion")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Modelo")]), _vm._v(" "), _c("div", {
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
      value: _vm.impresora_modal.modelo,
      expression: "impresora_modal.modelo"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "modelo"
    },
    domProps: {
      value: _vm.impresora_modal.modelo
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.impresora_modal, "modelo", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("modelo")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Marca")]), _vm._v(" "), _c("div", {
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
      value: _vm.impresora_modal.marca,
      expression: "impresora_modal.marca"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "marca"
    },
    domProps: {
      value: _vm.impresora_modal.marca
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.impresora_modal, "marca", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("marca")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("No. Serie")]), _vm._v(" "), _c("div", {
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
      value: _vm.impresora_modal.no_serie,
      expression: "impresora_modal.no_serie"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "ns"
    },
    domProps: {
      value: _vm.impresora_modal.no_serie
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.impresora_modal, "no_serie", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("ns")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("MAC")]), _vm._v(" "), _c("div", {
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
      value: _vm.impresora_modal.mac,
      expression: "impresora_modal.mac"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "mac"
    },
    domProps: {
      value: _vm.impresora_modal.mac
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.impresora_modal, "mac", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("mac")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Cantidad")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-9"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required|decimal:2",
      expression: "'required|decimal:2'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.impresora_modal.cantidad,
      expression: "impresora_modal.cantidad"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "cantidad"
    },
    domProps: {
      value: _vm.impresora_modal.cantidad
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.impresora_modal, "cantidad", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("cantidad")))])])])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isGuardar_Loading
    }
  }), _vm._v(" "), _c("div", [_c("button", {
    staticClass: "btn btn-outline-dark",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.CerrarModalImpresora();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-times"
  }), _vm._v(" Cerrar")]), _vm._v(" "), _vm.tipoAccion_modal_impresora == 1 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.GuardarImpresora(1);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Guardar")]) : _vm._e(), _vm._v(" "), _vm.tipoAccion_modal_impresora == 2 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.GuardarImpresora(0);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Actualizar")]) : _vm._e()])], 1)])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/Inventario/Red.vue?vue&type=template&id=7024e774":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/Inventario/Red.vue?vue&type=template&id=7024e774 ***!
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
  return _c("div", {
    staticClass: "main"
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("i", {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" Equipo de red\n            "), _c("button", {
    staticClass: "btn btn-dark float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.AbrirModalEquipoRed(true);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  }, [_vm._v(" ")]), _vm._v("Nuevo\n            ")])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {}, [_c("div", {}, [_c("v-client-table", {
    ref: "tbl_equipo_red",
    attrs: {
      columns: _vm.columns_equipo_red,
      data: _vm.list_equipo_red,
      options: _vm.options_equipo_red
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
              return _vm.AbrirModalEquipoRed(false, props.row);
            }
          }
        }, [_c("i", {
          staticClass: "icon-pencil"
        }), _vm._v(" Actualizar\n                                        ")]), _vm._v(" "), props.row.condicion == 0 ? _c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.Activar(props.row, 1);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-check"
        }), _vm._v(" Activar\n                                        ")]) : _vm._e(), _vm._v(" "), props.row.condicion == 1 ? _c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.Activar(props.row, 0);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-times"
        }), _vm._v(" Desactivar\n                                        ")]) : _vm._e(), _vm._v(" "), _c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.Eliminar(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-times"
        }), _vm._v(" Eliminar\n                                        ")])]], 2)])];
      }
    }, {
      key: "condicion",
      fn: function fn(props) {
        return [props.row.condicion == 1 ? _c("button", {
          staticClass: "btn btn-success"
        }, [_vm._v("Activo")]) : _vm._e(), _vm._v(" "), props.row.condicion == 0 ? _c("button", {
          staticClass: "btn btn-warning"
        }, [_vm._v("Inactivo")]) : _vm._e(), _vm._v(" "), props.row.condicion == 2 ? _c("button", {
          staticClass: "btn btn-primary"
        }, [_vm._v("En resguardo")]) : _vm._e(), _vm._v(" "), props.row.condicion == 3 ? _c("button", {
          staticClass: "btn btn-primary"
        }, [_vm._v("Sito")]) : _vm._e()];
      }
    }])
  })], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "modal fade",
    "class": {
      mostrar: _vm.ver_modal_equipo_red
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
      textContent: _vm._s(_vm.titulo_modal_equipo_red)
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "close",
    attrs: {
      type: "button",
      "aria-label": "Close"
    },
    on: {
      click: function click($event) {
        return _vm.CerrarModalEquipoRed();
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
  }, [_vm._v("Descripción")]), _vm._v(" "), _c("div", {
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
      value: _vm.equipo_red_modal.descripcion,
      expression: "equipo_red_modal.descripcion"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "descripcion"
    },
    domProps: {
      value: _vm.equipo_red_modal.descripcion
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.equipo_red_modal, "descripcion", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("descripcion")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Marca")]), _vm._v(" "), _c("div", {
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
      value: _vm.equipo_red_modal.marca,
      expression: "equipo_red_modal.marca"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "marca"
    },
    domProps: {
      value: _vm.equipo_red_modal.marca
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.equipo_red_modal, "marca", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("marca")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("No. Serie")]), _vm._v(" "), _c("div", {
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
      value: _vm.equipo_red_modal.no_serie,
      expression: "equipo_red_modal.no_serie"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "ns"
    },
    domProps: {
      value: _vm.equipo_red_modal.no_serie
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.equipo_red_modal, "no_serie", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("ns")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("MAC")]), _vm._v(" "), _c("div", {
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
      value: _vm.equipo_red_modal.mac,
      expression: "equipo_red_modal.mac"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "mac"
    },
    domProps: {
      value: _vm.equipo_red_modal.mac
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.equipo_red_modal, "mac", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("mac")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("IP")]), _vm._v(" "), _c("div", {
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
      value: _vm.equipo_red_modal.ip,
      expression: "equipo_red_modal.ip"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "ip"
    },
    domProps: {
      value: _vm.equipo_red_modal.ip
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.equipo_red_modal, "ip", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("ip")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Observaciones")]), _vm._v(" "), _c("div", {
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
      value: _vm.equipo_red_modal.observaciones,
      expression: "equipo_red_modal.observaciones"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "observaciones"
    },
    domProps: {
      value: _vm.equipo_red_modal.observaciones
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.equipo_red_modal, "observaciones", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("observaciones")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Cantidad")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-9"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required|decimal:2",
      expression: "'required|decimal:2'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.equipo_red_modal.cantidad,
      expression: "equipo_red_modal.cantidad"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "cantidad"
    },
    domProps: {
      value: _vm.equipo_red_modal.cantidad
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.equipo_red_modal, "cantidad", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("cantidad")))])])])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("button", {
    staticClass: "btn btn-outline-dark",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.CerrarModalEquipoRed();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-times"
  }), _vm._v(" Cerrar")]), _vm._v(" "), _vm.tipoAccion_modal_equipo_red == 1 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.GuardarEquipoRed(1);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Guardar")]) : _vm._e(), _vm._v(" "), _vm.tipoAccion_modal_equipo_red == 2 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.GuardarEquipoRed(0);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Actualizar")]) : _vm._e()])])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/Inventario/Video.vue?vue&type=template&id=5eac2020":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/Inventario/Video.vue?vue&type=template&id=5eac2020 ***!
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
  return _c("div", {
    staticClass: "main"
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("i", {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" Equipo de vídeo\n            "), _vm.PermisosCRUD.Create ? _c("button", {
    staticClass: "btn btn-dark float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.AbrirModalEquipoVideo(true);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  }, [_vm._v(" ")]), _vm._v("Nuevo\n            ")]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isObtener_Loading
    }
  }), _vm._v(" "), _c("div", {}, [_c("div", {}, [_c("v-client-table", {
    ref: "tbl_equipo_video",
    attrs: {
      columns: _vm.columns_equipo_video,
      data: _vm.list_equipo_video,
      options: _vm.options_equipo_video
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
              return _vm.AbrirModalEquipoVideo(false, props.row);
            }
          }
        }, [_c("i", {
          staticClass: "icon-pencil"
        }), _vm._v(" Actualizar\n                                        ")]), _vm._v(" "), _vm.PermisosCRUD.Delete ? [props.row.condicion == 1 ? _c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.Activar(props.row, 0);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-times"
        }), _vm._v(" Desactivar\n                                            ")]) : _vm._e(), _vm._v(" "), props.row.condicion == 0 ? _c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.Activar(props.row, 1);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-check"
        }), _vm._v(" Activar\n                                            ")]) : _vm._e(), _vm._v(" "), _c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.Eliminar(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-times"
        }), _vm._v(" Eliminar\n                                            ")])] : _vm._e()]], 2)])];
      }
    }, {
      key: "condicion",
      fn: function fn(props) {
        return [props.row.condicion == 1 ? _c("button", {
          staticClass: "btn btn-success"
        }, [_vm._v("Activo")]) : _vm._e(), _vm._v(" "), props.row.condicion == 0 ? _c("button", {
          staticClass: "btn btn-warning"
        }, [_vm._v("Inactivo")]) : _vm._e(), _vm._v(" "), props.row.condicion == 2 ? _c("button", {
          staticClass: "btn btn-primary"
        }, [_vm._v("En resguardo")]) : _vm._e(), _vm._v(" "), props.row.condicion == 3 ? _c("button", {
          staticClass: "btn btn-primary"
        }, [_vm._v("Sito")]) : _vm._e()];
      }
    }])
  })], 1)])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "modal fade",
    "class": {
      mostrar: _vm.ver_modal_equipo_video
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
      textContent: _vm._s(_vm.titulo_modal_equipo_video)
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "close",
    attrs: {
      type: "button",
      "aria-label": "Close"
    },
    on: {
      click: function click($event) {
        return _vm.CerrarModalEquipoVideo();
      }
    }
  }, [_c("span", {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("x")])])]), _vm._v(" "), _c("div", {
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
  }, [_vm._v("Descripción")]), _vm._v(" "), _c("div", {
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
      value: _vm.equipo_video_modal.descripcion,
      expression: "equipo_video_modal.descripcion"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "descripcion"
    },
    domProps: {
      value: _vm.equipo_video_modal.descripcion
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.equipo_video_modal, "descripcion", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("descripcion")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("No. Serie")]), _vm._v(" "), _c("div", {
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
      value: _vm.equipo_video_modal.no_serie,
      expression: "equipo_video_modal.no_serie"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "ns"
    },
    domProps: {
      value: _vm.equipo_video_modal.no_serie
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.equipo_video_modal, "no_serie", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("ns")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Cantidad")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-9"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required|decimal:2",
      expression: "'required|decimal:2'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.equipo_video_modal.cantidad,
      expression: "equipo_video_modal.cantidad"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "cantidad"
    },
    domProps: {
      value: _vm.equipo_video_modal.cantidad
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.equipo_video_modal, "cantidad", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("cantidad")))])])])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("div", [_c("vue-element-loading", {
    attrs: {
      active: _vm.isGuardar_Loading
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "btn btn-outline-dark",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.CerrarModalEquipoVideo();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-times"
  }), _vm._v(" Cerrar")]), _vm._v(" "), _vm.tipoAccion_modal_equipo_video == 1 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.GuardarEquipoVideo(1);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Guardar")]) : _vm._e(), _vm._v(" "), _vm.tipoAccion_modal_equipo_video == 2 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.GuardarEquipoVideo(0);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Actualizar")]) : _vm._e()], 1)])])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/Mantenimientos/Impresoras.vue?vue&type=template&id=313c5708":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/Mantenimientos/Impresoras.vue?vue&type=template&id=313c5708 ***!
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
  return _c("div", {
    staticClass: "main"
  }, [_c("div", {
    staticClass: "card"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isObtener_Loading
    }
  }), _vm._v(" "), _c("div", {}, [_c("div", {}, [_c("v-client-table", {
    ref: "tbl_impresora",
    attrs: {
      columns: _vm.columns_impresora,
      data: _vm.list_impresora,
      options: _vm.options_impresora
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
        }, [[props.row.condicion == 1 ? _c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.AbrirModalImpresora(false, props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-plus mr-1"
        }), _vm._v("Registrar\n                                        ")]) : _vm._e(), _vm._v(" "), _c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.Historial(props.row.id);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-list mr-1"
        }), _vm._v("Historial\n                                        ")])]], 2)])];
      }
    }, {
      key: "condicion",
      fn: function fn(props) {
        return [props.row.condicion == 1 ? _c("button", {
          staticClass: "btn btn-outline-success"
        }, [_vm._v("Activo")]) : _vm._e(), _vm._v(" "), props.row.condicion == 0 ? _c("button", {
          staticClass: "btn btn-outline-danger"
        }, [_vm._v("Inactivo")]) : _vm._e(), _vm._v(" "), props.row.condicion == 2 ? _c("button", {
          staticClass: "btn btn-outline-primary"
        }, [_vm._v("En resguardo")]) : _vm._e(), _vm._v(" "), props.row.condicion == 3 ? _c("button", {
          staticClass: "btn btn-outline-primary"
        }, [_vm._v("Sito")]) : _vm._e()];
      }
    }])
  })], 1)])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "modal fade",
    "class": {
      mostrar: _vm.ver_modal_impresora
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
      textContent: _vm._s(_vm.titulo_modal_impresora)
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "close",
    attrs: {
      type: "button",
      "aria-label": "Close"
    },
    on: {
      click: function click($event) {
        return _vm.CerrarModalImpresora();
      }
    }
  }, [_c("span", {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("x")])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_c("form", {
    staticClass: "form-horizontal",
    attrs: {
      method: "post"
    }
  }, [_c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Ubicación")]), _vm._v(" "), _c("div", {
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
      value: _vm.impresora_modal.ubicacion,
      expression: "impresora_modal.ubicacion"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      "data-vv-name": "Ubicación"
    },
    domProps: {
      value: _vm.impresora_modal.ubicacion
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.impresora_modal, "ubicacion", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Ubicación")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Total Hojas")]), _vm._v(" "), _c("div", {
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
      value: _vm.impresora_modal.total_hojas,
      expression: "impresora_modal.total_hojas"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      "data-vv-name": "Total Hojas"
    },
    domProps: {
      value: _vm.impresora_modal.total_hojas
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.impresora_modal, "total_hojas", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Total Hojas")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
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
      value: _vm.impresora_modal.fecha,
      expression: "impresora_modal.fecha"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date",
      "data-vv-name": "Fecha"
    },
    domProps: {
      value: _vm.impresora_modal.fecha
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.impresora_modal, "fecha", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Fecha")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label mt"
  }, [_vm._v("Uso de tinta")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 mb-3"
  }, [_c("label", [_vm._v("Cyan")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.impresora_modal.c,
      expression: "impresora_modal.c"
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
        _vm.$set(_vm.impresora_modal, "c", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "1/2"
    }
  }, [_vm._v("1/2")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("1")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "NO"
    }
  }, [_vm._v("NO")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 mb-3"
  }, [_c("label", [_vm._v("Magenta")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.impresora_modal.m,
      expression: "impresora_modal.m"
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
        _vm.$set(_vm.impresora_modal, "m", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "1/2"
    }
  }, [_vm._v("1/2")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("1")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "NO"
    }
  }, [_vm._v("NO")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 mb-3"
  }, [_c("label", [_vm._v("Yellow")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.impresora_modal.y,
      expression: "impresora_modal.y"
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
        _vm.$set(_vm.impresora_modal, "y", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "1/2"
    }
  }, [_vm._v("1/2")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("1")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "NO"
    }
  }, [_vm._v("NO")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 mb-3"
  }, [_c("label", [_vm._v("Black")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.impresora_modal.k,
      expression: "impresora_modal.k"
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
        _vm.$set(_vm.impresora_modal, "k", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "1/2"
    }
  }, [_vm._v("1/2")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("1")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "NO"
    }
  }, [_vm._v("NO")])])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Observaciones")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-8"
  }, [_c("textarea", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.impresora_modal.observaciones,
      expression: "impresora_modal.observaciones"
    }],
    staticClass: "form-control",
    attrs: {
      rows: "4",
      "data-vv-name": "observaciones"
    },
    domProps: {
      value: _vm.impresora_modal.observaciones
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.impresora_modal, "observaciones", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("observaciones")))])])])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isGuardar_Loading
    }
  }), _vm._v(" "), _c("div", [_c("button", {
    staticClass: "btn btn-outline-dark",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.CerrarModalImpresora
    }
  }, [_c("i", {
    staticClass: "fas fa-times mr-1"
  }), _vm._v("Cerrar")]), _vm._v(" "), _vm.tipoAccion_modal_impresora == 1 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.GuardarMtto
    }
  }, [_c("i", {
    staticClass: "fas fa-save mr-1"
  }), _vm._v("Guardar")]) : _vm._e()])], 1)])])]), _vm._v(" "), _c("div", {
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
  }, [_c("div", {
    staticClass: "modal-header"
  }, [_c("h4", {
    staticClass: "modal-title"
  }, [_vm._v("Historial de Mantenimiento")]), _vm._v(" "), _c("button", {
    staticClass: "close",
    attrs: {
      type: "button",
      "aria-label": "Close"
    },
    on: {
      click: function click($event) {
        return _vm.CerrarModalImpresora();
      }
    }
  }, [_c("span", {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("x")])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_c("table", {
    staticClass: "table table-sm table-striped"
  }, [_vm._m(1), _vm._v(" "), _vm._l(_vm.historial_mttos, function (h) {
    return _c("tr", {
      key: h.id
    }, [_c("td", [_vm._v(_vm._s(h.fecha))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(h.ubicacion))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(h.total_hojas))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(h.c))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(h.m))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(h.y))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(h.k))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(h.observaciones))])]);
  })], 2)]), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("div", [_c("button", {
    staticClass: "btn btn-outline-dark",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.CerrarModalHistorial
    }
  }, [_c("i", {
    staticClass: "fas fa-times mr-1"
  }), _vm._v("Cerrar\n                        ")])])])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header"
  }, [_c("i", {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" Mantenimiento - Impresoras\n        ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("th", [_vm._v("Fecha")]), _vm._v(" "), _c("th", [_vm._v("ubicacion")]), _vm._v(" "), _c("th", [_vm._v("Total Hojas")]), _vm._v(" "), _c("th", [_vm._v("C")]), _vm._v(" "), _c("th", [_vm._v("M")]), _vm._v(" "), _c("th", [_vm._v("Y")]), _vm._v(" "), _c("th", [_vm._v("K")]), _vm._v(" "), _c("th", [_vm._v("Observaciones")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/Mantenimientos/Programa.vue?vue&type=template&id=7f0b947c":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/Mantenimientos/Programa.vue?vue&type=template&id=7f0b947c ***!
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
      value: !_vm.detalle,
      expression: "!detalle"
    }],
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("i", {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" Programa anual de mantenimiento preventivo " + _vm._s(_vm.company == 1 ? "CONSERFLOW" : "CSCT") + "\n                "), _c("div", {
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
  }, [_vm._v("\n                        Empresa\n                    ")]), _vm._v(" "), _c("div", {
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
        _vm.company = 1;
        _vm.buscarCFW();
      }
    }
  }, [_vm._v("Conserflow")]), _vm._v(" "), _c("button", {
    staticClass: "dropdown-item",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        _vm.company = 2;
        _vm.buscarCSCT();
      }
    }
  }, [_vm._v("CSCT")])])]), _vm._v(" "), _c("button", {
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
  }, [_vm._v(" ")]), _vm._v("Nuevo\n                ")])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("v-client-table", {
    attrs: {
      data: _vm.tableData,
      options: _vm.options,
      columns: _vm.columns
    },
    scopedSlots: _vm._u([{
      key: "anio",
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
        }), _vm._v(" \n                            ")]), _vm._v(" "), _c("div", {
          staticClass: "dropdown-menu"
        }, [[_c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.verdetalle(props.row.anio);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-eye"
        }), _vm._v(" Ver detalles\n                                    ")])]], 2)])];
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
              return _vm.descargar(props.row.anio);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-download"
        }), _vm._v(" \n                        ")])];
      }
    }, {
      key: "descripcion",
      fn: function fn(props) {
        return [_c("span", [_vm._v("PROGRAMA ANUAL DE MANTENIMIENTO PREVENTIVO DE EQUIPO DE TI " + _vm._s(props.row.anio))])];
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
  }), _vm._v(" Programa anual de mantenimiento preventivo\n                "), _c("button", {
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
    staticClass: "fas fa-arrow-left"
  }, [_vm._v(" ")]), _vm._v("Atras\n                ")])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("v-client-table", {
    attrs: {
      data: _vm.tableDataDetalle,
      options: _vm.optionsDetalle,
      columns: _vm.columnsDetalle
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
        }), _vm._v(" \n                            ")]), _vm._v(" "), _c("div", {
          staticClass: "dropdown-menu"
        }, [[_c("button", {
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
          staticClass: "fas fa-eye"
        }), _vm._v(" Actualizar\n                                    ")]), _vm._v(" "), _c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.eliminar(props.row.data.id);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-trash"
        }), _vm._v(" Eliminar\n                                    ")])]], 2)])];
      }
    }, {
      key: "data.mes",
      fn: function fn(props) {
        return [props.row.data.mes == 1 ? [_c("span", [_vm._v("Enero")])] : _vm._e(), _vm._v(" "), props.row.data.mes == 2 ? [_c("span", [_vm._v("Febrero")])] : _vm._e(), _vm._v(" "), props.row.data.mes == 3 ? [_c("span", [_vm._v("Marzo")])] : _vm._e(), _vm._v(" "), props.row.data.mes == 4 ? [_c("span", [_vm._v("Abril")])] : _vm._e(), _vm._v(" "), props.row.data.mes == 5 ? [_c("span", [_vm._v("Mayo")])] : _vm._e(), _vm._v(" "), props.row.data.mes == 6 ? [_c("span", [_vm._v("Junio")])] : _vm._e(), _vm._v(" "), props.row.data.mes == 7 ? [_c("span", [_vm._v("Julio")])] : _vm._e(), _vm._v(" "), props.row.data.mes == 8 ? [_c("span", [_vm._v("Agosto")])] : _vm._e(), _vm._v(" "), props.row.data.mes == 9 ? [_c("span", [_vm._v("Septiembre")])] : _vm._e(), _vm._v(" "), props.row.data.mes == 10 ? [_c("span", [_vm._v("Octubre")])] : _vm._e(), _vm._v(" "), props.row.data.mes == 11 ? [_c("span", [_vm._v("Noviembre")])] : _vm._e(), _vm._v(" "), props.row.data.mes == 12 ? [_c("span", [_vm._v("Diciembre")])] : _vm._e()];
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
  }, [_c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v("Tipo")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.tipo,
      expression: "tipo"
    }],
    staticClass: "form-control",
    attrs: {
      "data-vv-name": "tipo"
    },
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
      value: ""
    }
  }, [_vm._v("Seleccione")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("Computo")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "3"
    }
  }, [_vm._v("Impresion")])]), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("tipo")))])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-9 mb-3"
  }, [_c("label", [_vm._v("Seleccione")]), _vm._v(" "), _c("v-select", {
    attrs: {
      options: _vm.listaCatalogo,
      label: "descripcion",
      "data-vv-name": "material"
    },
    on: {
      search: _vm.buscar,
      input: function input($event) {
        return _vm.asignar();
      }
    },
    model: {
      value: _vm.caiv,
      callback: function callback($$v) {
        _vm.caiv = $$v;
      },
      expression: "caiv"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v("Marca")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.marca,
      expression: "marca"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.marca
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.marca = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v("Modelo")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.modelo,
      expression: "modelo"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.modelo
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.modelo = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v("No. Serie")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.num_serie,
      expression: "num_serie"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.num_serie
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.num_serie = $event.target.value;
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v("Mes Mantenimiento")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.mes,
      expression: "mes"
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
        _vm.mes = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("Enero")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "2"
    }
  }, [_vm._v("Febrero")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "3"
    }
  }, [_vm._v("Marzo")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "4"
    }
  }, [_vm._v("Abril")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "5"
    }
  }, [_vm._v("Mayo")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "6"
    }
  }, [_vm._v("Junio")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "7"
    }
  }, [_vm._v("Julio")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "8"
    }
  }, [_vm._v("Agosto")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "9"
    }
  }, [_vm._v("Septiembre")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "10"
    }
  }, [_vm._v("Octubre")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "11"
    }
  }, [_vm._v("Noviembre")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "12"
    }
  }, [_vm._v("Diciembre")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v("Año")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.anio,
      expression: "anio"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.anio
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.anio = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v("Empresa")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.empresa,
      expression: "empresa"
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
        _vm.empresa = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("Conserflow")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "2"
    }
  }, [_vm._v("CSCT")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("vue-element-loading", {
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
        return _vm.Guardar(1);
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
        return _vm.Guardar(0);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Actualizar")]) : _vm._e()], 1)])])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/Mantenimientos/ReportePreventivo.vue?vue&type=template&id=17db10e8":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/Mantenimientos/ReportePreventivo.vue?vue&type=template&id=17db10e8 ***!
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
  }), _vm._v(" Reporte de Mantenimiento Preventivo\n            "), _c("button", {
    staticClass: "btn btn-dark float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.AbrirModalMtto(true);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  }, [_vm._v(" ")]), _vm._v("Nuevo\n            ")])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {}, [_c("div", {}, [_c("v-client-table", {
    ref: "tbl_mtto",
    attrs: {
      columns: _vm.columns_mtto,
      data: _vm.list_mtto,
      options: _vm.options_mtto
    },
    scopedSlots: _vm._u([{
      key: "mtto.tipo_equipo",
      fn: function fn(props) {
        return [props.row.mtto.tipo_equipo == 1 ? _c("p", [_vm._v("Cómputo")]) : props.row.mtto.tipo_equipo == 2 ? _c("p", [_vm._v("Impresión")]) : props.row.mtto.tipo_equipo == 3 ? _c("p", [_vm._v("Red")]) : _c("p", [_vm._v("WFT??")])];
      }
    }, {
      key: "mtto.id",
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
              return _vm.AbrirModalMtto(false, props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-edit"
        }), _vm._v(" Detalles\n                                        ")]), _vm._v(" "), _c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.Reporte(props.row.mtto);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-file-pdf"
        }), _vm._v(" Descargar\n                                        ")])]], 2)])];
      }
    }])
  })], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "modal fade",
    "class": {
      mostrar: _vm.ver_modal_mtto
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
      textContent: _vm._s(_vm.titulo_modal_mtto)
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "close",
    attrs: {
      type: "button",
      "aria-label": "Close"
    },
    on: {
      click: function click($event) {
        return _vm.CerrarModalMtto();
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
    staticClass: "col-md-2 form-control-label"
  }, [_vm._v("Tipo")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.tipo_equipo_buscar,
      expression: "tipo_equipo_buscar"
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
        _vm.tipo_equipo_buscar = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("Cómputo")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "2"
    }
  }, [_vm._v("Impresión")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "3"
    }
  }, [_vm._v("Red")])])]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-dark btn-sm",
    attrs: {
      disabled: !_vm.editar
    },
    on: {
      click: function click($event) {
        return _vm.AbrirModalEquipos();
      }
    }
  }, [_vm._v(" Buscar\n                            "), _c("i", {
    staticClass: "fas fa-button"
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2 form-control-label"
  }, [_vm._v("No. Serie")]), _vm._v(" "), _c("div", {
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
      value: _vm.mtto_modal.equipo.no_serie,
      expression: "mtto_modal.equipo.no_serie"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "no_serie",
      disabled: true
    },
    domProps: {
      value: _vm.mtto_modal.equipo.no_serie
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.mtto_modal.equipo, "no_serie", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2 form-control-label"
  }, [_vm._v("Marca/Modelo")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: '"required"'
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.mtto_modal.equipo.marca_modelo,
      expression: "mtto_modal.equipo.marca_modelo"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      disabled: true,
      "data-vv-name": "No. Serie"
    },
    domProps: {
      value: _vm.mtto_modal.equipo.marca_modelo
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.mtto_modal.equipo, "marca_modelo", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("No. Serie")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2 form-control-label"
  }, [_vm._v("Descripción")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-8"
  }, [_c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.mtto_modal.equipo.descripcion,
      expression: "mtto_modal.equipo.descripcion"
    }],
    staticClass: "form-control",
    attrs: {
      disabled: true,
      cols: "4"
    },
    domProps: {
      value: _vm.mtto_modal.equipo.descripcion
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.mtto_modal.equipo, "descripcion", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", {
    staticClass: "form-control-label"
  }, [_vm._v("Fecha")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: '"required"'
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.mtto_modal.fecha,
      expression: "mtto_modal.fecha"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date",
      "data-vv-name": "Fecha"
    },
    domProps: {
      value: _vm.mtto_modal.fecha
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.mtto_modal, "fecha", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Fecha")))])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", {
    staticClass: "form-control-label"
  }, [_vm._v("Hora Inicio")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: '"required"'
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.mtto_modal.hora_inicio,
      expression: "mtto_modal.hora_inicio"
    }],
    staticClass: "form-control",
    attrs: {
      type: "time",
      min: "08:00",
      max: "18:00",
      "data-vv-name": "Hora Inicio"
    },
    domProps: {
      value: _vm.mtto_modal.hora_inicio
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.mtto_modal, "hora_inicio", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Hora Inicio")))])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", {
    staticClass: "form-control-label"
  }, [_vm._v("Hora Termino")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: '"required"'
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.mtto_modal.hora_termino,
      expression: "mtto_modal.hora_termino"
    }],
    staticClass: "form-control",
    attrs: {
      type: "time",
      min: "08:00",
      max: "18:00",
      "data-vv-name": "Hora Termino"
    },
    domProps: {
      value: _vm.mtto_modal.hora_termino
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.mtto_modal, "hora_termino", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Hora Termino")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2 form-control-label"
  }, [_vm._v("Persona asignada")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-9"
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
      "data-vv-name": "Persona asignada"
    },
    model: {
      value: _vm.mtto_modal.empleado_realizo,
      callback: function callback($$v) {
        _vm.$set(_vm.mtto_modal, "empleado_realizo", $$v);
      },
      expression: "mtto_modal.empleado_realizo"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Persona asignada")))])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2 form-control-label"
  }, [_vm._v("Actividades")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-10"
  }, [_c("textarea", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: '"required"'
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.mtto_modal.activades,
      expression: "mtto_modal.activades"
    }],
    staticClass: "form-control",
    attrs: {
      cols: "4",
      rows: "5",
      "data-vv-name": "Actividades"
    },
    domProps: {
      value: _vm.mtto_modal.activades
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.mtto_modal, "activades", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Actividades")))])])]), _vm._v(" "), _c("div", {
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
      expression: '"required"'
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.mtto_modal.observaciones,
      expression: "mtto_modal.observaciones"
    }],
    staticClass: "form-control",
    attrs: {
      cols: "4",
      rows: "5",
      "data-vv-name": "Observaciones"
    },
    domProps: {
      value: _vm.mtto_modal.observaciones
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.mtto_modal, "observaciones", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Observaciones")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2 form-control-label"
  }, [_vm._v("Refacciones")]), _vm._v(" "), _c("vue-element-loading", {
    attrs: {
      active: _vm.isConsumibles_loading
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "col-md-10"
  }, [_vm.tipoAccion_modal_mtto == 1 ? _c("div", {
    staticClass: "row"
  }, _vm._l(_vm.list_consumibles, function (consumible, i) {
    return _c("div", {
      key: consumible.id,
      staticClass: "col col-sm-4"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.list_consumibles_checked[i].checked,
        expression: "list_consumibles_checked[i].checked"
      }],
      attrs: {
        type: "checkbox"
      },
      domProps: {
        checked: Array.isArray(_vm.list_consumibles_checked[i].checked) ? _vm._i(_vm.list_consumibles_checked[i].checked, null) > -1 : _vm.list_consumibles_checked[i].checked
      },
      on: {
        change: function change($event) {
          var $$a = _vm.list_consumibles_checked[i].checked,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;
          if (Array.isArray($$a)) {
            var $$v = null,
              $$i = _vm._i($$a, $$v);
            if ($$el.checked) {
              $$i < 0 && _vm.$set(_vm.list_consumibles_checked[i], "checked", $$a.concat([$$v]));
            } else {
              $$i > -1 && _vm.$set(_vm.list_consumibles_checked[i], "checked", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
            }
          } else {
            _vm.$set(_vm.list_consumibles_checked[i], "checked", $$c);
          }
        }
      }
    }), _vm._v(" "), _c("label", {
      staticClass: "form-control-label"
    }, [_vm._v(_vm._s(consumible.nombre))])]);
  }), 0) : _vm._e(), _vm._v(" "), _vm.tipoAccion_modal_mtto == 2 ? _c("div", {
    staticClass: "row"
  }, _vm._l(_vm.list_consumibles_checked, function (consumible, i) {
    return _c("div", {
      key: consumible.id,
      staticClass: "col col-sm-4"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.list_consumibles_checked[i].checked,
        expression: "list_consumibles_checked[i].checked"
      }],
      attrs: {
        type: "checkbox",
        disabled: ""
      },
      domProps: {
        checked: Array.isArray(_vm.list_consumibles_checked[i].checked) ? _vm._i(_vm.list_consumibles_checked[i].checked, null) > -1 : _vm.list_consumibles_checked[i].checked
      },
      on: {
        change: function change($event) {
          var $$a = _vm.list_consumibles_checked[i].checked,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;
          if (Array.isArray($$a)) {
            var $$v = null,
              $$i = _vm._i($$a, $$v);
            if ($$el.checked) {
              $$i < 0 && _vm.$set(_vm.list_consumibles_checked[i], "checked", $$a.concat([$$v]));
            } else {
              $$i > -1 && _vm.$set(_vm.list_consumibles_checked[i], "checked", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
            }
          } else {
            _vm.$set(_vm.list_consumibles_checked[i], "checked", $$c);
          }
        }
      }
    }), _vm._v(" "), _c("label", {
      staticClass: "form-control-label"
    }, [_vm._v(_vm._s(consumible.nombre))])]);
  }), 0) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col text-right mr-2"
  }, [_c("button", {
    staticClass: "btn btn-sm btn-dark",
    attrs: {
      disabled: !_vm.editar
    },
    on: {
      click: _vm.NuevoConsumible
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  }), _vm._v(" Nuevo\n                                    ")])])])])], 1), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("div", {
    staticClass: "col-md-6"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Realizó")]), _vm._v(" "), _c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: '"required"'
    }],
    attrs: {
      label: "nombre",
      options: _vm.list_empleados,
      "data-vv-name": "Realizó"
    },
    model: {
      value: _vm.mtto_modal.empleado_realizo,
      callback: function callback($$v) {
        _vm.$set(_vm.mtto_modal, "empleado_realizo", $$v);
      },
      expression: "mtto_modal.empleado_realizo"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Realizó")))])], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("label", {
    staticClass: "control-label"
  }, [_vm._v("Validó")]), _vm._v(" "), _c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: '"required"'
    }],
    attrs: {
      label: "nombre",
      options: _vm.list_empleados,
      "data-vv-name": "Validó"
    },
    model: {
      value: _vm.mtto_modal.empleado_valido,
      callback: function callback($$v) {
        _vm.$set(_vm.mtto_modal, "empleado_valido", $$v);
      },
      expression: "mtto_modal.empleado_valido"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Validó")))])], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("button", {
    staticClass: "btn btn-outline-dark",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.CerrarModalMtto();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-times"
  }), _vm._v(" Cerrar")]), _vm._v(" "), _vm.tipoAccion_modal_mtto == 1 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.GuardarMtto(1);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Guardar")]) : _vm._e()])])])]), _vm._v(" "), _c("div", {
    staticClass: "modal fade",
    "class": {
      mostrar: _vm.ver_modal_equipos
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
  }, [_vm._v("Buscar equipos")]), _vm._v(" "), _c("button", {
    staticClass: "close",
    attrs: {
      type: "button",
      "aria-label": "Close"
    },
    on: {
      click: function click($event) {
        return _vm.CerrarModalEquipos();
      }
    }
  }, [_c("span", {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("x")])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_c("v-client-table", {
    attrs: {
      columns: _vm.columns_equipos,
      data: _vm.list_equipos,
      options: _vm.options_equipos
    },
    on: {
      "row-click": _vm.SeleccionarEquipo
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("button", {
    staticClass: "btn btn-outline-dark",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.CerrarModalEquipos();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-times"
  }), _vm._v(" Cerrar")])])])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/MatrizPorPuesto.vue?vue&type=template&id=69b5b10a":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/MatrizPorPuesto.vue?vue&type=template&id=69b5b10a ***!
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
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.tipoCardMatrizRequisitos == 1,
      expression: "tipoCardMatrizRequisitos==1"
    }],
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("i", {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" MATRIZ DE REQUISITOS POR PUESTO\n            "), _vm.PermisosCRUD.Create ? _c("button", {
    staticClass: "btn btn-dark float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.AbrirModalMatrizRequisitos(true);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus mr-1"
  }), _vm._v("Nuevo\n            ")]) : _vm._e(), _vm._v(" "), _vm.PermisosCRUD.Download ? _c("button", {
    staticClass: "btn btn-dark mr-1 float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.Descargar
    }
  }, [_c("i", {
    staticClass: "fas fa-file-pdf mr-1"
  }), _vm._v("Descargar\n            ")]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isObtenermatrizrequisitos_loading
    }
  }), _vm._v(" "), _c("v-client-table", {
    attrs: {
      columns: _vm.columns_matrizrequisitos,
      data: _vm.list_matrizrequisitos,
      options: _vm.options_matrizrequisitos
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
        }), _vm._v(" Acciones\n                            ")]), _vm._v(" "), _c("div", {
          staticClass: "dropdown-menu"
        }, [_c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.AbrirModalMatrizRequisitos(false, props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-edit"
        }), _vm._v(" Actualizar\n                                ")])])])])];
      }
    }])
  })], 1)]), _vm._v(" "), _vm.ver_modal_matrizrequisitos ? _c("div", {
    staticClass: "modal fade",
    "class": {
      mostrar: _vm.ver_modal_matrizrequisitos
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
      textContent: _vm._s(_vm.tituloModal_matrizrequisitos)
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "close",
    attrs: {
      type: "button",
      "aria-label": "Close"
    },
    on: {
      click: function click($event) {
        return _vm.CerrarModalMatrizRequisitos();
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
      active: _vm.isGuardarmatrizrequisitos_loading
    }
  }), _vm._v(" "), _c("div", [_c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Puesto")]), _vm._v(" "), _c("div", {
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
      value: _vm.matrizrequisitos.puesto,
      expression: "matrizrequisitos.puesto"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      "data-vv-name": "Puesto"
    },
    domProps: {
      value: _vm.matrizrequisitos.puesto
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.matrizrequisitos, "puesto", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Puesto")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Jefatura del puesto")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-9"
  }, [_c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    attrs: {
      label: "nombre",
      options: _vm.list_puestos,
      "data-vv-name": "Jefatura del puesto"
    },
    model: {
      value: _vm.matrizrequisitos.puesto_jefe,
      callback: function callback($$v) {
        _vm.$set(_vm.matrizrequisitos, "puesto_jefe", $$v);
      },
      expression: "matrizrequisitos.puesto_jefe"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Jefatura del puesto")))])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Software")]), _vm._v(" "), _c("div", {
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
      value: _vm.matrizrequisitos.software,
      expression: "matrizrequisitos.software"
    }],
    staticClass: "form-control",
    attrs: {
      maxlength: "145",
      minlength: "5",
      "data-vv-name": "Software"
    },
    domProps: {
      value: _vm.matrizrequisitos.software
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.matrizrequisitos, "software", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Software")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Características del equipo")]), _vm._v(" "), _c("div", {
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
      value: _vm.matrizrequisitos.equipo,
      expression: "matrizrequisitos.equipo"
    }],
    staticClass: "form-control",
    attrs: {
      maxlength: "145",
      minlength: "5",
      "data-vv-name": "Características del equipo"
    },
    domProps: {
      value: _vm.matrizrequisitos.equipo
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.matrizrequisitos, "equipo", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Características del equipo")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Accesorios")]), _vm._v(" "), _c("div", {
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
      value: _vm.matrizrequisitos.accesorios,
      expression: "matrizrequisitos.accesorios"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      maxlength: "45",
      minlength: "3",
      "data-vv-name": "Accesorios"
    },
    domProps: {
      value: _vm.matrizrequisitos.accesorios
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.matrizrequisitos, "accesorios", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Accesorios")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Impresora")]), _vm._v(" "), _c("div", {
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
      value: _vm.matrizrequisitos.impresora,
      expression: "matrizrequisitos.impresora"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      maxlength: "50",
      minlength: "3",
      "data-vv-name": "Impresora",
      autocomplete: "off"
    },
    domProps: {
      value: _vm.matrizrequisitos.impresora
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.matrizrequisitos, "impresora", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Impresora")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Red")]), _vm._v(" "), _c("div", {
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
      value: _vm.matrizrequisitos.red,
      expression: "matrizrequisitos.red"
    }],
    staticClass: "form-control",
    attrs: {
      "data-vv-name": "Red"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.matrizrequisitos, "red", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "SI"
    }
  }, [_vm._v("Sí")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "NO"
    }
  }, [_vm._v("No")])]), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Red")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Otro")]), _vm._v(" "), _c("div", {
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
      value: _vm.matrizrequisitos.otro,
      expression: "matrizrequisitos.otro"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      maxlength: "45",
      minlength: "3",
      "data-vv-name": "Otro"
    },
    domProps: {
      value: _vm.matrizrequisitos.otro
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.matrizrequisitos, "otro", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Otro")))])])])])], 1), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isGuardarmatrizrequisitos_loading
    }
  }), _vm._v(" "), _c("div", [_c("button", {
    staticClass: "btn btn-outline-dark",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.CerrarModalMatrizRequisitos();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-window-close"
  }), _vm._v(" Cerrar\n                            ")]), _vm._v(" "), _vm.tipoAccion_matrizrequisitos == 1 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.RegistrarMatrizRequisitos(true);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Guardar\n                            ")]) : _vm._e(), _vm._v(" "), _vm.tipoAccion_matrizrequisitos == 2 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.RegistrarMatrizRequisitos(false);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Actualizar\n                            ")]) : _vm._e()])], 1)])])])]) : _vm._e()]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/PropuestaEquipo.vue?vue&type=template&id=0fb07249":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/PropuestaEquipo.vue?vue&type=template&id=0fb07249 ***!
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
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.tipoCardpropuesta == 1,
      expression: "tipoCardpropuesta==1"
    }],
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("i", {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" PROPUESTA DE EQUIPO\n            "), _vm.PermisosCRUD.Create ? [_c("button", {
    staticClass: "btn btn-dark float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.AbrirModalpropuesta(true);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  }), _vm._v(" Nuevo\n                ")])] : _vm._e()], 2), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isObtenerpropuesta_loading
    }
  }), _vm._v(" "), _c("v-client-table", {
    attrs: {
      columns: _vm.columns_propuesta,
      data: _vm.list_propuesta,
      options: _vm.options_propuesta
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
        }), _vm._v(" Acciones\n                            ")]), _vm._v(" "), _c("div", {
          staticClass: "dropdown-menu"
        }, [_c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.AbrirModalpropuesta(false, props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-edit"
        }), _vm._v(" Detalles\n                                ")])])])])];
      }
    }, {
      key: "tipo",
      fn: function fn(props) {
        return [props.row.tipo == 1 ? _c("button", {
          staticClass: "btn btn-outline-primary"
        }, [_vm._v("Cómputo")]) : _vm._e(), _vm._v(" "), props.row.tipo == 2 ? _c("button", {
          staticClass: "btn btn-outline-success"
        }, [_vm._v("Accesorios")]) : _vm._e(), _vm._v(" "), props.row.tipo == 3 ? _c("button", {
          staticClass: "btn btn-outline-dark"
        }, [_vm._v("Impresión")]) : _vm._e(), _vm._v(" "), props.row.tipo == 4 ? _c("button", {
          staticClass: "btn btn-outline-warning"
        }, [_vm._v("Vídeo")]) : _vm._e()];
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
              return _vm.Descargar(props.row.id);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-download"
        })])];
      }
    }])
  })], 1)]), _vm._v(" "), _vm.ver_modal_propuesta ? _c("div", {
    staticClass: "modal fade",
    "class": {
      mostrar: _vm.ver_modal_propuesta
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
      textContent: _vm._s(_vm.tituloModal_propuesta)
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "close",
    attrs: {
      type: "button",
      "aria-label": "Close"
    },
    on: {
      click: function click($event) {
        return _vm.CerrarModalpropuesta();
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
      active: _vm.isGuardarpropuesta_loading
    }
  }), _vm._v(" "), _c("div", [_c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
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
      value: _vm.propuesta.fecha,
      expression: "propuesta.fecha"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date",
      "data-vv-name": "Fecha"
    },
    domProps: {
      value: _vm.propuesta.fecha
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.propuesta, "fecha", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Fecha")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Puesto")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-9"
  }, [_c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    attrs: {
      label: "nombre",
      options: _vm.list_puestos,
      "data-vv-name": "Puesto"
    },
    model: {
      value: _vm.propuesta.puesto,
      callback: function callback($$v) {
        _vm.$set(_vm.propuesta, "puesto", $$v);
      },
      expression: "propuesta.puesto"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Puesto")))])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Necesidad Especial")]), _vm._v(" "), _c("div", {
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
      value: _vm.propuesta.necesidad_especial,
      expression: "propuesta.necesidad_especial"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      maxlength: "75",
      minlength: "3",
      "data-vv-name": "Necesidad Especial",
      autocomplete: "off"
    },
    domProps: {
      value: _vm.propuesta.necesidad_especial
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.propuesta, "necesidad_especial", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Necesidad Especial")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Tipo")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4"
  }, [_c("select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.propuesta.tipo,
      expression: "propuesta.tipo"
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
        _vm.$set(_vm.propuesta, "tipo", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("Cómputo")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "2"
    }
  }, [_vm._v("Accesorios")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "3"
    }
  }, [_vm._v("Impresión")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "4"
    }
  }, [_vm._v("Vídeo")])]), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Tipo")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Marca")]), _vm._v(" "), _c("div", {
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
      value: _vm.propuesta.marca,
      expression: "propuesta.marca"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      maxlength: "45",
      minlength: "2",
      "data-vv-name": "Marca",
      autocomplete: "off"
    },
    domProps: {
      value: _vm.propuesta.marca
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.propuesta, "marca", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Marca")))])]), _vm._v(" "), _c("label", {
    staticClass: "col-md-1 form-control-label"
  }, [_vm._v("Modelo")]), _vm._v(" "), _c("div", {
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
      value: _vm.propuesta.modelo,
      expression: "propuesta.modelo"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      maxlength: "45",
      minlength: "3",
      "data-vv-name": "Modelo",
      autocomplete: "off"
    },
    domProps: {
      value: _vm.propuesta.modelo
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.propuesta, "modelo", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Modelo")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Almacenamiento")]), _vm._v(" "), _c("div", {
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
      value: _vm.propuesta.almacenamiento,
      expression: "propuesta.almacenamiento"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      maxlength: "45",
      minlength: "3",
      "data-vv-name": "Almacenamiento",
      autocomplete: "off"
    },
    domProps: {
      value: _vm.propuesta.almacenamiento
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.propuesta, "almacenamiento", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Almacenamiento")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Procesador")]), _vm._v(" "), _c("div", {
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
      value: _vm.propuesta.procesador,
      expression: "propuesta.procesador"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      maxlength: "45",
      minlength: "3",
      "data-vv-name": "Procesador",
      autocomplete: "off"
    },
    domProps: {
      value: _vm.propuesta.procesador
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.propuesta, "procesador", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Procesador")))])]), _vm._v(" "), _c("label", {
    staticClass: "col-md-1 form-control-label"
  }, [_vm._v("RAM")]), _vm._v(" "), _c("div", {
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
      value: _vm.propuesta.ram,
      expression: "propuesta.ram"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      maxlength: "45",
      minlength: "3",
      "data-vv-name": "RAM",
      autocomplete: "off"
    },
    domProps: {
      value: _vm.propuesta.ram
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.propuesta, "ram", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("RAM")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Comentarios")]), _vm._v(" "), _c("div", {
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
      value: _vm.propuesta.comentarios,
      expression: "propuesta.comentarios"
    }],
    staticClass: "form-control",
    attrs: {
      rows: "4",
      maxlength: "45",
      minlength: "1",
      "data-vv-name": "Comentarios"
    },
    domProps: {
      value: _vm.propuesta.comentarios
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.propuesta, "comentarios", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Comentarios")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Accesorios Adicionales")]), _vm._v(" "), _c("div", {
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
      value: _vm.propuesta.accesorios,
      expression: "propuesta.accesorios"
    }],
    staticClass: "form-control",
    attrs: {
      rows: "5",
      maxlength: "75",
      minlength: "1",
      "data-vv-name": "Accesorios Adicionales"
    },
    domProps: {
      value: _vm.propuesta.accesorios
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.propuesta, "accesorios", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Accesorios Adicionales")))])])]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.tipoAccion_propuesta == 2,
      expression: "tipoAccion_propuesta==2"
    }]
  }, [_c("h4", [_vm._v("Cotizaciones")]), _vm._v(" "), _vm.PermisosCRUD.Create ? [_c("button", {
    staticClass: "btn btn-dark float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.AbrirModalcotizacion(true);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  }), _vm._v(" Nuevo\n                                    ")])] : _vm._e(), _vm._v(" "), _c("br"), _vm._v(" "), _c("br"), _vm._v(" "), _c("vue-element-loading", {
    attrs: {
      active: _vm.isObtenercotizacion_loading
    }
  }), _vm._v(" "), _c("v-client-table", {
    attrs: {
      columns: _vm.columns_cotizacion,
      data: _vm.list_cotizacion,
      options: _vm.options_cotizacion
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
        }), _vm._v(" Acciones\n                                                ")]), _vm._v(" "), _c("div", {
          staticClass: "dropdown-menu"
        }, [_c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.AbrirModalcotizacion(false, props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-edit"
        }), _vm._v(" Actualizar\n                                                    ")])])])])];
      }
    }], null, false, 3872088222)
  })], 2)])], 1), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isGuardarpropuesta_loading
    }
  }), _vm._v(" "), _c("div", [_c("button", {
    staticClass: "btn btn-outline-dark",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.CerrarModalpropuesta();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-window-close"
  }), _vm._v(" Cerrar\n                            ")]), _vm._v(" "), _vm.tipoAccion_propuesta == 1 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.Registrarpropuesta(true);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Guardar\n                            ")]) : _vm._e(), _vm._v(" "), _vm.tipoAccion_propuesta == 2 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.Registrarpropuesta(false);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Actualizar\n                            ")]) : _vm._e()])], 1)])])])]) : _vm._e(), _vm._v(" "), _vm.ver_modal_cotizacion ? _c("div", {
    staticClass: "modal fade",
    "class": {
      mostrar: _vm.ver_modal_cotizacion
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
      textContent: _vm._s(_vm.tituloModal_cotizacion)
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "close",
    attrs: {
      type: "button",
      "aria-label": "Close"
    },
    on: {
      click: function click($event) {
        return _vm.CerrarModalcotizacion();
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
      active: _vm.isGuardarcotizacion_loading
    }
  }), _vm._v(" "), _c("div", [_c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Proveedor")]), _vm._v(" "), _c("div", {
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
      value: _vm.cotizacion.proveedor,
      expression: "cotizacion.proveedor"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      maxlength: "45",
      minlength: "2",
      "data-vv-name": "Proveedor",
      autocomplete: "off"
    },
    domProps: {
      value: _vm.cotizacion.proveedor
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.cotizacion, "proveedor", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Proveedor")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Marca")]), _vm._v(" "), _c("div", {
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
      value: _vm.cotizacion.marca,
      expression: "cotizacion.marca"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      maxlength: "45",
      minlength: "2",
      "data-vv-name": "Marca",
      autocomplete: "off"
    },
    domProps: {
      value: _vm.cotizacion.marca
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.cotizacion, "marca", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Marca")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Costo")]), _vm._v(" "), _c("div", {
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
      value: _vm.cotizacion.costo,
      expression: "cotizacion.costo"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      min: "0",
      max: "99999",
      "data-vv-name": "Costo"
    },
    domProps: {
      value: _vm.cotizacion.costo
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.cotizacion, "costo", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Costo")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Forma de pago")]), _vm._v(" "), _c("div", {
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
      value: _vm.cotizacion.forma_pago,
      expression: "cotizacion.forma_pago"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      maxlength: "45",
      minlength: "3",
      "data-vv-name": "Forma de pago",
      autocomplete: "off"
    },
    domProps: {
      value: _vm.cotizacion.forma_pago
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.cotizacion, "forma_pago", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Forma de pago")))])])])])], 1), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isGuardarcotizacion_loading
    }
  }), _vm._v(" "), _c("div", [_c("button", {
    staticClass: "btn btn-outline-dark",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.CerrarModalcotizacion();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-window-close"
  }), _vm._v(" Cerrar\n                            ")]), _vm._v(" "), _vm.tipoAccion_cotizacion == 1 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.Registrarcotizacion(true);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Guardar\n                            ")]) : _vm._e(), _vm._v(" "), _vm.tipoAccion_cotizacion == 2 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.Registrarcotizacion(false);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Actualizar\n                            ")]) : _vm._e()])], 1)])])])]) : _vm._e()]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/Servicios/Historico.vue?vue&type=template&id=adc32e8a":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/Servicios/Historico.vue?vue&type=template&id=adc32e8a ***!
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
  return _c("main", {
    staticClass: "main"
  }, [_c("div", {}, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("i", {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" Histórico Servicios\n\n                "), _c("button", {
    staticClass: "btn btn-dark float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.AbrirModalHistorico(true);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  }, [_vm._v(" ")]), _vm._v("Nuevo\n                ")]), _vm._v(" "), _vm._m(0)]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "collapse multi-collapse",
    attrs: {
      id: "multiCollapseExample1"
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
  }, [_vm._v("2022")])]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-dark mt-2",
    on: {
      click: _vm.DescargarHistorico
    }
  }, [_vm._v("Generar")])])])])]), _vm._v(" "), _c("br"), _vm._v(" "), _c("vue-element-loading", {
    attrs: {
      active: _vm.isObtenerLoading
    }
  }), _vm._v(" "), _c("div", [_c("v-client-table", {
    attrs: {
      data: _vm.list_historico,
      options: _vm.options,
      columns: _vm.columns
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
            type: "button",
            "data-toggle": "dropdown",
            "aria-haspopup": "true",
            "aria-expanded": "false"
          }
        }, [_c("i", {
          staticClass: "fas fa-grip-horizontal"
        })]), _vm._v(" "), _c("div", {
          staticClass: "dropdown-menu"
        }, [[_c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.AbrirModalHistorico(false, props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-edit mr-1"
        }), _vm._v("Actualizar\n                                        ")]), _vm._v(" "), _c("button", {
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
          staticClass: "fas fa-times mr-1"
        }), _vm._v("Eliminar\n                                        ")])]], 2)])];
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
        return _vm.CerrarModalHistorico();
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
    staticClass: "col-md-3 mb-3"
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
    attrs: {
      "data-vv-name": "tipo"
    },
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
      value: "PREVENTIVO"
    }
  }, [_vm._v("Preventivo")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "CORRECTIVO"
    }
  }, [_vm._v("Correctivo")])]), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("tipo")))])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-5 mb-3"
  }, [_c("label", [_vm._v("Usuario")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.usuario,
      expression: "usuario"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      "data-vv-name": "usuario"
    },
    domProps: {
      value: _vm.usuario
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.usuario = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("usuario")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-9 mb-3"
  }, [_c("label", [_vm._v("Problema/Servicio")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.problema_servicio,
      expression: "problema_servicio"
    }],
    staticClass: "form-control",
    attrs: {
      name: "name",
      rows: "2",
      cols: "80",
      "data-vv-name": "Problema/Servicio"
    },
    domProps: {
      value: _vm.problema_servicio
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.problema_servicio = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Problema/Servicio")))])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v("Fecha Reporte")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.fecha_reporte,
      expression: "fecha_reporte"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date",
      "data-vv-name": "fecha reporte"
    },
    domProps: {
      value: _vm.fecha_reporte
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.fecha_reporte = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("fecha reporte")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-9 mb-3"
  }, [_c("label", [_vm._v("Solución")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.solucion,
      expression: "solucion"
    }],
    staticClass: "form-control",
    attrs: {
      name: "name",
      rows: "2",
      cols: "80",
      "data-vv-name": "solucion"
    },
    domProps: {
      value: _vm.solucion
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.solucion = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("solucion")))])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v("Fecha Solución")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.fecha_solucion,
      expression: "fecha_solucion"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date",
      "data-vv-name": "fecha solucion"
    },
    domProps: {
      value: _vm.fecha_solucion
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.fecha_solucion = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("fecha solucion")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v("Reincidencia")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.reincidencia,
      expression: "reincidencia"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      "data-vv-name": "reincidencia"
    },
    domProps: {
      value: _vm.reincidencia
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.reincidencia = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("reincidencia")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-9 mb-3"
  }, [_c("label", [_vm._v("Realiza")]), _vm._v(" "), _c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    attrs: {
      label: "nombre",
      options: _vm.list_empleados
    },
    model: {
      value: _vm.realiza,
      callback: function callback($$v) {
        _vm.realiza = $$v;
      },
      expression: "realiza"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("realiza")))])], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isObtenerLoading
    }
  }), _vm._v(" "), _c("div", [_c("button", {
    staticClass: "btn btn-outline-dark",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.CerrarModalHistorico();
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
        return _vm.GuardarHistorico(1);
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
        return _vm.GuardarHistorico(0);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Actualizar")]) : _vm._e()])], 1)])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("button", {
    staticClass: "btn btn-dark float-sm-right mr-1",
    attrs: {
      "data-toggle": "collapse",
      href: "#multiCollapseExample1",
      role: "button",
      "aria-expanded": "false",
      "aria-controls": "multiCollapseExample1"
    }
  }, [_c("i", {
    staticClass: "fas fa-file-pdf mr-1"
  }), _vm._v("Descargar\n                ")]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/Vales/Resguardo.vue?vue&type=template&id=ea4319f2":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/Vales/Resguardo.vue?vue&type=template&id=ea4319f2 ***!
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
  return _c("div", [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("v-client-table", {
    attrs: {
      data: _vm.list_vales,
      columns: _vm.columns_vales,
      options: _vm.options_vales
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
        }, [[props.row.estado <= 1 ? _c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.AbrirModal(false, props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-edit mr-1"
        }), _vm._v("Actualizar\n                                ")]) : _vm._e(), _vm._v(" "), props.row.estado <= 1 ? _c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.Regresar(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-undo mr-1"
        }), _vm._v("Retorno\n                                ")]) : _vm._e()]], 2)])];
      }
    }, {
      key: "autorizado",
      fn: function fn(props) {
        return [props.row.autorizado ? _c("button", {
          staticClass: "btn btn-outline-success"
        }, [_vm._v(" Autorizado")]) : _c("button", {
          staticClass: "btn btn-outline-danger",
          on: {
            click: function click($event) {
              return _vm.AbrirModalAutorizar(props.row);
            }
          }
        }, [_vm._v(" Por autorizar")])];
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
              return _vm.Descargar(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-download"
        })])];
      }
    }, {
      key: "estado",
      fn: function fn(props) {
        return [props.row.estado == 1 ? [_c("span", {
          staticClass: "btn btn-outline-success"
        }, [_vm._v(" EN RESGUARDO")])] : _vm._e(), _vm._v(" "), props.row.estado == 2 ? [_c("span", {
          staticClass: "btn btn-outline-primary"
        }, [_vm._v(" RETORNADO")])] : _vm._e(), _vm._v(" "), props.row.estado == 3 ? [_c("span", {
          staticClass: "btn btn-outline-warning"
        }, [_vm._v(" RETORNADO CON OBSERVACIONES")])] : _vm._e()];
      }
    }, {
      key: "tipo",
      fn: function fn(props) {
        return [props.row.tipo == 1 ? [_c("span", {
          staticClass: "btn btn-outline-success"
        }, [_vm._v(" Computo")])] : _vm._e(), _vm._v(" "), props.row.tipo == 2 ? [_c("span", {
          staticClass: "btn btn-outline-primary"
        }, [_vm._v(" Accesorios")])] : _vm._e(), _vm._v(" "), props.row.tipo == 3 ? [_c("span", {
          staticClass: "btn btn-outline-warning"
        }, [_vm._v(" Impresión")])] : _vm._e(), _vm._v(" "), props.row.tipo == 4 ? [_c("span", {
          staticClass: "btn btn-outline-success"
        }, [_vm._v(" Video")])] : _vm._e()];
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
  }, [_vm._v("x")])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v("Fecha")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.resguardo.fecha,
      expression: "resguardo.fecha"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    attrs: {
      disabled: !_vm.editar,
      type: "date",
      "data-vv-name": "fecha"
    },
    domProps: {
      value: _vm.resguardo.fecha
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.resguardo, "fecha", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("fecha")))])]), _vm._v(" "), _vm.tipoAccion == 3 ? [_c("div", {
    staticClass: "col-md-4 mb-3"
  }, [_c("label", [_vm._v("Fecha retorno")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.resguardo.fecha_retorno,
      expression: "resguardo.fecha_retorno"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date",
      "data-vv-name": "Fecha Retorno"
    },
    domProps: {
      value: _vm.resguardo.fecha_retorno
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.resguardo, "fecha_retorno", $event.target.value);
      }
    }
  })])] : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v("Tipo")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.resguardo.tipo,
      expression: "resguardo.tipo"
    }],
    staticClass: "form-control",
    attrs: {
      disabled: !_vm.editar
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.resguardo, "tipo", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.ObtenerEquipos]
    }
  }, [_c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("Computo")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "2"
    }
  }, [_vm._v("Accesorios")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "3"
    }
  }, [_vm._v("Impresion")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "4"
    }
  }, [_vm._v("Video")])]), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("tipo")))])])], 2), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-12 mb-3"
  }, [_c("label", [_vm._v("Seleccionar equipo")]), _vm._v(" "), _c("v-select", {
    attrs: {
      disabled: !_vm.editar,
      options: _vm.list_equipos,
      label: "descripcion",
      "data-vv-name": "material"
    },
    model: {
      value: _vm.resguardo.caiv,
      callback: function callback($$v) {
        _vm.$set(_vm.resguardo, "caiv", $$v);
      },
      expression: "resguardo.caiv"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-4 mb-3"
  }, [_c("label", [_vm._v("Cantidad")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required|decimal:2",
      expression: "'required|decimal:2'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.resguardo.cantidad,
      expression: "resguardo.cantidad"
    }],
    staticClass: "form-control",
    attrs: {
      disabled: !_vm.editar,
      type: "text",
      "data-vv-name": "cantidad"
    },
    domProps: {
      value: _vm.resguardo.cantidad
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.resguardo, "cantidad", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("cantidad")))])]), _vm._v(" "), _vm.tipoAccion == 3 ? [_c("div", {
    staticClass: "col-md-4 mb-3"
  }, [_c("label", [_vm._v("Cantidad Defectuoso")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required|decimal:2",
      expression: "'required|decimal:2'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.resguardo.cantidad_defectuoso,
      expression: "resguardo.cantidad_defectuoso"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      "data-vv-name": "cantidad"
    },
    domProps: {
      value: _vm.resguardo.cantidad_defectuoso
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.resguardo, "cantidad_defectuoso", $event.target.value);
      }, function ($event) {
        return _vm.verificarCantidad();
      }]
    }
  })])] : _vm._e()], 2), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-8 mb-3"
  }, [_c("label", [_vm._v("Enlistar Accesorios Adicionales")]), _vm._v(" "), _c("v-select", {
    attrs: {
      options: _vm.list_accesorios,
      label: "descripcion",
      "data-vv-name": "material"
    },
    model: {
      value: _vm.resguardo.accesorios_data,
      callback: function callback($$v) {
        _vm.$set(_vm.resguardo, "accesorios_data", $$v);
      },
      expression: "resguardo.accesorios_data"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 mb-3"
  }, [_c("label", [_vm._v("Cantidad")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.resguardo.cantidad_accesorio,
      expression: "resguardo.cantidad_accesorio"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.resguardo.cantidad_accesorio
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.resguardo, "cantidad_accesorio", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 mb-3"
  }, [_c("label", [_vm._v(" ")]), _c("br"), _vm._v(" "), _c("button", {
    staticClass: "btn btn-outline-dark",
    attrs: {
      disabled: !_vm.editar
    },
    on: {
      click: function click($event) {
        return _vm.GuardarAccesorio();
      }
    }
  }, [_vm._v("Agregar")])])]), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._l(_vm.listado_data_accesorios, function (vi, index) {
    return _c("li", {
      key: index,
      staticClass: "list-group-item"
    }, [_c("div", {
      staticClass: "form-row"
    }, [_c("div", {
      staticClass: "form-group col-md-9"
    }, [_c("label", [_vm._v(_vm._s(vi.descripcion))])]), _vm._v(" "), _c("div", {
      staticClass: "form-group col-md-2"
    }, [_c("label", [_vm._v(_vm._s(vi.cantidad))])]), _vm._v(" "), _c("div", {
      staticClass: "form-group col-md-1"
    }, [_c("a", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: vi.temp,
        expression: "vi.temp"
      }],
      on: {
        click: function click($event) {
          return _vm.EliminarTemporal(index, vi);
        }
      }
    }, [_c("span", {
      staticClass: "fas fa-trash"
    })])])])]);
  }), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-10 mb-3"
  }, [_c("label", [_vm._v("Observaciones adicionales a la entrega")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.resguardo.observacion_dos,
      expression: "resguardo.observacion_dos"
    }],
    staticClass: "form-control",
    attrs: {
      name: "name",
      rows: "2",
      cols: "80"
    },
    domProps: {
      value: _vm.resguardo.observacion_dos
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.resguardo, "observacion_dos", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-10 mb-3"
  }, [_c("label", [_vm._v("Observaciones adicionales a la recepción")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.resguardo.observacion_uno,
      expression: "resguardo.observacion_uno"
    }],
    staticClass: "form-control",
    attrs: {
      name: "name",
      rows: "2",
      cols: "80"
    },
    domProps: {
      value: _vm.resguardo.observacion_uno
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.resguardo, "observacion_uno", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _vm.tipoAccion == 3 ? [_c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-12 mb-3"
  }, [_c("label", [_vm._v("Observaciones al retorno")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.resguardo.observacion_retorno,
      expression: "resguardo.observacion_retorno"
    }],
    staticClass: "form-control",
    attrs: {
      name: "name",
      rows: "2",
      cols: "80"
    },
    domProps: {
      value: _vm.resguardo.observacion_retorno
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.resguardo, "observacion_retorno", $event.target.value);
      }
    }
  })])])] : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-6 mb-3"
  }, [_c("label", [_vm._v("Empleado Entrega")]), _vm._v(" "), _c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    attrs: {
      options: _vm.listaEmpleadosEntrega,
      label: "nombre",
      "data-vv-name": "Entrega"
    },
    model: {
      value: _vm.empleado_entrega,
      callback: function callback($$v) {
        _vm.empleado_entrega = $$v;
      },
      expression: "empleado_entrega"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Entrega")))])], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 mb-3"
  }, [_c("label", [_vm._v("Empleado Recibe")]), _vm._v(" "), _c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    attrs: {
      disabled: !_vm.editar,
      options: _vm.listaEmpleados,
      label: "nombre",
      "data-vv-name": "Recibe"
    },
    model: {
      value: _vm.empleado_recibe,
      callback: function callback($$v) {
        _vm.empleado_recibe = $$v;
      },
      expression: "empleado_recibe"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Recibe")))])], 1)])], 2), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isGuardarLoading
    }
  }), _vm._v(" "), _c("button", {
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
  }), _vm._v(" Cerrar")]), _vm._v(" "), _vm.tipoAccion == 1 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.GuardarResguardo();
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
        return _vm.ActualizarResguardo();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save mr-1"
  }), _vm._v("Actualizar")]) : _vm._e(), _vm._v(" "), _vm.tipoAccion == 3 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.GuardarRetorno();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save mr-1"
  }), _vm._v("Aceptar")]) : _vm._e()], 1)])])]), _vm._v(" "), _c("div", {
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
  }, [_vm._v("Autorizar Entrega de Equipo")]), _vm._v(" "), _c("button", {
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
  }, [_vm._v(_vm._s(_vm.empleado_autoriza))])])])]), _vm._v(" "), _c("div", {
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
  }), _vm._v(" Guardar")]) : _vm._e()])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-9"
  }, [_c("label", [_c("b", [_vm._v("Descripción")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-2"
  }, [_c("label", [_c("b", [_vm._v("Cantidad")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-1"
  }, [_c("label")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/Vales/Sitio.vue?vue&type=template&id=d0e697fe":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/Vales/Sitio.vue?vue&type=template&id=d0e697fe ***!
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
  return _c("div", [_c("div", {
    staticClass: "card"
  }, [_c("div", {
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
        }), _vm._v(" \n                        ")]), _vm._v(" "), _c("div", {
          staticClass: "dropdown-menu"
        }, [[_c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.AbrirModal(false, props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-pencil"
        }), _vm._v(" Actualizar\n                                ")]), _vm._v(" "), _c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.retorno(props.row.id);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-trash"
        }), _vm._v(" Retornar\n                                ")])]], 2)])];
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
        }), _vm._v(" \n                    ")])];
      }
    }, {
      key: "condicion",
      fn: function fn(props) {
        return [props.row.condicion == 1 ? [_c("button", {
          staticClass: "btn btn-outline-success"
        }, [_vm._v("En sitio")])] : _vm._e(), _vm._v(" "), props.row.condicion == 2 ? [_c("button", {
          staticClass: "btn btn-outline-primary"
        }, [_vm._v("Retornado")])] : _vm._e()];
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
  }, [_vm._v("x")])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-5 mb-3"
  }, [_c("label", [_vm._v("Proyecto")]), _vm._v(" "), _c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    attrs: {
      disables: !_vm.editar,
      options: _vm.listaProyectos,
      label: "nombre_corto",
      "data-vv-name": "Proyecto"
    },
    model: {
      value: _vm.sitio.proyecto,
      callback: function callback($$v) {
        _vm.$set(_vm.sitio, "proyecto", $$v);
      },
      expression: "sitio.proyecto"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Proyecto")))])], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-4 mb-3"
  }, [_c("label", [_vm._v("Fecha Salida")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.sitio.fecha_salida,
      expression: "sitio.fecha_salida"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    attrs: {
      disables: !_vm.editar,
      type: "date",
      "data-vv-name": "Fecha Salida"
    },
    domProps: {
      value: _vm.sitio.fecha_salida
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.sitio, "fecha_salida", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Fecha Salida")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_c("label", [_vm._v("Tipo")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.sitio.tipo,
      expression: "sitio.tipo"
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
        _vm.$set(_vm.sitio, "tipo", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.ObtenerEquipos]
    }
  }, [_c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("Computo")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "2"
    }
  }, [_vm._v("Accesorios")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "3"
    }
  }, [_vm._v("Impresion")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "4"
    }
  }, [_vm._v("Video")])]), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("tipo")))])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-9 mb-3"
  }, [_c("label", [_vm._v("Seleccione")]), _vm._v(" "), _c("v-select", {
    attrs: {
      options: _vm.list_equipos,
      label: "descripcion",
      "data-vv-name": "catalogo"
    },
    on: {
      input: function input($event) {
        return _vm.asignar();
      }
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
      value: _vm.cantidad_temp,
      expression: "cantidad_temp"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.cantidad_temp
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.cantidad_temp = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4 mb-3"
  }, [_c("label", [_vm._v("Unidad")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.unidad_temp,
      expression: "unidad_temp"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.unidad_temp
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.unidad_temp = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
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
  }, [_vm._v("Crear")])])]), _vm._v(" "), _c("hr"), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._l(_vm.listado_data, function (vi, index) {
    return _c("li", {
      key: index,
      staticClass: "list-group-item"
    }, [_c("div", {
      staticClass: "form-row"
    }, [_c("div", {
      staticClass: "form-group col-md-7"
    }, [_c("label", [_vm._v(_vm._s(vi.descripcion))])]), _vm._v(" "), _c("div", {
      staticClass: "form-group col-md-2"
    }, [_c("label", [_vm._v(_vm._s(vi.cantidad))])]), _vm._v(" "), _c("div", {
      staticClass: "form-group col-md-2"
    }, [_c("label", [_vm._v(_vm._s(vi.unidad))])]), _vm._v(" "), _c("div", {
      staticClass: "form-group col-md-1"
    }, [_c("a", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: vi.temp,
        expression: "vi.temp"
      }],
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
  }), _vm._v(" "), _c("hr"), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-6 mb-3"
  }, [_c("label", [_vm._v("Solicita")]), _vm._v(" "), _c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    attrs: {
      options: _vm.listaEmpleados,
      label: "nombre",
      "data-vv-name": "Recibe"
    },
    model: {
      value: _vm.empleado_recibe,
      callback: function callback($$v) {
        _vm.empleado_recibe = $$v;
      },
      expression: "empleado_recibe"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Recibe")))])], 1)])], 2), _vm._v(" "), _c("div", {
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
  }), _vm._v(" Cerrar")]), _vm._v(" "), _vm.tipoAccion == 1 ? _c("button", {
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
    staticClass: "fas fa-save"
  }), _vm._v(" Guardar")]) : _vm._e(), _vm._v(" "), _vm.tipoAccion == 2 ? _c("button", {
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
    staticClass: "fas fa-save"
  }), _vm._v(" Actualizar")]) : _vm._e()])])])]), _vm._v(" "), _c("div", {
    staticClass: "modal fade",
    "class": {
      mostrar: _vm.modal_retorno
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
  }, [_vm._v("Material a retornar")]), _vm._v(" "), _c("button", {
    staticClass: "close",
    attrs: {
      type: "button",
      "aria-label": "Close"
    },
    on: {
      click: function click($event) {
        return _vm.CerrarModalRetorno();
      }
    }
  }, [_c("span", {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("x")])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_vm._m(1), _vm._v(" "), _vm._l(_vm.listado_data, function (vi, index) {
    return _c("li", {
      key: index,
      staticClass: "list-group-item"
    }, [_c("div", {
      staticClass: "form-row"
    }, [_c("div", {
      staticClass: "form-group col-md-7"
    }, [_c("label", [_vm._v(_vm._s(vi.descripcion))])]), _vm._v(" "), _c("div", {
      staticClass: "form-group col-md-2"
    }, [_c("label", [_vm._v(_vm._s(vi.cantidad))])]), _vm._v(" "), _c("div", {
      staticClass: "form-group col-md-2"
    }, [_c("label", [_vm._v(_vm._s(vi.unidad))])]), _vm._v(" "), _c("div", {
      staticClass: "form-group col-md-1"
    }, [_c("button", {
      staticClass: "btn btn-outline-success",
      on: {
        click: function click($event) {
          return _vm.retornado(vi, 2);
        }
      }
    }, [_vm._v("Si ")]), _vm._v(" "), _c("button", {
      staticClass: "btn btn-outline-danger",
      on: {
        click: function click($event) {
          return _vm.retornado(vi, 0);
        }
      }
    }, [_vm._v("No")])])])]);
  })], 2), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("button", {
    staticClass: "btn btn-outline-dark",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.CerrarModalRetorno();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-times"
  }), _vm._v(" Cerrar")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.GuardarRetorno(1);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Guardar")])])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-7"
  }, [_c("label", [_c("b", [_vm._v("Articulo")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-2"
  }, [_c("label", [_c("b", [_vm._v("Cantidad")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-2"
  }, [_c("label", [_c("b", [_vm._v("Unidad")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-1"
  }, [_c("label", [_c("b", [_vm._v(".")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-7"
  }, [_c("label", [_c("b", [_vm._v("Articulo")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-2"
  }, [_c("label", [_c("b", [_vm._v("Cantidad")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-2"
  }, [_c("label", [_c("b", [_vm._v("Unidad")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-1"
  }, [_c("label", [_c("b", [_vm._v(".")])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/Vales/Vale.vue?vue&type=template&id=0a131712":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/Vales/Vale.vue?vue&type=template&id=0a131712 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "container-fluid1"
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("i", {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" Vales De Equipo\n                "), _vm.PermisosCRUD.Download ? _c("button", {
    staticClass: "btn btn-dark float-sm-right btn btn-sm",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.DescargarReporte();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-download mr-1"
  }), _vm._v("Descargar\n                ")]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "card-body1"
  }, [_c("ul", {
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
      "aria-expanded": "true",
      "data-toggle": "tab",
      href: "#menu1",
      role: "tab"
    },
    on: {
      click: function click($event) {
        return _vm.CambiarTab(1);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-user-shield"
  }), _vm._v(" Resguardo")])]), _vm._v(" "), _c("li", {
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
        return _vm.CambiarTab(2);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-map-marker-alt"
  }), _vm._v(" Salida")])])]), _vm._v(" "), _c("div", {
    staticClass: "tab-content"
  }, [_c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.tab == 1,
      expression: "tab == 1"
    }],
    staticClass: "tab-pane active",
    attrs: {
      id: "menu1",
      "aria-expanded": "true"
    }
  }, [_c("div", {
    staticClass: "form-row"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "col-md-4"
  }, [_vm.PermisosCRUD.Create ? _c("button", {
    staticClass: "btn btn-dark float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.AbrirModalResguardo();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  }), _vm._v(" Nuevo\n                                ")]) : _vm._e(), _vm._v(" "), _c("div", {
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
  }, [_vm._v("\n                                        Empresa\n                                    ")]), _vm._v(" "), _c("div", {
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
        _vm.ObtenerResguardos();
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
        _vm.ObtenerResguardos();
      }
    }
  }, [_vm._v("CSCT")])])])])]), _vm._v(" "), _c("resguardo", {
    ref: "resguardo"
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
  }, [_c("div", {
    staticClass: "form-row"
  }, [_vm._m(1), _vm._v(" "), _c("div", {
    staticClass: "col-md-4"
  }, [_c("button", {
    staticClass: "btn btn-dark float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.AbrirModalSitio();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  }), _vm._v(" Nuevo\n                                ")]), _vm._v(" "), _c("div", {
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
  }, [_vm._v("\n                                        Empresa\n                                    ")]), _vm._v(" "), _c("div", {
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
        _vm.ObtenerSitios();
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
        _vm.ObtenerSitios();
      }
    }
  }, [_vm._v("CSCT")])])])])]), _vm._v(" "), _c("sitio", {
    ref: "sitio"
  })], 1)])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-md-8"
  }, [_c("h4", [_vm._v("Resguardo")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-md-8"
  }, [_c("h4", [_vm._v("Sitio")])]);
}];
render._withStripped = true;


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

/***/ "./resources/assets/js/components/TI/Bitacora/Bitacora.vue":
/*!*****************************************************************!*\
  !*** ./resources/assets/js/components/TI/Bitacora/Bitacora.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Bitacora_vue_vue_type_template_id_4ecbe5e8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bitacora.vue?vue&type=template&id=4ecbe5e8 */ "./resources/assets/js/components/TI/Bitacora/Bitacora.vue?vue&type=template&id=4ecbe5e8");
/* harmony import */ var _Bitacora_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Bitacora.vue?vue&type=script&lang=js */ "./resources/assets/js/components/TI/Bitacora/Bitacora.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Bitacora_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Bitacora_vue_vue_type_template_id_4ecbe5e8__WEBPACK_IMPORTED_MODULE_0__.render,
  _Bitacora_vue_vue_type_template_id_4ecbe5e8__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/TI/Bitacora/Bitacora.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/TI/Bitacora/Bitacora.vue?vue&type=script&lang=js":
/*!*****************************************************************************************!*\
  !*** ./resources/assets/js/components/TI/Bitacora/Bitacora.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bitacora_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Bitacora.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/Bitacora/Bitacora.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bitacora_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/TI/Bitacora/Bitacora.vue?vue&type=template&id=4ecbe5e8":
/*!***********************************************************************************************!*\
  !*** ./resources/assets/js/components/TI/Bitacora/Bitacora.vue?vue&type=template&id=4ecbe5e8 ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Bitacora_vue_vue_type_template_id_4ecbe5e8__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Bitacora_vue_vue_type_template_id_4ecbe5e8__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Bitacora_vue_vue_type_template_id_4ecbe5e8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Bitacora.vue?vue&type=template&id=4ecbe5e8 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/Bitacora/Bitacora.vue?vue&type=template&id=4ecbe5e8");


/***/ }),

/***/ "./resources/assets/js/components/TI/Inventario/Accesorios.vue":
/*!*********************************************************************!*\
  !*** ./resources/assets/js/components/TI/Inventario/Accesorios.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Accesorios_vue_vue_type_template_id_23093ed4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Accesorios.vue?vue&type=template&id=23093ed4 */ "./resources/assets/js/components/TI/Inventario/Accesorios.vue?vue&type=template&id=23093ed4");
/* harmony import */ var _Accesorios_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Accesorios.vue?vue&type=script&lang=js */ "./resources/assets/js/components/TI/Inventario/Accesorios.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Accesorios_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Accesorios_vue_vue_type_template_id_23093ed4__WEBPACK_IMPORTED_MODULE_0__.render,
  _Accesorios_vue_vue_type_template_id_23093ed4__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/TI/Inventario/Accesorios.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/TI/Inventario/Accesorios.vue?vue&type=script&lang=js":
/*!*********************************************************************************************!*\
  !*** ./resources/assets/js/components/TI/Inventario/Accesorios.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Accesorios_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Accesorios.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/Inventario/Accesorios.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Accesorios_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/TI/Inventario/Accesorios.vue?vue&type=template&id=23093ed4":
/*!***************************************************************************************************!*\
  !*** ./resources/assets/js/components/TI/Inventario/Accesorios.vue?vue&type=template&id=23093ed4 ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Accesorios_vue_vue_type_template_id_23093ed4__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Accesorios_vue_vue_type_template_id_23093ed4__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Accesorios_vue_vue_type_template_id_23093ed4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Accesorios.vue?vue&type=template&id=23093ed4 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/Inventario/Accesorios.vue?vue&type=template&id=23093ed4");


/***/ }),

/***/ "./resources/assets/js/components/TI/Inventario/Equipos.vue":
/*!******************************************************************!*\
  !*** ./resources/assets/js/components/TI/Inventario/Equipos.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Equipos_vue_vue_type_template_id_28a06dc9__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Equipos.vue?vue&type=template&id=28a06dc9 */ "./resources/assets/js/components/TI/Inventario/Equipos.vue?vue&type=template&id=28a06dc9");
/* harmony import */ var _Equipos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Equipos.vue?vue&type=script&lang=js */ "./resources/assets/js/components/TI/Inventario/Equipos.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Equipos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Equipos_vue_vue_type_template_id_28a06dc9__WEBPACK_IMPORTED_MODULE_0__.render,
  _Equipos_vue_vue_type_template_id_28a06dc9__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/TI/Inventario/Equipos.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/TI/Inventario/Equipos.vue?vue&type=script&lang=js":
/*!******************************************************************************************!*\
  !*** ./resources/assets/js/components/TI/Inventario/Equipos.vue?vue&type=script&lang=js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Equipos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Equipos.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/Inventario/Equipos.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Equipos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/TI/Inventario/Equipos.vue?vue&type=template&id=28a06dc9":
/*!************************************************************************************************!*\
  !*** ./resources/assets/js/components/TI/Inventario/Equipos.vue?vue&type=template&id=28a06dc9 ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Equipos_vue_vue_type_template_id_28a06dc9__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Equipos_vue_vue_type_template_id_28a06dc9__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Equipos_vue_vue_type_template_id_28a06dc9__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Equipos.vue?vue&type=template&id=28a06dc9 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/Inventario/Equipos.vue?vue&type=template&id=28a06dc9");


/***/ }),

/***/ "./resources/assets/js/components/TI/Inventario/Impresion.vue":
/*!********************************************************************!*\
  !*** ./resources/assets/js/components/TI/Inventario/Impresion.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Impresion_vue_vue_type_template_id_698f0aa9__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Impresion.vue?vue&type=template&id=698f0aa9 */ "./resources/assets/js/components/TI/Inventario/Impresion.vue?vue&type=template&id=698f0aa9");
/* harmony import */ var _Impresion_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Impresion.vue?vue&type=script&lang=js */ "./resources/assets/js/components/TI/Inventario/Impresion.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Impresion_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Impresion_vue_vue_type_template_id_698f0aa9__WEBPACK_IMPORTED_MODULE_0__.render,
  _Impresion_vue_vue_type_template_id_698f0aa9__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/TI/Inventario/Impresion.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/TI/Inventario/Impresion.vue?vue&type=script&lang=js":
/*!********************************************************************************************!*\
  !*** ./resources/assets/js/components/TI/Inventario/Impresion.vue?vue&type=script&lang=js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Impresion_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Impresion.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/Inventario/Impresion.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Impresion_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/TI/Inventario/Impresion.vue?vue&type=template&id=698f0aa9":
/*!**************************************************************************************************!*\
  !*** ./resources/assets/js/components/TI/Inventario/Impresion.vue?vue&type=template&id=698f0aa9 ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Impresion_vue_vue_type_template_id_698f0aa9__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Impresion_vue_vue_type_template_id_698f0aa9__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Impresion_vue_vue_type_template_id_698f0aa9__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Impresion.vue?vue&type=template&id=698f0aa9 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/Inventario/Impresion.vue?vue&type=template&id=698f0aa9");


/***/ }),

/***/ "./resources/assets/js/components/TI/Inventario/Red.vue":
/*!**************************************************************!*\
  !*** ./resources/assets/js/components/TI/Inventario/Red.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Red_vue_vue_type_template_id_7024e774__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Red.vue?vue&type=template&id=7024e774 */ "./resources/assets/js/components/TI/Inventario/Red.vue?vue&type=template&id=7024e774");
/* harmony import */ var _Red_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Red.vue?vue&type=script&lang=js */ "./resources/assets/js/components/TI/Inventario/Red.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Red_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Red_vue_vue_type_template_id_7024e774__WEBPACK_IMPORTED_MODULE_0__.render,
  _Red_vue_vue_type_template_id_7024e774__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/TI/Inventario/Red.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/TI/Inventario/Red.vue?vue&type=script&lang=js":
/*!**************************************************************************************!*\
  !*** ./resources/assets/js/components/TI/Inventario/Red.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Red_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Red.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/Inventario/Red.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Red_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/TI/Inventario/Red.vue?vue&type=template&id=7024e774":
/*!********************************************************************************************!*\
  !*** ./resources/assets/js/components/TI/Inventario/Red.vue?vue&type=template&id=7024e774 ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Red_vue_vue_type_template_id_7024e774__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Red_vue_vue_type_template_id_7024e774__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Red_vue_vue_type_template_id_7024e774__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Red.vue?vue&type=template&id=7024e774 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/Inventario/Red.vue?vue&type=template&id=7024e774");


/***/ }),

/***/ "./resources/assets/js/components/TI/Inventario/Video.vue":
/*!****************************************************************!*\
  !*** ./resources/assets/js/components/TI/Inventario/Video.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Video_vue_vue_type_template_id_5eac2020__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Video.vue?vue&type=template&id=5eac2020 */ "./resources/assets/js/components/TI/Inventario/Video.vue?vue&type=template&id=5eac2020");
/* harmony import */ var _Video_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Video.vue?vue&type=script&lang=js */ "./resources/assets/js/components/TI/Inventario/Video.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Video_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Video_vue_vue_type_template_id_5eac2020__WEBPACK_IMPORTED_MODULE_0__.render,
  _Video_vue_vue_type_template_id_5eac2020__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/TI/Inventario/Video.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/TI/Inventario/Video.vue?vue&type=script&lang=js":
/*!****************************************************************************************!*\
  !*** ./resources/assets/js/components/TI/Inventario/Video.vue?vue&type=script&lang=js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Video_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Video.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/Inventario/Video.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Video_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/TI/Inventario/Video.vue?vue&type=template&id=5eac2020":
/*!**********************************************************************************************!*\
  !*** ./resources/assets/js/components/TI/Inventario/Video.vue?vue&type=template&id=5eac2020 ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Video_vue_vue_type_template_id_5eac2020__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Video_vue_vue_type_template_id_5eac2020__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Video_vue_vue_type_template_id_5eac2020__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Video.vue?vue&type=template&id=5eac2020 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/Inventario/Video.vue?vue&type=template&id=5eac2020");


/***/ }),

/***/ "./resources/assets/js/components/TI/Mantenimientos/Impresoras.vue":
/*!*************************************************************************!*\
  !*** ./resources/assets/js/components/TI/Mantenimientos/Impresoras.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Impresoras_vue_vue_type_template_id_313c5708__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Impresoras.vue?vue&type=template&id=313c5708 */ "./resources/assets/js/components/TI/Mantenimientos/Impresoras.vue?vue&type=template&id=313c5708");
/* harmony import */ var _Impresoras_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Impresoras.vue?vue&type=script&lang=js */ "./resources/assets/js/components/TI/Mantenimientos/Impresoras.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Impresoras_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Impresoras_vue_vue_type_template_id_313c5708__WEBPACK_IMPORTED_MODULE_0__.render,
  _Impresoras_vue_vue_type_template_id_313c5708__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/TI/Mantenimientos/Impresoras.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/TI/Mantenimientos/Impresoras.vue?vue&type=script&lang=js":
/*!*************************************************************************************************!*\
  !*** ./resources/assets/js/components/TI/Mantenimientos/Impresoras.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Impresoras_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Impresoras.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/Mantenimientos/Impresoras.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Impresoras_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/TI/Mantenimientos/Impresoras.vue?vue&type=template&id=313c5708":
/*!*******************************************************************************************************!*\
  !*** ./resources/assets/js/components/TI/Mantenimientos/Impresoras.vue?vue&type=template&id=313c5708 ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Impresoras_vue_vue_type_template_id_313c5708__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Impresoras_vue_vue_type_template_id_313c5708__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Impresoras_vue_vue_type_template_id_313c5708__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Impresoras.vue?vue&type=template&id=313c5708 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/Mantenimientos/Impresoras.vue?vue&type=template&id=313c5708");


/***/ }),

/***/ "./resources/assets/js/components/TI/Mantenimientos/Programa.vue":
/*!***********************************************************************!*\
  !*** ./resources/assets/js/components/TI/Mantenimientos/Programa.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Programa_vue_vue_type_template_id_7f0b947c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Programa.vue?vue&type=template&id=7f0b947c */ "./resources/assets/js/components/TI/Mantenimientos/Programa.vue?vue&type=template&id=7f0b947c");
/* harmony import */ var _Programa_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Programa.vue?vue&type=script&lang=js */ "./resources/assets/js/components/TI/Mantenimientos/Programa.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Programa_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Programa_vue_vue_type_template_id_7f0b947c__WEBPACK_IMPORTED_MODULE_0__.render,
  _Programa_vue_vue_type_template_id_7f0b947c__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/TI/Mantenimientos/Programa.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/TI/Mantenimientos/Programa.vue?vue&type=script&lang=js":
/*!***********************************************************************************************!*\
  !*** ./resources/assets/js/components/TI/Mantenimientos/Programa.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Programa_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Programa.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/Mantenimientos/Programa.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Programa_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/TI/Mantenimientos/Programa.vue?vue&type=template&id=7f0b947c":
/*!*****************************************************************************************************!*\
  !*** ./resources/assets/js/components/TI/Mantenimientos/Programa.vue?vue&type=template&id=7f0b947c ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Programa_vue_vue_type_template_id_7f0b947c__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Programa_vue_vue_type_template_id_7f0b947c__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Programa_vue_vue_type_template_id_7f0b947c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Programa.vue?vue&type=template&id=7f0b947c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/Mantenimientos/Programa.vue?vue&type=template&id=7f0b947c");


/***/ }),

/***/ "./resources/assets/js/components/TI/Mantenimientos/ReportePreventivo.vue":
/*!********************************************************************************!*\
  !*** ./resources/assets/js/components/TI/Mantenimientos/ReportePreventivo.vue ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ReportePreventivo_vue_vue_type_template_id_17db10e8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReportePreventivo.vue?vue&type=template&id=17db10e8 */ "./resources/assets/js/components/TI/Mantenimientos/ReportePreventivo.vue?vue&type=template&id=17db10e8");
/* harmony import */ var _ReportePreventivo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReportePreventivo.vue?vue&type=script&lang=js */ "./resources/assets/js/components/TI/Mantenimientos/ReportePreventivo.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ReportePreventivo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ReportePreventivo_vue_vue_type_template_id_17db10e8__WEBPACK_IMPORTED_MODULE_0__.render,
  _ReportePreventivo_vue_vue_type_template_id_17db10e8__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/TI/Mantenimientos/ReportePreventivo.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/TI/Mantenimientos/ReportePreventivo.vue?vue&type=script&lang=js":
/*!********************************************************************************************************!*\
  !*** ./resources/assets/js/components/TI/Mantenimientos/ReportePreventivo.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportePreventivo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ReportePreventivo.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/Mantenimientos/ReportePreventivo.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportePreventivo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/TI/Mantenimientos/ReportePreventivo.vue?vue&type=template&id=17db10e8":
/*!**************************************************************************************************************!*\
  !*** ./resources/assets/js/components/TI/Mantenimientos/ReportePreventivo.vue?vue&type=template&id=17db10e8 ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportePreventivo_vue_vue_type_template_id_17db10e8__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportePreventivo_vue_vue_type_template_id_17db10e8__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportePreventivo_vue_vue_type_template_id_17db10e8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ReportePreventivo.vue?vue&type=template&id=17db10e8 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/Mantenimientos/ReportePreventivo.vue?vue&type=template&id=17db10e8");


/***/ }),

/***/ "./resources/assets/js/components/TI/MatrizPorPuesto.vue":
/*!***************************************************************!*\
  !*** ./resources/assets/js/components/TI/MatrizPorPuesto.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MatrizPorPuesto_vue_vue_type_template_id_69b5b10a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MatrizPorPuesto.vue?vue&type=template&id=69b5b10a */ "./resources/assets/js/components/TI/MatrizPorPuesto.vue?vue&type=template&id=69b5b10a");
/* harmony import */ var _MatrizPorPuesto_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MatrizPorPuesto.vue?vue&type=script&lang=js */ "./resources/assets/js/components/TI/MatrizPorPuesto.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MatrizPorPuesto_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _MatrizPorPuesto_vue_vue_type_template_id_69b5b10a__WEBPACK_IMPORTED_MODULE_0__.render,
  _MatrizPorPuesto_vue_vue_type_template_id_69b5b10a__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/TI/MatrizPorPuesto.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/TI/MatrizPorPuesto.vue?vue&type=script&lang=js":
/*!***************************************************************************************!*\
  !*** ./resources/assets/js/components/TI/MatrizPorPuesto.vue?vue&type=script&lang=js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MatrizPorPuesto_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MatrizPorPuesto.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/MatrizPorPuesto.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MatrizPorPuesto_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/TI/MatrizPorPuesto.vue?vue&type=template&id=69b5b10a":
/*!*********************************************************************************************!*\
  !*** ./resources/assets/js/components/TI/MatrizPorPuesto.vue?vue&type=template&id=69b5b10a ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MatrizPorPuesto_vue_vue_type_template_id_69b5b10a__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MatrizPorPuesto_vue_vue_type_template_id_69b5b10a__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MatrizPorPuesto_vue_vue_type_template_id_69b5b10a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MatrizPorPuesto.vue?vue&type=template&id=69b5b10a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/MatrizPorPuesto.vue?vue&type=template&id=69b5b10a");


/***/ }),

/***/ "./resources/assets/js/components/TI/PropuestaEquipo.vue":
/*!***************************************************************!*\
  !*** ./resources/assets/js/components/TI/PropuestaEquipo.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PropuestaEquipo_vue_vue_type_template_id_0fb07249__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PropuestaEquipo.vue?vue&type=template&id=0fb07249 */ "./resources/assets/js/components/TI/PropuestaEquipo.vue?vue&type=template&id=0fb07249");
/* harmony import */ var _PropuestaEquipo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PropuestaEquipo.vue?vue&type=script&lang=js */ "./resources/assets/js/components/TI/PropuestaEquipo.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PropuestaEquipo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _PropuestaEquipo_vue_vue_type_template_id_0fb07249__WEBPACK_IMPORTED_MODULE_0__.render,
  _PropuestaEquipo_vue_vue_type_template_id_0fb07249__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/TI/PropuestaEquipo.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/TI/PropuestaEquipo.vue?vue&type=script&lang=js":
/*!***************************************************************************************!*\
  !*** ./resources/assets/js/components/TI/PropuestaEquipo.vue?vue&type=script&lang=js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PropuestaEquipo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PropuestaEquipo.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/PropuestaEquipo.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PropuestaEquipo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/TI/PropuestaEquipo.vue?vue&type=template&id=0fb07249":
/*!*********************************************************************************************!*\
  !*** ./resources/assets/js/components/TI/PropuestaEquipo.vue?vue&type=template&id=0fb07249 ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PropuestaEquipo_vue_vue_type_template_id_0fb07249__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PropuestaEquipo_vue_vue_type_template_id_0fb07249__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PropuestaEquipo_vue_vue_type_template_id_0fb07249__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PropuestaEquipo.vue?vue&type=template&id=0fb07249 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/PropuestaEquipo.vue?vue&type=template&id=0fb07249");


/***/ }),

/***/ "./resources/assets/js/components/TI/Servicios/Historico.vue":
/*!*******************************************************************!*\
  !*** ./resources/assets/js/components/TI/Servicios/Historico.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Historico_vue_vue_type_template_id_adc32e8a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Historico.vue?vue&type=template&id=adc32e8a */ "./resources/assets/js/components/TI/Servicios/Historico.vue?vue&type=template&id=adc32e8a");
/* harmony import */ var _Historico_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Historico.vue?vue&type=script&lang=js */ "./resources/assets/js/components/TI/Servicios/Historico.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Historico_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Historico_vue_vue_type_template_id_adc32e8a__WEBPACK_IMPORTED_MODULE_0__.render,
  _Historico_vue_vue_type_template_id_adc32e8a__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/TI/Servicios/Historico.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/TI/Servicios/Historico.vue?vue&type=script&lang=js":
/*!*******************************************************************************************!*\
  !*** ./resources/assets/js/components/TI/Servicios/Historico.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Historico_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Historico.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/Servicios/Historico.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Historico_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/TI/Servicios/Historico.vue?vue&type=template&id=adc32e8a":
/*!*************************************************************************************************!*\
  !*** ./resources/assets/js/components/TI/Servicios/Historico.vue?vue&type=template&id=adc32e8a ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Historico_vue_vue_type_template_id_adc32e8a__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Historico_vue_vue_type_template_id_adc32e8a__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Historico_vue_vue_type_template_id_adc32e8a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Historico.vue?vue&type=template&id=adc32e8a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/Servicios/Historico.vue?vue&type=template&id=adc32e8a");


/***/ }),

/***/ "./resources/assets/js/components/TI/Vales/Resguardo.vue":
/*!***************************************************************!*\
  !*** ./resources/assets/js/components/TI/Vales/Resguardo.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Resguardo_vue_vue_type_template_id_ea4319f2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Resguardo.vue?vue&type=template&id=ea4319f2 */ "./resources/assets/js/components/TI/Vales/Resguardo.vue?vue&type=template&id=ea4319f2");
/* harmony import */ var _Resguardo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Resguardo.vue?vue&type=script&lang=js */ "./resources/assets/js/components/TI/Vales/Resguardo.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Resguardo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Resguardo_vue_vue_type_template_id_ea4319f2__WEBPACK_IMPORTED_MODULE_0__.render,
  _Resguardo_vue_vue_type_template_id_ea4319f2__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/TI/Vales/Resguardo.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/TI/Vales/Resguardo.vue?vue&type=script&lang=js":
/*!***************************************************************************************!*\
  !*** ./resources/assets/js/components/TI/Vales/Resguardo.vue?vue&type=script&lang=js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Resguardo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Resguardo.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/Vales/Resguardo.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Resguardo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/TI/Vales/Resguardo.vue?vue&type=template&id=ea4319f2":
/*!*********************************************************************************************!*\
  !*** ./resources/assets/js/components/TI/Vales/Resguardo.vue?vue&type=template&id=ea4319f2 ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Resguardo_vue_vue_type_template_id_ea4319f2__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Resguardo_vue_vue_type_template_id_ea4319f2__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Resguardo_vue_vue_type_template_id_ea4319f2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Resguardo.vue?vue&type=template&id=ea4319f2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/Vales/Resguardo.vue?vue&type=template&id=ea4319f2");


/***/ }),

/***/ "./resources/assets/js/components/TI/Vales/Sitio.vue":
/*!***********************************************************!*\
  !*** ./resources/assets/js/components/TI/Vales/Sitio.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Sitio_vue_vue_type_template_id_d0e697fe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sitio.vue?vue&type=template&id=d0e697fe */ "./resources/assets/js/components/TI/Vales/Sitio.vue?vue&type=template&id=d0e697fe");
/* harmony import */ var _Sitio_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sitio.vue?vue&type=script&lang=js */ "./resources/assets/js/components/TI/Vales/Sitio.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Sitio_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Sitio_vue_vue_type_template_id_d0e697fe__WEBPACK_IMPORTED_MODULE_0__.render,
  _Sitio_vue_vue_type_template_id_d0e697fe__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/TI/Vales/Sitio.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/TI/Vales/Sitio.vue?vue&type=script&lang=js":
/*!***********************************************************************************!*\
  !*** ./resources/assets/js/components/TI/Vales/Sitio.vue?vue&type=script&lang=js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sitio_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Sitio.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/Vales/Sitio.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sitio_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/TI/Vales/Sitio.vue?vue&type=template&id=d0e697fe":
/*!*****************************************************************************************!*\
  !*** ./resources/assets/js/components/TI/Vales/Sitio.vue?vue&type=template&id=d0e697fe ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sitio_vue_vue_type_template_id_d0e697fe__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sitio_vue_vue_type_template_id_d0e697fe__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sitio_vue_vue_type_template_id_d0e697fe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Sitio.vue?vue&type=template&id=d0e697fe */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/Vales/Sitio.vue?vue&type=template&id=d0e697fe");


/***/ }),

/***/ "./resources/assets/js/components/TI/Vales/Vale.vue":
/*!**********************************************************!*\
  !*** ./resources/assets/js/components/TI/Vales/Vale.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Vale_vue_vue_type_template_id_0a131712__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vale.vue?vue&type=template&id=0a131712 */ "./resources/assets/js/components/TI/Vales/Vale.vue?vue&type=template&id=0a131712");
/* harmony import */ var _Vale_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Vale.vue?vue&type=script&lang=js */ "./resources/assets/js/components/TI/Vales/Vale.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Vale_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Vale_vue_vue_type_template_id_0a131712__WEBPACK_IMPORTED_MODULE_0__.render,
  _Vale_vue_vue_type_template_id_0a131712__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/TI/Vales/Vale.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/TI/Vales/Vale.vue?vue&type=script&lang=js":
/*!**********************************************************************************!*\
  !*** ./resources/assets/js/components/TI/Vales/Vale.vue?vue&type=script&lang=js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Vale_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Vale.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/Vales/Vale.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Vale_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/TI/Vales/Vale.vue?vue&type=template&id=0a131712":
/*!****************************************************************************************!*\
  !*** ./resources/assets/js/components/TI/Vales/Vale.vue?vue&type=template&id=0a131712 ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Vale_vue_vue_type_template_id_0a131712__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Vale_vue_vue_type_template_id_0a131712__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Vale_vue_vue_type_template_id_0a131712__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Vale.vue?vue&type=template&id=0a131712 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/TI/Vales/Vale.vue?vue&type=template&id=0a131712");


/***/ })

}]);