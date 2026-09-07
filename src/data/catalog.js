import { structureBacterienneQuestions } from './qcm/s1/infectio/1-structure-bacterienne.js'
import { introductionParasitologieMycologieQuestions } from './qcm/s1/infectio/2-introduction-parasitologie-mycologie.js'


export const catalog = {
  semesters: [
    {
      id: 's1',
      shortTitle: 'S1',
      title: 'Semestre 1',
      subjects: [
        {
          id: 'infectio',
          title: 'INFECTIO',
          icon: '🦠',
          profAnnales: [],
          courses: [
            {
              id: 'structure-bacterienne',
              title: '1 - Structure bactérienne',
              fichePath: '/fiches/s1/infectio/1-structure-bacterienne.html',
              questions: structureBacterienneQuestions,
            },
            {
  id: '2-introduction-parasitologie-mycologie',
  title: '2 - Introduction à la parasitologie et à la mycologie',
  fichePath: '/fiches/s1/infectio/2-introduction-parasitologie-mycologie.html',
  questions: introductionParasitologieMycologieQuestions,
},
          ],
        },
        {
          id: 'hemato',
          title: 'HEMATO',
          icon: '🩸',
          profAnnales: [],
          courses: [],
        },
        {
          id: 'genetique',
          title: 'GÉNÉTIQUE',
          icon: '🧬',
          profAnnales: [],
          courses: [],
        },
      ],
    },
    {
      id: 's2',
      shortTitle: 'S2',
      title: 'Semestre 2',
      subjects: [],
    },
  ],
}