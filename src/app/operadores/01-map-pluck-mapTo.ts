import { range, fromEvent } from 'rxjs';
import { map, pluck, mapTo } from 'rxjs/operators';

//range(1,5).pipe(
//    map<number, string>(val => String(val * 10))
//)
//.subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyupCode$ = keyup$
.pipe(
    map(val => val.code)
);

//obtiene una propiedad del evento que es emitido
const keyupPluck$ = keyup$.pipe(
    pluck('target', 'baseURI')
);

//a cada evento emitido transforma su valor
const keyupMapTo$ = keyup$.pipe(
    mapTo('tecla presionada')
);

keyupCode$.subscribe(val => console.log('map', val));
keyupPluck$.subscribe(val => console.log('pluck', val));
keyupMapTo$.subscribe(val => console.log('mapTo', val));