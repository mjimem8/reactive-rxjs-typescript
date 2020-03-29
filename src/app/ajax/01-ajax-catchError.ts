import { ajax, AjaxError } from 'rxjs/ajax'
import { pluck, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

const url = 'https://api.github.com/users?per_page=5';

const manejaErrores = (response: Response) => {
    if(!response.ok) {
        throw new Error(response.statusText)
    }

    return response;
};

const fetchPromesa = fetch(url);

// fetchPromesa
// .then( manejaErrores )
// .then(respuesta => respuesta.json())
// .then(console.log)
// .catch(err => console.warn('error en usuarios', err));

ajax(url).pipe(
    pluck('response'),
    catchError((err: AjaxError) => {
        console.warn('error en', err.message);
        return of([]);
    })
).subscribe(console.log);