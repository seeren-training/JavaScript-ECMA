# Asynchronisme

*  🔖 **Présentation des Promises**
*  🔖 **Utilisation des Promises**

___

## 📑 Présentation des Promises

L'objet Promise (pour « promesse ») est utilisé pour réaliser des traitements de façon asynchrone. Une promesse représente une valeur qui peut être disponible maintenant, dans le futur voire jamais.

L'idée est d'avoir une syntaxe unifiée poru régir à de l'asynchrone.

```js
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('foo'), 3000;
});
```

```js
promise.then((value) => {
  console.log(value);
});
```

Cela facilite la réaction à des requêtes HTTP.

```js
function maFonctionAsynchrone(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => resolve(xhr.responseText);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
}
```

Vous pouvez régir en cas de succces avec `then`, d'échec avec `catch` et dans les deux cas avec `finally`.

```js
maFonctionAsynchrone(url)
.then((data) => {
  
  })
.catch((status) => {
  
  })
.finally(() => {
  
})
```

Il est possible de chainer les promesses si un callback renvoie une promesse.

```js
someAsyncJob()
  .then((data) => {
    console.log('success', data);
    return someAsyncJob();
  })
  .then((data) => {
    console.log('success', data);
  });
```

[Promise](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise)
___

## 📑 Utilisation des Promises

Les promesses sont utilisées par certaines API, notamment fetch.

### 🏷️ **Fetch**

[Fetch](https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch)

La valeur de retour de fetch est une promesse.

```js
fetch(url)
  .then((response) => { });
```

En cas de succes la réponse à la requête est fournie. Ses différentes méthodes renvoient également une promesse et vous pouvez utilisez le chainage pour récupérer le contenu formaté.

```js
fetch(url)
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
  });
```

Nous observerons async et await permettant de réduire cette syntaxe.


