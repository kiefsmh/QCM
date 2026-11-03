
export const meta = {
  title: 'Annales 2025 — Session 1',
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
    `Quel scientifique a émis le premier la théorie chromosomique de l’hérédité ?`,
    [
      `Walter Sutton`,
      `Thomas Morgan`,
      `Jérôme Lejeune`,
      `Joe Tijo`,
      `Walther Flemming`
    ],
    'B',
    [
      `Faux selon la grille. Walter Sutton a pourtant formulé avec Theodor Boveri la théorie chromosomique de l'hérédité au début du XXe siècle.`,
      `Vrai selon la grille officielle. Thomas Hunt Morgan a apporté des preuves expérimentales de l'hérédité chromosomique grâce à ses travaux sur la drosophile. Attention : l'attribution historique de la première formulation de cette théorie à Morgan est discutable.`,
      `Faux. Jérôme Lejeune est notamment connu pour ses travaux sur l'origine chromosomique de la trisomie 21.`,
      `Faux. Joe Hin Tjio et Albert Levan ont établi en 1956 le nombre exact de 46 chromosomes humains.`,
      `Faux. Walther Flemming a notamment décrit les chromosomes lors de la mitose.`
    ]
  ),

  Q(2,
    `Un nouveau-né hospitalisé en réanimation néonatale présente un syndrome polymalformatif très évocateur de trisomie 18, mais sa situation hémodynamique ne permet pas de lui faire une prise de sang. Les médecins réanimateurs décident de lui faire un frottis jugal. Par quelle technique de laboratoire le diagnostic pourra-t-il être confirmé sur ce prélèvement ?`,
    [
      `étude du caryotype`,
      `CGH-array`,
      `séquençage Sanger`,
      `PCR quantitative`,
      `FISH interphasique`
    ],
    'E',
    [
      `Faux. Le caryotype conventionnel nécessite généralement une culture de cellules en division et n'est pas l'examen adapté au frottis jugal dans ce contexte.`,
      `Faux selon la grille. La CGH-array peut détecter une trisomie, mais la technique attendue pour une analyse rapide de noyaux sur frottis jugal est la FISH interphasique.`,
      `Faux. Le séquençage Sanger recherche principalement des variations de séquence nucléotidique.`,
      `Faux selon la grille. La PCR quantitative peut servir à certaines analyses de dosage génétique, mais n'est pas la méthode retenue ici.`,
      `Vrai. La FISH interphasique permet d'analyser les noyaux de cellules jugales sans nécessiter de division cellulaire, grâce à des sondes spécifiques du chromosome 18.`
    ]
  ),

  Q(3,
    `Quelle proposition est vraie concernant le syndrome de Lynch ?`,
    [
      `il s’agit d’une prédisposition héréditaire au cancer du sein et de l'ovaire`,
      `il est secondaire à des mutations de gènes suppresseurs de tumeur`,
      `il entraîne un sur-risque de rétinoblastome chez le jeune enfant`,
      `il se transmet sur le mode autosomique récessif`,
      `il est lié à des mutations de l'oncogène RET`
    ],
    'B',
    [
      `Faux. La prédisposition héréditaire au cancer du sein et de l'ovaire est notamment associée aux gènes BRCA1 et BRCA2.`,
      `Vrai. Le syndrome de Lynch résulte principalement de variants pathogènes constitutionnels affectant des gènes du système de réparation des mésappariements de l'ADN, notamment MLH1, MSH2, MSH6 et PMS2.`,
      `Faux. Le rétinoblastome héréditaire est principalement associé au gène RB1.`,
      `Faux. Le syndrome de Lynch se transmet sur un mode autosomique dominant.`,
      `Faux. RET est un proto-oncogène associé notamment aux néoplasies endocriniennes multiples de type 2.`
    ]
  ),

  Q(4,
    `Concernant l’ADN mitochondrial (ADNmt) quelle proposition est vraie ?`,
    [
      `il s’agit d’un ADN simple brin`,
      `il contient des gènes sans introns`,
      `il code l’ensemble des protéines de la chaîne respiratoire mitochondriale`,
      `les variations de l’ADNmt sont toujours héritées`,
      `le nombre de molécules d’ADNmt est identique dans chaque cellule`
    ],
    'B',
    [
      `Faux. L'ADN mitochondrial humain est un ADN circulaire double brin.`,
      `Vrai. Les gènes de l'ADN mitochondrial humain ne possèdent pas d'introns dans leur organisation classique.`,
      `Faux. L'ADN mitochondrial code seulement une partie des protéines de la chaîne respiratoire ; les autres sont codées par le génome nucléaire.`,
      `Faux. Des variations de l'ADN mitochondrial peuvent apparaître de novo.`,
      `Faux. Le nombre de copies d'ADN mitochondrial varie selon les cellules, les tissus et leurs besoins énergétiques.`
    ]
  ),

  Q(5,
    `Concernant les traitements modulateurs de CFTR dans la mucoviscidose, quelle proposition est vraie ?`,
    [
      `ils visent à restaurer la fonction du canal chlore`,
      `ils peuvent être prescrits par un médecin généraliste`,
      `ils peuvent être prescrits à tous les patients atteints de la maladie`,
      `ils peuvent être prescrits à tout âge`,
      `ils peuvent être prescrits aux patients ayant eu une transplantation pulmonaire`
    ],
    'A',
    [
      `Vrai. Les modulateurs de CFTR cherchent à améliorer ou restaurer la fonction de la protéine CFTR, notamment son rôle de canal chlore.`,
      `Faux selon la grille. Leur prescription relève d'un cadre spécialisé.`,
      `Faux. Leur efficacité dépend notamment du génotype CFTR et des indications propres aux molécules.`,
      `Faux. Les autorisations de prescription comportent des limites d'âge qui peuvent évoluer.`,
      `Faux selon la grille. Leur utilisation après transplantation pulmonaire n'est pas une indication systématique et nécessite une évaluation spécialisée.`
    ]
  ),

  Q(6,
    `Concernant les inversions paracentriques, quelle proposition est vraie ?`,
    [
      `elles ne concernent que les chromosomes acrocentriques`,
      `elles ne modifient pas l’indice centromérique`,
      `elles sont toujours déséquilibrées`,
      `elles impliquent la survenue de trois points de cassure`,
      `elles impliquent les deux chromosomes homologues`
    ],
    'B',
    [
      `Faux. Une inversion paracentrique peut concerner différents chromosomes.`,
      `Vrai. L'inversion paracentrique implique un segment chromosomique ne contenant pas le centromère ; elle ne modifie donc pas la position du centromère ni l'indice centromérique.`,
      `Faux. Une inversion peut être équilibrée, sans perte ni gain global de matériel génétique.`,
      `Faux. Une inversion chromosomique classique résulte de deux points de cassure.`,
      `Faux. Elle concerne un segment d'un chromosome et ne nécessite pas l'implication simultanée des deux homologues.`
    ]
  ),

  Q(7,
    `Lequel des éléments anatomiques ci-dessous ne fait pas partie du pavillon de l’oreille ?`,
    [
      `le tragus`,
      `l’hélix`,
      `la conque`,
      `la columelle`,
      `le tubercule de Darwin`
    ],
    'D',
    [
      `Faux. Le tragus est une saillie cartilagineuse située en avant du conduit auditif externe.`,
      `Faux. L'hélix forme le rebord périphérique du pavillon auriculaire.`,
      `Faux. La conque est la dépression du pavillon qui conduit au méat acoustique externe.`,
      `Vrai. La columelle est la structure située entre les deux narines ; elle ne fait pas partie de l'oreille.`,
      `Faux. Le tubercule de Darwin est une petite saillie anatomique pouvant être observée sur l'hélix.`
    ]
  ),

  Q(8,
    `Lequel des facteurs de prédisposition génétique ci-dessous augmente le risque relatif d'avoir une spondylarthrite ankylosante ?`,
    [
      `apolipoprotéine E4`,
      `groupe HLA DR3`,
      `groupe HLA DR4`,
      `groupe HLA B27`,
      `variant du gène NOD2`
    ],
    'D',
    [
      `Faux. APOE ε4 est notamment associé à une augmentation du risque de maladie d'Alzheimer à début tardif.`,
      `Faux. HLA-DR3 est associé à certaines maladies auto-immunes, mais n'est pas le marqueur principal de spondylarthrite ankylosante.`,
      `Faux. HLA-DR4 est notamment associé à certaines maladies auto-immunes comme la polyarthrite rhumatoïde.`,
      `Vrai. HLA-B27 est fortement associé à la spondylarthrite ankylosante, sans être suffisant à lui seul pour provoquer la maladie.`,
      `Faux. Les variants de NOD2 sont notamment associés à une susceptibilité à la maladie de Crohn.`
    ]
  ),

  Q(9,
    `Concernant la variation pathogène F508del du gène CFTR dans la mucoviscidose quelle proposition est vraie ?`,
    [
      `elle fait partie des variations ponctuelles de l’ADN`,
      `elle consiste en une substitution de base`,
      `elle conduit à une variation de type faux-sens`,
      `elle est mise en évidence par analyse en FISH`,
      `elle entraîne un décalage du cadre de lecture`
    ],
    'A',
    [
      `Vrai selon la grille officielle. F508del est une petite délétion intragénique de trois nucléotides, classée ici parmi les variations ponctuelles de l'ADN au sens large.`,
      `Faux. F508del est une délétion de trois nucléotides et non une substitution.`,
      `Faux. Elle entraîne la disparition d'une phénylalanine en position 508, sans simple remplacement par un autre acide aminé.`,
      `Faux. Cette anomalie de petite taille est notamment détectable par des techniques de biologie moléculaire comme le séquençage.`,
      `Faux. La délétion concerne trois nucléotides, soit un nombre multiple de trois ; le cadre de lecture est donc conservé.`
    ]
  ),

  Q(10,
    `Laquelle des anomalies ci-dessous peut être mise en évidence par la technique de séquençage Sanger ?`,
    [
      `délétion de l’exon 7 du gène SMN1`,
      `variant p.Glu6Val de la drépanocytose`,
      `délétion de l’exon 50 de la myopathie de Duchenne`,
      `inversion du gène du facteur VIII de l’hémophilie A`,
      `délétion de 11,7 kb du gène de l’incontinentia pigmenti`
    ],
    'B',
    [
      `Faux. La délétion de l'exon 7 de SMN1 est généralement recherchée par des méthodes de dosage du nombre de copies, comme la MLPA ou une PCR adaptée.`,
      `Vrai. Le variant responsable de l'HbS est une substitution ponctuelle du gène HBB, détectable par séquençage Sanger.`,
      `Faux. Une délétion exonique complète de DMD est généralement recherchée par MLPA ou une autre technique de dosage.`,
      `Faux. Les inversions du gène F8 nécessitent généralement des méthodes moléculaires spécifiques.`,
      `Faux. Une délétion de 11,7 kb est trop importante pour être recherchée directement par un séquençage Sanger standard.`
    ]
  ),

  Q(11,
    `Concernant l’hérédité mendélienne, quelle proposition est vraie ?`,
    [
      `la transmission d’une maladie d’un père à sa fille signe une hérédité autosomique`,
      `le fils d'une femme conductrice d'une maladie liée à l'X a un risque de 1 sur 4 d'être atteint`,
      `une femme atteinte d'une maladie dominante liée à l'X transmet la maladie à tous ses enfants`,
      `une personne atteinte d'une maladie autosomique récessive ne peut pas transmettre la maladie`,
      `dans l'hérédité récessive liée à l'X, seuls les hommes sont atteints de la maladie`
    ],
    'E',
    [
      `Faux. Une transmission père-fille est également possible dans une maladie liée à l'X.`,
      `Faux. Une femme conductrice transmet l'allèle pathogène à un fils sur deux, soit 50 % des fils.`,
      `Faux. Une femme hétérozygote pour une maladie dominante liée à l'X transmet généralement l'allèle pathogène à 50 % de ses enfants.`,
      `Faux. Une personne atteinte d'une maladie autosomique récessive transmet nécessairement l'un de ses allèles pathogènes à chacun de ses enfants.`,
      `Vrai selon la grille officielle. Les maladies récessives liées à l'X touchent principalement les hommes hémizygotes. La formulation « seuls les hommes » est toutefois trop absolue : des femmes peuvent exceptionnellement être atteintes.`
    ]
  ),

  Q(12,
    `Quelle est la suture crânienne qui est prématurément fusionnée dans la plagiocéphalie antérieure ?`,
    [
      `la suture sagittale`,
      `la suture métopique`,
      `une suture pariéto-squameuse`,
      `une suture lambdoïde`,
      `une suture coronale`
    ],
    'E',
    [
      `Faux. La synostose sagittale entraîne principalement une scaphocéphalie.`,
      `Faux. La fusion de la suture métopique entraîne une trigonocéphalie.`,
      `Faux. La suture pariéto-squameuse n'est pas la suture typiquement responsable d'une plagiocéphalie antérieure.`,
      `Faux. Une synostose lambdoïde entraîne principalement une plagiocéphalie postérieure.`,
      `Vrai. La fusion prématurée d'une suture coronale unilatérale provoque une plagiocéphalie antérieure.`
    ]
  ),

  Q(13,
    `Lequel des signes suivants ne fait pas partie du phénotype de la trisomie 18 libre, complète et homogène ?`,
    [
      `fente labiopalatine`,
      `atrésie de l’oesophage`,
      `aplasie radiale`,
      `avance staturale`,
      `spina bifida`
    ],
    'D',
    [
      `Faux dans le cadre de la question. Une fente labiopalatine peut être observée dans les syndromes polymalformatifs associés à la trisomie 18.`,
      `Faux. Des anomalies digestives, dont une atrésie œsophagienne, peuvent être associées à la trisomie 18.`,
      `Faux selon la grille. Des anomalies des membres supérieurs, notamment radiales, peuvent être rencontrées.`,
      `Vrai : c'est la proposition ne faisant pas partie du phénotype attendu. La trisomie 18 est généralement associée à un retard de croissance intra-utérin et postnatal.`,
      `Faux selon la grille. Des anomalies du tube neural, dont le spina bifida, peuvent être associées à la trisomie 18.`
    ]
  ),

  Q(14,
    `Quelle est la probabilité que le futur enfant d’un couple de cousins germains en bonne santé, dont la femme a une soeur atteinte de mucoviscidose, soit à son tour atteint de la maladie ?`,
    [
      `1/24`,
      `1/32`,
      `1/48`,
      `1/64`,
      `1/128`
    ],
    'A',
    [
      `Vrai. La femme non malade ayant une sœur atteinte a un risque de 2/3 d'être conductrice. Son cousin germain a un risque estimé de 1/4 d'être conducteur de l'allèle familial. Pour une maladie autosomique récessive : 2/3 × 1/4 × 1/4 = 1/24.`,
      `Faux. Cette probabilité ne correspond pas au produit des risques de portage dans le modèle retenu.`,
      `Faux. Le risque familial calculé est plus élevé que 1/48.`,
      `Faux. Cette valeur sous-estime le risque de récurrence lié à la consanguinité dans cette situation.`,
      `Faux. Ce résultat est inférieur au risque obtenu par le calcul généalogique attendu.`
    ]
  ),

  Q(15,
    `L’hémophilie A sévère est due dans 50 % des cas à une anomalie moléculaire préférentielle. Il s'agit de :`,
    [
      `une délétion multi-exonique`,
      `une inversion intra-génique`,
      `une duplication intra-génique`,
      `une substitution de type faux-sens`,
      `une petite délétion avec décalage du cadre de lecture`
    ],
    'B',
    [
      `Faux. Les délétions multi-exoniques peuvent être responsables d'hémophilie A, mais ne constituent pas l'anomalie préférentielle citée.`,
      `Vrai. L'inversion de l'intron 22 du gène F8 représente environ 40 à 50 % des hémophilies A sévères selon les séries.`,
      `Faux. Les duplications intragéniques existent mais sont moins fréquentes.`,
      `Faux. Les substitutions faux-sens sont possibles, mais n'expliquent pas la moitié des formes sévères.`,
      `Faux. Les petites délétions décalant le cadre de lecture constituent un autre mécanisme pathogène.`
    ]
  ),

  Q(16,
    `Concernant le test prédictif ou présymptomatique, quelle proposition est vraie ?`,
    [
      `il n’est prescrit que pour des maladies incurables`,
      `il peut être prescrit par un médecin généraliste`,
      `il ne peut être effectué qu’après un délai de réflexion`,
      `il peut être effectué dans n’importe quel laboratoire`,
      `il ne concerne que les maladies multifactorielles`
    ],
    'C',
    [
      `Faux. Les tests présymptomatiques peuvent concerner des maladies pour lesquelles des mesures de prévention ou des traitements existent.`,
      `Faux selon la grille. Ils nécessitent une prise en charge dans un cadre spécialisé.`,
      `Vrai selon la grille officielle. Le protocole de test présymptomatique comprend une information et un temps de réflexion avant la décision de réaliser l'analyse.`,
      `Faux. Ces examens sont réalisés par des laboratoires disposant des autorisations nécessaires.`,
      `Faux. Ils concernent notamment des maladies monogéniques à début tardif, comme la maladie de Huntington.`
    ]
  ),

  Q(17,
    `Concernant le diagnostic prénatal par le test ADNlc en France, quelle proposition est vraie ?`,
    [
      `il est proposé d’emblée à toutes les femmes enceintes`,
      `il est possible dans n’importe quel laboratoire de biologie`,
      `il est possible pour toutes les maladies génétiques`,
      `il ne peut être effectué qu’à partir de 15 semaines d’aménorrhée`,
      `il fait partie de la stratégie du dépistage des principales aneuploïdies`
    ],
    'E',
    [
      `Faux. Dans le cadre du dépistage français de 2025, le test ADNlc n'est pas proposé systématiquement en première intention à toutes les femmes enceintes.`,
      `Faux. Il nécessite des laboratoires et des procédures disposant des autorisations adaptées.`,
      `Faux. Le test ADNlc de dépistage des aneuploïdies ne permet pas de rechercher toutes les maladies génétiques.`,
      `Faux. Il peut être effectué plus précocement que 15 semaines d'aménorrhée.`,
      `Vrai. L'analyse de l'ADN libre circulant fait partie de la stratégie de dépistage prénatal des principales aneuploïdies, notamment les trisomies 21, 18 et 13.`
    ]
  ),

  Q(18,
    `Concernant la dominance et la récessivité, quelle proposition est vraie ?`,
    [
      `les notions de dominance et de récessivité s'appliquent à un phénotype et non à un gène`,
      `les mutations inactivatrices sont en général responsables de maladies dominantes`,
      `les mutations de type ‘gain de fonction’ sont responsables de maladies récessives`,
      `des maladies variées dues au même gène sont forcément transmises sur le même mode`,
      `la transmission dominante ou récessive ne dépend pas de la nature des variants pathogènes`
    ],
    'A',
    [
      `Vrai. La dominance et la récessivité décrivent l'expression d'un phénotype selon le génotype, et non une propriété intrinsèque et immuable d'un gène.`,
      `Faux. Les variants inactivateurs peuvent provoquer des maladies récessives ou dominantes selon le mécanisme pathogène.`,
      `Faux. Les variants de gain de fonction sont souvent responsables de maladies dominantes.`,
      `Faux. Un même gène peut être impliqué dans des maladies dominantes et récessives.`,
      `Faux. La nature du variant, notamment perte de fonction, gain de fonction ou effet dominant négatif, peut influencer le mode de transmission.`
    ]
  ),

  Q(19,
    `Quelle est la probabilité que la cousine d’un garçon atteint d’hémophilie ait à son tour un fils atteint de la maladie, sachant que leurs mères sont demi-sœurs par leur père qui est lui-même atteint ?`,
    [
      `1/4`,
      `1/8`,
      `1/16`,
      `1/32`,
      `1/64`
    ],
    'A',
    [
      `Vrai selon la grille. Le grand-père atteint transmet son X muté à ses deux filles, qui sont donc conductrices. La cousine a une probabilité de 1/2 d'être conductrice et, si elle a un fils, une probabilité de 1/2 de lui transmettre l'allèle pathogène : 1/2 × 1/2 = 1/4.`,
      `Faux selon la grille. Cette valeur résulterait de l'ajout d'un facteur 1/2 pour la probabilité d'avoir un garçon, alors que le calcul officiel considère le risque pour un fils.`,
      `Faux. Cette probabilité est inférieure au risque conditionnel attendu.`,
      `Faux. Il n'y a pas autant d'étapes de transmission probabiliste à prendre en compte.`,
      `Faux. Le résultat attendu dans cette situation est de 1/4 pour un fils.`
    ]
  ),

  Q(20,
    `Quelle proposition est vraie concernant la phénylcétonurie ?`,
    [
      `il s'agit d'une maladie avec un variant pathogène unique`,
      `elle est de transmission autosomique récessive`,
      `elle fait l’objet d’un diagnostic prénatal chez toutes les femmes enceintes`,
      `elle est due à un déficit en tyrosine hydroxylase`,
      `elle est incurable malgré un régime approprié`
    ],
    'B',
    [
      `Faux. La phénylcétonurie présente une importante hétérogénéité allélique du gène PAH.`,
      `Vrai. La phénylcétonurie classique est une maladie autosomique récessive liée à un déficit en phénylalanine hydroxylase.`,
      `Faux. Elle fait l'objet d'un dépistage néonatal systématique dans de nombreux pays, mais pas d'un diagnostic prénatal systématique.`,
      `Faux. Le déficit concerne la phénylalanine hydroxylase, qui transforme la phénylalanine en tyrosine.`,
      `Faux selon la grille. Un régime adapté instauré précocement permet de prévenir une grande partie des complications neurologiques.`
    ]
  ),

  Q(21,
    `A propos des anomalies chromosomiques, quelles propositions sont vraies ?`,
    [
      `les aneuploïdies surviennent par anomalie de fécondation`,
      `la trisomie X homogène n’est pas viable`,
      `les anomalies de nombre des gonosomes sont les aneuploïdies les plus fréquentes à la naissance`,
      `les anomalies chromosomiques sont la cause de 20% des avortements spontanés précoces`,
      `les translocations équilibrées sont les anomalies de structure les plus fréquentes`
    ],
    'CE',
    [
      `Faux selon la grille. Les aneuploïdies résultent principalement de défauts de ségrégation chromosomique, notamment méiotique.`,
      `Faux. La trisomie X, 47,XXX, est compatible avec la vie.`,
      `Vrai. Les aneuploïdies des chromosomes sexuels sont particulièrement fréquentes parmi les anomalies chromosomiques observées à la naissance.`,
      `Faux. Une proportion beaucoup plus importante des fausses couches précoces présente une anomalie chromosomique, souvent proche de la moitié.`,
      `Vrai selon la grille. Les translocations équilibrées représentent une catégorie fréquente d'anomalies chromosomiques de structure.`
    ]
  ),

  Q(22,
    `Les maladies autosomiques dominantes dues à des expansions de triplets CAG, comme la maladie de Huntington ou les ataxies cérébelleuses dominantes, se caractérisent par :`,
    [
      `un taux élevé de néomutations favorisé par l'âge paternel élevé`,
      `une anticipation liée à une instabilité des triplets`,
      `une corrélation entre le nombre de triplets et l'âge de début de la maladie`,
      `une localisation du motif répété en dehors de la séquence codante`,
      `une perte de fonction de la protéine responsable de la maladie`
    ],
    'BC',
    [
      `Faux. Ces maladies sont généralement liées à la transmission et à l'expansion d'allèles répétés, et non principalement à de nouvelles mutations ponctuelles.`,
      `Vrai. L'expansion instable du nombre de répétitions peut entraîner une anticipation, avec apparition plus précoce ou aggravation au fil des générations.`,
      `Vrai. Le nombre de répétitions CAG est généralement inversement corrélé à l'âge de début de la maladie.`,
      `Faux. Les expansions polyglutamines CAG concernent les régions codantes des gènes.`,
      `Faux. Le mécanisme principal implique généralement un gain de fonction toxique de la protéine contenant une expansion polyglutamine.`
    ]
  ),

  Q(23,
    `Parmi les examens suivants, lesquels relèvent des dispositions réglementaires concernant l’étude des caractéristiques génétiques d’une personne ?`,
    [
      `recherche du chromosome Philadelphie`,
      `recherche de l’antigène HLA-B27`,
      `recherche de l’apoliprotéine E4`,
      `analyse du gène CFTR`,
      `analyse en FISH de la région 22q11`
    ],
    'CDE',
    [
      `Faux selon la grille. La recherche du chromosome Philadelphie constitue généralement une analyse de génétique somatique acquise, dans le cadre d'une hémopathie.`,
      `Faux selon la grille. La recherche de l'antigène HLA-B27 est une exploration immunologique et non nécessairement une étude directe du génome constitutionnel.`,
      `Vrai selon la grille. La recherche d'APOE ε4 dans un contexte de prédisposition relève des examens de caractéristiques génétiques.`,
      `Vrai. L'étude du gène CFTR recherche des variants génétiques constitutionnels.`,
      `Vrai. L'analyse FISH de la région 22q11 peut rechercher une anomalie chromosomique constitutionnelle, notamment une microdélétion.`
    ]
  ),

  Q(24,
    `Concernant la formule chromosomique 47, XXY, quelles propositions sont vraies ?`,
    [
      `elle aboutit souvent à une fausse-couche précoce`,
      `elle peut être associée à une petite taille`,
      `le gonosome surnuméraire est toujours d’origine paternelle`,
      `elle n’occasionne pas de malformations congénitales`,
      `elle est responsable d’une stérilité`
    ],
    'DE',
    [
      `Faux selon la grille. Le syndrome de Klinefelter 47,XXY est compatible avec une naissance vivante.`,
      `Faux. Les personnes 47,XXY ont souvent une taille supérieure à la moyenne.`,
      `Faux. Le chromosome X surnuméraire peut être d'origine maternelle ou paternelle.`,
      `Vrai selon la grille. Le syndrome de Klinefelter n'est généralement pas associé à un syndrome polymalformatif caractéristique.`,
      `Vrai selon la grille. Il est classiquement associé à une insuffisance testiculaire avec infertilité, souvent liée à une azoospermie. La stérilité n'est toutefois pas absolue dans tous les cas.`
    ]
  ),

  Q(25,
    `A propos de la neurofibromatose de type 1, quelles propositions sont vraies ?`,
    [
      `environ 50 % des cas surviennent par mutation de novo`,
      `la neurofibromine a un rôle suppresseur de tumeur`,
      `la pénétrance de la maladie est complète`,
      `la maladie est due à des variants pathogènes de type gain de fonction`,
      `la maladie est due à un variant pathogène prédominant du gène NF1`
    ],
    'ABC',
    [
      `Vrai. Environ la moitié des cas de neurofibromatose de type 1 surviennent par néomutation.`,
      `Vrai. La neurofibromine, codée par NF1, participe à la régulation négative de la voie RAS et joue un rôle suppresseur de tumeur.`,
      `Vrai selon la grille. La pénétrance de la NF1 est pratiquement complète à l'âge adulte, même si l'expressivité est très variable.`,
      `Faux. La NF1 résulte principalement de variants de perte de fonction.`,
      `Faux. Il existe une importante hétérogénéité allélique, avec de nombreux variants pathogènes différents de NF1.`
    ]
  ),

  Q(26,
    `Parmi les actes suivants, lesquels peuvent être pratiqués par un(e) conseiller(e) en génétique ?`,
    [
      `donner une information sur une maladie`,
      `examiner un patient`,
      `prescrire une analyse génétique`,
      `étudier un dossier médical`,
      `faire une prise de sang`
    ],
    'ACD',
    [
      `Vrai. L'information et l'accompagnement des patients concernant les maladies génétiques font partie des missions du conseiller en génétique.`,
      `Faux. Le conseiller en génétique n'est pas habilité à réaliser un examen clinique médical.`,
      `Vrai selon la grille. Certaines prescriptions d'analyses génétiques peuvent être réalisées dans le cadre légal et médical encadrant cette profession.`,
      `Vrai. L'étude des dossiers médicaux et des informations familiales fait partie de ses activités.`,
      `Faux selon la grille. La réalisation d'une prise de sang ne relève pas des actes autorisés au titre de cette profession dans le cadre retenu.`
    ]
  ),

  Q(27,
    `Lesquels des signes suivants peuvent être observés dans le syndrome de l’X fragile ?`,
    [
      `macro-orchidie`,
      `épilepsie`,
      `ataxie cérébelleuse`,
      `macrocéphalie`,
      `petite taille`
    ],
    'ABD',
    [
      `Vrai. La macro-orchidie est une manifestation classique chez les garçons atteints, particulièrement après la puberté.`,
      `Vrai. Une épilepsie peut être associée au syndrome de l'X fragile.`,
      `Faux selon la grille. L'ataxie cérébelleuse n'est pas une manifestation classique du syndrome de l'X fragile ; elle évoque notamment le syndrome FXTAS chez certains porteurs de prémutation FMR1.`,
      `Vrai. Une macrocéphalie relative peut être observée chez certains patients.`,
      `Faux. La petite taille n'est pas une caractéristique habituelle du syndrome de l'X fragile.`
    ]
  ),

  Q(28,
    `Parmi les mécanismes ci-dessous, lesquels peuvent permettre d'expliquer une expressivité variable d'une maladie monogénique ?`,
    [
      `une mosaïque somatique`,
      `une mosaïque gonadique`,
      `un gène modificateur`,
      `un oligogénisme`,
      `une néomutation`
    ],
    'ACD',
    [
      `Vrai. Une mosaïque somatique peut produire une expression variable selon la proportion et la distribution tissulaire des cellules mutées.`,
      `Faux selon la grille. Une mosaïque gonadique modifie surtout le risque de transmission à la descendance.`,
      `Vrai. Un gène modificateur peut augmenter ou diminuer la sévérité d'une maladie monogénique.`,
      `Vrai selon la grille. L'intervention de plusieurs gènes peut moduler le phénotype lié à un variant pathogène principal.`,
      `Faux. Une néomutation décrit l'apparition d'un nouveau variant, mais n'explique pas à elle seule l'expressivité variable d'une maladie.`
    ]
  ),

  Q(29,
    `Quels vecteurs sont utilisés actuellement en pratique pour la thérapie génique par transfert de gène ?`,
    [
      `les virus AAV`,
      `les adénovirus`,
      `les liposomes`,
      `les rétrovirus`,
      `les lentivirus`
    ],
    'ADE',
    [
      `Vrai. Les vecteurs AAV sont utilisés pour certaines thérapies géniques in vivo, notamment des maladies rétiniennes.`,
      `Faux selon la grille. Les adénovirus ne font pas partie des vecteurs retenus dans cette question pour les thérapies de transfert de gène actuellement utilisées en pratique.`,
      `Faux selon la grille. Les liposomes sont des vecteurs non viraux étudiés pour le transfert de matériel génétique, mais ne sont pas retenus ici.`,
      `Vrai. Des vecteurs rétroviraux ont été utilisés pour introduire des gènes dans des cellules dans certaines stratégies de thérapie génique.`,
      `Vrai. Les vecteurs lentiviraux sont notamment utilisés dans des thérapies géniques ex vivo sur cellules souches hématopoïétiques.`
    ]
  ),

  Q(30,
    `A propos de la technique de CGH-array pour l'analyse chromosomique sur puce à ADN, quelles sont les bonnes réponses ?`,
    [
      `elle est utilisée en première intention pour le diagnostic de trisomie 21 libre et homogène`,
      `elle permet l’analyse d’anomalies de structure équilibrées`,
      `elle a un niveau de résolution supérieur à celui de la FISH`,
      `elle consiste en une analyse comparative avec un ADN témoin`,
      `elle nécessite une culture cellulaire préalable`
    ],
    'CD',
    [
      `Faux selon la grille. Le diagnostic d'une trisomie 21 libre et homogène peut être établi par des examens chromosomiques adaptés ; la CGH-array n'est pas l'examen de première intention retenu dans ce cours.`,
      `Faux. La CGH-array recherche des variations du nombre de copies et ne détecte pas directement les réarrangements équilibrés.`,
      `Vrai selon la grille. La CGH-array permet une analyse génomique à haute résolution des déséquilibres chromosomiques.`,
      `Vrai. Elle repose sur l'hybridation comparative d'ADN du patient et d'un ADN de référence.`,
      `Faux. La CGH-array peut être réalisée directement à partir d'ADN extrait, sans culture cellulaire préalable.`
    ]
  ),

  Q(31,
    `Lesquelles des pathologies suivantes sont connues pour être de déterminisme multifactoriel ?`,
    [
      `maladie de Crohn`,
      `sténose du pylore`,
      `autisme`,
      `spina bifida`,
      `obésité commune`
    ],
    'ABCDE',
    [
      `Vrai. La maladie de Crohn associe susceptibilité polygénique et facteurs environnementaux.`,
      `Vrai. La sténose hypertrophique du pylore est un exemple classique d'affection à déterminisme multifactoriel.`,
      `Vrai. Les troubles du spectre autistique présentent des causes hétérogènes, incluant fréquemment des facteurs génétiques multiples et environnementaux.`,
      `Vrai. Le spina bifida peut résulter d'une susceptibilité multifactorielle impliquant notamment le métabolisme des folates.`,
      `Vrai. L'obésité commune dépend de nombreux variants génétiques et de facteurs environnementaux.`
    ]
  ),

  Q(32,
    `Concernant les polyploïdies, quelles propositions sont vraies ?`,
    [
      `le lot haploïde surnuméraire est toujours d’origine maternelle`,
      `elles sont constamment létales à l’état homogène`,
      `elles sont les plus fréquentes des anomalies de nombre des chromosomes`,
      `elles surviennent par anomalie de fécondation`,
      `leur survenue est favorisée par un âge paternel élevé`
    ],
    'BD',
    [
      `Faux. Le lot haploïde surnuméraire peut être d'origine maternelle ou paternelle.`,
      `Vrai selon la grille. Les polyploïdies constitutionnelles homogènes humaines sont incompatibles avec une survie prolongée.`,
      `Faux. Les aneuploïdies sont plus fréquentes parmi les anomalies de nombre chromosomique observées à la naissance.`,
      `Vrai. Une anomalie de fécondation, notamment la dispermie, peut entraîner une triploïdie.`,
      `Faux selon la grille. L'âge paternel élevé n'est pas le facteur de risque classique retenu pour les polyploïdies.`
    ]
  ),

  Q(33,
    `Concernant les néomutations dans les maladies monogéniques, quelles propositions sont vraies ?`,
    [
      `elles ont une origine paternelle exclusive dans les maladies dominantes`,
      `elles sont fréquentes dans les maladies autosomiques récessives`,
      `leur survenue est favorisée par un âge paternel élevé`,
      `certaines mutations confèrent aux spermatogonies un avantage sélectif`,
      `elles rendent compte de 50% des cas des maladies où la fécondité est nulle`
    ],
    'CD',
    [
      `Faux. Une néomutation peut être d'origine maternelle ou paternelle, même si certaines maladies montrent un important biais paternel.`,
      `Faux. Les maladies autosomiques récessives sont généralement dues à des variants hérités des deux parents.`,
      `Vrai. L'augmentation de l'âge paternel est associée à une augmentation du nombre de certaines mutations de novo.`,
      `Vrai. Certaines mutations peuvent favoriser la prolifération clonale de spermatogonies, créant une sélection dite égoïste.`,
      `Faux. Dans le modèle d'une maladie dominante empêchant complètement la reproduction, les nouveaux cas doivent théoriquement résulter de néomutations, et pas seulement de 50 % d'entre eux.`
    ]
  ),

  Q(34,
    `Concernant l’empreinte parentale, quelles propositions sont vraies ?`,
    [
      `elle concerne l’ensemble des régions du génome`,
      `elle est variable dans les différents tissus de l’organisme`,
      `elle est apposée pendant la gamétogénèse`,
      `son apposition est associée à une hausse du niveau de méthylation de l’ADN`,
      `l’allèle d’origine maternelle d’un gène soumis à empreinte maternelle est physiologiquement inactif`
    ],
    'CDE',
    [
      `Faux. Seules certaines régions génomiques sont soumises à empreinte parentale.`,
      `Faux selon la grille. Les marques d'empreinte sont normalement maintenues lors des divisions somatiques, même si l'expression des gènes peut varier selon les tissus.`,
      `Vrai. Les empreintes parentales sont établies au cours de la gamétogenèse.`,
      `Vrai selon la grille. L'établissement des empreintes implique notamment une méthylation spécifique de certaines régions de l'ADN.`,
      `Vrai. Dans l'empreinte maternelle, l'allèle transmis par la mère est physiologiquement réprimé.`
    ]
  ),

  Q(35,
    `A propos des substitutions de base à l’origine des maladies monogéniques, quelles propositions sont vraies ?`,
    [
      `il s’agit plus souvent de transversions que de transitions`,
      `ce sont les anomalies moléculaires intragéniques les plus fréquentes`,
      `elles entraînent un décalage du cadre de lecture`,
      `elles surviennent par recombinaison homologue non-allélique`,
      `les substitutions de type non-sens sont les plus fréquentes`
    ],
    'AB',
    [
      `Vrai selon la grille officielle. Attention : en génétique moléculaire générale, les transitions sont habituellement plus fréquentes que les transversions. La réponse officielle est conservée malgré cette discordance.`,
      `Vrai. Les substitutions de bases constituent une catégorie très fréquente de variations moléculaires intragéniques.`,
      `Faux. Une substitution ne modifie pas le nombre de nucléotides et ne décale donc pas le cadre de lecture.`,
      `Faux. La recombinaison homologue non allélique est notamment impliquée dans certaines délétions, duplications ou réarrangements.`,
      `Faux. Les substitutions faux-sens sont généralement plus fréquentes que les substitutions non-sens.`
    ]
  ),

  Q(36,
    `Lesquelles des anomalies ci-dessous peuvent être mises en évidence par la technique de Southern blot ?`,
    [
      `variant 394delTT du gène CFTR`,
      `amplification de triplets du gène FMR1`,
      `délétion de 3,5 kb du gène DMD`,
      `délétion de 3 Mb de la région 22q11`,
      `variant p.Gly380Arg du gène FGFR3`
    ],
    'BC',
    [
      `Faux. Une petite délétion de deux nucléotides est notamment détectable par séquençage.`,
      `Vrai. Le Southern blot est historiquement utilisé pour analyser les expansions CGG du gène FMR1, en particulier les grandes expansions et leur méthylation.`,
      `Vrai. Une délétion de plusieurs kilobases peut être détectée par Southern blot avec des sondes et des fragments de restriction adaptés.`,
      `Faux selon la grille. Les microdélétions de la région 22q11 sont généralement recherchées par CGH-array, MLPA ou FISH.`,
      `Faux. Le variant FGFR3 p.Gly380Arg est une substitution ponctuelle principalement détectée par séquençage.`
    ]
  ),

  Q(37,
    `Concernant le diagnostic pré-implantatoire, quelles propositions sont vraies ?`,
    [
      `il relève des mêmes indications que le diagnostic prénatal`,
      `il est effectué sur des embryons au 3ème jour de développement`,
      `il permet un taux d’obtention de grossesse de l’ordre de 80%`,
      `il peut être proposé à toutes les femmes enceintes`,
      `il permet l’étude du caryotype foetal`
    ],
    'AB',
    [
      `Vrai selon la grille. Le diagnostic préimplantatoire s'inscrit dans le cadre d'indications génétiques graves apparentées à celles du diagnostic prénatal, avec ses propres conditions légales.`,
      `Vrai selon la grille. Une biopsie embryonnaire au troisième jour de développement est une méthode historique de DPI. Les pratiques actuelles privilégient souvent la biopsie du trophectoderme au stade blastocyste.`,
      `Faux. Le taux d'obtention de grossesse est nettement inférieur à 80 % par tentative et dépend de nombreux facteurs.`,
      `Faux. Le DPI s'inscrit dans une démarche d'assistance médicale à la procréation avec indications strictes.`,
      `Faux selon la grille. Le DPI recherche des anomalies ciblées sur des cellules embryonnaires et ne correspond pas systématiquement à un caryotype fœtal complet.`
    ]
  ),

  Q(38,
    `Lesquels des éléments anatomiques ci-dessous sont situés dans l’étage moyen de la face ?`,
    [
      `la columelle`,
      `la caroncule`,
      `l’arc de Cupidon`,
      `le philtrum`,
      `la glabelle`
    ],
    'ABE',
    [
      `Vrai selon la grille. La columelle est la structure médiane séparant les deux narines.`,
      `Vrai selon la grille. La caroncule lacrymale se situe au niveau de l'angle interne de l'œil.`,
      `Faux selon la grille. L'arc de Cupidon correspond au contour caractéristique de la lèvre supérieure.`,
      `Faux selon la grille. Le philtrum est le sillon médian reliant le nez à la lèvre supérieure.`,
      `Vrai selon la grille. La glabelle est la région médiane située entre les sourcils. La classification de ces reliefs par étages faciaux dépend du référentiel dysmorphologique utilisé.`
    ]
  ),

  Q(39,
    `A propos des prédispositions héréditaires au cancer, quelles sont les bonnes réponses ?`,
    [
      `elles se transmettent préférentiellement sur le mode autosomique dominant`,
      `elles concernent 5 % de l'ensemble des cancers`,
      `elles entraînent systématiquement un risque cumulé de cancer de 100%`,
      `elles sont en lien avec des mutations présentes uniquement au niveau tumoral`,
      `elles sont principalement liées à des mutations activatrices d'oncogènes`
    ],
    'AB',
    [
      `Vrai. La majorité des syndromes classiques de prédisposition héréditaire aux cancers suit une transmission autosomique dominante.`,
      `Vrai selon la grille. Environ 5 % des cancers sont considérés comme relevant de prédispositions héréditaires majeures, selon les définitions et estimations utilisées.`,
      `Faux. La pénétrance est variable et le risque cumulé de cancer n'atteint pas systématiquement 100 %.`,
      `Faux. Les prédispositions héréditaires reposent sur des variants constitutionnels présents dès la naissance dans les cellules de l'organisme.`,
      `Faux. De nombreux syndromes de prédisposition résultent de variants inactivateurs de gènes suppresseurs de tumeur ou de réparation de l'ADN.`
    ]
  ),

  Q(40,
    `Parmi les paramètres suivants lesquels sont pris en compte dans le dépistage combiné de la trisomie 21 au 1er trimestre de la grossesse ?`,
    [
      `mesure échographique de la clarté nucale`,
      `taux d’alpha-foetoprotéine dans le sang maternel`,
      `âge de la femme enceinte`,
      `quantité de liquide amniotique`,
      `taux de β-HCG dans le sang maternel`
    ],
    'ACE',
    [
      `Vrai. La mesure échographique de la clarté nucale entre dans le calcul du risque combiné de trisomie 21 au premier trimestre.`,
      `Faux. L'alpha-fœtoprotéine est notamment utilisée dans certaines stratégies de dépistage du deuxième trimestre.`,
      `Vrai. L'âge maternel est intégré au calcul du risque de trisomie 21.`,
      `Faux. La quantité de liquide amniotique n'est pas l'un des paramètres standards du dépistage combiné du premier trimestre.`,
      `Vrai. La fraction libre de β-hCG sérique maternelle fait partie des marqueurs biologiques, avec la PAPP-A.`
    ]
  )
];
