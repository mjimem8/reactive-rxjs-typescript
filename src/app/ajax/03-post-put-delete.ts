import { ajax } from 'rxjs/ajax'
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

const url = 'https://httpbin.org/delay/1';

// ajax.post( url , {
//     id: 1,
//     nombre: 'Manuel'
// }, {
//     'mi-token': 'ABC123',
// }).subscribe(console.log);

ajax({
    url,
    method: 'POST',
    headers: {
        'mi-token': 'ABC123'
    },
    body: {
        id: 1,
        nombre: 'Manuel'
    }
}).subscribe(console.log)