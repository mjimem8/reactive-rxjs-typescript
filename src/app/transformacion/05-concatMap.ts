import { fromEvent, interval } from 'rxjs';
import { take, concatMap } from 'rxjs/operators';

const click$ = fromEvent(document, 'click');
const interval$ = interval(500).pipe(take(3));

//concatMap se crea un nuevo observable cada vez que emite el primer observable pero con la diferencia
//que los nuevos observables se ponnen en cola y no empiezan a ejecutarse hasta que no se completa el anterior observable
click$.pipe(
    concatMap(() => interval$)
).subscribe(console.log);