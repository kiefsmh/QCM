// Projet D1 - 80 questions QCM/QRM fondées exclusivement sur le support du cours 22.
// Les chiffres et formulations du PDF sont conservés sans actualisation externe.
export const meta = {
  title: 'Risque infectieux et micro-organismes résistants en milieu de soins',
};

export default [
  {
    id: 1,
    type: "QCM",
    question: "Selon le cours, quelle définition correspond à une infection ?",
    options: [
      { text: "Une conséquence qui apparaît obligatoirement après un acte opératoire.", correct: false, correction: "Faux. L’infection peut également survenir hors contexte de soins." },
      { text: "Un phénomène nécessitant toujours une déficience immunitaire préalable.", correct: false, correction: "Faux. Un germe très pathogène ou virulent peut également provoquer une infection." },
      { text: "Une conséquence pathologique de la présence anormale ou de la réplication d’un germe.", correct: true, correction: "Vrai. C’est la définition donnée au début de la partie sur les IAS." },
      { text: "La présence de tout micro-organisme sur une peau saine, même sans conséquence.", correct: false, correction: "Faux. Le cours insiste sur une conséquence pathologique et non sur la simple existence d’un microbiote." },
      { text: "Une réaction liée exclusivement aux bactéries.", correct: false, correction: "Faux. Le cours énumère bactéries, virus, levures, champignons et parasites." },
    ],
    explanation: "Une infection est la conséquence pathologique, dans un tissu ou l’organisme, de la présence anormale et/ou de la réplication d’un germe."
  },
  {
    id: 2,
    type: "QRM",
    question: "À propos de la survenue d’une infection et des défenses de l’hôte, quelles propositions sont exactes ?",
    options: [
      { text: "Les défenses de l’hôte sont exclusivement des anticorps.", correct: false, correction: "Faux. Elles comprennent aussi les barrières anatomiques et la réaction inflammatoire aspécifique." },
      { text: "Une brûlure renforce mécaniquement la barrière cutanée contre les germes.", correct: false, correction: "Faux. Une brûlure peut rompre cette barrière anatomique et faciliter l’entrée des microbes." },
      { text: "Une faiblesse des défenses immunitaires peut favoriser une infection.", correct: true, correction: "Vrai. C’est l’autre versant du déséquilibre hôte-micro-organisme." },
      { text: "Les réponses immunitaires spécifiques ne comprennent jamais de mécanisme cellulaire.", correct: false, correction: "Faux. Le cours comprend explicitement des réponses humorales et cellulaires." },
      { text: "Un agent très virulent peut favoriser la survenue d’une infection.", correct: true, correction: "Vrai. Le cours présente la virulence du germe comme l’un des deux grands déterminants." },
    ],
    explanation: "L’infection résulte d’un déséquilibre entre l’agressivité du germe et la capacité de défense de l’hôte ; ces défenses sont anatomiques, aspécifiques et spécifiques."
  },
  {
    id: 3,
    type: "QCM",
    question: "Quel effet est recherché par les mesures d’asepsie appliquées lors des soins ?",
    options: [
      { text: "N’être utiles que lorsque le patient présente déjà une infection.", correct: false, correction: "Faux. Elles servent avant tout à empêcher une contamination lors du soin." },
      { text: "S’appliquer exclusivement aux infections virales.", correct: false, correction: "Faux. Les mesures s’inscrivent dans la prévention globale du risque infectieux." },
      { text: "Limiter la présence des micro-organismes au moment du geste.", correct: true, correction: "Vrai. C’est le principe de prévention énoncé." },
      { text: "Remplacer systématiquement toute prévention par une antibiothérapie.", correct: false, correction: "Faux. Le cours distingue différentes mesures, notamment l’antisepsie, les vaccins et les anti-infectieux." },
      { text: "Accroître l’inoculum microbien au site de soin.", correct: false, correction: "Faux. L’objectif est exactement inverse : diminuer le risque d’exposition." },
    ],
    explanation: "Le document présente ces mesures comme destinées à limiter les micro-organismes au moment du soin afin de réduire le risque infectieux."
  },
  {
    id: 4,
    type: "QRM",
    question: "Concernant les moyens de protection évoqués en début de cours, quelles propositions sont justes ?",
    options: [
      { text: "L’antibiothérapie est citée parmi les mesures dirigées contre les bactéries.", correct: true, correction: "Vrai. Les antibiotiques figurent dans les moyens présentés." },
      { text: "La sérothérapie apporte des anticorps spécifiques déjà formés.", correct: true, correction: "Vrai. L’injection d’un sérum contenant des anticorps confère une immunité passive." },
      { text: "La protection obtenue par sérothérapie est immédiate selon le cours.", correct: true, correction: "Vrai. L’immunité passive est explicitement décrite comme immédiate." },
      { text: "La vaccination figure dans la liste des moyens de protection cités dans le cours.", correct: true, correction: "Vrai. Les vaccins sont expressément mentionnés à côté de l’antisepsie et de la sérothérapie." },
      { text: "La sérothérapie repose sur l’injection exclusive d’antigènes vaccinaux.", correct: false, correction: "Faux. Le cours parle d’anticorps spécifiques contenus dans le sérum." },
    ],
    explanation: "Le support mentionne antisepsie, antibiothérapie, sérothérapie, vaccins et, dans un cadre particulier, greffe de moelle osseuse."
  },
  {
    id: 5,
    type: "QCM",
    question: "Quel ordre de grandeur du nombre de personnes contaminées par un cas de rougeole est donné dans le cours ?",
    options: [
      { text: "Environ cent cinquante personnes.", correct: false, correction: "Faux. Le cours retient vingt-cinq, et non cent cinquante." },
      { text: "Jusqu’à vingt-cinq personnes.", correct: true, correction: "Vrai. C’est le chiffre de comparaison explicitement annoncé." },
      { text: "Environ une personne.", correct: false, correction: "Faux. Ce n’est pas l’ordre de grandeur donné pour la rougeole." },
      { text: "Aucune personne, la rougeole n’étant pas transmissible.", correct: false, correction: "Faux. La rougeole est citée comme particulièrement contagieuse." },
      { text: "Environ deux à trois personnes, identique à la grippe.", correct: false, correction: "Faux. Deux à trois est précisément la valeur donnée pour la grippe." },
    ],
    explanation: "Le cours utilise l’exemple de la rougeole pour souligner sa très forte contagiosité : jusqu’à 25 personnes, contre 2 à 3 pour la grippe dans l’exemple."
  },
  {
    id: 6,
    type: "QRM",
    question: "Au sujet de la sérothérapie en contexte d’exposition à la rougeole, quelles propositions sont exactes ?",
    options: [
      { text: "Une injection d’immunoglobulines peut être envisagée dans l’exemple.", correct: true, correction: "Vrai. La sérothérapie mentionnée repose sur ces anticorps." },
      { text: "La sérothérapie procure une immunité passive.", correct: true, correction: "Vrai. Les anticorps sont apportés directement au patient." },
      { text: "Une enquête peut concerner les sujets à risque ayant été en contact avec un cas.", correct: true, correction: "Vrai. C’est le contexte de prise en charge cité." },
      { text: "Cette sérothérapie correspond à une antibiothérapie contre le virus de la rougeole.", correct: false, correction: "Faux. Il s’agit d’anticorps, non d’antibiotiques." },
      { text: "Le cours la décrit comme une greffe de moelle osseuse réalisée en urgence.", correct: false, correction: "Faux. La greffe et la sérothérapie sont deux interventions distinctes." },
    ],
    explanation: "Le cours évoque des enquêtes autour de patients à risque contacts d’un cas de rougeole et une possible injection d’immunoglobulines."
  },
  {
    id: 7,
    type: "QCM",
    question: "Quelle catégorie d’infections associées aux soins est acquise lors de soins réalisés en ville ?",
    options: [
      { text: "Une infection communautaire sans aucun lien avec les soins.", correct: false, correction: "Faux. L’expression IAS signifie justement que l’infection est liée aux soins." },
      { text: "Une infection associée aux soins de ville.", correct: true, correction: "Vrai. C’est le terme employé dans le support." },
      { text: "Une infection toujours présente avant toute prise en charge.", correct: false, correction: "Faux. Une IAS survient au cours ou au décours des soins." },
      { text: "Exclusivement une infection nosocomiale acquise en réanimation.", correct: false, correction: "Faux. Le contexte est un soin en ville, sans hospitalisation." },
      { text: "Une infection nécessairement professionnelle chez le soignant.", correct: false, correction: "Faux. La définition concerne l’infection associée à la prise en charge." },
    ],
    explanation: "Le cours distingue explicitement infections nosocomiales en structure de soins et IAS de ville lors de soins en ville."
  },
  {
    id: 8,
    type: "QRM",
    question: "Concernant les définitions des infections associées aux soins, quelles affirmations sont exactes ?",
    options: [
      { text: "Une prise en charge diagnostique peut être concernée par une IAS.", correct: true, correction: "Vrai. Les prises en charge diagnostiques, thérapeutiques, palliatives, préventives et éducatives sont listées." },
      { text: "Une infection déjà présente au début de la prise en charge est automatiquement attribuée à celle-ci.", correct: false, correction: "Faux. La définition exclut une infection déjà présente ou en incubation au début des soins." },
      { text: "Une IAS ne peut survenir qu’à l’hôpital.", correct: false, correction: "Faux. Le cours mentionne expressément les IAS de ville." },
      { text: "Une infection communautaire n’est pas liée aux soins dans la distinction du support.", correct: true, correction: "Vrai. C’est le contraste posé avec les IAS." },
      { text: "Une infection nosocomiale est une IAS acquise dans une structure de soins.", correct: true, correction: "Vrai. Le cours emploie ce terme pour les infections acquises lors d’une hospitalisation ou dans une structure de soins." },
    ],
    explanation: "Les IAS incluent les infections survenant lors des prises en charge hospitalières ou en ville ; elles sont distinctes des infections communautaires non liées aux soins."
  },
  {
    id: 9,
    type: "QCM",
    question: "Quel délai est utilisé comme repère pour une infection nosocomiale quand l’état infectieux initial est inconnu ?",
    options: [
      { text: "Toujours exactement sept jours, quel que soit le germe.", correct: false, correction: "Faux. Le délai d’incubation de l’agent doit être pris en compte." },
      { text: "Au moins 48 heures, ou un délai dépassant la période d’incubation.", correct: true, correction: "Vrai. C’est la formulation du support." },
      { text: "Un délai de 24 heures obligatoire pour tous les agents.", correct: false, correction: "Faux. Le repère cité est d’au moins 48 heures." },
      { text: "Six mois après la sortie, sans lien avec la prise en charge.", correct: false, correction: "Faux. Le cours demande une analyse du lien temporel et causal." },
      { text: "Six heures après l’entrée à l’hôpital.", correct: false, correction: "Faux. Ce délai ne correspond pas au repère enseigné." },
    ],
    explanation: "Le document retient au moins 48 heures, ou un délai supérieur à la période d’incubation, en soulignant qu’il faut apprécier chaque contexte."
  },
  {
    id: 10,
    type: "QRM",
    question: "À propos de l’attribution nosocomiale d’une infection, quelles propositions correspondent au cours ?",
    options: [
      { text: "Le germe en cause et sa durée d’incubation ne doivent jamais être considérés.", correct: false, correction: "Faux. Le support demande de confronter le germe, la prise en charge et l’incubation." },
      { text: "Une légionellose déclarée à J8 peut avoir été contractée avant l’hospitalisation.", correct: true, correction: "Vrai. Le document donne une incubation de deux à dix jours." },
      { text: "Une infection déjà en incubation à l’admission ne correspond pas à une acquisition nosocomiale lors de ce séjour.", correct: true, correction: "Vrai. La définition exclut ces infections préexistantes." },
      { text: "Toute infection constatée après 48 heures est nécessairement nosocomiale.", correct: false, correction: "Faux. Le cours insiste sur la plausibilité du lien entre germe, infection et soins." },
      { text: "L’état clinique à l’admission ne présente aucun intérêt.", correct: false, correction: "Faux. Il aide à savoir si l’infection était déjà présente ou en incubation." },
    ],
    explanation: "Le seuil des 48 heures est un repère et non une preuve universelle ; l’exemple de Legionella à J8 illustre la nécessité de considérer l’incubation."
  },
  {
    id: 11,
    type: "QCM",
    question: "Quel délai de surveillance postopératoire est retenu dans le cours pour une infection du site opératoire sans pose de matériel prothétique ?",
    options: [
      { text: "Dix ans après l’intervention.", correct: false, correction: "Faux. Le cours ne donne pas un tel délai." },
      { text: "Un an pour tous les patients sans distinction.", correct: false, correction: "Faux. Le délai d’un an est associé à une prothèse ou à un matériel prothétique." },
      { text: "Deux jours après l’opération.", correct: false, correction: "Faux. Ce délai correspond au repère général des 48 heures, non au suivi du site opératoire." },
      { text: "Trente jours après l’opération.", correct: true, correction: "Vrai. C’est le délai indiqué en l’absence de matériel prothétique." },
      { text: "Uniquement durant l’intervention elle-même.", correct: false, correction: "Faux. Les infections du site opératoire peuvent apparaître après le geste." },
    ],
    explanation: "Le cours retient trente jours après l’opération, avec extension jusqu’à un an si une prothèse ou un matériel prothétique est posé."
  },
  {
    id: 12,
    type: "QRM",
    question: "À propos de l’épidémiologie des infections nosocomiales dans le support, quelles propositions sont vraies ?",
    options: [
      { text: "Les infections urinaires font partie des trois catégories les plus fréquentes.", correct: true, correction: "Vrai. Elles sont citées en premier." },
      { text: "Les infections de site opératoire figurent au troisième rang du classement présenté.", correct: true, correction: "Vrai. Le cours place les infections urinaires en premier, pulmonaires en deuxième et celles du site opératoire en troisième." },
      { text: "La fréquence globale annoncée est de six patients sur cent.", correct: true, correction: "Vrai. Le chiffre de 6 % figure dans les notes." },
      { text: "Les infections de site opératoire sont absentes de la liste.", correct: false, correction: "Faux. Elles constituent la troisième catégorie citée." },
      { text: "Les infections pulmonaires font partie des trois catégories les plus fréquentes.", correct: true, correction: "Vrai. Elles sont citées en deuxième." },
    ],
    explanation: "Le cours annonce 6 % des patients hospitalisés concernés et classe les infections urinaires, pulmonaires puis du site opératoire parmi les plus fréquentes."
  },
  {
    id: 13,
    type: "QCM",
    question: "Quel micro-organisme est cité en première position parmi les agents des infections nosocomiales ?",
    options: [
      { text: "Mycobacterium tuberculosis.", correct: false, correction: "Faux. La tuberculose apparaît dans les exemples d’agents classés par groupe de risque." },
      { text: "Escherichia coli.", correct: true, correction: "Vrai. Il est placé en tête de liste, avec une attention portée aux matières fécales." },
      { text: "Le rotavirus.", correct: false, correction: "Faux. Il est cité pour sa présence possible sur les téléphones et les surfaces." },
      { text: "Le virus Ebola.", correct: false, correction: "Faux. Il est abordé parmi les agents à risque épidémique et biologique, non en tête du classement des IAS." },
      { text: "Candida auris.", correct: false, correction: "Faux. Cette levure est présentée séparément comme agent émergent." },
    ],
    explanation: "Le classement du cours commence par Escherichia coli, suivi du staphylocoque doré, puis de Pseudomonas aeruginosa ex æquo avec Enterococcus faecalis."
  },
  {
    id: 14,
    type: "QRM",
    question: "À propos des réservoirs et de la chaîne de transmission, quelles propositions sont exactes ?",
    options: [
      { text: "Un réservoir peut être humain.", correct: true, correction: "Vrai. C’est l’un des deux réservoirs indiqués dans le schéma." },
      { text: "L’état immunitaire de l’hôte intervient dans le risque infectieux.", correct: true, correction: "Vrai. L’immunité, le terrain et l’inoculum sont présentés au bout de la chaîne." },
      { text: "Un dispositif médical contaminé correspond toujours à une transmission directe sans intermédiaire.", correct: false, correction: "Faux. Le cours classe aussi les dispositifs médicaux parmi les voies indirectes." },
      { text: "La porte d’entrée n’influence jamais l’infection.", correct: false, correction: "Faux. Les voies cutanée, digestive, respiratoire et les dispositifs invasifs figurent dans la chaîne." },
      { text: "L’environnement peut constituer un réservoir.", correct: true, correction: "Vrai. Il s’agit du second type de réservoir présenté." },
    ],
    explanation: "La chaîne du support relie réservoir humain ou environnemental, mode de transmission, porte d’entrée, puis hôte avec son terrain, son immunité et l’inoculum."
  },
  {
    id: 15,
    type: "QCM",
    question: "Combien de grands microbiotes humains le cours énumère-t-il explicitement ?",
    options: [
      { text: "Huit microbiotes.", correct: false, correction: "Faux. Ce nombre n’est pas donné." },
      { text: "Un seul microbiote digestif.", correct: false, correction: "Faux. Le tube digestif n’est pas l’unique localisation citée." },
      { text: "Quatre microbiotes.", correct: true, correction: "Vrai. Digestif, cutané, oropharyngé et vaginal." },
      { text: "Deux microbiotes.", correct: false, correction: "Faux. Le cours en liste quatre." },
      { text: "Aucun microbiote naturel.", correct: false, correction: "Faux. Le support insiste au contraire sur l’importance du microbiote." },
    ],
    explanation: "Les quatre microbiotes cités sont digestif, cutané, oropharyngé et vaginal, ce dernier étant indiqué chez la femme."
  },
  {
    id: 16,
    type: "QRM",
    question: "Concernant les réservoirs possibles de micro-organismes dans les soins, quelles propositions sont exactes ?",
    options: [
      { text: "Un stéthoscope peut être un réservoir de germes.", correct: true, correction: "Vrai. Il figure parmi les dispositifs médicaux cités." },
      { text: "Le rotavirus ne peut jamais être retrouvé sur un téléphone.", correct: false, correction: "Faux. Le document mentionne précisément sa présence possible." },
      { text: "Seuls les dispositifs invasifs peuvent transporter des agents infectieux.", correct: false, correction: "Faux. Des objets usuels non invasifs peuvent aussi être contaminés." },
      { text: "Un téléphone ou une tablette peut être contaminé.", correct: true, correction: "Vrai. Ils sont présentés comme des objets non médicaux très exposés." },
      { text: "Le gel d’échographie fait partie des exemples évoqués.", correct: true, correction: "Vrai. Le support le place dans les matériels pouvant porter des germes." },
    ],
    explanation: "Le support cite des équipements médicaux et des objets non médicaux, y compris stéthoscopes, gels d’échographie, téléphones et tablettes."
  },
  {
    id: 17,
    type: "QCM",
    question: "Quelle durée de persistance de Pseudomonas aeruginosa sur une surface humide est indiquée dans le cours ?",
    options: [
      { text: "Une durée de 30 à 60 minutes sur les mains.", correct: false, correction: "Faux. Cette durée est donnée pour le VRS, non pour le pyocyanique." },
      { text: "Un maximum de dix minutes.", correct: false, correction: "Faux. Ce n’est pas la durée indiquée." },
      { text: "Plusieurs semaines.", correct: true, correction: "Vrai. C’est le repère pour Pseudomonas aeruginosa sur surface humide." },
      { text: "Exclusivement un an sur une surface sèche.", correct: false, correction: "Faux. Le tableau parle de surfaces humides et de plusieurs semaines." },
      { text: "Quelques secondes seulement.", correct: false, correction: "Faux. Le tableau évoque au contraire une longue persistance." },
    ],
    explanation: "La durée donnée est de plusieurs semaines ; le tableau attire l’attention sur le rôle des surfaces humides."
  },
  {
    id: 18,
    type: "QRM",
    question: "À propos des durées de survie environnementale citées, quelles propositions correspondent au tableau ?",
    options: [
      { text: "Staphylococcus aureus ne survit jamais sur des surfaces sèches.", correct: false, correction: "Faux. Le support évoque plusieurs semaines sur des surfaces très sèches." },
      { text: "Le virus influenza persiste toujours quinze ans sur toutes les surfaces.", correct: false, correction: "Faux. Le support retient un à deux jours sur une surface." },
      { text: "Le rotavirus peut persister un à soixante jours sur les surfaces.", correct: true, correction: "Vrai. C’est la durée indiquée." },
      { text: "E. coli peut survivre entre une heure et seize mois sur les surfaces selon le tableau.", correct: true, correction: "Vrai. C’est la large fourchette inscrite dans les notes." },
      { text: "Le VRS persiste nécessairement plusieurs années sur toutes les surfaces.", correct: false, correction: "Faux. Le tableau retient jusqu’à six heures sur les surfaces et le linge." },
    ],
    explanation: "Les durées diffèrent selon les organismes et les supports : E. coli 1 h–16 mois, rotavirus 1–60 jours, influenza 1–2 jours, VRS jusqu’à 6 h sur surfaces et linge."
  },
  {
    id: 19,
    type: "QCM",
    question: "Quelle mesure est mise en avant lorsque des bactéries produisant un biofilm colonisent un cathéter ?",
    options: [
      { text: "Remplacer le cathéter par un téléphone portable.", correct: false, correction: "Faux. Cela n’a aucun rôle dans la prise en charge décrite." },
      { text: "Retirer le matériel contaminé.", correct: true, correction: "Vrai. La phrase du cours est explicite face au biofilm sur cathéter." },
      { text: "Se limiter au rinçage extérieur du pansement sans s’occuper du cathéter.", correct: false, correction: "Faux. Le cours demande le retrait du matériel colonisé dans cet exemple." },
      { text: "Ne jamais considérer le biofilm dans le choix de la conduite à tenir.", correct: false, correction: "Faux. Le biofilm est présenté comme un facteur majeur de difficulté." },
      { text: "Conserver systématiquement le cathéter sans modifier la prise en charge.", correct: false, correction: "Faux. Le support souligne précisément la nécessité d’agir sur ce matériel contaminé." },
    ],
    explanation: "Le cours explique que le biofilm sur cathéter complique l’efficacité des antibiotiques et insiste sur le retrait du matériel contaminé."
  },
  {
    id: 20,
    type: "QRM",
    question: "Concernant la transmission des germes, quelles propositions sont exactes selon le cours ?",
    options: [
      { text: "La transmission respiratoire constitue une autre voie.", correct: true, correction: "Vrai. Elle apparaît comme troisième mode cité." },
      { text: "Les mains ne participent jamais aux transmissions associées aux soins.", correct: false, correction: "Faux. Elles jouent un rôle important selon le support." },
      { text: "Une transmission indirecte exige toujours un contact peau à peau.", correct: false, correction: "Faux. Le support donne justement l’objet contaminé comme intermédiaire." },
      { text: "La transmission manuportée est classée parmi les contacts directs.", correct: true, correction: "Vrai. Les mains sont explicitement citées." },
      { text: "Un objet contaminé peut transmettre un germe indirectement.", correct: true, correction: "Vrai. C’est la définition du contact indirect dans la liste." },
    ],
    explanation: "La transmission peut être directe (notamment par les mains), indirecte (objet contaminé) ou respiratoire ; les notes attribuent 80 % des infections au contact direct manuporté."
  },
  {
    id: 21,
    type: "QCM",
    question: "Quelle proportion des infections est attribuée à la transmission directe manuportée dans les notes ?",
    options: [
      { text: "100 % sans exception.", correct: false, correction: "Faux. Le support mentionne aussi les transmissions indirectes et respiratoires." },
      { text: "20 %.", correct: false, correction: "Faux. Le chiffre fourni est quatre fois plus élevé." },
      { text: "5 %.", correct: false, correction: "Faux. Ce n’est pas la proportion inscrite dans la liste des voies de transmission." },
      { text: "80 %.", correct: true, correction: "Vrai. C’est le pourcentage indiqué pour la transmission manuportée." },
      { text: "0 %.", correct: false, correction: "Faux. La transmission manuportée est présentée comme majeure." },
    ],
    explanation: "Le cours donne 80 % comme valeur pour la transmission directe par contact via les mains."
  },
  {
    id: 22,
    type: "QRM",
    question: "Au sujet de l’hôte récepteur et des facteurs de vulnérabilité, quelles propositions sont exactes ?",
    options: [
      { text: "La présence d’une prothèse n’a jamais d’importance dans l’analyse du risque.", correct: false, correction: "Faux. La présence ou l’absence de prothèse figure dans la liste." },
      { text: "Les traitements en cours peuvent modifier la situation du patient.", correct: true, correction: "Vrai. Le cours les place parmi les éléments de l’hôte récepteur." },
      { text: "Tous les patients possèdent exactement les mêmes défenses et le même risque.", correct: false, correction: "Faux. Le texte souligne au contraire leur hétérogénéité." },
      { text: "L’âge et les pathologies du patient font partie des facteurs à considérer.", correct: true, correction: "Vrai. Ils figurent dans l’énumération du terrain." },
      { text: "La dénutrition ou l’obésité font partie des caractéristiques citées.", correct: true, correction: "Vrai. Ces deux situations sont explicitement notées." },
    ],
    explanation: "Le terrain de chaque patient est différent : âge, pathologies, traitements, prothèses, lésions et statut nutritionnel sont cités."
  },
  {
    id: 23,
    type: "QCM",
    question: "Quel taux de portage de BLSE est donné dans le support pour la population générale ?",
    options: [
      { text: "100 %.", correct: false, correction: "Faux. Un portage universel n’est pas décrit." },
      { text: "70 à 90 %.", correct: false, correction: "Faux. Cette fourchette est attribuée, dans le cours, aux étudiants de deuxième année." },
      { text: "50 %.", correct: false, correction: "Faux. Ce n’est pas le repère du support." },
      { text: "3,5 %.", correct: true, correction: "Vrai. C’est le pourcentage présenté pour la population générale." },
      { text: "0,01 %.", correct: false, correction: "Faux. Le taux noté est supérieur." },
    ],
    explanation: "Le support cite 3,5 % dans la population générale, comparés à 70–90 % chez des étudiants de deuxième année de médecine."
  },
  {
    id: 24,
    type: "QRM",
    question: "Concernant les données de microbiote et de portage rapportées dans le cours, quelles propositions sont exactes ?",
    options: [
      { text: "Le nombre de bactéries annoncé est 10¹⁵.", correct: true, correction: "Vrai. Cette valeur est utilisée pour illustrer l’importance du microbiote." },
      { text: "Le support mentionne environ 10¹³ cellules humaines.", correct: true, correction: "Vrai. C’est le chiffre fourni dans le paragraphe sur les microbiotes." },
      { text: "Le cours évalue à zéro le portage de BLSE dans la population générale.", correct: false, correction: "Faux. Il indique 3,5 %." },
      { text: "La flore oropharyngée est l’un des quatre microbiotes listés dans le support.", correct: true, correction: "Vrai. Elle figure aux côtés des flores digestive, cutanée et vaginale." },
      { text: "Il cite une fourchette de 70 à 90 % chez les étudiants en médecine de deuxième année.", correct: true, correction: "Vrai. C’est le chiffre présenté dans les notes." },
    ],
    explanation: "Le support donne les valeurs 10¹³ cellules humaines, 10¹⁵ bactéries, et compare les taux de portage de BLSE de deux populations."
  },
  {
    id: 25,
    type: "QCM",
    question: "En quelle année la découverte de la pénicilline par Alexander Fleming est-elle située dans le cours ?",
    options: [
      { text: "1940.", correct: false, correction: "Faux. La date est associée au développement de la pénicilline, pas à sa découverte." },
      { text: "1860.", correct: false, correction: "Faux. Cette année n’apparaît pas comme date de la découverte." },
      { text: "1961.", correct: false, correction: "Faux. Le cours associe 1961 aux premiers SARM identifiés." },
      { text: "1928.", correct: true, correction: "Vrai. C’est l’année notée pour la découverte de la pénicilline." },
      { text: "2008.", correct: false, correction: "Faux. Cette date est liée à la diffusion européenne des EPC." },
    ],
    explanation: "La chronologie indique 1928 pour la découverte, 1940 pour le développement d’utilisation et 1960 pour la pénicilline M."
  },
  {
    id: 26,
    type: "QRM",
    question: "À propos de la chronologie de l’antibiorésistance présentée, quelles propositions sont exactes ?",
    options: [
      { text: "Les résistances n’apparaissent qu’au XXIe siècle.", correct: false, correction: "Faux. Le support en mentionne dès les années 1940 et 1960." },
      { text: "La pénicilline M (méticilline) est développée en 1960.", correct: true, correction: "Vrai. Elle est présentée comme une réponse aux résistances de S. aureus." },
      { text: "Les premiers SARM sont identifiés seulement après 2020 selon les notes.", correct: false, correction: "Faux. Le cours situe les premières souches dès 1961." },
      { text: "Les antibiotiques conservent toujours une efficacité définitive malgré l’évolution bactérienne.", correct: false, correction: "Faux. Le cours explique que l’apparition de résistances peut rendre des traitements inefficaces." },
      { text: "Le développement et l’utilisation de la pénicilline sont situés en 1940.", correct: true, correction: "Vrai. Le cours cite la Seconde Guerre mondiale." },
    ],
    explanation: "La résistance apparaît rapidement après l’introduction des traitements : pénicilline dès les années 1940, méticilline en 1960, SARM dès 1961."
  },
  {
    id: 27,
    type: "QCM",
    question: "Quelle valeur maximale de décès mondiaux liés à l’antibiorésistance d’ici 2050 est évoquée dans les projections rapportées ?",
    options: [
      { text: "Un milliard de morts par an.", correct: false, correction: "Faux. Ce chiffre n’est pas donné dans les notes." },
      { text: "Jusqu’à dix millions de morts.", correct: true, correction: "Vrai. C’est la valeur citée dans le support pour 2050." },
      { text: "Aucun décès parce que les résistances sont devenues impossibles.", correct: false, correction: "Faux. Le cours décrit au contraire une menace croissante." },
      { text: "Exactement cent morts.", correct: false, correction: "Faux. Le cours décrit un risque mondial majeur." },
      { text: "Environ dix décès dans le monde.", correct: false, correction: "Faux. L’ordre de grandeur est beaucoup plus élevé." },
    ],
    explanation: "Le cours évoque une projection pouvant atteindre dix millions de morts, afin de mettre en évidence l’enjeu de santé publique."
  },
  {
    id: 28,
    type: "QRM",
    question: "Concernant le concept « One Health », quelles propositions sont exactes ?",
    options: [
      { text: "La santé humaine constitue l’un des trois domaines du concept.", correct: true, correction: "Vrai. Il inclut l’usage des antibiotiques chez l’humain." },
      { text: "Le concept se limite exclusivement à l’hôpital.", correct: false, correction: "Faux. Il est trans-sectoriel et inclut l’élevage ainsi que l’environnement." },
      { text: "Les selles et les urines n’ont aucune place dans l’explication fournie.", correct: false, correction: "Faux. Elles sont citées comme voies par lesquelles des antibiotiques peuvent rejoindre l’environnement." },
      { text: "La santé environnementale fait partie du concept.", correct: true, correction: "Vrai. Le cours mentionne la présence d’antibiotiques et de bactéries résistantes dans l’environnement." },
      { text: "La santé animale est également concernée.", correct: true, correction: "Vrai. Les usages vétérinaires sont explicitement cités." },
    ],
    explanation: "Le cours relie santé humaine, animale et environnementale et attire l’attention sur la diffusion des antibiotiques et bactéries résistantes via les excréta."
  },
  {
    id: 29,
    type: "QCM",
    question: "Quelle méthode de référence est donnée pour évaluer la sensibilité d’une bactérie aux antibiotiques ?",
    options: [
      { text: "Le séquençage de l’ADN seul.", correct: false, correction: "Faux. Ce n’est pas la réponse retenue dans la question du cours." },
      { text: "La PCR seule.", correct: false, correction: "Faux. Le document ne la donne pas comme méthode de référence dans cet encadré." },
      { text: "Une mesure de température corporelle.", correct: false, correction: "Faux. La température ne permet pas de classer la sensibilité d’une souche." },
      { text: "L’antibiogramme.", correct: true, correction: "Vrai. Il évalue la sensibilité de la souche aux différentes molécules." },
      { text: "Une sérologie virale.", correct: false, correction: "Faux. Cette approche ne mesure pas la sensibilité bactérienne aux antibiotiques." },
    ],
    explanation: "Le support pose explicitement une question à choix de méthode et donne l’antibiogramme comme réponse."
  },
  {
    id: 30,
    type: "QRM",
    question: "Concernant la technique d’antibiogramme décrite, quelles propositions sont exactes ?",
    options: [
      { text: "Des disques imprégnés d’antibiotiques sont déposés sur une gélose ensemencée.", correct: true, correction: "Vrai. C’est la méthode décrite dans le support." },
      { text: "Une incubation d’environ 24 heures est indiquée.", correct: true, correction: "Vrai. Le cours parle d’une incubation au chaud pendant 24 h." },
      { text: "Le test mesure uniquement la multiplication des virus.", correct: false, correction: "Faux. Il concerne ici des souches bactériennes." },
      { text: "La présence d’une large zone d’inhibition indique systématiquement une résistance.", correct: false, correction: "Faux. Le cours associe au contraire une grande zone à la sensibilité." },
      { text: "On mesure les diamètres des zones d’inhibition.", correct: true, correction: "Vrai. Ces espaces correspondent à l’absence de croissance autour du disque." },
    ],
    explanation: "Une gélose ensemencée reçoit des disques d’antibiotiques ; après environ 24 h d’incubation, les diamètres d’inhibition aident à classer les résultats."
  },
  {
    id: 31,
    type: "QCM",
    question: "Lors de l’antibiogramme décrit, que signifie l’absence de zone d’inhibition autour du disque ?",
    options: [
      { text: "Le test établit automatiquement la présence d’un virus.", correct: false, correction: "Faux. L’antibiogramme porte sur une bactérie." },
      { text: "La souche est nécessairement très sensible.", correct: false, correction: "Faux. La sensibilité est associée à une zone d’inhibition importante." },
      { text: "La souche est résistante à l’antibiotique testé.", correct: true, correction: "Vrai. La croissance bactérienne persiste malgré la molécule." },
      { text: "Tous les antibiotiques disponibles sont forcément efficaces.", correct: false, correction: "Faux. Ce résultat indique l’inefficacité de l’antibiotique testé dans le cadre décrit." },
      { text: "La bactérie a été éliminée de toute la gélose.", correct: false, correction: "Faux. L’absence de zone signifie justement qu’elle continue de pousser." },
    ],
    explanation: "Si la bactérie pousse jusqu’au disque malgré l’antibiotique, le cours la considère résistante à cet antibiotique."
  },
  {
    id: 32,
    type: "QRM",
    question: "À propos de l’interprétation des zones d’inhibition de l’antibiogramme, quelles propositions correspondent aux notes ?",
    options: [
      { text: "Une zone d’inhibition importante prouve que l’antibiotique n’a aucun effet.", correct: false, correction: "Faux. Au contraire, la croissance est empêchée autour du disque." },
      { text: "Le diamètre des zones d’inhibition est mesuré après incubation.", correct: true, correction: "Vrai. La méthode de diffusion sur gélose repose sur la mesure de ces diamètres." },
      { text: "Une grande zone d’inhibition correspond à une souche sensible.", correct: true, correction: "Vrai. La bactérie ne pousse pas à proximité du disque." },
      { text: "L’absence de zone d’inhibition indique une résistance.", correct: true, correction: "Vrai. La bactérie pousse malgré l’antibiotique." },
      { text: "Une zone plus petite peut correspondre à une souche sensible à forte posologie.", correct: true, correction: "Vrai. C’est la catégorie intermédiaire présentée." },
    ],
    explanation: "Le support distingue grande zone (sensible), plus petite zone (sensible à forte posologie) et absence de zone (résistance)."
  },
  {
    id: 33,
    type: "QCM",
    question: "Quelle définition des BMR est retenue dans le cours ?",
    options: [
      { text: "Une bactérie caractérisée uniquement par la production de toxines.", correct: false, correction: "Faux. La classification BMR repose sur le profil de résistance." },
      { text: "Une bactérie nécessairement résistante à tous les anti-infectieux.", correct: false, correction: "Faux. Les traitements restent parfois possibles, mais leur choix est réduit." },
      { text: "Une bactérie résistante à plusieurs familles d’antibiotiques.", correct: true, correction: "Vrai. C’est la définition du support." },
      { text: "Une bactérie uniquement présente dans l’environnement et jamais chez l’humain.", correct: false, correction: "Faux. Les BMR peuvent être portées et transmises par les patients." },
      { text: "Une bactérie résistante à une seule dose d’un antibiotique.", correct: false, correction: "Faux. La notion présentée porte sur plusieurs familles d’antibiotiques." },
    ],
    explanation: "Une bactérie multirésistante a acquis une résistance à plusieurs familles d’antibiotiques, ce qui réduit les options thérapeutiques sans impliquer une résistance à tous les antibiotiques."
  },
  {
    id: 34,
    type: "QRM",
    question: "À propos des BMR et des précautions de prévention, quelles propositions sont justes ?",
    options: [
      { text: "Les précautions complémentaires contact sont mentionnées.", correct: true, correction: "Vrai. Elles sont explicitement associées à la limitation de la diffusion." },
      { text: "Le portage d’une BMR implique toujours une antibiothérapie immédiate.", correct: false, correction: "Faux. Le cours distingue ailleurs portage sans symptômes et infection." },
      { text: "Les précautions complémentaires d’hygiène sont toujours superflues face aux BMR.", correct: false, correction: "Faux. Certaines BMR présentent un risque de diffusion qui justifie ces précautions." },
      { text: "Certaines BMR présentent un risque de diffusion épidémique.", correct: true, correction: "Vrai. Le document insiste sur ce risque." },
      { text: "Une BMR est obligatoirement résistante à tous les antibiotiques.", correct: false, correction: "Faux. La multirésistance réduit les possibilités sans les supprimer nécessairement." },
    ],
    explanation: "Certaines BMR diffusent en épidémie ; le cours recommande l’hygiène et notamment des précautions complémentaires contact pour limiter les transmissions."
  },
  {
    id: 35,
    type: "QCM",
    question: "Que signifie l’abréviation BLSE dans ce cours ?",
    options: [
      { text: "Bêta-lactamines à spectre étroit.", correct: false, correction: "Faux. Le cours décrit des bêta-lactamases, et non une famille de médicaments de spectre étroit." },
      { text: "Bactéries légères sans enveloppe.", correct: false, correction: "Faux. Cela ne correspond pas au sigle enseigné." },
      { text: "Bacilles lactiques systématiquement environnementaux.", correct: false, correction: "Faux. Le terme porte sur des enzymes de résistance." },
      { text: "Bactéries latentes sensibles à l’érythromycine.", correct: false, correction: "Faux. Ce n’est pas l’acronyme du support." },
      { text: "Bêta-lactamases à spectre étendu.", correct: true, correction: "Vrai. C’est la signification indiquée dans le titre du paragraphe." },
    ],
    explanation: "BLSE signifie bêta-lactamases à spectre étendu, enzymes produites par certaines entérobactérales qui inactivent plusieurs bêta-lactamines."
  },
  {
    id: 36,
    type: "QRM",
    question: "Concernant les entérobactérales productrices de BLSE, quelles propositions sont exactes ?",
    options: [
      { text: "Elles peuvent inactiver des céphalosporines à spectre étendu.", correct: true, correction: "Vrai. Ces antibiotiques sont cités explicitement." },
      { text: "Elles peuvent inactiver plusieurs pénicillines.", correct: true, correction: "Vrai. C’est une partie du mécanisme détaillé." },
      { text: "Les BLSE sont des virus détruisant les cellules bactériennes.", correct: false, correction: "Faux. Il s’agit d’enzymes de résistance, et non de virus." },
      { text: "Une BLSE est obligatoirement une carbapénémase.", correct: false, correction: "Faux. Le cours distingue BLSE et enzymes productrices de carbapénémases chez les EPC." },
      { text: "Les BLSE sont produites par certaines bactéries.", correct: true, correction: "Vrai. Le document les décrit comme des enzymes bactériennes." },
    ],
    explanation: "Les BLSE sont des enzymes bactériennes capables d’inactiver plusieurs bêta-lactamines, notamment pénicillines et céphalosporines à spectre étendu."
  },
  {
    id: 37,
    type: "QCM",
    question: "Quelle résistance définit le SARM dans le cours ?",
    options: [
      { text: "Production de carbapénémases par E. coli.", correct: false, correction: "Faux. Cette caractéristique relève des EPC." },
      { text: "Résistance de Candida auris aux antibiotiques.", correct: false, correction: "Faux. Candida auris est une levure, pas un staphylocoque." },
      { text: "Résistance de Pseudomonas aeruginosa à tous les antifongiques.", correct: false, correction: "Faux. Ce n’est pas la définition du SARM." },
      { text: "Résistance d’Enterococcus faecium aux glycopeptides.", correct: false, correction: "Faux. Cette description correspond à l’ERG discuté plus loin." },
      { text: "Résistance de Staphylococcus aureus à la méticilline.", correct: true, correction: "Vrai. C’est exactement l’expansion du sigle SARM." },
    ],
    explanation: "SARM signifie Staphylococcus aureus résistant à la méticilline ; cette résistance concerne aussi la plupart des bêta-lactamines selon le support."
  },
  {
    id: 38,
    type: "QRM",
    question: "Au sujet du SARM et de son portage, quelles propositions sont exactes ?",
    options: [
      { text: "Les fosses nasales peuvent héberger le staphylocoque doré.", correct: true, correction: "Vrai. Elles sont également indiquées comme site de portage." },
      { text: "Le SARM ne peut être transmis que par voie aérienne.", correct: false, correction: "Faux. Le document mentionne surtout les contacts et les mains, directement ou indirectement." },
      { text: "Un prélèvement nasal peut servir à rechercher le portage.", correct: true, correction: "Vrai. C’est la méthode décrite dans le support." },
      { text: "Le matériel contaminé ne joue jamais de rôle dans la transmission du SARM.", correct: false, correction: "Faux. Le support cite explicitement la transmission indirecte par matériel." },
      { text: "Staphylococcus aureus peut être présent sur la peau.", correct: true, correction: "Vrai. Le cours cite ce site de portage naturel." },
    ],
    explanation: "Staphylococcus aureus peut coloniser la peau et les fosses nasales ; le portage nasal est recherché par prélèvement et les mains sont un vecteur de diffusion."
  },
  {
    id: 39,
    type: "QCM",
    question: "Quelle évolution comparative des SARM et des BLSE est indiquée en France dans le cours ?",
    options: [
      { text: "Les BLSE sont en baisse et les SARM en hausse sans exception.", correct: false, correction: "Faux. Le cours formule la tendance inverse." },
      { text: "Les SARM tendent à diminuer alors que les BLSE augmentent.", correct: true, correction: "Vrai. C’est la phrase « À retenir » du paragraphe." },
      { text: "Les deux sont uniquement des infections virales.", correct: false, correction: "Faux. Il s’agit de bactéries et de résistances aux antibiotiques." },
      { text: "La résistance des deux catégories est décrite comme constamment nulle.", correct: false, correction: "Faux. Le support donne des chiffres non nuls." },
      { text: "Les deux catégories ont disparu de France.", correct: false, correction: "Faux. Elles restent un enjeu de prévention." },
    ],
    explanation: "Le cours retient une tendance à la diminution des SARM, tandis que les BLSE augmentent."
  },
  {
    id: 40,
    type: "QRM",
    question: "Concernant les chiffres français de résistance de 2024 donnés dans le cours, quelles propositions sont exactes ?",
    options: [
      { text: "Ces deux valeurs sont rapportées à la France en 2024.", correct: true, correction: "Vrai. L’année et le pays sont explicités." },
      { text: "Le pourcentage cité pour Staphylococcus aureus est de 12 %.", correct: true, correction: "Vrai. C’est le chiffre indiqué pour 2024." },
      { text: "Le pourcentage cité pour les entérobactéries est de 10 %.", correct: true, correction: "Vrai. C’est l’autre chiffre donné." },
      { text: "Les deux valeurs citées pour 2024 sont non nulles.", correct: true, correction: "Vrai. Le document indique 12 % et 10 % pour les catégories mentionnées." },
      { text: "Le texte donne 0 % de résistance pour les entérobactéries.", correct: false, correction: "Faux. Il indique 10 %." },
    ],
    explanation: "Le cours rapporte 12 % pour l’espèce staphylocoque doré et 10 % pour les entérobactéries, en précisant que ces chiffres sont présentés comme en augmentation."
  },
  {
    id: 41,
    type: "QCM",
    question: "Quel examen de prélèvement est cité pour rechercher un portage de staphylocoque doré ?",
    options: [
      { text: "Une ponction lombaire systématique.", correct: false, correction: "Faux. Elle ne correspond pas à la méthode de dépistage décrite." },
      { text: "Un prélèvement nasal.", correct: true, correction: "Vrai. Il vise le réservoir des fosses nasales." },
      { text: "Une biopsie rénale.", correct: false, correction: "Faux. Ce prélèvement n’est pas cité pour ce portage." },
      { text: "Une ponction articulaire obligatoire.", correct: false, correction: "Faux. Cette procédure n’est pas donnée pour le dépistage du portage." },
      { text: "Une radiographie pulmonaire.", correct: false, correction: "Faux. L’imagerie ne réalise pas le prélèvement microbiologique annoncé." },
    ],
    explanation: "Le staphylocoque doré pouvant se trouver dans les fosses nasales, le cours indique un prélèvement nasal."
  },
  {
    id: 42,
    type: "QRM",
    question: "À propos de la transmission du SARM et de la prévention, quelles propositions sont exactes ?",
    options: [
      { text: "Le matériel contaminé ne participe jamais à la diffusion du SARM.", correct: false, correction: "Faux. Le support décrit la transmission indirecte par les objets ou matériels contaminés." },
      { text: "Le staphylocoque doré ne peut jamais coloniser un sujet sain.", correct: false, correction: "Faux. Il peut être présent naturellement sur la peau et dans les fosses nasales." },
      { text: "La transmission du SARM se fait exclusivement par ingestion d’eau chaude.", correct: false, correction: "Faux. Cette voie n’est pas le mode décrit." },
      { text: "Les mains des soignants peuvent contribuer à la transmission.", correct: true, correction: "Vrai. C’est un point fortement souligné." },
      { text: "Le cours indique qu’il se diffuse moins vite mais se transmet bien par les mains.", correct: true, correction: "Vrai. C’est le contraste formulé dans la section SARM." },
    ],
    explanation: "Le support décrit une diffusion plutôt lente mais une transmission efficace par les mains, ainsi qu’un rôle possible du matériel contaminé."
  },
  {
    id: 43,
    type: "QCM",
    question: "Quelle association entre micro-organisme et classe de résistance est conforme au support ?",
    options: [
      { text: "Une EPC est un antibiogramme sans bactérie.", correct: false, correction: "Faux. EPC désigne une entérobactérale produisant une carbapénémase." },
      { text: "Un SARM est nécessairement un agent viral de groupe 4.", correct: false, correction: "Faux. SARM désigne un staphylocoque résistant à la méticilline." },
      { text: "Le virus Ebola est une entérobactérale BLSE.", correct: false, correction: "Faux. Le virus Ebola est présenté comme un agent à risque épidémique et biologique." },
      { text: "Une entérobactérale productrice de BLSE est un exemple de BMR.", correct: true, correction: "Vrai. C’est la première catégorie détaillée de BMR." },
      { text: "Candida auris est une BMR bactérienne.", correct: false, correction: "Faux. Il s’agit d’une levure émergente abordée séparément." },
    ],
    explanation: "Le document classe les entérobactérales productrices de BLSE parmi les BMR, alors que les EPC et les ERG du type E. faecium figurent parmi les BHR."
  },
  {
    id: 44,
    type: "QRM",
    question: "Dans la distinction BMR/BHR présentée, quelles propositions sont justes ?",
    options: [
      { text: "Une BHR pose des difficultés particulières de traitement.", correct: true, correction: "Vrai. La résistance aux molécules de dernier recours est mise en avant." },
      { text: "Une BMR peut conserver des options thérapeutiques.", correct: true, correction: "Vrai. Le cours précise qu’une BMR ne résiste pas forcément à tous les antibiotiques." },
      { text: "Les BHR sont définies uniquement par une coloration de Gram.", correct: false, correction: "Faux. Le classement relève ici du profil de résistance." },
      { text: "Les BHR représentent un risque de diffusion hospitalière.", correct: true, correction: "Vrai. C’est une des raisons de leur surveillance renforcée." },
      { text: "Les BMR n’ont jamais de potentiel épidémique.", correct: false, correction: "Faux. Certaines BMR peuvent se diffuser en épidémie." },
    ],
    explanation: "Les BMR présentent des résistances à plusieurs familles ; les BHR concernent notamment des résistances à des antibiotiques de dernier recours."
  },
  {
    id: 45,
    type: "QCM",
    question: "Quel mécanisme de résistance caractérise les EPC ?",
    options: [
      { text: "La production de toxines uniquement dans les voies respiratoires.", correct: false, correction: "Faux. Le terme EPC renvoie à une enzyme de résistance." },
      { text: "La fabrication d’anticorps contre les virus.", correct: false, correction: "Faux. Les EPC sont des bactéries et leurs enzymes ciblent des antibiotiques." },
      { text: "La production de carbapénémases qui détruisent les carbapénèmes.", correct: true, correction: "Vrai. C’est le mécanisme indiqué dans la section EPC." },
      { text: "La résistance spécifique aux antifongiques par une levure.", correct: false, correction: "Faux. Cette situation correspondrait à un autre type d’agent." },
      { text: "Une absence totale d’ADN bactérien.", correct: false, correction: "Faux. Il ne s’agit pas d’une modification de la présence de l’ADN." },
    ],
    explanation: "Les EPC sont des entérobactérales produisant des carbapénémases, enzymes capables de détruire des antibiotiques de la famille des carbapénèmes."
  },
  {
    id: 46,
    type: "QRM",
    question: "Concernant les entérobactérales productrices de carbapénémases, quelles propositions sont exactes ?",
    options: [
      { text: "Les EPC sont nécessairement des virus grippaux.", correct: false, correction: "Faux. Ce sont des entérobactérales productrices d’enzymes." },
      { text: "OXA-48 est une carbapénémase citée dans le cours.", correct: true, correction: "Vrai. Elle figure parmi les enzymes les plus connues." },
      { text: "Le réservoir des EPC est principalement digestif.", correct: true, correction: "Vrai. La flore intestinale et les selles jouent un rôle dans leur transmission." },
      { text: "Les carbapénèmes sont présentés comme des médicaments antifongiques.", correct: false, correction: "Faux. Le cours les décrit comme des antibiotiques utilisés dans les infections bactériennes graves." },
      { text: "NDM est une autre enzyme évoquée.", correct: true, correction: "Vrai. Le texte mentionne la New Delhi métallo-enzyme." },
    ],
    explanation: "Les EPC produisent des enzymes de résistance et possèdent un réservoir digestif important ; OXA-48 et NDM sont citées parmi ces enzymes."
  },
  {
    id: 47,
    type: "QCM",
    question: "Quel ordre de grandeur de bactéries par gramme de selles est indiqué pour le réservoir digestif des EPC ?",
    options: [
      { text: "10⁵ bactéries par gramme.", correct: false, correction: "Faux. Cette valeur apparaît en distracteur dans les QCM du cours, mais la correction retient 10⁸." },
      { text: "10⁸ bactéries par gramme.", correct: true, correction: "Vrai. C’est le chiffre écrit dans le développement sur les EPC." },
      { text: "10 bactéries par gramme.", correct: false, correction: "Faux. La valeur donnée est très supérieure." },
      { text: "10²⁰ bactéries par gramme.", correct: false, correction: "Faux. Ce n’est pas la valeur du support." },
      { text: "Aucune bactérie dans les selles.", correct: false, correction: "Faux. Le texte décrit un réservoir digestif abondant." },
    ],
    explanation: "Le support retient 10⁸ bactéries par gramme de selles dans le paragraphe sur les EPC."
  },
  {
    id: 48,
    type: "QRM",
    question: "À propos des bactéries EPC et de leur diffusion, quelles propositions sont conformes au cours ?",
    options: [
      { text: "Le tourisme médical est présenté comme facteur favorisant la diffusion des EPC.", correct: true, correction: "Vrai. Un patient ayant été hospitalisé à l’étranger peut revenir porteur d’une BHR." },
      { text: "La première identification européenne est datée de 1808 dans le support.", correct: false, correction: "Faux. Les notes indiquent à partir de 2008." },
      { text: "Escherichia coli figure également parmi les exemples.", correct: true, correction: "Vrai. Il est mentionné dans la liste des entérobactérales." },
      { text: "Klebsiella pneumoniae est cité parmi les entérobactérales concernées.", correct: true, correction: "Vrai. Il apparaît dans les exemples et dans la chronologie de diffusion." },
      { text: "Le cours situe une découverte d’EPC aux États-Unis en 1996.", correct: true, correction: "Vrai. L’exemple cité est K. pneumoniae." },
    ],
    explanation: "Les notes citent Klebsiella pneumoniae et E. coli, l’apparition d’EPC aux États-Unis en 1996 et leur identification en Europe à partir de 2008."
  },
  {
    id: 49,
    type: "QCM",
    question: "Quelle espèce d’entérocoque est présentée comme la BHR particulièrement impliquée dans les épidémies d’ERG ?",
    options: [
      { text: "Pseudomonas aeruginosa.", correct: false, correction: "Faux. Le pyocyanique n’est pas l’espèce d’ERG mise en avant." },
      { text: "Enterococcus faecium.", correct: true, correction: "Vrai. C’est l’espèce que le cours retient pour les BHR de type ERG." },
      { text: "Staphylococcus aureus.", correct: false, correction: "Faux. Le staphylocoque doré est cité comme SARM parmi les BMR." },
      { text: "Candida auris.", correct: false, correction: "Faux. Il s’agit d’une levure émergente." },
      { text: "Escherichia coli.", correct: false, correction: "Faux. C’est une entérobactérale et non l’entérocoque demandé." },
    ],
    explanation: "Le document met l’accent sur Enterococcus faecium parmi les ERG, tandis qu’E. faecalis est présenté comme moins épidémique et classé BMR dans le support."
  },
  {
    id: 50,
    type: "QRM",
    question: "Concernant les entérocoques résistants aux glycopeptides (ERG), quelles propositions correspondent au support ?",
    options: [
      { text: "E. faecium est l’espèce principalement soulignée dans les épisodes épidémiques.", correct: true, correction: "Vrai. Le texte le présente comme l’espèce la plus importante." },
      { text: "Les glycopeptides sont présentés comme des médicaments uniquement antiviraux.", correct: false, correction: "Faux. Le support les associe à des traitements de certaines bactéries Gram positives." },
      { text: "ERG signifie « entérobactérie résistante à la grippe ».", correct: false, correction: "Faux. Il signifie « entérocoque résistant aux glycopeptides »." },
      { text: "E. faecalis n’est pas cité parmi les entérocoques du cours.", correct: false, correction: "Faux. Le document cite explicitement E. faecalis et le distingue de E. faecium." },
      { text: "Le cours distingue le classement de E. faecium et de E. faecalis.", correct: true, correction: "Vrai. Il attribue BHR à E. faecium et BMR à E. faecalis dans cette partie." },
    ],
    explanation: "Le support compare E. faecium, souvent impliqué dans les épidémies et classé BHR, avec E. faecalis décrit comme moins impliqué et classé BMR."
  },
  {
    id: 51,
    type: "QCM",
    question: "Quelle distinction est essentielle chez un patient porteur d’une BHR sans symptômes ?",
    options: [
      { text: "Le patient peut être colonisé sans être malade et néanmoins transmettre la bactérie.", correct: true, correction: "Vrai. C’est la distinction majeure formulée dans les notes." },
      { text: "Le patient est forcément en choc septique.", correct: false, correction: "Faux. Le portage peut être totalement asymptomatique." },
      { text: "Le patient ne peut en aucun cas transmettre le germe.", correct: false, correction: "Faux. La transmission reste possible en l’absence de symptômes." },
      { text: "Il n’existe aucun micro-organisme dans son tube digestif.", correct: false, correction: "Faux. Le portage digestif est précisément l’exemple donné." },
      { text: "Tout portage impose automatiquement un diagnostic d’infection active.", correct: false, correction: "Faux. Le document différencie colonisation et infection." },
    ],
    explanation: "Le cours insiste : être porteur n’est pas nécessairement être infecté ; une colonisation asymptomatique peut néanmoins permettre une transmission."
  },
  {
    id: 52,
    type: "QRM",
    question: "Chez un patient porteur de BHR, quelles mesures spécifiques sont indiquées par le cours ?",
    options: [
      { text: "Le cours préconise systématiquement une chambre commune pour tous les patients sans précaution.", correct: false, correction: "Faux. Il retient au contraire la chambre individuelle." },
      { text: "Une chambre individuelle est recommandée dans la description du support.", correct: true, correction: "Vrai. Elle figure en première position." },
      { text: "Un sas d’entrée peut faciliter l’application des mesures d’hygiène.", correct: true, correction: "Vrai. C’est le troisième élément de la liste." },
      { text: "Le changement de tenue des soignants à l’entrée et à la sortie est mentionné.", correct: true, correction: "Vrai. Le texte présente cette consigne spécifique." },
      { text: "Aucun soin particulier ne doit être pris lors du passage de la porte.", correct: false, correction: "Faux. Le changement de tenue et le sas répondent justement à cette étape." },
    ],
    explanation: "Les mesures citées comprennent chambre individuelle, changement de tenue des soignants à l’entrée et à la sortie, et sas d’entrée facilitant l’hygiène."
  },
  {
    id: 53,
    type: "QCM",
    question: "Quel antécédent constitue un facteur de repérage des BHR selon les critères détaillés du cours ?",
    options: [
      { text: "Une consultation téléphonique en France dix ans auparavant.", correct: false, correction: "Faux. Elle ne figure pas dans les critères retenus." },
      { text: "Une vaccination antigrippale récente.", correct: false, correction: "Faux. Ce n’est pas un critère de portage de BHR dans le document." },
      { text: "Un rhume ancien chez un proche sans voyage.", correct: false, correction: "Faux. Le support recherche particulièrement les expositions à l’étranger." },
      { text: "Un trajet quotidien vers l’université.", correct: false, correction: "Faux. Ce n’est pas l’exposition citée." },
      { text: "Une hospitalisation de plus de 24 heures à l’étranger dans les douze derniers mois.", correct: true, correction: "Vrai. C’est le critère précisé dans la grille de repérage." },
    ],
    explanation: "Le support cite notamment une hospitalisation de plus de 24 heures à l’étranger au cours des douze mois précédents."
  },
  {
    id: 54,
    type: "QRM",
    question: "À propos du tourisme médical et du risque de portage de BHR, quelles propositions sont exactes ?",
    options: [
      { text: "Le séjour hospitalier à l’étranger n’intervient jamais dans l’interrogatoire.", correct: false, correction: "Faux. Le cours recommande justement de rechercher cet antécédent." },
      { text: "La Grèce est également citée.", correct: true, correction: "Vrai. Elle figure dans les exemples géographiques." },
      { text: "Le tourisme médical garantit l’absence de bactéries résistantes au retour.", correct: false, correction: "Faux. Le cours explique le risque inverse." },
      { text: "L’Inde est un pays donné en exemple.", correct: true, correction: "Vrai. Elle est explicitement mentionnée." },
      { text: "Une hospitalisation à l’étranger peut faire évoquer le portage d’une BHR.", correct: true, correction: "Vrai. Elle est citée comme circonstance de risque." },
    ],
    explanation: "Le cours identifie l’hospitalisation et les soins à l’étranger comme circonstances favorisant l’importation de BHR, notamment depuis des zones telles que l’Inde et la Grèce."
  },
  {
    id: 55,
    type: "QCM",
    question: "Quel nombre approximatif de patients porteurs de BHR par an est annoncé au CHU de Tours ?",
    options: [
      { text: "Environ cinq millions de patients par an.", correct: false, correction: "Faux. Ce nombre n’est pas cohérent avec la donnée locale du support." },
      { text: "Un patient tous les dix ans.", correct: false, correction: "Faux. C’est beaucoup moins que le nombre du cours." },
      { text: "Aucun patient depuis 2011.", correct: false, correction: "Faux. Le cours évoque au contraire des épisodes épidémiques." },
      { text: "Environ dix mille patients par jour.", correct: false, correction: "Faux. Aucun tel chiffre n’est rapporté." },
      { text: "Environ cent patients par an.", correct: true, correction: "Vrai. Le chiffre est annoncé directement dans les notes." },
    ],
    explanation: "Dans les données locales du support, environ cent patients par an sont porteurs d’une BHR au CHU de Tours."
  },
  {
    id: 56,
    type: "QRM",
    question: "À propos de l’expérience des BHR au CHU de Tours mentionnée dans le PDF, quelles propositions sont exactes ?",
    options: [
      { text: "Le support rapporte environ cent patients porteurs de BHR par an au CHU de Tours.", correct: true, correction: "Vrai. C’est l’ordre de grandeur précisé dans le paragraphe sur les épisodes locaux." },
      { text: "La dispersion de patients entre services peut compliquer la maîtrise d’un épisode.", correct: true, correction: "Vrai. Le document évoque les transferts avant identification des porteurs." },
      { text: "Le problème devient plus simple lorsque les porteurs ne sont pas repérés.", correct: false, correction: "Faux. Le support indique que le retard d’identification complique le contrôle." },
      { text: "Cinq épisodes épidémiques sont recensés depuis 2011.", correct: true, correction: "Vrai. C’est le total donné." },
      { text: "Un épisode en 2025 a concerné vingt-deux patients porteurs d’ERG.", correct: true, correction: "Vrai. Cette donnée locale est explicitement citée." },
    ],
    explanation: "Les notes mentionnent cinq épisodes épidémiques depuis 2011, dont un épisode d’ERG en 2025 impliquant vingt-deux porteurs."
  },
  {
    id: 57,
    type: "QCM",
    question: "Quelle attitude contribue à limiter la diffusion des BHR en France selon le cours ?",
    options: [
      { text: "Abandonner le dépistage des patients revenant de l’étranger.", correct: false, correction: "Faux. Le dépistage de ces patients est cité comme mesure de contrôle." },
      { text: "Prescrire systématiquement des antibiotiques inutiles.", correct: false, correction: "Faux. Le bon usage est présenté comme protecteur." },
      { text: "Supprimer l’hygiène des mains en présence de BHR.", correct: false, correction: "Faux. Le respect de l’hygiène est au contraire primordial." },
      { text: "Combiner hygiène, dépistage, précautions complémentaires et usage raisonné des antibiotiques.", correct: true, correction: "Vrai. C’est l’ensemble des mesures listées." },
      { text: "Éviter toute information des équipes soignantes.", correct: false, correction: "Faux. La prévention suppose l’organisation et l’application de mesures." },
    ],
    explanation: "Le texte associe règles d’hygiène, dépistage des patients à risque, précautions complémentaires et bon usage des antibiotiques."
  },
  {
    id: 58,
    type: "QRM",
    question: "Concernant les catégories de germes résistants et les mesures collectives, quelles propositions sont exactes ?",
    options: [
      { text: "Le dépistage des patients à risque n’a aucune utilité pour limiter la diffusion des BHR.", correct: false, correction: "Faux. Le cours présente ce dépistage comme une mesure de prévention." },
      { text: "La prévention de la transmission fait partie de la lutte contre l’antibiorésistance.", correct: true, correction: "Vrai. Elle est réaffirmée dans la conclusion." },
      { text: "Le portage asymptomatique écarte toujours tout besoin de précautions.", correct: false, correction: "Faux. Un patient colonisé peut transmettre la bactérie." },
      { text: "L’usage adapté des antibiotiques contribue à la maîtrise des résistances.", correct: true, correction: "Vrai. Il fait partie des mesures recensées." },
      { text: "La résistance bactérienne empêche toute mesure de prévention.", correct: false, correction: "Faux. Les précautions d’hygiène et de contact sont justement présentées comme efficaces pour limiter la diffusion." },
    ],
    explanation: "Le cours distingue BMR, BHR et agents REB, et rappelle la nécessité de prévenir la diffusion en appliquant des mesures d’hygiène et de repérage."
  },
  {
    id: 59,
    type: "QCM",
    question: "Que signifie l’acronyme REB dans le cadre des agents infectieux ?",
    options: [
      { text: "Réponse érythrocytaire biologique.", correct: false, correction: "Faux. Ce n’est pas l’expression utilisée." },
      { text: "Résistance exclusivement bactérienne.", correct: false, correction: "Faux. Les agents REB comprennent aussi des virus et d’autres micro-organismes." },
      { text: "Régulation enzymatique des bêta-lactamines.", correct: false, correction: "Faux. Ce terme n’est pas associé au REB." },
      { text: "Risque épidémique et biologique.", correct: true, correction: "Vrai. C’est l’intitulé figurant dans le paragraphe." },
      { text: "Réservoir environnemental bénin.", correct: false, correction: "Faux. Le cours insiste au contraire sur un risque potentiellement élevé." },
    ],
    explanation: "Le cours décrit les agents REB comme des micro-organismes à risques épidémiques et biologiques."
  },
  {
    id: 60,
    type: "QRM",
    question: "À propos de la classification des agents infectieux en quatre groupes, quelles propositions sont exactes ?",
    options: [
      { text: "La gravité de la maladie humaine entre en compte.", correct: true, correction: "Vrai. Elle figure dans la liste." },
      { text: "La présence ou l’absence d’un traitement est sans aucun intérêt.", correct: false, correction: "Faux. Le cours cite cette possibilité parmi les critères de classement." },
      { text: "Le pouvoir pathogène contribue au classement.", correct: true, correction: "Vrai. Il est cité comme critère." },
      { text: "Le risque de propagation dans la population est considéré.", correct: true, correction: "Vrai. C’est une composante du risque épidémique." },
      { text: "La couleur du micro-organisme sous lumière naturelle est le seul critère.", correct: false, correction: "Faux. Le classement repose sur des critères sanitaires." },
    ],
    explanation: "Le classement annoncé repose sur pathogénicité, gravité, risque de propagation et disponibilité de moyens de prévention ou de traitement."
  },
  {
    id: 61,
    type: "QCM",
    question: "Dans quel groupe de risque le cours classe-t-il Mycobacterium tuberculosis ?",
    options: [
      { text: "Le groupe 2.", correct: false, correction: "Faux. Le cours retient le groupe 3 pour la tuberculose." },
      { text: "Le groupe 3.", correct: true, correction: "Vrai. C’est le classement indiqué dans les exemples." },
      { text: "Le groupe 1.", correct: false, correction: "Faux. Il regroupe les agents généralement non susceptibles de rendre malade un humain en bonne santé." },
      { text: "Aucun groupe n’est défini pour ce germe.", correct: false, correction: "Faux. Le support le classe explicitement." },
      { text: "Le groupe 4.", correct: false, correction: "Faux. Le virus Ebola est l’exemple associé au groupe 4." },
    ],
    explanation: "La tuberculose est l’exemple choisi pour illustrer le groupe 3."
  },
  {
    id: 62,
    type: "QRM",
    question: "Concernant la signification des groupes 1 à 4, quelles propositions sont justes ?",
    options: [
      { text: "Le groupe 3 comporte des agents pouvant entraîner des maladies graves.", correct: true, correction: "Vrai. Le cours cite également un risque de propagation possible." },
      { text: "Le groupe 2 comprend des agents pouvant provoquer une maladie mais avec un risque de propagation limité.", correct: true, correction: "Vrai. Des moyens de prévention ou de traitement existent généralement." },
      { text: "Le groupe 4 désigne systématiquement les germes les moins préoccupants.", correct: false, correction: "Faux. Il correspond au contraire à des maladies très graves et à un risque élevé de propagation." },
      { text: "Tous les micro-organismes appartiennent exclusivement au groupe 4.", correct: false, correction: "Faux. La majorité est présentée dans les groupes 1 et 2." },
      { text: "Le groupe 1 regroupe généralement les agents peu susceptibles de provoquer une maladie chez un sujet sain.", correct: true, correction: "Vrai. C’est sa définition dans les notes." },
    ],
    explanation: "Le groupe 1 concerne les agents généralement non pathogènes chez l’humain sain, le groupe 2 un risque limité avec moyens disponibles, les groupes 3 et 4 des maladies graves et très graves."
  },
  {
    id: 63,
    type: "QCM",
    question: "Quel agent est donné comme exemple d’appartenance au groupe 4 ?",
    options: [
      { text: "Le virus respiratoire syncytial dans le cours.", correct: false, correction: "Faux. Il figure dans le tableau des durées de survie, pas comme exemple de groupe 4." },
      { text: "Le virus influenza saisonnier dans le tableau des surfaces.", correct: false, correction: "Faux. Le cours ne l’emploie pas comme exemple de groupe 4." },
      { text: "Escherichia coli producteur de BLSE dans l’antibiogramme.", correct: false, correction: "Faux. Il est étudié dans les BMR et non comme exemple du groupe 4." },
      { text: "Staphylococcus aureus porteur sain.", correct: false, correction: "Faux. Cet exemple n’est pas présenté dans le groupe 4." },
      { text: "Le virus Ebola.", correct: true, correction: "Vrai. C’est l’exemple explicitement donné du groupe 4." },
    ],
    explanation: "Le virus Ebola est classé dans le groupe 4, alors que la tuberculose est classée dans le groupe 3."
  },
  {
    id: 64,
    type: "QRM",
    question: "Concernant le repérage et la protection face à un agent REB, quelles propositions sont exactes ?",
    options: [
      { text: "Une exposition à risque peut orienter la suspicion.", correct: true, correction: "Vrai. Elle figure dans les informations à rechercher." },
      { text: "L’isolement du patient est systématiquement interdit.", correct: false, correction: "Faux. Il fait partie des moyens de protection cités." },
      { text: "Le port d’un masque et l’isolement du patient figurent parmi les mesures de protection.", correct: true, correction: "Vrai. Ces exemples sont cités dans la partie « Protéger »." },
      { text: "L’interrogatoire recherche un voyage récent à l’étranger.", correct: true, correction: "Vrai. Ce critère de repérage est précisé." },
      { text: "Des symptômes compatibles avec l’agent suspecté doivent être recherchés.", correct: true, correction: "Vrai. Le tableau clinique fait partie du repérage." },
    ],
    explanation: "Le cours demande de repérer les suspicions par voyage/exposition/symptômes, puis de protéger par masque, isolement et protocoles adaptés ; il cite le rôle de la COREB."
  },
  {
    id: 65,
    type: "QCM",
    question: "Quel est le rôle attribué à la COREB dans le cours ?",
    options: [
      { text: "Fournir des antibiogrammes automatiquement à chaque consultation.", correct: false, correction: "Faux. Elle est définie comme une organisation de coordination du risque REB." },
      { text: "Classer uniquement les antibiotiques en ville.", correct: false, correction: "Faux. Ce n’est pas sa mission." },
      { text: "Coordonner et soutenir la préparation et la prise en charge des situations à risque épidémique et biologique.", correct: true, correction: "Vrai. C’est sa fonction selon le support." },
      { text: "Remplacer toute mesure de protection du soignant.", correct: false, correction: "Faux. Le cours exige le port des protections et les protocoles de l’établissement." },
      { text: "Supprimer le besoin d’identifier les patients suspects.", correct: false, correction: "Faux. Le premier principe est au contraire « repérer »." },
    ],
    explanation: "COREB correspond à la coordination opérationnelle du risque épidémique et biologique, qui soutient la préparation et la gestion des situations REB."
  },
  {
    id: 66,
    type: "QRM",
    question: "À propos des circonstances de découverte d’un agent REB, quelles propositions correspondent au cours ?",
    options: [
      { text: "Un agent REB peut avoir circulé en communauté avant son identification hospitalière.", correct: true, correction: "Vrai. Le document souligne ce risque." },
      { text: "Les risques pour les soignants et les autres patients sont présentés comme nuls.", correct: false, correction: "Faux. Les notes insistent sur les conséquences potentiellement importantes." },
      { text: "Le risque de rencontrer un agent REB est présenté comme extrêmement fréquent dans tous les soins.", correct: false, correction: "Faux. Le cours indique qu’il reste faible en pratique courante, malgré les conséquences possibles." },
      { text: "La maternité est présentée comme un lieu où aucun agent REB ne peut être détecté.", correct: false, correction: "Faux. Le cours la cite précisément comme point d’entrée, au même titre que les urgences." },
      { text: "Les urgences constituent un lieu important de repérage.", correct: true, correction: "Vrai. Le cours les décrit comme une porte d’entrée du système de soins." },
    ],
    explanation: "Les urgences et la maternité sont cités comme portes d’entrée du système de soins ; les agents peuvent circuler en communauté avant identification."
  },
  {
    id: 67,
    type: "QCM",
    question: "Quelle est la nature microbiologique de Candida auris selon le cours ?",
    options: [
      { text: "Un virus à risque hémorragique de groupe 4.", correct: false, correction: "Faux. Le virus Ebola est l’exemple de cette catégorie." },
      { text: "Une entérobactérie productrice de carbapénémase.", correct: false, correction: "Faux. Les EPC sont des bactéries et Candida auris est une levure." },
      { text: "Un antibiotique de dernier recours.", correct: false, correction: "Faux. Candida auris est un agent infectieux, non un médicament." },
      { text: "Un parasite digestif obligatoirement inoffensif.", correct: false, correction: "Faux. Le support souligne au contraire la possibilité d’infections graves." },
      { text: "Une levure émergente.", correct: true, correction: "Vrai. C’est le terme utilisé dans le titre et le développement." },
    ],
    explanation: "Candida auris est une levure émergente pouvant provoquer des infections graves chez les patients fragiles, avec résistance fréquente aux antifongiques et persistance environnementale."
  },
  {
    id: 68,
    type: "QRM",
    question: "Concernant Candida auris, quelles propositions sont exactes ?",
    options: [
      { text: "Elle ne persiste jamais chez un patient colonisé.", correct: false, correction: "Faux. Le support décrit aussi sa persistance chez les personnes colonisées ou infectées." },
      { text: "Il s’agit d’un staphylocoque sensible à la méticilline.", correct: false, correction: "Faux. Candida auris est une levure émergente, non un staphylocoque." },
      { text: "Candida auris peut provoquer des infections graves chez des patients fragiles.", correct: true, correction: "Vrai. Les sujets hospitalisés ou immunodéprimés sont cités." },
      { text: "Une résistance fréquente aux antifongiques est mentionnée.", correct: true, correction: "Vrai. C’est une raison de l’inquiétude liée à cette levure." },
      { text: "Elle peut persister durablement dans l’environnement hospitalier.", correct: true, correction: "Vrai. C’est une propriété explicitement signalée." },
    ],
    explanation: "Le cours présente cette levure comme persistante dans l’environnement et chez les personnes colonisées/infectées, souvent résistante aux antifongiques et préoccupante chez les patients fragiles."
  },
  {
    id: 69,
    type: "QCM",
    question: "Combien de cas sont mentionnés pour le premier des deux épisodes épidémiques de Candida auris rapportés depuis 2022 ?",
    options: [
      { text: "Dix-sept cas.", correct: false, correction: "Faux. Dix-sept correspond au second épisode, rapporté en 2024." },
      { text: "Aucun cas.", correct: false, correction: "Faux. Deux épisodes sont explicitement recensés." },
      { text: "Cent mille cas.", correct: false, correction: "Faux. Le support n’annonce pas un tel chiffre." },
      { text: "Trente-huit cas.", correct: true, correction: "Vrai. C’est le nombre cité pour le premier épisode." },
      { text: "Deux cas.", correct: false, correction: "Faux. Ce n’est pas le total indiqué." },
    ],
    explanation: "Le document mentionne un premier épisode de trente-huit cas, puis un épisode en 2024 avec dix-sept cas."
  },
  {
    id: 70,
    type: "QRM",
    question: "À propos des chiffres historiques de Candida auris présentés dans le cours, quelles propositions sont exactes ?",
    options: [
      { text: "Le cas décrit avait séjourné en Inde avant une transplantation hépatique.", correct: true, correction: "Vrai. Ce contexte est explicitement raconté." },
      { text: "Le support indique une absence totale de colonisations en France.", correct: false, correction: "Faux. Il cite cinquante colonisations." },
      { text: "Un premier patient métropolitain est situé en 2007 dans le document.", correct: true, correction: "Vrai. Les notes présentent cet épisode au service de réanimation de Trousseau." },
      { text: "Le support rapporte vingt-trois infections invasives en France.", correct: true, correction: "Vrai. C’est le chiffre donné." },
      { text: "Le deuxième épisode épidémique est daté de 1928.", correct: false, correction: "Faux. Il est daté de 2024 avec dix-sept cas." },
    ],
    explanation: "Les notes situent un premier patient métropolitain en 2007 à Trousseau après un séjour en Inde, puis 23 infections invasives et 50 colonisations recensées en France."
  },
  {
    id: 71,
    type: "QCM",
    question: "Quels prélèvements de dépistage sont proposés dans les critères de repérage de Candida auris ?",
    options: [
      { text: "Une radiographie thoracique et une échographie abdominale.", correct: false, correction: "Faux. Ces examens ne correspondent pas aux prélèvements indiqués." },
      { text: "Une seule prise de sang systématique, sans écouvillonnage.", correct: false, correction: "Faux. Le cours prévoit deux prélèvements par écouvillonnage." },
      { text: "Un écouvillonnage des deux narines et un autre des aisselles et des aines.", correct: true, correction: "Vrai. C’est exactement le protocole rapporté." },
      { text: "Un prélèvement d’ongle exclusivement.", correct: false, correction: "Faux. Ce n’est pas le schéma décrit." },
      { text: "Une ponction du liquide céphalorachidien chez tout patient.", correct: false, correction: "Faux. Le dépistage mentionné n’est pas une ponction lombaire." },
    ],
    explanation: "Le cours demande deux écouvillonnages : l’un des deux narines et l’autre des aisselles et des aines."
  },
  {
    id: 72,
    type: "QRM",
    question: "Concernant les situations de repérage de Candida auris, quelles propositions sont exactes ?",
    options: [
      { text: "Deux prélèvements par écouvillonnage sont prévus dans les critères Candida auris.", correct: true, correction: "Vrai. Un écouvillon concerne les narines et un autre les aisselles et les aines." },
      { text: "Un rapatriement sanitaire constitue un critère de repérage.", correct: true, correction: "Vrai. Il apparaît dans la liste Candida auris." },
      { text: "Des soins reçus en zone de guerre sont mentionnés.", correct: true, correction: "Vrai. Le cours relie cet ajout à des recommandations de 2025." },
      { text: "La conduite à tenir est de supprimer toutes les précautions contact.", correct: false, correction: "Faux. Les précautions contact sont explicitement recommandées." },
      { text: "Une hospitalisation à l’étranger est un critère.", correct: true, correction: "Vrai. C’est le deuxième élément de la liste." },
    ],
    explanation: "Le support retient rapatriement sanitaire, hospitalisation à l’étranger ou soins reçus en zone de guerre ; il recommande précautions contact et dépistage ciblé."
  },
  {
    id: 73,
    type: "QCM",
    question: "Quel délai de retour du Moyen-Orient figure parmi les critères de repérage du MERS-CoV ?",
    options: [
      { text: "Plus de cinq ans.", correct: false, correction: "Faux. Cela ne correspond pas au repérage d’exposition récente." },
      { text: "Moins de quatorze jours.", correct: true, correction: "Vrai. C’est le seuil écrit dans la grille MERS Coronavirus." },
      { text: "Moins de deux ans.", correct: false, correction: "Faux. Le critère est bien plus récent." },
      { text: "Exactement quarante-huit heures après toute intervention dentaire.", correct: false, correction: "Faux. Ce n’est pas le critère décrit." },
      { text: "Moins de vingt-et-un mois.", correct: false, correction: "Faux. Le cours parle de jours, pas de mois." },
    ],
    explanation: "Le document retient un retour du Moyen-Orient datant de moins de quatorze jours, avec fièvre et toux."
  },
  {
    id: 74,
    type: "QRM",
    question: "Concernant la suspicion de MERS-CoV selon la fiche de repérage, quelles propositions sont exactes ?",
    options: [
      { text: "Un retour récent du Moyen-Orient peut être évocateur.", correct: true, correction: "Vrai. Le seuil indiqué est inférieur à quatorze jours." },
      { text: "La fièvre fait partie des critères cliniques.", correct: true, correction: "Vrai. Elle figure explicitement dans la grille." },
      { text: "La toux exclut une suspicion de MERS-CoV dans les critères présentés.", correct: false, correction: "Faux. La toux figure au contraire parmi les critères de repérage." },
      { text: "La conduite à tenir consiste uniquement à ne rien signaler ni organiser.", correct: false, correction: "Faux. Le cours demande la mise en place de la procédure MERS-CoV." },
      { text: "Le MERS-CoV est présenté comme un parasite intestinal.", correct: false, correction: "Faux. Il est décrit comme un coronavirus respiratoire pouvant entraîner des infections graves." },
    ],
    explanation: "Les trois critères indiqués sont retour du Moyen-Orient depuis moins de 14 jours, fièvre et toux ; la procédure MERS-CoV doit être engagée."
  },
  {
    id: 75,
    type: "QCM",
    question: "Quel délai de retour de voyage est mentionné pour le repérage de mpox (Monkeypox) ?",
    options: [
      { text: "Moins de vingt-et-un jours.", correct: true, correction: "Vrai. C’est le critère temporel indiqué pour mpox." },
      { text: "Moins de quatorze mois.", correct: false, correction: "Faux. La grille indique un délai en jours." },
      { text: "Moins de quatorze jours exclusivement.", correct: false, correction: "Faux. Ce seuil de quatorze jours figure pour MERS-CoV." },
      { text: "Moins de vingt-quatre heures uniquement.", correct: false, correction: "Faux. Le cours retient une fenêtre plus longue." },
      { text: "Plus de dix ans sans autre critère.", correct: false, correction: "Faux. Cela ne fait pas partie du repérage enseigné." },
    ],
    explanation: "Le cours indique un retour de voyage depuis moins de vingt-et-un jours avec une éruption évocatrice et éventuellement une atteinte des muqueuses génitales ou anales."
  },
  {
    id: 76,
    type: "QRM",
    question: "Concernant le repérage de mpox et des fièvres hémorragiques virales (FHV), quelles propositions sont exactes ?",
    options: [
      { text: "Les FHV sont définies dans la grille par une absence obligatoire de fièvre.", correct: false, correction: "Faux. Le support retient au contraire une température d’au moins 38 °C." },
      { text: "Une éruption cutanée évocatrice est un critère pour mpox.", correct: true, correction: "Vrai. C’est le signe cité dans la grille." },
      { text: "Mpox est repérée exclusivement par un antibiogramme.", correct: false, correction: "Faux. Le support utilise d’abord le voyage et les manifestations cliniques." },
      { text: "Pour les FHV, le séjour récent en Afrique équatoriale ou en Afrique de l’Ouest est recherché.", correct: true, correction: "Vrai. Ces deux zones sont précisées." },
      { text: "Une atteinte des muqueuses génitales ou anales est évoquée pour mpox.", correct: true, correction: "Vrai. Elle est présentée avec l’éruption." },
    ],
    explanation: "La grille du support associe mpox à éruption cutanée et atteinte génito-anale possibles, et les FHV à un retour récent d’Afrique équatoriale ou de l’Ouest avec fièvre."
  },
  {
    id: 77,
    type: "QCM",
    question: "Quel seuil de température est indiqué dans les critères de repérage des FHV, notamment Ebola ?",
    options: [
      { text: "Une température d’au moins 42 °C comme seul critère.", correct: false, correction: "Faux. Le seuil cité est plus bas et le voyage est également important." },
      { text: "Une température exclusivement inférieure à 35 °C.", correct: false, correction: "Faux. Il s’agit d’un critère de fièvre, non d’hypothermie." },
      { text: "Une température supérieure ou égale à 38 °C.", correct: true, correction: "Vrai. C’est le seuil noté dans la grille FHV." },
      { text: "Aucun seuil de température n’est donné.", correct: false, correction: "Faux. Le cours mentionne explicitement 38 °C." },
      { text: "Une température exactement égale à 36,5 °C.", correct: false, correction: "Faux. Le critère donné est une fièvre à partir de 38 °C." },
    ],
    explanation: "Le cours retient une fièvre d’au moins 38 °C avec séjour récent dans une zone géographique mentionnée et retour sous 21 jours."
  },
  {
    id: 78,
    type: "QRM",
    question: "À propos des délais de repérage des agents émergents dans le cours, quelles propositions sont exactes ?",
    options: [
      { text: "MERS-CoV exige dans la grille une éruption génito-anale et aucune toux.", correct: false, correction: "Faux. La toux et la fièvre sont les signes indiqués pour MERS-CoV ; les atteintes génito-anales concernent mpox." },
      { text: "Le délai de retour de voyage pour mpox est inférieur à vingt-et-un jours.", correct: true, correction: "Vrai. C’est le délai figurant dans la grille." },
      { text: "Le délai de retour pour les FHV est inférieur à vingt-et-un jours.", correct: true, correction: "Vrai. Le support cite notamment Ebola." },
      { text: "Les FHV sont repérées sans aucune notion de retour d’une zone géographique particulière.", correct: false, correction: "Faux. Le document cite l’Afrique équatoriale et l’Afrique de l’Ouest." },
      { text: "Le délai MERS-CoV est inférieur à quatorze jours.", correct: true, correction: "Vrai. Il concerne le retour du Moyen-Orient." },
    ],
    explanation: "Les délais à apprendre sont : MERS-CoV moins de 14 jours après retour du Moyen-Orient ; mpox moins de 21 jours ; FHV moins de 21 jours avec fièvre ≥ 38 °C."
  },
  {
    id: 79,
    type: "QCM",
    question: "Quelle catégorie d’agents sont les mucorales dans ce cours ?",
    options: [
      { text: "Des champignons filamenteux.", correct: true, correction: "Vrai. C’est leur classification donnée par le support." },
      { text: "Des bactéries du groupe SARM.", correct: false, correction: "Faux. Ce ne sont pas des staphylocoques." },
      { text: "Des anticorps apportés par sérothérapie.", correct: false, correction: "Faux. Ce sont des agents fongiques, pas des anticorps." },
      { text: "Des antibiotiques détruisant les carbapénèmes.", correct: false, correction: "Faux. Les carbapénémases sont des enzymes distinctes des mucorales." },
      { text: "Des virus responsables exclusivement de la rougeole.", correct: false, correction: "Faux. La rougeole est un virus évoqué dans une autre partie." },
    ],
    explanation: "Les mucorales sont un ordre de champignons filamenteux pouvant provoquer des mucormycoses, notamment des infections fongiques pulmonaires invasives graves chez les immunodéprimés."
  },
  {
    id: 80,
    type: "QRM",
    question: "Concernant les mucorales et les messages de prévention de la conclusion, quelles propositions sont exactes ?",
    options: [
      { text: "L’information et la sensibilisation des patients sont recommandées dans la conclusion.", correct: true, correction: "Vrai. Le support y associe hygiène, vaccins, précautions adaptées et bon usage des antibiotiques." },
      { text: "Les mucormycoses peuvent être graves chez les patients immunodéprimés ou en aplasie.", correct: true, correction: "Vrai. Ce sont les terrains cités." },
      { text: "Le jardinage et la manipulation de terre ou de compost peuvent exposer aux spores fongiques.", correct: true, correction: "Vrai. Ces activités figurent dans les exemples." },
      { text: "Le support recommande de prescrire des antibiotiques sans indication pour prévenir toute résistance.", correct: false, correction: "Faux. Il recommande au contraire le bon usage et l’évitement des prescriptions inutiles." },
      { text: "Le réchauffement climatique est évoqué comme facteur influençant la répartition des champignons.", correct: true, correction: "Vrai. Le cours cite l’évolution des conditions environnementales." },
    ],
    explanation: "Les mucorales peuvent entraîner des infections graves chez les patients en aplasie, et l’exposition fongique peut être influencée par l’environnement et des activités humaines ; la prévention générale inclut hygiène, vaccins et antibiothérapie adaptée."
  }
];