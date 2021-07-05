# Apport ES2018

*  🔖 **Les itérations asynchrones**
*  🔖 **Les propriétés Rest / Spread**
*  🔖 **Nouvelles expressions régulières**
*  🔖 **La fonctionnalité Promise.prototype.finally**

___

## 📑 Les itérations asynchrones

### 🏷️ **for await...of**

L'instruction `for await...of` permet de créer une boucle qui parcourt les objets itérables asynchrones de la même façon qu'on parcourt les itérables synchrones, TypedArray, Map, Set. Cette instruction invoque un mécanisme d'itération spécifique et les instructions à exécuter pour chaque propriété de l'objet.

```js
const fetchList = [
  fetch(url),
  fetch(url),
  fetch(url),
];

const readAll = async () => {
  for await (const data of fetchList) {
    console.log(data);
  }
};

readAll();
```

### 🏷️ **asyncIterator**

Il est possible de créer des générateurs asynchrone avec `Symbol.asyncIterator`.

```js
const myAsyncIterable = {};
myAsyncIterable[Symbol.asyncIterator] = function* fetchList() {
  yield fetch(url);
  yield fetch(url);
  yield fetch(url);
};
const readAll = async () => {
  for await (const data of myAsyncIterable) {
    console.log(data);
  }
};
```
___

## 📑 Les propriétés Rest / Spread

La syntaxe de décomposition permet d'étendre un itérable (par exemple une expression de tableau ou une chaîne de caractères) en lieu et place de plusieurs arguments (pour les appels de fonctions) ou de plusieurs éléments (pour les littéraux de tableaux) ou de paires clés-valeurs (pour les littéraux d'objets).

### 🏷️ **Spread**

Sur d'autre langages le spat opérator, içi le spread opérateur permet d'étaler un tableau sur une signature.

```js
const numbers = [3, 4];
console.log(Math.pow(...numbers)); // 81
```

### 🏷️ **Rest**

On peut également utiliser la décomposition d'un tableau afin d'en affecter une partie à une variable: le rest.

```js
[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(rest); // [30,40,50]
```

___

## 📑 Nouvelles expressions régulières

L'API des expressions régulières possède les nouveautées suivantes:

* s (dotAll) flag for regular expressions

```js
/foo.bar/u.test('foo\nbar');
// → false
```

Le point match avec les sauts de ligne.

```js
/foo.bar/su.test('foo\nbar');
// → true
```

* RegExp named capture groups

Les captures étaient anonymes

```js
const pattern = /(\d{4})-(\d{2})-(\d{2})/u;
const result = pattern.exec('2017-01-25');
// → result[0] === '2017-01-25'
// → result[1] === '2017'
// → result[2] === '01'
// → result[3] === '25'
```

Elles peuvent être nommées.

```js
const pattern = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/u;
const result = pattern.exec('2017-01-25');
// → result.groups.year === '2017'
// → result.groups.month === '01'
// → result.groups.day === '25'
```

* RegExp Unicode Property Escapes

La proposition permet de matcher plus facilement les emoji

```js
regexBasicEmoji.test('4️⃣');
```

___

## 📑 La fonctionnalité Promise.prototype.finally

Les promesses possèdent officiellement finally observé précédemment.