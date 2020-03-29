import { of } from 'rxjs';
import { take } from 'rxjs/operators';

const numeros$ = of(1,2,3,4,5);

//el take limita el numero de eventos
numeros$.pipe(
    take(3)
)
.subscribe({
    next: val => console.log('next', val),
    complete: () => console.log("complete")
});