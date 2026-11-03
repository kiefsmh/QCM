
export const meta = {
  title: 'Annales 2024 — Session 2',
};

// Réponses STRICTEMENT conformes à la grille officielle.
// 40 questions, aucune annulation.
// Questions 1 à 20 : QCS.
// Questions 21 à 40 : QCM.

const Q = (id, question, propositions, reponses, corrections) => ({
  id,
  type: reponses.length === 1 ? 'QCM' : 'QRM',
  question,
  options: propositions.map((text, i) => ({
    text,
    correct: reponses.includes('ABCDE'[i]),
    correction: corrections[i]
  })),
  explanation: `Réponse${reponses.length > 1 ? 's' : ''} officielle${reponses.length > 1 ? 's' : ''} : ${reponses.split('').join(', ')}.`
});

export default [
  Q(1,
    `Concernant les maladies génétiques en général, quelle proposition est vraie ?`,
    [
      `la trisomie 21 est une maladie génétique rare`,
      `les maladies génétiques s'expriment toutes dès la naissance`,
      `on dénombre actuellement plus de 20 000 maladies génétiques`,
      `une maladie génétique peut apparaître dans une famille sans antécédent familial`,
      `toutes les maladies génétiques sont des maladies orphelines`
    ],
    'D',
    [
      `Faux. La trisomie 21 est une anomalie chromosomique relativement fréquente.`,
      `Faux. Certaines maladies génétiques se manifestent à l'âge adulte, voire tardivement.`,
      `Faux selon la grille de 2024. Le nombre de maladies génétiques distinctes répertoriées ne correspond pas au chiffre proposé.`,
      `Vrai. Une maladie génétique peut apparaître sans antécédent familial, notamment par néomutation ou transmission récessive.`,
      `Faux. Toutes les maladies génétiques ne répondent pas à la définition d'une maladie rare.`
    ]
  ),

  Q(2,
    `Quel est l'ordre de grandeur du niveau de résolution de l'analyse en FISH (hybridation in situ fluorescente) ?`,
    [
      `3 Mb`,
      `10 Mb`,
      `1 kb`,
      `1 base`,
      `250 kb`
    ],
    'E',
    [
      `Faux. Cette résolution est moins fine que celle habituellement retenue pour une FISH ciblée.`,
      `Faux. Une résolution de 10 Mb correspond davantage à l'ordre de grandeur d'un caryotype conventionnel.`,
      `Faux. Une résolution de 1 kb est trop fine pour la FISH cytogénétique classique.`,
      `Faux. La FISH conventionnelle ne permet pas d'identifier une substitution nucléotidique isolée.`,
      `Vrai. La résolution couramment retenue pour la FISH est de l'ordre de quelques centaines de kilobases, ici 250 kb.`
    ]
  ),

  Q(3,
    `Concernant les translocations robertsoniennes, quelle proposition est vraie ?`,
    [
      `elles ne sont jamais héritées`,
      `elles sont toujours déséquilibrées`,
      `elles entraînent une perte du bras long des chromosomes concernés`,
      `elles ne concernent que les chromosome acrocentriques`,
      `elles sont toutes détectées par analyse chromosomique sur puce à ADN`
    ],
    'D',
    [
      `Faux. Une translocation robertsonienne peut être héritée d'un parent porteur équilibré.`,
      `Faux. Les translocations robertsoniennes peuvent être équilibrées ou déséquilibrées.`,
      `Faux. Elles résultent principalement de la fusion des bras longs avec perte des bras courts des chromosomes concernés.`,
      `Vrai. Les translocations robertsoniennes concernent les chromosomes acrocentriques 13, 14, 15, 21 et 22.`,
      `Faux. Une translocation équilibrée ne provoquant pas de variation significative du nombre de copies peut échapper à la CGH-array.`
    ]
  ),

  Q(4,
    `Concernant les maladies mitochondriales, quelle proposition est vraie ?`,
    [
      `toutes les maladies mitochondriales sont d’hérédité maternelle`,
      `la pénétrance est complète dans toutes les maladies d’hérédité mitochondriale`,
      `le nombre de molécules d’ADN mitochondrial muté est constant d’une mitochondrie à l’autre`,
      `le nombre de mitochondries porteuses d’une mutation de l’ADN mitochondrial est constant d’une cellule à l’autre`,
      `le phénomène d’hétéroplasmie peut expliquer l’expressivité variable des maladies mitochondriales`
    ],
    'E',
    [
      `Faux. Certaines maladies mitochondriales sont dues à des variants de l'ADN nucléaire et suivent une hérédité mendélienne.`,
      `Faux. La pénétrance des maladies mitochondriales peut être incomplète.`,
      `Faux. La proportion d'ADN mitochondrial muté peut varier entre les mitochondries.`,
      `Faux. La répartition des mitochondries porteuses d'un variant peut varier entre les cellules et les tissus.`,
      `Vrai. L'hétéroplasmie, coexistence d'ADN mitochondrial normal et muté, contribue à la variabilité d'expression des maladies mitochondriales.`
    ]
  ),

  Q(5,
    `A propos du vosoritide, traitement médicamenteux efficace sur la croissance dans l’achondroplasie, quelle proposition est vraie ?`,
    [
      `il s’agit d’un analogue du CNP (peptide natriurétique de type C)`,
      `il est administré par voie orale`,
      `il n’est toujours pas disponible en France`,
      `il peut être prescrit dès la naissance`,
      `il s’agit d’une thérapie génique`
    ],
    'A',
    [
      `Vrai. Le vosoritide est un analogue du peptide natriurétique de type C, qui contrebalance certains effets de l'hyperactivation de FGFR3.`,
      `Faux. Le vosoritide est administré par injection sous-cutanée.`,
      `Faux selon la grille de 2024. Le vosoritide était déjà disponible en France dans certaines indications.`,
      `Faux selon la grille de 2024. La prescription dépend des indications et des limites d'âge applicables.`,
      `Faux. Il s'agit d'un traitement pharmacologique et non d'une modification du matériel génétique.`
    ]
  ),

  Q(6,
    `Lequel des signes ci-dessous ne fait pas partie du phénotype de la monosomie X ?`,
    [
      `ptérygium colli`,
      `aménorrhée primaire`,
      `malformation de Madelung`,
      `avance de croissance staturale`,
      `coarctation de l'aorte`
    ],
    'D',
    [
      `Faux dans le cadre de la question. Le ptérygium colli, ou cou palmé, est caractéristique du syndrome de Turner.`,
      `Faux. Une aménorrhée primaire peut résulter de l'insuffisance ovarienne associée à la monosomie X.`,
      `Faux selon la grille. La déformation de Madelung peut s'intégrer aux manifestations osseuses liées à une anomalie de SHOX.`,
      `Vrai : c'est le signe absent du phénotype attendu. La monosomie X entraîne généralement un retard statural.`,
      `Faux. La coarctation de l'aorte est une cardiopathie classiquement associée au syndrome de Turner.`
    ]
  ),

  Q(7,
    `Quel est le terme utilisé pour désigner un écartement exagéré entre les angles internes des yeux ?`,
    [
      `hypertélorisme`,
      `hypotélorisme`,
      `télécanthus`,
      `synophrys`,
      `épicanthus`
    ],
    'C',
    [
      `Faux. L'hypertélorisme correspond à une augmentation de la distance entre les orbites.`,
      `Faux. L'hypotélorisme correspond à une diminution de la distance interorbitaire.`,
      `Vrai. Le télécanthus correspond à un écartement excessif des canthi internes, sans augmentation nécessaire de la distance interorbitaire.`,
      `Faux. Le synophrys correspond à la réunion des sourcils sur la ligne médiane.`,
      `Faux. L'épicanthus est un repli cutané situé au niveau de l'angle interne de l'œil.`
    ]
  ),

  Q(8,
    `Que signifie le fait de dire que le risque relatif de spondylarthrite ankylosante est de 80 si l'on est porteur de l'antigène HLA B27 ?`,
    [
      `que 80 % des individus porteurs de cet allèle vont être atteints de la maladie`,
      `que 80 % des individus porteurs de cet allèle sont protégés vis-à-vis de la maladie`,
      `que le risque de développer la maladie est multiplié par 80 par rapport au risque de la population générale`,
      `que le risque de développer la maladie est multiplié de 80 % par rapport au risque de la population générale`,
      `que le risque de développer la maladie est multiplié par 1/80 par rapport au risque de la population générale`
    ],
    'C',
    [
      `Faux. Un risque relatif de 80 ne correspond pas à une probabilité absolue de maladie de 80 %.`,
      `Faux. HLA-B27 est un facteur de susceptibilité et non un facteur protecteur dans cet exemple.`,
      `Vrai. Le risque de développer la maladie est 80 fois celui de la population de référence.`,
      `Faux. Une augmentation de 80 % correspondrait à un risque relatif de 1,8 et non de 80.`,
      `Faux. Un risque relatif de 1/80 indiquerait une diminution importante du risque.`
    ]
  ),

  Q(9,
    `Concernant la variation pathogène g.G1138A ; p.Gly380Arg du gène FGFR3 responsable de l'achondroplasie, quelle proposition est vraie ?`,
    [
      `il s'agit d'un variant de type non-sens`,
      `il s'agit d'une variation ponctuelle`,
      `il s'agit d'une transversion`,
      `elle est mise en évidence par southern blot`,
      `il s'agit d'un allèle hypomorphe`
    ],
    'B',
    [
      `Faux. La substitution Gly380Arg correspond à un variant faux-sens et non non-sens.`,
      `Vrai. La substitution G vers A concerne un seul nucléotide : c'est une variation ponctuelle.`,
      `Faux. G et A sont deux purines ; leur substitution correspond à une transition.`,
      `Faux. Une substitution ponctuelle peut être identifiée par séquençage, notamment Sanger.`,
      `Faux. Le variant provoque un gain de fonction de FGFR3 et non une diminution de son activité.`
    ]
  ),

  Q(10,
    `Quelle technique courante de laboratoire allez-vous utiliser pour détecter une délétion intragénique hétérozygote de 5 paires de bases ?`,
    [
      `Southern blot`,
      `MLPA`,
      `séquençage`,
      `PCR seule`,
      `CGH-array`
    ],
    'C',
    [
      `Faux. Le Southern blot est principalement utilisé pour certaines anomalies de taille de fragments ou expansions.`,
      `Faux. La MLPA détecte surtout des variations du nombre de copies d'exons ou de régions ciblées.`,
      `Vrai. Le séquençage permet de mettre en évidence une petite délétion de cinq nucléotides.`,
      `Faux. Une PCR seule n'identifie pas de façon fiable toutes les petites délétions hétérozygotes sans analyse complémentaire.`,
      `Faux. La CGH-array n'a pas une résolution suffisante pour détecter couramment une délétion de cinq bases.`
    ]
  ),

  Q(11,
    `Pour quel futur enfant le risque d'être atteint d'une maladie génétique est-il de 25 % ?`,
    [
      `enfant d'une femme hétérozygote pour une maladie dominante liée à l'X`,
      `enfant d'un couple de conjoints hétérozygotes pour une maladie autosomique récessive`,
      `enfant d'une femme atteinte d'une maladie autosomique récessive`,
      `enfant d'un homme atteint d'une maladie récessive liée à l'X`,
      `enfant d'un homme atteint d'une maladie multifactorielle`
    ],
    'B',
    [
      `Faux. Une femme hétérozygote pour un caractère dominant lié à l'X transmet l'allèle à 50 % de ses enfants.`,
      `Vrai. Deux parents hétérozygotes Aa × Aa ont un risque de 1/4 d'avoir un enfant aa atteint.`,
      `Faux. Le risque dépend du génotype de l'autre parent et ne peut pas être fixé à 25 % sans information supplémentaire.`,
      `Faux. Un père atteint transmet son chromosome X à toutes ses filles et son chromosome Y à tous ses fils.`,
      `Faux. Les risques de récurrence d'une maladie multifactorielle dépendent de plusieurs paramètres et ne sont pas systématiquement de 25 %.`
    ]
  ),

  Q(12,
    `Dans quelle partie du visage se situe le philtrum ?`,
    [
      `le pavillon de l'oreille`,
      `la cavité buccale`,
      `l'angle interne de l'œil`,
      `entre le nez et la bouche`,
      `entre les deux sourcils`
    ],
    'D',
    [
      `Faux. Le pavillon auriculaire comprend notamment l'hélix, l'anthélix et la conque.`,
      `Faux. Le philtrum n'est pas une structure intrabuccale.`,
      `Faux. L'angle interne de l'œil correspond à la région du canthus médial.`,
      `Vrai. Le philtrum est le sillon vertical situé entre la base du nez et la lèvre supérieure.`,
      `Faux. La région située entre les sourcils correspond à la glabelle.`
    ]
  ),

  Q(13,
    `Lequel des gènes suivants, impliqués dans les prédispositions héréditaires aux cancers, est un oncogène ?`,
    [
      `MLH1`,
      `RET`,
      `TP53`,
      `BRCA1`,
      `NF1`
    ],
    'B',
    [
      `Faux. MLH1 est un gène de réparation des mésappariements de l'ADN.`,
      `Vrai. RET est un proto-oncogène dont l'activation constitutionnelle peut prédisposer notamment aux néoplasies endocriniennes multiples de type 2.`,
      `Faux. TP53 est un gène suppresseur de tumeur.`,
      `Faux. BRCA1 est un gène suppresseur de tumeur impliqué dans la réparation de l'ADN.`,
      `Faux. NF1 est un gène suppresseur de tumeur codant la neurofibromine.`
    ]
  ),

  Q(14,
    `Quelle est la probabilité que le frère ou la sœur, non malade, d'un patient atteint de mucoviscidose, soit hétérozygote pour la maladie ?`,
    [
      `1/2`,
      `1/4`,
      `1/3`,
      `2/3`,
      `1/6`
    ],
    'D',
    [
      `Faux. Parmi les enfants non atteints de deux parents hétérozygotes, la proportion de porteurs n'est pas de 1/2.`,
      `Faux. Un quart correspond au risque d'enfant atteint, avant de connaître son statut clinique.`,
      `Faux. Un tiers correspond à la proportion d'enfants homozygotes sains parmi les enfants non atteints.`,
      `Vrai. Deux parents hétérozygotes donnent AA : 1/4, Aa : 1/2 et aa : 1/4. Parmi les 3/4 non malades, la proportion de porteurs est (1/2)/(3/4) = 2/3.`,
      `Faux. Un sixième est inférieur à la probabilité conditionnelle attendue.`
    ]
  ),

  Q(15,
    `Concernant la neurofibromatose, quelle proposition est vraie ?`,
    [
      `il s'agit d'une maladie de transmission dominante liée à l’X`,
      `elle est due à un gain de fonction du gène NF1`,
      `elle survient rarement par néomutation`,
      `elle fait preuve d’une hétérogénéïté allélique`,
      `elle a une pénétrance incomplète`
    ],
    'D',
    [
      `Faux. La neurofibromatose de type 1 est de transmission autosomique dominante.`,
      `Faux. Elle résulte principalement de variants entraînant une perte de fonction de NF1.`,
      `Faux. Une proportion importante des cas est liée à des néomutations.`,
      `Vrai. De nombreux variants pathogènes différents du gène NF1 peuvent être responsables de la maladie : c'est une hétérogénéité allélique.`,
      `Faux selon la grille. La pénétrance de la NF1 est considérée comme pratiquement complète à l'âge adulte, malgré une expressivité très variable.`
    ]
  ),

  Q(16,
    `Dans une famille où il existe des antécédents familiaux de myopathie de Duchenne depuis plusieurs générations, quelle est la probabilité que la cousine d’un garçon atteint soit conductrice de la maladie, sachant que leurs mères sont demi-sœurs par leur mère ?`,
    [
      `1/2`,
      `1/4`,
      `1/8`,
      `1/16`,
      `1/32`
    ],
    'B',
    [
      `Faux. La cousine n'est pas obligatoirement fille d'une mère conductrice.`,
      `Vrai selon la grille. Dans le modèle généalogique retenu, la mère de la cousine a une probabilité de 1/2 d'être conductrice, puis transmet l'allèle pathogène avec une probabilité de 1/2 : 1/2 × 1/2 = 1/4.`,
      `Faux. Cette probabilité est inférieure au résultat de transmission familial attendu.`,
      `Faux. Ce résultat suppose des événements de transmission supplémentaires.`,
      `Faux. Le risque calculé dans l'annale est supérieur à 1/32.`
    ]
  ),

  Q(17,
    `Concernant le diagnostic de sexe sur sang maternel, quelle proposition est vraie ?`,
    [
      `il ne peut être effectué qu’à partir de 15 semaines d’aménorrhée`,
      `il repose sur une analyse en hybridation in situ du chromosome X`,
      `il est effectué en préalable au diagnostic prénatal des maladies récessives à l’X`,
      `il peut être proposé à toutes les femmes enceintes`,
      `il est effectué sur les cellules fœtales circulant dans le sang maternel`
    ],
    'C',
    [
      `Faux. Le diagnostic non invasif du sexe fœtal peut être réalisé plus précocement.`,
      `Faux. Il repose notamment sur la détection moléculaire de séquences du chromosome Y.`,
      `Vrai. Dans une famille à risque de maladie récessive liée à l'X, déterminer le sexe fœtal peut orienter la stratégie de diagnostic prénatal.`,
      `Faux. Il ne s'agit pas d'un examen proposé systématiquement à toutes les femmes enceintes sans indication médicale.`,
      `Faux. Il est principalement réalisé sur l'ADN fœtal libre circulant dans le plasma maternel, et non sur les cellules fœtales.`
    ]
  ),

  Q(18,
    `Laquelle des maladies suivantes fait preuve d’une totale homogénéité allélique ?`,
    [
      `mucoviscidose`,
      `achondroplasie`,
      `syndrome de Usher`,
      `myopathie de Duchenne`,
      `maladie de Rendu-Osler`
    ],
    'B',
    [
      `Faux. La mucoviscidose présente une importante hétérogénéité allélique du gène CFTR.`,
      `Vrai selon la grille. L'achondroplasie classique est presque toujours associée à la même substitution pathogène de FGFR3, responsable de p.Gly380Arg.`,
      `Faux. Le syndrome de Usher présente une hétérogénéité génique et allélique.`,
      `Faux. Les dystrophinopathies peuvent être causées par de nombreux variants de DMD.`,
      `Faux. La maladie de Rendu-Osler est notamment caractérisée par une hétérogénéité génétique.`
    ]
  ),

  Q(19,
    `A laquelle des analyses suivantes ne s'appliquent pas les dispositions réglementaires concernant les études des caractéristiques génétiques d'une personne ?`,
    [
      `recherche de l’allèle 4 de l'apolipoprotéine E pour le diagnostic prédictif de maladie d'Alzheimer`,
      `dosage des marqueurs sériques de trisomie 21 dans le sang maternel`,
      `dosage de l'alpha-galactosidase chez une femme`,
      `recherche de la prémutation du gène FMR1 chez une femme en ménopause précoce`,
      `dosage du facteur VIII pour la détection des femmes conductrices d'hémophilie A`
    ],
    'E',
    [
      `Faux. La recherche d'un variant APOE constitue une analyse génétique, même si son utilité prédictive individuelle est limitée.`,
      `Faux selon la grille. Le dépistage prénatal fait l'objet d'un encadrement réglementaire particulier.`,
      `Faux selon la grille. Une exploration enzymatique réalisée dans une intention de diagnostic génétique peut relever du cadre considéré dans cette annale.`,
      `Faux. La recherche d'une prémutation FMR1 correspond directement à une étude génétique.`,
      `Vrai selon la grille. Le dosage du facteur VIII est une mesure d'activité d'une protéine de coagulation et non une étude directe de séquence génétique.`
    ]
  ),

  Q(20,
    `Quelle proposition est vraie concernant la phénylcétonurie ?`,
    [
      `elle fait partie des maladies dépistées à la naissance dans les pays industrialisés`,
      `elle est de transmission autosomique dominante`,
      `elle est due à un seul et même allèle dans tous les pays du monde`,
      `en l'absence de traitement, elle provoque une macrocéphalie chez les sujets atteints`,
      `elle résulte d'un déficit de la tyrosine hydroxylase`
    ],
    'A',
    [
      `Vrai. La phénylcétonurie fait partie des maladies classiquement recherchées par le dépistage néonatal.`,
      `Faux. La phénylcétonurie classique est une maladie autosomique récessive.`,
      `Faux. De nombreux variants pathogènes différents du gène PAH ont été identifiés.`,
      `Faux. La maladie non traitée peut entraîner un handicap neurodéveloppemental sévère, sans macrocéphalie caractéristique.`,
      `Faux. La phénylcétonurie classique est liée à un déficit en phénylalanine hydroxylase.`
    ]
  ),

  Q(21,
    `En théorie, par quels mécanismes peut survenir une trisomie autosomique libre, complète et homogène ?`,
    [
      `anomalie de fécondation`,
      `non-disjonction mitotique post-natale`,
      `non-disjonction lors de la 2ème division méiotique`,
      `transmission parentale`,
      `non-disjonction lors de la 1ère division méiotique`
    ],
    'CDE',
    [
      `Faux selon la grille. Une anomalie de fécondation de type dispermie entraîne notamment un risque de triploïdie.`,
      `Faux. Une non-disjonction mitotique postnatale ne peut pas rendre la trisomie constitutionnelle complète et homogène.`,
      `Vrai. Une erreur de non-disjonction en méiose II peut produire un gamète disomique.`,
      `Vrai selon la grille. Un chromosome surnuméraire peut résulter d'une transmission parentale, notamment dans certaines situations familiales particulières.`,
      `Vrai. Une non-disjonction méiotique en première division peut produire un gamète contenant deux homologues.`
    ]
  ),

  Q(22,
    `Concernant les amyotrophies spinales infantiles, quelles propositions sont vraies ?`,
    [
      `elles sont toutes dues à une perte de fonction du gène SMN1`,
      `elles font preuve d’une grande hétérogénéité allélique`,
      `elles sont dues majoritairement à des variants de type faux-sens`,
      `elles bénéficient maintenant d'une thérapeutique basée sur le saut d’exon`,
      `leur degré de sévérité est corrélé au nombre de copies du gène SMN2`
    ],
    'AE',
    [
      `Vrai selon la grille. Les amyotrophies spinales proximales classiques liées à SMN1 résultent d'une perte de fonction de ce gène.`,
      `Faux selon la grille. Les délétions ou conversions de SMN1 représentent la majorité des anomalies rencontrées.`,
      `Faux. Les variants faux-sens ne sont pas le mécanisme majoritaire de l'amyotrophie spinale classique.`,
      `Faux. Le nusinersen favorise l'inclusion de l'exon 7 de SMN2, et non son saut.`,
      `Vrai. Le nombre de copies de SMN2 module généralement la sévérité : davantage de copies sont souvent associées à un phénotype moins sévère.`
    ]
  ),

  Q(23,
    `Concernant le diagnostic prédictif/présymptomatique chez les enfants mineurs asymptomatiques, quelles propositions sont vraies ?`,
    [
      `il ne peut être prescrit qu'en cas de bénéfice immédiat`,
      `il peut être prescrit par le médecin traitant`,
      `il nécessite le recueil écrit et signé du consentement du responsable légal`,
      `les résultats sont envoyés directement à la famille par le laboratoire`,
      `le résultat doit être conservé dans le dossier du patient pour une durée de 20 ans`
    ],
    'AC',
    [
      `Vrai selon la grille. Le test présymptomatique chez un mineur doit répondre à un bénéfice médical justifiant sa réalisation pendant la minorité.`,
      `Faux. Il s'inscrit dans un cadre de prescription et d'accompagnement spécialisé.`,
      `Vrai. Le consentement écrit du représentant légal est nécessaire selon les règles applicables, avec prise en compte du mineur selon sa maturité.`,
      `Faux. Les résultats doivent être communiqués dans un cadre médical approprié.`,
      `Faux selon la grille. La durée proposée ne correspond pas à l'obligation réglementaire retenue pour cette situation.`
    ]
  ),

  Q(24,
    `Concernant la trisomie 21 libre, complète et homogène, quelles propositions sont vraies ?`,
    [
      `il s'agit d'une polyploïdie`,
      `elle survient par anomalie de ségrégation méiotique`,
      `elle est responsable d’une avance de croissance en taille`,
      `elle est constamment associée à une déficience intellectuelle`,
      `sa survenue est favorisée par un âge maternel élevé`
    ],
    'BDE',
    [
      `Faux. La trisomie 21 est une aneuploïdie, et non une polyploïdie.`,
      `Vrai. Elle résulte généralement d'une erreur de ségrégation au cours de la méiose.`,
      `Faux. La trisomie 21 entraîne habituellement une croissance staturale inférieure à la moyenne.`,
      `Vrai selon la grille. La trisomie 21 complète et homogène s'accompagne d'une déficience intellectuelle d'intensité variable.`,
      `Vrai. Le risque de trisomie 21 augmente avec l'âge maternel.`
    ]
  ),

  Q(25,
    `Concernant le mode d'hérédité autosomique dominante, quelles propositions sont vraies ?`,
    [
      `Il s'agit du mode d'hérédité le plus fréquent des maladies monogéniques`,
      `en pathologie humaine on observe fréquemment des sujets homozygotes`,
      `le phénomène d'anticipation est constant dans les maladies autosomiques dominantes`,
      `la survenue d'une maladie autosomique dominante est favorisée par la consanguinité`,
      `les maladies autosomiques dominantes ne sont pas toujours héritées`
    ],
    'AE',
    [
      `Vrai selon la grille. Les maladies autosomiques dominantes représentent une part majeure des maladies monogéniques identifiées.`,
      `Faux. La majorité des patients atteints sont hétérozygotes ; les formes homozygotes sont rares.`,
      `Faux. L'anticipation concerne certaines maladies, notamment celles liées à des expansions instables, et n'est pas constante.`,
      `Faux. La consanguinité favorise particulièrement les maladies autosomiques récessives.`,
      `Vrai. Une maladie autosomique dominante peut apparaître à la suite d'une néomutation.`
    ]
  ),

  Q(26,
    `Laquelle des activités suivantes ne peut pas être effectuée par un(e) conseiller(e) en génétique ?`,
    [
      `prescription d'une analyse génétique`,
      `examen clinique d'un patient`,
      `restitution d'un résultat d'analyse génétique`,
      `étude d’un dossier médical`,
      `prélèvement pour analyse génétique`
    ],
    'BE',
    [
      `Faux selon la grille. Certaines prescriptions génétiques peuvent entrer dans le champ des compétences encadrées du conseiller en génétique.`,
      `Vrai selon la grille : activité non autorisée. Le conseiller en génétique n'est pas habilité à pratiquer un examen clinique médical.`,
      `Faux selon la grille. Le conseiller en génétique peut participer à la communication de résultats dans les conditions réglementaires applicables.`,
      `Faux. L'étude du dossier médical fait partie des activités du conseiller en génétique.`,
      `Vrai selon la grille : activité non autorisée dans le cadre professionnel retenu ici. La réalisation du prélèvement ne relève pas de son champ de compétences.`
    ]
  ),

  Q(27,
    `Lesquels des signes suivants peuvent être observés dans le syndrome de l'X fragile ?`,
    [
      `macroorchidie`,
      `microcéphalie`,
      `microtie`,
      `signes autistiques`,
      `insuffisance staturale`
    ],
    'AD',
    [
      `Vrai. Une macroorchidie, particulièrement après la puberté, est un signe classique du syndrome de l'X fragile.`,
      `Faux. La microcéphalie n'est pas une caractéristique habituelle de ce syndrome.`,
      `Faux. Les anomalies auriculaires typiques concernent plutôt de grandes oreilles ou des oreilles décollées.`,
      `Vrai. Des comportements ou troubles du spectre autistique peuvent être associés au syndrome de l'X fragile.`,
      `Faux selon la grille. L'insuffisance staturale n'est pas un signe caractéristique de cette pathologie.`
    ]
  ),

  Q(28,
    `Lesquels des mécanismes ci-dessous peuvent expliquer qu'un même gène puisse être associé selon les cas à une maladie autosomique dominante ou une maladie autosomique récessive ?`,
    [
      `des facteurs environnementaux`,
      `le nombre d'allèles mutés`,
      `un phénomène d'empreinte parentale`,
      `la nature du variant pathogène`,
      `l'existence d'un gène modificateur`
    ],
    'BD',
    [
      `Faux selon la grille. Les facteurs environnementaux peuvent modifier l'expression phénotypique mais n'expliquent pas ici le mécanisme allélique attendu.`,
      `Vrai. Selon le mécanisme pathogène, l'atteinte d'un seul allèle ou des deux allèles peut produire des phénotypes différents.`,
      `Faux. L'empreinte parentale constitue un mécanisme distinct de régulation de l'expression allélique.`,
      `Vrai. Des variants de perte de fonction, de gain de fonction ou dominants négatifs peuvent produire des modes de transmission différents pour un même gène.`,
      `Faux selon la grille. Un gène modificateur peut influencer le phénotype, mais n'est pas retenu ici comme mécanisme expliquant les deux modes d'hérédité.`
    ]
  ),

  Q(29,
    `Concernant la thérapie génique appliquée à l’amaurose congénitale de Leber, dystrophie rétinienne, liée au gène RPE65, quelles propositions sont vraies ?`,
    [
      `elle utilise un vecteur viral de type AAV (adeno-associated virus)`,
      `elle utilise un vecteur viral de type rétrovirus`,
      `elle s’administre par injection sous-rétinienne`,
      `elle n’est actuellement pas disponible en France`,
      `elle permet de restaurer une vision complètement normale`
    ],
    'AC',
    [
      `Vrai. Cette thérapie génique utilise un vecteur viral adéno-associé pour apporter une copie fonctionnelle de RPE65.`,
      `Faux. Le traitement concerné repose sur un vecteur AAV et non rétroviral.`,
      `Vrai. L'administration est réalisée par injection sous-rétinienne.`,
      `Faux selon la grille de 2024. La thérapie était disponible en France sous certaines conditions.`,
      `Faux. Le traitement peut améliorer certaines fonctions visuelles sans garantir une récupération complète de la vision.`
    ]
  ),

  Q(30,
    `Lesquelles des anomalies chromosomiques ci-dessous peuvent être mises en évidence par l'étude du caryotype conventionnel ?`,
    [
      `une translocation robertsonienne`,
      `une délétion de 800 kb`,
      `une triploïdie`,
      `une trisomie 18 libre, complète et homogène`,
      `une inversion de 1 Mb`
    ],
    'ACD',
    [
      `Vrai. Une translocation robertsonienne est visible au caryotype conventionnel.`,
      `Faux. Une délétion de 800 kb est généralement inférieure au seuil de résolution du caryotype standard.`,
      `Vrai. Une triploïdie est identifiable par la présence de trois lots haploïdes de chromosomes.`,
      `Vrai. Une trisomie 18 libre est directement visible grâce au chromosome 18 supplémentaire.`,
      `Faux. Une inversion de 1 Mb est généralement trop petite pour être détectée par un caryotype conventionnel.`
    ]
  ),

  Q(31,
    `Parmi les paramètres biologiques ou biométriques suivants, lesquels ont un déterminisme multifactoriel ?`,
    [
      `l’indice de masse corporelle`,
      `la glycémie`,
      `le groupe sanguin ABO`,
      `la taille`,
      `l’épaisseur du pylore`
    ],
    'ABDE',
    [
      `Vrai. L'IMC dépend de nombreux facteurs génétiques, alimentaires et environnementaux.`,
      `Vrai. La glycémie résulte d'interactions complexes entre des facteurs génétiques, métaboliques et environnementaux.`,
      `Faux. Le groupe sanguin ABO dépend principalement d'un déterminisme mendélien lié au gène ABO.`,
      `Vrai. La taille est un caractère polygénique fortement influencé aussi par l'environnement.`,
      `Vrai selon la grille. L'épaisseur du pylore peut relever de facteurs génétiques et environnementaux, notamment dans le contexte de la sténose hypertrophique du pylore.`
    ]
  ),

  Q(32,
    `Concernant les avortements spontanés précoces du premier trimestre de la grossesse, quelles propositions sont vraies ?`,
    [
      `ils sont dus à une anomalie chromosomique dans 10 % des cas`,
      `ils peuvent être dus à une anomalie chromosomique de structure équilibrée du zygote`,
      `ils peuvent être provoqués par une triploïdie homogène`,
      `ils peuvent être provoqués par la formule chromosomique 47, XXY`,
      `ils sont constants en cas de monosomie autosomique complète et homogène`
    ],
    'CE',
    [
      `Faux. Les anomalies chromosomiques sont responsables d'une proportion beaucoup plus importante des fausses couches précoces, souvent proche de la moitié.`,
      `Faux selon la grille. Une anomalie équilibrée du zygote n'entraîne généralement pas de déséquilibre de dosage chromosomique.`,
      `Vrai. Une triploïdie homogène est une anomalie chromosomique grave généralement responsable d'une interruption spontanée de grossesse.`,
      `Faux selon la grille. Le syndrome de Klinefelter 47,XXY est compatible avec une naissance vivante.`,
      `Vrai. Une monosomie autosomique complète et homogène est incompatible avec le développement embryonnaire jusqu'à la naissance.`
    ]
  ),

  Q(33,
    `Concernant les néomutations dans les maladies monogéniques, quelles propositions sont vraies ?`,
    [
      `elles ont une origine maternelle exclusive dans certaines maladies liées à l’X`,
      `elles sont rares dans les maladies autosomiques récessives`,
      `elles sont favorisées par un âge paternel élevé`,
      `elles sont fréquentes dans l’achondroplasie`,
      `elles rendent compte de 50% des cas dans les maladies où la fécondité est nulle`
    ],
    'BCD',
    [
      `Faux selon la grille. L'origine parentale des néomutations varie selon les maladies et les mécanismes.`,
      `Vrai. Dans les maladies autosomiques récessives, les variants sont généralement transmis par les parents plutôt que de survenir de novo.`,
      `Vrai. L'âge paternel élevé augmente le risque de certaines néomutations, notamment dans les pathologies liées à FGFR3.`,
      `Vrai. Une grande proportion des achondroplasies résulte d'une néomutation.`,
      `Faux. Dans une maladie dominante empêchant complètement la reproduction des sujets atteints, les nouveaux cas sont théoriquement dus à des néomutations, et non seulement 50 %.`
    ]
  ),

  Q(34,
    `Concernant le phénomène d’empreinte parentale, quelles propositions sont vraies ?`,
    [
      `les gènes soumis à empreinte parentale sont répartis de façon aléatoire dans le génome`,
      `l’empreinte parentale est maintenue de façon clonale lors des divisions des cellules somatiques`,
      `l’apposition de l’empreinte parentale est associée à une hausse du niveau de méthylation de l’ADN`,
      `l’apposition de l’empreinte parentale a lieu au moment de la fécondation`,
      `l’allèle d’origine paternelle d’un gène soumis à empreinte maternelle est physiologiquement inactif`
    ],
    'BC',
    [
      `Faux. Les gènes soumis à empreinte sont souvent organisés en régions génomiques spécifiques.`,
      `Vrai. Les marques d'empreinte parentale sont maintenues lors des divisions des cellules somatiques.`,
      `Vrai selon la grille. L'apposition de marques épigénétiques d'empreinte implique notamment une méthylation spécifique de certaines régions de l'ADN.`,
      `Faux. Les empreintes sont établies au cours de la gamétogenèse, avant la fécondation.`,
      `Faux. Un gène soumis à empreinte maternelle possède généralement un allèle maternel réprimé et un allèle paternel actif.`
    ]
  ),

  Q(35,
    `Concernant les bases moléculaires des maladies monogéniques, quelles propositions sont vraies ?`,
    [
      `les substitutions de base sont les anomalies les plus fréquentes`,
      `les variants pathogènes de type non-sens sont les plus fréquents`,
      `un allèle amorphe correspond à un allèle de type perte de fonction`,
      `la délétion F508del du gène CFTR observée dans la mucoviscidose est une délétion en phase`,
      `les amplifications de motifs répétés sont toujours instables`
    ],
    'ACD',
    [
      `Vrai. Les substitutions nucléotidiques constituent une classe très fréquente de variations génétiques pathogènes.`,
      `Faux. Les variants non-sens ne représentent pas la catégorie majoritaire de tous les variants pathogènes.`,
      `Vrai. Un allèle amorphe est un allèle nul, correspondant à une perte complète de fonction.`,
      `Vrai. F508del correspond à la perte de trois nucléotides, sans décalage du cadre de lecture.`,
      `Faux. Certaines répétitions sont stables, tandis que d'autres présentent une instabilité intergénérationnelle.`
    ]
  ),

  Q(36,
    `Lesquelles des anomalies génétiques ci-dessous peuvent être mises en évidence par la technique de séquençage de type Sanger en pratique courante ?`,
    [
      `une substitution d'une paire de bases`,
      `une amplification exonique de 3 kb`,
      `une délétion intronique de 100 paires de bases`,
      `une insertion exonique de 3 paires de bases`,
      `une délétion interstitielle de 500 kb du chromosome X chez une femme`
    ],
    'AD',
    [
      `Vrai. Le séquençage Sanger permet d'identifier une substitution ponctuelle.`,
      `Faux. Une amplification exonique de plusieurs kilobases nécessite généralement des techniques d'analyse du nombre de copies.`,
      `Faux selon la grille. Une délétion intronique de 100 bases n'est pas retenue parmi les anomalies recherchées en pratique courante par cette technique dans le cadre du sujet.`,
      `Vrai. Une petite insertion exonique de trois bases peut être détectée par séquençage Sanger.`,
      `Faux. Une délétion chromosomique hétérozygote de 500 kb est généralement recherchée par CGH-array ou une autre technique de dosage.`
    ]
  ),

  Q(37,
    `Dans la liste suivante, quelles sont les indications actuellement admises d'un point de vue réglementaire pour l'étude du caryotype fœtal ?`,
    [
      `un âge maternel supérieur ou égal à 38 ans`,
      `un antécédent d'enfant atteint de syndrome de Klinefelter`,
      `un parent porteur d'une inversion paracentrique`,
      `un test ADNlc positif`,
      `un risque de trisomie 21 évalué par le dépistage combiné à 1/500`
    ],
    'BCD',
    [
      `Faux selon la grille de 2024. L'âge maternel seul ne constitue plus une indication systématique de caryotype fœtal invasif.`,
      `Vrai selon la grille officielle. Un antécédent chromosomique chez un enfant peut justifier une discussion de diagnostic prénatal.`,
      `Vrai selon la grille. Une anomalie chromosomique structurale parentale peut justifier une exploration chromosomique fœtale.`,
      `Vrai. Un résultat positif au dépistage de l'ADN libre circulant doit être confirmé par un examen diagnostique approprié.`,
      `Faux selon la grille. Un risque combiné de 1/500 oriente vers une stratégie de dépistage complémentaire plutôt que directement vers un caryotype invasif.`
    ]
  ),

  Q(38,
    `Parmi les différents types de craniosténose, lesquels concernent une ou les deux sutures coronales ?`,
    [
      `plagiocéphalie antérieure`,
      `plagiocéphalie postérieure`,
      `brachycéphalie`,
      `scaphocéphalie`,
      `trigonocéphalie`
    ],
    'AC',
    [
      `Vrai. Une plagiocéphalie antérieure synostosique peut résulter de la fusion prématurée d'une suture coronale.`,
      `Faux. La plagiocéphalie postérieure synostosique concerne principalement une suture lambdoïde.`,
      `Vrai. Une synostose bilatérale des sutures coronales peut provoquer une brachycéphalie.`,
      `Faux. La scaphocéphalie est principalement liée à une synostose sagittale.`,
      `Faux. La trigonocéphalie résulte d'une synostose de la suture métopique.`
    ]
  ),

  Q(39,
    `A propos de la prédisposition héréditaire au rétinoblastome, quelles sont les bonnes réponses ?`,
    [
      `elle est due au gène RET`,
      `elle expose à un risque augmenté d’ostéosarcome`,
      `elle expose à un risque augmenté de cancer de l’endomètre`,
      `elle expose à un risque augmenté de cancer de la thyroïde`,
      `elle se transmet sur un mode autosomique dominant`
    ],
    'BE',
    [
      `Faux. Le rétinoblastome héréditaire est lié à des variants constitutionnels du gène RB1.`,
      `Vrai. Les personnes porteuses d'une prédisposition RB1 présentent un risque accru de certains cancers secondaires, notamment d'ostéosarcome.`,
      `Faux. Le cancer de l'endomètre n'est pas une association caractéristique du syndrome RB1.`,
      `Faux. Le risque de cancer de la thyroïde n'est pas le risque caractéristique recherché dans cette question.`,
      `Vrai. La prédisposition héréditaire au rétinoblastome est de transmission autosomique dominante, avec un mécanisme tumoral impliquant l'inactivation des deux copies de RB1.`
    ]
  ),

  Q(40,
    `Parmi les signes échographiques suivants lesquels sont considérés comme de petits signes d’appel de trisomie 21 ?`,
    [
      `fémur court`,
      `omphalocèle`,
      `aplasie des os propres du nez`,
      `scaphocéphalie`,
      `clarté nucale augmentée`
    ],
    'ACE',
    [
      `Vrai. Un fémur court constitue un marqueur échographique mineur de trisomie 21.`,
      `Faux. L'omphalocèle est une malformation structurale, et non un petit signe d'appel échographique.`,
      `Vrai. L'absence ou l'hypoplasie des os propres du nez est un marqueur utilisé dans l'évaluation du risque de trisomie 21.`,
      `Faux. La scaphocéphalie est une déformation crânienne associée notamment à une synostose sagittale.`,
      `Vrai. Une clarté nucale augmentée constitue un signe échographique d'appel d'anomalie chromosomique, notamment de trisomie 21.`
    ]
  )
];
