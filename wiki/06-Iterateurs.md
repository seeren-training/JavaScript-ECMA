# Itérateurs et générateurs

*  🔖 **Création d'un itérateur**
*  🔖 **Les nouvelles boucles For**
*  🔖 **Création d'un générateur**
*  🔖 **Exploitation d'un générateur**

___

## 📑 Création d'un itérateur

Un itérateur est un objet sachant comment accéder aux éléments d'une collection un par un et qui connait leur position dans la collection. En JavaScript, un itérateur expose une méthode next() qui retourne l'élément suivant dans la séquence. Cette méthode renvoie un objet possédant deux propriétés : done et value.

Les objets itérables possèdent une fonction qui définit le comportement lors de l'itération: l'itérator.

```js
const someVar = 'John';
const iterator = someVar[Symbol.iterator]();
```

Un itérateur possède une méthode `next` renvoyant un objet avec une ou deux inforamtions. La valeur de l'élément en cours d'itération et la propriété `done` permettant à la structure itérative de passer à l'élément suivant.

```js
fistname[Symbol.iterator]().next(); // { value: "J", done: false }
```

### 🏷️ **Création**

Pour créer un itérator pour une valeur souhaitée il suffit de spécifier la fonction en rapport avec Symbol.iterator.

```js
const firstname = new String('John');

firstname[Symbol.iterator] = () => {
  let index = 0;
  return {
    next() {
      if (index < firstname.length) {
        const value = { value: firstname[index].toUpperCase(), done: false };
        index += 1;
        return value;
      }
      return { done: true };
    },
  };
};
```

Dans cet exemple l'itérator formate en majuscule l'élément en cours d'itération.

### 🏷️ **Utilisation**

Seule les expressions utilisant l'itérateur utiliserons ce comportement. Comme la décomposition et le reste et les structures itératives.

___

## 📑 Les nouvelles boucles For

Le for, for in et for of sont les structures itératives offertent par le langage.

### 🏷️ **For of**

Le for of permet de parcourir les itérables.

```js
for (const letter of firstname) {
    console.log(letter);
}
```

Avec l'opérateur `await` il est possible d'itérer des asynchrones.

___

## 📑 Création d'un générateur

Les itérateurs personnalisés sont un outil utile mais leur création peut s'avérer complexe et il faut maintenir leur état interne. Avec les générateurs, on peut définir une seule fonction qui est un algorithme itératif et qui peut maintenir son état.

Un générateur est un type de fonction spécial qui fonctionne comme une fabrique (factory) d'itérateurs. Une fonction devient un générateur lorsqu'elle contient une ou plusieurs expressions yield et qu'elle utilise la syntaxe function*.


### 🏷️ **Création**

Pour pouvoir bénéficier de cette syntaxe il faut utiliser un plugin complémentaire.

```bash
npm install --save-dev @babel/plugin-transform-runtime
```

Il faut modifier le fichier de configuration du compiler.

```bash
"plugins": [
    ["@babel/transform-runtime"]
]
```

L'objectif est de renvoyer avec l'opérateur `yield` ce qui constitura la valeur des éléments obtenus lors d'une itération.

```js
function* toUpperGenerator(value) {
  for (const letter of value) {
    yield letter.toUpperCase();
  }
}
```

___

## 📑 Exploitation d'un générateur

Un générateur renvoie un itérateur.

```js
for (const letter of toUpperGenerator('John')) {
  console.log(letter);
}
```

Afin de l'utiliser en affection d'un itérateur il est utile d'utilsier une closure.

```js
const toUpperGenerator = (strValue) => function* () {
  for (const letter of strValue) {
    yield letter.toUpperCase();
  }
};
```

Cette syntaxe permet d'appliquer le générateur pour affecter un itérateur.

```js
firstname[Symbol.iterator] = toUpperGenerator('Hello');
console.log([...firstname]);
```
