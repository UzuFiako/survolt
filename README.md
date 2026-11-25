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

### MAJ 65 · achats inutiles bloqués (v178)

- **Recharge d'énergie** : le bouton est grisé (« ÉNERGIE DÉJÀ PLEINE ») et le clic est refusé quand l'énergie est au max. `fixNrgRefund()` (5 s après le lancement) repère dans le relevé les −30 diams « Recharge » sans gain d'énergie juste après, les rembourse et les marque (`x[5] = 'rf'`) pour ne pas rembourser deux fois.
- **Ma base** : « FINIR » sur un chantier ou une expédition déjà terminé ne coûte plus rien (avant, ça coûtait toujours au moins 1 ou 2 diams).
- Vérifié ailleurs : l'atelier au niveau max, la boutique (nuggets, clés), le passe et l'offre de bienvenue étaient déjà protégés.

### MAJ 64 · vidéos récompensées, bientôt (v177)

- **Énergie** : `NRG_MS` = 10 min (au lieu de 6). Textes mis à jour, avec le coût des Backrooms. Dans la fenêtre d'énergie, le bouton « Backrooms » devient « Partie rapide (gratuite) ».
- **Vidéos récompensées** : module `ADS` (`on: false` pour l'instant, donc tous les boutons sont grisés « À VENIR »). `adBtn(k, label, onReward)` crée le bouton ; `showAd` passe par l'API Google H5 Games Ads (`adBreak` de type `reward`) une fois `ADS.on = true` et `ADS.client = 'ca-pub-…'`. Limites par jour dans `ADLIM`, comptées dans `meta.ads`. Les boutons :
  - fenêtre d'énergie : +10 ⚡ (5 par jour) ;
  - Boutique, section « Vidéos récompensées » : +100 nuggets (5 par jour) et +2 diams (3 par jour) ;
  - revivre une fois par partie en solo : `revOk` / `revAsk` à la mort, 50 % des PV, ennemis repoussés, tirs effacés. Tant que les vidéos sont coupées, un bouton grisé s'affiche sur l'écran de défaite.
- **Mondes 1 à 8** : le multiplicateur de la v174 passe de 0,9 à 0,945 (difficulté +5 %).

### MAJ 63 · 5 runes (v175)

- `RUNEN = 5` emplacements (`RUNEI`). `runeOpen(i)` : le 0 est toujours ouvert, puis Monde 2, 4, 6 terminés, et le 5e quand le Monde 8 est terminé (pour le mode Nightmare, v176). `meta.rsl` a 5 cases (les anciennes sauvegardes sont complétées au chargement).
- Le compteur « x/y équipées » et le détail de puissance ne comptent plus les runes rangées dans un emplacement fermé (après un prestige, on voyait « 2/0 »).

### MAJ 62 · mondes plus faciles (v174)

- `PSPLIT` : nouveau max = min(15, arrondi supérieur de 1,5 × l'ancien) au lieu de ×2 / 20 ; k = 1,2 × ancien / nouveau, donc le max reste +20 %.
- Dans `mkEnemy` et `mkBoss` : PV et dégâts × 0,9 pour les mondes 1 à 8 (pas Nightmare, Oméga, Backrooms, parties rapides ni Infini), en multi aussi.

### MAJ 61 · option des canons (v173)

- `meta.opt.stag` (`true` par défaut, sauvegardé) : option « Canons en alternance » dans les Réglages. Sur NON, la boucle de tir lance tous les canons en même temps, comme avant la v164.

### MAJ 60 · tous les perks (v172)

- **Niveaux** : `PSPLIT` (dmg, rate, hp, spd, mag, vel, regen, big, crit, critd, turbo, xp, range, plate, dashl, oc) : `max` × 2 (20 au plus). `u.f` est enveloppé : on applique l'effet d'origine sur une copie, puis seulement une fraction k = 1,2 × ancien max / nouveau max (puissance k pour les stats multiplicatives listées dans `PSMUL`, × k pour les additives). Au niveau max, le bonus total est 20 % plus fort qu'avant. Le texte du perk est recalculé (« +12 % » → « +7 % »). `u._omax` garde l'ancien max : `supOk` et les textes « débloque le SUPRÊME » l'utilisent, donc les suprêmes arrivent au même niveau qu'avant.
- **Icônes** : `PIC2` donne à chaque perk un symbole principal + une pastille (`icoMix`), avec de nouveaux symboles `NEWG` (épée, flèche haut, flèche, drone). Plus aucune icône en double (vérifié sur les 122 perks). Le badge d'élément (v171) reste par-dessus.

### MAJ 59 · perks plus clairs (v171)

- **Drones** : `max` 3 → 6 (escorte, feu, glace, toxique, électro), 2 → 4 (bombardier). `drnPct` +7 % par niveau (niv. 6 = ×1,35 ; l'ancien niv. 3 faisait ×1,2), `drnRate` +1 % de cadence par niveau.
- **Après ce choix** : `perkAfterX` calcule des lignes avant → après pour les perks dont les stats ne sont pas dans `P.s` : Cryo (ralentissement 14 + 7 × niveau %), drones (dégâts par tir comme en jeu : `dmg / wDK × drnPct × 0,8`, tirs/s, niveau).
- **Icônes des dash** : `DASHSUB` + `dashIco()` : les flèches du dash plus une pastille avec l'effet (dTox tête de mort, dFire flamme, cryodash flocon, dCut lame, dBump explosion, dMirror bouclier, dSumT aura, dSumA portail).
- **Badges d'élément** : `perkIcon` ajoute `elemBadge(id)` : une pastille ronde de la couleur de la transformation (`TRANS[...].ids`), avec son icône (`TRIC`). Visible partout où l'icône du perk apparaît (cartes, almanach, liste des perks).

### MAJ 58 · énergie des Backrooms (v170)

- `nrgPay(cost, why)` accepte un coût (par défaut `NRG_COST` = 5). `startDg` paie `DG_NRG[dgSel]` : 10 (Backrooms), 15 (Bureaux vides), 20 (Poolrooms). Le bouton ENTRER affiche le coût. La fenêtre « pas assez d'énergie » calcule l'attente avec le bon coût (`nrgAsk`). Abandonner une partie des Backrooms indique les énergies non rendues (`nrgLast`). `resumeRun` ne passe pas par `startDg`, donc une reprise est gratuite.

### MAJ 57 · Backrooms (v169)

- `drawDgMap` place la carte avec `dgMapXY` : en paysage à gauche du panneau `.info` (en haut), en portrait sous ce panneau, à droite. En paysage, le nom de l'étage est aligné à droite. `hudLay` réserve sa place (largeur des bonus, barre du boss).
- `worldPerkOk` : la perk `map` ne sort pas quand `G.dg` est actif.
- Reprise de partie : déjà possible dans les Backrooms (`runSnap` / `resumeRun`, reprise au début de l'étage en cours) ; vérifié.

### MAJ 56 · atelier revu (v168)

- **Relance** : `max: 20`, prix « normal » (base 70, plus de `mul`). `rerollsOf(l) = 1 + floor(l / 5)` donne les relances par partie : 1 de base, puis 2 au niv. 5, 3 au 10, 4 au 15, 5 au 20. Utilisé au début de partie (`rerolls`) et dans le texte de l'effet, qui indique le niveau de la prochaine relance.
- **Prix** : Ressorts de dash, Supercondensateur et Servo-tourelles n'ont plus de `mul`. Avec ×1,22 par niveau après le 10e, le dernier niveau coûtait jusqu'à 6 milliards ; ils suivent maintenant la même courbe que les autres (≈ 0,5 à 1,5 M pour le dernier niveau).
- **Équilibrage** : `SHK.spd` 0,0056 → 0,0045 (vitesse max +31,5 % au lieu de +39 %), `SHK.rng` 0,0175 → 0,0125 (portée max +100 % au lieu de +140 %). Le reste est inchangé.

### MAJ 55 · Bonne étoile (v167)

- `SHK.luck` 0,105 → 0,04 par niveau d'atelier. Dans `rollCards`, les poids deviennent : Légendaire × (1 + 1 % par niveau), Mythique + 0,8 %, Épique + 0,48 %, Super rare + 0,4 %, Rare + 0,32 %. Au niveau 60 : Légendaires +60 % (avant +158 %). L'effet affiché garde une décimale.

### MAJ 54 · flèches plus visibles (v166)

- Flèches hors écran (`draw`, bloc « flèches vers le boss ») : le boss et les mini-boss passent en flèche « bonus » (cercle qui pulse, ×1,25 pour le boss et la roue), avec leur nom traduit (👑 pour le boss). Pour le boss, la roue et les bonus, le nom est écrit SOUS la flèche (au-dessus si on est en bas de l'écran), avec un contour sombre, et clignote entre sa couleur et le blanc (4 Hz).
- Les flèches ne remontent plus sous le HUD du haut : `hudLay` calcule `HUDB` (bas des panneaux PV / temps), qui sert de limite haute.

### MAJ 53 · mini-boss costauds (v165)

- `mkBoss` : base des mini-boss 300 → 560 PV (sans réduction) ; les boss ne changent pas. Mesuré au Monde 2 : mini-boss vague 5 ≈ 5 000 PV, boss vague 10 ≈ 12 500, mini-boss vague 15 ≈ 16 000, boss vague 20 ≈ 31 500.
- PV chiffrés au-dessus des ennemis : élites, mini-boss, et tout ennemi dont les PV max dépassent 1 000 × n° du monde.

### MAJ 52 · canons en alternance (v164)

- **Tirs en alternance** : dans la boucle de tir, quand `gunLayout(s)` a plusieurs canons (sauf Fracas/scatter, Tesla, laser, épée), chaque « tir » ne lance qu'un canon (`lay[P.barI % n]`) et le délai devient `1 / (cadence × n)`. Même DPS, mais les balles partent les unes après les autres. Les effets par salve (arrière, côtés, foudre, Oméga) ne partent qu'avec le 1er canon. L'Écho rejoue chaque canon avec le même décalage (`P.echQ`).
- **Pastel / Croquis** : textes accentués (Partie rapide, niveau du profil, énergie, offre, vague, combo) en orange foncé `#b4580c`.
- **Nettoyage (sans rien changer au jeu)** : 10 fonctions et constantes jamais appelées supprimées (`renderDecoShop`, `statPanelOld`, `gemIcon`, `pfxPunch`, `ghWave`, `bSpikes`, `swDir`, `openGChat`, `LB_MODES`, `ALMMINI_N`). 264 traductions anglaises dont le texte n'existe plus. 68 règles CSS dont les classes ne sont plus utilisées. Environ 34 Ko en moins.

### MAJ 51 · correctifs (v163)

- **JOUER en portrait** : `.playw` n'est plus déplacé ; `playwPlace()` met seulement la classe `pfix` (sticky en bas) en portrait. Il reste collé en bas tant qu'on ne l'a pas atteint, puis il défile avec la page, comme en paysage.
- **Forge en paysage** : le panneau du garage (`.land #garage .panel`) se faisait écraser à la hauteur de l'écran par la colonne flex (avec `overflow: clip`), donc la page ne défilait plus. Ajout de `flex: none`.
- **Pastel / Croquis** : icônes `.eico svg` plus foncées et saturées (filtre) ; bulles et cartes (notes de mise à jour, boîte de réception, relevé, maîtrise…) sur un fond violet sombre translucide avec un contour ; panneau Pastel un peu plus foncé ; voile plus sombre derrière les fenêtres ; titres orange plus foncés.

### MAJ 50 · confort (v162)

- **Maîtrises** : `mstAdd` ne donne plus directement nuggets et diams. Chaque palier va dans `meta.mstG` (`{k, id, r, sh, jet, at}`). `mstCards` affiche une carte par palier dans l'onglet CADEAUX ; RÉCUPÉRER appelle `mstClaim` (via `grantRw`, donc ça passe dans le relevé). « Tout récupérer » les prend aussi, et `inboxNew` les compte pour la pastille de la cloche.
- **JOUER en portrait** : `playwPlace()` (appelée par `measureMenu`) déplace `.playw` à la fin de `#menu` en portrait, avec la classe `pfix` (sticky en bas, fond en dégradé), et le remet à sa place en paysage.
- **Thèmes clairs** : gemmes d'XP plus grandes avec contour `#1d1838` ; tirs « needle » (fusil à rail) avec un trait sombre dessous et la couleur du tir dessus ; textes de `.lstat.v2` foncés sur Pastel et Croquis.
- **Nébuleuse noire** : `col: 'plasma'`, fond `#050207`, sol bordeaux ; décor en nuages bordeaux et violets, étoiles rose pâle et lilas ; couleurs claires adaptées (Pastel, Croquis).
- **Boss** : PV × 0,88 (boss) et × 0,8925 (mini-boss), soit +10 % et +5 % par rapport à la v159.

### MAJ 49 · succès (v160)

- `ACHR` (récompense par palier 1 → 7) : 300/2, 800/5, 2 000/13, 5 000/32 + 1 clé, 15 000/75 + 3, 45 000/180 + 8, 120 000/420 + 15 (v161 : plus de diams) (nuggets / diams + clés).
- `achCheck` appelle `achPop(a)` au lieu d'un toast. C'est une carte en haut de l'écran, couleur de la rareté du palier, avec icône animée, reflet, récompense, son et vibration. Elles passent une par une (3 max, puis une carte « +N autres succès »). Jamais pendant une partie : elles attendent la fin. Un appui ouvre le profil sur « Succès », filtre « À récupérer ».
- `achCheck` tourne aussi toutes les 6 s dans le menu et n'enregistre la sauvegarde que s'il y a du nouveau.

### MAJ 48 · boss plus lisibles (v158)

- `mkBoss` : PV × 0,8 pour les boss, × 0,85 pour les mini-boss (v159 ; en v158 c'était 0,72 et 0,8, trop fort).
- Barre du boss : `#bossH` affiche `PV / max` (via `fmtK`) dans la barre, qui fait maintenant 18 px de haut.
- Les PV chiffrés au-dessus des ennemis ne s'affichent que pour les élites et les mini-boss (avant : tout ennemi à 40 PV ou plus). Moins de texte dessiné à chaque image.
- Mini-carte (perk Carte) : en paysage, elle est collée en haut, à gauche du panneau `.info`. `hudLay` place la barre du boss entre le panneau des stats et la carte, sous la ligne des bonus, et réduit la largeur des bonus quand la carte est là.

### MAJ 47 · boss au hasard (v157)

- **Nouveau boss** : `L’HYDRE ROYALE` (`BOSS[13]`, ajouté à la fin pour ne pas décaler les index). Dessin `BLOOK` à cinq têtes, celle du milieu avec une couronne. Fiche dans l'almanach.
- **Tirage des boss** : `BHOME` donne le monde d'arrivée de chaque boss : Transfo, Dynamo et Hydre royale au Monde 1, Arc-Roi au 2, Alternateur au 3, Condensateur au 5, Singularité au 6. `wBossPool(W)` = tous les boss arrivés au plus tard dans ce monde. `pickBossW` tire au hasard dans ce groupe, jamais deux fois le même d'affilée. Le boss final est le plus récent du groupe (au hasard parmi les 3 au Monde 1). Infini, parties rapides et Nightmare gardent leurs listes.
- La carte du monde affiche le nombre de boss du groupe.

### MAJ 46 · épées multiples et parade (v154)

- **v156 · Stats en direct, calculs justes** : `lstatTick` utilise les bonus actifs. Cadence × Surcharge (2,2), Furie (1,6) et Adrénaline ; dégâts × Furie (1,5), Dernier souffle, Berserker, Prisme et dims légendaires ; vitesse × Surcharge et Hâte. Le DPS max se calcule sur une cible : dégâts × crit moyen × cadence × coups par salve (somme des `dm` de `gunLayout`, plombs du Fracas, épées + coup fantôme du +1 canon, Écho). Les valeurs boostées passent en jaune avec ▲ et les bonus actifs s'affichent en pastilles. Le DPS mesuré est maintenant compté après le ×1,5 de Furie. Les icônes sont des SVG (`LSI`, plus de diamant pour les dégâts). `hudLay()` : en paysage, l'icône de l'arme et les bonus actifs vont à droite des PV et les stats juste dessous ; en portrait, les bonus sont sous les PV et les stats en dessous.
- **v155 · Stats en direct** : `#lstat` passe dans la colonne `.hudl`, sous l'arme et les bonus (TIR AUTO…), donc il ne les chevauche plus. Police plus grosse (13,5 px, 12,5 px en paysage) et valeurs en blanc.

- **Plusieurs épées** : `swCount()` = `s.multi` (4 max), donc Hydre et les châssis à plusieurs tirs ajoutent des épées. Après le coup principal, `swordSwing(i)` est mis en file dans `G.swJ` toutes les 0,07 s. Chaque épée en plus a son état `P.swX[i] {T, A}` et se dessine avec `swExtra` (en miroir de la lame principale ; à partir de la 3ᵉ, un peu décalée). En duo, l'invité les reçoit par `vf.sn`.
- **Parade** : `swBlockZone()` / `swBlocks()` dans la boucle des tirs ennemis. Les tirs dans le cône d'un coup en cours, dans la Toupie ou autour du boomerang sont détruits. Avec Balle sous bulle (`s.bub`), `swReflect()` les renvoie vers l'ennemi le plus proche (60 % des dégâts).
- **Gros calibre** : `swBig()` = 1 + 0,35 × (bsize/5,5 − 1), 1,7 max. Il multiplie la portée (`swReach`) et l'épaisseur de la lame.
- **Coups fantômes** : 75 % sur les côtés et derrière. +1 canon : 50 % → 85 % selon le niveau.
- **Critiques** : les nombres de dégâts critiques ont `crit: 1` et se dessinent en rouge, avec un clignotement rouge / jaune (14 Hz), une lueur et une petite secousse au début.
- **Relevé** : `ldgChart()` dessine sur un canvas la courbe du solde (bézier lissée, dégradé et lueur de la couleur de la monnaie, point final qui pulse, apparition animée). Les entrées et sorties sont en barres par tranche. On choisit 24 h, 7 j ou 30 j, et un doigt posé affiche la valeur (`offsetX`, donc juste même quand l'écran est tourné).
- **Garage** : la règle `.eqcol .it.tiered` ne s'applique plus qu'aux emplacements vides, donc un emplacement équipé garde la couleur de rareté de l'objet. En paysage, le panneau fait toute la hauteur (`min-height: 100dvh`) et les colonnes vont jusqu'en bas.

### MAJ 45 · perks de l'épée (v153)

- **Ricochet** (`s.bounce`) : `swordSwing` garde la liste des ennemis touchés. Pour les 3 premiers, une chaîne part dans `G.swJ` : toutes les 0,07 s, `updSwJ` frappe l'ennemi le plus proche pas encore touché (230 px max, ligne de vue `dgLos` dans les Backrooms). 60 % des dégâts, ×0,85 à chaque saut, `s.bounce` sauts (8 max). Visuel : une traînée et une entaille en croissant (`drawSwFx`), pas d'éclair.
- **+1 canon** (`s.gun`) : un coup fantôme (`swordGhost`) 0,1 s après le coup, à 35 % des dégâts, +10 % par niveau.
- **Canons latéraux / arrière** : dans `volley`, sans `lay`, l'épée donne un coup fantôme dans cette direction à 50 %.
- **Perforant** : `swReach` × (1 + 0,05 × niveau), 6 niveaux max.
- **Multi** : les arcs et les sauts passent par `swFxPush` → `MPFX.sx` → `vf.sx`, et sont redessinés chez le partenaire.

### MAJ 44 · épée, familier et HUD (v152)

- **Compagnons** : le familier, les drones (`updComps`), les satellites (`satTick`) et le calcul de puissance n'utilisent plus le bonus de dégâts propre à l'arme (`s.dmg / s.wDK`). Avec l'épée (×3,6), ils faisaient 3,6 fois trop mal. Le familier et les drones font aussi 20 % de moins (`× 0.8`). Le popup des drones affiche le même calcul.
- **Épée** :
  - `swSee` vérifie la ligne de vue `dgLos` dans les Backrooms, pour le coup, la Percée et la Toupie ;
  - `swReach` suit la portée presque linéairement (`66 × (1 + 0,85 × (range/1,2 − 1))`) au lieu de la racine carrée ;
  - **boomerang** : avec le Canon suprême au niveau max (`s.railBoom`), `swThrow` lance la lame jusqu'à 3,2 × la portée (elle revient plus tôt si elle touche un mur ou le bord). Elle touche chaque ennemi une fois à l'aller et une fois au retour, à ×1,1 dégâts. Tant qu'elle vole, pas d'autre coup. Elle est envoyée au partenaire en multi (`vf.bm`).
- **HUD** : `#hud .vit`, `#hud .info` et `.lstat` n'utilisent plus `backdrop-filter`, qui se mettait à jour en saccades sur téléphone au-dessus du canvas. L'effet verre est fait avec un dégradé transparent, un liseré lumineux et une ombre de texte.

### MAJ 43 · perk Carte (v151)

- **Mini-carte** : elle était dessinée en bas au centre, sous les sticks et les boutons du téléphone, et trop transparente. Elle est maintenant en haut : au centre en paysage, sous le panneau `#hud .info` en portrait (position mesurée en `offsetTop`/`offsetLeft` jusqu'à `#stage`). Le fond est plus opaque, le contour plus net, le bord de l'arène est tracé et les points sont plus gros. Elle n'apparaît toujours pas dans les Backrooms, qui ont leur propre plan.

### MAJ 42 · icônes maison (v150)

- **Icônes** : 19 nouvelles icônes `EICO` (ticket, arbre, diable, loupe, balai, crayon, panier, sauvegarde, cœur brisé, comète, carte, maison, boussole, rafraîchir, chapeau, visage, monstre, goutte, lecture) et environ 70 emojis de plus branchés dans `EMOJI`. Le remplacement automatique `emojiFix` les transforme partout dans l'interface.
  - Le compteur d'éliminations du HUD (zone `data-raw`) utilise l'icône tête de mort.
  - Le butin de la pause passe aussi par `emojiFix`.
  - Sur le canvas, `cIco(g, clé, x, y, taille, couleur)` dessine la même icône à partir d'un SVG en cache. Ça couvre : la carte des Backrooms, le poison des ennemis, le nom du rival, « signal perdu », les fantômes, la main du tutoriel, le village (cadenas, familiers, parchemins, ampoules).
  - Les symboles typographiques (✦ ✓ ★ ✕ ➜) restent : ils font partie du style.
- **Forge** : le marteau pivote autour de (560, 110) avec un angle de 0,03 à 0,58 rad. Il se lève vers le haut et frappe vers le bas (avant, il montait depuis le bas).

### MAJ 41 · épée et titre (v149)

- **Son de l'épée** : `sfx.swish` lançait le bruit blanc à un décalage aléatoire jusqu'à 1 s, dans un tampon `NB` de 0,5 s : une fois sur deux, le son tombait en dehors et on n'entendait rien. Le décalage est maintenant de 0 à 0,15 s, avec une petite note grave en plus pour le « swoosh ». L'anti-répétition passe de 60 à 40 ms.
- **Frappes en retard** : la file `P.omQ` (écho Oméga) ne relance plus de coup d'épée quand on ne tire plus.
- **Titre en portrait** : il est placé 22 px sous la barre d'icônes, calculé depuis sa vraie position (on le met à `top:0`, on mesure, puis on corrige), quel que soit le parent positionné.

### MAJ 40 · épée (v148)

- **Épée** : elle ne frappe plus en continu. `firing` vaut vrai seulement si le stick de tir est touché (`aimJ.on`), si la manette tire (`PAD.fire`), si le clic est maintenu (`mouse.down`), ou si l'invité appuie sur tirer quand l'hôte pilote en 1 pour 2 (`duoGi.f`). Le bonus TIR AUTO ne déclenche plus l'épée.

### MAJ 39 · drones et multi (v147)

- **Drones** (`drnRate`, `drnPct`) : par niveau, +10 % de dégâts (multiplicatif sur `pct`) et seulement +0,5 % de cadence. L'atelier `m_drn` (« Drones renforcés ») donne +0,5 % de dégâts et +0,1 % de cadence par niveau (avant : +0,6 % de cadence par niveau, et −10 % d'intervalle par niveau de perk).
- **Visuel partagé en multi** : `mpVf()` est ajouté au paquet d'état de l'hôte (`s.vf`) et au paquet de l'invité en co-op (`g.vf`). Il contient :
  - le nombre de satellites, satellites élémentaires, satellites de défense et lames, avec leurs angles (le receveur les fait tourner à la même vitesse) ;
  - les compagnons (familier et drones) et leurs tirs ;
  - les nouveaux effets `G.fx2` (laser, mines, trous noirs, comètes, météores…), rejoués en mode « affichage seul » (`f.rm`, aucun dégât) ;
  - les éclairs (`bolt` enregistré dans `MPFX.bo`) ;
  - en 1 pour 2, l'état de l'épée.
- **Tirs** (`mpBulRows`) : chaque tir envoie sa taille, son type (aiguille, roquette, disque, flamme) et sa couleur (une couleur principale `hc` par paquet). `drawPeerBul` les dessine comme chez le tireur.
- En 1 pour 2, l'invité n'a plus de familier ni de drones à lui : ce sont ceux du tank commun, gérés chez l'hôte.

### MAJ 38 · succès et nouveaux mini-boss (v146)

- **Succès** : 139 succès générés en séries (`achS`, `achA`), répartis en 5 catégories (`ACHC` : combat, mondes, progression, collection, multi). La difficulté `t` va de 1 à 7 et fixe la récompense (`ACHR`) : 200 nuggets pour les plus faciles, 60 000 nuggets + 180 diams + 10 clés pour les ultimes.
  - Les anciens identifiants sont gardés (k1, k2, b1, …), donc ce qui était déjà récupéré reste récupéré.
  - Le profil a des filtres (catégories, à récupérer, obtenus) et un bouton « TOUT RÉCUPÉRER ». Un badge de rareté s'affiche sur chaque succès.
  - Deux succès secrets (Seigneurs) restent en « ??? ».
  - Ils sont aussi dans l'almanach, onglet `succ`, groupés par catégorie.
- **Compteurs** : le chargement ne relisait que `tot.k/r/b` ; maintenant `w`, `nmw`, `iw`, `sc` et le nouveau `ch` (coffres ouverts, compté dans `openChest`) sont gardés.
- **Mini-boss** : FOREUSE, PRISME, ARTILLEUR, HYDRE et COLOSSE (`MINIB` 9 à 13, pool normal `MINN`). Chacun a son design (`BLOOK`), sa fiche d'almanach et son aperçu animé.
  - 3 nouvelles attaques dans `bossAI` :
    - `cross` : croix de tirs qui tourne ;
    - `wall` : mur de balles avec un trou ;
    - `shot` : chevrotine.
  - `PATN` les nomme.

### MAJ 37 · almanach complet (v145)

- **Onglet Profil** (`prof`, `almProfL()`) : bordures (`PBORD`), fonds (`PBG`, fixes et animés), animations (`PFX`), titres (`TITLES`) et photos (`AVATARS`), groupés par type comme les perks par monde. On voit la rareté, si c'est animé et comment l'avoir. Possédé = `cosOk` / `t.ok()` / `a.ok()`. Les objets des Seigneurs restent en « ??? » tant qu'ils ne sont pas battus. Cet onglet ne compte pas dans la collection (bonus).
- **Familiers** : la rareté (`petTier`) s'affiche dans la fiche, avec une phrase sur le passage de rareté au niveau 20.
- **Épée** : description mise à jour (frappe vers la visée, même sans ennemi).
- Vérifié : les monstres et les 22 boss et mini-boss, les 122 perks, les bonus, les armes (Laser, Épée), les sets (avec les Seigneurs cachés), les skins, les accessoires, les couleurs, les balles, les châssis, les runes, les familiers, les thèmes et les musiques viennent tous des listes du jeu : ils sont donc à jour automatiquement.

### MAJ 36 · collection de l'almanach (v144)

- **Paliers de collection** (`ALMCOLD`) : 17 paliers au lieu de 8. Ils vont de 10 à 230 découvertes, plus un dernier palier pour l'almanach complet (`almTot()` = monstres + perks + bonus, environ 240). Les anciens paliers montaient jusqu'à 450, impossible à atteindre. Chaque palier donne un petit bonus : dégâts, PV, XP, critique ou gains de nuggets et diams. Au total, avec l'almanach complet : environ +23 % de dégâts, +22 % de PV, +6 % d’XP, +5 % de critique et +20 % de gains.
- **Fiche Collection** (`almColSheet`) : le bandeau est cliquable. La fiche montre :
  - la progression totale ;
  - le détail monstres / perks / bonus ;
  - le résumé des bonus actifs ;
  - la liste de tous les paliers (actif, prochain, encore X découvertes).
- **Titre du menu** : les mesures passent par `offsetTop` (`offY`) au lieu de `getBoundingClientRect`. Avec l'écran pivoté (mode de côté), les rectangles étaient tournés et le titre passait sous les icônes.
  - En portrait, le titre est en position absolue juste sous la barre d'icônes, et le `padding-top` de `#menu` laisse la place au tank entre le titre et l'énergie.

### MAJ 35 · multi plus stable (v143)

- **Coupure après ~5 min** : la taille des paquets d'état grossit avec les vagues (ennemis + tirs) et dépassait la limite de débit de Supabase Realtime, qui coupait la salle. Maintenant `mpSendSnap` règle sa cadence sur un budget d'environ 22 Ko/s (`m.tx = max(m.tx, taille / 22000)`, 4 envois/s minimum). Les paquets d'état (`s`, `g`, `r`) sont sautés quand `ws.bufferedAmount` dépasse 40 Ko. `rtSend` renvoie la taille envoyée. Tirs alliés envoyés en 1 pour 2 : 45 au lieu de 70.
- **Tirs ennemis chez l'invité** : chaque tir a un identifiant (`b.nid`) ; l'invité garde les tirs déjà affichés et ne les recale que s'ils dérivent de plus de 150 px ; les tirs détruits chez lui ne réapparaissent pas (`m.ebX`).
- **Menu** : le titre se place sous la barre d'icônes (mesuré depuis `.mhead`, recalculé avec un `ResizeObserver` sur `.mtop`). L'énergie redevient une petite puce compacte au-dessus des stats.

### MAJ 34 · relevé et 1 pour 2 (v142)

- **Relevé** : une seule fenêtre `ldgSheet(k)` avec un sélecteur de monnaie (`.ldgcur`) : nuggets `s`, diams `j`, ampoules `b`, clés `k`, énergie `e`. `ldgTrack` suit maintenant 5 soldes (`meta.ldgB` à 5 valeurs, compatible avec l'ancien format). Énergie : « Partie lancée · monde » (`nrgPay`), « Recharge d’énergie » (diams), « Backrooms terminées » (+5), et la recharge naturelle regroupée en une ligne par jour. Bouton « VOIR LE RELEVÉ » dans la fenêtre d'énergie et sur les clés.
- **Menu** : `#nrgBar` est déplacé dans `.mhead`, entre le titre et les stats (portrait et paysage). En paysage, `measureMenu` place le titre juste sous la barre d'icônes.
- **1 pour 2** :
  - realtime : un `phx_close`/`phx_error` d'un ancien abonnement (ref ≠ `jref`) est ignoré (avant, ça relançait une boucle de ré-abonnement qui faisait perdre des messages) ;
  - reconnexion : on ne ré-abonne que si le canal est tombé, et au 3e essai on repart sur une connexion neuve ;
  - tolérance avant « partenaire déconnecté » : 30 s en co-op et 1 pour 2 (15 s ailleurs) ;
  - envois moins fréquents (hôte 12/s, invité 14/s) ;
  - cartes : l'hôte renvoie les cartes (`m.dcMsg`) toutes les 1,2 s tant que l'invité n'a pas répondu, garde l'historique des verdicts (`m.drH`) et répond `dx` (annulation) à un choix qu'il n'attend plus ; l'invité ignore les cartes déjà reçues, et si l'hôte joue alors qu'il est encore sur les cartes, il redemande puis ferme les cartes (`duoAbort`).

### MAJ 33 · raretés des familiers (v141)

- **Familiers** : rareté par familier (`meta.petT`, 0 = Commun … 6 = UPL). Multiplicateur de dégâts par rareté `PETTK = [1, 1.6, 2.5, 3.9, 6, 9.2, 14]`. Au niveau 20, bouton « PASSER {rareté} » (diams + ampoules, `PETASC` : 60 ✦/8 💡 → 2 800 ✦/360 💡) : retour au niveau 1 avec la nouvelle rareté. XP et prix des niveaux ×(1 + 0,3 × rareté) et ×(1 + rareté). Badge de rareté sur les cartes.
- **Difficulté** : mondes normaux (hors Nightmare, Oméga, multi) : ennemis −6 % PV / −7 % dégâts, boss −5 % / −6 %.
- **Seigneurs** : stuffs cachés (`lordHid`) dans l'almanach (tuiles glitchées, noms « ??? », pas de filtre), la liste des ULT du garage et la liste des objets manquants tant que le Seigneur n'a pas été battu.

### MAJ 32 · stuffs des Seigneurs (v140)

- 3 nouveaux sets légendaires (`GSETS`, `lord: …`), jamais en coffre UPL, en boutique ni au duel ; donnés en entier (4 pièces LG) à la première victoire contre le Seigneur (`eggReward`), et rattrapés au menu pour ceux qui l'ont déjà battu (`meta.lordSet`).
- **Seigneur des mondes (invocateur)** : 2 pièces = invocations ×1,6 et +1 drone d'escorte ; 4 pièces = encore ×1,5, drones feu + électro, skin du Seigneur, ULT Armée des mondes (6 planètes en orbite qui foudroient, 8 s). Le bonus `s.sumK` multiplie les dégâts du familier et de tous les drones.
- **Seigneur de l'Apocalypse** : 2 pièces = +15 % dégâts, 20 % de saignement, tirs enflammés ; 4 pièces = critiques +0,5, impacts explosifs, +0,3 PV par tir qui touche, ULT Apocalypse (météores sur 520 px pendant 4,5 s).
- **Seigneur-Dieu Oméga** : 2 pièces = +20 % de tirs dédoublés (écho), +10 % de vitesse ; 4 pièces = +15 % d'écho, dash −30 %, invisibilité après dash, ULT Arrêt du temps (gel 5 s, dégâts ×1,5).
- Skins de set = skins des Seigneurs (`STUFFSK.l_*`), noms d'ULT centralisés (`ULTN`).

### MAJ 31 · Tournoi hebdomadaire (v139)

- **Tournoi hebdomadaire** (ex-Défi de la semaine) : mêmes règles (monde, châssis de base et 2 modificateurs tirés au sort par semaine), paliers de vagues conservés.
- **Récompenses de classement** : à la première ouverture de la semaine suivante, le jeu lit le classement de la semaine passée (`scores`, mode `wkAASS`, top 300) et dépose la récompense dans la boîte de réception (onglet Cadeaux, bouton Récupérer) : 1er (40 000 ◆, 150 ✦, 6 🔑, coffre LG), 2e (25 000, 100, 4, MT), 3e (16 000, 70, 3, UR), bronze 4e–5e (9 000, 35, 2, SR), fer 6e–10e (4 500, 15, 1, R), participation (900 ◆, 3 ✦). Une seule fois par semaine (`meta.wkPz`).
- **Tickets** : 1 ticket gratuit par jour (`meta.tkDay`), tickets supplémentaires à 5 💡 (`meta.tix`), boutons JOUER et +1 🎟 dans la carte du tournoi.
- **Reprise** : les parties de tournoi sont sauvegardées comme les autres (`meta.resume.chal`) et se reprennent sans ticket.
- **Croquis** : 17 dessins générés avec des traits tremblés, aussi en fond des pages Mondes / Multi / Classement / Almanach ; puce d'énergie, boutons du haut et MULTI lisibles.

### MAJ 30 · nouveaux visuels (v138)

- **Boss et mini-boss** : 22 designs dessinés (`BLOOK`, par nom) à la place des polygones : Transfo, Dynamo, Arc-Roi, Alternateur, Condensateur, Singularité, Omega, Réacteur fondu, Matriarche mutante, Noyau zéro, Hurleur, Directeur, Chose du bassin, et les 9 mini-boss (Sentinelle, Broyeur, Essaim-mère, Tisseuse, Viseur, Carapace, Goule irradiée, Spore-mère, Rad-sentinelle). Les yeux suivent le joueur ; couleur et attaques inchangées.
- **Couleurs** : Monde 1, tous les monstres en `hot` (hors types `keep`) ; les mondes suivants gardent leur couleur de variante sur tous les thèmes.
- **Fonds de profil** : fonds animés UR minimum, Nuit étoilée/Backrooms MT, Grille/Couchant/Ville néon LG, niveaux de déblocage revus ; 15 fonds fixes en CSS (Ciel, Pêche, Lilas, Jade, Ardoise, Rubis, Doré, Crépuscule, Lagon, Barbe à papa, Encre, Carbone, Royal, Prisme, Obsidienne). Migration `bgMig` : les fonds déjà débloqués restent acquis.
- **Thèmes** : halos (`makeGlows`) réglables par thème (`glow` : Croquis 0, Pastel 0,16, Métal 0,3). Croquis : papier par monde (jeu et menus, variable `--paper`), plus de détourage de texte, couleurs de texte foncées, dessins de fond plus discrets. Pastel/Croquis : « Après ce choix », puissance, clés et ampoules lisibles. Métal : bouton JOUER doré bien contrasté.

### MAJ 29 · épée et économie (v137)

- **Profil (écran gris / plantage)** : chaque ouverture du profil créait ~430 canvas (aperçus de toutes les bordures, fonds, photos, animations), jamais libérés à temps ; au 2e passage la mémoire des images de l'iPhone saturait (volets gris/vides, voire plantage). Les aperçus sont maintenant construits à l'ouverture de leur volet et libérés à la fermeture ou en quittant le profil (3 canvas par ouverture au lieu de 430).
- **1 pour 2** : un verdict de perk arrivé avant l'écran des cartes chez l'invité (deux montées de niveau d'affilée) était jeté → invité bloqué. Il est gardé et appliqué à l'ouverture ; l'hôte répète aussi son verdict pendant 12 s.
- **Épée** : frappe continue vers la visée (joystick de tir / visée auto), même sans ennemi ; cadence ×0,4, dégâts ×3,6 ; coup en arc de 165° avec traînée en croissant et lame qui balaye (0,28 s) ; plus de son ni de recul de tir, nouveau son de lame (bruit filtré en balayage). Percée vers la visée.
- **Perks par monde** : une perk du Monde N est jouable dans le Monde N et au-delà, et partout (infini, Backrooms, mondes plus bas) une fois le Monde N terminé. Comètes passées en `w: 3`.
- **Pacte avec le diable** : 10 % après un boss (hors final, en solo), sinon la roue.
- **Économie** : nuggets de fin de partie ×3 (1,15 → 3,4) ; cadeaux de connexion ×0,35 ; expéditions 220 → 70 nuggets/h ; extracteur du village 60×1,38ⁿ → 25×1,32ⁿ par heure ; prix des cosmétiques en nuggets ×3,3 à ×5 (LG 30 000 → 150 000), en diams ×1,6–1,8.

### MAJ 28 · atelier et stats en direct (v136)

- **Stats en direct** (Réglages > Stats en direct, OUI/NON, éteint par défaut) : panneau en partie avec DPS réel (moyenne glissante sur 4 s), DPS max théorique, dégâts par tir, cadence, critiques, soins par seconde réels, vitesse, portée, blindage.
- **Atelier** : nouveaux upgrades Gâchette rapide (+0,4 % de cadence/niv., max 80), Pointes perforantes (+0,01 au multiplicateur critique/niv., max 60), Blindage (−0,25 % de dégâts subis/niv., max 60, plafond 50 %). Coefficient global 0,85 → 0,78 ; bases en baisse : Munitions lourdes 80 → 62, Viseur 85 → 70, Supercondensateur 170 → 135, Bonne étoile 100 → 85, Relance 450 → 380, Ressorts de dash 90 → 75, Servo-tourelles 90 → 76, Départ lancé 2500 → 2000.
- **Blocs** : dégâts affichés (regroupés toutes les 0,3 s), comptés dans le DPS, bulle d'explication au premier coup.
- **Menu** : la photo de profil complète (bordure, fond, animation) remplace la petite icône du bouton profil.

### MAJ 27 · l'épée (v135)

- **Épée** (nouvelle arme, une épée en bois CO offerte à tout le monde) : frappe automatique au corps à corps dans la direction du déplacement (vers la cible à l'arrêt), coups gauche/droite avec recul. Visuel selon la rareté : bois, bronze, argent, or et argent, diamant/or/rubis, divine animée avec aura, démoniaque.
- **Percée** (SR+) : deuxième dash vers l'avant qui transperce (dégâts ×2,6, recharge 4 s). **Toupie** (MT+) : 3 s de rotation (dégâts ×0,9 toutes les 0,2 s, recharge 12 s). Deux boutons dédiés, grisés avec cadenas si la rareté n'est pas atteinte, placés dans l'éditeur de disposition.
- **Laser** (nouvelle arme) : rayon instantané qui traverse tout, dégâts ×3,1, cadence ×0,3.
- **ULT d'arme UPL** (bouton ULT, recharge 60 s, en plus de l'ULT de tenue) : Bombardement (canon), Salve orbitale (rail), Déluge (roquettes), Tempête (tesla), Disque géant (saignement max), Soleil vivant (lance-flammes), Rayon divin (laser), Lame démoniaque (épée).
- **Puissance** : le type d'arme ne fausse plus la puissance ; chaque arme ajoute 30 + 45 × rareté.
- **Disque** : cadence ×0,45 au lieu de ×0,6. **Drone d'escorte** : 1 tir / 0,85 s, 12 % des dégâts. Nouvel upgrade atelier **Drones rapides** (−0,6 % de délai par niveau, max 60), stats des drones dans la bulle de la pause.
- **Garage paysage** : la scène des emplacements ne s'écrase plus et passe sous la puissance ; « ÉQUIPÉ » devient une pastille ✓.
- **Almanach** : lot élémentaire retiré, section « Artefacts de boss », comètes au Monde 3.
- **Menu paysage** : position du titre recalculée à chaque affichage, au chargement des polices et à la rotation.

### MAJ 26 · le pacte du diable (v134)

- **Pacte avec le diable** : après un boss (sauf le final), la roue devient un pacte garanti. 3 perks épiques ou mieux (artefacts de boss compris) contre 15 % (épique), 25 % (mythique) ou 35 % (légendaire) des PV max, ou refuser. Compteur perks + artefacts.
- **Saignement** : dégâts dans la durée qui soignent. Marques améliorables à l'atelier (2 au niveau 40, 3 au niveau 75). Nouvelles sources : Aura démoniaque (mythique, 3 niveaux), Satellite vampire, Calice de sang.
- **Perks** : Nova (Monde 1, 3 niveaux, ralentit et affaiblit), Titan (+150 PV, dégâts ×2, tank plus gros), Canon suprême (ex-Canon à rail, balle-laser explosive au niveau max), Pacte avec le diable (épique, Monde 3), Carte (mini-carte), 4 artefacts réservés aux boss.
- **Atelier** : Saignement et Vol de vie (0,01 PV/s par niveau).
- **Comètes** : un visuel unique, icône commune avec le symbole de l'élément, à partir du Monde 3 dans tous les modes.
- **Réorganisation par monde** : tirs multiples, canons latéraux/arrière, tête chercheuse et dash au Monde 2, Écho au Monde 3, perks les plus fortes aux Mondes 4–5. Ricochet épique, Batterie super rare.
- **Bulles de la pause** : vraies infos (Fléaux, Nova, Aura…), tous les stades, suprême débloqué ; bulle plus compacte.
- **Pause automatique** : volet des notifications iPhone, appli quittée.
- **Corrections** : retour du Profil vers le Classement, volets du profil vides/gris sur iPhone, menu paysage (puce d'énergie qui chevauchait le titre, stats en bas à gauche, JOUER toujours visible).

### MAJ 25 · corrections et confort (v133)

- **Chrono de speedrun** : il ne s'arrête plus en pause ni pendant les cartes/perks ; reprise en 1,5 s après une pause.
- **Butin** : 2 diams par boss (4 pour le boss final, non réduits), 1 chance sur 2 pour les mini-boss ; nuggets +15 %, diams ×0,5 au lieu de ×0,4.
- **Boss** : les plus forts (rang 3+, boss finaux, Nightmare) se téléportent près du joueur, avec un cercle d'annonce et un anneau de tirs.
- **Cartes/perks** : lot élémentaire du niveau 5 retiré (comètes = épiques normales dès le Monde 3), épique garanti tous les 10 niveaux seulement s'il reste de la place, dernières perks à améliorer avant la vie et la prime, Réparation express = 20 PV.
- **Dash** : plus de recul de base (perk Dash bélier) ; recul fort au contact seulement pendant la Surcharge.
- **Corrections** : joystick bloqué, 1 pour 2 bloqué sur l'écran des cartes (renvoi du choix et du verdict), Monde 1 par défaut en multi, boucle Profil → Amis.
- **Navigation** : bouton Maison dans chaque menu, toucher à côté d'une fenêtre = retour.
- **ATH** : compteur d'éliminations, vie perdue qui reste visible, dégâts subis plus gros et plus longs, flèches vers les bonus bien plus visibles, boutons Dash et Surcharge plus bas en paysage, bruitages plus forts.
- **Cadeau du jour** : un seul son, propre.
- **Garage** : l'écran se cale sur le haut des châssis après un choix.
- **Emplacements et rareté** : le bonus d'un emplacement est multiplié par la rareté de l'objet posé (Commun ×1, Rare ×1,15, Super rare ×1,3, Épique ×1,5, Mythique ×1,75, Légendaire ×2 (+0,1 par LG 2/3/4), UPL ×2,4), expliqué sous chaque emplacement.
- **Runes** : emplacements aux Mondes 2, 4, 6 et 8.
- **Almanach** : nouveautés marquées, diam de découverte à récupérer en touchant l'entrée, point rouge jusqu'à ce que tout soit vu.

### MAJ 24 · Battle royale, forge et relevé (v132)

- **Battle royale** (2 à 12 joueurs) :
  - tous contre tous dans une arène géante, avec le tank de base (atelier + niveau joueur, sans équipement) ;
  - on casse des blocs pour monter de niveau et prendre des cartes/perks ;
  - la zone rétrécit au bout d'1 min ; le dernier debout gagne ;
  - nuggets selon la place et les éliminations, diams pour le top 3 ;
  - fil des éliminations, flèches vers les joueurs proches, dôme pendant le choix d'une carte.
- **Trouver quelqu'un** : bouton dans chaque mode multi (1 pour 2, co-op, course, duel). Le jeu trouve un autre joueur et lance la partie tout seul. En battle royale : partie publique, départ automatique 25 s après le 2e joueur.
- **Forge premium** : enclume animée (marteau, étincelles, braises), lingot à la couleur de la meilleure fusion, barre de progression sur chaque fusion, étincelles à la fusion, règles derrière le bouton « ? ».
- **Équipement premium** : vitrine éclairée avec grille, socle qui tourne sous le tank, emplacements encadrés à la couleur de leur palier, fiche d'objet à la couleur de sa rareté.
- **Relevé des monnaies** : dans la bulle des nuggets, diams et ampoules, « Voir le relevé » liste chaque entrée et sortie, jour par jour, avec sa raison, le solde après, et les totaux des 7 derniers jours.
- **Défi de la semaine premium** : 5 ampoules par essai, 3 paliers par semaine (vague 10 : 3 000 ◆ + 1 🔑 ; vague 20 : 8 000 ◆ + 2 🔑 + 10 ✦ ; vague 30 : 15 000 ◆ + 3 🔑 + 25 ✦).
- **Créateur** : nouvelle animation de profil « Dualité » (anneau mi-lumière mi-ténèbres, éclairs noirs, rouges et violets).
- **Almanach** : catégories en tuiles avec icône, compteur et barre ; phrase d'aide ; filtres des monstres jusqu'au dernier monde qui a des variantes.
- **Menu en paysage** : plus de vide en haut, logo et stats remontés, colonne des boutons plus large et collée à gauche.

### MAJ 23 · HUD, dégâts et comètes (v131)

- **HUD** :
  - temps, score, vague, vie et butin plus gros ; cadres plus discrets ;
  - barres des effets de perks, sets et évolutions à gauche (Adrénaline ×N, Invisible, Barrière, Bouclier en recharge), couleur de la rareté de la perk ;
  - bonus au sol à gauche (Furie, Hâte, Égide, Gel, Tir auto, Radiations, Tonnerre, Prisme), puis un trait, puis les effets de perks en dessous.
- **Dégâts** :
  - nombres plus gros, avec contour noir et effet « pop », visibles 1,25 s ;
  - critiques en jaune avec « ! » ;
  - PV restants / PV max sous la barre des ennemis costauds.
- **Pause** : toucher un perk ouvre une bulle avec ses vrais chiffres par rapport à ton tank (dégâts par tir, cadence, dégâts des satellites, sauts, poison, brûlure, comètes…).
- **Comètes** :
  - nouvelle Comète de poison : nuage toxique, goutte géante, flaque qui ralentit ;
  - comète de glace avec une tête en flocon et une traînée ;
  - le lot du niveau 5 tire 3 comètes parmi 4.
- **Puissance** :
  - châssis et familiers affichent la puissance avant → après, et le gain du niveau suivant ;
  - un niveau de châssis donne +0,6 % (au lieu de +0,35 %) de dégâts et PV et +8 de puissance ; une étoile donne +45.

### MAJ 22 · villages, favoris et confort (v130)

- **Villages** :
  - 4 nouveaux villages : Toundra (prestige 1, 600 ✦), Plage (prestige 2, 1 200 ✦), Montagne (prestige 3, 2 000 ✦), Néo-Tokyo synthwave (prestige 5, 4 000 ✦, le palier max avec animations) ;
  - décorations : agrandir ×2/×3, tourner, ranger dans un inventaire avec compteur (on les repose gratuitement) ;
  - contour noir autour des décorations ;
  - bouton plein écran ⛶.
- **Admin** :
  - menus maison à la place des menus natifs (recherche, volets par rareté, aperçus) ;
  - cadeau « cosmétique de profil » (bordure, fond, animation, photo) ;
  - contenu des packs affiché ;
  - section « Retirer un objet » (titre, skin, bordure, fond, animation, photo), appliquée chez le joueur à sa prochaine connexion, y compris sur ton compte.
- **Bonus de bienvenue** : 1 500 nuggets, 100 diams et un cosmétique au hasard (en dessous d'Épique) à la création du compte.
- **Notifications** (option, avec accord) : énergie pleine et récompense du jour quand le jeu est en arrière-plan ; le jeu complètement fermé demanderait un serveur de notifications.
- **Favoris** ⭐ (objets et runes) : impossible à vendre, en tête de l'inventaire.
- **Revente** : 50 / 120 / 300 / 750 / 1 800 / 4 500 / 10 000 nuggets selon la rareté (objets et runes).
- **Runes** :
  - on choisit la rune de l'autel à remplacer ;
  - re-toucher une rune la désélectionne ;
  - la fiche s'ouvre sous la rune ;
  - double-touche = équiper / retirer / remplacer ;
  - l'échelle d'évolution est corrigée.
- **Garage** : un seul détail ouvert à la fois (sous l'objet touché).
- **Cartes/perks** : « Après ce choix » montre les vraies stats qui changent.
- **Retour** : on revient à l'écran d'avant (Multi → Classement → retour = Multi, etc.).
- **Équilibrage** :
  - boss et mini-boss −15 % de dégâts ;
  - écran de fin moins rapide (roulette 7,5 s, butin 9 s avant passage auto, cartes qui arrivent plus lentement).
- Divers : 1 pour 2 « … ou des amitiés », réglages centrés.

### MAJ 21 · dimension Oméga (v129)

- **6 perks exclusifs à la dimension Oméga** :
  - Faille dimensionnelle (mythique) : un trou noir toutes les 6 s, dégâts ×6 ;
  - Écho temporel (épique, 3 niveaux) : la salve repart 0,15 s plus tard ;
  - Glitch (épique, 3 niveaux) : l'ennemi bugue 2 s et prend +60 % de dégâts ;
  - Kaléidoscope (mythique, 2 niveaux) : 6 rayons arc-en-ciel qui traversent tout, dégâts ×3 ;
  - Étoile Oméga (légendaire) : grande étoile Ω en orbite, dégâts ×3, casse les tirs ennemis et les blocs ;
  - Décalage (épique, 2 niveaux) : chaque dash laisse un double glitché qui explose.
- **4 bonus au sol Oméga** :
  - Arrêt du temps : 6 s, les tirs ennemis sont figés ;
  - Prisme : 12 s, dégâts +80 % et +2 perforations ;
  - Trou noir : dégâts ×12 ;
  - Chaos : deux bonus au hasard.
- **Ennemis Oméga glitchés** : décalages de couleurs et lignes de scan.
- **Almanach** :
  - perks rangés en lignes par monde (1 à 8), puis lot élémentaire, transformations et dimension Oméga, avec le compteur de chaque ligne ;
  - filtre par monde jusqu'au Monde 8, plus Oméga.
- **Thème Oméga** : toujours actif dans la dimension Oméga. Une fois la dimension Oméga, NightmAlpha (8 mondes) et les BetaRooms (3) terminés, il se choisit dans les réglages et reste actif partout.

### MAJ 20 · mondes, éléments et exclusifs (v128)

- **Mondes** :
  - Surtension passe au jaune ; Nébuleuse noire passe au noir avec des touches jaunes et orange (sur les thèmes sombres) ;
  - chaque monde a ses détails au sol : pistes de circuit (M1), bobines qui crépitent (M2), ventilations du réacteur (M3), fissures jaunes (M4), nuages d'ions (M5), poussière et étoiles (M6), petits trous noirs (M7), runes (Infini) ;
  - correctif : les mondes 7 et 8 n'avaient pas de couleur de fond sur certains thèmes.
- **Blocs** : un nouveau design tous les deux mondes (cristal, cube de cuivre, obsidienne à veines orange, géode prisme). Les satellites, satellites élémentaires et lames les cassent aussi.
- **Bonus au sol dessinés** (plus d'émojis), et 5 nouveaux bonus :
  - Monde 4+ : flaque toxique, qui empoisonne et ralentit ; tonnerre, avec la foudre qui tombe 6 s autour de toi ;
  - Monde 6+ : flaque de lave, qui brûle fort ; verglas, qui ralentit à 70 % et peut geler ;
  - Nightmare : nuage irradié géant de 9 s, qui ne touche pas le joueur.
- **Éléments** :
  - glace (Cryo) : ralentit de 21 % au niveau 1, +7 % par niveau ; le suprême ne change pas ;
  - feu : brûlure la plus forte (×0,38 par tick, +35 % par niveau) ;
  - poison : moins fort que le feu, mais ralentit de 10 % ;
  - foudre : arc électrique à 62 % (au lieu de 50 %) avec plus de portée, éclairs du ciel +25 %.
- **Lot élémentaire du niveau 5** : choix entre Comète de feu, Comète de glace et Boule de foudre (3 niveaux chacune).
- **Onde de recul** : perk épique à partir du Monde 6, 5 niveaux, +45 % de recul par niveau.
- **Rune vampire** : 9e rune, vol de vie de 0,4 à 4 % des dégâts infligés (maximum 5 % des PV par seconde).
- **« Après ce choix »** sur toutes les cartes/perks : total du perk et stats réelles avant → après (dégâts, cadence, PV, vitesse, critique…), dans un encadré vert.
- **Auras refaites en animation** : chaque titre mythique, légendaire et UPL a la sienne (éclairs, éclats, pièces d'or, néon des Backrooms, couronne de laurier, marée, flammes, infini, lampe torche, radiations, ailes, soleil, galaxie, étoiles filantes, tesla, Oméga, planètes, feu de l'enfer, glitch…). Les communs, rares, super rares et épiques ont aussi des styles différents.
- **Exclusifs EX (Créateur et Testeurs)** :
  - titres Créateur et Testeur passés en rareté Exclusif, avec un style de titre à eux ;
  - aura « dieu » (rayons, 3 anneaux célestes, couronne, glyphes) et aura « labo » ;
  - photo de profil, bordure, fond et animation dédiés ;
  - le set Créateur est réservé à l'admin, le set Testeur aux joueurs qui ont le titre Testeur.

### MAJ 19 · confort et 1 pour 2 fluide (v127)

- **1 pour 2 sans lag** :
  - le pilote invité bouge en local, sans attendre l'hôte (l'hôte suit sa position, recalage seulement en cas de grosse différence) ;
  - le dash part tout de suite ;
  - le tireur invité voit ses tirs partir instantanément (les dégâts restent calculés chez l'hôte) ;
  - l'invité envoie ses commandes 20 fois par seconde.
- **Châssis et tourelle séparés** (1 pour 2) : la coque, avec ses chenilles et son nez, roule dans le sens du déplacement, et la tourelle tourne vers là où on tire.
- **Abandon sécurisé** : fenêtre de confirmation qui liste ce qu'on perd (énergie, 90 % du butin, objets trouvés). Visite guidée, Comment jouer et Nouveautés ne sont plus dans les réglages du menu pause.
- **Puissance avec une décimale** partout (menu, garage, boutique, sets).
- **Runes** :
  - quand les emplacements sont pleins, la fiche montre le gain si la rune remplace la moins bonne ;
  - boutons VENDRE et FORGER (3 identiques) ;
  - point rouge sur l'onglet fusion et sur le garage quand quelque chose peut être forgé.
- **Tout marquer vu** : bouton dans le garage (équipements et runes) qui enlève les NEW et le point rouge. Ouvrir un message le marque comme lu. Point rouge sur l'almanach quand il y a de nouvelles entrées.
- **Garage** :
  - toucher un objet ne fait plus remonter l'écran (l'objet reste sous le doigt) ;
  - le retoucher le désélectionne, un double tap l'équipe.
- **Familiers** : prix affichés en nuggets, diams et ampoules ; les améliorations sont au-dessus de la liste.
- **Atelier** : évolutions 15 % moins chères.
- **Menu** :
  - sections « Modes de jeu » et « Sac à dos » ;
  - Châssis et Monde avec un sous-titre (« ton tank », « où tu vas jouer »).
- **Chat global** : photo de profil, bordure et fond des joueurs, aussi dans la fiche d'un joueur.
- **Fin de partie** : barres d'XP du familier et du châssis.
- **Admin** : temps de jeu dans la fiche d'un joueur.
- **Correctifs** :
  - bande violette en bas quand le jeu s'ouvre en paysage ;
  - boutons recentrés (Atelier, SUPER !, RÉCUPÉRER, VOIR LE PROFIL…) ;
  - icône d'aura centrée sur le profil ;
  - infos de pause en pastilles lisibles ;
  - profil en paysage (re-rendu forcé de l'écran).
- Traduction anglaise à jour.

### MAJ 18 · traduction anglaise et « cartes/perks » (v126)

- **« Cartes/perks »** partout dans le jeu (menus, aide, cartes en partie, mode 1 pour 2) pour que ce soit clair.
- **Traduction anglaise complète** : environ 1 550 textes ajoutés depuis les dernières mises à jour sont traduits (Oméga, Seigneurs, village, inbox, prestige, 1 pour 2, aide, nouveautés…).

### MAJ 18 · 1 pour 2, le mode amoureux (v125)

- **Nouveau mode multijoueur « 1 pour 2 »** : un seul tank pour deux. Un joueur pilote (déplacement + dash), l’autre tient le canon (visée, tir, surcharge, ultime d’équipement). Les rôles se choisissent dans la salle.
- **Le tank est celui de l’hôte** : ses stats, son canon, ses améliorations et son look.
- **Cartes/perks à l’aveugle** : 15 s, chacun choisit en secret. Même carte/perk = validée. Cartes/perks différentes = pile ou face 50/50 avec un écran de verdict. Un seul a choisi = il l’emporte. Personne = hasard.
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
