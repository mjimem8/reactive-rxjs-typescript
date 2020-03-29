import { merge, fromEvent } from 'rxjs';
import { pluck } from 'rxjs/operators';

//la funcion merge emite en la salida los eventos intercalados de ambos observables
//finaliza cuando ambos finalizan

const keyup$ = fromEvent( document, 'keyup');
const click$ = fromEvent( document, 'click');

merge(
    keyup$.pipe(pluck('type')), 
    click$.pipe(pluck('type'))
).subscribe(console.log)