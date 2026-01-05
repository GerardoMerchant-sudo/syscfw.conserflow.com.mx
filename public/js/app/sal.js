(self["webpackChunk"] = self["webpackChunk"] || []).push([["sal"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Salidas/NoConformes.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Salidas/NoConformes.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************/
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
      //// SalidaNC
      url_salidanc: "salidassgi/salidanc",
      tipoAccion_salidanc: 1,
      tipoCardSalidaNC: 1,
      PermisosCRUD: {},
      ver_modal_salidanc: false,
      tituloModal_salidanc: "",
      salidanc_id: 0,
      isGuardarsalidanc_loading: false,
      isObtenersalidanc_loading: false,
      columns_salidanc: ["id", "folio", "fecha_elaboracion", "area.nombre", "proyecto.nombre_corto", "cliente_proveedor"],
      list_salidanc: [],
      list_empleados: [],
      list_proyectos: [],
      list_clientes_proveedores: [],
      list_departamentos_salidas: [],
      list_acciones_temp: [],
      acciones: {},
      salidanc: {},
      actividades: {},
      options_salidanc: {
        headings: {
          id: "Acciones",
          folio: "Número de reporte",
          "area.nombre": "Área",
          "proyecto.nombre_corto": "Proyecto /Servicio",
          cliente_proveedor: "Cliente / Proveedor"
        },
        perPage: 10,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        filterByColumn: true,
        texts: config.texts
      },
      anio: 2024
    };
  },
  methods: {
    ObtenerDatos: function ObtenerDatos() {
      var _this = this;
      axios.get("generales/empleadoactivos").then(function (res) {
        if (res.data.status) _this.list_empleados = res.data.empleados;else toastr.error(res.data.mensaje);
      });
      axios.get("".concat(this.url_salidanc, "/departamentos")).then(function (res) {
        if (res.data.status) _this.list_departamentos_salidas = res.data.departamentos;else toastr.error(res.data.mensaje);
      });
      axios.get("generales/proyectos/1").then(function (res) {
        if (res.data.status) _this.list_proyectos = res.data.proyectos;else toastr.error(res.data.mensaje);
      });
    },
    /**
     * Obtener todos los registros
     */
    ObtenerSalidaNC: function ObtenerSalidaNC() {
      var _this2 = this;
      this.isObtenersalidanc_loading = true;
      axios.get("".concat(this.url_salidanc, "/").concat(this.anio)).then(function (res) {
        _this2.isObtenersalidanc_loading = false;
        if (res.data.status) _this2.list_salidanc = res.data.salidanc;else toastr.error(res.data.mensaje);
      });
    },
    /**
     * Abrir modal SalidaNC
     */
    AbrirModalSalidaNC: function AbrirModalSalidaNC(nuevo) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.tipoCardSalidaNC = 2;
      if (nuevo) {
        this.tituloModal_salidanc = "Registrar Salida No Conforme";
        this.tipoAccion_salidanc = 1;
      } else {
        this.tituloModal_salidanc = "Actualizar Salida No Conforme";
        this.tipoAccion_salidanc = 2;
        var acciones = JSON.parse(data.acciones);
        this.list_acciones_temp = acciones;
        this.salidanc = _objectSpread({}, data);
      }
    },
    /**
     * Registrar SalidaNC
     */
    RegistrarSalidaNC: function RegistrarSalidaNC(nuevo) {
      var _this3 = this;
      this.$validator.validateAll().then(function (isValid) {
        if (!isValid) {
          toastr.warning("Ingrese todos los campos");
          return;
        }
        if (_this3.list_acciones_temp.length == 0) {
          toastr.warning("Ingrese una acción a realizar");
          return;
        }
        if (_this3.salidanc.tratamiento != 9) _this3.salidanc.tratamiento_otro = "";
        var data = new FormData();
        var resultado = _this3.salidanc.resultado ? _this3.salidanc.resultado : "";
        if (!nuevo) data.append("id", _this3.salidanc.id);
        data.append("empleado_elabora_id", _this3.salidanc.empleado_elabora.id);
        data.append("fecha_elaboracion", _this3.salidanc.fecha_elaboracion);
        data.append("empleado_detecta_id", _this3.salidanc.empleado_detecta.id);
        data.append("area_id", _this3.salidanc.area.id);
        data.append("fecha_deteccion", _this3.salidanc.fecha_deteccion);
        data.append("descripcion", _this3.salidanc.descripcion);
        data.append("proyecto_id", _this3.salidanc.proyecto.id);
        data.append("cliente_proveedor", _this3.salidanc.cliente_proveedor);
        data.append("no_oc", _this3.salidanc.no_oc ? _this3.salidanc.no_oc : "");
        data.append("no_comunicado", _this3.salidanc.no_comunicado ? _this3.salidanc.no_comunicado : "");
        data.append("acciones", JSON.stringify(_this3.list_acciones_temp));
        data.append("tratamiento", _this3.salidanc.tratamiento);
        data.append("tratamiento_otro", _this3.salidanc.tratamiento_otro);
        data.append("resultado", resultado);
        if (_this3.salidanc.empleado_verifica) data.append("empleado_verifica_id", _this3.salidanc.empleado_verifica.id);
        if (_this3.salidanc.fecha_verificacion) data.append("fecha_verificacion", _this3.salidanc.fecha_verificacion);
        if (_this3.salidanc.require_correccion) data.append("require_correccion", _this3.salidanc.require_correccion);
        if (_this3.salidanc.no_accion_correctiva) data.append("no_accion_correctiva", _this3.salidanc.no_accion_correctiva);

        // const method = nuevo ? "POST" : "PUT";
        // const url = nuevo ? this.url_salidanc : `${this.url_salidanc}/${this.salidanc.id}`;
        _this3.isGuardarsalidanc_loading = true;
        axios.post(_this3.url_salidanc, data).then(function (res) {
          _this3.isGuardarsalidanc_loading = false;
          if (res.data.status) {
            toastr.success("Guardado correctamente");
            _this3.ObtenerSalidaNC();
            _this3.CerrarModalSalidaNC();
          } else {
            toastr.error(res.data.mensaje);
          }
        });
      });
    },
    agregarActividadTemp: function agregarActividadTemp() {
      if (!this.acciones.actividad || this.acciones.actividad.trim() == "") {
        toastr.warning("Ingrese la actividad");
        return;
      }
      if (this.acciones.responsable == null || this.acciones.responsable.id == null) {
        toastr.warning("Ingrese el responsable");
        return;
      }
      if (this.acciones.fecha == null || this.acciones.fecha == "") {
        toastr.warning("Selecciona la fecha");
        return;
      }
      this.list_acciones_temp.push(_objectSpread({}, this.acciones));
      this.acciones = {};
    },
    eliminarAccionTemp: function eliminarAccionTemp(index) {
      this.list_acciones_temp.splice(index, 1);
    },
    /**
     * Cerrar modal
     */
    CerrarModalSalidaNC: function CerrarModalSalidaNC() {
      this.list_acciones_temp = [];
      this.acciones = {};
      this.tipoCardSalidaNC = 1;
      this.salidanc = {
        empleado_elabora: {},
        empleado_detecta: {},
        empleado_verifica: {},
        require_correccion: 1
      };
      this.$validator.reset();
    },
    DescargarBitacora: function DescargarBitacora() {
      window.open("".concat(this.url_salidanc, "/bitacora/").concat(this.anio), "_blank");
    },
    DescargarSalida: function DescargarSalida(id) {
      window.open("".concat(this.url_salidanc, "/descargar/").concat(id), "_blank");
    }
  },
  mounted: function mounted() {
    this.PermisosCRUD = _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].getCRUD(this.$route.path);
    this.ObtenerDatos();
    this.ObtenerSalidaNC();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Salidas/NoConformes.vue?vue&type=template&id=21ebb608&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Salidas/NoConformes.vue?vue&type=template&id=21ebb608&scoped=true ***!
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
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.tipoCardSalidaNC == 1,
      expression: "tipoCardSalidaNC==1"
    }],
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("i", {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" SALIDAS NO CONFORMES - " + _vm._s(_vm.anio) + "\n            "), _vm.PermisosCRUD.Download ? _c("button", {
    staticClass: "btn btn-secondary float-sm-right mr-1",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.DescargarBitacora
    }
  }, [_c("i", {
    staticClass: "fas fa-download"
  }), _vm._v(" Bitácora\n            ")]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "dropdown float-sm-right mx-1"
  }, [_c("button", {
    staticClass: "btn btn-outline-dark dropdown-toggle",
    attrs: {
      type: "button",
      id: "dropdownMenu2",
      "data-toggle": "dropdown",
      "aria-haspopup": "true",
      "aria-expanded": "false"
    }
  }, [_vm._v("\n                    Año\n                ")]), _vm._v(" "), _c("div", {
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
        _vm.anio = 2024;
        _vm.ObtenerSalidaNC();
      }
    }
  }, [_vm._v("2024")])])]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-dark float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.AbrirModalSalidaNC(true);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  }), _vm._v(" Nuevo\n            ")])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isObtenersalidanc_loading
    }
  }), _vm._v(" "), _c("v-client-table", {
    attrs: {
      columns: _vm.columns_salidanc,
      data: _vm.list_salidanc,
      options: _vm.options_salidanc
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
        }, [_vm.PermisosCRUD.Update ? _c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.AbrirModalSalidaNC(false, props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-edit"
        }), _vm._v(" Actualizar\n                                ")]) : _vm._e(), _vm._v(" "), _vm.PermisosCRUD.Download ? _c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.DescargarSalida(props.row.id);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-download"
        }), _vm._v(" Descargar\n                                ")]) : _vm._e()])])])];
      }
    }])
  })], 1)]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.tipoCardSalidaNC == 2,
      expression: "tipoCardSalidaNC==2"
    }],
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("i", {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" SALIDA NO CONFORME\n            "), _c("button", {
    staticClass: "btn btn-dark float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.CerrarModalSalidaNC
    }
  }, [_c("i", {
    staticClass: "fas fa-arrow-left"
  }), _vm._v(" Regresar\n            ")])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isGuardarsalidanc_loading
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "form-row mx-3"
  }, [_c("div", {
    staticClass: "col-md-6 mb-2"
  }, [_c("label", {}, [_vm._v("Elaborado por")]), _vm._v(" "), _c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    attrs: {
      label: "nombre",
      options: _vm.list_empleados,
      "data-vv-name": "Elaborado por"
    },
    model: {
      value: _vm.salidanc.empleado_elabora,
      callback: function callback($$v) {
        _vm.$set(_vm.salidanc, "empleado_elabora", $$v);
      },
      expression: "salidanc.empleado_elabora"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Elaborado por")))])], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 mb-2"
  }, [_c("label", {}, [_vm._v("Fecha de elaboración")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.salidanc.fecha_elaboracion,
      expression: "salidanc.fecha_elaboracion"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date",
      "data-vv-name": "Fecha de elaboración"
    },
    domProps: {
      value: _vm.salidanc.fecha_elaboracion
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.salidanc, "fecha_elaboracion", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Fecha de elaboración")))])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 mb-2"
  }, [_c("label", {}, [_vm._v("Detectado por")]), _vm._v(" "), _c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    attrs: {
      label: "nombre",
      options: _vm.list_empleados,
      "data-vv-name": "Detectado por"
    },
    model: {
      value: _vm.salidanc.empleado_detecta,
      callback: function callback($$v) {
        _vm.$set(_vm.salidanc, "empleado_detecta", $$v);
      },
      expression: "salidanc.empleado_detecta"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Detectado por")))])], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 mb-2"
  }, [_c("label", {}, [_vm._v("Área")]), _vm._v(" "), _c("v-select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    attrs: {
      label: "nombre",
      options: _vm.list_departamentos_salidas,
      "data-vv-name": "Área"
    },
    model: {
      value: _vm.salidanc.area,
      callback: function callback($$v) {
        _vm.$set(_vm.salidanc, "area", $$v);
      },
      expression: "salidanc.area"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Área")))])], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 mb-2"
  }, [_c("label", {}, [_vm._v("Fecha de detección")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.salidanc.fecha_deteccion,
      expression: "salidanc.fecha_deteccion"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date",
      "data-vv-name": "Fecha de detección"
    },
    domProps: {
      value: _vm.salidanc.fecha_deteccion
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.salidanc, "fecha_deteccion", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Fecha de detección")))])]), _vm._v(" "), _vm.salidanc.id ? _c("div", {
    staticClass: "col-md-6 mb-2"
  }, [_c("label", {}, [_vm._v("Número de reporte")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.salidanc.folio,
      expression: "salidanc.folio"
    }],
    staticClass: "form-control disabled",
    attrs: {
      type: "text",
      maxlength: "1",
      minlength: "",
      readonly: "",
      disabled: "",
      "data-vv-name": "Número de reporte",
      autocomplete: "off"
    },
    domProps: {
      value: _vm.salidanc.folio
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.salidanc, "folio", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Número de reporte")))])]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "accordion mt-4",
    attrs: {
      id: "accordionSalida"
    }
  }, [_c("div", {
    staticClass: "card"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "collapse show",
    attrs: {
      id: "collapseIdentificacion",
      "aria-labelledby": "headingIdentificacion",
      "data-parent": "#accordionSalida"
    }
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("p", [_vm._v("Descripción de la Salida No Conforme Detectada")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-12"
  }, [_c("textarea", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.salidanc.descripcion,
      expression: "salidanc.descripcion"
    }],
    staticClass: "form-control",
    attrs: {
      rows: "8",
      "data-vv-name": "Descripción",
      autocomplete: "off"
    },
    domProps: {
      value: _vm.salidanc.descripcion
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.salidanc, "descripcion", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Proyecto /Servicio")]), _vm._v(" "), _c("div", {
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
      "data-vv-name": "Proyecto /Servicio"
    },
    model: {
      value: _vm.salidanc.proyecto,
      callback: function callback($$v) {
        _vm.$set(_vm.salidanc, "proyecto", $$v);
      },
      expression: "salidanc.proyecto"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Proyecto /Servicio")))])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Nombre del cliente, proveedor o proceso")]), _vm._v(" "), _c("div", {
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
      value: _vm.salidanc.cliente_proveedor,
      expression: "salidanc.cliente_proveedor"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      "data-vv-name": "Nombre del cliente, proveedor o proceso"
    },
    domProps: {
      value: _vm.salidanc.cliente_proveedor
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.salidanc, "cliente_proveedor", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Nombre del cliente, proveedor o proceso")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Número de comunicado")]), _vm._v(" "), _c("div", {
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
      value: _vm.salidanc.no_comunicado,
      expression: "salidanc.no_comunicado"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      maxlength: "50",
      minlength: "1",
      "data-vv-name": "Número de comunicado",
      autocomplete: "off"
    },
    domProps: {
      value: _vm.salidanc.no_comunicado
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.salidanc, "no_comunicado", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Número de comunicado")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Orden de Compra")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.salidanc.no_oc,
      expression: "salidanc.no_oc"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      "data-vv-name": "Número de OC",
      autocomplete: "off"
    },
    domProps: {
      value: _vm.salidanc.no_oc
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.salidanc, "no_oc", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Número de OC")))])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "card"
  }, [_vm._m(1), _vm._v(" "), _c("div", {
    staticClass: "collapse",
    attrs: {
      id: "collapseTratamiento",
      "aria-labelledby": "headingTratamiento",
      "data-parent": "#accordionSalida"
    }
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "form-check form-check-inline"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.salidanc.tratamiento,
      expression: "salidanc.tratamiento"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "radio",
      name: "rdntratamiento",
      id: "rdntratamiento1",
      value: "1"
    },
    domProps: {
      checked: _vm._q(_vm.salidanc.tratamiento, "1")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.salidanc, "tratamiento", "1");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-input-label",
    attrs: {
      "for": "rdntratamiento1"
    }
  }, [_vm._v("Corrección")])]), _vm._v(" "), _c("div", {
    staticClass: "form-check form-check-inline"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.salidanc.tratamiento,
      expression: "salidanc.tratamiento"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "radio",
      name: "rdntratamiento",
      id: "rdntratamiento2",
      value: "2"
    },
    domProps: {
      checked: _vm._q(_vm.salidanc.tratamiento, "2")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.salidanc, "tratamiento", "2");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-input-label",
    attrs: {
      "for": "rdntratamiento2"
    }
  }, [_vm._v("Separación")])]), _vm._v(" "), _c("div", {
    staticClass: "form-check form-check-inline"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.salidanc.tratamiento,
      expression: "salidanc.tratamiento"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "radio",
      name: "rdntratamiento",
      id: "rdntratamiento3",
      value: "3"
    },
    domProps: {
      checked: _vm._q(_vm.salidanc.tratamiento, "3")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.salidanc, "tratamiento", "3");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-input-label",
    attrs: {
      "for": "rdntratamiento3"
    }
  }, [_vm._v("Contención")])]), _vm._v(" "), _c("div", {
    staticClass: "form-check form-check-inline"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.salidanc.tratamiento,
      expression: "salidanc.tratamiento"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "radio",
      name: "rdntratamiento",
      id: "rdntratamiento4",
      value: "4"
    },
    domProps: {
      checked: _vm._q(_vm.salidanc.tratamiento, "4")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.salidanc, "tratamiento", "4");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-input-label",
    attrs: {
      "for": "rdntratamiento4"
    }
  }, [_vm._v("Contención")])]), _vm._v(" "), _c("div", {
    staticClass: "form-check form-check-inline"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.salidanc.tratamiento,
      expression: "salidanc.tratamiento"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "radio",
      name: "rdntratamiento",
      id: "rdntratamiento5",
      value: "5"
    },
    domProps: {
      checked: _vm._q(_vm.salidanc.tratamiento, "5")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.salidanc, "tratamiento", "5");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-input-label",
    attrs: {
      "for": "rdntratamiento5"
    }
  }, [_vm._v("Devolución")])]), _vm._v(" "), _c("div", {
    staticClass: "form-check form-check-inline"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.salidanc.tratamiento,
      expression: "salidanc.tratamiento"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "radio",
      name: "rdntratamiento",
      id: "rdntratamiento6",
      value: "6"
    },
    domProps: {
      checked: _vm._q(_vm.salidanc.tratamiento, "6")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.salidanc, "tratamiento", "6");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-input-label",
    attrs: {
      "for": "rdntratamiento6"
    }
  }, [_vm._v("Suspensión")])]), _vm._v(" "), _c("div", {
    staticClass: "form-check form-check-inline"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.salidanc.tratamiento,
      expression: "salidanc.tratamiento"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "radio",
      name: "rdntratamiento",
      id: "rdntratamiento7",
      value: "7"
    },
    domProps: {
      checked: _vm._q(_vm.salidanc.tratamiento, "7")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.salidanc, "tratamiento", "7");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-input-label",
    attrs: {
      "for": "rdntratamiento7"
    }
  }, [_vm._v("Desecho")])]), _vm._v(" "), _c("div", {
    staticClass: "form-check form-check-inline"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.salidanc.tratamiento,
      expression: "salidanc.tratamiento"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "radio",
      name: "rdntratamiento",
      id: "rdntratamiento8",
      value: "8"
    },
    domProps: {
      checked: _vm._q(_vm.salidanc.tratamiento, "8")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.salidanc, "tratamiento", "8");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-input-label",
    attrs: {
      "for": "rdntratamiento8"
    }
  }, [_vm._v("Información al cliente")])]), _vm._v(" "), _c("div", {
    staticClass: "form-check form-check-inline"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.salidanc.tratamiento,
      expression: "salidanc.tratamiento"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "radio",
      name: "rdntratamiento",
      id: "rdntratamiento9",
      value: "9"
    },
    domProps: {
      checked: _vm._q(_vm.salidanc.tratamiento, "9")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.salidanc, "tratamiento", "9");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-input-label",
    attrs: {
      "for": "rdntratamiento9"
    }
  }, [_vm._v("Otro")])]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.salidanc.tratamiento == 9,
      expression: "salidanc.tratamiento==9"
    }],
    staticClass: "form-check form-check-inline"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.salidanc.tratamiento_otro,
      expression: "salidanc.tratamiento_otro"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Otro",
      "data-vv-name": "Tratamiento"
    },
    domProps: {
      value: _vm.salidanc.tratamiento_otro
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.salidanc, "tratamiento_otro", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("p", {
    staticClass: "h4 text-center"
  }, [_vm._v("Acciones")]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2 form-control-label"
  }, [_vm._v("Actividad")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-5"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.acciones.actividad,
      expression: "acciones.actividad"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      maxlength: "150"
    },
    domProps: {
      value: _vm.acciones.actividad
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.acciones, "actividad", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2 form-control-label"
  }, [_vm._v("Responsable")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-5"
  }, [_c("v-select", {
    attrs: {
      label: "nombre",
      options: _vm.list_empleados
    },
    model: {
      value: _vm.acciones.responsable,
      callback: function callback($$v) {
        _vm.$set(_vm.acciones, "responsable", $$v);
      },
      expression: "acciones.responsable"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2 form-control-label"
  }, [_vm._v("Fecha")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.acciones.fecha,
      expression: "acciones.fecha"
    }],
    staticClass: "form-control ml-2",
    attrs: {
      type: "date"
    },
    domProps: {
      value: _vm.acciones.fecha
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.acciones, "fecha", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-sm",
    on: {
      click: _vm.agregarActividadTemp
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  })])]), _vm._v(" "), _c("table", {
    staticClass: "table table-hover"
  }, [_vm._m(2), _vm._v(" "), _vm.list_acciones_temp.length != 0 ? [_c("tbody", _vm._l(_vm.list_acciones_temp, function (a, i) {
    return _c("tr", {
      key: i
    }, [_c("td", [_vm._v(_vm._s(i + 1))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(a.actividad))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(a.responsable.nombre))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(a.fecha))]), _vm._v(" "), _c("td", [_c("button", {
      staticClass: "btn btn-sm",
      on: {
        click: function click($event) {
          return _vm.eliminarAccionTemp(i);
        }
      }
    }, [_c("i", {
      staticClass: "fas fa-trash"
    })])])]);
  }), 0)] : _vm._e()], 2), _vm._v(" "), _vm.list_acciones_temp.length == 0 ? [_c("p", {
    staticClass: "text-center h5"
  }, [_vm._v("Sin actividades")])] : _vm._e()], 2)])]), _vm._v(" "), _c("div", {
    staticClass: "card"
  }, [_vm._m(3), _vm._v(" "), _c("div", {
    staticClass: "collapse",
    attrs: {
      id: "collapseVerificacion",
      "aria-labelledby": "headingVerificacion",
      "data-parent": "#accordionSalida"
    }
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Resultado de las actividades")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-9"
  }, [_c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.salidanc.resultado,
      expression: "salidanc.resultado"
    }],
    staticClass: "form-control",
    attrs: {
      rows: "6",
      "data-vv-name": "Resultado de las actividades",
      autocomplete: "off"
    },
    domProps: {
      value: _vm.salidanc.resultado
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.salidanc, "resultado", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Resultado de las actividades")))])])])]), _vm._v(" "), _c("div", {
    staticClass: "container form-row"
  }, [_c("div", {
    staticClass: "col-md-6 mb-2"
  }, [_c("label", {}, [_vm._v("Nombre de quien verifica")]), _vm._v(" "), _c("v-select", {
    attrs: {
      label: "nombre",
      options: _vm.list_empleados,
      "data-vv-name": "Nombre y firma de quien verifica"
    },
    model: {
      value: _vm.salidanc.empleado_verifica,
      callback: function callback($$v) {
        _vm.$set(_vm.salidanc, "empleado_verifica", $$v);
      },
      expression: "salidanc.empleado_verifica"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Nombre y firma de quien verifica")))])], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-4 mb-2"
  }, [_c("label", {}, [_vm._v("Fecha de verificación")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.salidanc.fecha_verificacion,
      expression: "salidanc.fecha_verificacion"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date",
      "data-vv-name": "Fecha de verificación"
    },
    domProps: {
      value: _vm.salidanc.fecha_verificacion
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.salidanc, "fecha_verificacion", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Fecha de verificación")))])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 mb-2"
  }, [_c("label", {}, [_vm._v("¿Se requiere una Acción Correctiva?")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.salidanc.require_correccion,
      expression: "salidanc.require_correccion"
    }],
    staticClass: "form-control",
    attrs: {
      "data-vv-name": "¿La Salida No Conforme requiere una Acción Correctiva?"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.salidanc, "require_correccion", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("Sí")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "0"
    }
  }, [_vm._v("No")])]), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("¿La Salida No Conforme requiere una Acción Correctiva?")))])]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.salidanc.require_correccion == 1,
      expression: "salidanc.require_correccion==1"
    }],
    staticClass: "col-md-6 mb-2"
  }, [_c("label", {}, [_vm._v("Número de acción correctiva correspondiente")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.salidanc.no_accion_correctiva,
      expression: "salidanc.no_accion_correctiva"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      "data-vv-name": "Número de acción correctiva correspondiente"
    },
    domProps: {
      value: _vm.salidanc.no_accion_correctiva
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.salidanc, "no_accion_correctiva", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Número de acción correctiva correspondiente")))])])]), _vm._v(" "), _c("div", {
    staticClass: "text-right mx-2 my-2"
  }, [_vm.tipoAccion_salidanc == 1 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.RegistrarSalidaNC(true);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Guardar\n                            ")]) : _vm._e(), _vm._v(" "), _vm.tipoAccion_salidanc == 2 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.RegistrarSalidaNC(false);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Actualizar\n                            ")]) : _vm._e()])])])])], 1)])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header",
    attrs: {
      id: "headingIdentificacion"
    }
  }, [_c("h2", {
    staticClass: "mb-0"
  }, [_c("button", {
    staticClass: "btn btn-link btn-block text-left",
    attrs: {
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#collapseIdentificacion",
      "aria-expanded": "true",
      "aria-controls": "collapseIdentificacion"
    }
  }, [_vm._v("\n                                1. IDENTIFICACIÓN\n                            ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header",
    attrs: {
      id: "headingTratamiento"
    }
  }, [_c("h2", {
    staticClass: "mb-0"
  }, [_c("button", {
    staticClass: "btn btn-link btn-block text-left collapsed",
    attrs: {
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#collapseTratamiento",
      "aria-expanded": "false",
      "aria-controls": "collapseTratamiento"
    }
  }, [_vm._v("\n                                2. TRATAMIENTO\n                            ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    attrs: {
      scope: "col"
    }
  }, [_vm._v("#")]), _vm._v(" "), _c("th", {
    attrs: {
      scope: "col"
    }
  }, [_vm._v("Actividad")]), _vm._v(" "), _c("th", {
    attrs: {
      scope: "col"
    }
  }, [_vm._v("Responsable")]), _vm._v(" "), _c("th", {
    attrs: {
      scope: "col"
    }
  }, [_vm._v("Fecha")]), _vm._v(" "), _c("th", {
    attrs: {
      scope: "col"
    }
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header",
    attrs: {
      id: "headingVerificacion"
    }
  }, [_c("h2", {
    staticClass: "mb-0"
  }, [_c("button", {
    staticClass: "btn btn-link btn-block text-left collapsed",
    attrs: {
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#collapseVerificacion",
      "aria-expanded": "false",
      "aria-controls": "collapseVerificacion"
    }
  }, [_vm._v("\n                                3. VERIFICACIÓN\n                            ")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Salidas/NoConformes.vue?vue&type=style&index=0&id=21ebb608&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Salidas/NoConformes.vue?vue&type=style&index=0&id=21ebb608&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.form-check-input-label[data-v-21ebb608] {\n    margin-left: 0;\n    margin-right: 1.5rem;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Salidas/NoConformes.vue?vue&type=style&index=0&id=21ebb608&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Salidas/NoConformes.vue?vue&type=style&index=0&id=21ebb608&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NoConformes_vue_vue_type_style_index_0_id_21ebb608_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NoConformes.vue?vue&type=style&index=0&id=21ebb608&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Salidas/NoConformes.vue?vue&type=style&index=0&id=21ebb608&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NoConformes_vue_vue_type_style_index_0_id_21ebb608_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NoConformes_vue_vue_type_style_index_0_id_21ebb608_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/assets/js/components/Salidas/NoConformes.vue":
/*!****************************************************************!*\
  !*** ./resources/assets/js/components/Salidas/NoConformes.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NoConformes_vue_vue_type_template_id_21ebb608_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NoConformes.vue?vue&type=template&id=21ebb608&scoped=true */ "./resources/assets/js/components/Salidas/NoConformes.vue?vue&type=template&id=21ebb608&scoped=true");
/* harmony import */ var _NoConformes_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NoConformes.vue?vue&type=script&lang=js */ "./resources/assets/js/components/Salidas/NoConformes.vue?vue&type=script&lang=js");
/* harmony import */ var _NoConformes_vue_vue_type_style_index_0_id_21ebb608_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NoConformes.vue?vue&type=style&index=0&id=21ebb608&scoped=true&lang=css */ "./resources/assets/js/components/Salidas/NoConformes.vue?vue&type=style&index=0&id=21ebb608&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _NoConformes_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _NoConformes_vue_vue_type_template_id_21ebb608_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _NoConformes_vue_vue_type_template_id_21ebb608_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "21ebb608",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/Salidas/NoConformes.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Salidas/NoConformes.vue?vue&type=script&lang=js":
/*!****************************************************************************************!*\
  !*** ./resources/assets/js/components/Salidas/NoConformes.vue?vue&type=script&lang=js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NoConformes_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NoConformes.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Salidas/NoConformes.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NoConformes_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Salidas/NoConformes.vue?vue&type=style&index=0&id=21ebb608&scoped=true&lang=css":
/*!************************************************************************************************************************!*\
  !*** ./resources/assets/js/components/Salidas/NoConformes.vue?vue&type=style&index=0&id=21ebb608&scoped=true&lang=css ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NoConformes_vue_vue_type_style_index_0_id_21ebb608_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NoConformes.vue?vue&type=style&index=0&id=21ebb608&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Salidas/NoConformes.vue?vue&type=style&index=0&id=21ebb608&scoped=true&lang=css");


/***/ }),

/***/ "./resources/assets/js/components/Salidas/NoConformes.vue?vue&type=template&id=21ebb608&scoped=true":
/*!**********************************************************************************************************!*\
  !*** ./resources/assets/js/components/Salidas/NoConformes.vue?vue&type=template&id=21ebb608&scoped=true ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NoConformes_vue_vue_type_template_id_21ebb608_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NoConformes_vue_vue_type_template_id_21ebb608_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NoConformes_vue_vue_type_template_id_21ebb608_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NoConformes.vue?vue&type=template&id=21ebb608&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Salidas/NoConformes.vue?vue&type=template&id=21ebb608&scoped=true");


/***/ })

}]);