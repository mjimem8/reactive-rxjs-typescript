import { of, interval, forkJoin } from "rxjs";
import { take, delay } from "rxjs/operators";

const numeros$ = of(1,2,3,4);
const interval$ = interval(1000).pipe(take(3))
const letras$ = of('a', 'b', 'c').pipe(delay(3500));

//emite los ultimos valores cuando todos los obsercvables se completan
// forkJoin(
//     numeros$,
//     interval$,
//     letras$
// ).subscribe(console.log);

forkJoin({
    numeros$,
    interval$,
    letras$
}).subscribe( console.log );