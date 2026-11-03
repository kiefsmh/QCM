
export const meta = {
  title: 'UE Génétique médicale — Annales 2025 — Session 2',
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
    `A propos des maladies génétiques en général, quelle proposition est vraie ?`,
    [
      `l’hypercholestérolémie familiale est une maladie génétique rare`,
      `les maladies génétiques sont toutes congénitales`,
      `les maladies génétiques représentent 80% des maladies rares`,
      `une maladie génétique est toujours héritée`,
      `toutes les maladies génétiques sont des maladies graves`
    ],
    'C',
    [
      `Faux. L'hypercholestérolémie familiale est relativement fréquente parmi les maladies monogéniques, avec une prévalence d'environ 1/250 pour sa forme hétérozygote.`,
      `Faux. Certaines maladies génétiques ne se manifestent qu'à l'âge adulte, comme la maladie de Huntington.`,
      `Vrai selon la grille officielle. On estime qu'une grande majorité des maladies rares possède une origine génétique, classiquement de l'ordre de 80 %.`,
      `Faux. Une maladie génétique peut survenir par néomutation, sans être héritée d'un parent.`,
      `Faux. Certaines anomalies génétiques entraînent des manifestations bénignes ou peu invalidantes.`
    ]
  ),

  Q(2,
    `Laquelle des anomalies chromosomiques ci-dessous ne peut pas être mise en évidence par l‘étude du caryotype conventionnel ?`,
    [
      `translocation robertsonienne`,
      `délétion de 250 kb`,
      `triploïdie`,
      `trisomie 18 libre, complète et homogène`,
      `inversion péricentrique`
    ],
    'B',
    [
      `Faux. Une translocation robertsonienne peut être identifiée au caryotype conventionnel.`,
      `Vrai. Une délétion de 250 kb est inférieure à la résolution habituelle du caryotype standard, qui est de plusieurs mégabases.`,
      `Faux. Une triploïdie est visible grâce à la présence de trois lots haploïdes, soit 69 chromosomes.`,
      `Faux. Une trisomie 18 libre est directement visible par la présence d'un chromosome 18 supplémentaire.`,
      `Faux. Une inversion péricentrique suffisamment grande peut être mise en évidence au caryotype.`
    ]
  ),

  Q(3,
    `Concernant les translocations réciproques, quelle proposition est vraie ?`,
    [
      `elles ne sont jamais héritées`,
      `elles concernent deux chromosomes non homologues`,
      `elles sont toujours déséquilibrées`,
      `elles ne concernent que les chromosome acrocentriques`,
      `elles sont mises en évidence par séquençage Sanger`
    ],
    'B',
    [
      `Faux. Une translocation réciproque peut être héritée d'un parent porteur d'un réarrangement équilibré.`,
      `Vrai. Elle correspond à un échange de segments entre deux chromosomes non homologues.`,
      `Faux. Les translocations réciproques peuvent être équilibrées ou déséquilibrées.`,
      `Faux. Ce sont les translocations robertsoniennes qui concernent exclusivement les chromosomes acrocentriques.`,
      `Faux. Les translocations réciproques sont classiquement recherchées par caryotype ou par des techniques cytogénétiques adaptées.`
    ]
  ),

  Q(4,
    `Concernant l’ADN mitochondrial, quelle proposition est vraie ?`,
    [
      `il contient des gènes comportant de très grands introns`,
      `il ne code qu’une partie des polypeptides de la chaîne respiratoire mitochondriale`,
      `il s’agit d’un ADN simple brin`,
      `les variations de l’ADN mitochondrial sont toujours héritées`,
      `le nombre de molécules d’ADN est identique d’une mitochondrie à l’autre`
    ],
    'B',
    [
      `Faux. L'ADN mitochondrial humain possède une organisation compacte, avec des gènes dépourvus d'introns classiques.`,
      `Vrai. L'ADN mitochondrial code 13 polypeptides de la phosphorylation oxydative ; la majorité des protéines mitochondriales est codée par l'ADN nucléaire.`,
      `Faux. L'ADN mitochondrial est circulaire et double brin.`,
      `Faux. Des variations de l'ADN mitochondrial peuvent apparaître de novo.`,
      `Faux. Le nombre de copies d'ADN mitochondrial peut varier entre les mitochondries et les cellules.`
    ]
  ),

  Q(5,
    `A propos du vosoritide, traitement médicamenteux efficace sur la croissance dans l’achondroplasie, quelle proposition est vraie ?`,
    [
      `il s’agit d’un analogue du CNP (peptide natriurétique de type C)`,
      `il s’agit d’une thérapeutique substitutive`,
      `il s’agit d’une thérapie génique`,
      `il est administré par voie orale`,
      `il peut être prescrit dès la naissance`
    ],
    'A',
    [
      `Vrai. Le vosoritide est un analogue du CNP qui stimule une voie de signalisation contrebalançant l'activité excessive de FGFR3.`,
      `Faux. Il ne remplace pas une protéine déficiente : l'achondroplasie est due à un gain de fonction de FGFR3.`,
      `Faux. Le vosoritide est un traitement pharmacologique et non une thérapie génique.`,
      `Faux. Le vosoritide est administré par injection sous-cutanée.`,
      `Faux selon la grille officielle de 2025. Son utilisation dépend des indications et des limites d'âge autorisées.`
    ]
  ),

  Q(6,
    `Concernant la trisomie 18 libre, complète et homogène, quelle proposition est vraie ?`,
    [
      `Il s’agit d’une polyploïdie`,
      `elle survient par anomalie de la fécondation`,
      `elle est responsable d’une macrocéphalie`,
      `sa survenue est favorisée par un âge paternel élevé`,
      `elle entraîne un retard de croissance intra-utérin`
    ],
    'E',
    [
      `Faux. La trisomie 18 est une aneuploïdie, caractérisée par un chromosome 18 supplémentaire.`,
      `Faux. Elle résulte généralement d'une erreur de ségrégation chromosomique au cours de la méiose.`,
      `Faux. La macrocéphalie n'est pas une caractéristique typique du syndrome d'Edwards.`,
      `Faux. Le principal facteur de risque parental identifié est l'âge maternel élevé.`,
      `Vrai. La trisomie 18 est classiquement associée à un retard de croissance intra-utérin et à un syndrome polymalformatif.`
    ]
  ),

  Q(7,
    `A quel type de craniosténose correspond la fusion prématurée isolée de la suture sagittale ?`,
    [
      `brachycéphalie`,
      `oxycéphalie`,
      `plagiocéphalie`,
      `trigonocéphalie`,
      `scaphocéphalie`
    ],
    'E',
    [
      `Faux. La brachycéphalie est principalement associée à une fusion prématurée bilatérale des sutures coronales.`,
      `Faux. L'oxycéphalie correspond à une déformation crânienne avec sommet pointu.`,
      `Faux. La plagiocéphalie est une asymétrie crânienne, notamment liée à une synostose coronale ou lambdoïde unilatérale.`,
      `Faux. La trigonocéphalie résulte de la fusion prématurée de la suture métopique.`,
      `Vrai. Une synostose sagittale entraîne une scaphocéphalie, caractérisée par un crâne allongé d'avant en arrière.`
    ]
  ),

  Q(8,
    `Parmi les paramètres biologiques ou biométriques suivants, lequel n’est pas de déterminisme multifactoriel ?`,
    [
      `la taille`,
      `l’indice de masse corporelle`,
      `le groupe sanguin ABO`,
      `l’épaisseur du pylore`,
      `la glycémie`
    ],
    'C',
    [
      `Faux. La taille dépend de nombreux variants génétiques et de facteurs environnementaux.`,
      `Faux. L'indice de masse corporelle dépend de facteurs génétiques, alimentaires et comportementaux.`,
      `Vrai. Le groupe sanguin ABO relève principalement d'une hérédité mendélienne liée au gène ABO.`,
      `Faux. L'épaisseur du pylore peut dépendre d'une susceptibilité génétique et de facteurs environnementaux.`,
      `Faux. La glycémie dépend de nombreux facteurs génétiques, métaboliques et environnementaux.`
    ]
  ),

  Q(9,
    `Concernant la variation pathogène GAG à GTG ; p.Glu6Val, responsable de la drépanocytose, quelle proposition est vraie ?`,
    [
      `il s'agit d'un variant de type non-sens`,
      `elle confère un avantage sélectif aux sujets homozygotes`,
      `il s'agit d'une transition`,
      `elle est mise en évidence par southern blot`,
      `il s'agit d'un variant pathogène universel`
    ],
    'E',
    [
      `Faux. Il s'agit d'une substitution faux-sens provoquant le remplacement d'un acide glutamique par une valine.`,
      `Faux. L'avantage sélectif contre certaines formes de paludisme concerne principalement les sujets hétérozygotes HbAS.`,
      `Faux. La substitution A vers T est une transversion, car elle remplace une purine par une pyrimidine.`,
      `Faux. Une substitution ponctuelle peut être détectée par séquençage Sanger ou par d'autres méthodes moléculaires ciblées.`,
      `Vrai selon la grille. Le variant HbS classique correspond à la même substitution pathogène du gène HBB chez les personnes atteintes, quelle que soit leur origine géographique.`
    ]
  ),

  Q(10,
    `Laquelle des anomalies moléculaires ci-dessous peut être mise en évidence par la technique de Southern blot ?`,
    [
      `duplication intragénique de 5 paires de bases`,
      `délétion de 1 Mb`,
      `substitution d’une thymine par une guanine`,
      `amplification d’un motif répété de 30 nucléotides`,
      `délétion exonique de 2 kb`
    ],
    'E',
    [
      `Faux. Une duplication de cinq bases est généralement recherchée par séquençage.`,
      `Faux selon la grille. Une délétion chromosomique d'un mégabase est principalement recherchée par CGH-array ou une autre méthode d'analyse du nombre de copies.`,
      `Faux. Une substitution ponctuelle est typiquement détectée par séquençage.`,
      `Faux selon la grille. Une expansion répétée ne peut pas toujours être correctement caractérisée par Southern blot, notamment selon la taille du motif et la méthode utilisée.`,
      `Vrai. Une délétion de 2 kb peut modifier la taille des fragments de restriction détectés par Southern blot, avec une sonde adaptée.`
    ]
  ),

  Q(11,
    `Dans quelle situation existe-t-il une probabilité de transmission à la descendance de 50 % ?`,
    [
      `transmission d’un père à sa fille d’un caractère récessif lié à l’X`,
      `transmission d’un père à sa fille d’un caractère d’hérédité mitochondriale`,
      `transmission d’une mère à son fils d’un caractère d’hérédité mitochondriale`,
      `transmission d'une mère à sa fille d’un caractère dominant lié à l'X`,
      `transmission d'un père à son fils d’un caractère holandrique`
    ],
    'D',
    [
      `Faux. Un père transmet systématiquement son chromosome X à toutes ses filles.`,
      `Faux. L'ADN mitochondrial est transmis par la mère et non par le père dans l'hérédité mitochondriale classique.`,
      `Faux. Une mère transmet son ADN mitochondrial à ses enfants, sans risque mendélien de transmission de 50 %.`,
      `Vrai. Une mère hétérozygote pour une maladie dominante liée à l'X transmet l'allèle pathogène à une fille sur deux.`,
      `Faux. Un père transmet son chromosome Y à tous ses fils.`
    ]
  ),

  Q(12,
    `Quel est le terme utilisé pour désigner un écartement exagéré entre les angles internes des deux yeux ?`,
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
      `Faux. L'hypotélorisme désigne une diminution de la distance interorbitaire.`,
      `Vrai. Le télécanthus correspond à une augmentation de la distance entre les canthi internes sans augmentation nécessaire de la distance interorbitaire.`,
      `Faux. Le synophrys correspond à une continuité des sourcils sur la ligne médiane.`,
      `Faux. L'épicanthus est un repli cutané situé au niveau de l'angle interne de l'œil.`
    ]
  ),

  Q(13,
    `Lequel des gènes suivants, impliqués dans les prédispositions héréditaires aux cancers, est un oncogène ?`,
    [
      `MLH1`,
      `Rb1`,
      `RET`,
      `TP53`,
      `BRCA1`
    ],
    'C',
    [
      `Faux. MLH1 est un gène de réparation des mésappariements de l'ADN.`,
      `Faux. RB1 est un gène suppresseur de tumeur impliqué notamment dans le rétinoblastome.`,
      `Vrai. RET est un proto-oncogène dont des variants activateurs peuvent prédisposer aux néoplasies endocriniennes multiples de type 2.`,
      `Faux. TP53 est un gène suppresseur de tumeur.`,
      `Faux. BRCA1 participe notamment à la réparation de l'ADN et constitue un gène suppresseur de tumeur.`
    ]
  ),

  Q(14,
    `Quelle est la probabilité que la cousine germaine d’un garçon atteint d’une maladie récessive liée à l’X, dont les mères sont sœurs et ayant aussi un oncle maternel atteint, ait à son tour un fils atteint de la maladie ?`,
    [
      `1/16`,
      `1/8`,
      `1/6`,
      `1/4`,
      `1/2`
    ],
    'B',
    [
      `Faux. Cette probabilité est inférieure au résultat obtenu à partir du modèle généalogique retenu.`,
      `Vrai. L'oncle maternel atteint implique que la grand-mère est conductrice. La mère de la cousine a 1/2 risque d'être conductrice, sa fille 1/4, puis celle-ci 1/2 risque de transmettre l'allèle à un fils : 1/2 × 1/2 × 1/2 = 1/8.`,
      `Faux. Cette valeur ne correspond pas au calcul de transmission récessive liée à l'X.`,
      `Faux. Cette probabilité surestime le risque calculé dans cette famille.`,
      `Faux. Cette valeur correspondrait à une transmission directe par une femme obligatoirement conductrice.`
    ]
  ),

  Q(15,
    `Concernant l’achondroplasie, quelle proposition est vraie ?`,
    [
      `il s'agit d'une maladie de transmission dominante liée à l’X`,
      `elle est due à une perte de fonction du gène FGFR3`,
      `elle fait preuve d’une hétérogénéïté allélique`,
      `elle a un taux de néomutations élevé`,
      `elle a une pénétrance incomplète`
    ],
    'D',
    [
      `Faux. L'achondroplasie est une maladie autosomique dominante.`,
      `Faux. Elle est liée à un gain de fonction du récepteur FGFR3.`,
      `Faux selon la grille. L'achondroplasie classique présente une faible hétérogénéité allélique, avec un variant pathogène très récurrent.`,
      `Vrai. Une proportion importante des achondroplasies survient par néomutation, favorisée notamment par l'âge paternel élevé.`,
      `Faux. La pénétrance de l'achondroplasie classique est considérée comme complète.`
    ]
  ),

  Q(16,
    `Quelle est la probabilité qu’un couple ait un enfant atteint de phénylcétonurie, sachant que la femme a un frère atteint de la maladie, que son conjoint ne lui est pas apparenté et n’a pas d’antécédent familial de ce type, et que la fréquence des hétérozygotes est d’environ 1/100 ?`,
    [
      `1/200`,
      `1/300`,
      `1/600`,
      `1/800`,
      `1/1200`
    ],
    'C',
    [
      `Faux. Cette valeur est supérieure au risque obtenu par le calcul généalogique.`,
      `Faux. Ce résultat ne correspond pas au produit des trois probabilités nécessaires.`,
      `Vrai. La femme non atteinte ayant un frère malade a 2/3 de risque d'être conductrice. Le conjoint a 1/100 de risque de portage. Le risque d'enfant atteint est donc 2/3 × 1/100 × 1/4 = 1/600.`,
      `Faux. Cette valeur sous-estime le risque attendu.`,
      `Faux. Le risque calculé est deux fois supérieur à cette proposition.`
    ]
  ),

  Q(17,
    `Concernant le diagnostic préimplantatoire, quelle proposition est vraie ?`,
    [
      `il est possible pour toutes les maladies génétiques quel que soit le degré de sévérité`,
      `il est effectué sur un embryon au stade de 8 blastomères`,
      `il permet une étude complète du caryotype embryonnaire`,
      `il permet un transfert d’embryons à 12 semaines de développement`,
      `il est disponible en France dans tous les centres de diagnostic prénatal`
    ],
    'B',
    [
      `Faux. Le diagnostic préimplantatoire est soumis à des conditions médicales et réglementaires strictes.`,
      `Vrai selon la grille. La biopsie embryonnaire au stade de huit blastomères est une méthode historique de DPI. Les pratiques actuelles privilégient souvent la biopsie au stade blastocyste.`,
      `Faux selon la grille. Le DPI recherche des anomalies génétiques ciblées et ne permet pas systématiquement un caryotype embryonnaire complet.`,
      `Faux. Le transfert embryonnaire s'effectue quelques jours après la fécondation.`,
      `Faux. Le DPI n'est réalisé que dans des centres spécialement autorisés.`
    ]
  ),

  Q(18,
    `Lorsque, pour une maladie monogénique, il existe plusieurs gènes identifiés, on parle de :`,
    [
      `polygénisme`,
      `gènes modificateurs`,
      `hétérogénéité génique`,
      `hérédité multifactorielle`,
      `hétérogénéité allélique`
    ],
    'C',
    [
      `Faux. Le polygénisme désigne l'intervention de plusieurs gènes dans la détermination d'un caractère.`,
      `Faux. Les gènes modificateurs influencent l'expression d'une maladie génétique.`,
      `Vrai. L'hétérogénéité génique signifie qu'un même phénotype monogénique peut résulter de variants pathogènes dans différents gènes.`,
      `Faux. L'hérédité multifactorielle associe plusieurs facteurs génétiques et environnementaux.`,
      `Faux. L'hétérogénéité allélique correspond à l'existence de plusieurs variants pathogènes différents au sein d'un même gène.`
    ]
  ),

  Q(19,
    `Concernant la législation sur les études des caractéristiques génétiques d’une personne, quelle proposition est vraie ?`,
    [
      `elles nécessitent le recueil écrit et signé du consentement de la personne`,
      `elles ne peuvent pas être prescrites par un(e) conseiller(e) en génétique`,
      `elles peuvent être effectuées par n’importe quel laboratoire d’analyses moléculaires`,
      `elles peuvent être effectuées sans restriction chez les enfants mineurs`,
      `les résultats doivent être conservés dans le dossier du patient pendant une durée de 20 ans`
    ],
    'A',
    [
      `Vrai selon la grille de 2025. Les examens des caractéristiques génétiques constitutionnelles nécessitent un consentement écrit préalable, dans le cadre réglementaire applicable.`,
      `Faux. Certaines prescriptions peuvent être réalisées par des conseillers en génétique dans le cadre de leurs compétences réglementaires.`,
      `Faux. Les laboratoires réalisant ces examens doivent disposer des autorisations appropriées.`,
      `Faux. Les examens génétiques chez les mineurs sont strictement encadrés et doivent présenter un intérêt médical justifiant leur réalisation.`,
      `Faux selon la grille. La durée et les modalités de conservation des résultats ne correspondent pas à cette affirmation générale.`
    ]
  ),

  Q(20,
    `Quelle proposition est vraie concernant la mucoviscidose ?`,
    [
      `elle est de transmission autosomique dominante`,
      `elle est due à un seul et même allèle dans tous les pays du monde`,
      `elle est liée à un défaut d’un canal chlore transmembranaire`,
      `elle bénéficie maintenant d’un traitement curatif par transfert de gène`,
      `elle entraîne une diminution du taux de chlore sudoral`
    ],
    'C',
    [
      `Faux. La mucoviscidose est une maladie autosomique récessive.`,
      `Faux. Le gène CFTR présente une importante hétérogénéité allélique, avec de nombreux variants pathogènes.`,
      `Vrai. La mucoviscidose est liée à un dysfonctionnement de CFTR, une protéine membranaire impliquée notamment dans le transport des ions chlorure.`,
      `Faux. Les traitements modulateurs de CFTR ne constituent pas une guérison par transfert de gène.`,
      `Faux. La mucoviscidose entraîne classiquement une augmentation de la concentration de chlorure dans la sueur.`
    ]
  ),

  Q(21,
    `Concernant les aneuploïdies, quelles propositions sont vraies ?`,
    [
      `elles ne concernent que les autosomes`,
      `elles sont toutes liées à l’âge maternel`,
      `à l’état homogène elles sont toutes létales`,
      `elles peuvent aboutir à un avortement spontané précoce`,
      `elles surviennent le plus souvent de novo`
    ],
    'DE',
    [
      `Faux. Les aneuploïdies peuvent concerner les autosomes ou les chromosomes sexuels.`,
      `Faux. L'âge maternel favorise certaines aneuploïdies, mais toutes ne sont pas liées à ce facteur.`,
      `Faux. Certaines aneuploïdies homogènes sont compatibles avec la vie, notamment la trisomie 21 ou la trisomie X.`,
      `Vrai. De nombreuses anomalies du nombre de chromosomes provoquent des fausses couches spontanées précoces.`,
      `Vrai. La majorité des aneuploïdies constitutionnelles survient à la suite d'erreurs de ségrégation nouvelles.`
    ]
  ),

  Q(22,
    `Concernant les myopathies de Duchenne et de Becker liées au gène DMD, quelles propositions sont vraies ?`,
    [
      `elles sont de transmission récessive liée à l’X`,
      `elles font preuve d’une hétérogénéité allélique`,
      `elles sont dues majoritairement à des variants ponctuels`,
      `elles peuvent survenir par néomutation`,
      `elles diffèrent selon que le cadre de lecture du gène est respecté ou non`
    ],
    'ABDE',
    [
      `Vrai. Les dystrophinopathies de Duchenne et Becker sont classiquement de transmission récessive liée à l'X.`,
      `Vrai. De nombreux variants pathogènes différents du gène DMD peuvent être responsables de ces maladies.`,
      `Faux. Les délétions et duplications d'exons représentent une proportion importante des variants de DMD.`,
      `Vrai. Les dystrophinopathies peuvent apparaître par néomutation sans antécédent familial.`,
      `Vrai. La règle du cadre de lecture distingue généralement Duchenne, avec rupture du cadre, et Becker, avec cadre de lecture conservé.`
    ]
  ),

  Q(23,
    `Concernant le diagnostic prédictif/présymptomatique, quelles propositions sont vraies ?`,
    [
      `il concerne les maladies génétiques à début retardé`,
      `il ne peut être prescrit que par un médecin travaillant au sein d’une équipe pluridisciplinaire`,
      `il nécessite un délai de réflexion`,
      `il ne concerne que les maladies autosomiques récessives`,
      `les résultats sont envoyés directement au patient par le laboratoire`
    ],
    'ABC',
    [
      `Vrai. Le diagnostic présymptomatique permet d'identifier une prédisposition avant l'apparition des manifestations d'une maladie à début retardé.`,
      `Vrai selon la grille. La prescription doit s'inscrire dans un cadre médical spécialisé et pluridisciplinaire approprié.`,
      `Vrai. Une période de réflexion fait partie de la démarche de consentement et d'accompagnement.`,
      `Faux. Il concerne notamment des maladies autosomiques dominantes, comme la maladie de Huntington.`,
      `Faux. Les résultats doivent être communiqués dans un cadre médical permettant leur interprétation et l'accompagnement du patient.`
    ]
  ),

  Q(24,
    `Concernant la trisomie 21, quelles propositions sont vraies ?`,
    [
      `elle fait l’objet en France d’une stratégie de dépistage prénatal`,
      `elle survient par anomalie de fécondation`,
      `elle est responsable d’une avance de croissance en taille`,
      `c’est la plus fréquente des aneuploïdies autosomiques`,
      `sa survenue est favorisée par un âge paternel élevé`
    ],
    'AD',
    [
      `Vrai. La trisomie 21 fait l'objet d'une stratégie de dépistage prénatal en France.`,
      `Faux. La trisomie 21 libre résulte le plus souvent d'une erreur de ségrégation méiotique.`,
      `Faux. La trisomie 21 est plutôt associée à un retard de croissance staturale.`,
      `Vrai. La trisomie 21 est la plus fréquente des trisomies autosomiques observées chez les enfants nés vivants.`,
      `Faux. Le principal facteur de risque parental classique est l'augmentation de l'âge maternel.`
    ]
  ),

  Q(25,
    `A propos des pathologies autosomiques dominantes par amplification de triplets, quelles propositions sont vraies ?`,
    [
      `elles sont toutes associées à un phénomène d’instabilité du motif répété`,
      `elles se manifestent à partir d’une valeur seuil du nombre de triplets`,
      `le phénomène d'anticipation est lié à une diminution de nombre de triplets`,
      `il s’agit majoritairement de pathologies neurologiques`,
      `le motif répété est toujours localisé dans la séquence codante`
    ],
    'BD',
    [
      `Faux selon la grille. Les expansions de motifs répétés ne présentent pas toutes systématiquement la même instabilité intergénérationnelle.`,
      `Vrai. La pathogénicité des expansions est généralement liée au dépassement d'un seuil de répétitions propre à chaque maladie.`,
      `Faux. L'anticipation résulte généralement d'une augmentation du nombre de répétitions au fil des générations.`,
      `Vrai. De nombreuses maladies à expansion de triplets sont des affections neurologiques ou neuromusculaires.`,
      `Faux. Les motifs répétés peuvent se trouver dans des régions codantes ou non codantes.`
    ]
  ),

  Q(26,
    `Lesquelles des activités suivantes peuvent être effectuées par un(e) conseiller(e) en génétique ?`,
    [
      `examen clinique d'un patient`,
      `prescription d'une analyse génétique`,
      `prise de sang pour analyse génétique`,
      `restitution d'un résultat d'analyse génétique`,
      `étude d’un dossier médical`
    ],
    'BDE',
    [
      `Faux. Le conseiller en génétique n'est pas habilité à réaliser un examen clinique médical.`,
      `Vrai selon la grille. Certaines analyses génétiques peuvent être prescrites par un conseiller en génétique dans son cadre d'exercice réglementaire.`,
      `Faux selon la grille. La réalisation d'une prise de sang ne relève pas des actes autorisés au titre de cette profession.`,
      `Vrai selon la grille. La restitution de résultats peut entrer dans les activités encadrées du conseiller en génétique.`,
      `Vrai. L'étude des dossiers médicaux et familiaux fait partie de ses missions.`
    ]
  ),

  Q(27,
    `Lesquels des signes suivants peuvent être observés dans les affections liées au gène CFTR ?`,
    [
      `dilatation des bronches`,
      `pancréatite chronique`,
      `iléus méconial`,
      `agénésie des canaux déférents`,
      `sinusite chronique`
    ],
    'ABCDE',
    [
      `Vrai. Les atteintes respiratoires liées à CFTR peuvent entraîner des bronchectasies.`,
      `Vrai. Certains variants de CFTR sont associés à des épisodes de pancréatite ou à une pancréatite chronique.`,
      `Vrai. L'iléus méconial constitue une manifestation néonatale classique de la mucoviscidose.`,
      `Vrai. Les anomalies de CFTR peuvent entraîner une absence congénitale bilatérale des canaux déférents, responsable d'une infertilité masculine.`,
      `Vrai. Une rhinosinusite chronique peut être associée à la mucoviscidose et à d'autres affections liées à CFTR.`
    ]
  ),

  Q(28,
    `Lesquels des mécanismes ci-dessous peuvent expliquer qu'un même gène puisse être associé selon les cas à une maladie autosomique dominante ou une maladie autosomique récessive ?`,
    [
      `l'existence d'un gène modificateur`,
      `des facteurs environnementaux`,
      `le nombre d'allèles pathologiques`,
      `un phénomène d'empreinte parentale`,
      `la nature des variants pathogènes`
    ],
    'CE',
    [
      `Faux selon la grille. Les gènes modificateurs influencent l'expression d'une maladie sans nécessairement expliquer son mode de transmission.`,
      `Faux. Les facteurs environnementaux peuvent modifier le phénotype, mais ne sont pas le mécanisme retenu ici.`,
      `Vrai. Selon le mécanisme pathogène, un seul allèle ou deux allèles mutés peuvent être nécessaires à l'apparition d'une maladie.`,
      `Faux. L'empreinte parentale est un mécanisme épigénétique d'expression dépendante de l'origine parentale.`,
      `Vrai. Des variants de perte de fonction ou de gain de fonction dans un même gène peuvent provoquer des maladies à transmission différente.`
    ]
  ),

  Q(29,
    `A propos de la thérapeutique par saut d’exon, quelles propositions sont vraies ?`,
    [
      `elle a pour objectif de rétablir un cadre de lecture ouvert`,
      `elle peut en théorie être appliquée à n’importe quel gène si l’anomalie moléculaire s’y prête`,
      `appliquée à la myopathie de Duchenne, elle vise à la production d’une protéine tronquée mais fonctionnelle`,
      `appliquée à la myopathie de Becker, elle vise à restaurer la production d’une protéine normale`,
      `pour une maladie donnée, elle ne peut être envisagée que pour des malades ayant la même anomalie moléculaire`
    ],
    'ABC',
    [
      `Vrai. Le saut d'exon peut permettre de restaurer le cadre de lecture d'un ARN messager.`,
      `Vrai selon la grille. Le principe du saut d'exon peut théoriquement s'appliquer à différents gènes si le variant et les contraintes fonctionnelles s'y prêtent.`,
      `Vrai. Dans la myopathie de Duchenne, le saut d'exon cherche à produire une dystrophine raccourcie mais partiellement fonctionnelle, proche de celle observée dans certaines formes de Becker.`,
      `Faux. La myopathie de Becker conserve généralement un cadre de lecture permettant déjà la production d'une dystrophine partiellement fonctionnelle.`,
      `Faux. Un même saut d'exon peut être applicable à plusieurs variants différents conduisant à un défaut de cadre de lecture compatible.`
    ]
  ),

  Q(30,
    `A propos de la technique d’hybridation in situ, quelles propositions sont vraies ?`,
    [
      `elle a une meilleure résolution que le caryotype conventionnel`,
      `elle a une meilleure résolution que la CGH-array`,
      `il s’agit d’une technique d’analyse pangénomique`,
      `elle nécessite une analyse comparative avec un témoin`,
      `elle peut être effectuée sur des cellules en interphase`
    ],
    'AE',
    [
      `Vrai. La FISH permet d'identifier certaines anomalies submicroscopiques non visibles au caryotype conventionnel.`,
      `Faux selon la grille. La CGH-array possède généralement une meilleure résolution globale pour l'analyse des déséquilibres génomiques.`,
      `Faux. La FISH est une méthode ciblée utilisant des sondes spécifiques.`,
      `Faux. L'hybridation in situ ne nécessite pas une comparaison d'ADN avec un témoin comme la CGH-array.`,
      `Vrai. La FISH interphasique permet d'analyser des noyaux de cellules ne se trouvant pas en métaphase.`
    ]
  ),

  Q(31,
    `Lesquelles des pathologies suivantes sont de déterminisme multifactoriel ?`,
    [
      `diabète`,
      `maladie d’Alzheimer`,
      `obésité commune`,
      `schizophrénie`,
      `maladie de Rendu-Osler`
    ],
    'ABCD',
    [
      `Vrai. Les formes communes de diabète, notamment de type 2, associent facteurs polygéniques et environnementaux.`,
      `Vrai. Les formes communes tardives de la maladie d'Alzheimer possèdent un déterminisme multifactoriel, même s'il existe des formes monogéniques.`,
      `Vrai. L'obésité commune dépend de nombreux variants génétiques et de facteurs environnementaux.`,
      `Vrai. La schizophrénie possède une architecture génétique complexe associée à des facteurs environnementaux.`,
      `Faux. La maladie de Rendu-Osler est classiquement une maladie monogénique autosomique dominante.`
    ]
  ),

  Q(32,
    `Concernant la monosomie X, quelles propositions sont vraies ?`,
    [
      `c’est l’anomalie la plus fréquemment observée dans les fausses-couches du premier trimestre`,
      `elle peut se manifester in utero par un hygroma cervical`,
      `la malformation cardiaque la plus fréquente est la coarctation de l’aorte`,
      `le seul signe constant en post-natal est l’avance de croissance en taille`,
      `des grossesses spontanées sont possibles dans les formes en mosaïque`
    ],
    'BCE',
    [
      `Faux selon la grille. La monosomie X est une anomalie fréquente dans les avortements spontanés, mais n'est pas retenue ici comme la plus fréquente.`,
      `Vrai. Un hygroma cervical fœtal peut être un signe échographique de syndrome de Turner.`,
      `Vrai selon la grille. La coarctation de l'aorte est une cardiopathie caractéristique du syndrome de Turner.`,
      `Faux. La monosomie X est classiquement associée à une petite taille et non à une avance staturale.`,
      `Vrai. Certaines femmes présentant une mosaïque 45,X/46,XX conservent une fonction ovarienne permettant des grossesses spontanées.`
    ]
  ),

  Q(33,
    `A propos de la neurofibromatose de type 1, quelles propositions sont vraies ?`,
    [
      `environ 90 % des cas surviennent par mutation de novo`,
      `la neurofibromine a un rôle suppresseur de tumeur`,
      `la pénétrance de la maladie est complète à l’âge adulte`,
      `la maladie est due à un variant pathogène universel du gène NF1`,
      `la maladie est due à des variants pathogènes de type perte de fonction`
    ],
    'BCE',
    [
      `Faux. Environ 50 % des cas de NF1 sont liés à une néomutation, et non 90 %.`,
      `Vrai. La neurofibromine est un régulateur négatif de la voie RAS et possède un rôle de suppresseur de tumeur.`,
      `Vrai selon la grille. La pénétrance de la NF1 est considérée comme pratiquement complète à l'âge adulte, malgré une expressivité variable.`,
      `Faux. La NF1 présente une importante hétérogénéité allélique.`,
      `Vrai. Les variants responsables de la NF1 entraînent principalement une perte de fonction de la neurofibromine.`
    ]
  ),

  Q(34,
    `Concernant le phénomène de disomie uniparentale, quelles propositions sont vraies ?`,
    [
      `ce terme désigne le fait que pour une partie du génome les deux allèles sont hérités d’un seul des parents`,
      `elle ne peut engendrer une pathologie que si elle touche une région du génome soumise à empreinte maternelle`,
      `elle est le plus souvent due à un mécanisme post-zygotique de correction de trisomie`,
      `elle est le plus souvent due à une duplication d’une partie du génome dans un zygote monosomique`,
      `il peut s’agir d’une isodisomie ou d’une hétérodisomie`
    ],
    'ACE',
    [
      `Vrai. La disomie uniparentale correspond à la présence de deux copies chromosomiques provenant d'un seul parent.`,
      `Faux. Elle peut provoquer une maladie par anomalie d'empreinte maternelle ou paternelle, ou par mise à l'état homozygote d'un variant récessif.`,
      `Vrai. Un mécanisme classique est la correction d'une trisomie initiale, appelée trisomy rescue.`,
      `Faux. La correction d'une monosomie est possible, mais ce n'est pas le mécanisme principal retenu.`,
      `Vrai. L'isodisomie correspond à deux copies identiques d'un chromosome parental, tandis que l'hétérodisomie implique les deux homologues d'un même parent.`
    ]
  ),

  Q(35,
    `Concernant les bases moléculaires des maladies monogéniques, quelles propositions sont vraies ?`,
    [
      `les amplifications de motifs répétés sont toujours instables`,
      `les variants pathogènes de type faux-sens sont les plus fréquents`,
      `un allèle hypermorphe correspond à un allèle de type perte de fonction`,
      `les substitutions de base sont des anomalies ponctuelles`,
      `la variation p.Gly380Arg du gène FGFR3 observée dans l’achondroplasie est une délétion en phase`
    ],
    'BD',
    [
      `Faux. Toutes les expansions de motifs répétés ne présentent pas nécessairement une instabilité.`,
      `Vrai selon la grille. Les variants faux-sens constituent une catégorie très fréquente de variants pathogènes dans les maladies monogéniques.`,
      `Faux. Un allèle hypermorphe présente une augmentation de l'activité normale du produit du gène.`,
      `Vrai. Une substitution d'une seule base est une anomalie moléculaire ponctuelle.`,
      `Faux. La variation p.Gly380Arg est une substitution faux-sens responsable d'un gain de fonction de FGFR3.`
    ]
  ),

  Q(36,
    `Lesquelles des anomalies génétiques ci-dessous peuvent être mises en évidence par la technique de séquençage de type Sanger en pratique courante ?`,
    [
      `une insertion exonique de 3 bases`,
      `une substitution d'une base sur un site d’épissage`,
      `une amplification exonique de 3 kb`,
      `une délétion intronique de 50 bases`,
      `une délétion de 10 nucléotides dans un exon`
    ],
    'ABE',
    [
      `Vrai. Une petite insertion de trois bases peut être identifiée par séquençage Sanger.`,
      `Vrai. Une substitution située sur un site d'épissage peut être détectée par séquençage de la région concernée.`,
      `Faux. Une amplification exonique de plusieurs kilobases nécessite généralement une méthode d'analyse du nombre de copies.`,
      `Faux selon la grille. Une délétion intronique de 50 bases n'est pas retenue ici parmi les anomalies mises en évidence en pratique courante. Elle peut néanmoins être détectée si la région est effectivement séquencée.`,
      `Vrai. Une délétion de dix nucléotides située dans un exon peut être détectée par séquençage Sanger.`
    ]
  ),

  Q(37,
    `Dans la liste suivante, quelles sont les indications actuellement admises pour l'étude du caryotype fœtal ?`,
    [
      `un antécédent d'enfant atteint de monosomie X`,
      `un parent porteur d'une translocation robertsonienne`,
      `un malformation fœtale détectée lors de l’échographie`,
      `un risque de trisomie 21 évalué par le dépistage combiné du 1er trimestre à 1/40`,
      `un âge maternel supérieur à 38 ans`
    ],
    'ABCD',
    [
      `Vrai selon la grille. Un antécédent d'anomalie chromosomique chez un enfant peut justifier une exploration du risque chromosomique fœtal.`,
      `Vrai. Une translocation robertsonienne parentale peut entraîner un risque de déséquilibre chromosomique chez le fœtus.`,
      `Vrai. Une malformation fœtale détectée à l'échographie peut constituer une indication de diagnostic chromosomique prénatal.`,
      `Vrai. Un risque de trisomie 21 à 1/40 correspond à un niveau de risque élevé pouvant justifier une proposition d'examen diagnostique invasif.`,
      `Faux. L'âge maternel supérieur à 38 ans ne constitue plus, à lui seul, une indication systématique de caryotype fœtal.`
    ]
  ),

  Q(38,
    `Lesquels des éléments anatomiques suivants sont situés au niveau de l’étage moyen du visage ?`,
    [
      `glabelle`,
      `philtrum`,
      `caroncule`,
      `arc de Cupidon`,
      `columelle`
    ],
    'ACE',
    [
      `Vrai selon la grille. La glabelle est la région médiane située entre les sourcils, classée ici dans l'étage moyen.`,
      `Faux selon la grille. Le philtrum est le sillon vertical reliant la base du nez à la lèvre supérieure.`,
      `Vrai. La caroncule lacrymale est située au niveau de l'angle interne de l'œil.`,
      `Faux selon la grille. L'arc de Cupidon correspond au contour de la lèvre supérieure.`,
      `Vrai. La columelle est la structure médiane séparant les deux narines.`
    ]
  ),

  Q(39,
    `A propos de la prédisposition héréditaire au cancer du sein liée au gène BRCA2, quelles sont les bonnes réponses ?`,
    [
      `elle concerne 20 % de l’ensemble des cancers du sein`,
      `elle expose aussi à un risque augmenté de cancer de l’ovaire`,
      `elle expose aussi à un risque augmenté de cancer de l’endomètre`,
      `elle expose à un risque augmenté de cancer de la prostate chez l’homme`,
      `elle se transmet sur un mode autosomique dominant`
    ],
    'BCDE',
    [
      `Faux. Les prédispositions héréditaires liées à BRCA2 ne représentent pas 20 % de l'ensemble des cancers du sein.`,
      `Vrai. Les variants constitutionnels pathogènes de BRCA2 augmentent le risque de cancer de l'ovaire.`,
      `Vrai selon la grille officielle. L'association de BRCA2 avec le cancer de l'endomètre est discutée et n'est pas une caractéristique majeure classiquement retenue. La réponse officielle est conservée.`,
      `Vrai. BRCA2 augmente notamment le risque de cancer de la prostate chez l'homme.`,
      `Vrai. La prédisposition tumorale liée à BRCA2 se transmet sur un mode autosomique dominant.`
    ]
  ),

  Q(40,
    `Parmi les signes échographiques suivants lesquels sont considérés comme de petits signes d’appel de trisomie 21 ?`,
    [
      `macrocéphalie`,
      `hernie diaphragmatique`,
      `aplasie des os propres du nez`,
      `fémur court`,
      `clarté nucale augmentée`
    ],
    'CDE',
    [
      `Faux. La macrocéphalie ne constitue pas un marqueur échographique mineur typique de trisomie 21.`,
      `Faux. La hernie diaphragmatique est une malformation structurale majeure et non un petit signe d'appel.`,
      `Vrai. L'absence ou l'hypoplasie des os propres du nez est un marqueur échographique de trisomie 21.`,
      `Vrai. Un fémur court peut constituer un marqueur échographique mineur.`,
      `Vrai. L'augmentation de la clarté nucale est un signe d'appel d'anomalie chromosomique, notamment de trisomie 21.`
    ]
  )
];
