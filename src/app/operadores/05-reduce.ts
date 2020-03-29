import { interval } from 'rxjs';
import { take, reduce, tap } from 'rxjs/operators';

const numbers = [1,2,3,4,5];

const totalReducer = (acumulador: number, valorActual: number) => acumulador + valorActual;

//pasamos el reducer y el valor inicial(0)
const total = numbers.reduce(totalReducer, 0);
//console.log('total ', total);

//take dispara el observable un numero de veces
interval(500).pipe(
    take(4),
    tap( console.log ),
    reduce( totalReducer)
)
.subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('Complete')
})