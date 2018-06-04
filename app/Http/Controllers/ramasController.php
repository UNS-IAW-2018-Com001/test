<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ramasController extends Controller
{
    
    
    

	public function index($idgrupo){
		$elementos=[
		];
    	return view('ramas', [
    		'title' => "Administrar Ramas",
    		'titleTable'=> 'Ramas del Grupo',
    		'addLabel'=>'Rama',
    		'modalDeleteTitle'=>" Eliminar Rama",
    		'columnas'=>[],
    		'elementos'=>[]
		]);
    }
}
