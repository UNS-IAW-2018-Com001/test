<?php

use App\Grupo;
use App\Rama;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/grupos', 'gruposController@consultar');
Route::post('/grupo/crear','gruposController@crear');
Route::delete('/grupos/{grupo}', 'gruposController@eliminar');
Route::put('/grupos/{grupo}', 'gruposController@actualizar');

Route::get('/ramas/{grupo}', 'ramasController@consultar');