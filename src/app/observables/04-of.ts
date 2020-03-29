import { of } from 'rxjs';

//con of creamos un observable y a su vez lanzamos sus eventos

//es lo mismo
//const obs$ = of(1,2,3,4,5,6);
//const obs$ = of(...[1,2,3,4,5,6]);

const obs$ = of([1, 2], {a:1, b:2}, function(){}, true, Promise.resolve(true)); 

//este caso es sincrono
console.log("principio");
obs$.subscribe(
    next => console.log('next', next),
    null,
    () => console.log('complete')   
);
console.log("fin");
