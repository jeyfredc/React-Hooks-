# React-Hooks-

## Tabla de contenido 

[Fundamentos Reactjs](#Fundamentos-Reactjs)

[]()

[]()

[]()

[]()

[]()

[]()

[]()

[]()

[]()

[]()

[]()

[]()

[]()

[]()

[]()

[]()

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## Fundamentos Reactjs

![assets-git/1.png](assets-git/1.png)

Para empezar a manejar React Hooks es necesario tener fundamentos de JavaScript.

Los Hooks son una nueva incroporacion en React 16.8. Permiten usar estado y otras caracteristicas de React sin escribior una clase.

Es necesario tener instalado [nodejs](https://nodejs.org/es/) en su version actual o en la version LTS, es necesario instalarlo para hacer uso de **npm** que es el programa que ayuda a instalar dependencias

A continuacion para empezar el proyecto se debe abrir la terminal y abrir la ubicacion donde se va a instalar el proyecto por ejemplo esa carpeta se puede llamar proyectos React Hooks o el nombre que se desee en mi caso se llama React Hooks

![assets-git/2.png](assets-git/2.png)

A continuacion ejecutar en la terminal el comando `npx create-react-app my-app` en este caso **my-app** va a ser el nombre de la aplicacion o proyecto que se vaya a realizar y dentro de la carpeta **my-app** se van a crear todas las dependencias del proyecto.

En lo posible es mejor usar un editor de codigo como [Visual Studio Code](https://code.visualstudio.com/).

Despues de realizar la instalacion nuevamente en la terminal abrir la ubicacion del proyecto que en este caso la nueva ruta es con la carpeta que se creo que es **my-app** y ejecutar el comando `code .` para abrir Visual Studio Code con las dependencias del proyecto

![assets-git/3.png](assets-git/3.png)

En la terminal ejecutar `npm start`, este comando lo que va a hacer es abrir un servidor en el navegador con el componente de react funcionando y girando sobre si mismo 

![assets-git/4.png](assets-git/4.png)

Los componentes son codigo de html y javascript, pero que se encuentran separados por ejemplo en la imagen a continuacion cada componente representa un color distinto

![assets-git/5.png](assets-git/5.png)

En Visual Studio Code al abrir la carpeta instalada **my-app**, se encuentra varios archivos y carpetas 

![assets-git/6.png](assets-git/6.png)

Dentro de la carpeta **node_modules** estan los modulos de node que sirven para ejecutar todo el codigo

**public** es la carpeta donde estan los archivos publicos que estan en el componente. Por ejemplo esta el archivo **index.html** donde esta tan solo una parte de lo que queremos que vea el cliente.

Lo mas importante del archivo index.html es lo que esta en el div con id root, dentro del div es donde van a estar todos los componentes y funcionalidad que se le quiera dar a la aplicacion creada 

![assets-git/7.png](assets-git/7.png)

**src**(source) Donde estan todos los archivos que se van a trabajar para crear los componentes, el archivo **.gitignore** sirve para que cuando se vaya a subir un proyecto no suban algunos archivos que no queremos mostrar.

Uno de los archivos mas importantes que esta dentro de la carpeta **src** es **App.js** donde estan importados algunos archivos y librerias y ademas en este hay funciones de JavaScript y codigo html

![assets-git/8.png](assets-git/8.png)

El renderizado por ejemplo del icono que se muestra cuando ejecutamos **npm start** es el icono de React que es un atomo. y este se esta representado entre llaves `{logo}`

Pero esto es solo un ejemplo que trae consigo el framework, para empezar a utilizarlo la estructura de **App.js** va a quedar de la siguiente forma

```
import React from 'react';

function App() {
  return (
    <div >

    </div>
  );
}

export default App;

```

Dentro del `<div></div>` agregar el primer Hola mundo React en una etiqueta h1

```
import React from 'react';

function App() {
  return (
    <div >
      <h1>Hola mundo React</h1>
    </div>
  );
}

export default App;

```

El servidor esta pendiente de cada cambio que se esta realizando mientras se este ejecutando en la terminal por tanto al revisar en navegador se va a desplegar **Hola mundo React** como se escribio en el archivo

![assets-git/9.png](assets-git/9.png)

Las extensiones que se pueden instalar en Visual Studio Code son las siguientes:

- [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer)

- [ES7 React/Redux/React-Native/JS snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

- [generate-react-component](https://marketplace.visualstudio.com/items?itemName=joshjg.generate-react-component)

- [Prettier Formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

- [React/Redux/react-router Snippets](https://marketplace.visualstudio.com/items?itemName=discountry.react-redux-react-router-snippets)

- [Reactjs snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.ReactSnippets)

- [Simple React Snippets](https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets)

Estos sirven para facilitar el manejo del codigo, mostrar errores con colores, sugerencias, autocompletado con comandos, etc.

Por el momento se pueden borar unos archivos que no se estan ocupando en el proyecto como por ejemplo App.css, logo.svg. 

A continuacion dentro de la carpeta **src** crear una subcarpeta que tenga por nombre **components** la cual sera donde se van a crear cada uno de los componentes del proyecto, la carpeta se puede llamar de cualquier otra forma, pero el Framework sugiere que se llame de esta forma.

Dentro de esta carpeta crear un archivo que se llame **Contador.js** y se debe notar que los componentes la primer letra del archivo en mayuscula.

Dentro del archivo escribir **imr** que es la abreviacion de `import React from 'react'` y presionar con la tecla tab del teclado para que se autocomplete, esto solo va a suceder si se instalaron las extensiones anteriormente sugeridas.

**Nota:** cada vez que se cree un componente se debe importar react

si se escribe la abreviacion **sfc** va a traer la estructura de la funcion que debe llevar el archivo y ahora escribir **Contador**

![assets-git/10.png](assets-git/10.png)

Dentro del return agregar un `<h3>` y entre sus etiquetas html escribir Mi primer componente

```
import React from 'react'

const Contador = () => {
    return ( 
        <h3>Mi primer componente</h3>
     );
}
 
export default Contador;
```

Para llamar al componente se debe utilizar en el archivo **App.js** y se debe importar con el nobre del archivo y la ubicacion `import Contador from './components/Contador'`

para utilizar el componente se debe traer como una especie de html dentro del return asi `<Contador />`

```
import React from 'react';
import Contador from './components/Contador'

function App() {
  return (
    <div >
      <h1>Hola mundo React</h1>
      <Contador/>
    </div>
  );
}

export default App;

```

Visualizar nuevamente el navegador y a continuacion se ve el componente funcionando

![assets-git/11.png](assets-git/11.png)

A partir de este momento se va a empezar a hacer uso de los Hooks. Que permiten usar estados y otras caracterisiticas de React sin escribir una clase.

El estado son datos que se pueden manipular, para hacer uso del estado importandolo con react entre llaves {useState}.

En el componente Contador se va hacer uso del estado para eso se importa `import React, {useState} from 'react'`

Ahora antes del `return` va a estar toda la logica que se requiera hacer para la aplicacion y dentro de este se va hacer uso del estado

para esto se crea una constante que se hace = al useState y tambien otra que se llame Contador que va a contener un Arrow Function.

Lo que va dentro de las llaves cuadradas [] es el nombre del estado y luego se coloca generalmente set y el nombre del estado, este servira para modificar en este ejemplo el numero

Dentro de los parentesis del `useState()` se va a dar el valor inicial del estado, el cual puede recibir cualquier tipo de dato, como un numero, un booleano, un array, un objeto, etc.

```
import React, {useState} from 'react'

const Contador = () => {

    const [numero, setNumero] = useState(0);

    return ( 
        <h3>Mi primer componente</h3>
     );
}
 
export default Contador;
```

para llamar el estado en este caso, o cualquier valor que venga de javascript se coloca el nombre entre corchetes `{numero}`

```
import React, {useState} from 'react'

const Contador = () => {

    const [numero, setNumero] = useState(1);

    return ( 
        <h3>Mi {numero}} componente</h3>
     );
}
 
export default Contador;
```

Automaticamente este se va a renderizar en el navegador

![assets-git/12.png](assets-git/12.png)

y si se coloca un string en el state tambien se va a renderizar en el navegador 

```
import React, {useState} from 'react'

const Contador = () => {

    const [numero, setNumero] = useState('primer');

    return ( 
        <h3>Mi {numero} componente</h3>
     );
}
 
export default Contador;
```
![assets-git/13.png](assets-git/13.png)

`setNumero` va a servir para modificar el estado. El ejemplo sera que un usuario haga click sobre un boton y los numeros empiecen a cambiar, presiona 0, presiona 1, presiona 2, etc.

para esto devajo del h3 se crea una etiqueta de boton que se llame Aumentar 

```
import React, {useState} from 'react'

const Contador = () => {

    const [numero, setNumero] = useState('primer');

    return ( 
        <h3>Mi {numero} componente</h3>
        <buttton>Aumentar<button>
     );
}
 
export default Contador;
```

Al renderizar esto, la pagina muestra un error

![assets-git/14.png](assets-git/14.png)

y es porque react tiene la filosofia de renderizar un solo componente, para que no ocurra un error la etiqueta h3 y button se debe envolver en un div padre 

```
import React, {useState} from 'react'

const Contador = () => {

    const [numero, setNumero] = useState('primer');

    return ( 
        <div>
            <h3>Mi {numero} componente</h3>
            <button>Aumentar</button>
        </div>
     );
}
 
export default Contador;
```

De esta forma ya se va a renderizar el componente en el navegador

![assets-git/15.png](assets-git/15.png)

Existe otra alternativa a usar diferente al div y se llama `Fragment`, este se debe importar junto con useState entre corchetes `{useState, Fragment}` y posteriormente se reemplazan en este caso por los `div`

```
import React, {useState, Fragment} from 'react'

const Contador = () => {

    const [numero, setNumero] = useState('primer');

    return ( 
        <Fragment>
            <h3>Mi {numero} componente</h3>
            <button>Aumentar</button>
        </Fragment>
     );
}
 
export default Contador;
```

De esta forma se va a seguir renderizando de la misma forma

![assets-git/15.png](assets-git/15.png)

Ahora se va a dar funcionalidad al boton con un `onclick={}` el cual al escuchar el click va a empezar aumentar de 1 en 1, lo que va dentro de los corchetes sera una funcion o lo que se desee.

La funcion se va a crear con una constante que se va a llamar aumentar y esta va a contener un Arrow Function 

```
import React, {useState, Fragment} from 'react'

const Contador = () => {

    const [numero, setNumero] = useState('primer');

    const aumentar = () => {
        
    }

    return ( 
        <Fragment>
            <h3>Mi {numero} componente</h3>
            <button onClick={ }>Aumentar</button>
        </Fragment>
     );
}
 
export default Contador;
```

y ahora para ver como esta funcionando se puede hacer un `console.log(Estoy haciendo click)` y agregar la funcion al `onClick={aumentar}`.

```
import React, {useState, Fragment} from 'react'

const Contador = () => {

    const [numero, setNumero] = useState('primer');

    const aumentar = () => {
        console.log('Estoy haciendo click')
    }

    return ( 
        <Fragment>
            <h3>Mi {numero} componente</h3>
            <button onClick={ aumentar }>Aumentar</button>
        </Fragment>
     );
}
 
export default Contador;
```

Para poder ver que este funcionando dar click derecho sobre el navegador, hacer click donde diga inspeccionar elemento y ubicarse en la pestaña consola o tambien se puede usar con el teclado **Ctrl + shift + j** despues de tener abierta la consola, hacer click varias veces sobre el boton aumentar y como se observa en el costado derecho de la pantalla aparece que di click 11 veces

![assets-git/16.png](assets-git/16.png)

Para añadir funcionalidad ahora si se agrega setNumero para empezar a cambiar de 1 en 1, si se coloca `numero +1`, por si solo el navegador va a arrojar un error porque para eso recomienda hacer uso de en este caso el metodo o la funcion que va a hacer el cambio de estado `setNumero(numero +1)`

```
import React, {useState, Fragment} from 'react'

const Contador = () => {

    const [numero, setNumero] = useState(0);

    const aumentar = () => {
        console.log('Estoy haciendo click')
        setNumero(numero +1);
    }

    return ( 
        <Fragment>
            <h3>Mi {numero} componente</h3>
            <button onClick={ aumentar }>Aumentar</button>
        </Fragment>
     );
}
 
export default Contador;
```

![assets-git/17.png](assets-git/17.png)

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>