# v2.22 — 2026-11-17

- Ajout de Goten et de la fusion Goten + Trunks → Gotenks.
- Correction de la carte Trunks Super Saiyan : évolution de Trunks (et non de Gohan).
- Renommage de l’ancienne capacité « Absorption » (+2 ATT quand un ennemi est mis KO) en « Assimilation », pour la distinguer de la nouvelle Absorption.
- Ajout de l’Absorption pour Cell et Super Buu : +1 Ki à chaque attaque qui leur inflige des dégâts, cumulable avec le +1 Ki de KO.
- Ajout des liens temporaires « Touche pas à ma Bulma ! » et « Père fils » : +2 ATT aux deux cartes pendant deux tours.
- En dernière manche, un joueur sans cartes peut effectuer une ultime charge si elle permet d’atteindre 12 Ki ; l’adversaire joue ensuite tous ses tours possibles, puis le Genkidama préparé se résout s’il n’a pas été annulé.

# Journal des modifications

## Version 2.23

- Explication d'une capacité : le nom de la capacité est en gras, et la valeur (« Valeur : ») se lit sur une ligne à part.
- Service worker : cache `dbz-v27`.

## Version 2.24

- Aide : listes corrigées pour Assimilation (Cell, Cell parfait, Super Buu) et Explosion (Chaozu, Gotenks, Toppo).
- Service worker : cache `dbz-v28`.

## Version 2.25

- Liens temporaires (Père fils, Touche pas à ma Bulma !) : le bonus +2 ATT apparaît maintenant dans les bonus actifs de la carte, avec une icône dédiée sur le plateau.
- Service worker : cache `dbz-v29`.

## Version 2.26

- Liens temporaires : « Touche pas à ma Bulma ! » et « Père fils » sont deux bonus distincts. Chaque carte n'affiche que les liens qui la concernent, avec leur propre libellé. Un combattant lié aux deux reçoit les deux bonus (+2 ATT chacun), chacun avec sa durée de deux tours.
- Service worker : cache `dbz-v31`.

## Version 2.37

- Quand une carte subit une attaque, sa valeur d'ATT clignote pendant 3 secondes, pour repérer le changement d'un coup d'œil.
- Service worker : cache `dbz-v41`.

## Version 2.36

- Adversaire : après qu'une carte a été mise KO, il ne peut pas reposer un autre exemplaire de cette carte sur la même case. Il la pose sur une autre case libre, ou charge son Ki si la seule case libre est celle de la carte KO. Cela évite de croire que la carte KO est toujours en jeu.
- Service worker : cache `dbz-v40`.

## Version 2.35

- « Nouvelle partie » ouvre d'abord un choix : Commencer la partie, Modifier mon deck, ou Annuler. Après avoir enregistré ou fermé l'éditeur de deck ouvert depuis ce choix, on revient au choix.
- Quitter une partie en cours passe aussi par ce choix avant de lancer la nouvelle partie.
- Service worker : cache `dbz-v39`.

## Version 2.34

- Éditeur de deck : pendant une partie, un rappel indique que le deck sera utilisé à la prochaine partie. Un message le confirme à l'enregistrement.
- Service worker : cache `dbz-v38`.

## Version 2.33

- Main agrandie : les illustrations s'affichent en entier, dans leur proportion réelle (elles étaient rognées à 62 px de haut). La main repliée ne change pas.
- Service worker : cache `dbz-v37`.

## Version 2.32

- Main agrandie : le défilement s'arrête sur une ligne entière, pour que les illustrations (et les visages) ne soient plus coupées.
- Service worker : cache `dbz-v36`.

## Version 2.31

- Main agrandie (▲) : les cartes passent sur plusieurs lignes, en proportions normales (3 par ligne sur téléphone), et la liste défile dans sa zone. La main repliée ne change pas.
- Service worker : cache `dbz-v35`.

## Version 2.30

- Genkidama : l'illustration s'affiche en entier (plus de recadrage sur le ventre de Goku). Le tremblement d'écran n'en déplace plus l'affichage.
- Service worker : cache `dbz-v34`.

## Version 2.29

- Le défi du jour en cours reste affiché en haut de l'écran pendant toute la partie, même si le bouton Mode a été changé.
- Le bouton Mode affiche le mode de la partie en cours ; le changement ne prend effet qu'à la partie suivante.
- Correction : un changement de mode en cours de partie ne fausse plus la progression du tournoi.
- Service worker : cache `dbz-v33`.

## Version 2.28

- Pointillés : plus aucun trait entre les combattants des deux joueurs. Seuls les liens entre combattants d'un même joueur sont tracés.
- Liens temporaires (Père fils, Touche pas à ma Bulma!) : le trait n'apparaît que pendant les deux tours du bonus.
- Couleurs des liens stables d'un tour à l'autre (elles dépendent désormais du type de lien et des cartes, et non plus de l'ordre de dessin).
- Carte agrandie : chaque bonus actif s'affiche dans une couleur différente.
- Aide « Les camps » mise à jour (liens entre combattants).
- Service worker : cache `dbz-v32`.

## Version 2.27

- Liens temporaires : le bonus dure bien deux tours après celui de la pose. Il disparaissait auparavant dès la fin du tour suivant.
- Service worker : cache `dbz-v32`.

## Version 2.21

- ATT : harmonisation du vocabulaire dans le code, les libellés et les règles.
- Fusion : suppression de la recette incorrecte Trunks + Goku pour Gotenks ; la fusion Gogeta (Goku + Vegeta) reste disponible. Gotenks demeure une carte autonome en attendant l'ajout d'une carte Goten.
- Nouvelle capacité « Maîtrise du Ki » : Bulma et Babidi rendent +1 Ki à leur entrée en jeu, sans dépasser 12.
- Service worker : cache `dbz-v25`.

## Version 2.20

- Explication d'un camp : le nom du camp et « Tempérament : » sont en gras, avec une ligne vide entre les deux définitions.
- Service worker : cache `dbz-v24`.

## Version 2.19

- Carte agrandie plus lisible : libellés en gras (camp, ATT, Ki, Capacités, noms des capacités, bonus actifs), chaque capacité sur sa ligne avec son nom, et plus d'espace entre les éléments.
- Service worker : cache `dbz-v23`.

## Version 2.18

- Carte agrandie : le camp s'affiche avec sa couleur.
- Règles mises à jour : 6 emplacements en Normal et Difficile, Genkidama (une fois par partie, lancée à la main, annulable), règle de la charge, bouton Charger grisé, liens entre combattants, « Si jouée » sur la carte agrandie, adversaires du tournoi (héros MCU).
- Service worker : cache `dbz-v22`.

## Version 2.17

- Animation de la carte jouée : seule l'illustration vole (sans le texte). Ta vue reste sur ton plateau pendant l'animation, et le tour de l'adversaire ne démarre qu'à la fin.
- Service worker : cache `dbz-v21`.

## Version 2.16

- Animation quand tu joues une carte : elle sort de ta main, s'affiche agrandie un court instant, puis se pose sur son emplacement. Désactivée si l'option « réduire les animations » est active sur l'appareil.
- Service worker : cache `dbz-v20`.

## Version 2.15

- Liens entre combattants : chaque lien a sa propre couleur (au lieu de trois couleurs par type). Une info-bulle indique le type de lien et les deux cartes.
- Service worker : cache `dbz-v19`.

## Version 2.14

- Charger : le bouton est grisé quand il n'est pas utilisable car tu as chargé au tour précédent. Un clic affiche le pourquoi.
- Service worker : cache `dbz-v18`.

## Version 2.13

- Genkidama : apparition plus lente. L'image grandit depuis le centre jusqu'à remplir l'écran, puis s'arrête ; le texte apparaît à la fin.
- Accord corrigé : « le Genkidama » (et non « la »).
- Service worker : cache `dbz-v17`.

## Version 2.12

- Genkidama une fois par partie : à 12 Ki, tu le lances à la main (plus de déclenchement automatique). Elle part au début de ton prochain tour : 3 dégâts à chaque combattant ennemi (les divins sont épargnés), puis ton Ki retombe à 0.
- Annulation par l'adversaire, de deux façons : il paie 12 Ki, ou il met KO un combattant du lanceur pendant son tour. Le Ki du lanceur est alors perdu.
- Un Genkidama encore en préparation est perdue si la manche se termine.
- Charge : +2 Ki sous 6 Ki, +1 Ki au-delà. Pas deux charges de suite, sauf si aucune carte n'est jouable.
- IA : elle lance et annule le Genkidama selon la difficulté.
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
