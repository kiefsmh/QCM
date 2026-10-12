export const meta = {
  title: 'Infections fongiques invasives',
}

export default [
  {
    id: 1,
    type: 'QCM',
    question: 'Quel principe guide le diagnostic d\'une infection fongique invasive ?',
    options: [
      { text: 'Considérer qu\'un biomarqueur positif suffit toujours à confirmer l\'invasion tissulaire', correct: false, correction: 'Non. Un biomarqueur peut être faussement positif et doit être interprété selon le terrain et les autres données.' },
      { text: 'Attendre systématiquement l\'identification d\'une colonie avant toute autre exploration', correct: false, correction: 'Non. Les méthodes directes, les biomarqueurs et les PCR ciblées peuvent être combinés selon la situation.' },
      { text: 'Réserver le diagnostic à la seule imagerie thoracique', correct: false, correction: 'Non. L\'imagerie oriente, mais n\'identifie pas à elle seule un champignon.' },
      { text: 'Écarter une mycose invasive dès que l\'examen direct est négatif', correct: false, correction: 'Non. La sensibilité de l\'examen direct est imparfaite.' },
      { text: 'Confronter les résultats mycologiques au contexte clinique et aux autres examens', correct: true, correction: 'Oui. Aucun test isolé ne suffit dans toutes les situations : le diagnostic s\'appuie sur un faisceau d\'arguments.' },
    ],
    explanation: 'Le cours présente l\'examen direct, la culture, les biomarqueurs et les PCR comme des outils complémentaires, à confronter au patient. (Cours, p. 2–4)'
  },
  {
    id: 2,
    type: 'QRM',
    question: 'Quels examens cherchent directement des éléments du champignon ou son ADN dans un prélèvement ?',
    options: [
      { text: 'Une PCR ciblant l\'ADN d\'un champignon suspecté', correct: true, correction: 'Oui. Elle recherche une séquence génétique du champignon ciblé.' },
      { text: 'L\'observation microscopique à l\'état frais', correct: true, correction: 'Oui. Elle peut montrer des structures fongiques dans le prélèvement.' },
      { text: 'La mise en culture du prélèvement', correct: true, correction: 'Oui. Elle permet d\'obtenir une croissance fongique quand le champignon est cultivable.' },
      { text: 'Le dosage sérique du β-1,3-glucane', correct: false, correction: 'Non. Il s\'agit d\'un biomarqueur indirect, non d\'une visualisation ou d\'une amplification du champignon.' },
      { text: 'Le dosage sérique du galactomannane', correct: false, correction: 'Non. C\'est un antigène fongique circulant utilisé comme biomarqueur indirect.' },
    ],
    explanation: 'La microscopie, la culture et une PCR ciblée recherchent respectivement des structures, une croissance et de l\'ADN fongiques ; les dosages antigéniques sont des biomarqueurs. (Cours, p. 2–4)'
  },
  {
    id: 3,
    type: 'QCM',
    question: 'Dans l\'examen mycologique standard décrit par le cours, que signifie « examen direct » ?',
    options: [
      { text: 'Observer au microscope le prélèvement reçu, avant d\'attendre la pousse d\'une culture', correct: true, correction: 'Oui. L\'état frais permet une observation immédiate du matériel prélevé.' },
      { text: 'Mesurer un antigène fongique circulant dans le sérum', correct: false, correction: 'Non. Cela correspond à un dosage de biomarqueur.' },
      { text: 'Amplifier une séquence d\'ADN par PCR', correct: false, correction: 'Non. La PCR est une méthode moléculaire distincte de l\'observation microscopique.' },
      { text: 'Comparer un spectre MALDI-TOF à une banque de données', correct: false, correction: 'Non. Cette comparaison sert à identifier un isolat obtenu en culture dans la démarche présentée.' },
      { text: 'Identifier obligatoirement une colonie après plusieurs jours de culture', correct: false, correction: 'Non. Il s\'agit de l\'étape de culture et d\'identification, distincte de l\'examen direct.' },
    ],
    explanation: 'L\'examen direct correspond à la recherche microscopique de structures fongiques sur le prélèvement, notamment à l\'état frais. (Cours, p. 2)'
  },
  {
    id: 4,
    type: 'QRM',
    question: 'À propos de l\'examen direct mycologique, quelles affirmations sont exactes ?',
    options: [
      { text: 'Il peut mettre en évidence des filaments mycéliens', correct: true, correction: 'Oui. Les filaments font partie des éléments observables au microscope.' },
      { text: 'Des techniques d\'imprégnation ou de fluorescence peuvent aider à visualiser les structures fongiques', correct: true, correction: 'Oui. Le cours cite ces variantes de l\'examen direct.' },
      { text: 'Il exige que le prélèvement ait d\'abord produit une colonie', correct: false, correction: 'Non. L\'observation directe précède la croissance éventuelle en culture.' },
      { text: 'Un résultat négatif n\'exclut pas toujours une infection fongique', correct: true, correction: 'Oui. La sensibilité de l\'examen direct est limitée.' },
      { text: 'Il identifie avec certitude l\'espèce fongique dans tous les prélèvements', correct: false, correction: 'Non. Voir des structures fongiques ne garantit ni leur identification spécifique ni une sensibilité parfaite.' },
    ],
    explanation: 'L\'examen direct est rapide et informatif, mais sa négativité n\'est pas éliminatoire ; l\'identification requiert souvent d\'autres méthodes. (Cours, p. 2)'
  },
  {
    id: 5,
    type: 'QCM',
    question: 'Quel bénéfice principal apporte la culture lorsqu\'un champignon du prélèvement peut pousser ?',
    options: [
      { text: 'Prouver à elle seule une invasion tissulaire dès qu\'une moisissure pousse d\'un prélèvement respiratoire', correct: false, correction: 'Non. Une culture respiratoire positive peut aussi refléter une colonisation ; il faut apprécier le contexte.' },
      { text: 'Garantir un résultat positif dans chaque mycose invasive', correct: false, correction: 'Non. Le rendement de la culture varie selon le champignon, le prélèvement et le contexte.' },
      { text: 'Remplacer l\'examen direct et tous les biomarqueurs', correct: false, correction: 'Non. Les différentes méthodes sont complémentaires.' },
      { text: 'Obtenir un isolat que le laboratoire pourra ensuite identifier', correct: true, correction: 'Oui. La croissance en culture fournit du matériel pour une identification morphologique ou instrumentale.' },
      { text: 'Fournir immédiatement la séquence ADN complète de l\'isolat', correct: false, correction: 'Non. Le séquençage est une technique distincte et éventuelle après obtention de l\'isolat.' },
    ],
    explanation: 'La culture peut augmenter le rendement de détection et surtout fournir un isolat à identifier ; une culture négative n\'exclut pas une mycose invasive. (Cours, p. 2 ; IDSA, https://www.idsociety.org/practice-guideline/aspergillosis/)'
  },
  {
    id: 6,
    type: 'QRM',
    question: 'Après croissance d\'un champignon en culture, quelles méthodes peuvent contribuer à son identification ?',
    options: [
      { text: 'La spectrométrie de masse MALDI-TOF', correct: true, correction: 'Oui. Elle compare le profil de l\'isolat à une base de référence.' },
      { text: 'Le seul dosage de β-1,3-glucane du patient', correct: false, correction: 'Non. Ce marqueur est large et n\'identifie pas l\'espèce de la colonie.' },
      { text: 'L\'étude microscopique de ses caractères morphologiques', correct: true, correction: 'Oui. Elle est notamment utile pour les champignons filamenteux.' },
      { text: 'La seule observation d\'un nodule sur le scanner', correct: false, correction: 'Non. L\'imagerie ne donne pas l\'identité de l\'isolat en culture.' },
      { text: 'Un séquençage adapté, si nécessaire', correct: true, correction: 'Oui. Le cours cite le séquençage comme possibilité d\'identification supplémentaire.' },
    ],
    explanation: 'Morphologie, MALDI-TOF et, au besoin, séquençage sont les voies d\'identification indiquées après culture. (Cours, p. 2)'
  },
  {
    id: 7,
    type: 'QCM',
    question: 'Sur quel principe repose l\'identification d\'un isolat par MALDI-TOF dans le cours ?',
    options: [
      { text: 'Mesurer uniquement la quantité de β-1,3-glucane dans le sérum', correct: false, correction: 'Non. Il s\'agit d\'un dosage antigénique, sans rapport avec le spectre d\'un isolat.' },
      { text: 'Mesurer la vitesse de croissance clinique de l\'infection chez le patient', correct: false, correction: 'Non. Le temps de vol concerne les ions dans l\'instrument, pas l\'évolution clinique.' },
      { text: 'Amplifier exclusivement le gène codant le galactomannane', correct: false, correction: 'Non. MALDI-TOF n\'est pas une PCR.' },
      { text: 'Comparer son spectre de masse, obtenu après ionisation, à une base de spectres de référence', correct: true, correction: 'Oui. Le profil des ions mesuré par temps de vol sert d\'empreinte pour la comparaison.' },
      { text: 'Déterminer l\'espèce par la forme du nodule thoracique', correct: false, correction: 'Non. Une image radiologique ne constitue pas un spectre de masse.' },
    ],
    explanation: 'Une colonie est préparée avec une matrice, ionisée puis analysée ; son spectre est confronté à une banque de données. (Cours, p. 2–3 ; CDC, https://www.cdc.gov/fungal/hcp/laboratories/identification-of-yeasts-using-maldi-tof-1.html)'
  },
  {
    id: 8,
    type: 'QRM',
    question: 'Dans la démarche de laboratoire présentée, quelles différences entre MALDI-TOF et PCR ciblée sont correctes ?',
    options: [
      { text: 'Une PCR Aspergillus négative exclut toutes les espèces fongiques possibles', correct: false, correction: 'Non. Une PCR ciblée ne recherche pas l\'ensemble des champignons et peut être faussement négative.' },
      { text: 'Le MALDI-TOF mesure directement la concentration sérique du galactomannane', correct: false, correction: 'Non. Il mesure un profil de masse de l\'isolat ; le galactomannane est un biomarqueur dosé par un autre test.' },
      { text: 'La PCR ciblée recherche l\'ADN du champignon suspecté', correct: true, correction: 'Oui. Elle interroge une cible génétique définie par l\'hypothèse diagnostique.' },
      { text: 'Le résultat d\'une PCR ciblée négative peut rester compatible avec une infection', correct: true, correction: 'Oui. Sa sensibilité n\'est pas de 100 %.' },
      { text: 'Le MALDI-TOF est utilisé pour identifier une colonie ayant poussé en culture', correct: true, correction: 'Oui. Le protocole enseigné commence par le dépôt d\'une colonie sur une plaque.' },
    ],
    explanation: 'Le MALDI-TOF décrit ici identifie un isolat cultivé ; la PCR ciblée cherche de l\'ADN dans le prélèvement et doit être interprétée avec ses limites. (Cours, p. 2–4)'
  },
  {
    id: 9,
    type: 'QCM',
    question: 'Quelle interprétation du β-1,3-glucane sérique est la plus juste ?',
    options: [
      { text: 'Il est strictement spécifique de Candida albicans', correct: false, correction: 'Non. Plusieurs champignons peuvent conduire à un résultat positif.' },
      { text: 'Il s\'agit d\'une mesure directe de la croissance en culture', correct: false, correction: 'Non. C\'est un biomarqueur circulant, distinct de la culture.' },
      { text: 'C\'est un marqueur fongique relativement large, insuffisant pour nommer à lui seul le genre responsable', correct: true, correction: 'Oui. Il est partagé par plusieurs groupes de champignons et n\'est pas spécifique d\'Aspergillus.' },
      { text: 'Il est strictement spécifique d\'Aspergillus fumigatus', correct: false, correction: 'Non. Une positivité ne désigne pas l\'espèce Aspergillus fumigatus.' },
      { text: 'Sa négativité exclut toutes les infections fongiques invasives', correct: false, correction: 'Non. La sensibilité du test est imparfaite et certains champignons sont peu ou pas détectés.' },
    ],
    explanation: 'Le β-1,3-glucane est un marqueur dit « panfongique » dans le cours, à comprendre comme large et non universel. (Cours, p. 3 ; IDSA, https://www.idsociety.org/practice-guideline/aspergillosis/)'
  },
  {
    id: 10,
    type: 'QRM',
    question: 'Quelles associations entre biomarqueur et champignon correspondent au tableau du cours ?',
    options: [
      { text: 'Glucuronoxylomannane — orientation vers Cryptococcus', correct: true, correction: 'Oui. Il s\'agit d\'un antigène capsulaire cryptococcique.' },
      { text: 'β-1,3-glucane — identification certaine d\'Aspergillus fumigatus', correct: false, correction: 'Non. Le β-1,3-glucane est un marqueur large, pas une identification d\'espèce.' },
      { text: 'Galactomannane — identification certaine de Candida albicans', correct: false, correction: 'Non. Cette association ne correspond pas au tableau ; Candida est associé au mannane.' },
      { text: 'Galactomannane — orientation vers Aspergillus', correct: true, correction: 'Oui. Le galactomannane est utilisé notamment pour orienter vers une aspergillose, sans être absolument spécifique.' },
      { text: 'Mannane — orientation vers Candida', correct: true, correction: 'Oui. Le mannane est un antigène associé aux Candida.' },
    ],
    explanation: 'Le tableau associe galactomannane à Aspergillus, mannane à Candida et glucuronoxylomannane à Cryptococcus, avec des performances et spécificités à nuancer. (Cours, p. 3 ; IDSA, https://www.idsociety.org/practice-guideline/aspergillosis/ ; CDC, https://wwwnc.cdc.gov/eid/article/20/1/13-0906_article)'
  },
  {
    id: 11,
    type: 'QCM',
    question: 'Quel résultat cherche une PCR ciblée « Aspergillus » réalisée devant une suspicion d\'aspergillose ?',
    options: [
      { text: 'La présence certaine de tous les champignons invasifs possibles', correct: false, correction: 'Non. Le champ de détection est limité à la cible définie par le test.' },
      { text: 'La quantité de mannane circulant', correct: false, correction: 'Non. Le mannane est un biomarqueur antigénique, distinct de l\'ADN amplifié par PCR.' },
      { text: 'Une colonie vivante ayant poussé sur milieu de culture', correct: false, correction: 'Non. Une PCR détecte de l\'ADN et n\'exige pas nécessairement une culture positive.' },
      { text: 'La certitude qu\'un résultat négatif élimine l\'infection', correct: false, correction: 'Non. La sensibilité d\'une PCR ciblée n\'est pas de 100 %.' },
      { text: 'La présence d\'ADN correspondant à la cible Aspergillus de l\'essai', correct: true, correction: 'Oui. Une PCR ciblée recherche une séquence génétique du champignon suspecté.' },
    ],
    explanation: 'Une PCR ciblée teste l\'hypothèse d\'un champignon précis ; un résultat négatif doit être rapproché de la qualité du prélèvement et des autres résultats. (Cours, p. 4 ; IDSA, https://www.idsociety.org/practice-guideline/aspergillosis/)'
  },
  {
    id: 12,
    type: 'QRM',
    question: 'Un dosage de β-1,3-glucane revient positif peu après une chirurgie lourde. Quelles interprétations sont justifiées ?',
    options: [
      { text: 'Le prélèvement doit toujours être déclaré contaminé et tous les autres examens abandonnés', correct: false, correction: 'Non. Une source de faux positif possible invite à interpréter le test, pas à arrêter l\'évaluation diagnostique.' },
      { text: 'Un résultat faussement positif n\'est pas la seule limite : un faux négatif est aussi possible', correct: true, correction: 'Oui. Sensibilité et spécificité ne sont pas parfaites.' },
      { text: 'Une exposition à du matériel de soins contenant des glucanes peut contribuer à un faux positif', correct: true, correction: 'Oui. Le cours cite notamment les compresses utilisées lors d\'une intervention.' },
      { text: 'La positivité prouve à elle seule une aspergillose pulmonaire invasive', correct: false, correction: 'Non. Le β-1,3-glucane n\'est pas spécifique d\'Aspergillus et peut être faussement positif.' },
      { text: 'Il faut rapprocher le résultat du terrain, des symptômes et des autres tests', correct: true, correction: 'Oui. La valeur du biomarqueur dépend du contexte et des examens complémentaires.' },
    ],
    explanation: 'Un β-1,3-glucane positif dans les jours suivant une intervention peut être lié aux compresses ; l\'évaluation reste globale. (Cours, p. 3–4 ; IDSA, https://www.idsociety.org/practice-guideline/aspergillosis/)'
  },
  {
    id: 13,
    type: 'QCM',
    question: 'Parmi ces patients, lequel présente le terrain le plus évocateur du cas d\'aspergillose pulmonaire invasive introduit dans le cours ?',
    options: [
      { text: 'Une personne dont le seul facteur est une activité professionnelle physique', correct: false, correction: 'Non. L\'activité professionnelle seule n\'est pas le signal majeur retenu dans le cas.' },
      { text: 'Une personne ayant terminé une courte antibiothérapie sans symptôme respiratoire', correct: false, correction: 'Non. Il manque à la fois un terrain vulnérable et une atteinte pulmonaire évocatrice.' },
      { text: 'Une personne immunocompétente avec un simple rhume', correct: false, correction: 'Non. Ce tableau ne réunit pas le terrain d\'immunodépression illustré dans le cas.' },
      { text: 'Une personne en aplasie après la prise en charge d\'une hémopathie', correct: true, correction: 'Oui. L\'aplasie et l\'immunodépression constituent des éléments majeurs du cas clinique.' },
      { text: 'Une personne exposée à des poussières mais sans anomalie clinique', correct: false, correction: 'Non. L\'exposition environnementale est fréquente et ne suffit pas à définir une infection invasive.' },
    ],
    explanation: 'Le premier cas du cours met surtout en avant l\'aplasie associée à une hémopathie, plus que les caractéristiques personnelles sans lien causal établi. (Cours, p. 4–5 ; CDC, https://www.cdc.gov/aspergillosis/hcp/clinical-overview/)'
  },
  {
    id: 14,
    type: 'QRM',
    question: 'Quels milieux peuvent contenir des spores d\'Aspergillus dans l\'environnement ?',
    options: [
      { text: 'De la poussière remise en suspension lors de travaux', correct: true, correction: 'Oui. Les travaux peuvent augmenter l\'exposition aérienne aux spores.' },
      { text: 'De la terre et du compost contenant des débris végétaux', correct: true, correction: 'Oui. Ces substrats organiques peuvent héberger des moisissures Aspergillus.' },
      { text: 'Des poussières présentes dans certains matériaux ou espaces intérieurs', correct: true, correction: 'Oui. Le cours évoque notamment les zones de faux plafond.' },
      { text: 'Uniquement des milieux hospitaliers stériles', correct: false, correction: 'Non. Les réservoirs environnementaux existent aussi hors de l\'hôpital.' },
      { text: 'Des végétaux et matières organiques en décomposition', correct: true, correction: 'Oui. Des plantes et fruits altérés sont cités parmi les réservoirs possibles.' },
    ],
    explanation: 'Aspergillus est cosmopolite ; végétaux altérés, poussières et matériaux de bâtiment peuvent héberger ou disperser ses spores. (Cours, p. 5 ; CDC, https://www.cdc.gov/aspergillosis/hcp/clinical-overview/)'
  },
  {
    id: 15,
    type: 'QCM',
    question: 'Quelle voie correspond à l\'exposition habituelle à Aspergillus responsable de l\'atteinte pulmonaire ?',
    options: [
      { text: 'L\'ingestion systématique d\'un repas contaminé avant chaque cas pulmonaire', correct: false, correction: 'Non. L\'inhalation est la voie habituelle de l\'aspergillose pulmonaire.' },
      { text: 'L\'inhalation de spores présentes dans l\'air', correct: true, correction: 'Oui. Les spores environnementales sont respirées puis peuvent atteindre les voies aériennes.' },
      { text: 'La transmission obligatoire par morsure de moustique', correct: false, correction: 'Non. Aucun vecteur arthropode n\'est requis.' },
      { text: 'La réactivation obligatoire d\'une infection virale latente', correct: false, correction: 'Non. Aspergillus est un champignon de l\'environnement, pas un virus latent.' },
      { text: 'La transmission habituelle d\'un patient à un autre par poignée de main', correct: false, correction: 'Non. L\'exposition typique est environnementale et aérienne.' },
    ],
    explanation: 'L\'inhalation de spores aériennes est la voie usuelle d\'exposition respiratoire à Aspergillus. (Cours, p. 5 ; CDC, https://www.cdc.gov/aspergillosis/hcp/clinical-overview/)'
  },
  {
    id: 16,
    type: 'QRM',
    question: 'Chez une personne en aplasie présentant une aggravation respiratoire, quels éléments renforcent une suspicion d\'aspergillose pulmonaire invasive ?',
    options: [
      { text: 'Le terrain d\'immunodépression lié à l\'aplasie', correct: true, correction: 'Oui. Le terrain rend une infection opportuniste invasive plus plausible.' },
      { text: 'La persistance du tableau malgré une antibiothérapie antibactérienne large', correct: true, correction: 'Oui. Cela doit faire envisager, entre autres, une cause non couverte par cette antibiothérapie.' },
      { text: 'L\'absence de culture fongique positive immédiatement après le prélèvement', correct: false, correction: 'Non. Une culture prend du temps et sa négativité initiale n\'écarte pas le diagnostic.' },
      { text: 'La présence d\'un nodule au scanner thoracique', correct: true, correction: 'Oui. Le nodule est un élément radiologique mis en avant dans le cas du cours.' },
      { text: 'Le seul fait que le patient ait déjà respiré l\'air extérieur', correct: false, correction: 'Non. L\'exposition aux spores est commune et ne permet pas, isolément, de diagnostiquer une aspergillose.' },
    ],
    explanation: 'Dans le cas clinique, le terrain, le nodule et la non-réponse à une antibiothérapie antibactérienne forment un faisceau d\'arguments, sans constituer une preuve microbiologique. (Cours, p. 4–5)'
  },
  {
    id: 17,
    type: 'QCM',
    question: 'À quel groupe appartient l\'agent responsable de l\'aspergillose pulmonaire invasive ?',
    options: [
      { text: 'Aux protozoaires transmis par les moustiques', correct: false, correction: 'Non. Aspergillus est une moisissure, sans vecteur moustique.' },
      { text: 'Aux bactéries du genre Mycobacterium', correct: false, correction: 'Non. Elles peuvent provoquer d\'autres infections pulmonaires, mais pas l\'aspergillose.' },
      { text: 'Aux moisissures environnementales du genre Aspergillus', correct: true, correction: 'Oui. Il s\'agit de champignons filamenteux cosmopolites.' },
      { text: 'Aux virus grippaux', correct: false, correction: 'Non. La grippe est une infection virale distincte.' },
      { text: 'Aux levures du genre Candida', correct: false, correction: 'Non. Candida est un autre genre fongique et n\'est pas Aspergillus.' },
    ],
    explanation: 'Le cours définit Aspergillus comme un genre de moisissures cosmopolites à l\'origine d\'une infection opportuniste. (Cours, p. 5)'
  },
  {
    id: 18,
    type: 'QRM',
    question: 'Quelles conclusions sont compatibles avec la présence ubiquitaire de spores d\'Aspergillus ?',
    options: [
      { text: 'La détection de spores dans l\'environnement identifie à elle seule la cause de la pneumonie d\'un patient', correct: false, correction: 'Non. Il faut des arguments propres au patient et, si possible, mycologiques.' },
      { text: 'Toute inhalation de spores provoque une aspergillose invasive', correct: false, correction: 'Non. Une exposition fréquente ne se traduit pas habituellement par une maladie invasive.' },
      { text: 'Une exposition respiratoire peut survenir dans la vie quotidienne', correct: true, correction: 'Oui. Le cours rappelle que nous inhalons régulièrement ces spores.' },
      { text: 'L\'état immunitaire de l\'hôte compte pour le risque de maladie invasive', correct: true, correction: 'Oui. L\'infection invasive est opportuniste et touche surtout des personnes vulnérables.' },
      { text: 'Les poussières de chantier constituent l\'unique source d\'exposition aux spores', correct: false, correction: 'Non. Les spores sont présentes dans de nombreux milieux, même en dehors de travaux.' },
    ],
    explanation: 'La large distribution d\'Aspergillus explique une exposition courante, tandis que la maladie invasive dépend fortement du terrain. (Cours, p. 5 ; CDC, https://www.cdc.gov/aspergillosis/hcp/clinical-overview/)'
  },
  {
    id: 19,
    type: 'QCM',
    question: 'Quel constat distingue le plus solidement une invasion pulmonaire par une moisissure d\'une simple colonisation des voies aériennes ?',
    options: [
      { text: 'Un galactomannane sérique positif isolé, sans interprétation clinique', correct: false, correction: 'Non. Ce biomarqueur apporte un argument, mais sa positivité isolée n\'est pas une preuve anatomopathologique d\'invasion.' },
      { text: 'Une culture positive d\'Aspergillus dans une expectoration isolée', correct: false, correction: 'Non. Un prélèvement respiratoire non stérile positif peut traduire une colonisation et doit être interprété selon le contexte.' },
      { text: 'Un nodule pulmonaire non spécifique au scanner, sans autre résultat', correct: false, correction: 'Non. Un nodule est évocateur dans le bon contexte, mais il ne prouve pas une invasion fongique.' },
      { text: 'Une PCR Aspergillus positive dans l\'air d\'un chantier voisin', correct: false, correction: 'Non. Elle renseigne sur l\'environnement, pas sur une invasion du tissu pulmonaire du patient.' },
      { text: 'Des hyphes infiltrant une biopsie pulmonaire avec des lésions tissulaires', correct: true, correction: 'Oui. La visualisation de filaments envahissant le tissu lésé démontre une mycose invasive, même si la morphologie seule n\'identifie pas nécessairement le genre ou l\'espèce.' },
    ],
    explanation: 'L\'histologie peut objectiver des hyphes infiltrant un tissu lésé : c\'est une preuve d\'invasion, à la différence d\'une simple culture respiratoire potentiellement liée à une colonisation. Une biopsie n\'est cependant pas toujours réalisable. (Cours, p. 8 ; critères EORTC/MSGERC 2020, https://doi.org/10.1093/cid/ciz1008)'
  },
  {
    id: 20,
    type: 'QRM',
    question: 'Une aspergillose pulmonaire invasive est suspectée chez un patient vulnérable. Quelles démarches sont cohérentes avec le cours ?',
    options: [
      { text: 'Relier le terrain et les anomalies radiologiques aux résultats du laboratoire', correct: true, correction: 'Oui. La suspicion résulte d\'un faisceau clinique, radiologique et mycologique.' },
      { text: 'Demander des examens mycologiques adaptés, dont examen direct et culture si un prélèvement pertinent est accessible', correct: true, correction: 'Oui. Ces méthodes recherchent des éléments fongiques ou un isolat.' },
      { text: 'Envisager galactomannane ou PCR Aspergillus selon le prélèvement et la situation', correct: true, correction: 'Oui. Ces outils complètent le bilan lorsqu\'ils sont indiqués et interprétables.' },
      { text: 'Tenir un biomarqueur positif isolé pour une preuve absolue d\'invasion par Aspergillus', correct: false, correction: 'Non. Les biomarqueurs ont des faux positifs et ne se substituent pas au contexte ni aux autres examens.' },
      { text: 'Tenir compte du site de prélèvement et des limites de sensibilité des tests utilisés', correct: true, correction: 'Oui. Le prélèvement et les performances des méthodes conditionnent l\'interprétation d\'un résultat, notamment négatif.' },
    ],
    explanation: 'Le cours associe une suspicion clinique et radiologique à plusieurs outils de laboratoire complémentaires ; aucun résultat isolé ne suffit universellement. (Cours, p. 2–5 ; IDSA, https://www.idsociety.org/practice-guideline/aspergillosis/)'
  },
  {
    id: 21,
    type: 'QCM',
    question: 'Quel ordre de grandeur correspond aux conidies d\'Aspergillus inhalées décrites dans le cours ?',
    options: [
      { text: 'Environ 2 à 3 micromètres', correct: true, correction: 'Oui. Leur petite taille favorise leur maintien dans l\'air et leur dépôt dans les voies respiratoires profondes.' },
      { text: 'Environ 2 à 3 millimètres', correct: false, correction: 'Non. Ce serait environ mille fois plus grand que la taille citée dans le cours.' },
      { text: 'Quelques nanomètres, comme de nombreux virus', correct: false, correction: 'Non. Les conidies sont des spores fongiques, bien plus grandes qu\'un virus.' },
      { text: 'Plusieurs centimètres, comme certains champignons visibles à l\'œil nu', correct: false, correction: 'Non. Les conidies sont microscopiques.' },
      { text: 'Toujours plus de 100 micromètres', correct: false, correction: 'Non. Le cours indique une taille beaucoup plus petite pour les spores inhalées.' },
    ],
    explanation: 'Le cours indique des spores d\'environ 2 à 3 µm, un ordre de grandeur compatible avec leur dispersion aérienne et leur pénétration dans les voies respiratoires. (Cours, p. 5 ; J Infect Dis, https://doi.org/10.1093/infdis/jiy298)'
  },
  {
    id: 22,
    type: 'QRM',
    question: 'Concernant la culture d\'un prélèvement respiratoire où l\'on suspecte Aspergillus, quelles propositions sont exactes ?',
    options: [
      { text: 'La microscopie de la culture peut montrer des têtes aspergillaires', correct: true, correction: 'Oui. Le cours illustre ces structures après croissance de la moisissure.' },
      { text: 'L\'absence de colonie après 24 heures exclut définitivement une aspergillose invasive', correct: false, correction: 'Non. La croissance demande habituellement davantage de temps et le rendement de la culture reste imparfait.' },
      { text: 'L\'aspect macroscopique de la colonie peut être examiné', correct: true, correction: 'Oui. La croissance et l\'aspect de la colonie font partie des éléments observés après culture.' },
      { text: 'Toute culture respiratoire positive démontre à elle seule l\'invasion tissulaire', correct: false, correction: 'Non. La présence d\'Aspergillus dans un prélèvement respiratoire peut aussi refléter une colonisation.' },
      { text: 'Une colonie peut apparaître après quelques jours d\'incubation, environ 2 à 3 jours dans l\'exemple du cours', correct: true, correction: 'Oui. Il s\'agit d\'un délai indicatif ; une culture négative à ce stade n\'exclut pas une infection.' },
    ],
    explanation: 'Le cours décrit la croissance macroscopique et les têtes aspergillaires observées en microscopie, avec une pousse possible en 2 à 3 jours. Le résultat doit toujours être rapproché du terrain et des autres examens. (Cours, p. 7 ; IDSA, https://www.idsociety.org/practice-guideline/aspergillosis/)'
  },
  {
    id: 23,
    type: 'QCM',
    question: 'Quelle défense respiratoire constitue la première barrière contre les spores aspergillaires inhalées ?',
    options: [
      { text: 'La production d\'anticorps anti-Candida', correct: false, correction: 'Non. Elle ne représente pas la première barrière mécanique aux spores d\'Aspergillus.' },
      { text: 'La coagulation intravasculaire', correct: false, correction: 'Non. La coagulation n\'assure pas l\'épuration initiale des spores inhalées.' },
      { text: 'La filtration glomérulaire', correct: false, correction: 'Non. Elle concerne le rein et n\'élimine pas les spores à l\'entrée des voies respiratoires.' },
      { text: 'La clairance mucociliaire', correct: true, correction: 'Oui. Le transport mucociliaire contribue à évacuer les particules et spores déposées dans les voies aériennes.' },
      { text: 'La sécrétion d\'acide gastrique', correct: false, correction: 'Non. Elle protège surtout le tube digestif, pas l\'arbre respiratoire.' },
    ],
    explanation: 'La clairance mucociliaire élimine une partie des conidies inhalées ; les cellules immunitaires interviennent si cette barrière est franchie. (Cours, p. 6)'
  },
  {
    id: 24,
    type: 'QRM',
    question: 'Quelles propositions décrivent correctement les défenses de l\'hôte contre Aspergillus ?',
    options: [
      { text: 'L\'absence de neutrophiles protège contre l\'invasion pulmonaire', correct: false, correction: 'Non. La neutropénie sévère est au contraire un facteur majeur d\'aspergillose invasive.' },
      { text: 'Les macrophages participent à l\'élimination des spores qui atteignent les voies profondes', correct: true, correction: 'Oui. Ils prennent en charge les conidies non éliminées par la clairance mucociliaire.' },
      { text: 'Les spores sont toujours détruites avant d\'atteindre les alvéoles', correct: false, correction: 'Non. Certaines échappent à la clairance et doivent être éliminées par l\'immunité cellulaire.' },
      { text: 'Les cellules dendritiques participent à la réponse immunitaire respiratoire', correct: true, correction: 'Oui. Le cours les cite parmi les cellules intervenant après le franchissement de la barrière mucociliaire.' },
      { text: 'Les polynucléaires neutrophiles sont importants pour contrôler les formes filamenteuses', correct: true, correction: 'Oui. Leur rôle explique en partie le risque élevé associé à une neutropénie sévère.' },
    ],
    explanation: 'La défense contre Aspergillus combine clairance mucociliaire et cellules de l\'immunité innée ; les neutrophiles jouent un rôle particulièrement critique contre les filaments. (Cours, p. 6)'
  },
  {
    id: 25,
    type: 'QCM',
    question: 'Parmi les situations suivantes, laquelle augmente le plus nettement le risque d\'aspergillose pulmonaire invasive selon le cours ?',
    options: [
      { text: 'Une rhinite allergique isolée', correct: false, correction: 'Non. Elle ne constitue pas le terrain majeur d\'aspergillose pulmonaire invasive décrit ici.' },
      { text: 'Une neutropénie profonde et prolongée', correct: true, correction: 'Oui. Le déficit de neutrophiles compromet une défense essentielle contre la croissance filamentaire d\'Aspergillus.' },
      { text: 'Une fracture consolidée sans traitement immunosuppresseur', correct: false, correction: 'Non. Elle n\'est pas un facteur de risque spécifique de cette infection opportuniste.' },
      { text: 'Une myopie sans immunodépression', correct: false, correction: 'Non. Elle n\'altère pas la défense respiratoire contre Aspergillus.' },
      { text: 'Un groupe sanguin particulier', correct: false, correction: 'Non. Le cours ne retient aucun groupe sanguin comme facteur de risque majeur.' },
    ],
    explanation: 'La neutropénie est le facteur de risque mis en avant, surtout lorsqu\'elle accompagne une hémopathie ou une chimiothérapie. (Cours, p. 6)'
  },
  {
    id: 26,
    type: 'QRM',
    question: 'Quels terrains doivent faire envisager une aspergillose pulmonaire invasive devant une atteinte respiratoire compatible ?',
    options: [
      { text: 'Une greffe de cellules souches hématopoïétiques avec immunosuppression', correct: true, correction: 'Oui. Ces patients peuvent cumuler déficits cellulaires et neutropénie.' },
      { text: 'Une leucémie aiguë avec aplasie après traitement', correct: true, correction: 'Oui. L\'hémopathie et la neutropénie profonde constituent un terrain classique.' },
      { text: 'Une activité sportive régulière chez un adulte immunocompétent', correct: false, correction: 'Non. L\'exposition environnementale seule ne suffit habituellement pas à produire une forme invasive chez cet hôte.' },
      { text: 'Une transplantation d\'organe sous traitement immunosuppresseur', correct: true, correction: 'Oui. Le cours inclut les transplantés d\'organes parmi les terrains favorisants.' },
      { text: 'Un traitement antibiotique court comme seul facteur de risque', correct: false, correction: 'Non. Une antibiothérapie seule n\'est pas le terrain majeur décrit pour l\'aspergillose invasive.' },
    ],
    explanation: 'Les hémopathies, les greffes et diverses immunodépressions favorisent l\'invasion. Le risque dépend du type et de la profondeur du déficit immunitaire. (Cours, p. 6 et 8)'
  },
  {
    id: 27,
    type: 'QCM',
    question: 'Après inhalation d\'une spore non éliminée chez un hôte vulnérable, quelle succession conduit à l\'atteinte pulmonaire invasive ?',
    options: [
      { text: 'Transformation immédiate de la spore en levure bourgeonnante puis candidémie', correct: false, correction: 'Non. Aspergillus est une moisissure filamentaire et cette séquence décrit un autre type de champignon.' },
      { text: 'Passage obligé par un stade parasitaire dans le sang', correct: false, correction: 'Non. Aucun stade parasitaire sanguin n\'est requis avant la filamentation pulmonaire.' },
      { text: 'Encapsulement bactérien puis atteinte des méninges', correct: false, correction: 'Non. Il ne s\'agit ni d\'une bactérie ni de la séquence d\'invasion pulmonaire présentée.' },
      { text: 'Germination de la spore, croissance filamentaire, invasion du parenchyme', correct: true, correction: 'Oui. C\'est la progression biologique décrite pour l\'aspergillose pulmonaire invasive.' },
      { text: 'Multiplication virale intracellulaire puis lyse des pneumocytes', correct: false, correction: 'Non. Les spores d\'Aspergillus ne sont pas des virus.' },
    ],
    explanation: 'L\'échec de la clairance permet à la conidie de germer ; des hyphes se développent ensuite et envahissent le tissu pulmonaire. (Cours, p. 6)'
  },
  {
    id: 28,
    type: 'QRM',
    question: 'Quelles manifestations cliniques sont compatibles avec une aspergillose pulmonaire invasive sans être spécifiques de celle-ci ?',
    options: [
      { text: 'Fièvre', correct: true, correction: 'Oui. Elle peut être présente, mais ne permet pas à elle seule d\'identifier l\'agent causal.' },
      { text: 'Un signe clinique unique présent chez tous les patients', correct: false, correction: 'Non. Le cours précise qu\'aucun signe clinique n\'est pathognomonique.' },
      { text: 'Une éruption cutanée obligatoire avant tout signe thoracique', correct: false, correction: 'Non. Elle n\'est ni obligatoire ni la présentation de référence de l\'atteinte pulmonaire.' },
      { text: 'Dyspnée ou insuffisance respiratoire', correct: true, correction: 'Oui. L\'atteinte pulmonaire peut se manifester par une gêne respiratoire de sévérité variable.' },
      { text: 'Toux ou hémoptysie', correct: true, correction: 'Oui. Ces symptômes sont possibles dans les formes pulmonaires invasives.' },
    ],
    explanation: 'Le tableau clinique est peu spécifique : fièvre, symptômes respiratoires et parfois hémoptysie doivent être rapprochés du terrain, de l\'imagerie et des résultats mycologiques. (Cours, p. 6)'
  },
  {
    id: 29,
    type: 'QCM',
    question: 'Quel examen sanguin peut apporter un argument en faveur d\'une aspergillose sans réaliser d\'emblée un lavage broncho-alvéolaire ?',
    options: [
      { text: 'Le dosage sérique du mannane', correct: false, correction: 'Non. Ce marqueur est plutôt associé à Candida, et non à Aspergillus.' },
      { text: 'La seule numération des neutrophiles', correct: false, correction: 'Non. Elle renseigne sur le terrain à risque, pas sur la présence d\'un antigène aspergillaire.' },
      { text: 'La culture d\'un écouvillon cutané sain', correct: false, correction: 'Non. Ce prélèvement ne documente pas une lésion pulmonaire et n\'est pas sanguin.' },
      { text: 'L\'examen direct d\'une biopsie pulmonaire', correct: false, correction: 'Non. Ce n\'est ni un examen sanguin ni un prélèvement moins invasif.' },
      { text: 'Le dosage sérique du galactomannane', correct: true, correction: 'Oui. Il recherche un antigène utile au diagnostic sans nécessiter d\'emblée un prélèvement bronchique, mais reste insuffisant isolément.' },
    ],
    explanation: 'Le galactomannane peut être recherché dans le sérum, prélèvement moins invasif qu\'un lavage broncho-alvéolaire ; sa valeur dépend du terrain, d\'éventuels traitements et des autres résultats. (Cours, p. 7 ; IDSA, https://www.idsociety.org/practice-guideline/aspergillosis/)'
  },
  {
    id: 30,
    type: 'QRM',
    question: 'Quelles affirmations sur l\'imagerie thoracique de l\'aspergillose pulmonaire invasive sont justes ?',
    options: [
      { text: 'Une radiographie standard normale exclut une atteinte débutante', correct: false, correction: 'Non. Le scanner est plus sensible pour détecter les lésions précoces.' },
      { text: 'Le scanner ne sert qu\'à surveiller une infection déjà démontrée', correct: false, correction: 'Non. Il est important dès la suspicion clinique, notamment pour repérer des lésions précoces.' },
      { text: 'Un scanner peut montrer un ou plusieurs nodules pulmonaires', correct: true, correction: 'Oui. Les nodules font partie des images évocatrices décrites dans le cours.' },
      { text: 'Les lésions sont toujours limitées à un seul segment pulmonaire', correct: false, correction: 'Non. Le nombre et la distribution des foyers peuvent varier selon le patient et le stade.' },
      { text: 'Une condensation alvéolaire peut être observée', correct: true, correction: 'Oui. Le document montre aussi une condensation alvéolaire possible, en plus des lésions nodulaires.' },
    ],
    explanation: 'Le scanner peut montrer des nodules et des condensations ; il est plus sensible qu\'une radiographie standard pour les lésions précoces, mais ses images doivent être interprétées avec les données cliniques et mycologiques. (Cours, p. 5–7 ; IDSA, https://www.idsociety.org/practice-guideline/aspergillosis/)'
  },
  {
    id: 31,
    type: 'QCM',
    question: 'Au scanner d\'un patient neutropénique, quelle image correspond au signe du halo classique ?',
    options: [
      { text: 'Une opacité diffuse uniforme des deux poumons sans nodule', correct: false, correction: 'Non. Le halo décrit une opacité autour d\'une lésion focale.' },
      { text: 'Un épanchement pleural isolé sans anomalie du parenchyme', correct: false, correction: 'Non. Cette image ne définit pas le signe du halo.' },
      { text: 'Un croissant d\'air dans un nodule déjà cavitaire', correct: false, correction: 'Non. Il s\'agit du signe du croissant gazeux, généralement plus tardif.' },
      { text: 'Une calcification ganglionnaire médiastinale', correct: false, correction: 'Non. Une calcification ganglionnaire n\'est pas le halo aspergillaire.' },
      { text: 'Un nodule dense entouré d\'une plage périphérique en verre dépoli', correct: true, correction: 'Oui. Le halo est l\'opacité périphérique en verre dépoli autour du foyer nodulaire.' },
    ],
    explanation: 'Le signe du halo associe un nodule central à une opacité périphérique en verre dépoli ; il est évocateur chez le neutropénique mais non spécifique. (Cours, p. 6–7)'
  },
  {
    id: 32,
    type: 'QRM',
    question: 'À propos du croissant gazeux observé dans l\'évolution d\'une lésion aspergillaire pulmonaire, quelles propositions sont exactes ?',
    options: [
      { text: 'Il est obligatoire dès les premières heures de l\'infection', correct: false, correction: 'Non. Son caractère tardif signifie qu\'il peut être absent au début.' },
      { text: 'Il correspond à la présence d\'air au sein ou en bordure d\'une lésion nécrotique', correct: true, correction: 'Oui. La cavitation laisse apparaître un croissant d\'air autour d\'une partie de la lésion.' },
      { text: 'Il exclut toute autre infection fongique pulmonaire', correct: false, correction: 'Non. Il est suggestif d\'une infection par moisissure, sans spécificité absolue pour Aspergillus.' },
      { text: 'Il apparaît habituellement plus tard que le halo initial', correct: true, correction: 'Oui. Le cours le présente comme un signe tardif de l\'évolution radiologique.' },
      { text: 'Il peut accompagner la récupération des neutrophiles', correct: true, correction: 'Oui. Sa survenue est souvent associée à la correction de la neutropénie.' },
    ],
    explanation: 'Le croissant gazeux est un signe évolutif plus tardif que le halo, souvent visible lors de la récupération immunitaire. Il ne doit pas être exigé pour suspecter précocement l\'infection. (Cours, p. 6–7)'
  },
  {
    id: 33,
    type: 'QCM',
    question: 'Quel prélèvement peut fournir du matériel respiratoire pour l\'examen direct, la culture et éventuellement la recherche de galactomannane en cas de suspicion d\'aspergillose pulmonaire ?',
    options: [
      { text: 'Une biopsie pulmonaire obligatoire avant tout autre test', correct: false, correction: 'Non. La biopsie peut être trop risquée chez un patient aplasique ou en détresse respiratoire.' },
      { text: 'Un écouvillonnage de peau saine', correct: false, correction: 'Non. Il ne prélève pas le compartiment pulmonaire atteint.' },
      { text: 'Une ponction lombaire systématique', correct: false, correction: 'Non. Le liquide céphalorachidien n\'est pas le prélèvement de référence d\'une lésion pulmonaire.' },
      { text: 'Une bandelette urinaire seule', correct: false, correction: 'Non. Elle ne permet pas l\'examen mycologique direct de la lésion thoracique.' },
      { text: 'Un lavage broncho-alvéolaire, si l\'état du patient le permet', correct: true, correction: 'Oui. Le lavage prélève les voies respiratoires inférieures et peut être adressé pour plusieurs analyses mycologiques.' },
    ],
    explanation: 'Le lavage broncho-alvéolaire, lorsque réalisable sans risque excessif, permet de rechercher directement Aspergillus et ses antigènes dans les voies respiratoires. (Cours, p. 7–8)'
  },
  {
    id: 34,
    type: 'QRM',
    question: 'Quels résultats microbiologiques peuvent étayer une suspicion d\'aspergillose pulmonaire invasive chez un patient à risque ?',
    options: [
      { text: 'Des filaments mycéliens observés sur un prélèvement respiratoire', correct: true, correction: 'Oui. L\'examen direct peut visualiser des filaments, à interpréter avec le contexte clinique.' },
      { text: 'Une culture respiratoire identifiant Aspergillus', correct: true, correction: 'Oui. Elle documente la présence du champignon, même si sa signification dépend du terrain et des autres données.' },
      { text: 'Un mannane positif prouvant spécifiquement une infection à Aspergillus', correct: false, correction: 'Non. Le mannane est surtout associé à Candida, et non à Aspergillus.' },
      { text: 'Une PCR Aspergillus positive sur un prélèvement adapté', correct: true, correction: 'Oui. Elle peut apporter un argument supplémentaire, à interpréter avec les autres résultats.' },
      { text: 'Un galactomannane positif dans un prélèvement approprié', correct: true, correction: 'Oui. Ce biomarqueur peut appuyer le diagnostic, notamment dans le sérum ou le lavage broncho-alvéolaire.' },
    ],
    explanation: 'L\'étayage diagnostique repose sur la convergence des éléments cliniques, radiologiques et mycologiques. Examen direct, culture, galactomannane et PCR ont chacun des limites ; une culture respiratoire positive ne prouve pas à elle seule l\'invasion tissulaire. (Cours, p. 4 et 7 ; IDSA, https://www.idsociety.org/practice-guideline/aspergillosis/)'
  },
  {
    id: 35,
    type: 'QCM',
    question: 'Quelle morphologie tissulaire est classiquement compatible avec Aspergillus à l\'examen anatomopathologique ?',
    options: [
      { text: 'Des kystes parasitaires pluricellulaires', correct: false, correction: 'Non. Les hyphes d\'Aspergillus ne forment pas des kystes de parasite pluricellulaire.' },
      { text: 'Des levures encapsulées sans filaments', correct: false, correction: 'Non. Cette description n\'est pas celle d\'une moisissure filamentaire aspergillaire.' },
      { text: 'Des bactéries intracellulaires en amas', correct: false, correction: 'Non. Il ne s\'agit pas d\'une morphologie fongique filamenteuse.' },
      { text: 'Des hyphes très larges non cloisonnées se ramifiant surtout à angle droit', correct: false, correction: 'Non. Cet aspect évoque plutôt une mucormycose, avec des limites liées à la préparation du tissu.' },
      { text: 'Des hyphes cloisonnées se ramifiant plutôt à angle aigu', correct: true, correction: 'Oui. Cet aspect des filaments est celui décrit dans le cours pour Aspergillus.' },
    ],
    explanation: 'L\'histologie peut montrer des filaments septés à ramifications aiguës. Cette morphologie évoque Aspergillus, mais n\'est pas absolument spécifique du genre ni de l\'espèce ; culture ou méthode moléculaire peuvent compléter. (Cours, p. 8 ; IDSA, https://www.idsociety.org/practice-guideline/aspergillosis/)'
  },
  {
    id: 36,
    type: 'QRM',
    question: 'Pourquoi le diagnostic d\'aspergillose pulmonaire invasive n\'attend-il pas systématiquement une biopsie pulmonaire ?',
    options: [
      { text: 'Une thrombopénie associée à l\'aplasie peut accroître le risque hémorragique du geste', correct: true, correction: 'Oui. Une baisse des plaquettes chez ce patient peut majorer le risque de saignement lors d\'une biopsie.' },
      { text: 'Une insuffisance respiratoire sévère peut rendre le prélèvement tissulaire dangereux', correct: true, correction: 'Oui. L\'état respiratoire fait partie des limites pratiques évoquées dans le cours.' },
      { text: 'Un nodule au scanner identifie toujours avec certitude l\'agent et l\'espèce', correct: false, correction: 'Non. L\'image seule n\'est pas spécifique et ne remplace pas les examens mycologiques.' },
      { text: 'On peut combiner terrain, scanner et examens mycologiques moins invasifs', correct: true, correction: 'Oui. Le faisceau d\'arguments permet d\'agir sans exiger systématiquement une preuve histologique.' },
      { text: 'La biopsie est interdite par principe chez tous les patients immunodéprimés', correct: false, correction: 'Non. Elle peut être envisagée dans certains cas si le bénéfice diagnostique dépasse le risque.' },
    ],
    explanation: 'La biopsie peut être difficile ou risquée chez un patient aplasique en détresse respiratoire. La décision diagnostique et thérapeutique s\'appuie donc sur plusieurs éléments convergents. (Cours, p. 6–8)'
  },
  {
    id: 37,
    type: 'QCM',
    question: 'Quel antifongique est présenté comme traitement de première intention de l\'aspergillose pulmonaire invasive dans le cours ?',
    options: [
      { text: 'L\'amoxicilline', correct: false, correction: 'Non. Cet antibiotique antibactérien n\'agit pas sur Aspergillus.' },
      { text: 'Le cotrimoxazole', correct: false, correction: 'Non. Il est notamment utilisé contre Pneumocystis, mais n\'est pas le traitement de référence de l\'aspergillose invasive.' },
      { text: 'La vancomycine', correct: false, correction: 'Non. Elle vise des bactéries à Gram positif, et non cette moisissure.' },
      { text: 'Le voriconazole', correct: true, correction: 'Oui. Il est le traitement de référence indiqué dans le cours ; d\'autres options existent selon la situation clinique.' },
      { text: 'Le fluconazole', correct: false, correction: 'Non. Il n\'a pas l\'activité attendue contre Aspergillus pour traiter une forme invasive.' },
    ],
    explanation: 'Le cours met en avant le voriconazole. Les recommandations reconnaissent aussi des alternatives anti-Aspergillus adaptées au contexte, comme l\'isavuconazole ou l\'amphotéricine B liposomale. (Cours, p. 8)'
  },
  {
    id: 38,
    type: 'QRM',
    question: 'Quelles propositions décrivent une prise en charge antifongique cohérente d\'une aspergillose pulmonaire invasive fortement suspectée ?',
    options: [
      { text: 'Un relais oral peut être envisagé lorsque l\'état clinique et l\'absorption le permettent', correct: true, correction: 'Oui. Le cours décrit ce relais après une phase intraveineuse initiale.' },
      { text: 'Il faut toujours attendre une biopsie positive avant de traiter un cas fortement suspect', correct: false, correction: 'Non. Un traitement précoce peut être justifié pendant que les investigations se poursuivent.' },
      { text: 'Le traitement s\'arrête dès la première journée sans fièvre', correct: false, correction: 'Non. La disparition de la fièvre ne suffit pas à prouver le contrôle de l\'infection invasive.' },
      { text: 'La durée se compte habituellement en semaines et dépend de la réponse et de l\'immunodépression', correct: true, correction: 'Oui. Un arrêt très précoce n\'est pas adapté à cette infection profonde.' },
      { text: 'Chez un patient gravement malade, débuter le traitement par voie intraveineuse peut être approprié', correct: true, correction: 'Oui. Une voie parentérale est adaptée aux formes sévères, selon l\'état du patient.' },
    ],
    explanation: 'La prise en charge doit être précoce et prolongée. Voie d\'administration et durée sont adaptées à la gravité, à la tolérance et à la récupération immunitaire. (Cours, p. 8)'
  },
  {
    id: 39,
    type: 'QCM',
    question: 'Quel est l\'objectif principal d\'une chambre à air filtré pour certains patients en aplasie profonde ?',
    options: [
      { text: 'Éliminer toute moisissure de l\'environnement mondial', correct: false, correction: 'Non. Aspergillus est ubiquitaire ; seule l\'exposition locale peut être réduite.' },
      { text: 'Réduire l\'exposition aux conidies aspergillaires en suspension dans l\'air', correct: true, correction: 'Oui. La filtration et le contrôle de l\'environnement diminuent l\'inhalation de spores chez les patients très vulnérables.' },
      { text: 'Remplacer la prise en charge de la neutropénie et toute prophylaxie adaptée', correct: false, correction: 'Non. La maîtrise environnementale est une mesure complémentaire, non un substitut à toutes les autres prises en charge.' },
      { text: 'Stériliser définitivement les poumons du patient', correct: false, correction: 'Non. La filtration agit sur l\'environnement, sans rendre les poumons stériles.' },
      { text: 'Empêcher une transmission par piqûre d\'insecte', correct: false, correction: 'Non. La voie habituelle est l\'inhalation de spores, pas une piqûre.' },
    ],
    explanation: 'La prévention environnementale vise à limiter l\'inhalation de spores chez les patients à très haut risque ; elle ne supprime pas totalement l\'exposition. (Cours, p. 5 et 8)'
  },
  {
    id: 40,
    type: 'QRM',
    question: 'Quelles mesures sont cohérentes avec la prévention environnementale de l\'aspergillose chez un patient très immunodéprimé ?',
    options: [
      { text: 'Limiter la dispersion de poussières lors de travaux à proximité des soins', correct: true, correction: 'Oui. Les travaux peuvent aérosoliser des spores et justifient des mesures de confinement.' },
      { text: 'Maintenir autant que possible un environnement de soins peu empoussiéré', correct: true, correction: 'Oui. Réduire la poussière limite un réservoir de spores environnementales inhalables.' },
      { text: 'Considérer qu\'une chambre filtrée abolit totalement le risque', correct: false, correction: 'Non. Elle réduit le risque sans garantir une absence absolue de spores.' },
      { text: 'Utiliser une filtration adaptée de l\'air dans certains secteurs accueillant des patients très à risque', correct: true, correction: 'Oui. Les chambres protectrices peuvent réduire la concentration de spores inhalables.' },
      { text: 'Éviter autant que possible les expositions non protégées à des zones fortement poussiéreuses', correct: true, correction: 'Oui. La réduction de l\'exposition est particulièrement pertinente lors d\'une aplasie sévère.' },
    ],
    explanation: 'Chez les personnes très vulnérables, la prévention associe contrôle des poussières et, selon les indications, filtration de l\'air. L\'objectif est une réduction du risque, jamais une garantie de risque nul. (Cours, p. 5 et 8)'
  },
  {
    id: 41,
    type: 'QCM',
    question: 'Chez un patient greffé, une hémoculture positive révèle des levures bourgeonnantes ensuite identifiées comme Candida albicans. Quel diagnostic est établi ?',
    options: [
      { text: 'Une pneumocystose pulmonaire.', correct: false, correction: 'Non. Pneumocystis provoque une infection respiratoire différente et n\'explique pas cette identification sanguine.' },
      { text: 'Une candidémie.', correct: true, correction: 'Oui. La présence de Candida identifié dans le sang définit une candidémie.' },
      { text: 'Une bactériémie à levures.', correct: false, correction: 'Non. Candida est un champignon ; sa présence dans le sang est une fongémie, pas une bactériémie.' },
      { text: 'Une aspergillose pulmonaire invasive.', correct: false, correction: 'Non. L\'aspergillose est due à une moisissure du genre Aspergillus, pas à Candida identifié dans le sang.' },
      { text: 'Une simple colonisation digestive.', correct: false, correction: 'Non. Une levure identifiée dans le sang dépasse le cadre d\'un portage commensal digestif.' },
    ],
    explanation: 'L\'identification de Candida dans une hémoculture positive permet de passer du constat « levures dans le sang » au diagnostic de candidémie. (Cours, p. 9–10.)'
  },
  {
    id: 42,
    type: 'QRM',
    question: 'Quelles propositions distinguent correctement les formes invasives à Candida ?',
    options: [
      { text: 'Une candidémie peut précéder une localisation profonde.', correct: true, correction: 'Oui. La circulation sanguine peut permettre l\'ensemencement secondaire d\'organes.' },
      { text: 'Toute candidémie prouve d\'emblée une endocardite.', correct: false, correction: 'Non. L\'endocardite est une complication possible, pas une conséquence obligatoire de chaque candidémie.' },
      { text: 'Le portage digestif asymptomatique de Candida suffit à définir une candidémie.', correct: false, correction: 'Non. Le portage commensal digestif n\'établit pas la présence de Candida dans le sang.' },
      { text: 'Une candidémie est une fongémie causée par Candida.', correct: true, correction: 'Oui. « Fongémie » désigne une présence fongique dans le sang ; « candidémie » précise le genre Candida.' },
      { text: 'Une candidose disséminée comporte une atteinte tissulaire.', correct: true, correction: 'Oui. Le terme vise l\'invasion de tissus ou d\'organes, souvent après diffusion hématogène.' },
    ],
    explanation: 'Le cours distingue l\'atteinte sanguine de l\'invasion tissulaire ; ces situations peuvent coexister mais ne se confondent pas. (Cours, p. 10 et 13.)'
  },
  {
    id: 43,
    type: 'QCM',
    question: 'Que signifie d\'abord l\'alarme d\'un automate d\'hémoculture fondée sur une augmentation de CO₂ ?',
    options: [
      { text: 'La présence d\'un virus est prouvée.', correct: false, correction: 'Non. Ce dispositif détecte la croissance de micro-organismes cultivables dans le flacon, pas une infection virale.' },
      { text: 'L\'espèce Candida albicans est formellement identifiée.', correct: false, correction: 'Non. Le signal de croissance ne fournit pas à lui seul l\'identification de l\'espèce.' },
      { text: 'Une croissance microbienne a été détectée dans le flacon.', correct: true, correction: 'Oui. La production de CO₂ accompagne la multiplication d\'un micro-organisme dans le milieu incubé.' },
      { text: 'Une candidose disséminée est démontrée dans tous les organes.', correct: false, correction: 'Non. Une alarme du flacon ne prouve aucune localisation tissulaire.' },
      { text: 'La culture sur gélose est déjà négative.', correct: false, correction: 'Non. L\'automate détecte une croissance dans le flacon ; la sous-culture et l\'identification sont des étapes distinctes.' },
    ],
    explanation: 'L\'automate donne un signal de croissance ; le microscope et les méthodes d\'identification déterminent ensuite ce qui a poussé. (Cours, p. 9–10.)'
  },
  {
    id: 44,
    type: 'QRM',
    question: 'Après signal positif d\'une hémoculture chez un patient suspect de candidémie, quelles étapes aident à préciser le diagnostic ?',
    options: [
      { text: 'Déduire l\'espèce uniquement de la courbe de CO₂.', correct: false, correction: 'Non. La courbe atteste une croissance, sans identification fiable de l\'espèce.' },
      { text: 'Ensemencer le contenu du flacon sur gélose.', correct: true, correction: 'Oui. La sous-culture permet d\'obtenir des colonies pour l\'identification.' },
      { text: 'Identifier les colonies par une méthode validée, par exemple MALDI-TOF.', correct: true, correction: 'Oui. La spectrométrie de masse peut confirmer l\'identité d\'une colonie cultivée.' },
      { text: 'Observer directement un aliquot du flacon au microscope.', correct: true, correction: 'Oui. L\'examen direct peut montrer des levures bourgeonnantes.' },
      { text: 'Conclure à une endocardite sur la seule positivité du flacon.', correct: false, correction: 'Non. Une localisation cardiaque nécessite une évaluation clinique et, si indiquée, une échographie.' },
    ],
    explanation: 'L\'enchaînement du cours est : signal de croissance, examen direct, culture puis identification ; chaque étape apporte une information différente. (Cours, p. 9–10 et 12.)'
  },
  {
    id: 45,
    type: 'QCM',
    question: 'Pourquoi une levure Candida habituellement commensale peut-elle devenir responsable d\'une infection invasive ?',
    options: [
      { text: 'Un déséquilibre entre défenses de l\'hôte, barrières et microbiote peut permettre son invasion.', correct: true, correction: 'Oui. La rupture de cet équilibre explique le caractère opportuniste de Candida.' },
      { text: 'Candida devient pathogène seulement après inhalation de spores environnementales.', correct: false, correction: 'Non. Le cours insiste sur le réservoir commensal et les facteurs de l\'hôte, non sur une inhalation obligatoire.' },
      { text: 'L\'antibiothérapie à large spectre détruit directement les levures Candida.', correct: false, correction: 'Non. Elle peut déséquilibrer le microbiote bactérien, ce qui favorise la prolifération de Candida.' },
      { text: 'L\'absence de fièvre transforme Candida en agent invasif.', correct: false, correction: 'Non. L\'absence ou la présence de fièvre n\'est pas le mécanisme de l\'invasion.' },
      { text: 'Tout portage digestif devient spontanément une candidémie.', correct: false, correction: 'Non. Le portage est fréquent et ne signifie pas invasion.' },
    ],
    explanation: 'Le commensalisme n\'est pas une protection absolue : une altération du microbiote, des barrières ou de l\'immunité peut favoriser l\'invasion. (Cours, p. 10–11.)'
  },
  {
    id: 46,
    type: 'QRM',
    question: 'Quels éléments du dossier augmentent le risque de candidose invasive chez un patient hospitalisé ?',
    options: [
      { text: 'Une antibiothérapie à large spectre.', correct: true, correction: 'Oui. Elle modifie le microbiote et peut favoriser Candida.' },
      { text: 'Une chirurgie digestive récente.', correct: true, correction: 'Oui. Elle peut rompre les barrières muqueuses et favoriser l\'accès de Candida aux tissus profonds.' },
      { text: 'La seule profession exercée avant l\'hospitalisation.', correct: false, correction: 'Non. La profession, prise isolément, n\'est pas un facteur de risque déterminant dans ce contexte.' },
      { text: 'Une atteinte importante de la barrière cutanée.', correct: true, correction: 'Oui. La rupture de cette barrière facilite l\'invasion opportuniste.' },
      { text: 'La présence d\'un cathéter veineux.', correct: true, correction: 'Oui. Un dispositif intravasculaire peut servir de porte d\'entrée ou de foyer persistant.' },
    ],
    explanation: 'Le risque résulte souvent de plusieurs facteurs associés : terrain fragilisé, soins invasifs, chirurgie et déséquilibre du microbiote. (Cours, p. 9 et 11.)'
  },
  {
    id: 47,
    type: 'QCM',
    question: 'Un patient porteur d\'un cathéter reste fébrile malgré une antibiothérapie antibactérienne adaptée. Quelle interprétation est la plus juste ?',
    options: [
      { text: 'La fièvre suffit à prouver une candidémie.', correct: false, correction: 'Non. Une confirmation microbiologique et une évaluation globale restent nécessaires.' },
      { text: 'La persistance de la fièvre indique obligatoirement une infection virale.', correct: false, correction: 'Non. Plusieurs causes restent possibles, dont une infection fongique invasive.' },
      { text: 'Une candidose invasive doit entrer dans le diagnostic différentiel, sans être confirmée par la fièvre seule.', correct: true, correction: 'Oui. La fièvre persistante est évocatrice dans ce terrain mais reste peu spécifique.' },
      { text: 'Une infection fongique devient impossible sous antibiotiques.', correct: false, correction: 'Non. Les antibactériens n\'éliminent pas Candida et peuvent déséquilibrer le microbiote.' },
      { text: 'Une endocardite fongique est démontrée sans autre examen.', correct: false, correction: 'Non. La fièvre seule ne prouve ni la candidémie ni une localisation cardiaque.' },
    ],
    explanation: 'La persistance d\'une fièvre malgré des antibactériens fait rechercher d\'autres causes, notamment Candida en présence de facteurs de risque. (Cours, p. 9 et 11.)'
  },
  {
    id: 48,
    type: 'QRM',
    question: 'À propos des données épidémiologiques présentées pour les candidoses invasives, quelles lectures sont correctes ?',
    options: [
      { text: 'La mortalité rapportée souligne la gravité potentielle de ces infections.', correct: true, correction: 'Oui. Il s\'agit d\'infections graves ; un taux populationnel ne prédit toutefois pas le pronostic individuel.' },
      { text: 'Le sexe masculin est une condition indispensable à la candidémie.', correct: false, correction: 'Non. Une prédominance statistique éventuelle n\'exclut aucunement les femmes.' },
      { text: 'Les chiffres d\'un établissement peuvent varier dans le temps et ne s\'appliquent pas mécaniquement à tous les hôpitaux.', correct: true, correction: 'Oui. Les effectifs locaux dépendent du territoire, de la période et des patients pris en charge.' },
      { text: 'Le nombre annuel local permet à lui seul de diagnostiquer la maladie chez un patient.', correct: false, correction: 'Non. Une statistique de fréquence ne remplace pas l\'évaluation clinique et microbiologique individuelle.' },
      { text: 'Le cours les présente comme une cause majeure d\'infection fongique invasive.', correct: true, correction: 'Oui. La section épidémiologique les place au premier plan des infections fongiques invasives.' },
    ],
    explanation: 'Les chiffres du cours situent la fréquence et la gravité ; ils ne sont ni des critères diagnostiques ni des probabilités personnelles. (Cours, p. 9 et 11.)'
  },
  {
    id: 49,
    type: 'QCM',
    question: 'Dans le cas clinique, une hémoculture prélevée par le cathéter est positive à Candida. Que permet de conclure ce seul site de prélèvement sur l\'origine de l\'infection ?',
    options: [
      { text: 'La profession antérieure du patient suffit à désigner la source de la candidémie.', correct: false, correction: 'Non. La profession ne permet pas d\'attribuer une candidémie à un dispositif ou à un autre foyer.' },
      { text: 'Le cathéter est forcément innocent, car Candida est une levure commensale.', correct: false, correction: 'Non. Le commensalisme habituel de Candida n\'exclut pas une infection liée au dispositif.' },
      { text: 'Le cathéter est une source possible, mais sa responsabilité n\'est pas établie par ce seul prélèvement.', correct: true, correction: 'Oui. Le cathéter peut être une porte d\'entrée ou un foyer persistant, sans être automatiquement la source de toute candidémie prélevée par cette voie.' },
      { text: 'Le cathéter est nécessairement le foyer initial puisque le sang a été prélevé par lui.', correct: false, correction: 'Non. Le lieu de prélèvement ne démontre pas à lui seul l\'origine de la candidémie.' },
      { text: 'Une origine digestive est formellement écartée par le prélèvement sur cathéter.', correct: false, correction: 'Non. Une origine digestive reste possible même si le sang a été prélevé par un cathéter.' },
    ],
    explanation: 'Le prélèvement sur cathéter a permis de détecter Candida dans le sang, mais l\'attribution de la source exige une évaluation clinique et microbiologique plus large. (Cours, p. 9 et 12 ; IDSA 2016.)'
  },
  {
    id: 50,
    type: 'QRM',
    question: 'Comment interpréter les méthodes d\'identification d\'une levure après culture positive ?',
    options: [
      { text: 'Une courbe de CO₂ positive rend toute identification d\'espèce inutile.', correct: false, correction: 'Non. Identifier l\'espèce aide à adapter la prise en charge et à apprécier la sensibilité antifongique.' },
      { text: 'Une gélose chromogénique peut fournir une orientation selon l\'aspect des colonies.', correct: true, correction: 'Oui. Certaines géloses donnent une couleur utile pour orienter vers une espèce.' },
      { text: 'Une identification par MALDI-TOF peut confirmer l\'espèce sur une colonie cultivée.', correct: true, correction: 'Oui. La spectrométrie de masse compare le profil de la colonie à une base de référence.' },
      { text: 'Le simple bourgeonnement au microscope suffit à identifier Candida albicans.', correct: false, correction: 'Non. Il indique une levure, mais n\'est pas spécifique de cette espèce.' },
      { text: 'La couleur d\'une colonie doit être interprétée selon le milieu utilisé.', correct: true, correction: 'Oui. Les codes de couleur dépendent de la formulation de la gélose et ne sont pas universels.' },
    ],
    explanation: 'L\'examen direct décrit une morphologie ; la culture et les méthodes d\'identification précisent l\'agent responsable. (Cours, p. 10 et 12.)'
  },
  {
    id: 51,
    type: 'QCM',
    question: 'Une atteinte intra-abdominale à Candida est suspectée après chirurgie, mais les hémocultures restent négatives. Quel examen apporte l\'argument microbiologique le plus direct si le prélèvement est réalisable ?',
    options: [
      { text: 'Un prélèvement du foyer profond pour examen mycologique direct et culture.', correct: true, correction: 'Oui. Un prélèvement tissulaire ou de liquide profond peut documenter l\'invasion locale.' },
      { text: 'Une radiographie thoracique normale.', correct: false, correction: 'Non. Elle n\'explore pas correctement le foyer abdominal suspecté.' },
      { text: 'Un dosage isolé de galactomannane sanguin.', correct: false, correction: 'Non. Ce biomarqueur est plutôt associé à Aspergillus et ne documente pas directement le foyer à Candida.' },
      { text: 'L\'absence de nouvelle fièvre pendant quelques heures.', correct: false, correction: 'Non. Une amélioration passagère ne constitue pas une preuve microbiologique.' },
      { text: 'Un écouvillon superficiel d\'une peau non lésée.', correct: false, correction: 'Non. Le portage cutané ne démontre pas une infection intra-abdominale.' },
    ],
    explanation: 'Une candidose profonde peut exister sans hémoculture positive ; le prélèvement du site concerné reste particulièrement informatif lorsqu\'il est possible et pertinent. (Cours, p. 12 ; IDSA 2016.)'
  },
  {
    id: 52,
    type: 'QRM',
    question: 'Dans l\'enquête d\'une candidose disséminée, quelles affirmations sur les prélèvements sont exactes ?',
    options: [
      { text: 'Un liquide profond ou une biopsie peut être examiné directement puis mis en culture.', correct: true, correction: 'Oui. Ces deux étapes apportent des informations complémentaires sur la présence et l\'identité du champignon.' },
      { text: 'Candida isolé d\'un site normalement stérile doit être interprété avec le contexte clinique et la qualité du prélèvement.', correct: true, correction: 'Oui. La provenance du prélèvement et les signes d\'infection déterminent la valeur du résultat.' },
      { text: 'Une hémoculture négative n\'élimine pas toujours une candidose profonde.', correct: true, correction: 'Oui. Certaines infections tissulaires ne s\'accompagnent pas de fongémie détectable au moment du prélèvement.' },
      { text: 'La culture profonde positive dispense toujours d\'identifier l\'espèce.', correct: false, correction: 'Non. L\'identification précise de la levure aide à guider le traitement.' },
      { text: 'Un écouvillon superficiel positif démontre à lui seul une invasion d\'organe profond.', correct: false, correction: 'Non. Il peut refléter une colonisation ou une contamination superficielle.' },
    ],
    explanation: 'Le diagnostic tissulaire repose sur des prélèvements adaptés et l\'interprétation clinique ; la négativité du sang n\'exclut pas une localisation profonde. (Cours, p. 12 ; IDSA 2016.)'
  },
  {
    id: 53,
    type: 'QCM',
    question: 'Quel biomarqueur oriente davantage vers Candida qu\'un dosage de β-(1,3)-D-glucane ?',
    options: [
      { text: 'Le β-(1,3)-D-glucane lui-même.', correct: false, correction: 'Non. Il est détectable dans plusieurs mycoses et ne désigne pas spécifiquement Candida.' },
      { text: 'Le mannane.', correct: true, correction: 'Oui. Le mannane est un antigène associé au genre Candida dans le cours.' },
      { text: 'Le galactomannane.', correct: false, correction: 'Non. Le galactomannane oriente surtout vers Aspergillus.' },
      { text: 'La procalcitonine.', correct: false, correction: 'Non. Ce n\'est pas le biomarqueur fongique spécifique de Candida présenté dans le cours.' },
      { text: 'Le glucuronoxylomannane.', correct: false, correction: 'Non. Il est associé à Cryptococcus.' },
    ],
    explanation: 'Le mannane est lié à Candida ; le β-D-glucane est un marqueur fongique plus large et moins discriminant pour le genre. (Cours, p. 3 et 12.)'
  },
  {
    id: 54,
    type: 'QRM',
    question: 'Comment utiliser les biomarqueurs sériques dans une suspicion de candidose invasive ?',
    options: [
      { text: 'Un β-D-glucane positif ne désigne pas à lui seul l\'espèce Candida.', correct: true, correction: 'Oui. Ce marqueur peut être positif avec plusieurs champignons.' },
      { text: 'Le mannane est un outil complémentaire, pas une preuve indépendante de tout contexte.', correct: true, correction: 'Oui. Son interprétation doit tenir compte des signes, des prélèvements et des limites du test.' },
      { text: 'Un biomarqueur négatif doit être confronté au terrain et aux autres examens si la suspicion reste forte.', correct: true, correction: 'Oui. La sensibilité des tests est imparfaite ; un négatif isolé ne ferme pas l\'enquête.' },
      { text: 'Un seul β-D-glucane positif prouve une candidémie et dispense d\'hémocultures.', correct: false, correction: 'Non. Il n\'est ni spécifique de Candida ni une démonstration de levures dans le sang.' },
      { text: 'Un résultat peut être faussement positif, notamment après exposition à certains matériaux de soins contenant des glucanes.', correct: true, correction: 'Oui. Le cours cite les compresses chirurgicales parmi les sources de faux positifs.' },
    ],
    explanation: 'Les biomarqueurs renforcent ou affaiblissent une hypothèse sans remplacer les hémocultures ni les prélèvements profonds lorsqu\'ils sont accessibles. (Cours, p. 3 et 12 ; IDSA 2016.)'
  },
  {
    id: 55,
    type: 'QCM',
    question: 'Une culture d\'un prélèvement digestif non stérile retrouve Candida chez un patient sans signe d\'infection profonde. Quelle conclusion est la plus prudente ?',
    options: [
      { text: 'Le prélèvement prouve une infection transmise par voie aérienne.', correct: false, correction: 'Non. Le résultat correspond à une levure commensale possible, pas à une preuve de transmission respiratoire.' },
      { text: 'Il peut s\'agir d\'un portage commensal, insuffisant à lui seul pour diagnostiquer une candidose invasive.', correct: true, correction: 'Oui. Candida peut être présent normalement sur les muqueuses et dans le tube digestif.' },
      { text: 'Un traitement systémique prolongé est obligatoire dans tous les cas.', correct: false, correction: 'Non. Un portage isolé ne doit pas être confondu avec une candidose invasive nécessitant un traitement.' },
      { text: 'La candidémie est démontrée par ce seul prélèvement.', correct: false, correction: 'Non. Une candidémie exige une mise en évidence sanguine de Candida.' },
      { text: 'Une endophtalmie est automatiquement présente.', correct: false, correction: 'Non. Une culture digestive ne documente aucune localisation oculaire.' },
    ],
    explanation: 'La présence de Candida sur une surface naturellement colonisée ne démontre ni l\'invasion tissulaire ni le passage sanguin. (Cours, p. 10–11.)'
  },
  {
    id: 56,
    type: 'QRM',
    question: 'Une candidémie est confirmée. Quelles démarches participent à son suivi et à l\'adaptation de la prise en charge ?',
    options: [
      { text: 'Rechercher une localisation secondaire selon l\'évaluation clinique et les recommandations suivies.', correct: true, correction: 'Oui. Une atteinte oculaire, cardiaque ou d\'un autre organe peut modifier la prise en charge.' },
      { text: 'Arrêter l\'enquête dès la première hémoculture positive.', correct: false, correction: 'Non. Il faut apprécier l\'évolution, la source probable et les complications potentielles.' },
      { text: 'Identifier l\'espèce de Candida isolée.', correct: true, correction: 'Oui. L\'espèce peut influencer le choix de l\'antifongique et le besoin d\'étudier sa sensibilité.' },
      { text: 'Considérer que l\'absence de fièvre pendant une journée prouve la stérilisation du sang.', correct: false, correction: 'Non. L\'évolution clinique seule ne remplace pas la documentation microbiologique de la clairance.' },
      { text: 'Répéter les hémocultures pour documenter la clairance sanguine.', correct: true, correction: 'Oui. Le moment où les cultures deviennent négatives contribue au suivi et au calcul de la durée du traitement.' },
    ],
    explanation: 'La prise en charge ne s\'arrête pas au diagnostic initial : l\'identification, les cultures de suivi et l\'évaluation des foyers secondaires sont utiles. (Cours, p. 12–13 ; IDSA 2016.)'
  },
  {
    id: 57,
    type: 'QCM',
    question: 'Quelle décision thérapeutique générale s\'impose devant une candidémie confirmée ?',
    options: [
      { text: 'Remplacer l\'antifongique par une seconde antibiothérapie antibactérienne.', correct: false, correction: 'Non. Les antibactériens ne constituent pas le traitement de Candida.' },
      { text: 'Ne rien traiter tant que la fièvre diminue sous antibactériens.', correct: false, correction: 'Non. Une amélioration thermique ne fait pas disparaître le besoin d\'un traitement antifongique.' },
      { text: 'Instaurer un antifongique systémique adapté sans attendre une localisation profonde prouvée.', correct: true, correction: 'Oui. Une candidémie est une infection invasive à traiter ; le choix précis du médicament dépend du contexte et de l\'espèce.' },
      { text: 'Attendre obligatoirement une biopsie positive d\'organe.', correct: false, correction: 'Non. La candidémie elle-même justifie le traitement.' },
      { text: 'Utiliser seulement un antiseptique cutané autour du cathéter.', correct: false, correction: 'Non. Un soin local ne traite pas des levures déjà présentes dans la circulation sanguine.' },
    ],
    explanation: 'Le cours insiste sur le traitement de toute candidémie ou candidose profonde ; une atteinte tissulaire n\'a pas à être démontrée avant de traiter une candidémie confirmée. (Cours, p. 12.)'
  },
  {
    id: 58,
    type: 'QRM',
    question: 'À propos d\'un cathéter vasculaire chez un patient candidémique, quelles propositions sont justifiées ?',
    options: [
      { text: 'Le cathéter peut entretenir l\'infection sanguine s\'il est colonisé.', correct: true, correction: 'Oui. Il peut servir de foyer persistant et gêner la clairance.' },
      { text: 'Le retrait du cathéter remplace à lui seul tout traitement antifongique.', correct: false, correction: 'Non. Une candidémie confirmée requiert aussi un traitement antifongique adapté.' },
      { text: 'Le cathéter peut être une porte d\'entrée de Candida.', correct: true, correction: 'Oui. Sa présence facilite l\'accès de la levure à la circulation.' },
      { text: 'Tout cathéter doit être conservé jusqu\'à la fin du traitement, même s\'il est suspecté comme foyer.', correct: false, correction: 'Non. Le maintien d\'un foyer intravasculaire suspect peut favoriser la persistance de la candidémie.' },
      { text: 'Un retrait précoce doit être envisagé si le cathéter est la source probable et si son ablation est possible en sécurité.', correct: true, correction: 'Oui. La décision est individualisée selon le contexte clinique et la faisabilité.' },
    ],
    explanation: 'Le contrôle de la source et l\'antifongique sont complémentaires ; le retrait du dispositif doit tenir compte du patient et de la probabilité qu\'il soit en cause. (Cours, p. 12 ; IDSA 2016.)'
  },
  {
    id: 59,
    type: 'QCM',
    question: 'En l\'absence de foyer métastatique ou d\'autre complication, à partir de quel repère raisonne-t-on la durée minimale habituelle du traitement d\'une candidémie ?',
    options: [
      { text: 'Au moins deux semaines après la clairance sanguine documentée, avec disparition des symptômes attribuables à l\'infection.', correct: true, correction: 'Oui. Les recommandations utilisent la négativation documentée des hémocultures et la résolution des signes comme repères.' },
      { text: 'Un jour après la disparition de la fièvre, sans contrôle microbiologique.', correct: false, correction: 'Non. La seule apyrexie ne documente pas la clairance.' },
      { text: 'Deux semaines à compter de la première hémoculture positive, même si les suivantes restent positives.', correct: false, correction: 'Non. Une persistance de levures dans le sang repousse le point de départ de la durée après clairance.' },
      { text: 'Une durée fixe identique même si une endocardite est découverte.', correct: false, correction: 'Non. Une complication profonde impose un traitement spécifique, souvent plus long.' },
      { text: 'Une dose unique d\'antifongique dès que l\'espèce est connue.', correct: false, correction: 'Non. Une candidémie nécessite un traitement systémique prolongé et surveillé.' },
    ],
    explanation: 'Le cours demande une poursuite d\'au moins 15 jours après la dernière hémoculture positive ; IDSA et CDC formulent le repère comme au moins 14 jours après clairance documentée et résolution des symptômes, hors complication profonde. (Cours, p. 12 ; IDSA 2016 ; CDC 2024.)'
  },
  {
    id: 60,
    type: 'QRM',
    question: 'Après une candidémie, quelles affirmations sur les localisations secondaires sont pertinentes ?',
    options: [
      { text: 'Une endocardite doit être envisagée en particulier devant des hémocultures persistantes, une fièvre persistante ou des signes cardiaques.', correct: true, correction: 'Oui. Ces éléments renforcent l\'indication d\'une évaluation cardiaque, notamment par échographie.' },
      { text: 'Une échographie transœsophagienne est obligatoirement nécessaire chez chaque patient, sans considération clinique.', correct: false, correction: 'Non. Le bilan cardiaque dépend du contexte, des signes et des recommandations appliquées.' },
      { text: 'La découverte d\'un foyer secondaire peut modifier la durée et les modalités du traitement.', correct: true, correction: 'Oui. Une atteinte profonde ne suit pas simplement le schéma de candidémie non compliquée.' },
      { text: 'Une hémoculture de contrôle négative exclut à elle seule toutes les localisations d\'organe.', correct: false, correction: 'Non. La circulation sanguine peut se négativer alors qu\'un foyer tissulaire persiste.' },
      { text: 'Une atteinte oculaire peut être recherchée par un examen du fond d\'œil selon le protocole retenu.', correct: true, correction: 'Oui. Les levures peuvent atteindre l\'œil ; le fond d\'œil vise notamment à détecter une atteinte choriorétinienne ou endophtalmique.' },
    ],
    explanation: 'Le cours attire l\'attention sur l\'œil et le cœur ; la recherche d\'un foyer secondaire se combine à l\'évolution clinique et microbiologique. (Cours, p. 12–13 ; IDSA 2016.)'
  },
  {
    id: 61,
    type: 'QCM',
    question: 'Une personne transplantée sous immunosuppresseurs présente une dyspnée fébrile et un verre dépoli pulmonaire bilatéral. Quel diagnostic fongique le cours invite-t-il à évoquer en priorité ?',
    options: [
      { text: 'Une aspergillose à nodule excavé certain', correct: false, correction: 'Non. Le cours oppose ici le verre dépoli diffus aux lésions nodulaires évocatrices d\'aspergillose.' },
      { text: 'Une infection dermatophytique superficielle', correct: false, correction: 'Non. Une mycose cutanée superficielle ne rend pas compte de l\'atteinte respiratoire diffuse.' },
      { text: 'Une cryptococcose méningée certaine', correct: false, correction: 'Non. Ce diagnostic ne découle pas du seul verre dépoli bilatéral.' },
      { text: 'Une candidémie isolée', correct: false, correction: 'Non. Une candidémie n\'explique pas à elle seule ce tableau interstitiel pulmonaire typique.' },
      { text: 'Une pneumocystose', correct: true, correction: 'Oui. L\'immunodépression et l\'atteinte diffuse en verre dépoli rendent cette hypothèse importante.' },
    ],
    explanation: 'Le tableau clinique et scanographique de l\'exemple conduit à suspecter une pneumocystose ; l\'imagerie seule ne suffit toutefois pas à la confirmer. (Cours, p. 13-14)'
  },
  {
    id: 62,
    type: 'QRM',
    question: 'Quelles précautions d\'interprétation s\'imposent devant le verre dépoli bilatéral et le β-D-glucane positif du cas clinique ?',
    options: [
      { text: 'Le β-D-glucane positif soutient une origine fongique sans identifier P. jirovecii', correct: true, correction: 'Oui. Le biomarqueur est large et doit être confronté aux autres résultats.' },
      { text: 'L\'absence de nodules suffit à exclure toute autre infection opportuniste', correct: false, correction: 'Non. L\'imagerie oriente mais n\'exclut pas à elle seule tous les diagnostics concurrents.' },
      { text: 'Le verre dépoli peut avoir d\'autres causes, notamment virales', correct: true, correction: 'Oui. Cet aspect est compatible avec la pneumocystose, sans en être une signature exclusive.' },
      { text: 'Un β-D-glucane élevé prouve à lui seul la pneumocystose', correct: false, correction: 'Non. D\'autres mycoses peuvent également rendre le test positif.' },
      { text: 'Le terrain immunodéprimé et les examens respiratoires doivent être intégrés à l\'interprétation', correct: true, correction: 'Oui. La conclusion repose sur un faisceau clinique et microbiologique.' },
    ],
    explanation: 'Dans le cas présenté, le faisceau terrain-imagerie-biomarqueur rend la pneumocystose probable ; aucun de ces signes n\'est une preuve isolée. (Cours, p. 13-14)'
  },
  {
    id: 63,
    type: 'QCM',
    question: 'Quel agent est responsable de la pneumocystose humaine étudiée dans ce cours ?',
    options: [
      { text: 'Pneumocystis carinii comme nom actuel de l\'espèce humaine', correct: false, correction: 'Non. Le nom retenu pour l\'espèce humaine est P. jirovecii.' },
      { text: 'Pneumocystis jirovecii', correct: true, correction: 'Oui. C\'est l\'espèce associée à la pneumocystose chez l\'être humain.' },
      { text: 'Cryptococcus neoformans', correct: false, correction: 'Non. Cryptococcus appartient à un autre groupe de mycoses opportunistes.' },
      { text: 'Aspergillus fumigatus', correct: false, correction: 'Non. Il s\'agit d\'un agent majeur d\'aspergillose, autre partie du cours.' },
      { text: 'Candida albicans', correct: false, correction: 'Non. Cette levure peut causer une candidose invasive, pas la pneumocystose.' },
    ],
    explanation: 'La pneumocystose humaine est due à Pneumocystis jirovecii, champignon opportuniste principalement pulmonaire. (Cours, p. 14 et 18)'
  },
  {
    id: 64,
    type: 'QRM',
    question: 'Que retenir des formes et de la transmission de Pneumocystis jirovecii ?',
    options: [
      { text: 'Le cours distingue des asques et des formes trophiques', correct: true, correction: 'Oui. Ce sont les deux formes morphologiques présentées.' },
      { text: 'Le sol et les fruits moisis constituent le réservoir habituel de P. jirovecii', correct: false, correction: 'Non. C\'est le type d\'exposition discuté pour Aspergillus, pas le réservoir de P. jirovecii.' },
      { text: 'La transmission de l\'espèce humaine est principalement interhumaine par voie aérienne', correct: true, correction: 'Oui. Le réservoir humain et la contamination aérienne sont les idées clés.' },
      { text: 'Une personne asymptomatique peut contribuer à la circulation du champignon', correct: true, correction: 'Oui. Le cours mentionne les porteurs sans maladie apparente.' },
      { text: 'Une première exposition protège définitivement de toute nouvelle contamination', correct: false, correction: 'Non. Des expositions répétées peuvent survenir au cours de la vie.' },
    ],
    explanation: 'P. jirovecii présente des asques et des formes trophiques ; le cours décrit un réservoir humain et des contaminations répétées possibles. (Cours, p. 14-15 et 18)'
  },
  {
    id: 65,
    type: 'QCM',
    question: 'Chez une personne vivant avec le VIH, quel seuil de lymphocytes T CD4+ est particulièrement associé au risque de pneumocystose dans le cours ?',
    options: [
      { text: 'Moins de 200/mm³', correct: true, correction: 'Oui. Le seuil de 200 CD4+/mm³ est le repère classique présenté.' },
      { text: 'Un taux de CD4+ sans aucune importance', correct: false, correction: 'Non. Le taux de CD4+ participe à l\'évaluation du risque chez les patients VIH.' },
      { text: 'Moins de 1 000/mm³ uniquement', correct: false, correction: 'Non. Ce seuil n\'est pas celui retenu pour la pneumocystose associée au VIH.' },
      { text: 'Exactement 400/mm³', correct: false, correction: 'Non. Le cours donne un seuil inférieur à 200/mm³, pas une valeur exacte de 400.' },
      { text: 'Plus de 500/mm³', correct: false, correction: 'Non. Le risque classique augmente avec une déplétion des CD4+, non avec leur élévation.' },
    ],
    explanation: 'Le cours retient le seuil de 200 lymphocytes T CD4+ par mm³ pour la pneumocystose chez les personnes vivant avec le VIH. (Cours, p. 15)'
  },
  {
    id: 66,
    type: 'QRM',
    question: 'Quelles situations figurent parmi les facteurs de risque de pneumocystose décrits dans le cours ?',
    options: [
      { text: 'Une hémopathie maligne', correct: true, correction: 'Oui. Les hémopathies font partie des terrains d\'immunodépression cités.' },
      { text: 'Une infection par le VIH avec CD4+ très abaissés', correct: true, correction: 'Oui. Un déficit cellulaire important augmente le risque.' },
      { text: 'La seule exposition à des fruits moisis chez un sujet immunocompétent', correct: false, correction: 'Non. Ce n\'est pas le terrain ni le mode de transmission retenu pour P. jirovecii.' },
      { text: 'Une corticothérapie immunosuppressive', correct: true, correction: 'Oui. Les corticostéroïdes figurent parmi les traitements favorisant l\'infection.' },
      { text: 'Une greffe d\'organe solide avec immunosuppression', correct: true, correction: 'Oui. La transplantation est un contexte majeur du cas clinique.' },
    ],
    explanation: 'La pneumocystose se développe surtout sur un terrain d\'immunodépression : VIH avancé, cancer, greffe ou traitement immunosuppresseur. (Cours, p. 15)'
  },
  {
    id: 67,
    type: 'QCM',
    question: 'Pourquoi un examen direct respiratoire négatif peut-il être moins rassurant chez un patient non-VIH immunodéprimé suspect de pneumocystose ?',
    options: [
      { text: 'Une culture négative est le critère décisif chez les patients non-VIH', correct: false, correction: 'Non. La culture de P. jirovecii n\'est pas disponible en diagnostic usuel.' },
      { text: 'P. jirovecii ne touche jamais les personnes non infectées par le VIH', correct: false, correction: 'Non. Le cours décrit précisément la pneumocystose de patients non-VIH immunodéprimés.' },
      { text: 'La charge fongique peut être plus faible hors VIH, ce qui diminue la probabilité de visualiser les organismes', correct: true, correction: 'Oui. Un prélèvement peut contenir trop peu d\'organismes pour un examen direct contributif.' },
      { text: 'Une faible charge fongique prouve l\'absence d\'atteinte pulmonaire grave', correct: false, correction: 'Non. La charge et la gravité ne sont pas proportionnelles dans le cours.' },
      { text: 'L\'examen direct est toujours positif avant le début des symptômes', correct: false, correction: 'Non. Sa sensibilité dépend notamment de la quantité d\'organismes et du prélèvement.' },
    ],
    explanation: 'La faible charge fongique relative hors VIH peut diminuer le rendement de la visualisation directe, malgré une maladie sévère. (Cours, p. 16)'
  },
  {
    id: 68,
    type: 'QRM',
    question: 'Quelles propositions décrivent correctement les différences entre pneumocystose VIH et non-VIH exposées dans le cours ?',
    options: [
      { text: 'Le nombre d\'asques est un indicateur linéaire et suffisant de la gravité clinique', correct: false, correction: 'Non. Le cours dissocie explicitement charge fongique et gravité.' },
      { text: 'Chez les non-VIH, la mortalité est nécessairement nulle dès que la PCR est positive', correct: false, correction: 'Non. Le cours indique au contraire une atteinte souvent plus sévère dans ce groupe.' },
      { text: 'Une charge fongique élevée facilite généralement la mise en évidence du champignon', correct: true, correction: 'Oui. Davantage d\'organismes dans le prélèvement facilite leur détection.' },
      { text: 'Chez les patients VIH, l\'installation peut être progressive sur plusieurs semaines', correct: true, correction: 'Oui. Cette évolution insidieuse est soulignée dans le cours.' },
      { text: 'Chez les patients non-VIH, une faible charge fongique peut compliquer le diagnostic', correct: true, correction: 'Oui. Elle contribue à rendre l\'examen direct moins contributif.' },
    ],
    explanation: 'La présentation et la quantité d\'organismes diffèrent selon le terrain, sans relation simple entre charge fongique et sévérité. (Cours, p. 16)'
  },
  {
    id: 69,
    type: 'QCM',
    question: 'Quel prélèvement pulmonaire le cours privilégie-t-il pour mettre en évidence P. jirovecii ?',
    options: [
      { text: 'Un prélèvement nasal seul, toujours équivalent au lavage alvéolaire', correct: false, correction: 'Non. Il n\'explore pas aussi directement le compartiment alvéolaire.' },
      { text: 'Une hémoculture bactérienne standard', correct: false, correction: 'Non. Ce n\'est pas le prélèvement indiqué pour visualiser le champignon alvéolaire.' },
      { text: 'Une biopsie d\'un fruit contaminé', correct: false, correction: 'Non. P. jirovecii n\'a pas ce réservoir environnemental dans le cours.' },
      { text: 'Le liquide de lavage broncho-alvéolaire', correct: true, correction: 'Oui. Il explore directement les alvéoles, site de l\'infection.' },
      { text: 'Un écouvillon cutané', correct: false, correction: 'Non. La pneumocystose est pulmonaire ; cet échantillon ne cible pas le site atteint.' },
    ],
    explanation: 'Les organismes se situent dans les alvéoles ; le liquide de lavage broncho-alvéolaire est le prélèvement respiratoire privilégié dans le cours. (Cours, p. 16-17)'
  },
  {
    id: 70,
    type: 'QRM',
    question: 'Quelles étapes ou propriétés du lavage broncho-alvéolaire (LBA) sont exactes dans le cours ?',
    options: [
      { text: 'Du sérum physiologique est instillé puis réaspiré pour analyse', correct: true, correction: 'Oui. Le liquide récupéré constitue l\'échantillon envoyé au laboratoire.' },
      { text: 'Il échantillonne le compartiment où P. jirovecii se multiplie', correct: true, correction: 'Oui. Le champignon se trouve au niveau alvéolaire.' },
      { text: 'Il est réalisé sous guidage fibroscopique dans les voies respiratoires profondes', correct: true, correction: 'Oui. Le fibroscope permet d\'atteindre le territoire pulmonaire visé.' },
      { text: 'Il repose sur la culture de P. jirovecii dans le liquide instillé', correct: false, correction: 'Non. L\'analyse peut utiliser microscopie et PCR ; la culture usuelle n\'est pas disponible.' },
      { text: 'Il transforme le β-D-glucane sérique en test spécifique de P. jirovecii', correct: false, correction: 'Non. Le biomarqueur reste non spécifique, quel que soit le mode de prélèvement respiratoire.' },
    ],
    explanation: 'Le LBA prélève les voies profondes par fibroscopie après instillation et récupération de sérum physiologique. (Cours, p. 17)'
  },
  {
    id: 71,
    type: 'QCM',
    question: 'À quoi correspond le « nuage spumeux » décrit lors de l\'examen direct d\'un LBA ?',
    options: [
      { text: 'Un halo scanographique autour d\'un nodule aspergillaire', correct: false, correction: 'Non. Le halo est un signe d\'imagerie, pas une observation microscopique en nuage spumeux.' },
      { text: 'Un amas de formes de P. jirovecii visible après coloration adaptée', correct: true, correction: 'Oui. Le cours montre cet aspect en microscopie après coloration MGG.' },
      { text: 'Une colonie obtenue sur gélose de Sabouraud', correct: false, correction: 'Non. P. jirovecii n\'est pas cultivé de cette manière en routine.' },
      { text: 'Une végétation cardiaque de candidose', correct: false, correction: 'Non. Une végétation est une lésion cardiaque et ne correspond pas à cet aspect du LBA.' },
      { text: 'Un dosage sérique spécifique de galactomannane', correct: false, correction: 'Non. Le galactomannane est un biomarqueur surtout associé à Aspergillus.' },
    ],
    explanation: 'Le cours illustre le nuage spumeux dans le LBA coloré au May-Grünwald-Giemsa, avec des formes de P. jirovecii visibles. (Cours, p. 15 et 17)'
  },
  {
    id: 72,
    type: 'QRM',
    question: 'Quels examens peuvent contribuer à la recherche ou au diagnostic de pneumocystose selon le cours ?',
    options: [
      { text: 'Une PCR ciblée sur P. jirovecii', correct: true, correction: 'Oui. Elle recherche l\'ADN du champignon.' },
      { text: 'La microscopie après coloration d\'un prélèvement respiratoire profond', correct: true, correction: 'Oui. L\'examen direct peut montrer les structures fongiques.' },
      { text: 'La fluorescence sur le prélèvement respiratoire', correct: true, correction: 'Oui. Elle permet notamment de visualiser les asques.' },
      { text: 'La culture de P. jirovecii sur un milieu de routine', correct: false, correction: 'Non. Le cours insiste sur l\'absence de culture usuelle de ce champignon.' },
      { text: 'Le β-(1,3)-D-glucane sérique comme argument d\'orientation non spécifique', correct: true, correction: 'Oui. Un résultat positif soutient la suspicion mais ne suffit pas à confirmer l\'espèce.' },
    ],
    explanation: 'Microscopie, fluorescence, PCR et biomarqueur sérique sont complémentaires ; la culture de routine n\'est pas disponible. (Cours, p. 17)'
  },
  {
    id: 73,
    type: 'QCM',
    question: 'Comment interpréter un β-(1,3)-D-glucane positif lors d\'une suspicion de pneumocystose ?',
    options: [
      { text: 'Comme un marqueur spécifique de candidémie uniquement', correct: false, correction: 'Non. Le β-D-glucane est un biomarqueur fongique large.' },
      { text: 'Comme la preuve qu\'une culture de P. jirovecii sera positive', correct: false, correction: 'Non. La culture usuelle de P. jirovecii n\'est pas disponible.' },
      { text: 'Comme un argument compatible à confronter au terrain et aux examens respiratoires', correct: true, correction: 'Oui. Il est utile mais non spécifique de P. jirovecii.' },
      { text: 'Comme une preuve suffisante de P. jirovecii sans autre examen', correct: false, correction: 'Non. D\'autres champignons et certains facteurs de confusion peuvent rendre ce test positif.' },
      { text: 'Comme un examen dont la valeur ne dépend jamais du contexte clinique', correct: false, correction: 'Non. Son interprétation exige précisément le contexte et les autres résultats.' },
    ],
    explanation: 'Le β-D-glucane peut aider à orienter le diagnostic, mais son manque de spécificité interdit d\'en faire une preuve isolée. (Cours, p. 14 et 17)'
  },
  {
    id: 74,
    type: 'QRM',
    question: 'Que faut-il retenir de la PCR P. jirovecii sur prélèvement respiratoire ?',
    options: [
      { text: 'Une PCR positive isolée peut nécessiter une discussion entre colonisation et infection', correct: true, correction: 'Oui. La seule détection de matériel génétique ne prouve pas toujours une maladie active.' },
      { text: 'Son résultat doit être rapproché des signes cliniques, de l\'imagerie et du type de prélèvement', correct: true, correction: 'Oui. Une détection moléculaire se lit dans le contexte du patient.' },
      { text: 'Elle mesure directement la viabilité des organismes détectés', correct: false, correction: 'Non. La détection d\'ADN ne démontre pas à elle seule que les organismes sont vivants.' },
      { text: 'Elle recherche l\'ADN de P. jirovecii', correct: true, correction: 'Oui. C\'est une méthode moléculaire ciblée.' },
      { text: 'Elle doit toujours être confirmée par une culture de P. jirovecii', correct: false, correction: 'Non. Cette culture n\'est pas disponible en pratique courante.' },
    ],
    explanation: 'La PCR complète le faisceau diagnostique ; un résultat positif isolé n\'est pas toujours synonyme de pneumocystose active. (Cours, p. 17 ; précision diagnostique issue des recommandations ECIL)'
  },
  {
    id: 75,
    type: 'QCM',
    question: 'Quelle affirmation sur la culture de P. jirovecii correspond au point à retenir du cours ?',
    options: [
      { text: 'Elle n\'est pas réalisable en culture de routine, d\'où l\'intérêt de la microscopie et de la PCR', correct: true, correction: 'Oui. Le diagnostic ne peut pas s\'appuyer sur une culture usuelle.' },
      { text: 'Elle remplace avantageusement le LBA dans tous les cas', correct: false, correction: 'Non. Le LBA est un prélèvement ; la culture n\'est pas une alternative usuelle.' },
      { text: 'Elle est l\'examen de première intention sur gélose sanguine', correct: false, correction: 'Non. P. jirovecii ne se cultive pas sur les milieux de routine.' },
      { text: 'Une culture négative exclut toujours la pneumocystose', correct: false, correction: 'Non. L\'absence de culture usuelle empêche ce raisonnement.' },
      { text: 'Elle est nécessaire avant toute PCR', correct: false, correction: 'Non. La PCR est appliquée directement à un prélèvement adapté.' },
    ],
    explanation: 'P. jirovecii n\'est pas cultivable par les méthodes diagnostiques usuelles décrites ; le cours privilégie examen direct et PCR. (Cours, p. 17-18)'
  },
  {
    id: 76,
    type: 'QRM',
    question: 'Quelles propositions concernant le cotrimoxazole dans la pneumocystose sont exactes ?',
    options: [
      { text: 'Une voie intraveineuse peut être utilisée lorsque la voie orale est impossible ou la situation sévère', correct: true, correction: 'Oui. La voie est adaptée à l\'état clinique, puis un relais oral est possible.' },
      { text: 'Il correspond à l\'association voriconazole-amphotéricine B', correct: false, correction: 'Non. Ce sont des antifongiques distincts ; le cotrimoxazole est TMP-SMX.' },
      { text: 'Il associe le triméthoprime et le sulfaméthoxazole', correct: true, correction: 'Oui. Ce sont les deux molécules du cotrimoxazole.' },
      { text: 'Il est le traitement curatif de référence présenté dans le cours', correct: true, correction: 'Oui. Il constitue la base du traitement de première intention.' },
      { text: 'Il peut aussi être utilisé en prophylaxie à une posologie différente', correct: true, correction: 'Oui. La prévention emploie un schéma moins intensif que le traitement curatif.' },
    ],
    explanation: 'Le cotrimoxazole (TMP-SMX) sert au traitement et à la prévention, avec des doses et voies adaptées à l\'indication et à la gravité. (Cours, p. 17-18)'
  },
  {
    id: 77,
    type: 'QCM',
    question: 'Quelle durée de traitement curatif par cotrimoxazole est retenue pour la pneumocystose chez l\'adulte vivant avec le VIH ?',
    options: [
      { text: 'Exactement 7 jours', correct: false, correction: 'Non. Le cours donne trois semaines, et non une semaine.' },
      { text: '48 heures', correct: false, correction: 'Non. Deux jours sont très insuffisants pour le traitement curatif.' },
      { text: 'Une durée illimitée à dose curative pour tous', correct: false, correction: 'Non. Le traitement curatif est limité dans le temps ; une prophylaxie peut ensuite être indiquée.' },
      { text: '21 jours', correct: true, correction: 'Oui. Trois semaines correspondent à la durée donnée par le cours et les recommandations VIH.' },
      { text: 'Une dose unique', correct: false, correction: 'Non. La pneumocystose exige un traitement prolongé.' },
    ],
    explanation: 'Le cours indique trois semaines de cotrimoxazole ; cette durée de 21 jours est également celle recommandée pour la pneumocystose associée au VIH. (Cours, p. 17)'
  },
  {
    id: 78,
    type: 'QRM',
    question: 'Quelles affirmations sur la corticothérapie adjuvante dans la pneumocystose sont justes ?',
    options: [
      { text: 'Elle est obligatoire chez tout porteur asymptomatique de P. jirovecii', correct: false, correction: 'Non. Le portage n\'est pas une indication à une corticothérapie.' },
      { text: 'Son bénéfice est établi chez les patients VIH ayant une pneumocystose modérée à sévère avec hypoxémie', correct: true, correction: 'Oui. C\'est le contexte où les recommandations la préconisent.' },
      { text: 'Elle s\'ajoute au traitement anti-Pneumocystis et ne le remplace pas', correct: true, correction: 'Oui. Elle est adjuvante au cotrimoxazole ou à une autre thérapie active.' },
      { text: 'Elle est universellement interdite chez les non-VIH, quelle que soit la gravité', correct: false, correction: 'Non. Les recommandations de ce groupe appellent à une décision individualisée.' },
      { text: 'Chez les patients non-VIH, son indication doit être appréciée au cas par cas', correct: true, correction: 'Oui. Le bénéfice n\'y est pas établi de façon aussi solide que chez les patients VIH.' },
    ],
    explanation: 'Le support insiste sur le bénéfice démontré chez les patients VIH hypoxémiques ; hors VIH, la décision dépend du contexte et n\'est pas une interdiction absolue. (Cours, p. 18 ; recommandations NIH et ECIL)'
  },
  {
    id: 79,
    type: 'QCM',
    question: 'Que signifie « prophylaxie primaire » de la pneumocystose ?',
    options: [
      { text: 'Prévenir un premier épisode chez une personne dont le risque le justifie', correct: true, correction: 'Oui. Elle est mise en place avant toute pneumocystose documentée.' },
      { text: 'Traiter à dose curative une pneumocystose en cours', correct: false, correction: 'Non. Le traitement curatif et la prophylaxie n\'ont pas le même objectif.' },
      { text: 'Isoler définitivement le patient de tout contact humain', correct: false, correction: 'Non. Le cours explique justement qu\'un tel isolement n\'est pas réaliste.' },
      { text: 'Prévenir une récidive après une pneumocystose antérieure', correct: false, correction: 'Non. Cette situation correspond à une prophylaxie secondaire.' },
      { text: 'Dépister systématiquement tous les porteurs asymptomatiques', correct: false, correction: 'Non. La prophylaxie cible des patients à risque ; elle n\'est pas un test de dépistage.' },
    ],
    explanation: 'La prophylaxie primaire protège un patient à risque avant le premier épisode ; la prophylaxie secondaire vise la récidive après un épisode antérieur. (Cours, p. 18)'
  },
  {
    id: 80,
    type: 'QRM',
    question: 'Quelles affirmations sur la prévention et la surveillance du cotrimoxazole sont exactes ?',
    options: [
      { text: 'Des réactions allergiques et des cytopénies figurent parmi les effets indésirables à surveiller', correct: true, correction: 'Oui. Le cours cite ces deux complications.' },
      { text: 'Une prophylaxie secondaire désigne la prévention avant tout premier épisode', correct: false, correction: 'Non. Cette définition est celle de la prophylaxie primaire.' },
      { text: 'Une altération de la fonction rénale peut compliquer le traitement', correct: true, correction: 'Oui. La fonction rénale est un point de surveillance mentionné.' },
      { text: 'Une prophylaxie secondaire peut être indiquée après un épisode si l\'immunodépression persiste', correct: true, correction: 'Oui. Elle vise à prévenir une nouvelle pneumocystose.' },
      { text: 'Le schéma prophylactique de cotrimoxazole est moins intensif que le traitement curatif', correct: true, correction: 'Oui. La posologie dépend de l\'objectif préventif ou curatif.' },
    ],
    explanation: 'La prévention secondaire dépend du maintien du risque ; le cotrimoxazole prophylactique demande aussi une surveillance des effets allergiques, hématologiques et rénaux. (Cours, p. 18)'
  },
]
