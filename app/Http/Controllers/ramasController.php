<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ramasController extends Controller
{
    const columnas = array(
    		0 => array(
    			'size'=>"col-md-2",
    			'name'=>"Nombre",
    			'id'=>0
    		),
    		1 =>array(
    			'size'=>"col-md-1",
    			'name'=>"Edad Mínima",
    			'id'=>1
    		),
    		2 =>array(
    			'size'=>"col-md-1",
    			'name'=>"Edad Maxima",
    			'id'=>2
    		),
    		3 =>array(
    			'size'=>"col-md-2",
    			'name'=>"Fecha de Inicio de Inscripcion",
    			'id'=>3
    		),
    		4 =>array(
    			'size'=>"col-md-2",
    			'name'=>"Fecha de Fin de Inscripcion",
    			'id'=>4
    		),
    		5 =>array(
    			'size'=>"col-md-2",
    			'name'=>"Tipo",
    			'id'=>5
    		),
    		6 =>array(
    			'size'=>"col-md-1",
    			'name'=>"Fotos",
    			'id'=>6
    		),
    		7 =>array(
    			'size'=>"col-md-1",
    			'name'=>"",
    			'id'=>7
    		),
		);
    const fotos="<a><span>Ver Fotos</span></a>";
	const edit='<a href="#editRamaModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a><a href="#deleteRamaModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>';

	public function index($idgrupo){
		$ramas=[
			0=>array("Manada Mowgli","6","11","1/03/2018","1/05/2018","Rama Mixta",self::fotos,self::edit),
			1=>array("Unidad Traulen","11","13","1/03/2018","1/05/2018","Rama Mixta",self::fotos,self::edit),
		];
    	return view('ramas', [
    		'title' => "Administrar Ramas del Grupo ".$idgrupo,
    		'titleTable'=> 'Ramas del Grupo '.$idgrupo,
    		'addLabel'=>'Rama',
    		'modalDeleteTitle'=>" Eliminar Rama",
    		'columnas'=>self::columnas,
    		'elementos'=>$ramas,
		]);
    }
}
