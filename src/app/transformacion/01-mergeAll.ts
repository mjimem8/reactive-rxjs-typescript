import { fromEvent, Observable } from 'rxjs';
import { debounceTime, map, pluck, mergeAll } from "rxjs/operators";
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

//como ajax.getJSON devuelve un observable mergeAll se suscribe a dicho observable
//asi no hece falta suscribirnos dentro del suscribe del primer observable de ajax.getJSON
input$.pipe(
    debounceTime(500),
    pluck<KeyboardEvent, string>('target', 'value'),
    map<string, Observable<GithubUsersResp>>( texto => ajax.getJSON(
            `https://api.github.com/search/users?q=${texto}`
        )
    ),
    mergeAll<GithubUsersResp>(),
    //obtiene los items de la petición ajax
    pluck<GithubUsersResp, GithubUser[]>('items')
).subscribe( mostrarUsuarios );



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