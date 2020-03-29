import { of, range, asyncScheduler } from 'rxjs';

//const src$ = of(1,2,3,4,5);
//emite los siguientes valores es decir range (-5,10) -> seria desde -5 a 4
const src$ = range(1,5, asyncScheduler);

//con asyncScheduler lo hacemos asincrono
console.log('inicio');
src$.subscribe(console.log);
console.log('fin');