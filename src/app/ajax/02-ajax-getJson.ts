import { ajax, AjaxError } from 'rxjs/ajax'
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

const url = 'https://httpbin.dorg/delay/1';
//const url = 'https://api.github.com/users?per_page=5';

const manejaError = (resp: AjaxError) => {
    console.warn('error', resp.message);

    return of({
        ok: false,
        usuarios: []
    });
}

//con getJson solo devuelve la respuesta, sin headers, etc
const obs$ = ajax.getJSON(url).pipe(
    catchError(manejaError)
);
const obs2$ = ajax(url).pipe(
    catchError(manejaError)
);

obs$.subscribe(data => console.log('getJson', data));
obs2$.subscribe(data => console.log('ayax', data));