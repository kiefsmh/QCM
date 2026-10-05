export const meta = {
  title: 'Méthodologies diagnostiques en hématologie',
}

export default [
  {
    id: 1,
    type: 'QCM',
    question: 'Quelle succession décrit correctement l\'origine médullaire des grandes lignées sanguines ?',
    options: [
      { text: 'Les cellules sanguines matures constituent l\'unique point de départ de l\'hématopoïèse', correct: false, correction: 'Non chef. La production part de cellules souches et de progéniteurs médullaires.' },
      { text: 'Le progéniteur myéloïde commun ne peut produire que des globules rouges', correct: false, correction: 'Non. Il mène aussi notamment aux plaquettes, aux polynucléaires et aux monocytes.' },
      { text: 'Une cellule souche hématopoïétique donne des progéniteurs myéloïdes et lymphoïdes', correct: true, correction: 'Oui boss 🧠 Ces deux branches résument l\'organisation initiale de l\'hématopoïèse.' },
      { text: 'Le progéniteur lymphoïde commun est l\'origine principale des hématies et des plaquettes', correct: false, correction: 'Non chef. Ces deux produits relèvent de la branche myéloïde dans le schéma du cours.' },
      { text: 'Les lymphocytes B et T dérivent directement du progéniteur myéloïde commun', correct: false, correction: 'Faux. Le schéma les rattache à la branche lymphoïde.' },
    ],
    explanation: 'La cellule souche hématopoïétique est à l\'origine des branches myéloïde et lymphoïde, qui aboutissent aux principales cellules sanguines. (Cours, p. 2)'
  },
  {
    id: 2,
    type: 'QRM',
    question: 'Dans le schéma de différenciation du cours, quels produits relèvent surtout de la branche myéloïde ?',
    options: [
      { text: 'Les polynucléaires neutrophiles', correct: true, correction: 'Oui. Ils relèvent de la granulopoïèse myéloïde.' },
      { text: 'Les lymphocytes B matures', correct: false, correction: 'Non chef. Le schéma les place dans la branche lymphoïde.' },
      { text: 'Les plaquettes, via les mégacaryocytes', correct: true, correction: 'Exact. Les mégacaryocytes produisent les plaquettes.' },
      { text: 'Les globules rouges', correct: true, correction: 'Oui boss. L\'érythropoïèse se rattache à la branche myéloïde.' },
      { text: 'Les monocytes', correct: true, correction: 'Exact 🧠 Ils figurent parmi les descendants myéloïdes du schéma.' },
    ],
    explanation: 'Le cours associe à la branche myéloïde les hématies, plaquettes, polynucléaires et monocytes ; les lymphocytes B appartiennent à la branche lymphoïde. (Cours, p. 2)'
  },
  {
    id: 3,
    type: 'QCM',
    question: 'Quel mécanisme général caractérise une leucémie aiguë dans la présentation du cours ?',
    options: [
      { text: 'Une augmentation des réticulocytes après une hémorragie', correct: false, correction: 'Non chef. Une régénération érythroïde n\'est pas une leucémie aiguë.' },
      { text: 'Une hémolyse isolée par déficit en G6PD', correct: false, correction: 'Non. Ce mécanisme concerne le globule rouge et n\'est pas une accumulation médullaire de blastes.' },
      { text: 'Une accumulation de blastes liée à une prolifération associée à un défaut de différenciation', correct: true, correction: 'Oui boss 🎯 Les cellules immatures se multiplient et envahissent la moelle.' },
      { text: 'Une production normale de cellules matures sans anomalie clonale', correct: false, correction: 'Faux. La prolifération de cellules bloquées dans leur maturation est l\'idée importante ici.' },
      { text: 'Une simple baisse isolée de la ferritine sans prolifération cellulaire', correct: false, correction: 'Non chef. Cela oriente plutôt vers un problème de réserve en fer, pas vers la définition d\'une leucémie aiguë.' },
    ],
    explanation: 'Dans la leucémie aiguë, la prolifération d\'une population immature de blastes accompagne un blocage de différenciation et peut envahir la moelle. (Cours, p. 2–3)'
  },
  {
    id: 4,
    type: 'QRM',
    question: 'À propos des hémopathies prolifératives présentées p. 2–4, quelles propositions sont justes ?',
    options: [
      { text: 'Une leucémie aiguë myéloïde appartient à la branche myéloïde', correct: true, correction: 'Oui boss. Myéloïde indique ici la lignée, pas seulement le lieu médullaire.' },
      { text: 'Une leucémie aiguë lymphoblastique appartient à la branche lymphoïde', correct: true, correction: 'Exact. Les blastes dérivent alors de la lignée lymphoïde.' },
      { text: 'La leucémie lymphoïde chronique est une prolifération de polynucléaires neutrophiles', correct: false, correction: 'Faux. La LLC concerne principalement des lymphocytes B matures, malgré la coquille du support.' },
      { text: 'Des hémopathies myéloprolifératives chroniques peuvent s\'accompagner d\'une production accrue de cellules relativement matures', correct: true, correction: 'Oui. C\'est le contraste schématique avec l\'accumulation de blastes d\'une leucémie aiguë.' },
      { text: 'Le terme « chronique » garantit qu\'aucune phase avancée ou blastique ne peut survenir', correct: false, correction: 'Non chef. La chronicité ne garantit ni bénignité ni impossibilité d\'évolution ; celle-ci dépend de la maladie.' },
    ],
    explanation: 'Le cours distingue schématiquement prolifération blastique aiguë et proliférations chroniques plus différenciées. La LLC relève de lymphocytes B, et l\'évolution vers une phase blastique n\'est pas universelle. (Cours, p. 2–4 ; coquille rectifiée)'
  },
  {
    id: 5,
    type: 'QCM',
    question: 'Dans quelle affection la production accrue concerne principalement la lignée érythrocytaire ?',
    options: [
      { text: 'La drépanocytose', correct: false, correction: 'Non. Il s\'agit d\'une anomalie qualitative de l\'hémoglobine, pas d\'une polyglobulie primitive.' },
      { text: 'La thrombocytémie essentielle', correct: false, correction: 'Non chef. Elle concerne d\'abord une production excessive de plaquettes.' },
      { text: 'La carence martiale', correct: false, correction: 'Non chef. Un manque de fer tend plutôt à limiter la production d\'hémoglobine.' },
      { text: 'La leucémie lymphoïde chronique', correct: false, correction: 'Faux. La LLC est une hémopathie de lymphocytes B matures.' },
      { text: 'La polyglobulie primitive ou maladie de Vaquez', correct: true, correction: 'Oui boss 🩸 Le cours la relie à l\'excès de globules rouges.' },
    ],
    explanation: 'La maladie de Vaquez correspond à la polyglobulie primitive ; la thrombocytémie essentielle concerne surtout les plaquettes et représente une entité distincte. (Cours, p. 3)'
  },
  {
    id: 6,
    type: 'QRM',
    question: 'Quelles associations maladie–lignée ou mécanisme sont correctes ?',
    options: [
      { text: 'Thrombocytémie essentielle : excès clonal de plaquettes', correct: true, correction: 'Oui boss. C\'est une néoplasie myéloproliférative à dominante plaquettaire.' },
      { text: 'Leucémie myéloïde chronique : néoplasie myéloïde avec prolifération granulocytaire', correct: true, correction: 'Oui. La LMC n\'est pas simplement un synonyme d\'excès de n\'importe quelle lignée.' },
      { text: 'Leucémie lymphoïde chronique : prolifération de polynucléaires neutrophiles', correct: false, correction: 'Non chef. Cette ligne du support est erronée : il s\'agit de lymphocytes B matures.' },
      { text: 'Vaquez et thrombocytémie essentielle : deux noms pour une seule et même maladie', correct: false, correction: 'Faux. Ce sont deux entités distinctes, même si elles appartiennent aux néoplasies myéloprolifératives.' },
      { text: 'Maladie de Vaquez : augmentation de la masse érythrocytaire', correct: true, correction: 'Exact. La lignée rouge est au premier plan.' },
    ],
    explanation: 'Les hémopathies myéloprolifératives comprennent notamment Vaquez, thrombocytémie essentielle et LMC, avec des profils et critères distincts ; la LLC est lymphoïde B. (Cours, p. 3–4 ; rectification de classification)'
  },
  {
    id: 7,
    type: 'QCM',
    question: 'Quelle population cellulaire s\'accumule classiquement dans la leucémie lymphoïde chronique ?',
    options: [
      { text: 'Des hématies porteuses d\'hémoglobine S', correct: false, correction: 'Non. L\'hémoglobine S relève d\'une hémoglobinopathie.' },
      { text: 'Des lymphocytes B d\'aspect mature et de phénotype clonal', correct: true, correction: 'Oui boss 🧠 La LLC est une néoplasie lymphoïde B mature, avec notamment une lymphocytose sanguine.' },
      { text: 'Des polynucléaires neutrophiles exclusivement', correct: false, correction: 'Non chef. C\'est une coquille de la ronéo ; cela ne définit pas la LLC.' },
      { text: 'Des réticulocytes après une hémorragie aiguë', correct: false, correction: 'Faux. C\'est une réponse de régénération érythroïde.' },
      { text: 'Des plasmocytes matures circulants comme seule population tumorale caractéristique', correct: false, correction: 'Non. Une prolifération plasmocytaire évoque d\'autres hémopathies ; la LLC typique implique des lymphocytes B matures.' },
    ],
    explanation: 'La leucémie lymphoïde chronique est une hémopathie de lymphocytes B matures. La mention d\'un excès de polynucléaires en p. 4 est une erreur du support. (Cours, p. 4 ; coquille rectifiée)'
  },
  {
    id: 8,
    type: 'QRM',
    question: 'Quelles situations peuvent perturber la production des cellules sanguines dans la moelle ?',
    options: [
      { text: 'Un envahissement médullaire tumoral ou une fibrose', correct: true, correction: 'Oui. L\'espace et l\'architecture nécessaires à l\'hématopoïèse peuvent être perturbés.' },
      { text: 'Une simple hétérozygotie HbS cause nécessairement une aplasie médullaire', correct: false, correction: 'Non chef. Le trait drépanocytaire ne définit pas une absence de production médullaire.' },
      { text: 'Une aplasie médullaire avec insuffisance importante de cellules souches/progéniteurs', correct: true, correction: 'Oui boss. Une défaillance de l\'hématopoïèse peut provoquer plusieurs cytopénies.' },
      { text: 'Une myélodysplasie entraînant une production inefficace de cellules sanguines', correct: true, correction: 'Exact. La moelle peut être présente et active, mais produire des cellules anormales ou insuffisantes.' },
      { text: 'Une carence sévère en vitamine B12 ou B9', correct: true, correction: 'Exact 🧠 Elle peut toucher plusieurs lignées, sans imposer une pancytopénie chez tous les patients.' },
    ],
    explanation: 'Les défauts médullaires peuvent tenir à une insuffisance des précurseurs, une dysplasie, un envahissement ou une carence nécessaire à l\'hématopoïèse. Les déficits en B9/B12 ne donnent pas obligatoirement une pancytopénie. (Cours, p. 4)'
  },
  {
    id: 9,
    type: 'QCM',
    question: 'Quelle propriété explique qu\'une hématie de diamètre supérieur à celui de certains capillaires puisse y circuler ?',
    options: [
      { text: 'La rigidification permanente de sa membrane', correct: false, correction: 'Faux. Une membrane trop rigide gêne précisément ce passage.' },
      { text: 'Sa déformabilité liée à sa forme biconcave et à l\'intégrité de sa membrane', correct: true, correction: 'Oui boss 🧠 L\'hématie se déforme pour franchir des passages plus étroits que son diamètre au repos.' },
      { text: 'L\'arrêt complet de tous ses échanges ioniques pendant la circulation', correct: false, correction: 'Non chef. L\'hématie a besoin d\'un métabolisme et d\'un équilibre ionique fonctionnels.' },
      { text: 'Un noyau encore présent dans l\'hématie mature qui pilote le changement de forme', correct: false, correction: 'Non chef. L\'hématie mature est anucléée ; c\'est surtout sa souplesse membranaire qui permet le passage.' },
      { text: 'Une fragmentation physiologique de chaque hématie en deux éléments à l\'entrée du capillaire', correct: false, correction: 'Non. Le globule rouge reste entier et se déforme ; une fragmentation traduirait une lésion.' },
    ],
    explanation: 'La forme biconcave et la souplesse membranaire permettent à l\'hématie de traverser des vaisseaux plus étroits que son diamètre apparent. (Cours, p. 5)'
  },
  {
    id: 10,
    type: 'QRM',
    question: 'Quelles associations entre composant du globule rouge et maladie sont justes ?',
    options: [
      { text: 'Synthèse des chaînes de globine : thalassémie', correct: true, correction: 'Exact. Il s\'agit d\'un déficit quantitatif de production d\'une chaîne alpha ou bêta.' },
      { text: 'Défaut de G6PD : incapacité primaire de produire l\'ATP glycolytique', correct: false, correction: 'Non chef. G6PD est dans la voie des pentoses et fournit surtout le NADPH protecteur contre l\'oxydation.' },
      { text: 'Membrane/cytosquelette : sphérocytose héréditaire', correct: true, correction: 'Oui boss. Des protéines comme spectrine, ankyrine ou bande 3 peuvent être touchées.' },
      { text: 'Défaut de pyruvate kinase : perturbation de l\'ATP issu de la glycolyse', correct: true, correction: 'Exact 🧠 Le manque d\'ATP fragilise l\'hématie et sa membrane.' },
      { text: 'Variant qualitatif de la bêta-globine : hémoglobine S', correct: true, correction: 'Oui. C\'est l\'anomalie moléculaire caractéristique de la drépanocytose.' },
    ],
    explanation: 'La physiologie de l\'hématie dépend de la membrane, de l\'hémoglobine et de son métabolisme. Pyruvate kinase et G6PD appartiennent à des voies distinctes : ATP glycolytique versus NADPH antioxydant. (Cours, p. 5 ; métabolisme rectifié)'
  },
  {
    id: 11,
    type: 'QCM',
    question: 'Chez l\'hématie, quel déficit enzymatique fragilise surtout la défense antioxydante par manque de NADPH ?',
    options: [
      { text: 'Le déficit de synthèse d\'une chaîne alpha de globine', correct: false, correction: 'Non chef. Il peut causer une thalassémie, mais ne correspond pas à la voie métabolique demandée.' },
      { text: 'Le déficit en ankyrine', correct: false, correction: 'Non. L\'ankyrine participe à l\'ancrage de la membrane ; ce n\'est pas la source de NADPH.' },
      { text: 'Le déficit en spectrine', correct: false, correction: 'Faux. La spectrine est une protéine du cytosquelette membranaire, pas cette enzyme antioxydante.' },
      { text: 'Le déficit en pyruvate kinase', correct: false, correction: 'Non chef. La pyruvate kinase touche la glycolyse et donc la production d\'ATP, même si elle peut aussi causer une hémolyse.' },
      { text: 'Le déficit en glucose-6-phosphate déshydrogénase (G6PD)', correct: true, correction: 'Oui boss 🧠 La G6PD alimente la voie des pentoses phosphates, source majeure de NADPH pour le glutathion réduit.' },
    ],
    explanation: 'La G6PD participe à la voie des pentoses phosphates et à la production de NADPH, qui aide à protéger le globule rouge du stress oxydatif ; la pyruvate kinase appartient à la glycolyse productrice d\'ATP. (Cours, p. 5 ; voie métabolique rectifiée)'
  },
  {
    id: 12,
    type: 'QRM',
    question: 'Une hémolyse chronique évoque une sphérocytose héréditaire. Quelles propositions sont compatibles avec cette piste ?',
    options: [
      { text: 'Une anomalie de la spectrine peut être en cause', correct: true, correction: 'Oui boss. Cette protéine contribue au cytosquelette de l\'hématie.' },
      { text: 'Une diminution de la déformabilité et une destruction splénique accrue sont possibles', correct: true, correction: 'Exact 🧠 Une hématie moins souple peut être retenue et éliminée par la rate.' },
      { text: 'Une anomalie de l\'ankyrine peut être en cause', correct: true, correction: 'Exact. Elle participe à l\'ancrage du cytosquelette à la membrane.' },
      { text: 'Une mutation HbS est la cause nécessaire de toute sphérocytose héréditaire', correct: false, correction: 'Non chef. HbS relève de la drépanocytose, une autre anomalie du globule rouge.' },
      { text: 'Une anomalie de la protéine bande 3 peut être en cause', correct: true, correction: 'Oui. Le cours la cite parmi les protéines membranaires concernées.' },
    ],
    explanation: 'La sphérocytose héréditaire peut résulter de défauts de protéines membranaires comme la spectrine, l\'ankyrine ou bande 3, associés à une moindre déformabilité et à une hémolyse splénique variable. (Cours, p. 5)'
  },
  {
    id: 13,
    type: 'QCM',
    question: 'À quoi sert le frottis sanguin coloré au May-Grünwald-Giemsa en complément de l\'hémogramme automatisé ?',
    options: [
      { text: 'À mesurer directement la concentration de vitamine B12 dans le sérum', correct: false, correction: 'Non chef. La B12 relève d\'un dosage biochimique, pas de la lecture du frottis.' },
      { text: 'À doser la ferritine à partir des hématies colorées', correct: false, correction: 'Non. La ferritine se dose dans le sang par biochimie.' },
      { text: 'À prouver à lui seul l\'étiologie de toute anémie', correct: false, correction: 'Non chef. Un frottis peut orienter, mais l\'étiologie demande le contexte et d\'autres examens.' },
      { text: 'À remplacer tout comptage des cellules par une analyse génétique', correct: false, correction: 'Faux. La morphologie complète les données quantitatives de l\'hémogramme.' },
      { text: 'À examiner la morphologie des cellules sanguines et rechercher des anomalies visibles', correct: true, correction: 'Oui boss 🔬 L\'automate quantifie ; le frottis aide à voir l\'aspect des cellules.' },
    ],
    explanation: 'La NFS fournit des informations quantitatives et des indices cellulaires ; le frottis coloré au MGG permet d\'analyser la morphologie et d\'interpréter certaines anomalies signalées. (Cours, p. 6)'
  },
  {
    id: 14,
    type: 'QRM',
    question: 'Concernant les réticulocytes, quelles propositions sont exactes ?',
    options: [
      { text: 'Leur dosage doit être demandé selon le contexte et n\'est pas systématiquement inclus dans l\'hémogramme standard', correct: true, correction: 'Exact. Le cours insiste sur l\'intérêt de les prescrire explicitement lorsqu\'ils sont utiles.' },
      { text: 'Une réticulocytose prouve à elle seule une hémolyse immunologique', correct: false, correction: 'Non chef. Une hémorragie ou d\'autres régénérations peuvent aussi augmenter les réticulocytes.' },
      { text: 'Après une hémorragie ou une hémolyse, leur nombre peut augmenter si la moelle répond', correct: true, correction: 'Oui 🧠 Le « si » compte : délai, carences ou atteinte médullaire peuvent modifier la réponse.' },
      { text: 'Ce sont des cellules érythroïdes jeunes circulantes déjà dépourvues de noyau', correct: true, correction: 'Oui boss. Elles proviennent de la moelle et précèdent les hématies pleinement matures.' },
      { text: 'Leur numération aide à juger la réponse de la moelle à une anémie', correct: true, correction: 'Exact. Elle oriente vers une réponse régénérative ou insuffisante.' },
    ],
    explanation: 'La numération des réticulocytes renseigne sur la réponse érythroïde médullaire ; elle peut augmenter lors d\'une hémolyse ou d\'un saignement, sans en identifier seule la cause. (Cours, p. 6)'
  },
  {
    id: 15,
    type: 'QCM',
    question: 'Devant une anémie avec réticulocytes insuffisamment élevés pour le degré d\'anémie, quelle orientation initiale est la plus pertinente ?',
    options: [
      { text: 'Une production érythroïde médullaire insuffisante ou inefficace à explorer', correct: true, correction: 'Oui boss 🧠 La moelle ne compense pas suffisamment l\'anémie ; il faut rechercher la cause de ce défaut de réponse.' },
      { text: 'Une hémolyse immunologique est prouvée sans autre examen', correct: false, correction: 'Faux. Les réticulocytes ne déterminent pas le mécanisme immunologique d\'une anémie.' },
      { text: 'Une hémorragie aiguë est démontrée avec certitude par ce résultat isolé', correct: false, correction: 'Non chef. Un saignement récent peut précéder la réponse, mais ce résultat seul ne le démontre pas.' },
      { text: 'La quantité de globules rouges est nécessairement normale', correct: false, correction: 'Non. L\'énoncé porte justement sur une anémie déjà constatée.' },
      { text: 'Le patient a forcément une mutation de l\'hémoglobine S', correct: false, correction: 'Non chef. La réponse réticulocytaire ne révèle pas à elle seule un variant d\'hémoglobine.' },
    ],
    explanation: 'Le nombre de réticulocytes doit être interprété à la lumière du degré d\'anémie : une réponse inadéquate suggère un défaut de production ou une érythropoïèse inefficace, sans désigner une cause unique. (Cours, p. 6)'
  },
  {
    id: 16,
    type: 'QRM',
    question: 'Quels tableaux cliniques peuvent motiver un hémogramme selon les exemples du cours ?',
    options: [
      { text: 'Adénopathies ou splénomégalie dans un syndrome tumoral', correct: true, correction: 'Exact 🧠 Ces signes peuvent conduire à chercher une anomalie hématologique.' },
      { text: 'Pétéchies ou autre syndrome hémorragique évoquant une anomalie plaquettaire', correct: true, correction: 'Exact. La numération plaquettaire devient utile.' },
      { text: 'Infections inhabituelles ou répétées faisant discuter une anomalie leucocytaire', correct: true, correction: 'Oui. L\'hémogramme renseigne notamment sur les leucocytes.' },
      { text: 'L\'absence de symptôme exclut toute indication de NFS, même dans un suivi ou en préopératoire', correct: false, correction: 'Non chef. Le cours cite aussi les bilans de suivi, de dépistage et certaines situations préopératoires.' },
      { text: 'Pâleur, fatigue et dyspnée faisant évoquer une anémie', correct: true, correction: 'Oui boss. La NFS peut objectiver et caractériser une anémie.' },
    ],
    explanation: 'Syndromes anémique, hémorragique, infectieux ou tumoral figurent parmi les motifs d\'hémogramme ; l\'interprétation dépend ensuite du contexte clinique. (Cours, p. 6–7)'
  },
  {
    id: 17,
    type: 'QCM',
    question: 'Quel ensemble de marqueurs biochimiques du tableau oriente vers une hémolyse à confronter au contexte clinique ?',
    options: [
      { text: 'Érythropoïétine et calcium uniquement', correct: false, correction: 'Non. L\'EPO peut aider dans une polyglobulie, et le calcium dans certains bilans de myélome.' },
      { text: 'Vitamine B12 et folates uniquement', correct: false, correction: 'Faux. Leur dosage oriente notamment vers une carence avec macrocytose ou cytopénie.' },
      { text: 'Ferritine, transferrine et fer sérique uniquement', correct: false, correction: 'Non chef. Ils explorent surtout le métabolisme du fer dans une anémie microcytaire.' },
      { text: 'Bilirubine non conjuguée, LDH et haptoglobine', correct: true, correction: 'Oui boss 🧪 Leur association est utile, avec la NFS et les réticulocytes ; aucun dosage isolé ne suffit toujours.' },
      { text: 'CRP et fibrinogène uniquement', correct: false, correction: 'Non chef. Ils renseignent sur l\'inflammation, pas spécifiquement sur la destruction des hématies.' },
    ],
    explanation: 'Le tableau associe hémolyse à bilirubine, LDH et haptoglobine. L\'interprétation d\'un bilan d\'hémolyse utilise aussi l\'hémogramme, les réticulocytes et le contexte ; les marqueurs ne sont pas parfaitement spécifiques isolément. (Cours, p. 7)'
  },
  {
    id: 18,
    type: 'QRM',
    question: 'Dans le tableau de biochimie p. 7, quels rapprochements examen–situation sont pertinents ?',
    options: [
      { text: 'Ferritine et bilan martial devant une anémie microcytaire', correct: true, correction: 'Oui boss. Ils explorent la disponibilité et les réserves en fer.' },
      { text: 'CRP et fibrinogène pour rechercher un contexte inflammatoire', correct: true, correction: 'Oui. Ce sont des marqueurs utiles, à interpréter avec la clinique.' },
      { text: 'Érythropoïétine dans l\'exploration de certaines polyglobulies', correct: true, correction: 'Exact 🧠 Ce dosage peut aider à orienter l\'étiologie, sans poser seul le diagnostic.' },
      { text: 'Une ferritine isolée suffit toujours à déterminer avec certitude toute cause d\'anémie', correct: false, correction: 'Non chef. La ferritine varie notamment avec l\'inflammation, et le raisonnement s\'appuie sur plusieurs données.' },
      { text: 'Vitamine B12 et folates devant une macrocytose ou certaines cytopénies', correct: true, correction: 'Exact. Une carence peut altérer l\'hématopoïèse.' },
    ],
    explanation: 'Le choix des analyses biochimiques dépend du tableau : bilan martial, B9/B12, marqueurs inflammatoires et parfois EPO répondent à des questions différentes. (Cours, p. 7)'
  },
  {
    id: 19,
    type: 'QCM',
    question: 'Quel duo de méthodes décrit le mieux l\'étude des fractions d\'hémoglobine lors d\'une suspicion d\'hémoglobinopathie ?',
    options: [
      { text: 'Une électrophorèse des protéines sériques où le pic d\'albumine mesure directement l\'HbS', correct: false, correction: 'Faux. L\'électrophorèse sérique et l\'étude des hémoglobines sont deux examens différents.' },
      { text: 'Un test de Coombs direct qui sépare HbA et HbF', correct: false, correction: 'Non. Le Coombs direct recherche des immunoglobulines ou du complément fixés aux hématies.' },
      { text: 'Une numération des plaquettes qui détermine seule le génotype de globine', correct: false, correction: 'Non chef. Elle ne peut pas identifier un variant d\'hémoglobine.' },
      { text: 'Un frottis MGG qui remplace toute analyse des fractions d\'hémoglobine', correct: false, correction: 'Non chef. La morphologie peut orienter mais ne quantifie pas les fractions HbA, HbF ou HbS.' },
      { text: 'Une méthode de séparation telle que l\'isoélectrofocalisation, complétée si besoin par une chromatographie HPLC pour caractériser et quantifier les fractions', correct: true, correction: 'Oui boss 🧠 Les profils HbA, HbF ou HbS se lisent par des méthodes adaptées ; la HPLC aide à mesurer les fractions.' },
    ],
    explanation: 'L\'isoélectrofocalisation sépare les fractions d\'hémoglobine et la HPLC peut les caractériser et les quantifier ; le profil doit être interprété selon l\'âge, le contexte et les autres résultats. (Cours, p. 8)'
  },
  {
    id: 20,
    type: 'QRM',
    question: 'Concernant le test de Coombs direct et l\'électrophorèse des protéines sériques, quelles propositions sont justes ?',
    options: [
      { text: 'Le Coombs direct recherche des immunoglobulines et/ou du complément déjà fixés aux globules rouges', correct: true, correction: 'Oui boss. Il s\'agit d\'un test antiglobuline direct sur les hématies du patient.' },
      { text: 'Un pic monoclonal sérique peut conduire à rechercher une prolifération plasmocytaire ou lymphoplasmocytaire', correct: true, correction: 'Exact 🧠 L\'interprétation du pic demande ensuite une caractérisation et un bilan adaptés.' },
      { text: 'Un Coombs direct positif doit être interprété avec les signes et marqueurs d\'hémolyse', correct: true, correction: 'Exact. Une positivité seule ne raconte pas toute la cause ni la gravité d\'une anémie.' },
      { text: 'Le Coombs direct sert principalement à détecter les anticorps libres du sérum avant une transfusion', correct: false, correction: 'Non chef. Cette recherche correspond au test indirect ; le direct étudie ce qui est déjà fixé aux hématies.' },
      { text: 'L\'électrophorèse sérique peut montrer une diminution de la zone des gammaglobulines', correct: true, correction: 'Oui. Le cours la cite notamment dans le contexte de certaines hémopathies lymphoïdes.' },
    ],
    explanation: 'Le test antiglobuline direct détecte des Ig ou du complément liés aux hématies, tandis que l\'électrophorèse sérique explore le profil protéique, dont les gammaglobulines et d\'éventuels pics monoclonaux. (Cours, p. 9)'
  },
  {
    id: 21,
    type: 'QCM',
    question: 'Chez une personne explorée pour une possible hémopathie, quelle information relève directement de l\'étude cytologique d\'un myélogramme ?',
    options: [
      { text: 'L\'organisation des fibres de réticuline dans une carotte osseuse', correct: false, correction: 'Non chef, l\'architecture et la fibrose se jugent surtout sur une biopsie ostéomédullaire.' },
      { text: 'La morphologie et la proportion des précurseurs des différentes lignées', correct: true, correction: 'Oui boss 🧠 l\'aspirat étalé et coloré permet d\'observer les cellules et d\'établir leur répartition.' },
      { text: 'La concentration des immunoglobulines dans le sérum', correct: false, correction: 'Non chef, c\'est une mesure sanguine, distincte de l\'examen cytologique de la moelle.' },
      { text: 'La translocation chromosomique exacte des cellules médullaires', correct: false, correction: 'Non chef, elle nécessite une analyse cytogénétique ou moléculaire, pas la seule lecture du frottis.' },
      { text: 'La répartition des ganglions atteints dans l\'organisme', correct: false, correction: 'Non chef, le myélogramme prélève la moelle ; il ne cartographie pas les ganglions.' },
    ],
    explanation: 'Le myélogramme étudie les cellules aspirées de la moelle sur des lames : richesse, lignées et morphologie. (Cours, p. 9 à 11)'
  },
  {
    id: 22,
    type: 'QRM',
    question: 'Lors de la lecture d\'un myélogramme correctement prélevé, quels éléments méritent d\'être évalués ?',
    options: [
      { text: 'La richesse cellulaire de l\'aspirat', correct: true, correction: 'Oui boss 🧠 elle fait partie de l\'appréciation globale du myélogramme.' },
      { text: 'La présence de mégacaryocytes', correct: true, correction: 'Oui boss 🧠 ces grandes cellules appuient l\'origine médullaire du prélèvement.' },
      { text: 'La présence de cellules de morphologie anormale', correct: true, correction: 'Oui boss 🧠 l\'analyse cytomorphologique recherche notamment une population blastique.' },
      { text: 'La proportion des principales lignées hématopoïétiques', correct: true, correction: 'Oui boss 🧠 la répartition des précurseurs aide à repérer une anomalie de production.' },
      { text: 'L\'architecture des fibres médullaires dans une carotte osseuse', correct: false, correction: 'Non chef, cette architecture est l\'objet de l\'histologie d\'une biopsie ostéomédullaire.' },
    ],
    explanation: 'La lecture d\'un myélogramme combine qualité du prélèvement, richesse, répartition des lignées et morphologie cellulaire. (Cours, p. 10 et 11)'
  },
  {
    id: 23,
    type: 'QCM',
    question: 'Un aspirat de moelle paraît très dilué par le sang et aucun mégacaryocyte n\'est repéré sur la lame. Quelle conclusion est la plus prudente ?',
    options: [
      { text: 'Le sang périphérique suffit désormais à mesurer toutes les lignées médullaires', correct: false, correction: 'Non chef, la répartition des précurseurs médullaires ne s\'infère pas entièrement du sang.' },
      { text: 'La coloration de Perls remplacera systématiquement tout nouveau prélèvement', correct: false, correction: 'Non chef, Perls montre le fer ; elle ne répare pas un aspirat pauvre ou hémodilué.' },
      { text: 'La moelle est nécessairement remplacée par une fibrose', correct: false, correction: 'Non chef, la fibrose ne se déduit pas du seul défaut de mégacaryocytes sur cette lame.' },
      { text: 'Le prélèvement pourrait être hémodilué et son interprétation doit rester prudente', correct: true, correction: 'Oui boss 🧠 les mégacaryocytes sont un indice utile de matériel médullaire réellement prélevé.' },
      { text: 'L\'absence de mégacaryocytes prouve à elle seule une aplasie médullaire', correct: false, correction: 'Non chef, un prélèvement hémodilué peut masquer les éléments de la moelle ; il faut évaluer sa qualité.' },
    ],
    explanation: 'La présence de mégacaryocytes contribue à apprécier la qualité d\'un aspirat ; leur absence sur une lame hémodiluée ne prouve pas une maladie. (Cours, p. 10)'
  },
  {
    id: 24,
    type: 'QRM',
    question: 'Quelles observations morphologiques d\'un myélogramme peuvent orienter l\'enquête diagnostique, sans suffire seules à un diagnostic définitif ?',
    options: [
      { text: 'Une coloration MGG normale démontrant l\'absence de toute anomalie génétique', correct: false, correction: 'Non chef, une cytologie rassurante n\'exclut pas toutes les anomalies cytogénétiques ou moléculaires.' },
      { text: 'Des mégaloblastes évoquant notamment une carence en vitamine B9 ou B12', correct: true, correction: 'Oui boss 🧠 ces précurseurs anormaux orientent vers un trouble de la maturation érythroïde.' },
      { text: 'Des petits lymphocytes matures identifiant à eux seuls une LLC sans immunophénotypage', correct: false, correction: 'Non chef, la morphologie ne suffit pas à caractériser une prolifération B et ses marqueurs.' },
      { text: 'Des neutrophiles hypogranulés ou hyposegmentés évoquant une dysplasie myéloïde', correct: true, correction: 'Oui boss 🧠 ces anomalies morphologiques font discuter un syndrome myélodysplasique.' },
      { text: 'Une population abondante de blastes faisant suspecter une leucémie aiguë', correct: true, correction: 'Oui boss 🧠 l\'excès de cellules immatures impose de poursuivre la caractérisation.' },
    ],
    explanation: 'Les anomalies morphologiques du myélogramme orientent l\'analyse, à confronter aux autres examens nécessaires. (Cours, p. 10 et 11)'
  },
  {
    id: 25,
    type: 'QCM',
    question: 'À quoi sert principalement la coloration May-Grünwald-Giemsa appliquée à une lame de myélogramme ?',
    options: [
      { text: 'À révéler exclusivement les dépôts de fer périnucléaires', correct: false, correction: 'Non chef, c\'est le rôle de la réaction de Perls pour le fer.' },
      { text: 'À compter directement les anticorps anti-globules rouges fixés', correct: false, correction: 'Non chef, cette recherche relève du test direct à l\'antiglobuline, pas de la coloration MGG.' },
      { text: 'À faire apparaître les caractéristiques cytologiques des cellules médullaires', correct: true, correction: 'Oui boss 🧠 le MGG permet d\'étudier noyau, cytoplasme et maturation au microscope.' },
      { text: 'À conserver l\'architecture complète d\'une carotte de moelle', correct: false, correction: 'Non chef, l\'étalement d\'un aspirat montre des cellules, tandis que la biopsie préserve l\'architecture.' },
      { text: 'À mesurer la fluorescence des marqueurs CD19 et CD5', correct: false, correction: 'Non chef, ces marqueurs sont détectés par immunophénotypage en cytométrie en flux.' },
    ],
    explanation: 'Le MGG est la coloration usuelle des frottis médullaires pour l\'examen cytomorphologique. (Cours, p. 9 et 10)'
  },
  {
    id: 26,
    type: 'QRM',
    question: 'Concernant la coloration de Perls dans l\'étude d\'un aspirat médullaire, quelles propositions sont correctes ?',
    options: [
      { text: 'Elle colore les anticorps fluorescents utilisés pour CD19', correct: false, correction: 'Non chef, les anticorps marqués appartiennent à la cytométrie, pas à la coloration de Perls.' },
      { text: 'Elle suffit à affirmer un syndrome myélodysplasique chez tout patient avec un sidéroblaste en couronne', correct: false, correction: 'Non chef, cet aspect doit être interprété avec les autres données et peut avoir différentes causes.' },
      { text: 'Elle peut révéler des granules de fer disposés en couronne autour du noyau d\'érythroblastes', correct: true, correction: 'Oui boss 🧠 c\'est l\'aspect caractéristique des sidéroblastes en couronne.' },
      { text: 'Elle peut compléter le MGG si l\'on cherche une anomalie de répartition du fer médullaire', correct: true, correction: 'Oui boss 🧠 les deux colorations répondent à des questions différentes et complémentaires.' },
      { text: 'Elle met en évidence les dépôts de fer accessibles à cette réaction', correct: true, correction: 'Oui boss 🧠 elle renseigne notamment sur le fer dans les cellules médullaires et les réserves.' },
    ],
    explanation: 'Perls met en évidence le fer médullaire et permet notamment de rechercher des sidéroblastes en couronne dans les érythroblastes. (Cours, p. 10)'
  },
  {
    id: 27,
    type: 'QCM',
    question: 'Sur une lame médullaire colorée par Perls, quel aspect correspond à un sidéroblaste en couronne ?',
    options: [
      { text: 'Un mégacaryocyte entouré d\'anticorps fluorescents', correct: false, correction: 'Non chef, la fluorescence d\'anticorps n\'est pas l\'aspect recherché par Perls.' },
      { text: 'Une hématie mature avec un nouveau noyau cerclé de fer', correct: false, correction: 'Non chef, une hématie mature n\'a plus de noyau.' },
      { text: 'Un érythroblaste avec des granules de fer disposés en anneau périnucléaire', correct: true, correction: 'Oui boss 🧠 l\'anneau périnucléaire de fer définit ce type de précurseur érythroïde pathologique.' },
      { text: 'Un lymphocyte exprimant simultanément CD5 et CD19', correct: false, correction: 'Non chef, cette coexpression se lit en immunophénotypage, pas à la coloration de Perls.' },
      { text: 'Un neutrophile dont les granulations se regroupent autour des lobes nucléaires', correct: false, correction: 'Non chef, le sidéroblaste appartient à la lignée érythroïde, pas granulocytaire.' },
    ],
    explanation: 'Un sidéroblaste en couronne est un érythroblaste dont les dépôts de fer se disposent autour du noyau à la coloration de Perls. (Cours, p. 10)'
  },
  {
    id: 28,
    type: 'QRM',
    question: 'Quels apports spécifiques peut fournir une biopsie ostéomédullaire par rapport à un aspirat étudié seulement en cytologie ?',
    options: [
      { text: 'L\'appréciation d\'une fibrose médullaire', correct: true, correction: 'Oui boss 🧠 la biopsie permet d\'étudier le tissu de soutien et la fibrose.' },
      { text: 'L\'analyse de l\'architecture du tissu hématopoïétique dans la carotte', correct: true, correction: 'Oui boss 🧠 la coupe tissulaire conserve les relations entre cellules, stroma et trame osseuse.' },
      { text: 'Le remplacement automatique de toute analyse morphologique des cellules aspirées', correct: false, correction: 'Non chef, biopsie et aspirat sont complémentaires ; la cytologie reste précieuse pour détailler les cellules.' },
      { text: 'La mesure directe des marqueurs fluorescents sur des cellules fixées dans la paraffine par cytométrie de routine', correct: false, correction: 'Non chef, la cytométrie en flux exige des cellules en suspension ; la biopsie fixée relève d\'autres méthodes.' },
      { text: 'La recherche d\'un envahissement organisé en nodules', correct: true, correction: 'Oui boss 🧠 un infiltrat focal ou nodulaire peut être mieux apprécié sur l\'architecture préservée.' },
    ],
    explanation: 'La biopsie conserve l\'architecture médullaire et aide à apprécier richesse, fibrose et infiltration nodulaire, en complément de l\'aspirat. (Cours, p. 12)'
  },
  {
    id: 29,
    type: 'QCM',
    question: 'Une aspiration médullaire est peu contributive et une myélofibrose est suspectée. Quel examen apporte le plus directement l\'information architecturale recherchée ?',
    options: [
      { text: 'Une biopsie ostéomédullaire', correct: true, correction: 'Oui boss 🧠 la carotte permet l\'étude histologique de l\'architecture et de la fibrose.' },
      { text: 'Un dosage sérique d\'immunoglobulines', correct: false, correction: 'Non chef, il n\'examine pas la trame médullaire.' },
      { text: 'Une simple répétition de la coloration MGG sur le même frottis pauvre', correct: false, correction: 'Non chef, recolorer un matériel insuffisant ne restitue pas l\'architecture.' },
      { text: 'La réaction de Perls seule', correct: false, correction: 'Non chef, elle montre le fer, pas l\'architecture fibreuse du tissu médullaire.' },
      { text: 'Une lecture isolée des quadrants CD5/CD19', correct: false, correction: 'Non chef, la coexpression de marqueurs lymphocytaires ne quantifie pas la fibrose.' },
    ],
    explanation: 'En cas de suspicion de myélofibrose ou d\'aspirat non contributif, la biopsie ostéomédullaire est particulièrement informative. (Cours, p. 12)'
  },
  {
    id: 30,
    type: 'QRM',
    question: 'À propos d\'une biopsie médullaire très appauvrie en tissu hématopoïétique, quelles propositions sont justes ?',
    options: [
      { text: 'La biopsie montre la trame osseuse et la proportion de tissu hématopoïétique', correct: true, correction: 'Oui boss 🧠 c\'est précisément l\'intérêt de la carotte examinée en histologie.' },
      { text: 'Elle garantit que la cytométrie en flux de sang sera toujours négative', correct: false, correction: 'Non chef, une biopsie pauvre ne permet pas à elle seule de prédire tous les résultats d\'immunophénotypage.' },
      { text: 'Elle prouve que la lignée plaquettaire seule est atteinte', correct: false, correction: 'Non chef, l\'aplasie médullaire peut concerner plusieurs lignées simultanément.' },
      { text: 'Elle peut s\'accompagner d\'anémie, de thrombopénie et de neutropénie', correct: true, correction: 'Oui boss 🧠 une production réduite peut toucher les trois lignées sanguines.' },
      { text: 'Elle peut évoquer une aplasie médullaire si les autres données concordent', correct: true, correction: 'Oui boss 🧠 la raréfaction du tissu producteur est un argument histologique important.' },
    ],
    explanation: 'Une carotte hypocellulaire peut faire suspecter une aplasie et expliquer des cytopénies périphériques touchant plusieurs lignées. (Cours, p. 12)'
  },
  {
    id: 31,
    type: 'QCM',
    question: 'Quel principe résume l\'immunophénotypage par cytométrie en flux décrit dans le cours ?',
    options: [
      { text: 'Faire passer des cellules en suspension devant un laser et détecter la fluorescence d\'anticorps liés à leurs antigènes', correct: true, correction: 'Oui boss 🧠 le signal fluorescent renseigne sur les marqueurs de chaque cellule analysée.' },
      { text: 'Dénombrer directement les chromosomes au stade métaphasique', correct: false, correction: 'Non chef, cela relève du caryotype en cytogénétique.' },
      { text: 'Examiner uniquement une coupe osseuse fixe au microscope optique', correct: false, correction: 'Non chef, la cytométrie étudie des cellules en suspension plutôt que l\'architecture fixée.' },
      { text: 'Déterminer les marqueurs en observant seulement la taille des noyaux', correct: false, correction: 'Non chef, la morphologie seule ne révèle pas l\'expression des antigènes ciblés.' },
      { text: 'Colorer le fer d\'érythroblastes à l\'aide d\'une réaction au bleu de Prusse', correct: false, correction: 'Non chef, cela décrit la réaction de Perls, pas la cytométrie en flux.' },
    ],
    explanation: 'La cytométrie en flux analyse individuellement des cellules en suspension marquées par des anticorps fluorescents. (Cours, p. 13)'
  },
  {
    id: 32,
    type: 'QRM',
    question: 'Quelles étapes ou composantes interviennent dans le fonctionnement d\'un cytomètre en flux ?',
    options: [
      { text: 'Une lecture exclusivement visuelle de chaque cellule au microscope, sans détecteur', correct: false, correction: 'Non chef, le cytomètre s\'appuie sur des détecteurs pour enregistrer rapidement les signaux.' },
      { text: 'Une acquisition électronique des signaux mesurés', correct: true, correction: 'Oui boss 🧠 les signaux sont convertis en données exploitables cellule par cellule.' },
      { text: 'Un système fluidique qui aligne les cellules dans le flux', correct: true, correction: 'Oui boss 🧠 la focalisation hydrodynamique favorise leur passage une à une.' },
      { text: 'Un système optique associant illumination laser et recueil de fluorescence', correct: true, correction: 'Oui boss 🧠 les fluorochromes sont excités puis leurs émissions sont détectées.' },
      { text: 'La conservation obligatoire de l\'architecture osseuse dans une carotte fixée', correct: false, correction: 'Non chef, la méthode requiert des cellules en suspension plutôt qu\'une coupe histologique fixée.' },
    ],
    explanation: 'Le cytomètre associe focalisation fluidique, illumination et détection optiques, puis traitement électronique des signaux. (Cours, p. 13)'
  },
  {
    id: 33,
    type: 'QCM',
    question: 'Dans le tableau des marqueurs du cours, lequel oriente vers la lignée lymphoïde T ?',
    options: [
      { text: 'CD235a', correct: false, correction: 'Non chef, il est associé à la lignée érythroïde.' },
      { text: 'CD41a', correct: false, correction: 'Non chef, il est associé à la lignée plaquettaire ou mégacaryocytaire.' },
      { text: 'CD14', correct: false, correction: 'Non chef, il est associé à la lignée monocytaire.' },
      { text: 'CD19', correct: false, correction: 'Non chef, ce marqueur est associé à la lignée lymphoïde B.' },
      { text: 'CD3', correct: true, correction: 'Oui boss 🧠 ce marqueur est utilisé pour repérer la lignée lymphoïde T.' },
    ],
    explanation: 'Le tableau d\'immunophénotypage associe CD3 à la lignée T, alors que CD19 et CD20 orientent vers la lignée B. (Cours, p. 14)'
  },
  {
    id: 34,
    type: 'QRM',
    question: 'Quelles associations marqueur–lignée correspondent au tableau présenté dans le cours ?',
    options: [
      { text: 'CD14 — lignée monocytaire', correct: true, correction: 'Oui boss 🧠 le tableau relie CD14 aux monocytes.' },
      { text: 'CD34 — progéniteurs hématopoïétiques', correct: true, correction: 'Oui boss 🧠 CD34 figure parmi les marqueurs des cellules progénitrices.' },
      { text: 'CD235a — lignée érythroïde', correct: true, correction: 'Oui boss 🧠 ce marqueur sert ici à repérer la différenciation érythroïde.' },
      { text: 'CD41a — lignée plaquettaire', correct: true, correction: 'Oui boss 🧠 CD41a est associé au compartiment mégacaryocytaire et plaquettaire.' },
      { text: 'CD15 — lignée lymphoïde B', correct: false, correction: 'Non chef, CD15 est associé ici à la lignée granulocytaire ; la lignée B est repérée notamment par CD19 ou CD20.' },
    ],
    explanation: 'Les marqueurs orientent l\'identification des lignées, mais ils s\'interprètent dans un ensemble de données. (Cours, p. 14)'
  },
  {
    id: 35,
    type: 'QCM',
    question: 'Sur un graphique de cytométrie où CD5 est en abscisse et CD19 en ordonnée, que représente le quadrant supérieur droit ?',
    options: [
      { text: 'Les cellules CD19 positives et CD5 négatives uniquement', correct: false, correction: 'Non chef, elles se placent dans le quadrant supérieur gauche.' },
      { text: 'Les cellules exprimant à la fois CD5 et CD19', correct: true, correction: 'Oui boss 🧠 une position élevée sur les deux axes correspond à une double positivité.' },
      { text: 'Le nombre total de leucocytes mesuré par l\'hémogramme', correct: false, correction: 'Non chef, un quadrant de cytométrie classe des événements selon deux marqueurs, pas toute la numération sanguine.' },
      { text: 'Les cellules négatives pour les deux marqueurs', correct: false, correction: 'Non chef, les doubles négatives se placent dans le quadrant inférieur gauche.' },
      { text: 'Les cellules CD5 positives et CD19 négatives uniquement', correct: false, correction: 'Non chef, elles se placent dans le quadrant inférieur droit.' },
    ],
    explanation: 'Avec CD5 sur l\'axe horizontal et CD19 sur l\'axe vertical, le quadrant supérieur droit réunit les cellules double positives. (Cours, p. 14)'
  },
  {
    id: 36,
    type: 'QRM',
    question: 'Sur ce même graphique CD5 (horizontal) / CD19 (vertical), quelles lectures des quadrants sont exactes ?',
    options: [
      { text: 'En haut à gauche : CD19 positif et CD5 négatif', correct: true, correction: 'Oui boss 🧠 le signal vertical est positif, tandis que le signal horizontal reste négatif.' },
      { text: 'En haut à gauche : cellules exprimant CD5 sans CD19', correct: false, correction: 'Non chef, cela inverserait les axes : en haut à gauche, c\'est CD19 qui est positif.' },
      { text: 'En haut à droite : cellules nécessairement atteintes de LLC', correct: false, correction: 'Non chef, la double positivité décrit un phénotype ; elle ne suffit pas à établir ce diagnostic.' },
      { text: 'En bas à droite : CD5 positif et CD19 négatif', correct: true, correction: 'Oui boss 🧠 le signal horizontal est positif, tandis que le signal vertical reste négatif.' },
      { text: 'En bas à gauche : cellules double négatives', correct: true, correction: 'Oui boss 🧠 aucun des deux marqueurs n\'atteint la zone positive.' },
    ],
    explanation: 'Les quadrants traduisent la positivité de chaque marqueur ; leur position ne remplace pas l\'interprétation clinique et immunophénotypique. (Cours, p. 14)'
  },
  {
    id: 37,
    type: 'QCM',
    question: 'Une population de lymphocytes B CD19+ coexprime CD5. Quelle interprétation est la plus rigoureuse ?',
    options: [
      { text: 'Elle signifie que CD19 est un marqueur spécifique des lymphocytes T', correct: false, correction: 'Non chef, CD19 est un marqueur de la lignée B.' },
      { text: 'Elle prouve une myélofibrose', correct: false, correction: 'Non chef, la fibrose se recherche dans l\'architecture médullaire, pas avec ce couple de marqueurs.' },
      { text: 'Elle établit à elle seule une LLC, quel que soit le contexte', correct: false, correction: 'Non chef, d\'autres populations B peuvent coexprimer CD5 ; il faut compléter l\'analyse.' },
      { text: 'Elle évoque un profil compatible avec une LLC, à confronter aux autres marqueurs et données du patient', correct: true, correction: 'Oui boss 🧠 l\'expression de CD5 par une population B est un indice, sans être pathognomonique.' },
      { text: 'Elle est nécessairement normale, car tous les lymphocytes B expriment CD5', correct: false, correction: 'Non chef, la plupart des B circulants ordinaires ne présentent pas ce profil ; il peut être anormal.' },
    ],
    explanation: 'La coexpression CD19/CD5 est caractéristique du profil décrit pour la LLC, mais son interprétation nécessite un panel et le contexte clinique. (Cours, p. 14 et 15)'
  },
  {
    id: 38,
    type: 'QRM',
    question: 'Chez un adulte avec hyperlymphocytose et petits lymphocytes d\'aspect mature, quelles démarches ou conclusions sont appropriées ?',
    options: [
      { text: 'Rechercher si la population B exprime notamment CD19 et CD5', correct: true, correction: 'Oui boss 🧠 la coexpression participe à l\'orientation vers un profil de LLC.' },
      { text: 'Réaliser un immunophénotypage des lymphocytes sanguins', correct: true, correction: 'Oui boss 🧠 il aide à caractériser la population responsable de l\'hyperlymphocytose.' },
      { text: 'Renoncer à l\'immunophénotypage car les cellules paraissent matures au microscope', correct: false, correction: 'Non chef, l\'aspect mature ne suffit pas à distinguer les différentes populations lymphocytaires.' },
      { text: 'Interpréter le profil de marqueurs avec la morphologie et les autres données du patient', correct: true, correction: 'Oui boss 🧠 le diagnostic ne repose pas sur un marqueur isolé ni sur une formule absolue.' },
      { text: 'Affirmer une LLC sur la seule valeur élevée des lymphocytes', correct: false, correction: 'Non chef, une hyperlymphocytose peut avoir plusieurs causes et requiert une caractérisation.' },
    ],
    explanation: 'Le cours propose l\'immunophénotypage devant une hyperlymphocytose avec petits lymphocytes ; la conclusion doit rester contextualisée. (Cours, p. 15)'
  },
  {
    id: 39,
    type: 'QCM',
    question: 'À quoi sert principalement le score de Matutes évoqué dans le cours ?',
    options: [
      { text: 'À apprécier si le profil immunophénotypique d\'une population B est compatible avec une LLC', correct: true, correction: 'Oui boss 🧠 il synthétise plusieurs marqueurs et aide à orienter le diagnostic.' },
      { text: 'À déterminer le nombre de chromosomes dans chaque lymphocyte', correct: false, correction: 'Non chef, cela relève de la cytogénétique, pas de l\'immunophénotypage.' },
      { text: 'À remplacer systématiquement la numération, la morphologie et les autres éléments diagnostiques', correct: false, correction: 'Non chef, un score favorable soutient une hypothèse sans dispenser du contexte biologique.' },
      { text: 'À mesurer directement la densité de fibrose d\'une biopsie médullaire', correct: false, correction: 'Non chef, la fibrose s\'évalue sur le tissu médullaire, pas par ce score de marqueurs.' },
      { text: 'À classer la sévérité d\'une carence en vitamine B12', correct: false, correction: 'Non chef, le score ne mesure ni la vitamine B12 ni l\'anémie mégaloblastique.' },
    ],
    explanation: 'Le score de Matutes résume cinq caractéristiques immunophénotypiques aidant à reconnaître un profil de LLC ; il ne se lit pas isolément. (Cours, p. 15)'
  },
  {
    id: 40,
    type: 'QRM',
    question: 'Quels éléments appartiennent au profil immunophénotypique utilisé par le score de Matutes tel qu\'il est résumé dans le cours ?',
    options: [
      { text: 'L\'expression de CD5', correct: true, correction: 'Oui boss 🧠 CD5 fait partie des cinq marqueurs ou caractéristiques cités.' },
      { text: 'Une faible intensité des immunoglobulines de surface', correct: true, correction: 'Oui boss 🧠 l\'intensité faible des immunoglobulines de surface est prise en compte.' },
      { text: 'Une expression faible de CD79b', correct: true, correction: 'Oui boss 🧠 le cours indique une faible expression de CD79b.' },
      { text: 'Une forte expression de CD14 par la population B', correct: false, correction: 'Non chef, CD14 est associé à la lignée monocytaire et ne fait pas partie des cinq critères cités.' },
      { text: 'L\'expression de CD23', correct: true, correction: 'Oui boss 🧠 CD23 appartient également au profil typique présenté.' },
    ],
    explanation: 'Le cours cite CD5+, CD23+, CD79b faible, FMC7 négatif et immunoglobulines de surface faibles comme profil pris en compte pour Matutes. (Cours, p. 15)'
  },
  {
    id: 41,
    type: 'QCM',
    question: 'Que permet principalement d\'étudier un caryotype conventionnel en hématologie ?',
    options: [
      { text: 'La concentration de chaque protéine plasmatique par fluorescence.', correct: false, correction: 'Non : cela relève d\'autres analyses, pas de l\'étude des chromosomes.' },
      { text: 'Le pourcentage de cellules JAK2 V617F par simple observation morphologique.', correct: false, correction: 'Non : cette mutation ponctuelle nécessite une recherche moléculaire adaptée.' },
      { text: 'La séquence exacte de chaque nucléotide des gènes de la cellule.', correct: false, correction: 'Non chef : le caryotype n\'a pas la résolution d\'un séquençage de l\'ADN.' },
      { text: 'L\'expression quantitative d\'un transcrit de fusion par PCR en temps réel.', correct: false, correction: 'Non : c\'est une approche moléculaire sur l\'ARN, après transcription inverse si nécessaire.' },
      { text: 'Le nombre et les grandes anomalies de structure des chromosomes des cellules analysées.', correct: true, correction: 'Oui boss : le caryotype examine des chromosomes individualisés et peut montrer, par exemple, une translocation visible.' },
    ],
    explanation: 'La cytogénétique conventionnelle étudie le nombre et la structure des chromosomes visibles sur un caryotype ; elle ne lit pas leur séquence base par base. (Cours, p. 15)'
  },
  {
    id: 42,
    type: 'QRM',
    question: 'Quelles étapes ou conditions conviennent à la réalisation du caryotype conventionnel décrit dans le cours ?',
    options: [
      { text: 'Éviter toute division cellulaire, car la métaphase cache les chromosomes.', correct: false, correction: 'Non : c\'est au contraire la métaphase qui rend les chromosomes faciles à distinguer.' },
      { text: 'Mettre les cellules en culture puis bloquer des mitoses au stade métaphasique.', correct: true, correction: 'Oui boss : c\'est le principe de la préparation présentée dans la ronéo.' },
      { text: 'Disposer de cellules capables d\'entrer en division pour obtenir des métaphases.', correct: true, correction: 'Oui : les chromosomes sont particulièrement individualisés en métaphase.' },
      { text: 'Lire directement le transcrit BCR::ABL1 sans extraction d\'ARN.', correct: false, correction: 'Non chef : le caryotype montre les chromosomes ; la recherche d\'un transcrit relève de la biologie moléculaire.' },
      { text: 'Colorer et classer les chromosomes afin de les comparer.', correct: true, correction: 'Oui : on recherche ensuite les anomalies de nombre et de structure.' },
    ],
    explanation: 'Le cours décrit culture, blocage métaphasique, coloration et classement des chromosomes ; l\'examen requiert des métaphases exploitables. (Cours, p. 15)'
  },
  {
    id: 43,
    type: 'QCM',
    question: 'Dans le cas de suspicion de LMC avec myélémie, pourquoi peut-on envisager un caryotype à partir du sang périphérique ?',
    options: [
      { text: 'Parce que les hématies matures réalisent des mitoses spontanées dans le tube de sang.', correct: false, correction: 'Non chef : les hématies matures n\'ont pas de noyau à mettre en métaphase.' },
      { text: 'Parce que la présence d\'une myélémie prouve à elle seule la translocation t(9;22).', correct: false, correction: 'Non : c\'est un signe d\'orientation, pas la preuve d\'une anomalie précise.' },
      { text: 'Parce que le plasma sanguin contient déjà les chromosomes métaphasiques libres.', correct: false, correction: 'Non : il faut examiner des cellules nucléées préparées pour la cytogénétique.' },
      { text: 'Parce que la moelle osseuse ne peut jamais servir au caryotype des hémopathies.', correct: false, correction: 'Non : le prélèvement médullaire est au contraire fréquemment utilisé, notamment si le sang n\'apporte pas assez de métaphases.' },
      { text: 'Parce que des précurseurs myéloïdes circulants peuvent fournir des cellules en division analysables.', correct: true, correction: 'Oui boss : la myélémie peut rendre un essai sur sang possible, même si la moelle reste le prélèvement de référence selon le contexte.' },
    ],
    explanation: 'La myélémie correspond à des précurseurs granulocytaires dans le sang ; ils peuvent parfois permettre une analyse cytogénétique sur sang. (Cours, p. 15–17)'
  },
  {
    id: 44,
    type: 'QRM',
    question: 'Quelles comparaisons entre caryotype conventionnel et FISH sont correctes ?',
    options: [
      { text: 'Une FISH ciblée utilise des sondes choisies pour des loci ou réarrangements recherchés.', correct: true, correction: 'Oui boss : on doit savoir quelle région sonder.' },
      { text: 'Le caryotype offre une vue d\'ensemble des chromosomes analysés.', correct: true, correction: 'Oui : il peut révéler des anomalies chromosomiques non ciblées d\'avance, si elles sont visibles à sa résolution.' },
      { text: 'Une FISH à deux sondes remplace automatiquement toute analyse chromosomique et moléculaire.', correct: false, correction: 'Non : elle renseigne les cibles choisies et peut être complétée par caryotype ou PCR.' },
      { text: 'Une FISH en interphase peut être interprétée sans obtenir de métaphases.', correct: true, correction: 'Oui : c\'est un intérêt pratique de cette technique ciblée.' },
      { text: 'Le caryotype détermine toujours chaque mutation ponctuelle de JAK2.', correct: false, correction: 'Non chef : une substitution nucléotidique est hors de sa résolution usuelle.' },
    ],
    explanation: 'Caryotype et FISH répondent à des questions complémentaires : vision chromosomique globale à faible résolution versus recherche ciblée par sondes, y compris sur noyaux interphasiques. (Cours, p. 15–17)'
  },
  {
    id: 45,
    type: 'QCM',
    question: 'Quel est le principe de la FISH en cytogénétique ?',
    options: [
      { text: 'Compter les cellules sur l\'hémogramme sans observer leur matériel génétique.', correct: false, correction: 'Non : l\'hémogramme et la FISH sont deux examens distincts.' },
      { text: 'Classer uniquement les chromosomes métaphasiques selon leur longueur sans marquage ciblé.', correct: false, correction: 'Non : c\'est plutôt l\'idée du caryotype conventionnel ; la FISH ajoute des sondes ciblées.' },
      { text: 'Faire hybrider des sondes nucléiques fluorescentes sur des séquences cibles dans les cellules.', correct: true, correction: 'Oui boss : la fluorescence localise les régions reconnues par les sondes.' },
      { text: 'Amplifier sans sonde tous les gènes d\'un prélèvement puis lire leurs séquences.', correct: false, correction: 'Non chef : cela ne décrit pas l\'hybridation fluorescente in situ.' },
      { text: 'Mesurer l\'activité d\'une enzyme JAK2 par une bande de protéine fluorescente.', correct: false, correction: 'Non : la FISH cible des séquences nucléiques, pas directement l\'activité enzymatique.' },
    ],
    explanation: 'FISH signifie hybridation fluorescente in situ : des sondes complémentaires marquées révèlent une cible chromosomique choisie. (Cours, p. 16)'
  },
  {
    id: 46,
    type: 'QRM',
    question: 'Quelles propositions décrivent les possibilités et limites d\'une FISH ciblée ?',
    options: [
      { text: 'Une unique paire de sondes explore toujours l\'ensemble du génome.', correct: false, correction: 'Non : le champ d\'une FISH dépend des régions couvertes par ses sondes.' },
      { text: 'Elle séquence automatiquement les deux gènes fusionnés nucléotide par nucléotide.', correct: false, correction: 'Non chef : détecter un signal de réarrangement ne revient pas à séquencer les jonctions.' },
      { text: 'Elle peut rechercher la proximité de deux loci impliqués dans une fusion, si les sondes sont adaptées.', correct: true, correction: 'Oui : c\'est le principe du schéma BCR/ABL1 du cours.' },
      { text: 'Elle peut être réalisée sur des noyaux interphasiques pour certaines indications.', correct: true, correction: 'Oui boss : elle n\'impose pas systématiquement un caryotype métaphasique réussi.' },
      { text: 'Un résultat négatif pour une cible ne renseigne pas automatiquement toutes les autres anomalies chromosomiques.', correct: true, correction: 'Oui : les sondes testent une hypothèse précise.' },
    ],
    explanation: 'La FISH visualise des cibles définies par les sondes ; elle peut être utilisée en interphase, mais une FISH ciblée n\'est pas un balayage génomique complet. (Cours, p. 16–17)'
  },
  {
    id: 47,
    type: 'QCM',
    question: 'Quelle association entre une translocation, un gène de fusion et une hémopathie est enseignée ?',
    options: [
      { text: 't(11;14), PML::RARA et lymphome du manteau.', correct: false, correction: 'Non : le lymphome du manteau est associé à t(11;14), mais pas à PML::RARA.' },
      { text: 't(9;22), BCR::ABL1 et leucémie myéloïde chronique.', correct: true, correction: 'Oui boss : c\'est l\'association classique du chromosome de Philadelphie et de la LMC.' },
      { text: 't(14;18), BCR::ABL1 et lymphome de Burkitt.', correct: false, correction: 'Non : t(14;18) évoque surtout le lymphome folliculaire, et BCR::ABL1 ne lui correspond pas.' },
      { text: 't(9;22), PML::RARA et lymphome folliculaire.', correct: false, correction: 'Non chef : PML::RARA est associé à t(15;17) dans la leucémie aiguë promyélocytaire.' },
      { text: 't(15;17), BCR::ABL1 et leucémie myéloïde chronique.', correct: false, correction: 'Non : BCR::ABL1 relève habituellement de t(9;22), pas de t(15;17).' },
    ],
    explanation: 'La t(9;22) réarrange BCR et ABL1 et constitue l\'anomalie caractéristique de la LMC ; la fusion doit être interprétée avec le contexte clinique. (Cours, p. 16–17 et 25)'
  },
  {
    id: 48,
    type: 'QRM',
    question: 'Quelles associations translocation–maladie correspondent au tableau du cours ?',
    options: [
      { text: 't(14;18) — lymphome folliculaire.', correct: true, correction: 'Oui : association classique, sans être présente dans chaque cas.' },
      { text: 't(15;17) — leucémie aiguë promyélocytaire.', correct: true, correction: 'Oui boss : cette anomalie est liée à PML::RARA dans la forme typique.' },
      { text: 't(8;14) — leucémie myéloïde chronique.', correct: false, correction: 'Non chef : t(8;14) est surtout enseignée pour le lymphome de Burkitt.' },
      { text: 't(9;22) — leucémie myéloïde chronique.', correct: true, correction: 'Oui : c\'est l\'association Ph/BCR::ABL1 classique.' },
      { text: 't(11;14) — leucémie aiguë promyélocytaire.', correct: false, correction: 'Non : le tableau la rattache au lymphome du manteau.' },
    ],
    explanation: 'Ces translocations servent de repères diagnostiques, sans faire d\'une anomalie isolée le diagnostic clinique complet. (Cours, p. 16)'
  },
  {
    id: 49,
    type: 'QCM',
    question: 'Quel réarrangement moléculaire correspond à la t(15;17) de la leucémie aiguë promyélocytaire typique ?',
    options: [
      { text: 'JAK2 V617F.', correct: false, correction: 'Non : c\'est une mutation ponctuelle recherchée dans des néoplasies myéloprolifératives, pas cette fusion.' },
      { text: 'PML::RARA.', correct: true, correction: 'Oui boss : c\'est le transcrit de fusion recherché dans cette forme de LAM.' },
      { text: 'CALR V617F.', correct: false, correction: 'Non : V617F désigne JAK2 ; CALR est un autre gène pouvant être muté dans certains syndromes myéloprolifératifs.' },
      { text: 'FLT3-ITD comme produit direct et spécifique de t(15;17).', correct: false, correction: 'Non : FLT3-ITD est une autre altération moléculaire, pas le partenaire de fusion de t(15;17).' },
      { text: 'BCR::ABL1.', correct: false, correction: 'Non chef : il correspond classiquement à t(9;22) et à la LMC.' },
    ],
    explanation: 'Le cours associe t(15;17) à la leucémie aiguë promyélocytaire et cite le transcrit PML::RARA en biologie moléculaire. (Cours, p. 16 et 25)'
  },
  {
    id: 50,
    type: 'QRM',
    question: 'Parmi les associations enseignées pour les lymphomes, lesquelles sont exactes ?',
    options: [
      { text: 't(15;17) et lymphome de Burkitt comme association de référence.', correct: false, correction: 'Non : t(15;17) renvoie à la leucémie aiguë promyélocytaire.' },
      { text: 't(11;14) et lymphome du manteau.', correct: true, correction: 'Oui : elle implique classiquement CCND1 et IGH.' },
      { text: 't(14;18) et lymphome folliculaire.', correct: true, correction: 'Oui : cette translocation implique classiquement IGH et BCL2.' },
      { text: 't(9;22) et lymphome folliculaire comme association de référence.', correct: false, correction: 'Non chef : t(9;22) renvoie surtout à BCR::ABL1 et à la LMC dans le cours.' },
      { text: 't(8;14) et lymphome de Burkitt.', correct: true, correction: 'Oui boss : elle met classiquement en jeu MYC et IGH.' },
    ],
    explanation: 'Le tableau p. 16 associe ces trois translocations à des types de lymphomes ; ce sont des repères fréquents, pas des étiquettes exclusives sans contexte. (Cours, p. 16)'
  },
  {
    id: 51,
    type: 'QCM',
    question: 'Chez un adulte avec polynucléose neutrophile et présence de myélocytes et métamyélocytes sanguins, quelle démarche correspond au cas clinique du cours ?',
    options: [
      { text: 'Suspecter une LMC et rechercher une anomalie BCR::ABL1 par les examens adaptés.', correct: true, correction: 'Oui boss : la formule oriente, puis cytogénétique et/ou biologie moléculaire vérifient l\'hypothèse.' },
      { text: 'N\'utiliser qu\'une recherche de JAK2 V617F pour prouver la t(9;22).', correct: false, correction: 'Non : JAK2 V617F et BCR::ABL1 sont des anomalies distinctes.' },
      { text: 'Conclure à une LMC certaine sur la seule présence de myélocytes.', correct: false, correction: 'Non chef : une myélémie peut avoir d\'autres causes et ne prouve pas BCR::ABL1.' },
      { text: 'Exclure toute hémopathie parce que le patient est en bon état général.', correct: false, correction: 'Non : l\'état général conservé n\'annule pas l\'anomalie de l\'hémogramme.' },
      { text: 'Conclure d\'emblée à un lymphome folliculaire car les granulocytes augmentent.', correct: false, correction: 'Non : les signes décrits orientent ici vers une prolifération myéloïde à explorer.' },
    ],
    explanation: 'Le cas du support associe neutrophilie et myélémie, puis utilise le caryotype et la FISH pour étayer la suspicion de LMC. (Cours, p. 16–17)'
  },
  {
    id: 52,
    type: 'QRM',
    question: 'À propos de la culture de progéniteurs hématopoïétiques, quelles propositions sont justes ?',
    options: [
      { text: 'La culture peut aussi contribuer à évaluer la qualité d\'un greffon en thérapie cellulaire.', correct: true, correction: 'Oui : le support cite cette application.' },
      { text: 'Dans la polyglobulie primitive, une pousse de progéniteurs érythroïdes sans EPO ajoutée peut soutenir le diagnostic.', correct: true, correction: 'Oui boss : la croissance autonome est un argument, pas une preuve suffisante à elle seule.' },
      { text: 'La culture de progéniteurs ne peut jamais utiliser de facteurs de croissance.', correct: false, correction: 'Non : on en ajoute normalement ; l\'absence d\'EPO est précisément la particularité de l\'exemple cité.' },
      { text: 'Une pousse érythroïde spontanée sans EPO suffit, isolément, à confirmer toute polyglobulie primitive.', correct: false, correction: 'Non chef : c\'est un argument biologique à intégrer au reste du bilan.' },
      { text: 'Cette méthode est moins utilisée qu\'autrefois depuis le développement de la biologie moléculaire.', correct: true, correction: 'Oui : le cours la présente comme un outil devenu moins courant.' },
    ],
    explanation: 'La culture de progéniteurs est moins courante ; une croissance érythroïde autonome sans EPO peut orienter vers la polyglobulie primitive et la méthode peut servir à évaluer un greffon. (Cours, p. 26)'
  },
  {
    id: 53,
    type: 'QCM',
    question: 'Que désigne précisément le chromosome de Philadelphie dans la t(9;22) classique ?',
    options: [
      { text: 'Le transcrit d\'ARN BCR::ABL1, indépendamment de tout chromosome.', correct: false, correction: 'Non : le transcrit est la conséquence moléculaire du réarrangement, pas le chromosome lui-même.' },
      { text: 'Le chromosome 9 normal avant tout réarrangement.', correct: false, correction: 'Non : dans la forme classique, le chromosome de Philadelphie est le dérivé 22.' },
      { text: 'Le chromosome 22 remanié, issu de la translocation avec le chromosome 9.', correct: true, correction: 'Oui boss : c\'est le dérivé 22, souvent raccourci, qui porte classiquement la fusion BCR::ABL1.' },
      { text: 'Un chromosome 22 normal simplement porteur de plusieurs copies de BCR, sans réarrangement.', correct: false, correction: 'Non : le chromosome de Philadelphie désigne un chromosome 22 dérivé de la translocation t(9;22), pas une simple amplification.' },
      { text: 'Tout chromosome 22 normal d\'un individu, même sans translocation.', correct: false, correction: 'Non chef : le nom vise le chromosome 22 anormal, pas chaque chromosome 22.' },
    ],
    explanation: 'La formulation « le chromosome 22 se nomme chromosome de Philadelphie » du support doit être précisée : c\'est le chromosome 22 dérivé de t(9;22). (Cours, p. 17)'
  },
  {
    id: 54,
    type: 'QRM',
    question: 'Comment interpréter la FISH BCR/ABL1 schématisée dans le cas de LMC ?',
    options: [
      { text: 'Un signal de fusion des couleurs est compatible avec leur rapprochement dans un réarrangement BCR::ABL1.', correct: true, correction: 'Oui boss : c\'est l\'interprétation du signal jaune présenté, dans le cadre d\'un essai validé.' },
      { text: 'Une FISH positive détermine automatiquement la séquence nucléotidique de la jonction de fusion.', correct: false, correction: 'Non : la FISH montre une disposition spatiale ciblée, sans séquencer la jonction.' },
      { text: 'Des sondes différentes ciblent les régions BCR et ABL1.', correct: true, correction: 'Oui : le schéma emploie deux couleurs pour suivre ces deux loci.' },
      { text: 'La configuration des signaux doit être interprétée selon les sondes et les contrôles employés.', correct: true, correction: 'Oui : une simple couleur isolée ne remplace pas la lecture complète d\'un test FISH.' },
      { text: 'La couleur jaune indique à elle seule la quantité exacte d\'ARN BCR::ABL1 circulant.', correct: false, correction: 'Non chef : le suivi du transcrit se fait plutôt par RT-qPCR quantitative.' },
    ],
    explanation: 'La figure associe BCR rouge et ABL1 vert ; leur signal de fusion soutient un réarrangement, sans donner à lui seul le niveau d\'ARN ou la séquence de jonction. (Cours, p. 17)'
  },
  {
    id: 55,
    type: 'QCM',
    question: 'Quel examen est le plus adapté au suivi sériel de la quantité du transcrit BCR::ABL1 sous traitement de la LMC ?',
    options: [
      { text: 'Un seul caryotype conventionnel répété sans autre méthode pour mesurer précisément l\'ARN.', correct: false, correction: 'Non chef : le caryotype compte les métaphases anormales, mais ne dose pas directement l\'ARN de fusion.' },
      { text: 'Une FISH choisie pour lire la séquence exacte de l\'ARN après chaque cure.', correct: false, correction: 'Non : la FISH montre des signaux nucléiques ciblés, pas la séquence et la quantité du transcrit avec la sensibilité de la RT-qPCR.' },
      { text: 'Le seul dosage de l\'hémoglobine comme substitut direct à la fusion BCR::ABL1.', correct: false, correction: 'Non : l\'hémoglobine renseigne l\'état hématologique, pas la réponse moléculaire spécifique.' },
      { text: 'Une RT-qPCR quantitative standardisée sur l\'ARN.', correct: true, correction: 'Oui boss : elle mesure le transcrit de fusion et permet de comparer son évolution dans le temps.' },
      { text: 'Un examen morphologique des myélocytes pour compter les copies d\'ARN de fusion.', correct: false, correction: 'Non : la morphologie et la quantification du transcrit sont des mesures différentes.' },
    ],
    explanation: 'Le support indique que le transcrit BCR::ABL1 est recherché puis quantifié au cours du traitement ; les recommandations privilégient un suivi moléculaire standardisé. (Cours, p. 25)'
  },
  {
    id: 56,
    type: 'QRM',
    question: 'Quelles contributions complémentaires des examens sont pertinentes au diagnostic d\'une LMC ?',
    options: [
      { text: 'Une recherche de JAK2 V617F est équivalente à la détection de BCR::ABL1.', correct: false, correction: 'Non : ce sont des cibles moléculaires distinctes utilisées dans des contextes différents.' },
      { text: 'La FISH ciblée peut rechercher le rapprochement BCR/ABL1 sur les cellules examinées.', correct: true, correction: 'Oui boss : des sondes adaptées détectent la fusion ou un motif de signaux compatible.' },
      { text: 'Le caryotype peut voir la t(9;22) et d\'éventuelles anomalies chromosomiques additionnelles visibles.', correct: true, correction: 'Oui : sa vue d\'ensemble apporte autre chose qu\'un test ciblé.' },
      { text: 'Une FISH BCR/ABL1 négative suffit toujours à exclure tout réarrangement cryptique et toute LMC.', correct: false, correction: 'Non chef : la sensibilité et les régions sondées comptent ; une autre méthode peut être nécessaire si la suspicion persiste.' },
      { text: 'La RT-PCR sur l\'ARN peut détecter le transcrit de fusion et en préciser le type selon l\'essai.', correct: true, correction: 'Oui : elle prépare aussi le choix d\'un suivi moléculaire approprié.' },
    ],
    explanation: 'Caryotype, FISH et RT-PCR se complètent pour confirmer et caractériser BCR::ABL1 ; aucun n\'est interchangeable avec JAK2 V617F. (Cours, p. 15–17 et 25)'
  },
  {
    id: 57,
    type: 'QCM',
    question: 'Quelle paire « support analysé – anomalie recherchée » correspond à la biologie moléculaire du cours ?',
    options: [
      { text: 'ADN – quantité des anticorps anti-BCR ; ARN – activité de la protéine JAK2.', correct: false, correction: 'Non : ni le dosage d\'anticorps ni l\'activité enzymatique ne correspondent aux cibles décrites.' },
      { text: 'Plasma – t(9;22) au caryotype ; ARN – coloration des plaquettes.', correct: false, correction: 'Non : le caryotype observe des cellules nucléées et la coloration plaquettaire n\'est pas une analyse de transcrit.' },
      { text: 'ARN – nombre de granulocytes ; ADN – hématocrite.', correct: false, correction: 'Non : ces données viennent de l\'hémogramme, pas du séquençage ou de la PCR ciblée.' },
      { text: 'ARN – nombre de chromosomes métaphasiques ; ADN – taux d\'hémoglobine.', correct: false, correction: 'Non chef : caryotype et hémogramme sont d\'autres mesures.' },
      { text: 'ARN – transcrit de fusion BCR::ABL1 ; ADN – mutation JAK2 V617F.', correct: true, correction: 'Oui boss : le cours sépare exemples de transcrits de fusion et variants de l\'ADN.' },
    ],
    explanation: 'Le cours cite des transcrits de fusion sur l\'ARN et des mutations comme JAK2 V617F, CALR ou FLT3-ITD sur l\'ADN. (Cours, p. 25)'
  },
  {
    id: 58,
    type: 'QRM',
    question: 'Devant des adénopathies faisant suspecter un lymphome, quelles propositions sur la biopsie ganglionnaire sont exactes ?',
    options: [
      { text: 'La seule numération sanguine décrit suffisamment l\'architecture du ganglion pour remplacer toute biopsie.', correct: false, correction: 'Non chef : l\'hémogramme ne montre pas l\'organisation du tissu ganglionnaire.' },
      { text: 'Selon le contexte, on peut prévoir des examens cytogénétiques, moléculaires ou bactériologiques.', correct: true, correction: 'Oui : le choix dépend de l\'hypothèse clinique et des conditions de prélèvement.' },
      { text: 'Selon la question diagnostique, le prélèvement peut aussi servir à l\'immunophénotypage.', correct: true, correction: 'Oui boss : plusieurs analyses peuvent être organisées à partir du prélèvement.' },
      { text: 'Elle peut fournir du tissu pour un examen anatomopathologique.', correct: true, correction: 'Oui : l\'étude du tissu est centrale pour caractériser une lésion ganglionnaire.' },
      { text: 'Une biopsie ganglionnaire est réservée à la bactériologie et ne peut pas éclairer un lymphome.', correct: false, correction: 'Non : la suspicion de lymphome est justement une indication fréquente de prélèvement ganglionnaire.' },
    ],
    explanation: 'La biopsie d\'une adénopathie peut alimenter plusieurs examens, notamment l\'anatomopathologie, l\'immunophénotypage et, selon le contexte, les analyses génétiques ou microbiologiques. (Cours, p. 26)'
  },
  {
    id: 59,
    type: 'QCM',
    question: 'Dans quel contexte le cours propose-t-il la recherche de JAK2 V617F ?',
    options: [
      { text: 'Une suspicion de leucémie aiguë promyélocytaire pour identifier PML::RARA par JAK2.', correct: false, correction: 'Non : il faut rechercher la fusion PML::RARA avec des méthodes adaptées.' },
      { text: 'Une suspicion de néoplasie myéloproliférative, telle qu\'une polyglobulie primitive, une thrombocytémie essentielle ou une myélofibrose.', correct: true, correction: 'Oui boss : JAK2 V617F est un marqueur possible de ces syndromes, à interpréter avec les autres données.' },
      { text: 'Tout hémogramme normal, car sa présence est universelle dans les cellules sanguines.', correct: false, correction: 'Non : il s\'agit d\'une mutation acquise possible, pas d\'un constituant normal universel.' },
      { text: 'Une suspicion de t(9;22) pour prouver directement BCR::ABL1.', correct: false, correction: 'Non chef : la mutation JAK2 V617F et la fusion BCR::ABL1 sont différentes.' },
      { text: 'Une suspicion de lymphome du manteau pour prouver la t(11;14) par la même mutation.', correct: false, correction: 'Non : t(11;14) est un réarrangement chromosomique distinct.' },
    ],
    explanation: 'Le support place JAK2 V617F dans l\'exploration des syndromes myéloprolifératifs dits Ph négatifs ; ce résultat n\'établit pas seul le sous-type. (Cours, p. 25–26)'
  },
  {
    id: 60,
    type: 'QRM',
    question: 'À propos de la recherche de JAK2 V617F, quelles propositions sont justes ?',
    options: [
      { text: 'Une PCR adaptée peut détecter la mutation dans l\'ADN.', correct: true, correction: 'Oui : le cours montre un exemple de recherche par PCR.' },
      { text: 'Une PCR négative pour V617F exclut tous les syndromes myéloprolifératifs.', correct: false, correction: 'Non : d\'autres variants ou gènes, et le contexte clinique, peuvent nécessiter exploration.' },
      { text: 'Après détection, un essai quantitatif peut estimer la fraction allélique mutée.', correct: true, correction: 'Oui boss : c\'est le sens du pourcentage de mutation évoqué dans le cours.' },
      { text: 'Un résultat positif doit être confronté à l\'hémogramme, à la clinique et aux autres examens.', correct: true, correction: 'Oui : la mutation n\'identifie pas à elle seule polyglobulie primitive, thrombocytémie essentielle ou myélofibrose.' },
      { text: 'Toute PCR JAK2 V617F positive montre obligatoirement exactement deux bandes sur n\'importe quel protocole.', correct: false, correction: 'Non chef : les bandes décrites concernent le montage illustré ; d\'autres tests donnent d\'autres lectures.' },
    ],
    explanation: 'Le cours illustre PCR puis quantification de JAK2 V617F ; la figure des deux bandes n\'est pas une règle universelle et un test négatif ne clôt pas tout bilan. (Cours, p. 25–26)'
  },
  {
    id: 61,
    type: 'QCM',
    question: 'Quel est l\'intérêt principal d\'un panel de séquençage haut débit (NGS) dans les leucémies aiguës ?',
    options: [
      { text: 'Prouver toute translocation possible, même si aucune région pertinente n\'est couverte par l\'essai.', correct: false, correction: 'Non : la capacité de détection dépend de la conception et des limites du panel.' },
      { text: 'Remplacer systématiquement la morphologie, l\'immunophénotypage et tous les autres examens.', correct: false, correction: 'Non : la caractérisation d\'une hémopathie combine plusieurs méthodes.' },
      { text: 'Quantifier uniquement l\'hémoglobine et les plaquettes à partir de l\'ARN.', correct: false, correction: 'Non : l\'hémogramme assure ces mesures, pas un panel NGS.' },
      { text: 'Analyser simultanément de nombreux gènes pour établir une signature moléculaire utile à l\'orientation diagnostique, pronostique ou thérapeutique.', correct: true, correction: 'Oui boss : plusieurs altérations peuvent coexister ; le panel aide à les caractériser.' },
      { text: 'Voir directement tous les chromosomes métaphasiques sans culture ni lecture de séquence.', correct: false, correction: 'Non chef : le NGS séquence des régions définies ; ce n\'est pas un caryotype en image.' },
    ],
    explanation: 'Le support présente le NGS comme une analyse simultanée de plusieurs gènes pour construire une signature moléculaire, notamment en leucémie aiguë. (Cours, p. 25–26)'
  },
  {
    id: 62,
    type: 'QRM',
    question: 'Quelles propositions sur les cibles moléculaires et le NGS sont correctes ?',
    options: [
      { text: 'Tous les panels NGS contiennent obligatoirement exactement cinquante gènes.', correct: false, correction: 'Non chef : le nombre indiqué dans le cours est un exemple de panel, pas une constante technique.' },
      { text: 'Un panel NGS négatif exclut toutes les anomalies génétiques, même hors des régions analysées.', correct: false, correction: 'Non : un résultat négatif est limité par les gènes, régions et types de variants couverts.' },
      { text: 'FLT3-ITD est une altération de l\'ADN recherchée dans certaines leucémies aiguës myéloïdes.', correct: true, correction: 'Oui boss : elle figure parmi les exemples donnés.' },
      { text: 'Un panel NGS peut explorer plusieurs gènes au cours d\'une seule analyse.', correct: true, correction: 'Oui : c\'est précisément son avantage dans les maladies à mutations associées.' },
      { text: 'JAK2 V617F et des mutations de CALR peuvent être recherchées sur l\'ADN dans des syndromes myéloprolifératifs.', correct: true, correction: 'Oui : le cours les cite comme exemples de cibles génomiques.' },
    ],
    explanation: 'La biologie moléculaire recherche des variants de l\'ADN et des transcrits sur l\'ARN ; la taille et la couverture d\'un panel NGS varient selon l\'essai. (Cours, p. 25–26)'
  },
  {
    id: 63,
    type: 'QCM',
    question: 'Quelle utilisation de l\'imagerie en hématologie correspond au cours ?',
    options: [
      { text: 'Une échographie abdominale peut aider à explorer une splénomégalie.', correct: true, correction: 'Oui boss : c\'est l\'exemple d\'imagerie abdominale donné dans le support.' },
      { text: 'Une TEP identifie par elle seule le type histologique précis d\'un lymphome.', correct: false, correction: 'Non chef : elle repère des zones métaboliquement actives, mais ne remplace pas l\'analyse tissulaire.' },
      { text: 'Une IRM remplace systématiquement tous les examens sanguins et médullaires.', correct: false, correction: 'Non : l\'imagerie complète ces examens selon la question clinique.' },
      { text: 'Une radiographie détermine directement la mutation JAK2 V617F.', correct: false, correction: 'Non : la mutation se recherche par biologie moléculaire.' },
      { text: 'Une échographie abdominale quantifie le transcrit BCR::ABL1 pour le suivi moléculaire.', correct: false, correction: 'Non : cette quantification relève d\'une RT-qPCR adaptée.' },
    ],
    explanation: 'Le cours cite l\'échographie pour une splénomégalie et la TEP pour des zones métaboliquement actives ; l\'imagerie est choisie selon l\'hypothèse clinique. (Cours, p. 26)'
  },
  {
    id: 64,
    type: 'QRM',
    question: 'Pour choisir un examen devant une anomalie hématologique, quelles associations « question posée – méthode » sont pertinentes ?',
    options: [
      { text: 'Suivre la quantité d\'ARN BCR::ABL1 au cours d\'un traitement – RT-qPCR.', correct: true, correction: 'Oui : le suivi du transcrit repose sur une méthode moléculaire quantitative validée.' },
      { text: 'Rechercher une anomalie chromosomique visible non définie d\'avance – caryotype conventionnel.', correct: true, correction: 'Oui : le caryotype donne une vue d\'ensemble des chromosomes à sa résolution.' },
      { text: 'Vérifier un réarrangement BCR/ABL1 déjà suspecté sur des cellules – FISH ciblée.', correct: true, correction: 'Oui boss : des sondes appropriées peuvent rechercher la juxtaposition des deux loci.' },
      { text: 'Explorer JAK2 V617F dans une suspicion de néoplasie myéloproliférative – test moléculaire adapté.', correct: true, correction: 'Oui : une PCR spécifique peut rechercher ce variant de l\'ADN.' },
      { text: 'Détecter automatiquement toute mutation ponctuelle par simple lecture d\'un caryotype normal.', correct: false, correction: 'Non chef : un caryotype normal n\'exclut pas les variants nucléotidiques.' },
    ],
    explanation: 'Le choix de l\'examen dépend de l\'échelle recherchée : chromosome, locus ciblé, transcrit ARN ou variant de l\'ADN. (Cours, p. 15–17 et 25–26)'
  },
  {
    id: 65,
    type: 'QCM',
    question: 'Quel paramètre de l’hémogramme définit d’abord une anémie, en tenant compte du contexte du patient ?',
    options: [
      { text: 'Le nombre de globules rouges, quelle que soit leur teneur en hémoglobine', correct: false, correction: 'Non chef, une numération d’hématies isolée ne remplace pas la mesure de l’hémoglobine.' },
      { text: 'La concentration sanguine d’hémoglobine, interprétée selon notamment l’âge, le sexe et la grossesse', correct: true, correction: 'Oui boss 🧠 L’anémie est définie par l’hémoglobine sous un seuil adapté au patient.' },
      { text: 'La présence d’une thrombocytose, même sans baisse de l’hémoglobine', correct: false, correction: 'Non chef, l’augmentation des plaquettes n’est pas le critère d’anémie.' },
      { text: 'Le VGM seul, même si l’hémoglobine est normale', correct: false, correction: 'Non, le VGM classe une anémie selon la taille moyenne des hématies ; il ne la définit pas à lui seul.' },
      { text: 'La ferritine seule, sans mesure de l’hémoglobine', correct: false, correction: 'Faux, la ferritine aide à explorer une carence en fer, mais ne définit pas une anémie.' },
    ],
    explanation: 'Le cours définit l’anémie par une concentration d’hémoglobine inférieure aux valeurs adaptées à la personne. La concentration peut aussi être influencée par une hémodilution ou une hémoconcentration. (Cours, p. 27)'
  },
  {
    id: 66,
    type: 'QRM',
    question: 'Pour orienter une anémie à partir du VGM et des réticulocytes, quelles propositions sont exactes ?',
    options: [
      { text: 'Chez l’adulte, un VGM inférieur à 80 fL correspond à une microcytose dans le repère du cours', correct: true, correction: 'Oui boss, c’est le seuil de classement utilisé dans la ronéo pour les adultes.' },
      { text: 'Un nombre élevé de réticulocytes traduit une réponse de la moelle à la baisse d’hémoglobine', correct: true, correction: 'Exact 🧠 La moelle libère davantage de jeunes hématies lorsqu’elle régénère.' },
      { text: 'Une anémie avec réticulocytes bas est forcément une hémorragie aiguë déjà compensée', correct: false, correction: 'Faux, des réticulocytes bas évoquent surtout une réponse médullaire insuffisante ; le délai depuis une hémorragie compte aussi.' },
      { text: 'Dans une anémie normocytaire ou macrocytaire, les réticulocytes aident à distinguer une réponse régénérative d’une production insuffisante', correct: true, correction: 'Oui, leur nombre oriente vers une perte/destruction périphérique ou vers une production insuffisante, selon le contexte.' },
      { text: 'Un VGM supérieur à 100 fL prouve à lui seul une carence en vitamine B12', correct: false, correction: 'Non chef, la macrocytose a plusieurs causes, dont B9/B12, alcool, maladie hépatique et syndromes médullaires.' },
    ],
    explanation: 'VGM et réticulocytes remplissent deux rôles distincts : classer la taille des hématies puis apprécier la régénération. Le seuil de 120 G/L cité dans le cours est un repère d’orientation, à interpréter dans la situation clinique. (Cours, p. 27–28)'
  },
  {
    id: 67,
    type: 'QCM',
    question: 'Une patiente de 17 ans présente une anémie microcytaire hypochrome et une thrombocytose. Quel examen est le plus utile en première intention pour l’hypothèse principale du cours ?',
    options: [
      { text: 'Un caryotype médullaire comme unique test avant l’examen clinique', correct: false, correction: 'Non chef, ce n’est pas la première étape devant cette anémie microcytaire typique.' },
      { text: 'L’immunophénotypage CD5/CD19 des lymphocytes', correct: false, correction: 'Non, il répond surtout à une suspicion de prolifération lymphoïde, pas à l’hypothèse initiale ici.' },
      { text: 'La recherche de BCR::ABL1 avant toute étude du fer', correct: false, correction: 'Faux, le tableau décrit n’est pas d’abord celui d’une LMC avec myélémie et polynucléose.' },
      { text: 'Le dosage de la ferritine', correct: true, correction: 'Oui boss 🎯 Il explore en premier lieu la carence martiale, hypothèse fréquente et compatible avec une thrombocytose réactionnelle.' },
      { text: 'La recherche immédiate de JAK2 V617F comme seule exploration', correct: false, correction: 'Non chef, la thrombocytose peut être réactionnelle ; on explore d’abord le tableau microcytaire et le contexte.' },
    ],
    explanation: 'Le cas du cours associe microcytose, hypochromie et thrombocytose chez une adolescente. Une carence en fer est à rechercher par la ferritine ; la thrombocytose est un indice possible, pas une preuve spécifique. (Cours, p. 28–29)'
  },
  {
    id: 68,
    type: 'QRM',
    question: 'Devant une anémie microcytaire, quelles interprétations restent justes ?',
    options: [
      { text: 'La ferritine peut être augmentée par l’inflammation et doit être interprétée avec le contexte, notamment la CRP', correct: true, correction: 'Exact, une ferritine non basse ne suffit pas toujours à exclure une carence lorsqu’il existe une inflammation.' },
      { text: 'Une ferritine basse soutient fortement une carence en fer', correct: true, correction: 'Oui boss, une ferritine abaissée est un marqueur majeur de réserves en fer diminuées.' },
      { text: 'Une ferritine et une CRP normales démontrent à elles seules une thalassémie', correct: false, correction: 'Non chef, elles n’établissent pas une thalassémie sans autres arguments et analyse adaptée.' },
      { text: 'Le fer sérique isolé suffit toujours à distinguer carence martiale et inflammation', correct: false, correction: 'Faux, le fer sérique isolé varie et ne remplace pas l’interprétation des marqueurs du bilan martial.' },
      { text: 'Une étude de l’hémoglobine est pertinente si le tableau évoque une thalassémie après le bilan initial', correct: true, correction: 'Oui 🧠 Les anomalies de synthèse des chaînes d’hémoglobine peuvent entraîner une microcytose.' },
    ],
    explanation: 'Le cours cite carence martiale, inflammation et thalassémies parmi les causes fréquentes de microcytose. Son raccourci « ferritine et CRP normales = thalassémie » n’est pas une preuve diagnostique ; la ferritine est aussi une protéine de phase aiguë. (Cours, p. 28–29 ; nuance diagnostique)'
  },
  {
    id: 69,
    type: 'QCM',
    question: 'Une thrombopénie inattendue, sans signe hémorragique, est mesurée sur tube EDTA. Quelle vérification recherche en priorité un artefact de numération ?',
    options: [
      { text: 'Examiner le frottis à la recherche d’agrégats plaquettaires et, si besoin, répéter sur tube citraté', correct: true, correction: 'Oui boss 🧠 L’agrégation in vitro sur EDTA peut faire compter trop peu de plaquettes à l’automate.' },
      { text: 'Ignorer le frottis parce que la numération automatisée ne peut jamais se tromper', correct: false, correction: 'Non chef, le frottis est justement utile pour repérer les anomalies et artefacts de comptage.' },
      { text: 'Diagnostiquer une CIVD uniquement à partir du chiffre plaquettaire automatisé', correct: false, correction: 'Non, une CIVD nécessite un contexte et des tests d’hémostase, entre autres.' },
      { text: 'Conclure d’emblée à un purpura thrombopénique immunologique sans revoir le prélèvement', correct: false, correction: 'Non chef, il faut d’abord vérifier si la thrombopénie est réelle lorsque le résultat est inattendu.' },
      { text: 'Interpréter des agrégats plaquettaires comme une thrombocytose certaine', correct: false, correction: 'Faux, les agrégats sur frottis expliquent au contraire souvent une fausse baisse de la numération automatisée.' },
    ],
    explanation: 'La pseudothrombopénie liée à des agrégats sur EDTA est un artefact in vitro. Le frottis et un prélèvement dans un autre anticoagulant, souvent le citrate, permettent de le vérifier. (Cours, p. 29)'
  },
  {
    id: 70,
    type: 'QRM',
    question: 'Une thrombopénie est confirmée après vérification du prélèvement. Quelles étapes d’orientation sont adaptées ?',
    options: [
      { text: 'Rechercher des schizocytes au frottis si une microangiopathie thrombotique est suspectée', correct: true, correction: 'Exact 🧠 Des fragments d’hématies sont un signal important dans cette orientation.' },
      { text: 'Réaliser systématiquement une biopsie médullaire avant de rechercher un saignement', correct: false, correction: 'Faux, l’évaluation clinique et les vérifications initiales précèdent les explorations médullaires ciblées.' },
      { text: 'Utiliser les tests d’hémostase pour étayer ou écarter une CIVD selon le contexte', correct: true, correction: 'Oui, la CIVD se discute avec le tableau clinique et biologique d’hémostase.' },
      { text: 'Évaluer la présence et la gravité d’un syndrome hémorragique', correct: true, correction: 'Oui boss, la gravité clinique ne se déduit pas du seul mécanisme supposé.' },
      { text: 'Déduire à partir du chiffre plaquettaire seul si la cause est centrale, immunologique ou splénique', correct: false, correction: 'Non chef, le nombre de plaquettes ne classe pas à lui seul le mécanisme.' },
    ],
    explanation: 'Après exclusion d’un artefact, le cours place la gravité hémorragique au premier plan et distingue destruction/consommation, séquestration et défaut de production. Schizocytes et bilan d’hémostase orientent respectivement vers MAT et CIVD lorsque le contexte le justifie. (Cours, p. 29–30)'
  },
  {
    id: 71,
    type: 'QCM',
    question: 'Une patiente sous clozapine a des PNN à 0,35 G/L et de la fièvre. Quelle est la conduite diagnostique prioritaire ?',
    options: [
      { text: 'Attendre le prochain contrôle mensuel avant d’informer l’équipe soignante', correct: false, correction: 'Faux, la profondeur des PNN et la fièvre rendent la situation urgente.' },
      { text: 'Classer ce résultat comme une variation physiologique sans autre vérification', correct: false, correction: 'Non chef, une neutropénie profonde fébrile ne doit pas être banalisée.' },
      { text: 'Alerter sans délai et rechercher une infection dans un contexte de neutropénie profonde', correct: true, correction: 'Oui boss 🚨 Fièvre et PNN très bas imposent une évaluation rapide ; le médicament doit être identifié dans l’enquête.' },
      { text: 'Exclure une agranulocytose parce que les globules rouges ne sont pas bas', correct: false, correction: 'Non chef, l’agranulocytose concerne les neutrophiles et peut être isolée.' },
      { text: 'Attribuer systématiquement la fièvre à la clozapine sans rechercher de foyer infectieux', correct: false, correction: 'Non, une cause infectieuse doit être évaluée rapidement malgré un médicament suspect.' },
    ],
    explanation: 'Le cours illustre une agranulocytose sous clozapine. La profondeur de la neutropénie, surtout avec fièvre, motive une évaluation urgente et une recherche d’infection ; l’interrogatoire médicamenteux est essentiel. (Cours, p. 30)'
  },
  {
    id: 72,
    type: 'QRM',
    question: 'À propos d’une neutropénie découverte sur l’hémogramme, quelles propositions sont exactes ?',
    options: [
      { text: 'Un nombre de PNN bas associé au phénotype Duffy-null est souvent modéré, mais n’explique pas d’emblée une neutropénie profonde fébrile', correct: true, correction: 'Oui, il faut tenir compte du contexte et ne pas attribuer automatiquement une baisse grave à une variation constitutionnelle.' },
      { text: 'L’interrogatoire médicamenteux est important devant une neutropénie profonde', correct: true, correction: 'Exact, certains médicaments peuvent provoquer une agranulocytose.' },
      { text: 'Une carence en B9 ou B12 peut être envisagée, surtout si plusieurs lignées sont atteintes', correct: true, correction: 'Oui 🧠 Une anomalie de production médullaire peut dépasser la lignée neutrophile.' },
      { text: 'Le risque infectieux augmente notamment lorsque le nombre absolu de PNN diminue fortement', correct: true, correction: 'Oui boss, la profondeur et la durée de la neutropénie comptent dans le risque.' },
      { text: 'La présence de fièvre devient rassurante dès que les PNN passent sous 0,5 G/L', correct: false, correction: 'Non chef, une fièvre sur neutropénie profonde est au contraire un signal d’alerte.' },
    ],
    explanation: 'La neutropénie s’interprète avec sa profondeur, son évolution, les médicaments et les autres lignées. La variation liée à Duffy-null peut donner un nombre de PNN de base plus faible sans justifier la banalisation d’une neutropénie profonde. (Cours, p. 30 ; terminologie précisée)'
  },
  {
    id: 73,
    type: 'QCM',
    question: 'Quel ensemble de résultats correspond à une pancytopénie dans le sens utilisé par le cours ?',
    options: [
      { text: 'Anémie et thrombopénie sans atteinte neutrophile', correct: false, correction: 'Non chef, deux lignées abaissées définissent une bicytopénie dans ce contexte.' },
      { text: 'Thrombocytose, polyglobulie et polynucléose neutrophile', correct: false, correction: 'Faux, ce sont des augmentations, pas trois cytopénies.' },
      { text: 'Leucopénie isolée avec hémoglobine et plaquettes normales', correct: false, correction: 'Non, une seule lignée abaissée ne constitue pas une pancytopénie.' },
      { text: 'Anémie, neutropénie et thrombopénie associées', correct: true, correction: 'Oui boss 🎯 Les trois lignées considérées sont ici rouge, neutrophile et plaquettaire.' },
      { text: 'Anémie et microcytose sans diminution des PNN ni des plaquettes', correct: false, correction: 'Non chef, la taille des globules rouges ne crée pas à elle seule une cytopénie sur les trois lignées.' },
    ],
    explanation: 'Une pancytopénie correspond à une baisse des lignées rouge, blanche et plaquettaire ; l’exemple du cours précise une neutropénie pour la lignée blanche. Une baisse sur deux lignées est une bicytopénie. (Cours, p. 31 ; définition générale précisée)'
  },
  {
    id: 74,
    type: 'QRM',
    question: 'Face à une pancytopénie avec réticulocytes bas, quelles observations orientent correctement l’exploration médullaire ?',
    options: [
      { text: 'Des mégaloblastes peuvent orienter vers une carence en folates ou en vitamine B12', correct: true, correction: 'Exact, ils traduisent un trouble de maturation compatible avec ces carences.' },
      { text: 'Un myélogramme pauvre ou non informatif peut conduire à une biopsie ostéomédullaire pour étudier richesse et fibrose', correct: true, correction: 'Oui, l’architecture est mieux évaluée sur le fragment biopsique.' },
      { text: 'Une fibrose médullaire peut toujours être quantifiée de façon fiable sur un simple frottis sanguin', correct: false, correction: 'Faux, la biopsie médullaire est l’examen clé pour évaluer l’architecture et la fibrose.' },
      { text: 'Une moelle riche en blastes exclut toute hémopathie maligne', correct: false, correction: 'Non chef, un excès de blastes oriente au contraire vers une leucémie aiguë dans le bon contexte.' },
      { text: 'Des blastes nombreux dans une moelle envahie font suspecter une leucémie aiguë', correct: true, correction: 'Oui boss 🧠 La cytologie médullaire peut montrer une population anormale de cellules immatures.' },
    ],
    explanation: 'Le cours distingue moelle envahie, anomalies morphologiques et prélèvement pauvre. Le myélogramme donne la cytologie ; la biopsie ostéomédullaire complète l’étude de la richesse et de la fibrose. (Cours, p. 31–32)'
  },
  {
    id: 75,
    type: 'QCM',
    question: 'Une patiente avec alimentation très restrictive présente macrocytose, pancytopénie, réticulocytes bas et PNN hypersegmentés. Quelle piste faut-il explorer en priorité ?',
    options: [
      { text: 'Une carence martiale isolée comme cause habituelle de la macrocytose et de la neutropénie', correct: false, correction: 'Non chef, une carence en fer isolée donne classiquement une microcytose.' },
      { text: 'Une leucémie myéloïde chronique définie seulement par les PNN hypersegmentés', correct: false, correction: 'Faux, le tableau typique de LMC comporte plutôt une prolifération granulocytaire et une myélémie.' },
      { text: 'Une carence en vitamine B9 ou B12', correct: true, correction: 'Oui boss 🧠 La macrocytose arégénérative avec PNN hypersegmentés oriente vers une carence mégaloblastique.' },
      { text: 'Une polyglobulie secondaire par production d’EPO', correct: false, correction: 'Non, cette hypothèse implique une augmentation de la masse rouge, alors qu’il existe ici une anémie.' },
      { text: 'Une pseudothrombopénie sur EDTA comme explication certaine de toutes les lignées basses', correct: false, correction: 'Non chef, un artefact plaquettaire n’explique pas l’anémie, la neutropénie et les anomalies morphologiques.' },
    ],
    explanation: 'Le cas clinique associe macrocytose, arégénération et plusieurs cytopénies. Les PNN hypersegmentés renforcent l’orientation vers une carence B9/B12, à confirmer par les dosages adaptés. (Cours, p. 31–32)'
  },
  {
    id: 76,
    type: 'QRM',
    question: 'Concernant l’exploration d’une polyglobulie, quelles propositions sont justes ?',
    options: [
      { text: 'Une hypoxie prolongée peut stimuler la sécrétion rénale d’EPO et provoquer une polyglobulie secondaire', correct: true, correction: 'Exact, le cours cite notamment les apnées du sommeil, la BPCO et l’altitude.' },
      { text: 'Une sécrétion inappropriée d’EPO par certaines tumeurs peut expliquer une polyglobulie secondaire', correct: true, correction: 'Oui 🧠 Certaines tumeurs peuvent augmenter l’érythropoïèse via l’EPO.' },
      { text: 'La mutation JAK2 V617F oriente vers une néoplasie myéloproliférative telle que la maladie de Vaquez', correct: true, correction: 'Oui boss, cette recherche moléculaire est centrale devant une suspicion de polyglobulie primitive.' },
      { text: 'Une recherche négative de JAK2 V617F exclut à elle seule toute maladie de Vaquez', correct: false, correction: 'Faux, l’évaluation diagnostique ne se réduit pas à ce variant : d’autres mutations JAK2 et les autres critères comptent.' },
      { text: 'Une hémoglobine élevée pendant une déshydratation prouve toujours une augmentation de la masse totale des hématies', correct: false, correction: 'Non chef, une hémoconcentration peut augmenter la concentration mesurée sans vraie augmentation de la masse rouge.' },
    ],
    explanation: 'Le cours oppose polyglobulie primitive, notamment Vaquez associée à JAK2, et causes secondaires par hypoxie ou EPO. Une concentration élevée d’hémoglobine doit aussi être interprétée avec l’état d’hydratation. (Cours, p. 27, 32–33 ; exclusion absolue précisée)'
  },
  {
    id: 77,
    type: 'QCM',
    question: 'Un homme de 60 ans a un hématocrite de 60 %, une thrombocytose et un prurit déclenché par l’eau. Quel examen moléculaire est prioritaire pour l’hypothèse principale ?',
    options: [
      { text: 'L’étude des chaînes de globine pour conclure à une thalassémie', correct: false, correction: 'Faux, la thalassémie provoque typiquement une microcytose, pas ce tableau de polyglobulie.' },
      { text: 'Le typage CD5/CD19 pour conclure à une LLC', correct: false, correction: 'Non chef, le tableau est dominé par l’érythrocytose, pas par une hyperlymphocytose persistante.' },
      { text: 'La recherche de BCR::ABL1 comme seul examen d’une polyglobulie', correct: false, correction: 'Non, BCR::ABL1 est surtout recherché devant une suspicion de LMC.' },
      { text: 'La recherche de JAK2 V617F', correct: true, correction: 'Oui boss 🎯 Le prurit aquagénique et l’augmentation de plusieurs lignées orientent vers une maladie de Vaquez.' },
      { text: 'Le test direct à l’antiglobuline pour conclure à une hémolyse immune', correct: false, correction: 'Non chef, le cas ne présente pas une anémie hémolytique comme problème principal.' },
    ],
    explanation: 'Le cas du cours est évocateur d’une maladie de Vaquez : polyglobulie, thrombocytose et prurit aquagénique. La recherche de JAK2 V617F contribue au diagnostic ; l’hématocrite très élevé impose aussi une évaluation clinique rapide du risque thrombotique. (Cours, p. 32–33)'
  },
  {
    id: 78,
    type: 'QRM',
    question: 'Devant une thrombocytose confirmée, quelles démarches correspondent au cours ?',
    options: [
      { text: 'Vérifier le frottis si un artefact de comptage est possible', correct: true, correction: 'Exact, des fragments d’hématies ou d’autres éléments peuvent être comptés à tort comme plaquettes.' },
      { text: 'Si elle persiste sans cause secondaire évidente, envisager une néoplasie myéloproliférative et des recherches JAK2, CALR ou MPL adaptées', correct: true, correction: 'Oui, le bilan moléculaire devient pertinent après l’orientation clinique et biologique.' },
      { text: 'Rechercher d’abord une cause réactionnelle, notamment inflammation ou carence en fer', correct: true, correction: 'Oui boss 🧠 Ces situations sont fréquentes et s’évaluent avec la clinique, la CRP et la ferritine.' },
      { text: 'Conclure à une thrombocytémie essentielle dès le premier chiffre élevé, sans tenir compte du contexte', correct: false, correction: 'Non chef, une thrombocytose réactionnelle est fréquente et un chiffre isolé ne suffit pas.' },
      { text: 'Considérer que la carence martiale ne peut jamais augmenter les plaquettes', correct: false, correction: 'Faux, elle peut s’accompagner d’une thrombocytose réactionnelle.' },
    ],
    explanation: 'Le cours recommande de vérifier la réalité de la thrombocytose, puis de chercher des causes réactionnelles avant d’explorer une néoplasie myéloproliférative persistante. (Cours, p. 29, 33–34)'
  },
  {
    id: 79,
    type: 'QCM',
    question: 'Une hyperleucocytose avec polynucléose neutrophile, myélémie, thrombocytose et splénomégalie fait suspecter une LMC. Quel marqueur permet de la caractériser ?',
    options: [
      { text: 'Le réarrangement BCR::ABL1 associé à la translocation t(9;22)', correct: true, correction: 'Oui boss 🧠 Ce marqueur moléculaire/cytogénétique caractérise la LMC dans le contexte décrit.' },
      { text: 'Une ferritine abaissée comme preuve spécifique de LMC', correct: false, correction: 'Non chef, une ferritine basse oriente vers une carence en fer et ne caractérise pas la LMC.' },
      { text: 'Une expression CD5/CD19 comme seule preuve de LMC', correct: false, correction: 'Faux, ce profil évoque plutôt une population B anormale de type LLC.' },
      { text: 'La mutation JAK2 V617F comme marqueur obligatoire de toute LMC', correct: false, correction: 'Non, JAK2 V617F est surtout associé aux néoplasies myéloprolifératives BCR::ABL1 négatives, comme Vaquez.' },
      { text: 'Une CRP élevée comme confirmation spécifique du clone leucémique', correct: false, correction: 'Non chef, une CRP élevée peut soutenir une inflammation mais ne confirme pas ce réarrangement.' },
    ],
    explanation: 'La combinaison de myélémie, polynucléose, thrombocytose et splénomégalie oriente vers une LMC, mais le diagnostic exige l’identification du réarrangement BCR::ABL1 par une méthode adaptée. (Cours, p. 16–17 et 34)'
  },
  {
    id: 80,
    type: 'QRM',
    question: 'Devant une anomalie leucocytaire persistante ou la présence de blastes circulants, quelles démarches sont justes ?',
    options: [
      { text: 'Chez un adulte avec hyperlymphocytose persistante inexpliquée, demander un immunophénotypage des lymphocytes sanguins selon le contexte', correct: true, correction: 'Exact 🧠 Il aide à repérer une population clonale et à orienter vers une LLC ou une autre hémopathie.' },
      { text: 'Toute hyperlymphocytose après 40 ans suffit à diagnostiquer une LLC sans frottis ni preuve de clonalité', correct: false, correction: 'Non chef, l’âge oriente mais ne remplace ni l’examen ni l’immunophénotypage.' },
      { text: 'Examiner le frottis sanguin pour apprécier la morphologie et rechercher des blastes', correct: true, correction: 'Oui boss, la morphologie aide à distinguer une réaction banale d’une anomalie nécessitant des explorations spécialisées.' },
      { text: 'La présence de leucoblastes peut conduire à un bilan médullaire, immunophénotypique, cytogénétique et moléculaire', correct: true, correction: 'Oui, ces examens caractérisent la lignée et les anomalies d’une possible leucémie aiguë.' },
      { text: 'En cas de suspicion de leucémie aiguë, rechercher aussi des complications telles qu’une coagulopathie et un syndrome de lyse', correct: true, correction: 'Exact, le bilan d’hémostase et des paramètres métaboliques accompagne le diagnostic.' },
    ],
    explanation: 'Le cours distingue hyperlymphocytose persistante de l’adulte et blastes circulants. Le frottis guide l’orientation ; immunophénotypage et examens médullaires/génétiques caractérisent l’hémopathie si elle est suspectée. (Cours, p. 34–35)'
  },
]
