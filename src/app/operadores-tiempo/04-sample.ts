import { fromEvent, interval } from 'rxjs';
import { sample } from 'rxjs/operators';

//sample emite el evento del primer observable si se emite a su vez un evento del segundo observable
//es una forma de saber el estado de un observable utilizando otro
const interval$ = interval(500);
const click$ = fromEvent<MouseEvent>(document, 'click');

interval$.pipe(
    sample(click$)
).subscribe(console.log);