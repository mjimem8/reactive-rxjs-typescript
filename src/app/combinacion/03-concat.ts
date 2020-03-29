import { interval, concat } from 'rxjs';
import { take } from 'rxjs/operators';

//la funcion concat nos servirá para concatenar observables
//en cuanto el primer observable se completa empieza a ejecutarse el siguiente

const interval$ = interval(1000);

concat(
    interval$.pipe(take(3)),
    interval$.pipe(take(2)),
    [1,2,3,4]
).subscribe(console.log)