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

    });
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