import { fromEvent } from 'rxjs';

// Observable con el DOM

const src1$ = fromEvent<MouseEvent>( document, 'click');
const src2$ = fromEvent<KeyboardEvent>( document, 'keyup');

const observer = {
    next: val => console.log('next', val)
}

//para obtener propiedades concretas de un objecto
src1$.subscribe(({x, y}) => {
    console.log(x, y);
});
src2$.subscribe(evento => {
    console.log(evento.key)
});