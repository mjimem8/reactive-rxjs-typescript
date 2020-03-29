import { fromEvent } from 'rxjs';
import { map, sampleTime } from 'rxjs/operators';

//sampleTime emite un evento cuando termina un periodo de tiempo
//si en 1 segundo hacemos click 3 veces (a,b,c) y el 1,5 segundo d
//segundo 1 emite c y segundo 2 emite d

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    map(({x,y}) => ({x,y})),
    sampleTime(2000)
).subscribe(console.log);