    var elimIndex,editIndex;
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
    });
    function setIndexRemove(i){
        elimIndex=i;
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
function putTest(ruta,elemento) {
    //const jsonString = JSON.stringify(Array.from(comentario.values()));
    $.ajax({
      url: ruta,
      type: 'PUT',
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