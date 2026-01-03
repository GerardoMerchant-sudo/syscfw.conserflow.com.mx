(self["webpackChunk"] = self["webpackChunk"] || []).push([["conta"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Contabilidad/Catalogo/SatCatFormapago.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Contabilidad/Catalogo/SatCatFormapago.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
      formaPago: {
        id: 0,
        clave: '',
        descripcion: ''
      },
      modal: 0,
      tituloModal: '',
      tipoAccion: 0,
      isLoading: false,
      columns: ['id', 'clave', 'descripcion'],
      tableData: [],
      options: {
        headings: {
          clave: 'Clave',
          descripcion: 'Descripción',
          id: 'Acciones'
        },
        perPage: 10,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        sortable: ['clave', 'descripcion'],
        filterable: ['clave', 'descripcion'],
        filterByColumn: true,
        listColumns: {},
        texts: config.texts
      }
    };
  },
  computed: {},
  methods: {
    getData: function getData() {
      var me = this;
      axios.get('/satcatformpago').then(function (response) {
        me.tableData = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    guardarFormaPago: function guardarFormaPago(nuevo) {
      var _this = this;
      this.$validator.validate().then(function (result) {
        if (result) {
          _this.isLoading = true;
          var me = _this;
          axios({
            method: nuevo ? 'POST' : 'PUT',
            url: nuevo ? '/satcatformpago/registrar' : '/satcatformpago/actualizar',
            data: {
              'clave': _this.formaPago.clave,
              'descripcion': _this.formaPago.descripcion,
              'id': _this.formaPago.id
            }
          }).then(function (response) {
            me.isLoading = false;
            if (response.data.status) {
              me.cerrarModal();
              me.getData();
              if (!nuevo) {
                toastr.success('Forma de pago Actualizada Correctamente');
              } else {
                toastr.success('Forma de pago Registrada Correctamente');
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
      _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.formaPago);
    },
    abrirModal: function abrirModal(modelo, accion) {
      var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      switch (modelo) {
        case "forma-pago":
          {
            switch (accion) {
              case 'registrar':
                {
                  this.modal = 1;
                  this.tituloModal = 'Registrar Forma de pago';
                  _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.formaPago);
                  this.tipoAccion = 1;
                  break;
                }
              case 'actualizar':
                {
                  this.modal = 1;
                  this.tituloModal = 'Actualizar Forma de pago';
                  this.tipoAccion = 2;
                  this.formaPago.id = data['id'];
                  this.formaPago.clave = data['clave'];
                  this.formaPago.descripcion = data['descripcion'];
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Contabilidad/Catalogo/SatCatProdser.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Contabilidad/Catalogo/SatCatProdser.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************/
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
      isLoading_datos: false,
      productoServicio: {
        id: 0,
        clave: '',
        descripcion: '',
        fecha_ini_vig: '',
        fecha_fin_vig: '',
        incluir_iva_tras: '',
        incluir_ieps_tras: '',
        complemento: ''
      },
      modal: 0,
      tituloModal: '',
      tipoAccion: 0,
      isLoading: false,
      columns: ['id', 'clave', 'descripcion'],
      list_productos: [],
      options: {
        headings: {
          clave: 'Clave',
          descripcion: 'Descripción',
          id: 'Acciones'
        },
        perPage: 10,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        sortable: ['clave', 'descripcion'],
        filterable: ['clave', 'descripcion'],
        filterByColumn: true,
        listColumns: {},
        texts: config.texts
      }
    };
  },
  computed: {},
  methods: {
    getData: function getData() {
      var _this = this;
      this.isLoading_datos = true;
      axios.get('/satcatprodser1').then(function (response) {
        _this.isLoading_datos = false;
        if (response.data.status) {
          _this.list_productos = response.data.productoServicio;
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    guardarProductoServicio: function guardarProductoServicio(nuevo) {
      var _this2 = this;
      this.$validator.validate().then(function (result) {
        if (result) {
          _this2.isLoading = true;
          var me = _this2;
          axios({
            method: nuevo ? 'POST' : 'PUT',
            url: nuevo ? '/satcatprodser/registrar' : '/satcatprodser/actualizar',
            data: {
              'clave': _this2.productoServicio.clave,
              'descripcion': _this2.productoServicio.descripcion,
              'id': _this2.productoServicio.id,
              'fecha_ini_vig': _this2.productoServicio.fecha_ini_vig,
              'fecha_fin_vig': _this2.productoServicio.fecha_fin_vig,
              'incluir_iva_tras': _this2.productoServicio.incluir_iva_tras,
              'incluir_ieps_tras': _this2.productoServicio.incluir_ieps_tras,
              'complemento': _this2.productoServicio.complemento
            }
          }).then(function (response) {
            me.isLoading = false;
            if (response.data.status) {
              me.cerrarModal();
              me.getData();
              if (!nuevo) {
                toastr.success('Producto/Servicio Actualizada Correctamente');
              } else {
                toastr.success('Producto/Servicio Registrada Correctamente');
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
      _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.productoServicio);
    },
    abrirModal: function abrirModal(modelo, accion) {
      var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      switch (modelo) {
        case "productoServicio":
          {
            switch (accion) {
              case 'registrar':
                {
                  this.modal = 1;
                  this.tituloModal = 'Registrar Producto/Servicio';
                  _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.productoServicio);
                  this.tipoAccion = 1;
                  break;
                }
              case 'actualizar':
                {
                  this.modal = 1;
                  this.tituloModal = 'Actualizar Producto/Servicio';
                  this.tipoAccion = 2;
                  this.productoServicio.id = data['id'];
                  this.productoServicio.clave = data['clave'];
                  this.productoServicio.descripcion = data['descripcion'];
                  this.productoServicio.fecha_ini_vig = data['fecha_ini_vig'];
                  this.productoServicio.fecha_fin_vig = data['fecha_fin_vig'];
                  this.productoServicio.incluir_iva_tras = data['incluir_iva_tras'];
                  this.productoServicio.incluir_ieps_tras = data['incluir_ieps_tras'];
                  this.productoServicio.complemento = data['complemento'];
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Contabilidad/Catalogo/SatCatUnidades.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Contabilidad/Catalogo/SatCatUnidades.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
      //// SatCatUnidades
      url_satcatunidades: "tesoreria/catalogos/unidades",
      tipoAccion_satcatunidades: 1,
      tipoCardSatCatUnidades: 1,
      ver_modal_satcatunidades: false,
      tituloModal_satcatunidades: "",
      satcatunidades_id: 0,
      isGuardarsatcatunidades_loading: false,
      isObtenersatcatunidades_loading: false,
      columns_satcatunidades: ["id", "c_unidad", "nombre", "descripcion"],
      list_satcatunidades: [],
      satcatunidades: {},
      options_satcatunidades: {
        headings: {
          id: "Acciones",
          c_unidad: "Unidad",
          nombre: "Nombre",
          descripcion: "Descripción"
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
    ObtenerSatCatUnidades: function ObtenerSatCatUnidades() {
      var _this = this;
      this.isObtenersatcatunidades_loading = true;
      axios.get(this.url_satcatunidades + "/obtener").then(function (res) {
        _this.isObtenersatcatunidades_loading = false;
        if (res.data.status) {
          _this.list_satcatunidades = res.data.unidades;
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    /**
     * Abrir modal SatCatUnidades
     */
    AbrirModalSatCatUnidades: function AbrirModalSatCatUnidades(nuevo) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.ver_modal_satcatunidades = true;
      if (nuevo) {
        this.tituloModal_satcatunidades = "Registrar Unidades";
        this.tipoAccion_satcatunidades = 1;
      } else {
        this.satcatunidades_id = data.id;
        this.tituloModal_satcatunidades = "Actualizar Unidades";
        this.tipoAccion_satcatunidades = 2;
        this.satcatunidades = _objectSpread({}, data);
      }
    },
    /**
     * Registrar SatCatUnidades
     */
    RegistrarSatCatUnidades: function RegistrarSatCatUnidades(nuevo) {
      var _this2 = this;
      this.$validator.validate().then(function (isValid) {
        if (!isValid) return;
        var data = new FormData();
        if (!nuevo) data.append("id", _this2.satcatunidades_id);
        data.append("c_unidad", _this2.satcatunidades.c_unidad);
        data.append("nombre", _this2.satcatunidades.nombre);
        data.append("descripcion", _this2.satcatunidades.descripcion);
        _this2.isGuardarsatcatunidades_loading = true;
        axios.post(_this2.url_satcatunidades + "/guardar", data).then(function (res) {
          _this2.isGuardarsatcatunidades_loading = false;
          if (res.data.status) {
            toastr.success("Guardado correctamente");
            _this2.ObtenerSatCatUnidades();
            _this2.CerrarModalSatCatUnidades();
          } else {
            toastr.error(res.data.mensaje);
          }
        });
      });
    },
    /**
     * Cerrar modal
     */
    CerrarModalSatCatUnidades: function CerrarModalSatCatUnidades() {
      this.satcatunidades = {};
      this.ver_modal_satcatunidades = false;
    }
  },
  mounted: function mounted() {
    this.ObtenerSatCatUnidades();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Contabilidad/Factura/Conceptos.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Contabilidad/Factura/Conceptos.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Herramientas/utilerias.js */ "./resources/assets/js/components/Herramientas/utilerias.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

var config = (__webpack_require__(/*! ../../Herramientas/config-vuetables-client */ "./resources/assets/js/components/Herramientas/config-vuetables-client.js").call)(undefined);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      modal: 0,
      modal_cargar: 0,
      tituloModal: '',
      isDatosLoading: false,
      tipoAccion: 0,
      isLoading: false,
      reten: 0,
      id_factura: 0,
      partidas: {
        id: '',
        productos_servicios_id: '',
        unidad_id: '',
        cantidad: '',
        unidad: '',
        numero_identificacion: '',
        descripcion: '',
        comentario: '',
        valor_unitario: '',
        importe: '',
        descuento: '0',
        impuesto_iva: '',
        factura_id: '',
        retencion: 0,
        obj_imp: "01"
      },
      archivo: null,
      ProductoServicio: [],
      list_produc_serv: [],
      Unidad: [],
      datos: null,
      tableData: [],
      columns: ['id', 'scps_descripcion', 'scu_nombre', 'cantidad', 'unidad', 'numero_identificacion', 'descripcion', 'valor_unitario', 'importe', 'descuento'],
      options: {
        headings: {
          'id': 'Acciones',
          'scps_descripcion': 'Productos/Servicios',
          'scu_nombre': 'Clave unidad'
        },
        perPage: 20,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        filterByColumn: true,
        texts: config.texts,
        requestAdapter: function requestAdapter(data) {
          var arr = [];
          arr.push({
            'SCPS.descripcion': data.query.scps_descripcion,
            'SCU.nombre': data.query.scu_nombre,
            'partidas_factura.cantidad': data.query.cantidad,
            'partidas_factura.unidad': data.query.unidad,
            'partidas_factura.numero_identificacion': data.query.numero_identificacion,
            'partidas_factura.descripcion': data.query.descripcion,
            'partidas_factura.comentario': data.query.comentario,
            'partidas_factura.valor_unitario': data.query.valor_unitario,
            'partidas_factura.importe': data.query.importe,
            'partidas_factura.descuento': data.query.descuento
          });
          data.query = arr[0];
          return data;
        }
      }
    };
  },
  methods: {
    getData: function getData(data) {
      var _this = this;
      this.$refs.Tablac.refresh();
      this.datos = data;
      this.partidas.factura_id = data.id;
      this.id_factura = data.id;
      axios.get('/satcatunidades').then(function (response) {
        _this.Unidad = response.data;
      })["catch"](function (error) {
        console.error(error);
      });
    },
    /**
     * Obtener productos/servicios del sat
     */
    ObtenerProductosServicios: function ObtenerProductosServicios() {
      var _this2 = this;
      this.isDatosLoading = true;
      axios.get('/satcatprodser1').then(function (response) {
        if (response.data.status) {
          _this2.list_produc_serv = response.data.productoServicio;
        } else {
          toastr.error(res.data.mensaje);
        }
        _this2.isDatosLoading = false;
      });
    },
    /**
     * [abrirModal description]
     * @param  {String} modelo    [description]
     * @param  {String} accion    [description]
     * @param  {Array}  [data=[]] [description]
     * @return {Response}           [description]
     */
    abrirModal: function abrirModal(modelo, accion) {
      var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      this.ObtenerProductosServicios();
      switch (modelo) {
        case "partidas":
          {
            switch (accion) {
              case 'registrar':
                {
                  this.modal = 1;
                  this.tituloModal = 'Registrar conceptos';
                  this.tipoAccion = 1;
                  this.vaciar();
                  this.datos.rfc_receptor == 'XEXX010101000' ? this.partidas.impuesto_iva = '0.000000' : this.partidas.impuesto_iva = '0.160000';
                  break;
                }
              case 'actualizar':
                {
                  this.vaciar();
                  this.modal = 1;
                  this.tituloModal = 'Actualizar conceptos';
                  this.tipoAccion = 2;
                  this.partidas.id = data['id'];
                  this.partidas.productos_servicios_id = {
                    id: data['productos_servicios_id'],
                    name: data['scps_clave'] + ' ' + data['scps_descripcion']
                  };
                  this.partidas.unidad_id = data['unidad_id'];
                  this.partidas.cantidad = data['cantidad'];
                  this.partidas.unidad = data['unidad'];
                  this.partidas.numero_identificacion = data['numero_identificacion'];
                  this.partidas.descripcion = data['descripcion'];
                  this.partidas.comentario = data['comentario'];
                  this.partidas.valor_unitario = data['valor_unitario'];
                  this.partidas.importe = data['importe'];
                  this.partidas.descuento = data['descuento'];
                  // this.partidas.impuesto_iva = '0.160000';
                  this.datos.rfc_receptor == 'XEXX010101000' ? this.partidas.impuesto_iva = '0.000000' : this.partidas.impuesto_iva = '0.160000';
                  this.partidas.factura_id = data['factura_id'];
                  this.partidas.retencion = data['retencion'];
                  this.partidas.obj_imp = data['obj_imp'];
                  break;
                }
              case 'cargar':
                {
                  this.modal_cargar = 1;
                }
            }
          }
      }
    },
    maestro: function maestro() {
      this.$emit('maestro:conceptos');
    },
    cerrarModal: function cerrarModal() {
      this.modal = 0;
    },
    cerrarModalCargar: function cerrarModalCargar() {
      this.modal_cargar = 0;
    },
    multiplicar: function multiplicar() {
      this.partidas.importe = this.partidas.cantidad * this.partidas.valor_unitario;
    },
    MultiplicarPorcentaje: function MultiplicarPorcentaje() {
      if (this.partidas.cantidad == "") return;
      if (this.partidas.valor_unitario == "") return;
      var porcentaje = this.partidas.descuento_porcentaje;
      var total = this.partidas.cantidad * this.partidas.valor_unitario;
      this.partidas.descuento = total * porcentaje / 100;
    },
    vaciar: function vaciar() {
      this.partidas.productos_servicios_id = '';
      this.partidas.unidad_id = '';
      this.partidas.cantidad = '';
      this.partidas.unidad = '';
      this.partidas.numero_identificacion = '';
      this.partidas.descripcion = '';
      this.partidas.comentario = '';
      this.partidas.valor_unitario = '';
      this.partidas.importe = '';
      this.partidas.retencion = '';
      // this.partidas.descuento = '';
      // this.partidas.factura_id = '';
    },
    eliminar: function eliminar(data) {
      var me = this;
      axios["delete"]('/partidafactura/' + data.id).then(function (response) {
        toastr.info('Registro eliminado correctamente', 'Atención');
        me.$refs.Tablac.refresh();
      })["catch"](function (error) {
        console.error(error);
      });
    },
    guardar: function guardar(nuevo) {
      var _this3 = this;
      this.$validator.validate().then(function (result) {
        if (result) {
          _this3.isLoading = true;
          var me = _this3;
          axios({
            method: nuevo ? 'POST' : 'PUT',
            url: nuevo ? '/partidafactura' : '/partidafactura/' + _this3.partidas.id,
            data: {
              // id : this.factura.id,
              productos_servicios_id: _this3.partidas.productos_servicios_id.id,
              unidad_id: _this3.partidas.unidad_id,
              cantidad: _this3.partidas.cantidad,
              unidad: _this3.partidas.unidad,
              numero_identificacion: _this3.partidas.numero_identificacion,
              descripcion: _this3.partidas.descripcion,
              comentario: _this3.partidas.comentario,
              valor_unitario: _this3.partidas.valor_unitario,
              importe: _this3.partidas.importe,
              descuento: _this3.partidas.descuento,
              impuesto_iva: _this3.partidas.impuesto_iva,
              factura_id: _this3.partidas.factura_id,
              retencion: _this3.partidas.retencion,
              obj_imp: _this3.partidas.obj_imp
            }
          }).then(function (response) {
            me.isLoading = false;
            me.cerrarModal();
            toastr.success(nuevo ? 'Concepto agregada correctamente' : 'Concepto actualizada correctamente', 'Correcto');
            me.$refs.Tablac.refresh();
          })["catch"](function (error) {
            console.log(error);
          });
        }
      });
    },
    retencion: function retencion(data) {
      var me = this;
      if (data.target.checked == true) {
        me.reten = 1;
      } else {
        this.reten = 0;
      }
    },
    getArchivo: function getArchivo(event) {
      //Asignamos el archivo a  nuestra data
      this.archivo = event.target.files[0];
    },
    update: function update() {
      var _this4 = this;
      // this.isLoading = true;
      //Creamos el formData
      var data = new FormData();
      //Añadimos la imagen seleccionada
      data.append('import_file', this.archivo);
      data.append('id', this.partidas.factura_id);
      //Añadimos el método PUT dentro del formData
      // Como lo hacíamos desde un formulario simple _(no ajax)_
      data.append('_method', 'PUT');
      //Enviamos la petición
      axios.post('/partidasfacturasexcel/upload', data).then(function (response) {
        // console.log(response);
        _this4.archivo = null;
        // var field = this.$validator.fields.find({ name: 'email' });
        // field.reset();
        if (response.status == 200) {
          swal('agregado',
          //  'Registros agregados: ' + response.data.nuevos + '<br>Registros repetidos: ' + response.data.repetidos,
          'correcto!!!');
          $('#archivo').val('');
          _this4.cerrarModalCargar();
          _this4.$refs.Tablac.refresh();
          // this.$refs.table.refresh();
        } else swal('Articulos', 'Ocurrio un error.', 'error');
      })["catch"](function (error) {
        this.archivo = null;
        // this.isLoading = false;
        console.log(error);
        swal('Articulos', 'Ocurrio un error al leer el archivo.', 'error');
      });
    },
    /**
     * Abrir modal de observaciones
     */
    modalObservaciones: function modalObservaciones(partida) {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var data;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.n = 1;
              return Swal.fire({
                title: 'Observaciones',
                input: 'textarea'
              });
            case 1:
              data = _context.v;
              if (!(data.value == null)) {
                _context.n = 2;
                break;
              }
              return _context.a(2);
            case 2:
              if (!(data.value.length < 5)) {
                _context.n = 3;
                break;
              }
              return _context.a(2);
            case 3:
              _this5.isObtener_loading = true;
              axios.post("facturacion/partidas/observaciones", {
                id: partida.id,
                observaciones: data.value
              }).then(function (res) {
                if (res.data.status) {
                  toastr.success("Actualizado correctamente");
                  _this5.$refs.Tablac.refresh();
                } else {
                  toastr.error(res.data.mensaje);
                }
              });
            case 4:
              return _context.a(2);
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Contabilidad/Factura/ConceptosPagos.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Contabilidad/Factura/ConceptosPagos.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************/
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
      verc: false,
      modal: 0,
      modaluno: 0,
      tituloModal: '',
      tituloModalUno: '',
      tipoAccion: 0,
      tipoAccionUno: 0,
      isLoading: false,
      anterior: false,
      existente: false,
      optionsvsu: [],
      validadouno: '',
      abc: '',
      partidas: {
        id: '',
        productos_servicios_id: '',
        unidad_id: '',
        cantidad: '',
        unidad: '',
        numero_identificacion: '',
        descripcion: '',
        valor_unitario: '',
        importe: '',
        descuento: '0',
        impuesto_iva: '',
        factura_id: ''
      },
      partidas_pagos: {
        id: '',
        factura_id: '',
        saldo_anterior: '',
        importe_pagado: '',
        saldo_insoluto: '',
        partidas_facturas_id: '',
        uuid: '',
        serie: '',
        folio: '',
        num_parcialidad: '1',
        tipo_cambio_dr: 0.0,
        metodo_pago_dr: 1,
        total_usd: 0,
        importe_pagado_mx: 0,
        obj_imp: "02"
      },
      pago_dolares: false,
      list_metodos_pago: [],
      ProductoServicio: [],
      datos: null,
      tableData: [],
      columns: ['id', 'scps_descripcion', 'scu_nombre', 'cantidad', 'unidad', 'numero_identificacion', 'descripcion', 'valor_unitario', 'importe', 'descuento'],
      options: {
        headings: {
          'id': 'Acciones',
          'scps_descripcion': 'Productos/Servicios',
          'scu_nombre': 'Clave unidad'
        },
        perPage: 10,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        filterByColumn: true,
        texts: config.texts
      },
      tableDataUno: [],
      columnsUno: ['id', 'uuid', 'serie', 'folio', 'saldo_anterior', 'importe_pagado', 'saldo_insoluto'],
      optionsUno: {
        headings: {
          'id': 'Acciones'
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
  computed: {
    saldos: function saldos() {
      var resul;
      resul = this.partidas_pagos.saldo_anterior - this.partidas_pagos.importe_pagado;
      return this.partidas_pagos.saldo_insoluto = resul;
    }
  },
  methods: {
    getData: function getData(data) {
      var _this = this;
      this.datos = data;
      this.partidas.factura_id = data.id;
      axios.get('/partidafactura/' + data.id + '?query=%7B%7D&limit=10&ascending=1&page=1&byColumn=1').then(function (response) {
        _this.tableData = response.data;
      })["catch"](function (error) {
        console.error(error);
      });
      axios.get('/partidafacturapagos/' + data.id).then(function (response) {
        // console.log(response);
        _this.tableDataUno = response.data;
      })["catch"](function (err) {
        console.error(err);
      });
      axios.get('/factura').then(function (response) {
        // this.tableDatas = response.data;

        if (response.data.length != 0) {
          for (var i = 0; i < response.data.length; i++) {
            if (response.data[i].timbrado == '1') {
              _this.optionsvsu.push({
                id: response.data[i].id,
                name: response.data[i].serie + ' ' + response.data[i].folio + ' ' + response.data[i].uuid
              });
              _this.contador += 1;
            }
          }
        }
      })["catch"](function (error) {
        console.error(error);
      });
    },
    /**
    * [abrirModal description]
    * @param  {String} modelo    [description]
    * @param  {String} accion    [description]
    * @param  {Array}  [data=[]] [description]
    * @return {Response}           [description]
    */
    abrirModal: function abrirModal(modelo, accion) {
      var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      this.ObtenerMetodosPago();
      //alert("Agregar artículos - Conceptos Pagos");
      switch (modelo) {
        case "partidas":
          {
            switch (accion) {
              case 'registrar':
                {
                  this.modal = 1;
                  this.tituloModal = 'Registrar conceptos';
                  this.tipoAccion = 1;
                  this.vaciar();
                  this.datos.rfc_receptor == 'XEXX010101000' ? this.partidas.impuesto_iva = '0.000000' : this.partidas.impuesto_iva = '0.160000';
                  break;
                }
              case 'registrar_pagos':
                {
                  this.vaciar();
                  this.modaluno = 1;
                  this.tituloModalUno = 'Registrar pago';
                  this.tipoAccionUno = 1;
                  // this.vaciar();
                  // this.datos.rfc_receptor == 'XEXX010101000' ? this.partidas.impuesto_iva = '0.000000' : this.partidas.impuesto_iva = '0.160000';
                  break;
                }
              case 'actualizar':
                {
                  this.vaciar();
                  this.modaluno = 1;
                  this.tituloModalUno = 'Actualizar pagos';
                  this.tipoAccionUno = 2;
                  data['factura_id'] == null ? $("#anterior").prop("checked", true) : $("#existente").prop("checked", true);
                  this.estado();
                  this.abc = data;
                  this.partidas_pagos.id = data['id'];
                  this.partidas_pagos.saldo_anterior = data['saldo_anterior'];
                  this.partidas_pagos.importe_pagado = data['importe_pagado'];
                  this.partidas_pagos.saldo_insoluto = data['saldo_insoluto'];
                  this.partidas_pagos.num_parcialidad = data['num_parcialidad'];
                  this.partidas_pagos.serie = data['serie'];
                  this.partidas_pagos.folio = data['folio'];
                  this.partidas_pagos.uuid = data['uuid'];
                  this.partidas_pagos.total_usd = data['total_usd'];
                  this.partidas_pagos.tipo_cambio_dr = data['tipo_cambio_dr'];
                  this.partidas_pagos.importe_pagado_mx = data['importe_pagado_mx'];
                  this.partidas_pagos.metodo_pago_dr = data['metodo_pago_dr'];
                  this.pago_dolares = data['pago_dolares'];
                  this.partidas_pagos.obj_imp = data['obj_imp'];
                  this.partidas_pagos.factura_id = data['factura_id'] == null ? '' : {
                    id: data['factura_id'],
                    name: data['serie'] + ' ' + data['folio'] + ' ' + data['uuid']
                  };
                  // alert(data['saldo_anterior']);
                  this.partidas_pagos.partidas_facturas_id = data['partidas_facturas_id'];
                  break;
                }
            }
          }
      }
    },
    maestro: function maestro() {
      this.$emit('maestro:conceptospagos');
    },
    cerrarModal: function cerrarModal() {
      this.modal = 0;
    },
    cerrarModalUno: function cerrarModalUno() {
      this.modaluno = 0;
      this.vaciar();
    },
    multiplicar: function multiplicar() {
      this.partidas.importe = this.partidas.cantidad * this.partidas.valor_unitario;
    },
    CalcularTotalDLS: function CalcularTotalDLS(e) {
      var dls = e.target.value;
      var tc = this.partidas_pagos.tipo_cambio_dr;
      var total = (dls / tc).toFixed(2);
      if (isNaN(total)) total = 0;
      this.partidas_pagos.importe_pagado_mx = total;
    },
    CalcularTotalTC: function CalcularTotalTC(e) {
      var tc = e.target.value;
      var dls = this.partidas_pagos.total_usd;
      var total = (dls / tc).toFixed(2);
      if (isNaN(total)) total = 0;
      this.partidas_pagos.importe_pagado_mx = total;
    },
    /**
     * Metodos de pago
     */
    ObtenerMetodosPago: function ObtenerMetodosPago() {
      var _this2 = this;
      axios.get('/satcatmetodopago?query=%7B%7D&limit=10&ascending=1&page=1&byColumn=1').then(function (response) {
        _this2.list_metodos_pago = response.data.data;
      });
    },
    vaciar: function vaciar() {
      this.partidas_pagos.uuid = '';
      this.partidas_pagos.serie = '';
      this.partidas_pagos.folio = '';
      this.partidas_pagos.saldo_anterior = '';
      this.partidas_pagos.importe_pagado = '';
      this.partidas_pagos.saldo_insoluto = '';
      this.partidas_pagos.factura_id = '';
      this.partidas_pagos.obj_imp = '02';
      // this.partidas.importe = '';
      // this.partidas.descuento = '';
      // this.partidas.factura_id = '';
    },
    eliminar: function eliminar(data) {
      // console.log(data);
      var me = this;
      axios["delete"]('/partidafacturapagos/' + data.id + '&' + data.partidas_facturas_id).then(function (response) {
        toastr.info('Registro eliminado correctamente', 'Atención');
        me.getData(me.datos);
        console.log(response);
      })["catch"](function (error) {
        console.error(error);
      });
    },
    guardar: function guardar(nuevo) {
      var _this3 = this;
      this.$validator.validate().then(function (result) {
        if (result) {
          _this3.isLoading = true;
          var me = _this3;
          axios({
            method: nuevo ? 'POST' : 'PUT',
            url: nuevo ? '/partidafactura' : '/partidafactura/' + _this3.partidas.id,
            data: {
              // id : this.factura.id,
              productos_servicios_id: _this3.partidas.productos_servicios_id.id,
              unidad_id: _this3.partidas.unidad_id,
              cantidad: _this3.partidas.cantidad,
              unidad: _this3.partidas.unidad,
              numero_identificacion: _this3.partidas.numero_identificacion,
              descripcion: _this3.partidas.descripcion,
              valor_unitario: _this3.partidas.valor_unitario,
              importe: _this3.partidas.importe,
              descuento: _this3.partidas.descuento,
              impuesto_iva: _this3.partidas.impuesto_iva,
              factura_id: _this3.partidas.factura_id
            }
          }).then(function (response) {
            me.isLoading = false;
            // if (response.data.status) {

            me.cerrarModal();
            toastr.success(nuevo ? 'Concepto agregada correctamente' : 'Concepto actualizada correctamente', 'Correcto');
            me.getData(response.data);

            // }else {
            //   swal({
            //     type: 'error',
            //     html: response.data.errors.join('<br>'),
            //   });
            // }
          })["catch"](function (error) {
            console.log(error);
          });
        }
      });
    },
    guardarUno: function guardarUno(nuevo) {
      var _this4 = this;
      if (this.validadouno == '1') {
        this.$validator.validate().then(function (result) {
          if (result) {
            _this4.isLoading = true;
            var me = _this4;
            var data = new FormData();
            if (_this4.pago_dolares) {
              // Si se marcó 'pago en dolares' se guardan los datos correspondientes DR
              data.append("total_usd", _this4.partidas_pagos.total_usd);
              data.append("tipo_cambio_dr", _this4.partidas_pagos.tipo_cambio_dr);
              data.append("metodo_pago_dr", _this4.partidas_pagos.metodo_pago_dr);
              data.append("importe_pagado_mx", _this4.partidas_pagos.importe_pagado_mx);
              data.append("pago_dolares", _this4.pago_dolares ? 1 : 0);
            }
            data.append("factura_id", _this4.partidas_pagos.factura_id === '' ? '' : _this4.partidas_pagos.factura_id.id);
            data.append("num_parcialidad", _this4.partidas_pagos.num_parcialidad);
            data.append("saldo_anterior", _this4.partidas_pagos.saldo_anterior);
            data.append("importe_pagado", _this4.partidas_pagos.importe_pagado);
            data.append("saldo_insoluto", _this4.partidas_pagos.saldo_insoluto);
            data.append("uuid", _this4.partidas_pagos.uuid);
            data.append("serie", _this4.partidas_pagos.serie);
            data.append("folio", _this4.partidas_pagos.folio);
            data.append("obj_imp", _this4.partidas_pagos.obj_imp);
            data.append("partidas_facturas_id", _this4.tableData.data[0].id);
            axios.post('/partidafacturapagos', data).then(function (response) {
              _this4.partidas_pagos.total_usd = 0;
              // this.partidas_pagos.tipo_cambio_dr=0;
              _this4.partidas_pagos.metodo_pago_dr = 0;
              me.isLoading = false;
              me.cerrarModalUno();
              toastr.success(nuevo ? 'Concepto agregada correctamente' : 'Concepto actualizada correctamente', 'Correcto');
              me.getData(response.data);
            })["catch"](function (error) {
              console.log(error);
            });
          }
        });
      }
    },
    estado: function estado() {
      if ($("#anterior").prop("checked")) {
        this.anterior = true;
        this.existente = false;
        this.partidas_pagos.factura_id = '';
        this.partidas_pagos.serie = '';
        this.partidas_pagos.folio = '';
      } else {
        this.existente = true;
        this.anterior = false;
        // this.partidas_pagos.uuid = '';
        this.partidas_pagos.serie = '';
        this.partidas_pagos.folio = '';
      }
    },
    verfactura: function verfactura() {
      var _this5 = this;
      // console.log(this.factura.factura_id);
      axios.get('/factura/' + (this.partidas_pagos.factura_id == '' ? 0 : this.partidas_pagos.factura_id.id)).then(function (response) {
        _this5.partidas_pagos.serie = response.data.serie;
        _this5.partidas_pagos.folio = response.data.folio;
        _this5.partidas_pagos.uuid = response.data.uuid;
        _this5.partidas_pagos.saldo_anterior = response.data.total;
      })["catch"](function (err) {
        console.log(err);
      });
    },
    validaMonto: function validaMonto() {
      if (parseFloat(this.partidas_pagos.importe_pagado) > parseFloat(this.partidas_pagos.saldo_anterior)) {
        toastr.warning('No se puede pagar una cantidad mayor a el saldo anterior', 'Error');
        this.partidas_pagos.importe_pagado = '';
      }
    },
    validaUno: function validaUno() {
      var estado = 0;
      var serie = this.partidas_pagos.serie;
      var folio = this.partidas_pagos.folio;
      var uuid = this.partidas_pagos.uuid;
      var anterior = this.partidas_pagos.saldo_anterior;
      var pagado = this.partidas_pagos.importe_pagado;
      var insoluto = this.partidas_pagos.saldo_insoluto;
      var parcial = this.partidas_pagos.num_parcialidad;
      if (serie === '' || folio === '' || uuid === '' || anterior === '' || pagado === '' || insoluto === '' || parcial === '') {
        estado = 0;
        toastr.warning('Complete todos los campos', 'Atención');
      } else {
        estado = 1;
      }
      this.validadouno = estado;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Contabilidad/Factura/Factura.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Contabilidad/Factura/Factura.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Herramientas/utilerias.js */ "./resources/assets/js/components/Herramientas/utilerias.js");

var config = (__webpack_require__(/*! ../../Herramientas/config-vuetables-client */ "./resources/assets/js/components/Herramientas/config-vuetables-client.js").call)(undefined);
var Conceptos = function Conceptos(r) {
  return __webpack_require__.e(/*! require.ensure | conta */ "conta").then((function () {
    return r(__webpack_require__(/*! ./Conceptos.vue */ "./resources/assets/js/components/Contabilidad/Factura/Conceptos.vue"));
  }).bind(null, __webpack_require__))['catch'](__webpack_require__.oe);
};
var ConceptosPagos = function ConceptosPagos(r) {
  return __webpack_require__.e(/*! require.ensure | conta */ "conta").then((function () {
    return r(__webpack_require__(/*! ./ConceptosPagos.vue */ "./resources/assets/js/components/Contabilidad/Factura/ConceptosPagos.vue"));
  }).bind(null, __webpack_require__))['catch'](__webpack_require__.oe);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      usuario_texto: '',
      isLoading: false,
      dasabiltarMonedas: false,
      desabilitartax: true,
      datos_relaccionados: null,
      array_relacionados: [],
      modal: 0,
      contador: 0,
      tituloModal: '',
      tipoAccion: 0,
      detalle: 1,
      list_emisores: '',
      optionsvsex: [],
      ante: false,
      exis: false,
      id_buscar_emisor: 0,
      factura: {
        id: '',
        emisor_id: '',
        tipo_factura_id: '',
        cliente_id: '',
        uso_factura: '',
        fecha_hora: '',
        codigo_postal: '',
        moneda_id: '',
        formapago: '',
        metodopago: '',
        tipo_cambio: '',
        condicion_pago: '',
        tipo_relacion: '',
        factura_id: '',
        uuid: '',
        taxid: '',
        clave_ob: '',
        orden_ob: '',
        num_operacion: '',
        ban_ordenante: '',
        cuenta_ordenante: '',
        adenda: '',
        proveeade: '',
        ante: '',
        exis: '',
        uuid_relacionado: '',
        fecha_pago: '',
        rfc_cuenta_ordenante: '',
        rfc_cuenta_beneficiario: ''
      },
      Clientes: [],
      cliente: {},
      UsoFactura: [],
      Monedas: [],
      FormaPago: [],
      MetodoPago: [],
      TipoFactura: [],
      TipoRelacion: [],
      optionsvsps: [],
      DatosGenerales: {
        rfc: '',
        razon_social: '',
        nombre: '',
        regimenfiscal: ''
      },
      Receptor: {
        rfc: '',
        nombre: '',
        contacto: ''
      },
      tableData: [],
      columns: ['id', 'serie', 'folio', 'rfc_receptor', 'nombre_razons_receptor', 'fecha_hora', 'c_tipofactura', 'uuid', 'clave_ob', 'orden_ob', 'total', 'condicion_pago', 'timbrado'],
      options: {
        headings: {
          'id': 'Acciones',
          'c_tipofactura': 'Efecto',
          'rfc_receptor': 'RFC Receptor',
          'nombre_razons_receptor': 'Razón social',
          'fecha_hora': 'Fecha de emisión',
          'timbrado': 'Estado',
          'uuid': 'UUID'
        },
        perPage: 10,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        filterByColumn: true,
        texts: config.texts,
        listColumns: {
          timbrado: [{
            id: 0,
            text: 'Nuevo'
          }, {
            id: 1,
            text: 'Timbrado'
          }, {
            id: 2,
            text: 'Cancelado'
          }]
        },
        requestAdapter: function requestAdapter(data) {
          var arr = [];
          arr.push({
            'c.nombre': data.query.nombre_razons_receptor,
            'c.rfc': data.query.rfc_receptor,
            'factura.fecha_hora': data.query.fecha_hora,
            'c_tipofactura': data.query.c_tipofactura,
            'factura.uuid': data.query.uuid,
            'factura.total': data.query.total,
            'factura.timbrado': data.query.timbrado,
            'factura.clave_ob': data.query.clave_ob,
            'factura.orden_ob': data.query.orden_ob,
            'factura.serie': data.query.serie,
            'factura.folio': data.query.folio
          });
          data.query = arr[0];
          return data;
        }
      }
    };
  },
  components: {
    'conceptos': Conceptos,
    'conceptospagos': ConceptosPagos
  },
  methods: {
    /**
     * [getData se obtiene los datos nesesarios para utilizar en el formulario]
     * @return
     */
    getData: function getData() {
      var _this = this;
      /**
       * Obtener las empresas para emisión de factura
       */
      axios.get('/datosgenerales?query=%7B%7D&limit=10&ascending=1&page=1&byColumn=1').then(function (response) {
        _this.list_emisores = response.data.data;
      });
    },
    /**
     * Tipo relación
     */
    ObtenerTipoRelacion: function ObtenerTipoRelacion() {
      var _this2 = this;
      axios.get('/satcattiporelacion?query=%7B%7D&limit=10&ascending=1&page=1&byColumn=1').then(function (response) {
        _this2.TipoRelacion = response.data.data;
      });
    },
    /**
     * Metodos de pago
     */
    ObtenerMetodosPago: function ObtenerMetodosPago() {
      var _this3 = this;
      axios.get('/satcatmetodopago?query=%7B%7D&limit=10&ascending=1&page=1&byColumn=1').then(function (response) {
        _this3.MetodoPago = response.data.data;
      });
    },
    /**
     * Tipo de factura
     */
    ObtenerTipoFactura: function ObtenerTipoFactura() {
      var _this4 = this;
      axios.get('/satcattipofactura?query=%7B%7D&limit=10&ascending=1&page=1&byColumn=1').then(function (response) {
        _this4.TipoFactura = response.data.data;
      });
    },
    /**
     * Obtener formas de pago
     */
    ObtenerFormasPago: function ObtenerFormasPago() {
      var _this5 = this;
      axios.get('/satcatformpago?query=%7B%7D&limit=10&ascending=1&page=1&byColumn=1').then(function (response) {
        _this5.FormaPago = response.data;
      });
    },
    /**
     * Obtener monedas
     */
    ObtenerMonedas: function ObtenerMonedas() {
      var _this6 = this;
      axios.get('/satcatmonedas?query=%7B%7D&limit=10&ascending=1&page=1&byColumn=1').then(function (response) {
        _this6.Monedas = response.data.data;
      });
    },
    /**
     * Obtener facturas
     */
    ObtenerFacturas: function ObtenerFacturas() {
      var _this7 = this;
      /**
       * Obtener facturas
       */
      axios.get('/catfactura?query=%7B%7D&limit=10&ascending=1&page=1&byColumn=1').then(function (response) {
        if (response.data.data.length != 0) {
          for (var i = 0; i < response.data.data.length; i++) {
            if (response.data.data[i].timbrado == '1') {
              _this7.optionsvsex.push({
                id: response.data.data[i].id,
                name: response.data.data[i].serie + ' ' + response.data.data[i].folio + ' ' + response.data.data[i].uuid
              });
              _this7.contador += 1;
            }
          }
        }
      });
    },
    /**
     * Obtener los clientes
     */
    ObtenerClientes: function ObtenerClientes() {
      var _this8 = this;
      axios.get('/clientes').then(function (res) {
        if (res.data.status) {
          _this8.Clientes = res.data.clientes;
        } else {
          toastr.errror(res.data.mensaje);
        }
      });
    },
    /**
     * Obtener uso CFDI
     */
    obtenercfdi: function obtenercfdi() {
      var _this9 = this;
      axios.get('/satcatusocfdi?query=%7B%7D&limit=10&ascending=1&page=1&byColumn=1').then(function (response) {
        _this9.UsoFactura = response.data.data;
      })["catch"](function (error) {
        console.error(error);
      });
    },
    /**
     * Abrir modal
     */
    abrirModal: function abrirModal() {
      var _this0 = this;
      var nuevo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      this.ObtenerClientes();
      this.obtenercfdi();
      this.ObtenerFacturas();
      this.ObtenerMonedas();
      this.ObtenerTipoFactura();
      this.ObtenerMetodosPago();
      this.ObtenerFormasPago();
      this.ObtenerTipoRelacion();
      if (nuevo) {
        this.modal = 1;
        this.tituloModal = 'Registrar factura';
        this.tipoAccion = 1;
        this.vaciar();
        this.verfechahora();
        $("#gridRadios1").prop("checked", true);
      } else {
        this.vaciar();
        var texto = data['fecha_hora'];
        var separadores = ['-', ':', ' '];
        var textoseparado = texto.split(new RegExp(separadores.join('|'), 'g'));
        if (data['fecha_pago'] != null) {
          var texto_p = data['fecha_pago'];
          var separadores_p = ['-', ':', ' '];
          var textoseparado_p = texto_p.split(new RegExp(separadores_p.join('|'), 'g'));
        }
        this.modal = 1;
        this.tituloModal = 'Actualizar factura';
        this.tipoAccion = 2;
        this.factura.id = data['id'];
        this.factura.emisor_id = data['emisor_id'];
        this.factura.tipo_factura_id = data['tipo_factura_id'];
        this.cliente.id = data['cliente_id'];
        this.factura.uso_factura = data['uso_factura'];
        this.factura.fecha_hora = textoseparado[0] + '-' + textoseparado[1] + '-' + textoseparado[2] + 'T' + textoseparado[3] + ':' + textoseparado[4];
        this.factura.codigo_postal = data['codigo_postal'];
        this.factura.moneda_id = data['moneda_id'];
        this.factura.formapago = data['formapago'];
        this.factura.metodopago = data['metodopago'];
        this.factura.tipo_cambio = data['tipo_cambio'];
        this.factura.condicion_pago = data['condicion_pago'];
        this.factura.taxid = data['taxid'];
        this.factura.clave_ob = data['clave_ob'];
        this.factura.orden_ob = data['orden_ob'];
        this.factura.adenda = data['adenda'];
        this.factura.proveeade = data['proveeade'];
        this.factura.num_operacion = data['num_operacion'];
        this.factura.cuenta_ordenante = data['cuenta_ordenante'];
        this.factura.rfc_cuenta_ordenante = data['rfc_cuenta_ordenante'];
        this.factura.rfc_cuenta_beneficiario = data['rfc_cuenta_beneficiario'];
        this.factura.ban_ordenante = data['ban_ordenante'];
        this.factura.tipo_relacion = data['tipo_relacion'];
        this.factura.fecha_pago = data['fecha_pago'] == null ? '' : textoseparado_p[0] + '-' + textoseparado_p[1] + '-' + textoseparado_p[2] + 'T' + textoseparado_p[3] + ':' + textoseparado_p[4];
        ;
        this.factura.factura_id = data['factura_id'] == null ? '' : {
          id: data['factura_id'],
          name: data['serie_relacionado'] + ' ' + data['folio_relacionado'] + ' ' + data['uuid_relacionado_f']
        };
        axios.get('get/relacionados/' + data['id']).then(function (response) {
          response.data.forEach(function (item, i) {
            _this0.array_relacionados.push({
              id: item.id,
              name: item.uuid
            });
          });
        })["catch"](function (error) {
          console.error(error);
        });
        this.vertipo();
        this.vertipouno();
        this.llenarDatosCliente();
      }
    },
    /**
     * [verfechahora Funcion que obtiene la hora y fecha atual del sistema]
     * @return
     */
    verfechahora: function verfechahora() {
      var d = new Date();
      this.factura.fecha_hora = d.getFullYear() + '-' + (d.getMonth() + 1 < 10 ? '0' + (d.getMonth() + 1) : d.getMonth() + 1) + '-' + (d.getDate() < 10 ? '0' + d.getDate() : d.getDate()) + 'T' + (d.getHours() < 10 ? '0' + d.getHours() : d.getHours()) + ':' + (d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes());
    },
    cerrarModal: function cerrarModal() {
      this.modal = 0;
    },
    vaciar: function vaciar() {
      this.factura.tipo_factura_id = '';
      this.cliente.id = '';
      this.factura.uso_factura = '';
      this.factura.fecha_hora = '';
      this.factura.moneda_id = '';
      this.factura.formapago = '';
      this.factura.metodopago = '';
      this.factura.tipo_cambio = '';
      this.factura.condicion_pago = '';
      this.factura.taxid = '';
      this.factura.factura_id = '';
      this.factura.tipo_relacion = '';
      this.factura.uuid_relacionado = '';
      this.factura.num_operacion = '';
      this.factura.ban_ordenante = '';
      this.factura.cuenta_ordenante = '';
      this.factura.rfc_cuenta_ordenante = '';
      this.factura.rfc_cuenta_beneficiario = '';
      this.factura.fecha_pago = '';
      this.array_relacionados = [];
      _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.Receptor);
    },
    tipomoneda: function tipomoneda() {
      if (this.factura.moneda_id == 1) {
        this.dasabiltarMonedas = true;
        this.factura.tipo_cambio = '1';
      } else {
        this.dasabiltarMonedas = false;
        this.factura.tipo_cambio = '';
      }
    },
    /**
     * [llenarDatosCliente Funcion que completa los campos del formulario relacionados con el cliente en este caso el receptor haciendo UNA
     *  busqueda de un cliente en especifico]
     * @return
     */
    llenarDatosCliente: function llenarDatosCliente() {
      var _this1 = this;
      if (this.cliente != null) {
        console.error(this.Receptor);
        axios.get('/clientes/' + this.cliente.id).then(function (res) {
          if (res.data.status) {
            _this1.Receptor.rfc = res.data.cliente.rfc;
            _this1.Receptor.nombre = res.data.cliente.nombre;
            _this1.Receptor.contacto = res.data.cliente.contacto;
          } else {
            toastr.error(res.data.mensaje);
          }
        });
      }
    },
    /**
     * [guardar Funcion que guarda o actualiza los encabezados de las facturas]
     * @param nuevo
     * @returnfecha_pago
     */
    guardar: function guardar(nuevo) {
      var _this10 = this;
      this.$validator.validate().then(function (result) {
        if (result) {
          _this10.isLoading = true;
          var me = _this10;
          axios({
            method: nuevo ? 'POST' : 'PUT',
            url: nuevo ? '/factura' : '/factura/' + _this10.factura.id,
            data: {
              emisor_id: _this10.factura.emisor_id,
              tipo_factura_id: _this10.factura.tipo_factura_id,
              cliente_id: _this10.cliente.id,
              uso_factura: _this10.factura.uso_factura,
              fecha_hora: _this10.factura.fecha_hora,
              codigo_postal: _this10.factura.codigo_postal,
              moneda_id: _this10.factura.moneda_id,
              formapago: _this10.factura.formapago,
              metodopago: _this10.factura.metodopago,
              tipo_cambio: _this10.factura.tipo_cambio,
              condicion_pago: _this10.factura.condicion_pago,
              taxid: _this10.factura.taxid,
              tipo_relacion: _this10.factura.tipo_relacion,
              factura_id: _this10.factura.factura_id == '' ? '' : _this10.factura.factura_id.id,
              uuid_relacionado: _this10.factura.uuid_relacionado,
              clave_ob: _this10.factura.clave_ob,
              orden_ob: _this10.factura.orden_ob,
              adenda: _this10.factura.adenda,
              proveeade: _this10.factura.proveeade,
              num_operacion: _this10.factura.num_operacion,
              ban_ordenante: _this10.factura.ban_ordenante,
              cuenta_ordenante: _this10.factura.cuenta_ordenante,
              rfc_cuenta_ordenante: _this10.factura.rfc_cuenta_ordenante,
              rfc_cuenta_beneficiario: _this10.factura.rfc_cuenta_beneficiario,
              fecha_pago: _this10.factura.fecha_pago,
              relacionados: _this10.array_relacionados
            }
          }).then(function (response) {
            me.isLoading = false;
            if (response.data.status) {
              if (response.data.status === 'error') {
                swal({
                  type: 'error',
                  html: 'Ha ocurrido un error notifiqué al administrador y recarge la página'
                });
                me.cerrarModal();
              } else {
                me.contador = 0;
                me.cerrarModal();
                toastr.success(nuevo ? 'Factura agregada correctamente' : 'Factura actualizada correctamente', 'Correcto');
                me.verfacturas(response.data.emisor_id);
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
    /**
     * [agregar description]
     * @return {[type]} [description]
     */
    agregarI: function agregarI(data) {
      this.detalle = 2;
      var childConceptos = this.$refs.conceptos;
      childConceptos.getData(data, this.optionsvsps);
    },
    agregarP: function agregarP(data) {
      this.detalle = 3;
      var childConceptosPagos = this.$refs.conceptospagos;
      childConceptosPagos.getData(data);
    },
    maestro: function maestro() {
      this.detalle = 1;
    },
    maestrop: function maestrop() {
      this.detalle = 1;
    },
    timbrar: function timbrar(data) {
      var _this11 = this;
      Swal.fire({
        title: 'Esta seguro(a) de timbrar?',
        text: "Esta opción no se podrá desahacer!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si',
        cancelButtonText: 'No'
      }).then(function (result) {
        if (result.value) {
          _this11.isLoading = true;
          axios.get('/partidafactura/' + data.id + '?query=%7B%7D&limit=10&ascending=1&page=1&byColumn=1').then(function (response) {
            if (response.data.count == 0) {
              toastr.warning('No se puede timbrar hasta tener conceptos registrados', 'Atención');
              _this11.isLoading = false;
            } else {
              axios.get('/sellartimbrarfactura/' + data.id).then(function (response) {
                if (response.data.status) {
                  _this11.isLoading = false;
                  _this11.contador = 0;
                  toastr.success('Factura timbrada correctamente !!!', 'Correcto');
                  _this11.verfacturas(response.data.emisor_id);
                } else {
                  _this11.isLoading = false;
                  toastr.warning('Ha occurrido un error !!!', 'Atención');
                  swal({
                    type: 'error',
                    html: response.data.respuesta
                  });
                }
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
    timbrarprueba: function timbrarprueba(data) {
      var _this12 = this;
      Swal.fire({
        title: 'Esta seguro(a) de timbrar a prueba?',
        text: "Esta opción no se podrá desahacer!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si',
        cancelButtonText: 'No'
      }).then(function (result) {
        if (result.value) {
          _this12.isLoading = true;
          axios.get('/partidafactura/' + data.id + '?query=%7B%7D&limit=10&ascending=1&page=1&byColumn=1').then(function (response) {
            if (response.data.count == 0) {
              toastr.warning('No se puede timbrar hasta tener conceptos registrados', 'Atención');
              _this12.isLoading = false;
            } else {
              axios.get('/sellartimbrarfactura/prueba/' + data.id).then(function (response) {
                if (response.data.status) {
                  _this12.isLoading = false;
                  _this12.contador = 0;
                  toastr.success('Factura timbrada correctamente !!!', 'Correcto');
                  _this12.verfacturas(response.data.emisor_id);
                } else {
                  _this12.isLoading = false;
                  toastr.warning('Ha occurrido un error !!!', 'Atención');
                  swal({
                    type: 'error',
                    html: response.data.respuesta
                  });
                }
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
    descargar: function descargar(data) {
      window.open('/descargarfactura/' + data.archivo, '_blank');
    },
    descargarprueba: function descargarprueba(data) {
      window.open('/descargarfactura/prueba/' + data.archivo, '_blank');
    },
    descargarprefactura: function descargarprefactura(data) {
      window.open('/descargarprefactura/' + data.id, '_blank');
    },
    extranjero: function extranjero() {
      var _this13 = this;
      this.desabilitartax = false;
      axios.get('/clientextranjero').then(function (response) {
        _this13.cliente.id = response.data.id;
        _this13.Receptor.rfc = response.data.rfc;
        _this13.Receptor.nombre = response.data.nombre;
        _this13.Receptor.contacto = response.data.contacto;
        _this13.factura.uso_factura = 22;
      })["catch"](function (error) {
        console.error(error);
      });
    },
    nacional: function nacional() {
      this.desabilitartax = true;
      this.cliente.id = '';
      this.Receptor.rfc = '';
      this.Receptor.nombre = '';
      this.Receptor.contacto = '';
      this.factura.uso_factura = '';
      this.factura.taxid = '';
    },
    vertipo: function vertipo() {
      if (this.factura.taxid == null) {
        $("#gridRadios1").prop("checked", true);
        $("#gridRadios2").prop("checked", false);
        this.desabilitartax = true;
      } else if (this.factura.taxid != null) {
        $("#gridRadios1").prop("checked", false);
        $("#gridRadios2").prop("checked", true);
        this.desabilitartax = false;
      }
    },
    vertipouno: function vertipouno() {
      if (this.factura.factura_id == '') {
        $("#gridRadios3").prop("checked", true);
        $("#gridRadios4").prop("checked", false);
        this.ante = true;
        this.exis = false;
        this.factura.factura_id = '';
      } else if (this.factura.factura_id != '') {
        $("#gridRadios4").prop("checked", true);
        $("#gridRadios3").prop("checked", false);
        this.ante = false;
        this.exis = true;
        this.factura.uuid_relacionado = '';
      }
    },
    observaciones: function observaciones(data) {
      if (data.target.checked == true) {
        $("#clave_ob").prop("disabled", false);
        $("#orden_ob").prop("disabled", false);
        $("#adenda").prop("disabled", false);
        $("#proveeade").prop("disabled", false);
      } else {
        $("#clave_ob").prop("disabled", true);
        $("#orden_ob").prop("disabled", true);
        $("#adenda").prop("disabled", true);
        $("#proveeade").prop("disabled", true);
        this.factura.orden_ob = '';
        this.factura.clave_ob = '';
        this.factura.proveeade = '';
        this.factura.adenda = '';
      }
    },
    cancelarfactura: function cancelarfactura(data) {
      var _this14 = this;
      Swal.fire({
        title: 'Esta seguro(a) de cancelar?',
        text: "Esta opción no se podrá desahacer!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si',
        cancelButtonText: 'No'
      }).then(function (result) {
        if (result.value) {
          axios.get('/partidafactura/cancelarfactura/' + data.id).then(function (response) {
            if (response.data.status) {
              _this14.isLoading = false;
              toastr.success('Factura cancelada correctamente !!!', 'Correcto');
              _this14.verfacturas(response.data.emisor_id);
            } else {
              _this14.isLoading = false;
              toastr.warning('Ha occurrido un error !!!', 'Atención');
              swal({
                type: 'error',
                html: response.data.respuesta
              });
            }
          })["catch"](function (err) {
            console.error(err);
          });
        }
      });
    },
    guardarDG: function guardarDG() {
      var _this15 = this;
      axios.get('/datosgeneral/' + this.factura.emisor_id).then(function (response) {
        _this15.DatosGenerales.razon_social = response.data.razon_social;
        _this15.DatosGenerales.nombre = response.data.nombre;
        _this15.DatosGenerales.regimenfiscal = response.data.regimenfiscal;
        _this15.factura.codigo_postal = response.data.codigo_postal;
      })["catch"](function (err) {
        console.error(error);
      });
    },
    timbresRestantes: function timbresRestantes() {
      axios.get('/timbresrestantes').then(function (response) {
        Swal.fire('Timbres Restantes', 'Conserflow :' + response.data.c);
      })["catch"](function (err) {
        console.error(error);
      });
    },
    verfacturas: function verfacturas(id) {
      this.usuario_texto = id == 1 ? 'CONSERFLOW SA DE CV' : '-';
      this.id_buscar_emisor = id;
      this.$refs.tabla.refresh();
    },
    descargarxml: function descargarxml(data) {
      axios.get("/descargarfacturareportexml/" + data.archivo).then(function (res) {
        if (!res.data.status) {
          alert("Factura no encontrada");
          return;
        }
        var xml = res.data.factura.xml.replace("\n", "");
        var uri = 'data:text/xml;charset=utf-8,' + xml;
        var downloadLink = document.createElement("a");
        downloadLink.href = uri;
        downloadLink.download = res.data.factura.nombre;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        window.open('data:text/xml,' + encodeURIComponent(stupidExample));
      });
    },
    descargarxmlprueba: function descargarxmlprueba(data) {
      var me = this;
      axios({
        url: '/descargarfacturareportexml/' + data.archivo + 'timp.xml',
        method: 'GET',
        responseType: 'blob' // importante
      }).then(function (response) {
        var url = window.URL.createObjectURL(new Blob([response.data]));
        var link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', data.archivo + 'timp.xml'); //archivo = nombre del archivo alojado en el ftp
        document.body.appendChild(link);
        link.click();
        //--Llama el metodo para borrar el archivo local una ves descargado--//
        axios["delete"]('/eliminarfacturareportexml/' + data.archivo + 'timp.xml').then(function (response) {})["catch"](function (error) {
          console.log(error);
        });
        //--fin del metodo borrar--//
      });
    },
    edo: function edo() {
      if ($("#gridRadios3").prop("checked")) {
        this.ante = true;
        this.exis = false;
        this.factura.factura_id = '';
      } else {
        this.ante = false;
        this.exis = true;
        this.factura.uuid_relacionado = '';
      }
    },
    guardaRelaccion: function guardaRelaccion() {
      if (this.ante == true) {
        this.array_relacionados.push({
          id: 0,
          name: this.factura.uuid_relacionado
        });
      }
      if (this.exis == true) {
        this.array_relacionados.push({
          id: 0,
          name: this.factura.factura_id.name
        });
      }
      this.factura.uuid_relacionado = '';
      this.factura.factura_id = '';
    },
    eliminar_aignacion: function eliminar_aignacion(data, index) {
      if (data.id == 0) {
        this.array_relacionados.splice(index, 1);
      } else {
        var me = this;
        var id = data['id'];
        axios.get("relaciones/eliminar/".concat(id)).then(function (response) {
          me.array_relacionados.splice(index, 1);
        })["catch"](function (error) {
          console.log(error);
        });
      }
    },
    cancelarprueba: function cancelarprueba(data) {
      var _this16 = this;
      axios.get('cancelar/prueba/' + data.id).then(function (response) {
        toastr.success('Cancelado Correctamente!!!');
        _this16.verfacturas(response.data.emisor_id);
        // console.log(response);
      })["catch"](function (e) {
        console.error(e);
      });
    }
  },
  mounted: function mounted() {
    this.getData();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Contabilidad/Factura/Facturav4.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Contabilidad/Factura/Facturav4.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Herramientas/utilerias.js */ "./resources/assets/js/components/Herramientas/utilerias.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

var config = (__webpack_require__(/*! ../../Herramientas/config-vuetables-client */ "./resources/assets/js/components/Herramientas/config-vuetables-client.js").call)(undefined);
var Conceptos = function Conceptos(r) {
  return __webpack_require__.e(/*! require.ensure | conta */ "conta").then((function () {
    return r(__webpack_require__(/*! ./Conceptos.vue */ "./resources/assets/js/components/Contabilidad/Factura/Conceptos.vue"));
  }).bind(null, __webpack_require__))['catch'](__webpack_require__.oe);
};
var ConceptosPagos = function ConceptosPagos(r) {
  return __webpack_require__.e(/*! require.ensure | conta */ "conta").then((function () {
    return r(__webpack_require__(/*! ./ConceptosPagos.vue */ "./resources/assets/js/components/Contabilidad/Factura/ConceptosPagos.vue"));
  }).bind(null, __webpack_require__))['catch'](__webpack_require__.oe);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      usuario_texto: '',
      isLoading: false,
      dasabiltarMonedas: false,
      desabilitartax: true,
      datos_relaccionados: null,
      array_relacionados: [],
      modal: 0,
      contador: 0,
      emisor_id: 0,
      tituloModal: '',
      tipoAccion: 0,
      detalle: 1,
      list_emisores: '',
      optionsvsex: [],
      ante: false,
      exis: false,
      id_buscar_emisor: 0,
      factura: {
        id: '',
        emisor_id: '',
        tipo_factura_id: '',
        cliente_id: '',
        uso_factura: '',
        fecha_hora: '',
        codigo_postal: '',
        moneda_id: '',
        formapago: '',
        metodopago: '',
        tipo_cambio: '',
        condicion_pago: '',
        tipo_relacion: '',
        factura_id: '',
        uuid: '',
        taxid: '',
        clave_ob: '',
        orden_ob: '',
        num_operacion: '',
        ban_ordenante: '',
        cuenta_ordenante: '',
        adenda: '',
        proveeade: '',
        ante: '',
        exis: '',
        uuid_relacionado: '',
        fecha_pago: '',
        rfc_cuenta_ordenante: '',
        rfc_cuenta_beneficiario: '',
        exportacion: "01"
      },
      Clientes: [],
      cliente: {},
      UsoFactura: [],
      Monedas: [],
      FormaPago: [],
      MetodoPago: [],
      TipoFactura: [],
      TipoRelacion: [],
      optionsvsps: [],
      DatosGenerales: {
        rfc: '',
        razon_social: '',
        nombre: '',
        regimenfiscal: ''
      },
      Receptor: {
        rfc: '',
        nombre: '',
        contacto: '',
        regimen_fiscal: "",
        codigo_postal: ""
      },
      tableData: [],
      columns: ['id', 'serie', 'folio', 'rfc_receptor', 'nombre_razons_receptor', 'fecha_hora', 'c_tipofactura', 'uuid', 'clave_ob', 'orden_ob', 'total', 'condicion_pago', 'timbrado'],
      sortable: ['id', 'serie', 'folio', 'rfc_receptor', 'nombre_razons_receptor', 'fecha_hora', 'c_tipofactura', 'uuid', 'clave_ob', 'orden_ob', 'total', 'condicion_pago', 'timbrado'],
      options: {
        headings: {
          'id': 'Acciones',
          'c_tipofactura': 'Efecto',
          'rfc_receptor': 'RFC Receptor',
          'nombre_razons_receptor': 'Razón social',
          'fecha_hora': 'Fecha de emisión',
          'timbrado': 'Estado',
          'uuid': 'UUID'
        },
        perPage: 10,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        filterByColumn: true,
        texts: config.texts,
        listColumns: {
          timbrado: [{
            id: 0,
            text: 'Nuevo'
          }, {
            id: 1,
            text: 'Timbrado'
          }, {
            id: 2,
            text: 'Cancelado'
          }, {
            id: 9,
            text: 'Prueba'
          }]
        },
        requestAdapter: function requestAdapter(data) {
          var arr = [];
          arr.push({
            'c.nombre': data.query.nombre_razons_receptor,
            'c.rfc': data.query.rfc_receptor,
            'factura.fecha_hora': data.query.fecha_hora,
            'c_tipofactura': data.query.c_tipofactura,
            'factura.uuid': data.query.uuid,
            'factura.total': data.query.total,
            'factura.timbrado': data.query.timbrado,
            'factura.clave_ob': data.query.clave_ob,
            'factura.orden_ob': data.query.orden_ob,
            'factura.serie': data.query.serie,
            'factura.folio': data.query.folio
          });
          data.query = arr[0];
          return data;
        }
      }
    };
  },
  components: {
    'conceptos': Conceptos,
    'conceptospagos': ConceptosPagos
  },
  methods: {
    /**
     * [getData se obtiene los datos nesesarios para utilizar en el formulario]
     * @return
     */
    getData: function getData() {
      var _this = this;
      /**
       * Obtener las empresas para emisión de factura
       */
      axios.get('/datosgenerales?query=%7B%7D&limit=10&ascending=1&page=1&byColumn=1').then(function (response) {
        _this.list_emisores = response.data.data;
      });
    },
    /**
     * Tipo relación
     */
    ObtenerTipoRelacion: function ObtenerTipoRelacion() {
      var _this2 = this;
      axios.get('/satcattiporelacion?query=%7B%7D&limit=10&ascending=1&page=1&byColumn=1').then(function (response) {
        _this2.TipoRelacion = response.data.data;
      });
    },
    /**
     * Metodos de pago
     */
    ObtenerMetodosPago: function ObtenerMetodosPago() {
      var _this3 = this;
      axios.get('/satcatmetodopago?query=%7B%7D&limit=10&ascending=1&page=1&byColumn=1').then(function (response) {
        _this3.MetodoPago = response.data.data;
      });
    },
    /**
     * Tipo de factura
     */
    ObtenerTipoFactura: function ObtenerTipoFactura() {
      var _this4 = this;
      axios.get('/satcattipofactura?query=%7B%7D&limit=10&ascending=1&page=1&byColumn=1').then(function (response) {
        _this4.TipoFactura = response.data.data;
      });
    },
    /**
     * Obtener formas de pago
     */
    ObtenerFormasPago: function ObtenerFormasPago() {
      var _this5 = this;
      axios.get('/satcatformpago?query=%7B%7D&limit=10&ascending=1&page=1&byColumn=1').then(function (response) {
        _this5.FormaPago = response.data;
      });
    },
    /**
     * Obtener monedas
     */
    ObtenerMonedas: function ObtenerMonedas() {
      var _this6 = this;
      axios.get('/satcatmonedas?query=%7B%7D&limit=10&ascending=1&page=1&byColumn=1').then(function (response) {
        _this6.Monedas = response.data.data;
      });
    },
    /**
     * Obtener facturas
     */
    ObtenerFacturas: function ObtenerFacturas() {
      var _this7 = this;
      /**
       * Obtener facturas
       */
      axios.get('/catfactura?query=%7B%7D&limit=10&ascending=1&page=1&byColumn=1').then(function (response) {
        if (response.data.data.length != 0) {
          for (var i = 0; i < response.data.data.length; i++) {
            if (response.data.data[i].timbrado == '1') {
              _this7.optionsvsex.push({
                id: response.data.data[i].id,
                name: response.data.data[i].serie + ' ' + response.data.data[i].folio + ' ' + response.data.data[i].uuid
              });
              _this7.contador += 1;
            }
          }
        }
      });
    },
    /**
     * Obtener los clientes
     */
    ObtenerClientes: function ObtenerClientes() {
      var _this8 = this;
      axios.get('/clientes').then(function (res) {
        if (res.data.status) {
          _this8.Clientes = res.data.clientes;
        } else {
          toastr.errror(res.data.mensaje);
        }
      });
    },
    /**
     * Obtener uso CFDI
     */
    obtenercfdi: function obtenercfdi() {
      var _this9 = this;
      axios.get('/satcatusocfdi?query=%7B%7D&limit=10&ascending=1&page=1&byColumn=1').then(function (response) {
        _this9.UsoFactura = response.data.data;
      })["catch"](function (error) {
        console.error(error);
      });
    },
    /**
     * Abrir modal
     */
    abrirModal: function abrirModal() {
      var _this0 = this;
      var nuevo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      this.ObtenerClientes();
      this.obtenercfdi();
      this.ObtenerFacturas();
      this.ObtenerMonedas();
      this.ObtenerTipoFactura();
      this.ObtenerMetodosPago();
      this.ObtenerFormasPago();
      this.ObtenerTipoRelacion();
      if (nuevo) {
        this.modal = 1;
        this.tituloModal = 'Registrar factura';
        this.tipoAccion = 1;
        this.vaciar();
        this.verfechahora();
        $("#gridRadios1").prop("checked", true);
      } else {
        this.vaciar();
        var texto = data['fecha_hora'];
        var separadores = ['-', ':', ' '];
        var textoseparado = texto.split(new RegExp(separadores.join('|'), 'g'));
        if (data['fecha_pago'] != null) {
          var texto_p = data['fecha_pago'];
          var separadores_p = ['-', ':', ' '];
          var textoseparado_p = texto_p.split(new RegExp(separadores_p.join('|'), 'g'));
        }
        this.modal = 1;
        this.tituloModal = 'Actualizar factura';
        this.tipoAccion = 2;
        this.factura.id = data['id'];
        this.factura.emisor_id = data['emisor_id'];
        this.factura.tipo_factura_id = data['tipo_factura_id'];
        this.cliente.id = data['cliente_id']; //TODO:
        this.factura.uso_factura = data['uso_factura'];
        this.factura.fecha_hora = textoseparado[0] + '-' + textoseparado[1] + '-' + textoseparado[2] + 'T' + textoseparado[3] + ':' + textoseparado[4];
        this.factura.codigo_postal = data['codigo_postal'];
        this.factura.moneda_id = data['moneda_id'];
        this.factura.formapago = data['formapago'];
        this.factura.metodopago = data['metodopago'];
        this.factura.tipo_cambio = data['tipo_cambio'];
        this.factura.condicion_pago = data['condicion_pago'];
        this.factura.taxid = data['taxid'];
        this.factura.clave_ob = data['clave_ob'];
        this.factura.orden_ob = data['orden_ob'];
        this.factura.adenda = data['adenda'];
        this.factura.proveeade = data['proveeade'];
        this.factura.num_operacion = data['num_operacion'];
        this.factura.cuenta_ordenante = data['cuenta_ordenante'];
        this.factura.rfc_cuenta_ordenante = data['rfc_cuenta_ordenante'];
        this.factura.rfc_cuenta_beneficiario = data['rfc_cuenta_beneficiario'];
        this.factura.ban_ordenante = data['ban_ordenante'];
        this.factura.tipo_relacion = data['tipo_relacion'];
        this.factura.fecha_pago = data['fecha_pago'] == null ? '' : textoseparado_p[0] + '-' + textoseparado_p[1] + '-' + textoseparado_p[2] + 'T' + textoseparado_p[3] + ':' + textoseparado_p[4];
        ;
        this.factura.factura_id = data['factura_id'] == null ? '' : {
          id: data['factura_id'],
          name: data['serie_relacionado'] + ' ' + data['folio_relacionado'] + ' ' + data['uuid_relacionado_f']
        };
        axios.get('get/relacionados/' + data['id']).then(function (response) {
          response.data.forEach(function (item, i) {
            _this0.array_relacionados.push({
              id: item.id,
              name: item.uuid
            });
          });
        })["catch"](function (error) {
          console.error(error);
        });
        this.vertipo();
        this.vertipouno();
        this.llenarDatosCliente();
      }
    },
    /**
     * [verfechahora Funcion que obtiene la hora y fecha atual del sistema]
     * @return
     */
    verfechahora: function verfechahora() {
      var d = new Date();
      this.factura.fecha_hora = d.getFullYear() + '-' + (d.getMonth() + 1 < 10 ? '0' + (d.getMonth() + 1) : d.getMonth() + 1) + '-' + (d.getDate() < 10 ? '0' + d.getDate() : d.getDate()) + 'T' + (d.getHours() < 10 ? '0' + d.getHours() : d.getHours()) + ':' + (d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes());
    },
    cerrarModal: function cerrarModal() {
      this.modal = 0;
    },
    vaciar: function vaciar() {
      this.factura.tipo_factura_id = '';
      this.cliente.id = '';
      this.factura.uso_factura = '';
      this.factura.fecha_hora = '';
      this.factura.moneda_id = '';
      this.factura.formapago = '';
      this.factura.metodopago = '';
      this.factura.tipo_cambio = '';
      this.factura.condicion_pago = '';
      this.factura.taxid = '';
      this.factura.factura_id = '';
      this.factura.tipo_relacion = '';
      this.factura.uuid_relacionado = '';
      this.factura.num_operacion = '';
      this.factura.ban_ordenante = '';
      this.factura.cuenta_ordenante = '';
      this.factura.rfc_cuenta_ordenante = '';
      this.factura.rfc_cuenta_beneficiario = '';
      this.factura.fecha_pago = '';
      this.array_relacionados = [];
      _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.Receptor);
    },
    tipomoneda: function tipomoneda() {
      if (this.factura.moneda_id == 1) {
        this.dasabiltarMonedas = true;
        this.factura.tipo_cambio = '1';
      } else {
        this.dasabiltarMonedas = false;
        this.factura.tipo_cambio = '';
      }
    },
    /**
     * 
     */
    llenarDatosCliente: function llenarDatosCliente() {
      var _this1 = this;
      if (this.cliente == null) {
        this.Receptor.nombre = "";
        this.Receptor.rfc = "";
        this.Receptor.contacto = "";
        this.Receptor.codigo_postal = "";
        this.Receptor.regimen_fiscal = "";
        return;
      }
      axios.get('/clientes/' + this.cliente.id).then(function (res) {
        if (res.data.status) {
          if (res.data.cliente == null) {
            _this1.Receptor.nombre = "";
            _this1.Receptor.rfc = "";
            _this1.Receptor.contacto = "";
            _this1.Receptor.codigo_postal = "";
            _this1.Receptor.regimen_fiscal = "";
          } else {
            if (res.data.cliente.regimen_fiscal.length != 3) toastr.warning("Sin Régimen Fiscal");
            _this1.Receptor.nombre = res.data.cliente.nombre;
            _this1.Receptor.rfc = res.data.cliente.rfc;
            _this1.Receptor.codigo_postal = res.data.cliente.codigo_postal;
            _this1.Receptor.contacto = res.data.cliente.contacto;
            _this1.Receptor.regimen_fiscal = res.data.cliente.regimen_fiscal + " - " + res.data.cliente.regimen_fiscal_nombre;
          }
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    /**
     * [guardar Funcion que guarda o actualiza los encabezados de las facturas]
     * @param nuevo
     * @returnfecha_pago
     */
    guardar: function guardar(nuevo) {
      var _this10 = this;
      this.$validator.validate().then(function (result) {
        if (result) {
          _this10.isLoading = true;
          var me = _this10;
          axios({
            method: nuevo ? 'POST' : 'PUT',
            url: nuevo ? '/factura' : '/factura/' + _this10.factura.id,
            data: {
              emisor_id: _this10.factura.emisor_id,
              tipo_factura_id: _this10.factura.tipo_factura_id,
              cliente_id: _this10.cliente.id,
              uso_factura: _this10.factura.uso_factura,
              fecha_hora: _this10.factura.fecha_hora,
              codigo_postal: _this10.factura.codigo_postal,
              moneda_id: _this10.factura.moneda_id,
              formapago: _this10.factura.formapago,
              metodopago: _this10.factura.metodopago,
              tipo_cambio: _this10.factura.tipo_cambio,
              condicion_pago: _this10.factura.condicion_pago,
              taxid: _this10.factura.taxid,
              tipo_relacion: _this10.factura.tipo_relacion,
              factura_id: _this10.factura.factura_id == '' ? '' : _this10.factura.factura_id.id,
              uuid_relacionado: _this10.factura.uuid_relacionado,
              clave_ob: _this10.factura.clave_ob,
              orden_ob: _this10.factura.orden_ob,
              adenda: _this10.factura.adenda,
              proveeade: _this10.factura.proveeade,
              num_operacion: _this10.factura.num_operacion,
              ban_ordenante: _this10.factura.ban_ordenante,
              cuenta_ordenante: _this10.factura.cuenta_ordenante,
              rfc_cuenta_ordenante: _this10.factura.rfc_cuenta_ordenante,
              rfc_cuenta_beneficiario: _this10.factura.rfc_cuenta_beneficiario,
              fecha_pago: _this10.factura.fecha_pago,
              exportacion: _this10.factura.exportacion,
              relacionados: _this10.array_relacionados
            }
          }).then(function (response) {
            me.isLoading = false;
            if (response.data.status) {
              if (response.data.status === 'error') {
                swal({
                  type: 'error',
                  html: 'Ha ocurrido un error notifiqué al administrador y recarge la página'
                });
                me.cerrarModal();
              } else {
                me.contador = 0;
                me.cerrarModal();
                toastr.success(nuevo ? 'Factura agregada correctamente' : 'Factura actualizada correctamente', 'Correcto');
                me.verfacturas(response.data.emisor_id);
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
    /**
     * [agregar description]
     * @return {[type]} [description]
     */
    agregarI: function agregarI(data) {
      this.detalle = 2;
      var childConceptos = this.$refs.conceptos;
      childConceptos.getData(data, this.optionsvsps);
    },
    agregarP: function agregarP(data) {
      this.detalle = 3;
      var childConceptosPagos = this.$refs.conceptospagos;
      childConceptosPagos.getData(data);
    },
    maestro: function maestro() {
      this.detalle = 1;
    },
    maestrop: function maestrop() {
      this.detalle = 1;
    },
    timbrar: function timbrar(data) {
      var _this11 = this;
      Swal.fire({
        title: 'Esta seguro(a) de timbrar?',
        text: "Esta opción no se podrá desahacer!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si',
        cancelButtonText: 'No'
      }).then(function (result) {
        if (result.value) {
          _this11.isLoading = true;
          axios.get('/partidafactura/' + data.id + '?query=%7B%7D&limit=10&ascending=1&page=1&byColumn=1').then(function (response) {
            if (response.data.count == 0) {
              toastr.warning('No se puede timbrar hasta tener conceptos registrados', 'Atención');
              _this11.isLoading = false;
            } else {
              axios.get('/sellartimbrarfactura/' + data.id).then(function (res) {
                if (res.data.status) {
                  _this11.isLoading = false;
                  _this11.contador = 0;
                  toastr.success('Factura timbrada correctamente !!!', 'Correcto');
                  _this11.verfacturas(_this11.emisor_id);
                } else {
                  _this11.isLoading = false;
                  toastr.warning('Ha occurrido un error !!!', 'Atención');
                  swal({
                    type: 'error',
                    html: res.data.respuesta
                  });
                }
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
    TimbrarV4: function TimbrarV4(data) {
      var _arguments = arguments,
        _this12 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var prueba, modo, continuar, res;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              prueba = _arguments.length > 1 && _arguments[1] !== undefined ? _arguments[1] : true;
              modo = prueba ? "Modo de Prueba" : "";
              _context.n = 1;
              return Swal.fire({
                title: "Timbrar CFDI v4.0",
                text: modo,
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#4dbf2e",
                cancelButtonColor: "#d33",
                confirmButtonText: "Aceptar",
                cancelButtonText: "Cancelar"
              });
            case 1:
              continuar = _context.v;
              if (!(continuar.value == null)) {
                _context.n = 2;
                break;
              }
              return _context.a(2);
            case 2:
              if (continuar.value) {
                _context.n = 3;
                break;
              }
              return _context.a(2);
            case 3:
              _context.n = 4;
              return axios.get('/partidafactura/' + data.id + '?query=%7B%7D&limit=10&ascending=1&page=1&byColumn=1');
            case 4:
              res = _context.v;
              if (!(res.data.count == 0)) {
                _context.n = 5;
                break;
              }
              toastr.warning("Sin conceptos registrados", "Atención");
              _this12.isLoading = false;
              return _context.a(2);
            case 5:
              _this12.isLoading = true;
              // Timbrar
              axios.post('facturacion/cdfi4/timbrar/', {
                id: data.id,
                prueba: prueba
              }).then(function (res) {
                _this12.isLoading = false;
                if (res.data.status) {
                  _this12.isLoading = false;
                  _this12.contador = 0;
                  toastr.success('Factura timbrada correctamente', 'Correcto');
                  _this12.verfacturas(_this12.emisor_id);
                } else {
                  _this12.isLoading = false;
                  toastr.warning('Ha occurrido un error', 'Atención');
                  swal({
                    type: 'error',
                    html: res.data.mensaje
                  });
                }
              })["catch"](function (error) {
                console.error(error);
              });
            case 6:
              return _context.a(2);
          }
        }, _callee);
      }))();
    },
    timbrarprueba: function timbrarprueba(data) {
      var _this13 = this;
      Swal.fire({
        title: 'Esta seguro(a) de timbrar a prueba?',
        text: "Esta opción no se podrá desahacer!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si',
        cancelButtonText: 'No'
      }).then(function (result) {
        if (result.value) {
          _this13.isLoading = true;
          axios.get('/partidafactura/' + data.id + '?query=%7B%7D&limit=10&ascending=1&page=1&byColumn=1').then(function (response) {
            if (response.data.count == 0) {
              toastr.warning('No se puede timbrar hasta tener conceptos registrados', 'Atención');
              _this13.isLoading = false;
            } else {
              axios.get('/sellartimbrarfactura/prueba/' + data.id).then(function (response) {
                if (response.data.status) {
                  _this13.isLoading = false;
                  _this13.contador = 0;
                  toastr.success('Factura timbrada correctamente !!!', 'Correcto');
                  _this13.verfacturas(response.data.emisor_id);
                } else {
                  _this13.isLoading = false;
                  toastr.warning('Ha occurrido un error !!!', 'Atención');
                  swal({
                    type: 'error',
                    html: response.data.respuesta
                  });
                }
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
    DescargarPDF4: function DescargarPDF4(data) {
      window.open('/facturacion/cdfi4/descargar/' + data.archivo, '_blank');
    },
    descargarprefactura: function descargarprefactura(data) {
      window.open('/descargarprefactura/' + data.id, '_blank');
    },
    extranjero: function extranjero() {
      var _this14 = this;
      this.desabilitartax = false;
      axios.get('/clientextranjero').then(function (response) {
        _this14.cliente.id = response.data.id;
        _this14.Receptor.rfc = response.data.rfc;
        _this14.Receptor.nombre = response.data.nombre;
        _this14.Receptor.contacto = response.data.contacto;
        _this14.factura.uso_factura = 22;
      })["catch"](function (error) {
        console.error(error);
      });
    },
    nacional: function nacional() {
      this.desabilitartax = true;
      this.cliente.id = '';
      this.Receptor.rfc = '';
      this.Receptor.nombre = '';
      this.Receptor.contacto = '';
      this.factura.uso_factura = '';
      this.factura.taxid = '';
    },
    vertipo: function vertipo() {
      if (this.factura.taxid == null) {
        $("#gridRadios1").prop("checked", true);
        $("#gridRadios2").prop("checked", false);
        this.desabilitartax = true;
      } else if (this.factura.taxid != null) {
        $("#gridRadios1").prop("checked", false);
        $("#gridRadios2").prop("checked", true);
        this.desabilitartax = false;
      }
    },
    vertipouno: function vertipouno() {
      if (this.factura.factura_id == '') {
        $("#gridRadios3").prop("checked", true);
        $("#gridRadios4").prop("checked", false);
        this.ante = true;
        this.exis = false;
        this.factura.factura_id = '';
      } else if (this.factura.factura_id != '') {
        $("#gridRadios4").prop("checked", true);
        $("#gridRadios3").prop("checked", false);
        this.ante = false;
        this.exis = true;
        this.factura.uuid_relacionado = '';
      }
    },
    observaciones: function observaciones(data) {
      if (data.target.checked == true) {
        $("#clave_ob").prop("disabled", false);
        $("#orden_ob").prop("disabled", false);
        $("#adenda").prop("disabled", false);
        $("#proveeade").prop("disabled", false);
      } else {
        $("#clave_ob").prop("disabled", true);
        $("#orden_ob").prop("disabled", true);
        $("#adenda").prop("disabled", true);
        $("#proveeade").prop("disabled", true);
        this.factura.orden_ob = '';
        this.factura.clave_ob = '';
        this.factura.proveeade = '';
        this.factura.adenda = '';
      }
    },
    guardarDG: function guardarDG() {
      var _this15 = this;
      axios.get('/datosgeneral/' + this.factura.emisor_id).then(function (response) {
        _this15.DatosGenerales.razon_social = response.data.razon_social;
        _this15.DatosGenerales.nombre = response.data.nombre;
        _this15.DatosGenerales.regimenfiscal = response.data.regimenfiscal;
        _this15.factura.codigo_postal = response.data.codigo_postal;
      })["catch"](function (err) {
        console.error(error);
      });
    },
    timbresRestantes: function timbresRestantes() {
      axios.get('/timbresrestantes').then(function (response) {
        Swal.fire('Timbres Restantes', 'Conserflow :' + response.data.c);
      })["catch"](function (err) {
        console.error(error);
      });
    },
    verfacturas: function verfacturas(id) {
      this.usuario_texto = id == 1 ? 'CONSERFLOW SA DE CV' : '-';
      this.id_buscar_emisor = id;
      this.$refs.tabla.refresh();
    },
    descargarxml: function descargarxml(data) {
      axios.get("/descargarfacturareportexml/" + data.archivo).then(function (res) {
        if (!res.data.status) {
          alert("Factura no encontrada");
          return;
        }
        var xml = res.data.factura.xml.replace("\n", "");
        var uri = 'data:text/xml;charset=utf-8,' + xml;
        var downloadLink = document.createElement("a");
        downloadLink.href = uri;
        downloadLink.download = res.data.factura.nombre;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      });
    },
    /**
     * Descargar el XMl v4.0 de Prueba
     */
    DescargarXmlPrueba: function DescargarXmlPrueba(data) {
      axios.post("/facturacion/cdfi4/descargarxmlprueba/", {
        id: data.id,
        file: data.archivo
      }).then(function (res) {
        if (!res.data.status) {
          alert("Factura no encontrada");
          return;
        }
        var xml = res.data.factura.xml.replace("\n", "");
        var uri = 'data:text/xml;charset=utf-8,' + xml;
        var downloadLink = document.createElement("a");
        downloadLink.href = uri;
        downloadLink.download = res.data.factura.nombre;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      });
    },
    edo: function edo() {
      if ($("#gridRadios3").prop("checked")) {
        this.ante = true;
        this.exis = false;
        this.factura.factura_id = '';
      } else {
        this.ante = false;
        this.exis = true;
        this.factura.uuid_relacionado = '';
      }
    },
    guardaRelaccion: function guardaRelaccion() {
      if (this.ante == true) {
        this.array_relacionados.push({
          id: 0,
          name: this.factura.uuid_relacionado
        });
      }
      if (this.exis == true) {
        this.array_relacionados.push({
          id: 0,
          name: this.factura.factura_id.name
        });
      }
      this.factura.uuid_relacionado = '';
      this.factura.factura_id = '';
    },
    eliminar_aignacion: function eliminar_aignacion(data, index) {
      if (data.id == 0) {
        this.array_relacionados.splice(index, 1);
      } else {
        var me = this;
        var id = data['id'];
        axios.get("relaciones/eliminar/".concat(id)).then(function (response) {
          me.array_relacionados.splice(index, 1);
        })["catch"](function (error) {
          console.log(error);
        });
      }
    },
    /**
     * Cancelar la factura de prueba
     */
    CancelarFactura: function CancelarFactura(data) {
      var _arguments2 = arguments,
        _this16 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var prueba, result, id, motivo, uuid_reemplazo;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              prueba = _arguments2.length > 1 && _arguments2[1] !== undefined ? _arguments2[1] : true;
              _context2.n = 1;
              return Swal.mixin({
                input: "text",
                confirmButtonText: "Siguiente &rarr;",
                showCancelButton: true,
                progressSteps: ["1", "2"]
              }).queue([{
                title: "Cancelar CFDI",
                text: "Seleccione el motivo de cancelación",
                input: "select",
                inputOptions: {
                  "01": "Comprobante emitido con errores con relación",
                  "02": "Comprobante emitido con errores sin relación",
                  "03": "No se llevó a cabo la operación",
                  "04": "Operación nominativa relacionada en una factura global"
                }
              }, {
                title: "Folio de Sustitución",
                text: "Ingrese el folio del sustitución"
              }]);
            case 1:
              result = _context2.v;
              if (!(result.value == null)) {
                _context2.n = 2;
                break;
              }
              return _context2.a(2);
            case 2:
              id = data.id; // Id de factura
              motivo = result.value[0];
              uuid_reemplazo = result.value[1];
              if (!(motivo == "01" & uuid_reemplazo.length != 36)) {
                _context2.n = 3;
                break;
              }
              toastr.warning("Ingrese un UUID válido");
              return _context2.a(2);
            case 3:
              _this16.isLoading = true;
              axios.post("facturacion/cdfi4/cancelar", {
                id: id,
                motivo: motivo,
                uuid_reemplazo: uuid_reemplazo,
                prueba: prueba
              }).then(function (res) {
                _this16.isLoading = false;
                if (res.data.status) {
                  toastr.success("Cancelada Correctamente");
                  _this16.ObtenerFacturas();
                  _this16.$refs.tabla.refresh();
                } else {
                  toastr.errror(res.data.mensaje);
                }
              });
            case 4:
              return _context2.a(2);
          }
        }, _callee2);
      }))();
    }
  },
  mounted: function mounted() {
    this.getData();
    this.verfacturas(1); // Conser
    this.emisor_id = 1;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Contabilidad/Catalogo/SatCatFormapago.vue?vue&type=template&id=5c26b6c1":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Contabilidad/Catalogo/SatCatFormapago.vue?vue&type=template&id=5c26b6c1 ***!
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
  }), _vm._v(" Formas de pago\n                "), _c("button", {
    staticClass: "btn btn-dark float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.abrirModal("forma-pago", "registrar");
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
        }, [_c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.abrirModal("forma-pago", "actualizar", props.row);
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
    staticClass: "col-md-3 form-control-label",
    attrs: {
      "for": "clave"
    }
  }, [_vm._v("Clave")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-9"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required|length:2",
      expression: "'required|length:2'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.formaPago.clave,
      expression: "formaPago.clave"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "clave",
      placeholder: "Clave",
      autocomplete: "off",
      id: "clave"
    },
    domProps: {
      value: _vm.formaPago.clave
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formaPago, "clave", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("clave")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label",
    attrs: {
      "for": "descripcion"
    }
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
      value: _vm.formaPago.descripcion,
      expression: "formaPago.descripcion"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "descripcion",
      placeholder: "Descripción",
      autocomplete: "off",
      id: "descripcion"
    },
    domProps: {
      value: _vm.formaPago.descripcion
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formaPago, "descripcion", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("descripcion")))])])])])]), _vm._v(" "), _c("div", {
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
        return _vm.guardarFormaPago(1);
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
        return _vm.guardarFormaPago(0);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Actualizar")]) : _vm._e()])])])])], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Contabilidad/Catalogo/SatCatProdser.vue?vue&type=template&id=11b91374":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Contabilidad/Catalogo/SatCatProdser.vue?vue&type=template&id=11b91374 ***!
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
  }), _vm._v(" Cat. Productos y servicios\r\n                "), _c("button", {
    staticClass: "btn btn-dark float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.abrirModal("productoServicio", "registrar");
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  }), _vm._v(" Nuevo\r\n                ")])]), _vm._v(" "), _c("vue-element-loading", {
    attrs: {
      active: _vm.isLoading_datos
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("v-client-table", {
    ref: "myTable",
    attrs: {
      columns: _vm.columns,
      data: _vm.list_productos,
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
              return _vm.abrirModal("productoServicio", "actualizar", props.row);
            }
          }
        }, [_c("i", {
          staticClass: "icon-pencil"
        }), _vm._v("  Actualizar\r\n                                    ")])])])])];
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
    staticClass: "col-md-3 form-control-label",
    attrs: {
      "for": "clave"
    }
  }, [_vm._v("Clave")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-9"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required|length:8",
      expression: "'required|length:8'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.productoServicio.clave,
      expression: "productoServicio.clave"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "clave",
      placeholder: "Clave",
      autocomplete: "off",
      id: "clave"
    },
    domProps: {
      value: _vm.productoServicio.clave
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.productoServicio, "clave", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("clave")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label",
    attrs: {
      "for": "descripcion"
    }
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
      value: _vm.productoServicio.descripcion,
      expression: "productoServicio.descripcion"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "descripcion",
      placeholder: "Descripción",
      autocomplete: "off",
      id: "descripcion"
    },
    domProps: {
      value: _vm.productoServicio.descripcion
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.productoServicio, "descripcion", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("descripcion")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label",
    attrs: {
      "for": "fecha_ini_vig"
    }
  }, [_vm._v("Fecha inicio de vig.")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-9"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "",
      expression: "''"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.productoServicio.fecha_ini_vig,
      expression: "productoServicio.fecha_ini_vig"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date",
      name: "fecha_ini_vig",
      placeholder: "Fecha inicio de vig.",
      autocomplete: "off",
      id: "fecha_ini_vig"
    },
    domProps: {
      value: _vm.productoServicio.fecha_ini_vig
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.productoServicio, "fecha_ini_vig", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("fecha_ini_vig")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label",
    attrs: {
      "for": "fecha_fin_vig"
    }
  }, [_vm._v("Fecha fin de vig.")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-9"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "",
      expression: "''"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.productoServicio.fecha_fin_vig,
      expression: "productoServicio.fecha_fin_vig"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date",
      name: "fecha_fin_vig",
      placeholder: "Fecha fin de vig.",
      autocomplete: "off",
      id: "fecha_fin_vig"
    },
    domProps: {
      value: _vm.productoServicio.fecha_fin_vig
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.productoServicio, "fecha_fin_vig", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("fecha_fin_vig")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label",
    attrs: {
      "for": "incluir_iva_tras"
    }
  }, [_vm._v("Incluir IVA Tras.")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-9"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "",
      expression: "''"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.productoServicio.incluir_iva_tras,
      expression: "productoServicio.incluir_iva_tras"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "incluir_iva_tras",
      placeholder: "Incluir IVA Tras.",
      autocomplete: "off",
      id: "incluir_iva_tras"
    },
    domProps: {
      value: _vm.productoServicio.incluir_iva_tras
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.productoServicio, "incluir_iva_tras", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("incluir_iva_tras")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label",
    attrs: {
      "for": "incluir_ieps_tras"
    }
  }, [_vm._v("Incluir IEPS Tras.")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-9"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "",
      expression: "''"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.productoServicio.incluir_ieps_tras,
      expression: "productoServicio.incluir_ieps_tras"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "incluir_ieps_tras",
      placeholder: "Incluir IEPS Tras.",
      autocomplete: "off",
      id: "incluir_ieps_tras"
    },
    domProps: {
      value: _vm.productoServicio.incluir_ieps_tras
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.productoServicio, "incluir_ieps_tras", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("incluir_ieps_tras")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label",
    attrs: {
      "for": "complemento"
    }
  }, [_vm._v("Complemento")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-9"
  }, [_c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "",
      expression: "''"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.productoServicio.complemento,
      expression: "productoServicio.complemento"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "complemento",
      placeholder: "Complemento",
      autocomplete: "off",
      id: "complemento"
    },
    domProps: {
      value: _vm.productoServicio.complemento
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.productoServicio, "complemento", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("complemento")))])])])])]), _vm._v(" "), _c("div", {
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
        return _vm.guardarProductoServicio(1);
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
        return _vm.guardarProductoServicio(0);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Actualizar")]) : _vm._e()])])])])], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Contabilidad/Catalogo/SatCatUnidades.vue?vue&type=template&id=ad513b6c":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Contabilidad/Catalogo/SatCatUnidades.vue?vue&type=template&id=ad513b6c ***!
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
  return _c("main", {
    staticClass: "main"
  }, [_c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.tipoCardSatCatUnidades == 1,
      expression: "tipoCardSatCatUnidades==1"
    }],
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("i", {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" UNIDADES\r\n            "), _c("button", {
    staticClass: "btn btn-dark float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.AbrirModalSatCatUnidades(true);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  }), _vm._v(" Nuevo\r\n            ")])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isObtenersatcatunidades_loading
    }
  }), _vm._v(" "), _c("v-client-table", {
    attrs: {
      columns: _vm.columns_satcatunidades,
      data: _vm.list_satcatunidades,
      options: _vm.options_satcatunidades
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
              return _vm.AbrirModalSatCatUnidades(false, props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-edit"
        }), _vm._v(" Actualizar\r\n                                ")])])])])];
      }
    }])
  })], 1)]), _vm._v(" "), _vm.ver_modal_satcatunidades ? _c("div", {
    staticClass: "modal fade",
    "class": {
      mostrar: _vm.ver_modal_satcatunidades
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
      textContent: _vm._s(_vm.tituloModal_satcatunidades)
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "close",
    attrs: {
      type: "button",
      "aria-label": "Close"
    },
    on: {
      click: function click($event) {
        return _vm.CerrarModalSatCatUnidades();
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
      active: _vm.isGuardarsatcatunidades_loading
    }
  }), _vm._v(" "), _c("div", [_c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Unidad")]), _vm._v(" "), _c("div", {
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
      value: _vm.satcatunidades.c_unidad,
      expression: "satcatunidades.c_unidad"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      maxlength: "3",
      minlength: "1",
      "data-vv-name": "Unidad",
      autocomplete: "off"
    },
    domProps: {
      value: _vm.satcatunidades.c_unidad
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.satcatunidades, "c_unidad", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Unidad")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
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
      value: _vm.satcatunidades.nombre,
      expression: "satcatunidades.nombre"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      maxlength: "150",
      minlength: "1",
      "data-vv-name": "Nombre",
      autocomplete: "off"
    },
    domProps: {
      value: _vm.satcatunidades.nombre
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.satcatunidades, "nombre", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Nombre")))])])]), _vm._v(" "), _c("div", {
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
      value: _vm.satcatunidades.descripcion,
      expression: "satcatunidades.descripcion"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      "data-vv-name": "Descripción"
    },
    domProps: {
      value: _vm.satcatunidades.descripcion
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.satcatunidades, "descripcion", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Descripción")))])])])])], 1), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isGuardarsatcatunidades_loading
    }
  }), _vm._v(" "), _c("div", [_c("button", {
    staticClass: "btn btn-outline-dark",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.CerrarModalSatCatUnidades();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-window-close"
  }), _vm._v(" Cerrar\r\n                            ")]), _vm._v(" "), _vm.tipoAccion_satcatunidades == 1 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.RegistrarSatCatUnidades(true);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Guardar\r\n                            ")]) : _vm._e(), _vm._v(" "), _vm.tipoAccion_satcatunidades == 2 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.RegistrarSatCatUnidades(false);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Actualizar\r\n                            ")]) : _vm._e()])], 1)])])])]) : _vm._e()]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Contabilidad/Factura/Conceptos.vue?vue&type=template&id=1cea9c91":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Contabilidad/Factura/Conceptos.vue?vue&type=template&id=1cea9c91 ***!
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
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("i", {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" Conceptos de la factura " + _vm._s(_vm.datos == null ? "" : _vm.datos.serie + " " + _vm.datos.folio) + "\r\n            "), _c("button", {
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
  }), _vm._v(" Atras\r\n            ")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-dark float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.abrirModal("partidas", "registrar");
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  }, [_vm._v(" ")]), _vm._v("Nuevo\r\n            ")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-success float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.abrirModal("partidas", "cargar");
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-file-excel-o"
  }, [_vm._v(" ")]), _vm._v("Cargar\r\n            ")])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("v-server-table", {
    ref: "Tablac",
    attrs: {
      url: "partidafactura/" + _vm.id_factura,
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
        }), _vm._v(" Acciones\r\n                            ")]), _vm._v(" "), _c("div", {
          staticClass: "dropdown-menu",
          attrs: {
            "aria-labelledby": "btnGroupDrop1"
          }
        }, [_c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button",
            disabled: _vm.datos.timbrado == 1
          },
          on: {
            click: function click($event) {
              return _vm.abrirModal("partidas", "actualizar", props.row);
            }
          }
        }, [_c("i", {
          staticClass: "icon-pencil"
        }), _vm._v("  Actualizar Concepto\r\n                                ")]), _vm._v(" "), _c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button",
            disabled: _vm.datos.timbrado == 1
          },
          on: {
            click: function click($event) {
              return _vm.eliminar(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-list-ol"
        }), _vm._v("  Eliminar\r\n                                ")]), _vm._v(" "), _c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.modalObservaciones(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-eye"
        }), _vm._v("Observaciones\r\n                                ")])])])])];
      }
    }, {
      key: "descripcion",
      fn: function fn(props) {
        return [_vm._v("\r\n                    " + _vm._s(props.row.descripcion) + "\r\n                    "), props.row.observaciones ? _c("span", [_vm._v("\r\n                        - " + _vm._s(props.row.observaciones) + "\r\n                    ")]) : _vm._e()];
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
    staticClass: "form-group col-md-8"
  }, [_c("label", [_vm._v("Producto y servicios")]), _vm._v(" "), _c("vue-element-loading", {
    attrs: {
      active: _vm.isDatosLoading
    }
  }), _vm._v(" "), _c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    attrs: {
      options: _vm.list_produc_serv,
      id: "productos servicios",
      name: "productos servicios",
      label: "nombre",
      "data-vv-name": "productos servicios"
    },
    model: {
      value: _vm.partidas.productos_servicios_id,
      callback: function callback($$v) {
        _vm.$set(_vm.partidas, "productos_servicios_id", $$v);
      },
      expression: "partidas.productos_servicios_id"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("productos servicios")))])], 1), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Clave unidad")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.partidas.unidad_id,
      expression: "partidas.unidad_id"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    attrs: {
      "data-vv-name": "clave unidad"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.partidas, "unidad_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, _vm._l(_vm.Unidad, function (item, index) {
    return _c("option", {
      key: index,
      domProps: {
        value: item.id
      }
    }, [_vm._v(_vm._s(item.c_unidad) + " " + _vm._s(item.nombre))]);
  }), 0), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("clave unidad")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Cantidad ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.partidas.cantidad,
      expression: "partidas.cantidad"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required|decimal:2",
      expression: "'required|decimal:2'"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Cantidad",
      "data-vv-name": "cantidad"
    },
    domProps: {
      value: _vm.partidas.cantidad
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.partidas, "cantidad", $event.target.value);
      }, function ($event) {
        return _vm.multiplicar();
      }]
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("cantidad")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Unidad ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.partidas.unidad,
      expression: "partidas.unidad"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Unidad",
      "data-vv-name": "unidad"
    },
    domProps: {
      value: _vm.partidas.unidad
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.partidas, "unidad", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("unidad")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Número de identificación ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.partidas.numero_identificacion,
      expression: "partidas.numero_identificacion"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Número de identificación",
      "data-vv-name": "numero de identificacion"
    },
    domProps: {
      value: _vm.partidas.numero_identificacion
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.partidas, "numero_identificacion", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("numero de identificacion")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-12"
  }, [_c("label", [_vm._v("Descripción")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.partidas.descripcion,
      expression: "partidas.descripcion"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    attrs: {
      rows: "4",
      cols: "50",
      placeholder: "Descripción",
      "data-vv-name": "descripcion",
      maxlength: "1000"
    },
    domProps: {
      value: _vm.partidas.descripcion
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.partidas, "descripcion", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("descripcion")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-12"
  }, [_c("label", [_vm._v("Comentario")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.partidas.comentario,
      expression: "partidas.comentario"
    }],
    staticClass: "form-control",
    attrs: {
      rows: "4",
      cols: "50",
      placeholder: "Comentario",
      "data-vv-name": "comentario"
    },
    domProps: {
      value: _vm.partidas.comentario
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.partidas, "comentario", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("comentario")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "ml-2 col-md-4 form-control-label",
    attrs: {
      "for": "nombre"
    }
  }, [_vm._v("Objeto de impuesto")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-7"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.partidas.obj_imp,
      expression: "partidas.obj_imp"
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
        _vm.$set(_vm.partidas, "obj_imp", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "01"
    }
  }, [_vm._v("01 - No objeto de impuesto")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "02"
    }
  }, [_vm._v("02 - Sí objeto de impuesto")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "03"
    }
  }, [_vm._v("03 - Sí objeto del impuesto y no obligado al desglose")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-2"
  }, [_c("label", [_vm._v("Valor Unitario")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.partidas.valor_unitario,
      expression: "partidas.valor_unitario"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required|decimal:2",
      expression: "'required|decimal:2'"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Valor unitario",
      "data-vv-name": "valor unitario"
    },
    domProps: {
      value: _vm.partidas.valor_unitario
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.partidas, "valor_unitario", $event.target.value);
      }, function ($event) {
        return _vm.multiplicar();
      }]
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("valor unitario")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-3"
  }, [_c("label", [_vm._v("Importe")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.partidas.importe,
      expression: "partidas.importe"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Importe",
      readonly: ""
    },
    domProps: {
      value: _vm.partidas.importe
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.partidas, "importe", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-3"
  }, [_c("label", [_vm._v("Descuento (Cantidad)")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.partidas.descuento,
      expression: "partidas.descuento"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required|decimal:2",
      expression: "'required|decimal:2'"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Descuento",
      "data-vv-name": "descuento"
    },
    domProps: {
      value: _vm.partidas.descuento
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.partidas, "descuento", $event.target.value);
      }, function ($event) {
        return _vm.multiplicar();
      }]
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("descuento")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-2"
  }, [_c("label", [_vm._v("Descuento (%)")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.partidas.descuento_porcentaje,
      expression: "partidas.descuento_porcentaje"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required|decimal:2",
      expression: "'required|decimal:2'"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Descuento",
      "data-vv-name": "descuento"
    },
    domProps: {
      value: _vm.partidas.descuento_porcentaje
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.partidas, "descuento_porcentaje", $event.target.value);
      }, function ($event) {
        return _vm.MultiplicarPorcentaje();
      }]
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("descuento")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-2"
  }, [_c("label", [_vm._v("Iva")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.partidas.impuesto_iva,
      expression: "partidas.impuesto_iva"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Iva",
      "data-vv-name": "iva"
    },
    domProps: {
      value: _vm.partidas.impuesto_iva
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.partidas, "impuesto_iva", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("descuento")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-1"
  }, [_vm._v("\r\n                     \r\n                "), _c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      id: "observa"
    },
    on: {
      change: function change($event) {
        return _vm.retencion($event);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-3"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.partidas.retencion,
      expression: "partidas.retencion"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Retencion",
      disabled: _vm.reten == 0
    },
    domProps: {
      value: _vm.partidas.retencion
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.partidas, "retencion", $event.target.value);
      }
    }
  })])])]), _vm._v(" "), _c("div", {
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
        return _vm.guardar(1);
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
        return _vm.guardar(0);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Actualizar")]) : _vm._e()], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "modal fade",
    "class": {
      mostrar: _vm.modal_cargar
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
  }, [_vm._v("Cargar archivo Excel")]), _vm._v(" "), _c("button", {
    staticClass: "close",
    attrs: {
      type: "button",
      "aria-label": "Close"
    },
    on: {
      click: function click($event) {
        return _vm.cerrarModalCargar();
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
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v(" Subir --")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "ext:xls,xlsx",
      expression: "'ext:xls,xlsx'"
    }],
    staticClass: "form-control",
    attrs: {
      type: "file",
      "data-vv-as": "Archivo",
      name: "import_file_emp",
      accept: "*/*",
      id: "archivo"
    },
    on: {
      change: _vm.getArchivo
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("import_file_emp")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("button", {
    staticClass: "btn btn-primary",
    on: {
      click: _vm.update
    }
  }, [_vm._v("Subir Archivo")])])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  })])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "form-group col-md-2"
  }, [_c("label", [_vm._v("Retencion")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Contabilidad/Factura/ConceptosPagos.vue?vue&type=template&id=216fbfce":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Contabilidad/Factura/ConceptosPagos.vue?vue&type=template&id=216fbfce ***!
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
  return _c("div", [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("i", {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" Conceptos de la factura " + _vm._s(_vm.datos == null ? "" : _vm.datos.serie + " " + _vm.datos.folio) + "\n      "), _c("button", {
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
  }), _vm._v(" Atras\n      ")]), _vm._v(" "), _c("button", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.datos == null ? "" : _vm.datos.tipo_factura_id == 4,
      expression: "datos == null ? '' :datos.tipo_factura_id == 4"
    }],
    staticClass: "btn btn-dark float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.abrirModal("partidas", "registrar_pagos");
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  }, [_vm._v(" ")]), _vm._v("Nuevo\n      ")])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("v-client-table", {
    attrs: {
      data: _vm.tableDataUno,
      columns: _vm.columnsUno,
      options: _vm.optionsUno
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
        }), _vm._v(" Acciones\n              ")]), _vm._v(" "), _c("div", {
          staticClass: "dropdown-menu",
          attrs: {
            "aria-labelledby": "btnGroupDrop1"
          }
        }, [_c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button",
            disabled: _vm.datos.timbrado == 1
          },
          on: {
            click: function click($event) {
              return _vm.abrirModal("partidas", "actualizar", props.row);
            }
          }
        }, [_c("i", {
          staticClass: "icon-pencil"
        }), _vm._v("  Ver Concepto\n                ")]), _vm._v(" "), _c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button",
            disabled: _vm.datos.timbrado == 1
          },
          on: {
            click: function click($event) {
              return _vm.eliminar(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-list-ol"
        }), _vm._v("  Eliminar\n                ")])])])])];
      }
    }])
  })], 1)]), _vm._v(" "), _c("div", {
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
  }, [_c("div", {
    staticClass: "modal-header"
  }, [_c("h4", {
    staticClass: "modal-title",
    domProps: {
      textContent: _vm._s(_vm.tituloModalUno)
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "close",
    attrs: {
      type: "button",
      "aria-label": "Close"
    },
    on: {
      click: function click($event) {
        return _vm.cerrarModalUno();
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
    staticClass: "form-group col-md-2"
  }, [_c("label", {
    staticClass: "form-check-label"
  }, [_c("input", {
    staticClass: "form-check-input",
    attrs: {
      name: "exampleRadios",
      id: "anterior",
      type: "radio"
    },
    on: {
      change: _vm.estado
    }
  }), _vm._v(" Anterior\n              ")])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-2"
  }, [_c("label", {
    staticClass: "form-check-label"
  }, [_c("input", {
    staticClass: "form-check-input",
    attrs: {
      name: "exampleRadios",
      id: "existente",
      type: "radio"
    },
    on: {
      change: _vm.estado
    }
  }), _vm._v(" Existente\n              ")])])]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.verc,
      expression: "verc"
    }]
  }, [_vm._v("\n            " + _vm._s(_vm.saldos) + "\n          ")]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.anterior,
      expression: "anterior"
    }],
    staticClass: "form-group col-md-7"
  }, [_c("label", [_vm._v("UUID")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.partidas_pagos.uuid,
      expression: "partidas_pagos.uuid"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.partidas_pagos.uuid
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.partidas_pagos, "uuid", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.existente,
      expression: "existente"
    }],
    staticClass: "form-group col-md-7"
  }, [_c("label", [_vm._v("UUID")]), _vm._v(" "), _c("v-select", {
    attrs: {
      options: _vm.optionsvsu,
      id: "relaccionados",
      name: "relaccionados",
      label: "name",
      "data-vv-name": "relacionados"
    },
    on: {
      input: _vm.verfactura
    },
    model: {
      value: _vm.partidas_pagos.factura_id,
      callback: function callback($$v) {
        _vm.$set(_vm.partidas_pagos, "factura_id", $$v);
      },
      expression: "partidas_pagos.factura_id"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-2"
  }, [_c("label", [_vm._v("Serie")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.partidas_pagos.serie,
      expression: "partidas_pagos.serie"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      disabled: _vm.existente
    },
    domProps: {
      value: _vm.partidas_pagos.serie
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.partidas_pagos, "serie", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-2"
  }, [_c("label", [_vm._v("Folio")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.partidas_pagos.folio,
      expression: "partidas_pagos.folio"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      disabled: _vm.existente
    },
    domProps: {
      value: _vm.partidas_pagos.folio
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.partidas_pagos, "folio", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-inline"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.pago_dolares,
      expression: "pago_dolares"
    }],
    attrs: {
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.pago_dolares) ? _vm._i(_vm.pago_dolares, null) > -1 : _vm.pago_dolares
    },
    on: {
      change: function change($event) {
        var $$a = _vm.pago_dolares,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.pago_dolares = $$a.concat([$$v]));
          } else {
            $$i > -1 && (_vm.pago_dolares = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.pago_dolares = $$c;
        }
      }
    }
  }), _vm._v("  Pago en USD \n          ")]), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.pago_dolares,
      expression: "pago_dolares"
    }],
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-2"
  }, [_c("label", [_vm._v("Total USD")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.partidas_pagos.total_usd,
      expression: "partidas_pagos.total_usd"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.partidas_pagos.total_usd
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.partidas_pagos, "total_usd", $event.target.value);
      }, function ($event) {
        return _vm.CalcularTotalDLS($event);
      }]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-2"
  }, [_c("label", [_vm._v("Tipo Cambio")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.partidas_pagos.tipo_cambio_dr,
      expression: "partidas_pagos.tipo_cambio_dr"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "0.05"
    },
    domProps: {
      value: _vm.partidas_pagos.tipo_cambio_dr
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.partidas_pagos, "tipo_cambio_dr", $event.target.value);
      }, function ($event) {
        return _vm.CalcularTotalTC($event);
      }]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-2"
  }, [_c("label", [_vm._v("Total")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.partidas_pagos.importe_pagado_mx,
      expression: "partidas_pagos.importe_pagado_mx"
    }],
    staticClass: "form-control",
    attrs: {
      disabled: "",
      type: "text",
      placeholder: "0"
    },
    domProps: {
      value: _vm.partidas_pagos.importe_pagado_mx
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.partidas_pagos, "importe_pagado_mx", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Metodo de pago")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.partidas_pagos.metodo_pago_dr,
      expression: "partidas_pagos.metodo_pago_dr"
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
        _vm.$set(_vm.partidas_pagos, "metodo_pago_dr", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, _vm._l(_vm.list_metodos_pago, function (item, index) {
    return _c("option", {
      key: index,
      domProps: {
        value: item.id
      }
    }, [_vm._v("\n                      " + _vm._s(item.c_metodopago) + " " + _vm._s(item.descripcion) + "\n                    ")]);
  }), 0)])]), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "form row"
  }, [_c("label", {
    staticClass: "col-md-4"
  }, [_vm._v("Objeto Imp.")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.partidas_pagos.obj_imp,
      expression: "partidas_pagos.obj_imp"
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
        _vm.$set(_vm.partidas_pagos, "obj_imp", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "01"
    }
  }, [_vm._v("01 - No Objeto de Impuesto")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "02"
    }
  }, [_vm._v("02 - Sí Objeto de Impuesto")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "03"
    }
  }, [_vm._v("03 - Sí objeto del impuesto y no obligado al desglose")])])]), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-2"
  }, [_c("label", [_vm._v("Parcialidad")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "integer",
      expression: "'integer'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.partidas_pagos.num_parcialidad,
      expression: "partidas_pagos.num_parcialidad"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "numero parcialidad",
      "data-vv-name": "numero parcialidad"
    },
    domProps: {
      value: _vm.partidas_pagos.num_parcialidad
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.partidas_pagos, "num_parcialidad", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("numero parcialidad")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-3"
  }, [_c("label", [_vm._v("Saldo anterior")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "decimal:2",
      expression: "'decimal:2'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.partidas_pagos.saldo_anterior,
      expression: "partidas_pagos.saldo_anterior"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "saldo anterior",
      "data-vv-name": "saldo anterior"
    },
    domProps: {
      value: _vm.partidas_pagos.saldo_anterior
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.partidas_pagos, "saldo_anterior", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("saldo anterior")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-3"
  }, [_c("label", [_vm._v("Importe pagado")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "decimal:2",
      expression: "'decimal:2'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.partidas_pagos.importe_pagado,
      expression: "partidas_pagos.importe_pagado"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "importe pagado",
      "data-vv-name": "importe pagado"
    },
    domProps: {
      value: _vm.partidas_pagos.importe_pagado
    },
    on: {
      blur: function blur($event) {
        return _vm.validaMonto();
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.partidas_pagos, "importe_pagado", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("importe pagado")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-3"
  }, [_c("label", [_vm._v("Saldo insoluto")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "decimal:2",
      expression: "'decimal:2'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.partidas_pagos.saldo_insoluto,
      expression: "partidas_pagos.saldo_insoluto"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "saldo insoluto",
      "data-vv-name": "saldo insoluto"
    },
    domProps: {
      value: _vm.partidas_pagos.saldo_insoluto
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.partidas_pagos, "saldo_insoluto", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("saldo insoluto")))])]), _vm._v(" "), _c("br"), _vm._v(" "), _c("span", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.pago_dolares,
      expression: "pago_dolares"
    }],
    staticClass: "text-danger"
  }, [_vm._v("\n                    El pago se realizará en USD, convertidos a MXN\n              ")])])]), _vm._v(" "), _c("div", {
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
        return _vm.cerrarModalUno();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-times"
  }), _vm._v(" Cerrar\n          ")]), _vm._v(" "), _vm.tipoAccionUno == 1 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        _vm.validaUno();
        _vm.guardarUno(1);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Guardar\n          ")]) : _vm._e(), _vm._v(" "), _vm.tipoAccionUno == 2 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        _vm.validaUno();
        _vm.guardarUno(0);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Guardar  ")]) : _vm._e()], 1)])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Contabilidad/Factura/Factura.vue?vue&type=template&id=4e4d3206":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Contabilidad/Factura/Factura.vue?vue&type=template&id=4e4d3206 ***!
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
    staticClass: "container-fluid"
  }, [_c("br"), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.detalle == 1,
      expression: "detalle == 1"
    }],
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("i", {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" Facturas " + _vm._s(_vm.usuario_texto) + "\r\n                "), _c("div", {
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
  }, [_vm._v("\r\n                        Emisor\r\n                    ")]), _vm._v(" "), _c("div", {
    staticClass: "dropdown-menu",
    attrs: {
      "aria-labelledby": "dropdown"
    }
  }, _vm._l(_vm.list_emisores, function (elem) {
    return _c("div", {
      key: elem.key
    }, [_c("button", {
      staticClass: "dropdown-item",
      on: {
        click: function click($event) {
          return _vm.verfacturas(elem.id);
        }
      }
    }, [_vm._v(_vm._s(elem.nombre))])]);
  }), 0)]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-light float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.timbresRestantes();
      }
    }
  }, [_c("i"), _vm._v("Timbres Restantes\r\n                ")]), _vm._v(" "), _c("button", {
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
      active: _vm.isLoading
    }
  }), _vm._v(" "), _c("v-server-table", {
    ref: "tabla",
    attrs: {
      url: "verfacturauno/" + _vm.id_buscar_emisor,
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
        }), _vm._v(" Acciones\r\n                                ")]), _vm._v(" "), _c("div", {
          staticClass: "dropdown-menu",
          attrs: {
            "aria-labelledby": "btnGroupDrop1"
          }
        }, [_c("button", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: props.row.timbrado == 0,
            expression: "props.row.timbrado == 0"
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
          staticClass: "icon-pencil"
        }), _vm._v(" Actualizar Factura\r\n                                    ")]), _vm._v(" "), _c("button", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: props.row.timbrado == 0 && props.row.descripcion_tipofactura === "Pago",
            expression: "props.row.timbrado == 0 && props.row.descripcion_tipofactura === 'Pago'"
          }],
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.agregarP(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-list-ol"
        }), _vm._v(" Agregar Conceptos\r\n                                    ")]), _vm._v(" "), _c("button", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: props.row.timbrado == 0 && (props.row.descripcion_tipofactura === "Ingreso" || props.row.descripcion_tipofactura === "Egreso"),
            expression: "props.row.timbrado == 0 && (props.row.descripcion_tipofactura === 'Ingreso' || props.row.descripcion_tipofactura === 'Egreso')"
          }],
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.agregarI(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-list-ol"
        }), _vm._v(" Agregar Conceptos\r\n                                    ")]), _vm._v(" "), _c("button", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: props.row.timbrado == 1 && (props.row.descripcion_tipofactura === "Ingreso" || props.row.descripcion_tipofactura === "Egreso"),
            expression: "props.row.timbrado == 1 && (props.row.descripcion_tipofactura === 'Ingreso' || props.row.descripcion_tipofactura === 'Egreso')"
          }],
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.agregarI(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-list-ol"
        }), _vm._v(" Ver detalles\r\n                                    ")]), _vm._v(" "), _c("button", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: props.row.timbrado == 1 && props.row.descripcion_tipofactura === "Pago",
            expression: "props.row.timbrado == 1 && props.row.descripcion_tipofactura === 'Pago'"
          }],
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.agregarP(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-list-ol"
        }), _vm._v(" Ver detalles\r\n                                    ")]), _vm._v(" "), _c("button", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: props.row.timbrado == 0,
            expression: "props.row.timbrado == 0 "
          }],
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.descargarprefactura(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-download"
        }), _vm._v(" Descargar prefactura\r\n                                    ")]), _vm._v(" "), _c("button", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: props.row.timbrado == 0 || props.row.timbrado == 9,
            expression: "props.row.timbrado == 0 || props.row.timbrado == 9"
          }],
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.timbrar(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-bell"
        }), _vm._v(" Timbrar\r\n                                    ")]), _vm._v(" "), _c("button", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: props.row.timbrado == 0,
            expression: "props.row.timbrado == 0"
          }],
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.timbrarprueba(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-bell"
        }), _vm._v(" Timbrar Prueba\r\n                                    ")]), _vm._v(" "), _c("button", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: props.row.timbrado == 9,
            expression: "props.row.timbrado == 9"
          }],
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.descargarprueba(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-download"
        }), _vm._v(" Descargar Factura Prueba\r\n                                    ")]), _vm._v(" "), _c("button", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: props.row.timbrado == 9,
            expression: "props.row.timbrado == 9"
          }],
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.descargarxmlprueba(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-download"
        }), _vm._v(" Descargar XML Prueba\r\n                                    ")]), _vm._v(" "), _c("button", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: props.row.timbrado == 1,
            expression: "props.row.timbrado == 1"
          }],
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.descargar(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-download"
        }), _vm._v(" Descargar\r\n                                    ")]), _vm._v(" "), _c("button", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: props.row.timbrado == 1,
            expression: "props.row.timbrado == 1"
          }],
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.descargarxml(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-download"
        }), _vm._v(" Descargar XML\r\n                                    ")]), _vm._v(" "), _c("button", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: props.row.timbrado == 1,
            expression: "props.row.timbrado == 1"
          }],
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.cancelarfactura(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-close"
        }), _vm._v(" Cancelar factura\r\n                                    ")]), _vm._v(" "), _c("button", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: props.row.timbrado == 9,
            expression: "props.row.timbrado == 9"
          }],
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.cancelarprueba(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-close"
        }), _vm._v(" Cancelar Prueba\r\n                                    ")])])])])];
      }
    }, {
      key: "timbrado",
      fn: function fn(props) {
        return [props.row.timbrado == 0 ? [_c("button", {
          staticClass: "btn btn-outline-info",
          attrs: {
            type: "button"
          }
        }, [_c("i", {
          staticClass: "fa fa-files-o"
        }), _vm._v("Nuevo")])] : _vm._e(), _vm._v(" "), props.row.timbrado == 1 ? [_c("button", {
          staticClass: "btn btn-outline-success",
          attrs: {
            type: "button"
          }
        }, [_c("i", {
          staticClass: "fa fa-exclamation-circle"
        }), _vm._v("Timbrado")])] : _vm._e(), _vm._v(" "), props.row.timbrado == 2 ? [_c("button", {
          staticClass: "btn btn-outline-danger",
          attrs: {
            type: "button"
          }
        }, [_c("i", {
          staticClass: "fa fa-window-close"
        }), _vm._v("Cancelado")])] : _vm._e()];
      }
    }])
  })], 1)]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.detalle == 2,
      expression: "detalle == 2"
    }]
  }, [_c("conceptos", {
    ref: "conceptos",
    on: {
      "maestro:conceptos": function maestroConceptos($event) {
        return _vm.maestro();
      }
    }
  })], 1), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.detalle == 3,
      expression: "detalle == 3"
    }]
  }, [_c("conceptospagos", {
    ref: "conceptospagos",
    on: {
      "maestro:conceptospagos": function maestroConceptospagos($event) {
        return _vm.maestrop();
      }
    }
  })], 1), _vm._v(" "), _c("div", {
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
  }, [_c("form", [_c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("RFC Emisor ")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.factura.emisor_id,
      expression: "factura.emisor_id"
    }],
    staticClass: "form-control",
    on: {
      click: function click($event) {
        return _vm.guardarDG();
      },
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.factura, "emisor_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, _vm._l(_vm.list_emisores, function (elem) {
    return _c("option", {
      key: elem.id,
      domProps: {
        value: elem.id
      }
    }, [_vm._v(_vm._s(elem.rfc))]);
  }), 0)]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-6"
  }, [_c("label", [_vm._v("Nombre comercial ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.DatosGenerales.nombre,
      expression: "DatosGenerales.nombre"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Nombre comercial",
      readonly: ""
    },
    domProps: {
      value: _vm.DatosGenerales.nombre
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.DatosGenerales, "nombre", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-8"
  }, [_c("label", [_vm._v("Nombre o razon social ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.DatosGenerales.razon_social,
      expression: "DatosGenerales.razon_social"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Nombre o razon social",
      readonly: ""
    },
    domProps: {
      value: _vm.DatosGenerales.razon_social
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.DatosGenerales, "razon_social", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-8"
  }, [_c("label", [_vm._v("Regimen fiscal")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.DatosGenerales.regimenfiscal,
      expression: "DatosGenerales.regimenfiscal"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Regimen fiscal",
      readonly: ""
    },
    domProps: {
      value: _vm.DatosGenerales.regimenfiscal
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.DatosGenerales, "regimenfiscal", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Tipo de factura")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.factura.tipo_factura_id,
      expression: "factura.tipo_factura_id"
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
        _vm.$set(_vm.factura, "tipo_factura_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, _vm._l(_vm.TipoFactura, function (item, index) {
    return _c("option", {
      key: index,
      domProps: {
        value: item.id
      }
    }, [_vm._v(_vm._s(item.c_tipofactura) + " " + _vm._s(item.descripcion))]);
  }), 0)])]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.factura.tipo_factura_id == 1 || _vm.factura.tipo_factura_id == 2,
      expression: "factura.tipo_factura_id == 1 || factura.tipo_factura_id == 2"
    }],
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-7"
  }, [_c("label", [_vm._v("Tipo de relacción")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.factura.tipo_relacion,
      expression: "factura.tipo_relacion"
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
        _vm.$set(_vm.factura, "tipo_relacion", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, _vm._l(_vm.TipoRelacion, function (item, index) {
    return _c("option", {
      key: index,
      domProps: {
        value: item.id
      }
    }, [_vm._v(_vm._s(item.c_tiporelacion) + " " + _vm._s(item.descripcion))]);
  }), 0)])]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.factura.tipo_factura_id == 1 || _vm.factura.tipo_factura_id == 2,
      expression: "factura.tipo_factura_id == 1 || factura.tipo_factura_id == 2"
    }],
    staticClass: "form-row"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-2"
  }, [_c("div", {
    staticClass: "form-check"
  }, [_c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "radio",
      name: "gridRadiosdos",
      id: "gridRadios3"
    },
    on: {
      change: _vm.edo
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "gridRadios3"
    }
  }, [_vm._v("\r\n                                            Anterior\r\n                                        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-2"
  }, [_c("div", {
    staticClass: "form-check"
  }, [_c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "radio",
      name: "gridRadiosdos",
      id: "gridRadios4"
    },
    on: {
      change: _vm.edo
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "gridRadios4"
    }
  }, [_vm._v("\r\n                                            Existente\r\n                                        ")])])])]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.factura.tipo_factura_id == 1 || _vm.factura.tipo_factura_id == 2,
      expression: "factura.tipo_factura_id == 1 || factura.tipo_factura_id == 2"
    }],
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-7"
  }, [_c("label", [_vm._v("UUID")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.factura.uuid_relacionado,
      expression: "factura.uuid_relacionado"
    }, {
      name: "show",
      rawName: "v-show",
      value: _vm.ante,
      expression: "ante"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.factura.uuid_relacionado
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.factura, "uuid_relacionado", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("v-select", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.exis,
      expression: "exis"
    }],
    attrs: {
      options: _vm.optionsvsex,
      id: "relaccionados",
      name: "relaccionados",
      label: "name",
      "data-vv-name": "relacionados"
    },
    model: {
      value: _vm.factura.factura_id,
      callback: function callback($$v) {
        _vm.$set(_vm.factura, "factura_id", $$v);
      },
      expression: "factura.factura_id"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-2"
  }, [_c("label"), _vm._v(" "), _c("br"), _vm._v(" "), _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.guardaRelaccion();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v("Guardar")])])]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.factura.tipo_factura_id == 1 || _vm.factura.tipo_factura_id == 2,
      expression: "factura.tipo_factura_id == 1 || factura.tipo_factura_id == 2"
    }],
    staticClass: "form-row"
  }, [_vm._m(1), _vm._v(" "), _vm._m(2)]), _vm._v(" "), _vm._l(_vm.array_relacionados, function (vi, index) {
    return _c("li", {
      key: index,
      staticClass: "list-group-item"
    }, [_c("div", {
      staticClass: "form-row"
    }, [_c("div", {
      staticClass: "form-group col-md-5"
    }, [_c("label", [_vm._v(_vm._s(vi.name))])]), _vm._v(" "), _c("div", {
      staticClass: "form-group col-md-1"
    }, [_c("a", {
      on: {
        click: function click($event) {
          return _vm.eliminar_aignacion(vi, index);
        }
      }
    }, [_c("span", {
      staticClass: "fas fa-trash",
      attrs: {
        "arial-hidden": "true"
      }
    })])])])]);
  }), _vm._v(" "), _c("hr", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.factura.tipo_factura_id == 1 || _vm.factura.tipo_factura_id == 2,
      expression: "factura.tipo_factura_id == 1 || factura.tipo_factura_id == 2"
    }]
  }), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-6"
  }, [_c("label", [_vm._v("Cliente ")]), _vm._v(" "), _c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    attrs: {
      id: "cliente",
      name: "cliente",
      options: _vm.Clientes,
      label: "nombre"
    },
    on: {
      input: _vm.llenarDatosCliente
    },
    model: {
      value: _vm.cliente,
      callback: function callback($$v) {
        _vm.cliente = $$v;
      },
      expression: "cliente"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("RFC receptor ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.Receptor.rfc,
      expression: "Receptor.rfc"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "RFC receptor",
      readonly: ""
    },
    domProps: {
      value: _vm.Receptor.rfc
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.Receptor, "rfc", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-10"
  }, [_c("label", [_vm._v("Nombre o razon social")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.Receptor.nombre,
      expression: "Receptor.nombre"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Nombre o razon social",
      readonly: ""
    },
    domProps: {
      value: _vm.Receptor.nombre
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.Receptor, "nombre", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-6"
  }, [_c("label", [_vm._v("Uso Factura ")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.factura.uso_factura,
      expression: "factura.uso_factura"
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
        _vm.$set(_vm.factura, "uso_factura", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, _vm._l(_vm.UsoFactura, function (item, index) {
    return _c("option", {
      key: index,
      domProps: {
        value: item.id
      }
    }, [_vm._v(_vm._s(item.c_uso) + " " + _vm._s(item.descripcion))]);
  }), 0)]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Correo ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.Receptor.contacto,
      expression: "Receptor.contacto"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Correo",
      readonly: ""
    },
    domProps: {
      value: _vm.Receptor.contacto
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.Receptor, "contacto", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Fecha y hora de expedición")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.factura.fecha_hora,
      expression: "factura.fecha_hora"
    }],
    staticClass: "form-control",
    attrs: {
      type: "datetime-local",
      placeholder: "Fecha y hora de expedicion"
    },
    domProps: {
      value: _vm.factura.fecha_hora
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.factura, "fecha_hora", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Código postal ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.factura.codigo_postal,
      expression: "factura.codigo_postal"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      maxlength: "5",
      placeholder: "Codigo postal"
    },
    domProps: {
      value: _vm.factura.codigo_postal
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.factura, "codigo_postal", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Moneda")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.factura.moneda_id,
      expression: "factura.moneda_id"
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
        _vm.$set(_vm.factura, "moneda_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.tipomoneda]
    }
  }, _vm._l(_vm.Monedas, function (item, index) {
    return _c("option", {
      key: index,
      domProps: {
        value: item.id
      }
    }, [_vm._v(_vm._s(item.c_moneda))]);
  }), 0)])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Forma de pago ")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.factura.formapago,
      expression: "factura.formapago"
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
        _vm.$set(_vm.factura, "formapago", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, _vm._l(_vm.FormaPago, function (item, index) {
    return _c("option", {
      key: index,
      domProps: {
        value: item.id
      }
    }, [_vm._v(_vm._s(item.clave) + " " + _vm._s(item.descripcion))]);
  }), 0)]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Metodo de pago")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.factura.metodopago,
      expression: "factura.metodopago"
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
        _vm.$set(_vm.factura, "metodopago", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, _vm._l(_vm.MetodoPago, function (item, index) {
    return _c("option", {
      key: index,
      domProps: {
        value: item.id
      }
    }, [_vm._v(_vm._s(item.c_metodopago) + " " + _vm._s(item.descripcion))]);
  }), 0)]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Tipo de cambio")]), _vm._v(" "), _c("div", {
    staticClass: "input-group mb-2"
  }, [_vm._m(3), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.factura.tipo_cambio,
      expression: "factura.tipo_cambio"
    }],
    staticClass: "form-control",
    attrs: {
      disabled: _vm.dasabiltarMonedas,
      type: "text",
      placeholder: "Tipo de cambio"
    },
    domProps: {
      value: _vm.factura.tipo_cambio
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.factura, "tipo_cambio", $event.target.value);
      }
    }
  })])])]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.factura.tipo_factura_id == 4,
      expression: "factura.tipo_factura_id == 4"
    }],
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Número de operación")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "integer",
      expression: "'integer'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.factura.num_operacion,
      expression: "factura.num_operacion"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "numero de operacion",
      "data-vv-name": "numero de operacion"
    },
    domProps: {
      value: _vm.factura.num_operacion
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.factura, "num_operacion", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("numero de operacion")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Banco ordenante")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.factura.ban_ordenante,
      expression: "factura.ban_ordenante"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "banco ordenante",
      "data-vv-name": "banco ordenante"
    },
    domProps: {
      value: _vm.factura.ban_ordenante
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.factura, "ban_ordenante", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Cuenta ordenante")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.factura.cuenta_ordenante,
      expression: "factura.cuenta_ordenante"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "cuenta ordenante",
      "data-vv-name": "cuenta ordenante"
    },
    domProps: {
      value: _vm.factura.cuenta_ordenante
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.factura, "cuenta_ordenante", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.factura.tipo_factura_id == 4,
      expression: "factura.tipo_factura_id == 4"
    }],
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("RFC banco ordenante")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.factura.rfc_cuenta_ordenante,
      expression: "factura.rfc_cuenta_ordenante"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "RFC banco ordenante",
      "data-vv-name": "RFC banco ordenante"
    },
    domProps: {
      value: _vm.factura.rfc_cuenta_ordenante
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.factura, "rfc_cuenta_ordenante", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("RFC banco beneficiario")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.factura.rfc_cuenta_beneficiario,
      expression: "factura.rfc_cuenta_beneficiario"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "RFC banco beneficiario",
      "data-vv-name": "RFC banco beneficiario"
    },
    domProps: {
      value: _vm.factura.rfc_cuenta_beneficiario
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.factura, "rfc_cuenta_beneficiario", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.factura.tipo_factura_id == 4,
      expression: "factura.tipo_factura_id == 4"
    }],
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Fecha de pago")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.factura.fecha_pago,
      expression: "factura.fecha_pago"
    }],
    staticClass: "form-control",
    attrs: {
      type: "datetime-local",
      name: "fecha de pago",
      "data-vv-name": "fecha_pago"
    },
    domProps: {
      value: _vm.factura.fecha_pago
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.factura, "fecha_pago", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.factura.tipo_factura_id == 2 || _vm.factura.tipo_factura_id == 1,
      expression: "factura.tipo_factura_id == 2 || factura.tipo_factura_id == 1"
    }],
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-8"
  }, [_c("label", [_vm._v("Condiciones de pago ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.factura.condicion_pago,
      expression: "factura.condicion_pago"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Condiciones de pago"
    },
    domProps: {
      value: _vm.factura.condicion_pago
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.factura, "condicion_pago", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_vm._m(4), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-1"
  }, [_c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      id: "observa"
    },
    on: {
      change: function change($event) {
        return _vm.observaciones($event);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-3"
  }, [_c("label", [_vm._v("Adenda")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.factura.adenda,
      expression: "factura.adenda"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "adenda",
      disabled: ""
    },
    domProps: {
      value: _vm.factura.adenda
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.factura, "adenda", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-3"
  }, [_c("label", [_vm._v("Proveedor")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.factura.proveeade,
      expression: "factura.proveeade"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "proveeade",
      disabled: ""
    },
    domProps: {
      value: _vm.factura.proveeade
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.factura, "proveeade", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-3"
  }, [_c("label", [_vm._v("No. Recepción")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.factura.clave_ob,
      expression: "factura.clave_ob"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "clave_ob",
      disabled: ""
    },
    domProps: {
      value: _vm.factura.clave_ob
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.factura, "clave_ob", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-3"
  }, [_c("label", [_vm._v("Orden de compra")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.factura.orden_ob,
      expression: "factura.orden_ob"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "orden_ob",
      disabled: ""
    },
    domProps: {
      value: _vm.factura.orden_ob
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.factura, "orden_ob", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_vm._m(5), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-2"
  }, [_c("div", {
    staticClass: "form-check"
  }, [_c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "radio",
      name: "gridRadios",
      id: "gridRadios1"
    },
    on: {
      click: _vm.nacional
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "gridRadios1"
    }
  }, [_vm._v("\r\n                                            Nacional\r\n                                        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-2"
  }, [_c("div", {
    staticClass: "form-check"
  }, [_c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "radio",
      name: "gridRadios",
      id: "gridRadios2"
    },
    on: {
      click: _vm.extranjero
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "gridRadios2"
    }
  }, [_vm._v("\r\n                                            Extranjero\r\n                                        ")])])]), _vm._v(" "), _vm._m(6), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.factura.taxid,
      expression: "factura.taxid"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Tax Id",
      disabled: _vm.desabilitartax == true
    },
    domProps: {
      value: _vm.factura.taxid
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.factura, "taxid", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("hr")], 2)]), _vm._v(" "), _c("div", {
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
  }), _vm._v("Actualizar")]) : _vm._e()], 1)])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "form-group col-md-2"
  }, [_c("label", [_vm._v("Tipo:")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "form-group col-md-5"
  }, [_c("label", [_c("b", [_vm._v("UUID")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "form-group col-md-1"
  }, [_c("label", [_c("b", [_vm._v("ACCIONES")])])]);
}, function () {
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
    staticClass: "form-group col-md-2"
  }, [_c("label", [_vm._v("Observaciones")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "form-group col-md-2"
  }, [_c("label", [_vm._v("Tipo:")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "form-group col-md-1"
  }, [_c("label", [_vm._v("Tax Id: ")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Contabilidad/Factura/Facturav4.vue?vue&type=template&id=7f36813b":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Contabilidad/Factura/Facturav4.vue?vue&type=template&id=7f36813b ***!
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
  }, [_c("div", {}, [_c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.detalle == 1,
      expression: "detalle == 1"
    }],
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("i", {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" CFDI 4.0 - " + _vm._s(_vm.usuario_texto) + "\r\n                "), _c("div", {
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
  }, [_vm._v("\r\n                        Emisor\r\n                    ")]), _vm._v(" "), _c("div", {
    staticClass: "dropdown-menu",
    attrs: {
      "aria-labelledby": "dropdown"
    }
  }, _vm._l(_vm.list_emisores, function (elem) {
    return _c("div", {
      key: elem.key
    }, [_c("button", {
      staticClass: "dropdown-item",
      on: {
        click: function click($event) {
          _vm.emisor_id = elem.id;
          _vm.verfacturas(elem.id);
        }
      }
    }, [_vm._v(_vm._s(elem.nombre))])]);
  }), 0)]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-light float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.timbresRestantes();
      }
    }
  }, [_c("i"), _vm._v("Timbres Restantes\r\n                ")]), _vm._v(" "), _c("button", {
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
      active: _vm.isLoading
    }
  }), _vm._v(" "), _c("v-server-table", {
    ref: "tabla",
    attrs: {
      url: "verfacturauno/" + _vm.id_buscar_emisor,
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
        }), _vm._v(" Acciones\r\n                                ")]), _vm._v(" "), _c("div", {
          staticClass: "dropdown-menu",
          attrs: {
            "aria-labelledby": "btnGroupDrop1"
          }
        }, [props.row.timbrado == 0 ? [_c("button", {
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
        }), _vm._v(" Actualizar Factura\r\n                                        ")]), _vm._v(" "), _c("button", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: props.row.descripcion_tipofactura === "Pago",
            expression: "props.row.descripcion_tipofactura === 'Pago'"
          }],
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.agregarP(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-list-ol"
        }), _vm._v(" Agregar Pagos\r\n                                        ")]), _vm._v(" "), _c("button", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: props.row.descripcion_tipofactura === "Ingreso" || props.row.descripcion_tipofactura === "Egreso",
            expression: "props.row.descripcion_tipofactura === 'Ingreso' \r\n                                        || props.row.descripcion_tipofactura === 'Egreso'"
          }],
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.agregarI(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-list"
        }), _vm._v(" Agregar Conceptos\r\n                                        ")]), _vm._v(" "), _c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.descargarprefactura(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-download"
        }), _vm._v(" Descargar prefactura\r\n                                        ")]), _vm._v(" "), _c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.TimbrarV4(props.row, false);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-bell"
        }), _vm._v(" Timbrar 4.0\r\n                                        ")]), _vm._v(" "), _c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.TimbrarV4(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-warning"
        }), _vm._v(" Timbrar Prueba\r\n                                        ")])] : _vm._e(), _vm._v(" "), props.row.timbrado == 1 ? [_c("button", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: props.row.descripcion_tipofactura === "Ingreso" || props.row.descripcion_tipofactura === "Egreso",
            expression: "props.row.descripcion_tipofactura === 'Ingreso'\r\n                                        || props.row.descripcion_tipofactura === 'Egreso'"
          }],
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.agregarI(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-list-ol"
        }), _vm._v(" Ver detalles\r\n                                        ")]), _vm._v(" "), _c("button", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: props.row.descripcion_tipofactura === "Pago",
            expression: "props.row.descripcion_tipofactura === 'Pago'"
          }],
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.agregarP(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-list-ol"
        }), _vm._v(" Ver detalles\r\n                                        ")]), _vm._v(" "), _c("button", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: props.row.timbrado == 1,
            expression: "props.row.timbrado == 1"
          }],
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.DescargarPDF4(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-download"
        }), _vm._v(" Descargar\r\n                                        ")]), _vm._v(" "), _c("button", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: props.row.timbrado == 1,
            expression: "props.row.timbrado == 1"
          }],
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.descargarxml(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-download"
        }), _vm._v(" Descargar XML\r\n                                        ")]), _vm._v(" "), _c("button", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: props.row.timbrado == 1,
            expression: "props.row.timbrado == 1"
          }],
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.CancelarFactura(props.row, false);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-close"
        }), _vm._v(" Cancelar factura\r\n                                        ")])] : _vm._e(), _vm._v(" "), props.row.timbrado == 9 ? [_c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.CancelarFactura(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-close"
        }), _vm._v(" Cancelar Prueba\r\n                                        ")]), _vm._v(" "), _c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.DescargarXmlPrueba(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-download"
        }), _vm._v(" Descargar XML Prueba\r\n                                        ")]), _vm._v(" "), _c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.DescargarPDF4(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-download"
        }), _vm._v(" Descargar\r\n                                        ")])] : _vm._e()], 2)])])];
      }
    }, {
      key: "timbrado",
      fn: function fn(props) {
        return [props.row.timbrado == 0 ? [_c("button", {
          staticClass: "btn btn-outline-info",
          attrs: {
            type: "button"
          }
        }, [_c("i", {
          staticClass: "fa fa-files-o"
        }), _vm._v(" Nuevo\r\n                            ")])] : _vm._e(), _vm._v(" "), props.row.timbrado == 1 ? [_c("button", {
          staticClass: "btn btn-outline-success",
          attrs: {
            type: "button"
          }
        }, [_c("i", {
          staticClass: "fa fa-exclamation-circle"
        }), _vm._v(" Timbrado\r\n                            ")])] : _vm._e(), _vm._v(" "), props.row.timbrado == 2 ? [_c("button", {
          staticClass: "btn btn-outline-danger",
          attrs: {
            type: "button"
          }
        }, [_c("i", {
          staticClass: "fa fa-window-close"
        }), _vm._v(" Cancelado\r\n                            ")])] : _vm._e(), _vm._v(" "), props.row.timbrado == 9 ? [_c("button", {
          staticClass: "btn btn-outline-warning",
          attrs: {
            type: "button"
          }
        }, [_c("i", {
          staticClass: "fa fa-exclamation-circle"
        }), _vm._v(" Prueba\r\n                            ")])] : _vm._e()];
      }
    }])
  })], 1)]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.detalle == 2,
      expression: "detalle == 2"
    }]
  }, [_c("conceptos", {
    ref: "conceptos",
    on: {
      "maestro:conceptos": function maestroConceptos($event) {
        return _vm.maestro();
      }
    }
  })], 1), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.detalle == 3,
      expression: "detalle == 3"
    }]
  }, [_c("conceptospagos", {
    ref: "conceptospagos",
    on: {
      "maestro:conceptospagos": function maestroConceptospagos($event) {
        return _vm.maestrop();
      }
    }
  })], 1), _vm._v(" "), _c("div", {
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
  }, [_c("form", [_c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("RFC Emisor ")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.factura.emisor_id,
      expression: "factura.emisor_id"
    }],
    staticClass: "form-control",
    on: {
      click: function click($event) {
        return _vm.guardarDG();
      },
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.factura, "emisor_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, _vm._l(_vm.list_emisores, function (elem) {
    return _c("option", {
      key: elem.id,
      domProps: {
        value: elem.id
      }
    }, [_vm._v(_vm._s(elem.rfc))]);
  }), 0)]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-6"
  }, [_c("label", [_vm._v("Nombre comercial ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.DatosGenerales.nombre,
      expression: "DatosGenerales.nombre"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Nombre comercial",
      readonly: ""
    },
    domProps: {
      value: _vm.DatosGenerales.nombre
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.DatosGenerales, "nombre", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-8"
  }, [_c("label", [_vm._v("Nombre o razon social ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.DatosGenerales.razon_social,
      expression: "DatosGenerales.razon_social"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Nombre o razon social",
      readonly: ""
    },
    domProps: {
      value: _vm.DatosGenerales.razon_social
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.DatosGenerales, "razon_social", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-8"
  }, [_c("label", [_vm._v("Regimen fiscal")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.DatosGenerales.regimenfiscal,
      expression: "DatosGenerales.regimenfiscal"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Regimen fiscal",
      readonly: ""
    },
    domProps: {
      value: _vm.DatosGenerales.regimenfiscal
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.DatosGenerales, "regimenfiscal", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Tipo de factura")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.factura.tipo_factura_id,
      expression: "factura.tipo_factura_id"
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
        _vm.$set(_vm.factura, "tipo_factura_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, _vm._l(_vm.TipoFactura, function (item, index) {
    return _c("option", {
      key: index,
      domProps: {
        value: item.id
      }
    }, [_vm._v(_vm._s(item.c_tipofactura) + " " + _vm._s(item.descripcion))]);
  }), 0)])]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.factura.tipo_factura_id == 1 || _vm.factura.tipo_factura_id == 2,
      expression: "factura.tipo_factura_id == 1 || factura.tipo_factura_id == 2"
    }],
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-7"
  }, [_c("label", [_vm._v("Tipo de relacción")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.factura.tipo_relacion,
      expression: "factura.tipo_relacion"
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
        _vm.$set(_vm.factura, "tipo_relacion", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, _vm._l(_vm.TipoRelacion, function (item, index) {
    return _c("option", {
      key: index,
      domProps: {
        value: item.id
      }
    }, [_vm._v(_vm._s(item.c_tiporelacion) + " " + _vm._s(item.descripcion))]);
  }), 0)])]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.factura.tipo_factura_id == 1 || _vm.factura.tipo_factura_id == 2,
      expression: "factura.tipo_factura_id == 1 || factura.tipo_factura_id == 2"
    }],
    staticClass: "form-row"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-2"
  }, [_c("div", {
    staticClass: "form-check"
  }, [_c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "radio",
      name: "gridRadiosdos",
      id: "gridRadios3"
    },
    on: {
      change: _vm.edo
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "gridRadios3"
    }
  }, [_vm._v("\r\n                                            Anterior\r\n                                        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-2"
  }, [_c("div", {
    staticClass: "form-check"
  }, [_c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "radio",
      name: "gridRadiosdos",
      id: "gridRadios4"
    },
    on: {
      change: _vm.edo
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "gridRadios4"
    }
  }, [_vm._v("\r\n                                            Existente\r\n                                        ")])])])]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.factura.tipo_factura_id == 1 || _vm.factura.tipo_factura_id == 2,
      expression: "factura.tipo_factura_id == 1 || factura.tipo_factura_id == 2"
    }],
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-7"
  }, [_c("label", [_vm._v("UUID")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.factura.uuid_relacionado,
      expression: "factura.uuid_relacionado"
    }, {
      name: "show",
      rawName: "v-show",
      value: _vm.ante,
      expression: "ante"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.factura.uuid_relacionado
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.factura, "uuid_relacionado", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("v-select", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.exis,
      expression: "exis"
    }],
    attrs: {
      options: _vm.optionsvsex,
      id: "relaccionados",
      name: "relaccionados",
      label: "name",
      "data-vv-name": "relacionados"
    },
    model: {
      value: _vm.factura.factura_id,
      callback: function callback($$v) {
        _vm.$set(_vm.factura, "factura_id", $$v);
      },
      expression: "factura.factura_id"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-2"
  }, [_c("label"), _vm._v(" "), _c("br"), _vm._v(" "), _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.guardaRelaccion();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v("Guardar")])])]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.factura.tipo_factura_id == 1 || _vm.factura.tipo_factura_id == 2,
      expression: "factura.tipo_factura_id == 1 || factura.tipo_factura_id == 2"
    }],
    staticClass: "form-row"
  }, [_vm._m(1), _vm._v(" "), _vm._m(2)]), _vm._v(" "), _vm._l(_vm.array_relacionados, function (vi, index) {
    return _c("li", {
      key: index,
      staticClass: "list-group-item"
    }, [_c("div", {
      staticClass: "form-row"
    }, [_c("div", {
      staticClass: "form-group col-md-5"
    }, [_c("label", [_vm._v(_vm._s(vi.name))])]), _vm._v(" "), _c("div", {
      staticClass: "form-group col-md-1"
    }, [_c("a", {
      on: {
        click: function click($event) {
          return _vm.eliminar_aignacion(vi, index);
        }
      }
    }, [_c("span", {
      staticClass: "fas fa-trash",
      attrs: {
        "arial-hidden": "true"
      }
    })])])])]);
  }), _vm._v(" "), _c("hr", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.factura.tipo_factura_id == 1 || _vm.factura.tipo_factura_id == 2,
      expression: "factura.tipo_factura_id == 1 || factura.tipo_factura_id == 2"
    }]
  }), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-6"
  }, [_c("label", [_vm._v("Cliente ")]), _vm._v(" "), _c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    attrs: {
      options: _vm.Clientes,
      label: "nombre"
    },
    on: {
      input: _vm.llenarDatosCliente
    },
    model: {
      value: _vm.cliente,
      callback: function callback($$v) {
        _vm.cliente = $$v;
      },
      expression: "cliente"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-3"
  }, [_c("label", [_vm._v("RFC receptor ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.Receptor.rfc,
      expression: "Receptor.rfc"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "RFC receptor",
      readonly: ""
    },
    domProps: {
      value: _vm.Receptor.rfc
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.Receptor, "rfc", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-3"
  }, [_c("label", [_vm._v("C.P. receptor ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.Receptor.codigo_postal,
      expression: "Receptor.codigo_postal"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "RFC receptor",
      readonly: ""
    },
    domProps: {
      value: _vm.Receptor.codigo_postal
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.Receptor, "codigo_postal", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-10"
  }, [_c("label", [_vm._v("Nombre o razon social")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.Receptor.nombre,
      expression: "Receptor.nombre"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Nombre o razon social",
      readonly: ""
    },
    domProps: {
      value: _vm.Receptor.nombre
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.Receptor, "nombre", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-10"
  }, [_c("label", [_vm._v("Régimen Fiscal")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.Receptor.regimen_fiscal,
      expression: "Receptor.regimen_fiscal"
    }],
    staticClass: "form-control disabled",
    attrs: {
      type: "text",
      placeholder: "Régimen Fiscal",
      readonly: ""
    },
    domProps: {
      value: _vm.Receptor.regimen_fiscal
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.Receptor, "regimen_fiscal", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-6"
  }, [_c("label", [_vm._v("Uso Factura ")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.factura.uso_factura,
      expression: "factura.uso_factura"
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
        _vm.$set(_vm.factura, "uso_factura", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, _vm._l(_vm.UsoFactura, function (item, index) {
    return _c("option", {
      key: index,
      domProps: {
        value: item.id
      }
    }, [_vm._v(_vm._s(item.c_uso) + " " + _vm._s(item.descripcion))]);
  }), 0)]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-3"
  }, [_c("label", [_vm._v("Exportación ")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.factura.exportacion,
      expression: "factura.exportacion"
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
        _vm.$set(_vm.factura, "exportacion", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "01"
    }
  }, [_vm._v("01 - No Aplica")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "02"
    }
  }, [_vm._v("02 - Definitiva")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "03"
    }
  }, [_vm._v("03 - Temporal")])])])]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Fecha y hora de expedición")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.factura.fecha_hora,
      expression: "factura.fecha_hora"
    }],
    staticClass: "form-control",
    attrs: {
      type: "datetime-local",
      placeholder: "Fecha y hora de expedicion"
    },
    domProps: {
      value: _vm.factura.fecha_hora
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.factura, "fecha_hora", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Código postal ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.factura.codigo_postal,
      expression: "factura.codigo_postal"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      maxlength: "5",
      placeholder: "Codigo postal"
    },
    domProps: {
      value: _vm.factura.codigo_postal
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.factura, "codigo_postal", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Moneda")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.factura.moneda_id,
      expression: "factura.moneda_id"
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
        _vm.$set(_vm.factura, "moneda_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.tipomoneda]
    }
  }, _vm._l(_vm.Monedas, function (item, index) {
    return _c("option", {
      key: index,
      domProps: {
        value: item.id
      }
    }, [_vm._v(_vm._s(item.c_moneda))]);
  }), 0)])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Forma de pago ")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.factura.formapago,
      expression: "factura.formapago"
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
        _vm.$set(_vm.factura, "formapago", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, _vm._l(_vm.FormaPago, function (item, index) {
    return _c("option", {
      key: index,
      domProps: {
        value: item.id
      }
    }, [_vm._v(_vm._s(item.clave) + " " + _vm._s(item.descripcion))]);
  }), 0)]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Metodo de pago")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.factura.metodopago,
      expression: "factura.metodopago"
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
        _vm.$set(_vm.factura, "metodopago", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, _vm._l(_vm.MetodoPago, function (item, index) {
    return _c("option", {
      key: index,
      domProps: {
        value: item.id
      }
    }, [_vm._v(_vm._s(item.c_metodopago) + " " + _vm._s(item.descripcion))]);
  }), 0)]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Tipo de cambio")]), _vm._v(" "), _c("div", {
    staticClass: "input-group mb-2"
  }, [_vm._m(3), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.factura.tipo_cambio,
      expression: "factura.tipo_cambio"
    }],
    staticClass: "form-control",
    attrs: {
      disabled: _vm.dasabiltarMonedas,
      type: "text",
      placeholder: "Tipo de cambio"
    },
    domProps: {
      value: _vm.factura.tipo_cambio
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.factura, "tipo_cambio", $event.target.value);
      }
    }
  })])])]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.factura.tipo_factura_id == 4,
      expression: "factura.tipo_factura_id == 4"
    }],
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Número de operación")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "integer",
      expression: "'integer'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.factura.num_operacion,
      expression: "factura.num_operacion"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "numero de operacion",
      "data-vv-name": "numero de operacion"
    },
    domProps: {
      value: _vm.factura.num_operacion
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.factura, "num_operacion", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("numero de operacion")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Banco ordenante")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.factura.ban_ordenante,
      expression: "factura.ban_ordenante"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "banco ordenante",
      "data-vv-name": "banco ordenante"
    },
    domProps: {
      value: _vm.factura.ban_ordenante
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.factura, "ban_ordenante", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Cuenta ordenante")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.factura.cuenta_ordenante,
      expression: "factura.cuenta_ordenante"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "cuenta ordenante",
      "data-vv-name": "cuenta ordenante"
    },
    domProps: {
      value: _vm.factura.cuenta_ordenante
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.factura, "cuenta_ordenante", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.factura.tipo_factura_id == 4,
      expression: "factura.tipo_factura_id == 4"
    }],
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("RFC banco ordenante")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.factura.rfc_cuenta_ordenante,
      expression: "factura.rfc_cuenta_ordenante"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "RFC banco ordenante",
      "data-vv-name": "RFC banco ordenante"
    },
    domProps: {
      value: _vm.factura.rfc_cuenta_ordenante
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.factura, "rfc_cuenta_ordenante", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("RFC banco beneficiario")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.factura.rfc_cuenta_beneficiario,
      expression: "factura.rfc_cuenta_beneficiario"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "RFC banco beneficiario",
      "data-vv-name": "RFC banco beneficiario"
    },
    domProps: {
      value: _vm.factura.rfc_cuenta_beneficiario
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.factura, "rfc_cuenta_beneficiario", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.factura.tipo_factura_id == 4,
      expression: "factura.tipo_factura_id == 4"
    }],
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Fecha de pago")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.factura.fecha_pago,
      expression: "factura.fecha_pago"
    }],
    staticClass: "form-control",
    attrs: {
      type: "datetime-local",
      name: "fecha de pago",
      "data-vv-name": "fecha_pago"
    },
    domProps: {
      value: _vm.factura.fecha_pago
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.factura, "fecha_pago", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.factura.tipo_factura_id == 2 || _vm.factura.tipo_factura_id == 1,
      expression: "factura.tipo_factura_id == 2 || factura.tipo_factura_id == 1"
    }],
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-8"
  }, [_c("label", [_vm._v("Condiciones de pago ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.factura.condicion_pago,
      expression: "factura.condicion_pago"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Condiciones de pago"
    },
    domProps: {
      value: _vm.factura.condicion_pago
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.factura, "condicion_pago", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_vm._m(4), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-1"
  }, [_c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      id: "observa"
    },
    on: {
      change: function change($event) {
        return _vm.observaciones($event);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-3"
  }, [_c("label", [_vm._v("Adenda")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.factura.adenda,
      expression: "factura.adenda"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "adenda",
      disabled: ""
    },
    domProps: {
      value: _vm.factura.adenda
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.factura, "adenda", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-3"
  }, [_c("label", [_vm._v("Proveedor")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.factura.proveeade,
      expression: "factura.proveeade"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "proveeade",
      disabled: ""
    },
    domProps: {
      value: _vm.factura.proveeade
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.factura, "proveeade", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-3"
  }, [_c("label", [_vm._v("No. Recepción")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.factura.clave_ob,
      expression: "factura.clave_ob"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "clave_ob",
      disabled: ""
    },
    domProps: {
      value: _vm.factura.clave_ob
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.factura, "clave_ob", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-3"
  }, [_c("label", [_vm._v("Orden de compra")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.factura.orden_ob,
      expression: "factura.orden_ob"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "orden_ob",
      disabled: ""
    },
    domProps: {
      value: _vm.factura.orden_ob
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.factura, "orden_ob", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_vm._m(5), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-2"
  }, [_c("div", {
    staticClass: "form-check"
  }, [_c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "radio",
      name: "gridRadios",
      id: "gridRadios1"
    },
    on: {
      click: _vm.nacional
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "gridRadios1"
    }
  }, [_vm._v("\r\n                                            Nacional\r\n                                        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-2"
  }, [_c("div", {
    staticClass: "form-check"
  }, [_c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "radio",
      name: "gridRadios",
      id: "gridRadios2"
    },
    on: {
      click: _vm.extranjero
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "gridRadios2"
    }
  }, [_vm._v("\r\n                                            Extranjero\r\n                                        ")])])]), _vm._v(" "), _vm._m(6), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.factura.taxid,
      expression: "factura.taxid"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Tax Id",
      disabled: _vm.desabilitartax == true
    },
    domProps: {
      value: _vm.factura.taxid
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.factura, "taxid", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("hr")], 2)]), _vm._v(" "), _c("div", {
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
  }), _vm._v("Actualizar")]) : _vm._e()], 1)])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "form-group col-md-2"
  }, [_c("label", [_vm._v("Tipo:")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "form-group col-md-5"
  }, [_c("label", [_c("b", [_vm._v("UUID")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "form-group col-md-1"
  }, [_c("label", [_c("b", [_vm._v("ACCIONES")])])]);
}, function () {
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
    staticClass: "form-group col-md-2"
  }, [_c("label", [_vm._v("Observaciones")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "form-group col-md-2"
  }, [_c("label", [_vm._v("Tipo:")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "form-group col-md-1"
  }, [_c("label", [_vm._v("Tax Id: ")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Contabilidad/Factura/Factura.vue?vue&type=style&index=0&id=4e4d3206&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Contabilidad/Factura/Factura.vue?vue&type=style&index=0&id=4e4d3206&lang=css ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\nhr {\r\n    display: block;\r\n    margin-top: 2em;\r\n    margin-bottom: 2em;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    border-style: inset;\r\n    border-width: 2px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Contabilidad/Factura/Facturav4.vue?vue&type=style&index=0&id=7f36813b&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Contabilidad/Factura/Facturav4.vue?vue&type=style&index=0&id=7f36813b&lang=css ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\nhr {\r\n    display: block;\r\n    margin-top: 2em;\r\n    margin-bottom: 2em;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    border-style: inset;\r\n    border-width: 2px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Contabilidad/Factura/Factura.vue?vue&type=style&index=0&id=4e4d3206&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Contabilidad/Factura/Factura.vue?vue&type=style&index=0&id=4e4d3206&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Factura_vue_vue_type_style_index_0_id_4e4d3206_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Factura.vue?vue&type=style&index=0&id=4e4d3206&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Contabilidad/Factura/Factura.vue?vue&type=style&index=0&id=4e4d3206&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Factura_vue_vue_type_style_index_0_id_4e4d3206_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Factura_vue_vue_type_style_index_0_id_4e4d3206_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Contabilidad/Factura/Facturav4.vue?vue&type=style&index=0&id=7f36813b&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Contabilidad/Factura/Facturav4.vue?vue&type=style&index=0&id=7f36813b&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Facturav4_vue_vue_type_style_index_0_id_7f36813b_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Facturav4.vue?vue&type=style&index=0&id=7f36813b&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Contabilidad/Factura/Facturav4.vue?vue&type=style&index=0&id=7f36813b&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Facturav4_vue_vue_type_style_index_0_id_7f36813b_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Facturav4_vue_vue_type_style_index_0_id_7f36813b_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/assets/js/components/Contabilidad/Catalogo/SatCatFormapago.vue":
/*!**********************************************************************************!*\
  !*** ./resources/assets/js/components/Contabilidad/Catalogo/SatCatFormapago.vue ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SatCatFormapago_vue_vue_type_template_id_5c26b6c1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SatCatFormapago.vue?vue&type=template&id=5c26b6c1 */ "./resources/assets/js/components/Contabilidad/Catalogo/SatCatFormapago.vue?vue&type=template&id=5c26b6c1");
/* harmony import */ var _SatCatFormapago_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SatCatFormapago.vue?vue&type=script&lang=js */ "./resources/assets/js/components/Contabilidad/Catalogo/SatCatFormapago.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SatCatFormapago_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _SatCatFormapago_vue_vue_type_template_id_5c26b6c1__WEBPACK_IMPORTED_MODULE_0__.render,
  _SatCatFormapago_vue_vue_type_template_id_5c26b6c1__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/Contabilidad/Catalogo/SatCatFormapago.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Contabilidad/Catalogo/SatCatFormapago.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************!*\
  !*** ./resources/assets/js/components/Contabilidad/Catalogo/SatCatFormapago.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SatCatFormapago_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SatCatFormapago.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Contabilidad/Catalogo/SatCatFormapago.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SatCatFormapago_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Contabilidad/Catalogo/SatCatFormapago.vue?vue&type=template&id=5c26b6c1":
/*!****************************************************************************************************************!*\
  !*** ./resources/assets/js/components/Contabilidad/Catalogo/SatCatFormapago.vue?vue&type=template&id=5c26b6c1 ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SatCatFormapago_vue_vue_type_template_id_5c26b6c1__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SatCatFormapago_vue_vue_type_template_id_5c26b6c1__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SatCatFormapago_vue_vue_type_template_id_5c26b6c1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SatCatFormapago.vue?vue&type=template&id=5c26b6c1 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Contabilidad/Catalogo/SatCatFormapago.vue?vue&type=template&id=5c26b6c1");


/***/ }),

/***/ "./resources/assets/js/components/Contabilidad/Catalogo/SatCatProdser.vue":
/*!********************************************************************************!*\
  !*** ./resources/assets/js/components/Contabilidad/Catalogo/SatCatProdser.vue ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SatCatProdser_vue_vue_type_template_id_11b91374__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SatCatProdser.vue?vue&type=template&id=11b91374 */ "./resources/assets/js/components/Contabilidad/Catalogo/SatCatProdser.vue?vue&type=template&id=11b91374");
/* harmony import */ var _SatCatProdser_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SatCatProdser.vue?vue&type=script&lang=js */ "./resources/assets/js/components/Contabilidad/Catalogo/SatCatProdser.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SatCatProdser_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _SatCatProdser_vue_vue_type_template_id_11b91374__WEBPACK_IMPORTED_MODULE_0__.render,
  _SatCatProdser_vue_vue_type_template_id_11b91374__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/Contabilidad/Catalogo/SatCatProdser.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Contabilidad/Catalogo/SatCatProdser.vue?vue&type=script&lang=js":
/*!********************************************************************************************************!*\
  !*** ./resources/assets/js/components/Contabilidad/Catalogo/SatCatProdser.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SatCatProdser_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SatCatProdser.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Contabilidad/Catalogo/SatCatProdser.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SatCatProdser_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Contabilidad/Catalogo/SatCatProdser.vue?vue&type=template&id=11b91374":
/*!**************************************************************************************************************!*\
  !*** ./resources/assets/js/components/Contabilidad/Catalogo/SatCatProdser.vue?vue&type=template&id=11b91374 ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SatCatProdser_vue_vue_type_template_id_11b91374__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SatCatProdser_vue_vue_type_template_id_11b91374__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SatCatProdser_vue_vue_type_template_id_11b91374__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SatCatProdser.vue?vue&type=template&id=11b91374 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Contabilidad/Catalogo/SatCatProdser.vue?vue&type=template&id=11b91374");


/***/ }),

/***/ "./resources/assets/js/components/Contabilidad/Catalogo/SatCatUnidades.vue":
/*!*********************************************************************************!*\
  !*** ./resources/assets/js/components/Contabilidad/Catalogo/SatCatUnidades.vue ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SatCatUnidades_vue_vue_type_template_id_ad513b6c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SatCatUnidades.vue?vue&type=template&id=ad513b6c */ "./resources/assets/js/components/Contabilidad/Catalogo/SatCatUnidades.vue?vue&type=template&id=ad513b6c");
/* harmony import */ var _SatCatUnidades_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SatCatUnidades.vue?vue&type=script&lang=js */ "./resources/assets/js/components/Contabilidad/Catalogo/SatCatUnidades.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SatCatUnidades_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _SatCatUnidades_vue_vue_type_template_id_ad513b6c__WEBPACK_IMPORTED_MODULE_0__.render,
  _SatCatUnidades_vue_vue_type_template_id_ad513b6c__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/Contabilidad/Catalogo/SatCatUnidades.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Contabilidad/Catalogo/SatCatUnidades.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************!*\
  !*** ./resources/assets/js/components/Contabilidad/Catalogo/SatCatUnidades.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SatCatUnidades_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SatCatUnidades.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Contabilidad/Catalogo/SatCatUnidades.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SatCatUnidades_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Contabilidad/Catalogo/SatCatUnidades.vue?vue&type=template&id=ad513b6c":
/*!***************************************************************************************************************!*\
  !*** ./resources/assets/js/components/Contabilidad/Catalogo/SatCatUnidades.vue?vue&type=template&id=ad513b6c ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SatCatUnidades_vue_vue_type_template_id_ad513b6c__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SatCatUnidades_vue_vue_type_template_id_ad513b6c__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SatCatUnidades_vue_vue_type_template_id_ad513b6c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SatCatUnidades.vue?vue&type=template&id=ad513b6c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Contabilidad/Catalogo/SatCatUnidades.vue?vue&type=template&id=ad513b6c");


/***/ }),

/***/ "./resources/assets/js/components/Contabilidad/Factura/Conceptos.vue":
/*!***************************************************************************!*\
  !*** ./resources/assets/js/components/Contabilidad/Factura/Conceptos.vue ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Conceptos_vue_vue_type_template_id_1cea9c91__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Conceptos.vue?vue&type=template&id=1cea9c91 */ "./resources/assets/js/components/Contabilidad/Factura/Conceptos.vue?vue&type=template&id=1cea9c91");
/* harmony import */ var _Conceptos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Conceptos.vue?vue&type=script&lang=js */ "./resources/assets/js/components/Contabilidad/Factura/Conceptos.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Conceptos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Conceptos_vue_vue_type_template_id_1cea9c91__WEBPACK_IMPORTED_MODULE_0__.render,
  _Conceptos_vue_vue_type_template_id_1cea9c91__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/Contabilidad/Factura/Conceptos.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Contabilidad/Factura/Conceptos.vue?vue&type=script&lang=js":
/*!***************************************************************************************************!*\
  !*** ./resources/assets/js/components/Contabilidad/Factura/Conceptos.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Conceptos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Conceptos.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Contabilidad/Factura/Conceptos.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Conceptos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Contabilidad/Factura/Conceptos.vue?vue&type=template&id=1cea9c91":
/*!*********************************************************************************************************!*\
  !*** ./resources/assets/js/components/Contabilidad/Factura/Conceptos.vue?vue&type=template&id=1cea9c91 ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Conceptos_vue_vue_type_template_id_1cea9c91__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Conceptos_vue_vue_type_template_id_1cea9c91__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Conceptos_vue_vue_type_template_id_1cea9c91__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Conceptos.vue?vue&type=template&id=1cea9c91 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Contabilidad/Factura/Conceptos.vue?vue&type=template&id=1cea9c91");


/***/ }),

/***/ "./resources/assets/js/components/Contabilidad/Factura/ConceptosPagos.vue":
/*!********************************************************************************!*\
  !*** ./resources/assets/js/components/Contabilidad/Factura/ConceptosPagos.vue ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ConceptosPagos_vue_vue_type_template_id_216fbfce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConceptosPagos.vue?vue&type=template&id=216fbfce */ "./resources/assets/js/components/Contabilidad/Factura/ConceptosPagos.vue?vue&type=template&id=216fbfce");
/* harmony import */ var _ConceptosPagos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConceptosPagos.vue?vue&type=script&lang=js */ "./resources/assets/js/components/Contabilidad/Factura/ConceptosPagos.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ConceptosPagos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ConceptosPagos_vue_vue_type_template_id_216fbfce__WEBPACK_IMPORTED_MODULE_0__.render,
  _ConceptosPagos_vue_vue_type_template_id_216fbfce__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/Contabilidad/Factura/ConceptosPagos.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Contabilidad/Factura/ConceptosPagos.vue?vue&type=script&lang=js":
/*!********************************************************************************************************!*\
  !*** ./resources/assets/js/components/Contabilidad/Factura/ConceptosPagos.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ConceptosPagos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ConceptosPagos.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Contabilidad/Factura/ConceptosPagos.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ConceptosPagos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Contabilidad/Factura/ConceptosPagos.vue?vue&type=template&id=216fbfce":
/*!**************************************************************************************************************!*\
  !*** ./resources/assets/js/components/Contabilidad/Factura/ConceptosPagos.vue?vue&type=template&id=216fbfce ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ConceptosPagos_vue_vue_type_template_id_216fbfce__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ConceptosPagos_vue_vue_type_template_id_216fbfce__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ConceptosPagos_vue_vue_type_template_id_216fbfce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ConceptosPagos.vue?vue&type=template&id=216fbfce */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Contabilidad/Factura/ConceptosPagos.vue?vue&type=template&id=216fbfce");


/***/ }),

/***/ "./resources/assets/js/components/Contabilidad/Factura/Factura.vue":
/*!*************************************************************************!*\
  !*** ./resources/assets/js/components/Contabilidad/Factura/Factura.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Factura_vue_vue_type_template_id_4e4d3206__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Factura.vue?vue&type=template&id=4e4d3206 */ "./resources/assets/js/components/Contabilidad/Factura/Factura.vue?vue&type=template&id=4e4d3206");
/* harmony import */ var _Factura_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Factura.vue?vue&type=script&lang=js */ "./resources/assets/js/components/Contabilidad/Factura/Factura.vue?vue&type=script&lang=js");
/* harmony import */ var _Factura_vue_vue_type_style_index_0_id_4e4d3206_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Factura.vue?vue&type=style&index=0&id=4e4d3206&lang=css */ "./resources/assets/js/components/Contabilidad/Factura/Factura.vue?vue&type=style&index=0&id=4e4d3206&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Factura_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Factura_vue_vue_type_template_id_4e4d3206__WEBPACK_IMPORTED_MODULE_0__.render,
  _Factura_vue_vue_type_template_id_4e4d3206__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/Contabilidad/Factura/Factura.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Contabilidad/Factura/Factura.vue?vue&type=script&lang=js":
/*!*************************************************************************************************!*\
  !*** ./resources/assets/js/components/Contabilidad/Factura/Factura.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Factura_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Factura.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Contabilidad/Factura/Factura.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Factura_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Contabilidad/Factura/Factura.vue?vue&type=style&index=0&id=4e4d3206&lang=css":
/*!*********************************************************************************************************************!*\
  !*** ./resources/assets/js/components/Contabilidad/Factura/Factura.vue?vue&type=style&index=0&id=4e4d3206&lang=css ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Factura_vue_vue_type_style_index_0_id_4e4d3206_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Factura.vue?vue&type=style&index=0&id=4e4d3206&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Contabilidad/Factura/Factura.vue?vue&type=style&index=0&id=4e4d3206&lang=css");


/***/ }),

/***/ "./resources/assets/js/components/Contabilidad/Factura/Factura.vue?vue&type=template&id=4e4d3206":
/*!*******************************************************************************************************!*\
  !*** ./resources/assets/js/components/Contabilidad/Factura/Factura.vue?vue&type=template&id=4e4d3206 ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Factura_vue_vue_type_template_id_4e4d3206__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Factura_vue_vue_type_template_id_4e4d3206__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Factura_vue_vue_type_template_id_4e4d3206__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Factura.vue?vue&type=template&id=4e4d3206 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Contabilidad/Factura/Factura.vue?vue&type=template&id=4e4d3206");


/***/ }),

/***/ "./resources/assets/js/components/Contabilidad/Factura/Facturav4.vue":
/*!***************************************************************************!*\
  !*** ./resources/assets/js/components/Contabilidad/Factura/Facturav4.vue ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Facturav4_vue_vue_type_template_id_7f36813b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Facturav4.vue?vue&type=template&id=7f36813b */ "./resources/assets/js/components/Contabilidad/Factura/Facturav4.vue?vue&type=template&id=7f36813b");
/* harmony import */ var _Facturav4_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Facturav4.vue?vue&type=script&lang=js */ "./resources/assets/js/components/Contabilidad/Factura/Facturav4.vue?vue&type=script&lang=js");
/* harmony import */ var _Facturav4_vue_vue_type_style_index_0_id_7f36813b_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Facturav4.vue?vue&type=style&index=0&id=7f36813b&lang=css */ "./resources/assets/js/components/Contabilidad/Factura/Facturav4.vue?vue&type=style&index=0&id=7f36813b&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Facturav4_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Facturav4_vue_vue_type_template_id_7f36813b__WEBPACK_IMPORTED_MODULE_0__.render,
  _Facturav4_vue_vue_type_template_id_7f36813b__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/Contabilidad/Factura/Facturav4.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Contabilidad/Factura/Facturav4.vue?vue&type=script&lang=js":
/*!***************************************************************************************************!*\
  !*** ./resources/assets/js/components/Contabilidad/Factura/Facturav4.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Facturav4_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Facturav4.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Contabilidad/Factura/Facturav4.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Facturav4_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Contabilidad/Factura/Facturav4.vue?vue&type=style&index=0&id=7f36813b&lang=css":
/*!***********************************************************************************************************************!*\
  !*** ./resources/assets/js/components/Contabilidad/Factura/Facturav4.vue?vue&type=style&index=0&id=7f36813b&lang=css ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Facturav4_vue_vue_type_style_index_0_id_7f36813b_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Facturav4.vue?vue&type=style&index=0&id=7f36813b&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Contabilidad/Factura/Facturav4.vue?vue&type=style&index=0&id=7f36813b&lang=css");


/***/ }),

/***/ "./resources/assets/js/components/Contabilidad/Factura/Facturav4.vue?vue&type=template&id=7f36813b":
/*!*********************************************************************************************************!*\
  !*** ./resources/assets/js/components/Contabilidad/Factura/Facturav4.vue?vue&type=template&id=7f36813b ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Facturav4_vue_vue_type_template_id_7f36813b__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Facturav4_vue_vue_type_template_id_7f36813b__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Facturav4_vue_vue_type_template_id_7f36813b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Facturav4.vue?vue&type=template&id=7f36813b */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Contabilidad/Factura/Facturav4.vue?vue&type=template&id=7f36813b");


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