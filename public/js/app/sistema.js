(self["webpackChunk"] = self["webpackChunk"] || []).push([["sistema"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Sistema/ElementosMenu.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Sistema/ElementosMenu.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************/
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
      modalMenu: 0,
      tituloModalMenu: '',
      tipoAccionMenu: 0,
      modalSubmenu: 0,
      tituloModalSubmenu: '',
      tipoAccionSubmenu: 0,
      listaMenus: [],
      menu: {
        id: 0,
        clase: '',
        name: '',
        page: '',
        modulo_id: 0
      },
      submenu: {
        id: 0,
        clase: '',
        name: '',
        submenu: '',
        page: '',
        elementos_menu_id: 0
      },
      modulo: 0,
      listaModulos: [],
      isLoading: false,
      isLoadingMenu: false,
      isLoadingSubmenu: false,
      columns: ['id', 'clase', 'name', 'submenu', 'page'],
      tableData: [],
      options: {
        headings: {
          id: 'Acciones',
          clase: 'Clase',
          name: 'Menu',
          submenu: 'Submenu',
          page: 'Página'
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
      var me = this;
      this.isLoading = true;
      axios.get('/ModulosSistema').then(function (response) {
        me.listaModulos = response.data;
        me.isLoading = false;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    buscar: function buscar() {
      var me = this;
      this.isLoading = true;
      axios.get('/elementospormodulo/' + this.modulo).then(function (response) {
        me.tableData = response.data;
        me.isLoading = false;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    eliminar: function eliminar(data) {
      var _this = this;
      swal({
        title: data.es_menu ? '¿Esta seguro de eliminar el Menu ?' : '¿Esta seguro de eliminar el Submenu?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#4dbd74',
        cancelButtonColor: '#f86c6b',
        confirmButtonText: 'Aceptar!',
        cancelButtonText: 'Cancelar',
        reverseButtons: true
      }).then(function (result) {
        if (result.value) {
          var me = _this;
          me.isLoading = true;
          axios.put(data.es_menu ? '/eliminarmenu' : '/eliminarsubmenu', {
            'id': data.id
          }).then(function (response) {
            me.isLoading = false;
            me.buscar();
            if (data.es_menu) {
              toastr.success('Menu eliminado correctamente');
            } else {
              toastr.success('SubMenu eliminado correctamente');
            }
          })["catch"](function (error) {
            console.log(error);
          });
        }
      });
    },
    cerrarModalMenu: function cerrarModalMenu() {
      this.modalMenu = 0;
      this.tituloModalMenu = '';
      _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.menu);
    },
    cerrarModalSubmenu: function cerrarModalSubmenu() {
      this.modalSubmenu = 0;
      this.tituloModalSubmenu = '';
      _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.submenu);
    },
    abrirModal: function abrirModal(modelo, accion) {
      var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      switch (modelo) {
        case "menu":
          {
            switch (accion) {
              case 'registrar':
                {
                  this.modalMenu = 1;
                  this.tituloModalMenu = 'Registrar menu';
                  _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.menu);
                  this.tipoAccionMenu = 1;
                  break;
                }
              case 'actualizar':
                {
                  this.modalMenu = 1;
                  this.tituloModalMenu = 'Actualizar menu';
                  this.tipoAccionMenu = 2;
                  this.menu.id = data['id'];
                  this.menu.clase = data['clase'];
                  this.menu.name = data['name'];
                  this.menu.page = data['page'];
                  this.menu.modulo_id = data['modulo_id'];
                  break;
                }
            }
          }
          break;
        case "submenu":
          {
            switch (accion) {
              case 'registrar':
                {
                  var me = this;
                  this.modalSubmenu = 1;
                  this.isLoadingSubmenu = true;
                  axios.get('/elementosmenupormodulo/' + this.modulo).then(function (response) {
                    me.listaMenus = response.data;
                    me.isLoadingSubmenu = false;
                    me.tituloModalSubmenu = 'Registrar submenu';
                    _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(me.submenu);
                    me.tipoAccionSubmenu = 1;
                  })["catch"](function (error) {
                    console.log(error);
                  });
                  break;
                }
              case 'actualizar':
                {
                  var _me = this;
                  this.modalSubmenu = 1;
                  this.isLoadingSubmenu = true;
                  axios.get('/elementosmenupormodulo/' + this.modulo).then(function (response) {
                    _me.listaMenus = response.data;
                    _me.isLoadingSubmenu = false;
                    _me.tituloModalSubmenu = 'Actualizar submenu';
                    _me.tipoAccionSubmenu = 2;
                    _me.submenu.id = data['id'];
                    _me.submenu.clase = data['clase'];
                    _me.submenu.name = data['name'];
                    _me.submenu.page = data['page'];
                    _me.submenu.submenu = data['submenu'];
                    _me.submenu.elementos_menu_id = data['elementos_menu_id'];
                  })["catch"](function (error) {
                    console.log(error);
                  });
                  break;
                }
            }
          }
          break;
      }
    },
    guardarMenu: function guardarMenu(nuevo) {
      var _this2 = this;
      this.$validator.validateAll('form-menu').then(function (result) {
        if (result) {
          _this2.isLoadingMenu = true;
          var me = _this2;
          axios({
            method: nuevo ? 'POST' : 'PUT',
            url: nuevo ? '/agregarmenu' : '/actualizarmenu',
            data: {
              'clase': _this2.menu.clase,
              'page': _this2.menu.page,
              'name': _this2.menu.name,
              'id': _this2.menu.id,
              'modulo_id': _this2.modulo
            }
          }).then(function (response) {
            me.isLoadingMenu = false;
            if (response.data.status) {
              me.cerrarModalMenu();
              me.buscar();
              if (!nuevo) {
                toastr.success('Menu Actualizado Correctamente');
              } else {
                toastr.success('Menu Registrado Correctamente');
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
    guardarSubmenu: function guardarSubmenu(nuevo) {
      var _this3 = this;
      this.$validator.validateAll('form-submenu').then(function (result) {
        if (result) {
          _this3.isLoadingSubmenu = true;
          var me = _this3;
          axios({
            method: nuevo ? 'POST' : 'PUT',
            url: nuevo ? '/agregarsubmenu' : '/actualizarsubmenu',
            data: {
              'clase': _this3.submenu.clase,
              'page': _this3.submenu.page,
              'name': $("#submenu_menu option:selected").text(),
              'submenu': _this3.submenu.submenu,
              'id': _this3.submenu.id,
              'elementos_menu_id': _this3.submenu.elementos_menu_id
            }
          }).then(function (response) {
            me.isLoadingSubmenu = false;
            if (response.data.status) {
              me.cerrarModalSubmenu();
              me.buscar();
              if (!nuevo) {
                toastr.success('Submenu Actualizado Correctamente');
              } else {
                toastr.success('Submenu Registrado Correctamente');
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
    Desactivar: function Desactivar(data) {
      var _this4 = this;
      axios.put("sistema/desactivarmenu", {
        'id': data.id,
        "t": data.es_menu ? 1 : 2
      }).then(function (res) {
        _this4.isLoading = false;
        _this4.buscar();
      });
    }
  },
  mounted: function mounted() {
    this.getData();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Sistema/Errors.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Sistema/Errors.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
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
      fecha: '',
      isLoading: false,
      columns: ['f', 'o.user', 'o.mensaje', 'o.file', 'o.line'],
      tableData: [],
      options: {
        headings: {
          'f': 'Fecha',
          'o.user': 'Usuario',
          'o.mensaje': 'Mensaje',
          'o.file': 'Archivo',
          'o.line': 'Linea'
        },
        perPage: 10,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        sortable: ['f', 'o.user', 'o.mensaje', 'o.file', 'o.line'],
        filterable: ['f', 'o.user', 'o.mensaje', 'o.file', 'o.line'],
        filterByColumn: true,
        texts: config.texts
      }
    };
  },
  computed: {},
  methods: {
    getData: function getData() {
      var me = this;
      axios.get('/errors').then(function (response) {
        me.tableData = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    buscar: function buscar() {
      var _this = this;
      this.$validator.validate().then(function (result) {
        if (result) {
          _this.isLoading = true;
          var me = _this;
          axios.post('/errors', {
            'fecha': me.fecha
          }).then(function (response) {
            me.tableData = response.data;
            me.isLoading = false;
          })["catch"](function (error) {
            console.log(error);
          });
        }
      });
    }
  },
  mounted: function mounted() {
    this.$root.limpiarDashboard();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Sistema/PermisosCrud.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Sistema/PermisosCrud.vue?vue&type=script&lang=js ***!
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
      url: '/usuario',
      tipoPermisos: {
        usuario_id: 0,
        control_id: 0,
        ruta: 0,
        nombre: '',
        id: 0
      },
      tipoAccion: 0,
      isLoading: false,
      tableMenus: [],
      menus: [],
      modulo: [],
      listaModulos: [],
      listaRutas: [],
      user: 0,
      control: [],
      listaUsuarios: [],
      arreglos: []
    };
  },
  methods: {
    getData: function getData() {
      var me = this;
      axios.get(me.url).then(function (response) {
        me.listaUsuarios = response.data.usuarios;
      })["catch"](function (error) {
        console.log(error);
      });
      axios.get('/permisocrud').then(function (response) {
        me.arreglos = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
      axios.get('/ModulosSistema').then(function (response) {
        me.listaModulos = response.data;
        me.isLoading = false;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    //
    onChangePagina: function onChangePagina() {
      var me = this;
      axios.get('/elementospormodulos/' + this.modulo).then(function (response) {
        me.listaRutas = response.data;
        me.tipoPermisos.ruta = 0;
        me.control = [];
      })["catch"](function (error) {
        console.log(error);
      });
    },
    onChangeElementos: function onChangeElementos() {
      var me = this;
      me.tipoPermisos.ruta = 0;
      me.modulo = 0;
      me.control = [];
    },
    menusupdate: function menusupdate(nuevo) {
      var _this = this;
      this.$validator.validate().then(function (result) {
        //esta linea asigna la validacion de que se requiera usuario y modulo obligatorio
        if (result) {
          var me = _this;
          if (me.tipoPermisos.ruta != 0 && me.modulo != 0) {
            //asigna la validacion que toma el valor 0 de la lista y no asigna permisos
            axios({
              method: nuevo ? 'POST' : 'PUT',
              url: nuevo ? me.url : '/PermisosCrud/' + _this.tipoPermisos.id + '/actualizar',
              //recibe el id desde tipo de permisos que contiene al user y a su id y lo envia a la  ruta PermisosCrud/actualizar
              data: {
                'usuario_id': _this.user,
                //con this.user referenciamos al modelo que se creo en la parte de arriba, con 'usuario_id' referenciamos al campo en el controlador que recibe ese parametro
                'ruta': _this.tipoPermisos.ruta,
                'control': _this.control
              }
            }).then(function (response) {
              //
              if (response.data.status) {
                toastr.success(' Actualizada Correctamente');
                //resetea el valor de ese modelo a 0 por si se requiere que el complemento pase a un valor inicial
                // me.tipoPermisos.ruta=0;
                // me.control=[]; //este resetea el valor a 0 pero como se llena con un array se resetea este valor pasandole un []
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
        }
      });
      // console.log(this.user,this.control,this.tipoPermisos.ruta);
    },
    permisorec: function permisorec() {
      var _this2 = this;
      var controles = [];
      axios.post('/menusidempc', {
        //esta ruta muestra un json de los datos que se han llenado para la tabla de permisos_crud
        'usuario_id': this.user,
        //se le pasa el usuario id
        'ruta': this.tipoPermisos.ruta //tmb la ruta en formato strin
      }).then(function (response) {
        //response= objeto propiedad data, que es un array todos los array tienen un tañaño que da la prop lenght en push le insertas los valores de la posicion que se envia
        for (var i = 0; i < response.data.length; i++) {
          controles.push(response.data[i].control_id);
        }
        _this2.control = controles;
        console.log(response);
      })["catch"](function (error) {
        console.error(error);
      });
    },
    guardarTodos: function guardarTodos() {
      if (this.user == 0) {
        toastr.error('Seleccionar usuario.');
        return;
      }
      this.isLoading = true;
      var me = this;
      axios({
        method: 'POST',
        url: '/permisocrud/todos',
        data: {
          'usuario_id': this.user
        }
      }).then(function (response) {
        me.isLoading = false;
        if (response.data.status) {
          toastr.success('Se asignaron todos los permisos CRUD');
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
  },
  mounted: function mounted() {
    this.getData();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Sistema/PermisosUsuarios.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Sistema/PermisosUsuarios.vue?vue&type=script&lang=js ***!
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
      url: '/usuario',
      tipoPermisos: {
        id: 0,
        nombre: ''
      },
      modal: 0,
      tituloModal: '',
      tipoAccion: 0,
      isLoading: false,
      columns: ['id', 'name', "name_user"],
      list_usuarios: [],
      tableModulos: [],
      tableMenus: [],
      events: [],
      tableSubMenus: [],
      menus: [],
      submenus: [],
      options: {
        headings: {
          'name': 'Usuario',
          'id': 'Acciones',
          'name_user': 'Usuario'
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
     * Obtener todos los usuarios activos
     */
    GetUsers: function GetUsers() {
      var _this = this;
      axios.get("sistema/usuariosactivos").then(function (res) {
        _this.list_usuarios = res.data.usuarios;
      });
    },
    crear: function crear() {
      var me = this;
      axios.get('/PermisoUser/create').then(function (response) {
        me.tableModulos = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    editado: function editado() {
      var me = this;
      axios.get('/PermisoUser/edit').then(function (response) {
        me.tableSubMenus = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    tablamenu: function tablamenu() {
      var me = this;
      axios.get('/PermisoUser/0').then(function (response) {
        me.tableMenus = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    menusupdate: function menusupdate(id) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var nuevo = arguments.length > 2 ? arguments[2] : undefined;
      var me = this;
      axios({
        method: nuevo ? 'POST' : 'PUT',
        url: nuevo ? me.url : '/PermisoUser/' + id + '/actualizar',
        data: {
          'modulo': data.modulo_id,
          'id': id,
          'id_menu': data.id
        }
      }).then(function (response) {
        if (response.data.status) {
          toastr.success(' Actualizada Correctamente');
        } else {
          swal({
            type: 'error',
            html: response.data.errors.join('<br>')
          });
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    submenusupdate: function submenusupdate(id) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var nuevo = arguments.length > 2 ? arguments[2] : undefined;
      var me = this;
      axios({
        method: nuevo ? 'POST' : 'PUT',
        url: nuevo ? me.url : '/PermisoUser/' + id + '/actualizarsub',
        data: {
          'menu_id': data.elementos_menu_id,
          'id': id,
          'id_submenu': data.id
        }
      }).then(function (response) {
        if (response.data.status) {
          toastr.success(' Actualizada Correctamente');
        } else {
          swal({
            type: 'error',
            html: response.data.errors.join('<br>')
          });
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    cerrarModal: function cerrarModal() {
      this.modal = 0;
      this.tituloModal = '';
      _Herramientas_utilerias_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetObject(this.tipoPermisos);
    },
    abrirModal: function abrirModal() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      this.modal = 1;
      this.tituloModal = 'Actualizar Permisos';
      this.tipoAccion = 2;
      this.tipoPermisos.id = data['id'];
      var id = data['id'];
      this.tipoPermisos.nombre = data['name'];
      var cadena = [];
      var cadenauno = [];
      axios.get('/menusidemp/' + id).then(function (response) {
        for (var i = 0; i < response.data.length; i++) {
          cadena.push(response.data[i].elementos_menu_id);
          cadenauno.push(response.data[i].elementos_submenu_id);
        }
      });
      this.menus = cadena;
      this.submenus = cadenauno;
    }
  },
  mounted: function mounted() {
    this.GetUsers();
    this.crear();
    this.editado();
    this.tablamenu();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Sistema/Usuario.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Sistema/Usuario.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************/
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
var config = (__webpack_require__(/*! ../Herramientas/config-vuetables-client */ "./resources/assets/js/components/Herramientas/config-vuetables-client.js").call)(undefined);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      url: '/usuario',
      modal: 0,
      swal_titulo: '',
      swal_msg: '',
      swal_tle: '',
      empleado_id: 0,
      tipo_ubicacion_id: '',
      listaUbicaciones: [],
      listaEmpleados: [],
      id: 0,
      ver_id: false,
      name: '',
      name_user: '',
      password: '',
      ubicacion: '',
      email: '',
      tituloModal: '',
      tipoAccion: 0,
      error: 0,
      session_id: 0,
      isLoading: false,
      columns: ['id', 'name', 'name_user', 'email', "condicion"],
      tableData: [],
      options: {
        headings: {
          'id': 'Acciones',
          'name': 'Nombre',
          'name_user': 'Usuario',
          'email': 'Email',
          'condicion': 'Estado',
          'session_id': 'Conexión'
        },
        perPage: 10,
        perPageValues: [],
        skin: config.skin,
        sortIcon: config.sortIcon,
        filterByColumn: true,
        listColumns: {
          'usuario.condicion': [{
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
  methods: {
    /**
     * Obtener todos los empleados activos para asignación de usuario
     */
    ObtenerEmpleados: function ObtenerEmpleados() {
      var _this = this;
      axios.get('generales/empleadoactivos').then(function (res) {
        if (res.data.status) {
          _this.listaEmpleados = res.data.empleados;
        } else {
          toas.error(res.data.mensaje);
        }
      });
    },
    /**
     * Obtiene las ubicaciones
     */
    ObtenerUbicaciones: function ObtenerUbicaciones() {
      var _this2 = this;
      axios.get('/rh/catalogos/tipoubicacion').then(function (response) {
        _this2.listaUbicaciones = response.data.ubicaciones;
      });
    },
    /**
     * Obtener todos los usuarios registrados
     */
    GetUsers: function GetUsers() {
      var _this3 = this;
      this.isLoading = true;
      axios.get(this.url).then(function (res) {
        _this3.isLoading = false;
        _this3.tableData = res.data.usuarios;
      });
    },
    /**
     * Registrar o actualizar el usuario
     */
    GuardarUsuario: function GuardarUsuario() {
      var _arguments = arguments,
        _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var nuevo, isValid, data;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              nuevo = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : true;
              _context.n = 1;
              return _this4.$validator.validate();
            case 1:
              isValid = _context.v;
              if (isValid) {
                _context.n = 2;
                break;
              }
              return _context.a(2);
            case 2:
              _this4.isLoading = true;
              data = new FormData();
              if (!nuevo) data.append('id', _this4.id);
              data.append('name_user', _this4.name_user);
              data.append('name', _this4.empleado_id.nombre);
              data.append('password', _this4.password);
              data.append('email', _this4.email);
              data.append('tipo_ubicacion_id', _this4.tipo_ubicacion_id);
              data.append("empleado_id", _this4.empleado_id.id);
              axios.post(_this4.url, data).then(function (res) {
                _this4.isLoading = false;
                if (res.data.status) {
                  _this4.cerrarModal();
                  toastr.success('Usuario Registrado Correctamente');
                  _this4.GetUsers();
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
     * Desactivar el usuario
     */
    Desactivar: function Desactivar(id) {
      var _this5 = this;
      swal({
        title: "Desactivar este usuario",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-danger',
        buttonsStyling: false,
        reverseButtons: true
      }).then(function (result) {
        if (result.value) {
          axios.get(_this5.url + '/' + id + '/edit').then(function (res) {
            toastr.success("Desactivado correctamente");
            _this5.GetUsers();
          });
        }
      });
    },
    cerrarModal: function cerrarModal() {
      this.modal = 0;
      this.name = '';
      this.name_user = '';
      this.password = '';
      this.tipo_ubicacion_id = '';
      this.email = '';
      this.tipoAccion = 1;
      this.empleado_id = 0;
    },
    abrirModal: function abrirModal() {
      var nuevo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.ObtenerEmpleados();
      this.ObtenerUbicaciones();
      this.modal = 1;
      if (nuevo) {
        this.tituloModal = 'Registrar Usuario';
        this.tipoAccion = 1;
      } else {
        this.tituloModal = 'Actualizar Usuario ';
        this.id = data.id;
        this.name_user = data.name_user;
        this.email = data.email;
        this.tipo_ubicacion_id = data.tipo_ubicacion_id;
        this.empleado_id = {
          id: data.e_id,
          nombre: data.name
        };
        this.name = this.empleado_id.nombre;
        this.tipoAccion = 2;
      }
    },
    Ver: function Ver(id) {
      axios.post("sistema/permisos/cambiar", {
        user_id: id
      }).then(function (res) {});
    }
  },
  mounted: function mounted() {
    this.GetUsers();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Sistema/ElementosMenu.vue?vue&type=template&id=53679f6b":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Sistema/ElementosMenu.vue?vue&type=template&id=53679f6b ***!
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
  }), _vm._v(" Elementos Menu y Submenu\r\n                "), _c("button", {
    staticClass: "btn btn-dark float-sm-right",
    attrs: {
      type: "button",
      disabled: _vm.modulo == 0
    },
    on: {
      click: function click($event) {
        return _vm.abrirModal("submenu", "registrar");
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  }), _vm._v(" Submenu\r\n                ")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-dark float-sm-right",
    attrs: {
      type: "button",
      disabled: _vm.modulo == 0
    },
    on: {
      click: function click($event) {
        return _vm.abrirModal("menu", "registrar");
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  }), _vm._v(" Menu\r\n                ")])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isLoading
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "col-md-8 col-sm-8"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.modulo,
      expression: "modulo"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    attrs: {
      id: "modulo",
      name: "modulo",
      placeholder: "Modulo"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.modulo = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, _vm._l(_vm.listaModulos, function (item) {
    return _c("option", {
      key: item.id,
      domProps: {
        value: item.id
      }
    }, [_vm._v(_vm._s(item.nombre))]);
  }), 0)]), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("modulo")))])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 col-sm-2"
  }, [_c("button", {
    staticClass: "btn btn-dark",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.buscar();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-search"
  }), _vm._v("  Buscar")])])]), _vm._v(" "), _c("v-client-table", {
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
        }), _vm._v("  Acciones\r\n                                ")]), _vm._v(" "), _c("div", {
          staticClass: "dropdown-menu",
          attrs: {
            "aria-labelledby": "btnGroupDrop1"
          }
        }, [[_c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              _vm.abrirModal(props.row.es_menu ? "menu" : "submenu", "actualizar", props.row);
            }
          }
        }, [_c("i", {
          staticClass: "icon-pencil"
        }), _vm._v(" Actualizar\r\n                                        ")])], _vm._v(" "), [_c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.eliminar(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "icon-trash"
        }), _vm._v(" Eliminar\r\n                                        ")]), _vm._v(" "), _c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.Desactivar(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-ban"
        }), _vm._v(" Desactivar\r\n                                        ")])]], 2)])])];
      }
    }, {
      key: "clase",
      fn: function fn(props) {
        return [_c("i", {
          "class": props.row.clase
        })];
      }
    }])
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "modal fade",
    "class": {
      mostrar: _vm.modalMenu
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
      active: _vm.isLoadingMenu
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
      textContent: _vm._s(_vm.tituloModalMenu)
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "close",
    attrs: {
      type: "button",
      "aria-label": "Close"
    },
    on: {
      click: function click($event) {
        return _vm.cerrarModalMenu();
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
      enctype: "multipart/form-data",
      "data-vv-scope": "form-menu"
    }
  }, [_c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label",
    attrs: {
      "for": "menu_name"
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
      value: _vm.menu.name,
      expression: "menu.name"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "menu_name",
      placeholder: "Nombre",
      autocomplete: "off",
      id: "menu_name",
      "data-vv-as": "Nombre",
      maxlength: "50"
    },
    domProps: {
      value: _vm.menu.name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.menu, "name", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("form-menu.menu_name")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label",
    attrs: {
      "for": "menu_page"
    }
  }, [_vm._v("Página")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-9"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.menu.page,
      expression: "menu.page"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "menu_page",
      placeholder: "Página",
      autocomplete: "off",
      id: "menu_page",
      "data-vv-as": "Página",
      maxlength: "50"
    },
    domProps: {
      value: _vm.menu.page
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.menu, "page", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("form-menu.menu_page")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label",
    attrs: {
      "for": "menu_clase"
    }
  }, [_vm._v("Clase")]), _vm._v(" "), _c("div", {
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
      value: _vm.menu.clase,
      expression: "menu.clase"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "menu_clase",
      placeholder: "Clase",
      autocomplete: "off",
      id: "menu_clase",
      "data-vv-as": "Clase",
      maxlength: "50"
    },
    domProps: {
      value: _vm.menu.clase
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.menu, "clase", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("form-menu.menu_clase")))])])])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("button", {
    staticClass: "btn btn-outline-dark",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.cerrarModalMenu();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-times"
  }), _vm._v(" Cerrar")]), _vm._v(" "), _vm.tipoAccionMenu == 1 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.guardarMenu(1);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Guardar")]) : _vm._e(), _vm._v(" "), _vm.tipoAccionMenu == 2 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.guardarMenu(0);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Actualizar")]) : _vm._e()])])])])], 1), _vm._v(" "), _c("div", {
    staticClass: "modal fade",
    "class": {
      mostrar: _vm.modalSubmenu
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
      active: _vm.isLoadingSubmenu
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "modal-header"
  }, [_c("h4", {
    staticClass: "modal-title",
    domProps: {
      textContent: _vm._s(_vm.tituloModalSubmenu)
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "close",
    attrs: {
      type: "button",
      "aria-label": "Close"
    },
    on: {
      click: function click($event) {
        return _vm.cerrarModalSubmenu();
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
      enctype: "multipart/form-data",
      "data-vv-scope": "form-submenu"
    }
  }, [_c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label",
    attrs: {
      "for": "submenu_submenu"
    }
  }, [_vm._v("Submenu")]), _vm._v(" "), _c("div", {
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
      value: _vm.submenu.submenu,
      expression: "submenu.submenu"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "submenu_submenu",
      placeholder: "Nombre",
      autocomplete: "off",
      id: "submenu_submenu",
      "data-vv-as": "Submenu",
      maxlength: "100"
    },
    domProps: {
      value: _vm.submenu.submenu
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.submenu, "submenu", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("form-submenu.submenu_submenu")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label",
    attrs: {
      "for": "submenu_page"
    }
  }, [_vm._v("Página")]), _vm._v(" "), _c("div", {
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
      value: _vm.submenu.page,
      expression: "submenu.page"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "submenu_page",
      placeholder: "Página",
      autocomplete: "off",
      id: "submenu_page",
      "data-vv-as": "Página",
      maxlength: "100"
    },
    domProps: {
      value: _vm.submenu.page
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.submenu, "page", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("form-submenu.submenu_page")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label",
    attrs: {
      "for": "submenu_clase"
    }
  }, [_vm._v("Clase")]), _vm._v(" "), _c("div", {
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
      value: _vm.submenu.clase,
      expression: "submenu.clase"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "submenu_clase",
      placeholder: "Clase",
      autocomplete: "off",
      id: "submenu_clase",
      "data-vv-as": "Clase",
      maxlength: "100"
    },
    domProps: {
      value: _vm.submenu.clase
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.submenu, "clase", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("form-submenu.submenu_clase")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-3 form-control-label",
    attrs: {
      "for": "submenu_menu"
    }
  }, [_vm._v("Menu")]), _vm._v(" "), _c("div", {
    attrs: {
      clasS: "col-md-9"
    }
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.submenu.elementos_menu_id,
      expression: "submenu.elementos_menu_id"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "excluded:0",
      expression: "'excluded:0'"
    }],
    staticClass: "form-control",
    attrs: {
      id: "submenu_menu",
      name: "submenu_modulo_id",
      "data-vv-as": "Menu"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.submenu, "elementos_menu_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, _vm._l(_vm.listaMenus, function (item) {
    return _c("option", {
      key: item.id,
      domProps: {
        value: item.id
      }
    }, [_vm._v(_vm._s(item.name))]);
  }), 0), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("form-submenu.submenu_modulo_id")))])])])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("button", {
    staticClass: "btn btn-outline-dark",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.cerrarModalSubmenu();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-times"
  }), _vm._v(" Cerrar")]), _vm._v(" "), _vm.tipoAccionSubmenu == 1 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.guardarSubmenu(1);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Guardar")]) : _vm._e(), _vm._v(" "), _vm.tipoAccionSubmenu == 2 ? _c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.guardarSubmenu(0);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Actualizar")]) : _vm._e()])], 1)])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-md-2 col-sm-2"
  }, [_c("label", {
    attrs: {
      "for": "modulo"
    }
  }, [_vm._v("Modulo")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Sistema/Errors.vue?vue&type=template&id=748ebbe2":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Sistema/Errors.vue?vue&type=template&id=748ebbe2 ***!
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
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isLoading
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("div", {
    staticClass: "col-md-3 col-sm-3"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_c("input", {
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
      id: "fecha",
      name: "fecha",
      placeholder: "Fecha",
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
  }), _vm._v("\n                                 \n                            "), _c("span", {
    staticClass: "input-group-append"
  }, [_c("button", {
    staticClass: "btn btn-primary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.buscar();
      }
    }
  }, [_vm._v(" Buscar")])])]), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("fecha")))])])]), _vm._v(" "), _c("v-client-table", {
    ref: "myTable",
    attrs: {
      columns: _vm.columns,
      data: _vm.tableData,
      options: _vm.options
    }
  })], 1)])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header"
  }, [_c("i", {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" Errores\n            ")]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Sistema/PermisosCrud.vue?vue&type=template&id=3b452600&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Sistema/PermisosCrud.vue?vue&type=template&id=3b452600&scoped=true ***!
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
  }, [_c("div", {}, [_c("div", {
    staticClass: "card"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("vue-element-loading", {
    attrs: {
      active: _vm.isLoading
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": "usuario"
    }
  }, [_vm._v("Selecciona Usuario")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.user,
      expression: "user"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control col-md-4",
    attrs: {
      id: "user",
      "data-vv-name": "user",
      placeholder: "Usuario"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.user = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, _vm.onChangeElementos]
    }
  }, [_c("option", {
    attrs: {
      value: "0"
    }
  }, [_vm._v("---Usuario---")]), _vm._v(" "), _vm._l(_vm.listaUsuarios, function (item) {
    return _c("option", {
      key: item.id,
      domProps: {
        value: item.id
      }
    }, [_vm._v(_vm._s(item.name))]);
  })], 2), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("user")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": "modulo"
    }
  }, [_vm._v("Selecciona Módulo")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.modulo,
      expression: "modulo"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control col-md-4",
    attrs: {
      id: "modulo",
      name: "modulo",
      placeholder: "Modulo"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.modulo = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, _vm.onChangePagina]
    }
  }, [_c("option", {
    attrs: {
      value: "0"
    }
  }, [_vm._v("---Modulo---")]), _vm._v(" "), _vm._l(_vm.listaModulos, function (item) {
    return _c("option", {
      key: item.id,
      domProps: {
        value: item.id
      }
    }, [_vm._v(_vm._s(item.nombre))]);
  })], 2), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("modulo")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": "usuario"
    }
  }, [_vm._v("Selecciona la Ruta")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.tipoPermisos.ruta,
      expression: "tipoPermisos.ruta"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control col-md-4",
    attrs: {
      id: "ruta",
      name: "ruta",
      placeholder: "Ruta"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.tipoPermisos, "ruta", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.permisorec]
    }
  }, [_c("option", {
    attrs: {
      value: "0"
    }
  }, [_vm._v("---Rutas---")]), _vm._v(" "), _vm._l(_vm.listaRutas, function (itemp, i) {
    return _c("option", {
      key: i,
      attrs: {
        pk: itemp.id
      },
      domProps: {
        value: itemp.page
      }
    }, [_vm._v(_vm._s(itemp.page))]);
  })], 2), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("ruta")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_vm._m(1), _vm._v(" "), _vm._l(_vm.arreglos, function (itc) {
    return _c("div", {
      key: itc.id,
      staticClass: "form-group"
    }, [_vm._v("\n                 \n              " + _vm._s(itc.nombre) + "\n              "), _c("label", {
      staticClass: "switch switch-default switch-pill switch-dark"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.control,
        expression: "control"
      }],
      staticClass: "switch-input",
      attrs: {
        type: "checkbox",
        checked: ""
      },
      domProps: {
        value: itc.id,
        checked: Array.isArray(_vm.control) ? _vm._i(_vm.control, itc.id) > -1 : _vm.control
      },
      on: {
        change: function change($event) {
          var $$a = _vm.control,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;
          if (Array.isArray($$a)) {
            var $$v = itc.id,
              $$i = _vm._i($$a, $$v);
            if ($$el.checked) {
              $$i < 0 && (_vm.control = $$a.concat([$$v]));
            } else {
              $$i > -1 && (_vm.control = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
            }
          } else {
            _vm.control = $$c;
          }
        }
      }
    }), _vm._v(" "), _c("span", {
      staticClass: "switch-label"
    }), _vm._v(" "), _c("span", {
      staticClass: "switch-handle"
    })]), _vm._v("\n                 \n            ")]);
  })], 2), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("button", {
    staticClass: "btn btn-outline-dark",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.menusupdate(0);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Guardar")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-outline-danger",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.guardarTodos();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Todos")])])], 1)])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header"
  }, [_c("i", {
    staticClass: "fa fa-align-justify"
  }), _vm._v("Asignar permisos de CRUD.\n          ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-md-2 col-sm-2"
  }, [_c("label", {
    attrs: {
      "for": "usuario"
    }
  }, [_vm._v("Asigna permisos")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Sistema/PermisosUsuarios.vue?vue&type=template&id=a59c7772":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Sistema/PermisosUsuarios.vue?vue&type=template&id=a59c7772 ***!
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
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("v-client-table", {
    ref: "myTable",
    attrs: {
      columns: _vm.columns,
      data: _vm.list_usuarios,
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
          staticClass: "fas fa-grip-horizontal mr-1"
        }), _vm._v("Acciones\r\n                                ")]), _vm._v(" "), _c("div", {
          staticClass: "dropdown-menu",
          attrs: {
            "aria-labelledby": "btnGroupDrop1"
          }
        }, [[_c("button", {
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
          staticClass: "fas fa-edit"
        }), _vm._v("Actualizar Permisos\r\n                                        ")])]], 2)])])];
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
  }, [_vm._v("x")])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "ml-3 form-control-label font-weight-bold",
    attrs: {
      "for": "nombre"
    }
  }, [_vm._v("Usuario")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_vm.tipoPermisos != null ? [_c("label", [_vm._v(_vm._s(_vm.tipoPermisos.nombre))])] : _vm._e()], 2)]), _vm._v(" "), _c("div", {
    staticClass: "table-scroll"
  }, [_c("table", {
    staticClass: "table-main table"
  }, [_c("thead", {
    staticClass: "thead-dark"
  }, [_c("tr", {
    staticClass: "header-modulo"
  }, [_vm._l(_vm.tableModulos, function (item, i) {
    return [_c("td", {
      key: i,
      staticClass: "a"
    }, [_c("div", {
      staticClass: "text-center1 item"
    }, [_vm._v("\r\n                                                    " + _vm._s(item.nombre) + "\r\n                                                ")])])];
  })], 2), _vm._v(" "), _c("tr", _vm._l(_vm.tableModulos, function (item) {
    return _c("td", {
      key: item.id
    }, _vm._l(_vm.tableMenus, function (itemM) {
      return _c("div", {
        key: itemM.id
      }, [item.id == itemM.m.modulo_id ? _c("div", {
        staticClass: "form-check checkbox"
      }, [itemM.m.page != null ? [_c("input", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: _vm.menus,
          expression: "menus"
        }],
        attrs: {
          id: "smn_" + itemM.m.id,
          type: "checkbox"
        },
        domProps: {
          value: itemM.m.id,
          checked: Array.isArray(_vm.menus) ? _vm._i(_vm.menus, itemM.m.id) > -1 : _vm.menus
        },
        on: {
          change: [function ($event) {
            var $$a = _vm.menus,
              $$el = $event.target,
              $$c = $$el.checked ? true : false;
            if (Array.isArray($$a)) {
              var $$v = itemM.m.id,
                $$i = _vm._i($$a, $$v);
              if ($$el.checked) {
                $$i < 0 && (_vm.menus = $$a.concat([$$v]));
              } else {
                $$i > -1 && (_vm.menus = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
              }
            } else {
              _vm.menus = $$c;
            }
          }, function ($event) {
            return _vm.menusupdate(_vm.tipoPermisos.id, itemM.m, 0);
          }]
        }
      }), _vm._v(" "), _c("label", {
        staticClass: "form-check-label",
        staticStyle: {
          "margin-left": "-1rem"
        },
        attrs: {
          "for": "smn_" + itemM.m.id
        }
      }, [_vm._v("\r\n                                                            " + _vm._s(itemM.m.name) + "\r\n                                                        ")])] : _vm._e(), _vm._v(" "), itemM.m.page == null ? [_c("a", {
        staticClass: "nav-link",
        attrs: {
          href: "#",
          role: "tab"
        }
      }, [_vm._v(_vm._s(itemM.m.name))]), _vm._v(" "), _vm._l(itemM.s, function (itemMS) {
        return _c("div", {
          key: itemMS.id
        }, [_c("input", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.submenus,
            expression: "submenus"
          }],
          attrs: {
            id: "mn_" + itemMS.id,
            type: "checkbox"
          },
          domProps: {
            value: itemMS.id,
            checked: Array.isArray(_vm.submenus) ? _vm._i(_vm.submenus, itemMS.id) > -1 : _vm.submenus
          },
          on: {
            change: [function ($event) {
              var $$a = _vm.submenus,
                $$el = $event.target,
                $$c = $$el.checked ? true : false;
              if (Array.isArray($$a)) {
                var $$v = itemMS.id,
                  $$i = _vm._i($$a, $$v);
                if ($$el.checked) {
                  $$i < 0 && (_vm.submenus = $$a.concat([$$v]));
                } else {
                  $$i > -1 && (_vm.submenus = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
                }
              } else {
                _vm.submenus = $$c;
              }
            }, function ($event) {
              return _vm.submenusupdate(_vm.tipoPermisos.id, itemMS, 0);
            }]
          }
        }), _vm._v(" "), _c("label", {
          staticClass: "form-check-label",
          attrs: {
            "for": "mn_" + itemMS.id
          }
        }, [_vm._v("\r\n                                                                " + _vm._s(itemMS.submenu) + "\r\n                                                            ")])]);
      })] : _vm._e()], 2) : _vm._e()]);
    }), 0);
  }), 0)])])])]), _vm._v(" "), _c("div", {
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
  }), _vm._v(" Cerrar")])])])])])], 1)]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header"
  }, [_c("i", {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" Asignar permisos\r\n            ")]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Sistema/Usuario.vue?vue&type=template&id=34cfe2ba":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Sistema/Usuario.vue?vue&type=template&id=34cfe2ba ***!
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
  }, [_c("div", {}, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("i", {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" Usuarios\r\n                "), _c("button", {
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
  }), _vm._v("Nuevo\r\n                ")]), _vm._v(" "), _c("button", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: false,
      expression: "false"
    }],
    staticClass: "btn btn-dark float-sm-right",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        _vm.ver_id = true;
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-list mr-1"
  }), _vm._v("Yolo\r\n                ")])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", [_c("vue-element-loading", {
    attrs: {
      active: _vm.isLoading
    }
  }), _vm._v(" "), _c("v-client-table", {
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
        }), _vm._v(" Acciones\r\n                                    ")]), _vm._v(" "), _c("div", {
          staticClass: "dropdown-menu",
          attrs: {
            "aria-labelledby": "btnGroupDrop1"
          }
        }, [[_c("button", {
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.abrirModal(0, props.row);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-edit mr-1"
        }), _vm._v("Actualizar\r\n                                            ")]), _vm._v(" "), _c("button", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: _vm.ver_id,
            expression: "ver_id"
          }],
          staticClass: "dropdown-item",
          attrs: {
            type: "button"
          },
          on: {
            click: function click($event) {
              return _vm.Ver(props.row.id);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-edit mr-1"
        }), _vm._v("Ver\r\n                                            ")])], _vm._v(" "), props.row.condicion ? [_c("button", {
          staticClass: "dropdown-item",
          on: {
            click: function click($event) {
              return _vm.Desactivar(props.row.id, 0);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-ban mr-1"
        }), _vm._v("Desactivar\r\n                                            ")])] : _vm._e()], 2)])])];
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
        }, [_vm._v("Dado de Baja")])]];
      }
    }, {
      key: "session_id",
      fn: function fn(props) {
        return [props.row.session_id ? [_c("button", {
          staticClass: "btn btn-success",
          attrs: {
            type: "button"
          }
        }, [_vm._v("Online")])] : [_c("button", {
          staticClass: "btn btn-danger",
          attrs: {
            type: "button"
          }
        }, [_vm._v("Offline")])]];
      }
    }])
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
    staticClass: "form form-horizontal"
  }, [_c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2",
    attrs: {
      "for": "text-input"
    }
  }, [_vm._v("Usuario")]), _vm._v(" "), _c("div", {
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
      value: _vm.name_user,
      expression: "name_user"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "name_user",
      placeholder: "Nombre de Usuario"
    },
    domProps: {
      value: _vm.name_user
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.name_user = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("name_user")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2",
    attrs: {
      "for": "text-input"
    }
  }, [_vm._v("Correo")]), _vm._v(" "), _c("div", {
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
      value: _vm.email,
      expression: "email"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      "data-vv-name": "Correo",
      autocomplete: "false",
      pattern: "^\\w+\\.\\w+@conserflow.com$",
      placeholder: "Correo"
    },
    domProps: {
      value: _vm.email
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.email = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Correo")))])]), _vm._v(" "), _c("label", {
    staticClass: "col-md-2",
    attrs: {
      "for": "text-input"
    }
  }, [_vm._v("Password")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.password,
      expression: "password"
    }],
    staticClass: "form-control",
    attrs: {
      type: "password",
      name: "password",
      placeholder: "Nueva Contraseña",
      "data-vv-name": "Contraseña"
    },
    domProps: {
      value: _vm.password
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.password = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("Contraseña")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2",
    attrs: {
      "for": "text-input"
    }
  }, [_vm._v("Ubicacion")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.tipo_ubicacion_id,
      expression: "tipo_ubicacion_id"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "excluded:0",
      expression: "'excluded:0'"
    }],
    staticClass: "form-control",
    attrs: {
      id: "tipo_ubicacion_id",
      name: "tipo_ubicacion_id",
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
        _vm.tipo_ubicacion_id = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, _vm._l(_vm.listaUbicaciones, function (item) {
    return _c("option", {
      key: item.id,
      domProps: {
        value: item.id
      }
    }, [_vm._v(_vm._s(item.nombre))]);
  }), 0), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("tipo_ubicacion_id")))])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-md-2 form-control-label",
    attrs: {
      form: "text-empleado"
    }
  }, [_vm._v("Empleado")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("v-select", {
    attrs: {
      label: "nombre",
      options: _vm.listaEmpleados,
      "data-vv-name": "empleado"
    },
    model: {
      value: _vm.empleado_id,
      callback: function callback($$v) {
        _vm.empleado_id = $$v;
      },
      expression: "empleado_id"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first("empleado")))])], 1)])])]), _vm._v(" "), _c("div", {
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
        return _vm.GuardarUsuario();
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
        return _vm.GuardarUsuario(0);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Actualizar")]) : _vm._e()])])])])], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Sistema/PermisosUsuarios.vue?vue&type=style&index=0&id=a59c7772&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Sistema/PermisosUsuarios.vue?vue&type=style&index=0&id=a59c7772&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.table-scroll {\r\n    overflow-x: scroll;\r\n    overflow-y: visible;\r\n    padding-bottom: 5px;\r\n    scroll-behavior: smooth;\r\n    scroll-snap-type: x mandatory;\n}\n.item {\r\n    scroll-snap-align: start;\r\n    width: 12rem;\n}\n.header-modulo {\r\n    font-weight: bold;\r\n    text-align: center;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Sistema/PermisosUsuarios.vue?vue&type=style&index=0&id=a59c7772&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Sistema/PermisosUsuarios.vue?vue&type=style&index=0&id=a59c7772&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PermisosUsuarios_vue_vue_type_style_index_0_id_a59c7772_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PermisosUsuarios.vue?vue&type=style&index=0&id=a59c7772&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Sistema/PermisosUsuarios.vue?vue&type=style&index=0&id=a59c7772&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PermisosUsuarios_vue_vue_type_style_index_0_id_a59c7772_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PermisosUsuarios_vue_vue_type_style_index_0_id_a59c7772_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/assets/js/components/Sistema/ElementosMenu.vue":
/*!******************************************************************!*\
  !*** ./resources/assets/js/components/Sistema/ElementosMenu.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ElementosMenu_vue_vue_type_template_id_53679f6b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ElementosMenu.vue?vue&type=template&id=53679f6b */ "./resources/assets/js/components/Sistema/ElementosMenu.vue?vue&type=template&id=53679f6b");
/* harmony import */ var _ElementosMenu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ElementosMenu.vue?vue&type=script&lang=js */ "./resources/assets/js/components/Sistema/ElementosMenu.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ElementosMenu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ElementosMenu_vue_vue_type_template_id_53679f6b__WEBPACK_IMPORTED_MODULE_0__.render,
  _ElementosMenu_vue_vue_type_template_id_53679f6b__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/Sistema/ElementosMenu.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Sistema/ElementosMenu.vue?vue&type=script&lang=js":
/*!******************************************************************************************!*\
  !*** ./resources/assets/js/components/Sistema/ElementosMenu.vue?vue&type=script&lang=js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ElementosMenu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ElementosMenu.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Sistema/ElementosMenu.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ElementosMenu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Sistema/ElementosMenu.vue?vue&type=template&id=53679f6b":
/*!************************************************************************************************!*\
  !*** ./resources/assets/js/components/Sistema/ElementosMenu.vue?vue&type=template&id=53679f6b ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ElementosMenu_vue_vue_type_template_id_53679f6b__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ElementosMenu_vue_vue_type_template_id_53679f6b__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ElementosMenu_vue_vue_type_template_id_53679f6b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ElementosMenu.vue?vue&type=template&id=53679f6b */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Sistema/ElementosMenu.vue?vue&type=template&id=53679f6b");


/***/ }),

/***/ "./resources/assets/js/components/Sistema/Errors.vue":
/*!***********************************************************!*\
  !*** ./resources/assets/js/components/Sistema/Errors.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Errors_vue_vue_type_template_id_748ebbe2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Errors.vue?vue&type=template&id=748ebbe2 */ "./resources/assets/js/components/Sistema/Errors.vue?vue&type=template&id=748ebbe2");
/* harmony import */ var _Errors_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Errors.vue?vue&type=script&lang=js */ "./resources/assets/js/components/Sistema/Errors.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Errors_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Errors_vue_vue_type_template_id_748ebbe2__WEBPACK_IMPORTED_MODULE_0__.render,
  _Errors_vue_vue_type_template_id_748ebbe2__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/Sistema/Errors.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Sistema/Errors.vue?vue&type=script&lang=js":
/*!***********************************************************************************!*\
  !*** ./resources/assets/js/components/Sistema/Errors.vue?vue&type=script&lang=js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Errors_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Errors.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Sistema/Errors.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Errors_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Sistema/Errors.vue?vue&type=template&id=748ebbe2":
/*!*****************************************************************************************!*\
  !*** ./resources/assets/js/components/Sistema/Errors.vue?vue&type=template&id=748ebbe2 ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Errors_vue_vue_type_template_id_748ebbe2__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Errors_vue_vue_type_template_id_748ebbe2__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Errors_vue_vue_type_template_id_748ebbe2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Errors.vue?vue&type=template&id=748ebbe2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Sistema/Errors.vue?vue&type=template&id=748ebbe2");


/***/ }),

/***/ "./resources/assets/js/components/Sistema/PermisosCrud.vue":
/*!*****************************************************************!*\
  !*** ./resources/assets/js/components/Sistema/PermisosCrud.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PermisosCrud_vue_vue_type_template_id_3b452600_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PermisosCrud.vue?vue&type=template&id=3b452600&scoped=true */ "./resources/assets/js/components/Sistema/PermisosCrud.vue?vue&type=template&id=3b452600&scoped=true");
/* harmony import */ var _PermisosCrud_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PermisosCrud.vue?vue&type=script&lang=js */ "./resources/assets/js/components/Sistema/PermisosCrud.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PermisosCrud_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _PermisosCrud_vue_vue_type_template_id_3b452600_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _PermisosCrud_vue_vue_type_template_id_3b452600_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3b452600",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/Sistema/PermisosCrud.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Sistema/PermisosCrud.vue?vue&type=script&lang=js":
/*!*****************************************************************************************!*\
  !*** ./resources/assets/js/components/Sistema/PermisosCrud.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PermisosCrud_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PermisosCrud.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Sistema/PermisosCrud.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PermisosCrud_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Sistema/PermisosCrud.vue?vue&type=template&id=3b452600&scoped=true":
/*!***********************************************************************************************************!*\
  !*** ./resources/assets/js/components/Sistema/PermisosCrud.vue?vue&type=template&id=3b452600&scoped=true ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PermisosCrud_vue_vue_type_template_id_3b452600_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PermisosCrud_vue_vue_type_template_id_3b452600_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PermisosCrud_vue_vue_type_template_id_3b452600_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PermisosCrud.vue?vue&type=template&id=3b452600&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Sistema/PermisosCrud.vue?vue&type=template&id=3b452600&scoped=true");


/***/ }),

/***/ "./resources/assets/js/components/Sistema/PermisosUsuarios.vue":
/*!*********************************************************************!*\
  !*** ./resources/assets/js/components/Sistema/PermisosUsuarios.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PermisosUsuarios_vue_vue_type_template_id_a59c7772__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PermisosUsuarios.vue?vue&type=template&id=a59c7772 */ "./resources/assets/js/components/Sistema/PermisosUsuarios.vue?vue&type=template&id=a59c7772");
/* harmony import */ var _PermisosUsuarios_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PermisosUsuarios.vue?vue&type=script&lang=js */ "./resources/assets/js/components/Sistema/PermisosUsuarios.vue?vue&type=script&lang=js");
/* harmony import */ var _PermisosUsuarios_vue_vue_type_style_index_0_id_a59c7772_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PermisosUsuarios.vue?vue&type=style&index=0&id=a59c7772&lang=css */ "./resources/assets/js/components/Sistema/PermisosUsuarios.vue?vue&type=style&index=0&id=a59c7772&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PermisosUsuarios_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _PermisosUsuarios_vue_vue_type_template_id_a59c7772__WEBPACK_IMPORTED_MODULE_0__.render,
  _PermisosUsuarios_vue_vue_type_template_id_a59c7772__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/Sistema/PermisosUsuarios.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Sistema/PermisosUsuarios.vue?vue&type=script&lang=js":
/*!*********************************************************************************************!*\
  !*** ./resources/assets/js/components/Sistema/PermisosUsuarios.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PermisosUsuarios_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PermisosUsuarios.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Sistema/PermisosUsuarios.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PermisosUsuarios_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Sistema/PermisosUsuarios.vue?vue&type=style&index=0&id=a59c7772&lang=css":
/*!*****************************************************************************************************************!*\
  !*** ./resources/assets/js/components/Sistema/PermisosUsuarios.vue?vue&type=style&index=0&id=a59c7772&lang=css ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PermisosUsuarios_vue_vue_type_style_index_0_id_a59c7772_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PermisosUsuarios.vue?vue&type=style&index=0&id=a59c7772&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Sistema/PermisosUsuarios.vue?vue&type=style&index=0&id=a59c7772&lang=css");


/***/ }),

/***/ "./resources/assets/js/components/Sistema/PermisosUsuarios.vue?vue&type=template&id=a59c7772":
/*!***************************************************************************************************!*\
  !*** ./resources/assets/js/components/Sistema/PermisosUsuarios.vue?vue&type=template&id=a59c7772 ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PermisosUsuarios_vue_vue_type_template_id_a59c7772__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PermisosUsuarios_vue_vue_type_template_id_a59c7772__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PermisosUsuarios_vue_vue_type_template_id_a59c7772__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PermisosUsuarios.vue?vue&type=template&id=a59c7772 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Sistema/PermisosUsuarios.vue?vue&type=template&id=a59c7772");


/***/ }),

/***/ "./resources/assets/js/components/Sistema/Usuario.vue":
/*!************************************************************!*\
  !*** ./resources/assets/js/components/Sistema/Usuario.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Usuario_vue_vue_type_template_id_34cfe2ba__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Usuario.vue?vue&type=template&id=34cfe2ba */ "./resources/assets/js/components/Sistema/Usuario.vue?vue&type=template&id=34cfe2ba");
/* harmony import */ var _Usuario_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Usuario.vue?vue&type=script&lang=js */ "./resources/assets/js/components/Sistema/Usuario.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Usuario_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Usuario_vue_vue_type_template_id_34cfe2ba__WEBPACK_IMPORTED_MODULE_0__.render,
  _Usuario_vue_vue_type_template_id_34cfe2ba__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/assets/js/components/Sistema/Usuario.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Sistema/Usuario.vue?vue&type=script&lang=js":
/*!************************************************************************************!*\
  !*** ./resources/assets/js/components/Sistema/Usuario.vue?vue&type=script&lang=js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Usuario_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Usuario.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Sistema/Usuario.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Usuario_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Sistema/Usuario.vue?vue&type=template&id=34cfe2ba":
/*!******************************************************************************************!*\
  !*** ./resources/assets/js/components/Sistema/Usuario.vue?vue&type=template&id=34cfe2ba ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Usuario_vue_vue_type_template_id_34cfe2ba__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Usuario_vue_vue_type_template_id_34cfe2ba__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Usuario_vue_vue_type_template_id_34cfe2ba__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Usuario.vue?vue&type=template&id=34cfe2ba */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/Sistema/Usuario.vue?vue&type=template&id=34cfe2ba");


/***/ })

}]);