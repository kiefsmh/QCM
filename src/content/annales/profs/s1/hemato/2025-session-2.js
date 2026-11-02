
export const meta = {
  title: 'UE Tissu sanguin — Annales 2025 — Session 2',
};

// Réponses strictement conformes à la grille officielle.
// 60 questions, aucune annulation.
// Les énoncés et propositions sont ceux du sujet original.

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
    `L’érythropoïèse :`,
    [
      `se déroule principalement dans la rate`,
      `est stimulée par l’érythropoïétine`,
      `produit des érythrocytes contenant un noyau`,
      `dépend d’un apport adéquat en fer`,
      `dépend d’un apport adéquat en vitamine B9`
    ],
    'BDE',
    [
      `Faux. Chez l'adulte, l'érythropoïèse se déroule principalement dans la moelle osseuse.`,
      `Vrai. L'EPO stimule la survie et la différenciation des progéniteurs érythroïdes.`,
      `Faux. Les érythrocytes matures sont anucléés.`,
      `Vrai. Le fer est indispensable à la synthèse de l'hème.`,
      `Vrai. La vitamine B9 participe à la synthèse de l'ADN des précurseurs érythroïdes.`
    ]
  ),

  Q(2,
    `Les érythrocytes :`,
    [
      `ont une forme biconcave`,
      `sont riches en mitochondries`,
      `ont une grande capacité de déformabilité`,
      `contiennent des granulations`,
      `ont un cytoplasme basophile`
    ],
    'AC',
    [
      `Vrai. Leur forme en disque biconcave optimise les échanges gazeux et la déformabilité.`,
      `Faux. Les érythrocytes matures sont dépourvus de mitochondries.`,
      `Vrai. Leur cytosquelette permet leur passage dans les capillaires étroits.`,
      `Faux. Les hématies matures ne possèdent pas de granulations spécifiques.`,
      `Faux. Leur cytoplasme est acidophile du fait de sa richesse en hémoglobine.`
    ]
  ),

  Q(3,
    `La moelle osseuse hématopoïétique :`,
    [
      `est notamment située dans les os plats chez l’adulte`,
      `contient des cellules souches hématopoïétiques multipotentes`,
      `contient des adipocytes`,
      `produit les cellules sanguines de toutes les lignées`,
      `est innervée par le système nerveux`
    ],
    'ABCDE',
    [
      `Vrai. Chez l'adulte, la moelle rouge persiste notamment dans le sternum, le bassin et les vertèbres.`,
      `Vrai. Les CSH multipotentes peuvent donner naissance aux différentes lignées sanguines.`,
      `Vrai. Le microenvironnement médullaire comprend notamment des adipocytes.`,
      `Vrai. La moelle produit les cellules des lignées myéloïdes et lymphoïdes.`,
      `Vrai. La moelle est notamment innervée par le système nerveux sympathique, participant à la régulation des niches hématopoïétiques.`
    ]
  ),

  Q(4,
    `Les plaquettes :`,
    [
      `sont issues des mégacaryocytes`,
      `possèdent un noyau`,
      `participent à l’hémostase primaire`,
      `circulent dans le sang environ 2 à 4 jours`,
      `ont une taille proche des leucocytes`
    ],
    'AC',
    [
      `Vrai. Les plaquettes sont des fragments cytoplasmiques de mégacaryocytes.`,
      `Faux. Les plaquettes sont anucléées.`,
      `Vrai. Elles participent à l'adhésion, à l'activation et à l'agrégation constituant le clou plaquettaire.`,
      `Faux. Leur durée de vie est généralement de 7 à 10 jours.`,
      `Faux. Les plaquettes sont beaucoup plus petites que les leucocytes, mesurant environ 2 à 3 µm.`
    ]
  ),

  Q(5,
    `La lignée myéloïde donne naissance :`,
    [
      `aux monocytes`,
      `aux lymphocytes`,
      `aux éosinophiles`,
      `aux mégacaryocytes`,
      `aux neutrophiles`
    ],
    'ACDE',
    [
      `Vrai. Les monocytes proviennent de la différenciation myéloïde.`,
      `Faux selon la classification classique du cours. Les lymphocytes appartiennent à la lignée lymphoïde.`,
      `Vrai. Les polynucléaires éosinophiles dérivent de la lignée myéloïde.`,
      `Vrai. Les mégacaryocytes appartiennent à la lignée myéloïde et produisent les plaquettes.`,
      `Vrai. Les polynucléaires neutrophiles sont issus de la granulopoïèse myéloïde.`
    ]
  ),

  Q(6,
    `Concernant les leucocytes :`,
    [
      `les neutrophiles sont les plus nombreux dans le sang`,
      `les basophiles sont responsables de réaction allergique`,
      `les lymphocytes ont un rôle prépondérant dans l'immunité innée`,
      `les monocytes peuvent se différencier en macrophages`,
      `ils ont une durée de vie inférieure à 24h`
    ],
    'ABD',
    [
      `Vrai. Les PNN constituent habituellement la population leucocytaire majoritaire chez l'adulte.`,
      `Vrai. Les basophiles participent aux réactions allergiques, notamment par la libération de médiateurs.`,
      `Faux selon la grille. Les lymphocytes B et T sont principalement responsables de l'immunité adaptative.`,
      `Vrai. Les monocytes peuvent migrer dans les tissus et se différencier en macrophages.`,
      `Faux. La durée de vie des leucocytes varie fortement, certains lymphocytes persistant plusieurs années.`
    ]
  ),

  Q(7,
    `Concernant les facteurs de croissance hématopoïétiques :`,
    [
      `le GM-CSF stimule les lignées granulocytaires et monocytaires`,
      `le G-CSF est utilisé en thérapeutique pour freiner la granulopoïèse`,
      `l’IL-3 stimule le progéniteur lymphoïde commun`,
      `l’érythropoïétine est majoritairement synthétisée par le foie`,
      `la thrombopoïétine est un facteur restreint`
    ],
    'AE',
    [
      `Vrai. Le GM-CSF favorise la prolifération et la différenciation des progéniteurs granulocytaires et monocytaires.`,
      `Faux. Le G-CSF stimule la production et la mobilisation des neutrophiles.`,
      `Faux selon la grille. L'IL-3 agit surtout sur des progéniteurs hématopoïétiques multipotents et myéloïdes.`,
      `Faux. Chez l'adulte, l'EPO est principalement synthétisée par le rein.`,
      `Vrai selon la classification de cette annale. La TPO agit particulièrement sur la mégacaryopoïèse, même si elle possède également des effets sur les CSH.`
    ]
  ),

  Q(8,
    `La réticulocytose :`,
    [
      `est quantifiée par la coloration de Perls`,
      `est un marqueur de la production érythroïde`,
      `augmente en cas d’anémie régénérative`,
      `reflète la destruction plaquettaire`,
      `indique une stimulation médullaire accrue`
    ],
    'BCE',
    [
      `Faux. La coloration de Perls révèle le fer, notamment les dépôts médullaires.`,
      `Vrai. Les réticulocytes reflètent la production récente d'hématies par la moelle.`,
      `Vrai. Une anémie régénérative s'accompagne d'une augmentation des réticulocytes absolus.`,
      `Faux. Les réticulocytes appartiennent à la lignée érythroïde et non plaquettaire.`,
      `Vrai. Une réticulocytose traduit généralement une augmentation de l'activité érythropoïétique.`
    ]
  ),

  Q(9,
    `L’hémoglobine :`,
    [
      `est une protéine dimérique`,
      `lie le fer sous forme ferreuse (Fe2+)`,
      `est synthétisée uniquement dans les globules rouges`,
      `se retrouve intacte dans le plasma en conditions normales`,
      `est faussement augmentée en cas d’hémodilution`
    ],
    'BC',
    [
      `Faux. L'hémoglobine est une protéine tétramérique.`,
      `Vrai. Chaque groupement hème contient du fer ferreux Fe2+, permettant la fixation du dioxygène.`,
      `Vrai selon la grille officielle. L'hémoglobine est synthétisée dans la lignée érythroïde, principalement par les précurseurs et les réticulocytes. La formulation « uniquement dans les globules rouges » est donc imprécise.`,
      `Faux. L'hémoglobine est normalement contenue dans les hématies et sa fraction libre plasmatique est très faible.`,
      `Faux. L'hémodilution diminue la concentration mesurée en hémoglobine.`
    ]
  ),

  Q(10,
    `Concernant les cellules souches hématopoïétiques (CSH) :`,
    [
      `elles peuvent s’autorenouveler`,
      `elles sont très nombreuses dans la moelle osseuse`,
      `elles sont identifiables par le marqueur CD34+`,
      `elles sont mobilisables dans le sang périphérique`,
      `elles sont majoritairement en cycle`
    ],
    'ACD',
    [
      `Vrai. L'autorenouvellement permet de maintenir le compartiment des CSH.`,
      `Faux. Les véritables CSH sont relativement rares dans la moelle.`,
      `Vrai selon la grille. CD34 est un marqueur classiquement utilisé pour enrichir et identifier les populations de cellules souches et progéniteurs.`,
      `Vrai. Les CSH peuvent être mobilisées dans le sang périphérique, notamment par G-CSF.`,
      `Faux. La majorité des CSH à long terme sont quiescentes.`
    ]
  ),

  Q(11,
    `Les lymphocytes :`,
    [
      `les lymphocytes T maturent dans la moelle osseuse`,
      `les lymphocytes B produisent des immunoglobulines`,
      `les cellules NK appartiennent à l’immunité innée`,
      `ils sont capables de mémorisation immunologique`,
      `leur nombre est stable au cours de la vie`
    ],
    'BCD',
    [
      `Faux. Les lymphocytes T maturent principalement dans le thymus.`,
      `Vrai. Les lymphocytes B peuvent se différencier en plasmocytes sécréteurs d'immunoglobulines.`,
      `Vrai. Les cellules NK appartiennent à l'immunité innée.`,
      `Vrai. La mémoire immunologique est une propriété importante des lymphocytes adaptatifs.`,
      `Faux. Les valeurs normales de lymphocytes varient notamment avec l'âge.`
    ]
  ),

  Q(12,
    `Quelles cellules sont nucléées ?`,
    [
      `le métamyélocyte`,
      `l’érythroblaste acidophile`,
      `le mégacaryocyte`,
      `le réticulocyte`,
      `le myéloblaste`
    ],
    'ABCE',
    [
      `Vrai. Le métamyélocyte possède un noyau incurvé.`,
      `Vrai. L'érythroblaste acidophile conserve un noyau condensé avant l'énucléation.`,
      `Vrai. Le mégacaryocyte possède un noyau polyploïde.`,
      `Faux. Le réticulocyte a déjà expulsé son noyau.`,
      `Vrai. Le myéloblaste est un précurseur granulocytaire nucléé.`
    ]
  ),

  Q(13,
    `Les éosinophiles :`,
    [
      `sont impliqués dans la défense anti-parasitaire`,
      `possèdent des granulations orangées`,
      `sont absents du sang en conditions normales`,
      `participent aux réactions allergiques`,
      `ont un noyau souvent constitué d’un seul lobe`
    ],
    'ABD',
    [
      `Vrai. Les éosinophiles participent notamment à la défense contre certains parasites.`,
      `Vrai. Leurs granulations spécifiques prennent une coloration orangée au MGG.`,
      `Faux. Les éosinophiles sont physiologiquement présents dans le sang.`,
      `Vrai. Ils interviennent dans les réactions allergiques et certaines inflammations de type 2.`,
      `Faux. Leur noyau est généralement bilobé.`
    ]
  ),

  Q(14,
    `Une hémolyse pathologique est suspectée devant l'existence :`,
    [
      `d'une anémie régénérative`,
      `d'une diminution des LDH`,
      `d'une diminution de l'haptoglobine`,
      `d’une augmentation de la bilirubine libre`,
      `d'un ictère`
    ],
    'ACDE',
    [
      `Vrai. Une hémolyse entraîne habituellement une stimulation médullaire avec réticulocytose.`,
      `Faux. Les LDH sont généralement augmentées lors d'une hémolyse.`,
      `Vrai. L'haptoglobine peut diminuer, surtout en cas d'hémolyse intravasculaire.`,
      `Vrai. La destruction de l'hème augmente la production de bilirubine non conjuguée.`,
      `Vrai. L'augmentation de bilirubine peut entraîner un ictère.`
    ]
  ),

  Q(15,
    `Le compartiment marginal des polynucléaires neutrophiles sanguins :`,
    [
      `correspond aux PNN adhérents aux cellules endothéliales`,
      `représente 15% des PNN présents dans les vaisseaux sanguins`,
      `peut être mobilisé dans la circulation en cas de stress`,
      `peut être mobilisé dans la circulation en cas d'effort physique`,
      `est plus important dans certaines populations`
    ],
    'ACDE',
    [
      `Vrai. Le compartiment marginal regroupe des neutrophiles temporairement associés aux parois vasculaires.`,
      `Faux. Le compartiment marginal représente une fraction bien plus importante que 15 % des neutrophiles intravasculaires.`,
      `Vrai. Le stress peut provoquer une démargination des neutrophiles.`,
      `Vrai. L'effort physique peut mobiliser des neutrophiles marginés vers le sang circulant.`,
      `Vrai. La répartition entre compartiments circulant et marginal peut varier selon les individus et populations.`
    ]
  ),

  Q(16,
    `Concernant le vaisseau sanguin, quelles sont les propositions exactes ?`,
    [
      `l’endothélium régule négativement la coagulation`,
      `le sous-endothélium est thrombogène`,
      `l’endothélium exprime physiologiquement du facteur tissulaire`,
      `l’endothélium synthétise le facteur Willebrand`,
      `l’endothélium synthétise des protéines du système fibrinolytique`
    ],
    'ABDE',
    [
      `Vrai. L'endothélium intact possède des propriétés antithrombotiques.`,
      `Vrai. Le sous-endothélium exposé après une lésion vasculaire favorise l'hémostase.`,
      `Faux. Les cellules endothéliales saines n'expriment pas physiologiquement de facteur tissulaire significatif à leur surface.`,
      `Vrai. L'endothélium synthétise et stocke du facteur Willebrand.`,
      `Vrai. L'endothélium produit notamment le t-PA, impliqué dans la fibrinolyse.`
    ]
  ),

  Q(17,
    `Concernant le fibrinogène, quelles sont les propositions exactes ?`,
    [
      `il possède deux domaines D et un domaine E`,
      `il est synthétisé par le foie`,
      `il se fixe à la GPIb-IX-V plaquettaire`,
      `il est présent dans les granules alpha plaquettaires`,
      `sa concentration plasmatique physiologique est comprise entre 1 et 2 g/L`
    ],
    'ABD',
    [
      `Vrai. Le fibrinogène possède un domaine E central et deux domaines D périphériques.`,
      `Vrai. Le fibrinogène est principalement synthétisé par les hépatocytes.`,
      `Faux. Son interaction plaquettaire principale se fait avec l'intégrine GPIIbIIIa.`,
      `Vrai. Le fibrinogène est notamment contenu dans les granules alpha des plaquettes.`,
      `Faux. La concentration plasmatique usuelle est généralement de l'ordre de 2 à 4 g/L.`
    ]
  ),

  Q(18,
    `L’activation des plaquettes induit :`,
    [
      `une activation de la GPIb-IX-V`,
      `une internalisation des phospholipides membranaires anioniques`,
      `une émission de pseudopodes membranaires`,
      `une synthèse de thromboxane A2`,
      `une élévation du calcium intracytoplasmique`
    ],
    'CDE',
    [
      `Faux selon la grille. Le changement conformationnel classiquement lié à l'activation concerne surtout GPIIbIIIa.`,
      `Faux. L'activation entraîne une externalisation des phospholipides anioniques, notamment la phosphatidylsérine.`,
      `Vrai. L'activation provoque un changement de forme avec émission de pseudopodes.`,
      `Vrai. La voie de l'acide arachidonique entraîne la synthèse de thromboxane A2.`,
      `Vrai. L'élévation du calcium cytoplasmique est un signal central de l'activation plaquettaire.`
    ]
  ),

  Q(19,
    `Parmi les molécules suivantes, lesquelles inhibent l’activation plaquettaire en inhibant la voie de l’ADP ?`,
    [
      `prasugrel`,
      `aspirine`,
      `clopidogrel`,
      `cangrelor`,
      `tirofiban`
    ],
    'ACD',
    [
      `Vrai. Le prasugrel inhibe irréversiblement le récepteur P2Y12.`,
      `Faux. L'aspirine agit sur la COX-1 et la voie du thromboxane A2.`,
      `Vrai. Le clopidogrel est un inhibiteur irréversible du récepteur P2Y12.`,
      `Vrai. Le cangrelor est un inhibiteur réversible du récepteur P2Y12.`,
      `Faux. Le tirofiban inhibe GPIIbIIIa, le récepteur final de l'agrégation plaquettaire.`
    ]
  ),

  Q(20,
    `Concernant le TCA, quelles sont les propositions exactes ?`,
    [
      `il correspond au temps de coagulation d’un plasma citraté recalcifié en présence de céphaline et d’un activateur de la phase contact`,
      `ses résultats sont exprimés en pourcentage`,
      `il peut être utile au suivi biologique des patients traités par l’héparine non fractionnée`,
      `il est allongé en cas de déficit en FIX`,
      `il est allongé en cas de déficit en FVII`
    ],
    'ACD',
    [
      `Vrai. Le TCA explore la coagulation plasmatique après ajout de phospholipides, de calcium et d'un activateur de contact.`,
      `Faux. Le TCA est exprimé en secondes ou sous forme d'un ratio malade/témoin.`,
      `Vrai. Il peut permettre la surveillance biologique d'un traitement par HNF.`,
      `Vrai. Le facteur IX appartient à la voie intrinsèque explorée par le TCA.`,
      `Faux. Le facteur VII est principalement exploré par le temps de Quick.`
    ]
  ),

  Q(21,
    `La vitamine K est nécessaire à la synthèse :`,
    [
      `du FII`,
      `du FVII`,
      `du FIX`,
      `du FX`,
      `de la protéine C`
    ],
    'ABCDE',
    [
      `Vrai. Le facteur II est vitamine K-dépendant.`,
      `Vrai. Le facteur VII est vitamine K-dépendant.`,
      `Vrai. Le facteur IX est vitamine K-dépendant.`,
      `Vrai. Le facteur X est vitamine K-dépendant.`,
      `Vrai. La protéine C est également une protéine vitamine K-dépendante.`
    ]
  ),

  Q(22,
    `Concernant la coagulation intravasculaire disséminée (CIVD), quelles sont les propositions exactes ?`,
    [
      `elle entraîne une augmentation du fibrinogène circulant`,
      `elle induit une augmentation des D-dimères circulants`,
      `elle est souvent associée à une hyperfibrinolyse`,
      `le TCA est normal voire raccourci`,
      `une thrombopénie est fréquente`
    ],
    'BCE',
    [
      `Faux. Le fibrinogène peut diminuer du fait de sa consommation.`,
      `Vrai. L'activation de la coagulation et la dégradation de la fibrine augmentent les D-dimères.`,
      `Vrai selon la grille. Une activation secondaire de la fibrinolyse peut accompagner une CIVD, avec une intensité variable selon son étiologie.`,
      `Faux. Le TCA peut être allongé par la consommation des facteurs de coagulation.`,
      `Vrai. La consommation des plaquettes entraîne fréquemment une thrombopénie.`
    ]
  ),

  Q(23,
    `Concernant les inhibiteurs physiologiques de la coagulation, quelles sont les propositions exactes ?`,
    [
      `l’antithrombine et le système PC/PS sont les seuls inhibiteurs physiologiques de la coagulation`,
      `l’antithrombine et le système PC/PS sont synthétisés par le foie`,
      `l’antithrombine inhibe la plasmine`,
      `l’antithrombine inhibe uniquement la thrombine`,
      `la protéine S est le cofacteur de la protéine C`
    ],
    'BE',
    [
      `Faux. Il existe d'autres inhibiteurs physiologiques, notamment le TFPI.`,
      `Vrai. L'antithrombine, la protéine C et la protéine S sont principalement synthétisées par le foie.`,
      `Faux selon la grille. La plasmine est principalement neutralisée par l'alpha-2-antiplasmine.`,
      `Faux. L'antithrombine inhibe notamment les facteurs IIa et Xa.`,
      `Vrai. La protéine S est le cofacteur anticoagulant de la protéine C activée.`
    ]
  ),

  Q(24,
    `Concernant les anticoagulants oraux directs (AOD), quelles sont les propositions exactes ?`,
    [
      `le dabigatran a une biodisponibilité de 90%`,
      `le dabigatran inhibe spécifiquement la thrombine`,
      `le dabigatran allonge le TCA plus que le temps de Quick`,
      `le métabolisme de l’apixaban implique les enzymes du cytochrome CYP3A4`,
      `l’introduction d’un nouveau traitement chez un patient traité par apixaban au long cours nécessite un contrôle du TP et TCA`
    ],
    'BCD',
    [
      `Faux. La biodisponibilité orale du dabigatran est faible, de l'ordre de quelques pourcents.`,
      `Vrai. Le dabigatran est un inhibiteur direct de la thrombine, ou facteur IIa.`,
      `Vrai. Le dabigatran affecte notamment le TCA, de manière plus sensible que le TQ.`,
      `Vrai. Le métabolisme de l'apixaban implique notamment CYP3A4/5.`,
      `Faux. Le TP et le TCA ne permettent pas une surveillance fiable et systématique de l'activité de l'apixaban.`
    ]
  ),

  Q(25,
    `Un bilan d’hémostase est prescrit au déchocage des urgences pour un patient de 53 ans, inconscient, en vue d’une prise en charge au bloc opératoire. Vous n’avez pas d’informations sur les antécédents du patients ou ses éventuels traitements au long cours. Les résultats sont les suivants : temps de Quick (= taux de prothrombine, TP) = 50%, TCA (ratio) = 1,19, fibrinogène = 3 g/L, produits de dégradation du fibrinogène et de la fibrine (PDF) < 5 mg/mL. Quelles hypothèses proposez-vous pour expliquer ce bilan ?`,
    [
      `traitement par warfarine`,
      `traitement par rivaroxaban`,
      `hémophilie A acquise`,
      `insuffisance hépatique modérée`,
      `CIVD`
    ],
    'ABD',
    [
      `Vrai. La warfarine diminue les facteurs vitamine K-dépendants et peut entraîner une baisse du TQ.`,
      `Vrai. Le rivaroxaban peut prolonger le temps de prothrombine selon le réactif.`,
      `Faux. Une hémophilie A acquise entraîne principalement un allongement du TCA.`,
      `Vrai. Une insuffisance hépatocellulaire peut diminuer la synthèse de facteurs de coagulation et abaisser le TP.`,
      `Faux. Le fibrinogène normal et l'absence d'élévation des PDF ne sont pas caractéristiques d'une CIVD.`
    ]
  ),

  Q(26,
    `Une jeune femme de 27 ans, de groupe A RH:1,2,-3,4,5 KEL:-1 (A+ C+E-C+E+K-) doit recevoir un culot de globules rouges. Lesquels pouvez-vous accepter ?`,
    [
      `un CGR O RH:1,2,-3,4,5 KEL:-1 (O+ C+E-c+e+K-)`,
      `un CGR A RH:1,2,-3,-4,5 KEL:-1 (A+ C+E-c-e+K-)`,
      `un CGR AB RH:1,2,-3,4,5 KEL:-1 (AB+ C+E-c+e+K-)`,
      `un CGR O RH:1,2,-3,4,5 KEL:1 (O+ C+E-c+e+K+)`,
      `un CGR A RH:-1,-2,-3,4,5 KEL:-1 (A- C-E-c+e+K-)`
    ],
    'ABE',
    [
      `Vrai. Un CGR O compatible, sans antigène K, peut être transfusé à une receveuse A dans les conditions de compatibilité indiquées.`,
      `Vrai selon la grille. Ce CGR A et K négatif est retenu comme compatible avec la patiente.`,
      `Faux. Un CGR AB porte l'antigène B, incompatible avec une receveuse de groupe A.`,
      `Faux. Le CGR est K positif alors que la patiente est K négative, situation à éviter notamment chez une femme ayant un avenir obstétrical.`,
      `Vrai. Un CGR A RhD négatif et K négatif peut être transfusé à une receveuse A RhD positive dans ce cadre.`
    ]
  ),

  Q(27,
    `Parmi les caractéristiques suivantes, lesquelles sont vraies concernant les culots de globules rouges (CGR) ?`,
    [
      `un CGR doit contenir au moins 50 grammes d’hémoglobine`,
      `le phénotype RH-KEL est toujours présent sur l’étiquette d’un CGR`,
      `un CGR est toujours déleucocyté`,
      `un CGR est toujours compatibilisé`,
      `un CGR ne doit pas être transfusé en plus de trois heures`
    ],
    'BC',
    [
      `Faux selon la grille. Le contenu minimal en hémoglobine retenu dans ce référentiel est inférieur à 50 g.`,
      `Vrai selon la grille officielle. Le phénotype RH-KEL est indiqué sur l'étiquetage des CGR dans le cadre enseigné.`,
      `Vrai. Les CGR distribués en France sont systématiquement déleucocytés.`,
      `Faux. La qualification compatibilisé n'est pas systématiquement requise pour chaque CGR.`,
      `Faux selon la grille. La durée de transfusion peut être adaptée dans les limites réglementaires et selon le contexte clinique.`
    ]
  ),

  Q(28,
    `Concernant la surveillance de la transfusion :`,
    [
      `elle doit être continue pendant les 15 premières minutes`,
      `comprend un monitoring de certaines constantes (pouls, TA, température)`,
      `comprend une recherche d’anticorps irréguliers à distance`,
      `comprend le contrôle de la correction des paramètres hématologiques`,
      `l'apparition d'une fièvre peut nécessité l'arrêt de la transfusion`
    ],
    'ABCDE',
    [
      `Vrai. Les 15 premières minutes nécessitent une surveillance rapprochée du receveur.`,
      `Vrai. La surveillance comprend notamment la température, le pouls et la pression artérielle.`,
      `Vrai. Une recherche d'anticorps irréguliers peut faire partie de la surveillance immunohématologique post-transfusionnelle.`,
      `Vrai. L'efficacité de la transfusion doit être contrôlée sur les paramètres cliniques ou biologiques appropriés.`,
      `Vrai. Une fièvre apparaissant pendant la transfusion fait suspecter un effet indésirable et impose notamment son arrêt immédiat dans l'attente de l'évaluation.`
    ]
  ),

  Q(29,
    `Devant l'apparition d'une hyperthermie au cours d'une transfusion, que devez-vous suspecter ?`,
    [
      `une infection bactérienne`,
      `une surcharge volémique`,
      `une incompatibilité immunologique`,
      `une réaction allergique`,
      `une réaction fébrile non hémolytique`
    ],
    'ACE',
    [
      `Vrai. Une contamination bactérienne du produit transfusé peut provoquer une réaction fébrile aiguë.`,
      `Faux selon la grille. La surcharge volémique se manifeste principalement par des signes respiratoires et circulatoires.`,
      `Vrai. Une incompatibilité immunologique peut entraîner une hémolyse aiguë accompagnée de fièvre.`,
      `Faux selon la grille. Les réactions allergiques se manifestent notamment par des signes cutanés, respiratoires ou circulatoires.`,
      `Vrai. La réaction fébrile non hémolytique est une cause classique d'hyperthermie transfusionnelle.`
    ]
  ),

  Q(30,
    `Quels sont les renseignements obligatoires à indiquer sur une prescription de produit sanguin labile ?`,
    [
      `numération plaquettaire pour une transfusion de plaquettes`,
      `poids pour les concentrés de globules rouges adultes`,
      `date et heure de la prescription`,
      `date et heure souhaitées pour la transfusion`,
      `degré d'urgence`
    ],
    'ACDE',
    [
      `Vrai. La numération plaquettaire est une information utile et requise dans le cadre de la prescription de plaquettes.`,
      `Faux selon la grille. Le poids n'est pas systématiquement requis pour la prescription de CGR chez l'adulte.`,
      `Vrai. La date et l'heure de prescription font partie de la traçabilité.`,
      `Vrai. La date et l'heure souhaitées permettent d'organiser la délivrance et l'administration.`,
      `Vrai. Le degré d'urgence conditionne les délais et modalités de délivrance des PSL.`
    ]
  ),

  Q(31,
    `La durée de vie moyenne d’un globule rouge est de :`,
    [
      `10 jours`,
      `20 jours`,
      `60 jours`,
      `120 jours`,
      `180 jours`
    ],
    'D',
    [
      `Faux. Dix jours est beaucoup plus court que la durée de vie normale d'une hématie.`,
      `Faux. Vingt jours est une durée trop courte.`,
      `Faux. Soixante jours correspond à environ la moitié de la durée normale.`,
      `Vrai. La durée de vie moyenne des hématies est d'environ 120 jours.`,
      `Faux. Cent quatre-vingts jours est supérieur à la durée physiologique habituelle.`
    ]
  ),

  Q(32,
    `L’organe principal de production de l’érythropoïétine est :`,
    [
      `la moelle osseuse`,
      `le foie`,
      `les reins`,
      `la rate`,
      `le pancréas`
    ],
    'C',
    [
      `Faux. La moelle osseuse constitue principalement le site de réponse à l'EPO.`,
      `Faux. Le foie contribue à la production d'EPO, surtout pendant la vie fœtale.`,
      `Vrai. Chez l'adulte, le rein est le principal organe producteur d'érythropoïétine.`,
      `Faux. La rate n'est pas le principal organe producteur d'EPO.`,
      `Faux. Le pancréas n'assure pas la régulation principale de l'érythropoïèse.`
    ]
  ),

  Q(33,
    `Le principal facteur stimulant la mégacaryopoïèse est :`,
    [
      `le G-CSF`,
      `la thrombopoïétine (TPO)`,
      `l’érythropoïétine (EPO)`,
      `l’IL-3`,
      `l’IL-6`
    ],
    'B',
    [
      `Faux. Le G-CSF stimule principalement la granulopoïèse neutrophile.`,
      `Vrai. La TPO est le principal facteur de croissance de la lignée mégacaryocytaire.`,
      `Faux. L'EPO agit principalement sur la lignée érythroïde.`,
      `Faux. L'IL-3 possède des effets sur plusieurs progéniteurs mais n'est pas le principal facteur mégacaryocytaire.`,
      `Faux. L'IL-6 n'est pas le régulateur principal de la mégacaryopoïèse.`
    ]
  ),

  Q(34,
    `Quelle cellule est la plus immature dans la lignée érythroïde ?`,
    [
      `érythroblaste acidophile`,
      `réticulocyte`,
      `proérythroblaste`,
      `érythrocyte`,
      `érythroblaste basophile`
    ],
    'C',
    [
      `Faux. L'érythroblaste acidophile est un stade tardif de maturation.`,
      `Faux. Le réticulocyte est une cellule anucléée proche de l'hématie mature.`,
      `Vrai. Le proérythroblaste est le premier précurseur érythroïde morphologiquement identifiable parmi les choix.`,
      `Faux. L'érythrocyte est la cellule mature.`,
      `Faux. L'érythroblaste basophile apparaît après le proérythroblaste.`
    ]
  ),

  Q(35,
    `Quelle est la fonction principale des neutrophiles ?`,
    [
      `la production d’anticorps`,
      `la présentation d’antigène`,
      `la synthèse d’hémoglobine`,
      `la coagulation`,
      `la phagocytose`
    ],
    'E',
    [
      `Faux. Les immunoglobulines sont principalement produites par les plasmocytes.`,
      `Faux selon la grille. La présentation antigénique spécialisée est surtout assurée par les cellules dendritiques et d'autres cellules présentatrices.`,
      `Faux. L'hémoglobine est produite par la lignée érythroïde.`,
      `Faux. La coagulation dépend notamment des facteurs plasmatiques et des plaquettes.`,
      `Vrai. Les neutrophiles phagocytent et détruisent notamment des agents infectieux bactériens.`
    ]
  ),

  Q(36,
    `Quelle cellule produit les immunoglobulines ?`,
    [
      `le plasmocyte`,
      `le lymphocyte T`,
      `le monocyte`,
      `la cellule dendritique`,
      `le mégacaryocyte`
    ],
    'A',
    [
      `Vrai. Les plasmocytes sont des cellules B différenciées spécialisées dans la sécrétion d'immunoglobulines.`,
      `Faux. Les lymphocytes T assurent principalement des fonctions immunitaires cellulaires.`,
      `Faux. Les monocytes sont notamment des cellules phagocytaires.`,
      `Faux. Les cellules dendritiques sont principalement spécialisées dans la présentation d'antigènes.`,
      `Faux. Les mégacaryocytes produisent les plaquettes.`
    ]
  ),

  Q(37,
    `Le cytosquelette des hématies est composé de :`,
    [
      `myéline`,
      `haptoglobine`,
      `protéine 5`,
      `kératine`,
      `spectrine`
    ],
    'E',
    [
      `Faux. La myéline est associée aux fibres nerveuses.`,
      `Faux. L'haptoglobine est une protéine plasmatique liant l'hémoglobine libre.`,
      `Faux. La proposition ne correspond pas à la principale protéine du cytosquelette érythrocytaire.`,
      `Faux. La kératine n'est pas la protéine structurale majeure du cytosquelette des hématies.`,
      `Vrai. La spectrine est une protéine fondamentale du squelette membranaire érythrocytaire.`
    ]
  ),

  Q(38,
    `Une patiente de 53 ans présente une anémie régénérative. Devant ce résultat, vous demandez en première intention le dosage de :`,
    [
      `l’haptoglobine`,
      `la créatinine`,
      `l’albumine`,
      `la transferrine`,
      `la myoglobine`
    ],
    'A',
    [
      `Vrai. Le dosage de l'haptoglobine permet de rechercher une hémolyse devant une anémie régénérative.`,
      `Faux. La créatinine explore la fonction rénale, notamment dans le bilan d'anémies arégénératives.`,
      `Faux. L'albumine n'est pas le marqueur initial d'hémolyse.`,
      `Faux. La transferrine appartient au bilan du métabolisme du fer.`,
      `Faux. La myoglobine est notamment un marqueur de lésion musculaire.`
    ]
  ),

  Q(39,
    `Une jeune femme de 17 ans présente une anémie microcytaire hypochrome. Devant ce résultat, vous demandez en première intention le dosage :`,
    [
      `de l’haptoglobine`,
      `de la ferritine`,
      `du fer sérique`,
      `de la transferrine`,
      `de la bilirubine libre`
    ],
    'B',
    [
      `Faux. L'haptoglobine est principalement utilisée dans le bilan d'hémolyse.`,
      `Vrai. La ferritine est l'examen biologique de première intention pour rechercher une carence martiale.`,
      `Faux. Le fer sérique varie selon plusieurs facteurs et ne suffit pas à établir le diagnostic.`,
      `Faux selon la grille. La transferrine peut compléter le bilan martial mais n'est pas l'examen initial privilégié ici.`,
      `Faux. La bilirubine libre est notamment utile dans l'exploration d'une hémolyse.`
    ]
  ),

  Q(40,
    `Vous suspectez une leucémie myéloïde chronique chez un homme de 68 ans. Que prescrivez-vous pour confirmer votre hypothèse diagnostique ?`,
    [
      `une électrophorèse des protéines sériques`,
      `une électrophorèse de l’hémoglobine`,
      `un immunophénotypage sanguin`,
      `une recherche du transcrit BCR::ABL`,
      `une recherche de mutation de JAK2`
    ],
    'D',
    [
      `Faux. L'électrophorèse des protéines sériques explore notamment les dysglobulinémies.`,
      `Faux. L'électrophorèse de l'hémoglobine explore les hémoglobinopathies.`,
      `Faux. L'immunophénotypage sanguin n'est pas l'examen de confirmation spécifique de la LMC.`,
      `Vrai. La recherche de BCR::ABL1 permet de confirmer le diagnostic de leucémie myéloïde chronique.`,
      `Faux. JAK2 V617F est principalement recherché dans certains syndromes myéloprolifératifs BCR::ABL1 négatifs.`
    ]
  ),

  Q(41,
    `Un patient de 19 ans arrive aux urgences avec un hémogramme réalisé en ville. La formule leucocytaire vous indique 35% de blastes. Quel examen réalisez-vous en première intention ?`,
    [
      `un myélogramme`,
      `un TEP-scanner`,
      `une ponction lombaire`,
      `une échographie cardiaque`,
      `une biopsie ostéo-médullaire`
    ],
    'A',
    [
      `Vrai. Une blastose sanguine à 35 % évoque fortement une leucémie aiguë et impose une exploration médullaire rapide.`,
      `Faux. Le TEP-scanner n'est pas l'examen de première intention devant une blastose.`,
      `Faux. La ponction lombaire n'est pas l'examen diagnostique initial systématique.`,
      `Faux. L'échocardiographie peut être utile dans le bilan thérapeutique, mais n'établit pas le diagnostic.`,
      `Faux selon la grille. Le myélogramme est privilégié en première intention pour l'analyse cytologique.`
    ]
  ),

  Q(42,
    `Concernant le myélogramme :`,
    [
      `c’est le seul examen qui permet l’exploration du compartiment central`,
      `les sites de prélèvement comprennent le sternum et les épines iliaques antérieures et postérieures`,
      `il permet de rechercher une fibrose du tissu de soutien`,
      `il permet l’observation des progéniteurs`,
      `le prélèvement consiste en une carotte osseuse`
    ],
    'B',
    [
      `Faux. La biopsie ostéomédullaire permet également d'explorer le compartiment médullaire.`,
      `Vrai. Les prélèvements de moelle peuvent notamment être réalisés au sternum ou au niveau iliaque selon les indications.`,
      `Faux. La fibrose médullaire nécessite principalement une étude histologique.`,
      `Faux. Les progéniteurs ne sont pas identifiables par la seule morphologie cytologique.`,
      `Faux. Le myélogramme consiste en une aspiration médullaire et non en une carotte osseuse.`
    ]
  ),

  Q(43,
    `Concernant les besoins de l’hématopoïèse :`,
    [
      `le fer est indispensable à la synthèse d’ADN`,
      `la vitamine B9 est indispensable à la synthèse d’hémoglobine`,
      `le fer est indispensable à la mégacaryocytopoïèse`,
      `la vitamine B12 est indispensable à la synthèse d’ARN`,
      `le fer est indispensable à la synthèse d’hémoglobine`
    ],
    'E',
    [
      `Faux selon la grille. Le rôle principal du fer dans l'érythropoïèse est la synthèse de l'hème.`,
      `Faux. La vitamine B9 intervient surtout dans la synthèse des nucléotides et de l'ADN.`,
      `Faux selon la grille. Le fer n'est pas le facteur spécifiquement requis pour la mégacaryocytopoïèse dans ce cours.`,
      `Faux selon la grille. La vitamine B12 intervient notamment indirectement dans la synthèse de l'ADN.`,
      `Vrai. Le fer constitue l'atome central des groupements hème de l'hémoglobine.`
    ]
  ),

  Q(44,
    `Concernant l’hémogramme :`,
    [
      `l’hémogramme est prélevé sur tube citraté`,
      `une agrégation plaquettaire sur EDTA est à fort risque de thrombose pour le patient`,
      `les valeurs usuelles de l’hémoglobine sont les mêmes pour les hommes et les femmes`,
      `l’hémogramme permet une analyse des éléments figurés du sang, avec une approche qualitative et quantitative`,
      `des plaquettes supérieures à 700 G/L signent la présence d’une thrombopénie`
    ],
    'D',
    [
      `Faux. L'hémogramme est habituellement prélevé sur un tube EDTA.`,
      `Faux. Les agrégats plaquettaires sur EDTA peuvent provoquer une pseudothrombopénie in vitro, sans thrombose.`,
      `Faux. Les valeurs de référence de l'hémoglobine diffèrent notamment selon le sexe et l'âge.`,
      `Vrai. L'hémogramme permet d'évaluer quantitativement les cellules sanguines et certaines de leurs caractéristiques.`,
      `Faux. Une augmentation des plaquettes correspond à une thrombocytose, pas à une thrombopénie.`
    ]
  ),

  Q(45,
    `Concernant l’hémoglobine :`,
    [
      `l’hémoglobine A est constitué de deux chaînes de globine alpha et de deux chaînes de globine delta`,
      `l’hémoglobine fœtale représente >10% de l’hémoglobine totale d’un adulte sain`,
      `les thalassémies sont dues à un déficit de synthèse des chaînes de globine`,
      `la drépanocytose est due à une anomalie de l’hème`,
      `l’électrophorèse de l’hémoglobine est non recommandée car peu informative`
    ],
    'C',
    [
      `Faux. L'HbA est constituée de deux chaînes alpha et deux chaînes bêta. L'HbA2 comporte deux chaînes delta.`,
      `Faux. L'HbF représente normalement une faible proportion de l'hémoglobine adulte.`,
      `Vrai. Les thalassémies sont des anomalies quantitatives de production des chaînes de globine.`,
      `Faux. La drépanocytose est liée à une mutation de la chaîne bêta de globine.`,
      `Faux. L'étude de l'hémoglobine est fondamentale pour le diagnostic de nombreuses hémoglobinopathies.`
    ]
  ),

  Q(46,
    `Le temps d’occlusion in vitro (platelet function analyzer, PFA) a une bonne sensibilité pour exclure :`,
    [
      `un déficit en FXI`,
      `un déficit en FII`,
      `une thrombopathie mineure`,
      `un déficit en antithrombine`,
      `une maladie de Willebrand`
    ],
    'E',
    [
      `Faux. Le déficit en facteur XI appartient aux anomalies de coagulation plasmatique.`,
      `Faux. Le PFA ne constitue pas un test d'exploration du facteur II.`,
      `Faux. Un PFA normal ne permet pas d'exclure de manière fiable toutes les thrombopathies mineures.`,
      `Faux. L'antithrombine appartient aux inhibiteurs physiologiques de la coagulation.`,
      `Vrai selon la grille. Le PFA est sensible à de nombreuses anomalies du facteur Willebrand, même si un résultat normal n'exclut pas toutes les formes légères.`
    ]
  ),

  Q(47,
    `Les granules denses des plaquettes contiennent ?`,
    [
      `du facteur 4 plaquettaire`,
      `du facteur Willebrand`,
      `du calcium`,
      `du facteur V`,
      `de la protéine S`
    ],
    'C',
    [
      `Faux. Le facteur 4 plaquettaire est principalement contenu dans les granules alpha.`,
      `Faux. Le facteur Willebrand est principalement contenu dans les granules alpha.`,
      `Vrai. Les granules denses contiennent notamment du calcium, de l'ADP, de l'ATP et de la sérotonine.`,
      `Faux. Le facteur V est associé aux granules alpha.`,
      `Faux selon la grille. La protéine S n'est pas un constituant caractéristique des granules denses.`
    ]
  ),

  Q(48,
    `Concernant le facteur tissulaire, quelle est la proposition exacte ?`,
    [
      `il est présent physiologiquement à la surface des cellules du sang`,
      `il est le facteur déclenchant de la cascade de la coagulation physiologiquement`,
      `il se lie au facteur VIII`,
      `il se lie au facteur IX`,
      `il se lie au facteur XI`
    ],
    'B',
    [
      `Faux. Le facteur tissulaire est principalement exprimé par des cellules extravasculaires et exposé lors d'une lésion.`,
      `Vrai. L'exposition du facteur tissulaire permet l'initiation de la coagulation via son complexe avec le facteur VIIa.`,
      `Faux. Le facteur tissulaire se lie principalement au facteur VII/VIIa.`,
      `Faux. Le complexe facteur tissulaire-VIIa peut activer le facteur IX, mais le facteur tissulaire ne s'y lie pas comme partenaire principal.`,
      `Faux. Le facteur XI n'est pas le partenaire de liaison initial du facteur tissulaire.`
    ]
  ),

  Q(49,
    `Concernant le facteur V, quelle est la proposition juste ?`,
    [
      `sa synthèse est vitamine-K dépendante`,
      `il est synthétisé par le système réticulo-endothélial`,
      `il participe à l’action du FXa en tant que co-enzyme`,
      `il est insensible à l’action de la plasmine`,
      `son déficit peut entraîner un allongement isolé du temps de céphaline avec activateur (TCA)`
    ],
    'C',
    [
      `Faux. Le facteur V n'est pas vitamine K-dépendant.`,
      `Faux. Le facteur V est principalement synthétisé par le foie.`,
      `Vrai selon la grille. Le facteur Va est le cofacteur du facteur Xa dans le complexe prothrombinase ; le terme précis est cofacteur plutôt que co-enzyme.`,
      `Faux. Le facteur V peut être dégradé par des protéases, notamment au cours de la fibrinolyse.`,
      `Faux. Un déficit en facteur V affecte généralement le TQ et le TCA, car il participe à la voie commune.`
    ]
  ),

  Q(50,
    `Vous voyez en consultation d’hémostase un homme de 55 ans car son bilan d’hémostase pré-opératoire est perturbé. Il n’y a pas de perturbation de l’hémogramme et les résultats des examens d’hémostase sont les suivants : temps de Quick (= taux de prothrombine, TP) = 42 %, TCA (ratio) = 1,03 et fibrinogène = 3,55 g/L. Quelle est votre hypothèse diagnostique ?`,
    [
      `déficit en facteur VII`,
      `déficit en facteur VIII`,
      `déficit en facteur IX`,
      `déficit en facteur XII`,
      `déficit en facteur XIII`
    ],
    'A',
    [
      `Vrai. Le facteur VII appartient à la voie extrinsèque, explorée par le temps de Quick, et peut entraîner un TP bas isolé.`,
      `Faux. Un déficit en facteur VIII entraîne principalement un allongement du TCA.`,
      `Faux. Un déficit en facteur IX entraîne principalement un allongement du TCA.`,
      `Faux. Un déficit en facteur XII entraîne un allongement du TCA sans risque hémorragique habituel.`,
      `Faux. Un déficit en facteur XIII ne modifie généralement pas le TQ ni le TCA.`
    ]
  ),

  Q(51,
    `Parmi les manifestations hémorragiques suivantes, laquelle est très caractéristique d’une thrombopénie sévère ?`,
    [
      `épistaxis`,
      `purpura pétéchial et ecchymotique`,
      `ménorragies`,
      `bulles hémorragiques intrabuccales`,
      `hémarthrose`
    ],
    'D',
    [
      `Faux selon la grille. Les épistaxis peuvent survenir lors d'une thrombopénie, mais ne sont pas les plus spécifiques d'une forme sévère.`,
      `Faux selon la grille. Le purpura est typique des troubles plaquettaires, mais la question cible un signe de sévérité.`,
      `Faux. Les ménorragies peuvent également être liées à divers troubles de l'hémostase primaire.`,
      `Vrai. Les bulles hémorragiques intrabuccales sont un signe d'alerte de thrombopénie sévère avec risque hémorragique.`,
      `Faux. Les hémarthroses orientent davantage vers un déficit de la coagulation, notamment une hémophilie.`
    ]
  ),

  Q(52,
    `Parmi les manifestations cliniques suivantes, quelle est celle que l’on retrouve le plus souvent chez les patients atteints d’hémophilie ?`,
    [
      `épistaxis`,
      `purpura pétéchial et ecchymotique`,
      `ménorragies`,
      `hématome`,
      `hémarthrose`
    ],
    'E',
    [
      `Faux. Les épistaxis sont davantage associées aux troubles de l'hémostase primaire.`,
      `Faux. Le purpura pétéchial est principalement évocateur d'une anomalie plaquettaire.`,
      `Faux. Les ménorragies ne constituent pas le signe typique des hémophilies masculines classiques.`,
      `Faux selon la grille. Les hématomes sont fréquents dans l'hémophilie, mais les hémarthroses sont particulièrement caractéristiques.`,
      `Vrai. Les hémarthroses répétées constituent une manifestation majeure des hémophilies sévères.`
    ]
  ),

  Q(53,
    `Concernant les antagonistes de la vitamine K (AVK), quelle est la proposition exacte ?`,
    [
      `la fluindione a une demi-vie de 4h`,
      `l’acénocoumarol a une demi-vie de 8-9h`,
      `ils favorisent la gammacarboxylation de certains facteurs de la coagulation`,
      `l’alcool inhibe l’action des AVK`,
      `un contrôle de l’INR au plus tôt 1 mois après l’introduction d’un nouveau traitement chez un patient traité par warfarine au long cours est recommandé`
    ],
    'B',
    [
      `Faux. La fluindione possède une demi-vie nettement supérieure à quatre heures.`,
      `Vrai. L'acénocoumarol possède une demi-vie relativement courte, de l'ordre de huit à onze heures.`,
      `Faux. Les AVK inhibent le recyclage de la vitamine K et diminuent la gamma-carboxylation des facteurs concernés.`,
      `Faux. L'interaction avec l'alcool dépend notamment des modalités de consommation et peut majorer l'effet anticoagulant.`,
      `Faux. Un traitement intercurrent pouvant interagir avec les AVK impose une réévaluation de l'INR bien avant un mois.`
    ]
  ),

  Q(54,
    `Concernant les héparines, quelle est la proposition exacte ?`,
    [
      `ces sont des chaînes polysaccharidiques chargées positivement`,
      `elles inhibent directement les facteurs Xa et IIa`,
      `elles sont uniquement actives par voie sous-cutanée`,
      `elles accélèrent l’activité inhibitrice de l’antithrombine d’un facteur 1000`,
      `elles inhibent aussi les fonctions plaquettaires`
    ],
    'D',
    [
      `Faux. Les héparines sont des polysaccharides fortement chargés négativement.`,
      `Faux. Elles agissent indirectement en potentialisant l'antithrombine.`,
      `Faux. Certaines héparines peuvent être administrées par voie intraveineuse.`,
      `Vrai. L'héparine accélère considérablement l'activité inhibitrice de l'antithrombine, notamment vis-à-vis des facteurs IIa et Xa.`,
      `Faux selon la grille. L'effet thérapeutique principal des héparines repose sur l'anticoagulation via l'antithrombine, et non sur une inhibition directe de la fonction plaquettaire.`
    ]
  ),

  Q(55,
    `Vous recevez en consultation une jeune femme de 19 ans pour des gingivorragies et des ménorragies récurrentes depuis environ 5 ans. Elle n’a pas d’antécédents familiaux ni d’antécédent chirurgicaux. Quelle anomalie de l’hémostase doit être recherchée en première intention ?`,
    [
      `une maladie de Willebrand`,
      `une hypovitaminose K`,
      `une hémophilie`,
      `une afibrinogénémie`,
      `une hyperfibrinolyse`
    ],
    'A',
    [
      `Vrai. La maladie de Willebrand est une cause fréquente de syndrome hémorragique cutanéo-muqueux constitutionnel.`,
      `Faux. Une hypovitaminose K produit une anomalie acquise de la coagulation, moins évocatrice de ce tableau prolongé.`,
      `Faux. Les hémophilies classiques se manifestent davantage par des saignements profonds.`,
      `Faux. L'afibrinogénémie congénitale est rare et entraîne souvent un syndrome hémorragique plus précoce et sévère.`,
      `Faux. Une hyperfibrinolyse n'est pas la première hypothèse attendue devant ces manifestations.`
    ]
  ),

  Q(56,
    `Les concentrés de plaquettes se conservent :`,
    [
      `7 jours`,
      `42 jours`,
      `120 jours`,
      `1 an`,
      `3 ans`
    ],
    'A',
    [
      `Vrai. La grille retient sept jours de conservation pour les concentrés plaquettaires dans le cadre enseigné.`,
      `Faux. Quarante-deux jours correspond à une durée de conservation utilisée pour certains CGR.`,
      `Faux. Les plaquettes ne se conservent pas 120 jours.`,
      `Faux. Un an dépasse largement la durée de conservation des concentrés plaquettaires.`,
      `Faux. Trois ans n'est pas une durée de conservation applicable aux plaquettes.`
    ]
  ),

  Q(57,
    `Concernant les effets indésirables receveur, combien de grades de sévérité existe-t-il ?`,
    [
      `5`,
      `4`,
      `3`,
      `2`,
      `1`
    ],
    'B',
    [
      `Faux. Le nombre retenu par la grille est de quatre grades.`,
      `Vrai. La classification de gravité des effets indésirables receveur comprend quatre grades numérotés de 0 à 3.`,
      `Faux. Trois ne correspond pas au nombre de grades demandé.`,
      `Faux. Deux grades ne suffisent pas à la classification.`,
      `Faux. Il existe plusieurs grades de sévérité.`
    ]
  ),

  Q(58,
    `Parmi ces proposition, laquelle fait partie des complications retardées de la transfusion ?`,
    [
      `TACO (Transfusion-associated circulatory overload)`,
      `TRALI (transfusion related acute lung injury)`,
      `RFNH (réaction fébrile non hémolytique)`,
      `Allergie`,
      `Allo-immunisation anti-érythrocytaire`
    ],
    'E',
    [
      `Faux. Le TACO est une surcharge circulatoire généralement aiguë.`,
      `Faux. Le TRALI est une atteinte pulmonaire aiguë transfusionnelle.`,
      `Faux. Une réaction fébrile non hémolytique survient généralement pendant ou peu après la transfusion.`,
      `Faux. Les réactions allergiques transfusionnelles sont généralement immédiates.`,
      `Vrai. Une allo-immunisation anti-érythrocytaire peut être détectée à distance d'une transfusion.`
    ]
  ),

  Q(59,
    `Quel est le produit dont la délivrance est indépendante de l'établissement français du sang ?`,
    [
      `les concentrés de plaquettes d'aphérèse`,
      `les concentrés de granuleux`,
      `le plasma frais congelé (PFC)`,
      `le plasma frais congelé traité par solvant-détergent (PFC-SD)`,
      `les concentrés de globules rouges irradiés`
    ],
    'D',
    [
      `Faux. Les concentrés plaquettaires d'aphérèse sont des produits sanguins labiles.`,
      `Faux. Les concentrés granulocytaires relèvent du circuit transfusionnel.`,
      `Faux. Le PFC est un produit sanguin labile géré dans le circuit de transfusion.`,
      `Vrai selon la grille. Le plasma traité par solvant-détergent relève du statut de médicament dérivé du sang et de la délivrance pharmaceutique.`,
      `Faux. Les CGR irradiés restent des produits sanguins labiles.`
    ]
  ),

  Q(60,
    `Le risque d'hémolyse intravasculaire immédiate lors de la transfusion :`,
    [
      `est un risque aléatoire et non évitable`,
      `est lié aux seules incompatibilités ABO`,
      `est lié à la présence d’anticorps hémolysants chez le receveur`,
      `est lié à la présence d’anticorps hémolysants chez le donneur`,
      `est spécifique des femmes ayant eu des enfants`
    ],
    'C',
    [
      `Faux. Les procédures de compatibilité et d'identitovigilance permettent de prévenir une grande partie de ce risque.`,
      `Faux. Des anticorps dirigés contre d'autres systèmes érythrocytaires peuvent également entraîner une hémolyse.`,
      `Vrai. Des anticorps du receveur peuvent reconnaître les hématies transfusées et provoquer une hémolyse intravasculaire aiguë.`,
      `Faux selon la grille. Le mécanisme classiquement ciblé ici est l'action des anticorps hémolysants du receveur sur les hématies transfusées.`,
      `Faux. Ce risque n'est pas réservé aux femmes ayant eu des enfants.`
    ]
  )
];
