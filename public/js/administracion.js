   var grupos;
   var elimIndex;
   var ubicacionGrupoActual;
    $(document).ready(function(){
    	// Activate tooltips
    	$('[data-toggle="tooltip"]').tooltip();
        
    	// Filter table rows based on searched term
        $("#search").on("keyup", function() {
            var term = $(this).val().toLowerCase();
            $("table tbody tr").each(function(){
                $row = $(this);
                var name = $row.find("td:nth-child(1)").text().toLowerCase();
                if(name.search(term) < 0){                
                    $row.hide();
                } else{
                    $row.show();
                }
            });
        });
        
        $(".dateFormat").datetimepicker({
            format: 'dd/mm/yyyy',
            autoclose: true,
            language: 'es',
            weekStart:1,
            minView:2
        });
        $(".hourFormat").datetimepicker({
            format: 'hh:ii',
            autoclose: true,
            language: 'es',
            startView:1,
            minView:0,
            maxView:1
        });
        $("#addGrupoSubmit").click(function(e) {
            e.preventDefault();
            
            var mensaje={
                'nombre':addNombreGrupo.value,
                'codigo':addCodigoGrupo.value,
                'fecha_Creacion':addFechaGrupo.value,
                'horario_Inicio':addInicioGrupo.value,
                'horario_fin':addFinGrupo.value,
                'religion':addReligionGrupo.value,
                'ubicacion':JSON.stringify(ubicacionGrupoActual)
            };
            if(addWebGrupo.value!="")
                mensaje['sitio_web']=addWebGrupo.value;
            if(addTelefonoGrupo.value!="")
                mensaje['telefono']=addTelefonoGrupo.value;
            if(addEmailGrupo.value!="")
                mensaje['email']=addEmailGrupo.value;
            
            postTest('/api/grupo/crear',JSON.stringify(mensaje));
            $("#addModal input").each(function(){$(this).val("");});
            addReligionGrupo.value="Religión Heterogenea";
            addUbicacionGrupo.value= "";
            addGrupoSubmit.disabled=true;
            $("#addModal").modal("hide");
        });
         $("#eliminarSubmit").click(function(e) {
            e.preventDefault();
            var id= grupos[elimIndex]._id;
            ruta='/api/grupos/'+id;
            removeTest(ruta);
            $("#deleteModal").modal("hide");
        });
        $("#ubicacionSubmit").click(function(e) {
            e.preventDefault();
            getDireccion();
            $("#ubicacionModal").modal("hide");
        });


    update();
    });

    const pizzaTemplate = Twig.twig({
        href: "shared/renderGrupoBody.twig",async:false
    });
    function update(){
        $.get("./api/grupos", function(data, status) {
            grupos=ordenByName(data);
            $("#tableBody").empty();
            $("#tableBody").append($(pizzaTemplate.render({"grupos":data})));
        });
    }
    update();
    function ordenByName(data){
        data.sort(function (a, b) {
            if (a.nombre > b.nombre) 
                return 1;
            else  if (a.nombre < a.nombre) 
                return -1;
            return 0;
        });
        return data;
    }
    function setIndexRemove(i){
        elimIndex=i;
    }
    function editarGrupo(index){
        var grupo=grupos[index];
        editNombre.value=grupo.nombre;
        editCodigo.value=grupo.codigo;
        editFecha.value=grupo.fecha_Creacion;
        editHsInicio.value=grupo.horario_Inicio;
        editHsFin.value=grupo.horario_fin;
        editUbicacionGrupo.value=getDireccionString(grupo.ubicacion);
    }

    function getDireccion(){
        var key='AIzaSyD6w7d-gbnFx2SZPOW_zTiUByMekCvTPuE';
        var address=calleInput.value+" "+numeroInput.value+", "+ciudadInput.value+", "+provinciaInput.value+", Argentina";
        console.log(address);
        $.get("https://maps.googleapis.com/maps/api/geocode/json?address="+address+"&key="+key, function (data) {
                var latitud,longitud,address;
                if(data.status=="OK"){
                    datos=data.results[0];
                    ubicacionGrupoActual={
                        "address":datos.formatted_address,
                        "coords": [
                            datos.geometry.location.lat,
                            datos.geometry.location.lng,
                        ]};
                        editUbicacionGrupo.value=getDireccionString(ubicacionGrupoActual);
                        addUbicacionGrupo.value= getDireccionString(ubicacionGrupoActual);               
                        addGrupoSubmit.disabled=false;
                }else
                    addUbicacionGrupo.value="Error Cargando la direccion\n Intentelo Nuevamente";
                
        });
    }
    function getDireccionString(ubicacion){
        return ubicacion.address+"\nLatitud:"+ubicacion.coords[0]+"\nLongitud:"+ubicacion.coords[1];

    }
    function postTest(ruta,elemento) {
    //const jsonString = JSON.stringify(Array.from(comentario.values()));
    $.ajax({
      url: ruta,
      type: 'POST',
      data: elemento,
      contentType: "application/json",
      dataType: "json",
      success: function(data){
        console.log(data);
        update();
    },
      error:function(data){ }
  });
}
    function removeTest(ruta) {
    //const jsonString = JSON.stringify(Array.from(comentario.values()));
    $.ajax({
      url: ruta,
      type: 'DELETE',
      success: function(data){
        console.log(data);
        update();
    },
      error:function(data){ }
  });
}