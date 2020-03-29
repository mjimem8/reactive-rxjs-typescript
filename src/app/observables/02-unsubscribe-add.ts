import { Observer, Observable } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('siguiente:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('completador') 
};

const intervalo$ = new Observable<number>(subscriber => {
    //crear un contador
    let contador = 0;

    const interval = setInterval(() => {
        contador++;
        subscriber.next(contador)   ;
        console.log(contador); 
    },1000);

    setTimeout(() => {
        subscriber.complete();
    }, 2500);

    //el return se ejecuta con el complete()
    return () => {
        clearInterval(interval);
        console.log("intervalo destruido");
    }
})

const subscription1 = intervalo$.subscribe(observer);
const subscription2 = intervalo$.subscribe(observer);
const subscription3 = intervalo$.subscribe(observer);

subscription1.add(subscription2).add(subscription3);


//se ejecuta a los 3 segundos
setTimeout(() => {
    subscription1.unsubscribe();

    console.log('completado timeout');
},6000);