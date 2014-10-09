function procesosEscuelas(){
	this.obtenerInformacion = function(){ //Al cargarse la pagina, esta funcion almacena toda la informacion disponibles de las escuelas en un arreglo de objetos, para facil acceso en distintas partes del documento     
        var totalEscuelas=document.getElementById("totalEscuelas").innerHTML;
        /*Llena el arreglo "arregloEscuelas" con el constructor "informacionEscuelas"*/
        for(var x=0;x<totalEscuelas;x++){
          arregloEscuelas[x] = new informacionEscuelas();
      }
        $(document).ready(function(){
          var data = {
            resource_id: '72132d45-cae9-446e-8366-a7654ec1d930', //id del API del cual se esta obteniendo la informacion
                };
            $.ajax({
              type:'Get',
              url: 'http://datamx.io/api/action/datastore_search',
              data: data,
              dataType: 'jsonp',
              success: function(data) { //En caso de que se encuentre la informacion solicitada, desplegara lo siguiente
                for(var x = 0; x < 100; x++){
                  arregloEscuelas[x]._id=data.result.records[x]._id;
                  arregloEscuelas[x].numero=data.result.records[x].Numero;
                  arregloEscuelas[x].unidadQueAutoriza=data.result.records[x].Unidad_que_autoriza;
                  arregloEscuelas[x].nombre=data.result.records[x].Nombre_de_la_escuela;
                  arregloEscuelas[x].clave=data.result.records[x].clave;
                  arregloEscuelas[x].domicilio=data.result.records[x].Domicilio;
                  arregloEscuelas[x].nombreParticular=data.result.records[x].Nombre_del_particular;
                  arregloEscuelas[x].objetoPermiso=data.result.records[x].Objeto_permiso;
                  arregloEscuelas[x].vigenciaInicio=data.result.records[x].vigencia_inicio;
                  arregloEscuelas[x].vigenciaFin=data.result.records[x].vigencia_fin;
                  arregloEscuelas[x].procedimientoDelOtorgamiento=data.result.records[x].procedimiento_del_otorgamiento;
                  arregloEscuelas[x].contraprestacion=data.result.records[x].contraprestacion;
                  console.log(arregloEscuelas[x]._id);
                }
              }
            });
        })
        $(document).ready(function(){
          var data = {
            resource_id: '72132d45-cae9-446e-8366-a7654ec1d930', //id del API del cual se esta obteniendo la informacion
                };
            $.ajax({
              type:'Get',
              url: 'http://datamx.io/api/action/datastore_search?offset=100',
              data: data,
              dataType: 'jsonp',
              success: function(data) { //En caso de que se encuentre la informacion solicitada, desplegara lo siguiente
                for(var x=0;x<100;x++){
                  y = x;
                  arregloEscuelas[x+100]._id=data.result.records[x]._id;
                  arregloEscuelas[x+100].numero=data.result.records[x].Numero;
                  arregloEscuelas[x+100].unidadQueAutoriza=data.result.records[x].Unidad_que_autoriza;
                  arregloEscuelas[x+100].nombre=data.result.records[x].Nombre_de_la_escuela;
                  arregloEscuelas[x+100].clave=data.result.records[x].clave;
                  arregloEscuelas[x+100].domicilio=data.result.records[x].Domicilio;
                  arregloEscuelas[x+100].nombreParticular=data.result.records[x].Nombre_del_particular;
                  arregloEscuelas[x+100].objetoPermiso=data.result.records[x].Objeto_permiso;
                  arregloEscuelas[x+100].vigenciaInicio=data.result.records[x].vigencia_inicio;
                  arregloEscuelas[x+100].vigenciaFin=data.result.records[x].vigencia_fin;
                  arregloEscuelas[x+100].procedimientoDelOtorgamiento=data.result.records[x].procedimiento_del_otorgamiento;
                  arregloEscuelas[x+100].contraprestacion=data.result.records[x].contraprestacion;
                  console.log(arregloEscuelas[x+100]._id);
                }
              }
            });
        })
        $(document).ready(function(){
          var data = {
            resource_id: '72132d45-cae9-446e-8366-a7654ec1d930', //id del API del cual se esta obteniendo la informacion
                };
            $.ajax({
              type:'Get',
              url: 'http://datamx.io/api/action/datastore_search?offset=200',
              data: data,
              dataType: 'jsonp',
              success: function(data) { //En caso de que se encuentre la informacion solicitada, desplegara lo siguiente
                for(var x=0;x<100;x++){
                  y = x;
                  arregloEscuelas[x+200]._id=data.result.records[x]._id;
                  arregloEscuelas[x+200].numero=data.result.records[x].Numero;
                  arregloEscuelas[x+200].unidadQueAutoriza=data.result.records[x].Unidad_que_autoriza;
                  arregloEscuelas[x+200].nombre=data.result.records[x].Nombre_de_la_escuela;
                  arregloEscuelas[x+200].clave=data.result.records[x].clave;
                  arregloEscuelas[x+200].domicilio=data.result.records[x].Domicilio;
                  arregloEscuelas[x+200].nombreParticular=data.result.records[x].Nombre_del_particular;
                  arregloEscuelas[x+200].objetoPermiso=data.result.records[x].Objeto_permiso;
                  arregloEscuelas[x+200].vigenciaInicio=data.result.records[x].vigencia_inicio;
                  arregloEscuelas[x+200].vigenciaFin=data.result.records[x].vigencia_fin;
                  arregloEscuelas[x+200].procedimientoDelOtorgamiento=data.result.records[x].procedimiento_del_otorgamiento;
                  arregloEscuelas[x+200].contraprestacion=data.result.records[x].contraprestacion;
                  console.log(arregloEscuelas[x+200]._id);
                }
              }
            });
        })
        $(document).ready(function(){
          var data = {
            resource_id: '72132d45-cae9-446e-8366-a7654ec1d930', //id del API del cual se esta obteniendo la informacion
                };
            $.ajax({
              type:'Get',
              url: 'http://datamx.io/api/action/datastore_search?offset=300',
              data: data,
              dataType: 'jsonp',
              success: function(data) { //En caso de que se encuentre la informacion solicitada, desplegara lo siguiente
                for(var x=0;x<100;x++){
                  y = x;
                  arregloEscuelas[x+300]._id=data.result.records[x]._id;
                  arregloEscuelas[x+300].numero=data.result.records[x].Numero;
                  arregloEscuelas[x+300].unidadQueAutoriza=data.result.records[x].Unidad_que_autoriza;
                  arregloEscuelas[x+300].nombre=data.result.records[x].Nombre_de_la_escuela;
                  arregloEscuelas[x+300].clave=data.result.records[x].clave;
                  arregloEscuelas[x+300].domicilio=data.result.records[x].Domicilio;
                  arregloEscuelas[x+300].nombreParticular=data.result.records[x].Nombre_del_particular;
                  arregloEscuelas[x+300].objetoPermiso=data.result.records[x].Objeto_permiso;
                  arregloEscuelas[x+300].vigenciaInicio=data.result.records[x].vigencia_inicio;
                  arregloEscuelas[x+300].vigenciaFin=data.result.records[x].vigencia_fin;
                  arregloEscuelas[x+300].procedimientoDelOtorgamiento=data.result.records[x].procedimiento_del_otorgamiento;
                  arregloEscuelas[x+300].contraprestacion=data.result.records[x].contraprestacion;
                  console.log(arregloEscuelas[x+300]._id);
                }
              }
            });
        })
        $(document).ready(function(){
          var data = {
            resource_id: '72132d45-cae9-446e-8366-a7654ec1d930', //id del API del cual se esta obteniendo la informacion
                };
            $.ajax({
              type:'Get',
              url: 'http://datamx.io/api/action/datastore_search?offset=400',
              data: data,
              dataType: 'jsonp',
              success: function(data) { //En caso de que se encuentre la informacion solicitada, desplegara lo siguiente
                for(var x=0;x<100;x++){
                  y = x;
                  arregloEscuelas[x+400]._id=data.result.records[x]._id;
                  arregloEscuelas[x+400].numero=data.result.records[x].Numero;
                  arregloEscuelas[x+400].unidadQueAutoriza=data.result.records[x].Unidad_que_autoriza;
                  arregloEscuelas[x+400].nombre=data.result.records[x].Nombre_de_la_escuela;
                  arregloEscuelas[x+400].clave=data.result.records[x].clave;
                  arregloEscuelas[x+400].domicilio=data.result.records[x].Domicilio;
                  arregloEscuelas[x+400].nombreParticular=data.result.records[x].Nombre_del_particular;
                  arregloEscuelas[x+400].objetoPermiso=data.result.records[x].Objeto_permiso;
                  arregloEscuelas[x+400].vigenciaInicio=data.result.records[x].vigencia_inicio;
                  arregloEscuelas[x+400].vigenciaFin=data.result.records[x].vigencia_fin;
                  arregloEscuelas[x+400].procedimientoDelOtorgamiento=data.result.records[x].procedimiento_del_otorgamiento;
                  arregloEscuelas[x+400].contraprestacion=data.result.records[x].contraprestacion;
                  console.log(arregloEscuelas[x+400]._id);
                }
              }
            });
        })
        $(document).ready(function(){
          var data = {
            resource_id: '72132d45-cae9-446e-8366-a7654ec1d930', //id del API del cual se esta obteniendo la informacion
                };
            $.ajax({
              type:'Get',
              url: 'http://datamx.io/api/action/datastore_search?offset=500',
              data: data,
              dataType: 'jsonp',
              success: function(data) { //En caso de que se encuentre la informacion solicitada, desplegara lo siguiente
                for(var x=0;x<12;x++){
                  y = x;
                  arregloEscuelas[x+500]._id=data.result.records[x]._id;
                  arregloEscuelas[x+500].numero=data.result.records[x].Numero;
                  arregloEscuelas[x+500].unidadQueAutoriza=data.result.records[x].Unidad_que_autoriza;
                  arregloEscuelas[x+500].nombre=data.result.records[x].Nombre_de_la_escuela;
                  arregloEscuelas[x+500].clave=data.result.records[x].clave;
                  arregloEscuelas[x+500].domicilio=data.result.records[x].Domicilio;
                  arregloEscuelas[x+500].nombreParticular=data.result.records[x].Nombre_del_particular;
                  arregloEscuelas[x+500].objetoPermiso=data.result.records[x].Objeto_permiso;
                  arregloEscuelas[x+500].vigenciaInicio=data.result.records[x].vigencia_inicio;
                  arregloEscuelas[x+500].vigenciaFin=data.result.records[x].vigencia_fin;
                  arregloEscuelas[x+500].procedimientoDelOtorgamiento=data.result.records[x].procedimiento_del_otorgamiento;
                  arregloEscuelas[x+500].contraprestacion=data.result.records[x].contraprestacion;
                  console.log(arregloEscuelas[x+500]._id);
                }
              }
            });
        })
      }
};