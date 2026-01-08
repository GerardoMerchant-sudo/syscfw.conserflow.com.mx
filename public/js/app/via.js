(self["webpackChunk"] = self["webpackChunk"] || []).push([["via"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Viaticos/Solicitud/Beneficiarios.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Viaticos/Solicitud/Beneficiarios.vue?vue&type=script&lang=js ***!
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
      empresa_beneficiarios: '',
      tipo_viatico: '',
      nuevo: null,
      solicitud: {
        beneficiariosuno: '',
        datos_bancos_beneficiariosuno: '',
        clavecuentatarjetauno: '',
        claveuno: '',
        cuentauno: '',
        banco: ''
      },
      optionsvs_benficiario_uno: [],
      listaDatosBancariosuno: []
    };
  },
  watch: {
    'solicitud': {
      handler: function handler(after, before) {
        // console.log(after,'asdfgh');
        var a = [];
        a.push({
          id: after.beneficiariosuno,
          dbemp_id: after.datos_bancos_beneficiariosuno,
          tarjeta: after.clavecuentatarjetauno,
          clave: after.claveuno,
          cuenta: after.cuentauno,
          banco: after.banco
        });
        this.$emit('enviarUno', a);
      },
      deep: true
    }
  },
  methods: {
    datos: function datos() {
      // this.optionsvs_benficiario_uno = [];
      // this.optionsvs_benficiario_dos = [];
      // axios.get('/vertodosempleados').then(response =>{
      //   for (var i = 0; i < response.data.length; i++) {
      //     this.optionsvs_benficiario_uno.push({
      //       id : response.data[i].id,
      //       name : response.data[i].nombre + ' ' + response.data[i].ap_paterno + ' ' + response.data[i].ap_materno,
      //     });
      //   }
      // }).catch(error => {
      //   console.error(error);
      // })
    },
    getDatos: function getDatos(dato, dato_dos, vs_options) {
      this.quitar_uno();
      this.solicitud.beneficiariosuno = '';
      this.optionsvs_benficiario_uno = [];
      this.empresa_beneficiarios = dato;
      this.tipo_viatico = dato_dos;
      this.optionsvs_benficiario_uno = vs_options;
      // console.log(vs_options,'datocomponente');
      // this.datos();
      _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.solicitud);
    },
    buscar_uno: function buscar_uno() {
      // this.solicitud.clavecuentatarjetauno = '';
      this.listaDatosBancariosuno = [];
      var me = this;
      axios.get('/datosbanemp/' + me.solicitud.beneficiariosuno.id + '&' + me.empresa_beneficiarios + '/datosbanemp').then(function (response) {
        me.listaDatosBancariosuno = response.data;
      })["catch"](function (error) {
        // console.error(error);
      });
    },
    enviar_uno: function enviar_uno() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      this.limpiaInputs();
      var target = e == null ? 0 : e.target.selectedIndex;
      if (e.target.value != 0) {
        // this.beneficiariosuno : '',
        this.solicitud.datos_bancos_beneficiariosuno = this.listaDatosBancariosuno[e.target.selectedIndex]['id'], this.solicitud.clavecuentatarjetauno = this.listaDatosBancariosuno[e.target.selectedIndex]['numero_tarjeta'], this.solicitud.claveuno = this.listaDatosBancariosuno[e.target.selectedIndex]['clabe'], this.solicitud.cuentauno = this.listaDatosBancariosuno[e.target.selectedIndex]['numero_cuenta'], this.solicitud.banco = this.listaDatosBancariosuno[e.target.selectedIndex]['bnombre'];
      }
      // axios.get('/datosbanemp/' + this.solicitud.beneficiariosuno.id + '/datosbanemp').then(response => {
      //   this.solicitud.clavecuentatarjetauno = response.data[target].numero_tarjeta;
      // }).catch(error => {
      //   console.log(error);
      // });
      var a = [];
      a.push({
        id: this.solicitud.beneficiariosuno,
        dbemp_id: this.solicitud.datos_bancos_beneficiariosuno,
        tarjeta: this.solicitud.clavecuentatarjetauno,
        clave: this.solicitud.claveuno,
        cuenta: this.solicitud.cuentauno,
        banco: this.solicitud.banco
      });
      this.$emit('enviarUno', a);
    },
    // enviar_dos(e = null){
    //   var target = e == null ? 0 : e.target.selectedIndex;
    //   axios.get('/datosbanemp/' + this.solicitud.beneficiariosdos.id + '/datosbanemp').then(response => {
    //     this.solicitud.clavecuentatarjetados = response.data[target].numero_tarjeta;
    //   }).catch(error => {
    //     // console.log(error);
    //   });
    //   var a = [];
    //   a.push({
    //     id : this.solicitud.beneficiariosdos.id,
    //     dbemp_id : this.solicitud.datos_bancos_beneficiariosdos,
    //   });
    //   this.$emit('enviarDos', a);
    // },
    setDatos: function setDatos(data, tipo, dato) {
      var me = this;
      this.nuevo = data;
      if (data.length != 0) {
        this.tipo_viatico = tipo;
        this.empresa_beneficiarios = dato;
        if (data[0]['empleado_beneficiario_id'] == 0) {
          this.solicitud.beneficiariosuno = data[0]['beneficiario_externo'];
          this.solicitud.datos_bancos_beneficiariosuno = data[0]['banco_nombre'];
        } else {
          this.solicitud.beneficiariosuno = {
            id: data[0]['empleado_beneficiario_id'],
            name: data[0]['nombre_beneficiario']
          };
          this.solicitud.datos_bancos_beneficiariosuno = data[0]['datos_bancarios_empleado_id'];
        }
        this.solicitud.clavecuentatarjetauno = data[0]['tarjeta'];
        this.solicitud.claveuno = data[0]['clabe'];
        this.solicitud.cuentauno = data[0]['cuenta'];
        this.solicitud.banco = data[0]['banco_nombre'];
        // me.enviar_uno();
        // me.buscar_uno();
      }
    },
    quitar_uno: function quitar_uno() {
      // this.optionsvs_benficiario_uno = [];
      this.solicitud.beneficiariosuno = '';
      this.solicitud.datos_bancos_beneficiariosuno = '';
      this.solicitud.clavecuentatarjetauno = '';
      this.solicitud.claveuno = '';
      this.solicitud.cuentauno = '';
      this.solicitud.banco = '';
      this.listaDatosBancariosuno = [];
      this.$emit('limpiarUno');
    },
    limpiaInputs: function limpiaInputs() {
      this.solicitud.clavecuentatarjetauno = '';
      this.solicitud.claveuno = '';
      this.solicitud.cuentauno = '';
      this.solicitud.banco = '';
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Viaticos/Solicitud/DetallesV.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Viaticos/Solicitud/DetallesV.vue?vue&type=script&lang=js ***!
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
      tipo: '',
      listaConceptos: [],
      listado: {
        tranferencia: [],
        efectivo: [],
        conceptos: []
      },
      listado_temporal: {
        tranferencia: '',
        efectivo: '',
        conceptos: ''
      },
      totales: {
        totaltranferencia: '',
        totalefectivo: '',
        totalgeneral: ''
      }
    };
  },
  computed: {
    totalTransferencia: function totalTransferencia() {
      var _this = this;
      return this.listado.tranferencia.reduce(function (sum, item) {
        return _this.totales.totaltranferencia = sum + parseFloat(item);
      }, 0);
    },
    totalEfectivo: function totalEfectivo() {
      var _this2 = this;
      return this.listado.efectivo.reduce(function (sum, item) {
        return _this2.totales.totalefectivo = sum + parseFloat(item);
      }, 0);
    },
    totalGeneral: function totalGeneral() {
      return this.totales.totalgeneral = parseFloat(this.totales.totaltranferencia) + parseFloat(this.totales.totalefectivo);
    }
  },
  methods: {
    getDatos: function getDatos(data) {
      // console.log(data);
      this.tipo = data;
      this.listado.tranferencia = [];
      this.listado.efectivo = [];
      this.listado.conceptos = [];
      this.listaConceptos = [];
      if (data > 0) {
        this.getData();
      }
    },
    getData: function getData() {
      var _this3 = this;
      axios.get('conceptosviaticos').then(function (response) {
        for (var i = 0; i < response.data.length; i++) {
          _this3.listado.tranferencia.push(0);
          _this3.listado.efectivo.push(0);
          _this3.listado.conceptos.push(response.data[i].id);
        }
        _this3.listaConceptos = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    enviar: function enviar() {
      this.$emit('listado', this.listado);
      this.$emit('totales', this.totales);
      this.$emit('conceptos', this.conceptos);
    },
    setDatos: function setDatos(data, tipo) {
      console.log(data, 'datos reci');
      var transferencia = [];
      var efectivo = [];
      var conceptos = [];
      this.tipo = tipo;
      for (var i = 0; i < data.length; i++) {
        transferencia.push(data[i]['transferencia_electronica']);
        efectivo.push(data[i]['efectivo']);
        if (tipo == 0) {
          conceptos.push(data[i]['catalogo_concepto_viaticos']);
        } else {
          conceptos.push(i + 1);
        }
      }
      console.log(transferencia);
      console.log(efectivo);
      console.log(conceptos);
      this.listado.tranferencia = transferencia;
      this.listado.efectivo = efectivo;
      this.listado.conceptos = conceptos;
      var me = this;
      me.enviar();
    },
    crear: function crear() {
      this.listado.tranferencia.push(this.listado_temporal.tranferencia);
      this.listado.efectivo.push(this.listado_temporal.efectivo);
      this.listado.conceptos.push(this.listado_temporal.conceptos);
      this.listado_temporal.tranferencia = '';
      this.listado_temporal.efectivo = '';
      this.listado_temporal.conceptos = '';
      var me = this;
      me.enviar();
    },
    deleteu: function deleteu(index) {
      this.listado.tranferencia.splice(index, 1);
      this.listado.efectivo.splice(index, 1);
      this.listado.conceptos.splice(index, 1);
    }
  },
  mounted: function mounted() {
    this.getData();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Viaticos/Solicitud/Solicitud.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Viaticos/Solicitud/Solicitud.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Herramientas/utilerias.js */ "./resources/assets/js/components/Herramientas/utilerias.js");
var Beneficiarios = function Beneficiarios(r) {
  return __webpack_require__.e(/*! require.ensure | via */ "via").then((function () {
    return r(__webpack_require__(/*! ./Beneficiarios.vue */ "./resources/assets/js/components/Viaticos/Solicitud/Beneficiarios.vue"));
  }).bind(null, __webpack_require__))['catch'](__webpack_require__.oe);
};
var DetallesV = function DetallesV(r) {
  return __webpack_require__.e(/*! require.ensure | via */ "via").then((function () {
    return r(__webpack_require__(/*! ./DetallesV.vue */ "./resources/assets/js/components/Viaticos/Solicitud/DetallesV.vue"));
  }).bind(null, __webpack_require__))['catch'](__webpack_require__.oe);
};

var config = (__webpack_require__(/*! ../../Herramientas/config-vuetables-client */ "./resources/assets/js/components/Herramientas/config-vuetables-client.js").call)(undefined);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      PermisosCrud: {},
      timbre_modal: 0,
      tipo: "",
      unidadtemporal: {},
      empresa: "1",
      ver: 1,
      tabs: 1,
      isLoading: false,
      tituloModal: "",
      modal: 0,
      tipoAccion: 0,
      isEnabled: true,
      data_detalle: "",
      isObtener_Loading: false,
      isGuardar_Loading: false,
      solicitud: {
        id: "",
        fecha: "",
        fecha_pago: "",
        proyecto_id: "",
        personal_servicio_viaticos_id: "",
        empleado_elabora_id: "",
        empleado_revisa_id: "",
        empleado_autoriza_id: "",
        empleado_supervisor_id: "",
        beneficiario_uno: [],
        detalles_listado: [],
        detalles_totales: [],
        detalles_conceptos: [],
        origen_destino: "",
        origen_destino_destino: "",
        fecha_salida: "",
        hora_estimada_salida: "",
        fecha_operacion: "",
        fecha_retorno: "",
        total_personas: ""
      },
      list_unidades: [],
      vehiculos_itinerario_viaticos: [],
      vehiculos_temporal: {
        unidad: "",
        km_inicial: "",
        empleado_operador_id: "",
        empleado_operador_name: ""
      },
      optionsvs_proyecto: [],
      vs_options: [],
      columns: ["sv__id", "sv__folio", "sv__tipo", "sv__fecha_solicitud", "sv__fecha_pago", "benef__nombre", "id2", "EE__nombre", "sv__total_efectivo", "sv__total_transferencia", "sv__estado"],
      options: {
        headings: {
          "sv__id": "Acciones",
          "sv__folio": "Folio",
          "sv__tipo": "Tipo",
          "sv__fecha_pago": "Fecha de pago",
          "sv__estado": "Estado",
          "benef__nombre": "Beneficiario",
          "sv__fecha_solicitud": "Fecha solicitada",
          "id2": "Descargar",
          "sv__nombre_revisa": "Revisa",
          "EE__nombre": "Elabora",
          "sv__nombre_autoriza": "Autoriza",
          "sv__total_efectivo": "Total efectivo",
          "sv__total_transferencia": "Total transferencia"
        },
        perPage: 10,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        filterByColumn: true,
        listColumns: {
          "sv__tipo": [{
            id: 1,
            text: "REEMBOLSO"
          }, {
            id: 2,
            text: "VIATICOS"
          }, {
            id: 0,
            text: "SINDICATO"
          }]
        },
        texts: config.texts
      }
    };
  },
  components: {
    "beneficiario": Beneficiarios,
    "detallesv": DetallesV
  },
  methods: {
    getData: function getData() {
      this.ver = 1;
      this.PermisosCrud = _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].getCRUD(this.$route.path);
    },
    sumarTotalPersona: function sumarTotalPersona() {
      this.solicitud.total_personas = 1;
    },
    sumarTotalPersonas: function sumarTotalPersonas() {
      if (this.solicitud.personal_servicio_viaticos_id.length == 1) {
        this.solicitud.total_personas = "";
        this.solicitud.total_personas = 1 + this.solicitud.personal_servicio_viaticos_id.length;
      } else {
        this.solicitud.total_personas = "";
        this.solicitud.total_personas = 1 + this.solicitud.personal_servicio_viaticos_id.length;
      }
    },
    diaActual: function diaActual() {
      var hoy = new Date();
      var dd = hoy.getDate();
      var mm = hoy.getMonth() + 1; //hoy es 0!
      var yyyy = hoy.getFullYear();
      if (dd < 10) {
        dd = "0" + dd;
      }
      if (mm < 10) {
        mm = "0" + mm;
      }
      hoy = yyyy + "-" + mm + "-" + dd;
      this.solicitud.fecha = hoy;
      this.solicitud.fecha_salida = hoy;
    },
    verdiferencia: function verdiferencia() {
      if (new Date(this.solicitud.fecha).getTime() > new Date(this.solicitud.fecha_retorno)) {
        toastr.warning("La fecha de salida no puede ser menor a la fecha salida");
      }
    },
    componenteBeneficiario: function componenteBeneficiario() {
      var childBeneficiario = this.$refs.beneficiario;
      childBeneficiario.getDatos(this.empresa, this.tipo, this.vs_options);
      var ChilDetallesv = this.$refs.detallesv;
      ChilDetallesv.getDatos(this.tipo);
    },
    /**
     * Cargar las unidades para el itinerario
     */
    ObtenerUnidades: function ObtenerUnidades() {
      var _this = this;
      axios.get("vehiculos/combustible/obtenerunidades").then(function (res) {
        if (res.data.status) {
          _this.list_unidades = res.data.unidades;
        } else toastr.error(res.data.mensaje);
      });
    },
    abrirModal: function abrirModal(modelo, accion) {
      var _this2 = this;
      var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      if (this.empresa === "") {
        toastr.warning("Seleccione una empresa");
      } else {
        this.ObtenerProyectos();
        this.ObtenerEmpleados();
        this.ObtenerUnidades();
        switch (modelo) {
          case "solicitud":
            {
              switch (accion) {
                case "registrar":
                  {
                    this.isEnabled = true;
                    _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.solicitud);
                    this.modal = 1;
                    this.diaActual();
                    this.tituloModal = "Registrar solicitud de viaticos";
                    this.tipoAccion = 1;
                    // Autoriza Finanzas
                    this.solicitud.empleado_autoriza_id = {
                      id: 461,
                      name: "BRIGIDA MARTINEZ HERRERA"
                    };
                    break;
                  }
                case "actualizar":
                  {
                    this.isEnabled = false;
                    _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.solicitud);
                    this.tituloModal = "Actualizar solicitud de viaticos";
                    this.modal = 1;
                    this.tipoAccion = 2;
                    axios.get("solicitud/viaticos/detalles/" + data.sv__id).then(function (res) {
                      res = res.data[0];
                      _this2.tipo = res["solicitud"][0]["tipo"];
                      _this2.solicitud.fecha = res["solicitud"][0]["fecha_solicitud"];
                      _this2.solicitud.fecha_pago = res["solicitud"][0]["fecha_pago"];
                      _this2.solicitud.proyecto_id = {
                        id: res["solicitud"][0]["proyecto_id"],
                        nombre_corto: res["solicitud"][0]["nombre_proyecto"]
                      };
                      var childBeneficiarioSend = _this2.$refs.beneficiario;
                      childBeneficiarioSend.setDatos(res["beneficiarios"], res["solicitud"][0]["tipo"], _this2.empresa);
                      var ChilDetallesvSend = _this2.$refs.detallesv;
                      ChilDetallesvSend.setDatos(res["detalles_listado"], res["solicitud"][0]["tipo"]);
                      _this2.solicitud.origen_destino = res["solicitud"][0]["origen_destino"];
                      _this2.solicitud.origen_destino_destino = res["solicitud"][0]["origen_destino_destino"];
                      _this2.solicitud.fecha_salida = res["solicitud"][0]["fecha_salida"];
                      _this2.solicitud.hora_estimada_salida = res["solicitud"][0]["hora_estimada_salida"];
                      _this2.solicitud.fecha_operacion = res["solicitud"][0]["fecha_operacion"];
                      _this2.solicitud.fecha_retorno = res["solicitud"][0]["fecha_retorno"];
                      _this2.vehiculos_itinerario_viaticos = [];
                      for (var i = 0; i < res["vehiculo"].length; i++) {
                        var me = _this2;
                        me.vehiculos_itinerario_viaticos.push({
                          unidad: res["vehiculo"][i]["unidad"],
                          km_inicial: res["vehiculo"][i]["km_inicial"],
                          empleado_operador_id: res["vehiculo"][i]["empleado_operador_id"],
                          empleado_operador_name: res["vehiculo"][i]["nombre_operador"]
                        });
                      }
                      _this2.solicitud.total_personas = res["solicitud"][0]["total_personas"];
                      _this2.solicitud.empleado_supervisor_id = {
                        id: res["solicitud"][0]["empleado_supervisor_id"],
                        name: res["solicitud"][0]["nombre_supervisor"]
                      };
                      _this2.solicitud.empleado_elabora_id = {
                        id: res["solicitud"][0]["empleado_elabora_id"],
                        name: res["solicitud"][0]["nombre_elabora"]
                      };
                      _this2.solicitud.empleado_revisa_id = {
                        id: res["solicitud"][0]["empleado_revisa_id"],
                        name: res["solicitud"][0]["nombre_revisa"]
                      };
                      _this2.solicitud.empleado_autoriza_id = {
                        id: res["solicitud"][0]["empleado_autoriza_id"],
                        name: res["solicitud"][0]["nombre_autoriza"]
                      };
                      _this2.solicitud.id = res["solicitud"][0]["id"];
                      var datos = [];
                      for (var i = 0; i < res["empleados"].length; i++) {
                        datos.push({
                          id: res["empleados"][i]["empleado_id"],
                          name: res["empleados"][i]["nombre_empleado"]
                        });
                      }
                      _this2.solicitud.personal_servicio_viaticos_id = datos;
                    });
                    break;
                  }
              }
            }
        }
      }
    },
    cerrarModal: function cerrarModal() {
      this.modal = 0;
      // this.tipo = "";
      var childBeneficiario = this.$refs.beneficiario;
      childBeneficiario.quitar_uno();
      this.vehiculos_itinerario_viaticos = [];
      _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.solicitud);
    },
    enviouno: function enviouno(data) {
      this.solicitud.beneficiario_uno = data;
    },
    envio_u: function envio_u(data) {
      this.solicitud.detalles_listado = data;
    },
    envio_d: function envio_d(data) {
      this.solicitud.detalles_totales = data;
    },
    envio_c: function envio_c(data) {
      this.solicitud.detalles_conceptos = data;
    },
    crear: function crear() {
      if (this.unidadtemporal == null) return;
      if (this.unidadtemporal.id == null) {
        toastr.warning("Seleccione una unidad");
        return;
      }
      if (this.vehiculos_temporal.empleado_operador_id.id == null) {
        toastr.warning("Seleccione el operador");
        return;
      }
      this.vehiculos_itinerario_viaticos.push({
        unidad: this.unidadtemporal.modelo,
        km_inicial: this.unidadtemporal.placas,
        empleado_operador_id: this.vehiculos_temporal.empleado_operador_id.id,
        empleado_operador_name: this.vehiculos_temporal.empleado_operador_id.name,
        temp: true
      });
      this.unidadtemporal = {};
      this.vehiculos_temporal = {};
    },
    guardar: function guardar(nuevo) {
      var _this3 = this;
      this.$validator.validate().then(function (result) {
        if (result) {
          var me = _this3;
          _this3.isGuardar_Loading = true;

          // this.isLoading = true;
          axios({
            method: nuevo ? "POST" : "PUT",
            url: nuevo ? "/solicitudviaticos" : "/solicitudviaticos/" + _this3.solicitud.id,
            data: {
              "id": _this3.solicitud.id,
              "fecha_solicitud": _this3.solicitud.fecha,
              "fecha_pago": _this3.solicitud.fecha_pago,
              "proyecto_id": _this3.solicitud.proyecto_id.id,
              "personal_servicio_viaticos_id": _this3.solicitud.personal_servicio_viaticos_id == "" ? [] : _this3.solicitud.personal_servicio_viaticos_id,
              "empleado_elabora_id": _this3.solicitud.empleado_elabora_id.id,
              "empleado_revisa_id": _this3.solicitud.empleado_revisa_id.id,
              "empleado_autoriza_id": _this3.solicitud.empleado_autoriza_id.id,
              "empleado_supervisor_id": _this3.solicitud.empleado_supervisor_id == "" ? "" : _this3.solicitud.empleado_supervisor_id.id,
              "beneficiario_uno": _this3.solicitud.beneficiario_uno,
              "detalles_totales": _this3.solicitud.detalles_totales,
              "detalles_listado": _this3.solicitud.detalles_listado,
              "detalles_conceptos": _this3.solicitud.detalles_conceptos,
              "origen_destino": _this3.solicitud.origen_destino,
              "origen_destino_destino": _this3.solicitud.origen_destino_destino,
              "fecha_salida": _this3.solicitud.fecha_salida,
              "hora_estimada_salida": _this3.solicitud.hora_estimada_salida,
              "fecha_operacion": _this3.solicitud.fecha_operacion,
              "fecha_retorno": _this3.solicitud.fecha_retorno,
              "total_personas": _this3.solicitud.total_personas,
              "vehiculos_itinerario_viaticos": _this3.vehiculos_itinerario_viaticos,
              "empresa": _this3.empresa,
              "tipo": _this3.tipo
            }
          }).then(function (response) {
            _this3.isGuardar_Loading = false;
            if (!response.data.status) {
              toastr.error("Error al guardar la solicitud");
              return;
            }
            toastr.success(nuevo ? "Solicitud creada exitosamente" : "Solicitud actualizada exitosamente", "Correcto");
            var me = _this3;
            _this3.ObtenerSolicitudes();
            me.cerrarModal();
            me.getData();
          })["catch"](function (error) {
            console.error(error);
          });
        } else {
          toastr.warning("Complete los campos requeridos");
        }
      });
    },
    limpiarBeneficiarioUno: function limpiarBeneficiarioUno() {
      this.solicitud.beneficiario_uno = null;
    },
    limpiarBeneficiarioDos: function limpiarBeneficiarioDos() {
      this.solicitud.beneficiario_dos = null;
    },
    maestro: function maestro() {
      this.ver = 1;
    },
    enviaRevision: function enviaRevision(id, edo) {
      var _this4 = this;
      this.isLoading = true;
      swal({
        title: "Esta seguro(a) de enviar?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#4dbd74",
        cancelButtonColor: "#f86c6b",
        confirmButtonText: "Aceptar!",
        cancelButtonText: "Cancelar",
        reverseButtons: true
      }).then(function (result) {
        if (result.value) {
          axios.post("/estadosviaticos", {
            "id": id,
            "edo": edo,
            "empresa": _this4.empresa
          }).then(function (response) {
            _this4.isLoading = false;
            if (response.data.status) {
              if (edo == 2) {
                toastr.success("Solicitud de viaticos enviada a revisión", "Correcto");
              }
              _this4.getData();
              _this4.ObtenerSolicitudes();
            } else {
              toastr.warning(response.data.respuesta, "Atención");
            }
          })["catch"](function (error) {
            console.log(error);
          });
        } else {
          _this4.isLoading = false;
        }
      });
    },
    decargarForVia: function decargarForVia(data, empresa) {
      window.open("/descargarformatoviatico/" + data + "&" + empresa, "_blank");
    },
    descargarnForFij: function descargarnForFij(data, empresa) {
      window.open("/descargarnformatofij/" + data + "&" + empresa, "_blank");
    },
    /**
     * Obtener proyectos
     */
    ObtenerProyectos: function ObtenerProyectos() {
      var _this5 = this;
      axios.get("generales/proyectos/1").then(function (res) {
        _this5.optionsvs_proyecto = res.data.proyectos;
      });
    },
    /**
     * Obtener los empleados de la empresa seleccionada
     */
    ObtenerEmpleados: function ObtenerEmpleados() {
      var _this6 = this;
      axios.get("rh/empleados/obtenerporempresa/" + this.empresa).then(function (res) {
        // TODO: Cambiar label de empleados
        var nombres = [];
        res.data.empleados.forEach(function (e) {
          nombres.push({
            id: e.id,
            name: e.nombre + " " + e.ap_paterno + " " + e.ap_materno
          });
        });
        _this6.vs_options = nombres;
      });
    },
    eliminar: function eliminar(id, empresa) {
      var _this7 = this;
      axios.get("eliminar/solicitud/viaticos/" + id + "&" + empresa).then(function (response) {
        toastr.success("Eliminado Correctamente");
        _this7.ObtenerSolicitudes();
      })["catch"](function (e) {
        console.error(e);
      });
    },
    ObtenerSolicitudes: function ObtenerSolicitudes() {
      this.$refs.myTable.refresh();
    },
    descargaViatico: function descargaViatico(id, tipo) {
      switch (tipo) {
        case 0:
          this.descargarnForFij(id, this.empresa);
          break;
        case 1:
          this.decargarForVia(id, this.empresa);
          break;
        case 2:
          this.decargarForVia(id, this.empresa);
          break;
      }
    }
  },
  mounted: function mounted() {
    this.getData();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Viaticos/Solicitud/Beneficiarios.vue?vue&type=template&id=335ef74c":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Viaticos/Solicitud/Beneficiarios.vue?vue&type=template&id=335ef74c ***!
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
  return _c("div", [_vm.tipo_viatico != 0 ? [_c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-6"
  }, [_c("label", [_vm._v(" Beneficiario")]), _vm._v(" "), _c("v-select", {
    attrs: {
      options: _vm.optionsvs_benficiario_uno,
      label: "name",
      name: "proyecto",
      "data-vv-name": "proyecto"
    },
    on: {
      input: _vm.buscar_uno
    },
    model: {
      value: _vm.solicitud.beneficiariosuno,
      callback: function callback($$v) {
        _vm.$set(_vm.solicitud, "beneficiariosuno", $$v);
      },
      expression: "solicitud.beneficiariosuno"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-6"
  }, [_c("label", [_vm._v(" Banco beneficiario")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.solicitud.datos_bancos_beneficiariosuno,
      expression: "solicitud.datos_bancos_beneficiariosuno"
    }],
    staticClass: "form-control",
    attrs: {
      name: "datos bancarios",
      "data-vv-name": "Proyecto"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.solicitud, "datos_bancos_beneficiariosuno", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, function ($event) {
        return _vm.enviar_uno($event);
      }]
    }
  }, [_vm._l(_vm.listaDatosBancariosuno, function (item) {
    return _c("option", {
      key: item.id,
      domProps: {
        value: item.id
      }
    }, [_vm._v(_vm._s(item.bnombre))]);
  }), _vm._v(" "), _c("option", {
    attrs: {
      value: "0"
    }
  }, [_vm._v("OTRO")])], 2), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("datos bancarios")))])])])] : _vm._e(), _vm._v(" "), _vm.tipo_viatico == 0 ? [_c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-6"
  }, [_c("label", [_vm._v(" Beneficiario")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.solicitud.beneficiariosuno,
      expression: "solicitud.beneficiariosuno"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.solicitud.beneficiariosuno
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.solicitud, "beneficiariosuno", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-6"
  }, [_c("label", [_vm._v(" Banco")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.solicitud.datos_bancos_beneficiariosuno,
      expression: "solicitud.datos_bancos_beneficiariosuno"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.solicitud.datos_bancos_beneficiariosuno
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.solicitud, "datos_bancos_beneficiariosuno", $event.target.value);
      }
    }
  })])])] : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-6"
  }, [_c("label", [_vm._v("CUENTA")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.solicitud.cuentauno,
      expression: "solicitud.cuentauno"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.solicitud.cuentauno
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.solicitud, "cuentauno", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-6"
  }, [_c("label", [_vm._v("CLABE")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.solicitud.claveuno,
      expression: "solicitud.claveuno"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.solicitud.claveuno
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.solicitud, "claveuno", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-6"
  }, [_c("label", [_vm._v("TARJETA")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.solicitud.clavecuentatarjetauno,
      expression: "solicitud.clavecuentatarjetauno"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.solicitud.clavecuentatarjetauno
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.solicitud, "clavecuentatarjetauno", $event.target.value);
      }
    }
  })]), _vm._v(" "), _vm.solicitud.datos_bancos_beneficiariosuno === "0" && _vm.tipo_viatico > 0 ? [_c("div", {
    staticClass: "form-group col-md-6"
  }, [_c("label", [_vm._v("BANCO")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.solicitud.banco,
      expression: "solicitud.banco"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.solicitud.banco
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.solicitud, "banco", $event.target.value);
      }
    }
  })])] : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-6"
  }, [_c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.quitar_uno();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-trash"
  }), _vm._v(" Limpiar")])])], 2), _vm._v(" "), _c("hr")], 2);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Viaticos/Solicitud/DetallesV.vue?vue&type=template&id=ab0a624a":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Viaticos/Solicitud/DetallesV.vue?vue&type=template&id=ab0a624a ***!
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
  return _c("div", [_vm.tipo > 0 ? [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table"
  }, [_vm._m(0), _vm._v(" "), _vm._l(_vm.listaConceptos, function (item) {
    return _c("tr", [_c("td", {
      attrs: {
        scope: "row"
      }
    }, [_c("label", [_vm._v(_vm._s(item.nombre))])]), _vm._v(" "), _c("td", [_vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.number",
        value: _vm.listado.tranferencia[item.id - 1],
        expression: "listado.tranferencia[item.id - 1]",
        modifiers: {
          number: true
        }
      }],
      staticClass: "form-control col-md-6",
      attrs: {
        type: "number",
        step: ".01"
      },
      domProps: {
        value: _vm.listado.tranferencia[item.id - 1]
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(_vm.listado.tranferencia, item.id - 1, _vm._n($event.target.value));
        }, _vm.enviar],
        blur: function blur($event) {
          return _vm.$forceUpdate();
        }
      }
    })]), _vm._v(" "), _c("td", [_vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.number",
        value: _vm.listado.efectivo[item.id - 1],
        expression: "listado.efectivo[item.id - 1]",
        modifiers: {
          number: true
        }
      }],
      staticClass: "form-control col-md-6",
      attrs: {
        type: "number",
        step: ".01"
      },
      domProps: {
        value: _vm.listado.efectivo[item.id - 1]
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(_vm.listado.efectivo, item.id - 1, _vm._n($event.target.value));
        }, _vm.enviar],
        blur: function blur($event) {
          return _vm.$forceUpdate();
        }
      }
    })]), _vm._v(" "), _c("td", [_vm._v(" " + _vm._s((parseFloat(_vm.listado.tranferencia[item.id - 1]) + parseFloat(_vm.listado.efectivo[item.id - 1])).toFixed(2)))])]);
  }), _vm._v(" "), _vm._m(1), _vm._v(" "), _c("tr", [_vm._m(2), _vm._v(" "), _c("td", [_c("b", [_vm._v(_vm._s(_vm.totalTransferencia.toFixed(2)))])]), _vm._v(" "), _c("td", [_c("b", [_vm._v(_vm._s(_vm.totalEfectivo.toFixed(2)))])]), _vm._v(" "), _c("td", [_c("b", [_vm._v(_vm._s(_vm.totalGeneral.toFixed(2)))])])])], 2)])] : _vm._e(), _vm._v(" "), _vm.tipo == 0 ? [_vm._m(3), _vm._v(" "), _vm._l(_vm.listado.conceptos, function (vi, index) {
    return _c("li", {
      staticClass: "list-group-item"
    }, [_c("div", {
      staticClass: "form-row"
    }, [_c("div", {
      staticClass: "form-group col-md-4"
    }, [_c("label", [_vm._v(_vm._s(_vm.listado.conceptos[index]))])]), _vm._v(" "), _c("div", {
      staticClass: "form-group col-md-2"
    }, [_c("label", [_vm._v(_vm._s(_vm.listado.tranferencia[index]))])]), _vm._v(" "), _c("div", {
      staticClass: "form-group col-md-2"
    }, [_c("label", [_vm._v(_vm._s(_vm.listado.efectivo[index]))])]), _vm._v(" "), _c("div", {
      staticClass: "form-group col-md-2"
    }, [_c("label", [_vm._v(_vm._s(parseFloat(_vm.listado.tranferencia[index]) + parseFloat(_vm.listado.efectivo[index])))])]), _vm._v(" "), _c("div", {
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
  }), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.listado_temporal.conceptos,
      expression: "listado_temporal.conceptos"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Concepto"
    },
    domProps: {
      value: _vm.listado_temporal.conceptos
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.listado_temporal, "conceptos", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-2"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.listado_temporal.tranferencia,
      expression: "listado_temporal.tranferencia"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      placeholder: "Tranferencia"
    },
    domProps: {
      value: _vm.listado_temporal.tranferencia
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.listado_temporal, "tranferencia", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-2"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.listado_temporal.efectivo,
      expression: "listado_temporal.efectivo"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      placeholder: "Efectivo"
    },
    domProps: {
      value: _vm.listado_temporal.efectivo
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.listado_temporal, "efectivo", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-2"
  }, [_vm._v("\n       \n      ")]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-2"
  }, [_c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.crear();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  }), _vm._v(" Crear")])])])] : _vm._e()], 2);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("th", {
    attrs: {
      scope: "col"
    }
  }, [_vm._v("Concepto")]), _vm._v(" "), _c("th", {
    attrs: {
      scope: "col"
    }
  }, [_vm._v("T.E (Transferencia Electronica)")]), _vm._v(" "), _c("th", {
    attrs: {
      scope: "col"
    }
  }, [_vm._v("Efectivo")]), _vm._v(" "), _c("th", {
    attrs: {
      scope: "col"
    }
  }, [_vm._v("Total")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("td", {
    attrs: {
      colspan: "4"
    }
  }, [_vm._v(" ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("b", [_vm._v("Total")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_c("b", [_vm._v("Concepto")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-2"
  }, [_c("label", [_c("b", [_vm._v("T.E (Transferencia Electronica)")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-2"
  }, [_c("label", [_c("b", [_vm._v("Efectivo")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-2"
  }, [_c("label", [_c("b", [_vm._v("Total")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-2"
  }, [_c("label", [_c("b", [_vm._v("ACCIONES")])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Viaticos/Solicitud/Solicitud.vue?vue&type=template&id=c840c2f6":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Viaticos/Solicitud/Solicitud.vue?vue&type=template&id=c840c2f6 ***!
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
  }, [_c("div", [_c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.ver == 1,
      expression: "ver == 1"
    }],
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("i", {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" Solicitudes " + _vm._s(_vm.empresa == 1 ? "CONSERFLOW" : _vm.empresa == 2 ? "CSCT" : "") + "\r\n\r\n                "), _c("button", {
    staticClass: "btn btn-dark float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.abrirModal("solicitud", "registrar");
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  }), _vm._v("Nuevo\r\n                ")])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isObtener_Loading
    }
  }), _vm._v(" "), _c("v-server-table", {
    ref: "myTable",
    attrs: {
      columns: _vm.columns,
      options: _vm.options,
      url: "solicitud/viaticos/conserflow/".concat(_vm.empresa, "?query={}&limit=10&ascending=1&page=1&byColumn=1")
    },
    scopedSlots: _vm._u([{
      key: "sv__id",
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
        }, [props.row.sv__eliminado == 0 ? [props.row.sv__estado == 1 ? [_c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              $event.preventDefault();
              return _vm.abrirModal("solicitud", "actualizar", props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-edit"
        }), _vm._v("Actualizar Solicitud\r\n                                            ")]), _vm._v(" "), _c("button", {
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
              $event.preventDefault();
              return _vm.eliminar(props.row.sv__id, _vm.empresa);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-trash"
        }), _vm._v("Eliminar\r\n                                            ")]), _vm._v(" "), _c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              $event.preventDefault();
              return _vm.enviaRevision(props.row.sv__id, 2);
            }
          }
        }, [_c("i", {
          staticClass: "far fa-paper-plane"
        }), _vm._v("Cerrar\r\n                                            ")])] : _vm._e()] : _vm._e()], 2)])])];
      }
    }, {
      key: "sv__estado",
      fn: function fn(props) {
        return [props.row.sv__eliminado == 1 ? [_c("span", {
          staticClass: "btn btn-outline-danger"
        }, [_vm._v("Eliminado")])] : _vm._e(), _vm._v(" "), props.row.sv__eliminado == 0 ? [props.row.sv__estado == 6 ? [_c("span", {
          staticClass: "btn btn-outline-info"
        }, [_vm._v("Finalizado")])] : _vm._e(), _vm._v(" "), props.row.sv__estado == 5 ? [_c("span", {
          staticClass: "btn btn-outline-info"
        }, [_vm._v("Pagos "), _c("br"), _vm._v(" agendados")])] : _vm._e(), _vm._v(" "), props.row.sv__estado == 4 ? [_c("span", {
          staticClass: "btn btn-outline-info"
        }, [_vm._v("En espera "), _c("br"), _vm._v(" de pagos")])] : _vm._e(), _vm._v(" "), props.row.sv__estado == 3 ? [_c("span", {
          staticClass: "btn btn-outline-warning"
        }, [_vm._v("En Autorizacion")])] : _vm._e(), _vm._v(" "), props.row.sv__estado == 2 ? [_c("span", {
          staticClass: "btn btn-outline-warning"
        }, [_vm._v("En revisión")])] : _vm._e(), _vm._v(" "), props.row.sv__estado == 1 ? [_c("span", {
          staticClass: "btn btn-outline-success"
        }, [_vm._v("Nuevo")])] : _vm._e(), _vm._v(" "), props.row.sv__estado == 0 ? [_c("span", {
          staticClass: "btn btn-outline-danger"
        }, [_vm._v("No autorizado")])] : _vm._e()] : _vm._e()];
      }
    }, {
      key: "sv__tipo",
      fn: function fn(props) {
        return [props.row.sv__tipo == 0 ? [_vm._v("\r\n                            SINDICATO\r\n                        ")] : _vm._e(), _vm._v(" "), props.row.sv__tipo == 1 ? [_vm._v("\r\n                            REEMBOLSO\r\n                        ")] : _vm._e(), _vm._v(" "), props.row.sv__tipo == 2 ? [_vm._v("\r\n                            VIATICOS\r\n                        ")] : _vm._e()];
      }
    }, {
      key: "id2",
      fn: function fn(props) {
        return [_c("button", {
          staticClass: "btn btn-outline-dark",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.descargaViatico(props.row.sv__id, props.row.sv__tipo);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-file-pdf"
        }), _c("i", {
          staticClass: "fas fa-download"
        })])];
      }
    }, {
      key: "sv__total_efectivo",
      fn: function fn(props) {
        return [_c("p", [_vm._v(_vm._s(props.row.sv__total_efectivo.toLocaleString("es-MX", {
          style: "currency",
          currency: "MXN"
        })))])];
      }
    }, {
      key: "sv__total_transferencia",
      fn: function fn(props) {
        return [_c("p", [_vm._v(_vm._s(props.row.sv__total_transferencia.toLocaleString("es-MX", {
          style: "currency",
          currency: "MXN"
        })))])];
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
      "arial-hidden": "true"
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
  }, [_vm._v(_vm._s(_vm.tituloModal) + " " + _vm._s(_vm.empresa == 1 ? "Conserflow" : "CSCT"))]), _vm._v(" "), _c("button", {
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
      "arial-hidden": "true"
    }
  }, [_vm._v("X")])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isGuardar_Loading
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-6"
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
      disabled: !_vm.isEnabled,
      "data-vv-name": "tipo"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.tipo = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, function ($event) {
        return _vm.componenteBeneficiario();
      }]
    }
  }, [_c("option", {
    attrs: {
      value: "0"
    }
  }, [_vm._v("SINDICATO")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("REEMBOLSO")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "2"
    }
  }, [_vm._v("VIATICOS")])]), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("tipo")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-6"
  }, [_c("label", [_vm._v("Fecha solicitud")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.solicitud.fecha,
      expression: "solicitud.fecha"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date",
      "data-vv-name": "Fecha solicitud"
    },
    domProps: {
      value: _vm.solicitud.fecha
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.solicitud, "fecha", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Fecha solicitud")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-6"
  }, [_c("label", [_vm._v("Fecha requerida de pago")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.solicitud.fecha_pago,
      expression: "solicitud.fecha_pago"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date",
      "data-vv-name": "Fecha de pago"
    },
    domProps: {
      value: _vm.solicitud.fecha_pago
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.solicitud, "fecha_pago", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Fecha de pago")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-6"
  }, [_c("label", [_vm._v("Proyecto")]), _vm._v(" "), _c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    attrs: {
      disabled: !_vm.isEnabled,
      options: _vm.optionsvs_proyecto,
      label: "nombre_corto",
      "data-vv-name": "Proyecto"
    },
    model: {
      value: _vm.solicitud.proyecto_id,
      callback: function callback($$v) {
        _vm.$set(_vm.solicitud, "proyecto_id", $$v);
      },
      expression: "solicitud.proyecto_id"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Proyecto")))])], 1)]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("div", {
    staticClass: "accordion",
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
  }, [_c("beneficiario", {
    ref: "beneficiario",
    on: {
      enviarUno: function enviarUno($event) {
        return _vm.enviouno($event);
      },
      enviarDos: function enviarDos($event) {
        return _vm.enviodos($event);
      },
      limpiarUno: function limpiarUno($event) {
        return _vm.limpiarBeneficiarioUno();
      },
      limpiarDos: function limpiarDos($event) {
        return _vm.limpiarBeneficiarioDos();
      }
    }
  })], 1)])]), _vm._v(" "), _c("div", {
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
  }, [_c("detallesv", {
    ref: "detallesv",
    on: {
      listado: function listado($event) {
        return _vm.envio_u($event);
      },
      totales: function totales($event) {
        return _vm.envio_d($event);
      },
      conceptos: function conceptos($event) {
        return _vm.envio_c($event);
      }
    }
  })], 1)])]), _vm._v(" "), _vm.tipo > 0 ? [_c("div", {
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
  }, [_c("div", {
    staticClass: "form-row"
  }, [_vm._m(3), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.solicitud.origen_destino,
      expression: "solicitud.origen_destino"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      "data-vv-name": "Origen"
    },
    domProps: {
      value: _vm.solicitud.origen_destino
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.solicitud, "origen_destino", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Origen")))])]), _vm._v(" "), _vm._m(4), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.solicitud.origen_destino_destino,
      expression: "solicitud.origen_destino_destino"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      "data-vv-name": "Destino"
    },
    domProps: {
      value: _vm.solicitud.origen_destino_destino
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.solicitud, "origen_destino_destino", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Destino")))])])]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_vm._m(5), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_vm._m(6), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.solicitud.fecha_salida,
      expression: "solicitud.fecha_salida"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date",
      "data-vv-name": "Fecha salida"
    },
    domProps: {
      value: _vm.solicitud.fecha_salida
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.solicitud, "fecha_salida", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Fecha salida")))]), _vm._v(" "), _c("div", {
    staticClass: "input-group"
  }, [_vm._m(7), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.solicitud.hora_estimada_salida,
      expression: "solicitud.hora_estimada_salida"
    }],
    staticClass: "form-control",
    attrs: {
      type: "time",
      "data-vv-name": "Hora estimada de salida"
    },
    domProps: {
      value: _vm.solicitud.hora_estimada_salida
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.solicitud, "hora_estimada_salida", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Hora estimada de salida")))])]), _vm._v(" "), _vm._m(8), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_vm._m(9), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.solicitud.fecha_operacion,
      expression: "solicitud.fecha_operacion"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date",
      "data-vv-name": "Fecha de operacion"
    },
    domProps: {
      value: _vm.solicitud.fecha_operacion
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.solicitud, "fecha_operacion", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(" " + _vm._s(_vm.errors.first("Fecha de operacion")) + " ")]), _vm._v(" "), _c("div", {
    staticClass: "input-group"
  }, [_vm._m(10), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.solicitud.fecha_retorno,
      expression: "solicitud.fecha_retorno"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date",
      "data-vv-name": "Fecha de retorno"
    },
    domProps: {
      value: _vm.solicitud.fecha_retorno
    },
    on: {
      change: function change($event) {
        return _vm.verdiferencia();
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.solicitud, "fecha_retorno", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(" " + _vm._s(_vm.errors.first("Fecha de retorno")) + " ")])])]), _vm._v(" "), _c("hr"), _vm._v(" "), _vm._m(11), _vm._v(" "), _vm._l(_vm.vehiculos_itinerario_viaticos, function (vi, index) {
    return _c("li", {
      key: index,
      staticClass: "list-group-item"
    }, [_c("div", {
      staticClass: "form-row"
    }, [_c("div", {
      staticClass: "form-group col-md-2"
    }, [_c("label", [_vm._v(_vm._s(vi.km_inicial))])]), _vm._v(" "), _c("div", {
      staticClass: "form-group col-md-4"
    }, [_c("label", [_vm._v(_vm._s(vi.unidad))])]), _vm._v(" "), _c("div", {
      staticClass: "form-group col-md-4"
    }, [_c("label", [_vm._v(_vm._s(vi.empleado_operador_name))])])])]);
  }), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-2"
  }, [_c("v-select", {
    attrs: {
      options: _vm.list_unidades,
      label: "placas"
    },
    model: {
      value: _vm.unidadtemporal,
      callback: function callback($$v) {
        _vm.unidadtemporal = $$v;
      },
      expression: "unidadtemporal"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "form-group col"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.unidadtemporal.modelo,
      expression: "unidadtemporal.modelo"
    }],
    staticClass: "form-control",
    attrs: {
      disabled: "",
      type: "text",
      placeholder: "Unidad"
    },
    domProps: {
      value: _vm.unidadtemporal.modelo
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.unidadtemporal, "modelo", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("v-select", {
    attrs: {
      options: _vm.vs_options,
      label: "name",
      name: "personal_servicio_viaticos_id",
      "data-vv-name": "personal_servicio_viaticos_id"
    },
    model: {
      value: _vm.vehiculos_temporal.empleado_operador_id,
      callback: function callback($$v) {
        _vm.$set(_vm.vehiculos_temporal, "empleado_operador_id", $$v);
      },
      expression: "vehiculos_temporal.empleado_operador_id"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.crear();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  })])])])], 2)])]), _vm._v(" "), _c("div", {
    staticClass: "card"
  }, [_vm._m(12), _vm._v(" "), _c("div", {
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
  }, [_vm._m(13), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-6"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.solicitud.total_personas,
      expression: "solicitud.total_personas"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      name: "total_personas",
      "data-vv-name": "total_personas",
      readonly: ""
    },
    domProps: {
      value: _vm.solicitud.total_personas
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.solicitud, "total_personas", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_vm._m(14), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-6"
  }, [_c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    attrs: {
      options: _vm.vs_options,
      label: "name",
      "data-vv-name": "Supervisor"
    },
    on: {
      input: _vm.sumarTotalPersona
    },
    model: {
      value: _vm.solicitud.empleado_supervisor_id,
      callback: function callback($$v) {
        _vm.$set(_vm.solicitud, "empleado_supervisor_id", $$v);
      },
      expression: "solicitud.empleado_supervisor_id"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(" " + _vm._s(_vm.errors.first("Supervisor")) + " ")])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_vm._m(15), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-6"
  }, [_c("v-select", {
    attrs: {
      multiple: "",
      options: _vm.vs_options,
      label: "name",
      name: "personal_servicio_viaticos_id",
      "data-vv-name": "personal_servicio_viaticos_id"
    },
    on: {
      input: _vm.sumarTotalPersonas
    },
    model: {
      value: _vm.solicitud.personal_servicio_viaticos_id,
      callback: function callback($$v) {
        _vm.$set(_vm.solicitud, "personal_servicio_viaticos_id", $$v);
      },
      expression: "solicitud.personal_servicio_viaticos_id"
    }
  })], 1)])])])])] : _vm._e()], 2), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-6"
  }, [_c("label", [_vm._v("Elaboró")]), _vm._v(" "), _c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    attrs: {
      options: _vm.vs_options,
      label: "name",
      "data-vv-name": "Elabora"
    },
    model: {
      value: _vm.solicitud.empleado_elabora_id,
      callback: function callback($$v) {
        _vm.$set(_vm.solicitud, "empleado_elabora_id", $$v);
      },
      expression: "solicitud.empleado_elabora_id"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Elabora")))])], 1), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-6"
  }, [_c("label", [_vm._v("Revisó")]), _vm._v(" "), _c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    attrs: {
      options: _vm.vs_options,
      label: "name",
      name: "revisa",
      "data-vv-name": "Revisa"
    },
    model: {
      value: _vm.solicitud.empleado_revisa_id,
      callback: function callback($$v) {
        _vm.$set(_vm.solicitud, "empleado_revisa_id", $$v);
      },
      expression: "solicitud.empleado_revisa_id"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Revisa")))])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-6"
  }, [_c("label", [_vm._v("Autorizó")]), _vm._v(" "), _c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    attrs: {
      disabled: "",
      options: _vm.vs_options,
      label: "name",
      name: "autoriza",
      "data-vv-name": "Autoriza"
    },
    model: {
      value: _vm.solicitud.empleado_autoriza_id,
      callback: function callback($$v) {
        _vm.$set(_vm.solicitud, "empleado_autoriza_id", $$v);
      },
      expression: "solicitud.empleado_autoriza_id"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Autoriza")))])], 1)])], 1), _vm._v(" "), _c("div", {
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
        return _vm.cerrarModal();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-times"
  }), _vm._v("Cerrar")]), _vm._v(" "), _vm.tipoAccion == 1 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.guardar(1);
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
        return _vm.guardar(0);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v("Actualizar")]) : _vm._e()])], 1)])])])])]);
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
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#collapseOne",
      "aria-expanded": "true",
      "aria-controls": "collapseOne"
    }
  }, [_vm._v("\r\n                                            BENEFICIARIOS\r\n                                        ")])])]);
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
  }, [_vm._v("\r\n                                            DETALLE DE VIATICOS\r\n                                        ")])])]);
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
  }, [_vm._v("\r\n                                                NOTAS DE ITINERIARIO Y LOGISTICA\r\n                                            ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "form-group col-md-2"
  }, [_c("label", [_vm._v("Origen")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "form-group col-md-2"
  }, [_c("label", [_vm._v("Destino")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "form-group col-md-5"
  }, [_c("label", [_vm._v("1.- Fecha salida:")]), _vm._v(" "), _c("label", [_vm._v("2.- Hora de estimada de salida:")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "input-group-addon"
  }, [_c("span", {
    staticClass: "input-group-text"
  }, [_vm._v("1")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "input-group-addon"
  }, [_c("span", {
    staticClass: "input-group-text"
  }, [_vm._v("2")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "form-group col-md-5"
  }, [_c("label", [_vm._v("3.- Fecha de operación:")]), _vm._v(" "), _c("label", [_vm._v("4.- Fecha de retorno estimada:")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "input-group-addon"
  }, [_c("span", {
    staticClass: "input-group-text"
  }, [_vm._v("3")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "input-group-addon"
  }, [_c("span", {
    staticClass: "input-group-text"
  }, [_vm._v("4")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-2"
  }, [_c("label", [_c("b", [_vm._v("PLACAS")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_c("b", [_vm._v("UNIDAD")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_c("b", [_vm._v("OPERADOR")])])])]);
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
  }, [_vm._v("\r\n                                                PERSONAL DESTINADO AL SERVICIO\r\n                                            ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Total de personas a asistir")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Supervisor")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Nombre del personal que asiste al servicio")])]);
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

/***/ "./resources/assets/js/components/Viaticos/Solicitud/Beneficiarios.vue":
/*!*****************************************************************************!*\
  !*** ./resources/assets/js/components/Viaticos/Solicitud/Beneficiarios.vue ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Beneficiarios_vue_vue_type_template_id_335ef74c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Beneficiarios.vue?vue&type=template&id=335ef74c */ "./resources/assets/js/components/Viaticos/Solicitud/Beneficiarios.vue?vue&type=template&id=335ef74c");
/* harmony import */ var _Beneficiarios_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Beneficiarios.vue?vue&type=script&lang=js */ "./resources/assets/js/components/Viaticos/Solicitud/Beneficiarios.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Beneficiarios_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Beneficiarios_vue_vue_type_template_id_335ef74c__WEBPACK_IMPORTED_MODULE_0__.render,
  _Beneficiarios_vue_vue_type_template_id_335ef74c__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/Viaticos/Solicitud/Beneficiarios.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Viaticos/Solicitud/Beneficiarios.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************!*\
  !*** ./resources/assets/js/components/Viaticos/Solicitud/Beneficiarios.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Beneficiarios_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Beneficiarios.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Viaticos/Solicitud/Beneficiarios.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Beneficiarios_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Viaticos/Solicitud/Beneficiarios.vue?vue&type=template&id=335ef74c":
/*!***********************************************************************************************************!*\
  !*** ./resources/assets/js/components/Viaticos/Solicitud/Beneficiarios.vue?vue&type=template&id=335ef74c ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Beneficiarios_vue_vue_type_template_id_335ef74c__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Beneficiarios_vue_vue_type_template_id_335ef74c__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Beneficiarios_vue_vue_type_template_id_335ef74c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Beneficiarios.vue?vue&type=template&id=335ef74c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Viaticos/Solicitud/Beneficiarios.vue?vue&type=template&id=335ef74c");


/***/ }),

/***/ "./resources/assets/js/components/Viaticos/Solicitud/DetallesV.vue":
/*!*************************************************************************!*\
  !*** ./resources/assets/js/components/Viaticos/Solicitud/DetallesV.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DetallesV_vue_vue_type_template_id_ab0a624a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DetallesV.vue?vue&type=template&id=ab0a624a */ "./resources/assets/js/components/Viaticos/Solicitud/DetallesV.vue?vue&type=template&id=ab0a624a");
/* harmony import */ var _DetallesV_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DetallesV.vue?vue&type=script&lang=js */ "./resources/assets/js/components/Viaticos/Solicitud/DetallesV.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DetallesV_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _DetallesV_vue_vue_type_template_id_ab0a624a__WEBPACK_IMPORTED_MODULE_0__.render,
  _DetallesV_vue_vue_type_template_id_ab0a624a__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/Viaticos/Solicitud/DetallesV.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Viaticos/Solicitud/DetallesV.vue?vue&type=script&lang=js":
/*!*************************************************************************************************!*\
  !*** ./resources/assets/js/components/Viaticos/Solicitud/DetallesV.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetallesV_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DetallesV.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Viaticos/Solicitud/DetallesV.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetallesV_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Viaticos/Solicitud/DetallesV.vue?vue&type=template&id=ab0a624a":
/*!*******************************************************************************************************!*\
  !*** ./resources/assets/js/components/Viaticos/Solicitud/DetallesV.vue?vue&type=template&id=ab0a624a ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DetallesV_vue_vue_type_template_id_ab0a624a__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DetallesV_vue_vue_type_template_id_ab0a624a__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DetallesV_vue_vue_type_template_id_ab0a624a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DetallesV.vue?vue&type=template&id=ab0a624a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Viaticos/Solicitud/DetallesV.vue?vue&type=template&id=ab0a624a");


/***/ }),

/***/ "./resources/assets/js/components/Viaticos/Solicitud/Solicitud.vue":
/*!*************************************************************************!*\
  !*** ./resources/assets/js/components/Viaticos/Solicitud/Solicitud.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Solicitud_vue_vue_type_template_id_c840c2f6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Solicitud.vue?vue&type=template&id=c840c2f6 */ "./resources/assets/js/components/Viaticos/Solicitud/Solicitud.vue?vue&type=template&id=c840c2f6");
/* harmony import */ var _Solicitud_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Solicitud.vue?vue&type=script&lang=js */ "./resources/assets/js/components/Viaticos/Solicitud/Solicitud.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Solicitud_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Solicitud_vue_vue_type_template_id_c840c2f6__WEBPACK_IMPORTED_MODULE_0__.render,
  _Solicitud_vue_vue_type_template_id_c840c2f6__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/Viaticos/Solicitud/Solicitud.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Viaticos/Solicitud/Solicitud.vue?vue&type=script&lang=js":
/*!*************************************************************************************************!*\
  !*** ./resources/assets/js/components/Viaticos/Solicitud/Solicitud.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Solicitud_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Solicitud.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Viaticos/Solicitud/Solicitud.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Solicitud_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Viaticos/Solicitud/Solicitud.vue?vue&type=template&id=c840c2f6":
/*!*******************************************************************************************************!*\
  !*** ./resources/assets/js/components/Viaticos/Solicitud/Solicitud.vue?vue&type=template&id=c840c2f6 ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Solicitud_vue_vue_type_template_id_c840c2f6__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Solicitud_vue_vue_type_template_id_c840c2f6__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Solicitud_vue_vue_type_template_id_c840c2f6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Solicitud.vue?vue&type=template&id=c840c2f6 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Viaticos/Solicitud/Solicitud.vue?vue&type=template&id=c840c2f6");


/***/ })

}]);