import { fromEvent } from 'rxjs';
import { debounceTime, pluck, distinctUntilChanged } from 'rxjs/operators';

//debounceTime emite un evento cuando termina un periodo de tiempo
//si en 1 segundo hacemos click 3 veces (a,b,c). Cuando pulsamos c
//espera 3 segundos y emite solo c

const click$ = fromEvent(document, 'click');

click$.pipe(
    debounceTime(3000)
).subscribe(console.log);

//ejemplo 2
const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent(input, 'keyup');

input$.pipe(
    debounceTime(1000),
    pluck('target', 'value'),
    distinctUntilChanged()
).subscribe(console.log);