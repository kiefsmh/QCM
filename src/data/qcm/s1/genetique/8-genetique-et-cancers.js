export const meta = {
  title: 'Génétique et cancers',
}

export default [
  {
    id: 1,
    type: 'QCM',
    question: 'Quel est l\'objectif central de l\'oncogénétique décrit dans le cours ?',
    options: [
      { text: 'Prouver qu\'une tumeur ne contient aucune altération de l\'ADN', correct: false, correction: 'Non. Les altérations génétiques de cellules tumorales sont au contraire au cœur du cours.' },
      { text: 'Identifier les familles présentant une prédisposition héréditaire au cancer', correct: true, correction: 'Oui. Cette identification permet d\'évaluer le risque et d\'adapter la surveillance familiale.' },
      { text: 'Remplacer systématiquement l\'analyse de la tumeur par une prise de sang', correct: false, correction: 'Non. Les analyses tumorales et constitutionnelles répondent à des questions différentes.' },
      { text: 'Déterminer le groupe sanguin du patient avant une chimiothérapie', correct: false, correction: 'Non. Ce n\'est pas l\'objectif de l\'oncogénétique exposé ici.' },
      { text: 'Attribuer une origine héréditaire à tout cancer diagnostiqué', correct: false, correction: 'Non. La majorité des cancers résultent d\'altérations acquises dans la tumeur.' },
    ],
    explanation: 'L\'oncogénétique recherche notamment les prédispositions familiales afin de proposer une prise en charge adaptée aux personnes à risque. (Cours, p. 2)'
  },
  {
    id: 2,
    type: 'QRM',
    question: 'À propos des prédispositions héréditaires présentées en introduction, quelles propositions sont exactes ?',
    options: [
      { text: 'Elles peuvent entraîner des cancers à un âge plus précoce qu\'attendu', correct: true, correction: 'Oui. Un âge de révélation précoce est une raison de rechercher une prédisposition.' },
      { text: 'Elles imposent le même risque et la même surveillance pour tous les organes', correct: false, correction: 'Non. Les organes cibles et les mesures de suivi varient selon la prédisposition.' },
      { text: 'Elles n\'expliquent qu\'une minorité des cancers fréquents de l\'adulte, estimée autour de 5 % dans le cours', correct: true, correction: 'Oui. Le cours donne cet ordre de grandeur, distinct de l\'ensemble des cancers sporadiques.' },
      { text: 'Leur identification peut conduire à une surveillance ciblée des organes à risque', correct: true, correction: 'Oui. La surveillance dépend du syndrome et du niveau de risque.' },
      { text: 'Elles sont nécessairement visibles sur une analyse de l\'ADN tumoral seule chez tous les apparentés', correct: false, correction: 'Non. L\'évaluation familiale requiert, selon le cas, une démarche constitutionnelle spécifique.' },
    ],
    explanation: 'Le cours situe ces prédispositions parmi une minorité des cancers, tout en soulignant leur intérêt pour prévenir et surveiller un risque parfois précoce. (Cours, p. 2)'
  },
  {
    id: 3,
    type: 'QCM',
    question: 'Pourquoi peut-on dire qu\'un cancer est une maladie génétique sans le qualifier automatiquement d\'héréditaire ?',
    options: [
      { text: 'Ses cellules accumulent des altérations de l\'ADN qui peuvent n\'être présentes que dans la tumeur', correct: true, correction: 'Oui. Des mutations somatiques peuvent entraîner une tumeur sans être transmises par la lignée germinale.' },
      { text: 'La présence d\'une altération de l\'ADN tumoral suffit à prédire un risque identique chez tous les enfants', correct: false, correction: 'Non. Le risque des descendants dépend d\'une éventuelle altération constitutionnelle transmissible.' },
      { text: 'Un cancer familial est défini par la seule découverte d\'une translocation dans une biopsie', correct: false, correction: 'Non. Une anomalie somatique ne démontre pas, à elle seule, une transmission familiale.' },
      { text: 'Toute mutation tumorale est présente dès la conception dans chacune des cellules', correct: false, correction: 'Non. C\'est la situation d\'une variante constitutionnelle, pas de toutes les mutations tumorales.' },
      { text: 'Une tumeur est exclusivement causée par l\'environnement sans changement génétique cellulaire', correct: false, correction: 'Non. Des expositions peuvent contribuer aux mutations, mais la cellule cancéreuse possède des altérations génétiques.' },
    ],
    explanation: 'La dimension génétique concerne les cellules tumorales ; l\'hérédité suppose une altération constitutionnelle susceptible d\'être transmise. (Cours, p. 2 et 5)'
  },
  {
    id: 4,
    type: 'QRM',
    question: 'Quelles différences entre une altération somatique et une altération constitutionnelle sont correctes ?',
    options: [
      { text: 'Une altération somatique de la tumeur est automatiquement partagée par tous les apparentés', correct: false, correction: 'Non. Une mutation limitée à la tumeur ne permet pas cette déduction.' },
      { text: 'Une altération constitutionnelle est généralement présente dans de nombreux tissus non tumoraux', correct: true, correction: 'Oui. Elle est détectable hors de la tumeur, sous réserve de situations particulières comme le mosaïcisme.' },
      { text: 'Toute altération observée sur l\'ADN tumoral est obligatoirement constitutionnelle', correct: false, correction: 'Non. La tumeur accumule aussi de nombreuses altérations acquises.' },
      { text: 'Une altération somatique peut apparaître dans un tissu au cours de la vie', correct: true, correction: 'Oui. Elle se transmet aux cellules filles de ce tissu sans être forcément présente dans l\'organisme entier.' },
      { text: 'Une altération constitutionnelle peut être transmise à la descendance', correct: true, correction: 'Oui. Une variante germinale transmissible fonde certains risques familiaux.' },
    ],
    explanation: 'Le site où l\'altération est présente détermine son interprétation : l\'ADN tumoral renseigne sur la tumeur, l\'ADN constitutionnel sur une éventuelle prédisposition familiale. (Cours, p. 2 et 5)'
  },
  {
    id: 5,
    type: 'QCM',
    question: 'Quelle modification transforme typiquement un proto-oncogène en oncogène ?',
    options: [
      { text: 'Une mutation uniquement présente dans une cellule voisine normale', correct: false, correction: 'Non. L\'effet oncogénique concerne la cellule qui porte et exprime l\'altération.' },
      { text: 'La suppression de toutes les protéines de réparation de l\'ADN sans changement du proto-oncogène', correct: false, correction: 'Non. Cela peut favoriser une instabilité, mais ne définit pas la transformation de ce proto-oncogène.' },
      { text: 'Une altération activatrice augmentant son activité de signalisation ou son expression', correct: true, correction: 'Oui. Elle crée un signal pro-prolifératif anormalement fort ou persistant.' },
      { text: 'Une baisse isolée de l\'activité du facteur de croissance codé par ce gène', correct: false, correction: 'Non. La transformation en oncogène du cours est une acquisition ou augmentation de fonction.' },
      { text: 'La perte obligatoire des deux copies du gène avant toute activation', correct: false, correction: 'Non. Ce modèle correspond surtout à l\'inactivation d\'un gène suppresseur de tumeur.' },
    ],
    explanation: 'Un proto-oncogène participe normalement aux signaux de croissance ; sa mutation activatrice peut en faire un oncogène. (Cours, p. 3)'
  },
  {
    id: 6,
    type: 'QRM',
    question: 'Quelles altérations peuvent activer un proto-oncogène selon le cours ?',
    options: [
      { text: 'Une amplification du gène', correct: true, correction: 'Oui. Des copies supplémentaires peuvent accroître la quantité de protéine produite.' },
      { text: 'La perte simultanée de deux allèles d\'un gène suppresseur de tumeur', correct: false, correction: 'Non. C\'est une voie d\'inactivation d\'un frein cellulaire, pas une activation directe du proto-oncogène.' },
      { text: 'Une mutation ponctuelle activatrice', correct: true, correction: 'Oui. Une modification de séquence peut rendre une protéine active de façon inappropriée.' },
      { text: 'La disparition de toutes les cellules exprimant le proto-oncogène', correct: false, correction: 'Non. Elle ne produit pas une cellule porteuse d\'un signal oncogénique actif.' },
      { text: 'Un réarrangement chromosomique créant une fusion ou plaçant un gène sous un autre contrôle', correct: true, correction: 'Oui. Le remaniement peut modifier la protéine ou son expression.' },
    ],
    explanation: 'Le cours distingue mutation ponctuelle, réarrangement chromosomique et amplification comme mécanismes possibles d\'activation oncogénique. (Cours, p. 3)'
  },
  {
    id: 7,
    type: 'QCM',
    question: 'Quel rôle physiologique attribue-t-on aux gènes suppresseurs de tumeur dans le cours ?',
    options: [
      { text: 'Freiner ou contrôler la prolifération cellulaire', correct: true, correction: 'Oui. Ils constituent une partie des contrôles négatifs de la croissance.' },
      { text: 'Transformer systématiquement les proto-oncogènes en protéines de fusion', correct: false, correction: 'Non. Les fusions relèvent de certains réarrangements, pas d\'une fonction universelle des suppresseurs.' },
      { text: 'Garantir qu\'aucune mutation ne puisse jamais survenir', correct: false, correction: 'Non. Les cellules peuvent acquérir des altérations malgré leurs mécanismes de contrôle.' },
      { text: 'Être absents du génome des cellules saines', correct: false, correction: 'Non. Leurs copies sont normalement présentes et fonctionnelles dans les cellules saines.' },
      { text: 'Produire un signal de croissance permanent dans toute cellule normale', correct: false, correction: 'Non. Ce serait l\'opposé de leur rôle de frein.' },
    ],
    explanation: 'Les gènes suppresseurs de tumeur s\'opposent à une croissance cellulaire incontrôlée ; leur perte retire ce frein. (Cours, p. 3)'
  },
  {
    id: 8,
    type: 'QRM',
    question: 'Pour la perte d\'activité d\'un gène suppresseur de tumeur dans le modèle des « deux événements », quelles propositions sont exactes ?',
    options: [
      { text: 'Une délétion chromosomique peut contribuer à perdre la seconde copie', correct: true, correction: 'Oui. Le second événement n\'est pas forcément une mutation ponctuelle.' },
      { text: 'Deux mutations acquises dans deux personnes différentes inactivent ensemble le gène d\'une cellule', correct: false, correction: 'Non. Les événements doivent concerner la lignée cellulaire à l\'origine de la tumeur.' },
      { text: 'Un premier événement peut inactiver une copie du gène', correct: true, correction: 'Oui. Une copie demeure alors potentiellement fonctionnelle.' },
      { text: 'La deuxième copie est toujours rendue active et annule la première mutation', correct: false, correction: 'Non. Une seconde atteinte peut au contraire supprimer la fonction résiduelle.' },
      { text: 'Un second événement peut toucher l\'autre copie dans la même lignée cellulaire', correct: true, correction: 'Oui. La perte des deux allèles supprime l\'activité du suppresseur dans cette cellule.' },
    ],
    explanation: 'Le schéma du cours présente l\'inactivation biallélique : les deux copies d\'un suppresseur doivent être perdues dans une même lignée tumorale. (Cours, p. 3–4)'
  },
  {
    id: 9,
    type: 'QCM',
    question: 'Quelle comparaison illustre le modèle simplifié du cours entre oncogène et gène suppresseur de tumeur ?',
    options: [
      { text: 'Les deux catégories ne deviennent pathogènes qu\'après amplification obligatoire de leurs deux copies', correct: false, correction: 'Non. Les mécanismes et le nombre de copies impliquées diffèrent.' },
      { text: 'Une mutation d\'un suppresseur est nécessairement une activation de la protéine', correct: false, correction: 'Non. Le modèle du cours concerne sa perte de fonction.' },
      { text: 'L\'activation d\'une copie d\'un proto-oncogène peut suffire à créer un signal oncogénique, tandis que la perte d\'un suppresseur implique souvent les deux copies', correct: true, correction: 'Oui. C\'est la distinction gain de fonction contre perte biallélique décrite dans le cours.' },
      { text: 'Les deux catégories sont uniquement présentes chez les individus prédisposés', correct: false, correction: 'Non. Proto-oncogènes et suppresseurs sont des gènes normaux de toutes les cellules.' },
      { text: 'Un oncogène freine la prolifération alors qu\'un suppresseur la stimule', correct: false, correction: 'Non. Les rôles sont inversés.' },
    ],
    explanation: 'Dans ce modèle pédagogique, le gain de fonction oncogénique et l\'inactivation biallélique d\'un suppresseur constituent deux voies complémentaires vers la cancérisation. (Cours, p. 3–4)'
  },
  {
    id: 10,
    type: 'QRM',
    question: 'Quelles propriétés peuvent être acquises par une cellule tumorale au fil des altérations décrites ?',
    options: [
      { text: 'Une moindre sensibilité à l\'apoptose', correct: true, correction: 'Oui. La résistance à la mort cellulaire favorise la survie de la lignée anormale.' },
      { text: 'Une stimulation de la formation de vaisseaux qui la nourrissent', correct: true, correction: 'Oui. L\'angiogenèse contribue à l\'approvisionnement de la tumeur.' },
      { text: 'Une croissance toujours strictement limitée par les contrôles physiologiques', correct: false, correction: 'Non. La perte de contrôles favorise une prolifération anormale.' },
      { text: 'Une disparition garantie de toutes les altérations de l\'ADN', correct: false, correction: 'Non. Le cours décrit au contraire une accumulation d\'anomalies génétiques.' },
      { text: 'Une capacité d\'invasion puis de dissémination à distance', correct: true, correction: 'Oui. Les capacités métastatiques apparaissent au cours de la progression.' },
    ],
    explanation: 'Le cours relie l\'accumulation d\'altérations à la survie, à l\'angiogenèse et à l\'invasion de cellules cancéreuses. (Cours, p. 4)'
  },
  {
    id: 11,
    type: 'QCM',
    question: 'Dans la majorité des cancers de l\'adulte évoqués par le cours, où les mutations initiatrices sont-elles acquises ?',
    options: [
      { text: 'Obligatoirement dans toutes les cellules dès la conception', correct: false, correction: 'Non. Cela décrirait une altération constitutionnelle, qui n\'explique qu\'une minorité des cancers.' },
      { text: 'Toujours dans une bactérie puis transférées telles quelles aux cellules humaines', correct: false, correction: 'Non. Ce n\'est pas le mécanisme général de cancérisation du cours.' },
      { text: 'Dans le plasma sanguin, sans modification des cellules tumorales', correct: false, correction: 'Non. Les altérations considérées concernent l\'ADN des cellules tumorales.' },
      { text: 'Uniquement dans les gamètes des parents, sans changement tumoral ultérieur', correct: false, correction: 'Non. Même une prédisposition héréditaire nécessite des altérations dans le tissu tumoral.' },
      { text: 'Dans une lignée de cellules d\'un tissu, au cours de la vie', correct: true, correction: 'Oui. Les cancers sporadiques sont liés à l\'accumulation d\'altérations somatiques.' },
    ],
    explanation: 'Le cours estime qu\'environ 95 % des cas ne relèvent pas d\'une prédisposition héréditaire et décrit l\'accumulation de mutations acquises dans un tissu. (Cours, p. 5)'
  },
  {
    id: 12,
    type: 'QRM',
    question: 'Quels renseignements l\'étude de l\'ADN tumoral peut-elle apporter selon le cours ?',
    options: [
      { text: 'Prouver automatiquement que tous les apparentés portent la mutation retrouvée', correct: false, correction: 'Non. Une mutation tumorale peut être strictement somatique.' },
      { text: 'Orienter le choix d\'un traitement ciblé', correct: true, correction: 'Oui. La présence ou l\'absence d\'un biomarqueur modifie certaines indications thérapeutiques.' },
      { text: 'Remplacer dans tous les cas l\'examen clinique et l\'anatomopathologie', correct: false, correction: 'Non. Le diagnostic intègre plusieurs types de données complémentaires.' },
      { text: 'Aider à classer ou préciser le diagnostic d\'une tumeur', correct: true, correction: 'Oui. Une anomalie moléculaire peut être une signature diagnostique utile.' },
      { text: 'Faire envisager, selon le contexte, une prédisposition qui demandera une évaluation constitutionnelle', correct: true, correction: 'Oui. Une anomalie tumorale peut constituer un indice, sans prouver seule qu\'elle est héritée.' },
    ],
    explanation: 'Les analyses tumorales ont des intérêts diagnostique et thérapeutique, et peuvent parfois soulever une question de prédisposition familiale. (Cours, p. 2 et 5–6)'
  },
  {
    id: 13,
    type: 'QCM',
    question: 'Quelle anomalie du cas de leucémie myéloïde chronique est mise en évidence par le caryotype médullaire ?',
    options: [
      { text: 'Une amplification constitutionnelle de BRCA1 dans tous les tissus', correct: false, correction: 'Non. BRCA1 concerne ici un autre exemple de réparation de l\'ADN et de prédisposition.' },
      { text: 'Une translocation entre les chromosomes 9 et 22 donnant la fusion BCR–ABL1', correct: true, correction: 'Oui. Le réarrangement produit une protéine de signalisation activée de façon anormale.' },
      { text: 'Une inversion du chromosome 1 produisant la protéine PARP', correct: false, correction: 'Non. PARP est abordée dans l\'exemple thérapeutique du cancer de l\'ovaire.' },
      { text: 'Une mutation de TLR4 associée à une perte de flagelline', correct: false, correction: 'Non. Ce n\'est pas une anomalie citée dans le cas de leucémie myéloïde chronique.' },
      { text: 'Une délétion homozygote des exons 4 à 6 de SMARCB1', correct: false, correction: 'Non. Cette délétion appartient au cas de tumeur rhabdoïde du cours.' },
    ],
    explanation: 'Le remaniement 9;22, dit chromosome de Philadelphie, génère BCR–ABL1 et contribue à confirmer la leucémie myéloïde chronique. (Cours, p. 5–6)'
  },
  {
    id: 14,
    type: 'QRM',
    question: 'Dans le cas de leucémie myéloïde chronique du cours, quelles propositions sont correctes ?',
    options: [
      { text: 'La seule asthénie suffit à identifier sans autre examen la translocation en cause', correct: false, correction: 'Non. Le diagnostic moléculaire et cytogénétique nécessite des examens spécifiques.' },
      { text: 'Une splénomégalie est retrouvée à l\'examen', correct: true, correction: 'Oui. Le cours décrit une augmentation modérée du volume de la rate.' },
      { text: 'Une hyperleucocytose majeure et une myélémie orientent l\'enquête clinique', correct: true, correction: 'Oui. Le passage de cellules immatures dans le sang accompagne l\'élévation des leucocytes.' },
      { text: 'La translocation 9;22 crée un gène de fusion codant BCR–ABL1', correct: true, correction: 'Oui. Ce marqueur moléculaire soutient le diagnostic.' },
      { text: 'BCR–ABL1 résulte de la délétion biallélique de SMARCB1', correct: false, correction: 'Non. SMARCB1 appartient au cas distinct de tumeur rhabdoïde.' },
    ],
    explanation: 'Les signes sanguins et cliniques orientent, puis le caryotype médullaire révèle le réarrangement 9;22 caractéristique du cas. (Cours, p. 5–6)'
  },
  {
    id: 15,
    type: 'QCM',
    question: 'Quel résultat immunohistochimique appuie le diagnostic de tumeur rhabdoïde dans le cas du nourrisson ?',
    options: [
      { text: 'La surexpression de KRAS sur toutes les cellules sanguines', correct: false, correction: 'Non. KRAS est abordé dans l\'exemple du cancer colorectal, pas dans ce test immunohistochimique.' },
      { text: 'L\'expression accrue de SMARCB1 sans anomalie tumorale', correct: false, correction: 'Non. Le cas décrit au contraire une perte du marquage de SMARCB1.' },
      { text: 'La perte du marquage nucléaire de SMARCB1 dans les cellules tumorales', correct: true, correction: 'Oui. Le cours relie cette absence à une perte de la protéine étudiée.' },
      { text: 'La présence d\'une protéine BCR–ABL1 dans le rein sain', correct: false, correction: 'Non. BCR–ABL1 est le marqueur du cas de leucémie myéloïde chronique.' },
      { text: 'La perte obligatoire de toute protéine PARP dans la tumeur', correct: false, correction: 'Non. PARP intervient dans un autre exemple de réparation de l\'ADN.' },
    ],
    explanation: 'L\'immunohistochimie du cas montre une absence de SMARCB1 dans la tumeur ; l\'étude moléculaire en recherche ensuite la cause. (Cours, p. 6)'
  },
  {
    id: 16,
    type: 'QRM',
    question: 'Dans le cas de tumeur rhabdoïde du cours, que montre l\'analyse moléculaire de la tumeur ?',
    options: [
      { text: 'La preuve que chacun des deux parents porte la même délétion', correct: false, correction: 'Non. Aucune déduction parentale n\'est possible à partir du seul ADN tumoral.' },
      { text: 'Une concordance entre une anomalie de l\'ADN tumoral et la perte de SMARCB1', correct: true, correction: 'Oui. Les deux examens apportent des informations complémentaires au diagnostic.' },
      { text: 'Une mutation activatrice unique de KRAS expliquant la perte de SMARCB1', correct: false, correction: 'Non. La perte de SMARCB1 est liée dans ce cas à une délétion biallélique du gène.' },
      { text: 'La nécessité de distinguer le résultat tumoral d\'une éventuelle anomalie constitutionnelle', correct: true, correction: 'Oui. L\'altération retrouvée dans la tumeur ne prouve pas seule une prédisposition héréditaire.' },
      { text: 'Une délétion des exons 4 à 6 de SMARCB1 sur les deux copies tumorales', correct: true, correction: 'Oui. La perte biallélique concorde avec l\'absence de protéine en immunohistochimie.' },
    ],
    explanation: 'La délétion homozygote tumorale de SMARCB1 confirme le mécanisme expliquant l\'absence de marquage ; le statut constitutionnel reste une question distincte. (Cours, p. 6)'
  },
  {
    id: 17,
    type: 'QCM',
    question: 'Dans l\'exemple colorectal du cours, pourquoi une mutation activatrice de KRAS peut-elle réduire l\'intérêt d\'un blocage d\'EGFR ?',
    options: [
      { text: 'Parce que l\'anti-EGFR répare directement les deux allèles de BRCA1', correct: false, correction: 'Non. L\'anti-EGFR agit sur un récepteur de signalisation, pas sur la réparation par BRCA1.' },
      { text: 'Parce que l\'analyse tumorale ne permet jamais de détecter l\'état de KRAS', correct: false, correction: 'Non. Le statut RAS tumoral peut être recherché pour guider certains traitements.' },
      { text: 'Parce que EGFR se trouve en aval de KRAS et n\'a aucun rôle dans la cellule normale', correct: false, correction: 'Non. Le cours place EGFR en amont de KRAS et lui attribue un rôle normal de réponse à l\'EGF.' },
      { text: 'Parce que KRAS situé en aval du récepteur peut continuer à transmettre un signal de croissance', correct: true, correction: 'Oui. Bloquer EGFR n\'éteint pas nécessairement un KRAS déjà activé de façon autonome.' },
      { text: 'Parce que KRAS détruit la protéine SMARCB1 dans chaque cancer colorectal', correct: false, correction: 'Non. Le mécanisme présenté concerne la signalisation de croissance, pas une perte systématique de SMARCB1.' },
    ],
    explanation: 'EGF active EGFR, puis les voies de signalisation dont KRAS ; une activation de KRAS en aval contourne le blocage du récepteur. (Cours, p. 7)'
  },
  {
    id: 18,
    type: 'QRM',
    question: 'Concernant le choix d\'un anticorps anti-EGFR dans le cancer colorectal métastatique, quelles propositions sont exactes ?',
    options: [
      { text: 'Une mutation activatrice de KRAS peut rendre peu probable le bénéfice d\'un anti-EGFR tel que le cétuximab dans ce contexte', correct: true, correction: 'Oui. Le signal RAS peut persister malgré le blocage d\'EGFR.' },
      { text: 'L\'état de RAS est sans rapport avec la voie située en aval d\'EGFR', correct: false, correction: 'Non. RAS est justement un relais essentiel de la signalisation d\'EGFR.' },
      { text: 'Le statut RAS de la tumeur est un biomarqueur important pour certaines indications', correct: true, correction: 'Oui. Les indications d\'anti-EGFR en cancer colorectal métastatique utilisent notamment le statut RAS.' },
      { text: 'Une mutation de KRAS interdit toute utilisation d\'un médicament anti-EGFR, quel que soit le cancer et l\'association thérapeutique', correct: false, correction: 'Non. Le cours décrit un contexte colorectal précis ; une règle universelle serait excessive.' },
      { text: 'Une analyse de l\'ADN tumoral aide à adapter la stratégie thérapeutique', correct: true, correction: 'Oui. C\'est l\'intérêt de la recherche du biomarqueur dans le cours.' },
    ],
    explanation: 'Dans le cancer colorectal métastatique, la sélection de certaines thérapies anti-EGFR repose sur le statut tumoral RAS ; les détails dépendent de l\'indication. (Cours, p. 7 ; EMA, Erbitux)'
  },
  {
    id: 19,
    type: 'QCM',
    question: 'Sur quel principe repose l\'exemple d\'inhibiteur de PARP dans une cellule tumorale déficiente en BRCA1/2 ?',
    options: [
      { text: 'L\'association de deux défauts de réparation de l\'ADN rend la cellule tumorale particulièrement vulnérable', correct: true, correction: 'Oui. La perte de réparation par recombinaison homologue et l\'inhibition de PARP illustrent une létalité synthétique.' },
      { text: 'La destruction directe du récepteur EGFR par BRCA2', correct: false, correction: 'Non. BRCA2 agit surtout dans la réparation des cassures double brin.' },
      { text: 'L\'augmentation de la synthèse de SMARCB1 dans les cellules rénales', correct: false, correction: 'Non. Il s\'agit d\'un autre cas diagnostique.' },
      { text: 'La restauration directe de la séquence BRCA1 par l\'inhibiteur de PARP', correct: false, correction: 'Non. Le médicament ne corrige pas le gène muté.' },
      { text: 'L\'activation permanente de KRAS par PARP', correct: false, correction: 'Non. L\'exemple concerne la réparation de l\'ADN, pas la voie EGFR–KRAS.' },
    ],
    explanation: 'L\'inhibition de PARP perturbe la gestion de lésions de l\'ADN ; dans une tumeur déficiente en recombinaison homologue liée à BRCA1/2, la combinaison des déficits peut mener à la mort cellulaire. (Cours, p. 7)'
  },
  {
    id: 20,
    type: 'QRM',
    question: 'À propos des analyses BRCA1/2 et des inhibiteurs de PARP dans l\'exemple du cancer de l\'ovaire, quelles propositions sont exactes ?',
    options: [
      { text: 'Une variante BRCA1/2 dans la tumeur peut être constitutionnelle ou acquise', correct: true, correction: 'Oui. Le cours distingue une prédisposition génétique et une mutation non constitutionnelle.' },
      { text: 'Un déficit de recombinaison homologue peut aussi être identifié par d\'autres marqueurs selon l\'indication', correct: true, correction: 'Oui. Certaines autorisations tiennent compte d\'un statut HRD au-delà des seules mutations BRCA1/2.' },
      { text: 'La recherche de BRCA1/2 peut aider à choisir certaines stratégies de traitement', correct: true, correction: 'Oui. Elle fournit un biomarqueur de déficit de réparation dans des indications définies.' },
      { text: 'Un inhibiteur de PARP n\'est jamais envisagé hors d\'une mutation BRCA1/2 dans aucune situation clinique', correct: false, correction: 'Non. Cette exclusivité est trop forte au regard des indications actuelles.' },
      { text: 'Une mutation BRCA1/2 tumorale prouve à elle seule que tous les membres de la famille sont porteurs', correct: false, correction: 'Non. Il faut distinguer mutation tumorale et variante constitutionnelle avant le conseil familial.' },
    ],
    explanation: 'BRCA1/2 et, selon l\'indication, d\'autres marqueurs de déficit de recombinaison orientent certains traitements par inhibiteur de PARP ; une mutation tumorale n\'est pas automatiquement héritée. (Cours, p. 7 ; EMA, Lynparza)'
  },
  {
    id: 21,
    type: 'QCM',
    question: 'Quelle observation appuie le caractère constitutionnel d\'un variant prédisposant au cancer plutôt qu\'une origine limitée à la tumeur ?',
    options: [
      { text: 'La tumeur présente une forte prolifération au microscope.', correct: false, correction: 'Non. L\'histologie ne suffit pas à établir le caractère constitutionnel d\'un variant.' },
      { text: 'Le variant touche un gène connu de prédisposition, quel que soit le tissu analysé.', correct: false, correction: 'Non. Un même gène peut être altéré de façon uniquement somatique dans une tumeur.' },
      { text: 'Un autre membre de la famille a eu un cancer, sans analyse génétique.', correct: false, correction: 'Non. L\'histoire familiale peut alerter mais ne classe pas à elle seule le variant observé chez le patient.' },
      { text: 'Le variant est identifié dans un prélèvement non tumoral approprié, après interprétation génétique.', correct: true, correction: 'Oui. Sa présence hors de la tumeur étaye une origine constitutionnelle ; l\'analyse doit aussi considérer un éventuel mosaïcisme.' },
      { text: 'Le variant est identifié dans deux zones de la même tumeur seulement.', correct: false, correction: 'Non. Deux prélèvements tumoraux ne démontrent pas sa présence dans les cellules non tumorales.' },
    ],
    explanation: 'La comparaison des données tumorales et non tumorales permet de distinguer l\'altération acquise de la prédisposition constitutionnelle. (Cours, p. 8 et 17)'
  },
  {
    id: 22,
    type: 'QRM',
    question: 'Quels éléments de l\'histoire clinique ou familiale peuvent faire évoquer une prédisposition héréditaire au cancer ?',
    options: [
      { text: 'Plusieurs tumeurs primitives indépendantes chez la même personne.', correct: true, correction: 'Oui. La multiplicité de tumeurs primitives peut orienter vers une prédisposition.' },
      { text: 'Des cancers apparentés dans plusieurs générations d\'une famille.', correct: true, correction: 'Oui. La récurrence familiale est un autre indice, à interpréter selon les liens et les diagnostics.' },
      { text: 'L\'absence de tout autre cancer connu dans la famille exclut une prédisposition.', correct: false, correction: 'Non. Une prédisposition peut être de novo, peu pénétrante ou masquée par la taille de la famille.' },
      { text: 'Un cancer révélé à un âge inhabituellement précoce pour le type de tumeur.', correct: true, correction: 'Oui. La précocité est un signal d\'alerte du cours, sans constituer seule une preuve.' },
      { text: 'Un cancer du côlon unique diagnostiqué très tardivement prouve une transmission mendélienne.', correct: false, correction: 'Non. Un cas isolé tardif n\'établit pas une prédisposition héréditaire.' },
    ],
    explanation: 'Les indices du cours sont la précocité, les atteintes multiples et la récurrence familiale ; ils orientent vers le conseil et les tests adaptés. (Cours, p. 8)'
  },
  {
    id: 23,
    type: 'QCM',
    question: 'Dans le modèle de Knudson appliqué à une prédisposition par perte d\'un gène suppresseur de tumeur, que représente le « second événement » ?',
    options: [
      { text: 'La perte simultanée de tous les chromosomes de la cellule.', correct: false, correction: 'Non. Le modèle ne suppose pas une perte chromosomique globale.' },
      { text: 'Une mutation obligatoirement présente dès la fécondation sur la seconde copie.', correct: false, correction: 'Non. Dans la prédisposition classique, la seconde altération survient secondairement dans certaines cellules.' },
      { text: 'La transmission du variant au deuxième enfant de la famille.', correct: false, correction: 'Non. Le second événement concerne l\'autre copie du gène dans une cellule, pas une seconde transmission familiale.' },
      { text: 'Une altération acquise de l\'autre copie fonctionnelle du gène dans une cellule cible.', correct: true, correction: 'Oui. La perte de la seconde copie peut entraîner l\'inactivation biallélique dans la cellule à l\'origine de la tumeur.' },
      { text: 'L\'activation du même oncogène dans toutes les cellules de l\'organisme.', correct: false, correction: 'Non. Le modèle décrit ici l\'inactivation des deux copies d\'un suppresseur de tumeur dans un tissu cible.' },
    ],
    explanation: 'Une première altération constitutionnelle prédispose ; une seconde altération dans une cellule cible peut inactiver le gène suppresseur. (Cours, p. 8)'
  },
  {
    id: 24,
    type: 'QRM',
    question: 'À propos du modèle des deux événements décrit dans le cours, quelles affirmations sont justes ?',
    options: [
      { text: 'Porter le premier événement garantit qu\'un cancer apparaîtra immédiatement à la naissance.', correct: false, correction: 'Non. Prédisposition ne signifie ni cancer déjà présent ni survenue certaine et immédiate.' },
      { text: 'Le second événement se produit dans une cellule ou un tissu cible, et non nécessairement dans tout l\'organisme.', correct: true, correction: 'Oui. La tumeur naît d\'un clone cellulaire où l\'altération supplémentaire est apparue.' },
      { text: 'Une anomalie tumorale biallélique prouve que le premier événement était hérité d\'un parent.', correct: false, correction: 'Non. Les deux événements peuvent être somatiques, ou le premier constitutionnel de novo.' },
      { text: 'Chez un porteur d\'une prédisposition, une première copie du gène peut déjà être altérée constitutionnellement.', correct: true, correction: 'Oui. Cela explique pourquoi un événement supplémentaire peut suffire localement à inactiver les deux copies.' },
      { text: 'Une tumeur sporadique peut aussi perdre les deux copies d\'un suppresseur de tumeur par des événements acquis.', correct: true, correction: 'Oui. En l\'absence de prédisposition, les deux atteintes peuvent être somatiques.' },
    ],
    explanation: 'Le modèle rend compte de la différence entre deux atteintes somatiques et une atteinte constitutionnelle suivie d\'une atteinte somatique. (Cours, p. 8 et 10)'
  },
  {
    id: 25,
    type: 'QCM',
    question: 'Lorsqu\'un parent est hétérozygote pour un variant constitutionnel de prédisposition transmis sur un mode autosomique dominant, quel est le risque de transmettre ce variant à chacun de ses enfants ?',
    options: [
      { text: 'Un risque de 100 %, car le parent est porteur.', correct: false, correction: 'Non. Le parent hétérozygote peut aussi transmettre sa copie non porteuse.' },
      { text: 'Un risque de 25 % qui diminue après chaque enfant non porteur.', correct: false, correction: 'Non. Chaque conception constitue un nouvel événement de transmission.' },
      { text: 'Un risque de 50 % uniquement pour les filles.', correct: false, correction: 'Non. Le gène autosomique peut être transmis à une fille ou à un garçon.' },
      { text: 'Aucun risque si le parent porteur est un homme.', correct: false, correction: 'Non. Un homme peut transmettre une prédisposition autosomique à sa descendance.' },
      { text: 'Un risque de 50 % à chaque grossesse, indépendamment du sexe de l\'enfant.', correct: true, correction: 'Oui. Chaque enfant reçoit l\'une des deux copies parentales, avec une probabilité de moitié pour la copie porteuse.' },
    ],
    explanation: 'La plupart des prédispositions présentées dans ce cours ont une transmission autosomique dominante ; le risque de transmission n\'est pas identique à une certitude de cancer. (Cours, p. 9)'
  },
  {
    id: 26,
    type: 'QRM',
    question: 'À propos de l\'évaluation génétique d\'une famille avec suspicion de prédisposition, quelles propositions sont exactes ?',
    options: [
      { text: 'La mise en évidence d\'un variant familial permet ensuite une recherche ciblée chez les apparentés à risque.', correct: true, correction: 'Oui. Connaître précisément le variant facilite le test prédictif des proches concernés.' },
      { text: 'Un homme peut porter et transmettre un variant de prédisposition au cancer du sein.', correct: true, correction: 'Oui. Le caractère autosomique permet la transmission par les deux sexes.' },
      { text: 'Les caractéristiques de l\'arbre et les types de tumeurs guident le choix du test.', correct: true, correction: 'Oui. Le cours insiste sur une orientation du test selon le tableau clinique et familial.' },
      { text: 'Le sexe du parent suffit à décider qu\'aucune analyse n\'est utile dans sa branche familiale.', correct: false, correction: 'Non. Les hommes peuvent eux aussi porter et transmettre certains variants prédisposants.' },
      { text: 'Un résultat négatif chez une personne peu évocatrice exclut toute prédisposition dans la famille.', correct: false, correction: 'Non. Un résultat non informatif chez un apparenté peu atteint ne suffit pas à écarter une cause familiale.' },
    ],
    explanation: 'Le conseil génétique tient compte de l\'histoire familiale et privilégie une analyse informative avant de proposer des tests ciblés aux proches. (Cours, p. 9 et 21–23)'
  },
  {
    id: 27,
    type: 'QCM',
    question: 'Comment le cours interprète-t-il la tumeur cérébrale apparue après la tumeur rhabdoïde rénale chez le même enfant ?',
    options: [
      { text: 'Comme une récidive locale de la tumeur rénale, sans nouvelle tumeur primitive.', correct: false, correction: 'Non. Une atteinte cérébrale distincte n\'est pas une récidive locale rénale.' },
      { text: 'Comme la preuve qu\'aucune altération constitutionnelle ne pouvait être présente.', correct: false, correction: 'Non. Deux tumeurs primitives chez un nourrisson sont au contraire un argument pour rechercher une prédisposition.' },
      { text: 'Comme une métastase cérébrale nécessairement issue de la tumeur rénale.', correct: false, correction: 'Non. Le cours décrit explicitement deux tumeurs indépendantes.' },
      { text: 'Comme une seconde tumeur rhabdoïde primitive, distincte de la tumeur rénale.', correct: true, correction: 'Oui. Le cours précise qu\'il ne s\'agit pas d\'une métastase ; la multiplicité des tumeurs renforce la suspicion de prédisposition.' },
      { text: 'Comme un rétinoblastome causé par une altération constitutionnelle de RB1.', correct: false, correction: 'Non. Le cas concerne des tumeurs rhabdoïdes liées à SMARCB1, pas un rétinoblastome.' },
    ],
    explanation: 'La tumeur cérébrale était un nouveau foyer primitif rhabdoïde ; cette évolution a motivé l\'analyse constitutionnelle de SMARCB1. (Cours, p. 10)'
  },
  {
    id: 28,
    type: 'QRM',
    question: 'Dans l\'exemple de la tumeur rhabdoïde et du gène SMARCB1, quelles conclusions ou démarches sont correctes ?',
    options: [
      { text: 'Deux tumeurs primaires distinctes chez le même enfant peuvent renforcer la suspicion de prédisposition.', correct: true, correction: 'Oui. Le cas décrit une tumeur rénale puis une tumeur cérébrale indépendante.' },
      { text: 'Une perte immunohistochimique tumorale suffit toujours à affirmer que les parents ont transmis le variant.', correct: false, correction: 'Non. L\'immunohistochimie documente la tumeur, sans établir la transmission familiale.' },
      { text: 'La délétion des deux copies dans la tumeur établit une inactivation tumorale de SMARCB1.', correct: true, correction: 'Oui. Le cours décrit une délétion homozygote tumorale des exons 4 à 6.' },
      { text: 'Une anomalie trouvée uniquement dans la tumeur doit être interprétée comme constitutionnelle par définition.', correct: false, correction: 'Non. Une anomalie strictement tumorale peut être acquise.' },
      { text: 'La recherche du variant dans un prélèvement non tumoral aide à évaluer la prédisposition constitutionnelle.', correct: true, correction: 'Oui. Une copie altérée constitutionnellement a été retrouvée chez l\'enfant dans le cas clinique.' },
    ],
    explanation: 'L\'analyse tumorale établit le mécanisme local ; la comparaison avec un tissu non tumoral répond à la question de la prédisposition. (Cours, p. 9–10)'
  },
  {
    id: 29,
    type: 'QCM',
    question: 'Chez l\'enfant du cas clinique, quel constat a confirmé la prédisposition aux tumeurs rhabdoïdes ?',
    options: [
      { text: 'L\'absence de variant identifié chez les parents, sans analyse de l\'enfant.', correct: false, correction: 'Non. Le statut de l\'enfant doit être caractérisé ; un variant de novo reste possible.' },
      { text: 'La similitude histologique des deux tumeurs, qui démontre qu\'il s\'agissait d\'une métastase.', correct: false, correction: 'Non. Le cours précise au contraire que la tumeur cérébrale était une seconde tumeur indépendante.' },
      { text: 'L\'âge des parents au moment de la grossesse.', correct: false, correction: 'Non. Cette information n\'établit pas la nature du variant chez l\'enfant.' },
      { text: 'La seule localisation rénale de la première tumeur.', correct: false, correction: 'Non. La localisation rénale ne prouve pas une altération constitutionnelle.' },
      { text: 'La délétion SMARCB1 recherchée dans la tumeur a aussi été retrouvée à l\'état constitutionnel.', correct: true, correction: 'Oui. La présence dans un prélèvement non tumoral montre que l\'enfant portait le variant au-delà de la tumeur.' },
    ],
    explanation: 'La confirmation de l\'altération constitutionnelle chez l\'enfant distingue le syndrome de prédisposition d\'une atteinte uniquement tumorale. (Cours, p. 10)'
  },
  {
    id: 30,
    type: 'QRM',
    question: 'Après l\'identification d\'un variant constitutionnel SMARCB1 chez cet enfant, quels éléments sont pertinents pour le conseil génétique familial ?',
    options: [
      { text: 'Si l\'un des parents est porteur hétérozygote, considérer une probabilité de transmission de 50 % par grossesse.', correct: true, correction: 'Oui. La transmission d\'un variant autosomique dominant par un parent hétérozygote est de moitié.' },
      { text: 'Déduire de la perte de SMARCB1 dans la tumeur que les deux parents portent nécessairement le variant.', correct: false, correction: 'Non. Les anomalies tumorales n\'impliquent pas une transmission par les deux parents.' },
      { text: 'Discuter en conseil génétique les options adaptées si un risque de transmission est identifié.', correct: true, correction: 'Oui. Le cours évoque notamment les modalités de diagnostic chez une future grossesse.' },
      { text: 'Rechercher chez les parents le variant précis identifié chez l\'enfant.', correct: true, correction: 'Oui. Leur statut génétique informe l\'évaluation du risque pour les grossesses futures.' },
      { text: 'Si les deux prélèvements sanguins parentaux sont négatifs, annoncer un risque de récurrence absolument nul.', correct: false, correction: 'Non. Un mosaïcisme germinal parental peut laisser persister un risque résiduel.' },
    ],
    explanation: 'Une étude familiale ciblée suit l\'identification du variant chez l\'enfant ; un résultat parental négatif réduit le risque sans l\'annuler complètement. (Cours, p. 10)'
  },
  {
    id: 31,
    type: 'QCM',
    question: 'Quel sens donner au terme « de novo » lorsque le variant SMARCB1 constitutionnel de l\'enfant n\'est pas retrouvé chez ses parents dans les prélèvements étudiés ?',
    options: [
      { text: 'Le variant n\'existe que dans la tumeur et ne peut pas être constitutionnel chez l\'enfant.', correct: false, correction: 'Non. Dans ce cas, il a justement été identifié constitutionnellement chez l\'enfant.' },
      { text: 'Le risque pour la fratrie est rigoureusement égal à celui de la population générale.', correct: false, correction: 'Non. Un mosaïcisme germinal parental résiduel peut rendre le risque supérieur au risque de base.' },
      { text: 'Le variant est acquis par l\'enfant après sa deuxième tumeur uniquement.', correct: false, correction: 'Non. La présence constitutionnelle précède les deux événements tumoraux décrits.' },
      { text: 'Le variant existe nécessairement dans tous les gamètes des deux parents.', correct: false, correction: 'Non. Ce n\'est ni la définition de de novo ni ce que montrent leurs analyses.' },
      { text: 'Le variant est apparu chez l\'enfant ou dans un gamète parental, sans transmission constitutionnelle détectable chez les parents.', correct: true, correction: 'Oui. C\'est l\'interprétation d\'un variant apparemment de novo, avec réserve pour un éventuel mosaïcisme parental.' },
    ],
    explanation: 'Le caractère apparemment de novo est compatible avec des tests parentaux négatifs, mais n\'élimine pas un mosaïcisme de la lignée germinale. (Cours, p. 10)'
  },
  {
    id: 32,
    type: 'QRM',
    question: 'À propos du rétinoblastome, quelles propositions sont justes ?',
    options: [
      { text: 'Le caractère bilatéral oriente fortement vers une prédisposition RB1.', correct: true, correction: 'Oui. Les tumeurs bilatérales sont un signe majeur en faveur d\'une origine constitutionnelle.' },
      { text: 'La comparaison des anomalies tumorales RB1 avec l\'ADN non tumoral contribue à préciser le statut constitutionnel.', correct: true, correction: 'Oui. Elle recherche si une des altérations de RB1 est présente hors de la tumeur.' },
      { text: 'La majorité des rétinoblastomes constitue une transmission familiale avérée de parent à enfant.', correct: false, correction: 'Non. La plupart des cas n\'ont pas d\'antécédent familial ; une partie des variants germinaux survient de novo.' },
      { text: 'Il s\'agit d\'une tumeur de la rétine pouvant survenir avec ou sans prédisposition constitutionnelle.', correct: true, correction: 'Oui. Le cours distingue les formes sporadiques des formes associées à RB1 constitutionnel.' },
      { text: 'Une présentation unilatérale suffit à exclure un variant constitutionnel RB1.', correct: false, correction: 'Non. Une forme héréditaire peut aussi être unilatérale, notamment en cas de mosaïcisme ou de pénétrance variable.' },
    ],
    explanation: 'La présentation oriente mais l\'histoire familiale et l\'analyse génétique restent essentielles pour classer la prédisposition. (Cours, p. 16–17)'
  },
  {
    id: 33,
    type: 'QCM',
    question: 'Quel signe d\'appel oculaire du rétinoblastome correspond à un reflet blanc de la pupille ?',
    options: [
      { text: 'La leucocorie.', correct: true, correction: 'Oui. La leucocorie est le reflet pupillaire blanc décrit comme signe d\'appel du rétinoblastome.' },
      { text: 'La myopie.', correct: false, correction: 'Non. La myopie est un trouble de la réfraction, pas le nom du reflet blanc.' },
      { text: 'La mydriase.', correct: false, correction: 'Non. La mydriase désigne la dilatation de la pupille, pas le reflet blanc.' },
      { text: 'Le nystagmus.', correct: false, correction: 'Non. Le nystagmus est un mouvement involontaire des yeux.' },
      { text: 'Le myosis.', correct: false, correction: 'Non. Le myosis désigne le rétrécissement de la pupille.' },
    ],
    explanation: 'Une leucocorie chez un enfant nécessite une évaluation ophtalmologique rapide ; le diagnostic de rétinoblastome est établi par l\'examen rétinien. (Cours, p. 16)'
  },
  {
    id: 34,
    type: 'QRM',
    question: 'Quels indices renforcent la suspicion d\'une forme constitutionnelle RB1 chez un enfant atteint de rétinoblastome ?',
    options: [
      { text: 'Une atteinte bilatérale.', correct: true, correction: 'Oui. La bilatéralité est très évocatrice d\'une prédisposition RB1.' },
      { text: 'Un antécédent familial de rétinoblastome.', correct: true, correction: 'Oui. Une transmission familiale connue est un argument direct, même si son absence n\'exclut pas une forme héréditaire.' },
      { text: 'Plusieurs foyers tumoraux indépendants.', correct: true, correction: 'Oui. La multifocalité oriente vers une atteinte constitutionnelle.' },
      { text: 'Une révélation très précoce par rapport aux formes sporadiques.', correct: true, correction: 'Oui. Les formes constitutionnelles se manifestent en moyenne plus tôt dans les données du cours.' },
      { text: 'Un unique foyer unilatéral prouve systématiquement une forme constitutionnelle.', correct: false, correction: 'Non. Cette présentation est moins évocatrice et ne suffit pas à établir le statut constitutionnel.' },
    ],
    explanation: 'Le cours oppose les profils typiques, mais aucun profil clinique isolé ne remplace l\'analyse génétique lorsque celle-ci est indiquée. (Cours, p. 16–17)'
  },
  {
    id: 35,
    type: 'QCM',
    question: 'Quel gène suppresseur de tumeur est associé à la prédisposition au rétinoblastome présentée dans le cours ?',
    options: [
      { text: 'KRAS.', correct: false, correction: 'Non. KRAS est discuté comme oncogène tumoral dans le cancer colorectal.' },
      { text: 'SMARCB1.', correct: false, correction: 'Non. SMARCB1 est associé ici à la prédisposition aux tumeurs rhabdoïdes.' },
      { text: 'MSH2.', correct: false, correction: 'Non. MSH2 appartient aux gènes de réparation associés au syndrome de Lynch.' },
      { text: 'TP53.', correct: false, correction: 'Non. TP53 est associé au syndrome de Li-Fraumeni.' },
      { text: 'RB1.', correct: true, correction: 'Oui. Une altération constitutionnelle de RB1 peut prédisposer au rétinoblastome.' },
    ],
    explanation: 'RB1 illustre le modèle d\'inactivation d\'un gène suppresseur de tumeur : une copie peut être constitutionnellement altérée, l\'autre être perdue localement. (Cours, p. 16–17)'
  },
  {
    id: 36,
    type: 'QRM',
    question: 'Une mère porte un variant constitutionnel pathogène RB1. Quelles démarches ou interprétations sont correctes pour son nouveau-né ?',
    options: [
      { text: 'Un enfant non porteur du variant familial connu a un risque lié à ce variant fortement réduit.', correct: true, correction: 'Oui. Un test familial négatif permet de distinguer les enfants qui n\'ont pas hérité de ce variant.' },
      { text: 'Si l\'enfant porte le variant, un suivi ophtalmologique spécialisé précoce est indiqué.', correct: true, correction: 'Oui. La surveillance cherche à détecter et traiter rapidement une tumeur débutante.' },
      { text: 'Le prélèvement d\'une tumeur oculaire chez l\'enfant asymptomatique est nécessaire avant le test familial.', correct: false, correction: 'Non. Il n\'y a pas de tumeur à prélever ; le test ciblé se fait sur un prélèvement non tumoral.' },
      { text: 'L\'absence de symptôme oculaire à la naissance exclut la prédisposition.', correct: false, correction: 'Non. Le portage d\'un variant précède habituellement l\'apparition éventuelle d\'une tumeur.' },
      { text: 'Le variant familial identifié peut être recherché de façon ciblée chez l\'enfant.', correct: true, correction: 'Oui. Connaître la variation maternelle permet un test prédictif ciblé.' },
    ],
    explanation: 'Dans l\'exemple du cours, le conseil avant ou après la naissance et le test familial guident la surveillance de l\'enfant à risque. (Cours, p. 17–18)'
  },
  {
    id: 37,
    type: 'QCM',
    question: 'Pourquoi surveille-t-on aussi l\'œil encore sain chez un enfant porteur d\'un variant constitutionnel pathogène de RB1 ?',
    options: [
      { text: 'Parce que l\'autre œil peut développer une tumeur rétinienne primitive indépendante.', correct: true, correction: 'Oui. Le variant constitutionnel prédispose les cellules des deux yeux ; une nouvelle atteinte locale peut apparaître dans l\'œil sain.' },
      { text: 'Parce que la tumeur initiale se propage obligatoirement et immédiatement vers l\'autre œil.', correct: false, correction: 'Non. La surveillance cherche notamment une autre tumeur primitive ; une propagation obligatoire n\'est pas décrite.' },
      { text: 'Parce qu\'un fond d\'œil normal prouve que l\'enfant n\'a pas hérité du variant.', correct: false, correction: 'Non. Un examen normal à un moment donné ne remplace pas le test génétique et n\'exclut pas une tumeur future.' },
      { text: 'Parce que RB1 n\'est exprimé que dans l\'œil indemne.', correct: false, correction: 'Non. Le variant constitutionnel n\'est pas limité à l\'œil encore sain.' },
      { text: 'Parce que la surveillance oculaire permet de déterminer quel parent a transmis le variant.', correct: false, correction: 'Non. La transmission familiale se précise par l\'histoire et l\'analyse génétiques, non par le seul fond d\'œil.' },
    ],
    explanation: 'Une prédisposition RB1 constitutionnelle expose aussi l\'œil initialement indemne ; des fonds d\'œil répétés permettent de détecter tôt une nouvelle tumeur. (Cours, p. 17–18)'
  },
  {
    id: 38,
    type: 'QRM',
    question: 'Quels cancers appartiennent au spectre classique évoquant un syndrome de Li-Fraumeni ?',
    options: [
      { text: 'Un cancer du sein préménopausique.', correct: true, correction: 'Oui. Le cancer du sein précoce figure également dans le spectre décrit.' },
      { text: 'Un sarcome des tissus mous survenant précocement.', correct: true, correction: 'Oui. Les sarcomes sont un groupe majeur du spectre Li-Fraumeni.' },
      { text: 'Une tumeur rénale rhabdoïde due à une perte de SMARCB1 comme marqueur spécifique de Li-Fraumeni.', correct: false, correction: 'Non. La tumeur rhabdoïde SMARCB1 relève de la prédisposition distincte présentée dans le cours.' },
      { text: 'Une tumeur cérébrale de l\'enfant.', correct: true, correction: 'Oui. Les tumeurs du système nerveux central figurent parmi les atteintes typiques.' },
      { text: 'Un corticosurrénalome de l\'enfant.', correct: true, correction: 'Oui. Le corticosurrénalome pédiatrique est un signal particulièrement évocateur.' },
    ],
    explanation: 'Li-Fraumeni se distingue par une variété d\'organes atteints, souvent à des âges inhabituels. (Cours, p. 18)'
  },
  {
    id: 39,
    type: 'QCM',
    question: 'Quel gène de prédisposition est associé au syndrome de Li-Fraumeni dans le cours ?',
    options: [
      { text: 'SMARCB1.', correct: false, correction: 'Non. SMARCB1 est lié à la prédisposition aux tumeurs rhabdoïdes.' },
      { text: 'TP53.', correct: true, correction: 'Oui. Un variant constitutionnel pathogène de TP53 peut être responsable d\'un syndrome de Li-Fraumeni.' },
      { text: 'MSH6.', correct: false, correction: 'Non. MSH6 est l\'un des gènes du syndrome de Lynch.' },
      { text: 'BRCA2.', correct: false, correction: 'Non. BRCA2 est présenté parmi les prédispositions au cancer du sein et de l\'ovaire.' },
      { text: 'RB1.', correct: false, correction: 'Non. RB1 est lié au rétinoblastome héréditaire.' },
    ],
    explanation: 'L\'association d\'une grande diversité de cancers primitifs précoces dans une famille oriente vers une évaluation de TP53. (Cours, p. 18–19)'
  },
  {
    id: 40,
    type: 'QRM',
    question: 'À propos du syndrome de Li-Fraumeni et de sa surveillance, quelles propositions sont justes ?',
    options: [
      { text: 'Des cancers de types différents et précoces peuvent survenir chez plusieurs membres d\'une même famille.', correct: true, correction: 'Oui. Le cours illustre des tumeurs cérébrales, des sarcomes et des cancers du sein précoces dans des familles concernées.' },
      { text: 'Une IRM mammaire peut faire partie de la surveillance d\'une femme adulte porteuse.', correct: true, correction: 'Oui. Le risque de cancer du sein fait prévoir une surveillance spécifique selon l\'âge et les recommandations.' },
      { text: 'L\'absence de variant TP53 dans le sang d\'un parent rend biologiquement impossible tout mosaïcisme germinal.', correct: false, correction: 'Non. Un mosaïcisme limité à la lignée germinale peut échapper au prélèvement sanguin.' },
      { text: 'Une IRM cérébrale dédiée peut compléter l\'IRM corps entier.', correct: true, correction: 'Oui. L\'examen ciblé du cerveau apporte une exploration distincte plus détaillée.' },
      { text: 'La surveillance peut inclure une IRM corps entier régulière.', correct: true, correction: 'Oui. Elle contribue à rechercher des tumeurs dans plusieurs organes à risque.' },
    ],
    explanation: 'La surveillance est personnalisée en centre spécialisé, compte tenu du spectre tumoral étendu ; l\'arbre familial ne dispense pas d\'une interprétation génétique prudente. (Cours, p. 18–19)'
  },
  {
    id: 41,
    type: 'QCM',
    question: 'Parmi les gènes suivants, lequel est présenté dans le cours comme un partenaire de BRCA2 impliqué dans la prédisposition au cancer du sein ?',
    options: [
      { text: 'KRAS', correct: false, correction: 'Non. KRAS est un oncogène dont une altération tumorale peut guider une thérapie, pas le partenaire de BRCA2 demandé ici.' },
      { text: 'PALB2', correct: true, correction: 'Oui. PALB2 participe à la voie de réparation de l\'ADN avec BRCA2 et fait partie des gènes de prédisposition étudiés.' },
      { text: 'TP53', correct: false, correction: 'Non. TP53 est notamment lié au syndrome de Li-Fraumeni, pas le partenaire de BRCA2 visé par la question.' },
      { text: 'MSH2', correct: false, correction: 'Non. MSH2 appartient à la voie de réparation des mésappariements associée au syndrome de Lynch.' },
      { text: 'EGFR', correct: false, correction: 'Non. EGFR est un récepteur de facteur de croissance, pas le gène partenaire de BRCA2 cité dans cette section.' },
    ],
    explanation: 'BRCA1, BRCA2 et PALB2 figurent parmi les gènes de prédisposition au cancer du sein étudiés dans le cours ; PALB2 est le partenaire de BRCA2. (Cours, p. 20)'
  },
  {
    id: 42,
    type: 'QRM',
    question: 'À propos d\'un variant pathogène constitutionnel de BRCA2, quelles propositions sont justes ?',
    options: [
      { text: 'Il ne peut concerner que les femmes.', correct: false, correction: 'Non. Les hommes peuvent porter et transmettre le variant, et certains de leurs risques tumoraux sont augmentés.' },
      { text: 'Il entraîne nécessairement un cancer de l\'ovaire chez toute femme porteuse.', correct: false, correction: 'Non. Une prédisposition augmente un risque sans rendre le cancer certain : la pénétrance n\'est pas complète.' },
      { text: 'Il peut augmenter le risque de cancer du sein chez un homme.', correct: true, correction: 'Oui. Le cancer du sein masculin est rare, mais fait partie des risques associés à BRCA2.' },
      { text: 'Il peut être associé à un risque accru de cancer de la prostate.', correct: true, correction: 'Oui. Le cours mentionne aussi la prostate parmi les organes à risque chez les hommes porteurs de BRCA2.' },
      { text: 'Il peut être transmis par un père comme par une mère.', correct: true, correction: 'Oui. La transmission autosomique ne dépend pas du sexe du parent porteur.' },
    ],
    explanation: 'Un variant constitutionnel de BRCA2 est transmissible dans les deux sexes et confère des risques variables, sans imposer la survenue d\'un cancer. (Cours, p. 20–22)'
  },
  {
    id: 43,
    type: 'QCM',
    question: 'Dans une famille où plusieurs personnes ont eu un cancer du sein, qui constitue en général le meilleur premier cas à tester pour rechercher une prédisposition héréditaire ?',
    options: [
      { text: 'La personne indemne la plus jeune, quel que soit le pedigree.', correct: false, correction: 'Non. Tester en premier une personne indemne est moins informatif lorsqu\'une personne atteinte évocatrice est disponible.' },
      { text: 'Toute personne de la famille, car le résultat initial a la même valeur informative chez tous.', correct: false, correction: 'Non. La valeur informative varie selon le statut tumoral, l\'âge au diagnostic et les autres éléments du pedigree.' },
      { text: 'La personne atteinte du cancer le plus tardif, indépendamment des autres cas.', correct: false, correction: 'Non. Un cancer tardif isolé peut être sporadique et ne maximise pas la probabilité de trouver le variant familial.' },
      { text: 'Un homme indemne pris au hasard dans la branche paternelle.', correct: false, correction: 'Non. Le choix repose sur l\'histoire personnelle et familiale évocatrice, pas sur une sélection arbitraire.' },
      { text: 'Une personne atteinte dont l\'histoire est la plus évocatrice, par exemple un cancer précoce ou bilatéral.', correct: true, correction: 'Oui. Le cas index le plus informatif est d\'abord une personne atteinte avec des signes forts de prédisposition.' },
    ],
    explanation: 'Le cours insiste sur le choix d\'un bon cas index : une personne atteinte ayant la plus forte probabilité de porter une prédisposition familiale. (Cours, p. 20–21 et 23)'
  },
  {
    id: 44,
    type: 'QRM',
    question: 'Quels éléments d\'une histoire familiale renforcent la suspicion d\'une prédisposition héréditaire sein–ovaire ?',
    options: [
      { text: 'L\'absence de cancer chez un apparenté suffit à écarter une prédisposition dans toute la famille.', correct: false, correction: 'Non. Une pénétrance incomplète permet à une personne porteuse de rester indemne.' },
      { text: 'Un cancer du sein à un âge inhabituellement jeune.', correct: true, correction: 'Oui. Un âge précoce de révélation augmente la suspicion d\'une forme héréditaire.' },
      { text: 'Plusieurs cancers du sein dans la même branche familiale.', correct: true, correction: 'Oui. La récurrence familiale d\'un même groupe tumoral est un signal d\'alerte.' },
      { text: 'Un cancer du sein bilatéral chez une apparentée.', correct: true, correction: 'Oui. Des atteintes multiples ou bilatérales renforcent l\'hypothèse de prédisposition.' },
      { text: 'Une association de cancers du sein et de l\'ovaire dans la famille.', correct: true, correction: 'Oui. Cette association correspond au spectre des prédispositions BRCA1/BRCA2 discutées dans le cours.' },
    ],
    explanation: 'On interprète ensemble les types de cancer, la récurrence, l\'âge au diagnostic et les atteintes bilatérales ; un seul apparenté indemne n\'exclut rien. (Cours, p. 20–22)'
  },
  {
    id: 45,
    type: 'QCM',
    question: 'Un variant pathogène familial de BRCA1 a été identifié chez une femme atteinte. Quel examen génétique est le plus adapté à proposer ensuite à un apparenté qui souhaite connaître son statut ?',
    options: [
      { text: 'Un dosage sanguin de PARP, qui identifie les porteurs de BRCA1.', correct: false, correction: 'Non. Le dosage de PARP n\'est pas le test familial de BRCA1 décrit dans le cours.' },
      { text: 'Un test ciblé recherchant le variant familial déjà identifié.', correct: true, correction: 'Oui. Une fois le variant causal connu, la recherche ciblée chez les apparentés est la démarche du test en cascade.' },
      { text: 'Une analyse tumorale sur une tumeur inexistante chez l\'apparenté indemne.', correct: false, correction: 'Non. L\'apparenté indemne n\'a pas de tissu tumoral à analyser ; le test porte ici sur le variant constitutionnel familial.' },
      { text: 'Un test de tous les gènes chez chaque apparenté, sans tenir compte du résultat initial.', correct: false, correction: 'Non. La connaissance du variant familial permet un test beaucoup plus ciblé chez les apparentés.' },
      { text: 'Une mammographie destinée à déterminer directement son génotype.', correct: false, correction: 'Non. L\'imagerie surveille un organe mais n\'établit pas la présence du variant familial.' },
    ],
    explanation: 'L\'analyse large concerne d\'abord le cas index ; quand un variant est identifié, le dépistage des apparentés repose sur sa recherche ciblée. (Cours, p. 21 et 23)'
  },
  {
    id: 46,
    type: 'QRM',
    question: 'Une personne porte un variant pathogène constitutionnel hétérozygote de BRCA1. Que peut-on dire pour chacun de ses enfants biologiques, avant tout test ?',
    options: [
      { text: 'Ce risque de transmission est le même pour les filles et les garçons.', correct: true, correction: 'Oui. BRCA1 est autosomique ; le sexe de l\'enfant ne change pas la probabilité d\'hériter du variant.' },
      { text: 'Le résultat génétique d\'un premier enfant modifie mécaniquement la probabilité pour le suivant.', correct: false, correction: 'Non. Chaque transmission méiotique est un événement distinct ; le risque de 1 sur 2 se renouvelle.' },
      { text: 'Hériter du variant équivaut à développer obligatoirement un cancer.', correct: false, correction: 'Non. La transmission du variant et la survenue clinique d\'un cancer sont deux événements différents.' },
      { text: 'Chaque enfant a une probabilité de 1 sur 2 d\'hériter du variant.', correct: true, correction: 'Oui. Pour une transmission autosomique dominante d\'un variant hétérozygote, chaque conception a un risque de transmission de 50 %.' },
      { text: 'Le variant se transmet uniquement par les mères.', correct: false, correction: 'Non. Un père porteur peut transmettre un variant autosomique à ses enfants.' },
    ],
    explanation: 'La probabilité de transmission d\'un variant autosomique hétérozygote est de 50 % à chaque enfant, quel que soit son sexe ; ce n\'est pas une probabilité de cancer. (Cours, p. 22)'
  },
  {
    id: 47,
    type: 'QCM',
    question: 'Une femme porte le variant pathogène familial BRCA2 mais n\'a développé aucun cancer. Quelle interprétation est correcte ?',
    options: [
      { text: 'Son absence de cancer est compatible avec une pénétrance incomplète ; elle peut néanmoins transmettre le variant.', correct: true, correction: 'Oui. Être indemne n\'efface ni le génotype constitutionnel ni sa transmissibilité.' },
      { text: 'Elle ne porte plus le variant puisqu\'aucun cancer n\'est apparu.', correct: false, correction: 'Non. Le variant constitutionnel persiste indépendamment du phénotype tumoral.' },
      { text: 'Ses fils ne peuvent pas hériter de BRCA2.', correct: false, correction: 'Non. Les fils, comme les filles, peuvent hériter d\'un variant autosomique.' },
      { text: 'Le variant a nécessairement sauté sa génération sur le plan génétique.', correct: false, correction: 'Non. Un phénotype absent ne signifie pas que le variant génétique est absent.' },
      { text: 'Un cancer du sein ne peut se produire chez aucun de ses enfants.', correct: false, correction: 'Non. L\'absence de cancer chez la mère n\'annule pas la prédisposition éventuelle de ses enfants.' },
    ],
    explanation: 'Il faut distinguer transmission d\'un variant et expression clinique : un porteur peut rester indemne et transmettre le variant. (Cours, p. 22)'
  },
  {
    id: 48,
    type: 'QRM',
    question: 'Une famille possède un variant pathogène BRCA1 précisément identifié. Un apparenté a un test constitutionnel ciblé négatif pour ce variant. Quelles conclusions sont appropriées ?',
    options: [
      { text: 'Il n\'aura jamais aucun cancer, de quelque origine que ce soit.', correct: false, correction: 'Non. L\'absence du variant familial n\'annule pas le risque général de cancer.' },
      { text: 'Il n\'a pas hérité du variant familial recherché.', correct: true, correction: 'Oui. Un test ciblé négatif fiable signifie que cette altération familiale précise n\'est pas présente chez lui.' },
      { text: 'Il ne peut pas transmettre ce variant familial à ses enfants.', correct: true, correction: 'Oui. Il ne transmet pas un variant qu\'il ne porte pas.' },
      { text: 'Son résultat autorise à discuter le suivi en fonction de son risque propre, plutôt qu\'à le classer porteur de BRCA1.', correct: true, correction: 'Oui. Le suivi doit être réévalué à partir de l\'ensemble des facteurs personnels et familiaux après ce vrai négatif.' },
      { text: 'Tous ses apparentés, y compris ses frères et sœurs, sont forcément négatifs.', correct: false, correction: 'Non. Chaque enfant du parent porteur a reçu ou non le variant indépendamment des autres.' },
    ],
    explanation: 'Un vrai négatif pour une altération familiale connue exclut sa transmission par cet apparenté ; il ne supprime pas les risques de cancer de la population générale. (Cours, p. 22 ; voir aussi p. 26)'
  },
  {
    id: 49,
    type: 'QCM',
    question: 'Aucun variant de prédisposition n\'est identifié chez le meilleur cas index, mais plusieurs cancers du sein précoces et bilatéraux sont documentés dans sa famille. Quelle attitude est la plus juste ?',
    options: [
      { text: 'Conclure avec certitude qu\'aucune prédisposition héréditaire n\'existe.', correct: false, correction: 'Non. Les gènes connus et les tests disponibles ne rendent pas toute prédisposition identifiable.' },
      { text: 'Ignorer l\'arbre généalogique, car seul un test positif compte pour la surveillance.', correct: false, correction: 'Non. L\'histoire familiale reste déterminante, y compris lorsque l\'analyse génétique est négative.' },
      { text: 'Tester seulement des apparentés indemnes pour prouver que les cancers étaient sporadiques.', correct: false, correction: 'Non. Un test négatif chez une personne indemne sans variant familial connu serait peu informatif.' },
      { text: 'Évaluer le risque familial et discuter une surveillance adaptée malgré ce résultat négatif.', correct: true, correction: 'Oui. Un test non contributif n\'efface pas les éléments du pedigree ; le niveau de risque guide le suivi.' },
      { text: 'Appliquer automatiquement la même chirurgie préventive à toute la famille.', correct: false, correction: 'Non. Les décisions sont individualisées selon le risque évalué et les préférences des personnes concernées.' },
    ],
    explanation: 'Une forte histoire familiale peut conduire à un suivi spécifique même lorsqu\'aucun variant n\'a été mis en évidence. (Cours, p. 22–24)'
  },
  {
    id: 50,
    type: 'QRM',
    question: 'Selon le tableau comparatif du cours, quelles comparaisons des risques cumulés sont justes ?',
    options: [
      { text: 'Le risque de cancer du sein chez la femme est plus élevé avec BRCA1 ou BRCA2 qu\'en population générale.', correct: true, correction: 'Oui. Le tableau indique une hausse du risque pour les deux gènes, à des niveaux différents.' },
      { text: 'BRCA1 et BRCA2 donnent exactement le même risque pour chaque organe.', correct: false, correction: 'Non. Les risques diffèrent selon le gène et l\'organe considéré.' },
      { text: 'BRCA2 diminue le risque de cancer de la prostate par rapport à la population générale.', correct: false, correction: 'Non. Le tableau présente au contraire un risque prostatique accru.' },
      { text: 'Le risque de cancer du sein chez l\'homme porteur de BRCA2 est supérieur à celui de la population générale.', correct: true, correction: 'Oui. Le cancer reste rare chez l\'homme, mais le risque augmente avec BRCA2.' },
      { text: 'Dans ce tableau, le risque de cancer de l\'ovaire est plus élevé avec BRCA1 qu\'avec BRCA2.', correct: true, correction: 'Oui. La valeur présentée pour BRCA1 dépasse celle de BRCA2.' },
    ],
    explanation: 'Le tableau montre des risques augmentés mais distincts selon le gène, l\'organe et le sexe ; ces estimations de groupe ne prédisent pas le destin individuel. (Cours, p. 20)'
  },
  {
    id: 51,
    type: 'QCM',
    question: 'Quel examen d\'imagerie occupe une place majeure dans la surveillance mammaire d\'une femme à très haut risque lié à BRCA1/BRCA2 ?',
    options: [
      { text: 'La radiographie pulmonaire.', correct: false, correction: 'Non. Elle n\'est pas un examen de dépistage du cancer du sein à haut risque.' },
      { text: 'L\'IRM mammaire.', correct: true, correction: 'Oui. L\'IRM mammaire est un examen central de la surveillance à haut risque décrite dans le cours.' },
      { text: 'La tomodensitométrie cérébrale.', correct: false, correction: 'Non. Elle explore un autre organe et n\'est pas la surveillance mammaire visée.' },
      { text: 'L\'échographie pelvienne seule.', correct: false, correction: 'Non. Elle concerne le pelvis et ne permet pas la surveillance du tissu mammaire.' },
      { text: 'La scintigraphie osseuse systématique.', correct: false, correction: 'Non. Elle ne remplace pas l\'imagerie mammaire de surveillance chez une personne asymptomatique.' },
    ],
    explanation: 'Le cours décrit une surveillance mammaire renforcée incluant l\'IRM chez les personnes à très haut risque ; le calendrier exact est individualisé. (Cours, p. 23)'
  },
  {
    id: 52,
    type: 'QRM',
    question: 'Concernant la surveillance ou la prévention mammaire chez une porteuse d\'un variant pathogène BRCA, quelles propositions sont justes ?',
    options: [
      { text: 'Le choix entre les options tient compte de la situation et des préférences de la personne.', correct: true, correction: 'Oui. La décision est individualisée et appartient à la personne après information spécialisée.' },
      { text: 'Une IRM normale garantit qu\'aucun cancer mammaire ne surviendra ensuite.', correct: false, correction: 'Non. Une imagerie rassurante à un instant donné ne supprime pas le risque futur.' },
      { text: 'La mastectomie de réduction du risque peut être discutée comme option préventive.', correct: true, correction: 'Oui. Le cours la présente comme une possibilité à discuter avec la patiente, et non comme une obligation automatique.' },
      { text: 'La découverte d\'un variant impose immédiatement une mastectomie à toute porteuse.', correct: false, correction: 'Non. La chirurgie préventive est une option discutée, pas une conséquence obligatoire du test.' },
      { text: 'Une surveillance mammaire renforcée peut comporter IRM et mammographie selon un protocole spécialisé.', correct: true, correction: 'Oui. L\'imagerie est une option structurée de détection précoce chez les personnes à très haut risque.' },
    ],
    explanation: 'Surveillance renforcée et chirurgie de réduction du risque sont des stratégies distinctes et discutées en oncogénétique avec la personne concernée. (Cours, p. 23)'
  },
  {
    id: 53,
    type: 'QCM',
    question: 'Pourquoi une mastectomie de réduction du risque ne permet-elle pas d\'annoncer un risque mammaire absolument nul ?',
    options: [
      { text: 'La mammographie recrée systématiquement une tumeur après l\'intervention.', correct: false, correction: 'Non. Il n\'existe pas ce mécanisme systématique ; le risque résiduel tient notamment au tissu restant.' },
      { text: 'La chirurgie augmente forcément le nombre de cellules mammaires.', correct: false, correction: 'Non. Elle retire la plus grande partie du tissu mammaire, elle ne l\'accroît pas.' },
      { text: 'La chirurgie transforme obligatoirement BRCA1 en BRCA2.', correct: false, correction: 'Non. Une opération ne modifie pas le variant constitutionnel porté par la personne.' },
      { text: 'Le risque de cancer disparaît uniquement si une chimiothérapie accompagne toujours l\'opération.', correct: false, correction: 'Non. La chimiothérapie systématique n\'est pas la condition expliquant l\'efficacité de la chirurgie préventive.' },
      { text: 'Du tissu mammaire résiduel peut subsister malgré l\'intervention.', correct: true, correction: 'Oui. L\'exérèse réduit fortement le risque mais peut laisser quelques cellules mammaires.' },
    ],
    explanation: 'La mastectomie préventive réduit beaucoup le risque, sans le rendre mathématiquement nul, car du tissu mammaire peut rester. (Cours, p. 23)'
  },
  {
    id: 54,
    type: 'QRM',
    question: 'À propos du risque ovarien lié à BRCA1/BRCA2, quelles propositions correspondent au cours et à la démarche de prévention ?',
    options: [
      { text: 'Une échographie ovarienne annuelle négative annule le risque ultérieur.', correct: false, correction: 'Non. Une échographie négative ne garantit ni l\'absence future de cancer ni un dépistage suffisamment fiable.' },
      { text: 'La salpingo-ovariectomie de réduction du risque retire les trompes et les ovaires.', correct: true, correction: 'Oui. C\'est l\'intervention préventive décrite dans le cours pour le risque tubo-ovarien.' },
      { text: 'Le moment de cette chirurgie se discute selon le gène, l\'histoire personnelle et le projet de vie.', correct: true, correction: 'Oui. Les recommandations ne se résument pas à une règle identique pour toutes les porteuses.' },
      { text: 'Il n\'existe pas de méthode de dépistage ovarien démontrée suffisamment efficace pour remplacer une discussion de chirurgie préventive.', correct: true, correction: 'Oui. L\'absence de dépistage performant motive la place de l\'annexectomie de réduction du risque.' },
      { text: 'La même décision chirurgicale s\'impose automatiquement à toutes les personnes porteuses de PALB2.', correct: false, correction: 'Non. Le risque et l\'indication doivent être évalués de façon individualisée ; le cours distingue les gènes.' },
    ],
    explanation: 'La prévention tubo-ovarienne repose principalement sur une discussion spécialisée de la chirurgie, faute de dépistage efficace ; le calendrier est individualisé. (Cours, p. 23)'
  },
  {
    id: 55,
    type: 'QCM',
    question: 'Quel est l\'objectif principal d\'une consultation d\'oncogénétique avant de choisir un cas index et d\'interpréter un éventuel test ?',
    options: [
      { text: 'Prescrire automatiquement une mastectomie à chaque membre de la famille.', correct: false, correction: 'Non. La consultation commence par l\'évaluation du risque et une discussion individualisée, pas une chirurgie automatique.' },
      { text: 'Reconstituer les antécédents personnels et familiaux et établir l\'arbre généalogique.', correct: true, correction: 'Oui. Le pedigree et les diagnostics documentés orientent la suspicion, le choix du cas index et la prise en charge.' },
      { text: 'Déduire le génotype de tous les apparentés à partir de leur âge seul.', correct: false, correction: 'Non. L\'âge est informatif mais ne révèle pas à lui seul le statut génétique de chacun.' },
      { text: 'Écarter la branche paternelle de l\'arbre.', correct: false, correction: 'Non. Les variants BRCA peuvent aussi être transmis par un père.' },
      { text: 'Remplacer tout document médical antérieur par les souvenirs de la famille.', correct: false, correction: 'Non. Le cours indique au contraire que les comptes rendus des cancers des apparentés sont utiles pour confirmer les diagnostics.' },
    ],
    explanation: 'L\'arbre généalogique, étayé par les informations médicales, précède et guide les analyses génétiques et les décisions de suivi. (Cours, p. 21–23)'
  },
  {
    id: 56,
    type: 'QRM',
    question: 'Une personne atteinte du cancer du sein a un pedigree très évocateur. Quels principes de la démarche génétique familiale sont corrects ?',
    options: [
      { text: 'Tenir compte des diagnostics, des âges et de la branche familiale dans l\'arbre.', correct: true, correction: 'Oui. Ces éléments structurent l\'évaluation du risque familial.' },
      { text: 'Choisir d\'abord le cas index le plus informatif parmi les personnes atteintes accessibles.', correct: true, correction: 'Oui. La probabilité de découvrir l\'altération familiale est meilleure avec un cas atteint très évocateur.' },
      { text: 'Supposer que seuls les enfants de sexe féminin d\'un père porteur peuvent hériter du variant.', correct: false, correction: 'Non. Pour BRCA, garçons et filles peuvent hériter d\'un variant autosomique.' },
      { text: 'Interpréter un résultat négatif chez un apparenté indemne exactement comme un vrai négatif ciblé, même si aucun variant familial n\'a été identifié.', correct: false, correction: 'Non. Sans variant familial connu, un résultat négatif peut être peu informatif et ne permet pas de conclure pareillement.' },
      { text: 'Rechercher ensuite chez les apparentés le variant familial identifié, s\'il a été trouvé.', correct: true, correction: 'Oui. La connaissance du variant familial permet un test ciblé en cascade.' },
    ],
    explanation: 'La stratégie suit le pedigree : cas index évocateur, recherche de l\'altération, puis test ciblé des apparentés ; l\'interprétation d\'un test négatif dépend du contexte. (Cours, p. 21–23)'
  },
  {
    id: 57,
    type: 'QCM',
    question: 'Quel type de lésion de l\'ADN est principalement pris en charge par la voie de recombinaison homologue impliquant BRCA1/BRCA2 dans l\'explication du cours ?',
    options: [
      { text: 'Le remplacement direct des membranes mitochondriales.', correct: false, correction: 'Non. La voie BRCA concerne la réparation de l\'ADN, pas la reconstruction membranaire.' },
      { text: 'La seule rupture d\'une liaison peptidique dans une protéine.', correct: false, correction: 'Non. Ce n\'est pas une lésion de l\'ADN ni la cible de la voie BRCA.' },
      { text: 'L\'élimination des cellules sanguines âgées.', correct: false, correction: 'Non. Il s\'agit d\'un autre processus physiologique, sans rapport avec BRCA1/BRCA2.' },
      { text: 'Les cassures double brin.', correct: true, correction: 'Oui. BRCA1/BRCA2 participent à la réparation par recombinaison homologue des cassures double brin.' },
      { text: 'La traduction de l\'ARN messager sur les ribosomes.', correct: false, correction: 'Non. La traduction est une étape de synthèse protéique, sans lien direct avec la lésion demandée.' },
    ],
    explanation: 'Dans le mécanisme présenté, BRCA1/BRCA2 contribuent à réparer les cassures double brin de l\'ADN. (Cours, p. 7)'
  },
  {
    id: 58,
    type: 'QRM',
    question: 'Pourquoi un inhibiteur de PARP peut-il être particulièrement utile contre une tumeur présentant un déficit de réparation par recombinaison homologue, notamment lié à BRCA ?',
    options: [
      { text: 'Les lésions non réparées peuvent conduire à des cassures double brin lors de la réplication.', correct: true, correction: 'Oui. L\'accumulation de ces lésions rend la voie BRCA de réparation des cassures double brin particulièrement importante.' },
      { text: 'Tout porteur constitutionnel de BRCA doit recevoir un inhibiteur de PARP en prévention, même sans tumeur.', correct: false, correction: 'Non. Le traitement est discuté dans un contexte tumoral et selon des indications spécifiques, pas comme prévention systématique.' },
      { text: 'PARP participe normalement à la réponse aux lésions simple brin de l\'ADN.', correct: true, correction: 'Oui. Bloquer PARP empêche une voie de réparation dont la cellule tumorale dépend davantage en présence d\'un déficit BRCA.' },
      { text: 'L\'inhibiteur de PARP agit en réparant directement les cassures double brin.', correct: false, correction: 'Non. Il inhibe une enzyme de réparation ; il ne remplace pas la voie BRCA.' },
      { text: 'Une cellule tumorale déficiente en réparation homologue tolère moins bien cette double atteinte des voies de réparation.', correct: true, correction: 'Oui. La létalité synthétique exploite la vulnérabilité de la cellule déficiente en réparation homologue.' },
    ],
    explanation: 'L\'inhibition de PARP exploite la vulnérabilité des tumeurs dont la réparation homologue est déficiente ; les indications réelles dépendent du contexte tumoral. (Cours, p. 7)'
  },
  {
    id: 59,
    type: 'QCM',
    question: 'Une analyse d\'une tumeur ovarienne révèle un variant pathogène BRCA1. Quelle étape est nécessaire pour savoir si cette altération correspond à une prédisposition héréditaire transmissible ?',
    options: [
      { text: 'Déclarer d\'emblée tous les enfants porteurs du variant.', correct: false, correction: 'Non. Il faut établir le statut constitutionnel maternel puis, si indiqué, proposer un test familial ciblé ; la transmission n\'est jamais certaine pour tous.' },
      { text: 'Rechercher le variant dans l\'ADN constitutionnel de la patiente, avec une démarche d\'oncogénétique adaptée.', correct: true, correction: 'Oui. Une altération vue dans la tumeur peut être somatique ou constitutionnelle ; seul un test constitutionnel adapté les distingue.' },
      { text: 'Utiliser uniquement l\'âge de la patiente pour conclure à la transmissibilité.', correct: false, correction: 'Non. L\'âge aide à évaluer le risque mais ne tranche pas l\'origine somatique ou constitutionnelle du variant.' },
      { text: 'Supposer qu\'il est forcément somatique parce qu\'il a été détecté dans une tumeur.', correct: false, correction: 'Non. Une altération constitutionnelle peut être retrouvée dans les cellules tumorales.' },
      { text: 'Supposer qu\'il est forcément constitutionnel puisque BRCA1 est un gène de prédisposition.', correct: false, correction: 'Non. BRCA1 peut aussi être altéré uniquement dans la tumeur.' },
    ],
    explanation: 'Une altération BRCA tumorale peut guider le traitement sans être nécessairement héritée ; sa présence constitutionnelle se vérifie séparément. (Cours, p. 7 et 21–23)'
  },
  {
    id: 60,
    type: 'QRM',
    question: 'Une femme indemne consulte car sa tante maternelle a eu un cancer de l\'ovaire et un variant pathogène BRCA2 constitutionnel identifié. Quelles propositions sont justes ?',
    options: [
      { text: 'Il faut ignorer les hommes de la branche maternelle, qui ne peuvent ni porter ni transmettre BRCA2.', correct: false, correction: 'Non. Les hommes sont des relais possibles d\'un variant BRCA2 autosomique.' },
      { text: 'Un résultat positif signifierait prédisposition, sans certitude de développer un cancer.', correct: true, correction: 'Oui. Un variant pathogène augmente le risque mais sa pénétrance n\'est pas complète.' },
      { text: 'Un résultat négatif pour le variant familial prouverait l\'absence de tout risque de cancer au cours de sa vie.', correct: false, correction: 'Non. Un vrai négatif exclut ce variant précis, pas le risque général de cancer.' },
      { text: 'Un test ciblé du variant familial peut être discuté dans le cadre d\'une démarche de conseil génétique.', correct: true, correction: 'Oui. Le variant de la tante est connu ; la recherche familiale peut donc être ciblée.' },
      { text: 'La consultation peut reconstituer le pedigree et préciser le lien de parenté avec la porteuse.', correct: true, correction: 'Oui. L\'évaluation familiale précède l\'interprétation du risque et la proposition de test.' },
    ],
    explanation: 'On part du pedigree et du variant familial connu, puis on propose si indiqué un test ciblé dont le résultat guide un suivi individualisé. (Cours, p. 20–23)'
  },
  {
    id: 61,
    type: 'QCM',
    question: 'Quelle ancienne appellation du syndrome de Lynch est mentionnée dans le cours ?',
    options: [
      { text: 'Rétinoblastome héréditaire', correct: false, correction: 'Non. Il est notamment lié à RB1 et n\'est pas l\'ancien nom de Lynch.' },
      { text: 'Syndrome de Li-Fraumeni', correct: false, correction: 'Non. Ce syndrome renvoie à une autre prédisposition, notamment liée à TP53.' },
      { text: 'Syndrome de prédisposition aux tumeurs rhabdoïdes', correct: false, correction: 'Non. Il concerne notamment SMARCB1, pas la prédisposition digestive de Lynch.' },
      { text: 'Leucémie myéloïde chronique', correct: false, correction: 'Non. C\'est une hémopathie associée à BCR-ABL1, pas l\'appellation demandée.' },
      { text: 'HNPCC', correct: true, correction: 'Oui. C\'est l\'ancienne dénomination citée pour cette prédisposition au cancer colorectal sans polypose caractéristique.' },
    ],
    explanation: 'Le cours indique que le syndrome de Lynch était auparavant appelé HNPCC, pour hereditary non-polyposis colorectal cancer. (Cours, p. 24)'
  },
  {
    id: 62,
    type: 'QRM',
    question: 'Quels gènes codant des protéines MMR sont associés au syndrome de Lynch dans le cours ?',
    options: [
      { text: 'MSH6', correct: true, correction: 'Oui. Il agit dans le système MMR avec d\'autres partenaires.' },
      { text: 'MSH2', correct: true, correction: 'Oui. Il participe à la reconnaissance des erreurs de copie de l\'ADN.' },
      { text: 'BRCA2', correct: false, correction: 'Non. BRCA2 relève d\'une autre voie de réparation et de prédisposition, surtout sein/ovaire.' },
      { text: 'PMS2', correct: true, correction: 'Oui. Il est inclus dans les quatre gènes MMR énumérés par le support.' },
      { text: 'MLH1', correct: true, correction: 'Oui. Il code une protéine centrale de la réparation des mésappariements.' },
    ],
    explanation: 'Ces quatre gènes MMR sont ceux énumérés dans le cours ; certaines délétions d\'EPCAM peuvent aussi entraîner un syndrome de Lynch par extinction de MSH2. (Cours, p. 24 ; GeneReviews, Lynch Syndrome)'
  },
  {
    id: 63,
    type: 'QCM',
    question: 'Quelle fonction cellulaire est assurée par les protéines MMR ?',
    options: [
      { text: 'Détruire sélectivement les cellules qui portent un variant BRCA2', correct: false, correction: 'Non. Le MMR corrige des erreurs de copie ; il n\'élimine pas directement les cellules BRCA2 mutées.' },
      { text: 'Réparer principalement les cassures double brin par la voie BRCA1/BRCA2', correct: false, correction: 'Non. Cette fonction relève surtout de la recombinaison homologue, pas du MMR.' },
      { text: 'Corriger les erreurs d\'appariement survenues lors de la réplication de l\'ADN', correct: true, correction: 'Oui. Cette réparation limite l\'accumulation d\'erreurs de copie.' },
      { text: 'Détecter les lésions simple brin par l\'activité de PARP', correct: false, correction: 'Non. PARP participe à une autre réponse aux dommages de l\'ADN.' },
      { text: 'Activer la prolifération cellulaire en relayant le signal d\'EGFR', correct: false, correction: 'Non. Cette signalisation implique notamment RAS ; elle ne définit pas le MMR.' },
    ],
    explanation: 'MMR signifie mismatch repair : ce système corrige des erreurs d\'appariement qui échappent à la réplication de l\'ADN. (Cours, p. 24)'
  },
  {
    id: 64,
    type: 'QRM',
    question: 'Quelles propositions relient correctement un défaut MMR à l\'analyse tumorale ?',
    options: [
      { text: 'Un résultat tumoral remplace toujours l\'analyse constitutionnelle des apparentés', correct: false, correction: 'Non. La recherche d\'une prédisposition transmissible demande une évaluation spécifique.' },
      { text: 'Une tumeur MSI prouve automatiquement une mutation familiale BRCA1', correct: false, correction: 'Non. MSI concerne d\'abord la voie MMR et peut avoir plusieurs causes.' },
      { text: 'Une tumeur déficiente en MMR ne prouve pas à elle seule une mutation constitutionnelle', correct: true, correction: 'Oui. Des causes somatiques existent ; il faut distinguer test tumoral et diagnostic germinal.' },
      { text: 'L\'immunohistochimie peut rechercher la perte d\'expression d\'une protéine MMR dans la tumeur', correct: true, correction: 'Oui. La perte oriente la suite du bilan selon la protéine concernée.' },
      { text: 'Un défaut MMR peut favoriser l\'accumulation d\'erreurs dans les microsatellites', correct: true, correction: 'Oui. L\'instabilité microsatellitaire, ou MSI, peut en résulter.' },
    ],
    explanation: 'Le cours présente la fonction MMR ; les tests MSI et immunohistochimiques permettent d\'explorer la tumeur, puis d\'orienter si besoin l\'analyse constitutionnelle. (Cours, p. 24 ; EHTG/ESCP, 2021)'
  },
  {
    id: 65,
    type: 'QCM',
    question: 'Pourquoi une prédisposition constitutionnelle au syndrome de Lynch peut-elle se transmettre de façon dominante alors que la cellule tumorale perd souvent l\'activité des deux copies d\'un gène suppresseur ?',
    options: [
      { text: 'Le second événement somatique est obligatoirement hérité du même parent que le premier variant', correct: false, correction: 'Non. Le second événement est acquis dans une cellule ; il n\'est pas obligatoirement hérité.' },
      { text: 'Les mutations somatiques de la tumeur sont automatiquement transmises aux enfants', correct: false, correction: 'Non. Seules les altérations présentes dans la lignée germinale peuvent être transmises.' },
      { text: 'Une première copie altérée est héritée ; un second événement peut survenir dans une cellule', correct: true, correction: 'Oui. Le risque se transmet avec l\'altération constitutionnelle, tandis que la tumeur exige d\'autres événements somatiques.' },
      { text: 'Toutes les cellules portent nécessairement deux variants hérités des deux parents', correct: false, correction: 'Non. La forme habituelle correspond à un variant constitutionnel hétérozygote.' },
      { text: 'La transmission dominante garantit un cancer chez chaque porteur', correct: false, correction: 'Non. La pénétrance est incomplète et dépend notamment du gène et de l\'âge.' },
    ],
    explanation: 'Le modèle des deux événements se lit au niveau d\'une cellule ; l\'hérédité dominante de la prédisposition porte sur la première altération constitutionnelle. (Cours, p. 8, 24–26)'
  },
  {
    id: 66,
    type: 'QRM',
    question: 'Quels organes appartiennent au spectre tumoral évoqué pour le syndrome de Lynch ?',
    options: [
      { text: 'L\'estomac et l\'intestin grêle', correct: true, correction: 'Oui. Le support mentionne aussi ces localisations digestives.' },
      { text: 'Le côlon et le rectum', correct: true, correction: 'Oui. Le risque colorectal est l\'un des plus importants dans ce syndrome.' },
      { text: 'L\'ovaire', correct: true, correction: 'Oui. Il fait partie du spectre extracolorectal, avec un risque variable selon le gène.' },
      { text: 'L\'endomètre', correct: true, correction: 'Oui. Le cours insiste sur ce cancer chez les personnes ayant un utérus.' },
      { text: 'Exclusivement la rétine', correct: false, correction: 'Non. La prédisposition au rétinoblastome concerne principalement RB1, pas le spectre de Lynch.' },
    ],
    explanation: 'Le spectre de Lynch dépasse le côlon et l\'endomètre ; les risques par organe varient selon le gène MMR. (Cours, p. 24–25)'
  },
  {
    id: 67,
    type: 'QCM',
    question: 'Quel gène du syndrome de Lynch est décrit dans le support comme associé en moyenne à un risque tumoral plus faible que les autres gènes MMR cités ?',
    options: [
      { text: 'TP53', correct: false, correction: 'Non. Il relève du syndrome de Li-Fraumeni, pas du groupe MMR demandé.' },
      { text: 'MSH2', correct: false, correction: 'Non. Il peut être associé à un spectre extracolorectal marqué.' },
      { text: 'BRCA2', correct: false, correction: 'Non. Il n\'est pas l\'un des quatre gènes MMR du support.' },
      { text: 'PMS2', correct: true, correction: 'Oui. Sa pénétrance moyenne est plus faible, sans être nulle.' },
      { text: 'MLH1', correct: false, correction: 'Non. Il est plutôt associé à un risque colorectal important.' },
    ],
    explanation: 'Le tableau de risques du cours donne des plages larges ; la comparaison par gène est plus utile qu\'un chiffre unique pour tout le syndrome. (Cours, p. 24–25)'
  },
  {
    id: 68,
    type: 'QRM',
    question: 'Quelles nuances sont nécessaires pour interpréter le risque d\'un porteur de variant MMR pathogène ?',
    options: [
      { text: 'Un porteur développera forcément un cancer avant 25 ans', correct: false, correction: 'Non. Aucun âge de survenue n\'est garanti et les risques diffèrent selon les gènes.' },
      { text: 'Le gène concerné influence le niveau et le type de risque', correct: true, correction: 'Oui. MLH1, MSH2, MSH6 et PMS2 ne donnent pas un profil identique.' },
      { text: 'Un variant PMS2 pathogène ne peut jamais favoriser de tumeur', correct: false, correction: 'Non. Le risque est en moyenne moindre, mais non nul.' },
      { text: 'La pénétrance est variable, même au sein d\'une famille', correct: true, correction: 'Oui. Porter le variant ne garantit ni le même cancer ni le même âge de survenue.' },
      { text: 'L\'âge et les antécédents familiaux interviennent dans l\'évaluation', correct: true, correction: 'Oui. Le contexte clinique affine l\'appréciation du risque.' },
    ],
    explanation: 'Le cours souligne une variabilité selon le gène et au sein des familles ; l\'estimation de risque ne se réduit pas au seul statut « Lynch ». (Cours, p. 24–25)'
  },
  {
    id: 69,
    type: 'QCM',
    question: 'Quelle combinaison d\'indices du cas clinique du support oriente vers un syndrome de Lynch ?',
    options: [
      { text: 'Un seul cancer cutané tardif sans autre antécédent', correct: false, correction: 'Non. Il n\'apporte pas le faisceau d\'arguments montré dans le cas.' },
      { text: 'Une leucocorie sans tumeur digestive ou endométriale', correct: false, correction: 'Non. Ce signe évoque un rétinoblastome plutôt que le cas de Lynch décrit.' },
      { text: 'Cancer de l\'endomètre jeune puis cancer colorectal et plusieurs apparentés atteints', correct: true, correction: 'Oui. Cette association de sites, d\'âge et de récurrence familiale est fortement évocatrice.' },
      { text: 'Une mutation activatrice isolée de KRAS dans une tumeur du côlon', correct: false, correction: 'Non. Une altération somatique KRAS ne démontre pas un syndrome de Lynch.' },
      { text: 'Un rétinoblastome bilatéral isolé chez un nourrisson', correct: false, correction: 'Non. Il oriente d\'abord vers une prédisposition liée à RB1.' },
    ],
    explanation: 'Le scénario présenté associe tumeurs colorectale et endométriale, âge précoce et histoire familiale ; ces indices justifient un bilan d\'oncogénétique. (Cours, p. 25)'
  },
  {
    id: 70,
    type: 'QRM',
    question: 'Quels éléments d\'un arbre familial renforcent une suspicion de prédisposition de type Lynch ?',
    options: [
      { text: 'Une personne présentant plusieurs tumeurs primaires du spectre', correct: true, correction: 'Oui. La multiplicité peut renforcer la suspicion.' },
      { text: 'La certitude qu\'un cancer fréquent isolé est toujours héréditaire', correct: false, correction: 'Non. Un cancer isolé peut survenir sans prédisposition constitutionnelle.' },
      { text: 'Des diagnostics à un âge relativement jeune', correct: true, correction: 'Oui. La précocité est un signal d\'alerte parmi d\'autres.' },
      { text: 'L\'exigence que tous les porteurs soient malades au même âge', correct: false, correction: 'Non. L\'âge de révélation et la pénétrance varient.' },
      { text: 'Plusieurs cancers colorectaux ou endométriaux dans la même branche familiale', correct: true, correction: 'Oui. Une récurrence de tumeurs du spectre est informative.' },
    ],
    explanation: 'Les deux cas du cours montrent une répétition familiale et une variabilité d\'âge : l\'arbre généalogique guide l\'indication d\'analyse, sans suffire à poser seul le diagnostic. (Cours, p. 25–26)'
  },
  {
    id: 71,
    type: 'QCM',
    question: 'Quel examen constitue la base de la surveillance colorectale d\'une personne porteuse d\'un variant pathogène responsable d\'un syndrome de Lynch ?',
    options: [
      { text: 'L\'IRM mammaire comme unique examen digestif', correct: false, correction: 'Non. Elle ne surveille pas le côlon.' },
      { text: 'La radiographie pulmonaire annuelle uniquement', correct: false, correction: 'Non. Elle ne constitue pas la surveillance colorectale recommandée.' },
      { text: 'La coloscopie selon un calendrier individualisé', correct: true, correction: 'Oui. Elle permet de rechercher et retirer des lésions précancéreuses dans tout le côlon.' },
      { text: 'Une seule recherche de sang dans les selles à vie', correct: false, correction: 'Non. Le dépistage de population générale ne remplace pas la surveillance dédiée d\'un porteur.' },
      { text: 'Aucune surveillance si le porteur n\'a encore jamais eu de cancer', correct: false, correction: 'Non. Le but est précisément d\'anticiper la survenue de lésions.' },
    ],
    explanation: 'Le cours met en avant la coloscopie ; le calendrier doit tenir compte du gène et du contexte familial. (Cours, p. 25 ; EHTG/ESCP, 2021)'
  },
  {
    id: 72,
    type: 'QRM',
    question: 'Quelles propositions reflètent les recommandations européennes plutôt qu\'un âge de début identique pour tous les gènes Lynch ?',
    options: [
      { text: 'Les variants MLH1 ou MSH2 conduisent généralement à commencer plus tôt', correct: true, correction: 'Oui. Les lignes directrices européennes proposent 25 ans pour ces gènes.' },
      { text: 'La décision ignore totalement les antécédents personnels et familiaux', correct: false, correction: 'Non. Ces facteurs peuvent modifier le calendrier individuel.' },
      { text: 'Le début de la coloscopie est modulé selon le gène MMR', correct: true, correction: 'Oui. Les groupes MLH1/MSH2 et MSH6/PMS2 n\'ont pas le même âge usuel de début.' },
      { text: 'Les variants MSH6 ou PMS2 peuvent conduire à commencer plus tard', correct: true, correction: 'Oui. Les mêmes recommandations proposent 35 ans, avec adaptation au contexte.' },
      { text: 'La coloscopie débute obligatoirement à 25 ans pour toute personne porteuse, quel que soit le gène', correct: false, correction: 'Non. C\'est une simplification du support qui ne reflète pas la stratification européenne.' },
    ],
    explanation: 'Le support annonce 25 ans pour tous ; les recommandations EHTG/ESCP distinguent en général MLH1/MSH2 (25 ans) de MSH6/PMS2 (35 ans). (Cours, p. 25 ; EHTG/ESCP, 2021)'
  },
  {
    id: 73,
    type: 'QCM',
    question: 'Quelle affirmation est la plus prudente concernant la surveillance gynécologique du syndrome de Lynch ?',
    options: [
      { text: 'Le syndrome de Lynch ne concerne jamais l\'endomètre', correct: false, correction: 'Non. L\'endomètre fait partie des principaux organes à risque.' },
      { text: 'Aucun symptôme de saignement anormal ne mérite d\'évaluation', correct: false, correction: 'Non. Un saignement anormal doit au contraire être évalué rapidement.' },
      { text: 'Informer sur les symptômes d\'alerte et discuter les options avec une équipe spécialisée', correct: true, correction: 'Oui. Le dépistage par échographie seule n\'a pas démontré à lui seul une réduction de mortalité.' },
      { text: 'Une échographie endométriale normale exclut définitivement un cancer', correct: false, correction: 'Non. Un examen normal ponctuel ne confère pas cette garantie.' },
      { text: 'Toutes les personnes porteuses doivent subir la même chirurgie au même âge', correct: false, correction: 'Non. Les décisions tiennent compte du gène, du projet de grossesse et des préférences.' },
    ],
    explanation: 'Le cours cite l\'échographie, mais les consensus récents soulignent ses limites ; la vigilance symptomatique et les choix de prévention se discutent individuellement. (Cours, p. 25–26 ; Manchester Consensus, 2019)'
  },
  {
    id: 74,
    type: 'QRM',
    question: 'Quelles composantes peuvent entrer dans la prise en charge préventive d\'un syndrome de Lynch confirmé ?',
    options: [
      { text: 'Une information sur les signes d\'alerte gynécologiques', correct: true, correction: 'Oui. Les symptômes endométriaux ou ovariens justifient une évaluation.' },
      { text: 'Une discussion individualisée d\'une chirurgie de réduction du risque après le projet parental, selon la situation', correct: true, correction: 'Oui. Cette option se discute avec les personnes concernées et l\'équipe spécialisée.' },
      { text: 'L\'arrêt de toute évaluation dès que le premier contrôle est normal', correct: false, correction: 'Non. Le risque persiste dans le temps chez les porteurs d\'un variant pathogène.' },
      { text: 'Une surveillance coloscopique adaptée au gène et à la famille', correct: true, correction: 'Oui. Elle est centrale pour le risque colorectal.' },
      { text: 'La même échographie seule pour tous, garantie de prévention de tous les cancers', correct: false, correction: 'Non. Aucun examen unique ne couvre l\'ensemble des risques ni ne garantit leur absence.' },
    ],
    explanation: 'Le support évoque coloscopie et chirurgie préventive ; les modalités sont individualisées plutôt que déduites d\'une règle unique. (Cours, p. 25–26 ; EHTG/ESCP, 2021)'
  },
  {
    id: 75,
    type: 'QCM',
    question: 'Quelle localisation extracolorectale le cours relie-t-il plus particulièrement à MSH2 dans le syndrome de Lynch ?',
    options: [
      { text: 'Les voies urinaires', correct: true, correction: 'Oui. Le support les cite parmi les organes à risque, notamment pour MSH2.' },
      { text: 'Les sarcomes des tissus mous exclusivement', correct: false, correction: 'Non. Ces tumeurs évoquent davantage d\'autres prédispositions, notamment Li-Fraumeni.' },
      { text: 'Le tissu mammaire uniquement', correct: false, correction: 'Non. Le sein n\'est pas la localisation extracolorectale signalée ici pour MSH2.' },
      { text: 'La rétine', correct: false, correction: 'Non. Le rétinoblastome héréditaire est surtout lié à RB1.' },
      { text: 'Les tumeurs rhabdoïdes du nourrisson', correct: false, correction: 'Non. Elles relèvent notamment d\'une prédisposition SMARCB1, et non du lien demandé.' },
    ],
    explanation: 'Le spectre de Lynch inclut les voies urinaires, avec une association particulièrement mentionnée pour MSH2. (Cours, p. 24)'
  },
  {
    id: 76,
    type: 'QRM',
    question: 'Dans une famille ayant un variant pathogène MSH2 identifié, une femme a développé un cancer colorectal à 31 ans et un grand-père porteur un cancer du spectre à 82 ans. Quelles interprétations sont justes ?',
    options: [
      { text: 'Tous les porteurs de ce variant doivent développer le même cancer au même âge', correct: false, correction: 'Non. La pénétrance et l\'âge de révélation sont variables.' },
      { text: 'Le cancer tardif du grand-père n\'écarte pas à lui seul la prédisposition familiale', correct: true, correction: 'Oui. L\'âge tardif d\'un apparenté ne neutralise pas la preuve génétique ni les autres indices familiaux.' },
      { text: 'Le variant MSH2 ne peut être transmis que par une femme atteinte d\'un cancer', correct: false, correction: 'Non. Il s\'agit d\'un variant autosomique qui peut être transmis par un parent de l\'un ou l\'autre sexe, même indemne.' },
      { text: 'Un même variant familial peut s\'exprimer à des âges très différents', correct: true, correction: 'Oui. Le cours illustre cette variabilité avec des âges de diagnostic éloignés.' },
      { text: 'Des facteurs modificateurs peuvent contribuer aux différences d\'expression', correct: true, correction: 'Oui. Le cours mentionne des variants modificateurs parmi les explications possibles.' },
    ],
    explanation: 'Le cas familial du cours montre que la même prédisposition peut s\'exprimer très tôt ou tardivement ; le génotype ne fixe pas un âge unique de cancer. (Cours, p. 25)'
  },
  {
    id: 77,
    type: 'QCM',
    question: 'Pourquoi une tumeur déficiente en MMR ne suffit-elle pas à elle seule à conclure à un syndrome de Lynch héréditaire ?',
    options: [
      { text: 'Toute anomalie tumorale est forcément présente chez tous les apparentés', correct: false, correction: 'Non. Une mutation acquise dans une tumeur n\'est pas automatiquement transmissible.' },
      { text: 'Une tumeur déficiente en MMR exclut tout rôle de MLH1 ou MSH2', correct: false, correction: 'Non. Une altération de ces gènes peut précisément expliquer la déficience.' },
      { text: 'La recherche de MSI est un test de filiation familiale', correct: false, correction: 'Non. Elle caractérise la tumeur et ne génotype pas les apparentés.' },
      { text: 'Un défaut MMR tumoral peut résulter d\'événements acquis limités à la tumeur', correct: true, correction: 'Oui. La distinction entre cause somatique et constitutionnelle demande une analyse adaptée.' },
      { text: 'Le MMR n\'existe que dans les cellules tumorales', correct: false, correction: 'Non. Les cellules normales disposent aussi de ce système de réparation.' },
    ],
    explanation: 'La génétique tumorale peut orienter vers Lynch, mais seul un bilan constitutionnel approprié établit la nature transmissible de l\'altération. (Cours, p. 5, 24–26 ; GeneReviews, Lynch Syndrome)'
  },
  {
    id: 78,
    type: 'QRM',
    question: 'Quelles démarches aident à distinguer une altération acquise d\'une prédisposition héréditaire ?',
    options: [
      { text: 'Examiner une éventuelle altération constitutionnelle dans un prélèvement non tumoral', correct: true, correction: 'Oui. Ce test précise si un variant est présent au-delà de la tumeur.' },
      { text: 'Analyser les caractéristiques moléculaires de la tumeur', correct: true, correction: 'Oui. Des marqueurs tumoraux peuvent faire suspecter une voie de réparation déficiente.' },
      { text: 'Considérer qu\'un résultat tumoral seul prouve toujours une transmission aux enfants', correct: false, correction: 'Non. La transmissibilité suppose une altération germinale ou une mosaïque germinale pertinente.' },
      { text: 'Reconstituer l\'histoire personnelle et familiale des cancers', correct: true, correction: 'Oui. Âge, organes et répétition orientent l\'évaluation.' },
      { text: 'Comparer, quand c\'est indiqué, résultats tumoraux et constitutionnels', correct: true, correction: 'Oui. Cette comparaison permet de mieux attribuer l\'origine d\'un variant.' },
    ],
    explanation: 'Le cours conclut à la complémentarité de la génétique tumorale et de la génétique constitutionnelle lorsqu\'une prédisposition est suspectée. (Cours, p. 5, 26)'
  },
  {
    id: 79,
    type: 'QCM',
    question: 'Quel signe familial doit particulièrement faire rechercher une prédisposition héréditaire au cancer ?',
    options: [
      { text: 'Des cancers du même spectre survenant précocement chez plusieurs apparentés d\'une branche familiale', correct: true, correction: 'Oui. La répétition, la précocité et la cohérence des organes renforcent ensemble la suspicion.' },
      { text: 'L\'absence de toute histoire familiale comme preuve absolue d\'absence de variant constitutionnel', correct: false, correction: 'Non. Une mutation de novo, une petite famille ou une pénétrance incomplète peuvent masquer l\'histoire.' },
      { text: 'Une mutation somatique isolée observée dans une seule tumeur', correct: false, correction: 'Non. Elle ne démontre pas une altération constitutionnelle familiale.' },
      { text: 'La présence de cancers chez des voisins sans lien biologique', correct: false, correction: 'Non. Cela ne constitue pas un argument de transmission familiale.' },
      { text: 'Une seule tumeur fréquente tardive, sans autre élément', correct: false, correction: 'Non. Elle peut relever d\'un risque sporadique.' },
    ],
    explanation: 'Le support retient surtout la récurrence de cancers apparentés et l\'âge précoce ; ces indices orientent, sans confirmer à eux seuls un syndrome héréditaire. (Cours, p. 26)'
  },
  {
    id: 80,
    type: 'QRM',
    question: 'Quelles associations entre syndrome, gène et mécanisme sont correctes pour une synthèse du cours ?',
    options: [
      { text: 'Lynch — KRAS — mutation activatrice obligatoire transmise dans chaque famille', correct: false, correction: 'Non. KRAS tumoral est un biomarqueur somatique, pas le gène constitutionnel classique de Lynch.' },
      { text: 'Rétinoblastome héréditaire — RB1 — perte de fonction d\'un suppresseur de tumeur', correct: true, correction: 'Oui. Une première altération constitutionnelle facilite un second événement dans la rétine.' },
      { text: 'Prédisposition sein–ovaire — BRCA1/BRCA2 — défaut de recombinaison homologue', correct: true, correction: 'Oui. Ces gènes participent à la réparation fidèle des cassures double brin.' },
      { text: 'Li-Fraumeni — TP53 — prédisposition à de nombreux types de cancers', correct: true, correction: 'Oui. Le spectre tumoral est large et peut se manifester tôt.' },
      { text: 'Lynch — MLH1/MSH2/MSH6/PMS2 — défaut de réparation des mésappariements', correct: true, correction: 'Oui. Leur inactivation perturbe le système MMR.' },
    ],
    explanation: 'Les quatre exemples majeurs du cours illustrent des voies distinctes de prédisposition ; il faut séparer ces variants constitutionnels des altérations somatiques utilisées pour guider un traitement. (Cours, p. 3–8, 16–26)'
  },
]
