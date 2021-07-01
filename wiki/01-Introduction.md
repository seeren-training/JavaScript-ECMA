# Introduction

*  🔖 **Rappel**
*  🔖 **Synthèse**
*  🔖 **Compatibilité**
*  🔖 **Outils**
*  🔖 **Compilateurs**

___

## 📑 Rappel

![image](./resources/js.jpg)

JavaScript est un langage objet à prototypage. Les constructeurs sont invoquables et instanciables avec un contexte d'exécution variant. Les variables appartiennent context global et plusieurs règles syntaxiques propres au language sont à connaitre.

### 🏷️ **Contexte**

Le contexte d'éxécution dans une interprétation client par défaut correspond à window.

```js
console.log(this);
```

Le contexte d'éxécution évolue sur un attachement d'évènement.

```js
document.addEventListener("readystatechange", function () {
    console.log(this);
});
```

Le contexte d'éxécution évolue dans un constructeur instancié.

```js
new function () {
    console.log(this);
}
```

Le contexte d'éxécution peut être modifié avec `call` ou `apply` et peut être fixé avec `bind` sur les appels de constructeurs.

```js
(function () {
    console.log(this);
}).call("Foo");
```

### 🏷️ **Constructeur**

Les constructeurs peuvent être instanciés ou invoqués.

```js
function foo() { }
// Call
foo();
// Instanciate
var obj = new foo();
```

L'instanciation permet d'obtenir une instance dont les caractéristiques proviennent du prototype, définit en amont ou à la construction.

```js
function Student(age) {
    this.age = age;
}
Student.prototype.learn = function () {
    return "Learn";
};
var john = new Student(17);
```

L'hériatge au sens orienté objet ne s'applique que partiellement sur ce modèle qui offre plus de possibilité.

```js
function Learner() {
}
function Student(age) {
    this.age = age;
}
Learner.prototype.learn = function () {
    return "Learn";
};
Student.prototype = new Learner();
var john = new Student(17);
```

### 🏷️ **Patterns**

La déclaration de variable polluent le contexte global et peuvent rentrer en collision avec des propriétés existantes.

```js
var foo = true;
var document = true;
console.log(true === window.foo);
console.log(true !== window.document);
```

Afin de préserver le contexte d'exéction, le pattern `module` utilise les portées pour fournir un prototype public utilisant des membres restreints.

```js
var student = (function () {
    
    var learn = true;

    return {
        get learn () {
            return learn;
        },
        toogle() {
            learn = !learn;
        }
    };
})();
```

Le pattern closure permet d'obtenir de nouveaux objets dont chaque instance partage l'état des membres encapsulés en fonction de leur portée.

```js
var student = (function () {

    var status = "Open to work";
    
    return function () {

        var learn = true;

        return {
            get status() {
                return status;
            },
            get learn() {
                return learn;
            },
            toogle() {
                learn = !learn;
            },
        };
    };
})();
```

Ces différentes options syntaxiques ne simplifient pas l'homogéniété de la forme de l'écosystème du language et rend le savoir faire moins intéropérable.

___

## 📑 Synthèse

![image](./resources/es6.jpg)

L'année 2015 avec la version es6 puis les autres offrent des sucres syntaxiques bousculants les pratiques.

### 🏷️ **2015**

* Constants
* Scoping
* Arrow Functions
* Extended Parameter Handling
* Template Literals
* Extended Literals
* Enhanced Regular Expression
* Enhanced Object Properties
* Destructuring Assignment
* Modules
* Classes
* Symbol Type
* Iterators
* Generators
* Map/Set & WeakMap/WeakSet
* Typed Arrays
* New Built-In Methods
* Promises
* Meta-Programming
* Internationalization & Localization

### 🏷️ **2016**

* Array Includes
* Exponentiation operator

Sur le contrast en les deux versions concernant leur apport, l'on comprend que l'année 2015 marque un tournant.

___

## 📑 Compatibilité

La table des compatibilité en 2021 montre que le support devient majeur sur l'ensemble des clients.

![image](./resources/compatibility.png)

Malgrès cette compabilité, afin de les palier et d'obternir une compatibilité optimale sur les dernières versions, il est courant de transpiller le code.

___

## 📑 Outils

Observons l'écosystème des outils de développement et d'intégration.

### 🏷️ **IDE**

Visual Studio Code

![image](./resources/vscode.png)

Web Storm

![image](./resources/webstorm.png)

### 🏷️ **Task runner**

Gulp

![image](./resources/gulp.jpg)

Grunt

![image](./resources/grunt.png)

### 🏷️ **Module Bundler**

Rollup

![image](./resources/rollup.png)

Webpack

![image](./resources/webpack.png)

### 🏷️ **Intégration**

Circle

![image](./resources/circle.png)

Travis

![image](./resources/travis.png)

___

## 📑 Compilateurs

Afin de profiter d'un support de compatibilité et d'optimiser son code, il est courant de compiler JavaScript.

Typescript

![image](./resources/ts.png)

Babel

![image](./resources/babel.jpg)

Cofee Script

![image](./resources/cofee.png)