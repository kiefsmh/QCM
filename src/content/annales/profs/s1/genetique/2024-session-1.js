
export const meta = {
  title: 'Annales 2024 — Session 1',
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
    `À quel scientifique doit-on la découverte du nombre exact de chromosomes de l’espèce humaine ?`,
    [
      `Lejeune`,
      `Morgan`,
      `Mendel`,
      `Tijo`,
      `Watson`
    ],
    'D',
    [
      `Faux. Jérôme Lejeune est notamment connu pour ses travaux sur la trisomie 21.`,
      `Faux. Thomas Hunt Morgan a démontré le rôle des chromosomes dans l'hérédité grâce à la drosophile.`,
      `Faux. Gregor Mendel a établi les lois fondamentales de l'hérédité.`,
      `Vrai. Joe Hin Tjio et Albert Levan ont établi en 1956 que l'espèce humaine possède 46 chromosomes.`,
      `Faux. James Watson est associé à la découverte de la structure en double hélice de l'ADN.`
    ]
  ),

  Q(2,
    `Par rapport à la technique de CGH-array, quel est l’avantage de l’étude du caryotype en technique standard ?`,
    [
      `il s’agit d’une technique pangénomique`,
      `il détecte les anomalies de nombre des chromosomes`,
      `il est de plus haute résolution`,
      `il détecte les remaniements équilibrés`,
      `il peut détecter des mosaïques`
    ],
    'D',
    [
      `Faux. Les deux techniques permettent une exploration pangénomique, mais avec des capacités différentes.`,
      `Faux. La CGH-array permet également de détecter les anomalies de nombre de copies chromosomiques.`,
      `Faux. La CGH-array possède une résolution supérieure au caryotype conventionnel pour les déséquilibres génomiques.`,
      `Vrai. Le caryotype peut identifier des translocations et inversions équilibrées, qui ne modifient pas la quantité globale d'ADN.`,
      `Faux selon la grille. Les deux techniques peuvent détecter certaines mosaïques, selon leur proportion et leur nature.`
    ]
  ),

  Q(3,
    `Quelle proposition est vraie concernant le chromosome Philadelphie ?`,
    [
      `il constitue un marqueur du cancer du sein`,
      `il est exprimé à l’état constitutionnel`,
      `il résulte d’une translocation robertsonienne`,
      `il entraîne la production d’une protéine chimérique`,
      `il est détectable par CGH-array`
    ],
    'D',
    [
      `Faux. Le chromosome Philadelphie est notamment caractéristique de la leucémie myéloïde chronique.`,
      `Faux. Il s'agit généralement d'une anomalie acquise des cellules hématopoïétiques.`,
      `Faux. Il résulte d'une translocation réciproque t(9;22), et non robertsonienne.`,
      `Vrai. La fusion BCR::ABL1 produit une tyrosine kinase chimérique constitutivement active.`,
      `Faux. La CGH-array ne détecte pas directement une translocation équilibrée sans variation du nombre de copies.`
    ]
  ),

  Q(4,
    `Concernant le phénomène d’empreinte parentale, quelle proposition est vraie ?`,
    [
      `les gènes soumis à empreinte parentale sont répartis de façon aléatoire dans le génome`,
      `l’empreinte parentale est maintenue de façon clonale lors des divisions des cellules somatiques`,
      `l’apposition de l’empreinte parentale est associée à une baisse du niveau de méthylation de l’ADN`,
      `l’apposition de l’empreinte parentale a lieu au moment de la fécondation`,
      `l’allèle d’origine paternelle d’un gène soumis à empreinte paternelle est physiologiquement actif`
    ],
    'B',
    [
      `Faux. Les gènes soumis à empreinte sont fréquemment organisés en régions ou domaines génomiques spécifiques.`,
      `Vrai. Les marques épigénétiques d'empreinte sont normalement conservées lors des divisions des cellules somatiques.`,
      `Faux. L'empreinte parentale repose notamment sur des marques différentielles de méthylation de l'ADN, pas systématiquement sur leur diminution.`,
      `Faux. Les empreintes sont établies au cours de la gamétogenèse puis maintenues après la fécondation.`,
      `Faux. Une empreinte paternelle signifie généralement que l'allèle d'origine paternelle est réprimé.`
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
      `Vrai. Le vosoritide est un analogue du peptide natriurétique de type C, qui contrebalance certaines conséquences de l'activation de FGFR3.`,
      `Faux. Le vosoritide est administré par injection sous-cutanée.`,
      `Faux selon la grille de 2024. Le traitement était déjà disponible en France dans certaines indications.`,
      `Faux selon la grille. Sa prescription dépend des indications et des limites d'âge de l'autorisation applicable.`,
      `Faux. Le vosoritide est un traitement pharmacologique et non une thérapie génique.`
    ]
  ),

  Q(6,
    `Laquelle des formules chromosomiques ci-dessous est équilibrée ?`,
    [
      `47, XX, +18`,
      `45, XY, trob(13 ;14)`,
      `45, X`,
      `47, XXY`,
      `46, XX / 47, XXX`
    ],
    'B',
    [
      `Faux. Il s'agit d'une trisomie 18, entraînant un déséquilibre chromosomique.`,
      `Vrai. Une translocation robertsonienne équilibrée entre les chromosomes 13 et 14 peut entraîner un caryotype à 45 chromosomes sans perte significative de matériel génétique.`,
      `Faux. La formule 45,X correspond à une monosomie X.`,
      `Faux. La formule 47,XXY correspond au syndrome de Klinefelter.`,
      `Faux. Cette formule correspond à une mosaïque comportant une lignée cellulaire avec un chromosome X supplémentaire.`
    ]
  ),

  Q(7,
    `Quel est l’élément anatomique qui est masqué en cas de télécanthus ?`,
    [
      `la glabelle`,
      `le philtrum`,
      `la columelle`,
      `le tragus`,
      `la caroncule`
    ],
    'E',
    [
      `Faux. La glabelle correspond à la région située entre les sourcils.`,
      `Faux. Le philtrum est le sillon vertical situé entre le nez et la lèvre supérieure.`,
      `Faux. La columelle est la structure située entre les narines.`,
      `Faux. Le tragus appartient à l'anatomie du pavillon auriculaire.`,
      `Vrai selon la grille. La caroncule lacrymale est située à l'angle interne de l'œil ; son aspect peut être modifié ou masqué dans certaines anomalies de la région canthale.`
    ]
  ),

  Q(8,
    `Parmi les paramètres biologiques ou biométriques suivants, lequel n’est pas de déterminisme multifactoriel ?`,
    [
      `la taille`,
      `l’indice de masse corporelle`,
      `le groupe sanguin rhésus`,
      `l’épaisseur du pylore`,
      `la glycémie`
    ],
    'C',
    [
      `Faux. La taille dépend de nombreux variants génétiques et de facteurs environnementaux.`,
      `Faux. L'IMC résulte de l'interaction de nombreux facteurs génétiques, alimentaires et comportementaux.`,
      `Vrai. Le groupe sanguin Rhésus relève principalement d'un déterminisme génétique mendélien, notamment du système RHD/RHCE.`,
      `Faux. L'épaisseur du pylore peut être influencée par des facteurs génétiques et environnementaux.`,
      `Faux. La glycémie dépend de nombreux gènes ainsi que de l'alimentation, des hormones et du métabolisme.`
    ]
  ),

  Q(9,
    `Laquelle des propositions suivantes est erronée en ce qui concerne les amplifications de motifs répétés ?`,
    [
      `elles ne sont pas toujours instables`,
      `elles sont pathogènes en dessous d’une valeur seuil`,
      `elles représentent la seule explication connue au phénomène d’anticipation`,
      `le motif répété est variable selon les pathologies`,
      `leur localisation est variable selon les gènes`
    ],
    'B',
    [
      `Faux dans le cadre de la question demandant la proposition erronée. Certaines expansions répétées sont relativement stables.`,
      `Vrai : c'est la proposition erronée attendue. En règle générale, la pathogénicité apparaît lorsque le nombre de répétitions dépasse un seuil propre à la maladie.`,
      `Faux selon la grille. Les expansions instables constituent un mécanisme classique expliquant l'anticipation génétique.`,
      `Faux dans le cadre de la question. Les motifs peuvent être différents selon les maladies, par exemple CAG ou CTG.`,
      `Faux dans le cadre de la question. Les expansions peuvent se situer dans des régions codantes ou non codantes.`
    ]
  ),

  Q(10,
    `Laquelle des techniques suivantes permet de mettre en évidence une substitution d’une seule base ?`,
    [
      `analyse en hybridation in situ fluorescente`,
      `analyse en PCR quantitative`,
      `séquençage de type Sanger`,
      `Southern blot`,
      `étude du caryotype en haute résolution`
    ],
    'C',
    [
      `Faux. La FISH identifie des régions chromosomiques ciblées et ne permet pas habituellement de détecter une substitution nucléotidique isolée.`,
      `Faux selon la grille. Une PCR quantitative standard n'est pas une méthode générale d'identification des substitutions de bases.`,
      `Vrai. Le séquençage Sanger permet de lire une séquence d'ADN et d'identifier une substitution ponctuelle.`,
      `Faux. Le Southern blot est principalement utilisé pour certaines analyses de fragments d'ADN et d'expansions.`,
      `Faux. Le caryotype n'a pas une résolution suffisante pour identifier une variation d'une seule base.`
    ]
  ),

  Q(11,
    `Dans quelle situation existe-t-il une probabilité de transmission à la descendance de 50 % ?`,
    [
      `transmission d’un père à sa fille d'un caractère récessif lié à l’X`,
      `transmission d’une mère à sa fille d’un caractère d’hérédité mitochondriale`,
      `transmission d’une mère à son fils d’un caractère d’hérédité mitochondriale`,
      `transmission d’une mère à sa fille d'un caractère dominant lié à l’X`,
      `transmission d’un père à son fils d'un caractère holandrique`
    ],
    'D',
    [
      `Faux. Un père transmet systématiquement son chromosome X à ses filles, même si leur phénotype dépend de leur autre allèle.`,
      `Faux. L'ADN mitochondrial est transmis par la mère à l'ensemble de ses enfants, sans probabilité mendélienne de 50 %.`,
      `Faux. Un fils reçoit également son ADN mitochondrial de sa mère.`,
      `Vrai. Une mère hétérozygote pour une maladie dominante liée à l'X transmet l'allèle pathogène à une fille sur deux.`,
      `Faux. Un père transmet son chromosome Y à tous ses fils.`
    ]
  ),

  Q(12,
    `Quelle est la suture crânienne qui est prématurément fusionnée dans une plagiocéphalie postérieure lorsque celle-ci n’est pas d’origine positionnelle ?`,
    [
      `la suture sagittale`,
      `la suture métopique`,
      `une suture pariéto-squameuse`,
      `une suture lambdoïde`,
      `une suture coronale`
    ],
    'D',
    [
      `Faux. La synostose sagittale entraîne principalement une scaphocéphalie.`,
      `Faux. La synostose métopique entraîne une trigonocéphalie.`,
      `Faux. Ce n'est pas la suture classiquement responsable d'une plagiocéphalie postérieure synostosique.`,
      `Vrai. La fusion prématurée d'une suture lambdoïde peut entraîner une plagiocéphalie postérieure.`,
      `Faux. Une synostose coronale unilatérale entraîne plutôt une plagiocéphalie antérieure.`
    ]
  ),

  Q(13,
    `Lequel des signes suivants ne fait pas partie du phénotype de la trisomie 21 libre, complète et homogène ?`,
    [
      `canal atrio-ventriculaire`,
      `hypotonie`,
      `taches de Brushfield`,
      `avance staturale`,
      `cataracte congénitale`
    ],
    'D',
    [
      `Faux dans le cadre de cette question. Le canal atrioventriculaire est une cardiopathie classiquement associée à la trisomie 21.`,
      `Faux. L'hypotonie est une manifestation fréquente de la trisomie 21.`,
      `Faux. Les taches de Brushfield peuvent être retrouvées sur l'iris.`,
      `Vrai : c'est l'élément absent du phénotype typique. La trisomie 21 est plutôt associée à un ralentissement de la croissance staturale.`,
      `Faux. Une cataracte congénitale peut être observée dans le cadre d'une trisomie 21.`
    ]
  ),

  Q(14,
    `Quelle est la probabilité que le futur enfant d’un couple de cousins germains, dont l’homme a un enfant né d’une première union atteint de mucoviscidose, soit à son tour atteint de la maladie ?`,
    [
      `1/8`,
      `1/16`,
      `1/32`,
      `1/64`,
      `1/128`
    ],
    'C',
    [
      `Faux. Cette probabilité surestime le risque calculé dans le cadre généalogique retenu.`,
      `Faux. Ce résultat ne tient pas entièrement compte des probabilités intermédiaires de transmission au sein de la famille.`,
      `Vrai. L'homme est obligatoirement hétérozygote. La probabilité que sa cousine soit porteuse de l'allèle familial est de 1/8 dans le modèle retenu ; le risque pour leur enfant est donc 1/8 × 1/4 = 1/32.`,
      `Faux. Cette valeur est inférieure au risque attendu d'après le raisonnement généalogique du QCS.`,
      `Faux. Cette probabilité est trop faible par rapport au résultat officiel.`
    ]
  ),

  Q(15,
    `Concernant l’achondroplasie, quelle proposition est vraie ?`,
    [
      `il s'agit d'une maladie de transmission dominante liée à l’X`,
      `elle est due à un gain de fonction du gène FGFR3`,
      `elle survient rarement par néomutation`,
      `elle témoigne d’une grande hétérogénéïté allélique`,
      `elle a une pénétrance incomplète`
    ],
    'B',
    [
      `Faux. L'achondroplasie est une maladie autosomique dominante.`,
      `Vrai. L'activation excessive de FGFR3 inhibe la croissance osseuse endochondrale.`,
      `Faux. Une grande proportion des cas survient par néomutation.`,
      `Faux. L'achondroplasie est caractérisée par une faible hétérogénéité allélique, avec un variant pathogène très récurrent.`,
      `Faux. La pénétrance de l'achondroplasie classique est considérée comme complète.`
    ]
  ),

  Q(16,
    `Quelle est la probabilité que la cousine d’un garçon atteint d’hémophilie soit conductrice de la maladie, sachant que leurs mères sont demi-sœurs par leur père qui est lui-même atteint ?`,
    [
      `1/2`,
      `1/4`,
      `1/8`,
      `1/16`,
      `1/32`
    ],
    'A',
    [
      `Vrai. Le grand-père atteint transmet obligatoirement son chromosome X muté à chacune de ses filles. La mère de la cousine est donc conductrice et transmet l'allèle pathogène à une fille sur deux.`,
      `Faux. Ce risque sous-estime la transmission maternelle, puisque la mère de la cousine est obligatoirement conductrice.`,
      `Faux. Le risque n'est pas réduit à 1/8.`,
      `Faux. Il n'y a pas autant de transmissions probabilistes successives à prendre en compte.`,
      `Faux. La probabilité de conductrice est supérieure à 1/32.`
    ]
  ),

  Q(17,
    `Concernant le diagnostic préimplantatoire, quelle proposition est vraie ?`,
    [
      `il est possible en France dans tous les centres de diagnostic prénatal`,
      `il est possible pour toutes les maladies génétiques quel que soit le degré de sévérité`,
      `il est effectué sur un embryon au stade de 8 blastomères`,
      `il permet une étude complète du caryotype embryonnaire`,
      `il permet un transfert d’embryons à 12 semaines de développement`
    ],
    'C',
    [
      `Faux. Le diagnostic préimplantatoire est réalisé dans des centres spécifiquement autorisés.`,
      `Faux. Le DPI est soumis à des indications et à des conditions légales strictes.`,
      `Vrai selon la grille de 2024. La biopsie d'un embryon au stade de segmentation, autour de 8 blastomères, constitue une technique historique de DPI. Les pratiques actuelles privilégient souvent la biopsie du trophectoderme au stade blastocyste.`,
      `Faux selon la grille. Le DPI vise des anomalies génétiques définies et n'implique pas systématiquement une étude complète du caryotype.`,
      `Faux. Le transfert embryonnaire intervient quelques jours après la fécondation, et non à 12 semaines de développement.`
    ]
  ),

  Q(18,
    `En génétique médicale, à quoi correspond le terme pénétrance ?`,
    [
      `au nombre de sujets hétérozygotes pour un caractère autosomique dominant qui ont le phénotype`,
      `au nombre de sujets hétérozygotes pour un caractère autosomique dominant qui n’ont pas le phénotype`,
      `au nombre de sujets hétérozygotes pour un caractère autosomique dominant qui transmettent le phénotype`,
      `au nombre de sujets hétérozygotes pour un caractère autosomique récessif qui ont le phénotype`,
      `au nombre de femmes hétérozygotes pour un caractère récessif lié à l’X qui ont le phénotype`
    ],
    'A',
    [
      `Vrai selon la grille. Plus précisément, la pénétrance est la proportion d'individus porteurs d'un génotype donné qui expriment le phénotype associé.`,
      `Faux. Cette proposition décrit les individus porteurs du variant mais ne présentant pas le phénotype.`,
      `Faux. La pénétrance mesure l'expression phénotypique et non la transmission du caractère.`,
      `Faux. Les hétérozygotes d'une maladie autosomique récessive sont généralement des porteurs sains.`,
      `Faux. Cette situation ne correspond pas à la définition générale attendue de la pénétrance.`
    ]
  ),

  Q(19,
    `Concernant les tests génétiques, quelle proposition est vraie ?`,
    [
      `ils ne peuvent être prescrits que pour des maladies d’une particulière gravité`,
      `ils sont strictement interdits dans tous les cas chez les enfants mineurs`,
      `ils ne peuvent être prescrits que par des généticiens`,
      `le résultat peut être transmis directement au patient par le laboratoire`,
      `les laboratoires pratiquant ces tests doivent avoir reçu une autorisation de l’Agence Régionale de Santé`
    ],
    'E',
    [
      `Faux. Les indications des examens génétiques ne se limitent pas exclusivement aux maladies particulièrement graves.`,
      `Faux. Des examens génétiques peuvent être réalisés chez des mineurs lorsqu'ils présentent un intérêt médical approprié.`,
      `Faux. Les tests génétiques peuvent être prescrits par d'autres praticiens compétents selon le contexte et le cadre réglementaire.`,
      `Faux selon la grille. La communication et l'explication du résultat s'inscrivent dans un circuit médical réglementé.`,
      `Vrai selon le cadre réglementaire retenu dans l'annale. Les laboratoires réalisant des examens de génétique constitutionnelle doivent disposer des autorisations requises.`
    ]
  ),

  Q(20,
    `Quelle proposition est vraie concernant la drépanocytose ?`,
    [
      `il s'agit d'une maladie avec une très grande hétérogénéité allélique`,
      `elle est de transmission autosomique dominante`,
      `elle est due à un seul et même gène dans tous les pays du monde`,
      `elle est due à un défaut de la chaîne alpha de l’hémoglobine`,
      `les variants pathogènes diffèrent selon les pays`
    ],
    'C',
    [
      `Faux selon la grille. L'HbS classique résulte d'une mutation spécifique très récurrente du gène HBB.`,
      `Faux. La drépanocytose est de transmission autosomique récessive.`,
      `Vrai. La drépanocytose classique est liée au gène HBB, codant la chaîne bêta de l'hémoglobine.`,
      `Faux. La mutation touche la chaîne bêta et non la chaîne alpha.`,
      `Faux selon la grille. Le variant HbS classique correspond à la même substitution pathogène, quelle que soit l'origine géographique.`
    ]
  ),

  Q(21,
    `A propos des anomalies chromosomiques, quelles propositions sont vraies ?`,
    [
      `les aneuploïdies correspondent à un nombre anormal de lots haploïdes de chromosomes`,
      `la monosomie X complète et homogène n’est pas viable`,
      `les translocations robertsoniennes concernent exclusivement les chromosomes acrocentriques`,
      `dans les trisomies autosomiques, le chromosome surnuméraire est plus volontiers d'origine maternelle`,
      `la trisomie 21 est due préférentiellement à un défaut de ségrégation lors de la 2ème division méiotique`
    ],
    'CD',
    [
      `Faux. Les aneuploïdies concernent le nombre de chromosomes individuels. Un nombre anormal de lots haploïdes correspond à une polyploïdie.`,
      `Faux. La monosomie X est compatible avec une naissance vivante, même si la majorité des grossesses concernées se terminent spontanément.`,
      `Vrai. Les translocations robertsoniennes concernent les chromosomes acrocentriques 13, 14, 15, 21 et 22.`,
      `Vrai. La majorité des trisomies autosomiques résulte d'erreurs de ségrégation d'origine maternelle.`,
      `Faux. La trisomie 21 résulte majoritairement d'une non-disjonction au cours de la première division méiotique maternelle.`
    ]
  ),

  Q(22,
    `Concernant les myopathies de Duchenne et de Becker, quelles propositions sont vraies ?`,
    [
      `elles sont de transmission dominante liée à l’X`,
      `elles sont dues à des variants pathogènes de type perte de fonction`,
      `elles sont dues majoritairement à des variants de type faux-sens`,
      `tous les patients atteints de ces maladies peuvent bénéficier du traitement par saut d’exon`,
      `la myopathie de Becker diffère de celle de Duchenne du fait d’un maintien du cadre de lecture du gène`
    ],
    'BE',
    [
      `Faux. Les dystrophinopathies de Duchenne et de Becker sont de transmission récessive liée à l'X.`,
      `Vrai. Elles résultent de variants altérant la production ou la fonction de la dystrophine.`,
      `Faux. Les délétions et duplications d'exons constituent une part importante des variants.`,
      `Faux. Le saut d'exon dépend du variant génétique et n'est pas applicable à tous les patients.`,
      `Vrai. Dans la forme de Becker, le cadre de lecture est généralement préservé, permettant la production d'une dystrophine partiellement fonctionnelle.`
    ]
  ),

  Q(23,
    `Concernant les études des caractéristiques génétiques d’une personne, quelles propositions sont vraies ?`,
    [
      `le test présymptomatique repose sur un protocole de prise en charge qui impose un délai de réflexion`,
      `le test présymptomatique concerne les maladies à début précoce`,
      `un test présymptomatique peut être prescrit par tout praticien ayant une bonne connaissance des bases génétiques de la maladie concernée`,
      `le dépistage préconceptionnel des hétérozygotes pour des maladies autosomiques récessives en population générale n’est pas disponible en France`,
      `l’identification des personnes par leurs empreintes génétiques n’est possible en France que dans le cadre d’une procédure judiciaire`
    ],
    'ADE',
    [
      `Vrai selon la grille. Les examens présymptomatiques s'intègrent dans un accompagnement spécialisé comportant notamment information, réflexion et consentement.`,
      `Faux. Le test présymptomatique concerne notamment des maladies à révélation tardive, avant l'apparition des symptômes.`,
      `Faux. Les tests présymptomatiques sont encadrés par un dispositif spécifique et ne relèvent pas de n'importe quel praticien.`,
      `Vrai selon la situation réglementaire et organisationnelle française retenue dans l'annale de 2024.`,
      `Vrai selon la grille officielle. La formulation est juridiquement simplificatrice et doit être replacée dans le cadre réglementaire de l'époque.`
    ]
  ),

  Q(24,
    `Concernant la trisomie X, quelles propositions sont vraies ?`,
    [
      `elle aboutit souvent à une fausse-couche spontanée précoce`,
      `elle peut entraîner une insuffisance de croissance en taille`,
      `le gonosome surnuméraire est le plus souvent d’origine paternelle`,
      `elle n’occasionne pas de malformations congénitales`,
      `elle n’occasionne pas de troubles de la fertilité`
    ],
    'DE',
    [
      `Faux. La trisomie X est souvent compatible avec une vie peu symptomatique et peut rester méconnue.`,
      `Faux. Les femmes 47,XXX présentent plutôt une taille supérieure à la moyenne.`,
      `Faux. Le chromosome X surnuméraire est le plus souvent d'origine maternelle.`,
      `Vrai selon la grille. La trisomie X n'est pas classiquement associée à un syndrome malformatif congénital caractéristique. Des anomalies peuvent toutefois survenir.`,
      `Vrai selon la grille. La fertilité est généralement conservée, même si des troubles ovariens peuvent être observés chez certaines patientes.`
    ]
  ),

  Q(25,
    `A propos de la dystrophie myotonique de Steinert, quelles propositions sont vraies ?`,
    [
      `elle est de transmission autosomique dominante`,
      `elle est due à une amplification de motifs répétés stable`,
      `elle a une expressivité variable`,
      `elle est due à une expansion polyglutamine dans la protéine`,
      `elle est due à une perte de fonction de la protéine`
    ],
    'AC',
    [
      `Vrai. La dystrophie myotonique de type 1 est une maladie autosomique dominante.`,
      `Faux. L'expansion CTG est instable et peut augmenter au fil des générations.`,
      `Vrai. L'intensité et l'âge d'apparition des manifestations sont très variables.`,
      `Faux. L'expansion CTG se situe dans une région non traduite du gène DMPK.`,
      `Faux. Le mécanisme principal implique une toxicité de l'ARN expansé et une perturbation de l'épissage de plusieurs transcrits.`
    ]
  ),

  Q(26,
    `Concernant la profession de conseiller en génétique, quelles propositions sont vraies ?`,
    [
      `elle peut être exercée après une formation de niveau licence`,
      `elle ne peut être exercée que sous le contrôle d’un médecin généticien`,
      `elle n'autorise pas la prescription d’un test génétique à visée présymptomatique`,
      `elle autorise la prescription d’une analyse génétique prénatale`,
      `elle n’autorise pas le rendu d’un résultat de séquençage du génome entier`
    ],
    'BD',
    [
      `Faux. La profession nécessite une formation spécialisée de niveau master.`,
      `Vrai selon la grille. Le conseiller en génétique exerce dans un cadre médical encadré, sous responsabilité médicale.`,
      `Faux selon la grille. Les compétences de prescription et leur cadre ont évolué et dépendent des dispositions applicables.`,
      `Vrai selon la grille officielle. Certaines prescriptions d'analyses prénatales peuvent entrer dans le champ d'exercice encadré du conseiller en génétique.`,
      `Faux selon la grille. Les modalités de communication des résultats dépendent du cadre légal, des responsabilités et du contexte clinique.`
    ]
  ),

  Q(27,
    `Lesquels des signes suivants peuvent être observés dans les pathologies du gène CFTR ?`,
    [
      `dilatation des bronches`,
      `dysgénésie gonadique chez les hommes`,
      `iléus méconial`,
      `pancréatite chronique`,
      `obésité`
    ],
    'ACD',
    [
      `Vrai. Les atteintes respiratoires liées à CFTR peuvent entraîner des bronchectasies.`,
      `Faux. Les hommes atteints peuvent présenter une absence bilatérale des canaux déférents, mais pas typiquement une dysgénésie gonadique.`,
      `Vrai. L'iléus méconial est une manifestation néonatale classique de la mucoviscidose.`,
      `Vrai. Certains variants de CFTR sont associés à une pancréatite chronique.`,
      `Faux. La mucoviscidose est plutôt associée à des difficultés nutritionnelles et pondérales.`
    ]
  ),

  Q(28,
    `Lesquelles des maladies suivantes présentent une hétérogénéité génique ?`,
    [
      `ataxie de Friedreich`,
      `maladie de Rendu-Osler`,
      `phénylcétonurie`,
      `syndrome de Usher`,
      `maladie de Huntington`
    ],
    'BD',
    [
      `Faux selon la grille. L'ataxie de Friedreich classique est principalement liée au gène FXN.`,
      `Vrai. La maladie de Rendu-Osler peut être causée par des variants de plusieurs gènes, notamment ENG et ACVRL1.`,
      `Faux selon la grille. La phénylcétonurie classique est principalement liée au gène PAH.`,
      `Vrai. Le syndrome de Usher présente une importante hétérogénéité génétique.`,
      `Faux. La maladie de Huntington classique est associée à une expansion CAG du gène HTT.`
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
      `Vrai. La thérapie génique RPE65 utilise un vecteur viral adéno-associé pour apporter une copie fonctionnelle du gène.`,
      `Faux. Le traitement de référence utilise un AAV et non un rétrovirus.`,
      `Vrai. L'administration se fait par injection sous-rétinienne.`,
      `Faux selon la grille de 2024. Cette thérapie génique était déjà disponible en France pour certaines indications.`,
      `Faux. Le traitement peut améliorer les performances visuelles sans restaurer une vision totalement normale.`
    ]
  ),

  Q(30,
    `A propos de l'analyse en FISH interphasique, quelles sont les bonnes réponses ?`,
    [
      `elle permet une détection rapide d’aneuploïdie`,
      `elle est plus résolutive que la CGH-array`,
      `elle est utile pour la mise en évidence d’une mosaïque`,
      `elle peut se faire sur un frottis jugal`,
      `elle permet l'analyse d'anomalies de structure`
    ],
    'ACDE',
    [
      `Vrai. La FISH interphasique permet de rechercher rapidement certaines aneuploïdies ciblées.`,
      `Faux. La CGH-array permet généralement une analyse pangénomique des déséquilibres avec une meilleure résolution.`,
      `Vrai. L'analyse d'un grand nombre de noyaux permet de rechercher certaines mosaïques.`,
      `Vrai. La FISH peut être réalisée sur des cellules interphasiques obtenues notamment par frottis jugal.`,
      `Vrai. Des sondes appropriées permettent d'identifier certaines anomalies structurales ciblées.`
    ]
  ),

  Q(31,
    `Lesquels des marqueurs biologiques suivants sont connus pour prédisposer à une affection de déterminisme multifactoriel ?`,
    [
      `variants du gène NOD2`,
      `antigène HLA-B27`,
      `créatine phospho-kinase`,
      `facteur VIII`,
      `apolipoprotéine E4`
    ],
    'ABE',
    [
      `Vrai. Certains variants NOD2 sont associés à une susceptibilité accrue à la maladie de Crohn.`,
      `Vrai. HLA-B27 constitue un facteur génétique de prédisposition aux spondyloarthrites.`,
      `Faux. La CPK est principalement un marqueur biologique de lésion musculaire.`,
      `Faux selon la grille. Le facteur VIII ne constitue pas ici un marqueur génétique de susceptibilité multifactorielle attendu.`,
      `Vrai. L'allèle APOE ε4 augmente notamment le risque de maladie d'Alzheimer à début tardif.`
    ]
  ),

  Q(32,
    `Concernant la triploïdie homogène, quelles propositions sont vraies ?`,
    [
      `elle survient le plus souvent par mécanisme de digynie`,
      `elle est constamment létale`,
      `elle est source de malformations multiples`,
      `elle entraîne une macrosomie foetale`,
      `elle peut dégénérer en môle hydatiforme`
    ],
    'BCE',
    [
      `Faux selon la grille. La triploïdie peut être d'origine digynique ou diandrique, avec des tableaux distincts.`,
      `Vrai. La triploïdie homogène est incompatible avec une survie prolongée.`,
      `Vrai. Elle est associée à de multiples anomalies du développement et malformations.`,
      `Faux. Une restriction de croissance fœtale est fréquente, notamment dans les formes digyniques.`,
      `Vrai selon la grille. Les triploïdies diandriques peuvent être associées à des modifications placentaires de type môle hydatiforme partielle.`
    ]
  ),

  Q(33,
    `Concernant les néomutations dans les maladies monogéniques, quelles propositions sont vraies ?`,
    [
      `elles ont une origine paternelle exclusive dans certaines maladies liées à l’X`,
      `elles sont fréquentes dans les maladies autosomiques récessives`,
      `elles sont favorisées par un âge maternel élevé`,
      `elles sont rares dans l’achondroplasie`,
      `elles rendent compte de 100% des cas des maladies où la fécondité est nulle`
    ],
    'AE',
    [
      `Vrai selon la grille. Certaines maladies liées à l'X présentent une origine parentale très spécifique de leurs néomutations.`,
      `Faux. Les néomutations sont particulièrement importantes dans certaines maladies autosomiques dominantes.`,
      `Faux selon la grille. Pour de nombreuses mutations ponctuelles de novo, le facteur d'âge parental majeur est l'âge paternel.`,
      `Faux. Les néomutations représentent une grande proportion des cas d'achondroplasie.`,
      `Vrai selon la grille. Pour une maladie dominante empêchant toute reproduction et dans l'hypothèse d'absence d'autre mécanisme, chaque nouveau cas résulte d'une néomutation.`
    ]
  ),

  Q(34,
    `Concernant les maladies mitochondriales, quelles propositions sont vraies ?`,
    [
      `toutes les maladies mitochondriales sont d’hérédité maternelle`,
      `l’expressivité variable des maladies mitochondriales peut être due au phénomène d’hétéroplasmie`,
      `le nombre de molécules d’ADN mitochondrial muté est constant d’une mitochondrie à l’autre`,
      `le nombre de mitochondries porteuses d’une mutation de l’ADN mitochondrial est variable d’une cellule à l’autre`,
      `la pénétrance est complète dans la neuropathie optique de Leber`
    ],
    'BD',
    [
      `Faux. De nombreuses maladies mitochondriales sont liées à des gènes nucléaires et suivent une hérédité mendélienne.`,
      `Vrai. L'hétéroplasmie correspond à la coexistence de molécules d'ADN mitochondrial normales et mutées, pouvant expliquer une expressivité variable.`,
      `Faux. La proportion d'ADN mitochondrial muté peut varier entre les mitochondries.`,
      `Vrai. La répartition des mitochondries porteuses de variants peut varier selon les cellules et les tissus.`,
      `Faux. La neuropathie optique héréditaire de Leber présente une pénétrance incomplète.`
    ]
  ),

  Q(35,
    `A propos de la substitution d'une adénine par une guanine, quelles propositions sont vraies ?`,
    [
      `il s’agit d’une transition`,
      `il s’agit d’une variation ponctuelle`,
      `elle entraîne un décalage du cadre de lecture`,
      `elle peut être responsable d'une mutation faux-sens`,
      `elle peut entraîner une haploinsuffisance`
    ],
    'ABD',
    [
      `Vrai. Le remplacement d'une purine par une autre purine est une transition.`,
      `Vrai. La modification d'un seul nucléotide est une variation ponctuelle.`,
      `Faux. Une substitution simple ne décale pas le cadre de lecture.`,
      `Vrai. Une substitution peut modifier un codon et entraîner le remplacement d'un acide aminé.`,
      `Faux selon la grille. L'haploinsuffisance n'est pas une conséquence systématique de cette substitution et dépend du variant et du gène.`
    ]
  ),

  Q(36,
    `Lesquelles des techniques suivantes ne sont pas appropriées pour mettre en évidence des mutations instables (amplifications de motifs répétés d’ADN) ?`,
    [
      `séquençage Sanger`,
      `CGH-array`,
      `séquençage du génome entier`,
      `PCR quantitative`,
      `Southern blot`
    ],
    'ABD',
    [
      `Vrai selon la grille. Le séquençage Sanger standard n'est pas adapté à la caractérisation de nombreuses expansions répétées longues.`,
      `Vrai. La CGH-array détecte des déséquilibres de copies et non directement l'expansion de motifs répétés.`,
      `Faux selon la grille. Certaines approches de séquençage génomique associées à des analyses bioinformatiques adaptées peuvent identifier des expansions.`,
      `Vrai selon la grille. La PCR quantitative standard ne permet pas de caractériser correctement l'ensemble des expansions répétées instables.`,
      `Faux. Le Southern blot est historiquement utilisé pour identifier ou estimer la taille de certaines expansions répétées.`
    ]
  ),

  Q(37,
    `Concernant le diagnostic de sexe foetal sur sang maternel, quelles propositions sont vraies ?`,
    [
      `il est proposé à partir de 10 semaines d’aménorrhée`,
      `il repose sur une analyse en hybridation in situ du chromosome Y`,
      `il est indiqué comme préalable au diagnostic prénatal de la myopathie de Duchenne`,
      `il peut être proposé à toutes les femmes enceintes`,
      `il est effectué sur l’ADN fœtal circulant dans le sang maternel`
    ],
    'ACE',
    [
      `Vrai selon la grille. Le diagnostic non invasif du sexe fœtal peut être proposé précocement pendant la grossesse, à partir du terme retenu dans ce cours.`,
      `Faux. Il repose sur la recherche moléculaire de séquences du chromosome Y, notamment par PCR.`,
      `Vrai. Pour une maladie récessive liée à l'X comme la dystrophie de Duchenne, la détermination du sexe fœtal peut orienter la démarche diagnostique.`,
      `Faux. Ce test n'est pas proposé systématiquement à toutes les femmes enceintes sans indication médicale.`,
      `Vrai. Il analyse l'ADN fœtal libre circulant dans le plasma maternel, principalement d'origine placentaire.`
    ]
  ),

  Q(38,
    `Lesquels des éléments anatomiques ci-dessous concernent les pavillons auriculaires ?`,
    [
      `la conque`,
      `l’hélix`,
      `l’antitragus`,
      `le philtrum`,
      `la glabelle`
    ],
    'ABC',
    [
      `Vrai. La conque est la dépression du pavillon qui mène au conduit auditif externe.`,
      `Vrai. L'hélix constitue le relief périphérique du pavillon auriculaire.`,
      `Vrai. L'antitragus est un relief cartilagineux situé en face du tragus.`,
      `Faux. Le philtrum est situé entre le nez et la lèvre supérieure.`,
      `Faux. La glabelle correspond à la région médiane entre les sourcils.`
    ]
  ),

  Q(39,
    `A propos du syndrome de Lynch, quelles sont les bonnes réponses ?`,
    [
      `il est dû à des variants pathogènes du gène RET`,
      `il expose à un risque augmenté de cancer du colon`,
      `il expose à un risque augmenté de cancer de l’endomètre`,
      `il expose à un risque augmenté de cancer de la prostate`,
      `il se transmet sur un mode autosomique récessif`
    ],
    'BC',
    [
      `Faux. Le syndrome de Lynch est lié principalement à des gènes de réparation des mésappariements de l'ADN, notamment MLH1, MSH2, MSH6 et PMS2.`,
      `Vrai. Le syndrome de Lynch augmente significativement le risque de cancer colorectal.`,
      `Vrai. Il augmente également le risque de cancer de l'endomètre.`,
      `Faux selon la grille officielle. Des associations avec le cancer de la prostate ont été rapportées, mais ce n'est pas une réponse retenue dans cette annale.`,
      `Faux. Le syndrome de Lynch se transmet sur un mode autosomique dominant.`
    ]
  ),

  Q(40,
    `Parmi les signes échographiques suivants, lesquels sont considérés comme de petits signes d’appel de trisomie 21 ?`,
    [
      `fémur court`,
      `holoprosencéphalie`,
      `aplasie des os propres du nez`,
      `scaphocéphalie`,
      `clarté nucale augmentée`
    ],
    'ACE',
    [
      `Vrai. Un fémur court constitue un marqueur échographique mineur pouvant être associé à la trisomie 21.`,
      `Faux. L'holoprosencéphalie est une malformation cérébrale majeure, particulièrement évocatrice d'autres anomalies chromosomiques comme la trisomie 13.`,
      `Vrai. L'absence ou l'hypoplasie des os propres du nez constitue un marqueur échographique de trisomie 21.`,
      `Faux. La scaphocéphalie est une déformation crânienne principalement liée à une synostose sagittale.`,
      `Vrai. Une augmentation de la clarté nucale constitue un signe d'appel échographique d'anomalie chromosomique, notamment de trisomie 21.`
    ]
  )
];
