<!DOCTYPE html>
</html>
<head>
  <title>Escuelas en Puebla</title>
  <link rel="stylesheet" type="text/css" href="script/interfaz.css">
  <script src="http://maps.googleapis.com/maps/api/js?key=AIzaSyD58YikEK-bFGRqilYtUUpwQW8HZ5zxeuQ&sensor=false">//Importa la biblioteca 'Google Maps'
  </script>
  <script  src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"> //Importa la biblioteca 'jQuery/Ajax'
  </script>
  <script type="text/javascript" src="script/informacionEscuelas.js"></script><!-- Clase de "arregloEscuelas" -->
  <script type="text/javascript" src="script/procesosEscuelas.js"></script>
  <script type="text/javascript"> //Variables globales
    var arregloEscuelas = []; //Declara un arreglo en el cual se almacenara el objeto "informacionEscuelas"
    var procesosEscuelas = new procesosEscuelas();
    var registro = 0;
    var mapProp={ //esta variable establece los parametros que tendra el mapa
      center:new google.maps.LatLng(19, -97.883333), //las cordenadas centran el mapa en puebla
      zoom:10,
      mapTypeId:google.maps.MapTypeId.ROADMAP
    };
    function initialize(){ //genera el mapa de google maps
      var map=new google.maps.Map(document.getElementById("googleMap"),mapProp); //ubica el mapa en el <div> con Id "googleMap"
    }
    google.maps.event.addDomListener(window,'load',initialize);
  </script>
</head>
<body onload="procesosEscuelas.obtenerInformacion()">
  <div id="header">
    <h1 id="titulo">Escuelas de nivel basico en el estado de Puebla</h1>
    <a href="http://codeandomexico.org/"><img id="cmLogo" src="imagenes/cmx_icon.jpg" alt="Codeando Mexico logo"/></a>
  </div>
  <div id="googleMap" onload="initialize()"></div>
  <div id="cuadro">
    <h3>Informacion</h3>
    <table>
      <tr>
        <th scope="col">Id</th>
        <td id="id">--</td>
      </tr>
      <tr>
        <th scope="col">Unidad que autoriza</th>
        <td id="unidadQueAutoriza">--</td>
      </tr>
      <tr>
        <th scope="col">Nombre</th>
        <td id="nombre">--</td>
      </tr>
      <tr>
        <th scope="col">Clave</th>
        <td id="clave">--</td>
      </tr>
      <tr>
        <th scope="col">Domicilio</th>
        <td id="domicilio">--</td>
      </tr>
      <tr>
        <th scope="col">Nombre Particular</th>
        <td id="nombreParticular">--</td>
      </tr>
      <tr>
        <th scope="col">Objeto Permiso</th>
        <td id="objetoPermiso">--</td>
      </tr>
      <tr>
        <th scope="col">Vigencia Inicio</th>
        <td id="vigenciaInicio">--</td>
      </tr>
      <tr>
        <th scope="col">Vigencia Fin</th>
        <td id="vigenciaFin">--</td>
      </tr>
      <tr>
        <th scope="col">Procedimiento del otorgamiento</th>
        <td id="procedimientoDelOtorgamiento">--</td>
      </tr>
      <tr>
        <th scope="col">Contraprestacion</th>
        <td id="contraprestacion">--</td>
      </tr>
    </table>
  </div>
  <script>
    /*Obtiene la cantidad de escuelas registradas*/
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
          document.getElementById("totalEscuelas").innerHTML=data.result.total //Regresa el total de escuelas y comprueba que la conexion fue establecida correctamente
        }
      });
    });
  </script>
  <div id="left_side-bar">
    <h1 class="header">Total de Escuelas:</h1>
    <h5 id="totalEscuelas"></h5>
    <input id="busqueda" value="Buscar por nombre">
    <button id="boton_busqueda" onclick="buscar()">Iniciar</button>
    <script>
        $("#busqueda").keyup(function(event){ //Presiona automaticamente el "boton_busqueda" al momento en el que el usuario presiona enter en el cuadro de texto
        if(event.keyCode == 13){
          $("#boton_busqueda").click();
        }
      });
    </script>
    <script type="text/javascript">
      function buscar(){
        $('.objBusqueda').remove();
        var elemento = document.getElementById("busqueda").value;
        var totalEscuelas = document.getElementById("totalEscuelas").innerHTML;
        var palabraBusqueda = "";
        var palabraInsertado = "";
        var caracteresBusqueda = 0;
        var caracteresInsertado = 0;
        var encontrar = false;
        var objId;
        var funcion = "";
        for(var x = 0;x<totalEscuelas;x++){
          caracteresInsertado = elemento.length;
          caracteresBusqueda = arregloEscuelas[x].nombre.length;
          palabraInsertado = elemento.toLowerCase();
          palabraBusqueda = arregloEscuelas[x].nombre.toLowerCase();
          for(var y = 0;y<caracteresBusqueda;y++){
            if(palabraBusqueda.charAt(y) == palabraInsertado.charAt(0)){
              if(palabraBusqueda.substring(y,y+caracteresInsertado) == palabraInsertado){
                registro = x;
                objId = "x"+x;
                funcion = "arregloEscuelas["+x+"].posicionarMapa("+x+")";
                encontrar = true;
                var seccion = $('<div>', {id:objId}).appendTo('#resultados');
                $('#'+objId).addClass('objBusqueda');
                $('<p>', {id:"x"+arregloEscuelas[x]._id}).appendTo(seccion);
                document.getElementById("x"+arregloEscuelas[x]._id).innerHTML = arregloEscuelas[x].nombre;
                $('<button>', {id:"y"+arregloEscuelas[x]._id}).appendTo(seccion);
                $("#y"+arregloEscuelas[x]._id).attr("onclick",funcion);
                document.getElementById("y"+arregloEscuelas[x]._id).innerHTML = "Desplegar";
              }
            }
          }
        }
        if(encontrar){
          document.getElementById("seleccion").innerHTML = "Lista de escuelas encontradas";
        }
        else{
          document.getElementById("seleccion").innerHTML = "No hay resultados";
        }
      }
    </script>
    <div id="resultado">
      <h3 id="resultadosFont">Resultados</h3>
      <div id="resultados">
        <p id="seleccion"></p>
      </div>
    </div>
  </div>
  <div id="right_panel">
  </div>
  <script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
    ga('create', 'UA-46973214-9', 'auto');
    ga('send', 'pageview');
  </script>
</body>
</html>
