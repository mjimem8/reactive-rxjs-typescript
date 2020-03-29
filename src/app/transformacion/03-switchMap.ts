import { fromEvent, Observable } from 'rxjs';
import { debounceTime, map, pluck, mergeAll, mergeMap, switchMap } from "rxjs/operators";
import { ajax } from "rxjs/ajax";

const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append(textInput, orderList);

//helpers
const mostrarUsuarios = (usuarios: GithubUser[]) => {
    console.log(usuarios);
    orderList.innerHTML = '';

    for(const usuario of usuarios) {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = usuario.avatar_url;

        const anchor = document.createElement('a');
        anchor.href = usuario.html_url;
        anchor.text = 'ver página';
        anchor.target = '_blank';
        
        li.append(img);
        li.append(usuario.login + ' ');
        li.append(anchor);

        orderList.append(li);
    }
}

//streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

input$.pipe(
    debounceTime(500),
    pluck<KeyboardEvent, string>('target', 'value'),
    mergeMap<string, Observable<GithubUsersResp>>( texto => ajax.getJSON(
            `https://api.github.com/search/users?q=${texto}`
        )
    ),
    //obtiene los items de la petición ajax
    pluck<GithubUsersResp, GithubUser[]>('items')
)

//switchMap a crea por cada retorno de observable un nuevo observable al que se inscribe
//pero diferencia del mergeMap completa el anterior observable que ha retornado y solo
//puede emitir valores del nuevo observable retornado
const url = 'https://httpbin.org/delay/1?arg=';
//url tiene un dealy de 1 segundo 
input$.pipe(
    pluck('target', 'value'),
    switchMap(texto => ajax.getJSON(url + texto))
).subscribe(console.log);



interface GithubUsersResp {
    total_count: number,
    incomplete_results: boolean,
    items: GithubUser[]
}

interface GithubUser {
        login:               string;
        id:                  number;
        node_id:             string;
        avatar_url:          string;
        gravatar_id:         string;
        url:                 string;
        html_url:            string;
        followers_url:       string;
        following_url:       string;
        gists_url:           string;
        starred_url:         string;
        subscriptions_url:   string;
        organizations_url:   string;
        repos_url:           string;
        events_url:          string;
        received_events_url: string;
        type:                string;
        site_admin:          boolean;
        score:               number;
}