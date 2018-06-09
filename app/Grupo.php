<?php
namespace App;
use Jenssegers\Mongodb\Eloquent\Model as Eloquent;
class Grupo extends Eloquent {
    protected $collection = 'grupos';
    protected $fillable = [
        'nombre', 'codigo', 'fecha_Creacion','horario_Inicio','horario_fin',
        'religion','sitio_web','telefono' ,'email',
    ];

}