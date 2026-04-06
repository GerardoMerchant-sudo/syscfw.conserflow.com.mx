<template>
<main class="main">
    <div class="container-fluid">
        <div class="card">
            <div class="card-header">
                <i class="fa fa-align-justify"></i> Registro de Proveedores - {{anio}}
                 <template v-if="true">
                        <div class="dropdown float-sm-right mx-1">
                            <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu2"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {{ anio }}
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <button 
                                    v-for="year in Years" 
                                    :key="year.anio" 
                                    class="dropdown-item " 
                                    type="button"
                                    @click="selectYear(year.anio)">
                                    {{ year.anio }}
                                </button>
                            </div>
                        </div>
                        <button v-show="PermisosCrud.Create" type="button" @click="abrirModal()"
                            class="btn btn-primary float-sm-right mx-1">
                            <i class="fas fa-plus mr-1"></i> Nuevo
                        </button>
                        <button v-show="PermisosCrud.Download" type="button" @click="DescargarReporte()"
                            class="btn btn-success float-sm-right mx-1">
                            <i class="fas fa-file-excel"></i> Descargar
                        </button>
                    </template>
               
            </div>
            <div class="card-body">
                <vue-element-loading :active="isLoading_proveedores" />

                <v-client-table :columns="columns" :data="list_proveedores" :options="options" ref="myTable">
                    <template slot="id" slot-scope="props">
                        <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
                            <div class="btn-group dropup" role="group">
                                <button id="btnGroupDrop1" type="button" class="btn btn-outline-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fas fa-grip-horizontal"></i>
                                </button>
                                <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                    <button v-show="PermisosCrud.Update" type="button" @click="abrirModal(false,props.row)" class="dropdown-item">
                                        <i class="fas fa-edit"></i>Actualizar proveedor
                                    </button>
                                    <button v-if="props.row.condicion" v-show="PermisosCrud.Delete" type="button" class="dropdown-item" @click="actdesact(props.row.id, 0)">
                                        <i class="fas fa-ban"></i>Desactivar proveedor
                                    </button>
                                    <button v-else type="button" class="dropdown-item" @click="actdesact(props.row.id, 1)">
                                        <i class="fas fa-check"></i>Activar proveedor
                                    </button>
                                    <button type="button" class="dropdown-item" @click="Historial(props.row)">
                                        <i class="fas fa-list-alt"></i>Historial
                                    </button>
                                </div>
                            </div>
                        </div>
                    </template>
                    <template slot="condicion" slot-scope="props">
                        <span v-if="props.row.condicion == 1" class="btn btn-outline-success">Activo</span>
                        <span v-else class="btn btn-outline-danger">Desactivado</span>
                    </template>

                    <template slot="categoria" slot-scope="props">
                        <p v-if="props.row.total_evaluacion == null">N/D</p>
                        <span v-if="props.row.total_evaluacion >= 54" class="text-success">APROBADO</span>
                        <span v-if="props.row.total_evaluacion >= 36 && props.row.total_evaluacion <= 53" class="text-warning">CONDICIONADO</span>
                        <span v-if="props.row.total_evaluacion >= 18 && props.row.total_evaluacion <= 35" class="text-danger">NO APTO</span>
                    </template>

                    <template slot="total_evaluacion" slot-scope="props">
                        <span v-if="props.row.total_evaluacion == null">0</span>
                        <span v-else>{{props.row.total_evaluacion}}</span>
                    </template>

                </v-client-table>
            </div>
        </div>
        <!-- Fin ejemplo de tabla Listado -->
    </div>

     <!--Inicio del modal agregar/actualizar-->
        <div class="modal fade" tabindex="-1" :class="{ 'mostrar': modal }" role="dialog" aria-labelledby="myModalLabel"
            style="display: none;" aria-hidden="true">
            <div class="modal-dialog  modal-lg" role="document">
                <div class="modal-content">
                    <div>
                        <vue-element-loading :active="isLoading" />
                        <div class="modal-header">
                        <h5 class="modal-title mb-0">
                            {{ tituloModal }}
                        </h5>
                        <button type="button" class="close ml-auto" @click="cerrarModal()">
                            <span>&times;</span>
                        </button>
                        </div>
                        <div class="modal-body">
                            <div class="row mb-3">
                                <div class="col-md-8 offset-md-2">
                                    <div class="form-floating">
                                        <input type="text" id="razon_social" name="razon_social" class="form-control"
                                            v-model="proveedor.razon_social" placeholder="Razón Social"
                                            autocomplete="off" data-vv-name="Razon Social" v-validate="'required'" >
                                        <label for="razon_social">Razón Social</label>
                                    </div>
                                    <span class="text-danger">
                                        {{ errors.first('razon_social') }}
                                    </span>
                                </div>
                            </div>

                            <div class="row mb-3">
                                <div class="col-md-8 offset-md-2">
                                    <div class="form-floating">
                                        <input type="text" name="nombre" v-model="proveedor.nombre" class="form-control"
                                            placeholder="Nombre" autocomplete="off" id="nombre" data-vv-name="Nombre"
                                            v-validate="'required'">
                                        <label for="nombre">Nombre comercial</label>
                                    </div>
                                    <span class="text-danger">{{ errors.first('nombre') }}</span>
                                </div>
                            </div>
                            
                            <div class="container">
                                <div class="row mb-3">
                                    <!-- COLUMNA 1 · ORIGEN -->
                                    <div class="col">
                                        <div class="form-floating">
                                            <select class="form-select" v-model="tipo_proveedor" id="tipo_proveedor"  >
                                                <option value="" disabled>Seleccione el origen</option>
                                                <option value="1">Nacional</option>
                                                <option value="2">Extranjero</option>
                                            </select>
                                            <label for="tipo_proveedor">Origen del proveedor</label>
                                        </div>
                                    </div>
                                    <!-- COLUMNA 2 · RFC / TAX ID -->
                                    <div class="col">
                                        <!-- RFC -->
                                        <div v-if="tipo_proveedor == 1">
                                            <div class="form-floating mb-1">
                                                <input type="text" id="rfc" class="form-control" v-model="proveedor.rfc"
                                                    placeholder="RFC" maxlength="13" autocomplete="off"
                                                    :class="{ 'is-invalid': rfcTouched && !proveedor.rfc }">
                                                <label for="rfc">RFC</label>
                                            </div>
                                            <span class="text-danger">{{ errors.first('RFC') }}</span>
                                            <span v-if="rfcTouched && rfc_valido" class="text-success">
                                                RFC válido
                                            </span>
                                            <span v-if="rfcTouched && !rfc_valido" class="text-danger">
                                                RFC inválido
                                            </span>
                                            <small class="text-muted d-block">
                                                {{ proveedor.rfc ? proveedor.rfc.length : 0 }}/13
                                            </small>
                                            <!-- <div v-if="typePeople">
                                                <strong v-if="typePeople === 'moral'">Persona Moral</strong>
                                                <strong v-if="typePeople === 'fisica'">Persona Física</strong>
                                            </div> -->
                                        </div>
                                        <!-- TAX ID -->
                                        <div v-if="tipo_proveedor == 2">
                                            <div class="form-floating mb-1">
                                                <input type="text" id="taxid" class="form-control"
                                                    v-model="proveedor.taxid" placeholder="TAX ID" maxlength="10"
                                                    autocomplete="off"
                                                    :class="{ 'is-valid': taxidTouched && proveedor.taxid }">
                                                <label for="taxid">TAX ID</label>
                                            </div>
                                            <span class="text-danger">{{ errors.first('TAX ID') }}</span>
                                            <span v-if="taxidTouched && taxidValido" class="text-success">
                                                TAX ID válido
                                            </span>
                                            <span v-if="taxidTouched && !taxidValido" class="text-danger">
                                                TAX ID inválido
                                            </span>
                                            <small class="text-muted d-block">
                                                {{ proveedor.taxid ? proveedor.taxid.length : 0 }}/10
                                            </small>
                                        </div>
                                    </div>
                                    <!-- COLUMNA 3 · GIRO -->
                                    <div class="col">
                                        <div class="form-floating">
                                            <select id="giro" class="form-select" v-model="proveedor.giro"
                                                v-validate="'required'" data-vv-name="Giro">
                                                <option value="" disabled>Seleccione un suministro</option>
                                                <option v-for="Suministro in list_giro_suministro" :key="Suministro"
                                                    :value="Suministro">
                                                    {{ Suministro }}
                                                </option>
                                            </select>
                                            <label for="giro">Suministro / Giro</label>
                                        </div>
                                        <span class="text-danger">
                                            {{ errors.first('giro') }}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <!---Dirección-->
                            <hr style="border: 1px solid #000; width: 100%; margin: 20px auto;">
                            <p class="font-weight-bold h6">Dirección</p>
                            <br>
                            <div class="container">
                                <div class="row mb-4">
                                    <div class="col">
                                        <div class="form-floating ">
                                    <input type="text" maxlength="75" minlength="3" v-validate="'required'"
                                        v-model="proveedor.calle" class="form-control" data-vv-name="Calle"
                                        autocomplete="off" placeholder="Calle" id="calle"/>
                                        <label for="calle">Calle</label>
                                    <span class="text-danger">{{ errors.first('Calle') }}</span>
                                </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-floating">
                                            <input type="text" maxlength="75" minlength="3" v-validate="'required'"
                                                v-model="proveedor.colonia" class="form-control" data-vv-name="Colonia"
                                                autocomplete="off" id="colonia" placeholder="Colonia" />
                                                <label for="colonia">Colonia</label>
                                            <span class="text-danger">{{ errors.first('Colonia') }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="container">
                                <div class="row mb-3">
                                    <div class="col">
                                        <div class="form-floating">
                                            <input type="text" maxlength="10" v-validate="'required'"
                                                v-model="proveedor.no_exterior" class="form-control"
                                                data-vv-name="No. Exterior" autocomplete="off" id="no.Exterior" placeholder="N° Exterior" />
                                                <label for="no.Exterior">N° Exterior</label>
                                            <span class="text-danger">{{ errors.first('No. Exterior') }}</span>
                                        </div>
                                        
                                    </div>
                                    <div class="col">
                                        <div class="form-floating">
                                            <input type="text"  v-validate="'required'"
                                                v-model="proveedor.no_interior" class="form-control"
                                                data-vv-name="No.  Interior" autocomplete="off" placeholder="n.Interior" />
                                                <label for="n.Interior">N° Interior</label>
                                            <span class="text-danger">{{ errors.first('No. Interior') }}</span>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-floating">
                                            <input type="text" maxlength="5" minlength="5" v-validate="'required'"
                                                v-model="proveedor.cp" class="form-control" data-vv-name="C.P."
                                                autocomplete="off" placeholder="C.P" />
                                                <label for="cp">C.P</label>
                                            <span class="text-danger">{{ errors.first('C.P.') }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="container">
                                <div class="row mb-3">
                                    <div class="col">
                                        <div class="form-floating">
                                            <input type="text" maxlength="75" minlength="3" v-validate="'required'"
                                            v-model="proveedor.municipio" class="form-control" data-vv-name="Municipio"
                                            autocomplete="off" placeholder="Municipio" id="muni"/>
                                            <label for="muni">Municipio</label>
                                            <span class="text-danger">{{ errors.first('Municipio') }}</span>
                                        </div>            
                                    </div>
                                    <div class="col">
                                        <div class="form-floating">
                                            <input type="text" maxlength="75" minlength="3" v-validate="'required'"
                                            v-model="proveedor.ciudad" class="form-control" data-vv-name="ciudad"
                                            autocomplete="off" placeholder="Ciudad" id="ciudad"/>
                                            <label for="ciudad">Ciudad</label>
                                            <span class="text-danger">{{ errors.first('Ciudad') }}</span>
                                        </div>            
                                    </div>
                                    <div class="col">
                                        <div class="form-floating">
                                            <input type="text" maxlength="75" minlength="3" v-validate="'required'"
                                                v-model="proveedor.estado" class="form-control" data-vv-name="Estado"
                                                autocomplete="off" placeholder="Estado" id="estado"/>
                                                <label for="estado">Estado</label>
                                            <span class="text-danger">{{ errors.first('Estado') }}</span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            
                            <template v-if="tipoAccion == 1">
                                <hr style="border: 1px solid #000; width: 100%; margin: 20px auto;">
                                <p class="font-weight-bold h6">Datos Bancarios</p>
                                <div class="container">
                                    <div class="row mb-3">
                                        <div class="col">
                                            <div class="form-floating">
                                                <input v-validate="'required'" type="text" maxlength="50"
                                                    name="banco_transferencia" v-model="temp2_proveedor_banco"
                                                    class="form-control" placeholder="Banco de transferencia"
                                                    autocomplete="off" id="banco_transferencia"
                                                    data-vv-name="banco transferencia">
                                                <label for="banco_transferencia">Banco de transferencia</label>
                                                <span class="text-danger">{{
                                                    errors.first('banco_transferencia')}}</span>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="form-floating">
                                                <input type="text" v-validate="'required'" maxlength="50"
                                                    pattern="^[0-9]+" name="numero_cuenta"
                                                    v-model="temp2_proveedor_cuenta" class="form-control"
                                                    placeholder="Número de cuenta" autocomplete="off" id="numero_cuenta"
                                                    data-vv-name="número cuenta">
                                                <label for="numero_cuenta">Número de cuenta</label>
                                                <span class="text-danger">{{ errors.first('número cuenta') }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="container">
                                    <div class="row mb-3">
                                        <div class="col">
                                            <div class="form-floating">
                                                <input type="text" v-validate="'required'" maxlength="50"
                                                    pattern="^[0-9]+" name="clabe" v-model="temp2_proveedor_clabe"
                                                    class="form-control" placeholder=" Cuenta Clabe" autocomplete="off"
                                                    id="clabe" data-vv-name="clabe">
                                                    <label for="clabe">Cuenta Clabe</label>
                                                <span class="text-danger">{{ errors.first('clabe') }}</span>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="form-floating">
                                                    <select v-validate="'required'" v-model="temp2_proveedor_moneda"
                                                        class="form-select" data-vv-name="moneda" placeholder="Tipo de moneda" id="tipoM">
                                                        <option value="" disabled>Tipo de moneda $</option>
                                                        <option value="MXN">MXN</option>
                                                        <option value="USD">USD</option>
                                                        <option value="EUR">EUR</option>
                                                    </select>
                                                    <label for="tipoM">Tipo de moneda</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="container">
                                    <div class="row mb-3">

                                        <!-- ¿TIENE CRÉDITO? -->
                                        <div class="col-6">
                                            <div class="form-floating">
                                                <select id="tiene_credito" class="form-select"
                                                    v-model="proveedor.tiene_credito">
                                                    <option value="" disabled>Seleccione</option>
                                                    <option value="1">Sí</option>
                                                    <option value="0">No</option>
                                                </select>
                                                <label for="tiene_credito">¿Tiene crédito?</label>
                                            </div>
                                        </div>

                                        <!-- MONTO DEL CRÉDITO -->
                                        <div class="col" v-if="proveedor.tiene_credito == 1">
                                            <div class="form-floating">
                                                <input type="number" min="0" step="0.01" v-validate="'required|decimal'"
                                                    v-model="proveedor.limite_credito" class="form-control"
                                                    placeholder="Límite de crédito" autocomplete="off"
                                                    id="limite_credito" data-vv-name="Límite de crédito">
                                                <label for="limite_credito">Límite de crédito</label>
                                            </div>

                                            <span class="text-danger">
                                                {{ errors.first('Límite de crédito') }}
                                            </span>
                                        </div>

                                    </div>
                                </div>

                            </template>
                            <hr style="border: 1px solid #000; width: 100%; margin: 20px auto;">
                            <p class="font-weight-bold h6">Contacto</p>
                            <br>
                            <!--Contacto de ventas-->
                            <div class="container">
                                <div class="row mb-3">
                                    <div class="col">
                                        <div class="form-floating">
                                            <input type="text" maxlength="45" minlength="3" v-validate="'required'"
                                                v-model="proveedor.ventas_contacto" class="form-control"
                                                data-vv-name="Contacto de Ventas" autocomplete="off" id="conVentas" placeholder="Contacto de ventas"/>
                                                <label for="conVentas">Contacto de ventas</label>
                                            <span class="text-danger">{{ errors.first('Contacto de Ventas') }}</span>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-floating">
                                            <input type="text" maxlength="10" v-validate="'required'"
                                                v-model="proveedor.ventas_telefono" class="form-control"
                                                data-vv-name="Teléfono de Ventas" autocomplete="off" id="telVentas" placeholder="Teléfono de ventas" />
                                                <label for="telVentas">Teléfono de ventas</label>
                                            <span class="text-danger">{{ errors.first('Teléfono de Ventas') }}</span>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-floating">
                                            <input type="text" maxlength="10" v-validate="'required'"
                                                v-model="proveedor.ventas_celular" class="form-control"
                                                data-vv-name="Celular de Ventas" autocomplete="off" id="celVentas" placeholder="Celular de ventas" />
                                                <label for="celVentas">Celular de ventas</label>
                                            <span class="text-danger">{{ errors.first('Celular de Ventas') }}</span>
                                        </div>
                                    </div>
                                </div>
                                    <div class="row mb-4">
                                        <div class="col">
                                            <div class="form-floating">
                                                <input type="email" maxlength="45" minlength="3" v-validate="'required'"
                                                    v-model="proveedor.ventas_correo" class="form-control"
                                                    data-vv-name="Correo de Ventas" autocomplete="off" id="coVentas" placeholder="Correo de ventas" />
                                                    <label for="coVentas">Correo de ventas</label>
                                                <span class="text-danger">{{ errors.first('Correo de Ventas') }}</span>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            <!--Contacto  de facturación-->
                            <div class="container">
                                <div class="row mb-3">
                                    <div class="col">
                                        <div class="form-floating">
                                            <input type="text" maxlength="45" minlength="3" v-validate="'required'"
                                                v-model="proveedor.facturacion_contacto" class="form-control"
                                                data-vv-name="Contacto de Facturación" autocomplete="off" id="conFact" placeholder="Contacto facturación"/>
                                                <label for="conFact">Contacto facturación</label>
                                            <span class="text-danger">{{ errors.first('Contacto de Facturación') }}</span>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-floating">
                                            <input type="text" maxlength="10" v-validate="'required'"
                                                v-model="proveedor.facturacion_telefono" class="form-control"
                                                data-vv-name="Teléfono de Facturación" autocomplete="off" id="telFac" placeholder="Teléfono de facturación"/>
                                                <label for="telFac">Teléfono de facturación</label>
                                            <span class="text-danger">{{ errors.first('Teléfono de Facturación') }}</span>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-floating">
                                            <input type="text" maxlength="10" v-validate="'required'"
                                                v-model="proveedor.facturacion_celular" class="form-control"
                                                data-vv-name="Celular de Facturación" autocomplete="off" id="celFac" placeholder="Celular de facturación"/>
                                            <span class="text-danger">{{ errors.first('Celular de Facturación') }}</span>
                                            <label for="celFac">Celular de facturación</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col">
                                        <div class="form-floating">
                                            <input type="text" maxlength="45" v-validate="'required'"
                                                v-model="proveedor.facturacion_correo" class="form-control"
                                                data-vv-name="Correo de Facturación" autocomplete="off" id="coFac" placeholder="coFac" />
                                                <label for="coFac">Correo de facturación</label>
                                            <span class="text-danger">{{ errors.first('Correo de Facturación') }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                            <hr style="border: 1px solid #000; width: 100%; margin: 20px auto;">

                            <div class="form-group row" v-if="tipoAccion == 2">
                                <label class="col-md-2 form-control-label">Modificación</label>
                                <div class="col-md-9 ml-4">
                                    <!--
                                <textarea rows="3" maxlength="300" v-model="proveedor.modificacion" class="form-control"></textarea>
                                -->
                                    <div v-for="(item, index) in list_modificaciones" :key="index" class="form-check">
                                        <input class="form-check-input" type="checkbox" :id="'mod-' + index"
                                            :value="item" v-model="list_modificaciones_db" />
                                        <label class="form-check-label" :for="'mod-' + index">{{ item }}</label>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group row" >
                                <label class="col-md-2 form-control-label">Documentos</label>
                                <div class="col-md-9 ml-4">
                                    <div v-for="(item, index) in list_tipos_documentos" :key="index" class="form-check">
                                        <input class="form-check-input" type="checkbox" :id="'doc-' + index"
                                            :value="item" v-model="list_tipos_documentos_db" />
                                        <label class="form-check-label" :for="'doc-' + index">{{ item }}</label>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group row" v-if="tipoAccion == 2">
                                <label class="col-md-2 form-control-label">Anexos</label>
                                <div class="col-md-9">
                                    <textarea rows="3" maxlength="300" v-model="proveedor.anexos"
                                        class="form-control"></textarea>
                                </div>
                            </div>

                            <div class="form-group row" v-show="tipoAccion == 2">

                                <div class="col-md-11 mx-auto">
                                    <div class="form-row">
                                        <div class="col mx-auto">
                                            <label class="font-weight-bold">Datos bancarios</label>
                                        </div>

                                        <div class="col">
                                            <button type="button" @click="AbrirModalBancos(1)"
                                                class="btn btn-dark  mb-3 float-sm-right">
                                                <i class="fas fa-plus"></i>Agregar
                                            </button>
                                        </div>
                                    </div>
                                    <v-client-table :columns="columnsProvedores" :data="ListBancos"
                                        :options="optionsProveedores">
                                    </v-client-table>
                                </div>
                            </div>
                        </div>

                        <div class="modal-footer">

                            <button @click="openModalExcel()" class="btn btn-success">
                                <i class="fas fa-upload mr-1"></i>Carga Excel
                            </button> 
                            <button
                                class="btn btn-success"
                                @click="descargarExcel()"
                                :disabled="isDownloading"
                            >
                                <span v-if="isDownloading">
                                    <i class="fas fa-spinner fa-spin mr-1"></i>
                                    Generando...
                                </span>

                                <span v-else>
                                    <i class="fas fa-download mr-1"></i>
                                    Descargar Excel
                                </span>
                            </button>

                            <button type="button" v-if="tipoAccion == 1" class="btn btn-primary"
                                @click="GuardarProveedor(true)"><i class="fas fa-save mr-1"></i>Crear</button>
                            <button type="button" v-if="tipoAccion == 2" class="btn btn-primary"
                                @click="GuardarProveedor(false)"><i class="fas fa-save mr-1"></i>Actualizar</button>
                        </div>
                    </div>
                </div>
                <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
        </div>
        <!--Fin del modal-->
    <!-- Modal registro de bancos -->
    <div class="modal fade" tabindex="-1" :class="{'mostrar' : modalProveedor}" role="dialog" aria-labelledby="myModalLabel" style="display: none;" aria-hidden="true">
        <div class="modal-dialog modal-dark modal-lg" role="document">
            <div class="modal-content">

                <div class="modal-header">
                    <h4 class="modal-title">Bancos del Proveedor</h4>
                    <button type="button" class="close" @click="CerrarModalProveedores()" aria-label="Close">
                        <span aria-hidden="true">x</span>
                    </button>
                </div>

                <div class="modal-body">
                    <div class="form-group row">
                        <label class="col-md-2 form-control-label" for="banco_transferencia">Banco</label>
                        <div class="col-md-9">
                            <input type="text" maxlength="50" name="banco_transferencia" v-model="temp_proveedor_banco" class="form-control" placeholder="Banco de transferencia" autocomplete="off" id="banco_transferencia" data-vv-name="banco transferencia">
                            <span class="text-danger">{{ errors.first('banco_transferencia') }}</span>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-md-2 form-control-label" for="numero_cuenta">Cuenta</label>
                        <div class="col-md-9">
                            <input type="text" maxlength="50" pattern="^[0-9]+" name="numero_cuenta" v-model="temp_proveedor_cuenta" class="form-control" placeholder="Número de cuenta" autocomplete="off" id="numero_cuenta" data-vv-name="número cuenta">
                            <span class="text-danger">{{ errors.first('numero_cuenta') }}</span>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-md-2 form-control-label" for="clabe">Clabe</label>
                        <div class="col-md-9">
                            <input type="text" maxlength="50" pattern="^[0-9]+" name="clabe" v-model="temp_proveedor_clabe" class="form-control" placeholder="Clabe" autocomplete="off" id="clabe" data-vv-name="clabe">
                            <span class="text-danger">{{ errors.first('clabe') }}</span>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-md-2 form-control-label" for="clabe">Condiciones de pago</label>
                        <div class="col-md-9">
                            <input type="text" maxlength="50" v-model="temp_proveedor_condiciones" class="form-control" placeholder="Condiciones de pago" autocomplete="off" data-vv-name="condiciones">
                            <span class="text-danger">{{ errors.first('Condiciones') }}</span>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-md-2 form-control-label" for="clabe">Moneda</label>
                        <div class="col-md-3">
                            <select v-model="temp_proveedor_moneda" class="form-control" data-vv-name="moneda">
                                <option value="MXN">MXN</option>
                                <option value="USD">USD</option>
                                <option value="EUR">EUR</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-dark" @click="CerrarModalProveedores()"><i class="fas fa-window-close mr-1"></i>Cancelar</button>
                    <button v-if="tipo_guardar==1" type="button" class="btn btn-secondary" @click="guardarProveedoresTemp(1)"><i class="fas fa-save mr-1"></i>Guardar</button>
                    <button v-else type="button" class="btn btn-secondary" @click="guardarProveedoresTemp(2)"><i class="fas fa-save mr-1"></i>Actualizar</button>
                </div>
            </div>

            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>

    <!-- Modal Historial -->
    <div class="modal fade" tabindex="-1" :class="{ mostrar: ver_modal_historial }" role="dialog" aria-labelledby="myModalLabel" style="display: none" aria-hidden="true">
        <div class="modal-dialog modal-dark modal-lg" role="document">
            <div class="modal-content">
                <div>
                    <div class="modal-header">
                        <h4 class="modal-title">{{nombre_proveedor}}</h4>
                        <button type="button" class="close" @click="CerrarModalHistorial()" aria-label="Close">
                            <span aria-hidden="true">x</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <vue-element-loading :active="isObtenerHistorial_loading" />
                        <div class="container">
                            <div v-if="list_historial.length>0">
                                <table class="table table-sm">
                                    <thead class="thead-dark">
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Fecha</th>
                                            <th scope="col">Tipo de Movimiento</th>
                                            <th scope="col">Modificación</th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr :key="i" v-for="(h,i) in list_historial">
                                            <th scope="row">{{i+1}}</th>
                                            <td>{{h.fecha}}</td>
                                            <td>{{h.tipo_movimiento}}</td>
                                            <td>{{h.modificacion}}</td>
                                            <td>
                                                <button class="btn btn-sm btn-dark" @click="DescargarHistorial(h.id)">
                                                    <i class="fas fa-download"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div v-else>
                                <h5 class="text-center">Sin Cambios</h5>
                            </div>

                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-dark" @click="CerrarModalHistorial()">
                            <i class="fas fa-window-close"></i>
                            &nbsp;Cerrar
                        </button>
                    </div>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
<!--modal import exce-->
     <modal-component 
        :showModal="showModalExcel"
        :loading="loading"
        @set-loading = "setLoading = $event "
        @close="showModalExcel = false"
        @file-upload="loadExcel">
        </modal-component> 
</main>
</template>

<style>
.form-check-label {
    padding-left: 0.1rem;
}
</style>

<script>
import ModalComponent from '../../Components/ModalComponent.vue';
import Utilerias from '../../Herramientas/utilerias.js';
var config = require('../../Herramientas/config-vuetables-client').call(this);
export default
{
    components: {
        ModalComponent,
    },
    data()
    {
        return {
            n_temp: 0,
            banco_edit:
            {},
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
            optionsProveedores:
            {
                headings:
                {
                    clabe: "Clabe",
                    condiciones: "Condición de pago",
                    cuenta: "No. de Cuenta",
                },
                perPage: 20,
                perPageValues: [],
                skin: config.skin,
                texts: config.texts,
                filterable: false,
            },
            modalProveedor: 0,
            tipo_proveedor: 1,
            PermisosCrud:
            {},
            proveedor:
            {

            },
            listaProveedores: [],
            modal: 0,
            tituloModal: '',
            tipoAccion: 0,
            isLoading: false,
            columns: [
                'id',
                'idControl',
                'nombre',
                'razon_social',
                //"rfc",
                "IdentificadorFiscal",
                "contacto",
                'categoria',
                "condicion"
            ],
            list_proveedores: [],
            options:
            {
                headings:
                {
                    id: 'Acciones',
                    idControl: 'ID',
                    nombre: 'Nombre Comercial',
                    IdentificadorFiscal: 'Indentificador Fiscal',
                    razon_social: 'Razón Social',
                    direccion: 'Dirección',
                    condicion: 'Estado',
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
            list_modificaciones_db:[],
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
                temp2_proveedor_banco:'',
                temp2_proveedor_cuenta:'',
                temp2_proveedor_clabe:'',
                temp2_proveedor_moneda: '',
                limite_credito: '',
                ventas_contacto: '',
                ventas_telefono: '',
                ventas_celular: '',
                ventas_correo: '',
                facturacion_contacto: '',
                facturacion_telefono: '',
                facturacion_celular: '',
                facturacion_correo: '',
            }
        }
    },
    watch: {
            //Observar cambios para el RFC
            'proveedor.rfc'(newVal) {
                //si viene vacio 
                if (!newVal) {
                    this.rfc_valido = false
                    this.rfcTouched = false
                    return
                }
                //Letras en mayusculas
                const rfc = newVal.toUpperCase()

                if (rfc !== newVal) {
                    this.proveedor.rfc = rfc
                    return
                }
                //Marca como tocado
                this.rfcTouched = true

                //validar RFC
                this.rfc_valido = this.AuxValidarRFC(rfc)
            },

            'proveedor.taxid'(nuevoValor) {
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
         created() {
            this.setperiodCurrentYear()
        },
    computed:
    { typePeople() {
                if (!this.proveedor.rfc) return null
                if (this.proveedor.rfc.length === 12) return 'moral'
                if (this.proveedor.rfc.length === 13) return 'fisica'
                return null
            },

            rfcDisabled(){
                !!this.proveedor.rfc 
                return
            },
            taxidDisabled(){
                !!this.proveedor.taxid
                return
            }},
    methods:
    {

         setperiodCurrentYear() {
            this.anio = new Date().getFullYear()
        },
        /** Periodo de proveedores 2020 a  fecha actual */
        generateYears() {
            this.Years = []
            for (let year = this.yearSince; year <= this.yearUntil; year++) {
                this.Years.push({
                    anio: year
                })
            }
        },
        selectYear(anio) {
            this.anio = anio
            this.ObtenerProveedores()
        },
        /**
         * Obtener todos los proveedores
         */
        ObtenerProveedores()
        {
            this.isLoading_proveedores = true;
            axios.get("/compras/proveedores/obtener/" + this.anio).then(res =>
            {
                this.isLoading_proveedores = false;
                if (res.data.status)
                {
                    this.list_proveedores = res.data.proveedores;
                }
                else
                    toastr.error(res.data.mensaje);
            });
        },

       /**
         * Registra o actualiza el proveedore actual
         */
        async GuardarProveedor(nuevo) {
            try {
                let isValid = await this.$validator.validate();
            if (!isValid) return;

            const tieneRFC = !!this.proveedor.rfc;
            const tieneTaxID = !!this.proveedor.taxid;
            if (tieneRFC && tieneTaxID) {
                toastr.warning('No puede enviar RFC y TAX ID juntos');
                return;
            }
            if (!tieneRFC && !tieneTaxID) {
                toastr.warning('Debe ingresar RFC o TAX ID');
                return;
            }
            // Validaciones
            if (this.tipo_proveedor === 1 && !this.rfc_valido) {
                toastr.warning("Ingrese un RFC válido");
                return;
            }

            if (this.tipo_proveedor === 2 && !this.taxidValido) {
                toastr.warning("Ingrese un Tax ID válido");
                return;
            }
            if (this.tipo_proveedor == 1) {
                this.proveedor.nacionalidad = 'NACIONAL'
            } else if (this.tipo_proveedor == 2) {
                this.proveedor.nacionalidad = 'EXTRANJERO'
            } else {
                this.proveedor.nacionalidad = null
            }

            Object.keys(this.proveedor).forEach(key => {
                if (
                    this.proveedor[key] === '' ||
                    this.proveedor[key] === 'N/A'
                ) {
                    this.proveedor[key] = null;
                }
            })
            let data = new FormData();
            this.isLoading = true;

            this.proveedor.tipos_modificacion = this.list_modificaciones_db.join(',');
            this.proveedor.tipos_documentos = this.list_tipos_documentos_db.join(',');

            if (!nuevo)
                data.append("id", this.proveedor.id);
            data.append("nombre", this.proveedor.nombre);
            data.append("direccion", this.proveedor.direccion);
            data.append("razon_social", this.proveedor.razon_social);
            data.append("giro", this.proveedor.giro);

            if (this.tipo_proveedor == 1) {
                data.append("rfc", this.proveedor.rfc);
            }

            if (this.tipo_proveedor == 2) {
                data.append("taxid", this.proveedor.taxid);
            }
            data.append("pagina", this.proveedor.pagina);
            data.append("lista_bancos", JSON.stringify(this.ListBancos.filter(b => b.temp)));
            data.append("regimen_fiscal", this.proveedor.regimen_fiscal);
            data.append("limite_credito", this.proveedor.limite_credito);
            data.append("calle", this.proveedor.calle);
            data.append("no_exterior", this.proveedor.no_exterior);
            data.append("no_interior", this.proveedor.no_interior);
            data.append("estado", this.proveedor.estado);
            data.append("ciudad", this.proveedor.ciudad);
            data.append("cp", this.proveedor.cp);
            data.append("nacionalidad", this.proveedor.nacionalidad);
            data.append("colonia", this.proveedor.colonia);
            data.append("municipio", this.proveedor.municipio);
            data.append("ventas_contacto", this.proveedor.ventas_contacto);
            data.append("ventas_telefono", this.proveedor.ventas_telefono);
            data.append("ventas_celular", this.proveedor.ventas_celular);
            data.append("ventas_correo", this.proveedor.ventas_correo);
            data.append("facturacion_contacto", this.proveedor.facturacion_contacto);
            data.append("facturacion_telefono", this.proveedor.facturacion_telefono);
            data.append("facturacion_celular", this.proveedor.facturacion_celular);
            data.append("facturacion_correo", this.proveedor.facturacion_correo);
            data.append("modificacion", this.proveedor.modificacion);
            data.append("anexos", this.proveedor.anexos);
            data.append("tipos_modificacion", this.proveedor.tipos_modificacion);
            data.append("tipos_documentos", this.proveedor.tipos_documentos);
            // Banco inicial
            data.append("temp2_proveedor_cuenta", this.temp2_proveedor_cuenta);
            data.append("temp2_proveedor_clabe", this.temp2_proveedor_clabe);
            data.append("temp2_proveedor_condiciones", this.temp2_proveedor_condiciones);
            data.append("temp2_proveedor_moneda", this.temp2_proveedor_moneda);
            data.append("temp2_proveedor_banco", this.temp2_proveedor_banco);
           const res =  await axios.post(this.url, data).then(res => {
                if (res.data.status) {
                    this.cerrarModal();
                    this.ObtenerProveedores();
                    if (nuevo) {
                        toastr.success('Proveedor Registrado Correctamente');
                    }
                    else {
                        toastr.success('Proveedor Actualizado Correctamente');
                    }
                }
            });
            } catch (error) {
                toastr.error(error.response.data.message);


            }
            finally {
                this.isLoading = false;
            }
            
        },
        /**
         * Activar o desactivar el proveedor seleccionado
         */
        actdesact(id, activar)
        {
            let data = new FormData();
            data.append("id", id);
            data.append("condicion", activar);
            axios.post("compras/proveedores/activar", data).then(res =>
            {
                if (res.data.status)
                {
                    toastr.success("Actualizado correctamente");
                    this.ObtenerProveedores();
                }
                else
                {
                    toastr.error(res.data.mensaje);
                }
            });
        },

        /**
         * Cerrar modal de proveedores
         */
        cerrarModal()
        {
            this.ListBancos = [];
            this.modal = 0;
            this.tituloModal = '';
            this.n_temp = 0;
            let tempBancos = this.ListBancos.filter(b => b.id > 100);

            tempBancos.forEach(b =>
            {
                let s = this.ListBancos.indexOf(b);
                const index = this.ListBancos.indexOf(b);
                this.ListBancos.splice(index, 1);

            });
            this.proveedor = {};
        },

        LimpiarProveedor()
        {
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
                ciudad:"N/D",
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
                tiposdocumentos:"",
                tipos_modificacion:"",
                tipos_documentos: "",
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
            this.list_tipos_documentos= [];
        },

        /**
         * Abrir modal para el registro/actualización del proveedore
         */
        abrirModal(nuevo = true, data = {})
        {
            this.LimpiarProveedor();
            this.modal = 1;
            this.n_temp = 100;
            if (nuevo) // Registar
            {
                this.ListBancos = [];
                this.tituloModal = 'Registrar Nuevo proveedor';
                this.tipoAccion = 1;
                this.list_modificaciones_db = [];
                this.list_tipos_documentos_db = [];
                this.CargarSuministrosGiros("", true);
                this.CargarModificaciones("",true);
                this.CargarTipoDocumento("", true);
            }
            else
            {
                // Actualizar
                this.ListBancos = data["bancos"];
                this.tituloModal = 'Actualizar proveedor';
                this.tipoAccion = 2;
                this.proveedor = {
                    ...data,
                    anexos: "-",
                    modificacion: "ACTUALIZACIÓN DE DATOS"
                };
                this.ValidarRFC();
                this.CargarSuministrosGiros(data.giro, false);
                this.CargarModificaciones(this.proveedor.tipos_modificacion,false);
                this.CargarTipoDocumento(this.proveedor.tipos_documentos, false);
            }

            
        },

        /**
         * Abrir modal de registro de bancos de proveedor
         */
        AbrirModalBancos(nuevo, model)
        {
            this.modalProveedor = 1;
            this.temp_proveedor_condiciones = "-"
            this.temp_proveedor_moneda = "MXN";
            if (nuevo == 1) //Crear nuevo
            {
                this.tipo_guardar = 1;
            }
            else //actualizar
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
        CerrarModalProveedores()
        {
            this.modalProveedor = 0;
            this.ListBancos_temp = [];
            // this.ListBancos = [];
        },

        /**
         * Guardar temporalmente el banco creado
         */
        guardarProveedoresTemp(tipo)
        {
            let t = this;
            if (t.temp_proveedor_banco == '')
            {
                toastr.warning("Ingrese un banco");
                return;
            }
            if (t.temp_proveedor_cuenta == '')
            {
                toastr.warning("Ingrese una cuenta");
                return;
            }
            if (t.temp_proveedor_clabe == '')
            {
                toastr.warning("Ingrese una clabe");
                return;
            }

            if (tipo == 1) //nuevo
            {
                // Guardar temporal
                let nuevo = {
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
            }
            else // actualizar
            {
                let anterior = t.banco_edit;
                let nuevo = {
                    id: t.banco_edit.id,
                    banco: t.temp_proveedor_banco,
                    cuenta: t.temp_proveedor_cuenta,
                    clabe: t.temp_proveedor_clabe,
                    proveedor_id: t.banco_edit.proveedor_id,
                };
                const index = this.ListBancos.findIndex(b => b.id == t.banco_edit.id);
                if (index >= 0)
                {
                    this.ListBancos.splice(index, 1, nuevo);
                }
                else
                {
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
        DesactivarBanco(model)
        {
            if (model.temp)
            {
                //temporal
                const index = this.ListBancos.indexOf(model);
                this.ListBancos.splice(index, 1);
                toastr.success("Banco temporal eliminado");
                this.CerrarModalProveedores();
            }
        },

        /**
         * Descargar el reporte de los proveedores
         */
        DescargarReporte()
        {
            window.open("compras/reportes/catalogoproveedores/" + this.anio, '_blank');
        },

           ValidarRFC()
        {
            let rfc = this.proveedor.rfc;
            this.rfc_valido = this.AuxValidarRFC(rfc, false);
        },

        /**
         * Validar RFC
         */
         AuxValidarRFC(rfc, aceptarGenerico = true) {
                if(!rfc)return false           
                const re = /^([A-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$/;
                var validado = rfc.match(re);

                if (!validado) //Coincide con el formato general del regex?

                    return false;

                //Separar el dígito verificador del resto del RFC
                const digitoVerificador = validado.pop(),
                    rfcSinDigito = validado.slice(1).join(''),
                    len = rfcSinDigito.length,

                    //Obtener el digito esperado
                    diccionario = "0123456789ABCDEFGHIJKLMN&OPQRSTUVWXYZ Ñ",
                    indice = len + 1;
                var suma,
                    digitoEsperado;

                if (len == 12) suma = 0
                else suma = 481; //Ajuste para persona moral

                for (var i = 0; i < len; i++)
                    suma += diccionario.indexOf(rfcSinDigito.charAt(i)) * (indice - i);
                digitoEsperado = 11 - suma % 11;
                if (digitoEsperado == 11) digitoEsperado = 0;
                else if (digitoEsperado == 10) digitoEsperado = "A";

                //El dígito verificador coincide con el esperado?
                // o es un RFC Genérico (ventas a público general)?
                if ((digitoVerificador != digitoEsperado) &&
                    (!aceptarGenerico || rfcSinDigito + digitoVerificador != "XAXX010101000"))
                    return false;
                else if (!aceptarGenerico && rfcSinDigito + digitoVerificador == "XEXX010101000")
                    return false;
                return true
            },

            
            /**Validación TAX ID */
            formatEIN(value){
                let digits = value.replace(/\D/g, ''); // solo numeros
                if (digits.length > 9)  digits = digits.slice(0,9)
                return digits.length > 2 ? digits.slice(0,2) + '-' + digits.slice(2) : digits
            },
            validarTaxIdUSA(taxid){
                const einRegex = /^\d{2}-\d{7}$/;
                return einRegex.test(taxid);
            },


        /**
         * Obtener el historial de los cambios del proveedore seleccioando
         */
        Historial(proveedor)
        {
            this.nombre_proveedor = proveedor.nombre;
            let id = proveedor.id;
            this.ver_modal_historial = true;
            this.isObtenerHistorial_loading = true;
            axios.get("compras/proveedores/historial/" + id).then(res =>
            {
                this.isObtenerHistorial_loading = false;
                if (res.data.status)
                {
                    this.list_historial = res.data.historial;
                }
                else
                {
                    toastr.error(res.data.mensaje);
                }
            });
        },

        CerrarModalHistorial()
        {
            this.ver_modal_historial = false;
            this.list_historial = [];
        },

        /**
         * Descargar el formato de alta/modificacion
         */
        DescargarHistorial(id)
        {
            window.open("compras/proveedores/descargarhistorial/" + id);
        },

        DescargarReporteTemp()
        {
            window.open("compras/reportes/proveedores2");
        },
        CargarSuministrosGiros(giroRegistrado, nuevo=false){

            let suministros =["ALIMENTOS","CALIBRACIÓN DE EQUIPOS","CERTIFICACIÓN","CERTIFICADOS MÉDICOS"
            ,"COMBUSTIBLE","CONSUMIBLES / HERRAMIENTAS","CURSOS","EPP","EQUIPOS DE SEGURIDAD Y/O EMERGENCIA"
            ,"FARMACIA","FLETE / PAQUETERÍA / LOGISTICA","HIDRATACIÓN","HOSPEDAJE","INSTRUMENTOS","LABORATORIO DE ENSAYO"
            ,"LIMPIEZA","MANTENIMIENTO EQUIPOS Y HERRAMIENTAS","MATERIAL CIVIL","MATERIAL ELÉCTRICO","MATERIAL ESTRUCTURAL"
            ,"MATERIAL MECÁNICO","MATERIAL NEUMÁTICO","MATERIAL PARA EMBALAJE","PAPELERÍA / INFORMÁTICA / IMPRENTA","PINTURA"
            ,"PROGRAMA DE PROTECCIÓN CIVIL","PRUEBAS DE CALIDAD (PNDS)","RECOLECCIÓN DE RESIDUOS","SANITARIOS PORTÁTILES"
            ,"SERVICIO GRÚAS / MONTACARGAS","SERVICIOS MAQUINADO","SERVICIOS PARA LIBRANZA","VEHÍCULOS"]
        
            if (!nuevo) {
                if (giroRegistrado && !suministros.some(s => s === giroRegistrado.toUpperCase()))
                {
                    suministros.push(giroRegistrado);
                }
            }

            this.list_giro_suministro = suministros.sort();
          
        },
        CargarModificaciones(smodificaciones, nuevo = false){

            let motivoModificaciones = ["Cambio de domicilio","Cambio datos bancarios"
            ,"Cambio de datos de contacto de ventas","Cambio de datos de contacto de facturación"]

            if (!nuevo) {

                this.list_modificaciones_db = smodificaciones ? smodificaciones.split(',') : []
            }

            this.list_modificaciones = motivoModificaciones
        },
        CargarTipoDocumento(sdocumentos, nuevo = false) {

            let tiposDocumentos = ["Cambio de datos de contacto de ventas", "Caratula bancaría"
                , "Aplicables conforme a los criterios adicionales (PCO-02/F-05)"]

            if (!nuevo) {
                this.list_tipos_documentos_db = sdocumentos ? sdocumentos.split(',') : []
            }

            this.list_tipos_documentos = tiposDocumentos

        },
         openModalExcel() {
                this.showModalExcel = false

                this.$nextTick(()=>{
                    this.showModalExcel = true
                })
            },
            closeModalExcel() {
                this.showModalExcel = false
            },
            async loadExcel(file) {
                if (!file) return
                this.loading = true
                let form = new FormData()
                form.append('file', file)
                try {
                    const res = await axios.post('/read-excel', form, {
                        headers: { 'content-type': 'multipart/form-data' }
                    });

                    if (res.data.status) {
                        let d = res.data.data; // JSON que llega del Excel


                        let giroExcel = (d["Suministrar"] || "").trim().toLowerCase();
                        let match = this.list_giro_suministro.find(g =>
                            g.trim().toLowerCase() === giroExcel
                        );

                        //Datos principales
                        this.proveedor.razon_social = d["Razón Social"]
                        this.proveedor.nombre = d["Nombre Comercial"]
                        this.proveedor.giro = match || ""
                        this.proveedor.nacionalidad = d["Nacionalidad"]
                        this.proveedor.rfc = d["RFC"]
                        this.$nextTick(() => {
                            if (this.proveedor.rfc) {
                                this.rfcTouched = true
                                this.rfc_valido = this.AuxValidarRFC(this.proveedor.rfc)
                            }
                        })
                        this.proveedor.limite_credito =
                            d["Limite de credito"] !== '' && d["Limite de credito"] != null
                                ? d["Limite de credito"]
                                : null
                        //Dirección
                        this.proveedor.calle = d["Calle"]
                        this.proveedor.no_exterior = d["No. Exterior"]
                        this.proveedor.no_interior = d["No.interior"]
                        this.proveedor.cp = d["CP"]
                        this.proveedor.colonia = d["Colonia"]
                        this.proveedor.municipio = d["Alcadía/Municipio"]
                        this.proveedor.estado = d["Estado"];

                        //Datos bancarios
                        this.temp2_proveedor_banco = d["Banco"]
                        this.temp2_proveedor_clabe = d["Cuenta Clabe"]
                        this.temp2_proveedor_cuenta = d["Cuenta Clabe"]
                        this.temp2_proveedor_moneda = d["Tipo de moneda"]

                        //Contacto de ventas
                        this.proveedor.ventas_contacto = d["Contacto de ventas"]
                        this.proveedor.ventas_telefono = d["Teléfono de ventas"]
                        this.proveedor.ventas_celular = d["Celular"]
                        this.proveedor.ventas_correo = d["Correo"]

                        //Contacto de facturación
                        this.proveedor.facturacion_contacto = d["Contacto de facturación"]
                        this.proveedor.facturacion_telefono = d["Teléfono"]
                        this.proveedor.facturacion_celular = d["Celular"]
                        this.proveedor.facturacion_correo = d["correo"]

                        //Modificaciones
                        this.list_modificaciones_db = []
                        if (d["Cambio de domicilio"] === "SI") this.list_modificaciones_db.push(1)
                        if (d["Cambio de datos bancarios"] === "SI") this.list_modificaciones_db.push(2)
                        if (d["Cambio de datos de contacto de ventas"] === "SI") this.list_modificaciones_db.push(3)
                        if (d["Cambio de datos de contacto de facturacion"] === "SI") this.list_modificaciones_db.push(4)

                        //Documentos
                        this.list_tipos_documentos_db = [];
                        if (d["Constancia de situación fiscal"] === "SI") this.list_tipos_documentos_db.push(1)
                        if (d["Caratula Bancaria"] === "SI") this.list_tipos_documentos_db.push(2)

                        toastr.success("Datos cargados desde Excel")
                    } else {
                        toastr.error("Error al procesar el Excel")
                    }

                } catch (error) {
                    toastr.error("Error al cargar el archivo")
                }finally {
                    this.loading = false
                    this.closeModalExcel()
                }
            },
            
            async descargarExcel() {
                this.isDownloading = true
                try {
                    this.form = {
                        razon_social: this.proveedor.razon_social,
                        nombre: this.proveedor.nombre,
                        rfc: this.proveedor.rfc,
                        taxid: this.proveedor.taxid,
                        giro: this.proveedor.giro,
                        nacionalidad: this.proveedor.nacionalidad,
                        calle: this.proveedor.calle,
                        no_exterior: this.proveedor.no_exterior,
                        no_interior: this.proveedor.no_interior,
                        cp: this.proveedor.cp,
                        colonia: this.proveedor.colonia,
                        municipio: this.proveedor.municipio,
                        ciudad: this.proveedor.ciudad,
                        estado: this.proveedor.estado,
                        temp2_proveedor_banco: this.temp2_proveedor_banco,
                        temp2_proveedor_clabe: this.temp2_proveedor_clabe,
                        temp2_proveedor_moneda: this.temp_proveedor_moneda,
                        limite_credito: this.proveedor.limite_credito,
                        ventas_contacto: this.proveedor.ventas_contacto,
                        ventas_telefono: this.proveedor.ventas_telefono,
                        ventas_celular: this.proveedor.ventas_celular,
                        ventas_correo: this.proveedor.ventas_correo,
                        facturacion_contacto: this.proveedor.facturacion_contacto,
                        facturacion_telefono: this.proveedor.facturacion_telefono,
                        facturacion_celular: this.proveedor.facturacion_celular,
                        facturacion_correo: this.proveedor.facturacion_correo,
                    }
                    const response = await axios.post(
                        '/proveedor/export',
                        this.form,
                        { responseType: 'blob' }
                    );
                    const url = window.URL.createObjectURL(response.data);
                    const link = document.createElement('a');
                    link.href = url;
                    link.download = 'PCO-02_F-01 Alta y Modificacion de Proveedores NR02.xlsx';
                    link.click();
                } catch (error) {
                    toastr.error("Error al descargar el archivo");
                } finally {
                    this.isDownloading = false;
                }
            }
    },
    mounted()
    {
        this.PermisosCrud = Utilerias.getCRUD(this.$route.path)
            this.ObtenerProveedores()
            this.generateYears()
            this.setperiodCurrentYear()
    }
}
</script>
