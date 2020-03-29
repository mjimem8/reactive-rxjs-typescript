import { interval, from } from 'rxjs';
import { take, reduce, tap, scan, map } from 'rxjs/operators';

const numbers = [1,2,3,4,5];

const totalAcumulador = (acumulador: number, valorActual: number) => acumulador + valorActual;

//Reduce
//emite una unica vez
from(numbers).pipe(
    reduce( totalAcumulador, 0)
)
.subscribe(console.log)

//scan
//emite todos los pasos del acumular
from(numbers).pipe(
    scan( totalAcumulador, 0)
)
.subscribe(console.log)

// redux
interface Usuario {
    id?: string;
    autenticado?: boolean;
    token?: string;
    edad?: number;
}

const user: Usuario[] = [
    {id: 'manu', autenticado: false, token: null},
    {id: 'manu', autenticado: true, token: 'ABC'},
    {id: 'manu', autenticado: true, token: 'ABC212'}
];

const state$ = from(user).pipe(
    scan<Usuario>((acc, cur) => {
        return {...acc, ...cur}
    }, {edad: 33})
);

const id$ = state$.pipe(
    map(state => state)
);

id$.subscribe(console.log);
