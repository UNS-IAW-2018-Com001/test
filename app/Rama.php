<?php
namespace App;
use Jenssegers\Mongodb\Eloquent\Model as Eloquent;
class Rama extends Eloquent {
    protected $collection = 'ramas';
    protected $fillable = [
        'nombre', 'GrupoPerteneciente', 'edad_minima','edad_maxima','fechaInscripcion_inicio',
        'fechaIscripcion_fin','tipo','fotos'
    ];

}