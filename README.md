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

## Header

Commencons par la partie de haut