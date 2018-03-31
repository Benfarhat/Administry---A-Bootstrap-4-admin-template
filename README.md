# Création d'un thème d'administration avec Bootstrap 4

Nous allons utiliser Bootstrap 4 pour essayer de mettre en place rapidement un template bootstrap pour l'administration. Notez que l'interface sera en ltr (left to right) et rtl (right to left).

## Démarrage

Créons avant tout notre page HTML avec les appels necessaires aux fichiers [bootstrap](https://getbootstrap.com/) via leur CDN


Les fichiers de styles

```
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
```

Les fichiers de scripts: JS, Popper.js, et jQuery

```
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
```

### Intégrité des sous ressources

l'attributs `integrity` utilisé généralement avec les CDNs (qui ne doivent jamais être considéré comme une source de confiance) permet de vérifier que le fichier est bien intègre (et donc n'as pas été modifié) et ce en comparant le fichier à un SRI (intégrité des sous-ressources), le SRI est constitué de deux parties:

* Un préfixe qui renseigne sur l'algorithme de hashage (sha256, sha386 ou encore sha512)
* La hash base64 du fichier

En gros lors de vos tests vous vérifiez que tout fonctionne, et c'est parfait, mais si en milieu de chemin, quelqu'un modifie l'un des fichiers CDN (style, script, police) pour par exemple y injecter du code malveillant,permettrait de facilement remplacer le contenu de votre page) alors le navigateur saura que le fichier a été corrompue et ne le chargera pas (si bien sur votre navigateur [supporte](https://caniuse.com/#feat=subresource-integrity) SRI).
Un attaquant pourrait facilement utiliser la fonction jquery [.replaceWith](http://api.jquery.com/replacewith/) pour modifier le contenu de votre site ou tout simplement inclure un code comme celui ci:

```
<script>
document.body.innerHTML = '<p>Site en maintenance, veuillez vous connecter via ce <a href="www.sitemalveillant.com">backoffice temporaire</a>, nous nous excusons pour ce désagrément indépendant de notre volonté.</p><p>La direction</p>'
</script>
```

Pour ce qui est de l'attribut `crossorigin`, il permet de dire si la requête a besoin d'un certificat ou pas lorsque la ressource est demandée à partir d'un autre domaine (ce qui est le cas des CDNs). 


### Position des balises styles et script

La lecture d'un fichier HTML est séquentielle, il est préférable de mettre en début de fichier, les élements necessaires au chargement de la page, et en fin de fichier ce qui n'affecte pas l'affichage de la page.
Les feuilles de styles ainsi que les polices seront dans la partie `head` alors que les balises body se positionneront en fin de `body`

### Mise en cache et compression

Si vous accès à la configuration de votre serveur web, activer le cache serait une bonne idée, cela éviterait au visiteur de solliciter votre serveur pour des fichiers qu'il a déjà en cache, et de son coté, cela améliorerait considérablement le temps de chargement et le débit consommé.

Il est également possible de compresser vos fichiers via gzip pour réduire leur taille. On estime que le temps de compression, d'envoi et de décompression est plus court que le temps d'envoi sans aucune compression.

### création des fichiers de personalisation

Pour pouvoir ajouter notre touche à notre template, nous serons probablement amené à modifier ou ajouter des styles et des scripts, pour cela nous allons crée deux fichiers:

```
mkdir css
cd css
touch style.css
cd ..
mkdir js
cd js
touch script.js

```
Vu qu'il s'agit de personalisation, le fichier de style sera appelé après la dernière balise style et le fichier de script après le dernier script (en principe, après le dernier script qu'il modifiera)

### Ajoutons Font awesome

[Font Awesome](https://fontawesome.com/) est une solution aujourd'hui incontrounable pour avoir facilement accès à des icones facilement. Le lien via son CDN permettant d'avoir accès à la version 5 est le suivant:

```
<script defer src="https://use.fontawesome.com/releases/v5.0.9/js/all.js" integrity="sha384-8iPTk2s/jMVj81dnzb/iFR2sdA7u06vHJyyLlAd4snFpCl/SnyUjRrbdJsw1pGIl" crossorigin="anonymous"></script>
```

### Code final du fichier de démarrage

Voici le contenu de notre fichier index.html

```
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!-- Bootstrap Style -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <!-- Font Awesome -->
    <script defer src="https://use.fontawesome.com/releases/v5.0.9/js/all.js" integrity="sha384-8iPTk2s/jMVj81dnzb/iFR2sdA7u06vHJyyLlAd4snFpCl/SnyUjRrbdJsw1pGIl" crossorigin="anonymous"></script>
    <!-- Custom qtyle -->
    <link rel="stylesheet" href="css/style.css" />
    <title>Administration</title>
</head>
<body>
    
    <!-- jQuery first -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <!-- Popper.js -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <!-- Bootstrap JS -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <!-- Custom scripts -->
    <script src="js/script.js"></script>
</body>
</html>
```

## Interface

Pour notre interface nous aurons besoins d'un wireframe ou mockup afin d'imaginer l'interface finale:

```
-------------------------------------------------------------------------
| TITRE  MENU 1                                                 MENU 2  |
-------------------------------------------------------------------------
| Message du site                                 SOUS MENU DISPONIBLE  |
-------------------------------------------------------------------------

-------------------------------------------------------------------------
| Chemin actuel \ breadcrumb \ fil d'ariane                             |
-------------------------------------------------------------------------

-------------  ----------------------------------------------------------
| MENU      |  |   TITRE ACTIF                                          |
| SS MENU 1 |  |                                                        |
| SS MENU 2 |  |   CONTENU                                              |
| SS MENU 3 |  |                                                        |
| SS MENU 4 |  |                                                        |
|           |  |                                                        |
-------------  |                                                        |
               |                                                        |
               |                                                        |
               |                                                        |
               |                                                        |
               |                                                        |
               ----------------------------------------------------------

-------------------------------------------------------------------------
|                               FOOTER                                  |
-------------------------------------------------------------------------                                 
```

## Header

Commencons par la partie de haut

### La barre des titres

La barre des titres est la suivante:

```
<nav class="navbar navbar-expand-lg fixed-topnavbar-dark bg-dark">
                <a class="navbar-brand" href="#">TITRE</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#">MENU 1</a>
                        </li>
                    </ul>
                        
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#">MENU 2</a>
                        </li>
                    </ul>
                </div>
            </nav> 
```
Qu'avons nous à retenir ici

#### la définition de la barre

nous allons utiliser la balise nav pour le menu et obligatoirement ajouter la classe `navbar`

#### la définition du moment ou le menu devient renfermé / collapsed

Les classes disponibles suivent ce pattern .navbar-expand{-sm|-md|-lg|xl}), pour les comprendre expliquons les différentes largeur de fenêtres prisent en compte par bootstrap
    
* xs: pour extra small devices, regroupant les téléphones en mode portrait avec une largeur inférieure à 575.98px
* sm: pour small devices, regoupant les téléphones en mode paysage avec une largeur entre 576px à 767.95px 
* md: pour medium devices, regroupant les tablettes dont la largeur se situe entre 768px et 991.98px
* lg: pour large devices, regroupant les écrans d'ordinateurs dont la largeur va de 992px à 1199.98px
* xl: pour extra large devices, regroupant les écrans larges dont la largeur dépasse les 1200px sans limite prédéfinie

Une classe appelé utilise le principe du "qui peut le moins peut le plus", si jamais  j'utilise la classe md, cela englobe implicitement lg et xl, sauf si une règle va en l'encontre. Pour simplifier, dans notre cas en disant navbar-expand-md cela veut dire que tant que la fenêtre qui affiche le site a une largeur supérieur à 768px le menu apparaitra, dès qu'on tombe en dessous de cette valeur alors le menu devient collapsed et n'apparaitre que lorsqu'on cliquera sur ce bouton:
```
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
</button>
```
#### la position de la barre

La barre peut être:

* affichée normalement (aucune des classes ci-dessous)
* fixée en haut (classe fixed-top)
* fixée en bas (class fixed-bottom)
* étiquetté (pas sur du terme, on dit stiky), cela revient a être affiché normalement, mais en scrollant, des que le menu semble sortir du champ de l'affichage alors il se fixe en haut (class sticky-top)

Dans notre cas nous allons utilisé la class fixed-top

#### La couleur de fond de la barre

##### Fonds
Les couleurs de fond étant:

* .bg-primary
* .bg-secondary
* .bg-success
* .bg-danger
* .bg-warning
* .bg-info
* .bg-light
* .bg-dark
* .bg-white

##### Styles de barre et contraste

Si le fond est claire alors la police doit contraster pour être lisible et être sombre, on utilisera avec les fonds clairs la classe navabar-light et avec les fonds foncés la classe navbar-dark

Il est donc possible de faire:

```
<nav class="navbar navbar-dark bg-dark">
  <!-- Navbar content -->
</nav>

<nav class="navbar navbar-dark bg-primary">
  <!-- Navbar content -->
</nav>

```

Par contre le code suivant afficherait un contenu illisible:

```
<nav class="navbar navbar-dark bg-light">
  <!-- Navbar content -->
</nav>
```

##### Fond personnalisé

Nous pouvons également mettre un fond personalisé en nous inspirant d'une palette de couleurs comme celles de [flat-ui-color](https://flatuicolors.com/)
Dans le cas de la palette par [défaut](https://flatuicolors.com/palette/defo), constaté les couleurs green sea (#16a085), pomegranate (#c0392b) et belize hole (#2980b9) ou encore via la palette ["spanish"](https://flatuicolors.com/palette/es) tester le résultats avec les fond lucky point (#2c2c54), palm spring splash (#218c74) et devil blue (#227093)
 
```
<nav class="navbar navbar-expand-lg sticky-top navbar-dark" style="background-color: #227093">
  <!-- Navbar content -->
</nav>
```
#### Largeur contenu

Vous pouvez faire contenir votre menu pour qu'il n'occupe pas la totalité de la page et soit d'une taille standard (en terme bootstrap) de 1140px (1110px avec deux padding à droite et à gauche de 15px) pour une zone de 1200px, 960px (930px + 2 paddings de 15px) pour une zone de 992px, 720px (690px + 2 paddings de 15px) pour une zone de 768px et enfin 540px (510px + 2 paddings de 15px) pour une zone de 576px
Notez que pour occuper la totalité de l'écran (100% de la zone contenante) il faut utiliser la class `container-fluid`

#### Position des menus

Les menus peuvent être positionné à gauche ou à droite, vis à vis de bootstrap il suffit juste de mettre la classe `mr-auto` pour que le menu soit à gauche et `ml-auto` pour qu'il soit à droite. **mr** pour créer une marge à droire (margin right) et donc déplacer vers la gauche et **ml** pour créer une marge à gauche et donc déplacer vers la droite
 
### Eléments du menu

#### icone

Pour les icones nous utiliserons pour chaque élement (de class `nav-item`) font awesome comme suit:

```
<li class="nav-item">
    <a class="nav-link" href="#"><i class="fa fa-home"></i> <span class="sr-only">(current)</span></a>
</li>
<li class="nav-item">
    <a class="nav-link" href="#"><i class="fab fa-facebook"></i></a>
</li>
```

#### Les menus coulissants

il y a deux type de menus coulissant:
* collasped pour coulisser de haut en bas
* dropdown pour apparaitre de haut en bas (dropup existe aussi mais ne peut pas être utilisé dans un menu supérieur)

#### collapsed menu

Nous avons deux élements qui coulissent, un se trouve au dessus du menu, un autre en dessous du menu, il suffit juste de les positionner dans votre fichier index.html avant ou après le menu et de créer les boutons déclencheurs qui activerons le glissement. Vous êtes libre de mettre ce que vous voulez, ici nous avons mis pour le premier l'exemple fournit par bootstrap et pour le second un formulaire de connexion

```
<!-- APPARAITRA EN HAUT -->
<div class="bg-dark collapse" id="ConnexionHeadertop" style="">
    <div class="container">
    <div class="row">
        <div class="col-sm-4 col-md-4 offset-md-4 offset-sm-4 py-4">
        <h4 class="text-white">Connexion</h4>
        <form class="form-signin">
            <label for="inputEmail" class="sr-only">Email address</label>
            <input id="inputEmail" class="form-control rounded-0 mb-2" placeholder="Email address" required="" autofocus="" type="email">
            <label for="inputPassword" class="sr-only">Password</label>
            <input id="inputPassword" class="form-control rounded-0" placeholder="Password" required="" type="password">
            <div class="checkbox mb-3">
                <label class="text-white">
                <input value="remember-me" type="checkbox"> Se rappeler de moi
                </label>
            </div>
            <button class="btn btn-lg btn-primary btn-block rounded-0" type="submit">Entrer</button>
        </form>
        </div>
    </div>
    </div>
</div>
<div class="bg-dark collapse" id="AboutHeadertop" style="">
    <div class="container">
        <div class="row">
            <div class="col-sm-8 col-md-7 py-4">
            <h4 class="text-white">A propos</h4>
            <p class="text-muted"></p>
            </div>
            <div class="col-sm-4 offset-md-1 py-4">
            <h4 class="text-white">Contact</h4>
            <ul class="list-unstyled">
                <li><a href="#" class="text-white">Follow on Twitter</a></li>
                <li><a href="#" class="text-white">Like on Facebook</a></li>
                <li><a href="#" class="text-white">Email me</a></li>
            </ul>
        </div>
    </div>
    </div>
</div>

<nav class="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Administry</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <a class="nav-link" href="#">MENU 1</a>
            </li>
        </ul>
            
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a class="nav-link" href="#" data-toggle="collapse" data-target="#AboutHeadertop" aria-controls="navbarHeader" aria-expanded="true" aria-label="Toggle navigation">Slide down 1</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#" data-toggle="collapse" data-target="#ConnexionHeadertop" aria-controls="navbarHeader" aria-expanded="true" aria-label="Toggle navigation">Slide down 2</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#" data-toggle="collapse" data-target="#ConnexionHeaderbottom" aria-controls="navbarHeader" aria-expanded="true" aria-label="Toggle navigation">Slide Up</a>
            </li>
        </ul>
    </div>
</nav>  
<!-- APPARAITRA EN BAS --> 
<div class="bg-dark collapse" id="ConnexionHeaderbottom" style="">
    <div class="container">
        <div class="row">
        <div class="col-sm-4 col-md-4 offset-md-4 offset-sm-4 py-4">
            <h4 class="text-white">Connexion</h4>
            <form class="form-signin">
                <label for="inputEmail" class="sr-only">Email address</label>
                <input id="inputEmail" class="form-control rounded-0 mb-2" placeholder="Email address" required="" autofocus="" type="email">
                <label for="inputPassword" class="sr-only">Password</label>
                <input id="inputPassword" class="form-control rounded-0" placeholder="Password" required="" type="password">
                <div class="checkbox mb-3">
                    <label class="text-white">
                    <input value="remember-me" type="checkbox"> Se rappeler de moi
                    </label>
                </div>
                <button class="btn btn-lg btn-primary btn-block rounded-0" type="submit">Entrer</button>
            </form>
        </div>
        </div>
    </div>
</div>
```

#### Menu Dropdown

Nous utiliserons avec [animate.css](https://daneden.github.io/animate.css/) qui permettra de rajouter un effet visuel lors de son apparition.

##### Animate.css

Pour l'utiliser il vous suffit de rajouter à l'élement sur lequel vous voulez appliquer l'effet la classe `animated` suivi de la classe correspondant à l'effet comme par exemple `bounce`. Si vous voulez un effet qui se repète à l'infini il faudra plutot utiliser la classe `.animated.infinite` au lieu de `<stroke>animated</stroke>`

#### Dropdown simple

Pour notre dropdown simple avec une flèche qui indique qu'un sous menu existe, il vous suffit d'utiliser un code similaire à celui ci:

```
<li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown
    </a>
    <div class="dropdown-menu rounded-0 animated flipInY" aria-labelledby="navbarDropdown">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <div class="dropdown-divider"></div>
    <a class="dropdown-item" href="#">Something else here</a>
    </div>
</li>
```

#### Dropdown avec badge

Un sous menu avec un badge est identique aux précédents à la différence qu'au lieu d'afficher une flèche nous allons afficher un badge. 

voici donc le code HTML:

```
<li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle withbadge" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Message <span class="badge badge-danger rounded-0 animatfSZed fadeIn">2<span class="pulse"></span></span>
    </a>
    <div class="dropdown-menu rounded-0 animated flipInY" aria-labelledby="navbarDropdown">
    <a class="dropdown-item" href="#">Message 1</a>
    <a class="dropdown-item" href="#">Message 2</a>
    <div class="dropdown-divider"></div>
    <a class="dropdown-item" href="#">See All</a>
    </div>
</li>
```

Le code CSS permettant de ne pas afficher la flèche et de bien positionner le badge répond à la classe `withbadge`, voici le contenu:

```

header .dropdown-toggle.withbadge{
    position: relative;
}
header .dropdown-toggle.withbadge::after{
    border: none;
    width :4px;
}
header .dropdown-toggle .badge{
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1500;
}
```

Pour l'effet de pulsar il suffit de rajouter un span avec la class `pulse` qui répondra au code CSS suivant:

```
/* Pulsar effect */


.pulse {
    position: absolute;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    border-width: 1px;
    border-style: solid;
    border-color: inherit;
    border-radius: inherit;
    -webkit-animation-name: sonar;
            animation-name: sonar;
    -webkit-animation-timing-function: ease;
            animation-timing-function: ease;
    -webkit-animation-duration: 1.1s;
            animation-duration: 1.1s;
    -webkit-animation-iteration-count: infinite;
            animation-iteration-count: infinite;
  }
  @-webkit-keyframes sonar {
    0% {
      -webkit-transform: scale(15);
              transform: scale1);
      opacity: 0.0;
    }
    25% {
      -webkit-transform: scale(1.25);
              transform: scale(1.25);
      opacity: 0.5;
    }
    50% {
      -webkit-transform: scale(1.5);
              transform: scale(1.5);
      opacity: 0.15;
    }
    75% {
      -webkit-transform: scale(1.75);
              transform: scale(1.75);
      opacity: 0.2;
    }
    100% {
      -webkit-transform: scale(1);
              transform: scale(1);
      opacity: 0.0;
    }
  }
  @keyframes sonar {
    0% {
      -webkit-transform: scale(1);
              transform: scale(1);
      opacity: 0.0;
    }
    25% {
      -webkit-transform: scale(1);
              transform: scale(1);
      opacity: 0.05;
    }
    50% {
      -webkit-transform: scale(1.25);
              transform: scale(1.25);
      opacity: 0.15;
    }
    75% {
      -webkit-transform: scale(1.5);
              transform: scale(1.5);
      opacity: 0.2;
    }
    100% {
      -webkit-transform: scale(1.75);
              transform: scale(1.75);
      opacity: 0.0;
    }
  }

```

Si vous voulez que votre effet de sonar soit arrondi il vous suffit de changer <stroke>`border-radius: inherit;`</stroke> en `border-radius: 100%;`

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="#">TITRE</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#">MENU 1</a>
                        </li>
                    </ul>
                        
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#" data-toggle="collapse" data-target="#AboutHeadertop" aria-controls="navbarHeader" aria-expanded="true" aria-label="Toggle navigation">Slide down 1</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" data-toggle="collapse" data-target="#ConnexionHeadertop" aria-controls="navbarHeader" aria-expanded="true" aria-label="Toggle navigation">Slide down 2</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" data-toggle="collapse" data-target="#ConnexionHeaderbottom" aria-controls="navbarHeader" aria-expanded="true" aria-label="Toggle navigation">Slide Up</a>
                        </li>
                    </ul>
                </div>
            </nav> 
```