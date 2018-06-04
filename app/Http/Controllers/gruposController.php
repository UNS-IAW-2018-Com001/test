<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class gruposController extends Controller
{
    public function index(){
    	return view('index', [
    		'title' => "Administrar Grupos"
		]);
    }
    
}
