
export const meta = {
  title: 'Annales 2024 — Session 1',
};

const annale = [
  {
    id: 1,
    question: 'Le principal facteur de croissance hématopoïétique impliqué dans l’érythropoïèse est :',
    p: [
      'la thrombopoïétine',
      'l’érythropoïétine',
      'la glycophorine A',
      'le fer',
      'la vitamine B12'
    ],
    r: 'B',
    c: [
      'Faux. La thrombopoïétine stimule principalement la mégacaryopoïèse et la production de plaquettes.',
      'Vrai. L’EPO est le principal facteur de croissance de la lignée érythroïde.',
      'Faux. La glycophorine A est une protéine membranaire des cellules érythroïdes.',
      'Faux. Le fer est nécessaire à la synthèse de l’hème, mais ce n’est pas un facteur de croissance.',
      'Faux. La vitamine B12 est nécessaire à la synthèse de l’ADN.'
    ]
  },
  {
    id: 2,
    question: 'La vitamine B12 est principalement présente dans :',
    p: [
      'les produits d’origine animale',
      'les légumes verts',
      'les céréales',
      'les fruits secs',
      'les agrumes'
    ],
    r: 'A',
    c: [
      'Vrai. Les principales sources alimentaires de vitamine B12 sont la viande, le poisson, les œufs et les produits laitiers.',
      'Faux. Les légumes verts sont surtout des sources de folates, ou vitamine B9.',
      'Faux. Les céréales non enrichies ne constituent pas une source significative de B12.',
      'Faux. Les fruits secs n’apportent pas naturellement de quantité significative de B12.',
      'Faux. Les agrumes apportent notamment de la vitamine C, mais très peu de B12.'
    ]
  },
  {
    id: 3,
    question: 'Vous suspectez une drépanocytose, quel examen réalisez-vous pour confirmer votre hypothèse ?',
    p: [
      'le dosage de l’haptoglobine',
      'un myélogramme',
      'une électrophorèse des protéines sériques',
      'un immunophénotypage des cellules sanguines',
      'une électrophorèse de l’hémoglobine'
    ],
    r: 'E',
    c: [
      'Faux. Une haptoglobine basse oriente vers une hémolyse mais ne confirme pas la drépanocytose.',
      'Faux. Le myélogramme ne constitue pas l’examen diagnostique de référence.',
      'Faux. L’électrophorèse des protéines sériques explore les protéines plasmatiques, pas les fractions d’hémoglobine.',
      'Faux. L’immunophénotypage étudie des antigènes cellulaires.',
      'Vrai. L’étude des fractions d’hémoglobine permet notamment de mettre en évidence l’HbS.'
    ]
  },
  {
    id: 4,
    question: 'Devant une hyperlymphocytose chronique chez un adulte, quel examen doit être réalisé ?',
    p: [
      'la recherche d’une mutation JAK2 V617F',
      'un immunophénotypage des lymphocytes circulants',
      'un myélogramme',
      'une analyse cytogénétique sur sang',
      'une culture de progéniteurs hématopoïétiques'
    ],
    r: 'B',
    c: [
      'Faux. JAK2 V617F est principalement recherché dans certains syndromes myéloprolifératifs.',
      'Vrai. L’immunophénotypage permet de caractériser une éventuelle population lymphocytaire clonale.',
      'Faux. Le myélogramme n’est pas l’examen systématique de première intention.',
      'Faux. La cytogénétique peut compléter un bilan spécialisé, mais ne remplace pas l’immunophénotypage initial.',
      'Faux. La culture de progéniteurs n’est pas indiquée en première intention.'
    ]
  },
  {
    id: 5,
    question: 'Quelle anomalie morphologique des globules rouges orientera vers une hémolyse mécanique ?',
    p: [
      'la présence de drépanocytes',
      'la présence de dacryocytes',
      'la présence d’elliptocytes',
      'la présence de schizocytes',
      'la présence d’hématies cibles'
    ],
    r: 'D',
    c: [
      'Faux. Les drépanocytes sont caractéristiques des syndromes drépanocytaires.',
      'Faux. Les dacryocytes sont des hématies en forme de larme.',
      'Faux. Les elliptocytes sont des hématies allongées.',
      'Vrai. Les schizocytes sont des fragments d’hématies produits notamment lors d’une fragmentation mécanique.',
      'Faux. Les hématies cibles se rencontrent notamment dans certaines hémoglobinopathies.'
    ]
  },
  {
    id: 6,
    question: 'Concernant les facteurs de croissance hématopoïétiques, quelle est la bonne réponse ?',
    p: [
      'le G-CSF est un facteur de croissance multipotent',
      'le SCF est un facteur de croissance restreint',
      'l’IL-5 est un facteur de croissance restreint',
      'la TPO est un facteur de croissance synergique',
      'le GM-CSF est un facteur de croissance restreint'
    ],
    r: 'C',
    c: [
      'Faux. Le G-CSF agit principalement sur la lignée granulocytaire neutrophile.',
      'Faux. Le SCF agit sur des populations immatures et participe au maintien des cellules souches.',
      'Vrai. L’IL-5 intervient principalement dans la différenciation de la lignée éosinophile.',
      'Faux selon la classification retenue par la grille. La TPO est notamment associée à la mégacaryopoïèse.',
      'Faux. Le GM-CSF agit sur plusieurs lignées myéloïdes et n’est pas considéré ici comme restreint.'
    ]
  },
  {
    id: 7,
    question: 'Concernant le myélogramme, quelle est la bonne réponse ?',
    p: [
      'il est réalisé sous anesthésie générale',
      'il permet de réaliser une carotte osseuse',
      'il permet d’apprécier l’architecture de la moelle osseuse',
      'il permet une analyse morphologique des cellules médullaires',
      'il permet d’apprécier la fibrose médullaire'
    ],
    r: 'D',
    c: [
      'Faux. Le myélogramme est habituellement réalisé sous anesthésie locale.',
      'Faux. La carotte osseuse est obtenue par biopsie ostéomédullaire.',
      'Faux. L’architecture médullaire est étudiée par la biopsie ostéomédullaire.',
      'Vrai. Le myélogramme permet une analyse cytologique des cellules de la moelle.',
      'Faux. La fibrose médullaire est évaluée par une étude histologique.'
    ]
  },
  {
    id: 8,
    question: 'Du plus immature au plus mature, les différents stades de maturation des précurseurs érythroblastiques sont :',
    p: [
      'proérythroblaste – érythroblaste basophile – érythroblaste polychromatophile – érythroblaste acidophile',
      'érythroblaste basophile – érythroblaste polychromatophile – érythroblaste acidophile – proérythroblaste',
      'érythroblaste polychromatophile – érythroblaste basophile – proérythroblaste – érythroblaste acidophile',
      'proérythroblaste – érythroblaste acidophile – érythroblaste polychromatophile – érythroblaste basophile',
      'érythroblaste acidophile – érythroblaste polychromatophile – érythroblaste basophile – proérythroblaste'
    ],
    r: 'A',
    c: [
      'Vrai. C’est la succession chronologique normale des stades érythroblastiques.',
      'Faux. Le proérythroblaste est le stade le plus immature de cette liste.',
      'Faux. L’érythroblaste polychromatophile apparaît après l’érythroblaste basophile.',
      'Faux. Le stade acidophile est plus mature que les stades basophile et polychromatophile.',
      'Faux. Cette séquence présente les stades dans l’ordre inverse.'
    ]
  },
  {
    id: 9,
    question: 'Concernant le métabolisme du fer, quelle est la bonne réponse ?',
    p: [
      'le fer non héminique est absorbé directement par la muqueuse intestinale',
      'le fer est majoritairement absorbé au niveau de l’iléon',
      'la ferroportine est présente au pôle apical des entérocytes',
      'l’hepcidine permet d’augmenter l’absorption ferrique',
      'le fer ferrique est pris en charge par la transferrine dans le sang circulant'
    ],
    r: 'E',
    c: [
      'Faux. Le fer non héminique ferrique nécessite notamment une réduction en fer ferreux avant son entrée par DMT1.',
      'Faux. L’absorption du fer a principalement lieu dans le duodénum.',
      'Faux. La ferroportine est présente au pôle basolatéral des entérocytes.',
      'Faux. L’hepcidine diminue la disponibilité du fer en provoquant la dégradation de la ferroportine.',
      'Vrai. La transferrine transporte le fer sous forme ferrique Fe3+ dans le plasma.'
    ]
  },
  {
    id: 10,
    question: 'Parmi ces propositions, quelle est la bonne réponse ?',
    p: [
      'la coloration de Perls détecte la myélopéroxydase des polynucléaires neutrophiles',
      'la coloration au bleu de crésyl permet de mettre en évidence les érythroblastes',
      'la coloration May-Grünwald Giemsa est utilisée pour compter les réticulocytes',
      'une CCMH à 60% doit faire rechercher une erreur analytique',
      'le VGM est calculé avec la formule suivante : hémoglobine / hématocrite'
    ],
    r: 'D',
    c: [
      'Faux. La coloration de Perls met en évidence le fer.',
      'Faux. Le bleu de crésyl brillant permet notamment de mettre en évidence les réticulocytes.',
      'Faux. La numération des réticulocytes nécessite une coloration supravitale ou une méthode automatisée adaptée.',
      'Vrai. Une CCMH de 60 % est physiologiquement aberrante et fait rechercher une erreur analytique.',
      'Faux. Le VGM correspond au volume globulaire moyen et se calcule notamment à partir de l’hématocrite et du nombre d’hématies.'
    ]
  },
  {
    id: 11,
    question: 'Concernant la vitamine B12, quelle est la bonne réponse ?',
    p: [
      'la vitamine B12 est le cofacteur de la méthionine synthétase',
      'la vitamine B12 est le cofacteur de la folate réductase',
      'la vitamine B12 est le cofacteur de la thymidilate synthétase',
      'la vitamine B12 permet la synthèse de l’ARN',
      'les végétaliens ont un apport en vitamine B12 suffisant'
    ],
    r: 'A',
    c: [
      'Vrai. La vitamine B12 est notamment le cofacteur de la méthionine synthétase.',
      'Faux. La réduction des folates implique notamment la dihydrofolate réductase.',
      'Faux. La thymidylate synthétase utilise un dérivé du tétrahydrofolate.',
      'Faux selon la grille. Le rôle classiquement retenu pour la B12 est notamment son implication indirecte dans la synthèse de l’ADN.',
      'Faux. Une alimentation végétalienne non supplémentée expose à une carence en B12.'
    ]
  },
  {
    id: 12,
    question: 'Concernant les anomalies des hématies, quelle est la bonne réponse ?',
    p: [
      'l’anisocytose est une anomalie de forme des globules rouges',
      'les hématies cibles sont des hématies en forme de poire',
      'les corps de Jolly correspondent à des reliquats d’ARN',
      'les hématies impaludées sont visibles sur le frottis sanguin coloré au May-Grünwald Giemsa',
      'l’anisochromie est une anomalie de taille des globules rouges'
    ],
    r: 'D',
    c: [
      'Faux. L’anisocytose correspond à une variation de taille des hématies.',
      'Faux. Les hématies cibles présentent un aspect en cible, contrairement aux dacryocytes en forme de larme.',
      'Faux. Les corps de Howell-Jolly sont des reliquats d’ADN nucléaire.',
      'Vrai. Le MGG permet de visualiser les formes intraérythrocytaires de Plasmodium.',
      'Faux. L’anisochromie correspond à une variation de coloration des hématies.'
    ]
  },
  {
    id: 13,
    question: 'Lors d’une anémie hémolytique installée depuis une semaine, quel élément peut être observé ?',
    p: [
      'un ictère',
      'des ongles cassants',
      'un fer sérique bas',
      'des réticulocytes inférieurs à 120 G/L',
      'une haptoglobine élevée'
    ],
    r: 'A',
    c: [
      'Vrai. L’hémolyse augmente la production de bilirubine non conjuguée, pouvant entraîner un ictère.',
      'Faux. Les ongles cassants évoquent davantage une carence martiale prolongée.',
      'Faux. Une hémolyse n’entraîne pas typiquement une baisse du fer sérique.',
      'Faux. Une anémie hémolytique installée entraîne habituellement une réticulocytose.',
      'Faux. L’haptoglobine diminue lors d’une hémolyse intravasculaire.'
    ]
  },
  {
    id: 14,
    question: 'Une anémie associée à un VGM normal est :',
    p: [
      'microcytaire',
      'normochrome',
      'hypochrome',
      'régénérative',
      'normocytaire'
    ],
    r: 'E',
    c: [
      'Faux. Une anémie microcytaire présente un VGM diminué.',
      'Faux. La normochromie dépend de la concentration en hémoglobine globulaire, pas du seul VGM.',
      'Faux. L’hypochromie ne peut pas être déduite d’un VGM normal.',
      'Faux. Le caractère régénératif dépend du nombre absolu de réticulocytes.',
      'Vrai. Un VGM normal définit une anémie normocytaire.'
    ]
  },
  {
    id: 15,
    question: 'Parmi ces propositions, quelles cellules possèdent un noyau ?',
    p: [
      'les hématies',
      'les plaquettes',
      'les réticulocytes',
      'les érythroblastes',
      'les drépanocytes'
    ],
    r: 'D',
    c: [
      'Faux. Les hématies matures sont anucléées.',
      'Faux. Les plaquettes sont des fragments cytoplasmiques sans noyau.',
      'Faux. Les réticulocytes ont déjà perdu leur noyau.',
      'Vrai. Les érythroblastes possèdent un noyau jusqu’à leur énucléation.',
      'Faux. Les drépanocytes sont des hématies matures déformées et anucléées.'
    ]
  },
  {
    id: 16,
    question: 'Lors de l’hémostase primaire, dans quel ordre surviennent les étapes suivantes :\n1- Sécrétion du contenu des granules plaquettaires\n2- Liaison entre la GpIIbIIIa plaquettaire et le fibrinogène\n3- Vasoconstriction réflexe\n4- Liaison entre la GpIb plaquettaire et le facteur Willebrand',
    p: [
      '3, 4, 1, 2',
      '3, 4, 2, 1',
      '4, 1, 2, 3',
      '4, 2, 1, 3',
      '4, 3, 1, 2'
    ],
    r: 'A',
    c: [
      'Vrai. Vasoconstriction, adhésion plaquettaire, activation-sécrétion, puis agrégation.',
      'Faux. La sécrétion plaquettaire précède l’agrégation dans la chronologie retenue.',
      'Faux. La vasoconstriction réflexe survient avant l’adhésion plaquettaire.',
      'Faux. Cette séquence place notamment la vasoconstriction trop tardivement.',
      'Faux. La vasoconstriction doit précéder l’adhésion plaquettaire.'
    ]
  },
  {
    id: 17,
    question: 'La maladie de Bernard-Soulier :',
    p: [
      'est due à un déficit en GPIIbIIIa plaquettaire',
      'est de transmission autosomale dominante',
      'est associée à une thrombopénie',
      'est caractérisée par des plaquettes de petite taille',
      'est associée à un défaut de l’agrégation plaquettaire'
    ],
    r: 'C',
    c: [
      'Faux. Bernard-Soulier est lié à une anomalie du complexe GPIb-IX-V.',
      'Faux. La forme classique est de transmission autosomique récessive.',
      'Vrai. La maladie entraîne une macrothrombopénie.',
      'Faux. Les plaquettes sont généralement de grande taille.',
      'Faux selon la grille. Le défaut principal est celui de l’adhésion plaquettaire au facteur Willebrand.'
    ]
  },
  {
    id: 18,
    question: 'Parmi les signes cliniques suivants, quel est celui qui est vous oriente plus vers un trouble de la coagulation plutôt qu’un trouble de l’hémostase primaire ?',
    p: [
      'épistaxis',
      'gingivorragies',
      'ménorragies',
      'hémarthrose',
      'purpura pétéchial'
    ],
    r: 'D',
    c: [
      'Faux. Les épistaxis sont typiques des troubles de l’hémostase primaire.',
      'Faux. Les gingivorragies évoquent un saignement cutanéo-muqueux.',
      'Faux. Les ménorragies sont fréquentes dans les troubles de l’hémostase primaire.',
      'Vrai. Les hémarthroses sont caractéristiques des déficits de la coagulation, notamment des hémophilies.',
      'Faux. Le purpura pétéchial évoque surtout une anomalie plaquettaire.'
    ]
  },
  {
    id: 19,
    question: 'Le Facteur Willebrand (VWF) :',
    p: [
      'est principalement synthétisé par le mégacaryocyte',
      'permet le transport du facteur XI',
      'se lie majoritairement à la GPIIbIIIa des plaquettes',
      'est une protéine multimérique',
      'est présent dans les granules denses des plaquettes'
    ],
    r: 'D',
    c: [
      'Faux. Le VWF est principalement synthétisé par les cellules endothéliales et les mégacaryocytes.',
      'Faux. Il transporte et stabilise le facteur VIII, pas le facteur XI.',
      'Faux. L’adhésion plaquettaire fait principalement intervenir le complexe GPIb-IX-V.',
      'Vrai. Le facteur Willebrand est constitué de multimères.',
      'Faux. Le VWF est présent notamment dans les granules alpha plaquettaires.'
    ]
  },
  {
    id: 20,
    question: 'Un homme de 78 ans est admis inconscient aux urgences avec un traumatisme crânien suite à une chute d’échelle. Sa fille vous informe qu’il prend un traitement anticoagulant au long cours par voie orale, mais ne connaît pas le nom de la molécule. Le bilan d’hémostase du patient est le suivant : TQ 90 %, TCA (M/T) : 1,5, fibrinogène : 5 g/L. A quel traitement devez-vous penser ?',
    p: [
      'héparine de bas poids moléculaire',
      'clopidogrel',
      'rivaroxaban',
      'dabigatran',
      'warfarine'
    ],
    r: 'D',
    c: [
      'Faux. Les HBPM sont principalement administrées par voie sous-cutanée.',
      'Faux. Le clopidogrel est un antiagrégant plaquettaire.',
      'Faux selon la grille. Le rivaroxaban inhibe le facteur Xa et modifie de manière variable les tests usuels.',
      'Vrai. Le dabigatran est un inhibiteur direct de la thrombine pouvant allonger le TCA.',
      'Faux. La warfarine entraîne principalement une diminution du TQ et une augmentation de l’INR.'
    ]
  },
  {
    id: 21,
    question: 'Concernant le facteur Xa, laquelle de ces propositions est exacte ?',
    p: [
      'il est activé par le facteur IXa',
      'il permet de favoriser l’interaction entre les facteurs Va et II',
      'il clive les fibrinopeptides A et B du fibrinogène',
      'son action est potentialisée par le Tissue Factor Pathway Inhibitor (TFPI)',
      'il est inhibé par le système protéine C-protéine S'
    ],
    r: 'A',
    c: [
      'Vrai. Le complexe ténase intrinsèque, comprenant notamment IXa et VIIIa, active le facteur X.',
      'Faux. Le facteur Xa appartient au complexe prothrombinase avec le facteur Va.',
      'Faux. Le clivage des fibrinopeptides du fibrinogène est assuré par la thrombine.',
      'Faux. Le TFPI inhibe la voie du facteur tissulaire et le facteur Xa.',
      'Faux. Le système protéine C-protéine S inactive principalement les facteurs Va et VIIIa.'
    ]
  },
  {
    id: 22,
    question: 'Si besoin, la surveillance d’un traitement par héparine de bas poids moléculaire peut être effectué par la mesure :',
    p: [
      'du Temps de Quick',
      'du Temps de Céphaline avec Activateur',
      'du temps de thrombine',
      'de l’activité anti-Xa',
      "de l'activité antithrombine"
    ],
    r: 'D',
    c: [
      'Faux. Le TQ n’est pas le test adapté pour quantifier une HBPM.',
      'Faux. Le TCA est notamment utilisé pour certaines surveillances par héparine non fractionnée.',
      'Faux. Le temps de thrombine est très sensible à certains inhibiteurs de la thrombine.',
      'Vrai. L’activité anti-Xa peut être dosée dans certaines situations nécessitant une surveillance des HBPM.',
      'Faux. Le dosage de l’antithrombine ne mesure pas directement l’effet anticoagulant de l’HBPM.'
    ]
  },
  {
    id: 23,
    question: 'L’héparine non fractionnée :',
    p: [
      'est éliminée par le rein',
      'passe la barrière placentaire',
      'se lie faiblement au facteur 4 plaquettaire',
      'peut être monitorée à l’aide du temps de Quick',
      'peut induire une thrombopénie'
    ],
    r: 'E',
    c: [
      'Faux selon la grille. L’élimination de l’HNF est principalement assurée par des mécanismes cellulaires, avec une composante rénale.',
      'Faux. L’héparine ne traverse pas la barrière placentaire.',
      'Faux. L’HNF interagit avec le facteur 4 plaquettaire.',
      'Faux. Elle est généralement surveillée par le TCA ou l’activité anti-Xa.',
      'Vrai. L’HNF peut provoquer une thrombopénie induite par l’héparine, notamment immunologique.'
    ]
  },
  {
    id: 24,
    question: 'La protéine S :',
    p: [
      'est synthétisée par l’endothélium vasculaire',
      'est activée par la thrombine liée à la thrombomoduline',
      'inhibe avec la protéine C le facteur Va et le facteur IXa',
      'se lie à la C4b-binding protein (C4b-BP) pour être active',
      'est diminuée au cours d’un traitement par antagoniste de la vitamine K'
    ],
    r: 'E',
    c: [
      'Faux selon la grille. La protéine S est notamment synthétisée par le foie.',
      'Faux. C’est la protéine C qui est activée par le complexe thrombine-thrombomoduline.',
      'Faux. Le système protéine C activée-protéine S inactive principalement les facteurs Va et VIIIa.',
      'Faux. La fraction libre de protéine S est fonctionnellement active.',
      'Vrai. La protéine S est vitamine K-dépendante et peut diminuer sous AVK.'
    ]
  },
  {
    id: 25,
    question: 'Chez un patient de 40 ans, les D-dimères :',
    p: [
      'ont un seuil d’exclusion de la thrombose artérielle de 300 ng/mL',
      'ont un seuil d’exclusion de la thrombose veineuse de 300 ng/mL',
      'ont un seuil d’exclusion de la thrombose artérielle de 500 ng/mL',
      'ont un seuil d’exclusion de la thrombose veineuse de 500 ng/mL',
      'ont un seuil d’exclusion de la thrombose artérielle de 1000 ng/mL'
    ],
    r: 'D',
    c: [
      'Faux. Les D-dimères ne sont pas utilisés avec ce seuil pour exclure une thrombose artérielle.',
      'Faux. Le seuil de référence donné ici pour un patient de 40 ans est de 500 ng/mL.',
      'Faux. Le seuil de 500 ng/mL concerne la démarche d’exclusion de maladie thromboembolique veineuse.',
      'Vrai. Un résultat inférieur à 500 ng/mL peut contribuer à exclure une thrombose veineuse lorsque la probabilité clinique le permet.',
      'Faux. Ce seuil n’est pas celui retenu pour exclure une thrombose artérielle.'
    ]
  },
  {
    id: 26,
    question: 'Après un acte transfusionnel, le produit sanguin labile transfusé doit être conservé pour une durée minimale de :',
    p: [
      '1 heure',
      '2 heures',
      '4 heures',
      '8 heures',
      '24 heures'
    ],
    r: 'C',
    c: [
      'Faux. Une heure est inférieure à la durée retenue dans la grille.',
      'Faux. La durée minimale attendue ici est de quatre heures.',
      'Vrai. La poche et son dispositif sont conservés au minimum quatre heures selon la référence de cette annale.',
      'Faux. Huit heures ne correspond pas à la réponse officielle demandée.',
      'Faux. Vingt-quatre heures ne correspond pas à la durée minimale retenue dans ce QCS.'
    ]
  },
  {
    id: 27,
    question: 'Quelle est la plus fréquente des complications suite à une transfusion ?',
    p: [
      'syndrome de détresse respiratoire aiguë',
      'surcharge volémique',
      'allergie',
      'allo-immunisation',
      'réaction fébrile non-hémolytique'
    ],
    r: 'D',
    c: [
      'Faux selon la grille. Le TRALI est une complication respiratoire aiguë grave.',
      'Faux selon la grille. La surcharge volémique est une complication transfusionnelle importante.',
      'Faux selon la grille. Les réactions allergiques constituent des effets indésirables transfusionnels.',
      'Vrai selon la grille officielle. L’allo-immunisation est la réponse retenue pour cette question.',
      'Faux selon la grille. Les réactions fébriles non hémolytiques sont des complications transfusionnelles reconnues.'
    ]
  },
  {
    id: 28,
    question: 'En cas de transfusion mal tolérée, quelle est l’action la plus urgente à réaliser ?',
    p: [
      'maintien d’une voie d’abord',
      'arrêt immédiat de la transfusion',
      'prise des constantes',
      'examen des urines',
      'remplissage d’une fiche de signalement d’effet indésirable receveur'
    ],
    r: 'B',
    c: [
      'Faux. Le maintien d’une voie veineuse est important, mais vient après l’arrêt immédiat de la transfusion.',
      'Vrai. Toute suspicion de réaction transfusionnelle impose l’arrêt immédiat de la transfusion.',
      'Faux. Les constantes doivent être contrôlées, mais la première action est d’arrêter la transfusion.',
      'Faux. L’examen des urines peut faire partie du bilan secondaire.',
      'Faux. Le signalement est nécessaire, mais ne constitue pas la priorité immédiate.'
    ]
  },
  {
    id: 29,
    question: 'La responsabilité essentielle de tout professionnel de santé en hémovigilance est de :',
    p: [
      'déclarer les évènements indésirables sur la base de recueil de l’ANSM',
      'signaler les effets indésirables liés aux médicaments dérivés du sang',
      'se former à la fonction de correspondant d’hémovigilance',
      'signaler les effets indésirables liés à une transfusion sanguine',
      'suivre scrupuleusement les procédures réglementaires'
    ],
    r: 'D',
    c: [
      'Faux selon la grille. La déclaration réglementaire peut relever du circuit des correspondants d’hémovigilance.',
      'Faux. Les médicaments dérivés du sang relèvent notamment de la pharmacovigilance.',
      'Faux. Tous les professionnels ne sont pas tenus de devenir correspondants d’hémovigilance.',
      'Vrai. Chaque professionnel doit signaler tout effet indésirable suspecté en lien avec une transfusion.',
      'Faux selon la grille. Le respect des procédures est indispensable, mais le signalement est la responsabilité ciblée ici.'
    ]
  },
  {
    id: 30,
    question: 'Quel est le contenu minimal en hémoglobine contenu dans un culot de globules rouges ?',
    p: [
      '20g',
      '40g',
      '60g',
      '80g',
      '100g'
    ],
    r: 'B',
    c: [
      'Faux. Cette quantité est inférieure au minimum retenu.',
      'Vrai. La grille retient 40 g comme contenu minimal en hémoglobine d’un CGR.',
      'Faux. Cette valeur est supérieure au minimum demandé.',
      'Faux. Cette valeur ne correspond pas au seuil minimal retenu.',
      'Faux. Cette valeur ne correspond pas au seuil minimal du QCS.'
    ]
  },
  {
    id: 31,
    question: 'Concernant l’érythropoïèse, quelle(s) est(sont) la(les) réponse(s) vraie(s) ?',
    p: [
      'l’énucléation a lieu au stade proérythroblaste',
      'les progéniteurs BFU-E et CFU-E peuvent être comptés par culture cellulaire',
      'les divisions cellulaires s’accompagnent d’une diminution de la taille de la cellule',
      'les divisions cellulaires s’accompagnent d’une fabrication d’hémoglobine responsable d’un cytoplasme de plus en plus acidophile',
      'les divisions cellulaires s’accompagnent d’une condensation de la chromatine'
    ],
    r: 'BCDE',
    c: [
      'Faux. L’énucléation survient en fin de maturation érythroblastique.',
      'Vrai. Les BFU-E et CFU-E peuvent être étudiés par cultures clonogéniques.',
      'Vrai. La taille des précurseurs diminue progressivement au cours de leur maturation.',
      'Vrai. L’accumulation d’hémoglobine rend le cytoplasme progressivement acidophile.',
      'Vrai. La chromatine se condense progressivement avant l’expulsion du noyau.'
    ]
  },
  {
    id: 32,
    question: 'Physiologiquement :',
    p: [
      'le sang circulant contient des érythroblastes',
      'l’érythropoïétine est majoritairement produite par le foie',
      'la vitamine B9 se fixe au niveau de l’iléon terminal pour être absorbée',
      'les réserves de vitamines B9 sont de 2 à 4 mois',
      'les globules rouges ont une forme biconvexe et sont capables de déformabilité'
    ],
    r: 'D',
    c: [
      'Faux. Les érythroblastes sont normalement présents dans la moelle osseuse, pas dans le sang circulant adulte.',
      'Faux. Chez l’adulte, l’EPO est principalement produite par le rein.',
      'Faux. Les folates sont essentiellement absorbés au niveau du jéjunum.',
      'Vrai. Les réserves en vitamine B9 sont relativement limitées, de l’ordre de quelques mois.',
      'Faux. Les globules rouges ont une forme biconcave.'
    ]
  },
  {
    id: 33,
    question: 'Une patiente de 27 ans présentant des métrorragies importantes depuis plusieurs mois et une carence martiale profonde est adressée aux urgences par son médecin traitant. Les éléments suivants sont compatibles avec ce tableau :',
    p: [
      'une pâleur cutanéo-muqueuse',
      'une tachycardie',
      'une anémie régénérative',
      'une anémie microcytaire hypochrome',
      'une hyperferritinémie'
    ],
    r: 'ABD',
    c: [
      'Vrai. La baisse de l’hémoglobine peut provoquer une pâleur cutanéo-muqueuse.',
      'Vrai. La tachycardie est un mécanisme compensateur possible de l’anémie.',
      'Faux. Une carence martiale profonde entraîne habituellement une anémie arégénérative.',
      'Vrai. L’anémie ferriprive prolongée est typiquement microcytaire et hypochrome.',
      'Faux. La ferritine est généralement diminuée en cas de carence martiale.'
    ]
  },
  {
    id: 34,
    question: 'Concernant la granulopoïèse, quelle(s) est(sont) la(les) réponse(s) vraie(s) ?',
    p: [
      'les stades de maturation des précurseurs granuleux sont : promyélocyte-métamyélocyte-myélocyte-myéloblaste-polynucléaire neutrophile',
      'une neutropénie peut être liée à un excès de margination des polynucléaires neutrophiles',
      'la diapédèse correspond au passage des polynucléaires neutrophiles entre les cellules endothéliales pour migrer dans les tissus',
      'les polynucléaires neutrophiles libèrent de la myélopéroxydase à partir de leurs granulations secondaires',
      'les polynucléaires éosinophiles et basophiles sont impliqués dans les réactions allergiques'
    ],
    r: 'BCE',
    c: [
      'Faux. La succession correcte est myéloblaste, promyélocyte, myélocyte, métamyélocyte puis stades matures.',
      'Vrai. Une augmentation de la margination peut diminuer les neutrophiles mesurés dans le sang circulant.',
      'Vrai. La diapédèse permet le franchissement de l’endothélium vasculaire vers les tissus.',
      'Faux. La myélopéroxydase est principalement contenue dans les granulations primaires azurophiles.',
      'Vrai. Les éosinophiles et basophiles participent aux réponses allergiques.'
    ]
  },
  {
    id: 35,
    question: 'Un patient hospitalisé en hématologie présente l’hémogramme suivant :\nGlobules rouges : 2,8 T/L\nHémoglobine : 78 g/L\nVGM : 86 fL\nCCMH : 32,5 g/dL\nPlaquettes : 20 G/L\nLeucocytes : 2 G/L\nPolynucléaires neutrophiles :10%\nPolynucléaires éosinophiles :0%\nPolynucléaires basophiles :0%\nLymphocytes : 80%\nMonocytes : 10%\nRéticulocytes : 1%\nQuelle(s) est(sont) la(les) réponse(s) vraie(s) ?',
    p: [
      'le patient présente une agranulocytose responsable d’un risque infectieux',
      'le patient présente une anémie régénérative',
      'le patient présente une anémie macrocytaire normochrome',
      'le patient présente une thrombopénie responsable d’un risque hémorragique',
      'la formule leucocytaire et les réticulocytes s’interprètent en valeurs absolues'
    ],
    r: 'ADE',
    c: [
      'Vrai. PNN = 2 × 0,10 = 0,2 G/L, soit une neutropénie profonde avec risque infectieux.',
      'Faux. Les réticulocytes absolus sont à 28 G/L, indiquant une anémie arégénérative.',
      'Faux. Un VGM de 86 fL correspond à une anémie normocytaire.',
      'Vrai. Une numération plaquettaire à 20 G/L entraîne un risque hémorragique significatif.',
      'Vrai. Les pourcentages doivent être convertis en nombres absolus pour interpréter ces lignées.'
    ]
  },
  {
    id: 36,
    question: 'Concernant l’hématopoïèse, quelle(s) est(sont) la(les) réponse(s) vraie(s) ?',
    p: [
      'les progéniteurs sont plus immatures que les précurseurs',
      'la moelle osseuse contient également des cellules non hématopoïétiques',
      'l’hématopoïèse a lieu dans la moelle osseuse dès le premier mois de vie in utero',
      'une cellule souche hématopoïétique est capable d’autorenouvellement',
      'le sternum est dépourvu de moelle osseuse à l’âge adulte'
    ],
    r: 'ABD',
    c: [
      'Vrai. Les progéniteurs précèdent les précurseurs dans la différenciation hématopoïétique.',
      'Vrai. La moelle contient également des cellules stromales, endothéliales et d’autres éléments non hématopoïétiques.',
      'Faux. L’hématopoïèse médullaire apparaît plus tard au cours de la vie fœtale.',
      'Vrai. L’autorenouvellement est une propriété fondamentale des cellules souches hématopoïétiques.',
      'Faux. Le sternum conserve de la moelle hématopoïétique chez l’adulte.'
    ]
  },
  {
    id: 37,
    question: 'Concernant l’érythropoïèse, quelle(s) est(sont) la(les) réponse(s) vraie(s) ?',
    p: [
      'le récepteur à l’EPO est exprimé à partir du stade d’érythroblaste acidophile',
      'le noyau de l’érythroblaste polychromatophile contient plusieurs lobes',
      'les réticulocytes ont une durée de vie de 2 jours avant de devenir des hématies',
      'le fer permet la synthèse d’hémoglobine dans les précurseurs érythroblastiques',
      'le facteur de croissance SCF agit jusqu’au stade d’érythroblaste acidophile'
    ],
    r: 'CD',
    c: [
      'Faux. La sensibilité à l’EPO apparaît à des stades plus précoces de la différenciation érythroïde.',
      'Faux. Les érythroblastes possèdent un noyau non segmenté.',
      'Vrai. Les réticulocytes achèvent leur maturation en hématies en environ un à deux jours.',
      'Vrai. Le fer entre dans la constitution de l’hème de l’hémoglobine.',
      'Faux. L’action du SCF concerne principalement des stades immatures.'
    ]
  },
  {
    id: 38,
    question: 'Concernant le métabolisme du fer, quelle(s) est(sont) la(les) réponse(s) vraie(s) ?',
    p: [
      'le fer est présent dans l’organisme majoritairement sous une forme circulante',
      "le fer permet la fixation de l'hydrogène au niveau de l'hème",
      'l’hepcidine est une protéine de stockage du fer',
      'la transferrine est une protéine de stockage du fer',
      'la ferritine augmente en cas d’inflammation'
    ],
    r: 'E',
    c: [
      'Faux. La majorité du fer est incorporée à l’hémoglobine ou stockée, et non librement circulante.',
      'Faux. Le fer de l’hème permet la fixation réversible du dioxygène.',
      'Faux. L’hepcidine est une hormone de régulation du métabolisme du fer.',
      'Faux. La transferrine est une protéine de transport du fer.',
      'Vrai. La ferritine est une protéine de phase aiguë qui peut augmenter lors d’une inflammation.'
    ]
  },
  {
    id: 39,
    question: 'Quelle(s) anomalie(s) cytologique(s) sera(seront) visible(s) sur un myélogramme un cas de carence en vitamine B9 ?',
    p: [
      'la présence d’érythroblastes de petite taille',
      'la présence de mégaloblastes',
      'une absence de mégacaryocytes',
      'un asynchronisme de maturation nucléo-cytoplasmique',
      'plus de 20% de leucoblastes'
    ],
    r: 'BD',
    c: [
      'Faux. La carence en B9 entraîne une mégaloblastose plutôt qu’une microblastose.',
      'Vrai. La perturbation de la synthèse de l’ADN entraîne l’apparition de mégaloblastes.',
      'Faux. L’absence de mégacaryocytes n’est pas caractéristique de la carence en B9.',
      'Vrai. Le défaut de maturation nucléaire contraste avec une maturation cytoplasmique relativement conservée.',
      'Faux. Plus de 20 % de blastes évoque une leucémie aiguë, pas une simple carence en folates.'
    ]
  },
  {
    id: 40,
    question: 'Concernant l’hémoglobine :',
    p: [
      'elle est constituée de quatre chaînes de globine identiques deux à deux',
      'l’hémoglobine majoritaire chez l’adulte est l’hémoglobine F',
      "c’est un pigment assurant le transport de l'O2",
      'chaque chaîne de globine fixe un groupement hème',
      'la dégradation de l’hémoglobine entraîne la production de bilirubine'
    ],
    r: 'ACDE',
    c: [
      'Vrai. L’hémoglobine adulte majoritaire HbA est constituée de deux chaînes alpha et deux chaînes bêta.',
      'Faux. L’hémoglobine majoritaire chez l’adulte est HbA.',
      'Vrai. L’hémoglobine assure principalement le transport sanguin du dioxygène.',
      'Vrai. Chaque chaîne de globine est associée à un groupement hème.',
      'Vrai. La dégradation de l’hème aboutit notamment à la formation de bilirubine.'
    ]
  },
  {
    id: 41,
    question: 'Concernant les globules rouges :',
    p: [
      'les globules rouges renouvellent régulièrement leur stock d’enzymes',
      'l’énergie du globule rouge est fournie principalement par la glycolyse anaérobie',
      'la glucose-6-phosphate déshydrogénase et la pyruvate kinase sont impliquées dans la glycolyse',
      'l’hémolyse physiologique a lieu au bout de 30 jours',
      'l’hémolyse physiologique se déroule majoritairement dans les tissus'
    ],
    r: 'BCE',
    c: [
      'Faux. Les hématies matures ne possèdent pas les organites nécessaires à la synthèse de nouvelles protéines.',
      'Vrai. La glycolyse anaérobie constitue la principale source d’ATP des hématies.',
      'Vrai selon la grille officielle. Attention : la G6PD appartient à la voie des pentoses phosphates, tandis que la pyruvate kinase intervient dans la glycolyse.',
      'Faux. La durée de vie physiologique des hématies est d’environ 120 jours.',
      'Vrai. L’hémolyse physiologique est principalement extravasculaire, notamment splénique.'
    ]
  },
  {
    id: 42,
    question: 'Concernant les monocytes :',
    p: [
      'la monocytopoïèse a lieu dans le thymus',
      'les monocytes migrent dans les tissus pour devenir des histiocytes',
      'le facteur de croissance qui permet la monocytopoïèse est le G-CSF',
      'leur taille est identique à celle des lymphocytes matures',
      'les monocytes sont capables de phagocytose'
    ],
    r: 'BE',
    c: [
      'Faux. La monocytopoïèse se déroule dans la moelle osseuse.',
      'Vrai. Les monocytes peuvent se différencier en macrophages tissulaires ou histiocytes.',
      'Faux. Le M-CSF est particulièrement impliqué dans la monocytopoïèse.',
      'Faux. Les monocytes sont généralement plus volumineux que les petits lymphocytes matures.',
      'Vrai. Les monocytes possèdent des capacités phagocytaires.'
    ]
  },
  {
    id: 43,
    question: 'Concernant les lymphocytes :',
    p: [
      'la lymphopoïèse B a lieu dans la moelle osseuse',
      'la lymphopoïèse T a lieu dans le thymus',
      'la moelle osseuse est un organe lymphoïde primaire',
      'la rate est un organe lymphoïde secondaire',
      'la lymphocytose sanguine est plus élevée chez les enfants que chez les adultes'
    ],
    r: 'ABCDE',
    c: [
      'Vrai. La différenciation initiale des lymphocytes B se déroule dans la moelle osseuse.',
      'Vrai. La maturation des lymphocytes T se déroule dans le thymus.',
      'Vrai. La moelle osseuse est un organe lymphoïde primaire.',
      'Vrai. La rate est un organe lymphoïde secondaire.',
      'Vrai. La numération physiologique des lymphocytes est généralement plus élevée chez le jeune enfant.'
    ]
  },
  {
    id: 44,
    question: 'Concernant l’interprétation d’un hémogramme :',
    p: [
      'une agranulocytose est une neutropénie < 0,5 G/L',
      'une pancytopénie est l’association d’une anémie, d’une thrombopénie et d’une neutropénie',
      'une thrombocytose est une diminution de la numération plaquettaire',
      'une anémie est définie par une diminution du nombre de globules rouges',
      'chez l’adulte, une hyperlymphocytose est définie par des lymphocytes > 7,5 G/L'
    ],
    r: 'AB',
    c: [
      'Vrai selon la grille. Une neutropénie inférieure à 0,5 G/L correspond à une neutropénie profonde, parfois désignée agranulocytose.',
      'Vrai. La pancytopénie associe une atteinte des lignées rouge, plaquettaire et leucocytaire.',
      'Faux. Une thrombocytose correspond à une augmentation des plaquettes.',
      'Faux. L’anémie est définie par une diminution de la concentration en hémoglobine.',
      'Faux. L’hyperlymphocytose de l’adulte se définit habituellement à partir de 4 G/L.'
    ]
  },
  {
    id: 45,
    question: 'Concernant les thrombopénies :',
    p: [
      'les fausses thrombopénies à l’EDTA sont dues à l’agrégation des plaquettes entre elles dans le tube',
      'lors d’une fausse thrombopénie à l’EDTA, le patient présente un risque hémorragique',
      'lors d’une fausse thrombopénie à l’EDTA, un prélèvement sur tube citraté permet de faire une numération plaquettaire correcte',
      'une thrombopénie est définie par des plaquettes < 100 G/L',
      'une numération plaquettaire à 50 G/L est normale chez un nourrisson de 15 jours'
    ],
    r: 'AC',
    c: [
      'Vrai. L’EDTA peut provoquer une agrégation plaquettaire in vitro et une numération artificiellement basse.',
      'Faux. Une pseudothrombopénie à l’EDTA n’entraîne pas en elle-même de risque hémorragique.',
      'Vrai. Un tube citraté peut permettre de vérifier la numération en évitant l’agrégation liée à l’EDTA.',
      'Faux. Une thrombopénie est généralement définie par des plaquettes inférieures à 150 G/L.',
      'Faux. Une numération à 50 G/L est anormalement basse chez un nourrisson.'
    ]
  },
  {
    id: 46,
    question: 'Les plaquettes sanguines :',
    p: [
      'sont incapables de faire du flip-flop membranaire sous antagoniste de la vitamine K',
      'ont un défaut d’adhésion au sous-endothélium au cours de la maladie de Glanzmann',
      'acquièrent un défaut d’agrégation en cas de traitement par abciximab',
      'sont consommées au cours d’une coagulation intravasculaire disséminée',
      'acquièrent des anomalies fonctionnelles au cours d’une circulation extracorporelle'
    ],
    r: 'CDE',
    c: [
      'Faux. Les AVK agissent sur les facteurs vitamine K-dépendants, pas directement sur le flip-flop membranaire des plaquettes.',
      'Faux. La thrombasthénie de Glanzmann entraîne principalement un défaut d’agrégation lié à GPIIbIIIa.',
      'Vrai. L’abciximab inhibe GPIIbIIIa et bloque l’agrégation plaquettaire.',
      'Vrai. La CIVD entraîne une consommation des plaquettes.',
      'Vrai. La circulation extracorporelle peut provoquer une activation et des dysfonctions plaquettaires.'
    ]
  },
  {
    id: 47,
    question: 'Le fibrinogène :',
    p: [
      'est un substrat de la thrombine',
      'permet de relier les plaquettes entre elles via la GpIb',
      'est classiquement inférieur à 2 g/L en cas de syndrome inflammatoire',
      'donne naissance aux D-Dimères après clivage par la plasmine',
      'est abaissé en cas d’insuffisance hépatocellulaire sévère'
    ],
    r: 'AE',
    c: [
      'Vrai. La thrombine transforme le fibrinogène en fibrine.',
      'Faux. Le fibrinogène relie les plaquettes principalement par GPIIbIIIa.',
      'Faux. Le fibrinogène est une protéine de l’inflammation et augmente généralement lors d’un syndrome inflammatoire.',
      'Faux selon la grille. Les D-dimères proviennent de la dégradation de fibrine réticulée, et non directement du fibrinogène.',
      'Vrai. Une insuffisance hépatocellulaire sévère peut réduire la synthèse du fibrinogène.'
    ]
  },
  {
    id: 48,
    question: 'Un déficit en facteur Willebrand peut entraîner la(les) anomalie(s) biologiques suivante(s) :',
    p: [
      'une diminution du Temps de Quick (%)',
      'un allongement du Temps de Céphaline avec Activateur (ratio M/T)',
      'une diminution du taux de facteur IX',
      'une diminution de l’activité cofacteur de la ristocétine',
      'un raccourcissement du temps d’occlusion in vitro (PFA)'
    ],
    r: 'BD',
    c: [
      'Faux. Le déficit en VWF n’entraîne pas classiquement une diminution du TQ.',
      'Vrai. La baisse secondaire du facteur VIII peut allonger le TCA.',
      'Faux. Le VWF protège principalement le facteur VIII, pas le facteur IX.',
      'Vrai. L’activité cofacteur de la ristocétine peut être diminuée dans la maladie de Willebrand.',
      'Faux. Le temps d’occlusion au PFA est plutôt allongé.'
    ]
  },
  {
    id: 49,
    question: 'Parmi les antiagrégants plaquettaires suivants, lequel (lesquels) inhibe(nt) l’agrégation des plaquettes de façon irréversible ?',
    p: [
      'cangrelor',
      'aspirine',
      'clopidogrel',
      'ticagrelor',
      'prasugrel'
    ],
    r: 'BCE',
    c: [
      'Faux. Le cangrelor est un inhibiteur réversible du récepteur P2Y12.',
      'Vrai. L’aspirine inhibe irréversiblement la COX-1 plaquettaire.',
      'Vrai. Le clopidogrel inhibe irréversiblement le récepteur P2Y12.',
      'Faux. Le ticagrelor est un inhibiteur réversible de P2Y12.',
      'Vrai. Le prasugrel inhibe irréversiblement P2Y12.'
    ]
  },
  {
    id: 50,
    question: 'Vous recevez aux urgences un patient de 19 ans dont vous ne connaissez pas les antécédents et qui doit subir une appendicectomie. Les résultats biologiques sont les suivants : temps de Quick à 80 %, temps de céphaline avec activateur (ratio) à 1,35 et fibrinogène à 3,8 g/L. Quelles analyses allez-vous demander pour écarter un risque hémorragique en lien avec ces résultats ?',
    p: [
      'dosage du facteur VIII',
      'dosage du facteur IX',
      'dosage du facteur X',
      'dosage du facteur XI',
      'dosage du facteur XII'
    ],
    r: 'ABD',
    c: [
      'Vrai. Un déficit en facteur VIII peut allonger le TCA et entraîner un risque hémorragique.',
      'Vrai. Un déficit en facteur IX est responsable de l’hémophilie B.',
      'Faux. Un déficit en facteur X affecte généralement aussi le TQ.',
      'Vrai. Un déficit en facteur XI peut entraîner un risque hémorragique périopératoire.',
      'Faux. Un déficit en facteur XII peut allonger le TCA sans entraîner habituellement de risque hémorragique.'
    ]
  },
  {
    id: 51,
    question: 'Le facteur V :',
    p: [
      'est une enzyme de la cascade de la coagulation',
      'est synthétisé de façon dépendante de la vitamine K',
      'est exploré par le Temps de Quick',
      'est diminué en cas d’insuffisance hépatique modérée',
      'est synthétisé par le système réticulo-endothélial'
    ],
    r: 'C',
    c: [
      'Faux. Le facteur V est un cofacteur et non une enzyme protéolytique.',
      'Faux. Le facteur V n’est pas vitamine K-dépendant.',
      'Vrai. Le TQ explore notamment la voie commune de la coagulation, incluant le facteur V.',
      'Faux selon la grille. La diminution du facteur V est particulièrement associée aux atteintes hépatocellulaires importantes.',
      'Faux. Le facteur V est principalement synthétisé par le foie.'
    ]
  },
  {
    id: 52,
    question: 'Vous recevez en consultation un patient traité par warfarine pour une thrombose veineuse profonde du membre inférieur droit. Sur son bilan biologique, l’INR est à 4,8 (zone cible : 2-3). Concernant ce résultat :',
    p: [
      'il est associé à un risque hémorragique majoré',
      'son calcul dépend uniquement d’un temps de Quick témoin et de celui du patient',
      'il peut être expliqué par la prise récente d’un médicament inducteur enzymatique',
      'il peut être expliqué par une cholestase',
      'il peut inciter à augmenter la posologie de la warfarine'
    ],
    r: 'AD',
    c: [
      'Vrai. Un INR supérieur à la zone thérapeutique augmente le risque hémorragique.',
      'Faux. Le calcul de l’INR intègre également l’indice de sensibilité international du réactif.',
      'Faux. Un inducteur enzymatique tend à accélérer le métabolisme de la warfarine et à diminuer son effet.',
      'Vrai. Une cholestase peut diminuer l’absorption de vitamine K et majorer l’effet des AVK.',
      'Faux. Un INR à 4,8 ne justifie pas une augmentation de la posologie.'
    ]
  },
  {
    id: 53,
    question: 'Un patient de 54 ans est admis en réanimation pour coma et polytraumatisme après un accident de la voie publique à haute cinétique. L’hémogramme et le bilan d’hémostase réalisés en urgence retrouvent les résultats suivants : Hémoglobine = 110 g/L, Plaquettes = 65 G/L, Leucocytes = 15 G/L, TQ = 45 %, TCA (M/T) : 1,6, Facteur II = 48 %, Facteur V = 35 %, Fibrinogène = 1,2 g/L. Ces résultats peuvent vous faire évoquer :',
    p: [
      'une hypovitaminose K',
      'une maladie de Willebrand',
      'une insuffisance hépatocellulaire sévère',
      'une coagulation intravasculaire disséminée',
      'un anticoagulant circulant de type lupique'
    ],
    r: 'CD',
    c: [
      'Faux selon la grille. Une carence isolée en vitamine K n’explique pas la diminution du facteur V.',
      'Faux. Une maladie de Willebrand n’explique pas ce tableau global de consommation et de baisse des facteurs.',
      'Vrai. Une atteinte hépatocellulaire sévère peut diminuer la synthèse du facteur V et du fibrinogène.',
      'Vrai. La CIVD peut associer thrombopénie, hypofibrinogénémie et allongement des temps de coagulation.',
      'Faux. Un anticoagulant lupique n’explique pas à lui seul la thrombopénie et la baisse du fibrinogène.'
    ]
  },
  {
    id: 54,
    question: 'Parmi les anticoagulants suivants, lequel (lesquels) est(sont) un(des) inhibiteur(s) indirect(s) du facteur Xa ?',
    p: [
      'les antagonistes de la vitamine K',
      "l'apixaban",
      "l'héparine non fractionnée",
      'le rivaroxaban',
      'le fondaparinux'
    ],
    r: 'CE',
    c: [
      'Faux selon la grille. Les AVK diminuent la synthèse des facteurs vitamine K-dépendants.',
      'Faux. L’apixaban est un inhibiteur direct du facteur Xa.',
      'Vrai. L’HNF potentialise l’antithrombine, ce qui entraîne notamment une inhibition indirecte du facteur Xa.',
      'Faux. Le rivaroxaban est un inhibiteur direct du facteur Xa.',
      'Vrai. Le fondaparinux agit indirectement sur le facteur Xa par l’intermédiaire de l’antithrombine.'
    ]
  },
  {
    id: 55,
    question: 'Concernant la pharmacocinétique des anticoagulants oraux directs (AOD), quelle(s) est(sont) la(les) réponse(s) juste(s) ?',
    p: [
      'le dabigatran a une mauvaise biodisponibilité',
      'après ingestion, le pic de concentration des AOD est atteint en environ 2h',
      'la demi-vie plasmatique normale des AOD est d’environ 24h',
      'le dabigatran est métabolisé au niveau hépatique',
      'les AOD sont tous des substrats de la P-glycoprotéine'
    ],
    r: 'ABE',
    c: [
      'Vrai. Le dabigatran présente une faible biodisponibilité orale.',
      'Vrai. Les AOD atteignent généralement leur concentration maximale rapidement, en quelques heures.',
      'Faux. Leur demi-vie est généralement plus courte que 24 heures, avec des variations selon les molécules et le patient.',
      'Faux. Le dabigatran n’est pas principalement métabolisé par les cytochromes hépatiques.',
      'Vrai. Les AOD sont des substrats de la P-glycoprotéine.'
    ]
  },
  {
    id: 56,
    question: 'La surveillance d’une transfusion sanguine plaquettaire :',
    p: [
      'doit être continue pendant les 15 premières minutes',
      'doit être intensifiée si la recherche d’anticorps irréguliers anti-érythrocytaires est positive',
      'nécessite le contrôle de l’efficacité clinique de la transfusion',
      'nécessite la réalisation du contrôle de concordance pré-transfusionnel',
      'nécessite de conserver la carte de contrôle ultime au moins deux heures'
    ],
    r: 'ACD',
    c: [
      'Vrai. Une surveillance rapprochée est nécessaire pendant les 15 premières minutes.',
      'Faux selon la grille. Une RAI positive n’impose pas à elle seule une intensification spécifique de la surveillance plaquettaire.',
      'Vrai. L’efficacité clinique et biologique de la transfusion doit être évaluée.',
      'Vrai. Le contrôle de concordance pré-transfusionnel est obligatoire.',
      'Faux. Le contrôle ultime ABO au lit du patient ne concerne pas systématiquement la transfusion plaquettaire.'
    ]
  },

  // QUESTION 57 ANNULÉE SUR LA GRILLE OFFICIELLE.
  // Elle est conservée ici en commentaire pour éviter
  // toute attribution artificielle de bonnes réponses.
  //
  // 57) Le contrôle ultime de compatibilité ABO :
  // a) est nécessaire en cas de transfusion de granulocytes
  // b) est nécessaire en cas de transfusion de plasma frais congelé
  // c) peut être reporté après la transfusion en cas d’urgence vitale
  // d) doit systématiquement être réalisé par le médecin prescripteur de la tranfusion
  // e) nécessite de prélever un tube de sang sur EDTA pour tester le patient

  {
    id: 58,
    question: 'Parmi les complications transfusionnelles suivantes, laquelle(lesquelles) entraine(nt) des symptômes de façon retardée ?',
    p: [
      'incompatibilité ABO',
      'contamination bactérienne',
      'contamination virale',
      'réaction allergique',
      'hémosidérose'
    ],
    r: 'CE',
    c: [
      'Faux selon la grille. L’incompatibilité ABO est classiquement associée à une réaction hémolytique aiguë.',
      'Faux selon la grille. La contamination bactérienne provoque principalement des réactions aiguës.',
      'Vrai. Une infection virale transmise par transfusion peut se manifester après un délai d’incubation.',
      'Faux. Les réactions allergiques transfusionnelles surviennent généralement rapidement.',
      'Vrai. L’hémosidérose apparaît progressivement après des transfusions répétées.'
    ]
  },
  {
    id: 59,
    question: "En cas d’urgence vitale immédiate nécessitant l'administration de produits sanguins labiles, le(s) produit(s) suivant(s) peut(peuvent) être transfusé(s) :",
    p: [
      'culots de globules rouges ABO compatibles après groupage du patient',
      'culots de globules rouges isogroupe après groupage du patient',
      'culots de globules rouges de groupe O',
      'plasma frais congelé issu de patient de groupe AB',
      'plasma frais congelé issu de patient de groupe O'
    ],
    r: 'CD',
    c: [
      'Faux selon la grille. En urgence vitale immédiate, on ne doit pas retarder la transfusion pour attendre le groupage.',
      'Faux selon la grille. Le recours à des CGR isogroupes suppose de disposer du groupage nécessaire.',
      'Vrai. Les CGR de groupe O peuvent être utilisés en urgence vitale immédiate selon les règles de délivrance.',
      'Vrai. Le plasma AB ne contient pas d’anticorps anti-A ou anti-B et peut être utilisé en urgence.',
      'Faux. Le plasma O contient des anticorps anti-A et anti-B.'
    ]
  },
  {
    id: 60,
    question: 'La commande d’un produit sanguin labile phénotypé est obligatoire dans la(les) situation(s) suivante(s) :',
    p: [
      'patient immunisé lors d’une transfusion précédente',
      'femme en âge de procréer',
      'patient atteint d’hémoglobinopathie',
      'patient polytransfusé',
      'sujet âgé'
    ],
    r: 'ABCD',
    c: [
      'Vrai. Un antécédent d’allo-immunisation impose des précautions de compatibilité érythrocytaire.',
      'Vrai. Le respect du phénotype érythrocytaire contribue à prévenir l’allo-immunisation chez les femmes en âge de procréer.',
      'Vrai. Les patients atteints d’hémoglobinopathie nécessitent une prévention renforcée de l’allo-immunisation.',
      'Vrai selon la grille. Les patients polytransfusés sont particulièrement exposés au risque d’allo-immunisation.',
      'Faux. L’âge avancé seul n’est pas une indication systématique de PSL phénotypé.'
    ]
  }
];

// Conversion dans le format attendu par le site.
// Les lettres de r proviennent exclusivement
// de la grille officielle, sans modification.

export default annale.map(({ id, question, p, r, c }) => ({
  id,
  type: r.length === 1 ? 'QCM' : 'QRM',
  question,
  options: p.map((text, i) => ({
    text,
    correct: r.includes('ABCDE'[i]),
    correction: c[i]
  })),
  explanation: `Réponse${r.length > 1 ? 's' : ''} officielle${r.length > 1 ? 's' : ''} : ${r.split('').join(', ')}.`
}));
