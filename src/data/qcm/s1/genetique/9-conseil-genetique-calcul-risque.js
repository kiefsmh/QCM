export const meta = {
  title: 'Conseil génétique et calcul de risque',
}

export default [
  {
    id: 1,
    type: 'QCM',
    question: 'Une famille distingue l\'anomalie identifiée dans l\'ADN des manifestations visibles chez le patient. Que désigne le génotype ?',
    options: [
      { text: 'L\'âge auquel les premiers symptômes apparaissent.', correct: false, correction: 'Faux. L\'âge de début est une caractéristique du phénotype ou de l\'histoire naturelle, pas la définition du génotype.' },
      { text: 'L\'ensemble des signes cliniques observables chez ce patient.', correct: false, correction: 'Faux. Les signes observables relèvent du phénotype.' },
      { text: 'La composition allélique d\'un individu pour le ou les gènes considérés.', correct: true, correction: 'Vrai. Le génotype décrit les allèles, c\'est-à-dire l\'information génétique considérée.' },
      { text: 'La probabilité qu\'un enfant reçoive l\'allèle familial.', correct: false, correction: 'Faux. Cette probabilité est un risque de transmission, calculé à partir du contexte génétique ; elle n\'est pas le génotype lui-même.' },
      { text: 'La gravité des symptômes chez tous les membres de sa famille.', correct: false, correction: 'Faux. La gravité des manifestations participe au phénotype et peut varier entre apparentés.' },
    ],
    explanation: 'Le génotype décrit la composition allélique ; le phénotype correspond aux caractères observables. Leur distinction est indispensable avant un calcul de risque. (Cours, p. 1)'
  },
  {
    id: 2,
    type: 'QRM',
    question: 'Pour un gène donné, quelles descriptions des états alléliques sont correctes dans le cadre présenté par le cours ?',
    options: [
      { text: 'Hémizygote signifie nécessairement porteur de deux allèles mutés.', correct: false, correction: 'Faux. L\'hémizygotie décrit un seul exemplaire du gène concerné, et non deux allèles mutés.' },
      { text: 'Deux allèles identiques sur une paire de chromosomes homologues définissent une homozygotie.', correct: true, correction: 'Vrai. L\'homozygote possède la même version du gène sur les deux homologues.' },
      { text: 'Un hétérozygote possède toujours deux allèles identiques.', correct: false, correction: 'Faux. Deux allèles identiques caractérisent une homozygotie.' },
      { text: 'Pour de nombreux gènes de l\'X sans homologue sur l\'Y, un homme n\'a qu\'un exemplaire : il est hémizygote.', correct: true, correction: 'Vrai. Le cours emploie hémizygote pour ces gènes de l\'X chez l\'homme.' },
      { text: 'Deux allèles différents sur une paire de chromosomes homologues définissent une hétérozygotie.', correct: true, correction: 'Vrai. L\'hétérozygote possède deux versions différentes du gène considéré.' },
    ],
    explanation: 'Hétérozygotie et homozygotie comparent deux allèles d\'une paire ; l\'hémizygotie désigne ici un gène de l\'X présent en un seul exemplaire chez l\'homme. (Cours, p. 1)'
  },
  {
    id: 3,
    type: 'QCM',
    question: 'Parmi 100 personnes porteuses du même génotype pathogène, 80 présentent le phénotype associé. Quelle est la pénétrance observée dans ce groupe ?',
    options: [
      { text: '50 %.', correct: false, correction: 'Faux. Aucun des effectifs du problème ne conduit à une moitié des porteurs symptomatiques.' },
      { text: '100 %.', correct: false, correction: 'Faux. Vingt porteurs n\'expriment pas le phénotype ; la pénétrance observée n\'est donc pas complète.' },
      { text: '20 %.', correct: false, correction: 'Faux. Vingt pour cent correspond ici aux porteurs sans phénotype observé.' },
      { text: '80 %.', correct: true, correction: 'Vrai. La pénétrance observée est le nombre de porteurs exprimant le phénotype divisé par le nombre total de porteurs : 80/100.' },
      { text: 'Impossible à calculer sans connaître le nombre d\'enfants des porteurs.', correct: false, correction: 'Faux. Le calcul de pénétrance utilise ici les porteurs et les porteurs phénotypiquement atteints, qui sont tous deux connus.' },
    ],
    explanation: 'La pénétrance est la proportion d\'individus présentant le phénotype parmi ceux qui possèdent le génotype concerné ; elle vaut ici 80 %. (Cours, p. 1-2)'
  },
  {
    id: 4,
    type: 'QRM',
    question: 'À propos de la pénétrance dans l\'interprétation d\'une famille, quelles propositions sont exactes ?',
    options: [
      { text: 'Une pénétrance incomplète signifie que chaque porteur présente forcément une forme légère.', correct: false, correction: 'Faux. La question est d\'abord celle de la présence ou non du phénotype ; la sévérité relève de l\'expressivité.' },
      { text: 'Une pénétrance complète signifie que tous les porteurs du génotype concerné manifestent le phénotype considéré.', correct: true, correction: 'Vrai. C\'est le sens de la pénétrance complète dans le cours, pour le phénotype et la période d\'observation définis.' },
      { text: 'Une pénétrance incomplète peut expliquer qu\'un porteur ne présente aucun signe détectable.', correct: true, correction: 'Vrai. Certains porteurs restent cliniquement indemnes malgré le génotype concerné.' },
      { text: 'Une pénétrance retardée suppose de tenir compte de l\'âge avant d\'interpréter l\'absence de symptômes.', correct: true, correction: 'Vrai. Un porteur peut être asymptomatique à un âge donné puis devenir symptomatique plus tard.' },
      { text: 'La pénétrance d\'une maladie se calcule en divisant tous les sujets atteints par tous les membres de la population générale.', correct: false, correction: 'Faux. Le dénominateur pertinent est l\'ensemble des porteurs du génotype étudié, et non la population générale.' },
    ],
    explanation: 'La pénétrance décrit la présence du phénotype chez les porteurs ; une apparition tardive exige aussi de considérer l\'âge. Elle ne mesure pas, à elle seule, la diversité des symptômes. (Cours, p. 1-2)'
  },
  {
    id: 5,
    type: 'QCM',
    question: 'Dans une famille où le variant causal est connu, une personne porteuse reste sans manifestation à un âge où la maladie se déclare habituellement. Quelle notion aide d\'abord à interpréter cette observation ?',
    options: [
      { text: 'Une mutation apparue chez tous ses enfants.', correct: false, correction: 'Faux. Aucun résultat concernant les enfants n\'est donné, et l\'absence de symptômes du porteur ne démontre pas cela.' },
      { text: 'L\'homozygotie obligatoire.', correct: false, correction: 'Faux. Le fait d\'être asymptomatique ne prouve pas deux allèles identiques ; le variant causal est déjà identifié.' },
      { text: 'Une expressivité nécessairement sévère.', correct: false, correction: 'Faux. Aucune manifestation sévère n\'est décrite ; l\'expressivité concerne les modalités du phénotype lorsqu\'il se manifeste.' },
      { text: 'La pénétrance incomplète.', correct: true, correction: 'Vrai. Un porteur peut ne pas manifester le phénotype attendu, ce que le cours illustre par une apparentée porteuse asymptomatique.' },
      { text: 'L\'absence certaine du variant familial.', correct: false, correction: 'Faux. L\'énoncé précise au contraire que cette personne est porteuse du variant.' },
    ],
    explanation: 'Dans l\'exemple familial du cours, une personne porteuse mais asymptomatique illustre le défaut de pénétrance ; l\'âge de début doit toujours être pris en compte. (Cours, p. 2)'
  },
  {
    id: 6,
    type: 'QRM',
    question: 'Plusieurs apparentés porteurs du même variant présentent des atteintes très différentes. Quelles interprétations sont compatibles avec la notion d\'expressivité variable ?',
    options: [
      { text: 'Des signes différents prouvent que chaque apparenté possède obligatoirement un variant causal distinct.', correct: false, correction: 'Faux. Des porteurs d\'un même variant peuvent avoir des phénotypes différents.' },
      { text: 'L\'expressivité variable signifie exactement la même chose que la pénétrance incomplète.', correct: false, correction: 'Faux. La pénétrance concerne la présence du phénotype ; l\'expressivité décrit ses manifestations chez les porteurs.' },
      { text: 'La sévérité peut différer entre deux porteurs.', correct: true, correction: 'Vrai. Une même affection familiale peut se manifester avec des intensités distinctes.' },
      { text: 'L\'âge d\'apparition des signes peut contribuer à la variabilité clinique décrite.', correct: true, correction: 'Vrai. Le cours illustre des diagnostics à des âges différents au sein d\'une même famille.' },
      { text: 'Le type de manifestation peut différer entre deux porteurs.', correct: true, correction: 'Vrai. L\'expressivité variable peut porter sur la nature des signes cliniques.' },
    ],
    explanation: 'Le cours oppose le fait d\'exprimer ou non une maladie, qui relève de la pénétrance, à la diversité des formes cliniques chez les porteurs, qui relève de l\'expressivité. (Cours, p. 2)'
  },
  {
    id: 7,
    type: 'QCM',
    question: 'Un couple demande au professionnel de choisir à sa place parmi plusieurs options reproductives. Quelle attitude correspond au conseil génétique décrit dans le cours ?',
    options: [
      { text: 'Éviter de parler du risque pour ne pas influencer la décision.', correct: false, correction: 'Faux. Présenter le risque de façon adaptée fait partie du conseil génétique.' },
      { text: 'Ne proposer qu\'une seule option afin de réduire l\'anxiété.', correct: false, correction: 'Faux. Le couple doit pouvoir connaître les options pertinentes et leurs limites.' },
      { text: 'Imposer l\'option jugée la plus simple par le professionnel.', correct: false, correction: 'Faux. Une conduite directive contredit l\'objectif d\'autonomie du consultant.' },
      { text: 'Transformer un risque calculé en certitude sur l\'état de chaque futur enfant.', correct: false, correction: 'Faux. Un risque probabiliste ne prédit pas avec certitude l\'issue pour un enfant donné.' },
      { text: 'Expliquer les options, leurs implications et leurs limites, puis accompagner une décision autonome du couple.', correct: true, correction: 'Vrai. Le conseil génétique vise une information compréhensible et un accompagnement non directif.' },
    ],
    explanation: 'Le terme « conseil » ne signifie pas prescrire un choix : l\'objectif est d\'informer et de soutenir une décision aussi autonome que possible, dans une démarche non directive. (Cours, p. 3)'
  },
  {
    id: 8,
    type: 'QRM',
    question: 'Parmi les informations susceptibles d\'être abordées en conseil génétique, lesquelles sont explicitement citées dans le cours ?',
    options: [
      { text: 'La garantie qu\'aucun apparenté ne sera atteint si le consultant est asymptomatique.', correct: false, correction: 'Faux. Un consultant asymptomatique peut porter un variant et les risques dépendent du mécanisme de transmission et de la pénétrance.' },
      { text: 'Le risque de transmission à sa descendance ou de récurrence dans la fratrie.', correct: true, correction: 'Vrai. Ces risques familiaux sont au cœur de la consultation.' },
      { text: 'Les caractéristiques de la maladie et les possibilités de prise en charge.', correct: true, correction: 'Vrai. La consultation ne se réduit pas à un chiffre de risque.' },
      { text: 'Les possibilités de planification de vie ou de projet familial.', correct: true, correction: 'Vrai. Le cours inclut les options de vie et de planification familiale parmi les thèmes possibles.' },
      { text: 'Le risque pour le consultant d\'être lui-même atteint.', correct: true, correction: 'Vrai. Une personne peut consulter pour connaître son propre risque.' },
    ],
    explanation: 'L\'information porte à la fois sur les risques, la maladie, les prises en charge et les options de vie, afin d\'éclairer les choix du consultant. (Cours, p. 3)'
  },
  {
    id: 9,
    type: 'QCM',
    question: 'Une personne atteinte d\'une maladie génétique demande la probabilité que son futur enfant reçoive l\'anomalie en cause. Quel risque souhaite-t-elle principalement faire évaluer ?',
    options: [
      { text: 'Le risque de transmission à la descendance.', correct: true, correction: 'Vrai. La question concerne le passage de l\'anomalie génétique d\'un parent vers un enfant.' },
      { text: 'Le risque de nouvelle mutation dans chaque cellule de l\'enfant.', correct: false, correction: 'Faux. L\'énoncé décrit d\'abord la transmission d\'une anomalie déjà identifiée chez le parent.' },
      { text: 'La pénétrance du variant chez la population générale.', correct: false, correction: 'Faux. La pénétrance concerne l\'expression du phénotype parmi les porteurs, pas directement la transmission parent-enfant.' },
      { text: 'La fréquence de toutes les maladies génétiques dans la population.', correct: false, correction: 'Faux. La demande porte sur une affection et une famille particulières.' },
      { text: 'La certitude que l\'enfant exprimera exactement la même sévérité que son parent.', correct: false, correction: 'Faux. Même si l\'anomalie est transmise, pénétrance et expressivité peuvent modifier le phénotype.' },
    ],
    explanation: 'Le conseil génétique distingue le risque d\'être atteint soi-même du risque de transmettre un variant à sa descendance et du risque de récidive dans une fratrie. (Cours, p. 3)'
  },
  {
    id: 10,
    type: 'QRM',
    question: 'Selon l\'organisation présentée par le cours, quels professionnels peuvent participer à une consultation de conseil génétique ?',
    options: [
      { text: 'Un médecin généticien.', correct: true, correction: 'Vrai. Le cours cite le médecin généticien parmi les intervenants.' },
      { text: 'Un spécialiste d\'organe en lien avec une équipe de génétique clinique.', correct: true, correction: 'Vrai. Le cours mentionne cette collaboration pour les pathologies d\'organe.' },
      { text: 'N\'importe quel professionnel isolé, sans lien avec une équipe de génétique.', correct: false, correction: 'Faux. L\'organisation décrite repose sur des professionnels formés et, pour le spécialiste d\'organe, sur un lien avec la génétique clinique.' },
      { text: 'Un conseiller en génétique travaillant sous supervision médicale.', correct: true, correction: 'Vrai. Le cours décrit son rôle d\'accompagnement sous supervision.' },
      { text: 'Seul le médecin qui a prescrit le premier examen, à l\'exclusion d\'une équipe spécialisée.', correct: false, correction: 'Faux. Le cours cite plusieurs intervenants possibles et la collaboration avec une équipe spécialisée.' },
    ],
    explanation: 'Le conseil génétique peut mobiliser le généticien, le spécialiste d\'organe et le conseiller en génétique dans l\'organisation d\'équipe décrite par le cours. (Cours, p. 3)'
  },
  {
    id: 11,
    type: 'QCM',
    question: 'Un clinicien hésite à adresser une famille en conseil génétique parce que la maladie suspectée est fréquente et de sévérité modérée. Quelle réponse concorde avec le cours ?',
    options: [
      { text: 'Le conseil génétique est réservé aux maladies rares ayant une mortalité élevée.', correct: false, correction: 'Faux. Rareté et gravité ne sont pas des conditions exclusives dans le cours.' },
      { text: 'Le conseil génétique peut être pertinent aussi pour une affection fréquente ou moins sévère si une question familiale de risque se pose.', correct: true, correction: 'Vrai. Le cours souligne que cette démarche n\'est pas réservée aux maladies rares ou graves.' },
      { text: 'Il faut toujours attendre qu\'un enfant soit atteint avant de proposer une consultation.', correct: false, correction: 'Faux. Une consultation peut aussi être motivée par un antécédent familial ou une question de risque avant une naissance.' },
      { text: 'Seules les anomalies chromosomiques relèvent d\'un conseil génétique.', correct: false, correction: 'Faux. Les anomalies géniques et d\'autres situations génétiques peuvent aussi conduire à une consultation.' },
      { text: 'Une maladie fréquente ne peut jamais avoir de composante héréditaire.', correct: false, correction: 'Faux. Fréquence d\'une maladie et contribution génétique sont deux questions différentes.' },
    ],
    explanation: 'La démarche est transversale : le cours la présente pour des affections rares ou fréquentes, sévères ou non, liées à une anomalie génique ou chromosomique. (Cours, p. 3-4)'
  },
  {
    id: 12,
    type: 'QRM',
    question: 'Quelles situations figurent parmi les motifs de consultation de conseil génétique décrits dans le cours ?',
    options: [
      { text: 'Une personne ayant un antécédent familial de maladie génétique déterminée.', correct: true, correction: 'Vrai. Elle peut chercher à comprendre son risque et celui de sa descendance.' },
      { text: 'Un couple ayant déjà un enfant atteint d\'une maladie génétique connue et s\'interrogeant sur une nouvelle grossesse.', correct: true, correction: 'Vrai. Le risque de récurrence et les options de projet parental peuvent être discutés.' },
      { text: 'Toute personne ayant une infection virale banale, sans question de maladie héréditaire.', correct: false, correction: 'Faux. Une infection isolée sans problématique héréditaire n\'est pas l\'un des motifs de conseil génétique présentés.' },
      { text: 'Un couple chez lequel un signe d\'appel échographique apparaît pendant la grossesse.', correct: true, correction: 'Vrai. La consultation peut expliquer les examens possibles, leurs limites et les conséquences des résultats.' },
      { text: 'Uniquement les personnes dont le diagnostic moléculaire personnel a déjà été confirmé.', correct: false, correction: 'Faux. La consultation peut précisément contribuer à clarifier un diagnostic familial encore incertain.' },
    ],
    explanation: 'Les exemples du cours comprennent un enfant déjà atteint, des signes d\'appel prénataux et les antécédents familiaux ; le diagnostic peut être à préciser. (Cours, p. 4-5)'
  },
  {
    id: 13,
    type: 'QCM',
    question: 'Des signes d\'appel échographiques sont identifiés chez un fœtus. Quel contenu de consultation est le plus adapté selon le cours ?',
    options: [
      { text: 'Reporter toute information jusqu\'après la naissance, même si le couple pose des questions pendant la grossesse.', correct: false, correction: 'Faux. Le cours décrit justement une consultation possible pendant la grossesse après des signes d\'appel.' },
      { text: 'Affirmer que l\'échographie établit à elle seule le génotype exact du fœtus.', correct: false, correction: 'Faux. Une anomalie échographique est un signe d\'appel, pas toujours un diagnostic génétique précis.' },
      { text: 'Décider immédiatement à la place du couple de la suite de la grossesse.', correct: false, correction: 'Faux. Le conseil génétique est non directif et respecte les choix du couple.' },
      { text: 'Garantir qu\'un examen négatif exclura toutes les maladies génétiques.', correct: false, correction: 'Faux. Chaque examen a un champ et des limites qu\'il faut expliquer.' },
      { text: 'Présenter les examens envisageables, leurs modalités et leurs limites, puis discuter des implications possibles avec le couple.', correct: true, correction: 'Vrai. Le cours insiste sur l\'information et l\'accompagnement des décisions selon ce qui sera identifié.' },
    ],
    explanation: 'Face à une anomalie fœtale, l\'enjeu est d\'expliquer ce que les examens peuvent ou non établir et d\'accompagner le couple selon les résultats, sans lui imposer une issue. (Cours, p. 4)'
  },
  {
    id: 14,
    type: 'QRM',
    question: 'Un couple apparenté consulte avant un projet d\'enfant. Quels énoncés respectent le raisonnement du cours ?',
    options: [
      { text: 'L\'apparentement démontre automatiquement une transmission dominante dans la famille.', correct: false, correction: 'Faux. Il ne suffit pas à définir le mode de transmission ; le cours attire surtout l\'attention sur le risque récessif.' },
      { text: 'Les maladies autosomiques récessives font partie des risques à considérer dans ce contexte.', correct: true, correction: 'Vrai. Le cours cite ce mode de transmission comme motif fréquent d\'interrogation pour un couple apparenté.' },
      { text: 'L\'apparentement peut augmenter la probabilité que les deux membres du couple portent un même variant récessif familial.', correct: true, correction: 'Vrai. Le partage d\'ancêtres accroît la possibilité d\'un allèle récessif commun.' },
      { text: 'L\'évaluation doit tenir compte de l\'histoire familiale sans considérer qu\'un enfant sera nécessairement atteint.', correct: true, correction: 'Vrai. L\'apparentement augmente certains risques mais ne détermine pas à lui seul l\'état d\'un futur enfant.' },
      { text: 'Tous les enfants d\'un couple apparenté sont atteints d\'une maladie génétique.', correct: false, correction: 'Faux. Le cours met explicitement en garde contre cette généralisation et la stigmatisation.' },
    ],
    explanation: 'L\'apparentement est un élément à intégrer avec tact à l\'évaluation du risque, notamment pour les affections récessives ; il n\'est ni un diagnostic ni une certitude de maladie. (Cours, p. 5)'
  },
  {
    id: 15,
    type: 'QCM',
    question: 'Une personne asymptomatique a un parent atteint d\'une maladie génétique à révélation tardive et hésite à connaître son propre statut. Quel est le rôle attendu de la consultation ?',
    options: [
      { text: 'Réaliser immédiatement le test sans discuter de ses conséquences.', correct: false, correction: 'Faux. L\'accompagnement et la prise en compte des souhaits du consultant sont centraux.' },
      { text: 'Conclure que le risque de sa descendance est nul sans connaître son statut ni le mode de transmission.', correct: false, correction: 'Faux. Le risque dépend du mécanisme familial et du statut du consultant.' },
      { text: 'Explorer sa demande, expliquer les enjeux d\'un test présymptomatique ou prédictif et respecter son choix de connaître ou non son statut.', correct: true, correction: 'Vrai. Le cours inclut explicitement les personnes à risque qui souhaitent, ou non, connaître leur statut.' },
      { text: 'Conclure qu\'elle n\'est pas porteuse puisqu\'elle est actuellement asymptomatique.', correct: false, correction: 'Faux. L\'absence de signe peut être liée à l\'âge de début ou à la pénétrance et ne fixe pas le génotype.' },
      { text: 'Informer uniquement les autres membres de sa famille et refuser de parler de son risque personnel.', correct: false, correction: 'Faux. Le cours cite son risque propre et celui de sa descendance parmi les questions de cette consultation.' },
    ],
    explanation: 'Le conseil génétique peut accompagner une personne à risque de maladie tardive dans sa réflexion sur un test prédictif, son risque personnel et le risque familial, y compris si elle ne souhaite pas connaître son statut. (Cours, p. 5)'
  },
  {
    id: 16,
    type: 'QRM',
    question: 'À propos des temps de consultation et de l\'accompagnement décrits dans le cours, quelles propositions sont exactes ?',
    options: [
      { text: 'L\'annonce diagnostique est centrée sur le diagnostic confirmé et ses manifestations possibles chez la personne.', correct: true, correction: 'Vrai. Ce temps présente au patient son diagnostic et les conséquences cliniques possibles.' },
      { text: 'L\'annonce et le conseil doivent toujours être confondus dans un seul échange, quel que soit l\'état émotionnel du patient.', correct: false, correction: 'Faux. Le cours recommande de distinguer ces deux moments et d\'adapter la démarche à la capacité du patient à recevoir l\'information.' },
      { text: 'Un soutien psychologique et des ressources associatives peuvent être proposés.', correct: true, correction: 'Vrai. Le cours les présente comme des appuis importants selon les besoins du consultant.' },
      { text: 'La consultation se résume à délivrer un pourcentage, sans écouter les demandes du consultant.', correct: false, correction: 'Faux. Le cours la décrit avant tout comme un espace d\'échange et de soutien.' },
      { text: 'Le conseil génétique aborde notamment les risques familiaux et les conséquences de la maladie.', correct: true, correction: 'Vrai. La consultation aide à comprendre les risques pour soi et les apparentés, ainsi que leurs implications.' },
    ],
    explanation: 'L\'annonce du diagnostic et la réflexion sur les risques ne répondent pas aux mêmes besoins ; l\'information, le rythme et les ressources d\'accompagnement doivent être adaptés au consultant. (Cours, p. 6)'
  },
  {
    id: 17,
    type: 'QCM',
    question: 'Quel enchaînement correspond aux quatre étapes du raisonnement en conseil génétique présentées dans le cours ?',
    options: [
      { text: 'Définir le statut du consultant, annoncer un risque certain, puis chercher éventuellement le mode de transmission.', correct: false, correction: 'Faux. Le mode de transmission est nécessaire à l\'interprétation du statut et au calcul du risque.' },
      { text: 'Établir le diagnostic précis, définir le mécanisme de transmission, préciser le statut du consultant, puis calculer le risque pour la descendance.', correct: true, correction: 'Vrai. Le calcul final s\'appuie sur un diagnostic, un mode de transmission et un statut aussi fiables que possible.' },
      { text: 'Calculer d\'abord le risque, puis choisir le diagnostic correspondant au chiffre obtenu.', correct: false, correction: 'Faux. Le risque ne doit pas déterminer artificiellement le diagnostic ; il en découle avec les autres données.' },
      { text: 'Faire un test sans identifier l\'affection familiale, puis considérer tout résultat négatif comme un risque nul.', correct: false, correction: 'Faux. Un résultat ne s\'interprète qu\'à la lumière de la maladie, du variant recherché et du mécanisme de transmission.' },
      { text: 'Construire uniquement un arbre généalogique puis ignorer la confirmation diagnostique et le statut du consultant.', correct: false, correction: 'Faux. L\'arbre est important mais ne remplace ni le diagnostic précis ni l\'évaluation du statut.' },
    ],
    explanation: 'Le cours décrit une progression en quatre temps : diagnostic, transmission, statut du consultant, puis calcul du risque. (Cours, p. 6)'
  },
  {
    id: 18,
    type: 'QRM',
    question: 'Pour établir un diagnostic familial assez précis avant un conseil génétique chiffré, quelles démarches sont cohérentes avec le cours ?',
    options: [
      { text: 'Tenir pour certain un diagnostic rapporté de mémoire sans aucun élément concordant.', correct: false, correction: 'Faux. Les souvenirs et la communication familiale sont des sources d\'erreur possibles ; il faut vérifier les éléments disponibles.' },
      { text: 'Proposer des examens complémentaires lorsque les données sont insuffisantes.', correct: true, correction: 'Vrai. Ils peuvent aider à préciser une affection encore mal documentée.' },
      { text: 'Attribuer la même maladie génétique à tous les apparentés présentant un symptôme banal identique, sans vérification.', correct: false, correction: 'Faux. Un signe non spécifique ne suffit pas à prouver une même étiologie génétique chez plusieurs personnes.' },
      { text: 'Vérifier les preuves disponibles du diagnostic chez les personnes concernées.', correct: true, correction: 'Vrai. Il faut rechercher la base du diagnostic plutôt que se fier à une simple étiquette familiale.' },
      { text: 'Réévaluer, si besoin, un diagnostic ancien à la lumière des connaissances et des examens actuels.', correct: true, correction: 'Vrai. Le cours souligne qu\'un diagnostic ancien peut nécessiter une nouvelle appréciation.' },
    ],
    explanation: 'La qualité du calcul de risque dépend d\'abord d\'un diagnostic exact ; le cours recommande de réunir les preuves, de réévaluer les données anciennes et de compléter l\'exploration si nécessaire. (Cours, p. 6-7)'
  },
  {
    id: 19,
    type: 'QCM',
    question: 'Dans un arbre familial, quel tableau évoque le mieux une transmission autosomique dominante à pénétrance complète selon les repères du cours ?',
    options: [
      { text: 'Des personnes atteintes dans des générations successives, des deux sexes, avec une transmission père-fils documentée.', correct: true, correction: 'Vrai. Cette association correspond aux indices proposés pour une transmission autosomique dominante à pénétrance complète.' },
      { text: 'Deux parents indemnes ont plusieurs enfants atteints des deux sexes dans une seule fratrie, sans autre cas connu.', correct: false, correction: 'Faux. Ce tableau évoque d\'abord une transmission autosomique récessive ; d\'autres hypothèses restent possibles selon le contexte.' },
      { text: 'Seuls les fils d\'une mère conductrice sont atteints et aucune transmission père-fils n\'est observée.', correct: false, correction: 'Faux. Cela oriente plutôt vers une transmission récessive liée à l\'X dans le schéma simplifié du cours.' },
      { text: 'Une mère transmet une atteinte à ses fils et filles, tandis qu\'aucun homme atteint ne la transmet.', correct: false, correction: 'Faux. Cette asymétrie parentale suggère une transmission mitochondriale.' },
      { text: 'Des filles atteintes survivent alors qu\'aucun garçon porteur ne survit dans le modèle familial considéré.', correct: false, correction: 'Faux. Le cours utilise un tel schéma pour illustrer une transmission dominante liée à l\'X létale chez les garçons.' },
    ],
    explanation: 'L\'atteinte verticale, des deux sexes, et une transmission père-fils forment ici le faisceau d\'indices d\'une transmission autosomique dominante. Un pedigree reste à interpréter avec le diagnostic et la pénétrance. (Cours, p. 7-8)'
  },
  {
    id: 20,
    type: 'QRM',
    question: 'Quels éléments d\'un arbre généalogique orientent vers une transmission autosomique récessive dans le modèle présenté par le cours ?',
    options: [
      { text: 'Des frères et sœurs atteints alors que les générations précédentes paraissent indemnes.', correct: true, correction: 'Vrai. Le regroupement dans une fratrie et le saut apparent de génération sont des indices classiques.' },
      { text: 'Des enfants atteints des deux sexes sans prédominance liée au sexe.', correct: true, correction: 'Vrai. Un gène autosomique peut concerner filles et garçons.' },
      { text: 'La maladie est nécessairement visible à chaque génération et transmise par chaque parent atteint.', correct: false, correction: 'Faux. Une telle verticalité continue est plutôt évocatrice d\'une transmission dominante complète.' },
      { text: 'L\'absence de consanguinité exclut formellement une maladie autosomique récessive.', correct: false, correction: 'Faux. L\'apparentement peut être un indice, mais il n\'est pas nécessaire pour une transmission récessive.' },
      { text: 'Des parents cliniquement indemnes ayant un enfant atteint.', correct: true, correction: 'Vrai. Deux parents porteurs non atteints peuvent avoir un enfant atteint dans une transmission récessive.' },
    ],
    explanation: 'Dans l\'arbre simplifié du cours, une atteinte regroupée dans une fratrie issue de parents indemnes, touchant les deux sexes, évoque une transmission autosomique récessive. (Cours, p. 7)'
  },
  {
    id: 21,
    type: 'QCM',
    question: 'À un locus autosomique possédant seulement deux allèles A et B, de fréquences respectives p et q, quelle relation doit toujours être vérifiée ?',
    options: [
      { text: 'pq = 1', correct: false, correction: 'Non : le produit de deux fréquences comprises entre 0 et 1 ne représente pas la somme des fréquences alléliques.' },
      { text: 'p² + q² = 1 pour toute valeur de p et q', correct: false, correction: 'Non : il manque les hétérozygotes, de fréquence 2pq dans le modèle de Hardy-Weinberg.' },
      { text: 'p + q = 2', correct: false, correction: 'Non : les fréquences alléliques totalisent 1, pas 2.' },
      { text: 'p + q = 1', correct: true, correction: 'Oui : A et B sont les deux seuls allèles considérés ; leurs fréquences totalisent 100 %.' },
      { text: 'p = q nécessairement', correct: false, correction: 'Non : les deux allèles peuvent avoir des fréquences très différentes.' },
    ],
    explanation: 'Quand seuls deux allèles A et B sont possibles à un locus, la somme de leurs fréquences est p + q = 1. (Cours, p. 14)'
  },
  {
    id: 22,
    type: 'QRM',
    question: 'Dans le modèle de Hardy-Weinberg pour deux allèles A et B, quelles fréquences génotypiques sont correctes ?',
    options: [
      { text: 'La fréquence des génotypes AA est pq.', correct: false, correction: 'Non : pq contribue aux hétérozygotes, tandis que AA a la fréquence p².' },
      { text: 'La fréquence des génotypes AA est p².', correct: true, correction: 'Oui : deux copies de A conduisent à p × p = p².' },
      { text: 'La fréquence des génotypes AB est 2pq.', correct: true, correction: 'Oui : les deux combinaisons A/B et B/A totalisent 2pq.' },
      { text: 'La fréquence des génotypes AB est q².', correct: false, correction: 'Non : q² correspond aux homozygotes BB.' },
      { text: 'La fréquence des génotypes BB est q².', correct: true, correction: 'Oui : deux copies de B conduisent à q × q = q².' },
    ],
    explanation: 'La répartition attendue est p² + 2pq + q² = 1. La formule f(AA) = p·q imprimée dans le texte est une coquille ; la relation correcte est p². (Cours, p. 14)'
  },
  {
    id: 23,
    type: 'QCM',
    question: 'Une maladie autosomique récessive rare touche environ 1 naissance sur 10 000. Sous les hypothèses de Hardy-Weinberg, quelle est approximativement la fréquence des porteurs hétérozygotes ?',
    options: [
      { text: '1 sur 200', correct: false, correction: 'Non : cette valeur est quatre fois plus faible que la fréquence approximative calculée.' },
      { text: '1 sur 50', correct: true, correction: 'Oui : q² = 1/10 000, donc q = 1/100 et 2pq ≈ 2q = 1/50.' },
      { text: '1 sur 10 000', correct: false, correction: 'Non : 1/10 000 est la fréquence des homozygotes atteints dans cet exemple.' },
      { text: '1 sur 4', correct: false, correction: 'Non : 1/4 est le risque d\'un enfant atteint lorsque les deux parents sont déjà connus porteurs.' },
      { text: '1 sur 100', correct: false, correction: 'Non : 1/100 est approximativement la fréquence de l\'allèle pathogène q, pas celle des porteurs.' },
    ],
    explanation: 'La prévalence d\'une maladie autosomique récessive à pénétrance complète est ici q² ; la fréquence des hétérozygotes est 2pq, soit environ 2√(1/10 000) = 1/50. (Cours, p. 14 et 17)'
  },
  {
    id: 24,
    type: 'QRM',
    question: 'Pour une maladie autosomique récessive rare modélisée par Hardy-Weinberg, quelles approximations ou relations sont justes ?',
    options: [
      { text: 'La fréquence des hétérozygotes 2pq est alors proche de 2q.', correct: true, correction: 'Oui : lorsque p ≈ 1, 2pq ≈ 2q.' },
      { text: 'Si q est très petit, p est proche de 1.', correct: true, correction: 'Oui : p = 1 − q.' },
      { text: 'La fréquence de l\'allèle pathogène q est égale à la prévalence q².', correct: false, correction: 'Non : q et q² sont distincts, sauf cas particuliers sans intérêt pour cette approximation.' },
      { text: 'La fréquence des porteurs est q².', correct: false, correction: 'Non : q² correspond aux homozygotes pour l\'allèle pathogène ; les porteurs hétérozygotes représentent 2pq.' },
      { text: 'La fréquence de l\'allèle pathogène est q = √(q²), si q² est la fréquence des homozygotes atteints.', correct: true, correction: 'Oui : on retrouve q par la racine carrée de q².' },
    ],
    explanation: 'Pour une maladie autosomique récessive rare, q est petit, p ≈ 1 et 2pq ≈ 2q = 2√(q²). Ces relations supposent que le modèle de Hardy-Weinberg est adapté à la population étudiée. (Cours, p. 14-15)'
  },
  {
    id: 25,
    type: 'QCM',
    question: 'Si p = 0,99 et q = 0,01, quelle est la fréquence exacte attendue des hétérozygotes AB selon Hardy-Weinberg ?',
    options: [
      { text: '19,8 %', correct: false, correction: 'Non : cette valeur résulte d\'une erreur d\'un facteur 10 dans le calcul de 2pq.' },
      { text: '1,98 %', correct: true, correction: 'Oui : 2pq = 2 × 0,99 × 0,01 = 0,0198, soit 1,98 %.' },
      { text: '0,01 %', correct: false, correction: 'Non : q² = 0,0001, soit 0,01 %, correspond aux homozygotes BB.' },
      { text: '1 %', correct: false, correction: 'Non : 1 % est la fréquence allélique q, pas la fréquence des hétérozygotes.' },
      { text: '98,01 %', correct: false, correction: 'Non : p² = 0,9801, soit 98,01 %, correspond aux homozygotes AA.' },
    ],
    explanation: 'La formule exacte des hétérozygotes est 2pq ; l\'approximation 2q donnerait 2 %, proche mais différente de 1,98 %. (Cours, p. 14)'
  },
  {
    id: 26,
    type: 'QRM',
    question: 'Deux personnes non apparentées sont choisies indépendamment dans une population où la fréquence des porteurs d\'une même maladie autosomique récessive est estimée à 1/50. Quelles propositions sont justes ?',
    options: [
      { text: 'La probabilité que les deux soient porteurs est approximativement 1/2 500.', correct: true, correction: 'Oui : sous l\'hypothèse d\'indépendance, (1/50) × (1/50) = 1/2 500.' },
      { text: 'Avant de connaître leurs génotypes, le risque approximatif d\'un enfant atteint est 1/10 000.', correct: true, correction: 'Oui : (1/2 500) × (1/4) = 1/10 000, dans ce modèle simplifié.' },
      { text: 'Si les deux sont porteurs, le risque d\'atteinte pour chaque enfant est 1/4.', correct: true, correction: 'Oui : deux parents hétérozygotes transmettent chacun l\'allèle pathogène avec une probabilité de 1/2.' },
      { text: 'Si un seul parent est porteur et l\'autre AA, le risque d\'un enfant atteint est 1/4.', correct: false, correction: 'Non : avec un parent AA, l\'enfant ne peut pas recevoir deux copies de l\'allèle pathogène considéré.' },
      { text: 'Le risque d\'un enfant atteint est toujours 1/4 pour un couple pris au hasard.', correct: false, correction: 'Non : 1/4 ne s\'applique qu\'après avoir établi que les deux parents sont porteurs.' },
    ],
    explanation: 'On multiplie le risque que les deux partenaires soient porteurs par le risque mendélien de 1/4 conditionnel à cette double hétérozygotie. Le calcul présume des partenaires indépendants et une même maladie monogénique. (Cours, p. 14-17)'
  },
  {
    id: 27,
    type: 'QCM',
    question: 'Deux parents hétérozygotes ont un enfant atteint d\'une maladie autosomique récessive. Pour l\'un de ses frères ou sœurs déjà connu comme non atteint, quelle est la probabilité d\'être hétérozygote ?',
    options: [
      { text: '2/3', correct: true, correction: 'Oui : parmi les trois génotypes non atteints possibles pondérés (AA, AB, BA), deux sont hétérozygotes.' },
      { text: '1/4', correct: false, correction: 'Non : 1/4 est la probabilité d\'un enfant homozygote atteint avant de connaître son état clinique.' },
      { text: '1/3', correct: false, correction: 'Non : 1/3 est la probabilité conditionnelle d\'être homozygote sain parmi les enfants non atteints.' },
      { text: '3/4', correct: false, correction: 'Non : 3/4 est la probabilité d\'être non atteint, et non celle d\'être porteur sachant qu\'on est non atteint.' },
      { text: '1/2', correct: false, correction: 'Non : 1/2 est la probabilité non conditionnelle d\'être hétérozygote avant l\'information « non atteint ».' },
    ],
    explanation: 'Dans le croisement de deux porteurs, les proportions sont 1/4 AA, 1/2 Aa et 1/4 aa. En conditionnant sur l\'absence d\'atteinte, P(Aa | non atteint) = (1/2)/(3/4) = 2/3. (Cours, p. 13 et 20)'
  },
  {
    id: 28,
    type: 'QRM',
    question: 'Pour une maladie récessive liée à l\'X d\'allèle pathogène rare de fréquence q, quelles relations sont attendues dans un modèle simple ?',
    options: [
      { text: 'Les garçons héritent du chromosome X paternel.', correct: false, correction: 'Non : dans la transmission chromosomique habituelle, le père transmet le Y à ses fils.' },
      { text: 'La fréquence des garçons atteints est approximativement q.', correct: true, correction: 'Oui : un garçon est hémizygote pour le chromosome X reçu de sa mère.' },
      { text: 'La fréquence des filles hétérozygotes est approximativement 2q.', correct: true, correction: 'Oui : plus exactement 2pq, qui tend vers 2q si p ≈ 1.' },
      { text: 'La fréquence des filles conductrices est q².', correct: false, correction: 'Non : q² désigne les filles homozygotes pour l\'allèle pathogène ; les conductrices hétérozygotes sont de fréquence 2pq.' },
      { text: 'La fréquence des filles homozygotes atteintes est approximativement q².', correct: true, correction: 'Oui : deux copies pathogènes sont requises dans ce modèle récessif simple.' },
    ],
    explanation: 'Dans un modèle récessif lié à l\'X, les garçons ont une seule copie du locus X et leur fréquence d\'atteinte reflète q ; chez les filles, les hétérozygotes représentent 2pq ≈ 2q quand l\'allèle est rare. (Cours, p. 14)'
  },
  {
    id: 29,
    type: 'QCM',
    question: 'Deux personnes ont des grands-parents communs et envisagent un enfant. Quelle formulation distingue correctement apparentement et consanguinité dans le cours ?',
    options: [
      { text: 'Les futurs parents sont apparentés ; l\'enfant issu de leur union serait consanguin.', correct: true, correction: 'Oui : l\'apparentement qualifie le lien entre les parents, la consanguinité de l\'enfant résulte de leur ascendance commune.' },
      { text: 'L\'enfant ne peut pas être consanguin si les parents sont cliniquement sains.', correct: false, correction: 'Non : la consanguinité décrit l\'ascendance, indépendamment de l\'état clinique.' },
      { text: 'Le terme « consanguin » désigne uniquement le mariage, jamais un individu.', correct: false, correction: 'Non : le cours emploie ce terme pour l\'individu né de parents apparentés.' },
      { text: 'Les futurs parents sont consanguins du seul fait qu\'ils forment un couple.', correct: false, correction: 'Non : former un couple ne définit pas la consanguinité d\'une personne.' },
      { text: 'Les futurs parents ne sont pas apparentés, car leurs parents sont différents.', correct: false, correction: 'Non : des grands-parents communs constituent un lien d\'apparentement.' },
    ],
    explanation: 'Deux individus partageant un ancêtre sont apparentés ; un individu issu d\'une union entre apparentés est dit consanguin. Cela ne signifie pas qu\'il sera forcément atteint d\'une maladie. (Cours, p. 15)'
  },
  {
    id: 30,
    type: 'QRM',
    question: 'Quelles affirmations décrivent correctement le coefficient de consanguinité F d\'un individu dans le contexte du cours ?',
    options: [
      { text: 'Il quantifie la probabilité que deux copies d\'un locus soient identiques par descendance d\'un ancêtre commun.', correct: true, correction: 'Oui : c\'est l\'idée probabiliste du coefficient de consanguinité.' },
      { text: 'Son calcul dépend des chemins généalogiques reliant les parents à leurs ancêtres communs.', correct: true, correction: 'Oui : chaque chemin admissible via un ancêtre commun contribue au calcul.' },
      { text: 'F vaut nécessairement 1 pour tout enfant de parents apparentés.', correct: false, correction: 'Non : la probabilité d\'identité par ascendance est bien inférieure à 1 dans les apparentements usuels.' },
      { text: 'F est directement la probabilité d\'avoir n\'importe quelle maladie autosomique récessive.', correct: false, correction: 'Non : le risque dépend aussi des variants présents dans la famille et de leurs fréquences.' },
      { text: 'Il aide à estimer l\'excès d\'homozygotie par ascendance pour des variants récessifs.', correct: true, correction: 'Oui : c\'est sa pertinence pour le risque de maladies autosomiques récessives.' },
    ],
    explanation: 'F concerne l\'identité par descendance des deux copies d\'un locus chez un individu ; il ne se confond pas avec une probabilité universelle de maladie. Dans un arbre, on compte les chemins via chaque ancêtre commun pour calculer sa valeur. (Cours, p. 15–16)'
  },
  {
    id: 31,
    type: 'QCM',
    question: 'En conseil génétique, quel est l\'apport principal du théorème de Bayes ?',
    options: [
      { text: 'Actualiser une probabilité a priori grâce à une nouvelle information, par exemple un test négatif ou des enfants sains.', correct: true, correction: 'Oui : la probabilité a posteriori tient compte de la vraisemblance de l\'information observée sous chaque hypothèse.' },
      { text: 'Transformer une maladie récessive en maladie dominante.', correct: false, correction: 'Non : Bayes ne modifie pas le mode de transmission biologique.' },
      { text: 'Prouver qu\'un test négatif exclut toujours tout portage.', correct: false, correction: 'Non : si la sensibilité est imparfaite, un porteur peut avoir un résultat négatif.' },
      { text: 'Remplacer l\'analyse de l\'arbre familial par une fréquence de population unique.', correct: false, correction: 'Non : l\'arbre familial fournit souvent la probabilité a priori.' },
      { text: 'Attribuer automatiquement un risque de 1/4 à toute descendance.', correct: false, correction: 'Non : 1/4 est un risque mendélien conditionnel à certains génotypes parentaux.' },
    ],
    explanation: 'Bayes combine une probabilité initiale et la probabilité de la nouvelle observation sous les hypothèses comparées. (Cours, p. 16-17)'
  },
  {
    id: 32,
    type: 'QRM',
    question: 'Pour calculer par Bayes la probabilité d\'être porteur après un test négatif, quels éléments interviennent ?',
    options: [
      { text: 'L\'affirmation que la probabilité a posteriori est toujours égale à la probabilité conjointe « porteur et test négatif ».', correct: false, correction: 'Non : il faut diviser cette probabilité conjointe par la probabilité totale du résultat négatif.' },
      { text: 'La probabilité d\'un test négatif si la personne n\'est pas porteuse.', correct: true, correction: 'Oui : elle entre dans la vraisemblance de l\'hypothèse alternative.' },
      { text: 'La normalisation par la somme des probabilités conjointes des deux hypothèses et du résultat négatif.', correct: true, correction: 'Oui : cette somme est la probabilité totale d\'obtenir un test négatif.' },
      { text: 'La probabilité a priori d\'être porteur.', correct: true, correction: 'Oui : elle provient par exemple de la fréquence de population ou de l\'histoire familiale.' },
      { text: 'La probabilité d\'un test négatif si la personne est porteuse.', correct: true, correction: 'Oui : c\'est une vraisemblance conditionnelle, égale à 1 moins la sensibilité dans l\'exemple simplifié.' },
    ],
    explanation: 'En posant C = « porteur » et N = « test négatif », P(C | N) = P(C)P(N | C) / [P(C)P(N | C) + P(non-C)P(N | non-C)]. (Cours, p. 17)'
  },
  {
    id: 33,
    type: 'QCM',
    question: 'Dans l\'exemple du cours, la probabilité a priori d\'être porteur est 1/50 ; le test détecte 90 % des porteurs et est négatif chez tous les non-porteurs. Quelle est la probabilité d\'être porteur après un test négatif ?',
    options: [
      { text: '1/10', correct: false, correction: 'Non : 1/10 est la probabilité d\'un faux négatif chez les porteurs.' },
      { text: '49/50', correct: false, correction: 'Non : c\'est la probabilité a priori de ne pas être porteur.' },
      { text: '1/491', correct: true, correction: 'Oui : (1/50 × 1/10) / [(1/50 × 1/10) + (49/50 × 1)] = 1/491.' },
      { text: '1/500', correct: false, correction: 'Non : 1/500 est la probabilité conjointe « porteur ET test négatif », avant normalisation.' },
      { text: '1/50', correct: false, correction: 'Non : c\'est la probabilité a priori, avant l\'information apportée par le test.' },
    ],
    explanation: 'Le test négatif diminue, sans annuler, la probabilité de portage : P(porteur | négatif) = (1/500)/(1/500 + 49/50) = 1/491. Les 90 % de détection et la négativité certaine chez les non-porteurs sont des hypothèses de cet exemple, pas des performances générales des tests génétiques. (Cours, p. 17–18)'
  },
  {
    id: 34,
    type: 'QRM',
    question: 'Dans ce même exemple (portage initial 1/50, sensibilité 90 %, test négatif chez tous les non-porteurs), quelles quantités sont correctes ?',
    options: [
      { text: 'P(porteur sachant le test négatif) = 1/500.', correct: false, correction: 'Non : 1/500 n\'est pas encore conditionné à l\'obtention du résultat négatif.' },
      { text: 'P(non-porteur et test négatif) = 49/50.', correct: true, correction: 'Oui : (49/50) × 1 = 49/50.' },
      { text: 'P(test négatif) = 491/500.', correct: true, correction: 'Oui : 1/500 + 49/50 = 491/500.' },
      { text: 'P(porteur sachant le test négatif) = 1/491.', correct: true, correction: 'Oui : la probabilité conjointe 1/500 est divisée par 491/500.' },
      { text: 'P(porteur et test négatif) = 1/500.', correct: true, correction: 'Oui : (1/50) × (1/10) = 1/500.' },
    ],
    explanation: 'Les deux branches « porteur et négatif » et « non-porteur et négatif » sont additionnées pour former le dénominateur de Bayes. (Cours, p. 17-18)'
  },
  {
    id: 35,
    type: 'QCM',
    question: 'Si la capacité d\'un test à détecter les porteurs passe de 90 % à une valeur plus élevée, toutes les autres hypothèses restant identiques, que devient la probabilité de portage après un résultat négatif ?',
    options: [
      { text: 'Elle augmente nécessairement.', correct: false, correction: 'Non : une meilleure détection des porteurs réduit les faux négatifs.' },
      { text: 'Elle diminue.', correct: true, correction: 'Oui : un test plus sensible laisse moins de porteurs parmi les résultats négatifs.' },
      { text: 'Elle reste toujours égale à la probabilité a priori.', correct: false, correction: 'Non : un test informatif modifie la probabilité initiale.' },
      { text: 'Elle devient égale à la prévalence q² de la maladie.', correct: false, correction: 'Non : q² mesure les homozygotes atteints, pas la probabilité de portage après le test.' },
      { text: 'Elle vaut toujours exactement zéro dès qu\'un test est négatif.', correct: false, correction: 'Non : elle n\'est nulle dans ce modèle idéal que si aucun porteur ne peut avoir de résultat négatif.' },
    ],
    explanation: 'À probabilité initiale et probabilité de négativité chez les non-porteurs fixées, augmenter la sensibilité diminue P(négatif | porteur), donc le risque résiduel après un test négatif. (Cours, p. 16-18)'
  },
  {
    id: 36,
    type: 'QRM',
    question: 'Une femme a initialement une probabilité de 1/2 d\'être conductrice d\'une maladie récessive liée à l\'X. Elle a déjà un fils sain. En supposant qu\'un fils d\'une conductrice a une probabilité de 1/2 d\'être sain, quelles propositions sont justes ?',
    options: [
      { text: 'P(fils sain | femme conductrice) = 1/2.', correct: true, correction: 'Oui : la conductrice transmet son X non muté à un fils une fois sur deux.' },
      { text: 'P(fils sain | femme non conductrice) = 1 dans ce modèle.', correct: true, correction: 'Oui : en l\'absence d\'autre cause, elle ne peut pas transmettre l\'allèle familial pathogène.' },
      { text: 'P(femme conductrice | fils sain) = 1/3.', correct: true, correction: 'Oui : (1/4) / [(1/4) + (1/2)] = 1/3.' },
      { text: 'P(femme conductrice et fils sain) = 1/4.', correct: true, correction: 'Oui : 1/2 de probabilité initiale d\'être conductrice × 1/2 d\'avoir un fils sain.' },
      { text: 'Le fils sain prouve que la femme n\'est pas conductrice.', correct: false, correction: 'Non : une conductrice peut transmettre son X non muté.' },
    ],
    explanation: 'Un fils sain constitue une information qui réduit le risque de 1/2 à 1/3, sans l\'annuler. Le sexe masculin du fils est déjà connu ; on conditionne seulement sur son état sain. (Cours, p. 16-18)'
  },
  {
    id: 37,
    type: 'QCM',
    question: 'Dans le cas clinique de la dystrophie musculaire de Duchenne, la mère de Madame X est une conductrice obligée et son père est non atteint. Avant de tenir compte des enfants de Madame X, quelle est sa probabilité d\'être conductrice ?',
    options: [
      { text: '2/3', correct: false, correction: 'Non : ce risque concerne certains apparentés non atteints dans des familles autosomiques récessives, pas cette transmission mère-fille.' },
      { text: '1/3', correct: false, correction: 'Non : 1/3 serait le risque révisé après un seul fils sain dans un modèle simple.' },
      { text: '1', correct: false, correction: 'Non : la mère est conductrice obligée, mais chacune de ses filles n\'hérite de l\'X muté qu\'une fois sur deux.' },
      { text: '1/2', correct: true, correction: 'Oui : sa mère lui transmet le chromosome X porteur de la variante une fois sur deux.' },
      { text: '1/4', correct: false, correction: 'Non : 1/4 est la probabilité que deux fils d\'une conductrice soient tous deux sains.' },
    ],
    explanation: 'La probabilité a priori pour une fille d\'une conductrice obligée d\'une maladie récessive liée à l\'X est 1/2, sous les hypothèses du cas. (Cours, p. 18)'
  },
  {
    id: 38,
    type: 'QRM',
    question: 'Madame X a une probabilité a priori de 1/2 d\'être conductrice de la dystrophie musculaire de Duchenne et deux fils déjà connus comme sains. Quelles probabilités interviennent dans le calcul de Bayes du cours ?',
    options: [
      { text: 'P(deux fils sains | non conductrice) = 1 dans ce modèle.', correct: true, correction: 'Oui : elle ne transmettrait pas la variante familiale à ses fils.' },
      { text: 'P(non conductrice et deux fils sains) = 1/2.', correct: true, correction: 'Oui : 1/2 × 1 = 1/2.' },
      { text: 'P(conductrice et deux fils sains) = 1/8.', correct: true, correction: 'Oui : 1/2 × 1/4 = 1/8.' },
      { text: 'P(deux fils sains | conductrice) = 1/4.', correct: true, correction: 'Oui : les transmissions à deux fils sont indépendantes, soit 1/2 × 1/2.' },
      { text: 'Le risque a posteriori d\'être conductrice est directement 1/8.', correct: false, correction: 'Non : 1/8 est une probabilité conjointe ; il faut la diviser par 1/8 + 1/2.' },
    ],
    explanation: 'Le raisonnement conditionne sur le fait que les deux enfants sont des garçons, puis utilise leur bonne santé comme nouvelle information. Les poids des hypothèses sont 1/8 et 1/2. (Cours, p. 18)'
  },
  {
    id: 39,
    type: 'QCM',
    question: 'Dans le même cas clinique, quelle est la probabilité a posteriori que Madame X soit conductrice après la naissance de ses deux fils sains ?',
    options: [
      { text: '1/4', correct: false, correction: 'Non : 1/4 est la probabilité d\'avoir deux fils sains si elle est conductrice.' },
      { text: '1/8', correct: false, correction: 'Non : 1/8 est la probabilité conjointe « conductrice et deux fils sains ».' },
      { text: '1/5', correct: true, correction: 'Oui : (1/8) / [(1/8) + (1/2)] = (1/8)/(5/8) = 1/5.' },
      { text: '0', correct: false, correction: 'Non : une conductrice peut avoir deux fils sains ; le risque n\'est pas exclu.' },
      { text: '1/2', correct: false, correction: 'Non : c\'était le risque a priori, avant les deux fils sains.' },
    ],
    explanation: 'Bayes réévalue le risque de 1/2 à 1/5. Le résultat dépend des hypothèses du cas : transmission indépendante à chaque fils et absence d\'autre cause de maladie dans la famille. (Cours, p. 18)'
  },
  {
    id: 40,
    type: 'QRM',
    question: 'À propos de la pénétrance et de son rôle dans les calculs de risque, quelles affirmations sont exactes ?',
    options: [
      { text: 'Un individu sans symptômes ne peut jamais transmettre une variante pathogène.', correct: false, correction: 'Non : un porteur asymptomatique, notamment en cas de pénétrance incomplète, peut transmettre la variante.' },
      { text: 'Elle correspond à la proportion d\'individus porteurs d\'un génotype donné qui manifestent le phénotype considéré.', correct: true, correction: 'Oui : c\'est le rapport entre porteurs phénotypiquement atteints et ensemble des porteurs du génotype.' },
      { text: 'Une pénétrance incomplète permet qu\'un porteur soit cliniquement non atteint.', correct: true, correction: 'Oui : l\'absence de symptômes n\'exclut alors pas le génotype.' },
      { text: 'La pénétrance est le nombre de porteurs divisé par le nombre de malades.', correct: false, correction: 'Non : ce rapport inverse le numérateur et le dénominateur de la définition.' },
      { text: 'Dans un calcul bayésien, l\'absence de signes peut être interprétée en tenant compte de la pénétrance.', correct: true, correction: 'Oui : sa probabilité diffère selon que la personne est ou non porteuse.' },
    ],
    explanation: 'La pénétrance est le rapport « porteurs exprimant le phénotype / tous les porteurs du génotype ». Elle intervient lorsqu\'un statut clinique sain apporte une information probabiliste, sans exclure automatiquement un variant. (Cours, p. 18)'
  },
  {
    id: 41,
    type: 'QCM',
    question: 'Une femme porte une affection autosomique dominante à début tardif. Son fils est décédé avant que son statut génétique puisse être établi ; il avait une probabilité de 1/2 d\'avoir hérité du variant. L\'enfant de ce fils n\'a pas été testé. En supposant une transmission mendélienne à chaque génération, quel est le risque que cet enfant porte le variant ?',
    options: [
      { text: '1/4.', correct: true, correction: 'La probabilité est 1/2 pour le père, puis 1/2 de transmission à son enfant : 1/4.' },
      { text: '0, car le père n\'avait pas de diagnostic confirmé avant son décès.', correct: false, correction: 'L\'absence de diagnostic ne démontre pas l\'absence du variant, surtout pour une affection tardive.' },
      { text: '1/8.', correct: false, correction: 'Il n\'y a que deux transmissions successives à 1/2, et non trois.' },
      { text: '3/4.', correct: false, correction: 'Additionner les probabilités de transmission des deux générations est incorrect.' },
      { text: '1/2, car le décès du père confirme sa transmission.', correct: false, correction: 'Le décès ne renseigne pas sur son génotype ; il faut tenir compte des deux transmissions successives.' },
    ],
    explanation: 'Le calcul remonte de proche en proche : 1/2 × 1/2 = 1/4. L\'âge et le statut inconnus du père empêchent de conclure qu\'il n\'était pas porteur. (Cours, p. 19)'
  },
  {
    id: 42,
    type: 'QRM',
    question: 'Dans l\'exemple précédent d\'affection autosomique dominante à début tardif, une grand-mère est porteuse, son fils est mort sans résultat génétique et son petit-enfant consulte. Quelles affirmations sont compatibles avec le calcul du cours ?',
    options: [
      { text: 'L\'absence de symptômes chez un apparenté encore jeune ne suffit pas à exclure le portage d\'une maladie à révélation tardive.', correct: true, correction: 'Oui : l\'âge d\'apparition et la pénétrance peuvent rendre le génotype impossible à déduire du seul examen clinique.' },
      { text: 'Le risque initial que le fils ait hérité du variant est de 1/2.', correct: true, correction: 'Chaque enfant d\'un parent hétérozygote a priori une chance sur deux de recevoir ce variant.' },
      { text: 'Le risque initial du petit-enfant est de 1/4 si l\'on ne dispose d\'aucune autre information.', correct: true, correction: 'On multiplie les deux transmissions successives, chacune de probabilité 1/2.' },
      { text: 'Il faut appliquer automatiquement le risque de 2/3 utilisé pour la fratrie saine d\'une maladie récessive.', correct: false, correction: 'Le 2/3 est un risque conditionnel propre au croisement de deux porteurs d\'une maladie récessive.' },
      { text: 'Le décès du fils suffit à démontrer qu\'il était porteur.', correct: false, correction: 'Un décès sans cause ou statut documenté ne permet pas cette conclusion.' },
    ],
    explanation: 'La transmission dominante est estimée génération par génération ; l\'absence de diagnostic chez un parent décédé ne vaut pas résultat négatif. (Cours, p. 19)'
  },
  {
    id: 43,
    type: 'QCM',
    question: 'Dans l\'exemple de mucoviscidose du cours, quelle fréquence de porteurs hétérozygotes CFTR est retenue pour une personne sans antécédent familial connu en population générale française ?',
    options: [
      { text: '1/100.', correct: false, correction: 'Cette fréquence est utilisée dans le cours pour l\'ataxie de Friedreich, pas pour la mucoviscidose.' },
      { text: '1/34.', correct: true, correction: 'Le cours retient 1/34 pour le portage hétérozygote CFTR en population générale française.' },
      { text: '1/4.', correct: false, correction: 'Le 1/4 correspond au risque d\'enfant atteint lorsque les deux parents sont hétérozygotes.' },
      { text: '1/204.', correct: false, correction: 'Le 1/204 est un risque calculé pour l\'enfant d\'un couple particulier, pas une fréquence de portage.' },
      { text: '2/3.', correct: false, correction: 'Le 2/3 est le risque conditionnel de portage chez un frère ou une sœur non malade d\'un enfant atteint, si les deux parents sont hétérozygotes.' },
    ],
    explanation: 'Le 1/34 est une donnée de fréquence des hétérozygotes utilisée comme probabilité a priori lorsque le partenaire n\'a pas d\'antécédent familial pertinent dans l\'exemple. (Cours, p. 19)'
  },
  {
    id: 44,
    type: 'QRM',
    question: 'Dans une famille atteinte de mucoviscidose, un apparenté demande une analyse de portage. Pourquoi le cours envisage-t-il une recherche qui ne se limite pas toujours au variant déjà identifié dans la famille ?',
    options: [
      { text: 'Rechercher des variants fréquents rend inutile l\'étude du variant familial déjà identifié.', correct: false, correction: 'Non : les deux recherches peuvent être complémentaires dans la situation décrite.' },
      { text: 'La mucoviscidose est relativement fréquente parmi les maladies récessives évoquées ; d\'autres variants pathogènes peuvent exister dans la population.', correct: true, correction: 'Oui : le support recommande de tenir compte aussi des variants fréquents en population générale.' },
      { text: 'Un test limité au seul variant familial ne renseigne pas sur les autres variants pathogènes recherchables.', correct: true, correction: 'Oui : un résultat négatif ciblé sur un variant ne couvre pas toutes les causes possibles de portage.' },
      { text: 'L\'étendue de la recherche moléculaire dépend notamment de la maladie et des informations familiales disponibles.', correct: true, correction: 'Oui : le support oppose une recherche ciblée pour certaines maladies rares à une recherche plus large pour la mucoviscidose.' },
      { text: 'Chez un apparenté, le variant familial est toujours absent dès lors qu\'il n\'a aucun symptôme.', correct: false, correction: 'Non : un hétérozygote peut être cliniquement sain et porter le variant familial.' },
    ],
    explanation: 'Pour une maladie récessive relativement fréquente comme la mucoviscidose, le cours propose de rechercher le ou les variants familiaux et les variants fréquents en population générale, afin de mieux apprécier le portage. (Cours, p. 21)'
  },
  {
    id: 45,
    type: 'QCM',
    question: 'Une femme non malade est sœur d\'une personne atteinte de mucoviscidose ; leurs deux parents sont hétérozygotes. Son partenaire, sans antécédent familial connu, a un risque de portage CFTR de 1/34. Dans le modèle récessif simple du cours, quel est le risque pour leur enfant d\'être atteint ?',
    options: [
      { text: '2/3.', correct: false, correction: 'Ce n\'est que le risque que la femme soit porteuse, pas le risque de maladie chez l\'enfant.' },
      { text: '1/34.', correct: false, correction: 'Il s\'agit seulement du risque de portage du partenaire.' },
      { text: '1/136.', correct: false, correction: 'Le 1/136 suppose la femme porteuse certaine et le partenaire porteur avec probabilité 1/34 ; ici son risque de portage est de 2/3.' },
      { text: '1/68.', correct: false, correction: 'Ce calcul omet le risque de transmission par l\'un des deux parents ou le conditionnement de la femme.' },
      { text: '1/204.', correct: true, correction: 'Le calcul est 2/3 × 1/34 × 1/4 = 1/204.' },
    ],
    explanation: 'On multiplie le risque de portage de chacun des parents par le risque de transmission des deux variants si tous deux sont porteurs : 2/3 × 1/34 × 1/4 = 1/204. (Cours, p. 20)'
  },
  {
    id: 46,
    type: 'QRM',
    question: 'Dans le calcul 2/3 × 1/34 × 1/4 = 1/204 pour un couple concernant la mucoviscidose, que représentent les facteurs et comment utiliser ce résultat ?',
    options: [
      { text: '1/204 signifie que la femme est forcément porteuse de la mutation familiale.', correct: false, correction: 'Son statut est incertain ; le résultat est un risque pour l\'enfant calculé avant test.' },
      { text: '1/34 représente le risque de portage a priori du partenaire sans antécédent pertinent dans l\'exemple.', correct: true, correction: 'Le cours utilise cette fréquence de portage en population générale.' },
      { text: '1/4 représente la probabilité d\'un enfant atteint si les deux parents sont hétérozygotes.', correct: true, correction: 'Chaque parent porteur transmet son allèle muté avec probabilité 1/2 : 1/2 × 1/2 = 1/4.' },
      { text: '2/3 représente le risque de portage de la femme non malade dont les deux parents sont hétérozygotes.', correct: true, correction: 'Il s\'agit du risque conditionnel de portage chez un descendant non malade d\'un couple Aa × Aa.' },
      { text: 'Le résultat reste nécessairement identique après un résultat génétique informatif chez l\'un des parents.', correct: false, correction: 'Un test informatif peut modifier les probabilités de portage et donc le risque a posteriori.' },
    ],
    explanation: 'Le produit associe deux probabilités de portage et un risque de transmission conditionnel. Il s\'agit d\'un risque a priori propre aux hypothèses de l\'exemple. (Cours, p. 20)'
  },
  {
    id: 47,
    type: 'QCM',
    question: 'Pour une maladie autosomique récessive, une femme a un risque de portage de 1/2 établi par sa branche familiale. Son partenaire, sans antécédent familial, a un risque de portage de 1/34. Quel risque d\'enfant atteint résulte du calcul présenté dans le cours ?',
    options: [
      { text: '1/204.', correct: false, correction: 'Ce résultat correspond au cas où le risque de portage familial de la femme est 2/3, et non 1/2.' },
      { text: '1/34.', correct: false, correction: 'La fréquence de portage du partenaire ne suffit pas à obtenir le risque pour un enfant atteint.' },
      { text: '1/136.', correct: false, correction: 'Ce résultat revient à traiter la femme comme porteuse certaine plutôt qu\'à risque 1/2.' },
      { text: '1/68.', correct: false, correction: 'Ce produit ne tient pas compte du risque de 1/4 d\'enfant atteint lorsque les deux parents sont porteurs.' },
      { text: '1/272.', correct: true, correction: '1/2 × 1/34 × 1/4 = 1/272.' },
    ],
    explanation: 'Lorsque le risque familial de portage est 1/2 et celui du partenaire 1/34, l\'enfant a un risque a priori de 1/2 × 1/34 × 1/4 = 1/272. (Cours, p. 20)'
  },
  {
    id: 48,
    type: 'QRM',
    question: 'Dans les deux exemples de mucoviscidose du cours, un partenaire a toujours un risque de portage de 1/34. Le risque de portage de l\'autre membre du couple est soit 2/3 (fratrie non malade d\'un patient), soit 1/2 (autre lien familial explicitement établi). Quelles comparaisons sont correctes ?',
    options: [
      { text: 'Avec un risque de portage de 1/2, le risque pour l\'enfant est 1/272.', correct: true, correction: 'Le produit est 1/2 × 1/34 × 1/4 = 1/272.' },
      { text: 'Les deux risques doivent être additionnés pour calculer le risque d\'un même enfant.', correct: false, correction: 'Ils correspondent à deux situations familiales alternatives, pas à des événements à additionner.' },
      { text: 'Avec un risque de portage de 2/3, le risque pour l\'enfant est 1/204.', correct: true, correction: 'Le produit est 2/3 × 1/34 × 1/4 = 1/204.' },
      { text: 'Le risque de 1/204 est supérieur à celui de 1/272.', correct: true, correction: 'À partenaire et transmission identiques, le risque augmente avec le risque de portage familial : 2/3 > 1/2.' },
      { text: 'Le 2/3 s\'applique à toute personne non malade de la famille, quel que soit son lien de parenté.', correct: false, correction: 'Il dépend d\'un conditionnement précis : enfant non malade de deux parents hétérozygotes.' },
    ],
    explanation: 'La différence 1/204 versus 1/272 vient uniquement du risque familial de portage, respectivement 2/3 ou 1/2. (Cours, p. 20)'
  },
  {
    id: 49,
    type: 'QCM',
    question: 'Une personne non malade est sœur d\'un patient atteint d\'ataxie de Friedreich ; leurs deux parents sont hétérozygotes. Son partenaire est non apparenté et le cours retient un portage de 1/100 en population générale. Dans le modèle autosomique récessif, quel risque pour leur enfant ?',
    options: [
      { text: '1/400.', correct: false, correction: 'Ce risque supposerait que la personne apparentée est porteuse certaine, ce qui n\'est pas établi.' },
      { text: '1/100.', correct: false, correction: 'C\'est seulement la fréquence de portage du partenaire.' },
      { text: '1/204.', correct: false, correction: 'Cette valeur vient de l\'exemple de la mucoviscidose avec 1/34, pas de l\'ataxie avec 1/100.' },
      { text: '1/600.', correct: true, correction: '2/3 × 1/100 × 1/4 = 1/600.' },
      { text: '1/150.', correct: false, correction: 'Le 2/3 × 1/100 ne tient pas compte de la probabilité de 1/4 d\'un enfant atteint si les deux parents sont porteurs.' },
    ],
    explanation: 'Le calcul conditionne le risque de la personne non malade à 2/3 puis applique le portage du partenaire 1/100 et le risque de 1/4 si les deux sont porteurs. (Cours, p. 21)'
  },
  {
    id: 50,
    type: 'QRM',
    question: 'Pour l\'exemple d\'ataxie de Friedreich avec risque d\'enfant atteint de 1/600, quelles données sont nécessaires au calcul tel qu\'il est présenté ?',
    options: [
      { text: 'Un risque de portage de 1/34 chez le partenaire.', correct: false, correction: 'Le 1/34 est la donnée de l\'exemple de mucoviscidose, non celle de l\'ataxie de Friedreich.' },
      { text: 'La certitude qu\'aucun des deux membres du couple ne porte de variant.', correct: false, correction: 'Une telle certitude supprimerait le risque familial et serait incompatible avec le calcul proposé.' },
      { text: 'Le risque de portage de 1/100 retenu pour le partenaire non apparenté.', correct: true, correction: 'C\'est la probabilité a priori utilisée pour le partenaire de population générale.' },
      { text: 'Le fait qu\'un membre du couple est non malade mais issu de deux parents hétérozygotes.', correct: true, correction: 'Ces conditions donnent pour lui un risque conditionnel de portage de 2/3.' },
      { text: 'Le caractère autosomique récessif de la maladie.', correct: true, correction: 'Il justifie le facteur 1/4 lorsque les deux membres du couple sont hétérozygotes.' },
    ],
    explanation: 'Le produit 2/3 × 1/100 × 1/4 = 1/600 requiert un risque conditionnel dans la famille, une fréquence de portage chez le partenaire et le modèle récessif. (Cours, p. 21)'
  },
  {
    id: 51,
    type: 'QCM',
    question: 'Dans un exemple pédagogique de maladie autosomique récessive avec apparentement des parents, le risque de portage calculé dans l\'arbre est de 1/2 pour la femme et de 1/8 pour l\'homme. Si les deux sont porteurs, le risque d\'enfant atteint est 1/4. Quel risque global donne le calcul du cours ?',
    options: [
      { text: '1/64.', correct: true, correction: '1/2 × 1/8 × 1/4 = 1/64.' },
      { text: '1/32.', correct: false, correction: 'Il manque encore un facteur 1/2 pour obtenir 1/2 × 1/8 × 1/4.' },
      { text: '1/4.', correct: false, correction: 'Le risque de 1/4 ne s\'applique que lorsque les deux parents sont effectivement porteurs.' },
      { text: '1/16.', correct: false, correction: 'Le produit 1/2 × 1/8 ne tient pas compte du risque de 1/4 d\'enfant atteint quand les deux parents sont porteurs.' },
      { text: '1/1088.', correct: false, correction: 'Cette valeur appartient à l\'autre configuration familiale comparée dans le cours.' },
    ],
    explanation: 'Dans cette situation familiale donnée, les deux risques de portage tirés de l\'arbre remplacent une fréquence de population générale : 1/2 × 1/8 × 1/4 = 1/64. (Cours, p. 22)'
  },
  {
    id: 52,
    type: 'QRM',
    question: 'Dans l\'exemple de calcul d\'une maladie autosomique récessive chez un couple apparenté, la femme a un risque familial de portage de 1/2 et l\'homme de 1/8. Quelles propositions décrivent correctement la méthode du cours ?',
    options: [
      { text: 'Le 1/4 est le risque conditionnel d\'enfant atteint si les deux parents portent chacun un variant pathogène en cause.', correct: true, correction: 'Dans le modèle autosomique récessif, deux porteurs Aa peuvent avoir un enfant aa avec probabilité 1/4.' },
      { text: 'Le calcul pédagogique est 1/2 × 1/8 × 1/4.', correct: true, correction: 'On combine les deux risques parentaux et le risque mendélien d\'enfant atteint si les deux sont porteurs.' },
      { text: 'Le risque calculé de 1/64 prouve qu\'un enfant sur 64 sera atteint dans toutes les familles de cousins.', correct: false, correction: 'Il s\'agit d\'un résultat propre aux risques de portage et au variant de ce pedigree, pas d\'un risque universel de consanguinité.' },
      { text: 'Il faut obligatoirement remplacer le risque familial de l\'homme par 1/34, quelle que soit sa parenté.', correct: false, correction: 'Le 1/34 est une fréquence de population générale utilisée dans un autre exemple, pas une règle pour un homme apparenté.' },
      { text: 'On évalue le risque de portage de chacun des deux parents à partir de sa branche familiale.', correct: true, correction: 'Le cours donne un risque familial pour la femme et pour l\'homme, car tous deux sont reliés à la branche concernée.' },
    ],
    explanation: 'L\'apparentement impose d\'examiner les deux branches et d\'utiliser les probabilités établies pour ce couple ; le résultat ne s\'applique pas à tout couple apparenté. (Cours, p. 22)'
  },
  {
    id: 53,
    type: 'QCM',
    question: 'Deux scénarios illustratifs du même cours donnent respectivement un risque d\'enfant atteint de 1/1088 et de 1/64. En comparant seulement ces deux valeurs, combien de fois le second risque est-il plus élevé que le premier ?',
    options: [
      { text: '8 fois.', correct: false, correction: '1088 divisé par 64 vaut 17.' },
      { text: '2 fois.', correct: false, correction: 'Le quotient est (1/64)/(1/1088) = 1088/64, et non 2.' },
      { text: '16 fois.', correct: false, correction: 'Le quotient exact de ces deux fractions est 17.' },
      { text: '17 fois.', correct: true, correction: '(1/64)/(1/1088) = 1088/64 = 17.' },
      { text: '64 fois.', correct: false, correction: 'Le dénominateur 64 n\'est pas le facteur multiplicatif entre les deux risques.' },
    ],
    explanation: 'La comparaison porte sur deux configurations familiales précises du support : 1/64 est 17 fois 1/1088. Elle ne définit pas un multiplicateur universel de l\'apparentement. (Cours, p. 22–23)'
  },
  {
    id: 54,
    type: 'QRM',
    question: 'Dans une consultation pour maladie autosomique récessive, un membre du couple est apparenté à une personne atteinte et l\'autre n\'a pas d\'antécédent connu. Quels principes de calcul et de recherche moléculaire le cours rappelle-t-il ?',
    options: [
      { text: 'Le risque d\'enfant atteint s\'obtient en additionnant les deux probabilités de portage.', correct: false, correction: 'Le calcul du modèle récessif multiplie les risques de portage et le risque de 1/4 si les deux sont porteurs.' },
      { text: 'Ne pas connaître d\'antécédent chez le partenaire prouve qu\'il n\'est pas hétérozygote.', correct: false, correction: 'Un porteur sain peut ne présenter aucun antécédent familial connu ; la fréquence populationnelle reste pertinente.' },
      { text: 'Pour une maladie récessive relativement fréquente comme la mucoviscidose, la recherche moléculaire peut inclure la mutation familiale et des variants fréquents dans la population.', correct: true, correction: 'Le cours explique que le seul variant familial peut ne pas suffire lorsque la maladie est relativement fréquente.' },
      { text: 'Le risque de portage du partenaire sans antécédent peut être estimé à partir de la population générale si aucune autre donnée n\'est disponible.', correct: true, correction: 'C\'est la méthode employée dans les exemples de mucoviscidose et d\'ataxie.' },
      { text: 'On établit le risque de portage du membre apparenté à partir de l\'arbre et du lien exact avec la personne atteinte.', correct: true, correction: 'Le risque familial se déduit de proche en proche et peut différer d\'une simple fréquence populationnelle.' },
    ],
    explanation: 'L\'arbre fournit un risque familial pour l\'apparenté ; la fréquence populationnelle fournit un risque a priori pour le partenaire sans lien connu. Les tests ciblés peuvent ensuite préciser ces estimations. (Cours, p. 20–21)'
  },
  {
    id: 55,
    type: 'QCM',
    question: 'Deux parents hétérozygotes Aa pour une maladie autosomique récessive ont une fille non malade, sans résultat génétique. Dans le modèle mendélien simple, quelle probabilité cette fille a-t-elle de ne porter aucun variant pathogène familial (génotype AA) ?',
    options: [
      { text: '1/3.', correct: true, correction: 'Parmi les trois quarts d\'enfants non malades, un quart est AA, soit (1/4)/(3/4) = 1/3.' },
      { text: '1/4.', correct: false, correction: '1/4 est la probabilité a priori de AA parmi tous les enfants avant de savoir qu\'elle est non malade.' },
      { text: '1/2.', correct: false, correction: '1/2 est la probabilité a priori de Aa avant conditionnement, pas celle de AA après observation du phénotype.' },
      { text: '2/3.', correct: false, correction: '2/3 est le risque de portage Aa conditionné par l\'absence de maladie.' },
      { text: '3/4.', correct: false, correction: '3/4 est la probabilité d\'être non malade avant de connaître le phénotype ; ce n\'est pas celle du génotype AA.' },
    ],
    explanation: 'Après exclusion du quart aa atteint, les génotypes non malades se répartissent en une part AA et deux parts Aa : P(AA | non malade) = 1/3. (Cours, p. 20)'
  },
  {
    id: 56,
    type: 'QRM',
    question: 'Un couple Aa × Aa a déjà eu un enfant atteint d\'une maladie autosomique récessive. Il attend un autre enfant ; aucun résultat prénatal n\'est disponible. Quelles probabilités sont correctes pour cette nouvelle grossesse dans le modèle mendélien simple ?',
    options: [
      { text: 'Le risque d\'être hétérozygote est nécessairement de 2/3 dès la conception, même sans savoir si le nouvel enfant est malade.', correct: false, correction: '2/3 est le risque de portage conditionné par l\'observation qu\'un enfant issu de Aa × Aa est non malade.' },
      { text: 'Le risque d\'être atteint devient nul parce que le couple a déjà eu un enfant atteint.', correct: false, correction: 'Chaque conception est un nouvel événement mendélien.' },
      { text: 'La probabilité d\'être non malade est de 3/4.', correct: true, correction: 'Les génotypes AA et Aa réunis représentent trois quarts des conceptions.' },
      { text: 'La probabilité d\'être porteur hétérozygote avant de connaître son phénotype est de 1/2.', correct: true, correction: 'Dans le croisement Aa × Aa, deux combinaisons sur quatre conduisent à Aa.' },
      { text: 'Le risque d\'être atteint est encore de 1/4.', correct: true, correction: 'Les transmissions d\'une grossesse à l\'autre sont indépendantes dans ce modèle ; le premier enfant n\'épuise pas le risque.' },
    ],
    explanation: 'Le 1/4 d\'atteinte et le 1/2 de portage sont des probabilités a priori à chaque grossesse ; le 2/3 n\'apparaît qu\'après conditionnement sur un enfant non malade. (Cours, p. 20)'
  },
  {
    id: 57,
    type: 'QCM',
    question: 'Pour une maladie autosomique récessive, une femme est porteuse certaine d\'un variant pathogène, tandis que son partenaire sans antécédent familial a un risque de portage de 1/34. Dans le modèle simple du cours, quel risque a leur enfant d\'être atteint ?',
    options: [
      { text: '1/34.', correct: false, correction: 'C\'est le seul risque de portage du partenaire ; il manque le facteur 1/4 d\'enfant atteint si les deux sont porteurs.' },
      { text: '1/136.', correct: true, correction: 'Le risque est 1 × 1/34 × 1/4 = 1/136.' },
      { text: '1/204.', correct: false, correction: '1/204 suppose que la femme a un risque de portage de 2/3 et n\'est pas porteuse certaine.' },
      { text: '1/4.', correct: false, correction: 'Le risque 1/4 suppose que le partenaire aussi est porteur certain, ce qui n\'est pas établi.' },
      { text: '1/272.', correct: false, correction: '1/272 suppose un risque de portage de 1/2 pour la femme.' },
    ],
    explanation: 'La certitude de portage d\'un parent remplace son facteur de risque par 1 ; le partenaire reste à 1/34 et la transmission récessive à 1/4 si tous deux sont porteurs. (Cours, p. 20–21)'
  },
  {
    id: 58,
    type: 'QRM',
    question: 'Le calcul familial pour une ataxie autosomique récessive aboutit, dans le cours, à un risque a priori de 1/600 d\'enfant atteint pour un couple donné. Quelles interprétations de cette estimation sont correctes ?',
    options: [
      { text: 'Elle concerne un enfant de ce couple dans les hypothèses familiales et populationnelles retenues.', correct: true, correction: 'C\'est un risque individualisé construit à partir du 2/3 familial, du 1/100 populationnel et du 1/4 mendélien.' },
      { text: 'Elle ne signifie pas qu\'une grossesse sur 600 de ce couple sera nécessairement atteinte.', correct: true, correction: 'Une probabilité par grossesse n\'impose pas une fréquence réalisée dans une petite famille.' },
      { text: 'Elle est égale à la fréquence de portage de l\'ataxie de Friedreich en population générale.', correct: false, correction: 'La fréquence de portage retenue est 1/100 ; 1/600 est le risque calculé pour l\'enfant du couple.' },
      { text: 'Elle prouve que le partenaire non apparenté n\'est pas porteur.', correct: false, correction: 'Le calcul inclut au contraire un risque de portage non nul de 1/100 pour ce partenaire.' },
      { text: 'Un test génétique informatif chez l\'un des parents pourrait conduire à recalculer ce risque.', correct: true, correction: 'Les risques de portage a priori peuvent être actualisés par une information moléculaire pertinente.' },
    ],
    explanation: 'Le 1/600 est un risque par grossesse fondé sur des informations a priori, non une certitude de résultat ni une fréquence universelle. (Cours, p. 21)'
  },
  {
    id: 59,
    type: 'QCM',
    question: 'Dans un autre pedigree de maladie autosomique récessive, une femme a un risque familial de portage de 1/8 et son partenaire non apparenté un risque populationnel de 1/34. En supposant qu\'un enfant de deux porteurs est atteint avec probabilité 1/4, quel est le risque calculé pour leur enfant ?',
    options: [
      { text: '1/34.', correct: false, correction: 'La fréquence de portage du partenaire ne suffit pas à calculer le risque d\'enfant atteint.' },
      { text: '1/64.', correct: false, correction: 'Ce résultat correspond à l\'exemple où les deux risques familiaux de portage sont 1/2 et 1/8.' },
      { text: '1/1088.', correct: true, correction: '1/8 × 1/34 × 1/4 = 1/1088.' },
      { text: '1/204.', correct: false, correction: 'Cette valeur correspond à un risque familial de portage de 2/3, non de 1/8.' },
      { text: '1/272.', correct: false, correction: 'C\'est le produit 1/8 × 1/34, qui omet le facteur 1/4 d\'atteinte chez l\'enfant de deux porteurs.' },
    ],
    explanation: 'En rendant explicites les deux risques parentaux et le facteur de transmission, le calcul est 1/8 × 1/34 × 1/4 = 1/1088, valeur comparée au risque 1/64 d\'une autre configuration familiale. (Cours, p. 22–23)'
  },
  {
    id: 60,
    type: 'QRM',
    question: 'Une personne consulte après l\'identification d\'une maladie génétique dans sa famille. Quelles démarches appartiennent au conseil génétique décrit dans le cours ?',
    options: [
      { text: 'Écarter systématiquement le parent sans antécédent de tout calcul de maladie récessive.', correct: false, correction: 'Non : ce parent peut être porteur selon la fréquence en population générale et doit être pris en compte.' },
      { text: 'Présenter les options possibles et accompagner la décision libre de la personne ou du couple.', correct: true, correction: 'Oui : le conseil doit permettre un choix autonome, sans orientation imposée.' },
      { text: 'Reconstituer les antécédents familiaux et vérifier les diagnostics rapportés.', correct: true, correction: 'Oui : la qualité du diagnostic et de l\'arbre familial conditionne le calcul de risque.' },
      { text: 'Expliquer la maladie, ses traitements éventuels et le risque de transmission selon la situation familiale.', correct: true, correction: 'Oui : l\'information médicale et génétique fait partie de la démarche.' },
      { text: 'Déduire le génotype de toutes les personnes saines sans vérifier le mode de transmission ni proposer de test.', correct: false, correction: 'Non : l\'absence de signes ne suffit pas toujours à déduire le statut génétique.' },
    ],
    explanation: 'Le conseil génétique associe vérification de l\'histoire familiale, estimation des risques, information sur les options et accompagnement adapté ; le calcul n\'est qu\'une partie de la consultation. (Cours, p. 21 et 24-25)'
  },
  {
    id: 61,
    type: 'QCM',
    question: 'Dans le cas 7, un garçon est le premier cas connu d\'une maladie récessive liée à l\'X. Le cours donne une probabilité de 9/10 pour sa mère. Que représente exactement ce nombre ?',
    options: [
      { text: 'La probabilité que le garçon soit atteint malgré son diagnostic déjà établi.', correct: false, correction: 'Faux. Le garçon est déjà identifié comme atteint ; la probabilité porte sur le statut maternel.' },
      { text: 'Le risque qu\'une fille de cette mère soit atteinte.', correct: false, correction: 'Faux. Le chiffre 9/10 ne décrit pas directement le risque d\'une fille ; il faut raisonner sur la transmission et le sexe.' },
      { text: 'La pénétrance du variant chez toutes les femmes conductrices.', correct: false, correction: 'Faux. La pénétrance est une probabilité de manifestation clinique chez les porteurs, distincte du risque d\'hétérozygotie de la mère.' },
      { text: 'Une fréquence universelle applicable à toutes les maladies liées à l\'X.', correct: false, correction: 'Faux. Le cours précise cette fréquence pour la maladie du cas 7 ; elle ne se généralise pas aux autres affections.' },
      { text: 'La probabilité a priori que sa mère soit hétérozygote pour le variant en cause, dans cette affection particulière.', correct: true, correction: 'Vrai. La valeur 9/10 est une donnée de l\'affection étudiée pour les mères de cas isolés.' },
    ],
    explanation: 'Le 9/10 est un risque a priori spécifique de conductrice chez la mère d\'un cas masculin isolé dans la maladie considérée. (Cours, p. 23)'
  },
  {
    id: 62,
    type: 'QRM',
    question: 'Pour interpréter le 9/10 attribué à la mère d\'un cas masculin isolé dans le cas 7, quelles propositions sont exactes ?',
    options: [
      { text: 'Le chiffre 9/10 est une donnée préalable au calcul des risques dans les générations suivantes.', correct: true, correction: 'Vrai. On le multiplie ensuite par les probabilités de transmission de l\'X concerné.' },
      { text: 'La mère peut être conductrice, mais une mutation nouvelle constitue une autre possibilité.', correct: true, correction: 'Vrai. Le cours oppose le portage maternel à la possibilité d\'une néomutation pour un cas isolé.' },
      { text: 'Les 1/10 de mères non conductrices correspondent nécessairement et exclusivement à des mutations nouvelles, sans autre possibilité.', correct: false, correction: 'Faux. Le complément est un état de non-portage dans le modèle ; le cours évoque les néomutations sans établir qu\'elles expliquent chaque cas restant.' },
      { text: 'Dans le modèle binaire du cours, le complément du risque de portage maternel est de 1/10.', correct: true, correction: 'Vrai. Si la probabilité d\'être hétérozygote est 9/10, celle de ne pas l\'être est 1/10 avant information supplémentaire.' },
      { text: 'Tout garçon atteint d\'une maladie récessive liée à l\'X prouve que sa mère est conductrice avec certitude.', correct: false, correction: 'Faux. Une mutation nouvelle peut expliquer un cas isolé ; la certitude ne découle pas du seul phénotype du garçon.' },
    ],
    explanation: 'La donnée 9/10 est un point de départ propre au cas, non une certitude individuelle ni une règle générale des maladies récessives liées à l\'X. (Cours, p. 23)'
  },
  {
    id: 63,
    type: 'QCM',
    question: 'Dans le cas 7, la mère d\'un garçon atteint a 9/10 de probabilité d\'être conductrice. Quelle est la probabilité a priori qu\'une fille donnée de cette mère ne soit pas conductrice du variant familial, avant tout test chez cette fille et avec un père ne portant pas le variant ?',
    options: [
      { text: '19/20.', correct: false, correction: 'Faux. Ce résultat ne correspond ni à la transmission du variant ni au complément de 9/20.' },
      { text: '9/20.', correct: false, correction: 'Faux. Neuf vingtièmes est le risque de portage de la fille, non le risque de non-portage.' },
      { text: '11/20.', correct: true, correction: 'Vrai. La fille a 9/10 × 1/2 = 9/20 de risque d\'être conductrice ; le complément est 1 − 9/20 = 11/20.' },
      { text: '1/10.', correct: false, correction: 'Faux. Ce chiffre est le risque de non-portage de la mère, pas celui de sa fille.' },
      { text: '1/2.', correct: false, correction: 'Faux. Une transmission à 1/2 est conditionnelle au fait que la mère soit conductrice ; il faut intégrer le 9/10 initial.' },
    ],
    explanation: 'La probabilité de portage de la fille est 9/20 ; pour l\'événement complémentaire « non conductrice », le risque est 11/20. (Cours, p. 23)'
  },
  {
    id: 64,
    type: 'QRM',
    question: 'Dans le cas 7, on suit deux transmissions mère-fille successives depuis une femme dont le risque de conductrice est de 9/10. Quelles étapes de calcul sont justes, avant résultats génétiques supplémentaires ?',
    options: [
      { text: 'La première fille a 9/40 de risque car on doit multiplier deux fois par 1/2 avant sa naissance.', correct: false, correction: 'Faux. Une seule transmission sépare cette fille de la mère à 9/10 ; son risque vaut 9/20.' },
      { text: 'La deuxième fille a 9/10 de risque car toutes les filles d\'une conductrice reçoivent son X muté.', correct: false, correction: 'Faux. Une mère conductrice transmet son X muté à chaque fille avec probabilité 1/2 dans le modèle simple.' },
      { text: 'La première fille a 9/20 de probabilité de porter le variant.', correct: true, correction: 'Vrai. Il faut multiplier 9/10 par 1/2 pour le passage du variant à cette fille.' },
      { text: 'Le fait que chaque descendante considérée soit déjà connue comme une fille n\'ajoute pas de facteur 1/2 pour la probabilité de naissance féminine.', correct: true, correction: 'Vrai. Leur sexe est une condition déjà fixée ; seul le facteur de transmission du variant intervient à chaque génération.' },
      { text: 'La fille de cette première fille a 9/40 de probabilité de porter le variant.', correct: true, correction: 'Vrai. Un second passage mère-fille à 1/2 donne 9/20 × 1/2 = 9/40.' },
    ],
    explanation: 'Le pedigree du cas 7 se parcourt de proche en proche : 9/10 pour la mère, 9/20 pour sa fille et 9/40 pour la génération féminine suivante. (Cours, p. 23)'
  },
  {
    id: 65,
    type: 'QCM',
    question: 'Dans le cas 7, la grand-mère a 9/10 de probabilité d\'être conductrice et le variant doit franchir deux transmissions mère-fille. Quel est le risque de conductrice pour la petite-fille, avant tout test et avec des pères non porteurs du variant ?',
    options: [
      { text: '9/20.', correct: false, correction: 'Faux. Cette valeur correspond à la fille de la grand-mère, après une seule transmission.' },
      { text: '1/4.', correct: false, correction: 'Faux. Un quart serait le risque après deux transmissions si la grand-mère était conductrice avec certitude, ce qui n\'est pas l\'hypothèse du cas 7.' },
      { text: '9/10.', correct: false, correction: 'Faux. Cette valeur appartient à la grand-mère, avant les deux transmissions considérées.' },
      { text: '9/80.', correct: false, correction: 'Faux. Cette valeur ajouterait un troisième facteur 1/2 ; elle ne représente pas le statut de la petite-fille.' },
      { text: '9/40.', correct: true, correction: 'Vrai. On calcule 9/10 × 1/2 × 1/2 = 9/40.' },
    ],
    explanation: 'Deux transmissions indépendantes à 1/2 s\'appliquent au risque initial de 9/10 ; la petite-fille a donc 9/40 de risque de conductrice. (Cours, p. 23)'
  },
  {
    id: 66,
    type: 'QRM',
    question: 'Une femme du cas 7 a 9/40 de probabilité d\'être conductrice. Le père de ses futurs enfants ne porte pas le variant ; on suppose un sex-ratio de 1/2. Quelles valeurs sont correctes ?',
    options: [
      { text: 'Pour un enfant de sexe inconnu, le risque d\'être un garçon atteint est 9/160.', correct: true, correction: 'Vrai. On ajoute au risque de portage maternel le facteur 1/2 de transmission et le facteur 1/2 d\'être un garçon.' },
      { text: 'Tout enfant de cette femme a 9/40 de probabilité d\'être atteint, quel que soit son sexe.', correct: false, correction: 'Faux. 9/40 est le risque maternel de portage, pas le risque d\'atteinte d\'un enfant.' },
      { text: 'Pour un fils déjà connu, il faut encore multiplier par 1/2 pour la probabilité d\'avoir un garçon.', correct: false, correction: 'Faux. Le sexe est fixé ; lui appliquer une nouvelle probabilité de sexe compterait deux fois la même condition.' },
      { text: 'Pour une fille dont le sexe est déjà connu, le risque de recevoir le variant maternel est 9/80.', correct: true, correction: 'Vrai. La transmission de l\'X muté à une fille connue est également de 1/2 si sa mère est conductrice.' },
      { text: 'Pour un fils dont le sexe est déjà connu, le risque d\'être atteint est 9/80.', correct: true, correction: 'Vrai. Il faut multiplier 9/40 par 1/2 pour la transmission de l\'X muté au fils.' },
    ],
    explanation: 'Il faut distinguer le risque conditionnel pour un enfant de sexe connu du risque avant connaissance du sexe : 9/80 pour un fils connu, 9/160 pour un enfant de sexe inconnu atteint dans ce modèle. (Cours, p. 23)'
  },
  {
    id: 67,
    type: 'QCM',
    question: 'Dans le cas 7, une femme a un risque de 9/40 d\'être conductrice. Sous le modèle simple du cours, avec un père non porteur et autant de naissances féminines que masculines, quel est le risque que son prochain enfant de sexe inconnu soit atteint ?',
    options: [
      { text: '9/80.', correct: false, correction: 'Faux. Ce chiffre est le risque pour un fils dont on sait déjà qu\'il est un garçon.' },
      { text: '9/40.', correct: false, correction: 'Faux. Ce chiffre est la probabilité que la mère soit conductrice, pas celle d\'avoir un enfant atteint.' },
      { text: '1/4.', correct: false, correction: 'Faux. Un quart serait le risque d\'un garçon atteint par grossesse si la mère était conductrice avec certitude.' },
      { text: '9/20.', correct: false, correction: 'Faux. Cette valeur est le risque de portage de la génération féminine précédente dans l\'arbre.' },
      { text: '9/160.', correct: true, correction: 'Vrai. Le calcul est 9/40 × 1/2 (transmission de l\'X muté) × 1/2 (garçon) = 9/160.' },
    ],
    explanation: 'Pour un enfant de sexe inconnu, l\'événement « atteint » requiert ici une mère conductrice, la transmission de l\'X muté et une naissance masculine : 9/160. (Cours, p. 23)'
  },
  {
    id: 68,
    type: 'QRM',
    question: 'La page 23 affiche une valeur finale de 9/160 mais une phrase intermédiaire écrit « 9/40 × 1/2 = 9/160 ». Quelles interprétations arithmétiques sont justes ?',
    options: [
      { text: 'La phrase intermédiaire prouve que le risque d\'un fils déjà connu comme garçon est 9/160.', correct: false, correction: 'Faux. Pour un fils connu, on ne multiplie que par le facteur 1/2 de transmission, d\'où 9/80.' },
      { text: 'La valeur 9/160 du schéma correspond à la probabilité d\'un garçon atteint par grossesse avant de connaître le sexe.', correct: true, correction: 'Vrai. Le schéma associe le risque maternel de 9/40 à une probabilité conditionnelle de 1/4 pour cet événement.' },
      { text: '9/40 × 1/2 × 1/2 vaut 9/80.', correct: false, correction: 'Faux. Deux multiplications par 1/2 donnent 9/160.' },
      { text: 'Pour obtenir 9/160 à partir de 9/40, il faut deux facteurs 1/2 : transmission du variant et naissance masculine.', correct: true, correction: 'Vrai. 9/40 × 1/2 × 1/2 = 9/160 pour un enfant de sexe inconnu.' },
      { text: '9/40 × 1/2 vaut en réalité 9/80.', correct: true, correction: 'Vrai. Le dénominateur 40 est doublé une seule fois, ce qui donne 80.' },
    ],
    explanation: 'Le résultat final de la figure est cohérent, mais l\'égalité intermédiaire du texte omet un facteur 1/2 : 9/40 × 1/2 = 9/80, puis × 1/2 pour le sexe donne 9/160. (Cours, p. 23)'
  },
  {
    id: 69,
    type: 'QCM',
    question: 'Devant un arbre familial, quel schéma oriente le plus vers une transmission par l\'ADN mitochondrial ?',
    options: [
      { text: 'Un père transmet le variant mitochondrial à tous ses fils et à aucune de ses filles.', correct: false, correction: 'Non : les mitochondries héritées par l\'enfant proviennent habituellement de la mère.' },
      { text: 'Seuls les garçons peuvent recevoir le variant mitochondrial de leur mère.', correct: false, correction: 'Non : les filles comme les garçons reçoivent l\'ADN mitochondrial maternel.' },
      { text: 'Une mère ne transmet ses mitochondries qu\'aux filles, qui les transmettront ensuite aux garçons.', correct: false, correction: 'Non : les enfants des deux sexes héritent de mitochondries maternelles, même si seules les filles les transmettent habituellement à la génération suivante.' },
      { text: 'La transmission mitochondriale impose un risque d\'un enfant atteint sur quatre lorsque les deux parents sont porteurs.', correct: false, correction: 'Non : le 1/4 correspond à un croisement autosomique récessif de deux hétérozygotes, pas à la transmission mitochondriale.' },
      { text: 'La mère peut transmettre le variant à des enfants des deux sexes, tandis qu\'un père porteur ne transmet habituellement pas son ADN mitochondrial à ses enfants.', correct: true, correction: 'Oui : l\'ADN mitochondrial est transmis par la lignée maternelle dans le modèle usuel.' },
    ],
    explanation: 'La transmission de l\'ADN mitochondrial suit la lignée maternelle et peut concerner les deux sexes ; un père ne transmet habituellement pas son ADN mitochondrial. L\'expression clinique chez les enfants peut varier, notamment avec l\'hétéroplasmie : le « tous atteints » du support est trop catégorique. (Cours, p. 8)'
  },
  {
    id: 70,
    type: 'QRM',
    question: 'Une fratrie comporte plusieurs enfants atteints alors que les deux parents paraissent cliniquement indemnes. Quelles hypothèses génétiques le cours demande-t-il d\'envisager avant de conclure ?',
    options: [
      { text: 'La preuve que la maladie est toujours acquise et jamais génétique.', correct: false, correction: 'Non : plusieurs mécanismes génétiques peuvent produire ce tableau familial.' },
      { text: 'Une transmission obligatoire par l\'ADN mitochondrial paternel.', correct: false, correction: 'Non : dans le modèle usuel, un père ne transmet pas son ADN mitochondrial à ses enfants.' },
      { text: 'Une mosaïque germinale chez un parent pour un variant responsable d\'une affection autosomique dominante.', correct: true, correction: 'Oui : une mosaïque limitée à une partie des cellules germinales peut permettre une récurrence sans atteinte clinique apparente du parent.' },
      { text: 'Une transmission autosomique récessive avec deux parents hétérozygotes.', correct: true, correction: 'Oui : deux parents porteurs non malades peuvent avoir plusieurs enfants atteints.' },
      { text: 'Une affection autosomique dominante transmise par un parent porteur mais sans symptômes en raison d\'une pénétrance incomplète.', correct: true, correction: 'Oui : l\'absence de signes cliniques chez un parent n\'exclut pas un variant dominant en cas de pénétrance incomplète.' },
    ],
    explanation: 'Une fratrie atteinte avec des parents apparemment sains évoque d\'abord une transmission autosomique récessive, mais peut aussi s\'expliquer par une mosaïque germinale ou une pénétrance incomplète dans certaines affections dominantes. L\'arbre ne suffit pas, à lui seul, à trancher. (Cours, p. 8)'
  },
  {
    id: 71,
    type: 'QCM',
    question: 'Dans le cas 8 de maladie récessive liée à l\'X, un père atteint a une fille avec une femme ne portant pas le variant considéré. Quel statut cette fille a-t-elle pour le variant paternel ?',
    options: [
      { text: 'Elle est obligatoirement atteinte de la même manière que son père.', correct: false, correction: 'Faux. Avec un X maternel sans variant, elle est hétérozygote conductrice dans le modèle simple du cas.' },
      { text: 'Elle a seulement 1/2 de probabilité d\'être conductrice.', correct: false, correction: 'Faux. Le 1/2 concerne la transmission d\'une mère hétérozygote à son enfant, pas l\'X d\'un père à une fille déjà connue.' },
      { text: 'Elle est conductrice avec certitude dans le modèle mendélien considéré.', correct: true, correction: 'Vrai. Le père transmet son unique chromosome X à chacune de ses filles ; la mère fournit ici un X sans ce variant.' },
      { text: 'Elle reçoit obligatoirement le chromosome Y paternel.', correct: false, correction: 'Faux. Une fille reçoit le chromosome X de son père, pas son Y.' },
      { text: 'Elle ne peut pas porter le variant parce que seules les hommes sont atteints dans ce cas.', correct: false, correction: 'Faux. Une femme peut être conductrice sans être atteinte dans le modèle récessif lié à l\'X.' },
    ],
    explanation: 'Le statut de la fille d\'un père atteint est certain pour le variant paternel : elle reçoit son X muté et devient conductrice dans le modèle du cas 8. (Cours, p. 24)'
  },
  {
    id: 72,
    type: 'QRM',
    question: 'Dans le modèle récessif lié à l\'X du cas 8, un homme atteint a des enfants avec une femme dont aucun X ne porte le variant familial. Quelles propositions sont exactes ?',
    options: [
      { text: 'Chaque fils reçoit le variant paternel avec probabilité 1/2.', correct: false, correction: 'Faux. Le père ne transmet pas son X à ses fils ; il leur transmet son Y.' },
      { text: 'Aucun de leurs fils ne reçoit l\'X paternel.', correct: true, correction: 'Vrai. Un fils reçoit le chromosome Y de son père et son X de sa mère.' },
      { text: 'La transmission père-fils du même X muté est le signe attendu de ce mécanisme.', correct: false, correction: 'Faux. Une transmission directe père-fils du chromosome X n\'a pas lieu dans le modèle chromosomique habituel.' },
      { text: 'Les filles sont conductrices dans ce modèle, sans être nécessairement atteintes.', correct: true, correction: 'Vrai. Elles reçoivent l\'X muté paternel et un X maternel indemne dans l\'hypothèse posée.' },
      { text: 'Chacune de leurs filles reçoit l\'X paternel qui porte le variant.', correct: true, correction: 'Vrai. Le père transmet son chromosome X à toutes ses filles.' },
    ],
    explanation: 'La distinction filles/fils vient de la transmission des chromosomes sexuels : X paternel aux filles et Y paternel aux fils. (Cours, p. 24)'
  },
  {
    id: 73,
    type: 'QCM',
    question: 'Dans le cas 8, une femme est conductrice certaine parce que son père était atteint. Avant tout test chez sa fille, quel est le risque que cette fille soit également conductrice, si le père de la fille ne porte pas le variant ?',
    options: [
      { text: '1.', correct: false, correction: 'Faux. Le statut certain de la mère n\'implique pas que toutes ses filles reçoivent l\'X muté.' },
      { text: '1/8.', correct: false, correction: 'Faux. Un huitième concerne le risque d\'atteinte d\'un fils connu plus loin dans l\'arbre du cas 8.' },
      { text: '1/4.', correct: false, correction: 'Faux. Un quart correspondrait à deux transmissions incertaines après la conductrice certaine, pas à sa fille immédiate.' },
      { text: '1/2.', correct: true, correction: 'Vrai. Une mère hétérozygote transmet son X muté à une fille donnée avec probabilité 1/2.' },
      { text: '0.', correct: false, correction: 'Faux. Une conductrice peut transmettre le variant à sa fille.' },
    ],
    explanation: 'Le père atteint rend sa fille conductrice certaine ; cette femme transmet ensuite son X muté à chacune de ses filles avec une probabilité de 1/2. (Cours, p. 24)'
  },
  {
    id: 74,
    type: 'QRM',
    question: 'Le cas 8 part d\'une fille conductrice certaine d\'un père atteint ; elle a une fille, puis une petite-fille. En l\'absence de tests des descendantes et avec des pères non porteurs, quelles propositions sont justes ?',
    options: [
      { text: 'La petite-fille a 1/4 de probabilité d\'être conductrice.', correct: true, correction: 'Vrai. Deux transmissions mère-fille à 1/2 donnent 1 × 1/2 × 1/2 = 1/4.' },
      { text: 'Le sexe féminin déjà connu de ces deux descendantes ne crée pas, dans le calcul de leur statut, deux facteurs supplémentaires de 1/2.', correct: true, correction: 'Vrai. On conditionne sur leur sexe connu ; les facteurs 1/2 représentent ici la transmission de l\'X muté.' },
      { text: 'La petite-fille est conductrice certaine comme l\'était sa grand-mère.', correct: false, correction: 'Faux. Le statut certain de départ devient probabiliste après deux transmissions non testées.' },
      { text: 'La fille de la conductrice certaine a 1/2 de probabilité d\'être conductrice.', correct: true, correction: 'Vrai. Une transmission mère-fille incertaine à 1/2 s\'applique.' },
      { text: 'La petite-fille a 1/8 de probabilité d\'être conductrice parce qu\'elle peut un jour avoir un fils.', correct: false, correction: 'Faux. Le projet d\'enfant ne modifie pas son propre risque de portage, qui est de 1/4.' },
    ],
    explanation: 'La certitude de portage ne se propage pas automatiquement : chaque génération féminine non testée ajoute ici un facteur de transmission de 1/2. (Cours, p. 24)'
  },
  {
    id: 75,
    type: 'QCM',
    question: 'Dans le cas 8, la consultante a 1/4 de probabilité d\'être conductrice. Elle a un fils dont le sexe est connu ; quel est le risque que ce fils soit atteint, en supposant le modèle récessif lié à l\'X du cours ?',
    options: [
      { text: '1/4.', correct: false, correction: 'Faux. Un quart est le risque que la mère soit conductrice, avant prise en compte de la transmission au fils.' },
      { text: '1/2.', correct: false, correction: 'Faux. Une moitié serait le risque pour un fils d\'une mère dont le portage est confirmé, ce qui n\'est pas le cas ici.' },
      { text: '1.', correct: false, correction: 'Faux. Ni le portage de la mère ni la transmission de l\'X muté à ce fils ne sont certains.' },
      { text: '1/8.', correct: true, correction: 'Vrai. Le risque est 1/4 d\'être conductrice × 1/2 de transmettre l\'X muté à ce fils = 1/8.' },
      { text: '1/16.', correct: false, correction: 'Faux. Un seizième inclut un facteur supplémentaire de 1/2 pour une naissance masculine, alors que l\'enfant est déjà connu comme un fils.' },
    ],
    explanation: 'Le risque pour un fils connu est conditionnel à son sexe : 1/4 × 1/2 = 1/8, sans facteur supplémentaire pour devenir un garçon. (Cours, p. 24)'
  },
  {
    id: 76,
    type: 'QRM',
    question: 'La consultante du cas 8 a 1/4 de risque d\'être conductrice ; le sexe de son prochain enfant est inconnu et le père ne porte pas le variant. Quelles propositions sont correctes sous l\'hypothèse d\'un sex-ratio de 1/2 ?',
    options: [
      { text: 'Le risque d\'un garçon atteint est 1/4 car le chiffre maternel suffit à lui seul.', correct: false, correction: 'Faux. Une mère conductrice ne transmet pas son X muté à tous ses enfants.' },
      { text: 'Si l\'enfant est déjà connu comme garçon, son risque d\'être atteint est 1/8.', correct: true, correction: 'Vrai. Le sexe est alors fixé et il ne reste que 1/4 × 1/2.' },
      { text: 'Le risque d\'un enfant de sexe inconnu atteint est 1/8, identique à celui d\'un fils déjà connu.', correct: false, correction: 'Faux. Avant de connaître le sexe, la probabilité d\'une naissance masculine ajoute un facteur 1/2 : le résultat est 1/16.' },
      { text: 'Le risque que cet enfant soit un garçon atteint est 1/16.', correct: true, correction: 'Vrai. Il faut 1/4 de portage maternel, 1/2 de transmission du variant et 1/2 de naissance masculine.' },
      { text: 'Le risque que l\'enfant soit une fille conductrice est 1/16.', correct: true, correction: 'Vrai. Pour cette combinaison, on multiplie 1/4 × 1/2 pour le sexe féminin × 1/2 pour la transmission du variant.' },
    ],
    explanation: 'Le cas 8 distingue clairement le risque conditionnel pour un fils connu (1/8) du risque par grossesse d\'un garçon atteint quand le sexe est inconnu (1/16). (Cours, p. 24)'
  },
  {
    id: 77,
    type: 'QCM',
    question: 'Dans le modèle particulier d\'une maladie dominante liée à l\'X avec létalité chez les garçons, quel aspect de l\'arbre familial est le plus évocateur ?',
    options: [
      { text: 'Un risque identique chez les deux sexes avec transmission père-fils habituelle.', correct: false, correction: 'Non : la transmission père-fils est absente pour un variant situé sur l\'X dans le modèle usuel.' },
      { text: 'Une transmission directe et répétée de père à fils du chromosome X muté.', correct: false, correction: 'Non : un père transmet son Y à ses fils, pas son chromosome X.' },
      { text: 'Des filles atteintes, peu ou pas de garçons atteints survivants, et éventuellement des pertes de grossesse de fœtus masculins.', correct: true, correction: 'Oui : si l\'hémizygotie masculine est létale, les garçons porteurs peuvent ne pas survivre et l\'atteinte est surtout observée chez les filles.' },
      { text: 'Des garçons atteints exclusivement, avec des mères toujours indemnes et sans aucune fille porteuse.', correct: false, correction: 'Non : ce n\'est pas le schéma dominant lié à l\'X avec létalité masculine décrit dans le cours.' },
      { text: 'Une atteinte limitée aux enfants des pères porteurs, quel que soit le sexe de la mère.', correct: false, correction: 'Non : ce schéma ne correspond ni à l\'hérédité liée à l\'X ni à la létalité masculine du modèle.' },
    ],
    explanation: 'Le cours présente ici un cas précis de transmission dominante liée à l\'X où l\'atteinte est létale chez les garçons ; l\'arbre peut montrer surtout des filles atteintes et davantage de pertes de grossesses masculines. Ce motif n\'est pas une règle pour toutes les maladies dominantes liées à l\'X. (Cours, p. 8)'
  },
  {
    id: 78,
    type: 'QRM',
    question: 'Dans le cas 8, on passe d\'un risque généalogique de conductrice de 1/4 à un résultat fiable du test ciblé du variant familial chez la consultante. Quelles mises à jour sont correctes ?',
    options: [
      { text: 'Si le test parfaitement fiable exclut ce variant chez elle, elle ne transmet pas ce variant familial à ses enfants.', correct: true, correction: 'Vrai. Cette conclusion est limitée au variant recherché et aux conditions de fiabilité du test.' },
      { text: 'Si le variant est confirmé chez elle, le risque pour un fils déjà connu comme garçon devient 1/2.', correct: true, correction: 'Vrai. Le risque maternel de portage passe de 1/4 à 1, puis la transmission au fils vaut 1/2.' },
      { text: 'Après confirmation du variant, le risque d\'atteinte pour un fils connu reste 1/8.', correct: false, correction: 'Faux. 1/8 reposait sur une incertitude de portage à 1/4 qui disparaît après un résultat positif fiable.' },
      { text: 'Si elle est confirmée conductrice, le risque par grossesse d\'un garçon atteint est 1/4 avant connaissance du sexe.', correct: true, correction: 'Vrai. Avec sex-ratio de 1/2, on multiplie 1/2 de transmission par 1/2 de naissance masculine.' },
      { text: 'Un résultat négatif pour ce variant garantit l\'absence de toute maladie génétique chez sa descendance.', correct: false, correction: 'Faux. Exclure un variant familial ciblé n\'élimine pas tous les autres risques génétiques.' },
    ],
    explanation: 'Les probabilités issues de l\'arbre doivent être actualisées avec un résultat direct fiable : pour le variant en cause, la mère est alors porteuse ou non, au lieu d\'avoir un risque a priori de 1/4. (Cours, p. 24)'
  },
  {
    id: 79,
    type: 'QCM',
    question: 'Une femme de la famille dit : « Comme seuls les hommes sont atteints chez nous, je ne peux pas transmettre cette maladie. » Quelle réponse est la plus juste pour une maladie récessive liée à l\'X comme le cas 8 ?',
    options: [
      { text: 'Tous ses fils seront forcément atteints, même si elle n\'est pas conductrice.', correct: false, correction: 'Faux. Le risque dépend de son statut et de la transmission de l\'X muté, non d\'une certitude générale.' },
      { text: 'Une femme peut être conductrice sans être atteinte ; son risque de transmission doit être évalué à partir de l\'arbre et, si possible, du variant familial.', correct: true, correction: 'Vrai. L\'absence de symptômes chez une femme n\'exclut pas un portage ni un risque pour ses descendants.' },
      { text: 'L\'absence de femmes atteintes prouve que le diagnostic familial est faux.', correct: false, correction: 'Faux. Dans le modèle récessif lié à l\'X du cours, des femmes peuvent être conductrices non atteintes.' },
      { text: 'Elle a raison : une femme ne peut jamais porter un variant récessif lié à l\'X.', correct: false, correction: 'Faux. Les femmes hétérozygotes conductrices sont au centre du calcul des cas 7 et 8.' },
      { text: 'Seul l\'état de santé de son conjoint compte pour évaluer le risque d\'un fils.', correct: false, correction: 'Faux. Un fils reçoit son chromosome X de sa mère ; son risque dépend ici d\'abord du statut maternel.' },
    ],
    explanation: 'Le cours souligne qu\'une représentation intuitive du risque, fondée par exemple sur le sexe des personnes atteintes, peut être trompeuse ; le pedigree permet de recalculer le risque réel avec tact. (Cours, p. 24-25)'
  },
  {
    id: 80,
    type: 'QRM',
    question: 'Pour restituer à une famille le calcul d\'un risque lié à l\'X comme dans les cas 7 et 8, quelles pratiques concordent avec la synthèse du cours ?',
    options: [
      { text: 'Vérifier le diagnostic évoqué dans la famille avant de bâtir un calcul sur cet antécédent.', correct: true, correction: 'Vrai. Une erreur diagnostique initiale fausserait tout le raisonnement familial.' },
      { text: 'Dire explicitement si le risque concerne un fils connu, une fille connue ou un enfant de sexe encore inconnu.', correct: true, correction: 'Vrai. Le conditionnement par le sexe change les facteurs à appliquer dans les maladies récessives liées à l\'X.' },
      { text: 'Présenter les limites du chiffre et accompagner le consultant dans ses choix et ses besoins de soutien.', correct: true, correction: 'Vrai. Le conseil génétique associe l\'explication du risque à l\'information, l\'écoute et l\'accompagnement.' },
      { text: 'Partir de la personne atteinte et suivre les transmissions de proche en proche dans l\'arbre.', correct: true, correction: 'Vrai. Le cours présente cette méthode pour identifier le statut probable de chaque apparenté.' },
      { text: 'Décider à la place du consultant de son projet parental après avoir obtenu un pourcentage.', correct: false, correction: 'Faux. Le rôle du professionnel est d\'éclairer une décision autonome, non de prescrire un choix personnel.' },
    ],
    explanation: 'La synthèse du cours relie l\'exactitude du diagnostic, la lecture du pedigree et la formulation précise du risque à une démarche d\'information et d\'accompagnement non directive. (Cours, p. 24-25)'
  },
]
