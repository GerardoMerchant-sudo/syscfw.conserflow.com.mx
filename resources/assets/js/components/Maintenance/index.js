
const Dashboard = r => require.ensure([],()=> r(require('./index.vue')), 'maintenance')
const Applications = r =>  require.ensure([],()=> r(require('./Applications/Applications.vue')),'maintenance')
const CreateApplication = r => require.ensure([],()=>r(require('./Applications/CreateApplication.vue')),'maintenance')
const Low = r => require.ensure([],()=>r(require('./Applications/Low.vue')),'maintenance')
const CreateLow = r => require.ensure([],()=>r(require('./Applications/CreateLow.vue')), 'maintenance')
const Binnacle = r => require.ensure([],()=>r(require('./Applications/Binnacle.vue')),'maintenance')

const rutas = [
    {   path:   '/maintenance'   ,component:Dashboard},
    {   path:   '/application',    component:Applications },
    {   path:   '/maintenance/create', component:CreateApplication},
    {   path:   '/maintenance/low', component:Low},
    {   path:   '/maintenance/createLow', component:CreateLow},
    {   path:   '/maintenance/binnacle', component:Binnacle},
    {   path:   '/maintenance/application/:id', name:'UpdateApp', component:CreateApplication},
    {   path:   '/maintenance/low/:id', name:'UpdateLow', component:CreateLow}
]


export  default rutas 