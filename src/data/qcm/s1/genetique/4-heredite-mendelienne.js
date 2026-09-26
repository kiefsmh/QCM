export const meta = {
  title: 'Hérédité mendélienne - transmissions autosomiques dominante et récessive',
}

export default [
  {
    id: 1,
    type: 'QCM',
    question: 'Que met en évidence Mendel en croisant une lignée pure de petits pois jaunes JJ avec une lignée pure de petits pois verts vv ?',
    options: [
      { text: 'Tous les descendants de première génération sont Jv et jaunes', correct: true, correction: 'Oui boss 🧠 Chaque descendant reçoit J d’un parent et v de l’autre ; J est dominant.' },
      { text: 'Le croisement démontre que le vert est dominant sur le jaune', correct: false, correction: 'Non chef. Dans cet exemple, le jaune est dominant et le vert est récessif.' },
      { text: 'La première génération comporte autant de pois jaunes que de pois verts', correct: false, correction: 'Non chef. Avec JJ × vv, tous les descendants ont le même génotype Jv.' },
      { text: 'Les descendants de première génération sont tous homozygotes', correct: false, correction: 'Non. Ils sont tous hétérozygotes Jv.' },
      { text: 'Tous les descendants de première génération sont vv et verts', correct: false, correction: 'Faux. Le parent JJ transmet forcément un allèle J.' },
    ],
    explanation: 'Le croisement de deux lignées pures JJ et vv donne une F1 uniforme, constituée de pois jaunes hétérozygotes Jv. Il illustre la loi d’uniformité des hybrides de première génération. (Cours, p. 1)'
  },
  {
    id: 2,
    type: 'QRM',
    question: 'Quelles propositions correspondent aux lois de Mendel présentées dans le cours ?',
    options: [
      { text: 'La disparition définitive d’un allèle récessif lorsqu’il est masqué en F1', correct: false, correction: 'Faux. L’allèle v reste présent chez les hybrides Jv et peut s’exprimer en F2.' },
      { text: 'La ségrégation des allèles lors de la formation des gamètes', correct: true, correction: 'Oui boss. Les deux allèles d’un individu se séparent dans les gamètes.' },
      { text: 'La transmission simultanée des deux allèles d’un même gène dans chaque gamète', correct: false, correction: 'Non chef. Un gamète ne reçoit qu’un des deux allèles de ce gène.' },
      { text: 'L’uniformité des hybrides de première génération issus de lignées pures', correct: true, correction: 'Exact 🧠 Les hybrides F1 du croisement étudié ont tous le même phénotype.' },
      { text: 'La transmission indépendante des caractères, dans les conditions où cette loi s’applique', correct: true, correction: 'Exact. C’est la troisième loi citée dans le support.' },
    ],
    explanation: 'Le cours présente l’uniformité des hybrides F1, la ségrégation des allèles et la transmission indépendante des caractères. Un allèle récessif masqué reste transmissible. (Cours, p. 1)'
  },
  {
    id: 3,
    type: 'QCM',
    question: 'Quel type de gamètes un petit pois hétérozygote Jv produit-il pour le gène étudié, dans le modèle mendélien ?',
    options: [
      { text: 'Des gamètes JJ et des gamètes vv, chacun avec une probabilité de 1/2', correct: false, correction: 'Non chef. JJ et vv sont des génotypes diploïdes, pas les contenus de ces gamètes.' },
      { text: 'Des gamètes J et des gamètes v, chacun avec une probabilité de 1/2', correct: true, correction: 'Oui boss 🎯 C’est la ségrégation des allèles : un seul allèle par gamète.' },
      { text: 'Des gamètes contenant chacun J et v', correct: false, correction: 'Non. Les deux allèles se séparent lors de la formation des gamètes.' },
      { text: 'Uniquement des gamètes J', correct: false, correction: 'Non chef. La dominance de J concerne le phénotype, pas sa présence dans tous les gamètes.' },
      { text: 'Uniquement des gamètes v', correct: false, correction: 'Faux. L’allèle J est lui aussi transmis.' },
    ],
    explanation: 'Un individu Jv produit, dans le modèle mendélien, 50 % de gamètes J et 50 % de gamètes v. Chaque gamète porte un seul allèle du gène étudié. (Cours, p. 1)'
  },
  {
    id: 4,
    type: 'QRM',
    question: 'Après le croisement de deux petits pois hybrides Jv, quelles proportions sont attendues en F2 ?',
    options: [
      { text: '75 % de descendants jaunes', correct: true, correction: 'Oui 🧠 Les génotypes JJ et Jv sont tous deux jaunes.' },
      { text: '25 % de descendants JJ', correct: true, correction: 'Exact 🎯 Un gamète J de chaque parent donne JJ : 1/2 × 1/2 = 1/4.' },
      { text: '25 % de descendants vv', correct: true, correction: 'Exact. C’est le quart de descendants qui exprime le phénotype vert récessif.' },
      { text: '50 % de descendants verts', correct: false, correction: 'Non chef. Seuls les vv sont verts, soit 25 % de la F2.' },
      { text: '50 % de descendants Jv', correct: true, correction: 'Oui boss. Jv peut provenir de J maternel et v paternel, ou de l’inverse.' },
    ],
    explanation: 'Le croisement Jv × Jv donne 25 % JJ, 50 % Jv et 25 % vv, soit 75 % de pois jaunes et 25 % de pois verts. La répétition de Jv à la place de vv dans la dernière phrase de la ronéo est une coquille. (Cours, p. 1)'
  },
  {
    id: 5,
    type: 'QCM',
    question: 'Dans l’exemple des petits pois du cours, quel génotype correspond à une lignée pure verte ?',
    options: [
      { text: 'Jv', correct: false, correction: 'Non chef. Jv est un génotype hybride, hétérozygote et jaune.' },
      { text: 'Le génotype Jv seulement si l’allèle v vient du père', correct: false, correction: 'Non chef. L’origine parentale de v ne lui permet pas de dominer J ici.' },
      { text: 'vv', correct: true, correction: 'Oui boss 🧠 La lignée pure verte est homozygote pour l’allèle récessif v.' },
      { text: 'JJ ou Jv indifféremment', correct: false, correction: 'Non. Ces deux génotypes donnent des pois jaunes dans le modèle étudié.' },
      { text: 'JJ', correct: false, correction: 'Faux. JJ correspond à la lignée pure jaune.' },
    ],
    explanation: 'Une lignée pure est homozygote pour le caractère étudié. Les lignées parentales du cours sont JJ pour les pois jaunes et vv pour les pois verts. (Cours, p. 1)'
  },
  {
    id: 6,
    type: 'QRM',
    question: 'Quels éléments sont compatibles avec une transmission autosomique dominante dans un arbre généalogique ?',
    options: [
      { text: 'Une transmission possible d’un père à son fils', correct: true, correction: 'Exact. Elle est compatible avec une localisation autosomique ; elle n’est toutefois pas exclusive du mode dominant.' },
      { text: 'Une transmission possible par une femme atteinte', correct: true, correction: 'Exact. Les deux sexes peuvent transmettre un variant autosomique dominant.' },
      { text: 'Une transmission père-fils suffit à prouver que la maladie est autosomique dominante', correct: false, correction: 'Non chef. Elle est aussi possible en autosomique récessif et ne démontre donc pas, seule, la dominance.' },
      { text: 'Une atteinte observée dans plusieurs générations successives', correct: true, correction: 'Oui boss 🧠 C’est l’aspect vertical classiquement décrit.' },
      { text: 'Une transmission possible par un homme atteint', correct: true, correction: 'Oui. La transmission n’est pas réservée aux mères.' },
    ],
    explanation: 'Une transmission verticale et la possibilité de transmission par les deux sexes orientent vers une affection autosomique dominante. Une transmission père-fils est compatible avec ce mode, mais ne lui est pas exclusive. (Cours, p. 3)'
  },
  {
    id: 7,
    type: 'QCM',
    question: 'Pour une maladie autosomique dominante à pénétrance complète, un parent hétérozygote Aa a un enfant avec un parent non porteur aa. Quel est le risque que cet enfant soit atteint ?',
    options: [
      { text: '100 %', correct: false, correction: 'Faux. Le parent Aa peut transmettre son allèle a.' },
      { text: '0 % si l’enfant est une fille', correct: false, correction: 'Non. Le gène est autosomique : le sexe ne change pas ce risque.' },
      { text: '75 %', correct: false, correction: 'Non chef. Ce n’est pas le croisement Aa × Aa.' },
      { text: '25 %', correct: false, correction: 'Non chef. Aa × aa donne 50 % Aa et 50 % aa.' },
      { text: '50 % pour chaque grossesse, indépendamment du sexe', correct: true, correction: 'Oui boss 🎯 Un enfant sur deux reçoit en moyenne l’allèle A ; chaque grossesse est un nouvel événement.' },
    ],
    explanation: 'Dans le croisement Aa × aa, la probabilité de transmission du variant A est de 1/2 à chaque grossesse. Avec une pénétrance complète, elle correspond aussi au risque d’être atteint. (Cours, p. 3)'
  },
  {
    id: 8,
    type: 'QRM',
    question: 'Concernant les symboles d’un arbre généalogique présentés dans le cours, quelles propositions sont exactes ?',
    options: [
      { text: 'Un symbole barré indique un individu décédé', correct: true, correction: 'Exact. La barre renseigne le décès de la personne représentée.' },
      { text: 'Un symbole rempli prouve que la personne est homozygote pour le variant pathogène', correct: false, correction: 'Non chef. Le remplissage indique un individu atteint ; il ne démontre pas à lui seul son génotype.' },
      { text: 'Une double ligne d’union indique une consanguinité', correct: true, correction: 'Oui 🎯 Cette convention aide à interpréter le contexte familial.' },
      { text: 'Un carré représente un homme', correct: true, correction: 'Exact 🧠 C’est la convention utilisée dans les arbres du cours.' },
      { text: 'Un cercle représente une femme', correct: true, correction: 'Oui boss. Cercle pour femme, carré pour homme.' },
    ],
    explanation: 'Le carré représente un homme, le cercle une femme, le symbole barré un individu décédé et la double ligne une union consanguine. Le remplissage identifie un individu atteint, sans préciser à lui seul son génotype. (Cours, p. 2)'
  },
  {
    id: 9,
    type: 'QCM',
    question: 'Une personne porte un variant responsable d’une maladie, mais n’exprime pas le phénotype attendu. Quelle notion décrit cette situation ?',
    options: [
      { text: 'La codominance', correct: false, correction: 'Faux. La codominance correspond à l’expression simultanée des deux allèles.' },
      { text: 'La semi-dominance', correct: false, correction: 'Non chef. Elle décrit un phénotype hétérozygote intermédiaire.' },
      { text: 'La ségrégation des allèles', correct: false, correction: 'Non. Cette notion concerne leur séparation dans les gamètes.' },
      { text: 'L’anticipation', correct: false, correction: 'Non chef. L’anticipation décrit un début plus précoce au fil des générations.' },
      { text: 'La pénétrance incomplète', correct: true, correction: 'Oui boss 🧠 Le variant est présent, mais le phénotype n’est pas exprimé chez tous les porteurs.' },
    ],
    explanation: 'La pénétrance désigne la proportion des porteurs d’un génotype qui expriment le phénotype associé. Le syndrome du QT long est cité comme exemple de pénétrance incomplète ; cela ne le rattache pas à FGFR3. (Cours, p. 3–4)'
  },
  {
    id: 10,
    type: 'QRM',
    question: 'Concernant l’expressivité variable et l’anticipation, quelles propositions sont exactes ?',
    options: [
      { text: 'L’expressivité variable peut se traduire par des manifestations différentes chez des personnes atteintes d’une même maladie', correct: true, correction: 'Exact 🧠 Elle concerne la façon dont la maladie s’exprime.' },
      { text: 'L’expressivité variable impose que tous les patients présentent les mêmes symptômes avec la même sévérité', correct: false, correction: 'Non chef. Cette proposition dit précisément l’inverse de la définition.' },
      { text: 'L’anticipation signifie que la maladie disparaît progressivement de la famille', correct: false, correction: 'Faux. Elle décrit une évolution de l’âge d’expression, pas une disparition.' },
      { text: 'L’anticipation correspond notamment à un âge de début plus précoce dans les générations suivantes', correct: true, correction: 'Oui boss 🎯 Le cours insiste sur l’expression de plus en plus précoce du phénotype.' },
      { text: 'Pénétrance incomplète et expressivité variable sont deux termes strictement synonymes', correct: false, correction: 'Non. Pénétrance : expression ou non ; expressivité : caractéristiques de cette expression.' },
    ],
    explanation: 'L’expressivité variable concerne les manifestations et leur intensité chez les personnes atteintes. L’anticipation désigne notamment un début de plus en plus précoce au fil des générations. (Cours, p. 3)'
  },
  {
    id: 11,
    type: 'QCM',
    question: 'Quelle définition correspond à la codominance ?',
    options: [
      { text: 'Le phénotype hétérozygote est nécessairement intermédiaire entre ceux des homozygotes', correct: false, correction: 'Faux. Cette notion correspond à la semi-dominance.' },
      { text: 'Un allèle dominant empêche toute expression de l’autre allèle', correct: false, correction: 'Non chef. C’est une description de dominance complète, pas de codominance.' },
      { text: 'Les effets phénotypiques des deux allèles sont exprimés simultanément chez l’hétérozygote', correct: true, correction: 'Oui boss 🧠 Les deux expressions coexistent, sans se fondre en un phénotype intermédiaire.' },
      { text: 'La maladie commence plus tôt à chaque génération', correct: false, correction: 'Non chef. Cette proposition définit l’anticipation.' },
      { text: 'Le variant pathogène ne s’exprime chez aucun porteur', correct: false, correction: 'Non. Cela ne définit pas la codominance.' },
    ],
    explanation: 'La codominance correspond à l’expression simultanée des deux allèles chez l’hétérozygote. Elle se distingue de la semi-dominance, qui produit un phénotype intermédiaire. (Cours, p. 3)'
  },
  {
    id: 12,
    type: 'QRM',
    question: 'Quelles propositions distinguent correctement les notions de dominance, de codominance et de semi-dominance ?',
    options: [
      { text: 'Une dominance complète signifie que l’allèle récessif ne peut plus être transmis', correct: false, correction: 'Non chef. Un allèle peut être masqué dans le phénotype et rester transmissible.' },
      { text: 'En semi-dominance, le phénotype hétérozygote est intermédiaire entre ceux des deux homozygotes', correct: true, correction: 'Oui boss. C’est la définition donnée dans le cours.' },
      { text: 'La semi-dominance est définie par une transmission exclusivement maternelle', correct: false, correction: 'Faux. Elle décrit la relation entre génotype et phénotype, pas l’origine parentale de la transmission.' },
      { text: 'Dans l’exemple des petits pois, J domine v pour la couleur', correct: true, correction: 'Exact 🎯 Le pois Jv est jaune comme le pois JJ.' },
      { text: 'En codominance, les deux expressions phénotypiques coexistent', correct: true, correction: 'Exact 🧠 Il ne faut pas la confondre avec un phénotype intermédiaire.' },
    ],
    explanation: 'La dominance complète masque l’expression d’un allèle chez l’hétérozygote ; la codominance permet l’expression des deux ; la semi-dominance produit un phénotype intermédiaire. (Cours, p. 1 et 3)'
  },
  {
    id: 13,
    type: 'QCM',
    question: 'Quelle proportion de cas d’achondroplasie est liée à une mutation de novo selon le cours ?',
    options: [
      { text: 'Aucun cas : la mutation est toujours héritée', correct: false, correction: 'Non. Une grande majorité des cas décrits résulte justement d’une mutation nouvelle.' },
      { text: 'Tous les cas : une transmission familiale est impossible', correct: false, correction: 'Non chef. Une mutation de novo peut ensuite être transmise, et il existe des formes familiales.' },
      { text: 'Environ 80 %', correct: true, correction: 'Oui boss 🎯 Achondroplasie : environ 80 % de mutations de novo dans le cours.' },
      { text: 'Environ 50 %', correct: false, correction: 'Faux. Ce chiffre évoque plutôt le risque de transmission par un parent hétérozygote.' },
      { text: 'Environ 20 %', correct: false, correction: 'Non chef. Le support donne environ 80 % de cas de novo.' },
    ],
    explanation: 'L’achondroplasie est une affection monogénique autosomique dominante liée à FGFR3. Le cours indique qu’environ 80 % des cas correspondent à une mutation de novo. (Cours, p. 2–3)'
  },
  {
    id: 14,
    type: 'QRM',
    question: 'Quels éléments cliniques ou radiologiques sont décrits dans l’achondroplasie ?',
    options: [
      { text: 'Une augmentation de la longueur des os longs', correct: false, correction: 'Non chef. L’ossification endochondrale est diminuée, ce qui entraîne leur raccourcissement.' },
      { text: 'Des os courts et des métaphyses élargies', correct: true, correction: 'Oui. Ces éléments radiologiques figurent dans le support.' },
      { text: 'Des complications orthopédiques et médullaires possibles', correct: true, correction: 'Exact. La maladie ne se limite pas à une petite taille.' },
      { text: 'Un raccourcissement des membres avec un tronc relativement préservé', correct: true, correction: 'Oui boss 🧠 C’est la disproportion corporelle décrite dans le cours.' },
      { text: 'Une macrocéphalie', correct: true, correction: 'Exact. Elle fait partie des signes cités.' },
    ],
    explanation: 'Le cours décrit des membres courts, un tronc relativement préservé, une macrocéphalie, des métaphyses élargies et des complications orthopédiques ou médullaires. La taille adulte donnée est de l’ordre de 1,30 m. (Cours, p. 3)'
  },
  {
    id: 15,
    type: 'QCM',
    question: 'Quel mécanisme explique l’achondroplasie liée à FGFR3 ?',
    options: [
      { text: 'Une perte de fonction de FGFR3 stimule la prolifération des chondrocytes', correct: false, correction: 'Non chef. Dans l’achondroplasie, il s’agit d’un gain de fonction.' },
      { text: 'Un gain de fonction de FGFR3 inhibe la prolifération des chondrocytes et diminue l’ossification endochondrale', correct: true, correction: 'Oui boss 🧠 Récepteur trop actif → frein sur les chondrocytes → os longs raccourcis.' },
      { text: 'Une inactivation de FGFR3 augmente l’ossification endochondrale et raccourcit les os longs', correct: false, correction: 'Faux. La chaîne causale attendue est une activation excessive avec diminution de l’ossification endochondrale.' },
      { text: 'Le défaut principal est l’absence d’internalisation du LDL par son récepteur', correct: false, correction: 'Non chef. Cela correspond au mécanisme de l’hypercholestérolémie familiale décrit dans le cours.' },
      { text: 'Le mécanisme principal est une dilatation des capillaires provoquant des shunts artérioveineux', correct: false, correction: 'Non. Cette description appartient à la maladie de Rendu-Osler.' },
    ],
    explanation: 'FGFR3 code un récepteur du facteur de croissance fibroblastique. Dans l’achondroplasie, son gain de fonction entraîne une activation excessive, inhibe la prolifération des chondrocytes et diminue l’ossification endochondrale. (Cours, p. 3)'
  },
  {
    id: 16,
    type: 'QRM',
    question: 'Concernant le traitement de l’achondroplasie présenté dans le cours, quelles propositions sont exactes ?',
    options: [
      { text: 'L’injection est quotidienne', correct: true, correction: 'Oui boss 🎯 Le cours précise une administration chaque jour.' },
      { text: 'Il repose sur un peptide administré par injection sous-cutanée', correct: true, correction: 'Exact 🧠 C’est la voie d’administration indiquée.' },
      { text: 'Il permet le même effet sur la croissance après soudure des épiphyses', correct: false, correction: 'Non chef. Le cours conditionne ce traitement à l’absence de soudure des épiphyses.' },
      { text: 'Il s’adresse aux jeunes patients dont les épiphyses ne sont pas soudées', correct: true, correction: 'Oui. Les cartilages de croissance doivent encore permettre une croissance osseuse.' },
      { text: 'Il vise à freiner une voie de signalisation excessivement activée', correct: true, correction: 'Exact. Il s’oppose aux conséquences de l’hyperactivation de cette voie.' },
    ],
    explanation: 'Le traitement décrit est un peptide injecté quotidiennement par voie sous-cutanée, qui régule négativement la voie trop activée. Son utilisation pour la croissance concerne les patients dont les épiphyses ne sont pas soudées. (Cours, p. 3)'
  },
  {
    id: 17,
    type: 'QCM',
    question: 'Quelle affirmation concernant FGFR3 est exacte ?',
    options: [
      { text: 'FGFR3 ne peut être associé qu’à un seul phénotype clinique', correct: false, correction: 'Faux. Plusieurs affections squelettiques sont associées à ce gène.' },
      { text: 'FGFR3 est présenté comme le gène des formes dominantes de syndrome du QT long', correct: false, correction: 'Non chef. Le paragraphe sur le QT long illustre la pénétrance ; il ne s’agit pas d’une maladie de FGFR3.' },
      { text: 'Des variants de FGFR3 peuvent être associés à l’achondroplasie, à l’hypochondroplasie ou au nanisme thanatophore', correct: true, correction: 'Oui boss 🧠 Un même gène peut être associé à plusieurs phénotypes selon le variant.' },
      { text: 'FGFR3 est le gène responsable de la neurofibromatose de type 1', correct: false, correction: 'Non chef. La neurofibromatose de type 1 ne doit pas être rattachée à FGFR3.' },
      { text: 'FGFR3 est le gène du récepteur au LDL impliqué dans l’hypercholestérolémie familiale', correct: false, correction: 'Non. Il code un récepteur du facteur de croissance fibroblastique, pas le récepteur du LDL.' },
    ],
    explanation: 'Le cours cite l’achondroplasie, l’hypochondroplasie et le nanisme thanatophore parmi les affections associées à FGFR3. Les autres maladies discutées dans cette section ne doivent pas être attribuées à ce gène. (Cours, p. 4)'
  },
  {
    id: 18,
    type: 'QRM',
    question: 'Concernant les caractéristiques génétiques de l’achondroplasie, quelles propositions sont exactes ?',
    options: [
      { text: 'Le terme monogénique signifie que plusieurs gènes différents sont nécessaires pour provoquer cette maladie', correct: false, correction: 'Non chef. Monogénique signifie qu’un seul gène est responsable de l’affection.' },
      { text: 'La pénétrance de l’achondroplasie est décrite comme complète', correct: true, correction: 'Exact. C’est explicitement opposé à l’exemple de pénétrance incomplète du QT long.' },
      { text: 'Il s’agit d’une affection monogénique', correct: true, correction: 'Oui boss 🧠 Le gène impliqué est FGFR3.' },
      { text: 'Une mutation de novo implique que la maladie n’est pas génétique', correct: false, correction: 'Faux. De novo signifie que le variant n’a pas été hérité ; son origine reste génétique.' },
      { text: 'Le gain de fonction de FGFR3 est le mécanisme décrit', correct: true, correction: 'Oui. Il conduit à une inhibition de la prolifération des chondrocytes.' },
    ],
    explanation: 'L’achondroplasie est une affection monogénique à pénétrance complète liée à un gain de fonction de FGFR3. Un variant peut être de novo et néanmoins être génétique puis transmissible. (Cours, p. 2–4)'
  },
  {
    id: 19,
    type: 'QCM',
    question: 'Quel tableau clinique est le plus évocateur de la maladie de Rendu-Osler selon le cours ?',
    options: [
      { text: 'Des épistaxis spontanées abondantes associées à des télangiectasies de la langue et des extrémités des doigts', correct: true, correction: 'Oui boss 🎯 C’est le tableau caractéristique décrit pour la télangiectasie hémorragique héréditaire.' },
      { text: 'Un raccourcissement isolé des os longs par hyperactivation de FGFR3', correct: false, correction: 'Non chef. Rendu-Osler est une affection vasculaire, pas une maladie de FGFR3.' },
      { text: 'Une hypercholestérolémie avec des dépôts tendineux de cholestérol', correct: false, correction: 'Faux. Ces signes évoquent l’hypercholestérolémie familiale.' },
      { text: 'Des neurofibromes associés à des atteintes cutanées et nerveuses', correct: false, correction: 'Non. Le cours décrit ces manifestations dans la neurofibromatose de type 1.' },
      { text: 'Des membres courts, une macrocéphalie et des métaphyses élargies', correct: false, correction: 'Non chef. Ce tableau correspond à l’achondroplasie.' },
    ],
    explanation: 'La maladie de Rendu-Osler, ou télangiectasie hémorragique héréditaire, est caractérisée notamment par des épistaxis spontanées et des télangiectasies, en lien avec des anomalies vasculaires. (Cours, p. 4)'
  },
  {
    id: 20,
    type: 'QRM',
    question: 'Quelles propriétés de la maladie de Rendu-Osler sont rapportées dans le cours ?',
    options: [
      { text: 'La maladie illustre une homogénéité génique comparable à celle de l’achondroplasie', correct: false, correction: 'Faux. Le cours oppose justement plusieurs gènes possibles dans Rendu-Osler à un seul gène dans l’achondroplasie.' },
      { text: 'Tous les individus atteints présentent obligatoirement les mêmes manifestations et la même sévérité', correct: false, correction: 'Non chef. Cela contredit l’expressivité variable.' },
      { text: 'Plusieurs gènes peuvent être impliqués dans des tableaux cliniques similaires', correct: true, correction: 'Oui boss. Cela illustre l’hétérogénéité génique.' },
      { text: 'L’expression clinique peut varier d’un individu atteint à l’autre', correct: true, correction: 'Exact. Le support insiste sur l’expressivité variable.' },
      { text: 'Une dilatation de petits vaisseaux et la présence possible de shunts artérioveineux', correct: true, correction: 'Exact 🧠 Le cours relie ces anomalies vasculaires aux saignements.' },
    ],
    explanation: 'Rendu-Osler est une affection vasculaire à expressivité variable. Le fait que plusieurs gènes puissent produire un phénotype similaire illustre l’hétérogénéité génique décrite dans le cours. (Cours, p. 4)'
  },
  {
    id: 21,
    type: 'QCM',
    question: 'Dans la forme d’hypercholestérolémie familiale liée à un défaut du récepteur au LDL décrite dans le cours, quel mécanisme entraîne l’augmentation du LDL circulant ?',
    options: [
      { text: 'Une activation constitutive de FGFR3', correct: false, correction: 'Non chef. Ce mécanisme concerne l’achondroplasie.' },
      { text: 'Une internalisation excessive du LDL par un récepteur trop efficace', correct: false, correction: 'Faux. Le défaut décrit diminue l’internalisation du LDL.' },
      { text: 'Une inhibition de l’ossification endochondrale', correct: false, correction: 'Non chef. Ce mécanisme explique le raccourcissement des os dans l’achondroplasie.' },
      { text: 'Une dilatation des capillaires responsables d’épistaxis', correct: false, correction: 'Non. Cela appartient à la description de Rendu-Osler.' },
      { text: 'Une présence ou une efficacité insuffisante du récepteur au LDL, limitant son internalisation', correct: true, correction: 'Oui boss 🧠 Le LDL est moins bien capté par les cellules et reste davantage dans la circulation.' },
    ],
    explanation: 'Le cours décrit une hypercholestérolémie familiale liée à un récepteur au LDL insuffisamment présent ou efficace, entraînant une diminution de l’internalisation du LDL. (Cours, p. 4)'
  },
  {
    id: 22,
    type: 'QRM',
    question: 'Concernant les manifestations de l’hypercholestérolémie familiale présentée dans le cours, quelles propositions sont exactes ?',
    options: [
      { text: 'L’athérosclérose fait partie des complications cardiovasculaires possibles', correct: true, correction: 'Exact 🎯 Ces complications peuvent être plus tardives chez les hétérozygotes.' },
      { text: 'Un individu hétérozygote ne peut présenter aucune manifestation clinique', correct: false, correction: 'Non chef. Les hétérozygotes peuvent aussi présenter des signes et des complications, souvent plus tardivement.' },
      { text: 'Des arcs cornéens peuvent être observés', correct: true, correction: 'Exact. Le cours cite un liseré en périphérie de l’iris, possible aussi chez les hétérozygotes.' },
      { text: 'Des dépôts tendineux de cholestérol et un xanthélasma peuvent être observés', correct: true, correction: 'Oui. Ces dépôts font partie des signes cliniques présentés.' },
      { text: 'Les formes homozygotes peuvent être plus précoces et plus sévères que les formes hétérozygotes', correct: true, correction: 'Oui boss 🧠 Le nombre d’allèles atteints influence l’âge et la sévérité du tableau décrit.' },
    ],
    explanation: 'Le cours décrit des différences de précocité et de sévérité entre homozygotes et hétérozygotes, ainsi que des arcs cornéens, des dépôts tendineux, un xanthélasma et des complications athéroscléreuses. (Cours, p. 4)'
  },
  {
    id: 23,
    type: 'QCM',
    question: 'Dans le modèle simplifié d’une maladie autosomique récessive, avec A l’allèle fonctionnel et a l’allèle pathogène, quel génotype est atteint ?',
    options: [
      { text: 'Tous les génotypes contenant au moins un A', correct: false, correction: 'Non. C’est précisément la présence d’un allèle fonctionnel A qui protège dans ce modèle.' },
      { text: 'Le génotype A/a uniquement chez les garçons', correct: false, correction: 'Non chef. Le locus est autosomique : les règles ne dépendent pas du sexe.' },
      { text: 'A/A', correct: false, correction: 'Non chef. A/A possède deux allèles fonctionnels : il est sain et non porteur dans ce modèle.' },
      { text: 'a/a', correct: true, correction: 'Oui boss 🎯 Deux allèles pathogènes sont présents : la maladie récessive s’exprime.' },
      { text: 'A/a', correct: false, correction: 'Faux 🧠 A/a est un porteur sain : l’allèle fonctionnel permet d’éviter la maladie dans ce modèle.' },
    ],
    explanation: 'Dans le modèle A/a présenté, les sujets a/a sont atteints et les sujets A/a sont porteurs sains. Des sujets ayant deux variants pathogènes différents du même gène peuvent également être atteints : il s’agit d’hétérozygotes composites. (Cours, p. 8 et 10 PDF.)'
  },
  {
    id: 24,
    type: 'QRM',
    question: 'Concernant les règles générales de la transmission autosomique récessive, quelles propositions sont exactes ?',
    options: [
      { text: 'Les deux sexes peuvent transmettre l’allèle pathogène', correct: true, correction: 'Exact. Père et mère peuvent transmettre leur allèle récessif.' },
      { text: 'Une transmission autosomique récessive est une transmission liée à l’X', correct: false, correction: 'Faux. Les transmissions liées à l’X concernent un gonosome, pas un autosome.' },
      { text: 'Un arbre peut montrer plusieurs enfants atteints dans une fratrie avec des parents indemnes', correct: true, correction: 'Oui 🎯 C’est l’aspect horizontal classique : des parents porteurs sains peuvent avoir des enfants atteints.' },
      { text: 'Toute personne atteinte a nécessairement un parent atteint', correct: false, correction: 'Non chef. Deux parents A/a, tous deux indemnes, peuvent avoir un enfant a/a.' },
      { text: 'Le locus impliqué se situe sur un autosome', correct: true, correction: 'Oui boss 🧠 Autosomique signifie que le locus n’est pas porté par un chromosome sexuel.' },
    ],
    explanation: 'La transmission autosomique récessive peut concerner les deux sexes et se traduit classiquement par une atteinte de fratries, donnant un aspect horizontal à l’arbre. (Cours, p. 8 PDF.)'
  },
  {
    id: 25,
    type: 'QCM',
    question: 'Deux parents porteurs sains A/a ont déjà un enfant atteint d’une maladie autosomique récessive. Quel est le risque pour leur prochaine grossesse, dans le modèle mendélien simple ?',
    options: [
      { text: '0 %, car ils ont déjà eu l’enfant atteint prévu par le croisement', correct: false, correction: 'Non chef 😭 Les probabilités ne sont pas un quota d’enfants : chaque grossesse est indépendante.' },
      { text: '75 %', correct: false, correction: 'Faux. 75 % est ici la probabilité d’un enfant indemne, A/A ou A/a.' },
      { text: '50 %', correct: false, correction: 'Non. 50 % correspond à la probabilité d’un enfant A/a, porteur sain, dans ce croisement.' },
      { text: '25 %', correct: true, correction: 'Oui boss 🎯 Chaque parent transmet a avec une probabilité de 1/2 : 1/2 × 1/2 = 1/4.' },
      { text: '100 %', correct: false, correction: 'Non chef. Les parents peuvent chacun transmettre A ou a : les enfants ne seront pas tous a/a.' },
    ],
    explanation: 'Le croisement A/a × A/a donne, à chaque grossesse, 25 % d’enfants a/a atteints, indépendamment des résultats des grossesses précédentes. (Cours, p. 8 PDF ; application du croisement.)'
  },
  {
    id: 26,
    type: 'QRM',
    question: 'Pour le croisement A/a × A/a dans une maladie autosomique récessive, quelles probabilités sont exactes à chaque grossesse ?',
    options: [
      { text: '75 % d’enfants indemnes de la maladie', correct: true, correction: 'Exact. On additionne les 25 % A/A et les 50 % A/a.' },
      { text: '25 % d’enfants A/A, sains et non porteurs', correct: true, correction: 'Oui boss 🧠 A doit être transmis par les deux parents : 1/2 × 1/2 = 1/4.' },
      { text: '50 % d’enfants atteints si l’enfant est une fille', correct: false, correction: 'Non chef. Le sexe ne modifie pas ce risque autosomique : il reste de 25 %.' },
      { text: '50 % d’enfants A/a, porteurs sains', correct: true, correction: 'Exact. A/a peut résulter de A maternel + a paternel ou de a maternel + A paternel.' },
      { text: '25 % d’enfants a/a, atteints', correct: true, correction: 'Oui 🎯 Les deux parents doivent transmettre a.' },
    ],
    explanation: 'Le tableau de croisement donne les proportions 1/4 A/A, 1/2 A/a et 1/4 a/a. Les sujets A/A et A/a sont indemnes dans le modèle récessif simple. (Cours, p. 8 PDF.)'
  },
  {
    id: 27,
    type: 'QCM',
    question: 'Une personne atteinte a/a et une personne porteuse saine A/a ont un enfant. Quelle répartition est attendue ?',
    options: [
      { text: '100 % d’enfants atteints', correct: false, correction: 'Non. La transmission de A par le parent porteur donne un enfant A/a indemne.' },
      { text: '50 % d’enfants A/A et 50 % d’enfants a/a', correct: false, correction: 'Non chef. Le parent atteint n’a aucun allèle A à transmettre.' },
      { text: '100 % d’enfants sains non porteurs', correct: false, correction: 'Non chef. Le parent a/a transmet obligatoirement a : aucun enfant ne peut être A/A.' },
      { text: '50 % d’enfants atteints a/a et 50 % de porteurs sains A/a', correct: true, correction: 'Oui boss 🎯 Le parent A/a transmet A une fois sur deux et a une fois sur deux ; l’autre transmet toujours a.' },
      { text: '25 % d’enfants atteints et 75 % d’enfants indemnes', correct: false, correction: 'Faux. Cette répartition correspond au croisement A/a × A/a.' },
    ],
    explanation: 'Le croisement a/a × A/a produit pour moitié des enfants a/a atteints et pour moitié des enfants A/a porteurs sains. (Cours, p. 9 PDF ; application du croisement.)'
  },
  {
    id: 28,
    type: 'QRM',
    question: 'Dans le croisement a/a × A/A pour une maladie autosomique récessive à pénétrance complète, quelles propositions sont exactes ?',
    options: [
      { text: 'Aucun enfant ne peut transmettre ensuite l’allèle pathogène', correct: false, correction: 'Faux. Les enfants A/a peuvent transmettre a à leur propre descendance.' },
      { text: 'Tous les enfants sont porteurs sains dans ce modèle', correct: true, correction: 'Oui 🎯 Ils possèdent a, mais aussi un allèle fonctionnel A.' },
      { text: 'Tous les enfants reçoivent un allèle a du parent atteint', correct: true, correction: 'Oui boss 🧠 Le parent a/a ne peut transmettre que a.' },
      { text: 'Tous les enfants sont A/a', correct: true, correction: 'Exact. Chaque enfant reçoit a d’un parent et A de l’autre.' },
      { text: 'La moitié des enfants sont a/a', correct: false, correction: 'Non chef. Le parent A/A ne transmet jamais a.' },
    ],
    explanation: 'Le croisement a/a × A/A donne uniquement des sujets A/a, indemnes mais porteurs de l’allèle pathogène. (Cours, p. 8–9 PDF ; application des règles de transmission.)'
  },
  {
    id: 29,
    type: 'QCM',
    question: 'Les parents d’un enfant sont tous deux A/a pour une maladie autosomique récessive à pénétrance complète. L’enfant est connu comme indemne, sans résultat moléculaire. Quelle est sa probabilité d’être porteur sain ?',
    options: [
      { text: '1', correct: false, correction: 'Non chef. L’enfant peut aussi être A/A, donc sain non porteur.' },
      { text: '1/4', correct: false, correction: 'Non chef. 1/4 est la probabilité d’être A/A avant de tenir compte du fait que l’enfant est indemne.' },
      { text: '2/3', correct: true, correction: 'Oui boss 🎯 Parmi les trois issues indemnes, on compte A/A, A/a et a/A : deux sur trois sont porteuses.' },
      { text: '3/4', correct: false, correction: 'Non. 3/4 est la probabilité globale d’être indemne, pas la probabilité d’être porteur parmi les indemnes.' },
      { text: '1/2', correct: false, correction: 'Faux 🧠 1/2 est le risque d’être A/a avant de savoir si l’enfant est atteint. Ici on conditionne sur son absence de maladie.' },
    ],
    explanation: 'Dans le croisement A/a × A/a, P(porteur | indemne) = (1/2)/(3/4) = 2/3. Le calcul suppose une maladie à pénétrance complète et une absence d’atteinte établie. (Cours, p. 8 PDF ; application conditionnelle du croisement.)'
  },
  {
    id: 30,
    type: 'QRM',
    question: 'Concernant les fréquences de porteurs hétérozygotes citées dans le cours, quelles associations sont exactes ?',
    options: [
      { text: 'Maladie de Tay-Sachs : environ 1/25 porteurs dans les populations juives ashkénazes citées', correct: true, correction: 'Exact. Le cours souligne l’influence de la population étudiée sur le risque de portage.' },
      { text: 'Mucoviscidose : environ 1/25 à 1/30 dans la population caucasienne citée', correct: true, correction: 'Oui boss 🧠 Il s’agit de la fréquence des porteurs, pas de celle des personnes atteintes.' },
      { text: 'Hémochromatose de type 1 : environ 1/10 à 1/12 porteurs dans les populations d’Europe du Nord citées', correct: true, correction: 'Oui 🎯 Le cours associe cette fréquence élevée aux populations d’Europe du Nord.' },
      { text: 'Une fréquence de porteurs est nécessairement identique dans toutes les populations', correct: false, correction: 'Non chef. Les fréquences peuvent différer selon les populations, ce qui compte dans le conseil génétique.' },
      { text: 'Amyotrophie spinale : environ 1/40 à 1/50 porteurs', correct: true, correction: 'Exact. Ne transforme pas ce chiffre en prévalence de la maladie : ce sont des hétérozygotes.' },
    ],
    explanation: 'Le cours donne des fréquences de porteurs propres à certaines populations. Ces fréquences ne doivent pas être confondues avec la fréquence des personnes atteintes. (Cours, p. 9–10 PDF.)'
  },
  {
    id: 31,
    type: 'QCM',
    question: 'Une personne atteinte a/a d’une maladie autosomique récessive a un conjoint indemne, non apparenté et non testé. Dans la population de ce conjoint, la probabilité d’être porteur A/a est de 1/25 ; sinon, il est A/A. Quel risque d’enfant atteint calcule-t-on avec ces hypothèses ?',
    options: [
      { text: '1/2', correct: false, correction: 'Non. Le risque de 1/2 supposerait que le conjoint soit déjà identifié comme A/a.' },
      { text: '1/25', correct: false, correction: 'Non chef. Il faut encore multiplier le risque de portage du conjoint par sa probabilité de transmettre a.' },
      { text: '1/50', correct: true, correction: 'Oui boss 🎯 Le parent atteint transmet toujours a ; le conjoint est porteur avec un risque de 1/25 et transmet alors a une fois sur deux : 1/25 × 1/2 = 1/50.' },
      { text: '1/100', correct: false, correction: 'Faux. Le facteur 1/4 s’applique à deux parents A/a connus. Ici le parent a/a transmet a avec certitude.' },
      { text: '0', correct: false, correction: 'Non chef. Un conjoint indemne peut être porteur sain A/a.' },
    ],
    explanation: 'Avec un parent a/a et un conjoint indemne de statut inconnu, le risque est la fréquence de portage du conjoint multipliée par 1/2. Les hypothèses données conduisent à 1/50, soit 2 %. (Cours, p. 9 PDF ; application du risque de portage.)'
  },
  {
    id: 32,
    type: 'QRM',
    question: 'Concernant consanguinité et pseudodominance dans une maladie autosomique récessive, quelles propositions sont exactes ?',
    options: [
      { text: 'Deux personnes apparentées peuvent partager un allèle pathogène hérité d’un ancêtre commun', correct: true, correction: 'Oui boss 🧠 C’est le mécanisme qui augmente la probabilité que les deux conjoints portent le même variant rare.' },
      { text: 'La pseudodominance transforme l’allèle récessif en allèle dominant', correct: false, correction: 'Faux. Elle décrit l’apparence de l’arbre ; le mécanisme génétique reste récessif.' },
      { text: 'La consanguinité peut augmenter le risque d’une maladie autosomique récessive', correct: true, correction: 'Exact. Elle favorise la rencontre de deux allèles pathogènes hérités d’un ancêtre commun.' },
      { text: 'Chez deux parents déjà connus A/a, la consanguinité fait passer automatiquement le risque de 25 % à 50 %', correct: false, correction: 'Non chef. Une fois leurs génotypes A/a établis, le croisement reste A/a × A/a : le risque est de 25 % par grossesse.' },
      { text: 'La pseudodominance peut donner une apparence verticale à un arbre de maladie récessive', correct: true, correction: 'Oui 🎯 Plusieurs générations atteintes peuvent faire évoquer à tort une transmission dominante.' },
    ],
    explanation: 'La consanguinité favorise le partage d’allèles issus d’un ancêtre commun. Un arbre récessif peut prendre un aspect vertical, appelé pseudodominance, sans modification du mode de transmission. (Cours, p. 10 PDF.)'
  },
  {
    id: 33,
    type: 'QCM',
    question: 'Quel cas correspond à un hétérozygote composite pour une maladie autosomique récessive ?',
    options: [
      { text: 'Deux copies identiques du même allèle pathogène', correct: false, correction: 'Faux. C’est une homozygotie pour ce variant.' },
      { text: 'Un seul variant pathogène associé à un allèle fonctionnel du même gène', correct: false, correction: 'Non. C’est le portage hétérozygote simple, A/a dans le modèle du cours.' },
      { text: 'Deux variants pathogènes situés uniquement sur une même copie du gène, l’autre copie étant fonctionnelle', correct: false, correction: 'Non chef. Ici les variants sont en cis. Pour le cas composite décrit, les deux copies du gène portent chacune un variant pathogène.' },
      { text: 'Un variant pathogène dans chacun de deux gènes distincts', correct: false, correction: 'Non chef. Cela correspond à un double hétérozygote, pas à un hétérozygote composite pour un même gène.' },
      { text: 'Deux variants pathogènes différents du même gène, un sur chaque chromosome homologue', correct: true, correction: 'Oui boss 🎯 Deux variants différents au même locus, en trans : c’est l’hétérozygotie composite.' },
    ],
    explanation: 'Un hétérozygote composite possède deux variants pathogènes différents du même gène sur les deux chromosomes homologues. Un double hétérozygote concerne deux gènes distincts. (Cours, p. 10 PDF.)'
  },
  {
    id: 34,
    type: 'QRM',
    question: 'Concernant la base moléculaire de la drépanocytose, quelles propositions sont exactes ?',
    options: [
      { text: 'L’hémoglobine anormale est appelée HbS', correct: true, correction: 'Oui. HbS est l’hémoglobine associée à la falciformation des globules rouges.' },
      { text: 'Elle implique le gène de la bêta-globine', correct: true, correction: 'Oui boss 🧠 C’est bien la chaîne bêta de l’hémoglobine qui est concernée ; la mention de la chaîne alpha au début du paragraphe est une erreur du support.' },
      { text: 'La mutation classique est une variation faux-sens remplaçant un glutamate par une valine au codon 6', correct: true, correction: 'Exact 🎯 Glu → Val : l’acide aminé change, ce qui définit une variation faux-sens.' },
      { text: 'La mutation classique touche le gène de l’alpha-globine', correct: false, correction: 'Faux. Le paragraphe contient une coquille sur la chaîne alpha : le gène impliqué code la bêta-globine.' },
      { text: 'La mutation classique introduit directement un codon stop au codon 6', correct: false, correction: 'Non chef. Un codon stop correspondrait à une variation non-sens ; ici un acide aminé est remplacé par un autre.' },
    ],
    explanation: 'La drépanocytose classique est liée à une variation faux-sens du gène de la bêta-globine, remplaçant le glutamate par la valine au codon 6 et produisant HbS. La mention initiale de la chaîne alpha dans le support est erronée. (Cours, p. 11 PDF, avec correction de cette coquille.)'
  },
  {
    id: 35,
    type: 'QCM',
    question: 'Quel examen cité peut contribuer au diagnostic de drépanocytose sans nécessiter d’emblée une analyse du gène ?',
    options: [
      { text: 'Une électrophorèse de l’hémoglobine', correct: true, correction: 'Oui boss 🧠 L’analyse de l’hémoglobine peut identifier HbS ; le diagnostic ne repose donc pas obligatoirement sur une analyse génétique.' },
      { text: 'Un dosage de la phénylalanine seul', correct: false, correction: 'Non chef. Ce dosage concerne notamment le dépistage de la phénylcétonurie.' },
      { text: 'Une recherche isolée de délétion de l’exon 7 de SMN1', correct: false, correction: 'Faux. SMN1 est impliqué dans l’amyotrophie spinale, pas dans la drépanocytose.' },
      { text: 'Un caryotype standard permettant de voir la substitution du codon 6', correct: false, correction: 'Non chef. Une substitution ponctuelle n’est pas visible sur un caryotype standard.' },
      { text: 'Un test de la sueur seul', correct: false, correction: 'Non. Le test de la sueur est associé à l’exploration de la mucoviscidose.' },
    ],
    explanation: 'Le cours cite l’électrophorèse de l’hémoglobine pour le diagnostic de drépanocytose et rappelle qu’une analyse génétique n’est pas systématiquement nécessaire. (Cours, p. 11 PDF.)'
  },
  {
    id: 36,
    type: 'QRM',
    question: 'Quelles manifestations ou conséquences sont associées à la drépanocytose dans le cours ?',
    options: [
      { text: 'Une anémie hémolytique chronique', correct: true, correction: 'Exact. La destruction accrue des globules rouges contribue à l’anémie.' },
      { text: 'Une diminution de la destruction des globules rouges expliquant une absence d’anémie', correct: false, correction: 'Non chef. Les globules rouges sont au contraire davantage détruits, avec une anémie hémolytique.' },
      { text: 'Une susceptibilité accrue à certaines infections bactériennes', correct: true, correction: 'Exact. Le cours présente les infections bactériennes parmi les complications de la maladie.' },
      { text: 'Une déformation des globules rouges en faucille', correct: true, correction: 'Oui boss 🧠 La falciformation est liée à l’hémoglobine HbS.' },
      { text: 'Des crises vaso-occlusives pouvant entraîner des lésions ischémiques', correct: true, correction: 'Oui 🎯 Les globules rouges déformés favorisent l’obstruction des petits vaisseaux et des infarctus tissulaires.' },
    ],
    explanation: 'HbS favorise la falciformation, l’hémolyse et les phénomènes vaso-occlusifs. Le cours décrit aussi des décompensations en cas d’infection ou d’hypoxie et une susceptibilité aux infections bactériennes. (Cours, p. 11 PDF.)'
  },
  {
    id: 37,
    type: 'QCM',
    question: 'Quel mécanisme contribue à expliquer la fréquence élevée de l’allèle HbS dans certaines populations exposées au paludisme ?',
    options: [
      { text: 'Un avantage sélectif des hétérozygotes vis-à-vis du paludisme', correct: true, correction: 'Oui boss 🎯 Les hétérozygotes ont un avantage face au paludisme, ce qui contribue au maintien de l’allèle HbS.' },
      { text: 'Une transmission exclusivement maternelle de l’allèle HbS', correct: false, correction: 'Non. La transmission est autosomique : les deux parents peuvent transmettre l’allèle.' },
      { text: 'Le fait que tous les hétérozygotes développent la même maladie sévère que les homozygotes', correct: false, correction: 'Non chef. Le cours distingue l’avantage des hétérozygotes de la maladie sévère des sujets atteints.' },
      { text: 'Une immunité totale contre toutes les infections chez les homozygotes HbS', correct: false, correction: 'Non chef. La drépanocytose reste une maladie grave et favorise certaines infections bactériennes.' },
      { text: 'La disparition de toute différence de survie entre les génotypes', correct: false, correction: 'Faux. Un avantage sélectif implique précisément une différence liée au contexte environnemental.' },
    ],
    explanation: 'L’avantage sélectif des hétérozygotes vis-à-vis du paludisme contribue à la fréquence de l’allèle HbS dans certaines populations. Cet avantage ne signifie pas une protection absolue contre toutes les infections. (Cours, p. 11 PDF.)'
  },
  {
    id: 38,
    type: 'QRM',
    question: 'Concernant la classification clinique de l’amyotrophie spinale, quelles propositions sont exactes dans la description classique du cours, avant modification par les traitements ?',
    options: [
      { text: 'Le type 1 est défini par une marche normale acquise avant les premiers symptômes', correct: false, correction: 'Faux. Dans la description classique, la position assise autonome n’est même pas acquise.' },
      { text: 'Le type 2 débute avant 18 mois et permet la position assise, mais pas l’acquisition de la marche autonome', correct: true, correction: 'Oui. Position assise acquise, marche non acquise : c’est la distinction classique du type 2.' },
      { text: 'Le type 0 a un début anténatal, avec notamment une diminution des mouvements fœtaux', correct: true, correction: 'Oui boss 🧠 Le type 0 est la forme anténatale exceptionnelle décrite dans le cours.' },
      { text: 'Le type 0 est une forme qui débute exclusivement à l’âge adulte', correct: false, correction: 'Non chef. Le début adulte correspond au type 4 ; le type 0 commence avant la naissance.' },
      { text: 'Le type 1 débute dans les premiers mois, avant 6 mois, et ne permet pas l’acquisition de la position assise autonome', correct: true, correction: 'Exact 🎯 La correction des QCM indique un début avant 6 mois ; la mention d’un début après 6 mois dans le texte est une incohérence du support.' },
    ],
    explanation: 'La classification distingue une forme anténatale de type 0, un type 1 à début avant 6 mois sans acquisition de la position assise et un type 2 à début avant 18 mois avec position assise mais sans marche autonome. (Cours, p. 12 PDF et correction p. 28 PDF.)'
  },
  {
    id: 39,
    type: 'QCM',
    question: 'Quelle association concernant les types 3 et 4 d’amyotrophie spinale est correcte ?',
    options: [
      { text: 'Type 3 : Kugelberg-Welander avec acquisition de la marche ; type 4 : début à l’âge adulte', correct: true, correction: 'Oui boss 🎯 Le type 3 permet l’acquisition de la marche ; le type 4 commence à l’âge adulte.' },
      { text: 'Type 3 : Werdnig-Hoffmann ; type 4 : début anténatal', correct: false, correction: 'Non. Werdnig-Hoffmann désigne le type 1 ; le type 4 débute à l’âge adulte.' },
      { text: 'Type 3 et type 4 : absence de toute faiblesse musculaire', correct: false, correction: 'Non chef. Ces deux formes peuvent comporter une faiblesse musculaire, malgré leur début plus tardif.' },
      { text: 'Type 3 : absence permanente d’acquisition de la position assise ; type 4 : décès obligatoire à la naissance', correct: false, correction: 'Faux. Ces descriptions ne correspondent pas aux formes plus tardives de types 3 et 4.' },
      { text: 'Type 3 : forme anténatale ; type 4 : début avant 6 mois', correct: false, correction: 'Non chef. La forme anténatale est le type 0, et le début avant 6 mois caractérise classiquement le type 1.' },
    ],
    explanation: 'Le type 3, ou maladie de Kugelberg-Welander, permet l’acquisition de la marche. Le type 4 débute à l’âge adulte avec une faiblesse musculaire. (Cours, p. 12 PDF.)'
  },
  {
    id: 40,
    type: 'QRM',
    question: 'Concernant les bases de l’amyotrophie spinale liée à SMN1, quelles propositions sont exactes ?',
    options: [
      { text: 'Le gène SMN1 est situé sur le chromosome 5', correct: true, correction: 'Exact 🎯 Chromosome 5 pour SMN1 et SMN2.' },
      { text: 'Il s’agit d’une maladie autosomique récessive', correct: true, correction: 'Oui boss 🧠 La SMA liée à SMN1 est présentée parmi les maladies autosomiques récessives.' },
      { text: 'La fréquence de porteurs de 1/40 à 1/50 signifie qu’un enfant sur 40 à 50 est atteint', correct: false, correction: 'Non chef. Ce chiffre concerne les hétérozygotes porteurs, pas la fréquence des enfants atteints.' },
      { text: 'La dégénérescence des motoneurones alpha de la corne antérieure entraîne un déficit neuromusculaire', correct: true, correction: 'Exact. La perte de ces motoneurones explique notamment le déficit musculaire proximal et l’hypotonie.' },
      { text: 'Une délétion de l’exon 7 de SMN1 est retrouvée dans environ 95 % des cas selon le cours', correct: true, correction: 'Oui. Le support indique cette anomalie majoritaire ; d’autres variants existent.' },
    ],
    explanation: 'La SMA liée à SMN1 est autosomique récessive. SMN1 est sur le chromosome 5 ; le cours rapporte une délétion de l’exon 7 dans environ 95 % des cas et une atteinte des motoneurones alpha de la corne antérieure. (Cours, p. 9 et 12–13 PDF.)'
  },
  {
    id: 41,
    type: 'QCM',
    question: 'Quelle proposition décrit correctement la production de protéine SMN à partir de SMN2 dans le modèle présenté ?',
    options: [
      { text: 'Environ 10 % des transcrits retiennent l’exon 7 et permettent une production de protéine SMN fonctionnelle', correct: true, correction: 'Oui boss 🎯 La majorité des transcrits exclut l’exon 7 ; une minorité, environ 10 %, le conserve.' },
      { text: 'SMN2 ne peut produire aucune protéine SMN fonctionnelle', correct: false, correction: 'Faux. La petite fraction des transcrits conservant l’exon 7 permet justement une production fonctionnelle.' },
      { text: 'SMN2 code une enzyme transformant la phénylalanine en tyrosine', correct: false, correction: 'Non. Cette enzyme est la phénylalanine hydroxylase, codée par PAH.' },
      { text: 'Tous les transcrits de SMN2 sont identiques aux transcrits fonctionnels de SMN1', correct: false, correction: 'Non chef. L’épissage de SMN2 exclut fréquemment l’exon 7, limitant sa production de SMN fonctionnelle.' },
      { text: 'Environ 90 % des transcrits retiennent l’exon 7', correct: false, correction: 'Non chef. Tu as inversé les proportions : environ 90 % excluent l’exon 7.' },
    ],
    explanation: 'SMN2 produit majoritairement des transcrits excluant l’exon 7. Environ 10 % le conservent et permettent la synthèse de SMN fonctionnelle. (Cours, p. 13–14 PDF.)'
  },
  {
    id: 42,
    type: 'QRM',
    question: 'Quel rôle joue le nombre de copies de SMN2 dans l’amyotrophie spinale ?',
    options: [
      { text: 'Un nombre plus élevé de copies est généralement associé à un phénotype moins sévère', correct: true, correction: 'Oui 🎯 C’est la tendance décrite, avec des exceptions.' },
      { text: 'Le nombre de copies suffit à lui seul à déterminer avec certitude tous les choix thérapeutiques', correct: false, correction: 'Faux. C’est un facteur utile, mais on ne peut pas en faire une règle thérapeutique universelle indépendante du contexte clinique.' },
      { text: 'Davantage de copies permettent généralement de produire davantage de SMN fonctionnelle', correct: true, correction: 'Exact. Même si chaque copie produit une proportion limitée de transcrits complets, plusieurs copies augmentent la quantité totale disponible.' },
      { text: 'Deux copies imposent toujours un type 1, sans aucune exception', correct: false, correction: 'Non chef. Les associations sont statistiques, pas absolues ; le cours cite l’effet d’autres variations.' },
      { text: 'Il constitue un facteur modificateur de la sévérité', correct: true, correction: 'Oui boss 🧠 SMN2 peut atténuer les conséquences du déficit de SMN1.' },
    ],
    explanation: 'Le nombre de copies de SMN2 influence la production résiduelle de SMN et modifie généralement la sévérité. La corrélation avec le type clinique comporte des exceptions et n’est pas une correspondance absolue. (Cours, p. 14–15 PDF.)'
  },
  {
    id: 43,
    type: 'QCM',
    question: 'Pourquoi SMN2 peut-il partiellement compenser un défaut de SMN1 ?',
    options: [
      { text: 'Il ne subit aucun épissage et produit toujours des transcrits complets', correct: false, correction: 'Non chef. L’épissage de SMN2 exclut l’exon 7 dans environ 90 % des transcrits selon le modèle du cours.' },
      { text: 'Il peut produire une quantité résiduelle de protéine SMN fonctionnelle utile à la survie des motoneurones', correct: true, correction: 'Oui boss 🧠 La fraction de transcrits SMN2 conservant l’exon 7 fournit de la protéine SMN fonctionnelle.' },
      { text: 'Il transforme les motoneurones morts en cellules saines', correct: false, correction: 'Faux. Le cours souligne que la perte des motoneurones est définitive.' },
      { text: 'Il produit une quantité de SMN fonctionnelle identique à SMN1 pour chaque copie du gène', correct: false, correction: 'Non. L’exclusion fréquente de l’exon 7 limite la production fonctionnelle de SMN2 par rapport à SMN1.' },
      { text: 'Il répare automatiquement la séquence de SMN1 dans toutes les cellules', correct: false, correction: 'Non chef. Il produit une protéine similaire ; il ne corrige pas spontanément le variant de SMN1.' },
    ],
    explanation: 'La protéine SMN participe à la survie des motoneurones. Lorsque SMN1 est déficient, la production résiduelle de SMN par SMN2 joue un rôle compensateur partiel. (Cours, p. 13–15 PDF.)'
  },
  {
    id: 44,
    type: 'QRM',
    question: 'Quels principes thérapeutiques ou de dépistage de la SMA sont présentés dans le cours ?',
    options: [
      { text: 'Recourir au dépistage néonatal pour permettre une prise en charge précoce', correct: true, correction: 'Oui 🧠 L’objectif est d’agir avant une perte importante et irréversible des motoneurones.' },
      { text: 'Apporter une copie fonctionnelle de SMN1 par thérapie génique', correct: true, correction: 'Exact. Le cours décrit l’apport du gène fonctionnel pour rétablir une production de SMN.' },
      { text: 'Supprimer systématiquement toutes les copies de SMN2', correct: false, correction: 'Non chef. SMN2 constitue une source de SMN fonctionnelle ; les traitements d’épissage cherchent à mieux l’utiliser.' },
      { text: 'Favoriser la conservation de l’exon 7 dans les transcrits de SMN2', correct: true, correction: 'Oui boss 🎯 Modifier l’épissage permet d’augmenter la production de SMN fonctionnelle.' },
      { text: 'Attendre obligatoirement une faiblesse majeure avant d’envisager une prise en charge', correct: false, correction: 'Faux. Le dépistage vise justement à permettre une intervention précoce.' },
    ],
    explanation: 'Le cours présente la modification de l’épissage de SMN2, l’apport d’un SMN1 fonctionnel par thérapie génique et le dépistage néonatal pour une prise en charge rapide. (Cours, p. 14–15 PDF.)'
  },
  {
    id: 45,
    type: 'QCM',
    question: 'Quel argument physiopathologique justifie particulièrement le dépistage et la prise en charge précoces de la SMA ?',
    options: [
      { text: 'Les motoneurones détruits se régénèrent toujours complètement après quelques semaines', correct: false, correction: 'Non chef. Le cours indique l’inverse : l’atteinte des motoneurones est définitive.' },
      { text: 'Le dépistage supprime à lui seul le variant pathogène', correct: false, correction: 'Non chef. Le dépistage identifie la maladie ; il ne constitue pas le traitement.' },
      { text: 'La SMA ne peut avoir aucun signe avant l’âge adulte', correct: false, correction: 'Non. Les formes 0, 1 et 2 illustrent des débuts anténataux ou précoces.' },
      { text: 'SMN1 n’est exprimé qu’à partir de l’adolescence', correct: false, correction: 'Faux. La protéine SMN est nécessaire à la survie des motoneurones dès les premières périodes de vie.' },
      { text: 'La perte des motoneurones est définitive', correct: true, correction: 'Oui boss 🧠 Agir tôt vise à préserver les motoneurones avant qu’ils ne soient perdus.' },
    ],
    explanation: 'Le dépistage néonatal vise une prise en charge rapide, car la perte des motoneurones est irréversible. (Cours, p. 15 PDF.)'
  },
  {
    id: 46,
    type: 'QRM',
    question: 'Concernant la physiopathologie de la phénylcétonurie liée à PAH, quelles propositions sont exactes ?',
    options: [
      { text: 'L’enzyme normale transforme la phénylalanine en tyrosine', correct: true, correction: 'Exact 🎯 Le sens de la réaction est phénylalanine → tyrosine.' },
      { text: 'Elle est liée à un déficit en phénylalanine hydroxylase', correct: true, correction: 'Oui boss 🧠 L’enzyme déficiente est la phénylalanine hydroxylase.' },
      { text: 'Le déficit peut s’accompagner d’un déficit de production de tyrosine', correct: true, correction: 'Exact. La réaction qui fournit la tyrosine fonctionne insuffisamment.' },
      { text: 'Le déficit entraîne une accumulation de phénylalanine potentiellement toxique pour le cerveau', correct: true, correction: 'Oui. Cette accumulation explique une grande part des conséquences neurologiques en l’absence de traitement.' },
      { text: 'Le gène PAH code la bêta-globine', correct: false, correction: 'Non chef. PAH code la phénylalanine hydroxylase ; la bêta-globine intervient dans la drépanocytose.' },
    ],
    explanation: 'PAH code la phénylalanine hydroxylase, qui transforme la phénylalanine en tyrosine. Le déficit enzymatique entraîne une accumulation de phénylalanine et une diminution de production de tyrosine. (Cours, p. 15 PDF.)'
  },
  {
    id: 47,
    type: 'QCM',
    question: 'Que signifie la sensibilité au BH4 de certaines formes de phénylcétonurie ?',
    options: [
      { text: 'Le BH4 transforme une phénylcétonurie récessive en maladie dominante', correct: false, correction: 'Non. Une réponse thérapeutique ne change pas le mode de transmission.' },
      { text: 'Toutes les variantes de PAH répondent nécessairement au BH4', correct: false, correction: 'Faux. Le cours précise que seules certaines variations sont BH4-sensibles.' },
      { text: 'Le BH4 est le gène responsable de toutes les phénylcétonuries', correct: false, correction: 'Non chef. Dans la forme étudiée, le gène concerné est PAH ; BH4 est la tétrahydrobioptérine, un cofacteur de l’enzyme.' },
      { text: 'Le BH4 supprime directement toutes les molécules de phénylalanine du sang', correct: false, correction: 'Non chef. Son intérêt est d’améliorer l’activité de l’enzyme dans les formes sensibles, pas d’éliminer directement la phénylalanine.' },
      { text: 'Un apport thérapeutique de BH4 peut améliorer l’activité enzymatique résiduelle chez certains patients', correct: true, correction: 'Oui boss 🎯 Le cours indique que certaines variations sont BH4-sensibles : la réponse dépend de la forme moléculaire.' },
    ],
    explanation: 'La tétrahydrobioptérine, ou BH4, est un cofacteur de la phénylalanine hydroxylase. Certaines formes liées à PAH peuvent bénéficier d’un traitement améliorant l’activité enzymatique résiduelle. (Cours, p. 15 PDF.)'
  },
  {
    id: 48,
    type: 'QRM',
    question: 'Concernant l’évolution de la phénylcétonurie non traitée, quelles propositions sont exactes ?',
    options: [
      { text: 'L’absence de symptômes néonataux garantit une évolution normale sans traitement', correct: false, correction: 'Non chef. Les manifestations apparaissent progressivement si la maladie n’est pas prise en charge.' },
      { text: 'Une microcéphalie et des signes cutanés comme l’eczéma peuvent être observés', correct: true, correction: 'Exact 🎯 Le cours cite également une peau et des cheveux clairs ainsi qu’une odeur particulière.' },
      { text: 'Un retard du développement psychomoteur et une déficience intellectuelle peuvent apparaître', correct: true, correction: 'Exact. L’accumulation de phénylalanine peut avoir des conséquences sur le développement cérébral.' },
      { text: 'Le nouveau-né peut initialement ne présenter aucun symptôme', correct: true, correction: 'Oui boss 🧠 L’absence de signes à la naissance n’exclut pas la maladie, d’où l’intérêt du dépistage.' },
      { text: 'Des troubles du comportement et des troubles neurologiques peuvent survenir', correct: true, correction: 'Oui. Ils font partie des conséquences citées en l’absence de traitement.' },
    ],
    explanation: 'Les nouveau-nés peuvent être asymptomatiques puis développer progressivement des troubles du développement, une déficience intellectuelle et diverses manifestations neurologiques, comportementales et cutanées en l’absence de traitement. (Cours, p. 15–16 PDF.)'
  },
  {
    id: 49,
    type: 'QCM',
    question: 'Pourquoi le régime de la phénylcétonurie limite-t-il la phénylalanine sans la supprimer totalement ?',
    options: [
      { text: 'L’organisme humain fabrique toujours assez de phénylalanine à partir de rien', correct: false, correction: 'Non chef. La phénylalanine est essentielle : elle doit être apportée par l’alimentation.' },
      { text: 'Un apport illimité de phénylalanine est possible dès lors qu’on ajoute de la tyrosine', correct: false, correction: 'Non chef. Compenser les besoins en tyrosine n’empêche pas l’accumulation toxique de phénylalanine ; ses apports doivent rester contrôlés.' },
      { text: 'La phénylalanine ne peut être toxique que si elle est totalement absente', correct: false, correction: 'Faux. Le problème est au contraire son accumulation excessive.' },
      { text: 'La phénylalanine est un acide aminé essentiel, dont un apport adapté reste nécessaire', correct: true, correction: 'Oui boss 🧠 Il faut éviter l’excès toxique tout en conservant l’apport nécessaire à l’organisme.' },
      { text: 'La suppression totale de la phénylalanine corrige définitivement le gène PAH', correct: false, correction: 'Non. Un régime agit sur les apports et le métabolisme ; il ne répare pas le gène.' },
    ],
    explanation: 'Le traitement nutritionnel vise un apport limité et adapté de phénylalanine. Cet acide aminé est essentiel et ne doit pas être supprimé totalement. (Cours, p. 16 PDF.)'
  },
  {
    id: 50,
    type: 'QRM',
    question: 'Concernant la prise en charge de la phénylcétonurie telle qu’elle est présentée dans le cours, quelles propositions sont exactes ?',
    options: [
      { text: 'Le contrôle de la phénylalanine est particulièrement important pendant la grossesse d’une femme atteinte', correct: true, correction: 'Exact. Une phénylalaninémie maternelle trop élevée peut être toxique pour le fœtus.' },
      { text: 'Le régime peut systématiquement être abandonné dès la fin de l’enfance', correct: false, correction: 'Non chef. Le cours présente une prise en charge nutritionnelle à vie, particulièrement stricte dans l’enfance et pendant la grossesse.' },
      { text: 'Un mélange d’acides aminés adapté permet de couvrir les besoins, notamment en tyrosine', correct: true, correction: 'Oui 🧠 Le traitement nutritionnel doit aussi compenser les besoins que le métabolisme déficient ne couvre pas correctement.' },
      { text: 'Le régime limite les apports de phénylalanine', correct: true, correction: 'Exact. Le but est de prévenir une accumulation toxique.' },
      { text: 'Elle fait l’objet d’un dépistage néonatal', correct: true, correction: 'Oui boss 🎯 Le cours rappelle que ce dépistage permet d’identifier la maladie avant les manifestations progressives.' },
    ],
    explanation: 'Le cours associe dépistage néonatal et prise en charge nutritionnelle durable : limitation de la phénylalanine, mélange d’acides aminés adapté et vigilance particulière avant et pendant une grossesse. (Cours, p. 15–16 PDF.)'
  },
  {
    id: 51,
    type: 'QCM',
    question: 'Quelle présentation de la mucoviscidose correspond au cours ?',
    options: [
      { text: 'Une affection plus rare en Bretagne que dans le reste de la France', correct: false, correction: 'Faux. Le support indique au contraire une fréquence plus élevée en Bretagne.' },
      { text: 'Une maladie multisystémique avec des manifestations respiratoires importantes', correct: true, correction: 'Oui boss 🧠 Plusieurs organes sont concernés, avec une place majeure pour les symptômes respiratoires.' },
      { text: 'Une maladie exclusivement hépatique', correct: false, correction: 'Non chef. Une atteinte hépatobiliaire est possible, mais elle ne résume pas cette maladie multisystémique.' },
      { text: 'Une maladie limitée au système nerveux central', correct: false, correction: 'Non chef. Le cours décrit notamment les atteintes respiratoires, digestives et sudorales.' },
      { text: 'Une maladie concernant une personne sur quatre dans le cours', correct: false, correction: 'Non 😭 Le chiffre donné est d’environ 1/4 000 en France.' },
    ],
    explanation: 'Le support présente la mucoviscidose comme une maladie multisystémique, notamment respiratoire. Les fréquences données dans ce cours sont de 1/4 000 en France et de 1/2 500 en Bretagne. (Cours, p. 16)'
  },
  {
    id: 52,
    type: 'QRM',
    question: 'Quels territoires épithéliaux sont explicitement cités parmi les organes atteints dans la mucoviscidose ?',
    options: [
      { text: 'Le pancréas exocrine et l’intestin', correct: true, correction: 'Exact. L’atteinte digestive ne se limite pas à un seul organe.' },
      { text: 'Le tractus respiratoire', correct: true, correction: 'Oui boss 🧠 C’est un territoire majeur de la maladie.' },
      { text: 'Les glandes sudoripares', correct: true, correction: 'Oui. Cela aide à comprendre le test de la sueur.' },
      { text: 'Uniquement le muscle squelettique', correct: false, correction: 'Non chef. Le cours parle d’atteintes épithéliales multiples, pas d’une affection musculaire isolée.' },
      { text: 'Le système hépatobiliaire', correct: true, correction: 'Exact 🎯 Il figure dans la liste du support.' },
    ],
    explanation: 'Le tractus respiratoire, le pancréas exocrine, l’intestin, les glandes sudoripares et le système hépatobiliaire sont les territoires cités. (Cours, p. 16–17)'
  },
  {
    id: 53,
    type: 'QCM',
    question: 'Quelle proposition décrit correctement CFTR ?',
    options: [
      { text: 'CFTR est un facteur de transcription nucléaire sans fonction membranaire', correct: false, correction: 'Non chef. Ici, on parle d’un canal membranaire.' },
      { text: 'La protéine CFTR est un gène qui code plusieurs chromosomes', correct: false, correction: 'Non chef. Il faut distinguer le gène CFTR de la protéine qu’il permet de produire.' },
      { text: 'Le canal CFTR n’a aucun rôle dans les flux hydroélectrolytiques', correct: false, correction: 'Non. Le cours lui attribue précisément un rôle dans leur régulation transmembranaire.' },
      { text: 'CFTR est uniquement une enzyme de dégradation de la phénylalanine', correct: false, correction: 'Faux. Tu mélanges avec le métabolisme étudié dans la phénylcétonurie.' },
      { text: 'Le gène CFTR code une protéine formant un canal chlorure', correct: true, correction: 'Oui boss 🧠 Le gène code la protéine ; cette protéine joue le rôle de canal chlorure.' },
    ],
    explanation: 'CFTR désigne le gène et la protéine issue de ce gène. La protéine constitue un canal chlorure impliqué dans les flux hydroélectrolytiques transmembranaires. La formule du support selon laquelle la protéine « code » un canal doit être comprise ainsi : le gène code la protéine. (Cours, p. 17)'
  },
  {
    id: 54,
    type: 'QRM',
    question: 'Quelles conséquences le cours relie-t-il à un canal CFTR défectueux ?',
    options: [
      { text: 'Une absence de toute conséquence digestive', correct: false, correction: 'Faux. Le pancréas et l’intestin font partie des organes concernés.' },
      { text: 'Des sécrétions anormalement visqueuses', correct: true, correction: 'Oui boss 🧠 C’est le point de départ du mécanisme décrit.' },
      { text: 'Une obstruction et des surinfections dans certains organes', correct: true, correction: 'Oui. Le support cite notamment les territoires pulmonaires et pancréatiques.' },
      { text: 'Une stase des sécrétions', correct: true, correction: 'Exact. Des sécrétions visqueuses s’évacuent moins bien.' },
      { text: 'Une fluidification systématique du mucus', correct: false, correction: 'Non chef 😭 Le mécanisme décrit va vers des sécrétions trop visqueuses.' },
    ],
    explanation: 'L’altération de CFTR perturbe les flux hydroélectrolytiques. Le cours relie ce défaut à des sécrétions visqueuses, puis à la stase, à l’obstruction et à la surinfection. (Cours, p. 17)'
  },
  {
    id: 55,
    type: 'QCM',
    question: 'Chez un patient suspect de mucoviscidose, quel résultat est clairement positif au test de la sueur selon le seuil donné dans le cours ?',
    options: [
      { text: 'Un chlore sudoral à 75 mmol/L', correct: true, correction: 'Oui boss 🎯 75 mmol/L dépasse nettement le seuil retenu dans le cours.' },
      { text: 'Une glycémie à 75 mg/dL', correct: false, correction: 'Non. Le test porte sur le chlorure dans la sueur, pas sur la glycémie.' },
      { text: 'Une concentration urinaire de phénylalanine à 75 mmol/L', correct: false, correction: 'Non chef. Mauvaise molécule et mauvais prélèvement.' },
      { text: 'Un chlore sudoral à 20 mmol/L', correct: false, correction: 'Faux. Le seuil décrit dans le support est supérieur à 60 mmol/L.' },
      { text: 'Un chlore sudoral à 10 mmol/L', correct: false, correction: 'Non chef. Cette valeur est très inférieure au seuil indiqué.' },
    ],
    explanation: 'Le cours indique un test de la sueur positif lorsque le chlore sudoral est supérieur à 60 mmol/L et mentionne également l’étude génétique. Une valeur de 75 mmol/L est sans ambiguïté au-dessus du seuil décrit. (Cours, p. 17)'
  },
  {
    id: 56,
    type: 'QRM',
    question: 'Quels signes ou chiffres de la mucoviscidose sont donnés dans ce support ?',
    options: [
      { text: 'Une sueur systématiquement pauvre en sel sans risque de déshydratation', correct: false, correction: 'Non chef. Le cours décrit une sueur salée et un risque de déshydratation.' },
      { text: 'Un diabète chez plus de 17 % des patients selon le cours', correct: true, correction: 'Exact. Le support donne ce repère chiffré.' },
      { text: 'Une stérilité masculine par agénésie des canaux déférents dans plus de 95 % des cas selon le cours', correct: true, correction: 'Exact 🧠 C’est un point clinique majeur du support.' },
      { text: 'Une cirrhose biliaire dans environ 6 % des cas selon le cours', correct: true, correction: 'Oui. Le chiffre de 6 % est cité.' },
      { text: 'Une stéatorrhée dans plus de 90 % des cas selon le cours', correct: true, correction: 'Oui boss 🎯 C’est le chiffre associé aux manifestations digestives.' },
    ],
    explanation: 'Les chiffres du support sont : stéatorrhée > 90 %, diabète > 17 %, cirrhose biliaire 6 % et stérilité masculine liée aux canaux déférents > 95 %. Ils sont ici repris comme repères propres au cours. (Cours, p. 17)'
  },
  {
    id: 57,
    type: 'QCM',
    question: 'Quelle proposition concernant la présentation clinique de la mucoviscidose est correcte ?',
    options: [
      { text: 'L’âge de début et la sévérité sont identiques pour tous les variants', correct: false, correction: 'Non chef. Le cours insiste sur leur variabilité, notamment selon les mutations.' },
      { text: 'Les troubles de croissance sont indépendants de toute atteinte digestive', correct: false, correction: 'Non. Le cours les relie notamment aux difficultés de digestion des graisses.' },
      { text: 'L’âge de début et le degré de sévérité peuvent varier en fonction des mutations', correct: true, correction: 'Oui boss 🧠 Deux patients n’ont pas nécessairement la même présentation.' },
      { text: 'La maladie ne peut jamais s’accompagner d’un iléus méconial', correct: false, correction: 'Faux. L’iléus méconial figure parmi les manifestations digestives citées.' },
      { text: 'Les manifestations respiratoires excluent les manifestations digestives', correct: false, correction: 'Non chef. Une maladie multisystémique peut associer plusieurs types d’atteintes.' },
    ],
    explanation: 'Le cours décrit une variabilité de l’âge de début et de la sévérité selon les mutations. Il cite des infections bronchopulmonaires chroniques, un iléus méconial et des troubles de croissance liés notamment à la digestion des graisses. (Cours, p. 17)'
  },
  {
    id: 58,
    type: 'QRM',
    question: 'Quelles manifestations peuvent appartenir au spectre des maladies liées à CFTR présenté dans le cours ?',
    options: [
      { text: 'Une pancréatite chronique', correct: true, correction: 'Exact. Elle figure dans la liste des maladies liées à CFTR.' },
      { text: 'Une sinusite chronique ou une polypose nasale', correct: true, correction: 'Exact 🎯 Ces manifestations sont également citées.' },
      { text: 'Une agénésie des canaux déférents', correct: true, correction: 'Oui. Le spectre peut se manifester par une atteinte génitale masculine.' },
      { text: 'Des bronchiectasies isolées', correct: true, correction: 'Oui boss 🧠 Une atteinte partielle peut être principalement respiratoire.' },
      { text: 'Une drépanocytose due à une mutation d’HBB', correct: false, correction: 'Non chef. La drépanocytose relève d’un autre gène et d’un autre mécanisme.' },
    ],
    explanation: 'Le spectre lié à CFTR comprend notamment sinusite chronique/polypose, bronchiectasies isolées, pancréatite chronique, agénésie des canaux déférents, kératodermie palmoplantaire aquagénique et formes plus tardives de mucoviscidose. (Cours, p. 18)'
  },
  {
    id: 59,
    type: 'QCM',
    question: 'Quel variant de CFTR est présenté comme prépondérant en Europe et représentant environ 80 % des mutations en France dans ce cours ?',
    options: [
      { text: 'Une mutation du gène GJB2', correct: false, correction: 'Non. GJB2 intervient dans l’exemple des surdités du cours.' },
      { text: 'Une délétion de SMN1', correct: false, correction: 'Non chef. SMN1 concerne l’amyotrophie spinale.' },
      { text: 'Un variant du gène PAH', correct: false, correction: 'Faux. PAH est associé à la phénylcétonurie.' },
      { text: 'Le variant HbS d’HBB', correct: false, correction: 'Non chef. Tu bascules vers la drépanocytose.' },
      { text: 'Le variant F508del', correct: true, correction: 'Oui boss 🎯 C’est le variant majeur de CFTR à retenir ici.' },
    ],
    explanation: 'Le cours cite F508del comme variant prépondérant de CFTR en Europe et lui attribue environ 80 % des mutations en France. Cela n’efface pas l’existence d’un grand nombre d’autres variants. (Cours, p. 18–19)'
  },
  {
    id: 60,
    type: 'QRM',
    question: 'Concernant la diversité des variants de CFTR, quelles propositions correspondent au cours ?',
    options: [
      { text: 'Le support décrit une grande hétérogénéité allélique de CFTR', correct: true, correction: 'Oui boss 🧠 De nombreux variants différents sont associés au même gène.' },
      { text: 'La fréquence de F508del varie selon les régions géographiques', correct: true, correction: 'Exact. Le cours mentionne des gradients Nord-Sud et Ouest-Est.' },
      { text: 'Le cours cite 87 % au Danemark contre 53 % en Grèce pour la fréquence de F508del chez les patients', correct: true, correction: 'Oui 🎯 Ce sont les chiffres comparatifs donnés dans le support.' },
      { text: 'Tous les patients du monde présentent nécessairement F508del', correct: false, correction: 'Non chef. Prépondérant ne veut pas dire exclusif.' },
      { text: 'Un variant très rare ne peut jamais être limité à une famille connue', correct: false, correction: 'Faux. Le support présente justement les variants privés.' },
    ],
    explanation: 'CFTR illustre une grande diversité allélique et des variations géographiques. Les chiffres Danemark/Grèce et les gradients cités sont ceux du support ; ils ne constituent pas une estimation actualisée de chaque population. (Cours, p. 18–19)'
  },
  {
    id: 61,
    type: 'QCM',
    question: 'Quelle conséquence moléculaire décrit correctement F508del ?',
    options: [
      { text: 'Une duplication de la phénylalanine en position 508', correct: false, correction: 'Faux. Le suffixe del indique une délétion.' },
      { text: 'Une délétion de trois nucléotides décalant obligatoirement le cadre de lecture', correct: false, correction: 'Non chef. Le support contient ici une coquille : F508del est une délétion en phase, pas une frameshift.' },
      { text: 'Une délétion de trois nucléotides entraînant la perte de la phénylalanine 508 sans décalage du cadre de lecture', correct: true, correction: 'Oui boss 🧠 Trois nucléotides supprimés : un acide aminé en moins, mais le cadre de lecture est conservé.' },
      { text: 'Une substitution de la phénylalanine 508 par une tyrosine', correct: false, correction: 'Non. L’acide aminé est supprimé, pas remplacé par un autre.' },
      { text: 'Une délétion de la totalité du chromosome portant CFTR', correct: false, correction: 'Non chef. Il s’agit d’une petite délétion dans le gène.' },
    ],
    explanation: 'F508del supprime trois nucléotides et la phénylalanine 508. Le cadre de lecture est conservé : la mention d’un décalage dans le support est une erreur. (Cours, p. 19 ; vérification : https://www.ncbi.nlm.nih.gov/clinvar/variation/7105/)'
  },
  {
    id: 62,
    type: 'QRM',
    question: 'Quelles conséquences de F508del sur la protéine CFTR sont décrites dans le cours ?',
    options: [
      { text: 'Une rétention importante dans le réticulum endoplasmique', correct: true, correction: 'Exact. L’adressage à la membrane devient insuffisant.' },
      { text: 'Une augmentation massive du nombre de canaux fonctionnels à la membrane', correct: false, correction: 'Non chef. Le problème décrit est au contraire un défaut de maturation et d’adressage.' },
      { text: 'Un défaut de conformation de la protéine', correct: true, correction: 'Oui boss 🧠 La perte de Phe508 perturbe son repliement.' },
      { text: 'Une dégradation de la protéine par le protéasome', correct: true, correction: 'Oui. Le support relie le défaut de conformation à cette dégradation.' },
      { text: 'Une faible fraction peut atteindre la membrane, sans suffire à assurer une fonction normale', correct: true, correction: 'Exact 🎯 Le cours précise qu’un petit passage à la membrane reste possible.' },
    ],
    explanation: 'Le cours associe F508del à un mauvais repliement, une rétention dans le réticulum endoplasmique, une dégradation protéasomale et un adressage membranaire insuffisant. (Cours, p. 19–21)'
  },
  {
    id: 63,
    type: 'QCM',
    question: 'Quel défaut définit la classe I de mutations de CFTR dans le schéma du cours ?',
    options: [
      { text: 'Une production normale avec une activité parfaitement conservée', correct: false, correction: 'Non chef. Ce n’est pas un défaut pathogène de CFTR.' },
      { text: 'Une ouverture du canal mal régulée malgré son adressage membranaire', correct: false, correction: 'Faux. Cela correspond à la logique de la classe III.' },
      { text: 'Un défaut de maturation typique de F508del', correct: false, correction: 'Non. F508del est principalement classée en classe II.' },
      { text: 'Une absence de production de protéine CFTR fonctionnelle', correct: true, correction: 'Oui boss 🧠 Classe I : le défaut touche la production de la protéine.' },
      { text: 'Un canal présent mais avec une conductance diminuée', correct: false, correction: 'Non chef. C’est le défaut associé à la classe IV.' },
    ],
    explanation: 'La classe I est définie par un défaut de production de CFTR. Le support l’illustre par une variation frameshift conduisant à l’absence de synthèse de protéine fonctionnelle. Toutes les frameshifts ne sont pas pour autant F508del, qui conserve le cadre de lecture. (Cours, p. 20–21)'
  },
  {
    id: 64,
    type: 'QRM',
    question: 'Quelles associations entre classe de mutation de CFTR et mécanisme sont correctes ?',
    options: [
      { text: 'Classe II : défaut de maturation, notamment pour F508del', correct: true, correction: 'Oui boss 🧠 La protéine est mal repliée et mal adressée.' },
      { text: 'Classe I : production d’un canal normal en quantité excessive', correct: false, correction: 'Non chef. La classe I correspond à un défaut de production, pas à un excès.' },
      { text: 'Classe V : diminution de la quantité de protéine produite', correct: true, correction: 'Exact. Une protéine peut être présente, mais en quantité insuffisante.' },
      { text: 'Classe III : défaut de régulation ou d’ouverture du canal', correct: true, correction: 'Exact. Le problème n’est pas seulement la quantité de protéines.' },
      { text: 'Classe IV : défaut de conductance du canal', correct: true, correction: 'Oui 🎯 Le canal est membranaire mais laisse moins bien passer le chlorure.' },
    ],
    explanation: 'Le classement repose sur le défaut fonctionnel : production (I), maturation (II), régulation (III), conductance (IV) et diminution de synthèse (V). (Cours, p. 20–21)'
  },
  {
    id: 65,
    type: 'QCM',
    question: 'Une protéine CFTR atteint la membrane mais le canal ne s’ouvre pas correctement. Quelle classe du cours correspond principalement à ce défaut ?',
    options: [
      { text: 'Aucune classe, car tout canal membranaire est forcément fonctionnel', correct: false, correction: 'Non chef 😭 Être à la bonne place ne garantit pas de bien fonctionner.' },
      { text: 'Classe V', correct: false, correction: 'Non. Le problème décrit est l’ouverture, pas une diminution de la quantité produite.' },
      { text: 'Classe I', correct: false, correction: 'Non chef. Ici, la protéine est produite et atteint la membrane.' },
      { text: 'Classe III', correct: true, correction: 'Oui boss 🎯 Classe III = défaut de régulation, notamment de l’ouverture du canal.' },
      { text: 'Classe II', correct: false, correction: 'Faux. Le scénario ne décrit pas d’abord un défaut de maturation ou d’adressage.' },
    ],
    explanation: 'Le défaut de régulation ou de gating relève principalement de la classe III. Un canal peut être présent à la membrane tout en ayant une fonction fortement altérée. (Cours, p. 20–21)'
  },
  {
    id: 66,
    type: 'QRM',
    question: 'Concernant les classes à fonction résiduelle de CFTR dans la présentation du cours, quelles propositions sont exactes ?',
    options: [
      { text: 'Une fonction résiduelle impose un phénotype toujours aussi sévère qu’une fonction quasi nulle', correct: false, correction: 'Non chef. Le cours relie au contraire la fonction résiduelle à des formes pouvant être moins sévères ou partielles.' },
      { text: 'La classe IV peut laisser persister un canal membranaire dont la conductance est diminuée', correct: true, correction: 'Oui boss 🧠 Présence à la membrane et fonction normale sont deux choses différentes.' },
      { text: 'Le support regroupe les classes IV, V et VI parmi les allèles hypomorphes', correct: true, correction: 'Oui. C’est le regroupement fonctionnel proposé dans le cours.' },
      { text: 'La classe V se distingue de la classe I par la présence de protéine en quantité réduite', correct: true, correction: 'Exact. Quantité diminuée ne veut pas dire absence de protéine fonctionnelle.' },
      { text: 'Une baisse de quantité de CFTR signifie nécessairement qu’aucun canal n’est produit', correct: false, correction: 'Faux. Une diminution quantitative laisse une certaine quantité de protéines.' },
    ],
    explanation: 'Dans le regroupement du support, les classes IV–VI sont dites hypomorphes et peuvent conserver une fonction résiduelle. Le support réunit V et VI sous la baisse de synthèse ; ce raccourci ne doit pas servir à confondre leurs mécanismes précis. (Cours, p. 20–21)'
  },
  {
    id: 67,
    type: 'QCM',
    question: 'Quelle définition correspond à un allèle hypomorphe ?',
    options: [
      { text: 'Un allèle à fonction réduite mais conservant une activité résiduelle', correct: true, correction: 'Oui boss 🧠 La fonction baisse sans être complètement perdue.' },
      { text: 'Un allèle sans aucune conséquence possible sur le phénotype', correct: false, correction: 'Faux. Une fonction réduite peut encore produire des symptômes.' },
      { text: 'Un allèle détruisant systématiquement tous les autres chromosomes', correct: false, correction: 'Non. Ce n’est pas la définition d’un allèle hypomorphe.' },
      { text: 'Un allèle dont l’activité est obligatoirement supérieure à la normale', correct: false, correction: 'Non chef. Hypo signifie ici une réduction d’activité.' },
      { text: 'Un allèle toujours équivalent à une absence totale de fonction', correct: false, correction: 'Non chef. C’est justement la distinction avec un allèle amorphe.' },
    ],
    explanation: 'Un allèle hypomorphe conserve une fonction résiduelle, contrairement à un allèle amorphe dont la fonction est nulle ou quasi nulle dans la présentation du support. Pour CFTR, cela peut contribuer à des symptômes isolés ou à des formes moins sévères. (Cours, p. 21)'
  },
  {
    id: 68,
    type: 'QRM',
    question: 'Quels mécanismes de la trithérapie modulatrice de CFTR sont décrits dans le cours ?',
    options: [
      { text: 'Deux molécules visent à améliorer la conformation et le repliement de CFTR', correct: true, correction: 'Oui boss 🧠 Ce sont les correcteurs dans la logique présentée.' },
      { text: 'Les trois molécules ont pour objectif de bloquer tous les canaux chlorure', correct: false, correction: 'Faux. Le but est de restaurer ou d’améliorer la fonction de CFTR.' },
      { text: 'Les trois molécules remplacent définitivement le gène CFTR muté', correct: false, correction: 'Non chef. Une modulation protéique n’est pas un remplacement du gène.' },
      { text: 'Une troisième molécule vise à augmenter l’activité du canal', correct: true, correction: 'Exact. C’est la logique d’un potentialisateur.' },
      { text: 'La trithérapie vise la protéine CFTR et son fonctionnement', correct: true, correction: 'Oui. Elle module la protéine, sans corriger directement la séquence du gène.' },
    ],
    explanation: 'Le cours décrit Kaftrio comme une association de deux molécules corrigeant le repliement de CFTR et d’une molécule augmentant l’activité du canal. Les mécanismes sont ceux de correcteurs et d’un potentialisateur. (Cours, p. 21)'
  },
  {
    id: 69,
    type: 'QCM',
    question: 'Dans la logique mécanistique exposée dans le cours, pourquoi un modulateur de CFTR ne peut-il pas restaurer l’activité d’un canal totalement absent ?',
    options: [
      { text: 'Parce que tous les défauts de CFTR répondent nécessairement de manière identique', correct: false, correction: 'Non. Le mécanisme du variant compte pour la réponse à un modulateur.' },
      { text: 'Parce qu’il n’existe aucune protéine cible à corriger ou à potentialiser', correct: true, correction: 'Oui boss 🧠 Sans canal produit, le modulateur n’a pas sa cible protéique.' },
      { text: 'Parce qu’un canal absent possède une conductance trop élevée', correct: false, correction: 'Faux. Un canal absent ne peut pas transporter le chlorure.' },
      { text: 'Parce qu’il crée obligatoirement un nouveau gène CFTR', correct: false, correction: 'Non chef. Ce traitement ne crée pas un nouveau gène.' },
      { text: 'Parce qu’un modulateur traite uniquement la phénylcétonurie', correct: false, correction: 'Non chef. Le contexte est ici la modulation de CFTR.' },
    ],
    explanation: 'Un correcteur ou un potentialisateur agit sur la protéine CFTR. Dans le cas simplifié d’une absence complète de protéine cible, cette modulation ne peut pas rétablir un canal absent. Cette explication mécanistique ne constitue pas une règle exhaustive d’éligibilité clinique actuelle. (Cours, p. 21)'
  },
  {
    id: 70,
    type: 'QRM',
    question: 'Quels effets indésirables sont mentionnés pour la trithérapie dans le cours ?',
    options: [
      { text: 'Une modification systématique et définitive de tous les gènes du patient', correct: false, correction: 'Faux. Cela ne correspond ni au mécanisme ni aux effets cités.' },
      { text: 'Une absence garantie de tout effet indésirable', correct: false, correction: 'Non chef. Le support en décrit plusieurs.' },
      { text: 'Une cataracte chez les enfants', correct: true, correction: 'Exact. Le support mentionne cette atteinte oculaire.' },
      { text: 'Des effets hépatiques, notamment à l’initiation du traitement', correct: true, correction: 'Oui boss 🧠 Le foie fait partie des points de vigilance cités.' },
      { text: 'Des troubles de l’humeur ou des idées suicidaires parmi les effets psychologiques cités', correct: true, correction: 'Oui. Ce sont les manifestations psychologiques signalées par le cours.' },
    ],
    explanation: 'Le support cite des effets hépatiques à l’initiation, une cataracte chez l’enfant et des effets psychologiques, dont des troubles de l’humeur ou des idées suicidaires. La question restitue la liste du cours et ne prétend pas décrire leur fréquence actuelle. (Cours, p. 22)'
  },
  {
    id: 71,
    type: 'QCM',
    question: 'Quelle formulation résume la dominance dans la partie mécanistique du cours ?',
    options: [
      { text: 'La dominance impose obligatoirement deux allèles mutés', correct: false, correction: 'Faux. Un phénotype dominant peut s’exprimer chez un hétérozygote.' },
      { text: 'L’allèle sain ne suffit pas à compenser l’effet de l’allèle muté sur le phénotype étudié', correct: true, correction: 'Oui boss 🧠 C’est l’idée centrale, avec plusieurs mécanismes possibles.' },
      { text: 'L’allèle sain compense toujours entièrement l’effet de l’allèle muté', correct: false, correction: 'Non chef. Cette compensation ne rendrait pas compte d’un phénotype dominant.' },
      { text: 'Tout gène possède un mode de transmission unique pour tous ses variants', correct: false, correction: 'Non. Le cours insiste sur le rôle de la variation et du phénotype.' },
      { text: 'La dominance désigne uniquement un excès de copies chromosomiques', correct: false, correction: 'Non chef. Le cours décrit aussi une haploinsuffisance, un gain de fonction ou un effet dominant négatif.' },
    ],
    explanation: 'Le cours décrit la dominance par l’absence de compensation suffisante par l’allèle sain. Les mécanismes proposés sont le déséquilibre quantitatif, le gain de fonction et l’effet dominant négatif. (Cours, p. 22)'
  },
  {
    id: 72,
    type: 'QRM',
    question: 'Quels mécanismes peuvent expliquer un phénotype dominant selon le cours ?',
    options: [
      { text: 'Une haploinsuffisance : la quantité produite par un seul allèle fonctionnel est insuffisante', correct: true, correction: 'Oui boss 🧠 Une seule copie fonctionnelle ne permet pas toujours d’atteindre la quantité nécessaire.' },
      { text: 'Une compensation complète de l’effet muté, sans aucun changement du phénotype étudié', correct: false, correction: 'Non chef. Cela ne décrit pas l’expression d’un phénotype dominant.' },
      { text: 'Un gain de fonction du produit muté', correct: true, correction: 'Exact. La protéine peut acquérir une propriété ou une activité anormale.' },
      { text: 'Un effet dominant négatif du produit muté sur le produit normal', correct: true, correction: 'Oui. Ici, le produit muté perturbe le fonctionnement du produit sain.' },
      { text: 'L’absence obligatoire de produit issu de tout allèle normal', correct: false, correction: 'Faux. Un produit normal peut être présent mais insuffisant ou perturbé.' },
    ],
    explanation: 'La dominance peut résulter d’un déficit quantitatif non compensé, d’une nouvelle propriété du produit muté ou d’une interférence de ce produit avec le produit normal. (Cours, p. 22)'
  },
  {
    id: 73,
    type: 'QCM',
    question: 'Un hétérozygote produit une protéine normale grâce à son allèle sain, mais en quantité insuffisante pour assurer la fonction attendue. Quel mécanisme est illustré ?',
    options: [
      { text: 'Un gain de fonction obligatoire', correct: false, correction: 'Non chef. Le problème décrit est quantitatif, pas une activité nouvelle.' },
      { text: 'Une pénétrance nécessairement nulle', correct: false, correction: 'Faux. Le scénario décrit justement un déficit pouvant donner un phénotype.' },
      { text: 'Un effet dominant négatif démontré', correct: false, correction: 'Non. Aucune interférence du produit muté avec le produit normal n’est décrite.' },
      { text: 'Une haploinsuffisance', correct: true, correction: 'Oui boss 🎯 Une copie fonctionnelle produit trop peu pour satisfaire le besoin.' },
      { text: 'Une compensation totale par l’allèle sain', correct: false, correction: 'Non chef. La quantité normale restante est justement insuffisante.' },
    ],
    explanation: 'L’haploinsuffisance est un mécanisme de dominance lié à une quantité insuffisante de produit fonctionnel malgré la présence d’un allèle sain. Le cours donne l’exemple de récepteurs membranaires dans certaines hypercholestérolémies. (Cours, p. 22)'
  },
  {
    id: 74,
    type: 'QRM',
    question: 'Concernant le gain de fonction, quelles propositions correspondent à l’exemple du cours ?',
    options: [
      { text: 'Gain de fonction et haploinsuffisance désignent le même déficit de quantité', correct: false, correction: 'Faux. Ce sont deux mécanismes différents de dominance.' },
      { text: 'FGFR3 dans l’achondroplasie est l’exemple cité', correct: true, correction: 'Oui 🎯 Garde bien cette association en tête.' },
      { text: 'Le produit muté peut présenter une propriété nouvelle', correct: true, correction: 'Oui boss 🧠 C’est la définition donnée dans cette partie.' },
      { text: 'Une activation constitutive d’un récepteur peut constituer un gain de fonction', correct: true, correction: 'Exact. Le récepteur devient actif de manière anormale.' },
      { text: 'Un gain de fonction exige nécessairement une absence totale de protéine', correct: false, correction: 'Non chef. Une protéine absente ne peut pas exercer cette nouvelle activité.' },
    ],
    explanation: 'Le cours illustre le gain de fonction par une activation constitutive du récepteur FGFR3 dans l’achondroplasie. La propriété du produit muté change, ce qui se distingue d’un simple déficit quantitatif. (Cours, p. 22)'
  },
  {
    id: 75,
    type: 'QCM',
    question: 'Une chaîne de collagène mutée perturbe l’organisation du réseau auquel participent aussi des chaînes normales. Quel mécanisme est illustré dans le cours ?',
    options: [
      { text: 'Une simple baisse de quantité sans interaction entre produits', correct: false, correction: 'Faux. Le scénario décrit une perturbation de la structure collective.' },
      { text: 'Une mutation forcément silencieuse', correct: false, correction: 'Non. Le produit muté modifie le fonctionnement du réseau.' },
      { text: 'Une compensation parfaite par les chaînes normales', correct: false, correction: 'Non chef. Le réseau est justement perturbé malgré leur présence.' },
      { text: 'Un effet dominant négatif', correct: true, correction: 'Oui boss 🧠 Le produit muté gêne le fonctionnement du produit normal.' },
      { text: 'Un caractère obligatoirement récessif parce que des protéines normales sont présentes', correct: false, correction: 'Non chef. La présence de protéines normales ne suffit pas si leur fonctionnement est perturbé.' },
    ],
    explanation: 'L’effet dominant négatif correspond à une altération du fonctionnement du produit normal par le produit muté. Le cours l’illustre par une variation faux-sens dans une chaîne de collagène perturbant le réseau de fibres. (Cours, p. 22)'
  },
  {
    id: 76,
    type: 'QRM',
    question: 'Quelles propositions concernant dominance, récessivité et GJB2 sont exactes ?',
    options: [
      { text: 'GJB2 code la connexine 26', correct: true, correction: 'Exact. Cette protéine participe aux jonctions communicantes.' },
      { text: 'Le support présente les surdités récessives liées à GJB2 comme plus fréquentes que les dominantes', correct: true, correction: 'Exact 🎯 C’est la comparaison proposée.' },
      { text: 'GJB2 doit être qualifié une fois pour toutes de gène exclusivement récessif', correct: false, correction: 'Non chef. Cet exemple sert précisément à montrer la limite de cette formulation.' },
      { text: 'Dominance et récessivité qualifient un phénotype, pas un gène pris isolément', correct: true, correction: 'Oui boss 🧠 C’est le message à retenir de cette partie.' },
      { text: 'Selon la variation, une surdité liée à GJB2 peut se transmettre sur un mode dominant ou récessif', correct: true, correction: 'Oui. Le même gène peut être impliqué dans des tableaux de transmission différents.' },
    ],
    explanation: 'GJB2 code la connexine 26, impliquée dans l’homéostasie de l’endolymphe. Selon la variation et le phénotype, la surdité peut être récessive, plus fréquemment, ou dominante. (Cours, p. 22–23)'
  },
  {
    id: 77,
    type: 'QCM',
    question: 'La mucoviscidose est associée à de nombreux variants différents d’un même gène, CFTR. Quel terme décrit directement cette diversité ?',
    options: [
      { text: 'Un effet dominant négatif obligatoire pour chaque variant', correct: false, correction: 'Non. Le nombre de variants ne renseigne pas à lui seul sur leur mécanisme.' },
      { text: 'Une hétérogénéité allélique', correct: true, correction: 'Oui boss 🧠 Plusieurs variants dans un même gène : diversité allélique.' },
      { text: 'Une absence de toute variation génétique', correct: false, correction: 'Faux. Le scénario décrit justement de nombreux variants.' },
      { text: 'Une hétérogénéité génique démontrée par le seul nombre de variants de CFTR', correct: false, correction: 'Non chef. L’hétérogénéité génique implique plusieurs gènes pouvant conduire à un phénotype comparable.' },
      { text: 'Une transmission obligatoirement différente à chaque mutation', correct: false, correction: 'Non chef. Diversité allélique et diversité des modes de transmission ne sont pas synonymes.' },
    ],
    explanation: 'L’hétérogénéité allélique est la présence de différents variants pathogènes dans un même gène. Elle se distingue de l’hétérogénéité génique, où différents gènes peuvent être responsables d’un phénotype comparable. CFTR constitue ici un exemple de grande diversité allélique. (Cours, p. 18 et 22)'
  },
  {
    id: 78,
    type: 'QRM',
    question: 'Quelles comparaisons reprennent la synthèse des maladies autosomiques récessives du cours ?',
    options: [
      { text: 'La drépanocytose illustre une homogénéité génétique et allélique, un effet fondateur et un avantage des hétérozygotes', correct: true, correction: 'Oui boss 🧠 C’est le résumé proposé pour la drépanocytose.' },
      { text: 'La phénylcétonurie illustre un gène principal et une grande diversité allélique', correct: true, correction: 'Oui. Dans la synthèse, le support retient PAH et sa diversité de variants.' },
      { text: 'L’amyotrophie spinale est associée à une variation prépondérante et à une sévérité modulée par le nombre de copies d’un gène homologue partiellement actif', correct: true, correction: 'Exact. Le cours insiste sur le rôle modulateur de SMN2.' },
      { text: 'Les quatre maladies ont une seule mutation identique dans un seul gène commun', correct: false, correction: 'Non chef 😭 Elles impliquent des gènes et des profils de diversité différents.' },
      { text: 'La mucoviscidose illustre CFTR, une grande diversité allélique et des variations géographiques', correct: true, correction: 'Exact 🎯 La fréquence de certains variants varie selon les populations.' },
    ],
    explanation: 'La synthèse compare les profils de diversité et les mécanismes propres aux quatre exemples : drépanocytose, amyotrophie spinale, phénylcétonurie et mucoviscidose. Ces formulations restituent le cadre simplifié adopté dans ce cours. (Cours, p. 22)'
  },
  {
    id: 79,
    type: 'QCM',
    question: 'Dans la présentation du cours, que désigne un variant privé de CFTR ?',
    options: [
      { text: 'Un variant nécessairement identique à F508del', correct: false, correction: 'Non. F508del est justement très répandu dans certaines populations.' },
      { text: 'Un variant très rare décrit au sein d’une seule famille connue', correct: true, correction: 'Oui boss 🧠 Privé signifie ici limité à une famille dans les observations disponibles.' },
      { text: 'Un variant dont l’évolution clinique est toujours plus facile à prédire qu’un variant fréquent', correct: false, correction: 'Non chef. Le cours explique qu’on dispose souvent de moins d’informations pour prévoir son évolution.' },
      { text: 'Un variant forcément bénin car peu fréquent', correct: false, correction: 'Non chef. Rareté et caractère bénin ne sont pas synonymes.' },
      { text: 'Un variant détecté chez tous les patients européens', correct: false, correction: 'Faux. Ce serait un variant fréquent, pas privé.' },
    ],
    explanation: 'Le cours oppose le variant fréquent F508del à des variants minoritaires, parfois privés, décrits dans une famille. Le faible nombre d’observations complique la prédiction du phénotype ; il ne démontre pas que le variant ne pourra jamais être retrouvé dans une autre famille. (Cours, p. 19)'
  },
  {
    id: 80,
    type: 'QRM',
    question: 'Quelles affirmations relient correctement diversité des variants, fonction protéique et expression du phénotype ?',
    options: [
      { text: 'Une fonction résiduelle peut contribuer à un phénotype moins sévère ou plus partiel', correct: true, correction: 'Exact. C’est la logique des allèles hypomorphes présentée dans le cours.' },
      { text: 'Connaître uniquement le nom du gène permet toujours de prédire exactement la sévérité et le mécanisme', correct: false, correction: 'Non chef. Le variant, sa conséquence fonctionnelle et le contexte du phénotype comptent.' },
      { text: 'Pour certains gènes, le type de variation peut contribuer à un mode de transmission dominant ou récessif', correct: true, correction: 'Oui. GJB2 fournit l’exemple donné dans le support.' },
      { text: 'Toutes les mutations pathogènes produisent forcément une absence totale de protéine', correct: false, correction: 'Faux. Une protéine peut être présente mais mal adressée, mal régulée ou moins fonctionnelle.' },
      { text: 'Différents variants de CFTR peuvent modifier la quantité, l’adressage ou l’activité du canal', correct: true, correction: 'Oui boss 🧠 Un même gène peut conduire à plusieurs défauts fonctionnels.' },
    ],
    explanation: 'L’effet d’un variant ne se limite pas à la présence ou à l’absence d’une protéine. La quantité, la localisation, l’activité résiduelle et les interactions entre produits contribuent au phénotype, à sa sévérité et parfois au mode de transmission. (Cours, p. 19–23)'
  },
]
