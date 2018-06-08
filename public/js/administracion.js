   var grupos;
    $(document).ready(function(){
    	// Activate tooltips
    	$('[data-toggle="tooltip"]').tooltip();
        
    	// Filter table rows based on searched term
        $("#search").on("keyup", function() {
            var term = $(this).val().toLowerCase();
            $("table tbody tr").each(function(){
                $row = $(this);
                var name = $row.find("td:nth-child(1)").text().toLowerCase();
                console.log(name);
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
                'horario_Fin':addFinGrupo.value,
            };
            console.log(JSON.stringify(mensaje));
            postTest('/api/grupo/crear',JSON.stringify(mensaje));
            //var name = $("#name").val();
            //var email = $("#email").val();
            //var msg = $("#msg").val();
        });
    });

    function editarGrupo(index){
        console.log(index);
        var grupo=grupos[index];
        editNombre.value=grupo.nombre;
    }
    function crearGrupo(){

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
    const pizzaTemplate = Twig.twig({
        href: "shared/renderGrupoBody.twig",async:false
    });
    $.get("./api/grupos", function(data, status) {
        grupos=data;
         $("#tableBody").append($(pizzaTemplate.render({"grupos":data})));

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
    },
      error:function(data){ }
  });
}