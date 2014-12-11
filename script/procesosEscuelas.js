function procesosEscuelas(){
  this.obtenerInformacion = function(){ //Al cargarse la pagina, esta funcion almacena toda la informacion disponibles de las escuelas en un arreglo de objetos, para facil acceso en distintas partes del documento
    var totalEscuelas=document.getElementById("totalEscuelas").innerHTML;
    /*Llena el arreglo "arregloEscuelas" con el constructor "informacionEscuelas"*/
    for(var x=0;x<totalEscuelas;x++){
      arregloEscuelas[x] = new informacionEscuelas();
    }
    $(document).ready(function(){
      $.ajax({
        type:'Get',
        url: 'http://datamx.io/api/action/datastore_search_sql?sql=SELECT*FROM"72132d45-cae9-446e-8366-a7654ec1d930"', //URL del dataset
        dataType: 'jsonp',
        success: function(data) { //En caso de que se encuentre la informacion solicitada, desplegara lo siguiente
          for(var x = 0; x < totalEscuelas; x++){
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
    });
  };
}
