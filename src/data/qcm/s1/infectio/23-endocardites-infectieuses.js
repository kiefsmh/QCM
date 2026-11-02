// Projet D1 — 80 questions exclusivement fondées sur le cours 23 : Les endocardites infectieuses.
// Le contenu du PDF et les réponses de la prof sont reproduits sans vérification ni correction externes.
export const meta = {
  title: 'Les endocardites infectieuses',
};

export default [
  {
    id: 1,
    type: "QCM",
    question: "Quelle structure est principalement infectée dans une endocardite infectieuse selon le cours ?",
    options: [
      { text: "Le péricarde exclusivement.", correct: false, correction: "Faux. Le péricarde ne correspond pas à la structure donnée pour l’EI." },
      { text: "Le muscle ventriculaire exclusivement.", correct: false, correction: "Faux. Il ne s’agit pas, dans la définition du cours, d’une infection du myocarde isolée." },
      { text: "Les valves cardiaques et l’endocarde.", correct: true, correction: "Vrai. L’EI est une infection de l’endocarde touchant surtout les valves cardiaques." },
      { text: "Les artères coronaires exclusivement.", correct: false, correction: "Faux. La définition porte sur l’endocarde et les valves, pas sur une artère coronaire isolée." },
      { text: "Les alvéoles pulmonaires.", correct: false, correction: "Faux. Les alvéoles relèvent d’une localisation pulmonaire, pas de l’endocardite." },
    ],
    explanation: "L’endocardite signifie inflammation de l’endocarde. La forme infectieuse correspond à une infection principalement valvulaire, le plus souvent bactérienne."
  },
  {
    id: 2,
    type: "QRM",
    question: "Au sujet de la définition et de l’histoire des endocardites, quelles propositions sont exactes ?",
    options: [
      { text: "L’endocardite correspond à une inflammation de l’endocarde.", correct: true, correction: "Vrai. C’est la définition introductive du cours." },
      { text: "William Osler a décrit l’endocardite infectieuse à la fin du XIXe siècle.", correct: true, correction: "Vrai. Le support cite le médecin canadien William Osler." },
      { text: "Toutes les endocardites sont nécessairement infectieuses.", correct: false, correction: "Faux. Le support indique qu’il existe aussi des endocardites non infectieuses." },
      { text: "L’endocardite infectieuse peut plus rarement être due à une levure.", correct: true, correction: "Vrai. La cause est surtout bactérienne, mais une cause à levures est possible." },
      { text: "Les levures sont responsables de la majorité des endocardites infectieuses.", correct: false, correction: "Faux. Les infections à levures représentent moins de 2 % des cas selon le support." },
    ],
    explanation: "Le cours oppose l’endocardite inflammatoire au sens large et l’EI, presque toujours bactérienne ; Osler est associé à sa description historique."
  },
  {
    id: 3,
    type: "QCM",
    question: "Quelle incidence annuelle des endocardites infectieuses en France est retenue dans le support ?",
    options: [
      { text: "3 à 5 cas par million d’habitants.", correct: false, correction: "Faux. C’est dix fois inférieur à la fourchette indiquée." },
      { text: "30 à 50 cas par million d’habitants.", correct: true, correction: "Vrai. C’est exactement la fourchette présentée dans la partie épidémiologie." },
      { text: "300 à 500 cas par million d’habitants.", correct: false, correction: "Faux. Cette proposition surestime l’incidence d’un facteur dix." },
      { text: "3 000 à 5 000 cas par million d’habitants.", correct: false, correction: "Faux. Le chiffre du cours est 30 à 50 par million et non plusieurs milliers." },
      { text: "Un cas sur deux habitants.", correct: false, correction: "Faux. Le support qualifie l’EI de pathologie rare." },
    ],
    explanation: "Incidence de l’EI dans le cours : 30 à 50 cas par million d’habitants et par an en France."
  },
  {
    id: 4,
    type: "QRM",
    question: "Concernant l’épidémiologie des endocardites infectieuses, quelles propositions correspondent au cours ?",
    options: [
      { text: "La mortalité est d’environ 20 %.", correct: true, correction: "Vrai. Le document indique un cinquième de mortalité." },
      { text: "Les hommes sont davantage touchés que les femmes.", correct: true, correction: "Vrai. Le cours décrit une prédominance masculine." },
      { text: "L’atteinte concerne préférentiellement le cœur droit.", correct: false, correction: "Faux. L’EI atteint préférentiellement le cœur gauche ; le cœur droit correspond à certains terrains." },
      { text: "Les patients atteints sont plutôt âgés.", correct: true, correction: "Vrai. C’est le profil épidémiologique décrit." },
      { text: "Le cœur gauche est l’atteinte habituelle.", correct: true, correction: "Vrai. La localisation préférentielle est bien le cœur gauche." },
    ],
    explanation: "Maladie rare mais grave : mortalité 20 %, âge avancé, prédominance masculine et atteinte du cœur gauche dans le cas habituel."
  },
  {
    id: 5,
    type: "QCM",
    question: "Quel terrain est particulièrement associé aux endocardites infectieuses du cœur droit dans le cours ?",
    options: [
      { text: "Le patient avec carie dentaire isolée.", correct: false, correction: "Faux. La dentition renvoie surtout à l’origine des streptocoques oraux." },
      { text: "Le patient ayant une tumeur colique sans autre facteur.", correct: false, correction: "Faux. La tumeur colique oriente notamment vers S. gallolyticus." },
      { text: "Le patient avec une infection urinaire à E. faecalis.", correct: false, correction: "Faux. E. faecalis a une porte d’entrée urinaire ou digestive dans le cours." },
      { text: "Le patient consommant des drogues par injection intraveineuse.", correct: true, correction: "Vrai. Les injections peuvent inoculer des staphylocoques cutanés, à l’origine d’une EI droite." },
      { text: "Le patient avec une simple rhinopharyngite.", correct: false, correction: "Faux. Ce terrain n’est pas décrit comme le risque typique d’EI droite." },
    ],
    explanation: "Le cours associe l’EI droite aux usagers de drogues injectables, notamment à Staphylococcus aureus."
  },
  {
    id: 6,
    type: "QRM",
    question: "Parmi les facteurs de risque ou contextes d’endocardite infectieuse, lesquels sont cités ?",
    options: [
      { text: "Une valvulopathie préexistante.", correct: true, correction: "Vrai. Un défaut valvulaire peut favoriser la greffe bactérienne." },
      { text: "Une prothèse valvulaire protège contre la greffe infectieuse.", correct: false, correction: "Faux. Une prothèse valvulaire est au contraire un facteur de risque." },
      { text: "La présence de sondes de pacemaker.", correct: true, correction: "Vrai. Les sondes intracardiaques constituent du matériel favorisant le risque." },
      { text: "L’absence de toute cardiopathie exclut formellement l’EI.", correct: false, correction: "Faux. Le cours décrit des EI sur valves apparemment saines dans 40 % des cas." },
      { text: "Un cathéter pouvant être à l’origine d’une bactériémie.", correct: true, correction: "Vrai. L’infection sur cathéter peut se disséminer par voie sanguine." },
    ],
    explanation: "Le support souligne le rôle des valvulopathies, du matériel intracardiaque et des dispositifs invasifs comme portes d’entrée possibles."
  },
  {
    id: 7,
    type: "QCM",
    question: "Selon le cours, quelle proportion d’endocardites infectieuses est liée aux soins ?",
    options: [
      { text: "Moins de 1 %.", correct: false, correction: "Faux. Le document indique un chiffre bien supérieur." },
      { text: "Exactement 2 %.", correct: false, correction: "Faux. Ce pourcentage ne correspond pas au chiffre donné." },
      { text: "Environ 5 %.", correct: false, correction: "Faux. 5 % correspond ailleurs aux cas sans micro-organisme identifié." },
      { text: "Moins de 10 %.", correct: false, correction: "Faux. Le support retient plus d’un quart des EI." },
      { text: "Plus de 25 %.", correct: true, correction: "Vrai. Le cours indique explicitement que plus de 25 % des EI sont liées aux soins." },
    ],
    explanation: "Plus d’un quart des endocardites sont associées aux soins selon les notes, notamment via cathéters, pacemakers et antécédents de chirurgie cardiaque."
  },
  {
    id: 8,
    type: "QRM",
    question: "Concernant les portes d’entrée associées aux soins, quelles propositions sont justes ?",
    options: [
      { text: "Un cathéter infecté peut provoquer une diffusion bactérienne sanguine.", correct: true, correction: "Vrai. L’infection peut partir du cathéter et atteindre secondairement les valves." },
      { text: "Une thrombose sur cathéter peut contenir des bactéries.", correct: true, correction: "Vrai. Le cours décrit une thrombose infectée suivie de dissémination." },
      { text: "Les fils d’un pacemaker restent exclusivement à l’extérieur de l’organisme.", correct: false, correction: "Faux. Les fils du pacemaker cheminent vers l’intérieur de l’endocarde." },
      { text: "Un antécédent de chirurgie cardiaque constitue un contexte à risque.", correct: true, correction: "Vrai. Ce facteur est explicitement cité." },
      { text: "Le matériel iatrogène peut favoriser une infection.", correct: true, correction: "Vrai. Le support insiste sur le risque porté par les prothèses et dispositifs." },
    ],
    explanation: "L’EI associée aux soins implique souvent du matériel : cathéter, sonde de pacemaker ou contexte chirurgical cardiaque."
  },
  {
    id: 9,
    type: "QCM",
    question: "Quel groupe de micro-organismes représente 50 % des endocardites infectieuses dans le tableau du cours ?",
    options: [
      { text: "Les Streptococcaceae.", correct: true, correction: "Vrai. Il s’agit de la famille majoritaire du tableau." },
      { text: "Les Staphylococcaceae.", correct: false, correction: "Faux. Les Staphylococcaceae représentent 35 %." },
      { text: "Les levures Candida seules.", correct: false, correction: "Faux. Les levures comptent pour moins de 2 % selon la définition initiale." },
      { text: "Les bactéries du groupe HACCEK seules.", correct: false, correction: "Faux. Le cours ne leur attribue pas 50 % des EI." },
      { text: "Les bactéries non identifiées.", correct: false, correction: "Faux. L’absence d’identification est rapportée dans 5 % des cas." },
    ],
    explanation: "Répartition du support : Streptococcaceae 50 %, Staphylococcaceae 35 %, autres agents 10 %, germe non identifié 5 %."
  },
  {
    id: 10,
    type: "QRM",
    question: "Quelles proportions sont données dans le tableau étiologique des endocardites ?",
    options: [
      { text: "Staphylococcaceae : 35 %.", correct: true, correction: "Vrai. C’est la proportion de cette famille." },
      { text: "Les Staphylococcaceae représentent 50 % des EI.", correct: false, correction: "Faux. La fréquence attribuée aux Staphylococcaceae est de 35 %." },
      { text: "Streptocoques oraux : 20 %.", correct: true, correction: "Vrai. Le cours attribue un cinquième des EI à ces streptocoques." },
      { text: "Entérocoques : 35 %.", correct: false, correction: "Faux. Les entérocoques représentent 10 %, et non 35 %." },
      { text: "Les staphylocoques à coagulase négative causent 25 % des EI.", correct: false, correction: "Faux. Le tableau les situe à 10 % ; 25 % correspond à S. aureus." },
    ],
    explanation: "Les chiffres à retenir sont 35 % de Staphylococcaceae, dont 25 % S. aureus et 10 % coagulase négative ; 20 % de streptocoques oraux."
  },
  {
    id: 11,
    type: "QCM",
    question: "Quelle espèce représente environ 72 % des endocardites à streptocoques du groupe D dans le cours ?",
    options: [
      { text: "Streptococcus pneumoniae.", correct: false, correction: "Faux. Le pneumocoque est associé à d’autres infections communautaires dans les notes." },
      { text: "Streptococcus pyogenes.", correct: false, correction: "Faux. S. pyogenes est un streptocoque pyogène du groupe A." },
      { text: "Streptococcus mitis.", correct: false, correction: "Faux. S. mitis appartient aux streptocoques oraux." },
      { text: "Staphylococcus epidermidis.", correct: false, correction: "Faux. S. epidermidis est un staphylocoque à coagulase négative." },
      { text: "Streptococcus gallolyticus.", correct: true, correction: "Vrai. S. gallolyticus est l’espèce majoritaire du groupe D selon le tableau." },
    ],
    explanation: "Parmi les streptocoques du groupe D impliqués dans les EI, le cours attribue 72 % des cas à Streptococcus gallolyticus."
  },
  {
    id: 12,
    type: "QRM",
    question: "À propos des streptocoques et entérocoques cités, quelles propositions sont exactes ?",
    options: [
      { text: "Streptococcus mitis appartient aux streptocoques oraux.", correct: true, correction: "Vrai. Il est cité comme exemple de streptocoque oral alpha-hémolytique." },
      { text: "Streptococcus agalactiae est le streptocoque du groupe B.", correct: true, correction: "Vrai. Cette correspondance est indiquée dans le support." },
      { text: "Les streptocoques pyogènes représentent 40 % des EI dans le tableau.", correct: false, correction: "Faux. Les streptocoques pyogènes représentent 5 % des EI du tableau." },
      { text: "Environ 90 % des entérocoques responsables d’EI sont E. faecalis.", correct: true, correction: "Vrai. C’est la proportion énoncée pour les entérocoques." },
      { text: "Streptococcus pyogenes appartient au groupe A.", correct: true, correction: "Vrai. Le cours nomme explicitement le streptocoque du groupe A." },
    ],
    explanation: "Streptocoques oraux : mitis/oralis ; streptocoques pyogènes : groupes A et B ; EI à entérocoques : surtout E. faecalis."
  },
  {
    id: 13,
    type: "QCM",
    question: "Quel bilan étiologique est particulièrement important devant une endocardite à Streptococcus gallolyticus ?",
    options: [
      { text: "Une recherche systématique de pneumothorax.", correct: false, correction: "Faux. Le germe est associé à une origine digestive dans ce cours." },
      { text: "Une IRM hypophysaire systématique.", correct: false, correction: "Faux. Ce bilan n’est pas lié à la porte d’entrée de S. gallolyticus décrite." },
      { text: "Une coloscopie recherchant une tumeur colique.", correct: true, correction: "Vrai. Une tumeur colique peut constituer le point de départ d’une translocation bactérienne." },
      { text: "Un frottis pharyngé isolé.", correct: false, correction: "Faux. La porte d’entrée est digestive, non oropharyngée." },
      { text: "Une sérologie d’Ebola systématique.", correct: false, correction: "Faux. L’Ebola n’est pas associé à cette étiologie." },
    ],
    explanation: "S. gallolyticus est un streptocoque du groupe D issu de la flore digestive ; l’EI peut révéler un cancer colique, d’où la coloscopie."
  },
  {
    id: 14,
    type: "QRM",
    question: "Concernant les associations germe–porte d’entrée du tableau des hémocultures positives, lesquelles sont correctes ?",
    options: [
      { text: "Streptocoques oraux — bucco-dentaire.", correct: true, correction: "Vrai. La flore oropharyngée explique cette porte d’entrée." },
      { text: "Streptocoques du groupe D — digestive.", correct: true, correction: "Vrai. S. gallolyticus oriente notamment vers le côlon." },
      { text: "Staphylococcus aureus possède uniquement une porte d’entrée digestive.", correct: false, correction: "Faux. Sa porte d’entrée est surtout cutanée, notamment chez l’usager de drogues IV." },
      { text: "Staphylocoques à coagulase négative — digestive uniquement.", correct: false, correction: "Faux. La voie décrite est surtout cutanée, notamment sur cathéter." },
      { text: "Les entérocoques ont exclusivement une porte d’entrée respiratoire.", correct: false, correction: "Faux. Le cours associe les entérocoques aux portes digestive et urinaire." },
    ],
    explanation: "Le repérage du germe oriente directement le bilan de porte d’entrée : dents, côlon, urine, peau ou cathéter."
  },
  {
    id: 15,
    type: "QCM",
    question: "En présence d’une EI à streptocoques oraux, quel examen permet de rechercher une porte d’entrée ?",
    options: [
      { text: "Un bilan bucco-dentaire.", correct: true, correction: "Vrai. La flore buccale/oropharyngée est le réservoir décrit." },
      { text: "Un ECBU comme seul examen.", correct: false, correction: "Faux. L’ECBU est plutôt recherché pour un entérocoque." },
      { text: "Une coloscopie sans autre contexte.", correct: false, correction: "Faux. La coloscopie est notamment mentionnée pour S. gallolyticus." },
      { text: "Une biopsie pulmonaire.", correct: false, correction: "Faux. La porte d’entrée des streptocoques oraux est bucco-dentaire." },
      { text: "Une recherche de cathéter uniquement.", correct: false, correction: "Faux. Le cathéter est une piste notable pour les staphylocoques à coagulase négative." },
    ],
    explanation: "Lorsqu’une EI est due à un streptocoque oral, le cours préconise de rechercher et traiter une porte d’entrée dentaire."
  },
  {
    id: 16,
    type: "QRM",
    question: "Que faut-il retenir des hémocultures positives dans le raisonnement étiologique ?",
    options: [
      { text: "Elles peuvent identifier le micro-organisme responsable.", correct: true, correction: "Vrai. C’est l’intérêt majeur de cette analyse." },
      { text: "Elles permettent d’obtenir un antibiogramme pour adapter l’antibiotique.", correct: true, correction: "Vrai. Une identification permet de cibler l’antibiothérapie selon le cours." },
      { text: "Le sang doit être considéré comme infecté spontanément sans porte d’entrée.", correct: false, correction: "Faux. Le cours rappelle que le sang est normalement stérile et qu’une porte d’entrée doit être cherchée." },
      { text: "La recherche de la porte d’entrée est essentielle.", correct: true, correction: "Vrai. Un germe circulant a un point de départ qu’il faut rechercher." },
      { text: "Traiter la porte d’entrée ne modifie jamais une bactériémie.", correct: false, correction: "Faux. Le support insiste sur le contrôle du point de départ pour stériliser le sang." },
    ],
    explanation: "Le diagnostic microbiologique ne dispense pas du bilan de porte d’entrée ; l’identification du germe et l’antibiogramme orientent le traitement."
  },
  {
    id: 17,
    type: "QCM",
    question: "Quel staphylocoque à coagulase négative est cité comme le plus fréquent et lié aux cathéters ?",
    options: [
      { text: "Staphylococcus aureus.", correct: false, correction: "Faux. S. aureus est un staphylocoque très pathogène, cité séparément." },
      { text: "Streptococcus mitis.", correct: false, correction: "Faux. S. mitis est un streptocoque oral." },
      { text: "Enterococcus faecalis.", correct: false, correction: "Faux. E. faecalis est un entérocoque digestif/urinaire." },
      { text: "Staphylococcus epidermidis.", correct: true, correction: "Vrai. S. epidermidis est un commensal cutané favorisé par les cathéters." },
      { text: "Streptococcus gallolyticus.", correct: false, correction: "Faux. S. gallolyticus est associé à la porte digestive." },
    ],
    explanation: "S. epidermidis est une bactérie commensale cutanée à coagulase négative ; le cathéter constitue une porte d’entrée classique."
  },
  {
    id: 18,
    type: "QRM",
    question: "À propos de Staphylococcus aureus et des staphylocoques à coagulase négative, quelles propositions suivent le cours ?",
    options: [
      { text: "S. aureus est responsable d’environ 25 % des EI.", correct: true, correction: "Vrai. C’est son poids dans le tableau fourni." },
      { text: "S. epidermidis peut provenir de la flore commensale cutanée.", correct: true, correction: "Vrai. Sa présence naturelle sur la peau est citée." },
      { text: "Staphylococcus aureus est décrit comme un germe peu pathogène.", correct: false, correction: "Faux. Le texte le qualifie au contraire de très pathogène." },
      { text: "Une EI à staphylocoque à coagulase négative impose toujours une origine bucco-dentaire.", correct: false, correction: "Faux. Le support relie plutôt ce germe aux cathéters et à la peau." },
      { text: "Le cathéter est une porte d’entrée fréquente pour S. epidermidis.", correct: true, correction: "Vrai. La colonisation d’un dispositif est un mécanisme décrit." },
    ],
    explanation: "S. aureus et les staphylocoques à coagulase négative partagent un tropisme cutané, mais sont décrits différemment en termes de virulence et de contexte."
  },
  {
    id: 19,
    type: "QCM",
    question: "Quelle part des EI correspond aux situations où aucun micro-organisme n’est identifié, selon le tableau ?",
    options: [
      { text: "50 %.", correct: false, correction: "Faux. 50 % représente les Streptococcaceae dans le tableau." },
      { text: "35 %.", correct: false, correction: "Faux. 35 % correspond aux Staphylococcaceae." },
      { text: "20 %.", correct: false, correction: "Faux. 20 % correspond aux streptocoques oraux." },
      { text: "5 %.", correct: true, correction: "Vrai. Le support indique 5 % sans micro-organisme identifié." },
      { text: "0 %.", correct: false, correction: "Faux. Le document précise qu’un germe peut rester non identifié." },
    ],
    explanation: "L’étiologie n’est pas retrouvée dans 5 % des EI du tableau du cours."
  },
  {
    id: 20,
    type: "QRM",
    question: "Concernant la répartition microbiologique présentée, quelles affirmations sont exactes ?",
    options: [
      { text: "Les autres micro-organismes représentent environ 10 %.", correct: true, correction: "Vrai. C’est la catégorie « autres micro-organismes »." },
      { text: "Les streptocoques oraux sont alpha-hémolytiques (viridans).", correct: true, correction: "Vrai. Le cours emploie ces dénominations comme synonymes." },
      { text: "Streptococcus pneumoniae est présenté comme la cause dominante d’EI.", correct: false, correction: "Faux. Le pneumocoque est cité pour pneumopathies, otites et méningites plutôt que pour EI." },
      { text: "Les streptocoques pyogènes représentent 35 % des endocardites.", correct: false, correction: "Faux. Le tableau leur attribue 5 %." },
      { text: "Les streptocoques du groupe D représentent 50 % des endocardites.", correct: false, correction: "Faux. La fréquence du groupe D est de 15 %." },
    ],
    explanation: "Le tableau distingue 20 % streptocoques oraux, 15 % groupe D, 5 % pyogènes, 10 % entérocoques et 10 % autres agents."
  },
  {
    id: 21,
    type: "QCM",
    question: "Dans ce cours, quelle caractéristique générale décrit les bactéries du groupe HACCEK ?",
    options: [
      { text: "Des cocci à Gram positif exclusivement.", correct: false, correction: "Faux. Le support les décrit globalement comme de petits bacilles à Gram négatif." },
      { text: "Des bactéries à croissance lente ou difficile.", correct: true, correction: "Vrai. La difficulté de culture explique l’incubation prolongée." },
      { text: "Des levures impossibles à cultiver.", correct: false, correction: "Faux. Les levures sont traitées dans une autre catégorie." },
      { text: "Des bactéries responsables de toutes les EI.", correct: false, correction: "Faux. Les streptocoques et staphylocoques dominent l’étiologie des EI." },
      { text: "Des parasites hématophages.", correct: false, correction: "Faux. Le groupe est bactérien, pas parasitaire." },
    ],
    explanation: "Les bactéries HACCEK sont à croissance lente ou difficile et peuvent nécessiter une incubation prolongée des hémocultures."
  },
  {
    id: 22,
    type: "QRM",
    question: "Parmi les espèces suivantes, lesquelles appartiennent au groupe HACCEK tel que présenté ?",
    options: [
      { text: "Cardiobacterium hominis.", correct: true, correction: "Vrai. La lettre C inclut Cardiobacterium." },
      { text: "Eikenella corrodens.", correct: true, correction: "Vrai. La lettre E renvoie à Eikenella." },
      { text: "Streptococcus gallolyticus.", correct: false, correction: "Faux. C’est un streptocoque du groupe D, non une bactérie HACCEK." },
      { text: "Kingella kingae.", correct: true, correction: "Vrai. La lettre K renvoie à Kingella." },
      { text: "Aggregatibacter actinomycetemcomitans.", correct: true, correction: "Vrai. La lettre A renvoie à Aggregatibacter." },
    ],
    explanation: "Le groupe nommé HACCEK dans le cours rassemble Haemophilus, Aggregatibacter, Cardiobacterium, Capnocytophaga, Eikenella et Kingella."
  },
  {
    id: 23,
    type: "QCM",
    question: "Quelle durée d’incubation des flacons est citée pour rechercher les bactéries HACCEK ?",
    options: [
      { text: "Une heure.", correct: false, correction: "Faux. Les bactéries à croissance lente demandent davantage de temps." },
      { text: "Vingt-quatre heures uniquement.", correct: false, correction: "Faux. Cette durée est trop courte par rapport à celle indiquée." },
      { text: "Quarante-huit heures au maximum.", correct: false, correction: "Faux. Le support précise une incubation bien plus longue." },
      { text: "Dix à quinze jours.", correct: true, correction: "Vrai. C’est la durée donnée pour les HACCEK." },
      { text: "Six mois.", correct: false, correction: "Faux. Aucune durée de six mois n’est décrite." },
    ],
    explanation: "Le temps habituel d’incubation d’un flacon d’hémoculture est de cinq jours dans ce support, contre dix à quinze jours pour les bactéries HACCEK."
  },
  {
    id: 24,
    type: "QRM",
    question: "Au sujet du groupe HACCEK, quelles propositions sont exactes ?",
    options: [
      { text: "Les bactéries HACCEK ont exclusivement un réservoir urinaire.", correct: false, correction: "Faux. Le texte souligne le réservoir oropharyngé." },
      { text: "Une porte d’entrée bucco-dentaire doit être recherchée.", correct: true, correction: "Vrai. Le bilan dentaire est décrit pour les EI à HACCEK." },
      { text: "Capnocytophaga canimorsus est associé à la flore oropharyngée du chien.", correct: true, correction: "Vrai. Cet exemple animal est cité." },
      { text: "Tous ses représentants poussent en vingt minutes dans les flacons usuels.", correct: false, correction: "Faux. Le support préconise précisément une incubation prolongée." },
      { text: "Eikenella corrodens est présentée comme une levure.", correct: false, correction: "Faux. Eikenella est un genre bactérien du groupe HACCEK." },
    ],
    explanation: "Les HACCEK relèvent de la flore oropharyngée humaine ou animale dans le support, d’où la recherche d’une origine bucco-dentaire."
  },
  {
    id: 25,
    type: "QCM",
    question: "Quel agent cité dans la liste HACCEK est également présenté comme la deuxième cause d’arthrite chez l’enfant ?",
    options: [
      { text: "Kingella kingae.", correct: true, correction: "Vrai. Le cours cite Kingella kingae après S. aureus dans les arthrites de l’enfant." },
      { text: "Haemophilus influenzae.", correct: false, correction: "Faux. H. influenzae est surtout illustré par d’autres infections pédiatriques." },
      { text: "Cardiobacterium hominis.", correct: false, correction: "Faux. Il est cité comme bactérie à tropisme cardiaque." },
      { text: "Streptococcus pyogenes.", correct: false, correction: "Faux. Le support ne lui attribue pas ce rang dans l’arthrite de l’enfant." },
      { text: "Coxiella burnetii.", correct: false, correction: "Faux. Cet agent relève plutôt des hémocultures négatives." },
    ],
    explanation: "La prof associe Kingella kingae à l’arthrite pédiatrique, au deuxième rang après S. aureus dans son propos."
  },
  {
    id: 26,
    type: "QRM",
    question: "Quelles correspondances de noms du groupe HACCEK sont exactes selon le support ?",
    options: [
      { text: "La lettre H du groupe HACCEK correspond à Helicobacter.", correct: false, correction: "Faux. Le H est celui de Haemophilus." },
      { text: "A : Aggregatibacter.", correct: true, correction: "Vrai. Le support donne A. actinomycetemcomitans." },
      { text: "C : Candida.", correct: false, correction: "Faux. Candida est une levure ; les C du groupe sont Cardiobacterium et Capnocytophaga." },
      { text: "E : Eikenella.", correct: true, correction: "Vrai. E. corrodens est citée." },
      { text: "K : Kingella.", correct: true, correction: "Vrai. K. kingae termine la liste." },
    ],
    explanation: "Les initiales correspondent à Haemophilus, Aggregatibacter, Cardiobacterium, Capnocytophaga, Eikenella et Kingella."
  },
  {
    id: 27,
    type: "QCM",
    question: "Quelle situation est explicitement décrite comme une cause fréquente d’hémocultures négatives dans l’EI ?",
    options: [
      { text: "L’hydratation du patient avant le prélèvement.", correct: false, correction: "Faux. Ce mécanisme n’est pas donné dans le support." },
      { text: "Une prise de vitamine C.", correct: false, correction: "Faux. Le cours ne décrit pas cette cause." },
      { text: "Une antibiothérapie commencée avant les prélèvements.", correct: true, correction: "Vrai. Il s’agit d’une « infection décapitée »." },
      { text: "Un examen bucco-dentaire préalable.", correct: false, correction: "Faux. Ce bilan sert à chercher la porte d’entrée, pas à négativer l’hémoculture." },
      { text: "Une infection nécessairement virale.", correct: false, correction: "Faux. Le cours énumère plusieurs causes bactériennes, fongiques ou liées aux antibiotiques." },
    ],
    explanation: "Une antibiothérapie préalable peut négativer les hémocultures et constitue la première cause citée d’EI à hémocultures négatives."
  },
  {
    id: 28,
    type: "QRM",
    question: "Quelles causes d’endocardite à hémocultures négatives sont explicitement évoquées dans le cours ?",
    options: [
      { text: "Coxiella burnetii.", correct: true, correction: "Vrai. C’est l’agent de la fièvre Q qui ne pousse pas dans les milieux classiques décrits." },
      { text: "Bartonella spp.", correct: true, correction: "Vrai. Certaines Bartonella se cultivent très difficilement." },
      { text: "Tropheryma whipplei.", correct: true, correction: "Vrai. Le cours précise l’absence de pousse dans les milieux usuels." },
      { text: "Une antibiothérapie préalable rend toujours les hémocultures plus positives.", correct: false, correction: "Faux. Elle peut au contraire négativer les prélèvements : infection décapitée." },
      { text: "Une hyperglycémie isolée sans agent pathogène.", correct: false, correction: "Faux. Ce n’est pas une étiologie microbiologique du support." },
    ],
    explanation: "Les principales causes évoquées comprennent antibiothérapie préalable, Coxiella, Bartonella, T. whipplei, HACCEK et agents fongiques."
  },
  {
    id: 29,
    type: "QCM",
    question: "Quel agent est associé à la fièvre Q et à l’inhalation de produits d’origine ovine ou caprine ?",
    options: [
      { text: "Coxiella burnetii.", correct: true, correction: "Vrai. Il s’agit d’une zoonose citée avec les ovins et caprins." },
      { text: "Bartonella henselae.", correct: false, correction: "Faux. Elle est associée à la griffure de chat." },
      { text: "Bartonella quintana.", correct: false, correction: "Faux. Elle est associée aux poux de corps." },
      { text: "Tropheryma whipplei.", correct: false, correction: "Faux. Le cours le décrit comme germe du tube digestif." },
      { text: "Staphylococcus epidermidis.", correct: false, correction: "Faux. Ce staphylocoque est surtout lié aux cathéters." },
    ],
    explanation: "Coxiella burnetii est une bactérie intracellulaire, agent de la fièvre Q, liée aux élevages ovins/caprins et difficile à cultiver dans les milieux classiques."
  },
  {
    id: 30,
    type: "QRM",
    question: "Concernant les agents responsables d’hémocultures négatives, quelles propositions sont exactes ?",
    options: [
      { text: "Bartonella quintana est transmise par les poux de corps.", correct: true, correction: "Vrai. C’est le mode de transmission cité." },
      { text: "Bartonella henselae est associée à la maladie des griffes du chat.", correct: true, correction: "Vrai. Le support décrit le lien avec le chat, souvent chez l’enfant." },
      { text: "Bartonella quintana est décrite comme plus fréquente que B. henselae dans les EI.", correct: true, correction: "Vrai. Cette comparaison est donnée dans les notes." },
      { text: "Coxiella burnetii pousse aisément sur gélose conventionnelle.", correct: false, correction: "Faux. Le cours indique qu’elle ne pousse pas dans les milieux de culture habituels." },
      { text: "Tropheryma whipplei est présenté comme un bacille à Gram positif digestif.", correct: true, correction: "Vrai. C’est la description textuelle de cet agent." },
    ],
    explanation: "Ces étiologies demandent un raisonnement d’exposition : poux, chats, ovins/caprins et agents difficiles ou impossibles à cultiver en routine."
  },
  {
    id: 31,
    type: "QCM",
    question: "Quelle bactérie ne pousse pas dans les milieux usuels et nécessite notamment une approche PCR selon le cours ?",
    options: [
      { text: "Streptococcus mitis.", correct: false, correction: "Faux. C’est un streptocoque oral cultivable." },
      { text: "Staphylococcus aureus.", correct: false, correction: "Faux. Son identification est envisagée par hémoculture." },
      { text: "Enterococcus faecalis.", correct: false, correction: "Faux. Le cours l’inscrit parmi les causes d’EI à hémocultures positives." },
      { text: "Streptococcus gallolyticus.", correct: false, correction: "Faux. Cet agent du groupe D est classé parmi les germes d’hémocultures positives." },
      { text: "Tropheryma whipplei.", correct: true, correction: "Vrai. Le support indique qu’il ne pousse pas et que la PCR permet son diagnostic." },
    ],
    explanation: "Tropheryma whipplei est présenté comme un bacille digestif à Gram positif ne poussant pas dans les milieux classiques."
  },
  {
    id: 32,
    type: "QRM",
    question: "À propos des agents fongiques d’endocardite, quelles propositions suivent le cours ?",
    options: [
      { text: "Candida peut être impliqué dans une endocardite.", correct: true, correction: "Vrai. La section hémocultures négatives évoque Candida spp." },
      { text: "Les levures provoquent plus de la moitié des EI.", correct: false, correction: "Faux. Le document indique moins de 2 % d’EI à levures." },
      { text: "Il existe des flacons d’hémoculture spécifiques de mycologie.", correct: true, correction: "Vrai. Le support insiste sur leur intérêt diagnostique." },
      { text: "Les levures ne poussent jamais dans les flacons d’hémoculture habituels.", correct: false, correction: "Faux. Le cours précise qu’une croissance est parfois possible, mais moins sensible." },
      { text: "Les flacons de mycologie ne sont jamais utiles pour suspecter Candida.", correct: false, correction: "Faux. Des flacons spécifiques sont justement recommandés lorsque cette étiologie est suspectée." },
    ],
    explanation: "Le cours rappelle la possibilité rare d’EI fongique, particulièrement à Candida, et l’intérêt de flacons de mycologie adaptés."
  },
  {
    id: 33,
    type: "QCM",
    question: "À quelle étape commence le mécanisme de greffe endocarditique simplifié représenté dans le cours ?",
    options: [
      { text: "Une destruction isolée de l’alvéole pulmonaire.", correct: false, correction: "Faux. Cette localisation n’est pas le début du schéma valvulaire." },
      { text: "Une lésion de l’endothélium endocardique.", correct: true, correction: "Vrai. Le schéma commence par l’endothélium lésé." },
      { text: "Un abcès cérébral déjà formé.", correct: false, correction: "Faux. C’est une complication secondaire possible, pas la première étape." },
      { text: "Une insuffisance rénale terminale obligatoire.", correct: false, correction: "Faux. Le cours ne pose pas cet élément comme préalable." },
      { text: "Une injection d’anticorps sur la valve.", correct: false, correction: "Faux. Les anticorps interviennent ailleurs dans la physiopathologie, pas à ce stade." },
    ],
    explanation: "Le schéma suit : endothélium lésé, fibrine exposée, greffe bactérienne, recrutement inflammatoire, adhésion plaquettaire, végétation."
  },
  {
    id: 34,
    type: "QRM",
    question: "Concernant la greffe endocarditique et les végétations, quelles propositions sont exactes ?",
    options: [
      { text: "Le dépôt de fibrine peut précéder la greffe bactérienne.", correct: true, correction: "Vrai. Le schéma montre la fibrine sur l’endothélium lésé." },
      { text: "La végétation associe notamment bactéries et fibrine.", correct: true, correction: "Vrai. Le cours décrit des amas proliférants de fibrine et de bactéries." },
      { text: "La végétation est systématiquement stérile dans l’endocardite infectieuse.", correct: false, correction: "Faux. La présence et la prolifération des bactéries définissent ici la végétation infectée." },
      { text: "Le recrutement de cellules inflammatoires apparaît dans le schéma.", correct: true, correction: "Vrai. C’est une étape mentionnée après la greffe." },
      { text: "Une végétation d’endocardite ne peut jamais générer d’embole.", correct: false, correction: "Faux. Le cours décrit une diffusion embolique responsable de foyers secondaires." },
    ],
    explanation: "La végétation est une lésion infectée pouvant se fragmenter, ce qui relie la destruction valvulaire aux complications emboliques."
  },
  {
    id: 35,
    type: "QCM",
    question: "Quelle proportion des greffes endocarditiques du cours survient sur valvulopathie ou matériel étranger ?",
    options: [
      { text: "5 %.", correct: false, correction: "Faux. 5 % correspond au groupe sans germe identifié dans le tableau étiologique." },
      { text: "20 %.", correct: false, correction: "Faux. Ce n’est pas la proportion décrite." },
      { text: "40 %.", correct: false, correction: "Faux. 40 % surviennent sur une valve native apparemment saine dans le cours." },
      { text: "60 %.", correct: true, correction: "Vrai. Le support donne 60 % sur anomalie sous-jacente ou corps étranger." },
      { text: "100 %.", correct: false, correction: "Faux. Le cours distingue bien des valves apparemment saines." },
    ],
    explanation: "Selon les notes, 60 % des greffes surviennent sur valvulopathie ou corps étranger, contre 40 % sur valve native apparemment saine."
  },
  {
    id: 36,
    type: "QRM",
    question: "Quelles étapes et conséquences apparaissent dans la physiopathologie décrite ?",
    options: [
      { text: "Une bactériémie peut ensemencer les valves.", correct: true, correction: "Vrai. La circulation sanguine transporte le germe vers l’endocarde." },
      { text: "Les valves infectées interrompent immédiatement la bactériémie.", correct: false, correction: "Faux. Elles entretiennent au contraire une bactériémie persistante." },
      { text: "L’infection peut causer des ulcérations ou des perforations valvulaires.", correct: true, correction: "Vrai. La destruction mécanique est évoquée dans la section sur les végétations." },
      { text: "La formation d’une végétation élimine immédiatement toute bactérie sanguine.", correct: false, correction: "Faux. La végétation favorise au contraire une dissémination continue." },
      { text: "Une insuffisance cardiaque importante peut conduire à discuter une chirurgie.", correct: true, correction: "Vrai. Une chirurgie est évoquée devant la défaillance valvulaire importante." },
    ],
    explanation: "L’endocardite associe bactériémie, fixation bactérienne sur les valves, végétations et, potentiellement, destruction valvulaire nécessitant une prise en charge chirurgicale."
  },
  {
    id: 37,
    type: "QCM",
    question: "Quel énoncé correspond au mécanisme de dissémination présenté dans le schéma ?",
    options: [
      { text: "Les emboles ne circulent que dans les lymphatiques.", correct: false, correction: "Faux. Le schéma décrit une diffusion hématogène." },
      { text: "Les bactéries disparaissent dès qu’une végétation se forme.", correct: false, correction: "Faux. La végétation entretient au contraire la bactériémie." },
      { text: "Des fragments de végétation peuvent emboliser et provoquer des foyers secondaires.", correct: true, correction: "Vrai. C’est la conséquence embolique exposée dans le cours." },
      { text: "La formation de végétations supprime toute insuffisance cardiaque.", correct: false, correction: "Faux. Les végétations peuvent aggraver le fonctionnement valvulaire." },
      { text: "Les foyers secondaires sont limités aux seules dents.", correct: false, correction: "Faux. Le cours cite notamment le cerveau, la colonne, le rein et l’œil." },
    ],
    explanation: "Les emboles septiques expliquent les complications à distance d’une EI : foyers secondaires et localisations emboliques."
  },
  {
    id: 38,
    type: "QRM",
    question: "À propos des facteurs anatomiques et du mécanisme de formation d’une EI, quelles propositions sont correctes ?",
    options: [
      { text: "La lésion endocardique favorise le dépôt de fibrine.", correct: true, correction: "Vrai. C’est la première phase du schéma." },
      { text: "Une valve native apparemment saine peut être concernée.", correct: true, correction: "Vrai. Le cours lui attribue 40 % des situations dans cette répartition." },
      { text: "Une prothèse valvulaire exclut la survenue d’une EI.", correct: false, correction: "Faux. Au contraire, le corps étranger est un facteur de risque." },
      { text: "L’adhésion plaquettaire empêche nécessairement toute végétation.", correct: false, correction: "Faux. Le schéma indique qu’elle participe à la formation de la végétation." },
      { text: "La formation de végétations exclut toute diffusion bactérienne.", correct: false, correction: "Faux. Le schéma illustre une diffusion continue, avec bactériémie et localisations secondaires." },
    ],
    explanation: "Le support montre une cascade locale (endothélium, fibrine, bactéries, inflammation, plaquettes) suivie de complications à distance."
  },
  {
    id: 39,
    type: "QCM",
    question: "Quelle complication mécanique cardiaque est particulièrement associée à une perforation de valve dans les notes ?",
    options: [
      { text: "Une carie dentaire.", correct: false, correction: "Faux. La carie peut être une porte d’entrée mais pas la conséquence mécanique visée." },
      { text: "Une arthrite isolée du genou.", correct: false, correction: "Faux. Ce n’est pas la conséquence valvulaire du cours." },
      { text: "Une rhinite allergique.", correct: false, correction: "Faux. Cette affection n’explique pas l’altération d’une valve." },
      { text: "Une conjonctivite de l’enfant.", correct: false, correction: "Faux. Ce signe n’est pas lié à la perforation décrite." },
      { text: "Une importante insuffisance cardiaque.", correct: true, correction: "Vrai. La destruction valvulaire peut compromettre la fonction cardiaque." },
    ],
    explanation: "Une végétation extensive peut ulcérer ou perforer la valve et déclencher une insuffisance cardiaque majeure."
  },
  {
    id: 40,
    type: "QRM",
    question: "Au sujet de la discussion thérapeutique des EI compliquées, quelles propositions sont mentionnées ?",
    options: [
      { text: "Une chirurgie peut être envisagée en cas de destruction valvulaire sévère.", correct: true, correction: "Vrai. Le support le mentionne après la description des perforations." },
      { text: "Une valve native apparemment saine ne peut jamais présenter d’endocardite.", correct: false, correction: "Faux. Le cours évoque 40 % de situations sur valves natives apparemment saines." },
      { text: "Le microbiologiste peut participer à cette discussion.", correct: true, correction: "Vrai. Le microbiologiste est l’un des spécialistes cités." },
      { text: "Seul un chirurgien intervient dans la décision, sans autre spécialité.", correct: false, correction: "Faux. La prof cite une équipe pluridisciplinaire." },
      { text: "Le cardiologue et l’infectiologue participent aux échanges décrits.", correct: true, correction: "Vrai. Ces deux disciplines sont mentionnées avec le chirurgien cardiaque." },
    ],
    explanation: "La prise en charge complexe peut être discutée en RCP associant cardiologue, infectiologue, chirurgien cardiaque et microbiologiste."
  },
  {
    id: 41,
    type: "QCM",
    question: "Quel signe neurologique doit faire rechercher une endocardite dans le raisonnement du cours ?",
    options: [
      { text: "Une migraine habituelle sans autre signe.", correct: false, correction: "Faux. Le cours insiste sur l’association d’un événement neurologique et d’une fièvre." },
      { text: "Un accident vasculaire cérébral associé à de la fièvre.", correct: true, correction: "Vrai. Un AVC fébrile doit faire évoquer une EI avec embole septique." },
      { text: "Une baisse isolée de l’audition sans fièvre.", correct: false, correction: "Faux. Ce n’est pas le signal d’alerte défini dans le support." },
      { text: "Une simple myopie ancienne.", correct: false, correction: "Faux. La myopie n’est pas reliée ici aux emboles infectieux." },
      { text: "Une paresthésie isolée survenue après une position prolongée.", correct: false, correction: "Faux. Ce n’est pas le tableau neurologique d’alerte cité." },
    ],
    explanation: "L’AVC est normalement non fébrile dans le raisonnement du cours ; une association AVC + fièvre impose d’évoquer une endocardite."
  },
  {
    id: 42,
    type: "QRM",
    question: "Quelles complications ou localisations secondaires d’EI sont citées ?",
    options: [
      { text: "Une spondylodiscite.", correct: true, correction: "Vrai. Un embole peut se fixer sur la colonne vertébrale." },
      { text: "Des emboles rénaux.", correct: true, correction: "Vrai. Le rein est l’une des localisations citées." },
      { text: "Des atteintes des vaisseaux de l’œil.", correct: true, correction: "Vrai. Une atteinte ophtalmologique embolique est décrite." },
      { text: "Un accident vasculaire cérébral.", correct: true, correction: "Vrai. Il fait partie des complications neurologiques majeures." },
      { text: "Une absence systématique d’atteinte extracardiaque.", correct: false, correction: "Faux. Le cours insiste au contraire sur les complications à distance." },
    ],
    explanation: "Les emboles issus des végétations peuvent atteindre cerveau, colonne vertébrale, rein ou territoire ophtalmologique."
  },
  {
    id: 43,
    type: "QCM",
    question: "À quoi la formation de complexes immuns circulants est-elle associée dans les notes ?",
    options: [
      { text: "À la disparition obligatoire de toute réaction inflammatoire.", correct: false, correction: "Faux. Les complexes immuns contribuent à des manifestations inflammatoires." },
      { text: "À une protection parfaite de la valve contre les bactéries.", correct: false, correction: "Faux. La lésion valvulaire demeure possible." },
      { text: "À une stérilisation immédiate du sang.", correct: false, correction: "Faux. Ils ne sont pas décrits comme une méthode de stérilisation." },
      { text: "À des lésions inflammatoires de type vascularite.", correct: true, correction: "Vrai. Le cours fait explicitement ce lien." },
      { text: "À une infection nécessairement virale.", correct: false, correction: "Faux. Ils peuvent apparaître dans une endocardite bactérienne." },
    ],
    explanation: "La libération d’antigènes et la formation de complexes immuns circulants peuvent déclencher des lésions de vascularite."
  },
  {
    id: 44,
    type: "QRM",
    question: "Concernant les conséquences des végétations infectées, quelles propositions sont exactes ?",
    options: [
      { text: "Elles peuvent altérer la fonction valvulaire.", correct: true, correction: "Vrai. Les perforations peuvent mener à une insuffisance cardiaque." },
      { text: "Elles peuvent entretenir la bactériémie.", correct: true, correction: "Vrai. Les notes décrivent une source persistante de bactéries." },
      { text: "Elles empêchent toute embolie par définition.", correct: false, correction: "Faux. Les emboles issus des végétations sont une complication caractéristique du cours." },
      { text: "Elles peuvent provoquer des complications vasculaires à distance.", correct: true, correction: "Vrai. C’est le mécanisme des foyers secondaires." },
      { text: "Les complexes immuns circulants ne peuvent pas entraîner de vascularite.", correct: false, correction: "Faux. Le support décrit précisément des manifestations de vascularite liées aux complexes immuns." },
    ],
    explanation: "Les trois grands risques du support sont l’insuffisance cardiaque, les embolies infectieuses et les lésions inflammatoires immunologiques."
  },
  {
    id: 45,
    type: "QCM",
    question: "Quel agent est particulièrement associé à la forme aiguë d’endocardite dans les notes ?",
    options: [
      { text: "Streptococcus mitis.", correct: false, correction: "Faux. S. mitis est un streptocoque oral davantage associé à l’évolution subaiguë." },
      { text: "Streptococcus oralis.", correct: false, correction: "Faux. S. oralis est un exemple de streptocoque viridans." },
      { text: "Staphylococcus aureus.", correct: true, correction: "Vrai. Le staphylocoque doré est présenté comme très virulent et lié à la forme aiguë." },
      { text: "Streptococcus gallolyticus.", correct: false, correction: "Faux. Le germe est associé à la flore digestive et au bilan colique." },
      { text: "Tropheryma whipplei.", correct: false, correction: "Faux. Il est cité pour les hémocultures négatives." },
    ],
    explanation: "La forme aiguë évolue en quelques jours avec fièvre élevée et risque de sepsis ; S. aureus en est l’agent typique selon le cours."
  },
  {
    id: 46,
    type: "QRM",
    question: "Parmi les caractéristiques de l’endocardite subaiguë (maladie d’Osler), lesquelles sont citées ?",
    options: [
      { text: "Une évolution sur plusieurs semaines ou mois.", correct: true, correction: "Vrai. L’installation lente est centrale dans cette forme." },
      { text: "Une asthénie et un amaigrissement.", correct: true, correction: "Vrai. Ces signes d’altération de l’état général sont détaillés." },
      { text: "Une fièvre obligatoirement supérieure à 40 °C.", correct: false, correction: "Faux. La fébricule est au contraire habituelle dans la description." },
      { text: "La maladie d’Osler impose une fièvre constante à 40 °C.", correct: false, correction: "Faux. Une fébricule autour de 38 °C est décrite." },
      { text: "Des streptocoques oraux ou viridans parfois en cause.", correct: true, correction: "Vrai. Ils sont décrits comme des germes peu virulents impliqués." },
    ],
    explanation: "La maladie d’Osler désigne la forme subaiguë, peu bruyante, parfois révélée par fatigue, anorexie, amaigrissement, fébricule et souffle."
  },
  {
    id: 47,
    type: "QCM",
    question: "Quelle évolution temporelle évoque le plus la forme aiguë d’endocardite bactérienne ?",
    options: [
      { text: "Une aggravation en quelques jours.", correct: true, correction: "Vrai. Le support insiste sur la rapidité de la forme aiguë." },
      { text: "Une évolution exclusivement sur plusieurs années.", correct: false, correction: "Faux. L’évolution en mois est plutôt évoquée pour la forme subaiguë." },
      { text: "Une évolution toujours sans fièvre.", correct: false, correction: "Faux. Une forte fièvre est au contraire typique." },
      { text: "Une absence permanente de risque de sepsis.", correct: false, correction: "Faux. Le sepsis grave est une complication possible." },
      { text: "Une guérison sans traitement décrite comme constante.", correct: false, correction: "Faux. Les notes décrivent la nécessité de prélèvements et d’antibiothérapie." },
    ],
    explanation: "La forme aiguë est rapidement évolutive, peut donner 39 °C, des frissons et un sepsis sévère."
  },
  {
    id: 48,
    type: "QRM",
    question: "Concernant la différence de prise en charge microbiologique entre forme subaiguë et forme aiguë, quelles propositions correspondent au support ?",
    options: [
      { text: "En forme subaiguë sans urgence vitale, on privilégie l’identification du germe avant traitement.", correct: true, correction: "Vrai. Le support recommande d’abord des prélèvements si l’état est stable." },
      { text: "Dans la forme aiguë, une antibiothérapie probabiliste est instaurée rapidement après les premiers prélèvements.", correct: true, correction: "Vrai. Le cours parle d’antibiothérapie probabiliste sans retard injustifié." },
      { text: "Une première paire d’hémocultures est prélevée avant l’antibiothérapie dans la forme aiguë décrite.", correct: true, correction: "Vrai. La description indique de prélever la première paire avant le traitement." },
      { text: "Dans la forme subaiguë, il faut toujours débuter un antibiotique avant toute hémoculture.", correct: false, correction: "Faux. C’est l’inverse de la conduite décrite hors urgence." },
      { text: "Dans la forme subaiguë, répéter les hémocultures est interdit.", correct: false, correction: "Faux. Le support précise qu’on peut répéter les prélèvements." },
    ],
    explanation: "Le tempo clinique modifie l’urgence du traitement : prélèvements préalables lorsqu’ils sont possibles, puis antibiothérapie rapide si forme aiguë grave."
  },
  {
    id: 49,
    type: "QCM",
    question: "Quel ensemble de signes suffit à faire évoquer une EI dans les cas cliniques du cours ?",
    options: [
      { text: "Isolément une douleur de hanche sans fièvre.", correct: false, correction: "Faux. Ce tableau n’est pas celui mis en avant par la prof." },
      { text: "Une sécheresse oculaire seule.", correct: false, correction: "Faux. Le raisonnement du cours repose sur des signes cardiaques et infectieux." },
      { text: "Une diarrhée sans autre signe.", correct: false, correction: "Faux. Le seul trouble digestif ne suffit pas au tableau évocateur cité." },
      { text: "Une otalgie isolée.", correct: false, correction: "Faux. Cette association ne correspond pas au signal d’alerte." },
      { text: "Une fièvre associée à un souffle cardiaque.", correct: true, correction: "Vrai. La prof insiste précisément sur l’association fièvre + souffle." },
    ],
    explanation: "Fièvre et souffle cardiaque doivent faire évoquer l’endocardite infectieuse et conduire à des examens microbiologiques et cardiaques."
  },
  {
    id: 50,
    type: "QRM",
    question: "Quelles manifestations cliniques peuvent accompagner une EI selon les notes ?",
    options: [
      { text: "Une splénomégalie.", correct: true, correction: "Vrai. Elle est citée parmi les signes à rechercher." },
      { text: "Une modification d’un souffle cardiaque préexistant.", correct: true, correction: "Vrai. Le support insiste sur l’apparition ou la modification d’un souffle." },
      { text: "Une altération de l’état général n’est jamais retrouvée au cours d’une EI.", correct: false, correction: "Faux. Le cours mentionne au contraire asthénie, anorexie et amaigrissement." },
      { text: "Une absence obligatoire de tout signe cutané.", correct: false, correction: "Faux. Des manifestations cutanées liées à des mécanismes inflammatoires sont décrites." },
      { text: "Une endocardite ne peut jamais provoquer d’atteinte neurologique.", correct: false, correction: "Faux. Des emboles peuvent notamment donner un AVC fébrile." },
    ],
    explanation: "Au-delà du couple fièvre–souffle, rechercher AEG, splénomégalie, changement d’auscultation et signes d’embolies."
  },
  {
    id: 51,
    type: "QCM",
    question: "Selon le cours, faut-il attendre un pic de fièvre pour effectuer des hémocultures en cas de suspicion d’EI ?",
    options: [
      { text: "Oui, toujours uniquement à 40 °C.", correct: false, correction: "Faux. Le support ne prescrit pas d’attendre une hyperthermie majeure." },
      { text: "Oui, sauf si le patient est porteur de cathéter.", correct: false, correction: "Faux. Aucune exception de ce type n’est formulée." },
      { text: "Oui, car la bactériémie est nécessairement intermittente.", correct: false, correction: "Faux. Le texte précise une bactériémie généralement constante." },
      { text: "Non, la bactériémie est généralement constante.", correct: true, correction: "Vrai. C’est l’explication donnée pour ne pas attendre le pic fébrile." },
      { text: "Non, car les hémocultures sont inutiles.", correct: false, correction: "Faux. Au contraire, les hémocultures sont centrales pour identifier le germe." },
    ],
    explanation: "La bactériémie d’une EI est généralement constante ; les hémocultures peuvent donc être faites sans attendre le pic de température."
  },
  {
    id: 52,
    type: "QRM",
    question: "À propos du prélèvement d’hémocultures lors d’une suspicion d’EI, quelles propositions sont exactes selon le support ?",
    options: [
      { text: "Trois paires d’hémocultures sont habituellement réalisées.", correct: true, correction: "Vrai. C’est le nombre indiqué dans les notes." },
      { text: "Chaque paire comporte un flacon aérobie et un flacon anaérobie.", correct: true, correction: "Vrai. La constitution de la paire est précisément décrite." },
      { text: "Les paires sont espacées d’au moins une heure.", correct: true, correction: "Vrai. C’est l’intervalle minimal cité." },
      { text: "Les trois paires doivent obligatoirement être prélevées dans la même minute.", correct: false, correction: "Faux. Le texte indique au contraire un espacement d’au moins une heure." },
      { text: "Les trois paires sont prélevées sur une période de plusieurs semaines.", correct: false, correction: "Faux. Le protocole cité se déroule sur une période de 24 heures." },
    ],
    explanation: "Le support demande trois paires (aérobie + anaérobie), séparées par au moins une heure et prélevées au cours de vingt-quatre heures."
  },
  {
    id: 53,
    type: "QCM",
    question: "Dans quel ordre les deux flacons sont-ils remplis lors d’une paire d’hémocultures, selon le cours ?",
    options: [
      { text: "Aérobie, puis anaérobie.", correct: true, correction: "Vrai. C’est l’ordre recommandé dans les notes." },
      { text: "Anaérobie, puis aérobie.", correct: false, correction: "Faux. L’ordre décrit est inverse afin de limiter l’entrée d’air dans l’anaérobie." },
      { text: "L’ordre est imposé par le groupe ABO du patient.", correct: false, correction: "Faux. Le groupe sanguin n’intervient pas dans cette consigne." },
      { text: "Un seul flacon anaérobie est nécessaire.", correct: false, correction: "Faux. Le protocole comprend les deux types de flacons." },
      { text: "Toujours un flacon de mycologie à la place.", correct: false, correction: "Faux. Les flacons de mycologie ne remplacent pas systématiquement ceux de routine." },
    ],
    explanation: "On remplit d’abord le flacon aérobie puis l’anaérobie, notamment pour limiter l’introduction d’air dans ce dernier."
  },
  {
    id: 54,
    type: "QRM",
    question: "Concernant les modalités pratiques des hémocultures, quelles propositions sont exactes ?",
    options: [
      { text: "L’objectif est d’environ 10 mL de sang par flacon.", correct: true, correction: "Vrai. Le cours fixe cette cible de remplissage." },
      { text: "Un volume de 8 mL par flacon reste généralement acceptable selon le support.", correct: true, correction: "Vrai. C’est le seuil inférieur présenté comme acceptable." },
      { text: "Un prélèvement sur veine périphérique est privilégié.", correct: true, correction: "Vrai. Le support préfère cette voie au cathéter." },
      { text: "Un très faible volume de sang augmente la sensibilité microbiologique.", correct: false, correction: "Faux. Le texte associe au contraire un volume trop faible au risque de faux négatif." },
      { text: "Une hémoculture réalisée sur cathéter peut être contaminée par des bactéries cutanées.", correct: true, correction: "Vrai. La colonisation du cathéter peut compliquer l’interprétation." },
    ],
    explanation: "La qualité d’hémoculture dépend du nombre de paires, de l’asepsie, de la voie de prélèvement et d’un volume sanguin suffisant."
  },
  {
    id: 55,
    type: "QCM",
    question: "Quelle quantité par flacon constitue la cible de remplissage des hémocultures dans ce cours ?",
    options: [
      { text: "1 mL.", correct: false, correction: "Faux. Le risque de faux négatifs augmente si le volume est insuffisant." },
      { text: "3 mL.", correct: false, correction: "Faux. Cette quantité est inférieure à la cible indiquée." },
      { text: "10 mL.", correct: true, correction: "Vrai. C’est le volume recommandé par les notes." },
      { text: "50 mL.", correct: false, correction: "Faux. Cette quantité dépasse très largement la cible mentionnée." },
      { text: "100 mL.", correct: false, correction: "Faux. Le support ne prévoit pas un tel volume par flacon." },
    ],
    explanation: "Cible : environ 10 mL par flacon ; 8 mL est généralement acceptable selon le cours."
  },
  {
    id: 56,
    type: "QRM",
    question: "Au sujet de l’interprétation des hémocultures positives, quelles propositions sont exactes ?",
    options: [
      { text: "Deux paires positives pour le même germe constituent un argument microbiologique habituel.", correct: true, correction: "Vrai. C’est le repère diagnostique microbiologique du cours." },
      { text: "Un seul flacon avec Staphylococcus aureus doit être considéré avec sérieux.", correct: true, correction: "Vrai. S. aureus est cité comme germe très pathogène." },
      { text: "Un staphylocoque commensal isolé doit toujours être traité exactement comme S. aureus sans nuance.", correct: false, correction: "Faux. Les notes opposent les pathogènes francs et les germes commensaux." },
      { text: "Un seul flacon positif à Salmonella est nécessairement sans conséquence.", correct: false, correction: "Faux. Le cours demande de prendre ce résultat au sérieux même isolé." },
      { text: "Un staphylocoque à coagulase négative commensal demande une interprétation prudente.", correct: true, correction: "Vrai. S. epidermidis est cité comme exemple d’interprétation prudente." },
    ],
    explanation: "Il faut interpréter le nombre de flacons positifs en fonction de la virulence du germe et du risque de contamination."
  },
  {
    id: 57,
    type: "QCM",
    question: "Quel délai d’incubation habituel d’un flacon d’hémoculture est donné en rappel dans les notes ?",
    options: [
      { text: "Une heure.", correct: false, correction: "Faux. Une heure correspond plutôt à l’espacement des paires." },
      { text: "Cinq jours.", correct: true, correction: "Vrai. Le support indique cinq jours pour l’incubation habituelle." },
      { text: "Dix à quinze jours pour tous les germes.", correct: false, correction: "Faux. Dix à quinze jours sont associés aux HACCEK." },
      { text: "Trente jours.", correct: false, correction: "Faux. Ce délai n’est pas le standard présenté." },
      { text: "Un an.", correct: false, correction: "Faux. Il ne figure pas dans le protocole." },
    ],
    explanation: "Incubation habituelle : cinq jours ; prolongation à dix–quinze jours mentionnée pour les bactéries HACCEK."
  },
  {
    id: 58,
    type: "QRM",
    question: "Concernant les hémocultures négatives malgré une forte suspicion d’EI, quelles propositions figurent dans le cours ?",
    options: [
      { text: "Une nouvelle paire bien remplie peut être prélevée après 48 heures selon le contexte.", correct: true, correction: "Vrai. C’est la conduite proposée dans le support." },
      { text: "Une antibiothérapie préalable ne peut pas influer sur les hémocultures.", correct: false, correction: "Faux. Elle peut négativer les hémocultures, d’où la notion d’infection décapitée." },
      { text: "Une interruption encadrée de 72 heures est parfois évoquée après antibiothérapie préalable.", correct: true, correction: "Vrai. Cette durée est évoquée par les notes, dans un cadre encadré." },
      { text: "Une interruption d’antibiotiques est systématiquement obligatoire même en urgence vitale.", correct: false, correction: "Faux. Le texte exclut explicitement le retard de traitement urgent." },
      { text: "L’arrêt éventuel ne doit jamais retarder un traitement nécessaire en urgence.", correct: true, correction: "Vrai. Le support insiste sur cette limite de sécurité." },
    ],
    explanation: "Le cours mentionne un nouveau prélèvement à 48 h selon le contexte et parfois une interruption encadrée de 72 h, sans retarder un traitement urgent."
  },
  {
    id: 59,
    type: "QCM",
    question: "Dans quel contexte décrit par la prof peut-on administrer un antibiotique avant de réaliser les hémocultures ?",
    options: [
      { text: "Devant toute fièvre isolée à 37,8 °C.", correct: false, correction: "Faux. Ce n’est pas l’urgence citée." },
      { text: "Devant un souffle ancien chez une personne bien portante.", correct: false, correction: "Faux. Le cours recommande habituellement les prélèvements avant traitement." },
      { text: "Devant une EI subaiguë stable depuis trois mois.", correct: false, correction: "Faux. En l’absence d’urgence, il faut identifier le germe avant de traiter." },
      { text: "Devant une suspicion de méningococcémie grave avec purpura fulminans.", correct: true, correction: "Vrai. Le texte fait de la priorité vitale une exception aux prélèvements préalables." },
      { text: "Devant toute carie sans signe général.", correct: false, correction: "Faux. Le support ne décrit pas une telle indication." },
    ],
    explanation: "Une suspicion d’infection grave à Neisseria meningitidis avec purpura fulminans peut justifier une antibiothérapie immédiate avant prélèvement dans le raisonnement de la prof."
  },
  {
    id: 60,
    type: "QRM",
    question: "Quelles pratiques de laboratoire sont mentionnées face à une suspicion d’EI ?",
    options: [
      { text: "Signaler la suspicion au laboratoire.", correct: true, correction: "Vrai. Les notes recommandent d’avertir le laboratoire." },
      { text: "L’incubation ne doit jamais dépasser cinq jours, même pour HACCEK.", correct: false, correction: "Faux. Les HACCEK justifient une incubation prolongée jusqu’à 10 à 15 jours." },
      { text: "Attendre systématiquement 40 °C pour prévenir le laboratoire.", correct: false, correction: "Faux. La bactériémie est décrite comme généralement constante." },
      { text: "Privilégier un prélèvement avant antibiothérapie lorsque cela est possible.", correct: true, correction: "Vrai. C’est le principe détaillé dans les sections diagnostiques." },
      { text: "Tenir compte des bactéries à croissance lente ou difficile.", correct: true, correction: "Vrai. Ces germes justifient des recherches adaptées." },
    ],
    explanation: "La qualité de la démarche associe le signalement au laboratoire, les cultures bien prélevées et des méthodes adaptées aux agents difficiles."
  },
  {
    id: 61,
    type: "QCM",
    question: "Quel examen est généralement réalisé en première intention dans l’imagerie cardiaque d’une EI selon le support ?",
    options: [
      { text: "L’échographie transthoracique (ETT).", correct: true, correction: "Vrai. C’est l’examen cardiaque décrit en première ligne." },
      { text: "La radiographie panoramique dentaire.", correct: false, correction: "Faux. Il sert à rechercher une porte d’entrée bucco-dentaire." },
      { text: "La coloscopie.", correct: false, correction: "Faux. Elle sert au bilan d’une éventuelle origine digestive." },
      { text: "La fibroscopie bronchique.", correct: false, correction: "Faux. Cet examen n’est pas présenté comme l’imagerie cardiaque initiale." },
      { text: "L’ECBU.", correct: false, correction: "Faux. Il explore une éventuelle porte d’entrée urinaire." },
    ],
    explanation: "L’ETT est l’examen cardiaque de première intention ; si elle est insuffisante ou si la suspicion reste forte, l’ETO peut être nécessaire."
  },
  {
    id: 62,
    type: "QRM",
    question: "Concernant l’échographie cardiaque et ses indications, quelles propositions sont exactes ?",
    options: [
      { text: "L’ETT est généralement l’examen initial.", correct: true, correction: "Vrai. C’est l’ordre d’examens énoncé." },
      { text: "L’échographie transœsophagienne peut compléter une ETT peu contributive.", correct: true, correction: "Vrai. L’ETO est envisagée si le doute persiste ou si les lésions sont mal visualisées." },
      { text: "L’échographie cardiaque ne permet jamais d’observer une végétation.", correct: false, correction: "Faux. La végétation est une des lésions recherchées." },
      { text: "Une ETT normale élimine toujours formellement une EI selon le support.", correct: false, correction: "Faux. Le cours préconise une ETO quand la suspicion reste forte malgré l’ETT." },
      { text: "L’examen peut rechercher un abcès ou une désinsertion de prothèse valvulaire.", correct: true, correction: "Vrai. Ces deux complications sont explicitement citées." },
    ],
    explanation: "Le bilan échographique recherche végétations, abcès et complications prothétiques, avec ETT puis ETO si nécessaire."
  },
  {
    id: 63,
    type: "QCM",
    question: "Quelle méthode est citée pour diagnostiquer une endocardite à Tropheryma whipplei lorsque les cultures habituelles ne poussent pas ?",
    options: [
      { text: "La coproculture standard seule.", correct: false, correction: "Faux. Le cours indique que le germe ne pousse pas dans les conditions usuelles." },
      { text: "L’ECBU isolé.", correct: false, correction: "Faux. L’ECBU est utilisé pour explorer une porte urinaire, non ce germe en routine." },
      { text: "Le dosage d’une CRP seule.", correct: false, correction: "Faux. La CRP ne permet pas l’identification microbiologique." },
      { text: "La culture habituelle de cinq jours seule.", correct: false, correction: "Faux. L’absence de pousse motive précisément une méthode moléculaire." },
      { text: "La PCR ciblant Tropheryma whipplei.", correct: true, correction: "Vrai. La section biologique mentionne la PCR comme méthode diagnostique." },
    ],
    explanation: "Le cours insiste sur l’intérêt de la PCR dans les hémocultures négatives, en particulier pour T. whipplei."
  },
  {
    id: 64,
    type: "QRM",
    question: "En cas d’EI à hémocultures négatives, quels examens ou prélèvements sont envisagés ?",
    options: [
      { text: "Une sérologie Coxiella burnetii.", correct: true, correction: "Vrai. Elle est explicitement mentionnée." },
      { text: "La sérologie Bartonella est sans intérêt pour les EI à hémocultures négatives.", correct: false, correction: "Faux. Le cours la cite parmi les sérologies complémentaires." },
      { text: "L’absence de toute investigation après une culture négative.", correct: false, correction: "Faux. Il faut poursuivre l’enquête avec des méthodes adaptées." },
      { text: "Des PCR ciblées, notamment sur tube EDTA pour la PCR sanguine.", correct: true, correction: "Vrai. Les notes précisent des PCR spécifiques sur prélèvements appropriés." },
      { text: "Une valve opératoire ne peut pas être adressée au laboratoire.", correct: false, correction: "Faux. Le cours décrit au contraire la culture et la PCR sur les valves." },
    ],
    explanation: "Sérologies, PCR ciblées et analyses des valves complètent le diagnostic quand les cultures sanguines ne permettent pas d’identifier le germe."
  },
  {
    id: 65,
    type: "QCM",
    question: "Quel examen moléculaire est envisagé sur une valve si les PCR spécifiques restent négatives ?",
    options: [
      { text: "Une PCR ciblant la beta-hCG.", correct: false, correction: "Faux. La beta-hCG n’est pas l’objectif de ce diagnostic." },
      { text: "Une PCR bactérienne du gène de l’ARN ribosomique 16S.", correct: true, correction: "Vrai. C’est l’approche large décrite après les PCR spécifiques." },
      { text: "Une PCR de l’antigène ABO.", correct: false, correction: "Faux. Le cours n’utilise pas le groupe sanguin à cet effet." },
      { text: "Une PCR exclusivement virale de la rougeole.", correct: false, correction: "Faux. Le support cherche ici à identifier une bactérie inconnue." },
      { text: "Aucun examen supplémentaire.", correct: false, correction: "Faux. Le texte décrit une PCR 16S suivie si positive d’un séquençage." },
    ],
    explanation: "Sur la valve : PCR spécifiques d’abord, puis PCR du gène de l’ARNr 16S si elles sont négatives, suivie d’un séquençage si la PCR est positive."
  },
  {
    id: 66,
    type: "QRM",
    question: "Concernant les analyses microbiologiques des valves opératoires, quelles propositions correspondent au cours ?",
    options: [
      { text: "La culture peut utiliser des géloses au sang.", correct: true, correction: "Vrai. Cette gélose est citée, avec la gélose au sang cuit." },
      { text: "Des cultures aérobies et anaérobies peuvent être réalisées.", correct: true, correction: "Vrai. Les deux environnements de culture sont mentionnés." },
      { text: "Des PCR spécifiques Coxiella et Bartonella sont citées.", correct: true, correction: "Vrai. Il s’agit des PCR envisagées dans le support." },
      { text: "La PCR 16S est décrite comme très sensible et infaillible.", correct: false, correction: "Faux. Le texte précise au contraire que cette technique n’est pas très sensible." },
      { text: "Un examen anatomopathologique peut contribuer au bilan.", correct: true, correction: "Vrai. Le cours mentionne cet examen comme complément d’orientation." },
    ],
    explanation: "Les valves opératoires peuvent être mises en culture, examinées par PCR spécifiques ou 16S et étudiées en anatomopathologie."
  },
  {
    id: 67,
    type: "QCM",
    question: "À quoi sert la phase de séquençage mentionnée après une PCR bactérienne 16S positive ?",
    options: [
      { text: "À mesurer la fréquence cardiaque.", correct: false, correction: "Faux. Le séquençage est un examen microbiologique." },
      { text: "À déterminer la taille d’une végétation échographique.", correct: false, correction: "Faux. La taille de la végétation s’évalue par l’imagerie." },
      { text: "À identifier la bactérie impliquée.", correct: true, correction: "Vrai. Le support décrit cette étape pour déterminer l’identité bactérienne." },
      { text: "À remplacer l’auscultation cardiaque.", correct: false, correction: "Faux. L’examen clinique demeure nécessaire." },
      { text: "À rechercher uniquement une origine urinaire.", correct: false, correction: "Faux. Il ne sert pas uniquement aux germes urinaires." },
    ],
    explanation: "Après une PCR 16S positive, une étape de séquençage sert à identifier l’espèce bactérienne détectée."
  },
  {
    id: 68,
    type: "QRM",
    question: "Quelles associations entre germe et bilan de porte d’entrée sont décrites ?",
    options: [
      { text: "Streptocoques oraux : examen bucco-dentaire et panoramique dentaire.", correct: true, correction: "Vrai. Cela explore le réservoir oropharyngé." },
      { text: "La coloscopie est l’examen systématique de la porte d’entrée des streptocoques oraux.", correct: false, correction: "Faux. Leur origine est bucco-dentaire ; la coloscopie est surtout évoquée pour S. gallolyticus." },
      { text: "Enterococcus faecalis : recherche d’une origine digestive et ECBU.", correct: true, correction: "Vrai. Les deux examens sont décrits dans cette situation." },
      { text: "Staphylococcus epidermidis : recherche d’une infection génitale obligatoire.", correct: false, correction: "Faux. Le support l’associe plutôt à la peau et aux dispositifs invasifs." },
      { text: "Suspicion d’infection sur cathéter : examen du point de ponction et éventuel Doppler.", correct: true, correction: "Vrai. Le Doppler peut rechercher un thrombus sur le cathéter." },
    ],
    explanation: "L’étiologie microbiologique guide l’enquête de foyer initial : dents, tube digestif, urines, peau et cathéters."
  },
  {
    id: 69,
    type: "QCM",
    question: "Quelle conduite est mentionnée pour un cathéter suspect d’être à l’origine d’une EI ?",
    options: [
      { text: "Le conserver systématiquement sans examen.", correct: false, correction: "Faux. Le matériel peut être un foyer infectieux important." },
      { text: "Ne jamais inspecter son point d’entrée.", correct: false, correction: "Faux. L’examen du point d’entrée est cité." },
      { text: "Remplacer toutes les hémocultures par une coproculture.", correct: false, correction: "Faux. La coproculture ne remplace pas les hémocultures." },
      { text: "L’examiner et, si indiqué, le retirer et l’envoyer au laboratoire.", correct: true, correction: "Vrai. C’est la démarche rapportée dans les notes." },
      { text: "Ignorer toute douleur ou inflammation locale.", correct: false, correction: "Faux. Ces signes sont précisément à rechercher." },
    ],
    explanation: "Pour une origine sur cathéter, on examine le site, recherche si nécessaire un thrombus au Doppler et retire/analyse le matériel si indiqué."
  },
  {
    id: 70,
    type: "QRM",
    question: "À propos de la recherche de la porte d’entrée, quelles propositions sont exactes ?",
    options: [
      { text: "Un examen cutané peut retrouver une lésion infectée.", correct: true, correction: "Vrai. La peau est une porte d’entrée décrite pour les staphylocoques." },
      { text: "Un panoramique dentaire est pertinent pour une origine bucco-dentaire.", correct: true, correction: "Vrai. Le cours cite cet examen avec le bilan bucco-dentaire." },
      { text: "Une porte d’entrée n’a aucun intérêt dès lors que les hémocultures sont positives.", correct: false, correction: "Faux. Le support insiste sur la nécessité de traiter le point de départ." },
      { text: "Une coloscopie peut être réalisée si une origine digestive est suspectée.", correct: true, correction: "Vrai. Il s’agit d’un des examens étiologiques cités." },
      { text: "Un ECBU normal prouve toujours qu’aucune porte d’entrée n’existe.", correct: false, correction: "Faux. Le cours recherche aussi des portes d’entrée digestives, dentaires, cutanées et liées au matériel." },
    ],
    explanation: "Identifier et traiter la porte d’entrée est indispensable au contrôle de la bactériémie et à la prévention de sa persistance."
  },
  {
    id: 71,
    type: "QCM",
    question: "Cas de la prof : un homme de 19 ans s’injectant de l’héroïne présente depuis trois jours 39 °C, frissons, traces de piqûres et souffle d’insuffisance tricuspidienne. Quel diagnostic est attendu ?",
    options: [
      { text: "Endocardite aiguë bactérienne tricuspidienne.", correct: true, correction: "Vrai. C’est la réponse A donnée par la prof pour le premier cas." },
      { text: "Endocardite subaiguë de type Osler.", correct: false, correction: "Faux. L’évolution de trois jours et la forte fièvre orientent vers une forme aiguë." },
      { text: "Pneumopathie isolée.", correct: false, correction: "Faux. Le souffle tricuspidien et les injections orientent vers le cœur." },
      { text: "Infection urinaire isolée.", correct: false, correction: "Faux. Aucun signe fonctionnel urinaire n’est au premier plan." },
      { text: "Érysipèle comme diagnostic principal.", correct: false, correction: "Faux. Le foyer cutané peut être une porte d’entrée, mais n’explique pas seul le tableau cardiaque." },
    ],
    explanation: "Cas clinique n°1 de la prof : EI aiguë de la tricuspide sur terrain d’injection intraveineuse."
  },
  {
    id: 72,
    type: "QRM",
    question: "Dans le cas de l’héroïnomane de 19 ans, quelles propositions sont conformes aux réponses de la prof ?",
    options: [
      { text: "La porte d’entrée retenue est cutanée.", correct: true, correction: "Vrai. La correction du cas clinique n°1 donne B : cutanée." },
      { text: "Staphylococcus aureus est l’agent le plus probable.", correct: true, correction: "Vrai. La correction donne B : S. aureus." },
      { text: "Une échographie cardiaque fait partie des examens de confirmation.", correct: true, correction: "Vrai. La correction donne l’échographie parmi les examens B et E." },
      { text: "La coproculture est l’examen central de confirmation.", correct: false, correction: "Faux. La correction ne retient pas la coproculture." },
      { text: "Il faut éviter les hémocultures en cas de suspicion d’EI tricuspidienne.", correct: false, correction: "Faux. La prof retient trois paires d’hémocultures parmi les examens confirmatoires." },
    ],
    explanation: "Cas 1, correction de la prof : diagnostic EI aiguë tricuspidienne ; porte cutanée ; examens échographie + hémocultures ; S. aureus."
  },
  {
    id: 73,
    type: "QCM",
    question: "Pour le cas clinique n°1, quel germe est retenu comme le plus probablement responsable par la prof ?",
    options: [
      { text: "Enterococcus faecalis.", correct: false, correction: "Faux. Ce germe est associé à une origine digestive/urinaire." },
      { text: "Staphylococcus aureus.", correct: true, correction: "Vrai. C’est la réponse B de la prof dans le cas d’EI aiguë chez l’usager de drogues IV." },
      { text: "Streptococcus gallolyticus.", correct: false, correction: "Faux. Ce germe oriente plutôt vers une porte digestive et un bilan colique." },
      { text: "Streptococcus viridans.", correct: false, correction: "Faux. Il est plus caractéristique de la forme subaiguë." },
      { text: "Tropheryma whipplei.", correct: false, correction: "Faux. Ce germe est recherché parmi les causes à hémocultures négatives." },
    ],
    explanation: "L’association injection IV, porte cutanée et EI tricuspidienne aiguë fait évoquer S. aureus dans les réponses du support."
  },
  {
    id: 74,
    type: "QRM",
    question: "Cas n°1 : quels éléments du tableau clinique favorisent une EI aiguë tricuspidienne selon l’interprétation du cours ?",
    options: [
      { text: "Une consommation de drogue par voie intraveineuse.", correct: true, correction: "Vrai. C’est le terrain habituel de l’EI droite décrite." },
      { text: "Un souffle d’insuffisance tricuspidienne.", correct: true, correction: "Vrai. C’est le signe valvulaire au cœur du cas." },
      { text: "Une évolution sur plusieurs mois avec seulement 37 °C.", correct: false, correction: "Faux. Ce n’est pas l’évolution aiguë de trois jours du cas." },
      { text: "Une évolution en trois jours exclut l’endocardite bactérienne aiguë.", correct: false, correction: "Faux. Elle est compatible avec le mode aigu qui progresse en quelques jours." },
      { text: "Des traces de piqûres et un cordon inflammatoire de l’avant-bras.", correct: true, correction: "Vrai. Ces lésions suggèrent la porte d’entrée cutanée." },
    ],
    explanation: "Le cas illustre les indices de terrain, de porte d’entrée et de localisation à réunir avant les examens complémentaires."
  },
  {
    id: 75,
    type: "QCM",
    question: "Cas de la prof : un homme de 75 ans a un mois de fièvre autour de 38 °C, un nouveau souffle mitral et un déficit brachio-facial. Quel diagnostic est retenu ?",
    options: [
      { text: "Une EI aiguë tricuspidienne.", correct: false, correction: "Faux. La prof ne retient pas cette forme aiguë droite dans le deuxième cas." },
      { text: "Une pneumopathie isolée.", correct: false, correction: "Faux. Le tableau cardiaque et neurologique oriente autrement." },
      { text: "Un érysipèle.", correct: false, correction: "Faux. Aucune lésion cutanée type érysipèle n’est donnée." },
      { text: "Une endocardite subaiguë (maladie d’Osler).", correct: true, correction: "Vrai. C’est la réponse B de la prof pour le cas clinique n°2." },
      { text: "Une infection urinaire isolée.", correct: false, correction: "Faux. Le souffle mitral et l’évolution prolongée font évoquer l’EI." },
    ],
    explanation: "Le cas n°2 associe évolution prolongée, nouveau souffle mitral et déficit neurologique compatible avec complication embolique, évocateurs de maladie d’Osler."
  },
  {
    id: 76,
    type: "QRM",
    question: "Dans le cas du patient de 75 ans, quels éléments expliquent le diagnostic retenu ?",
    options: [
      { text: "L’évolution de la fièvre sur environ un mois.", correct: true, correction: "Vrai. Cette durée évoque une forme subaiguë." },
      { text: "La présence d’un nouveau souffle au foyer mitral.", correct: true, correction: "Vrai. C’est le signe cardiaque nouveau décrit." },
      { text: "Un déficit neurologique avec image sylvienne gauche au scanner.", correct: true, correction: "Vrai. L’imagerie décrit une hypodensité sylvienne gauche." },
      { text: "L’absence totale d’altération de l’état général.", correct: false, correction: "Faux. L’altération de l’état général est au contraire le motif d’admission." },
      { text: "Une complication cérébrale élimine le diagnostic d’endocardite.", correct: false, correction: "Faux. Le cours décrit précisément les emboles cérébraux dans l’endocardite." },
    ],
    explanation: "Le cas 2 associe plusieurs semaines de symptômes généraux, un souffle mitral et un AVC fébrile, typiques du raisonnement enseigné."
  },
  {
    id: 77,
    type: "QCM",
    question: "Dans le cas clinique n°2, quel groupe de réponses la prof valide-t-elle devant des cocci à Gram positif en chaînettes ?",
    options: [
      { text: "Uniquement Staphylococcus aureus.", correct: false, correction: "Faux. Les staphylocoques ne sont pas les réponses retenues pour les cocci en chaînettes du cas." },
      { text: "Uniquement le staphylocoque à coagulase négative.", correct: false, correction: "Faux. Ce germe n’est pas retenu par la prof dans cette question." },
      { text: "Enterococcus faecalis, Streptococcus gallolyticus et Streptococcus viridans.", correct: true, correction: "Vrai. La prof coche A, D et E pour ce QCM clinique." },
      { text: "Seulement Candida spp.", correct: false, correction: "Faux. Candida n’est pas l’une des réponses microbiologiques de la question." },
      { text: "Uniquement Pseudomonas aeruginosa.", correct: false, correction: "Faux. Cet agent n’est pas proposé comme bonne réponse par le cours." },
    ],
    explanation: "Le deuxième cas se poursuit par des cocci à Gram positif en chaînettes : la correction attend A, D et E (E. faecalis, S. gallolyticus, viridans)."
  },
  {
    id: 78,
    type: "QRM",
    question: "Cas clinique n°2 : parmi les bilans de porte d’entrée proposés par la prof, lesquels sont retenus ?",
    options: [
      { text: "Une coloscopie.", correct: true, correction: "Vrai. C’est l’une des trois réponses sélectionnées par la prof." },
      { text: "Un ECBU.", correct: true, correction: "Vrai. C’est également une réponse validée par la correction." },
      { text: "Une aspiration bronchique.", correct: false, correction: "Faux. Cet examen ne figure pas parmi les bonnes réponses données." },
      { text: "Un panoramique dentaire.", correct: true, correction: "Vrai. Le support retient aussi cette recherche de porte d’entrée." },
      { text: "Une coproculture comme seule recherche nécessaire.", correct: false, correction: "Faux. Cette option n’est pas cochée dans les réponses du cours." },
    ],
    explanation: "Dans la correction du cas 2, la prof retient B, D et E à la question de porte d’entrée : coloscopie, ECBU et panoramique dentaire."
  },
  {
    id: 79,
    type: "QCM",
    question: "Dans la correction du deuxième cas clinique, quelle porte d’entrée est finalement jugée la plus probable ?",
    options: [
      { text: "Bucco-dentaire.", correct: false, correction: "Faux. Elle est envisagée dans le bilan, mais n’est pas la réponse finale du cas." },
      { text: "Cutanée.", correct: false, correction: "Faux. Ce n’est pas la porte d’entrée retenue dans la correction." },
      { text: "Digestive.", correct: true, correction: "Vrai. La réponse C (digestive) est explicitement retenue par la prof." },
      { text: "Urinaire.", correct: false, correction: "Faux. Un ECBU est recherché, mais l’origine retenue est digestive." },
      { text: "Veineuse.", correct: false, correction: "Faux. Aucun cathéter n’est décrit comme porte d’entrée principale du cas." },
    ],
    explanation: "Dans le cas n°2, la porte d’entrée jugée la plus probable par la prof est digestive, même si plusieurs bilans sont proposés."
  },
  {
    id: 80,
    type: "QRM",
    question: "Cas n°2 : quelles étiologies la prof demande-t-elle d’évoquer si toutes les hémocultures restent négatives après 48 heures ?",
    options: [
      { text: "Une infection décapitée par antibiothérapie préalable.", correct: true, correction: "Vrai. Cette cause est validée dans le QCM clinique." },
      { text: "Coxiella burnetii.", correct: true, correction: "Vrai. Elle fait partie des agents difficiles à cultiver retenus." },
      { text: "Bartonella spp.", correct: true, correction: "Vrai. La correction valide également les Bartonella." },
      { text: "Les bactéries du groupe HACEK.", correct: true, correction: "Vrai. La prof valide ce groupe de bactéries à pousse lente." },
      { text: "Tropheryma whipplei.", correct: true, correction: "Vrai. L’agent est cité dans les causes d’hémocultures négatives." },
    ],
    explanation: "La correction du cas 2 valide les cinq réponses A–E : antibiothérapie préalable, Coxiella, Bartonella, HACEK et T. whipplei."
  },
];