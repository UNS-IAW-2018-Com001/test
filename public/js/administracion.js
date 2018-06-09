   var grupos;
   var elimIndex;
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
            $("#addModal").modal("hide");
        });
         $("#eliminarSubmit").click(function(e) {
            e.preventDefault();
            eliminarGrupo(elimIndex);
        });

    update();
    });

    const pizzaTemplate = Twig.twig({
        href: "shared/renderGrupoBody.twig",async:false
    });
    function update(){
        $.get("./api/grupos", function(data, status) {
            grupos=data;
            $("#tableBody").empty();
            $("#tableBody").append($(pizzaTemplate.render({"grupos":data})));
        });
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
    }

    function eliminarGrupo(index){
        var id= grupos[index]._id;
        ruta='/api/grupos/'+id;
        removeTest(ruta);
        $("#deleteModal").modal("hide");
    }
    $(document).on("click","#botonCoord", function(){
        $("#Coordenadas").val("Pepe");
        var key='AIzaSyD6w7d-gbnFx2SZPOW_zTiUByMekCvTPuE';
        var address=calleInput+" "+numeroInput.value+", "+ciudadInput.value+", "+provinciaInput+", Argentina";
        console.log(address);
        $.get("https://maps.googleapis.com/maps/api/geocode/json?address="+address+"&key="+key, function (data) {
                var location;
                if(data.status=="OK"){
                    location=data.results[0].geometry.location
                    console.log(location);
                    $("#Coordenadas").val(JSON.stringify(location));
                }


        });
    });

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