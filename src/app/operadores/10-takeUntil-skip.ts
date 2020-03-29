import { fromEvent, interval } from "rxjs";
import { takeUntil, skip } from "rxjs/operators";

const boton = document.createElement('button');
boton.innerHTML = 'Detener Timer';

document.querySelector('body').append(boton);

const counter$ = interval(1000);
const clickBtn$ = fromEvent(boton, 'click').pipe(
    skip(1)
);
//ejemplo con skip(1)
//click 1 -> no se emite
//click 2 -> si se emite

//el takeUntil completa un observable cuando el observable al que hacemos referencia emite su primer valor
//el skip definimos a partir de que numero de eventos queremos que se emitan los eventos

counter$.pipe(
    takeUntil(clickBtn$)
).subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
});
