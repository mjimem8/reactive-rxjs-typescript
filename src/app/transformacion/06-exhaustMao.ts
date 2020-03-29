import { fromEvent, interval } from 'rxjs';
import { take, concatMap, exhaustMap } from 'rxjs/operators';

const click$ = fromEvent(document, 'click');
const interval$ = interval(500).pipe(take(3));

// exhaustMap solo mantiene una subscripcion activa, si está emitiendose un observable 
//eventos el operador ignora el nuevo observable que se quiere crear
click$.pipe(
    exhaustMap(() => interval$)
).subscribe(console.log);