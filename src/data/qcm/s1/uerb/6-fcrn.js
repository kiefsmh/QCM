export const meta = {
  title: 'FcRn ou récepteur néonatal pour le Fc des IgG'
};

export default [
  {
    "id": 1,
    "type": "QCM",
    "question": "Dans le vocabulaire du cours, quelle partie d’une immunoglobuline assure la reconnaissance spécifique de l’antigène ?",
    "options": [
      {
        "text": "Le fragment Fab",
        "correct": true,
        "correction": "Vrai. Le Fab porte la reconnaissance de l’antigène."
      },
      {
        "text": "Le fragment Fc",
        "correct": false,
        "correction": "Faux. Le Fc est principalement associé aux fonctions effectrices et aux récepteurs."
      },
      {
        "text": "Le FcRn",
        "correct": false,
        "correction": "Faux. Le FcRn est un récepteur du fragment Fc des IgG."
      },
      {
        "text": "La β2-microglobuline",
        "correct": false,
        "correction": "Faux. La β2-microglobuline est associée au FcRn et non au paratope."
      },
      {
        "text": "Le domaine DIII de l’albumine",
        "correct": false,
        "correction": "Faux. DIII est un domaine de l’albumine."
      }
    ],
    "explanation": "Le cours distingue Fab, qui reconnaît l’antigène, et Fc, impliqué dans la fonctionnalité de l’anticorps."
  },
  {
    "id": 2,
    "type": "QRM",
    "question": "Concernant les deux fragments fonctionnels d’une immunoglobuline, quelles propositions suivent le cours ?",
    "options": [
      {
        "text": "Le Fab participe à la spécificité de l’anticorps.",
        "correct": true,
        "correction": "Vrai. Il se lie à l’antigène grâce à la région de reconnaissance."
      },
      {
        "text": "Le Fc contribue aux fonctions effectrices.",
        "correct": true,
        "correction": "Vrai. Il permet notamment le recrutement de partenaires effecteurs."
      },
      {
        "text": "Le Fc peut interagir avec des récepteurs Fc.",
        "correct": true,
        "correction": "Vrai. Cette interaction fait partie des fonctions du fragment Fc."
      },
      {
        "text": "Le paratope se situe sur l’albumine.",
        "correct": false,
        "correction": "Faux. Le paratope appartient à l’anticorps et reconnaît un épitope."
      },
      {
        "text": "Une Ig ne comporte jamais de chaînes légères.",
        "correct": false,
        "correction": "Faux. Le cours décrit deux chaînes lourdes et deux chaînes légères."
      }
    ],
    "explanation": "L’anticorps est bifonctionnel : reconnaissance d’épitope d’un côté, fonctions biologiques du Fc de l’autre."
  },
  {
    "id": 3,
    "type": "QCM",
    "question": "Quelle localisation distingue surtout le FcRn des récepteurs Fcγ conventionnels ?",
    "options": [
      {
        "text": "La lumière des alvéoles pulmonaires",
        "correct": false,
        "correction": "Faux. Le cours ne situe pas majoritairement le FcRn dans les alvéoles."
      },
      {
        "text": "Les endosomes intracellulaires",
        "correct": true,
        "correction": "Vrai. Le FcRn est très majoritairement endosomal."
      },
      {
        "text": "La membrane mitochondriale",
        "correct": false,
        "correction": "Faux. Aucune localisation mitochondriale majoritaire n’est indiquée."
      },
      {
        "text": "Le noyau cellulaire",
        "correct": false,
        "correction": "Faux. Il ne s’agit pas d’un récepteur nucléaire."
      },
      {
        "text": "La matrice extracellulaire uniquement",
        "correct": false,
        "correction": "Faux. Il est présent dans les cellules, et non exclusivement dans la matrice."
      }
    ],
    "explanation": "La particularité majeure du FcRn est sa localisation principalement intracellulaire, notamment dans les endosomes."
  },
  {
    "id": 4,
    "type": "QRM",
    "question": "Quelles caractéristiques du FcRn sont mentionnées dans l’introduction ?",
    "options": [
      {
        "text": "Il peut prendre en charge des IgG.",
        "correct": true,
        "correction": "Vrai. Les IgG sont un de ses deux ligands majeurs."
      },
      {
        "text": "Il se lie également à l’albumine.",
        "correct": true,
        "correction": "Vrai. Le cours insiste aussi sur l’albumine."
      },
      {
        "text": "Le FcRn ne se lie à ses ligands qu’à pH alcalin",
        "correct": false,
        "correction": "Faux. Le cours décrit une fixation privilégiée dans les endosomes acidifiés."
      },
      {
        "text": "Il ne peut agir que s’il reste en permanence à la surface cellulaire.",
        "correct": false,
        "correction": "Faux. Il est au contraire majoritairement présent dans les endosomes."
      },
      {
        "text": "Il participe à l’allongement de la demi-vie des IgG.",
        "correct": true,
        "correction": "Vrai. Le recyclage évite la dégradation rapide des IgG."
      }
    ],
    "explanation": "Le FcRn lie les IgG et l’albumine, avec une liaison dépendante du pH ; cette propriété soutient leur survie."
  },
  {
    "id": 5,
    "type": "QCM",
    "question": "Quelle fonction du FcRn explique le passage des IgG maternelles vers le fœtus chez l’humain ?",
    "options": [
      {
        "text": "La phagocytose lysosomale",
        "correct": false,
        "correction": "Faux. La phagocytose n’explique pas le transfert materno-fœtal."
      },
      {
        "text": "La transcytose transplacentaire",
        "correct": true,
        "correction": "Vrai. Le placenta utilise le FcRn pour transférer les IgG."
      },
      {
        "text": "La synthèse des IgG fœtales",
        "correct": false,
        "correction": "Faux. Le FcRn transporte des IgG déjà produites ; il ne les synthétise pas."
      },
      {
        "text": "La dégranulation des NK",
        "correct": false,
        "correction": "Faux. Les NK ne réalisent pas ce transport placentaire."
      },
      {
        "text": "La recombinaison des gènes d’Ig",
        "correct": false,
        "correction": "Faux. Aucune recombinaison de gènes n’est impliquée dans le trajet décrit."
      }
    ],
    "explanation": "Le transfert transplacentaire des IgG permet une immunité passive au début de la vie."
  },
  {
    "id": 6,
    "type": "QRM",
    "question": "Selon le cours, quelles conséquences sont associées au transfert maternel des IgG par FcRn ?",
    "options": [
      {
        "text": "Le nouveau-né bénéficie d’une protection passive transitoire.",
        "correct": true,
        "correction": "Vrai. Les IgG maternelles assurent une protection initiale."
      },
      {
        "text": "Chez l’humain, le transfert maternel des IgG passe essentiellement par le lait et jamais par le placenta",
        "correct": false,
        "correction": "Faux. La ronéo décrit précisément le passage transplacentaire chez l’humain."
      },
      {
        "text": "Les IgG maternelles protègent l’enfant uniquement après la première année de vie",
        "correct": false,
        "correction": "Faux. Elles apportent au contraire une protection passive dans les premiers mois."
      },
      {
        "text": "Le passage exige que le fœtus synthétise déjà toutes ses IgG.",
        "correct": false,
        "correction": "Faux. Le principe est précisément de transférer des IgG maternelles déjà formées."
      },
      {
        "text": "Le modèle historique chez la souris concernait le transfert intestinal à partir du lait maternel.",
        "correct": true,
        "correction": "Vrai. Ce modèle murin a précédé la description du passage placentaire humain."
      }
    ],
    "explanation": "Le cours oppose l’observation historique du passage intestinal chez la souris au passage transplacentaire chez l’homme."
  },
  {
    "id": 7,
    "type": "QCM",
    "question": "Quel scientifique est cité pour avoir conceptualisé le récepteur qui protège les IgG et favorise leur transmission ?",
    "options": [
      {
        "text": "Köhler",
        "correct": false,
        "correction": "Faux. Ce nom n’est pas associé à l’hypothèse initiale dans le cours."
      },
      {
        "text": "Brambell",
        "correct": true,
        "correction": "Vrai. Brambell a imaginé ses fonctions avant leur description expérimentale."
      },
      {
        "text": "Pasteur",
        "correct": false,
        "correction": "Faux. Pasteur n’est pas l’auteur cité dans ce passage."
      },
      {
        "text": "Burnet",
        "correct": false,
        "correction": "Faux. Le document attribue l’idée à Brambell."
      },
      {
        "text": "Jerne",
        "correct": false,
        "correction": "Faux. Ce nom n’est pas donné comme découvreur conceptuel du FcRn."
      }
    ],
    "explanation": "Le Dr Brambell est présenté comme ayant proposé les grandes fonctions du FcRn avant leur confirmation expérimentale."
  },
  {
    "id": 8,
    "type": "QRM",
    "question": "Quelles propositions concernent la découverte du FcRn telle que présentée dans la ronéo ?",
    "options": [
      {
        "text": "Brambell en a formulé l’hypothèse avant une démonstration expérimentale complète.",
        "correct": true,
        "correction": "Vrai. La découverte est d’abord conceptuelle selon le support."
      },
      {
        "text": "Le transfert intestinal d’IgG du lait au nouveau-né a été décrit initialement chez l’homme",
        "correct": false,
        "correction": "Faux. Le modèle cité pour ce transfert intestinal est la souris."
      },
      {
        "text": "Chez l’humain, le passage transplacentaire a été décrit.",
        "correct": true,
        "correction": "Vrai. C’est la voie humaine mentionnée."
      },
      {
        "text": "Le cours le présente comme absent de tous les autres mammifères.",
        "correct": false,
        "correction": "Faux. Le support dit qu’il est présent chez la plupart des mammifères."
      },
      {
        "text": "Ses mécanismes ont été mieux établis après isolement et clonage du récepteur.",
        "correct": true,
        "correction": "Vrai. L’isolement, la caractérisation et le clonage ont permis de comprendre les mécanismes."
      }
    ],
    "explanation": "L’histoire du FcRn relie une hypothèse de protection/transfert des IgG à des modèles animaux et à la caractérisation moléculaire."
  },
  {
    "id": 9,
    "type": "QCM",
    "question": "Quelle valeur de demi-vie le support donne-t-il pour une IgG classique ?",
    "options": [
      {
        "text": "Environ 2 heures",
        "correct": false,
        "correction": "Faux. La durée indiquée est beaucoup plus longue."
      },
      {
        "text": "Environ 2 jours",
        "correct": false,
        "correction": "Faux. Le document contraste cette durée avec celle de nombreuses autres protéines."
      },
      {
        "text": "Environ 21 jours",
        "correct": true,
        "correction": "Vrai. C’est la durée indiquée dans l’introduction."
      },
      {
        "text": "Environ 6 mois",
        "correct": false,
        "correction": "Faux. Cette durée n’est pas celle indiquée pour les IgG."
      },
      {
        "text": "Environ 2 ans",
        "correct": false,
        "correction": "Faux. La demi-vie n’atteint pas plusieurs années selon le support."
      }
    ],
    "explanation": "La demi-vie de l’IgG est donnée à environ 21 jours ; l’albumine a également une demi-vie de l’ordre de 20 jours."
  },
  {
    "id": 10,
    "type": "QRM",
    "question": "Quelles données quantitatives ou notions de durée figurent dans le support ?",
    "options": [
      {
        "text": "Une concentration d’IgG de l’ordre de 12 g/L est citée.",
        "correct": true,
        "correction": "Vrai. C’est le chiffre repris dans le texte."
      },
      {
        "text": "Une concentration d’albumine de l’ordre de 40 g/L est citée.",
        "correct": true,
        "correction": "Vrai. C’est l’ordre de grandeur cité."
      },
      {
        "text": "Les IgG ont une demi-vie de 21 heures selon le support",
        "correct": false,
        "correction": "Faux. Le support indique 21 jours et non 21 heures."
      },
      {
        "text": "L’albumine est décrite comme une protéine obligatoirement détruite après 1 heure.",
        "correct": false,
        "correction": "Faux. Le support décrit au contraire une longue demi-vie."
      },
      {
        "text": "Le FcRn limite le besoin de synthèse permanente de ces protéines abondantes.",
        "correct": true,
        "correction": "Vrai. Le recyclage évite un renouvellement continu très coûteux en énergie."
      }
    ],
    "explanation": "Les IgG et l’albumine sont abondantes et de longue demi-vie ; le recyclage par FcRn contribue à cette économie."
  },
  {
    "id": 11,
    "type": "QCM",
    "question": "À quel pH le cours situe-t-il la fixation privilégiée des IgG sur le FcRn ?",
    "options": [
      {
        "text": "pH 2",
        "correct": false,
        "correction": "Faux. Le cours prend comme référence un pH endosomal acide voisin de 6, pas 2."
      },
      {
        "text": "pH 6",
        "correct": true,
        "correction": "Vrai. Le pH acide voisin de 6 favorise la fixation."
      },
      {
        "text": "pH 7,4",
        "correct": false,
        "correction": "Faux. À pH physiologique, la liaison se défait et les IgG sont relarguées."
      },
      {
        "text": "pH 9",
        "correct": false,
        "correction": "Faux. Un milieu basique n’est pas la condition décrite."
      },
      {
        "text": "Indépendamment du pH",
        "correct": false,
        "correction": "Faux. La dépendance au pH est un point central du mécanisme."
      }
    ],
    "explanation": "La fixation se produit dans les endosomes acidifiés, puis le relargage survient en milieu extracellulaire de pH physiologique."
  },
  {
    "id": 12,
    "type": "QRM",
    "question": "Quelles étapes appartiennent au cycle de recyclage des IgG décrit dans le cours ?",
    "options": [
      {
        "text": "Entrée des IgG dans des compartiments endosomaux.",
        "correct": true,
        "correction": "Vrai. Le récepteur rencontre ses ligands dans les endosomes."
      },
      {
        "text": "Acidification des endosomes permettant la fixation au FcRn.",
        "correct": true,
        "correction": "Vrai. La baisse du pH rend possible la liaison."
      },
      {
        "text": "La liaison des IgG au FcRn les destine systématiquement à la digestion lysosomale",
        "correct": false,
        "correction": "Faux. La fixation les protège de la dégradation."
      },
      {
        "text": "Les IgG sont relarguées uniquement quand le pH extracellulaire reste très acide",
        "correct": false,
        "correction": "Faux. Le relargage se produit lors du retour au pH physiologique."
      },
      {
        "text": "Dégradation obligatoire des IgG liées dans le lysosome avant leur sortie.",
        "correct": false,
        "correction": "Faux. Ce sont surtout les protéines non protégées qui suivent la voie de dégradation."
      }
    ],
    "explanation": "Le FcRn trie les IgG : capture à pH acide, protection intracytoplasmique, recyclage et relargage en surface."
  },
  {
    "id": 13,
    "type": "QCM",
    "question": "Dans le schéma de recyclage, que deviennent préférentiellement les protéines endocytées qui ne se fixent pas au FcRn ?",
    "options": [
      {
        "text": "Elles sont systématiquement transcrites en ARN.",
        "correct": false,
        "correction": "Faux. L’endocytose ne correspond pas à une transcription."
      },
      {
        "text": "Elles sont dirigées vers la dégradation lysosomale.",
        "correct": true,
        "correction": "Vrai. Sans protection par le FcRn, la voie lysosomale reste possible."
      },
      {
        "text": "Elles sont transformées en IgG1.",
        "correct": false,
        "correction": "Faux. Le recyclage ne modifie pas la classe d’une protéine."
      },
      {
        "text": "Elles rejoignent les chromosomes.",
        "correct": false,
        "correction": "Faux. Aucun transfert au génome n’est décrit."
      },
      {
        "text": "Elles se fixent directement aux cellules NK.",
        "correct": false,
        "correction": "Faux. Les NK ne sont pas un compartiment de tri endosomal."
      }
    ],
    "explanation": "L’économie du FcRn repose sur la sélection des ligands recyclés par rapport aux protéines qui seront dégradées."
  },
  {
    "id": 14,
    "type": "QRM",
    "question": "Concernant la localisation et la fonction intracellulaire du FcRn, quelles propositions sont retenues ?",
    "options": [
      {
        "text": "Le cours situe environ 95 % du FcRn sur la surface plasmique",
        "correct": false,
        "correction": "Faux. La proportion de 95 % concerne la localisation endosomale."
      },
      {
        "text": "Le FcRn est très peu présent à la membrane cellulaire au repos.",
        "correct": true,
        "correction": "Vrai. Son profil diffère des FcγR membranaires."
      },
      {
        "text": "La fonction de recyclage protège IgG et albumine.",
        "correct": true,
        "correction": "Vrai. Les deux ligands bénéficient du recyclage décrit."
      },
      {
        "text": "Le FcRn ne fonctionne que dans la lumière du noyau.",
        "correct": false,
        "correction": "Faux. La localisation majoritaire est endosomale et non nucléaire."
      },
      {
        "text": "La transcytose permet un transport entre compartiments.",
        "correct": true,
        "correction": "Vrai. Le document associe la transcytose au passage à travers les cellules."
      }
    ],
    "explanation": "Le FcRn est principalement endosomal et participe à deux voies : recyclage et transcytose."
  },
  {
    "id": 15,
    "type": "QCM",
    "question": "Quelle sous-classe d’IgG est signalée comme exception à l’allongement de demi-vie par le recyclage dans ce support ?",
    "options": [
      {
        "text": "IgG1",
        "correct": false,
        "correction": "Faux. La ronéo ne cite pas IgG1 comme exception."
      },
      {
        "text": "IgG2",
        "correct": false,
        "correction": "Faux. IgG2 n’est pas l’exception mentionnée."
      },
      {
        "text": "IgG3",
        "correct": true,
        "correction": "Vrai. Le passage sur le recyclage signale spécifiquement les IgG3."
      },
      {
        "text": "IgG4",
        "correct": false,
        "correction": "Faux. IgG4 n’est pas l’exception mentionnée."
      },
      {
        "text": "Toutes les sous-classes y répondent identiquement sans exception",
        "correct": false,
        "correction": "Faux. La ronéo apporte explicitement une exception."
      }
    ],
    "explanation": "Le texte signale les IgG3 comme ne bénéficiant pas de l’allongement de demi-vie évoqué dans cette section."
  },
  {
    "id": 16,
    "type": "QRM",
    "question": "Quelles affirmations distinguent correctement recyclage et transcytose dans la présentation du cours ?",
    "options": [
      {
        "text": "Le recyclage renvoie des ligands vers l’extérieur en évitant leur dégradation.",
        "correct": true,
        "correction": "Vrai. C’est la fonction de protection de demi-vie."
      },
      {
        "text": "La transcytose correspond au passage vers un autre compartiment à travers la cellule.",
        "correct": true,
        "correction": "Vrai. C’est le transport transcellulaire décrit."
      },
      {
        "text": "Le passage placentaire n’est pas une transcytose",
        "correct": false,
        "correction": "Faux. Le cours cite le placenta comme exemple de transcytose."
      },
      {
        "text": "La dégradation lysosomale des IgG liées est la définition de la transcytose.",
        "correct": false,
        "correction": "Faux. Le FcRn protège ses ligands de cette voie de dégradation."
      },
      {
        "text": "Le FcRn n’interagit avec aucun anticorps thérapeutique",
        "correct": false,
        "correction": "Faux. Leurs régions Fc sont prises en charge comme celles des IgG."
      }
    ],
    "explanation": "Les deux fonctions s’appuient sur la liaison au FcRn mais répondent à deux objectifs : persistance et biodistribution."
  },
  {
    "id": 17,
    "type": "QCM",
    "question": "À quoi correspond principalement la transcytose dans le cadre du FcRn ?",
    "options": [
      {
        "text": "La synthèse d’un nouvel anticorps",
        "correct": false,
        "correction": "Faux. Le FcRn ne réalise pas la biosynthèse des IgG."
      },
      {
        "text": "Le transport d’un ligand d’un côté à l’autre d’une cellule",
        "correct": true,
        "correction": "Vrai. Cette définition correspond au passage transcellulaire."
      },
      {
        "text": "La fusion irréversible de deux IgG",
        "correct": false,
        "correction": "Faux. Le mécanisme est un transfert, non une fusion des molécules."
      },
      {
        "text": "La conversion du Fc en Fab",
        "correct": false,
        "correction": "Faux. Le Fc et le Fab restent des parties distinctes de l’IgG."
      },
      {
        "text": "La destruction du ligand par les cellules NK",
        "correct": false,
        "correction": "Faux. Cette fonction ne se définit pas par une lyse NK."
      }
    ],
    "explanation": "La transcytose contribue à la distribution des IgG à travers certains épithéliums, notamment le placenta."
  },
  {
    "id": 18,
    "type": "QRM",
    "question": "Le cours donne quels rôles au FcRn en thérapeutique ?",
    "options": [
      {
        "text": "Le FcRn réduit systématiquement la demi-vie des anticorps thérapeutiques",
        "correct": false,
        "correction": "Faux. Il peut au contraire les protéger et prolonger leur demi-vie."
      },
      {
        "text": "Il peut intervenir dans leur biodistribution.",
        "correct": true,
        "correction": "Vrai. La transcytose influence la distribution entre compartiments."
      },
      {
        "text": "La modification de l’interface Fc–FcRn peut modifier leur pharmacocinétique.",
        "correct": true,
        "correction": "Vrai. Une modification d’affinité peut changer les profils PK."
      },
      {
        "text": "Il synthétise directement les anticorps anti-TNF injectés.",
        "correct": false,
        "correction": "Faux. Les anticorps thérapeutiques sont produits en amont, pas par le FcRn du patient."
      },
      {
        "text": "Il participe au transfert tissulaire de certains anticorps.",
        "correct": true,
        "correction": "Vrai. C’est un rôle cité pour le transport à travers les tissus."
      }
    ],
    "explanation": "La liaison Fc–FcRn est un levier de modification de la pharmacocinétique et de l’effet des biomédicaments."
  },
  {
    "id": 19,
    "type": "QCM",
    "question": "Quel paramètre désigne la concentration et le devenir de l’anticorps thérapeutique dans le cadre PK/PD du cours ?",
    "options": [
      {
        "text": "La pharmacodynamie seule",
        "correct": false,
        "correction": "Faux. La PD concerne davantage l’effet du médicament."
      },
      {
        "text": "La pharmacocinétique",
        "correct": true,
        "correction": "Vrai. La PK traite notamment des concentrations et de la distribution dans le temps."
      },
      {
        "text": "La présentation antigénique",
        "correct": false,
        "correction": "Faux. Ce mécanisme immunologique ne définit pas la PK."
      },
      {
        "text": "Le paratope",
        "correct": false,
        "correction": "Faux. C’est la région reconnaissant l’antigène."
      },
      {
        "text": "L’hématopoïèse",
        "correct": false,
        "correction": "Faux. La production de cellules sanguines est sans rapport avec cette définition."
      }
    ],
    "explanation": "La PK décrit ce que devient le médicament ; le cours la relie à la concentration sanguine, puis à la réponse PD."
  },
  {
    "id": 20,
    "type": "QRM",
    "question": "Quelles sources de variabilité interindividuelle des anticorps thérapeutiques sont citées ?",
    "options": [
      {
        "text": "Le poids du patient.",
        "correct": true,
        "correction": "Vrai. Il peut modifier la distribution et les doses adaptées."
      },
      {
        "text": "Le sexe du patient.",
        "correct": true,
        "correction": "Vrai. Le document le cite parmi les facteurs."
      },
      {
        "text": "L’inflammation ou la masse antigénique.",
        "correct": true,
        "correction": "Vrai. L’état inflammatoire et la charge en cible modifient la relation dose-effet."
      },
      {
        "text": "Les médicaments administrés simultanément.",
        "correct": true,
        "correction": "Vrai. Des associations médicamenteuses peuvent modifier la réponse."
      },
      {
        "text": "Uniquement la couleur du tube de prélèvement.",
        "correct": false,
        "correction": "Faux. La ronéo ne présente pas ce facteur comme déterminant PK/PD."
      }
    ],
    "explanation": "Plusieurs paramètres du patient et de sa maladie influencent la PK et les effets des anticorps."
  },
  {
    "id": 21,
    "type": "QCM",
    "question": "Quelle famille de cellules effectrices est citée pour expliquer une partie de la variabilité des effets des anticorps ?",
    "options": [
      {
        "text": "Les cellules NK",
        "correct": true,
        "correction": "Vrai. Les NK peuvent intervenir via des récepteurs Fc et leur polymorphisme CD16."
      },
      {
        "text": "Les érythrocytes matures",
        "correct": false,
        "correction": "Faux. Les GR ne sont pas la population effectrice citée ici."
      },
      {
        "text": "Les fibroblastes uniquement",
        "correct": false,
        "correction": "Faux. Le support ne limite pas les cellules effectrices aux fibroblastes."
      },
      {
        "text": "Les cellules ciliées nasales",
        "correct": false,
        "correction": "Faux. Ce n’est pas la population mise en avant."
      },
      {
        "text": "Les kératinocytes uniquement",
        "correct": false,
        "correction": "Faux. Ce n’est pas le mécanisme retenu dans ce passage."
      }
    ],
    "explanation": "Le cours relie les effets des anticorps aux cellules effectrices, notamment NK, et à la variabilité des récepteurs FcγIII/CD16."
  },
  {
    "id": 22,
    "type": "QRM",
    "question": "Concernant les déterminants des effets d’un anticorps thérapeutique, quelles propositions sont exactes selon le support ?",
    "options": [
      {
        "text": "La pharmacocinétique et la pharmacodynamie peuvent varier entre patients.",
        "correct": true,
        "correction": "Vrai. Le document insiste sur cette variabilité interindividuelle."
      },
      {
        "text": "Les récepteurs Fcγ sont exclusivement intracellulaires dans le cours",
        "correct": false,
        "correction": "Faux. Ils sont décrits comme membranaires, contrairement à FcRn."
      },
      {
        "text": "Un polymorphisme de CD16/FcγIII est évoqué.",
        "correct": true,
        "correction": "Vrai. Ce polymorphisme est explicitement mentionné."
      },
      {
        "text": "Les anticorps thérapeutiques ont toujours exactement la même PK que les petites molécules.",
        "correct": false,
        "correction": "Faux. Les anticorps sont de grosses molécules qui ont des récepteurs dédiés."
      },
      {
        "text": "Le FcRn peut agir sur la PK en protégeant les IgG.",
        "correct": true,
        "correction": "Vrai. Leur recyclage influence leur persistance circulante."
      }
    ],
    "explanation": "Le cours distingue les effets via FcγR et la modulation des concentrations via FcRn."
  },
  {
    "id": 23,
    "type": "QCM",
    "question": "Où le support situe-t-il le site de liaison du FcRn sur le fragment Fc des IgG ?",
    "options": [
      {
        "text": "Entre CH2 et CH3",
        "correct": true,
        "correction": "Vrai. Le FcRn reconnaît l’interface CH2–CH3 du Fc."
      },
      {
        "text": "Dans le paratope",
        "correct": false,
        "correction": "Faux. Le paratope reconnaît l’antigène, non le FcRn."
      },
      {
        "text": "Sur le domaine DIII de l’albumine",
        "correct": false,
        "correction": "Faux. DIII est le site de liaison de l’albumine."
      },
      {
        "text": "Sur la chaîne légère seule",
        "correct": false,
        "correction": "Faux. La liaison décrite implique le fragment Fc des chaînes lourdes."
      },
      {
        "text": "Exclusivement à l’extrémité du Fab",
        "correct": false,
        "correction": "Faux. Le Fab intervient dans la reconnaissance de la cible."
      }
    ],
    "explanation": "L’interface CH2–CH3 du Fc est le site mentionné pour l’interaction avec le FcRn."
  },
  {
    "id": 24,
    "type": "QRM",
    "question": "Sur la structure d’un anticorps et ses partenaires, quelles affirmations sont rapportées ?",
    "options": [
      {
        "text": "Un anticorps comprend deux chaînes lourdes et deux chaînes légères.",
        "correct": true,
        "correction": "Vrai. C’est la composition décrite."
      },
      {
        "text": "Son paratope reconnaît un épitope.",
        "correct": true,
        "correction": "Vrai. Il s’agit du couple paratope–épitope."
      },
      {
        "text": "Le fragment Fc peut interagir avec C1q et des récepteurs Fc.",
        "correct": true,
        "correction": "Vrai. Le Fc permet différents recrutements fonctionnels."
      },
      {
        "text": "La partie Fab a pour rôle principal de recycler l’albumine.",
        "correct": false,
        "correction": "Faux. Le transport de l’albumine relève du FcRn, pas du Fab."
      },
      {
        "text": "Les anticorps thérapeutiques sont principalement des IgM pentamériques selon le cours",
        "correct": false,
        "correction": "Faux. Le format majoritaire indiqué est IgG1."
      }
    ],
    "explanation": "La structure bifonctionnelle explique le ciblage par le Fab et les effets/PK par le Fc."
  },
  {
    "id": 25,
    "type": "QCM",
    "question": "Quelle localisation du FcRn est invoquée pour limiter la présence excessive d’IgG dans le cerveau ?",
    "options": [
      {
        "text": "La barrière hémato-encéphalique",
        "correct": true,
        "correction": "Vrai. Au niveau de la BHE, le cours décrit le renvoi d’IgG du LCR vers le sang."
      },
      {
        "text": "La moelle épinière uniquement",
        "correct": false,
        "correction": "Faux. Ce n’est pas la localisation mise en avant."
      },
      {
        "text": "Le cristallin",
        "correct": false,
        "correction": "Faux. Le cristallin ne correspond pas au site cité."
      },
      {
        "text": "L’os cortical",
        "correct": false,
        "correction": "Faux. L’os cortical n’est pas le mécanisme décrit."
      },
      {
        "text": "Le cartilage articulaire",
        "correct": false,
        "correction": "Faux. Le cartilage n’est pas présenté comme la barrière concernée."
      }
    ],
    "explanation": "Le FcRn est décrit à la BHE comme participant à l’efflux des IgG du LCR vers la circulation périphérique."
  },
  {
    "id": 26,
    "type": "QRM",
    "question": "Quels tissus ou types cellulaires sont cités comme sites d’expression du FcRn ?",
    "options": [
      {
        "text": "Endothélium vasculaire.",
        "correct": true,
        "correction": "Vrai. Il contribue ici au recyclage et à la transcytose."
      },
      {
        "text": "Cellules épithéliales intestinales.",
        "correct": true,
        "correction": "Vrai. L’épithélium intestinal fait partie des sites décrits."
      },
      {
        "text": "Le FcRn ne s’exprime jamais dans le placenta",
        "correct": false,
        "correction": "Faux. La distribution mentionne explicitement le placenta."
      },
      {
        "text": "Le FcRn est absent des podocytes glomérulaires",
        "correct": false,
        "correction": "Faux. Le rein et ses podocytes figurent parmi les sites cités."
      },
      {
        "text": "Exclusivement les lymphocytes B.",
        "correct": false,
        "correction": "Faux. Le récepteur est décrit comme ubiquitaire, non réservé aux LB."
      }
    ],
    "explanation": "Le FcRn est presque ubiquitaire, avec des rôles dans le placenta, les épithéliums, l’endothélium et les cellules immunitaires."
  },
  {
    "id": 27,
    "type": "QCM",
    "question": "À quelle famille structurale le FcRn est-il comparé dans le cours ?",
    "options": [
      {
        "text": "Aux canaux potassiques",
        "correct": false,
        "correction": "Faux. Le support n’emploie pas cette analogie."
      },
      {
        "text": "Aux molécules de CMH de classe I",
        "correct": true,
        "correction": "Vrai. Le FcRn est décrit comme « classe I-like »."
      },
      {
        "text": "Aux récepteurs nucléaires stéroïdiens",
        "correct": false,
        "correction": "Faux. Cette comparaison n’est pas celle retenue."
      },
      {
        "text": "Aux immunoglobulines IgM pentamériques",
        "correct": false,
        "correction": "Faux. Le FcRn est un récepteur distinct des IgM."
      },
      {
        "text": "Aux intégrines αIIbβ3",
        "correct": false,
        "correction": "Faux. Ce complexe plaquettaire ne correspond pas à sa structure."
      }
    ],
    "explanation": "Le FcRn est apparenté structurellement au CMH I et associé à la β2-microglobuline."
  },
  {
    "id": 28,
    "type": "QRM",
    "question": "Quelles caractéristiques structurales ou fonctionnelles du FcRn sont indiquées ?",
    "options": [
      {
        "text": "Le FcRn est composé uniquement de chaînes légères d’immunoglobuline",
        "correct": false,
        "correction": "Faux. Le cours décrit une chaîne α associée à la β2-microglobuline."
      },
      {
        "text": "Il s’associe à la β2-microglobuline.",
        "correct": true,
        "correction": "Vrai. Cette association figure dans la description structurale."
      },
      {
        "text": "Le gène de sa chaîne α est situé sur le chromosome 19 chez l’humain.",
        "correct": true,
        "correction": "Vrai. C’est le chromosome humain donné dans la ronéo."
      },
      {
        "text": "Il présente directement des peptides aux LT comme les molécules classiques du CMH.",
        "correct": false,
        "correction": "Faux. Le cours indique que sa cavité est non fonctionnelle pour une présentation directe aux LT."
      },
      {
        "text": "La structure est qualifiée de « CMH de classe I-like ».",
        "correct": true,
        "correction": "Vrai. La ressemblance structurale est explicitement mentionnée."
      }
    ],
    "explanation": "Le FcRn ressemble au CMH I, mais le support le distingue des molécules présentatrices de peptide aux LT."
  },
  {
    "id": 29,
    "type": "QCM",
    "question": "Quel groupe de résidus est particulièrement important pour la liaison IgG–FcRn dépendante du pH ?",
    "options": [
      {
        "text": "Sérines 10, 11 et 12",
        "correct": false,
        "correction": "Faux. Le support ne met pas ce triplet au premier plan."
      },
      {
        "text": "Histidines 310, 433 et 435",
        "correct": true,
        "correction": "Vrai. Ces histidines sont citées pour leur protonation en milieu acide."
      },
      {
        "text": "Glycines 1 et 2",
        "correct": false,
        "correction": "Faux. Ce ne sont pas les résidus désignés dans ce mécanisme."
      },
      {
        "text": "Cystéines du domaine DIII de l’albumine",
        "correct": false,
        "correction": "Faux. DIII concerne l’albumine et non ces histidines de l’IgG."
      },
      {
        "text": "Acides gras du plasma",
        "correct": false,
        "correction": "Faux. La liaison met en jeu des acides aminés, pas des acides gras circulants."
      }
    ],
    "explanation": "La protonation de résidus histidine en milieu acide permet la fixation réversible des IgG au FcRn."
  },
  {
    "id": 30,
    "type": "QRM",
    "question": "Concernant les interfaces moléculaires entre IgG et FcRn, quelles propositions sont exactes ?",
    "options": [
      {
        "text": "Les résidus His310, His433 et His435 sont cités dans l’IgG.",
        "correct": true,
        "correction": "Vrai. Leur protonation est reliée à la dépendance au pH."
      },
      {
        "text": "Le site de liaison IgG est situé entre CH2 et CH3 du Fc.",
        "correct": true,
        "correction": "Vrai. Il s’agit de l’interface Fc décrite."
      },
      {
        "text": "La β2-microglobuline n’intervient pas dans la zone d’interaction FcRn–IgG",
        "correct": false,
        "correction": "Faux. Une portion N-terminale de β2m est citée dans l’interface."
      },
      {
        "text": "L’interaction est irréversible en revenant au pH physiologique.",
        "correct": false,
        "correction": "Faux. Le relargage à pH neutre rend la liaison réversible."
      },
      {
        "text": "Des mutations d’acides aminés peuvent modifier l’affinité.",
        "correct": true,
        "correction": "Vrai. Certaines modifications augmentent, d’autres réduisent la liaison."
      }
    ],
    "explanation": "Le contact Fc–FcRn est précisément cartographié ; une ingénierie ciblée des résidus change la pharmacocinétique."
  },
  {
    "id": 31,
    "type": "QCM",
    "question": "Quel est le site de l’albumine impliqué dans sa liaison au FcRn ?",
    "options": [
      {
        "text": "Le domaine Fab",
        "correct": false,
        "correction": "Faux. Le Fab est une partie de l’anticorps, pas de l’albumine."
      },
      {
        "text": "Le domaine DIII",
        "correct": true,
        "correction": "Vrai. DIII est le domaine d’albumine décrit comme important."
      },
      {
        "text": "Le domaine CH3 d’une IgM",
        "correct": false,
        "correction": "Faux. L’albumine n’a pas de domaine CH3 d’immunoglobuline."
      },
      {
        "text": "Le récepteur CD16",
        "correct": false,
        "correction": "Faux. CD16 est un récepteur Fcγ."
      },
      {
        "text": "Le paratope des IgG1",
        "correct": false,
        "correction": "Faux. Le paratope lie un antigène, pas l’albumine à FcRn."
      }
    ],
    "explanation": "L’albumine interagit avec le FcRn via son domaine DIII, distinct du site Fc d’IgG."
  },
  {
    "id": 32,
    "type": "QRM",
    "question": "Quelles différences entre liaison de l’albumine et des IgG au FcRn sont mentionnées ?",
    "options": [
      {
        "text": "L’albumine se fixe exactement sur le même site du FcRn que les IgG",
        "correct": false,
        "correction": "Faux. Les sites sont différents."
      },
      {
        "text": "La fixation d’une IgG interdit mécaniquement toute liaison simultanée d’albumine",
        "correct": false,
        "correction": "Faux. Le support indique que la fixation des deux ligands peut coexister."
      },
      {
        "text": "Pour l’albumine, l’histidine 166 importante est située sur le FcRn.",
        "correct": true,
        "correction": "Vrai. Le support oppose cette histidine du récepteur à celles de l’IgG."
      },
      {
        "text": "Le domaine DIII de l’albumine est impliqué.",
        "correct": true,
        "correction": "Vrai. Il s’agit du domaine de liaison décrit."
      },
      {
        "text": "Les IgG et l’albumine utilisent exactement le même paratope.",
        "correct": false,
        "correction": "Faux. Ni l’albumine ni le FcRn n’utilisent le paratope de l’anticorps pour cette liaison."
      }
    ],
    "explanation": "Les deux sites distincts rendent possible la prise en charge simultanée d’une IgG et d’une albumine."
  },
  {
    "id": 33,
    "type": "QCM",
    "question": "Dans le cours, quel procédé permet d’allonger la demi-vie de certaines protéines thérapeutiques comme les facteurs VIII ou IX ?",
    "options": [
      {
        "text": "Les fusionner à un Fc d’IgG ou à un domaine de l’albumine",
        "correct": true,
        "correction": "Vrai. Ces fusions tirent profit du recyclage par FcRn."
      },
      {
        "text": "Éliminer toutes leurs séquences protéiques",
        "correct": false,
        "correction": "Faux. Cela détruirait la protéine plutôt que d’allonger sa demi-vie."
      },
      {
        "text": "Les lier irréversiblement à l’ADN des noyaux",
        "correct": false,
        "correction": "Faux. Ce n’est pas la technologie décrite."
      },
      {
        "text": "Les faire absorber par des lysosomes",
        "correct": false,
        "correction": "Faux. La dégradation lysosomale réduit leur durée de vie."
      },
      {
        "text": "Bloquer leurs interactions avec FcRn",
        "correct": false,
        "correction": "Faux. Le mécanisme recherché est au contraire une interaction utile avec FcRn."
      }
    ],
    "explanation": "Le couplage aux domaines Fc/albumine peut diminuer la fréquence des injections de protéines thérapeutiques."
  },
  {
    "id": 34,
    "type": "QRM",
    "question": "Concernant l’utilisation thérapeutique du domaine Fc ou de l’albumine, quelles propositions suivent le cours ?",
    "options": [
      {
        "text": "La fusion au Fc peut prolonger la demi-vie de protéines thérapeutiques.",
        "correct": true,
        "correction": "Vrai. Le Fc permet d’utiliser le recyclage endosomal."
      },
      {
        "text": "La fusion au domaine DIII de l’albumine diminue obligatoirement la demi-vie des protéines",
        "correct": false,
        "correction": "Faux. Elle est étudiée précisément pour prolonger leur persistance."
      },
      {
        "text": "Les facteurs VIII et IX sont cités comme exemples dans l’hémophilie.",
        "correct": true,
        "correction": "Vrai. Il s’agit des protéines injectées dans cette pathologie."
      },
      {
        "text": "Le but recherché est de multiplier les injections quotidiennes sans nécessité.",
        "correct": false,
        "correction": "Faux. Le cours présente au contraire une diminution de la fréquence d’injection."
      },
      {
        "text": "Des cytokines peuvent également être envisagées dans ces stratégies.",
        "correct": true,
        "correction": "Vrai. Cette extension est évoquée dans le texte."
      }
    ],
    "explanation": "L’ingénierie de fusions protéiques exploite la persistance prolongée conférée par le FcRn."
  },
  {
    "id": 35,
    "type": "QCM",
    "question": "Quel effet est observé chez les souris rendues déficientes pour le FcRn (FcRn−/−) ?",
    "options": [
      {
        "text": "Une forte augmentation systématique de la demi-vie des IgG",
        "correct": false,
        "correction": "Faux. L’absence du récepteur supprime une voie de protection."
      },
      {
        "text": "Une réduction de la demi-vie des IgG",
        "correct": true,
        "correction": "Vrai. Les IgG sont moins recyclées et persistent moins longtemps."
      },
      {
        "text": "La synthèse accélérée de la β2-microglobuline uniquement",
        "correct": false,
        "correction": "Faux. Ce n’est pas l’observation soulignée."
      },
      {
        "text": "La disparition de tous les lymphocytes T",
        "correct": false,
        "correction": "Faux. Le KO n’est pas décrit comme une ablation complète des LT."
      },
      {
        "text": "L’absence de toute modification des IgG",
        "correct": false,
        "correction": "Faux. Le cours décrit plusieurs conséquences du KO."
      }
    ],
    "explanation": "Le modèle KO FcRn−/− sert à montrer le rôle de protection des IgG et de l’albumine, ainsi que des fonctions immunitaires."
  },
  {
    "id": 36,
    "type": "QRM",
    "question": "Quels phénotypes sont attribués aux souris KO FcRn−/− dans le support ?",
    "options": [
      {
        "text": "Diminution du transport maternel des IgG vers le petit.",
        "correct": true,
        "correction": "Vrai. La fonction de transfert dépend du récepteur."
      },
      {
        "text": "La dégradation des IgG est ralentie chez les souris KO FcRn",
        "correct": false,
        "correction": "Faux. Leurs IgG sont dégradées trop rapidement."
      },
      {
        "text": "Le KO FcRn entraîne une hyperalbuminémie par protection accrue de l’albumine",
        "correct": false,
        "correction": "Faux. Le support signale une hypoalbuminémie."
      },
      {
        "text": "Altération de la phagocytose mentionnée dans le modèle.",
        "correct": true,
        "correction": "Vrai. Le cours cite aussi un défaut de phagocytose."
      },
      {
        "text": "Augmentation de la demi-vie des IgG par hyperrecyclage.",
        "correct": false,
        "correction": "Faux. Un KO supprime cette protection et raccourcit la demi-vie."
      }
    ],
    "explanation": "Ces observations montrent que le FcRn ne se limite pas à la transcytose et au recyclage : le cours lui attribue également un rôle immunologique."
  },
  {
    "id": 37,
    "type": "QCM",
    "question": "Dans une souris transgénique exprimant le FcRn humain, quel intérêt expérimental principal est recherché ?",
    "options": [
      {
        "text": "Empêcher toute fixation des IgG humaines",
        "correct": false,
        "correction": "Faux. Le but est justement de permettre cette fixation."
      },
      {
        "text": "Étudier la liaison et la PK d’anticorps humains avec un récepteur humain",
        "correct": true,
        "correction": "Vrai. Le modèle humainisé permet d’examiner l’affinité et ses conséquences."
      },
      {
        "text": "Produire systématiquement des IgM humaines",
        "correct": false,
        "correction": "Faux. Le support ne fait pas de cette production l’objectif du modèle."
      },
      {
        "text": "Supprimer toutes les cellules NK",
        "correct": false,
        "correction": "Faux. Les NK ne sont pas supprimées pour cette raison."
      },
      {
        "text": "Créer un modèle uniquement dédié au métabolisme glucidique",
        "correct": false,
        "correction": "Faux. Le modèle est conçu pour étudier des IgG thérapeutiques."
      }
    ],
    "explanation": "La souris transgénique hFcRn sert à tester des anticorps thérapeutiques humains et leurs variants d’affinité."
  },
  {
    "id": 38,
    "type": "QRM",
    "question": "À propos des modèles murins FcRn, quelles distinctions sont exactes ?",
    "options": [
      {
        "text": "Une souris KO n’exprime pas le gène inactivé.",
        "correct": true,
        "correction": "Vrai. Le principe du KO est l’inactivation du gène."
      },
      {
        "text": "Une souris hFcRn exprime un FcRn humain.",
        "correct": true,
        "correction": "Vrai. C’est la définition du modèle transgénique cité."
      },
      {
        "text": "Le FcRn murin est incapable de se lier aux IgG humaines selon le cours",
        "correct": false,
        "correction": "Faux. Le FcRn murin est décrit comme pouvant lier de nombreuses espèces, dont les IgG humaines."
      },
      {
        "text": "Le FcRn humain se lie très efficacement aux IgG murines selon le cours.",
        "correct": false,
        "correction": "Faux. La ronéo indique au contraire une mauvaise affinité des IgG murines pour le FcRn humain."
      },
      {
        "text": "Le modèle hFcRn permet de comparer IgG natives et variants modifiés.",
        "correct": true,
        "correction": "Vrai. Cette comparaison est au centre des essais présentés."
      }
    ],
    "explanation": "La différence d’affinité interespèces motive le choix de modèles transgéniques lors du développement de biomédicaments."
  },
  {
    "id": 39,
    "type": "QCM",
    "question": "Sur le tableau des variants de Fc d’IgG1 de la page 8, quel sens de variation du Kd traduit une meilleure affinité au FcRn ?",
    "options": [
      {
        "text": "Une augmentation systématique du Kd",
        "correct": false,
        "correction": "Faux. Le support associe une valeur plus faible à une liaison plus forte."
      },
      {
        "text": "Une diminution du Kd",
        "correct": true,
        "correction": "Vrai. Les variants plus affins présentent un Kd plus bas."
      },
      {
        "text": "Une disparition de toute liaison",
        "correct": false,
        "correction": "Faux. L’absence de liaison n’est pas une meilleure affinité."
      },
      {
        "text": "Un Kd nécessairement égal à zéro",
        "correct": false,
        "correction": "Faux. Le cours compare des valeurs non nulles."
      },
      {
        "text": "Le Kd n’a aucun lien avec l’affinité dans l’analyse",
        "correct": false,
        "correction": "Faux. Le texte explicite le lien entre Kd et affinité."
      }
    ],
    "explanation": "Le tableau compare IgG1 native et variants : diminuer Kd correspond ici à renforcer la liaison au FcRn."
  },
  {
    "id": 40,
    "type": "QRM",
    "question": "Quelles observations sont rapportées après ingénierie du Fc d’un anticorps anti-VEGF ?",
    "options": [
      {
        "text": "Certains variants présentent une meilleure affinité pour le FcRn.",
        "correct": true,
        "correction": "Vrai. Le tableau des constantes de dissociation illustre cette amélioration."
      },
      {
        "text": "La concentration circulante décroît plus lentement pour certains mutants.",
        "correct": true,
        "correction": "Vrai. Les courbes montrent une décroissance moins rapide."
      },
      {
        "text": "La demi-vie peut passer d’environ 8–9 jours à environ 30 jours dans les modèles présentés.",
        "correct": true,
        "correction": "Vrai. C’est l’ordre de grandeur explicitement indiqué."
      },
      {
        "text": "Le variant X-tend est étudié dans un modèle tumoral.",
        "correct": true,
        "correction": "Vrai. Le support rapporte ce mutant dans une expérience de xénogreffe."
      },
      {
        "text": "L’amélioration de la PK implique nécessairement une suppression complète de la cible VEGF.",
        "correct": false,
        "correction": "Faux. L’effet sur la cible ne consiste pas à la supprimer de l’organisme."
      }
    ],
    "explanation": "Le cours relie une ingénierie du Fc à une meilleure PK et examine ensuite si cela améliore l’efficacité."
  },
  {
    "id": 41,
    "type": "QCM",
    "question": "Quel anticorps anti-VEGF est utilisé comme modèle d’ingénierie de la région Fc dans le cours ?",
    "options": [
      {
        "text": "Infliximab",
        "correct": false,
        "correction": "Faux. Il s’agit dans le cours d’un anticorps anti-TNF."
      },
      {
        "text": "Bevacizumab",
        "correct": true,
        "correction": "Vrai. C’est l’anticorps anti-VEGF dont les variants Fc sont comparés."
      },
      {
        "text": "Cetuximab",
        "correct": false,
        "correction": "Faux. Ce nom est utilisé dans l’étude des allotypes."
      },
      {
        "text": "Rituximab",
        "correct": false,
        "correction": "Faux. Ce nom apparaît dans les tests de compétition."
      },
      {
        "text": "Adalimumab",
        "correct": false,
        "correction": "Faux. Cet anticorps sert plus tard à tester des variantes d’allotypes."
      }
    ],
    "explanation": "Les figures des pages 8–10 comparent plusieurs variants de Fc du bevacizumab."
  },
  {
    "id": 42,
    "type": "QRM",
    "question": "Concernant les figures sur les variantes Fc du bevacizumab, quelles informations sont correctes ?",
    "options": [
      {
        "text": "Les variants S, IF, YTE, LS et IFL sont comparés à une IgG1 native.",
        "correct": true,
        "correction": "Vrai. Ils figurent dans le tableau comparatif de la page 8."
      },
      {
        "text": "Le variant YTE porte les substitutions M252Y/S254T/T256E.",
        "correct": true,
        "correction": "Vrai. Cette suite de substitutions est écrite dans la ligne YTE."
      },
      {
        "text": "Le variant LS est appelé « ABDEG » dans le tableau de la page 8",
        "correct": false,
        "correction": "Faux. Le variant LS est nommé X-tend dans ce tableau."
      },
      {
        "text": "Leurs paramètres d’association/dissociation sont évalués à pH 6.",
        "correct": true,
        "correction": "Vrai. Le tableau précise pH 6,0 pour les paramètres de liaison."
      },
      {
        "text": "Le variant IgG1 natif est indiqué comme ayant le meilleur gain d’affinité du tableau.",
        "correct": false,
        "correction": "Faux. L’IgG1 native sert de référence, tandis que des variants ont de meilleurs gains."
      }
    ],
    "explanation": "La page 8 associe séquences mutées, paramètres SPR et gains d’affinité par rapport à l’IgG1 native."
  },
  {
    "id": 43,
    "type": "QCM",
    "question": "Dans le modèle de tumeur xénogreffée décrit, que compare-t-on pour estimer l’efficacité de l’anticorps anti-VEGF ?",
    "options": [
      {
        "text": "La longueur des télomères",
        "correct": false,
        "correction": "Faux. Ce paramètre n’est pas la lecture de l’expérience."
      },
      {
        "text": "La croissance de la taille tumorale au cours du temps",
        "correct": true,
        "correction": "Vrai. La courbe de croissance tumorale compare les traitements."
      },
      {
        "text": "Le nombre de chromosomes fœtaux",
        "correct": false,
        "correction": "Faux. Aucune analyse prénatale n’est ici décrite."
      },
      {
        "text": "La consommation d’albumine alimentaire",
        "correct": false,
        "correction": "Faux. Il ne s’agit pas d’un protocole nutritionnel."
      },
      {
        "text": "La couleur du sérum uniquement",
        "correct": false,
        "correction": "Faux. L’objectif est la réponse tumorale, pas la couleur du sérum."
      }
    ],
    "explanation": "La diminution de croissance tumorale sous anticorps modifié est le critère présenté pour tester l’effet d’une meilleure PK."
  },
  {
    "id": 44,
    "type": "QRM",
    "question": "Que montre le protocole de xénogreffe tumorale avec anti-VEGF et X-tend dans le support ?",
    "options": [
      {
        "text": "Sans anticorps anti-VEGF, la tumeur grossit rapidement.",
        "correct": true,
        "correction": "Vrai. C’est le témoin de croissance cité."
      },
      {
        "text": "Un anticorps anti-VEGF non modifié freine la croissance tumorale.",
        "correct": true,
        "correction": "Vrai. L’effet inhibiteur du traitement est décrit."
      },
      {
        "text": "Un variant avec meilleure affinité FcRn peut freiner davantage la croissance.",
        "correct": true,
        "correction": "Vrai. Le renforcement de l’affinité est associé à une meilleure efficacité dans le modèle."
      },
      {
        "text": "L’expérience utilise un modèle murin sans intervention de son système immunitaire.",
        "correct": true,
        "correction": "Vrai. Le texte précise ce choix de modèle pour limiter l’interférence immunitaire."
      },
      {
        "text": "L’anticorps X-tend stimule volontairement l’angiogenèse tumorale.",
        "correct": false,
        "correction": "Faux. La cible VEGF est liée à l’angiogenèse ; l’objectif est de la bloquer."
      }
    ],
    "explanation": "Cette expérience relie l’amélioration de demi-vie/biodistribution à un bénéfice thérapeutique mesuré sur la tumeur."
  },
  {
    "id": 45,
    "type": "QCM",
    "question": "Dans la technologie ABDEG décrite, quel est l’objectif du blocage compétitif du FcRn ?",
    "options": [
      {
        "text": "Augmenter toutes les IgG endogènes",
        "correct": false,
        "correction": "Faux. L’objectif est plutôt de faire baisser les IgG endogènes."
      },
      {
        "text": "Favoriser l’élimination des IgG endogènes, notamment auto-anticorps",
        "correct": true,
        "correction": "Vrai. Une liaison compétitive de haute affinité peut empêcher leur recyclage."
      },
      {
        "text": "Bloquer toute fabrication de facteurs VIII et IX",
        "correct": false,
        "correction": "Faux. Ces facteurs de coagulation ne sont pas l’objectif de la technologie citée."
      },
      {
        "text": "Transformer les IgG en IgM",
        "correct": false,
        "correction": "Faux. Le mécanisme ne modifie pas la classe d’immunoglobuline."
      },
      {
        "text": "Favoriser l’entrée des virus par le placenta",
        "correct": false,
        "correction": "Faux. Le protocole décrit une modulation du recyclage d’IgG."
      }
    ],
    "explanation": "ABDEG utilise des anticorps modifiés à forte affinité pour détourner le FcRn et accélérer l’élimination d’IgG endogènes."
  },
  {
    "id": 46,
    "type": "QRM",
    "question": "Concernant la stratégie ABDEG exposée dans le cours, quelles propositions sont présentes ?",
    "options": [
      {
        "text": "La technologie ABDEG supprime le FcRn de toutes les cellules du patient",
        "correct": false,
        "correction": "Faux. Le principe est une compétition de ligands hautement affins."
      },
      {
        "text": "Elle vise notamment l’élimination d’auto-anticorps.",
        "correct": true,
        "correction": "Vrai. Ce mécanisme est proposé dans les maladies auto-immunes."
      },
      {
        "text": "L’administration des ABDEG vise à doubler la concentration des IgG endogènes",
        "correct": false,
        "correction": "Faux. Le support indique une diminution des IgG endogènes."
      },
      {
        "text": "Le support évoque son application dans la myasthénie.",
        "correct": true,
        "correction": "Vrai. La maladie auto-immune est citée dans l’exemple clinique."
      },
      {
        "text": "Son objectif principal est de prolonger la demi-vie des auto-anticorps pathogènes.",
        "correct": false,
        "correction": "Faux. Le but est l’effet inverse : diminuer les auto-anticorps."
      }
    ],
    "explanation": "ABDEG exploite la compétition au FcRn dans un sens opposé à celui des stratégies visant à augmenter la demi-vie d’un anticorps thérapeutique."
  },
  {
    "id": 47,
    "type": "QCM",
    "question": "Quel récepteur est la cible des auto-anticorps décrits dans l’exemple de myasthénie du support ?",
    "options": [
      {
        "text": "Le récepteur à l’acétylcholine",
        "correct": true,
        "correction": "Vrai. C’est l’auto-antigène cité dans la partie myasthénie."
      },
      {
        "text": "Le FcγIII/CD16",
        "correct": false,
        "correction": "Faux. CD16 est un récepteur Fcγ, mais pas la cible donnée ici."
      },
      {
        "text": "Le récepteur de l’érythropoïétine",
        "correct": false,
        "correction": "Faux. Ce récepteur n’est pas évoqué dans ce cas."
      },
      {
        "text": "Le VEGF",
        "correct": false,
        "correction": "Faux. VEGF est la cible de l’anti-VEGF décrit ailleurs."
      },
      {
        "text": "Le récepteur de l’insuline",
        "correct": false,
        "correction": "Faux. Ce n’est pas l’antigène mentionné pour la myasthénie."
      }
    ],
    "explanation": "L’exemple de myasthénie concerne des anticorps dirigés contre le récepteur de l’acétylcholine."
  },
  {
    "id": 48,
    "type": "QRM",
    "question": "À propos des affinités interespèces du FcRn, quelles affirmations suivent la ronéo ?",
    "options": [
      {
        "text": "Le FcRn humain est décrit comme capable de lier les IgG humaines.",
        "correct": true,
        "correction": "Vrai. C’est un ligand naturel du récepteur humain."
      },
      {
        "text": "Les IgG murines ont une faible affinité pour le FcRn humain dans l’exemple.",
        "correct": true,
        "correction": "Vrai. Ce point est présenté comme une limite historique des anticorps murins."
      },
      {
        "text": "L’humanisation des anticorps a contribué à prolonger leur durée de vie chez l’humain.",
        "correct": true,
        "correction": "Vrai. Elle est reliée à une meilleure durée de vie des anticorps thérapeutiques."
      },
      {
        "text": "Le FcRn murin lie des IgG de plusieurs espèces.",
        "correct": true,
        "correction": "Vrai. Son spectre de liaison est décrit comme large."
      },
      {
        "text": "Le cours dit que toutes les espèces d’IgG sont strictement interchangeables devant tout FcRn.",
        "correct": false,
        "correction": "Faux. La section insiste précisément sur des différences selon les espèces."
      }
    ],
    "explanation": "Le choix d’espèce et l’humanisation des anticorps sont essentiels pour interpréter les expériences de liaison FcRn."
  },
  {
    "id": 49,
    "type": "QCM",
    "question": "Dans le cours, comment se définissent principalement les allotypes d’IgG1 ?",
    "options": [
      {
        "text": "Des infections successives par des virus différents",
        "correct": false,
        "correction": "Faux. Ce n’est pas une variation infectieuse acquise."
      },
      {
        "text": "Des polymorphismes d’acides aminés entre groupes d’individus",
        "correct": true,
        "correction": "Vrai. Le support les décrit comme des variantes de séquence entre groupes."
      },
      {
        "text": "Une perte totale des chaînes lourdes",
        "correct": false,
        "correction": "Faux. Une IgG conserve sa structure d’anticorps."
      },
      {
        "text": "Des fragments libres d’albumine",
        "correct": false,
        "correction": "Faux. Il s’agit des IgG1 et non de l’albumine."
      },
      {
        "text": "Des mutations uniquement présentes dans les cellules tumorales",
        "correct": false,
        "correction": "Faux. Ces variants sont des polymorphismes interindividuels."
      }
    ],
    "explanation": "Les allotypes G1m correspondent à des polymorphismes dans la séquence des IgG1."
  },
  {
    "id": 50,
    "type": "QRM",
    "question": "Sur les allotypes G1m d’IgG1, quelles propositions sont mentionnées ?",
    "options": [
      {
        "text": "G1m17,1 et G1m3,−1 sont deux combinaisons discutées.",
        "correct": true,
        "correction": "Vrai. Ce sont les deux combinaisons régulièrement comparées."
      },
      {
        "text": "Le cours cite une forte représentation de G1m17,1 chez les populations africaines.",
        "correct": true,
        "correction": "Vrai. La ronéo indique environ 95 % dans cet exemple."
      },
      {
        "text": "Le support indique que G1m3,−1 est davantage représenté chez les Caucasiens.",
        "correct": true,
        "correction": "Vrai. C’est la répartition annoncée par le cours."
      },
      {
        "text": "Les polymorphismes étudiés ne sont pas directement situés dans l’interface FcRn décrite initialement.",
        "correct": true,
        "correction": "Vrai. La variabilité d’affinité est étudiée malgré leur localisation hors du site direct."
      },
      {
        "text": "Les allotypes correspondent nécessairement à un anticorps monoclonal dirigé contre un autre épitope.",
        "correct": false,
        "correction": "Faux. L’allotype décrit la séquence de l’IgG, pas la spécificité du paratope."
      }
    ],
    "explanation": "Le support relie la répartition des allotypes à des questions de PK et de personnalisation des traitements."
  },
  {
    "id": 51,
    "type": "QCM",
    "question": "Quel anticorps thérapeutique anti-TNF est étudié pour la variation de demi-vie selon l’allotype IgG1 du patient ?",
    "options": [
      {
        "text": "Bevacizumab",
        "correct": false,
        "correction": "Faux. Il sert à l’étude anti-VEGF."
      },
      {
        "text": "Infliximab",
        "correct": true,
        "correction": "Vrai. Il est étudié chez des patients atteints de spondylarthrite."
      },
      {
        "text": "Rituximab",
        "correct": false,
        "correction": "Faux. Il apparaît principalement dans les tests de compétition."
      },
      {
        "text": "Natalizumab",
        "correct": false,
        "correction": "Faux. Il figure parmi les comparateurs de classe d’IgG."
      },
      {
        "text": "Trastuzumab",
        "correct": false,
        "correction": "Faux. Il apparaît parmi les anticorps utilisés comme compétiteurs."
      }
    ],
    "explanation": "L’infliximab est un anticorps anti-TNF d’allotype G1m17,1 étudié dans une cohorte de spondylarthrite."
  },
  {
    "id": 52,
    "type": "QRM",
    "question": "Concernant le raisonnement sur l’infliximab et les allotypes du patient, quelles propositions suivent le support ?",
    "options": [
      {
        "text": "L’infliximab étudié porte l’allotype G1m17,1.",
        "correct": true,
        "correction": "Vrai. Cet allotype est précisé dans l’étude clinique."
      },
      {
        "text": "Le patient peut avoir des IgG endogènes de différents allotypes.",
        "correct": true,
        "correction": "Vrai. Le génotypage des patients sert à les distinguer."
      },
      {
        "text": "L’infliximab est choisi parce qu’il ne se lie à aucun récepteur FcRn",
        "correct": false,
        "correction": "Faux. L’hypothèse du cours repose précisément sur son interaction avec FcRn."
      },
      {
        "text": "Le cours suppose une meilleure affinité des G1m17,1 par rapport aux G1m3,−1.",
        "correct": true,
        "correction": "Vrai. Le support expose explicitement cette hypothèse d’affinité."
      },
      {
        "text": "Le TNF est présenté comme une molécule sans aucun rôle inflammatoire.",
        "correct": false,
        "correction": "Faux. Le TNFα est décrit comme participant à la réaction inflammatoire."
      }
    ],
    "explanation": "L’étude teste si un même anticorps anti-TNF a une PK différente selon la compétition avec les IgG endogènes du patient."
  },
  {
    "id": 53,
    "type": "QCM",
    "question": "Dans le test fonctionnel de transcytose, quel paramètre du compartiment inférieur est ajusté pour favoriser la liaison au FcRn ?",
    "options": [
      {
        "text": "La température portée à 100 °C",
        "correct": false,
        "correction": "Faux. Une telle température détruirait la monocouche."
      },
      {
        "text": "Le pH abaissé autour de 6",
        "correct": true,
        "correction": "Vrai. Un milieu acide facilite la fixation des anticorps au FcRn."
      },
      {
        "text": "La suppression de tout liquide",
        "correct": false,
        "correction": "Faux. Le test impose des compartiments liquides."
      },
      {
        "text": "Le pH porté à 12",
        "correct": false,
        "correction": "Faux. Le pH alcalin n’est pas la condition favorable décrite."
      },
      {
        "text": "L’absence de cellules",
        "correct": false,
        "correction": "Faux. La transcytose est mesurée à travers des cellules exprimant le récepteur."
      }
    ],
    "explanation": "Le protocole utilise une monocouche de cellules transfectées hFcRn et un milieu basolatéral à pH acide."
  },
  {
    "id": 54,
    "type": "QRM",
    "question": "Sur le test de transcytose in vitro du support, quelles étapes ou observations sont rapportées ?",
    "options": [
      {
        "text": "Des cellules exprimant le FcRn humain sont cultivées jusqu’à confluence.",
        "correct": true,
        "correction": "Vrai. La monocouche constitue le modèle de barrière."
      },
      {
        "text": "Des anticorps sont placés initialement dans le compartiment inférieur.",
        "correct": true,
        "correction": "Vrai. C’est le côté d’introduction des anticorps décrit."
      },
      {
        "text": "Le pH inférieur est abaissé à environ 6 pour favoriser la liaison.",
        "correct": true,
        "correction": "Vrai. Le protocole exploite la sensibilité au pH."
      },
      {
        "text": "Le passage d’IgG vers le compartiment supérieur est évalué après environ deux heures.",
        "correct": true,
        "correction": "Vrai. La mesure après deux heures figure dans la ronéo."
      },
      {
        "text": "La méthode se déroule sans couche cellulaire entre les deux compartiments.",
        "correct": false,
        "correction": "Faux. Les cellules exprimant FcRn sont indispensables à cette expérience."
      }
    ],
    "explanation": "La transcytose expérimentale mesure un transport directionnel à travers une monocouche FcRn-positive."
  },
  {
    "id": 55,
    "type": "QCM",
    "question": "Quel compétiteur du cours est associé à une concurrence plus faible avec l’infliximab, en raison de l’allotype G1m3,−1 ?",
    "options": [
      {
        "text": "Cetuximab",
        "correct": true,
        "correction": "Vrai. Il est décrit comme moins compétiteur dans cette comparaison."
      },
      {
        "text": "Rituximab G1m17,1",
        "correct": false,
        "correction": "Faux. Le rituximab évoqué entre davantage en compétition."
      },
      {
        "text": "Infliximab G1m17,1",
        "correct": false,
        "correction": "Faux. L’anticorps de même allotype ne serait pas le moins compétiteur."
      },
      {
        "text": "Une IgG de même allotype G1m17,1",
        "correct": false,
        "correction": "Faux. La similarité d’allotype favorise ici la compétition."
      },
      {
        "text": "Une sonde fluorescente de l’ADN",
        "correct": false,
        "correction": "Faux. Ce n’est pas un anticorps compétiteur."
      }
    ],
    "explanation": "La compétition est plus marquée avec des IgG1 G1m17,1 qu’avec le cetuximab G1m3,−1 dans le test présenté."
  },
  {
    "id": 56,
    "type": "QRM",
    "question": "Quelles constatations ressortent de la comparaison de compétition des anticorps dans l’essai de transcytose ?",
    "options": [
      {
        "text": "Les anticorps de groupe G1m17,1 sont présentés comme de meilleurs compétiteurs.",
        "correct": true,
        "correction": "Vrai. C’est la conclusion explicitement affichée."
      },
      {
        "text": "Le cetuximab G1m3,−1 entre davantage en compétition que les IgG G1m17,1",
        "correct": false,
        "correction": "Faux. Sa compétition est décrite comme plus faible."
      },
      {
        "text": "Le protocole mesure uniquement l’activité des lymphocytes T CD4",
        "correct": false,
        "correction": "Faux. Il mesure le passage de l’infliximab à travers une monocouche."
      },
      {
        "text": "Les IgG2 et IgG4 sont décrites comme ne concurrençant pas l’IgG1 dans ce protocole.",
        "correct": true,
        "correction": "Vrai. Cette limite est donnée pour les comparateurs utilisés."
      },
      {
        "text": "Le passage d’infliximab est mesuré exclusivement par une NFS.",
        "correct": false,
        "correction": "Faux. La méthode mesure une transcytose et non une numération sanguine."
      }
    ],
    "explanation": "Ce test relie les allotypes à des différences de compétition au FcRn et de transport transcellulaire."
  },
  {
    "id": 57,
    "type": "QCM",
    "question": "Pourquoi un FcRn tronqué a-t-il été utilisé dans le test de compétition par cytométrie en flux ?",
    "options": [
      {
        "text": "Pour que le récepteur demeure à la membrane et soit accessible au marquage",
        "correct": true,
        "correction": "Vrai. Le mutant membranaire facilite l’analyse de la fixation."
      },
      {
        "text": "Pour supprimer toutes les cellules transfectées",
        "correct": false,
        "correction": "Faux. Le protocole compare précisément des cellules transfectées et non transfectées."
      },
      {
        "text": "Pour transformer FcRn en anticorps IgM",
        "correct": false,
        "correction": "Faux. La troncation ne change pas sa nature en IgM."
      },
      {
        "text": "Pour rendre la fluorescence invisible",
        "correct": false,
        "correction": "Faux. On cherche au contraire à détecter le signal."
      },
      {
        "text": "Pour obtenir un FcRn exclusivement mitochondrial",
        "correct": false,
        "correction": "Faux. Le support indique une expression à la surface, pas dans les mitochondries."
      }
    ],
    "explanation": "La cytométrie nécessite un accès au FcRn à la surface ; le récepteur est modifié pour éviter sa localisation majoritairement intracellulaire."
  },
  {
    "id": 58,
    "type": "QRM",
    "question": "Dans l’essai de cytométrie utilisant le rituximab Alexa 488, quelles propositions sont correctes ?",
    "options": [
      {
        "text": "Un anticorps fluorescent sert de traceur.",
        "correct": true,
        "correction": "Vrai. Le rituximab Alexa 488 est le marqueur de référence."
      },
      {
        "text": "Des cellules non transfectées fournissent un contrôle négatif.",
        "correct": true,
        "correction": "Vrai. Leur fluorescence aide à estimer le signal non spécifique."
      },
      {
        "text": "Des anticorps non marqués, dits « froids », entrent en compétition.",
        "correct": true,
        "correction": "Vrai. Ils déplacent le traceur en fonction de leur affinité."
      },
      {
        "text": "La cytométrie quantifie une fluorescence mesurée cellule par cellule.",
        "correct": true,
        "correction": "Vrai. Les cellules passent devant un laser et leur fluorescence est mesurée."
      },
      {
        "text": "Le test ne nécessite jamais de contrôle de fluorescence non spécifique.",
        "correct": false,
        "correction": "Faux. Le support prévoit explicitement un contrôle négatif."
      }
    ],
    "explanation": "La compétition sur FcRn de surface est quantifiée par cytométrie ; l’ajout d’anticorps froids réduit la fixation du traceur."
  },
  {
    "id": 59,
    "type": "QCM",
    "question": "Quel anticorps est utilisé sous quatre variantes d’allotype pour limiter l’influence du paratope dans l’étude de liaison au FcRn ?",
    "options": [
      {
        "text": "Rituximab Alexa 488 seul",
        "correct": false,
        "correction": "Faux. Il sert de traceur dans une autre expérience de compétition."
      },
      {
        "text": "Adalimumab",
        "correct": true,
        "correction": "Vrai. La ronéo décrit quatre variants construits de cet anticorps."
      },
      {
        "text": "Bevacizumab anti-VEGF",
        "correct": false,
        "correction": "Faux. Il est étudié auparavant pour l’ingénierie du Fc."
      },
      {
        "text": "Albumine humaine",
        "correct": false,
        "correction": "Faux. Ce ligand n’a pas de paratope d’anticorps."
      },
      {
        "text": "Facteur IX",
        "correct": false,
        "correction": "Faux. C’est une protéine de coagulation évoquée pour les fusions Fc."
      }
    ],
    "explanation": "La comparaison de variants d’adalimumab vise à isoler l’effet des allotypes sur la liaison au FcRn."
  },
  {
    "id": 60,
    "type": "QRM",
    "question": "Que rapporte le cours à propos des quatre variantes d’allotype de l’adalimumab ?",
    "options": [
      {
        "text": "Les variantes G1m3,−1 ; G1m3,1 ; G1m17,1 et G1m17,−1 sont testées.",
        "correct": true,
        "correction": "Vrai. Les quatre combinaisons figurent dans la section."
      },
      {
        "text": "La combinaison G1m3,1 est présentée comme celle qui se fixe le moins au FcRn",
        "correct": false,
        "correction": "Faux. La ronéo souligne au contraire sa forte affinité dans cette comparaison."
      },
      {
        "text": "L’influence de la séquence allotypique est étudiée indépendamment du paratope.",
        "correct": true,
        "correction": "Vrai. L’usage d’un même anticorps à allotypes différents répond à cette question."
      },
      {
        "text": "Le variant G1m3,−1 est présenté comme le compétiteur le plus puissant.",
        "correct": false,
        "correction": "Faux. Il est plutôt décrit comme moins compétiteur."
      },
      {
        "text": "Le cours évoque la possibilité d’adapter les doses plutôt que de commercialiser des versions géographiques différentes.",
        "correct": true,
        "correction": "Vrai. L’adaptation des doses est la solution finalement mentionnée."
      }
    ],
    "explanation": "L’étude conclut à une influence allotypique, avec une affinité particulièrement notable du G1m3,1 dans le système étudié."
  },
  {
    "id": 61,
    "type": "QCM",
    "question": "Selon le cours, quelle région de l’IgG peut influencer la liaison au FcRn sans appartenir directement à son interface classique ?",
    "options": [
      {
        "text": "La région charnière",
        "correct": true,
        "correction": "Vrai. La charnière modifie la mobilité des bras et peut jouer sur la liaison."
      },
      {
        "text": "Le noyau cellulaire",
        "correct": false,
        "correction": "Faux. Il s’agit d’une structure cellulaire, non d’une région IgG."
      },
      {
        "text": "Le récepteur à l’acétylcholine",
        "correct": false,
        "correction": "Faux. C’est une cible d’auto-anticorps dans la myasthénie."
      },
      {
        "text": "La membrane mitochondriale",
        "correct": false,
        "correction": "Faux. Ce n’est pas une région de l’anticorps."
      },
      {
        "text": "Le génome de la tumeur uniquement",
        "correct": false,
        "correction": "Faux. Le cours évoque aussi la région variable de l’IgG."
      }
    ],
    "explanation": "La mobilité conférée par la charnière et la région variable peuvent influencer la fixation au FcRn de manière indirecte."
  },
  {
    "id": 62,
    "type": "QRM",
    "question": "Quelles interprétations sont proposées pour expliquer l’effet de régions éloignées du site de liaison au FcRn ?",
    "options": [
      {
        "text": "Les modifications de charnière peuvent modifier la mobilité de l’anticorps.",
        "correct": true,
        "correction": "Vrai. La souplesse de la molécule change son comportement."
      },
      {
        "text": "La région variable peut aussi influencer l’interaction avec FcRn.",
        "correct": true,
        "correction": "Vrai. Le cours cite cette possibilité malgré une interface Fc classique."
      },
      {
        "text": "Les charges électrostatiques des acides aminés pourraient intervenir.",
        "correct": true,
        "correction": "Vrai. C’est l’une des hypothèses avancées."
      },
      {
        "text": "Les essais en cellules et dans des puits peuvent donner des résultats différents.",
        "correct": true,
        "correction": "Vrai. Le contexte membranaire influe sur l’observation des interactions."
      },
      {
        "text": "Le support démontre que le paratope est le seul site direct de fixation au FcRn.",
        "correct": false,
        "correction": "Faux. Le site principal est entre CH2 et CH3 du Fc."
      }
    ],
    "explanation": "Le support insiste sur le contexte cellulaire et la conformation globale de l’IgG, pas seulement sur une interface statique."
  },
  {
    "id": 63,
    "type": "QCM",
    "question": "Quelle fonction du FcRn est citée en plus de la transcytose et du recyclage dans la seconde partie du cours ?",
    "options": [
      {
        "text": "La réplication des génomes viraux",
        "correct": false,
        "correction": "Faux. Le cours ne confère pas cette fonction au FcRn."
      },
      {
        "text": "La participation aux réponses immunitaires et à la phagocytose",
        "correct": true,
        "correction": "Vrai. La réponse immunitaire et la prise en charge de complexes immuns sont étudiées."
      },
      {
        "text": "La synthèse des érythrocytes",
        "correct": false,
        "correction": "Faux. Cette fonction n’est pas attribuée au FcRn."
      },
      {
        "text": "La fabrication du complément C1q",
        "correct": false,
        "correction": "Faux. Le Fc peut recruter C1q mais le FcRn ne synthétise pas le complément."
      },
      {
        "text": "La sécrétion de bile",
        "correct": false,
        "correction": "Faux. Aucune fonction hépatobiliaire de ce type n’est décrite."
      }
    ],
    "explanation": "Le support présente le FcRn comme acteur du traitement des complexes immuns, de la réponse humorale et de l’immunité antitumorale."
  },
  {
    "id": 64,
    "type": "QRM",
    "question": "Concernant le rôle immunologique du FcRn étudié dans le cours, quelles affirmations sont soutenues ?",
    "options": [
      {
        "text": "Il participe à la gestion des complexes immuns.",
        "correct": true,
        "correction": "Vrai. Ces complexes sont au centre de plusieurs modèles."
      },
      {
        "text": "Il est associé à la phagocytose dans les modèles décrits.",
        "correct": true,
        "correction": "Vrai. Le KO révèle une altération citée dans la ronéo."
      },
      {
        "text": "Une coopération avec les récepteurs Fcγ est étudiée.",
        "correct": true,
        "correction": "Vrai. La collaboration entre récepteurs est explicitement évoquée."
      },
      {
        "text": "La coopération avec CD32A/FcγRIIA est envisagée.",
        "correct": true,
        "correction": "Vrai. C’est un exemple de coopération retenu."
      },
      {
        "text": "Il ne peut jouer aucun rôle dans des réponses impliquant les cellules dendritiques.",
        "correct": false,
        "correction": "Faux. Le cours décrit au contraire un rôle pour la présentation croisée par les DC."
      }
    ],
    "explanation": "Le FcRn s’insère dans une réponse immunitaire impliquant récepteurs Fcγ, cellules dendritiques et complexes immuns."
  },
  {
    "id": 65,
    "type": "QCM",
    "question": "Quel résultat inattendu est rapporté chez les souris surexprimant le FcRn après immunisation par l’ovalbumine ?",
    "options": [
      {
        "text": "Une disparition des IgM",
        "correct": false,
        "correction": "Faux. Le texte signale au contraire une augmentation des IgM."
      },
      {
        "text": "Une augmentation des IgM malgré leur absence de prise en charge directe par FcRn",
        "correct": true,
        "correction": "Vrai. Cette observation suggère une amélioration globale de la réponse humorale."
      },
      {
        "text": "Une absence totale de réponse anti-ovalbumine",
        "correct": false,
        "correction": "Faux. Les souris produisent de grandes quantités d’anticorps spécifiques."
      },
      {
        "text": "La disparition de la rate",
        "correct": false,
        "correction": "Faux. La rate augmente de taille dans l’expérience."
      },
      {
        "text": "Une baisse de tous les lymphocytes B",
        "correct": false,
        "correction": "Faux. Le document mentionne une augmentation des LB."
      }
    ],
    "explanation": "L’augmentation des IgM est interprétée comme le signe d’un effet immunologique indirect, au-delà du simple recyclage des IgG."
  },
  {
    "id": 66,
    "type": "QRM",
    "question": "Dans les souris surexprimant le FcRn, quelles observations sont rapportées après immunisation ?",
    "options": [
      {
        "text": "Une production accrue d’anticorps anti-ovalbumine.",
        "correct": true,
        "correction": "Vrai. La réponse anti-ovalbumine est fortement amplifiée."
      },
      {
        "text": "Chez les souris surexprimant FcRn, la rate disparaît après immunisation",
        "correct": false,
        "correction": "Faux. Une augmentation de taille de la rate est décrite."
      },
      {
        "text": "Une augmentation des lymphocytes B.",
        "correct": true,
        "correction": "Vrai. L’augmentation des LB est mentionnée."
      },
      {
        "text": "Un phénomène d’« epitope spreading ».",
        "correct": true,
        "correction": "Vrai. De nouveaux épitopes sont reconnus par rapport aux souris sauvages."
      },
      {
        "text": "Une absence totale de réponse contre les antigènes thymo-dépendants.",
        "correct": false,
        "correction": "Faux. Le FcRn est au contraire décrit comme potentialisant ces réponses."
      }
    ],
    "explanation": "La surexpression de FcRn amplifie quantitativement et qualitativement la réponse humorale dans ce modèle."
  },
  {
    "id": 67,
    "type": "QCM",
    "question": "Que signifie « epitope spreading » dans l’expérience décrite ?",
    "options": [
      {
        "text": "La perte systématique de toutes les spécificités d’anticorps",
        "correct": false,
        "correction": "Faux. Le phénomène correspond à un élargissement de reconnaissance."
      },
      {
        "text": "L’élargissement des épitopes reconnus au cours de la réponse immunitaire",
        "correct": true,
        "correction": "Vrai. Les souris modifiées répondent à des épitopes peu reconnus par les témoins."
      },
      {
        "text": "La dégradation de l’albumine par l’ADN",
        "correct": false,
        "correction": "Faux. Ce mécanisme n’est pas celui décrit."
      },
      {
        "text": "La séparation des chromatides",
        "correct": false,
        "correction": "Faux. Cette notion relève de la division cellulaire."
      },
      {
        "text": "L’absence de nouveaux anticorps après immunisation",
        "correct": false,
        "correction": "Faux. Le cours décrit au contraire de nouvelles spécificités produites."
      }
    ],
    "explanation": "Le cours illustre l’epitope spreading par des anticorps contre des épitopes ou protéines difficiles à cibler chez la souris sauvage."
  },
  {
    "id": 68,
    "type": "QRM",
    "question": "À propos du modèle de cancer du côlon et de cellules dendritiques, quelles propositions sont rapportées ?",
    "options": [
      {
        "text": "Les souris FcRn−/− exposées à des cancérogènes présentent davantage de cancers du côlon.",
        "correct": true,
        "correction": "Vrai. Le modèle KO présente une augmentation de la carcinogenèse."
      },
      {
        "text": "Des complexes immuns pris en charge par les cellules dendritiques contribuent à la production d’IL-12.",
        "correct": true,
        "correction": "Vrai. C’est l’étape cytokine décrite."
      },
      {
        "text": "Une présentation croisée contribue ensuite à l’activation des CD8.",
        "correct": true,
        "correction": "Vrai. Le cours relie cette étape aux LT CD8."
      },
      {
        "text": "Chez l’humain, une expression élevée de FcRn par les cellules dendritiques est associée à une meilleure survie dans le cancer du côlon.",
        "correct": true,
        "correction": "Vrai. Cette association de survie est citée dans les données humaines."
      },
      {
        "text": "Le cours affirme que le FcRn aggrave systématiquement toute réponse antitumorale.",
        "correct": false,
        "correction": "Faux. Les résultats présentés soutiennent plutôt un rôle protecteur."
      }
    ],
    "explanation": "Le FcRn joue ici un rôle indirect de soutien à la réponse antitumorale via les complexes immuns et les cellules dendritiques."
  },
  {
    "id": 69,
    "type": "QCM",
    "question": "Quelle méthode est citée pour comparer l’expression de l’ARN codant le FcRn entre zones tumorales et zones saines pulmonaires ?",
    "options": [
      {
        "text": "RT-PCR",
        "correct": true,
        "correction": "Vrai. Elle mesure les transcrits du FcRn dans les biopsies."
      },
      {
        "text": "Électrocardiogramme",
        "correct": false,
        "correction": "Faux. Il ne s’agit pas d’une analyse des transcrits."
      },
      {
        "text": "Gazométrie artérielle seule",
        "correct": false,
        "correction": "Faux. Cette mesure n’identifie pas spécifiquement l’expression de FcRn."
      },
      {
        "text": "Séquençage des récepteurs de l’acétylcholine",
        "correct": false,
        "correction": "Faux. Ce n’est pas l’étude décrite chez les patients pulmonaires."
      },
      {
        "text": "Spirométrie",
        "correct": false,
        "correction": "Faux. Elle étudie la fonction ventilatoire, non l’ARN tumoral."
      }
    ],
    "explanation": "La ronéo indique RT-PCR pour l’ARN, puis Western blot pour la protéine dans les tissus pulmonaires."
  },
  {
    "id": 70,
    "type": "QRM",
    "question": "Dans l’étude sur les cancers pulmonaires non à petites cellules, quelles observations sont rapportées ?",
    "options": [
      {
        "text": "La quantité d’ARN codant FcRn est plus élevée dans les zones tumorales que dans les zones saines dans l’étude décrite",
        "correct": false,
        "correction": "Faux. Le support rapporte une diminution globale en zone tumorale."
      },
      {
        "text": "Une diminution de la protéine FcRn est montrée par Western blot.",
        "correct": true,
        "correction": "Vrai. Le Western blot confirme la diminution au niveau protéique."
      },
      {
        "text": "Une expression accrue de FcRn prédit nécessairement une survie moindre selon l’étude",
        "correct": false,
        "correction": "Faux. La ronéo associe au contraire une expression plus forte à une meilleure survie."
      },
      {
        "text": "Le FcRn est proposé comme marqueur possible de l’immunoscore.",
        "correct": true,
        "correction": "Vrai. Le cours évoque cette perspective pronostique."
      },
      {
        "text": "Le document décrit une augmentation obligatoire du FcRn dans toutes les tumeurs.",
        "correct": false,
        "correction": "Faux. Les résultats décrits montrent plutôt une expression diminuée dans les zones tumorales."
      }
    ],
    "explanation": "L’expression de FcRn est étudiée comme marqueur potentiel de l’environnement immunitaire tumoral."
  },
  {
    "id": 71,
    "type": "QCM",
    "question": "Dans le modèle de métastases pulmonaires après injection IV de cellules de mélanome, que provoque l’absence de FcRn ?",
    "options": [
      {
        "text": "Une disparition des métastases",
        "correct": false,
        "correction": "Faux. Le support observe au contraire plus de lésions."
      },
      {
        "text": "Un plus grand nombre de lésions pulmonaires",
        "correct": true,
        "correction": "Vrai. Le KO est associé à une progression tumorale accrue."
      },
      {
        "text": "Une augmentation certaine des cellules NK matures",
        "correct": false,
        "correction": "Faux. La population et la maturation NK sont plutôt diminuées."
      },
      {
        "text": "Une absence de tumeur chez toutes les souris",
        "correct": false,
        "correction": "Faux. Les métastases sont davantage développées dans le modèle KO."
      },
      {
        "text": "Une fermeture irréversible de la barrière placentaire",
        "correct": false,
        "correction": "Faux. Ce mécanisme placentaire n’est pas l’objet de l’expérience."
      }
    ],
    "explanation": "L’absence de FcRn favorise l’installation/progression des lésions dans le modèle métastatique pulmonaire décrit."
  },
  {
    "id": 72,
    "type": "QRM",
    "question": "Quelles modifications immunitaires sont relevées chez les souris FcRn−/− dans le modèle de métastases pulmonaires ?",
    "options": [
      {
        "text": "Une augmentation des neutrophiles dans le site étudié.",
        "correct": true,
        "correction": "Vrai. C’est le changement myéloïde signalé."
      },
      {
        "text": "Une diminution de la proportion de cellules NK.",
        "correct": true,
        "correction": "Vrai. Le support montre une population NK réduite."
      },
      {
        "text": "Une maturation NK diminuée dans les poumons et la rate.",
        "correct": true,
        "correction": "Vrai. L’analyse des marqueurs CD11b et CD27 va dans ce sens."
      },
      {
        "text": "Une moindre dégranulation des cellules NK.",
        "correct": true,
        "correction": "Vrai. La fonction cytotoxique est altérée."
      },
      {
        "text": "Une production accrue d’IFNγ par les NK KO comparativement aux témoins.",
        "correct": false,
        "correction": "Faux. La ronéo rapporte au contraire une synthèse plus faible d’IFNγ."
      }
    ],
    "explanation": "Le phénotype NK des souris KO associe défaut de maturation et perte de fonctions effectrices."
  },
  {
    "id": 73,
    "type": "QCM",
    "question": "Quels marqueurs de maturation des cellules NK sont utilisés en cytométrie dans ce cours ?",
    "options": [
      {
        "text": "CD4 et CD8",
        "correct": false,
        "correction": "Faux. Ces marqueurs ne sont pas la paire utilisée ici."
      },
      {
        "text": "CD11b et CD27",
        "correct": true,
        "correction": "Vrai. Le support cite CD11b et CD27 pour étudier les stades NK."
      },
      {
        "text": "CD19 et CD20",
        "correct": false,
        "correction": "Faux. Ce sont des marqueurs d’autres lignées, non ceux retenus dans l’expérience."
      },
      {
        "text": "CD41 et CD61",
        "correct": false,
        "correction": "Faux. Cette paire n’est pas mentionnée pour les NK."
      },
      {
        "text": "CD138 et CD38",
        "correct": false,
        "correction": "Faux. Elle ne correspond pas au suivi de maturation NK décrit."
      }
    ],
    "explanation": "Le phénotypage CD11b/CD27 sert à identifier le stade où la maturation des NK est perturbée."
  },
  {
    "id": 74,
    "type": "QRM",
    "question": "Quelles conclusions sont tirées de l’étude des cellules NK chez les souris KO FcRn ?",
    "options": [
      {
        "text": "Le défaut NK existe déjà chez des souris naïves, hors injection tumorale.",
        "correct": true,
        "correction": "Vrai. Les données chez la souris non tumorale suggèrent un effet préexistant."
      },
      {
        "text": "L’absence de FcRn augmente le nombre de cellules NK matures dans le modèle décrit",
        "correct": false,
        "correction": "Faux. Le support rapporte une réduction de la proportion et de la maturation NK."
      },
      {
        "text": "La maturation est indiquée comme altérée au stade 2.",
        "correct": true,
        "correction": "Vrai. C’est le niveau cité lors de l’analyse médullaire."
      },
      {
        "text": "La dégranulation et la production d’IFNγ sont diminuées.",
        "correct": true,
        "correction": "Vrai. Deux paramètres fonctionnels sont réduits dans les NK KO."
      },
      {
        "text": "La déficience de FcRn améliore la fonction antitumorale des NK dans ce modèle.",
        "correct": false,
        "correction": "Faux. La perte de fonction NK est liée à une croissance tumorale facilitée."
      }
    ],
    "explanation": "Le FcRn est associé à la maturation médullaire des NK et à leur capacité fonctionnelle antitumorale."
  },
  {
    "id": 75,
    "type": "QCM",
    "question": "Quel gène est cité dans la partie sur les polymorphismes VNTR du récepteur FcRn ?",
    "options": [
      {
        "text": "FCGRT",
        "correct": true,
        "correction": "Vrai. Il s’agit du gène codant pour FcRn dans le support."
      },
      {
        "text": "HBB",
        "correct": false,
        "correction": "Faux. Ce gène n’est pas celui discuté dans les VNTR FcRn."
      },
      {
        "text": "CFTR",
        "correct": false,
        "correction": "Faux. Ce n’est pas le gène cité ici."
      },
      {
        "text": "F8",
        "correct": false,
        "correction": "Faux. F8 est évoqué ailleurs pour des fusions thérapeutiques."
      },
      {
        "text": "VEGFA",
        "correct": false,
        "correction": "Faux. VEGFA est une cible d’anticorps, pas le gène codant pour FcRn."
      }
    ],
    "explanation": "Le polymorphisme de répétitions VNTR est décrit pour FCGRT."
  },
  {
    "id": 76,
    "type": "QRM",
    "question": "Quelles affirmations sur le polymorphisme VNTR de FCGRT figurent dans la ronéo ?",
    "options": [
      {
        "text": "Les répétitions peuvent varier de 1 à 6 sur chaque allèle.",
        "correct": true,
        "correction": "Vrai. C’est la plage décrite."
      },
      {
        "text": "Un génotype VNTR 3/3 est associé à une expression accrue du FcRn par rapport à certains autres génotypes.",
        "correct": true,
        "correction": "Vrai. Le cours associe ce profil à une expression plus importante."
      },
      {
        "text": "La variabilité VNTR est proposée comme cause possible de différences interindividuelles de réponse.",
        "correct": true,
        "correction": "Vrai. La modulation d’expression pourrait jouer sur le recyclage."
      },
      {
        "text": "Une comparaison d’efficacité 3/3 versus 3/2 est décrite.",
        "correct": true,
        "correction": "Vrai. Les résultats du protocole DICV sont présentés en ce sens."
      },
      {
        "text": "Le génotype VNTR ne peut jamais avoir de lien avec la PK des anticorps thérapeutiques.",
        "correct": false,
        "correction": "Faux. L’ensemble de la section étudie précisément cette possibilité."
      }
    ],
    "explanation": "Le support propose une variabilité d’expression du FcRn selon le nombre de répétitions du gène FCGRT."
  },
  {
    "id": 77,
    "type": "QCM",
    "question": "Dans le protocole sur le déficit immunitaire commun variable (DICV), quel indicateur est associé à un moindre rendement des IgG injectées ?",
    "options": [
      {
        "text": "Une albuminémie basse",
        "correct": true,
        "correction": "Vrai. La ronéo souligne une corrélation avec une albumine sérique basse."
      },
      {
        "text": "Un groupe sanguin AB",
        "correct": false,
        "correction": "Faux. Le groupe ABO n’est pas le facteur indiqué ici."
      },
      {
        "text": "Une absence d’activité musculaire",
        "correct": false,
        "correction": "Faux. Aucune relation de ce type n’est donnée."
      },
      {
        "text": "La présence du chromosome Y",
        "correct": false,
        "correction": "Faux. Le protocole ne retient pas ce marqueur chromosomique."
      },
      {
        "text": "Un pH buccal élevé",
        "correct": false,
        "correction": "Faux. Ce paramètre ne figure pas dans l’analyse."
      }
    ],
    "explanation": "Un faible taux d’albumine suggère, dans le raisonnement du support, un recyclage moins favorable des protéines prises en charge par FcRn."
  },
  {
    "id": 78,
    "type": "QRM",
    "question": "Concernant les protocoles DICV et les voies d’administration des IgG, quelles observations sont présentées ?",
    "options": [
      {
        "text": "Des IgG polyclonales sont administrées à des patients ayant un déficit immunitaire commun variable.",
        "correct": true,
        "correction": "Vrai. C’est la population du protocole."
      },
      {
        "text": "Les IgG administrées en sous-cutané produisent un pic plus rapide et plus massif que la voie IV",
        "correct": false,
        "correction": "Faux. Le cours décrit une distribution sous-cutanée plus progressive."
      },
      {
        "text": "La voie IV ne peut jamais saturer le FcRn dans l’explication du support",
        "correct": false,
        "correction": "Faux. Le pic intraveineux est justement supposé saturer le récepteur."
      },
      {
        "text": "La voie sous-cutanée distribue le produit plus progressivement.",
        "correct": true,
        "correction": "Vrai. La diffusion plus lente limite la saturation."
      },
      {
        "text": "Les patients VNTR 3/3 sont décrits comme ayant systématiquement la plus mauvaise efficacité sous-cutanée.",
        "correct": false,
        "correction": "Faux. Le cours les décrit au contraire comme ayant un meilleur index d’efficacité."
      }
    ],
    "explanation": "Le modèle proposé explique les différences IV/SC par un pic de concentration et une saturation transitoire du FcRn."
  },
  {
    "id": 79,
    "type": "QCM",
    "question": "Dans le protocole dit « Rotooel » de la ronéo, quelle association est étudiée ?",
    "options": [
      {
        "text": "L’albumine et l’insuline dans le diabète",
        "correct": false,
        "correction": "Faux. Ce n’est pas la population ni le médicament du protocole."
      },
      {
        "text": "Le VNTR de FCGRT et la distribution du cetuximab dans un cancer du côlon métastatique",
        "correct": true,
        "correction": "Vrai. Le cours examine une différence de distribution du cetuximab selon le VNTR."
      },
      {
        "text": "La greffe rénale et le génotype HLA seul",
        "correct": false,
        "correction": "Faux. Cette étude n’est pas celle citée."
      },
      {
        "text": "Le facteur VIII et l’activité du complément",
        "correct": false,
        "correction": "Faux. Les protéines de coagulation sont évoquées dans les stratégies de fusion."
      },
      {
        "text": "La présence de FcRn et une infection parasitaire",
        "correct": false,
        "correction": "Faux. Le protocole porte sur un traitement oncologique par cetuximab."
      }
    ],
    "explanation": "La partie finale présente un lien entre FCGRT VNTR 3/3, passage périphérique plus lent du cetuximab et amélioration d’efficacité."
  },
  {
    "id": 80,
    "type": "QRM",
    "question": "D’après les conclusions finales du cours, quelles associations sont rapportées pour le génotype VNTR 3/3 ?",
    "options": [
      {
        "text": "Une expression plus élevée de FcRn que certains génotypes à moins de répétitions.",
        "correct": true,
        "correction": "Vrai. L’expression du récepteur est modulée selon les répétitions."
      },
      {
        "text": "Le génotype VNTR 3/3 correspond au plus faible index d’efficacité sous-cutanée du protocole DICV",
        "correct": false,
        "correction": "Faux. Le support décrit plutôt un meilleur index chez ces patients."
      },
      {
        "text": "Un passage périphérique plus lent du cetuximab dans le protocole oncologique.",
        "correct": true,
        "correction": "Vrai. Il est associé à une meilleure efficacité dans le texte."
      },
      {
        "text": "Une pharmacocinétique qui peut dépendre de l’expression de FcRn.",
        "correct": true,
        "correction": "Vrai. C’est l’hypothèse générale explorée par les deux protocoles."
      },
      {
        "text": "Une absence totale d’effet de la voie d’administration sur les concentrations d’IgG.",
        "correct": false,
        "correction": "Faux. La ronéo insiste au contraire sur la différence entre voies IV et SC."
      }
    ],
    "explanation": "Les deux protocoles finaux relient une variation du gène FCGRT à des différences de PK/efficacité des biothérapies."
  }
];