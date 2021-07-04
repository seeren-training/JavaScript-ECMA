# Apport ES2015

*  🔖 **Classe et héritage**
*  🔖 **Méthodes statiques**
*  🔖 **Création de proxy**
*  🔖 **Set**
*  🔖 **Map**

___

## 📑 Classe et héritage

Dans la programmation orientée objet, une classe est un code  extensible pour créer des objets, fournissant des valeurs (variables ou attributs) et des de comportement (fonctions ou méthodes).

Donc c'est un espace de code identifié pour stocker des variables et des fonctions. Il est possible de demander un nouvel exemplaire de cet espace de code.

### 🏷️ **Déclaration**

Une classe se déclare avec le mot `class`.

> Les classes se nomment en utilisant le PascalCase.

```js
class MyClass { }
```

### 🏷️ **Modularisation**

L'import/export est utile pour utiliser un membre importé depuis un autre fichier ou il est exporté.

```js
export class Foo { }
```

```js
import { Foo } from './foo';
```

> Utiliser au maximum l'autocomplétion de votre IDE pour ne pas avoir à écrire l'import.

Si vous ne compilez pas votre programme, la déclaration du script dans le fichier html doit être de type `module`.

```html
<script type="module" src="./src/app.js"></script>
```

Vous devez impérativement exécuter votre page web sur le protocol http pour que la requête ne soit pas bloquée.

Vous devez également spécifier l'extension du fichier à charger lors de l'import.

```js
import { Foo } from './foo.js';
```

### 🏷️ **Instanciation**

Voyez la classe comme un modèle de code dont vous pouvez obtenir un exemplaire. Un prototype que l'on ne manipule pas et dont l'on souhaite un exemplaire.

> Ainsi une classe est un prototype qu'il faut instancier avec l'opérateur new pour obtenir un objet.

```js
const foo = new Foo();
```

En instanciant notre classe, un objet est construit. L'avantage est qu'une classe stock des états avec les variables/attributs et des comportements avec des méthodes. Nous pourrons alors faire varier ces états unitairement en utilisant l'objet. 

___

### 🏷️ **Constructeur**

Le constructeur d'une classe est semblable à une fonction mais elle a un comportement et un objectif particulier. Son objectif est de construire l'objet en spécifiant ses attributs et leur valeurs. Un constructeur se déclare avec l'identifiant `constructor`.

```js
class Foo {

    constructor () {
        console.log("Foo est instancié");
    }

}
```

Elle est appelée quand la classe est instanciée,

```js
const foo = new Foo();
```

Le constructeur accepte des arguments entrants.

```js
class Car {

    constructor (type) {
        console.log(type);
    }

}
```
```js
const car = new Car("mini");
```

### 🏷️ **Attributs**

Les attributs sont déclarés dans la classe et possédés par les instances, ils représentent l'état de ce dernier. En bref, les attributs stockent des informations sur l'instance et sont similaires à des variables mais qui appartiennent à l'objet.

#### Public

Un attribut public est accessible par l'ensemble des acteurs du programme.

```js
export class Car {

    type;

    constructor(type) {
        this.type = type;
    }

}
```

```js
console.log(car.type);
```

#### Private

Un attribut private est accessible dans le corp du cosntructeur uniquement.

```js
export class Car {

    #speed;

    constructor() {
        this.#speed = 200;
    }

}
```

```js
console.log(car.speed); // undefined
```

### 🏷️ **Méthodes**

Les méthodes sont déclarés dans la classe et possédés par les instances, ils représentent le comportement de ce dernier. En bref, les méthodes sont similaires à des fonctions mais qui appartiennent à l'objet.

#### Public

Les méthodes se déclarent de façon semblable au constructeur. Les arguments sont optionnels et par défaut la valeur de retour est undefined.

```js
export class Car {

    type = "Mini";

    start() {
        return `Car of type "${this.type}" started`;
    }

}
```

Uné méthode peut accéder aux attributs et aux autres méthodes via le mot `this` et peut posséder des variables locales, disponibles dans la méthode uniquement, comme ses arguments par exemple.

#### Private

La notation de visibilité est identique à celle des attributs.

```js
export class Car {

    type = "Mini";

    #init() {
        return `Initialisation`;
    }

    start() {
        this.#init();
        return `${this.#init()}... Car of type "${this.type}" started`;
    }

}
```

#### Getter/Setter

La notation get set de l'objet litéral est disponible dans les classes.

```js
export class Car {

    #speed;

    constructor() {
        this.#speed = 200;
    }

    get speed () {
        return this.#speed;
    }

    set speed (speed) {
        this.#speed = speed;
    }

}
```

### 🏷️ **Héritage**

L'héritage de protoype est simplifiée, le mot `extends` permet d'hériter d'un prototype.

```js
export class Vehicle {

    constructor() {
        console.log("Vehicle construct");
    }

    start() {
        return `Vehicle started`;
    }

}
```

L'enfant doit invoquer le constructeur parent avec l'expression `super` s'il existe.

```js
export class Car extends Vehicle {

    constructor() {
        super();
        console.log("Car construct");
    }

    start() {
        return `${super.start()}: Car started`;
    }

}
```
___

## 📑 Méthodes statiques


Vous êtes face à un problème de partage de référence, la staticité peut nous aider à résoudre ce problème.

### 🏷️ **Déclaration**

La staticité change l'appartenance d'une méthode en la faisant appartenir à la casse et pas à l'objet.

```js
export class Car {

    static minPrice() {
        return 9000;
    }

}
```

Il faut donc utiliser la class et pas l'objet. Dans une méthode static l'utilisation du this n'a pas de sens.

```js
console.log(Car.minPrice());
```

La notation est également disponible sur les attributs.

```js
export class Car {

    static minPrice = 9000; 

}
```

___

## 📑 Création de proxy

L'objet Proxy est utilisé afin de définir un comportement sur mesure pour certaines opérations fondamentales (par exemple, l'accès aux propriétés, les affectations, les énumérations, les appels de fonctions, etc.).

```js
const proxy = new Proxy(cible, gestionnaire);
```

* Cible: Une cible (qui peut être n'importe quel objet, un tableau, une fonction, ou même un autre proxy) qu'on souhaite envelopper dans un Proxy.
* Gestionnaire: Un objet dont les propriétés sont des fonctions qui définissent le comportement du proxy lorsqu'on utilise une opération sur celui-ci.

### 🏷️ **Get**

Ce pattern classique en programmation est implémenté au niveau du langage et offre des gestionnaires. Le gestionnaire `get` intercepte les accès aux attributs.

```js
const handler = {
    get(obj, prop){
        if ("maxPrice" === prop) {
            return obj.maxPrice || 19000;
        }
    }
};
const car = new Proxy(new Car(), handler);

console.log(car.maxPrice);
```

### 🏷️ **Set**

Le gestionnaire `set` intercepte les affectation, il doit modifer la pripriété de l'objet et renvoyer un boolean.

```js
const handler = {
    set(obj, prop, value){
        if ("minPrice" === prop && 9000 > value) {
                throw new RangeError('Price too low');
        }
        obj[prop] = value;
        return true;
    }
};
const car = new Proxy(new Car(), handler);
car.minPrice = 3000; // Uncaught RangeError: Price too low
```

___

## 📑 Set

L'objet Set (Ensemble en français) permet de stocker des valeurs uniques, de n'importe quel type, que ce soit des valeurs d'un type primitif ou des objets.

```js
const set = new Set([1, 2, 3, 4, 5]);
```

### 🏷️ **Has**

Renvoie un booléen qui indique si un des éléments de l'ensemble possède cette valeur.

```js
console.log(set.has(1));
```

### 🏷️ **Add**

Permet d'ajouter un nouvel élément ayant une valeur donnée à un ensemble Set. Cette valeur sera ajoutée à la fin de l'objet Set.

```js
set.add(6);
```

### 🏷️ **Delete**

La méthode delete() permet de retirer un élément donné d'un objet Set.

```js
set.delete(6);
```

De nombreuses méthodes sont disponibles, proche du prototype de Array.

[Set](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Set#propri%C3%A9t%C3%A9s)

___

## 📑 Map

L'objet Map représente un dictionnaire, autrement dit une carte de clés/valeurs. N'importe quelle valeur valable en JavaScript (que ce soit les objets ou les valeurs de types primitifs) peut être utilisée comme clé ou comme valeur.

```js
const myMap = new Map();
```

Les objets sont similaires aux Maps, chacun manipulant des clés associées à des valeurs, récupérant ces valeurs, supprimant des clés... Il n'y avait auparavant pas d'alternatives natives et c'est pourquoi, historiquement, les objets JavaScript ont été utilisés comme des Maps.

```js
const map = new Map();
```

### 🏷️ **Set**

La méthode set() ajoute un nouvel élément avec une clé et une valeur données à un objet Map.

```js
map.set("foo", "valeur associée à 'une chaîne'");
```

### 🏷️ **Get**

La méthode get() renvoie un élément précisé d'un objet Map. Si la valeur associée à la clé fournie est un objet, alors on obtient une référence à cet objet et tous changements apporté à cet objet sera aussi visible à l'intérieur de l'objet Map.

```js
map.get("foo");
```

De nombreuses méthodes sont disponibles, proche du prototype de Array.

[Set](https://developer.mozilla.org/fr/docs/orphaned/Web/JavaScript/Reference/Global_Objects/Map#)
