# Journal des modifications

## Version 2.12

- Genkidama une fois par partie : à 12 Ki, tu la lances à la main (plus de déclenchement automatique). Elle part au début de ton prochain tour : 3 dégâts à chaque combattant ennemi (les divins sont épargnés), puis ton Ki retombe à 0.
- Annulation par l'adversaire, de deux façons : il paie 12 Ki, ou il met KO un combattant du lanceur pendant son tour. Le Ki du lanceur est alors perdu.
- Une Genkidama encore en préparation est perdue si la manche se termine.
- Charge : +2 Ki sous 6 Ki, +1 Ki au-delà. Pas deux charges de suite, sauf si aucune carte n'est jouable.
- IA : elle lance et annule la Genkidama selon la difficulté.
- Service worker : cache `dbz-v16`.

## Version 2.11

- Le calcul de l'attaque (« ATT 6 = 5 + 1 (enragé) · 3 Ki ») n'apparaît plus sur les cartes de la main. Il s'affiche dans la carte agrandie, en appui long, sous « Si jouée ».
- Service worker : cache `dbz-v15`.

## Version 2.10

- Liens entre combattants : un trait relie les cartes liées sur le plateau (violet pour le Tempérament de camp, vert pour les alliés, rouge pour les rivaux face à face). Le contour sur les cartes est retiré, pour garder leur taille et leur lisibilité.
- Service worker : cache `dbz-v14`.

## Version 2.9

- Mises à jour : la page est maintenant cherchée d'abord sur Internet, donc une nouvelle version s'affiche dès l'ouverture suivante. La copie en cache ne sert plus qu'hors ligne.
- Service worker : cache `dbz-v13`.

## Version 2.8

- Ki plafonné à 12 (au lieu de 8).
- Genkidama : dès que le Ki atteint 12, 3 dégâts à chaque combattant ennemi (les divins sont épargnés), puis le Ki retombe à 0. Écran plein avec l'image, texte « Ki au maximum : Genkidama ! » et tremblement de 2 secondes.
- Le succès « Genkidama » (3 soutiens dans une manche) est renommé « Esprit d’équipe ».
- Service worker : cache `dbz-v12`.

## Version 2.7

- Plateaux de 6 places en niveau Normal et Difficile (3 en Facile, inchangé).
- Service worker : cache `dbz-v10`.

## Version 2.6

- L'écran de fin de manche indique la raison : « Les deux plateaux sont pleins » ou « Plus personne ne peut agir ».
- Service worker : cache `dbz-v9`.

## Version 2.5

- « Passer » est supprimé. Une manche se termine quand plus personne ne peut agir (pas de carte jouable et Ki au maximum), ou quand les deux plateaux sont pleins.
- Un joueur qui ne peut rien faire voit son tour sauté ; l'adversaire joue.
- L'IA charge son Ki à la place de passer.
- Service worker : cache `dbz-v8`.

## Version 2.4

- Passer fait piocher une carte bonus au joueur qui passe (en plus du +1 Ki pour le premier à passer).
- Service worker : cache `dbz-v7`.

## Version 2.3

- Rayons d'énergie de 2 et 3 PUI augmentés de 1 (les rayons de 4 et 5 sont inchangés).
- Service worker : cache `dbz-v6`.

## Version 2.2

- Esquive : affichage deux fois plus long, description « Chance d'esquiver l'attaque ennemie. »
- Adversaires du tournoi renommés en héros MCU : Hawkeye, Iron Man, Thor, Spider-Man, Hulk, Captain America, Doctor Strange, Wanda.
- Changement de mode ou de niveau : le message s'affiche sous le menu et ne couvre plus les boutons.
- Tremblement d'écran sur les rayons d'énergie, ondes de choc et explosions.
- Petits cœurs au-dessus du plateau quand Namek soigne un combattant.
- Cartes liées (Tempérament de camp, alliés, rivaux) entourées de violet.
- Règles Enragé et Survie reformulées : « si ton total est inférieur à celui de l'adversaire (les bonus Enragé et Survie ne comptent pas dans ce total) ».
- Service worker : cache `dbz-v5`.

## Version 2.1

- **Ki par tour** : +1 de base (au lieu de +2). Charger reste à +2 Ki.
- **Pioche** : une carte par tour, sans plafond à 5 en cours de partie (la main de départ reste à 5).
- **Personnalités d'IA** : chaque adversaire du tournoi a son comportement. Vegeta est fier et joue ses Saiyans ; Freezer frappe quand un rayon peut tuer ; Cell aime les évolutions ; Buu est imprévisible ; Jiren privilégie les ondes de choc ; Beerus attend quand il mène et charge son Ki quand aucun coup ne vaut le coup ; Goku Ultra Instinct privilégie l'esquive et la régénération.
- Service worker : cache `dbz-v4`.


## Corrections

- **Partie bloquée** : fermer la fenêtre d'agrandissement pendant le tour de l'IA relance désormais l'IA.
- **Deck de départ** : le deck n'est plus complété avec des cartes non possédées. La collection de départ passe à 23 cartes de base (puissance ≤ 6), de quoi composer un deck de 20. Les joueurs existants reçoivent les nouvelles cartes de départ.
- **Égalité** : un nul (même nombre de manches gagnées) est affiché comme « Partie nulle ». En tournoi, le même adversaire est rejoué, sans progression ni recul.
- **Sauvegardes** : les collections, decks et parties sauvegardées sont validés à la lecture ; une sauvegarde incompatible repart sur une nouvelle partie au lieu de planter.
- **Règles Saiyan enragé et Survie** : la comparaison de totaux ignore désormais les bonus Enragé et Survie (plus de récursion). Les textes d'aide ont été alignés.
- **Fusion** : Goku Black ne fusionne plus avec Vegeta en Gogeta.
- **Niveaux** : la sauvegarde sans niveau reprend le niveau courant (et non 3 emplacements) ; mise en page à 3 emplacements ajoutée.
- **Évolution** : le texte d'aide précise que l'évolution soigne le combattant remplacé.
- **Musique** : elle accompagne la partie (démarrage à la première partie, plus au premier toucher de la page).

## Performance et hors ligne

- Images sorties du HTML (de 1,2 Mo à environ 120 Ko), chargées à la demande (`loading="lazy"`).
- Icônes allégées (icon-512 : 570 Ko → 98 Ko) et musiques réencodées en 64 kbps (14,6 Mo → 5,6 Mo).
- Service worker avec cache versionné (`dbz-v3`) : le jeu fonctionne hors ligne après un premier chargement. Pour publier une mise à jour, incrémenter `VERSION` dans `sw.js`.

## Nouveautés

- **Mode nul explicite** (voir Corrections) et mention dans l'aide.
- **Statistiques par deck** : parties, victoires, nuls, défaites et taux de victoire pour chaque deck utilisé, affichées dans « Collection et succès ». Le suivi est par deck enregistré, ou « Deck aléatoire ».
- **Niveau Difficile** : l'IA évalue chaque coup selon son effet réel (ATT gagnés, dégâts infligés aux cibles, coût en Ki, mise KO). Elle charge son Ki plutôt que de jouer un coup sans intérêt quand elle n'est pas en tête.

## Notes techniques

- Les index des cartes restent liés à l'ordre de `CARDS`. Pour ajouter des cartes, les ajouter **à la fin** de la liste, sans réordonner les existantes. La migration vers des identifiants stables est prévue.
