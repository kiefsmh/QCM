import { structureBacterienneQuestions } from './qcm/s1/infectio/1-structure-bacterienne.js'
import { introductionParasitologieMycologieQuestions } from './qcm/s1/infectio/2-introduction-parasitologie-mycologie.js'
import { introductionGenetiqueQuestions } from './qcm/s1/genetique/1-introduction-genetique.js'
import { hematopoieseQuestions } from './qcm/s1/hemato/1-hematopoeise.js'

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
              title: 'Structure bactérienne',
              fichePath: '/fiches/s1/infectio/1-structure-bacterienne.html',
              questions: structureBacterienneQuestions,
            },
            {
              id: 'introduction-parasitologie-mycologie',
              title: 'Introduction à la parasitologie et à la mycologie',
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
          courses: [
            {
              id: 'hematopoeise',
              title: '1 - HÉMATOPOÉÏSE',
              fichePath: '/fiches/s1/hemato/1-hematopoeise.html',
              questions: hematopoieseQuestions,
            },
          ],
        },
        {
          id: 'genetique',
          title: 'GÉNÉTIQUE',
          icon: '🧬',
          profAnnales: [],
          courses: [
            {
              id: 'introduction-genetique',
              title: 'Introduction à la génétique',
              fichePath: '/fiches/s1/genetique/introduction-genetique.html',
              questions: introductionGenetiqueQuestions,
            },
          ],
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