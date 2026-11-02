
export const meta = {
  title: 'UE Tissu sanguin — Annales 2025 — Session 1',
};

// Réponses STRICTEMENT conformes à la grille officielle.
// Question 29 annulée : exclue du tableau et du score.

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
    `Parmi les propositions suivantes, lesquelles sont exactes ?`,
    [
      `Les monocytes possèdent un noyau plurilobé.`,
      `Le cytoplasme des lymphocytes est azurophile.`,
      `Les granulations présentes dans le cytoplasme des polynucléaires basophiles sont violacées.`,
      `Le cytoplasme des lymphocytes peut comporter des grains.`,
      `Les leucoblastes possèdent un noyau à la chromatine fine.`
    ],
    'CDE',
    [
      `Faux. Les monocytes possèdent généralement un noyau réniforme, non plurilobé.`,
      `Faux selon la grille officielle. Le cytoplasme lymphocytaire est habituellement basophile.`,
      `Vrai. Les polynucléaires basophiles possèdent de grosses granulations violacées.`,
      `Vrai. Certains lymphocytes présentent des granulations azurophiles cytoplasmiques.`,
      `Vrai. Les blastes ont généralement une chromatine fine et peu condensée.`
    ]
  ),

  Q(2,
    `Parmi les propositions suivantes, lesquelles sont exactes ?`,
    [
      `Les précurseurs sont plus matures que les progéniteurs.`,
      `L’organisme produit environ 1 000 plaquettes, 1 000 hématies et 1 000 leucocytes par jour.`,
      `La division asymétrique des cellules souches hématopoïétiques permet à une cellule souche mère de donner deux cellules souches filles.`,
      `La division symétrique des cellules souches hématopoïétiques permet un auto-renouvellement d’expansion.`,
      `Les cellules souches hématopoïétiques sont majoritairement en quiescence.`
    ],
    'ADE',
    [
      `Vrai. Les précurseurs correspondent à un stade de différenciation plus avancé que les progéniteurs.`,
      `Faux. La production quotidienne de cellules sanguines se chiffre en milliards, et non en milliers.`,
      `Faux. La division asymétrique produit une cellule souche et une cellule engagée dans la différenciation.`,
      `Vrai. Une division symétrique d'autorenouvellement peut produire deux cellules souches et augmenter leur population.`,
      `Vrai. La majorité des CSH adultes se trouvent dans un état de quiescence, en phase G0.`
    ]
  ),

  Q(3,
    `Parmi les propositions suivantes, lesquelles sont exactes ?`,
    [
      `L’hématocrite représente le volume occupé par le plasma après centrifugation ou sédimentation d’un tube de sang.`,
      `Une déshydratation sévère entraîne une fausse polyglobulie.`,
      `La présence d’agglutinines froides entraîne une fausse microcytose.`,
      `Une anémie régénérative est d’origine centrale, c’est-à-dire médullaire.`,
      `Les agrégats plaquettaires sur EDTA entraînent une fausse thrombopénie.`
    ],
    'BE',
    [
      `Faux. L'hématocrite représente la fraction volumique occupée par les globules rouges.`,
      `Vrai. Une déshydratation diminue le volume plasmatique, entraînant une hémoconcentration.`,
      `Faux. Les agglutinines froides peuvent entraîner une fausse macrocytose par agrégation des hématies.`,
      `Faux. Une anémie régénérative oriente principalement vers une cause périphérique, comme une hémolyse ou une hémorragie.`,
      `Vrai. Les agrégats plaquettaires induits par l'EDTA peuvent provoquer une pseudothrombopénie.`
    ]
  ),

  Q(4,
    `Parmi les propositions suivantes, lesquelles sont exactes ?`,
    [
      `Sur un compte-rendu de myélogramme, le pourcentage des différents types cellulaires présents sur le frottis médullaire est mentionné, ainsi que la présence de mégacaryocytes.`,
      `Les frottis médullaires sont colorés au May-Grünwald Giemsa, comme les frottis sanguins.`,
      `La lecture du myélogramme permet l’identification des progéniteurs hématopoïétiques.`,
      `La présence de mégacaryocytes sur un frottis médullaire est un critère de bonne qualité du prélèvement.`,
      `Pour lire un myélogramme, une carotte osseuse est nécessaire.`
    ],
    'ABD',
    [
      `Vrai. Le myélogramme permet un décompte des populations médullaires et l'appréciation des mégacaryocytes.`,
      `Vrai. La coloration MGG est utilisée pour l'analyse cytologique des frottis médullaires.`,
      `Faux. Les progéniteurs hématopoïétiques ne sont pas identifiables par leur seule morphologie.`,
      `Vrai. La présence de mégacaryocytes suggère que le prélèvement contient bien du matériel médullaire.`,
      `Faux. Une carotte osseuse est obtenue lors d'une biopsie ostéomédullaire, pas d'un myélogramme.`
    ]
  ),

  Q(5,
    `Parmi les propositions suivantes, lesquelles sont exactes ?`,
    [
      `Les schizocytes sont des hématies en forme de goutte.`,
      `Les drépanocytes sont observés chez les patients présentant un trait drépanocytaire (A/S).`,
      `Les corps de Jolly sont des restes d’ARN.`,
      `La recherche de schizocytes est réalisée devant toute suspicion de microangiopathie thrombotique.`,
      `Les thalassémies sont des anomalies quantitatives des chaînes de globine.`
    ],
    'DE',
    [
      `Faux. Les schizocytes sont des fragments d'hématies. Les hématies en goutte sont des dacryocytes.`,
      `Faux selon la grille. Le trait drépanocytaire AS est généralement asymptomatique et ne présente pas habituellement de drépanocytes sur un frottis standard.`,
      `Faux. Les corps de Howell-Jolly correspondent à des résidus d'ADN nucléaire.`,
      `Vrai. La recherche de schizocytes est essentielle devant une suspicion de microangiopathie thrombotique.`,
      `Vrai. Les thalassémies résultent d'une diminution de la production d'une ou plusieurs chaînes de globine.`
    ]
  ),

  Q(6,
    `Concernant les hématies :`,
    [
      `leur durée de vie est de 60 jours`,
      `leur diamètre est d’environ 7 µm`,
      `elles possèdent un noyau`,
      `elles transportent principalement du CO2`,
      `elles contiennent de l’hémoglobine`
    ],
    'BE',
    [
      `Faux. Les hématies ont une durée de vie physiologique d'environ 120 jours.`,
      `Vrai. Leur diamètre est d'environ 7 à 8 µm.`,
      `Faux. Les hématies matures sont anucléées.`,
      `Faux selon la grille. Leur fonction principale est le transport du dioxygène, même si elles participent aussi au transport du CO2.`,
      `Vrai. L'hémoglobine constitue la principale protéine des globules rouges.`
    ]
  ),

  Q(7,
    `L’hémoglobine A est :`,
    [
      `formée de deux chaînes de globine alpha et deux chaînes de globine bêta`,
      `la forme embryonnaire de l’hémoglobine`,
      `essentielle au transport de l’oxygène`,
      `responsable d’une falciformation des hématies`,
      `la forme majoritaire chez l’adulte`
    ],
    'ACE',
    [
      `Vrai. L'HbA est composée de deux chaînes alpha et de deux chaînes bêta.`,
      `Faux. L'HbA est l'hémoglobine majoritaire chez l'adulte.`,
      `Vrai. L'hémoglobine A assure le transport du dioxygène dans le sang.`,
      `Faux. La falciformation caractéristique de la drépanocytose est liée à l'HbS.`,
      `Vrai. L'HbA représente environ 95 à 98 % de l'hémoglobine adulte.`
    ]
  ),

  Q(8,
    `L’hémolyse intravasculaire est caractérisée par :`,
    [
      `une augmentation de l’haptoglobine`,
      `une augmentation de la bilirubine libre`,
      `des réticulocytes < 120 G/L`,
      `une hémoglobinurie`,
      `une augmentation des LDH`
    ],
    'BDE',
    [
      `Faux. L'haptoglobine diminue car elle se lie à l'hémoglobine libre circulante.`,
      `Vrai. La destruction des hématies augmente la production de bilirubine non conjuguée.`,
      `Faux. Une hémolyse installée entraîne habituellement une réticulocytose supérieure à 120 G/L.`,
      `Vrai. L'hémoglobine libérée dans le plasma peut être éliminée dans les urines.`,
      `Vrai. Les LDH augmentent lors de la destruction des globules rouges.`
    ]
  ),

  Q(9,
    `Concernant la ferritine :`,
    [
      `c’est une protéine de transport du fer`,
      `elle est dosée pour évaluer les réserves en fer`,
      `une augmentation est observée en cas d’inflammation`,
      `une diminution objective une carence martiale`,
      `elle est indispensable à la synthèse d’hémoglobine`
    ],
    'BCD',
    [
      `Faux. La transferrine est la principale protéine de transport plasmatique du fer.`,
      `Vrai. La ferritinémie est un marqueur des réserves en fer de l'organisme.`,
      `Vrai. La ferritine est également une protéine de la phase aiguë de l'inflammation.`,
      `Vrai. Une ferritine basse est fortement évocatrice d'une carence martiale.`,
      `Faux. La ferritine stocke le fer ; c'est le fer lui-même qui participe à la synthèse de l'hème.`
    ]
  ),

  Q(10,
    `La granulopoïèse est stimulée par :`,
    [
      `le G-CSF`,
      `l’érythropoïétine`,
      `le M-CSF`,
      `la thrombopoïétine`,
      `le GM-CSF`
    ],
    'AE',
    [
      `Vrai. Le G-CSF stimule principalement la production et la maturation des neutrophiles.`,
      `Faux. L'EPO stimule principalement l'érythropoïèse.`,
      `Faux selon la grille. Le M-CSF agit principalement sur la lignée monocytaire.`,
      `Faux selon la grille. La TPO est principalement associée à la mégacaryopoïèse.`,
      `Vrai. Le GM-CSF stimule plusieurs populations de progéniteurs myéloïdes, notamment granulocytaires.`
    ]
  ),

  Q(11,
    `Les polynucléaires neutrophiles :`,
    [
      `sont les premières cellules recrutées en cas d’infection bactérienne`,
      `représentent la majorité des leucocytes circulants chez un sujet sain`,
      `ont une durée de vie de plusieurs semaines dans le sang`,
      `ont une capacité de phagocytose`,
      `sont impliqués dans les réactions allergiques`
    ],
    'ABD',
    [
      `Vrai. Les PNN interviennent précocement dans les réponses inflammatoires aiguës bactériennes.`,
      `Vrai. Ils constituent habituellement la population leucocytaire majoritaire chez l'adulte.`,
      `Faux. Leur durée de séjour dans le sang est beaucoup plus courte que plusieurs semaines.`,
      `Vrai. Ils sont capables de phagocyter et de détruire des microorganismes.`,
      `Faux selon la grille. Les éosinophiles et basophiles sont davantage associés aux réactions allergiques.`
    ]
  ),

  Q(12,
    `Parmi ces propositions, lesquelles appartiennent aux organes lymphoïdes primaires ?`,
    [
      `le thymus`,
      `la rate`,
      `la moelle osseuse`,
      `les amygdales`,
      `les vaisseaux lymphatiques`
    ],
    'AC',
    [
      `Vrai. Le thymus permet notamment la maturation des lymphocytes T.`,
      `Faux. La rate est un organe lymphoïde secondaire.`,
      `Vrai. La moelle osseuse est notamment le lieu de maturation des lymphocytes B.`,
      `Faux. Les amygdales appartiennent au tissu lymphoïde secondaire.`,
      `Faux. Les vaisseaux lymphatiques assurent le transport de la lymphe.`
    ]
  ),

  Q(13,
    `Quelles situations peuvent entraîner une fausse anémie par hémodilution ?`,
    [
      `une grossesse`,
      `une splénomégalie`,
      `une insuffisance cardiaque`,
      `une gammapathie monoclonale`,
      `un séjour en haute altitude`
    ],
    'ABCD',
    [
      `Vrai. Pendant la grossesse, l'expansion du volume plasmatique peut dépasser l'augmentation de la masse globulaire.`,
      `Vrai selon la grille. Une splénomégalie importante peut s'accompagner d'une modification des volumes circulants.`,
      `Vrai. Certaines insuffisances cardiaques entraînent une rétention hydrosodée avec hémodilution.`,
      `Vrai selon la grille officielle. Cette proposition est à interpréter dans le cadre du cours.`,
      `Faux. La haute altitude stimule la production d'EPO et favorise plutôt une augmentation de la masse globulaire.`
    ]
  ),

  Q(14,
    `Quels signes cliniques peuvent être retrouvés en cas d’anémie ?`,
    [
      `une pâleur cutanéo-muqueuse`,
      `une asthénie`,
      `une dyspnée`,
      `une tachycardie`,
      `des céphalées`
    ],
    'ABCDE',
    [
      `Vrai. La baisse de l'hémoglobine peut provoquer une pâleur cutanéo-muqueuse.`,
      `Vrai. L'asthénie est l'un des symptômes fréquents de l'anémie.`,
      `Vrai. La dyspnée peut apparaître notamment à l'effort.`,
      `Vrai. La tachycardie est un mécanisme de compensation de la diminution du transport d'oxygène.`,
      `Vrai. Les céphalées peuvent faire partie des manifestations fonctionnelles d'une anémie.`
    ]
  ),

  Q(15,
    `Quelles situations peuvent entraîner une polyglobulie sur un hémogramme ?`,
    [
      `une maladie de Vaquez`,
      `une hypoxie chronique`,
      `une tumeur sécrétrice d’EPO`,
      `une inflammation aiguë`,
      `une hyperthyroïdie`
    ],
    'ABC',
    [
      `Vrai. La maladie de Vaquez est un syndrome myéloprolifératif caractérisé notamment par une augmentation de la masse globulaire.`,
      `Vrai. L'hypoxie chronique peut stimuler la sécrétion d'EPO.`,
      `Vrai. Une production ectopique d'EPO peut provoquer une polyglobulie secondaire.`,
      `Faux. L'inflammation aiguë ne constitue pas une cause habituelle de polyglobulie.`,
      `Faux selon la grille. L'hyperthyroïdie n'est pas une cause classique de polyglobulie dans ce cadre.`
    ]
  ),

  Q(16,
    `L’activation des plaquettes sanguines est associée à :`,
    [
      `une élévation du calcium intracytoplasmique`,
      `la synthèse de thromboxane A2 grâce à une gamma-carboxylase`,
      `la libération d’ADP et de sérotonine contenus dans les granules denses`,
      `une modification de la conformation du complexe GPIb-IX-V`,
      `la réexposition de phospholipides cationiques à la surface des plaquettes`
    ],
    'AC',
    [
      `Vrai. L'augmentation du calcium intracellulaire participe à l'activation plaquettaire.`,
      `Faux. Le thromboxane A2 est synthétisé par la voie COX-1 et thromboxane synthase.`,
      `Vrai. Les granules denses libèrent notamment de l'ADP et de la sérotonine.`,
      `Faux. Le changement de conformation classiquement recherché concerne surtout GPIIbIIIa.`,
      `Faux. Le flip-flop expose des phospholipides anioniques, notamment la phosphatidylsérine.`
    ]
  ),

  Q(17,
    `Le facteur Willebrand (VWF) :`,
    [
      `est une protéine multimérique`,
      `est majoritairement synthétisé par l’hépatocyte`,
      `est associé physiologiquement avec le FVIII`,
      `permet l’adhésion des plaquettes à l’endothélium vasculaire`,
      `contribue à l’agrégation plaquettaire en cas de forces de cisaillement élevées`
    ],
    'ACE',
    [
      `Vrai. Le VWF est constitué de multimères de tailles variables.`,
      `Faux. Il est synthétisé par les cellules endothéliales et les mégacaryocytes.`,
      `Vrai. Le VWF transporte et stabilise le facteur VIII dans la circulation.`,
      `Faux selon la grille. Le VWF intervient surtout dans l'adhésion au sous-endothélium exposé, notamment au collagène.`,
      `Vrai. Le VWF contribue aux interactions plaquettaires sous fortes contraintes de cisaillement.`
    ]
  ),

  Q(18,
    `Parmi les antiagrégants plaquettaires suivants, lesquels ont une durée d’action décrite de sept jours ?`,
    [
      `clopidogrel`,
      `ticagrelor`,
      `prasugrel`,
      `acide acétylsalicylique`,
      `cangrelor`
    ],
    'ACD',
    [
      `Vrai. Le clopidogrel inhibe irréversiblement P2Y12 pendant la durée de vie des plaquettes.`,
      `Faux. Le ticagrelor est un antagoniste réversible de P2Y12.`,
      `Vrai. Le prasugrel inhibe irréversiblement les récepteurs P2Y12 plaquettaires.`,
      `Vrai. L'aspirine inhibe irréversiblement la COX-1 des plaquettes.`,
      `Faux. Le cangrelor est un inhibiteur réversible de P2Y12 à action très courte.`
    ]
  ),

  Q(19,
    `Concernant la thrombine, quelles sont les propositions exactes ?`,
    [
      `la synthèse de sa proenzyme est dépendante de la vitamine K`,
      `elle clive les fibrinopeptides FPA et FPB du fibrinogène`,
      `elle permet de lier entre eux les domaines D des monomères de fibrine`,
      `elle amplifie la coagulation en activant les facteurs V, IX et XI`,
      `liée à la thrombomoduline, elle active la fibrinolyse`
    ],
    'AB',
    [
      `Vrai. La prothrombine, ou facteur II, est une protéine vitamine K-dépendante.`,
      `Vrai. La thrombine clive les fibrinopeptides A et B pour transformer le fibrinogène en fibrine.`,
      `Faux. La stabilisation covalente de la fibrine est principalement assurée par le facteur XIIIa.`,
      `Faux. La thrombine active notamment les facteurs V, VIII et XI, mais pas le facteur IX dans la liste classique.`,
      `Faux. Le complexe thrombine-thrombomoduline active principalement la protéine C.`
    ]
  ),

  Q(20,
    `Vous voyez en consultation un homme de 27 ans dans le cadre d’un bilan préopératoire avant une amygdalectomie. Il vous rapporte plusieurs épisodes d’épistaxis et de gingivorragies depuis l’enfance. L’hémogramme et le bilan d’hémostase réalisés montrent les résultats suivants :
Hémoglobine = 142 g/L, Plaquettes = 210 G/L, Leucocytes = 8,6 G/L
TP = 86 %, TCA (ratio) = 1,15 et fibrinogène = 2,4 g/L.
Parmi les hypothèses diagnostiques suivantes, lesquelles sont compatibles avec l’ensemble du tableau clinico-biologique ?`,
    [
      `une pathologie acquise de la coagulation`,
      `une maladie de Willebrand`,
      `une thrombopathie constitutionnelle`,
      `un déficit en facteur XI`,
      `un anticoagulant circulant de type lupique`
    ],
    'BC',
    [
      `Faux. Les manifestations présentes depuis l'enfance orientent davantage vers une anomalie constitutionnelle.`,
      `Vrai. La maladie de Willebrand peut provoquer des saignements cutanéo-muqueux avec numération plaquettaire normale.`,
      `Vrai. Une thrombopathie constitutionnelle peut provoquer des troubles fonctionnels plaquettaires malgré une numération normale.`,
      `Faux selon la grille. Un déficit en facteur XI est davantage associé aux troubles de la coagulation plasmatique.`,
      `Faux. Les anticoagulants lupiques sont principalement associés à un risque thrombotique.`
    ]
  ),

  Q(21,
    `Concernant les D-dimères :`,
    [
      `ils sont générés au cours de la fibrinoformation`,
      `leur dosage a une très bonne spécificité pour diagnostiquer les thromboses veineuses`,
      `leur concentration plasmatique est inférieure à 500 ng/mL chez le sujet sain de moins de 50 ans`,
      `ils sont fortement augmentés au cours d’une coagulation intravasculaire disséminée`,
      `ils sont dégradés par la plasmine`
    ],
    'CD',
    [
      `Faux. Les D-dimères sont produits lors de la dégradation de la fibrine réticulée.`,
      `Faux. Leur dosage possède une bonne sensibilité mais une faible spécificité pour la maladie thromboembolique veineuse.`,
      `Vrai. Le seuil habituel de référence est de 500 ng/mL FEU chez les sujets de moins de 50 ans.`,
      `Vrai. La CIVD peut provoquer une élévation importante des D-dimères.`,
      `Faux. La plasmine génère les D-dimères en dégradant la fibrine réticulée.`
    ]
  ),

  Q(22,
    `Concernant la protéine C et la protéine S, quelles sont les propositions exactes ?`,
    [
      `leur synthèse est dépendante de la vitamine K`,
      `elles permettent d’inhiber les facteurs Va et VIIIa`,
      `leur action est potentialisée par l’héparine`,
      `la protéine S est activée par la thrombine liée à la thrombomoduline`,
      `la protéine C circule en partie liée à la C4b-binding protein (C4b-BP)`
    ],
    'AB',
    [
      `Vrai. Les protéines C et S sont des protéines anticoagulantes vitamine K-dépendantes.`,
      `Vrai. La protéine C activée, avec son cofacteur protéine S, inactive les facteurs Va et VIIIa.`,
      `Faux. L'héparine potentialise principalement l'action de l'antithrombine.`,
      `Faux. C'est la protéine C qui est activée par le complexe thrombine-thrombomoduline.`,
      `Faux. C'est la protéine S qui circule en partie liée à la C4b-binding protein.`
    ]
  ),

  Q(23,
    `Vous recevez en consultation un patient traité par la warfarine pour une maladie thromboembolique veineuse. Pour son suivi, vous prescrivez un INR.`,
    [
      `il nécessite un prélèvement de sang sur citrate de sodium`,
      `il est calculé en tenant compte du temps de Quick`,
      `il est exprimé en pourcentage`,
      `il atteint la valeur cible souhaitée dès le 3ème jour de traitement`,
      `il doit être mesuré après toute modification du traitement médical du patient`
    ],
    'ABE',
    [
      `Vrai. Le bilan d'hémostase est réalisé sur un prélèvement anticoagulé au citrate.`,
      `Vrai. L'INR est calculé à partir du rapport des temps de prothrombine et de l'ISI du réactif.`,
      `Faux. L'INR est un rapport standardisé sans unité, contrairement au TP exprimé en pourcentage.`,
      `Faux. L'effet des AVK s'installe progressivement et la cible n'est pas nécessairement atteinte à J3.`,
      `Vrai. Une modification thérapeutique peut modifier l'effet de la warfarine et justifier un nouveau contrôle.`
    ]
  ),

  Q(24,
    `Concernant l’hémostase primaire, quelles sont les propositions exactes ?`,
    [
      `la première étape consiste en une vasodilatation réflexe du vaisseau lésé`,
      `l’adhésion plaquettaire a lieu après l’activation plaquettaire`,
      `l’adhésion des plaquettes au sous-endothélium met en jeu une interaction entre GPIaIIa et le collagène`,
      `l’adhésion des plaquettes au sous-endothélium met en jeu une interaction entre GPIIbIIIa et le fibrinogène`,
      `le phénomène de flip-flop est indispensable à la fixation des facteurs vitamine K-dépendants à la surface des plaquettes`
    ],
    'CE',
    [
      `Faux. La première étape est une vasoconstriction réflexe.`,
      `Faux. L'adhésion précède classiquement l'activation et la sécrétion plaquettaires.`,
      `Vrai. L'intégrine GPIaIIa participe à l'interaction des plaquettes avec le collagène.`,
      `Faux selon la grille. L'interaction GPIIbIIIa-fibrinogène joue principalement un rôle dans l'agrégation plaquettaire.`,
      `Vrai. Le flip-flop expose des phospholipides anioniques permettant l'assemblage des complexes de coagulation.`
    ]
  ),

  Q(25,
    `Concernant les anticoagulants oraux directs (AOD), quelles sont les propositions exactes ?`,
    [
      `l’apixaban allonge fortement le temps de céphaline avec activateur`,
      `le dabigatran est un substrat de la P-glycoprotéine`,
      `le dabigatran diminue la synthèse du facteur II`,
      `le rivaroxaban est principalement éliminé par voie rénale`,
      `aucune surveillance biologique de l’hémostase n’est recommandée chez les patients traités`
    ],
    'BE',
    [
      `Faux. L'apixaban peut peu modifier les tests usuels, qui ne quantifient pas correctement son effet.`,
      `Vrai. Le dabigatran est un substrat de la P-glycoprotéine.`,
      `Faux. Le dabigatran inhibe directement la thrombine sans diminuer sa synthèse.`,
      `Faux selon la grille. Le rivaroxaban possède une élimination mixte, rénale et non rénale.`,
      `Vrai. Les AOD ne nécessitent pas de surveillance biologique systématique de leur activité anticoagulante en routine.`
    ]
  ),

  Q(26,
    `Un patient de 85 ans ayant un antécédent de RAI positive anti-JK1 présente ce jour une RAI négative. Un CGR est prescrit, quelles qualifications/transformations prévoir ?`,
    [
      `non phénotypé`,
      `phénotypé étendu`,
      `irradié`,
      `compatibilisé`,
      `déplasmatisé`
    ],
    'BD',
    [
      `Faux. L'antécédent d'allo-immunisation reste pertinent même si la RAI actuelle est négative.`,
      `Vrai. Un CGR adapté au phénotype et dépourvu de l'antigène correspondant doit être sélectionné.`,
      `Faux. L'irradiation prévient notamment la réaction du greffon contre l'hôte transfusionnelle et n'est pas indiquée par cet antécédent seul.`,
      `Vrai. La compatibilisation est indiquée chez un patient présentant un antécédent d'anticorps anti-érythrocytaires.`,
      `Faux. La déplasmatisation est notamment utilisée dans certaines situations allergiques sévères.`
    ]
  ),

  Q(27,
    `Quelles sont les méthodes utilisées pour sécuriser les PFC vis-à-vis des agents pathogènes ?`,
    [
      `dilution du plasma`,
      `inactivation par amotosalen + UVA`,
      `mise en quarantaine entre 2 dons`,
      `PFC compatibilisés`,
      `lyophilisation`
    ],
    'BC',
    [
      `Faux. La dilution n'est pas une méthode reconnue de sécurisation virologique du PFC.`,
      `Vrai. L'amotosalen associé aux UVA permet d'inactiver certains agents pathogènes.`,
      `Vrai. La quarantaine permet d'attendre les résultats de contrôles biologiques ultérieurs du donneur.`,
      `Faux. La compatibilisation concerne la sécurité immunohématologique, pas directement l'inactivation des agents pathogènes.`,
      `Faux selon la grille. La lyophilisation est un procédé de conservation et ne constitue pas à elle seule la méthode de sécurisation attendue ici.`
    ]
  ),

  Q(28,
    `Donner les situations de statut immuno-hématologique permettant la délivrance de PSL hors contexte d’urgence vitale :`,
    [
      `Une détermination de phénotype ABO RH KEL1 validée est suffisante pour la délivrance de CGR`,
      `Deux déterminations de phénotype ABO RH KEL1 validées sont suffisantes pour la délivrance de concentrés de plaquettes`,
      `Une RAI de moins de 72 h est nécessaire pour la délivrance de plasma frais congelé (PFC)`,
      `Une détermination de phénotype ABO RH KEL1 validée et une détermination de phénotype ABO RH KEL1 et RAI en cours de réalisation sont suffisantes pour la délivrance de CGR`,
      `La réalisation d’une RAI est obligatoire pour une transfusion sécuritaire de CGR`
    ],
    'BE',
    [
      `Faux. Une seule détermination n'est pas suffisante pour la délivrance standard de CGR dans ce cadre.`,
      `Vrai selon la grille. Les deux déterminations permettent d'établir le groupage nécessaire à la délivrance plaquettaire.`,
      `Faux. Une RAI n'est pas systématiquement nécessaire pour transfuser du plasma.`,
      `Faux. Une seconde détermination encore en cours ne constitue pas le statut validé exigé hors urgence vitale.`,
      `Vrai. La recherche d'anticorps irréguliers fait partie du bilan prétransfusionnel pour la délivrance de CGR.`
    ]
  ),

  // QUESTION 29 ANNULÉE SUR LA GRILLE OFFICIELLE.
  //
  // 29) Les explorations pré transfusionnelles et les
  // renseignements cliniques nécessaires à la
  // délivrance des concentrés de plaquettes sont :
  //
  // a) deux déterminations de groupage ABO-RH1
  // b) deux déterminations de phénotypage RH-KEL1
  // c) une numération plaquettaire la plus proche
  //    possible de l'acte transfusionnel
  // d) une RAI de moins de 72H
  // e) le poids du patient
  //
  // Aucune réponse attribuée. Question exclue du score.

  Q(30,
    `Quelles sont les indications de prescription de CGR irradiés ?`,
    [
      `greffe récente de cellules souches hématopoïétiques`,
      `transfusion foetale`,
      `enfant âgé de 3 ans`,
      `antécédent d'allergie grave lors d'une précédente transfusion`,
      `greffe hépatique`
    ],
    'AB',
    [
      `Vrai. Certaines greffes récentes de CSH nécessitent des PSL irradiés pour prévenir la GVH transfusionnelle.`,
      `Vrai. La transfusion fœtale est une indication classique de CGR irradiés.`,
      `Faux. L'âge de trois ans, isolément, ne constitue pas une indication d'irradiation.`,
      `Faux. Les antécédents de réactions allergiques graves orientent éventuellement vers des produits déplasmatisés.`,
      `Faux. Une greffe hépatique seule ne constitue pas une indication systématique.`
    ]
  ),

  Q(31,
    `Parmi les propositions suivantes, où l’hématopoïèse se déroule-t-elle en premier in utero ?`,
    [
      `La moelle osseuse`,
      `Le thymus`,
      `La région para-aortique`,
      `Le foie`,
      `La rate`
    ],
    'C',
    [
      `Faux. La moelle osseuse devient un site hématopoïétique plus tardivement.`,
      `Faux. Le thymus intervient principalement dans la maturation des lymphocytes T.`,
      `Vrai selon la grille. La région para-aortique est un site précoce d'émergence des CSH définitives. Attention : l'hématopoïèse primitive débute dans le sac vitellin.`,
      `Faux. Le foie devient un site majeur d'hématopoïèse fœtale après les premières étapes.`,
      `Faux. La rate participe à l'hématopoïèse fœtale plus tardivement.`
    ]
  ),

  Q(32,
    `Parmi les propositions suivantes, quel est le facteur de croissance multipotent ?`,
    [
      `La thrombopoïétine`,
      `L’interleukine 3`,
      `L’érythropoïétine`,
      `L’interleukine 6`,
      `L’interleukine 4`
    ],
    'B',
    [
      `Faux selon la classification retenue. La TPO intervient particulièrement dans la mégacaryopoïèse.`,
      `Vrai. L'IL-3 agit sur plusieurs populations de progéniteurs hématopoïétiques.`,
      `Faux. L'EPO agit principalement sur la lignée érythroïde.`,
      `Faux selon la grille. L'IL-6 possède de nombreuses fonctions immunitaires et inflammatoires.`,
      `Faux selon la grille. L'IL-4 est surtout associée à la régulation des réponses immunitaires.`
    ]
  ),

  Q(33,
    `Au cours de la maturation érythroblastique, l’ordre d’apparition des cellules est le suivant :`,
    [
      `Proérythroblaste – érythroblaste basophile – érythroblaste polychromatophile – érythroblaste acidophile`,
      `Érythroblaste basophile – proérythroblaste – érythroblaste polychromatophile – érythroblaste acidophile`,
      `Érythroblaste polychromatophile – érythroblaste acidophile – proérythroblaste – érythroblaste basophile`,
      `Érythroblaste acidophile – érythroblaste basophile – érythroblaste polychromatophile – proérythroblaste`,
      `Érythroblaste polychromatophile – érythroblaste basophile – proérythroblaste – érythroblaste acidophile`
    ],
    'A',
    [
      `Vrai. C'est la succession normale des quatre stades érythroblastiques.`,
      `Faux. Le proérythroblaste apparaît avant l'érythroblaste basophile.`,
      `Faux. Cette séquence ne respecte pas la maturation progressive.`,
      `Faux. L'érythroblaste acidophile constitue le stade érythroblastique le plus mature de cette liste.`,
      `Faux. L'érythroblaste polychromatophile apparaît après l'érythroblaste basophile.`
    ]
  ),

  Q(34,
    `L’ensemble des éléments suivants sont nécessaires à l’érythropoïèse, sauf un. Lequel ?`,
    [
      `Le fer`,
      `La vitamine B12`,
      `La vitamine B9`,
      `L’érythropoïétine`,
      `La vitamine K`
    ],
    'E',
    [
      `Faux. Le fer est nécessaire à la synthèse de l'hème.`,
      `Faux. La vitamine B12 intervient dans la synthèse de l'ADN.`,
      `Faux. La vitamine B9 est indispensable à la prolifération des précurseurs érythroïdes.`,
      `Faux. L'EPO stimule la survie et la différenciation des progéniteurs érythroïdes.`,
      `Vrai. La vitamine K intervient principalement dans la synthèse de protéines de la coagulation, pas spécifiquement dans l'érythropoïèse.`
    ]
  ),

  Q(35,
    `Sur un hémogramme, un patient présente des globules rouges à 3 T/L et des réticulocytes à 10%. Quelle est la valeur absolue des réticulocytes ?`,
    [
      `0,3 G/L`,
      `3 G/L`,
      `30 G/L`,
      `300 G/L`,
      `3000 G/L`
    ],
    'D',
    [
      `Faux. Cela ne correspond pas au calcul à partir de 3 T/L et 10 %.`,
      `Faux. La conversion de 3 T/L en G/L doit être prise en compte.`,
      `Faux. Cette valeur est dix fois inférieure au résultat attendu.`,
      `Vrai. 3 T/L = 3000 G/L ; 3000 × 0,10 = 300 G/L.`,
      `Faux. Cette valeur correspondrait à l'ensemble des hématies exprimées en G/L.`
    ]
  ),

  Q(36,
    `A quel élément se fixe la vitamine B12 pour être transportée dans l’intestin grêle avant d’être absorbée ?`,
    [
      `L’haptocorrine`,
      `Le facteur intrinsèque`,
      `La transcobalamine II`,
      `La cubuline`,
      `La méthionine`
    ],
    'B',
    [
      `Faux. L'haptocorrine lie initialement la vitamine B12, notamment dans l'estomac.`,
      `Vrai. Le facteur intrinsèque permet le transport de la B12 et son absorption au niveau de l'iléon terminal.`,
      `Faux. La transcobalamine II assure principalement le transport sanguin de la B12 après absorption.`,
      `Faux. La cubiline est un élément du récepteur iléal du complexe B12-facteur intrinsèque.`,
      `Faux. La méthionine est un acide aminé dont le métabolisme dépend notamment de la B12.`
    ]
  ),

  Q(37,
    `Après la naissance, l’hématopoïèse se déroule :`,
    [
      `dans le foie`,
      `dans la rate`,
      `dans la moelle épinière`,
      `dans la moelle osseuse`,
      `dans les ganglions lymphatiques`
    ],
    'D',
    [
      `Faux. Le foie est un site majeur d'hématopoïèse durant la vie fœtale.`,
      `Faux. La rate n'est pas le site physiologique principal de l'hématopoïèse après la naissance.`,
      `Faux. La moelle épinière est du tissu nerveux.`,
      `Vrai. La moelle osseuse constitue le site principal de l'hématopoïèse postnatale.`,
      `Faux. Les ganglions lymphatiques sont des organes lymphoïdes secondaires.`
    ]
  ),

  Q(38,
    `Parmi les cellules suivantes, laquelle est le premier précurseur des polynucléaires neutrophiles ?`,
    [
      `CFU-G`,
      `CFU-GM`,
      `promyélocyte`,
      `myélocyte`,
      `myéloblaste`
    ],
    'E',
    [
      `Faux. CFU-G correspond à un progéniteur granulocytaire.`,
      `Faux. CFU-GM est un progéniteur granulomonocytaire.`,
      `Faux. Le promyélocyte apparaît après le myéloblaste.`,
      `Faux. Le myélocyte est un stade de maturation ultérieur.`,
      `Vrai. Le myéloblaste est le premier précurseur morphologiquement identifiable de la lignée granulocytaire.`
    ]
  ),

  Q(39,
    `Une anémie régénérative est classiquement observée au cours :`,
    [
      `d’une carence en fer`,
      `d’une insuffisance rénale chronique`,
      `d’une anémie hémolytique`,
      `d’une carence en vitamine B9`,
      `d’une leucémie aiguë`
    ],
    'C',
    [
      `Faux. Une carence martiale entraîne habituellement une anémie arégénérative.`,
      `Faux. L'insuffisance rénale chronique entraîne une diminution de production d'EPO.`,
      `Vrai. L'hémolyse stimule la production médullaire de réticulocytes lorsque la moelle est fonctionnelle.`,
      `Faux. La carence en B9 perturbe la synthèse de l'ADN et entraîne une anémie arégénérative.`,
      `Faux. Une leucémie aiguë peut provoquer une insuffisance médullaire avec anémie arégénérative.`
    ]
  ),

  Q(40,
    `Quel examen devez-vous demander devant une hyperlymphocytose persistante (> 3 mois) chez un adulte ?`,
    [
      `un myélogramme`,
      `un immunophénotypage des lymphocytes sanguins`,
      `une biopsie ostéo-médullaire`,
      `le dosage de la vitamine B12`,
      `une ponction ganglionnaire`
    ],
    'B',
    [
      `Faux. Le myélogramme n'est pas l'examen initial privilégié devant une hyperlymphocytose chronique.`,
      `Vrai. L'immunophénotypage permet de caractériser une éventuelle population lymphocytaire clonale.`,
      `Faux. La biopsie ostéomédullaire n'est pas systématiquement indiquée initialement.`,
      `Faux. Le dosage de vitamine B12 n'explore pas une hyperlymphocytose.`,
      `Faux. Une ponction ganglionnaire n'est pas l'examen de première intention en l'absence d'indication spécifique.`
    ]
  ),

  Q(41,
    `Quel marqueur permet d’identifier les lymphocytes T ?`,
    [
      `CD3`,
      `CD19`,
      `CD20`,
      `CD33`,
      `CD14`
    ],
    'A',
    [
      `Vrai. CD3 est un marqueur caractéristique des lymphocytes T.`,
      `Faux. CD19 est un marqueur de la lignée lymphocytaire B.`,
      `Faux. CD20 est également exprimé par de nombreux lymphocytes B.`,
      `Faux. CD33 est un marqueur associé principalement à la lignée myéloïde.`,
      `Faux. CD14 est un marqueur caractéristique de la lignée monocytaire.`
    ]
  ),

  Q(42,
    `Quel est le risque majeur devant une agranulocytose ?`,
    [
      `décompensation cardio-respiratoire`,
      `infection bactérienne`,
      `compression médullaire`,
      `hémorragie intracrânienne`,
      `hémolyse intravasculaire`
    ],
    'B',
    [
      `Faux. Ce n'est pas la complication directement caractéristique de l'agranulocytose.`,
      `Vrai. L'absence de neutrophiles expose à des infections bactériennes graves et rapidement évolutives.`,
      `Faux. La compression médullaire n'est pas une conséquence directe de l'agranulocytose.`,
      `Faux. Le risque hémorragique intracrânien est surtout associé aux thrombopénies profondes.`,
      `Faux. L'hémolyse intravasculaire concerne la destruction des globules rouges.`
    ]
  ),

  Q(43,
    `Un homme de 65 ans, asymptomatique, présente l’hémogramme suivant :
Hématies                        2,7 T/L
Hémoglobine                     140 g/L
VGM                             90 fL
CCMH                            33 %
Plaquettes                      550 G/L
Leucocytes                      80 G/L
Polynucléaires neutrophiles     70 %       56 G/L
Polynucléaires éosinophiles     0%         0,0 G/L
Polynucléaires basophiles       2%         1,6 G/L
Lymphocytes                     3%         2,4 G/L
Monocytes                       1%         0,8 G/L
Promyélocytes                   5%
Myélocytes                      9%
Métamyélocytes                  10 %
Parmi ces propositions, quelle anomalie observez-vous ?`,
    [
      `une anémie`,
      `une agranulocytose`,
      `une myélémie`,
      `une hyperlymphocytose`,
      `une pancytopénie`
    ],
    'C',
    [
      `Faux selon la grille. L'hémoglobine à 140 g/L ne définit pas une anémie chez cet homme.`,
      `Faux. Les neutrophiles sont très augmentés, à 56 G/L.`,
      `Vrai. La présence de promyélocytes, myélocytes et métamyélocytes dans le sang correspond à une myélémie.`,
      `Faux. Les lymphocytes absolus sont à 2,4 G/L, sans hyperlymphocytose.`,
      `Faux. Il existe une hyperleucocytose et une thrombocytose, pas une pancytopénie.`
    ]
  ),

  Q(44,
    `Un homme de 65 ans, asymptomatique, présente l’hémogramme suivant :
Hématies                         2,7 T/L
Hémoglobine                      140 g/L
VGM                              90 fL
CCMH                             33 %
Plaquettes                       550 G/L
Leucocytes                       80 G/L
Polynucléaires neutrophiles      70 %      56 G/L
Polynucléaires éosinophiles      0 %/      0,0 G/L
Polynucléaires basophiles        2%        1,6 G/L
Lymphocytes                      3%        2,4 G/L
Monocytes                        1%        0,8 G/L
Promyélocytes                    5%
Myélocytes                       9%
Métamyélocytes                   10 %
Quelle pathologie recherchez-vous en priorité ?`,
    [
      `une leucémie aigüe`,
      `une leucémie lymphoïde chronique`,
      `un myélome multiple`,
      `un syndrome myélodysplasique`,
      `une leucémie myéloïde chronique`
    ],
    'E',
    [
      `Faux selon la grille. Le tableau évoque surtout une prolifération myéloïde chronique.`,
      `Faux. Une LLC entraîne principalement une hyperlymphocytose.`,
      `Faux. Le myélome multiple n'explique pas habituellement cette myélémie avec basophilie.`,
      `Faux. Les syndromes myélodysplasiques entraînent plus souvent des cytopénies et des dysplasies.`,
      `Vrai. Hyperleucocytose neutrophile, myélémie, basophilie et thrombocytose orientent fortement vers une LMC.`
    ]
  ),

  Q(45,
    `Une femme de 62 ans présente l’hémogramme suivant :
Hématies                           2,7 T/L
Hémoglobine                        85 g/L
Hématocrite                        25%
VGM                                92 fL
CCMH                               32%
Plaquettes                         80 G/L
Leucocytes                         20 G/L
polynucléaires neutrophiles        30%       6 G/L
polynucléaires éosinophiles        0%        0 G/L
polynucléaires basophiles          0%        0 G/L
lymphocytes                        5%        1 G/L
monocytes                          5%        1 G/L
leucoblastes                       60%
Réticulocytes                      14 G/L
Quel examen réalisez-vous en première intention devant cet hémogramme ?`,
    [
      `un immunophénotypage des lymphocytes sanguins`,
      `un myélogramme`,
      `une recherche du transcrit de fusion BCR::ABL`,
      `une recherche de la mutation JAK2 V617F`,
      `une biopsie ostéo-médullaire`
    ],
    'B',
    [
      `Faux. L'immunophénotypage lymphocytaire n'est pas l'examen morphologique initial attendu ici.`,
      `Vrai. La présence de 60 % de leucoblastes oriente vers une leucémie aiguë et justifie un myélogramme.`,
      `Faux. BCR::ABL1 est surtout recherché devant une suspicion de leucémie myéloïde chronique, même s'il peut être recherché dans certaines leucémies aiguës.`,
      `Faux. JAK2 V617F est associé principalement à certains syndromes myéloprolifératifs.`,
      `Faux. La biopsie ostéomédullaire n'est pas privilégiée initialement si un myélogramme est réalisable.`
    ]
  ),

  Q(46,
    `Concernant la mégacaryocytopoïèse, quelle est la proposition exacte ?`,
    [
      `les mégacaryocytes sont de grandes cellules anucléées`,
      `un mégacaryocyte mature permet de produire 32 plaquettes`,
      `les mégacaryocytes sont granuleux et plaquettogènes à partir du stade 32N`,
      `les mégacaryocytes synthétisent du facteur Willebrand`,
      `la mégacaryocytopoïèse implique un mécanisme d’endomitose physiologiquement régulé par le MEG-CSF`
    ],
    'D',
    [
      `Faux. Les mégacaryocytes sont de grandes cellules possédant un noyau polyploïde.`,
      `Faux. Un mégacaryocyte produit généralement plusieurs milliers de plaquettes.`,
      `Faux selon la grille. La maturation mégacaryocytaire ne se définit pas par ce seul seuil de ploïdie.`,
      `Vrai. Les mégacaryocytes synthétisent notamment le facteur Willebrand, présent dans les granules alpha.`,
      `Faux selon la grille. La thrombopoïétine constitue le principal facteur de régulation de la mégacaryopoïèse.`
    ]
  ),

  Q(47,
    `Parmi les propositions suivantes concernant les facteurs de la coagulation, quelle est la proposition exacte ?`,
    [
      `le facteur V est le premier dont le taux diminue en cas d’hépatopathie modérée`,
      `le facteur VII est exploré par le temps de céphaline avec activateur (TCA)`,
      `le facteur IX peut être activé par le facteur VIIa lié au facteur tissulaire ou par le facteur XIa`,
      `le facteur IX favorise l’activation du facteur X par le facteur VIIIa`,
      `le facteur X est le cofacteur du facteur V`
    ],
    'C',
    [
      `Faux. Le facteur VII, de demi-vie courte, est souvent diminué précocement en cas de défaut de synthèse hépatique.`,
      `Faux. Le facteur VII est principalement exploré par le temps de Quick.`,
      `Vrai. Le facteur IX peut être activé par le complexe facteur tissulaire-VIIa ou par le facteur XIa.`,
      `Faux selon la grille. C'est le facteur IXa qui participe au complexe ténase avec le facteur VIIIa.`,
      `Faux. Le facteur Va est le cofacteur du facteur Xa au sein du complexe prothrombinase.`
    ]
  ),

  Q(48,
    `Parmi les signes cliniques suivants, quel est celui qui oriente vers un trouble de la coagulation plutôt qu’un trouble de l’hémostase primaire ?`,
    [
      `épistaxis`,
      `gingivorragies`,
      `hémarthrose`,
      `ménorragies`,
      `pétéchies`
    ],
    'C',
    [
      `Faux. Les épistaxis évoquent principalement des troubles de l'hémostase primaire.`,
      `Faux. Les gingivorragies sont des saignements muqueux caractéristiques de l'hémostase primaire.`,
      `Vrai. Les hémarthroses sont particulièrement caractéristiques des déficits de coagulation, notamment des hémophilies.`,
      `Faux. Les ménorragies peuvent être observées dans les troubles plaquettaires et la maladie de Willebrand.`,
      `Faux. Les pétéchies évoquent plutôt une anomalie de l'hémostase primaire.`
    ]
  ),

  Q(49,
    `Un bilan d’hémostase est prescrit pour un patient de 56 ans pour lequel une ponction-biopsie rénale est envisagée. Les résultats suivants sont retrouvés : TP = 45 %, TCA (ratio M/T) = 1,3, facteur II = 28 %, facteur V = 80 % et fibrinogène = 2,5 g/L. Le patient ne déclare pas prendre de traitement anticoagulant et son bilan hépatique est normal. Quelle hypothèse avancez-vous pour expliquer ces résultats ?`,
    [
      `hémophilie A acquise`,
      `hypovitaminose K`,
      `insuffisance hépatique modérée`,
      `coagulation intravasculaire disséminée`,
      `dysfibrinogénémie`
    ],
    'B',
    [
      `Faux. L'hémophilie A acquise entraîne principalement un allongement isolé du TCA.`,
      `Vrai. La diminution du facteur II avec conservation du facteur V oriente vers un défaut des facteurs vitamine K-dépendants.`,
      `Faux. Une insuffisance hépatique importante pourrait également diminuer le facteur V.`,
      `Faux. Une CIVD s'accompagne habituellement d'autres anomalies de consommation, notamment du fibrinogène et des plaquettes.`,
      `Faux. Une dysfibrinogénémie n'explique pas principalement cette baisse du facteur II.`
    ]
  ),

  Q(50,
    `Une thrombose veineuse profonde est retrouvée chez un homme de 68 ans. Celui-ci a pour antécédent médicaux une hypertension artérielle et une insuffisance rénale chronique sévère. Parmi les propositions suivantes, quel médicament prescrivez-vous en première intention pour le traitement de sa thrombose ?`,
    [
      `héparine non fractionnée`,
      `héparine de bas poids moléculaire`,
      `fondaparinux`,
      `dabigatran`,
      `warfarine`
    ],
    'A',
    [
      `Vrai. L'HNF peut être privilégiée en cas d'insuffisance rénale sévère car elle est titrable et moins dépendante de l'élimination rénale.`,
      `Faux selon la grille. Les HBPM nécessitent des précautions et parfois des adaptations en cas d'insuffisance rénale sévère.`,
      `Faux. Le fondaparinux est fortement dépendant de l'élimination rénale.`,
      `Faux. Le dabigatran est majoritairement éliminé par le rein.`,
      `Faux selon la grille. La warfarine nécessite un délai d'action et n'est pas l'anticoagulant initial attendu ici.`
    ]
  ),

  Q(51,
    `Une patiente de 44 ans arrive un soir aux urgences pour asthénie et fièvre. L’hémogramme et le bilan d’hémostase réalisés objectivent les résultats suivants :
Hémoglobine = 86 g/L, Plaquettes = 110 G/L, Leucocytes = 4,8 G/L
PNN = 0,9 G/L, Lymphocytes = 2,7 G/L, Monocytes = 0,6 G/L et Leucoblastes = 12,5 %
TP = 90 %, TCA (ratio) = 1,02 et fibrinogène = 6 g/L.
L’observation du frottis sanguin permet au biologiste d’évoquer une leucémie aiguë promyélocytaire (LAM3). La patiente est alors transférée en réanimation et le lendemain, de nouvelles analyses retrouvent les résultats suivants :
Hémoglobine = 84 g/L, Plaquettes = 42 G/L, Leucocytes = 4,5 G/L
TP = 40 %, Facteur II = 43 %, Facteur V = 27 %, TCA (ratio) = 1,37 et fibrinogène = 1,8 g/L. Quelle hypothèse vous semble la plus probable pour expliquer ce résultat ?`,
    [
      `hémophilie A acquise`,
      `hypovitaminose K`,
      `insuffisance hépatique modérée`,
      `coagulation intravasculaire disséminée`,
      `purpura thrombopénique immunologique`
    ],
    'D',
    [
      `Faux. Une hémophilie A acquise provoque principalement un allongement du TCA.`,
      `Faux. Une hypovitaminose K n'explique pas la thrombopénie et la baisse du facteur V.`,
      `Faux selon la grille. L'évolution aiguë en contexte de LAM3 oriente davantage vers une coagulopathie de consommation.`,
      `Vrai. La LAM3 est fortement associée à la CIVD, avec consommation des plaquettes, du fibrinogène et des facteurs de coagulation.`,
      `Faux. Un PTI n'explique pas l'ensemble des anomalies du bilan de coagulation.`
    ]
  ),

  Q(52,
    `Vous êtes interne en service de réanimation et le laboratoire vous appelle au sujet d’un patient traité par héparine non fractionnée et pour lequel vous avez prescrit une mesure de l’activité anti-Xa. En raison d’un plasma trop ictérique, le laboratoire est dans l’impossibilité de vous rendre ce résultat. Quelle autre analyse vous permet de suivre biologiquement le traitement anticoagulant de ce patient?`,
    [
      `temps de Quick`,
      `temps de céphaline avec activateur`,
      `temps de thrombine`,
      `INR`,
      `aucune des propositions ci-dessus`
    ],
    'B',
    [
      `Faux. Le TQ n'est pas le test habituel de surveillance de l'HNF.`,
      `Vrai. Le TCA peut être utilisé pour surveiller l'activité anticoagulante de l'héparine non fractionnée.`,
      `Faux. Le temps de thrombine est très sensible à l'héparine, mais ne constitue pas l'examen de référence pour ajuster sa dose.`,
      `Faux. L'INR est principalement utilisé pour surveiller les AVK.`,
      `Faux. Le TCA est une alternative utilisable à l'activité anti-Xa.`
    ]
  ),

  Q(53,
    `L’antithrombine :`,
    [
      `est synthétisée par l’endothélium vasculaire`,
      `inhibe principalement les facteurs IIa et Xa`,
      `se lie aux molécules de chondroïtine sulfate de la paroi vasculaire`,
      `est activée par la thrombine liée à la thrombomoduline`,
      `est diminuée au cours d’un traitement par antagoniste de la vitamine K`
    ],
    'B',
    [
      `Faux. L'antithrombine est principalement synthétisée par le foie.`,
      `Vrai. L'antithrombine inhibe notamment la thrombine, ou IIa, et le facteur Xa.`,
      `Faux. L'antithrombine interagit principalement avec des structures de type héparane sulfate.`,
      `Faux. Le complexe thrombine-thrombomoduline active la protéine C.`,
      `Faux. L'antithrombine n'est pas une protéine vitamine K-dépendante.`
    ]
  ),

  Q(54,
    `L’activateur tissulaire du plasminogène (t-PA) :`,
    [
      `est synthétisé par le foie`,
      `est le seul activateur physiologique du plasminogène`,
      `est libéré par l’endothélium en cas d’hypoxémie`,
      `est inhibé par l’alpha2-antiplasmine`,
      `induit la génération de monomères de fibrine`
    ],
    'C',
    [
      `Faux. Le t-PA est principalement synthétisé par les cellules endothéliales.`,
      `Faux. L'u-PA est également un activateur physiologique du plasminogène.`,
      `Vrai selon la grille officielle. Le t-PA peut être libéré par l'endothélium en réponse à certaines stimulations.`,
      `Faux. Le t-PA est principalement inhibé par le PAI-1 ; l'alpha2-antiplasmine inhibe la plasmine.`,
      `Faux. Le t-PA active le plasminogène en plasmine, ce qui favorise la dégradation de la fibrine.`
    ]
  ),

  Q(55,
    `Vous voyez en consultation une petite fille de 4 ans pour un syndrome hémorragique cutanéomuqueux évoluant depuis toujours. Sa mère vous précise que plusieurs membres de la famille sont atteints de la maladie de Glanzmann. Si la fille est atteinte de cette pathologie, vous vous attendez à observer biologiquement :`,
    [
      `la présence d’agrégats plaquettaires sur le frottis sanguin`,
      `un temps d’occlusion plaquettaire (automate PFA) normal`,
      `des tests d’agrégation plaquettaire normaux`,
      `une numération plaquettaire normale`,
      `la présence de macroplaquettes sur le frottis sanguin`
    ],
    'D',
    [
      `Faux. La thrombasthénie de Glanzmann est une anomalie fonctionnelle de GPIIbIIIa et n'entraîne pas des agrégats caractéristiques sur le frottis.`,
      `Faux. Le PFA est généralement perturbé dans les thrombopathies sévères.`,
      `Faux. Les tests d'agrégation sont anormaux dans la thrombasthénie de Glanzmann.`,
      `Vrai. La numération plaquettaire est habituellement normale malgré le défaut d'agrégation.`,
      `Faux. Les macroplaquettes sont principalement évocatrices de la maladie de Bernard-Soulier.`
    ]
  ),

  Q(56,
    `Quelle est la posologie pour une prescription de concentrés plaquettaires selon les recommandations de l'HAS de 2015, hors néonatalogie ?`,
    [
      `0,5 à 0,7 x 1011 plaquettes / kg de poids`,
      `0,1 à 0,2 x 1011 plaquettes / 10 kg de poids`,
      `0,5 à 0,7 x 1011 plaquettes / 10 kg de poids`,
      `0,5 à 1 x 1011 plaquettes / kg de poids`,
      `0,1 à 0,2 x 1011 plaquettes / kg de poids`
    ],
    'C',
    [
      `Faux. Cette quantité par kilogramme dépasse la dose retenue dans l'annale.`,
      `Faux. Cette quantité pour 10 kg est inférieure à la fourchette attendue.`,
      `Vrai. La grille retient 0,5 à 0,7 × 10¹¹ plaquettes pour 10 kg de poids.`,
      `Faux. Cette quantité par kilogramme est trop élevée.`,
      `Faux. L'unité de poids et la quantité ne correspondent pas à la proposition officielle.`
    ]
  ),

  Q(57,
    `Sur quel examen repose la prévention des accidents hémolytiques par allo-immunisation :`,
    [
      `Le phénotypage érythrocytaire`,
      `L’épreuve de compatibilité`,
      `La recherche d’anticorps anti érythrocytaires`,
      `Le dosage de l’haptoglobine`,
      `Le test de Coombs direct`
    ],
    'C',
    [
      `Faux selon la grille. Le phénotypage contribue à la prévention, mais la question cible la recherche d'anticorps préexistants.`,
      `Faux selon la grille. L'épreuve de compatibilité est utile dans certaines situations, notamment en présence d'anticorps.`,
      `Vrai. La RAI permet de rechercher les anticorps anti-érythrocytaires susceptibles de provoquer une hémolyse immunologique.`,
      `Faux. L'haptoglobine est principalement un marqueur biologique d'hémolyse.`,
      `Faux. Le test de Coombs direct recherche des immunoglobulines ou du complément fixés sur les hématies.`
    ]
  ),

  Q(58,
    `Une surveillance réglementaire de 15 minutes au début de la transfusion est obligatoire pour dépister entre autre :`,
    [
      `un oedeme du poumon par surcharge(OAP/TACO)`,
      `une allo immunisation`,
      `un oedeme lésionnel du poumon (TRALI)`,
      `une surcharge en fer`,
      `une incompatibilité ABO`
    ],
    'E',
    [
      `Faux selon la grille. Le TACO est une complication circulatoire pouvant survenir pendant ou après la transfusion.`,
      `Faux. L'allo-immunisation est une complication généralement identifiée de façon retardée.`,
      `Faux selon la grille. Le TRALI est une complication respiratoire aiguë transfusionnelle, mais ce n'est pas la réponse retenue ici.`,
      `Faux. La surcharge en fer se développe habituellement après des transfusions répétées.`,
      `Vrai. Une incompatibilité ABO peut provoquer une réaction hémolytique aiguë dès le début de la transfusion.`
    ]
  ),

  Q(59,
    `Quelle caractéristique réglementaire correspond aux concentrés de globules rouges :`,
    [
      `La posologie est fonction du poids du patient`,
      `La durée de la transfusion est de l’ordre de 30 mn`,
      `La durée de vie est de 7j`,
      `La température de conservation est de 2 à 6°C`,
      `un volume moyen de 100 mL`
    ],
    'D',
    [
      `Faux selon la grille. Chez l'adulte, la prescription de CGR tient principalement compte de l'hémoglobine et du contexte clinique.`,
      `Faux. Une transfusion de CGR dure habituellement plus de 30 minutes.`,
      `Faux. La durée de conservation des CGR est généralement de plusieurs semaines.`,
      `Vrai. Les CGR sont conservés à une température comprise entre 2 et 6 °C.`,
      `Faux. Le volume d'un CGR adulte est habituellement supérieur à 100 mL.`
    ]
  ),

  Q(60,
    `AU cours d'une transfusion de CGR chez une patiente, des signes d'intolérance apparaissent : fièvre, instabilité tensionnelle et urine rouge. Les LDH sont élevées et l'haptoglobine abaissée. Parmi ces propositions, laquelle vous semble à l'origine de cette réaction ?`,
    [
      `réaction d'hémolyse aiguë`,
      `TRALI`,
      `TACO`,
      `anaphylaxie`,
      `symptomatologie liée à la pathologie sous-jacente`
    ],
    'A',
    [
      `Vrai. Fièvre, instabilité hémodynamique, hémoglobinurie, LDH élevées et haptoglobine basse évoquent une hémolyse intravasculaire aiguë.`,
      `Faux. Le TRALI est principalement caractérisé par une insuffisance respiratoire aiguë avec œdème pulmonaire lésionnel.`,
      `Faux. Le TACO correspond à une surcharge circulatoire transfusionnelle.`,
      `Faux. L'anaphylaxie n'explique pas typiquement les signes biologiques d'hémolyse.`,
      `Faux. L'association des signes pendant la transfusion évoque directement une complication transfusionnelle aiguë.`
    ]
  )
];
