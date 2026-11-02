export const meta = {
  title: "Anticoagulants oraux directs (AOD)"
};

export default [
  {
    "id": 1,
    "type": "QCM",
    "question": "Quelle cible est directement inhibée par l’apixaban selon le cours ?",
    "options": [
      {
        "text": "Le facteur IIa (thrombine)",
        "correct": false,
        "correction": "Faux. Cette cible correspond au dabigatran."
      },
      {
        "text": "Le facteur Xa activé",
        "correct": true,
        "correction": "Vrai. L’apixaban fait partie des anti-Xa directs."
      },
      {
        "text": "La vitamine K époxyde réductase",
        "correct": false,
        "correction": "Faux. Cette voie est celle des AVK."
      },
      {
        "text": "L’antithrombine",
        "correct": false,
        "correction": "Faux. L’apixaban n’agit pas en potentialisant cet inhibiteur naturel."
      },
      {
        "text": "Le facteur Va",
        "correct": false,
        "correction": "Faux. Le système protéine C/protéine S s’occupe notamment du Va."
      }
    ],
    "explanation": "L’apixaban est un AOD de la famille des xabans : il bloque directement le facteur Xa."
  },
  {
    "id": 2,
    "type": "QRM",
    "question": "Quelles associations molécule–mécanisme figurent dans le support ?",
    "options": [
      {
        "text": "Rivaroxaban — inhibition directe du Xa",
        "correct": true,
        "correction": "Vrai. Il appartient à la famille des xabans."
      },
      {
        "text": "Dabigatran — inhibition directe du IIa",
        "correct": true,
        "correction": "Vrai. Il cible la thrombine."
      },
      {
        "text": "Apixaban — inhibition directe du IIa",
        "correct": false,
        "correction": "Faux. Il cible le Xa et non le IIa."
      },
      {
        "text": "Les héparines inhibent directement IIa par liaison au site actif, sans antithrombine.",
        "correct": false,
        "correction": "Faux. Dans ce cours, les héparines agissent indirectement en potentialisant l’antithrombine."
      },
      {
        "text": "AVK — fixation directe sur le Xa",
        "correct": false,
        "correction": "Faux. Ils réduisent la synthèse fonctionnelle des facteurs vitamine K-dépendants."
      }
    ],
    "explanation": "Les trois grandes familles ne se confondent pas : héparines = antithrombine, AVK = vitamine K, AOD = inhibition directe du Xa ou du IIa."
  },
  {
    "id": 3,
    "type": "QCM",
    "question": "Quel AOD présenté est un inhibiteur direct de la thrombine ?",
    "options": [
      {
        "text": "L’apixaban",
        "correct": false,
        "correction": "Faux. C’est un anti-Xa direct."
      },
      {
        "text": "Le rivaroxaban",
        "correct": false,
        "correction": "Faux. C’est un anti-Xa direct."
      },
      {
        "text": "Le fondaparinux",
        "correct": false,
        "correction": "Faux. Il agit indirectement via l’antithrombine."
      },
      {
        "text": "Le dabigatran",
        "correct": true,
        "correction": "Vrai. Il inhibe directement la thrombine, facteur IIa."
      },
      {
        "text": "La warfarine",
        "correct": false,
        "correction": "Faux. C’est un AVK, pas un inhibiteur direct de la thrombine."
      }
    ],
    "explanation": "Le dabigatran étexilate se distingue des xabans : il agit sur le IIa, tandis que rivaroxaban et apixaban agissent sur le Xa."
  },
  {
    "id": 4,
    "type": "QRM",
    "question": "À propos de la classification des anticoagulants, quelles propositions respectent le cours ?",
    "options": [
      {
        "text": "Les AOD inhibent directement un facteur de coagulation activé.",
        "correct": true,
        "correction": "Vrai. C’est leur particularité par rapport aux héparines et aux AVK."
      },
      {
        "text": "Les AVK stimulent directement l’antithrombine.",
        "correct": false,
        "correction": "Faux. Leur action porte sur le cycle de la vitamine K."
      },
      {
        "text": "Les héparines potentialisent l’antithrombine.",
        "correct": true,
        "correction": "Vrai. Elles en augmentent l’efficacité inhibitrice."
      },
      {
        "text": "Tous les AOD bloquent le même facteur activé.",
        "correct": false,
        "correction": "Faux. Les xabans visent Xa, le dabigatran vise IIa."
      },
      {
        "text": "Les AVK diminuent la production de formes fonctionnelles de facteurs vitamine K-dépendants.",
        "correct": true,
        "correction": "Vrai. Ce mécanisme est rappelé par le cours et les Wooclap."
      }
    ],
    "explanation": "La classification repose sur la cible et le caractère direct ou indirect de l’action anticoagulante."
  },
  {
    "id": 5,
    "type": "QCM",
    "question": "Quel suffixe permet, dans la règle mnémotechnique du cours, de reconnaître les inhibiteurs directs de Xa ?",
    "options": [
      {
        "text": "–parine",
        "correct": false,
        "correction": "Faux. Ce suffixe renvoie aux héparines, pas aux AOD anti-Xa."
      },
      {
        "text": "–coumarol",
        "correct": false,
        "correction": "Faux. L’acénocoumarol appartient aux AVK."
      },
      {
        "text": "–gatran",
        "correct": false,
        "correction": "Faux. Le dabigatran est anti-IIa."
      },
      {
        "text": "–fibrine",
        "correct": false,
        "correction": "Faux. Ce n’est pas le suffixe enseigné."
      },
      {
        "text": "–xaban",
        "correct": true,
        "correction": "Vrai. Le cours dit explicitement « –xaban » = anti-Xa direct."
      }
    ],
    "explanation": "Rivaroxaban et apixaban illustrent la règle « –xaban » pour l’inhibition directe du facteur Xa."
  },
  {
    "id": 6,
    "type": "QRM",
    "question": "Concernant les xabans, quelles affirmations sont conformes à l’ED ?",
    "options": [
      {
        "text": "Le rivaroxaban bloque directement le facteur Xa.",
        "correct": true,
        "correction": "Vrai. Il agit sans passer par l’antithrombine."
      },
      {
        "text": "L’apixaban bloque directement le facteur Xa.",
        "correct": true,
        "correction": "Vrai. Il est regroupé avec le rivaroxaban sur la diapositive des cibles."
      },
      {
        "text": "Le dabigatran appartient à la même famille anti-Xa directe.",
        "correct": false,
        "correction": "Faux. Il constitue la classe anti-IIa directe."
      },
      {
        "text": "Les xabans agissent en réduisant la synthèse du facteur X par manque de vitamine K.",
        "correct": false,
        "correction": "Faux. Ce mécanisme appartient aux AVK."
      },
      {
        "text": "Le cours mentionne aussi l’édoxaban parmi les anti-Xa directs.",
        "correct": true,
        "correction": "Vrai. Il est cité avec une précision sur sa commercialisation."
      }
    ],
    "explanation": "Les xabans visent directement le Xa. Le support cite rivaroxaban, apixaban et édoxaban, ce dernier avec une réserve de disponibilité."
  },
  {
    "id": 7,
    "type": "QCM",
    "question": "Quelle précision le professeur apporte-t-il sur l’édoxaban à la date du cours ?",
    "options": [
      {
        "text": "Il est cité comme anti-Xa direct, mais non commercialisé en France au moment du cours.",
        "correct": true,
        "correction": "Vrai. C’est la formulation du document."
      },
      {
        "text": "Il est le seul AOD anti-IIa disponible en France.",
        "correct": false,
        "correction": "Faux. Le seul anti-IIa cité est le dabigatran."
      },
      {
        "text": "Il est une héparine non fractionnée.",
        "correct": false,
        "correction": "Faux. Il s’agit d’un inhibiteur direct de Xa."
      },
      {
        "text": "Il appartient aux AVK.",
        "correct": false,
        "correction": "Faux. Il n’intervient pas sur la régénération de vitamine K."
      },
      {
        "text": "Il inhibe directement la protéine S.",
        "correct": false,
        "correction": "Faux. Aucune action de ce type n’est présentée."
      }
    ],
    "explanation": "L’édoxaban est bien cité comme anti-Xa direct ; le document précise qu’il n’est pas commercialisé en France à ce moment-là."
  },
  {
    "id": 8,
    "type": "QRM",
    "question": "Quelles propositions permettent de distinguer inhibition directe et indirecte du Xa ?",
    "options": [
      {
        "text": "Le fondaparinux se fixe directement au site actif du Xa, sans autre protéine.",
        "correct": false,
        "correction": "Faux. Il agit par l’antithrombine."
      },
      {
        "text": "L’HNF diminue l’activité du Xa grâce à l’antithrombine.",
        "correct": true,
        "correction": "Vrai. C’est une inhibition indirecte."
      },
      {
        "text": "L’HBPM agit aussi sur Xa par le biais de l’antithrombine.",
        "correct": true,
        "correction": "Vrai. Sa cible finale peut être Xa sans inhibition directe."
      },
      {
        "text": "L’apixaban inhibe directement le facteur Xa.",
        "correct": true,
        "correction": "Vrai. C’est un AOD anti-Xa direct."
      },
      {
        "text": "Le dabigatran inhibe directement Xa.",
        "correct": false,
        "correction": "Faux. Sa cible directe est IIa, la thrombine."
      }
    ],
    "explanation": "« Inhiber Xa » ne signifie pas forcément « inhiber directement Xa » : héparines/fondaparinux agissent via AT, apixaban directement."
  },
  {
    "id": 9,
    "type": "QCM",
    "question": "Dans la diapositive des cibles, quel processus se situe en aval du facteur IIa ?",
    "options": [
      {
        "text": "La synthèse hépatique des facteurs vitamine K-dépendants",
        "correct": false,
        "correction": "Faux. Elle relève de la maturation des facteurs avant activation."
      },
      {
        "text": "Le retour du Xa à l’état inactif par VKORC1",
        "correct": false,
        "correction": "Faux. Le schéma ne présente pas cette réaction."
      },
      {
        "text": "La transformation du fibrinogène en fibrine",
        "correct": true,
        "correction": "Vrai. La thrombine se situe juste en amont de cette formation."
      },
      {
        "text": "L’activation de la P-glycoprotéine",
        "correct": false,
        "correction": "Faux. La P-gp intervient dans le transport médicamenteux."
      },
      {
        "text": "L’élimination intestinale de l’apixaban",
        "correct": false,
        "correction": "Faux. Il s’agit de pharmacocinétique."
      }
    ],
    "explanation": "Le schéma du cours présente IIa (thrombine) comme acteur de la conversion du fibrinogène en fibrine."
  },
  {
    "id": 10,
    "type": "QRM",
    "question": "Quelles distinctions sur la thrombine sont exactes dans le support ?",
    "options": [
      {
        "text": "La thrombine porte aussi le nom de facteur IIa.",
        "correct": true,
        "correction": "Vrai. Les deux dénominations sont employées."
      },
      {
        "text": "Le dabigatran exerce une action anti-IIa directe.",
        "correct": true,
        "correction": "Vrai. C’est son mécanisme."
      },
      {
        "text": "Le rivaroxaban inhibe directement IIa comme le dabigatran.",
        "correct": false,
        "correction": "Faux. Il inhibe directement Xa."
      },
      {
        "text": "L’antithrombine est un anti-IIa direct de la famille des AOD.",
        "correct": false,
        "correction": "Faux. L’antithrombine est un inhibiteur physiologique, pas un AOD."
      },
      {
        "text": "Le fondaparinux est décrit comme un anti-IIa direct.",
        "correct": false,
        "correction": "Faux. Il agit sur Xa via AT."
      }
    ],
    "explanation": "Thrombine = IIa. Le dabigatran la cible directement ; l’antithrombine peut aussi l’inhiber, avec un mécanisme différent."
  },
  {
    "id": 11,
    "type": "QCM",
    "question": "Quelle famille réduit l’activité anticoagulante par potentialisation d’un inhibiteur physiologique plutôt que par blocage direct d’un facteur ?",
    "options": [
      {
        "text": "Les xabans",
        "correct": false,
        "correction": "Faux. Ils se fixent directement sur Xa."
      },
      {
        "text": "Les héparines",
        "correct": true,
        "correction": "Vrai. Elles potentialisent l’antithrombine."
      },
      {
        "text": "Le dabigatran",
        "correct": false,
        "correction": "Faux. Il inhibe directement IIa."
      },
      {
        "text": "Les AVK",
        "correct": false,
        "correction": "Faux. Ils interfèrent avec la vitamine K et la maturation de facteurs."
      },
      {
        "text": "Les anti-Xa directs",
        "correct": false,
        "correction": "Faux. Ils n’utilisent pas l’antithrombine comme intermédiaire."
      }
    ],
    "explanation": "Le point commun des héparines est leur effet indirect via l’antithrombine, un mécanisme différent de celui des AOD."
  },
  {
    "id": 12,
    "type": "QRM",
    "question": "À propos de l’antithrombine et des AOD, quelles propositions sont justes ?",
    "options": [
      {
        "text": "L’antithrombine a besoin du dabigatran pour inhiber IIa.",
        "correct": false,
        "correction": "Faux. Le cours la décrit comme un anticoagulant naturel autonome."
      },
      {
        "text": "L’antithrombine est synthétisée par le foie.",
        "correct": true,
        "correction": "Vrai. C’est précisé dans l’explication du premier Wooclap."
      },
      {
        "text": "Le rivaroxaban ne nécessite pas de potentialiser l’antithrombine pour agir.",
        "correct": true,
        "correction": "Vrai. Il est directement anti-Xa."
      },
      {
        "text": "L’antithrombine est vitamine K-dépendante.",
        "correct": false,
        "correction": "Faux. Contrairement aux protéines C/S, elle ne l’est pas."
      },
      {
        "text": "L’antithrombine a notamment IIa et Xa pour cibles.",
        "correct": true,
        "correction": "Vrai. Ces deux enzymes sont citées."
      }
    ],
    "explanation": "AT inhibe physiologiquement IIa/Xa ; les AOD exercent leur activité directement sur Xa ou IIa, sans l’intermédiaire d’AT."
  },
  {
    "id": 13,
    "type": "QCM",
    "question": "Qui joue le rôle de cofacteur de la protéine C activée dans les rappels du cours ?",
    "options": [
      {
        "text": "La thrombine circulante libre",
        "correct": false,
        "correction": "Faux. Elle a un autre rôle, notamment dans l’activation de PC liée à la thrombomoduline."
      },
      {
        "text": "Le facteur Xa",
        "correct": false,
        "correction": "Faux. Il n’est pas le cofacteur du système PCa."
      },
      {
        "text": "Le facteur 4 plaquettaire",
        "correct": false,
        "correction": "Faux. Il est associé aux mécanismes de TIH."
      },
      {
        "text": "L’antithrombine",
        "correct": false,
        "correction": "Faux. Elle constitue un autre inhibiteur physiologique."
      },
      {
        "text": "La protéine S",
        "correct": true,
        "correction": "Vrai. Elle assiste la protéine C activée dans l’inhibition de Va et VIIIa."
      }
    ],
    "explanation": "PCa est l’élément actif du couple ; la protéine S est son cofacteur et permet d’inactiver Va et VIIIa."
  },
  {
    "id": 14,
    "type": "QRM",
    "question": "Concernant le système protéine C/protéine S, quelles réponses sont exactes ?",
    "options": [
      {
        "text": "La thrombine liée à la thrombomoduline participe à l’activation de la protéine C.",
        "correct": true,
        "correction": "Vrai. Le support décrit ce changement de rôle de la thrombine."
      },
      {
        "text": "La protéine C activée neutralise surtout le Xa et le IIa.",
        "correct": false,
        "correction": "Faux. Le couple PCa/PS agit principalement sur Va et VIIIa."
      },
      {
        "text": "La protéine C et la protéine S sont vitamine K-dépendantes.",
        "correct": true,
        "correction": "Vrai. Elles nécessitent une gamma-carboxylation."
      },
      {
        "text": "La protéine C sert de cofacteur passif de la protéine S.",
        "correct": false,
        "correction": "Faux. Les rôles sont inversés : PC est active, PS est cofacteur."
      },
      {
        "text": "Le système PCa/PS inactive les cofacteurs Va et VIIIa.",
        "correct": true,
        "correction": "Vrai. Il complète l’action de l’antithrombine."
      }
    ],
    "explanation": "Le Wooclap souligne la différence entre les cibles de PC/PS (Va, VIIIa) et celles de l’antithrombine (IIa, Xa)."
  },
  {
    "id": 15,
    "type": "QCM",
    "question": "Quelle est l’action principale d’un AVK, par opposition aux AOD ?",
    "options": [
      {
        "text": "Inhiber directement la thrombine déjà activée",
        "correct": false,
        "correction": "Faux. C’est le mode d’action du dabigatran."
      },
      {
        "text": "Inhiber directement le facteur Xa déjà activé",
        "correct": false,
        "correction": "Faux. C’est le mode d’action des xabans."
      },
      {
        "text": "Stimuler la P-gp pour exporter tous les anticoagulants",
        "correct": false,
        "correction": "Faux. Ce n’est pas le mécanisme des AVK."
      },
      {
        "text": "Bloquer le recyclage de la vitamine K et réduire la gamma-carboxylation des facteurs",
        "correct": true,
        "correction": "Vrai. C’est le mécanisme rappelé dans les Wooclap."
      },
      {
        "text": "Accroître la fixation de l’antithrombine aux héparines",
        "correct": false,
        "correction": "Faux. Il ne s’agit pas de leur mécanisme."
      }
    ],
    "explanation": "Les AVK diminuent progressivement l’activité des facteurs II, VII, IX, X et des protéines C et S via le recyclage de la vitamine K."
  },
  {
    "id": 16,
    "type": "QRM",
    "question": "Parmi les propositions suivantes, lesquelles concernent des familles présentées comme anticoagulantes ?",
    "options": [
      {
        "text": "Les héparines, incluant HNF et HBPM",
        "correct": true,
        "correction": "Vrai. Elles renforcent l’antithrombine."
      },
      {
        "text": "Les antiplaquettaires comme seule catégorie de ce cours",
        "correct": false,
        "correction": "Faux. Les trois catégories comparées sont héparines, AVK et AOD."
      },
      {
        "text": "Les antagonistes de la vitamine K",
        "correct": true,
        "correction": "Vrai. Ils sont distingués des AOD."
      },
      {
        "text": "Les anticoagulants oraux directs",
        "correct": true,
        "correction": "Vrai. Ils agissent sur Xa ou IIa."
      },
      {
        "text": "Les antibiotiques bêta-lactamines",
        "correct": false,
        "correction": "Faux. Ils ne figurent pas parmi les anticoagulants enseignés."
      }
    ],
    "explanation": "Le début du PDF distingue trois catégories : héparines, AVK et AOD, avec des mécanismes propres."
  },
  {
    "id": 17,
    "type": "QCM",
    "question": "Environ combien de temps après ingestion se situe le pic plasmatique des AOD dans le tableau du cours ?",
    "options": [
      {
        "text": "15 minutes",
        "correct": false,
        "correction": "Faux. Cette valeur n’est pas présentée."
      },
      {
        "text": "Environ 2 heures",
        "correct": true,
        "correction": "Vrai. C’est l’ordre de grandeur indiqué."
      },
      {
        "text": "Environ 12 heures",
        "correct": false,
        "correction": "Faux. Ce chiffre renvoie plutôt à la demi-vie approximative."
      },
      {
        "text": "24 heures",
        "correct": false,
        "correction": "Faux. Ce n’est pas le pic annoncé."
      },
      {
        "text": "Une semaine",
        "correct": false,
        "correction": "Faux. Le pic des AOD est décrit comme rapide."
      }
    ],
    "explanation": "La diapositive pharmacologique situe la concentration maximale après ingestion à environ deux heures."
  },
  {
    "id": 18,
    "type": "QRM",
    "question": "Concernant les données pharmacocinétiques du tableau (page 3), quelles affirmations sont exactes ?",
    "options": [
      {
        "text": "Le pic plasmatique est d’environ 2 heures.",
        "correct": true,
        "correction": "Vrai. La valeur est indiquée pour les molécules considérées."
      },
      {
        "text": "La demi-vie est de l’ordre de 12 heures.",
        "correct": true,
        "correction": "Vrai. Le support présente cet ordre de grandeur, non une constante universelle."
      },
      {
        "text": "La demi-vie de tous les AOD est obligatoirement exactement de 12 heures chez tous les patients.",
        "correct": false,
        "correction": "Faux. Le Wooclap 9 rappelle qu’elle varie notamment avec l’âge et la fonction rénale."
      },
      {
        "text": "Le dabigatran présente une biodisponibilité inférieure à 10 % dans ce tableau.",
        "correct": true,
        "correction": "Vrai. C’est la valeur affichée pour cette molécule."
      },
      {
        "text": "La P-gp intervient dans l’excrétion intestinale.",
        "correct": true,
        "correction": "Vrai. Le transporteur est illustré au niveau de l’entérocyte."
      }
    ],
    "explanation": "Le tableau donne des repères approximatifs : Cmax ~2 h, demi-vie ~12 h, biodisponibilité du dabigatran <10 %."
  },
  {
    "id": 19,
    "type": "QCM",
    "question": "Quelle biodisponibilité est affichée pour le dabigatran dans le tableau du professeur ?",
    "options": [
      {
        "text": "Inférieure à 10 %",
        "correct": true,
        "correction": "Vrai. C’est la valeur reproduite dans le tableau de la page 3."
      },
      {
        "text": "50 %",
        "correct": false,
        "correction": "Faux. La valeur de 50 % est montrée du côté des xabans."
      },
      {
        "text": "100 %",
        "correct": false,
        "correction": "Faux. Le cours n’indique pas une biodisponibilité complète."
      },
      {
        "text": "80 %",
        "correct": false,
        "correction": "Faux. Cette valeur ne figure pas dans le tableau."
      },
      {
        "text": "Environ 2 % exactement",
        "correct": false,
        "correction": "Faux. Le document parle de « <10 % », sans valeur exacte."
      }
    ],
    "explanation": "À la page 3, la diapositive pharmacologique indique une biodisponibilité <10 % pour le dabigatran."
  },
  {
    "id": 20,
    "type": "QRM",
    "question": "À propos du tableau comparatif dabigatran/rivaroxaban/apixaban, quelles propositions sont justes ?",
    "options": [
      {
        "text": "Le tableau fixe une biodisponibilité de 100 % pour les trois AOD.",
        "correct": false,
        "correction": "Faux. Les valeurs données sont plus faibles."
      },
      {
        "text": "La biodisponibilité des xabans y est représentée à environ 50 %.",
        "correct": true,
        "correction": "Vrai. Le 50 % est placé sur les deux colonnes des xabans."
      },
      {
        "text": "Le dabigatran est présenté comme ayant une biodisponibilité <10 %.",
        "correct": true,
        "correction": "Vrai. C’est indiqué sur la première colonne."
      },
      {
        "text": "La demi-vie est affichée autour de 12 heures.",
        "correct": true,
        "correction": "Vrai. Le schéma utilise un ordre de grandeur commun."
      },
      {
        "text": "Le pic de concentration apparaît rapidement, vers deux heures après ingestion.",
        "correct": true,
        "correction": "Vrai. C’est l’ordre de grandeur présenté au tableau de la page 3."
      }
    ],
    "explanation": "Le cours présente des ordres de grandeur communs de pharmacocinétique et une différence de biodisponibilité entre dabigatran et xabans."
  },
  {
    "id": 21,
    "type": "QCM",
    "question": "Quel AOD possède une élimination surtout rénale selon le texte de pharmacocinétique ?",
    "options": [
      {
        "text": "L’apixaban exclusivement",
        "correct": false,
        "correction": "Faux. Son élimination est présentée comme mixte, plutôt fécale."
      },
      {
        "text": "Le rivaroxaban exclusivement",
        "correct": false,
        "correction": "Faux. Son élimination associe fèces et rein."
      },
      {
        "text": "La warfarine",
        "correct": false,
        "correction": "Faux. Ce médicament est un AVK et non l’AOD demandé."
      },
      {
        "text": "L’édoxaban comme seul médicament cité",
        "correct": false,
        "correction": "Faux. Le professeur insiste surtout sur le dabigatran."
      },
      {
        "text": "Le dabigatran",
        "correct": true,
        "correction": "Vrai. Le rein a un rôle majeur dans son élimination."
      }
    ],
    "explanation": "Le texte distingue le dabigatran, surtout éliminé par voie rénale, des xabans à élimination plus mixte."
  },
  {
    "id": 22,
    "type": "QRM",
    "question": "Quelles comparaisons des voies d’élimination sont appuyées par le PDF ?",
    "options": [
      {
        "text": "Le dabigatran dépend fortement du rein.",
        "correct": true,
        "correction": "Vrai. Son élimination est décrite comme surtout rénale."
      },
      {
        "text": "Le rivaroxaban combine des voies d’élimination fécale et rénale.",
        "correct": true,
        "correction": "Vrai. Le tableau mentionne « Fèces + Rein »."
      },
      {
        "text": "L’apixaban est éliminé uniquement par le rein.",
        "correct": false,
        "correction": "Faux. Le tableau présente une élimination mixte, avec prédominance fécale."
      },
      {
        "text": "Les trois AOD sont totalement éliminés par le CYP3A4.",
        "correct": false,
        "correction": "Faux. Le CYP3A4 intervient dans le métabolisme de certains AOD, pas comme voie exclusive universelle."
      },
      {
        "text": "L’apixaban présente dans le tableau une élimination « Fèces + Rein ».",
        "correct": true,
        "correction": "Vrai. Cette association est explicitement affichée."
      }
    ],
    "explanation": "Dabigatran : rein important ; rivaroxaban/apixaban : élimination mixte, davantage hépatobiliaire/fécale dans le cours."
  },
  {
    "id": 23,
    "type": "QCM",
    "question": "Quel est le rôle de la P-glycoprotéine (P-gp) décrit dans le document ?",
    "options": [
      {
        "text": "Convertir le fibrinogène en fibrine",
        "correct": false,
        "correction": "Faux. Cette réaction dépend de la thrombine."
      },
      {
        "text": "Activer directement la vitamine K",
        "correct": false,
        "correction": "Faux. Ce n’est pas le rôle de la P-gp."
      },
      {
        "text": "Expulser une partie du médicament de l’entérocyte vers la lumière intestinale",
        "correct": true,
        "correction": "Vrai. C’est un transporteur d’efflux."
      },
      {
        "text": "Inhiber la thrombine circulante",
        "correct": false,
        "correction": "Faux. C’est l’action du dabigatran."
      },
      {
        "text": "Produire des anticorps anti-PF4",
        "correct": false,
        "correction": "Faux. C’est un autre mécanisme évoqué pour la TIH."
      }
    ],
    "explanation": "La P-gp est un transporteur d’efflux intestinal qui peut réduire l’absorption nette d’un médicament en le renvoyant dans la lumière."
  },
  {
    "id": 24,
    "type": "QRM",
    "question": "À propos de la P-gp, quelles affirmations sont conformes au schéma du cours ?",
    "options": [
      {
        "text": "La P-gp est uniquement localisée sur la membrane des globules rouges.",
        "correct": false,
        "correction": "Faux. Le schéma la montre surtout au niveau de l’entérocyte et de l’efflux intestinal."
      },
      {
        "text": "Elle peut renvoyer du médicament absorbé vers la lumière intestinale.",
        "correct": true,
        "correction": "Vrai. Il s’agit d’une pompe d’efflux."
      },
      {
        "text": "Ses inhibiteurs et inducteurs puissants peuvent créer des interactions.",
        "correct": true,
        "correction": "Vrai. Le cours souligne ce point."
      },
      {
        "text": "Elle transforme chimiquement le dabigatran en facteur Xa.",
        "correct": false,
        "correction": "Faux. Ce transporteur n’est pas une enzyme de coagulation."
      },
      {
        "text": "Elle est le test biologique de référence pour surveiller les AVK.",
        "correct": false,
        "correction": "Faux. Les AVK se suivent par INR."
      }
    ],
    "explanation": "La P-gp influence le devenir intestinal de plusieurs AOD ; ses modulateurs peuvent modifier l’exposition médicamenteuse."
  },
  {
    "id": 25,
    "type": "QCM",
    "question": "Quel système enzymatique est spécifiquement mis en avant pour le métabolisme hépatique de certains AOD ?",
    "options": [
      {
        "text": "La gamma-glutamyl carboxylase",
        "correct": false,
        "correction": "Faux. Elle intervient dans la maturation vitamine K-dépendante."
      },
      {
        "text": "La thrombomoduline",
        "correct": false,
        "correction": "Faux. Elle participe à l’activation de PC."
      },
      {
        "text": "La thrombine",
        "correct": false,
        "correction": "Faux. C’est une cible anticoagulante, pas l’enzyme hépatique mise en avant."
      },
      {
        "text": "Le cytochrome P450, notamment CYP3A4",
        "correct": true,
        "correction": "Vrai. C’est le système cité dans la partie pharmacocinétique."
      },
      {
        "text": "La P-glycoprotéine comme cytochrome",
        "correct": false,
        "correction": "Faux. La P-gp est un transporteur, pas une isoforme du P450."
      }
    ],
    "explanation": "Le CYP3A4 est l’une des voies de métabolisme hépatique de certains AOD, notamment les xabans présentés."
  },
  {
    "id": 26,
    "type": "QRM",
    "question": "Concernant CYP3A4, quelles propositions sont exactes selon le support ?",
    "options": [
      {
        "text": "Il mesure directement la concentration plasmatique du rivaroxaban.",
        "correct": false,
        "correction": "Faux. Le CYP3A4 est un système métabolique et non un dosage."
      },
      {
        "text": "Il participe au métabolisme hépatique de certains AOD.",
        "correct": true,
        "correction": "Vrai. Le cours précise cette implication."
      },
      {
        "text": "Il intervient obligatoirement dans les mêmes proportions pour chaque AOD.",
        "correct": false,
        "correction": "Faux. Les voies et leurs importances varient selon la molécule."
      },
      {
        "text": "Ses inducteurs ou inhibiteurs sont des sources potentielles d’interactions.",
        "correct": true,
        "correction": "Vrai. C’est une conséquence clinique explicite."
      },
      {
        "text": "Il est cité notamment pour le rivaroxaban et l’apixaban.",
        "correct": true,
        "correction": "Vrai. Le Wooclap pharmacocinétique mentionne ces anti-Xa."
      }
    ],
    "explanation": "Les interactions médicamenteuses peuvent concerner CYP3A4 et/ou P-gp ; il faut raisonner molécule par molécule."
  },
  {
    "id": 27,
    "type": "QCM",
    "question": "Quelle structure transporte les médicaments absorbés vers le foie dans le schéma pharmacocinétique ?",
    "options": [
      {
        "text": "La veine porte",
        "correct": true,
        "correction": "Vrai. Le document décrit le passage portal vers le foie."
      },
      {
        "text": "L’espace sous-arachnoïdien",
        "correct": false,
        "correction": "Faux. Il n’intervient pas dans l’absorption digestive."
      },
      {
        "text": "La veine cave supérieure comme premier passage",
        "correct": false,
        "correction": "Faux. Le schéma montre d’abord la circulation porte."
      },
      {
        "text": "Les granulations de Pacchioni",
        "correct": false,
        "correction": "Faux. Elles concernent le LCR, pas les AOD."
      },
      {
        "text": "Les ganglions sensitifs",
        "correct": false,
        "correction": "Faux. Ils n’assurent pas la circulation portale."
      }
    ],
    "explanation": "Après l’absorption intestinale, le cours situe le passage vers le foie dans la circulation porte."
  },
  {
    "id": 28,
    "type": "QRM",
    "question": "Quelles étapes sont montrées dans le schéma d’absorption de la page 3 ?",
    "options": [
      {
        "text": "Absorption au niveau intestinal",
        "correct": true,
        "correction": "Vrai. Le médicament entre dans l’entérocyte."
      },
      {
        "text": "Production de fibrine dans la lumière digestive",
        "correct": false,
        "correction": "Faux. Ce n’est pas le rôle de ce schéma."
      },
      {
        "text": "Efflux possible par P-gp vers la lumière intestinale",
        "correct": true,
        "correction": "Vrai. L’action du transporteur est illustrée."
      },
      {
        "text": "Passage par la veine porte puis métabolisme hépatique",
        "correct": true,
        "correction": "Vrai. Le foie et CYP3A4 sont représentés."
      },
      {
        "text": "Activation du facteur IIa par l’entérocyte pour augmenter l’absorption",
        "correct": false,
        "correction": "Faux. Aucune étape de ce type n’est montrée."
      }
    ],
    "explanation": "Le diagramme associe absorption intestinale, efflux par P-gp, circulation porte et métabolisme hépatique."
  },
  {
    "id": 29,
    "type": "QCM",
    "question": "Dans ce cours, que peut provoquer un puissant inducteur de la P-gp pour certains AOD ?",
    "options": [
      {
        "text": "Une suppression de toute excrétion digestive",
        "correct": false,
        "correction": "Faux. C’est l’inverse du mécanisme d’efflux."
      },
      {
        "text": "Une diminution de l’exposition médicamenteuse",
        "correct": true,
        "correction": "Vrai. Le corrigé du Wooclap évoque cet effet des inducteurs."
      },
      {
        "text": "Une augmentation systématique de l’INR jusqu’à 5",
        "correct": false,
        "correction": "Faux. L’INR n’est pas un dosage fiable des AOD."
      },
      {
        "text": "Une transformation du Xa en IIa",
        "correct": false,
        "correction": "Faux. La P-gp ne modifie pas les facteurs de coagulation."
      },
      {
        "text": "Une suppression du métabolisme de toutes les molécules",
        "correct": false,
        "correction": "Faux. L’effet varie selon les voies impliquées."
      }
    ],
    "explanation": "L’induction de P-gp peut accentuer l’efflux et diminuer l’exposition de certains AOD ; l’impact dépend de la molécule."
  },
  {
    "id": 30,
    "type": "QRM",
    "question": "Quels éléments sont des déterminants d’interactions médicamenteuses des AOD selon le support ?",
    "options": [
      {
        "text": "La fonction d’excrétion des granulations arachnoïdiennes",
        "correct": false,
        "correction": "Faux. Ce n’est pas une voie pharmacocinétique citée."
      },
      {
        "text": "Les inhibiteurs de P-gp",
        "correct": true,
        "correction": "Vrai. Ils peuvent modifier le transport digestif."
      },
      {
        "text": "Les inducteurs de P-gp n’entraînent aucune interaction avec les AOD.",
        "correct": false,
        "correction": "Faux. Le cours attire spécifiquement l’attention sur les interactions avec les inducteurs puissants de la P-gp."
      },
      {
        "text": "L’inhibition du facteur Va par la protéine S seule",
        "correct": false,
        "correction": "Faux. Il s’agit d’un mécanisme de coagulation distinct."
      },
      {
        "text": "Les inhibiteurs ou inducteurs de CYP3A4",
        "correct": true,
        "correction": "Vrai. Ce système participe au métabolisme de certains AOD."
      }
    ],
    "explanation": "Deux éléments majeurs sont rappelés : le transporteur P-gp et le cytochrome CYP3A4, tous deux exposés à des interactions."
  },
  {
    "id": 31,
    "type": "QCM",
    "question": "Que signifie « Cmax après ingestion » dans la diapositive de pharmacocinétique ?",
    "options": [
      {
        "text": "Le temps total avant tout effet clinique, obligatoirement égal à une semaine",
        "correct": false,
        "correction": "Faux. Le cours souligne une absorption rapide."
      },
      {
        "text": "La durée de vie moyenne du patient",
        "correct": false,
        "correction": "Faux. Ce n’est pas un indicateur clinique de survie."
      },
      {
        "text": "Le nombre de prises quotidiennes fixé pour tous les AOD",
        "correct": false,
        "correction": "Faux. Le document ne définit pas Cmax ainsi."
      },
      {
        "text": "Le délai jusqu’à la concentration plasmatique maximale après une prise",
        "correct": true,
        "correction": "Vrai. La diapositive indique environ 2 heures."
      },
      {
        "text": "La proportion de médicaments excrétés dans les selles",
        "correct": false,
        "correction": "Faux. Cela correspond à l’élimination, pas à la Cmax."
      }
    ],
    "explanation": "Le tableau donne un repère d’environ 2 heures entre ingestion et concentration plasmatique maximale."
  },
  {
    "id": 32,
    "type": "QRM",
    "question": "À propos de la demi-vie des AOD, quelles propositions reflètent fidèlement le cours ?",
    "options": [
      {
        "text": "La diapositive mentionne une demi-vie d’environ 12 heures.",
        "correct": true,
        "correction": "Vrai. C’est l’ordre de grandeur inscrit."
      },
      {
        "text": "Il faut éviter de considérer exactement 12 heures comme une valeur universelle.",
        "correct": true,
        "correction": "Vrai. Le Wooclap sur le rivaroxaban insiste sur la variabilité."
      },
      {
        "text": "Toutes les molécules ont toujours la même demi-vie, indépendamment de la fonction rénale.",
        "correct": false,
        "correction": "Faux. Le document signale la variabilité selon patient et molécule."
      },
      {
        "text": "L’âge et la fonction rénale peuvent influer sur la demi-vie du rivaroxaban.",
        "correct": true,
        "correction": "Vrai. Le Wooclap 9 cite ces facteurs."
      },
      {
        "text": "Une demi-vie d’environ 12 heures correspond à un pic obligatoire à 12 heures.",
        "correct": false,
        "correction": "Faux. Le pic est donné vers 2 heures."
      }
    ],
    "explanation": "La demi-vie approximative d’environ 12 heures ne doit pas être transformée en valeur exacte applicable à tous."
  },
  {
    "id": 33,
    "type": "QCM",
    "question": "Quel élément du tableau explique pourquoi une diminution de fonction rénale peut particulièrement concerner le dabigatran ?",
    "options": [
      {
        "text": "Une action exclusivement anti-Xa",
        "correct": false,
        "correction": "Faux. Le dabigatran inhibe IIa."
      },
      {
        "text": "Une excrétion exclusivement par les poumons",
        "correct": false,
        "correction": "Faux. Ce mode n’est pas décrit."
      },
      {
        "text": "Une absorption cutanée",
        "correct": false,
        "correction": "Faux. Le médicament est oral."
      },
      {
        "text": "Une biodisponibilité de 100 %",
        "correct": false,
        "correction": "Faux. Le tableau indique moins de 10 %."
      },
      {
        "text": "Une élimination principalement rénale",
        "correct": true,
        "correction": "Vrai. C’est la caractéristique mise en avant."
      }
    ],
    "explanation": "Pour le dabigatran, l’élimination rénale occupe une place importante, point distinctif par rapport aux xabans dans ce support."
  },
  {
    "id": 34,
    "type": "QRM",
    "question": "Concernant les différences entre dabigatran et xabans, quelles propositions sont exactes ?",
    "options": [
      {
        "text": "Le dabigatran cible directement IIa.",
        "correct": true,
        "correction": "Vrai. Cela le distingue des deux xabans principaux."
      },
      {
        "text": "Le dabigatran dépend exclusivement du CYP3A4 comme voie d’élimination.",
        "correct": false,
        "correction": "Faux. Le document insiste sur sa voie surtout rénale."
      },
      {
        "text": "L’apixaban et le rivaroxaban ciblent directement Xa.",
        "correct": true,
        "correction": "Vrai. Ils sont regroupés dans la même classe."
      },
      {
        "text": "Les xabans possèdent des voies d’élimination mixtes.",
        "correct": true,
        "correction": "Vrai. Les selles et le rein sont mentionnés."
      },
      {
        "text": "Tous ont une élimination rénale exclusive.",
        "correct": false,
        "correction": "Faux. Les schémas montrent des voies variées."
      }
    ],
    "explanation": "Les distinctions portent à la fois sur la cible (IIa versus Xa) et sur les voies d’élimination (davantage rénale pour dabigatran)."
  },
  {
    "id": 35,
    "type": "QCM",
    "question": "Quel repère temporel commun est donné pour les AOD dans la diapositive 37 ?",
    "options": [
      {
        "text": "Un pic à environ 2 heures et une demi-vie de l’ordre de 12 heures",
        "correct": true,
        "correction": "Vrai. Ces deux repères figurent dans le tableau."
      },
      {
        "text": "Un pic à 12 heures et une demi-vie de 2 heures",
        "correct": false,
        "correction": "Faux. Les deux valeurs ont été inversées."
      },
      {
        "text": "Un pic à 24 heures et une demi-vie de 7 jours",
        "correct": false,
        "correction": "Faux. Ces données ne correspondent pas au document."
      },
      {
        "text": "Une action toujours retardée d’une semaine, comme les AVK",
        "correct": false,
        "correction": "Faux. Les AOD sont décrits comme rapides."
      },
      {
        "text": "Un pic à 1 mois et une demi-vie de 6 mois",
        "correct": false,
        "correction": "Faux. Il ne s’agit pas des valeurs enseignées."
      }
    ],
    "explanation": "Le tableau résume une absorption rapide (Cmax environ 2 heures) et une demi-vie approximative de 12 heures."
  },
  {
    "id": 36,
    "type": "QRM",
    "question": "Au sujet des interactions médicamenteuses, quelles propositions sont correctes ?",
    "options": [
      {
        "text": "Les inducteurs peuvent modifier la concentration de certains AOD.",
        "correct": true,
        "correction": "Vrai. Le cours insiste sur les interactions possibles."
      },
      {
        "text": "Les inhibiteurs peuvent également modifier leur exposition.",
        "correct": true,
        "correction": "Vrai. Ils agissent sur les systèmes impliqués dans le devenir du médicament."
      },
      {
        "text": "Le CYP3A4 et la P-gp sont des voies importantes à identifier.",
        "correct": true,
        "correction": "Vrai. Ce sont les deux systèmes mis en avant."
      },
      {
        "text": "Une interaction est impossible dès lors qu’un anticoagulant est pris par voie orale.",
        "correct": false,
        "correction": "Faux. La voie orale implique au contraire les transporteurs intestinaux."
      },
      {
        "text": "Les interactions n’existent qu’avec le dabigatran.",
        "correct": false,
        "correction": "Faux. Le cours évoque les différents AOD."
      }
    ],
    "explanation": "Les inducteurs et inhibiteurs de P-gp et/ou de CYP3A4 peuvent modifier l’exposition aux AOD."
  },
  {
    "id": 37,
    "type": "QCM",
    "question": "Quelle surveillance biologique est habituellement nécessaire pour ajuster la dose d’un AOD dans ce cours ?",
    "options": [
      {
        "text": "Un INR quotidien pour tous",
        "correct": false,
        "correction": "Faux. L’INR relève habituellement des AVK."
      },
      {
        "text": "Un temps de thrombine systématique pour les xabans",
        "correct": false,
        "correction": "Faux. Ce test ne sert pas de surveillance de routine."
      },
      {
        "text": "Une activité anti-Xa quotidienne obligatoire",
        "correct": false,
        "correction": "Faux. Les dosages spécifiques sont réservés à des situations ciblées."
      },
      {
        "text": "Aucune surveillance systématique de son effet anticoagulant",
        "correct": true,
        "correction": "Vrai. Les schémas posologiques sont définis sans adaptation biologique systématique."
      },
      {
        "text": "Un dosage quotidien de l’antithrombine",
        "correct": false,
        "correction": "Faux. Ce n’est pas une modalité de suivi indiquée pour les AOD."
      }
    ],
    "explanation": "Contrairement aux AVK, l’efficacité anticoagulante des AOD ne nécessite pas de suivi biologique systématique pour ajuster la posologie."
  },
  {
    "id": 38,
    "type": "QRM",
    "question": "Dans quels contextes le cours envisage-t-il des mesures spécifiques sous AOD ?",
    "options": [
      {
        "text": "En situation d’urgence",
        "correct": true,
        "correction": "Vrai. Une mesure ciblée peut être utile pour orienter la prise en charge."
      },
      {
        "text": "Avant un geste urgent",
        "correct": true,
        "correction": "Vrai. Le document le cite explicitement."
      },
      {
        "text": "Pour surveiller quotidiennement tous les patients sous AOD stables",
        "correct": false,
        "correction": "Faux. L’absence de dosage de routine est soulignée."
      },
      {
        "text": "Lorsqu’un surdosage est suspecté",
        "correct": true,
        "correction": "Vrai. C’est une indication mentionnée."
      },
      {
        "text": "Pour imposer un INR avant chaque prise",
        "correct": false,
        "correction": "Faux. L’INR n’est pas un dosage de concentration fiable des AOD."
      }
    ],
    "explanation": "Les dosages spécifiques peuvent être utiles en urgence, avant un geste urgent ou en cas de suspicion de surdosage."
  },
  {
    "id": 39,
    "type": "QCM",
    "question": "Quel examen spécifique est adapté pour estimer la concentration de rivaroxaban ?",
    "options": [
      {
        "text": "Un INR isolé",
        "correct": false,
        "correction": "Faux. Il ne permet pas de quantifier fiablement le rivaroxaban."
      },
      {
        "text": "Une activité anti-Xa étalonnée spécifiquement pour le rivaroxaban",
        "correct": true,
        "correction": "Vrai. Le document mentionne l’étalonnage propre au médicament."
      },
      {
        "text": "Un dosage des anticorps anti-HBc",
        "correct": false,
        "correction": "Faux. Ce test n’est pas lié à l’hémostase."
      },
      {
        "text": "Un temps de thrombine sans autre interprétation",
        "correct": false,
        "correction": "Faux. Ce n’est pas le dosage spécifique du rivaroxaban."
      },
      {
        "text": "Une numération plaquettaire seule",
        "correct": false,
        "correction": "Faux. Elle ne quantifie pas l’AOD circulant."
      }
    ],
    "explanation": "Pour le rivaroxaban et l’apixaban, le cours retient une activité anti-Xa avec calibration propre à la molécule."
  },
  {
    "id": 40,
    "type": "QRM",
    "question": "Quelles propositions sur les dosages spécifiques des AOD sont exactes ?",
    "options": [
      {
        "text": "Le rivaroxaban peut être exploré par une activité anti-Xa spécifique.",
        "correct": true,
        "correction": "Vrai. Le réactif doit être calibré pour le médicament."
      },
      {
        "text": "Une mesure spécifique liée à l’activité anti-IIa peut être utilisée pour le dabigatran.",
        "correct": true,
        "correction": "Vrai. Le dabigatran inhibe directement la thrombine et peut être exploré par un test adapté."
      },
      {
        "text": "L’apixaban peut être évalué par une activité anti-Xa spécifiquement étalonnée.",
        "correct": true,
        "correction": "Vrai. C’est l’autre xaban cité."
      },
      {
        "text": "Le dabigatran peut être exploré par une mesure liée à l’activité anti-IIa.",
        "correct": true,
        "correction": "Vrai. Le document l’indique."
      },
      {
        "text": "Tous les AOD peuvent être quantifiés sans distinction par un TQ isolé.",
        "correct": false,
        "correction": "Faux. Les tests usuels ne sont pas fiables pour cette fin."
      }
    ],
    "explanation": "Anti-Xa spécifique pour rivaroxaban/apixaban ; mesure anti-IIa spécifique pour dabigatran. Les tests usuels ne suffisent pas à quantifier tous les AOD."
  },
  {
    "id": 41,
    "type": "QCM",
    "question": "Quel test reste la référence de suivi des antagonistes de la vitamine K (AVK) ?",
    "options": [
      {
        "text": "La P-glycoprotéine",
        "correct": false,
        "correction": "Faux. C’est un transporteur pharmacocinétique."
      },
      {
        "text": "L’activité anti-IIa calibrée dabigatran",
        "correct": false,
        "correction": "Faux. Elle concerne un AOD."
      },
      {
        "text": "L’activité anti-Xa apixaban",
        "correct": false,
        "correction": "Faux. Elle ne surveille pas les AVK."
      },
      {
        "text": "Le temps de thrombine seul",
        "correct": false,
        "correction": "Faux. Ce n’est pas le suivi de référence indiqué."
      },
      {
        "text": "L’INR",
        "correct": true,
        "correction": "Vrai. Il permet d’adapter le traitement AVK."
      }
    ],
    "explanation": "Le cours oppose INR pour AVK et absence de surveillance biologique systématique pour AOD."
  },
  {
    "id": 42,
    "type": "QRM",
    "question": "Concernant le TQ/TP sous AOD, quelles propositions sont exactes ?",
    "options": [
      {
        "text": "Un TQ normal garantit l’absence de tout AOD circulant.",
        "correct": false,
        "correction": "Faux. Le document insiste sur les limites des tests usuels."
      },
      {
        "text": "Le rivaroxaban peut allonger le TQ.",
        "correct": true,
        "correction": "Vrai. L’effet dépend notamment du réactif."
      },
      {
        "text": "L’apixaban peut toujours être quantifié à partir du seul taux de Quick, sans calibration.",
        "correct": false,
        "correction": "Faux. Le TQ n’est pas fiable pour quantifier l’apixaban ; il faut une activité anti-Xa spécifiquement étalonnée si nécessaire."
      },
      {
        "text": "Le TQ seul ne quantifie pas fiablement tous les AOD.",
        "correct": true,
        "correction": "Vrai. Une mesure spécifique est parfois nécessaire."
      },
      {
        "text": "L’INR permet toujours de calculer la concentration exacte du rivaroxaban.",
        "correct": false,
        "correction": "Faux. Ce dosage n’est pas adapté à l’AOD."
      }
    ],
    "explanation": "Les anti-Xa directs peuvent modifier le TQ, mais la réponse varie selon le réactif et ne permet pas d’en déduire une concentration fiable."
  },
  {
    "id": 43,
    "type": "QCM",
    "question": "Quel test usuel est particulièrement influencé par le dabigatran sur la diapositive 39 ?",
    "options": [
      {
        "text": "Le TCA, et aussi le temps de thrombine (TT)",
        "correct": true,
        "correction": "Vrai. Le tableau signale un allongement important de ces temps."
      },
      {
        "text": "Le taux de glycémie",
        "correct": false,
        "correction": "Faux. Ce n’est pas un examen hémostatique ciblé par le support."
      },
      {
        "text": "La numération des globules rouges comme mesure d’activité",
        "correct": false,
        "correction": "Faux. La diapositive compare des tests de coagulation."
      },
      {
        "text": "L’INR comme dosage direct de la concentration",
        "correct": false,
        "correction": "Faux. Le cours réfute cette utilisation."
      },
      {
        "text": "La recherche d’antigène HBs",
        "correct": false,
        "correction": "Faux. Elle ne concerne pas le dabigatran."
      }
    ],
    "explanation": "Le dabigatran inhibe IIa : la diapositive souligne un allongement du TCA et du TT, sans en faire des dosages quantitatifs universels."
  },
  {
    "id": 44,
    "type": "QRM",
    "question": "À propos des effets des AOD sur TQ, TCA et TT, quelles propositions sont conformes ?",
    "options": [
      {
        "text": "Le dabigatran peut allonger le TCA.",
        "correct": true,
        "correction": "Vrai. C’est une conséquence de son activité anti-IIa."
      },
      {
        "text": "Le dabigatran peut allonger le temps de thrombine.",
        "correct": true,
        "correction": "Vrai. Cet effet figure sur la diapositive 39."
      },
      {
        "text": "Les xabans sont spécifiquement dosés par le TT standard.",
        "correct": false,
        "correction": "Faux. Le dosage décrit est une activité anti-Xa calibrée."
      },
      {
        "text": "Le TCA est toujours inchangé sous rivaroxaban.",
        "correct": false,
        "correction": "Faux. Le document indique une modification possible, moindre que celle du TQ."
      },
      {
        "text": "Les xabans peuvent prolonger le TQ selon le réactif.",
        "correct": true,
        "correction": "Vrai. L’ampleur de cet effet n’est pas fiable pour quantifier le médicament."
      }
    ],
    "explanation": "Dabigatran : surtout TCA/TT ; rivaroxaban et apixaban : effets possibles sur TQ et TCA. Les dosages doivent être spécifiques si nécessaires."
  },
  {
    "id": 45,
    "type": "QCM",
    "question": "Pourquoi le TQ ou l’INR ne suffit-il pas à quantifier le rivaroxaban ?",
    "options": [
      {
        "text": "Parce que le rivaroxaban ne touche jamais le TQ",
        "correct": false,
        "correction": "Faux. Le cours indique qu’il peut l’allonger."
      },
      {
        "text": "Parce que l’INR est calculé uniquement chez les nourrissons",
        "correct": false,
        "correction": "Faux. Il s’agit d’un test de coagulation, pas d’un marqueur d’âge."
      },
      {
        "text": "Parce que l’effet sur le TQ dépend du réactif utilisé",
        "correct": true,
        "correction": "Vrai. Le Wooclap 9 insiste sur cette variabilité."
      },
      {
        "text": "Parce qu’il stimule directement le fibrinogène",
        "correct": false,
        "correction": "Faux. Ce n’est pas son mécanisme."
      },
      {
        "text": "Parce que sa demi-vie est exactement de 12 heures",
        "correct": false,
        "correction": "Faux. Sa demi-vie n’explique pas la variabilité analytique et n’est pas fixe."
      }
    ],
    "explanation": "Le rivaroxaban peut influencer le TQ, mais cette influence varie selon les réactifs, rendant le TQ/INR inadéquat pour une mesure fiable."
  },
  {
    "id": 46,
    "type": "QRM",
    "question": "Quelles propositions justifient l’absence de contrôle INR systématique sous AOD ?",
    "options": [
      {
        "text": "Les AOD sont prescrits selon des schémas posologiques définis.",
        "correct": true,
        "correction": "Vrai. Le cours ne prévoit pas d’ajustement systématique à une concentration."
      },
      {
        "text": "Les AOD n’ont aucune interaction pharmacologique possible.",
        "correct": false,
        "correction": "Faux. Le CYP3A4 et la P-gp peuvent causer des interactions."
      },
      {
        "text": "L’INR est principalement utilisé pour les AVK.",
        "correct": true,
        "correction": "Vrai. C’est le test de suivi de cette classe."
      },
      {
        "text": "Un INR de 2 à 3 prouve que tout AOD est correctement dosé.",
        "correct": false,
        "correction": "Faux. Cette cible concerne les AVK, pas la concentration des AOD."
      },
      {
        "text": "Il existe des dosages dédiés si une estimation s’avère nécessaire.",
        "correct": true,
        "correction": "Vrai. Anti-Xa ou anti-IIa calibrés selon la molécule."
      }
    ],
    "explanation": "L’absence de surveillance biologique de routine n’empêche ni l’évaluation clinique ni l’utilisation ponctuelle de tests spécifiques."
  },
  {
    "id": 47,
    "type": "QCM",
    "question": "Comment est surveillée, lorsqu’elle est nécessaire, l’accumulation éventuelle d’HBPM ?",
    "options": [
      {
        "text": "Par la sérologie anti-VHC",
        "correct": false,
        "correction": "Faux. Ce test n’évalue pas l’héparine."
      },
      {
        "text": "Par l’INR systématique",
        "correct": false,
        "correction": "Faux. C’est le suivi usuel des AVK."
      },
      {
        "text": "Par un dosage de P-gp intestinale",
        "correct": false,
        "correction": "Faux. La P-gp concerne surtout le devenir des AOD."
      },
      {
        "text": "Par une mesure de l’activité anti-Xa",
        "correct": true,
        "correction": "Vrai. C’est le dosage mentionné dans certains contextes."
      },
      {
        "text": "Par la recherche d’anticorps anti-HBs",
        "correct": false,
        "correction": "Faux. Ces anticorps ne dosent pas les HBPM."
      }
    ],
    "explanation": "En présence d’un risque d’accumulation sous HBPM, le support prévoit une mesure anti-Xa dans des situations sélectionnées."
  },
  {
    "id": 48,
    "type": "QRM",
    "question": "Pour les HBPM, quelles situations peuvent motiver une mesure anti-Xa selon le cours ?",
    "options": [
      {
        "text": "Tous les patients stables sans facteur de risque, quotidiennement",
        "correct": false,
        "correction": "Faux. La surveillance n’est pas systématique."
      },
      {
        "text": "Une altération de la fonction rénale",
        "correct": true,
        "correction": "Vrai. Une accumulation est possible."
      },
      {
        "text": "Une simple prise unique d’un AOD anti-IIa sans indication particulière",
        "correct": false,
        "correction": "Faux. Ce n’est pas un motif indiqué pour doser une HBPM."
      },
      {
        "text": "Des poids extrêmes",
        "correct": true,
        "correction": "Vrai. Ils sont explicitement cités."
      },
      {
        "text": "Un contexte clinique particulier de suspicion d’accumulation",
        "correct": true,
        "correction": "Vrai. Le professeur décrit ces circonstances ciblées."
      }
    ],
    "explanation": "La surveillance anti-Xa des HBPM est ponctuelle et orientée par le risque : insuffisance rénale, poids extrêmes ou contexte particulier."
  },
  {
    "id": 49,
    "type": "QCM",
    "question": "Quel examen le cours associe-t-il à la surveillance rapprochée de l’HNF ?",
    "options": [
      {
        "text": "L’INR comme unique contrôle",
        "correct": false,
        "correction": "Faux. L’INR sert surtout aux AVK."
      },
      {
        "text": "Le TCA ou l’activité anti-Xa",
        "correct": true,
        "correction": "Vrai. Le Wooclap 7 oppose cette surveillance à celle des HBPM."
      },
      {
        "text": "Le TQ comme dosage calibré apixaban",
        "correct": false,
        "correction": "Faux. Ce test n’est pas adapté à l’HNF."
      },
      {
        "text": "Le temps de thrombine comme suivi exclusif recommandé",
        "correct": false,
        "correction": "Faux. Ce n’est pas la modalité privilégiée dans le cours."
      },
      {
        "text": "La mesure de CYP3A4",
        "correct": false,
        "correction": "Faux. Il ne s’agit pas d’une activité hémostatique à doser pour l’HNF."
      }
    ],
    "explanation": "L’HNF peut nécessiter une surveillance rapprochée de son activité par TCA ou anti-Xa ; les HBPM ne sont pas dosées systématiquement."
  },
  {
    "id": 50,
    "type": "QRM",
    "question": "À propos de la distinction des suivis biologiques, quelles associations sont justes ?",
    "options": [
      {
        "text": "AVK — INR",
        "correct": true,
        "correction": "Vrai. C’est le contrôle de référence des AVK."
      },
      {
        "text": "AOD — INR quotidien obligatoire",
        "correct": false,
        "correction": "Faux. Le cours ne recommande pas de surveillance systématique par INR."
      },
      {
        "text": "HNF — TCA ou activité anti-Xa dans les contextes nécessitant un suivi",
        "correct": true,
        "correction": "Vrai. Ce sont les tests cités."
      },
      {
        "text": "HBPM — activité anti-Xa seulement dans certaines situations",
        "correct": true,
        "correction": "Vrai. On recherche notamment un risque d’accumulation."
      },
      {
        "text": "Apixaban — dosage de thrombine IIa non spécifique comme test dédié",
        "correct": false,
        "correction": "Faux. Le dosage adapté est anti-Xa calibré."
      }
    ],
    "explanation": "Le tableau de correspondance à retenir : AVK/INR, HNF/TCA ou anti-Xa, HBPM/anti-Xa ciblé, AOD/dosage dédié si nécessaire."
  },
  {
    "id": 51,
    "type": "QCM",
    "question": "Un patient prend du dabigatran : quel principe doit guider une éventuelle mesure biologique spécifique ?",
    "options": [
      {
        "text": "Utiliser le même anti-Xa calibré rivaroxaban",
        "correct": false,
        "correction": "Faux. Le dabigatran est un anti-IIa."
      },
      {
        "text": "Ne considérer que le taux de Quick",
        "correct": false,
        "correction": "Faux. Il ne quantifie pas fiablement le dabigatran."
      },
      {
        "text": "Rechercher systématiquement la protéine S",
        "correct": false,
        "correction": "Faux. Le dabigatran agit sur la thrombine, non sur PC/PS."
      },
      {
        "text": "Réaliser uniquement une numération plaquettaire",
        "correct": false,
        "correction": "Faux. Elle ne mesure pas l’activité anti-IIa."
      },
      {
        "text": "Choisir une méthode liée à l’activité anti-IIa",
        "correct": true,
        "correction": "Vrai. C’est l’orientation explicitement donnée."
      }
    ],
    "explanation": "Pour le dabigatran, anti-IIa direct, le document cite une mesure spécifique liée à l’activité anti-IIa."
  },
  {
    "id": 52,
    "type": "QRM",
    "question": "Quel(s) énoncé(s) concernant le bilan d’hémostase TQ 35 %, TCA 1,3 et fibrinogène 3,5 g/L sont corrects ?",
    "options": [
      {
        "text": "Le taux de Quick de 35 % est diminué.",
        "correct": true,
        "correction": "Vrai. C’est l’interprétation donnée dans le Wooclap 10."
      },
      {
        "text": "Le TCA à 1,3 impose de conclure à un anticoagulant oral direct précis.",
        "correct": false,
        "correction": "Faux. Cette élévation modérée ne suffit pas à identifier un médicament."
      },
      {
        "text": "Ce profil prouve une prise de rivaroxaban plutôt qu’un AVK.",
        "correct": false,
        "correction": "Faux. Le seul bilan ne permet pas d’identifier l’anticoagulant."
      },
      {
        "text": "Le fibrinogène à 3,5 g/L prouve une consommation majeure du fibrinogène.",
        "correct": false,
        "correction": "Faux. La valeur est présentée comme généralement normale."
      },
      {
        "text": "Le fibrinogène à 3,5 g/L est dans les valeurs habituelles.",
        "correct": true,
        "correction": "Vrai. C’est la conclusion du support."
      }
    ],
    "explanation": "Wooclap 10 : Quick 35 % abaissé, TCA 1,3 modérément allongé selon référence, fibrinogène 3,5 g/L habituellement normal."
  },
  {
    "id": 53,
    "type": "QCM",
    "question": "Quelle conclusion est autorisée devant un TQ 35 %, un TCA 1,3 et un fibrinogène 3,5 g/L, pris isolément ?",
    "options": [
      {
        "text": "Il s’agit nécessairement d’un traitement par AVK.",
        "correct": false,
        "correction": "Faux. Les mêmes anomalies peuvent apparaître dans plusieurs contextes."
      },
      {
        "text": "Il s’agit nécessairement d’un traitement par rivaroxaban.",
        "correct": false,
        "correction": "Faux. L’effet du rivaroxaban dépend du réactif."
      },
      {
        "text": "Le bilan est perturbé mais ne permet pas à lui seul d’identifier l’anticoagulant",
        "correct": true,
        "correction": "Vrai. C’est l’enseignement central du Wooclap 10."
      },
      {
        "text": "Le fibrinogène est systématiquement très abaissé",
        "correct": false,
        "correction": "Faux. Il est autour d’une valeur habituelle."
      },
      {
        "text": "Le TCA à 1,3 exclut tout effet médicamenteux",
        "correct": false,
        "correction": "Faux. Ce chiffre n’a pas cette valeur d’exclusion."
      }
    ],
    "explanation": "Le professeur demande de confronter TQ, TCA et fibrinogène à l’ordonnance, au contexte clinique et, au besoin, à des tests spécialisés."
  },
  {
    "id": 54,
    "type": "QRM",
    "question": "Quelles démarches sont utiles pour interpréter un bilan d’hémostase non spécifique ?",
    "options": [
      {
        "text": "Connaître le traitement réellement pris.",
        "correct": true,
        "correction": "Vrai. Un AVK et un xaban peuvent influencer le TQ."
      },
      {
        "text": "Considérer le contexte clinique.",
        "correct": true,
        "correction": "Vrai. Le Wooclap rappelle qu’il est indispensable."
      },
      {
        "text": "Désigner automatiquement le rivaroxaban si le TQ est abaissé.",
        "correct": false,
        "correction": "Faux. Plusieurs situations peuvent expliquer une baisse du Quick."
      },
      {
        "text": "Un dosage spécialisé est toujours inutile si le taux de Quick est perturbé.",
        "correct": false,
        "correction": "Faux. Des examens spécialisés peuvent être nécessaires pour identifier ou quantifier l’effet d’un traitement."
      },
      {
        "text": "Conclure sans tenir compte des réactifs du laboratoire.",
        "correct": false,
        "correction": "Faux. Leur influence sur le résultat est soulignée."
      }
    ],
    "explanation": "Les valeurs du bilan isolé ne désignent pas une molécule : la connaissance du traitement et le contexte sont essentiels."
  },
  {
    "id": 55,
    "type": "QCM",
    "question": "Quel déficit parmi ceux présentés augmente le risque de thrombose plutôt que le risque de saignement ?",
    "options": [
      {
        "text": "Un déficit en antithrombine",
        "correct": true,
        "correction": "Vrai. La disparition d’un frein naturel favorise la coagulation."
      },
      {
        "text": "Un déficit en facteur VII",
        "correct": false,
        "correction": "Faux. Le cours oriente vers un risque hémorragique."
      },
      {
        "text": "Un déficit quantitatif en fibrinogène dans le Wooclap",
        "correct": false,
        "correction": "Faux. L’enseignant retient un risque hémorragique."
      },
      {
        "text": "Une baisse de facteur VII avec fibrinogène diminué",
        "correct": false,
        "correction": "Faux. Ce sont des éléments procoagulants qui manquent."
      },
      {
        "text": "Un défaut de formation du caillot par diminution de fibrinogène",
        "correct": false,
        "correction": "Faux. Il oriente vers le saignement, non vers la thrombose dans l’exercice."
      }
    ],
    "explanation": "Les déficits des freins physiologiques (antithrombine, protéines C ou S) prédisposent aux thromboses ; ceux de certains facteurs à l’hémorragie."
  },
  {
    "id": 56,
    "type": "QRM",
    "question": "Quels déficits sont associés à un risque thrombotique accru dans le Wooclap 3 ?",
    "options": [
      {
        "text": "Un déficit en facteur VII",
        "correct": false,
        "correction": "Faux. Il diminue la capacité à former un caillot et évoque l’hémorragie."
      },
      {
        "text": "Un déficit en antithrombine",
        "correct": true,
        "correction": "Vrai. Il retire l’inhibition naturelle de IIa/Xa."
      },
      {
        "text": "Un déficit en protéine C",
        "correct": true,
        "correction": "Vrai. Il freine moins Va et VIIIa."
      },
      {
        "text": "Un déficit en protéine S",
        "correct": true,
        "correction": "Vrai. Elle assiste normalement la PC activée."
      },
      {
        "text": "Un déficit en fibrinogène selon le cadre de ce QCM",
        "correct": false,
        "correction": "Faux. Le professeur retient un risque hémorragique."
      }
    ],
    "explanation": "Un déficit en anticoagulant naturel augmente la thrombose ; un déficit en facteur procoagulant peut au contraire favoriser le saignement."
  },
  {
    "id": 57,
    "type": "QCM",
    "question": "Quelle conduite générale le cours recommande-t-il devant une thrombopénie induite par l’héparine (TIH) ?",
    "options": [
      {
        "text": "Passer automatiquement de l’HNF à une HBPM",
        "correct": false,
        "correction": "Faux. La TIH concerne les héparines en tant que groupe."
      },
      {
        "text": "Envisager une stratégie anticoagulante non héparinique",
        "correct": true,
        "correction": "Vrai. C’est la recommandation du Wooclap 5."
      },
      {
        "text": "Augmenter la dose de fondaparinux sans examen du contexte",
        "correct": false,
        "correction": "Faux. Le cours ne propose pas une telle règle."
      },
      {
        "text": "Arrêter toute anticoagulation définitivement chez chaque patient",
        "correct": false,
        "correction": "Faux. Ce n’est pas la conduite décrite."
      },
      {
        "text": "Remplacer l’HNF par la même molécule avec le même schéma",
        "correct": false,
        "correction": "Faux. Cela ne règle pas le problème suspecté."
      }
    ],
    "explanation": "Une TIH impose d’éviter de poursuivre les héparines et d’envisager une stratégie anticoagulante non héparinique, suivant l’évaluation médicale."
  },
  {
    "id": 58,
    "type": "QRM",
    "question": "Concernant les situations particulières et les héparines, quelles affirmations sont correctes ?",
    "options": [
      {
        "text": "L’HNF est préférée dans certaines insuffisances rénales sévères.",
        "correct": true,
        "correction": "Vrai. Le support valorise sa possibilité d’adaptation."
      },
      {
        "text": "Une TIH signifie simplement qu’il faut utiliser une HBPM à la place de l’HNF.",
        "correct": false,
        "correction": "Faux. Il faut envisager une alternative non héparinique."
      },
      {
        "text": "L’HBPM peut s’accumuler quand la fonction rénale diminue.",
        "correct": true,
        "correction": "Vrai. La diminution de l’élimination accroît ce risque."
      },
      {
        "text": "En dehors de ces situations, le choix HNF/HBPM dépend du contexte.",
        "correct": true,
        "correction": "Vrai. Le cours évite toute règle universelle."
      },
      {
        "text": "Une activité anti-Xa quotidienne est obligatoire pour chaque patient sous HBPM.",
        "correct": false,
        "correction": "Faux. Le dosage est réservé à des indications ciblées."
      }
    ],
    "explanation": "Le choix de l’anticoagulant et les modalités de surveillance dépendent du terrain, notamment du risque de TIH et de l’état rénal."
  },
  {
    "id": 59,
    "type": "QCM",
    "question": "Quel médicament n’inhibe PAS le facteur Xa comme cible finale selon le Wooclap 6 ?",
    "options": [
      {
        "text": "L’HNF",
        "correct": false,
        "correction": "Faux. Elle freine Xa par l’antithrombine."
      },
      {
        "text": "L’HBPM",
        "correct": false,
        "correction": "Faux. Elle exerce une activité anti-Xa indirecte."
      },
      {
        "text": "Le fondaparinux",
        "correct": false,
        "correction": "Faux. Il est anti-Xa via l’antithrombine."
      },
      {
        "text": "Le dabigatran",
        "correct": true,
        "correction": "Vrai. Il cible directement IIa, et non Xa."
      },
      {
        "text": "L’apixaban",
        "correct": false,
        "correction": "Faux. Il agit directement sur Xa."
      }
    ],
    "explanation": "HNF, HBPM, fondaparinux et apixaban réduisent l’activité de Xa, par des moyens différents ; le dabigatran vise IIa."
  },
  {
    "id": 60,
    "type": "QRM",
    "question": "Quels anticoagulants inhibent l’action du Xa, directement ou indirectement ?",
    "options": [
      {
        "text": "L’HNF",
        "correct": true,
        "correction": "Vrai. Elle agit sur Xa via AT."
      },
      {
        "text": "L’HBPM",
        "correct": true,
        "correction": "Vrai. Elle potentialise l’effet anti-Xa de l’AT."
      },
      {
        "text": "Le dabigatran",
        "correct": false,
        "correction": "Faux. Il inhibe IIa et non Xa."
      },
      {
        "text": "Le fondaparinux",
        "correct": true,
        "correction": "Vrai. Son action anti-Xa est indirecte via AT."
      },
      {
        "text": "L’apixaban",
        "correct": true,
        "correction": "Vrai. Il est anti-Xa direct."
      }
    ],
    "explanation": "Le Wooclap 6 insiste sur le mot « inhibe » : il faut cocher à la fois les inhibiteurs directs et indirects du facteur Xa."
  },
  {
    "id": 61,
    "type": "QCM",
    "question": "Pour quel motif l’action d’un AVK apparaît-elle progressivement, contrairement à celle des AOD ?",
    "options": [
      {
        "text": "Les facteurs déjà fonctionnels doivent disparaître de la circulation après l’inhibition de leur maturation",
        "correct": true,
        "correction": "Vrai. Le rappel Wooclap 8 décrit cet effet retardé."
      },
      {
        "text": "Les AVK doivent obligatoirement se fixer au facteur Xa activé",
        "correct": false,
        "correction": "Faux. Ils n’agissent pas par inhibition directe de Xa."
      },
      {
        "text": "La P-gp empêche toute absorption des AVK pendant plusieurs semaines",
        "correct": false,
        "correction": "Faux. Ce n’est pas l’explication enseignée."
      },
      {
        "text": "Les AVK détruisent immédiatement tous les facteurs circulants",
        "correct": false,
        "correction": "Faux. Le document affirme l’inverse."
      },
      {
        "text": "La gamma-carboxylation augmente sous AVK avant de diminuer",
        "correct": false,
        "correction": "Faux. Les AVK freinent ce processus via la vitamine K."
      }
    ],
    "explanation": "Les AVK bloquent la formation de nouveaux facteurs fonctionnels, mais n’inactivent pas directement ceux déjà circulants : leur effet est retardé."
  },
  {
    "id": 62,
    "type": "QRM",
    "question": "Concernant les antagonistes de la vitamine K, quelles propositions sont exactes ?",
    "options": [
      {
        "text": "Ils nécessitent normalement une activité anti-IIa spécifique au dabigatran pour le suivi.",
        "correct": false,
        "correction": "Faux. La surveillance de référence est l’INR."
      },
      {
        "text": "Ils bloquent le recyclage de la vitamine K.",
        "correct": true,
        "correction": "Vrai. La gamma-carboxylation est ainsi diminuée."
      },
      {
        "text": "Ils réduisent les formes fonctionnelles des facteurs II, VII, IX et X.",
        "correct": true,
        "correction": "Vrai. C’est la liste citée."
      },
      {
        "text": "Ils diminuent aussi les formes fonctionnelles des protéines C et S.",
        "correct": true,
        "correction": "Vrai. Ces deux protéines sont vitamine K-dépendantes."
      },
      {
        "text": "Ils inactivent immédiatement les facteurs déjà présents par fixation sur leur site actif.",
        "correct": false,
        "correction": "Faux. Leur action dépend du renouvellement des facteurs."
      }
    ],
    "explanation": "Le Wooclap 8 rappelle le mécanisme indirect et retardé des AVK, distinct de la fixation directe des AOD sur Xa/IIa."
  },
  {
    "id": 63,
    "type": "QCM",
    "question": "Quel résultat peut être lié aussi bien à un AVK qu’au rivaroxaban, selon les tests et le réactif ?",
    "options": [
      {
        "text": "Une élévation obligatoire du fibrinogène à 10 g/L",
        "correct": false,
        "correction": "Faux. Aucune relation de ce type n’est proposée."
      },
      {
        "text": "Une positivité des anticorps anti-HBc",
        "correct": false,
        "correction": "Faux. Cela ne concerne pas ces anticoagulants."
      },
      {
        "text": "Un taux de Quick diminué",
        "correct": true,
        "correction": "Vrai. Les deux peuvent influencer cette mesure pour des raisons différentes."
      },
      {
        "text": "Une augmentation systématique et identique du TT pour toutes les molécules",
        "correct": false,
        "correction": "Faux. Les effets des familles diffèrent."
      },
      {
        "text": "Une activité anti-Xa parfaitement corrélée à l’INR standard",
        "correct": false,
        "correction": "Faux. L’INR n’est pas un dosage spécifique de rivaroxaban."
      }
    ],
    "explanation": "Un TQ altéré ne suffit pas à différencier AVK et rivaroxaban, car le réactif influence la réponse à l’anti-Xa direct."
  },
  {
    "id": 64,
    "type": "QRM",
    "question": "À propos du rivaroxaban, quelles affirmations figurent dans le Wooclap 9 ?",
    "options": [
      {
        "text": "Il inhibe directement le facteur Xa.",
        "correct": true,
        "correction": "Vrai. C’est un AOD anti-Xa direct."
      },
      {
        "text": "Il inhibe Xa par l’intermédiaire obligatoire de l’antithrombine.",
        "correct": false,
        "correction": "Faux. Ce mécanisme caractérise les héparines/fondaparinux."
      },
      {
        "text": "Il peut allonger le temps de Quick.",
        "correct": true,
        "correction": "Vrai. Le résultat est variable selon le réactif."
      },
      {
        "text": "Sa demi-vie peut varier avec l’âge et la fonction rénale.",
        "correct": true,
        "correction": "Vrai. Il ne faut pas la figer à exactement 12 heures."
      },
      {
        "text": "Il s’élimine exclusivement par la voie rénale.",
        "correct": false,
        "correction": "Faux. Le cours décrit une élimination mixte."
      }
    ],
    "explanation": "Rivaroxaban : anti-Xa direct rapide, élimination mixte, effet possible sur le TQ et demi-vie variable."
  },
  {
    "id": 65,
    "type": "QCM",
    "question": "Quel est le piège essentiel des Wooclap sur le mot « anti-Xa » ?",
    "options": [
      {
        "text": "Confondre Xa avec le facteur Va uniquement",
        "correct": false,
        "correction": "Faux. Le piège concerne surtout direct versus indirect."
      },
      {
        "text": "Confondre une cible anti-Xa avec un mécanisme anti-Xa nécessairement direct",
        "correct": true,
        "correction": "Vrai. Les héparines et le fondaparinux agissent via AT."
      },
      {
        "text": "Considérer le dabigatran comme un anti-IIa",
        "correct": false,
        "correction": "Faux. C’est précisément sa cible correcte."
      },
      {
        "text": "Distinguer apixaban et rivaroxaban des AVK",
        "correct": false,
        "correction": "Faux. Cette distinction est attendue."
      },
      {
        "text": "Savoir que l’antithrombine inhibe Xa",
        "correct": false,
        "correction": "Faux. C’est une notion physiologique correcte."
      }
    ],
    "explanation": "L’effet anti-Xa peut passer par l’antithrombine ou résulter d’une inhibition directe du Xa ; il faut toujours lire le libellé exact."
  },
  {
    "id": 66,
    "type": "QRM",
    "question": "Quelles erreurs de raisonnement faut-il éviter lors de l’interprétation des anticoagulants ?",
    "options": [
      {
        "text": "Assimiler « inhibition de Xa » à « inhibition directe de Xa ».",
        "correct": true,
        "correction": "Vrai. Le Wooclap 6 oppose ces deux formulations."
      },
      {
        "text": "Distinguer l’anti-IIa dabigatran des anti-Xa xabans.",
        "correct": false,
        "correction": "Faux. C’est la classification correcte et non un piège."
      },
      {
        "text": "Utiliser l’INR comme dosage quantitatif universel de tous les AOD.",
        "correct": true,
        "correction": "Vrai. La réponse des tests usuels est insuffisante."
      },
      {
        "text": "Déduire un anticoagulant précis d’un TQ abaissé isolément.",
        "correct": true,
        "correction": "Vrai. La baisse du Quick n’identifie pas une seule molécule."
      },
      {
        "text": "Vérifier le médicament réellement pris et le contexte clinique.",
        "correct": false,
        "correction": "Faux. Cette vérification est recommandée."
      }
    ],
    "explanation": "Les pièges centraux : direct/indirect, cible Xa/IIa, INR des AVK et manque de spécificité des tests usuels sous AOD."
  },
  {
    "id": 67,
    "type": "QCM",
    "question": "Chez un patient prenant de l’apixaban, quel énoncé décrit correctement une demande de dosage ciblée ?",
    "options": [
      {
        "text": "Demander systématiquement un INR quotidien pour régler la dose",
        "correct": false,
        "correction": "Faux. Le document ne recommande pas ce suivi."
      },
      {
        "text": "Doser une activité anti-IIa calibrée dabigatran",
        "correct": false,
        "correction": "Faux. Le patient prend un xaban, pas du dabigatran."
      },
      {
        "text": "Utiliser la seule diminution du Quick pour quantifier exactement l’apixaban",
        "correct": false,
        "correction": "Faux. La réponse des tests usuels n’est pas suffisamment fiable."
      },
      {
        "text": "Rechercher systématiquement les anti-PF4",
        "correct": false,
        "correction": "Faux. Cet examen relève du contexte de TIH."
      },
      {
        "text": "Demander si nécessaire une activité anti-Xa étalonnée pour l’apixaban",
        "correct": true,
        "correction": "Vrai. C’est le test adapté cité par le cours."
      }
    ],
    "explanation": "Lorsqu’un dosage est justifié, l’apixaban s’explore par une activité anti-Xa spécifiquement calibrée ; la surveillance de routine n’est pas indiquée."
  },
  {
    "id": 68,
    "type": "QRM",
    "question": "Une intervention urgente est prévue chez une personne traitée par AOD. Quelles propositions s’appuient sur le cours ?",
    "options": [
      {
        "text": "Une mesure spécialisée peut être utile dans ce contexte.",
        "correct": true,
        "correction": "Vrai. Le geste urgent fait partie des situations citées."
      },
      {
        "text": "Le dosage doit être adapté à la molécule réellement prise.",
        "correct": true,
        "correction": "Vrai. Anti-Xa ou anti-IIa selon l’AOD."
      },
      {
        "text": "Un TQ normal suffit toujours à exclure le médicament.",
        "correct": false,
        "correction": "Faux. Les tests usuels ont des limites importantes."
      },
      {
        "text": "L’INR est systématiquement la méthode qui mesure précisément les AOD en urgence.",
        "correct": false,
        "correction": "Faux. L’INR n’est pas un dosage universel des AOD, même en urgence."
      },
      {
        "text": "Tous les AOD nécessitent dans ce cas exactement le même test quel que soit leur mécanisme.",
        "correct": false,
        "correction": "Faux. Le cours distingue xabans et dabigatran."
      }
    ],
    "explanation": "En cas de geste urgent, les dosages spécifiques peuvent aider à apprécier l’exposition à l’AOD, sans assimiler le résultat d’un TQ/INR à une concentration fiable."
  },
  {
    "id": 69,
    "type": "QCM",
    "question": "Un patient sous rivaroxaban a un temps de Quick modifié. Quelle conclusion est la plus fidèle au cours ?",
    "options": [
      {
        "text": "Le rivaroxaban inhibe nécessairement directement la thrombine",
        "correct": false,
        "correction": "Faux. Il cible Xa et non IIa."
      },
      {
        "text": "Il faut conclure à un surdosage sur cette seule anomalie",
        "correct": false,
        "correction": "Faux. La sensibilité du réactif conditionne le résultat."
      },
      {
        "text": "Cette modification est possible mais ne quantifie pas à elle seule le rivaroxaban",
        "correct": true,
        "correction": "Vrai. C’est l’explication du Wooclap 9."
      },
      {
        "text": "L’INR est toujours un marqueur exact du taux de rivaroxaban",
        "correct": false,
        "correction": "Faux. La mesure n’est pas adaptée."
      },
      {
        "text": "La concentration plasmatique est forcément nulle",
        "correct": false,
        "correction": "Faux. Le résultat n’implique pas une absence de médicament."
      }
    ],
    "explanation": "Le TQ peut être sensible au rivaroxaban selon le réactif ; seul un examen spécifique permet éventuellement une estimation de la concentration."
  },
  {
    "id": 70,
    "type": "QRM",
    "question": "Devant une suspicion de surdosage en dabigatran, quelles propositions sont correctes ?",
    "options": [
      {
        "text": "Il s’agit nécessairement d’un surdosage d’anti-Xa direct.",
        "correct": false,
        "correction": "Faux. Le dabigatran est anti-IIa."
      },
      {
        "text": "Une mesure spécialisée liée à l’activité anti-IIa peut être pertinente.",
        "correct": true,
        "correction": "Vrai. Le document prévoit cette possibilité."
      },
      {
        "text": "Le dabigatran peut allonger le TCA et le TT.",
        "correct": true,
        "correction": "Vrai. Ces effets sont rappelés sur la diapositive 39."
      },
      {
        "text": "L’INR est systématiquement la méthode de référence pour le quantifier.",
        "correct": false,
        "correction": "Faux. Ce test ne fournit pas un dosage fiable des AOD."
      },
      {
        "text": "Le dosage peut être utile lorsque le surdosage est suspecté.",
        "correct": true,
        "correction": "Vrai. C’est une situation explicitement citée."
      }
    ],
    "explanation": "Dabigatran : anti-IIa direct ; sa biologie spécialisée diffère des xabans et peut être utile lors d’une urgence ou d’un surdosage suspecté."
  },
  {
    "id": 71,
    "type": "QCM",
    "question": "Un patient insuffisant rénal sévère doit recevoir une anticoagulation injectable : quel choix est privilégié dans le Wooclap 5 ?",
    "options": [
      {
        "text": "L’HNF, compte tenu de son ajustabilité et de sa durée d’action courte",
        "correct": true,
        "correction": "Vrai. C’est la préférence exposée par le professeur."
      },
      {
        "text": "Une HBPM obligatoire sans surveillance",
        "correct": false,
        "correction": "Faux. Le risque d’accumulation peut poser problème."
      },
      {
        "text": "Un AOD anti-Xa comme unique anticoagulant injectable",
        "correct": false,
        "correction": "Faux. Les AOD présentés sont administrés par voie orale."
      },
      {
        "text": "Le dabigatran injecté",
        "correct": false,
        "correction": "Faux. Il est cité parmi les anticoagulants oraux directs."
      },
      {
        "text": "L’AVK comme héparine de remplacement",
        "correct": false,
        "correction": "Faux. Les AVK sont une autre classe."
      }
    ],
    "explanation": "Le Wooclap privilégie l’HNF en cas d’insuffisance rénale sévère, notamment parce que son activité peut être adaptée et contrôlée."
  },
  {
    "id": 72,
    "type": "QRM",
    "question": "Quels énoncés décrivent correctement les mécanismes de l’anticoagulation injectée versus orale ?",
    "options": [
      {
        "text": "L’HNF et les HBPM agissent notamment par potentialisation de l’antithrombine.",
        "correct": true,
        "correction": "Vrai. Ce sont des inhibiteurs indirects du Xa."
      },
      {
        "text": "Le fondaparinux est un AOD oral anti-IIa direct.",
        "correct": false,
        "correction": "Faux. Il agit sur Xa via AT et n’appartient pas aux AOD."
      },
      {
        "text": "Le dabigatran est un AOD anti-IIa direct.",
        "correct": true,
        "correction": "Vrai. C’est son classement."
      },
      {
        "text": "La warfarine est un AVK et ne bloque pas directement Xa ou IIa.",
        "correct": true,
        "correction": "Vrai. Elle agit sur le cycle de la vitamine K."
      },
      {
        "text": "Le rivaroxaban agit en activant la protéine C.",
        "correct": false,
        "correction": "Faux. Son action est une inhibition directe du Xa."
      }
    ],
    "explanation": "L’objectif anticoagulant peut être atteint par plusieurs voies : antithrombine, vitamine K ou inhibition directe d’un facteur activé."
  },
  {
    "id": 73,
    "type": "QCM",
    "question": "À quoi la diapositive des AOD rattache-t-elle un allongement particulièrement marqué du TT ?",
    "options": [
      {
        "text": "À une inhibition directe du facteur Xa par l’apixaban",
        "correct": false,
        "correction": "Faux. Le TT est mis en avant pour l’anti-IIa."
      },
      {
        "text": "À l’action vitamine K-dépendante de la protéine S",
        "correct": false,
        "correction": "Faux. Ce n’est pas un médicament anti-IIa."
      },
      {
        "text": "À un dosage de P-gp",
        "correct": false,
        "correction": "Faux. C’est un transporteur, pas un test hémostatique."
      },
      {
        "text": "À l’activité anti-IIa du dabigatran",
        "correct": true,
        "correction": "Vrai. La diapositive associe dabigatran et allongement du TT."
      },
      {
        "text": "À une concentration de fibrinogène systématiquement basse sous xabans",
        "correct": false,
        "correction": "Faux. Aucune règle de ce type n’est présentée."
      }
    ],
    "explanation": "Dans le schéma des effets analytiques, l’anti-IIa dabigatran est associé surtout au TCA et au TT, sans recommandation de suivi de routine."
  },
  {
    "id": 74,
    "type": "QRM",
    "question": "Quelles données chiffrées sont correctement attribuées au tableau ou au Wooclap ?",
    "options": [
      {
        "text": "Délai de Cmax de l’ordre de 2 heures",
        "correct": true,
        "correction": "Vrai. Il figure au tableau pharmacocinétique."
      },
      {
        "text": "Demi-vie de l’ordre de 12 heures",
        "correct": true,
        "correction": "Vrai. C’est une approximation donnée, non une valeur invariable."
      },
      {
        "text": "Dabigatran : biodisponibilité indiquée à 100 %",
        "correct": false,
        "correction": "Faux. Le tableau indique <10 %."
      },
      {
        "text": "Taux de Quick à 35 % dans le cas Wooclap 10",
        "correct": true,
        "correction": "Vrai. Il s’agit bien du bilan à interpréter."
      },
      {
        "text": "Fibrinogène du Wooclap 10 égal à 0,35 g/L",
        "correct": false,
        "correction": "Faux. Le bilan donne 3,5 g/L."
      }
    ],
    "explanation": "Chiffres du PDF : Cmax ~2 h, demi-vie ~12 h, biodisponibilité dabigatran <10 %, bilan Wooclap TQ 35 % / TCA 1,3 / fibrinogène 3,5 g/L."
  },
  {
    "id": 75,
    "type": "QCM",
    "question": "Quelle proposition traduit la règle pratique sur l’activité anti-Xa des HBPM ?",
    "options": [
      {
        "text": "Elle doit être dosée chaque jour chez tous les patients.",
        "correct": false,
        "correction": "Faux. Le cours indique l’absence de surveillance systématique."
      },
      {
        "text": "Elle peut être dosée pour rechercher une accumulation dans des contextes particuliers",
        "correct": true,
        "correction": "Vrai. C’est l’idée du Wooclap 7."
      },
      {
        "text": "Elle remplace l’INR dans toutes les pathologies sous AVK.",
        "correct": false,
        "correction": "Faux. L’INR reste le suivi des AVK."
      },
      {
        "text": "Elle permet de détecter directement les anticorps anti-PF4",
        "correct": false,
        "correction": "Faux. Il s’agit d’un autre examen."
      },
      {
        "text": "Elle quantifie automatiquement l’apixaban avec n’importe quel calibrage",
        "correct": false,
        "correction": "Faux. Les tests AOD nécessitent une calibration adaptée."
      }
    ],
    "explanation": "La mesure anti-Xa sous HBPM peut aider dans les situations à risque d’accumulation ; elle n’est pas demandée quotidiennement à tout le monde."
  },
  {
    "id": 76,
    "type": "QRM",
    "question": "Quels pièges concernant les tests usuels des AOD sont exacts ?",
    "options": [
      {
        "text": "Un TQ allongé ne suffit pas à prouver un surdosage de rivaroxaban.",
        "correct": true,
        "correction": "Vrai. Le résultat dépend du réactif utilisé."
      },
      {
        "text": "Un TCA normal permet toujours d’exclure la présence de dabigatran.",
        "correct": false,
        "correction": "Faux. Le support ne donne pas cette capacité d’exclusion."
      },
      {
        "text": "Un INR n’est pas une mesure universelle de la concentration des AOD.",
        "correct": true,
        "correction": "Vrai. Il est d’abord utilisé pour les AVK."
      },
      {
        "text": "Les tests d’hémostase usuels peuvent être modifiés sous AOD sans permettre une quantification fiable.",
        "correct": true,
        "correction": "Vrai. Le cours souligne les effets possibles sur TQ et TCA, mais aussi les limites de leur interprétation."
      },
      {
        "text": "La molécule prise doit guider le choix de l’examen spécifique.",
        "correct": true,
        "correction": "Vrai. Anti-Xa et anti-IIa ne sont pas interchangeables."
      }
    ],
    "explanation": "La lecture biologique des AOD dépend de la cible et de l’outil analytique ; TQ, TCA et INR ne sont pas des dosages universels."
  },
  {
    "id": 77,
    "type": "QCM",
    "question": "Qu’est-ce qui permet de ne pas confondre apixaban et dabigatran ?",
    "options": [
      {
        "text": "Leur voie d’administration, l’un étant exclusivement injectable",
        "correct": false,
        "correction": "Faux. Les deux sont présentés comme oraux."
      },
      {
        "text": "Leur surveillance obligatoire par INR",
        "correct": false,
        "correction": "Faux. Aucun des deux n’a ce suivi de routine."
      },
      {
        "text": "Leurs cibles : Xa pour apixaban, IIa pour dabigatran",
        "correct": true,
        "correction": "Vrai. C’est la distinction la plus importante."
      },
      {
        "text": "Leur nécessité de potentialiser l’antithrombine",
        "correct": false,
        "correction": "Faux. Ils agissent directement."
      },
      {
        "text": "Une biodisponibilité commune toujours égale à 50 %",
        "correct": false,
        "correction": "Faux. Le dabigatran a <10 % dans le tableau."
      }
    ],
    "explanation": "Apixaban = –xaban = anti-Xa direct ; dabigatran = anti-IIa direct, avec des implications sur les dosages dédiés."
  },
  {
    "id": 78,
    "type": "QRM",
    "question": "Concernant les effets biologiques des AOD, quelles propositions reflètent les limites soulignées ?",
    "options": [
      {
        "text": "Le TCA et le TQ sont strictement inchangés avec tous les AOD.",
        "correct": false,
        "correction": "Faux. Le support montre qu’ils peuvent être modifiés."
      },
      {
        "text": "La sensibilité des tests usuels varie avec le réactif.",
        "correct": true,
        "correction": "Vrai. Le Wooclap rivaroxaban insiste sur cette limite."
      },
      {
        "text": "Une analyse anti-Xa spécifique peut estimer la concentration d’un xaban.",
        "correct": true,
        "correction": "Vrai. L’étalonnage doit correspondre au médicament."
      },
      {
        "text": "Une mesure de l’activité anti-IIa peut être envisagée pour le dabigatran.",
        "correct": true,
        "correction": "Vrai. La cible IIa oriente le test."
      },
      {
        "text": "Le résultat du temps de Quick révèle automatiquement l’identité du traitement.",
        "correct": false,
        "correction": "Faux. Le bilan seul ne le permet pas."
      }
    ],
    "explanation": "Les tests d’hémostase usuels peuvent être altérés, mais il faut recourir à un dosage spécifique et au contexte pour interpréter l’exposition."
  },
  {
    "id": 79,
    "type": "QCM",
    "question": "Quelle donnée clinique incite spécifiquement à envisager une mesure anti-Xa sous HBPM dans ce cours ?",
    "options": [
      {
        "text": "Une injection d’HBPM chez tout patient sans facteur de risque",
        "correct": false,
        "correction": "Faux. Le dosage n’est pas systématique."
      },
      {
        "text": "Une prise de warfarine à domicile",
        "correct": false,
        "correction": "Faux. L’AVK se suit par INR."
      },
      {
        "text": "Une infection à entérovirus sans anticoagulant",
        "correct": false,
        "correction": "Faux. Il n’y a pas de lien enseigné."
      },
      {
        "text": "Une vaccination anti-VHB récente",
        "correct": false,
        "correction": "Faux. Cet élément n’indique pas un dosage anti-Xa."
      },
      {
        "text": "Une altération de la fonction rénale pouvant entraîner une accumulation",
        "correct": true,
        "correction": "Vrai. C’est une indication explicite de surveillance ciblée."
      }
    ],
    "explanation": "La fonction rénale altérée et les poids extrêmes sont deux situations classiques de contrôle anti-Xa évoquées dans les rappels de surveillance des HBPM."
  },
  {
    "id": 80,
    "type": "QRM",
    "question": "Pour synthétiser le cours, quelles propositions sont exactes ?",
    "options": [
      {
        "text": "Rivaroxaban et apixaban inhibent directement Xa.",
        "correct": true,
        "correction": "Vrai. Ce sont les deux –xabans étudiés."
      },
      {
        "text": "Le dabigatran inhibe directement la thrombine.",
        "correct": true,
        "correction": "Vrai. Sa cible est IIa."
      },
      {
        "text": "Le fondaparinux est un inhibiteur oral direct de IIa.",
        "correct": false,
        "correction": "Faux. Il agit indirectement sur Xa par l’antithrombine."
      },
      {
        "text": "La P-gp et CYP3A4 peuvent intervenir dans les interactions des AOD.",
        "correct": true,
        "correction": "Vrai. Les deux systèmes sont décrits."
      },
      {
        "text": "La surveillance systématique par INR des AOD n’est pas recommandée.",
        "correct": true,
        "correction": "Vrai. Le cours réserve l’INR au suivi des AVK."
      }
    ],
    "explanation": "Le triptyque central : cibles anti-Xa/anti-IIa, pharmacocinétique P-gp/CYP3A4, dosages spécifiques plutôt qu’INR sous AOD."
  }
];