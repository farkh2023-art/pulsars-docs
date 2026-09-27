# MANUEL D'UTILISATION PAS À PAS
## Application : Cahier TP · 20 Patterns DSA (SAVOIR_IA)
**Plateforme d'apprentissage interactif des Structures de Données et Algorithmes**  
**Version :** 1.0.0  
**Public cible :** Développeurs juniors à seniors, candidats aux entretiens techniques (FAANG / Big Tech / Startups), étudiants en informatique.

---

## TABLE DES MATIÈRES
1. [Introduction et Philosophie d'Apprentissage](#1-introduction-et-philosophie-dapprentissage)
2. [Prise en Main Rapide (5 Minutes)](#2-prise-en-main-rapide-5-minutes)
3. [Description Détaillée de l'Interface](#3-description-détaillée-de-linterface)
   - 3.1. L'En-tête (Header Supérieur)
   - 3.2. La Barre Latérale (Sidebar de Navigation)
   - 3.3. L'Espace de Travail Central
4. [Le Parcours d'Apprentissage d'un Pattern en 5 Étapes](#4-le-parcours-dapprentissage-dun-pattern-en-5-étapes)
   - Étape 1 : Assimiler la théorie (Onglet « Cours »)
   - Étape 2 : Expérimenter avec le simulateur animé (Onglet « Exemple »)
   - Étape 3 : Coder sa propre solution (Onglet « TP »)
   - Étape 4 : Lancer l'analyse et exploiter les retours
   - Étape 5 : Réviser avec la solution officielle et pratiquer sur LeetCode
5. [Guide des Simulateurs Visuels Animés](#5-guide-des-simulateurs-visuels-animés)
6. [Raccourcis Clavier et Astuces de Productivité](#6-raccourcis-clavier-et-astuces-de-productivité)
7. [Gestion de la Progression et Sauvegarde Locale](#7-gestion-de-la-progression-et-sauvegarde-locale)
8. [Foire Aux Questions (FAQ) et Résolution des Problèmes](#8-foire-aux-questions-faq-et-résolution-des-problèmes)

---

## 1. Introduction et Philosophie d'Apprentissage

Bienvenue dans le **Cahier TP · 20 Patterns DSA** propulsé par **SAVOIR_IA**.

### Pourquoi cette plateforme ?
Résoudre 500 problèmes LeetCode de manière désordonnée engendre souvent de la frustration et un oubli rapide. À l'inverse, comprendre en profondeur les **20 patterns fondamentaux** (Two Pointers, Sliding Window, Monotonic Stack, BFS/DFS, etc.) vous donne une grille de lecture immédiate : face à un problème inédit, vous saurez en quelques secondes identifier la famille algorithmique appropriée et structurer une solution optimale.

### La méthode en 3 piliers :
1. **Comprendre :** Théorie épurée, invariants logiques et modèle de code prêt à l'emploi.
2. **Visualiser :** Voir les pointeurs, index et sous-tableaux s'animer étape par étape sous vos yeux.
3. **Appliquer :** Écrire le code vous-même, recevoir un diagnostic automatisé et consolider vos acquis.

---

## 2. Prise en Main Rapide (5 Minutes)

Pour démarrer immédiatement :
1. **Ouvrez l'application** dans n'importe quel navigateur web moderne (Google Chrome, Firefox, Safari ou Microsoft Edge).
2. Observez la barre latérale gauche : les 20 patterns sont classés du numéro **01** (*Prefix Sum*) au numéro **20** (*Dynamic Programming*).
3. Cliquez sur le premier pattern : **01 · Prefix Sum**.
4. Lisez le concept dans l'onglet **Cours**.
5. Basculez sur l'onglet **Exemple** et cliquez sur le bouton cyan **▶ Lancer** pour regarder l'animation du calcul de somme cumulée en $O(1)$.
6. Cliquez sur l'onglet **TP**, écrivez votre solution dans l'éditeur de code, puis cliquez sur **Vérifier**.
7. Quand votre solution est prête, cliquez sur **Marquer comme fait** : votre barre de progression passe à 5% et le badge vert `✓` apparaît dans le menu latéral !

---

## 3. Description Détaillée de l'Interface

L'écran est découpé en 3 grandes zones coordonnées :

```
+--------------------------------------------------------------------------+
|  [S/IA] Cahier TP · DSA                    [====== 35% ====== 7/20]  (⟲) | (Header)
+-------------------+------------------------------------------------------+
| [🔍 Rechercher...] | Pattern 03 / 20 · TABLEAU                            |
| 01 Prefix Sum   ✓ | Sliding Window                                       |
| 02 Two Pointers ✓ | [📖 Cours]   [💡 Exemple]   [🎯 TP]                  |
| 03 Sliding Window | +--------------------------------------------------+ |
| 04 Fast & Slow    | |                                                  | | (Zone
| ...               | |                Contenu de l'onglet               | |  Centrale)
| 20 Dynamic Prog.  | |                                                  | |
|-------------------| |                                                  | |
| Patterns lus: 5   | +--------------------------------------------------+ |
| TP faits: 2       | [← Précédent]                          [Suivant →]   |
| Temps: 24 min     |                                                      |
+-------------------+------------------------------------------------------+
```

### 3.1. L'En-tête (Header Supérieur)
* **Logo et Titre :** Le logo futuriste `S/IA` identifie la signature visuelle de SAVOIR_IA.
* **Pilule de Progression :** Affiche une jauge bicolore (cyan / violet) et le compteur en temps réel des exercices complétés (ex : `7 / 20`).
* **Bouton de Réinitialisation (icône flèche circulaire) :** Permet de réinitialiser l'ensemble de vos statistiques et coches de complétion pour recommencer un cycle d'entraînement à zéro. Une boîte de dialogue de confirmation vous protège contre tout clic accidentel.
* **Bouton Menu Hamburger (sur mobile/tablette) :** Déploie la barre latérale par-dessus l'écran.

### 3.2. La Barre Latérale (Sidebar de Navigation)
* **Barre de Recherche Dynamique :** Tapez un mot-clé (ex: `arbre`, `recherche`, `heap`, `matrice`, `graph`) pour filtrer instantanément la liste des patterns.
* **Liste Numérotée des 20 Patterns :**
  * La pastille indique le numéro (ex : `03`).
  * Dès qu'un TP est validé, le numéro est remplacé par une pastille verte ornée d'un `✓`.
  * La ligne active possède une lueur néon cyan et une barre indicatrice verticale sur le bord gauche.
* **Statistiques en Pied de Menu :**
  * *Patterns lus :* Nombre de fiches de cours ouvertes au moins une fois.
  * *TP complétés :* Nombre d'exercices pratiques validés.
  * *Temps total :* Durée cumulée passée sur l'application (en minutes ou heures/minutes).

### 3.3. L'Espace de Travail Central
* **Bannière du Pattern :** Titre en typographie `Syne`, catégorie mère (ex : *Linked List*, *Arbres*, *Optimisation*) et résumé en une phrase.
* **Barre d'Onglets Ergonomique :**
  * `📖 Cours` : Notions fondamentales, cas d'usage et gabarit Java.
  * `💡 Exemple` : Déroulement pas-à-pas et simulateur visuel animé.
  * `🎯 TP` : Espace d'entraînement interactif avec console et indices.
* **Pied de Page / Boutons de Navigation :**
  * Bouton `← Précédent` : Passe au pattern précédent.
  * Bouton `Suivant →` : Passe au pattern suivant.

---

## 4. Le Parcours d'Apprentissage d'un Pattern en 5 Étapes

Pour tirer le maximum de bénéfices de chaque session, suivez cette séquence éprouvée :

### Étape 1 : Assimiler la théorie (Onglet « Cours »)
1. Lisez attentivement la section **Le concept**. Repérez la complexité visée ($O(n)$, $O(\log n)$, etc.).
2. Examinez la liste **Quand l'utiliser** : ces points constituent vos déclencheurs mentaux en entretien.
3. Observez le **Template réutilisable**. Il s'agit du squelette type en Java. Vous pouvez vous en inspirer pour la syntaxe des structures de données (`PriorityQueue`, `Deque`, `HashMap`, etc.).

### Étape 2 : Expérimenter avec le simulateur animé (Onglet « Exemple »)
1. Prenez connaissance du problème type et des formats d'entrée / sortie.
2. Si le pattern dispose d'une animation graphique (ex : *Prefix Sum*, *Two Pointers*, *Sliding Window*, *Fast & Slow Pointers*) :
   * Cliquez sur **▶ Lancer**.
   * Regardez les cellules changer de couleur, les pointeurs `L`, `R`, `Slow`, `Fast` converger, ou la boîte englobante se déplacer.
   * Lisez la ligne d'état sous l'animation pour comprendre chaque modification d'indice.
   * Cliquez sur **⟲ Reset** si vous souhaitez revoir le déroulement depuis le début.
3. Lisez le **Walkthrough étape par étape** pour ancrer le raisonnement textuel.

### Étape 3 : Coder sa propre solution (Onglet « TP »)
1. Allez dans l'onglet **🎯 TP**.
2. Prenez connaissance de l'énoncé du problème dans l'encadré supérieur doré.
3. Dans l'onglet **⚡ Mon code**, écrivez votre fonction Java directement dans l'éditeur. L'éditeur préserve vos tabulations et gère le retour à la ligne automatique.

### Étape 4 : Lancer l'analyse et exploiter les retours
1. Cliquez sur le bouton principal cyan **Vérifier**.
2. L'interface bascule instantanément vers l'onglet **📺 Console** :
   * Si votre code est vide ou non modifié, une alerte vous indique d'implémenter votre logique.
   * Si votre code est substantiel, le moteur analyse statiquement votre implémentation :
     * Détection des structures attendues (ex: HashMap, pointeurs, stack monotone).
     * Comptage des lignes utiles.
     * Attribution d'un score (ex : `3 / 3`) et d'un niveau d'évaluation (`Solide ⭐⭐⭐`).
     * Conseils d'optimisation personnalisés.
3. Si vous êtes bloqué :
   * Cliquez sur le bouton **💡 Indice** : une piste de réflexion sans divulgation de la solution s'affiche dans la console.
   * Le bouton **Réinitialiser** permet de remettre à zéro le code de départ si vous souhaitez repartir sur des bases saines.

### Étape 5 : Réviser avec la solution officielle et pratiquer sur LeetCode
1. Cliquez sur le sous-onglet **🔓 Solution** pour découvrir le code propre, commenté et optimal écrit par les ingénieurs pédagogiques de SAVOIR_IA.
2. Comparez votre approche avec la solution de référence (nommage, gestion des cas limites, complexité spatiale).
3. Cliquez sur le bouton **Marquer comme fait** (il se transforme en badge vert `TP validé ✓`).
4. Dans la section inférieure **Aller plus loin · LeetCode**, cliquez sur les liens pour ouvrir directement les problèmes correspondants sur la plateforme LeetCode et vous entraîner en conditions réelles d'examen.

---

## 5. Guide des Simulateurs Visuels Animés

L'application intègre des bancs d'essais graphiques temps réel pour les 4 patterns les plus visuels :

### 1. Pattern 01 · Prefix Sum
* **Ce qu'il montre :** La construction du tableau cumulatif de gauche à droite.
* **Ce qu'il faut observer :** Une fois le tableau construit, l'application met en surbrillance la plage demandée $[i, j]$ en vert et démontre comment la réponse est obtenue par une simple soustraction $O(1)$ sans reparcourir la plage.

### 2. Pattern 02 · Two Pointers (Deux Pointeurs convergents)
* **Ce qu'il montre :** Un pointeur gauche `L` (or) et un pointeur droit `R` (violet).
* **Ce qu'il faut observer :**
  * Si la somme courante est inférieure à la cible : le pointeur `L` avance vers la droite (`L++`).
  * Si la somme courante est supérieure : le pointeur `R` recule vers la gauche (`R--`).
  * Dès que la somme égale la cible : les deux cellules s'illuminent en vert émeraude !

### 3. Pattern 03 · Sliding Window (Fenêtre Glissante)
* **Ce qu'il montre :** Un cadre lumineux cyan de taille fixe $k=3$ glissant élément par élément sur le tableau.
* **Ce qu'il faut observer :** À chaque décalage, l'élément qui sort à gauche est soustrait et le nouvel élément entrant à droite est ajouté, maintenant la somme à jour en temps constant sans recalculer l'intégralité de la fenêtre.

### 4. Pattern 04 · Fast & Slow Pointers (Tortue et Lièvre)
* **Ce qu'il montre :** Deux pointeurs parcourant une liste chaînée avec boucle.
* **Ce qu'il faut observer :**
  * Le pointeur `S` (Slow) avance d'une case à la fois.
  * Le pointeur `F` (Fast) avance de deux cases à la fois.
  * Les deux pointeurs finissent obligatoirement par se chevaucher sur la même case, ce qui prouve mathématiquement la présence d'un cycle.

---

## 6. Raccourcis Clavier et Astuces de Productivité

Pour naviguer à la vitesse d'un ingénieur senior sans toucher à la souris :

| Touche | Action | Condition |
|---|---|---|
| `→` *(Flèche droite)* | Passer au pattern suivant | Hors zone de saisie texte |
| `←` *(Flèche gauche)* | Revenir au pattern précédent | Hors zone de saisie texte |
| `Tab` | Indenter de 2 espaces dans l'éditeur de code | Dans l'éditeur TP |
| `Ctrl + F` / `Cmd + F` | Recherche rapide dans la page | Partout |

> **Astuce de révision rapide :** Utilisez la barre de recherche dans la sidebar pour réviser par famille la veille d'un entretien. Tapez simplement `graphe` pour aligner d'un coup BFS, DFS, Dijkstra et Matrix Traversal.

---

## 7. Gestion de la Progression et Sauvegarde Locale

* **Sauvegarde 100% Automatique :** Votre avancement est enregistré de façon transparente dans le navigateur (`localStorage`). Même si vous fermez votre onglet ou redémarrez votre machine, vous retrouverez :
  * Tous vos TP cochés.
  * La liste des cours déjà lus.
  * Votre temps total d'étude.
* **Confidentialité Totale :** Aucune donnée, aucun code et aucune métrique personnelle n'est envoyée vers un serveur externe. Tout s'exécute localement sur votre machine.
* **Remise à zéro pour une nouvelle révision :**
  * Cliquez sur l'icône de réinitialisation dans l'en-tête en haut à droite.
  * Confirmez votre choix dans la fenêtre modale.
  * L'ensemble de la progression repasse à 0%.

---

## 8. Foire Aux Questions (FAQ) et Résolution des Problèmes

#### Q1 : Pourquoi mon code valide affiche-t-il une alerte dans la console ?
> **Réponse :** Assurez-vous d'avoir bien écrit votre code à l'intérieur du corps de la méthode (entre les accolades `{ ... }`) et de ne pas avoir soumis le code starter vierge. L'analyseur vérifie la présence effective de logique algorithmique.

#### Q2 : Puis-je exécuter du code dans un autre langage que Java (ex: Python, C++, TypeScript) ?
> **Réponse :** Les modèles de cours et solutions sont rédigés en Java, le langage le plus standardisé pour les entretiens techniques internationaux. Cependant, le moteur heuristique sait analyser la structure logique (boucles, variables, structures de données) même si vous adaptez légèrement la syntaxe.

#### Q3 : Le simulateur ne s'anime plus, que faire ?
> **Réponse :** Cliquez simplement sur le bouton `⟲ Reset` sous le panneau d'animation pour réinitialiser le tableau, puis cliquez à nouveau sur `▶ Lancer`.

#### Q4 : Comment ouvrir le menu sur smartphone ?
> **Réponse :** Cliquez sur le bouton menu avec trois barres horizontales situé en haut à gauche à côté du logo `S/IA`. Touchez n'importe quel endroit en dehors de la barre latérale pour la refermer.

#### Q5 : Comment exporter ou sauvegarder ma progression sur un autre ordinateur ?
> **Réponse :** La progression étant stockée dans le `localStorage` de votre navigateur actuel, ouvrez les outils de développement (`F12`), allez dans l'onglet **Application** > **Local Storage**, et notez la valeur de la clé `savoir_ia_dsa_progress` pour la reporter sur votre autre machine.

---

**Bonne préparation et excellente montée en compétence algorithmique avec SAVOIR_IA !**
