<?php

namespace App\Http\Controllers;

use App\Grupo;
use Illuminate\Http\Request;

class gruposController extends Controller
{
	public function index(){
        	return view('grupos', [
    		'title' => "Administrar Grupo Scouts",
    		'titleTable'=> "Administrar Grupos Scouts",
    		'addLabel'=>'Grupo',
    		'modalDeleteTitle'=>" Eliminar Grupo",
    		'columnas'=>self::columnas,
		]);
    }
    public function crear(Request $request){
    	$data = json_decode($request->getContent(), true);
    	Grupo::create($data);
    	//$data= array($data);
    	//dd($data["nombre"]);
    	return response()->json(($data), 200);
    }
    public function eliminar(Grupo $grupo){
    	$grupo->delete();

    	return response()->json(($grupo), 200);
    }
    

    public function actualizar(Grupo $grupo,Request $request){
    	$data = json_decode($request->getContent(), true);
    	$grupo->update($data);

    	return response()->json(($data), 200);
    }
	const columnas = array(
		0 => array(
			'size'=>"col-md-2",
			'name'=>"Nombre",
			'id'=>0
		),
		1 =>array(
			'size'=>"col-md-1",
			'name'=>"Codigo",
			'id'=>1
		),
		2 =>array(
			'size'=>"col-md-1",
			'name'=>"Fecha de Creación",
			'id'=>2
		),
		3 =>array(
			'size'=>"col-md-1",
			'name'=>"Horario de Inicio",
			'id'=>3
		),
		4 =>array(
			'size'=>"col-md-1",
			'name'=>"Horario de Fin",
			'id'=>4
		),
		5 =>array(
			'size'=>"col-md-2",
			'name'=>"Datos de Contacto",
			'id'=>5
		),
		6 =>array(
			'size'=>"col-md-1",
			'name'=>"Religion",
			'id'=>6
		),
		7 =>array(
			'size'=>"col-md-1",
			'name'=>"Ubicacion",
			'id'=>7
		),
		8 =>array(
			'size'=>"col-md-1",
			'name'=>"Ramas",
			'id'=>8
		),
		9 =>array(
			'size'=>"col-md-1",
			'name'=>"",
			'id'=>9
		),
	);
	const ubicacion='<a><span>Ver Ubicación</span></a>';
	const ramas='<a><span>Ver Ramas</span></a>';
	const edit1='<a href="#editGrupoModal" class="edit" data-toggle="modal" onclick=editarGrupo(';
	const edit2=')><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a><a href="#deleteGrupoModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>';
    
    
    
}
