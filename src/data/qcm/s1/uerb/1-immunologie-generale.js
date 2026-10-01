export const meta = {
  title: 'Immunologie générale',
}

export default [
  {
    id: 1,
    type: 'QCM',
    question: 'Quelle conception de l\'immunité rend compte à la fois de la défense contre les agents infectieux et de la tolérance du soi ?',
    options: [
      { text: 'Une absence complète d\'inflammation, même en présence d\'un danger', correct: false, correction: 'Non chef. L\'inflammation peut contribuer à la réponse initiale face au danger.' },
      { text: 'Une protection obtenue uniquement grâce aux anticorps circulants', correct: false, correction: 'Non. Les cellules et d\'autres mécanismes de régulation participent aussi à l\'immunité.' },
      { text: 'Une réaction exclusivement destinée à détruire tout élément étranger', correct: false, correction: 'Non chef. Le fœtus et le microbiote montrent que la présence d\'un élément différent n\'impose pas sa destruction.' },
      { text: 'Un ensemble de réponses de défense et de régulation qui évite normalement des lésions dirigées contre le soi', correct: true, correction: 'Oui boss 🧠 Défendre et réguler vont ensemble : la tolérance du soi fait aussi partie du fonctionnement immunitaire.' },
      { text: 'Un système qui ne reconnaît jamais les constituants de l\'organisme', correct: false, correction: 'Faux : la reconnaissance du soi intervient notamment dans la sélection et la tolérance.' },
    ],
    explanation: 'La définition historique centrée sur la défense contre les agents étrangers ne suffit pas à expliquer la tolérance et la régulation des réponses dirigées vers le soi. (Cours, p. 1–3)'
  },
  {
    id: 2,
    type: 'QRM',
    question: 'Quelles fonctions ou propriétés appartiennent au système immunitaire décrit dans ce cours ?',
    options: [
      { text: 'Participer à l\'élimination des cellules mortes de l\'organisme', correct: true, correction: 'Exact. Le cours cite leur prise en charge par les phagocytes.' },
      { text: 'Adapter sa réponse et conserver une mémoire de certaines rencontres antigéniques', correct: true, correction: 'Exact 🧠 Le cours décrit un système capable d\'adaptation et de mémoire.' },
      { text: 'Réagir à des agents infectieux susceptibles de menacer l\'organisme', correct: true, correction: 'Oui boss. La défense contre les agents infectieux reste une fonction majeure.' },
      { text: 'Éliminer systématiquement toute bactérie du microbiote intestinal', correct: false, correction: 'Non chef. Le microbiote illustre justement une coexistence avec des micro-organismes.' },
      { text: 'Maintenir des mécanismes de tolérance envers le soi', correct: true, correction: 'Oui. Sans régulation, la reconnaissance du soi pourrait devenir pathologique.' },
    ],
    explanation: 'Le système immunitaire combine défense, élimination de cellules mortes, tolérance, adaptation et mémoire ; il ne détruit pas indistinctement tout ce qui est non-soi. (Cours, p. 1–3)'
  },
  {
    id: 3,
    type: 'QCM',
    question: 'Un lymphocyte capable de reconnaître un antigène du soi est détecté chez une personne sans symptôme. Quelle conclusion est la plus juste ?',
    options: [
      { text: 'La sélection thymique a obligatoirement cessé chez cette personne', correct: false, correction: 'Faux. La sélection n\'élimine pas tous les clones autoréactifs.' },
      { text: 'La personne a nécessairement un lupus en phase silencieuse', correct: false, correction: 'Non chef. Une spécificité dirigée vers le soi ne permet pas de poser ce diagnostic.' },
      { text: 'Le lymphocyte a nécessairement été fabriqué hors des organes lymphoïdes', correct: false, correction: 'Non chef. Son origine n\'est pas déduite de sa seule spécificité.' },
      { text: 'Cette autoréactivité ne suffit pas, à elle seule, à diagnostiquer une maladie auto-immune', correct: true, correction: 'Oui boss. Des cellules autoréactives peuvent persister sans provoquer de maladie grâce aux mécanismes de tolérance.' },
      { text: 'Tout son système immunitaire est incapable de répondre aux infections', correct: false, correction: 'Non. Autoréactivité et immunodéficience globale ne sont pas équivalentes.' },
    ],
    explanation: 'La présence d\'une reconnaissance du soi n\'est pas synonyme de maladie : la tolérance centrale est incomplète et la tolérance périphérique contribue à contrôler les cellules autoréactives. (Cours, p. 1–2)'
  },
  {
    id: 4,
    type: 'QRM',
    question: 'Concernant l\'autoréactivité et la tolérance du soi, quelles propositions sont exactes ?',
    options: [
      { text: 'Une partie des lymphocytes T fortement autoréactifs est éliminée pendant la maturation thymique', correct: true, correction: 'Exact. La sélection négative participe à la tolérance centrale.' },
      { text: 'Les lymphocytes T régulateurs participent au contrôle de réponses dirigées contre le soi', correct: true, correction: 'Exact. Les T régulateurs constituent un volet actif de la tolérance.' },
      { text: 'Des auto-anticorps peuvent être présents sans maladie auto-immune avérée', correct: true, correction: 'Oui boss. Leur seule présence ne démontre pas une atteinte clinique auto-immune.' },
      { text: 'Tous les lymphocytes reconnaissant le soi sont supprimés avant leur sortie du thymus', correct: false, correction: 'Non chef. Certains échappent à la délétion et restent contrôlés par d\'autres mécanismes.' },
      { text: 'La tolérance périphérique contribue à contrôler des lymphocytes autoréactifs ayant quitté le thymus', correct: true, correction: 'Oui 🧠 La tolérance ne s\'arrête pas à la sortie du thymus.' },
    ],
    explanation: 'La tolérance du soi associe notamment sélection thymique et régulation périphérique ; la reconnaissance du soi ou des auto-anticorps isolés n\'équivalent pas à une maladie. (Cours, p. 1–2 et 4)'
  },
  {
    id: 5,
    type: 'QCM',
    question: 'Quelle affirmation corrige l\'énoncé du cours selon lequel il n\'y aurait « pas de prolifération cellulaire » dans le thymus ?',
    options: [
      { text: 'La prolifération thymique signifie que la sélection négative n\'existe pas', correct: false, correction: 'Non chef. Prolifération et sélection sont deux processus compatibles.' },
      { text: 'Le thymus ne reçoit aucun précurseur issu de la moelle osseuse', correct: false, correction: 'Faux. Les précurseurs T proviennent de la moelle avant leur maturation thymique.' },
      { text: 'Aucun thymocyte ne se divise jamais dans cet organe', correct: false, correction: 'Non chef. Cette formulation absolue du support est erronée.' },
      { text: 'Les thymocytes peuvent proliférer pendant leur développement, alors que beaucoup sont aussi éliminés lors de la sélection', correct: true, correction: 'Oui boss 🧠 Développement thymique signifie à la fois expansion de certains précurseurs et sélection avec pertes cellulaires.' },
      { text: 'Tous les thymocytes qui prolifèrent deviennent des lymphocytes T matures', correct: false, correction: 'Non. Une grande part des cellules n\'achève pas la sélection.' },
    ],
    explanation: 'Le développement des lymphocytes T dans le thymus inclut des étapes de prolifération et de sélection. L\'affirmation absolue d\'absence de prolifération dans la ronéo doit être rectifiée. (Cours, p. 1 et 4 ; précision scientifique)'
  },
  {
    id: 6,
    type: 'QRM',
    question: 'Quelles étapes ou issues sont compatibles avec la maturation des lymphocytes T ?',
    options: [
      { text: 'La sélection thymique ne garantit pas l\'élimination de tous les clones autoréactifs', correct: true, correction: 'Exact 🧠 D\'où l\'importance de mécanismes de tolérance après la sortie du thymus.' },
      { text: 'La maturation thymique interdit toute division cellulaire', correct: false, correction: 'Non chef. Le thymus est aussi un lieu de prolifération des thymocytes.' },
      { text: 'Certains lymphocytes T régulateurs se développent dans le thymus', correct: true, correction: 'Oui. Ils participent ensuite au contrôle de réponses immunitaires.' },
      { text: 'Des précurseurs issus de la moelle osseuse gagnent le thymus', correct: true, correction: 'Oui boss. Le précurseur du LT vient de la moelle avant de maturer dans le thymus.' },
      { text: 'La sélection thymique élimine certains thymocytes dont la reconnaissance du soi est dangereusement forte', correct: true, correction: 'Exact. C\'est un mécanisme de tolérance centrale.' },
    ],
    explanation: 'Les précurseurs T proviennent de la moelle, se développent et sont sélectionnés dans le thymus ; la sélection peut supprimer certains clones ou favoriser des T régulateurs, sans être absolument exhaustive. (Cours, p. 1–2 et 4)'
  },
  {
    id: 7,
    type: 'QCM',
    question: 'Pourquoi la prise en charge des cellules apoptotiques fait-elle partie des fonctions immunitaires décrites ici ?',
    options: [
      { text: 'Elle suppose que le système immunitaire ne reconnaisse jamais le soi', correct: false, correction: 'Faux. Les cellules mortes du soi doivent justement être repérées et éliminées.' },
      { text: 'Des phagocytes éliminent ces cellules du soi en cours de renouvellement, généralement sans forte réaction inflammatoire', correct: true, correction: 'Oui boss 🧹 Le nettoyage du soi est une fonction quotidienne des phagocytes.' },
      { text: 'Elle implique nécessairement le rejet d\'un organe greffé', correct: false, correction: 'Non. Nettoyer des cellules apoptotiques et rejeter une allogreffe sont deux situations différentes.' },
      { text: 'Elle confirme que l\'immunité se limite aux anticorps', correct: false, correction: 'Non chef. Les phagocytes assurent ici la prise en charge cellulaire.' },
      { text: 'Elle démontre que toute cellule morte est un microbe', correct: false, correction: 'Non chef. Il s\'agit aussi de cellules de l\'organisme.' },
    ],
    explanation: 'L\'élimination de cellules apoptotiques de l\'organisme par les phagocytes montre que l\'immunité intervient aussi dans l\'entretien des tissus et la tolérance du soi. (Cours, p. 1–2)'
  },
  {
    id: 8,
    type: 'QRM',
    question: 'Deux personnes de la même espèce sont impliquées dans une transplantation d\'organe. Quelles affirmations sont justes ?',
    options: [
      { text: 'Le greffon est une allogreffe lorsqu\'il vient d\'un autre individu de la même espèce', correct: true, correction: 'Oui boss. C\'est le sens d\'allogénique dans le cours.' },
      { text: 'Une compatibilité HLA est pertinente dans l\'évaluation immunologique d\'une transplantation', correct: true, correction: 'Oui. Elle renseigne sur une part importante du risque alloréactif.' },
      { text: 'Des différences de CMH/HLA peuvent contribuer à une réponse de rejet importante', correct: true, correction: 'Exact. Le CMH joue un rôle majeur dans la reconnaissance du greffon.' },
      { text: 'L\'aspect macroscopique semblable de deux organes suffit à garantir l\'absence de rejet', correct: false, correction: 'Non chef. Des différences immunologiques peuvent exister malgré un aspect similaire.' },
      { text: 'Le rejet prouve que donneur et receveur sont d\'espèces différentes', correct: false, correction: 'Faux. Un rejet peut survenir précisément entre deux personnes de la même espèce.' },
    ],
    explanation: 'Une allogreffe relie deux individus de la même espèce ; les différences du complexe majeur d\'histocompatibilité, ou HLA chez l\'humain, sont déterminantes dans l\'alloréactivité. (Cours, p. 1–2)'
  },
  {
    id: 9,
    type: 'QCM',
    question: 'Quel ensemble de molécules est particulièrement impliqué dans la reconnaissance immunitaire qui peut conduire au rejet d\'une allogreffe ?',
    options: [
      { text: 'Le complexe majeur d\'histocompatibilité, appelé HLA chez l\'être humain', correct: true, correction: 'Oui boss 🎯 Le cours le place au centre de l\'intense réaction envers un greffon allogénique.' },
      { text: 'L\'hémoglobine des globules rouges du donneur', correct: false, correction: 'Non chef. Ce n\'est pas le système de compatibilité tissulaire visé dans la question.' },
      { text: 'Les anticorps maternels transférés au fœtus', correct: false, correction: 'Non chef. Ils ne définissent pas le CMH du donneur et du receveur.' },
      { text: 'La seule albumine plasmatique du receveur', correct: false, correction: 'Faux. Elle n\'explique pas la reconnaissance majeure d\'une allogreffe.' },
      { text: 'Le glucose du milieu extracellulaire', correct: false, correction: 'Non. Une molécule métabolique commune ne représente pas le système HLA.' },
    ],
    explanation: 'Le CMH/HLA présente une forte diversité entre individus et joue un rôle central dans les réponses alloréactives pouvant conduire au rejet de greffe. (Cours, p. 1 et 3)'
  },
  {
    id: 10,
    type: 'QRM',
    question: 'Dans le modèle mendélien simplifié où chaque parent transmet l\'un de ses deux haplotypes HLA, que peut-on dire de deux enfants ayant les mêmes parents biologiques ?',
    options: [
      { text: 'Chaque enfant reçoit un haplotype HLA maternel et un haplotype paternel', correct: true, correction: 'Oui boss. C\'est la base du calcul de compatibilité familiale.' },
      { text: 'Deux enfants de la même fratrie peuvent avoir des profils HLA différents', correct: true, correction: 'Oui. Chaque transmission parentale est une combinaison possible.' },
      { text: 'Tous les frères et sœurs sont nécessairement HLA-identiques', correct: false, correction: 'Non chef. Le modèle donne une probabilité, pas une certitude.' },
      { text: 'Le chiffre de 1/4 suppose ici la même mère et le même père, ainsi que les hypothèses du modèle', correct: true, correction: 'Exact 🧠 Le raccourci ne s\'applique pas indistinctement à toute fratrie recomposée.' },
      { text: 'La probabilité qu\'un second enfant reçoive la même paire d\'haplotypes qu\'un premier est de 1/4', correct: true, correction: 'Exact : 1/2 pour la part maternelle, multiplié par 1/2 pour la part paternelle.' },
    ],
    explanation: 'Dans le modèle classique, la concordance des deux haplotypes parentaux a une probabilité de 1/2 × 1/2 = 1/4 pour une fratrie issue des mêmes parents ; c\'est une probabilité, non une garantie individuelle. (Cours, p. 1 ; hypothèses explicitées)'
  },
  {
    id: 11,
    type: 'QCM',
    question: 'Pourquoi la grossesse illustre-t-elle une tolérance immunitaire active ?',
    options: [
      { text: 'Tous les lymphocytes T de la mère cessent de fonctionner pendant neuf mois', correct: false, correction: 'Faux. La tolérance gestationnelle n\'est pas une paralysie immunitaire générale.' },
      { text: 'Le fœtus exprime des caractères hérités du père, tandis que des mécanismes locaux régulent la réponse maternelle sans abolir toute défense', correct: true, correction: 'Oui boss 🧠 La coexistence mère–fœtus repose sur une régulation spécialisée à leur interface.' },
      { text: 'L\'absence de rejet signifie qu\'aucune cellule immunitaire n\'est présente au placenta', correct: false, correction: 'Non. Des cellules immunitaires participent activement aux interactions à l\'interface materno-fœtale.' },
      { text: 'La tolérance au fœtus prouve que le CMH n\'intervient jamais dans les interactions immunitaires', correct: false, correction: 'Non chef. Elle montre que la réponse à des différences génétiques peut être régulée selon le contexte.' },
      { text: 'Le fœtus possède exactement le même patrimoine génétique que sa mère', correct: false, correction: 'Non chef. Il hérite aussi d\'une partie de son patrimoine de l\'autre parent.' },
    ],
    explanation: 'Le fœtus est en partie génétiquement distinct de la mère ; la grossesse s\'accompagne d\'une tolérance régulée à l\'interface materno-fœtale tout en conservant des défenses contre les infections. (Cours, p. 2–3)'
  },
  {
    id: 12,
    type: 'QRM',
    question: 'À propos de l\'immunité pendant une grossesse normale, quelles propositions sont justes ?',
    options: [
      { text: 'L\'expression de caractères paternels par le fœtus pose une question de tolérance immunitaire', correct: true, correction: 'Oui boss. Le fœtus est partiellement allogénique pour la mère.' },
      { text: 'La mère conserve des capacités de défense contre les agents infectieux', correct: true, correction: 'Oui 🧠 Tolérance du fœtus ne veut pas dire absence générale d\'immunité.' },
      { text: 'Les réponses immunitaires à l\'interface materno-fœtale sont régulées', correct: true, correction: 'Exact. Cette régulation contribue à la poursuite de la grossesse.' },
      { text: 'La tolérance du fœtus est identique, dans tous ses mécanismes, à la tolérance d\'un rein allogreffé', correct: false, correction: 'Faux. La grossesse et la transplantation ont des interfaces et contextes immunologiques distincts.' },
      { text: 'La grossesse exige la suppression définitive de tous les lymphocytes T maternels', correct: false, correction: 'Non chef. Des cellules T restent présentes et fonctionnelles ; leur activité est modulée selon les tissus et les circonstances.' },
    ],
    explanation: 'La grossesse conjugue tolérance au fœtus partiellement différent et maintien d\'une protection immunitaire ; elle ne se résume pas à un blocage global des lymphocytes T. (Cours, p. 2–3)'
  },
  {
    id: 13,
    type: 'QCM',
    question: 'Que montre la coexistence habituelle avec le microbiote intestinal ?',
    options: [
      { text: 'Toute bactérie présente dans l\'intestin déclenche nécessairement une maladie auto-immune', correct: false, correction: 'Non. La coexistence avec le microbiote ne définit pas une auto-immunité.' },
      { text: 'La tolérance du microbiote exige de perdre toute capacité à répondre à un pathogène digestif', correct: false, correction: 'Non chef. Réguler les commensaux et défendre contre un danger restent compatibles.' },
      { text: 'Toutes les bactéries intestinales sont des cellules du soi humain', correct: false, correction: 'Non chef. Ce sont bien des micro-organismes distincts de nos cellules.' },
      { text: 'Le système immunitaire intestinal est absent chez une personne saine', correct: false, correction: 'Faux. Il surveille et régule constamment les interactions avec les microbes.' },
      { text: 'La reconnaissance d\'organismes extérieurs peut s\'accompagner d\'une régulation plutôt que de leur élimination systématique', correct: true, correction: 'Oui boss. Le microbiote est un bon contre-exemple à l\'idée que tout non-soi doit être détruit.' },
    ],
    explanation: 'Le microbiote intestinal illustre une relation régulée entre l\'hôte et des micro-organismes non-soi. Cette coexistence contredit une définition de l\'immunité limitée à l\'attaque de tout agent étranger. (Cours, p. 2–3)'
  },
  {
    id: 14,
    type: 'QRM',
    question: 'Quelles distinctions entre auto-immunité et auto-inflammation sont correctes ?',
    options: [
      { text: 'L\'auto-inflammation met au premier plan des dérèglements de l\'immunité innée', correct: true, correction: 'Exact. L\'amplification inflammatoire innée en est le trait central.' },
      { text: 'Le lupus est présenté comme un exemple d\'auto-immunité', correct: true, correction: 'Oui. Le cours le relie à la reconnaissance immunitaire du soi.' },
      { text: 'Une crise de goutte exige par définition des auto-anticorps dirigés contre le cartilage', correct: false, correction: 'Non chef. Les cristaux d\'urate peuvent déclencher une inflammation innée sans cet auto-anticorps.' },
      { text: 'Dans une maladie auto-immune, une réponse adaptative peut viser des antigènes du soi', correct: true, correction: 'Oui boss. C\'est le mécanisme distinctif donné pour l\'auto-immunité.' },
      { text: 'Les lymphocytes B et T ne peuvent jamais intervenir d\'aucune manière dans une maladie classée auto-inflammatoire', correct: false, correction: 'Faux. C\'est trop absolu : la distinction repose sur le mécanisme dominant, pas sur l\'absence universelle d\'interactions entre branches immunitaires.' },
    ],
    explanation: 'L\'auto-immunité implique une réponse adaptative dirigée contre le soi ; l\'auto-inflammation désigne surtout une activation dérégulée de l\'immunité innée, même si les réseaux immunitaires ne sont pas strictement séparés. (Cours, p. 2)'
  },
  {
    id: 15,
    type: 'QCM',
    question: 'Dans l\'exemple de la goutte, quel événement initie classiquement la réaction inflammatoire innée décrite dans le cours ?',
    options: [
      { text: 'Une reconnaissance obligatoire d\'un auto-antigène par des anticorps anti-cartilage', correct: false, correction: 'Non chef. Ce n\'est pas le mécanisme classique de la crise de goutte.' },
      { text: 'La destruction physiologique de tous les lymphocytes T dans le thymus', correct: false, correction: 'Non. La sélection thymique n\'est pas l\'événement déclencheur des cristaux articulaires.' },
      { text: 'La disparition de toutes les cytokines de l\'articulation', correct: false, correction: 'Non chef. Le déclenchement de médiateurs inflammatoires va dans l\'autre sens.' },
      { text: 'Une infection bactérienne articulaire nécessaire dans chaque crise', correct: false, correction: 'Faux. La goutte peut provoquer une inflammation stérile.' },
      { text: 'La présence de cristaux d\'urate monosodique qui activent notamment l\'inflammasome', correct: true, correction: 'Oui boss 🎯 Les cristaux agissent comme signal inflammatoire pour les cellules de l\'immunité innée.' },
    ],
    explanation: 'Les cristaux d\'urate déclenchent une réponse inflammatoire innée, notamment par l\'activation de l\'inflammasome et la production de médiateurs inflammatoires. (Cours, p. 2)'
  },
  {
    id: 16,
    type: 'QRM',
    question: 'À propos de la crise de goutte comme exemple d\'auto-inflammation, quelles propositions sont exactes ?',
    options: [
      { text: 'La goutte est classée auto-immune uniquement parce qu\'elle touche une articulation du soi', correct: false, correction: 'Faux. C\'est le mécanisme immunitaire, et non l\'organe touché, qui distingue auto-inflammation et auto-immunité.' },
      { text: 'Elle peut correspondre à une inflammation stérile en réponse à des cristaux', correct: true, correction: 'Oui boss. Un germe n\'est pas nécessaire au mécanisme de la goutte.' },
      { text: 'Des polynucléaires neutrophiles peuvent être recrutés dans l\'articulation inflammatoire', correct: true, correction: 'Oui. Leur arrivée fait partie de la réaction décrite.' },
      { text: 'Les cristaux peuvent activer l\'inflammasome et favoriser la production de cytokines inflammatoires', correct: true, correction: 'Exact 🧠 C\'est le lien entre cristaux et réaction innée.' },
      { text: 'Toute élévation du taux d\'acide urique sanguin suffit à prouver une crise articulaire en cours', correct: false, correction: 'Non chef. Un chiffre sanguin isolé ne démontre pas qu\'une articulation subit une crise liée aux cristaux.' },
    ],
    explanation: 'Dans la goutte, les cristaux d\'urate peuvent induire une inflammation stérile impliquant l\'inflammasome et le recrutement de neutrophiles ; cela ne requiert pas une réponse adaptative contre un auto-antigène articulaire. (Cours, p. 2)'
  },
  {
    id: 17,
    type: 'QCM',
    question: 'Quel mécanisme général illustre la « maladie périodique » dans la discussion des maladies auto-inflammatoires ?',
    options: [
      { text: 'Une tolérance totale et permanente à tous les agents infectieux', correct: false, correction: 'Non chef. Un emballement inflammatoire est l\'inverse d\'une absence de réponse.' },
      { text: 'Une dérégulation qui amplifie excessivement la réponse inflammatoire innée', correct: true, correction: 'Oui boss. Le cours s\'en sert pour illustrer l\'emballement de l\'inflammation initiale.' },
      { text: 'Une perte de tous les anticorps circulants sans réaction inflammatoire', correct: false, correction: 'Non chef. L\'exemple porte sur une inflammation accrue, pas sur la disparition des anticorps.' },
      { text: 'Une auto-immunité définie par un auto-anticorps spécifique présent dans tous les cas', correct: false, correction: 'Non. Cette définition ne correspond pas au mécanisme auto-inflammatoire mis en avant.' },
      { text: 'Un rejet immunitaire obligatoire de chaque greffe rénale', correct: false, correction: 'Faux. Le rejet de greffe est une autre situation immunologique.' },
    ],
    explanation: 'Le support cite la maladie périodique comme exemple d\'auto-inflammation : une anomalie de régulation peut amplifier une réponse inflammatoire initiale. (Cours, p. 2)'
  },
  {
    id: 18,
    type: 'QRM',
    question: 'Pourquoi distinguer des fonctions immunitaires effectrices et des fonctions tolérogènes ?',
    options: [
      { text: 'Les fonctions tolérogènes limitent des réponses dommageables envers le soi ou des éléments tolérés', correct: true, correction: 'Exact. La régulation est aussi une fonction immunitaire active.' },
      { text: 'Les fonctions effectrices contribuent à éliminer ou contrôler certains dangers', correct: true, correction: 'Oui boss. Elles correspondent à l\'action immunitaire face à une menace.' },
      { text: 'La grossesse et le microbiote montrent l\'importance d\'une réponse adaptée au contexte', correct: true, correction: 'Oui 🧠 Une différence génétique ou microbienne ne signifie pas automatiquement rejet.' },
      { text: 'Une fonction tolérogène impose l\'absence absolue de réponses aux infections', correct: false, correction: 'Non chef. La tolérance à une cible n\'annule pas toute défense immunitaire.' },
      { text: 'Ces fonctions ne peuvent jamais coexister dans un même organisme', correct: false, correction: 'Faux. Elles coexistent et se coordonnent en permanence.' },
    ],
    explanation: 'Le cours oppose utilement action effectrice et tolérance, tout en montrant qu\'elles s\'intègrent au sein d\'un même système selon la cible et le contexte. (Cours, p. 1–3)'
  },
  {
    id: 19,
    type: 'QCM',
    question: 'Quelle proposition corrige l\'affirmation selon laquelle la mémoire immunitaire « ne dépasse pas 10–20 ans » ?',
    options: [
      { text: 'Une mémoire immunitaire durable ne concerne jamais les lymphocytes', correct: false, correction: 'Faux. Des cellules immunitaires mémoires participent à cette persistance.' },
      { text: 'La mémoire prouve que chaque cellule immunitaire initiale vit éternellement', correct: false, correction: 'Non chef. Une population ou une réponse peut persister malgré le renouvellement des cellules.' },
      { text: 'Toute mémoire immunitaire cesse exactement au vingtième anniversaire de l\'exposition', correct: false, correction: 'Non chef. Le cours donne ici une limite absolue qui ne tient pas.' },
      { text: 'La mémoire est toujours identique pour tous les antigènes et tous les individus', correct: false, correction: 'Non. Sa qualité et sa durée varient selon le contexte.' },
      { text: 'Sa durée dépend de l\'antigène et de la réponse ; certaines mémoires immunitaires persistent plusieurs décennies', correct: true, correction: 'Oui boss 🧠 Il n\'existe pas de plafond universel à vingt ans ; certaines réponses durent bien plus longtemps.' },
    ],
    explanation: 'La mémoire immunologique peut être durable et varie selon l\'antigène et l\'individu ; la borne fixe de 10–20 ans figurant dans la ronéo est inexacte. (Cours, p. 3 ; précision scientifique)'
  },
  {
    id: 20,
    type: 'QRM',
    question: 'Quelles conclusions générales respectent les exemples du cours : greffe, grossesse, microbiote et maladies inflammatoires ?',
    options: [
      { text: 'Des auto-anticorps isolés ne suffisent pas nécessairement à établir une maladie auto-immune', correct: true, correction: 'Exact. Le diagnostic ne se déduit pas d\'une seule autoréactivité biologique.' },
      { text: 'Les maladies auto-immunes et auto-inflammatoires ont toujours le même mécanisme initial', correct: false, correction: 'Non chef. La distinction porte justement sur la réponse adaptative au soi ou la dérégulation surtout innée.' },
      { text: 'La coexistence avec le microbiote empêche de réduire l\'immunité à l\'élimination de tout non-soi', correct: true, correction: 'Oui 🧠 La relation à ces microbes comporte aussi de la régulation.' },
      { text: 'La grossesse montre qu\'une différence génétique peut être tolérée dans un contexte régulé', correct: true, correction: 'Exact. Le fœtus partiellement distinct n\'est pas traité comme un greffon ordinaire.' },
      { text: 'Le rejet d\'une allogreffe montre qu\'une différence HLA peut susciter une forte réponse', correct: true, correction: 'Oui boss. L\'alloréactivité est centrale dans l\'exemple de greffe.' },
    ],
    explanation: 'Les exemples du cours montrent que l\'immunité combine réactions effectrices et régulation ; la nature de la cible et le mécanisme dominant orientent l\'interprétation. (Cours, p. 1–3)'
  },
  {
    id: 21,
    type: 'QCM',
    question: 'Quel mécanisme participe à la détection initiale d’un danger par l’immunité innée ?',
    options: [
      { text: 'La formation préalable d’une mémoire antigénique spécifique par les plasmocytes', correct: false, correction: 'Non chef, la détection innée initiale ne suppose pas la formation préalable d’une mémoire adaptative spécifique.' },
      { text: 'La sécrétion d’anticorps par les neutrophiles au sein des tissus', correct: false, correction: 'Non chef, les neutrophiles ne sont pas les cellules productrices d’anticorps ; ils participent autrement à l’immunité innée.' },
      { text: 'La production d’anticorps spécifiques avant tout contact avec le danger', correct: false, correction: 'Non chef, la production d’anticorps spécifiques relève de la réponse adaptative et suit l’activation des lymphocytes B.' },
      { text: 'La reconnaissance de motifs de danger par des récepteurs de reconnaissance des motifs, ou PRR', correct: true, correction: 'Oui boss 🧠 Les PRR permettent une détection précoce de certains motifs microbiens ou de signaux de dommage.' },
      { text: 'Un réarrangement nouveau des gènes des récepteurs T dans chaque macrophage', correct: false, correction: 'Non chef, les macrophages utilisent des récepteurs de l’innée, sans réarrangement de type TCR pour chaque danger.' },
    ],
    explanation: 'Les PRR permettent aux cellules de l’immunité innée de percevoir rapidement des motifs associés aux microbes ou aux dommages tissulaires. (Cours, p. 3 et 5)'
  },
  {
    id: 22,
    type: 'QRM',
    question: 'À propos des PRR, quels énoncés sont exacts ?',
    options: [
      { text: 'La reconnaissance par un PRR peut déclencher une signalisation inflammatoire', correct: true, correction: 'Oui boss, l’activation de ces capteurs peut contribuer à la production de médiateurs de l’inflammation.' },
      { text: 'Les TLR constituent une famille de PRR', correct: true, correction: 'Oui boss 🎯 Les Toll-like receptors sont des exemples classiques de récepteurs de reconnaissance des motifs.' },
      { text: 'Les NLR appartiennent aussi aux familles de récepteurs de l’immunité innée', correct: true, correction: 'Oui boss 🧠 Les NLR sont des capteurs intracellulaires de motifs ou de perturbations associés au danger.' },
      { text: 'Les PRR sont limités aux lymphocytes B qui sécrètent des anticorps', correct: false, correction: 'Non chef, macrophages et cellules dendritiques utilisent notamment ces récepteurs ; ils ne sont pas limités aux LB.' },
      { text: 'Chaque PRR possède la spécificité clonale acquise d’un TCR', correct: false, correction: 'Non chef, les PRR reconnaissent des motifs partagés ; ils ne sont pas des récepteurs antigéniques clonaux comme les TCR.' },
    ],
    explanation: 'Les TLR et les NLR sont des familles de récepteurs impliqués dans la détection innée. Ils diffèrent des récepteurs antigéniques clonaux de l’immunité adaptative. (Cours, p. 2, 3 et 5)'
  },
  {
    id: 23,
    type: 'QCM',
    question: 'À quoi correspond un PAMP dans le cadre de l’immunité innée ?',
    options: [
      { text: 'À une molécule intracellulaire libérée uniquement par une cellule lésée de l’hôte', correct: false, correction: 'Non chef, cette description correspond plutôt à un signal de dommage d’origine endogène, appelé DAMP.' },
      { text: 'À un motif moléculaire associé à un microorganisme et susceptible d’être reconnu par un PRR', correct: true, correction: 'Oui boss 🧠 Un PAMP est un motif d’origine microbienne détectable par certains récepteurs de l’innée.' },
      { text: 'À une immunoglobuline produite par un plasmocyte contre tous les microbes', correct: false, correction: 'Non chef, une immunoglobuline est un effecteur de l’immunité adaptative ; ce n’est pas un motif microbien.' },
      { text: 'À un antigène du soi reconnu exclusivement par un lymphocyte T', correct: false, correction: 'Non chef, cela concerne une reconnaissance adaptative d’un antigène du soi, pas la notion de motif microbien PAMP.' },
      { text: 'À une cytokine inflammatoire produite après activation de l’inflammasome', correct: false, correction: 'Non chef, une cytokine est un médiateur de la réponse ; le PAMP est un motif qui peut contribuer à son déclenchement.' },
    ],
    explanation: 'Un PAMP est un motif moléculaire associé à un microorganisme. Il doit être distingué d’un DAMP, associé à un dommage de l’hôte. (Cours, p. 5)'
  },
  {
    id: 24,
    type: 'QRM',
    question: 'Comment distinguer PAMP et DAMP ?',
    options: [
      { text: 'PAMP et DAMP désignent tous deux des anticorps produits par les plasmocytes', correct: false, correction: 'Non chef, ces termes désignent des motifs de danger, pas des anticorps.' },
      { text: 'Certains PRR peuvent détecter des signaux issus d’un microbe ou de l’hôte lésé', correct: true, correction: 'Oui boss, les capteurs de l’innée ne sont pas restreints à la reconnaissance du non-soi microbien.' },
      { text: 'Une molécule de l’hôte révélée ou libérée par une lésion peut jouer le rôle de DAMP', correct: true, correction: 'Oui boss 🧠 Un dommage cellulaire peut rendre accessibles des signaux endogènes interprétés comme un danger.' },
      { text: 'Tout PAMP est nécessairement une molécule fabriquée par une cellule lésée de l’hôte', correct: false, correction: 'Non chef, cela confond l’origine microbienne des PAMP avec l’origine endogène des DAMP.' },
      { text: 'Un motif microbien, comme un composant bactérien conservé, peut constituer un PAMP', correct: true, correction: 'Oui boss 🎯 L’origine microbienne du motif permet de le classer comme PAMP.' },
    ],
    explanation: 'Les PAMP sont associés aux microbes ; les DAMP proviennent de l’hôte lésé. Ces deux types de signaux peuvent participer à l’activation de récepteurs de l’immunité innée. (Cours, p. 5)'
  },
  {
    id: 25,
    type: 'QCM',
    question: 'Quel exemple correspond à un signal de dommage de type DAMP ?',
    options: [
      { text: 'Un peptide antigénique présenté par le CMH à un lymphocyte T', correct: false, correction: 'Non chef, c’est une étape de la reconnaissance antigénique adaptative et non un DAMP.' },
      { text: 'Un motif conservé de la paroi d’une bactérie', correct: false, correction: 'Non chef, un motif microbien est un exemple de PAMP, pas de DAMP.' },
      { text: 'Un constituant endogène normalement caché, rendu accessible après une lésion cellulaire', correct: true, correction: 'Oui boss 🧠 Une lésion peut exposer des molécules de l’hôte qui deviennent des signaux de danger pour l’immunité innée.' },
      { text: 'Un antigène bactérien reconnu par une immunoglobuline de surface du LB', correct: false, correction: 'Non chef, cette interaction mobilise le récepteur antigénique d’un LB ; elle ne définit pas un signal endogène de dommage.' },
      { text: 'Un anticorps mémorisant un épisode infectieux ancien', correct: false, correction: 'Non chef, un anticorps est un produit de l’immunité adaptative, pas un signal de lésion tissulaire.' },
    ],
    explanation: 'Un DAMP est un motif endogène associé à une lésion ou à un dommage tissulaire, contrairement à un PAMP d’origine microbienne. (Cours, p. 5)'
  },
  {
    id: 26,
    type: 'QRM',
    question: 'Un tissu non infecté subit une lésion et développe une inflammation. Quelles interprétations sont possibles ?',
    options: [
      { text: 'Le signal déclencheur doit obligatoirement être un PAMP bactérien', correct: false, correction: 'Non chef, un danger stérile peut être associé à des DAMP sans PAMP microbien.' },
      { text: 'La détection de signaux de l’hôte lésé n’est pas forcément une reconnaissance d’antigène par un TCR', correct: true, correction: 'Oui boss, un PRR de l’innée peut répondre à un DAMP sans reconnaissance antigénique clonale par un lymphocyte T.' },
      { text: 'Cette situation illustre qu’une inflammation peut être stérile', correct: true, correction: 'Oui boss 🧠 Une inflammation peut survenir sans agent infectieux lorsque des signaux de dommage sont détectés.' },
      { text: 'L’absence de microbe rend impossible toute activation d’un PRR', correct: false, correction: 'Non chef, des signaux de dommage endogènes peuvent aussi activer des voies de l’immunité innée.' },
      { text: 'Des molécules endogènes libérées ou exposées peuvent agir comme des DAMP', correct: true, correction: 'Oui boss 🎯 Le dommage peut révéler des signaux de danger d’origine interne, même sans microorganisme.' },
    ],
    explanation: 'Un dommage tissulaire peut produire des signaux endogènes détectés par l’immunité innée et provoquer une inflammation stérile. (Cours, p. 5)'
  },
  {
    id: 27,
    type: 'QCM',
    question: 'Quelle différence distingue les PRR des récepteurs antigéniques BCR et TCR ?',
    options: [
      { text: 'Les PRR sont produits par réarrangement V(D)J dans chaque macrophage', correct: false, correction: 'Non chef, ce réarrangement crée la diversité clonale des BCR et TCR ; les PRR reconnaissent des motifs partagés.' },
      { text: 'La maturation d’affinité des immunoglobulines est une fonction directe des PRR', correct: false, correction: 'Non chef, cette maturation concerne les lymphocytes B activés et leurs immunoglobulines ; elle n’est pas assurée directement par les PRR.' },
      { text: 'Les PRR, les BCR et les TCR ont tous besoin d’un peptide présenté par le CMH pour détecter leur cible', correct: false, correction: 'Non chef, le TCR reconnaît un antigène présenté par le CMH ; le BCR peut lier un antigène natif et les PRR détectent des motifs de danger.' },
      { text: 'Les PRR détectent des motifs partagés, tandis que BCR et TCR portent la spécificité clonale de l’immunité adaptative', correct: true, correction: 'Oui boss 🧠 C’est la distinction centrale : reconnaissance de motifs par les PRR, reconnaissance antigénique spécifique par les clones B et T.' },
      { text: 'Les BCR et TCR reconnaissent uniquement les motifs communs à plusieurs microbes', correct: false, correction: 'Non chef, BCR et TCR assurent une reconnaissance antigénique clonale, distincte de celle des motifs partagés par les PRR.' },
    ],
    explanation: 'Les PRR de l’innée reconnaissent des motifs communs et sont peu diversifiés ; BCR et TCR donnent aux lymphocytes adaptatifs leur spécificité clonale. (Cours, p. 3 et 5)'
  },
  {
    id: 28,
    type: 'QRM',
    question: 'À propos des Toll-like receptors ou TLR, quelles propositions sont exactes ?',
    options: [
      { text: 'Les TLR sont des récepteurs antigéniques clonaux produits par réarrangement V(D)J', correct: false, correction: 'Non chef, le réarrangement V(D)J caractérise les récepteurs des lymphocytes B et T, pas les TLR.' },
      { text: 'La signalisation de certains TLR peut favoriser la production de cytokines inflammatoires', correct: true, correction: 'Oui boss, la détection d’un signal de danger peut activer des voies de transcription et la production de cytokines.' },
      { text: 'D’autres TLR détectent des motifs dans des compartiments endosomaux', correct: true, correction: 'Oui boss 🧠 Les TLR ne sont pas tous localisés au même endroit ; certains détectent notamment des acides nucléiques après internalisation.' },
      { text: 'Tous les TLR sont obligatoirement exposés à la surface externe de la cellule', correct: false, correction: 'Non chef, certains TLR fonctionnent dans des compartiments intracellulaires, notamment endosomaux.' },
      { text: 'Certains TLR se trouvent à la membrane plasmique', correct: true, correction: 'Oui boss 🎯 Plusieurs TLR peuvent capter des motifs à la surface cellulaire.' },
    ],
    explanation: 'Les TLR sont des PRR membranaires situés, selon le membre de la famille, à la surface cellulaire ou dans des compartiments intracellulaires comme les endosomes. (Cours, p. 2 et 5)'
  },
  {
    id: 29,
    type: 'QCM',
    question: 'Où se situent principalement les récepteurs de la famille NLR qui détectent des signaux intracellulaires ?',
    options: [
      { text: 'Uniquement sur la membrane externe des bactéries', correct: false, correction: 'Non chef, les NLR appartiennent aux cellules de l’hôte et ne sont pas des récepteurs bactériens.' },
      { text: 'Dans le noyau comme récepteurs de l’antigène réarrangés', correct: false, correction: 'Non chef, ils ne sont pas des récepteurs antigéniques issus d’un réarrangement, et leur lieu de détection principal est cytosolique.' },
      { text: 'Dans le cytosol des cellules de l’hôte', correct: true, correction: 'Oui boss 🧠 Les NLR sont des capteurs intracellulaires principalement cytosoliques, distincts des TLR membranaires.' },
      { text: 'Exclusivement dans le plasma sanguin libre', correct: false, correction: 'Non chef, les NLR ne sont pas des anticorps plasmatiques circulants ; ils agissent dans les cellules.' },
      { text: 'À la surface externe des hématies', correct: false, correction: 'Non chef, les NLR ne sont pas des capteurs externes des hématies ; ce sont des protéines de détection intracellulaire.' },
    ],
    explanation: 'Les NLR sont des récepteurs principalement cytosoliques, tandis que les TLR se trouvent selon le type à la surface ou dans des compartiments intracellulaires. (Cours, p. 2)'
  },
  {
    id: 30,
    type: 'QRM',
    question: 'Concernant la signalisation innée par les PRR et l’inflammasome, quelles propositions sont exactes ?',
    options: [
      { text: 'L’activation de l’inflammasome peut permettre la maturation de cytokines comme l’IL-1β', correct: true, correction: 'Oui boss 🧠 L’inflammasome active notamment une voie permettant de produire l’IL-1β mature inflammatoire.' },
      { text: 'Un PRR activé peut contribuer à une cascade de signalisation inflammatoire', correct: true, correction: 'Oui boss, reconnaître un motif de danger peut conduire à l’expression ou à l’activation de médiateurs inflammatoires.' },
      { text: 'Tous les NLR forment nécessairement le même inflammasome après chaque contact avec un microbe', correct: false, correction: 'Non chef, la famille NLR est diverse ; tous ses membres n’ont pas le même mécanisme ni le même rôle.' },
      { text: 'Certains NLR participent à l’assemblage d’un inflammasome intracellulaire', correct: true, correction: 'Oui boss 🎯 NLRP3 est un exemple de capteur associé à un inflammasome cytosolique.' },
      { text: 'L’inflammasome est une immunoglobuline sécrétée par les plasmocytes', correct: false, correction: 'Non chef, c’est un complexe de signalisation intracellulaire de l’immunité innée, pas un anticorps.' },
    ],
    explanation: 'Les PRR peuvent engager différentes voies inflammatoires. Certains NLR, dont NLRP3, participent à la formation d’inflammasomes qui favorisent notamment la maturation de l’IL-1β. (Cours, p. 2)'
  },
  {
    id: 31,
    type: 'QCM',
    question: 'Quelle conséquence directe l’activation d’un inflammasome peut-elle avoir dans une cellule de l’immunité innée ?',
    options: [
      { text: 'La sécrétion d’anticorps par la cellule porteuse de l’inflammasome', correct: false, correction: 'Non chef, les anticorps sont sécrétés par des plasmocytes ; ce n’est pas l’effet direct d’un inflammasome.' },
      { text: 'L’inhibition systématique de toute production de cytokines inflammatoires', correct: false, correction: 'Non chef, l’activation de l’inflammasome peut au contraire favoriser des médiateurs inflammatoires comme l’IL-1β.' },
      { text: 'La maturation de pro-IL-1β en IL-1β active grâce à la caspase-1', correct: true, correction: 'Oui boss 🧠 L’inflammasome active notamment la caspase-1, qui permet la maturation de cette cytokine pro-inflammatoire.' },
      { text: 'Le réarrangement V(D)J des gènes des immunoglobulines dans le macrophage', correct: false, correction: 'Non chef, ce réarrangement appartient à la différenciation des lymphocytes B, pas à l’action de l’inflammasome.' },
      { text: 'La transformation immédiate du PRR en molécule de CMH', correct: false, correction: 'Non chef, les PRR détectent des motifs de danger ; le CMH est un autre système impliqué dans la présentation antigénique.' },
    ],
    explanation: 'L’inflammasome peut activer la caspase-1, qui clive notamment la pro-IL-1β en IL-1β active ; c’est une conséquence de la voie innée évoquée pour la goutte. (Cours, p. 2)'
  },
  {
    id: 32,
    type: 'QRM',
    question: 'À propos des mécanismes immunitaires d’une crise de goutte, quelles propositions sont exactes ?',
    options: [
      { text: 'Toute augmentation d’acide urique sanguin provoque instantanément une crise', correct: false, correction: 'Non chef, l’hyperuricémie ne suffit pas à elle seule à prédire une crise. La formation et l’interaction des cristaux avec les tissus comptent.' },
      { text: 'Les cristaux d’urate peuvent contribuer à l’activation de NLRP3', correct: true, correction: 'Oui boss 🎯 NLRP3 est une voie de l’inflammasome impliquée dans l’inflammation provoquée par les cristaux.' },
      { text: 'L’IL-1β peut participer à l’amplification de la réponse inflammatoire', correct: true, correction: 'Oui boss 🧠 L’activation de l’inflammasome favorise l’IL-1β mature, médiateur important de l’inflammation.' },
      { text: 'La présence de cristaux démontre qu’il existe toujours une mutation héréditaire de NLRP3', correct: false, correction: 'Non chef, la goutte ne requiert pas une mutation de NLRP3. Une voie innée peut être activée dans une maladie acquise.' },
      { text: 'Des neutrophiles peuvent être recrutés dans l’articulation enflammée', correct: true, correction: 'Oui boss, le cours décrit l’arrivée de nombreux polynucléaires neutrophiles au voisinage de l’articulation.' },
    ],
    explanation: 'Les cristaux d’urate peuvent activer la voie NLRP3–IL-1β et favoriser le recrutement des neutrophiles. Cette activation n’exige pas une mutation héréditaire du capteur. (Cours, p. 2)'
  },
  {
    id: 33,
    type: 'QCM',
    question: 'Après la détection d’un motif de danger par un PRR d’un macrophage, quelle réponse peut initier l’inflammation ?',
    options: [
      { text: 'La présentation de l’antigène au lymphocyte T par le PRR lui-même, à la place du CMH', correct: false, correction: 'Non chef, le PRR détecte un motif de danger ; la présentation antigénique aux lymphocytes T utilise le CMH.' },
      { text: 'La sécrétion immédiate d’anticorps spécifiques par ce macrophage', correct: false, correction: 'Non chef, les anticorps sont produits par les plasmocytes issus des lymphocytes B.' },
      { text: 'L’inhibition obligatoire de toutes les cytokines dès la liaison du motif', correct: false, correction: 'Non chef, la reconnaissance d’un danger peut au contraire stimuler la production de cytokines inflammatoires.' },
      { text: 'L’arrêt systématique de la réponse du macrophage tant qu’aucun BCR n’a été activé', correct: false, correction: 'Non chef, la réponse innée peut commencer rapidement avant l’activation des lymphocytes B.' },
      { text: 'L’activation de voies de signalisation qui stimulent la production de cytokines inflammatoires', correct: true, correction: 'Oui boss 🧠 La détection par un PRR peut déclencher une signalisation cellulaire puis la sécrétion de médiateurs de l’inflammation.' },
    ],
    explanation: 'La liaison d’un motif de danger à un PRR peut activer des voies intracellulaires et stimuler la production de cytokines inflammatoires par les phagocytes. (Cours, p. 5)'
  },
  {
    id: 34,
    type: 'QRM',
    question: 'Quels rôles l’immunité innée peut-elle jouer au cours d’une réaction inflammatoire ?',
    options: [
      { text: 'Préparer la réponse adaptative grâce aux cellules présentatrices d’antigène', correct: true, correction: 'Oui boss, les cellules dendritiques peuvent relayer le signal de danger et présenter l’antigène aux lymphocytes T.' },
      { text: 'Détecter rapidement un danger et contribuer au déclenchement de l’inflammation', correct: true, correction: 'Oui boss 🎯 Les cellules innées peuvent reconnaître un danger grâce à leurs PRR et lancer une réponse inflammatoire.' },
      { text: 'Achever la cicatrisation avant que le danger ne soit contrôlé', correct: false, correction: 'Non chef, l’inflammation participe à la suppression du danger ; sa résolution permet ensuite la réparation tissulaire.' },
      { text: 'Cesser toute activité dès que les lymphocytes T deviennent actifs', correct: false, correction: 'Non chef, l’innée et l’adaptative interagissent ; l’activation des lymphocytes ne fait pas disparaître les fonctions innées.' },
      { text: 'Participer à la limitation puis à la résolution de l’inflammation', correct: true, correction: 'Oui boss 🧠 Des cellules et médiateurs de l’innée contribuent aussi à freiner la réaction quand le danger est contrôlé.' },
    ],
    explanation: 'L’immunité innée détecte le danger, initie l’inflammation, prépare la réponse adaptative et contribue ensuite à la résolution et à la réparation. (Cours, p. 3, 5 et 7)'
  },
  {
    id: 35,
    type: 'QCM',
    question: 'Quel mécanisme caractérise principalement une maladie auto-immune classique comme le lupus ?',
    options: [
      { text: 'Une réponse adaptative anormale orientée vers des antigènes du soi', correct: true, correction: 'Oui boss 🧠 L’auto-immunité classique met en jeu une reconnaissance inappropriée du soi par l’immunité adaptative.' },
      { text: 'L’absence définitive de tout rôle des lymphocytes T et B', correct: false, correction: 'Non chef, les lymphocytes de l’adaptatif sont au contraire centraux dans l’exemple auto-immun présenté.' },
      { text: 'Une inflammation impossible sans invasion bactérienne', correct: false, correction: 'Non chef, le lupus n’exige pas d’infection bactérienne pour exprimer sa réponse auto-immune.' },
      { text: 'La reconnaissance exclusive de motifs bactériens par NLRP3, sans antigène du soi', correct: false, correction: 'Non chef, une maladie auto-immune classique implique une réponse inappropriée dirigée contre des composants du soi.' },
      { text: 'La présence obligatoire de cristaux d’urate dans une articulation', correct: false, correction: 'Non chef, les cristaux d’urate caractérisent la goutte, exemple d’inflammation principalement innée.' },
    ],
    explanation: 'Dans le cadre simplifié du cours, l’auto-immunité correspond à une réponse adaptative dirigée contre des antigènes du soi ; le lupus en est un exemple. (Cours, p. 2)'
  },
  {
    id: 36,
    type: 'QRM',
    question: 'À propos de l’auto-immunité, quelles propositions sont exactes ?',
    options: [
      { text: 'Le lupus est présenté comme exemple d’auto-immunité dans le support', correct: true, correction: 'Oui boss, le cours l’utilise pour illustrer la reconnaissance du soi par la réponse adaptative.' },
      { text: 'Une maladie auto-immune interdit toute participation de cellules de l’immunité innée', correct: false, correction: 'Non chef, la prédominance adaptative n’exclut pas la contribution de voies inflammatoires innées.' },
      { text: 'La simple détection d’un auto-anticorps suffit toujours à diagnostiquer une maladie auto-immune', correct: false, correction: 'Non chef, des auto-anticorps peuvent exister sans maladie clinique ; ils doivent être interprétés dans leur contexte.' },
      { text: 'Les lymphocytes B et T peuvent participer à la réponse adaptative auto-immune', correct: true, correction: 'Oui boss 🧠 Ils participent selon la maladie à la reconnaissance, à la coopération et aux mécanismes effecteurs.' },
      { text: 'Une maladie auto-immune peut impliquer des lymphocytes reconnaissant des antigènes du soi', correct: true, correction: 'Oui boss 🎯 Cette reconnaissance inappropriée du soi est un trait majeur de l’auto-immunité classique.' },
    ],
    explanation: 'L’auto-immunité classique fait intervenir une réponse adaptative contre le soi. Un auto-anticorps isolé ne suffit pas à établir une maladie, et l’immunité innée peut contribuer à la physiopathologie. (Cours, p. 2)'
  },
  {
    id: 37,
    type: 'QCM',
    question: 'Quelle affirmation décrit le mieux l’auto-inflammation ?',
    options: [
      { text: 'Elle nécessite toujours une mutation héréditaire d’un gène de l’inflammasome', correct: false, correction: 'Non chef, des maladies monogéniques existent, mais l’auto-inflammation peut aussi être acquise, comme l’illustre la goutte.' },
      { text: 'Elle correspond à une inflammation dont les mécanismes de l’innée sont prédominants, de cause génétique ou acquise', correct: true, correction: 'Oui boss 🧠 La notion décrit une prédominance de la réponse innée, sans imposer une origine monogénique à toutes les situations.' },
      { text: 'Elle désigne exclusivement un déficit de toutes les cellules immunitaires', correct: false, correction: 'Non chef, il s’agit d’une dérégulation inflammatoire, pas nécessairement d’une absence de réponse immunitaire.' },
      { text: 'Elle est définie par des anticorps dirigés contre tous les antigènes du soi', correct: false, correction: 'Non chef, cette formulation confond auto-inflammation, dominée par des voies de l’innée, et auto-immunité adaptative.' },
      { text: 'Elle est impossible sans bactérie vivante présente dans le tissu', correct: false, correction: 'Non chef, une inflammation stérile peut être auto-inflammatoire.' },
    ],
    explanation: 'L’auto-inflammation désigne une dérégulation où les mécanismes innés prédominent. Elle peut être liée à une mutation ou survenir dans des situations acquises telles que la goutte. (Cours, p. 2)'
  },
  {
    id: 38,
    type: 'QRM',
    question: 'Concernant les maladies auto-inflammatoires, quelles propositions sont exactes ?',
    options: [
      { text: 'Les lymphocytes B et T n’interviennent jamais, dans aucune maladie du spectre auto-inflammatoire', correct: false, correction: 'Non chef, la distinction décrit une prédominance. Les mécanismes innés et adaptatifs peuvent se chevaucher selon la maladie.' },
      { text: 'Elles sont toutes exclusivement héréditaires et dues au même gène', correct: false, correction: 'Non chef, plusieurs mécanismes existent ; certaines situations sont acquises et il n’existe pas un gène unique obligatoire.' },
      { text: 'Certaines maladies auto-inflammatoires héréditaires amplifient une réponse inflammatoire initiale', correct: true, correction: 'Oui boss, le cours cite des maladies génétiques où un faible signal initial peut entraîner une réponse excessive.' },
      { text: 'Une dérégulation de l’immunité innée peut en être le moteur principal', correct: true, correction: 'Oui boss 🎯 C’est le contraste central avec les maladies auto-immunes classiques, où prédomine l’adaptatif dirigé contre le soi.' },
      { text: 'La goutte sert d’exemple d’auto-inflammation acquise liée aux cristaux d’urate', correct: true, correction: 'Oui boss 🧠 Les cristaux peuvent déclencher une réponse innée sans qu’une mutation de NLRP3 soit obligatoire.' },
    ],
    explanation: 'Les maladies auto-inflammatoires sont dominées par des dérèglements de l’innée, mais forment un ensemble hétérogène qui comprend des formes génétiques et acquises et peut recouper des mécanismes adaptatifs. (Cours, p. 2)'
  },
  {
    id: 39,
    type: 'QCM',
    question: 'Une personne sans signe clinique reçoit un résultat isolé d’auto-anticorps positif. Que peut-on conclure de ce seul résultat ?',
    options: [
      { text: 'Il confirme que des cristaux d’urate sont présents dans l’articulation', correct: false, correction: 'Non chef, le résultat d’auto-anticorps ne démontre pas la présence de cristaux de goutte.' },
      { text: 'Il impose de classer toute inflammation future comme exclusivement auto-immune', correct: false, correction: 'Non chef, un résultat isolé ne détermine pas la cause de toutes les manifestations futures.' },
      { text: 'Il doit être interprété avec le contexte clinique et d’autres éléments ; il ne suffit pas à diagnostiquer une maladie', correct: true, correction: 'Oui boss 🧠 Des auto-anticorps peuvent être détectés sans maladie ; leur signification dépend du contexte.' },
      { text: 'Il prouve que tous les PRR du patient sont inactifs', correct: false, correction: 'Non chef, la présence d’auto-anticorps n’est pas une mesure du fonctionnement global des PRR.' },
      { text: 'Il démontre nécessairement un lupus actif', correct: false, correction: 'Non chef, un auto-anticorps isolé ne prouve pas un lupus ni même une maladie auto-immune en cours.' },
    ],
    explanation: 'La production d’auto-anticorps n’implique pas nécessairement une maladie auto-immune. L’interprétation diagnostique requiert un contexte clinique et biologique adapté. (Cours, p. 2)'
  },
  {
    id: 40,
    type: 'QRM',
    question: 'Pour comparer auto-immunité et auto-inflammation sans en faire deux catégories hermétiques, quelles propositions sont exactes ?',
    options: [
      { text: 'Si une maladie est dite auto-inflammatoire, toute contribution des lymphocytes devient biologiquement impossible', correct: false, correction: 'Non chef, ces termes indiquent des mécanismes prédominants ; un chevauchement entre inné et adaptatif est possible.' },
      { text: 'Une réponse adaptative contre des antigènes du soi est au premier plan dans une auto-immunité classique', correct: true, correction: 'Oui boss 🎯 C’est le mécanisme mis en avant dans l’exemple du lupus.' },
      { text: 'Une crise de goutte requiert un antigène bactérien articulaire pour être dite auto-inflammatoire', correct: false, correction: 'Non chef, les cristaux d’urate peuvent déclencher une inflammation stérile, sans bactérie articulaire.' },
      { text: 'Les mécanismes innés sont centraux dans l’exemple auto-inflammatoire de la goutte', correct: true, correction: 'Oui boss 🧠 Les cristaux peuvent notamment activer une voie inflammasome et favoriser l’IL-1β.' },
      { text: 'L’inné et l’adaptatif peuvent contribuer tous deux à une maladie inflammatoire, selon les contextes', correct: true, correction: 'Oui boss, les mécanismes ne sont pas cloisonnés ; la distinction aide à repérer le moteur principal sans exclure les interactions.' },
    ],
    explanation: 'L’auto-immunité classique privilégie la reconnaissance adaptative du soi, alors que l’auto-inflammation met au premier plan des mécanismes innés. Les deux peuvent se chevaucher. (Cours, p. 2–3)'
  },
  {
    id: 41,
    type: 'QCM',
    question: 'Quels éléments participent au système immunitaire, au-delà des leucocytes circulants ?',
    options: [
      { text: 'Les seuls lymphocytes présents dans les ganglions, à l\'exclusion des cellules résidentes des tissus.', correct: false, correction: 'Non : des macrophages et d\'autres cellules tissulaires interviennent également.' },
      { text: 'Les seuls leucocytes circulants, car les protéines plasmatiques sont sans rôle immunitaire.', correct: false, correction: 'Non chef : anticorps et autres médiateurs solubles participent aussi aux défenses.' },
      { text: 'Des protéines plasmatiques, ainsi que des cellules et structures présentes dans les tissus.', correct: true, correction: 'Oui boss : anticorps et complément circulent dans le plasma, tandis que cellules résidentes et environnement tissulaire participent à la réponse.' },
      { text: 'Les plasmocytes uniquement, puisqu\'ils représentent à eux seuls toute l\'immunité.', correct: false, correction: 'Non : ils produisent les anticorps, mais l\'immunité mobilise de nombreux autres acteurs.' },
      { text: 'Les seuls dérivés de la moelle osseuse, sans influence de l\'endothélium ni de la matrice tissulaire.', correct: false, correction: 'Non : l\'endothélium et la matrice tissulaire influencent aussi la circulation et l\'organisation des cellules immunitaires.' },
    ],
    explanation: 'Le cours présente des acteurs cellulaires sanguins, plasmatiques et tissulaires ; le tissu sert aussi de cadre aux interactions immunitaires. (Cours, p. 3–4)'
  },
  {
    id: 42,
    type: 'QRM',
    question: 'Parmi les propositions suivantes, lesquelles décrivent correctement les compartiments de l\'immunité ?',
    options: [
      { text: 'Des cellules immunitaires peuvent circuler dans le sang puis gagner les tissus.', correct: true, correction: 'Oui : la circulation permet aux cellules de rejoindre les sites où elles agissent.' },
      { text: 'Le plasma peut contenir des effecteurs solubles, notamment des immunoglobulines.', correct: true, correction: 'Oui boss : les anticorps sécrétés sont des protéines solubles du compartiment humoral.' },
      { text: 'L\'endothélium participe au passage des cellules immunitaires vers les tissus.', correct: true, correction: 'Oui : il constitue une interface importante pour leur recrutement et leur passage.' },
      { text: 'La matrice tissulaire n\'influence jamais l\'organisation des cellules immunitaires.', correct: false, correction: 'Non chef : le collagène et les autres composants de la matrice forment un support tissulaire.' },
      { text: 'Les protéines plasmatiques n\'ont aucun rôle dans une réponse immunitaire.', correct: false, correction: 'Non : des anticorps et d\'autres médiateurs solubles contribuent aux réponses.' },
    ],
    explanation: 'Les acteurs immunitaires se répartissent entre sang, plasma et tissus, dont les structures conditionnent aussi leurs interactions. (Cours, p. 3–4)'
  },
  {
    id: 43,
    type: 'QCM',
    question: 'Quelle association résume le mieux la distinction enseignée entre immunité innée et immunité adaptative ?',
    options: [
      { text: 'L\'innée repose exclusivement sur les LB, tandis que l\'adaptative repose exclusivement sur les polynucléaires.', correct: false, correction: 'Non chef : c\'est l\'inverse pour ces exemples ; LB dans l\'adaptative, polynucléaires dans l\'innée.' },
      { text: 'L\'innée détecte rapidement des signaux de danger ; l\'adaptative mobilise notamment des lymphocytes à récepteurs antigéniques diversifiés.', correct: true, correction: 'Oui boss : les deux coopèrent, mais leurs modes de reconnaissance diffèrent.' },
      { text: 'L\'innée ne participe ni à l\'inflammation ni à la préparation de la réponse adaptative.', correct: false, correction: 'Non : elle contribue aux deux, en particulier via les cellules présentatrices d\'antigène.' },
      { text: 'Les deux branches fonctionnent sans communication cellulaire ou moléculaire.', correct: false, correction: 'Non : présentation antigénique et cytokines les relient en permanence.' },
      { text: 'L\'adaptative ne peut jamais conserver de mémoire d\'une rencontre antigénique.', correct: false, correction: 'Non : la mémoire spécifique est une propriété majeure de l\'immunité adaptative.' },
    ],
    explanation: 'Le cours oppose des mécanismes de détection initiaux et une réponse lymphocytaire spécifique, tout en insistant sur leur coopération. (Cours, p. 3)'
  },
  {
    id: 44,
    type: 'QRM',
    question: 'Quelles cellules le cours rattache-t-il à l\'immunité innée ?',
    options: [
      { text: 'Les cellules dendritiques.', correct: true, correction: 'Oui : elles détectent et capturent des antigènes, puis font le lien avec les LT.' },
      { text: 'Les macrophages.', correct: true, correction: 'Oui : ces phagocytes reconnaissent des signaux de danger et agissent dans les tissus.' },
      { text: 'Les plasmocytes.', correct: false, correction: 'Non chef : ils dérivent des LB et sécrètent les anticorps de la réponse adaptative humorale.' },
      { text: 'Les polynucléaires neutrophiles.', correct: true, correction: 'Oui boss : ils figurent parmi les effecteurs rapides de l\'innée.' },
      { text: 'Les cellules NK.', correct: true, correction: 'Oui : leur classement principal est l\'immunité innée, même si certaines réponses montrent des traits de mémoire.' },
    ],
    explanation: 'Le support cite système monocyte–macrophage, cellules dendritiques, polynucléaires et NK parmi les acteurs de l\'innée. (Cours, p. 3 et 6)'
  },
  {
    id: 45,
    type: 'QCM',
    question: 'Comment classer une cellule NK dans ce cours ?',
    options: [
      { text: 'Comme un LB devenu producteur massif d\'immunoglobulines.', correct: false, correction: 'Non : cela décrit un plasmocyte, pas une NK.' },
      { text: 'Comme un lymphocyte de l\'immunité innée, dont certaines propriétés peuvent évoquer l\'adaptatif.', correct: true, correction: 'Oui boss : « lymphocyte » décrit ici la lignée/morphologie ; NK n\'est pas un LB ou un LT conventionnel.' },
      { text: 'Comme un LT conventionnel portant nécessairement un TCR réarrangé.', correct: false, correction: 'Non chef : la NK n\'est pas définie par le TCR des LT conventionnels.' },
      { text: 'Comme une protéine soluble du complément.', correct: false, correction: 'Non : une NK est bien une cellule.' },
      { text: 'Comme une cellule incapable d\'interagir avec les tissus.', correct: false, correction: 'Non : les NK peuvent agir au sein des tissus, notamment dans des contextes de surveillance cellulaire.' },
    ],
    explanation: 'Le cours souligne les fonctions innées des NK et certaines propriétés dites « adaptatives » sans les confondre avec LB ou LT. (Cours, p. 3 et 6)'
  },
  {
    id: 46,
    type: 'QRM',
    question: 'À propos des cellules NK, quelles propositions sont justes ?',
    options: [
      { text: 'Elles possèdent des récepteurs capables de guider leur réponse.', correct: true, correction: 'Oui : NK ne signifie pas absence de récepteurs ; leur répertoire est différent de celui des TCR et BCR conventionnels.' },
      { text: 'Elles deviennent des plasmocytes dès qu\'elles rencontrent une cellule cible.', correct: false, correction: 'Non chef : la différenciation en plasmocyte concerne la lignée B.' },
      { text: 'Elles participent à la surveillance de certaines cellules tumorales.', correct: true, correction: 'Oui : le cours évoque leur rôle dans la réponse antitumorale.' },
      { text: 'Elles ont des fonctions immunitaires particulières pendant la grossesse.', correct: true, correction: 'Oui boss : des populations NK utérines participent aux interactions materno-fœtales.' },
      { text: 'Leur fonction est obligatoirement identique dans le sang, l\'utérus et tous les autres tissus.', correct: false, correction: 'Non : le contexte et la population NK modifient leurs fonctions.' },
    ],
    explanation: 'Le support mentionne notamment NK, grossesse et surveillance antitumorale ; leurs récepteurs n\'en font pas des LB/LT. (Cours, p. 6)'
  },
  {
    id: 47,
    type: 'QCM',
    question: 'D\'où viennent les précurseurs des LT et où ces cellules accomplissent-elles l\'essentiel de leur maturation initiale ?',
    options: [
      { text: 'Précurseurs issus de la moelle osseuse, puis maturation dans le thymus.', correct: true, correction: 'Oui boss : « lymphocyte T » renvoie au thymus de maturation, pas à une origine exclusivement thymique.' },
      { text: 'Précurseurs issus de la moelle osseuse, puis maturation initiale uniquement dans les ganglions.', correct: false, correction: 'Non : les ganglions accueillent des réponses immunitaires, mais ne remplacent pas le thymus de maturation T.' },
      { text: 'Précurseurs issus du thymus, puis maturation dans la moelle osseuse.', correct: false, correction: 'Non : le trajet est inversé ; les précurseurs proviennent de la moelle.' },
      { text: 'Précurseurs issus de la moelle osseuse, puis maturation dans la rate.', correct: false, correction: 'Non chef : l\'origine médullaire est juste, mais la maturation initiale T se fait surtout dans le thymus.' },
      { text: 'Production et maturation exclusivement thymiques, sans précurseur médullaire.', correct: false, correction: 'Non : le support corrige lui-même ce raccourci ; les précurseurs arrivent de la moelle.' },
    ],
    explanation: 'Les précurseurs des LT sont hématopoïétiques et gagnent le thymus pour leur maturation. (Cours, p. 4)'
  },
  {
    id: 48,
    type: 'QRM',
    question: 'Quelles affirmations sur le parcours des lymphocytes B et T sont exactes ?',
    options: [
      { text: 'Des LB matures peuvent rencontrer leur antigène dans des organes lymphoïdes secondaires.', correct: true, correction: 'Oui : ganglions et rate sont des sites majeurs de rencontre et de réponse.' },
      { text: 'Les précurseurs des LT proviennent de la moelle osseuse.', correct: true, correction: 'Oui : leur maturation thymique vient ensuite.' },
      { text: 'Un LT mature doit obligatoirement naître d\'un plasmocyte.', correct: false, correction: 'Non : les lignées T et plasmocytaire B ont des parcours distincts.' },
      { text: 'Les LB acquièrent leur récepteur antigénique initial pendant leur développement dans la moelle.', correct: true, correction: 'Oui boss : le réarrangement initial des gènes d\'immunoglobuline précède l\'activation par l\'antigène.' },
      { text: 'Tout réarrangement initial du BCR commence seulement après l\'entrée du LB dans un ganglion.', correct: false, correction: 'Non chef : le premier répertoire BCR se forme avant, dans la moelle ; les centres germinatifs apportent ensuite d\'autres modifications.' },
    ],
    explanation: 'Le cours distingue origine médullaire des précurseurs, maturation thymique T et rencontre antigénique dans les organes lymphoïdes secondaires. (Cours, p. 4)'
  },
  {
    id: 49,
    type: 'QCM',
    question: 'Que reconnaît en général le TCR d\'un LT αβ conventionnel ?',
    options: [
      { text: 'Un peptide antigénique présenté par une molécule du CMH.', correct: true, correction: 'Oui boss : le TCR conventionnel lit l\'ensemble peptide–CMH à la surface d\'une cellule.' },
      { text: 'N\'importe quel PAMP grâce à un TLR identique au TCR.', correct: false, correction: 'Non : TLR et TCR sont deux familles de récepteurs aux logiques différentes.' },
      { text: 'Uniquement un antigène soluble intact, sans cellule présentatrice ni CMH.', correct: false, correction: 'Non chef : cette reconnaissance directe d\'une forme native évoque plutôt le BCR ou un anticorps.' },
      { text: 'Un anticorps libre produit par son propre plasmocyte.', correct: false, correction: 'Non : le TCR n\'est pas défini par la reconnaissance d\'un anticorps sécrété.' },
      { text: 'Seulement une protéine du complément, sans antigène associé.', correct: false, correction: 'Non : ce n\'est pas le principe de reconnaissance du TCR αβ conventionnel.' },
    ],
    explanation: 'Le support décrit la reconnaissance par le TCR de petits peptides antigéniques présentés par le CMH. (Cours, p. 7)'
  },
  {
    id: 50,
    type: 'QRM',
    question: 'Quelles associations entre récepteurs et reconnaissance antigénique sont correctes ?',
    options: [
      { text: 'Le TCR d\'un LT αβ conventionnel reconnaît habituellement un peptide associé au CMH.', correct: true, correction: 'Oui boss : c\'est la règle de présentation décrite dans le cours.' },
      { text: 'Un LT CD4 conventionnel peut reconnaître un peptide présenté par le CMH de classe II.', correct: true, correction: 'Oui : la coopération B–T décrite repose sur cette présentation aux LT CD4.' },
      { text: 'Le BCR est une immunoglobuline membranaire pouvant lier directement un antigène sous forme native.', correct: true, correction: 'Oui : le LB n\'a pas besoin d\'un peptide présenté par le CMH pour cette première liaison.' },
      { text: 'Un TLR constitue l\'immunoglobuline membranaire propre à chaque clone B.', correct: false, correction: 'Non chef : le TLR est un récepteur de reconnaissance de motifs ; l\'immunoglobuline membranaire est le BCR.' },
      { text: 'Les anticorps sécrétés et le TCR conventionnel reconnaissent toujours l\'antigène par exactement le même mécanisme.', correct: false, correction: 'Non : l\'anticorps peut lier une structure native, tandis que le TCR conventionnel reconnaît surtout le complexe peptide–CMH.' },
    ],
    explanation: 'BCR et TCR n\'accèdent pas à l\'antigène de la même manière ; un LB peut ensuite présenter un peptide par CMH II à un LT CD4. (Cours, p. 5 et 7)'
  },
  {
    id: 51,
    type: 'QCM',
    question: 'Quelle cellule est particulièrement efficace pour amorcer la réponse d\'un LT naïf après avoir capturé un antigène ?',
    options: [
      { text: 'Un plasmocyte, grâce à sa forte sécrétion d\'anticorps.', correct: false, correction: 'Non : produire des anticorps ne le rend pas spécialisé dans l\'activation initiale des LT naïfs.' },
      { text: 'Un polynucléaire neutrophile, grâce à ses granules toxiques.', correct: false, correction: 'Non : ses granules participent surtout à l\'action effectrice innée, pas à cet amorçage T.' },
      { text: 'Un macrophage tissulaire, dans tous les contextes de primoinfection.', correct: false, correction: 'Non chef : il peut présenter l\'antigène, mais la dendritique mature est particulièrement efficace pour amorcer un LT naïf.' },
      { text: 'Un LB ayant capturé l\'antigène par son BCR, dans tous les contextes.', correct: false, correction: 'Non : le LB est bien une CPA, mais la cellule dendritique est la référence pour amorcer les LT naïfs.' },
      { text: 'Une cellule dendritique mature.', correct: true, correction: 'Oui boss : elle relie détection innée, présentation antigénique et activation des LT naïfs.' },
    ],
    explanation: 'Les cellules dendritiques sont des CPA particulièrement adaptées à l\'activation initiale des LT naïfs. (Cours, p. 6–7)'
  },
  {
    id: 52,
    type: 'QRM',
    question: 'À propos des cellules présentatrices d\'antigène (CPA), quelles propositions sont justes ?',
    options: [
      { text: 'Seules les cellules dendritiques présentent des antigènes dans tout l\'organisme.', correct: false, correction: 'Non chef : macrophages et LB figurent aussi parmi les CPA professionnelles.' },
      { text: 'Présenter un antigène signifie sécréter un anticorps soluble à la place du CMH.', correct: false, correction: 'Non : pour les LT conventionnels, la présentation concerne notamment le peptide associé au CMH.' },
      { text: 'Les macrophages peuvent également présenter des antigènes.', correct: true, correction: 'Oui boss : le cours les cite parmi les CPA.' },
      { text: 'Les LB peuvent présenter à des LT CD4 des peptides provenant d\'un antigène capturé.', correct: true, correction: 'Oui : ils participent ainsi à la coopération B–T.' },
      { text: 'Les cellules dendritiques peuvent capturer un antigène puis le présenter aux LT.', correct: true, correction: 'Oui : c\'est une fonction centrale de leur rôle de passerelle entre innée et adaptative.' },
    ],
    explanation: 'Le cours cite cellules dendritiques, LB et macrophages comme CPA, avec un rôle particulièrement important des dendritiques pour l\'amorçage des LT. (Cours, p. 4 et 7)'
  },
  {
    id: 53,
    type: 'QCM',
    question: 'Dans une réponse B dépendante des LT, comment un LB peut-il solliciter l\'aide d\'un LT CD4 ?',
    options: [
      { text: 'Il transforme directement son BCR en TCR pour reconnaître le LT.', correct: false, correction: 'Non chef : BCR et TCR appartiennent à des cellules et des programmes distincts.' },
      { text: 'Il présente un anticorps soluble à la place de tout peptide et de toute molécule du CMH.', correct: false, correction: 'Non : l\'aide du LT CD4 repose notamment sur la présentation peptide–CMH II.' },
      { text: 'Il doit attendre que le LT sécrète lui-même des immunoglobulines.', correct: false, correction: 'Non : les immunoglobulines sont produites par la lignée B, surtout ses plasmocytes.' },
      { text: 'Il devient d\'abord un polynucléaire neutrophile chargé de phagocyter le LT.', correct: false, correction: 'Non : la coopération B–T ne passe pas par un changement de lignée en PNN.' },
      { text: 'Il capte l\'antigène via son BCR puis présente un peptide par le CMH II au LT CD4.', correct: true, correction: 'Oui boss : le LB est aussi une CPA ; la rencontre BCR–antigène prépare la présentation au LT.' },
    ],
    explanation: 'Après capture par le BCR, le LB peut présenter l\'antigène traité via le CMH II et recevoir l\'aide du LT CD4. (Cours, p. 7)'
  },
  {
    id: 54,
    type: 'QRM',
    question: 'Concernant la coopération entre CPA, LT et LB, quelles affirmations sont exactes ?',
    options: [
      { text: 'Des LT CD4 activés peuvent apporter de l\'aide aux LB lors d\'une réponse dépendante des LT.', correct: true, correction: 'Oui boss : leur interaction et leurs cytokines soutiennent la réponse B.' },
      { text: 'Toute activation d\'un LB exige obligatoirement une cellule dendritique activée juste avant lui.', correct: false, correction: 'Non chef : c\'est trop absolu ; l\'aide T est déterminante pour de nombreuses réponses, mais il existe des voies T-indépendantes.' },
      { text: 'Une cellule dendritique peut amorcer l\'activation d\'un LT naïf.', correct: true, correction: 'Oui : elle assure souvent le départ d\'une réponse T primaire.' },
      { text: 'Certaines réponses B à des antigènes particuliers peuvent survenir sans aide T classique.', correct: true, correction: 'Oui : les réponses dites T-indépendantes empêchent de dire « jamais d\'anticorps sans LT ».' },
      { text: 'Une CPA remplace le TCR du LT par un BCR pour lui transmettre l\'information.', correct: false, correction: 'Non : chaque cellule conserve ses récepteurs ; la CPA présente surtout peptide–CMH au TCR conventionnel.' },
    ],
    explanation: 'La présentation par CPA et l\'aide CD4 organisent les réponses dépendantes des LT ; elles ne permettent pas de déclarer impossibles toutes les réponses B sans aide T. (Cours, p. 4 et 6–7)'
  },
  {
    id: 55,
    type: 'QCM',
    question: 'Quelle cellule de la lignée B est spécialisée dans la sécrétion abondante d\'anticorps ?',
    options: [
      { text: 'Le LB naïf qui n\'a pas encore rencontré d\'antigène.', correct: false, correction: 'Non : il porte un BCR, mais la sécrétion abondante apparaît surtout après différenciation plasmocytaire.' },
      { text: 'Le macrophage ayant phagocyté un antigène.', correct: false, correction: 'Non : il peut présenter des antigènes et sécréter des médiateurs, mais pas des anticorps.' },
      { text: 'Le plasmocyte.', correct: true, correction: 'Oui boss : c\'est le descendant B différencié en cellule sécrétrice d\'immunoglobulines.' },
      { text: 'Le LT CD4 auxiliaire après activation.', correct: false, correction: 'Non chef : il aide d\'autres cellules, mais ne sécrète pas lui-même les immunoglobulines.' },
      { text: 'La cellule dendritique mature après présentation antigénique.', correct: false, correction: 'Non : sa spécialité est surtout l\'amorçage de réponses T, pas la sécrétion massive d\'anticorps.' },
    ],
    explanation: 'Les anticorps sécrétés proviennent principalement des plasmocytes différenciés à partir des LB. (Cours, p. 4 et 7)'
  },
  {
    id: 56,
    type: 'QRM',
    question: 'Quelles propositions distinguent correctement LB, BCR, plasmocytes et anticorps ?',
    options: [
      { text: 'Le BCR est une molécule du CMH II produite par un LT CD8.', correct: false, correction: 'Non chef : le BCR appartient au LB et correspond à une immunoglobuline membranaire.' },
      { text: 'Des anticorps sécrétés peuvent circuler comme effecteurs solubles.', correct: true, correction: 'Oui : ils contribuent à l\'immunité humorale.' },
      { text: 'Un LB ne peut jamais présenter un antigène à un LT CD4.', correct: false, correction: 'Non : il peut au contraire jouer le rôle de CPA après capture de l\'antigène.' },
      { text: 'Le BCR est une immunoglobuline portée à la membrane du LB.', correct: true, correction: 'Oui : il sert à reconnaître directement l\'antigène.' },
      { text: 'Le plasmocyte dérive d\'un LB activé et sécrète beaucoup d\'immunoglobulines.', correct: true, correction: 'Oui boss : c\'est sa spécialisation effectrice majeure.' },
    ],
    explanation: 'Le cours relie BCR membranaire, présentation par le LB et production d\'anticorps par le plasmocyte. (Cours, p. 4 et 7)'
  },
  {
    id: 57,
    type: 'QCM',
    question: 'Quel rôle effecteur caractérise surtout les LT CD8 activés dans ce cours ?',
    options: [
      { text: 'La régulation principale de la tolérance par tous les LT CD8 indistinctement.', correct: false, correction: 'Non : la fonction régulatrice est associée à des sous-populations spécialisées, pas à tous les CD8.' },
      { text: 'La capture initiale de l\'antigène pour amorcer les LT naïfs, comme fonction caractéristique.', correct: false, correction: 'Non : l\'amorçage des LT naïfs est surtout une fonction des cellules dendritiques.' },
      { text: 'La destruction ciblée de cellules reconnues, notamment par des mécanismes cytotoxiques.', correct: true, correction: 'Oui boss : les LT CD8 effecteurs peuvent tuer des cellules cibles.' },
      { text: 'L\'aide aux LB par les cytokines, rôle attribué surtout aux LT CD4 auxiliaires.', correct: false, correction: 'Non chef : les LT CD8 ont surtout ici une fonction cytotoxique ; l\'aide B est surtout associée aux CD4.' },
      { text: 'La sécrétion abondante d\'anticorps après différenciation plasmocytaire.', correct: false, correction: 'Non : ce parcours concerne la lignée B, pas le LT CD8.' },
    ],
    explanation: 'Le cours associe les LT CD8 activés à la cytotoxicité, notamment par leurs granules effecteurs. (Cours, p. 4 et 7)'
  },
  {
    id: 58,
    type: 'QRM',
    question: 'Quelles propositions sur les sous-populations de LT sont exactes ?',
    options: [
      { text: 'Les LT régulateurs participent au contrôle de la réponse et à la tolérance.', correct: true, correction: 'Oui : leur fonction contribue à limiter des réactions inappropriées.' },
      { text: 'Les LT CD8 activés peuvent exercer une cytotoxicité contre des cellules cibles.', correct: true, correction: 'Oui boss : ils ne sont pas des plasmocytes sécréteurs d\'anticorps.' },
      { text: 'Tous les LT CD4 sont des plasmocytes lorsqu\'ils rencontrent un antigène.', correct: false, correction: 'Non chef : les plasmocytes appartiennent à la lignée B.' },
      { text: 'Les LT CD8 expriment un BCR à la place de tout TCR.', correct: false, correction: 'Non : les LT conventionnels utilisent un TCR ; le BCR caractérise les LB.' },
      { text: 'Les LT CD4 peuvent coordonner et soutenir d\'autres cellules de la réponse immunitaire.', correct: true, correction: 'Oui : ils apportent notamment une aide aux LB dans de nombreuses réponses.' },
    ],
    explanation: 'Le support distingue l\'aide CD4, la cytotoxicité CD8 et la régulation par certains LT. (Cours, p. 4 et 7)'
  },
  {
    id: 59,
    type: 'QCM',
    question: 'Quelle est la contribution principale des LT régulateurs (Treg) évoquée dans le cours ?',
    options: [
      { text: 'Empêcher de façon absolue toute reconnaissance d\'un antigène du soi.', correct: false, correction: 'Non : la tolérance implique plusieurs mécanismes et ne signifie pas absence totale de reconnaissance du soi.' },
      { text: 'Produire directement l\'essentiel des anticorps sériques.', correct: false, correction: 'Non : cette sécrétion est la spécialité des plasmocytes B.' },
      { text: 'Participer à la tolérance et modérer des réponses immunitaires excessives.', correct: true, correction: 'Oui boss : ils sont un élément actif du contrôle immunitaire.' },
      { text: 'Présenter seuls tous les antigènes aux LT naïfs à la place des cellules dendritiques.', correct: false, correction: 'Non : les Treg ne sont pas la CPA principale d\'amorçage.' },
      { text: 'Déclencher systématiquement la cytotoxicité de tous les LT CD8 rencontrés.', correct: false, correction: 'Non chef : les Treg freinent certaines réponses, ils ne servent pas à activer indistinctement les CD8.' },
    ],
    explanation: 'Les LT régulateurs contribuent à la tolérance ; le cours insiste sur une immunité autoréactive qui doit être contrôlée activement. (Cours, p. 1 et 4)'
  },
  {
    id: 60,
    type: 'QRM',
    question: 'À propos des LT régulateurs et de la tolérance immunitaire, quelles affirmations sont justes ?',
    options: [
      { text: 'Des LT régulateurs participent à éviter des réponses excessives contre le soi.', correct: true, correction: 'Oui : leur activité fait partie des mécanismes de tolérance.' },
      { text: 'La tolérance exige que le système immunitaire ne reconnaisse jamais aucun constituant du soi.', correct: false, correction: 'Non chef : reconnaître et contrôler une réponse sont deux choses différentes.' },
      { text: 'Une partie des Treg se développe dans le thymus.', correct: true, correction: 'Oui boss : le thymus contribue à la production de Treg.' },
      { text: 'Des Treg peuvent aussi être induits en périphérie dans certaines conditions.', correct: true, correction: 'Oui : le thymus n\'est pas l\'unique voie possible de différenciation régulatrice.' },
      { text: 'Tous les LT activés deviennent automatiquement des Treg permanents.', correct: false, correction: 'Non : activation et différenciation régulatrice ne sont pas synonymes.' },
    ],
    explanation: 'Le support attribue au thymus une part de la formation des Treg, mais la tolérance repose sur plusieurs mécanismes et des Treg peuvent aussi être induits hors thymus. (Cours, p. 1 et 4)'
  },
  {
    id: 61,
    type: 'QCM',
    question: 'Que signifie principalement la mémoire de l\'immunité adaptative ?',
    options: [
      { text: 'Un LT mémoire doit perdre son TCR et devenir un plasmocyte.', correct: false, correction: 'Non : la mémoire T ne transforme pas le LT en cellule B.' },
      { text: 'Chaque réponse secondaire doit attendre exactement vingt ans avant de débuter.', correct: false, correction: 'Non chef : il n\'existe pas un délai fixe de vingt ans.' },
      { text: 'Toute mémoire immunitaire disparaît obligatoirement après dix à vingt ans.', correct: false, correction: 'Non : cette limite du support est trop générale ; la durée dépend de l\'antigène et du contexte.' },
      { text: 'La mémoire spécifique est uniquement assurée par les globules rouges.', correct: false, correction: 'Non : elle implique surtout des populations lymphocytaires.' },
      { text: 'Une rencontre antérieure peut modifier la réponse spécifique lors d\'une nouvelle exposition au même antigène.', correct: true, correction: 'Oui boss : des cellules mémoire permettent une réponse secondaire différente, souvent plus rapide.' },
    ],
    explanation: 'La mémoire spécifique est une propriété majeure de l\'adaptatif ; sa durée ne se réduit pas à une limite universelle de dix à vingt ans. (Cours, p. 3)'
  },
  {
    id: 62,
    type: 'QRM',
    question: 'À propos de la mémoire adaptative, quelles propositions sont exactes ?',
    options: [
      { text: 'Des lymphocytes B mémoire peuvent participer à une réponse après une nouvelle exposition.', correct: true, correction: 'Oui : ils conservent une expérience antigénique au sein de la lignée B.' },
      { text: 'Une cellule mémoire reconnaît nécessairement tous les antigènes avec la même spécificité.', correct: false, correction: 'Non chef : la mémoire adaptative conserve une spécificité antigénique.' },
      { text: 'Les NK possédant parfois des traits de mémoire deviennent nécessairement des LT à TCR réarrangé.', correct: false, correction: 'Non : des propriétés de type mémoire chez certaines NK ne changent pas leur identité cellulaire.' },
      { text: 'La réponse secondaire peut être plus rapide ou plus efficace que la réponse primaire.', correct: true, correction: 'Oui : c\'est l\'intérêt fonctionnel de la mémoire spécifique.' },
      { text: 'Des lymphocytes T mémoire peuvent également persister après une réponse.', correct: true, correction: 'Oui boss : la mémoire adaptative ne se limite pas aux anticorps.' },
    ],
    explanation: 'Le cours relie récepteurs spécifiques et mémoire lymphocytaire ; des propriétés « adaptatives » de NK n\'en font pas des LT. (Cours, p. 3 et 6)'
  },
  {
    id: 63,
    type: 'QCM',
    question: 'Lors d\'une réponse humorale, à quoi correspond la maturation d\'affinité ?',
    options: [
      { text: 'À la sélection de clones B dont les immunoglobulines lient mieux l\'antigène au fil de la réponse.', correct: true, correction: 'Oui boss : mutations somatiques et sélection peuvent enrichir les LB à meilleure affinité.' },
      { text: 'À la simple hausse du nombre d\'anticorps sécrétés, même si chacun garde la même affinité.', correct: false, correction: 'Non : quantité d\'anticorps et affinité de liaison sont deux propriétés distinctes.' },
      { text: 'À la commutation de classe de l\'anticorps, qui rend obligatoirement sa région variable plus affine.', correct: false, correction: 'Non : la commutation change surtout la région constante ; elle n\'impose pas à elle seule une meilleure affinité.' },
      { text: 'Au réarrangement initial des gènes du BCR dans la moelle avant toute rencontre antigénique.', correct: false, correction: 'Non : ce réarrangement crée le répertoire initial ; la maturation d\'affinité vient après activation et sélection.' },
      { text: 'À une augmentation obligatoire et identique de cent fois de l\'affinité de chaque anticorps.', correct: false, correction: 'Non chef : l\'amélioration n\'a pas un facteur fixe applicable à tous les clones.' },
    ],
    explanation: 'La maturation d\'affinité concerne les LB et leurs immunoglobulines, sans gain universel chiffré pour chaque anticorps. (Cours, p. 3 et 7)'
  },
  {
    id: 64,
    type: 'QRM',
    question: 'Quelles affirmations sur la maturation d\'affinité des anticorps sont correctes ?',
    options: [
      { text: 'La maturation d\'affinité repose normalement sur l\'hypermutation somatique du TCR des LT conventionnels.', correct: false, correction: 'Non : l\'hypermutation somatique concerne les gènes d\'immunoglobuline des LB, pas le TCR conventionnel.' },
      { text: 'L\'affinité de chaque anticorps doit exactement être multipliée par dix à cent.', correct: false, correction: 'Non chef : le chiffre donné dans le support n\'est pas une loi pour chaque clone ou chaque réponse.' },
      { text: 'La sélection peut favoriser des clones B liant mieux l\'antigène.', correct: true, correction: 'Oui : l\'affinité moyenne de la réponse humorale peut ainsi augmenter.' },
      { text: 'Elle concerne les réponses de la lignée B et les immunoglobulines produites.', correct: true, correction: 'Oui : ce n\'est pas une propriété générale de tous les récepteurs immunitaires.' },
      { text: 'Elle peut impliquer des mutations somatiques des gènes d\'immunoglobuline après activation B.', correct: true, correction: 'Oui boss : ces changements génèrent des variantes ensuite soumises à sélection.' },
    ],
    explanation: 'Dans la réponse B, hypermutation somatique et sélection contribuent à une meilleure affinité des immunoglobulines ; aucun facteur de gain fixe ne s\'applique à toutes les réponses. (Cours, p. 3–4 et 7)'
  },
  {
    id: 65,
    type: 'QCM',
    question: 'Quel changement de surface d’une cellule apoptotique peut servir de signal « mange-moi » aux phagocytes ?',
    options: [
      { text: 'Le maintien strict de la phosphatidylsérine sur le feuillet interne de sa membrane', correct: false, correction: 'Non chef, c’est son exposition vers l’extérieur qui favorise la reconnaissance par les phagocytes.' },
      { text: 'L’augmentation d’un signal inhibiteur de phagocytose à sa surface', correct: false, correction: 'Faux, un signal qui freine la phagocytose ne constitue pas un signal « mange-moi ».' },
      { text: 'L’apparition obligatoire de PAMP microbiens sur toute cellule apoptotique', correct: false, correction: 'Non, l’apoptose physiologique existe sans infection et ne nécessite pas de motif microbien.' },
      { text: 'L’exposition de phosphatidylsérine sur la face externe de sa membrane', correct: true, correction: 'Oui boss 🧠 Cette exposition aide les phagocytes à reconnaître la cellule mourante et à l’éliminer.' },
      { text: 'L’expression d’un signal « mange-moi » uniquement sur le macrophage, et non sur la cellule mourante', correct: false, correction: 'Non chef, le support inverse les acteurs : le signal à reconnaître est porté notamment par la cellule apoptotique.' },
    ],
    explanation: 'La cellule apoptotique expose des signaux de reconnaissance, dont la phosphatidylsérine, et le phagocyte possède des mécanismes pour les détecter. Le signal n’est pas exclusivement émis à la surface du phagocyte. (Cours, p. 1, 5, 7 ; localisation précisée)'
  },
  {
    id: 66,
    type: 'QRM',
    question: 'Concernant l’efférocytose, quelles propositions sont exactes ?',
    options: [
      { text: 'Dans des conditions physiologiques, elle favorise souvent une réponse peu inflammatoire et la résolution', correct: true, correction: 'Oui boss 🧠 L’ingestion de cellules apoptotiques peut contribuer à des signaux de régulation, dont le TGF-β.' },
      { text: 'Elle est réservée aux bactéries et ne concerne jamais les cellules du soi', correct: false, correction: 'Faux, l’efférocytose porte précisément sur des cellules mortes de l’organisme.' },
      { text: 'Des macrophages peuvent y participer', correct: true, correction: 'Exact, ils éliminent notamment des cellules apoptotiques dans les tissus et le thymus.' },
      { text: 'Elle exige toujours que la cellule mourante se rompe et déverse son contenu', correct: false, correction: 'Non chef, la capture avant rupture limite justement la diffusion de composants susceptibles d’entretenir l’inflammation.' },
      { text: 'Elle correspond à l’élimination de cellules apoptotiques par des phagocytes', correct: true, correction: 'Oui boss 🎯 Ce nettoyage spécialisé retire les cellules mortes avant qu’elles ne s’accumulent.' },
    ],
    explanation: 'L’efférocytose retire les cellules apoptotiques et participe à l’homéostasie tissulaire. Dans le contexte physiologique du cours, elle évite une réponse inflammatoire excessive. (Cours, p. 1, 5–7 ; terme précisé)'
  },
  {
    id: 67,
    type: 'QCM',
    question: 'Pourquoi une nécrose tissulaire peut-elle déclencher une inflammation sans qu’aucun microbe ne soit présent ?',
    options: [
      { text: 'Une inflammation nécessite toujours la présence préalable d’un PAMP microbien', correct: false, correction: 'Non chef, des DAMP endogènes peuvent déclencher une inflammation stérile.' },
      { text: 'Des composants endogènes libérés ou exposés par les cellules lésées peuvent agir comme DAMP et activer des PRR', correct: true, correction: 'Oui boss 🧠 Le danger peut être interne : les PRR ne servent pas seulement à détecter des motifs microbiens.' },
      { text: 'Les molécules intracellulaires libérées ne peuvent jamais être détectées par l’immunité innée', correct: false, correction: 'Faux, certains composants rendus accessibles lors d’une lésion peuvent agir comme signaux de danger.' },
      { text: 'Toute cellule nécrosée induit forcément une tolérance silencieuse identique à l’apoptose physiologique', correct: false, correction: 'Non chef, la perte d’intégrité et les signaux de dommage rendent une réponse inflammatoire possible.' },
      { text: 'Seul un TCR spécifique d’un peptide microbien peut reconnaître ces signaux de lésion', correct: false, correction: 'Non, les PRR de l’innée peuvent répondre à certains DAMP sans reconnaissance antigénique par un TCR.' },
    ],
    explanation: 'Dans le modèle du cours, la nécrose libère des composants endogènes qui peuvent devenir des signaux de danger reconnus par l’immunité innée. Cette inflammation peut être stérile. (Cours, p. 2, 5, 7)'
  },
  {
    id: 68,
    type: 'QRM',
    question: 'Quelles comparaisons entre modes de mort cellulaire sont exactes ?',
    options: [
      { text: 'L’apoptose est une mort régulée dont l’élimination rapide est souvent peu inflammatoire', correct: true, correction: 'Oui boss, l’intégrité de la membrane est mieux préservée pendant la phase de capture physiologique.' },
      { text: 'La nécroptose est une mort régulée présentant un phénotype nécrotique', correct: true, correction: 'Exact. Elle est distincte de l’apoptose et d’une nécrose accidentelle, même si la membrane finit par perdre son intégrité.' },
      { text: 'La nécrose avec rupture membranaire peut exposer des DAMP et entretenir l’inflammation', correct: true, correction: 'Exact 🧠 La perte d’intégrité permet à des composants internes d’atteindre le milieu extracellulaire.' },
      { text: 'La pyroptose est une mort cellulaire inflammatoire pouvant être liée à l’activation de l’inflammasome', correct: true, correction: 'Oui, c’est la distinction utile du support ; elle ne se résume pas à une simple apoptose silencieuse.' },
      { text: 'La nécroptose est, par définition, toujours une lésion accidentelle sans voie de signalisation', correct: false, correction: 'Non chef, elle est régulée : son nom ne doit pas être lu comme un simple synonyme de nécrose accidentelle.' },
    ],
    explanation: 'Le support juxtapose apoptose, nécrose, pyroptose et nécroptose. Pyroptose et nécroptose appartiennent à des morts régulées inflammatoires, avec des mécanismes distincts. (Cours, p. 7 ; distinction nécroptose précisée)'
  },
  {
    id: 69,
    type: 'QCM',
    question: 'Pourquoi le thymus peut-il connaître une importante élimination de thymocytes sans inflammation massive permanente ?',
    options: [
      { text: 'Les thymocytes ne peuvent jamais mourir dans le thymus', correct: false, correction: 'Faux, une grande partie des thymocytes en développement est éliminée pendant les processus de sélection.' },
      { text: 'Toute mort cellulaire entraîne obligatoirement une forte inflammation, même après efférocytose', correct: false, correction: 'Non chef, une élimination rapide des cellules apoptotiques peut être peu inflammatoire.' },
      { text: 'Le thymus ne contient aucun phagocyte', correct: false, correction: 'Non chef, des phagocytes y prennent en charge les cellules mourantes.' },
      { text: 'Les cellules apoptotiques y sont normalement reconnues et éliminées efficacement par des phagocytes', correct: true, correction: 'Oui boss 🎯 Le nombre de cellules éliminées ne détermine pas seul une inflammation ; leur mode de mort et leur nettoyage comptent.' },
      { text: 'Toutes les cellules thymiques meurent par rupture traumatique et restent sans nettoyage', correct: false, correction: 'Non, l’apoptose et sa clairance sont justement importantes dans cet organe.' },
    ],
    explanation: 'Le cours souligne le contraste entre la fréquence de l’apoptose thymique et l’absence d’inflammation majeure habituelle. Une clairance efficace contribue à cette situation. (Cours, p. 1, 7)'
  },
  {
    id: 70,
    type: 'QRM',
    question: 'Comment interpréter les étiquettes macrophagiques « M1 » et « M2 » utilisées dans le cours ?',
    options: [
      { text: 'Des macrophages peuvent contribuer à la résolution et à la réparation tissulaire', correct: true, correction: 'Oui boss, leur activité ne se limite pas à l’attaque ; la clairance et la réparation font aussi partie du cours.' },
      { text: 'Un macrophage ne peut jamais modifier son programme fonctionnel selon le contexte', correct: false, correction: 'Faux, la polarisation dépend des signaux rencontrés et ne doit pas être comprise comme un destin immuable.' },
      { text: 'Elles constituent deux espèces cellulaires fixes et exclusives, sans états intermédiaires', correct: false, correction: 'Non chef, les macrophages sont plastiques ; deux étiquettes ne décrivent pas toute leur diversité.' },
      { text: 'Elles servent de repères pédagogiques pour des programmes plutôt pro-inflammatoires ou plutôt réparateurs', correct: true, correction: 'Oui boss 🧠 Le cours utilise ce contraste fonctionnel pour suivre les phases de la réponse.' },
      { text: 'Des macrophages peuvent contribuer au déclenchement d’une inflammation', correct: true, correction: 'Exact, ils peuvent détecter des signaux de danger et produire des médiateurs inflammatoires.' },
    ],
    explanation: 'Le raccourci M1/M2 oppose des fonctions dominantes mais ne représente pas deux catégories rigides couvrant tous les états macrophagiques. Les macrophages participent à l’initiation, au contrôle et à la résolution de l’inflammation. (Cours, p. 5, 7 ; modèle simplifié)'
  },
  {
    id: 71,
    type: 'QCM',
    question: 'Quel mode de mort cellulaire le support relie particulièrement à l’inflammasome et à une réponse inflammatoire ?',
    options: [
      { text: 'La pyroptose', correct: true, correction: 'Oui boss 🧠 Elle est associée à une voie inflammatoire et à une perte de l’intégrité membranaire.' },
      { text: 'L’apoptose physiologique immédiatement efférocytée', correct: false, correction: 'Non chef, celle-ci est généralement éliminée sans la même réponse inflammatoire.' },
      { text: 'La nécroptose régulée avec activation de la voie RIPK3–MLKL', correct: false, correction: 'Non chef, sa voie caractéristique est distincte de celle qui définit la pyroptose dans le cours, même si leurs conséquences inflammatoires peuvent interagir.' },
      { text: 'Une nécrose accidentelle après un traumatisme', correct: false, correction: 'Non, une nécrose peut être inflammatoire, mais ce n’est pas le mode de mort que le support relie particulièrement à l’inflammasome.' },
      { text: 'L’efférocytose d’une cellule apoptotique', correct: false, correction: 'Non chef, elle désigne la capture du cadavre cellulaire, non le mode de mort inflammatoire demandé.' },
    ],
    explanation: 'Le support identifie la pyroptose comme une mort très inflammatoire impliquant l’inflammasome. Cela ne rend pas toutes les morts cellulaires équivalentes. (Cours, p. 7)'
  },
  {
    id: 72,
    type: 'QRM',
    question: 'À propos de la nécroptose, quelles propositions sont exactes ?',
    options: [
      { text: 'Elle ne doit pas être confondue avec une simple nécrose accidentelle', correct: true, correction: 'Oui boss 🧠 La nécroptose est régulée ; « nécrotique » décrit notamment son phénotype final.' },
      { text: 'Elle peut aboutir à une rupture membranaire et à une libération de signaux inflammatoires', correct: true, correction: 'Exact, cette conséquence la distingue du nettoyage silencieux d’une apoptose physiologique.' },
      { text: 'Elle est strictement synonyme d’apoptose non inflammatoire', correct: false, correction: 'Non chef, les mécanismes et les conséquences inflammatoires ne sont pas identiques.' },
      { text: 'Elle prouve toujours une infection bactérienne initiale', correct: false, correction: 'Faux, on ne peut pas déduire une étiologie microbienne de ce seul mode de mort.' },
      { text: 'Il s’agit d’une voie de mort cellulaire régulée', correct: true, correction: 'Oui boss 🎯 Le terme indique une mort programmée malgré un aspect nécrotique.' },
    ],
    explanation: 'Le support parle d’un « mix » nécrose/apoptose ; la formulation correcte est une mort régulée distincte de l’apoptose, avec une issue lytique et potentiellement inflammatoire. (Cours, p. 7 ; mécanisme précisé)'
  },
  {
    id: 73,
    type: 'QCM',
    question: 'Quel terme désigne précisément la phagocytose de cellules apoptotiques dans le contexte du renouvellement tissulaire ?',
    options: [
      { text: 'Autophagie', correct: false, correction: 'Non chef, l’autophagie dégrade des composants à l’intérieur d’une cellule ; elle ne nomme pas l’ingestion d’une cellule apoptotique par un phagocyte.' },
      { text: 'Macropinocytose', correct: false, correction: 'Faux, elle permet surtout l’absorption de liquide extracellulaire ; elle ne nomme pas spécifiquement la clairance des cellules apoptotiques.' },
      { text: 'Nécroptose', correct: false, correction: 'Non, la nécroptose est une forme de mort régulée, tandis que l’efférocytose décrit l’élimination du cadavre cellulaire.' },
      { text: 'Opsonisation', correct: false, correction: 'Non chef, elle désigne le marquage d’une cible pour faciliter sa capture, pas l’ingestion des cellules apoptotiques elle-même.' },
      { text: 'Efférocytose', correct: true, correction: 'Oui boss 🎯 Elle élimine les cellules apoptotiques et soutient l’homéostasie tissulaire.' },
    ],
    explanation: 'Le système phagocytaire ne sert pas seulement à éliminer des microbes. L’efférocytose est le nettoyage des cellules apoptotiques de l’organisme. (Cours, p. 1, 5–7 ; terme précisé)'
  },
  {
    id: 74,
    type: 'QRM',
    question: 'Après une lésion tissulaire stérile entraînant des cellules nécrosées, quelles propositions sont exactes ?',
    options: [
      { text: 'L’absence de bactérie rend toute inflammation biologiquement impossible', correct: false, correction: 'Non chef, l’inflammation peut répondre à une lésion du soi sans infection.' },
      { text: 'Un DAMP est nécessairement une immunoglobuline sécrétée par un plasmocyte', correct: false, correction: 'Faux, DAMP désigne un motif associé au dommage, pas une classe d’anticorps.' },
      { text: 'Des DAMP d’origine endogène peuvent être exposés ou libérés', correct: true, correction: 'Oui boss, des composants internes devenus accessibles peuvent agir comme signaux de dommage.' },
      { text: 'Une réponse inflammatoire peut survenir sans présence obligatoire de PAMP microbiens', correct: true, correction: 'Oui boss, une lésion stérile peut suffire à déclencher une réponse au dommage.' },
      { text: 'Des PRR de l’immunité innée peuvent participer à leur détection', correct: true, correction: 'Exact 🧠 Un PRR n’est pas limité aux motifs d’agents infectieux.' },
    ],
    explanation: 'La nécrose peut rendre accessibles des signaux endogènes qui activent l’immunité innée. Le cours utilise ce mécanisme pour dépasser une opposition simpliste entre danger étranger et soi intact. (Cours, p. 2, 5, 7)'
  },
  {
    id: 75,
    type: 'QCM',
    question: 'Quel enchaînement décrit le mieux une réparation tissulaire efficace après une agression ?',
    options: [
      { text: 'Une réaction initiale contrôlée, suivie de la clairance des débris, de la résolution puis de la réparation', correct: true, correction: 'Oui boss 🧠 La réponse immunitaire sert à maîtriser le danger et à restaurer le tissu ; la résolution est une phase active.' },
      { text: 'L’activité inflammatoire initiale doit rester à son maximum pendant toute la cicatrisation', correct: false, correction: 'Non, la résolution de l’inflammation permet de passer aux processus de réparation.' },
      { text: 'Les débris cellulaires doivent rester dans le tissu pour amorcer la réparation', correct: false, correction: 'Non chef, leur clairance par les phagocytes contribue au retour vers l’homéostasie.' },
      { text: 'Une réponse adaptative dirigée contre tous les composants du soi constitue l’étape normale indispensable', correct: false, correction: 'Non chef, la réparation n’exige pas une attaque généralisée contre le soi ; la tolérance reste essentielle.' },
      { text: 'Une inflammation maximale maintenue indéfiniment, même après disparition du danger', correct: false, correction: 'Non chef, une inflammation non résolue peut endommager les tissus et entraver le retour à l’homéostasie.' },
    ],
    explanation: 'Le cours relie détection du danger, inflammation, élimination des débris et préparation de la cicatrisation. Une résolution active évite que l’inflammation devienne elle-même dommageable. (Cours, p. 3, 5–7)'
  },
  {
    id: 76,
    type: 'QRM',
    question: 'Dans le lien entre nettoyage tissulaire et réponse adaptative, quelles propositions sont exactes ?',
    options: [
      { text: 'Des macrophages peuvent contribuer à éliminer des cellules mortes et à réguler l’inflammation', correct: true, correction: 'Oui boss, ils ont aussi une fonction de nettoyage et de résolution.' },
      { text: 'La conséquence de cette capture dépend notamment du contexte de danger et de maturation de la cellule présentatrice', correct: true, correction: 'Exact. Capturer une cellule morte ne signifie pas toujours produire la même réponse effectrice.' },
      { text: 'Tout débris cellulaire capté par une cellule dendritique provoque automatiquement une maladie auto-immune', correct: false, correction: 'Non chef, présentation et activation pathologique ne sont pas synonymes ; le contexte et la tolérance comptent.' },
      { text: 'Une cellule dendritique peut capter du matériel antigénique et le présenter à un lymphocyte T', correct: true, correction: 'Oui boss 🧠 C’est un mécanisme de passage entre perception du contexte inné et activation adaptative.' },
      { text: 'Le devenir immunitaire de tout antigène capté est indépendant des signaux de danger', correct: false, correction: 'Faux, ces signaux influencent notamment la maturation des cellules présentatrices et la réponse T qui en résulte.' },
    ],
    explanation: 'Capture, élimination et présentation d’antigène sont des fonctions reliées mais non identiques. Les cellules dendritiques et les macrophages participent à la liaison entre surveillance innée, tolérance et réponse adaptative. (Cours, p. 3–4, 6–7)'
  },
  {
    id: 77,
    type: 'QCM',
    question: 'Quelle conséquence est attendue si des cellules apoptotiques sont rapidement éliminées par des macrophages dans un tissu sain ?',
    options: [
      { text: 'Une libération systématique d’IL-1β mature après chaque efférocytose', correct: false, correction: 'Non chef, le nettoyage physiologique des cellules apoptotiques ne s’accompagne pas nécessairement d’une activation de l’inflammasome.' },
      { text: 'Une sécrétion systématique d’anticorps anti-soi à chaque cellule éliminée', correct: false, correction: 'Non, l’élimination physiologique du soi peut être peu inflammatoire et contribue à la tolérance.' },
      { text: 'Une exposition prolongée du contenu intracellulaire de ces cellules', correct: false, correction: 'Non chef, leur capture rapide limite normalement l’exposition de composants qui pourraient amplifier l’inflammation.' },
      { text: 'Une limitation habituelle de la libération de contenu cellulaire et de l’inflammation locale', correct: true, correction: 'Oui boss 🧠 L’élimination précoce du matériel apoptotique favorise une réponse discrète plutôt qu’une accumulation de débris.' },
      { text: 'Une infection microbienne certaine causée par cette seule clairance', correct: false, correction: 'Faux, le renouvellement cellulaire et sa clairance se produisent aussi sans pathogène.' },
    ],
    explanation: 'Le nettoyage rapide des cellules apoptotiques aide à conserver l’homéostasie et à éviter une inflammation inappropriée. « Habituellement » importe : le contexte infectieux ou inflammatoire peut modifier la réponse. (Cours, p. 1, 5–7)'
  },
  {
    id: 78,
    type: 'QRM',
    question: 'Si la clairance des cellules apoptotiques est insuffisante, quelles conséquences sont plausibles ?',
    options: [
      { text: 'Un risque accru de réponse inflammatoire inappropriée selon le contexte', correct: true, correction: 'Oui boss, c’est l’une des raisons pour lesquelles ce nettoyage contribue à l’homéostasie.' },
      { text: 'La preuve qu’aucune cellule du soi ne meurt normalement dans l’organisme', correct: false, correction: 'Faux, la mort cellulaire physiologique est constante ; c’est son élimination qui est en cause ici.' },
      { text: 'Une perte secondaire d’intégrité de certaines cellules et une exposition de signaux de dommage', correct: true, correction: 'Exact 🧠 Le matériel non éliminé peut devenir une source de signaux inflammatoires.' },
      { text: 'Une accumulation de cellules mortes et de débris tissulaires', correct: true, correction: 'Oui boss, faute de phagocytose efficace, le matériel apoptotique persiste plus longtemps.' },
      { text: 'La certitude que toute personne concernée développera la même maladie auto-immune', correct: false, correction: 'Non chef, un mécanisme de risque ne permet pas de prédire une maladie identique et obligatoire pour chacun.' },
    ],
    explanation: 'Une efférocytose insuffisante peut laisser persister les cellules apoptotiques, favoriser une nécrose secondaire et amplifier des réponses inflammatoires. Ce risque n’est pas une certitude diagnostique individuelle. (Cours, p. 1, 5–7 ; conséquence précisée)'
  },
  {
    id: 79,
    type: 'QCM',
    question: 'Quel énoncé distingue correctement le rôle d’une cellule dendritique de celui d’un macrophage lors du passage à une réponse T primaire ?',
    options: [
      { text: 'Une cellule dendritique mature est particulièrement apte à initier l’activation de lymphocytes T naïfs, tandis qu’un macrophage assure notamment la phagocytose et la régulation locale', correct: true, correction: 'Oui boss 🧠 Les fonctions se recoupent, mais la cellule dendritique mature est une présentatrice particulièrement efficace pour amorcer une réponse T naïve.' },
      { text: 'Une cellule dendritique ne peut jamais capter de matériel cellulaire', correct: false, correction: 'Faux, elle peut capter et traiter du matériel avant sa présentation.' },
      { text: 'Une cellule dendritique mature fabrique seule tous les anticorps de la réponse', correct: false, correction: 'Non, les anticorps sont surtout sécrétés par les plasmocytes issus des lymphocytes B.' },
      { text: 'Un macrophage n’a aucune capacité de présenter un antigène', correct: false, correction: 'Non chef, il peut présenter des antigènes ; cela ne lui confère pas exactement le même rôle que la cellule dendritique pour l’amorçage des T naïfs.' },
      { text: 'La phagocytose d’une cellule apoptotique par un macrophage est, à elle seule, une activation obligatoire de tout lymphocyte T', correct: false, correction: 'Non chef, la clairance physiologique peut au contraire être discrète ; activation T dépend de la présentation et du contexte.' },
    ],
    explanation: 'Le cours attribue aux cellules dendritiques la préparation de la réponse adaptative et aux macrophages plusieurs rôles de phagocytose, régulation et présentation. Le contexte de maturation conditionne l’amorçage des T naïfs. (Cours, p. 3–4, 6–7 ; rôle de priming précisé)'
  },
  {
    id: 80,
    type: 'QRM',
    question: 'Quelles propositions résument les liens entre mort cellulaire, inflammation et immunité dans ce cours ?',
    options: [
      { text: 'La résolution de l’inflammation et la réparation reposent aussi sur des réponses immunitaires actives', correct: true, correction: 'Exact. L’arrêt des médiateurs de danger et la clairance des débris nécessitent des mécanismes de régulation.' },
      { text: 'L’absence de microbes exclut nécessairement toute inflammation et toute intervention des phagocytes', correct: false, correction: 'Non chef, une lésion stérile et le renouvellement du soi sollicitent aussi l’immunité.' },
      { text: 'L’innée peut contribuer à l’activation de l’adaptative par la présentation d’antigènes dans un contexte approprié', correct: true, correction: 'Oui boss 🧠 Les cellules dendritiques en sont un exemple important.' },
      { text: 'Des composants endogènes libérés après une lésion peuvent servir de signaux de danger à l’innée', correct: true, correction: 'Exact, les DAMP illustrent cette reconnaissance du dommage.' },
      { text: 'Le nettoyage de cellules du soi apoptotiques est une fonction normale du système immunitaire', correct: true, correction: 'Oui boss 🎯 Il participe au renouvellement tissulaire sans devoir déclencher une attaque contre tout le soi.' },
    ],
    explanation: 'L’immunité du cours intègre la défense, l’entretien du soi, la reconnaissance des dommages et la résolution. Les réponses innée et adaptative interagissent sans se confondre. (Cours, p. 1–3, 5–7)'
  },
]
