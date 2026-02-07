<template>
    <main class="main">
        <div>
            <div class="card mx-3 mt-3">
                <div class="card-header">
                    <i class="fas fa-cogs fa-2x text-primary"></i>
                    <span class="h5">{{ isEdit ? 'Editar Competencia': 'Crear Competencia' }}</span>
                    <button type="button" class="btn btn-primary float-right" @click="back"><i
                            class="fas fa-arrow-left mr-2"></i>Atrás</button>
                </div>
                <div class="card-body">
                    <div class="row align-items-end">
                        <div class="col-md-8 offset-md-2">
                            <div class="form-floating mb-3">
                                <select class="form-select" :disabled="isEdit"  style="cursor: pointer;" id="type" v-model="form.type" placeholder="Selecione una Competencia">
                                    <option value="" disabled>Seleccione una Competencia</option>
                                    <option value="CERTIFICATION">Certificación</option>
                                    <option value="COURSE">Curso</option>
                                    <option value="DIPLOMA">Diplomado</option>
                                    <option value="EXPERIENCE">Experiencia Laboral</option>
                            </select>
                            <label for="type">Tipo de Competencia <span style="color: red;">*</span></label>
                        </div>
                    </div>
                    </div>
                        

            
            <div v-if="form.type" class=" row mb-3">
                    <!-- Select -->
                    <div class="col-md-8 offset-md-2 ">
                    <div class="form-floating">
                        <select
                        name="empleado_id"
                        v-validate="'required'"
                        data-vv-as="Empleados"
                        :disabled="isEdit"
                        class="form-select"
                        id="employee"
                        v-model="form.empleado_id"
                        style="cursor: pointer;"
                        >
                        <option value="" disabled>
                            Seleccionar empleado
                        </option>
                        <option
                            v-for="empleado in empleados"
                            :key="empleado.id"
                            :value="empleado.id"
                        >
                            {{ empleado.full_name }}
                        </option>
                        </select>
                        <label for="employee">Selecciona un empleado <span style="color: red;">*</span></label>
                        <span class="text-danger">{{ errors.first('empleado_id') }}</span>
                    </div>
                    </div>
                </div>
                    <div v-if="form.type === 'CERTIFICATION'" class="container mb-3 opacity-75">
                        <div class="row">
                            <div class="col-4">
                                <div class="docs-note">
                                    <div class="docs-title">
                                        Documentos permitidos
                                    </div>

                                    <div class="docs-items">
                                        <span>DC3</span>
                                        <span>Certificación oficial</span>
                                        <span>Licencia</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="form.type === 'COURSE'" class="container mb-3 opacity-75">
                        <div class="row">
                            <div class="col-4">
                                <div class="docs-note">
                                    <div class="docs-title">
                                        Documentos permitidos
                                    </div>
                                    <div class="docs-items">
                                        <span>Capacitación</span>
                                        <span>Taller</span>
                                        <span>Curso</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                    
                    <div v-if="form.type === 'CERTIFICATION'">
                        <div class="container">
                            <div class="row mb-3">
                                <div class="col">
                                    <div class="form-floating mb-2">
                                    <select
                                        name="nameCompetence"
                                        v-validate="'required'"
                                        data-vv-as="Nombre del Curso"
                                        class="form-select"
                                        id="courseName"
                                        v-model="form.nameCompetence"
                                    >
                                        <option disabled value="">Selecciona un curso</option>
                                        <option
                                        v-for="(course, index) in courses"
                                        :key="index"
                                        :value="course"
                                        >
                                        {{ course }}
                                        </option>
                                    </select>
                                    <label for="courseName">Nombre<span style="color: red;">*</span>
                                    </label>
                                    <span class="text-danger">{{ errors.first('nameCompetence') }}</span>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-floating mb-2">
                                        <input 
                                            name="folio" 
                                            v-validate="'required'" 
                                            class="form-control" 
                                            id="folio" 
                                            v-model="form.folio" 
                                            placeholder="Folio"
                                            data-vv-as="Folio"
                                            >
                                        <label for="folio">Folio / Certificado <span style="color: red;">*</span></label>
                                        <span class="text-danger">{{ errors.first('folio') }}</span>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-floating mb-2">
                                        <input 
                                            name="institution" 
                                            v-validate="'required'"
                                            class="form-control" 
                                            id="institution" 
                                            v-model="form.institution"
                                            placeholder="Institución"
                                            data-vv-as="Institución"
                                            >
                                            <label for="institution">Institución emisora <span style="color: red;">*</span></label>
                                            <span class="text-danger">{{ errors.first('institution')}}</span>                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="container">
                            <div class="row mb-3">
                                <div class="col">
                                    <div class="form-floating mb-2">
                                        <input 
                                            name="startDate" 
                                            v-validate="'required'" 
                                            type="date" 
                                            class="form-control" 
                                            id="startDate" 
                                            v-model="form.startDate"
                                            data-vv-as="Fecha emisión"
                                            >
                                        <label for="startDate">Fecha emisión <span style="color: red;">*</span></label>
                                        <small class="opacity-75">
                                            Nota: Se tomará el último día del curso como fecha de emisión
                                        </small>
                                        <span class="text-danger">{{ errors.first('startDate') }}</span>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-floating mb-2">
                                        <input type="date" class="form-control" id="validity" v-model="form.endDate">
                                        <label for="validity">Fecha vencimiento</label>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-floating mb-2">
                                        <input 
                                            name="hours" 
                                            v-validate="'required'"  
                                            type="number" 
                                            class="form-control" 
                                            id="hours" 
                                            v-model="form.hours"
                                            placeholder="Duración (Horas)"
                                            data-vv-as="Duración"
                                            >
                                            <label for="hours">Duración (Horas)</label>
                                            <span class="text-danger">{{ errors.first('hours') }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="container">
                            <div class="row mb-3">
                                <div class="col">
                                    <div class="form-floating mb-2">
                                        <input 
                                            type="text"  
                                            v-model="form.instructor" 
                                            class="form-control" 
                                            id="instructor"
                                            placeholder="Instructor" >
                                        <label for="instructor">Instructor</label>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-floating">
                                    <select
                                        name="worker_category"
                                        v-validate="'required'"
                                        data-vv-as="Categoria"
                                        class="form-select"
                                        id="employee"
                                        v-model="form.worker_category"
                                        style="cursor: pointer;"
                                        >
                                    <option value="" disabled>
                                        Seleccionar Categoria
                                    </option>

                                    <option
                                        v-for="category in list_puestos"
                                        :key="category.id"
                                        :value="category.id"
                                    >
                                        {{ category.nombre }}
                                    </option>
                                    </select>
                                    <label for="employee">Selecciona la Categoria <span style="color: red;">*</span></label>
                                    <span class="text-danger">{{ errors.first('worker_category') }}</span>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div v-if="form.type === 'COURSE'">
                        <div class="container">
                            <div class="row mb-3">
                                <div class="col">
                                    <div class="form-floating mb-2">
                                        <input 
                                            class="form-control" 
                                            id="certName" 
                                            v-model="form.nameCompetence"
                                            placeholder="Nombre" 
                                            v-validate="'required'" 
                                            name="nameCompetence"
                                            data-vv-as="Nombre de la certificación"
                                            >
                                        <label for="certName">Nombre  <span style="color: red;">*</span></label>
                                        <span class="text-danger">{{ errors.first('nameCompetence') }}</span>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-floating mb-2">
                                        <input 
                                            class="form-control" 
                                            id="courseInstitution" 
                                            v-model="form.institution"
                                            placeholder="Institución"
                                            name="institution"
                                            v-validate="'required'"
                                            data-vv-as="Institución"
                                            >
                                            <label for="courseInstitution">Institución / proveedor <span style="color: red;">*</span></label>
                                            <span class="text-danger">{{errors.first('institution') }}</span>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-floating mb-2">
                                        <input   
                                            type="number" 
                                            class="form-control" 
                                            id="hours" 
                                            v-model="form.hours"
                                            placeholder="Duración (Horas)"
                                            >
                                            <label for="hours">Duración (Horas)</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="container">
                            <div class="row mb-3">
                                <div class="col">
                                    <div class="form-floating mb-2">
                                        <select 
                                            id="modality" v-model="form.modality"  class="form-select" style="cursor: pointer;" placeholder="Modalidad">
                                            <option value="" disabled="">Selecione Modalidad</option>
                                            <option value="Presencial">Presencial</option>
                                            <option value="Online">Online</option>
                                            <option value="Híbrido">Híbrido</option>
                                        </select>
                                        <label for="modality">Modalidad <span style="color: red;">*</span></label>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-floating mb-2">
                                        <input 
                                            name="startDate" 
                                            v-validate="'required'" 
                                            type="date" 
                                            class="form-control" 
                                            id="startDate" 
                                            v-model="form.startDate"
                                            data-vv-as="Fecha inicio"
                                            >
                                        <label for="startDate">Fecha Inicio <span style="color: red;">*</span></label>
                                        <span class="text-danger">{{ errors.first('startDate') }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="container">
                            <div class="row mb-3">
                                <div class="col">
                                    <div class="form-floating mb-2">
                                        <textarea class="form-control" id="courseDesc" v-model="form.tems"
                                            style="height:100px"></textarea>
                                        <label for="courseDesc">Temas / competencias</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="form.type === 'DIPLOMA'">
                        <div class="container">
                            <div class="row mb-3">
                                <div class="col">
                                    <div class="form-floating mb-2">
                                        <input 
                                            class="form-control" 
                                            id="diplomaName" 
                                            v-model="form.nameCompetence"
                                            placeholder="Diplomado"
                                            name="nameCompetence"
                                            v-validate="'required'"
                                            data-vv-as="Nombre del Diplomado"
                                            >
                                            <label for="diplomaName">Nombre del diplomado <span style="color: red;">*</span></label>
                                            <span class="text-danger">{{ errors.first('nameCompetence') }}</span>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-floating mb-2">
                                        <input 
                                            class="form-control" 
                                            id="diplomaInstitution" 
                                            v-model="form.institution"
                                            placeholder="Institución"
                                            name="institution"
                                            v-validate="'required'"
                                            data-vv-as="Institución emisora"
                                            >
                                            <label for="diplomaInstitution">Institución emisora <span style="color: red;">*</span></label>
                                            <span class="text-danger">{{ errors.first('institution') }}</span>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-floating mb-2">
                                        <input 
                                            name="hours" 
                                            v-validate="'required'"  
                                            type="number" 
                                            class="form-control" 
                                            id="hours" 
                                            v-model="form.hours"
                                            placeholder="Duración (Horas)"
                                            data-vv-as="Duración"
                                            >
                                            <label for="hours">Duración (Horas)</label>
                                            <span class="text-danger">{{ errors.first('hours') }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="container">
                            <div class="row mb-3">
                                <div class="col">
                                    <div class="form-floating mb-2">
                                        <select  id="modality" v-model="form.modality"  class="form-select" style="cursor: pointer;" placeholder="Modalidad">
                                            <option value="" disabled="">Selecione Modalidad</option>
                                            <option value="Presencial">Presencial</option>
                                            <option value="Online">Online</option>
                                            <option value="Híbrido">Híbrido</option>
                                        </select>
                                        <label for="modality">Modalidad <span style="color: red;">*</span></label>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-floating mb-2">
                                        <input 
                                            type="date" 
                                            class="form-control" 
                                            id="diplomaStart"
                                            v-model="form.startDate"
                                            name="startDate"
                                            v-validate="'required'"
                                            data-vv-as="Fecha inicio"
                                            >
                                            <label for="diplomaStart">Fecha inicio <span style="color: red;">*</span></label>
                                            <span class="text-danger">{{ errors.first('startDate') }}</span>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-floating mb-2">
                                        <input 
                                            type="date" 
                                            class="form-control" 
                                            id="diplomaEnd" 
                                            v-model="form.endDate"
                                            name="endDate"
                                            v-validate="'required'"
                                            data-vv-as="Fecha finalización"
                                            >
                                        <label for="diplomaEnd">Fecha finalización <span style="color: red;">*</span></label>
                                        <span class="text-danger">{{errors.first('endDate') }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="container">
                            <div class="row mb-3">
                                <div class="col">
                                    <div class="form-floating mb-2">
                                        <textarea class="form-control" id="diplomaDesc" v-model="form.description"
                                        style="height: 100px"></textarea>
                                        <label for="diplomaDesc">Áreas de conocimiento <span style="color: red;"><span style="color: red;">*</span></span></label>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-floating mb-2">
                                        <select  id="certificationGet" class="form-select" style="cursor: pointer;" v-model="form.certificate_type">
                                            <option value="" disabled="">Selecione certificación</option>
                                            <option value="Diploma">Diploma</option>
                                            <option value="Constancia">Constancia</option>
                                        </select>
                                        <label for="certificationGet">Seleccione Certificación <span style="color: red;"><span style="color: red;">*</span></span></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div v-if="form.type === 'EXPERIENCE'">
                            <div class="container">
                                <div class="row mb-3">
                                    <div class="col">
                                        <div class="form-floating mb-2">
                                            <input 
                                                class="form-control" 
                                                id="expCompetence" 
                                                v-model="form.nameCompetence"
                                                placeholder="Competencia"
                                                name="nameCompetence"
                                                v-validate="'required'"
                                                >
                                            <label for="expCompetence">Nombre <span style="color: red;">*</span></label>
                                            <span class="text-danger">{{ errors.first('nameCompetence') }}</span>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-floating mb-2">
                                            <textarea 
                                                class="form-control" 
                                                id="expDescription" 
                                                v-model="form.description"
                                                style="height: 100px" 
                                                placeholder="Descripción de la actividad"
                                                name="description"
                                                v-validate="'required'"
                                                data-vv-as="Descripción de la actividad"
                                                ></textarea>
                                                <label for="expDescription">Descripción de la actividad <span style="color: red;">*</span></label>
                                                <span class="text-danger">{{ errors.first('description') }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="container">
                            <div class="row mb-3">
                                <div class="col">
                                    <div class="form-floating mb-2">
                                        <input 
                                            class="form-control" 
                                            id="facility" 
                                            v-model="form.facility"
                                            placeholder="facility"
                                            name="facility"
                                            v-validate="'required'"
                                            data-vv-as="Instalaciones"
                                            >
                                        <label for="facility">Instalaciones <span style="color: red;">*</span></label>
                                        <span class="text-danger">{{ errors.first('facility') }}</span>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-floating">
                                    <select
                                    class="form-select"
                                    id="employee"
                                    name="worker_category"
                                    v-validate="'required'"
                                    data-vv-as="Categoria"
                                    v-model="form.worker_category"
                                    style="cursor: pointer;"
                                    >
                                    <option value="" disabled>
                                        Seleccionar Categoria
                                    </option>

                                    <option
                                        v-for="category in list_puestos"
                                        :key="category.id"
                                        :value="category.id"
                                    >
                                        {{ category.nombre }}
                                    </option>
                                    </select>
                                    <label for="employee">Selecciona la Categoria <span style="color: red;">*</span></label>
                                    <span class="text-danger">{{ errors.first('worker_category') }}</span>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="container">
                            <div class="row mb-3">
                                <div class="col">
                                    <div class="form-floating">
                                    <select
                                    class="form-select"
                                    id="proyec"
                                    name="proyect"
                                    v-validate="'required'"
                                    data-vv-as="Proyecto"
                                    v-model="form.proyect"
                                    style="cursor: pointer;"
                                    >
                                    <option value="" disabled>
                                        Seleccionar Proyecto
                                    </option>

                                    <option
                                        v-for="proyect in listaProyect"
                                        :key="proyect.id"
                                        :value="proyect.id"
                                    >
                                        {{ proyect.nombre_corto }}
                                    </option>
                                    </select>
                                    <label for="employee">Seleccionar Proyecto<span style="color: red;">*</span></label>
                                    <span class="text-danger">{{ errors.first('proyect') }}</span>
                                </div>
                                </div>
                                <div class="col">
                                        <div class="form-floating mb-2">
                                            <input 
                                                class="form-control" 
                                                id="expInstitution" 
                                                v-model="form.institution"
                                                placeholder="Empresa"
                                                name="institution"
                                                v-validate="'required'"
                                                data-vv-as="Área / Empresa"
                                                >
                                            <label for="expInstitution">Área / Empresa <span style="color: red;">*</span></label>
                                            <span class="text-danger">{{ errors.first('institution') }}</span>
                                        </div>
                                </div>
                                <div class="col">
                                    <div class="form-floating mb-2">
                                        <input 
                                            class="form-control" 
                                            id="expPeriod" 
                                            v-model="form.period" 
                                            placeholder="Periodo"
                                            name="period"
                                            v-validate="'required'"
                                            >
                                        <label for="expPeriod">Periodo <span style="color: red;">*</span></label>
                                        <span class="text-danger">{{ errors.first('period') }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="form.type">
                        <div class="container">
                            <div class="row mb-4">
                                <div class="col-6">
                                    <div class="form-floating">
                                        <input 
                                            type="file" 
                                            ref="file_competence"  
                                            class="form-control mb-2" 
                                            accept="application/pdf" 
                                            id="document"
                                            name="file_competence"
                                            data-vv-as="Documento"
                                            :v-validate="isEdit ? '' : 'required'"
                                            >
                                            <label for="document">Evidencia<span style="color: red;">*</span></label>
                                            <span class="text-danger">{{ errors.first('file_competence') }}</span>
                                    </div>
                                </div>
                            </div>
                            <button
                            class="btn btn-primary mt-3 float-right"
                            @click="submitCompetence"
                            :disabled="isLoading"
                            >
                            <span v-if="isLoading">
                                <span
                                class="spinner-grow spinner-grow-sm me-2"
                                role="status"
                                aria-hidden="true"
                                ></span>
                                {{isEdit ? 'Actualizando...' : 'Creando...'}}
                            </span>
                            <span v-else>
                                {{ isEdit ? 'Actualizar Competencia' : 'Crear Competencia'  }}
                            </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<script>


export default {
    data() {
        return {
            form: {
                empleado_id: null,
                type: null,
                nameCompetence: null,
                institution: null,
                description:null,
                certificate_type: null,
                startDate: null,
                worker_category:null,
                endDate: null,
                validity: null,
                proyect:null,
                hours: null,
                modality: null,
                folio: null,
                instructor: null,
                facility: null,
                period: null,
                observations: null,

            },
            empleados: [],
            forms: {
                empleado_id: null,
            },
            typeCompetence:[],
            isLoading: false,
            list_puestos:[],
            listaProyect:[],
            courses: ["Seguridad, Salud en el Trabajo y Protección Ambiental",
                "Reglamento Federal de Seguridad e Higiene y Medio Ambiente en el Trabajo",
                "Reglamento de Seguridad e Higiene de Petróleos Mexicanos y Organismos Subsidiarios",
                "Básico de Seguridad",
                "Conceptos básicos y definiciones sobre planes de respuesta a emergencias, qué hacer durante una emergencia",
                "Conceptos básicos sobre Protección Ambiental",
                "Generalidades de los Primeros Auxilios, Hemorragías, Reanimación Cardiopulmonar (RCP)",
                "Uso y Manejo de Extintores",
                "Manejo a la Defensiva",
                "Sistema de Permisos de Trabajos con Riesgo",
                "Manejo de Equipos de Respiración Autónoma",
                "Equipo de Respiración Autónoma",
                "Uso de Equipo de Detección de Gases, Explosímetro, Oxígeno y Toxicidad",
                "Sobrevivencia en el Mar",
                "Hoja de Datos de Seguridad de las Sustancias Involucradas en los Trabajos del Contrato",
                "Clasificación y Manejo de Residuos Peligrosos (NOM´s)",
                "Disposición de Detección y Primeros Auxilios",
                "Ley General del Equilibrio Ecológico y la Protección al Ambiente y sus Reglamentos",
                "Ley General para la Prevención y Gestión Integral de los Residuos y su Reglamento",
                "Teoría de la Combustión",
                "Clasificación y Uso de Equipos de Protección Respiratoria",
                "Riesgos Atmosféricos",
                "Riesgos en Espacios Confinados",
                "Identificación de Áreas de Riesgo en el Trabajo",
                "Procedimientos Críticos",
                "Análisis de Seguridad en el Trabajo (AST)",
                "Auditorías Efectivas",
                "Metodologías de Análisis de Causa Raíz",
                "Primeros Auxilios",
                "Anexo SSPA",
                "Reglamento Federal de Seguridad y Salud en el Trabajo",
                "Protección Ambiental",
                "Plan de Respuesta a Emergencias (PRE)",
                "Disciplina Operativa",
                "RIGGER",
                "Verificador de Gases",
                "Manejo y Almacenamiento de Materiales Peligrosos para los Responsables de estos Trabajos",
                "Mantenimiento, Cuidado y Almacenamiento de las Herramientas y Equipos de Trabajo",
                "Uso, Conservación, Mantenimiento, Almacenamiento, Reposición y Disposición Final del Equipo de Protección Personal Básico y Específico",
                "Capacitación y Adiestramiento en Combate de Incendio",
                "NOM-009-STPS-2011 Condiciones de Seguridad para Realizar Trabajos en Altura",
                "Manejo Integral de los Residuos Peligrosos",
                "Prevención y Lucha Contra Incendio",
                "Programa de Seguridad e Higiene en el Trabajo",
                "Montador de Estructura y Tubería",
                "NOM-017-STPS-2008 Equipo de Protección Personal, Selección, Uso y Manejo en los Centros de Trabajo",
                "NOM-027-STPS-2008 Actividades de Soldadura y Corte, Condiciones de Seguridad e Higiene",
                "NOM-029-STPS-2011 Mantenimiento a Instalaciones Eléctricas en el Trabajo y Condiciones de Seguridad",
                "Básico sobre Sulfuro de Hidrógeno (H2S)",
                "Bloqueo y Etiquetado (LOTO)",
                "Seguridad en Trabajos Eléctricos",
                "Electricidad",
                "Trabajos Seguros de Corte y Soldadura",
                "Soldador Especialista",
                "Seguridad en los Trabajos de Sand-Blast y Pintura",
                "Armado y Desarmado de Andamios",
                "Seguridad en el Manejo de Herramientas Manuales y de Potencia",
                "Inspector de Andamios (Verificador)",
                "Operación de Grúa y Plan de Izaje",
                "Trabajos en Alturas",
                "Maniobras e Izaje con Grúas",
                "Mantenimiento u Operación de las Instalaciones Eléctricas"
            ],
            autoDate:true
            
        }
    },
    mounted() {
        this.init()
    },
    computed:{
        isEdit(){
            return !!this.$route.params.id  
        }
    },
    watch: {
        'form.startDate'(newDate) {
            if (
                this.form.type === 'CERTIFICATION' &&
                newDate &&
                this.autoEndDate
            ) {
                const date = new Date(newDate)
                date.setFullYear(date.getFullYear() + 2)

                this.form.endDate = date.toISOString().slice(0, 10)
            }
        },

        'form.endDate'() {
            // si el usuario toca endDate manualmente
            this.autoEndDate = false
        },

        'form.type'(newType, oldType) {
            if (this.isEdit) return

            if (newType !== oldType) {
                this.autoEndDate = true // 🔥 reset al cambiar tipo
                this.resetFormByType(newType)
                this.$validator.reset()
            }
        }
    }   ,

    methods: 
    {
        init(){
            this.getEmpleados()
            this.positio()
            this.allproyects()
            if(this.isEdit){
                this.loadCompetence()
            }
        },
        async submitCompetence(){
            this.isLoading = true
            try {
                let isValid = await this.$validator.validate();
                if(!isValid) return;
                let url = 'rh/competence'
                if (!this.isEdit &&  this.$refs.file_competence.files.length == 0) {
                    toastr.warning("Seleccione un documento")
                    return
                }
                const data = new FormData()
                if (this.isEdit) {
                    url = `rh/competence/${this.$route.params.id}`
                    data.append('_method', 'PUT')
                }
                    data.append('empleado_id',this.form.empleado_id)
                    data.append('type', this.form.type)
                data.append('nameCompetence', this.form.nameCompetence)
                data.append('aux_certificado', 1)
                if(this.$refs.file_competence.files.length > 0){
                    data.append('certificado', this.$refs.file_competence.files[0   ]) 
                }
                switch (this.form.type) {
                    case 'CERTIFICATION':
                        data.append('folio', this.form.folio)
                        data.append('institution', this.form.institution)
                        data.append('instructor', this.form.instructor)
                        data.append('startDate', this.form.startDate)
                        data.append('endDate', this.form.endDate)
                        data.append('hours', this.form.hours)
                        data.append('worker_category', this.form.worker_category)
                        break;
                    case 'COURSE':
                        data.append('institution', this.form.institution)
                        data.append('hours', this.form.hours)
                        data.append('startDate', this.form.startDate)
                        data.append('modality', this.form.modality)
                        data.append('description', this.form.description)
                        break;
                    case 'DIPLOMA':
                        data.append('institution', this.form.institution)
                        data.append('hours', this.form.hours)
                        data.append('modality', this.form.modality)
                        data.append('description', this.form.description)
                        data.append('startDate', this.form.startDate)
                        data.append('endDate', this.form.endDate)
                        data.append('certificate_type', this.form.certificate_type)
                        break;
                    case 'EXPERIENCE':
                        data.append('description', this.form.description)
                        data.append('facility', this.form.facility)
                        data.append('worker_category', this.form.worker_category)
                        data.append('proyect', this.form.proyect)
                        data.append('institution', this.form.institution)
                        data.append('period', this.form.period)
                        break;
                }
                const response = await axios.post(url, data)
                    console.log(response)
                    this.competence = response.data
                    toastr.success(this.isEdit ? 'Se Actualizo Correctamente' : 'Se Creo Correctamente')
                    this.$router.go(-1)
            } catch (error) {
                console.error('ERROR AXIOS:', error)

                if (error.response) {
                    if (error.response.data?.errors) {
                        const errors = error.response.data.errors
                        const firstError = Object.values(errors)[0][0]
                        toastr.error(firstError)
                    } else if (error.response.data?.message) {
                        toastr.error(error.response.data.message)
                    } else {
                        toastr.error('Error al guardar la competencia')
                    }
                } else {
                    toastr.error('Error de servidor o conexión')
                }
            }
            finally {
                this.isLoading = false
            }
        },

        async loadCompetence(){
            try {
                const {data} = await axios.get(`/rh/competence/${this.$route.params.id}`)
                const c  = data

                const typeMap = {
                    'Certificación': 'CERTIFICATION',
                    'Curso': 'COURSE',
                    'Diplomado': 'DIPLOMA',
                    'Habilidad': 'SKILL',
                    'Experiencia Laboral': 'EXPERIENCE'
                }
                

                this.form = {
                    empleado_id:c.empleado_id, 
                    nameCompetence: c.nameCompetence, 
                    type: typeMap[c.type],
                    institution: c.institution,
                    description: c.description,
                    certificate_type: c.certificate_type,
                    startDate: c.startDate,
                    worker_category: c.worker_category,
                    endDate: c.endDate,
                    validity: c.validity,
                    proyect: c.proyect,
                    hours: c.hours,
                    modality: c.modality,
                    folio: c.folio,
                    instructor: c.instructor,
                    facility: c.facility,
                    period: c.period,
                    observations: c.observations
                }
            } catch (error) {
                toastr.error("Error al cargar la competencia")
                this.back()
            }
        },

        resetFormByType(type) {
            const baseForm = {
                empleado_id: this.form.empleado_id, 
                type: type,
                nameCompetence: null,
                institution: null,
                description: null,
                certificate_type: null,
                startDate: null,
                endDate: null,
                validity: null,
                proyect: null,
                hours: null,
                modality: null,
                folio: null,
                instructor: null,
                facility: null,
                period: null,
                worker_category: null,
                observations: null
            }

            this.form = { ...baseForm }

            if (this.$refs.file_competence) {
                this.$refs.file_competence.value = null
            }
        },

        async getEmpleados() {
            try {
                const response = await axios.get('empleados')
                this.empleados = response.data
            } catch (error) {
                throw error(message.error)
            }
        },
        async positio(){
            try {
                const response = await axios.get("rh/catalogos/puestosnombre")
                this.list_puestos = response.data.puestos
            } catch (error) {
                toastr.error(error.data.message)
            }
        },
        async allproyects(){
            try {
                const response = await axios.get('generales/proyectos/asd')
                this.listaProyect = response.data.proyectos
            } catch (error) {
                toastr.error(error.data.message)
            }
        },  

        back() {
            this.$router.go(-1)
        }

    }
    }
</script>
<style scoped>
.docs-note {
  background: #f6f7f8;
  border: 1px solid #e0e0e0;
  border-radius: 14px;
  padding: 12px 14px;
}

.docs-title {
  font-size: 14px;
  font-weight: 600;
  color: #555;
  margin-bottom: 6px;
}

.docs-items {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.docs-items span {
  font-size: 13px;
  color: #666;
  background: #ffffff;
  padding: 4px 10px;
  border-radius: 999px;
  border: 1px solid #e3e3e3;
}


</style>
