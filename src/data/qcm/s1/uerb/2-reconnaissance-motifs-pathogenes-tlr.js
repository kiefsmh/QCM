export const meta = {
  title: 'Reconnaissance des motifs pathogènes par les TLR',
}

export default [
  {
    id: 1,
    type: 'QCM',
    question: 'Quelle propriété caractérise la reconnaissance par l\'immunité innée ?',
    options: [
      { text: 'Elle reconnaît chaque antigène grâce à un réarrangement somatique des gènes TLR', correct: false, correction: 'Non. Les TLR sont des récepteurs codés par la lignée germinale.' },
      { text: 'Elle détecte rapidement des motifs moléculaires relativement conservés', correct: true, correction: 'Oui. Les récepteurs innés préexistants reconnaissent ces motifs sans amorçage clonal préalable.' },
      { text: 'Elle ne peut fonctionner qu\'après la production d\'anticorps', correct: false, correction: 'Non. La réponse innée intervient avant les anticorps nouvellement produits.' },
      { text: 'Elle exige toujours une expansion préalable de lymphocytes T spécifiques', correct: false, correction: 'Non. Cette expansion appartient à la réponse adaptative après amorçage.' },
      { text: 'Elle dépend exclusivement des plasmocytes', correct: false, correction: 'Non. Les plasmocytes sont des effecteurs de l\'immunité adaptative humorale.' },
    ],
    explanation: 'Le cours oppose la reconnaissance rapide de motifs conservés par l\'innée à l\'activation après amorçage de l\'adaptative. (Cours, p. 1)'
  },
  {
    id: 2,
    type: 'QRM',
    question: 'Quelles propositions distinguent correctement immunité innée et immunité adaptative ?',
    options: [
      { text: 'La réponse innée est disponible rapidement grâce à des récepteurs préexistants', correct: true, correction: 'Oui. Elle ne nécessite pas la sélection préalable d\'un clone spécifique.' },
      { text: 'Les cellules présentatrices d\'antigène peuvent relier les deux réponses', correct: true, correction: 'Oui. Elles captent le danger, présentent l\'antigène et fournissent des signaux d\'activation.' },
      { text: 'Une réponse adaptative primaire est toujours instantanée et indépendante d\'amorçage', correct: false, correction: 'Non. L\'activation des lymphocytes naïfs nécessite un amorçage.' },
      { text: 'L\'immunité adaptative acquiert une spécificité très diversifiée grâce aux lymphocytes', correct: true, correction: 'Oui. Les récepteurs des lymphocytes donnent accès à un vaste répertoire antigénique.' },
      { text: 'Les TLR doivent être réarrangés dans chaque lymphocyte comme les récepteurs des cellules B', correct: false, correction: 'Non. Leur diversité n\'est pas créée par réarrangement somatique.' },
    ],
    explanation: 'L\'innée fournit une reconnaissance précoce et des signaux qui contribuent à amorcer la réponse adaptative. (Cours, p. 1)'
  },
  {
    id: 3,
    type: 'QCM',
    question: 'Quel couple de molécules exprimé par une cellule présentatrice d\'antigène participe à la costimulation des lymphocytes T ?',
    options: [
      { text: 'MyD88 et TRIF exposés à la surface de la CPA', correct: false, correction: 'Non. Ce sont des adaptateurs intracellulaires de signalisation.' },
      { text: 'LPS et flagelline produits par la cellule présentatrice', correct: false, correction: 'Non. Ce sont des motifs microbiens, pas des molécules de costimulation de la CPA.' },
      { text: 'IgG et IgM ancrées obligatoirement sur les macrophages', correct: false, correction: 'Non. Les immunoglobulines ne constituent pas le couple CD80/CD86.' },
      { text: 'TLR3 et TLR4 en tant que ligands du TCR', correct: false, correction: 'Non. Les TLR sont des capteurs innés, pas le couple de costimulation cité.' },
      { text: 'CD80 et CD86', correct: true, correction: 'Oui. Ces molécules fournissent un signal de costimulation aux lymphocytes T.' },
    ],
    explanation: 'Après détection du danger, une CPA peut augmenter l\'expression des molécules du CMH et de costimulation CD80/CD86. (Cours, p. 1)'
  },
  {
    id: 4,
    type: 'QRM',
    question: 'Quelles étapes participent au passage d\'une détection innée à une réponse adaptative ?',
    options: [
      { text: 'La transformation directe d\'un TLR en anticorps sécrété', correct: false, correction: 'Non. Un TLR reste un récepteur inné ; les anticorps sont produits par la lignée B.' },
      { text: 'L\'activation des lymphocytes T après présentation antigénique', correct: true, correction: 'Oui. Elle marque l\'entrée dans la réponse adaptative.' },
      { text: 'La production de cytokines par les cellules activées', correct: true, correction: 'Oui. Ces médiateurs influencent l\'inflammation et l\'orientation des lymphocytes.' },
      { text: 'La détection de motifs microbiens par des récepteurs de reconnaissance', correct: true, correction: 'Oui. Elle initie une partie de l\'activation innée.' },
      { text: 'L\'augmentation des molécules de présentation et de costimulation sur les CPA', correct: true, correction: 'Oui. Elle facilite l\'amorçage des lymphocytes T.' },
    ],
    explanation: 'Le cours relie reconnaissance innée, cytokines, maturation des CPA, costimulation et activation lymphocytaire. (Cours, p. 1)'
  },
  {
    id: 5,
    type: 'QCM',
    question: 'Que désigne un PAMP dans ce cours ?',
    options: [
      { text: 'Un motif moléculaire associé à un agent pathogène et détectable par un PRR', correct: true, correction: 'Oui. La reconnaissance repose sur des motifs microbiens plutôt que sur un antigène unique.' },
      { text: 'Un domaine intracellulaire propre à MyD88', correct: false, correction: 'Non. MyD88 est un adaptateur, pas un motif microbien.' },
      { text: 'Une molécule de CMH portant obligatoirement un peptide viral', correct: false, correction: 'Non. La présentation par le CMH est distincte de la définition d\'un PAMP.' },
      { text: 'Une cytokine qui remplace tous les récepteurs innés', correct: false, correction: 'Non. Une cytokine est un médiateur de la réponse, non le motif détecté.' },
      { text: 'Un anticorps produit par un plasmocyte contre un TLR', correct: false, correction: 'Non. Un PAMP est un motif reconnu, pas un anticorps.' },
    ],
    explanation: 'Les PRR, dont les TLR, reconnaissent des PAMP ou d\'autres motifs moléculaires microbiens. (Cours, p. 1)'
  },
  {
    id: 6,
    type: 'QRM',
    question: 'Parmi les molécules suivantes, lesquelles sont des familles ou types de récepteurs de reconnaissance de motifs ?',
    options: [
      { text: 'Les TLR', correct: true, correction: 'Oui. Ils détectent divers motifs microbiens aux membranes cellulaires.' },
      { text: 'CD80 et CD86', correct: false, correction: 'Non. Ce sont des molécules de costimulation, pas des PRR.' },
      { text: 'Les récepteurs NOD', correct: true, correction: 'Oui. Ce sont des capteurs intracellulaires de motifs microbiens.' },
      { text: 'Les récepteurs de la famille RIG-I', correct: true, correction: 'Oui. Ils participent à la détection cytosolique d\'ARN.' },
      { text: 'Le récepteur du mannose', correct: true, correction: 'Oui. Il reconnaît notamment des motifs glucidiques.' },
    ],
    explanation: 'Le cours cite plusieurs PRR de surface ou intracellulaires, dont TLR, NOD, RIG-I et récepteur du mannose. (Cours, p. 1)'
  },
  {
    id: 7,
    type: 'QCM',
    question: 'Quelle région des TLR participe directement à la reconnaissance de leurs ligands ?',
    options: [
      { text: 'Le récepteur TCR d\'un lymphocyte T', correct: false, correction: 'Non. Le TCR appartient à une autre famille de récepteurs.' },
      { text: 'Le domaine à répétitions riches en leucine, ou LRR', correct: true, correction: 'Oui. Cette région située hors du cytosol constitue l\'ectodomaine de reconnaissance.' },
      { text: 'Le domaine de liaison à l\'ADN de NF-κB', correct: false, correction: 'Non. NF-κB est un facteur de transcription en aval.' },
      { text: 'Le segment variable d\'un anticorps sécrété', correct: false, correction: 'Non. Un TLR n\'est pas un anticorps.' },
      { text: 'Le domaine TIR comme site de liaison externe au LPS', correct: false, correction: 'Non. Le TIR est intracellulaire et transmet le signal.' },
    ],
    explanation: 'Les TLR possèdent un ectodomaine LRR qui diffère selon le récepteur et détermine sa reconnaissance. (Cours, p. 2)'
  },
  {
    id: 8,
    type: 'QRM',
    question: 'Quelles affirmations décrivent correctement l\'architecture d\'un TLR ?',
    options: [
      { text: 'Son domaine LRR se trouve du côté extracellulaire ou luminal', correct: true, correction: 'Oui. Cette position lui donne accès aux ligands à la surface ou dans l\'endosome.' },
      { text: 'Le domaine TIR présente une parenté avec celui du récepteur de l\'IL-1', correct: true, correction: 'Oui. La similitude porte sur la partie intracellulaire de ces récepteurs.' },
      { text: 'Il s\'agit d\'un récepteur transmembranaire', correct: true, correction: 'Oui. Il relie la reconnaissance d\'un ligand à une signalisation intracellulaire.' },
      { text: 'Son ectodomaine est nécessairement de type immunoglobuline comme celui du récepteur de l\'IL-1', correct: false, correction: 'Non. L\'ectodomaine des TLR est formé de répétitions riches en leucine.' },
      { text: 'Son domaine TIR se trouve du côté cytoplasmique', correct: true, correction: 'Oui. Il permet le recrutement de protéines adaptatrices.' },
    ],
    explanation: 'Le schéma compare les TLR et le récepteur de l\'IL-1 : TIR cytoplasmique commun, mais ectodomaines différents. (Cours, p. 2)'
  },
  {
    id: 9,
    type: 'QCM',
    question: 'Quel TLR de surface est particulièrement associé à la détection du lipopolysaccharide des bactéries à Gram négatif ?',
    options: [
      { text: 'TLR3', correct: false, correction: 'Non. TLR3 est surtout associé à l\'ARN double brin.' },
      { text: 'TLR4', correct: true, correction: 'Oui. Le LPS est son ligand emblématique dans le cours.' },
      { text: 'TLR9', correct: false, correction: 'Non. TLR9 reconnaît notamment des motifs CpG de l\'ADN.' },
      { text: 'TLR11 humain fonctionnel', correct: false, correction: 'Non. L\'humain ne possède pas de TLR11 fonctionnel.' },
      { text: 'TLR7', correct: false, correction: 'Non. TLR7 participe notamment à la reconnaissance d\'ARN simple brin.' },
    ],
    explanation: 'Les observations sur les souris déficientes en signalisation TLR4 ont établi le lien entre ce récepteur et la réponse au LPS. (Cours, p. 2)'
  },
  {
    id: 10,
    type: 'QRM',
    question: 'Quelles localisations des TLR sont décrites par le cours pour leurs principaux sites de détection ?',
    options: [
      { text: 'TLR1, TLR2 et TLR6 à la membrane plasmique', correct: true, correction: 'Oui. Ils peuvent y reconnaître des lipoprotéines microbiennes.' },
      { text: 'TLR3 dans des compartiments endosomiques', correct: true, correction: 'Oui. Cette localisation facilite l\'accès à l\'ARN double brin internalisé.' },
      { text: 'TLR4 et TLR5 à la membrane plasmique', correct: true, correction: 'Oui. Le cours y situe leur reconnaissance initiale du LPS et de la flagelline.' },
      { text: 'Tous les TLR sont des protéines libres du cytosol dépourvues de membrane', correct: false, correction: 'Non. Les TLR sont des récepteurs membranaires, plasmatiques ou endosomiques.' },
      { text: 'TLR7, TLR8 et TLR9 uniquement sous forme de protéines solubles dans le plasma sanguin', correct: false, correction: 'Non. Ce sont des récepteurs membranaires associés aux compartiments endosomiques.' },
    ],
    explanation: 'La compartimentation des TLR met certains récepteurs à la surface et d\'autres dans les endosomes. (Cours, p. 2–3)'
  },
  {
    id: 11,
    type: 'QCM',
    question: 'Quel motif bactérien est relié à TLR5 dans le cours ?',
    options: [
      { text: 'La profiline de Toxoplasma via un TLR11 humain fonctionnel', correct: false, correction: 'Non. Le lien TLR11–profiline concerne la souris ; TLR11 n\'est pas fonctionnel chez l\'humain.' },
      { text: 'L\'ARN simple brin', correct: false, correction: 'Non. TLR7 et TLR8 sont les associations classiques citées.' },
      { text: 'L\'ARN double brin', correct: false, correction: 'Non. Ce motif est reconnu par TLR3.' },
      { text: 'La flagelline', correct: true, correction: 'Oui. Elle constitue la protéine majeure du flagelle bactérien.' },
      { text: 'Le LPS', correct: false, correction: 'Non. Le LPS est principalement associé à TLR4.' },
    ],
    explanation: 'TLR5 reconnaît la flagelline bactérienne ; le schéma distingue ce ligand de ceux des autres TLR. (Cours, p. 3)'
  },
  {
    id: 12,
    type: 'QRM',
    question: 'Quelles associations TLR–ligand correspondent aux principaux exemples du cours ?',
    options: [
      { text: 'TLR3 – ARN double brin', correct: true, correction: 'Oui. Ce motif nucléique est le repère majeur de TLR3.' },
      { text: 'TLR5 – flagelline', correct: true, correction: 'Oui. La flagelline est une protéine des flagelles bactériens.' },
      { text: 'TLR7 ou TLR8 – LPS comme ligand principal', correct: false, correction: 'Non. Le LPS est l\'association emblématique de TLR4 ; TLR7 et TLR8 répondent à certains ARN.' },
      { text: 'TLR4 – flagelline comme ligand unique', correct: false, correction: 'Non. La flagelline est l\'exemple classique pour TLR5, et TLR4 répond au LPS.' },
      { text: 'TLR4 – lipopolysaccharide', correct: true, correction: 'Oui. Le LPS des bactéries à Gram négatif est un ligand classique de TLR4.' },
    ],
    explanation: 'Le schéma du cours relie les TLR de surface à des motifs bactériens et les TLR endosomiques à des acides nucléiques. (Cours, p. 2–3)'
  },
  {
    id: 13,
    type: 'QCM',
    question: 'Quel TLR cité dans le cours détecte classiquement l\'ARN double brin ?',
    options: [
      { text: 'TLR3', correct: true, correction: 'Oui. C\'est le récepteur endosomique associé à ce motif.' },
      { text: 'TLR4', correct: false, correction: 'Non. TLR4 est associé au LPS.' },
      { text: 'TLR2 associé à TLR1', correct: false, correction: 'Non. Cette paire est surtout associée à certains lipopeptides triacylés.' },
      { text: 'TLR2 associé à TLR6', correct: false, correction: 'Non. Cette paire est surtout associée à certains lipopeptides diacylés.' },
      { text: 'TLR5', correct: false, correction: 'Non. TLR5 est associé à la flagelline.' },
    ],
    explanation: 'TLR3 reconnaît l\'ARN double brin, typiquement accessible dans le compartiment endosomal. (Cours, p. 3)'
  },
  {
    id: 14,
    type: 'QRM',
    question: 'À propos des TLR endosomiques, quelles propositions sont exactes ?',
    options: [
      { text: 'Ils sont enchâssés dans la membrane de compartiments internes', correct: true, correction: 'Oui. Leur domaine de reconnaissance regarde vers la lumière endosomique.' },
      { text: 'Ils sont des molécules solubles du noyau sans domaine transmembranaire', correct: false, correction: 'Non. Ils restent des récepteurs membranaires.' },
      { text: 'Ils prouvent que tout microbe reconnu se multiplie dans le cytosol de la cellule', correct: false, correction: 'Non. Un motif internalisé peut provenir d\'un agent qui ne se réplique pas dans cette cellule.' },
      { text: 'Ils peuvent détecter des acides nucléiques rendus accessibles après internalisation', correct: true, correction: 'Oui. L\'endosome expose des composants de particules microbiennes captées.' },
      { text: 'Ils ne détectent jamais de motifs nucléiques', correct: false, correction: 'Non. TLR3, TLR7, TLR8 et TLR9 sont associés à des acides nucléiques.' },
    ],
    explanation: 'La localisation endosomique favorise la reconnaissance de matériel microbien internalisé, sans définir à elle seule le mode de vie du microbe. (Cours, p. 2–3)'
  },
  {
    id: 15,
    type: 'QCM',
    question: 'Quel duo de récepteurs endosomiques est associé dans le cours à la reconnaissance d\'ARN simple brin ?',
    options: [
      { text: 'TLR7 et TLR8', correct: true, correction: 'Oui. Ces deux TLR répondent à certains ARN simples brins.' },
      { text: 'TLR11 et TLR12 fonctionnels chez tout humain', correct: false, correction: 'Non. TLR11 n\'est pas fonctionnel chez l\'humain ; cette paire ne décrit pas l\'ARN simple brin.' },
      { text: 'TLR3 et le récepteur du mannose', correct: false, correction: 'Non. TLR3 détecte principalement l\'ARN double brin.' },
      { text: 'TLR1 et TLR6 seuls, sans TLR2', correct: false, correction: 'Non. Ils participent aux hétérodimères avec TLR2 pour des lipopeptides.' },
      { text: 'TLR4 et TLR5', correct: false, correction: 'Non. Ils sont surtout associés au LPS et à la flagelline.' },
    ],
    explanation: 'Le cours associe TLR7 et TLR8 à l\'ARN simple brin et à des agonistes de type imidazoquinoline. (Cours, p. 3)'
  },
  {
    id: 16,
    type: 'QRM',
    question: 'Quelles propositions sur les ligands des TLR endosomiques sont correctes ?',
    options: [
      { text: 'TLR8 a pour principal ligand le LPS bactérien', correct: false, correction: 'Non. Le schéma associe TLR8 à l\'ARN simple brin et TLR4 au LPS.' },
      { text: 'TLR3 répond à l\'ARN double brin', correct: true, correction: 'Oui. C\'est son ligand classique dans le cours.' },
      { text: 'TLR3 et TLR9 ont pour unique ligand la flagelline', correct: false, correction: 'Non. La flagelline est le motif classique de TLR5.' },
      { text: 'TLR9 reconnaît notamment des motifs CpG de l\'ADN', correct: true, correction: 'Oui. Le schéma du cours associe TLR9 à l\'ADN CpG.' },
      { text: 'TLR7 peut répondre à certains ARN simples brins', correct: true, correction: 'Oui. Sa localisation endosomique contribue à cette détection.' },
    ],
    explanation: 'Les TLR endosomiques du schéma se répartissent selon les motifs d\'acides nucléiques détectés. (Cours, p. 3)'
  },
  {
    id: 17,
    type: 'QCM',
    question: 'Avec quels récepteurs TLR2 forme-t-il les hétérodimères mis en avant dans le cours ?',
    options: [
      { text: 'Le TCR ou le BCR', correct: false, correction: 'Non. Ces récepteurs appartiennent à la reconnaissance adaptative.' },
      { text: 'TLR3 ou TLR9', correct: false, correction: 'Non. Ce sont surtout des capteurs endosomiques d\'acides nucléiques.' },
      { text: 'TLR4 ou TLR5 exclusivement', correct: false, correction: 'Non. Le cours ne les présente pas comme ses partenaires classiques.' },
      { text: 'NF-κB ou IRF3', correct: false, correction: 'Non. Ce sont des facteurs de transcription en aval, pas des partenaires TLR membranaires.' },
      { text: 'TLR1 ou TLR6', correct: true, correction: 'Oui. Ces deux partenaires modulent la reconnaissance des lipopeptides.' },
    ],
    explanation: 'TLR2 se distingue dans le cours par ses hétérodimères classiques avec TLR1 ou TLR6. (Cours, p. 2–3)'
  },
  {
    id: 18,
    type: 'QRM',
    question: 'Quelles propositions décrivent prudemment la reconnaissance par les hétérodimères de TLR2 ?',
    options: [
      { text: 'TLR2–TLR6 est classiquement associé aux lipopeptides diacylés', correct: true, correction: 'Oui. Deux chaînes lipidiques favorisent cette association dans le modèle du cours.' },
      { text: 'TLR2 reconnaît uniquement des sucres libres dépourvus de lipides', correct: false, correction: 'Non. Les exemples majeurs du cours sont des lipopeptides et lipoprotéines.' },
      { text: 'Un lipopeptide triacylé ne peut jamais être reconnu sans TLR1 dans aucune condition', correct: false, correction: 'Non. Le lien de préférence n\'est pas une loi universelle sans exception.' },
      { text: 'Le partenaire de TLR2 contribue à la préférence de reconnaissance', correct: true, correction: 'Oui. TLR1 et TLR6 ne donnent pas exactement le même profil de ligands.' },
      { text: 'TLR2–TLR1 est classiquement associé aux lipopeptides triacylés', correct: true, correction: 'Oui. Trois chaînes lipidiques favorisent cette association dans le modèle du cours.' },
    ],
    explanation: 'Le cours donne les paires TLR2–TLR1 et TLR2–TLR6 avec leurs lipopeptides typiques ; il faut éviter une exclusivité absolue. (Cours, p. 3)'
  },
  {
    id: 19,
    type: 'QCM',
    question: 'Pourquoi l\'exemple TLR11–profiline de Toxoplasma ne doit-il pas être directement transposé de la souris à l\'humain ?',
    options: [
      { text: 'Le TLR11 humain ne produit pas de récepteur fonctionnel', correct: true, correction: 'Oui. La détection murine par TLR11 ne décrit donc pas un TLR11 actif chez l\'humain.' },
      { text: 'La profiline de Toxoplasma n\'existe que chez l\'humain', correct: false, correction: 'Non. Il s\'agit d\'une protéine du parasite, étudiée notamment chez la souris.' },
      { text: 'Les souris ne possèdent aucun récepteur TLR', correct: false, correction: 'Non. Le modèle murin utilise précisément des TLR, dont TLR11.' },
      { text: 'Tous les TLR murins sont absents chez l\'humain', correct: false, correction: 'Non. Beaucoup de TLR sont partagés entre les deux espèces.' },
      { text: 'TLR11 est le seul TLR fonctionnel chez l\'humain', correct: false, correction: 'Non. De nombreux autres TLR humains sont fonctionnels.' },
    ],
    explanation: 'Le cours précise que TLR11 détecte la profiline chez la souris, mais n\'est pas fonctionnel chez l\'humain. (Cours, p. 3)'
  },
  {
    id: 20,
    type: 'QRM',
    question: 'Quelles propositions décrivent le rôle des dimères dans l\'activation des TLR ?',
    options: [
      { text: 'Un TLR peut former un homodimère selon le récepteur', correct: true, correction: 'Oui. TLR5 est donné comme exemple de paire de même type.' },
      { text: 'Le ligand participe souvent à la stabilisation d\'un complexe signalant', correct: true, correction: 'Oui. Le cours discute aussi la possibilité de dimères préformés.' },
      { text: 'Tous les TLR sont nécessairement des monomères avant chaque rencontre avec un ligand', correct: false, correction: 'Non. Le cours présente aussi l\'hypothèse de dimères déjà présents.' },
      { text: 'TLR2 peut former un hétérodimère avec TLR1 ou TLR6', correct: true, correction: 'Oui. Ces paires expliquent des préférences de reconnaissance différentes.' },
      { text: 'L\'association de deux sous-unités rapproche leurs domaines intracellulaires', correct: true, correction: 'Oui. Ce rapprochement facilite le recrutement des protéines de signalisation.' },
    ],
    explanation: 'La dimérisation ou la stabilisation d\'un dimère est une étape structurale clé qui précède la signalisation. (Cours, p. 2–3)'
  },
  {
    id: 21,
    type: 'QCM',
    question: 'Quel TLR décrit dans le cours transmet son signal par TRIF sans recourir à MyD88 ?',
    options: [
      { text: 'TLR9', correct: false, correction: 'Non. TLR9 est endosomal, mais sa signalisation utilise MyD88.' },
      { text: 'TLR3', correct: true, correction: 'Oui. TLR3 est l\'exception à la voie MyD88 : il recrute TRIF.' },
      { text: 'TLR2', correct: false, correction: 'Non. TLR2 utilise la voie dépendante de MyD88.' },
      { text: 'TLR5', correct: false, correction: 'Non. TLR5 signale par MyD88 après reconnaissance de la flagelline.' },
      { text: 'TLR4', correct: false, correction: 'Non. TLR4 peut utiliser MyD88 et TRIF ; il ne répond donc pas au critère « sans MyD88 ».' },
    ],
    explanation: 'Parmi les TLR du support, TLR3 est l\'exception qui utilise TRIF et non MyD88. (Cours, p. 2, 4)'
  },
  {
    id: 22,
    type: 'QRM',
    question: 'Quelles associations entre TLR et adaptateur de signalisation sont exactes ?',
    options: [
      { text: 'TLR4 — TRIF', correct: true, correction: 'Oui. TLR4 possède également une branche dépendante de TRIF.' },
      { text: 'TLR4 — MyD88', correct: true, correction: 'Oui. Une des branches de TLR4 passe par MyD88.' },
      { text: 'TLR3 — MyD88 obligatoire', correct: false, correction: 'Non. TLR3 est précisément l\'exception à la dépendance envers MyD88.' },
      { text: 'TLR3 — TRIF', correct: true, correction: 'Oui. TLR3 déclenche une signalisation dépendante de TRIF.' },
      { text: 'TLR4 — TRIF seulement', correct: false, correction: 'Non. Cela omet sa branche dépendante de MyD88.' },
    ],
    explanation: 'TLR3 signale par TRIF ; TLR4 peut engager les deux grandes voies, MyD88 et TRIF. (Cours, p. 4)'
  },
  {
    id: 23,
    type: 'QCM',
    question: 'À quelle région intracellulaire du TLR l\'adaptateur MyD88 est-il recruté après reconnaissance du ligand ?',
    options: [
      { text: 'À la chaîne lourde du CMH', correct: false, correction: 'Non. Le CMH présente des peptides ; il ne sert pas de domaine intracellulaire au TLR.' },
      { text: 'À l\'ADN mitochondrial', correct: false, correction: 'Non. Ce n\'est pas l\'emplacement du recrutement de MyD88 par un TLR.' },
      { text: 'Au promoteur du gène de l\'IL-12', correct: false, correction: 'Non. Les promoteurs sont reconnus ensuite par des facteurs de transcription, pas directement par MyD88.' },
      { text: 'Au domaine TIR', correct: true, correction: 'Oui. Le domaine TIR est l\'interface cytoplasmique de recrutement des adaptateurs.' },
      { text: 'Aux répétitions riches en leucine LRR', correct: false, correction: 'Non. Les LRR sont situées du côté de la reconnaissance du ligand.' },
    ],
    explanation: 'La liaison ligand–TLR permet le recrutement de MyD88 du côté cytoplasmique, sur le domaine TIR. (Cours, p. 2, 4)'
  },
  {
    id: 24,
    type: 'QRM',
    question: 'Quels événements appartiennent à la cascade dépendante de MyD88 présentée dans le cours ?',
    options: [
      { text: 'La synthèse directe d\'IFN-γ par le domaine TIR', correct: false, correction: 'Non. Un domaine récepteur n\'est pas une enzyme synthétisant une cytokine ; IFN-γ relève d\'autres cellules et signaux.' },
      { text: 'L\'intervention de TRAF6 en aval du complexe IRAK', correct: true, correction: 'Oui. TRAF6 relaie le signal vers des complexes de kinases.' },
      { text: 'Le recrutement immédiat de MyD88 par tous les TLR sans exception', correct: false, correction: 'Non. TLR3 utilise TRIF et non MyD88.' },
      { text: 'Le recrutement d\'IRAK4 puis l\'activation d\'autres IRAK, dont IRAK1', correct: true, correction: 'Oui. Ces kinases interviennent en aval de MyD88.' },
      { text: 'Une succession de phosphorylations et l\'activation de facteurs de transcription', correct: true, correction: 'Oui. Le signal aboutit notamment à NF-κB et à l\'expression de gènes inflammatoires.' },
    ],
    explanation: 'Dans la branche MyD88, le cours relie le domaine TIR à IRAK4/IRAK1, TRAF6, puis aux kinases et facteurs de transcription. (Cours, p. 4)'
  },
  {
    id: 25,
    type: 'QCM',
    question: 'Quel facteur de transcription est surtout associé ici à l\'induction de gènes de cytokines inflammatoires après activation des TLR ?',
    options: [
      { text: 'MyD88', correct: false, correction: 'Non. MyD88 est un adaptateur en amont, non le facteur de transcription demandé.' },
      { text: 'NF-κB', correct: true, correction: 'Oui. Une fois libéré de son inhibiteur, NF-κB gagne le noyau et induit notamment des gènes inflammatoires.' },
      { text: 'IRAK4', correct: false, correction: 'Non. IRAK4 est une kinase de la cascade.' },
      { text: 'Le CMH II', correct: false, correction: 'Non. Le CMH II présente des peptides aux LT CD4, mais n\'est pas un facteur de transcription.' },
      { text: 'TRAF6', correct: false, correction: 'Non. TRAF6 est une protéine de signalisation en amont des facteurs de transcription.' },
    ],
    explanation: 'NF-κB transloqué dans le noyau participe à la transcription de gènes inflammatoires, dont ceux d\'IL-1, IL-6 et IL-8 cités par le support. (Cours, p. 4)'
  },
  {
    id: 26,
    type: 'QRM',
    question: 'Quelles étapes expliquent l\'activation nucléaire de NF-κB dans la voie exposée ?',
    options: [
      { text: 'La phosphorylation de l\'inhibiteur transforme directement NF-κB en anticorps', correct: false, correction: 'Non. Un facteur de transcription ne devient pas un anticorps.' },
      { text: 'NF-κB doit rester durablement lié à son inhibiteur pour entrer dans le noyau', correct: false, correction: 'Non. La libération de NF-κB est au contraire nécessaire dans ce mécanisme.' },
      { text: 'L\'inhibiteur est ensuite dégradé par le protéasome', correct: true, correction: 'Oui. La dégradation libère NF-κB.' },
      { text: 'L\'inhibiteur de NF-κB est phosphorylé', correct: true, correction: 'Oui. Cette modification prépare la levée de l\'inhibition dans la voie décrite.' },
      { text: 'NF-κB peut alors gagner le noyau et se fixer à des séquences promotrices', correct: true, correction: 'Oui. C\'est ainsi qu\'il participe à la transcription des gènes cibles.' },
    ],
    explanation: 'La phosphorylation puis la dégradation de l\'inhibiteur exposent la capacité de NF-κB à entrer dans le noyau et à activer des gènes. (Cours, p. 4)'
  },
  {
    id: 27,
    type: 'QCM',
    question: 'Quel facteur de transcription le cours associe particulièrement à la branche TRIF menant à la production d\'IFN-β ?',
    options: [
      { text: 'MyD88', correct: false, correction: 'Non. MyD88 est un adaptateur ; il n\'est ni IRF3 ni un facteur de transcription.' },
      { text: 'TLR5', correct: false, correction: 'Non. TLR5 est un récepteur, non le facteur nucléaire de la réponse IFN-β.' },
      { text: 'IRF3', correct: true, correction: 'Oui. La branche TRIF peut activer IRF3, qui contribue à la transcription du gène d\'IFN-β.' },
      { text: 'IRAK4', correct: false, correction: 'Non. IRAK4 est une kinase de la branche MyD88, pas le facteur de transcription demandé.' },
      { text: 'CD80', correct: false, correction: 'Non. CD80 est une molécule de costimulation à la surface des CPA.' },
    ],
    explanation: 'La voie TRIF est notamment reliée à IRF3 et à l\'induction d\'interférons de type I tels qu\'IFN-β. (Cours, p. 4)'
  },
  {
    id: 28,
    type: 'QRM',
    question: 'Quelles propositions distinguent correctement les sorties de signalisation décrites dans le cours ?',
    options: [
      { text: 'NF-κB est un récepteur membranaire qui reconnaît directement le LPS', correct: false, correction: 'Non. NF-κB est un facteur de transcription, alors que TLR4 reconnaît le LPS avec ses corécepteurs.' },
      { text: 'Une branche passant par TRIF et IRF3 peut induire IFN-β', correct: true, correction: 'Oui. IFN-β fait partie des interférons de type I.' },
      { text: 'IFN-γ est le nom alternatif d\'IFN-β', correct: false, correction: 'Non. IFN-γ est un interféron de type II distinct d\'IFN-β.' },
      { text: 'NF-κB participe à l\'expression de cytokines inflammatoires', correct: true, correction: 'Oui. Le cours cite notamment IL-1, IL-6 et IL-8 parmi les gènes concernés.' },
      { text: 'IFN-α et IFN-β sont des interférons de type I', correct: true, correction: 'Oui. Ils ne doivent pas être confondus avec IFN-γ.' },
    ],
    explanation: 'Le cours oppose les gènes inflammatoires activés notamment par NF-κB aux interférons de type I dont la transcription implique les IRF ; IFN-γ est distinct. (Cours, p. 4)'
  },
  {
    id: 29,
    type: 'QCM',
    question: 'Quelle autre famille de kinases le cours mentionne-t-il dans la signalisation TLR, en parallèle de l\'activation de NF-κB ?',
    options: [
      { text: 'Les enzymes du cycle de Krebs', correct: false, correction: 'Non. Elles relèvent du métabolisme énergétique, pas de la voie signalétique demandée.' },
      { text: 'Les immunoglobulines membranaires', correct: false, correction: 'Non. Une immunoglobuline n\'est pas une famille de kinases de cette cascade.' },
      { text: 'Les caspases de la coagulation', correct: false, correction: 'Non. Le cours ne les présente pas comme cette voie parallèle des TLR.' },
      { text: 'Les MAP kinases', correct: true, correction: 'Oui. Une branche de la signalisation passe par les MAP kinases.' },
      { text: 'Les ADN polymérases virales', correct: false, correction: 'Non. Elles ne correspondent pas à la branche de kinases décrite.' },
    ],
    explanation: 'Le support signale une voie des MAP kinases en plus de la branche menant à la libération de NF-κB. (Cours, p. 4)'
  },
  {
    id: 30,
    type: 'QRM',
    question: 'Quelles étapes ou propriétés résument la signalisation TLR du support ?',
    options: [
      { text: 'Des régulateurs négatifs peuvent limiter la cascade', correct: true, correction: 'Oui. Le cours indique des freins possibles à plusieurs niveaux.' },
      { text: 'Un adaptateur tel que MyD88 ou TRIF transmet le signal côté cytoplasmique', correct: true, correction: 'Oui. Le choix de l\'adaptateur varie notamment entre TLR3 et TLR4.' },
      { text: 'La seule conséquence d\'une liaison au TLR est la réplication du récepteur', correct: false, correction: 'Non. La finalité mise en avant est l\'expression de gènes de réponse immunitaire.' },
      { text: 'Des kinases relaient le signal avant l\'activation de facteurs de transcription', correct: true, correction: 'Oui. Le cours insiste sur les cascades de phosphorylations.' },
      { text: 'La reconnaissance d\'un ligand peut favoriser le rapprochement de deux TLR', correct: true, correction: 'Oui. La dimérisation est présentée comme un préalable à la signalisation.' },
    ],
    explanation: 'Reconnaissance, dimérisation, adaptateurs, kinases et facteurs nucléaires forment la chaîne générale ; des freins peuvent en limiter l\'intensité. (Cours, p. 2–5)'
  },
  {
    id: 31,
    type: 'QCM',
    question: 'À quel grand groupe biologique appartient Toxoplasma gondii ?',
    options: [
      { text: 'Aux champignons filamenteux', correct: false, correction: 'Non. Le parasite appartient aux protozoaires et non aux champignons.' },
      { text: 'Aux vers plats pluricellulaires', correct: false, correction: 'Non. Les helminthes pluricellulaires ne sont pas des protozoaires.' },
      { text: 'Aux protozoaires unicellulaires', correct: true, correction: 'Oui. T. gondii est un parasite eucaryote unicellulaire.' },
      { text: 'Aux bactéries à Gram négatif', correct: false, correction: 'Non. T. gondii n\'est pas une bactérie.' },
      { text: 'Aux virus à ARN double brin', correct: false, correction: 'Non. T. gondii est un organisme cellulaire et ne correspond pas à ce groupe viral.' },
    ],
    explanation: 'Le texte contient une mention erronée des « protozoaires pluricellulaires » ; sa description spécifique de T. gondii est correcte : c\'est un protozoaire unicellulaire. (Cours, p. 5 ; CDC, DPDx Toxoplasmosis)'
  },
  {
    id: 32,
    type: 'QRM',
    question: 'Quelles voies d\'acquisition humaine de T. gondii correspondent à son cycle ?',
    options: [
      { text: 'Piqûre obligatoire d\'un moustique Anopheles', correct: false, correction: 'Non. Anopheles est un vecteur du paludisme, pas une étape obligatoire de la toxoplasmose.' },
      { text: 'Ingestion d\'oocystes devenus infectants présents dans l\'eau ou sur des aliments souillés', correct: true, correction: 'Oui. Les oocystes viennent des déjections de félidés et sporulent dans l\'environnement.' },
      { text: 'Transmission transplacentaire lors d\'une infection maternelle', correct: true, correction: 'Oui. Les tachyzoïtes peuvent atteindre le fœtus.' },
      { text: 'Ingestion de kystes tissulaires dans une viande insuffisamment cuite', correct: true, correction: 'Oui. La viande d\'un hôte intermédiaire peut contenir des kystes à bradyzoïtes.' },
      { text: 'Ingestion d\'oocystes produits par reproduction sexuée dans la viande humaine', correct: false, correction: 'Non. La reproduction sexuée et l\'excrétion d\'oocystes ont lieu chez les félidés ; la viande contient surtout des kystes tissulaires.' },
    ],
    explanation: 'Distinguer les oocystes issus des fèces de félidés, les kystes tissulaires de la viande et la transmission transplacentaire évite une confusion du texte. (Cours, p. 5 ; CDC, DPDx Toxoplasmosis)'
  },
  {
    id: 33,
    type: 'QCM',
    question: 'Quel est l\'hôte définitif de T. gondii, chez lequel se déroule sa reproduction sexuée ?',
    options: [
      { text: 'Le moustique Anopheles', correct: false, correction: 'Non. Il transmet des Plasmodium, pas T. gondii.' },
      { text: 'Le phlébotome', correct: false, correction: 'Non. Il est associé à la transmission des Leishmania.' },
      { text: 'Le réduve', correct: false, correction: 'Non. Il est associé aux trypanosomes américains, pas au cycle sexué de T. gondii.' },
      { text: 'L\'être humain', correct: false, correction: 'Non. L\'humain est un hôte intermédiaire, sans cycle sexué intestinal du parasite.' },
      { text: 'Un félidé, notamment le chat', correct: true, correction: 'Oui. Les félidés sont les hôtes définitifs et peuvent éliminer des oocystes dans leurs selles.' },
    ],
    explanation: 'La reproduction sexuée de T. gondii a lieu chez les félidés ; oiseaux et mammifères, dont l\'humain, sont des hôtes intermédiaires. (Cours, p. 5 ; CDC, DPDx Toxoplasmosis)'
  },
  {
    id: 34,
    type: 'QRM',
    question: 'Quelles associations entre forme parasitaire et étape du cycle sont exactes ?',
    options: [
      { text: 'Oocyste — forme rejetée dans les selles des félidés puis devenue infectante après sporulation', correct: true, correction: 'Oui. La sporulation se déroule dans l\'environnement après l\'excrétion.' },
      { text: 'Bradyzoïte — forme présente dans les kystes tissulaires persistants', correct: true, correction: 'Oui. Les kystes se trouvent notamment dans le muscle et le système nerveux.' },
      { text: 'Bradyzoïte — produit uniquement par le moustique', correct: false, correction: 'Non. Le moustique n\'intervient pas dans le cycle de T. gondii.' },
      { text: 'Tachyzoïte — forme proliférative pouvant participer à la transmission transplacentaire', correct: true, correction: 'Oui. Cette forme peut disséminer pendant l\'infection aiguë.' },
      { text: 'Oocyste — forme caractéristique de la viande insuffisamment cuite', correct: false, correction: 'Non. La viande est surtout une source de kystes tissulaires, non d\'oocystes.' },
    ],
    explanation: 'Le cycle distingue oocystes environnementaux, tachyzoïtes prolifératifs et bradyzoïtes enkystés. (Cours, p. 5 ; CDC, DPDx Toxoplasmosis)'
  },
  {
    id: 35,
    type: 'QCM',
    question: 'Quelle cytokine produite par des cellules de l\'immunité innée oriente particulièrement la réponse anti-T. gondii vers les cellules NK et les lymphocytes Th1 ?',
    options: [
      { text: 'IgG', correct: false, correction: 'Non. Les IgG sont des anticorps, pas une cytokine innée.' },
      { text: 'CD80', correct: false, correction: 'Non. CD80 est une molécule de costimulation et non une cytokine.' },
      { text: 'IFN-β', correct: false, correction: 'Non. IFN-β est un interféron de type I associé notamment à certaines voies TLR, mais ce n\'est pas la cytokine demandée ici.' },
      { text: 'IL-12', correct: true, correction: 'Oui. Le cours place IL-12 en amont de l\'activation NK et de l\'orientation Th1.' },
      { text: 'IL-8', correct: false, correction: 'Non. IL-8 est une chimiokine inflammatoire, non le signal IL-12 central du schéma anti-toxoplasmique.' },
    ],
    explanation: 'Dans le schéma du cours, cellules dendritiques, macrophages et neutrophiles peuvent produire IL-12, laquelle favorise les réponses NK et Th1. (Cours, p. 6)'
  },
  {
    id: 36,
    type: 'QRM',
    question: 'Quelles relations entre IL-12, cellules NK et réponse Th1 sont cohérentes avec le cours ?',
    options: [
      { text: 'Les Th1 produisent uniquement des oocystes après stimulation par IL-12', correct: false, correction: 'Non. Les oocystes sont des formes du parasite produites chez les félidés.' },
      { text: 'L\'IL-12 favorise la différenciation des LT auxiliaires vers le profil Th1', correct: true, correction: 'Oui. Cette polarisation est représentée dans le schéma anti-T. gondii.' },
      { text: 'L\'IL-12 est une immunoglobuline directement sécrétée par les plasmocytes', correct: false, correction: 'Non. L\'IL-12 est une cytokine produite notamment par des cellules de l\'immunité innée.' },
      { text: 'Les cellules NK et Th1 peuvent produire de l\'IFN-γ', correct: true, correction: 'Oui. Elles contribuent à la réponse de type 1 contre le parasite intracellulaire.' },
      { text: 'L\'IL-12 participe à l\'activation des cellules NK', correct: true, correction: 'Oui. Les NK figurent parmi les cellules répondant à l\'IL-12.' },
    ],
    explanation: 'La chaîne mise en avant est : cellules innées → IL-12 → NK et orientation Th1 → IFN-γ. (Cours, p. 6–7)'
  },
  {
    id: 37,
    type: 'QCM',
    question: 'Quel interféron sécrété notamment par les NK et les Th1 est central pour l\'activation de mécanismes de défense contre T. gondii ?',
    options: [
      { text: 'TNF-α', correct: false, correction: 'Non. TNF-α est une cytokine inflammatoire importante, mais pas un interféron.' },
      { text: 'IFN-α', correct: false, correction: 'Non. IFN-α appartient aussi aux interférons de type I et n\'est pas l\'interféron demandé.' },
      { text: 'IFN-β', correct: false, correction: 'Non. IFN-β est un interféron de type I ; le schéma NK/Th1 du cours met en avant IFN-γ.' },
      { text: 'IFN-γ', correct: true, correction: 'Oui. L\'IFN-γ est l\'interféron de type II important pour l\'activation des macrophages anti-parasitaires.' },
      { text: 'IL-12', correct: false, correction: 'Non. IL-12 est la cytokine en amont de la production d\'IFN-γ.' },
    ],
    explanation: 'L\'IL-12 favorise une réponse où les NK et les Th1 produisent IFN-γ ; celui-ci participe à la défense cellulaire contre le parasite. (Cours, p. 6–7)'
  },
  {
    id: 38,
    type: 'QRM',
    question: 'Quelles propositions décrivent correctement les acteurs de la défense anti-T. gondii ?',
    options: [
      { text: 'Les LT CD8 peuvent participer à la réponse cellulaire cytotoxique', correct: true, correction: 'Oui. Le cours les inclut dans la réponse adaptative anti-parasitaire.' },
      { text: 'Des cellules dendritiques et des macrophages contribuent à la production d\'IL-12', correct: true, correction: 'Oui. Elles font partie des cellules innées placées en amont du schéma.' },
      { text: 'Les IgG tuent à elles seules chaque parasite intracellulaire par contact direct', correct: false, correction: 'Non. Les anticorps peuvent aider contre des formes extracellulaires ; la maîtrise du parasite intracellulaire dépend fortement de l\'immunité cellulaire.' },
      { text: 'Les NK et les Th1 peuvent fournir de l\'IFN-γ', correct: true, correction: 'Oui. Cet interféron soutient notamment l\'activation des macrophages.' },
      { text: 'La défense contre T. gondii ne mobilise aucune cellule de l\'immunité innée', correct: false, correction: 'Non. L\'IL-12 et les NK montrent au contraire son rôle majeur.' },
    ],
    explanation: 'Le contrôle du parasite relie réponse innée IL-12/NK et réponse cellulaire Th1/CD8 ; le support surestime une « cytotoxicité directe » des IgG ou de l\'IFN-γ. (Cours, p. 6–7)'
  },
  {
    id: 39,
    type: 'QCM',
    question: 'Quelle forme de T. gondii est contenue dans les kystes tissulaires persistants et peut être impliquée dans une réactivation si l\'immunité diminue ?',
    options: [
      { text: 'La flagelline bactérienne', correct: false, correction: 'Non. Il s\'agit d\'un ligand de TLR5, pas d\'une forme de T. gondii.' },
      { text: 'L\'oocyste non sporulé', correct: false, correction: 'Non. Il est excrété par le félin et devient infectant dans l\'environnement.' },
      { text: 'Le virion', correct: false, correction: 'Non. T. gondii n\'est pas un virus.' },
      { text: 'Le trophozoïte de Plasmodium', correct: false, correction: 'Non. C\'est une forme d\'un autre parasite.' },
      { text: 'Le bradyzoïte', correct: true, correction: 'Oui. Les bradyzoïtes persistent dans les kystes tissulaires.' },
    ],
    explanation: 'Les bradyzoïtes des kystes tissulaires constituent une forme persistante, particulièrement importante en cas d\'immunodépression. (Cours, p. 5 ; CDC, DPDx Toxoplasmosis)'
  },
  {
    id: 40,
    type: 'QRM',
    question: 'Quelles distinctions relient correctement signalisation TLR et réponse anti-T. gondii ?',
    options: [
      { text: 'La branche TLR3–TRIF peut activer IRF3 et favoriser la transcription d\'IFN-β', correct: true, correction: 'Oui. IFN-β est un interféron de type I présenté dans la partie signalisation.' },
      { text: 'L\'IL-12 issue de cellules innées soutient les NK et l\'orientation Th1', correct: true, correction: 'Oui. C\'est le point de départ du schéma immunitaire contre T. gondii.' },
      { text: 'IFN-β et IFN-γ sont deux noms d\'une seule et même cytokine', correct: false, correction: 'Non. Ils appartiennent respectivement aux interférons de type I et de type II.' },
      { text: 'Le domaine TIR d\'un TLR détruit directement tous les kystes tissulaires', correct: false, correction: 'Non. Le domaine TIR transmet un signal intracellulaire ; il n\'est pas lui-même un mécanisme de destruction des kystes.' },
      { text: 'Les NK et les Th1 peuvent produire de l\'IFN-γ', correct: true, correction: 'Oui. IFN-γ est distinct de l\'IFN-β produit dans la voie évoquée plus haut.' },
    ],
    explanation: 'La partie TLR du cours met en avant TRIF/IRF3/IFN-β, tandis que l\'exemple de toxoplasmose met en avant IL-12/NK/Th1/IFN-γ. (Cours, p. 4, 6–7)'
  },
  {
    id: 41,
    type: 'QCM',
    question: 'Qu\'est-ce qu\'une ancre GPI dans le contexte des protéines de surface de Toxoplasma gondii ?',
    options: [
      { text: 'Une cytokine sécrétée par le macrophage après infection', correct: false, correction: 'Non. La cytokine mesurée dans les expériences du cours est notamment le TNF-α.' },
      { text: 'Un récepteur TLR situé dans le noyau du parasite', correct: false, correction: 'Non. Un GPI est une structure glycolipidique, pas un récepteur TLR.' },
      { text: 'Un anticorps dirigé contre la surface du parasite', correct: false, correction: 'Non. Les ancres GPI font partie de la surface parasitaire et ne sont pas des anticorps.' },
      { text: 'Un fragment d\'ARN qui code une protéine de membrane', correct: false, correction: 'Non. L\'ancre GPI est une molécule lipidique et glucidique, non un acide nucléique.' },
      { text: 'Une structure glycolipidique qui peut fixer une protéine à la membrane', correct: true, correction: 'Oui. Sa partie lipidique s\'insère dans la membrane et la partie glycanique participe à la liaison à la protéine.' },
    ],
    explanation: 'Les GPI sont des ancres glycolipidiques de protéines membranaires ; cette définition reste valable chez d\'autres eucaryotes. (Cours, p. 7)'
  },
  {
    id: 42,
    type: 'QRM',
    question: 'Quelles propositions décrivent la structure générale et la diversité des GPI ?',
    options: [
      { text: 'Ils comportent une partie lipidique', correct: true, correction: 'Oui. Cette partie contribue à leur insertion dans la membrane.' },
      { text: 'Ils peuvent relier une protéine de surface à la membrane', correct: true, correction: 'Oui. Une protéine peut être attachée à la partie non lipidique de l\'ancre.' },
      { text: 'Leurs substitutions peuvent varier selon l\'espèce et la forme moléculaire', correct: true, correction: 'Oui. Le cours compare plusieurs structures de GPI parasitaires.' },
      { text: 'Ils n\'existent que chez les parasites', correct: false, correction: 'Non. On trouve des GPI chez d\'autres cellules eucaryotes, notamment celles des mammifères.' },
      { text: 'Ils comportent une partie glucidique', correct: true, correction: 'Oui. Le cœur glycanique participe à la structure de l\'ancre.' },
    ],
    explanation: 'Le mot GPI désigne une famille d\'ancres glycolipidiques dont la structure précise peut varier, et non une molécule identique chez toutes les espèces. (Cours, p. 7–8)'
  },
  {
    id: 43,
    type: 'QCM',
    question: 'Quelle partie d\'une ancre GPI explique principalement son insertion dans la membrane plasmique ?',
    options: [
      { text: 'La partie lipidique', correct: true, correction: 'Oui. Les chaînes lipidiques assurent l\'ancrage membranaire.' },
      { text: 'Le domaine TIR d\'un TLR', correct: false, correction: 'Non. Le domaine TIR sert à la signalisation des TLR ; il ne fait pas partie du GPI.' },
      { text: 'Le TNF-α sécrété', correct: false, correction: 'Non. Le TNF-α est une cytokine produite en réponse à certaines stimulations.' },
      { text: 'Le fluorochrome d\'un anticorps', correct: false, correction: 'Non. Un fluorochrome sert à une détection expérimentale, pas à l\'ancrage physiologique.' },
      { text: 'L\'ADN du parasite', correct: false, correction: 'Non. L\'ADN n\'est pas la partie membranaire de l\'ancre.' },
    ],
    explanation: 'La distinction lipidique/glycanique permet de comprendre à la fois l\'ancrage à la membrane et la possibilité de varier la structure exposée. (Cours, p. 7)'
  },
  {
    id: 44,
    type: 'QRM',
    question: 'Quelles conséquences découlent du fait qu\'un GPI possède une partie glycanique exposée et une partie lipidique ?',
    options: [
      { text: 'Des modifications structurales peuvent modifier les propriétés d\'un GPI', correct: true, correction: 'Oui. Le cours montre plusieurs formes qui diffèrent notamment par des substituants.' },
      { text: 'La présence d\'un GPI démontre à elle seule une activation de TLR4', correct: false, correction: 'Non. Il faut une mesure fonctionnelle dans les cellules et des contrôles de récepteur.' },
      { text: 'La partie non lipidique peut porter le site de liaison à une protéine', correct: true, correction: 'Oui. C\'est ainsi qu\'une protéine de surface est rattachée à l\'ancre.' },
      { text: 'La partie lipidique peut maintenir l\'ancre dans la membrane', correct: true, correction: 'Oui. Elle fournit l\'interaction hydrophobe avec la bicouche.' },
      { text: 'Tout GPI de surface doit nécessairement porter une protéine', correct: false, correction: 'Non. Certaines formes de GPI peuvent être présentes sans protéine liée.' },
    ],
    explanation: 'La structure explique le rôle d\'ancre, mais elle ne suffit pas à prédire seule la réponse immunitaire : il faut la tester. (Cours, p. 7–8)'
  },
  {
    id: 45,
    type: 'QCM',
    question: 'Pourquoi un GPI parasitaire de surface non lié à une protéine peut-il intéresser l\'étude des TLR ?',
    options: [
      { text: 'Il neutralise obligatoirement tout TNF-α', correct: false, correction: 'Non. Les expériences du cours examinent au contraire une possible induction de TNF-α.' },
      { text: 'Il ne peut jamais quitter le réticulum endoplasmique', correct: false, correction: 'Non. Le cours décrit des GPI exposés à la surface et des formes libres.' },
      { text: 'Il peut entrer en contact directement avec des cellules de l\'immunité innée', correct: true, correction: 'Oui. Une forme libre exposée est accessible à leurs récepteurs de reconnaissance.' },
      { text: 'Il transforme automatiquement le macrophage en lymphocyte T', correct: false, correction: 'Non. La reconnaissance innée ne change pas l\'identité de la cellule.' },
      { text: 'Il remplace l\'ADN nécessaire au parasite', correct: false, correction: 'Non. Un GPI n\'est pas un support d\'information génétique.' },
    ],
    explanation: 'Le cours souligne que l\'exposition de GPI libres rend plausible une reconnaissance directe par les cellules innées ; cette hypothèse doit être vérifiée expérimentalement. (Cours, p. 8)'
  },
  {
    id: 46,
    type: 'QRM',
    question: 'Avant d\'affirmer que tout GPI est également inflammatoire, quels paramètres faut-il considérer ?',
    options: [
      { text: 'La quantité effectivement présentée aux cellules', correct: true, correction: 'Oui. La réponse doit être interprétée par rapport à la dose appliquée.' },
      { text: 'Le seul nom de l\'espèce, indépendamment de la molécule isolée', correct: false, correction: 'Non. L\'identité de l\'espèce ne remplace pas la caractérisation du GPI et de la dose.' },
      { text: 'Le type de cellule et le système expérimental utilisés', correct: true, correction: 'Oui. Un résultat sur des macrophages ne se transpose pas sans contrôle à toute cellule.' },
      { text: 'La structure du GPI testé', correct: true, correction: 'Oui. Des différences de composition peuvent changer sa reconnaissance.' },
      { text: 'Une règle selon laquelle les GPI humains sont toujours inflammatoires', correct: false, correction: 'Non. Le cours indique précisément qu\'un GPI d\'origine humaine ne déclenche pas nécessairement cet effet.' },
    ],
    explanation: 'Comparer des GPI demande d\'aligner les conditions expérimentales et de tenir compte de la diversité structurale. (Cours, p. 8)'
  },
  {
    id: 47,
    type: 'QCM',
    question: 'Dans quel compartiment commence principalement la biosynthèse des ancres GPI décrite dans le cours ?',
    options: [
      { text: 'Le réticulum endoplasmique', correct: true, correction: 'Oui. Plusieurs étapes d\'assemblage de l\'ancre s\'y déroulent avant le transport ultérieur.' },
      { text: 'L\'espace extracellulaire uniquement', correct: false, correction: 'Non. L\'ancre est d\'abord élaborée dans une cellule eucaryote.' },
      { text: 'Le noyau', correct: false, correction: 'Non. Le noyau contient l\'ADN, mais n\'est pas le site d\'assemblage de l\'ancre décrit ici.' },
      { text: 'Le sang de l\'hôte', correct: false, correction: 'Non. La biosynthèse est une activité de la cellule qui produit l\'ancre.' },
      { text: 'Le lysosome du macrophage', correct: false, correction: 'Non. Le macrophage est la cellule utilisée pour tester l\'effet des GPI, pas leur lieu de synthèse parasitaire.' },
    ],
    explanation: 'Le GPI est assemblé dans le réticulum endoplasmique, puis les formes destinées à la surface suivent le trafic cellulaire. (Cours, p. 7)'
  },
  {
    id: 48,
    type: 'QRM',
    question: 'Quelles affirmations sur le devenir cellulaire des GPI sont compatibles avec le cours ?',
    options: [
      { text: 'Tous les GPI restent définitivement dans le noyau', correct: false, correction: 'Non. Leur rôle décrit ici concerne notamment la surface cellulaire.' },
      { text: 'Des protéines ancrées par GPI peuvent transiter vers la surface via le Golgi', correct: true, correction: 'Oui. Le trafic sécrétoire permet leur acheminement vers la membrane.' },
      { text: 'Des étapes de biosynthèse ont lieu dans le réticulum endoplasmique', correct: true, correction: 'Oui. Le cours y situe l\'assemblage de l\'ancre.' },
      { text: 'Certaines formes de GPI peuvent être exposées sans protéine attachée', correct: true, correction: 'Oui. Cette possibilité motive leur étude comme molécules reconnues directement.' },
      { text: 'La présence de GPI libre exclut tout contact avec une cellule immunitaire', correct: false, correction: 'Non. L\'exposition d\'une forme libre rend au contraire ce contact possible.' },
    ],
    explanation: 'La biosynthèse et le trafic cellulaire expliquent comment des GPI, liés ou non à une protéine, peuvent devenir accessibles à l\'immunité innée. (Cours, p. 7–8)'
  },
  {
    id: 49,
    type: 'QCM',
    question: 'Pourquoi marquer une culture de T. gondii avec un précurseur radioactif avant d\'extraire ses GPI ?',
    options: [
      { text: 'Pour démontrer à lui seul que TLR2 est le récepteur du GPI', correct: false, correction: 'Non. La détection d\'une molécule ne prouve pas la spécificité d\'un récepteur.' },
      { text: 'Pour mesurer directement le TNF-α produit par un macrophage', correct: false, correction: 'Non. La sécrétion de TNF-α sera évaluée séparément, notamment par ELISA.' },
      { text: 'Pour convertir toutes les formes de GPI en une seule structure', correct: false, correction: 'Non. Le marquage sert de traceur et ne rend pas les structures identiques.' },
      { text: 'Pour observer directement la transcription du gène TNF', correct: false, correction: 'Non. Le protocole concerne d\'abord l\'extraction et la détection des glycolipides.' },
      { text: 'Pour suivre et détecter les GPI contenant le précurseur lors de la séparation', correct: true, correction: 'Oui. Le signal radioactif révèle les composés marqués sur la chromatographie.' },
    ],
    explanation: 'Le marquage métabolique rend visibles les GPI extraits et séparés ; il ne mesure pas leur effet biologique. (Cours, p. 8)'
  },
  {
    id: 50,
    type: 'QRM',
    question: 'Quelles étapes appartiennent à la stratégie de préparation et de détection des GPI décrite dans le cours ?',
    options: [
      { text: 'Déduire la concentration de TNF-α de la seule hauteur de chaque pic chromatographique', correct: false, correction: 'Non. La production de TNF-α se mesure dans une expérience cellulaire distincte.' },
      { text: 'Extraire les glycolipides avec des solvants organiques', correct: true, correction: 'Oui. Cette étape récupère la fraction contenant les GPI étudiés.' },
      { text: 'Marquer métaboliquement les parasites avec un précurseur glucidique', correct: true, correction: 'Oui. Le cours emploie une glucosamine radioactive comme traceur.' },
      { text: 'Détecter la radioactivité des fractions séparées', correct: true, correction: 'Oui. Le signal permet de repérer les zones marquées.' },
      { text: 'Séparer les molécules par chromatographie sur couche mince', correct: true, correction: 'Oui. Leur migration donne des fractions distinctes.' },
    ],
    explanation: 'La chaîne expérimentale est marquage, extraction, séparation et détection ; le test fonctionnel vient ensuite. (Cours, p. 8–9)'
  },
  {
    id: 51,
    type: 'QCM',
    question: 'Que signifie l\'apparition de plusieurs zones de migration après chromatographie des GPI extraits ?',
    options: [
      { text: 'Chaque zone correspond nécessairement à un TLR différent', correct: false, correction: 'Non. La chromatographie sépare des molécules et ne mesure pas leur récepteur.' },
      { text: 'Tous les composés ont exactement la même structure', correct: false, correction: 'Non. Des migrations différentes suggèrent au contraire plusieurs formes, sous réserve de les identifier.' },
      { text: 'La préparation contient des composés marqués aux comportements chromatographiques différents', correct: true, correction: 'Oui. Leurs différences de structure modifient leurs interactions avec la phase stationnaire et le solvant.' },
      { text: 'Chaque zone prouve une quantité identique de GPI', correct: false, correction: 'Non. L\'intensité radioactive varie d\'une zone à l\'autre.' },
      { text: 'La production de TNF-α a déjà été démontrée par la plaque', correct: false, correction: 'Non. Il faut ensuite exposer des cellules aux fractions et doser leur réponse.' },
    ],
    explanation: 'La séparation renseigne sur l\'hétérogénéité physicochimique des composés ; elle précède l\'analyse de leur activité immunitaire. (Cours, p. 8–9)'
  },
  {
    id: 52,
    type: 'QRM',
    question: 'Comment interpréter prudemment les pics de GPI marqués sur la chromatographie du cours ?',
    options: [
      { text: 'La seule position d\'un pic prouve qu\'il active TLR4', correct: false, correction: 'Non. La spécificité de signalisation exige un essai cellulaire contrôlé.' },
      { text: 'Une migration identique garantit une activité biologique identique', correct: false, correction: 'Non. Des molécules co-migrantes peuvent différer et leur effet doit être testé.' },
      { text: 'Des différences de substitutions glucidiques peuvent modifier la migration', correct: true, correction: 'Oui. La composition du GPI influence ses propriétés de séparation.' },
      { text: 'Un pic radioactif indique la présence de matériel marqué à cette position', correct: true, correction: 'Oui. C\'est le résultat directement donné par la détection radioactive.' },
      { text: 'Des différences dans la partie lipidique peuvent aussi modifier la migration', correct: true, correction: 'Oui. Deux GPI proches peuvent différer notamment par leur lipide.' },
    ],
    explanation: 'Le cours relie les profils chromatographiques à plusieurs structures de GPI, mais une plaque ne suffit pas à attribuer un mécanisme immunitaire. (Cours, p. 8–9)'
  },
  {
    id: 53,
    type: 'QCM',
    question: 'Dans le profil radioactif après chromatographie, que représente directement la hauteur d\'un pic ?',
    options: [
      { text: 'La concentration de TNF-α du surnageant', correct: false, correction: 'Non. Le TNF-α est dosé par une méthode spécifique telle que l\'ELISA.' },
      { text: 'L\'intensité du signal radioactif détecté dans cette zone de migration', correct: true, correction: 'Oui. Le pic reflète le traceur mesuré, pas directement une cytokine ou un récepteur.' },
      { text: 'Le nombre de macrophages vivants après stimulation', correct: false, correction: 'Non. Ces cellules interviennent dans un essai fonctionnel ultérieur.' },
      { text: 'La force de liaison au TLR4', correct: false, correction: 'Non. La chromatographie ne mesure pas une interaction ligand-récepteur.' },
      { text: 'La quantité exacte de tous les GPI, marqués ou non, sans étalonnage', correct: false, correction: 'Non. Un signal de traceur ne donne pas à lui seul une masse absolue de tous les composés.' },
    ],
    explanation: 'Il faut séparer le signal analytique du marquage radioactif de l\'activité inflammatoire mesurée ensuite sur cellules. (Cours, p. 9)'
  },
  {
    id: 54,
    type: 'QRM',
    question: 'Quelles étapes permettent de mesurer le TNF-α sécrété par des macrophages stimulés par des GPI dans le protocole du cours ?',
    options: [
      { text: 'Comparer le signal à une gamme étalon adaptée', correct: true, correction: 'Oui. Une courbe de référence permet d\'estimer la concentration.' },
      { text: 'Utiliser un second anticorps reconnaissant le TNF-α pour le révéler', correct: true, correction: 'Oui. Le deuxième anticorps fournit la détection du complexe capturé.' },
      { text: 'Recueillir le surnageant après incubation des macrophages avec les GPI', correct: true, correction: 'Oui. Le TNF-α sécrété se trouve dans ce milieu.' },
      { text: 'Capturer le TNF-α avec un anticorps spécifique', correct: true, correction: 'Oui. C\'est la première reconnaissance de l\'ELISA sandwich.' },
      { text: 'Conclure à la liaison directe du GPI au TLR4 grâce à la couleur seule', correct: false, correction: 'Non. L\'ELISA renseigne sur le TNF-α, pas sur le récepteur qui a causé sa production.' },
    ],
    explanation: 'L\'ELISA sandwich transforme la présence de TNF-α dans le surnageant en un signal quantifiable ; l\'identité du récepteur exige d\'autres contrôles. (Cours, p. 9)'
  },
  {
    id: 55,
    type: 'QCM',
    question: 'Que montre directement une hausse de TNF-α dans le surnageant de macrophages après ajout d\'une fraction GPI, comparée au témoin ?',
    options: [
      { text: 'Le GPI se lie directement et exclusivement à TLR2', correct: false, correction: 'Non. Un dosage de cytokine ne révèle ni une liaison directe ni un récepteur exclusif.' },
      { text: 'Tous les GPI de toutes les espèces ont le même effet', correct: false, correction: 'Non. La conclusion reste limitée aux fractions et aux conditions testées.' },
      { text: 'Le parasite a nécessairement été éliminé par les macrophages', correct: false, correction: 'Non. La sécrétion de TNF-α n\'est pas une mesure directe de l\'élimination parasitaire.' },
      { text: 'Cette fraction est associée à une augmentation de la sécrétion de TNF-α dans ces conditions', correct: true, correction: 'Oui. C\'est la conclusion permise par le dosage du surnageant et la comparaison au témoin.' },
      { text: 'NF-κB est le seul facteur de transcription impliqué', correct: false, correction: 'Non. Cette expérience ne mesure pas directement les facteurs de transcription.' },
    ],
    explanation: 'Le dosage de TNF-α fournit un effet fonctionnel des fractions de GPI sur les macrophages, sans identifier à lui seul la voie de reconnaissance. (Cours, p. 9–10)'
  },
  {
    id: 56,
    type: 'QRM',
    question: 'Quelles conclusions prudentes peut-on tirer des essais du cours comparant GPI intact, GPI sans lipide et fragments séparés ?',
    options: [
      { text: 'Des fragments de GPI peuvent conserver une activité de stimulation', correct: true, correction: 'Oui. Le cours rapporte des effets après séparation de composantes de l\'ancre.' },
      { text: 'L\'intégrité de la partie lipidique n\'est pas une condition universelle de toute activité testée', correct: true, correction: 'Oui. Une construction sans lipide peut rester active dans un système expérimental donné.' },
      { text: 'Seul le GPI entièrement intact peut stimuler une cellule', correct: false, correction: 'Non. Les expériences sur des molécules dépourvues de lipide ou clivées contredisent cette règle absolue.' },
      { text: 'La structure testée et le système cellulaire conditionnent l\'interprétation', correct: true, correction: 'Oui. Une réponse en cellule rapporteuse n\'est pas automatiquement identique à celle d\'un macrophage.' },
      { text: 'Tout GPI de mammifère et de parasite donne exactement la même réponse', correct: false, correction: 'Non. La diversité structurale et les conditions d\'exposition interdisent cette généralisation.' },
    ],
    explanation: 'Les essais structure–effet montrent que plusieurs composantes peuvent être immunostimulantes ; la réponse dépend du modèle et du récepteur testés. (Cours, p. 8–10 ; Debierre-Grockiego et al., J Immunol, 2007)'
  },
  {
    id: 57,
    type: 'QCM',
    question: 'Dans la voie canonique évoquée dans le cours, quel événement permet à NF-κB de gagner le noyau ?',
    options: [
      { text: 'La transformation de NF-κB en récepteur TLR transmembranaire', correct: false, correction: 'Non. NF-κB est un facteur de transcription, pas un TLR.' },
      { text: 'La synthèse d\'un nouveau GPI dans le noyau du macrophage', correct: false, correction: 'Non. Le GPI est le stimulus étudié, non l\'étape qui libère directement NF-κB.' },
      { text: 'La phosphorylation puis la dégradation de son inhibiteur IκB', correct: true, correction: 'Oui. La perte d\'IκB libère NF-κB, qui peut alors se localiser dans le noyau.' },
      { text: 'La phosphorylation obligatoire d\'une proline d\'IκB', correct: false, correction: 'Non. La voie canonique implique des phosphorylations de sérines d\'IκBα, et non la proline mentionnée par erreur dans le support.' },
      { text: 'La disparition de toutes les molécules de TNF-α', correct: false, correction: 'Non. NF-κB participe à l\'induction de gènes inflammatoires, dont celui du TNF-α.' },
    ],
    explanation: 'Après activation de la voie, IκB phosphorylé est ubiquitiné puis dégradé, ce qui libère NF-κB pour sa translocation nucléaire. (Cours, p. 10 ; Traenckner et al., EMBO J, 1995)'
  },
  {
    id: 58,
    type: 'QRM',
    question: 'Quelles propositions décrivent correctement le test de retard sur gel (EMSA) appliqué à NF-κB ?',
    options: [
      { text: 'Des extraits nucléaires sont pertinents pour tester le facteur actif lié à l\'ADN', correct: true, correction: 'Oui. NF-κB activé peut s\'accumuler dans le noyau.' },
      { text: 'Une protéine liée à la sonde peut ralentir la migration de celle-ci', correct: true, correction: 'Oui. Le complexe ADN–protéine migre différemment de la sonde libre.' },
      { text: 'Le test mesure directement la concentration de TNF-α dans le surnageant', correct: false, correction: 'Non. Cette concentration se mesure par ELISA dans l\'expérience décrite.' },
      { text: 'Il utilise une sonde d\'ADN portant une séquence reconnue par NF-κB', correct: true, correction: 'Oui. La séquence consensus permet de tester la liaison du facteur à l\'ADN.' },
      { text: 'Un anticorps anti-NF-κB peut produire un retard supplémentaire du complexe', correct: true, correction: 'Oui. Ce supershift apporte un argument sur l\'identité du facteur lié.' },
    ],
    explanation: 'L\'EMSA documente la liaison à l\'ADN d\'un facteur nucléaire ; le supershift ajoute une vérification par anticorps. (Cours, p. 10)'
  },
  {
    id: 59,
    type: 'QCM',
    question: 'Dans un EMSA, que suggère un retard supplémentaire après ajout d\'un anticorps anti-NF-κB spécifique ?',
    options: [
      { text: 'Le TNF-α a déjà été quantifié par la migration', correct: false, correction: 'Non. Le TNF-α est dosé séparément, par exemple par ELISA.' },
      { text: 'Tous les GPI de l\'échantillon ont la même structure', correct: false, correction: 'Non. La composition des GPI se caractérise par d\'autres méthodes.' },
      { text: 'NF-κB participe au complexe lié à la sonde d\'ADN', correct: true, correction: 'Oui. L\'anticorps agrandit le complexe reconnu et modifie sa mobilité.' },
      { text: 'TLR4 est nécessairement l\'unique récepteur initial', correct: false, correction: 'Non. Le supershift identifie un facteur de transcription, pas le récepteur qui l\'a activé.' },
      { text: 'La sonde est devenue une molécule de TNF-α', correct: false, correction: 'Non. La sonde reste un oligonucléotide d\'ADN.' },
    ],
    explanation: 'Un supershift anti-NF-κB appuie l\'identification du facteur dans le complexe ADN–protéine, sans identifier l\'étape amont de la signalisation. (Cours, p. 10)'
  },
  {
    id: 60,
    type: 'QRM',
    question: 'Comment articuler les résultats d\'ELISA TNF-α et d\'EMSA NF-κB après stimulation par des GPI ?',
    options: [
      { text: 'L\'EMSA renseigne sur la liaison nucléaire d\'un facteur à une séquence d\'ADN', correct: true, correction: 'Oui. C\'est la propriété mesurée par le retard de migration.' },
      { text: 'Ces deux tests suffisent à prouver que TLR4 est l\'unique récepteur impliqué', correct: false, correction: 'Non. Il faut des expériences de récepteur, par exemple des cellules déficientes ou reconstituées.' },
      { text: 'Un signal ELISA coloré signifie directement qu\'IκB a été phosphorylé', correct: false, correction: 'Non. La coloration reflète le TNF-α détecté, pas l\'état moléculaire d\'IκB.' },
      { text: 'L\'ELISA renseigne sur une cytokine sécrétée', correct: true, correction: 'Oui. Il quantifie le TNF-α présent dans le surnageant.' },
      { text: 'Un supershift spécifique renforce l\'identification de NF-κB dans le complexe', correct: true, correction: 'Oui. L\'anticorps modifie la mobilité si le facteur reconnu est présent.' },
    ],
    explanation: 'Les mesures sont complémentaires : réponse inflammatoire d\'un côté, liaison d\'un facteur de transcription à l\'ADN de l\'autre. La causalité et le récepteur amont demandent des contrôles supplémentaires. (Cours, p. 9–10)'
  },
  {
    id: 61,
    type: 'QCM',
    question: 'Pourquoi les cellules CHO modifiées sont-elles utilisées dans l\'expérience de reconnaissance des GPI ?',
    options: [
      { text: 'Pour cultiver les oocystes dans le plasma humain', correct: false, correction: 'Non. Leur rôle ici est celui d\'un système de signalisation rapporteur.' },
      { text: 'Pour comparer des réponses dans des cellules exprimant des ensembles définis de TLR', correct: true, correction: 'Oui. La modification de TLR2 ou de la signalisation TLR4 permet d\'attribuer une réponse à une voie donnée.' },
      { text: 'Pour montrer que toutes les cellules humaines portent naturellement les mêmes TLR', correct: false, correction: 'Non. Les cellules CHO sont des cellules de hamster modifiées, pas un échantillon de cellules humaines.' },
      { text: 'Pour mesurer directement l\'efficacité d\'un vaccin chez la femme enceinte', correct: false, correction: 'Non. Une lignée cellulaire ne mesure pas une efficacité clinique.' },
      { text: 'Pour remplacer l\'ADN du parasite par du CD25', correct: false, correction: 'Non. CD25 est un gène rapporteur de la cellule expérimentale, pas un constituant du parasite.' },
    ],
    explanation: 'Les lignées CHO reconstituées servent à isoler la contribution de récepteurs précis ; un résultat dans ce modèle doit ensuite être confronté aux cellules immunitaires. (Cours, p. 11–12)'
  },
  {
    id: 62,
    type: 'QRM',
    question: 'Quels éléments rendent le montage expérimental TLR2/TLR4 interprétable ?',
    options: [
      { text: 'L\'introduction de TLR2 dans certaines cellules', correct: true, correction: 'Oui. Cette comparaison permet d\'examiner une réponse attribuable à TLR2.' },
      { text: 'Une même condition expérimentale sans aucun témoin de stimulation', correct: false, correction: 'Non. Les témoins positifs sont nécessaires pour vérifier le fonctionnement des voies.' },
      { text: 'Un gène rapporteur placé sous le contrôle de NF-κB', correct: true, correction: 'Oui. Son expression signale l\'activation de cette voie de transcription.' },
      { text: 'L\'hypothèse que les cellules CHO démontrent à elles seules le rôle d\'un TLR chez l\'humain', correct: false, correction: 'Non. La transposition à un organisme ou à des macrophages exige d\'autres expériences.' },
      { text: 'Des cellules dont la réponse TLR4 peut être rendue déficiente par modification de MD-2', correct: true, correction: 'Oui. MD-2 participe à la reconnaissance du LPS par le complexe TLR4.' },
    ],
    explanation: 'Le modèle combine récepteurs définis, manipulation de MD-2 et lecture d\'un rapporteur NF-κB ; chaque modification contrôle une question différente. (Cours, p. 11)'
  },
  {
    id: 63,
    type: 'QCM',
    question: 'Quelle molécule de surface sert de rapporteur de l\'activité NF-κB dans les cellules CHO du cours ?',
    options: [
      { text: 'Le CMH II du parasite', correct: false, correction: 'Non. Le parasite n\'exprime pas le CMH II utilisé par les CPA de l\'hôte.' },
      { text: 'MMP-9', correct: false, correction: 'Non. Cette métalloprotéinase est étudiée dans les macrophages dérivés de THP-1.' },
      { text: 'CD25', correct: true, correction: 'Oui. La chaîne α du récepteur de l\'IL-2 est exprimée ici sous le contrôle d\'un promoteur sensible à NF-κB.' },
      { text: 'MD-2', correct: false, correction: 'Non. MD-2 intervient dans le complexe TLR4, mais n\'est pas le signal de lecture choisi.' },
      { text: 'CD14', correct: false, correction: 'Non. CD14 est un corécepteur de présentation du LPS, pas le rapporteur indiqué.' },
    ],
    explanation: 'Dans cette construction expérimentale, l\'activation de NF-κB entraîne l\'expression de CD25, détectable à la surface cellulaire. (Cours, p. 11)'
  },
  {
    id: 64,
    type: 'QRM',
    question: 'Quelles étapes décrivent correctement la lecture de CD25 par cytométrie en flux ?',
    options: [
      { text: 'Les cellules sont analysées individuellement dans un flux', correct: true, correction: 'Oui. La méthode permet de comparer des populations cellulaires.' },
      { text: 'La cytométrie remplace tous les témoins positifs et négatifs', correct: false, correction: 'Non. Les contrôles restent indispensables à l\'interprétation.' },
      { text: 'Un laser excite le fluorochrome, dont l\'émission est détectée', correct: true, correction: 'Oui. Le signal fluorescent renseigne sur le marquage de chaque cellule.' },
      { text: 'Un signal fluorescent prouve à lui seul que TLR4 a lié directement la GPI', correct: false, correction: 'Non. Le rapporteur renseigne sur une voie activée, pas sur une interaction physique directe.' },
      { text: 'Un anticorps anti-CD25 marqué se fixe aux cellules exprimant CD25', correct: true, correction: 'Oui. Le fluorochrome rend la liaison mesurable.' },
    ],
    explanation: 'La cytométrie mesure ici l\'expression du rapporteur CD25 ; elle démontre une réponse cellulaire, pas une liaison moléculaire directe au TLR. (Cours, p. 11–12)'
  },
  {
    id: 65,
    type: 'QCM',
    question: 'Quel est le rôle principal d\'un anticorps de contrôle isotypique dans cette cytométrie ?',
    options: [
      { text: 'Estimer le bruit de fond dû à un marquage non spécifique', correct: true, correction: 'Oui. Il conserve l\'isotype du test sans reconnaître la cible CD25.' },
      { text: 'Prouver que CD25 est une GPI parasitaire', correct: false, correction: 'Non. CD25 est un marqueur de surface de la cellule expérimentale.' },
      { text: 'Remplacer l\'anticorps anti-CD25 dans le tube positif', correct: false, correction: 'Non. Le tube anti-CD25 reste nécessaire pour mesurer la cible.' },
      { text: 'Bloquer obligatoirement tous les TLR de la cellule', correct: false, correction: 'Non. Ce contrôle n\'est pas un anticorps bloquant de TLR.' },
      { text: 'Mesurer directement la concentration sanguine de TNF-α', correct: false, correction: 'Non. La cytométrie décrite lit CD25, tandis que le TNF-α nécessite un dosage adapté.' },
    ],
    explanation: 'Le témoin isotypique aide à distinguer une fluorescence propre à l\'anticorps anti-CD25 d\'une fixation non spécifique. (Cours, p. 12)'
  },
  {
    id: 66,
    type: 'QRM',
    question: 'Quels témoins positifs ou comparaisons sont cohérents avec l\'expérience décrite ?',
    options: [
      { text: 'L\'absence de fluorescence comme preuve que la GPI ne peut jamais être reconnue dans aucun organisme', correct: false, correction: 'Non. Un résultat négatif dépend du système et des conditions testés.' },
      { text: 'Des cellules avec et sans TLR2 pour comparer la contribution de ce récepteur', correct: true, correction: 'Oui. La variable récepteur aide à attribuer la réponse.' },
      { text: 'Le LPS comme témoin spécifique de la voie TLR3 endosomique', correct: false, correction: 'Non. TLR3 reconnaît surtout l\'ARN double brin, pas le LPS.' },
      { text: 'Un extrait bactérien stimulant TLR2 pour vérifier cette autre voie', correct: true, correction: 'Oui. Le support utilise un extrait de staphylocoque comme contrôle de réponse TLR2.' },
      { text: 'Le LPS pour vérifier une voie TLR4 fonctionnelle', correct: true, correction: 'Oui. Le complexe TLR4/MD-2 reconnaît le LPS bactérien.' },
    ],
    explanation: 'LPS et stimuli associés à TLR2 vérifient séparément les voies du système rapporteur avant l\'interprétation des GPI. (Cours, p. 11–12)'
  },
  {
    id: 67,
    type: 'QCM',
    question: 'Quel partenaire de TLR4 est nécessaire à la réponse classique au LPS dans le montage présenté ?',
    options: [
      { text: 'MMP-9', correct: false, correction: 'Non. Cette enzyme de matrice n\'est pas le corécepteur du LPS.' },
      { text: 'CD25', correct: false, correction: 'Non. CD25 est le rapporteur mesuré après activation de NF-κB.' },
      { text: 'La profiline de Toxoplasma', correct: false, correction: 'Non. La profiline parasitaire concerne d\'autres voies de reconnaissance chez la souris.' },
      { text: 'MD-2', correct: true, correction: 'Oui. Ce partenaire du complexe TLR4 permet la réponse au LPS dans les cellules CHO étudiées.' },
      { text: 'IRF-γ', correct: false, correction: 'Non. Le cours distingue les facteurs IRF des interférons ; IRF-γ n\'est pas le partenaire de TLR4.' },
    ],
    explanation: 'Modifier MD-2 permet de désactiver la voie TLR4/LPS sans supprimer nécessairement la présence de TLR4 à la surface. (Cours, p. 11)'
  },
  {
    id: 68,
    type: 'QRM',
    question: 'Que montrent les résultats du modèle CHO rapportés pour les GPI de T. gondii ?',
    options: [
      { text: 'Ces résultats prouvent que TLR2 ne participe jamais à la réponse d\'un macrophage', correct: false, correction: 'Non. Les macrophages peuvent utiliser des voies redondantes TLR2/TLR4.' },
      { text: 'Le gène rapporteur révèle directement la structure atomique du ligand', correct: false, correction: 'Non. Il signale une activation fonctionnelle, pas une structure chimique.' },
      { text: 'Les GPI intactes activent le rapporteur dans des cellules exprimant une voie TLR4 fonctionnelle', correct: true, correction: 'Oui. C\'est le résultat de ce montage cellulaire précis.' },
      { text: 'Le glycan synthétique dépourvu de lipide active aussi ce rapporteur TLR4', correct: true, correction: 'Oui. Le motif glycanique contribue à la réponse observée.' },
      { text: 'Des fragments séparés de GPI peuvent activer des cellules exprimant TLR2 et TLR4', correct: true, correction: 'Oui. La coupure modifie l\'exposition des motifs reconnus.' },
    ],
    explanation: 'La spécificité apparente dépend de la forme du ligand et du type cellulaire : GPI entière et glycan dans le modèle TLR4, fragments dans les modèles TLR2 et TLR4. (Cours, p. 12 ; Debierre-Grockiego et al., 2007)'
  },
  {
    id: 69,
    type: 'QCM',
    question: 'Quelle conclusion explique qu\'une GPI entière et ses fragments n\'aient pas exactement le même profil de réponse TLR ?',
    options: [
      { text: 'Le fragment lipidique perd obligatoirement toute capacité de stimulation', correct: false, correction: 'Non. Des fragments séparés ont stimulé les cellules du montage.' },
      { text: 'La présentation du motif change après séparation des parties lipidique et glycanique', correct: true, correction: 'Oui. Une modification de structure ou d\'accessibilité peut modifier la réponse du récepteur.' },
      { text: 'TLR2 et TLR4 possèdent nécessairement un ligand unique identique', correct: false, correction: 'Non. Des motifs distincts et le contexte cellulaire influencent leur activation.' },
      { text: 'La GPI se transforme toujours en virus après clivage', correct: false, correction: 'Non. Une coupure chimique ne crée pas un virus.' },
      { text: 'La réponse des CHO impose la même hiérarchie dans toutes les cellules humaines', correct: false, correction: 'Non. Le modèle CHO n\'est pas interchangeable avec un macrophage primaire.' },
    ],
    explanation: 'Un test de fragments distingue le rôle des différentes parties d\'une GPI et rappelle que la forme accessible du ligand compte. (Cours, p. 12)'
  },
  {
    id: 70,
    type: 'QRM',
    question: 'Quelles observations soutiennent une réponse macrophagique aux GPI dépendante de MyD88 et impliquant TLR2/TLR4 ?',
    options: [
      { text: 'Une forte baisse du TNF-α lorsque MyD88 est absent', correct: true, correction: 'Oui. L\'adaptateur est central pour la réponse mesurée.' },
      { text: 'La perte de réponse lorsque TLR2 et TLR4 sont tous deux absents', correct: true, correction: 'Oui. La double déficience retire des voies pouvant se compenser.' },
      { text: 'Un seul test en CHO suffit à établir ce mécanisme dans tous les macrophages humains', correct: false, correction: 'Non. Les résultats en cellules rapporteurs doivent être testés dans des cellules immunitaires.' },
      { text: 'L\'absence de MyD88 entraîne toujours une hausse du TNF-α induit par les GPI', correct: false, correction: 'Non. Le résultat rapporté est inverse.' },
      { text: 'Une réponse résiduelle possible lorsque l\'un des deux TLR manque seul', correct: true, correction: 'Oui. L\'autre récepteur peut contribuer dans ce système.' },
    ],
    explanation: 'Dans les expériences rapportées, MyD88 est essentiel à la réponse TNF-α ; TLR2 et TLR4 contribuent de manière partiellement redondante. (Cours, p. 13 ; Debierre-Grockiego et al., 2007)'
  },
  {
    id: 71,
    type: 'QCM',
    question: 'Que signifie l\'absence de baisse nette de TNF-α dans les macrophages dépourvus de CD14 après stimulation par les GPI étudiées ?',
    options: [
      { text: 'La production de TNF-α prouve que CD14 est une cytokine nucléaire', correct: false, correction: 'Non. CD14 est un corécepteur, pas une cytokine nucléaire.' },
      { text: 'Le macrophage a perdu tous ses récepteurs TLR', correct: false, correction: 'Non. La déficience examinée porte sur CD14.' },
      { text: 'Les GPI n\'activent aucun récepteur de l\'immunité innée', correct: false, correction: 'Non. La production de TNF-α indique une réponse innée.' },
      { text: 'CD14 n\'intervient jamais dans aucune réponse au LPS', correct: false, correction: 'Non. Le complexe de reconnaissance du LPS comporte habituellement CD14.' },
      { text: 'CD14 n\'est pas indispensable à cette réponse précise aux GPI', correct: true, correction: 'Oui. Ce constat expérimental ne retire pas son rôle dans la présentation du LPS au complexe TLR4.' },
    ],
    explanation: 'L\'exigence d\'un corécepteur dépend du ligand et de la réponse observée : CD14 est important pour le LPS, mais n\'est pas requis dans cette expérience sur les GPI. (Cours, p. 13 ; Debierre-Grockiego et al., 2007)'
  },
  {
    id: 72,
    type: 'QRM',
    question: 'Quelles associations décrivent les deux voies de signalisation possibles de TLR4 ?',
    options: [
      { text: 'TLR4 — obligation de bloquer tous les facteurs de transcription', correct: false, correction: 'Non. La stimulation de TLR4 peut au contraire les activer.' },
      { text: 'MyD88 — activation de NF-κB et de gènes pro-inflammatoires', correct: true, correction: 'Oui. Cette voie favorise notamment la production de TNF-α.' },
      { text: 'TRIF — activation d\'IRF3 et induction d\'IFN-β', correct: true, correction: 'Oui. Elle participe à la réponse interféron de type I.' },
      { text: 'TLR4 — capacité d\'utiliser MyD88 ou TRIF selon le contexte', correct: true, correction: 'Oui. Cette double voie distingue TLR4 de TLR3 dans le schéma du cours.' },
      { text: 'IFN-β — activation de son récepteur puis de STAT1 dans une cellule répondante', correct: true, correction: 'Oui. L\'interféron sécrété peut amplifier des gènes stimulés par l\'interféron.' },
    ],
    explanation: 'TLR4 peut engager les voies MyD88/NF-κB et TRIF/IRF3 ; ces voies n\'induisent pas exactement le même programme de gènes. (Cours, p. 12, 16)'
  },
  {
    id: 73,
    type: 'QCM',
    question: 'Si l\'IFN-β sécrété agit sur la cellule qui l\'a produit, quel terme décrit ce mode d\'action ?',
    options: [
      { text: 'Autocrine', correct: true, correction: 'Oui. La cellule productrice répond à son propre médiateur par ses récepteurs.' },
      { text: 'Transplacentaire', correct: false, correction: 'Non. Ce terme concerne le passage de la barrière placentaire.' },
      { text: 'Paracrine uniquement', correct: false, correction: 'Non. Paracrine désigne une action sur des cellules voisines.' },
      { text: 'Antigénique', correct: false, correction: 'Non. Il ne décrit pas la destination du signal cytokine.' },
      { text: 'Phagocytaire', correct: false, correction: 'Non. Ce terme décrit l\'ingestion de particules, pas le mode d\'action d\'une cytokine.' },
    ],
    explanation: 'L\'IFN-β peut agir de façon autocrine sur la cellule productrice ou paracrine sur des cellules voisines. (Cours, p. 12)'
  },
  {
    id: 74,
    type: 'QRM',
    question: 'Quelles conclusions sont raisonnables à partir de l\'expérience THP-1 exposée aux GPI ?',
    options: [
      { text: 'Les cellules THP-1 peuvent être différenciées en macrophages pour ce modèle', correct: true, correction: 'Oui. Le cours décrit ce système cellulaire pour étudier une réponse humaine.' },
      { text: 'La production de MMP-9 peut être mesurée après exposition aux GPI', correct: true, correction: 'Oui. Il s\'agit de la variable examinée dans cette expérience.' },
      { text: 'THP-1 est le nom du corécepteur du LPS sur TLR4', correct: false, correction: 'Non. THP-1 est une lignée cellulaire humaine, pas un corécepteur.' },
      { text: 'Cette seule expérience prouve que les GPI font franchir le placenta à tous les parasites', correct: false, correction: 'Non. Un résultat in vitro sur MMP-9 ne démontre pas un passage placentaire universel.' },
      { text: 'MMP-9 peut contribuer à la dégradation de composants de la matrice extracellulaire', correct: true, correction: 'Oui. Cette activité motive l\'étude d\'un éventuel effet sur les barrières tissulaires.' },
    ],
    explanation: 'L\'essai THP-1 relie les GPI à une réponse MMP-9 dans un modèle cellulaire ; le franchissement des barrières reste une hypothèse à éprouver séparément. (Cours, p. 13)'
  },
  {
    id: 75,
    type: 'QCM',
    question: 'Quel agoniste de TLR4 dérivé du lipide A est utilisé comme adjuvant dans certains vaccins cités par le cours ?',
    options: [
      { text: 'L\'interféron IFN-γ transformé en LPS', correct: false, correction: 'Non. Une cytokine ne devient pas un lipopolysaccharide.' },
      { text: 'La GPI entière de Toxoplasma comme ingrédient de tous les vaccins humains', correct: false, correction: 'Non. Le support présente les GPI comme une piste expérimentale, non un adjuvant universel autorisé.' },
      { text: 'L\'ADN gyrase bactérienne', correct: false, correction: 'Non. Cette enzyme n\'est pas l\'adjuvant TLR4 décrit.' },
      { text: 'Le MPL, ou lipide A monophosphorylé', correct: true, correction: 'Oui. Ce dérivé du LPS stimule TLR4 dans des formulations adjuvantes.' },
      { text: 'Le récepteur CD25 purifié', correct: false, correction: 'Non. CD25 sert de rapporteur dans l\'expérience CHO, pas d\'agoniste TLR4 vaccinal.' },
    ],
    explanation: 'Le MPL est un dérivé détoxifié du lipide A du LPS employé dans certains systèmes adjuvants ciblant TLR4. (Cours, p. 14 ; EMA, Cervarix et Fendrix)'
  },
  {
    id: 76,
    type: 'QRM',
    question: 'Quelles affirmations sur les vaccins contenant un adjuvant MPL sont exactes ?',
    options: [
      { text: 'Cervarix contient un système adjuvant avec MPL', correct: true, correction: 'Oui. Cette formulation contre certains papillomavirus est documentée par l\'EMA.' },
      { text: 'Fendrix contient aussi un système adjuvant avec MPL', correct: true, correction: 'Oui. Ce vaccin contre l\'hépatite B destiné à une population particulière est également documenté.' },
      { text: 'Tous les vaccins contre l\'hépatite B et tous les vaccins contre le HPV contiennent MPL', correct: false, correction: 'Non. Le cours cite des exemples de formulations, pas une règle de classe.' },
      { text: 'MPL est l\'antigène viral L1 du papillomavirus', correct: false, correction: 'Non. C\'est un adjuvant bactérien distinct de l\'antigène vaccinal L1.' },
      { text: 'La présence de MPL vise à stimuler la réponse immunitaire innée', correct: true, correction: 'Oui. L\'effet adjuvant facilite la réponse à l\'antigène vaccinal.' },
    ],
    explanation: 'Les exemples doivent être attribués à des produits précis : Cervarix et Fendrix, sans généraliser à toutes les marques de vaccin. (Cours, p. 14 ; EMA, Cervarix et Fendrix)'
  },
  {
    id: 77,
    type: 'QCM',
    question: 'Quel statut donner aux pistes d\'agonistes TLR pour certaines immunothérapies anticancéreuses ou antiallergiques évoquées ?',
    options: [
      { text: 'Une efficacité clinique démontrée pour tous les cancers et toutes les allergies', correct: false, correction: 'Non. Le cours ne justifie pas une généralisation à toutes ces maladies.' },
      { text: 'Un traitement consistant toujours à supprimer MyD88 chez tous les patients', correct: false, correction: 'Non. Les stratégies expérimentales dépendent du mécanisme recherché.' },
      { text: 'Des approches étudiées selon le produit et l\'indication, à distinguer des vaccins déjà autorisés', correct: true, correction: 'Oui. Le chapitre mêle applications établies et travaux de recherche ; leur niveau de preuve diffère.' },
      { text: 'L\'absence totale d\'effet immunitaire des TLR hors des infections', correct: false, correction: 'Non. La modulation des TLR intéresse aussi des maladies non infectieuses.' },
      { text: 'Une autorisation systématique de toute GPI parasitaire comme médicament humain', correct: false, correction: 'Non. Les GPI sont présentées ici dans des modèles expérimentaux.' },
    ],
    explanation: 'Une application vaccinale autorisée avec MPL ne valide pas automatiquement les autres pistes de modulation des TLR en oncologie ou allergologie. (Cours, p. 14)'
  },
  {
    id: 78,
    type: 'QRM',
    question: 'Quelles interprétations évitent de confondre atténuation de la maladie et élimination du parasite dans l\'essai vaccinal évoqué ?',
    options: [
      { text: 'Une réduction du TNF-α excessif peut diminuer des symptômes inflammatoires', correct: true, correction: 'Oui. Le support relie l\'effet du candidat GPI à une moindre immunopathologie dans un modèle.' },
      { text: 'Une GPI expérimentale correspond déjà à tous les vaccins antiparasitaires commercialisés', correct: false, correction: 'Non. Il ne s\'agit pas d\'une règle ni d\'un produit humain général.' },
      { text: 'Ces observations expérimentales ne suffisent pas à recommander un vaccin humain', correct: true, correction: 'Oui. L\'efficacité et la sécurité cliniques nécessitent d\'autres étapes.' },
      { text: 'Moins de symptômes prouve que toute réplication parasitaire est arrêtée', correct: false, correction: 'Non. Le support décrit même une parasitémie pouvant augmenter dans ce modèle.' },
      { text: 'Une diminution de certains symptômes n\'établit pas une baisse de la charge parasitaire', correct: true, correction: 'Oui. Les deux critères doivent être mesurés séparément.' },
    ],
    explanation: 'Les résultats expérimentaux présentés distinguent tolérance à la maladie et maîtrise du parasite ; un gain clinique n\'est pas automatiquement une stérilisation de l\'infection. (Cours, p. 14)'
  },
  {
    id: 79,
    type: 'QCM',
    question: 'Quelle conclusion prudente tirer de l\'encapsulation des GPI dans le modèle de Neospora évoqué ?',
    options: [
      { text: 'Elle élimine la nécessité de vérifier les réponses immunitaires ultérieures', correct: false, correction: 'Non. L\'effet adjuvant et la protection demandent précisément une évaluation supplémentaire.' },
      { text: 'Elle prouve que tous les TLR sont détruits par la nanoparticule', correct: false, correction: 'Non. Le support parle de moindre activation directe, pas de disparition des récepteurs.' },
      { text: 'Elle fait de Neospora une maladie humaine courante', correct: false, correction: 'Non. Le cours cite ce parasite dans un modèle vétérinaire.' },
      { text: 'Elle démontre déjà une protection vaccinale certaine chez tous les bovins', correct: false, correction: 'Non. Les données in vitro ne valent pas preuve d\'efficacité in vivo.' },
      { text: 'Elle peut réduire la stimulation TLR directe mesurée tout en conservant un effet adjuvant observé in vitro', correct: true, correction: 'Oui. Le conditionnement modifie l\'accessibilité du ligand et l\'effet mesuré dépend du test.' },
    ],
    explanation: 'Le modèle de GPI encapsulée rappelle qu\'un essai in vitro d\'activation TLR et une mesure d\'adjuvanticité n\'interrogent pas le même résultat ; la protection reste à démontrer. (Cours, p. 15)'
  },
  {
    id: 80,
    type: 'QRM',
    question: 'Quelles approches peuvent aider à attribuer un ligand ou une réponse à une voie TLR précise ?',
    options: [
      { text: 'Employer un anticorps bloquant validé lorsque disponible', correct: true, correction: 'Oui. Ce type d\'intervention peut tester une contribution fonctionnelle.' },
      { text: 'Utiliser des cellules ou animaux déficients pour une molécule de signalisation', correct: true, correction: 'Oui. Une perte de réponse peut soutenir le rôle de cette molécule, sous réserve de contrôles.' },
      { text: 'Déduire une liaison directe ligand–TLR d\'une seule hausse de CD25', correct: false, correction: 'Non. Un rapporteur signale une activation, pas nécessairement une interaction physique directe.' },
      { text: 'Contrôler le readout par des stimuli positifs et des témoins négatifs', correct: true, correction: 'Oui. Les contrôles évitent d\'attribuer un échec technique au ligand.' },
      { text: 'Comparer des cellules exprimant ou non un TLR choisi', correct: true, correction: 'Oui. Le modèle reconstitué aide à isoler une contribution de récepteur.' },
    ],
    explanation: 'Le schéma final rapproche systèmes reconstitués, déficiences et anticorps bloquants ; une attribution solide demande plusieurs contrôles et modèles complémentaires. (Cours, p. 11, 16)'
  },
]
