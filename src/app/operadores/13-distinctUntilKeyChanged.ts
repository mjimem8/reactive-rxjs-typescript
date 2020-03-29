import { of, from } from 'rxjs';
import { distinct, distinctUntilChanged, distinctUntilKeyChanged } from 'rxjs/operators';

//el distinctuntilkeychanged emite si el ultimo valor no es el mismo
//comprueba propiedades de objectos

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
    distinctUntilKeyChanged("nombre")
)
.subscribe(console.log);