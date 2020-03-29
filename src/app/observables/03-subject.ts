import { Observer, Observable, Subject } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('siguiente:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('completador') 
};

const intervalo$ = new Observable<number>(subscriber => {
    
    const interval = setInterval(
        () => subscriber.next(Math.random()), 1000
    );

    return () => {
        console.log('intervalo destruido');
        clearInterval(interval)
    };
})

// 1 - casteo multiple (destribuye la misma información de forma multiple)
// 2 - tambien es observer
// 3 - maneja next, error y complete
const subject$ = new Subject();

//funcion como observer
const subscription = intervalo$.subscribe(subject$);

//funcion como observable
const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
    subject$.next(10);
    subject$.complete();

    subscription.unsubscribe();
}, 3500);