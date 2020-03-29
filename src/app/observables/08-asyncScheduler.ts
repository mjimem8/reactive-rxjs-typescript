import { asyncScheduler } from 'rxjs';

const saludar = () => console.log('Hola mundo');
const saludar2 = nombre => console.log(`Hola mundo ${nombre}`);

//se ejecuta como un timeout (ejecuta dicha funcion a los 2 segundos)
//asyncScheduler.schedule(saludar, 2000);
//asyncScheduler.schedule(saludar, 2000, 'Fernando');

//no puede ser funcion de flecha
//le pasamos la funcion, el tiempo en el que empieza a ejecutarse y por ultimo el state de inicio
const subs = asyncScheduler.schedule(function(state) {
    console.log('state', state);

    //esto modifica el state y añade el tiempo de interval
    this.schedule(state + 1, 1000);
}, 3000, 0);

asyncScheduler.schedule(() => subs.unsubscribe(), 6000);