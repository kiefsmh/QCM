export const meta = {
  title: 'Immunologie cellulaire : CMH et lymphocytes T',
}

export default [
  {
    id: 1,
    type: 'QCM',
    question: 'Pourquoi l\'expérience utilise-t-elle des souris de lignée consanguine (inbred) ?',
    options: [
      { text: 'Pour rendre toutes les souris incapables de répondre au LCMV', correct: false, correction: 'Non. Elles doivent au contraire pouvoir développer une réponse immunitaire étudiable.' },
      { text: 'Pour réduire les différences génétiques entre individus et rendre les comparaisons reproductibles', correct: true, correction: 'Oui. Des animaux génétiquement homogènes limitent les variables parasites entre groupes expérimentaux.' },
      { text: 'Pour supprimer la nécessité d\'un groupe témoin', correct: false, correction: 'Non. L\'homogénéité génétique ne remplace pas les témoins expérimentaux.' },
      { text: 'Pour que toutes les souris expriment simultanément tous les haplotypes H-2 existants', correct: false, correction: 'Non. Une lignée consanguine possède un haplotype défini, pas tous les haplotypes.' },
      { text: 'Pour éviter toute expression de molécules du CMH', correct: false, correction: 'Non. La comparaison repose précisément sur l\'expression de molécules H-2/CMH.' },
    ],
    explanation: 'Les lignées consanguines servent à comparer des réponses sur un fond génétique contrôlé et reproductible. (Cours, p. 1)'
  },
  {
    id: 2,
    type: 'QRM',
    question: 'Pourquoi les chercheurs prélèvent-ils la rate des souris immunisées par le LCMV ?',
    options: [
      { text: 'Elle permet d\'éliminer toute influence du système immunitaire de l\'animal', correct: false, correction: 'Non. On prélève au contraire des cellules ayant participé à la réponse immunitaire.' },
      { text: 'Elle contient de nombreux lymphocytes susceptibles de participer à la réponse', correct: true, correction: 'Oui. La rate est un organe lymphoïde riche en lymphocytes.' },
      { text: 'Elle fournit aussi des cellules capables de présenter des antigènes', correct: true, correction: 'Oui. Les splénocytes forment un mélange cellulaire, notamment avec des cellules présentatrices d\'antigène.' },
      { text: 'Elle constitue une source de splénocytes pour tester la cytotoxicité', correct: true, correction: 'Oui. Ces cellules sont mises en présence de cibles dans les expériences décrites.' },
      { text: 'Elle ne contient que des lymphocytes T CD8 purifiés', correct: false, correction: 'Non. Un prélèvement splénique brut contient plusieurs populations cellulaires.' },
    ],
    explanation: 'Le prélèvement splénique apporte un mélange de cellules immunitaires, notamment des lymphocytes et des cellules présentatrices. (Cours, p. 1–2)'
  },
  {
    id: 3,
    type: 'QCM',
    question: 'Dans l\'expérience de précipitation décrite en introduction, que met en évidence l\'arc observé entre sérum immunisé et antigène viral ?',
    options: [
      { text: 'L\'absence d\'immunoglobulines chez le sujet immunisé', correct: false, correction: 'Non. Le précipité traduit au contraire la présence d\'anticorps spécifiques.' },
      { text: 'La reconnaissance directe du virus par des lymphocytes T cytotoxiques', correct: false, correction: 'Non. Le dispositif utilise du sérum, sans tester directement des lymphocytes T.' },
      { text: 'La destruction des fibroblastes infectés par le virus', correct: false, correction: 'Non. Aucun fibroblaste cible n\'intervient dans cette expérience de précipitation.' },
      { text: 'L\'activation du thymus par une électrophorèse', correct: false, correction: 'Non. L\'électrophorèse a servi à caractériser des protéines sériques, pas à activer le thymus.' },
      { text: 'Une interaction entre des anticorps sériques et l\'antigène', correct: true, correction: 'Oui. Des molécules du sérum immunisé se lient à l\'antigène et forment un précipité visible.' },
    ],
    explanation: 'Une réaction antigène–anticorps peut produire un précipité ; les anticorps sont des immunoglobulines présentes dans le sérum. (Cours, p. 1)'
  },
  {
    id: 4,
    type: 'QRM',
    question: 'Que suggère l\'observation des souris nude décrites dans le cours ?',
    options: [
      { text: 'L\'absence de poils est à elle seule la cause de la déficience immunitaire', correct: false, correction: 'Non. Le phénotype nude est associé à une anomalie du développement thymique.' },
      { text: 'La maturation des lymphocytes T est liée au thymus', correct: true, correction: 'Oui. C\'est la conclusion immunologique centrale tirée de ce modèle.' },
      { text: 'L\'absence de thymus s\'accompagne d\'un déficit majeur de la réponse impliquant les lymphocytes T', correct: true, correction: 'Oui. Le modèle nude met en évidence le rôle du thymus dans le développement des lymphocytes T.' },
      { text: 'La présence de quelques lymphocytes B ne suffit pas à assurer toutes les réponses anticorps', correct: true, correction: 'Oui. La réponse humorale dépend aussi de l\'aide T dans de nombreuses situations.' },
      { text: 'Les lymphocytes B se développent exclusivement dans le thymus', correct: false, correction: 'Non. Leur développement est associé à la moelle osseuse, contrairement à la maturation thymique des T.' },
    ],
    explanation: 'Le modèle nude associe athymie et déficit immunitaire, ce qui a aidé à établir le rôle essentiel du thymus pour les lymphocytes T. (Cours, p. 1)'
  },
  {
    id: 5,
    type: 'QCM',
    question: 'Quel résultat est attendu lorsque les splénocytes d\'une souris H-2ᵏ immunisée par le LCMV rencontrent des fibroblastes H-2ᵏ non infectés ?',
    options: [
      { text: 'Une lyse démontrant que les anticorps n\'existent pas', correct: false, correction: 'Non. Le résultat renseigne sur la cytotoxicité mesurée, pas sur l\'existence d\'anticorps.' },
      { text: 'Une lyse intense due au seul partage de H-2ᵏ', correct: false, correction: 'Non. Le partage du CMH ne suffit pas sans antigène viral reconnu.' },
      { text: 'Pas de lyse spécifique notable', correct: true, correction: 'Oui. La cible partage le CMH du soi mais ne présente pas d\'antigène viral pertinent.' },
      { text: 'Une lyse liée à l\'incompatibilité H-2 entre les deux populations', correct: false, correction: 'Non. Elles appartiennent à la même lignée H-2ᵏ.' },
      { text: 'Une lyse intense due à l\'absence de virus', correct: false, correction: 'Non. L\'absence du motif viral retire précisément le signal de reconnaissance spécifique.' },
    ],
    explanation: 'Une cible compatible H-2 mais non infectée ne réunit pas les deux conditions de reconnaissance de la réponse cytotoxique antivirale. (Cours, p. 2)'
  },
  {
    id: 6,
    type: 'QRM',
    question: 'Quelles conditions caractérisent la lyse des fibroblastes dans l\'expérience LCMV présentée ?',
    options: [
      { text: 'La seule présence du virus dans n\'importe quelle lignée H-2 garantit la lyse', correct: false, correction: 'Non. Les fibroblastes H-2ᵇ infectés ne sont pas lysés par les effecteurs H-2ᵏ décrits.' },
      { text: 'La cible est infectée par le LCMV', correct: true, correction: 'Oui. Le système teste une réponse dirigée contre des cellules infectées.' },
      { text: 'Les cellules effectrices proviennent d\'un animal préalablement immunisé par le LCMV', correct: true, correction: 'Oui. Le cours utilise des splénocytes provenant d\'une souris ayant rencontré le virus.' },
      { text: 'La cible partage une spécificité H-2 pertinente avec les cellules effectrices', correct: true, correction: 'Oui. La reconnaissance est restreinte par les molécules du CMH/H-2.' },
      { text: 'Une infection de la cible rend inutile toute reconnaissance par les lymphocytes T', correct: false, correction: 'Non. La lyse spécifique dépend justement de cette reconnaissance.' },
    ],
    explanation: 'Dans ce modèle, une lyse antivirale spécifique est observée quand l\'antigène viral est présenté dans un contexte H-2 reconnu par les effecteurs sensibilisés. (Cours, p. 2)'
  },
  {
    id: 7,
    type: 'QCM',
    question: 'Quel résultat surprenant observe-t-on avec des splénocytes anti-LCMV H-2ᵏ et des fibroblastes H-2ᵇ infectés par le même virus ?',
    options: [
      { text: 'La disparition des cellules effectrices avant tout contact avec la cible', correct: false, correction: 'Non. Le résultat rapporté concerne l\'absence de lyse des cibles, pas celle des effecteurs.' },
      { text: 'Une production d\'immunoglobulines par les fibroblastes', correct: false, correction: 'Non. Les fibroblastes sont ici des cellules cibles, et non des plasmocytes.' },
      { text: 'Une lyse exclusive des fibroblastes H-2ᵇ non infectés', correct: false, correction: 'Non. Les cibles H-2ᵇ infectées ne sont pas lysées dans cette combinaison.' },
      { text: 'Une lyse identique à celle des fibroblastes H-2ᵏ infectés', correct: false, correction: 'Non. C\'est précisément la différence entre les deux lignées qui motive l\'analyse.' },
      { text: 'L\'absence de lyse spécifique des fibroblastes H-2ᵇ', correct: true, correction: 'Oui. L\'antigène viral commun ne suffit pas en l\'absence du contexte H-2 pertinent.' },
    ],
    explanation: 'Les effecteurs sensibilisés dans la lignée H-2ᵏ ne lysent pas les cibles H-2ᵇ pourtant infectées par le LCMV. (Cours, p. 2)'
  },
  {
    id: 8,
    type: 'QRM',
    question: 'Que peut-on conclure en comparant les cibles H-2ᵏ infectées, H-2ᵏ non infectées et H-2ᵇ infectées ?',
    options: [
      { text: 'Le virus détruit directement toutes les cibles, indépendamment des effecteurs', correct: false, correction: 'Non. L\'expérience mesure une lyse spécifique en présence de cellules immunes et compare plusieurs types de cibles.' },
      { text: 'La reconnaissance antivirale dépend de la combinaison de l\'antigène et du contexte du soi', correct: true, correction: 'Oui. C\'est le sens de la restriction au CMH illustrée par les témoins.' },
      { text: 'Le partage de H-2ᵏ sans antigène viral n\'est pas suffisant', correct: true, correction: 'Oui. Les fibroblastes H-2ᵏ non infectés ne sont pas lysés spécifiquement.' },
      { text: 'Toute cellule H-2ᵇ est nécessairement impossible à infecter par le LCMV', correct: false, correction: 'Non. L\'absence de lyse ne suffit pas à établir une impossibilité d\'infection.' },
      { text: 'La présence d\'antigène viral sans contexte H-2 compatible n\'est pas suffisante', correct: true, correction: 'Oui. Les fibroblastes H-2ᵇ infectés ne sont pas lysés dans la combinaison décrite.' },
    ],
    explanation: 'Les contrôles dissocient la nécessité de l\'antigène viral de celle d\'un CMH reconnu par les lymphocytes effecteurs. (Cours, p. 2)'
  },
  {
    id: 9,
    type: 'QCM',
    question: 'Dans la terminologie du cours, quel élément est dit allospécifique dans cette expérience ?',
    options: [
      { text: 'Un motif du soi qui varie entre les lignées H-2ᵏ et H-2ᵇ', correct: true, correction: 'Oui. Le motif requis pour la reconnaissance est propre à une lignée et n\'est pas identique chez tous les individus de l\'espèce.' },
      { text: 'Un anticorps produit uniquement contre les fibroblastes', correct: false, correction: 'Non. La restriction étudiée porte sur la reconnaissance par les lymphocytes cytotoxiques.' },
      { text: 'Le même récepteur TCR porté par toutes les souris', correct: false, correction: 'Non. Les TCR sont diversifiés ; le motif allospécifique correspond ici au contexte H-2 de la cible.' },
      { text: 'Une séquence du LCMV identique chez tous les hôtes', correct: false, correction: 'Non. Le terme vise ici un déterminant de l\'hôte polymorphe entre lignées.' },
      { text: 'Une molécule absente de toutes les souris non infectées', correct: false, correction: 'Non. Le motif du soi est exprimé indépendamment de l\'infection.' },
    ],
    explanation: 'La comparaison des lignées révèle un déterminant polymorphe du soi : le contexte H-2/CMH de présentation. (Cours, p. 2–3)'
  },
  {
    id: 10,
    type: 'QRM',
    question: 'Quelles propositions décrivent correctement le rôle du marquage des fibroblastes au chrome dans l\'expérience ?',
    options: [
      { text: 'Il remplace l\'étape d\'immunisation des souris par le LCMV', correct: false, correction: 'Non. L\'immunisation concerne les cellules effectrices prélevées ensuite.' },
      { text: 'Il transforme des fibroblastes H-2ᵇ en fibroblastes H-2ᵏ', correct: false, correction: 'Non. Le marquage ne change pas le génotype H-2 des cellules.' },
      { text: 'Il aide à distinguer une lyse des cibles d\'une simple coexistence des cellules en culture', correct: true, correction: 'Oui. Le résultat mesuré porte sur la destruction de la cible.' },
      { text: 'Les fibroblastes marqués constituent les cellules cibles comparées entre conditions', correct: true, correction: 'Oui. On compare notamment leurs lignées H-2 et leur statut d\'infection.' },
      { text: 'Il permet de suivre la destruction des cellules cibles', correct: true, correction: 'Oui. La libération du marqueur est utilisée comme indice de lyse des fibroblastes marqués.' },
    ],
    explanation: 'Le marquage des fibroblastes au chrome sert de lecture de leur lyse au cours des comparaisons de cytotoxicité. (Cours, p. 2)'
  },
  {
    id: 11,
    type: 'QCM',
    question: 'Quelle hypothèse initiale est mise en difficulté par la non-lyse des cibles H-2ᵇ infectées ?',
    options: [
      { text: 'Les souris consanguines permettent des comparaisons reproductibles', correct: false, correction: 'Non. Le résultat inattendu ne contredit pas cet intérêt méthodologique.' },
      { text: 'Le thymus participe au développement des lymphocytes T', correct: false, correction: 'Non. Ce point vient d\'un autre modèle expérimental et n\'est pas infirmé ici.' },
      { text: 'Des anticorps peuvent se lier à un antigène soluble', correct: false, correction: 'Non. Cette notion concerne la reconnaissance humorale, pas le résultat de cytotoxicité.' },
      { text: 'Un lymphocyte cytotoxique reconnaîtrait l\'antigène viral seul, indépendamment du CMH de la cible', correct: true, correction: 'Oui. Si l\'antigène viral suffisait, les cibles H-2ᵇ infectées devraient être reconnues comme les cibles H-2ᵏ infectées.' },
      { text: 'La rate contient plusieurs populations cellulaires', correct: false, correction: 'Non. La composition des splénocytes ne résout pas à elle seule la différence entre les cibles.' },
    ],
    explanation: 'La différence de lyse entre cibles infectées H-2ᵏ et H-2ᵇ montre que l\'antigène viral pris isolément ne détermine pas la reconnaissance T. (Cours, p. 2)'
  },
  {
    id: 12,
    type: 'QRM',
    question: 'Quelles pistes sont envisagées dans le cours pour expliquer l\'absence de lyse des fibroblastes H-2ᵇ infectés ?',
    options: [
      { text: 'La preuve immédiate que tous les virus infectent uniquement les cellules H-2ᵏ', correct: false, correction: 'Non. Une absence de lyse ne prouve pas à elle seule l\'impossibilité d\'infecter une autre lignée.' },
      { text: 'L\'idée que les fibroblastes produisent directement les anticorps neutralisants', correct: false, correction: 'Non. Les fibroblastes sont des cibles de la réponse cytotoxique dans ce dispositif.' },
      { text: 'Une différence de capacité des cellules H-2ᵇ à exprimer les déterminants viraux', correct: true, correction: 'Oui. Le cours cite cette explication possible avant de privilégier une explication immunologique.' },
      { text: 'Une incapacité des effecteurs H-2ᵏ à reconnaître l\'antigène viral dans le contexte H-2ᵇ', correct: true, correction: 'Oui. C\'est l\'hypothèse qui conduit à la notion de restriction au CMH.' },
      { text: 'Une contribution d\'un motif cellulaire polymorphe, en plus de l\'antigène viral', correct: true, correction: 'Oui. La comparaison des lignées suggère un élément allospécifique porté par la cible.' },
    ],
    explanation: 'L\'observation suscite une hypothèse portant sur l\'infection de la cible et une autre sur la reconnaissance dépendante d\'un motif H-2 ; la seconde conduit à la restriction au CMH. (Cours, p. 2)'
  },
  {
    id: 13,
    type: 'QCM',
    question: 'Quelle structure est reconnue par un TCR conventionnel lors de la réponse cytotoxique antivirale étudiée ?',
    options: [
      { text: 'Un peptide viral qui serait obligatoirement reconnu quel que soit le CMH qui le porte', correct: false, correction: 'Non. Le contexte de CMH participe à la spécificité de reconnaissance.' },
      { text: 'Un virus entier libre, sans cellule présentatrice ni CMH', correct: false, correction: 'Non. La reconnaissance T conventionnelle porte sur un peptide présenté par le CMH.' },
      { text: 'La seule molécule de CMH du soi, en l\'absence de peptide pertinent', correct: false, correction: 'Non. La cytotoxicité antivirale spécifique exige également l\'antigène viral présenté.' },
      { text: 'Un complexe formé par un peptide viral et une molécule de CMH portée par la cible', correct: true, correction: 'Oui. Le TCR reconnaît le ligand composite peptide–CMH à la surface cellulaire.' },
      { text: 'Une immunoglobuline soluble libre dans le plasma', correct: false, correction: 'Non. Les immunoglobulines ne constituent pas le ligand antigénique de ce TCR.' },
    ],
    explanation: 'Le TCR reconnaît une combinaison précise de peptide antigénique et de CMH, fondement de la restriction au CMH. (Cours, p. 2–4)'
  },
  {
    id: 14,
    type: 'QRM',
    question: 'Quelles affirmations expriment la « reconnaissance associative » présentée dans le cours ?',
    options: [
      { text: 'Le ligand reconnu associe un déterminant du non-soi à une molécule du soi', correct: true, correction: 'Oui. Le peptide viral et le CMH forment ensemble le ligand reconnu.' },
      { text: 'Le CMH garde son identité de molécule du soi malgré l\'association avec le peptide', correct: true, correction: 'Oui. Le cours distingue le soi non modifié associé au non-soi d\'un soi devenu une nouvelle molécule.' },
      { text: 'Deux récepteurs totalement indépendants sont obligatoirement nécessaires, l\'un pour le peptide et l\'autre pour le CMH', correct: false, correction: 'Non. Le modèle retenu est une reconnaissance conjointe par le TCR du complexe.' },
      { text: 'Un même TCR peut établir des contacts avec le peptide et le CMH', correct: true, correction: 'Oui. La spécificité T porte sur le complexe peptide–CMH.' },
      { text: 'L\'antigène viral doit circuler librement pour être reconnu par le TCR', correct: false, correction: 'Non. Dans ce modèle, il est présenté sous forme de peptide associé au CMH.' },
    ],
    explanation: 'Le cours oppose plusieurs modèles historiques puis retient la reconnaissance associative d\'un peptide étranger avec une molécule de CMH du soi. (Cours, p. 2–4)'
  },
  {
    id: 15,
    type: 'QCM',
    question: 'Que signifie la « restriction au CMH » pour un clone T cytotoxique donné ?',
    options: [
      { text: 'Il n\'exprime aucun récepteur de reconnaissance antigénique', correct: false, correction: 'Non. La reconnaissance est assurée par son TCR.' },
      { text: 'Il ne peut répondre qu\'à un antigène non peptidique soluble', correct: false, correction: 'Non. Le modèle décrit porte sur des peptides présentés à la surface des cellules.' },
      { text: 'Sa réponse à un peptide dépend aussi du CMH qui présente ce peptide', correct: true, correction: 'Oui. La spécificité du clone porte sur un couple peptide–CMH donné.' },
      { text: 'Il reconnaît tous les peptides présentés par n\'importe quel CMH', correct: false, correction: 'Non. Il possède une spécificité et un contexte de présentation particuliers.' },
      { text: 'Il détruit toute cellule possédant du CMH, même sans peptide viral', correct: false, correction: 'Non. Le CMH seul ne suffit pas pour déclencher la réponse antivirale spécifique.' },
    ],
    explanation: 'Un lymphocyte T donné reconnaît son antigène dans le contexte d\'une molécule de CMH particulière, et non l\'antigène isolé. (Cours, p. 2–4)'
  },
  {
    id: 16,
    type: 'QRM',
    question: 'Quel est l\'intérêt des croisements entre lignées H-2 pures dans la suite du raisonnement expérimental ?',
    options: [
      { text: 'Obtenir une descendance F1 portant les haplotypes H-2 des deux parents', correct: true, correction: 'Oui. Une souris F1 H-2ᵏ/ᵇ hérite des deux haplotypes parentaux.' },
      { text: 'Démontrer que le LCMV devient une molécule H-2 de l\'hôte', correct: false, correction: 'Non. Le virus fournit l\'antigène étranger ; H-2 appartient au génome de l\'hôte.' },
      { text: 'Étudier des cellules partageant une spécificité H-2 avec plusieurs lignées différentes', correct: true, correction: 'Oui. Les croisements rendent possible la comparaison des réponses dans des contextes H-2 partiellement communs.' },
      { text: 'Tester si l\'identité H-2 participe à la reconnaissance du virus', correct: true, correction: 'Oui. Cette stratégie prolonge l\'expérience entre lignées pures pour étudier la restriction.' },
      { text: 'Créer des animaux dépourvus de tout CMH', correct: false, correction: 'Non. La descendance conserve les haplotypes H-2 hérités de ses parents.' },
    ],
    explanation: 'En combinant les haplotypes H-2 parentaux chez la descendance F1, les chercheurs peuvent comparer des situations de partage partiel du soi entre lignées. (Cours, p. 3)'
  },
  {
    id: 17,
    type: 'QCM',
    question: 'Quelle interprétation moderne du résultat « H-2ᵏ infecté lysé / H-2ᵇ infecté non lysé » concorde avec le cours ?',
    options: [
      { text: 'Le CMH H-2ᵏ est lui-même un virus', correct: false, correction: 'Non. H-2 correspond à des molécules de l\'hôte.' },
      { text: 'Les fibroblastes H-2ᵇ détruisent toujours les lymphocytes avant le contact', correct: false, correction: 'Non. Ce mécanisme n\'est pas établi par les observations rapportées.' },
      { text: 'Le peptide viral n\'existe dans aucune cellule H-2ᵇ', correct: false, correction: 'Non. L\'absence de lyse n\'autorise pas cette déduction ; le problème peut être la présentation ou la reconnaissance.' },
      { text: 'La réponse antivirale spécifique ne dépend d\'aucune molécule de la cellule cible', correct: false, correction: 'Non. Le résultat montre précisément le rôle du contexte cellulaire H-2.' },
      { text: 'Les effecteurs étudiés reconnaissent le peptide viral dans un contexte CMH H-2ᵏ approprié', correct: true, correction: 'Oui. Le CMH de la cible participe à la spécificité de la réponse T.' },
    ],
    explanation: 'La lyse sélective indique une reconnaissance conjointe du peptide viral et d\'une molécule de CMH/H-2 compatible avec le répertoire effecteur testé. (Cours, p. 2–4)'
  },
  {
    id: 18,
    type: 'QRM',
    question: 'Dans cette expérience, quelles propositions distinguent correctement les rôles des différents composants ?',
    options: [
      { text: 'Le marquage au chrome modifie la spécificité du TCR des effecteurs', correct: false, correction: 'Non. Il permet de suivre la lyse des cibles, sans changer la spécificité des lymphocytes.' },
      { text: 'Les splénocytes de la souris immunisée constituent la préparation effectrice', correct: true, correction: 'Oui. Ils apportent notamment les lymphocytes capables de la réponse cytotoxique.' },
      { text: 'Le H-2 est le nom donné aux anticorps circulants anti-LCMV', correct: false, correction: 'Non. H-2 désigne le complexe majeur d\'histocompatibilité murin.' },
      { text: 'Le LCMV fournit les antigènes viraux présentés dans les cellules infectées', correct: true, correction: 'Oui. L\'infection apporte le déterminant étranger de la combinaison reconnue.' },
      { text: 'Les fibroblastes cultivés servent de cellules cibles', correct: true, correction: 'Oui. Leur lyse est observée selon l\'infection et le haplotype H-2.' },
    ],
    explanation: 'Il faut identifier séparément effecteurs spléniques, cibles fibroblastiques, antigène viral et contexte H-2 pour interpréter l\'essai. (Cours, p. 1–3)'
  },
  {
    id: 19,
    type: 'QCM',
    question: 'Quel énoncé décrit le mieux le motif « du soi » identifié au terme du raisonnement expérimental ?',
    options: [
      { text: 'Un peptide viral libre qui n\'a aucun contact avec une cellule', correct: false, correction: 'Non. Le motif du soi est porté par la cellule qui présente le peptide.' },
      { text: 'Une molécule de CMH polymorphe entre lignées, qui présente un peptide étranger', correct: true, correction: 'Oui. Le soi correspond au CMH, tandis que le peptide viral constitue le non-soi associé.' },
      { text: 'Une copie du génome viral devenue identique chez toutes les souris', correct: false, correction: 'Non. Le soi requis est un déterminant de l\'hôte qui varie entre lignées.' },
      { text: 'Un anticorps sécrété par les fibroblastes après infection', correct: false, correction: 'Non. Les fibroblastes présentent des peptides ; ils ne sont pas la source de cet anticorps.' },
      { text: 'Une structure obligatoirement transformée chimiquement par chaque infection', correct: false, correction: 'Non. Le modèle final du cours décrit le CMH du soi non modifié associé à un peptide.' },
    ],
    explanation: 'Le cours conclut que le non-soi peptidique est reconnu en association avec un CMH du soi non modifié mais polymorphe. (Cours, p. 3–4)'
  },
  {
    id: 20,
    type: 'QRM',
    question: 'Dans les expériences utilisant des souris F1 H-2ᵏᵇ, quelles propositions rendent compte de l\'influence du contexte H-2 de sensibilisation ?',
    options: [
      { text: 'Le génotype H-2ᵏᵇ garantit une lyse identique des cibles H-2ᵏ et H-2ᵇ après n\'importe quelle sensibilisation', correct: false, correction: 'Non. Le résultat dépend aussi du contexte de présentation rencontré lors de la sensibilisation.' },
      { text: 'La réponse effectrice ultérieure peut dépendre du contexte H-2 dans lequel l\'antigène a été rencontré lors de la sensibilisation', correct: true, correction: 'Oui. Le fait de posséder à la fois k et b ne suffit pas à prédire une même cytotoxicité après toute condition de sensibilisation.' },
      { text: 'Le milieu H-2ᵏᵈ partage k avec ces souris, tandis que le milieu H-2ᵇᵈ partage b', correct: true, correction: 'Oui. Ces milieux permettent de comparer deux contextes H-2 partiellement communs avec les mêmes cellules F1.' },
      { text: 'Les souris F1 H-2ᵏᵇ portent les déterminants H-2 hérités des lignées k et b', correct: true, correction: 'Oui. Le croisement réunit les deux haplotypes H-2 parentaux.' },
      { text: 'L\'irradiation du receveur change son haplotype H-2 pour le rendre identique à celui du donneur', correct: false, correction: 'Non. L\'irradiation réduit des réponses cellulaires du receveur mais ne change pas son génotype H-2.' },
    ],
    explanation: 'Les expériences en F1 opposent les environnements H-2ᵏᵈ et H-2ᵇᵈ pour montrer que le contexte H-2 de sensibilisation intervient dans la spécificité de la réponse obtenue. (Cours, p. 3)'
  },
  {
    id: 21,
    type: 'QCM',
    question: 'Quelle notion le cours annonce-t-il pour expliquer la diversité des spécificités des récepteurs lymphocytaires ?',
    options: [
      { text: 'La recombinaison génétique stochastique', correct: true, correction: 'Oui. La recombinaison des segments de gènes des récepteurs contribue à générer un vaste répertoire de spécificités.' },
      { text: 'La mutation obligatoire du CMH après chaque infection', correct: false, correction: 'Non. Le cours décrit le CMH reconnu comme une molécule du soi non nécessairement modifiée.' },
      { text: 'L\'expression d\'un TCR identique par tous les lymphocytes T', correct: false, correction: 'Non. Un TCR identique sur tous les LT empêcherait précisément cette diversité de reconnaissance.' },
      { text: 'L\'irradiation répétée des souris comme générateur physiologique du répertoire T', correct: false, correction: 'Non. L\'irradiation est une manipulation expérimentale, sans rôle physiologique dans la création du répertoire des récepteurs.' },
      { text: 'La synthèse d\'anticorps par les fibroblastes infectés', correct: false, correction: 'Non. Les fibroblastes sont les cellules cibles de l\'expérience, pas la source des anticorps.' },
    ],
    explanation: 'Le cours annonce la recombinaison génétique stochastique comme mécanisme majeur de la diversité des récepteurs lymphocytaires. (Cours, p. 4)'
  },
  {
    id: 22,
    type: 'QRM',
    question: 'Quels types cellulaires le cours cite-t-il comme grandes cellules présentatrices d\'antigènes ?',
    options: [
      { text: 'Les macrophages', correct: true, correction: 'Oui. Ils figurent parmi les cellules présentatrices citées.' },
      { text: 'Les lymphocytes B', correct: true, correction: 'Oui. Ils peuvent aussi présenter des peptides antigéniques aux LT.' },
      { text: 'Les hématies matures', correct: false, correction: 'Non. Elles ne sont pas citées comme CPA et ne remplissent pas ce rôle dans ce contexte.' },
      { text: 'Les cellules dendritiques', correct: true, correction: 'Oui. Elles ont un rôle majeur dans l\'activation initiale des LT.' },
      { text: 'Les plaquettes comme principale population de CPA professionnelles', correct: false, correction: 'Non. Cette proposition ne correspond pas à la liste donnée dans le cours.' },
    ],
    explanation: 'Le polycopié distingue trois grandes populations de CPA : cellules dendritiques, lymphocytes B et macrophages. (Cours, p. 4)'
  },
  {
    id: 23,
    type: 'QCM',
    question: 'Pourquoi la cellule dendritique est-elle décrite comme un lien entre immunité innée et immunité adaptative ?',
    options: [
      { text: 'Elle détecte des signaux de danger, mûrit et devient capable d\'amorcer une réponse T spécifique', correct: true, correction: 'Oui. La détection innée contribue à sa maturation, puis la présentation antigénique et la costimulation activent les LT.' },
      { text: 'Elle ne répond jamais aux récepteurs de reconnaissance innée', correct: false, correction: 'Non. Le cours mentionne notamment l\'activation via les TLR.' },
      { text: 'Elle remplace le TCR du lymphocyte T', correct: false, correction: 'Non. Le TCR du LT reste indispensable à la reconnaissance du peptide-CMH.' },
      { text: 'Elle fabrique directement les anticorps de haute affinité', correct: false, correction: 'Non. La sécrétion d\'anticorps est la fonction finale des plasmocytes issus des LB.' },
      { text: 'Elle ne migre qu\'après différenciation en hématie', correct: false, correction: 'Non. Elle migre comme cellule dendritique vers les organes lymphoïdes secondaires.' },
    ],
    explanation: 'En détectant le danger puis en présentant des antigènes aux LT, la cellule dendritique relie la phase innée rapide à la réponse adaptative spécifique. (Cours, p. 4-5)'
  },
  {
    id: 24,
    type: 'QRM',
    question: 'Concernant l\'activation des cellules dendritiques et la vaccination, quelles propositions sont justes ?',
    options: [
      { text: 'L\'activation innée rend inutile toute présentation par le CMH', correct: false, correction: 'Non. Le LT reconnaît toujours un peptide présenté dans un CMH approprié.' },
      { text: 'Un vaccin efficace peut bénéficier de l\'activation de l\'immunité innée en plus de l\'apport d\'antigène', correct: true, correction: 'Oui. Le cours souligne ce besoin pour obtenir une réponse T.' },
      { text: 'À l\'état de repos, la cellule dendritique sécrète déjà nécessairement beaucoup d\'anticorps', correct: false, correction: 'Non. Les anticorps sont produits par les plasmocytes, pas par les cellules dendritiques.' },
      { text: 'Des signaux reconnus par des récepteurs innés comme les TLR peuvent contribuer à leur maturation', correct: true, correction: 'Oui. Le cours prend les TLR comme exemple de détection innée du danger.' },
      { text: 'Une cellule dendritique mûrie peut mieux amorcer une réponse des LT naïfs', correct: true, correction: 'Oui. La maturation améliore notamment sa capacité de présentation et de costimulation.' },
    ],
    explanation: 'L\'activation innée favorise la maturation de la cellule dendritique, condition utile à l\'amorçage de la réponse T et donc à la vaccination. (Cours, p. 4)'
  },
  {
    id: 25,
    type: 'QCM',
    question: 'Dans la voie de présentation habituelle, quel couple correspond à un antigène d\'origine extracellulaire reconnu par un LT CD4+ ?',
    options: [
      { text: 'Antigène exogène — TLR de la cellule dendritique reconnu par le TCR', correct: false, correction: 'Non. Le TLR sert à détecter des motifs innés, tandis que le TCR reconnaît le peptide-CMH.' },
      { text: 'Peptide issu de l\'antigène exogène — CMH de classe II', correct: true, correction: 'Oui. C\'est l\'association canonique pour la présentation aux LT CD4+.' },
      { text: 'Peptide endogène — immunoglobuline soluble comme molécule de présentation', correct: false, correction: 'Non. Une immunoglobuline n\'est pas la molécule de présentation du LT.' },
      { text: 'Antigène natif tridimensionnel — CMH de classe I', correct: false, correction: 'Non. Le TCR reconnaît généralement un peptide lié au CMH, pas l\'antigène natif entier.' },
      { text: 'Peptide exogène — absence complète de CMH', correct: false, correction: 'Non. La reconnaissance T décrite est restreinte par le CMH.' },
    ],
    explanation: 'Classiquement, les peptides provenant d\'antigènes exogènes sont présentés par le CMH II aux LT CD4+. Il existe des voies particulières de présentation croisée ; la question porte sur la voie habituelle. (Cours, p. 5-6)'
  },
  {
    id: 26,
    type: 'QRM',
    question: 'Quelles associations entre origine de l\'antigène, CMH et lymphocyte T sont correctes dans le schéma général du cours ?',
    options: [
      { text: 'Une cellule dendritique peut présenter des peptides sur les deux classes de CMH', correct: true, correction: 'Oui. Le polycopié mentionne le CMH I et surtout le CMH II pour la présentation par ces cellules.' },
      { text: 'Un antigène exogène ne peut en aucune circonstance être présenté par CMH I', correct: false, correction: 'Non. Certaines CPA, surtout dendritiques, réalisent une présentation croisée sur CMH I.' },
      { text: 'Peptide exogène présenté par CMH II à un LT CD4+', correct: true, correction: 'Oui. C\'est la voie classique après capture et apprêtement d\'un antigène extérieur.' },
      { text: 'Le TCR d\'un LT CD8+ reconnaît directement un antigène soluble sans CMH', correct: false, correction: 'Non. La reconnaissance T conventionnelle repose sur un complexe peptide-CMH.' },
      { text: 'Peptide endogène présenté par CMH I à un LT CD8+', correct: true, correction: 'Oui. C\'est la voie classique de surveillance des protéines produites dans la cellule.' },
    ],
    explanation: 'CMH I/CD8 et CMH II/CD4 sont les associations habituelles ; la présentation croisée empêche d\'en faire des règles sans exception. (Cours, p. 5-6)'
  },
  {
    id: 27,
    type: 'QCM',
    question: 'Où une cellule dendritique ayant capté un antigène en périphérie peut-elle amorcer la réponse d\'un LT naïf ?',
    options: [
      { text: 'Exclusivement dans la moelle osseuse', correct: false, correction: 'Non. La moelle n\'est pas le lieu d\'amorçage décrit ici.' },
      { text: 'Uniquement dans la circulation sanguine, sans interaction cellulaire', correct: false, correction: 'Non. Le cours situe la présentation et l\'activation dans les organes lymphoïdes secondaires.' },
      { text: 'Dans la membrane interne de la cellule infectée, sans CPA', correct: false, correction: 'Non. L\'activation initiale du LT naïf requiert une CPA présentant le peptide.' },
      { text: 'Dans un organe lymphoïde secondaire, notamment un ganglion drainant', correct: true, correction: 'Oui. Après maturation, elle migre vers ces sites où elle rencontre les LT naïfs.' },
      { text: 'Dans le thymus, où se déroule toute réponse effectrice', correct: false, correction: 'Non. Le thymus sert à l\'éducation des LT, tandis que l\'amorçage décrit se déroule dans les organes lymphoïdes secondaires.' },
    ],
    explanation: 'La cellule dendritique activée migre vers un ganglion ou un autre organe lymphoïde secondaire et y rencontre les LT naïfs. (Cours, p. 5)'
  },
  {
    id: 28,
    type: 'QRM',
    question: 'Lors de l\'amorçage d\'une réponse T par une cellule dendritique, quelles étapes sont cohérentes avec le cours ?',
    options: [
      { text: 'L\'antigène est apprêté en peptides avant d\'être exposé avec le CMH', correct: true, correction: 'Oui. La présentation T repose sur des peptides issus de l\'apprêtement antigénique.' },
      { text: 'La cellule dendritique activée peut gagner un organe lymphoïde secondaire', correct: true, correction: 'Oui. Ce trajet favorise la rencontre avec des LT naïfs.' },
      { text: 'La sécrétion d\'anticorps par la cellule dendritique précède obligatoirement toute activation T', correct: false, correction: 'Non. La cellule dendritique ne se différencie pas en plasmocyte sécréteur d\'anticorps.' },
      { text: 'Après activation, des LT effecteurs peuvent rejoindre les tissus périphériques', correct: true, correction: 'Oui. Le polycopié décrit leur sortie du ganglion vers les sites d\'action.' },
      { text: 'Le TCR du LT reconnaît le complexe peptide-CMH approprié', correct: true, correction: 'Oui. C\'est le signal antigénique spécifique.' },
    ],
    explanation: 'Capture et apprêtement de l\'antigène, migration de la cellule dendritique, amorçage du LT puis déploiement des effecteurs forment la séquence présentée. (Cours, p. 5)'
  },
  {
    id: 29,
    type: 'QCM',
    question: 'Quel mécanisme effecteur le cours attribue-t-il particulièrement aux LT CD8+ cytotoxiques ?',
    options: [
      { text: 'La phagocytose exclusive de toutes les bactéries extracellulaires', correct: false, correction: 'Non. Ce n\'est pas le mécanisme cytotoxique décrit pour les LT CD8+.' },
      { text: 'L\'expression de CD80 comme unique arme cytolytique', correct: false, correction: 'Non. CD80 participe à la costimulation sur les CPA ; il ne remplace pas les mécanismes cytotoxiques.' },
      { text: 'La dégradation du TCR de la cellule cible', correct: false, correction: 'Non. La cible peut être une cellule infectée dont les peptides sont reconnus via son CMH I ; sa destruction n\'est pas fondée sur la dégradation d\'un TCR.' },
      { text: 'La production directe d\'immunoglobulines par le LT CD8+', correct: false, correction: 'Non. Les immunoglobulines sont produites par les plasmocytes.' },
      { text: 'La libération de perforine et de granzymes contre une cellule cible reconnue', correct: true, correction: 'Oui. Ces molécules contribuent à la destruction de la cellule cible.' },
    ],
    explanation: 'Une fois activés, les LT CD8+ effecteurs peuvent éliminer des cellules cibles grâce notamment à la perforine et aux granzymes. (Cours, p. 5)'
  },
  {
    id: 30,
    type: 'QRM',
    question: 'À propos de la réponse adaptative cellulaire décrite, quelles propositions sont correctes ?',
    options: [
      { text: 'L\'action des LT cytotoxiques sur les cellules cibles fait partie de l\'immunité adaptative cellulaire', correct: true, correction: 'Oui. Elle se distingue de la production d\'anticorps qui caractérise la voie humorale.' },
      { text: 'Les LT CD8+ détruisent indifféremment toute cellule infectée, même sans reconnaissance du peptide-CMH pertinent', correct: false, correction: 'Non. La cytotoxicité spécifique est guidée par la reconnaissance du complexe peptide-CMH adapté au TCR.' },
      { text: 'Des LT CD8+ activés peuvent quitter le ganglion et atteindre les tissus cibles', correct: true, correction: 'Oui. L\'activation dans l\'organe lymphoïde précède leur action en périphérie.' },
      { text: 'La réponse cellulaire correspond exclusivement à la sécrétion d\'anticorps par les plasmocytes', correct: false, correction: 'Non. La sécrétion d\'anticorps relève de la réponse humorale, tandis que la réponse cellulaire implique des cellules effectrices comme les LT CD8+.' },
      { text: 'La reconnaissance spécifique d\'un peptide sur le CMH I d\'une cellule cible peut guider l\'action d\'un LT CD8+', correct: true, correction: 'Oui. Le LT cytotoxique dirige sa réponse vers une cellule portant le complexe peptide-CMH pertinent.' },
    ],
    explanation: 'La réponse cellulaire associe l\'activation des LT CD8+, leur migration puis une action sur les cibles portant le peptide-CMH reconnu ; elle se distingue de la voie humorale. (Cours, p. 5)'
  },
  {
    id: 31,
    type: 'QCM',
    question: 'Quel est le rôle des LT folliculaires auxiliaires (Tfh) mentionné dans le cours ?',
    options: [
      { text: 'Présenter seuls le peptide sur une immunoglobuline soluble à tous les LT CD8+', correct: false, correction: 'Non. Cette description mélange les rôles du Tfh, de l\'Ig et du CMH.' },
      { text: 'Participer à la coopération avec les LB pour soutenir leur maturation', correct: true, correction: 'Oui. Les Tfh apportent une aide au LB dans les organes lymphoïdes secondaires.' },
      { text: 'Remplacer les plasmocytes comme principale source d\'anticorps', correct: false, correction: 'Non. Ce sont les plasmocytes qui sécrètent les anticorps.' },
      { text: 'Reconnaître l\'antigène uniquement via un TLR, sans TCR', correct: false, correction: 'Non. Le Tfh est un lymphocyte T et son activation spécifique implique son TCR.' },
      { text: 'Détruire systématiquement chaque cellule cible par perforine', correct: false, correction: 'Non. La cytotoxicité par perforine est surtout présentée ici comme fonction des LT CD8+.' },
    ],
    explanation: 'La coopération Tfh-LB favorise la maturation du LB et sa différenciation en cellule productrice d\'anticorps. (Cours, p. 5)'
  },
  {
    id: 32,
    type: 'QRM',
    question: 'Quels éléments appartiennent à la voie humorale présentée dans le cours ?',
    options: [
      { text: 'Une coopération spécifique entre LT auxiliaire et LB dans un organe lymphoïde secondaire', correct: true, correction: 'Oui. Cette interaction participe à la maturation du LB.' },
      { text: 'La sécrétion d\'anticorps par les plasmocytes', correct: true, correction: 'Oui. Les plasmocytes sont les cellules effectrices sécrétrices d\'anticorps.' },
      { text: 'L\'activation de certains Tfh par une cellule dendritique', correct: true, correction: 'Oui. Le cours indique que la cellule dendritique peut activer ces LT auxiliaires.' },
      { text: 'La différenciation de LB en plasmocytes', correct: true, correction: 'Oui. C\'est une étape vers la production d\'anticorps.' },
      { text: 'La production des anticorps par le TCR du LT cytotoxique', correct: false, correction: 'Non. Le TCR est un récepteur de reconnaissance, pas une usine à anticorps.' },
    ],
    explanation: 'La réponse humorale associe aide Tfh, maturation des LB et sécrétion d\'anticorps par les plasmocytes. (Cours, p. 5)'
  },
  {
    id: 33,
    type: 'QCM',
    question: 'Dans le modèle des trois signaux, que représente le signal 1 reçu par un LT naïf ?',
    options: [
      { text: 'La reconnaissance par son TCR d\'un peptide présenté par un CMH', correct: true, correction: 'Oui. C\'est le signal de spécificité antigénique.' },
      { text: 'La liaison d\'un anticorps au récepteur Fc du LT', correct: false, correction: 'Non. Le signal 1 du modèle décrit repose sur le TCR.' },
      { text: 'La sécrétion terminale d\'anticorps par le LT', correct: false, correction: 'Non. Ce n\'est ni un signal initial ni une fonction du LT.' },
      { text: 'La liaison de CD80 à CD86 sur deux cellules dendritiques', correct: false, correction: 'Non. CD80 et CD86 sont des ligands de costimulation, pas la reconnaissance TCR du signal 1.' },
      { text: 'La migration physique du LT hors du ganglion avant toute rencontre antigénique', correct: false, correction: 'Non. La migration effectrice suit l\'activation ; elle ne constitue pas le signal 1.' },
    ],
    explanation: 'Le premier signal est spécifique : le TCR reconnaît un peptide antigénique dans le CMH présenté par la CPA. (Cours, p. 6)'
  },
  {
    id: 34,
    type: 'QRM',
    question: 'Pour le signal 2 de costimulation classique, quelles propositions sont exactes ?',
    options: [
      { text: 'CD28 est un récepteur exprimé par le LT dans cette interaction', correct: true, correction: 'Oui. Il reçoit le signal en se liant à CD80 ou CD86 de la CPA.' },
      { text: 'La liaison B7-CD28 renforce l\'activation induite par le TCR', correct: true, correction: 'Oui. Elle complète le signal 1 pour une activation efficace.' },
      { text: 'CD80 et CD86, membres de la famille B7, peuvent être portés par la CPA', correct: true, correction: 'Oui. Ils fournissent des ligands de costimulation.' },
      { text: 'Une CPA activée peut améliorer sa capacité à fournir la costimulation', correct: true, correction: 'Oui. La maturation favorise une présentation stimulante aux LT naïfs.' },
      { text: 'Dans cette paire, CD28 est porté par la cellule dendritique et CD80/CD86 par le LT', correct: false, correction: 'Non. La localisation est inversée : B7 sur la CPA, CD28 sur le LT.' },
    ],
    explanation: 'La costimulation B7-CD28 est un élément central du second signal. Le polycopié inverse une fois les cellules porteuses ; la localisation correcte est CD80/CD86 sur la CPA et CD28 sur le LT. (Cours, p. 6)'
  },
  {
    id: 35,
    type: 'QCM',
    question: 'Quel est le rôle principal du signal 3 dans le modèle d\'activation du LT présenté ?',
    options: [
      { text: 'Il remplace intégralement les deux premiers signaux', correct: false, correction: 'Non. Les cytokines ne remplacent pas reconnaissance antigénique et costimulation dans ce modèle.' },
      { text: 'Il correspond uniquement à la liaison de CD28 à CD80', correct: false, correction: 'Non. Cette interaction appartient au signal 2 de costimulation.' },
      { text: 'Il est fourni obligatoirement par des anticorps sécrétés par le LT', correct: false, correction: 'Non. Les anticorps ne constituent pas le signal 3 ; le cours parle de cytokines.' },
      { text: 'Des cytokines contribuent à orienter la différenciation et le type de réponse du LT', correct: true, correction: 'Oui. Le contexte cytokinique influe sur la polarisation fonctionnelle.' },
      { text: 'Il détermine à lui seul la séquence exacte du peptide reconnu par le TCR', correct: false, correction: 'Non. La spécificité antigénique relève de la rencontre TCR-peptide-CMH.' },
    ],
    explanation: 'Le troisième signal correspond au contexte de cytokines qui façonne la différenciation et la fonction de la réponse T. (Cours, p. 6)'
  },
  {
    id: 36,
    type: 'QRM',
    question: 'À propos des trois signaux nécessaires à l\'activation complète d\'un LT naïf dans le modèle du cours, quelles associations sont justes ?',
    options: [
      { text: 'Signal 3 : reconnaissance d\'un antigène natif par une Ig sécrétée', correct: false, correction: 'Non. Cette reconnaissance relève de l\'anticorps/BCR, pas du troisième signal T.' },
      { text: 'Signal 2 : costimulation, notamment B7 sur la CPA vers CD28 sur le LT', correct: true, correction: 'Oui. Elle amplifie et sécurise l\'activation.' },
      { text: 'Signal 1 : reconnaissance du complexe peptide-CMH par le TCR', correct: true, correction: 'Oui. Ce signal donne la spécificité antigénique.' },
      { text: 'Signal 1 seul : activation complète et identique dans toutes les situations', correct: false, correction: 'Non. Une stimulation TCR isolée n\'est généralement pas suffisante pour une activation complète d\'un LT naïf.' },
      { text: 'Signal 3 : contexte de cytokines orientant la réponse', correct: true, correction: 'Oui. Ce contexte influence la fonction acquise par le LT.' },
    ],
    explanation: 'Les trois signaux articulent spécificité antigénique, costimulation et orientation par cytokines. (Cours, p. 6)'
  },
  {
    id: 37,
    type: 'QCM',
    question: 'Un LT naïf reconnaît son peptide-CMH, mais la CPA ne fournit pas de costimulation adéquate. Quelle conséquence est la plus conforme au cours ?',
    options: [
      { text: 'Une réponse cytotoxique maximale est garantie', correct: false, correction: 'Non. L\'absence de signal 2 va plutôt à l\'encontre de l\'activation complète.' },
      { text: 'Le signal 3 devient automatiquement inutile dans toutes les réponses', correct: false, correction: 'Non. Le contexte de cytokines garde un rôle dans l\'orientation de la réponse.' },
      { text: 'Le CMH est automatiquement détruit et n\'a plus de rôle', correct: false, correction: 'Non. La reconnaissance peptide-CMH peut bien avoir lieu, mais elle est insuffisante pour une activation complète.' },
      { text: 'L\'activation complète est compromise ; le LT peut rester non répondeur selon le contexte', correct: true, correction: 'Oui. Le signal TCR isolé ne suffit généralement pas à déclencher une réponse effectrice robuste du LT naïf.' },
      { text: 'Le LT devient immédiatement un plasmocyte sécréteur d\'anticorps', correct: false, correction: 'Non. Un LT ne se transforme pas en plasmocyte ; ce dernier dérive du LB.' },
    ],
    explanation: 'La costimulation est un contrôle important de l\'activation des LT naïfs. Sans elle, la reconnaissance antigénique peut ne pas produire une réponse effectrice complète. (Cours, p. 6)'
  },
  {
    id: 38,
    type: 'QRM',
    question: 'Quel raisonnement justifie le blocage de la costimulation T dans certaines stratégies immunosuppressives évoquées dans le cours ?',
    options: [
      { text: 'Atténuer des réponses immunitaires indésirables, par exemple dans une situation de greffe', correct: true, correction: 'Oui. C\'est l\'un des contextes évoqués par le polycopié.' },
      { text: 'Bloquer uniquement le TCR d\'un clone auto-immun sans toucher les autres LT', correct: false, correction: 'Non. Le blocage de la costimulation n\'offre pas une sélectivité absolue pour un seul clone.' },
      { text: 'Accepter qu\'une réponse protectrice contre certains agents infectieux puisse aussi être diminuée', correct: true, correction: 'Oui. L\'immunosuppression peut réduire des défenses utiles.' },
      { text: 'Diminuer la probabilité d\'activation complète des LT malgré la reconnaissance antigénique', correct: true, correction: 'Oui. Le blocage du signal 2 réduit l\'intensité de l\'activation T.' },
      { text: 'Augmenter obligatoirement la production d\'anticorps de tous les LB', correct: false, correction: 'Non. Réduire l\'aide T peut au contraire diminuer certaines réponses humorales.' },
    ],
    explanation: 'Limiter la costimulation est un moyen de freiner les réponses T, avec une contrepartie possible sur les réponses immunitaires protectrices. (Cours, p. 6)'
  },
  {
    id: 39,
    type: 'QCM',
    question: 'Quelle différence de reconnaissance entre TCR conventionnel et immunoglobuline/BCR est soulignée par le cours ?',
    options: [
      { text: 'Le TCR reconnaît généralement un peptide présenté par le CMH ; le BCR peut lier un antigène natif dans sa forme spatiale', correct: true, correction: 'Oui. Le BCR peut reconnaître un antigène non nécessairement apprêté, soluble ou membranaire.' },
      { text: 'Le TCR reconnaît obligatoirement les antigènes solubles sans CMH, contrairement au BCR', correct: false, correction: 'Non. C\'est l\'inverse du mécanisme conventionnel décrit pour les LT.' },
      { text: 'Le BCR ne reconnaît que des peptides déjà fixés à un CMH', correct: false, correction: 'Non. Le BCR peut fixer directement des antigènes natifs.' },
      { text: 'Une immunoglobuline est toujours incapable de reconnaître un épitope linéaire', correct: false, correction: 'Non. Des anticorps peuvent reconnaître aussi des épitopes linéaires ; la distinction utile est l\'absence d\'exigence générale de présentation par le CMH pour le BCR.' },
      { text: 'Les deux récepteurs reconnaissent uniquement un TLR de cellule dendritique', correct: false, correction: 'Non. Les TLR ne sont pas la cible universelle des TCR et BCR.' },
    ],
    explanation: 'La présentation peptide-CMH caractérise la reconnaissance T conventionnelle, alors que le BCR/anticorps peut fixer directement un antigène natif. (Cours, p. 6)'
  },
  {
    id: 40,
    type: 'QRM',
    question: 'Quelles propositions mettent correctement en relation LT mémoire et reconnaissance antigénique des LB ?',
    options: [
      { text: 'Un BCR peut reconnaître un antigène soluble ou porté par une membrane', correct: true, correction: 'Oui. Le cours donne ces deux possibilités de rencontre avec l\'antigène.' },
      { text: 'Le LB ne reconnaît l\'antigène qu\'après présentation du peptide dans un CMH par une CPA', correct: false, correction: 'Non. Son BCR peut lier directement l\'antigène natif ; la présentation par CMH concerne la reconnaissance T.' },
      { text: 'Certains LT mémoire acquièrent plus rapidement une fonction effectrice après nouvelle stimulation', correct: true, correction: 'Oui. La réponse secondaire est en général plus rapide.' },
      { text: 'Tous les LT mémoire sont nécessairement cytotoxiques CD8+', correct: false, correction: 'Non. Il existe aussi des LT mémoire CD4+ aux fonctions auxiliaires.' },
      { text: 'Un LT mémoire déjà formé a généralement un seuil de réactivation plus bas qu\'un LT naïf', correct: true, correction: 'Oui. Le cours indique qu\'il requiert moins de signaux pour réagir.' },
    ],
    explanation: 'Le LT mémoire répond plus facilement à une réexposition, tandis que la reconnaissance antigénique initiale du LB par son BCR peut se faire sans peptide-CMH. (Cours, p. 6)'
  },
  {
    id: 41,
    type: 'QCM',
    question: 'Un LB doté d\'un BCR spécifique de l\'antigène X baigne dans un mélange contenant X et de nombreuses protéines sans rapport. Qu\'est-ce qui favorise la capture de X ?',
    options: [
      { text: 'La reconnaissance préalable de X par un TCR exprimé sur le LB.', correct: false, correction: 'Non. Un LB ne porte pas de TCR.' },
      { text: 'La liaison spécifique de X au BCR de ce LB.', correct: true, correction: 'Oui. La spécificité du BCR concentre l\'antigène qu\'il reconnaît pour son internalisation.' },
      { text: 'La transformation de X en cytokine par la cellule dendritique.', correct: false, correction: 'Non. Les cytokines sont des signaux, pas une conversion de l\'antigène.' },
      { text: 'L\'internalisation identique et systématique de toutes les protéines du mélange.', correct: false, correction: 'Non. Le BCR favorise la capture de son antigène, sans capturer de façon équivalente tout l\'environnement.' },
      { text: 'La présentation obligatoire de X intact sur CMH I avant sa liaison au BCR.', correct: false, correction: 'Non. Le BCR peut lier directement un antigène natif.' },
    ],
    explanation: 'La spécificité clonale du BCR permet au LB de capter préférentiellement l\'antigène qu\'il reconnaît. (Cours, p. 7.)'
  },
  {
    id: 42,
    type: 'QRM',
    question: 'Après fixation spécifique d\'un antigène par le BCR, quelles étapes peuvent permettre sa présentation à un LT CD4 ?',
    options: [
      { text: 'Des peptides issus de cet antigène sont exposés sur le CMH de classe II du lymphocyte B.', correct: true, correction: 'Oui. C\'est ainsi que le LT CD4 peut reconnaître ce que présente le LB.' },
      { text: 'L\'antigène capturé est dégradé en peptides dans des compartiments intracellulaires.', correct: true, correction: 'Oui. Ces peptides pourront être chargés sur le CMH de classe II.' },
      { text: 'Le LT CD4 reconnaît l\'antigène soluble intact avec son TCR, sans CMH.', correct: false, correction: 'Non. Le TCR du LT CD4 reconnaît un peptide présenté par le CMH II.' },
      { text: 'Le complexe BCR-antigène est internalisé par le lymphocyte B.', correct: true, correction: 'Oui. La reconnaissance par le BCR favorise la capture de l\'antigène.' },
      { text: 'Le BCR doit d\'abord reconnaître un complexe peptide-CMH de classe I sur une cellule infectée.', correct: false, correction: 'Non. Le BCR capte directement l\'antigène natif ; le CMH I n\'est pas requis pour cette étape.' },
    ],
    explanation: 'Le LB capte sélectivement l\'antigène lié par son BCR, le traite puis présente des peptides sur le CMH II aux LT CD4. (Cours, p. 7.)'
  },
  {
    id: 43,
    type: 'QCM',
    question: 'Avant d\'aider un LB spécifique de l\'antigène, par quelle cellule le futur TFH a-t-il été activé dans la séquence décrite ?',
    options: [
      { text: 'Un LT CD8 qui a sécrété des anticorps solubles.', correct: false, correction: 'Non. Les anticorps sont sécrétés par les cellules B différenciées, pas par les LT CD8.' },
      { text: 'Une cellule dendritique qui a présenté un peptide au LT CD4.', correct: true, correction: 'Oui. Le cours place l\'activation du LT auxiliaire par une cellule dendritique avant sa rencontre avec le LB.' },
      { text: 'Le LB mémoire qui lui a transféré son BCR.', correct: false, correction: 'Non. Le TFH ne reçoit pas de BCR du LB.' },
      { text: 'L\'hématie qui a présenté le peptide sur CMH II.', correct: false, correction: 'Non. L\'hématie n\'assure pas ce priming du LT CD4.' },
      { text: 'Le plasmocyte issu de ce même LB, avant toute réponse.', correct: false, correction: 'Non. Le plasmocyte apparaît en aval de l\'activation du LB.' },
    ],
    explanation: 'Dans le schéma du cours, la cellule dendritique active d\'abord le LT CD4 qui pourra ensuite devenir auxiliaire des LB. (Cours, p. 7.)'
  },
  {
    id: 44,
    type: 'QRM',
    question: 'Dans une réponse B dépendante des LT, quels éléments participent à l\'activation complète du LB ?',
    options: [
      { text: 'La fixation au BCR interdit toute présentation ultérieure de l\'antigène.', correct: false, correction: 'Non. La capture via le BCR facilite au contraire sa présentation sur le CMH II.' },
      { text: 'Le TFH reconnaît l\'antigène libre avec un BCR identique à celui du LB.', correct: false, correction: 'Non. Le TFH utilise son TCR pour reconnaître un complexe peptide-CMH II.' },
      { text: 'Le LB présente des peptides antigéniques sur son CMH II à un TFH compatible.', correct: true, correction: 'Oui. Cette présentation permet la coopération cognate entre LB et TFH.' },
      { text: 'Le TFH apporte des signaux d\'aide, dont des cytokines, au LB.', correct: true, correction: 'Oui. Ces signaux favorisent la prolifération et la différenciation du LB.' },
      { text: 'La liaison de l\'antigène au BCR fournit un premier signal au LB.', correct: true, correction: 'Oui. Elle permet notamment la capture de l\'antigène reconnu.' },
    ],
    explanation: 'La coopération LB-TFH associe capture spécifique par le BCR, présentation peptide-CMH II et signaux d\'aide du LT. (Cours, p. 7.)'
  },
  {
    id: 45,
    type: 'QCM',
    question: 'Quelle propriété distingue principalement le plasmocyte du LB portant une immunoglobuline membranaire ?',
    options: [
      { text: 'Il sécrète de grandes quantités d\'anticorps solubles.', correct: true, correction: 'Oui. Le plasmocyte est le stade B spécialisé dans la sécrétion d\'anticorps.' },
      { text: 'Il remplace le CMH II par un CMH III qui présente des anticorps.', correct: false, correction: 'Non. Le CMH III n\'est pas un système de présentation d\'anticorps.' },
      { text: 'Il fabrique uniquement des anticorps fixés à sa propre membrane.', correct: false, correction: 'Non. La production d\'anticorps solubles est sa fonction caractéristique.' },
      { text: 'Il reconnaît les peptides sur CMH I au moyen d\'un TCR.', correct: false, correction: 'Non. Ce mode de reconnaissance relève des lymphocytes T CD8.' },
      { text: 'Il dérive exclusivement de lymphocytes T folliculaires.', correct: false, correction: 'Non. Le plasmocyte provient d\'un lymphocyte B.' },
    ],
    explanation: 'Après différenciation, le plasmocyte assure une sécrétion abondante d\'anticorps solubles. (Cours, p. 8.)'
  },
  {
    id: 46,
    type: 'QRM',
    question: 'Quels devenirs ou fonctions sont associés à l\'activation d\'un LB mature dans le cours ?',
    options: [
      { text: 'La production d\'anticorps solubles en grande quantité par les plasmocytes.', correct: true, correction: 'Oui. Cette fonction caractérise les plasmocytes issus des LB.' },
      { text: 'Une différenciation en plasmocyte producteur d\'anticorps.', correct: true, correction: 'Oui. C\'est une des issues majeures de la réponse B.' },
      { text: 'La formation de LB mémoire.', correct: true, correction: 'Oui. Ils participent à la réponse lors d\'une exposition ultérieure.' },
      { text: 'Une localisation obligatoire de tous les plasmocytes dans les seuls ganglions.', correct: false, correction: 'Non. Ils peuvent aussi résider, entre autres, dans la moelle osseuse.' },
      { text: 'La conversion obligatoire de tous les LB activés en LT CD8.', correct: false, correction: 'Non. Une cellule B ne devient pas un LT CD8.' },
    ],
    explanation: 'L\'activation des LB peut conduire à des plasmocytes sécréteurs et à des LB mémoire ; les plasmocytes ne se limitent pas aux ganglions. (Cours, p. 8.)'
  },
  {
    id: 47,
    type: 'QCM',
    question: 'Dans la reconnaissance liée dite « effet porteur », comment le LB et le TFH peuvent-ils coopérer ?',
    options: [
      { text: 'Le BCR et le TCR doivent reconnaître exactement le même épitope tridimensionnel libre.', correct: false, correction: 'Non. Le TCR reconnaît un peptide présenté sur CMH II, tandis que le BCR lie l\'antigène natif.' },
      { text: 'Le plasmocyte transmet son propre BCR au TFH pour que celui-ci devienne cytotoxique.', correct: false, correction: 'Non. Il n\'y a pas de transfert de BCR vers le TFH dans cette coopération.' },
      { text: 'Le TFH active chaque LB au hasard, sans présentation de peptide par celui-ci.', correct: false, correction: 'Non. L\'aide cognate repose sur la reconnaissance du peptide-CMH II porté par le LB.' },
      { text: 'Le LB lie un épitope natif, puis présente au TFH un peptide provenant de l\'antigène ou du complexe capturé.', correct: true, correction: 'Oui. L\'épitope reconnu par le BCR et le peptide reconnu par le TCR peuvent différer tout en étant liés.' },
      { text: 'Le LB doit présenter sur CMH I un peptide sans rapport avec ce qu\'il a capturé.', correct: false, correction: 'Non. Le LB présente sur CMH II des peptides issus du matériel qu\'il a internalisé.' },
    ],
    explanation: 'La reconnaissance liée permet à un LB spécifique d\'un épitope de recevoir l\'aide d\'un TFH spécifique d\'un autre peptide du même antigène ou complexe capturé. (Cours, p. 8.)'
  },
  {
    id: 48,
    type: 'QRM',
    question: 'À propos de l\'hypermutation somatique et de l\'affinité des anticorps, quelles propositions sont exactes ?',
    options: [
      { text: 'Elle est exactement la même étape que la recombinaison V(D)J initiale des précurseurs B.', correct: false, correction: 'Non. Ce sont deux mécanismes et deux moments distincts de diversification.' },
      { text: 'Des clones B dont le BCR a une meilleure affinité peuvent être sélectionnés.', correct: true, correction: 'Oui. La sélection après mutation contribue à la maturation d\'affinité.' },
      { text: 'L\'hypermutation somatique modifie les régions variables des gènes d\'immunoglobuline dans des LB activés.', correct: true, correction: 'Oui. Elle diversifie les BCR lors de la réponse B.' },
      { text: 'L\'aide des TFH participe au maintien et à la sélection des LB du centre germinatif.', correct: true, correction: 'Oui. Les signaux des TFH sont importants pour cette réponse B.' },
      { text: 'Elle transforme obligatoirement les TCR des TFH en BCR.', correct: false, correction: 'Non. Elle concerne les gènes d\'immunoglobuline des LB, pas la conversion des LT.' },
    ],
    explanation: 'Après activation, les LB peuvent subir des mutations des régions variables de l\'immunoglobuline ; la sélection de variants mieux adaptés augmente l\'affinité moyenne. (Cours, p. 7.)'
  },
  {
    id: 49,
    type: 'QCM',
    question: 'Comment une molécule de CMH peut-elle participer à des réponses T dirigées contre différents microbes ?',
    options: [
      { text: 'Elle reconnaît elle-même tous les antigènes solubles sans liaison à un peptide.', correct: false, correction: 'Non. Pour les LT αβ conventionnels, c\'est le complexe peptide-CMH qui constitue le ligand du TCR.' },
      { text: 'Elle convertit automatiquement chaque LT CD4 en LT CD8 lors d\'une nouvelle infection.', correct: false, correction: 'Non. La présentation d\'un autre peptide n\'impose pas une conversion de lignée CD4/CD8.' },
      { text: 'Elle n\'existe qu\'en un seul exemplaire et ne peut présenter qu\'un peptide durant toute la vie.', correct: false, correction: 'Non. Une molécule de CMH peut charger et présenter différents peptides au fil du temps.' },
      { text: 'Elle peut présenter des peptides différents, chacun formant avec elle un complexe potentiellement reconnu par un TCR.', correct: true, correction: 'Oui. Le motif reconnu combine une molécule de CMH et le peptide qu\'elle porte.' },
      { text: 'Elle se transforme en BCR propre à chaque microbe.', correct: false, correction: 'Non. Le CMH ne devient pas une immunoglobuline membranaire.' },
    ],
    explanation: 'Le CMH fournit un cadre de présentation, tandis que l\'identité du peptide participe à la spécificité du complexe reconnu. (Cours, p. 8.)'
  },
  {
    id: 50,
    type: 'QRM',
    question: 'Quelles conséquences ou fonctions des molécules du CMH sont abordées dans le cours ?',
    options: [
      { text: 'Leurs différences entre individus contribuent au rejet d\'une greffe d\'organe.', correct: true, correction: 'Oui. L\'alloréactivité explique une part importante du rejet.' },
      { text: 'La culture mixte lymphocytaire peut révéler une prolifération liée à l\'alloréactivité.', correct: true, correction: 'Oui. Le cours cite cette réaction parmi les manifestations de l\'alloréactivité.' },
      { text: 'Elles participent à la présentation des peptides reconnus par les LT.', correct: true, correction: 'Oui. Le TCR reconnaît l\'association peptide-CMH.' },
      { text: 'Une réponse dirigée contre les antigènes du receveur peut participer à la maladie du greffon contre l\'hôte.', correct: true, correction: 'Oui. Les cellules immunitaires du donneur peuvent attaquer le receveur.' },
      { text: 'Les molécules du CMH sont des anticorps solubles sécrétés par les plasmocytes.', correct: false, correction: 'Non. Ce sont des molécules de présentation à la surface cellulaire, pas des immunoglobulines solubles.' },
    ],
    explanation: 'Le CMH participe à la reconnaissance des antigènes par les LT et aux phénomènes d\'alloréactivité observés en greffe ou en culture. (Cours, p. 8.)'
  },
  {
    id: 51,
    type: 'QCM',
    question: 'Dans la maladie du greffon contre l\'hôte après allogreffe de cellules hématopoïétiques, qui attaque qui ?',
    options: [
      { text: 'Des lymphocytes B du receveur remplacent immédiatement tous les LT du donneur.', correct: false, correction: 'Non. Ce n\'est pas la direction ni le mécanisme de la maladie du greffon contre l\'hôte.' },
      { text: 'Le receveur détruit systématiquement le greffon sans réaction inverse possible.', correct: false, correction: 'Non. Cela décrit plutôt le rejet de greffe et ne rend pas compte de la réaction greffon contre hôte.' },
      { text: 'Les anticorps du placenta attaquent les cellules thymiques du donneur.', correct: false, correction: 'Non. Le placenta n\'intervient pas dans cette définition.' },
      { text: 'Les hématies du receveur détruisent exclusivement les plasmocytes du donneur.', correct: false, correction: 'Non. Le mécanisme principal est une réponse immunitaire de cellules du greffon contre l\'hôte.' },
      { text: 'Des cellules immunitaires du donneur attaquent des tissus du receveur.', correct: true, correction: 'Oui. C\'est le sens de la réaction du greffon contre l\'hôte.' },
    ],
    explanation: 'Dans cette alloréactivité particulière, le système immunitaire apporté par le greffon réagit contre les tissus du receveur. (Cours, p. 8.)'
  },
  {
    id: 52,
    type: 'QRM',
    question: 'Pourquoi un TFH déjà activé ne fournit-il pas nécessairement une aide cognate à tous les LB présents dans le ganglion ?',
    options: [
      { text: 'La diversité des BCR fait que seuls certains LB capturent efficacement l\'antigène concerné.', correct: true, correction: 'Oui. Chaque clone B a une spécificité propre ; les LB qui captent l\'antigène peuvent en présenter des peptides.' },
      { text: 'Le LB doit devenir un LT CD8 avant de recevoir l\'aide du TFH.', correct: false, correction: 'Non. Il demeure une cellule de la lignée B.' },
      { text: 'Chaque LB doit présenter au TFH un complexe peptide-CMH II que le TCR de ce TFH peut reconnaître.', correct: true, correction: 'Oui. L\'aide cognate dépend de la présentation du peptide pertinent par le LB.' },
      { text: 'Les cytokines du TFH remplacent toujours toute interaction spécifique entre TCR et CMH II.', correct: false, correction: 'Non. La coopération cognate implique cette reconnaissance et des signaux d\'aide.' },
      { text: 'Le TFH ne peut reconnaître qu\'un anticorps soluble sans aucune cellule présentatrice.', correct: false, correction: 'Non. Son TCR reconnaît un peptide sur CMH II porté notamment par un LB.' },
    ],
    explanation: 'L\'aide du TFH est ciblée par la reconnaissance du peptide-CMH II présenté par le LB qui a capturé l\'antigène associé. (Cours, p. 7.)'
  },
  {
    id: 53,
    type: 'QCM',
    question: 'Pourquoi le placenta représente-t-il un exemple particulier face à l\'alloréactivité ?',
    options: [
      { text: 'Il réalise la sélection positive de tous les lymphocytes T fœtaux.', correct: false, correction: 'Non. La sélection positive des LT se déroule dans le thymus.' },
      { text: 'Il supprime définitivement tous les LT cytotoxiques de la mère.', correct: false, correction: 'Non. La grossesse n\'abolit pas toute l\'immunité cytotoxique maternelle.' },
      { text: 'Il participe à des mécanismes de tolérance limitant la réaction immunitaire maternelle contre l\'interface fœto-maternelle.', correct: true, correction: 'Oui. Le cours souligne que la grossesse exige de limiter l\'attaque par les LT maternels.' },
      { text: 'Il transforme le CMH fœtal en anticorps soluble non reconnu par les cellules maternelles.', correct: false, correction: 'Non. Le CMH ne devient pas un anticorps.' },
      { text: 'Il garantit que tous les antigènes fœtaux sont génétiquement identiques à ceux de la mère.', correct: false, correction: 'Non. Le fœtus possède aussi des antigènes hérités du père.' },
    ],
    explanation: 'La persistance du fœtus malgré ses différences génétiques avec la mère suppose des mécanismes de tolérance à l\'interface placentaire. (Cours, p. 9.)'
  },
  {
    id: 54,
    type: 'QRM',
    question: 'Un LB conserve son BCR fonctionnel mais n\'exprime plus le CMH de classe II. Dans une réponse dépendante des TFH, quelles conséquences sont attendues ?',
    options: [
      { text: 'Son BCR se transforme automatiquement en TCR pour compenser l\'absence de CMH II.', correct: false, correction: 'Non. Les récepteurs B et T ne se convertissent pas l\'un en l\'autre.' },
      { text: 'Il peut encore lier l\'antigène natif reconnu par son BCR.', correct: true, correction: 'Oui. La liaison initiale au BCR n\'exige pas le CMH II.' },
      { text: 'La coopération cognate avec un TFH reconnaissant le peptide-CMH II est compromise.', correct: true, correction: 'Oui. Sans CMH II sur ce LB, le TFH ne peut pas y reconnaître ce complexe.' },
      { text: 'Il présente nécessairement les mêmes peptides au TFH sur un anticorps soluble.', correct: false, correction: 'Non. La présentation au TCR du TFH passe par le CMH II, pas par l\'anticorps soluble.' },
      { text: 'Il peut encore internaliser l\'antigène lié à son BCR.', correct: true, correction: 'Oui. La capture par le BCR reste possible.' },
    ],
    explanation: 'La capture par le BCR et la présentation par le CMH II sont deux étapes distinctes de la coopération LB-TFH. (Cours, p. 7.)'
  },
  {
    id: 55,
    type: 'QCM',
    question: 'Deux clones B d\'un centre germinatif diffèrent par l\'affinité de leur BCR pour le même antigène disponible en quantité limitée. Quel clone est le plus susceptible de capter l\'antigène et de recevoir l\'aide des TFH ?',
    options: [
      { text: 'Toujours celui dont le BCR a la plus faible affinité.', correct: false, correction: 'Non. Une faible affinité désavantage généralement la capture de l\'antigène limité.' },
      { text: 'Le clone dont le BCR a la meilleure affinité pour cet antigène.', correct: true, correction: 'Oui. Dans cette compétition, il capte plus efficacement l\'antigène et peut en présenter davantage aux TFH.' },
      { text: 'Les deux obligatoirement à égalité, car l\'hypermutation ne modifie jamais l\'affinité.', correct: false, correction: 'Non. L\'hypermutation peut créer des BCR d\'affinités différentes.' },
      { text: 'Le clone qui ne possède plus de BCR ni de CMH II.', correct: false, correction: 'Non. Il ne capterait pas spécifiquement l\'antigène ni ne présenterait le peptide au TFH.' },
      { text: 'Le clone qui porte un TCR CD8 à la place de son BCR.', correct: false, correction: 'Non. Un clone B ne devient pas un LT CD8 pour participer à la maturation d\'affinité.' },
    ],
    explanation: 'L\'hypermutation produit des variants ; la compétition pour l\'antigène et l\'aide des TFH favorise les clones B de meilleure affinité. (Cours, p. 7.)'
  },
  {
    id: 56,
    type: 'QRM',
    question: 'Si l\'aide des TFH manque pendant une réponse humorale dépendante des LT, quelles propositions sont cohérentes ?',
    options: [
      { text: 'Tous les LB deviennent automatiquement des plasmocytes sécréteurs de haute affinité.', correct: false, correction: 'Non. L\'absence d\'aide T ne garantit pas cette différenciation.' },
      { text: 'La capture de l\'antigène par le BCR peut toujours avoir lieu.', correct: true, correction: 'Oui. Elle ne dépend pas de la présence immédiate d\'un TFH.' },
      { text: 'Les LT CD4 remplacent l\'immunoglobuline membranaire comme récepteur de tous les LB.', correct: false, correction: 'Non. Les LB conservent leurs récepteurs de la lignée B.' },
      { text: 'La liaison de l\'antigène au BCR peut toujours fournir un premier signal au LB.', correct: true, correction: 'Oui. La reconnaissance BCR-antigène précède et se distingue de l\'aide T.' },
      { text: 'La différenciation et la maturation d\'affinité associées à cette coopération T-dépendante sont entravées.', correct: true, correction: 'Oui. Les signaux d\'aide des TFH soutiennent ces étapes.' },
    ],
    explanation: 'Le signal apporté par le BCR ne remplace pas les signaux d\'aide nécessaires à une réponse B T-dépendante complète. (Cours, p. 7.)'
  },
  {
    id: 57,
    type: 'QCM',
    question: 'Pourquoi les molécules du CMH portent-elles le nom de « complexe majeur d\'histocompatibilité » ?',
    options: [
      { text: 'Elles rendent systématiquement compatibles deux individus de la même espèce.', correct: false, correction: 'Non. Leur polymorphisme est au contraire une source d\'incompatibilité.' },
      { text: 'Elles sont les anticorps les plus abondants du plasma.', correct: false, correction: 'Non. Les molécules du CMH ne sont pas des anticorps.' },
      { text: 'Elles ont été identifiées par leur rôle majeur dans la compatibilité et le rejet des greffes.', correct: true, correction: 'Oui. Le cours rappelle ce contexte historique de leur découverte.' },
      { text: 'Elles ne sont exprimées que dans le placenta pendant la grossesse.', correct: false, correction: 'Non. Leur expression dépasse largement le placenta.' },
      { text: 'Elles sont produites uniquement par les plasmocytes après une infection.', correct: false, correction: 'Non. Ce sont des molécules de présentation portées par les cellules, pas des anticorps sécrétés.' },
    ],
    explanation: 'Leur nom vient de leur importance initialement révélée dans les réactions de greffe et de rejet. (Cours, p. 8.)'
  },
  {
    id: 58,
    type: 'QRM',
    question: 'À l\'interface materno-fœtale, quelles propositions rendent compte du problème immunologique soulevé par le cours ?',
    options: [
      { text: 'Des mécanismes placentaires et locaux contribuent à limiter une attaque immunitaire maternelle.', correct: true, correction: 'Oui. Le cours souligne cette nécessité pour permettre la grossesse.' },
      { text: 'La grossesse suppose que les LT maternels aient été intégralement supprimés dans le thymus.', correct: false, correction: 'Non. La mère conserve des LT fonctionnels.' },
      { text: 'Le placenta garantit que tous les CMH fœtaux deviennent identiques aux CMH maternels.', correct: false, correction: 'Non. La tolérance n\'est pas obtenue par une identité génétique complète.' },
      { text: 'La tolérance locale n\'exige pas l\'abolition de toute immunité de la mère.', correct: true, correction: 'Oui. Il s\'agit d\'une régulation à l\'interface, pas d\'une disparition générale de l\'immunité.' },
      { text: 'Le fœtus peut porter des variantes antigéniques héritées du père qui diffèrent de celles de la mère.', correct: true, correction: 'Oui. Il n\'est pas génétiquement identique à la mère.' },
    ],
    explanation: 'La grossesse associe différence génétique fœto-maternelle et mécanismes de tolérance locaux à l\'interface placentaire. (Cours, p. 9.)'
  },
  {
    id: 59,
    type: 'QCM',
    question: 'Une culture mixte lymphocytaire montre une prolifération importante. Quelle conclusion peut-on en tirer sans extrapoler ?',
    options: [
      { text: 'Les plasmocytes sont les seules cellules capables de proliférer dans cet essai.', correct: false, correction: 'Non. L\'essai met en évidence une prolifération lymphocytaire, notamment T.' },
      { text: 'Les cellules des deux personnes ont forcément un CMH identique.', correct: false, correction: 'Non. Des différences allogéniques peuvent contribuer à la réaction.' },
      { text: 'Le rejet d\'un greffon d\'organe est certain chez chaque receveur, quelles que soient les autres conditions.', correct: false, correction: 'Non. Une réaction in vitro ne prédit pas à elle seule tous les événements cliniques.' },
      { text: 'Une infection virale est nécessairement présente dans les deux prélèvements.', correct: false, correction: 'Non. La réaction peut être allogénique sans infection.' },
      { text: 'Des lymphocytes ont réagi in vitro aux cellules allogéniques mises en présence.', correct: true, correction: 'Oui. La prolifération montre une réponse dans les conditions de ce test.' },
    ],
    explanation: 'La MLR mesure une prolifération in vitro liée à l\'alloréactivité ; elle ne suffit pas à prédire avec certitude l\'issue clinique d\'une greffe. (Cours, p. 8.)'
  },
  {
    id: 60,
    type: 'QRM',
    question: 'Un LB reconnaît un petit déterminant fixé à une protéine porteuse. Quelles étapes illustrent correctement l\'« effet porteur » ?',
    options: [
      { text: 'Le LB peut internaliser le complexe et présenter sur CMH II un peptide de la protéine porteuse.', correct: true, correction: 'Oui. Le peptide présenté au TFH peut provenir de la protéine associée au déterminant reconnu par le BCR.' },
      { text: 'Un TFH spécifique de ce peptide porté par le CMH II peut aider le LB.', correct: true, correction: 'Oui. Il s\'agit d\'une coopération T-B liée.' },
      { text: 'L\'anticorps finalement sécrété peut être dirigé contre le déterminant initialement reconnu par le BCR.', correct: true, correction: 'Oui. La spécificité B n\'a pas à être identique à celle du peptide reconnu par le TFH.' },
      { text: 'Le TCR du TFH doit reconnaître directement le déterminant libre sous sa forme tridimensionnelle.', correct: false, correction: 'Non. Le TCR du TFH reconnaît un peptide présenté sur CMH II.' },
      { text: 'Le BCR du LB peut lier le déterminant dans le complexe intact.', correct: true, correction: 'Oui. Il reconnaît son épitope sur le complexe avant l\'internalisation.' },
    ],
    explanation: 'Dans la reconnaissance liée, les épitopes reconnus par le BCR et par le TCR peuvent être différents tout en appartenant au même complexe capturé. (Cours, p. 8.)'
  },
  {
    id: 61,
    type: 'QCM',
    question: 'Quelle cellule du thymus joue le rôle principal dans la sélection positive des thymocytes αβ au niveau cortical ?',
    options: [
      { text: 'Le lymphocyte B mémoire du ganglion', correct: false, correction: 'Non. La sélection positive a lieu dans le thymus, surtout auprès de son épithélium cortical.' },
      { text: 'Le fibroblaste infecté par le LCMV dans la rate', correct: false, correction: 'Non. C\'est une cible expérimentale périphérique, pas la cellule de sélection positive thymique.' },
      { text: 'Le globule rouge dépourvu de CMH', correct: false, correction: 'Non. Un globule rouge mature ne présente pas les complexes peptide–CMH requis.' },
      { text: 'La cellule épithéliale thymique corticale présentant des complexes peptide–CMH du soi', correct: true, correction: 'Oui. Les thymocytes double positifs testent leur aptitude à reconnaître le CMH du soi sur ces cellules corticales.' },
      { text: 'Le plasmocyte produisant des anticorps anti-CMH', correct: false, correction: 'Non. Le plasmocyte n\'est pas l\'acteur de la sélection positive thymique.' },
    ],
    explanation: 'La sélection positive dans le cortex conserve les thymocytes dont le TCR peut reconnaître un complexe peptide–CMH du soi avec une intensité appropriée. (Cours, p. 9)'
  },
  {
    id: 62,
    type: 'QRM',
    question: 'Au stade double positif et pendant la sélection positive, quelles propositions sont exactes ?',
    options: [
      { text: 'La sélection positive recherche d\'abord la plus forte auto-réactivité possible', correct: false, correction: 'Non. Une auto-réactivité forte soulève plutôt le problème de la sélection négative.' },
      { text: 'Le thymocyte immature exprime à la fois CD4 et CD8', correct: true, correction: 'Oui. Le cours décrit le stade cortical CD4+CD8+ avant l\'engagement dans une lignée.' },
      { text: 'L\'absence de reconnaissance utile du CMH du soi conduit à une mort par défaut de signal de survie', correct: true, correction: 'Oui. C\'est la mort par négligence des clones non sélectionnés.' },
      { text: 'Tous les thymocytes double positifs deviennent simultanément des LT CD4+ et CD8+ périphériques', correct: false, correction: 'Non. Les LT αβ conventionnels matures deviennent en règle générale simples positifs.' },
      { text: 'Un TCR capable d\'interagir avec le CMH du soi peut recevoir un signal de survie', correct: true, correction: 'Oui. Cette interaction est au cœur de la sélection positive.' },
    ],
    explanation: 'La sélection positive teste la reconnaissance du CMH du soi chez les thymocytes CD4+CD8+ et autorise la survie de ceux qui y répondent de façon appropriée. (Cours, p. 9)'
  },
  {
    id: 63,
    type: 'QCM',
    question: 'À quoi correspond l\'ordre de grandeur 10¹⁵ mentionné dans la section sur la diversité des lymphocytes T ?',
    options: [
      { text: 'Au nombre de clones autoréactifs qui échappent obligatoirement à la sélection négative', correct: false, correction: 'Non. Le cours ne donne pas ce nombre pour les clones autoréactifs survivants.' },
      { text: 'Au nombre de molécules du CMH différentes exprimées par une seule cellule', correct: false, correction: 'Non. Le chiffre illustre la diversité théorique des récepteurs antigéniques, pas celle des CMH d\'une cellule.' },
      { text: 'Au nombre exact de lymphocytes T matures présents chez chaque individu', correct: false, correction: 'Non. Une diversité potentielle ne correspond pas au nombre de cellules effectivement présentes.' },
      { text: 'À la quantité de virus LCMV nécessaire pour infecter un fibroblaste', correct: false, correction: 'Non. Ce nombre n\'est pas une dose infectieuse expérimentale.' },
      { text: 'À une estimation théorique de la diversité potentielle des récepteurs T issue des recombinaisons génétiques', correct: true, correction: 'Oui. Les réarrangements des gènes du TCR peuvent créer un répertoire théorique immense, avant le tri thymique.' },
    ],
    explanation: 'Le cours cite 10¹⁵ comme ordre de grandeur de la diversité théorique générée par recombinaison ; cela ne signifie pas que tous ces récepteurs existent ou survivent chez une personne. (Cours, p. 9)'
  },
  {
    id: 64,
    type: 'QRM',
    question: 'Concernant l\'orientation CD4/CD8 après sélection positive, quelles associations sont correctes pour les LT αβ conventionnels ?',
    options: [
      { text: 'Maturation conventionnelle : perte d\'un des deux corécepteurs CD4/CD8', correct: true, correction: 'Oui. Le stade double positif précède un état simple positif.' },
      { text: 'Absence de toute interaction avec le CMH : maturation spontanée en LT CD8', correct: false, correction: 'Non. Le clone sans reconnaissance appropriée n\'est pas sélectionné positivement.' },
      { text: 'Reconnaissance du CMH II : orientation vers la lignée CD4', correct: true, correction: 'Oui. C\'est le devenir classique du thymocyte sélectionné sur le CMH II.' },
      { text: 'Reconnaissance du CMH I : orientation vers la lignée CD8', correct: true, correction: 'Oui. Le cours relie la reconnaissance du CMH I au devenir CD8 simple positif.' },
      { text: 'Reconnaissance du CMH I : orientation obligatoire vers la lignée CD4', correct: false, correction: 'Non. Le couplage habituel est CMH I–CD8.' },
    ],
    explanation: 'Le choix de lignée suit principalement la classe du CMH du soi reconnue : CMH I–CD8, CMH II–CD4. (Cours, p. 9)'
  },
  {
    id: 65,
    type: 'QCM',
    question: 'Quel est l\'objectif principal de la sélection négative thymique ?',
    options: [
      { text: 'Réduire la sortie de clones dont le TCR réagit trop fortement à des complexes peptide du soi–CMH du soi', correct: true, correction: 'Oui. Ces clones risqueraient d\'endommager les tissus du soi.' },
      { text: 'Rendre le CMH identique chez tous les individus d\'une espèce', correct: false, correction: 'Non. La sélection thymique n\'abolit pas le polymorphisme du CMH.' },
      { text: 'Sélectionner uniquement les LT capables de reconnaître un virus déjà rencontré', correct: false, correction: 'Non. Les thymocytes sont sélectionnés avant toute rencontre nécessaire avec ce virus.' },
      { text: 'Éliminer tous les LT qui reconnaissent faiblement le CMH du soi', correct: false, correction: 'Non. Une certaine reconnaissance du CMH du soi est nécessaire à la sélection positive.' },
      { text: 'Créer les anticorps de haute affinité par hypermutation somatique', correct: false, correction: 'Non. L\'hypermutation somatique concerne les LB activés, pas la sélection négative des thymocytes.' },
    ],
    explanation: 'La sélection négative contribue à la tolérance centrale en éliminant une partie des clones fortement autoréactifs. (Cours, p. 9-10)'
  },
  {
    id: 66,
    type: 'QRM',
    question: 'À propos des lieux et du principe de la sélection négative, quelles propositions sont exactes ?',
    options: [
      { text: 'Elle peut débuter dans le cortex pour certains antigènes du soi largement exprimés', correct: true, correction: 'Oui. Le cours précise que la délétion n\'est pas limitée à la médulla.' },
      { text: 'La sélection négative se déroule seulement dans la rate après chaque infection', correct: false, correction: 'Non. Le cours traite ici d\'une sélection centrale, thymique.' },
      { text: 'La médulla est un site majeur de contrôle envers des antigènes du soi propres à certains tissus', correct: true, correction: 'Oui. Les antigènes tissulaires peuvent y être exprimés et présentés.' },
      { text: 'Une forte interaction avec un peptide du soi présenté par le CMH du soi peut conduire à la délétion clonale', correct: true, correction: 'Oui. L\'intensité de reconnaissance participe au tri des clones dangereux.' },
      { text: 'Elle supprime avec certitude tous les LT autoréactifs de l\'organisme', correct: false, correction: 'Non. La tolérance centrale est incomplète et des contrôles périphériques restent utiles.' },
    ],
    explanation: 'Le schéma pédagogique oppose surtout cortex et médulla, mais la sélection négative peut aussi commencer dans le cortex. (Cours, p. 10-11)'
  },
  {
    id: 67,
    type: 'QCM',
    question: 'Quel est le rôle d\'AIRE dans la médulla thymique ?',
    options: [
      { text: 'Supprimer le polymorphisme des molécules du CMH', correct: false, correction: 'Non. Il ne rend pas les CMH individuels identiques.' },
      { text: 'Remplacer entièrement la sélection positive corticale', correct: false, correction: 'Non. L\'expression d\'antigènes tissulaires médullaires s\'inscrit surtout dans la tolérance centrale.' },
      { text: 'Favoriser l\'expression de nombreux antigènes normalement restreints à des tissus périphériques dans des cellules épithéliales médullaires', correct: true, correction: 'Oui. AIRE aide à rendre visibles au thymus des antigènes du soi tels que certains antigènes tissulaires.' },
      { text: 'Transformer les cellules dendritiques en globules rouges', correct: false, correction: 'Non. AIRE régule l\'expression d\'antigènes du soi dans les cellules épithéliales thymiques médullaires.' },
      { text: 'Coder directement le TCR de chaque thymocyte', correct: false, correction: 'Non. La diversité du TCR provient principalement du réarrangement des gènes de récepteur.' },
    ],
    explanation: 'Le « régulateur » décrit dans le poly correspond à AIRE, qui favorise l\'expression thymique d\'antigènes du soi spécifiques de tissus. (Cours, p. 10-11)'
  },
  {
    id: 68,
    type: 'QRM',
    question: 'Comment les antigènes tissulaires peuvent-ils participer à la tolérance centrale dans la médulla ?',
    options: [
      { text: 'Des cellules dendritiques thymiques peuvent capter certains antigènes issus de ces cellules épithéliales et les présenter', correct: true, correction: 'Oui. Le transfert d\'antigène augmente les voies de présentation du soi.' },
      { text: 'AIRE est un peptide viral directement injecté dans chaque thymocyte', correct: false, correction: 'Non. AIRE est un régulateur de l\'expression de gènes dans des cellules épithéliales thymiques.' },
      { text: 'Des cellules épithéliales médullaires peuvent exprimer des antigènes normalement associés à d\'autres tissus', correct: true, correction: 'Oui. C\'est une composante de la présentation élargie du soi dans le thymus.' },
      { text: 'Cette présentation peut favoriser la délétion de clones très autoréactifs', correct: true, correction: 'Oui. Elle permet au TCR de rencontrer des antigènes potentiellement dangereux s\'il les reconnaît fortement.' },
      { text: 'Seules les cellules dendritiques expriment AIRE et fabriquent toutes les protéines tissulaires', correct: false, correction: 'Non. Les cellules épithéliales thymiques médullaires sont un site majeur de l\'action d\'AIRE.' },
    ],
    explanation: 'L\'expression des antigènes tissulaires par les cellules épithéliales médullaires et leur présentation directe ou après transfert aux cellules dendritiques contribuent à la tolérance centrale. (Cours, p. 10-11)'
  },
  {
    id: 69,
    type: 'QCM',
    question: 'Pourquoi le cours cite-t-il l\'insuline à propos de la médulla thymique ?',
    options: [
      { text: 'Pour définir l\'insuline comme un allogène propre aux greffons', correct: false, correction: 'Non. L\'insuline est une protéine du soi et non, par nature, un marqueur allogénique.' },
      { text: 'Pour montrer que les thymocytes sécrètent l\'insuline circulante à la place du pancréas', correct: false, correction: 'Non. Le thymus ne remplace pas la fonction endocrine du pancréas.' },
      { text: 'Pour illustrer la présentation thymique possible d\'un antigène du soi principalement associé à un tissu périphérique', correct: true, correction: 'Oui. Un tel antigène aide à tester des clones potentiellement dirigés contre le soi.' },
      { text: 'Pour prouver que toute réponse anti-insuline est déclenchée par un virus', correct: false, correction: 'Non. L\'exemple concerne la tolérance au soi, pas une causalité virale universelle.' },
      { text: 'Pour affirmer que l\'insuline n\'est jamais exprimée dans le thymus', correct: false, correction: 'Non. L\'intérêt de l\'exemple est précisément sa représentation intrathymique.' },
    ],
    explanation: 'La présentation intrathymique d\'antigènes associés à des tissus périphériques, dont l\'insuline, aide à éliminer certains clones auto-réactifs. (Cours, p. 10-11)'
  },
  {
    id: 70,
    type: 'QRM',
    question: 'Que décrit l\'exemple de test de cytotoxicité contre des cellules P815 cité en fin de cours ?',
    options: [
      { text: 'Une mesure qui démontre à elle seule la durée de survie d\'une greffe chez un patient', correct: false, correction: 'Non. L\'essai in vitro renseigne sur une fonction cytotoxique, sans prédire à lui seul un résultat clinique.' },
      { text: 'Une immunisation préalable in vivo des animaux contre des cellules tumorales allogéniques', correct: true, correction: 'Oui. C\'est la phase de sensibilisation des animaux avant le prélèvement cellulaire.' },
      { text: 'Une sélection positive de thymocytes naïfs directement effectuée par P815', correct: false, correction: 'Non. P815 est ici une cible de l\'essai de cytotoxicité, pas une cellule épithéliale thymique.' },
      { text: 'Une épreuve in vitro de cytotoxicité sur des cellules cibles P815', correct: true, correction: 'Oui. Les cellules P815 servent de cibles pour mesurer la réponse cytotoxique.' },
      { text: 'L\'utilisation ultérieure de splénocytes issus de ces animaux comme préparation effectrice', correct: true, correction: 'Oui. Les splénocytes sensibilisés sont mis à l\'épreuve dans l\'essai.' },
    ],
    explanation: 'Le schéma cité part d\'une immunisation allogénique in vivo, puis mesure in vitro la cytotoxicité des splénocytes contre des cellules P815. (Cours, p. 12)'
  },
  {
    id: 71,
    type: 'QCM',
    question: 'Quel autre destin thymique, en plus de la délétion clonale, participe à la maîtrise de l\'autoréactivité ?',
    options: [
      { text: 'La conversion de chaque clone autoréactif en LT mémoire antiviral', correct: false, correction: 'Non. Les clones autoréactifs n\'acquièrent pas automatiquement une spécificité virale utile.' },
      { text: 'La disparition totale des cellules dendritiques de la médulla', correct: false, correction: 'Non. Elles contribuent à la présentation d\'antigènes du soi.' },
      { text: 'La conversion systématique des LT CD8 en plasmocytes', correct: false, correction: 'Non. Les plasmocytes proviennent de la lignée B.' },
      { text: 'La transformation de tous les peptides du soi en antigènes viraux', correct: false, correction: 'Non. La tolérance n\'exige pas de modifier les peptides du soi.' },
      { text: 'La différenciation d\'une fraction de thymocytes en lymphocytes T régulateurs', correct: true, correction: 'Oui. Les Treg contribuent ensuite à contenir les réponses dirigées contre le soi.' },
    ],
    explanation: 'Le cours souligne le rôle de LT régulateurs issus du thymus, complémentaires de la délétion clonale dans le contrôle du soi. (Cours, p. 11)'
  },
  {
    id: 72,
    type: 'QRM',
    question: 'Quelles conclusions sur la tolérance au soi découlent du cours ?',
    options: [
      { text: 'La présence de LT régulateurs démontre que les cellules du soi ne portent aucun antigène', correct: false, correction: 'Non. Leur régulation a justement du sens parce que des antigènes du soi peuvent être reconnus.' },
      { text: 'Des mécanismes régulateurs restent utiles après la sortie des LT du thymus', correct: true, correction: 'Oui. La tolérance périphérique limite les réponses inappropriées des clones ayant échappé au tri.' },
      { text: 'Un LT mature n\'a plus jamais besoin de présenter ou voir un peptide avec un CMH', correct: false, correction: 'Non. La reconnaissance peptide–CMH reste fondamentale pour les LT αβ conventionnels.' },
      { text: 'La sélection thymique élimine de nombreux clones fortement autoréactifs, mais pas nécessairement tous', correct: true, correction: 'Oui. La délétion clonale ne représente pas une garantie absolue.' },
      { text: 'La sélection positive et la sélection négative répondent à des problèmes différents', correct: true, correction: 'Oui. L\'une préserve la reconnaissance utile du CMH du soi, l\'autre limite l\'auto-réactivité excessive.' },
    ],
    explanation: 'La tolérance centrale combine sélection positive et élimination de nombreux clones dangereux, sans abolir toute auto-réactivité ; des régulations périphériques complètent ce tri. (Cours, p. 9-11)'
  },
  {
    id: 73,
    type: 'QCM',
    question: 'Dans le cours, que désigne l\'alloréactivité ?',
    options: [
      { text: 'L\'activation immunitaire envers des motifs allogéniques provenant d\'un autre individu de la même espèce', correct: true, correction: 'Oui. Elle peut contribuer au rejet d\'un greffon et être étudiée in vitro.' },
      { text: 'Une réaction strictement dirigée contre les cellules d\'un individu lui-même', correct: false, correction: 'Non. Il s\'agirait d\'auto-réactivité, et non d\'alloréactivité.' },
      { text: 'La fabrication d\'anticorps uniquement après vaccination', correct: false, correction: 'Non. L\'alloréactivité est liée aux motifs d\'un donneur génétiquement différent.' },
      { text: 'La réponse aux seuls microbes transmis par des insectes', correct: false, correction: 'Non. Le terme concerne le soi et le non-soi entre individus d\'une même espèce.' },
      { text: 'La reconnaissance d\'un antigène uniquement entre espèces différentes', correct: false, correction: 'Non. Une différence d\'espèce relève de la xénogreffe.' },
    ],
    explanation: 'L\'alloréactivité correspond à une réponse envers des déterminants d\'un autre individu de la même espèce, avec le CMH parmi les cibles majeures. (Cours, p. 11)'
  },
  {
    id: 74,
    type: 'QRM',
    question: 'Quelles définitions de greffe sont correctes ?',
    options: [
      { text: 'Isogreffe : donneur et receveur sont génétiquement identiques', correct: true, correction: 'Oui. Des animaux d\'une même lignée consanguine peuvent servir à ce contrôle.' },
      { text: 'Autogreffe : donneur et receveur sont le même individu', correct: true, correction: 'Oui. Le tissu est prélevé puis greffé chez la même personne ou le même animal.' },
      { text: 'Allogreffe : donneur et receveur sont distincts, de la même espèce et non génétiquement identiques', correct: true, correction: 'Oui. C\'est le cadre où les différences allogéniques peuvent susciter un rejet.' },
      { text: 'Xénogreffe : deux individus différents mais obligatoirement de la même espèce', correct: false, correction: 'Non. Une xénogreffe franchit une frontière d\'espèce.' },
      { text: 'Autogreffe : un animal donne un organe à une autre espèce', correct: false, correction: 'Non. Ce serait une xénogreffe, pas une autogreffe.' },
    ],
    explanation: 'Le poly distingue la relation entre donneur et receveur : soi-même, identiques, même espèce différente, ou espèces différentes. (Cours, p. 11)'
  },
  {
    id: 75,
    type: 'QCM',
    question: 'Pourquoi une isogreffe est-elle un contrôle pertinent dans une expérience sur le rejet d\'allogreffe ?',
    options: [
      { text: 'Elle introduit volontairement plus d\'incompatibilités CMH qu\'une allogreffe', correct: false, correction: 'Non. C\'est précisément le contrôle sans différence génétique majeure.' },
      { text: 'Elle mesure exclusivement la production d\'anticorps anti-virus', correct: false, correction: 'Non. Le contrôle porte sur les effets propres de la greffe et des incompatibilités.' },
      { text: 'Elle aide à séparer les effets du geste de greffe et de l\'ischémie des effets liés aux différences génétiques donneur–receveur', correct: true, correction: 'Oui. Un greffon isogénique subit la procédure sans incompatibilité allogénique majeure.' },
      { text: 'Elle rend le donneur et le receveur d\'espèces différentes', correct: false, correction: 'Non. Ils sont génétiquement identiques au sein d\'une même espèce.' },
      { text: 'Elle garantit qu\'aucune lésion chirurgicale ou inflammatoire ne survient', correct: false, correction: 'Non. Les tissus peuvent souffrir de l\'intervention même en l\'absence d\'alloréactivité.' },
    ],
    explanation: 'Une isogreffe fournit un comparateur utile : le prélèvement et la reperfusion peuvent causer des lésions même sans incompatibilité allogénique. (Cours, p. 11)'
  },
  {
    id: 76,
    type: 'QRM',
    question: 'Concernant les deux essais in vitro cités pour étudier l\'alloréactivité, quelles propositions sont exactes ?',
    options: [
      { text: 'Ces essais peuvent explorer des réponses déclenchées par des différences allogéniques', correct: true, correction: 'Oui. Ils sont cités dans la définition expérimentale de l\'alloréactivité.' },
      { text: 'La culture mixte lymphocytaire (MLR) met notamment en évidence une prolifération de lymphocytes répondants', correct: true, correction: 'Oui. Le cours décrit la prolifération comme son résultat typique.' },
      { text: 'La MLR ne peut être réalisée que dans un animal vivant', correct: false, correction: 'Non. La culture mixte lymphocytaire est précisément un essai in vitro.' },
      { text: 'La cytotoxicité médiée par les lymphocytes (CML) étudie la capacité à lyser des cibles', correct: true, correction: 'Oui. C\'est une mesure fonctionnelle de cytotoxicité.' },
      { text: 'La CML prouve à elle seule qu\'une greffe est toujours acceptée in vivo', correct: false, correction: 'Non. Une lyse in vitro ne démontre pas une acceptation clinique ; elle témoigne plutôt d\'une cytotoxicité mesurable.' },
    ],
    explanation: 'La MLR renseigne sur la prolifération alloréactive, tandis que la CML renseigne sur la lyse de cellules cibles. (Cours, p. 8 et 11)'
  },
  {
    id: 77,
    type: 'QCM',
    question: 'Quelle caractéristique du CMH explique sa place importante parmi les cibles de l\'alloréactivité ?',
    options: [
      { text: 'Sa fonction unique de produire des immunoglobulines', correct: false, correction: 'Non. Les molécules du CMH présentent des peptides ; elles ne sont pas des anticorps.' },
      { text: 'Son expression uniquement après une infection par le LCMV', correct: false, correction: 'Non. Le CMH existe indépendamment de ce virus.' },
      { text: 'Son fort polymorphisme entre individus d\'une même espèce', correct: true, correction: 'Oui. Des variantes différentes peuvent être reconnues comme allogéniques.' },
      { text: 'Son identité de séquence chez tous les individus sans exception', correct: false, correction: 'Non. Le CMH est au contraire fortement polymorphe.' },
      { text: 'Son absence de la surface de toutes les cellules nucléées', correct: false, correction: 'Non. Le CMH I est largement exprimé sur les cellules nucléées.' },
    ],
    explanation: 'Les différences de CMH entre individus sont une source majeure de reconnaissance allogénique et de rejet. (Cours, p. 8 et 11)'
  },
  {
    id: 78,
    type: 'QRM',
    question: 'À propos du « non-soi » dans une greffe au sein de la même espèce, quelles propositions sont exactes ?',
    options: [
      { text: 'Il peut correspondre à des variantes polymorphes d\'une protéine présente chez les deux individus', correct: true, correction: 'Oui. La structure différente peut rendre le motif allogénique.' },
      { text: 'Il peut correspondre à un antigène présent chez le donneur et absent chez le receveur', correct: true, correction: 'Oui. C\'est un cas de différence antigénique donneur–receveur.' },
      { text: 'Il exige nécessairement un agent infectieux dans le greffon', correct: false, correction: 'Non. Les incompatibilités génétiques suffisent à créer un non-soi allogénique.' },
      { text: 'Il disparaît automatiquement parce que les individus appartiennent à la même espèce', correct: false, correction: 'Non. Une allogreffe, par définition, peut confronter des individus de la même espèce génétiquement différents.' },
      { text: 'Les différences de CMH en sont un exemple majeur', correct: true, correction: 'Oui. Le CMH est très polymorphe et fortement immunogène.' },
    ],
    explanation: 'Le non-soi allogénique résulte de différences antigéniques entre donneur et receveur, avec le CMH comme cible majeure. (Cours, p. 11)'
  },
  {
    id: 79,
    type: 'QCM',
    question: 'Pourquoi un LT sélectionné sur le CMH du soi peut-il néanmoins répondre à un CMH allogénique ?',
    options: [
      { text: 'La greffe transforme nécessairement chaque antigène du soi en anticorps', correct: false, correction: 'Non. La réponse allogénique implique la reconnaissance d\'antigènes, notamment par des LT, pas cette transformation.' },
      { text: 'Certains TCR ont une réactivité croisée envers des complexes peptide–CMH allogéniques non rencontrés lors de la sélection thymique', correct: true, correction: 'Oui. La sélection sur le soi n\'interdit pas toute reconnaissance croisée d\'un CMH différent.' },
      { text: 'Le LT change automatiquement de TCR au moment de la greffe', correct: false, correction: 'Non. Une réactivité croisée du répertoire existant suffit à expliquer la réponse.' },
      { text: 'Le CMH allogénique est toujours identique au CMH du soi', correct: false, correction: 'Non. Il est justement susceptible d\'être polymorphe.' },
      { text: 'La sélection thymique teste au préalable tous les CMH de tous les donneurs possibles', correct: false, correction: 'Non. Elle se déroule dans l\'environnement thymique de l\'individu.' },
    ],
    explanation: 'La sélection thymique établit la restriction au CMH du soi et la tolérance envers le soi, mais elle n\'exclut pas la reconnaissance croisée de complexes allogéniques. (Cours, p. 8-10)'
  },
  {
    id: 80,
    type: 'QRM',
    question: 'Quelles relations entre restriction au CMH, éducation thymique et greffe résument correctement ce cours ?',
    options: [
      { text: 'La sélection thymique rend tout greffon allogénique forcément invisible au système immunitaire', correct: false, correction: 'Non. L\'alloréactivité demeure possible, notamment envers des CMH polymorphes.' },
      { text: 'La sélection négative limite le départ de clones fortement réactifs au soi', correct: true, correction: 'Oui. Elle contribue à la tolérance centrale.' },
      { text: 'Un LT αβ conventionnel reconnaît un complexe associant peptide et molécule de présentation', correct: true, correction: 'Oui. Le TCR lit une surface composite peptide–CMH.' },
      { text: 'La sélection positive conserve des clones capables d\'interagir avec le CMH du soi', correct: true, correction: 'Oui. Elle façonne la restriction au CMH du soi.' },
      { text: 'L\'allogreffe est une greffe entre deux espèces différentes', correct: false, correction: 'Non. Cela définit une xénogreffe.' },
    ],
    explanation: 'La même biologie peptide–CMH éclaire la réponse anti-infectieuse, la sélection des LT et l\'alloréactivité, tout en distinguant reconnaissance du soi et réaction envers un donneur. (Cours, p. 8-11)'
  },
]
