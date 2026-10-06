export const meta = {
  title: 'Zoonose bactérienne',
}

export default [
  {
    id: 1,
    type: 'QCM',
    question: 'Quelle définition correspond à une zoonose ?',
    options: [
      { text: 'Une maladie qui ne touche que les animaux domestiques', correct: false, correction: 'Non. La transmission à l\'être humain fait partie de la définition.' },
      { text: 'Une maladie humaine due uniquement à une bactérie', correct: false, correction: 'Non. Des virus et des parasites peuvent aussi être en cause.' },
      { text: 'Une infection qui ne peut jamais avoir de réservoir animal asymptomatique', correct: false, correction: 'Non. Un animal porteur peut ne pas être malade.' },
      { text: 'Une infection transmissible naturellement entre un animal et l\'être humain', correct: true, correction: 'Oui. Elle implique un passage possible entre l\'animal et l\'humain.' },
      { text: 'Une infection obligatoirement transmise par un moustique', correct: false, correction: 'Non. Le vecteur n\'est qu\'une voie possible parmi d\'autres.' },
    ],
    explanation: 'Le cours définit la zoonose par la transmission naturelle entre animal et humain ; il présente ensuite plusieurs types d\'agents et cinq voies d\'exposition. (Cours, p. 2)'
  },
  {
    id: 2,
    type: 'QRM',
    question: 'Quels éléments caractérisent correctement le rôle des animaux dans les zoonoses ?',
    options: [
      { text: 'Le réservoir peut être un animal sauvage ou domestique selon l\'agent', correct: true, correction: 'Oui. Le cours cite notamment chats, rongeurs, oiseaux et animaux d\'élevage.' },
      { text: 'Une zoonose est par définition toujours bactérienne', correct: false, correction: 'Non. Le cours évoque aussi des zoonoses virales et parasitaires.' },
      { text: 'Tous les animaux réservoirs présentent forcément une fièvre visible', correct: false, correction: 'Non. Plusieurs réservoirs décrits sont porteurs sains.' },
      { text: 'La prévention peut inclure des mesures vétérinaires et d\'hygiène', correct: true, correction: 'Oui. La maîtrise du risque ne se limite pas au soin humain.' },
      { text: 'Un animal peut héberger un agent pathogène sans signe clinique', correct: true, correction: 'Oui. Un portage asymptomatique n\'empêche pas la transmission.' },
    ],
    explanation: 'L\'exposition humaine dépend du réservoir, du mode de contact et de la maîtrise du risque dans les élevages ou chez les animaux de compagnie. (Cours, p. 2)'
  },
  {
    id: 3,
    type: 'QCM',
    question: 'Après une morsure de chat, quel agent bactérien du cours évoque-t-on particulièrement devant une infection locale rapide ?',
    options: [
      { text: 'Pasteurella multocida', correct: true, correction: 'Oui. Elle est fréquente dans la flore buccale des chats et peut provoquer une infection rapide.' },
      { text: 'Coxiella burnetii', correct: false, correction: 'Non. La fièvre Q est surtout acquise par inhalation d\'aérosols contaminés.' },
      { text: 'Brucella melitensis', correct: false, correction: 'Non. L\'exposition évoquée dans le cours est surtout liée au bétail ou aux produits laitiers crus.' },
      { text: 'Leptospira interrogans', correct: false, correction: 'Non. Son exposition typique passe par l\'eau ou un milieu souillé par l\'urine animale.' },
      { text: 'Borrelia burgdorferi', correct: false, correction: 'Non. La borréliose de Lyme est transmise par une tique Ixodes.' },
    ],
    explanation: 'Le chat ou le chien peut être porteur de P. multocida ; l\'inoculation par morsure ou griffure provoque souvent une inflammation précoce. (Cours, p. 2, 9)'
  },
  {
    id: 4,
    type: 'QRM',
    question: 'Quelles associations entre agent et voie d\'exposition sont cohérentes avec le panorama du cours ?',
    options: [
      { text: 'Coxiella burnetii — inhalation d\'aérosols d\'élevage', correct: true, correction: 'Oui. La voie respiratoire domine dans la fièvre Q.' },
      { text: 'Leptospira interrogans — transmission habituelle par piqûre de tique Ixodes', correct: false, correction: 'Non. La voie classique est le contact avec eau ou sol souillés.' },
      { text: 'Borrelia burgdorferi — piqûre de tique', correct: true, correction: 'Oui. Ixodes joue le rôle de vecteur.' },
      { text: 'Brucella — produits laitiers non pasteurisés', correct: true, correction: 'Oui. L\'ingestion est un contexte classique de brucellose.' },
      { text: 'Bartonella henselae — contamination habituelle par eau douce souillée', correct: false, correction: 'Non. Cette description correspond mieux à la leptospirose ; Bartonella est liée aux chats.' },
    ],
    explanation: 'Les voies d\'exposition aident à organiser l\'interrogatoire : morsure, vecteur, contact cutanéo-muqueux, inhalation et ingestion. (Cours, p. 2–6)'
  },
  {
    id: 5,
    type: 'QCM',
    question: 'Une personne a nagé dans une eau douce possiblement souillée par des urines de rongeurs. Quelle zoonose du cours correspond à cette exposition ?',
    options: [
      { text: 'La maladie des griffes du chat', correct: false, correction: 'Non. Elle suit plutôt un contact avec un chat, souvent une griffure.' },
      { text: 'La psittacose', correct: false, correction: 'Non. Elle est liée à l\'inhalation de poussières d\'oiseaux contaminées.' },
      { text: 'La leptospirose', correct: true, correction: 'Oui. Leptospira peut pénétrer par les muqueuses ou une peau lésée après exposition à une eau contaminée.' },
      { text: 'La maladie de Lyme', correct: false, correction: 'Non. Elle implique une piqûre de tique infectée.' },
      { text: 'La fièvre Q', correct: false, correction: 'Non. Son contexte classique est l\'inhalation d\'aérosols associés au bétail.' },
    ],
    explanation: 'Le cours relie la leptospirose aux rongeurs et à l\'eau douce contaminée ; la porte d\'entrée est surtout cutanée ou muqueuse. (Cours, p. 4)'
  },
  {
    id: 6,
    type: 'QRM',
    question: 'Au sujet des contacts cutanés ou muqueux avec un milieu contaminé, quelles propositions sont correctes ?',
    options: [
      { text: 'Une plaie profonde et visible est toujours indispensable à ces deux infections', correct: false, correction: 'Non. Une micro-abrasion ou une muqueuse peut suffire selon l\'agent.' },
      { text: 'Manipuler un lièvre infecté peut exposer à Francisella tularensis', correct: true, correction: 'Oui. Le contact avec le gibier est un contexte classique de tularémie.' },
      { text: 'Ces deux bactéries sont obligatoirement transmises par ingestion de fromage', correct: false, correction: 'Non. Leur voie caractéristique ici est le contact avec animal ou milieu souillé.' },
      { text: 'De l\'eau douce contaminée par l\'urine de rongeurs peut exposer aux leptospires', correct: true, correction: 'Oui. Les muqueuses et les petites lésions de peau sont des portes d\'entrée.' },
      { text: 'La conjonctive ne peut jamais être une porte d\'entrée pour la tularémie', correct: false, correction: 'Non. La voie conjonctivale est justement possible après un contact contaminant.' },
    ],
    explanation: 'La catégorie « cutanéo-muqueuse » regroupe notamment Francisella et Leptospira, sans exclure d\'autres voies possibles selon l\'agent. (Cours, p. 4, 33)'
  },
  {
    id: 7,
    type: 'QCM',
    question: 'Quel agent doit être évoqué devant une fièvre après inhalation de poussières près d\'un élevage ovin ?',
    options: [
      { text: 'Coxiella burnetii', correct: true, correction: 'Oui. La fièvre Q s\'acquiert surtout par inhalation d\'aérosols contaminés provenant d\'animaux d\'élevage.' },
      { text: 'Pasteurella multocida', correct: false, correction: 'Non. Le contexte typique est une morsure ou une griffure avec infection locale rapide.' },
      { text: 'Borrelia burgdorferi', correct: false, correction: 'Non. Elle est surtout inoculée par une tique.' },
      { text: 'Bartonella henselae', correct: false, correction: 'Non. Une exposition aux chats et une adénopathie régionale seraient plus évocatrices.' },
      { text: 'Leptospira interrogans', correct: false, correction: 'Non. L\'eau douce souillée par l\'urine animale est un contexte plus habituel.' },
    ],
    explanation: 'L\'interrogatoire professionnel ou environnemental oriente vers la fièvre Q après exposition à des aérosols d\'élevage. (Cours, p. 5)'
  },
  {
    id: 8,
    type: 'QRM',
    question: 'Quelles zoonoses ou infections du panorama peuvent s\'acquérir par inhalation dans les situations décrites ?',
    options: [
      { text: 'Psittacose après inhalation de poussières liées à des oiseaux', correct: true, correction: 'Oui. L\'exposition aux oiseaux est le point clé.' },
      { text: 'Charbon pulmonaire après inhalation de spores', correct: true, correction: 'Oui. Les spores de B. anthracis résistent dans l\'environnement.' },
      { text: 'Pasteurellose d\'inoculation après simple respiration d\'air forestier', correct: false, correction: 'Non. La forme d\'inoculation suit surtout une morsure ou griffure.' },
      { text: 'Brucellose après piqûre de tique Ixodes comme voie principale du cours', correct: false, correction: 'Non. Le cours met en avant les produits animaux et le contact avec le bétail.' },
      { text: 'Fièvre Q après inhalation de poussières ou d\'aérosols d\'élevage', correct: true, correction: 'Oui. Coxiella peut être portée par ces aérosols.' },
    ],
    explanation: 'La voie respiratoire associe dans le support Coxiella, l\'agent de la psittacose et les spores de B. anthracis ; le mécanisme exact dépend de l\'agent. (Cours, p. 5)'
  },
  {
    id: 9,
    type: 'QCM',
    question: 'Un voyageur fébrile a consommé du fromage au lait cru dans une région où la brucellose circule. Quel agent oriente d\'abord l\'enquête ?',
    options: [
      { text: 'Bartonella henselae', correct: false, correction: 'Non. Cette bactérie est liée aux chats et aux griffures.' },
      { text: 'Borrelia burgdorferi', correct: false, correction: 'Non. Il faudrait surtout rechercher une piqûre de tique et un tableau compatible.' },
      { text: 'Pasteurella multocida', correct: false, correction: 'Non. La morsure animale serait le contexte typique.' },
      { text: 'Brucella spp.', correct: true, correction: 'Oui. Les laitages non pasteurisés constituent une exposition classique à Brucella.' },
      { text: 'Rickettsia spp.', correct: false, correction: 'Non. Ces agents relèvent surtout d\'une transmission par arthropodes.' },
    ],
    explanation: 'Le cours utilise le fromage au lait cru comme exemple d\'exposition digestive à la brucellose ; les signes sont peu spécifiques et demandent confirmation microbiologique. (Cours, p. 6)'
  },
  {
    id: 10,
    type: 'QRM',
    question: 'Quelles associations du cours concernent une transmission alimentaire possible ?',
    options: [
      { text: 'Listeria monocytogenes — aliments contaminés conservés au froid', correct: true, correction: 'Oui. Le froid ne stoppe pas sa multiplication.' },
      { text: 'Brucella — laitages non pasteurisés', correct: true, correction: 'Oui. Les produits laitiers crus sont une source classique.' },
      { text: 'Bacillus anthracis — ingestion possible d\'un produit animal contaminé', correct: true, correction: 'Oui. Le charbon n\'est pas limité à la voie respiratoire.' },
      { text: 'Campylobacter — aliments d\'origine animale contaminés', correct: true, correction: 'Oui. Le cours cite Campylobacter parmi les agents digestifs.' },
      { text: 'Bartonella henselae — lait cru comme voie habituelle', correct: false, correction: 'Non. La maladie des griffes du chat n\'est pas classée ainsi.' },
    ],
    explanation: 'Le panorama digestif inclut notamment brucellose, listériose, charbon digestif, salmonelles non typhiques et Campylobacter. (Cours, p. 6–7)'
  },
  {
    id: 11,
    type: 'QCM',
    question: 'Pourquoi conserver un aliment contaminé au réfrigérateur n\'élimine-t-il pas le risque de listériose ?',
    options: [
      { text: 'Listeria est un virus inactivé uniquement par la congélation', correct: false, correction: 'Non. C\'est une bactérie, pas un virus.' },
      { text: 'La listériose est acquise uniquement par morsure de chat', correct: false, correction: 'Non. La transmission alimentaire est centrale.' },
      { text: 'Une réfrigération à 4 °C stérilise tous les aliments', correct: false, correction: 'Non. Le froid n\'est pas une stérilisation.' },
      { text: 'Le froid transforme systématiquement Listeria en Brucella', correct: false, correction: 'Non. Un changement d\'espèce bactérienne ne se produit pas ainsi.' },
      { text: 'Listeria monocytogenes peut se multiplier à basse température', correct: true, correction: 'Oui. La réfrigération ralentit beaucoup de bactéries mais n\'empêche pas Listeria de croître.' },
    ],
    explanation: 'Le cours rappelle le caractère psychrotrophe de Listeria : elle peut proliférer dans des aliments réfrigérés. (Cours, p. 6)'
  },
  {
    id: 12,
    type: 'QRM',
    question: 'Concernant la prévention alimentaire de la listériose, quelles propositions sont justes ?',
    options: [
      { text: 'Le nettoyage et la maîtrise des aliments à risque sont des mesures utiles', correct: true, correction: 'Oui. La prévention repose sur plusieurs gestes d\'hygiène alimentaire.' },
      { text: 'Un aliment cru à risque devient toujours sûr dès qu\'il est placé à 4 °C', correct: false, correction: 'Non. Listeria peut encore se multiplier à cette température.' },
      { text: 'Une vaccination humaine contre Listeria remplace toutes les précautions alimentaires', correct: false, correction: 'Non. Cette stratégie n\'existe pas dans le cours.' },
      { text: 'La grossesse et l\'immunodépression justifient une vigilance particulière', correct: true, correction: 'Oui. Ces groupes sont plus exposés aux formes graves.' },
      { text: 'La durée de conservation et l\'hygiène du réfrigérateur comptent', correct: true, correction: 'Oui. Limiter la contamination et la durée de stockage réduit le risque.' },
    ],
    explanation: 'La prévention des formes alimentaires repose sur la sélection et la conservation des aliments, particulièrement chez les personnes vulnérables. (Cours, p. 6)'
  },
  {
    id: 13,
    type: 'QCM',
    question: 'Quel vecteur est associé à la transmission de la borréliose de Lyme à l\'être humain ?',
    options: [
      { text: 'L\'ingestion de fromage de chèvre au lait cru', correct: false, correction: 'Non. Ce contexte oriente plutôt vers Brucella.' },
      { text: 'Une morsure directe de chien sans arthropode', correct: false, correction: 'Non. Lyme est une maladie vectorielle à tique.' },
      { text: 'Une tique du genre Ixodes', correct: true, correction: 'Oui. C\'est le vecteur décrit pour Borrelia dans le cours.' },
      { text: 'Une inhalation de poussières d\'oiseaux', correct: false, correction: 'Non. Ce contexte évoque plutôt la psittacose.' },
      { text: 'Une puce de chat comme voie habituelle de Lyme', correct: false, correction: 'Non. La puce intervient dans le cycle de Bartonella chez le chat.' },
    ],
    explanation: 'Le cours distingue la piqûre d\'Ixodes des autres voies de zoonoses ; le retrait rapide d\'une tique et l\'inspection après exposition font partie de la prévention. (Cours, p. 3, 24)'
  },
  {
    id: 14,
    type: 'QRM',
    question: 'Au sujet des arthropodes et des agents infectieux cités, quelles propositions sont exactes ?',
    options: [
      { text: 'Les tiques peuvent transmettre des Borrelia', correct: true, correction: 'Oui. Le genre Ixodes transmet la borréliose de Lyme.' },
      { text: 'Les puces jouent un rôle dans la circulation de Bartonella henselae entre chats', correct: true, correction: 'Oui. Leurs déjections peuvent contaminer le pelage et les griffes.' },
      { text: 'Toutes les zoonoses à vecteur sont causées par des bactéries', correct: false, correction: 'Non. Des parasites et des virus peuvent aussi être vectoriels.' },
      { text: 'Toutes les rickettsioses sont transmises uniquement par Ixodes', correct: false, correction: 'Non. Le vecteur varie selon la rickettsiose ; des poux peuvent aussi transmettre certains agents.' },
      { text: 'Un chat est le vecteur obligatoire de Borrelia burgdorferi', correct: false, correction: 'Non. Le vecteur est une tique, même si le patient possède un chat.' },
    ],
    explanation: 'Le cours associe chaque agent à son vecteur propre ; posséder un animal ne remplace pas l\'analyse de la véritable voie d\'exposition. (Cours, p. 3, 21, 24)'
  },
  {
    id: 15,
    type: 'QCM',
    question: 'Quelle propriété explique la persistance de Bacillus anthracis dans l\'environnement ?',
    options: [
      { text: 'Une multiplication exclusive à 4 °C dans le réfrigérateur', correct: false, correction: 'Non. Cette particularité est plutôt évoquée pour Listeria.' },
      { text: 'L\'impossibilité de survivre hors du corps humain', correct: false, correction: 'Non. Ses spores persistent au contraire dans le milieu.' },
      { text: 'La formation de spores résistantes', correct: true, correction: 'Oui. Les spores permettent une longue survie hors de l\'hôte.' },
      { text: 'Une transmission obligatoire par tique Ixodes', correct: false, correction: 'Non. Le charbon peut être acquis par contact, inhalation ou ingestion selon le contexte.' },
      { text: 'Une capsule virale résistante au dessèchement', correct: false, correction: 'Non. B. anthracis est une bactérie, non un virus.' },
    ],
    explanation: 'Le charbon est dû à un bacille à Gram positif sporulant ; la spore explique sa résistance environnementale. (Cours, p. 5, 7)'
  },
  {
    id: 16,
    type: 'QRM',
    question: 'À propos du charbon dû à Bacillus anthracis, quelles propositions sont compatibles avec le cours ?',
    options: [
      { text: 'La bactérie est un bacille à Gram positif sporulant', correct: true, correction: 'Oui. Cette morphologie est indiquée dans le cours.' },
      { text: 'Une exposition par inhalation de spores est possible', correct: true, correction: 'Oui. Elle peut provoquer une forme respiratoire grave.' },
      { text: 'La seule voie d\'acquisition est une griffure de chat', correct: false, correction: 'Non. Elle correspond davantage à d\'autres zoonoses.' },
      { text: 'L\'ingestion de produits animaux contaminés peut être une voie d\'acquisition', correct: true, correction: 'Oui. Le support cite également la voie digestive.' },
      { text: 'Le charbon est une parasitose due à Leishmania', correct: false, correction: 'Non. B. anthracis est une bactérie.' },
    ],
    explanation: 'La même bactérie peut donner plusieurs formes selon la voie d\'exposition ; le cours cite l\'inhalation et l\'ingestion. (Cours, p. 5, 7)'
  },
  {
    id: 17,
    type: 'QCM',
    question: 'Une morsure a souillé une plaie avec de la terre. Quel énoncé distingue correctement le tétanos des zoonoses de ce chapitre ?',
    options: [
      { text: 'Le tétanos est provoqué par Bartonella henselae', correct: false, correction: 'Non. Bartonella cause la maladie des griffes du chat.' },
      { text: 'Le tétanos est nécessairement transmis par la salive d\'un chien infecté', correct: false, correction: 'Non. La bactérie est associée à des spores de l\'environnement.' },
      { text: 'La prévention du tétanos repose sur un antiviral', correct: false, correction: 'Non. La prévention implique l\'évaluation du statut vaccinal et de la plaie.' },
      { text: 'Une morsure exclut toute exposition au tétanos', correct: false, correction: 'Non. Une plaie souillée peut exposer aux spores de C. tetani.' },
      { text: 'Clostridium tetani provient de l\'environnement ; le tétanos n\'est pas une zoonose au sens du cours', correct: true, correction: 'Oui. Le lien est la souillure de la plaie, pas un réservoir animal obligatoire.' },
    ],
    explanation: 'Le cas clinique du support rappelle qu\'une même morsure peut conduire à évaluer plusieurs risques, dont le tétanos environnemental, distinct d\'une zoonose. (Cours, p. 7–8)'
  },
  {
    id: 18,
    type: 'QRM',
    question: 'Après une morsure animale profonde, quels éléments méritent une évaluation initiale ?',
    options: [
      { text: 'Le contexte de l\'animal et de l\'exposition pour le risque rabique', correct: true, correction: 'Oui. L\'origine et la disponibilité de l\'animal comptent dans l\'évaluation.' },
      { text: 'Supposer le statut antitétanique à jour sans vérifier la date des rappels', correct: false, correction: 'Non. Le statut vaccinal réel doit être vérifié devant une plaie souillée.' },
      { text: 'La profondeur et la localisation de la plaie', correct: true, correction: 'Oui. Elles influencent le risque infectieux et la prise en charge.' },
      { text: 'Une sérologie Bartonella systématique dès les premières minutes', correct: false, correction: 'Non. Elle ne remplace pas l\'évaluation immédiate d\'une morsure.' },
      { text: 'L\'absence automatique de bactéries si l\'animal paraît sain', correct: false, correction: 'Non. Un animal asymptomatique peut porter des agents dans sa flore buccale.' },
    ],
    explanation: 'Une morsure impose d\'examiner la plaie et les expositions associées ; l\'apparence saine de l\'animal n\'exclut pas un portage bactérien. (Cours, p. 2, 7–9)'
  },
  {
    id: 19,
    type: 'QCM',
    question: 'Quelle bactérie du cours est responsable de la peste bubonique ?',
    options: [
      { text: 'Yersinia pestis', correct: true, correction: 'Oui. Cette entérobactérie est l\'agent de la peste ; sa transmission classique implique les puces de rongeurs.' },
      { text: 'Borrelia burgdorferi', correct: false, correction: 'Non. Elle appartient au complexe responsable de la borréliose de Lyme.' },
      { text: 'Francisella tularensis', correct: false, correction: 'Non. Elle est responsable de la tularémie, souvent liée au gibier ou aux tiques.' },
      { text: 'Coxiella burnetii', correct: false, correction: 'Non. Elle est responsable de la fièvre Q, notamment après inhalation d\'aérosols d\'élevage.' },
      { text: 'Bacillus anthracis', correct: false, correction: 'Non. Il est responsable du charbon, pas de la peste.' },
    ],
    explanation: 'Le panorama classe Y. pestis parmi les zoonoses à transmission vectorielle et la désigne comme l\'agent de la peste bubonique. (Cours, p. 3)'
  },
  {
    id: 20,
    type: 'QRM',
    question: 'Quelles mesures générales réduisent le risque des zoonoses évoquées dans ce cours ?',
    options: [
      { text: 'Considérer qu\'un animal sain d\'apparence ne peut porter aucun agent', correct: false, correction: 'Non. Le portage asymptomatique est possible.' },
      { text: 'Utiliser le même geste préventif unique pour toutes les voies de transmission', correct: false, correction: 'Non. La protection dépend de la morsure, du vecteur, de l\'inhalation ou de l\'aliment.' },
      { text: 'Appliquer les contrôles sanitaires aux animaux et aux produits d\'élevage', correct: true, correction: 'Oui. La prévention vétérinaire et alimentaire intervient en amont.' },
      { text: 'Limiter les morsures et nettoyer rapidement les plaies', correct: true, correction: 'Oui. Cela réduit l\'inoculation et permet d\'évaluer les autres risques.' },
      { text: 'Inspecter la peau après une activité exposant aux tiques', correct: true, correction: 'Oui. Le retrait rapide d\'une tique participe à la prévention.' },
    ],
    explanation: 'Le cours relie la prévention aux expositions : animaux, arthropodes, eau, aérosols et aliments. (Cours, p. 2–7)'
  },
  {
    id: 21,
    type: 'QCM',
    question: 'Une plaie de morsure de chat devient très douloureuse, rouge et œdématiée quelques heures après l\'accident. Quel agent du cours est le plus évocateur ?',
    options: [
      { text: 'Pasteurella multocida', correct: true, correction: 'Oui. La pasteurellose d\'inoculation débute souvent rapidement avec une inflammation douloureuse.' },
      { text: 'Coxiella burnetii', correct: false, correction: 'Non. La voie habituelle est respiratoire après exposition au bétail.' },
      { text: 'Brucella melitensis', correct: false, correction: 'Non. Le tableau attendu n\'est pas une cellulite très précoce après morsure.' },
      { text: 'Bartonella henselae', correct: false, correction: 'Non. L\'adénopathie de la maladie des griffes du chat est généralement plus tardive.' },
      { text: 'Borrelia burgdorferi', correct: false, correction: 'Non. Elle est transmise par une tique, non par une morsure de chat.' },
    ],
    explanation: 'Le délai court et la douleur marquée sont les indices principaux de la pasteurellose d\'inoculation. (Cours, p. 9)'
  },
  {
    id: 22,
    type: 'QRM',
    question: 'À propos du réservoir et de l\'inoculation de Pasteurella multocida, quelles propositions sont justes ?',
    options: [
      { text: 'Un animal sain d\'apparence exclut la présence de la bactérie', correct: false, correction: 'Non. Le portage asymptomatique rend cet argument insuffisant.' },
      { text: 'Chiens et chats peuvent porter la bactérie sans être malades', correct: true, correction: 'Oui. La flore des voies aériennes supérieures peut héberger Pasteurella.' },
      { text: 'Une griffure ou une plaie souillée par des sécrétions animales peuvent aussi exposer', correct: true, correction: 'Oui. La morsure n\'est pas l\'unique porte d\'entrée.' },
      { text: 'La transmission habituelle exige une tique Ixodes', correct: false, correction: 'Non. Cette tique est associée surtout à la borréliose de Lyme.' },
      { text: 'La morsure est une voie fréquente de contamination humaine', correct: true, correction: 'Oui. La salive peut inoculer la bactérie dans la plaie.' },
    ],
    explanation: 'Pasteurella vit dans la flore de nombreux animaux et peut être inoculée à l\'humain lors d\'un contact traumatique. (Cours, p. 2, 9)'
  },
  {
    id: 23,
    type: 'QCM',
    question: 'Quelle description microbiologique correspond à Pasteurella multocida dans ce cours ?',
    options: [
      { text: 'Un coccobacille à Gram négatif, souvent à coloration bipolaire', correct: true, correction: 'Oui. Cette morphologie est décrite dans le chapitre diagnostique.' },
      { text: 'Un bacille à Gram positif sporulant', correct: false, correction: 'Non. Cela évoque Bacillus anthracis.' },
      { text: 'Un parasite protozoaire du chat', correct: false, correction: 'Non. La description n\'a rien à voir avec Pasteurella.' },
      { text: 'Un virus à ARN transmis par morsure', correct: false, correction: 'Non. Pasteurella est une bactérie.' },
      { text: 'Un spirochète hélicoïdal transmis par Ixodes', correct: false, correction: 'Non. Cela décrit Borrelia.' },
    ],
    explanation: 'L\'examen direct et la culture aident à identifier Pasteurella multocida dans une plaie infectée. (Cours, p. 11)'
  },
  {
    id: 24,
    type: 'QRM',
    question: 'Quels signes peuvent accompagner une pasteurellose d\'inoculation après morsure ?',
    options: [
      { text: 'Une absence garantie de complication dès que la plaie paraît petite', correct: false, correction: 'Non. Une petite plaie peut être profonde et s\'infecter.' },
      { text: 'Un œdème et une inflammation précoces', correct: true, correction: 'Oui. La réaction locale débute souvent en quelques heures.' },
      { text: 'Une lymphangite est impossible dans la pasteurellose', correct: false, correction: 'Non. Le cours cite justement une lymphangite parmi les manifestations possibles.' },
      { text: 'Une adénopathie indolore isolée apparue plusieurs mois après comme présentation obligatoire', correct: false, correction: 'Non. Cette chronologie cadre moins avec la pasteurellose aiguë.' },
      { text: 'Une douleur locale parfois vive', correct: true, correction: 'Oui. Elle peut être disproportionnée par rapport à l\'aspect initial de la plaie.' },
    ],
    explanation: 'La forme d\'inoculation associe volontiers douleur, œdème et inflammation rapide, parfois avec lymphangite ou adénopathie satellite. (Cours, p. 9–10)'
  },
  {
    id: 25,
    type: 'QCM',
    question: 'Une plaie de morsure est purulente et le médecin souhaite documenter la bactérie responsable. Quel prélèvement est le plus directement pertinent ?',
    options: [
      { text: 'Aucun examen possible car Pasteurella ne pousse jamais en culture', correct: false, correction: 'Non. Elle peut être cultivée au laboratoire.' },
      { text: 'Un prélèvement de la plaie infectée pour examen bactériologique et culture', correct: true, correction: 'Oui. Il documente l\'infection au site d\'inoculation.' },
      { text: 'Une PCR sanguine systématique à la place de toute évaluation de la plaie', correct: false, correction: 'Non. La situation locale et la culture orientent d\'abord les prélèvements.' },
      { text: 'Un ECBU sans symptôme urinaire', correct: false, correction: 'Non. L\'urine ne prélève pas la plaie infectée.' },
      { text: 'Une sérologie Bartonella isolée comme preuve de Pasteurella', correct: false, correction: 'Non. Elle recherche un autre agent et ne confirme pas Pasteurella.' },
    ],
    explanation: 'La culture d\'un prélèvement adapté à la plaie est la démarche directe enseignée ; les prélèvements changent si l\'atteinte est profonde ou systémique. (Cours, p. 10–11)'
  },
  {
    id: 26,
    type: 'QRM',
    question: 'Comment adapter les prélèvements devant une suspicion de pasteurellose ?',
    options: [
      { text: 'Un prélèvement respiratoire peut être utile dans une forme pulmonaire', correct: true, correction: 'Oui. Le site exploré dépend de l\'organe atteint.' },
      { text: 'La sérologie Pasteurella remplace toujours la culture locale', correct: false, correction: 'Non. Elle n\'est pas l\'examen de première intention du tableau présenté.' },
      { text: 'Une plaie infectée peut être prélevée pour culture', correct: true, correction: 'Oui. Le prélèvement local est cohérent avec une forme d\'inoculation.' },
      { text: 'L\'absence de fièvre interdit formellement tout prélèvement de plaie', correct: false, correction: 'Non. Une infection locale peut être documentée sans fièvre.' },
      { text: 'Des hémocultures se discutent si fièvre ou infection systémique sont suspectées', correct: true, correction: 'Oui. Elles visent une éventuelle bactériémie.' },
    ],
    explanation: 'Le support oppose la plaie locale à des formes plus graves pour lesquelles des hémocultures ou d\'autres prélèvements peuvent être indiqués. (Cours, p. 10)'
  },
  {
    id: 27,
    type: 'QCM',
    question: 'Dans une morsure de chat infectée, pourquoi préfère-t-on généralement une couverture antibiotique de la flore de morsure plutôt que de viser Pasteurella seule ?',
    options: [
      { text: 'Parce qu\'une seule morsure ne peut jamais inoculer Pasteurella', correct: false, correction: 'Non. L\'inoculation par morsure est classique.' },
      { text: 'Parce que Pasteurella est un virus résistant à tous les antibiotiques', correct: false, correction: 'Non. C\'est une bactérie sensible à plusieurs antibiotiques.' },
      { text: 'Parce que toutes les morsures doivent recevoir exactement le même traitement sans examen', correct: false, correction: 'Non. Le choix dépend de la plaie, du terrain et du contexte.' },
      { text: 'Parce que l\'acide clavulanique remplace le lavage de la plaie', correct: false, correction: 'Non. Les soins locaux restent nécessaires.' },
      { text: 'La plaie peut contenir plusieurs bactéries, dont des anaérobies, ce qui justifie souvent l\'amoxicilline–acide clavulanique', correct: true, correction: 'Oui. La flore d\'une morsure est fréquemment polymicrobienne.' },
    ],
    explanation: 'Le cours cite l\'amoxicilline pour Pasteurella isolée ; pour une plaie de morsure polymicrobienne, la recommandation HAS privilégie l\'amoxicilline–acide clavulanique. (Cours, p. 11 ; nuance thérapeutique)'
  },
  {
    id: 28,
    type: 'QRM',
    question: 'À propos de la prise en charge d\'une infection à Pasteurella après morsure, quelles propositions sont correctes ?',
    options: [
      { text: 'Les soins de la plaie et l\'évaluation tétanos/rage restent distincts du choix antibiotique', correct: true, correction: 'Oui. Plusieurs risques coexistent après une morsure.' },
      { text: 'Une allergie aux pénicillines impose de rechercher une option adaptée au contexte', correct: true, correction: 'Oui. On ne prescrit pas automatiquement la même bêta-lactamine malgré l\'allergie.' },
      { text: 'Un antiviral est le traitement spécifique de Pasteurella', correct: false, correction: 'Non. Un antiviral ne traite pas cette bactérie.' },
      { text: 'Le traitement antibiotique doit être adapté à la gravité et au site de l\'infection', correct: true, correction: 'Oui. Une atteinte de la main ou profonde ne s\'évalue pas comme une simple lésion superficielle.' },
      { text: 'Un vaccin humain anti-Pasteurella remplace actuellement tout soin de plaie', correct: false, correction: 'Non. Il n\'existe pas de telle stratégie dans le cours.' },
    ],
    explanation: 'Le choix d\'antibiotique et les soins associés doivent tenir compte de la plaie et du patient ; la morsure demande une évaluation globale. (Cours, p. 7–11)'
  },
  {
    id: 29,
    type: 'QCM',
    question: 'Quel détail temporel aide le plus à différencier une pasteurellose aiguë d\'une maladie des griffes du chat ?',
    options: [
      { text: 'La pasteurellose n\'apparaît jamais avant plusieurs mois', correct: false, correction: 'Non. Son incubation d\'inoculation est habituellement très courte.' },
      { text: 'L\'absence de douleur exclut toujours la maladie des griffes du chat', correct: false, correction: 'Non. Un ganglion Bartonella peut être peu ou pas douloureux.' },
      { text: 'Une inflammation douloureuse en quelques heures après morsure évoque davantage Pasteurella', correct: true, correction: 'Oui. Bartonella donne plutôt une adénopathie régionale apparaissant plus tard.' },
      { text: 'Toute adénopathie tardive après contact avec un chat prouve Pasteurella', correct: false, correction: 'Non. Une adénopathie tardive peut évoquer Bartonella ou d\'autres causes.' },
      { text: 'Les deux maladies ont nécessairement le même délai et le même tableau', correct: false, correction: 'Non. Leur chronologie typique diffère.' },
    ],
    explanation: 'Le cours juxtapose une pasteurellose très précoce et douloureuse avec une maladie des griffes du chat plus lente, souvent révélée par le ganglion. (Cours, p. 9, 19–23)'
  },
  {
    id: 30,
    type: 'QRM',
    question: 'Quelles complications ou présentations inhabituelles de Pasteurella justifient une vigilance particulière ?',
    options: [
      { text: 'Une absence absolue de complication chez toute personne immunodéprimée', correct: false, correction: 'Non. Le terrain fragile augmente au contraire la vigilance.' },
      { text: 'Une infection ostéoarticulaire de voisinage après plaie profonde', correct: true, correction: 'Oui. La proximité d\'un os ou d\'une articulation compte.' },
      { text: 'Une transformation obligatoire en borréliose de Lyme', correct: false, correction: 'Non. Il s\'agit de deux agents indépendants.' },
      { text: 'Une bactériémie lors d\'une forme systémique', correct: true, correction: 'Oui. Le passage sanguin fait partie des complications possibles.' },
      { text: 'Une atteinte pulmonaire ou méningée, plus rare', correct: true, correction: 'Oui. Le cours les mentionne surtout chez des personnes fragiles.' },
    ],
    explanation: 'La forme locale domine, mais Pasteurella peut entraîner des atteintes profondes ou systémiques, notamment sur terrain fragile. (Cours, p. 10)'
  },
  {
    id: 31,
    type: 'QCM',
    question: 'Après une griffure de chat ancienne, une personne découvre un ganglion axillaire isolé. Quel agent du cours mérite d\'être évoqué ?',
    options: [
      { text: 'Borrelia burgdorferi sans piqûre de tique ni autre signe', correct: false, correction: 'Non. Une adénopathie isolée tardive n\'est pas son tableau caractéristique.' },
      { text: 'Bacillus anthracis dans toutes les griffures', correct: false, correction: 'Non. Le charbon n\'est pas l\'étiologie usuelle d\'une griffure de chat.' },
      { text: 'Brucella melitensis sans exposition animale ou alimentaire', correct: false, correction: 'Non. Le tableau et l\'exposition ne l\'orientent pas d\'abord.' },
      { text: 'Coxiella burnetii comme cause obligatoire de cette adénopathie', correct: false, correction: 'Non. La fièvre Q ne donne pas typiquement ce tableau isolé.' },
      { text: 'Bartonella henselae', correct: true, correction: 'Oui. La maladie des griffes du chat peut se révéler par une adénopathie régionale tardive.' },
    ],
    explanation: 'La lésion initiale peut être discrète ; l\'adénopathie de drainage révèle parfois l\'infection à Bartonella henselae. (Cours, p. 19–21)'
  },
  {
    id: 32,
    type: 'QRM',
    question: 'Au sujet du cycle de Bartonella henselae, quelles propositions sont justes ?',
    options: [
      { text: 'Un chat infecté peut rester asymptomatique', correct: true, correction: 'Oui. La bactériémie féline n\'implique pas forcément des signes.' },
      { text: 'Le chat est le principal réservoir animal cité', correct: true, correction: 'Oui. Les chatons et jeunes chats sont particulièrement concernés.' },
      { text: 'Les puces participent à la transmission entre chats', correct: true, correction: 'Oui. Leurs déjections peuvent souiller le pelage.' },
      { text: 'La contamination humaine est liée notamment à des griffes souillées', correct: true, correction: 'Oui. Une griffure peut inoculer la bactérie.' },
      { text: 'Une tique Ixodes est indispensable à chaque transmission humaine', correct: false, correction: 'Non. La transmission principale décrite est liée aux chats.' },
    ],
    explanation: 'Le cours décrit une chaîne chat–puce–chat, puis la contamination des griffes et la griffure humaine. (Cours, p. 21, 23)'
  },
  {
    id: 33,
    type: 'QCM',
    question: 'Une griffure infectante sur la main est suivie d\'une adénopathie régionale. Où l\'attend-on le plus souvent ?',
    options: [
      { text: 'Dans le médiastin de façon obligatoire', correct: false, correction: 'Non. Ce n\'est pas le drainage local attendu.' },
      { text: 'Uniquement dans l\'aine opposée', correct: false, correction: 'Non. L\'aine draine plutôt une lésion du membre inférieur.' },
      { text: 'Dans le cerveau sans atteinte ganglionnaire possible', correct: false, correction: 'Non. Le cours met au premier plan une adénopathie locale.' },
      { text: 'Dans l\'aisselle du même côté', correct: true, correction: 'Oui. Les lymphatiques du membre supérieur drainent vers les ganglions axillaires.' },
      { text: 'Dans tous les groupes ganglionnaires à la fois', correct: false, correction: 'Non. La présentation régionale est la plus classique.' },
    ],
    explanation: 'La localisation du ganglion suit en général le territoire de drainage de la griffure : main ou bras vers l\'aisselle. (Cours, p. 19, 23)'
  },
  {
    id: 34,
    type: 'QRM',
    question: 'Devant une adénopathie axillaire isolée chez une personne âgée, quelles hypothèses doivent rester ouvertes ?',
    options: [
      { text: 'Une tuberculose ganglionnaire selon le contexte', correct: true, correction: 'Oui. Une adénopathie isolée est possible.' },
      { text: 'Une cause tumorale, notamment mammaire ou lymphomateuse', correct: true, correction: 'Oui. L\'âge et la persistance imposent de ne pas l\'écarter.' },
      { text: 'L\'impossibilité de toute autre cause si le ganglion n\'est pas douloureux', correct: false, correction: 'Non. Une adénopathie indolore a plusieurs étiologies.' },
      { text: 'Une maladie des griffes du chat si l\'exposition est compatible', correct: true, correction: 'Oui. Le lien avec un chat est un argument mais pas une preuve.' },
      { text: 'Bartonella comme diagnostic certain au seul motif que la personne possède un chat', correct: false, correction: 'Non. La possession d\'un chat ne dispense pas d\'un diagnostic différentiel.' },
    ],
    explanation: 'Le cas du cours invite à confronter l\'exposition aux diagnostics infectieux et non infectieux d\'un ganglion isolé. (Cours, p. 19–20)'
  },
  {
    id: 35,
    type: 'QCM',
    question: 'Chez un enfant avec petite papule d\'inoculation, ganglion régional et griffure de chat récente, quelle approche diagnostique est la plus juste ?',
    options: [
      { text: 'L\'exposition féline interdit de rechercher un autre diagnostic si le ganglion persiste', correct: false, correction: 'Non. Un diagnostic différentiel reste nécessaire.' },
      { text: 'Un tableau typique peut être reconnu cliniquement ; des examens sont utiles si la présentation est atypique ou le diagnostic incertain', correct: true, correction: 'Oui. La confirmation invasive n\'est pas systématique pour une forme typique bien tolérée.' },
      { text: 'Une biopsie ganglionnaire est obligatoire chez tous les enfants', correct: false, correction: 'Non. On la réserve à certaines situations diagnostiques ou cliniques.' },
      { text: 'Un ECBU suffit à confirmer Bartonella', correct: false, correction: 'Non. Il ne renseigne pas sur une adénopathie liée au chat.' },
      { text: 'La culture ganglionnaire est toujours positive en moins de 24 heures', correct: false, correction: 'Non. Bartonella est difficile et lente à cultiver.' },
    ],
    explanation: 'Le support insiste sur la confirmation pour ne pas manquer une autre cause ; le CDC précise qu\'une forme typique peut souvent être diagnostiquée cliniquement. (Cours, p. 21–23 ; nuance diagnostique)'
  },
  {
    id: 36,
    type: 'QRM',
    question: 'Si des examens complémentaires sont nécessaires pour une suspicion de maladie des griffes du chat, lesquels peuvent être utiles ?',
    options: [
      { text: 'Un ECBU systématique comme examen spécifique de Bartonella', correct: false, correction: 'Non. L\'urine n\'est pas le prélèvement pertinent d\'un ganglion.' },
      { text: 'Une cytoponction obligatoire même si le tableau est typique et peu sévère', correct: false, correction: 'Non. Le geste se discute si le diagnostic est incertain ou le ganglion très symptomatique.' },
      { text: 'Une culture de routine négative après 24 heures pour exclure Bartonella', correct: false, correction: 'Non. Bartonella pousse difficilement et lentement ; ce résultat précoce ne l\'exclut pas.' },
      { text: 'Une sérologie interprétée avec la clinique et les limites de spécificité', correct: true, correction: 'Oui. Elle peut aider, mais des réactions croisées existent.' },
      { text: 'Une PCR ciblée sur un prélèvement ganglionnaire dans une situation sélectionnée', correct: true, correction: 'Oui. Elle peut apporter un diagnostic direct.' },
    ],
    explanation: 'PCR, sérologie et culture sont des outils possibles, mais l\'indication du prélèvement ganglionnaire dépend de la situation. (Cours, p. 21–23 ; CDC, Cat Scratch Disease)'
  },
  {
    id: 37,
    type: 'QCM',
    question: 'Pourquoi ne faut-il pas attribuer automatiquement un gros ganglion axillaire indolore à une ancienne griffure de chat chez une femme de 64 ans ?',
    options: [
      { text: 'Parce que seule la pasteurellose donne des ganglions tardifs indolores', correct: false, correction: 'Non. Pasteurella donne plutôt une infection aiguë douloureuse.' },
      { text: 'Parce qu\'un ganglion sans fièvre est forcément bénin', correct: false, correction: 'Non. Une absence de fièvre n\'exclut ni infection ni cancer.' },
      { text: 'Une tumeur mammaire ou un lymphome peuvent aussi expliquer ce ganglion', correct: true, correction: 'Oui. Le contexte impose un examen et un diagnostic différentiel.' },
      { text: 'Parce que Bartonella n\'infecte jamais l\'être humain', correct: false, correction: 'Non. Elle est l\'agent de la maladie des griffes du chat.' },
      { text: 'Parce qu\'une adénopathie axillaire signe toujours une borréliose de Lyme', correct: false, correction: 'Non. Ce n\'est pas une conclusion spécifique.' },
    ],
    explanation: 'L\'âge, la taille et la persistance de l\'adénopathie obligent à considérer aussi des causes tumorales et d\'autres infections. (Cours, p. 19–20)'
  },
  {
    id: 38,
    type: 'QRM',
    question: 'Concernant l\'évolution et le traitement d\'une maladie des griffes du chat, quelles propositions sont exactes ?',
    options: [
      { text: 'Une forme typique bien tolérée peut guérir sans antibiotique', correct: true, correction: 'Oui. Une surveillance clinique peut suffire chez une personne immunocompétente.' },
      { text: 'Un antibiotique garantit instantanément la disparition de tout ganglion', correct: false, correction: 'Non. La régression peut prendre du temps malgré le traitement.' },
      { text: 'L\'azithromycine peut être envisagée pour accélérer la diminution d\'un ganglion gênant', correct: true, correction: 'Oui. Une petite étude suggère un bénéfice sur la taille ganglionnaire.' },
      { text: 'Une forme sévère ou une immunodépression justifie une prise en charge antibiotique adaptée', correct: true, correction: 'Oui. Le traitement dépend du terrain et de l\'extension.' },
      { text: 'L\'amoxicilline est obligatoirement curative de toute Bartonella', correct: false, correction: 'Non. Les bêta-lactamines ne sont pas le traitement de référence de cette infection.' },
    ],
    explanation: 'Le cours envisage une surveillance ou des macrolides/tétracyclines ; les recommandations CDC nuancent le bénéfice des antibiotiques dans les formes simples. (Cours, p. 22–23)'
  },
  {
    id: 39,
    type: 'QCM',
    question: 'Quel geste préventif est le plus directement pertinent après une griffure de chat, même superficielle ?',
    options: [
      { text: 'Attendre obligatoirement l\'apparition d\'un ganglion avant toute toilette de la plaie', correct: false, correction: 'Non. Le nettoyage doit être précoce.' },
      { text: 'Considérer qu\'une griffure sans douleur ne peut jamais transmettre Bartonella', correct: false, correction: 'Non. La lésion initiale peut être peu inflammatoire.' },
      { text: 'Injecter systématiquement des immunoglobulines anti-Bartonella', correct: false, correction: 'Non. Elles ne constituent pas une prévention habituelle.' },
      { text: 'Prendre un antifongique puisque Bartonella est une levure', correct: false, correction: 'Non. Bartonella est une bactérie.' },
      { text: 'Nettoyer rapidement la plaie et surveiller son évolution', correct: true, correction: 'Oui. L\'hygiène locale limite le risque et permet de repérer une complication.' },
    ],
    explanation: 'La petite lésion d\'inoculation peut passer inaperçue ; il faut néanmoins nettoyer toute griffure et surveiller le ganglion régional. (Cours, p. 21, 23)'
  },
  {
    id: 40,
    type: 'QRM',
    question: 'Quelles comparaisons entre pasteurellose et maladie des griffes du chat sont correctement formulées ?',
    options: [
      { text: 'Pasteurella peut provoquer une plaie très douloureuse quelques heures après morsure', correct: true, correction: 'Oui. Le délai bref est caractéristique de la forme d\'inoculation.' },
      { text: 'Bartonella peut se révéler plus tard par un ganglion de drainage', correct: true, correction: 'Oui. La lésion initiale peut être discrète.' },
      { text: 'L\'absence de fièvre exclut définitivement l\'une comme l\'autre', correct: false, correction: 'Non. Des formes locales peuvent se présenter sans fièvre.' },
      { text: 'Chiens et chats peuvent porter Pasteurella sans signe de maladie', correct: true, correction: 'Oui. Le portage asymptomatique animal existe.' },
      { text: 'Les deux infections nécessitent toujours le même prélèvement invasif chez tous les patients', correct: false, correction: 'Non. Les examens dépendent de la présentation et de l\'incertitude diagnostique.' },
    ],
    explanation: 'La chronologie, la porte d\'entrée et l\'organe atteint guident le diagnostic différentiel après contact avec un animal. (Cours, p. 9–11, 19–23)'
  },
  {
    id: 41,
    type: 'QCM',
    question: 'Quel groupe bactérien comprend les agents de la borréliose de Lyme ?',
    options: [
      { text: 'Les levures du genre Candida', correct: false, correction: 'Non. Lyme est bactérienne, non fongique.' },
      { text: 'Les protozoaires du genre Leishmania', correct: false, correction: 'Non. La leishmaniose est une parasitose distincte.' },
      { text: 'Les cocci du genre Staphylococcus exclusivement', correct: false, correction: 'Non. Staphylococcus peut causer d\'autres infections, mais pas Lyme.' },
      { text: 'Les spirochètes du genre Borrelia', correct: true, correction: 'Oui. Ils ont une morphologie spiralée et sont transmis par des tiques.' },
      { text: 'Les bacilles sporulants du genre Bacillus', correct: false, correction: 'Non. Bacillus anthracis est l\'agent du charbon.' },
    ],
    explanation: 'Borrelia burgdorferi sensu lato désigne un groupe de spirochètes responsables de la borréliose de Lyme. (Cours, p. 24)'
  },
  {
    id: 42,
    type: 'QRM',
    question: 'Quelles propositions sur le cycle de transmission de Lyme sont justes ?',
    options: [
      { text: 'En Europe, plusieurs espèces du complexe Borrelia burgdorferi sensu lato sont en cause', correct: true, correction: 'Oui. Le cours cite notamment B. afzelii et B. garinii.' },
      { text: 'L\'être humain est le réservoir indispensable du cycle naturel de Borrelia', correct: false, correction: 'Non. Le cycle naturel repose notamment sur les tiques et des hôtes animaux, pas sur l\'être humain.' },
      { text: 'La bactérie est acquise principalement par inhalation de paille contaminée', correct: false, correction: 'Non. Cela évoque davantage la fièvre Q.' },
      { text: 'La tique Ixodes joue le rôle de vecteur', correct: true, correction: 'Oui. Elle peut inoculer Borrelia lors de la piqûre.' },
      { text: 'Le chat domestique remplace obligatoirement la tique comme vecteur', correct: false, correction: 'Non. Posséder un chat n\'explique pas une transmission de Lyme.' },
    ],
    explanation: 'Le cycle associe des réservoirs animaux et une tique du genre Ixodes ; l\'exposition humaine est vectorielle. (Cours, p. 24)'
  },
  {
    id: 43,
    type: 'QCM',
    question: 'Une plaque rouge s\'étend progressivement plusieurs jours après une piqûre de tique. Quel diagnostic du cours doit être envisagé en premier ?',
    options: [
      { text: 'Un érythème migrant de borréliose de Lyme', correct: true, correction: 'Oui. La lésion cutanée progressive après tique est caractéristique de la forme localisée précoce.' },
      { text: 'Une brucellose prouvée', correct: false, correction: 'Non. La brucellose ne se manifeste pas typiquement ainsi.' },
      { text: 'Une pasteurellose de morsure de chat', correct: false, correction: 'Non. Il n\'y a ni morsure ni infection douloureuse très précoce.' },
      { text: 'Une fièvre Q certaine', correct: false, correction: 'Non. La fièvre Q est liée surtout aux aérosols d\'élevage.' },
      { text: 'Une adénopathie isolée de Bartonella', correct: false, correction: 'Non. Le signe principal décrit est ici une plaque cutanée expansive.' },
    ],
    explanation: 'L\'érythème migrant apparaît après une piqûre de tique et s\'étend ; sa reconnaissance repose d\'abord sur l\'examen clinique. (Cours, p. 24–25)'
  },
  {
    id: 44,
    type: 'QRM',
    question: 'Devant un érythème migrant typique, quelles propositions diagnostiques sont justes ?',
    options: [
      { text: 'Une sérologie peut être négative au stade localisé précoce', correct: true, correction: 'Oui. La réponse anticorps peut ne pas être encore détectable.' },
      { text: 'L\'absence de souvenir de la tique exclut définitivement un érythème migrant', correct: false, correction: 'Non. La piqûre peut passer inaperçue.' },
      { text: 'Le diagnostic est essentiellement clinique', correct: true, correction: 'Oui. L\'aspect évolutif et l\'exposition guident la décision.' },
      { text: 'Une sérologie sanguine est obligatoire pour confirmer tout érythème migrant typique', correct: false, correction: 'Non. La HAS ne la recommande pas pour cette présentation.' },
      { text: 'Le traitement ne doit pas être abandonné au seul motif que la plaque peut régresser', correct: true, correction: 'Oui. La disparition locale spontanée n\'exclut pas une dissémination ultérieure.' },
    ],
    explanation: 'La HAS 2025 confirme l\'absence d\'indication de sérologie devant un érythème migrant typique, en accord avec le raisonnement clinique du cours. (Cours, p. 25–26)'
  },
  {
    id: 45,
    type: 'QCM',
    question: 'Quelle complication peut apparaître après une borréliose de Lyme non reconnue ou non traitée ?',
    options: [
      { text: 'L\'impossibilité de toute manifestation hors de la peau', correct: false, correction: 'Non. Lyme peut toucher nerfs, articulations et cœur.' },
      { text: 'Une listériose alimentaire certaine', correct: false, correction: 'Non. La listériose suit une autre exposition.' },
      { text: 'Une transformation obligatoire en tularémie', correct: false, correction: 'Non. Francisella est un agent indépendant.' },
      { text: 'Une rage virale transmise par le même spirochète', correct: false, correction: 'Non. La rage est due à un virus distinct.' },
      { text: 'Une atteinte neurologique, telle qu\'une paralysie faciale', correct: true, correction: 'Oui. La neuroborréliose fait partie des formes disséminées.' },
    ],
    explanation: 'L\'érythème migrant n\'est pas le seul stade possible ; le cours décrit ensuite des manifestations neurologiques, articulaires et cardiaques. (Cours, p. 25–26)'
  },
  {
    id: 46,
    type: 'QRM',
    question: 'Quelles manifestations peuvent appartenir à une forme disséminée de borréliose de Lyme ?',
    options: [
      { text: 'Une hyperphagie nécessaire chez tous les patients', correct: false, correction: 'Non. Ce n\'est pas une manifestation de Lyme.' },
      { text: 'Un trouble de conduction cardiaque, tel qu\'un bloc auriculo-ventriculaire', correct: true, correction: 'Oui. Le cours cite cette complication.' },
      { text: 'Une paralysie faciale périphérique', correct: true, correction: 'Oui. Une atteinte neurologique est possible.' },
      { text: 'Une plaie purulente rapide après morsure de chien comme signe spécifique', correct: false, correction: 'Non. Cela oriente plutôt vers une infection de morsure.' },
      { text: 'Une arthrite d\'une grosse articulation, notamment du genou', correct: true, correction: 'Oui. L\'arthrite de Lyme peut atteindre le genou.' },
    ],
    explanation: 'Les manifestations extracutanées dépendent du stade et ne sont pas présentes chez chaque patient. (Cours, p. 25–26)'
  },
  {
    id: 47,
    type: 'QCM',
    question: 'Un patient a une paralysie faciale bilatérale après un érythème migrant non traité. Quelle piste infectieuse du cours est particulièrement pertinente ?',
    options: [
      { text: 'Une infection par Bacillus anthracis exclusivement', correct: false, correction: 'Non. Le charbon n\'est pas l\'explication principale.' },
      { text: 'Une neuroborréliose de Lyme', correct: true, correction: 'Oui. L\'association temporelle d\'un érythème migrant et de symptômes neurologiques est évocatrice.' },
      { text: 'Une pasteurellose locale obligatoire', correct: false, correction: 'Non. La pasteurellose d\'inoculation débute plutôt par une plaie inflammatoire rapide.' },
      { text: 'Une listériose alimentaire démontrée', correct: false, correction: 'Non. Le tableau n\'établit pas cette étiologie.' },
      { text: 'Une maladie des griffes du chat certaine sans contact félin', correct: false, correction: 'Non. La chronologie et l\'exposition favorisent ici Lyme.' },
    ],
    explanation: 'Le cours illustre la neuroborréliose par une diplégie faciale et des paresthésies après un épisode cutané. (Cours, p. 26–27)'
  },
  {
    id: 48,
    type: 'QRM',
    question: 'Face à un LCR prélevé pour suspicion de neuroborréliose méningée, quelles interprétations sont prudentes ?',
    options: [
      { text: 'Une pléiocytose à prédominance lymphocytaire peut être compatible', correct: true, correction: 'Oui. Elle apporte un argument inflammatoire dans le contexte clinique.' },
      { text: 'La protéinorachie peut être augmentée sans seuil universel de 1 g/L', correct: true, correction: 'Oui. Le chiffre isolé ne définit pas la neuroborréliose.' },
      { text: 'L\'analyse du LCR doit être reliée à la clinique et aux tests spécifiques', correct: true, correction: 'Oui. Un profil cytologique n\'identifie pas à lui seul Borrelia.' },
      { text: 'Une hypoglycorachie est obligatoire dans toute neuroborréliose', correct: false, correction: 'Non. La glycorachie peut rester normale ; le support est trop catégorique.' },
      { text: 'Tout LCR lymphocytaire prouve une borréliose et exclut les autres méningites', correct: false, correction: 'Non. Les causes de méningite lymphocytaire sont nombreuses.' },
    ],
    explanation: 'Le cas du cours donne un LCR inflammatoire, mais ses seuils et l\'hypoglycorachie ne sont pas des critères universels de neuroborréliose. (Cours, p. 27–28 ; nuance diagnostique)'
  },
  {
    id: 49,
    type: 'QCM',
    question: 'Quel résultat contribue le plus spécifiquement au diagnostic d\'une neuroborréliose du système nerveux central lorsque le LCR est indiqué ?',
    options: [
      { text: 'Un frottis sanguin montrant Pasteurella', correct: false, correction: 'Non. Cela viserait un autre agent.' },
      { text: 'Un indice de synthèse intrathécale d\'anticorps anti-Borrelia calculé avec sérum et LCR prélevés en parallèle', correct: true, correction: 'Oui. Il aide à distinguer production locale d\'anticorps et simple passage depuis le sang.' },
      { text: 'Une seule PCR urinaire positive', correct: false, correction: 'Non. La PCR urinaire n\'est pas recommandée pour ce diagnostic.' },
      { text: 'Un taux brut d\'IgG du LCR comparé sans correction à celui du sang', correct: false, correction: 'Non. Il faut tenir compte du passage à travers la barrière hémato-méningée.' },
      { text: 'L\'absence de toute cellule dans le LCR comme preuve générale', correct: false, correction: 'Non. Une pléiocytose est attendue dans beaucoup de formes méningées.' },
    ],
    explanation: 'La HAS recommande, si l\'examen du LCR est indiqué, une analyse cytologique et biochimique avec recherche quantitative de synthèse intrathécale spécifique. (Cours, p. 28–29 ; HAS 2025)'
  },
  {
    id: 50,
    type: 'QRM',
    question: 'À propos des anticorps anti-Borrelia dans le LCR, quelles propositions sont exactes ?',
    options: [
      { text: 'Une simple présence d\'anticorps dans le LCR peut résulter d\'un passage depuis le sang', correct: true, correction: 'Oui. Le résultat brut ne suffit pas.' },
      { text: 'Seules les IgG existent biologiquement dans le LCR, jamais les IgM', correct: false, correction: 'Non. L\'affirmation absolue du support est fausse.' },
      { text: 'L\'interprétation dépend aussi de la pléiocytose et du tableau clinique', correct: true, correction: 'Oui. Une synthèse intrathécale peut persister après la guérison.' },
      { text: 'L\'indice intrathécal est calculé par une culture d\'urine', correct: false, correction: 'Non. Il exige des mesures immunologiques dans sérum et LCR.' },
      { text: 'Un prélèvement sanguin associé est nécessaire pour apprécier une synthèse intrathécale', correct: true, correction: 'Oui. L\'indice compare des anticorps spécifiques entre sérum et LCR.' },
    ],
    explanation: 'La synthèse intrathécale n\'est pas une comparaison simpliste de deux concentrations ; la barrière hémato-méningée et le contexte clinique comptent. (Cours, p. 28–29 ; nuance HAS 2025)'
  },
  {
    id: 51,
    type: 'QCM',
    question: 'Dans une forme disséminée suspectée, quel est l\'ordre usuel des tests sérologiques sanguins recommandé en France ?',
    options: [
      { text: 'Une sérologie systématique chez toute personne piquée sans symptôme', correct: false, correction: 'Non. La HAS ne recommande pas ce dépistage post-piqûre.' },
      { text: 'Un test immuno-enzymatique initial, puis une confirmation si le résultat est positif ou équivoque', correct: true, correction: 'Oui. La démarche en deux temps limite les interprétations erronées.' },
      { text: 'Une sérologie Bartonella à la place des tests Borrelia', correct: false, correction: 'Non. Elle vise un autre agent.' },
      { text: 'Une culture de Borrelia sur prélèvement urinaire comme première étape', correct: false, correction: 'Non. Ce n\'est pas la stratégie recommandée.' },
      { text: 'Un Western blot isolé sans test initial ni contexte clinique', correct: false, correction: 'Non. Il s\'interprète dans une stratégie sérologique structurée.' },
    ],
    explanation: 'Pour une forme disséminée compatible, la HAS 2025 recommande une sérologie sanguine initiale puis une confirmation appropriée si positive ou douteuse. (Cours, p. 28–29)'
  },
  {
    id: 52,
    type: 'QRM',
    question: 'Quelles limites faut-il connaître pour interpréter une sérologie de Lyme ?',
    options: [
      { text: 'Une sérologie négative au premier jour exclut tout érythème migrant', correct: false, correction: 'Non. Le diagnostic d\'érythème migrant est d\'abord clinique.' },
      { text: 'Des réactions croisées ou faux positifs sont possibles', correct: true, correction: 'Oui. Le contexte clinique et le test de confirmation comptent.' },
      { text: 'Un résultat positif peut témoigner d\'une exposition ancienne sans prouver une infection active', correct: true, correction: 'Oui. Les anticorps peuvent persister après guérison.' },
      { text: 'Toute IgM isolée positive prouve une neuroborréliose active quel que soit le contexte', correct: false, correction: 'Non. Une IgM isolée peut être trompeuse.' },
      { text: 'Un test peut être négatif au début de l\'infection avant la réponse anticorps', correct: true, correction: 'Oui. La date du prélèvement influe sur sa sensibilité.' },
    ],
    explanation: 'Le cours mentionne des réactions croisées ; les recommandations actuelles ajoutent le rôle du stade clinique et de la persistance des anticorps. (Cours, p. 25, 28–29)'
  },
  {
    id: 53,
    type: 'QCM',
    question: 'Pourquoi la PCR Borrelia sur LCR n\'est-elle pas l\'examen de première intention d\'une neuroborréliose ?',
    options: [
      { text: 'Une PCR négative prouve que tous les symptômes sont psychiatriques', correct: false, correction: 'Non. Aucune telle conclusion ne découle du test.' },
      { text: 'Le LCR ne peut jamais contenir de matériel bactérien', correct: false, correction: 'Non. Une détection est possible, mais un résultat négatif ne suffit pas.' },
      { text: 'La PCR sanguine est toujours parfaite et la remplace', correct: false, correction: 'Non. La PCR sanguine n\'est pas recommandée comme diagnostic usuel.' },
      { text: 'Sa sensibilité est insuffisante pour exclure la maladie lorsqu\'elle est négative', correct: true, correction: 'Oui. Les tests sérologiques adaptés et l\'évaluation du LCR sont préférés.' },
      { text: 'Borrelia est un virus sans ADN', correct: false, correction: 'Non. Borrelia est une bactérie avec ADN ; la limite est la performance du test.' },
    ],
    explanation: 'Le support souligne la faible utilité d\'une PCR LCR de routine ; la HAS la réserve à des situations sélectionnées de doute diagnostique. (Cours, p. 28–29)'
  },
  {
    id: 54,
    type: 'QRM',
    question: 'Devant une arthrite du genou après exposition possible aux tiques, quelles propositions sont correctes ?',
    options: [
      { text: 'Chez l\'enfant fébrile avec arthrite aiguë, l\'infection bactérienne articulaire habituelle peut être ignorée', correct: false, correction: 'Non. Une arthrite septique aiguë doit être évaluée rapidement.' },
      { text: 'Lyme peut faire partie du diagnostic différentiel', correct: true, correction: 'Oui. Une grosse articulation peut être atteinte dans une forme disséminée.' },
      { text: 'Une PCR urinaire isolée confirme habituellement une arthrite de Lyme', correct: false, correction: 'Non. La PCR urinaire n\'est pas le test recommandé pour établir cette arthrite.' },
      { text: 'Une sérologie sanguine adaptée participe au bilan si la clinique est compatible', correct: true, correction: 'Oui. Les formes articulaires ont généralement une réponse anticorps détectable.' },
      { text: 'Une tique vue sur la peau prouve que l\'arthrite actuelle est due à Borrelia', correct: false, correction: 'Non. L\'exposition seule n\'établit pas l\'étiologie de l\'arthrite.' },
    ],
    explanation: 'Le cours cite l\'arthrite du genou et la PCR articulaire comme possibilité ; il rappelle aussi d\'autres bactéries à considérer dans l\'arthrite de l\'enfant. (Cours, p. 25, 29)'
  },
  {
    id: 55,
    type: 'QCM',
    question: 'Un érythème migrant typique commence à pâlir sans traitement. Quelle conduite de principe reste correcte ?',
    options: [
      { text: 'Déclarer que l\'érythème migrant est toujours une réaction allergique sans rapport avec Lyme', correct: false, correction: 'Non. Une lésion expansive typique après tique évoque la borréliose.' },
      { text: 'Traiter la borréliose diagnostiquée par une antibiothérapie adaptée', correct: true, correction: 'Oui. La régression locale spontanée ne garantit pas l\'absence de dissémination.' },
      { text: 'Attendre systématiquement une PCR positive du sang', correct: false, correction: 'Non. Le diagnostic de la forme typique est clinique.' },
      { text: 'Conclure que Borrelia a disparu de tout l\'organisme', correct: false, correction: 'Non. La seule évolution de la plaque ne démontre pas cela.' },
      { text: 'Administrer des immunoglobulines anti-Borrelia à la place d\'antibiotiques', correct: false, correction: 'Non. Elles ne constituent pas le traitement décrit.' },
    ],
    explanation: 'L\'érythème migrant peut s\'atténuer spontanément, mais le traitement de la borréliose localisée reste indiqué. (Cours, p. 25–26)'
  },
  {
    id: 56,
    type: 'QRM',
    question: 'À propos des antibiotiques dans la borréliose de Lyme, quelles propositions sont exactes ?',
    options: [
      { text: 'Un antiviral est le traitement spécifique de Borrelia', correct: false, correction: 'Non. Borrelia est une bactérie.' },
      { text: 'L\'antibiothérapie se choisit en fonction de l\'organe atteint et de la situation clinique', correct: true, correction: 'Oui. Une forme cutanée simple et une atteinte neurologique ne se gèrent pas identiquement.' },
      { text: 'Amoxicilline et doxycycline figurent parmi les options d\'une forme cutanée localisée selon le contexte', correct: true, correction: 'Oui. Le choix dépend du patient et des recommandations en vigueur.' },
      { text: 'Ceftriaxone peut être indiquée pour certaines atteintes neurologiques', correct: true, correction: 'Oui. Elle fait partie des schémas selon la manifestation.' },
      { text: 'Le même antibiotique par la même voie est obligatoire chez tous les patients', correct: false, correction: 'Non. L\'âge, la grossesse, l\'allergie et la gravité modifient le choix.' },
    ],
    explanation: 'Le cours cite l\'amoxicilline pour l\'érythème migrant et la ceftriaxone pour la neuroborréliose ; la HAS 2025 présente plusieurs options adaptées à la forme clinique. (Cours, p. 26, 29)'
  },
  {
    id: 57,
    type: 'QCM',
    question: 'Une paralysie faciale empêche la fermeture complète d\'une paupière dans une neuroborréliose. Quel soin associé est important ?',
    options: [
      { text: 'Ignorer l\'œil tant que l\'antibiotique est prescrit', correct: false, correction: 'Non. La protection oculaire est un soin parallèle essentiel.' },
      { text: 'Remplacer tout soin oculaire par une sérologie répétée', correct: false, correction: 'Non. La sérologie ne protège pas la cornée.' },
      { text: 'Injecter de l\'acide folique dans la paupière', correct: false, correction: 'Non. Cette mesure n\'est pas indiquée ici.' },
      { text: 'Protéger la cornée contre la sécheresse et les lésions', correct: true, correction: 'Oui. L\'exposition cornéenne peut provoquer une kératite même pendant le traitement de l\'infection.' },
      { text: 'Attendre une perte visuelle irréversible avant d\'agir', correct: false, correction: 'Non. La prévention des lésions doit être précoce.' },
    ],
    explanation: 'Le cours ajoute la protection oculaire au traitement causal si la paralysie faciale laisse la cornée exposée. (Cours, p. 29)'
  },
  {
    id: 58,
    type: 'QRM',
    question: 'Concernant le traitement d\'une neuroborréliose, quelles propositions restent correctes ?',
    options: [
      { text: 'La durée et la voie doivent être adaptées à la forme clinique', correct: true, correction: 'Oui. Une atteinte neurologique n\'impose pas un schéma unique pour tous.' },
      { text: 'Aucun antibiotique n\'est indiqué si le LCR est lymphocytaire', correct: false, correction: 'Non. Une neuroborréliose diagnostiquée nécessite un traitement adapté.' },
      { text: 'La doxycycline est une autre option dans certaines situations', correct: true, correction: 'Oui. Elle peut être appropriée selon le type d\'atteinte et le patient.' },
      { text: 'La ceftriaxone est une option selon la présentation', correct: true, correction: 'Oui. Elle est citée dans le cours et dans les recommandations pour certaines formes.' },
      { text: 'La gentamicine est obligatoirement le traitement de première ligne de toute neuroborréliose', correct: false, correction: 'Non. Elle n\'est pas le schéma recommandé de routine.' },
    ],
    explanation: 'La ceftriaxone est l\'exemple du support ; la HAS 2025 prévoit aussi la doxycycline selon la forme et le contexte. (Cours, p. 29–31)'
  },
  {
    id: 59,
    type: 'QCM',
    question: 'Quel trouble cardiaque le cours cite-t-il comme manifestation possible d\'une borréliose disséminée ?',
    options: [
      { text: 'Une endocardite à Coxiella obligatoire après toute tique', correct: false, correction: 'Non. Coxiella relève d\'une autre exposition et d\'un autre tableau.' },
      { text: 'Un bloc auriculo-ventriculaire', correct: true, correction: 'Oui. Lyme peut atteindre le système de conduction cardiaque.' },
      { text: 'Une malformation cardiaque congénitale chez tous les porteurs', correct: false, correction: 'Non. La cardite de Lyme est acquise et non systématique.' },
      { text: 'Une rupture systématique de l\'aorte après érythème migrant', correct: false, correction: 'Non. Ce n\'est pas la complication citée.' },
      { text: 'Une hypercholestérolémie isolée comme preuve de Lyme', correct: false, correction: 'Non. Elle ne définit pas une atteinte cardiaque infectieuse.' },
    ],
    explanation: 'Le support cite le bloc auriculo-ventriculaire parmi les atteintes extracutanées possibles de Lyme. (Cours, p. 25)'
  },
  {
    id: 60,
    type: 'QRM',
    question: 'À propos de la chronologie de la borréliose de Lyme, quelles propositions sont nuancées et justes ?',
    options: [
      { text: 'Toutes les personnes infectées présentent obligatoirement chaque stade décrit dans le même ordre', correct: false, correction: 'Non. L\'histoire naturelle est variable.' },
      { text: 'La disparition de l\'érythème prouve à elle seule que toute infection a disparu', correct: false, correction: 'Non. Une amélioration cutanée n\'est pas un test microbiologique.' },
      { text: 'Un érythème migrant peut précéder des manifestations neurologiques ou articulaires', correct: true, correction: 'Oui. Une forme disséminée peut survenir après le stade localisé.' },
      { text: 'Une atteinte articulaire peut se manifester plus tardivement', correct: true, correction: 'Oui. Le cours distingue des manifestations secondaires et tardives.' },
      { text: 'Une piqûre de tique peut passer inaperçue', correct: true, correction: 'Oui. Ne pas se souvenir du vecteur n\'exclut pas le diagnostic.' },
    ],
    explanation: 'La classification en stades aide à enseigner, mais elle ne doit pas être interprétée comme une progression obligatoire chez chaque patient. (Cours, p. 25–26)'
  },
  {
    id: 61,
    type: 'QCM',
    question: 'Après avoir découvert une tique fixée à la peau, quel geste est le plus pertinent immédiatement ?',
    options: [
      { text: 'Considérer qu\'une tique sur la peau démontre une infection à Borrelia', correct: false, correction: 'Non. Toute piqûre n\'entraîne pas une borréliose.' },
      { text: 'Prescrire une sérologie immédiatement pour mesurer la contamination du jour', correct: false, correction: 'Non. La sérologie n\'est pas indiquée après une piqûre isolée.' },
      { text: 'La retirer rapidement avec une technique adaptée, puis surveiller la zone et les symptômes', correct: true, correction: 'Oui. La durée d\'attachement influence le risque et la surveillance repère une lésion évocatrice.' },
      { text: 'La brûler encore fixée à la peau', correct: false, correction: 'Non. Cela risque de blesser et ne constitue pas la méthode recommandée.' },
      { text: 'Attendre l\'apparition d\'une paralysie faciale avant de l\'enlever', correct: false, correction: 'Non. Le retrait doit être prompt.' },
    ],
    explanation: 'Le cours recommande l\'inspection après exposition et l\'ablation rapide des tiques ; la HAS précise qu\'une piqûre seule ne justifie pas de sérologie. (Cours, p. 3, 26)'
  },
  {
    id: 62,
    type: 'QRM',
    question: 'Quelles mesures sont adaptées après une activité exposant aux tiques, selon le cours et la HAS ?',
    options: [
      { text: 'Réaliser automatiquement une sérologie après toute piqûre asymptomatique', correct: false, correction: 'Non. Elle n\'est pas recommandée dans cette situation.' },
      { text: 'Prescrire systématiquement une antibioprophylaxie après chaque piqûre en France', correct: false, correction: 'Non. La HAS 2025 ne la recommande pas de routine.' },
      { text: 'Inspecter le corps, y compris les zones difficiles à voir', correct: true, correction: 'Oui. Une tique peut rester cachée, notamment dans le cuir chevelu.' },
      { text: 'Retirer rapidement une tique découverte', correct: true, correction: 'Oui. Le geste est utile avant l\'apparition de symptômes.' },
      { text: 'Porter des vêtements couvrants dans les zones à tiques', correct: true, correction: 'Oui. Ils limitent l\'exposition cutanée.' },
    ],
    explanation: 'Les mesures mécaniques et la surveillance clinique sont centrales ; la HAS 2025 déconseille sérologie et antibioprophylaxie systématiques après piqûre isolée. (Cours, p. 3 ; HAS 2025)'
  },
  {
    id: 63,
    type: 'QCM',
    question: 'Une personne asymptomatique a une sérologie IgG anti-Borrelia positive plusieurs années après une borréliose traitée. Que conclure ?',
    options: [
      { text: 'La positivité identifie obligatoirement l\'année exacte de la piqûre', correct: false, correction: 'Non. Elle ne date pas précisément l\'infection.' },
      { text: 'La personne a forcément une neuroborréliose active', correct: false, correction: 'Non. Il manque des signes neurologiques et des critères complémentaires.' },
      { text: 'Une nouvelle antibiothérapie prolongée est obligatoire sur la seule IgG', correct: false, correction: 'Non. Une sérologie persistante n\'est pas une indication de traitement isolée.' },
      { text: 'Une ancienne infection rend impossible toute nouvelle infection', correct: false, correction: 'Non. Les anticorps ne garantissent pas une protection durable.' },
      { text: 'Ce résultat peut persister après l\'infection et ne prouve pas à lui seul une maladie active', correct: true, correction: 'Oui. L\'interprétation dépend des symptômes et du contexte, pas du seul anticorps.' },
    ],
    explanation: 'La sérologie indique une réponse immunitaire mais ne sépare pas toujours infection passée et infection active. (Cours, p. 28–29 ; nuance HAS 2025)'
  },
  {
    id: 64,
    type: 'QRM',
    question: 'Dans un raisonnement sur une possible neuroborréliose, quelles attitudes évitent une conclusion hâtive ?',
    options: [
      { text: 'Exclure Lyme sur une PCR LCR négative isolée', correct: false, correction: 'Non. Une PCR négative ne confirme pas la maladie et ne l\'exclut pas non plus.' },
      { text: 'Relier les symptômes neurologiques à l\'histoire d\'exposition et à l\'examen clinique', correct: true, correction: 'Oui. La probabilité clinique précède l\'interprétation des tests.' },
      { text: 'Considérer la syphilis ou une autre méningite impossible sans exposition connue', correct: false, correction: 'Non. Les diagnostics différentiels ne se ferment pas sur cette seule absence.' },
      { text: 'Interpréter un LCR lymphocytaire avec ses diagnostics différentiels', correct: true, correction: 'Oui. Un tel LCR n\'est pas spécifique de Lyme.' },
      { text: 'Utiliser les tests sanguins et, si indiqué, le LCR de manière complémentaire', correct: true, correction: 'Oui. La synthèse intrathécale exige une comparaison avec le sérum.' },
    ],
    explanation: 'Les données du cours illustrent le diagnostic indirect ; l\'évaluation moderne évite de transformer un seul symptôme ou examen en preuve définitive. (Cours, p. 27–29)'
  },
  {
    id: 65,
    type: 'QCM',
    question: 'Un garde forestier présente fièvre, ulcération d\'un doigt et ganglion axillaire après avoir manipulé un lièvre mort. Quelle infection est la plus évocatrice ?',
    options: [
      { text: 'Une fièvre Q certaine', correct: false, correction: 'Non. Coxiella est surtout liée aux aérosols d\'élevage et ce tableau est moins typique.' },
      { text: 'Une listériose alimentaire', correct: false, correction: 'Non. Aucune exposition alimentaire ni présentation habituelle n\'est décrite.' },
      { text: 'Une neuroborréliose de Lyme', correct: false, correction: 'Non. Il manque une piqûre de tique et les signes neurologiques.' },
      { text: 'La tularémie à Francisella tularensis', correct: true, correction: 'Oui. Le contact avec un lagomorphe et l\'association ulcération–adénopathie de drainage orientent fortement.' },
      { text: 'Une brucellose prouvée par la seule ulcération', correct: false, correction: 'Non. L\'ulcération avec ganglion évoque d\'abord Francisella dans ce contexte.' },
    ],
    explanation: 'Le cas du cours illustre la forme ulcéro-ganglionnaire de tularémie après contact avec un lièvre. (Cours, p. 32–33)'
  },
  {
    id: 66,
    type: 'QRM',
    question: 'Quels réservoirs ou expositions sont compatibles avec la tularémie ?',
    options: [
      { text: 'Manipulation ou dépouillage de gibier', correct: true, correction: 'Oui. Le contact direct peut inoculer Francisella.' },
      { text: 'Transmission exclusivement de personne à personne par la toux', correct: false, correction: 'Non. La transmission interhumaine n\'est pas une voie usuelle.' },
      { text: 'Lièvres et lapins sauvages', correct: true, correction: 'Oui. Ils figurent parmi les animaux réservoirs du cours.' },
      { text: 'Piqûre de certains arthropodes selon le contexte', correct: true, correction: 'Oui. Des tiques peuvent aussi transmettre la tularémie.' },
      { text: 'Rongeurs et milieux contaminés', correct: true, correction: 'Oui. La bactérie circule dans plusieurs hôtes et milieux.' },
    ],
    explanation: 'Le cours insiste sur les lagomorphes et le contact avec le gibier ; d\'autres animaux, milieux et vecteurs peuvent participer au cycle. (Cours, p. 32–33)'
  },
  {
    id: 67,
    type: 'QCM',
    question: 'Quel lien explique une adénopathie axillaire après une lésion de tularémie sur la main ?',
    options: [
      { text: 'La bactérie doit d\'abord passer par le genou avant l\'aisselle', correct: false, correction: 'Non. Ce trajet ne correspond pas au drainage lymphatique.' },
      { text: 'Une atteinte axillaire signifie nécessairement une métastase', correct: false, correction: 'Non. Une infection locale peut aussi provoquer une adénopathie régionale.' },
      { text: 'Le ganglion axillaire draine le territoire cutané du membre supérieur', correct: true, correction: 'Oui. La lésion d\'inoculation et le ganglion ont une relation anatomique.' },
      { text: 'Le ganglion prouve une contamination par inhalation exclusivement', correct: false, correction: 'Non. Une lésion de la main oriente vers une inoculation locale.' },
      { text: 'Une adénopathie exclut la tularémie', correct: false, correction: 'Non. Elle est au contraire caractéristique de la forme ulcéro-ganglionnaire.' },
    ],
    explanation: 'Le cours donne l\'exemple « doigt atteint → ganglion axillaire » pour illustrer le drainage lymphatique régional. (Cours, p. 32–33)'
  },
  {
    id: 68,
    type: 'QRM',
    question: 'Quelles présentations ou voies d\'acquisition de la tularémie sont possibles ?',
    options: [
      { text: 'Atteinte oculaire après contact de doigts contaminés avec la conjonctive', correct: true, correction: 'Oui. La muqueuse oculaire peut être une porte d\'entrée.' },
      { text: 'Forme ulcéro-ganglionnaire après inoculation cutanée', correct: true, correction: 'Oui. Une ulcération et un ganglion régional peuvent coexister.' },
      { text: 'Forme pulmonaire après inhalation d\'aérosols contaminés', correct: true, correction: 'Oui. La voie respiratoire est possible même si le contact cutané est souvent mis en avant.' },
      { text: 'Forme oro-pharyngée ou digestive après ingestion contaminée', correct: true, correction: 'Oui. L\'ingestion est une autre voie possible.' },
      { text: 'Une forme unique toujours limitée à la peau sans fièvre', correct: false, correction: 'Non. La maladie peut être systémique et prendre plusieurs formes.' },
    ],
    explanation: 'La tularémie n\'est pas limitée au scénario du lièvre : le mode d\'entrée influence la présentation clinique. (Cours, p. 33, 35)'
  },
  {
    id: 69,
    type: 'QCM',
    question: 'Pourquoi faut-il signaler au laboratoire une suspicion de Francisella tularensis avant les manipulations microbiologiques ?',
    options: [
      { text: 'Parce qu\'une culture de routine sur paillasse ouverte est toujours sans danger', correct: false, correction: 'Non. Les aérosols de laboratoire représentent un risque.' },
      { text: 'Parce qu\'aucun prélèvement biologique n\'est jamais utile', correct: false, correction: 'Non. Des prélèvements peuvent confirmer le diagnostic.' },
      { text: 'Parce que la bactérie est un virus sans risque pour le laboratoire', correct: false, correction: 'Non. C\'est une bactérie et une exposition professionnelle est possible.' },
      { text: 'La bactérie est très infectieuse et requiert des précautions de laboratoire particulières', correct: true, correction: 'Oui. L\'alerte protège le personnel et guide les techniques adaptées.' },
      { text: 'Parce que tous les résultats doivent être ignorés si le patient chasse', correct: false, correction: 'Non. L\'exposition accroît plutôt la suspicion.' },
    ],
    explanation: 'La culture est difficile et l\'agent très infectieux ; la suspicion doit être portée à la connaissance du laboratoire. (Cours, p. 33, 35)'
  },
  {
    id: 70,
    type: 'QRM',
    question: 'Quels prélèvements ou tests peuvent contribuer à confirmer une tularémie selon la forme clinique ?',
    options: [
      { text: 'Un prélèvement de l\'ulcération ou de la conjonctive si ces sites sont atteints', correct: true, correction: 'Oui. On adapte le site à la porte d\'entrée.' },
      { text: 'Un ECBU isolé et systématique comme preuve de toute tularémie', correct: false, correction: 'Non. L\'urine n\'est pas le prélèvement principal de cette présentation.' },
      { text: 'Une sérologie interprétée selon le délai depuis les symptômes', correct: true, correction: 'Oui. Les anticorps peuvent apparaître tardivement.' },
      { text: 'Une aspiration ou biopsie d\'un ganglion atteint', correct: true, correction: 'Oui. Le ganglion est un site utile dans la forme ulcéro-ganglionnaire.' },
      { text: 'Une PCR sur un prélèvement clinique approprié', correct: true, correction: 'Oui. La détection moléculaire peut apporter un argument direct.' },
    ],
    explanation: 'Le cours cite ganglion, porte d\'entrée, hémocultures selon le contexte, sérologie et PCR ; les tests sont choisis en fonction du syndrome. (Cours, p. 33–35)'
  },
  {
    id: 71,
    type: 'QCM',
    question: 'Une sérologie Francisella réalisée deux jours après le début d\'une fièvre est négative. Quelle interprétation est correcte ?',
    options: [
      { text: 'Elle démontre que la fièvre n\'est pas infectieuse', correct: false, correction: 'Non. Une sérologie précoce négative ne permet pas cette conclusion.' },
      { text: 'Elle exclut définitivement la maladie quelle que soit l\'exposition', correct: false, correction: 'Non. Le test peut être négatif au tout début.' },
      { text: 'Elle n\'exclut pas la tularémie, car les anticorps peuvent apparaître plus tard', correct: true, correction: 'Oui. Un contrôle sérologique ultérieur peut être utile si la suspicion demeure.' },
      { text: 'Elle rend inutile l\'information du laboratoire', correct: false, correction: 'Non. La suspicion clinique et la sécurité des prélèvements restent pertinentes.' },
      { text: 'Elle prouve une pasteurellose', correct: false, correction: 'Non. La négativité d\'un test Francisella n\'identifie pas un autre agent.' },
    ],
    explanation: 'Le CDC précise que les anticorps anti-Francisella sont souvent indétectables avant deux à trois semaines ; une sérologie précoce négative ne clôt pas l\'enquête. (Cours, p. 33 ; nuance diagnostique)'
  },
  {
    id: 72,
    type: 'QRM',
    question: 'Concernant la confirmation microbiologique d\'une tularémie, quelles propositions sont justes ?',
    options: [
      { text: 'Une séroconversion sur deux prélèvements apporte un argument fort', correct: true, correction: 'Oui. Le délai de réponse anticorps justifie des échantillons espacés.' },
      { text: 'Une PCR peut détecter l\'agent dans un prélèvement adapté', correct: true, correction: 'Oui. Un aspirat ganglionnaire est un exemple dans le cours.' },
      { text: 'La culture peut être longue et exige une alerte du laboratoire', correct: true, correction: 'Oui. Francisella pousse difficilement et la manipulation demande des précautions.' },
      { text: 'Un résultat sérologique isolé positif doit être interprété avec l\'exposition et la clinique', correct: true, correction: 'Oui. Le contexte influe sur la valeur du test.' },
      { text: 'Une culture négative ordinaire exclut toujours la tularémie', correct: false, correction: 'Non. La culture est fastidieuse et sa sensibilité imparfaite.' },
    ],
    explanation: 'Le diagnostic combine exposition, syndrome, prélèvement direct éventuel et sérologie datée ; aucun résultat isolé ne suffit dans toutes les situations. (Cours, p. 33, 35)'
  },
  {
    id: 73,
    type: 'QCM',
    question: 'Quelle phrase corrige l\'affirmation du support selon laquelle un aminoside ne serait jamais utilisé seul dans la tularémie ?',
    options: [
      { text: 'La gentamicine est toujours inefficace contre Francisella', correct: false, correction: 'Non. Elle fait partie des antibiotiques recommandés.' },
      { text: 'La gentamicine peut être un traitement initial à elle seule dans certaines formes sévères, selon les recommandations CDC', correct: true, correction: 'Oui. L\'association de deux classes est une option, pas une obligation universelle.' },
      { text: 'Le seul traitement de tularémie est l\'amoxicilline', correct: false, correction: 'Non. Les recommandations privilégient d\'autres classes actives.' },
      { text: 'Un aminoside est obligatoire chez toute forme légère sans autre option', correct: false, correction: 'Non. Des traitements oraux peuvent convenir à certaines formes peu sévères.' },
      { text: 'Il faut remplacer les antibiotiques par un antiviral', correct: false, correction: 'Non. Francisella est une bactérie.' },
    ],
    explanation: 'Le cours mentionne tétracyclines, fluoroquinolones et aminosides, mais son interdiction absolue des aminosides seuls est inexacte selon les recommandations CDC 2025. (Cours, p. 34–35 ; correction)'
  },
  {
    id: 74,
    type: 'QRM',
    question: 'Quelles classes ou molécules figurent parmi les traitements actifs de la tularémie selon les recommandations vérifiées ?',
    options: [
      { text: 'L\'amoxicilline seule comme traitement toujours suffisant de Francisella', correct: false, correction: 'Non. Les bêta-lactamines ne sont pas les options recommandées pour cette infection.' },
      { text: 'Un antiviral spécifique comme traitement de référence', correct: false, correction: 'Non. Il n\'agit pas sur cette bactérie.' },
      { text: 'La doxycycline', correct: true, correction: 'Oui. Cette tétracycline peut être proposée dans des situations adaptées.' },
      { text: 'La gentamicine', correct: true, correction: 'Oui. Elle est particulièrement utilisée dans des formes sévères.' },
      { text: 'Une fluoroquinolone telle que la ciprofloxacine', correct: true, correction: 'Oui. Elle fait partie des options de première ligne selon le contexte.' },
    ],
    explanation: 'Le choix dépend de la sévérité, du délai et du terrain ; les trois familles principales sont fluoroquinolones, tétracyclines et aminosides. (Cours, p. 34–35 ; CDC 2025)'
  },
  {
    id: 75,
    type: 'QCM',
    question: 'Un biologiste voit sur la demande d\'examen « suspicion de tularémie ». Quelle première mesure organisationnelle est importante ?',
    options: [
      { text: 'Adapter immédiatement les procédures de sécurité et prévenir l\'équipe de microbiologie', correct: true, correction: 'Oui. L\'agent peut exposer le personnel, notamment lors des cultures.' },
      { text: 'Considérer que la mention clinique n\'a aucun intérêt pour le laboratoire', correct: false, correction: 'Non. L\'information change les précautions et la stratégie diagnostique.' },
      { text: 'Manipuler volontairement les prélèvements hors des dispositifs de protection', correct: false, correction: 'Non. Cette pratique augmenterait le risque d\'exposition.' },
      { text: 'Rechercher uniquement une sérologie antirabique chez tous les patients', correct: false, correction: 'Non. La suspicion vise ici Francisella, pas systématiquement le virus rabique.' },
      { text: 'Jeter tout prélèvement sans concertation avec le clinicien', correct: false, correction: 'Non. Il faut organiser les tests adaptés en sécurité.' },
    ],
    explanation: 'Le lien clinicien–laboratoire est essentiel pour les agents à risque de transmission professionnelle, dont Francisella. (Cours, p. 33, 35)'
  },
  {
    id: 76,
    type: 'QRM',
    question: 'Selon la liste française officielle consultée en 2026, quelles maladies de ce cours sont à signalement obligatoire ?',
    options: [
      { text: 'La brucellose', correct: true, correction: 'Oui. Elle figure aussi sur la liste officielle.' },
      { text: 'Le typhus exanthématique', correct: true, correction: 'Oui. Cette rickettsiose particulière est listée.' },
      { text: 'Toute borréliose de Lyme', correct: false, correction: 'Non. Lyme n\'est pas actuellement une maladie à signalement obligatoire en France.' },
      { text: 'Toute pasteurellose', correct: false, correction: 'Non. La pasteurellose n\'apparaît pas sur la liste officielle.' },
      { text: 'La tularémie', correct: true, correction: 'Oui. Elle figure sur la liste de Santé publique France.' },
    ],
    explanation: 'Le tableau du cours inclut à tort Lyme et Pasteurella ; la liste Santé publique France mise à jour en avril 2026 confirme tularémie, brucellose et typhus exanthématique. (Cours, p. 34–36 ; liste officielle 2026)'
  },
  {
    id: 77,
    type: 'QCM',
    question: 'Un patient fébrile avec cholestase vit près d\'un élevage de ruminants ; quelle zoonose bactérienne liée aux aérosols doit faire partie du diagnostic différentiel ?',
    options: [
      { text: 'La fièvre Q à Coxiella burnetii', correct: true, correction: 'Oui. L\'exposition aux aérosols d\'élevage est un indice, sans être une preuve à elle seule.' },
      { text: 'Une neuroborréliose prouvée sans examen neurologique', correct: false, correction: 'Non. Le contexte décrit ne démontre pas Lyme.' },
      { text: 'Une maladie des griffes du chat certaine sans adénopathie', correct: false, correction: 'Non. Le tableau ne lui est pas spécifique.' },
      { text: 'Une listériose démontrée par la proximité de bovins', correct: false, correction: 'Non. Il faut une évaluation clinique et biologique appropriée.' },
      { text: 'Une pasteurellose d\'inoculation certaine sans plaie', correct: false, correction: 'Non. Il manque la porte d\'entrée habituelle.' },
    ],
    explanation: 'Le cas final du support met la fièvre Q parmi les hypothèses d\'une fièvre prolongée près d\'un élevage ; une exposition oriente sans confirmer. (Cours, p. 5, 37)'
  },
  {
    id: 78,
    type: 'QRM',
    question: 'Face à une fièvre prolongée avec sueurs nocturnes et exposition rurale, quelles démarches restent raisonnables ?',
    options: [
      { text: 'Exclure d\'emblée la tuberculose dès qu\'aucun contact connu n\'est rapporté', correct: false, correction: 'Non. L\'absence de contact identifié ne suffit pas à écarter ce diagnostic différentiel.' },
      { text: 'Diagnostiquer définitivement une brucellose sur les seules sueurs nocturnes', correct: false, correction: 'Non. Ce signe est peu spécifique et demande confirmation.' },
      { text: 'Rechercher une consommation de laitages crus pour apprécier le risque de brucellose', correct: true, correction: 'Oui. Cette exposition change la probabilité prétest.' },
      { text: 'Explorer une exposition aux aérosols de ruminants pour la fièvre Q', correct: true, correction: 'Oui. La voie aérienne est caractéristique.' },
      { text: 'Écarter toute infection dès lors qu\'aucun souffle cardiaque n\'est entendu', correct: false, correction: 'Non. L\'absence de souffle n\'exclut pas toutes les infections ni toute endocardite.' },
    ],
    explanation: 'Le cas clinique combine syndrome inflammatoire et expositions ; le raisonnement ne doit pas se réduire à un signe ni à l\'absence d\'un contact reconnu. (Cours, p. 37)'
  },
  {
    id: 79,
    type: 'QCM',
    question: 'Quel examen cible le mieux une suspicion de fièvre Q dans le bilan du patient rural du cours ?',
    options: [
      { text: 'Des hémocultures ordinaires seules comme test fiable de Coxiella', correct: false, correction: 'Non. Coxiella ne pousse pas dans les hémocultures hospitalières de routine.' },
      { text: 'Une culture de plaie de morsure sans plaie', correct: false, correction: 'Non. Elle ne répond pas à la suspicion de fièvre Q.' },
      { text: 'Une sérologie anti-Borrelia positive sans tableau de Lyme', correct: false, correction: 'Non. Elle n\'établirait pas une fièvre Q.' },
      { text: 'Un ECBU isolé prouvant Coxiella', correct: false, correction: 'Non. Il peut servir à d\'autres diagnostics mais ne confirme pas cette zoonose.' },
      { text: 'Une sérologie Coxiella adaptée au stade, éventuellement complétée par PCR en phase aiguë', correct: true, correction: 'Oui. Les tests spécifiques complètent l\'exposition et la clinique.' },
    ],
    explanation: 'Le cours propose la sérologie de fièvre Q ; le CDC précise l\'intérêt d\'une PCR sanguine précoce et l\'inutilité des hémocultures ordinaires pour Coxiella. (Cours, p. 37 ; CDC, Q Fever Diagnosis)'
  },
  {
    id: 80,
    type: 'QRM',
    question: 'Quelles étapes résument un raisonnement diagnostique rigoureux devant une zoonose bactérienne possible ?',
    options: [
      { text: 'Déduire une infection active du seul fait d\'habiter près d\'une ferme', correct: false, correction: 'Non. L\'exposition est un indice, pas une preuve.' },
      { text: 'Considérer toutes les infections liées aux animaux comme identiques et traiter sans distinction', correct: false, correction: 'Non. Les voies et les examens diffèrent largement.' },
      { text: 'Choisir le prélèvement en fonction du syndrome : plaie, ganglion, sang ou LCR selon le cas', correct: true, correction: 'Oui. Un même échantillon ne convient pas à toutes les zoonoses.' },
      { text: 'Signaler au laboratoire une suspicion d\'agent à risque tel que Francisella', correct: true, correction: 'Oui. Cela conditionne la sécurité et parfois la technique.' },
      { text: 'Préciser l\'animal, la voie de contact et le délai depuis l\'exposition', correct: true, correction: 'Oui. Ces éléments orientent l\'agent probable.' },
    ],
    explanation: 'Les cas du support montrent l\'intérêt de relier exposition, délai, syndrome et choix du test, tout en préservant le diagnostic différentiel. (Cours, p. 2–7, 32–37)'
  },
]
