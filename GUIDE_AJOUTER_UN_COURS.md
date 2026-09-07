# Ajouter un cours

Architecture : Accueil → S1/S2 → Matière → Cours.

Sur une page de cours, la fiche HTML est affichée à gauche et le module QCM reste à droite. Sur iPhone, le module passe sous la fiche.

## Exemple : ajouter un cours d’infectio

### 1. Ajouter la fiche

Créer :

```txt
public/fiches/s1/infectio/antibiotiques.html
```

### 2. Ajouter le QCM

Créer :

```txt
src/data/qcm/s1/infectio/antibiotiques.js
```

Avec :

```js
export const antibiotiquesQuestions = [
  {
    id: 1,
    type: 'QCM',
    question: 'Question exemple ?',
    options: [
      { text: 'Réponse vraie', correct: true },
      { text: 'Réponse fausse', correct: false },
      { text: 'Réponse fausse', correct: false },
      { text: 'Réponse fausse', correct: false },
      { text: 'Réponse fausse', correct: false },
    ],
    explanation: 'Explication courte.',
  },
]
```

### 3. Déclarer le cours dans le catalogue

Dans `src/data/catalog.js`, ajouter en haut :

```js
import { antibiotiquesQuestions } from './qcm/s1/infectio/antibiotiques.js'
```

Puis dans la matière INFECTIO :

```js
courses: [
  {
    id: 'antibiotiques',
    title: 'Antibiotiques',
    fichePath: '/fiches/s1/infectio/antibiotiques.html',
    questions: antibiotiquesQuestions,
  },
]
```

## Fiche sans QCM

Tu peux mettre :

```js
questions: []
```

Le module QCM affichera simplement qu’aucun QCM n’est encore ajouté.
