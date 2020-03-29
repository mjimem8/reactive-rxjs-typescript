import { range } from 'rxjs';
import { tap } from 'rxjs/operators';

const numeros$ = range(1,5);

//tap no cambia el flujo de información, solo se ejecuta antes del suscribe
//sirve generalmente para depurar, también sirve como observer
numeros$.pipe(
    tap( x => console.log("antes", x))
)
.subscribe(val => console.log('subs', val))

