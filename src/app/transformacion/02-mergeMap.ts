import { of, interval, fromEvent } from "rxjs";
import { mergeMap, take, map, takeUntil } from "rxjs/operators";

const letras$ = of('a', 'b', 'c');

//mergeMap mergea observables de tal forma que cuando el observable padre emite un valor
//automaticamente se suscribe y crea un nuevo observable que retorna dicho observable padre
//y no se completa hasta que todos los observables creados hayan sido completados
letras$.pipe(
    mergeMap( (letra) =>  interval(1000).pipe(
        map( i => letra + i),
        take(3)
    ))
);
// .subscribe({
//     next: val => console.log('next: ',val),
//     complete: () => console.log('complete')
// });

const mousedown$ = fromEvent(document, 'mousedown');
const mouseup$ = fromEvent(document, 'mouseup');
const interval$ = interval();

//muestra el tiempo en el que estoy dejando pulsado el raton hasta que lo suelto
mousedown$.pipe(
    mergeMap(() => interval$.pipe(
        takeUntil(mouseup$)
    ))
).subscribe(console.log);