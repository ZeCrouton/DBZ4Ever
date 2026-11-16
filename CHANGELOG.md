# Journal des modifications

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
