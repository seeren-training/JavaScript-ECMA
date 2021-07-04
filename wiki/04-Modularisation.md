# Modularisation

*  🔖 **AMD et CommonJS**
*  🔖 **ES2015**
*  🔖 **Différences entre les approches**
*  🔖 **Gestion des dépendances**
*  🔖 **Dynamique loading**

___

## 📑 AMD et CommonJS

Afin de ne pas inclure l'ensemble des scripts en les reliants à un fichier html plusieurs solutions de modularisation existent.

### 🏷️ **AMD**

> Asynchronous module definition

Représenté par la librairie `require.js` offrent une solution avant que les module bundler apparaissent.

```bash
npm install requirejs
```

La librairie utilise le concept de point d'entré.

```html
<script data-main="src/app" src="./node_modules/requirejs/require.js"></script>
```

Dans ce point d'entré moyennant configuration vous pouvez charger de façon asynchrone des modules avec la fonction `require`.

```js
requirejs.config({baseUrl: 'src',});

require(['car'], (Car) => {

    console.log(Car);

});
```

Un module doit être déclaré avec la fonction `define`.

```js
define(() => class Car { }); 
```

Proposé à une époque ou le pattern module et closure dominaient, la librairie jquery était un standard pour la modification du DOM il était appréciable de modulariser les scripts.

> C'est un passé lointain

### 🏷️ **Common JS**

En 2008 avec la sortie de Node.JS le standard Common JS standardisait la définition de modules.

La fonction `require` permet de façon synchrone de récupérer un module.

```js
const Car = require('./car');

console.log(Car);
```

Un module doit être déclaré avec le contexte module.

```js
module.exports = class Car { };
```

___

## 📑 ES2015

La modularisation comme observé standardise au niveau du langage la modularisation avec `export` et `import`.

```js
export class Foo { }
```

```js
import { Foo } from './foo';
```

```html
<script type="module" src="./src/app.js"></script>
```

Le problème reste la prise en charge par les navigateurs côté front et côté back le support en fonction de la version de node.

___

## 📑 Différences entre les approches

L'optimisation différencie les deux approches. Optimiser la taille ou optimiser les requêtes.

### 🏷️ **Front**

Avec AMD vous ne chargez que ce dont le programme a besoin et de façon asynchrone. Le volume de code est optimal mais le nombre de requêtes peut être elevé.

### 🏷️ **Back**

Avec CommonJS l'ensemble di progremme est compilé et vous pouvez n'exécuter qu'une partie de votre code applicatif. Par contre il n'y a pas de requêtes pour récupérer les sources.
___

## 📑 Gestion des dépendances

Les deux approches se différencie par le choix du package maanager.

### 🏷️ **Front**

`Bower` était longtemps considéré comme le package manager côté front.

[Bower](https://bower.io/)

### 🏷️ **Back**

Sur node, le package manager est `npm`. Il ne concerne pas que les packages back et proposer de résoudre les dépendances des dépendances en les factorisants.

![npm](https://www.npmjs.com/)

___

## 📑 Dynamique loading

En dehors de toutes convention et modularisation standard, la technique du dynamic scripp loading existe.

L'idée est de charger un script sans utilitaire et en utilisant les éléments globaux du script chargé pour le manipuler.

Loader

```js
function loadScript(url, callback)
{
   var head = document.getElementsByTagName('head')[0];
   var script = document.createElement('script');
   script.type = 'text/javascript';
   script.src = url;
   script.onload = callback;
   head.appendChild(script);
}
```

Utilisation

```js
loadScript("myscript.js", function() {
    myFunction();
});
```

Cette époque ou chaque solution était portée par une communauté est terminée, nous n'avons pas parlé des outils intermédiaires comme browerify et allons maintenant envisager de compiler notre code afin de régler ces problèmes.