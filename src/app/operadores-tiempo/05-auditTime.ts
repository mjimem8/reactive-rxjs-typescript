import { fromEvent, interval } from 'rxjs';
import { sample, auditTime, map } from 'rxjs/operators';

//auditTime espera a que emite un evento y empieza a contar
//un periodo de tiempo y cuando termine emite el ultimo evento que se ha
//querido emitir en ese periodo (si tiene)
const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    map(({x}) => ({x})),
    auditTime(2000)
).subscribe(console.log);