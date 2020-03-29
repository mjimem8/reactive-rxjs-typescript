import { fromEvent } from "rxjs";
import { first, map } from "rxjs/operators";


//first completa el primer evento o completa y 
//emite el primer evento que cumpla una codicion (solo emite una vez)

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    map(({ clientY, clientX}) => ({clientY, clientX})),
    first( event => event.clientY >= 150)
).subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
});