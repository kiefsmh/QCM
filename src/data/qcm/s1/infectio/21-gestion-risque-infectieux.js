// Projet D1 - 80 QCM/QRM originaux fondés exclusivement sur le support fourni.
// Aucune rectification, extension ou mise à jour externe du contenu du cours.
export const meta = {
  title: 'Gestion du risque infectieux',
};

export default [
  {
    id: 1,
    type: "QCM",
    question: "Quel est le champ de la prévention du risque infectieux (PRI) dans ce cours ?",
    options: [
      { text: "Elle n’intervient qu’une fois une infection diagnostiquée.", correct: false, correction: "Faux. Son objectif est aussi de prévenir la contamination et la transmission." },
      { text: "Elle concerne exclusivement les services de réanimation.", correct: false, correction: "Faux. Toutes les spécialités et structures de soins sont concernées." },
      { text: "Elle concerne l’ensemble des professionnels de santé, quel que soit le lieu d’exercice.", correct: true, correction: "Vrai. Le cours cite hôpital, clinique, établissement médico-social et médecine de ville." },
      { text: "Elle se limite au nettoyage des chambres.", correct: false, correction: "Faux. Le support y inclut les mesures d’hygiène, la transmission microbienne, les IAS et le bon usage des antibiotiques." },
      { text: "Elle est indépendante de la sécurité des soins.", correct: false, correction: "Faux. Elle en constitue au contraire une composante essentielle." },
    ],
    explanation: "La PRI fait partie de la qualité et de la sécurité des soins et concerne aussi bien les établissements que la médecine de ville."
  },
  {
    id: 2,
    type: "QRM",
    question: "À propos des trois piliers de la lutte contre les maladies infectieuses, quelles propositions sont exactes ?",
    options: [
      { text: "Les antibiotiques agissent spécifiquement contre les virus.", correct: false, correction: "Faux. Le support indique qu’ils agissent spécifiquement contre les bactéries." },
      { text: "Les anti-infectieux constituent un pilier de la lutte.", correct: true, correction: "Vrai. Ils sont destinés à lutter contre les micro-organismes." },
      { text: "Les mesures d’hygiène font partie de la prévention du risque infectieux.", correct: true, correction: "Vrai. Elles contribuent à limiter la transmission." },
      { text: "La vaccination permet de prévenir certaines infections.", correct: true, correction: "Vrai. C’est le premier des trois piliers présentés." },
      { text: "Les mesures de prévention remplacent systématiquement les traitements anti-infectieux.", correct: false, correction: "Faux. Le cours les décrit comme complémentaires et non interchangeables." },
    ],
    explanation: "Les trois piliers explicitement cités sont la vaccination, la prévention du risque infectieux et les anti-infectieux."
  },
  {
    id: 3,
    type: "QCM",
    question: "Pourquoi une erreur d’hygiène pendant un soin peut-elle être difficile à identifier immédiatement ?",
    options: [
      { text: "Parce que les infections apparaissent toujours pendant le geste.", correct: false, correction: "Faux. Les conséquences peuvent être différées." },
      { text: "Parce que la PRI s’arrête après le geste invasif.", correct: false, correction: "Faux. Les mesures doivent être maintenues tout au long de la prise en charge." },
      { text: "Parce que la contamination ne peut jamais conduire à une infection.", correct: false, correction: "Faux. Le cours souligne ce risque de progression." },
      { text: "Parce qu’un patient peut être colonisé puis développer une infection plusieurs jours plus tard.", correct: true, correction: "Vrai. C’est l’exemple donné dès l’introduction et repris pour les pansements postopératoires." },
      { text: "Parce que tous les micro-organismes sont visibles à l’œil nu.", correct: false, correction: "Faux. Ils sont au contraire invisibles à l’œil nu." },
    ],
    explanation: "Le support distingue contamination ou colonisation lors d’un geste et survenue éventuelle de l’infection plusieurs jours plus tard."
  },
  {
    id: 4,
    type: "QRM",
    question: "Concernant la lutte contre l’antibiorésistance, quelles propositions sont justes ?",
    options: [
      { text: "L’antibiorésistance n’a aucun rapport avec la prévention des infections associées aux soins.", correct: false, correction: "Faux. La limitation de la diffusion des micro-organismes résistants en fait partie." },
      { text: "L’hygiène des mains augmente la diffusion des bactéries résistantes.", correct: false, correction: "Faux. Les mesures d’hygiène contribuent au contraire à la limiter." },
      { text: "Le bon usage des antibiotiques doit accompagner la prévention des transmissions.", correct: true, correction: "Vrai. Ce sont deux composantes de la stratégie nationale." },
      { text: "Les BHRe figurent parmi les bactéries particulièrement préoccupantes.", correct: true, correction: "Vrai. Le support les nomme bactéries hautement résistantes émergentes." },
      { text: "Les BMR représentent un enjeu majeur pour les années à venir.", correct: true, correction: "Vrai. Elles sont mentionnées avec les BHRe dans la section dédiée." },
    ],
    explanation: "Le cours présente la transmission des bactéries résistantes et la pertinence des prescriptions comme deux leviers complémentaires."
  },
  {
    id: 5,
    type: "QCM",
    question: "Quelle affirmation résume la portée de la prévention du risque infectieux ?",
    options: [
      { text: "La PRI est limitée à la décontamination du matériel chirurgical.", correct: false, correction: "Faux. Elle englobe également vaccination, comportements d’hygiène et bon usage des traitements." },
      { text: "La PRI concerne l’ensemble de la population et participe à la stratégie contre l’antibiorésistance.", correct: true, correction: "Vrai. Le support insiste sur cette dimension de santé publique." },
      { text: "La PRI est sans lien avec l’organisation sanitaire.", correct: false, correction: "Faux. Elle est intégrée à une stratégie nationale." },
      { text: "La PRI intéresse uniquement le personnel soignant hospitalier.", correct: false, correction: "Faux. Le texte indique qu’elle concerne toute la population." },
      { text: "La PRI devient inutile en présence d’antibiotiques efficaces.", correct: false, correction: "Faux. Le cours rappelle que les mesures préventives préservent aussi l’efficacité des traitements." },
    ],
    explanation: "Selon le cours, la prévention ne concerne pas seulement les soignants : elle doit être inscrite dans une stratégie nationale impliquant la population."
  },
  {
    id: 6,
    type: "QRM",
    question: "Au sujet du nettoyage et du bionettoyage, quelles propositions sont exactes ?",
    options: [
      { text: "La gestion des excréta est citée parmi les situations concernées.", correct: true, correction: "Vrai. Elle fait partie des exemples de coordination avec les équipes d’entretien." },
      { text: "Les soignants peuvent ignorer le travail des équipes d’entretien.", correct: false, correction: "Faux. Le cours demande au contraire de le respecter." },
      { text: "Le bionettoyage dispense de respecter les précautions standard.", correct: false, correction: "Faux. Les moyens de prévention sont complémentaires." },
      { text: "Le bionettoyage contribue à la lutte contre les infections.", correct: true, correction: "Vrai. Son rôle est explicitement souligné dans les enjeux." },
      { text: "Le nettoyage s’articule avec les autres mesures d’hygiène.", correct: true, correction: "Vrai. Il ne constitue pas à lui seul toute la PRI." },
    ],
    explanation: "La prévention est collective : le travail d’entretien et la gestion des excréta font partie du dispositif de protection."
  },
  {
    id: 7,
    type: "QCM",
    question: "Quel repère historique le cours associe-t-il à Alexander Fleming ?",
    options: [
      { text: "L’introduction de l’antisepsie chirurgicale par Lister.", correct: false, correction: "Faux. Cette évolution est attribuée à Joseph Lister." },
      { text: "La découverte de la pénicilline en 1928.", correct: true, correction: "Vrai. C’est la date donnée dans les repères historiques." },
      { text: "La mise en place du lavage chloré en maternité au XIXe siècle.", correct: false, correction: "Faux. Cette mesure est attribuée à Semmelweis." },
      { text: "La création des 17 CPias.", correct: false, correction: "Faux. Ce n’est pas le fait historique attribué à Fleming." },
      { text: "La définition des indicateurs ICSHA et ATBIR.", correct: false, correction: "Faux. Il s’agit d’indicateurs qualité abordés plus loin dans le cours." },
    ],
    explanation: "Fleming est associé à la découverte de la pénicilline en 1928 et à son développement d’usage pendant la Seconde Guerre mondiale."
  },
  {
    id: 8,
    type: "QRM",
    question: "Concernant Semmelweis, quelles affirmations correspondent au cours ?",
    options: [
      { text: "La maternité des sages-femmes présentait une mortalité de 15 % contre 5 % chez les médecins.", correct: false, correction: "Faux. Les taux ont été inversés dans cette proposition." },
      { text: "Le lavage des mains avec une solution chlorée a diminué la mortalité.", correct: true, correction: "Vrai. Cette intervention historique illustre le rôle majeur de l’hygiène des mains." },
      { text: "Semmelweis attribuait la différence à l’utilisation des cathéters intraveineux.", correct: false, correction: "Faux. Le support relie la différence aux dissections et à l’absence d’hygiène des mains." },
      { text: "Il était obstétricien au XIXe siècle.", correct: true, correction: "Vrai. Le cours le présente dans cette fonction et à cette époque." },
      { text: "La mortalité approchait 15 % dans la maternité des médecins.", correct: true, correction: "Vrai. Le cours oppose environ 15 % à environ 5 % dans la maternité des sages-femmes." },
    ],
    explanation: "Semmelweis a rapproché une différence de mortalité entre maternités des pratiques des médecins réalisant des dissections avant les accouchements."
  },
  {
    id: 9,
    type: "QCM",
    question: "Quelle notion désigne les mesures empêchant l’introduction de micro-organismes dans un milieu à protéger ?",
    options: [
      { text: "La certification HAS.", correct: false, correction: "Faux. Elle évalue la qualité des établissements et non cette définition technique." },
      { text: "La désinfection.", correct: false, correction: "Faux. Elle vise l’élimination ou l’inactivation sur un milieu inerte." },
      { text: "L’asepsie.", correct: true, correction: "Vrai. Elle regroupe les mesures destinées à empêcher une contamination." },
      { text: "La surveillance épidémiologique.", correct: false, correction: "Faux. Elle consiste à suivre les infections et phénomènes inhabituels." },
      { text: "L’antisepsie.", correct: false, correction: "Faux. Elle correspond ici à l’emploi d’un antiseptique sur un tissu vivant." },
    ],
    explanation: "Asepsie = prévenir l’introduction ; antisepsie = tissus vivants ; désinfection = supports inertes."
  },
  {
    id: 10,
    type: "QRM",
    question: "Concernant les définitions d’asepsie, d’antisepsie et de désinfection, quelles propositions sont exactes ?",
    options: [
      { text: "L’asepsie et l’antisepsie sont définies comme strictement synonymes.", correct: false, correction: "Faux. L’une vise à empêcher l’introduction de germes, l’autre utilise des antiseptiques sur des tissus vivants." },
      { text: "L’asepsie est particulièrement essentielle au bloc opératoire.", correct: true, correction: "Vrai. Il s’agit d’un site qui doit être protégé." },
      { text: "La désinfection cherche à éliminer ou inactiver des micro-organismes.", correct: true, correction: "Vrai. C’est sa définition donnée dans le document." },
      { text: "L’antisepsie s’applique notamment à la peau avant un geste.", correct: true, correction: "Vrai. Le cours cite les préparations alcooliques de Bétadine et de chlorhexidine." },
      { text: "La désinfection concerne exclusivement les tissus vivants.", correct: false, correction: "Faux. Dans la distinction du cours, elle concerne notamment objets et surfaces inertes." },
    ],
    explanation: "Le support distingue les actions de prévention de l’introduction de germes, le traitement des tissus vivants et celui des milieux inertes."
  },
  {
    id: 11,
    type: "QCM",
    question: "Quel acteur historique est lié au développement de l’antisepsie en chirurgie ?",
    options: [
      { text: "Alexander Fleming.", correct: false, correction: "Faux. Il est associé à la découverte de la pénicilline." },
      { text: "Ignace Semmelweis.", correct: false, correction: "Faux. Il est surtout présenté pour l’hygiène des mains en maternité." },
      { text: "Un correspondant en hygiène du CHU de Tours.", correct: false, correction: "Faux. Ce rôle est présenté dans l’organisation locale contemporaine." },
      { text: "Un responsable de l’ARS.", correct: false, correction: "Faux. Les ARS relèvent de l’organisation actuelle de santé." },
      { text: "Joseph Lister.", correct: true, correction: "Vrai. Il a contribué au développement de l’antisepsie chirurgicale." },
    ],
    explanation: "Le cours attribue à Joseph Lister l’utilisation d’antiseptiques lors des interventions chirurgicales."
  },
  {
    id: 12,
    type: "QRM",
    question: "Quelles mesures d’hygiène respiratoire sont évoquées dans le cours ?",
    options: [
      { text: "Abandonner l’hygiène des mains dès qu’un masque est porté.", correct: false, correction: "Faux. Les deux mesures restent complémentaires." },
      { text: "Porter un masque quand un professionnel présente des symptômes respiratoires.", correct: true, correction: "Vrai. C’est un réflexe explicitement recommandé." },
      { text: "Renforcer certaines mesures en période de circulation hivernale des virus.", correct: true, correction: "Vrai. Une alerte descendante peut conduire à ce renforcement." },
      { text: "Porter un masque lorsque la situation de soins l’exige.", correct: true, correction: "Vrai. Le document ne limite pas le masque aux seuls soignants symptomatiques." },
      { text: "Réserver la prévention respiratoire à la chirurgie ouverte.", correct: false, correction: "Faux. Elle concerne notamment les services recevant des patients fragiles." },
    ],
    explanation: "L’hygiène respiratoire est un réflexe de prévention associé notamment au port du masque dans les situations à risque."
  },
  {
    id: 13,
    type: "QCM",
    question: "Dans le cours, quel facteur augmente le risque infectieux des patients lors des évolutions de pratiques médicales ?",
    options: [
      { text: "L’absence de patients présentant des comorbidités.", correct: false, correction: "Faux. Le texte anticipe davantage de patients avec diabète ou obésité." },
      { text: "Une amélioration du nettoyage des locaux.", correct: false, correction: "Faux. Elle vise au contraire à réduire le risque." },
      { text: "La multiplication des dispositifs invasifs, notamment des cathéters veineux périphériques.", correct: true, correction: "Vrai. Ils constituent des portes de risque infectieux." },
      { text: "Le recours systématique à la voie orale.", correct: false, correction: "Faux. Une voie orale adaptée peut éviter une pose de cathéter." },
      { text: "La disparition de tous les dispositifs invasifs.", correct: false, correction: "Faux. Le cours décrit au contraire leur utilisation importante." },
    ],
    explanation: "L’utilisation de dispositifs invasifs tels que les cathéters veineux périphériques expose à des infections locales et parfois graves."
  },
  {
    id: 14,
    type: "QRM",
    question: "À propos des patients et des cathéters, quelles propositions sont correctes ?",
    options: [
      { text: "Le risque infectieux lié au cathéter cesse avant même sa pose.", correct: false, correction: "Faux. Il faut réfléchir à la nécessité du geste puis appliquer les mesures tout au long des soins." },
      { text: "Une infection liée à un cathéter peut être grave, jusqu’à la septicémie.", correct: true, correction: "Vrai. C’est l’exemple retenu dans le cours." },
      { text: "Un cathéter périphérique peut être associé à une infection locale.", correct: true, correction: "Vrai. Le risque est décrit explicitement." },
      { text: "Les comorbidités telles que le diabète et l’obésité sont citées comme facteurs de vulnérabilité croissants.", correct: true, correction: "Vrai. Elles apparaissent parmi les évolutions attendues des patients." },
      { text: "Un cathéter doit être posé systématiquement lorsqu’un médicament existe sous forme orale.", correct: false, correction: "Faux. Une voie orale adaptée évite précisément ce geste invasif." },
    ],
    explanation: "Le choix du dispositif et de la voie d’administration relève déjà de la prévention, avant même la réalisation du geste."
  },
  {
    id: 15,
    type: "QCM",
    question: "À quel moment débute la prévention du risque infectieux selon l’enseignante ?",
    options: [
      { text: "Uniquement lorsque l’ARS déclenche une alerte.", correct: false, correction: "Faux. Les pratiques quotidiennes de prévention ne dépendent pas de telles alertes." },
      { text: "Seulement à la sortie du patient.", correct: false, correction: "Faux. Les choix réalisés pendant les soins peuvent créer le risque." },
      { text: "Uniquement lorsqu’un patient développe une infection.", correct: false, correction: "Faux. On cherche d’abord à empêcher cette infection." },
      { text: "Dès la prescription médicale.", correct: true, correction: "Vrai. Le médecin doit évaluer la pertinence des dispositifs invasifs." },
      { text: "Uniquement au moment du bionettoyage.", correct: false, correction: "Faux. Le bionettoyage n’est qu’un élément de la prévention." },
    ],
    explanation: "La prévention commence dès la décision médicale : pertinence du dispositif invasif et choix de la voie d’administration."
  },
  {
    id: 16,
    type: "QRM",
    question: "Un traitement est possible par voie orale ou intraveineuse chez un patient pour lequel les deux options sont adaptées. Quels raisonnements suivent le support ?",
    options: [
      { text: "L’absence de cathéter supprime le risque infectieux spécifiquement lié à ce cathéter non posé.", correct: true, correction: "Vrai. La logique de réduction du risque est décrite dans le cours." },
      { text: "Le choix de la voie d’administration n’a aucun effet sur le risque infectieux.", correct: false, correction: "Faux. C’est précisément l’inverse du message de la section." },
      { text: "Le prescripteur doit réfléchir à la pertinence du dispositif.", correct: true, correction: "Vrai. La décision médicale fait partie des mesures préventives." },
      { text: "La voie intraveineuse doit toujours être préférée indépendamment du contexte.", correct: false, correction: "Faux. Le support encourage à limiter les dispositifs invasifs non nécessaires." },
      { text: "La voie orale peut éviter la pose d’un cathéter veineux.", correct: true, correction: "Vrai. C’est l’exemple central de prévention dès la prescription." },
    ],
    explanation: "L’enseignante souligne qu’éviter un cathéter inutile permet d’éviter l’exposition au risque infectieux lié au dispositif."
  },
  {
    id: 17,
    type: "QCM",
    question: "Quel organisme est mentionné au niveau national pour la surveillance, la prévention et l’information sanitaire ?",
    options: [
      { text: "Le correspondant en hygiène du service.", correct: false, correction: "Faux. Il relaie localement les procédures et recommandations." },
      { text: "Le CLIN.", correct: false, correction: "Faux. C’est une instance de niveau local au sein d’un établissement." },
      { text: "Le CPias régional.", correct: false, correction: "Faux. Il assure un appui régional et non le rôle national demandé ici." },
      { text: "Santé publique France.", correct: true, correction: "Vrai. Le cours lui attribue surveillance, prévention et diffusion d’informations." },
      { text: "L’EPRI d’un hôpital.", correct: false, correction: "Faux. Il s’agit d’une équipe d’établissement." },
    ],
    explanation: "Santé publique France est présentée comme un acteur national de la prévention et de la surveillance des risques sanitaires."
  },
  {
    id: 18,
    type: "QRM",
    question: "Au sujet de l’organisation française de la prévention du risque infectieux, quelles propositions sont vraies ?",
    options: [
      { text: "Le ministère de la Santé définit les grandes orientations.", correct: true, correction: "Vrai. Le rôle d’orientation politique est situé au niveau national." },
      { text: "Les CPias apportent un appui aux professionnels et établissements.", correct: true, correction: "Vrai. Formation, audits et recommandations figurent parmi leurs missions." },
      { text: "Le CLIN d’un hôpital définit à lui seul la politique nationale.", correct: false, correction: "Faux. Il participe à l’organisation de la prévention dans son établissement." },
      { text: "La prévention ne concerne pas la médecine de ville.", correct: false, correction: "Faux. Les professionnels exerçant en ville sont explicitement cités." },
      { text: "Les ARS participent à la mise en œuvre de la politique sanitaire en région.", correct: true, correction: "Vrai. Elles interviennent aussi sur les risques et signalements." },
    ],
    explanation: "Le cours distingue trois échelons : national (orientations et surveillance), régional (ARS, CPias) et local (établissements et professionnels)."
  },
  {
    id: 19,
    type: "QCM",
    question: "Dans la distinction des flux d’informations du cours, que désigne une « alerte descendante » ?",
    options: [
      { text: "Un soignant informant uniquement son patient de la vaccination.", correct: false, correction: "Faux. Ce n’est pas la définition de l’alerte institutionnelle." },
      { text: "Une enquête interne sans communication de résultats.", correct: false, correction: "Faux. L’alerte implique précisément une transmission d’informations." },
      { text: "Une information transmise par les autorités aux établissements de soins.", correct: true, correction: "Vrai. C’est le sens de circulation indiqué." },
      { text: "Un établissement transmettant un événement inhabituel à l’ARS.", correct: false, correction: "Faux. Ce mouvement correspond à un signalement remontant." },
      { text: "Une procédure archivée dans la GED sans lien avec un événement sanitaire.", correct: false, correction: "Faux. La GED contient des documents, pas la définition de ce flux." },
    ],
    explanation: "L’alerte descendante va des autorités et structures de prévention vers les établissements, pour permettre une adaptation des pratiques."
  },
  {
    id: 20,
    type: "QRM",
    question: "Quelles actions font partie des missions des CPias selon le cours ?",
    options: [
      { text: "Réaliser ou accompagner des évaluations et audits de pratiques.", correct: true, correction: "Vrai. Les audits sont cités parmi leurs actions." },
      { text: "Accompagner des établissements dans leurs mesures de prévention.", correct: true, correction: "Vrai. C’est une fonction d’appui au terrain." },
      { text: "Se substituer systématiquement aux médecins prescripteurs pour chaque ordonnance.", correct: false, correction: "Faux. Cette mission n’apparaît pas dans le support." },
      { text: "Diffuser des recommandations et contribuer à la surveillance des IAS.", correct: true, correction: "Vrai. Ces deux fonctions sont mentionnées." },
      { text: "Participer à la formation des professionnels.", correct: true, correction: "Vrai. Les formations sont explicitement listées." },
    ],
    explanation: "Les CPias sont les centres régionaux d’appui pour la prévention des infections associées aux soins."
  },
  {
    id: 21,
    type: "QCM",
    question: "Quel organisme intervient en région dans la gestion des risques sanitaires et des signalements ?",
    options: [
      { text: "Le REPIA uniquement.", correct: false, correction: "Faux. Le REPIA est décrit comme un réseau national." },
      { text: "Le réseau des correspondants en hygiène.", correct: false, correction: "Faux. Il s’agit de relais locaux." },
      { text: "Le CLIN seul.", correct: false, correction: "Faux. Il intervient à l’échelle d’un établissement." },
      { text: "L’ARS.", correct: true, correction: "Vrai. Il s’agit d’un acteur régional de mise en œuvre des politiques de santé." },
      { text: "Le seul service de pharmacie hospitalière.", correct: false, correction: "Faux. Ce n’est pas l’organisme régional décrit." },
    ],
    explanation: "Les agences régionales de santé interviennent notamment dans la gestion des risques sanitaires et des signalements."
  },
  {
    id: 22,
    type: "QRM",
    question: "À propos des alertes et signalements en pratique, quelles propositions correspondent au support ?",
    options: [
      { text: "Une alerte en période hivernale peut conduire à renforcer les mesures dans des services de patients fragiles.", correct: true, correction: "Vrai. C’est l’exemple des virus respiratoires." },
      { text: "La présence de symptômes respiratoires rend le port du masque inutile.", correct: false, correction: "Faux. Le cours demande au contraire de l’adopter." },
      { text: "Les établissements peuvent signaler des regroupements de cas.", correct: true, correction: "Vrai. Le cours cite les clusters pendant la pandémie de COVID-19." },
      { text: "L’information circule seulement du ministère vers les établissements.", correct: false, correction: "Faux. Le cours distingue explicitement les deux sens de circulation." },
      { text: "Au CHU de Tours, le port du masque est évoqué dans certains services dès le début de l’automne.", correct: true, correction: "Vrai. La pédiatrie est notamment citée." },
    ],
    explanation: "L’information peut descendre des autorités ou remonter des professionnels vers les autorités ; les clusters en sont un exemple."
  },
  {
    id: 23,
    type: "QCM",
    question: "Combien de CPias le schéma du cours associe-t-il à l’organisation du REPIA ?",
    options: [
      { text: "5.", correct: false, correction: "Faux. Cinq correspond au nombre de missions nationales spécialisées citées." },
      { text: "60.", correct: false, correction: "Faux. Ce chiffre renvoie aux médecins correspondants en hygiène du CHU de Tours." },
      { text: "7.", correct: false, correction: "Faux. Ce n’est pas le chiffre présenté." },
      { text: "17.", correct: true, correction: "Vrai. C’est le nombre donné dans le texte et le schéma." },
      { text: "200.", correct: false, correction: "Faux. Ce nombre renvoie aux paramédicaux correspondants en hygiène cités au CHU de Tours." },
    ],
    explanation: "Le document présente 17 CPias, relais régionaux d’un dispositif national."
  },
  {
    id: 24,
    type: "QRM",
    question: "Concernant le rôle local dans la prévention du risque infectieux, quelles propositions sont correctes ?",
    options: [
      { text: "Les EHPAD figurent parmi les structures concernées.", correct: true, correction: "Vrai. Le document les cite explicitement." },
      { text: "Une seule spécialité médicale doit connaître les mesures de prévention.", correct: false, correction: "Faux. Toutes les spécialités sont concernées." },
      { text: "Les professionnels exerçant en ville sont concernés.", correct: true, correction: "Vrai. La prévention ne se limite pas à l’hôpital." },
      { text: "L’application des mesures repose exclusivement sur une agence nationale et jamais sur les soignants.", correct: false, correction: "Faux. Chaque professionnel doit connaître les mesures adaptées à son exercice." },
      { text: "Les établissements publics et privés participent à la prévention.", correct: true, correction: "Vrai. Les deux statuts sont cités." },
    ],
    explanation: "Le niveau local comprend les établissements publics et privés, les structures médico-sociales et les professionnels de ville."
  },
  {
    id: 25,
    type: "QCM",
    question: "Quelle mission nationale du REPIA s’occupe de la prévention et de la surveillance en ville et dans le secteur médico-social ?",
    options: [
      { text: "SPIADI.", correct: false, correction: "Faux. Cette mission porte sur les infections liées aux dispositifs invasifs." },
      { text: "MATIS.", correct: false, correction: "Faux. MATIS apporte un appui transversal et pédagogique." },
      { text: "SPARES.", correct: false, correction: "Faux. SPARES travaille sur l’antibiorésistance dans les établissements de santé." },
      { text: "SPICMI.", correct: false, correction: "Faux. Cette mission concerne la chirurgie et la médecine interventionnelle." },
      { text: "PRIMO.", correct: true, correction: "Vrai. PRIMO couvre notamment le secteur de ville et le secteur médico-social." },
    ],
    explanation: "Le cours oppose PRIMO (ville et médico-social) à SPARES (établissements de santé)."
  },
  {
    id: 26,
    type: "QRM",
    question: "Parmi les associations mission–domaine du REPIA, lesquelles sont exactes ?",
    options: [
      { text: "SPIADI : infections associées aux dispositifs invasifs.", correct: true, correction: "Vrai. La surveillance des cathéters en est un exemple majeur." },
      { text: "SPARES : antibiorésistance dans les établissements de santé.", correct: true, correction: "Vrai. Cette mission cible le secteur hospitalier et les établissements de soins." },
      { text: "SPICMI : chirurgie et médecine interventionnelle.", correct: true, correction: "Vrai. Elle inclut des actes interventionnels sans chirurgie ouverte." },
      { text: "PRIMO : infections associées aux soins et antibiorésistance en ville et en médico-social.", correct: true, correction: "Vrai. C’est le champ de PRIMO dans le support." },
      { text: "MATIS : organisation du dépistage néonatal génétique.", correct: false, correction: "Faux. Le cours la décrit comme une mission transversale d’appui à la prévention des IAS." },
    ],
    explanation: "Cinq missions nationales sont distinguées : PRIMO, SPARES, SPICMI, SPIADI et MATIS."
  },
  {
    id: 27,
    type: "QCM",
    question: "Une équipe souhaite surveiller les infections liées aux cathéters dans son établissement. Quelle mission nationale est la plus directement concernée ?",
    options: [
      { text: "SPARES.", correct: false, correction: "Faux. Elle s’intéresse à la résistance bactérienne aux antibiotiques en établissement." },
      { text: "MATIS.", correct: false, correction: "Faux. Elle fournit un appui transversal, non la mission ciblée sur les cathéters." },
      { text: "SPICMI.", correct: false, correction: "Faux. Elle concerne la chirurgie et la médecine interventionnelle." },
      { text: "SPIADI.", correct: true, correction: "Vrai. Les cathéters font partie des dispositifs invasifs surveillés." },
      { text: "PRIMO.", correct: false, correction: "Faux. Cette mission cible en particulier la ville et le médico-social." },
    ],
    explanation: "SPIADI correspond à la surveillance et la prévention des infections associées aux dispositifs invasifs."
  },
  {
    id: 28,
    type: "QRM",
    question: "À propos de SPICMI, quelles propositions sont exactes ?",
    options: [
      { text: "Elle concerne aussi la médecine interventionnelle.", correct: true, correction: "Vrai. Le support précise qu’une chirurgie ouverte n’est pas toujours nécessaire." },
      { text: "Elle remplace le rôle de SPIADI pour tous les cathéters.", correct: false, correction: "Faux. SPIADI est la mission explicitement dédiée aux dispositifs invasifs." },
      { text: "Elle se limite à la vaccination des professionnels.", correct: false, correction: "Faux. Ce n’est pas sa mission." },
      { text: "Certaines interventions par voie vasculaire illustrent son champ.", correct: true, correction: "Vrai. C’est l’exemple d’acte interventionnel non ouvert donné." },
      { text: "Son champ comprend la chirurgie.", correct: true, correction: "Vrai. Le nom de la mission est associé à ce secteur dans le cours." },
    ],
    explanation: "SPICMI surveille et prévient les infections liées à la chirurgie et à la médecine interventionnelle."
  },
  {
    id: 29,
    type: "QCM",
    question: "Quelle mission nationale du REPIA propose notamment outils pédagogiques, vidéos et audits pour accompagner les pratiques ?",
    options: [
      { text: "SPIADI.", correct: false, correction: "Faux. Elle cible les dispositifs invasifs." },
      { text: "SPARES.", correct: false, correction: "Faux. Elle concerne l’antibiorésistance dans les établissements de santé." },
      { text: "SPICMI.", correct: false, correction: "Faux. Elle cible la chirurgie et la médecine interventionnelle." },
      { text: "MATIS.", correct: true, correction: "Vrai. Son action comporte outils pédagogiques, vidéos, audits et diffusion de données." },
      { text: "PRIMO.", correct: false, correction: "Faux. Son champ est la ville et le médico-social." },
    ],
    explanation: "MATIS est décrite comme une mission d’appui transversal à la prévention des IAS."
  },
  {
    id: 30,
    type: "QRM",
    question: "Quelles affirmations sur les missions du REPIA sont justes ?",
    options: [
      { text: "SPIADI est exclusivement une mission de médecine de ville.", correct: false, correction: "Faux. Elle cible les dispositifs invasifs, notamment les cathéters." },
      { text: "MATIS contribue à la diffusion d’outils de prévention.", correct: true, correction: "Vrai. Cette mission aide professionnels et établissements." },
      { text: "PRIMO et SPARES partagent un intérêt pour l’antibiorésistance dans des secteurs différents.", correct: true, correction: "Vrai. Le cours oppose ville/médico-social et établissements de santé." },
      { text: "Les cinq missions sont coordonnées localement par chaque CLIN seul.", correct: false, correction: "Faux. Le document les présente comme missions nationales spécialisées du réseau REPIA." },
      { text: "SPICMI comprend la médecine interventionnelle.", correct: true, correction: "Vrai. Le cours l’associe à la chirurgie." },
    ],
    explanation: "Les cinq missions sont complémentaires : certaines sont sectorielles, d’autres thématiques ou transversales."
  },
  {
    id: 31,
    type: "QCM",
    question: "Quel territoire porte nationalement la mission SPIADI selon le cours ?",
    options: [
      { text: "Le réseau national de vaccination antigrippale.", correct: false, correction: "Faux. Ce n’est pas l’organisme cité." },
      { text: "Le seul ministère de l’Éducation nationale.", correct: false, correction: "Faux. Il ne s’agit pas de l’organisme mentionné." },
      { text: "Le CLIN de tous les hôpitaux de France.", correct: false, correction: "Faux. Le CLIN est une structure locale." },
      { text: "Le CPias Centre-Val de Loire.", correct: true, correction: "Vrai. C’est la structure porteuse nommée pour SPIADI." },
      { text: "Le CPias d’une région non nommée dans le cours.", correct: false, correction: "Faux. La région est explicitement identifiée." },
    ],
    explanation: "Le cours précise que le CPias Centre-Val de Loire porte la mission SPIADI au niveau national."
  },
  {
    id: 32,
    type: "QRM",
    question: "Comment caractériser le REPIA et ses relais ?",
    options: [
      { text: "Le REPIA est un réseau national de prévention des infections et de l’antibiorésistance.", correct: true, correction: "Vrai. C’est son intitulé complet dans le document." },
      { text: "Les missions spécialisées contribuent à la surveillance et à la prévention.", correct: true, correction: "Vrai. Ce rôle est indiqué dans la présentation du réseau." },
      { text: "MATIS et SPIADI désignent deux indicateurs qualité de la HAS.", correct: false, correction: "Faux. Ce sont deux missions du REPIA." },
      { text: "Le REPIA est une unité de réanimation d’un hôpital particulier.", correct: false, correction: "Faux. Il s’agit d’un réseau national." },
      { text: "Il s’appuie sur des centres régionaux appelés CPias.", correct: true, correction: "Vrai. Le texte en dénombre 17." },
    ],
    explanation: "Le cours explicite : REPIA = réseau national ; CPias = centres régionaux ; cinq missions = dispositifs spécialisés."
  },
  {
    id: 33,
    type: "QCM",
    question: "Quelle mission du REPIA est centrée sur l’antibiorésistance en établissement de santé ?",
    options: [
      { text: "SPICMI.", correct: false, correction: "Faux. Elle porte sur les infections chirurgicales et interventionnelles." },
      { text: "SPARES.", correct: true, correction: "Vrai. Il surveille et prévient la résistance bactérienne aux antibiotiques en établissement." },
      { text: "MATIS.", correct: false, correction: "Faux. Elle correspond à l’appui transversal aux pratiques." },
      { text: "SPIADI.", correct: false, correction: "Faux. Elle concerne les dispositifs invasifs." },
      { text: "PRIMO.", correct: false, correction: "Faux. Ce programme concerne principalement les soins en ville et le secteur médico-social." },
    ],
    explanation: "Le couple PRIMO/SPARES est à distinguer par le secteur étudié : SPARES = établissements de santé."
  },
  {
    id: 34,
    type: "QRM",
    question: "À propos des cinq missions du REPIA, quelles propositions sont exactes ?",
    options: [
      { text: "MATIS propose notamment des vidéos pédagogiques.", correct: true, correction: "Vrai. Ces outils sont expressément cités." },
      { text: "SPARES exclut la résistance bactérienne aux antibiotiques.", correct: false, correction: "Faux. Il s’agit précisément de son thème." },
      { text: "SPIADI s’intéresse aux infections associées aux dispositifs invasifs.", correct: true, correction: "Vrai. Les cathéters sont l’un de ses champs centraux." },
      { text: "SPICMI s’adresse exclusivement aux cabinets dentaires de ville.", correct: false, correction: "Faux. Le support la définit par la chirurgie et la médecine interventionnelle." },
      { text: "PRIMO intervient en secteur médico-social.", correct: true, correction: "Vrai. Elle s’adresse également à la ville." },
    ],
    explanation: "Le cours met en avant des missions spécialisées mais complémentaires, avec un appui à la prévention et à la surveillance."
  },
  {
    id: 35,
    type: "QCM",
    question: "À quelle échelle intervient le CLIN dans le cours ?",
    options: [
      { text: "Uniquement dans le réseau national REPIA.", correct: false, correction: "Faux. Le REPIA n’est pas un CLIN local." },
      { text: "Seulement dans les services de médecine de ville.", correct: false, correction: "Faux. Le CLIN est décrit pour les établissements de santé." },
      { text: "Uniquement à l’échelle des ARS.", correct: false, correction: "Faux. Les ARS interviennent au niveau régional." },
      { text: "Au sein de l’établissement de santé.", correct: true, correction: "Vrai. Il contribue à définir et faire appliquer les mesures locales." },
      { text: "À l’échelle exclusivement mondiale.", correct: false, correction: "Faux. Il s’agit d’une instance locale." },
    ],
    explanation: "Le Comité de lutte contre les infections nosocomiales participe à la prévention au sein d’un établissement de santé."
  },
  {
    id: 36,
    type: "QRM",
    question: "Quelles tâches sont attribuées au CLIN ?",
    options: [
      { text: "Organiser des échanges et des réunions autour des procédures.", correct: true, correction: "Vrai. Le cours évoque des discussions avec les services." },
      { text: "Coordonner seul toutes les alertes sanitaires nationales.", correct: false, correction: "Faux. Il s’agit d’une structure locale." },
      { text: "Contribuer à définir des mesures de prévention.", correct: true, correction: "Vrai. Le support lui attribue cette fonction." },
      { text: "Contribuer à faire appliquer des mesures au sein de l’établissement.", correct: true, correction: "Vrai. Le lien avec les professionnels de terrain est souligné." },
      { text: "Remplacer définitivement toutes les équipes de prévention du risque infectieux.", correct: false, correction: "Faux. Le CLIN peut s’appuyer sur une organisation dédiée." },
    ],
    explanation: "Le CLIN participe à l’organisation de la prévention et travaille en lien avec les professionnels de terrain."
  },
  {
    id: 37,
    type: "QCM",
    question: "Au CHU de Tours, quel profil de professionnel est cité parmi les membres de l’EPRI ?",
    options: [
      { text: "Des praticiens hospitaliers, dont des pharmaciens.", correct: true, correction: "Vrai. Ils sont explicitement mentionnés." },
      { text: "Exclusivement des agents d’entretien.", correct: false, correction: "Faux. L’EPRI comprend plusieurs professions." },
      { text: "Uniquement des médecins libéraux extérieurs.", correct: false, correction: "Faux. Le cours décrit une équipe hospitalière pluridisciplinaire." },
      { text: "Uniquement des représentants des usagers.", correct: false, correction: "Faux. Ce n’est pas la composition décrite." },
      { text: "Exclusivement des chirurgiens.", correct: false, correction: "Faux. L’équipe est pluridisciplinaire." },
    ],
    explanation: "La composition décrite comporte des praticiens hospitaliers, notamment pharmaciens, des infirmières, une cadre et une secrétaire."
  },
  {
    id: 38,
    type: "QRM",
    question: "À propos des correspondants en hygiène, quelles propositions sont exactes ?",
    options: [
      { text: "Ils peuvent contribuer à améliorer les pratiques du service.", correct: true, correction: "Vrai. Ce rôle d’amélioration est cité." },
      { text: "Ils sont nécessairement tous microbiologistes.", correct: false, correction: "Faux. Le document évoque médecins et professionnels paramédicaux." },
      { text: "Ils peuvent participer aux réunions sur la prévention dans leur service.", correct: true, correction: "Vrai. Le cours indique cette implication." },
      { text: "Ils diffusent les procédures et recommandations auprès de leurs collègues.", correct: true, correction: "Vrai. C’est une de leurs missions." },
      { text: "Ils n’ont aucun lien avec l’équipe de prévention du risque infectieux.", correct: false, correction: "Faux. Ils en constituent précisément les relais." },
    ],
    explanation: "Les correspondants médicaux et paramédicaux constituent des relais entre EPRI et professionnels de service."
  },
  {
    id: 39,
    type: "QCM",
    question: "Quel ordre de grandeur le cours donne-t-il pour les correspondants paramédicaux en hygiène au CHU de Tours ?",
    options: [
      { text: "Environ 17.", correct: false, correction: "Faux. 17 correspond au nombre de CPias cité ailleurs." },
      { text: "Environ 60.", correct: false, correction: "Faux. C’est l’ordre de grandeur des correspondants médecins." },
      { text: "Environ 2 000.", correct: false, correction: "Faux. Ce nombre n’est pas celui du support." },
      { text: "Environ 200.", correct: true, correction: "Vrai. C’est le nombre donné pour les correspondants paramédicaux." },
      { text: "Environ 5.", correct: false, correction: "Faux. Cela ne correspond pas au réseau décrit." },
    ],
    explanation: "La professeure cite environ 60 médecins et 200 paramédicaux correspondants en hygiène."
  },
  {
    id: 40,
    type: "QRM",
    question: "Quels professionnels ou fonctions sont associés à l’EPRI du CHU de Tours dans le support ?",
    options: [
      { text: "Une cadre et une secrétaire.", correct: true, correction: "Vrai. Ces deux fonctions figurent dans la composition décrite." },
      { text: "Des infirmières.", correct: true, correction: "Vrai. Elles font partie des membres listés." },
      { text: "Des praticiens hospitaliers, notamment des pharmaciens.", correct: true, correction: "Vrai. Ce sont des membres nommés de l’équipe." },
      { text: "Une équipe obligatoirement composée uniquement de réanimateurs.", correct: false, correction: "Faux. Seule la fonction du président du CLIN est associée à un médecin réanimateur dans le cours." },
      { text: "Des échanges avec les microbiologistes.", correct: true, correction: "Vrai. Ils apportent des informations essentielles sur les germes impliqués." },
    ],
    explanation: "La composition citée comprend professions médicales, paramédicales et administratives, avec une collaboration microbiologique."
  },
  {
    id: 41,
    type: "QCM",
    question: "Quel est l’un des deux objectifs majeurs des précautions standard ?",
    options: [
      { text: "Réserver l’hygiène aux seuls porteurs connus de bactéries résistantes.", correct: false, correction: "Faux. Les précautions standard ont une portée plus large." },
      { text: "Éviter toute prescription médicale.", correct: false, correction: "Faux. Elles ne remplacent pas les traitements." },
      { text: "Limiter les précautions aux seuls actes chirurgicaux.", correct: false, correction: "Faux. Elles concernent les situations de soins adaptées." },
      { text: "Protéger les professionnels contre les accidents d’exposition au sang.", correct: true, correction: "Vrai. Il s’agit d’un objectif explicitement cité." },
      { text: "Supprimer toutes les mesures de prévention environnementales.", correct: false, correction: "Faux. Le cours consacre au contraire une mission à l’environnement." },
    ],
    explanation: "Les précautions standard évitent la transmission croisée et protègent les soignants contre les AES."
  },
  {
    id: 42,
    type: "QRM",
    question: "Concernant les précautions standard, quelles propositions sont justes ?",
    options: [
      { text: "Elles concernent uniquement les patients ayant un VIH confirmé.", correct: false, correction: "Faux. Elles doivent être appliquées dans les situations de soins appropriées, sans cette restriction." },
      { text: "Elles protègent les soignants des AES.", correct: true, correction: "Vrai. C’est le second objectif mentionné." },
      { text: "Elles étaient auparavant appelées « précautions universelles ».", correct: true, correction: "Vrai. Le document rappelle cette terminologie." },
      { text: "Elles ont été créées parce que les cathéters n’existent plus.", correct: false, correction: "Faux. Le support évoque leur apparition dans le contexte de l’épidémie de VIH." },
      { text: "Elles visent à réduire les transmissions croisées entre patients et professionnels.", correct: true, correction: "Vrai. C’est le premier objectif mentionné." },
    ],
    explanation: "Le support les relie à la transmission croisée et à la prévention des AES, et rappelle leur ancienne appellation."
  },
  {
    id: 43,
    type: "QCM",
    question: "Dans quel contexte historique les anciennes « précautions universelles » ont-elles été développées d’après le cours ?",
    options: [
      { text: "La construction du nouvel hôpital Trousseau.", correct: false, correction: "Faux. Ce n’est pas leur origine historique." },
      { text: "La découverte de la pénicilline en 1928.", correct: false, correction: "Faux. Ce repère historique correspond à Fleming." },
      { text: "L’instauration des CPias en 2026.", correct: false, correction: "Faux. Ce fait n’est pas décrit comme l’origine des précautions universelles." },
      { text: "L’épidémie de VIH.", correct: true, correction: "Vrai. La protection des professionnels contre les expositions au sang est le contexte cité." },
      { text: "La seule mise en place d’un indicateur VAG.", correct: false, correction: "Faux. Cet indicateur concerne la vaccination antigrippale." },
    ],
    explanation: "Le cours rattache les précautions universelles à l’épidémie de VIH et à la protection contre les expositions au sang."
  },
  {
    id: 44,
    type: "QRM",
    question: "Quelles affirmations correspondent à la mission d’élaboration de procédures de l’EPRI ?",
    options: [
      { text: "Des procédures écrites cherchent à harmoniser les pratiques.", correct: true, correction: "Vrai. Elles contribuent à la qualité et à la sécurité des soins." },
      { text: "Les procédures ne servent qu’à archiver les incidents anciens.", correct: false, correction: "Faux. Leur but est surtout de guider des pratiques de qualité." },
      { text: "La pose d’un cathéter périphérique peut faire l’objet d’une procédure.", correct: true, correction: "Vrai. Elle fait partie des exemples nommés." },
      { text: "Une procédure de ponction d’ascite est citée comme exemple.", correct: true, correction: "Vrai. Le cours la situe dans l’apprentissage de gestes en gastro-entérologie." },
      { text: "Les procédures n’intéressent jamais les check-lists opératoires.", correct: false, correction: "Faux. Celles-ci sont justement évoquées parmi les outils de qualité." },
    ],
    explanation: "Le référentiel hygiéniste cité dans le support date de 2018 et décrit neuf missions, dont l’élaboration de procédures."
  },
  {
    id: 45,
    type: "QCM",
    question: "Combien de missions de l’EPRI sont décrites dans le référentiel hygiéniste cité ?",
    options: [
      { text: "9.", correct: true, correction: "Vrai. C’est le nombre donné dans la section des missions de l’EPRI." },
      { text: "5.", correct: false, correction: "Faux. Cinq correspond au nombre de missions spécialisées du REPIA." },
      { text: "17.", correct: false, correction: "Faux. Le cours cite 17 CPias et non 17 missions EPRI." },
      { text: "7.", correct: false, correction: "Faux. Ce nombre ne correspond pas au référentiel présenté." },
      { text: "3.", correct: false, correction: "Faux. Trois correspond ailleurs au nombre des piliers de la lutte contre les maladies infectieuses." },
    ],
    explanation: "Le cours indique un référentiel de 2018 décrivant neuf missions des équipes de prévention du risque infectieux."
  },
  {
    id: 46,
    type: "QRM",
    question: "Concernant la gestion des épidémies par l’EPRI, quelles affirmations sont exactes ?",
    options: [
      { text: "L’origine nosocomiale n’a aucun intérêt dans ce suivi.", correct: false, correction: "Faux. Le cours indique qu’il faut notamment chercher si les cas sont nosocomiaux." },
      { text: "L’EPRI attend systématiquement que l’épidémie soit terminée avant d’agir.", correct: false, correction: "Faux. Elle doit au contraire prévenir et stopper l’épidémie." },
      { text: "La recherche de débuts d’épidémie est présentée comme quotidienne.", correct: true, correction: "Vrai. La vigilance régulière fait partie du travail décrit." },
      { text: "Des alertes automatiques avec la virologie ont été utilisées au début du COVID-19.", correct: true, correction: "Vrai. L’exemple porte sur le suivi des patients et de leur service." },
      { text: "Détecter rapidement un phénomène inhabituel permet d’intervenir plus efficacement.", correct: true, correction: "Vrai. Le support insiste sur la rapidité." },
    ],
    explanation: "La détection précoce permet d’avertir les équipes et d’installer rapidement des mesures pour arrêter la diffusion."
  },
  {
    id: 47,
    type: "QCM",
    question: "Quel est l’objectif principal d’un audit de pratiques d’hygiène des mains par l’EPRI ?",
    options: [
      { text: "Sanctionner chaque personne sans analyser les pratiques.", correct: false, correction: "Faux. L’objectif décrit est l’évaluation et l’amélioration." },
      { text: "Mesurer la conformité des pratiques pour corriger ce qui ne l’est pas.", correct: true, correction: "Vrai. Le cours évoque des audits annuels d’hygiène des mains dans deux services." },
      { text: "Remplacer définitivement les formations.", correct: false, correction: "Faux. Les deux sont des missions distinctes de l’EPRI." },
      { text: "Ne surveiller que les dépenses d’antibiotiques.", correct: false, correction: "Faux. Ce n’est pas l’objet de cet audit de pratique." },
      { text: "Conclure automatiquement à une infection nosocomiale.", correct: false, correction: "Faux. L’audit porte sur les pratiques, pas sur un diagnostic individuel." },
    ],
    explanation: "Les audits évaluent la conformité des pratiques et doivent permettre de corriger les écarts observés."
  },
  {
    id: 48,
    type: "QRM",
    question: "Quels éléments relèvent de la surveillance ou de la gestion exercée par l’EPRI ?",
    options: [
      { text: "L’absence complète de liaison avec les services cliniques.", correct: false, correction: "Faux. L’EPRI travaille au contraire avec les professionnels de terrain." },
      { text: "L’évaluation des pratiques par des audits.", correct: true, correction: "Vrai. L’hygiène des mains est l’exemple donné." },
      { text: "Une surveillance épidémiologique des infections du site opératoire.", correct: true, correction: "Vrai. C’est un exemple explicite." },
      { text: "Le signalement d’événements infectieux inhabituels.", correct: true, correction: "Vrai. Cette tâche figure parmi les neuf missions." },
      { text: "La recherche de situations inhabituelles avec les laboratoires.", correct: true, correction: "Vrai. L’exemple COVID-19 s’appuie sur la virologie." },
    ],
    explanation: "Le cours évoque la veille quotidienne des clusters, la surveillance des sites opératoires, les signalements et les audits."
  },
  {
    id: 49,
    type: "QCM",
    question: "Quel micro-organisme de l’eau chaude sanitaire est explicitement recherché en milieu hospitalier ?",
    options: [
      { text: "Aspergillus des poussières.", correct: false, correction: "Faux. L’aspergille est évoqué principalement pour les spores dispersées dans l’air lors des travaux." },
      { text: "Le virus de la grippe.", correct: false, correction: "Faux. Le cours ne le présente pas comme le risque microbien de l’eau chaude." },
      { text: "Le VIH.", correct: false, correction: "Faux. Le support ne le relie pas à l’eau chaude sanitaire." },
      { text: "Le seul staphylocoque doré.", correct: false, correction: "Faux. Il n’est pas nommé comme germe de surveillance de cette eau." },
      { text: "La légionelle.", correct: true, correction: "Vrai. Elle est associée à l’eau chaude sanitaire." },
    ],
    explanation: "La légionelle est recherchée sur des points critiques des réseaux d’eau chaude sanitaire ; l’inhalation d’aérosols contaminés est décrite."
  },
  {
    id: 50,
    type: "QRM",
    question: "À propos des légionelles et de leur transmission, quelles propositions suivent le cours ?",
    options: [
      { text: "Un prélèvement d’eau du lieu de soin peut être demandé si une origine nosocomiale est suspectée.", correct: true, correction: "Vrai. Le cours évoque le prélèvement d’eau de douche ou de lavabo." },
      { text: "Des points critiques de l’eau chaude sanitaire sont échantillonnés annuellement.", correct: true, correction: "Vrai. C’est l’organisation de surveillance évoquée." },
      { text: "La douche peut générer des microgouttelettes inhalées.", correct: true, correction: "Vrai. C’est la situation typique décrite." },
      { text: "Toute légionellose chez un hospitalisé est automatiquement communautaire.", correct: false, correction: "Faux. L’origine nosocomiale doit être recherchée." },
      { text: "Une légionellose nosocomiale nécessite obligatoirement que le patient se soit douché.", correct: false, correction: "Faux. L’exemple du réservoir d’appareil respiratoire rempli à l’eau du robinet montre un autre mode d’exposition." },
    ],
    explanation: "Le support explique le risque d’inhalation de microgouttelettes contaminées lors de l’utilisation d’eau, notamment chaude."
  },
  {
    id: 51,
    type: "QCM",
    question: "Dans l’exemple de légionellose hospitalière présenté, quelle pratique a contaminé un patient qui ne se douchait pas ?",
    options: [
      { text: "Le remplissage du réservoir d’un appareil respiratoire avec de l’eau du robinet.", correct: true, correction: "Vrai. L’eau du lavabo contenait la même légionelle que celle du patient." },
      { text: "Un cathéter veineux resté en place.", correct: false, correction: "Faux. La contamination décrite concernait de l’eau et un appareil respiratoire." },
      { text: "La consommation d’un aliment avarié.", correct: false, correction: "Faux. Cet élément n’est pas en cause dans l’exemple." },
      { text: "L’absence de vaccination contre la grippe.", correct: false, correction: "Faux. Il s’agissait d’une légionellose." },
      { text: "Un changement de pansement sans hygiène des mains.", correct: false, correction: "Faux. Cet exemple apparaît dans une autre section du cours." },
    ],
    explanation: "Le patient utilisait un appareil respiratoire personnel avec un réservoir rempli d’eau du robinet, source de contamination décrite."
  },
  {
    id: 52,
    type: "QRM",
    question: "Concernant Pseudomonas aeruginosa, quelles propositions sont exactes dans le cadre du cours ?",
    options: [
      { text: "Il est cité comme risque microbien associé à l’eau froide.", correct: true, correction: "Vrai. C’est la réponse donnée par l’enseignante." },
      { text: "Il peut coloniser des escarres ou être associé à des infections cutanées.", correct: true, correction: "Vrai. Ces localisations sont explicitement mentionnées." },
      { text: "Des filtres peuvent être installés sur les robinets de réanimation.", correct: true, correction: "Vrai. Ils visent à limiter son exposition chez des patients vulnérables." },
      { text: "Le support l’associe exclusivement à l’eau chaude sanitaire.", correct: false, correction: "Faux. L’eau chaude est associée aux légionelles." },
      { text: "Il peut provoquer des infections pulmonaires chez des patients de réanimation.", correct: true, correction: "Vrai. Le cours l’illustre comme pathogène opportuniste dans ce terrain." },
    ],
    explanation: "Le support associe Pseudomonas aeruginosa à l’eau froide et au risque chez les patients fragiles, notamment en réanimation."
  },
  {
    id: 53,
    type: "QCM",
    question: "Quel agent infectieux est particulièrement redouté dans les poussières de travaux près de patients en aplasie ?",
    options: [
      { text: "Aspergillus.", correct: true, correction: "Vrai. Ses spores peuvent provoquer une aspergillose grave sur terrain d’aplasie." },
      { text: "La légionelle de l’eau chaude seule.", correct: false, correction: "Faux. Le problème des poussières est associé ici à Aspergillus." },
      { text: "Le prion de Creutzfeldt-Jakob.", correct: false, correction: "Faux. Il n’est pas le risque environnemental présenté dans ce cours." },
      { text: "Le virus de la grippe contenu dans les poussières de chantier.", correct: false, correction: "Faux. Ce mécanisme n’est pas décrit." },
      { text: "Pseudomonas aeruginosa de l’eau froide seul.", correct: false, correction: "Faux. Le cours l’associe aux risques liés à l’eau et aux patients fragiles." },
    ],
    explanation: "Les travaux peuvent libérer des spores d’Aspergillus, inhalées par des patients sans défenses immunitaires suffisantes."
  },
  {
    id: 54,
    type: "QRM",
    question: "À propos de la surveillance microbiologique de l’air et des surfaces, quelles propositions sont correctes ?",
    options: [
      { text: "Les centrales de traitement d’air cherchent à diminuer le nombre de particules.", correct: true, correction: "Vrai. C’est leur intérêt décrit dans le document." },
      { text: "Les contrôles environnementaux ne sont jamais réalisés au bloc opératoire.", correct: false, correction: "Faux. Le bloc est explicitement cité." },
      { text: "Les services d’hématothérapie cellulaire accueillant des patients en aplasie peuvent nécessiter des contrôles d’air.", correct: true, correction: "Vrai. Ce sont des secteurs particulièrement à risque." },
      { text: "La seule méthode de surveillance est le dosage des antibiotiques sanguins.", correct: false, correction: "Faux. Le cours parle de prélèvements microbiologiques d’air et de surfaces." },
      { text: "Des prélèvements sur les surfaces au bloc permettent d’évaluer le bionettoyage.", correct: true, correction: "Vrai. Le support évoque des prélèvements sur le bras technique." },
    ],
    explanation: "Le support cible notamment les services de patients en aplasie et les blocs opératoires, qui disposent de traitements d’air et de prélèvements environnementaux."
  },
  {
    id: 55,
    type: "QCM",
    question: "Quelle situation justifie, dans le cours, l’arrosage d’un chantier hospitalier ?",
    options: [
      { text: "Mesurer directement l’indicateur ICSHA.", correct: false, correction: "Faux. Cet indicateur concerne la consommation de produits hydroalcooliques." },
      { text: "Limiter la remise en suspension des poussières et spores à risque pour les patients vulnérables.", correct: true, correction: "Vrai. C’est l’exemple du chantier de Trousseau." },
      { text: "Remplacer les centrales de traitement d’air de façon définitive.", correct: false, correction: "Faux. L’arrosage du chantier est une mesure de prévention spécifique aux travaux." },
      { text: "Accélérer la multiplication des spores d’Aspergillus.", correct: false, correction: "Faux. L’objectif est au contraire de réduire leur dispersion." },
      { text: "Favoriser la circulation des aérosols contaminés.", correct: false, correction: "Faux. La mesure cherche à empêcher l’envol des poussières." },
    ],
    explanation: "Le chantier du nouvel hôpital à Trousseau a été arrosé pour maintenir les poussières au sol et protéger les patients fragiles."
  },
  {
    id: 56,
    type: "QRM",
    question: "Quels éléments du cours expliquent la gravité possible d’une aspergillose chez un patient en aplasie ?",
    options: [
      { text: "Le champignon ne peut pas atteindre un patient par inhalation.", correct: false, correction: "Faux. C’est précisément le mode d’exposition décrit." },
      { text: "Les patients transplantés, dont les transplantés cardiaques, sont aussi considérés à risque.", correct: true, correction: "Vrai. Le cours les mentionne explicitement." },
      { text: "L’aplasie est associée à une diminution majeure des défenses immunitaires.", correct: true, correction: "Vrai. Le document décrit des patients très vulnérables." },
      { text: "Des emboles vasculaires et abcès cérébraux sont évoqués.", correct: true, correction: "Vrai. Le support les cite parmi les complications graves." },
      { text: "Des spores d’Aspergillus peuvent être dispersées par les travaux.", correct: true, correction: "Vrai. La poussière constitue le vecteur environnemental mis en avant." },
    ],
    explanation: "Les spores inhalées peuvent provoquer une atteinte invasive, avec notamment des emboles vasculaires et des abcès cérébraux dans l’exemple du cours."
  },
  {
    id: 57,
    type: "QCM",
    question: "Quel aménagement d’un nouveau secteur de réanimation est cité par l’intervenante ?",
    options: [
      { text: "Supprimer toutes les possibilités de confinement des chambres.", correct: false, correction: "Faux. Le but présenté est de confiner certains patients." },
      { text: "Ouvrir toutes les chambres directement sur le chantier.", correct: false, correction: "Faux. Ce n’est pas l’aménagement décrit." },
      { text: "Prévoir des chambres en pression négative.", correct: true, correction: "Vrai. C’est l’exemple explicitement retenu." },
      { text: "Créer uniquement des chambres sans ventilation.", correct: false, correction: "Faux. Le support mentionne un aménagement de pression." },
      { text: "Renoncer à tout conseil des spécialistes de la prévention.", correct: false, correction: "Faux. Les équipes sont justement consultées pour la conception des locaux." },
    ],
    explanation: "Le projet d’établissement à Trousseau comporte l’idée de chambres en pression négative pour permettre un isolement et un confinement."
  },
  {
    id: 58,
    type: "QRM",
    question: "Dans quels projets l’EPRI peut-elle conseiller les décideurs, selon le cours ?",
    options: [
      { text: "Des locaux d’endoscopie.", correct: true, correction: "Vrai. Ils figurent parmi les exemples." },
      { text: "Un nouveau bloc opératoire.", correct: true, correction: "Vrai. C’est une zone citée dans le support." },
      { text: "Des travaux de cloisons ou de faux plafonds près de patients fragiles.", correct: true, correction: "Vrai. Le cours insiste sur le risque des poussières générées." },
      { text: "Un secteur de réanimation.", correct: true, correction: "Vrai. Le cours cite l’intérêt de chambres en pression négative." },
      { text: "Uniquement des locaux sans aucun contact avec les patients.", correct: false, correction: "Faux. Les exemples sont précisément des secteurs de soins." },
    ],
    explanation: "La construction des locaux de soins doit intégrer les risques infectieux dès la conception, et les travaux modestes peuvent également créer des poussières à risque."
  },
  {
    id: 59,
    type: "QCM",
    question: "Quel est l’intérêt d’une centrale de traitement d’air dans les secteurs protégés ?",
    options: [
      { text: "Éliminer le besoin de surveillance microbiologique à vie.", correct: false, correction: "Faux. Des contrôles de l’air sont tout de même réalisés." },
      { text: "Administrer des antibiotiques aux patients par voie aérienne.", correct: false, correction: "Faux. Aucun objectif de ce type n’est décrit." },
      { text: "Remplacer systématiquement l’hygiène des mains.", correct: false, correction: "Faux. Les mesures restent complémentaires." },
      { text: "Augmenter volontairement la concentration des poussières.", correct: false, correction: "Faux. Le cours vise leur réduction." },
      { text: "Diminuer le nombre de particules en suspension.", correct: true, correction: "Vrai. C’est la fonction indiquée." },
    ],
    explanation: "Dans le cours, ces centrales participent à la diminution du nombre de particules dans des secteurs sensibles."
  },
  {
    id: 60,
    type: "QRM",
    question: "À propos des risques environnementaux suivis par l’EPRI, quelles propositions sont exactes ?",
    options: [
      { text: "Les microbiologistes participent à l’identification des micro-organismes.", correct: true, correction: "Vrai. Le cours insiste sur leur rôle auprès de l’équipe de prévention." },
      { text: "Les spores d’Aspergillus peuvent être remises en suspension lors de travaux.", correct: true, correction: "Vrai. Les patients en aplasie sont particulièrement menacés." },
      { text: "Pseudomonas aeruginosa est cité comme risque lié à l’eau froide.", correct: true, correction: "Vrai. La réanimation est un exemple de secteur vulnérable." },
      { text: "La légionelle est recherchée dans l’eau chaude sanitaire.", correct: true, correction: "Vrai. Des prélèvements sur points critiques sont décrits." },
      { text: "Les surfaces de blocs opératoires ne sont jamais contrôlées.", correct: false, correction: "Faux. Des prélèvements de surface sont évoqués." },
    ],
    explanation: "Le support distingue eau chaude–légionelle, eau froide–Pseudomonas, et air/poussières–Aspergillus chez des patients à risque."
  },
  {
    id: 61,
    type: "QCM",
    question: "Quelle surveillance est donnée comme exemple d’activité épidémiologique annuelle de l’EPRI ?",
    options: [
      { text: "Le contrôle des vaccins pédiatriques de toute la région.", correct: false, correction: "Faux. Ce n’est pas la mission de surveillance décrite." },
      { text: "Le dépistage scolaire national de la grippe.", correct: false, correction: "Faux. Ce n’est pas l’activité citée." },
      { text: "La surveillance exclusive des diarrhées communautaires.", correct: false, correction: "Faux. Le texte retient notamment les infections du site opératoire." },
      { text: "Le suivi des infections du site opératoire.", correct: true, correction: "Vrai. L’exemple concerne notamment des signalements inhabituels après chirurgie de hernie discale." },
      { text: "La seule surveillance des accidents de la route.", correct: false, correction: "Faux. Ces décès ne sont qu’un point de comparaison de santé publique." },
    ],
    explanation: "Le cours cite notamment l’analyse annuelle des infections du site opératoire, avec un exemple en neurochirurgie."
  },
  {
    id: 62,
    type: "QRM",
    question: "Dans l’exemple de neurochirurgie, quelles affirmations suivent l’explication de la professeure ?",
    options: [
      { text: "La surveillance vise notamment à améliorer les pratiques.", correct: true, correction: "Vrai. Le texte la décrit comme une activité non urgente d’évaluation." },
      { text: "Des infections inhabituelles après chirurgie de hernie discale ont été signalées.", correct: true, correction: "Vrai. C’est le point de départ de la surveillance décrite." },
      { text: "La question d’une antibioprophylaxie a été réexaminée.", correct: true, correction: "Vrai. Le service envisage de réintroduire une prophylaxie dans le contexte décrit." },
      { text: "Aucun signalement n’a motivé cette démarche.", correct: false, correction: "Faux. Les événements postopératoires inhabituels en sont le déclencheur." },
      { text: "Le cours indique que toute chirurgie doit recevoir les mêmes antibiotiques indéfiniment.", correct: false, correction: "Faux. L’exemple met en avant une décision discutée dans un contexte précis." },
    ],
    explanation: "Les signalements d’infections postopératoires ont conduit à revoir la stratégie d’antibioprophylaxie malgré des recommandations antérieures pour certaines interventions sans matériel."
  },
  {
    id: 63,
    type: "QCM",
    question: "À quoi sert la gestion électronique des documents (GED) dans le domaine de l’hygiène hospitalière ?",
    options: [
      { text: "À recenser uniquement les patients atteints de grippe.", correct: false, correction: "Faux. Son contenu est beaucoup plus large." },
      { text: "À remplacer toutes les prescriptions médicales par des décisions automatiques.", correct: false, correction: "Faux. Ce n’est pas la fonction donnée dans le support." },
      { text: "À supprimer les procédures écrites.", correct: false, correction: "Faux. La GED les rassemble au contraire." },
      { text: "À délivrer à elle seule la certification HAS.", correct: false, correction: "Faux. La certification est une démarche d’évaluation distincte." },
      { text: "À accéder aux procédures et documents de prévention du risque infectieux.", correct: true, correction: "Vrai. Le support en cite les catégories et leur organisation." },
    ],
    explanation: "La GED permet aux professionnels de retrouver les procédures organisées par thème, notamment précautions standard, AES et bionettoyage."
  },
  {
    id: 64,
    type: "QRM",
    question: "Quelles catégories de procédures sont citées dans la GED hospitalière du cours ?",
    options: [
      { text: "Les précautions standard.", correct: true, correction: "Vrai. Elles sont présentées comme la première procédure affichée." },
      { text: "Uniquement les plannings de congés et fiches de paie.", correct: false, correction: "Faux. La GED décrite regroupe les procédures de prévention et d’hygiène." },
      { text: "Le bionettoyage et les précautions complémentaires.", correct: true, correction: "Vrai. Ces rubriques figurent dans la liste." },
      { text: "Des précautions protectrices pour les patients en aplasie.", correct: true, correction: "Vrai. Cette catégorie est citée comme mesure particulière." },
      { text: "Les accidents d’exposition au sang.", correct: true, correction: "Vrai. La procédure AES est mise en avant comme un risque important." },
    ],
    explanation: "Le support énumère notamment précautions standard, AES, environnement, matériel, soins, bionettoyage, précautions complémentaires et protectrices."
  },
  {
    id: 65,
    type: "QCM",
    question: "Quelle situation correspond à un événement devant faire l’objet d’un signalement selon le cours ?",
    options: [
      { text: "La réalisation conforme d’une friction hydroalcoolique.", correct: false, correction: "Faux. Il s’agit d’une mesure de prévention et non d’un événement inhabituel." },
      { text: "Une réunion du CLIN sans cas infectieux particulier.", correct: false, correction: "Faux. Ce n’est pas un événement infectieux à signaler." },
      { text: "Une légionellose nosocomiale ayant entraîné un décès.", correct: true, correction: "Vrai. C’est l’exemple typique cité, avec déclaration obligatoire de la légionellose." },
      { text: "Une simple absence de symptômes dans toute une unité.", correct: false, correction: "Faux. Le support vise des événements infectieux inhabituels." },
      { text: "Chaque administration orale d’un médicament sans incident.", correct: false, correction: "Faux. Cet acte ne constitue pas en soi le signalement décrit." },
    ],
    explanation: "Une infection associée aux soins peut justifier un signalement si elle est inhabituelle par son germe, sa résistance, sa localisation, son caractère épidémique ou ses conséquences."
  },
  {
    id: 66,
    type: "QRM",
    question: "Concernant les événements infectieux inhabituels, quelles propositions sont exactes ?",
    options: [
      { text: "Une localisation inhabituelle peut motiver un signalement.", correct: true, correction: "Vrai. Le document mentionne ce critère." },
      { text: "Une légionellose n’est jamais à déclaration obligatoire.", correct: false, correction: "Faux. Le cours la présente explicitement comme une infection à déclaration obligatoire." },
      { text: "Une résistance microbienne inhabituelle peut motiver un signalement.", correct: true, correction: "Vrai. La résistance du germe est un des critères cités." },
      { text: "Une épidémie ou un décès peut rendre le signalement nécessaire.", correct: true, correction: "Vrai. Ces événements figurent dans la liste donnée." },
      { text: "Une légionellose nosocomiale mortelle est donnée comme exemple de signalement vers SPF, ARS et CPias.", correct: true, correction: "Vrai. Ce sont les destinataires cités dans la section « Les signalements »." },
    ],
    explanation: "Le cours mentionne le signalement à Santé publique France, à l’ARS et au CPias dans l’exemple de la légionellose nosocomiale avec décès."
  },
  {
    id: 67,
    type: "QCM",
    question: "Que mesure l’indicateur ICSHA présenté par la HAS dans le cours ?",
    options: [
      { text: "La consommation de solutions hydroalcooliques rapportée aux frictions attendues.", correct: true, correction: "Vrai. Cet indicateur vise à promouvoir l’hygiène des mains." },
      { text: "La bonne prescription des précautions complémentaires contact.", correct: false, correction: "Faux. C’est l’indicateur PCC." },
      { text: "Le nombre de cas d’aspergillose post-travaux uniquement.", correct: false, correction: "Faux. Ce n’est pas l’objet d’ICSHA." },
      { text: "La durée de l’antibiothérapie des infections respiratoires.", correct: false, correction: "Faux. C’est l’indicateur ATBIR." },
      { text: "Le taux de vaccination antigrippale des soignants.", correct: false, correction: "Faux. C’est l’indicateur VAG." },
    ],
    explanation: "ICSHA signifie Indicateur de Consommation des Solutions Hydro-Alcooliques : c’est une mesure indirecte des pratiques d’hygiène des mains."
  },
  {
    id: 68,
    type: "QRM",
    question: "À propos de l’ICSHA, quelles propositions sont exactes selon les chiffres du support ?",
    options: [
      { text: "ICSHA mesure directement chaque friction réalisée par chaque soignant.", correct: false, correction: "Faux. Le document indique un calcul à partir de volumes consommés." },
      { text: "Les résultats peuvent être consultés sur Qualiscope.", correct: true, correction: "Vrai. C’est le site mentionné pour les usagers." },
      { text: "En médecine, l’exemple est d’environ 10 frictions par jour et par patient.", correct: true, correction: "Vrai. Le cours donne ce comparatif avec la réanimation." },
      { text: "En réanimation, l’exemple est de 40 frictions par jour et par patient.", correct: true, correction: "Vrai. Le nombre national cité est élevé pour ce secteur." },
      { text: "L’objectif indiqué est de 80 %.", correct: true, correction: "Vrai. C’est le seuil à atteindre mentionné." },
    ],
    explanation: "Le cours présente une cible de 80 %, avec des attentes de frictions qui varient par spécialité."
  },
  {
    id: 69,
    type: "QCM",
    question: "Quel aspect particulier l’indicateur PCC cherche-t-il à vérifier ?",
    options: [
      { text: "Le dosage des bactéries dans l’eau chaude sanitaire.", correct: false, correction: "Faux. Il s’agit d’une surveillance environnementale." },
      { text: "La durée de tous les traitements anticancéreux.", correct: false, correction: "Faux. Cette évaluation n’est pas décrite." },
      { text: "La prescription des PCC et l’information du patient concerné.", correct: true, correction: "Vrai. Le support insiste sur ces deux points." },
      { text: "Le volume de gel hydroalcoolique consommé.", correct: false, correction: "Faux. Cela correspond à ICSHA." },
      { text: "Le nombre de vaccins antigrippaux reçus par les visiteurs.", correct: false, correction: "Faux. C’est hors du champ de l’indicateur." },
    ],
    explanation: "PCC correspond aux bonnes pratiques de précautions complémentaires contact, avec intérêt pour la prescription et l’information du patient."
  },
  {
    id: 70,
    type: "QRM",
    question: "À propos de l’indicateur PCC, quelles propositions sont exactes ?",
    options: [
      { text: "Les dossiers peuvent être échantillonnés pour vérifier la prescription des PCC.", correct: true, correction: "Vrai. C’est la méthode d’évaluation décrite." },
      { text: "L’information du patient est vérifiée.", correct: true, correction: "Vrai. L’enseignante insiste sur l’importance de sa traçabilité." },
      { text: "La moyenne nationale rapportée est de 37 %.", correct: true, correction: "Vrai. C’est le chiffre du cours." },
      { text: "Le PCC correspond au taux de vaccination antigrippale.", correct: false, correction: "Faux. Cet indicateur est VAG." },
      { text: "L’indicateur ne concerne jamais les patients porteurs de BMR.", correct: false, correction: "Faux. Ce sont justement des situations étudiées." },
    ],
    explanation: "Les PCC concernent notamment certains patients porteurs de BMR ou de Clostridium difficile ; le support indique une moyenne nationale de 37 %."
  },
  {
    id: 71,
    type: "QCM",
    question: "Quel est le critère de durée principalement évalué par l’indicateur ATBIR ?",
    options: [
      { text: "Une antibiothérapie jamais réévaluée.", correct: false, correction: "Faux. La justification de la durée compte dans l’indicateur." },
      { text: "Une durée ≤ 7 jours, ou > 7 jours lorsqu’une justification existe.", correct: true, correction: "Vrai. C’est la règle de conformité indiquée." },
      { text: "La prise d’antibiotiques uniquement par voie intraveineuse.", correct: false, correction: "Faux. ATBIR porte ici sur la pertinence de la durée." },
      { text: "Une antibiothérapie obligatoirement supérieure à 14 jours.", correct: false, correction: "Faux. Le cours valorise des durées plus courtes ou des prolongations justifiées." },
      { text: "Une durée ≤ 48 heures pour toute infection respiratoire.", correct: false, correction: "Faux. Ce n’est pas le seuil du support." },
    ],
    explanation: "ATBIR évalue la pertinence de la durée de l’antibiothérapie des infections respiratoires basses : ≤ 7 jours ou > 7 jours si justifié."
  },
  {
    id: 72,
    type: "QRM",
    question: "Au sujet d’ATBIR, quelles propositions correspondent au cours ?",
    options: [
      { text: "Le cours rapporte une moyenne nationale de 37 % pour ATBIR.", correct: false, correction: "Faux. 37 % correspond aux PCC, pas à ATBIR." },
      { text: "La moyenne nationale indiquée pour ATBIR est de 84 %.", correct: true, correction: "Vrai. L’objectif mentionné est de 80 %." },
      { text: "Une durée de plus de 7 jours peut être conforme si elle est justifiée.", correct: true, correction: "Vrai. Le texte le précise." },
      { text: "Une antibiothérapie dépassant 7 jours sans justification est considérée non conforme.", correct: true, correction: "Vrai. Elle ne rapporte pas les points de l’indicateur." },
      { text: "ATBIR porte sur la juste prescription des antibiotiques pour certaines infections respiratoires.", correct: true, correction: "Vrai. C’est son intitulé et son objet." },
    ],
    explanation: "Le support rapporte une moyenne nationale de 84 % pour un objectif de 80 % et juge non conforme une durée > 7 jours sans justification."
  },
  {
    id: 73,
    type: "QCM",
    question: "Que désigne l’indicateur VAG ?",
    options: [
      { text: "La surveillance de l’eau chaude contre les légionelles.", correct: false, correction: "Faux. Il s’agit d’une prévention environnementale." },
      { text: "La vaccination antigrippale des professionnels de santé.", correct: true, correction: "Vrai. C’est la définition indiquée dans le cours." },
      { text: "La durée de traitement des infections respiratoires.", correct: false, correction: "Faux. Il s’agit de l’indicateur ATBIR, et non de VAG." },
      { text: "La consommation des solutions hydroalcooliques.", correct: false, correction: "Faux. Il s’agit de l’indicateur ICSHA, et non de VAG." },
      { text: "La bonne prescription des PCC.", correct: false, correction: "Faux. C’est l’indicateur PCC." },
    ],
    explanation: "VAG signifie Vaccination AntiGrippale des professionnels de santé : il cherche à encourager leur vaccination."
  },
  {
    id: 74,
    type: "QRM",
    question: "À propos de la vaccination antigrippale des soignants, quelles propositions sont exactes dans le support ?",
    options: [
      { text: "La vaccination n’a aucun intérêt pour les patients fragiles.", correct: false, correction: "Faux. Elle vise précisément à réduire la transmission vers ces patients." },
      { text: "L’enseignante encourage la vaccination tous les ans.", correct: true, correction: "Vrai. Le cours précise que le virus de la grippe évolue." },
      { text: "VAG évalue directement la consommation de SHA.", correct: false, correction: "Faux. Cette mesure relève d’ICSHA." },
      { text: "Le taux national de professionnels vaccinés cité est d’environ 20 %.", correct: true, correction: "Vrai. C’est le chiffre donné par l’intervenante." },
      { text: "Un professionnel peut transmettre la grippe même s’il est peu symptomatique.", correct: true, correction: "Vrai. Le texte évoque le portage sans être vraiment malade." },
    ],
    explanation: "La vaccination constitue l’un des trois piliers de la lutte, vise aussi à protéger les patients et doit être renouvelée chaque année dans le cours."
  },
  {
    id: 75,
    type: "QCM",
    question: "À quel rythme approximatif la certification HAS des établissements est-elle présentée ?",
    options: [
      { text: "Tous les 20 ans.", correct: false, correction: "Faux. Ce n’est pas le rythme décrit." },
      { text: "Tous les mois.", correct: false, correction: "Faux. La périodicité du support est bien plus espacée." },
      { text: "Jamais : la certification est supprimée.", correct: false, correction: "Faux. Le cours y consacre une section spécifique." },
      { text: "Tous les 6 mois.", correct: false, correction: "Faux. Ce n’est pas la durée annoncée." },
      { text: "Environ tous les 4 ans.", correct: true, correction: "Vrai. C’est le rythme indiqué." },
    ],
    explanation: "Le cours indique une certification environ tous les quatre ans, avec des informations consultables sur Qualiscope."
  },
  {
    id: 76,
    type: "QRM",
    question: "Quels critères de certification sont qualifiés d’impératifs dans le cours ?",
    options: [
      { text: "Le respect des précautions standard d’hygiène par les équipes.", correct: true, correction: "Vrai. C’est un critère impératif identifié." },
      { text: "L’obligation que tous les patients aient le même traitement antibiotique.", correct: false, correction: "Faux. Le cours demande au contraire une pertinence et une réévaluation." },
      { text: "La maîtrise des risques liés aux équipements et pratiques en secteur interventionnel.", correct: true, correction: "Vrai. Le cours l’inscrit parmi les trois critères." },
      { text: "Une prescription d’antibiotiques argumentée et réévaluée.", correct: true, correction: "Vrai. Il s’agit du troisième critère impératif." },
      { text: "L’obligation de réserver les précautions standard aux patients infectés.", correct: false, correction: "Faux. Ces précautions ont une portée générale dans les soins." },
    ],
    explanation: "Trois critères impératifs sont cités : précautions standard, maîtrise des risques en interventionnel et pertinence des prescriptions d’antibiotiques."
  },
  {
    id: 77,
    type: "QCM",
    question: "Après être allé aux toilettes, quelle hygiène des mains le support recommande-t-il au patient ?",
    options: [
      { text: "Une désinfection des mains au désinfectant de surface.", correct: false, correction: "Faux. Les produits de surface ne correspondent pas à l’hygiène des mains décrite." },
      { text: "Le port de gants jusqu’au repas suivant.", correct: false, correction: "Faux. Le cours met l’accent sur le lavage des mains." },
      { text: "Un lavage à l’eau et au savon.", correct: true, correction: "Vrai. C’est la conduite indiquée dans cette situation." },
      { text: "Aucune action si le patient n’a pas de symptômes infectieux.", correct: false, correction: "Faux. Une hygiène des mains est recommandée après les toilettes." },
      { text: "Une friction hydroalcoolique seule sur des mains visiblement souillées.", correct: false, correction: "Faux. Le support précise d’utiliser eau et savon lorsque les mains sont souillées." },
    ],
    explanation: "Le cours précise que la friction hydroalcoolique est destinée à des mains propres ; lorsqu’elles sont souillées, le lavage à l’eau et au savon est demandé."
  },
  {
    id: 78,
    type: "QRM",
    question: "Quelles consignes concernant les patients et visiteurs sont données ?",
    options: [
      { text: "Les visiteurs doivent faire une friction en entrant et en sortant de la chambre.", correct: true, correction: "Vrai. C’est la consigne explicitement indiquée." },
      { text: "Les mains souillées nécessitent un lavage à l’eau et au savon.", correct: true, correction: "Vrai. Le support distingue lavage et friction selon la propreté des mains." },
      { text: "Le patient est encouragé à réaliser une friction avant de manger.", correct: true, correction: "Vrai. Cette recommandation apparaît dans la section sur les patients acteurs." },
      { text: "Les patients ne doivent recevoir aucune information sur la prévention.", correct: false, correction: "Faux. Le cours insiste au contraire sur les flyers et supports d’information." },
      { text: "Un visiteur enrhumé est encouragé à venir quand même.", correct: false, correction: "Faux. Le cours précise qu’il ne doit pas venir." },
    ],
    explanation: "Le patient et ses visiteurs sont acteurs de la prévention : friction aux moments adaptés et évitement des visites lorsque l’on est malade."
  },
  {
    id: 79,
    type: "QCM",
    question: "Sur quel site les usagers peuvent-ils consulter les indicateurs qualité et la certification présentés dans le cours ?",
    options: [
      { text: "Le REPIA, exclusivement et sans autre support.", correct: false, correction: "Faux. Le cours cite explicitement un autre site pour cet usage." },
      { text: "Qualiscope.", correct: true, correction: "Vrai. C’est le site mentionné pour consulter indicateurs et certification." },
      { text: "Le logiciel de suivi des cathéters en réanimation.", correct: false, correction: "Faux. Il ne s’agit pas du site destiné aux usagers." },
      { text: "Le dossier patient de chaque soignant.", correct: false, correction: "Faux. Ce n’est pas le portail national évoqué." },
      { text: "Uniquement un serveur interne de microbiologie inaccessible aux usagers.", correct: false, correction: "Faux. Le cours évoque un accès public." },
    ],
    explanation: "Qualiscope est cité pour l’accès du public aux indicateurs de qualité et à la certification HAS."
  },
  {
    id: 80,
    type: "QRM",
    question: "Une unité accueille un patient porteur de BMR, un patient en aplasie, et reçoit des visiteurs en période de circulation virale. Quelles décisions sont cohérentes avec le cours ?",
    options: [
      { text: "Considérer que les précautions standard ne concernent plus cette unité.", correct: false, correction: "Faux. Elles constituent le socle commun de prévention et restent indispensables." },
      { text: "Autoriser sans réserve un visiteur enrhumé à venir dans la chambre.", correct: false, correction: "Faux. Le cours demande aux visiteurs malades de ne pas venir." },
      { text: "Vérifier la prescription des précautions complémentaires contact pour le patient concerné et l’information donnée.", correct: true, correction: "Vrai. C’est notamment ce qu’évalue l’indicateur PCC." },
      { text: "Appliquer des mesures protectrices adaptées au patient en aplasie.", correct: true, correction: "Vrai. Les précautions protectrices sont citées dans la GED." },
      { text: "Demander aux visiteurs de réaliser une friction à l’entrée et à la sortie.", correct: true, correction: "Vrai. C’est une consigne explicitement donnée." },
    ],
    explanation: "Ce cas mobilise plusieurs niveaux de PRI : prescription de précautions complémentaires, protection de patients vulnérables et hygiène des mains des visiteurs."
  }
];