# Déployer une application

*  🔖 **Package managers**
*  🔖 **Transpileurs**
*  🔖 **Traceurs**
*  🔖 **TypeScript**
*  🔖 **Babel**
*  🔖 **Webpack**
*  🔖 **Packager son code**
*  🔖 **Outils de Lint et de test**

___

## 📑 Package managers

Le package manager côté front est back est `npm`. Il existe des alternatives comme `yarn` également. Il sert notamment à **déclarer un projet**, **ses dépendances** en mode production ou développement, **exécuter des scripts** et bien d'autres choses...

### 🏷️ **Installation**

🔗 [Npm](https://www.npmjs.com/)

![image](https://raw.githubusercontent.com/seeren-training/JavaScript/master/wiki/resources/npm.png)

🔗 [node](https://nodejs.org/en/)

 Il a besoin de la plateforme `NodeJS` pour exécuter ses instructions.

### 🏷️ **Initialisation**

La commande init créé un fichier `package.json` décrivant le projet.

```
npm init
```

### 🏷️ **Installer**

La commande install télécharge un package dans un dossier node_modules et l'ajoute à la liste des dépendances.

```
npm install some-package
```

La package installé se rajoute à la liste des dépendances. Pour le rajouter à la lsite des dépendance de développement il faut utiliser l'option `--save-dev`

```
npm install some-package --save-dev
```

### 🏷️ **Publier**

Il est possible de pousser un package sur npm après s'être authentifié.

```
npm publish
```

___

## 📑 Transpileurs

Un compilateur source à source, transpileur ou transcompilateur est un type de compilateur qui prend le code source d'un langage de programmation et le compile dans un autre langage de programmation. Un compilateur source-à-source opère sur deux langages avec approximativement le même niveau d'abstraction, alors qu'un compilateur traditionnel compile un langage de haut niveau vers un langage de bas niveau.

> Grace au transpileur vous pouvez utiliser les fonctionnalités les plus modernes et produire des applications universellement accessibles.

Un transpiler populaire est `Babel`.

___

## 📑 Traceurs

Traceur est un compilateur qui utilise ES6 (y compris les classes, les générateurs, la déstructuration et bien plus encore) et le compile en Javascript standard ES5 qui s'exécute dans votre navigateur.

Vous pouvez essayer Traceur de plusieurs manières :

* Tapez ou collez le code ES6 dans la page Read-eval-print-loop.
* Inclure Traceur dans une page Web et compiler le contenu du script ES6 à la volée (voir ci-dessous)
* Utilisez node pour compiler ES6 en ES5 hors ligne et incluez le résultat dans les pages Web ou exécutez simplement le résultat dans node.

Un transpiler populaire est `google/traceur-compiler`.

___

## 📑 TypeScript

TypeScript est un langage de programmation libre et open source développé par Microsoft qui a pour but d'améliorer et de sécuriser la production de code JavaScript

![image](https://raw.githubusercontent.com/seeren-training/Angular/master/wiki/resources/typescript.png)

TypeScript permet un typage statique optionnel des variables et des fonctions, la création de classes et d'interfaces, l'import de modules, tout en conservant l'approche non-contraignante de JavaScript. Il supporte la spécification ECMAScript 6. 

Ce langage est utilisé par le framework `Angular`.

### 🏷️ **Syntaxe**

Le niveau de visibilité et les types sont autorisés, la déclaration d'attributs également.

```ts
class Foo {

  private bar: string;

  constructor(bar: string) {
    this.bar = bar;
  }

  public getBar(): string {
    return this.bar
  }

}
```

La déclaration d'attributs peut se faire en utilisant un niveau de visibilité dans la liste des arguments du constructeur

```ts
class Foo {

  constructor(private bar: string) {}

}
```

___

## 📑 Babel

![image](https://raw.githubusercontent.com/seeren-training/JavaScript-Object/master/wiki/resources/babel.png)

Avec babel, le code que vous écrivez est transformé et ne s'exécute pas directement. L'impact est qu'il faut compiler à chaque fois que vous modifiez votre code, cela nécessite alors un process en ode développement.

![image](https://raw.githubusercontent.com/seeren-training/JavaScript-Object/master/wiki/resources/compile.png)

### 🏷️ **Installation**

🔗 [Getting Started](https://babeljs.io/setup#installation)

```bash
npm install --save-dev @babel/core @babel/cli
```

### 🏷️ **Utilisation**

Ajoutons le script suivant à notre package.json
```json
"scripts": {
    "build": "babel src -d dist"
},
```

Exécutons le avec la commande suivante.

```bash
npm run build
```

Nore code est compilé de source à source

### 🏷️ **Configuration**

Nous devons ajouter des `presets` pour indiquer quel cible d'interprétation nous visons.

```bash
npm install @babel/preset-env --save-dev
```

La configuration doit être déclarée dans le fichier `babel.config.json`.

```json
{
  "presets": ["@babel/preset-env"]
}
```

De nombreuses options sont présentes pour surveiller les changements des fichiers, compiler dans un ou plusieurs fichiers, ignorer certains fichiers.

L'utilisation classique de ce compilateur est de l'utiliser indirectement via un module bundler.

___

### 🏷️ **Webpack**

Webpack est un bundler de modules JavaScript open-source. Il est principalement conçu pour JavaScript, mais il peut transformer les actifs frontaux tels que HTML, CSS et images si les chargeurs correspondants sont inclus. webpack prend des modules avec des dépendances et génère des actifs statiques représentant ces modules.

![image](https://raw.githubusercontent.com/seeren-training/JavaScript-Object/master/wiki/resources/webpack.png)

### 🏷️ **Installation**

🔗  [Getting Started](https://webpack.js.org/guides/getting-started/)

```bash
npm install webpack webpack-cli --save-dev
```

### 🏷️ **Utilisation**

Ajoutons le script suivant à notre package.json

```json
"scripts": {
    "build": "webpack"
},
```

Nous remarquons que l'ensemble de nos sources sont fusionnés dans un dossier `dist`.

### 🏷️ **Configuration**

Nous allons configurer l'outil pour indiquer nos points d'entré, de sortie et d'effectuer des taches supplémentaires comme utiliser Babel à chaque fois que du JavaScript est rencontré.

La configuration doit être déclarée dans le fichier `webpack.config.json`.

```js
module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'app.js',
    path: `${__dirname}/dist`,
  },
};
```

Nous pouvons bundler en mode optimisé ou non. Ajoutons les scripts suivants pour choisir notre stratégie de fusion des fichiers.

```js
"scripts": {
    "dev": "webpack --mode development",
    "prod": "webpack --mode production",
    "build": "npm run prod"
},
```

### 🏷️ **Server**

Le webpack-dev-server vous fournit un serveur Web rudimentaire et la possibilité d'utiliser le rechargement en direct. Mettons-le en place :

```bash
npm install --save-dev webpack-dev-server
```

Nous devons indiquer au server quel repertoir il doit servir. Modifions le `webpack.config.json`.

```js
devServer: {
  contentBase: './src',
},
```

Le résultat du bundling peut être injecté à notre page naviguée en utilisant un plugin.

```bash
npm install --save-dev html-webpack-plugin
```

Modifions notre fichier de configuration pour demander l'utilisation du plugin.

```js
const HtmlWebpackPlugin = require('html-webpack-plugin');
```

Le fichier html d'exécution peut lui aussi être optimisé lors du build si spécifié à la construction du plugin.

```js
plugins: [
  new HtmlWebpackPlugin({
    template: './src/index.html'
  }),
],
```

Il faut utiliser la commande serve pour démarrer le server, ajoutons la au script dev. L'option --open ouvre la navigateur web par défaut, l'option --watch est utilsée par défaut.

```js
"dev": "webpack serve --open --mode development",
```

### 🏷️ **JS**

Pour obtenir une compilation de notre JavaScript avec babel il faut utiliser un loader. A chaque fois que webpack rencontre une extension il demandera au loader de la prendre en charge et de renvoyer le résultat. Le loader est un pont entre webpack et d'autres outils.

```bash
npm install --save-dev babel-loader   
```

Il faut modifier notre configuration.

```js
  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        },
    ],
  },
```

A la compilation ou au démarrage de notre server nous pouvons nous rendre compte que les propriétés privées sont acceptée par l'ensemble des navigateurs. Nous avons réglé le problème d'optimisation et de compatibilité.

### 🏷️ **SCSS**

Vous pouvez également compiler le `scss` en ajoutant les loaders adaptés.

```bash
 npm install --save-dev node-sass style-loader css-loader sass-loader
```

Ajoutons les loaders à notre configuration.

```js
{
    test: /\.scss$/,
    exclude: /node_modules/,
    use: [
        'style-loader',
        'css-loader',
        'sass-loader',
    ],
},
```

Vous remarquez qu'en build, il n'y a pas de fichier css généré. Pour ce faire nous avons besoin d'un plugin.

```bash
npm install --save-dev mini-css-extract-plugin
```

Modifions notre fichier de configuration pour demander l'utilisation du plugin.

```js
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
```

Il doit générer un fichier seulement si le mode n'est pas celui de développement.

```js
use: [
    process.env.NODE_ENV !== "production" ? 'style-loader' : MiniCssExtractPlugin.loader,
    'css-loader',
    'sass-loader',
],
```

Pour spécifier l'environnement, modifions notre script de build.

```json
"build": "NODE_ENV=production webpack --mode production"
```

Le plugin doit être configuré.

```js
new MiniCssExtractPlugin({
    filename: "app.css",
}),
```

Au build, un fichier est généré et sinon le CSS est en mémoire et injecté dynamiquement à notre fichier html.

### 🏷️ **Assets**

Afin de réunir l'ensemble de vos fichiers secondaires comme les images ou police de caractères il faudra utilsier un loader de fichier.

```bash
npm install --save-dev file-loader
```

Et configurer le loader pour inclure les extensions utiles.

```js
{
    test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
    loader: 'file-loader',
},
```

A la compilation les fichiers seront renomés et placés dans le dossier de distribution.

### 🏷️ **Autre**

```bash
npm install --save-dev raw-loader
```

Et configurer le loader pour inclure les extensions utiles.

```js
{
    test: /\.html$/,
    exclude: /node_modules/,
    use: 'raw-loader',
},
```

Ce chargeur est pratique pour inclure des templates ou autre fichier.

___

## 📑 Packager son code

Le code est maintenant distribuable grace aux outils observés. Afin de permettre une importation à un tier d'une class du code source dans un contexte de compilation il est important de spécifier la cible de la librairie et son contexte.

```js
output: {
  filename: 'app.js',
  path: `${__dirname}/dist`,
  libraryTarget: 'umd',
  globalObject: 'this',
},
```

___

## 📑  Outils de Lint et de test

Observons des outils de développement.

### 🏷️ **Lint**

Afin de valider le CS de notre code, eslint est l'outil dominant.

🔗 [eslint](https://eslint.org/)

```bash
npm install --save-dev eslint babel-eslint
```

Dans votre IDE vous devez installer l'extension depuis le marketplace.
npx eslint

```bash
npx eslint --init
```

Vous devez configurer votre IDE pour que eslint soit l'outil utiliser lors du formattage de code. 

```js
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  parser: 'babel-eslint',
};
```

Vous pouvez proposer vos règles de validation de code en complétant .eslintrc.js.

```js
rules: {
  'import/prefer-default-export': 'off',
},
```

### 🏷️ **Test**

Enoncons les outils domminants par spécialisation.

#### Test launcher

* Karma
* Jasmine
* Jest

#### Test structure

* Mocha, 
* Jasmine,
* Jest

#### Mocks, spies 

* Sinon, 
* Jasmine,
* Jest

Nous pouvons observer qu'un outil propose les outils necessaires et permet de réduire l'écosystème: Jest.

[Jest](https://jestjs.io/fr/)
