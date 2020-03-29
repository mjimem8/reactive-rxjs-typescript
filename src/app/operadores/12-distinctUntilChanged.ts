import { of, from } from 'rxjs';
import { distinct, distinctUntilChanged } from 'rxjs/operators';

const numeros$ = of(1,1,1,2,3,4,4,4,5,1,5,5,6,6);

//el distinctuntilchanged emite si el ultimo valor no es el mismo

numeros$.pipe(
    distinctUntilChanged()
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
    },
    {
        nombre: "Personaje2"
    }
];

from(personajes).pipe(
    distinctUntilChanged((ant, act) => ant.nombre === act.nombre)
)
.subscribe(console.log);