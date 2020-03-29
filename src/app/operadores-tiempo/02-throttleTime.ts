import { fromEvent, asyncScheduler } from 'rxjs';
import { debounceTime, pluck, distinctUntilChanged, throttleTime } from 'rxjs/operators';

//throttleTime no permite emitir nada durante un tiempo despues de emitir un evento 

const click$ = fromEvent(document, 'click');

click$.pipe(
    throttleTime(3000)
).subscribe(console.log);

//ejemplo 2
const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent(input, 'keyup');

input$.pipe(
    throttleTime(1000, asyncScheduler, {
        //emite el primer evento ignorado
        leading: true,
        //emite el ultimo evento ignorado
        trailing: true
    }),
    pluck('target', 'value'),
    distinctUntilChanged()
).subscribe(console.log);