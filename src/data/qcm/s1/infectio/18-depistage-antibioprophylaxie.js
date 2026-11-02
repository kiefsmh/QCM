export const meta = {
  title: 'Dépistage et antibioprophylaxie',
}

export default [
  {
    id: 1,
    type: 'QCM',
    question: 'Chez une patiente sans symptôme infectieux, un prélèvement est réalisé pour savoir si elle héberge une bactérie susceptible d\'être transmise. Quelle est la qualification la plus juste de cette démarche ?',
    options: [
      { text: 'Un diagnostic direct d\'infection invasive.', correct: false, correction: 'Faux. Un diagnostic direct vise à identifier l\'agent d\'une infection suspectée sur le site atteint.' },
      { text: 'Une preuve de maladie bactérienne active.', correct: false, correction: 'Faux. Un portage asymptomatique n\'établit pas à lui seul une infection active.' },
      { text: 'Une antibiothérapie probabiliste.', correct: false, correction: 'Faux. Il s\'agit ici d\'un prélèvement de recherche de portage, pas de l\'administration d\'un traitement.' },
      { text: 'Une sérologie bactérienne.', correct: false, correction: 'Faux. Une sérologie recherche une réponse immunitaire, notamment des anticorps, dans le sérum.' },
      { text: 'Un dépistage de portage bactérien.', correct: true, correction: 'Vrai. Le dépistage recherche une colonisation ou un portage chez une personne asymptomatique.' },
    ],
    explanation: 'Le critère central est l\'absence de symptômes : le dépistage identifie un portage pour guider la prévention et la maîtrise de la transmission. (Cours, p. 2)'
  },
  {
    id: 2,
    type: 'QRM',
    question: 'À propos du diagnostic microbiologique direct décrit dans le cours, quelles associations entre suspicion clinique et prélèvement sont cohérentes ?',
    options: [
      { text: 'Suspicion de méningite : écouvillonnage nasal comme seule preuve directe.', correct: false, correction: 'Faux. Un écouvillon nasal peut détecter un portage, mais ne prouve pas une infection du liquide céphalorachidien.' },
      { text: 'Suspicion de bactériémie : hémocultures.', correct: true, correction: 'Vrai. Le sang est le compartiment à explorer lorsqu\'une bactériémie est suspectée.' },
      { text: 'Suspicion de méningite : prélèvement de liquide céphalorachidien.', correct: true, correction: 'Vrai. Le liquide céphalorachidien correspond au site de l\'infection méningée suspectée.' },
      { text: 'Suspicion de bactériémie : sérologie seule, sans prélèvement sanguin microbiologique.', correct: false, correction: 'Faux. La sérologie n\'est pas le diagnostic direct de la bactériémie ; le cours cite le prélèvement sanguin.' },
      { text: 'Suspicion d\'infection urinaire : examen cytobactériologique des urines.', correct: true, correction: 'Vrai. L\'ECBU examine le site urinaire concerné.' },
    ],
    explanation: 'Le diagnostic direct recherche le micro-organisme dans le site anatomique de l\'infection suspectée, tandis que le dépistage cible un portage. (Cours, p. 2)'
  },
  {
    id: 3,
    type: 'QCM',
    question: 'Quel résultat répond le mieux à la question d\'un dépistage de portage, plutôt qu\'à celle d\'un diagnostic d\'infection ?',
    options: [
      { text: 'Mise en évidence d\'une bactérie résistante sur un écouvillon rectal chez une personne asymptomatique.', correct: true, correction: 'Vrai. La recherche d\'une bactérie résistante dans le microbiote intestinal d\'une personne sans symptôme est un dépistage de portage.' },
      { text: 'ECBU positif chez une personne présentant une dysurie fébrile.', correct: false, correction: 'Faux. Les symptômes urinaires motivent ici un diagnostic d\'infection et non une simple recherche de portage.' },
      { text: 'Identification d\'une bactérie dans un abcès prélevé pour douleur et inflammation.', correct: false, correction: 'Faux. Un prélèvement d\'abcès symptomatique vise le diagnostic étiologique d\'une infection.' },
      { text: 'Hémoculture positive lors d\'un tableau septicémique.', correct: false, correction: 'Faux. L\'hémoculture est un examen diagnostique ciblant une infection sanguine suspectée.' },
      { text: 'Culture positive d\'un liquide céphalorachidien prélevé pour syndrome méningé.', correct: false, correction: 'Faux. Ce prélèvement explore directement une infection méningée suspectée.' },
    ],
    explanation: 'La nature du prélèvement ne suffit pas : le contexte asymptomatique et l\'objectif de recherche d\'un portage définissent le dépistage. (Cours, p. 2)'
  },
  {
    id: 4,
    type: 'QRM',
    question: 'Quels énoncés décrivent correctement l\'intérêt des milieux de culture dans la démarche de dépistage exposée dans le cours ?',
    options: [
      { text: 'Un dépistage de portage peut nécessiter une méthode adaptée à l\'organisme ou au mécanisme de résistance recherché.', correct: true, correction: 'Vrai. Le choix de la culture dépend de la cible du dépistage ; un milieu unique ne convient pas à toutes les bactéries.' },
      { text: 'Un milieu chromogène peut aider à reconnaître des colonies suspectes par leur aspect.', correct: true, correction: 'Vrai. L\'apparence des colonies sur un milieu chromogène oriente la détection du germe ciblé.' },
      { text: 'Un milieu sélectif prouve à lui seul que le porteur présente une infection symptomatique.', correct: false, correction: 'Faux. La croissance sur le milieu révèle une bactérie ; elle n\'établit pas une maladie clinique.' },
      { text: 'Un milieu sélectif peut favoriser la mise en évidence d\'une bactérie recherchée au sein d\'une flore polymicrobienne.', correct: true, correction: 'Vrai. La sélection aide à repérer la cible au sein de la flore de portage.' },
      { text: 'Les milieux sélectifs rendent inutile toute confirmation d\'identification ou de résistance.', correct: false, correction: 'Faux. Un aspect de colonie est un signal de dépistage, à interpréter et confirmer selon la procédure du laboratoire.' },
    ],
    explanation: 'Le cours oppose les cultures de diagnostic et la recherche ciblée de portage, pour laquelle il mentionne les milieux sélectifs ou chromogènes. (Cours, p. 2)'
  },
  {
    id: 5,
    type: 'QCM',
    question: 'Dans l\'approche du cours, quelle situation justifie avant tout un dépistage bactérien pour prévenir un risque lié au portage ?',
    options: [
      { text: 'Un patient fébrile avec suspicion de méningite, sans prélèvement du site infecté.', correct: false, correction: 'Faux. La suspicion de méningite relève en priorité d\'une démarche diagnostique sur le site concerné.' },
      { text: 'Un patient asymptomatique avant une chirurgie cardiaque, dans une stratégie de recherche de portage nasal de Staphylococcus aureus.', correct: true, correction: 'Vrai. Le portage nasal peut guider une stratégie de prévention du risque infectieux en chirurgie cardiaque.' },
      { text: 'Un patient avec signes de septicémie pour qui l\'on ne réalise qu\'une recherche de portage nasal.', correct: false, correction: 'Faux. La recherche nasale de portage ne remplace pas le diagnostic d\'une infection sanguine.' },
      { text: 'Un patient avec pyélonéphrite clinique dont on analyse les urines pour identifier l\'agent causal.', correct: false, correction: 'Faux. Il s\'agit d\'un prélèvement diagnostique chez un patient symptomatique.' },
      { text: 'Un patient avec un abcès cutané dont on cultive le pus.', correct: false, correction: 'Faux. La culture de pus explore une infection présente, non un portage asymptomatique.' },
    ],
    explanation: 'Le cours donne la chirurgie propre, notamment cardiaque, comme contexte où rechercher un portage nasal avant l\'acte peut contribuer à prévenir une complication. (Cours, p. 2)'
  },
  {
    id: 6,
    type: 'QRM',
    question: 'Quels objectifs possibles d\'un dépistage bactérien chez une personne asymptomatique sont cités par le cours ?',
    options: [
      { text: 'Repérer un mécanisme de résistance aux antibiotiques chez une bactérie portée.', correct: true, correction: 'Vrai. La recherche des BMR ou BHRe figure parmi les objectifs du cours.' },
      { text: 'Établir à lui seul l\'étiologie d\'une infection active chez tout porteur positif.', correct: false, correction: 'Faux. Une positivité de portage ne prouve pas que la bactérie cause une infection active.' },
      { text: 'Éviter toute évaluation clinique si le prélèvement est négatif.', correct: false, correction: 'Faux. Un dépistage négatif ne remplace pas l\'évaluation de symptômes ou d\'un foyer infectieux suspect.' },
      { text: 'Détecter un portage susceptible de favoriser une transmission à autrui.', correct: true, correction: 'Vrai. Le dépistage peut contribuer aux mesures de prévention de la transmission.' },
      { text: 'Apprécier un risque infectieux périopératoire lié à un portage.', correct: true, correction: 'Vrai. Certains portages peuvent modifier la prévention du risque infectieux autour d\'une intervention.' },
    ],
    explanation: 'Le dépistage est une mesure ciblée sur la prévention : risque opératoire, transmission ou résistance, et non une preuve générale d\'infection. (Cours, p. 2)'
  },
  {
    id: 7,
    type: 'QCM',
    question: 'Quel site le cours propose-t-il de prélever pour rechercher le portage de Staphylococcus aureus avant une chirurgie cardiaque ?',
    options: [
      { text: 'Le rectum exclusivement.', correct: false, correction: 'Faux. Le cours cite l\'écouvillonnage rectal pour certaines bactéries digestives résistantes, pas pour le dépistage nasal de S. aureus.' },
      { text: 'Les urines.', correct: false, correction: 'Faux. Un prélèvement urinaire n\'est pas le site de référence du portage nasal de S. aureus.' },
      { text: 'Le sang.', correct: false, correction: 'Faux. Une hémoculture recherche une bactériémie, non le portage préopératoire décrit.' },
      { text: 'Les fosses nasales.', correct: true, correction: 'Vrai. Le nez est le site de portage mis en avant pour cette recherche préopératoire.' },
      { text: 'Le liquide céphalorachidien.', correct: false, correction: 'Faux. Il est prélevé en cas de suspicion d\'infection méningée, pas pour ce portage.' },
    ],
    explanation: 'Dans l\'exemple de chirurgie cardiaque, le site choisi correspond au principal gîte du portage étudié : les fosses nasales. (Cours, p. 2)'
  },
  {
    id: 8,
    type: 'QRM',
    question: 'Concernant les exemples de dépistage préopératoire cités dans le cours, quelles propositions sont exactes ?',
    options: [
      { text: 'Le cours associe un prélèvement de gorge à la recherche de Streptococcus pyogenes.', correct: true, correction: 'Vrai. Il cite la gorge comme site de recherche du streptocoque du groupe A.' },
      { text: 'Le cours relie le portage nasal de S. aureus à la prévention du risque infectieux en chirurgie cardiaque.', correct: true, correction: 'Vrai. Le cours prend la chirurgie cardiaque comme exemple de chirurgie propre exposée à une complication grave à S. aureus.' },
      { text: 'Le choix du site de prélèvement dépend de la bactérie recherchée.', correct: true, correction: 'Vrai. Le nez est cité pour S. aureus, alors que la gorge est citée pour S. pyogenes.' },
      { text: 'Le dépistage préopératoire consiste d\'abord à cultiver le sang pour montrer une bactériémie.', correct: false, correction: 'Faux. Le but est ici d\'identifier un portage au site habituel de colonisation, non une infection du sang.' },
      { text: 'Tous les patients opérés doivent automatiquement recevoir le même dépistage nasal, quelle que soit l\'intervention.', correct: false, correction: 'Faux. Le cours illustre un contexte à risque ; la stratégie exacte dépend du type d\'intervention et des recommandations locales.' },
    ],
    explanation: 'Un prélèvement de portage est choisi selon le germe cible et le risque clinique, et ne se confond pas avec une hémoculture diagnostique. (Cours, p. 2)'
  },
  {
    id: 9,
    type: 'QCM',
    question: 'Pourquoi le cours insiste-t-il sur Staphylococcus aureus dans l\'exemple de chirurgie cardiaque ?',
    options: [
      { text: 'Il provoque systématiquement une bactériémie chez tous les porteurs nasaux.', correct: false, correction: 'Faux. Un portage nasal peut rester asymptomatique et n\'implique pas de bactériémie.' },
      { text: 'Il ne peut être mis en évidence que dans le sang.', correct: false, correction: 'Faux. Le portage étudié ici est nasal.' },
      { text: 'Son portage peut contribuer à une complication postopératoire grave, notamment une médiastinite.', correct: true, correction: 'Vrai. La prévention des infections du site opératoire à S. aureus motive cet exemple de dépistage.' },
      { text: 'Il se transmet uniquement par voie sexuelle.', correct: false, correction: 'Faux. Ce mode de transmission ne caractérise pas le portage nasal préopératoire décrit.' },
      { text: 'Il est le seul micro-organisme capable de causer une infection après une chirurgie.', correct: false, correction: 'Faux. De nombreux agents peuvent provoquer une infection postopératoire ; le cours sélectionne ici un risque particulier.' },
    ],
    explanation: 'Le point à retenir est le lien entre portage nasal de S. aureus et infection grave après chirurgie cardiaque, illustrée par la médiastinite. (Cours, p. 2)'
  },
  {
    id: 10,
    type: 'QRM',
    question: 'Une culture nasale préopératoire révèle S. aureus chez un patient sans signe d\'infection. Quelles conclusions sont justifiées ?',
    options: [
      { text: 'Le résultat établit un portage nasal à prendre en compte dans la prévention périopératoire.', correct: true, correction: 'Vrai. C\'est précisément l\'information recherchée par ce dépistage ciblé.' },
      { text: 'Une stratégie de prévention éventuelle doit tenir compte du type de chirurgie et du protocole de l\'établissement.', correct: true, correction: 'Vrai. L\'indication et les modalités de dépistage ou décolonisation relèvent d\'une stratégie clinique définie localement.' },
      { text: 'Le résultat impose le même traitement antibiotique systémique qu\'une bactériémie documentée.', correct: false, correction: 'Faux. Portage et infection invasive sont deux situations distinctes, avec des prises en charge différentes.' },
      { text: 'Le patient a nécessairement une infection sanguine à S. aureus.', correct: false, correction: 'Faux. Aucun élément de bactériémie ne découle du seul prélèvement nasal positif.' },
      { text: 'Le résultat ne prouve pas à lui seul une médiastinite présente.', correct: true, correction: 'Vrai. La médiastinite est une complication infectieuse ; le portage nasal isolé ne la diagnostique pas.' },
    ],
    explanation: 'Le dépistage préopératoire anticipe un risque infectieux ; il ne transforme pas un portage nasal asymptomatique en infection invasive. (Cours, p. 2)'
  },
  {
    id: 11,
    type: 'QCM',
    question: 'Un patient revient d\'un séjour à l\'étranger et doit être hospitalisé. Quel élément de son parcours rend particulièrement pertinente la recherche d\'un portage de bactérie hautement résistante émergente ?',
    options: [
      { text: 'Il a uniquement changé de région française, sans autre facteur de risque.', correct: false, correction: 'Faux. Ce déplacement n\'est pas le contexte d\'exposition internationale aux soins évoqué.' },
      { text: 'Il a été hospitalisé au moins 24 heures à l\'étranger au cours de l\'année précédente.', correct: true, correction: 'Vrai. Cette exposition aux soins à l\'étranger est un critère reconnu de dépistage des BHRe lors d\'une hospitalisation en France.' },
      { text: 'Il a eu une infection urinaire il y a dix ans, quel que soit son parcours de soins depuis.', correct: false, correction: 'Faux. Cet antécédent ancien et isolé ne constitue pas, à lui seul, le critère d\'exposition internationale ciblé.' },
      { text: 'Il a simplement acheté un billet d\'avion, sans voyager ni recevoir de soins.', correct: false, correction: 'Faux. Aucun risque d\'acquisition lié aux soins à l\'étranger ne découle de ce seul projet.' },
      { text: 'Il est asymptomatique : cela exclut tout portage bactérien résistant.', correct: false, correction: 'Faux. Le portage peut être asymptomatique ; c\'est précisément ce que recherche le dépistage.' },
    ],
    explanation: 'Le cours évoque les retours de pays à risque ; la décision pratique est ciblée sur les expositions pertinentes, notamment une hospitalisation à l\'étranger ou un rapatriement sanitaire, et non tout voyage indistinctement. (Cours, p. 3)'
  },
  {
    id: 12,
    type: 'QRM',
    question: 'Pour rechercher un portage digestif de bactéries résistantes dans un contexte à risque, quelles propositions sont correctes ?',
    options: [
      { text: 'Un écouvillonnage rectal peut être utilisé comme prélèvement de dépistage.', correct: true, correction: 'Vrai. Le cours décrit l\'écouvillon rectal pour la recherche de bactéries résistantes à portage digestif.' },
      { text: 'Une personne sans diarrhée peut néanmoins être porteuse au niveau intestinal.', correct: true, correction: 'Vrai. Le dépistage s\'adresse justement à des personnes qui n\'ont pas nécessairement de symptôme infectieux.' },
      { text: 'Le choix de la recherche microbiologique dépend des bactéries ou mécanismes de résistance ciblés.', correct: true, correction: 'Vrai. Le laboratoire adapte la culture et ses analyses, par exemple à la recherche d\'entérobactéries productrices de BLSE ou de BHRe.' },
      { text: 'L\'écouvillon rectal permet de prouver une bactériémie en cours.', correct: false, correction: 'Faux. Le dépistage rectal documente un portage digestif, pas la présence de bactéries dans le sang.' },
      { text: 'Toute positivité du prélèvement impose de traiter immédiatement une infection intestinale.', correct: false, correction: 'Faux. La colonisation asymptomatique n\'est pas en elle-même une indication d\'antibiothérapie curative.' },
    ],
    explanation: 'Le site rectal sert à dépister le réservoir digestif ; l\'interprétation doit distinguer portage et infection. (Cours, p. 3)'
  },
  {
    id: 13,
    type: 'QCM',
    question: 'Quel est l\'effet microbiologique caractéristique d\'une bêta-lactamase à spectre étendu (BLSE) rappelé dans le cours ?',
    options: [
      { text: 'Elle confère automatiquement une résistance à absolument tous les antibiotiques.', correct: false, correction: 'Faux. Une BLSE a un spectre de résistance défini ; elle ne signifie pas résistance universelle.' },
      { text: 'Elle prouve une infection sanguine dès qu\'elle est trouvée sur un écouvillon rectal.', correct: false, correction: 'Faux. Un écouvillon rectal positif témoigne d\'abord d\'un portage digestif.' },
      { text: 'Elle correspond à une propriété intrinsèque de toutes les entérobactéries.', correct: false, correction: 'Faux. La production de BLSE est acquise par certaines souches ; elle n\'est pas universelle.' },
      { text: 'Elle peut rendre l\'entérobactérie résistante aux céphalosporines de troisième génération.', correct: true, correction: 'Vrai. L\'hydrolyse de ces céphalosporines est l\'élément de résistance mis en avant dans le cours.' },
      { text: 'Elle transforme toute souche d\'Escherichia coli en SARM.', correct: false, correction: 'Faux. Le SARM désigne Staphylococcus aureus résistant à la méticilline, une autre espèce et un autre mécanisme.' },
    ],
    explanation: 'Une BLSE est un mécanisme de résistance important chez certaines entérobactéries, notamment vis-à-vis des céphalosporines de troisième génération. (Cours, p. 3)'
  },
  {
    id: 14,
    type: 'QRM',
    question: 'Pourquoi la découverte d\'une entérobactérie productrice de BLSE peut-elle compter pour la prévention de la transmission en milieu de soins ?',
    options: [
      { text: 'Des gènes de résistance peuvent être véhiculés par des plasmides.', correct: true, correction: 'Vrai. Le support plasmidique peut faciliter la transmission de certains déterminants de résistance.' },
      { text: 'La seule existence d\'un plasmide signifie que le porteur doit recevoir des antibiotiques d\'éradication.', correct: false, correction: 'Faux. La présence d\'un gène transmissible renforce l\'attention portée à l\'hygiène, pas une indication automatique de traitement du portage.' },
      { text: 'Une souche porteuse de BLSE ne peut jamais être transmise d\'un patient à l\'autre.', correct: false, correction: 'Faux. Le cours souligne justement le risque épidémique associé à ces résistances.' },
      { text: 'Le portage digestif peut constituer un réservoir de diffusion.', correct: true, correction: 'Vrai. La flore digestive peut héberger et disséminer une souche résistante, même sans symptôme.' },
      { text: 'La présence d\'une BLSE doit être prise en compte pour choisir des mesures d\'hygiène adaptées au contexte.', correct: true, correction: 'Vrai. Le risque de transmission se gère selon la situation clinique, l\'environnement et la politique de prévention locale.' },
    ],
    explanation: 'Le cours associe BLSE, portage digestif et risque épidémique lié notamment aux plasmides ; les mesures se décident selon le contexte. (Cours, p. 3)'
  },
  {
    id: 15,
    type: 'QCM',
    question: 'Une souche d\'Escherichia coli est isolée sur un écouvillon rectal. Quelle donnée permettrait de la classer comme productrice de BLSE plutôt que de le supposer d\'après son espèce ?',
    options: [
      { text: 'L\'absence de fièvre chez le patient.', correct: false, correction: 'Faux. L\'absence de symptômes distingue un portage d\'une infection possible, mais ne démontre aucun mécanisme de résistance.' },
      { text: 'La mise en évidence d\'un phénotype ou d\'un mécanisme de production de BLSE sur cette souche.', correct: true, correction: 'Vrai. Le statut BLSE se démontre pour la souche analysée ; l\'espèce E. coli ne le prédit pas à elle seule.' },
      { text: 'Le seul fait qu\'E. coli appartienne à la flore intestinale.', correct: false, correction: 'Faux. Le portage intestinal est fréquent et ne signifie pas production de BLSE.' },
      { text: 'Le seul fait que le prélèvement soit rectal.', correct: false, correction: 'Faux. Le site de prélèvement renseigne sur le portage, mais ne caractérise pas la résistance de la souche.' },
      { text: 'Le nom E. coli, puisque toutes ses souches sont multirésistantes.', correct: false, correction: 'Faux. La multirésistance ne concerne qu\'une partie des souches ; on ne peut la déduire du seul nom d\'espèce.' },
    ],
    explanation: 'Le cours prend E. coli comme exemple d\'entérobactérie pouvant présenter une résistance ; il ne faut pas assimiler toute souche d\'E. coli à une BMR. (Cours, p. 3)'
  },
  {
    id: 16,
    type: 'QRM',
    question: 'Concernant BMR et BHRe, quelles affirmations évitent les confusions de catégories ?',
    options: [
      { text: 'BMR et BHRe sont deux noms interchangeables pour la même bactérie.', correct: false, correction: 'Faux. Les catégories renvoient à des situations et des mesures de contrôle distinctes.' },
      { text: 'BHRe désigne une catégorie particulière de bactéries hautement résistantes émergentes qui font l\'objet de mesures de maîtrise renforcées.', correct: true, correction: 'Vrai. Cette catégorie est distincte des BMR courantes ; les entérobactéries productrices de carbapénémases et Enterococcus faecium résistant aux glycopeptides en sont des exemples.' },
      { text: 'Toute bactérie résistante à un seul antibiotique est automatiquement une BHRe.', correct: false, correction: 'Faux. Une résistance isolée ne définit pas cette catégorie spécifique.' },
      { text: 'Un patient peut porter une bactérie résistante sans présenter d\'infection.', correct: true, correction: 'Vrai. La résistance caractérise la souche ; le portage asymptomatique est possible.' },
      { text: 'BMR signifie bactérie multirésistante, c\'est-à-dire résistante à plusieurs familles d\'antibiotiques selon la définition retenue.', correct: true, correction: 'Vrai. Le terme décrit un profil de résistance multiple, pas une infection clinique à lui seul.' },
    ],
    explanation: 'Le cours distingue bactéries multirésistantes et hautement résistantes ; en pratique, les BHRe constituent un groupe défini, et tout résultat positif doit aussi être interprété comme portage ou infection. (Cours, p. 3)'
  },
  {
    id: 17,
    type: 'QCM',
    question: 'Un écouvillon rectal de dépistage est positif pour une entérobactérie résistante, sans signe d\'infection chez le patient. Quelle attitude de principe est correcte ?',
    options: [
      { text: 'Ignorer le résultat parce qu\'il n\'existe aucun symptôme.', correct: false, correction: 'Faux. Même asymptomatique, un porteur peut présenter un risque de transmission à prendre en compte.' },
      { text: 'Conclure que le patient a une septicémie documentée.', correct: false, correction: 'Faux. Un prélèvement rectal positif ne démontre pas une infection sanguine.' },
      { text: 'Assimiler automatiquement ce portage à une infection urinaire.', correct: false, correction: 'Faux. Le résultat rectal ne diagnostique pas une infection urinaire.' },
      { text: 'Évaluer le risque de transmission et appliquer les mesures de prévention indiquées, sans traiter automatiquement le seul portage par antibiotiques.', correct: true, correction: 'Vrai. Le portage asymptomatique relève d\'abord d\'une gestion du risque de diffusion, et non d\'une antibiothérapie curative systématique.' },
      { text: 'Prescrire immédiatement une antibiothérapie de plusieurs semaines pour tout porteur.', correct: false, correction: 'Faux. Un portage seul n\'est pas une indication automatique de traitement, qui pourrait de plus sélectionner des résistances.' },
    ],
    explanation: 'Le cours insiste sur l\'absence d\'antibiothérapie de décolonisation systématique du portage digestif ; la prévention de la transmission reste l\'enjeu. (Cours, p. 3)'
  },
  {
    id: 18,
    type: 'QRM',
    question: 'Un service reçoit un patient susceptible de porter une BHRe après des soins à l\'étranger. Quelles propositions correspondent à une démarche de prévention raisonnée ?',
    options: [
      { text: 'Adapter les précautions de contact et l\'organisation de la chambre aux résultats et au protocole applicable.', correct: true, correction: 'Vrai. Des mesures initiales peuvent être indiquées en attente du résultat, puis réévaluées selon la situation.' },
      { text: 'Réaliser un dépistage rectal lorsque les critères de risque de BHRe sont remplis.', correct: true, correction: 'Vrai. Le réservoir digestif justifie ce prélèvement dans les situations ciblées par les recommandations.' },
      { text: 'Déduire qu\'une BLSE justifie toujours et partout les mêmes règles d\'isolement que toute BHRe.', correct: false, correction: 'Faux. Les catégories et les mesures de maîtrise diffèrent ; elles dépendent du contexte et des recommandations de l\'établissement.' },
      { text: 'Dépister systématiquement toute personne ayant simplement passé des vacances à l\'étranger, sans autre critère.', correct: false, correction: 'Faux. La politique de dépistage se fonde sur des expositions pertinentes, notamment les soins reçus à l\'étranger, pas sur tout voyage isolé.' },
      { text: 'Signaler l\'exposition à l\'équipe soignante et à l\'équipe de prévention du risque infectieux.', correct: true, correction: 'Vrai. Le parcours de soins à l\'étranger guide l\'organisation du dépistage et des précautions.' },
    ],
    explanation: 'Le cours relie retour de l\'étranger, portage digestif et risque de transmission ; les recommandations ciblent les patients exposés aux soins et prévoient des précautions adaptées. (Cours, p. 3)'
  },
  {
    id: 19,
    type: 'QCM',
    question: 'Pourquoi le cours cite-t-il les services accueillant des patients fortement immunodéprimés, par exemple en oncologie, parmi les contextes de dépistage ?',
    options: [
      { text: 'L\'immunodépression signifie que tous les patients ont déjà une bactériémie.', correct: false, correction: 'Faux. La vulnérabilité n\'implique pas une infection sanguine chez chacun.' },
      { text: 'Le risque infectieux de ces patients rend importante l\'identification de certains portages résistants et la prévention de leur transmission.', correct: true, correction: 'Vrai. Un service à patients vulnérables peut organiser un dépistage ciblé du portage de SARM ou d\'autres bactéries résistantes.' },
      { text: 'Le dépistage remplace systématiquement tout examen diagnostique si un patient devient fébrile.', correct: false, correction: 'Faux. Un patient symptomatique nécessite une évaluation et des prélèvements diagnostiques adaptés.' },
      { text: 'Le portage résistant est impossible chez les patients immunocompétents.', correct: false, correction: 'Faux. Le portage peut exister dans d\'autres populations ; le contexte module l\'enjeu de prévention.' },
      { text: 'Il faut traiter par antibiotiques tous les patients du service, même sans portage ni infection.', correct: false, correction: 'Faux. Le dépistage sert à orienter la prévention ; il ne justifie pas une antibiothérapie généralisée.' },
    ],
    explanation: 'Le cours cite les unités à patients immunodéprimés pour la recherche ciblée de SARM et de bactéries résistantes, en raison de l\'enjeu de transmission et d\'infection. (Cours, p. 3)'
  },
  {
    id: 20,
    type: 'QRM',
    question: 'Une équipe envisage un programme de dépistage de bactéries résistantes dans une unité à patients fragiles. Quels éléments doivent guider son raisonnement ?',
    options: [
      { text: 'Tenir compte des patients accueillis et du risque de transmission dans le service.', correct: true, correction: 'Vrai. Le cours cite les services à risque, notamment ceux d\'oncologie, parmi les contextes de dépistage.' },
      { text: 'Prescrire une antibiothérapie curative à tout patient dépisté, avant même tout résultat.', correct: false, correction: 'Faux. Le dépistage et les mesures d\'hygiène ne signifient pas qu\'une infection nécessitant un traitement soit présente.' },
      { text: 'Utiliser le même prélèvement nasal pour toutes les bactéries, y compris celles à portage digestif.', correct: false, correction: 'Faux. Le site de prélèvement doit correspondre au réservoir de la bactérie recherchée.' },
      { text: 'Distinguer un patient simplement porteur d\'un patient présentant une infection clinique.', correct: true, correction: 'Vrai. Cette distinction conditionne l\'interprétation du résultat et la conduite thérapeutique.' },
      { text: 'Identifier les bactéries ciblées, par exemple SARM ou certaines bactéries digestives résistantes.', correct: true, correction: 'Vrai. La cible détermine le site de prélèvement et la méthode de laboratoire.' },
    ],
    explanation: 'Un dépistage pertinent relie la population à risque, la bactérie ciblée, son site de portage et les conséquences pratiques du résultat. (Cours, p. 3)'
  },
  {
    id: 21,
    type: 'QCM',
    question: 'Une patiente porte une bactérie sans présenter d\'infection. Une antibiothérapie est envisagée afin d\'éviter une infection liée à une exposition prochaine. Comment qualifier cette stratégie ?',
    options: [
      { text: 'Une antibioprophylaxie', correct: true, correction: 'Oui : l\'antibiotique est utilisé pour prévenir une infection avant qu\'elle ne survienne.' },
      { text: 'Une sérologie de dépistage', correct: false, correction: 'Non : la sérologie recherche des marqueurs dans le sérum et ne constitue pas une prescription antibiotique.' },
      { text: 'Un traitement curatif de bactériémie', correct: false, correction: 'Non : aucune bactériémie n\'est décrite.' },
      { text: 'Un diagnostic microbiologique direct', correct: false, correction: 'Non : administrer un antibiotique n\'est pas réaliser un prélèvement diagnostique.' },
      { text: 'Une vaccination thérapeutique', correct: false, correction: 'Non : il s\'agit de l\'utilisation préventive d\'un antibiotique.' },
    ],
    explanation: 'L\'antibioprophylaxie a pour objectif d\'éviter la survenue d\'une infection ; le cours distingue aussi l\'objectif de suppression d\'un portage. (Cours, p. 4)'
  },
  {
    id: 22,
    type: 'QRM',
    question: 'Quelles finalités de l\'antibioprophylaxie sont distinguées dans le cours ?',
    options: [
      { text: 'Traiter une méningite déclarée en monothérapie préventive', correct: false, correction: 'Non : une méningite déclarée nécessite un traitement curatif.' },
      { text: 'Prévenir la survenue d\'une infection', correct: true, correction: 'Oui : c\'est le premier objectif énoncé.' },
      { text: 'Confirmer une infection invasive déjà diagnostiquée', correct: false, correction: 'Non : confirmer une infection relève du diagnostic, pas de la prophylaxie.' },
      { text: 'Réduire ou interrompre un portage bactérien', correct: true, correction: 'Oui : le cours présente l\'arrêt du portage comme second objectif.' },
      { text: 'Remplacer systématiquement le dépistage microbiologique', correct: false, correction: 'Non : le dépistage peut au contraire guider une prophylaxie.' },
    ],
    explanation: 'Le support distingue deux buts préventifs : empêcher une infection et stopper un portage. (Cours, p. 4)'
  },
  {
    id: 23,
    type: 'QCM',
    question: 'Après un cas d\'infection invasive à méningocoque, à qui s\'adresse la chimioprophylaxie de l\'entourage ?',
    options: [
      { text: 'Seulement aux professionnels du laboratoire', correct: false, correction: 'Non : le statut professionnel seul ne détermine pas les contacts ciblés.' },
      { text: 'Aux contacts proches à risque identifiés autour du cas', correct: true, correction: 'Oui : la prévention de l\'entourage cible les contacts dont l\'exposition est jugée à risque.' },
      { text: 'À tous les habitants de la ville sans évaluation d\'exposition', correct: false, correction: 'Non : la prophylaxie de l\'entourage n\'est pas universelle.' },
      { text: 'Uniquement aux personnes déjà atteintes de méningite', correct: false, correction: 'Non : il s\'agit précisément d\'une mesure préventive pour des contacts exposés.' },
      { text: 'À toute personne ayant traversé le même bâtiment', correct: false, correction: 'Non : la simple présence dans un bâtiment ne suffit pas à définir un contact à risque.' },
    ],
    explanation: 'Le cours évoque une chimioprophylaxie des cas contacts ; en pratique, elle concerne les contacts proches exposés à risque, et non tous les contacts occasionnels. (Cours, p. 4)'
  },
  {
    id: 24,
    type: 'QRM',
    question: 'À propos du méningocoque dans l\'exemple de prévention autour d\'un cas, quelles propositions sont exactes ?',
    options: [
      { text: 'Le portage évoqué est nasopharyngé', correct: true, correction: 'Oui : le cours situe le portage du méningocoque au rhinopharynx.' },
      { text: 'Tout porteur nasopharyngé développe nécessairement une méningite', correct: false, correction: 'Non : le portage n\'est pas synonyme d\'infection invasive.' },
      { text: 'Le portage décrit est exclusivement intestinal', correct: false, correction: 'Non : le site indiqué pour le méningocoque est nasopharyngé.' },
      { text: 'Le cours cite des méningites et des infections systémiques à méningocoque', correct: true, correction: 'Oui : ces deux manifestations sont mentionnées.' },
      { text: 'La chimioprophylaxie vise notamment à interrompre le portage chez les contacts ciblés', correct: true, correction: 'Oui : c\'est l\'objectif illustré par cet exemple.' },
    ],
    explanation: 'Le méningocoque peut être porté dans le rhinopharynx ; une chimioprophylaxie des contacts proches à risque vise à prévenir les cas secondaires et à réduire ce portage. (Cours, p. 4)'
  },
  {
    id: 25,
    type: 'QCM',
    question: 'Quel antibiotique le cours donne-t-il comme exemple de chimioprophylaxie autour d\'un cas de méningocoque ?',
    options: [
      { text: 'La vancomycine', correct: false, correction: 'Non : elle est évoquée plus loin pour certaines situations liées au streptocoque B.' },
      { text: 'Le métronidazole', correct: false, correction: 'Non : il n\'est pas cité pour cette prophylaxie.' },
      { text: 'La rifampicine', correct: true, correction: 'Oui : c\'est la molécule citée dans le support pour cet exemple.' },
      { text: 'L\'érythromycine', correct: false, correction: 'Non : elle n\'est pas la molécule nommée pour cet exemple de méningocoque.' },
      { text: 'L\'amoxicilline intraveineuse', correct: false, correction: 'Non : le cours la cite dans le contexte de la prophylaxie maternelle du streptocoque B.' },
    ],
    explanation: 'La rifampicine est la molécule citée par le cours pour cet exemple. En pratique, le choix d\'une chimioprophylaxie relève des recommandations et des contraintes d\'approvisionnement en vigueur. (Cours, p. 4)'
  },
  {
    id: 26,
    type: 'QRM',
    question: 'Un cas de méningococcie invasive est diagnostiqué. Quelles interprétations de la démarche préventive sont correctes ?',
    options: [
      { text: 'La prophylaxie des contacts est le traitement curatif du malade index', correct: false, correction: 'Non : la prise en charge du malade et la prévention de l\'entourage sont deux démarches distinctes.' },
      { text: 'Une personne croisée brièvement est automatiquement éligible au même titre qu\'un contact proche', correct: false, correction: 'Non : le degré d\'exposition compte dans l\'identification des contacts à risque.' },
      { text: 'La réduction du portage du méningocoque est pertinente dans cette situation', correct: true, correction: 'Oui : le cours utilise cet exemple pour illustrer l\'arrêt du portage.' },
      { text: 'L\'enquête autour du cas sert à identifier les personnes réellement exposées', correct: true, correction: 'Oui : elle permet de cibler les contacts proches à risque.' },
      { text: 'La prophylaxie de contacts peut viser à éviter un cas secondaire', correct: true, correction: 'Oui : elle a une finalité préventive dans l\'entourage.' },
    ],
    explanation: 'Autour d\'un cas, la chimioprophylaxie est destinée aux contacts proches à risque, avec un objectif d\'interruption du portage et de prévention des infections secondaires. (Cours, p. 4)'
  },
  {
    id: 27,
    type: 'QCM',
    question: 'Dans le cours, quelle espèce bactérienne correspond au streptocoque du groupe B impliqué dans les infections néonatales ?',
    options: [
      { text: 'Staphylococcus aureus', correct: false, correction: 'Non : c\'est un staphylocoque, pas un streptocoque du groupe B.' },
      { text: 'Escherichia coli', correct: false, correction: 'Non : c\'est une entérobactérie.' },
      { text: 'Streptococcus pyogenes', correct: false, correction: 'Non : S. pyogenes correspond au streptocoque du groupe A.' },
      { text: 'Streptococcus agalactiae', correct: true, correction: 'Oui : c\'est le nom d\'espèce du streptocoque du groupe B.' },
      { text: 'Neisseria meningitidis', correct: false, correction: 'Non : il s\'agit du méningocoque.' },
    ],
    explanation: 'Le modèle de transmission materno-fœtale étudié est celui de Streptococcus agalactiae, ou streptocoque du groupe B. (Cours, p. 4)'
  },
  {
    id: 28,
    type: 'QRM',
    question: 'Une femme enceinte porte Streptococcus agalactiae dans le vagin sans symptôme. Quelles affirmations sur ce portage sont compatibles avec le cours ?',
    options: [
      { text: 'Il peut être permanent chez certaines femmes', correct: true, correction: 'Oui : un portage durable est également décrit.' },
      { text: 'Il peut être lié à la proximité entre les réservoirs digestif et vaginal', correct: true, correction: 'Oui : le cours relie le portage vaginal au portage digestif et à cette proximité anatomique.' },
      { text: 'Il peut être intermittent', correct: true, correction: 'Oui : le cours précise que le portage peut varier dans le temps.' },
      { text: 'Il prouve que la femme souffre d\'une infection invasive', correct: false, correction: 'Non : un portage asymptomatique est une colonisation, pas une infection invasive.' },
      { text: 'Il exclut toute possibilité de transmission à l\'enfant', correct: false, correction: 'Non : la transmission materno-fœtale est précisément le risque étudié.' },
    ],
    explanation: 'Le réservoir digestif peut s\'accompagner d\'un portage vaginal, variable selon les femmes et selon le moment. Ce portage ne signifie pas à lui seul une maladie maternelle. (Cours, p. 4)'
  },
  {
    id: 29,
    type: 'QCM',
    question: 'Une mère est porteuse vaginale de streptocoque B. À quel moment et par quelle voie le cours situe-t-il principalement la transmission au nouveau-né ?',
    options: [
      { text: 'Uniquement par transmission aérienne après le retour au domicile', correct: false, correction: 'Non : ce n\'est pas la voie décrite pour le mécanisme principal étudié.' },
      { text: 'Uniquement après une antibioprophylaxie efficace', correct: false, correction: 'Non : l\'antibioprophylaxie vise au contraire à diminuer le risque.' },
      { text: 'Exclusivement par transfusion placentaire au premier trimestre', correct: false, correction: 'Non : le cours décrit la transmission lors de l\'accouchement par voie basse.' },
      { text: 'Pendant l\'accouchement par voie basse', correct: true, correction: 'Oui : le nouveau-né est exposé au portage vaginal lors du passage par la filière génitale.' },
      { text: 'Seulement lors d\'une ponction lombaire néonatale', correct: false, correction: 'Non : la ponction lombaire est un examen diagnostique, pas la voie de transmission décrite.' },
    ],
    explanation: 'Dans le mécanisme présenté, la transmission verticale du streptocoque B se produit pendant l\'accouchement par voie basse. (Cours, p. 4)'
  },
  {
    id: 30,
    type: 'QRM',
    question: 'Chez une mère porteuse vaginale de streptocoque B, quels éléments décrivent correctement la chaîne de transmission présentée ?',
    options: [
      { text: 'L\'enfant peut être colonisé au cours d\'un accouchement par voie basse', correct: true, correction: 'Oui : c\'est le mécanisme de transmission exposé.' },
      { text: 'Toute colonisation maternelle entraîne nécessairement une méningite néonatale', correct: false, correction: 'Non : transmission, colonisation et infection sont des étapes distinctes et non automatiques.' },
      { text: 'La colonisation de l\'enfant précède une éventuelle infection invasive', correct: true, correction: 'Oui : seule une petite fraction des enfants colonisés développe ensuite une infection.' },
      { text: 'Le streptocoque B ne peut être présent que dans le vagin maternel', correct: false, correction: 'Non : le cours mentionne aussi le portage digestif.' },
      { text: 'La bactérie peut être présente aussi dans le tube digestif maternel', correct: true, correction: 'Oui : le cours décrit un portage digestif.' },
    ],
    explanation: 'Le cours relie portage digestif et vaginal maternels, transmission lors de la naissance, colonisation néonatale puis parfois infection. (Cours, p. 4)'
  },
  {
    id: 31,
    type: 'QCM',
    question: 'Dans l\'estimation donnée par le cours, quelle proportion de nouveau-nés d\'une mère porteuse vaginale de streptocoque B est colonisée ?',
    options: [
      { text: 'Exactement 100 %', correct: false, correction: 'Non : la transmission n\'est pas systématique.' },
      { text: 'Moins de 0,01 %', correct: false, correction: 'Non : le portage est transmis beaucoup plus souvent que cela dans l\'estimation du cours.' },
      { text: 'Environ 1 à 2 %', correct: false, correction: 'Non : ce chiffre correspond à la part des nouveau-nés colonisés développant une infection.' },
      { text: 'Environ 50 à 70 %', correct: true, correction: 'Oui : c\'est la fréquence de transmission-colonisation annoncée.' },
      { text: 'Environ 5 %', correct: false, correction: 'Non : ce n\'est pas la proportion donnée pour la colonisation néonatale.' },
    ],
    explanation: 'La transmission conduisant à une colonisation du nouveau-né est estimée à 50–70 % dans le cours ; elle ne signifie pas infection. (Cours, p. 4)'
  },
  {
    id: 32,
    type: 'QRM',
    question: 'Un nouveau-né est colonisé par le streptocoque B à la naissance. Quelles conclusions sont justifiées par le cours ?',
    options: [
      { text: 'Une méningite est inévitable chez cet enfant', correct: false, correction: 'Non : la progression vers une maladie invasive n\'est pas systématique.' },
      { text: 'La colonisation n\'équivaut pas à une infection invasive', correct: true, correction: 'Oui : seule une minorité des enfants colonisés développe une infection.' },
      { text: 'La mère est nécessairement atteinte d\'une septicémie', correct: false, correction: 'Non : le portage vaginal maternel peut être asymptomatique.' },
      { text: 'Le risque d\'infection mérite une prévention malgré son caractère minoritaire', correct: true, correction: 'Oui : la fréquence des naissances et la gravité potentielle rendent ce risque important.' },
      { text: 'Le cours estime qu\'environ 1 à 2 % des enfants colonisés s\'infectent', correct: true, correction: 'Oui : c\'est la proportion avancée.' },
    ],
    explanation: 'Le cours sépare nettement colonisation et infection : environ 1 à 2 % des nouveau-nés colonisés développeraient une infection. (Cours, p. 4)'
  },
  {
    id: 33,
    type: 'QCM',
    question: 'Quels sites de colonisation néonatale par le streptocoque B sont cités dans le mécanisme exposé ?',
    options: [
      { text: 'Le poumon ou le tube digestif', correct: true, correction: 'Oui : le support cite ces deux localisations de colonisation.' },
      { text: 'Uniquement les valves cardiaques', correct: false, correction: 'Non : ce n\'est pas une localisation du portage néonatal décrite.' },
      { text: 'Uniquement le liquide cérébrospinal', correct: false, correction: 'Non : une atteinte du LCS relèverait d\'une méningite, pas du simple portage décrit.' },
      { text: 'Exclusivement la moelle osseuse', correct: false, correction: 'Non : ce site n\'est pas cité comme colonisation dans le mécanisme étudié.' },
      { text: 'Seulement le placenta après la naissance', correct: false, correction: 'Non : il s\'agit de sites chez le nouveau-né.' },
    ],
    explanation: 'Le cours mentionne notamment une colonisation pulmonaire ou digestive du nouveau-né avant une éventuelle dissémination. (Cours, p. 4)'
  },
  {
    id: 34,
    type: 'QRM',
    question: 'À partir d\'une colonisation néonatale à streptocoque B, quelles évolutions le cours décrit-il comme possibles ?',
    options: [
      { text: 'Une protection définitive contre toute infection ultérieure', correct: false, correction: 'Non : le cours ne décrit pas la colonisation comme une immunisation protectrice.' },
      { text: 'Une infection invasive chez tous les enfants colonisés', correct: false, correction: 'Non : seule une minorité des enfants colonisés développe une infection.' },
      { text: 'Une méningite', correct: true, correction: 'Oui : une méningite peut survenir lors de l\'infection invasive.' },
      { text: 'Une dissémination vers le sang à partir du tube digestif', correct: true, correction: 'Oui : un passage à partir du tube digestif est également évoqué.' },
      { text: 'Une dissémination vers le sang à partir d\'un foyer respiratoire', correct: true, correction: 'Oui : le cours décrit la possibilité d\'un passage du poumon vers le sang.' },
    ],
    explanation: 'La colonisation respiratoire ou digestive peut être suivie d\'un passage dans le sang, avec bactériémie puis éventuellement méningite ; ce parcours n\'est pas systématique. (Cours, p. 5)'
  },
  {
    id: 35,
    type: 'QCM',
    question: 'Un nouveau-né présente une infection à streptocoque B au cinquième jour de vie. Comment la classer selon les bornes temporelles du cours ?',
    options: [
      { text: 'Portage maternel sans infection néonatale', correct: false, correction: 'Non : l\'énoncé décrit bien une infection chez le nouveau-né.' },
      { text: 'Infection anténatale du premier trimestre', correct: false, correction: 'Non : le cinquième jour est après la naissance.' },
      { text: 'Infection néonatale tardive', correct: false, correction: 'Non : la forme tardive débute à partir du huitième jour dans ce cours.' },
      { text: 'Infection exclusivement postnatale au-delà de trois mois', correct: false, correction: 'Non : le cinquième jour appartient à la période précoce.' },
      { text: 'Infection néonatale précoce', correct: true, correction: 'Oui : la forme précoce survient dans les sept premiers jours.' },
    ],
    explanation: 'Le cours définit l\'infection néonatale précoce comme celle qui survient dans les sept jours suivant l\'accouchement. (Cours, p. 5)'
  },
  {
    id: 36,
    type: 'QRM',
    question: 'Quelles associations entre délai après la naissance et catégorie d\'infection néonatale à streptocoque B sont correctes selon le cours ?',
    options: [
      { text: 'Jour 20 : forme tardive', correct: true, correction: 'Oui : le vingtième jour relève de la période tardive.' },
      { text: 'Jour 3 : forme tardive', correct: false, correction: 'Non : le troisième jour relève de la phase précoce.' },
      { text: 'Jour 30 : forme précoce', correct: false, correction: 'Non : le trentième jour relève de la phase tardive.' },
      { text: 'Jour 2 : forme précoce', correct: true, correction: 'Oui : le deuxième jour se situe dans les sept premiers jours.' },
      { text: 'Jour 60 : forme tardive', correct: true, correction: 'Oui : le soixantième jour se situe avant la fin du troisième mois.' },
    ],
    explanation: 'Le cours oppose les infections des premiers jours de vie aux infections survenant ensuite jusqu\'au troisième mois ; les jours choisis ici évitent la frontière exacte entre les deux catégories. (Cours, p. 5)'
  },
  {
    id: 37,
    type: 'QCM',
    question: 'Quelle observation le cours associe-t-il plus particulièrement à une infection néonatale tardive à streptocoque B ?',
    options: [
      { text: 'Une présentation parfois plus sournoise, pouvant se révéler par une anomalie de la courbe de croissance', correct: true, correction: 'Oui : c\'est la particularité clinique mentionnée pour la forme tardive.' },
      { text: 'Une infection nécessairement visible dès la naissance', correct: false, correction: 'Non : la forme tardive se manifeste après les premiers jours.' },
      { text: 'Une atteinte obligatoire de tous les nouveau-nés colonisés', correct: false, correction: 'Non : l\'infection ne concerne qu\'une minorité des enfants colonisés.' },
      { text: 'Une apparition limitée aux sept premiers jours de vie', correct: false, correction: 'Non : cette période correspond à la forme précoce.' },
      { text: 'L\'absence garantie de toute bactériémie', correct: false, correction: 'Non : le cours décrit un risque d\'infection invasive, y compris sanguine.' },
    ],
    explanation: 'La forme tardive, survenant après les premiers jours et jusqu\'au troisième mois, est décrite comme plus insidieuse et parfois repérée sur la courbe de croissance. (Cours, p. 5)'
  },
  {
    id: 38,
    type: 'QRM',
    question: 'Pourquoi une infection néonatale à streptocoque B est-elle un événement potentiellement grave ?',
    options: [
      { text: 'Elle peut laisser des séquelles neurologiques', correct: true, correction: 'Oui : le cours mentionne ce risque après une infection non létale.' },
      { text: 'Elle peut provoquer une méningite', correct: true, correction: 'Oui : la méningite est une manifestation invasive citée.' },
      { text: 'Elle peut provoquer une bactériémie', correct: true, correction: 'Oui : une dissémination sanguine est décrite.' },
      { text: 'Elle n\'a jamais de conséquence létale', correct: false, correction: 'Non : le cours souligne au contraire un risque de décès.' },
      { text: 'Elle est toujours limitée au portage vaginal de la mère', correct: false, correction: 'Non : la question porte sur l\'infection invasive de l\'enfant.' },
    ],
    explanation: 'Même si seule une faible part des nouveau-nés colonisés s\'infecte, l\'infection peut être invasive, mortelle ou laisser des séquelles neurologiques. (Cours, p. 4)'
  },
  {
    id: 39,
    type: 'QCM',
    question: 'Quel profil de sensibilité de Streptococcus agalactiae est explicitement rappelé dans le cours ?',
    options: [
      { text: 'Une résistance universelle à tous les antibiotiques', correct: false, correction: 'Non : le cours mentionne au contraire une classe active.' },
      { text: 'Une multirésistance identique à celle de toutes les BHR', correct: false, correction: 'Non : le streptocoque B n\'est pas présenté comme une BHR.' },
      { text: 'Une sensibilité exclusivement à la rifampicine', correct: false, correction: 'Non : la rifampicine est citée pour l\'exemple de chimioprophylaxie méningococcique.' },
      { text: 'Une résistance intrinsèque à toutes les bêta-lactamines', correct: false, correction: 'Non : c\'est l\'inverse de l\'information donnée.' },
      { text: 'Une sensibilité aux bêta-lactamines', correct: true, correction: 'Oui : le cours mentionne cette sensibilité.' },
    ],
    explanation: 'Le support rappelle que S. agalactiae, streptocoque du groupe B, est sensible aux bêta-lactamines. (Cours, p. 4)'
  },
  {
    id: 40,
    type: 'QRM',
    question: 'Une mère asymptomatique est porteuse vaginale de streptocoque B et accouche par voie basse. Quelles interprétations de la situation sont correctes ?',
    options: [
      { text: 'Tous les nouveau-nés exposés développent une infection dans la semaine', correct: false, correction: 'Non : ni la transmission, ni la progression vers l\'infection ne sont systématiques.' },
      { text: 'Le portage maternel peut exposer le nouveau-né pendant l\'accouchement', correct: true, correction: 'Oui : la transmission materno-fœtale décrite survient lors du passage par voie basse.' },
      { text: 'Si une infection invasive survient, elle peut être une bactériémie ou une méningite', correct: true, correction: 'Oui : ces formes sont citées parmi les complications.' },
      { text: 'La mère est forcément atteinte de méningite', correct: false, correction: 'Non : un portage vaginal asymptomatique n\'est pas une méningite maternelle.' },
      { text: 'Un nouveau-né colonisé peut rester sans infection invasive', correct: true, correction: 'Oui : la colonisation progresse rarement vers une infection.' },
    ],
    explanation: 'Le cours distingue le portage maternel asymptomatique, la colonisation possible du nouveau-né et la maladie invasive, qui ne touche qu\'une minorité des enfants colonisés. (Cours, p. 4)'
  },
  {
    id: 41,
    type: 'QCM',
    question: 'Dans le cours, à quoi correspond l\'ordre de grandeur de 10 à 25 % concernant le streptocoque du groupe B (SGB) ?',
    options: [
      { text: 'À la fréquence approximative du portage vaginal maternel, variable selon les populations.', correct: true, correction: 'Le cours donne 10 à 25 % pour le portage vaginal maternel du SGB selon les zones et les populations.' },
      { text: 'À la proportion de nouveau-nés colonisés qui développent une infection.', correct: false, correction: 'Cette proportion est estimée à 1 à 2 % des nouveau-nés colonisés.' },
      { text: 'À la part des mères porteuses devenant symptomatiques pendant la grossesse.', correct: false, correction: 'Il s\'agit d\'un portage, qui peut être asymptomatique, et non d\'une fréquence d\'infection maternelle.' },
      { text: 'Au risque de méningite chez chaque enfant né d\'une mère porteuse.', correct: false, correction: 'Le cours ne donne pas un tel risque de méningite ; seule une minorité des enfants colonisés développe une infection.' },
      { text: 'À la proportion des infections néonatales qui sont tardives.', correct: false, correction: 'Le cours n\'attribue pas cette valeur à la répartition entre formes précoces et tardives.' },
    ],
    explanation: 'Il faut distinguer la fréquence du portage chez la mère, la colonisation du nouveau-né et l\'infection chez un nouveau-né déjà colonisé : ces pourcentages n\'ont pas le même dénominateur. (Cours, p. 4)'
  },
  {
    id: 42,
    type: 'QRM',
    question: 'Comment interpréter correctement les trois pourcentages présentés pour la transmission materno-néonatale du SGB ?',
    options: [
      { text: 'Les 1 à 2 % concernent le risque d\'infection parmi les nouveau-nés colonisés.', correct: true, correction: 'Oui : l\'infection est une étape ultérieure à la colonisation.' },
      { text: 'Les 1 à 2 % concernent tous les nouveau-nés, qu\'ils aient été colonisés ou non.', correct: false, correction: 'Le dénominateur est celui des nouveau-nés colonisés, et non l\'ensemble des naissances.' },
      { text: 'Les 10 à 25 % décrivent la part des nouveau-nés qui ont une bactériémie.', correct: false, correction: 'Ils décrivent le portage vaginal maternel dans le cours.' },
      { text: 'Les 50 à 70 % concernent la colonisation du nouveau-né quand la mère est porteuse.', correct: true, correction: 'Oui : c\'est l\'étape de transmission/colonisation à partir d\'une mère porteuse.' },
      { text: 'Ces valeurs décrivent des étapes successives et ne doivent pas être additionnées.', correct: true, correction: 'Oui : les additionner confondrait fréquence du portage, transmission et passage à l\'infection.' },
    ],
    explanation: 'La cascade du cours est : portage maternel, puis colonisation chez une partie des nouveau-nés exposés, puis infection chez une petite fraction de ceux qui sont colonisés. (Cours, p. 4)'
  },
  {
    id: 43,
    type: 'QCM',
    question: 'Dans l\'illustration historique de 2012 fondée sur environ 800 000 naissances, quel effectif de mères porteuses vaginales de SGB est estimé ?',
    options: [
      { text: 'Exactement 800 000 mères porteuses.', correct: false, correction: 'Non : 800 000 est l\'ordre de grandeur de toutes les naissances, pas du portage maternel.' },
      { text: 'Environ 120 000 à 200 000 mères.', correct: true, correction: 'Oui : cet effectif correspond à 15–25 % des naissances de l\'exemple de 2012.' },
      { text: 'Environ 5 à 14 mères.', correct: false, correction: 'Non : il s\'agit d\'un effectif sans rapport avec la cohorte nationale de 2012.' },
      { text: 'Environ 600 à 2 800 mères.', correct: false, correction: 'Non : le cours utilise cet intervalle pour les nouveau-nés infectés dans l\'exemple historique.' },
      { text: 'Environ 60 000 à 140 000 mères.', correct: false, correction: 'Non : cet intervalle correspond aux nouveau-nés colonisés de l\'illustration.' },
    ],
    explanation: 'Le schéma daté de 2012 applique une fréquence maternelle d\'environ 15–25 % à quelque 800 000 naissances, soit 120 000 à 200 000 mères porteuses ; ce n\'est pas un effectif actuel. (Cours, p. 6)'
  },
  {
    id: 44,
    type: 'QRM',
    question: 'Une mère porte le SGB au niveau vaginal et son accouchement par voie basse se déroule sans complication apparente. Quelles propositions restent justes ?',
    options: [
      { text: 'L\'absence de fièvre maternelle exclut le portage vaginal du SGB.', correct: false, correction: 'Un portage bactérien peut être asymptomatique.' },
      { text: 'Le nouveau-né peut être colonisé malgré le déroulement apparemment normal de l\'accouchement.', correct: true, correction: 'Le cours précise que la transmission peut survenir même lorsque l\'accouchement se passe bien.' },
      { text: 'La colonisation du nouveau-né n\'implique pas à elle seule une infection invasive.', correct: true, correction: 'Seule une minorité des enfants colonisés développera une infection.' },
      { text: 'Tout nouveau-né colonisé présente immédiatement une méningite.', correct: false, correction: 'La méningite est une complication possible de l\'infection, non une conséquence systématique de la colonisation.' },
      { text: 'Le passage du nouveau-né au contact des voies génitales maternelles constitue une occasion de transmission.', correct: true, correction: 'C\'est le mécanisme de transmission décrit pour l\'accouchement par voie basse.' },
    ],
    explanation: 'Un accouchement sans incident apparent n\'élimine ni le contact avec la bactérie ni la possibilité de colonisation ; l\'infection est un événement ultérieur, moins fréquent. (Cours, p. 4)'
  },
  {
    id: 45,
    type: 'QCM',
    question: 'Dans la cascade chiffrée de 2012 utilisée par le cours, quel effectif correspond aux nouveau-nés qui ont finalement développé une infection à SGB ?',
    options: [
      { text: 'Environ 120 000 à 200 000 nouveau-nés.', correct: false, correction: 'Non : cet intervalle correspond aux mères porteuses dans le schéma.' },
      { text: 'Environ 60 000 à 140 000 nouveau-nés infectés.', correct: false, correction: 'Non : cet intervalle concerne la colonisation, non l\'infection.' },
      { text: 'Environ 600 à 2 800 nouveau-nés.', correct: true, correction: 'Oui : c\'est l\'effectif final d\'infections dans cette illustration historique.' },
      { text: 'Aucun nouveau-né, puisque la colonisation ne peut pas progresser.', correct: false, correction: 'Non : une minorité des enfants colonisés a développé une infection dans l\'estimation.' },
      { text: 'Environ 800 000 nouveau-nés.', correct: false, correction: 'Non : c\'est l\'ordre de grandeur du total des naissances retenu en 2012.' },
    ],
    explanation: 'Dans l\'exemple historique du cours, la chaîne 800 000 naissances → 120 000–200 000 mères porteuses → 60 000–140 000 enfants colonisés aboutit à environ 600–2 800 infections. (Cours, p. 6)'
  },
  {
    id: 46,
    type: 'QRM',
    question: 'Dans l\'argument économique présenté pour justifier la prévention des infections néonatales à SGB, quelles propositions sont fidèles au cours ?',
    options: [
      { text: 'Les séquelles neurologiques peuvent entraîner des besoins de prise en charge à long terme.', correct: true, correction: 'Oui : l\'exemple du handicap durable sert à illustrer le poids des complications.' },
      { text: 'La fréquence des naissances rend pertinent un bénéfice de prévention à l\'échelle de la population.', correct: true, correction: 'Oui : un risque individuel limité peut représenter de nombreux cas évitables dans une grande cohorte.' },
      { text: 'Le cours affirme que le dépistage n\'a aucun coût financier.', correct: false, correction: 'Non : il compare les coûts, il ne prétend pas que la prévention est gratuite.' },
      { text: 'Le dépistage et l\'antibioprophylaxie ont un coût, mais le cours les juge moins coûteux que les conséquences de certaines infections graves.', correct: true, correction: 'Oui : la comparaison économique est explicite dans le cours.' },
      { text: 'Le coût d\'une infection grave est limité à la journée de naissance, sans conséquence ultérieure.', correct: false, correction: 'Non : les conséquences à long terme font partie de l\'argumentaire.' },
    ],
    explanation: 'Le cours met en balance le coût du dépistage et de la prophylaxie avec celui des infections et de leurs séquelles neurologiques potentiellement durables. (Cours, p. 6)'
  },
  {
    id: 47,
    type: 'QCM',
    question: 'Dans le schéma de transmission materno-fœtale du cours, quel élément est placé au niveau du passage possible de la colonisation néonatale à l\'infection ?',
    options: [
      { text: 'Un prélèvement nasal maternel positif.', correct: false, correction: 'Non : le schéma part du portage vaginal, pas d\'un prélèvement nasal.' },
      { text: 'Une colonisation nécessairement permanente chez la mère.', correct: false, correction: 'Non : le cours précise qu\'un portage maternel peut être intermittent.' },
      { text: 'Des « souches virulentes ».', correct: true, correction: 'Oui : le schéma situe cette étiquette près de l\'étape d\'infection néonatale.' },
      { text: 'La disparition complète du portage digestif.', correct: false, correction: 'Non : ce n\'est pas l\'élément figuré à la transition vers l\'infection.' },
      { text: 'Une bactériurie maternelle obligatoire.', correct: false, correction: 'Non : cette condition ne figure pas à cette étape du schéma.' },
    ],
    explanation: 'Le schéma distingue le portage et la colonisation d\'une éventuelle infection néonatale, et place l\'étiquette « souches virulentes » près de cette dernière étape. (Cours, p. 5)'
  },
  {
    id: 48,
    type: 'QRM',
    question: 'Que montre précisément le schéma physiopathologique du cours, sans en faire un mécanisme obligatoire pour chaque enfant ?',
    options: [
      { text: 'La figure indique qu\'une colonisation digestive exclut toute méningite.', correct: false, correction: 'Non : la branche digestive rejoint aussi le sang puis la possibilité de méningite.' },
      { text: 'La figure prouve que toute infection précoce est exclusivement pulmonaire.', correct: false, correction: 'Non : il s\'agit d\'un modèle illustratif, non d\'une exclusivité démontrée pour chaque cas.' },
      { text: 'La branche de colonisation pulmonaire est étiquetée « INN précoce ».', correct: true, correction: 'Oui : cette mention accompagne la branche pulmonaire dans le schéma.' },
      { text: 'Les deux voies peuvent rejoindre le sang avant une atteinte méningée.', correct: true, correction: 'Oui : les flèches convergent vers la bactériémie puis vers la méningite.' },
      { text: 'La branche de colonisation digestive est étiquetée « INN tardive ».', correct: true, correction: 'Oui : le schéma place cette mention près de la voie digestive.' },
    ],
    explanation: 'La figure associe schématiquement une voie pulmonaire aux formes précoces et une voie digestive aux formes tardives, avec possible dissémination sanguine ; elle ne fixe pas une règle absolue pour chaque patient. (Cours, p. 5)'
  },
  {
    id: 49,
    type: 'QCM',
    question: 'Dans l\'exemple d\'incidence daté de 2012, à quel groupe s\'applique la mortalité de 15–20 % citée par le cours ?',
    options: [
      { text: 'À tous les nouveau-nés simplement colonisés, même asymptomatiques.', correct: false, correction: 'Non : le cours rattache la mortalité aux infections déclarées.' },
      { text: 'Aux nouveau-nés recevant le dépistage, quel qu\'en soit le résultat.', correct: false, correction: 'Non : le dépistage n\'est pas le dénominateur de cette proportion.' },
      { text: 'Aux nouveau-nés ayant développé une infection à SGB dans cette illustration.', correct: true, correction: 'Oui : le texte parle d\'une mortalité parmi les nouveau-nés infectés, et non parmi tous les enfants colonisés.' },
      { text: 'À toutes les mères porteuses vaginales de SGB.', correct: false, correction: 'Non : le chiffre concerne les enfants infectés, pas les mères porteuses.' },
      { text: 'À l\'ensemble des 800 000 nouveau-nés de la cohorte.', correct: false, correction: 'Non : ce serait un tout autre dénominateur que celui indiqué.' },
    ],
    explanation: 'Le 15–20 % est présenté parmi les cas infectés de l\'exemple historique de 2012 ; il ne doit pas être repris comme une estimation actuelle ou comme un risque de décès pour tout nouveau-né colonisé. (Cours, p. 6)'
  },
  {
    id: 50,
    type: 'QRM',
    question: 'Sur le graphique français historique du cours (1997–2006), quelles lectures sont justifiées ?',
    options: [
      { text: 'L\'incidence des infections précoces passe approximativement de 0,69 à 0,23 pour 1 000 naissances vivantes entre 1997 et 2006.', correct: true, correction: 'Oui : ce sont les valeurs annotées aux extrémités de la courbe des formes précoces.' },
      { text: 'L\'incidence des formes tardives reste d\'un ordre de grandeur voisin, environ 0,12 en 1997 et 0,13 en 2006 pour 1 000 naissances vivantes.', correct: true, correction: 'Oui : la courbe tardive ne montre pas la même forte chute que la courbe précoce.' },
      { text: 'Les deux courbes prouvent le mécanisme exact de transmission de chaque cas individuel.', correct: false, correction: 'Non : des tendances d\'incidence ne permettent pas d\'identifier la voie de contamination de chaque enfant.' },
      { text: 'Les formes tardives tombent à zéro dès la publication des recommandations.', correct: false, correction: 'Non : la courbe des formes tardives demeure au-dessus de zéro.' },
      { text: 'L\'axe vertical rapporte une incidence pour 1 000 naissances vivantes.', correct: true, correction: 'Oui : l\'unité est précisée sur le graphique.' },
    ],
    explanation: 'Le graphique français daté montre une forte baisse des formes précoces, tandis que les formes tardives restent proches de leur ordre de grandeur initial ; les valeurs sont des incidences, non des nombres absolus de cas. (Cours, p. 8)'
  },
  {
    id: 51,
    type: 'QCM',
    question: 'En combinant les estimations du cours, quel ordre de grandeur obtient-on pour le risque d\'infection chez le nouveau-né d\'une mère porteuse, si l\'on ne retient que les deux étapes colonisation puis infection ?',
    options: [
      { text: 'Environ 0,5 à 1,4 %, produit approximatif des deux probabilités conditionnelles.', correct: true, correction: '50 % × 1 % = 0,5 % et 70 % × 2 % = 1,4 % ; il s\'agit d\'une estimation simplifiée.' },
      { text: '50 à 70 %, car toute colonisation équivaut à une infection.', correct: false, correction: 'Seule une minorité des nouveau-nés colonisés développe ensuite une infection.' },
      { text: '100 %, puisque la mère et le nouveau-né sont en contact pendant l\'accouchement.', correct: false, correction: 'Le contact n\'entraîne pas automatiquement une colonisation, encore moins une infection.' },
      { text: '10 à 25 %, soit directement la fréquence du portage vaginal.', correct: false, correction: 'Ce pourcentage décrit les mères porteuses, pas le risque d\'infection chez l\'enfant d\'une mère porteuse.' },
      { text: '75 %, correspondant à l\'efficacité attendue du dépistage.', correct: false, correction: 'Ce pourcentage n\'est pas le risque naturel d\'infection chez l\'enfant d\'une mère porteuse.' },
    ],
    explanation: 'Il s\'agit d\'une simple multiplication d\'ordres de grandeur conditionnels, et non d\'une prédiction individuelle précise ; elle évite de confondre colonisation et infection. (Cours, p. 4)'
  },
  {
    id: 52,
    type: 'QRM',
    question: 'On considère, à titre d\'exercice théorique, 1 000 naissances uniques issues de mères porteuses de SGB et on applique les fourchettes du cours. Quelles estimations sont cohérentes ?',
    options: [
      { text: 'Au moins 500 infections sont certaines puisque 500 colonisations sont possibles.', correct: false, correction: 'La colonisation ne vaut pas infection et ces chiffres sont des estimations.' },
      { text: 'Le calcul suit deux étapes : estimer la colonisation, puis appliquer à ce sous-groupe le risque d\'infection.', correct: true, correction: 'C\'est la structure conditionnelle des pourcentages du cours.' },
      { text: 'Les 1 à 2 % d\'infections doivent être appliqués d\'emblée aux 1 000 nouveau-nés exposés sans tenir compte de la colonisation.', correct: false, correction: 'Dans la cascade présentée, les 1 à 2 % s\'appliquent aux nouveau-nés déjà colonisés.' },
      { text: 'Environ 500 à 700 nouveau-nés pourraient être colonisés.', correct: true, correction: 'Cela correspond à 50 à 70 % des 1 000 enfants exposés.' },
      { text: 'Environ 5 à 14 infections pourraient survenir parmi ces nouveau-nés, en combinant les bornes des estimations.', correct: true, correction: '1 % de 500 vaut 5 et 2 % de 700 vaut 14 ; ce sont des bornes illustratives, non une prévision clinique.' },
    ],
    explanation: 'Ces fourchettes illustrent la chaîne statistique décrite et ne garantissent pas un nombre d\'événements dans une maternité donnée. (Cours, p. 4)'
  },
  {
    id: 53,
    type: 'QCM',
    question: 'Pourquoi une infection peu fréquente parmi les nouveau-nés colonisés peut-elle malgré tout justifier un dépistage maternel à grande échelle ?',
    options: [
      { text: 'Parce que toute femme porteuse présente nécessairement une infection invasive.', correct: false, correction: 'Le portage maternel peut être asymptomatique et n\'est pas une infection invasive.' },
      { text: 'Parce que le portage vaginal n\'existe que chez les femmes symptomatiques.', correct: false, correction: 'Il peut être asymptomatique, d\'où l\'intérêt du dépistage.' },
      { text: 'Parce que le portage maternel est fréquent, que la transmission est possible et que l\'infection peut être grave.', correct: true, correction: 'La combinaison fréquence d\'exposition, transmission et conséquences graves soutient la stratégie préventive.' },
      { text: 'Parce que le prélèvement vaginal permet de traiter définitivement tout portage digestif.', correct: false, correction: 'Le dépistage identifie un risque ; il n\'éradique pas à lui seul le portage.' },
      { text: 'Parce que tous les nouveau-nés exposés ont une méningite.', correct: false, correction: 'La transmission puis l\'infection ne concernent qu\'une partie des enfants exposés.' },
    ],
    explanation: 'La justification repose sur un risque collectif significatif et sur la gravité des infections possibles, même si la progression individuelle de colonisation à infection reste rare. (Cours, p. 6)'
  },
  {
    id: 54,
    type: 'QRM',
    question: 'Quels arguments le cours avance-t-il en faveur du dépistage anténatal du SGB ?',
    options: [
      { text: 'Une réduction importante des infections est rapportée après mise en œuvre des recommandations.', correct: true, correction: 'Le cours mentionne une baisse marquée des infections avec cette stratégie.' },
      { text: 'Le prélèvement est présenté comme réalisable largement, fiable et peu traumatisant.', correct: true, correction: 'Ces qualités pratiques font partie des arguments explicites du cours.' },
      { text: 'Le coût de la stratégie préventive est présenté comme supérieur aux conséquences d\'une infection grave.', correct: false, correction: 'Le cours soutient l\'inverse : la prévention est économiquement plus favorable que certaines complications à long terme.' },
      { text: 'Le dépistage n\'aurait aucun intérêt tant que toutes les femmes porteuses ne sont pas symptomatiques.', correct: false, correction: 'Le dépistage sert justement à repérer un portage asymptomatique susceptible d\'exposer le nouveau-né.' },
      { text: 'Le portage maternel est assez fréquent pour rendre le risque pertinent à l\'échelle de la population.', correct: true, correction: 'Le cours cite une prévalence maternelle de l\'ordre de 15 à 25 % dans ce passage.' },
    ],
    explanation: 'Un dépistage utile combine fréquence du portage, risque transmissible, faisabilité du test, efficacité de la prévention et coût des complications évitées. (Cours, p. 6)'
  },
  {
    id: 55,
    type: 'QCM',
    question: 'Quel effet chiffré le cours attribue-t-il à la stratégie de dépistage suivie de l\'antibioprophylaxie indiquée, en le présentant comme un ordre de grandeur ?',
    options: [
      { text: 'Une augmentation de la colonisation de 50 à 70 %.', correct: false, correction: 'Les 50 à 70 % décrivent la transmission/colonisation sans être un effet de la prévention.' },
      { text: 'Une diminution d\'environ 75 % des infections selon l\'estimation rapportée dans le cours.', correct: true, correction: 'Le cours cite cet ordre de grandeur pour l\'efficacité des mesures de prévention ; ce n\'est pas une garantie individuelle.' },
      { text: 'Aucun changement mesurable de l\'incidence des infections précoces.', correct: false, correction: 'Le cours et les courbes de suivi rapportent au contraire une baisse nette des formes précoces.' },
      { text: 'Une disparition absolue de toutes les infections néonatales précoces et tardives.', correct: false, correction: 'La prévention réduit fortement le risque mais ne l\'annule pas ; l\'effet sur les formes tardives est moindre.' },
      { text: 'Une réduction d\'environ 1 à 2 % seulement.', correct: false, correction: 'Le 1 à 2 % concerne le passage de la colonisation à l\'infection, non l\'efficacité de la prévention.' },
    ],
    explanation: 'Le cours cite environ 75 % de diminution dans son argumentaire populationnel de dépistage ; l\'exemple de risque 1/200 contre 1/4000 à la page suivante utilise d\'autres chiffres et ne doit pas être traité comme une estimation identique. (Cours, p. 6-7)'
  },
  {
    id: 56,
    type: 'QRM',
    question: 'Comment utiliser correctement les effectifs de naissances et d\'infections cités par le cours pour illustrer l\'incidence du SGB ?',
    options: [
      { text: 'Les effectifs démontrent qu\'une infection invasive est impossible après une colonisation.', correct: false, correction: 'L\'exemple inclut au contraire des cas d\'infection parmi les nouveau-nés colonisés.' },
      { text: 'Même si seule une minorité des enfants colonisés est infectée, le grand nombre de naissances peut conduire à un nombre important de cas.', correct: true, correction: 'C\'est précisément le sens de l\'exemple d\'incidence donné.' },
      { text: 'Les quelque 800 000 naissances citées représentent sans correction le total annuel actuel en France.', correct: false, correction: 'Le cours rattache ce chiffre à 2012 et précise que les effectifs ont changé depuis.' },
      { text: 'Il faut éviter d\'interpréter ces effectifs historiques comme une prévision annuelle actuelle.', correct: true, correction: 'Le cours avertit que les chiffres de naissances ont changé et demande surtout d\'en retenir l\'ordre de grandeur.' },
      { text: 'Ces chiffres sont présentés à partir d\'un exemple historique de 2012.', correct: true, correction: 'Oui : le cours date explicitement l\'illustration de 2012.' },
    ],
    explanation: 'Les nombres absolus servent ici à illustrer le poids possible d\'un faible risque appliqué à de nombreuses naissances ; ils sont datés et ne doivent pas être présentés comme une incidence actuelle. (Cours, p. 6)'
  },
  {
    id: 57,
    type: 'QCM',
    question: 'Après les recommandations de prévention du SGB, sur quelle forme d\'infection néonatale le cours décrit-il la diminution la plus nette ?',
    options: [
      { text: 'Les infections tardives uniquement.', correct: false, correction: 'La diminution la plus marquée concerne les infections précoces.' },
      { text: 'Les infections apparaissant après l\'âge adulte.', correct: false, correction: 'Le sujet est ici l\'infection néonatale.' },
      { text: 'Aucune forme, l\'incidence restant inchangée.', correct: false, correction: 'Les courbes montrent une diminution des infections précoces.' },
      { text: 'Toutes les formes exactement dans la même proportion.', correct: false, correction: 'Le cours distingue l\'impact marqué sur les formes précoces de l\'impact moindre sur les tardives.' },
      { text: 'Les infections précoces.', correct: true, correction: 'C\'est l\'effet principal visible sur les courbes présentées dans le cours.' },
    ],
    explanation: 'La prévention ciblant la période de l\'accouchement réduit surtout les infections précoces ; la courbe des formes tardives réagit beaucoup moins dans le cours. (Cours, p. 8)'
  },
  {
    id: 58,
    type: 'QRM',
    question: 'Quelle lecture des courbes d\'impact des recommandations présentées dans le cours est justifiée ?',
    options: [
      { text: 'Le moindre effet sur les formes tardives est compatible avec d\'autres modalités de contamination.', correct: true, correction: 'Le cours propose cette explication comme hypothèse, sans en faire une preuve tirée des courbes.' },
      { text: 'Elles illustrent des données provenant des États-Unis et de France.', correct: true, correction: 'Le cours mentionne explicitement ces deux pays.' },
      { text: 'Elles démontrent que toutes les infections tardives ont été supprimées.', correct: false, correction: 'Le cours dit que la stratégie fonctionne moins sur les infections tardives, pas qu\'elles ont disparu.' },
      { text: 'Les courbes prouvent à elles seules le mécanisme exact de chaque infection tardive.', correct: false, correction: 'Une différence d\'évolution ne démontre pas le mécanisme individuel de contamination.' },
      { text: 'La baisse des infections néonatales précoces est particulièrement marquée.', correct: true, correction: 'C\'est le message principal que le cours tire de ces courbes.' },
    ],
    explanation: 'Les données illustrent surtout la réduction des formes précoces ; l\'explication des formes tardives est suggérée, et non démontrée par les seules courbes. (Cours, p. 8)'
  },
  {
    id: 59,
    type: 'QCM',
    question: 'Pourquoi une mère qui ne présente aucun symptôme infectieux peut-elle néanmoins être concernée par la prévention néonatale du SGB ?',
    options: [
      { text: 'Parce qu\'un portage vaginal asymptomatique peut exposer l\'enfant pendant l\'accouchement.', correct: true, correction: 'Le risque pour le nouveau-né peut exister sans maladie maternelle apparente.' },
      { text: 'Parce que le dépistage recherche uniquement une infection maternelle du sang.', correct: false, correction: 'Le dépistage recherche ici un portage bactérien vaginal.' },
      { text: 'Parce qu\'un résultat négatif prouve qu\'elle développera plus tard une méningite.', correct: false, correction: 'Un résultat négatif ne signifie pas cela.' },
      { text: 'Parce que toute colonisation vaginale impose une césarienne.', correct: false, correction: 'Le cours ne présente pas la césarienne systématique comme stratégie de prévention.' },
      { text: 'Parce qu\'une infection néonatale ne peut survenir qu\'après une maladie maternelle fébrile.', correct: false, correction: 'Le portage maternel peut être asymptomatique.' },
    ],
    explanation: 'L\'intérêt du dépistage vient du décalage entre le portage maternel souvent silencieux et le risque de transmission puis d\'infection grave chez l\'enfant. (Cours, p. 4)'
  },
  {
    id: 60,
    type: 'QRM',
    question: 'Dans une discussion sur le risque néonatal à SGB, quelles conclusions respectent la chaîne d\'événements et l\'effet attendu de la prévention décrits dans le cours ?',
    options: [
      { text: 'Le dépistage et l\'antibioprophylaxie indiquée visent à éviter des infections potentiellement très graves.', correct: true, correction: 'C\'est la justification clinique de la stratégie préventive.' },
      { text: 'Un enfant colonisé n\'est pas nécessairement infecté.', correct: true, correction: 'Le cours estime qu\'une faible fraction des nouveau-nés colonisés développera une infection.' },
      { text: 'La baisse des formes précoces prouve que les infections tardives ont disparu.', correct: false, correction: 'Les formes tardives diminuent nettement moins dans le cours et ne sont pas considérées comme supprimées.' },
      { text: 'L\'évaluation du bénéfice tient compte à la fois du nombre d\'expositions et de la gravité des cas évitables.', correct: true, correction: 'Le cours relie fréquence du portage, transmission, incidence et conséquences cliniques.' },
      { text: 'La fréquence du portage maternel ne doit pas être confondue avec celle des infections invasives néonatales.', correct: true, correction: 'Entre les deux interviennent la transmission puis l\'éventuelle progression vers l\'infection.' },
    ],
    explanation: 'Le raisonnement préventif combine des probabilités conditionnelles avec la gravité des infections, et l\'effet observé concerne surtout les formes précoces. (Cours, p. 4-8)'
  },
  {
    id: 61,
    type: 'QCM',
    question: 'Chez une femme enceinte sans indication de prophylaxie déjà établie, à quelle période le ronéo situe-t-il le dépistage vaginal du SGB ?',
    options: [
      { text: 'Seulement si la femme présente de la fièvre', correct: false, correction: 'Non. Il recherche le portage chez une femme généralement asymptomatique.' },
      { text: 'Au premier mois de grossesse uniquement', correct: false, correction: 'Non. Un portage pouvant être intermittent, un test aussi précoce ne décrit pas le dépistage de fin de grossesse.' },
      { text: 'Tous les mois de la grossesse sans exception', correct: false, correction: 'Non. Le cours prévoit un dépistage en fin de grossesse.' },
      { text: 'Entre 34 et 38 semaines d’aménorrhée selon le support', correct: true, correction: 'Oui. Cette fenêtre de 34 à 38 SA figure dans le cours et dans les recommandations françaises de référence citées par celui-ci.' },
      { text: 'Uniquement dans les 24 heures après l’accouchement', correct: false, correction: 'Non. Le dépistage vise à guider la conduite pendant le travail.' },
    ],
    explanation: 'Le cours situe le prélèvement de dépistage en fin de grossesse, entre 34 et 38 SA, pour orienter l’antibioprophylaxie per-partum. (Cours, p. 7)'
  },
  {
    id: 62,
    type: 'QRM',
    question: 'Quelles situations du cours rendent inutile de répéter le dépistage systématique du SGB en fin de grossesse, parce que l’indication de prophylaxie per-partum est déjà connue ?',
    options: [
      { text: 'La présence d’un résultat négatif d’ECBU pour toute bactérie', correct: false, correction: 'Non. Un ECBU négatif ne remplace pas le prélèvement vaginal de dépistage.' },
      { text: 'Une bactériurie à SGB documentée pendant la grossesse en cours', correct: true, correction: 'Oui. La présence de SGB dans les urines maternelles oriente déjà la prévention à l’accouchement.' },
      { text: 'Un antécédent d’enfant ayant présenté une infection néonatale à SGB', correct: true, correction: 'Oui. Cet antécédent justifie la prophylaxie per-partum sans attendre un nouveau résultat.' },
      { text: 'Un portage vaginal de SGB déjà documenté pendant la grossesse en cours', correct: true, correction: 'Oui. Le résultat positif a déjà été établi.' },
      { text: 'Le simple fait que la grossesse soit sans symptôme', correct: false, correction: 'Non. Le dépistage vise précisément le portage asymptomatique.' },
    ],
    explanation: 'Le support énumère trois situations où le risque ou le portage est déjà établi; la conduite per-partum ne dépend alors pas d’un nouveau dépistage de routine. (Cours, p. 7)'
  },
  {
    id: 63,
    type: 'QCM',
    question: 'À 35 SA, une femme rappelle un prélèvement vaginal positif au SGB lors d’une grossesse précédente, sans infection néonatale. Aucun résultat n’est encore disponible pour la grossesse actuelle. Quelle démarche correspond le mieux au cours ?',
    options: [
      { text: 'Considérer que l’enfant à naître est déjà infecté.', correct: false, correction: 'Non. Même un portage actuel ne prouverait pas une infection néonatale.' },
      { text: 'Réaliser le dépistage de fin de grossesse pour établir son statut de portage actuel.', correct: true, correction: 'Oui. Le portage peut être intermittent et un résultat positif de grossesse antérieure ne figure pas parmi les exceptions au dépistage de la grossesse actuelle.' },
      { text: 'Donner une antibiothérapie systémique dès le premier trimestre pour éradiquer définitivement le SGB.', correct: false, correction: 'Non. Le traitement du simple portage à distance du travail ne remplace pas la stratégie péripartum.' },
      { text: 'Conclure que le portage persiste nécessairement et supprimer toute recherche actuelle.', correct: false, correction: 'Non. Un portage ancien ne démontre pas le portage de la grossesse actuelle.' },
      { text: 'Remplacer le prélèvement vaginal par un ECBU négatif datant de la grossesse précédente.', correct: false, correction: 'Non. Un ancien examen urinaire négatif ne renseigne pas sur le portage vaginal actuel.' },
    ],
    explanation: 'Un antécédent de portage vaginal simple n’est pas équivalent à un antécédent d’enfant infecté : si aucune indication actuelle de prophylaxie n’est déjà connue, le dépistage en fin de grossesse reste pertinent. (Cours, p. 4 et 7)'
  },
  {
    id: 64,
    type: 'QRM',
    question: 'Une bactériurie à SGB est découverte pendant la grossesse. Quelles décisions doivent être distinguées entre le moment de sa découverte et l’accouchement ?',
    options: [
      { text: 'Considérer qu’une antibiothérapie urinaire antérieure garantit l’éradication du portage jusqu’à la naissance.', correct: false, correction: 'Non. Une prise en charge antérieure ne garantit pas l’absence de portage au travail et ne supprime pas l’indication per-partum.' },
      { text: 'Conserver l’indication de prophylaxie anti-SGB pendant le travail, même si une prise en charge urinaire a eu lieu plus tôt.', correct: true, correction: 'Oui. La bactériurie de la grossesse actuelle reste un marqueur de risque pris en compte à l’accouchement.' },
      { text: 'Déduire de la bactériurie maternelle que le nouveau-né présente déjà une méningite.', correct: false, correction: 'Non. La bactériurie concerne la mère et ne diagnostique aucune infection néonatale.' },
      { text: 'Évaluer la bactériurie maternelle dès sa découverte selon les règles de prise en charge urinaire pendant la grossesse.', correct: true, correction: 'Oui. La conduite à tenir pour la mère au moment de la bactériurie est distincte de la prévention néonatale pendant le travail.' },
      { text: 'Ne pas exiger un nouveau dépistage vaginal systématique pour décider de cette prophylaxie.', correct: true, correction: 'Oui. Le cours place la bactériurie à SGB parmi les situations où la prophylaxie est déjà indiquée.' },
    ],
    explanation: 'La bactériurie à SGB a une prise en charge maternelle propre et constitue aussi une indication de prophylaxie per-partum; ces deux temps ne se remplacent pas. (Cours, p. 7)'
  },
  {
    id: 65,
    type: 'QCM',
    question: 'Pourquoi le prélèvement vaginal de recherche de SGB est-il programmé vers la fin de la grossesse plutôt qu’une seule fois très tôt ?',
    options: [
      { text: 'Parce que le SGB n’existe jamais avant 34 SA', correct: false, correction: 'Non. Le portage peut être présent à différents moments de la vie.' },
      { text: 'Parce que le prélèvement est traumatisant au premier trimestre', correct: false, correction: 'Non. Le cours souligne au contraire que le test est simple et non traumatisant.' },
      { text: 'Parce qu’aucune bactérie n’est cultivable avant le travail', correct: false, correction: 'Non. La culture est techniquement possible; c’est la pertinence temporelle du résultat qui importe.' },
      { text: 'Parce que toutes les femmes deviennent porteuses juste avant l’accouchement', correct: false, correction: 'Non. Le portage n’est ni universel ni constant.' },
      { text: 'Parce que le portage peut varier dans le temps', correct: true, correction: 'Oui. Le support décrit des porteuses intermittentes, ce qui rend un résultat ancien moins représentatif de l’accouchement.' },
    ],
    explanation: 'Le portage vaginal de SGB peut être intermittent; un test proche du terme est plus pertinent pour la prévention au moment de l’accouchement. (Cours, p. 4)'
  },
  {
    id: 66,
    type: 'QRM',
    question: 'Quelles caractéristiques du prélèvement vaginal de dépistage sont décrites dans le ronéo ?',
    options: [
      { text: 'Il consiste exclusivement en une prise de sang maternelle.', correct: false, correction: 'Non. La recherche décrite est microbiologique sur prélèvement vaginal.' },
      { text: 'Il est réalisé par écouvillonnage.', correct: true, correction: 'Oui. Le cours décrit un écouvillonnage simple.' },
      { text: 'Il est destiné à rechercher un portage chez une femme parfois asymptomatique.', correct: true, correction: 'Oui. Le dépistage n’exige pas des symptômes maternels.' },
      { text: 'Il ne doit toucher que le col, sans paroi vaginale.', correct: false, correction: 'Non. Le prélèvement décrit inclut les parois de la cavité vaginale.' },
      { text: 'Il balaie la cavité vaginale, notamment la moitié inférieure jusqu’au vestibule.', correct: true, correction: 'Oui. Le support insiste sur cette zone de prélèvement.' },
    ],
    explanation: 'Le dépistage repose sur un écouvillonnage vaginal couvrant la cavité et sa moitié inférieure jusqu’au vestibule. (Cours, p. 7)'
  },
  {
    id: 67,
    type: 'QCM',
    question: 'Pourquoi la couleur d’une colonie ne suffit-elle pas, à elle seule, à définir une infection néonatale à SGB ?',
    options: [
      { text: 'Parce que le résultat de culture ne peut jamais guider la prévention', correct: false, correction: 'Non. Un portage identifié contribue précisément à décider la prophylaxie per-partum.' },
      { text: 'Parce que la culture vaginale montre toujours une bactériémie chez l’enfant', correct: false, correction: 'Non. Une culture de portage maternel ne démontre pas une bactériémie néonatale.' },
      { text: 'Parce que le milieu Granada empêche toute croissance de SGB', correct: false, correction: 'Non. Le cours cite au contraire des colonies orange sur ce milieu.' },
      { text: 'Parce que toute colonie blanche est nécessairement un méningocoque', correct: false, correction: 'Non. La couleur isolée ne permet pas une telle identification.' },
      { text: 'Parce qu’elle dépend notamment du milieu de culture et que le prélèvement recherche d’abord un portage maternel', correct: true, correction: 'Oui. L’aspect de culture aide le laboratoire, mais ne prouve pas une infection chez le nouveau-né.' },
    ],
    explanation: 'Le cours décrit des aspects de colonies variables selon les milieux, dont Granada; identifier un portage maternel n’équivaut pas à diagnostiquer une infection du bébé. (Cours, p. 7)'
  },
  {
    id: 68,
    type: 'QRM',
    question: 'Le cours présente deux exemples d’antibioprophylaxie : SGB maternel et exposition au méningocoque. Quelles comparaisons sont justes ?',
    options: [
      { text: 'Pour le SGB, la prophylaxie est administrée à la mère pendant le travail afin de réduire surtout l’infection néonatale précoce.', correct: true, correction: 'Oui. La prévention cible le risque de transmission et de maladie du nouveau-né autour de la naissance.' },
      { text: 'Tout contact social, même sans exposition pertinente, doit recevoir automatiquement une chimioprophylaxie antiméningococcique.', correct: false, correction: 'Non. La prophylaxie des contacts répond à une évaluation de l’exposition ; le seul fait d’avoir croisé le malade ne suffit pas.' },
      { text: 'Pour une infection invasive à méningocoque, une chimioprophylaxie peut viser les contacts répondant aux critères d’exposition.', correct: true, correction: 'Oui. Elle vise à interrompre le portage et la transmission dans l’entourage concerné.' },
      { text: 'La rifampicine citée pour les contacts du méningocoque est le premier choix décrit pour la femme porteuse de SGB pendant le travail.', correct: false, correction: 'Non. Le cours cite les bêta-lactamines intraveineuses pour le SGB et la rifampicine pour certains contacts du méningocoque.' },
      { text: 'Les deux situations illustrent une intervention préventive avant qu’une infection soit démontrée chez le sujet exposé.', correct: true, correction: 'Oui. L’antibioprophylaxie agit ici sur un risque, sans se confondre avec le traitement d’une infection documentée.' },
    ],
    explanation: 'Le même terme de prophylaxie recouvre deux stratégies distinctes : protéger le nouveau-né pendant le travail pour le SGB ou réduire le portage chez les contacts pertinents d’un cas de méningocoque. (Cours, p. 4 et 7)'
  },
  {
    id: 69,
    type: 'QCM',
    question: 'Quelle famille d’antibiotiques constitue le choix initial présenté dans le cours pour la prophylaxie intrapartum du SGB en l’absence de contre-indication ?',
    options: [
      { text: 'Les antituberculeux', correct: false, correction: 'Non. Ils ne correspondent pas à la prévention du SGB.' },
      { text: 'Les fluoroquinolones', correct: false, correction: 'Non. Le cours ne les propose pas en première intention.' },
      { text: 'Les bêta-lactamines, notamment pénicilline G ou amoxicilline', correct: true, correction: 'Oui. Ce sont les molécules décrites pour la perfusion maternelle.' },
      { text: 'La rifampicine seule', correct: false, correction: 'Non. La rifampicine est citée dans l’exemple de chimioprophylaxie des contacts du méningocoque.' },
      { text: 'Les aminosides seuls', correct: false, correction: 'Non. Ils ne sont pas la prophylaxie initiale décrite.' },
    ],
    explanation: 'Le SGB est sensible aux bêta-lactamines et le ronéo cite la pénicilline G ou l’amoxicilline intraveineuse. (Cours, p. 4 et 7)'
  },
  {
    id: 70,
    type: 'QRM',
    question: 'Pourquoi est-il important de ne pas différer l’antibioprophylaxie anti-SGB jusqu’à la naissance lorsque son indication est connue ?',
    options: [
      { text: 'La protection recherchée doit être présente avant ou pendant l’exposition du nouveau-né à l’accouchement.', correct: true, correction: 'Oui. Une administration après la naissance manquerait la période que cette prophylaxie vise à couvrir.' },
      { text: 'Une prise orale unique au moment du dépistage plusieurs semaines avant terme garantit la même protection.', correct: false, correction: 'Non. Le portage peut récidiver et la prévention efficace se fait pendant le travail.' },
      { text: 'Le cours demande de la débuter dès le début du travail.', correct: true, correction: 'Oui. L’administration pendant le travail est le moment préventif décrit.' },
      { text: 'Le protocole décrit une perfusion maternelle poursuivie durant le travail jusqu’à l’expulsion.', correct: true, correction: 'Oui. Le cours situe la prévention sur toute cette période, avec doses selon protocole.' },
      { text: 'Une première dose uniquement après l’expulsion est équivalente à une administration intrapartum.', correct: false, correction: 'Non. Après la naissance, l’exposition périnatale a déjà eu lieu.' },
    ],
    explanation: 'L’effet protecteur dépend d’une administration maternelle commencée tôt pendant le travail et poursuivie selon le schéma prévu ; les recommandations françaises soulignent aussi l’importance d’un début précoce. (Cours, p. 7)'
  },
  {
    id: 71,
    type: 'QCM',
    question: 'Quel traitement du portage vaginal asymptomatique du SGB est préconisé à distance de l’accouchement dans la stratégie de prévention décrite ?',
    options: [
      { text: 'Une antibioprophylaxie maternelle pendant le travail plutôt qu’un traitement systématique du simple portage vaginal bien avant le terme', correct: true, correction: 'Oui. Le portage asymptomatique guide la prophylaxie per-partum.' },
      { text: 'Une prophylaxie du partenaire uniquement', correct: false, correction: 'Non. Ce n’est pas la stratégie de prévention néonatale du cours.' },
      { text: 'Une antibiothérapie du nouveau-né avant sa naissance', correct: false, correction: 'Non. La prévention décrite passe par la mère au cours du travail.' },
      { text: 'Une cure antibiotique systématique dès tout résultat vaginal positif, sans autre mesure au travail', correct: false, correction: 'Non. Une cure lointaine n’assure pas la prévention au moment de l’accouchement.' },
      { text: 'Aucune prévention car le portage maternel n’expose jamais le nouveau-né', correct: false, correction: 'Non. La transmission peut se produire à l’accouchement.' },
    ],
    explanation: 'Pour un simple portage vaginal asymptomatique, la stratégie préventive est une antibioprophylaxie au moment du travail et non une éradication antibiotique systématique à distance. (Cours, p. 7)'
  },
  {
    id: 72,
    type: 'QRM',
    question: 'Une allergie déclarée à la pénicilline modifie le choix de la prophylaxie du SGB. Quelles précautions sont justifiées ?',
    options: [
      { text: 'Appliquer le protocole de maternité actualisé plutôt qu’une alternative unique pour toutes les allergies.', correct: true, correction: 'Oui. Le choix doit être adapté au risque allergique et aux données microbiologiques.' },
      { text: 'Ne pratiquer aucune prévention quelle que soit la situation.', correct: false, correction: 'Non. Des alternatives existent lorsque la prophylaxie est indiquée.' },
      { text: 'Donner de l’érythromycine à toute personne allergique sans vérifier la sensibilité.', correct: false, correction: 'Non. Le support signale les résistances aux macrolides; ce choix ne peut être automatique.' },
      { text: 'Préciser la nature et la gravité de la réaction allergique.', correct: true, correction: 'Oui. Toutes les réactions rapportées ne conduisent pas au même choix.' },
      { text: 'Tenir compte, si nécessaire, de la sensibilité de la souche aux antibiotiques alternatifs.', correct: true, correction: 'Oui. La résistance aux macrolides rend certains choix inadaptés.' },
    ],
    explanation: 'Le cours cite des alternatives en cas d’allergie, mais leur choix dépend de la sévérité de l’allergie et de la sensibilité de la souche; il faut suivre un protocole actualisé. (Cours, p. 7)'
  },
  {
    id: 73,
    type: 'QCM',
    question: 'Pourquoi une résistance du SGB aux macrolides compte-t-elle dans le choix d’une alternative à la pénicilline ?',
    options: [
      { text: 'Elle supprime l’indication de prévention intrapartum.', correct: false, correction: 'Non. L’indication reste liée au risque néonatal; c’est l’antibiotique qui doit être adapté.' },
      { text: 'Elle oblige à donner de la rifampicine à la mère.', correct: false, correction: 'Non. La rifampicine est présentée dans le cours pour les contacts d’infection méningococcique.' },
      { text: 'Elle prouve que le SGB est résistant à toutes les bêta-lactamines.', correct: false, correction: 'Non. Les mécanismes de résistance aux macrolides ne démontrent pas une résistance aux bêta-lactamines.' },
      { text: 'Elle rend potentiellement inefficace une option de la classe des macrolides.', correct: true, correction: 'Oui. Une souche résistante ne doit pas recevoir aveuglément un macrolide comme alternative.' },
      { text: 'Elle transforme le portage maternel en méningite néonatale certaine.', correct: false, correction: 'Non. La résistance n’équivaut pas à une transmission ni à une infection de l’enfant.' },
    ],
    explanation: 'La résistance aux macrolides limite les alternatives possibles en cas d’allergie; le choix repose sur la souche et le protocole clinique. (Cours, p. 7)'
  },
  {
    id: 74,
    type: 'QRM',
    question: 'Selon l’exemple chiffré du cours, quel risque d’infection néonatale est indiqué chez une mère porteuse de SGB sans puis avec prophylaxie pendant le travail ?',
    options: [
      { text: 'Ces valeurs prouvent que le même risque s’applique à toute grossesse en tout lieu et toute année.', correct: false, correction: 'Non. Ce sont des estimations historiques contextualisées, pas une prédiction individuelle universelle.' },
      { text: 'Les deux risques sont strictement identiques.', correct: false, correction: 'Non. Les ordres de grandeur illustrent l’efficacité préventive.' },
      { text: 'Avec prophylaxie, le risque indiqué reste non nul, autour de 1/4000.', correct: true, correction: 'Oui. L’exemple du cours conserve un risque résiduel malgré la perfusion.' },
      { text: 'La prophylaxie augmente le risque de 1/4000 à 1/200.', correct: false, correction: 'Non. L’effet présenté va dans le sens d’une diminution.' },
      { text: 'Sans prophylaxie, le risque indiqué est environ 1/200 et il baisse fortement avec la perfusion.', correct: true, correction: 'Oui. Le cours donne environ 1/200 sans perfusion contre 1/4000 avec perfusion.' },
    ],
    explanation: 'Les valeurs de 1/200 sans prophylaxie et 1/4000 avec prophylaxie illustrent une réduction d’environ vingt fois, sans disparition du risque ; il s’agit d’estimations de groupe, non d’une prédiction individuelle. (Cours, p. 7)'
  },
  {
    id: 75,
    type: 'QCM',
    question: 'Une mère porteuse de SGB accouche très rapidement avant d’avoir reçu la prophylaxie intraveineuse prévue. Quelle interprétation du risque pour le nouveau-né est la plus juste ?',
    options: [
      { text: 'Considérer que le dépistage positif devient sans importance après une naissance rapide.', correct: false, correction: 'Non. Le résultat maternel reste une donnée utile à l’appréciation du risque néonatal.' },
      { text: 'Affirmer que le nouveau-né est infecté parce que la prophylaxie n’a pas été administrée.', correct: false, correction: 'Non. Même sans prophylaxie, l’infection n’est pas systématique chez les enfants de mères porteuses.' },
      { text: 'Documenter l’absence ou la durée insuffisante de prophylaxie et adapter l’évaluation du nouveau-né à la situation clinique et au protocole.', correct: true, correction: 'Oui. La prévention prévue n’a pas été pleinement administrée ; le risque doit être pris en compte sans conclure automatiquement à une infection.' },
      { text: 'Conclure qu’une naissance rapide écarte toute transmission du SGB.', correct: false, correction: 'Non. Le déroulement rapide ne garantit pas l’absence de transmission.' },
      { text: 'Administrer la première dose maternelle après la naissance et considérer la prévention intrapartum comme complète.', correct: false, correction: 'Non. Une dose postnatale ne remplace pas l’exposition antibiotique pendant le travail.' },
    ],
    explanation: 'La prophylaxie doit commencer pendant le travail ; si elle n’a pas pu être administrée, l’information doit guider l’appréciation clinique du nouveau-né sans assimiler exposition et infection certaine. (Cours, p. 4 et 7)'
  },
  {
    id: 76,
    type: 'QRM',
    question: 'Quelles limites faut-il garder à l’esprit devant une prévention intrapartum du SGB bien conduite ?',
    options: [
      { text: 'Elle assure que toute colonisation maternelle devient une infection néonatale.', correct: false, correction: 'Non. La plupart des nouveau-nés colonisés ne développent pas une infection.' },
      { text: 'Elle démontre qu’aucune voie de contamination autre que l’accouchement n’existe.', correct: false, correction: 'Non. L’effet moindre sur les formes tardives suggère des mécanismes de contamination différents.' },
      { text: 'Elle ne garantit pas l’absence absolue d’infection néonatale.', correct: true, correction: 'Oui. Un risque résiduel persiste malgré la prévention.' },
      { text: 'Une suspicion d’infection chez l’enfant nécessite toujours une évaluation propre.', correct: true, correction: 'Oui. La prophylaxie maternelle ne remplace pas l’examen clinique du nouveau-né.' },
      { text: 'Son effet est moins marqué sur les infections néonatales tardives.', correct: true, correction: 'Oui. Le cours souligne que ces infections diminuent moins nettement.' },
    ],
    explanation: 'La prophylaxie per-partum réduit le risque de maladie précoce mais n’abolit pas tout risque, notamment pour les formes tardives. (Cours, p. 7–8)'
  },
  {
    id: 77,
    type: 'QCM',
    question: 'Une femme asymptomatique a un dépistage vaginal positif à 36 SA et aucun signe d’infection maternelle. Quelle conduite de principe correspond au cours ?',
    options: [
      { text: 'Donner de la rifampicine au nouveau-né à titre systématique.', correct: false, correction: 'Non. La rifampicine est citée pour les contacts du méningocoque, pas pour cette situation.' },
      { text: 'Reporter la prévention jusqu’au troisième mois après la naissance.', correct: false, correction: 'Non. L’objectif est surtout de prévenir les infections précoces liées à l’accouchement.' },
      { text: 'Considérer que son nouveau-né présente déjà une bactériémie.', correct: false, correction: 'Non. Un portage maternel ne prouve aucune infection du bébé.' },
      { text: 'Ignorer le résultat parce que la mère ne présente pas de symptômes.', correct: false, correction: 'Non. Le dépistage vise précisément le portage asymptomatique.' },
      { text: 'Prévoir l’antibioprophylaxie maternelle pendant le travail.', correct: true, correction: 'Oui. Le résultat de portage guide la prévention per-partum.' },
    ],
    explanation: 'Un portage vaginal de SGB identifié en fin de grossesse justifie la prophylaxie maternelle pendant le travail dans la stratégie du cours. (Cours, p. 7)'
  },
  {
    id: 78,
    type: 'QRM',
    question: 'Une femme porteuse de SGB a une césarienne programmée. Quels raisonnements restent corrects si le travail ou la rupture des membranes peut survenir avant la date prévue ?',
    options: [
      { text: 'Toute césarienne programmée exclut définitivement toute transmission du SGB, même si le travail a commencé.', correct: false, correction: 'Non. Le travail ou la rupture des membranes modifie l’exposition du nouveau-né ; la situation doit être réévaluée.' },
      { text: 'Un portage vaginal positif n’est pas, à lui seul, une indication de césarienne.', correct: true, correction: 'Oui. La stratégie de prévention du SGB ne repose pas sur une césarienne imposée à toute porteuse.' },
      { text: 'Le dépistage anténatal reste utile quand aucune indication de prophylaxie n’est déjà connue.', correct: true, correction: 'Oui. Une naissance peut finalement être précédée de travail ou de rupture des membranes, même si une césarienne était prévue.' },
      { text: 'Le mode d’accouchement prévu doit être réévalué si le travail ou la rupture des membranes commence avant l’intervention.', correct: true, correction: 'Oui. Ces événements changent le contexte de risque et peuvent conduire à une prophylaxie anti-SGB selon le statut maternel.' },
      { text: 'La présence de SGB impose toujours une prophylaxie intrapartum spécifique même si la césarienne a lieu avant le travail avec membranes intactes.', correct: false, correction: 'Non. Dans ce cas particulier, la prophylaxie anti-SGB n’est pas systématiquement indiquée ; elle est distincte de la prophylaxie chirurgicale de la césarienne.' },
    ],
    explanation: 'Le cours situe surtout la transmission pendant l’accouchement par voie basse et recommande le dépistage en fin de grossesse. La nuance sur la césarienne programmée vient des recommandations ACOG, indiquées dans la note de source du quiz. (Cours, p. 4 et 7)'
  },
  {
    id: 79,
    type: 'QCM',
    question: 'Quelle interprétation est la plus juste si une femme a eu un prélèvement vaginal négatif au début de la grossesse mais aucun résultat proche du terme ?',
    options: [
      { text: 'La perfusion doit être commencée automatiquement dès le premier trimestre.', correct: false, correction: 'Non. L’antibioprophylaxie discutée est per-partum.' },
      { text: 'Une infection néonatale est certaine parce que le premier résultat était négatif.', correct: false, correction: 'Non. Un dépistage négatif ancien ne permet aucune telle conclusion.' },
      { text: 'Le dépistage vaginal devient inutile parce qu’un ECBU négatif est suffisant.', correct: false, correction: 'Non. Un ECBU négatif n’est pas un substitut au prélèvement vaginal.' },
      { text: 'Le résultat ancien prouve l’absence définitive de portage à l’accouchement.', correct: false, correction: 'Non. Le portage de SGB peut être intermittent.' },
      { text: 'Il faut considérer le résultat ancien dans son contexte et réaliser le dépistage de fin de grossesse prévu, sauf indication déjà établie de prophylaxie.', correct: true, correction: 'Oui. Le test près du terme tient compte des variations du portage.' },
    ],
    explanation: 'Le portage intermittent justifie que le dépistage systématique, lorsqu’il est indiqué, soit réalisé près du terme plutôt que conclu sur un prélèvement ancien. (Cours, p. 4 et 7)'
  },
  {
    id: 80,
    type: 'QRM',
    question: 'Dans les trois situations suivantes, quels liens entre démarche et objectif sont corrects ?',
    options: [
      { text: 'Écouvillon vaginal positif chez la mère : diagnostic certain d’une bactériémie néonatale.', correct: false, correction: 'Non. Une colonisation maternelle ne prouve pas l’infection du nouveau-né.' },
      { text: 'Prélèvements diagnostiques chez un nouveau-né qui présente des signes évocateurs d’infection : rechercher une infection et son agent.', correct: true, correction: 'Oui. Les symptômes de l’enfant déclenchent une démarche diagnostique distincte du dépistage maternel.' },
      { text: 'Bêta-lactamine intraveineuse donnée à une mère porteuse pendant le travail : réduire le risque d’infection néonatale précoce.', correct: true, correction: 'Oui. Il s’agit d’une antibioprophylaxie péripartum.' },
      { text: 'Antibioprophylaxie maternelle bien conduite : garantie qu’aucun diagnostic néonatal ne sera jamais nécessaire.', correct: false, correction: 'Non. La prophylaxie réduit le risque sans le supprimer totalement.' },
      { text: 'Écouvillon vaginal chez une femme enceinte asymptomatique en fin de grossesse : rechercher un portage de SGB.', correct: true, correction: 'Oui. Le prélèvement est un dépistage de colonisation maternelle.' },
    ],
    explanation: 'Dépister un portage maternel, prévenir pendant le travail et diagnostiquer une éventuelle infection néonatale sont trois démarches complémentaires aux objectifs différents. (Cours, p. 2, 5 et 7–8)'
  },
]
