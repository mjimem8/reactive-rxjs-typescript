import { interval, timer } from 'rxjs';

//interval y timer son asincronos

const observer = {
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
};

const interval$ = interval(1000);

//timer dispara el evento a los 2 segundo y completa el observable
//const timer$ = timer(2000);

//esto seria como un interval que inicia a los 2 segundos
//const timer$ = timer(2000,1000);

const hoyEn5 = new Date(); //ahora
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);

//asi se completa el observable dentro de 5 segundos 
const timer$ = timer(hoyEn5);

console.log('Inicio');
//interval$.subscribe(observer);
timer$.subscribe(observer);
console.log('fin');
