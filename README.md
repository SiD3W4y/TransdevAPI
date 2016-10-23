# API Transdev

Cette api est un wrapper autour de l'api utilisée par l'appli mobile transdev.Cette
dernière a un format assez exotique pour représenter les données.C'est un format
semblable au csv mais ou le séparateur est le symbole pipe "|".
Le wrapper renvoie des listes javascript et permet ainsi de travailler plus facilement
avec les données.

## Comment utiliser l'api ?

Il suffit d'importer le fichier Transdev.js, et instancier l'object Transdev

```javascript
var Transdev = require("Transdev");

var api = new Transdev();
```

## Les fonctions
Toutes les fonctions de l'objet Transdev ont pour dernier argument une fonction callback

### Transdev.prototype.getLines(numero_de_ligne,function(data){...});
Cette fonction renvoie la liste des lignes répondant a un certain numéro.

Chaque objet de cette liste répond a ce format
```javascript
{
	"region":   <string>, // Lieu ou se situe la ligne
	"id":       <string>, // Id utilisé par l'api pour cette ligne
	"fromstop": <string>, // Nom de premier arrêt de la ligne
	"fromcity": <string>, // Nom de la ville ou se situe le premier arrêt
	"tostop":   <string>, // Dernier arrêt de la ligne
	"tocity":   <string> //   Nom de la ville ou se situe le dernier arrêt
}
```

### Transdev.prototype.getStops(line_id,direction,function(){...});

Le premier argument est l'id de la ligne que l'on a obtenu avec getLines().
La direction peut prendre deux valeurs, "0" pour l'aller et "1" pour le retour (il faut les passer en tant que string en argument).
Chaque objet de la liste répond au format
```javascript
{
	"id":   <string>, // id du stop
	"name:" <string> // Nom de l'arrêt
}
```

### Transdev.prototype.getTimetable(line_id,stop_id,date,directopn,function(){...});

La date doit être un string avec le format "JJ-MM-AAAA". Ce qui est renvoyé est simplement une liste d'horaires au format "HH:MM".

## Exemples
Des exemples peuvent être trouvés dans le dossier test
