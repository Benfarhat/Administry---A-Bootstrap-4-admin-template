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

[Font Awesome](https://fontawesome.com/) est une solution aujourd'hui incontrounable pour avoir facilement accès à des icones facilement. Le lien via son CDN permettant d'avoir accès à la version 5 via CSS est le suivant:

```
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.9/css/all.css" integrity="sha384-5SOiIsAziJl6AWe0HWRKTXlfcSHKmYV4RBF18PPJ173Kzn7jzMyFuTtk8JA7QQG1" crossorigin="anonymous">
```
Il existe aussi la possibilité d'utiliser du SVG (Graphique vectoriel adaptable) via du js, nous nous contenterons de la version css.

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

Les classes disponibles suivent ce pattern .navbar-expand{-sm|-md|-lg|xl}, pour les comprendre expliquons les différentes largeur de fenêtres prisent en compte par bootstrap
    
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
* étiquetté (pas sur du terme, on dit sticky), cela revient a être affiché normalement, mais en scrollant, des que le menu semble sortir du champ de l'affichage alors il se fixe en haut (class sticky-top)

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

### Modification de la position des sous menus

Dans bootstrap les sous menus apparaissent juste en dessous de l'élement appelant et donc chevauche avec la zone de l'entête, nous allons modifier ce comportement en augmentant la marge supérieur et donner ainsi l'impression que le sous menu sors d'en dessous du la zone d'entête

```
header .dropdown-menu{
    margin: .5rem 0 0; 
}
```
et par la même occasion nous allons faire en sorte que le menu active ou au dessus duquel est la souris soit plus visible en choisissant carrément une couleur blanche à 100% et non un niveau de gris (75% d'opacité du blanc par défaut):

```
.navbar-dark .navbar-nav .nav-link:focus, .navbar-dark .navbar-nav .nav-link:hover {

    color: rgba(255,255,255,1);

}
```

Vous pouvez également ajouter une couleur de fond à l'élement sélection, dans notre cas nous sommes parti sur le rouge, la couleur "danger" de bootstrap, si ca ne vous convient pas, il vous suffit de supprimer le code suivant du style CSS:

```

.navbar-dark .navbar-nav .nav-link:focus {
    background-color:#dc3545;
}
```
 
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

Pour l'utiliser il vous suffit de rajouter à l'élement sur lequel vous voulez appliquer l'effet la classe `animated` suivi de la classe correspondant à l'effet comme par exemple `bounce`. Si vous voulez un effet qui se repète à l'infini il faudra plutot utiliser la classe `.animated.infinite` au lieu de ~~animated~~

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

Si vous voulez que votre effet de sonar soit arrondi il vous suffit de changer ~~border-radius: inherit;~~ en `border-radius: 100%;`

#### Dropdown avec formulaire

##### Alignement à droite et à gauche

Notez avant de commencer que la classe `dropdown-menu-right` et ne rien mettre, permet d'aligner un sous menu à droite ou à gauche de son élément menu appelant. Expliquons nous:

Si jamais le dernier élément de votre menu (celui qui est tout à droite dans une interface ltr) contient un formulaire, le dropdown (ou sous menu) qui va apparaitre aura très probablement une largeur plus grande que celle du menu sur lequel vous cliquez pour qu'il apparaisse. Si le menu et sous menu sont aligné à gauche, alors le sous menu risque de sortir de l'écran et donc de laisser apparaitre une "scrollbar". Pour éviter ce soucis, il vous suffit d'aligner à droite. Aligner à droite veut dire que le coté droit du menu est à la mème position (la même abscisse)que celle le coté droit du sous menu

```
Voici un alignement à gauche (par défaut dans une interface ltr), ici nous n'avons pas de soucis

<-------------------TAILLE DE La FENETRE---------------------------->

---------
|   MENU |
----------------------------
| Sous menu 1 - plus large |
| Sous menu 2 - plus large |
| Sous menu 3 - plus large |
| Sous menu 4 - plus large |
| Sous menu 5 - plus large |
| Sous menu 6 - plus large |
| Sous menu 7 - plus large |
----------------------------

Si le menu est le dernier alors le menu sortira de l'écran

<-------------------TAILLE DE La FENETRE---------------------------->

                                                          ---------
                                                          |   MENU |
                                                          ----------------------------
                                                          | Sous menu 1 - plus large |
                                                          | Sous menu 2 - plus large |
                                                          | Sous menu 3 - plus large |
                                                          | Sous menu 4 - plus large |
                                                          | Sous menu 5 - plus large |
                                                          | Sous menu 6 - plus large |
                                                          | Sous menu 7 - plus large |
                                                          ----------------------------


Pour corriger on aligne à droite le menu et son sous menu:
<-------------------TAILLE DE La FENETRE---------------------------->

                                                          ---------
                                                          |   MENU |
                                        ----------------------------
                                        | Sous menu 1 - plus large |
                                        | Sous menu 2 - plus large |
                                        | Sous menu 3 - plus large 
                                        | Sous menu 4 - plus large |
                                        | Sous menu 5 - plus large |
                                        | Sous menu 6 - plus large |
                                        | Sous menu 7 - plus large |
                                        ----------------------------

```

##### implémentation

Voici le code du menu comprenant le formulaire, nous y avons bien ajouter la class `dropdown-menu-right`, une animation avec `animated fadeIn` et la class `rounded-0` qui permet d'enlever les coins arrondis et rendre l'interface plus sobre.

```
<li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Formulaire
    </a>
    <div class="dropdown-menu double rounded-0 dropdown-menu-right animated fadeIn" aria-labelledby="navbarDropdown">
        <div class="p-2">
            <h6>Vos identifiants de connexion</h6>
            <hr>
            <form class="form-signin">
                    <label for="inputEmail" class="sr-only">Email address</label>
                    <input id="inputEmail" class="form-control form-control-sm rounded-0 mb-2" placeholder="Email address" required="" autofocus="" type="email">
                    <label for="inputPassword" class="sr-only">Password</label>
                    <input id="inputPassword" class="form-control form-control-sm rounded-0 mb-2" placeholder="Password" required="" type="password">
                    <div class="checkbox mb-3">
                        <label>
                        <input value="remember-me" type="checkbox"> Se rappeler de moi
                        </label>
                    </div>
                    <button class="btn btn-block btn-danger rounded-0" type="submit">Entrer</button>
                </form>
            </div>
    </div>
</li>
```

Notez l'ajout de la classe double qui permet d'agrandir la taille du formulaire via ce code CSS:

```
  /* Pour les sous menu*/
@media (min-width: 992px) {
    .dropdown-menu.double{
        min-width: 20rem
    };
    .dropdown-menu.triple{
        min-width: 30rem
    };
}
```

Constatez que nous ne le faisons que pour les largeurs supérieures ou égales à 992px, puisque lorsque le menu est collapsed, par défaut les sous menu occupent toute la largeur. Il faut donc que cela correpondent à la valeur donnée à `.navbar-expand{-sm|-md|-lg|xl}`

#### Dropdown avec Mega Menu

Les Mega menus sont des menus qui prennent toutes la largeur et qui sont généralement constituté de plusieurs colonnes mais également peut contenir autre chose qu'un sous menu comme par exemple des graphiques, des images, du texte, un diaporama ou une vidéo. Pour ce faire nous allons utiliser la classe megamenu qui répondra a ce code CSS:

```

header .megamenu{
    position: static !important;
}
header .megamenu>div{
    margin: 0;
    width: 100%;
}
```

Nous changeons la position de l'élement ouvrant pour "découpler" l'appelant de l'appelé, puis nous demandons a ce que le sous menu ait une taille de 100% et aucune marge, puis il suffit tout simplement d'insérer à l'intérieur du code bootstrap de base, pour l'exemple nous avons mis un caroussel, un lien, 4 colonnes et un formulaires, nous avons juste rajouter ce code dans notre fichier de personalisation css pour un affichage des entêtes en gras, majuscule et légèrement grisé:

```
header .dropdown-header{
    font-weight: bold;
    color: #999;
    text-transform: uppercase;
}
```
Voici le code du menu

```
<li class="nav-item dropdown megamenu">
    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Mega Menu
    </a>
    <div class="dropdown-menu rounded-0 animated fadeIn" aria-labelledby="navbarDropdown">
        <div class="container-fluid">
            <div class="row">

                <div class="col-sm-3">
                    <div class="dropdown-header">Section 1</div>
                        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item">
                                <img class="d-block w-100" data-src="holder.js/800x400?auto=yes&amp;bg=777&amp;fg=555&amp;text=First slide" alt="First slide [800x400]" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_162798a4ed6%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_162798a4ed6%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.9000015258789%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true">
                                </div>
                                <div class="carousel-item">
                                <img class="d-block w-100" data-src="holder.js/800x400?auto=yes&amp;bg=666&amp;fg=444&amp;text=Second slide" alt="Second slide [800x400]" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_162798a4edc%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_162798a4edc%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.2916717529297%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true">
                                </div>
                                <div class="carousel-item active">
                                <img class="d-block w-100" data-src="holder.js/800x400?auto=yes&amp;bg=555&amp;fg=333&amp;text=Third slide" alt="Third slide [800x400]" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_162798a4ee2%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_162798a4ee2%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22276.9749984741211%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true">
                                </div>
                            </div>
                        </div>
                        <!-- /.carousel -->
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">View all item <span class="fa fa-chevron-right pull-right"></span></a>
                </div>
                <div class="col-sm-3">
                    <div class="dropdown-header">Section 2</div>
                    <a class="dropdown-item" href="#">element 1</a>
                    <a class="dropdown-item" href="#">element 2</a>
                    <a class="dropdown-item" href="#">element 3</a>
                    <a class="dropdown-item" href="#">element 4</a>
                    <a class="dropdown-item" href="#">element 5</a>
                    <div class="dropdown-divider"></div>
                    <div class="dropdown-header">Section 3</div>
                    <a class="dropdown-item" href="#">element 6</a>
                </div>
                <div class="col-sm-3">
                    <div class="dropdown-header">Section 4</div>
                    <a class="dropdown-item" href="#">element 8</a>
                    <a class="dropdown-item" href="#">element 9</a>
                    <a class="dropdown-item" href="#">element 10</a>
                    <div class="dropdown-divider"></div>
                    <div class="dropdown-header">Section 5</div>
                    <a class="dropdown-item" href="#">element 11</a>
                    <a class="dropdown-item" href="#">element 12</a>
                    <a class="dropdown-item" href="#">element 13</a>
                </div>
                <div class="col-sm-3">
                    <div class="dropdown-header">Section 6</div>
                    <a class="dropdown-item" href="#">element 14</a>
                    <a class="dropdown-item" href="#">element 15</a>
                    <a class="dropdown-item" href="#">element 16</a>
                    <div class="dropdown-divider"></div>
                    <div class="dropdown-header">Forms</div>
                    <form class="form" role="form">
                    <div class="form-group">
                        <label class="sr-only" for="email">Adresse email</label>
                        <input class="form-control rounded-0" id="email" placeholder="username@example.com" type="email">
                    </div>
                    <button type="submit" class="btn btn-danger btn-block rounded-0">Recevoir les alertes</button>
                    </form>
                </div>
                        
            </div>
            </div>
    </div>
</li>
```

### Préparation pour la sidebar

Faisons en sortes à présent que le titre ait une taille fixe, celle de la sidebar, nous allons fixer sa taille comme suit

Nous allons à présent enlever tous les paddings (espaces internes) de l'entête en rajoutant la classe `p-0`, puis à la classe `navbar-brand` (celle du titre) ajoutons un fond noir transparent qui permet de démarquer du reste, on peut également y mettre une couleur (parmis celle cité plus haut)

```
header .navbar-brand{
    background-color: rgba(0,0,0,.5);
    text-align: center
}
```
ou 

```
header .navbar-brand{
    background-color: #218c74;
    text-align: center
}
```

#### Un petit fix!

En regardant le résultat, on sent que le header est trop "écrasé" sur le titre et les éléments. Nous allons ajouter du padding au titre et abaisser légèrement le badge qui avec son attribut css top à 0 se retrouve tout proche du bord supérieur:

```
header .dropdown-toggle .badge{
    position: absolute;
    right: 0;
    top: 4px; /* Abaissement de 4 px */
    z-index: 1500;
}
header .navbar-brand{
    background-color: rgba(0,0,0,.5);
    text-align: center;
    padding-top: .5rem;
    padding-bottom: .5rem;
}
```

On peut à présent supprimer la marge que nous avions ajouter aux sous menu, cette dernière n'en a plus besoin

```
/*
header .dropdown-menu{
    margin: .5rem 0 0; 
}
*/
```

### Dessinons nos zones

Nous allons représenter nos deux zones via des divs, celui en bleu (le nav) représentera la sidebar ou la barre latérale, alors que la partie bleu (balide main) représentera la zone ou sera affiché le contenu

```
<!-- Content -->
<div class="container-fluid">
    <div class="row">
        <!-- Sidebar -->
        <nav class="col-md-2" style="background-color:red;height:200px;">
            Sidebar 
        </nav>
        <!-- /Sidebar -->
        <!-- Main content -->
        <main class="col-md-10" style="background-color:blue;height:200px;">
            Content
        </main>
        <!-- /Main content -->
    </div>
</div>
<!-- /Content -->
```

A présent que nos deux zones sont bien défini, concentrons nous sur la sidebar. Celle ci aura probablement un titre, des menus et des sous menus, du genre `collapsed` ou `accordion`, nous verrons plus tard ce qu'il est possible de faire.
pourquoi pas également pouvoir rajouter quelques statistiques ou encore un accès en tabs (onglets), et pour couronner le tout, nous verrons comment faire coulisser la sidebar pour qu'elle soit plus petite ou invisible. 

## La sidebar

Pour tester le contenu de base, en mettant ce bout de code:

```
<nav class="col-md-2 sidebar">
    <div>
        <div class="sidebar-header">Menu 1</div>
        <ul>
            <li><a href="#"><i class="fa fa-circle"></i><span>Tableau de bord</span></a></li>
            <li><a href="#"><i class="fa fa-circle"></i><span>Utilisateurs</span></a></li>
            <li><a href="#"><i class="fa fa-circle"></i><span>Statistiques</span></a></li>
            <li><a href="#"><i class="fa fa-circle"></i><span>Tables</span></a></li>
        </ul>
    </div> 
</nav>
```

Vous devez vous dire que le résultat est absoluement dégueulasse à la limite de l'évanouissement... ettttt vous avez pas tord. Arrangeons ca par quelques bases:
On enlève le style des puces des lists (le rond par defaut), ensuite on enlève le fait que les liens soient soulignées lors du survole, et surtout on va essayer de délimiter la zone de chaque élement en donnant un fond rouge

cela donne ce style la:

```
a:hover{
    text-decoration: none
}
.sidebar ul{
    list-style: none;
    margin:0;
    padding:0;
}

.sidebar ul>li{
    background-color:red;
    margin-bottom:1px;
}
```
On voit qu'entre la sidebar et le menu il y a un espace, on va modifier tout cela en rendant le fond gris, chaque "li" prendra toute la largeur, au survol de la souris, le fond de l'élement en cours s'assombri, alors que la couleur de police s'éclairci, une bordure blanch apparaitra et restera en vert (couleur du titre) lorsque l'élement est sélectionné, le code css résultant est le suivant:

```

/* Sidebar */
a:hover{
    text-decoration: none
}
.sidebar{
    margin:0;
    padding:0;
    background:#272727;
    color: rgba(255,255,255,0.5)
}
.sidebar a{
    color: rgba(255,255,255,0.5);
    -webkit-transition: color 0.3s;
    transition: color 0.3s;
}
.sidebar a:hover, .sidebar a:focus, .sidebar a:active{
    color: rgba(255,255,255,0.8)
}
.sidebar .sidebar-header{
    padding: 10px 15px;
}
.sidebar ul{
    list-style: none;
    margin:0;
    padding:0;
}
.sidebar ul>li{
    margin-bottom:1px;
}
.sidebar ul>li a{
    display:block;
    padding: 10px 15px;
    border-left:4px solid transparent;
    -webkit-transition: border-color 0.3s;
    transition: border-color 0.3s;
}
.sidebar ul>li a:hover{
    background-color: rgba(0,0,0,.3);
    border-left: 4px solid rgba(255, 255, 255, 0.8)
}
.sidebar ul>li a:focus{
    background-color: rgba(0,0,0,.3);
    border-left: 4px solid #218c74;
}
.sidebar ul>li.active a{
    border-left: 4px solid #218c74;
    background-color: rgba(0,0,0,.3);
    color: rgba(255,255,255,0.9)
}
.sidebar i.fa{
    margin-right:8px;
}
```

Amélioront légèrement le menu pour bien le différencier  du menu. 

Mettons ensuite notre menu supérieur en claire avec une bordure:

```
 <nav class="navbar navbar-expand-lg sticky-top navbar-light bg-light p-0">
```

Nous rajouterons du padding et du margin pour les menu avec une bordure à droite pour les éléments de gauche et une bordure à gauche pour ceux à droite, le CSS est le suivant:

```
header .navbar-nav li {
    padding-left: 4px;
    padding-right: 4px;
}
header .navbar-nav.mr-auto li {
    border-right: 1px solid rgba(0,0,0,0.08); 
}
header .navbar-nav.ml-auto li {
    border-left: 1px solid rgba(0,0,0,0.08);  
}
header .navbar-nav li a {
    padding-left: 8px;
    padding-right: 8px;
}
```

et rajouter une bordure en haut pour la partie main afin de délimité légérement les zones entre l'entête et la partie contenu

```
<main class="col-md-10 border-top" style="height:200px;">
```

Modifions également la bordure (on unifie les couleurs de bordures avec celle de la class .border-top) et la position des sous menu:

```
header .dropdown-menu{
    margin: .31rem 0 0; 
    border-color: #dee2e6;
}
```

On constate également que l'effet de pulsar n'est pas assez voyant, contrastons la couleur de la bordure:

```
.bg-dark .pulse {
border-color: transparent;
}

.bg-light .pulse {
border-color: #aaa;
}
```

Recopions les sous menu de la sidebar 2 fois supplémentaire pour voir l'effet, le code html de la sidebar devient comme suit:

```
<nav class="col-md-2 sidebar">
    <div class="sidebar-section">
        <div class="sidebar-header">Menu 1</div>
        <ul>
            <li><a href="#"><i class="fa fa-circle"></i><span>Tableau de bord</span></a></li>
            <li class="active"><a href="#"><i class="fa fa-circle"></i><span>Utilisateurs</span></a></li>
            <li><a href="#"><i class="fa fa-circle"></i><span>Statistiques</span></a></li>
            <li><a href="#"><i class="fa fa-circle"></i><span>Tables</span></a></li>
        </ul>
    </div> 

    <div class="sidebar-section">
        <div class="sidebar-header">Menu 2</div>
        <ul>
            <li><a href="#"><i class="fa fa-circle"></i><span>Tableau de bord</span></a></li>
            <li class="active"><a href="#"><i class="fa fa-circle"></i><span>Utilisateurs</span></a></li>
            <li><a href="#"><i class="fa fa-circle"></i><span>Statistiques</span></a></li>
            <li><a href="#"><i class="fa fa-circle"></i><span>Tables</span></a></li>
        </ul>
    </div> 

    <div class="sidebar-section">
        <div class="sidebar-header">Menu 3</div>
        <ul>
            <li><a href="#"><i class="fa fa-circle"></i><span>Tableau de bord</span></a></li>
            <li class="active"><a href="#"><i class="fa fa-circle"></i><span>Utilisateurs</span></a></li>
            <li><a href="#"><i class="fa fa-circle"></i><span>Statistiques</span></a></li>
            <li><a href="#"><i class="fa fa-circle"></i><span>Tables</span></a></li>
        </ul>
    </div> 
</nav>
```
Nous avons rajouter la classe sidebar-section pour rajouter du code css qui permettra de les délimiter, ensuite nous utiliserons le script [simplebar](http://grsmto.github.io/simplebar/)  qui va permettre d'avoir une scrollbar uniquement pour la sidebar. Par 
la même occasion nous devons faire en sortes a ce que la sidebar soit "sticky" dans le sens ou on ne voit pas en dessous. Le code css est le suivant:

```
.sidebar{
    margin:0;
    padding:0;
    background:#272727;
    color: rgba(255,255,255,0.5);
    height: 100%;
    margin-top: 45px;
    padding-bottom: 61px;
    position: fixed;
    top: 0;
    bottom: 0;
    z-index: 1030;
}
```

Ce code va faire en sorte que la zone "main" va se retrouver en dessous de la sidebar, nous allons donc decaler cette zone vers la droite de la largeur de la sidebar grace aux classes bootstrap offset, nous y rajouterons juste la classe `offset-md-2`.

Rajoutons une zone à la sidebar qui contiendra un affichage en onglet avec comme menu des icones, dans le premier onglet nous afficherons du texte, le second un formulaire et le troisième une barre d'onglet, le code HTMLnest le suivant:

```
<div class="sidebar-section">
    <ul class="nav nav-tabs row" id="myTab" role="tablist">
        <li class="nav-item col-md-4 p-0 text-center">
            <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true"><i class="fa fa-home"></i></a>
        </li>
        <li class="nav-item col-md-4 p-0 text-center">
            <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false"><i class="fa fa-cogs"></i></a>
        </li>
        <li class="nav-item col-md-4 p-0 text-center">
            <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false"><i class="fa fa-edit"></i></a>
        </li>
    </ul>
    <div class="tab-content p-2" id="myTabContent">
        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
            <form>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                    <label class="form-check-label" for="defaultCheck1">
                        Default checkbox
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                    <label class="form-check-label" for="defaultCheck1">
                        Default checkbox
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                    <label class="form-check-label" for="defaultCheck1">
                        Default checkbox
                    </label>
                </div>
            </form>
        </div>
        <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                <div class="progress" style="height: 4px;">
                    <div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="progress" style="height: 4px;">
                    <div class="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="progress" style="height: 4px;">
                    <div class="progress-bar bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="progress" style="height: 4px;">
                    <div class="progress-bar bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
        </div>
    </div>
</div>
```

et voici le code css qui va permettre de faire correspondre le contenu à la sidebar mais également de modifier par exemple le design des onglets:

```
/* Sidebar nav-tabs */

.sidebar .nav-tabs, .sidebar .nav-tabs .nav-link{
    border-radius: 0;
    border: none !important;
    background-color: transparent;
}
 .sidebar .nav-tabs .nav-link.active{
    color: rgba(255,255,255,0.9);
    border-bottom:1px solid rgba(255,255,255,0.9) !important;
}

/* Sidebar progress */
.sidebar .progress{
    background-color: transparent;
    border-radius:none;
    margin: 16px 0;
}
```


A présent revenons à nos menu de la sidebar et modifions le second pour qu'il soit dropdown, pour cela nous allons tous simplement utilisé ce qui existe déjà principe (DRY) en utilisant la possibilité de rendre les choses collapsible:

```
<div class="sidebar-section">
    <div class="sidebar-header">Menu 2</div>
    <ul>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="collapse" data-target="#sousmenu1">
                Dropdown
            </a>
            <div class="collapse" id="sousmenu1">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
            </div>
        </li>
        <li class="active"><a href="#"><i class="fa fa-circle"></i><span>Utilisateurs</span></a></li>
        <li><a href="#"><i class="fa fa-circle"></i><span>Statistiques</span></a></li>
        <li><a href="#"><i class="fa fa-circle"></i><span>Tables</span></a></li>
    </ul>
</div
```


