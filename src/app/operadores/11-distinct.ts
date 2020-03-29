import { of, from } from 'rxjs';
import { distinct } from 'rxjs/operators';

const numeros$ = of(1,1,1,2,3,4,4,4,5,5,5,6,6);

//emite solo los eventos que no han sido emitidos anteriormente

numeros$.pipe(
    distinct()
).subscribe(console.log);


interface Personaje {
    nombre: string;
}

const personajes: Personaje[] = [
    {
        nombre: "Personaje1"
    },
    {
        nombre: "Personaje1"
    },
    {
        nombre: "Personaje2"
    },
    {
        nombre: "Personaje2"
    },
    {
        nombre: "Personaje2"
    },
    {
        nombre: "Personaje3"
    }
];

//no puede comparar un objecto entero pero si por propiedades
from(personajes).pipe(
    distinct(p => p.nombre)
)
.subscribe(console.log);