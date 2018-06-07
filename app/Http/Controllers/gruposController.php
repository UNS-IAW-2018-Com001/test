<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class gruposController extends Controller
{
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
    
    public function index(){
    	$grupos=[
			0=>array("Coronel Rosales","234","25/10/1986","14:00","17:00","","Religión Heterogenea",
						self::ubicacion,self::ramas,self::edit1.'1'.self::edit2),
			1=>array("San Antonio María Zaccaría","1035","24/09/2005","14:30","19:00"
						,"<b>Sitio web: </b> https://www.facebook.com/samz1035/<br>
                        <b>Telefono: </b>2121221","Católica",
						self::ubicacion,self::ramas,self::edit1.'2'.self::edit2),
		];
    	return view('grupos', [
    		'title' => "Administrar Grupo Scouts",
    		'titleTable'=> "Administrar Grupos Scouts",
    		'addLabel'=>'Grupo',
    		'modalDeleteTitle'=>" Eliminar Grupo",
    		'columnas'=>self::columnas,
    		'elementos'=>$grupos,
		]);
    }
    
}
