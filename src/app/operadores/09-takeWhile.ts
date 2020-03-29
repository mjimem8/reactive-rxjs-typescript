import { fromEvent } from "rxjs";
import { first, map, takeWhile } from "rxjs/operators";


//emite el evento hasta que no se cumple la condicion y se completa
//con la propiedad del takeWhile de inclusive(parametro true) -> incluimos como ultimo evento emitido el primero que no cumple la condicion

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    map(({ x, y}) => ({x, y})),
    takeWhile(({y}) => y <= 150, true)
).subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
});