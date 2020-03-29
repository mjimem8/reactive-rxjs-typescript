import { Observable, Subscriber, Observer } from 'rxjs';

const obs$ = new Observable<string>(subscriber => {
    subscriber.next('Hola');
    subscriber.next('Mundo');
    subscriber.next('1');

    //forzar un error
    //const a = undefined;
    //a.nombre = 'Fernando';
    
    subscriber.complete();

    subscriber.next('2');
});

const observer: Observer<any> = {
    next: value => console.log('siguiente:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('completador') 
};

obs$.subscribe(observer);

//obs$.subscribe(
//    valor => console.log('next', valor),
//    error => console.warn('error', error),
//    () => console.info('completado')
//);