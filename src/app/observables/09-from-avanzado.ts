import { of, from } from 'rxjs';

//of = toma argumentos y genera una secuencia
//from = array, promise, iterable, observable, etc

const observer = {
    next: val => console.log('next: ', val),
    complete: () => console.log('complete')
};

const miGenerador = function*() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
};
const miIterable = miGenerador();

//es lo mismo
//for(let id of miIterable){
//    console.log(id);
//}
from(miIterable).subscribe(observer);

//es lo mismo
//const sources$ = from([1,2,3,4,5]);
//const sources$ = of(...[1,2,3,4,5]);

const sources$ = from(fetch('https://api.github.com/users/klerith'));

//sources$.subscribe(async (resp) => {
//    console.log(resp);
//
//    const dataRep = await resp.json();
//
//    console.log(dataRep);
//});

