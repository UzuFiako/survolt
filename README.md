# Survolt

Roguelike d’arène pour mobile : survis aux vagues, booste ton tank carte après carte, fais sauter les boss.

## Jouer

Ouvre le lien du jeu dans Safari (iPhone) ou Chrome (Android), puis ajoute-le à l’écran d’accueil :

- **iPhone** : bouton Partager, puis « Sur l’écran d’accueil ».
- **Android** : menu ⋮, puis « Installer l’application » ou « Ajouter à l’écran d’accueil ».

Lancé depuis l’écran d’accueil, le jeu s’ouvre en plein écran et marche hors ligne.
La progression est enregistrée sur le téléphone, et en ligne si tu es connecté à ton compte.

Après chaque mise à jour, un écran « Quoi de neuf ? » s’affiche au lancement. On peut le rouvrir dans Réglages > Nouveautés.

## Le jeu en bref

- **8 mondes** de 20 à 50 vagues, de plus en plus durs, avec mini-boss, boss et boss final. Le mode **Infini**, les **parties rapides** (3 à 15 min) et le **multi** (défi de la semaine, co-op, course 1v1, fantôme, duels).
- **Nightmare** après le Monde 8, **Backrooms** (3 mondes de 3 étages, ampoules 💡) et **Ma base**, un village médiéval à aménager (bâtiments déplaçables, décorations, expéditions de familiers, production même hors ligne).
- **Prestige** (50 niveaux) après le Monde 8, avec un **arbre de talents** jusqu'à l'Évolution Oméga.
- **Garage** : équipements et sets légendaires, fusion, runes, châssis à niveaux, étoiles et maîtrises, familiers (avec maîtrises), look (skins, dont 3 skins divins, couleurs, balles, accessoires), ULT.
- **Atelier** (100 niveaux par amélioration), **coffres** et **clés**, **Boutique** (offres du jour, packs exclusifs).
- **Profil** : niveau joueur, prestige, titres, succès, statistiques, et une photo de profil animée (30 bordures, 23 fonds, 25 animations). **Social** : amis, messages, chat global.
- **Aide** : tutoriel animé, visite guidée du menu avec un doigt qui montre l'essentiel, bulles d'info sur chaque monnaie et chaque stat.
- **Almanach** : monstres, objets, perks, familiers… avec des bonus de collection.

## Mises à jour

### MAJ 18 · 1 pour 2, le mode amoureux (v125)

- **Nouveau mode multijoueur « 1 pour 2 »** : un seul tank pour deux. Un joueur pilote (déplacement + dash), l’autre tient le canon (visée, tir, surcharge, ultime d’équipement). Les rôles se choisissent dans la salle.
- **Le tank est celui de l’hôte** : ses stats, son canon, ses améliorations et son look.
- **Cartes à l’aveugle** : 15 s, chacun choisit en secret. Même carte = validée. Cartes différentes = pile ou face 50/50 avec un écran de verdict. Un seul a choisi = il l’emporte. Personne = hasard.
- **Contrôles** : sur téléphone, tout l’écran sert à ton poste. Le bouton de l’autre poste est grisé.
- **Quêtes multi** : « Joue 3 parties en 1 pour 2 » et « Termine un monde en 1 pour 2 ».
- **Correctif** : le chrono des cartes en multi n’affiche plus un énorme sablier.

### Correctif créateur (v124)

- **Titre et aura « Créateur »** remis sur le compte du créateur (une seule fois), et toujours possédés même avant la vérification admin.

### MAJ 17 · retouche des Seigneurs (v123)
- Les 3 Seigneurs redessinés en créatures : le Dévoreur de mondes (planète éventrée en gueule à 3 rangées de dents, lèvres de chair, 9 yeux à pupille fendue, tentacules à serres, mondes aspirés en spirale), l'Apocalypse (crâne couronné de fer, cornes de bélier lisses, 4 ailes déchirées en feu, lave qui coule des orbites, cœur de lave dans la cage thoracique, sceau runique au sol), le Seigneur-Dieu Ω (séraphin biblique : 6 ailes couvertes d'yeux, 3 roues d'ophanim couvertes d'yeux, vide noir autour d'un œil unique aveuglant, faille entre les dimensions). Tous les yeux suivent le joueur et clignent.

## MAJ 17 · Dimension Oméga (v122)
- **Dimension Oméga** : s'ouvre avec l'Évolution Oméga (talent `om`). Bouton dans le menu (au-dessus du choix du monde). Thème « omega » forcé (psychédélique, teinte du jeu qui tourne, rayons kaléidoscopiques). Progression séparée (`meta.wdone` clés `o…`, gardées au prestige). Ennemis ×6 PV, ×3,5 dégâts, ×1,18 vitesse, butin ×4, XP ×2,5. **NightmAlpha** (Nightmare en Oméga, +×1,6 PV / ×1,4 dégâts) et **BetaRooms** (Backrooms en Oméga). Pas de classement pour les parties Oméga.
- **Prestige rééquilibré** : XP ×6 (`runXp`), +25 % d'XP par prestige (`prXpGain`). Estimation (6 h/jour) : 1er prestige ~10 jours, Évolution Oméga (prestige 44) ~9 mois. Niveau requis plafonné à 750.
- **3 Seigneurs (boss géants secrets)** : chance de surgir juste après la mort du boss final d'un monde 1 à 8 (`eggRoll`). Seigneur des mondes 0,1→1 % (Nightmare 0,2→2 %), Seigneur de l'Apocalypse en Nightmare 0,2→2 %, Seigneur-Dieu Oméga des dimensions 0,01→0,1 % (Nightmare 0,1→0,5 %), et 1→10 % chacun dans la dimension Oméga. Écran d'alerte « DANGER IMMINENT », musique cataclysme, écran qui tremble et glitche. Force : au moins le boss final du Monde 8 en Nightmare (×2 / ×5 / ×12 PV), renforts d'élites. Butin à chaque victoire (10k/50k/100k nuggets, 500/2 500/5 000 diams, parchemins, ampoules, clés, coffres LG/UPL) + objets uniques à la première victoire (titre, skin, photo, bordure, fond, animation, couleur), glitchés tant qu'on ne les a pas. Almanach : ligne « ??? » glitchée, le visuel se débloque à la rencontre. Test admin : `meta.eggForce = 'mondes' | 'apoc' | 'dims'` (compte admin) force le prochain.
- Carte d'un ami : boutons en haut, stats en volets par catégorie. Fenêtres : croix en haut à droite, plus de FERMER en bas.
- Bug corrigé : ouvrir les accessoires du garage gelait le jeu (`accPrice` s'appelait lui-même).
- Village en paysage : carte en bas et plus petite, le volet défile.

## MAJ 16 · partie 2 (v121)
- Village 2 fois plus grand (40 × 28 cases) : rivière, pont, étang, champs, forêt, clôture ; glisser pour se déplacer, pincer / molette / boutons pour zoomer. L'ancien village est recentré automatiquement.
- Bug corrigé : positions, décorations, expéditions et niveaux de Forge / Serre / Hangar n'étaient pas gardés au rechargement.
- 22 nouvelles décorations (sapin, chêne, cerisier, palmier, moulin, kiosque, tente, feu de camp, puits, ruche, arche néon…).
- Niveau du village expliqué clairement, avec barre jusqu'à la prochaine récompense.
- Visite des villages des amis (bouton dans Ma base + sur la carte d'un ami). Le village est partagé via le profil (stats.vil).
- Fenêtre de récompenses (connexion, quêtes, passe, cadeaux, achats) : chaque objet se touche pour l'expliquer.
- Boîte de réception : Messages (amis + jeu) / Cadeaux, lu / non lu, suppression.
- Prestige : niveau 300 requis (+10 par prestige) ; talents renforcés et +3 % dégâts / PV par point.
- Garage : onglets avec icône et couleur. Réglages : section « Autres » (sons de clic) retirée.
- Croquis : feuille froissée + dessins d'enfant espacés, textes détourés.
- Visite guidée : bulle toujours visible (paysage, rotation). Remesure après rotation (bande vide en bas), barres de défilement masquées, défilement en butée.
- Menu portrait : « Quêtes » et « Social » écrits à côté de l'icône.

## MAJ 16 · partie 1 (v120)
- Packs retirés automatiquement du compte demora.mathias@gmail.com au premier lancement (sets LG, skins, familiers, thèmes, châssis, balles, couleurs, coffres LG, entrées d'almanach des packs). Titre Créateur et titres gardés.
- Photo de profil : le tank bouge (animation du skin), il est plus petit et centré dans le rond.
- Menu : énergie sous le rouage en portrait ; Quêtes et Social en icône seule en paysage.
- Titres communs plus durs : 10 parties, 1 500 ennemis, 45 entrées d'almanach, Monde 2.
- Photos de profil : mêmes tuiles que les bordures, avec l'œil d'aperçu.
- Garage : le détail (stats, équiper, vendre, forge) s'ouvre aussi juste sous l'objet touché dans l'inventaire.
- Puissance : calculée sans arrondis intermédiaires, les « +1 » ne sautent plus d'un emplacement à l'autre ; petits gains affichés avec une décimale.
- Pièces de set légendaire : uniquement dans les coffres UPL ou en pack.
- Village : toucher un bâtiment sur la carte l'ouvre comme les icônes ; en paysage, deux volets qui défilent chacun ; la bulle de récolte reste collée au bâtiment déplacé.

## Correctif admin (v119)
- Panneau Admin → Modération → « 🧹 RETIRER MES PACKS ET CADEAUX » : retire de ton compte (demora.mathias@gmail.com uniquement) les packs Océanique, Volcanique, Céleste, Spacelord et Testeur : sets LG, skins, familiers, thèmes, châssis, balles, couleurs et titres. Les diams, nuggets et coffres ne sont pas touchés.

## MAJ 15 · Premium partout

**Photo de profil vraiment animée**
- Les fonds, bordures et animations sont maintenant dessinés en direct sur deux calques, un derrière et un devant la photo.
  - Ils bougent toujours, même quand l'iPhone a « Réduire les animations » activé : c'est ce réglage qui figeait tout avant.
  - Les petites vignettes tournent à 30 images/s, et seules les photos visibles à l'écran sont animées.
- Toutes les animations sont refaites :
  - ailes de phénix avec de vraies plumes qui battent, plus une queue et une crête de feu ;
  - galaxie de 500 étoiles en 3D qui passe devant et derrière la photo ;
  - hologramme projeté, tempête avec éclairs ramifiés, glitch RVB, prisme et Couronne Oméga.
- **30 bordures, 23 fonds et 25 animations**, avec des nouvelles à bas niveau (CO, R, SR), pour qu'il y ait une récompense presque à chaque palier.
- **Bordures « civilisations »** :
  - Olympe (270) et Soleil aztèque (320) ;
  - Sanctuaire japonais (420), Rosace de cathédrale (470) et Pharaon (560) ;
  - Mandala (640) ;
  - Temple impérial (730) : laque rouge et frise d'or, deux dragons dorés qui poursuivent la perle de feu, lanternes qui se balancent.
- Un 👁 sur chaque vignette ouvre l'aperçu en grand, avec la rareté et la description.

**Rangé par rareté**
- Titres, bordures, fonds, animations et photos de profil sont sur des lignes par rareté, comme dans le Garage.
- 12 nouveaux titres faciles (4 CO, 4 R, 4 SR) : Débutant, Premier sang, Curieux, Pilote, Tireur d'élite, Briseur de boss, Rescapé, Collectionneur, Explorateur, Plongeur des Backrooms, Fléau des boss, Marqueur.

**Skins**
- **3 skins divins** (Ultra Premium Légendaire), jamais dans les coffres. Il faut un niveau joueur minimum, puis payer en diams, nuggets et ampoules :
  - **Séraphin** (niveau 300) : six ailes de lumière, rayons divins, auréole. ✦ 3 000 + ◆ 1 500 000 + 💡 1 500.
  - **Solaris** (niveau 450) : soleil vivant, couronnes de rayons, protubérances de plasma. ✦ 4 500 + ◆ 2 500 000 + 💡 2 500.
  - **Olympien** (niveau 600) : nuées d'orage, foudre, laurier d'or, marbre gravé. ✦ 6 500 + ◆ 4 000 000 + 💡 4 000.
  - Chacun a ses tirs, sa traînée en partie et sa photo de profil.
- **12 nouvelles formes** :
  - CO : Pentagone, Triangle, Goutte, Octogone ;
  - R : Losange, Bouclier, Croissant de lune, Trèfle ;
  - SR animées : Turbine, Carapace, Radar, Fusée.
- Toutes les formes ont un reflet brillant.
- **12 nouvelles couleurs** :
  - CO : Brique, Olive, Bleu ciel, Prune ;
  - R : Saumon, Lagon, Lavande, Pistache ;
  - SR : Jade, Cobalt, Framboise, Ambre.
- Skins légendaires et de pack retravaillés :
  - Supernova : disque d'accrétion lisse avec effet Doppler et filaments ;
  - Léviathan : tourbillon d'eau, points bioluminescents ;
  - Titan : chaleur, roches en fusion en orbite, couronne de flammes ;
  - Dragon céleste : rubans de jade et d'or, nuages doux.

**ULT et attaques**
- SURCHARGE : explosion avec rayons de lumière et éclairs, puis une aura (anneaux qui tournent, étincelles, arcs électriques) tant qu'elle dure.
- Toutes les ondes de choc ont 3 couches : halo, anneau et liseré blanc.
- Tes tirs laissent une traînée, et les tirs ennemis ont un halo.
- Coulée de lave : du magma coule dans le rayon. Typhon : de l'écume tourbillonne autour de la boule d'eau.

**Corrections**
- Almanach : le texte « Collection : X découvertes » ne se superpose plus à la ligne du dessous.

### MAJ 14 · Niveau 750

**Niveau joueur**
- Le niveau max passe de 500 à **750**. Le bonus de niveau est réparti sur les 750 niveaux (au max : +105 % de PV, +75 % de dégâts) et la rareté des coffres de niveau suit la nouvelle échelle.
- Tout ce qui se débloque avec le niveau arrive environ 1,5× plus tard :
  - bordures, fonds et animations de profil ;
  - titres : Vétéran 75, Élite 150, Légende 300, Mythe 450, Immortel 600, Survolté 750 ;
  - familiers : Givrette 25, Braise 45, Venin 65, Mortier 85, Prisme 110, Supernova 150 (les familiers de pack n'ont pas de niveau requis).

**Animations de profil**
- 7 nouvelles animations premium : Aurore boréale (360), Tempête électrique (420), Hologramme (480), Galaxie spirale (540), Ailes de phénix (600), Prisme cosmique (680) et Couronne Oméga (750, le niveau max).
- Les anciennes ont été refaites pour bien se voir : rayon de scan, étincelles, anneau de flammes, glitch avec décalage de couleurs, orbite à 3 points, pulsation plus marquée.

**Skins de pack**
- Léviathan océanique : crête dorsale rouge qui ondule, ouïes, reflet nacré qui glisse et lumière des abysses.
- Titan volcanique : deux cornes de roche et des yeux de lave qui brillent.
- Dragon céleste : écailles de lumière qui gravitent et halo vert autour de la perle.

### MAJ 13 · Village, interface et confort

**Ma base devient un village**
- Ambiance à part, comme les Backrooms : écran en bois et or, titre façon parchemin, et une **musique médiévale** (luth, bourdon, flûte, tambourin) qui se lance quand on entre dans la base.
- Le village : prairie avec herbe, fleurs et cailloux, bâtiments posés sur des dalles de pierre, lucioles, et des **chemins pavés qui partent du QG et le suivent quand on le déplace**.
- En haut : les 4 productions (◆ ✦ 📜 💡) avec stock, production par heure et jauge. On touche une case pour récolter, ou pour voir le bâtiment s'il n'est pas construit.
- Sous le village : tous les bâtiments en raccourci (niveau, chantier en cours, stock plein, verrouillé). Juste dessous, la fiche du bâtiment choisi, puis les ouvriers.
- **🔨 AMÉNAGER** : un encadré explique quoi faire, la grille s'affiche, l'élément sélectionné a des flèches. On glisse un bâtiment ou une décoration (case verte = libre, rouge = occupée). On peut remettre un bâtiment à sa place d'origine, ranger une décoration contre la moitié du prix, et acheter les décorations dans une bande avec leur aperçu.

**Menu et profil**
- Le bandeau Ma base du menu montre un vrai village (coucher de soleil, château, maisons, collines) avec le titre « Ma base » façon parchemin.
- Quand on choisit un bâtiment, un familier, une rune ou un châssis, l'écran défile tout seul jusqu'au début de sa fiche.
- Correction : le menu en paysage était cassé (colonne de droite coupée, boutons du mauvais côté).
- Profil : titre principal, aura, photo, bordure, fond et animation sont rangés dans un seul volet « Personnalisation », avec chacun son sous-volet.
- Animations de profil refaites pour bien se voir : rayon de scan qui balaie la photo, étincelles qui clignotent, anneau de flammes qui tourne, glitch avec décalage de couleurs, orbite avec 3 points, pulsation plus marquée.
- Ma base : quand on choisit un bâtiment, sa fiche arrive tout en haut de l'écran. Les ouvriers sont rangés dans un volet replié, sous la fiche.
- Son : fondu d'entrée au lancement (plus de claquement), et le son est complètement coupé puis recréé quand on quitte et revient dans l'appli (plus de bip strident au retour).
- Boutons Atelier, Garage, Coffres, Almanach, Classement et Boutique plus gros (grande icône au-dessus du nom), à leur place habituelle sous Ma base.
- Le bouton du profil montre le pseudo, le niveau joueur et le prestige (qui brille quand le prestige suivant est prêt).
- **Visite guidée du menu** : au tout premier lancement d'un nouveau joueur (après le tutoriel), un doigt animé montre l'essentiel en 12 étapes (Jouer, mondes, parties rapides, châssis, Garage, Atelier, Coffres, énergie, quêtes, profil, réglages, Boutique). On peut la passer, et la relancer depuis Réglages > Visite guidée du menu. Les joueurs déjà avancés ne la voient pas automatiquement.
- **Bulles d'info** : touche une stat du menu (Record, Mondes, Clés, Nuggets, Diams, Ampoules) ou une monnaie en haut d'un écran pour savoir à quoi elle sert et comment en avoir, avec un bouton qui mène à la bonne section de la Boutique.
- **Profil** : tout est replié à l'ouverture sauf le volet « Niveau et prestige » (niveau joueur et prestige réunis). Le compte est tout en haut : un gros bouton « Se connecter ou créer un compte » si tu n'es pas connecté, sinon un volet Compte.

**Garage, atelier et réglages**
- **Runes** façon premium : autel des runes avec le résumé des bonus équipés et les fusions possibles, emplacements lumineux à la couleur de la rareté, échelle d'évolution de CO à UPL pour chaque rune (ta rareté en surbrillance, la suivante en pointillé), progression de fusion (x/3) avec un bouton pour fusionner directement, et collection rangée par type de rune.
- Atelier rangé en volets dépliables par catégorie (Attaque, Défense, Mobilité, Surcharge, Progression), avec le niveau total, une barre de progression et le nombre d'améliorations achetables.
- Réglages rangés en volets dépliables : Commandes et touches (avec l'aide manette), Affichage, Musique et son, Autres.

### MAJ 12 · Base, Backrooms et maîtrises

**Ma base façon Clash of Clans**
- Grille de 20 × 14 cases : avec **🔨 AMÉNAGER**, on glisse chaque bâtiment et chaque décoration où on veut (vert = libre, rouge = occupé).
- 3 nouveaux bâtiments : **Forge à parchemins** (📜, QG 2), **Serre à ampoules** (💡, QG 3), **Hangar d'expédition** (QG 2). « Tout récolter » ramasse les 4 productions.
- 9 **décorations** à acheter en nuggets (arbre néon, lampadaire, drapeau, cristal, banc, fontaine, statue de tank, héliport, tour Tesla), qu'on peut ranger contre la moitié du prix.
- **Niveau de base** (somme des niveaux des bâtiments) avec des paliers à 10, 20, 30, 40, 50 et 60 : diams et clés.

**Expéditions de familiers**
- Depuis le Hangar : 1 place, puis jusqu'à 4 selon son niveau. On envoie un familier (sauf celui équipé) pour 2, 8 ou 24 h.
- Au retour : nuggets, parchemins et XP du familier, plus des clés et des diams sur les longues expéditions. Plus le familier est haut niveau et maîtrisé, plus il rapporte. On peut finir une expédition avec des diams.

**Maîtrises**
- Chaque **châssis** et chaque **familier** gagne de la maîtrise avec les éliminations faites avec lui. 11 rangs, de Novice à Mythique (150 000 éliminations).
- Bonus permanents : +2 % de dégâts et de PV par rang pour le châssis, +4 % de dégâts par rang pour le familier. Chaque nouveau rang donne aussi des nuggets et des diams (dans la boîte de réception).
- Les maîtrises ne sont jamais remises à zéro, même au prestige. Elles s'affichent dans la fiche du châssis et du familier.

**Backrooms : 3 mondes × 3 étages**
- Les Backrooms, les Bureaux vides (après le Monde 8) et les Poolrooms (après les 8 Nightmare) sont maintenant 3 mondes de 3 étages chacun.
- Chaque étage est ×1,2 plus dur que celui du dessus, avec 2 salles de plus et plus d'élites. Les Bureaux sont plus durs que le 3e étage des Backrooms, les Poolrooms plus durs que le 3e étage des Bureaux.
- Chaque salle de boss donne un équipement, un coffre, des diams et +1 perk à choisir. Le boss du 3e étage termine le monde.
- Chaque monde des Backrooms terminé donne +1 emplacement de perk. Le titre Évadé des Backrooms demande les 3 mondes.

### MAJ 11 · Prestige

**Mondes**
- 2 mondes de plus. La Singularité devient le **Monde 8** (50 vagues, très dur, butin ×1,6 en plus). Nouveau **Monde 6 « Nébuleuse noire »** avec la difficulté de l'ancien Monde 6, et **Monde 7 « Horizon des événements »**, plus dur (45 vagues, butin ×1,3 en plus). Chacun a son arène et sa musique.
- Chaque monde terminé donne toujours +1 emplacement de perk (jusqu'à +8).
- **Nightmare** se débloque après le Monde 8 et devient plus dur selon le monde : +7 % de PV et de dégâts par monde (×1,49 au Monde 8). Les 8 mondes comptent pour le titre et pour les Backrooms.

**Prestige (50 niveaux)**
- Disponible après le Monde 8, depuis le profil (ou la case Prestige du menu).
- Avant de confirmer, un écran détaille ce qu'on perd, ce qu'on garde, ce qu'on gagne et le risque. Il faut appuyer deux fois.
- **Perdu** : mondes, Nightmare et Backrooms, atelier, niveau joueur (et ce qu'il débloque), familiers non exclusifs et leurs niveaux, almanach et ses bonus, records de score.
- **Gardé** : tout le Garage (équipements, runes, châssis, cosmétiques), la Boutique et les packs (avec leurs familiers), les monnaies, les titres, la base, le passe et les amis.
- **Gagné** : +3 points de talent (+1 bonus tous les 10 prestiges), gains ×(1 + 0,1 × prestige) sur les nuggets, diams et XP, et une compensation de l'almanach dans la boîte de réception (nuggets, diams, parchemins, clés selon le nombre de découvertes).
- **Risque** : les ennemis font +18 % de dégâts par prestige, dans tous les modes (×10 au prestige 50).
- 11 titres de prestige : Renaissant (P1), Revenant (P5), Phénix (P10), Survolté éternel (P15), Transcendant (P20), Avatar de l'orage (P25), Briseur de mondes (P30), Seigneur du voltage (P35), Immortel du prestige (P40), Légende vivante (P45), OMÉGA (P50).
- Le prestige et le niveau s'affichent dans le profil, sur les cartes de joueur, dans la liste d'amis et dans le chat global.

**Arbre de talents**
- 4 branches de 6 talents : Puissance, Blindage, Technologie, Vitesse. Chaque rang s'ouvre en mettant des points dans sa branche (0, 3, 6, 10, 15, 22).
- Talents exclusifs : canon de prestige (+1 canon), seconde vie, essaim de satellites, lames orbitales, orage, têtes chercheuses, canons de flanc…
- 4 ultimes : Annihilateur (tirs explosifs, éclairs en chaîne), Forteresse vivante (bouclier, vol de vie), Singularité portable (onde de choc, Surcharge plus forte), Vitesse lumière.
- **Évolution Oméga** une fois les 4 ultimes appris : halo Oméga autour du tank, +50 % de dégâts et de PV, onde Oméga dévastatrice toutes les 7 s.
- Les 150 points de l'arbre s'atteignent vers le prestige 48. Redistribution possible pour 300 diams.

**Almanach et succès**
- Bonus de collection permanents à 20, 50, 90, 140, 200, 270, 350 et 450 découvertes (dégâts, PV, XP, critique, nuggets et diams), avec une barre de progression en haut de l'almanach.
- 22 succès longs, comptés sur toute la vie du compte (le prestige ne les efface pas) : ennemis, boss, parties, mondes gagnés, Nightmare, vague 150 en Infini, score de 5 millions, prestiges 10/25/50, Évolution Oméga, 100 jours de connexion, 500 h de jeu, Backrooms, skins, châssis. Récompenses en diams, nuggets et clés, à récupérer dans le profil.

### MAJ 10 · Familiers et Boutique

**Familiers**
- Chaque familier a sa propre créature animée avec des yeux qui suivent la cible.
- Nouveau familier exclusif Dragonnet céleste (Pack Céleste) : éclair qui rebondit sur 2 ennemis, 4 au niveau 10.
- Néréide (Pack Océanique), Magmaton (Pack Volcanique), Dragonnet céleste et Supernova (Pack Spacelord) ne s'obtiennent qu'avec leur pack. Ceux qui ont déjà acheté un pack reçoivent son familier automatiquement.
- Fiche du familier refaite : grand aperçu, étiquettes (exclusif, possédé), cases dégâts / cadence / effet / niveau / bonus de set, paliers, et « comment l'avoir ».

**Boutique**
- Sections de couleur : packs (rose), offres du jour (orange), clés (bronze), coffres (violet), nuggets (jaune foncé), diams (bleu foncé).
- Contenu des packs en icônes sur la carte et dans la fenêtre d'achat (set, ULT, skin, familier, châssis, thème, balle, coffres, diams, nuggets). Le Pack Céleste mentionne maintenant son familier.
- Nuggets plus chers : 400 / 1 000 / 2 800 / 6 500, plus 2 nouveaux paliers 50 000 (5 500 diams) et 115 000 (12 000 diams).
- Diams : 2 nouveaux paliers 8 000 diams à 69,99 € et 12 000 diams à 99,99 €. Il faut créer leurs liens Stripe (`d9000`, `d14000` dans `PAY`), sinon ils s'affichent « À venir ».

**Garage**
- Onglet ULT : chaque ULT a une animation d'aperçu en boucle (jauge qui se remplit puis l'ULT en action) : Surcharge, Coulée de lave, Typhon, Souffle céleste.
- La case « Équipement » disparaît des Couleurs : porter 2 pièces d'un set ne change plus l'apparence du tank. Les skins Titan volcanique et Léviathan océanique se choisissent uniquement dans Cosmétiques, et les couleurs restent libres.

**Visuels**
- Dragon céleste et Pack Céleste en vert.
- Menu principal : chaque bouton a son icône dessinée et sa couleur (Atelier orange, Garage cyan, Coffres or, Almanach violet, Classement vert, Boutique rose).

### MAJ 9 · Skins exclusifs et diams

**Rareté Exclusif**
- Nouvelle rareté *Exclusif* (EX, rose), affichée juste sous Légendaire. Ces skins ne tombent jamais des coffres et ne s'achètent pas : il faut débloquer leur pack.
- Léviathan océanique (Pack Océanique, bleu avec des touches de rouge) et Titan volcanique (Pack Volcanique, rouge et noir avec deux grosses mains griffues) arrivent dans la liste des cosmétiques. Le Dragon céleste (Pack Céleste) passe en Exclusif.
- Mêmes noms et mêmes skins partout : Look, ULT, Boutique, avatars, sets et nouveautés. L'ULT Souffle céleste montre le Dragon céleste.

**Garage**
- Les skins légendaires et exclusifs ont maintenant leur aperçu et leur bouton d'essai.
- En ouvrant le Garage ou en changeant d'onglet, toutes les sections du Look sont repliées.

**Diams beaucoup plus rares**
- Diams gagnés en partie ×0,4 (tous les modes), mini-boss 35 % de chance d'1 diam, boss 1, victoire +3, boss secret 10.
- Coffres, roulette de fin de monde, passe gratuit, quêtes quotidiennes, hebdo et multi, niveaux joueur : environ 2 à 3 fois moins de diams.
- Connexion quotidienne ×0,55 seulement, et condensateur de la base divisé par 2 : revenir chaque jour et grinder reste la voie gratuite.
- Échange nuggets → diams : 4 500 nuggets pour 15 diams (avant 2 000).

### MAJ 8 · Cosmétiques, atelier et confort

**Skins**
- **Supernova** devient un **trou noir animé** : disque de matière qui tourne, jets d’énergie, matière aspirée en spirale.
- **Nouveau skin légendaire : Tesla** : bobine en cuivre, sphères reliées par des éclairs, cœur de plasma.
- **Skins animés** : le Scarabée marche et ouvre ses ailes, le Cristal scintille avec des éclats en orbite.
- Étoile passe Rare et Char d’assaut Super rare, pour avoir au moins 2 skins par rareté.

**Couleurs et balles**
- **Couleurs** : 2 nouvelles par rareté (Corail, Sable, Turquoise, Ardoise, Émeraude, Lilas, Bronze, Nacre), animées en Mythique (Aurore boréale, Toxine) et psychédéliques en Légendaire (Psyché, Kaléidoscope).
- **Balles** : 2 nouvelles par rareté (Orange, Menthe, Citron, Corail, Indigo, Framboise, Bulle de savon, Shuriken), animées en Mythique (Comète, Pulsar) et psychédéliques en Légendaire (Psyché, Kaléidoscope).
- Les cosmétiques de basse rareté coûtent un peu plus cher.

**Accessoires**
- Nouveaux : Casquette, Nœud, Monocle, Bonnet à pompon, Haut-de-forme, Lunettes d’aviateur, Chapeau de sorcier, Tricorne, Nuage d’orage, Couronne astrale.
- **Esprit de la tempête** en Ultra Premium Légendaire : coffres UPL, ou 350 000 nuggets.
- **Coiffures à paliers** : Mèches cuivre / chargées / surchargées (épiques), Crête néon et Crête plasma (mythiques, aura animée), Crinière de braise (légendaire, flammes d’énergie), Crinière prismatique (UPL, particules blanches et éclairs, coffres UPL ou 400 000 nuggets).
- Le chapeau de paille passe Mythique.
- Les **accessoires suivent la direction du canon**.

**Packs et skins de légende**
- **Pack Céleste** : nouveau skin exclusif **Dragon céleste**, un dragon nacré qui s’enroule autour de ton tank.
- **Pack Spacelord** (nouveau) : skin Supernova, familier Supernova, balle Kaléidoscope et couleur Psyché.
- Skins de set retravaillés : **Abysses** devient un léviathan des profondeurs, **Magma** un titan de roche et de lave.
- Les packs donnent 500 diams au lieu de 600.

**Perks et transformations**
- **Nouvelle rareté Super rare** (bleue, entre Rare et Épique) : Gros calibre, Perforant, Ricochet, Coup critique, Siphon, Toxine, Incendiaire, Exécuteur, Adrénaline, Shrapnel, Dash tranchant, Dash de feu, Dash toxique, Souffle glacé.
- **Transformations** : débloquées avec le Monde 6, avec un compteur 1/6 par élément en partie et sur les cartes.
- Niveaux en partie 12 % plus rapides.

**Atelier, garage et progression**
- **Atelier premium** : nouveau look par catégories, rangs Fer → Bronze → Argent → Or → Émeraude → Platine → Diamant → Master, plus de niveaux (dégâts, PV, soin et nuggets jusqu’au niveau 50).
- **Atelier rééquilibré** : bonus par niveau revus à la baisse (dégâts +2 %, Bonne étoile beaucoup moins forte, portée, Surcharge, nuggets…).
- **Garage plus lisible** : la fiche d’un objet prend toute la largeur, bonus en vert, malus en rouge, encadré du set (pièces actives cochées, ce que tu gagnes en l’équipant).
- **Bonus de set perdus** : la fiche d’un objet affiche en rouge les bonus de set que tu perds en l’équipant ou en le retirant.
- **Paliers des emplacements** : Bronze → Argent → Or → Émeraude → Platine → Diamant → Master (l’éveil fait passer au palier suivant).
- **Plus de puissance avec la rareté** : objets de haute rareté, paliers d’emplacement, runes et étoiles de châssis rapportent un peu plus.
- **Châssis** : +1 niveau tout de suite avec des nuggets.
- **Ma base** : les ouvriers sont expliqués dans un panneau dédié, jusqu’à 4 ouvriers (2e : 300 diams, 3e : 900, 4e : 2 500). Chaque ouvrier fait un chantier à la fois.

**Économie**
- **Puissance sur l’écran d’accueil**, avec le détail de ce qui donne quoi. Le familier et le châssis comptent dans la puissance.
- Les familiers se débloquent plus tard (niveau joueur 15 à 100).
- Moins de diams gagnés en jouant (boss, mondes, quêtes, connexion, passe, base) et un peu moins de diams par euro dans la boutique (ex. 5 500 au lieu de 6 500 pour l’offre à 49,99 €).
- Écran d’accueil : nuggets, diams, **ampoules** et **clés**. Les soldes se mettent à jour partout dès que tu achètes ou améliores.

**Équilibrage**
- 1 ⚡ toutes les **6 minutes**.
- Moins de butin en partie : coffres des mini-boss 2 fois plus rares, runes et objets des boss pas garantis, salles d’élite des Backrooms moins généreuses.
- **Atelier** : deux fois plus de niveaux (dégâts, PV, soin et nuggets jusqu’au niveau 100), chaque niveau un peu plus petit, et des prix bien plus élevés.

**Confort de jeu**
- **Reprendre sa partie** : si tu quittes le jeu en pleine partie (monde, Infini, Backrooms), un écran te propose de reprendre là où tu étais, avec tes perks et ton butin. Jamais en multi.
- **Nouveautés débloquées** : au retour au menu après un monde, la liste de ce que tu viens de débloquer s’affiche.
- **Zoom en partie** : de 50 % (tu vois plus loin) à 150 %, dans les Réglages ou le menu Pause.
- **Taille d’interface très petite**, pratique en paysage.
- **Son** : le jeu se mélange avec ta musique (Spotify…) au lieu de la couper, il repart normalement après un vocal ou un appel, et le clic des boutons fait partie des Bruitages.

**Interface**
- **3 sets d’équipement** sauvegardés dans le Garage (SET 1 / 2 / 3, avec leur puissance) : on passe de l’un à l’autre en un geste.
- **Boîte de réception refaite** : onglets À récupérer / Historique, la raison du cadeau mise en avant, et la liste exacte de ce que tu reçois (ou as reçu).
- **Amis en ligne** : le point vert et « vu il y a … » reviennent dans les amis, les profils et le multi.
- **Panel admin plus clair** : statut en ligne et niveau dans la liste, nombre de joueurs en ligne, fiche joueur avec chiffres clés (niveau, puissance, record, mondes, diams, nuggets, dépenses, amis) et sections repliables.
- **Look premium** : écran Multijoueur avec les modes en grille et le défi de la semaine en bandeau, ATH en verre (vie, XP, vague, boutons), menus plus soignés.
- **Paysage** : dans le Garage (Équipement et Runes), deux volets qui défilent chacun de leur côté ; ULT en cartes compactes ; nom de l’arme sous le panneau de vie ; barre d’XP jusqu’au bord ; rien sous l’encoche.
- **Almanach** : filtre des perks par monde (Monde 1 à 6).
- **Statistiques du profil** : nouvelle ligne Perks découverts ; touche une statistique pour voir le détail (Backrooms : meilleur étage, salles vidées, record de salles en une partie, boss battus…). Compteur d’étages des Backrooms réparé (il affichait 10/3).
- **Panel admin** : dernière activité réelle des joueurs et leur niveau joueur.

### MAJ 7 · Énergie

- Chaque partie dans un **monde** ou en **Infini** coûte **5 ⚡**.
- **50 ⚡** au niveau 1, puis **+1 ⚡ max tous les 5 niveaux** joueur.
- **1 ⚡ revient toutes les 6 minutes** (3 avant la MAJ 8), même jeu fermé.
- Les **Backrooms**, les parties rapides, le multi et les défis restent **gratuits**.
- **Terminer les Backrooms** rapporte **+5 ⚡** (même au-delà du max).
- Plus d’énergie ? Recharge à fond pour **30 diams**.
- **Jauge d’énergie** en haut du menu, avec le temps avant la prochaine ⚡ : collée en haut à droite en portrait, sous les réglages et le pseudo en paysage. Touche-la pour voir le détail et recharger.

**Interface**

- **Nouvelles icônes** partout (menu, Backrooms, Base, quêtes, cadeaux, boutique…) dans le même style que les statistiques du profil, à la place des emojis.
- **Équipement** : quand tu touches un objet, ses stats s’affichent dessous (ATQ, PV, VIT, CRIT) avec ce que tu gagnes ou perds en l’équipant.
- **Animation Pulsation** bien visible : la photo de profil bat comme un cœur et envoie des ondes. Chaque animation de profil a maintenant sa description.

### MAJ 6 · Ma base et morts-vivants

- **Nouveau mode : Ma base** (bouton sous les Backrooms). Une base façon Clash of Clans qui produit des **nuggets** et des **diams** en temps réel, même jeu fermé :
  - **QG** : limite le niveau des autres bâtiments et débloque les nouveaux.
  - **Extracteur de nuggets** et **Condensateur de diams** (QG 2) : la production.
  - **Batterie** : combien d’heures de production tu peux stocker.
  - **Laboratoire** (QG 3) : +6 % de production par niveau.
  - Améliorations en temps réel, à finir tout de suite avec des diams ; un 2e ouvrier pour 300 diams.
- **Infestation** (épique, 3 niveaux) : 1, 2 puis 3 sbires sortent des ennemis infestés (+5 % par niveau), et elle peut sauter sur 2 ennemis proches. Suprême **Fléau des morts** : 5 sbires +40 %.
- **Nécromancien** (légendaire) : sbires ×2, et 15 % des ennemis éliminés reviennent dans ton camp sous leur vraie forme (50 % de leur vie, 75 % de leurs dégâts).
- **Familiers** bien plus chers, payés aussi en ampoules 💡.
- **Almanach et Comment jouer** mis à jour (Backrooms, transformations, base, perks du Monde 6).

### MAJ 5 · Perks et transformations

- **Balle sous bulle** (mythique, Monde 5+) : une bulle peut entourer ta balle et arrêter un tir ennemi, puis ta balle continue. 4 niveaux, puis la Méga-bulle suprême.
- **Visée** (épique) : pointillés devant le canon et une croix à la portée max. 3 niveaux.
- **Nouvel élément Incantation** (dès que le Monde 6 est débloqué) : Sbires des ténèbres, Dash des ombres, Portail d’ombre, Éclair de sbires, Infestation, Pacte explosif, Moisson d’âmes, Nécromancien et Armée des morts (suprême).
- **Transformations** : 6 perks du même élément dans une partie et le tank se transforme jusqu’à la fin de la partie. Zeus (foudre), Lucifer (feu), Roi des rats (poison), Thrym (glace), Shinigami (incantation). Nouveau look, stats boostées, et la Surcharge lance une attaque spéciale. Rien n’est gardé après la partie, seule la fiche se débloque dans l’Almanach.
- **Nouveaux perks** poison et glace : Fléau toxique, Miasme, Blizzard.
- **Son de clic** réparé sur tous les boutons.
- **Écran Nouveautés** au lancement.

### MAJ 4 · Progression

- **Châssis** à niveaux et étoiles : ils gagnent de l’XP en partie et évoluent avec des ampoules 💡 (rareté, stats et look qui changent). Châssis plus chers, payés en diams et en ampoules.
- **Boutique** : cadeau et offres du jour, clés 🔑 pour ouvrir les coffres, tirage ×10 avec un coffre offert.
- **Familiers** plus chers, débloqués par niveau joueur, et 3 nouveaux : Néréide, Magmaton et Supernova.
- **Drones** : le drone d’escorte dès le Monde 1, puis un nouveau à chaque monde, dont le drone électro.

### MAJ 3 · Backrooms et contenu

- **Ambiances** : écho aux Bureaux, gouttes et résonance aux Poolrooms, menus décorés selon l’étage.
- **Chute à travers le sol** : le tank glitche dans le sol puis tombe du plafond de l’étage suivant.
- **Nouveaux ennemis** : mort-vivant (Monde 4), fantôme (Monde 5), incantateur (Monde 6), aussi dans les Backrooms.
- **Murs** dans les mondes, différents pour chaque monde ; les ennemis glissent dessus et les boss les cassent.
- **Almanach** : créatures des Backrooms, et les ennemis pas encore rencontrés restent cachés.
- **100 parties dans les Backrooms** : titre légendaire Captain Clark et thème Backrooms.
- **Ampoules 💡** : la monnaie des Backrooms.

### MAJ 2 · Profil et interface

- **Titres** avec raretés, condition de déblocage et progression affichées.
- **Auras animées** pour les raretés hautes, et aperçu de tous les cosmétiques et titres, même verrouillés.
- **Profil** : niveau joueur en haut, statistiques redessinées.
- **Écran de fin en étapes** : roue, puis butin, puis total.
- **Atelier** avec icônes, améliorations les plus fortes plus chères, dégâts des drones et familiers.
- **Équipement** : niveaux d’emplacement plus lisibles, vente contre des nuggets, notifications « NEW ».
- **Affichage** : taille réglable, mode paysage amélioré, textes lisibles dans le thème Croquis, petits sons de clic.

### MAJ 1 · Équilibrage et gameplay

- **XP** réduite, ennemis 2× plus résistants, boss et mini-boss beaucoup plus solides.
- **Perks** : raretés revues (55 % de communes), perks suprêmes à partir du Monde 4, textes plus clairs.
- **Dash** plus long à recharger ; le bump devient une perk, et nouvelles perks de dash (feu, toxique, tranchant, miroir).
- **Satellites** : ils ne bloquent plus les tirs, sauf les nouveaux satellites de défense (mythique).
- **Armes** moins fortes, canon Tesla et lance-roquettes revus, tête chercheuse en option.
- **Boss** : charge mieux annoncée avec des flèches, et ennemis qui glissent le long des murs.
