import { Component, OnInit } from '@angular/core';
import { TicketsService } from 'src/app/services/tickets.service';

@Component({
  selector: 'app-lista-queries',
  templateUrl: './lista-queries.component.html',
  styleUrls: ['./lista-queries.component.css']
})
export class ListaQueriesComponent implements OnInit {
  obtenerTickets = 'http://localhost:4000/';
  desperfectosPorTitulo = 'http://localhost:4000/desperfectosPorTitulo';
  desperfectosEnOctubre = 'http://localhost:4000/desperfectosEnOctubre';
  desperfectosPorOficina = 'http://localhost:4000/desperfectosPorOficina';
  aiendeMasTickets = 'http://localhost:4000/aiendeMasTickets';
  sinResolver = 'http://localhost:4000/sinResolver';
  clientesCercaDeOficinas = 'http://localhost:4000/clientesCercaDeOficinas';
  clientesEnBA = 'http://localhost:4000/clientesEnBA';
  cantidadPlanNormalOSuperPack = 'http://localhost:4000/cantidadPlanNormalOSuperPack';
  promedioPrecioPlan = 'http://localhost:4000/promedioPrecioPlan';
  incrementoPlanNormal = 'http://localhost:4000/incrementoPlanNormal';
  incrementoPlanSuperPack = 'http://localhost:4000/incrementoPlanSuperPack';
  maxPlanNormal = 'http://localhost:4000/maxPlanNormal';
  minPlanSuperPack = 'http://localhost:4000/minPlanSuperPack';
  agregarCampoVip = 'http://localhost:4000/agregarCampoVip';
  renombrarCampoVip = 'http://localhost:4000/renombrarCampoVip';
  borrarCampoVip = 'http://localhost:4000/borrarCampoVip';
  crearIndiceCampoNombre = 'http://localhost:4000/crearIndiceCampoNombre';
  indices = 'http://localhost:4000/indices';
  borrarIndice = 'http://localhost:4000/borrarIndice';
  crearIndiceTexto = 'http://localhost:4000/crearIndiceTexto';
  contienePalabraHd = 'http://localhost:4000/contienePalabraHd';
  clientesConCanalSpace = 'http://localhost:4000/clientesConCanalSpace';
  pendientesConVacaciones = 'http://localhost:4000/pendientesConVacaciones';
  response = "";
  query = "";

  constructor(private ticketService: TicketsService) { }

  ngOnInit(): void {
    this.getTickets();
  }

  getTickets(){ 
    this.ticketService.getValues(this.obtenerTickets).subscribe((data) => {
      this.response = JSON.stringify(data, null, 2);
      this.query = "ticket.find()";
    }, error => {
      console.log(error);      
    })
  }

  getDesperfectosPorTitulo(){ 
    this.ticketService.getValues(this.desperfectosPorTitulo).subscribe((data) => {
      this.response = JSON.stringify(data, null, 2);
      this.query = "ticket.aggregate([{$match:{tipo:'desperfecto'}},{$group:{_id:$problema,cantidad: {$sum : 1}}}])";
    }, error => {
      console.log(error);      
    })
  }
  
  getDesperfectosEnOctubre(){ 
    this.ticketService.getValues(this.desperfectosEnOctubre).subscribe((data) => {
      this.response = JSON.stringify(data, null, 2);
      this.query = "ticket.aggregate([{$match:{$and:[{fecha:{$gt:'2022-09-30'}},{fecha:{$lt:'2022-11-01'}},{tipo:'desperfecto'}]}},{$group:{_id:'$problema',cantidad:{$sum:1}}}]);";
    }, error => {
      console.log(error);      
    })
  }
  
  getDesperfectosPorOficina(){ 
    this.ticketService.getValues(this.desperfectosPorOficina).subscribe((data) => {
      this.response = JSON.stringify(data, null, 2);
      this.query = "ticket.aggregate([{$match:{tipo:'desperfecto'}},{$group:{_id:'$area.tipo',cantidad:{$sum:1}}}]);";
    }, error => {
      console.log(error);      
    })
  }
  
  getAiendeMasTickets(){ 
    this.ticketService.getValues(this.aiendeMasTickets).subscribe((data) => {
      this.response = JSON.stringify(data, null, 2);
      this.query = "ticket.aggregate([{$group:{_id:'$empleado.dni',nombre:{$first:'$empleado.nombre'},apellido:{$first:'$empleado.apellido'},cantidad:{$sum:1}}},{$sort:{cantidad:-1}},{$limit:1}]);";
    }, error => {
      console.log(error);      
    })
  }
  
  getSinResolver(){ 
    this.ticketService.getValues(this.sinResolver).subscribe((data) => {
      this.response = JSON.stringify(data, null, 2);
      this.query = "ticket.find({resuelto:{$ne:true}},{id:1,fecha:1,tipo:1,problema:1});";
    }, error => {
      console.log(error);      
    })
  }
  
  getClientesCercaDeOficinas(){ 
    this.ticketService.getValues(this.clientesCercaDeOficinas).subscribe((data) => {
      this.response = JSON.stringify(data, null, 2);
      this.query = "ticket.find({'cliente.localidad.posicion_gps':{$near:{$geometry:{type:'Point',coordinates:[-58.39922936512508,-34.615292049964]},$maxDistance:5}}}).count();";
    }, error => {
      console.log(error);      
    })
  }
  
  getClientesEnBA(){ 
    this.ticketService.getValues(this.clientesEnBA).subscribe((data) => {
      this.response = JSON.stringify(data, null, 2);
      this.query = "ticket.find({'cliente.localidad.posicion_gps':{$geoWithin:{$geometry:{type:'Polygon',coordinates:[[[-58.46470129018587,-34.53773055895173],[-58.4978896522604,-34.55139894333022],[-58.5282332975856,-34.617366115536775],[-58.525862700294454,-34.653450227097416],[-58.4857996060764,-34.68386570814527],[-58.46114539424916,-34.63472745835372],[-58.38386392256169,-34.620487523640435],[-58.3833898031036,-34.5836083947123],[-58.46470129018587,-34.53773055895173]]]}}}}).count();";
    }, error => {
      console.log(error);      
    })
  }
  
  getCantidadPlanNormalOSuperPack(){ 
    this.ticketService.getValues(this.cantidadPlanNormalOSuperPack).subscribe((data) => {
      this.response = JSON.stringify(data, null, 2);
      this.query = "ticket.find({$or:[{'cliente.plan.nombre':'superpack'},{'cliente.plan.nombre':'normal'}]},{id:1,cliente:1});";
    }, error => {
      console.log(error);      
    })
  }
  
  getPromedioPrecioPlan(){ 
    this.ticketService.getValues(this.promedioPrecioPlan).subscribe((data) => {
      this.response = JSON.stringify(data, null, 2);
      this.query = "ticket.aggregate([{$group:{_id:'$cliente.plan.nombre',promedio_costo:{$avg:'$cliente.plan.costo'}}}]);";
    }, error => {
      console.log(error);      
    })
  }
  
  getIncrementoPlanNormal(){ 
    this.ticketService.getValues(this.incrementoPlanNormal).subscribe((data) => {
      this.response = JSON.stringify(data, null, 2);
      this.query = "ticket.updateMany({'cliente.plan.nombre':'normal'},{$inc:{'cliente.plan.costo':500}});";
    }, error => {
      console.log(error);      
    })
  }
  
  getIncrementoPlanSuperPack(){ 
    this.ticketService.getValues(this.incrementoPlanSuperPack).subscribe((data) => {
      this.response = JSON.stringify(data, null, 2);
      this.query = "ticket.updateMany({'cliente.plan.nombre':'superpack'},{$mul:{'cliente.plan.costo':2}});";
    }, error => {
      console.log(error);      
    })
  }
  
  getMaxPlanNormal(){ 
    this.ticketService.getValues(this.maxPlanNormal).subscribe((data) => {
      this.response = JSON.stringify(data, null, 2);
      this.query = "ticket.updateMany({'cliente.plan.nombre':'normal'},{$max:{'cliente.plan.costo':5000}});";
    }, error => {
      console.log(error);      
    })
  }
  
  getMinPlanSuperPack(){ 
    this.ticketService.getValues(this.minPlanSuperPack).subscribe((data) => {
      this.response = JSON.stringify(data, null, 2);
      this.query = "ticket.updateMany({'cliente.plan.nombre':'superpack'},{$min:{'cliente.plan.costo':5000}});";
    }, error => {
      console.log(error);      
    })
  }
  
  getAgregarCampoVip(){ 
    this.ticketService.getValues(this.agregarCampoVip).subscribe((data) => {
      this.response = JSON.stringify(data, null, 2);
      this.query = "ticket.updateMany({'cliente.plan.nombre':'superpackfull'},{$set:{vip:true}});";
    }, error => {
      console.log(error);      
    })
  }
  
  getRenombrarCampoVip(){ 
    this.ticketService.getValues(this.renombrarCampoVip).subscribe((data) => {
      this.response = JSON.stringify(data, null, 2);
      this.query = "ticket.updateMany({'cliente.plan.nombre':'superpackfull'},{$rename:{'vip':'cliente_vip'}});";
    }, error => {
      console.log(error);      
    })
  }
  
  getBorrarCampoVip(){ 
    this.ticketService.getValues(this.borrarCampoVip).subscribe((data) => {
      this.response = JSON.stringify(data, null, 2);
      this.query = "ticket.updateMany({'cliente.plan.nombre':'superpackfull'},{$unset:{cliente_vip:'}});";
    }, error => {
      console.log(error);      
    })
  }
  
  getCrearIndiceCampoNombre(){ 
    this.ticketService.getValues(this.crearIndiceCampoNombre).subscribe((data) => {
      this.response = JSON.stringify(data, null, 2);
      this.query = "ticket.createIndex({'cliente.plan.nombre':1},{name:'nombre_plan'});";
    }, error => {
      console.log(error);      
    })
  }
  
  getIndices(){ 
    this.ticketService.getValues(this.indices).subscribe((data) => {
      this.response = JSON.stringify(data, null, 2);
      this.query = "ticket.getIndexes();";
    }, error => {
      console.log(error);      
    })
  }
  
  getBorrarIndice(){ 
    this.ticketService.getValues(this.borrarIndice).subscribe((data) => {
      this.response = JSON.stringify(data, null, 2);
      this.query = "ticket.dropIndex('nombre_plan');";
    }, error => {
      console.log(error);      
    })
  }
  
  getCrearIndiceTexto(){ 
    this.ticketService.getValues(this.crearIndiceTexto).subscribe((data) => {
      this.response = JSON.stringify(data, null, 2);
      this.query = "ticket.createIndex({'problema':'text'},{name:'problema_text'});";
    }, error => {
      console.log(error);      
    })
  }
  
  getContienePalabraHd(){ 
    this.ticketService.getValues(this.contienePalabraHd).subscribe((data) => {
      this.response = JSON.stringify(data, null, 2);
      this.query = "ticket.find({$text:{$search:'\'hd\'}}).count();";
    }, error => {
      console.log(error);      
    })
  }
  
  getClientesConCanalSpace(){ 
    this.ticketService.getValues(this.clientesConCanalSpace).subscribe((data) => {
      this.response = JSON.stringify(data, null, 2);
      this.query = "ticket.aggregate([{$unwind:'$derivaciones'},{$match:{'derivaciones.canales_agregados':'Space'}},{$project:{'cliente.nombre':1,'cliente.apellido':1}}]);";
    }, error => {
      console.log(error);      
    })
  }
  
  getPendientesConVacaciones(){ 
    this.ticketService.getValues(this.pendientesConVacaciones).subscribe((data) => {
      this.response = JSON.stringify(data, null, 2);
      this.query = "empleados.aggregate([{$lookup:{from:'tickets',pipeline:[{$match:{resuelto:false}}],as:'ticket',localField:'dni',foreignField:'empleado.dni'}},{$match:{dias_de_vacaciones:{$gt:4}}},{$project:{nombre:1,apellido:1,dias_de_vacaciones:1,cantidad:{$size:'$ticket'}}},{$sort:{dias_de_vacaciones:-1}},]);";
    }, error => {
      console.log(error);      
    })
  }
}