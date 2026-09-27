# CAHIER DES CHARGES FONCTIONNEL ET TECHNIQUE
## Projet : Cahier TP · 20 Patterns DSA (Data Structures & Algorithms)
**Éditeur / Marque :** SAVOIR_IA  
**Version :** 1.0.0  
**Statut :** Validé / Prêt pour développement et déploiement  
**Date :** 2026-09-27  

---

## SOMMAIRE
1. [Contexte et Objectifs du Projet](#1-contexte-et-objectifs-du-projet)
2. [Périmètre Fonctionnel](#2-périmètre-fonctionnel)
   - 2.1. Module de Navigation et Catalogue des Patterns
   - 2.2. Module Pédagogique (Onglet « Cours »)
   - 2.3. Module d'Illustration et Simulateur Graphique (Onglet « Exemple »)
   - 2.4. Module de Travaux Pratiques et Analyseur de Code (Onglet « TP »)
   - 2.5. Module de Suivi, Télémétrie Locale et Gamification
   - 2.6. Raccourcis Clavier et Ergonomie Mobile
3. [Spécifications Techniques et Architecture](#3-spécifications-techniques-et-architecture)
   - 3.1. Pile Technologique et Choix d'Architecture
   - 3.2. Design System et Charte Graphique SAVOIR_IA
   - 3.3. Modèle de Données (Data Schema)
   - 3.4. Moteur d'Analyse Statique Heuristique
   - 3.5. Persistance des Données (Storage Local)
4. [Répertoire Détaillé des 20 Patterns DSA](#4-répertoire-détaillé-des-20-patterns-dsa)
5. [Exigences Non-Fonctionnelles](#5-exigences-non-fonctionnelles)
6. [Livrables, Phasage et Critères d'Acceptation](#6-livrables-phasage-et-critères-dacceptation)

---

## 1. Contexte et Objectifs du Projet

### 1.1. Contexte
La préparation aux entretiens techniques (Google, Meta, Amazon, startups de premier plan) et la montée en compétence des développeurs en algorithmique se heurtent souvent à un apprentissage par cœur fastidieux de centaines de problèmes LeetCode non structurés.  
La méthodologie moderne d'ingénierie logicielle préconise l'apprentissage par **patterns fondamentaux** : maîtriser les 20 schémas algorithmiques cardinaux permet de résoudre plus de 85% des problèmes d'entretiens techniques.

### 1.2. Vision du Produit
L'application **Cahier TP · 20 Patterns DSA** de **SAVOIR_IA** est une plateforme web interactive, autonome, élégante et sans friction, structurée comme un classeur numérique de travaux dirigés. Elle réunit en une seule interface :
- La théorie condensée et les gabarits d'implémentation (Java).
- Des simulateurs visuels interactifs montrant le déplacement des pointeurs et des indices mémoire.
- Un bac à sable de code interactif avec analyse statique temps réel.
- Des exercices corrigés calibrés et des passerelles directes vers les problèmes LeetCode de référence.

### 1.3. Objectifs Quantitatifs et Qualitatifs
- **Autonomie complète :** Application Single Page (SPA) exécutable côté client sans serveur applicatif lourd requis.
- **Rétention utilisateur :** Taux de complétion des TP encouragé par le suivi en temps réel et la gamification visuelle.
- **Vitesse et fluidité :** Temps de chargement inférieur à 1 seconde, zéro dépendance tierce bloquante, transitions à 60 FPS.
- **Accessibilité multi-terminaux :** Expérience utilisateur optimale sur ordinateur de bureau, tablette et smartphone.

---

## 2. Périmètre Fonctionnel

### 2.1. Module de Navigation et Catalogue des Patterns
* **Barre latérale rétractable (Sidebar) :**
  * Affichage de la liste ordonnée des 20 patterns (de 01 à 20).
  * Indication visuelle de la famille algorithmique (Tableau, Linked List, Hashing, Stack, Bits, Heap, Intervalles, Search, Arbres, Graphes, Recursion, Trees, Stratégie, Optimisation).
  * Badges d'état par pattern :
    * Non visité : pastille numérotée grise neutre.
    * En cours / Actif : surbrillance cyan avec trait indicateur latéral.
    * TP validé : pastille verte émeraude avec coche stylisée `✓`.
* **Moteur de recherche instantané :**
  * Filtrage à la frappe sans rechargement (recherche insensible à la casse sur le nom du pattern et sur le nom de famille).
* **Pied de navigation (Footer Sidebar) :**
  * Compteur dynamique de patterns consultés (`Patterns lus`).
  * Compteur de travaux pratiques validés (`TP complétés`).
  * Chronomètre de temps cumulé d'étude formaté (`Temps total`).

### 2.2. Module Pédagogique (Onglet « Cours »)
Pour chacun des 20 patterns, ce volet présente :
1. **Le Concept Fondamental :** Explication synthétique du fonctionnement, du gain de complexité asymptotique (ex. passage de $O(n^2)$ à $O(n)$) et des structures de données sous-jacentes.
2. **Quand l'utiliser (Trigger Conditions) :** Liste à puces des cas d'usage typiques et des signaux faibles dans un énoncé technique invitant à utiliser ce pattern.
3. **Template Réutilisable (Boilerplate) :**
   * Code Java standardisé et commenté, prêt à l'emploi.
   * Coloration syntaxique logicielle intégrée (mots-clés, types, méthodes, commentaires, chaînes, constantes).
   * Boutons visuels macOS window controls pour le réalisme de l'environnement de développement.

### 2.3. Module d'Illustration et Simulateur Graphique (Onglet « Exemple »)
1. **Énoncé du problème type :** Cas représentatif simplifié issu de la littérature LeetCode (ex: *Two Sum II*, *Range Sum Query*, *Rotting Oranges*).
2. **Spécification des Entrées / Sorties :** Blocs visuels typés identifiant clairement l'échantillon de données (Input) et le résultat escompté (Output).
3. **Visualisations Interactives Animées (Algorithmes animés en Canvas CSS/DOM) :**
   * *Prefix Sum :* Visualisation de l'accumulation successive des valeurs et surbrillance instantanée du calcul de plage $[i, j]$ en $O(1)$.
   * *Two Pointers :* Déplacement dynamique des pointeurs `L` (or) et `R` (violet) aux deux extrémités du tableau jusqu'à détection de la cible.
   * *Sliding Window :* Fenêtre glissante illuminée de taille fixe ou variable avec calcul en temps réel de la somme courante.
   * *Fast & Slow Pointers :* Simulation de l'algorithme du lièvre et de la tortue sur liste circulaire avec détection de cycle.
   * Commandes du lecteur : Boutons `▶ Lancer` et `⟲ Reset`, compte-rendu dynamique en console textuelle synchrone.
4. **Walkthrough pas-à-pas :** Découpage textuel numéroté détaillant l'état interne de la mémoire à chaque itération.

### 2.4. Module de Travaux Pratiques et Analyseur de Code (Onglet « TP »)
1. **Énoncé du problème pratique :** Exercice emblématique avec contraintes explicites et exemple guidé.
2. **Éditeur de code embarqué (Monaco/Ace-like lightweight) :**
   * Zone de saisie personnalisée avec police monospace (`JetBrains Mono`), indentation automatique (tabulations à 2 espaces), désactivation des correcteurs orthographiques parasites.
   * Code de démarrage (Starter Code) pré-injecté avec squelette de méthode et signatures d'arguments.
3. **Onglets de l'espace TP :**
   * `⚡ Mon code` : Zone d'édition active.
   * `📺 Console` : Sortie des résultats de validation, alertes d'erreurs et diagnostics.
   * `🔓 Solution` : Code complet optimal en Java avec coloration syntaxique complète, consultable en cas de blocage.
4. **Moteur d'Analyse Heuristique & Vérification :**
   * Vérification de non-vacuité et de modification effective du code initial.
   * Détection par expressions régulières ciblées des invariants algorithmiques propres au pattern.
   * Calcul d'un score sur critères structurels, attribution d'un niveau d'évaluation (Solide ⭐⭐⭐, Correct ⭐⭐, À renforcer ⭐) et émission d'un conseil personnalisé.
5. **Boîte à outils de l'apprenant :**
   * Bouton `Vérifier` : Exécute l'analyse statique et bascule vers l'onglet console.
   * Bouton `Indice` : Révèle une indication méthodologique progressive sans dévoiler la solution complète.
   * Bouton `Réinitialiser` : Restaure le code modèle de démarrage.
   * Bouton à bascule `Marquer comme fait / TP validé ✓` : Met à jour la progression globale.
6. **Passerelles LeetCode :** Grille de 4 à 5 liens externes pointant directement vers les problèmes officiels de difficulté croissante.

### 2.5. Module de Suivi, Télémétrie Locale et Gamification
* **En-tête dynamique :**
  * Jauge de progression graduée de 0 à 100%.
  * Compteur textuel au format `X / 20`.
  * Animation fluide lors de la validation d'un nouveau pattern.
* **Système de notifications Toasts :** Messages contextuels non-bloquants (succès vert, information cyan, erreur corail).
* **Bouton de réinitialisation générale :** Permet à l'utilisateur de repartir de zéro avec confirmation modale préalable.

### 2.6. Raccourcis Clavier et Ergonomie Mobile
* **Raccourcis Clavier :**
  * Touche `Flèche Gauche` ($\leftarrow$) : Pattern précédent (si hors champ d'édition de texte).
  * Touche `Flèche Droite` ($\rightarrow$) : Pattern suivant (si hors champ d'édition de texte).
* **Responsive Design & Mobile Drawer :**
  * En dessous de 980px de largeur : Passage en affichage 1 colonne, sidebar transformée en menu coulissant (off-canvas drawer) avec bouton hamburger dédié et fond semi-transparent flouté cliquable.
  * En dessous de 640px : Réduction des cellules de visualisation, masquage des libellés d'onglets au profit des icônes, boutons de navigation pleine largeur.

---

## 3. Spécifications Techniques et Architecture

### 3.1. Pile Technologique et Choix d'Architecture
* **Type d'application :** Client-Side Web Application (Single-Page Application).
* **Langages :** HTML5 sémantique, CSS3 moderne (Variables CSS / Tokens, Flexbox, CSS Grid, Glassmorphism), Vanilla ECMAScript 2022+ (TypeScript Ready).
* **Zéro Dépendance Lourde :** Aucun framework invasif imposé au runtime, légèreté absolue (< 80 Ko d'empreinte mémoire totale), chargement immédiat.
* **Polices typographiques (Google Fonts CDN) :**
  * Titres et identité visuelle : `Syne` (weights 500, 600, 700, 800).
  * Corps de texte et UI : `DM Sans` (weights 300, 400, 500, 600, 700).
  * Code source, métriques et visualisations : `JetBrains Mono` (weights 400, 500, 600).

### 3.2. Design System et Charte Graphique SAVOIR_IA
L'application adopte une esthétique premium d'inspiration cybernétique et studio d'ingénierie logicielle (*Dark Deep Sea Navy & Cyber Neon*).

#### Tokens de Couleurs CSS
| Jeton (Token) | Valeur Hex / RGBA | Utilisation |
|---|---|---|
| `--navy-900` | `#05091A` | Fond d'écran principal de l'application |
| `--navy-800` | `#0A0E27` | Fond de la barre latérale |
| `--navy-700` | `#111634` | Cartes, conteneurs glassmorphism |
| `--navy-600` | `#1A2046` | Éléments surélevés, bordures actives |
| `--navy-500` | `#232B5C` | Séparateurs secondaires |
| `--turquoise` | `#00D9FF` | Accent primaire, progression, fonctions, pointeurs actifs |
| `--violet` | `#7C5CFF` | Accent secondaire, badges de catégories, types Java |
| `--gold` | `#FFB547` | Mises en avant, indices, pointeurs secondaires, constantes |
| `--green` | `#4ADE80` | Succès, validation de TP, chaînes de caractères |
| `--red` | `#FF5C7A` | Erreurs, alertes console, alertes syntaxiques |
| `--text-100` | `#FFFFFF` | Titres majeurs, valeurs critiques |
| `--text-200` | `#E5E9F5` | Texte courant de lecture |
| `--text-300` | `#B4B9CC` | Descriptions secondaires, paragraphes de cours |
| `--text-400` | `#7A8099` | Libellés d'interface, métadonnées, commentaires |
| `--text-500` | `#555A75` | Placeholders, éléments inactifs |

#### Effets de Surface et Profondeur
- `Glassmorphism` : `rgba(17, 22, 52, 0.55)` combiné à un filtre `backdrop-filter: blur(20px)`.
- `Lumières ambiantes` : Dégradés radiaux diffus appliqués en arrière-plan fixe pour créer de la profondeur spatiale sans impacter les performances de défilement.
- `Bordures fines` : `1px solid rgba(255, 255, 255, 0.06)` à `rgba(255, 255, 255, 0.16)`.

### 3.3. Modèle de Données (Data Schema)
Chaque pattern de l'application répond à la structure d'objet stricte suivante :

```typescript
interface DsaPattern {
  id: number;                          // Identifiant unique de 1 à 20
  name: string;                        // Nom international reconnu (ex: "Sliding Window")
  family: string;                      // Catégorie mère (Tableau, Graphes, Heap, etc.)
  description: string;                 // Définition pédagogique avec balises HTML autorisées
  whenToUse: string[];                 // Conditions d'application concrètes
  template: string;                    // Gabarit de code standardisé en Java
  example: {
    problem: string;                   // Énoncé du problème résolu
    input: string;                     // Exemple d'entrée
    output: string;                    // Exemple de sortie attendue
    steps: string[];                   // Décomposition étape par étape
  };
  viz: "prefix" | "twoPointers" | "slidingWindow" | "fastSlow" | null; // Moteur graphique associé
  exercise: {
    title: string;                     // Titre du TP
    statement: string;                 // Énoncé détaillé avec consignes
    starter: string;                   // Code source de départ fourni à l'étudiant
    solution: string;                  // Solution officielle complète
    hint: string;                      // Indice méthodologique
  };
  practice: Array<{                    // Liens vers problèmes LeetCode de perfectionnement
    num: string;                       // Numéro du problème officiel
    name: string;                      // Nom officiel du problème
  }>;
}
```

### 3.4. Moteur d'Analyse Statique Heuristique
Le moteur d'analyse intégré dans le client procède en 4 étapes lors du clic sur `Vérifier` :
1. **Extraction du corps de méthode :** Nettoyage des espaces blancs et isolation de la logique contenue entre accolades via expression régulière.
2. **Contrôle d'intégrité de surface :** Rejet si le code soumis est identique au `starter code` ou inférieur à 30 caractères utiles.
3. **Évaluation des invariants algorithmiques :** Exécution d'une batterie de tests regex sur mesure par pattern (ex: présence d'une structure `HashMap`, calcul de sommes glissantes, décalages `>>` pour la manipulation de bits, boucle de convergence `while (left < right)`, etc.).
4. **Génération du rapport :** Calcul du ratio d'adéquation, affichage du bilan ligne par ligne dans la console intégrée, attribution du badge de qualité et émission du conseil pédagogique.

### 3.5. Persistance des Données (Storage Local)
L'état de la session apprenant est automatiquement sérialisé dans le `localStorage` du navigateur sous la clé `savoir_ia_dsa_progress` selon le schéma JSON suivant :

```json
{
  "read": {
    "1": true,
    "2": true
  },
  "done": {
    "1": true
  },
  "time": 42
}
```
* Sauvegarde automatique toutes les 30 secondes et à chaque action utilisateur (changement de pattern, validation de TP).
* Calcul différentiel du temps écoulé permettant de reprendre sa session d'étude exactement là où elle a été interrompue.

---

## 4. Répertoire Détaillé des 20 Patterns DSA

| N° | Nom du Pattern | Famille | Complexité Typique | Problème Clé / TP |
|:---:|:---|:---|:---:|:---|
| **01** | **Prefix Sum** | Tableau | $O(n)$ build, $O(1)$ query | *Subarray Sum Equals K* |
| **02** | **Two Pointers** | Tableau | $O(n)$ temps, $O(1)$ espace | *Valid Palindrome* / *Two Sum II* |
| **03** | **Sliding Window** | Tableau | $O(n)$ temps, $O(k)$ espace | *Longest Substring Without Repeating Characters* |
| **04** | **Fast & Slow Pointers** | Linked List | $O(n)$ temps, $O(1)$ espace | *Middle of the Linked List* / *Cycle Detection* |
| **05** | **LinkedList In-place Reversal** | Linked List | $O(n)$ temps, $O(1)$ espace | *Reverse Linked List* / *Reverse Between* |
| **06** | **Frequency Counting** | Hashing | $O(n)$ temps, $O(k)$ espace | *Top K Frequent Elements* / *Valid Anagram* |
| **07** | **Monotonic Stack** | Stack | $O(n)$ temps, $O(n)$ espace | *Daily Temperatures* / *Next Greater Element* |
| **08** | **Bit Manipulation** | Bits | $O(1)$ à $O(n)$ temps, $O(1)$ espace | *Counting Bits* / *Single Number* |
| **09** | **Top K Elements** | Heap | $O(n \log k)$ temps, $O(k)$ espace | *K Closest Points to Origin* |
| **10** | **Overlapping Intervals** | Intervalles | $O(n \log n)$ temps, $O(n)$ espace | *Meeting Rooms II* / *Merge Intervals* |
| **11** | **Modified Binary Search** | Search | $O(\log n)$ temps, $O(1)$ espace | *Find Minimum in Rotated Sorted Array* |
| **12** | **Binary Tree Traversal** | Arbres | $O(n)$ temps, $O(h)$ espace | *Validate Binary Search Tree* |
| **13** | **Depth-First Search (DFS)** | Graphes | $O(V + E)$ temps, $O(V)$ espace | *Number of Islands* |
| **14** | **Breadth-First Search (BFS)** | Graphes | $O(V + E)$ temps, $O(V)$ espace | *Rotting Oranges* / *Level Order* |
| **15** | **Shortest Path (Dijkstra)** | Graphes | $O((V + E) \log V)$ temps | *Cheapest Flights Within K Stops* |
| **16** | **Matrix Traversal** | Graphes | $O(m \times n)$ temps & espace | *Max Area of Island* |
| **17** | **Backtracking** | Recursion | Exponentiel / Factoriel | *Permutations* / *Subsets* |
| **18** | **Trie (Prefix Tree)** | Trees | $O(L)$ par opération | *Design Add and Search Words* |
| **19** | **Greedy (Glouton)** | Stratégie | $O(n \log n)$ ou $O(n)$ temps | *Gas Station* / *Jump Game* |
| **20** | **Dynamic Programming** | Optimisation | Polynomial ($O(n), O(n \cdot W)$) | *Coin Change* / *Climbing Stairs* |

---

## 5. Exigences Non-Fonctionnelles

### 5.1. Performance & Réactivité
- **Latence d'interaction UI :** Réponse au clic ou changement d'onglet inférieure à 50 millisecondes.
- **Fluidité des animations :** Le simulateur de pointeurs et fenêtres glissantes doit tourner à un taux fixe de 60 images par seconde sans à-coups (utilisation de transformations CSS et requêtes d'animation fluides).
- **Ressources mémoire :** Consommation mémoire navigateur maintenue sous la barre des 50 Mo.

### 5.2. Sécurité & Confidentialité
- **Exécution sandboxée côté client :** Aucune transmission de code étudiant vers un serveur tiers distant.
- **Résilience XSS :** Échappement systématique des entrées de l'éditeur lors de la réinjection dans le moteur d'analyse et d'affichage syntaxique (`escape HTML`).

### 5.3. Compatibilité Navigateurs
- Compatibilité certifiée sur l'ensemble des moteurs modernes :
  - Google Chrome / Chromium $\ge$ v100
  - Apple Safari / WebKit $\ge$ v15.4
  - Mozilla Firefox $\ge$ v100
  - Microsoft Edge $\ge$ v100
- Support tactile complet pour écrans iPadOS, iOS et Android.

---

## 6. Livrables, Phasage et Critères d'Acceptation

### 6.1. Livrables Attendus
1. **Fichier applicatif autonome :** Fichier `index.html` monolithique intégrant CSS, HTML et JavaScript sans dépendance de compilation préalable.
2. **Cahier des charges complet :** Document `cahierdecharge.md` consignant l'intégralité des spécifications fonctionnelles et techniques.
3. **Manuel utilisateur pas-à-pas :** Document `manuel-utilisateur.md` détaillant la méthodologie d'apprentissage et la prise en main de l'outil.

### 6.2. Critères d'Acceptation (Recette)
- [x] Les 20 patterns sont accessibles sans erreur de navigation ni lien mort.
- [x] La recherche temps réel filtre fidèlement les listes par nom et par famille.
- [x] Les 4 simulateurs visuels (Prefix, Two Pointers, Sliding Window, Fast/Slow) s'exécutent de manière fluide et se réinitialisent correctement.
- [x] L'analyseur heuristique de code détecte convenablement les structures requises pour chaque pattern.
- [x] L'état de progression (patterns lus, TP réussis, temps passé) persiste après rechargement de la page (`F5`).
- [x] L'application est 100% fonctionnelle et lisible sur écran de smartphone (largeur 375px).
