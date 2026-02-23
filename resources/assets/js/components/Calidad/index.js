

const DashBoard = r => require.ensure([],()=> r(require('./Dashboard/Dashborad.vue')), 'calidad')
// Nuevos equipos de calibracion
const EquiposCalib2 = r => require.ensure([],()=> r(require('./Calibracion/EquiposCalibracion2.vue')), 'calidad')
//procedimietos
const procedures = r => require.ensure([],()=> r(require('./Procedure/procedure.vue')), 'calidad')
const createProcedure = r =>  require.ensure([],()=> r(require('./Procedure/create.vue')), 'calidad')
const RetrievePQR = r => require.ensure([],()=>r(require('./Procedure/retrievePQR.vue')), 'calidad')
const rutas = [
	{ path: '/calidad/dashboard', component: DashBoard },
	{ path: '/calidad/calib/equipos2', component: EquiposCalib2 },
	{ path: '/calidad/procedure', component: procedures },
	{ path: '/calidad/procedure/create', component: createProcedure},
	{ path:	'/calidad/procedure/:id', name: 'RetrievePQR', component:RetrievePQR},
	{ path: '/calidad/procedure/:id', name:'UpdateProcedure', component:createProcedure}
	
]

export default rutas
