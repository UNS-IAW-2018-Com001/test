	var ramas;
	var idGrupo;
    $(document).ready(function(){
    	idGrupo=idGrupoLabel.value;
	    update();
        $("#addRamaSubmit").click(function(e) {
            e.preventDefault();
            realizarAgregado();
        });
        $("#eliminarSubmit").click(function(e) {
            e.preventDefault();
            realizarEliminado();
        });
    });
    const bodyTemplate = Twig.twig({
        href: "/shared/renderRamaBody.twig",async:false
    });
    function update(){
        $.get("/api/ramas/"+idGrupo, function(data, status) {
            ramas=Object.values(data);
            $("#tableBody").empty();
            $("#tableBody").append($(bodyTemplate.render({"ramas":data})));
        });
    }
    function realizarAgregado(){
        var mensaje={
            'nombre':addNombreRama.value,
            'GrupoPerteneciente':idGrupo,
            'edad_minima':addEdadMinima.value,
            'edad_maxima':addEdadMaxima.value,
            'fechaInscripcion_inicio':addFechaInicio.value,
            'fechaIscripcion_fin':addFechaFin.value,
            'tipo': addTipo.value
        };
        postTest('/api/ramas/crear',JSON.stringify(mensaje));
        $("#addModal input").each(function(){$(this).val("");});
        addTipo.value="Rama Femenina";
        $("#addModal").modal("hide");
    }
    function realizarEliminado(){
        var id= ramas[elimIndex]._id;
        ruta='/api/ramas/'+id;
        removeTest(ruta);
        $("#deleteModal").modal("hide");
    }
    /*
    function editarRama(index){
        var grupo=grupos[index];
        editIndex=index;
        editNombre.value=grupo.nombre;
        editCodigo.value=grupo.codigo;
        editFecha.value=grupo.fecha_Creacion;
        editHsInicio.value=grupo.horario_Inicio;
        editHsFin.value=grupo.horario_fin;
        editUbicacionGrupo.value=getDireccionString(grupo.ubicacion);
        ubicacionGrupoActual=grupo.ubicacion;
        if(grupo.sitio_web)
            editWeb.value=grupo.sitio_web;
        if(grupo.telefono)
            editTelefono.value=grupo.telefono;
        if(grupo.email)
            editEmail.value=grupo.email;
        
         $('#editRamasHref').attr('href','/ramas/'+grupo._id);
    }*/