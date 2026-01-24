(self["webpackChunk"] = self["webpackChunk"] || []).push([["rh"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Almacen/Existencias.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Almacen/Existencias.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      isLoadingExistencias: false,
      existencias: [],
      lotes: [],
      stocks: [],
      defectuoso_lote: "",
      defectuoso_total: 0
    };
  },
  methods: {
    cargarExistencias: function cargarExistencias(data) {
      var me = this;
      this.isLoadingExistencias = true;
      axios.post('/articulo/existencias', {
        articulo_id: data.id
      }).then(function (response) {
        console.log(response.data.defectuosos);
        me.existencias = response.data.existencias;
        me.lotes = response.data.lotes;
        me.stocks = response.data.stocks;
        var total = 0;
        response.data.defectuosos.forEach(function (d) {
          total += d.cantidad;
        });
        var n = response.data.defectuosos.lenght;
        me.defectuoso_lote = n > 0 ? response.data.defectuosos[0].lote : "";
        me.defectuoso_total = total;
        me.isLoadingExistencias = false;
      })["catch"](function (error) {
        console.log(error);
      });
    }
  },
  mounted: function mounted() {},
  computed: {
    totalExistencias: function totalExistencias() {
      return this.existencias.reduce(function (total, item, n) {
        return Number(total) + Number(item.cantidad);
      }, 0);
    },
    totalLotes: function totalLotes() {
      return this.lotes.reduce(function (total, item, n) {
        return Number(total) + Number(item.cantidad);
      }, 0) + this.defectuoso_total;
    },
    totalStocks: function totalStocks() {
      return this.stocks.reduce(function (total, item, n) {
        return Number(total) + Number(item.cantidad);
      }, 0) + this.defectuoso_total;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Almacen/Kardex.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Almacen/Kardex.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      isLoading: false,
      movimientos: [],
      page: 1,
      total: 0,
      articulo_id: 0
    };
  },
  methods: {
    cargarMovimientos: function cargarMovimientos(data) {
      this.page = 1;
      this.articulo_id = data.id;
      this.cargarPagina();
    },
    cargarPagina: function cargarPagina() {
      var me = this;
      this.isLoading = true;
      axios.get('/movimientos/kardex/', {
        params: {
          articulo_id: this.articulo_id,
          page: this.page
        }
      }).then(function (response) {
        me.movimientos = response.data.movimientos.data;
        me.total = response.data.movimientos.last_page;
        me.isLoading = false;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    anterior: function anterior() {
      this.page = this.page == 1 ? 1 : this.page - 1;
      this.cargarPagina();
    },
    siguiente: function siguiente() {
      this.page = this.page == this.total ? this.page : this.page + 1;
      this.cargarPagina();
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Asistencias/Asistencia.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Asistencias/Asistencia.vue?vue&type=script&lang=js ***!
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
      data_busqueda: "",
      data_response: "",
      data_response_temporal: "",
      tab: 1,
      url: "/registro",
      valor_nuevo_estado: "",
      empleado: null,
      reporte_estado: "",
      // detalle: false,
      desabilitar: false,
      archivo: null,
      date_uno: "",
      date_dos: "",
      date_one: "",
      date_two: "",
      detalle: 1,
      estado: "",
      observaciones: "",
      id: "",
      registroasistencia: {
        id: 0,
        hora_entrada: "",
        hora_salida_comida: "",
        hora_entrada_comida: "",
        hora_salida: "",
        fecha: "",
        dia_id: 0,
        registro_id: 0,
        empleado_id: 0,
        fechanombre: ""
      },
      listaEmpleados: [],
      listaDias: [],
      dataR: [],
      modal: 0,
      tituloModal: "",
      tipoAccion: 0,
      disabled: 0,
      isLoading: false,
      isLoadingDetalle: false,
      // Tabla de asistencias
      pagina_actual: 0,
      listTipoRegistro: [],
      total_paginas: [],
      page: 1,
      total: 0,
      headings_asistencia: ["Empleado"],
      columns: ["empleado.id", "empleado.nombre", "empleado.ap_paterno", "empleado.ap_materno", "contador"],
      tableData: [],
      columnsAsistencias: ["fecha", "nombre", "hora_entrada", "hora_salida_comida", "hora_entrada_comida", "hora_salida"],
      tableDataAsistencia: [],
      tableDataRegistros: [],
      lstAsistenciaCompleta: [],
      lstAsistenciaIncompleta: [],
      lstInasistencia: [],
      ListadoEstados: [],
      nombre_empleado: "",
      columnsRegistros: ["registros.id", "registros.fecha", "nombre_dia", "registros.hora_entrada", "registros.hora_salida_comida", "registros.hora_entrada_comida", "registros.hora_salida", "registros.observaciones"],
      options: {
        headings: {
          "empleado.id": "Acciones",
          "empleado.nombre": "Nombre",
          "empleado.ap_paterno": "Apellido Paterno",
          "empleado.ap_materno": "Apellido Materno",
          "contador": "Estado"
        },
        perPage: 20,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        sortable: ["empleado.nombre", "empleado.ap_paterno", "empleado.ap_materno"],
        filterable: ["empleado.nombre", "empleado.ap_paterno", "empleado.ap_materno"],
        filterByColumn: true,
        texts: config.texts
      },
      optionsRegistros: {
        headings: {
          "registros.id": "Acciones",
          "registros.fecha": "Fecha",
          "registros.dia_id": "Día",
          "registros.hora_entrada": "Entrada",
          "registros.hora_salida_comida": "Salida comida",
          "registros.hora_entrada_comida": "Entrada comida",
          "registros.hora_salida": "Salida",
          "registros.observaciones": "Observaciones"
        },
        perPage: 20,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        sortable: ["registros.fecha", "registros.dia_id", "registros.hora_entrada", "registros.hora_salida_comida", "registros.hora_entrada_comida", "registros.hora_salida", "registros.observaciones"],
        filterable: ["registros.fecha", "registros.dia_id", "registros.hora_entrada", "registros.hora_salida_comida", "registros.hora_entrada_comida", "registros.hora_salida", "registros.observaciones"],
        filterByColumn: true,
        texts: config.texts
      },
      optionsdireccion: {
        headings: {
          nombre: "Día"
        },
        perPage: 20,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        sortable: ["fecha", "nombre", "hora_entrada", "hora_salida_comida", "hora_entrada_comida", "hora_salida"],
        filterable: ["fecha", "nombre", "hora_entrada", "hora_salida_comida", "hora_entrada_comida", "hora_salida"],
        filterByColumn: true,
        listColumns: {
          condicion: config.columnCondicion
        },
        texts: config.texts
      }
    };
  },
  methods: {
    /**
     * Buscar la asistencia en las fechas ingresadas
     */
    BuscarAsistencias: function BuscarAsistencias() {
      var f1 = this.$refs.date_one.value;
      var f2 = this.$refs.date_two.value;
      if (f1 == "") {
        toastr.warning("Ingrese fecha inicial");
        return;
      }
      if (f2 == "") {
        toastr.warning("Ingrese fecha final");
        return;
      }
      var fecha_inicio = new Date(f1);
      var fecha_fin = new Date(f2);
      var time_inicio = new Date(f1).getTime();
      var time_fin = new Date(f2).getTime();
      var total_dias = (time_fin - time_inicio) / (1000 * 60 * 60 * 24);
      if (fecha_inicio > fecha_fin) {
        toastr.warning("Verifique sus fechas");
        return;
      }
      if (total_dias > 31) {
        toastr.warning("Seleccione máximo 1 mes de asistencias");
        return;
      }
      this.CargarPagina(0); // Pagina 0
    },
    /**
     * Buscar en página anterios
     */
    anterior: function anterior() {
      this.page = this.page == 1 ? 1 : this.page - 1;
      if (this.data_busqueda === "") {
        this.CargarPagina(this.page * 20);
      } else {
        this.buscarEmp(this.page * 20);
      }
    },
    /**
     * Buscar página siguiente
     */
    siguiente: function siguiente() {
      this.page = this.page == this.total ? this.page : this.page + 1;
      if (this.data_busqueda === "") {
        this.CargarPagina(this.page * 20);
      } else {
        this.buscarEmp(this.page * 20);
      }
    },
    /**
     * Buscar el empleado ingresado
     */
    buscarEmp: function buscarEmp(index) {
      var _this = this;
      var f1 = this.$refs.date_one.value;
      var f2 = this.$refs.date_two.value;
      if (f1 == "") {
        toastr.warning("Ingrese fecha inicial");
        return;
      }
      if (f2 == "") {
        toastr.warning("Ingrese fecha final");
        return;
      }
      var fecha_inicio = new Date(f1);
      var fecha_fin = new Date(f2);
      if (fecha_inicio > fecha_fin) {
        toastr.warning("Verifique sus fechas");
        return;
      }
      this.data_response_temporal = this.data_response;
      axios.post("rh/asistencias/buscarempleado", {
        fecha_uno: this.date_one,
        fecha_dos: this.date_two,
        index: index,
        data: this.data_busqueda
      }).then(function (res) {
        if (res.status) {
          _this.data_response = res.data;
          _this.pagina_actual = index + 1;
          _this.headings_asistencia = ["Empleado"];
          _this.lstAsistenciaCompleta = res.data.asistencias;
          _this.total_paginas = res.data.paginas;
          _this.total = res.data.asistencias.length;
          res.data.fechas.forEach(function (f) {
            _this.headings_asistencia.push(f);
          });
          _this.total = res.data.paginas;
        } else {
          toastr.error("Error", "Contacte al administrador");
          console.error(res.data);
        }
        _this.isLoading = false;
      });
    },
    /**
     * Buscar las asistencias de las fechas ingresadas
     */
    CargarPagina: function CargarPagina(index) {
      var _this2 = this;
      if (this.data_busqueda != "") {
        this.buscarEmp(index);
      } else {
        this.isLoading = true;
        axios.get("rh/asistencias/buscarfechas/".concat(this.date_one, "&").concat(this.date_two, "&").concat(index)).then(function (res) {
          if (res.status) {
            _this2.data_response = res.data;
            _this2.pagina_actual = index + 1;
            _this2.headings_asistencia = ["Empleado"];
            _this2.lstAsistenciaCompleta = res.data.asistencias;
            _this2.total_paginas = res.data.paginas;
            _this2.total = res.data.asistencias.length;
            res.data.fechas.forEach(function (f) {
              _this2.headings_asistencia.push(f);
            });
            _this2.total = res.data.paginas;
          } else {
            toastr.error(res.data.mensajes);
          }
          _this2.isLoading = false;
        });
      }
    },
    /**
     * Borra los datos de busqueda
     */
    BorrarBusqueda: function BorrarBusqueda() {
      this.data_busqueda = "";
      this.CargarPagina(0);
    },
    /**
     * Descargar el reporte de las asistencias
     */
    GenerarReporte: function GenerarReporte() {
      var inicio = this.$refs.date_one.value;
      var fin = this.$refs.date_two.value;
      if (inicio == "") {
        toastr.warning("Ingrese fecha inicial");
        return;
      }
      if (fin == "") {
        toastr.warning("Ingrese fecha final");
        return;
      }

      // Max 2 semanas
      var fecha1 = new Date(inicio);
      var fecha2 = new Date(fin);
      var resta = fecha2.getTime() - fecha1.getTime();
      var dias = Math.round(resta / (1000 * 60 * 60 * 24));
      if (dias > 16) {
        toastr.warning("Seleccione Max. 2 semanas");
        return;
      }
      window.open("rh/asistencias/reporte/" + inicio + "&" + fin + "&" + this.reporte_estado);
      this.reporte_estado = "";
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Beneficiarios/Beneficiarios.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Beneficiarios/Beneficiarios.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
    return {
      url: '/beneficiario',
      empleado: null,
      empleado_activo: false,
      deshabilitado: null,
      detalle: false,
      beneficiario: {
        id: 0,
        telefono: '',
        tel_celular: '',
        parentesco: '',
        porcentaje: 0,
        nombre: '',
        condicion: 0,
        empleado_id: 0
      },
      modal: 0,
      tituloModal: '',
      tipoAccion: 0,
      disabled: 0,
      isLoading: false,
      isLoadingDetalle: false,
      columnsbeneficiario: ['id', 'nombre', 'telefono', 'tel_celular', 'parentesco', 'porcentaje', 'condicion'],
      tableDatabeneficiario: [],
      optionsbeneficiario: {
        headings: {
          'id': 'Acciones',
          'nombre': 'Nombre del Beneficiario',
          'telefono': 'Teléfono',
          'tel_celular': 'Télefono Celular',
          'parentesco': 'Parentesco',
          'porcentaje': 'Porcentaje',
          'condicion': 'Condición'
        },
        perPage: 10,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        sortable: ['nombre', 'empleado', 'porcentaje', 'condicion'],
        filterable: ['nombre'],
        filterByColumn: true,
        listColumns: {
          condicion: [{
            id: 1,
            text: 'Activo'
          }, {
            id: 0,
            text: 'Baja'
          }]
        },
        texts: config.texts
      }
    };
  },
  computed: {},
  methods: {
    guardarbeneficiario: function guardarbeneficiario(nuevo) {
      var _this = this;
      this.$validator.validate().then(function (result) {
        if (result) {
          _this.isLoading = true;
          var me = _this;
          axios({
            method: nuevo ? 'POST' : 'PUT',
            url: nuevo ? me.url + '/' + _this.beneficiario.empleado_id + '/beneficiario' : me.url + '/' + _this.beneficiario.id + '/' + 'beneficiario/' + _this.beneficiario.empleado_id,
            data: {
              'nombre': _this.beneficiario.nombre,
              'telefono': _this.beneficiario.telefono,
              'tel_celular': _this.beneficiario.tel_celular,
              'parentesco': _this.beneficiario.parentesco,
              'porcentaje': _this.beneficiario.porcentaje,
              'empleado_id': _this.beneficiario.empleado_id,
              'id': _this.beneficiario.id
            }
          }).then(function (response) {
            me.isLoading = false;
            if (response.data.status) {
              me.cerrarModal();
              me.cargarbeneficiario(me.empleado);
              if (!nuevo) {
                toastr.success('Beneficiario Actualizado Correctamente');
              } else {
                toastr.success('Beneficiario Registrado Correctamente');
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
    actdesact: function actdesact(id, activar, idb, n, ap, am) {
      var _this2 = this;
      if (activar) {
        this.swal_titulo = 'Esta seguro de activar este beneficiario?';
        this.swal_tle = 'Activado';
        this.swal_msg = 'El registro ha sido activado con éxito.';
      } else {
        this.swal_titulo = 'Esta seguro de desactivar este beneficiario?';
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
          var me = _this2;
          axios.get(me.url + '/' + id + '/edit').then(function (response) {
            var _toastr$options;
            if (activar) {
              me.cargarbeneficiario(me.empleado);
              toastr.success(me.swal_tle, me.swal_msg, 'success');
            } else {
              toastr.error(me.swal_tle, me.swal_msg, 'error');
            }
            toastr.options = (_toastr$options = {
              "closeButton": false
            }, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_toastr$options, "closeButton", false), "debug", false), "newestOnTop", true), "progressBar", true), "positionClass", "toast-top-center"), "preventDuplicates", false), "onclick", null), "showDuration", "300"), "hideDuration", "1000"), "timeOut", "5000"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_toastr$options, "extendedTimeOut", "1000"), "showEasing", "swing"), "hideEasing", "linear"), "showMethod", "fadeIn"), "hideMethod", "fadeOut"));
            var data = [];
            data['id'] = idb;
            me.cargarbeneficiario(data);
            this.empleado = {};
          })["catch"](function (error) {
            console.log(error);
          });
        } else if (result.dismiss === swal.DismissReason.cancel) {}
      });
    },
    cerrarModal: function cerrarModal() {
      this.modal = 0;
      this.tituloModal = '';
      _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.beneficiario);
    },
    abrirModal: function abrirModal(modelo, accion, ide) {
      var data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
      switch (modelo) {
        case "beneficiario":
          {
            switch (accion) {
              case 'registrar':
                {
                  this.modal = 1;
                  this.tituloModal = 'Registrar beneficiario';
                  _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.beneficiario);
                  this.tipoAccion = 1;
                  this.beneficiario.empleado_id = ide;
                  this.disabled = 0;
                  break;
                }
              case 'actualizar':
                {
                  _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.beneficiario);
                  this.modal = 1;
                  this.tituloModal = 'Actualizar beneficiario';
                  this.tipoAccion = 2;
                  this.disabled = 1;
                  this.beneficiario.id = data['id'];
                  this.beneficiario.nombre = data['nombre'];
                  this.beneficiario.empleado_id = data['empleado_id'];
                  this.beneficiario.telefono = data['telefono'];
                  this.beneficiario.tel_celular = data['tel_celular'];
                  this.beneficiario.parentesco = data['parentesco'];
                  this.beneficiario.porcentaje = data['porcentaje'];
                  this.disabled = 0;
                  break;
                }
            }
          }
      }
    },
    cargarbeneficiario: function cargarbeneficiario() {
      var _this3 = this;
      var dataEmpleado = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      this.empleado_activo = dataEmpleado.condicion;
      this.detalle = true;
      this.isLoadingDetalle = true;
      var me = this;
      this.empleado = dataEmpleado;
      axios.get('/beneficiario' + '/' + dataEmpleado.id + '/' + 'beneficiario').then(function (response) {
        var contador = response.data.length;
        if (contador >= 5) {
          _this3.deshabilitado = 1;
        } else {
          _this3.deshabilitado = 0;
        }
        me.tableDatabeneficiario = response.data;
        me.isLoadingDetalle = false;
        me.beneficiario.id = response.data['id'];
        me.beneficiario.empleado_id = response.data['empleado_id'];
        me.beneficiario.nombre = response.data['nombre'];
        me.beneficiario.telefono = response.data['telefono'];
        me.beneficiario.tel_celular = response.data['tel_celular'];
        me.beneficiario.parentesco = response.data['parentesco'];
        me.beneficiario.porcentaje = response.data['porcentaje'];
      })["catch"](function (error) {
        console.log(error);
      });
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Catalogos/Bancos.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Catalogos/Bancos.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************/
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
      url: '/banco',
      banco: {
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
      axios.get(me.url).then(function (response) {
        me.tableData = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    guardarBanco: function guardarBanco(nuevo) {
      var _this = this;
      this.$validator.validate().then(function (result) {
        if (result) {
          _this.isLoading = true;
          var me = _this;
          axios({
            method: nuevo ? 'POST' : 'PUT',
            url: nuevo ? me.url : me.url + '/' + _this.id,
            data: {
              'nombre': _this.banco.nombre,
              'id': _this.banco.id
            }
          }).then(function (response) {
            me.isLoading = false;
            if (response.data.status) {
              me.cerrarModal();
              me.getData();
              if (!nuevo) {
                toastr.success('Banco Actualizado Correctamente');
              } else {
                toastr.success('Banco Registrado Correctamente');
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
      _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.banco);
    },
    abrirModal: function abrirModal(modelo, accion) {
      var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      switch (modelo) {
        case "banco":
          {
            switch (accion) {
              case 'registrar':
                {
                  this.modal = 1;
                  this.tituloModal = 'Registrar Banco';
                  _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.banco);
                  this.tipoAccion = 1;
                  break;
                }
              case 'actualizar':
                {
                  this.modal = 1;
                  this.tituloModal = 'Actualizar Banco';
                  this.tipoAccion = 2;
                  this.banco.id = data['id'];
                  this.banco.nombre = data['nombre'];
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Catalogos/Departamentos.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Catalogos/Departamentos.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************/
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

var config = (__webpack_require__(/*! ../../Herramientas/config-vuetables-client */ "./resources/assets/js/components/Herramientas/config-vuetables-client.js").call)(undefined);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      url: "rh/catalogos/departamento",
      departamento: {
        id: 0,
        direccion_administrativa_id: 0,
        nombre: ''
      },
      listaDirecciones: [],
      modal: 0,
      tituloModal: '',
      tipoAccion: 0,
      isLoading: false,
      columns: ['id', 'nombre', 'direccion'],
      list_departamentos: [],
      options: {
        headings: {
          nombre: 'Nombre',
          direccion: 'Dirección',
          id: 'Acciones'
        },
        perPage: 10,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        filterByColumn: true,
        texts: config.texts
      },
      PermisosCRUD: {}
    };
  },
  methods: {
    ObtenerDepartamentos: function ObtenerDepartamentos() {
      var _this = this;
      axios.get(this.url + "/obtener").then(function (res) {
        _this.list_departamentos = res.data.departamentos;
      });
    },
    getListaDirecciones: function getListaDirecciones() {
      var _this2 = this;
      axios.get("rh/catalogos/direccionesadministrativa/obtener").then(function (res) {
        _this2.listaDirecciones = res.data.direcciones;
      });
    },
    guardarDepartamento: function guardarDepartamento(nuevo) {
      var _this3 = this;
      this.$validator.validate().then(function (result) {
        if (result) {
          _this3.isLoading = true;
          var data = new FormData();
          data.append("nombre", _this3.departamento.nombre);
          data.append("direccion_administrativa_id", _this3.departamento.direccion_administrativa_id);
          if (!nuevo) data.append("id", _this3.departamento.id);
          axios({
            method: 'POST',
            url: _this3.url + "/guardar",
            data: data
          }).then(function (res) {
            _this3.isLoading = false;
            if (res.data.status) {
              _this3.cerrarModal();
              _this3.ObtenerDepartamentos();
              if (nuevo) {
                toastr.success('Departamento Registrado Correctamente');
              } else {
                toastr.success('Departamento Actualizado Correctamente');
              }
            } else {
              toastr.error(res.data.error);
            }
          });
        }
      });
    },
    desactivarDepartamento: function desactivarDepartamento(id) {
      var _this4 = this;
      swal({
        title: 'Está seguro de desactivar este departamento?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#4dbd74',
        cancelButtonColor: '#f86c6b',
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
        reverseButtons: true
      }).then(function (result) {
        if (result.value) {
          axios.post(_this4.url + '/desactivar', {
            'id': id
          }).then(function (res) {
            toastr.error('Departamento Desactivado Correctamente');
            _this4.ObtenerDepartamentos();
          });
        }
      });
    },
    cerrarModal: function cerrarModal() {
      _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.departamento);
      this.modal = 0;
      _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.departamento);
    },
    abrirModal: function abrirModal() {
      var nuevo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var departamento = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.modal = 1;
      this.ObtenerDepartamentos();
      if (nuevo) {
        this.modal = 1;
        this.tituloModal = 'Registrar departamento';
        this.tipoAccion = 1;
      } else {
        this.tituloModal = "Actualizar departamento";
        this.tipoAccion = 2;
        this.departamento = _objectSpread({}, departamento);
      }
    }
  },
  mounted: function mounted() {
    this.PermisosCRUD = _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].getCRUD(this.$route.path);
    this.getListaDirecciones();
    this.ObtenerDepartamentos();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Catalogos/Puesto.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Catalogos/Puesto.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************/
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
      PermisosCRUD: {},
      puesto: {
        id: 0,
        departamento_id: 1,
        nombre: "",
        area: ""
      },
      listaDepartamentos: [],
      listaP: [],
      modal: 0,
      tituloModal: "",
      tipoAccion: 0,
      isGuardar_Loading: false,
      columns_puestos: ["id", "nombre", "departamento", "area", "direccion"],
      list_puestos: [],
      options_puestos: {
        headings: {
          nombre: "Nombre",
          departamento: "Departamento",
          area: "Area",
          direccion: "Dirección",
          id: "Acciones"
        },
        perPage: 10,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        filterByColumn: true,
        listColumns: {
          condicion: config.columnCondicion
        },
        texts: config.texts
      }
    };
  },
  methods: {
    /**
     * Obtener todos los puestos
     */
    ObtenerPuestos: function ObtenerPuestos() {
      var _this = this;
      axios.get("rh/catalogos/puestos").then(function (res) {
        if (res.data.status) {
          _this.list_puestos = res.data.puestos;
          _this.listaP = res.data.puestos;
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    /**
     * Obtiene todos los departamentos registrados
     */
    ObtenerDepartamentos: function ObtenerDepartamentos() {
      var _this2 = this;
      axios.get("rh/catalogos/departamento/obtener").then(function (res) {
        if (res.data.status) _this2.listaDepartamentos = res.data.departamentos;else toastr.error(res.data.mensaje);
      });
    },
    /**
     * Guardar puesto
     */
    GuardarPuesto: function GuardarPuesto(nuevo) {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var isValid, data;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.n = 1;
              return _this3.$validator.validate();
            case 1:
              isValid = _context.v;
              if (isValid) {
                _context.n = 2;
                break;
              }
              return _context.a(2);
            case 2:
              _this3.isGuardar_Loading = true;
              data = new FormData();
              if (!nuevo) data.append("id", _this3.puesto.id);
              data.append("nombre", _this3.puesto.nombre);
              data.append("area", _this3.puesto.area);
              data.append("departamento_id", _this3.puesto.departamento_id);
              axios.post("rh/catalogos/puestos/guardar", data).then(function (res) {
                _this3.isGuardar_Loading = false;
                if (res.data.status) {
                  var msg = nuevo ? "Puesto Registrado Correctamente" : "Puesto Actualizado Correctamente";
                  toastr.success(msg);
                  _this3.CerrarModalPuestos();
                  _this3.ObtenerPuestos();
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
    /**
     * Cerrar modal
     */
    CerrarModalPuestos: function CerrarModalPuestos() {
      this.modal = 0;
      this.puesto = {};
    },
    /**
     * Abrir modal 
     */
    AbrirModalPuestos: function AbrirModalPuestos() {
      var nuevo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var puesto = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.modal = 1;
      this.ObtenerDepartamentos();
      if (nuevo) {
        this.tituloModal = "Registrar puesto";
        this.tipoAccion = 1;
      } else {
        this.tituloModal = "Actualizar puesto";
        this.tipoAccion = 2;
        this.puesto = _objectSpread({}, puesto);
      }
    },
    descargar: function descargar() {
      window.open("rh/catalogos/puestos/descargar");
    }
  },
  mounted: function mounted() {
    this.PermisosCRUD = _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].getCRUD(this.$route.path);
    this.ObtenerPuestos();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/ChecadorQR.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/ChecadorQR.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Herramientas/utilerias.js */ "./resources/assets/js/components/Herramientas/utilerias.js");
/* harmony import */ var vue_digital_clock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-digital-clock */ "./node_modules/vue-digital-clock/dist/es/Clock.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

var config = (__webpack_require__(/*! ../Herramientas/config-vuetables-client */ "./resources/assets/js/components/Herramientas/config-vuetables-client.js").call)(undefined);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      message: '',
      counter: 0,
      interval: null,
      tipo_ubicacion: 2,
      ubicacion: "CIUDAD",
      PermisosCrud: {},
      fecha_reg: '',
      hora_reg: '',
      date: '',
      date_two: '',
      registros_fail: [],
      fecha_i: '',
      fecha_f: '',
      result: '',
      error: '',
      empleado: '',
      id_empleado: 0,
      id: 0,
      cantidad: 1,
      tipo: 'Caretas',
      options: {
        headings: {},
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
    DigitalClock: vue_digital_clock__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  methods: {
    zeroPadding: function zeroPadding(num, digit) {
      var zero = '';
      for (var i = 0; i < digit; i++) {
        zero += '0';
      }
      return (zero + num).slice(-digit);
    },
    InitCrud: function InitCrud() {
      this.PermisosCrud = _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].getCRUD(this.$route.path);
    },
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
              if (_t.name === 'NotAllowedError') {
                _this.error = "ERROR: Permita el acceso a la camara";
              } else if (_t.name === 'NotFoundError') {
                _this.error = "ERROR: No existe camara en este dispositivo";
              } else if (_t.name === 'NotSupportedError') {
                _this.error = "ERROR: No es suguro la activacion de la camara (HTTPS, localhost)";
              } else if (_t.name === 'NotReadableError') {
                _this.error = "ERROR: la camra ya esta en uso?";
              } else if (_t.name === 'OverconstrainedError') {
                _this.error = "ERROR: installed cameras are not suitable";
              } else if (_t.name === 'StreamApiNotSupportedError') {
                _this.error = "ERROR: Stream API no soportado para este navegador";
              }
            case 3:
              return _context.a(2);
          }
        }, _callee, null, [[0, 2]]);
      }))();
    },
    onDecode: function onDecode(result) {
      var _this2 = this;
      console.error(result);
      this.result = result;
      var porciones = this.result.split('|');
      if (porciones.length == 2) {
        this.empleado = porciones[1];
        this.id_empleado = porciones[0];
        var cd = new Date();
        this.fecha_reg = this.zeroPadding(cd.getFullYear(), 4) + '-' + this.zeroPadding(cd.getMonth() + 1, 2) + '-' + this.zeroPadding(cd.getDate(), 2);
        this.hora_reg = this.zeroPadding(cd.getHours(), 2) + ':' + this.zeroPadding(cd.getMinutes(), 2) + ':' + this.zeroPadding(cd.getSeconds(), 2);
        this.SwalMensaje();

        // obtener ubicacion
        var aux_ubicacion = "";
        if (this.tipo_ubicacion == 0) aux_ubicacion = this.ubicacion;else {
          aux_ubicacion = this.tipo_ubicacion == 1 ? "TEHUACAN" : "COATZACOALCOS";
        }
        if (navigator.onLine) {
          // el navegador está conectado a la red
          axios.post("rh/checador/guardar", {
            empleado: this.empleado,
            empleado_id: this.id_empleado,
            fecha: this.fecha_reg,
            hora: this.hora_reg,
            ubicacion: aux_ubicacion
          }).then(function (res) {
            if (res.data.status) {
              console.log("ok");
            } else {
              _this2.addC();
            }
          })["catch"](function (e) {
            _this2.addC();
          });
        } else {
          // el navegador no está conectado a la red
          this.addC();
        }
      }
    },
    SwalMensaje: function SwalMensaje() {
      swal({
        type: 'success',
        title: 'Acceso Correcto',
        position: 'center',
        showConfirmButton: false,
        timer: 1500
      });
    },
    localSt: function localSt() {
      if (localStorage.getItem('regs')) {
        try {
          this.registros_fail = JSON.parse(localStorage.getItem('regs'));
        } catch (e) {
          localStorage.removeItem('regs');
        }
      }
    },
    addC: function addC() {
      // obtener ubicacion
      var aux_ubicacion = "";
      if (this.tipo_ubicacion == 0) aux_ubicacion = this.ubicacion;else {
        aux_ubicacion = this.tipo_ubicacion == 1 ? "TEHUACAN" : "COATZACOALCOS";
      }
      var emp = this.empleado + '|' + this.id_empleado + '|' + this.fecha_reg + '|' + this.hora_reg + "|" + aux_ubicacion;
      this.registros_fail.push(emp);
      this.saveC();
    },
    removeC: function removeC(x) {
      this.registros_fail.splice(x, 1);
      this.saveC();
    },
    saveC: function saveC() {
      var parsed = JSON.stringify(this.registros_fail);
      localStorage.setItem('regs', parsed);
    },
    sincronizar: function sincronizar() {
      var _this3 = this;
      if (navigator.onLine) {
        this.registros_fail.forEach(function (item, i) {
          var porciones = item.split('|');
          axios.post("rh/checador/guardar", {
            empleado: porciones[0],
            empleado_id: porciones[1],
            fecha: porciones[2],
            hora: porciones[3],
            ubicacion: porciones[4]
          }).then(function (res) {
            if (res.data.status) {
              console.log("ok");
              _this3.removeC(i);
            } else {
              // Nada
            }
          })["catch"](function (e) {
            console.error(e);
          });
        });
      } else {
        toastr.warning('NO SE PUEDE SINCRONIZAR REVISE SU CONEXION A INTERNET!!!');
      }
    }
  },
  mounted: function mounted() {
    this.localSt();
    this.InitCrud();
    this.tipo_ubicacion = 1;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/CuestionarioInfraestructura.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/CuestionarioInfraestructura.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
      PermisosCRUD: {},
      //// CuestionarioInfra
      url_cuestionarioinfra: "rh/cuestionarioinfra",
      tipoAccion_cuestionarioinfra: 1,
      tipoCardCuestionarioInfra: 1,
      ver_modal_cuestionarioinfra: false,
      tituloModal_cuestionarioinfra: "",
      cuestionarioinfra_id: 0,
      isGuardarcuestionarioinfra_loading: false,
      isObtenercuestionarioinfra_loading: false,
      columns_cuestionarioinfra: ["id", "nombre", "fecha", "documento"],
      list_cuestionarioinfra: [],
      cuestionarioinfra: {},
      options_cuestionarioinfra: {
        headings: {
          id: "Acciones",
          nombre: "Empleado",
          fecha: "Fecha"
        },
        perPage: 10,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        filterByColumn: true,
        texts: config.texts
      },
      list_empleados: []
    };
  },
  methods: {
    // Metodos
    /**
     * Obtener todos los registros
     */
    ObtenerCuestionarioInfra: function ObtenerCuestionarioInfra() {
      var _this = this;
      this.isObtenercuestionarioinfra_loading = true;
      axios.get(this.url_cuestionarioinfra + "/obtener").then(function (res) {
        _this.isObtenercuestionarioinfra_loading = false;
        if (res.data.status) {
          _this.list_cuestionarioinfra = res.data.cuestionarioinfra;
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    /**
     * Abrir modal CuestionarioInfra
     */
    AbrirModalCuestionarioInfra: function AbrirModalCuestionarioInfra(nuevo) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.ObtenerEmpleados();
      this.ver_modal_cuestionarioinfra = true;
      if (nuevo) {
        this.tituloModal_cuestionarioinfra = "Registrar Cuestionario infraestructura";
        this.tipoAccion_cuestionarioinfra = 1;
      } else {
        this.tituloModal_cuestionarioinfra = "Actualizar Cuestionario infraestructura";
        this.tipoAccion_cuestionarioinfra = 2;
        this.asd = _objectSpread({}, data);
      }
    },
    /**
     * Registrar CuestionarioInfra
     */
    RegistrarCuestionarioInfra: function RegistrarCuestionarioInfra(nuevo) {
      var _this2 = this;
      this.$validator.validate().then(function (isValid) {
        if (!isValid) return;
        var data = new FormData();
        if (!nuevo) data.append("id", _this2.cuestionarioinfra_id);
        data.append("empleado_id", _this2.cuestionarioinfra.empleado.id);
        data.append("fecha", _this2.cuestionarioinfra.fecha);
        _this2.isGuardarcuestionarioinfra_loading = true;
        axios.post(_this2.url_cuestionarioinfra + "/guardar", data).then(function (res) {
          _this2.isGuardarcuestionarioinfra_loading = false;
          if (res.data.status) {
            toastr.success("Guardado correctamente");
            _this2.ObtenerCuestionarioInfra();
            _this2.CerrarModalCuestionarioInfra();
          } else {
            toastr.error(res.data.mensaje);
          }
        });
      });
    },
    /**
     * Obtener todos los empleados registrados
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
     * Cerrar modal
     */
    CerrarModalCuestionarioInfra: function CerrarModalCuestionarioInfra() {
      this.ver_modal_cuestionarioinfra = false;
      this.cuestionarioinfra = {};
    },
    /**
     * Subir el cuestionario del empleado
     */
    SubirCuestionario: function SubirCuestionario(id) {
      var _this4 = this;
      Swal.fire({
        title: "Cargar cuestionario (PDF)",
        input: "file",
        confirmButtonText: "Cargar"
      }).then(function (result) {
        console.error(result);
        if (result.value == null) return;
        if (result.value.type === "application/pdf") {
          var data = new FormData();
          data.append("cuestionario_id", id);
          data.append("evidencia", result.value);
          axios.post(_this4.url_cuestionarioinfra + "/subircuestionario", data).then(function (res) {
            if (res.data.status) {
              toastr.success("Documento subido correctamente");
              _this4.ObtenerCuestionarioInfra();
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
    /**
     * Desscargar plantilla
     */
    Descargar: function Descargar() {
      window.open("rh/cuestionarioinfra/plantilla", "_blank");
    },
    /**
     * Descargar el documento
     */
    DescargarEvidencia: function DescargarEvidencia(id) {
      window.open(this.url_cuestionarioinfra + '/descargarevidencia/' + id, '_blank');
    }
  },
  mounted: function mounted() {
    this.PermisosCRUD = _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].getCRUD(this.$route.path);
    this.ObtenerCuestionarioInfra();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Dashboard/AniversarioEmpleados.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Dashboard/AniversarioEmpleados.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
      // Tabla empleados
      columns_empleados: ['nombre', "ap_paterno", "ap_materno", "fecha_ingreso", "anios"],
      list_empleados: [],
      options_empleados: {
        headings: {
          empleado: 'Empleado',
          estado: "Estado",
          ap_paterno: "Apellido Paterno",
          ap_materno: "Apellido Materno",
          anios: "Años"
        },
        // Headings,
        perPage: 10,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        filterByColumn: true,
        texts: config.texts
      }
    };
  },
  //data
  methods: {
    /**
     * Obtiene todos los empleados
     */
    ObtenerEmpleados: function ObtenerEmpleados() {
      var _this = this;
      axios.get("rh/aniversario/obtenerempleados").then(function (res) {
        if (res.data.status) {
          _this.list_empleados = res.data.empleados;
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    }
  },
  mounted: function mounted() {
    this.ObtenerEmpleados();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Dashboard/Dashboard.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Dashboard/Dashboard.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var AniversarioEmpleados = function AniversarioEmpleados(r) {
  return __webpack_require__.e(/*! require.ensure | rh */ "rh").then((function () {
    return r(__webpack_require__(/*! ./AniversarioEmpleados.vue */ "./resources/assets/js/components/RH/Dashboard/AniversarioEmpleados.vue"));
  }).bind(null, __webpack_require__))['catch'](__webpack_require__.oe);
};
var Resguardo = function Resguardo(r) {
  return __webpack_require__.e(/*! require.ensure | rh */ "rh").then((function () {
    return r(__webpack_require__(/*! ../Empleados/Resguardos.vue */ "./resources/assets/js/components/RH/Empleados/Resguardos.vue"));
  }).bind(null, __webpack_require__))['catch'](__webpack_require__.oe);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      isLoading: false,
      listaPermisos: [],
      widgets: {
        ver_resguardo: false
      }
    };
  },
  components: {
    'resguardos': Resguardo,
    AniversarioEmpleados: AniversarioEmpleados
  },
  methods: {},
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/DiasFestivos.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/DiasFestivos.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************/
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
      //// DiasFestivos
      url_diasfestivos: "rh/diasfestivos",
      tipoAccion_diasfestivos: 1,
      tipoCardDiasFestivos: 1,
      ver_modal_diasfestivos: false,
      tituloModal_diasfestivos: "",
      diasfestivos_id: 0,
      isGuardardiasfestivos_loading: false,
      isObtenerdiasfestivos_loading: false,
      columns_diasfestivos: ["id", "dia", "descripcion"],
      list_diasfestivos: [],
      diasfestivos: {},
      options_diasfestivos: {
        headings: {
          id: "Acciones",
          dia: "Día",
          descripcion: "Descripción"
        },
        perPage: 20,
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
    ObtenerDiasFestivos: function ObtenerDiasFestivos() {
      var _this = this;
      this.isObtenerdiasfestivos_loading = true;
      axios.get(this.url_diasfestivos + "/obtener").then(function (res) {
        _this.isObtenerdiasfestivos_loading = false;
        if (res.data.status) {
          _this.list_diasfestivos = res.data.diasfestivos;
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    /**
     * Abrir modal DiasFestivos
     */
    AbrirModalDiasFestivos: function AbrirModalDiasFestivos(nuevo) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.ver_modal_diasfestivos = true;
      if (nuevo) {
        this.tituloModal_diasfestivos = "Registrar Días festivos";
        this.tipoAccion_diasfestivos = 1;
      } else {
        this.tituloModal_diasfestivos = "Actualizar Días festivos";
        this.tipoAccion_diasfestivos = 2;
        this.asd = _objectSpread({}, data);
      }
    },
    /**
     * Registrar DiasFestivos
     */
    RegistrarDiasFestivos: function RegistrarDiasFestivos(nuevo) {
      var _this2 = this;
      this.$validator.validate().then(function (isValid) {
        if (!isValid) return;
        var data = new FormData();
        if (!nuevo) data.append("id", _this2.diasfestivos_id);
        data.append("dia", _this2.diasfestivos.dia);
        data.append("descripcion", _this2.diasfestivos.descripcion);
        _this2.isGuardardiasfestivos_loading = true;
        axios.post(_this2.url_diasfestivos + "/guardar", data).then(function (res) {
          _this2.isGuardardiasfestivos_loading = false;
          if (res.data.status) {
            toastr.success("Guardado correctamente");
            _this2.ObtenerDiasFestivos();
            _this2.CerrarModalDiasFestivos();
          } else {
            toastr.error(res.data.mensaje);
          }
        });
      });
    },
    /**
     * Cerrar modal
     */
    CerrarModalDiasFestivos: function CerrarModalDiasFestivos() {
      this.ver_modal_diasfestivos = false;
    }
  },
  mounted: function mounted() {
    this.ObtenerDiasFestivos();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/Alta.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/Alta.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************/
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
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      url: "/rh/empleados",
      PermisosCrud: {},
      empleado_activo: 0,
      empleado: {
        id: 0,
        nombre: "",
        ap_paterno: "",
        ap_materno: "",
        sexo: 1,
        lug_nac: "",
        fech_nac: "",
        fech_alta_imss: "",
        fech_ing: "",
        tipo_sangre: "S/I",
        talla_overol: 0,
        talla_botas: 0,
        talla_camisa: 0,
        amortizacion: 0,
        numero_credito: 0,
        edo_civil_id: 1,
        puesto_id: {},
        curp: "",
        rfc: "",
        nss_imss: "",
        ubicacion_id: 1,
        id_checador: 1,
        fiscal_cp: "",
        fiscal_estado: "",
        salario_neto: 0
      },
      tipoAccion: 1,
      error: 0,
      list_ubicaciones: [],
      list_estadosciviles: [],
      list_puestos: [],
      errorMostrarMsj: [],
      isLoading: false
    };
  },
  methods: {
    /**
     * Obtener los catalos para el registro del empleado
     */
    ObtenerCatalogos: function ObtenerCatalogos() {
      var _this = this;
      axios.get("rh/catalogos/estadosciviles").then(function (res) {
        if (res.data.status) _this.list_estadosciviles = res.data.estados;else toastr.error(res.data.mensaje);
      });
      axios.get("rh/catalogos/tipoubicacion").then(function (res) {
        if (res.data.status) _this.list_ubicaciones = res.data.ubicaciones;else toastr.error(res.data.mensaje);
      });
      axios.get("rh/catalogos/puestosnombre").then(function (res) {
        if (res.data.status) _this.list_puestos = res.data.puestos;else toastr.error(res.data.mensaje);
      });
    },
    /**
     * Guarda el empleado
     */
    Guardar: function Guardar(nuevo) {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var isValid, data;
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
              if (!(_this2.empleado.puesto_id == null)) {
                _context.n = 3;
                break;
              }
              toastr.warning("Seleccione el puesto");
              return _context.a(2);
            case 3:
              if (!(_this2.empleado.puesto_id.id == null)) {
                _context.n = 4;
                break;
              }
              toastr.warning("Seleccione el puesto");
              return _context.a(2);
            case 4:
              _this2.isLoading = true;
              data = new FormData();
              if (!nuevo) data.append("id", _this2.empleado.id);
              data.append("nombre", _this2.empleado.nombre);
              data.append("ap_paterno", _this2.empleado.ap_paterno);
              data.append("ap_materno", _this2.empleado.ap_materno);
              data.append("lug_nac", _this2.empleado.lug_nac);
              data.append("fech_nac", _this2.empleado.fech_nac);
              data.append("fech_alta_imss", _this2.empleado.fech_alta_imss);
              data.append("fech_ing", _this2.empleado.fech_ing);
              data.append("curp", _this2.empleado.curp);
              data.append("rfc", _this2.empleado.rfc);
              data.append("nss_imss", _this2.empleado.nss_imss);
              data.append("sexo", _this2.empleado.sexo);
              data.append("edo_civil_id", _this2.empleado.edo_civil_id);
              data.append("tipo_sangre", _this2.empleado.tipo_sangre);
              data.append("talla_overol", _this2.empleado.talla_overol);
              data.append("talla_botas", _this2.empleado.talla_botas);
              data.append("talla_camisa", _this2.empleado.talla_camisa);
              data.append("amortizacion", _this2.empleado.amortizacion);
              data.append("numero_credito", _this2.empleado.numero_credito);
              data.append("puesto_id", _this2.empleado.puesto_id.id);
              data.append("ubicacion_id", _this2.empleado.ubicacion_id);
              data.append("id_checador", _this2.empleado.id_checador);
              data.append("fiscal_cp", _this2.empleado.fiscal_cp);
              data.append("fiscal_estado", _this2.empleado.fiscal_estado);
              data.append("salario_neto", _this2.empleado.salario_neto);
              axios.post(_this2.url, data).then(function (res) {
                _this2.isLoading = false;
                if (res.data.status) {
                  toastr.success("Empleado " + (nuevo ? "Registrado" : "Actualizado") + " Correctamente");
                  _this2.$emit("regresar", res.data.emp);
                } else {
                  toastr.error(res.data.mensaje);
                }
              });
            case 5:
              return _context.a(2);
          }
        }, _callee);
      }))();
    },
    /**
     * Cargar los datos del empleado
     */
    CargarEmpleado: function CargarEmpleado(empleado, PermisosCrud, reciente) {
      var _this3 = this;
      this.PermisosCrud = PermisosCrud;
      this.tipoAccion = 2;
      this.empleado_activo = empleado.condicion;
      this.isLoading = true;
      if (reciente)
        // 
        {
          // Desplazar hacia los contratos
          setTimeout(function () {
            var el = _this3.$refs.finAlta;
            if (el) {
              el.scrollIntoView({
                behavior: 'smooth'
              });
            }
          }, 50);
        }
      axios.get("rh/empleados/" + empleado.id).then(function (res) {
        _this3.isLoading = false;
        if (res.data.status) {
          _this3.empleado = _objectSpread({}, res.data.empleado);
          _this3.empleado.puesto_id = {
            id: res.data.empleado.puesto_id,
            nombre: res.data.empleado.puesto_nombre
          };
        } else toastr.error(res.data.mensaje);
      });
    },
    Limpiar: function Limpiar() {
      this.empleado = {};
      this.tipoAccion = 1;
    }
  },
  mounted: function mounted() {
    this.ObtenerCatalogos();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/Contactos.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/Contactos.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      PermisosCrud: {},
      empleado_activo: false,
      contacto: {
        tel_celular: "",
        tel_casa: "",
        correo_electronico: "",
        contacto_emergencia: "",
        tel_emergencia: "",
        empleado_id: 0
      },
      isGuardar_loading: false
    };
  },
  computed: {},
  methods: {
    /**
     * Guardar el contacto
     */
    GuardarContacto: function GuardarContacto() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var isValid, data;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.n = 1;
              return _this.$validator.validate();
            case 1:
              isValid = _context.v;
              if (isValid) {
                _context.n = 2;
                break;
              }
              return _context.a(2);
            case 2:
              _this.isGuardar_loading = true;
              data = new FormData();
              if (_this.contacto.id != null) data.append("id", _this.contacto.id);
              data.append("empleado_id", _this.contacto.empleado_id);
              data.append("tel_celular", _this.contacto.tel_celular);
              data.append("tel_casa", _this.contacto.tel_casa);
              data.append("contacto_emergencia", _this.contacto.contacto_emergencia);
              data.append("correo_electronico", _this.contacto.correo_electronico);
              data.append("tel_emergencia", _this.contacto.tel_emergencia);
              axios.post("rh/empleados/contacto/guardar", data).then(function (res) {
                _this.isGuardar_loading = false;
                if (res.data.status) {
                  toastr.success("Contacto Actualizado Correctamente.");
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
    /**
     * Cargar el contacto del empleado
     */
    CargarContacto: function CargarContacto(empleado, PermisosCrud) {
      var _this2 = this;
      this.isGuardar_loading = true;
      // Asignar los permisos
      this.empleado_activo = empleado.condicion;
      this.PermisosCrud = PermisosCrud;
      axios.get("rh/empleados/contacto/obtener/" + empleado.id).then(function (res) {
        _this2.isGuardar_loading = false;
        if (res.data.status) {
          if (res.data.contacto == null) {
            _this2.nuevo = true;
            _this2.contacto = {
              empleado_id: empleado.id
            };
          } else {
            _this2.nuevo = true;
            _this2.contacto = res.data.contacto;
          }
        } else toastr.error(res.data.mensaje);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/Contratos2.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/Contratos2.vue?vue&type=script&lang=js ***!
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
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var config = (__webpack_require__(/*! ../../Herramientas/config-vuetables-client */ "./resources/assets/js/components/Herramientas/config-vuetables-client.js").call)(undefined);
var Sueldo2 = function Sueldo2(r) {
  return __webpack_require__.e(/*! require.ensure | rh */ "rh").then((function () {
    return r(__webpack_require__(/*! ./Sueldo2.vue */ "./resources/assets/js/components/RH/Empleados/Sueldo2.vue"));
  }).bind(null, __webpack_require__))['catch'](__webpack_require__.oe);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    "sueldo2": Sueldo2
  },
  data: function data() {
    return {
      empleado: {},
      tipoCard: 2,
      tipoAccionContrato: 1,
      PermisosCRUD: {},
      activeTab: " tab1",
      // Inicio
      url_contratos: "rh/contratos",
      list_empleados: [],
      columns_empleados: ["id", "nombre", "ap_paterno", "ap_materno", "inicio", "fin", "condicion"],
      options_empleados: {
        headings: {
          "id": "Acciones"
        },
        perPage: 20,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        filterByColumn: true,
        texts: config.texts,
        listColumns: {
          condicion: [{
            id: 0,
            text: "Sin Contrato"
          }, {
            id: 1,
            text: "Activo"
          }, {
            id: 2,
            text: "Por Vencer"
          }, {
            id: 3,
            text: "Vencido"
          }]
        }
      },
      empresa_id: 1,
      isEmpleadosContratoLoading: false,
      // Contratos
      isObtenerContratosLoading: false,
      nombre_empleado: "",
      empleado_id: 0,
      list_contratos: [],
      tituloModal: "",
      columns_contratos: ["id", "ubicacion", "proyecto", "puesto", "fecha_ingreso", "fecha_fin", "tipo_nomina", "tipo_contrato", "asd", "condicion"],
      options_contratos: {
        headings: {
          "id": "Acciones",
          "fecha_ingreso": "Inicio",
          "fecha_fin": "Fin",
          "asd": "Contrato",
          "condicion": "Estado"
        },
        perPage: 10,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        filterByColumn: true,
        texts: config.texts
      },
      // Detalles
      contrato_id: 0,
      tituloModal_contrato: "",
      isGuardaContrato_loading: false,
      list_proyectos: [],
      list_tiposcontato: [],
      list_tipos_nomina: [],
      list_horarios: [],
      list_puestos: [],
      list_ubicaciones: [],
      contrato: {
        id: 0,
        fecha_ingreso: "",
        fecha_fin: "",
        nomina: "",
        puesto: "",
        puesto_id: 0,
        tipo_nomina_id: 0,
        empleado_id: 0,
        tipo_ubicacion_id: 0,
        ubicacion: "",
        horario_id: 0,
        tipo_contrato_id: 0,
        proyecto_id: 0,
        motivo: ""
      },
      list_empleados_testigos: [],
      // Testigos
      testigo1: {},
      testigo2: {},
      // Sueldos
      list_sueldos: []
    };
  },
  methods: {
    /**
     * Obtener los empleados de la empresa seleccionada, para los testigos
     */
    ObtenerEmpleados: function ObtenerEmpleados() {
      var _this = this;
      this.isEmpleadosContratoLoading = true;
      axios.get("rh/contratos/obtenerempleados/" + this.empresa_id).then(function (res) {
        _this.isEmpleadosContratoLoading = false;
        if (res.data.status) {
          _this.list_empleados = res.data.empleados;
          _this.list_empleados_testigos = _this.list_empleados.map(function (e) {
            return {
              "id": e.id,
              "nombre_completo": "".concat(e.nombre, " ").concat(e.ap_paterno, " ").concat(e.ap_materno)
            };
          });
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    /**
     * Obtener los contratos del empleado seleccionado
     */
    VerContratosEmpleado: function VerContratosEmpleado(emp, crud) {
      this.empleado = emp;
      this.PermisosCRUD = crud;
      this.empleado_id = emp.id;
      this.tipoCard = 2; // Mostrar contratos
      this.nombre_empleado = "".concat(emp.nombre, " ").concat(emp.ap_paterno, " ").concat(emp.ap_materno);
      this.isObtenerContratosLoading = true;
      var emp_id = this.empleado.id_checador <= 2 ? 1 : 2; // 1. Conser 2. CSCT
      this.ObtenerEmpleados(emp_id);
      this.CargarContratosAux(emp.id);
    },
    /**
     * Obtener los contratos del empleado 
     */
    CargarContratosAux: function CargarContratosAux(emp_id) {
      var _this2 = this;
      axios.get("rh/contratos/obtener/" + emp_id).then(function (res) {
        _this2.isObtenerContratosLoading = false;
        if (res.data.status) {
          _this2.list_contratos = res.data.contratos;
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    /**
     * Desactivar el contrato seleccionado
     */
    DesactivarContrato: function DesactivarContrato(contrato) {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var res_eliminar, tipos_renuncia, motivo;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.n = 1;
              return swal({
                title: "¿Esta seguro de desactivar este contrato?",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#4dbd74",
                cancelButtonColor: "#f86c6b",
                confirmButtonText: "Aceptar",
                cancelButtonText: "Cancelar",
                reverseButtons: true
              });
            case 1:
              res_eliminar = _context.v;
              if (res_eliminar.value) {
                _context.n = 2;
                break;
              }
              return _context.a(2);
            case 2:
              // Cancelado
              // Obtener los motivos de renuncia
              tipos_renuncia = {
                "3": "ABANDONO DE EMPLEO",
                "1": "RENUNCIA",
                "2": "TERMINO DE PROYECTO"
              }; // Motivo
              _context.n = 3;
              return swal({
                title: "Motivo de la Baja",
                input: "select",
                inputOptions: tipos_renuncia,
                confirmButtonText: "Continuar <i class='fas fa-arrow-right'> </i>",
                showCancelButton: true,
                customClass: "form-check form-check-inline",
                inputValidator: function inputValidator(result) {
                  return !result && "Se Requiere Elegir un Elemento";
                }
              });
            case 3:
              motivo = _context.v;
              if (motivo.value) {
                _context.n = 4;
                break;
              }
              return _context.a(2);
            case 4:
              // Cancelado

              axios.post(_this3.url_contratos + "/finalizar", {
                "id": contrato.id,
                "motivo_fecha_fin": motivo.value
              }).then(function (res) {
                if (res.data.status) {
                  toastr.success("Contrato Finalizado Correctamente");
                  _this3.CargarContratosAux(contrato.empleado_id);
                } else {
                  toastr.error(res.data.mensaje);
                }
              });
            case 5:
              return _context.a(2);
          }
        }, _callee);
      }))();
    },
    CerrarModalContrato: function CerrarModalContrato() {
      this.tipoCard = 2; // Contratos del empleados
      this.contrato = {
        proyecto: {},
        testigo_1: {},
        testigo_2: {},
        puesto: {}
      };
    },
    /**
     * Abrir modal para registro/actualización del contrato
     */
    AbrirModalContrato: function AbrirModalContrato(nuevo) {
      var _this4 = this;
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.isGuardaContrato_loading = true;
      this.CargarCatalogos(); // Cargar todos los catalogos
      this.tipoCard = 3; // Contrato
      if (nuevo) {
        // obtener fecha de alta de imss para fecha de ingreso
        this.tituloModal = "Registrar Contrato";
        this.tipoAccionContrato = 1;
        // Obtener puesto
        axios.get("rh/catalogos/puestos/" + this.empleado.puesto_id).then(function (res) {
          if (res.data.status) {
            _this4.contrato_id = res.data.puesto.id;
            _this4.contrato.puesto = res.data.puesto.nombre;
          } else toastr.error(res.data.mensaje);
        });
        this.contrato.fecha_ingreso = this.empleado.fech_alta_imss;
        this.contrato.puesto_id = this.empleado.puesto_id;
        this.contrato.tipo_ubicacion_id = this.empleado.ubicacion_id;
        this.contrato.ubicacion = this.contrato.tipo_ubicacion_id == 1 ? "Tehuacán, Puebla" : "Coatzacoalcos, Veracruz";
      } else {
        this.contrato_id = data.id;
        // Testigos
        this.tituloModal = "Actualizar Contrato";
        this.tipoAccionContrato = 2;
        this.contrato = _objectSpread({}, data);
        this.contrato.fecha_ingreso = this.empleado.fech_alta_imss;
        this.contrato.nomina = data.tipo_nomina;
        this.tipo_nomina_id = data.tipo_nomina_id;
        this.contrato.puesto_id = data.puesto_id;
        this.contrato.puesto = data.puesto;
        this.contrato.proyecto = {
          id: data.proyecto_id,
          nombre_corto: data.proyecto
        };
        this.testigo1 = {
          id: data.testigo1_id,
          nombre_completo: data.testigo1
        };
        this.testigo2 = {
          id: data.testigo2_id,
          nombre_completo: data.testigo2
        };
      }
      // Tipo nomina 1 semal 2. quinceal
      if (this.empleado.id_checador == 1 || this.empleado.id_checador == 3) {
        this.contrato.tipo_nomina_id = 1;
        this.contrato.nomina = "Semanal";
      } else {
        this.contrato.tipo_nomina_id = 2;
        this.contrato.nomina = "Quincenal";
      }
      // Salarios
      this.$refs.sueldo2.CargarSueldos(nuevo, this.contrato.id, this.contrato.tipo_nomina_id, this.empleado.salario_neto);
      this.isGuardaContrato_loading = false;
    },
    /**
     * Cargar los catalogos del contrato
     */
    CargarCatalogos: function CargarCatalogos() {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var res;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              _context2.n = 1;
              return axios.get("generales/proyectos/1");
            case 1:
              res = _context2.v;
              if (res.data.status) _this5.list_proyectos = res.data.proyectos;else toastr.errors(res.data.mensaje);
              // Tipos de contrato
              _context2.n = 2;
              return axios.get("rh/catalogos/tiposcontrato/obtener");
            case 2:
              res = _context2.v;
              if (res.data.status) _this5.list_tiposcontato = res.data.tipocontrato;else toastr.errors(res.data.mensaje);
              // Horarios
              _context2.n = 3;
              return axios.get("rh/catalogos/horarios/obtener");
            case 3:
              res = _context2.v;
              if (res.data.status) _this5.list_horarios = res.data.horarios;else toastr.errors(res.data.mensaje);
            case 4:
              return _context2.a(2);
          }
        }, _callee2);
      }))();
    },
    /**
     * Guarddar o actualizar contrato
     */
    GuardarContrato: function GuardarContrato(nuevo) {
      var _this6 = this;
      this.$validator.validate().then(function (isValid) {
        if (!isValid) return;

        // VAlidar campos
        var error = _this6.CamposIncompletos();
        if (error != "ok") {
          toastr.warning("Ingrese el campo " + error);
          return;
        }
        _this6.isGuardaContrato_loading = true;
        var data = new FormData();
        if (!nuevo) data.append("id", _this6.contrato.id);
        data.append("proyecto_id", _this6.contrato.proyecto.id);
        data.append("tipo_contrato_id", _this6.contrato.tipo_contrato_id);
        data.append("tipo_nomina_id", _this6.contrato.tipo_nomina_id);
        data.append("horario_id", _this6.contrato.horario_id);
        data.append("fecha_ingreso", _this6.contrato.fecha_ingreso);
        data.append("fecha_fin", _this6.contrato.fecha_fin);
        data.append("puesto_id", _this6.contrato.puesto_id);
        data.append("tipo_ubicacion_id", _this6.contrato.tipo_ubicacion_id);
        data.append("testigo1_id", _this6.testigo1.id);
        data.append("testigo2_id", _this6.testigo2.id);
        data.append("empleado_id", _this6.empleado_id);
        data.append("empresa_id", _this6.empresa_id);
        axios.post(_this6.url_contratos + "/guardar/", data).then(function (res) {
          _this6.isGuardaContrato_loading = false;
          if (res.data.status) {
            if (nuevo) {
              toastr.success("Contrato registrato correctamente");
              toastr.info("Ahora debe registrar un sueldo");
              // Obtener ID del contrato para registrar
              var c_id = res.data.c_id;
              _this6.$refs.sueldo2.CargarSueldos(0, c_id, _this6.contrato.tipo_nomina_id, _this6.empleado.salario_neto);
            } else {
              toastr.success("Contrato actualizado correctamente");
            }
            _this6.CargarContratosAux(_this6.empleado_id);
          } else {
            toastr.errors(res.data.mensaje);
          }
        })["catch"](function (x) {
          toastr.error("Error al registrar el contrato");
        });
      });
    },
    /**
     * Comprueba que todos los campos tengan información
     */
    CamposIncompletos: function CamposIncompletos() {
      if (this.contrato.proyecto == null) return "Proyecto";
      if (this.contrato.proyecto.id == null) return "Proyecto";
      if (this.testigo1 == null) return "Testigo 1";
      if (this.testigo1.id == null) return "Testigo 1";
      if (this.testigo2 == null) return "Testigo 2";
      if (this.testigo2.id == null) return "Testigo 2";
      return "ok";
    },
    /**
     * Descarga el nuevo contrato
     */
    DescargarNuevoContrato: function DescargarNuevoContrato(id) {
      window.open(this.url_contratos + "/nuevocontrato/" + id);
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/Cumpleanios.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/Cumpleanios.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************/
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
      url: 'rh/empleados/cumples',
      modal: 0,
      tituloModal: '',
      tipoAccion: 0,
      isLoading: false,
      columns: ['nombre', 'ap_paterno', 'ap_materno', 'fech_nac'],
      tableData: [],
      options: {
        headings: {
          nombre: 'Nombres',
          ap_paterno: 'Apellido paterno',
          ap_materno: 'Apellido materno',
          fech_nac: 'Fecha de Nacimiento'
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
      axios.get(me.url).then(function (response) {
        me.tableData = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    descargar: function descargar(periodo) {
      var fecha = new Date();
      var hoy = fecha.getDate();
      var mesActual = fecha.getMonth() + 1;
      mesActual += periodo;
      window.open('rh/empleados/cumplemes/' + mesActual, '_blank');
    }
  },
  mounted: function mounted() {
    this.getData();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/Datos-ban-emp.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/Datos-ban-emp.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************/
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
var config = (__webpack_require__(/*! ../../Herramientas/config-vuetables-client */ "./resources/assets/js/components/Herramientas/config-vuetables-client.js").call)(undefined);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      //// DatosBancariosEmpleado
      url_datosbancariosempleado: "rh/empleados/banco",
      PermisosCrud: {},
      empleado_activo: false,
      tipoAccion_datosbancariosempleado: 1,
      tipoCardDatosBancariosEmpleado: 1,
      ver_modal_datosbancariosempleado: false,
      tituloModal_datosbancariosempleado: "",
      datosbancariosempleado_id: 0,
      list_bancos_catalogo: [],
      isGuardardatosbancariosempleado_loading: false,
      isObtenerdatosbancariosempleado_loading: false,
      columns_datosbancariosempleado: ["id", "bnombre", "numero_tarjeta", "numero_cuenta", "clabe"],
      list_datosbancariosempleado: [],
      datosbancariosempleado: {
        banco_id: 1
      },
      options_datosbancariosempleado: {
        headings: {
          id: "Acciones",
          numero_tarjeta: "No. tarjeta",
          numero_cuenta: "No. cuenta",
          clabe: "Clabe",
          bnombre: "Banco"
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
     * Obtener todos los bancos registrados
     */
    CargarDatosBancarios: function CargarDatosBancarios(empleado) {
      var _this = this;
      var PermisosCrud = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      // Asignar permisos crud
      if (PermisosCrud != null) this.PermisosCrud = PermisosCrud;
      this.isObtenerdatosbancariosempleado_loading = true;
      this.datosbancariosempleado = {
        empleado_id: empleado.id
      };
      this.empleado_activo = empleado.condicion;
      axios.get(this.url_datosbancariosempleado + "/obtener/" + empleado.id).then(function (res) {
        _this.isObtenerdatosbancariosempleado_loading = false;
        if (res.data.status) {
          _this.list_datosbancariosempleado = res.data.bancos;
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    /**
     * Abrir modal DatosBancariosEmpleado
     */
    AbrirModalDatosBancariosEmpleado: function AbrirModalDatosBancariosEmpleado(nuevo) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.CargarBancos();
      this.ver_modal_datosbancariosempleado = true;
      if (nuevo) {
        this.tituloModal_datosbancariosempleado = "Registrar Datos bancarios";
        this.tipoAccion_datosbancariosempleado = 1;
      } else {
        this.tituloModal_datosbancariosempleado = "Actualizar Datos bancarios";
        this.tipoAccion_datosbancariosempleado = 2;
        this.datosbancariosempleado = _objectSpread({}, data);
      }
    },
    /**
     * Obtiene los catalogos de bancos
     */
    CargarBancos: function CargarBancos() {
      var _this2 = this;
      axios.get("rh/catalogos/bancos").then(function (res) {
        if (res.data.status) {
          _this2.list_bancos_catalogo = res.data.bancos;
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    /**
     * Registrar DatosBancariosEmpleado
     */
    RegistrarDatosBancariosEmpleado: function RegistrarDatosBancariosEmpleado(nuevo) {
      var _this3 = this;
      this.$validator.validate().then(function (isValid) {
        if (!isValid) return;
        var empleado_id = _this3.datosbancariosempleado.empleado_id;
        var data = new FormData();
        if (!nuevo) data.append("id", _this3.datosbancariosempleado.id);
        data.append("numero_tarjeta", _this3.datosbancariosempleado.numero_tarjeta);
        data.append("empleado_id", empleado_id);
        data.append("numero_cuenta", _this3.datosbancariosempleado.numero_cuenta);
        data.append("clabe", _this3.datosbancariosempleado.clabe);
        data.append("banco_id", _this3.datosbancariosempleado.banco_id);
        _this3.isGuardardatosbancariosempleado_loading = true;
        axios.post(_this3.url_datosbancariosempleado + "/guardar", data).then(function (res) {
          _this3.isGuardardatosbancariosempleado_loading = false;
          if (res.data.status) {
            toastr.success("Guardado correctamente");
            _this3.CerrarModalDatosBancariosEmpleado();
            _this3.CargarDatosBancarios({
              id: empleado_id,
              condicion: _this3.empleado_activo
            });
          } else {
            toastr.error(res.data.mensaje);
          }
        });
      });
    },
    /**
     * Cerrar modal
     */
    CerrarModalDatosBancariosEmpleado: function CerrarModalDatosBancariosEmpleado() {
      this.ver_modal_datosbancariosempleado = false;
      this.datosbancariosempleado = {};
    },
    /**
     * Eliminar banco
     */
    EliminarBanco: function EliminarBanco(banco) {
      var _this4 = this;
      this.isObtenerdatosbancariosempleado_loading = true;
      axios.post(this.url_datosbancariosempleado + "/eliminar", {
        banco_id: banco.id,
        empleado_id: banco.empleado_id
      }).then(function (res) {
        _this4.isObtenerdatosbancariosempleado_loading = true;
        if (res.data.status) {
          toastr.success("Eliminado correctamente");
          _this4.CargarDatosBancarios({
            id: banco.empleado_id,
            condicion: _this4.empleado_activo
          });
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/DatosBancarios.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/DatosBancarios.vue?vue&type=script&lang=js ***!
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
      PermisosCRUD: {},
      isObtenerEmpleados_loading: false,
      tipo_card: 1,
      url: "rh/empleados/datosbancarios",
      columns_empleados: ["nombre", "ap_paterno", "ap_materno", "banco", "cuenta", "clabe", "tarjeta"],
      list_empleados: [],
      options_empleados: {
        headings: {
          "nombre": "Nombre",
          "ap_paterno": "Apellido P.",
          "ap_materno": "Apellido M."
        },
        perPage: 20,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        filterByColumn: true,
        texts: config.texts
      }
    };
  },
  methods: {
    ObtenerEmpleados: function ObtenerEmpleados() {
      var _this = this;
      this.isObtenerEmpleados_loading = true;
      axios.get(this.url + "/obtener").then(function (res) {
        _this.isObtenerEmpleados_loading = false;
        if (res.data.status) {
          _this.list_empleados = res.data.empleados;
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    Descargar: function Descargar() {
      window.open(this.url + "/descargar");
    }
  },
  mounted: function mounted() {
    this.PermisosCRUD = _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].getCRUD(this.$route.path);
    this.ObtenerEmpleados();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/Direccion-Empleado.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/Direccion-Empleado.vue?vue&type=script&lang=js ***!
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
      url: '/direccionempleado',
      empleado: null,
      deshabilitado: null,
      isLoadingDetalle: false,
      empleado_activo: false,
      direccione: {
        id: 0,
        codigo_postal: 0,
        numero_exterior: 0,
        numero_interior: 0,
        localidad: '',
        entidad_federativa: '',
        calle: '',
        entre_que_calles: '',
        tipo_avenida: '',
        colonia: '',
        municipio: '',
        condicion: 0,
        empleado_id: 0
      },
      modal: 0,
      tituloModal: '',
      tipoAccion: 0,
      disabled: 0,
      isLoading: false,
      columnsdireccion: ['id', 'codigo_postal', 'numero_exterior', 'numero_interior', 'localidad', 'entidad_federativa', 'calle', 'entre_que_calles', 'tipo_avenida', 'colonia', 'municipio', 'condicion'],
      tableDatadireccion: [],
      optionsdireccion: {
        headings: {
          id: 'Acciones',
          nombre: 'nombre',
          codigo_postal: 'CP',
          numero_exterior: '# Exterior',
          numero_interior: '# Interior',
          localidad: 'Localidad',
          entidad_federativa: 'Entidad Federativa',
          calle: 'Calle',
          entre_que_calles: 'Entre que calles',
          tipo_avenida: 'Tipo de Avenida',
          colonia: 'Colonia',
          municipio: 'Municipio',
          condicion: 'Condición'
        },
        perPage: 10,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        sortable: ['codigo_postal', 'numero_exterior', 'numero_interior', 'localidad', 'entidad_federativa', 'calle', 'entre_que_calles', 'tipo_avenida', 'colonia', 'municipio', 'condicion'],
        filterable: ['entidad_federativa', 'municipio'],
        filterByColumn: true,
        listColumns: {
          condicion: config.columnCondicion
        },
        texts: config.texts
      }
    };
  },
  computed: {},
  methods: {
    actdesact: function actdesact(id, tipo) {
      var _this = this;
      if (tipo) {
        this.swal_titulo = 'Esta seguro de activar esta dirección?';
        this.swal_tle = 'Activado';
        this.swal_msg = 'El registro ha sido activado con éxito.';
      } else {
        this.swal_titulo = 'Esta seguro de desactivar esta dirección?';
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
            swal(me.swal_tle, me.swal_msg, 'success');
            me.cargarDirecciones(me.empleado);
          })["catch"](function (error) {
            console.log(error);
          });
        } else if (result.dismiss === swal.DismissReason.cancel) {}
      });
    },
    guardarDirecciones: function guardarDirecciones(nuevo) {
      var _this2 = this;
      this.$validator.validate().then(function (result) {
        if (result) {
          _this2.isLoading = true;
          var me = _this2;
          axios({
            method: nuevo ? 'POST' : 'PUT',
            url: nuevo ? me.url : me.url + '/' + _this2.direccione.id,
            data: {
              'id': _this2.direccione.id,
              'codigo_postal': _this2.direccione.codigo_postal,
              'numero_exterior': _this2.direccione.numero_exterior,
              'numero_interior': _this2.direccione.numero_interior,
              'localidad': _this2.direccione.localidad,
              'entidad_federativa': _this2.direccione.entidad_federativa,
              'calle': _this2.direccione.calle,
              'entre_que_calles': _this2.direccione.entre_que_calles,
              'tipo_avenida': _this2.direccione.tipo_avenida,
              'colonia': _this2.direccione.colonia,
              'municipio': _this2.direccione.municipio,
              'empleado_id': _this2.direccione.empleado_id
            }
          }).then(function (response) {
            me.isLoading = false;
            if (response.data.status) {
              me.cerrarModal();
              me.cargarDirecciones(me.empleado);
              if (!nuevo) {
                toastr.success('Dirección Actualizada Correctamente');
              } else {
                toastr.success('Dirección Registrado Correctamente');
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
      _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.descuento);
    },
    abrirModal: function abrirModal(modelo, accion, id) {
      var data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
      switch (modelo) {
        case "direccion":
          {
            switch (accion) {
              case 'registrar':
                {
                  this.modal = 1;
                  this.tituloModal = 'Registrar domicilio del empleado';
                  _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.direccione);
                  this.direccione.empleado_id = id;
                  this.tipoAccion = 1;
                  break;
                }
              case 'actualizar':
                {
                  this.modal = 1;
                  this.tituloModal = 'Actualizar dirección';
                  this.direccione.id = data['id'];
                  this.tipoAccion = 2;
                  this.direccione.codigo_postal = data['codigo_postal'];
                  this.direccione.numero_exterior = data['numero_exterior'];
                  this.direccione.numero_interior = data['numero_interior'];
                  this.direccione.localidad = data['localidad'];
                  this.direccione.entidad_federativa = data['entidad_federativa'];
                  this.direccione.calle = data['calle'];
                  this.direccione.entre_que_calles = data['entre_que_calles'];
                  this.direccione.tipo_avenida = data['tipo_avenida'];
                  this.direccione.entidad_federativa = data['entidad_federativa'];
                  this.direccione.colonia = data['colonia'];
                  this.direccione.municipio = data['municipio'];
                  break;
                }
            }
          }
      }
    },
    cargarDirecciones: function cargarDirecciones() {
      var _this3 = this;
      var dataEmpleado = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var id = arguments.length > 1 ? arguments[1] : undefined;
      this.detalle = true;
      this.empleado_activo = dataEmpleado.condicion;
      this.isLoadingDetalle = true;
      var me = this;
      this.empleado = dataEmpleado;
      axios.get(me.url + '/' + dataEmpleado.id + '/' + 'direccionempleado').then(function (response) {
        var contador = response.data.length;
        if (contador >= 1) {
          _this3.deshabilitado = 1;
        } else {
          _this3.deshabilitado = 0;
        }
        me.tableDatadireccion = response.data;
        me.isLoadingDetalle = false;
        me.direccione.id = response.data['id'];
        me.direccione.empleado_id = response.data['empleado_id'];
        me.direccione.codigo_postal = response.data['codigo_postal'];
        me.direccione.numero_exterior = response.data['numero_exterior'];
        me.direccione.numero_interior = response.data['numero_interior'];
        me.direccione.localidad = response.data['localidad'];
        me.direccione.entidad_federativa = response.data['entidad_federativa'];
        me.direccione.calle = response.data['calle'];
        me.direccione.entre_que_calles = response.data['entre_que_calles'];
        me.direccione.tipo_avenida = response.data['tipo_avenida'];
        me.direccione.colonia = response.data['colonia'];
        me.direccione.municipio = response.data['municipio'];
      })["catch"](function (error) {
        console.log(error);
      });
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/Empleados.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/Empleados.vue?vue&type=script&lang=js ***!
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
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

var config = (__webpack_require__(/*! ../../Herramientas/config-vuetables-client */ "./resources/assets/js/components/Herramientas/config-vuetables-client.js").call)(undefined);
var Contratos = function Contratos(r) {
  return __webpack_require__.e(/*! require.ensure | rh */ "rh").then((function () {
    return r(__webpack_require__(/*! ./Contratos2.vue */ "./resources/assets/js/components/RH/Empleados/Contratos2.vue"));
  }).bind(null, __webpack_require__))['catch'](__webpack_require__.oe);
};
var Familiares = function Familiares(r) {
  return __webpack_require__.e(/*! require.ensure | rh */ "rh").then((function () {
    return r(__webpack_require__(/*! ./../Familiares/Familiares.vue */ "./resources/assets/js/components/RH/Familiares/Familiares.vue"));
  }).bind(null, __webpack_require__))['catch'](__webpack_require__.oe);
};
var Beneficiarios = function Beneficiarios(r) {
  return __webpack_require__.e(/*! require.ensure | rh */ "rh").then((function () {
    return r(__webpack_require__(/*! ./../Beneficiarios/Beneficiarios.vue */ "./resources/assets/js/components/RH/Beneficiarios/Beneficiarios.vue"));
  }).bind(null, __webpack_require__))['catch'](__webpack_require__.oe);
};
var Contacto = function Contacto(r) {
  return __webpack_require__.e(/*! require.ensure | rh */ "rh").then((function () {
    return r(__webpack_require__(/*! ./Contactos.vue */ "./resources/assets/js/components/RH/Empleados/Contactos.vue"));
  }).bind(null, __webpack_require__))['catch'](__webpack_require__.oe);
};
var DatosBancarios = function DatosBancarios(r) {
  return __webpack_require__.e(/*! require.ensure | rh */ "rh").then((function () {
    return r(__webpack_require__(/*! ./Datos-ban-emp.vue */ "./resources/assets/js/components/RH/Empleados/Datos-ban-emp.vue"));
  }).bind(null, __webpack_require__))['catch'](__webpack_require__.oe);
};
var Expedientes = function Expedientes(r) {
  return __webpack_require__.e(/*! require.ensure | rh */ "rh").then((function () {
    return r(__webpack_require__(/*! ./Expedientes.vue */ "./resources/assets/js/components/RH/Empleados/Expedientes.vue"));
  }).bind(null, __webpack_require__))['catch'](__webpack_require__.oe);
};
var Alta = function Alta(r) {
  return __webpack_require__.e(/*! require.ensure | rh */ "rh").then((function () {
    return r(__webpack_require__(/*! ./Alta.vue */ "./resources/assets/js/components/RH/Empleados/Alta.vue"));
  }).bind(null, __webpack_require__))['catch'](__webpack_require__.oe);
};
var Direccion = function Direccion(r) {
  return __webpack_require__.e(/*! require.ensure | rh */ "rh").then((function () {
    return r(__webpack_require__(/*! ./Direccion-Empleado.vue */ "./resources/assets/js/components/RH/Empleados/Direccion-Empleado.vue"));
  }).bind(null, __webpack_require__))['catch'](__webpack_require__.oe);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    "contratos": Contratos,
    "familiares": Familiares,
    "contacto": Contacto,
    "datosbancarios": DatosBancarios,
    "expedientes": Expedientes,
    "alta": Alta,
    "direccion": Direccion,
    "beneficiarios": Beneficiarios
  },
  data: function data() {
    return {
      PermisosCRUD: {},
      isObtenerEmpleados_loading: false,
      tipo_card: 1,
      url: "rh/empleados",
      nombre_empleado: "",
      empleado: {},
      tipoAccion: 0,
      columns_empleados: ["id", "nombre", "ap_paterno", "ap_materno", "c_inicio", "c_fin", "c_condicion", "id_checador", "fech_alta_imss", "updated_at", "condicion"],
      list_empleados: [],
      options_empleados: {
        headings: {
          "id": "Acciones",
          "nombre": "Nombre",
          "ap_paterno": "Apellido Paterno",
          "ap_materno": "Apellido Materno",
          "fech_alta_imss": "Alta IMSS",
          "c_inicio": "Inicio",
          "c_fin": "Fin",
          "c_condicion": "Contrato",
          "condicion": "Estado",
          "id_checador": "Empresa",
          "updated_at": "Ultima Act."
        },
        perPage: 10,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        filterByColumn: true,
        listColumns: {
          "condicion": [{
            id: 1,
            text: "ACTIVO"
          }, {
            id: 0,
            text: "DADO DE BAJA"
          }],
          "sexo": [{
            id: 1,
            text: "MASCULINO"
          }, {
            id: 0,
            text: "FEMENINO"
          }, {
            id: null,
            text: "SIN DATO"
          }],
          "id_checador": [{
            id: 1,
            text: "Conserflow Semanal"
          }, {
            id: 2,
            text: "Conserflow Quincenal"
          }, {
            id: 3,
            text: "CSCT Semanal"
          }, {
            id: 4,
            text: "CSCT Quincenal"
          }]
        },
        texts: config.texts
      },
      list_historial: [],
      isHistorial_loading: false,
      ver_modal_historial: false
    };
  },
  methods: _defineProperty({
    /**
     * Mostrar card para registro/actualización del empleado
     * @nuevo bool Registro o actualización
     * @empleado Object Datos del empleado
     * @reciente bool Si es recien creado o ya existe en DB
     */
    AbrirModalEmpleado: function AbrirModalEmpleado() {
      var nuevo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var empleado = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var reciente = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      this.tipo_card = 2;
      var childAlta = this.$refs.alta;
      if (nuevo) {
        this.nombre_empleado = " Registrar empleado";
        this.tipoAccion = 1;
        this.empleado = {};
      } else {
        this.nombre_empleado = "".concat(empleado.nombre, " ").concat(empleado.ap_paterno, " ").concat(empleado.ap_materno);
        this.tipoAccion = 2;
        this.empleado = empleado;
        childAlta.CargarEmpleado(empleado, this.PermisosCRUD, reciente);
        this.VerCardsDetalles();
      }
    },
    /**
     * Descargar formato de alta del empleado
     */
    FormatoAlta: function FormatoAlta(empleado) {
      window.open("".concat(this.url, "/formatoalta/").concat(empleado.id));
    },
    /**
     * Generar el código QR
     */
    DescargarQR: function DescargarQR(empleado_id) {
      window.open(this.url + "/qr/" + empleado_id, "_blank");
    },
    /**
     * Mostrar las cards de los detalles del empleado
     */
    VerCardsDetalles: function VerCardsDetalles() {
      var childContratos = this.$refs.contratos;
      childContratos.VerContratosEmpleado(this.empleado, this.PermisosCRUD);
      var childContacto = this.$refs.contacto;
      childContacto.CargarContacto(this.empleado, this.PermisosCRUD);
      var childDatosBan = this.$refs.datosbancarios;
      childDatosBan.CargarDatosBancarios(this.empleado, this.PermisosCRUD);
      var childFamiliares = this.$refs.familiares;
      childFamiliares.CargarFamiliares(this.empleado);
      var childExpedientes = this.$refs.expedientes;
      childExpedientes.CargarExpediente(this.empleado);
      // TODO:
      var childDirecciones = this.$refs.direccion;
      childDirecciones.cargarDirecciones(this.empleado);
      // TODO:
      var childBeneficiarios = this.$refs.beneficiarios;
      childBeneficiarios.cargarbeneficiario(this.empleado);
    },
    /**
     * Obtener todos los empleados registrados
     */
    ObtenerEmpleados: function ObtenerEmpleados() {
      var _this = this;
      this.isObtenerEmpleados_loading = true;
      axios.get(this.url).then(function (res) {
        _this.isObtenerEmpleados_loading = false;
        if (res.data.status) {
          _this.list_empleados = res.data.empleados;
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    /**
     * Activar o desactivar el empleado
     */
    ActivarDesactivar: function ActivarDesactivar(id, condicion) {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var mensaje, fecha_baja, resp, hoy, fecha_hoy, fecha_fin;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              mensaje = condicion ? "Activado correctamente" : "Deactivado correctamente";
              fecha_baja = "";
              if (condicion) {
                _context.n = 4;
                break;
              }
              _context.n = 1;
              return Swal.fire({
                title: "Fecha de Baja",
                html: "<input id='txtFechaBaja' type='date' class='form-control'>",
                showCancelButton: true,
                confirmButtonText: "Aceptar",
                cancellButtonText: "Aceptar"
              });
            case 1:
              resp = _context.v;
              if (!resp.value) {
                _context.n = 3;
                break;
              }
              fecha_baja = $("#txtFechaBaja").val();
              hoy = new Date();
              fecha_hoy = new Date();
              fecha_fin = new Date(fecha_baja);
              if (!(fecha_fin > fecha_hoy)) {
                _context.n = 2;
                break;
              }
              toastr.warning("Fecha fin no puede ser mayor a hoy");
              return _context.a(2);
            case 2:
              _context.n = 4;
              break;
            case 3:
              return _context.a(2);
            case 4:
              // Enviar
              axios.post(_this2.url + "/actdesact/", {
                id: id,
                condicion: condicion,
                fecha_baja: fecha_baja
              }).then(function (res) {
                if (res.data.status) {
                  toastr.success(mensaje);
                  _this2.ObtenerEmpleados();
                } else toastr.error(res.data.mensaje);
              });
            case 5:
              return _context.a(2);
          }
        }, _callee);
      }))();
    },
    /**
     * Cerrar modal de registro de empleados
     */
    Regresar: function Regresar() {
      this.tipo_card = 1;
      this.empleado = {};
      var childAlta = this.$refs.alta;
      childAlta.Limpiar();
    },
    /**
     * Descarga el reporte general de los empleados
     */
    DescargarEmpleados: function DescargarEmpleados() {
      window.open("rh/empleados/reportegeneral");
    },
    /**
     * Asignar un checador al empleado seleccionado
     */
    AsignarChecador: function AsignarChecador(empleado) {
      var x = this;
      Swal.fire({
        title: "Asignar checador",
        input: "select",
        inputOptions: {
          "1": "Conserflow - Semanal",
          "2": "Conserflow - Quincenal",
          "3": "CSCT - Semanal",
          "4": "CSCT - Quincenal"
        },
        showCancelButton: true
      }).then(function (result) {
        if (result.value) {
          if (result.value == null) return;
          if (result.value != "") {
            axios({
              method: "POST",
              url: x.url + "/asignarchecador",
              data: {
                id_checador: result.value,
                empleado_id: empleado.id
              }
            }).then(function (res) {
              if (res.data.status) {
                toastr.success("", "Guardado correctamente");
                x.ObtenerEmpleados();
              } else {
                toastr.error("", "Error");
              }
            });
          }
        }
      });
    },
    /**
     * Muestra el historial de las moficicaciones del empleado
     */
    VerHistorial: function VerHistorial(empleado) {
      var _this3 = this;
      this.nombre_empleado = "".concat(empleado.nombre, " ").concat(empleado.ap_paterno, " ").concat(empleado.ap_materno);
      this.ver_modal_historial = true;
      this.isHistorial_loading = true;
      axios.get("rh/empleado/obtenerhistorial/" + empleado.id).then(function (res) {
        _this3.isHistorial_loading = true;
        if (res.data.status) {
          _this3.list_historial = res.data.historial;
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    CerrarHistorial: function CerrarHistorial() {
      this.list_historial = [];
      this.ver_modal_historial = false;
    },
    RegresarEmpleados: function RegresarEmpleados(emp) {
      this.ObtenerEmpleados();
      this.AbrirModalEmpleado(false, emp, true);
    }
  }, "DescargarEmpleados", function DescargarEmpleados() {
    window.open("rh/empleados/reportegeneral");
  }),
  mounted: function mounted() {
    this.PermisosCRUD = _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].getCRUD(this.$route.path);
    this.ObtenerEmpleados();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/Expedientes.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/Expedientes.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      url: "rh/expediente",
      empleado_activo: false,
      expediente: {
        id: 0,
        solicitud: 0,
        evaluacion_psicolaboral: 0,
        evaluacion_hab_tecnicas: 0,
        foto: 0,
        acta_nacimiento: 0,
        credencial_elector: 0,
        curp: 0,
        rfc: 0,
        nss_imss: 0,
        comprobante_domicilio: 0,
        cartilla_servicio_militar: 0,
        licencia_manejo: 0,
        acta_matrimonio: 0,
        carta_infonavit: 0,
        certificado_medico: 0,
        carta_no_enfermedades: 0,
        vales_resguardo: 0,
        comprobante_estudios: 0,
        carta_recomendacion: 0,
        retencion_credito_infonavit: 0,
        folio: "",
        empleado_id: 0
      },
      isExpedienteLoading: false
    };
  },
  methods: {
    /**
     * Guarda el expediente 
     */
    GuardarExpediente: function GuardarExpediente() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var isValid, data;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.n = 1;
              return _this.$validator.validate();
            case 1:
              isValid = _context.v;
              if (isValid) {
                _context.n = 2;
                break;
              }
              return _context.a(2);
            case 2:
              _this.isExpedienteLoading = true;
              data = new FormData();
              data.append("id", _this.expediente.id);
              data.append("folio", _this.expediente.folio);
              data.append("empleado_id", _this.expediente.empleado_id);
              data.append("solicitud", _this.expediente.solicitud ? 1 : 0);
              data.append("evaluacion_psicolaboral", _this.expediente.evaluacion_psicolaboral ? 1 : 0);
              data.append("evaluacion_hab_tecnicas", _this.expediente.evaluacion_hab_tecnicas ? 1 : 0);
              data.append("foto", _this.expediente.foto ? 1 : 0);
              data.append("acta_nacimiento", _this.expediente.acta_nacimiento ? 1 : 0);
              data.append("credencial_elector", _this.expediente.credencial_elector ? 1 : 0);
              data.append("curp", _this.expediente.curp ? 1 : 0);
              data.append("rfc", _this.expediente.rfc ? 1 : 0);
              data.append("nss_imss", _this.expediente.nss_imss ? 1 : 0);
              data.append("comprobante_domicilio", _this.expediente.comprobante_domicilio ? 1 : 0);
              data.append("cartilla_servicio_militar", _this.expediente.cartilla_servicio_militar ? 1 : 0);
              data.append("licencia_manejo", _this.expediente.licencia_manejo ? 1 : 0);
              data.append("acta_matrimonio", _this.expediente.acta_matrimonio ? 1 : 0);
              data.append("carta_infonavit", _this.expediente.carta_infonavit ? 1 : 0);
              data.append("certificado_medico", _this.expediente.certificado_medico ? 1 : 0);
              data.append("carta_no_enfermedades", _this.expediente.carta_no_enfermedades ? 1 : 0);
              data.append("vales_resguardo", _this.expediente.vales_resguardo ? 1 : 0);
              data.append("comprobante_estudios", _this.expediente.comprobante_estudios ? 1 : 0);
              data.append("carta_recomendacion", _this.expediente.carta_recomendacion ? 1 : 0);
              data.append("retencion_credito_infonavit", _this.expediente.retencion_credito_infonavit ? 1 : 0);
              axios.post(_this.url + "/guardar", data).then(function (res) {
                _this.isExpedienteLoading = false;
                if (res.data.status) {
                  toastr.success("Expediente Guardado Correctamente");
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
    /**
     * Obtiene el expediente del empleado seleccionado
     */
    CargarExpediente: function CargarExpediente() {
      var _this2 = this;
      var dataEmpleado = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      this.empleado_activo = dataEmpleado.condicion;
      this.isExpedienteLoading = true;
      axios.get("rh/expediente/obtener/" + dataEmpleado.id).then(function (res) {
        _this2.isExpedienteLoading = false;
        if (res.data.status) {
          _this2.expediente = res.data.expediente;
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/Resguardos.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/Resguardos.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************/
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
      tipo_card: 1,
      isEquiposLoading: true,
      // Tabla empleados
      columns_empleados: ['id', 'nombre'],
      list_asd: [],
      options_empleados: {
        headings: {
          id: 'Acciones',
          empleado: 'Empleado',
          estado: "Estado"
        },
        // Headings,
        perPage: 10,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        sortable: ['id', 'nombre'],
        filterable: ['id', 'nombre'],
        filterByColumn: true,
        texts: config.texts
      },
      //options 
      // Modal
      list_empleados: [],
      titulo_modal_asd: '',
      tipoAccion_modal_asd: 0,
      empleado: {},
      // Card 2. Equipos
      columns_equipos: ["fecha", "cantidad", "descripcion", "acesorios"],
      list_equipos1: [],
      list_seguridad: [],
      list_almacen: [],
      options_equipos: {
        headings: {
          trm_id: 'Acciones'
        },
        // Headings,
        perPage: 10,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        filterByColumn: true,
        texts: config.texts
      } //options 
      // Modal
    }; // return
  },
  //data
  computed: {},
  methods: {
    /**
     * Obtiene todos los empleados
     */
    ObtenerEmpleados: function ObtenerEmpleados() {
      var _this = this;
      axios.get("/ti/resguardo/empleados").then(function (res) {
        if (res.data.status) {
          _this.list_empleados = res.data.empleados;
          console.error(_this.list_empleados);
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    VerResguardos: function VerResguardos(empleado) {
      var _this2 = this;
      this.tipo_card = 2; // Cambiar card
      this.isEquiposLoading = true;
      this.empleado = empleado;
      this.list_equipos1 = [];
      axios.get("/rh/resguardos/obtener/" + empleado.id).then(function (res) {
        _this2.isEquiposLoading = false;
        if (res.data.status) {
          _this2.list_equipos1 = res.data.resguardos[0]; // TI
          _this2.list_seguridad = res.data.resguardos[1]; // Seguridad
          _this2.list_almacen = res.data.resguardos[2]; //Almacen
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    Regresar: function Regresar() {
      this.tipo_card = 1;
    }
  },
  // Fin metodos
  mounted: function mounted() {
    this.ObtenerEmpleados();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/Sueldo2.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/Sueldo2.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      nuevo: true,
      contrato_id: 0,
      nomina_id: 0,
      salario_neto: 0,
      tipo_nomina: "",
      desabilitado: 0,
      isSueldos_loading: false,
      sueldo: {
        id: 0,
        infonavit: 0,
        sueldo_diario_integral: 0,
        sueldo_mensual: 0,
        viaticos_mensuales: 0,
        sueldo_diario_neto: 0,
        contrato_id: 0,
        sueldo_diario_real: 0,
        fecha_act: ""
      },
      list_sueldos: []
    };
  },
  computed: {},
  methods: {
    /**
     * Obtener los sueldos del contrato seleccionado
     * @nuevo bool Nuevo contrato o actualización
     * @contrato_id int Id del contrato
     * @nomina_id int Id de tipo nomina
     * @salario_neto Int Salario neto (S|Q)
     */
    CargarSueldos: function CargarSueldos(nuevo, contrato_id, nomina_id, salario_neto) {
      var _this = this;
      this.isSueldos_loading;
      this.nuevo = nuevo;
      this.nomina_id = nomina_id;
      this.salario_neto = salario_neto;
      this.contrato_id = contrato_id;
      this.tipo_nomina = nomina_id == 1 ? "Semanal" : "Quincenal";
      if (nuevo) {
        this.list_sueldos = [];
      } else {
        axios.get("rh/sueldos/obtener/" + contrato_id).then(function (res) {
          if (res.data.status) {
            _this.list_sueldos = res.data.sueldos;
          } else {
            toastr.error(res.data.mensaje);
          }
        });
      }
    },
    /**
     * Ingresar un nuevo salario
     */
    NuevoSalario: function NuevoSalario() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var dias, aux_diario, diario, val, data;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              dias = _this2.nomina_id == 1 ? 7 : 15;
              aux_diario = _this2.salario_neto / dias;
              diario = aux_diario.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0];
              _context.n = 1;
              return Swal.fire({
                title: "Registar salario",
                html: "<span class='mt-5 mb-3 font-weight-bold h5'>Salario Diario:\n                </span> &nbsp;&nbsp;$ ".concat(Intl.NumberFormat().format(diario), "\n                        <br><span class='font-weight-bold h5'>Salario ").concat(_this2.tipo_nomina, "\n                        </span>&nbsp;&nbsp; $ ").concat(Intl.NumberFormat().format(_this2.salario_neto)),
                input: "text",
                confirmButtonText: "Guardar",
                cancelButtonText: "Cancelar",
                inputLabel: "Cantidad",
                inputPlaceholder: "Ingrese el SDI",
                showCancelButton: true,
                inputValidator: function inputValidator(value) {
                  if (!value) {
                    return "Escriba una cantidad";
                  }
                  if (value == 0) {
                    return "Ingrese una cantidad mayor a 0";
                  }
                }
              });
            case 1:
              val = _context.v;
              if (!(val == null)) {
                _context.n = 2;
                break;
              }
              return _context.a(2);
            case 2:
              if (!(val.value == null)) {
                _context.n = 3;
                break;
              }
              return _context.a(2);
            case 3:
              // asd
              data = new FormData();
              data.append("contrato_id", _this2.contrato_id);
              // SDI
              data.append("sueldo_diario_integral", val.value);
              data.append("sueldo_diario_neto", diario);
              data.append("sueldo_diario_real", _this2.salario_neto);
              _this2.isSueldos_loading = true;
              axios.post("rh/sueldos/guardar", data).then(function (res) {
                _this2.isSueldos_loading = false;
                if (res.data.status) {
                  _this2.sueldo = {};
                  _this2.CargarSueldos(0, _this2.contrato_id, _this2.nomina_id, _this2.salario_neto);
                  toastr.success("Sueldo Registrado Correctamente");
                } else {
                  toastr.error(res.data.mensaje);
                }
              });
            case 4:
              return _context.a(2);
          }
        }, _callee);
      }))();
    },
    /**
     * Actualizar el SDI
     */
    ActualizarSDI: function ActualizarSDI(id) {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var val, data;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              _context2.n = 1;
              return Swal.fire({
                title: "Actualizar SDI",
                input: "text",
                confirmButtonText: "Guardar",
                cancelButtonText: "Cancelar",
                inputLabel: "Cantidad",
                inputPlaceholder: "Ingrese el SDI",
                showCancelButton: true,
                inputValidator: function inputValidator(value) {
                  if (!value) {
                    return "Escriba una cantidad";
                  }
                  if (value == 0) {
                    return "Ingrese una cantidad mayor a 0";
                  }
                }
              });
            case 1:
              val = _context2.v;
              if (!(val == null)) {
                _context2.n = 2;
                break;
              }
              return _context2.a(2);
            case 2:
              if (!(val.value == null)) {
                _context2.n = 3;
                break;
              }
              return _context2.a(2);
            case 3:
              data = new FormData();
              data.append("id", id); // ID del sueldo
              data.append("sueldo_diario_integral", val.value);
              axios.post("rh/sueldos/actualizarsdi", data).then(function (res) {
                if (res.data.status) {
                  _this3.sueldo = {};
                  _this3.CargarSueldos(0, _this3.contrato_id, _this3.nomina_id, _this3.salario_neto);
                  toastr.success("Sueldo Actualizado Correctamente");
                } else toastr.error(res.data.mensaje);
              });
            case 4:
              return _context2.a(2);
          }
        }, _callee2);
      }))();
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/Vacaciones.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/Vacaciones.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************/
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
var config = (__webpack_require__(/*! ../../Herramientas/config-vuetables-client */ "./resources/assets/js/components/Herramientas/config-vuetables-client.js").call)(undefined);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      //// VacaionesEmpleado
      anio: 2024,
      url_vacaionesempleado: "rh/vacacionesempleado",
      tipoAccion_vacaionesempleado: 1,
      tipoCardVacaionesEmpleado: 1,
      ver_modal_vacaionesempleado: false,
      tituloModal_vacaionesempleado: "",
      vacaionesempleado_id: 0,
      isGuardarvacaionesempleado_loading: false,
      isObtenervacaionesempleado_loading: false,
      columns_vacaionesempleado: ["id", "empleado", "puesto", "fecha_ingreso", "dias_ganados", "dias_tomados", "dias_disponibles"],
      list_vacaionesempleado: [],
      vacaionesempleado: {},
      options_vacaionesempleado: {
        headings: {
          id: "Acciones",
          Empleado: "Empleado"
        },
        perPage: 10,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        filterByColumn: true,
        texts: config.texts
      },
      list_periodos: [],
      periodo: {},
      valido: false,
      // Historial de vacaicones
      historial_vacaciones: [],
      historial_vacaciones_nombre: "",
      ver_modal_historial: 0,
      isHistorial_loading: false,
      // Reporte
      reporte: {}
    };
  },
  methods: {
    // Metodos
    /**
     * Obtener todos los empleados con los dias de vacaciones disponibles
     */
    ObtenerVacaionesEmpleado: function ObtenerVacaionesEmpleado() {
      var _this = this;
      this.isObtenervacaionesempleado_loading = true;
      axios.get("".concat(this.url_vacaionesempleado, "/obtener/").concat(this.anio)).then(function (res) {
        _this.isObtenervacaionesempleado_loading = false;
        if (res.data.status) {
          _this.list_vacaionesempleado = res.data.empleados;
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    /**
     * Abrir modal VacaionesEmpleado
     */
    AbrirModalVacaionesEmpleado: function AbrirModalVacaionesEmpleado() {
      var _this2 = this;
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.tituloModal_vacaionesempleado = "Registrar vacaciones";
      this.ver_modal_vacaionesempleado = true;
      this.vacaionesempleado = _objectSpread({}, data);
      axios.post(this.url_vacaionesempleado + "/periodos", {
        empleado_id: data.id
      }).then(function (res) {
        if (res.data.status) {
          _this2.list_periodos = res.data.periodos;
        } else toastr.error(res.data.mensaje);
      });
    },
    /**
     * Registrar VacaionesEmpleado
     */
    RegistrarVacaionesEmpleado: function RegistrarVacaionesEmpleado() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var isValid, hoy, fecha_inicio, fecha_fin, data;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              isValid = _this3.$validator.validate();
              if (isValid) {
                _context.n = 1;
                break;
              }
              return _context.a(2);
            case 1:
              if (!(_this3.vacaionesempleado.puesto == null)) {
                _context.n = 2;
                break;
              }
              toastr.warning("El puesto es requerido");
              return _context.a(2);
            case 2:
              if (_this3.valido) {
                _context.n = 3;
                break;
              }
              toastr.warning("Periodo no válido");
              return _context.a(2);
            case 3:
              // Validar fechas
              hoy = new Date();
              fecha_inicio = new Date(_this3.vacaionesempleado.fecha_inicio);
              fecha_fin = new Date(_this3.vacaionesempleado.fecha_fin);
              if (!(fecha_fin < fecha_inicio)) {
                _context.n = 4;
                break;
              }
              toastr.warning("Fecha fin no puede ser menor a la de inicio");
              return _context.a(2);
            case 4:
              data = new FormData();
              data.append("empleado_id", _this3.vacaionesempleado.empleado_id);
              data.append("fecha_inicio", _this3.vacaionesempleado.fecha_inicio);
              data.append("fecha_fin", _this3.vacaionesempleado.fecha_fin);
              data.append("contrato_id", _this3.vacaionesempleado.contrato_id);
              data.append("periodo", _this3.periodo.periodo);
              data.append("dias_a_tomar", _this3.vacaionesempleado.dias_a_tomar);
              _this3.isGuardarvacaionesempleado_loading = true;
              axios.post(_this3.url_vacaionesempleado + "/guardar", data).then(function (res) {
                _this3.isGuardarvacaionesempleado_loading = false;
                if (res.data.status) {
                  _this3.periodo = null;
                  _this3.list_periodos = [];
                  toastr.success("Guardado correctamente");
                  _this3.ObtenerVacaionesEmpleado();
                  _this3.CerrarModalVacaionesEmpleado();
                } else {
                  if (res.data.tipo == 2) {
                    Swal.fire("Error al registrar las vacaciones", res.data.mensaje, "error");
                  } else toastr.error(res.data.mensaje);
                }
              });
            case 5:
              return _context.a(2);
          }
        }, _callee);
      }))();
    },
    /**
     * Comprueba que los días a tomar no superen los días permitidos
     */
    ComprobarDias: function ComprobarDias() {
      var _this4 = this;
      this.valido = false;
      if (this.periodo == null) return;
      if (this.vacaionesempleado.dias_a_tomar == null) return;
      if (this.vacaionesempleado.dias_a_tomar > this.periodo.dias_disponibles) {
        toastr.warning("Días insuficientes");
        setTimeout(function () {
          _this4.vacaionesempleado.dias_a_tomar = 0;
        }, 1500);
      }
      this.valido = true;
    },
    /**
     * Cerrar modal
     */
    CerrarModalVacaionesEmpleado: function CerrarModalVacaionesEmpleado() {
      this.ver_modal_vacaionesempleado = false;
    },
    /**
     * Muestra todas las vacaiones tomadas del empleado
     */
    VerHistorial: function VerHistorial(emp) {
      var _this5 = this;
      this.ver_modal_historial = true;
      this.isHistorial_loading = true;
      this.historial_vacaciones_nombre = emp.empleado;
      axios.get("".concat(this.url_vacaionesempleado, "/historial/").concat(emp.id)).then(function (res) {
        _this5.isHistorial_loading = false;
        if (res.data.status) {
          _this5.historial_vacaciones = res.data.historial;
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    /**
     * Cerrar modal de historial
     */
    CerrarModalHistorial: function CerrarModalHistorial() {
      this.periodo = null;
      this.ver_modal_historial = false;
      this.historial_vacaciones = [];
      this.historial_vacaciones_nombre = "";
    },
    /**
     * Generar reporte
     */
    GenerarReporte: function GenerarReporte() {
      var data = "".concat(this.reporte.inicio, "&").concat(this.reporte.fin);
      window.open("".concat(this.url_vacaionesempleado, "/reporte/").concat(data), "_blak");
    }
  },
  mounted: function mounted() {
    this.ObtenerVacaionesEmpleado();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/FactoresRiesgo/FactoresRiesgo.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/FactoresRiesgo/FactoresRiesgo.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
      //// FactorRiesgo
      url_factorriesgo: "rh/factorriesgo",
      tipoAccion_factorriesgo: 1,
      PermisosCRUD: {},
      tipoCardFactorRiesgo: 1,
      ver_modal_factorriesgo: false,
      tituloModal_factorriesgo: "",
      factorriesgo_id: 0,
      isGuardarfactorriesgo_loading: false,
      isObtenerfactorriesgo_loading: false,
      columns_factorriesgo: ["id", "fecha", "nombre", "puesto", "documento"],
      list_factorriesgo: [],
      list_empleados: [],
      factorriesgo: {
        empleado: {}
      },
      options_factorriesgo: {
        headings: {
          id: "Acciones",
          nombre: "Empleado"
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
    ObtenerFactorRiesgo: function ObtenerFactorRiesgo() {
      var _this = this;
      this.isObtenerfactorriesgo_loading = true;
      axios.get(this.url_factorriesgo + "/obtener").then(function (res) {
        _this.isObtenerfactorriesgo_loading = false;
        if (res.data.status) {
          _this.list_factorriesgo = res.data.factorriesgo;
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    /**
     * Abrir modal FactorRiesgo
     */
    AbrirModalFactorRiesgo: function AbrirModalFactorRiesgo(nuevo) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.ver_modal_factorriesgo = true;
      if (nuevo) {
        this.tituloModal_factorriesgo = "Registrar Factores de Riesgo";
        this.tipoAccion_factorriesgo = 1;
        this.ObtenerEmpleados();
      }
    },
    /**
     * Obtener los empleados y el puesto
     */
    ObtenerEmpleados: function ObtenerEmpleados() {
      var _this2 = this;
      axios.get("rh/empleados/empleadospuesto/obtener").then(function (res) {
        if (res.data.status) {
          _this2.list_empleados = res.data.empleados;
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    /**
     * Registrar FactorRiesgo
     */
    RegistrarFactorRiesgo: function RegistrarFactorRiesgo(nuevo) {
      var _this3 = this;
      this.$validator.validate().then(function (isValid) {
        if (!isValid) return;
        var data = new FormData();
        data.append("empleado_id", _this3.factorriesgo.empleado.id);
        data.append("puesto_id", _this3.factorriesgo.empleado.puesto_id);
        data.append("fecha", _this3.factorriesgo.fecha);
        _this3.isGuardarfactorriesgo_loading = true;
        axios.post(_this3.url_factorriesgo + "/guardar", data).then(function (res) {
          _this3.isGuardarfactorriesgo_loading = false;
          if (res.data.status) {
            toastr.success("Guardado correctamente");
            _this3.ObtenerFactorRiesgo();
            _this3.CerrarModalFactorRiesgo();
          } else {
            toastr.error(res.data.mensaje);
          }
        });
      });
    },
    /**
     * Cerrar modal
     */
    CerrarModalFactorRiesgo: function CerrarModalFactorRiesgo() {
      this.ver_modal_factorriesgo = false;
      this.factorriesgo = {
        empleado: {}
      };
    },
    /**
     * Descargar la evidencia subida anteriormente
     */
    DescargarEvidencia: function DescargarEvidencia(id) {
      window.open(this.url_factorriesgo + "/descargarevidencia/" + id, "_blank");
    },
    /**
     * Subir la evidencia de los factores de riesgo
     */
    SubirDocumento: function SubirDocumento(id) {
      var _this4 = this;
      Swal.fire({
        title: "Cargar documento (PDF)",
        input: "file",
        confirmButtonText: "Cargar"
      }).then(function (result) {
        if (result.value == null) return;
        if (result.value.type === "application/pdf") {
          var data = new FormData();
          data.append("id", id);
          data.append("evidencia", result.value);
          axios.post(_this4.url_factorriesgo + "/subirdocumento", data).then(function (res) {
            if (res.data.status) {
              toastr.success("Documento subido correctamente");
              _this4.ObtenerFactorRiesgo();
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
    /**
     * Descargar el cuestionario de los factores de riesgo
     */
    DescargarCuestionario: function DescargarCuestionario(id) {
      window.open(this.url_factorriesgo + "/descargarcuestionario/" + id, "_blank");
    }
  },
  mounted: function mounted() {
    this.ObtenerFactorRiesgo();
    this.PermisosCRUD = _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].getCRUD(this.$route.path);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Familiares/Familiares.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Familiares/Familiares.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Herramientas/utilerias.js */ "./resources/assets/js/components/Herramientas/utilerias.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

var config = (__webpack_require__(/*! ../../Herramientas/config-vuetables-client */ "./resources/assets/js/components/Herramientas/config-vuetables-client.js").call)(undefined);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      url: "rh/empleados/familiares",
      empleado: null,
      empleado_activo: false,
      familiare: {
        nombre: "",
        parentesco: "",
        edad: 0,
        vive: "",
        condicion: 0,
        empleado_id: 0
      },
      listaTipoNomina: [],
      listadescuento: [],
      listaTipoDescuento: [],
      listaHorarios: [],
      listaProyectos: [],
      modal: 0,
      tituloModal: "",
      tipoAccion: 0,
      disabled: 0,
      isLoading: false,
      isGuardarFamiliares_loading: false,
      isObtenerFamiliares_loading: false,
      columns_familiares: ["id", "nombre", "parentesco", "edad"],
      list_familiares: [],
      options_familiares: {
        headings: {
          id: "Acciones",
          nombre: "Nombre Completo",
          parentesco: "Parentesco",
          edad: "Edad"
        },
        perPage: 10,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        filterByColumn: true,
        listColumns: {
          condicion: config.columnCondicion
        },
        texts: config.texts
      }
    };
  },
  computed: {},
  methods: {
    /**
     * Registra o actualiza el familiar ingresado
     */
    GuardarFamiliares: function GuardarFamiliares(nuevo) {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var isValid, data;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.n = 1;
              return _this.$validator.validate();
            case 1:
              isValid = _context.v;
              if (isValid) {
                _context.n = 2;
                break;
              }
              return _context.a(2);
            case 2:
              _this.isGuardarFamiliares_loading = true;
              data = new FormData();
              if (!nuevo) data.append("id", _this.familiare.id);
              data.append("nombre", _this.familiare.nombre);
              data.append("parentesco", _this.familiare.parentesco);
              data.append("edad", _this.familiare.edad);
              data.append("vive", 1);
              data.append("empleado_id", _this.familiare.empleado_id);
              axios.post(_this.url + "/guardar", data).then(function (res) {
                _this.isGuardarFamiliares_loading = false;
                if (res.data.status) {
                  toastr.success("Guardado correctamente");
                  _this.CargarFamiliares(_objectSpread({}, _this.empleado));
                  _this.CerrarModal();
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
    /**
     * Cerrar modal
     */
    CerrarModal: function CerrarModal() {
      this.modal = 0;
      this.tituloModal = "";
      _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.familiare);
    },
    /**
     * Abrir modal para registro/actualización
     */
    AbrirModalFamiliares: function AbrirModalFamiliares() {
      var nuevo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      this.modal = 1;
      if (nuevo) {
        this.familiare.parentesco = "PADRE";
        this.familiare.empleado_id = this.empleado.id;
        this.tituloModal = "Registrar Familiar";
        this.tipoAccion = 1;
      } else {
        this.tituloModal = "Actualizar Familiar";
        this.tipoAccion = 2;
        this.familiare = _objectSpread({}, data);
      }
    },
    /**
     * Obtener los familiares del empleado
     */
    CargarFamiliares: function CargarFamiliares() {
      var _this2 = this;
      var empleado = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      this.empleado = empleado;
      this.empleado_activo = empleado.condicion;
      this.isObtenerFamiliares_loading = true;
      axios.get(this.url + "/obtener/" + empleado.id).then(function (res) {
        if (res.data.status) {
          _this2.list_familiares = res.data.familiares;
          _this2.isObtenerFamiliares_loading = false;
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    /**
     * Eliminar familiar
     */
    EliminarFamiliar: function EliminarFamiliar(row) {
      var _this3 = this;
      this.isObtenerFamiliares_loading = true;
      var data = new FormData();
      data.append("id", row.id);
      axios.post(this.url + "/eliminar", data).then(function (res) {
        if (res.data.status) {
          toastr.success("Familiar eliminado correctamente");
          _this3.CargarFamiliares({
            id: _this3.empleado.id
          });
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Almacen/Existencias.vue?vue&type=template&id=f4f96362":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Almacen/Existencias.vue?vue&type=template&id=f4f96362 ***!
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
  return _c("main", [_c("vue-element-loading", {
    attrs: {
      active: _vm.isLoadingExistencias
    }
  }), _vm._v(" "), _vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "tab-content"
  }, [_c("div", {
    staticClass: "tab-pane active show",
    attrs: {
      id: "home",
      role: "tabpanel"
    }
  }, [_c("table", {
    staticClass: "table table-sm"
  }, [_vm._m(1), _vm._v(" "), _c("tbody", _vm._l(_vm.existencias, function (item) {
    return _c("tr", {
      key: item.id,
      attrs: {
        value: item.id
      }
    }, [_c("td", [_vm._v(_vm._s(item.almacen))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(item.stand))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(item.nivel))]), _vm._v(" "), _c("td", {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(item.cantidad))])]);
  }), 0), _vm._v(" "), _c("tfoot", [_c("th"), _vm._v(" "), _c("th"), _vm._v(" "), _c("th", [_vm._v("Total")]), _vm._v(" "), _c("th", {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.totalExistencias))])])])]), _vm._v(" "), _c("div", {
    staticClass: "tab-pane",
    attrs: {
      id: "profile",
      role: "tabpanel"
    }
  }, [_c("table", {
    staticClass: "table table-sm"
  }, [_vm._m(2), _vm._v(" "), _c("tbody", [_vm._l(_vm.lotes, function (item) {
    return _c("tr", {
      attrs: {
        value: item.id
      }
    }, [_c("td", [_vm._v(_vm._s(item.id))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(item.caducidad))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(item.comentario))]), _vm._v(" "), _c("td", {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(item.cantidad))])]);
  }), _vm._v(" "), _c("tr", [_c("td", [_vm._v(_vm._s(_vm.defectuoso_lote))]), _vm._v(" "), _c("td"), _vm._v(" "), _c("td", [_vm._v("Dañado o defectuoso")]), _vm._v(" "), _c("td", {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.defectuoso_total))])])], 2), _vm._v(" "), _c("tfoot", [_c("th"), _vm._v(" "), _c("th"), _vm._v(" "), _c("th", [_vm._v("Total")]), _vm._v(" "), _c("th", {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.totalLotes))])])])]), _vm._v(" "), _c("div", {
    staticClass: "tab-pane",
    attrs: {
      id: "messages",
      role: "tabpanel"
    }
  }, [_c("table", {
    staticClass: "table table-sm"
  }, [_vm._m(3), _vm._v(" "), _c("tbody", [_vm._l(_vm.stocks, function (item) {
    return _c("tr", {
      key: item.id,
      attrs: {
        value: item.id
      }
    }, [_c("td", [_vm._v(_vm._s(item.nombre))]), _vm._v(" "), _c("td", {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(item.cantidad))])]);
  }), _vm._v(" "), _c("tr", [_c("td", [_vm._v("Defectuos o dañado")]), _vm._v(" "), _c("td", {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.defectuoso_total))])])], 2), _vm._v(" "), _c("tfoot", [_c("th", [_vm._v("Total")]), _vm._v(" "), _c("th", {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.totalStocks))])])])])])], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("ul", {
    staticClass: "nav nav-tabs",
    attrs: {
      role: "tablist"
    }
  }, [_c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link active show",
    attrs: {
      "data-toggle": "tab",
      href: "#home",
      role: "tab",
      "aria-controls": "home",
      "aria-selected": "true"
    }
  }, [_vm._v("Almacén")])]), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link",
    attrs: {
      "data-toggle": "tab",
      href: "#profile",
      role: "tab",
      "aria-controls": "profile",
      "aria-selected": "false"
    }
  }, [_vm._v("Lotes")])]), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link",
    attrs: {
      "data-toggle": "tab",
      href: "#messages",
      role: "tab",
      "aria-controls": "messages",
      "aria-selected": "false"
    }
  }, [_vm._v("Stocks")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("Almacén")]), _vm._v(" "), _c("th", [_vm._v("Stand")]), _vm._v(" "), _c("th", [_vm._v("Nivel")]), _vm._v(" "), _c("th", [_vm._v("Cantidad")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("Lote")]), _vm._v(" "), _c("th", [_vm._v("Caducidad")]), _vm._v(" "), _c("th", [_vm._v("Comentario")]), _vm._v(" "), _c("th", [_vm._v("Cantidad")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("Sotck")]), _vm._v(" "), _c("th", [_vm._v("Cantidad")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Almacen/Kardex.vue?vue&type=template&id=bb5be098":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Almacen/Kardex.vue?vue&type=template&id=bb5be098 ***!
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
  return _c("main", [_c("vue-element-loading", {
    attrs: {
      active: _vm.isLoading
    }
  }), _vm._v(" "), _c("table", {
    staticClass: "table table-sm"
  }, [_vm._m(0), _vm._v(" "), _c("tbody", _vm._l(_vm.movimientos, function (item) {
    return _c("tr", {
      key: item.id,
      attrs: {
        value: item.id
      }
    }, [_c("td", [_vm._v(_vm._s(item.tipo_movimiento))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(item.folio))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(item.fecha) + " "), _c("br"), _vm._v(" " + _vm._s(item.hora))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(item.almacen)), _c("br"), _vm._v(_vm._s(item.stock)), _c("br"), _vm._v(_vm._s(item.lote))]), _vm._v(" "), _c("td", {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(item.cantidad))])]);
  }), 0)]), _vm._v(" "), _c("nav", [_c("ul", {
    staticClass: "pagination"
  }, [_c("li", {
    staticClass: "page-item",
    "class": _vm.page == 1 ? "disabled" : ""
  }, [_c("a", {
    staticClass: "page-link",
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.anterior();
      }
    }
  }, [_vm._v("Anterior")])]), _vm._v(" "), _c("li", {
    staticClass: "page-item",
    "class": _vm.page == _vm.total ? "disabled" : ""
  }, [_c("a", {
    staticClass: "page-link",
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.siguiente();
      }
    }
  }, [_vm._v("Siguiente")])])])])], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("Tipo")]), _vm._v(" "), _c("th", [_vm._v("Folio")]), _vm._v(" "), _c("th", [_vm._v("Fecha")]), _vm._v(" "), _c("th", [_vm._v("Almacén")]), _vm._v(" "), _c("th", [_vm._v("Cantidad")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Asistencias/Asistencia.vue?vue&type=template&id=7a68c882":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Asistencias/Asistencia.vue?vue&type=template&id=7a68c882 ***!
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
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-3"
  }, [_c("label", [_vm._v("Fecha inicial")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.date_one,
      expression: "date_one"
    }],
    ref: "date_one",
    staticClass: "form-control",
    attrs: {
      type: "date"
    },
    domProps: {
      value: _vm.date_one
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.date_one = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-3"
  }, [_c("label", [_vm._v("Fecha final")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.date_two,
      expression: "date_two"
    }],
    ref: "date_two",
    staticClass: "form-control",
    attrs: {
      type: "date"
    },
    domProps: {
      value: _vm.date_two
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.date_two = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-1"
  }, [_c("label", [_vm._v(" ")]), _vm._v(" "), _c("br"), _vm._v(" "), _c("button", {
    staticClass: "btn btn-dark",
    attrs: {
      type: "button",
      name: "button"
    },
    on: {
      click: _vm.BuscarAsistencias
    }
  }, [_vm._v("Buscar")])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-2"
  }, [[_c("label", [_vm._v("Generar Reporte")]), _vm._v(" "), _c("br"), _vm._v(" "), _c("select", {
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
      }, _vm.GenerarReporte]
    }
  }, [_c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("Conserflow Semanal")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "2"
    }
  }, [_vm._v("Conserflow Quincenal")])])]], 2)])])]), _vm._v(" "), _c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-4 mb-3"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.data_busqueda,
      expression: "data_busqueda"
    }],
    staticClass: "form-control",
    domProps: {
      value: _vm.data_busqueda
    },
    on: {
      keyup: function keyup($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        return _vm.buscarEmp(0);
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.data_busqueda = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 mb-3"
  }, [_c("button", {
    staticClass: "btn btn-dark",
    on: {
      click: function click($event) {
        return _vm.buscarEmp(0);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-search"
  })]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-dark",
    on: {
      click: function click($event) {
        return _vm.BorrarBusqueda();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-broom"
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "table"
  }, [_c("div", {
    staticClass: "table-scroll"
  }, [_c("table", {
    staticClass: "table-main"
  }, [_c("thead", [_c("tr", [_vm._m(1), _vm._v(" "), _vm.data_response != "" ? [_vm._l(_vm.data_response.fechas, function (f, i) {
    return [_c("td", {
      key: i
    }, [_vm._v("\r\n                                                " + _vm._s(f[0]) + "\r\n                                                "), _c("br"), _vm._v("\r\n                                                " + _vm._s(f[1]) + "\r\n                                            ")])];
  })] : _vm._e()], 2)]), _vm._v(" "), _c("tbody", [_vm.data_response != "" ? [_vm._l(_vm.data_response.asistencias, function (d, i) {
    return [_c("tr", {
      key: i
    }, [_c("td", {
      staticClass: "fix-col"
    }, [_vm._v("\r\n                                                " + _vm._s(d.datos_empleado.nombre) + "\r\n                                            ")]), _vm._v(" "), _vm._l(d.asistencias, function (h, j) {
      return [_c("td", {
        key: j
      }, [_c("p", {
        domProps: {
          innerHTML: _vm._s(h.horario)
        }
      })])];
    })], 2)];
  })] : _vm._e()], 2)])])]), _vm._v(" "), _c("nav", {
    attrs: {
      "aria-label": ""
    }
  }, [_c("ul", {
    staticClass: "pagination"
  }, [_vm._l(_vm.total_paginas, function (p, i) {
    return _c("li", {
      key: i,
      staticClass: "page-item"
    }, [_c("a", {
      staticClass: "page-link",
      attrs: {
        href: "#"
      },
      on: {
        click: function click($event) {
          return _vm.CargarPagina(p.index);
        }
      }
    }, [_vm._v(_vm._s(p.nombre))])]);
  }), _vm._v(" "), _c("li", {
    staticClass: "page-item ml-3 my-auto"
  }, [_vm._v("\r\n                            Página actual: " + _vm._s(_vm.pagina_actual) + "\r\n                        ")])], 2)])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header"
  }, [_c("i", {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" Buscar\r\n            ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("th", {
    staticClass: "fix-col"
  }, [_vm._v("\r\n                                        NOMBRE DEL EMPLEADO\r\n                                        "), _c("br")]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Beneficiarios/Beneficiarios.vue?vue&type=template&id=6256a9a1":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Beneficiarios/Beneficiarios.vue?vue&type=template&id=6256a9a1 ***!
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
  return _c("main", [_c("button", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.empleado_activo,
      expression: "empleado_activo"
    }],
    staticClass: "btn btn-dark float-sm-right",
    attrs: {
      type: "button",
      disabled: _vm.deshabilitado == 1
    },
    on: {
      click: function click($event) {
        return _vm.abrirModal("beneficiario", "registrar", _vm.empleado.id);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  }), _vm._v(" Nuevo\n    ")]), _vm._v(" "), _c("vue-element-loading", {
    attrs: {
      active: _vm.isLoadingDetalle
    }
  }), _vm._v(" "), _c("v-client-table", {
    ref: "myTabledireccion",
    attrs: {
      columns: _vm.columnsbeneficiario,
      data: _vm.tableDatabeneficiario,
      options: _vm.optionsbeneficiario
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
        }, [_vm._v("Desactivado")])] : _vm._e()];
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
        }), _vm._v("  Acciones\n        ")]), _vm._v(" "), _c("div", {
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
              return _vm.abrirModal("beneficiario", "actualizar", _vm.empleado.id, props.row);
            }
          }
        }, [_c("i", {
          staticClass: "icon-pencil"
        }), _vm._v("  Actualizar Beneficiario\n        ")]), _vm._v(" "), props.row.condicion ? [_c("button", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: _vm.empleado_activo,
            expression: "empleado_activo"
          }],
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.actdesact(props.row.id, 0, _vm.empleado.id);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-ban"
        }), _vm._v("  Desactivar\n            ")])] : [_c("button", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: _vm.empleado_activo,
            expression: "empleado_activo"
          }],
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.actdesact(props.row.id, 1, _vm.empleado.id);
            }
          }
        }, [_c("i", {
          staticClass: "icon-check"
        }), _vm._v("  Activar\n            ")])]], 2)])])];
      }
    }])
  }), _vm._v(" "), _c("div", {
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
  }, [_c("div", {
    staticClass: "form-group row",
    attrs: {
      hidden: ""
    }
  }, [_c("div", {
    staticClass: "col-md-9"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.beneficiario.empleado_id,
      expression: "beneficiario.empleado_id"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "empleado_id",
      placeholder: "Nombre Completo del Beneficiario",
      autocomplete: "off",
      id: "nombre"
    },
    domProps: {
      value: _vm.beneficiario.empleado_id
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.beneficiario, "empleado_id", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("empleado_id")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label",
    attrs: {
      "for": "nombre"
    }
  }, [_vm._v("Nombre del Beneficiario")]), _vm._v(" "), _c("div", {
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
      value: _vm.beneficiario.nombre,
      expression: "beneficiario.nombre"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "nombre",
      placeholder: "Nombre Completo del Beneficiario",
      autocomplete: "off",
      id: "nombre"
    },
    domProps: {
      value: _vm.beneficiario.nombre
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.beneficiario, "nombre", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("nombre")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label",
    attrs: {
      "for": "telefono"
    }
  }, [_vm._v("Teléfono (10 Digitos)")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-9"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.beneficiario.telefono,
      expression: "beneficiario.telefono"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      name: "telefono",
      placeholder: "Teléfono Particular",
      autocomplete: "off",
      id: "telefono"
    },
    domProps: {
      value: _vm.beneficiario.telefono
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.beneficiario, "telefono", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("telefono")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label",
    attrs: {
      "for": "tel_celular"
    }
  }, [_vm._v("Teléfono (10 Digitos)")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-9"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.beneficiario.tel_celular,
      expression: "beneficiario.tel_celular"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      name: "tel_celular",
      placeholder: "Teléfono Celular",
      autocomplete: "off",
      id: "tel_celular"
    },
    domProps: {
      value: _vm.beneficiario.tel_celular
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.beneficiario, "tel_celular", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("tel_celular")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label",
    attrs: {
      "for": "parentesco"
    }
  }, [_vm._v("Parentesco")]), _vm._v(" "), _c("div", {
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
      value: _vm.beneficiario.parentesco,
      expression: "beneficiario.parentesco"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "parentesco",
      placeholder: "Parentesco",
      autocomplete: "off",
      id: "parentesco"
    },
    domProps: {
      value: _vm.beneficiario.parentesco
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.beneficiario, "parentesco", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("parentesco")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-6 form-control-label",
    attrs: {
      "for": "porcentaje"
    }
  }, [_vm._v("Porcentaje")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-9 ml-auto"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.beneficiario.porcentaje,
      expression: "beneficiario.porcentaje"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      min: "1",
      max: "100",
      name: "porcentaje",
      placeholder: "Porcentaje",
      autocomplete: "off",
      id: "porcentaje"
    },
    domProps: {
      value: _vm.beneficiario.porcentaje
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.beneficiario, "porcentaje", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("porcentaje")))])])])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isLoading
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "btn btn-outine-dark",
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
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.empleado_activo,
      expression: "empleado_activo"
    }],
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.guardarbeneficiario(1);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Guardar")]) : _vm._e(), _vm._v(" "), _vm.tipoAccion == 2 ? _c("button", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.empleado_activo,
      expression: "empleado_activo"
    }],
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.guardarbeneficiario(0);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Actualizar")]) : _vm._e()], 1)])])])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Catalogos/Bancos.vue?vue&type=template&id=7db109dc":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Catalogos/Bancos.vue?vue&type=template&id=7db109dc ***!
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
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("i", {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" Bancos\n                "), _c("button", {
    staticClass: "btn btn-dark float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.abrirModal("banco", "registrar");
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
        }), _vm._v(" Acciones\n                        ")]), _vm._v(" "), _c("div", {
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
              return _vm.abrirModal("banco", "actualizar", props.row);
            }
          }
        }, [_c("i", {
          staticClass: "icon-pencil"
        }), _vm._v("  Actualizar Banco\n                        ")])])])])];
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
      value: "required|max:45",
      expression: "'required|max:45'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.banco.nombre,
      expression: "banco.nombre"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "nombre",
      placeholder: "Nombre del Banco",
      autocomplete: "off",
      id: "nombre"
    },
    domProps: {
      value: _vm.banco.nombre
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.banco, "nombre", $event.target.value);
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
    staticClass: "fas fa-window-close"
  }), _vm._v(" Cerrar")]), _vm._v(" "), _vm.tipoAccion == 1 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.guardarBanco(1);
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
        return _vm.guardarBanco(0);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Actualizar")]) : _vm._e()])])])])], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Catalogos/Departamentos.vue?vue&type=template&id=35dce25b":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Catalogos/Departamentos.vue?vue&type=template&id=35dce25b ***!
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
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("i", {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" Departamentos\r\n            "), _vm.PermisosCRUD.Create ? _c("button", {
    staticClass: "btn btn-dark float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.abrirModal("departamento", "registrar");
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  }), _vm._v(" Nuevo\r\n            ")]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("v-client-table", {
    ref: "myTable",
    attrs: {
      columns: _vm.columns,
      data: _vm.list_departamentos,
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
        }), _vm._v(" Acciones\r\n                            ")]), _vm._v(" "), _c("div", {
          staticClass: "dropdown-menu",
          attrs: {
            "aria-labelledby": "btnGroupDrop1"
          }
        }, [_vm.PermisosCRUD.Update ? _c("button", {
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
          staticClass: "fa fa-edit"
        }), _vm._v(" Actualizar\r\n                                ")]) : _vm._e(), _vm._v(" "), _vm.PermisosCRUD.Delete ? _c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.desactivarDepartamento(props.row.id);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-trash"
        }), _vm._v(" Eliminar\r\n                                ")]) : _vm._e()])])])];
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
  }, [_vm._v("x")])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_c("div", {
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
      value: "required|max:100",
      expression: "'required|max:100'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.departamento.nombre,
      expression: "departamento.nombre"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "nombre",
      placeholder: "Nombre del departamento",
      autocomplete: "off",
      id: "nombre"
    },
    domProps: {
      value: _vm.departamento.nombre
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.departamento, "nombre", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("nombre")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label",
    attrs: {
      "for": "direccion_administrativa_id"
    }
  }, [_vm._v("Dirección administrativa")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-9"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.departamento.direccion_administrativa_id,
      expression: "departamento.direccion_administrativa_id"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "excluded:0",
      expression: "'excluded:0'"
    }],
    staticClass: "form-control",
    attrs: {
      id: "direccion_administrativa_id",
      name: "direccion_administrativa_id",
      "data-vv-as": "Dirección administrativa"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.departamento, "direccion_administrativa_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, _vm._l(_vm.listaDirecciones, function (item) {
    return _c("option", {
      key: item.id,
      domProps: {
        value: item.id
      }
    }, [_vm._v(_vm._s(item.nombre))]);
  }), 0), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("direccion_administrativa_id")))])])])]), _vm._v(" "), _c("div", {
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
        return _vm.guardarDepartamento(true);
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
        return _vm.guardarDepartamento(false);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Actualizar")]) : _vm._e()])])])])], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Catalogos/Puesto.vue?vue&type=template&id=1ed6e2f2":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Catalogos/Puesto.vue?vue&type=template&id=1ed6e2f2 ***!
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
  }), _vm._v(" Puestos\r\n                "), _c("button", {
    staticClass: "btn btn-dark float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.AbrirModalPuestos();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  }), _vm._v(" Nuevo\r\n                ")]), _vm._v(" "), _c("button", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.PermisosCRUD.Download,
      expression: "PermisosCRUD.Download"
    }],
    staticClass: "btn btn-dark float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.descargar
    }
  }, [_c("i", {
    staticClass: "fas fa-download mr-1"
  }), _vm._v("Descargar\r\n                ")])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("v-client-table", {
    attrs: {
      columns: _vm.columns_puestos,
      data: _vm.list_puestos,
      options: _vm.options_puestos
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
              return _vm.AbrirModalPuestos(false, props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-edit mr-1"
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
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isGuardar_Loading
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
        return _vm.CerrarModalPuestos();
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
      value: _vm.puesto.nombre,
      expression: "puesto.nombre"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "nombre",
      placeholder: "Nombre del puesto",
      autocomplete: "off",
      id: "nombre"
    },
    domProps: {
      value: _vm.puesto.nombre
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.puesto, "nombre", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("nombre")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label",
    attrs: {
      "for": "area"
    }
  }, [_vm._v("Area")]), _vm._v(" "), _c("div", {
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
      value: _vm.puesto.area,
      expression: "puesto.area"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      maxlength: 45,
      name: "Area",
      placeholder: "Area",
      autocomplete: "off",
      id: "area"
    },
    domProps: {
      value: _vm.puesto.area
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.puesto, "area", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Area")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label",
    attrs: {
      "for": "departamento_id"
    }
  }, [_vm._v("Departamento")]), _vm._v(" "), _c("div", {
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
      value: _vm.puesto.departamento_id,
      expression: "puesto.departamento_id"
    }],
    staticClass: "form-control",
    attrs: {
      id: "departamento_id",
      name: "departamento_id",
      "data-vv-as": "Departamento"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.puesto, "departamento_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, _vm._l(_vm.listaDepartamentos, function (item) {
    return _c("option", {
      key: item.id,
      domProps: {
        value: item.id
      }
    }, [_vm._v(_vm._s(item.nombre))]);
  }), 0), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("departamento_id")))])])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("button", {
    staticClass: "btn btn-outline-dark",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.CerrarModalPuestos();
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
        return _vm.GuardarPuesto(1);
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
        return _vm.GuardarPuesto(0);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Actualizar")]) : _vm._e()])])])])], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/ChecadorQR.vue?vue&type=template&id=4e963208":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/ChecadorQR.vue?vue&type=template&id=4e963208 ***!
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
    staticClass: "container-fluid"
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.error))]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("label", {
    staticClass: "form-control-label mt-1 mr-2",
    attrs: {
      "for": "Ubicación"
    }
  }, [_vm._v("Ubicación")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3 mb-3"
  }, [_vm.tipo_ubicacion > 0 ? [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.tipo_ubicacion,
      expression: "tipo_ubicacion"
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
        _vm.tipo_ubicacion = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("TEHUACAN")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "2"
    }
  }, [_vm._v("COATZACOALCOS")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "0"
    }
  }, [_vm._v("OTRO")])])] : [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.ubicacion,
      expression: "ubicacion"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      maxlength: "25"
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
  })]], 2), _vm._v(" "), _vm._m(0)]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "col-md-6 mb-3",
    staticStyle: {
      transform: "scaleX(-1)"
    }
  }, [_c("qrcode-stream", {
    on: {
      decode: _vm.onDecode,
      init: _vm.onInit
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 mb-3"
  }, [_c("br"), _vm._v(" "), _c("h1", {
    staticStyle: {
      "font-family": "'Share Tech Mono', monospace",
      "text-align": "center"
    }
  }, [_c("digital-clock", {
    attrs: {
      blink: true,
      displaySeconds: true
    }
  })], 1), _vm._v(" "), _c("br"), _vm._v(" "), _c("h2", {
    staticStyle: {
      "font-family": "'Share Tech Mono', monospace",
      "text-align": "center"
    }
  }, [_vm._v(_vm._s(_vm.empleado))]), _vm._v(" "), _c("br"), _vm._v(" "), _c("h2", {
    staticStyle: {
      "font-family": "'Share Tech Mono', monospace",
      "text-align": "center"
    }
  }, [_vm._v(_vm._s(_vm.hora_reg))])])]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.PermisosCrud.Create,
      expression: "PermisosCrud.Create"
    }]
  }, [_c("div", {
    staticClass: "form-row"
  }, [_vm._m(1), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-2"
  }, [_c("button", {
    staticClass: "btn btn-outline-success",
    on: {
      click: function click($event) {
        return _vm.sincronizar();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-redo-alt"
  }), _vm._v("Sincronizar")])])]), _vm._v(" "), _vm._l(_vm.registros_fail, function (vi, index) {
    return _c("li", {
      key: index,
      staticClass: "list-group-item"
    }, [_c("div", {
      staticClass: "form-row"
    }, [_c("div", {
      staticClass: "form-group col-md-2"
    }, [_c("label", [_vm._v(_vm._s(index + 1))])]), _vm._v(" "), _c("div", {
      staticClass: "form-group col-md-8"
    }, [_c("label", [_vm._v(_vm._s(vi))])])])]);
  })], 2)])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-md-7 mb-3"
  }, [_c("h3", {
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("Checador QR ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "form-group col-md-8",
    staticStyle: {
      "text-align": "center"
    }
  }, [_c("label", [_c("b", [_vm._v("REGISTROS SIN SINCRONIZACIÓN")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/CuestionarioInfraestructura.vue?vue&type=template&id=6dd5a68d":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/CuestionarioInfraestructura.vue?vue&type=template&id=6dd5a68d ***!
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
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.tipoCardCuestionarioInfra == 1,
      expression: "tipoCardCuestionarioInfra==1"
    }],
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("i", {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" Cuestionario Infraestructura\r\n            "), _c("button", {
    staticClass: "btn btn-dark float-sm-right ml-1",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.Descargar();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-file-pdf"
  }), _vm._v(" Descargar\r\n            ")]), _vm._v(" "), _vm.PermisosCRUD.Create ? _c("button", {
    staticClass: "btn btn-dark float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.AbrirModalCuestionarioInfra(true);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  }), _vm._v(" Nuevo\r\n            ")]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isObtenercuestionarioinfra_loading
    }
  }), _vm._v(" "), _c("v-client-table", {
    attrs: {
      columns: _vm.columns_cuestionarioinfra,
      data: _vm.list_cuestionarioinfra,
      options: _vm.options_cuestionarioinfra
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
        }, [_vm.PermisosCRUD.Upload ? _c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.SubirCuestionario(props.row.id);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-edit"
        }), _vm._v(" Subir Cuestionario\r\n                                ")]) : _vm._e()])])])];
      }
    }, {
      key: "documento",
      fn: function fn(props) {
        return _vm.PermisosCRUD.Download ? [props.row.documento == null ? _c("span", {
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
        })])] : undefined;
      }
    }], null, true)
  })], 1)]), _vm._v(" "), _vm.ver_modal_cuestionarioinfra ? _c("div", {
    staticClass: "modal fade",
    "class": {
      mostrar: _vm.ver_modal_cuestionarioinfra
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
      textContent: _vm._s(_vm.tituloModal_cuestionarioinfra)
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "close",
    attrs: {
      type: "button",
      "aria-label": "Close"
    },
    on: {
      click: function click($event) {
        return _vm.CerrarModalCuestionarioInfra();
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
      active: _vm.isGuardarcuestionarioinfra_loading
    }
  }), _vm._v(" "), _c("div", [_c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Empleado")]), _vm._v(" "), _c("div", {
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
      options: _vm.list_empleados,
      "data-vv-name": "Empleado"
    },
    model: {
      value: _vm.cuestionarioinfra.empleado,
      callback: function callback($$v) {
        _vm.$set(_vm.cuestionarioinfra, "empleado", $$v);
      },
      expression: "cuestionarioinfra.empleado"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Empleado")))])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Fecha")]), _vm._v(" "), _c("div", {
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
      value: _vm.cuestionarioinfra.fecha,
      expression: "cuestionarioinfra.fecha"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date",
      "data-vv-name": "Fecha"
    },
    domProps: {
      value: _vm.cuestionarioinfra.fecha
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.cuestionarioinfra, "fecha", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Fecha")))])])])])], 1), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isGuardarcuestionarioinfra_loading
    }
  }), _vm._v(" "), _c("div", [_c("button", {
    staticClass: "btn btn-outline-dark",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.CerrarModalCuestionarioInfra();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-window-close"
  }), _vm._v(" Cerrar\r\n                            ")]), _vm._v(" "), _vm.tipoAccion_cuestionarioinfra == 1 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.RegistrarCuestionarioInfra(true);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Guardar\r\n                            ")]) : _vm._e(), _vm._v(" "), _vm.tipoAccion_cuestionarioinfra == 2 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.RegistrarCuestionarioInfra(false);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Actualizar\r\n                            ")]) : _vm._e()])], 1)])])])]) : _vm._e()]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Dashboard/AniversarioEmpleados.vue?vue&type=template&id=b08cf71c":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Dashboard/AniversarioEmpleados.vue?vue&type=template&id=b08cf71c ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", {}, [_c("div", {
    staticClass: "card"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {}, [_c("div", {}, [_c("v-client-table", {
    attrs: {
      columns: _vm.columns_empleados,
      data: _vm.list_empleados,
      options: _vm.options_empleados
    }
  })], 1)])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header bg-dark text-white"
  }, [_c("i", {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" Empleados - Aniversario\r\n        ")]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Dashboard/Dashboard.vue?vue&type=template&id=6b4d7bd2":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Dashboard/Dashboard.vue?vue&type=template&id=6b4d7bd2 ***!
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
  }, [_c("div", [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_c("resguardos", {
    ref: "resguardos"
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_c("aniversario-empleados", {
    ref: "aniversario"
  })], 1)])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/DiasFestivos.vue?vue&type=template&id=7631d1da":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/DiasFestivos.vue?vue&type=template&id=7631d1da ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
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
      value: _vm.tipoCardDiasFestivos == 1,
      expression: "tipoCardDiasFestivos==1"
    }],
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("i", {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" Días Festivos\r\n            "), _c("button", {
    staticClass: "btn btn-dark float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.AbrirModalDiasFestivos(true);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  }), _vm._v(" Nuevo\r\n            ")])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isObtenerdiasfestivos_loading
    }
  }), _vm._v(" "), _c("v-client-table", {
    attrs: {
      columns: _vm.columns_diasfestivos,
      data: _vm.list_diasfestivos,
      options: _vm.options_diasfestivos
    }
  }, [_c("template", {
    slot: "id"
  }, [_c("div", {
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
  })])])])], 2)], 1)]), _vm._v(" "), _vm.ver_modal_diasfestivos ? _c("div", {
    staticClass: "modal fade",
    "class": {
      mostrar: _vm.ver_modal_diasfestivos
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
  }, [_c("div", [_c("div", {
    staticClass: "modal-header"
  }, [_c("h4", {
    staticClass: "modal-title",
    domProps: {
      textContent: _vm._s(_vm.tituloModal_diasfestivos)
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "close",
    attrs: {
      type: "button",
      "aria-label": "Close"
    },
    on: {
      click: function click($event) {
        return _vm.CerrarModalDiasFestivos();
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
      active: _vm.isGuardardiasfestivos_loading
    }
  }), _vm._v(" "), _c("div", [_c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Día")]), _vm._v(" "), _c("div", {
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
      value: _vm.diasfestivos.dia,
      expression: "diasfestivos.dia"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date",
      "data-vv-name": "Día"
    },
    domProps: {
      value: _vm.diasfestivos.dia
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.diasfestivos, "dia", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Día")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Descipción")]), _vm._v(" "), _c("div", {
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
      value: _vm.diasfestivos.descripcion,
      expression: "diasfestivos.descripcion"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      "data-vv-name": "Descripción"
    },
    domProps: {
      value: _vm.diasfestivos.descripcion
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.diasfestivos, "descripcion", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Descripción")))])])])])], 1), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isGuardardiasfestivos_loading
    }
  }), _vm._v(" "), _c("div", [_c("button", {
    staticClass: "btn btn-outline-dark",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.CerrarModalDiasFestivos();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-window-close"
  }), _vm._v(" Cerrar\r\n                            ")]), _vm._v(" "), _vm.tipoAccion_diasfestivos == 1 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.RegistrarDiasFestivos(true);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Guardar\r\n                            ")]) : _vm._e(), _vm._v(" "), _vm.tipoAccion_diasfestivos == 2 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.RegistrarDiasFestivos(false);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Actualizar\r\n                            ")]) : _vm._e()])], 1)])])])]) : _vm._e()]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/Alta.vue?vue&type=template&id=f7f2be9e":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/Alta.vue?vue&type=template&id=f7f2be9e ***!
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
  return _c("main", [_c("vue-element-loading", {
    attrs: {
      active: _vm.isLoading
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "form"
  }, [_c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-1",
    attrs: {
      "for": "text-input"
    }
  }, [_vm._v("Nombre")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required|max:60",
      expression: "'required|max:60'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.empleado.nombre,
      expression: "empleado.nombre"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "nombre",
      "data-toggle": "tooltip",
      autocomplete: "off"
    },
    domProps: {
      value: _vm.empleado.nombre
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.empleado, "nombre", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("nombre")))])]), _vm._v(" "), _c("label", {
    staticClass: "col-md-1",
    attrs: {
      "for": "text-input"
    }
  }, [_vm._v("Apellido Paterno")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required|max:40",
      expression: "'required|max:40'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.empleado.ap_paterno,
      expression: "empleado.ap_paterno"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "paterno",
      "data-toggle": "tooltip",
      autocomplete: "off"
    },
    domProps: {
      value: _vm.empleado.ap_paterno
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.empleado, "ap_paterno", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("paterno")))])]), _vm._v(" "), _c("label", {
    staticClass: "col-md-1",
    attrs: {
      "for": "text-input"
    }
  }, [_vm._v("Apellido Materno")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required|max:40",
      expression: "'required|max:40'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.empleado.ap_materno,
      expression: "empleado.ap_materno"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "materno",
      "data-toggle": "tooltip",
      autocomplete: "off"
    },
    domProps: {
      value: _vm.empleado.ap_materno
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.empleado, "ap_materno", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("materno")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-1",
    attrs: {
      "for": "text-input"
    }
  }, [_vm._v("Fecha de alta IMSS")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.empleado.fech_alta_imss,
      expression: "empleado.fech_alta_imss"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date",
      name: "fech_alta_imss",
      placeholder: "Fecha de Alta IMSS"
    },
    domProps: {
      value: _vm.empleado.fech_alta_imss
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.empleado, "fech_alta_imss", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("fech_alta_imss")))])]), _vm._v(" "), _c("label", {
    staticClass: "col-md-1",
    attrs: {
      "for": "text-input"
    }
  }, [_vm._v("Fecha Real de Ingreso")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.empleado.fech_ing,
      expression: "empleado.fech_ing"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date",
      name: "fech_ing",
      placeholder: "Fecha Real de Ingreso"
    },
    domProps: {
      value: _vm.empleado.fech_ing
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.empleado, "fech_ing", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("fech_ing")))])]), _vm._v(" "), _c("label", {
    staticClass: "col-md-1",
    attrs: {
      "for": "text-input"
    }
  }, [_vm._v("CURP")]), _vm._v(" "), _c("div", {
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
      value: _vm.empleado.curp,
      expression: "empleado.curp"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      minlength: "18",
      maxlength: "18",
      name: "curp",
      "data-toggle": "tooltip",
      title: "Completa los 18 dígitos de la CURP",
      placeholder: "Curp",
      autocomplete: "off"
    },
    domProps: {
      value: _vm.empleado.curp
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.empleado, "curp", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("curp")))])]), _vm._v(" "), _c("label", {
    staticClass: "col-md-1",
    attrs: {
      "for": "text-input"
    }
  }, [_vm._v("RFC:")]), _vm._v(" "), _c("div", {
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
      value: _vm.empleado.rfc,
      expression: "empleado.rfc"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      maxlength: "13",
      minlength: "13",
      name: "rfc",
      "data-toggle": "tooltip",
      title: "Completa los 13 dígitos del RFC",
      placeholder: "Rfc",
      autocomplete: "off"
    },
    domProps: {
      value: _vm.empleado.rfc
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.empleado, "rfc", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("rfc")))])]), _vm._v(" "), _c("label", {
    staticClass: "col-md-1",
    attrs: {
      "for": "text-input"
    }
  }, [_vm._v("NSS")]), _vm._v(" "), _c("div", {
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
      value: _vm.empleado.nss_imss,
      expression: "empleado.nss_imss"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      minlength: "11",
      maxlength: "11",
      name: "nss_imss",
      "data-toggle": "tooltip",
      title: "Completa los 11 dígitos del N° de seguro",
      placeholder: "NSS",
      autocomplete: "off"
    },
    domProps: {
      value: _vm.empleado.nss_imss
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.empleado, "nss_imss", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("nss_imss")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-1",
    attrs: {
      "for": "text-input"
    }
  }, [_vm._v("Lugar de Nacimiento")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.empleado.lug_nac,
      expression: "empleado.lug_nac"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required|max:45",
      expression: "'required|max:45'"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "lug_nac",
      name: "lug_nac",
      placeholder: "Lugar de nacimiento",
      autocomplete: "off",
      required: "",
      "data-vv-as": "lugar de nacimiento"
    },
    domProps: {
      value: _vm.empleado.lug_nac
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.empleado, "lug_nac", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("lug_nac")))])]), _vm._v(" "), _c("label", {
    staticClass: "col-md-1",
    attrs: {
      "for": "text-input"
    }
  }, [_vm._v("Fecha de Nacimiento")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.empleado.fech_nac,
      expression: "empleado.fech_nac"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date",
      name: "fech_nac",
      placeholder: "Fecha de Nacimiento"
    },
    domProps: {
      value: _vm.empleado.fech_nac
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.empleado, "fech_nac", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("fech_nac")))])]), _vm._v(" "), _c("label", {
    staticClass: "col-md-1",
    attrs: {
      "for": "text-input"
    }
  }, [_vm._v("Sexo")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3"
  }, [_c("p", [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.empleado.sexo,
      expression: "empleado.sexo"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    attrs: {
      name: "text-input",
      id: "text-input",
      "data-toggle": "tooltip",
      title: "Selecciona sexo",
      "data-vv-as": "sexo"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.empleado, "sexo", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("MASCULINO")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "0"
    }
  }, [_vm._v("FEMENINO")])]), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("text-input")))])])])]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("p", {
    staticClass: "h6"
  }, [_vm._v("Situación Fiscal")]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-1",
    attrs: {
      "for": "text-input"
    }
  }, [_vm._v("C.P.")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.empleado.fiscal_cp,
      expression: "empleado.fiscal_cp"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      minlength: "5",
      maxlength: "5",
      autocomplete: "off",
      required: "",
      "data-vv-name": "C.P."
    },
    domProps: {
      value: _vm.empleado.fiscal_cp
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.empleado, "fiscal_cp", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("C.P.")))])]), _vm._v(" "), _c("label", {
    staticClass: "col-md-1",
    attrs: {
      "for": "text-input"
    }
  }, [_vm._v("Estado")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.empleado.fiscal_estado,
      expression: "empleado.fiscal_estado"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      min: "3",
      maxlength: "50",
      placeholder: "Estado",
      "data-vv-name": "Estado"
    },
    domProps: {
      value: _vm.empleado.fiscal_estado
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.empleado, "fiscal_estado", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Estado")))])])]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-1",
    attrs: {
      "for": "text-input"
    }
  }, [_vm._v("Edo. Civil")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.empleado.edo_civil_id,
      expression: "empleado.edo_civil_id"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "excluded:0",
      expression: "'excluded:0'"
    }],
    staticClass: "form-control",
    attrs: {
      id: "edo_civil_id",
      name: "edo_civil_id",
      "data-toggle": "tooltip",
      title: "Selecciona estado civil",
      "data-vv-as": "estado civil"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.empleado, "edo_civil_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, _vm._l(_vm.list_estadosciviles, function (item) {
    return _c("option", {
      key: item.id,
      domProps: {
        value: item.id
      }
    }, [_vm._v(_vm._s(item.nombre))]);
  }), 0), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("edo_civil_id")))])]), _vm._v(" "), _c("label", {
    staticClass: "col-md-1",
    attrs: {
      "for": "text-input"
    }
  }, [_vm._v("Tipo de sangre")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.empleado.tipo_sangre,
      expression: "empleado.tipo_sangre"
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
        _vm.$set(_vm.empleado, "tipo_sangre", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "S/I"
    }
  }, [_vm._v("SIN INFORMACIÓN")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "O+"
    }
  }, [_vm._v("O+")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "O-"
    }
  }, [_vm._v("O-")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "A+"
    }
  }, [_vm._v("A+")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "A-"
    }
  }, [_vm._v("A-")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "B+"
    }
  }, [_vm._v("B+")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "B-"
    }
  }, [_vm._v("B-")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "AB+"
    }
  }, [_vm._v("AB+")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "AB-"
    }
  }, [_vm._v("AB-")])])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-1",
    attrs: {
      "for": "text-input"
    }
  }, [_vm._v("Overol")]), _vm._v(" "), _c("div", {
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
      value: _vm.empleado.talla_overol,
      expression: "empleado.talla_overol"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      min: "0",
      step: "1",
      "data-toggle": "tooltip",
      title: "Inserta talla de overol",
      placeholder: "Talla overol",
      "data-vv-name": "Talla overol"
    },
    domProps: {
      value: _vm.empleado.talla_overol
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.empleado, "talla_overol", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Talla overol")))])]), _vm._v(" "), _c("label", {
    staticClass: "col-md-1",
    attrs: {
      "for": "text-input"
    }
  }, [_vm._v("Camisa")]), _vm._v(" "), _c("div", {
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
      value: _vm.empleado.talla_camisa,
      expression: "empleado.talla_camisa"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Talla Camisa",
      "data-vv-name": "Talla Camisa"
    },
    domProps: {
      value: _vm.empleado.talla_camisa
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.empleado, "talla_camisa", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Talla Camisa")))])]), _vm._v(" "), _c("label", {
    staticClass: "col-md-1",
    attrs: {
      "for": "text-input"
    }
  }, [_vm._v("Botas")]), _vm._v(" "), _c("div", {
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
      value: _vm.empleado.talla_botas,
      expression: "empleado.talla_botas"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      min: "0",
      step: "0.5",
      "data-toggle": "tooltip",
      title: "Inserta talla de botas",
      placeholder: "Talla botas",
      "data-vv-name": "Talla Botas"
    },
    domProps: {
      value: _vm.empleado.talla_botas
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.empleado, "talla_botas", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Talla Botas")))])])]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-1",
    attrs: {
      "for": "text-input"
    }
  }, [_vm._v("Salario Neto")]), _vm._v(" "), _c("div", {
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
      value: _vm.empleado.salario_neto,
      expression: "empleado.salario_neto"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      "data-vv-name": "Salario Neto",
      placeholder: "Salario Neto"
    },
    domProps: {
      value: _vm.empleado.salario_neto
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.empleado, "salario_neto", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Salario Neto")))])]), _vm._v(" "), _c("label", {
    staticClass: "col-md-1",
    attrs: {
      "for": "text-input"
    }
  }, [_vm._v("Amortización")]), _vm._v(" "), _c("div", {
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
      value: _vm.empleado.amortizacion,
      expression: "empleado.amortizacion"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Amortización",
      "data-vv-name": "Amortización"
    },
    domProps: {
      value: _vm.empleado.amortizacion
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.empleado, "amortizacion", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Amortización")))])]), _vm._v(" "), _c("label", {
    staticClass: "col-md-1",
    attrs: {
      "for": "text-input"
    }
  }, [_vm._v("Número Credito")]), _vm._v(" "), _c("div", {
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
      value: _vm.empleado.numero_credito,
      expression: "empleado.numero_credito"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      "data-toggle": "tooltip",
      "data-vv-name": "Numero de Credito",
      placeholder: "Numero de Credito"
    },
    domProps: {
      value: _vm.empleado.numero_credito
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.empleado, "numero_credito", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Numero de Credito")))])])]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-1 form-control-label",
    attrs: {
      "for": "puesto_id"
    }
  }, [_vm._v("Puesto")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4"
  }, [_c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    attrs: {
      options: _vm.list_puestos,
      "data-vv-name": "puesto",
      label: "nombre"
    },
    model: {
      value: _vm.empleado.puesto_id,
      callback: function callback($$v) {
        _vm.$set(_vm.empleado, "puesto_id", $$v);
      },
      expression: "empleado.puesto_id"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("puesto_id")))])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2",
    attrs: {
      "for": "text-input"
    }
  }, [_vm._v("Ubicación de planta")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.empleado.ubicacion_id,
      expression: "empleado.ubicacion_id"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "excluded:0",
      expression: "'excluded:0'"
    }],
    staticClass: "form-control",
    attrs: {
      id: "ubicacion_id",
      name: "ubicacion_id",
      "data-toggle": "tooltip",
      title: "Selecciona la ubicación del empleado",
      "data-vv-as": "Ubicacion"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.empleado, "ubicacion_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, _vm._l(_vm.list_ubicaciones, function (item) {
    return _c("option", {
      key: item.id,
      domProps: {
        value: item.id
      }
    }, [_vm._v(_vm._s(item.nombre))]);
  }), 0), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("ubicacion_id")))])]), _vm._v(" "), _c("label", {
    staticClass: "col-md-1",
    attrs: {
      "for": "text-input"
    }
  }, [_vm._v("Empresa")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.empleado.id_checador,
      expression: "empleado.id_checador"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    attrs: {
      "data-vv-name": "empresa"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.empleado, "id_checador", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
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
  }, [_vm._v("CSCT Quincenal")])]), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("empresa")))])])])]), _vm._v(" "), _c("div", {
    ref: "finAlta",
    staticClass: "modal-footer"
  }, [_vm.tipoAccion == 1 ? [_c("button", {
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
  }), _vm._v(" Guardar\r\n            ")])] : _vm._e(), _vm._v(" "), _vm.tipoAccion == 2 ? [_c("button", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.empleado_activo,
      expression: "empleado_activo"
    }],
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
  }), _vm._v(" Actualizar\r\n            ")])] : _vm._e()], 2)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/Contactos.vue?vue&type=template&id=d84ac60a":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/Contactos.vue?vue&type=template&id=d84ac60a ***!
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
  return _c("main", [_c("vue-element-loading", {
    attrs: {
      active: _vm.isGuardar_loading
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-6"
  }, [_c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label",
    attrs: {
      "for": "correo_electronico"
    }
  }, [_vm._v("Correo electrónico")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-9"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required|max:60",
      expression: "'required|max:60'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.contacto.correo_electronico,
      expression: "contacto.correo_electronico"
    }],
    staticClass: "form-control",
    attrs: {
      type: "email",
      size: "60",
      name: "correo_electronico",
      placeholder: "Correo electrónico",
      autocomplete: "off",
      id: "correo_electronico",
      "data-vv-as": "Correo electronico"
    },
    domProps: {
      value: _vm.contacto.correo_electronico
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.contacto, "correo_electronico", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("correo_electronico")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label",
    attrs: {
      "for": "tel_celular"
    }
  }, [_vm._v("Teléfono celular")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-9"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required|numeric|max:10",
      expression: "'required|numeric|max:10'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.contacto.tel_celular,
      expression: "contacto.tel_celular"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      minlength: "10",
      maxlength: "10",
      name: "tel_celular",
      placeholder: "Tel. celular",
      autocomplete: "off",
      id: "tel_celular",
      "data-vv-as": "Tel. celular"
    },
    domProps: {
      value: _vm.contacto.tel_celular
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.contacto, "tel_celular", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("tel_celular")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label",
    attrs: {
      "for": "tel_casa"
    }
  }, [_vm._v("Teléfono casa")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-9"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required|max:13",
      expression: "'required|max:13'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.contacto.tel_casa,
      expression: "contacto.tel_casa"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      minlength: "10",
      maxlength: "10",
      name: "tel_casa",
      placeholder: "Tel. casa",
      autocomplete: "off",
      id: "tel_casa",
      "data-vv-as": "Tel. casa"
    },
    domProps: {
      value: _vm.contacto.tel_casa
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.contacto, "tel_casa", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("tel_casa")))])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label",
    attrs: {
      "for": "contacto_emergencia"
    }
  }, [_vm._v("Contacto emergencia")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-9"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required|max:50",
      expression: "'required|max:50'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.contacto.contacto_emergencia,
      expression: "contacto.contacto_emergencia"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "contacto_emergencia",
      placeholder: "Contacto emergencia",
      autocomplete: "off",
      id: "contacto_emergencia",
      "data-vv-as": "Contacto emergencia"
    },
    domProps: {
      value: _vm.contacto.contacto_emergencia
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.contacto, "contacto_emergencia", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("contacto_emergencia")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label",
    attrs: {
      "for": "tel_emergencia"
    }
  }, [_vm._v("Telefono emergencia")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-9"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required|numeric",
      expression: "'required|numeric'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.contacto.tel_emergencia,
      expression: "contacto.tel_emergencia"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      minlength: "10",
      maxlength: "10",
      name: "tel_emergencia",
      placeholder: "Tel. emergencia",
      autocomplete: "off",
      id: "tel_emergencia",
      "data-vv-as": "Tel. emergencia"
    },
    domProps: {
      value: _vm.contacto.tel_emergencia
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.contacto, "tel_emergencia", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("tel_emergencia")))])])])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("button", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.PermisosCrud.Update && _vm.empleado_activo,
      expression: "PermisosCrud.Update && empleado_activo"
    }],
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.GuardarContacto();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Actualizar\r\n        ")])])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/Contratos2.vue?vue&type=template&id=102f5e58":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/Contratos2.vue?vue&type=template&id=102f5e58 ***!
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
  return _c("main", [_c("div", [_c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.tipoCard == 2,
      expression: "tipoCard==2"
    }],
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header bg-white"
  }, [_c("button", {
    staticClass: "btn btn-dark float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.AbrirModalContrato(true);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus mr-1"
  }), _vm._v("Nuevo\r\n                ")])]), _vm._v(" "), _c("div", {}, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isObtenerContratosLoading
    }
  }), _vm._v(" "), _c("v-client-table", {
    attrs: {
      columns: _vm.columns_contratos,
      data: _vm.list_contratos,
      options: _vm.options_contratos
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
          staticClass: "fas fa-grip-horizontal mr-1"
        }), _vm._v("Acciones\r\n                                ")]), _vm._v(" "), _c("div", {
          staticClass: "dropdown-menu",
          attrs: {
            "aria-labelledby": "btnGroupDrop1"
          }
        }, [props.row.condicion ? [_c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.AbrirModalContrato(false, props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-edit mr-1"
        }), _vm._v("Actualizar Contrato\r\n                                        ")]), _vm._v(" "), _c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.DesactivarContrato(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-times"
        }), _vm._v(" Finalizar Contrato\r\n                                        ")])] : _vm._e()], 2)])])];
      }
    }, {
      key: "asd",
      fn: function fn(props) {
        return [_c("button", {
          staticClass: "btn btn-outline-dark",
          on: {
            click: function click($event) {
              return _vm.DescargarNuevoContrato(props.row.id);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-file-pdf"
        }), _vm._v(" "), _c("i", {
          staticClass: "fas fa-download"
        })])];
      }
    }, {
      key: "condicion",
      fn: function fn(props) {
        return [props.row.condicion ? [_c("button", {
          staticClass: "btn btn-outline-success",
          attrs: {
            type: "button"
          }
        }, [_vm._v("Activo")])] : [_c("button", {
          staticClass: "btn btn-outline-danger",
          attrs: {
            type: "button"
          }
        }, [_vm._v("\r\n                                " + _vm._s(props.row.motivo_fin) + "\r\n                            ")])]];
      }
    }])
  })], 1)]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.tipoCard == 3,
      expression: "tipoCard==3"
    }],
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header bg-white border-0 mb-3"
  }, [_c("span", {
    staticClass: "h4"
  }, [_vm._v(_vm._s(_vm.tituloModal))]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-secondary float-sm-right mr-1",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.CerrarModalContrato();
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-arrow-left mr-1"
  }), _vm._v("Regresar\r\n                ")])]), _vm._v(" "), _c("vue-element-loading", {
    attrs: {
      active: _vm.isGuardaContrato_loading
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "container-fluid",
    staticStyle: {
      "min-height": "80vh"
    }
  }, [_c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2 form-control-label"
  }, [_vm._v("Proyecto")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4"
  }, [_c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    attrs: {
      options: _vm.list_proyectos,
      label: "nombre_corto",
      "data-vv-name": "Proyecto"
    },
    model: {
      value: _vm.contrato.proyecto,
      callback: function callback($$v) {
        _vm.$set(_vm.contrato, "proyecto", $$v);
      },
      expression: "contrato.proyecto"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Proyecto")))])], 1), _vm._v(" "), _c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Tipo de Contrato")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.contrato.tipo_contrato_id,
      expression: "contrato.tipo_contrato_id"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "excluded:0",
      expression: "'excluded:0'"
    }],
    staticClass: "form-control",
    attrs: {
      id: "tipo_contrato_id",
      name: "tipo_contrato_id",
      "data-vv-as": "Tipo de Contrato"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.contrato, "tipo_contrato_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, _vm._l(_vm.list_tiposcontato, function (item) {
    return _c("option", {
      key: item.id,
      domProps: {
        value: item.id
      }
    }, [_vm._v(_vm._s(item.nombre))]);
  }), 0), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Tipo de Contrato")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2 form-control-label",
    attrs: {
      "for": "tipo_nomina_id"
    }
  }, [_vm._v("Tipo de Nómina")]), _vm._v(" "), _c("div", {
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
      value: _vm.contrato.nomina,
      expression: "contrato.nomina"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      disabled: "",
      readonly: "",
      "data-vv-name": "Tipo de Nómina"
    },
    domProps: {
      value: _vm.contrato.nomina
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.contrato, "nomina", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Tipo de Nómina")))])]), _vm._v(" "), _c("label", {
    staticClass: "col-md-3 form-control-label",
    attrs: {
      "for": "horario_id"
    }
  }, [_vm._v("Horario de Trabajo")]), _vm._v(" "), _c("div", {
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
      value: _vm.contrato.horario_id,
      expression: "contrato.horario_id"
    }],
    staticClass: "form-control",
    attrs: {
      id: "horario_id",
      name: "horario_id",
      "data-vv-name": "Horario de Trabajo"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.contrato, "horario_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, _vm._l(_vm.list_horarios, function (item) {
    return _c("option", {
      key: item.id,
      domProps: {
        value: item.id
      }
    }, [_vm._v(_vm._s(item.nombre))]);
  }), 0), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Horario de Trabajo")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2"
  }, [_vm._v("Inicio de Contrato")]), _vm._v(" "), _c("div", {
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
      value: _vm.contrato.fecha_ingreso,
      expression: "contrato.fecha_ingreso"
    }],
    staticClass: "form-control disabled",
    attrs: {
      disabled: "",
      readonly: "",
      type: "date",
      name: "fecha_ingreso",
      "data-vv-name": "Fecha de Inicio"
    },
    domProps: {
      value: _vm.contrato.fecha_ingreso
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.contrato, "fecha_ingreso", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Fecha de Inicio")))])]), _vm._v(" "), _c("label", {
    staticClass: "col-md-3",
    attrs: {
      "for": "text-input"
    }
  }, [_vm._v("Fin de Contrato")]), _vm._v(" "), _c("div", {
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
      value: _vm.contrato.fecha_fin,
      expression: "contrato.fecha_fin"
    }],
    staticClass: "form-control",
    attrs: {
      id: "fechafin",
      type: "date",
      name: "fecha_fin",
      "data-vv-name": "Fecha de Fin"
    },
    domProps: {
      value: _vm.contrato.fecha_fin
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.contrato, "fecha_fin", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Fecha de Fin")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2 form-control-label"
  }, [_vm._v("Puesto")]), _vm._v(" "), _c("div", {
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
      value: _vm.contrato.puesto,
      expression: "contrato.puesto"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      disabled: "",
      readonly: "",
      "data-vv-name": "Puesto"
    },
    domProps: {
      value: _vm.contrato.puesto
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.contrato, "puesto", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Puesto")))])]), _vm._v(" "), _c("label", {
    staticClass: "col-md-3 form-control-label",
    attrs: {
      "for": "tipo_ubicacion_id"
    }
  }, [_vm._v("Ubicación")]), _vm._v(" "), _c("div", {
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
      value: _vm.contrato.ubicacion,
      expression: "contrato.ubicacion"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      disabled: "",
      readonly: "",
      "data-vv-name": "Ubicación"
    },
    domProps: {
      value: _vm.contrato.ubicacion
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.contrato, "ubicacion", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Ubicación")))])])]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("sueldo-2", {
    ref: "sueldo2"
  }), _vm._v(" "), _c("br"), _vm._v(" "), _c("hr", {
    staticClass: "mx-3"
  }), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("div", {
    staticClass: "col-6"
  }, [_c("label", {
    staticClass: "form-control-label col-3"
  }, [_vm._v("Testigo 1")]), _vm._v(" "), _c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "col",
    attrs: {
      options: _vm.list_empleados_testigos,
      "data-vv-name": "Testigo 1",
      label: "nombre_completo"
    },
    model: {
      value: _vm.testigo1,
      callback: function callback($$v) {
        _vm.testigo1 = $$v;
      },
      expression: "testigo1"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Testigo 1")))])], 1), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("label", {
    staticClass: "form-control-label col-3"
  }, [_vm._v("Testigo 2")]), _vm._v(" "), _c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "col",
    attrs: {
      options: _vm.list_empleados_testigos,
      "data-vv-name": "Testigo 2",
      label: "nombre_completo"
    },
    model: {
      value: _vm.testigo2,
      callback: function callback($$v) {
        _vm.testigo2 = $$v;
      },
      expression: "testigo2"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Testigo 2")))])], 1)]), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "float-sm-right"
  }, [_c("button", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.tipoAccionContrato == 1,
      expression: "tipoAccionContrato==1"
    }],
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.GuardarContrato(true);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save mr-1"
  }), _vm._v("Guardar")]), _vm._v(" "), _c("button", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.tipoAccionContrato == 2,
      expression: "tipoAccionContrato==2"
    }],
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.GuardarContrato();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save mr-1"
  }), _vm._v("Actualizar")])]), _vm._v(" "), _c("br"), _vm._v(" "), _c("br")], 1)], 1)])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/Cumpleanios.vue?vue&type=template&id=eeb8002e":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/Cumpleanios.vue?vue&type=template&id=eeb8002e ***!
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
  }, [_c("div", {}, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("div", {
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
  }, [_vm._v("\r\n                        Mes\r\n                    ")]), _vm._v(" "), _c("div", {
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
        return _vm.descargar(0);
      }
    }
  }, [_vm._v("Actual")]), _vm._v(" "), _c("button", {
    staticClass: "dropdown-item",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.descargar(1);
      }
    }
  }, [_vm._v("Siguiente")])])])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("v-client-table", {
    ref: "myTable",
    attrs: {
      columns: _vm.columns,
      data: _vm.tableData,
      options: _vm.options
    },
    scopedSlots: _vm._u([{
      key: "fech_nac",
      fn: function fn(props) {
        return [props.row.fech_nac ? [_c("button", {
          staticClass: "btn btn-outline-success",
          attrs: {
            type: "button"
          }
        }, [_vm._v(_vm._s(props.row.fech_nac))])] : _vm._e()];
      }
    }])
  })], 1)])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/Datos-ban-emp.vue?vue&type=template&id=48a92922":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/Datos-ban-emp.vue?vue&type=template&id=48a92922 ***!
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
  return _c("main", [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("i", {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" DATOS BANCARIOS\r\n            "), _c("button", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.PermisosCrud.Create && _vm.empleado_activo,
      expression: "PermisosCrud.Create && empleado_activo"
    }],
    staticClass: "btn btn-dark float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.AbrirModalDatosBancariosEmpleado(true);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  }), _vm._v(" Nuevo\r\n            ")])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isObtenerdatosbancariosempleado_loading
    }
  }), _vm._v(" "), _c("v-client-table", {
    attrs: {
      columns: _vm.columns_datosbancariosempleado,
      data: _vm.list_datosbancariosempleado,
      options: _vm.options_datosbancariosempleado
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
              return _vm.AbrirModalDatosBancariosEmpleado(false, props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-edit"
        }), _vm._v(" Actualizar\r\n                                ")]), _vm._v(" "), _c("button", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: _vm.PermisosCrud.Delete && _vm.empleado_activo,
            expression: "PermisosCrud.Delete && empleado_activo"
          }],
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.EliminarBanco(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-times"
        }), _vm._v(" Eliminar\r\n                                ")])])])])];
      }
    }])
  })], 1)]), _vm._v(" "), _vm.ver_modal_datosbancariosempleado ? _c("div", {
    staticClass: "modal fade",
    "class": {
      mostrar: _vm.ver_modal_datosbancariosempleado
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
      textContent: _vm._s(_vm.tituloModal_datosbancariosempleado)
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "close",
    attrs: {
      type: "button",
      "aria-label": "Close"
    },
    on: {
      click: function click($event) {
        return _vm.CerrarModalDatosBancariosEmpleado();
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
      active: _vm.isGuardardatosbancariosempleado_loading
    }
  }), _vm._v(" "), _c("div", [_c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Banco")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-9"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.datosbancariosempleado.banco_id,
      expression: "datosbancariosempleado.banco_id"
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
        _vm.$set(_vm.datosbancariosempleado, "banco_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, _vm._l(_vm.list_bancos_catalogo, function (b, i) {
    return _c("option", {
      key: i,
      domProps: {
        value: b.id
      }
    }, [_vm._v(_vm._s(b.nombre))]);
  }), 0)])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("No. tarjeta")]), _vm._v(" "), _c("div", {
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
      value: _vm.datosbancariosempleado.numero_tarjeta,
      expression: "datosbancariosempleado.numero_tarjeta"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      maxlength: "16",
      minlength: "12",
      "data-vv-name": "No. tarjeta",
      autocomplete: "off"
    },
    domProps: {
      value: _vm.datosbancariosempleado.numero_tarjeta
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datosbancariosempleado, "numero_tarjeta", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("No. tarjeta")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("No. cuenta")]), _vm._v(" "), _c("div", {
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
      value: _vm.datosbancariosempleado.numero_cuenta,
      expression: "datosbancariosempleado.numero_cuenta"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      maxlength: "18",
      minlength: "10",
      "data-vv-name": "No. cuenta",
      autocomplete: "off"
    },
    domProps: {
      value: _vm.datosbancariosempleado.numero_cuenta
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datosbancariosempleado, "numero_cuenta", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("No. cuenta")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Clabe")]), _vm._v(" "), _c("div", {
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
      value: _vm.datosbancariosempleado.clabe,
      expression: "datosbancariosempleado.clabe"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      maxlength: "18",
      minlength: "12",
      "data-vv-name": "Clabe",
      autocomplete: "off"
    },
    domProps: {
      value: _vm.datosbancariosempleado.clabe
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.datosbancariosempleado, "clabe", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Clabe")))])])])])], 1), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isGuardardatosbancariosempleado_loading
    }
  }), _vm._v(" "), _c("div", [_c("button", {
    staticClass: "btn btn-outline-dark",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.CerrarModalDatosBancariosEmpleado();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-window-close"
  }), _vm._v(" Cerrar\r\n                            ")]), _vm._v(" "), _vm.tipoAccion_datosbancariosempleado == 1 ? [_c("button", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.empleado_activo,
      expression: "empleado_activo"
    }],
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.RegistrarDatosBancariosEmpleado(true);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Guardar\r\n                                ")])] : _vm._e(), _vm._v(" "), _vm.tipoAccion_datosbancariosempleado == 2 ? [_c("button", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.empleado_activo,
      expression: "empleado_activo"
    }],
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.RegistrarDatosBancariosEmpleado(false);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Actualizar\r\n                                ")])] : _vm._e()], 2)], 1)])])])]) : _vm._e()]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/DatosBancarios.vue?vue&type=template&id=740e67b4":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/DatosBancarios.vue?vue&type=template&id=740e67b4 ***!
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
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.tipo_card == 1,
      expression: "tipo_card==1"
    }],
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("i", {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" Datos Bancarios\r\n                "), _c("button", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.PermisosCRUD.Download,
      expression: "PermisosCRUD.Download"
    }],
    staticClass: "btn btn-sm btn-dark float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.Descargar
    }
  }, [_c("i", {
    staticClass: "fas fa-download mr-1"
  }), _vm._v("Descargar\r\n                ")])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isObtenerEmpleados_loading
    }
  }), _vm._v(" "), _c("v-client-table", {
    attrs: {
      columns: _vm.columns_empleados,
      data: _vm.list_empleados,
      options: _vm.options_empleados
    }
  })], 1)])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/Direccion-Empleado.vue?vue&type=template&id=56a4c801":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/Direccion-Empleado.vue?vue&type=template&id=56a4c801 ***!
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
  return _c("main", [_c("button", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.empleado_activo,
      expression: "empleado_activo"
    }],
    staticClass: "btn btn-dark float-sm-right",
    attrs: {
      type: "button",
      disabled: _vm.deshabilitado == 1
    },
    on: {
      click: function click($event) {
        return _vm.abrirModal("direccion", "registrar", _vm.empleado.id);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  }), _vm._v(" Nuevo\n  ")]), _vm._v(" "), _c("vue-element-loading", {
    attrs: {
      active: _vm.isLoadingDetalle
    }
  }), _vm._v(" "), _c("v-client-table", {
    ref: "myTabledireccion",
    attrs: {
      columns: _vm.columnsdireccion,
      data: _vm.tableDatadireccion,
      options: _vm.optionsdireccion
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
        }), _vm._v(" Acciones\n          ")]), _vm._v(" "), _c("div", {
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
              return _vm.abrirModal("direccion", "actualizar", _vm.empleado.id, props.row);
            }
          }
        }, [_c("i", {
          staticClass: "icon-pencil"
        }), _vm._v("Actualizar Direccion\n      ")]), _vm._v(" "), props.row.condicion ? [_c("button", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: _vm.empleado_activo,
            expression: "empleado_activo"
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
        }), _vm._v(" Desactivar\n          ")])] : [_c("button", {
          staticClass: "btn btn-info btn-sm",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.actdesact(props.row.id, 1);
            }
          }
        }, [_c("i", {
          staticClass: "icon-check"
        }), _vm._v(" Activar\n          ")])]], 2)])])];
      }
    }, {
      key: "condicion",
      fn: function fn(props) {
        return [props.row.condicion ? [_c("button", {
          staticClass: "btn btn-outline-success",
          attrs: {
            type: "button"
          }
        }, [_vm._v("Activo")])] : [_c("button", {
          staticClass: "btn btn-outline-danger",
          attrs: {
            type: "button"
          }
        }, [_vm._v("Desactivado")])]];
      }
    }])
  }), _vm._v(" "), _c("div", {
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
      "for": "calle"
    }
  }, [_vm._v("Calle")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-9"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.direccione.calle,
      expression: "direccione.calle"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      size: "5",
      name: "calle",
      placeholder: "Calle",
      autocomplete: "off",
      id: "calle"
    },
    domProps: {
      value: _vm.direccione.calle
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.direccione, "calle", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("calle")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label",
    attrs: {
      "for": "numero_exterior"
    }
  }, [_vm._v("No. Exterior")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-9"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.direccione.numero_exterior,
      expression: "direccione.numero_exterior"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "numero_exterior",
      placeholder: "Número Exterior",
      autocomplete: "off",
      id: "numero_exterior"
    },
    domProps: {
      value: _vm.direccione.numero_exterior
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.direccione, "numero_exterior", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("numero_exterior")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label",
    attrs: {
      "for": "numero_interior"
    }
  }, [_vm._v("No. Interior")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-9"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.direccione.numero_interior,
      expression: "direccione.numero_interior"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      name: "numero_interior",
      step: "1",
      min: "0",
      placeholder: "Número Interior",
      autocomplete: "off",
      id: "numero_interior"
    },
    domProps: {
      value: _vm.direccione.numero_interior
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.direccione, "numero_interior", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("numero_interior")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label",
    attrs: {
      "for": "codigo_postal"
    }
  }, [_vm._v("Código Postal")]), _vm._v(" "), _c("div", {
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
      value: _vm.direccione.codigo_postal,
      expression: "direccione.codigo_postal"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      name: "codigo_postal",
      placeholder: "Codigo Postal",
      autocomplete: "off",
      id: "codigo_postal"
    },
    domProps: {
      value: _vm.direccione.codigo_postal
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.direccione, "codigo_postal", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("codigo_postal")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label",
    attrs: {
      "for": "localidad"
    }
  }, [_vm._v("Localidad")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-9"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.direccione.localidad,
      expression: "direccione.localidad"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "localidad",
      placeholder: "Localidad",
      autocomplete: "off",
      id: "localidad"
    },
    domProps: {
      value: _vm.direccione.localidad
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.direccione, "localidad", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("localidad")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label",
    attrs: {
      "for": "entidad_federativa"
    }
  }, [_vm._v("Entidad Federativa")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-9"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.direccione.entidad_federativa,
      expression: "direccione.entidad_federativa"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "entidad_federativa",
      placeholder: "Entidad Federativa",
      autocomplete: "off",
      id: "entidad_federativa"
    },
    domProps: {
      value: _vm.direccione.entidad_federativa
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.direccione, "entidad_federativa", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("entidad_federativa")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label",
    attrs: {
      "for": "entre_que_calles"
    }
  }, [_vm._v("Entre calles")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-9"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.direccione.entre_que_calles,
      expression: "direccione.entre_que_calles"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "entre_que_calles",
      placeholder: "Entre que calles",
      autocomplete: "off",
      id: "entre_que_calles"
    },
    domProps: {
      value: _vm.direccione.entre_que_calles
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.direccione, "entre_que_calles", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("entre_que_calles")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label",
    attrs: {
      "for": "tipo_avenida"
    }
  }, [_vm._v("Tipo de Vialidad")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-9"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.direccione.tipo_avenida,
      expression: "direccione.tipo_avenida"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "tipo_avenida",
      placeholder: "Tipo de Vialidad",
      autocomplete: "off",
      id: "tipo_avenida"
    },
    domProps: {
      value: _vm.direccione.tipo_avenida
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.direccione, "tipo_avenida", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("tipo_avenida")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label",
    attrs: {
      "for": "colonia"
    }
  }, [_vm._v("Colonia")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-9"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.direccione.colonia,
      expression: "direccione.colonia"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "colonia",
      placeholder: "Colonia",
      autocomplete: "off",
      id: "colonia"
    },
    domProps: {
      value: _vm.direccione.colonia
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.direccione, "colonia", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("colonia")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label",
    attrs: {
      "for": "municipio"
    }
  }, [_vm._v("Municipio")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-9"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.direccione.municipio,
      expression: "direccione.municipio"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "municipio",
      placeholder: "Municipio",
      autocomplete: "off",
      id: "municipio"
    },
    domProps: {
      value: _vm.direccione.municipio
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.direccione, "municipio", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("municipio")))])])])]), _vm._v(" "), _c("div", {
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
    staticClass: "fas fa-window-close"
  }), _vm._v(" Cerrar")]), _vm._v(" "), _vm.tipoAccion == 1 ? _c("button", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.empleado_activo,
      expression: "empleado_activo"
    }],
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.guardarDirecciones(1);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Guardar")]) : _vm._e(), _vm._v(" "), _vm.tipoAccion == 2 ? _c("button", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.empleado_activo,
      expression: "empleado_activo"
    }],
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.guardarDirecciones(0);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Actualizar")]) : _vm._e()], 1)])])])])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/Empleados.vue?vue&type=template&id=1be6e9ff":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/Empleados.vue?vue&type=template&id=1be6e9ff ***!
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
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.tipo_card == 1,
      expression: "tipo_card==1"
    }],
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("i", {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" Empleados\r\n                "), _c("button", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.PermisosCRUD.Create,
      expression: "PermisosCRUD.Create"
    }],
    staticClass: "btn btn-dark float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.AbrirModalEmpleado();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus mr-1"
  }), _vm._v("Nuevo\r\n                ")]), _vm._v(" "), _c("button", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.PermisosCRUD.Download,
      expression: "PermisosCRUD.Download"
    }],
    staticClass: "btn btn-dark float-sm-right mr-1",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.DescargarEmpleados();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-file-excel mr-1"
  }), _vm._v("Descargar\r\n                ")])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isObtenerEmpleados_loading
    }
  }), _vm._v(" "), _c("v-client-table", {
    attrs: {
      columns: _vm.columns_empleados,
      data: _vm.list_empleados,
      options: _vm.options_empleados
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
        })]), _vm._v(" "), _c("div", {
          staticClass: "dropdown-menu",
          attrs: {
            "aria-labelledby": "btnGroupDrop1"
          }
        }, [props.row.condicion ? [_c("button", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: _vm.PermisosCRUD.Read,
            expression: "PermisosCRUD.Read"
          }],
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.FormatoAlta(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "far fa-file-pdf"
        }), _vm._v("Formato Alta Empleado")]), _vm._v(" "), _c("button", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: _vm.PermisosCRUD.Read,
            expression: "PermisosCRUD.Read"
          }],
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.AbrirModalEmpleado(false, props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-diagnoses"
        }), _vm._v("Detalles Empleado")]), _vm._v(" "), props.row.condicion ? _c("button", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: _vm.PermisosCRUD.Delete,
            expression: "PermisosCRUD.Delete"
          }],
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.ActivarDesactivar(props.row.id, 0);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-ban"
        }), _vm._v("Desactivar")]) : _vm._e(), _vm._v(" "), _c("button", {
          staticClass: "btn btn-dark dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.DescargarQR(props.row.id);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-qrcode"
        }), _vm._v("QR")])] : [_c("button", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: _vm.PermisosCRUD.Read,
            expression: "PermisosCRUD.Read"
          }],
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.AbrirModalEmpleado(false, props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-diagnoses"
        }), _vm._v("Detalles Empleado")]), _vm._v(" "), _c("button", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: _vm.PermisosCRUD.Update,
            expression: "PermisosCRUD.Update"
          }],
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.ActivarDesactivar(props.row.id, 1);
            }
          }
        }, [_c("i", {
          staticClass: "icon-check"
        }), _vm._v("Activar\r\n                                        ")])], _vm._v(" "), _c("button", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: _vm.PermisosCRUD.Read,
            expression: "PermisosCRUD.Read"
          }],
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.VerHistorial(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-list"
        }), _vm._v("Historial")])], 2)])])];
      }
    }, {
      key: "condicion",
      fn: function fn(props) {
        return [props.row.condicion ? _c("button", {
          staticClass: "btn btn-outline-success",
          attrs: {
            type: "button"
          }
        }, [_vm._v("Activo")]) : _c("button", {
          staticClass: "btn btn-outline-danger",
          attrs: {
            type: "button"
          }
        }, [_vm._v("Baja")])];
      }
    }, {
      key: "id_checador",
      fn: function fn(props) {
        return [props.row.id_checador == 1 ? _c("button", {
          staticClass: "btn btn-outline-primary",
          attrs: {
            type: "button"
          }
        }, [_vm._v("Conserflow")]) : props.row.id_checador == 2 ? _c("button", {
          staticClass: "btn btn-outline-warning",
          attrs: {
            type: "button"
          }
        }, [_vm._v("Conserflow")]) : props.row.id_checador == 3 ? _c("button", {
          staticClass: "btn btn-outline-success",
          attrs: {
            type: "button"
          }
        }, [_vm._v("CSCT")]) : props.row.id_checador == 4 ? _c("button", {
          staticClass: "btn btn-outline-info",
          attrs: {
            type: "button"
          }
        }, [_vm._v("CSCT")]) : _c("button", {
          staticClass: "btn btn-outline-danger",
          attrs: {
            type: "button"
          }
        }, [_vm._v("No asignado")])];
      }
    }, {
      key: "c_condicion",
      fn: function fn(props) {
        return [props.row.c_condicion == 0 ? _c("button", {
          staticClass: "btn btn-secondary"
        }, [_c("i", {
          staticClass: "mr-1"
        }), _vm._v("Sin contrato\r\n                        ")]) : _vm._e(), _vm._v(" "), props.row.c_condicion == 1 ? _c("button", {
          staticClass: "btn btn-success"
        }, [_c("i", {
          staticClass: "fas fa-check mr-1"
        }), _vm._v("Activo\r\n                        ")]) : _vm._e(), _vm._v(" "), props.row.c_condicion == 2 ? _c("button", {
          staticClass: "btn btn-warning"
        }, [_c("i", {
          staticClass: "fas fa-exclamation mr-1"
        }), _vm._v("Por vencer\r\n                        ")]) : _vm._e(), _vm._v(" "), props.row.c_condicion == 3 ? _c("button", {
          staticClass: "btn btn-danger"
        }, [_c("i", {
          staticClass: "fas fa-exclamation-triangle mr-1"
        }), _vm._v("Vencido\r\n                        ")]) : _vm._e()];
      }
    }])
  })], 1)]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.tipo_card == 2,
      expression: "tipo_card==2"
    }],
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("h6", [_c("i", {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" " + _vm._s(_vm.nombre_empleado))]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-secondary float-sm-right",
    staticStyle: {
      "margin-top": "-2rem"
    },
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.Regresar();
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-arrow-left mr-1"
  }), _vm._v("Atrás\r\n                ")])]), _vm._v(" "), _c("div", {
    staticClass: "accordion"
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
  }, [_c("alta", {
    ref: "alta",
    on: {
      regresar: _vm.RegresarEmpleados
    }
  })], 1)])]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.tipoAccion == 2,
      expression: "tipoAccion==2"
    }]
  }, [_c("div", {
    ref: "collapseContratos",
    staticClass: "card"
  }, [_vm._m(1), _vm._v(" "), _c("div", {
    staticClass: "collapse",
    attrs: {
      id: "collapseContratos",
      "aria-labelledby": "headingContratos",
      "data-parent": "#accordion"
    }
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("contratos", {
    ref: "contratos"
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "card"
  }, [_vm._m(2), _vm._v(" "), _c("div", {
    staticClass: "collapse",
    attrs: {
      id: "collapseTwo",
      "aria-labelledby": "headingTwo",
      "data-parent": "#accordion"
    }
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("contacto", {
    ref: "contacto"
  })], 1)])]), _vm._v(" "), _c("div", {
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
  }, [_c("datosbancarios", {
    ref: "datosbancarios"
  })], 1)])]), _vm._v(" "), _c("div", {
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
  }, [_c("familiares", {
    ref: "familiares"
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "card"
  }, [_vm._m(5), _vm._v(" "), _c("div", {
    staticClass: "collapse",
    attrs: {
      id: "collapseSeven",
      "aria-labelledby": "headingSeven",
      "data-parent": "#accordion"
    }
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("expedientes", {
    ref: "expedientes"
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "card"
  }, [_vm._m(6), _vm._v(" "), _c("div", {
    staticClass: "collapse",
    attrs: {
      id: "collapseEight",
      "aria-labelledby": "headingEight",
      "data-parent": "#accordion"
    }
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("direccion", {
    ref: "direccion"
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "card"
  }, [_vm._m(7), _vm._v(" "), _c("div", {
    staticClass: "collapse",
    attrs: {
      id: "collapseNine",
      "aria-labelledby": "headingNine",
      "data-parent": "#accordion"
    }
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("beneficiarios", {
    ref: "beneficiarios"
  })], 1)])])])])])]), _vm._v(" "), _c("div", {
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
  }, [_vm._v("Historial de " + _vm._s(_vm.nombre_empleado))]), _vm._v(" "), _c("button", {
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
  }, [_c("table", {
    staticClass: "table table-sm"
  }, [_vm._m(8), _vm._v(" "), _c("tbody", _vm._l(_vm.list_historial, function (h, i) {
    return _c("tr", {
      key: i
    }, [_c("td", {
      attrs: {
        scope: "col"
      }
    }, [_vm._v(_vm._s(i + 1))]), _vm._v(" "), _c("td", {
      attrs: {
        scope: "col"
      }
    }, [_vm._v(_vm._s(h.curp))]), _vm._v(" "), _c("td", {
      attrs: {
        scope: "col"
      }
    }, [_vm._v(_vm._s(h.nss))]), _vm._v(" "), _c("td", {
      attrs: {
        scope: "col"
      }
    }, [_vm._v(_vm._s(h.fecha_alta == "0001-01-01" ? "N/D" : h.fecha_alta))]), _vm._v(" "), _c("td", {
      attrs: {
        scope: "col"
      }
    }, [_vm._v(_vm._s(h.fecha_baja == "0001-01-01" ? "N/D" : h.fecha_baja))]), _vm._v(" "), _c("td", {
      attrs: {
        scope: "col"
      }
    }, [_vm._v(_vm._s(h.proyecto))]), _vm._v(" "), _c("td", {
      attrs: {
        scope: "col"
      }
    }, [_vm._v(_vm._s(h.puesto))]), _vm._v(" "), _c("td", {
      attrs: {
        scope: "col"
      }
    }, [_vm._v(_vm._s(h.salario_neto))])]);
  }), 0)])]), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("button", {
    staticClass: "btn btn-outline-dark",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.CerrarHistorial();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-times mr-1"
  }), _vm._v("Cerrar\r\n                    ")])])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header bg-dark",
    attrs: {
      id: "headingOne"
    }
  }, [_c("h5", {
    staticClass: "mb-0"
  }, [_c("button", {
    staticClass: "btn btn-dark btn callout callout-light btn-lg btn-block text-left",
    attrs: {
      "data-toggle": "collapse",
      "data-target": "#collapseOne",
      "aria-expanded": "true",
      "aria-controls": "collapseOne"
    }
  }, [_vm._v("\r\n                                Datos Generales\r\n                            ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header bg-dark",
    attrs: {
      id: "headingContratos"
    }
  }, [_c("h5", {
    staticClass: "mb-0"
  }, [_c("button", {
    staticClass: "btn btn-dark btn callout callout-light btn-lg btn-block text-left",
    attrs: {
      "data-toggle": "collapse",
      "data-target": "#collapseContratos",
      "aria-expanded": "false",
      "aria-controls": "collapseContratos"
    }
  }, [_vm._v("\r\n                                    Contratos\r\n                                ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header bg-dark",
    attrs: {
      id: "headingTwo"
    }
  }, [_c("h5", {
    staticClass: "mb-0"
  }, [_c("button", {
    staticClass: "btn btn-dark btn callout callout-light btn-lg btn-block text-left",
    attrs: {
      "data-toggle": "collapse",
      "data-target": "#collapseTwo",
      "aria-expanded": "false",
      "aria-controls": "collapseTwo"
    }
  }, [_vm._v("\r\n                                    Contacto\r\n                                ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header bg-dark",
    attrs: {
      id: "headingThree"
    }
  }, [_c("h5", {
    staticClass: "mb-0"
  }, [_c("button", {
    staticClass: "btn btn-dark btn callout callout-light btn-lg btn-block text-left",
    attrs: {
      "data-toggle": "collapse",
      "data-target": "#collapseThree",
      "aria-expanded": "false",
      "aria-controls": "collapseThree"
    }
  }, [_vm._v("\r\n                                    Datos Bancarios\r\n                                ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header bg-dark",
    attrs: {
      id: "headingFour"
    }
  }, [_c("h5", {
    staticClass: "mb-0"
  }, [_c("button", {
    staticClass: "btn btn-dark btn callout callout-light btn-lg btn-block text-left",
    attrs: {
      "data-toggle": "collapse",
      "data-target": "#collapseFour",
      "aria-expanded": "false",
      "aria-controls": "collapseFour"
    }
  }, [_vm._v("\r\n                                    Familiares\r\n                                ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header bg-dark",
    attrs: {
      id: "headingSeven"
    }
  }, [_c("h5", {
    staticClass: "mb-0"
  }, [_c("button", {
    staticClass: "btn btn-dark btn callout callout-light btn-lg btn-block text-left",
    attrs: {
      "data-toggle": "collapse",
      "data-target": "#collapseSeven",
      "aria-expanded": "false",
      "aria-controls": "collapseSeven"
    }
  }, [_vm._v("\r\n                                    Expedientes\r\n                                ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header bg-dark",
    attrs: {
      id: "headingEight"
    }
  }, [_c("h5", {
    staticClass: "mb-0"
  }, [_c("button", {
    staticClass: "btn btn-dark btn callout callout-light btn-lg btn-block text-left",
    attrs: {
      "data-toggle": "collapse",
      "data-target": "#collapseEight",
      "aria-expanded": "false",
      "aria-controls": "collapseEight"
    }
  }, [_vm._v("\r\n                                    Dirección\r\n                                ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header bg-dark",
    attrs: {
      id: "headingNine"
    }
  }, [_c("h5", {
    staticClass: "mb-0"
  }, [_c("button", {
    staticClass: "btn btn-dark btn callout callout-light btn-lg btn-block text-left",
    attrs: {
      "data-toggle": "collapse",
      "data-target": "#collapseNine",
      "aria-expanded": "false",
      "aria-controls": "collapseNine"
    }
  }, [_vm._v("\r\n                                    Beneficiarios\r\n                                ")])])]);
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
  }, [_vm._v("CURP")]), _vm._v(" "), _c("th", {
    attrs: {
      scope: "col"
    }
  }, [_vm._v("NSS")]), _vm._v(" "), _c("th", {
    attrs: {
      scope: "col"
    }
  }, [_vm._v("Fecha Alta")]), _vm._v(" "), _c("th", {
    attrs: {
      scope: "col"
    }
  }, [_vm._v("Fecha Baja")]), _vm._v(" "), _c("th", {
    attrs: {
      scope: "col"
    }
  }, [_vm._v("Proyecto")]), _vm._v(" "), _c("th", {
    attrs: {
      scope: "col"
    }
  }, [_vm._v("Puesto")]), _vm._v(" "), _c("th", {
    attrs: {
      scope: "col"
    }
  }, [_vm._v("Salario")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/Expedientes.vue?vue&type=template&id=08c129c3":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/Expedientes.vue?vue&type=template&id=08c129c3 ***!
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
  return _c("main", [_c("vue-element-loading", {
    attrs: {
      active: _vm.isExpedienteLoading
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label",
    attrs: {
      "for": "folio"
    }
  }, [_vm._v("Folio")]), _vm._v(" "), _c("div", {
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
      value: _vm.expediente.folio,
      expression: "expediente.folio"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "folio",
      placeholder: "Folio",
      autocomplete: "off",
      id: "folio"
    },
    domProps: {
      value: _vm.expediente.folio
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.expediente, "folio", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("folio")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("div", {
    staticClass: "col-md-4"
  }, [_c("div", {
    staticClass: "form-check checkbox"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.expediente.solicitud,
      expression: "expediente.solicitud"
    }],
    attrs: {
      value: "",
      id: "check1",
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.expediente.solicitud) ? _vm._i(_vm.expediente.solicitud, "") > -1 : _vm.expediente.solicitud
    },
    on: {
      change: function change($event) {
        var $$a = _vm.expediente.solicitud,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.expediente, "solicitud", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.expediente, "solicitud", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.expediente, "solicitud", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "check1"
    }
  }, [_vm._v("\r\n                    Solicitud\r\n                ")])]), _vm._v(" "), _c("div", {
    staticClass: "form-check checkbox"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.expediente.evaluacion_psicolaboral,
      expression: "expediente.evaluacion_psicolaboral"
    }],
    attrs: {
      value: "",
      id: "check2",
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.expediente.evaluacion_psicolaboral) ? _vm._i(_vm.expediente.evaluacion_psicolaboral, "") > -1 : _vm.expediente.evaluacion_psicolaboral
    },
    on: {
      change: function change($event) {
        var $$a = _vm.expediente.evaluacion_psicolaboral,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.expediente, "evaluacion_psicolaboral", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.expediente, "evaluacion_psicolaboral", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.expediente, "evaluacion_psicolaboral", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "check2"
    }
  }, [_vm._v("\r\n                    Evaluación Psicolaboral\r\n                ")])]), _vm._v(" "), _c("div", {
    staticClass: "form-check checkbox"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.expediente.evaluacion_hab_tecnicas,
      expression: "expediente.evaluacion_hab_tecnicas"
    }],
    attrs: {
      value: "",
      id: "check3",
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.expediente.evaluacion_hab_tecnicas) ? _vm._i(_vm.expediente.evaluacion_hab_tecnicas, "") > -1 : _vm.expediente.evaluacion_hab_tecnicas
    },
    on: {
      change: function change($event) {
        var $$a = _vm.expediente.evaluacion_hab_tecnicas,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.expediente, "evaluacion_hab_tecnicas", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.expediente, "evaluacion_hab_tecnicas", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.expediente, "evaluacion_hab_tecnicas", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "check3"
    }
  }, [_vm._v("\r\n                    Evaluación hab. técnicas\r\n                ")])]), _vm._v(" "), _c("div", {
    staticClass: "form-check checkbox"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.expediente.comprobante_domicilio,
      expression: "expediente.comprobante_domicilio"
    }],
    attrs: {
      value: "",
      id: "check4",
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.expediente.comprobante_domicilio) ? _vm._i(_vm.expediente.comprobante_domicilio, "") > -1 : _vm.expediente.comprobante_domicilio
    },
    on: {
      change: function change($event) {
        var $$a = _vm.expediente.comprobante_domicilio,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.expediente, "comprobante_domicilio", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.expediente, "comprobante_domicilio", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.expediente, "comprobante_domicilio", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "check4"
    }
  }, [_vm._v("\r\n                    Comprobante de domicilio\r\n                ")])]), _vm._v(" "), _c("div", {
    staticClass: "form-check checkbox"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.expediente.cartilla_servicio_militar,
      expression: "expediente.cartilla_servicio_militar"
    }],
    attrs: {
      value: "",
      id: "check5",
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.expediente.cartilla_servicio_militar) ? _vm._i(_vm.expediente.cartilla_servicio_militar, "") > -1 : _vm.expediente.cartilla_servicio_militar
    },
    on: {
      change: function change($event) {
        var $$a = _vm.expediente.cartilla_servicio_militar,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.expediente, "cartilla_servicio_militar", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.expediente, "cartilla_servicio_militar", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.expediente, "cartilla_servicio_militar", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "check5"
    }
  }, [_vm._v("\r\n                    Cartilla servicio militar\r\n                ")])]), _vm._v(" "), _c("div", {
    staticClass: "form-check checkbox"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.expediente.vales_resguardo,
      expression: "expediente.vales_resguardo"
    }],
    attrs: {
      value: "",
      id: "check6",
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.expediente.vales_resguardo) ? _vm._i(_vm.expediente.vales_resguardo, "") > -1 : _vm.expediente.vales_resguardo
    },
    on: {
      change: function change($event) {
        var $$a = _vm.expediente.vales_resguardo,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.expediente, "vales_resguardo", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.expediente, "vales_resguardo", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.expediente, "vales_resguardo", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "check6"
    }
  }, [_vm._v("\r\n                    Vales de resguardo\r\n                ")])]), _vm._v(" "), _c("div", {
    staticClass: "form-check checkbox"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.expediente.comprobante_estudios,
      expression: "expediente.comprobante_estudios"
    }],
    attrs: {
      value: "",
      id: "check7",
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.expediente.comprobante_estudios) ? _vm._i(_vm.expediente.comprobante_estudios, "") > -1 : _vm.expediente.comprobante_estudios
    },
    on: {
      change: function change($event) {
        var $$a = _vm.expediente.comprobante_estudios,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.expediente, "comprobante_estudios", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.expediente, "comprobante_estudios", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.expediente, "comprobante_estudios", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "check7"
    }
  }, [_vm._v("\r\n                    Comprobante de estudios\r\n                ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4"
  }, [_c("div", {
    staticClass: "form-check checkbox"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.expediente.foto,
      expression: "expediente.foto"
    }],
    attrs: {
      value: "",
      id: "check8",
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.expediente.foto) ? _vm._i(_vm.expediente.foto, "") > -1 : _vm.expediente.foto
    },
    on: {
      change: function change($event) {
        var $$a = _vm.expediente.foto,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.expediente, "foto", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.expediente, "foto", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.expediente, "foto", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "check8"
    }
  }, [_vm._v("\r\n                    Foto\r\n                ")])]), _vm._v(" "), _c("div", {
    staticClass: "form-check checkbox"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.expediente.acta_nacimiento,
      expression: "expediente.acta_nacimiento"
    }],
    attrs: {
      value: "",
      id: "check9",
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.expediente.acta_nacimiento) ? _vm._i(_vm.expediente.acta_nacimiento, "") > -1 : _vm.expediente.acta_nacimiento
    },
    on: {
      change: function change($event) {
        var $$a = _vm.expediente.acta_nacimiento,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.expediente, "acta_nacimiento", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.expediente, "acta_nacimiento", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.expediente, "acta_nacimiento", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "check9"
    }
  }, [_vm._v("\r\n                    Acta de nacimiento\r\n                ")])]), _vm._v(" "), _c("div", {
    staticClass: "form-check checkbox"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.expediente.credencial_elector,
      expression: "expediente.credencial_elector"
    }],
    attrs: {
      value: "",
      id: "check10",
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.expediente.credencial_elector) ? _vm._i(_vm.expediente.credencial_elector, "") > -1 : _vm.expediente.credencial_elector
    },
    on: {
      change: function change($event) {
        var $$a = _vm.expediente.credencial_elector,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.expediente, "credencial_elector", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.expediente, "credencial_elector", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.expediente, "credencial_elector", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "check10"
    }
  }, [_vm._v("\r\n                    Credencial de elector\r\n                ")])]), _vm._v(" "), _c("div", {
    staticClass: "form-check checkbox"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.expediente.licencia_manejo,
      expression: "expediente.licencia_manejo"
    }],
    attrs: {
      value: "",
      id: "check11",
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.expediente.licencia_manejo) ? _vm._i(_vm.expediente.licencia_manejo, "") > -1 : _vm.expediente.licencia_manejo
    },
    on: {
      change: function change($event) {
        var $$a = _vm.expediente.licencia_manejo,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.expediente, "licencia_manejo", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.expediente, "licencia_manejo", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.expediente, "licencia_manejo", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "check11"
    }
  }, [_vm._v("\r\n                    Licencia manejo\r\n                ")])]), _vm._v(" "), _c("div", {
    staticClass: "form-check checkbox"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.expediente.acta_matrimonio,
      expression: "expediente.acta_matrimonio"
    }],
    attrs: {
      value: "",
      id: "check12",
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.expediente.acta_matrimonio) ? _vm._i(_vm.expediente.acta_matrimonio, "") > -1 : _vm.expediente.acta_matrimonio
    },
    on: {
      change: function change($event) {
        var $$a = _vm.expediente.acta_matrimonio,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.expediente, "acta_matrimonio", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.expediente, "acta_matrimonio", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.expediente, "acta_matrimonio", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "check12"
    }
  }, [_vm._v("\r\n                    Acta de matrimonio\r\n                ")])]), _vm._v(" "), _c("div", {
    staticClass: "form-check checkbox"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.expediente.carta_recomendacion,
      expression: "expediente.carta_recomendacion"
    }],
    attrs: {
      value: "",
      id: "check13",
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.expediente.carta_recomendacion) ? _vm._i(_vm.expediente.carta_recomendacion, "") > -1 : _vm.expediente.carta_recomendacion
    },
    on: {
      change: function change($event) {
        var $$a = _vm.expediente.carta_recomendacion,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.expediente, "carta_recomendacion", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.expediente, "carta_recomendacion", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.expediente, "carta_recomendacion", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "check13"
    }
  }, [_vm._v("\r\n                    Carta de recomendación\r\n                ")])]), _vm._v(" "), _c("div", {
    staticClass: "form-check checkbox"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.expediente.retencion_credito_infonavit,
      expression: "expediente.retencion_credito_infonavit"
    }],
    attrs: {
      value: "",
      id: "check14",
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.expediente.retencion_credito_infonavit) ? _vm._i(_vm.expediente.retencion_credito_infonavit, "") > -1 : _vm.expediente.retencion_credito_infonavit
    },
    on: {
      change: function change($event) {
        var $$a = _vm.expediente.retencion_credito_infonavit,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.expediente, "retencion_credito_infonavit", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.expediente, "retencion_credito_infonavit", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.expediente, "retencion_credito_infonavit", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "check14"
    }
  }, [_vm._v("\r\n                    Retención crédito infonavit\r\n                ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4"
  }, [_c("div", {
    staticClass: "form-check checkbox"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.expediente.curp,
      expression: "expediente.curp"
    }],
    attrs: {
      value: "",
      id: "check15",
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.expediente.curp) ? _vm._i(_vm.expediente.curp, "") > -1 : _vm.expediente.curp
    },
    on: {
      change: function change($event) {
        var $$a = _vm.expediente.curp,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.expediente, "curp", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.expediente, "curp", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.expediente, "curp", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "check15"
    }
  }, [_vm._v("\r\n                    CURP\r\n                ")])]), _vm._v(" "), _c("div", {
    staticClass: "form-check checkbox"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.expediente.rfc,
      expression: "expediente.rfc"
    }],
    attrs: {
      value: "",
      id: "check16",
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.expediente.rfc) ? _vm._i(_vm.expediente.rfc, "") > -1 : _vm.expediente.rfc
    },
    on: {
      change: function change($event) {
        var $$a = _vm.expediente.rfc,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.expediente, "rfc", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.expediente, "rfc", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.expediente, "rfc", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "check16"
    }
  }, [_vm._v("\r\n                    RFC\r\n                ")])]), _vm._v(" "), _c("div", {
    staticClass: "form-check checkbox"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.expediente.nss_imss,
      expression: "expediente.nss_imss"
    }],
    attrs: {
      value: "",
      id: "check17",
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.expediente.nss_imss) ? _vm._i(_vm.expediente.nss_imss, "") > -1 : _vm.expediente.nss_imss
    },
    on: {
      change: function change($event) {
        var $$a = _vm.expediente.nss_imss,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.expediente, "nss_imss", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.expediente, "nss_imss", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.expediente, "nss_imss", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "check17"
    }
  }, [_vm._v("\r\n                    NSS IMSS\r\n                ")])]), _vm._v(" "), _c("div", {
    staticClass: "form-check checkbox"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.expediente.carta_infonavit,
      expression: "expediente.carta_infonavit"
    }],
    attrs: {
      value: "",
      id: "check18",
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.expediente.carta_infonavit) ? _vm._i(_vm.expediente.carta_infonavit, "") > -1 : _vm.expediente.carta_infonavit
    },
    on: {
      change: function change($event) {
        var $$a = _vm.expediente.carta_infonavit,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.expediente, "carta_infonavit", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.expediente, "carta_infonavit", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.expediente, "carta_infonavit", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "check18"
    }
  }, [_vm._v("\r\n                    Carta infonavit\r\n                ")])]), _vm._v(" "), _c("div", {
    staticClass: "form-check checkbox"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.expediente.certificado_medico,
      expression: "expediente.certificado_medico"
    }],
    attrs: {
      value: "",
      id: "check19",
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.expediente.certificado_medico) ? _vm._i(_vm.expediente.certificado_medico, "") > -1 : _vm.expediente.certificado_medico
    },
    on: {
      change: function change($event) {
        var $$a = _vm.expediente.certificado_medico,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.expediente, "certificado_medico", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.expediente, "certificado_medico", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.expediente, "certificado_medico", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "check19"
    }
  }, [_vm._v("\r\n                    Certificado médico\r\n                ")])]), _vm._v(" "), _c("div", {
    staticClass: "form-check checkbox"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.expediente.carta_no_enfermedades,
      expression: "expediente.carta_no_enfermedades"
    }],
    attrs: {
      value: "",
      id: "check20",
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.expediente.carta_no_enfermedades) ? _vm._i(_vm.expediente.carta_no_enfermedades, "") > -1 : _vm.expediente.carta_no_enfermedades
    },
    on: {
      change: function change($event) {
        var $$a = _vm.expediente.carta_no_enfermedades,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.expediente, "carta_no_enfermedades", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.expediente, "carta_no_enfermedades", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.expediente, "carta_no_enfermedades", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "check20"
    }
  }, [_vm._v("\r\n                    Carta de no enfermedades\r\n                ")])])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isExpedienteLoading
    }
  }), _vm._v(" "), _c("div", [_c("button", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.empleado_activo,
      expression: "empleado_activo"
    }],
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.GuardarExpediente();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Actualizar\r\n            ")])])], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/Resguardos.vue?vue&type=template&id=3d9a0a42":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/Resguardos.vue?vue&type=template&id=3d9a0a42 ***!
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
  return _c("div", {}, [_c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.tipo_card == 1,
      expression: "tipo_card==1"
    }],
    staticClass: "card"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {}, [_c("div", {}, [_c("v-client-table", {
    attrs: {
      columns: _vm.columns_empleados,
      data: _vm.list_empleados,
      options: _vm.options_empleados
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
              return _vm.VerResguardos(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-eye"
        }), _vm._v(" Ver Resguardos\r\n                                        ")])]], 2)])];
      }
    }])
  })], 1)])])]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.tipo_card == 2,
      expression: "tipo_card==2"
    }],
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("i", {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" Equipo de Resguardo - " + _vm._s(_vm.empleado.nombre) + "\r\n            "), _c("button", {
    staticClass: "btn btn-dark float-sm-right",
    on: {
      click: _vm.Regresar
    }
  }, [_c("i", {
    staticClass: "fas fa-arrow-left"
  }), _vm._v(" Regresar\r\n            ")])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {}, [_c("p", {
    staticClass: "h4 mb-2"
  }, [_vm._v("Departamento de TI")]), _vm._v(" "), _vm.list_equipos1.length > 0 ? _c("div", {}, [_c("v-client-table", {
    attrs: {
      columns: _vm.columns_equipos,
      data: _vm.list_equipos1,
      options: _vm.options_equipos
    }
  })], 1) : _c("div", [_vm._m(1)])]), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {}, [_c("p", {
    staticClass: "h4 mb-2"
  }, [_vm._v("Departamento de Seguridad")]), _vm._v(" "), _vm.list_seguridad.length > 0 ? _c("div", {}, [_c("v-client-table", {
    attrs: {
      columns: _vm.columns_equipos,
      data: _vm.list_seguridad,
      options: _vm.options_equipos
    }
  })], 1) : _c("div", [_vm._m(2)])]), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {}, [_c("p", {
    staticClass: "h4 mb-2"
  }, [_vm._v("Almacén")]), _vm._v(" "), _vm.list_almacen.length > 0 ? _c("div", {}, [_c("v-client-table", {
    attrs: {
      columns: _vm.columns_equipos,
      data: _vm.list_almacen,
      options: _vm.options_equipos
    }
  })], 1) : _c("div", [_vm._m(3)])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header bg-dark text-white"
  }, [_c("i", {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" Empleados - Equipo de Resguardo\r\n        ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", {
    staticClass: "bg-success h5 py-2 px-2"
  }, [_vm._v("Sin adeudos\r\n                        "), _c("i", {
    staticClass: "fas fa-check"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", {
    staticClass: "bg-success h5 py-2 px-2"
  }, [_vm._v("Sin adeudos\r\n                        "), _c("i", {
    staticClass: "fas fa-check"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", {
    staticClass: "bg-success h5 py-2 px-2"
  }, [_vm._v("Sin adeudos\r\n                        "), _c("i", {
    staticClass: "fas fa-check"
  })]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/Sueldo2.vue?vue&type=template&id=251df8d6":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/Sueldo2.vue?vue&type=template&id=251df8d6 ***!
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
  return _c("main", [_c("div", [_c("br"), _vm._v(" "), _c("h5", [_vm._v("Salario")]), _vm._v(" "), !this.nuevo ? [_c("button", {
    staticClass: "btn btn-dark float-sm-right",
    staticStyle: {
      "margin-top": "-2rem"
    },
    on: {
      click: _vm.NuevoSalario
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  })])] : _vm._e()], 2), _vm._v(" "), _c("vue-element-loading", {
    attrs: {
      active: _vm.isSueldos_loading
    }
  }), _vm._v(" "), _c("table", {
    staticClass: "table"
  }, [_c("thead", {
    staticStyle: {
      "border-top": "1px solid white"
    }
  }, [_c("tr", [_c("th", [_vm._v("SDI")]), _vm._v(" "), _c("th", [_vm._v("Salario Diario")]), _vm._v(" "), _c("th", [_vm._v("Salario " + _vm._s(_vm.tipo_nomina))]), _vm._v(" "), _c("th", [_vm._v("Fecha de Actualización")])])]), _vm._v(" "), _c("tbody", _vm._l(_vm.list_sueldos, function (s, i) {
    return _c("tr", {
      key: i
    }, [_c("td", [_c("span", {
      staticClass: "sdi",
      on: {
        click: function click($event) {
          return _vm.ActualizarSDI(s.id);
        }
      }
    }, [_vm._v("\r\n                        " + _vm._s(s.sueldo_diario_integral) + "\r\n                    ")])]), _vm._v(" "), _c("td", [_vm._v(_vm._s(s.sueldo_diario_neto))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(s.sueldo_diario_real))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(s.fecha_act))])]);
  }), 0)])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/Vacaciones.vue?vue&type=template&id=4fd267d5":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/Vacaciones.vue?vue&type=template&id=4fd267d5 ***!
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
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.tipoCardVacaionesEmpleado == 1,
      expression: "tipoCardVacaionesEmpleado==1"
    }],
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("i", {
    staticClass: "fa fa-align-justify"
  }), _vm._v("\r\n            Vacaciones de Empleados\r\n            "), _c("p", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: false,
      expression: "false"
    }]
  }, [_vm._m(0)])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_c("div", {
    staticClass: "collapse multi-collapse",
    attrs: {
      id: "collapseReporte"
    }
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "container row ml-2"
  }, [_c("div", {
    staticClass: "col-md-4"
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
  }), _vm._v(" "), _c("button", {
    staticClass: "btn btn-dark mt-2",
    on: {
      click: _vm.GenerarReporte
    }
  }, [_vm._v("Generar")])])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isObtenervacaionesempleado_loading
    }
  }), _vm._v(" "), _c("v-client-table", {
    attrs: {
      columns: _vm.columns_vacaionesempleado,
      data: _vm.list_vacaionesempleado,
      options: _vm.options_vacaionesempleado
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
              return _vm.AbrirModalVacaionesEmpleado(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-edit"
        }), _vm._v(" Registrar vacaciones\r\n                                ")]), _vm._v(" "), _c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.VerHistorial(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-list"
        }), _vm._v(" Historial de vacaciones\r\n                                ")])])])])];
      }
    }, {
      key: "dias_disponibles",
      fn: function fn(props) {
        return [props.row.dias_disponibles > 0 ? _c("span", {
          staticClass: "text-success"
        }, [_vm._v(_vm._s(props.row.dias_disponibles))]) : _c("span", {
          staticClass: "text-danger"
        }, [_vm._v(_vm._s(props.row.dias_disponibles))])];
      }
    }])
  })], 1)]), _vm._v(" "), _vm.ver_modal_vacaionesempleado ? _c("div", {
    staticClass: "modal fade",
    "class": {
      mostrar: _vm.ver_modal_vacaionesempleado
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
      textContent: _vm._s(_vm.tituloModal_vacaionesempleado)
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "close",
    attrs: {
      type: "button",
      "aria-label": "Close"
    },
    on: {
      click: function click($event) {
        return _vm.CerrarModalVacaionesEmpleado();
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
      active: _vm.isGuardarvacaionesempleado_loading
    }
  }), _vm._v(" "), _c("div", [_c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Empleado")]), _vm._v(" "), _c("div", {
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
      value: _vm.vacaionesempleado.empleado,
      expression: "vacaionesempleado.empleado"
    }],
    staticClass: "form-control",
    attrs: {
      "data-vv-name": "Empleado",
      type: "text",
      disabled: ""
    },
    domProps: {
      value: _vm.vacaionesempleado.empleado
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.vacaionesempleado, "empleado", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Empleado")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Puesto")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.vacaionesempleado.puesto,
      expression: "vacaionesempleado.puesto"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      disabled: ""
    },
    domProps: {
      value: _vm.vacaionesempleado.puesto
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.vacaionesempleado, "puesto", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.vacaionesempleado.puesto == null,
      expression: "vacaionesempleado.puesto==null"
    }],
    staticClass: "text-danger"
  }, [_vm._v("El puesto es requierido")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Fecha de ingreso")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.vacaionesempleado.fecha_ingreso,
      expression: "vacaionesempleado.fecha_ingreso"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      disabled: ""
    },
    domProps: {
      value: _vm.vacaionesempleado.fecha_ingreso
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.vacaionesempleado, "fecha_ingreso", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Periodo")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("v-select", {
    attrs: {
      label: "periodo",
      options: _vm.list_periodos
    },
    model: {
      value: _vm.periodo,
      callback: function callback($$v) {
        _vm.periodo = $$v;
      },
      expression: "periodo"
    }
  })], 1)]), _vm._v(" "), _vm.periodo ? _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Días ganados")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.periodo.dias_ganados,
      expression: "periodo.dias_ganados"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      disabled: ""
    },
    domProps: {
      value: _vm.periodo.dias_ganados
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.periodo, "dias_ganados", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Días disponibles")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.periodo.dias_disponibles,
      expression: "periodo.dias_disponibles"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      disabled: ""
    },
    domProps: {
      value: _vm.periodo.dias_disponibles
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.periodo, "dias_disponibles", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Días a tomar")]), _vm._v(" "), _c("div", {
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
      value: _vm.vacaionesempleado.dias_a_tomar,
      expression: "vacaionesempleado.dias_a_tomar"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      min: "1",
      max: "32",
      "data-vv-name": "Días a tomar"
    },
    domProps: {
      value: _vm.vacaionesempleado.dias_a_tomar
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.vacaionesempleado, "dias_a_tomar", $event.target.value);
      }, _vm.ComprobarDias]
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Días a tomar")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "form-control-label col-md-3"
  }, [_vm._v("Fecha de inicio")]), _vm._v(" "), _c("div", {
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
      value: _vm.vacaionesempleado.fecha_inicio,
      expression: "vacaionesempleado.fecha_inicio"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date",
      "data-vv-name": "Inicio"
    },
    domProps: {
      value: _vm.vacaionesempleado.fecha_inicio
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.vacaionesempleado, "fecha_inicio", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Inicio")))])]), _vm._v(" "), _c("label", {
    staticClass: "form-control-label col-md-2"
  }, [_vm._v("Fecha de fin")]), _vm._v(" "), _c("div", {
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
      value: _vm.vacaionesempleado.fecha_fin,
      expression: "vacaionesempleado.fecha_fin"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date",
      "data-vv-name": "Fin"
    },
    domProps: {
      value: _vm.vacaionesempleado.fecha_fin
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.vacaionesempleado, "fecha_fin", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Fin")))])])])])], 1), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isGuardarvacaionesempleado_loading
    }
  }), _vm._v(" "), _c("div", [_c("button", {
    staticClass: "btn btn-outline-dark",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.CerrarModalVacaionesEmpleado();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-window-close"
  }), _vm._v(" Cerrar\r\n                            ")]), _vm._v(" "), _vm.tipoAccion_vacaionesempleado == 1 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.RegistrarVacaionesEmpleado();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Guardar\r\n                            ")]) : _vm._e(), _vm._v(" "), _vm.tipoAccion_vacaionesempleado == 2 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.RegistrarVacaionesEmpleado();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Actualizar\r\n                            ")]) : _vm._e()])], 1)])])])]) : _vm._e(), _vm._v(" "), _c("div", {
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
    staticClass: "modal-dialog modal-dark",
    attrs: {
      role: "document"
    }
  }, [_c("div", {
    staticClass: "modal-content"
  }, [_c("div", [_c("div", {
    staticClass: "modal-header"
  }, [_c("h4", {
    staticClass: "modal-title"
  }, [_vm._v("Historial de vacaciones")]), _vm._v(" "), _c("button", {
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
      active: _vm.isHistorial_loading
    }
  }), _vm._v(" "), _c("h6", [_vm._v(_vm._s(_vm.historial_vacaciones_nombre))]), _vm._v(" "), _c("br"), _vm._v(" "), _c("table", {
    staticClass: "table table-sm",
    attrs: {
      width: "100%"
    }
  }, [_vm._m(1), _vm._v(" "), _c("tbody", [_vm._l(_vm.historial_vacaciones, function (h, i) {
    return [_c("tr", {
      key: "fecha_".concat(i)
    }, [_c("td", {
      attrs: {
        colspan: "4"
      }
    }, [_c("table", {
      staticClass: "table table-sm bg-white"
    }, [_c("thead", [_c("tr", [_c("td", {
      staticStyle: {
        padding: "0px"
      },
      attrs: {
        colspan: "4"
      }
    }, [_c("div", {}, [_c("p", {
      staticClass: "font-weight-bold"
    }, [_vm._v(_vm._s(h.anio))])])])])]), _vm._v(" "), _vm._l(h.fechas, function (f, j) {
      return _c("tr", {
        key: j,
        staticClass: "bg-white"
      }, [_c("td", {
        attrs: {
          width: "10%"
        }
      }, [_vm._v(_vm._s(j + 1))]), _vm._v(" "), _c("td", {
        attrs: {
          width: "30%"
        }
      }, [_vm._v(_vm._s(f.fecha_inicio))]), _vm._v(" "), _c("td", {
        attrs: {
          width: "30%"
        }
      }, [_vm._v(_vm._s(f.fecha_fin))]), _vm._v(" "), _c("td", {
        attrs: {
          width: "30%"
        }
      }, [_c("div", {
        staticClass: "text-center"
      }, [_vm._v("\r\n                                                            " + _vm._s(f.dias_tomados) + "\r\n                                                        ")])])]);
    }), _vm._v(" "), _c("tr", [_c("td"), _vm._v(" "), _c("td"), _vm._v(" "), _vm._m(2, true), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_vm._v(_vm._s(h.total_dias) + " ")])])], 2)])])];
  })], 2)])], 1), _vm._v(" "), _c("div", {
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
  }), _vm._v(" Cerrar\r\n                        ")])])])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("a", {
    staticClass: "btn btn-dark float-sm-right mx-1",
    attrs: {
      "data-toggle": "collapse",
      href: "#collapseReporte",
      role: "button",
      "aria-expanded": "false",
      "aria-controls": "collapseReporte"
    }
  }, [_vm._v("\r\n                    Reporte "), _c("i", {
    staticClass: "fas fa-file-excel"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    attrs: {
      width: "10%"
    }
  }, [_vm._v("#")]), _vm._v(" "), _c("th", {
    attrs: {
      width: "30%"
    }
  }, [_vm._v("Inicio")]), _vm._v(" "), _c("th", {
    attrs: {
      width: "30%"
    }
  }, [_vm._v("Fin")]), _vm._v(" "), _c("th", {
    attrs: {
      width: "30%"
    }
  }, [_vm._v("Días tomados")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("span", {
    staticClass: "font-weight-bold"
  }, [_vm._v("Total")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/FactoresRiesgo/FactoresRiesgo.vue?vue&type=template&id=c42038a6":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/FactoresRiesgo/FactoresRiesgo.vue?vue&type=template&id=c42038a6 ***!
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
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.tipoCardFactorRiesgo == 1,
      expression: "tipoCardFactorRiesgo==1"
    }],
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("i", {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" FACTORES DE RIESGO\r\n            "), _c("button", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.PermisosCRUD.Create,
      expression: "PermisosCRUD.Create"
    }],
    staticClass: "btn btn-dark float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.AbrirModalFactorRiesgo(true);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  }), _vm._v(" Nuevo\r\n            ")])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isObtenerfactorriesgo_loading
    }
  }), _vm._v(" "), _c("v-client-table", {
    attrs: {
      columns: _vm.columns_factorriesgo,
      data: _vm.list_factorriesgo,
      options: _vm.options_factorriesgo
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
          directives: [{
            name: "show",
            rawName: "v-show",
            value: _vm.PermisosCRUD.Upload,
            expression: "PermisosCRUD.Upload"
          }],
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.SubirDocumento(props.row.id);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-upload"
        }), _vm._v(" Subir Evidencia\r\n                                ")]), _vm._v(" "), _c("button", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: _vm.PermisosCRUD.Download,
            expression: "PermisosCRUD.Download"
          }],
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.DescargarCuestionario(props.row.id);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-download"
        }), _vm._v(" Descargar Cuestionario\r\n                                ")])])])])];
      }
    }, {
      key: "documento",
      fn: function fn(props) {
        return [_vm.PermisosCRUD.Download ? [props.row.documento == null ? _c("button", {
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
        })])] : [_c("button", {
          staticClass: "btn btn-dark"
        }, [_vm._v("N/D")])]];
      }
    }])
  })], 1)]), _vm._v(" "), _vm.ver_modal_factorriesgo ? _c("div", {
    staticClass: "modal fade",
    "class": {
      mostrar: _vm.ver_modal_factorriesgo
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
      textContent: _vm._s(_vm.tituloModal_factorriesgo)
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "close",
    attrs: {
      type: "button",
      "aria-label": "Close"
    },
    on: {
      click: function click($event) {
        return _vm.CerrarModalFactorRiesgo();
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
      active: _vm.isGuardarfactorriesgo_loading
    }
  }), _vm._v(" "), _c("div", [_c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Nombre")]), _vm._v(" "), _c("div", {
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
      options: _vm.list_empleados,
      "data-vv-name": "Nombre"
    },
    model: {
      value: _vm.factorriesgo.empleado,
      callback: function callback($$v) {
        _vm.$set(_vm.factorriesgo, "empleado", $$v);
      },
      expression: "factorriesgo.empleado"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Nombre")))])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Puesto")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-9"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.factorriesgo.empleado.puesto,
      expression: "factorriesgo.empleado.puesto"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    attrs: {
      disabled: "",
      type: "text",
      "data-vv-name": "Puesto"
    },
    domProps: {
      value: _vm.factorriesgo.empleado.puesto
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.factorriesgo.empleado, "puesto", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Puesto")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Fecha")]), _vm._v(" "), _c("div", {
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
      value: _vm.factorriesgo.fecha,
      expression: "factorriesgo.fecha"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date",
      "data-vv-name": "Fecha"
    },
    domProps: {
      value: _vm.factorriesgo.fecha
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.factorriesgo, "fecha", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Fecha")))])])])])], 1), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isGuardarfactorriesgo_loading
    }
  }), _vm._v(" "), _c("div", [_c("button", {
    staticClass: "btn btn-outline-dark",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.CerrarModalFactorRiesgo();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-window-close"
  }), _vm._v(" Cerrar\r\n                            ")]), _vm._v(" "), _vm.tipoAccion_factorriesgo == 1 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.RegistrarFactorRiesgo(true);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Guardar\r\n                            ")]) : _vm._e(), _vm._v(" "), _vm.tipoAccion_factorriesgo == 2 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.RegistrarFactorRiesgo(false);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Actualizar\r\n                            ")]) : _vm._e()])], 1)])])])]) : _vm._e()]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Familiares/Familiares.vue?vue&type=template&id=19fe948d":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Familiares/Familiares.vue?vue&type=template&id=19fe948d ***!
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
  return _c("main", [_c("button", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.empleado_activo,
      expression: "empleado_activo"
    }],
    staticClass: "btn btn-dark float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.AbrirModalFamiliares();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  }), _vm._v(" Nuevo\r\n    ")]), _vm._v(" "), _c("vue-element-loading", {
    attrs: {
      active: _vm.isObtenerFamiliares_loading
    }
  }), _vm._v(" "), _c("v-client-table", {
    ref: "myTabledireccion",
    attrs: {
      columns: _vm.columns_familiares,
      data: _vm.list_familiares,
      options: _vm.options_familiares
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
        }), _vm._v("  Acciones\r\n                    ")]), _vm._v(" "), _c("div", {
          staticClass: "dropdown-menu",
          attrs: {
            "aria-labelledby": "btnGroupDrop1"
          }
        }, [_c("button", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: _vm.empleado_activo,
            expression: "empleado_activo"
          }],
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.AbrirModalFamiliares(false, props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-edit"
        }), _vm._v(" Actualizar Familiar\r\n                        ")]), _vm._v(" "), _c("button", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: _vm.empleado_activo,
            expression: "empleado_activo"
          }],
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.EliminarFamiliar(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-times"
        }), _vm._v(" Eliminar Familiar\r\n                        ")])])])])];
      }
    }])
  }), _vm._v(" "), _c("div", {
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
      active: _vm.isGuardarFamiliares_loading
    }
  }), _vm._v(" "), _c("div", [_c("div", {
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
      value: "required|max:50",
      expression: "'required|max:50'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.familiare.nombre,
      expression: "familiare.nombre"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "Nombre",
      placeholder: "Nombre Completo",
      autocomplete: "off"
    },
    domProps: {
      value: _vm.familiare.nombre
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.familiare, "nombre", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Nombre")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label",
    attrs: {
      "for": "parentesco"
    }
  }, [_vm._v("Parentesco")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-9"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.familiare.parentesco,
      expression: "familiare.parentesco"
    }],
    staticClass: "form-control",
    attrs: {
      name: "Parentesco"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.familiare, "parentesco", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "PADRE"
    }
  }, [_vm._v("PADRE")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "MADRE"
    }
  }, [_vm._v("MADRE")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "HERMANO"
    }
  }, [_vm._v("HERMANO")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "HERMANA"
    }
  }, [_vm._v("HERMANA")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "CÓNYUGE"
    }
  }, [_vm._v("CÓNYUGE")])]), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Parentesco")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label",
    attrs: {
      "for": "Edad"
    }
  }, [_vm._v("Edad")]), _vm._v(" "), _c("div", {
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
      value: _vm.familiare.edad,
      expression: "familiare.edad"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      min: "1",
      max: "100",
      step: "1",
      name: "Edad",
      placeholder: "Edad",
      autocomplete: "off"
    },
    domProps: {
      value: _vm.familiare.edad
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.familiare, "edad", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Edad")))])])])])], 1), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isGuardarFamiliares_loading
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
    staticClass: "fas fa-window-close"
  }), _vm._v(" Cerrar")]), _vm._v(" "), _vm.tipoAccion == 1 ? _c("button", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.empleado_activo,
      expression: "empleado_activo"
    }],
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.GuardarFamiliares(true);
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
        return _vm.GuardarFamiliares(false);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Actualizar")]) : _vm._e()])], 1)])])])], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Asistencias/Asistencia.vue?vue&type=style&index=0&id=7a68c882&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Asistencias/Asistencia.vue?vue&type=style&index=0&id=7a68c882&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.table-main {\r\n    border: none;\r\n    border-right: solid 1px rgb(75, 90, 102);\r\n    border-collapse: separate;\r\n    border-spacing: 0;\r\n    font: normal 13px Arial, sans-serif;\n}\n.table-main thead th {\r\n    background-color: rgb(203, 220, 233);\r\n    border: none;\r\n    color: #336B6B;\r\n    padding: 10px;\r\n    text-align: left;\r\n    text-shadow: 1px 1px 1px #fff;\r\n    white-space: nowrap;\n}\n.table-main tbody td {\r\n    border-bottom: solid 1px rgb(75, 90, 102);\r\n    color: #333;\r\n    padding: 10px;\r\n    text-shadow: 1px 1px 1px #fff;\r\n    white-space: nowrap;\n}\n.table {\r\n    position: relative;\r\n    /* border: solid 2px; */\n}\n.table-scroll {\r\n    margin-left: 310px;\r\n    overflow-x: scroll;\r\n    overflow-y: visible;\r\n    padding-bottom: 5px;\r\n    /* width: 500px; */\r\n    /* border: solid 2px; */\n}\n.table-main .fix-col {\r\n    border-left: solid 1px rgb(75, 90, 102);\r\n    /* border-right: solid 1px rgb(75, 90, 102); */\r\n    /* border-bottom: : solid 0px */\r\n    left: 0;\r\n    word-break: break-all;\r\n    position: absolute;\r\n    top: auto;\r\n    width: 310px;\r\n    border-bottom: solid 0px;\n}\n.text-no-efect {\r\n    font-size: 15px;\r\n    text-shadow: none;\n}\n.no-autorizado {\r\n    cursor: pointer;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/ChecadorQR.vue?vue&type=style&index=0&id=4e963208&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/ChecadorQR.vue?vue&type=style&index=0&id=4e963208&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n#clock {\r\n    font-family: 'Share Tech Mono', monospace;\r\n    color: #000000;\r\n    text-align: center;\r\n    transform: translate(-50%, -50%);\r\n    color: #000000;\n}\n.time {\r\n    letter-spacing: 0.05em;\r\n    font-size: 150px;\r\n    padding: 5px 0;\n}\n.date {\r\n    letter-spacing: 0.1em;\r\n    font-size: 150px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/Sueldo2.vue?vue&type=style&index=0&id=251df8d6&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/Sueldo2.vue?vue&type=style&index=0&id=251df8d6&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.sdi {\r\n    cursor: pointer;\r\n    padding: 10px;\r\n    border: 1px solid white;\n}\n.sdi:hover {\r\n    border: 1px solid black;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/Vacaciones.vue?vue&type=style&index=0&id=4fd267d5&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/Vacaciones.vue?vue&type=style&index=0&id=4fd267d5&lang=css ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.modal-md {\r\n    width: 40%;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Asistencias/Asistencia.vue?vue&type=style&index=0&id=7a68c882&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Asistencias/Asistencia.vue?vue&type=style&index=0&id=7a68c882&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Asistencia_vue_vue_type_style_index_0_id_7a68c882_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Asistencia.vue?vue&type=style&index=0&id=7a68c882&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Asistencias/Asistencia.vue?vue&type=style&index=0&id=7a68c882&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Asistencia_vue_vue_type_style_index_0_id_7a68c882_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Asistencia_vue_vue_type_style_index_0_id_7a68c882_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/ChecadorQR.vue?vue&type=style&index=0&id=4e963208&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/ChecadorQR.vue?vue&type=style&index=0&id=4e963208&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChecadorQR_vue_vue_type_style_index_0_id_4e963208_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ChecadorQR.vue?vue&type=style&index=0&id=4e963208&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/ChecadorQR.vue?vue&type=style&index=0&id=4e963208&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChecadorQR_vue_vue_type_style_index_0_id_4e963208_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChecadorQR_vue_vue_type_style_index_0_id_4e963208_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/Sueldo2.vue?vue&type=style&index=0&id=251df8d6&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/Sueldo2.vue?vue&type=style&index=0&id=251df8d6&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sueldo2_vue_vue_type_style_index_0_id_251df8d6_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Sueldo2.vue?vue&type=style&index=0&id=251df8d6&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/Sueldo2.vue?vue&type=style&index=0&id=251df8d6&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sueldo2_vue_vue_type_style_index_0_id_251df8d6_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sueldo2_vue_vue_type_style_index_0_id_251df8d6_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/Vacaciones.vue?vue&type=style&index=0&id=4fd267d5&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/Vacaciones.vue?vue&type=style&index=0&id=4fd267d5&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Vacaciones_vue_vue_type_style_index_0_id_4fd267d5_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Vacaciones.vue?vue&type=style&index=0&id=4fd267d5&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/Vacaciones.vue?vue&type=style&index=0&id=4fd267d5&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Vacaciones_vue_vue_type_style_index_0_id_4fd267d5_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Vacaciones_vue_vue_type_style_index_0_id_4fd267d5_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/vue-digital-clock/dist/es/Clock.js":
/*!*********************************************************!*\
  !*** ./node_modules/vue-digital-clock/dist/es/Clock.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

function padZero(number) {
  if (number < 10) {
    return "0" + number;
  }
  return number;
}

var getDate = function () { return new Date(); };

var getSeconds = function () { return padZero(getDate().getSeconds()); };

var getMinutes = function () { return padZero(getDate().getMinutes()); };

var getHour = function (twelveHour) {
  var hours = getDate().getHours();
  if (twelveHour && hours > 12) {
    hours = hours - 12;
  }
  return padZero(hours);
};

var getAmPm = function () { return (getDate().getHours() > 12 ? "pm" : "am"); };

var script = {
  name: "vue-digital-clock",

  props: ["blink", "displaySeconds", "twelveHour"],

  data: function data() {
    return {
      ticker: null,
      minutes: getMinutes(),
      hours: getHour(this.twelveHour),
      seconds: getSeconds(),
      amPm: getAmPm()
    };
  },

  created: function created() {
    var this$1 = this;

    this.ticker = setInterval(function () {
      this$1.minutes = getMinutes();
      this$1.hours = getHour(this$1.twelveHour);
      this$1.seconds = getSeconds();
    }, 1000);
  },

  destroyed: function destroyed() {
    clearInterval(this.ticker);
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = normalizeComponent;

/* script */
var __vue_script__ = script;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
script.__file = "/Users/yerbue01/workspace/vue-digital-clock/src/Clock.vue";

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("time", { staticClass: "clock" }, [
    _c("span", { staticClass: "clock__hour" }, [_vm._v(_vm._s(_vm.hours))]),
    _c(
      "span",
      {
        staticClass: "clock__colon",
        style: {
          visibility: !_vm.blink || _vm.seconds % 2 === 0 ? "visible" : "hidden"
        }
      },
      [_vm._v(":")]
    ),
    _c("span", { staticClass: "clock__minutes" }, [
      _vm._v(_vm._s(_vm.minutes))
    ]),
    _vm.displaySeconds
      ? _c(
          "span",
          {
            staticClass: "clock__colon",
            style: {
              visibility:
                !_vm.blink || _vm.seconds % 2 === 0 ? "visible" : "hidden"
            }
          },
          [_vm._v(":")]
        )
      : _vm._e(),
    _vm.displaySeconds
      ? _c("span", { staticClass: "clock__seconds" }, [
          _vm._v(_vm._s(_vm.seconds))
        ])
      : _vm._e(),
    _vm.twelveHour
      ? _c("span", { staticClass: "clock__ampm" }, [_vm._v(_vm._s(_vm.amPm))])
      : _vm._e()
  ])
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = undefined;
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var Clock = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Clock);


/***/ }),

/***/ "./resources/assets/js/components/Almacen/Existencias.vue":
/*!****************************************************************!*\
  !*** ./resources/assets/js/components/Almacen/Existencias.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Existencias_vue_vue_type_template_id_f4f96362__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Existencias.vue?vue&type=template&id=f4f96362 */ "./resources/assets/js/components/Almacen/Existencias.vue?vue&type=template&id=f4f96362");
/* harmony import */ var _Existencias_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Existencias.vue?vue&type=script&lang=js */ "./resources/assets/js/components/Almacen/Existencias.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Existencias_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Existencias_vue_vue_type_template_id_f4f96362__WEBPACK_IMPORTED_MODULE_0__.render,
  _Existencias_vue_vue_type_template_id_f4f96362__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/Almacen/Existencias.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Almacen/Existencias.vue?vue&type=script&lang=js":
/*!****************************************************************************************!*\
  !*** ./resources/assets/js/components/Almacen/Existencias.vue?vue&type=script&lang=js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Existencias_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Existencias.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Almacen/Existencias.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Existencias_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Almacen/Existencias.vue?vue&type=template&id=f4f96362":
/*!**********************************************************************************************!*\
  !*** ./resources/assets/js/components/Almacen/Existencias.vue?vue&type=template&id=f4f96362 ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Existencias_vue_vue_type_template_id_f4f96362__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Existencias_vue_vue_type_template_id_f4f96362__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Existencias_vue_vue_type_template_id_f4f96362__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Existencias.vue?vue&type=template&id=f4f96362 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Almacen/Existencias.vue?vue&type=template&id=f4f96362");


/***/ }),

/***/ "./resources/assets/js/components/Almacen/Kardex.vue":
/*!***********************************************************!*\
  !*** ./resources/assets/js/components/Almacen/Kardex.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Kardex_vue_vue_type_template_id_bb5be098__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Kardex.vue?vue&type=template&id=bb5be098 */ "./resources/assets/js/components/Almacen/Kardex.vue?vue&type=template&id=bb5be098");
/* harmony import */ var _Kardex_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Kardex.vue?vue&type=script&lang=js */ "./resources/assets/js/components/Almacen/Kardex.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Kardex_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Kardex_vue_vue_type_template_id_bb5be098__WEBPACK_IMPORTED_MODULE_0__.render,
  _Kardex_vue_vue_type_template_id_bb5be098__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/Almacen/Kardex.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Almacen/Kardex.vue?vue&type=script&lang=js":
/*!***********************************************************************************!*\
  !*** ./resources/assets/js/components/Almacen/Kardex.vue?vue&type=script&lang=js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Kardex_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Kardex.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Almacen/Kardex.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Kardex_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Almacen/Kardex.vue?vue&type=template&id=bb5be098":
/*!*****************************************************************************************!*\
  !*** ./resources/assets/js/components/Almacen/Kardex.vue?vue&type=template&id=bb5be098 ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Kardex_vue_vue_type_template_id_bb5be098__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Kardex_vue_vue_type_template_id_bb5be098__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Kardex_vue_vue_type_template_id_bb5be098__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Kardex.vue?vue&type=template&id=bb5be098 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Almacen/Kardex.vue?vue&type=template&id=bb5be098");


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

/***/ "./resources/assets/js/components/RH/Asistencias/Asistencia.vue":
/*!**********************************************************************!*\
  !*** ./resources/assets/js/components/RH/Asistencias/Asistencia.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Asistencia_vue_vue_type_template_id_7a68c882__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Asistencia.vue?vue&type=template&id=7a68c882 */ "./resources/assets/js/components/RH/Asistencias/Asistencia.vue?vue&type=template&id=7a68c882");
/* harmony import */ var _Asistencia_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Asistencia.vue?vue&type=script&lang=js */ "./resources/assets/js/components/RH/Asistencias/Asistencia.vue?vue&type=script&lang=js");
/* harmony import */ var _Asistencia_vue_vue_type_style_index_0_id_7a68c882_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Asistencia.vue?vue&type=style&index=0&id=7a68c882&lang=css */ "./resources/assets/js/components/RH/Asistencias/Asistencia.vue?vue&type=style&index=0&id=7a68c882&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Asistencia_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Asistencia_vue_vue_type_template_id_7a68c882__WEBPACK_IMPORTED_MODULE_0__.render,
  _Asistencia_vue_vue_type_template_id_7a68c882__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/RH/Asistencias/Asistencia.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/RH/Asistencias/Asistencia.vue?vue&type=script&lang=js":
/*!**********************************************************************************************!*\
  !*** ./resources/assets/js/components/RH/Asistencias/Asistencia.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Asistencia_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Asistencia.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Asistencias/Asistencia.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Asistencia_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/RH/Asistencias/Asistencia.vue?vue&type=style&index=0&id=7a68c882&lang=css":
/*!******************************************************************************************************************!*\
  !*** ./resources/assets/js/components/RH/Asistencias/Asistencia.vue?vue&type=style&index=0&id=7a68c882&lang=css ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Asistencia_vue_vue_type_style_index_0_id_7a68c882_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Asistencia.vue?vue&type=style&index=0&id=7a68c882&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Asistencias/Asistencia.vue?vue&type=style&index=0&id=7a68c882&lang=css");


/***/ }),

/***/ "./resources/assets/js/components/RH/Asistencias/Asistencia.vue?vue&type=template&id=7a68c882":
/*!****************************************************************************************************!*\
  !*** ./resources/assets/js/components/RH/Asistencias/Asistencia.vue?vue&type=template&id=7a68c882 ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Asistencia_vue_vue_type_template_id_7a68c882__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Asistencia_vue_vue_type_template_id_7a68c882__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Asistencia_vue_vue_type_template_id_7a68c882__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Asistencia.vue?vue&type=template&id=7a68c882 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Asistencias/Asistencia.vue?vue&type=template&id=7a68c882");


/***/ }),

/***/ "./resources/assets/js/components/RH/Beneficiarios/Beneficiarios.vue":
/*!***************************************************************************!*\
  !*** ./resources/assets/js/components/RH/Beneficiarios/Beneficiarios.vue ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Beneficiarios_vue_vue_type_template_id_6256a9a1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Beneficiarios.vue?vue&type=template&id=6256a9a1 */ "./resources/assets/js/components/RH/Beneficiarios/Beneficiarios.vue?vue&type=template&id=6256a9a1");
/* harmony import */ var _Beneficiarios_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Beneficiarios.vue?vue&type=script&lang=js */ "./resources/assets/js/components/RH/Beneficiarios/Beneficiarios.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Beneficiarios_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Beneficiarios_vue_vue_type_template_id_6256a9a1__WEBPACK_IMPORTED_MODULE_0__.render,
  _Beneficiarios_vue_vue_type_template_id_6256a9a1__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/RH/Beneficiarios/Beneficiarios.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/RH/Beneficiarios/Beneficiarios.vue?vue&type=script&lang=js":
/*!***************************************************************************************************!*\
  !*** ./resources/assets/js/components/RH/Beneficiarios/Beneficiarios.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Beneficiarios_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Beneficiarios.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Beneficiarios/Beneficiarios.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Beneficiarios_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/RH/Beneficiarios/Beneficiarios.vue?vue&type=template&id=6256a9a1":
/*!*********************************************************************************************************!*\
  !*** ./resources/assets/js/components/RH/Beneficiarios/Beneficiarios.vue?vue&type=template&id=6256a9a1 ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Beneficiarios_vue_vue_type_template_id_6256a9a1__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Beneficiarios_vue_vue_type_template_id_6256a9a1__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Beneficiarios_vue_vue_type_template_id_6256a9a1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Beneficiarios.vue?vue&type=template&id=6256a9a1 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Beneficiarios/Beneficiarios.vue?vue&type=template&id=6256a9a1");


/***/ }),

/***/ "./resources/assets/js/components/RH/Catalogos/Bancos.vue":
/*!****************************************************************!*\
  !*** ./resources/assets/js/components/RH/Catalogos/Bancos.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Bancos_vue_vue_type_template_id_7db109dc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bancos.vue?vue&type=template&id=7db109dc */ "./resources/assets/js/components/RH/Catalogos/Bancos.vue?vue&type=template&id=7db109dc");
/* harmony import */ var _Bancos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Bancos.vue?vue&type=script&lang=js */ "./resources/assets/js/components/RH/Catalogos/Bancos.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Bancos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Bancos_vue_vue_type_template_id_7db109dc__WEBPACK_IMPORTED_MODULE_0__.render,
  _Bancos_vue_vue_type_template_id_7db109dc__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/RH/Catalogos/Bancos.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/RH/Catalogos/Bancos.vue?vue&type=script&lang=js":
/*!****************************************************************************************!*\
  !*** ./resources/assets/js/components/RH/Catalogos/Bancos.vue?vue&type=script&lang=js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bancos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Bancos.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Catalogos/Bancos.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bancos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/RH/Catalogos/Bancos.vue?vue&type=template&id=7db109dc":
/*!**********************************************************************************************!*\
  !*** ./resources/assets/js/components/RH/Catalogos/Bancos.vue?vue&type=template&id=7db109dc ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Bancos_vue_vue_type_template_id_7db109dc__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Bancos_vue_vue_type_template_id_7db109dc__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Bancos_vue_vue_type_template_id_7db109dc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Bancos.vue?vue&type=template&id=7db109dc */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Catalogos/Bancos.vue?vue&type=template&id=7db109dc");


/***/ }),

/***/ "./resources/assets/js/components/RH/Catalogos/Departamentos.vue":
/*!***********************************************************************!*\
  !*** ./resources/assets/js/components/RH/Catalogos/Departamentos.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Departamentos_vue_vue_type_template_id_35dce25b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Departamentos.vue?vue&type=template&id=35dce25b */ "./resources/assets/js/components/RH/Catalogos/Departamentos.vue?vue&type=template&id=35dce25b");
/* harmony import */ var _Departamentos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Departamentos.vue?vue&type=script&lang=js */ "./resources/assets/js/components/RH/Catalogos/Departamentos.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Departamentos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Departamentos_vue_vue_type_template_id_35dce25b__WEBPACK_IMPORTED_MODULE_0__.render,
  _Departamentos_vue_vue_type_template_id_35dce25b__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/RH/Catalogos/Departamentos.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/RH/Catalogos/Departamentos.vue?vue&type=script&lang=js":
/*!***********************************************************************************************!*\
  !*** ./resources/assets/js/components/RH/Catalogos/Departamentos.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Departamentos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Departamentos.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Catalogos/Departamentos.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Departamentos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/RH/Catalogos/Departamentos.vue?vue&type=template&id=35dce25b":
/*!*****************************************************************************************************!*\
  !*** ./resources/assets/js/components/RH/Catalogos/Departamentos.vue?vue&type=template&id=35dce25b ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Departamentos_vue_vue_type_template_id_35dce25b__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Departamentos_vue_vue_type_template_id_35dce25b__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Departamentos_vue_vue_type_template_id_35dce25b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Departamentos.vue?vue&type=template&id=35dce25b */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Catalogos/Departamentos.vue?vue&type=template&id=35dce25b");


/***/ }),

/***/ "./resources/assets/js/components/RH/Catalogos/Puesto.vue":
/*!****************************************************************!*\
  !*** ./resources/assets/js/components/RH/Catalogos/Puesto.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Puesto_vue_vue_type_template_id_1ed6e2f2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Puesto.vue?vue&type=template&id=1ed6e2f2 */ "./resources/assets/js/components/RH/Catalogos/Puesto.vue?vue&type=template&id=1ed6e2f2");
/* harmony import */ var _Puesto_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Puesto.vue?vue&type=script&lang=js */ "./resources/assets/js/components/RH/Catalogos/Puesto.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Puesto_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Puesto_vue_vue_type_template_id_1ed6e2f2__WEBPACK_IMPORTED_MODULE_0__.render,
  _Puesto_vue_vue_type_template_id_1ed6e2f2__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/RH/Catalogos/Puesto.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/RH/Catalogos/Puesto.vue?vue&type=script&lang=js":
/*!****************************************************************************************!*\
  !*** ./resources/assets/js/components/RH/Catalogos/Puesto.vue?vue&type=script&lang=js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Puesto_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Puesto.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Catalogos/Puesto.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Puesto_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/RH/Catalogos/Puesto.vue?vue&type=template&id=1ed6e2f2":
/*!**********************************************************************************************!*\
  !*** ./resources/assets/js/components/RH/Catalogos/Puesto.vue?vue&type=template&id=1ed6e2f2 ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Puesto_vue_vue_type_template_id_1ed6e2f2__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Puesto_vue_vue_type_template_id_1ed6e2f2__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Puesto_vue_vue_type_template_id_1ed6e2f2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Puesto.vue?vue&type=template&id=1ed6e2f2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Catalogos/Puesto.vue?vue&type=template&id=1ed6e2f2");


/***/ }),

/***/ "./resources/assets/js/components/RH/ChecadorQR.vue":
/*!**********************************************************!*\
  !*** ./resources/assets/js/components/RH/ChecadorQR.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ChecadorQR_vue_vue_type_template_id_4e963208__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChecadorQR.vue?vue&type=template&id=4e963208 */ "./resources/assets/js/components/RH/ChecadorQR.vue?vue&type=template&id=4e963208");
/* harmony import */ var _ChecadorQR_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChecadorQR.vue?vue&type=script&lang=js */ "./resources/assets/js/components/RH/ChecadorQR.vue?vue&type=script&lang=js");
/* harmony import */ var _ChecadorQR_vue_vue_type_style_index_0_id_4e963208_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChecadorQR.vue?vue&type=style&index=0&id=4e963208&lang=css */ "./resources/assets/js/components/RH/ChecadorQR.vue?vue&type=style&index=0&id=4e963208&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ChecadorQR_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChecadorQR_vue_vue_type_template_id_4e963208__WEBPACK_IMPORTED_MODULE_0__.render,
  _ChecadorQR_vue_vue_type_template_id_4e963208__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/RH/ChecadorQR.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/RH/ChecadorQR.vue?vue&type=script&lang=js":
/*!**********************************************************************************!*\
  !*** ./resources/assets/js/components/RH/ChecadorQR.vue?vue&type=script&lang=js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChecadorQR_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ChecadorQR.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/ChecadorQR.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChecadorQR_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/RH/ChecadorQR.vue?vue&type=style&index=0&id=4e963208&lang=css":
/*!******************************************************************************************************!*\
  !*** ./resources/assets/js/components/RH/ChecadorQR.vue?vue&type=style&index=0&id=4e963208&lang=css ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChecadorQR_vue_vue_type_style_index_0_id_4e963208_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ChecadorQR.vue?vue&type=style&index=0&id=4e963208&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/ChecadorQR.vue?vue&type=style&index=0&id=4e963208&lang=css");


/***/ }),

/***/ "./resources/assets/js/components/RH/ChecadorQR.vue?vue&type=template&id=4e963208":
/*!****************************************************************************************!*\
  !*** ./resources/assets/js/components/RH/ChecadorQR.vue?vue&type=template&id=4e963208 ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChecadorQR_vue_vue_type_template_id_4e963208__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChecadorQR_vue_vue_type_template_id_4e963208__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChecadorQR_vue_vue_type_template_id_4e963208__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ChecadorQR.vue?vue&type=template&id=4e963208 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/ChecadorQR.vue?vue&type=template&id=4e963208");


/***/ }),

/***/ "./resources/assets/js/components/RH/CuestionarioInfraestructura.vue":
/*!***************************************************************************!*\
  !*** ./resources/assets/js/components/RH/CuestionarioInfraestructura.vue ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CuestionarioInfraestructura_vue_vue_type_template_id_6dd5a68d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CuestionarioInfraestructura.vue?vue&type=template&id=6dd5a68d */ "./resources/assets/js/components/RH/CuestionarioInfraestructura.vue?vue&type=template&id=6dd5a68d");
/* harmony import */ var _CuestionarioInfraestructura_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CuestionarioInfraestructura.vue?vue&type=script&lang=js */ "./resources/assets/js/components/RH/CuestionarioInfraestructura.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CuestionarioInfraestructura_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CuestionarioInfraestructura_vue_vue_type_template_id_6dd5a68d__WEBPACK_IMPORTED_MODULE_0__.render,
  _CuestionarioInfraestructura_vue_vue_type_template_id_6dd5a68d__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/RH/CuestionarioInfraestructura.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/RH/CuestionarioInfraestructura.vue?vue&type=script&lang=js":
/*!***************************************************************************************************!*\
  !*** ./resources/assets/js/components/RH/CuestionarioInfraestructura.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CuestionarioInfraestructura_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CuestionarioInfraestructura.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/CuestionarioInfraestructura.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CuestionarioInfraestructura_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/RH/CuestionarioInfraestructura.vue?vue&type=template&id=6dd5a68d":
/*!*********************************************************************************************************!*\
  !*** ./resources/assets/js/components/RH/CuestionarioInfraestructura.vue?vue&type=template&id=6dd5a68d ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CuestionarioInfraestructura_vue_vue_type_template_id_6dd5a68d__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CuestionarioInfraestructura_vue_vue_type_template_id_6dd5a68d__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CuestionarioInfraestructura_vue_vue_type_template_id_6dd5a68d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CuestionarioInfraestructura.vue?vue&type=template&id=6dd5a68d */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/CuestionarioInfraestructura.vue?vue&type=template&id=6dd5a68d");


/***/ }),

/***/ "./resources/assets/js/components/RH/Dashboard/AniversarioEmpleados.vue":
/*!******************************************************************************!*\
  !*** ./resources/assets/js/components/RH/Dashboard/AniversarioEmpleados.vue ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AniversarioEmpleados_vue_vue_type_template_id_b08cf71c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AniversarioEmpleados.vue?vue&type=template&id=b08cf71c */ "./resources/assets/js/components/RH/Dashboard/AniversarioEmpleados.vue?vue&type=template&id=b08cf71c");
/* harmony import */ var _AniversarioEmpleados_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AniversarioEmpleados.vue?vue&type=script&lang=js */ "./resources/assets/js/components/RH/Dashboard/AniversarioEmpleados.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AniversarioEmpleados_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _AniversarioEmpleados_vue_vue_type_template_id_b08cf71c__WEBPACK_IMPORTED_MODULE_0__.render,
  _AniversarioEmpleados_vue_vue_type_template_id_b08cf71c__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/RH/Dashboard/AniversarioEmpleados.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/RH/Dashboard/AniversarioEmpleados.vue?vue&type=script&lang=js":
/*!******************************************************************************************************!*\
  !*** ./resources/assets/js/components/RH/Dashboard/AniversarioEmpleados.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AniversarioEmpleados_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AniversarioEmpleados.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Dashboard/AniversarioEmpleados.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AniversarioEmpleados_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/RH/Dashboard/AniversarioEmpleados.vue?vue&type=template&id=b08cf71c":
/*!************************************************************************************************************!*\
  !*** ./resources/assets/js/components/RH/Dashboard/AniversarioEmpleados.vue?vue&type=template&id=b08cf71c ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AniversarioEmpleados_vue_vue_type_template_id_b08cf71c__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AniversarioEmpleados_vue_vue_type_template_id_b08cf71c__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AniversarioEmpleados_vue_vue_type_template_id_b08cf71c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AniversarioEmpleados.vue?vue&type=template&id=b08cf71c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Dashboard/AniversarioEmpleados.vue?vue&type=template&id=b08cf71c");


/***/ }),

/***/ "./resources/assets/js/components/RH/Dashboard/Dashboard.vue":
/*!*******************************************************************!*\
  !*** ./resources/assets/js/components/RH/Dashboard/Dashboard.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Dashboard_vue_vue_type_template_id_6b4d7bd2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=6b4d7bd2 */ "./resources/assets/js/components/RH/Dashboard/Dashboard.vue?vue&type=template&id=6b4d7bd2");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js */ "./resources/assets/js/components/RH/Dashboard/Dashboard.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_6b4d7bd2__WEBPACK_IMPORTED_MODULE_0__.render,
  _Dashboard_vue_vue_type_template_id_6b4d7bd2__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/RH/Dashboard/Dashboard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/RH/Dashboard/Dashboard.vue?vue&type=script&lang=js":
/*!*******************************************************************************************!*\
  !*** ./resources/assets/js/components/RH/Dashboard/Dashboard.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Dashboard/Dashboard.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/RH/Dashboard/Dashboard.vue?vue&type=template&id=6b4d7bd2":
/*!*************************************************************************************************!*\
  !*** ./resources/assets/js/components/RH/Dashboard/Dashboard.vue?vue&type=template&id=6b4d7bd2 ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_6b4d7bd2__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_6b4d7bd2__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_6b4d7bd2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=template&id=6b4d7bd2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Dashboard/Dashboard.vue?vue&type=template&id=6b4d7bd2");


/***/ }),

/***/ "./resources/assets/js/components/RH/DiasFestivos.vue":
/*!************************************************************!*\
  !*** ./resources/assets/js/components/RH/DiasFestivos.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DiasFestivos_vue_vue_type_template_id_7631d1da__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DiasFestivos.vue?vue&type=template&id=7631d1da */ "./resources/assets/js/components/RH/DiasFestivos.vue?vue&type=template&id=7631d1da");
/* harmony import */ var _DiasFestivos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DiasFestivos.vue?vue&type=script&lang=js */ "./resources/assets/js/components/RH/DiasFestivos.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DiasFestivos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _DiasFestivos_vue_vue_type_template_id_7631d1da__WEBPACK_IMPORTED_MODULE_0__.render,
  _DiasFestivos_vue_vue_type_template_id_7631d1da__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/RH/DiasFestivos.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/RH/DiasFestivos.vue?vue&type=script&lang=js":
/*!************************************************************************************!*\
  !*** ./resources/assets/js/components/RH/DiasFestivos.vue?vue&type=script&lang=js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DiasFestivos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DiasFestivos.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/DiasFestivos.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DiasFestivos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/RH/DiasFestivos.vue?vue&type=template&id=7631d1da":
/*!******************************************************************************************!*\
  !*** ./resources/assets/js/components/RH/DiasFestivos.vue?vue&type=template&id=7631d1da ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DiasFestivos_vue_vue_type_template_id_7631d1da__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DiasFestivos_vue_vue_type_template_id_7631d1da__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DiasFestivos_vue_vue_type_template_id_7631d1da__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DiasFestivos.vue?vue&type=template&id=7631d1da */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/DiasFestivos.vue?vue&type=template&id=7631d1da");


/***/ }),

/***/ "./resources/assets/js/components/RH/Empleados/Alta.vue":
/*!**************************************************************!*\
  !*** ./resources/assets/js/components/RH/Empleados/Alta.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Alta_vue_vue_type_template_id_f7f2be9e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Alta.vue?vue&type=template&id=f7f2be9e */ "./resources/assets/js/components/RH/Empleados/Alta.vue?vue&type=template&id=f7f2be9e");
/* harmony import */ var _Alta_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Alta.vue?vue&type=script&lang=js */ "./resources/assets/js/components/RH/Empleados/Alta.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Alta_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Alta_vue_vue_type_template_id_f7f2be9e__WEBPACK_IMPORTED_MODULE_0__.render,
  _Alta_vue_vue_type_template_id_f7f2be9e__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/RH/Empleados/Alta.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/RH/Empleados/Alta.vue?vue&type=script&lang=js":
/*!**************************************************************************************!*\
  !*** ./resources/assets/js/components/RH/Empleados/Alta.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Alta_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Alta.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/Alta.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Alta_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/RH/Empleados/Alta.vue?vue&type=template&id=f7f2be9e":
/*!********************************************************************************************!*\
  !*** ./resources/assets/js/components/RH/Empleados/Alta.vue?vue&type=template&id=f7f2be9e ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Alta_vue_vue_type_template_id_f7f2be9e__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Alta_vue_vue_type_template_id_f7f2be9e__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Alta_vue_vue_type_template_id_f7f2be9e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Alta.vue?vue&type=template&id=f7f2be9e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/Alta.vue?vue&type=template&id=f7f2be9e");


/***/ }),

/***/ "./resources/assets/js/components/RH/Empleados/Contactos.vue":
/*!*******************************************************************!*\
  !*** ./resources/assets/js/components/RH/Empleados/Contactos.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Contactos_vue_vue_type_template_id_d84ac60a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Contactos.vue?vue&type=template&id=d84ac60a */ "./resources/assets/js/components/RH/Empleados/Contactos.vue?vue&type=template&id=d84ac60a");
/* harmony import */ var _Contactos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Contactos.vue?vue&type=script&lang=js */ "./resources/assets/js/components/RH/Empleados/Contactos.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Contactos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Contactos_vue_vue_type_template_id_d84ac60a__WEBPACK_IMPORTED_MODULE_0__.render,
  _Contactos_vue_vue_type_template_id_d84ac60a__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/RH/Empleados/Contactos.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/RH/Empleados/Contactos.vue?vue&type=script&lang=js":
/*!*******************************************************************************************!*\
  !*** ./resources/assets/js/components/RH/Empleados/Contactos.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contactos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Contactos.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/Contactos.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contactos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/RH/Empleados/Contactos.vue?vue&type=template&id=d84ac60a":
/*!*************************************************************************************************!*\
  !*** ./resources/assets/js/components/RH/Empleados/Contactos.vue?vue&type=template&id=d84ac60a ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Contactos_vue_vue_type_template_id_d84ac60a__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Contactos_vue_vue_type_template_id_d84ac60a__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Contactos_vue_vue_type_template_id_d84ac60a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Contactos.vue?vue&type=template&id=d84ac60a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/Contactos.vue?vue&type=template&id=d84ac60a");


/***/ }),

/***/ "./resources/assets/js/components/RH/Empleados/Contratos2.vue":
/*!********************************************************************!*\
  !*** ./resources/assets/js/components/RH/Empleados/Contratos2.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Contratos2_vue_vue_type_template_id_102f5e58__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Contratos2.vue?vue&type=template&id=102f5e58 */ "./resources/assets/js/components/RH/Empleados/Contratos2.vue?vue&type=template&id=102f5e58");
/* harmony import */ var _Contratos2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Contratos2.vue?vue&type=script&lang=js */ "./resources/assets/js/components/RH/Empleados/Contratos2.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Contratos2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Contratos2_vue_vue_type_template_id_102f5e58__WEBPACK_IMPORTED_MODULE_0__.render,
  _Contratos2_vue_vue_type_template_id_102f5e58__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/RH/Empleados/Contratos2.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/RH/Empleados/Contratos2.vue?vue&type=script&lang=js":
/*!********************************************************************************************!*\
  !*** ./resources/assets/js/components/RH/Empleados/Contratos2.vue?vue&type=script&lang=js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contratos2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Contratos2.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/Contratos2.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contratos2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/RH/Empleados/Contratos2.vue?vue&type=template&id=102f5e58":
/*!**************************************************************************************************!*\
  !*** ./resources/assets/js/components/RH/Empleados/Contratos2.vue?vue&type=template&id=102f5e58 ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Contratos2_vue_vue_type_template_id_102f5e58__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Contratos2_vue_vue_type_template_id_102f5e58__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Contratos2_vue_vue_type_template_id_102f5e58__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Contratos2.vue?vue&type=template&id=102f5e58 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/Contratos2.vue?vue&type=template&id=102f5e58");


/***/ }),

/***/ "./resources/assets/js/components/RH/Empleados/Cumpleanios.vue":
/*!*********************************************************************!*\
  !*** ./resources/assets/js/components/RH/Empleados/Cumpleanios.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Cumpleanios_vue_vue_type_template_id_eeb8002e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cumpleanios.vue?vue&type=template&id=eeb8002e */ "./resources/assets/js/components/RH/Empleados/Cumpleanios.vue?vue&type=template&id=eeb8002e");
/* harmony import */ var _Cumpleanios_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cumpleanios.vue?vue&type=script&lang=js */ "./resources/assets/js/components/RH/Empleados/Cumpleanios.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Cumpleanios_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Cumpleanios_vue_vue_type_template_id_eeb8002e__WEBPACK_IMPORTED_MODULE_0__.render,
  _Cumpleanios_vue_vue_type_template_id_eeb8002e__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/RH/Empleados/Cumpleanios.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/RH/Empleados/Cumpleanios.vue?vue&type=script&lang=js":
/*!*********************************************************************************************!*\
  !*** ./resources/assets/js/components/RH/Empleados/Cumpleanios.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cumpleanios_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Cumpleanios.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/Cumpleanios.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cumpleanios_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/RH/Empleados/Cumpleanios.vue?vue&type=template&id=eeb8002e":
/*!***************************************************************************************************!*\
  !*** ./resources/assets/js/components/RH/Empleados/Cumpleanios.vue?vue&type=template&id=eeb8002e ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Cumpleanios_vue_vue_type_template_id_eeb8002e__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Cumpleanios_vue_vue_type_template_id_eeb8002e__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Cumpleanios_vue_vue_type_template_id_eeb8002e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Cumpleanios.vue?vue&type=template&id=eeb8002e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/Cumpleanios.vue?vue&type=template&id=eeb8002e");


/***/ }),

/***/ "./resources/assets/js/components/RH/Empleados/Datos-ban-emp.vue":
/*!***********************************************************************!*\
  !*** ./resources/assets/js/components/RH/Empleados/Datos-ban-emp.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Datos_ban_emp_vue_vue_type_template_id_48a92922__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Datos-ban-emp.vue?vue&type=template&id=48a92922 */ "./resources/assets/js/components/RH/Empleados/Datos-ban-emp.vue?vue&type=template&id=48a92922");
/* harmony import */ var _Datos_ban_emp_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Datos-ban-emp.vue?vue&type=script&lang=js */ "./resources/assets/js/components/RH/Empleados/Datos-ban-emp.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Datos_ban_emp_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Datos_ban_emp_vue_vue_type_template_id_48a92922__WEBPACK_IMPORTED_MODULE_0__.render,
  _Datos_ban_emp_vue_vue_type_template_id_48a92922__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/RH/Empleados/Datos-ban-emp.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/RH/Empleados/Datos-ban-emp.vue?vue&type=script&lang=js":
/*!***********************************************************************************************!*\
  !*** ./resources/assets/js/components/RH/Empleados/Datos-ban-emp.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Datos_ban_emp_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Datos-ban-emp.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/Datos-ban-emp.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Datos_ban_emp_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/RH/Empleados/Datos-ban-emp.vue?vue&type=template&id=48a92922":
/*!*****************************************************************************************************!*\
  !*** ./resources/assets/js/components/RH/Empleados/Datos-ban-emp.vue?vue&type=template&id=48a92922 ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Datos_ban_emp_vue_vue_type_template_id_48a92922__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Datos_ban_emp_vue_vue_type_template_id_48a92922__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Datos_ban_emp_vue_vue_type_template_id_48a92922__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Datos-ban-emp.vue?vue&type=template&id=48a92922 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/Datos-ban-emp.vue?vue&type=template&id=48a92922");


/***/ }),

/***/ "./resources/assets/js/components/RH/Empleados/DatosBancarios.vue":
/*!************************************************************************!*\
  !*** ./resources/assets/js/components/RH/Empleados/DatosBancarios.vue ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DatosBancarios_vue_vue_type_template_id_740e67b4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DatosBancarios.vue?vue&type=template&id=740e67b4 */ "./resources/assets/js/components/RH/Empleados/DatosBancarios.vue?vue&type=template&id=740e67b4");
/* harmony import */ var _DatosBancarios_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DatosBancarios.vue?vue&type=script&lang=js */ "./resources/assets/js/components/RH/Empleados/DatosBancarios.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DatosBancarios_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _DatosBancarios_vue_vue_type_template_id_740e67b4__WEBPACK_IMPORTED_MODULE_0__.render,
  _DatosBancarios_vue_vue_type_template_id_740e67b4__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/RH/Empleados/DatosBancarios.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/RH/Empleados/DatosBancarios.vue?vue&type=script&lang=js":
/*!************************************************************************************************!*\
  !*** ./resources/assets/js/components/RH/Empleados/DatosBancarios.vue?vue&type=script&lang=js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DatosBancarios_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DatosBancarios.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/DatosBancarios.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DatosBancarios_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/RH/Empleados/DatosBancarios.vue?vue&type=template&id=740e67b4":
/*!******************************************************************************************************!*\
  !*** ./resources/assets/js/components/RH/Empleados/DatosBancarios.vue?vue&type=template&id=740e67b4 ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DatosBancarios_vue_vue_type_template_id_740e67b4__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DatosBancarios_vue_vue_type_template_id_740e67b4__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DatosBancarios_vue_vue_type_template_id_740e67b4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DatosBancarios.vue?vue&type=template&id=740e67b4 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/DatosBancarios.vue?vue&type=template&id=740e67b4");


/***/ }),

/***/ "./resources/assets/js/components/RH/Empleados/Direccion-Empleado.vue":
/*!****************************************************************************!*\
  !*** ./resources/assets/js/components/RH/Empleados/Direccion-Empleado.vue ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Direccion_Empleado_vue_vue_type_template_id_56a4c801__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Direccion-Empleado.vue?vue&type=template&id=56a4c801 */ "./resources/assets/js/components/RH/Empleados/Direccion-Empleado.vue?vue&type=template&id=56a4c801");
/* harmony import */ var _Direccion_Empleado_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Direccion-Empleado.vue?vue&type=script&lang=js */ "./resources/assets/js/components/RH/Empleados/Direccion-Empleado.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Direccion_Empleado_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Direccion_Empleado_vue_vue_type_template_id_56a4c801__WEBPACK_IMPORTED_MODULE_0__.render,
  _Direccion_Empleado_vue_vue_type_template_id_56a4c801__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/RH/Empleados/Direccion-Empleado.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/RH/Empleados/Direccion-Empleado.vue?vue&type=script&lang=js":
/*!****************************************************************************************************!*\
  !*** ./resources/assets/js/components/RH/Empleados/Direccion-Empleado.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Direccion_Empleado_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Direccion-Empleado.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/Direccion-Empleado.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Direccion_Empleado_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/RH/Empleados/Direccion-Empleado.vue?vue&type=template&id=56a4c801":
/*!**********************************************************************************************************!*\
  !*** ./resources/assets/js/components/RH/Empleados/Direccion-Empleado.vue?vue&type=template&id=56a4c801 ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Direccion_Empleado_vue_vue_type_template_id_56a4c801__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Direccion_Empleado_vue_vue_type_template_id_56a4c801__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Direccion_Empleado_vue_vue_type_template_id_56a4c801__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Direccion-Empleado.vue?vue&type=template&id=56a4c801 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/Direccion-Empleado.vue?vue&type=template&id=56a4c801");


/***/ }),

/***/ "./resources/assets/js/components/RH/Empleados/Empleados.vue":
/*!*******************************************************************!*\
  !*** ./resources/assets/js/components/RH/Empleados/Empleados.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Empleados_vue_vue_type_template_id_1be6e9ff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Empleados.vue?vue&type=template&id=1be6e9ff */ "./resources/assets/js/components/RH/Empleados/Empleados.vue?vue&type=template&id=1be6e9ff");
/* harmony import */ var _Empleados_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Empleados.vue?vue&type=script&lang=js */ "./resources/assets/js/components/RH/Empleados/Empleados.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Empleados_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Empleados_vue_vue_type_template_id_1be6e9ff__WEBPACK_IMPORTED_MODULE_0__.render,
  _Empleados_vue_vue_type_template_id_1be6e9ff__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/RH/Empleados/Empleados.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/RH/Empleados/Empleados.vue?vue&type=script&lang=js":
/*!*******************************************************************************************!*\
  !*** ./resources/assets/js/components/RH/Empleados/Empleados.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Empleados_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Empleados.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/Empleados.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Empleados_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/RH/Empleados/Empleados.vue?vue&type=template&id=1be6e9ff":
/*!*************************************************************************************************!*\
  !*** ./resources/assets/js/components/RH/Empleados/Empleados.vue?vue&type=template&id=1be6e9ff ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Empleados_vue_vue_type_template_id_1be6e9ff__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Empleados_vue_vue_type_template_id_1be6e9ff__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Empleados_vue_vue_type_template_id_1be6e9ff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Empleados.vue?vue&type=template&id=1be6e9ff */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/Empleados.vue?vue&type=template&id=1be6e9ff");


/***/ }),

/***/ "./resources/assets/js/components/RH/Empleados/Expedientes.vue":
/*!*********************************************************************!*\
  !*** ./resources/assets/js/components/RH/Empleados/Expedientes.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Expedientes_vue_vue_type_template_id_08c129c3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Expedientes.vue?vue&type=template&id=08c129c3 */ "./resources/assets/js/components/RH/Empleados/Expedientes.vue?vue&type=template&id=08c129c3");
/* harmony import */ var _Expedientes_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Expedientes.vue?vue&type=script&lang=js */ "./resources/assets/js/components/RH/Empleados/Expedientes.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Expedientes_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Expedientes_vue_vue_type_template_id_08c129c3__WEBPACK_IMPORTED_MODULE_0__.render,
  _Expedientes_vue_vue_type_template_id_08c129c3__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/RH/Empleados/Expedientes.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/RH/Empleados/Expedientes.vue?vue&type=script&lang=js":
/*!*********************************************************************************************!*\
  !*** ./resources/assets/js/components/RH/Empleados/Expedientes.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Expedientes_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Expedientes.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/Expedientes.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Expedientes_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/RH/Empleados/Expedientes.vue?vue&type=template&id=08c129c3":
/*!***************************************************************************************************!*\
  !*** ./resources/assets/js/components/RH/Empleados/Expedientes.vue?vue&type=template&id=08c129c3 ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Expedientes_vue_vue_type_template_id_08c129c3__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Expedientes_vue_vue_type_template_id_08c129c3__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Expedientes_vue_vue_type_template_id_08c129c3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Expedientes.vue?vue&type=template&id=08c129c3 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/Expedientes.vue?vue&type=template&id=08c129c3");


/***/ }),

/***/ "./resources/assets/js/components/RH/Empleados/Resguardos.vue":
/*!********************************************************************!*\
  !*** ./resources/assets/js/components/RH/Empleados/Resguardos.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Resguardos_vue_vue_type_template_id_3d9a0a42__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Resguardos.vue?vue&type=template&id=3d9a0a42 */ "./resources/assets/js/components/RH/Empleados/Resguardos.vue?vue&type=template&id=3d9a0a42");
/* harmony import */ var _Resguardos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Resguardos.vue?vue&type=script&lang=js */ "./resources/assets/js/components/RH/Empleados/Resguardos.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Resguardos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Resguardos_vue_vue_type_template_id_3d9a0a42__WEBPACK_IMPORTED_MODULE_0__.render,
  _Resguardos_vue_vue_type_template_id_3d9a0a42__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/RH/Empleados/Resguardos.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/RH/Empleados/Resguardos.vue?vue&type=script&lang=js":
/*!********************************************************************************************!*\
  !*** ./resources/assets/js/components/RH/Empleados/Resguardos.vue?vue&type=script&lang=js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Resguardos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Resguardos.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/Resguardos.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Resguardos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/RH/Empleados/Resguardos.vue?vue&type=template&id=3d9a0a42":
/*!**************************************************************************************************!*\
  !*** ./resources/assets/js/components/RH/Empleados/Resguardos.vue?vue&type=template&id=3d9a0a42 ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Resguardos_vue_vue_type_template_id_3d9a0a42__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Resguardos_vue_vue_type_template_id_3d9a0a42__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Resguardos_vue_vue_type_template_id_3d9a0a42__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Resguardos.vue?vue&type=template&id=3d9a0a42 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/Resguardos.vue?vue&type=template&id=3d9a0a42");


/***/ }),

/***/ "./resources/assets/js/components/RH/Empleados/Sueldo2.vue":
/*!*****************************************************************!*\
  !*** ./resources/assets/js/components/RH/Empleados/Sueldo2.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Sueldo2_vue_vue_type_template_id_251df8d6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sueldo2.vue?vue&type=template&id=251df8d6 */ "./resources/assets/js/components/RH/Empleados/Sueldo2.vue?vue&type=template&id=251df8d6");
/* harmony import */ var _Sueldo2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sueldo2.vue?vue&type=script&lang=js */ "./resources/assets/js/components/RH/Empleados/Sueldo2.vue?vue&type=script&lang=js");
/* harmony import */ var _Sueldo2_vue_vue_type_style_index_0_id_251df8d6_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Sueldo2.vue?vue&type=style&index=0&id=251df8d6&lang=css */ "./resources/assets/js/components/RH/Empleados/Sueldo2.vue?vue&type=style&index=0&id=251df8d6&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Sueldo2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Sueldo2_vue_vue_type_template_id_251df8d6__WEBPACK_IMPORTED_MODULE_0__.render,
  _Sueldo2_vue_vue_type_template_id_251df8d6__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/RH/Empleados/Sueldo2.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/RH/Empleados/Sueldo2.vue?vue&type=script&lang=js":
/*!*****************************************************************************************!*\
  !*** ./resources/assets/js/components/RH/Empleados/Sueldo2.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sueldo2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Sueldo2.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/Sueldo2.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sueldo2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/RH/Empleados/Sueldo2.vue?vue&type=style&index=0&id=251df8d6&lang=css":
/*!*************************************************************************************************************!*\
  !*** ./resources/assets/js/components/RH/Empleados/Sueldo2.vue?vue&type=style&index=0&id=251df8d6&lang=css ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sueldo2_vue_vue_type_style_index_0_id_251df8d6_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Sueldo2.vue?vue&type=style&index=0&id=251df8d6&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/Sueldo2.vue?vue&type=style&index=0&id=251df8d6&lang=css");


/***/ }),

/***/ "./resources/assets/js/components/RH/Empleados/Sueldo2.vue?vue&type=template&id=251df8d6":
/*!***********************************************************************************************!*\
  !*** ./resources/assets/js/components/RH/Empleados/Sueldo2.vue?vue&type=template&id=251df8d6 ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sueldo2_vue_vue_type_template_id_251df8d6__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sueldo2_vue_vue_type_template_id_251df8d6__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sueldo2_vue_vue_type_template_id_251df8d6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Sueldo2.vue?vue&type=template&id=251df8d6 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/Sueldo2.vue?vue&type=template&id=251df8d6");


/***/ }),

/***/ "./resources/assets/js/components/RH/Empleados/Vacaciones.vue":
/*!********************************************************************!*\
  !*** ./resources/assets/js/components/RH/Empleados/Vacaciones.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Vacaciones_vue_vue_type_template_id_4fd267d5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vacaciones.vue?vue&type=template&id=4fd267d5 */ "./resources/assets/js/components/RH/Empleados/Vacaciones.vue?vue&type=template&id=4fd267d5");
/* harmony import */ var _Vacaciones_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Vacaciones.vue?vue&type=script&lang=js */ "./resources/assets/js/components/RH/Empleados/Vacaciones.vue?vue&type=script&lang=js");
/* harmony import */ var _Vacaciones_vue_vue_type_style_index_0_id_4fd267d5_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Vacaciones.vue?vue&type=style&index=0&id=4fd267d5&lang=css */ "./resources/assets/js/components/RH/Empleados/Vacaciones.vue?vue&type=style&index=0&id=4fd267d5&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Vacaciones_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Vacaciones_vue_vue_type_template_id_4fd267d5__WEBPACK_IMPORTED_MODULE_0__.render,
  _Vacaciones_vue_vue_type_template_id_4fd267d5__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/RH/Empleados/Vacaciones.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/RH/Empleados/Vacaciones.vue?vue&type=script&lang=js":
/*!********************************************************************************************!*\
  !*** ./resources/assets/js/components/RH/Empleados/Vacaciones.vue?vue&type=script&lang=js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Vacaciones_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Vacaciones.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/Vacaciones.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Vacaciones_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/RH/Empleados/Vacaciones.vue?vue&type=style&index=0&id=4fd267d5&lang=css":
/*!****************************************************************************************************************!*\
  !*** ./resources/assets/js/components/RH/Empleados/Vacaciones.vue?vue&type=style&index=0&id=4fd267d5&lang=css ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Vacaciones_vue_vue_type_style_index_0_id_4fd267d5_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Vacaciones.vue?vue&type=style&index=0&id=4fd267d5&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/Vacaciones.vue?vue&type=style&index=0&id=4fd267d5&lang=css");


/***/ }),

/***/ "./resources/assets/js/components/RH/Empleados/Vacaciones.vue?vue&type=template&id=4fd267d5":
/*!**************************************************************************************************!*\
  !*** ./resources/assets/js/components/RH/Empleados/Vacaciones.vue?vue&type=template&id=4fd267d5 ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Vacaciones_vue_vue_type_template_id_4fd267d5__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Vacaciones_vue_vue_type_template_id_4fd267d5__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Vacaciones_vue_vue_type_template_id_4fd267d5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Vacaciones.vue?vue&type=template&id=4fd267d5 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Empleados/Vacaciones.vue?vue&type=template&id=4fd267d5");


/***/ }),

/***/ "./resources/assets/js/components/RH/FactoresRiesgo/FactoresRiesgo.vue":
/*!*****************************************************************************!*\
  !*** ./resources/assets/js/components/RH/FactoresRiesgo/FactoresRiesgo.vue ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FactoresRiesgo_vue_vue_type_template_id_c42038a6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FactoresRiesgo.vue?vue&type=template&id=c42038a6 */ "./resources/assets/js/components/RH/FactoresRiesgo/FactoresRiesgo.vue?vue&type=template&id=c42038a6");
/* harmony import */ var _FactoresRiesgo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FactoresRiesgo.vue?vue&type=script&lang=js */ "./resources/assets/js/components/RH/FactoresRiesgo/FactoresRiesgo.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FactoresRiesgo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _FactoresRiesgo_vue_vue_type_template_id_c42038a6__WEBPACK_IMPORTED_MODULE_0__.render,
  _FactoresRiesgo_vue_vue_type_template_id_c42038a6__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/RH/FactoresRiesgo/FactoresRiesgo.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/RH/FactoresRiesgo/FactoresRiesgo.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************!*\
  !*** ./resources/assets/js/components/RH/FactoresRiesgo/FactoresRiesgo.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactoresRiesgo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FactoresRiesgo.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/FactoresRiesgo/FactoresRiesgo.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactoresRiesgo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/RH/FactoresRiesgo/FactoresRiesgo.vue?vue&type=template&id=c42038a6":
/*!***********************************************************************************************************!*\
  !*** ./resources/assets/js/components/RH/FactoresRiesgo/FactoresRiesgo.vue?vue&type=template&id=c42038a6 ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FactoresRiesgo_vue_vue_type_template_id_c42038a6__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FactoresRiesgo_vue_vue_type_template_id_c42038a6__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FactoresRiesgo_vue_vue_type_template_id_c42038a6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FactoresRiesgo.vue?vue&type=template&id=c42038a6 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/FactoresRiesgo/FactoresRiesgo.vue?vue&type=template&id=c42038a6");


/***/ }),

/***/ "./resources/assets/js/components/RH/Familiares/Familiares.vue":
/*!*********************************************************************!*\
  !*** ./resources/assets/js/components/RH/Familiares/Familiares.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Familiares_vue_vue_type_template_id_19fe948d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Familiares.vue?vue&type=template&id=19fe948d */ "./resources/assets/js/components/RH/Familiares/Familiares.vue?vue&type=template&id=19fe948d");
/* harmony import */ var _Familiares_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Familiares.vue?vue&type=script&lang=js */ "./resources/assets/js/components/RH/Familiares/Familiares.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Familiares_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Familiares_vue_vue_type_template_id_19fe948d__WEBPACK_IMPORTED_MODULE_0__.render,
  _Familiares_vue_vue_type_template_id_19fe948d__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/RH/Familiares/Familiares.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/RH/Familiares/Familiares.vue?vue&type=script&lang=js":
/*!*********************************************************************************************!*\
  !*** ./resources/assets/js/components/RH/Familiares/Familiares.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Familiares_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Familiares.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Familiares/Familiares.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Familiares_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/RH/Familiares/Familiares.vue?vue&type=template&id=19fe948d":
/*!***************************************************************************************************!*\
  !*** ./resources/assets/js/components/RH/Familiares/Familiares.vue?vue&type=template&id=19fe948d ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Familiares_vue_vue_type_template_id_19fe948d__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Familiares_vue_vue_type_template_id_19fe948d__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Familiares_vue_vue_type_template_id_19fe948d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Familiares.vue?vue&type=template&id=19fe948d */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/RH/Familiares/Familiares.vue?vue&type=template&id=19fe948d");


/***/ })

}]);