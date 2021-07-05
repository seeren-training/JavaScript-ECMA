# Apport ES2016

*  🔖 **Async functions**
*  🔖 **Shared memory et les atomics**

___

## 📑 Async functions

La déclaration async function définit une fonction asynchrone qui renvoie un objet AsyncFunction. Une fonction asynchrone est une fonction qui s'exécute de façon asynchrone grâce à la boucle d'évènement en utilisant une promesse (Promise) comme valeur de retour.

```js
const fetchUrl = (url) => fetch(url).then(response => response.json());

const retrieveData = async () => {
  const data = await fetchUrl('https://api.magicthegathering.io/v1/cards');
};
```

Avec cette syntaxe l'utilisation d'une promesse ne se fait plus avec then et catch, l'opérateur `async` rend possible l'iutilisation de `await` pour récupérer le resolve d'une promesse. En cas d'echec une exception est levée et il faudra l'attraper avec un catch classique.

```js
const fetchUrl = async (url) => {
  const response = await fetch(url);
  if (response.status !== 200) {
    throw new Error('Not found');
  }
  return response.json();
};

const displayFetcheddata = async () => {
  try {
    const data = await fetchUrl('foo');
  } catch (error) {
    console.log(error);
  }
};
```

___

## 📑 Shared memory et les atomics

La mémorie partagée transite par les tampons partagés.

### 🏷️ **SharedArrayBuffer**

L'objet SharedArrayBuffer est utilisé afin de représenter un tampon de données binaires brutes générique de longueur fixe. Il est semblable à l'objet ArrayBuffer mais peut ici être utilisé pour créer différentes vues sur une même mémoire partagée. À la différence d'un ArrayBuffer, un SharedArrayBuffer ne peut pas être détaché.

```js
const buffer = new SharedArrayBuffer(8);
```

La mémoire partagée peut être créée et mise à jour de façon simultanée entre les workers et le thread d'exécution principal. Selon le système (le processeur, le système d'exploitation, le navigateur), cela peut prendre du temps avant que le changement soit propagé sur l'ensemble des contextes. Pour que la synchronisation s'effectue, on doit utiliser les opérations atomiques.

### 🏷️ **Atomics**

L'objet Atomics fournit des opérations atomiques sous la forme de méthodes statiques. Celles-ci sont utilisées avec les objets SharedArrayBuffer.

[Atomics](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Atomics)