(self["webpackChunk"] = self["webpackChunk"] || []).push([["venta"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Ventas/Clientes/Clientes.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Ventas/Clientes/Clientes.vue?vue&type=script&lang=js ***!
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
      detallecontacto: false,
      PermisosCRUD: {},
      tituloModal: '',
      isClientesLoading: false,
      modal: 0,
      columns: ['id', 'nombre', 'rfc', 'contacto', 'telefono', 'nombre_empleado', "regimen_fiscal"],
      listClientes: [],
      tipoAccion: 0,
      optionsvs: [],
      isLoading: false,
      listaEmpleados: [],
      listaContacto: [],
      clientes: {
        id: 0,
        nombre: '',
        rfc: '',
        domicilio_fiscal: '',
        domicilio_alterno: 'NA',
        contacto: '',
        telefono: '',
        ejecutivo_asignado_id: '',
        calle: '',
        numero_interior: '',
        numero_exterior: '',
        codigo_postal: '',
        colonia: '',
        municipio: '',
        regimen_fiscal: "",
        entidad_federativa: ''
      },
      options: {
        headings: {
          id: 'Acciones',
          rfc: 'RFC',
          domicilio_fiscal: 'Domicilio fiscal',
          domicilio_alterno: 'Domicilio alterno',
          nombre_empleado: 'Ejecutivo Asignado',
          telefono: 'Teléfono',
          cn: 'Contacto'
        },
        perPage: 10,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        filterByColumn: true,
        texts: config.texts
      },
      list_regimen: []
    };
  },
  components: {},
  methods: {
    getData: function getData() {
      this.PermisosCRUD = _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].getCRUD(this.$route.path);
      this.ObtenerClientes();
    },
    /**
     * Obtiene los clientes registrados en la DB
     */
    ObtenerClientes: function ObtenerClientes() {
      var _this = this;
      this.isClientesLoading = true;
      axios.get('/clientes').then(function (res) {
        _this.isClientesLoading = false;
        if (res.data.status) {
          _this.listClientes = res.data.clientes;
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    },
    /**
     * Obtener los empleados registrados para ejecutivo asignado
     */
    ObtenerEmpleados: function ObtenerEmpleados() {
      var _this2 = this;
      axios.get('generales/empleadoactivos').then(function (res) {
        if (res.data.status) _this2.listaEmpleados = res.data.empleados;else toastr.error(res.data.mensaje);
      })["catch"](function (error) {
        console.log(error);
      });
    },
    /**
     * Mostrar modal de registro/actualización
     */
    abrirModal: function abrirModal() {
      var nuevo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.ObtenerEmpleados();
      this.ObtenerRegimen();
      this.modal = 1;
      if (nuevo) {
        this.tituloModal = 'Registrar Cliente';
        this.tipoAccion = 1;
        this.clientes.domicilio_alterno = "N/D";
      } else {
        this.tituloModal = 'Actualizar Cliente';
        this.tipoAccion = 2;
        this.clientes.id = data['id'];
        this.clientes.nombre = data['nombre'];
        this.clientes.rfc = data['rfc'];
        this.clientes.domicilio_fiscal = data['domicilio_fiscal'];
        this.clientes.domicilio_alterno = data['domicilio_alterno'];
        this.clientes.contacto = data['contacto'];
        this.clientes.telefono = data['telefono'];
        this.clientes.calle = data['calle'];
        this.clientes.numero_interior = data['numero_interior'];
        this.clientes.numero_exterior = data['numero_exterior'];
        this.clientes.codigo_postal = data['codigo_postal'];
        this.clientes.colonia = data['colonia'];
        this.clientes.municipio = data['municipio'];
        this.clientes.entidad_federativa = data['entidad_federativa'];
        this.clientes.ejecutivo_asignado_id = data['ejecutivo_asignado_id'];
        this.clientes.regimen_fiscal = data['regimen_fiscal'];
      }
    },
    cerrarModal: function cerrarModal() {
      this.modal = 0;
      _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.clientes);
    },
    /**
     * Registra o actualiza un cliente
     */
    guardar: function guardar(nuevo) {
      var _this3 = this;
      this.$validator.validate().then(function (result) {
        if (result) {
          _this3.isLoading = true;
          var aux_alterno = _this3.clientes.domicilio_alterno;
          if (aux_alterno == "") aux_alterno = "NA";
          axios({
            method: nuevo ? 'POST' : 'PUT',
            url: nuevo ? '/clientes' : '/clientes/' + _this3.clientes.id,
            data: {
              'nombre': _this3.clientes.nombre.toUpperCase(),
              'rfc': _this3.clientes.rfc.toUpperCase(),
              'domicilio_alterno': aux_alterno.toUpperCase(),
              'contacto': _this3.clientes.contacto,
              'regimen_fiscal': _this3.clientes.regimen_fiscal,
              'telefono': _this3.clientes.telefono,
              // 'ejecutivo_asignado_id': this.clientes.ejecutivo_asignado_id,
              'calle': _this3.clientes.calle,
              'numero_interior': _this3.clientes.numero_interior,
              'numero_exterior': _this3.clientes.numero_exterior,
              'codigo_postal': _this3.clientes.codigo_postal,
              'colonia': _this3.clientes.colonia,
              'municipio': _this3.clientes.municipio,
              'entidad_federativa': _this3.clientes.entidad_federativa
            }
          }).then(function (res) {
            _this3.isLoading = false;
            if (res.data.status) {
              _this3.cerrarModal();
              _this3.ObtenerClientes();
              if (nuevo) toastr.success('Cliente Registrado Correctamente');else toastr.success('Cliente Actualizado Correctamente');
            } else {
              toastr.error(res.data.mensaje);
            }
          })["catch"](function (error) {
            console.log(error);
          });
        }
      });
    },
    maestro: function maestro() {
      this.detallecontacto = false;
    },
    ObtenerRegimen: function ObtenerRegimen() {
      var _this4 = this;
      this.isObtener_loading = true;
      axios.get("ventas/catalogos/regimenfiscal").then(function (res) {
        if (res.data.status) {
          _this4.list_regimen = res.data.list_regimen;
        } else {
          toastr.error(res.data.mensaje);
        }
      });
    }
  },
  mounted: function mounted() {
    this.getData();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Ventas/Clientes/Clientes.vue?vue&type=template&id=805046c4":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Ventas/Clientes/Clientes.vue?vue&type=template&id=805046c4 ***!
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
  }, [_c("br"), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.detallecontacto,
      expression: "!detallecontacto"
    }],
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("i", {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" Clientes\n                "), _c("button", {
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
        return _vm.abrirModal();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  }), _vm._v(" Nuevo\n                ")])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isClientesLoading
    }
  }), _vm._v(" "), _c("v-client-table", {
    ref: "myTable",
    attrs: {
      columns: _vm.columns,
      data: _vm.listClientes,
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
        }), _vm._v(" Acciones\n                                ")]), _vm._v(" "), _c("div", {
          staticClass: "dropdown-menu",
          attrs: {
            "aria-labelledby": "btnGroupDrop1"
          }
        }, [_c("button", {
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
              return _vm.abrirModal(false, props.row);
            }
          }
        }, [_c("i", {
          staticClass: "icon-pencil"
        }), _vm._v("  Actualizar cliente.\n                                    ")])])])])];
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
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isLoading
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-6"
  }, [_c("label", [_vm._v(" Nombre")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.clientes.nombre,
      expression: "clientes.nombre"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      "data-vv-name": "nombre",
      placeholder: "Nombre"
    },
    domProps: {
      value: _vm.clientes.nombre
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.clientes, "nombre", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("nombre")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-6"
  }, [_c("label", [_vm._v(" RFC")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.clientes.rfc,
      expression: "clientes.rfc"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      "data-vv-name": "RFC",
      placeholder: "RFC"
    },
    domProps: {
      value: _vm.clientes.rfc
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.clientes, "rfc", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("RFC")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-6"
  }, [_c("label", [_vm._v("Calle ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.clientes.calle,
      expression: "clientes.calle"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      "data-vv-name": "Calle",
      placeholder: "Calle"
    },
    domProps: {
      value: _vm.clientes.calle
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.clientes, "calle", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Calle")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-3"
  }, [_c("label", [_vm._v(" No. Exterior ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.clientes.numero_exterior,
      expression: "clientes.numero_exterior"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      "data-vv-name": "No. exterior",
      placeholder: "No. exterior"
    },
    domProps: {
      value: _vm.clientes.numero_exterior
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.clientes, "numero_exterior", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("No. exterior")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-3"
  }, [_c("label", [_vm._v(" No. Interior ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.clientes.numero_interior,
      expression: "clientes.numero_interior"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      "data-vv-name": "No. interior",
      placeholder: "No. interior"
    },
    domProps: {
      value: _vm.clientes.numero_interior
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.clientes, "numero_interior", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("No. interior")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-6"
  }, [_c("label", [_vm._v("Régimen Fiscal")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.clientes.regimen_fiscal,
      expression: "clientes.regimen_fiscal"
    }],
    staticClass: "form-control",
    attrs: {
      "data-vv-name": "Régimen Fiscal"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.clientes, "regimen_fiscal", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, _vm._l(_vm.list_regimen, function (r, i) {
    return _c("option", {
      key: i,
      domProps: {
        value: r.clave
      }
    }, [_vm._v(_vm._s(r.clave) + " - " + _vm._s(r.nombre))]);
  }), 0), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Régimen Fiscal")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-3"
  }, [_c("label", [_vm._v("Código Postal ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.clientes.codigo_postal,
      expression: "clientes.codigo_postal"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      "data-vv-name": "Código postal",
      placeholder: "Código postal"
    },
    domProps: {
      value: _vm.clientes.codigo_postal
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.clientes, "codigo_postal", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Código postal")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-6"
  }, [_c("label", [_vm._v("Colonia ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.clientes.colonia,
      expression: "clientes.colonia"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      "data-vv-name": "Colonia",
      placeholder: "Colonia"
    },
    domProps: {
      value: _vm.clientes.colonia
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.clientes, "colonia", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Colonia")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v("Municipio ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.clientes.municipio,
      expression: "clientes.municipio"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      "data-vv-name": "Municipio",
      placeholder: "Municipio"
    },
    domProps: {
      value: _vm.clientes.municipio
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.clientes, "municipio", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Municipio")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v(" Entidad federativa ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.clientes.entidad_federativa,
      expression: "clientes.entidad_federativa"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      "data-vv-name": "Entidad federativa",
      placeholder: "Entidad federativa"
    },
    domProps: {
      value: _vm.clientes.entidad_federativa
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.clientes, "entidad_federativa", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Entidad federativa")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v(" Domicilio alterno")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.clientes.domicilio_alterno,
      expression: "clientes.domicilio_alterno"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      "data-vv-name": "Domicilio Alterno",
      placeholder: "Domicilio Alterno"
    },
    domProps: {
      value: _vm.clientes.domicilio_alterno
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.clientes, "domicilio_alterno", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Domicilio Alterno")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-6"
  }, [_c("label", {
    attrs: {
      "for": "inputCity"
    }
  }, [_vm._v("Contacto")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.clientes.contacto,
      expression: "clientes.contacto"
    }],
    staticClass: "form-control",
    attrs: {
      id: "contacto",
      "data-vv-name": "contacto",
      name: "contacto"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.clientes, "contacto", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, _vm._l(_vm.listaContacto, function (item) {
    return _c("option", {
      key: item.id,
      domProps: {
        value: item.nombre_contacto
      }
    }, [_vm._v(_vm._s(item.nombre_contacto))]);
  }), 0)]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-6"
  }, [_c("label", [_vm._v(" Teléfono")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.clientes.telefono,
      expression: "clientes.telefono"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      "data-vv-name": "Telefono",
      placeholder: "Teléfono"
    },
    domProps: {
      value: _vm.clientes.telefono
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.clientes, "telefono", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Telefono")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-6"
  }, [_c("label", {
    attrs: {
      "for": "inputCity"
    }
  }, [_vm._v("Ejecutivo asignado")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.clientes.ejecutivo_asignado_id,
      expression: "clientes.ejecutivo_asignado_id"
    }],
    staticClass: "form-control",
    attrs: {
      id: "empleado_id",
      "data-vv-name": "ejecutivo asignado",
      name: "empleado_id"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.clientes, "ejecutivo_asignado_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, _vm._l(_vm.listaEmpleados, function (item) {
    return _c("option", {
      key: item.id,
      domProps: {
        value: item.id
      }
    }, [_vm._v(_vm._s(item.nombre))]);
  }), 0)])])])], 1), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isLoading
    }
  }), _vm._v(" "), _c("div", [_c("button", {
    staticClass: "btn btn-outline-dark",
    on: {
      click: function click($event) {
        return _vm.cerrarModal();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-times"
  }), _vm._v(" Cerrar")]), _vm._v(" "), _vm.tipoAccion == 1 ? _c("button", {
    staticClass: "btn btn-secondary",
    on: {
      click: function click($event) {
        return _vm.guardar(1);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Guardar")]) : _vm._e(), _vm._v(" "), _vm.tipoAccion == 2 ? _c("button", {
    staticClass: "btn btn-secondary",
    on: {
      click: function click($event) {
        return _vm.guardar(0);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Actualizar")]) : _vm._e()])], 1)])])])])]);
};
var staticRenderFns = [];
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

/***/ "./resources/assets/js/components/Ventas/Clientes/Clientes.vue":
/*!*********************************************************************!*\
  !*** ./resources/assets/js/components/Ventas/Clientes/Clientes.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Clientes_vue_vue_type_template_id_805046c4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Clientes.vue?vue&type=template&id=805046c4 */ "./resources/assets/js/components/Ventas/Clientes/Clientes.vue?vue&type=template&id=805046c4");
/* harmony import */ var _Clientes_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Clientes.vue?vue&type=script&lang=js */ "./resources/assets/js/components/Ventas/Clientes/Clientes.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Clientes_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Clientes_vue_vue_type_template_id_805046c4__WEBPACK_IMPORTED_MODULE_0__.render,
  _Clientes_vue_vue_type_template_id_805046c4__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/Ventas/Clientes/Clientes.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Ventas/Clientes/Clientes.vue?vue&type=script&lang=js":
/*!*********************************************************************************************!*\
  !*** ./resources/assets/js/components/Ventas/Clientes/Clientes.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Clientes_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Clientes.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Ventas/Clientes/Clientes.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Clientes_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Ventas/Clientes/Clientes.vue?vue&type=template&id=805046c4":
/*!***************************************************************************************************!*\
  !*** ./resources/assets/js/components/Ventas/Clientes/Clientes.vue?vue&type=template&id=805046c4 ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Clientes_vue_vue_type_template_id_805046c4__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Clientes_vue_vue_type_template_id_805046c4__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Clientes_vue_vue_type_template_id_805046c4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Clientes.vue?vue&type=template&id=805046c4 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Ventas/Clientes/Clientes.vue?vue&type=template&id=805046c4");


/***/ })

}]);