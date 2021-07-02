# Apport ES2015

*  🔖 **Let**
*  🔖 **Constantes**
*  🔖 **Arrow functions**
*  🔖 **Assignation destructurée**
*  🔖 **Formatage des strings**
*  🔖 **Object API**

___

## 📑 Let

L'instruction let permet de déclarer une variable dont la portée est celle du bloc courant, éventuellement en initialisant sa valeur.

### 🏷️ **Contexte**

Au niveau le plus haut, let crée une variable globale alors que var ajoute une propriété à l'objet global.

```js
var x = 'global';
let y = 'global2';
console.log(this.x); // "global"
console.log(this.y); // undefined
console.log(y);      // "global2"
```

### 🏷️ **Portée**

Les variables déclarées avec let appartiennent à la portée du bloc dans lequel elles sont définies et indirectement aux portées des blocs de ce bloc. D'une certaine façon let fonctionne comme var, la seule différence dans cette analogie est que let fonctionne avec les portées de bloc et var avec les portées des fonctions.

```js
function foo() {
  let x = 1;
  if (true) {
    let x = 2;  // c'est une variable différente
    console.log(x);  // 2
  }
  console.log(x);  // 1
}
```

### 🏷️ **Closure**

let peut parfois permettre de rendre le code plus lisible lorsqu'on utilise des fonctions internes.

```js
for (let i = 1; i <= 5; i++) {
  var item = document.createElement("li");
  item.appendChild(document.createTextNode("Élément " + i));

  item.onclick = function (ev) {
    console.log("Clic sur l'élément " + i + ".");
  };
  document.body.appendChild(item);
}
```

___

## 📑 Constantes

La déclaration const permet de créer une constante nommée accessible uniquement en lecture. Cela ne signifie pas que la valeur contenue est immuable, uniquement que l'identifiant ne peut pas être réaffecté. Autrement dit la valeur d'une constante ne peut pas être modifiée par des réaffectations ultérieures. Une constante ne peut pas être déclarée à nouveau.

```js
const MA_FAV = 7;

// TypeError
MA_FAV = 20;
```

___

## 📑 Arrow functions

Une expression de fonction fléchée (arrow function en anglais) permet d’avoir une syntaxe plus courte que les expressions de fonction et ne possède pas ses propres valeurs pour this, arguments, super, ou new.target. Les fonctions fléchées sont souvent anonymes et ne sont pas destinées à être utilisées pour déclarer des méthodes.


### 🏷️ **Syntaxe**

```js
const maFonction = () => {
    return true;
}
console.log(maFonction()); // true
```

Sans bloc d'instructions, la valeur de retour correspond à celle de la seule instruction.

```js
const maFonction = () => true;
console.log(maFonction()); // true
```

Avec un argument, les parenthèses sont optionnelles.

```js
const maFonction = foo => foo;
console.log(maFonction(true)); // true
```

Avec plusieurs arguments, les parenthèses ne sont pas optionnelles.

```js
const maFonction = (foo, bar) => foo;
console.log(maFonction(true, false)); // true
```

### 🏷️ **Contexte**

Les fonctions fléchées ne créent pas de nouveau contexte, elles utilisent la valeur this de leur contexte. Aussi, si le mot-clé this est utilisé dans le corps de la fonction, le moteur recherchera la référence à cette valeur dans une portée parente. Le code qui suit fonctionne ainsi de la façon attendue car le this utilisé dans setInterval est le thisde la portée de Personne.

```js
function Personne () {
  this.age = 0;

  setInterval(() => {
    this.age++;
    // this fait bien référence à l'objet personne
  }, 1000);
}

var p = new Personne();
```

### 🏷️ **Constructeur**

Les fonctions fléchées ne peuvent pas être utilisées comme constructeurs et lèveront une exception si elles sont utilisées avec le mot-clé new.

```js
var Toto = () => {};
var toto = new Toto();
// TypeError: Toto is not a constructor
```

### 🏷️ **Prototype**

Les fonctions fléchées ne possèdent pas de prototype.

```js
var Toto = () => {};
console.log(Toto.prototype);
```

___

## 📑 Assignation destructurée

L'affectation par décomposition (destructuring en anglais) est une expression JavaScript qui permet d'extraire (unpack en anglais) des données d'un tableau ou d'un objet grâce à une syntaxe dont la forme ressemble à la structure du tableau ou de l'objet.

### 🏷️ **Tableaux**

```js
const toto = ["un", "deux", "trois"];

// sans utiliser la décomposition
const un    = toto[0];
const deux  = toto[1];
const trois = toto[2];

// en utilisant la décomposition
const [un, deux, trois] = toto;
```

#### Valeur par défaut

```js
let a, b;
[a = 5, b = 7] = [1];
console.log(a); // 1
console.log(b); // 7
```

#### Décalage

```js
const toto = ["un", "deux", "trois"];
const [un, , trois] = toto;
console.log(trois); // 7
```

#### Permutation

```js
let a = 1;
let b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1
```

#### Return

```js
function f() {
  return [1, 2];
}
let a, b;
[a, b] = f();
console.log("A vaut " + a + " B vaut " + b);
```

### 🏷️ **Object**

```js
const o = {p: 42, q: true};
const {p, q} = o;

console.log(p); // 42
console.log(q); // true
```

#### Arguments

L'avantage de la collecte d'arguments offre une amélioration syntaxique notable.

```js
function dessinGrapheES2015({size = 'big', coords = { x: 0, y: 0 }, radius = 25} = {})
{
  console.log(size, coords, radius);
  // on dessine le graphe
}

dessinGrapheES2015({
  coords: { x: 18, y: 30 },
  radius: 30
});
```

#### Rest

La proposition de décomposition des propriétés et de la syntaxe du reste dans ECMAScript ajoute la syntaxe du reste pour la décomposition. La propriété du reste permet de collecter les propriétés énumérables restantes qui n'auraient pas été extraites par la décomposition :

```js
let {a, b, ...reste } = {a: 10, b: 20, c: 30, d: 40};
a; // 10
b; // 20
reste; // { c: 30, d: 40 }
```

___

## 📑 Formatage des strings

Les littéraux de gabarits sont des littéraux de chaînes de caractères permettant d'intégrer des expressions. Avec eux, on peut utiliser des chaînes de caractères multi-lignes et des fonctionnalités d'interpolation.


### 🏷️ **Multi-lignes**

Il devient possible de sauter des lignes

```js
console.log(`ligne de texte 1
ligne de texte 2`);
```
### 🏷️ **Interpolations**

```js
let a = 5;
let b = 10;
console.log(`Quinze vaut ${a + b} et
non ${2 * a + b}.`);
// "Quinze vaut 15 et
// non 20."
```
___

## 📑 Object API

De nouvelles méthodes sont disponible sur Object.

### 🏷️ **Assign**

La méthode Object.assign() est utilisée afin de copier les valeurs de toutes les propriétés directes (non héritées) d'un objet qui sont énumérables sur un autre objet cible. Cette méthode renvoie l'objet cible.

```js
var o1 = { a: 1 };
var o2 = { b: 2 };
var o3 = { c: 3 };

var obj = Object.assign(o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1);  // { a: 1, b: 2, c: 3 }, l'objet cible est aussi modifié
```

### 🏷️ **Is**

La méthode Object.is() permet de déterminer si deux valeurs sont les mêmes.

```js
Object.is("toto", "toto");     // true
Object.is(window, window);     // true

Object.is("toto", "truc");     // false
Object.is([], []);             // false

var toto = {a: 1};
var truc = {a: 1};
Object.is(toto, toto);          // true
Object.is(toto, truc);          // false

Object.is(null, null);          // true

// Cas aux limites (cas spéciaux)
Object.is(0, -0);                // false
Object.is(-0, -0);               // true
Object.is(NaN, 0/0);             // true
```

Attention, ce n'est pas la même égalité qu'avec l'opérateur ==. L'opérateur == applique différentes conversions à chaque opérande (si ils ne sont pas du même type) avant de tester l'égalité (d'où le comportement "" == false qui donne true), Object.is ne convertit aucune des deux valeurs.
