<?php

use App\Grupo;
use App\Rama;
use Illuminate\Http\Request;

Route::middleware('auth:api')->get('/user', function (Request $request) {
 
   return $request->user();
 
});
 
Route::post('login', 'API\PassportController@login'); 
Route::post('register', 'API\PassportController@register');
 
Route::group(['middleware' => 'auth:api'], function(){
 
Route::get('/grupos', 'gruposController@consultar');
Route::post('/grupos/crear','gruposController@crear');
Route::delete('/grupos/{grupo}', 'gruposController@eliminar');
Route::put('/grupos/{grupo}', 'gruposController@actualizar');

Route::get('/ramas/{grupo}', 'ramasController@consultar');
Route::post('/ramas/crear','ramasController@crear');
Route::delete('/ramas/{rama}', 'ramasController@eliminar');
Route::put('/ramas/{rama}', 'ramasController@actualizar');
 
});

