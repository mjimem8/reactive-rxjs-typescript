
import { of } from "rxjs";
import { startWith, endWith } from "rxjs/operators";

//startWith emite un evento al principio de la suscribe por defecto
//endWith es lo contrario que el anterior
const numeros$ = of(1,2,3).pipe(
    startWith('a', 'b', 'c'),
    endWith('x', 'y', 'z')
);

numeros$.subscribe(console.log);