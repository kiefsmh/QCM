
export const meta = {
  title: 'UE13 Tissu sanguin — Annales 2024 — Session 2',
};

// Les réponses sont reprises STRICTEMENT de la grille officielle.
// La question 26, annulée, est exclue du score.

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
    `Concernant l’érythropoïèse, quelles sont les réponses vraies ?`,
    [
      `elle nécessite les vitamines B9 et B12`,
      `elle nécessite du fer et la vitamine B6`,
      `l’érythropoïétine (EPO) est produite par la moelle osseuse`,
      `le niveau d’EPO est régulé par le niveau d’oxygénation rénale`,
      `l’EPO est active dès le stade des cellules souches hématopoïétiques`
    ],
    'ABD',
    [
      `Vrai. Les vitamines B9 et B12 participent à la synthèse de l’ADN, indispensable à la prolifération des précurseurs érythroïdes.`,
      `Vrai. Le fer est indispensable à l’hème, et la vitamine B6 intervient dans sa biosynthèse.`,
      `Faux. L’EPO est principalement produite par le rein chez l’adulte.`,
      `Vrai. L’hypoxie rénale stimule la production d’EPO, notamment par la voie HIF.`,
      `Faux. L’EPO agit sur des progéniteurs érythroïdes déjà engagés et non dès les CSH.`
    ]
  ),

  Q(2,
    `Chez une patiente de 75 ans, quels diagnostics doivent être évoqués devant l’hémogramme suivant :
hématies : 2,72 T/L ; Hémoglobine : 97 g/L ; Hématocrite : 30% ; VGM : 110 fL
leucocytes : 7 G/L
- polynucléaires neutrophiles : 70%
- polynucléaires éosinophiles : 1%
- polynucléaires basophiles : 0%
- lymphocytes : 25%
- monocytes : 4%
plaquettes : 275 G/L
réticulocytes : 1 %`,
    [
      `une carence martiale`,
      `une carence en folates`,
      `une carence en vitamine B12`,
      `une béta-thalassémie mineure`,
      `un syndrome myélodysplasique`
    ],
    'BCE',
    [
      `Faux. La carence martiale entraîne habituellement une anémie microcytaire et hypochrome.`,
      `Vrai. Une carence en vitamine B9 peut provoquer une anémie macrocytaire arégénérative.`,
      `Vrai. Une carence en vitamine B12 peut entraîner une mégaloblastose avec macrocytose.`,
      `Faux. Une bêta-thalassémie mineure entraîne classiquement une microcytose.`,
      `Vrai. Chez une patiente âgée, une macrocytose arégénérative doit faire évoquer une myélodysplasie.`
    ]
  ),

  Q(3,
    `Quel(s) examen(s) demandez-vous en première intention devant une anémie microcytaire hypochrome isolée chez une patiente de 17 ans présentant pour seul signe clinique une pâleur cutanéo-muqueuse ?`,
    [
      `dosage de la vitamine B12`,
      `dosage de la ferritine`,
      `myélogramme`,
      `électrophorèse de l’hémoglobine`,
      `dosage de la transferrine`
    ],
    'B',
    [
      `Faux. Une carence en B12 entraîne habituellement une anémie macrocytaire.`,
      `Vrai. La ferritine constitue l’examen de première intention pour rechercher une carence martiale.`,
      `Faux. Le myélogramme n’est pas indiqué initialement devant cette présentation isolée.`,
      `Faux selon la grille. L’électrophorèse est notamment envisagée si une hémoglobinopathie est suspectée après le bilan initial.`,
      `Faux selon la grille. Le dosage de la transferrine n’est pas l’examen initial privilégié ici.`
    ]
  ),

  Q(4,
    `Concernant la granulopoïèse neutrophile, quelles sont les réponses vraies :`,
    [
      `les polynucléaires neutrophiles libèrent de la myélopéroxydase à partir de leurs granulations secondaires`,
      `une neutropénie peut être liée à un excès de margination des polynucléaires neutrophiles`,
      `la diapédèse correspond au passage des polynucléaires neutrophiles entre les cellules endothéliales pour migrer dans les tissus`,
      `les cellules expriment le CD14`,
      `la granulopoïèse est stimulée par le M-CSF`
    ],
    'BC',
    [
      `Faux. La myélopéroxydase est essentiellement contenue dans les granulations primaires azurophiles.`,
      `Vrai. Une augmentation de la margination peut diminuer le nombre de neutrophiles circulants.`,
      `Vrai. La diapédèse correspond au franchissement de l’endothélium vasculaire par les leucocytes.`,
      `Faux. Le CD14 est principalement un marqueur de la lignée monocytaire.`,
      `Faux. La granulopoïèse neutrophile est principalement stimulée par le G-CSF.`
    ]
  ),

  Q(5,
    `Monsieur D. âgé de 35 ans réalise un hémogramme dont les résultats sont les suivants :
Hématies : 2,6 T/L ; Hémoglobine : 76g/L ; Hématocrite : 22,8 % ; CCMH : 33,3% ; VGM : 87,7 fL ;
Plaquettes : 11 G/L
Leucocytes : 0,3 G/L
- PNN : 1%
- PNE : 0%
- PNB : 0%
- lymphocytes : 94%
- monocytes : 5%
Réticulocytes : 1%
Quelles anomalies sont présentes sur cet hémogramme ?`,
    [
      `une anémie normochrome normocytaire arégénérative`,
      `une thrombopénie`,
      `une agranulocytose`,
      `une pancytopénie`,
      `une hyperlymphocytose`
    ],
    'ABCD',
    [
      `Vrai. Hb à 76 g/L, VGM à 87,7 fL, CCMH normale et réticulocytes absolus à 26 G/L : anémie normocytaire normochrome arégénérative.`,
      `Vrai. Une numération plaquettaire à 11 G/L correspond à une thrombopénie profonde.`,
      `Vrai. Les PNN absolus valent 0,3 × 0,01 = 0,003 G/L, soit une agranulocytose.`,
      `Vrai. Il existe une anémie, une thrombopénie et une neutropénie profonde : c’est une pancytopénie.`,
      `Faux. Les lymphocytes absolus valent 0,3 × 0,94 = 0,282 G/L : il ne s’agit pas d’une hyperlymphocytose.`
    ]
  ),

  Q(6,
    `Concernant l’hématopoïèse, quelles sont les réponses vraies ?`,
    [
      `les 4 compartiments de l’hématopoïèse sont : les cellules souches/les progéniteurs/les précurseurs/les cellules matures`,
      `elle permet le renouvellement constant des éléments figurés du sang`,
      `le stem cem cell factor (SCF) est un facteur de croissance multipotent`,
      `les cellules souches hématopoïétiques sont totipotentes`,
      `elle a pour siège unique la moelle osseuse à partir de la naissance`
    ],
    'ABE',
    [
      `Vrai. Les quatre compartiments successifs sont les CSH, les progéniteurs, les précurseurs et les cellules matures.`,
      `Vrai. L’hématopoïèse compense continuellement la disparition des éléments figurés du sang.`,
      `Faux selon la grille officielle. Attention : le SCF agit effectivement sur plusieurs populations immatures ; la terminologie de cette proposition est discutable.`,
      `Faux. Les CSH sont multipotentes et non totipotentes.`,
      `Vrai selon la grille. La moelle osseuse constitue le siège physiologique principal de l’hématopoïèse après la naissance.`
    ]
  ),

  Q(7,
    `Concernant l’érythropoïèse, quelle(s) est(sont) la(les) réponse(s) vraie(s) ?`,
    [
      `le récepteur à l’EPO est exprimé à partir du stade d’érythroblaste acidophile`,
      `le noyau de l’érythroblaste polychromatophile contient plusieurs lobes`,
      `les réticulocytes ont une durée de vie de 2 jours avant de devenir des hématies`,
      `la synthèse d’hémoglobine débute dans les progéniteurs érythroblastiques de type BFU-E`,
      `le facteur de croissance SCF agit jusqu’au stade d’érythroblaste acidophile`
    ],
    'C',
    [
      `Faux. Le récepteur à l’EPO apparaît à des stades plus précoces de la différenciation érythroïde.`,
      `Faux. Le noyau érythroblastique n’est pas polylobé.`,
      `Vrai. Les réticulocytes achèvent leur maturation en hématies en environ un à deux jours.`,
      `Faux. La synthèse significative d’hémoglobine débute après le stade des progéniteurs BFU-E.`,
      `Faux. Le SCF agit principalement sur les cellules hématopoïétiques immatures.`
    ]
  ),

  Q(8,
    `Concernant l'hémoglobine, quelles sont les réponses vraies ?`,
    [
      `l'hémoglobine A1 est constituée de 2 chaînes α et 2 chaînes δ`,
      `l'hémoglobine A2 est normalement présente à un taux de 1% chez l'adulte`,
      `l'hémoglobine F représente l'hémoglobine majoritaire chez le nouveau-né`,
      `la synthèse de l’hème nécessite de la vitamine B9`,
      `l’hème fixe deux atomes de fer`
    ],
    'C',
    [
      `Faux. L’hémoglobine A majoritaire est constituée de deux chaînes alpha et de deux chaînes bêta.`,
      `Faux. L’HbA2 représente habituellement environ 2 à 3,5 % de l’hémoglobine adulte.`,
      `Vrai. L’hémoglobine F, constituée de deux chaînes alpha et deux chaînes gamma, prédomine à la naissance.`,
      `Faux. La synthèse de l’hème nécessite notamment du fer et de la vitamine B6.`,
      `Faux. Chaque groupement hème contient un seul atome de fer.`
    ]
  ),

  Q(9,
    `Concernant les lymphocytes, quelles sont les réponses vraies ?`,
    [
      `la lymphocytose s’interprète en valeur absolue`,
      `les lymphocytes B et T sont identifiables morphologiquement sur un frottis sanguin coloré au May-Grünwald Giemsa`,
      `les lymphocytes sont classiquement étudiés par cytométrie en flux`,
      `les lymphocytes ont un noyau polylobé`,
      `les lymphocytes ne contiennent jamais de granulations`
    ],
    'AC',
    [
      `Vrai. La lymphocytose doit être interprétée en G/L, et non uniquement en pourcentage.`,
      `Faux. Les lymphocytes B et T ne peuvent pas être distingués de façon fiable sur leur seule morphologie.`,
      `Vrai. La cytométrie en flux permet d’analyser les marqueurs immunophénotypiques lymphocytaires.`,
      `Faux. Le noyau des lymphocytes est généralement arrondi ou légèrement irrégulier.`,
      `Faux. Certains lymphocytes, notamment les grands lymphocytes granuleux, possèdent des granulations.`
    ]
  ),

  Q(10,
    `Concernant l’hémolyse extra-vasculaire, quelles sont les réponses vraies ?`,
    [
      `elle est physiologiquement majoritaire`,
      `elle a lieu dans la moelle osseuse, le foie et la rate`,
      `elle permet le recyclage du fer`,
      `elle entraîne la formation de la bilirubine`,
      `elle est due à la phagocytose des globules rouges par les macrophages`
    ],
    'ABCDE',
    [
      `Vrai. L’hémolyse physiologique est principalement extravasculaire.`,
      `Vrai. Elle se déroule dans les organes du système monocyte-macrophage, notamment la rate, le foie et la moelle.`,
      `Vrai. Le fer libéré par la dégradation de l’hémoglobine est recyclé.`,
      `Vrai. La dégradation de l’hème entraîne la formation de biliverdine puis de bilirubine.`,
      `Vrai. Les macrophages phagocytent les hématies âgées ou altérées.`
    ]
  ),

  Q(11,
    `Concernant les globules rouges, quelles sont les réponses vraies ?`,
    [
      `l’hémolyse physiologique a lieu au bout de 30 jours`,
      `l’énergie du globule rouge est fournie principalement par la glycolyse anaérobie`,
      `la glucose-6-phosphate déshydrogénase et la pyruvate kinase sont impliquées dans la glycolyse`,
      `les globules rouges renouvellent régulièrement leur stock d’enzymes`,
      `la réticulocytose s’interprète en pourcentage`
    ],
    'BC',
    [
      `Faux. La durée de vie physiologique d’une hématie est d’environ 120 jours.`,
      `Vrai. Les hématies produisent principalement leur ATP grâce à la glycolyse anaérobie.`,
      `Vrai selon la grille officielle. Réserve : la pyruvate kinase appartient à la glycolyse, mais la G6PD intervient dans la voie des pentoses phosphates.`,
      `Faux. Les hématies matures ne peuvent plus synthétiser de nouvelles enzymes.`,
      `Faux. Les réticulocytes s’interprètent principalement en valeur absolue, en G/L.`
    ]
  ),

  Q(12,
    `Concernant les monocytes, quelles sont les réponses vraies ?`,
    [
      `les monocytes ont une durée de vie courte, d’au maximum quelques jours, dans le sang`,
      `les monocytes migrent dans les tissus pour devenir des histiocytes`,
      `les monocytes expriment le CD14`,
      `leur taille est identique à celle des lymphocytes matures`,
      `les monocytes sont incapables de phagocytose`
    ],
    'ABC',
    [
      `Vrai. Les monocytes ne restent généralement que quelques jours dans la circulation sanguine.`,
      `Vrai. Ils peuvent migrer dans les tissus et se différencier en macrophages tissulaires.`,
      `Vrai. Le CD14 est un marqueur caractéristique de la lignée monocytaire.`,
      `Faux. Les monocytes sont généralement plus volumineux que les petits lymphocytes matures.`,
      `Faux. Les monocytes sont des cellules capables de phagocytose.`
    ]
  ),

  Q(13,
    `Quels sont les organes lymphoïdes secondaires chez l'adulte ?`,
    [
      `le thymus`,
      `la rate`,
      `le foie`,
      `les ganglions lymphatiques`,
      `la moelle osseuse`
    ],
    'BD',
    [
      `Faux. Le thymus est un organe lymphoïde primaire impliqué dans la maturation des lymphocytes T.`,
      `Vrai. La rate est un organe lymphoïde secondaire.`,
      `Faux. Le foie n’est pas classiquement considéré comme un organe lymphoïde secondaire.`,
      `Vrai. Les ganglions lymphatiques permettent notamment la rencontre entre antigènes et lymphocytes.`,
      `Faux. La moelle osseuse est un organe lymphoïde primaire.`
    ]
  ),

  Q(14,
    `Concernant l’interprétation d’un hémogramme, quelle(s) est(sont) la(les) réponse(s) vraie(s) ?`,
    [
      `une thrombocytose est une diminution de la numération plaquettaire`,
      `une agranulocytose est une neutropénie < 2 G/L`,
      `une pancytopénie est l’association d’une anémie, d’une thrombopénie et d’une neutropénie`,
      `chez l’adulte, une hyperlymphocytose est définie par des lymphocytes > 6,5 G/L`,
      `une anémie est définie par une diminution du nombre de globules rouges`
    ],
    'C',
    [
      `Faux. Une thrombocytose correspond à une augmentation des plaquettes.`,
      `Faux. L’agranulocytose correspond à une neutropénie profonde, classiquement inférieure à 0,5 G/L.`,
      `Vrai. Une pancytopénie associe une diminution des lignées érythrocytaire, plaquettaire et granulocytaire.`,
      `Faux. L’hyperlymphocytose chez l’adulte est généralement définie au-delà de 4 G/L.`,
      `Faux. L’anémie est définie par une diminution de la concentration en hémoglobine.`
    ]
  ),

  Q(15,
    `Concernant les thrombopénies, quelles sont les réponses vraies ?`,
    [
      `lors d’une fausse thrombopénie à l’EDTA, il faut réaliser un prélèvement sur tube citraté`,
      `lors d’une fausse thrombopénie à l’EDTA, le patient présente un risque hémorragique`,
      `les fausses thrombopénies à l’EDTA sont dues à l’agrégation des plaquettes entre elles dans le tube`,
      `une thrombopénie est définie par des plaquettes < 50 G/L`,
      `une numération plaquettaire à 50 G/L est normale chez un nourrisson de 15 jours`
    ],
    'AC',
    [
      `Vrai. Le tube citraté permet généralement de contrôler une numération artificiellement diminuée par l’EDTA.`,
      `Faux. Une pseudothrombopénie à l’EDTA est un phénomène in vitro sans thrombopénie réelle.`,
      `Vrai. L’agrégation des plaquettes dans le tube peut provoquer une sous-estimation automatisée.`,
      `Faux. La thrombopénie est généralement définie par un taux inférieur à 150 G/L.`,
      `Faux. Une numération à 50 G/L est pathologique chez un nourrisson.`
    ]
  ),

  Q(16,
    `Les tests suivants permettent d’explorer l’hémostase primaire :`,
    [
      `mesure du Temps de Quick`,
      `numération plaquettaire`,
      `test de Von Kaulla`,
      `mesure du Temps d’occlusion in vitro (PFA)`,
      `dosage du facteur Willebrand`
    ],
    'BDE',
    [
      `Faux. Le TQ explore principalement certaines voies de la coagulation plasmatique.`,
      `Vrai. La numération plaquettaire permet de rechercher une anomalie quantitative des plaquettes.`,
      `Faux. Le test de Von Kaulla explore la fibrinolyse.`,
      `Vrai. Le PFA permet d’explorer certaines anomalies de l’hémostase primaire.`,
      `Vrai. Le facteur Willebrand intervient dans l’adhésion plaquettaire.`
    ]
  ),

  Q(17,
    `Concernant l’endothélium vasculaire, quelles sont les réponses justes ?`,
    [
      `il est riche en collagène`,
      `il synthétise le facteur Willebrand`,
      `il synthétise l’activateur tissulaire du plasminogène`,
      `il exprime du facteur tissulaire en cas de lésion`,
      `il exprime physiologiquement des héparanes sulfates`
    ],
    'BCDE',
    [
      `Faux. Le collagène est principalement présent dans le sous-endothélium.`,
      `Vrai. Les cellules endothéliales synthétisent et sécrètent le facteur Willebrand.`,
      `Vrai. L’endothélium produit le t-PA, impliqué dans l’activation du plasminogène.`,
      `Vrai selon la grille. Le facteur tissulaire est impliqué dans l’activation de la coagulation lors d’une lésion vasculaire.`,
      `Vrai. Les héparanes sulfates de surface participent aux propriétés anticoagulantes de l’endothélium.`
    ]
  ),

  Q(18,
    `Les anticoagulants circulants de type lupique :`,
    [
      `peuvent entraîner un allongement du temps de céphaline avec activateur`,
      `peuvent entraîner un déficit en facteur de la coagulation`,
      `sont également dénommés «anti-phospholipides»`,
      `sont associés à un risque hémorragique`,
      `peuvent être détectés par le test du mélange`
    ],
    'ACE',
    [
      `Vrai. Les anticoagulants lupiques peuvent allonger les tests de coagulation phospholipide-dépendants.`,
      `Faux. Ils entraînent principalement une interférence analytique plutôt qu’un véritable déficit en facteur.`,
      `Vrai. Ils appartiennent à la famille des anticorps antiphospholipides.`,
      `Faux. Leur présence est plutôt associée à un risque thrombotique.`,
      `Vrai. Le test du mélange peut révéler une activité inhibitrice lorsque le TCA ne se corrige pas.`
    ]
  ),

  Q(19,
    `Parmi les antiplaquettaires suivants, lesquels inhibent directement l’agrégation des plaquettes ?`,
    [
      `abciximab`,
      `aspirine`,
      `ticagrelor`,
      `clopidogrel`,
      `tirofiban`
    ],
    'AE',
    [
      `Vrai. L’abciximab bloque GPIIbIIIa, récepteur impliqué directement dans l’agrégation plaquettaire.`,
      `Faux selon la grille. L’aspirine agit en amont, par inhibition de la COX-1.`,
      `Faux selon la grille. Le ticagrelor inhibe le récepteur P2Y12 de l’ADP.`,
      `Faux selon la grille. Le clopidogrel inhibe irréversiblement le récepteur P2Y12.`,
      `Vrai. Le tirofiban inhibe GPIIbIIIa et bloque la liaison du fibrinogène.`
    ]
  ),

  Q(20,
    `Vous voyez en consultation une patiente de 40 ans, que vous suivez pour une afibrinogénémie congénitale (fibrinogène < 0,5 g/L). Quelles anomalies biologiques sont associées à cette pathologie ?`,
    [
      `une augmentation des D-dimères`,
      `un allongement du Temps de Céphaline avec Activateur (ratio M/T)`,
      `une diminution du FII`,
      `une diminution du Temps de Quick (en %)`,
      `un raccourcissement du temps de lyse des euglobulines (Test de Von Kaulla)`
    ],
    'BD',
    [
      `Faux. L’afibrinogénémie n’entraîne pas en elle-même une augmentation des D-dimères.`,
      `Vrai. Un déficit majeur en fibrinogène peut prolonger le TCA.`,
      `Faux. Le déficit concerne le fibrinogène, ou facteur I, et non le facteur II.`,
      `Vrai. Le déficit peut entraîner un allongement du temps de prothrombine, donc une diminution du TQ en pourcentage.`,
      `Faux. Un raccourcissement du test de Von Kaulla évoque une hyperfibrinolyse.`
    ]
  ),

  Q(21,
    `Parmi les situations suivantes, lesquelles peuvent être associées à un risque thrombotique majoré ?`,
    [
      `déficit en alpha 2 anti-plasmine`,
      `déficit en protéine C`,
      `déficit en facteur XII`,
      `déficit en antithrombine`,
      `déficit en plasminogen activator inhibitor (PAI)`
    ],
    'BD',
    [
      `Faux. L’alpha-2-antiplasmine inhibe la plasmine ; son déficit favorise plutôt une activité fibrinolytique excessive.`,
      `Vrai. Le déficit en protéine C constitue une thrombophilie héréditaire.`,
      `Faux selon la grille. Un déficit en facteur XII peut allonger le TCA sans provoquer de tendance hémorragique.`,
      `Vrai. Le déficit en antithrombine constitue un important facteur de risque thromboembolique veineux.`,
      `Faux. Le déficit en PAI favorise plutôt la fibrinolyse.`
    ]
  ),

  Q(22,
    `Parmi les situations suivantes, lesquelles peuvent induire une augmentation de l’INR (international normalized ratio) chez un patient traité par antagoniste de la vitamine K (AVK) ?`,
    [
      `cholestase`,
      `administration d’un traitement antibiotique`,
      `jeûne`,
      `consommation d’alcool`,
      `prise d’un médicament inducteur enzymatique`
    ],
    'ABCD',
    [
      `Vrai. La cholestase peut réduire l’absorption des vitamines liposolubles, notamment la vitamine K.`,
      `Vrai. Certains antibiotiques peuvent modifier la flore intestinale ou interagir avec les AVK.`,
      `Vrai. Le jeûne peut diminuer les apports alimentaires en vitamine K et augmenter l’INR.`,
      `Vrai. L’alcool peut majorer l’effet des AVK, notamment lors de certaines consommations aiguës.`,
      `Faux. Un inducteur enzymatique tend à accélérer le métabolisme des AVK et à diminuer leur effet.`
    ]
  ),

  Q(23,
    `Parmi les anticoagulants suivants, lesquels sont des inhibiteurs directs du FXa ?`,
    [
      `les antagonistes de la vitamine K`,
      `l’apixaban`,
      `l’héparine non-fractionnée`,
      `le rivaroxaban`,
      `le fondaparinux`
    ],
    'BD',
    [
      `Faux. Les AVK diminuent la synthèse de plusieurs facteurs vitamine K-dépendants.`,
      `Vrai. L’apixaban est un inhibiteur direct du facteur Xa.`,
      `Faux. L’HNF agit indirectement en potentialisant l’antithrombine.`,
      `Vrai. Le rivaroxaban inhibe directement le facteur Xa.`,
      `Faux. Le fondaparinux inhibe indirectement le facteur Xa via l’antithrombine.`
    ]
  ),

  Q(24,
    `Vous souhaitez prescrire de l’héparine non-fractionnée à un patient de 76 ans ayant développé une thrombose veineuse du membre inférieur suite à un long voyage en avion, et atteint d’insuffisance rénale sévère. Quels examens d’hémostase peuvent être envisagés pour surveiller l’activité anticoagulante de ce traitement ? :`,
    [
      `Temps de Quick`,
      `Temps de Céphaline avec Activateur`,
      `Activité anti-Xa`,
      `Temps de Thrombine`,
      `Test du mélange`
    ],
    'BC',
    [
      `Faux. Le TQ ne constitue pas le test de surveillance habituel de l’HNF.`,
      `Vrai. Le TCA peut être utilisé pour surveiller l’activité anticoagulante de l’HNF.`,
      `Vrai. Le dosage de l’activité anti-Xa est une autre méthode de surveillance de l’HNF.`,
      `Faux. Le temps de thrombine est sensible à l’héparine mais n’est pas utilisé pour ajuster sa posologie en routine.`,
      `Faux. Le test du mélange est utilisé pour explorer certaines anomalies des tests de coagulation.`
    ]
  ),

  Q(25,
    `Vous administrez un traitement thrombolytique chez un patient hospitalisé en urgence pour un accident vasculaire cérébral. A quelles perturbations de l’hémostase devez-vous vous attendre ?`,
    [
      `diminution du FV`,
      `hypofibrinogénémie`,
      `augmentation des D-dimères`,
      `thrombopénie`,
      `allongement du Temps de Céphaline avec Activateur`
    ],
    'ABCE',
    [
      `Vrai selon la grille. Une fibrinolyse systémique importante peut s’accompagner de perturbations des facteurs de coagulation.`,
      `Vrai. L’activation de la fibrinolyse peut entraîner une consommation du fibrinogène.`,
      `Vrai. La dégradation de la fibrine réticulée entraîne la production de D-dimères.`,
      `Faux. Une thrombopénie n’est pas l’effet biologique caractéristique attendu d’une thrombolyse.`,
      `Vrai. Des perturbations de la coagulation secondaires à une fibrinolyse importante peuvent allonger le TCA.`
    ]
  ),

  // QUESTION 26 ANNULÉE OFFICIELLEMENT.
  //
  // 26) Quelles sont les indications des concentrés de
  // globules rouges (CGR) irradiés selon les
  // recommandations 2014 de l'HAS?
  //
  // a) dans les 3 ans suivant une autogreffe de cellules
  //    souches hématopoïétiques
  // b) patient drépanocytaire
  // c) patient ayant un traitement par Car T Cells
  // d) à vie chez un patient allogreffé
  // e) transfusion fœtale
  //
  // Aucune réponse attribuée : question exclue du score.

  Q(27,
    `Quelles sont les indications des concentrés de globules rouges (CGR) phénotypés selon les recommandations 2014 de l'HAS?`,
    [
      `patiente ayant un avenir obstétrical`,
      `homme de moins de 50 ans`,
      `patient drépanocytaire`,
      `patient atteint de myélodysplasie`,
      `urgence vitale immédiate`
    ],
    'AD',
    [
      `Vrai. Le phénotypage vise notamment à limiter les allo-immunisations pouvant compromettre des grossesses futures.`,
      `Faux. Le fait d’être un homme de moins de 50 ans ne constitue pas à lui seul une indication.`,
      `Faux selon la grille officielle. Attention : les patients drépanocytaires bénéficient habituellement de précautions importantes de compatibilité érythrocytaire.`,
      `Vrai selon la grille. Les patients myélodysplasiques peuvent nécessiter des transfusions répétées, favorisant l’allo-immunisation.`,
      `Faux. En urgence vitale immédiate, les procédures de compatibilité sont adaptées pour ne pas retarder une transfusion nécessaire.`
    ]
  ),

  Q(28,
    `Quels sont les évènements indésirables receveurs immédiats immunologiques?`,
    [
      `frissons-hyperthermie`,
      `surcharge volémique`,
      `réaction allergique`,
      `allo-immunisation`,
      `hémolyse`
    ],
    'ACE',
    [
      `Vrai. Les réactions fébriles non hémolytiques peuvent être d’origine immunologique.`,
      `Faux. La surcharge volémique, ou TACO, n’est pas une complication immunologique.`,
      `Vrai. Les réactions allergiques transfusionnelles peuvent être immédiates.`,
      `Faux. L’allo-immunisation est généralement identifiée comme une complication retardée.`,
      `Vrai. Une hémolyse aiguë peut résulter d’une incompatibilité immunologique, notamment ABO.`
    ]
  ),

  Q(29,
    `Quels sont les renseignements obligatoires à indiquer sur une prescription de produit sanguin labile (PSL)?`,
    [
      `numération plaquettaire pour une transfusion de plaquettes`,
      `date et heure de la prescription`,
      `degré d'urgence`,
      `poids pour les concentrés de globules rouges adultes`,
      `date et heure souhaitées pour la transfusion`
    ],
    'ABCE',
    [
      `Vrai selon la grille. La numération plaquettaire fait partie des informations pertinentes pour prescrire des plaquettes.`,
      `Vrai. La date et l’heure de prescription permettent la traçabilité.`,
      `Vrai. Le degré d’urgence conditionne les modalités de délivrance du PSL.`,
      `Faux selon la grille. Le poids n’est pas systématiquement requis pour une prescription de CGR chez l’adulte.`,
      `Vrai. La date et l’heure souhaitées permettent d’organiser la délivrance et l’administration.`
    ]
  ),

  Q(30,
    `Qui peut prescrire des produits sanguins labiles?`,
    [
      `un médecin`,
      `une sage femme`,
      `un interne en médecine`,
      `un externe en médecine`,
      `un infirmier en pratique avancée`
    ],
    'ACE',
    [
      `Vrai. Un médecin peut prescrire des produits sanguins labiles.`,
      `Faux selon la grille officielle de cette annale.`,
      `Vrai. Un interne peut effectuer des prescriptions dans le cadre de son exercice et de ses responsabilités.`,
      `Faux. Un externe ne dispose pas d’une autonomie de prescription médicale.`,
      `Vrai selon la grille officielle. Les possibilités de prescription des IPA dépendent de leur cadre réglementaire d’exercice.`
    ]
  ),

  Q(31,
    `Le principal facteur de croissance hématopoïétique impliqué dans la mégacaryopoïèse est :`,
    [
      `la thrombopoïétine`,
      `l’érythropoïétine`,
      `la glycophorine A`,
      `le fer`,
      `la vitamine B12`
    ],
    'A',
    [
      `Vrai. La thrombopoïétine est le facteur principal de régulation de la mégacaryopoïèse et de la production plaquettaire.`,
      `Faux. L’EPO stimule principalement la lignée érythroïde.`,
      `Faux. La glycophorine A est un marqueur membranaire érythroïde.`,
      `Faux. Le fer est indispensable à l’hémoglobine, mais n’est pas le principal facteur de croissance mégacaryocytaire.`,
      `Faux. La vitamine B12 intervient dans la synthèse de l’ADN.`
    ]
  ),

  Q(32,
    `La vitamine B9 est principalement présente dans un type d’aliment parmi ceux proposés, lequel ?`,
    [
      `les poissons`,
      `les légumes verts`,
      `les produits laitiers`,
      `les fruits rouges`,
      `les agrumes`
    ],
    'B',
    [
      `Faux. Les poissons ne représentent pas la source classique principalement retenue pour les folates.`,
      `Vrai. Les légumes verts à feuilles constituent une source importante de vitamine B9.`,
      `Faux. Les produits laitiers ne sont pas les principales sources de folates.`,
      `Faux selon la grille. Les fruits rouges ne représentent pas la réponse attendue.`,
      `Faux selon la grille. Les agrumes peuvent contenir des folates, mais les légumes verts constituent la meilleure réponse ici.`
    ]
  ),

  Q(33,
    `Vous suspectez une thalassémie, quel examen réalisez-vous pour confirmer votre hypothèse diagnostique ?`,
    [
      `le dosage de l’haptoglobine`,
      `un myélogramme`,
      `une culture de progéniteurs hématopoïétiques`,
      `une électrophorèse des protéines sériques`,
      `une électrophorèse de l’hémoglobine`
    ],
    'E',
    [
      `Faux. L’haptoglobine explore notamment l’hémolyse et n’identifie pas une thalassémie.`,
      `Faux. Le myélogramme n’est pas l’examen diagnostique de première intention.`,
      `Faux. La culture de progéniteurs n’est pas utilisée pour confirmer une thalassémie.`,
      `Faux. L’électrophorèse des protéines sériques n’analyse pas les fractions d’hémoglobine.`,
      `Vrai. L’étude de l’hémoglobine permet de caractériser les fractions HbA, HbA2 et HbF, notamment dans les bêta-thalassémies.`
    ]
  ),

  Q(34,
    `Vous suspectez une leucémie myéloïde chronique, quel examen demandez-vous pour confirmer votre hypothèse ?`,
    [
      `la recherche d’une mutation JAK2 V617F`,
      `un immunophénotypage des lymphocytes circulants`,
      `une biopsie ostéomédullaire`,
      `la recherche du transcrit de fusion BCR::ABL`,
      `une électrophorèse des protéines sériques`
    ],
    'D',
    [
      `Faux. JAK2 V617F est associé principalement à certains syndromes myéloprolifératifs BCR::ABL1 négatifs.`,
      `Faux. L’immunophénotypage lymphocytaire n’est pas l’examen confirmant une LMC.`,
      `Faux. La biopsie peut compléter le bilan, mais n’identifie pas à elle seule l’anomalie moléculaire caractéristique.`,
      `Vrai. La mise en évidence de BCR::ABL1 permet de confirmer la leucémie myéloïde chronique.`,
      `Faux. L’électrophorèse des protéines sériques n’est pas l’examen diagnostique de la LMC.`
    ]
  ),

  Q(35,
    `Quelle anomalie morphologique des globules rouges oriente vers une drépanocytose ?`,
    [
      `la présence de drépanocytes`,
      `la présence de dacryocytes`,
      `la présence d’elliptocytes`,
      `la présence de schizocytes`,
      `la présence d’hématies cibles`
    ],
    'A',
    [
      `Vrai. Les drépanocytes sont des hématies falciformes caractéristiques des syndromes drépanocytaires.`,
      `Faux. Les dacryocytes sont des hématies en forme de larme, notamment observées dans les myélofibroses.`,
      `Faux. Les elliptocytes sont des hématies allongées.`,
      `Faux. Les schizocytes sont des fragments d’hématies évoquant notamment une hémolyse mécanique.`,
      `Faux selon la grille. Les hématies cibles peuvent exister dans certaines hémoglobinopathies mais ne sont pas spécifiques de la drépanocytose.`
    ]
  ),

  Q(36,
    `Concernant les facteurs de croissance hématopoïétiques, quelle est la bonne réponse ?`,
    [
      `l’IL-5 est un facteur de croissance de promotion`,
      `le GM-CSF est un facteur de croissance restreint`,
      `la TPO est un facteur de croissance multipotent`,
      `le SCF est un facteur de croissance multipotent`,
      `le G-CSF est un facteur de croissance restreint`
    ],
    'E',
    [
      `Faux selon la grille. L’IL-5 agit principalement sur la lignée éosinophile.`,
      `Faux. Le GM-CSF agit sur plusieurs lignées myéloïdes.`,
      `Faux selon la grille. La TPO est principalement associée à la mégacaryopoïèse.`,
      `Faux selon la grille officielle. Le SCF possède pourtant des effets sur plusieurs populations de progéniteurs immatures : formulation discutable.`,
      `Vrai. Le G-CSF est principalement un facteur de croissance restreint à la lignée granulocytaire neutrophile.`
    ]
  ),

  Q(37,
    `Dans quel cas un myélogramme doit-il être préféré à une biopsie ostéo-médullaire ?`,
    [
      `pour rechercher une myélofibrose`,
      `pour évaluer avec certitude la richesse médullaire`,
      `pour établir le diagnostic d’aplasie médullaire`,
      `pour établir le décompte précis des cellules médullaires`,
      `pour établir le diagnostic de lymphome`
    ],
    'D',
    [
      `Faux. La myélofibrose nécessite une étude histologique de la moelle.`,
      `Faux. La biopsie ostéomédullaire est plus adaptée pour évaluer la richesse médullaire globale.`,
      `Faux. La biopsie est essentielle au diagnostic d’aplasie médullaire.`,
      `Vrai. Le myélogramme permet d’effectuer un décompte cytologique précis des différentes populations médullaires.`,
      `Faux. Une biopsie est généralement nécessaire pour l’analyse architecturale d’une infiltration lymphomateuse.`
    ]
  ),

  Q(38,
    `Du plus immature au plus mature, les différents stades de maturation des précurseurs granuleux sont :`,
    [
      `myélocyte – métamyélocyte – promyélocyte – myéloblaste - polynucléaire`,
      `myéloblaste - promyélocyte – myélocyte – métamyélocyte – polynucléaire`,
      `métamyélocyte – myéloblaste - promyélocyte – myélocyte – polynucléaire`,
      `métamyélocyte – myéloblaste - myélocyte – promyélocyte – polynucléaire`,
      `myélocyte – promyélocyte – métamyélocyte – myéloblaste - polynucléaire`
    ],
    'B',
    [
      `Faux. Le myélocyte apparaît après le myéloblaste et le promyélocyte.`,
      `Vrai. L’ordre est myéloblaste, promyélocyte, myélocyte, métamyélocyte puis polynucléaire mature, avec le stade en bande intermédiaire.`,
      `Faux. Le métamyélocyte est plus mature que le myéloblaste.`,
      `Faux. Le promyélocyte précède normalement le myélocyte.`,
      `Faux. Le myéloblaste est le premier des stades indiqués et ne peut pas se retrouver en avant-dernière position.`
    ]
  ),

  Q(39,
    `Concernant le métabolisme du fer, quelle est la bonne réponse ?`,
    [
      `l’absorption du fer a principalement lieu au niveau de l’iléon terminal`,
      `la ferritine est la principale molécule de stockage du fer`,
      `l’hepcidine prend en charge le fer dans le sang`,
      `la ferroportine est présente au pôle apical des entérocytes`,
      `une carence martiale entraine une anémie macrocytaire`
    ],
    'B',
    [
      `Faux. Le fer est principalement absorbé au niveau du duodénum.`,
      `Vrai. La ferritine constitue la principale forme de stockage intracellulaire du fer.`,
      `Faux. Le transport plasmatique du fer est assuré par la transferrine.`,
      `Faux. La ferroportine est localisée au pôle basolatéral des entérocytes.`,
      `Faux. La carence martiale entraîne classiquement une anémie microcytaire hypochrome.`
    ]
  ),

  Q(40,
    `Quelle cellule exprime la myélopéroxydase intracytoplasmique ?`,
    [
      `le myélocyte neutrophile`,
      `le globule rouge`,
      `le lymphocyte T`,
      `la plaquette`,
      `le lymphocyte B`
    ],
    'A',
    [
      `Vrai. Le myélocyte neutrophile appartient à la lignée granulocytaire et possède des granulations contenant de la myélopéroxydase.`,
      `Faux. Le globule rouge mature ne possède pas de granulations myélopéroxydase positives.`,
      `Faux. Les lymphocytes T ne sont pas des cellules de la lignée granulocytaire.`,
      `Faux. Les plaquettes ne contiennent pas de myélopéroxydase granulocytaire.`,
      `Faux. Les lymphocytes B ne présentent pas cette activité enzymatique caractéristique.`
    ]
  ),

  Q(41,
    `Concernant la vitamine B12, quelle est la bonne réponse ?`,
    [
      `la vitamine B12 est le cofacteur de la méthionine synthétase`,
      `la vitamine B12 est le cofacteur de la folate réductase`,
      `la vitamine B12 est le cofacteur de la thymidilate synthétase`,
      `la vitamine B12 permet la synthèse de l’ARN`,
      `les végétaliens ont un apport en vitamine B12 suffisant`
    ],
    'A',
    [
      `Vrai. La méthionine synthétase utilise la vitamine B12 comme cofacteur.`,
      `Faux. La dihydrofolate réductase utilise le NADPH.`,
      `Faux. La thymidylate synthétase utilise notamment le 5,10-méthylène-tétrahydrofolate.`,
      `Faux selon la grille. La carence en B12 perturbe surtout la synthèse de l’ADN par ses interactions avec le métabolisme des folates.`,
      `Faux. Les végétaliens sans supplémentation adaptée sont exposés à une carence en vitamine B12.`
    ]
  ),

  Q(42,
    `La présence de nombreux dacryocytes sur un frottis sanguin doit vous faire évoquer un diagnostic, lequel ?`,
    [
      `une drépanocytose`,
      `une thalassémie`,
      `une microangiopathie thrombotique`,
      `une myélofibrose`,
      `une splénectomie`
    ],
    'D',
    [
      `Faux. La drépanocytose se caractérise notamment par la présence de drépanocytes.`,
      `Faux selon la grille. Les thalassémies peuvent produire diverses anomalies morphologiques des hématies.`,
      `Faux. Une microangiopathie thrombotique fait principalement rechercher des schizocytes.`,
      `Vrai. Les dacryocytes sont des hématies en forme de larme, particulièrement évocatrices d’une myélofibrose.`,
      `Faux. Une asplénie peut notamment entraîner la présence de corps de Howell-Jolly.`
    ]
  ),

  Q(43,
    `Lors d’une anémie par carence martiale, quel élément peut être observé ?`,
    [
      `un ictère`,
      `des ongles cassants`,
      `une ferritine augmentée`,
      `des réticulocytes supérieurs à 120 G/L`,
      `une haptoglobine effondrée`
    ],
    'B',
    [
      `Faux. L’ictère est notamment évocateur d’une hémolyse.`,
      `Vrai. La carence martiale peut entraîner une fragilité unguéale, notamment une koïlonychie.`,
      `Faux. La ferritine est habituellement basse en cas de carence martiale.`,
      `Faux. Une anémie ferriprive est habituellement arégénérative avant traitement.`,
      `Faux. Une haptoglobine effondrée évoque principalement une hémolyse intravasculaire.`
    ]
  ),

  Q(44,
    `Le terme utilisé pour définir une anémie associée à un VGM normal est :`,
    [
      `microcytaire`,
      `normochrome`,
      `hypochrome`,
      `régénérative`,
      `normocytaire`
    ],
    'E',
    [
      `Faux. Le terme microcytaire correspond à un VGM diminué.`,
      `Faux. La normochromie concerne la concentration en hémoglobine des hématies.`,
      `Faux. L’hypochromie correspond à une CCMH diminuée.`,
      `Faux. Le caractère régénératif dépend du nombre absolu de réticulocytes.`,
      `Vrai. Une anémie avec un VGM dans les valeurs normales est dite normocytaire.`
    ]
  ),

  Q(45,
    `Parmi ces propositions, quel type cellulaire possède un noyau ?`,
    [
      `les hématies`,
      `les plaquettes`,
      `les réticulocytes`,
      `les érythroblastes`,
      `les drépanocytes`
    ],
    'D',
    [
      `Faux. Les hématies matures sont anucléées.`,
      `Faux. Les plaquettes sont des fragments cytoplasmiques de mégacaryocytes.`,
      `Faux. Les réticulocytes ont déjà expulsé leur noyau.`,
      `Vrai. Les érythroblastes sont des précurseurs nucléés de la lignée érythroïde.`,
      `Faux. Les drépanocytes sont des hématies matures déformées et anucléées.`
    ]
  ),

  Q(46,
    `La cyclo-oxygénase (COX) plaquettaire :`,
    [
      `possède comme substrat direct les phospholipides membranaires`,
      `est bloquée de façon réversible par l’aspirine`,
      `induit la synthèse d’endopéroxydes`,
      `participe à la synthèse de l’ADP`,
      `inhibe l’agrégation plaquettaire`
    ],
    'C',
    [
      `Faux. Le substrat de la COX est l’acide arachidonique libéré des phospholipides membranaires.`,
      `Faux. L’aspirine inhibe irréversiblement la COX-1 plaquettaire.`,
      `Vrai. La cyclo-oxygénase participe à la production des endopéroxydes prostaglandiniques.`,
      `Faux. La COX ne synthétise pas l’ADP.`,
      `Faux. La voie COX-1 contribue à la synthèse du thromboxane A2, qui favorise l’agrégation.`
    ]
  ),

  Q(47,
    `Vous recevez aux urgences un patient de 22 ans dont vous ne connaissez pas les antécédents et qui doit subir une appendicectomie. Les résultats biologiques sont les suivants : temps de Quick à 75%, temps de céphaline avec activateur (ratio) à 1,8 et fibrinogène à 2,8 g/L. Parmi les hypothèses suivantes, laquelle vous semble la plus plausible pour expliquer ces résultats biologiques ? :`,
    [
      `déficit isolé en FII`,
      `déficit isolé en FVII`,
      `déficit isolé en FX`,
      `déficit isolé en FVIII`,
      `déficit isolé en FXIII`
    ],
    'D',
    [
      `Faux. Un déficit en facteur II affecte généralement le TQ et le TCA.`,
      `Faux. Un déficit en facteur VII entraîne principalement une anomalie du TQ.`,
      `Faux. Un déficit en facteur X affecte habituellement les deux voies explorées.`,
      `Vrai. Un déficit en facteur VIII peut provoquer un allongement isolé du TCA, évoquant une hémophilie A.`,
      `Faux. Un déficit en facteur XIII peut entraîner des saignements malgré un TQ et un TCA normaux.`
    ]
  ),

  Q(48,
    `Un homme de 84 ans est admis inconscient aux urgences avec un traumatisme crânien suite à une chute d’échelle. Sa fille vous informe qu’il est sous anticoagulant au long cours, mais ne connaît pas le nom de la molécule. Le bilan d’hémostase du patient est le suivant : TQ 45%, TCA (M/T) : 1,4, fibrinogène : 5 g/L. A quel anticoagulant devez-vous penser ?`,
    [
      `héparine de bas poids moléculaire`,
      `héparine non-fractionnée`,
      `rivaroxaban`,
      `dabigatran`,
      `fondaparinux`
    ],
    'C',
    [
      `Faux. Les HBPM ont généralement peu d’effet sur le TQ et sont habituellement injectables.`,
      `Faux. L’HNF affecte principalement le TCA et est administrée par voie parentérale.`,
      `Vrai. Le rivaroxaban est un inhibiteur direct du facteur Xa pouvant allonger le temps de prothrombine selon le réactif.`,
      `Faux selon la grille. Le dabigatran est un inhibiteur direct de la thrombine agissant notamment sur le TCA.`,
      `Faux. Le fondaparinux est un inhibiteur indirect du facteur Xa administré par injection.`
    ]
  ),

  Q(49,
    `Concernant la protéine S, quelle est la proposition exacte ?`,
    [
      `elle est synthétisée par la cellule endothéliale`,
      `sa synthèse est indépendante de la vitamine K`,
      `elle inactive le facteur Xa`,
      `elle a pour cofacteur la protéine C`,
      `elle est inactive lorsqu’elle est liée à la C4b-binding protein (C4b-BP)`
    ],
    'E',
    [
      `Faux selon la grille. La protéine S est principalement synthétisée par le foie, bien qu’il existe aussi une production extra-hépatique.`,
      `Faux. La protéine S est vitamine K-dépendante.`,
      `Faux. La protéine S est principalement un cofacteur anticoagulant de la protéine C activée.`,
      `Faux. C’est la protéine S qui est le cofacteur de la protéine C activée, et non l’inverse.`,
      `Vrai. La fraction liée à la C4b-BP n’exerce pas l’activité anticoagulante classique de la protéine S libre.`
    ]
  ),

  Q(50,
    `La maladie de Bernard Soulier:`,
    [
      `est due à un déficit en GPIIbIIIa plaquettaire`,
      `est de transmission autosomale dominante`,
      `est caractérisée par des plaquettes de grande taille`,
      `est associée à une thrombocytose`,
      `est associée à un défaut de l’agrégation plaquettaire`
    ],
    'C',
    [
      `Faux. Bernard-Soulier résulte d’une anomalie du complexe GPIb-IX-V.`,
      `Faux. La forme classique est autosomique récessive.`,
      `Vrai. Il s’agit d’une macrothrombopénie avec plaquettes géantes.`,
      `Faux. La maladie est associée à une thrombopénie.`,
      `Faux selon la grille. Le défaut principal concerne l’adhésion plaquettaire médiée par le facteur Willebrand.`
    ]
  ),

  Q(51,
    `Le Facteur Willebrand (VWF) :`,
    [
      `est une protéine monomérique`,
      `est en partie synthétisé par les mégacaryocytes`,
      `protège le facteur IX`,
      `se lie à la GPIaIIa des plaquettes`,
      `est uniquement présent dans le sous-endothélium`
    ],
    'B',
    [
      `Faux. Le VWF est une protéine multimérique.`,
      `Vrai. Le facteur Willebrand est synthétisé par les cellules endothéliales et les mégacaryocytes.`,
      `Faux. Il transporte et stabilise le facteur VIII, pas le facteur IX.`,
      `Faux. Le complexe plaquettaire classiquement associé au VWF pour l’adhésion est GPIb-IX-V.`,
      `Faux. Le VWF est aussi présent dans le plasma et dans les granules alpha plaquettaires.`
    ]
  ),

  Q(52,
    `Parmi les anticoagulants suivants, l’un possède une activité anti-IIa équivalente à son activité anti-Xa. Lequel ?`,
    [
      `l’apixaban`,
      `le fondaparinux`,
      `l’enoxaparine`,
      `le dabigatran`,
      `l’héparine calcique`
    ],
    'E',
    [
      `Faux. L’apixaban est un inhibiteur direct du facteur Xa.`,
      `Faux. Le fondaparinux possède une activité anti-Xa indirecte sans activité anti-IIa significative.`,
      `Faux. L’énoxaparine présente une activité anti-Xa prédominante par rapport à l’activité anti-IIa.`,
      `Faux. Le dabigatran est un inhibiteur direct du facteur IIa.`,
      `Vrai. L’héparine calcique est une héparine non fractionnée avec des activités anti-Xa et anti-IIa proches.`
    ]
  ),

  Q(53,
    `Un patient polytraumatisé est admis aux urgences suite à un accident de voiture. Il n’a pas d’antécédent hémorragique, mais présente les résultats d’hémostase suivant : Temps de Quick à 30%, Temps de céphaline avec Activateur (ratio malade/témoin) à 1,6 et fibrinogène à 0,8 g/L. Compte tenu du contexte, quelle est l’hypothèse la plus probable ?`,
    [
      `hépatopathie sévère`,
      `hypofibrinogénémie congénitale`,
      `coagulation intravasculaire disséminée`,
      `hypovitaminose K`,
      `hémophilie A acquise`
    ],
    'C',
    [
      `Faux selon la grille. Une hépatopathie sévère peut perturber ce bilan mais n’est pas l’hypothèse principale dans ce contexte traumatique.`,
      `Faux. Le contexte aigu et l’absence d’antécédent orientent plutôt vers une anomalie acquise.`,
      `Vrai. Une CIVD post-traumatique peut provoquer une consommation des facteurs et du fibrinogène avec allongement du TQ et du TCA.`,
      `Faux. Une carence en vitamine K n’explique pas typiquement une hypofibrinogénémie aussi importante.`,
      `Faux. Une hémophilie A acquise provoque principalement un allongement isolé du TCA.`
    ]
  ),

  Q(54,
    `Concernant le facteur XII, quelle est la proposition exacte ?`,
    [
      `sa synthèse est dépendante de la vitamine K`,
      `il permet de stabiliser la fibrine par liaison des domaines D`,
      `il est exploré par le temps de Quick`,
      `il est exploré par le temps de Céphaline avec Activateur`,
      `son déficit est associé à un risque hémorragique`
    ],
    'D',
    [
      `Faux. Le facteur XII n’est pas vitamine K-dépendant.`,
      `Faux. La stabilisation covalente de la fibrine est assurée par le facteur XIIIa.`,
      `Faux. Le TQ n’explore pas le facteur XII.`,
      `Vrai. Le facteur XII appartient à la voie explorée par le TCA.`,
      `Faux. Un déficit en facteur XII peut allonger fortement le TCA sans provoquer de syndrome hémorragique.`
    ]
  ),

  Q(55,
    `La plasmine :`,
    [
      `est une enzyme procoagulante`,
      `est physiologiquement active en circulation`,
      `est le précurseur du plasminogène`,
      `résulte d’une activation directe par la thrombine`,
      `génère des D-dimères`
    ],
    'E',
    [
      `Faux. La plasmine est une enzyme fibrinolytique.`,
      `Faux. Son activité circulante est régulée, notamment par l’alpha-2-antiplasmine.`,
      `Faux. Le plasminogène est le précurseur inactif de la plasmine.`,
      `Faux. Le plasminogène est principalement activé par le t-PA et l’u-PA.`,
      `Vrai. La plasmine dégrade la fibrine réticulée et libère des D-dimères.`
    ]
  ),

  Q(56,
    `Quelle est la posologie pour une prescription de concentrés plaquettaires selon les recommandations de l'HAS de 2015, hors néonatalogie?`,
    [
      `0,5 à 0,7 x 10^11 plaquettes / kg de poids`,
      `0,1 à 0,2 x 10^11plaquettes / 10 kg de poids`,
      `0,5 à 0,7 x 10^11 plaquettes / 10 kg de poids`,
      `0,5 à 1 x 10^11 plaquettes / kg de poids`,
      `0,1 à 0,2 x 10^11 plaquettes / kg de poids`
    ],
    'C',
    [
      `Faux. Cette quantité est dix fois supérieure à la quantité de référence exprimée pour 10 kg.`,
      `Faux. Cette dose est inférieure à la quantité attendue dans le référentiel de l’annale.`,
      `Vrai. La grille retient 0,5 à 0,7 × 10^11 plaquettes pour 10 kg de poids.`,
      `Faux. Cette quantité par kilogramme dépasse largement la dose attendue.`,
      `Faux. Le référentiel proposé exprime la dose correcte pour 10 kg, et non ici pour 1 kg.`
    ]
  ),

  Q(57,
    `Quel est le produit dont la délivrance est indépendante de l'EFS (Etablissement français du Sang)?`,
    [
      `le plasma thérapeutique`,
      `les concentrés de plaquettes d'aphérèse`,
      `les concentrés de globules rouges irradiés`,
      `l'albumine`,
      `le sang total`
    ],
    'D',
    [
      `Faux. Le plasma thérapeutique destiné à la transfusion suit le circuit des produits sanguins labiles.`,
      `Faux. Les concentrés plaquettaires d’aphérèse sont des PSL.`,
      `Faux. Les CGR irradiés restent des produits sanguins labiles.`,
      `Vrai. L’albumine est un médicament dérivé du sang, délivré par le circuit pharmaceutique.`,
      `Faux. Le sang total relève des produits sanguins labiles.`
    ]
  ),

  Q(58,
    `Dans le domaine de la transfusion, combien de niveaux d'urgence existe-t'il ?`,
    [
      `4`,
      `3`,
      `2`,
      `1`,
      `0`
    ],
    'B',
    [
      `Faux. Le référentiel décrit trois niveaux d’urgence transfusionnelle.`,
      `Vrai. Les trois niveaux sont urgence vitale immédiate, urgence vitale et urgence relative.`,
      `Faux. Il existe trois niveaux et non deux.`,
      `Faux. Les modalités d’urgence transfusionnelle sont subdivisées en trois catégories.`,
      `Faux. Une classification réglementaire des urgences transfusionnelles existe.`
    ]
  ),

  Q(59,
    `La recherche d’anticorps irréguliers (RAI) lors d’une grossesse est nécessaire :`,
    [
      `seulement pour les femmes Rhésus négatif`,
      `seulement si le père de l’enfant est Rhésus positif`,
      `seulement à partir de la deuxième grossesse`,
      `pour identifier une grossesse à risque de maladie hémolytique du nouveau-né`,
      `chez les femmes qui seront transfusées`
    ],
    'D',
    [
      `Faux. La recherche d’anticorps irréguliers n’est pas réservée aux femmes Rhésus négatif.`,
      `Faux. Elle ne dépend pas uniquement du Rhésus du père.`,
      `Faux. Une allo-immunisation peut être recherchée dès une première grossesse.`,
      `Vrai. La RAI permet d’identifier des anticorps maternels susceptibles de provoquer une maladie hémolytique fœtale ou néonatale.`,
      `Faux selon la grille. La transfusion constitue une autre indication de RAI, mais la question porte sur son indication obstétricale.`
    ]
  ),

  Q(60,
    `Le risque d’hémolyse intravasculaire immédiate lors de la transfusion :`,
    [
      `est un risque aléatoire et non évitable`,
      `est lié aux seules incompatibilités ABO`,
      `est lié à la présence d’anticorps hémolysants chez le donneur`,
      `est lié à la présence d’anticorps hémolysants chez le receveur`,
      `est spécifique des femmes ayant eu des enfants`
    ],
    'D',
    [
      `Faux. Ce risque peut notamment être prévenu par les contrôles immunohématologiques et de concordance.`,
      `Faux. D’autres incompatibilités érythrocytaires peuvent provoquer une hémolyse.`,
      `Faux selon la grille. L’hémolyse immunologique immédiate classique des CGR résulte d’anticorps présents chez le receveur.`,
      `Vrai. Les anticorps hémolysants du receveur peuvent reconnaître les antigènes des hématies transfusées et provoquer leur destruction.`,
      `Faux. Ce risque n’est pas spécifique des femmes ayant eu des enfants.`
    ]
  )
];
