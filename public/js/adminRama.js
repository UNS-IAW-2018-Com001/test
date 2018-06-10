	var ramas;
	var idGrupo;
    $(document).ready(function(){
    	idGrupo=idGrupoLabel.value;
	    update();
    });
    const bodyTemplate = Twig.twig({
        href: "/shared/renderRamaBody.twig",async:false
    });
    function update(){
        $.get("/api/ramas/"+idGrupo, function(data, status) {
            ramas=ordenByName(data);
            $("#tableBody").empty();
            $("#tableBody").append($(bodyTemplate.render({"ramas":data})));
        });
    }