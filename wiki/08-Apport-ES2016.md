# Apport ES2016

*  🔖 **La fonction includes**
*  🔖 **L'opérateur Exponentiation**

___

## 📑 Include

La méthode includes() permet de déterminer si un tableau contient une valeur et renvoie true si c'est le cas, false sinon.

```js
[1, 2, 3].includes(2); // true
```

Cela permet de remplacer indexOf et la comparaison à -1;

```js
[1, 2, 3].indexOf('foo'); // -1
```

Le second argument de Include est l'indice de départ.

La position du tableau à partir de laquelle commencer à chercher élémentRecherché. Si on utilise une valeur négative, la recherche commencera à partir de la fin du tableau (autrement dit à l'indice array.length - indiceDépart). La valeur par défaut est 0.

```js
[1, 2, 3].includes(3, -1); // true
```

Si l'indice de départ est supérieur ou égal à la longueur du tableau, la méthode retourne false. Le tableau n'est pas parcouru.

```js
[1, 2, 3].includes(3, 3); // false
```

___

## 📑 L'opérateur Exponentiation

L'opérateur d'exponentiation (**) fournit le résultat obtenu lorsqu'on élève le premier opérande à la puissance indiquée par le second. Il est équivalent Math.pow exception faite que cet opérateur permet également d'utiliser des valeurs BigInt comme opérandes.

```js
console.log(3 ** 4); // 81
```

Il permet de ne pas utiliser pow.

```js
console.log(Math.pow(3, 4)); // 81
```