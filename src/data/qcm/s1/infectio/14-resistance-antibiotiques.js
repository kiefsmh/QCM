export const meta = {
  title: 'Résistance aux antibiotiques',
}

export default [
  {
    id: 1,
    type: 'QCM',
    question: 'Que mesure directement la concentration minimale inhibitrice (CMI) d\'un antibiotique ?',
    options: [
      { text: 'Le nombre de bactéries présentes dans le prélèvement', correct: false, correction: 'Non. La CMI est une concentration d\'antibiotique, pas une numération bactérienne.' },
      { text: 'La concentration qui tue nécessairement toutes les bactéries', correct: false, correction: 'Non. Inhiber la croissance n\'est pas synonyme d\'activité bactéricide complète.' },
      { text: 'La plus faible concentration qui inhibe la croissance visible de la bactérie dans les conditions du test', correct: true, correction: 'Oui. La CMI décrit une inhibition mesurée in vitro, selon une méthode standardisée.' },
      { text: 'La concentration sanguine maximale mesurée chez le patient', correct: false, correction: 'Non. La concentration sanguine maximale relève de la pharmacocinétique, pas de la mesure de CMI.' },
      { text: 'La dose quotidienne à administrer au patient', correct: false, correction: 'Non. Une dose se décide avec l\'exposition attendue, le site infectieux et les recommandations ; elle ne se confond pas avec la CMI.' },
    ],
    explanation: 'La CMI décrit l\'activité in vitro d\'une molécule contre une souche ; son interprétation clinique demande d\'autres données. (Cours, p. 3 ; EUCAST, https://www.eucast.org/bacteria/methodology-and-instructions/mic-determination/)'
  },
  {
    id: 2,
    type: 'QRM',
    question: 'À propos de la CMI et de l\'interprétation d\'un antibiogramme, quelles propositions sont exactes ?',
    options: [
      { text: 'Une CMI basse garantit à elle seule la guérison du patient', correct: false, correction: 'Non. Le site de l\'infection, l\'hôte, le drainage éventuel et l\'exposition à l\'antibiotique comptent aussi.' },
      { text: 'La comparaison de la CMI à la seule concentration sanguine maximale suffit toujours à déclarer une souche résistante', correct: false, correction: 'Non. Cette règle simplifiée du cours ne remplace pas les seuils cliniques, qui intègrent plusieurs paramètres.' },
      { text: 'L\'exposition atteignable avec le schéma thérapeutique entre dans l\'interprétation', correct: true, correction: 'Oui. Les seuils cliniques tiennent compte, entre autres, de la dose et de la pharmacocinétique/pharmacodynamie.' },
      { text: 'Une CMI mesurée in vitro doit être rapprochée de seuils cliniques propres au couple bactérie–antibiotique', correct: true, correction: 'Oui. Les seuils d\'interprétation permettent de traduire la mesure en catégorie clinique.' },
      { text: 'La catégorie EUCAST I signifie « sensible à exposition augmentée »', correct: true, correction: 'Oui. I correspond à une sensibilité obtenue si l\'exposition à l\'antibiotique est augmentée de manière adaptée.' },
    ],
    explanation: 'Le cours relie CMI et exposition atteignable ; en pratique, les catégories S, I et R sont déterminées avec les seuils cliniques actualisés, et I reste une catégorie sensible. (Cours, p. 3 ; EUCAST, https://www.eucast.org/bacteria/clinical-breakpoints-and-interpretation/clinical-breakpoint-tables/)'
  },
  {
    id: 3,
    type: 'QCM',
    question: 'Quel trait caractérise une résistance intrinsèque ou naturelle ?',
    options: [
      { text: 'Elle dépend toujours d\'une mutation de la cible sélectionnée chez le patient', correct: false, correction: 'Non. Une mutation apparue dans une lignée est un mécanisme possible de résistance acquise, pas la définition de la résistance naturelle.' },
      { text: 'Elle apparaît uniquement après la première dose d\'antibiotique', correct: false, correction: 'Non. La résistance intrinsèque préexiste à l\'exposition thérapeutique.' },
      { text: 'Elle n\'existe que chez une petite fraction des souches d\'une espèce', correct: false, correction: 'Non. Ce profil évoque plutôt une résistance acquise.' },
      { text: 'Elle résulte nécessairement de l\'acquisition récente d\'un plasmide', correct: false, correction: 'Non. Un plasmide acquis correspond à une voie de résistance acquise.' },
      { text: 'Elle appartient au phénotype habituel d\'une espèce bactérienne', correct: true, correction: 'Oui. Une propriété intrinsèque est attendue chez les isolats sauvages de l\'espèce.' },
    ],
    explanation: 'La résistance naturelle fait partie des propriétés habituelles de l\'espèce et définit son phénotype sauvage. (Cours, p. 3)'
  },
  {
    id: 4,
    type: 'QRM',
    question: 'Une résistance acquise peut apparaître dans une partie seulement des souches d\'une espèce. Quels processus peuvent expliquer son apparition ou sa diffusion ?',
    options: [
      { text: 'L\'appartenance de toutes les souches à la même espèce', correct: false, correction: 'Non. Cette appartenance n\'explique pas pourquoi seules certaines souches sont devenues résistantes.' },
      { text: 'Une simple augmentation de la dose administrée au patient, sans changement génétique bactérien', correct: false, correction: 'Non. La dose peut modifier l\'exposition à l\'antibiotique, mais elle ne crée ni ne diffuse un caractère génétique de résistance acquise.' },
      { text: 'L\'acquisition d\'un gène de résistance provenant d\'une autre bactérie', correct: true, correction: 'Oui. Le transfert horizontal peut apporter un déterminant nouveau.' },
      { text: 'La transmission d\'une mutation acquise à la descendance du clone', correct: true, correction: 'Oui. La descendance peut conserver le caractère lors du transfert vertical.' },
      { text: 'Une mutation affectant un gène déjà présent dans la bactérie', correct: true, correction: 'Oui. Une modification du chromosome peut conférer un avantage sous antibiotique.' },
    ],
    explanation: 'La résistance acquise résulte principalement de mutations et/ou de l\'acquisition de déterminants génétiques ; une fois apparue, elle peut être héritée par les descendants. (Cours, p. 3–4)'
  },
  {
    id: 5,
    type: 'QCM',
    question: 'Une mutation de résistance est apparue dans le chromosome d\'une bactérie. Quelle transmission directe est attendue lors de la division de ce clone ?',
    options: [
      { text: 'Une transmission verticale à ses bactéries filles', correct: true, correction: 'Oui. La copie du chromosome transmet l\'allèle mutant à la descendance du clone.' },
      { text: 'Une transmission immédiate à toutes les bactéries de l\'espèce', correct: false, correction: 'Non. Une mutation dans un clone ne modifie pas instantanément les autres lignées.' },
      { text: 'Aucune transmission car une mutation disparaît à chaque division', correct: false, correction: 'Non. Une mutation chromosomique peut être stable au fil des divisions.' },
      { text: 'Une transmission obligatoirement par plasmide', correct: false, correction: 'Non. La mutation décrite est chromosomique et se transmet d\'abord avec le chromosome.' },
      { text: 'Un transfert horizontal obligatoire vers une bactérie non apparentée avant chaque division', correct: false, correction: 'Non. La mutation chromosomique est copiée directement lors de la division ; un transfert horizontal n\'est pas nécessaire.' },
    ],
    explanation: 'Le cours oppose la transmission verticale d\'une mutation chromosomique au transfert horizontal de gènes mobiles. (Cours, p. 3–4)'
  },
  {
    id: 6,
    type: 'QRM',
    question: 'Dans l\'exemple de sélection présenté par le cours, une faible population mutante résistante préexiste au traitement. Que peut provoquer l\'antibiotique ?',
    options: [
      { text: 'La preuve qu\'aucune mutation ne pouvait exister avant l\'antibiotique', correct: false, correction: 'Non. Au contraire, l\'exemple repose sur la présence préalable d\'un variant.' },
      { text: 'L\'apparition certaine de la même mutation dans toutes les bactéries exposées', correct: false, correction: 'Non. Une mutation de résistance n\'est pas un effet uniforme et garanti de l\'antibiotique.' },
      { text: 'Une augmentation de la proportion de bactéries résistantes parmi les survivantes', correct: true, correction: 'Oui. Après élimination des sensibles, les résistantes peuvent devenir majoritaires.' },
      { text: 'La conversion obligatoire de chaque bactérie sensible en bactérie résistante', correct: false, correction: 'Non. La sélection ne transforme pas automatiquement toutes les bactéries sensibles.' },
      { text: 'Une réduction des clones sensibles, laissant un avantage relatif au clone résistant', correct: true, correction: 'Oui. L\'exposition crée une pression de sélection favorable au mutant résistant.' },
    ],
    explanation: 'L\'antibiotique peut sélectionner un variant résistant déjà présent. Il ne faut pas confondre cette sélection avec une conversion systématique de chaque cellule exposée. (Cours, p. 3)'
  },
  {
    id: 7,
    type: 'QCM',
    question: 'Quel terme désigne le passage d\'un déterminant de résistance entre deux bactéries qui ne sont pas dans une relation mère–fille ?',
    options: [
      { text: 'Transfert horizontal', correct: true, correction: 'Oui. Le transfert horizontal relie des bactéries distinctes, parfois d\'espèces différentes.' },
      { text: 'Traduction ribosomale', correct: false, correction: 'Non. La traduction fabrique une protéine à partir d\'un ARN messager.' },
      { text: 'Transmission verticale', correct: false, correction: 'Non. La transmission verticale se fait d\'une bactérie à sa descendance.' },
      { text: 'Réplication humaine', correct: false, correction: 'Non. Le phénomène concerne l\'échange génétique entre bactéries.' },
      { text: 'Diffusion passive de l\'antibiotique', correct: false, correction: 'Non. La diffusion d\'une molécule ne transfère pas un gène de résistance.' },
    ],
    explanation: 'Le transfert horizontal permet la diffusion de gènes de résistance au-delà d\'une seule lignée bactérienne. (Cours, p. 4)'
  },
  {
    id: 8,
    type: 'QRM',
    question: 'Quels énoncés décrivent correctement les supports mobiles évoqués dans le cours ?',
    options: [
      { text: 'Un transposon est une séquence d\'ADN susceptible de changer de position', correct: true, correction: 'Oui. Son caractère mobile lui vaut l\'image de « gène sauteur », même s\'il peut contenir plusieurs gènes.' },
      { text: 'Un plasmide est une molécule d\'ADN distincte du chromosome bactérien', correct: true, correction: 'Oui. Dans le modèle présenté, il s\'agit d\'un ADN extrachromosomique pouvant porter des gènes de résistance.' },
      { text: 'Tout transposon circule seul dans le sang du patient', correct: false, correction: 'Non. Le transposon est un élément génétique intracellulaire, pas une molécule circulante libre dans le sang.' },
      { text: 'Un plasmide est une pompe qui expulse physiquement les antibiotiques', correct: false, correction: 'Non. Le plasmide est un support génétique ; une pompe d\'efflux est un système protéique.' },
      { text: 'Un même élément mobile peut associer plusieurs déterminants de résistance', correct: true, correction: 'Oui. Cela peut contribuer à des résistances touchant plusieurs familles d\'antibiotiques.' },
    ],
    explanation: 'Plasmides et transposons sont des supports génétiques mobiles, et non des antibiotiques ou des pompes. (Cours, p. 4)'
  },
  {
    id: 9,
    type: 'QCM',
    question: 'Deux souches de bactéries sans lien de filiation direct partagent désormais le même gène de résistance porté par un plasmide. Quel mécanisme l\'explique le mieux ?',
    options: [
      { text: 'Une baisse de perméabilité des porines sans transfert d\'ADN', correct: false, correction: 'Non. La baisse de perméabilité peut résister à l\'antibiotique, mais elle n\'explique pas le partage du même plasmide.' },
      { text: 'Une modification spontanée identique de tous les chromosomes de l\'espèce', correct: false, correction: 'Non. La présence du même plasmide oriente vers la circulation d\'un élément génétique.' },
      { text: 'Une transmission verticale de la première souche à ses filles uniquement', correct: false, correction: 'Non. Cette voie ne suffit pas à expliquer l\'acquisition par une souche sans filiation directe.' },
      { text: 'Une mutation chromosomique parallèle des deux souches, sans circulation du plasmide', correct: false, correction: 'Non. Des mutations parallèles ne suffisent pas à expliquer le partage du même plasmide porteur du gène.' },
      { text: 'Un transfert horizontal d\'ADN', correct: true, correction: 'Oui. Un plasmide peut diffuser un gène de résistance entre bactéries distinctes.' },
    ],
    explanation: 'Un gène porté par un plasmide peut passer d\'une bactérie à une autre indépendamment de la reproduction cellulaire. (Cours, p. 4)'
  },
  {
    id: 10,
    type: 'QRM',
    question: 'À propos de la pression de sélection antibiotique, quelles propositions sont justes ?',
    options: [
      { text: 'Elle peut favoriser la conservation d\'un déterminant de résistance coûteux si celui-ci procure un avantage', correct: true, correction: 'Oui. Sous pression, le bénéfice de la résistance peut compenser son coût biologique.' },
      { text: 'Elle prouve que l\'antibiotique a créé de toutes pièces chaque gène de résistance observé', correct: false, correction: 'Non. La sélection favorise un caractère ; elle ne démontre pas l\'origine du gène.' },
      { text: 'Elle garantit la disparition définitive de toutes les souches sensibles', correct: false, correction: 'Non. L\'effet dépend de l\'exposition, du milieu, des bactéries et des autres facteurs ; aucune disparition définitive n\'est garantie.' },
      { text: 'Elle rend impossible tout transfert horizontal de gènes', correct: false, correction: 'Non. La pression de sélection et le transfert horizontal sont deux phénomènes distincts qui peuvent coexister.' },
      { text: 'Elle peut favoriser la survie et la multiplication des bactéries déjà résistantes', correct: true, correction: 'Oui. L\'antibiotique élimine ou freine davantage les concurrentes sensibles.' },
    ],
    explanation: 'La pression antibiotique influe sur la fréquence des variants et des supports de résistance dans une population. (Cours, p. 3–4)'
  },
  {
    id: 11,
    type: 'QCM',
    question: 'Lequel des phénomènes suivants est un mécanisme biochimique de résistance décrit dans le cours ?',
    options: [
      { text: 'La sélection d\'un clone préexistant pendant le traitement', correct: false, correction: 'Non. C\'est une dynamique de population, distincte de l\'action moléculaire de la résistance.' },
      { text: 'Une augmentation de la fréquence d\'un variant dans un prélèvement', correct: false, correction: 'Non. Il s\'agit d\'une observation populationnelle, pas d\'un mécanisme biochimique.' },
      { text: 'Le transfert vertical d\'un allèle à la descendance', correct: false, correction: 'Non. C\'est un mode de transmission du caractère, pas la manière biochimique dont il bloque l\'antibiotique.' },
      { text: 'L\'acquisition d\'un plasmide entre deux bactéries', correct: false, correction: 'Non. C\'est un support et une voie de diffusion génétique ; le mécanisme biochimique dépend du gène porté.' },
      { text: 'La diminution de l\'affinité de la cible pour l\'antibiotique', correct: true, correction: 'Oui. Une cible modifiée peut moins lier la molécule et réduire son action.' },
    ],
    explanation: 'Le cours regroupe les mécanismes en quatre familles : entrée réduite, efflux, cible modifiée et inactivation enzymatique. (Cours, p. 4–6)'
  },
  {
    id: 12,
    type: 'QRM',
    question: 'Dans une bactérie à Gram négatif, une diminution de l\'entrée d\'un antibiotique hydrophile peut résulter de quels changements ?',
    options: [
      { text: 'Une moindre quantité d\'une porine utilisée par l\'antibiotique', correct: true, correction: 'Oui. Moins de canaux disponibles peut limiter le passage de la molécule.' },
      { text: 'La transformation de la porine en β-lactamase', correct: false, correction: 'Non. Une porine est un canal membranaire ; une β-lactamase est une enzyme qui inactive certaines β-lactamines.' },
      { text: 'Une modification de la porine réduisant le passage de la molécule', correct: true, correction: 'Oui. Une modification qualitative peut rendre l\'entrée moins efficace.' },
      { text: 'La suppression du besoin de franchir l\'enveloppe bactérienne', correct: false, correction: 'Non. L\'accès de la molécule à sa cible reste nécessaire.' },
      { text: 'Une augmentation obligatoire de la concentration de l\'antibiotique à l\'intérieur de la bactérie', correct: false, correction: 'Non. Le défaut de pénétration tend au contraire à limiter l\'exposition intracellulaire.' },
    ],
    explanation: 'Les porines de la membrane externe facilitent l\'entrée de certaines molécules ; leur perte ou leur altération peut réduire cette entrée. (Cours, p. 5)'
  },
  {
    id: 13,
    type: 'QCM',
    question: 'Qu\'est-ce que l\'efflux dans la résistance bactérienne aux antibiotiques ?',
    options: [
      { text: 'La copie d\'un plasmide lors de la division cellulaire', correct: false, correction: 'Non. La réplication du plasmide est un mécanisme génétique, pas une expulsion de médicament.' },
      { text: 'Une modification du ribosome qui empêche la fixation de l\'antibiotique', correct: false, correction: 'Non. La modification d\'un ribosome est une modification de cible, non une expulsion active de la molécule.' },
      { text: 'Le blocage passif de l\'entrée par une porine absente', correct: false, correction: 'Non. Cela relève d\'un défaut de perméabilité, pas de l\'expulsion active.' },
      { text: 'L\'hydrolyse directe de l\'antibiotique par une enzyme', correct: false, correction: 'Non. Cela correspond à une inactivation enzymatique.' },
      { text: 'L\'expulsion active d\'antibiotique hors de la bactérie par un système de transport', correct: true, correction: 'Oui. Une pompe d\'efflux abaisse l\'accumulation de la molécule au voisinage de sa cible.' },
    ],
    explanation: 'L\'efflux correspond à une sortie active de la molécule antibiotique et peut contribuer à une résistance croisée. (Cours, p. 5)'
  },
  {
    id: 14,
    type: 'QRM',
    question: 'Quelles propriétés des pompes d\'efflux sont compatibles avec le cours ?',
    options: [
      { text: 'Certaines pompes peuvent agir sur plusieurs familles de molécules', correct: true, correction: 'Oui. Une faible spécificité de substrat peut créer une résistance croisée.' },
      { text: 'Elles sont nécessairement limitées à une seule famille d\'antibiotiques', correct: false, correction: 'Non. Le cours souligne au contraire que plusieurs familles peuvent être concernées.' },
      { text: 'Elles peuvent diminuer la concentration intracellulaire d\'un antibiotique', correct: true, correction: 'Oui. L\'expulsion réduit l\'exposition de la cible.' },
      { text: 'Elles sont des plasmides circulaires sans produit protéique', correct: false, correction: 'Non. Une pompe est un système protéique ; un plasmide peut éventuellement porter un gène qui la code.' },
      { text: 'Elles remplacent toutes les cibles de l\'antibiotique par une nouvelle cible', correct: false, correction: 'Non. Changer la cible est un autre mécanisme ; une pompe transporte les molécules.' },
    ],
    explanation: 'L\'efflux est un mécanisme de transport actif, parfois peu spécifique, qui limite l\'accumulation du médicament. (Cours, p. 5)'
  },
  {
    id: 15,
    type: 'QCM',
    question: 'Une β-lactamine atteint la bactérie mais se fixe moins bien sur une protéine de liaison aux pénicillines (PLP) altérée. Quel mécanisme est illustré ?',
    options: [
      { text: 'Une hydrolyse de l\'antibiotique par une β-lactamase', correct: false, correction: 'Non. Aucune enzyme hydrolysant la molécule n\'est décrite dans le scénario.' },
      { text: 'Une disparition des antibiotiques dans le sang du patient', correct: false, correction: 'Non. La concentration sanguine n\'est pas l\'élément causal décrit.' },
      { text: 'Une modification de la cible de l\'antibiotique', correct: true, correction: 'Oui. La PLP est une cible des β-lactamines ; une affinité réduite peut limiter l\'action du médicament.' },
      { text: 'Une réduction du nombre de porines', correct: false, correction: 'Non. La molécule atteint ici la bactérie ; l\'anomalie concerne sa cible.' },
      { text: 'Une expulsion par pompe d\'efflux', correct: false, correction: 'Non. Le scénario précise un défaut de liaison à la cible, pas une sortie active.' },
    ],
    explanation: 'Une cible altérée peut conserver sa fonction bactérienne tout en liant moins efficacement l\'antibiotique. (Cours, p. 5)'
  },
  {
    id: 16,
    type: 'QRM',
    question: 'Quels exemples relèvent d\'une modification de cible plutôt que d\'une inactivation directe de l\'antibiotique ?',
    options: [
      { text: 'Une β-lactamase hydrolysant la β-lactamine', correct: false, correction: 'Non. Il s\'agit d\'une inactivation enzymatique de la molécule.' },
      { text: 'Une altération de l\'ADN-gyrase affectant l\'activité d\'une quinolone', correct: true, correction: 'Oui. La gyrase est une cible des quinolones.' },
      { text: 'Une PLP dont l\'affinité pour une β-lactamine a diminué', correct: true, correction: 'Oui. La protéine ciblée est modifiée.' },
      { text: 'Une méthylation de l\'ARN ribosomal diminuant la fixation d\'un antibiotique', correct: true, correction: 'Oui. La modification touche le site d\'action ribosomal.' },
      { text: 'Une pompe exportant la molécule intacte', correct: false, correction: 'Non. Ce phénomène est un efflux, distinct de la modification de cible.' },
    ],
    explanation: 'Les exemples de cibles modifiées du cours sont les PLP, l\'ARN ribosomal et l\'ADN-gyrase. (Cours, p. 5–6)'
  },
  {
    id: 17,
    type: 'QCM',
    question: 'Une β-lactamase permet une résistance surtout en agissant de quelle manière ?',
    options: [
      { text: 'Elle modifie directement la PLP pour empêcher toute fixation', correct: false, correction: 'Non. Une PLP altérée est une modification de cible, autre mécanisme de résistance.' },
      { text: 'Elle diminue directement le nombre de porines membranaires', correct: false, correction: 'Non. La perte de porines est un défaut de perméabilité, différent de l\'inactivation par β-lactamase.' },
      { text: 'Elle expulse les β-lactamines intactes par une pompe', correct: false, correction: 'Non. L\'expulsion est un mécanisme d\'efflux ; la β-lactamase est une enzyme d\'hydrolyse.' },
      { text: 'Elle hydrolyse certaines β-lactamines et les rend moins actives', correct: true, correction: 'Oui. La rupture enzymatique du cycle β-lactame inactive la molécule concernée.' },
      { text: 'Elle hydrolyse nécessairement toutes les classes d\'antibiotiques', correct: false, correction: 'Non. Son spectre dépend de l\'enzyme et concerne des β-lactamines, pas toutes les classes.' },
    ],
    explanation: 'Les β-lactamases sont des enzymes d\'inactivation ; toutes n\'ont pas le même spectre de substrats. (Cours, p. 6)'
  },
  {
    id: 18,
    type: 'QRM',
    question: 'Parmi les situations suivantes, lesquelles peuvent réduire la quantité d\'antibiotique actif au contact de sa cible sans modifier directement cette cible ?',
    options: [
      { text: 'Une expulsion par pompe d\'efflux', correct: true, correction: 'Oui. Le médicament est exporté après avoir pénétré.' },
      { text: 'Une mutation de l\'ADN-gyrase empêchant la fixation d\'une quinolone', correct: false, correction: 'Non. Il s\'agit aussi d\'une modification de la cible.' },
      { text: 'Une hydrolyse par une enzyme bactérienne', correct: true, correction: 'Oui. La molécule peut être inactivée avant d\'atteindre sa cible.' },
      { text: 'Une entrée réduite par altération des porines', correct: true, correction: 'Oui. Le médicament pénètre moins bien.' },
      { text: 'Une PLP portant une modification qui abaisse son affinité pour la β-lactamine', correct: false, correction: 'Non. Cette fois, c\'est bien la cible qui est modifiée.' },
    ],
    explanation: 'Perméabilité, efflux et enzymes agissent sur la disponibilité ou l\'intégrité de la molécule ; les modifications de PLP ou de gyrase agissent sur sa cible. (Cours, p. 4–6)'
  },
  {
    id: 19,
    type: 'QCM',
    question: 'Une porine fonctionnelle de la membrane externe d\'une bactérie à Gram négatif sert principalement à quoi dans le schéma du cours ?',
    options: [
      { text: 'Constituer la cible enzymatique principale des β-lactamines', correct: false, correction: 'Non. Les principales cibles des β-lactamines sont les PLP, pas les porines.' },
      { text: 'Méthyler l\'ARN ribosomal pour empêcher la fixation d\'un antibiotique', correct: false, correction: 'Non. Ce type de modification relève d\'une enzyme de modification de cible.' },
      { text: 'Permettre le passage de certaines petites molécules hydrophiles', correct: true, correction: 'Oui. Certaines molécules traversent la membrane externe via ces canaux.' },
      { text: 'Hydrolyser les β-lactamines dans l\'espace périplasmique', correct: false, correction: 'Non. C\'est le rôle de certaines β-lactamases, non d\'un canal membranaire.' },
      { text: 'Expulser activement l\'antibiotique par un transport consommant de l\'énergie', correct: false, correction: 'Non. Cela décrit l\'efflux, et non le rôle d\'une porine.' },
    ],
    explanation: 'Une porine est un canal de la membrane externe ; sa modification peut participer à une résistance par défaut de pénétration. (Cours, p. 5)'
  },
  {
    id: 20,
    type: 'QRM',
    question: 'On compare quatre mécanismes de résistance chez une souche bactérienne. Quelles associations mécanisme–conséquence sont correctes ?',
    options: [
      { text: 'Perte d\'une porine → entrée de certains antibiotiques diminuée', correct: true, correction: 'Oui. Moins de canaux disponibles peut réduire la pénétration.' },
      { text: 'PLP modifiée → sensibilité toujours restaurée à toutes les β-lactamines', correct: false, correction: 'Non. Une modification de PLP peut au contraire diminuer la fixation de certaines β-lactamines.' },
      { text: 'β-lactamase → inactivation enzymatique de β-lactamines de son spectre', correct: true, correction: 'Oui. L\'enzyme hydrolyse certains substrats, selon sa nature.' },
      { text: 'Pompe d\'efflux active → expulsion de molécules qui ont pénétré', correct: true, correction: 'Oui. Le transporteur réduit l\'accumulation intracellulaire.' },
      { text: 'Transposon → destruction chimique directe de toutes les molécules d\'antibiotique', correct: false, correction: 'Non. Un transposon est un support génétique ; il peut porter des gènes, mais n\'hydrolyse pas lui-même le médicament.' },
    ],
    explanation: 'Le support génétique d\'un caractère et son mécanisme biochimique doivent être distingués. (Cours, p. 4–6)'
  },
  {
    id: 21,
    type: 'QCM',
    question: 'Pourquoi une β-lactamine est-elle dépourvue d\'activité antibactérienne sur un mycoplasme dans l\'exemple du cours ?',
    options: [
      { text: 'Il produit nécessairement une carbapénémase plasmidique', correct: false, correction: 'Non. Aucune acquisition de carbapénémase n\'est nécessaire pour cette résistance naturelle.' },
      { text: 'Il méthyle obligatoirement l\'ARN 23S dès qu\'une pénicilline est présente', correct: false, correction: 'Non. La méthylation ribosomale concerne d\'autres familles et n\'explique pas l\'absence de paroi.' },
      { text: 'Le mycoplasme ne possède pas la paroi peptidoglycanique que vise cette famille', correct: true, correction: 'Oui. Sans synthèse de peptidoglycane à inhiber, une β-lactamine n\'a pas sa cible habituelle.' },
      { text: 'Son ADN-gyrase détruit systématiquement toutes les β-lactamines', correct: false, correction: 'Non. La gyrase est une cible des quinolones et n\'hydrolyse pas les β-lactamines.' },
      { text: 'Ses porines ferment exclusivement le passage des céphalosporines', correct: false, correction: 'Non. Le mycoplasme ne présente pas la membrane externe et les porines décrites pour les bacilles à Gram négatif.' },
    ],
    explanation: 'Les β-lactamines agissent en bloquant la synthèse du peptidoglycane. L\'absence de cette paroi chez les mycoplasmes explique leur résistance intrinsèque à la famille. (Cours, p. 6)'
  },
  {
    id: 22,
    type: 'QRM',
    question: 'Quelles situations du cours illustrent une résistance naturelle à certaines β-lactamines ?',
    options: [
      { text: 'L\'acquisition récente d\'un plasmide codant une β-lactamase', correct: false, correction: 'Non. Un gène nouvellement acquis relève de la résistance acquise, même s\'il code une enzyme.' },
      { text: 'La faible affinité des PLP d\'entérocoques pour les céphalosporines', correct: true, correction: 'Oui. Ce défaut de fixation contribue à une résistance intrinsèque.' },
      { text: 'La mauvaise pénétration des pénicillines G et M dans plusieurs bacilles à Gram négatif', correct: true, correction: 'Oui. Leur membrane externe limite l\'accès de ces molécules à leurs cibles.' },
      { text: 'La formation de PLP mosaïques chez un pneumocoque après transformation', correct: false, correction: 'Non. La transformation génétique crée ici une résistance acquise, non la sensibilité naturelle de l\'espèce.' },
      { text: 'La faible affinité des PLP de Listeria pour les céphalosporines', correct: true, correction: 'Oui. Le cours donne Listeria comme autre exemple de résistance naturelle liée à la cible.' },
    ],
    explanation: 'La résistance naturelle peut découler d\'un défaut d\'entrée ou d\'une faible affinité de la cible. Ces exemples doivent être interprétés selon l\'espèce et la molécule. (Cours, p. 6–8)'
  },
  {
    id: 23,
    type: 'QCM',
    question: 'Pourquoi l\'association amoxicilline–acide clavulanique peut-elle retrouver une activité sur une souche produisant une pénicillinase sensible au clavulanate ?',
    options: [
      { text: 'Le clavulanate augmente nécessairement la perméabilité de toutes les souches à l\'amoxicilline', correct: false, correction: 'Non. L\'inhibition d\'une pénicillinase ne restaure pas une porine absente ou altérée.' },
      { text: 'L\'amoxicilline empêche la bactérie de produire tout type d\'AmpC', correct: false, correction: 'Non. Ni l\'amoxicilline ni le clavulanate ne bloquent universellement les céphalosporinases AmpC.' },
      { text: 'L\'association transforme toute bactérie résistante en bactérie sensible', correct: false, correction: 'Non. L\'effet dépend de l\'enzyme et d\'autres mécanismes éventuels, puis doit être confirmé par l\'antibiogramme.' },
      { text: 'Le clavulanate inhibe cette β-lactamase et protège l\'amoxicilline de son hydrolyse', correct: true, correction: 'Oui. L\'inhibiteur réduit l\'inactivation enzymatique de l\'amoxicilline lorsque la pénicillinase en cause lui est sensible.' },
      { text: 'Le clavulanate rend l\'amoxicilline active même si la seule résistance vient d\'une PLP de faible affinité', correct: false, correction: 'Non. L\'inhibiteur ne corrige pas une cible modifiée ; son intérêt dépend d\'une β-lactamase sensible.' },
    ],
    explanation: 'L\'exemple du cours oppose l\'amoxicilline seule et l\'association avec le clavulanate face à une pénicillinase sensible à cet inhibiteur. Cette récupération de sensibilité n\'est pas universelle. (Cours, p. 6–7)'
  },
  {
    id: 24,
    type: 'QRM',
    question: 'À propos de l\'acide clavulanique, quelles propositions sont justes ?',
    options: [
      { text: 'Il neutralise par définition toute carbapénémase', correct: false, correction: 'Non. Les carbapénémases sont diverses et le clavulanate ne constitue pas un inhibiteur universel.' },
      { text: 'Il n\'inhibe pas efficacement une céphalosporinase AmpC typique', correct: true, correction: 'Oui. Une AmpC peut maintenir la résistance malgré le clavulanate.' },
      { text: 'Son efficacité ne suffit pas à prédire la sensibilité si la bactérie possède aussi une altération des porines', correct: true, correction: 'Oui. Un défaut d\'entrée peut coexister avec l\'enzyme et modifier le résultat final.' },
      { text: 'Il se substitue à l\'antibiogramme pour choisir le traitement', correct: false, correction: 'Non. La sensibilité de la souche et le contexte clinique restent indispensables.' },
      { text: 'Il inhibe certaines pénicillinases et peut protéger la β-lactamine associée', correct: true, correction: 'Oui. C\'est le principe de l\'association amoxicilline–clavulanate pour les enzymes concernées.' },
    ],
    explanation: 'Le clavulanate a un spectre d\'inhibition limité : l\'exemple du cours montre une pénicillinase inhibée, contrairement à une céphalosporinase de type AmpC. (Cours, p. 6–7 ; IDSA, https://www.idsociety.org/practice-guideline/amr-guidance/)'
  },
  {
    id: 25,
    type: 'QCM',
    question: 'Dans l\'exemple d\'Enterobacter cloacae, quelle enzyme explique que l\'amoxicilline reste inactive même avec l\'acide clavulanique ?',
    options: [
      { text: 'Une PLP2a codée par mecA', correct: false, correction: 'Non. PLP2a concerne surtout la résistance à la méticilline de staphylocoques.' },
      { text: 'Une céphalosporinase de type AmpC', correct: true, correction: 'Oui. L\'AmpC chromosomique de cette espèce n\'est pas efficacement inhibée par le clavulanate.' },
      { text: 'Une enzyme qui détruit uniquement les aminosides', correct: false, correction: 'Non. L\'exemple porte sur l\'hydrolyse de β-lactamines.' },
      { text: 'Une ADN-gyrase modifiée', correct: false, correction: 'Non. La gyrase est une cible des quinolones, pas l\'enzyme responsable du profil amoxicilline/clavulanate.' },
      { text: 'Une méthylase de l\'ARN 23S', correct: false, correction: 'Non. Une méthylase ribosomale modifie la sensibilité à certaines familles qui ciblent le ribosome.' },
    ],
    explanation: 'Enterobacter cloacae peut posséder une AmpC chromosomique ; son profil naturel inclut la résistance à l\'amoxicilline, non corrigée par le clavulanate. (Cours, p. 7)'
  },
  {
    id: 26,
    type: 'QRM',
    question: 'Concernant l\'expression d\'AmpC chez certaines entérobactéries, quelles propositions sont exactes ?',
    options: [
      { text: 'Le pouvoir inducteur et la stabilité face à AmpC sont deux propriétés distinctes', correct: true, correction: 'Oui. Une molécule peut induire l\'enzyme tout en restant relativement stable à son hydrolyse.' },
      { text: 'Certaines β-lactamines peuvent induire l\'expression d\'ampC', correct: true, correction: 'Oui. Le niveau de production peut augmenter après exposition à un inducteur.' },
      { text: 'Une AmpC hyperproduite est systématiquement neutralisée par l\'acide clavulanique', correct: false, correction: 'Non. Le clavulanate n\'est généralement pas un inhibiteur efficace d\'AmpC.' },
      { text: 'Toutes les β-lactamines ont le même effet inducteur et la même stabilité vis-à-vis d\'AmpC', correct: false, correction: 'Non. Ces propriétés varient d\'une molécule à l\'autre.' },
      { text: 'Une mutation des gènes de régulation peut conduire à une hyperproduction stable d\'AmpC', correct: true, correction: 'Oui. La dérépression chromosomique est un mécanisme de résistance acquise.' },
    ],
    explanation: 'Il faut distinguer induction, dérépression et stabilité de la molécule face à l\'enzyme ; on ne peut pas déduire le résultat d\'une simple appartenance à la famille des β-lactamines. (Cours, p. 7–8 ; IDSA, https://www.idsociety.org/practice-guideline/amr-guidance/)'
  },
  {
    id: 27,
    type: 'QCM',
    question: 'Sur l\'antibiogramme d\'Enterobacter cloacae présenté dans le cours, la céfoxitine réduit localement la zone d\'inhibition du céfotaxime. Quelle interprétation est la plus pertinente ?',
    options: [
      { text: 'L\'effet démontre à lui seul une mutation de l\'ADN-gyrase', correct: false, correction: 'Non. Le cours illustre l\'induction d\'une céphalosporinase ; la gyrase est une cible des quinolones.' },
      { text: 'La céfoxitine corrige une mutation des porines, ce qui augmente l\'activité du céfotaxime', correct: false, correction: 'Non. L\'image montre une diminution locale de l\'inhibition, non une restauration de perméabilité.' },
      { text: 'Le céfotaxime inactive la céfoxitine par méthylation de l\'ARN', correct: false, correction: 'Non. Une β-lactamine ne méthyle pas l\'ARN bactérien.' },
      { text: 'L\'effet prouve que toutes les associations de β-lactamines sont cliniquement antagonistes', correct: false, correction: 'Non. Un phénomène d\'induction observé in vitro ne justifie pas une règle universelle pour toutes les associations.' },
      { text: 'La céfoxitine peut induire AmpC, ce qui diminue localement l\'activité du céfotaxime', correct: true, correction: 'Oui. Le rapprochement des disques révèle un effet inducteur et une hydrolyse accrue du céfotaxime près de la céfoxitine.' },
    ],
    explanation: 'L\'image illustre l\'induction d\'une céphalosporinase par la céfoxitine et l\'écrasement local de la zone du céfotaxime. Elle ne fonde pas une interdiction générale de combiner deux β-lactamines. (Cours, p. 7)'
  },
  {
    id: 28,
    type: 'QRM',
    question: 'Quelles affirmations distinguent correctement les enzymes qui inactivent des β-lactamines ?',
    options: [
      { text: 'Toutes les β-lactamases hydrolysent exactement les mêmes molécules', correct: false, correction: 'Non. Leur spectre d\'activité varie beaucoup d\'une enzyme à l\'autre.' },
      { text: 'Toutes ces enzymes sont obligatoirement portées par un plasmide', correct: false, correction: 'Non. Un gène de β-lactamase peut être chromosomique ou acquis sur un élément mobile.' },
      { text: 'Une céphalosporinase de type AmpC peut hydrolyser certaines céphalosporines', correct: true, correction: 'Oui. L\'étendue du spectre dépend de l\'enzyme et de son niveau d\'expression.' },
      { text: 'Une carbapénémase peut hydrolyser des carbapénèmes', correct: true, correction: 'Oui. Cette activité définit cette famille de β-lactamases.' },
      { text: 'Une pénicillinase peut hydrolyser certaines pénicillines', correct: true, correction: 'Oui. La nature exacte des pénicillines touchées dépend du type d\'enzyme.' },
    ],
    explanation: 'Les β-lactamases sont définies par l\'inactivation de β-lactamines, mais leur spectre et leur support génétique varient. (Cours, p. 6–8 ; IDSA, https://www.idsociety.org/practice-guideline/amr-guidance/)'
  },
  {
    id: 29,
    type: 'QCM',
    question: 'Où se trouvent principalement les β-lactamases d\'un bacille à Gram négatif qui détruisent une β-lactamine après son passage par la membrane externe ?',
    options: [
      { text: 'Au sein des porines de la membrane externe', correct: false, correction: 'Non. Les porines sont des canaux d\'entrée ; les β-lactamases étudiées agissent surtout dans le périplasme.' },
      { text: 'À la surface externe de la bactérie, comme chez certains cocci à Gram positif', correct: false, correction: 'Non. Le cours distingue la localisation périplasmique chez les bacilles à Gram négatif de la sécrétion externe chez certains Gram positifs.' },
      { text: 'Dans le cytoplasme après franchissement de la membrane cytoplasmique', correct: false, correction: 'Non. La β-lactamine peut être hydrolysée dans le périplasme, avant ce franchissement.' },
      { text: 'Dans l\'espace périplasmique', correct: true, correction: 'Oui. Cet espace situé entre membrane externe et membrane cytoplasmique permet l\'hydrolyse avant l\'accès aux PLP.' },
      { text: 'À l\'intérieur des ribosomes, là où agissent les aminosides', correct: false, correction: 'Non. Une β-lactamase agit sur la molécule β-lactamine, pas au sein d\'un ribosome.' },
    ],
    explanation: 'Chez les bacilles à Gram négatif, une β-lactamase périplasmique peut hydrolyser l\'antibiotique avant qu\'il n\'atteigne les PLP. (Cours, p. 6–8)'
  },
  {
    id: 30,
    type: 'QRM',
    question: 'Quels mécanismes acquis peuvent réduire l\'activité de β-lactamines selon l\'espèce bactérienne ?',
    options: [
      { text: 'Une hyperproduction de céphalosporinase AmpC', correct: true, correction: 'Oui. Une dérépression peut augmenter la quantité d\'enzyme capable d\'hydrolyser certaines molécules.' },
      { text: 'Une diminution de l\'entrée liée à une porine modifiée chez Pseudomonas aeruginosa', correct: true, correction: 'Oui. Une perte ou modification de porine peut affecter l\'entrée de certaines β-lactamines, notamment des carbapénèmes.' },
      { text: 'L\'acquisition d\'une enzyme de réparation des erreurs de copie de l\'ADN comme mécanisme universel', correct: false, correction: 'Non. Ce n\'est pas un mécanisme universel de résistance aux β-lactamines.' },
      { text: 'La production d\'une PLP2a de faible affinité chez un staphylocoque', correct: true, correction: 'Oui. C\'est le mécanisme associé au gène mecA.' },
      { text: 'Une mutation de la cible ribosomale des aminosides comme seul mécanisme possible', correct: false, correction: 'Non. Le ribosome n\'est pas la cible des β-lactamines, qui inhibent la synthèse de la paroi.' },
    ],
    explanation: 'L\'imperméabilité, les PLP modifiées et les β-lactamases sont des voies distinctes de résistance acquise aux β-lactamines. (Cours, p. 7–8)'
  },
  {
    id: 31,
    type: 'QCM',
    question: 'Quel mécanisme explique la diminution de sensibilité aux β-lactamines de certains pneumocoques décrite dans le cours ?',
    options: [
      { text: 'La production de PLP2a par le gène mecA', correct: false, correction: 'Non. Ce mécanisme concerne des staphylocoques porteurs de mecA, pas l\'exemple pneumococcique.' },
      { text: 'La perte totale du peptidoglycane', correct: false, correction: 'Non. Le pneumocoque possède toujours une paroi et reste une bactérie à Gram positif.' },
      { text: 'La sécrétion obligatoire d\'une carbapénémase plasmidique', correct: false, correction: 'Non. Ce n\'est pas le mécanisme principal décrit pour la sensibilité diminuée du pneumocoque.' },
      { text: 'Des PLP mosaïques ayant une affinité réduite pour ces antibiotiques', correct: true, correction: 'Oui. Des séquences acquises par transformation et recombinées modifient les PLP du pneumocoque.' },
      { text: 'Une méthylation de l\'ARN 23S empêchant l\'entrée des pénicillines', correct: false, correction: 'Non. Cette modification ribosomale ne définit pas la réponse aux β-lactamines.' },
    ],
    explanation: 'La transformation et la recombinaison peuvent créer des gènes de PLP mosaïques chez S. pneumoniae ; le niveau de sensibilité dépend des PLP et de l\'antibiotique considéré. (Cours, p. 7–8 ; étude expérimentale, https://pubmed.ncbi.nlm.nih.gov/9537382/)'
  },
  {
    id: 32,
    type: 'QRM',
    question: 'À propos de la génétique des β-lactamases, quelles propositions sont exactes ?',
    options: [
      { text: 'La présence d\'une pénicillinase démontre toujours une origine exclusivement plasmidique', correct: false, correction: 'Non. Certaines pénicillinases sont naturelles et chromosomiques ; le contexte génétique varie.' },
      { text: 'Un élément mobile peut intégrer un gène de résistance au chromosome', correct: true, correction: 'Oui. Le support chromosomique ne prouve donc pas que la résistance est naturellement présente dans l\'espèce.' },
      { text: 'Une dérépression chromosomique peut augmenter la production d\'AmpC', correct: true, correction: 'Oui. Une mutation régulatrice peut rendre l\'expression élevée de façon stable.' },
      { text: 'Un gène de β-lactamase acquis peut être porté par un plasmide', correct: true, correction: 'Oui. Les plasmides participent à sa diffusion entre bactéries.' },
      { text: 'Toute céphalosporinase devient sensible au clavulanate dès qu\'elle est hyperproduite', correct: false, correction: 'Non. L\'hyperproduction n\'inverse pas l\'absence d\'inhibition efficace d\'une AmpC typique.' },
    ],
    explanation: 'Le support d\'un gène et le mécanisme d\'expression sont deux questions différentes : une enzyme peut être naturelle, acquise, induite ou hyperproduite. (Cours, p. 7–8 ; IDSA, https://www.idsociety.org/practice-guideline/amr-guidance/)'
  },
  {
    id: 33,
    type: 'QCM',
    question: 'Pourquoi les bactéries anaérobies strictes sont-elles naturellement peu sensibles aux aminosides ?',
    options: [
      { text: 'Leur ribosome 30S est systématiquement absent', correct: false, correction: 'Non. Elles disposent de ribosomes, nécessaires à leur synthèse protéique.' },
      { text: 'Leur entrée intracellulaire dépend d\'un transport lié à l\'énergie et à l\'oxygène', correct: true, correction: 'Oui. En l\'absence d\'oxygène, la phase de capture dépendante de l\'énergie est insuffisante.' },
      { text: 'Elles produisent obligatoirement une PLP2a', correct: false, correction: 'Non. PLP2a explique la résistance à la méticilline de certains staphylocoques, pas cette résistance naturelle.' },
      { text: 'Elles sont toujours dépourvues de membrane cytoplasmique', correct: false, correction: 'Non. Toute bactérie possède une membrane cytoplasmique.' },
      { text: 'Elles possèdent toutes une carbapénémase qui hydrolyse l\'aminoside', correct: false, correction: 'Non. Une carbapénémase hydrolyse des β-lactamines, pas les aminosides.' },
    ],
    explanation: 'La cible ribosomale existe, mais l\'aminoside pénètre mal dans une bactérie anaérobie stricte faute de transport dépendant de l\'oxygène. (Cours, p. 8)'
  },
  {
    id: 34,
    type: 'QRM',
    question: 'À propos des résistances aux aminosides, quelles propositions sont correctes ?',
    options: [
      { text: 'Les gènes d\'enzymes inactivatrices peuvent circuler sur des éléments génétiques mobiles', correct: true, correction: 'Oui. Le cours cite leur acquisition par transposons ; d\'autres supports mobiles existent.' },
      { text: 'Une β-lactamase suffit à hydrolyser tous les aminosides', correct: false, correction: 'Non. Les β-lactamases hydrolysent des β-lactamines, pas tous les aminosides.' },
      { text: 'L\'absence d\'entrée efficace chez les anaérobies strictes relève d\'une résistance naturelle', correct: true, correction: 'Oui. Le défaut de capture lié à l\'oxygène est intrinsèque à ces conditions de croissance.' },
      { text: 'Les aminosides agissent en se liant aux PLP de la paroi', correct: false, correction: 'Non. Ils ciblent le ribosome bactérien, surtout la sous-unité 30S.' },
      { text: 'Des enzymes bactériennes acquises peuvent modifier ou inactiver ces antibiotiques', correct: true, correction: 'Oui. L\'inactivation enzymatique est un mécanisme acquis majeur décrit dans le cours.' },
    ],
    explanation: 'Le cours oppose la mauvaise pénétration naturelle aux enzymes acquises qui inactivent les aminosides. (Cours, p. 8)'
  },
  {
    id: 35,
    type: 'QCM',
    question: 'Pourquoi une β-lactamine peut-elle être associée à un aminoside dans certaines infections à streptocoque ou entérocoque sensibles, après vérification du profil de résistance ?',
    options: [
      { text: 'La β-lactamine transforme l\'aminoside en carbapénème', correct: false, correction: 'Non. Les molécules ne changent pas de famille chimique dans l\'association.' },
      { text: 'L\'action sur la paroi peut faciliter l\'entrée de l\'aminoside et produire une synergie', correct: true, correction: 'Oui. Cette association peut accroître l\'activité lorsque l\'aminoside conserve sa cible et qu\'il n\'existe pas de résistance de haut niveau.' },
      { text: 'L\'aminoside détruit mécaniquement toutes les β-lactamases', correct: false, correction: 'Non. Il agit sur la synthèse protéique et n\'est pas un inhibiteur universel de β-lactamases.' },
      { text: 'Elle est obligatoire pour tout streptocoque, quelle que soit l\'infection', correct: false, correction: 'Non. L\'indication dépend du site, de la gravité, du germe et des sensibilités.' },
      { text: 'L\'association garantit une activité même en cas de résistance de haut niveau à l\'aminoside', correct: false, correction: 'Non. Une telle résistance peut abolir la synergie ; l\'antibiogramme est essentiel.' },
    ],
    explanation: 'Le cours présente la synergie entre une molécule active sur la paroi et un aminoside chez certains cocci à Gram positif. Ce principe n\'est ni universel ni indépendant de la résistance de haut niveau. (Cours, p. 8)'
  },
  {
    id: 36,
    type: 'QRM',
    question: 'Concernant la résistance aux macrolides et lincosamides par modification de cible, quelles propositions sont exactes ?',
    options: [
      { text: 'Certains mécanismes de méthylation peuvent donner une résistance croisée aux lincosamides', correct: true, correction: 'Oui. Le phénotype MLSB peut toucher macrolides, lincosamides et streptogramines B.' },
      { text: 'Il est identique à l\'hydrolyse du noyau β-lactame par AmpC', correct: false, correction: 'Non. AmpC inactive une molécule ; la méthylation modifie ici la cible de l\'antibiotique.' },
      { text: 'Il dépend toujours d\'une modification de l\'ADN-gyrase', correct: false, correction: 'Non. La gyrase concerne les quinolones, pas le site ribosomal des macrolides.' },
      { text: 'Le mécanisme concerne une cible de la synthèse protéique', correct: true, correction: 'Oui. La cible se situe au niveau du ribosome, dans la grande sous-unité 50S.' },
      { text: 'Une méthylation de l\'ARN ribosomal 23S peut diminuer la fixation des macrolides', correct: true, correction: 'Oui. La modification du site ribosomal perturbe la liaison de cette famille.' },
    ],
    explanation: 'Chez des cocci à Gram positif, des méthylases de l\'ARN 23S peuvent produire une résistance macrolide-lincosamide, parfois inductible. (Cours, p. 9 ; étude expérimentale, https://pubmed.ncbi.nlm.nih.gov/7961464/)'
  },
  {
    id: 37,
    type: 'QCM',
    question: 'Quelle proposition résume le mieux la résistance naturelle aux macrolides de nombreux bacilles à Gram négatif ?',
    options: [
      { text: 'Les macrolides ont pour cible les PLP, absentes de ces bactéries', correct: false, correction: 'Non. Les macrolides ciblent le ribosome ; les bacilles à Gram négatif possèdent des PLP.' },
      { text: 'Une barrière de perméabilité limite souvent l\'accès de ces molécules à leur cible, avec des exceptions selon l\'espèce et la molécule', correct: true, correction: 'Oui. Le cours insiste sur l\'imperméabilité, mais il existe des exceptions et les activités doivent être appréciées au cas par cas.' },
      { text: 'Tous les bacilles à Gram négatif possèdent exactement la même méthylation de l\'ARN 23S', correct: false, correction: 'Non. La modification de cible n\'est pas un trait universel de tous les bacilles à Gram négatif.' },
      { text: 'La résistance naturelle s\'explique toujours par une carbapénémase', correct: false, correction: 'Non. Cette enzyme concerne les β-lactamines et n\'explique pas la barrière générale décrite.' },
      { text: 'Legionella et Haemophilus sont nécessairement résistants à tous les macrolides', correct: false, correction: 'Non. Le cours les mentionne justement comme exceptions à sa règle générale ; la sensibilité dépend de l\'agent.' },
    ],
    explanation: 'La membrane externe contribue à la faible activité de nombreux macrolides sur des bacilles à Gram négatif ; le cours cite des exceptions et la règle ne doit pas être absolue. (Cours, p. 9)'
  },
  {
    id: 38,
    type: 'QRM',
    question: 'Quels mécanismes peuvent participer à une résistance acquise aux macrolides chez des bactéries ?',
    options: [
      { text: 'Un efflux qui diminue la concentration intracellulaire de l\'antibiotique', correct: true, correction: 'Oui. Des pompes peuvent expulser des macrolides chez certaines espèces.' },
      { text: 'L\'acquisition d\'une PLP2a comme mécanisme direct de résistance aux macrolides', correct: false, correction: 'Non. PLP2a concerne la cible des β-lactamines, non les ribosomes.' },
      { text: 'La seule production d\'une pénicillinase', correct: false, correction: 'Non. Une pénicillinase hydrolyse des pénicillines ; elle n\'explique pas à elle seule une résistance aux macrolides.' },
      { text: 'Une modification du site ribosomal ciblé', correct: true, correction: 'Oui. La méthylation de l\'ARN 23S est un exemple majeur.' },
      { text: 'Une inactivation enzymatique du macrolide', correct: true, correction: 'Oui. Certaines enzymes bactériennes peuvent réduire son activité.' },
    ],
    explanation: 'Le cours cite la modification de cible et l\'inactivation enzymatique ; l\'efflux est une autre voie reconnue selon les espèces. (Cours, p. 9 ; études expérimentales, https://pubmed.ncbi.nlm.nih.gov/12670694/ et https://pubmed.ncbi.nlm.nih.gov/30108557/)'
  },
  {
    id: 39,
    type: 'QCM',
    question: 'Quelle paire d\'enzymes bactériennes constitue les cibles des quinolones et fluoroquinolones ?',
    options: [
      { text: 'L\'ADN-gyrase et la topoisomérase IV', correct: true, correction: 'Oui. Ces enzymes interviennent dans la réplication et la gestion de la topologie de l\'ADN bactérien.' },
      { text: 'L\'AmpC et une pénicillinase', correct: false, correction: 'Non. Ce sont des enzymes de résistance aux β-lactamines, non les cibles des quinolones.' },
      { text: 'La PLP2a et la PLP1', correct: false, correction: 'Non. Les PLP sont des cibles des β-lactamines.' },
      { text: 'La porine OprD et une pompe d\'efflux', correct: false, correction: 'Non. Ces structures peuvent modifier l\'accès ou la sortie d\'antibiotiques, mais ne sont pas les cibles enzymatiques des quinolones.' },
      { text: 'Les sous-unités 30S et 50S', correct: false, correction: 'Non. Ces structures ribosomales sont visées par d\'autres familles d\'antibiotiques.' },
    ],
    explanation: 'Le cours souligne l\'ADN-gyrase ; la topoisomérase IV est l\'autre cible majeure des quinolones. (Cours, p. 9 ; CDC, https://wwwnc.cdc.gov/eid/article/18/9/11-1515_article)'
  },
  {
    id: 40,
    type: 'QRM',
    question: 'À propos de la résistance acquise aux fluoroquinolones, quelles propositions sont exactes ?',
    options: [
      { text: 'Des mutations de gènes de l\'ADN-gyrase peuvent diminuer l\'affinité de la cible', correct: true, correction: 'Oui. Des modifications de gyrA ou d\'autres sous-unités peuvent élever la CMI.' },
      { text: 'L\'accumulation d\'altérations de cible peut augmenter progressivement la CMI', correct: true, correction: 'Oui. Plusieurs étapes génétiques peuvent produire un niveau de résistance plus élevé.' },
      { text: 'Des mutations de la topoisomérase IV peuvent aussi intervenir', correct: true, correction: 'Oui. Selon l\'espèce et la molécule, parC ou parE peuvent contribuer à la résistance.' },
      { text: 'Une pénicillinase est à elle seule le mécanisme spécifique obligatoire des quinolones', correct: false, correction: 'Non. La pénicillinase hydrolyse des pénicillines et ne définit pas la résistance aux quinolones.' },
      { text: 'L\'efflux et la diminution de perméabilité peuvent s\'ajouter aux altérations de cible', correct: true, correction: 'Oui. Ces mécanismes peuvent abaisser la concentration intracellulaire de l\'antibiotique.' },
    ],
    explanation: 'Le cours met surtout en avant l\'altération de l\'ADN-gyrase et l\'accumulation de mutations ; d\'autres mécanismes, dont topoisomérase IV et efflux, peuvent s\'associer. (Cours, p. 9 ; CDC, https://wwwnc.cdc.gov/eid/article/18/9/11-1515_article)'
  },
  {
    id: 41,
    type: 'QCM',
    question: 'Une souche de Staphylococcus aureus produit une pénicillinase mais ne porte pas de résistance à la méticilline. Quel profil est attendu ?',
    options: [
      { text: 'Résistance à la pénicilline G avec sensibilité possible à l\'oxacilline.', correct: true, correction: 'Oui. La pénicillinase hydrolyse la pénicilline G, tandis que l\'oxacilline résiste à cette enzyme.' },
      { text: 'Sensibilité conservée à toutes les pénicillines, y compris la pénicilline G.', correct: false, correction: 'Non. La pénicilline G est précisément une cible de la pénicillinase staphylococcique.' },
      { text: 'Résistance aux glycopeptides par hydrolyse de leur noyau β-lactame.', correct: false, correction: 'Non. Les glycopeptides ne possèdent pas de noyau β-lactame ; la pénicillinase ne les hydrolyse pas.' },
      { text: 'Résistance systématique à la ceftaroline par modification des PLP.', correct: false, correction: 'Non. La production d\'une pénicillinase ne démontre pas la présence de PLP2a ni la résistance à la ceftaroline.' },
      { text: 'Résistance à l\'oxacilline imposée par la pénicillinase seule.', correct: false, correction: 'Non. La résistance à l\'oxacilline correspond à un autre mécanisme, classiquement l\'acquisition de mecA ou mecC.' },
    ],
    explanation: 'La pénicillinase et la résistance à la méticilline sont deux mécanismes distincts : seule la seconde modifie la cible des β-lactamines. (Cours, p. 11.)'
  },
  {
    id: 42,
    type: 'QRM',
    question: 'Un S. aureus est résistant à la pénicilline G mais sensible à l\'oxacilline. Quelles interprétations sont justifiées ?',
    options: [
      { text: 'Ce profil suffit à qualifier la souche de SARM.', correct: false, correction: 'Non. SARM signifie résistant à la méticilline ou à l\'oxacilline ; ici l\'oxacilline reste active.' },
      { text: 'Une pénicilline stable face à la pénicillinase peut conserver une activité.', correct: true, correction: 'Oui. C\'est la logique de la pénicilline M dans le tableau du cours.' },
      { text: 'Une pénicillinase est un mécanisme compatible avec ce profil.', correct: true, correction: 'Oui. Elle hydrolyse la pénicilline G sans imposer une résistance à l\'oxacilline.' },
      { text: 'La pénicillinase détruit aussi les glycopeptides par hydrolyse.', correct: false, correction: 'Non. Les glycopeptides ne sont pas des β-lactamines et ne sont pas hydrolysés par cette enzyme.' },
      { text: 'La sensibilité aux fluoroquinolones nécessite une évaluation distincte.', correct: true, correction: 'Oui. Ce couple de résultats β-lactamines ne renseigne pas à lui seul sur les autres familles.' },
    ],
    explanation: 'La résistance à la pénicilline G isolée ne doit pas être confondue avec la résistance à la méticilline. (Cours, p. 11, tableau S. aureus.)'
  },
  {
    id: 43,
    type: 'QCM',
    question: 'Pourquoi une souche de S. aureus productrice de pénicillinase, mais sensible à l\'oxacilline, peut-elle rester sensible à la pénicilline M ?',
    options: [
      { text: 'La pénicilline M agit comme inhibiteur direct de la pénicillinase, au même titre que le clavulanate.', correct: false, correction: 'Non. Elle est surtout stable face à l\'enzyme ; ce n\'est pas l\'inhibiteur associé à une autre pénicilline.' },
      { text: 'La pénicilline M est stable face à la pénicillinase staphylococcique.', correct: true, correction: 'Oui. Sa structure la protège de l\'enzyme qui inactive la pénicilline G.' },
      { text: 'La pénicillinase n\'a plus d\'activité lorsque la bactérie est exposée à l\'oxacilline.', correct: false, correction: 'Non. La sensibilité à l\'oxacilline n\'implique pas la disparition de l\'enzyme.' },
      { text: 'La pénicilline M se fixe exclusivement sur la PLP2a des SARM.', correct: false, correction: 'Non. Une souche sensible à l\'oxacilline n\'a pas besoin de PLP2a pour être inhibée par la pénicilline M.' },
      { text: 'La pénicilline M agit en bloquant l\'ADN-gyrase, contrairement aux autres β-lactamines.', correct: false, correction: 'Non. Elle conserve la cible de la famille : les protéines de liaison aux pénicillines.' },
    ],
    explanation: 'La résistance à une pénicilline ne se transpose pas automatiquement à toute la sous-famille : la stabilité face à l\'enzyme compte. (Cours, p. 11.)'
  },
  {
    id: 44,
    type: 'QRM',
    question: 'Dans le tableau simplifié du cours, quelles propositions distinguent le SARM du S. aureus seulement producteur de pénicillinase ?',
    options: [
      { text: 'La pénicillinase isolée et la résistance à la méticilline ont toujours le même antibiogramme.', correct: false, correction: 'Non. La sensibilité à l\'oxacilline les différencie précisément.' },
      { text: 'Le SARM est résistant à l\'oxacilline, contrairement à une souche qui ne produit qu\'une pénicillinase.', correct: true, correction: 'Oui. La pénicillinase seule n\'inactive pas la pénicilline M du tableau.' },
      { text: 'La ceftaroline est une exception possible parmi les β-lactamines actives sur un SARM sensible.', correct: true, correction: 'Oui. Cette activité doit être confirmée pour la souche considérée.' },
      { text: 'L\'amoxicilline–acide clavulanique n\'est pas rétablie par le seul ajout de clavulanate chez un SARM.', correct: true, correction: 'Oui. La résistance à la méticilline relève d\'une cible modifiée ; inhiber une pénicillinase ne corrige pas ce mécanisme.' },
      { text: 'Tous les SARM sont obligatoirement résistants aux aminosides.', correct: false, correction: 'Non. Une corésistance peut être fréquente sans être universelle.' },
    ],
    explanation: 'Le tableau met l\'accent sur la lecture du phénotype, pas sur une extrapolation des résistances non β-lactamines. (Cours, p. 11 ; EUCAST, Guidance on cephalosporins in S. aureus, 2026.)'
  },
  {
    id: 45,
    type: 'QCM',
    question: 'Dans le tableau simplifié du cours, quel est le profil β-lactamine sauvage d\'E. coli, avant acquisition d\'une résistance ?',
    options: [
      { text: 'Résistance naturelle à l\'amoxicilline par une pénicillinase chromosomique de haut niveau.', correct: false, correction: 'Non. Ce profil correspond plutôt au schéma sauvage de K. pneumoniae ; chez E. coli, l\'éventuelle ampC chromosomique est faiblement exprimée dans ce schéma.' },
      { text: 'Résistance naturelle au céfotaxime par une BLSE.', correct: false, correction: 'Non. Une BLSE est une résistance acquise ; elle ne définit pas le phénotype sauvage d\'E. coli.' },
      { text: 'Résistance naturelle à l\'imipénème par une carbapénémase.', correct: false, correction: 'Non. La production d\'une carbapénémase n\'est pas le profil sauvage d\'E. coli.' },
      { text: 'Résistance à toutes les β-lactamines par imperméabilité complète.', correct: false, correction: 'Non. L\'enveloppe de ce bacille n\'empêche pas l\'activité de toutes les β-lactamines.' },
      { text: 'Sensibilité à l\'amoxicilline et au céfotaxime, avec résistance aux pénicillines G et M.', correct: true, correction: 'Oui. Le groupe 0/1 est sensible à ces deux molécules testées, mais la barrière externe exclut les pénicillines G et M.' },
    ],
    explanation: 'Le mot « sauvage » désigne ici un profil de référence, pas une garantie de sensibilité pour un isolat clinique réel. (Cours, p. 12, tableau des phénotypes sauvages.)'
  },
  {
    id: 46,
    type: 'QRM',
    question: 'Selon le tableau comparatif des phénotypes sauvages du cours, quelles associations espèce–profil sont correctes ?',
    options: [
      { text: 'K. pneumoniae : amoxicilline sensible du seul fait de l\'ajout d\'une BLSE.', correct: false, correction: 'Non. Une BLSE est acquise et élargit la résistance ; elle ne rend pas la souche sensible à l\'amoxicilline.' },
      { text: 'E. coli : amoxicilline sensible dans le schéma de référence.', correct: true, correction: 'Oui. Le groupe 0/1 ne présente pas la pénicillinase intrinsèque du groupe Klebsiella dans ce tableau.' },
      { text: 'Enterobacter spp. : céfalexine toujours sensible grâce à la céphalosporinase.', correct: false, correction: 'Non. La céphalosporinase rend au contraire la céfalexine, C1G, inactive dans ce schéma.' },
      { text: 'Enterobacter spp. : amoxicilline–acide clavulanique résistante dans le schéma de référence.', correct: true, correction: 'Oui. La céphalosporinase AmpC intrinsèque n\'est pas inhibée par le clavulanate.' },
      { text: 'K. pneumoniae : amoxicilline résistante, céfotaxime sensible dans le schéma de référence.', correct: true, correction: 'Oui. Sa pénicillinase intrinsèque touche l\'amoxicilline mais pas la C3G considérée ici.' },
    ],
    explanation: 'Les trois groupes se distinguent surtout par l\'absence de β-lactamase pertinente dans le tableau, la pénicillinase naturelle ou la céphalosporinase AmpC. (Cours, p. 12–13, tableaux.)'
  },
  {
    id: 47,
    type: 'QCM',
    question: 'Pourquoi une K. pneumoniae de phénotype sauvage est-elle résistante à l\'amoxicilline seule dans le tableau du cours ?',
    options: [
      { text: 'Elle produit d\'emblée une carbapénémase.', correct: false, correction: 'Non. Une carbapénémase est un mécanisme acquis distinct et beaucoup plus large.' },
      { text: 'Elle porte nécessairement une BLSE plasmidique.', correct: false, correction: 'Non. Une BLSE est acquise et n\'est pas requise pour la résistance intrinsèque à l\'amoxicilline.' },
      { text: 'Elle produit naturellement une pénicillinase qui hydrolyse l\'amoxicilline.', correct: true, correction: 'Oui. La pénicillinase chromosomique du groupe Klebsiella explique ce profil de base.' },
      { text: 'L\'acide clavulanique transforme l\'amoxicilline en céphalosporine.', correct: false, correction: 'Non. Le clavulanate inhibe certaines β-lactamases ; il ne change pas la classe chimique de l\'amoxicilline.' },
      { text: 'Elle n\'a aucune protéine de liaison aux pénicillines.', correct: false, correction: 'Non. L\'absence universelle de PLP n\'est pas le mécanisme de ce phénotype.' },
    ],
    explanation: 'La résistance naturelle de K. pneumoniae à l\'amoxicilline est enzymatique ; elle ne signifie pas d\'emblée BLSE ou carbapénémase. (Cours, p. 13.)'
  },
  {
    id: 48,
    type: 'QRM',
    question: 'Pour une K. pneumoniae sans résistance acquise supplémentaire, quelles propositions correspondent au schéma simplifié du cours ?',
    options: [
      { text: 'Sa résistance à l\'amoxicilline prouve la présence d\'une carbapénémase.', correct: false, correction: 'Non. La résistance à l\'amoxicilline est déjà intrinsèque et ne permet pas de conclure à une carbapénémase.' },
      { text: 'Le céfotaxime peut rester actif en l\'absence de mécanisme acquis supplémentaire.', correct: true, correction: 'Oui. Cette C3G échappe à l\'hydrolyse de la pénicillinase naturelle décrite.' },
      { text: 'Une pénicillinase fait partie de son phénotype naturel.', correct: true, correction: 'Oui. Le groupe 2 du tableau possède une pénicillinase de bas niveau.' },
      { text: 'L\'ajout d\'acide clavulanique peut restaurer une activité dans le schéma sauvage.', correct: true, correction: 'Oui. Le clavulanate inhibe cette pénicillinase ; l\'effet réel dépend toujours de l\'isolat.' },
      { text: 'L\'amoxicilline seule est inactive dans ce schéma.', correct: true, correction: 'Oui. La pénicillinase hydrolyse l\'amoxicilline.' },
    ],
    explanation: 'Un phénotype sauvage est un point de départ microbiologique ; toute décision sur une souche clinique repose sur son antibiogramme. (Cours, p. 12–13.)'
  },
  {
    id: 49,
    type: 'QCM',
    question: 'Dans le schéma du cours, quel mécanisme explique qu\'Enterobacter spp. soit résistant à l\'amoxicilline–acide clavulanique à l\'état sauvage ?',
    options: [
      { text: 'Une céphalosporinase AmpC naturelle peu inhibée par l\'acide clavulanique.', correct: true, correction: 'Oui. Cette enzyme explique l\'absence d\'effet restaurateur du clavulanate sur l\'amoxicilline.' },
      { text: 'Une absence complète de porines chez toutes les souches.', correct: false, correction: 'Non. Le phénotype de référence présenté est enzymatique, pas une absence universelle de porines.' },
      { text: 'Une BLSE plasmidique présente dans toutes les souches.', correct: false, correction: 'Non. La BLSE est une résistance acquise, non un trait sauvage universel d\'Enterobacter.' },
      { text: 'Une pénicillinase naturelle toujours entièrement inhibée par le clavulanate.', correct: false, correction: 'Non. Une enzyme entièrement inhibée aurait plutôt un profil restauré par l\'association.' },
      { text: 'Une carbapénémase chromosomique obligatoire.', correct: false, correction: 'Non. Une carbapénémase n\'est pas le mécanisme du profil sauvage présenté.' },
    ],
    explanation: 'Les céphalosporinases AmpC se distinguent des pénicillinases classiques par leur profil d\'inhibition vis-à-vis du clavulanate. (Cours, p. 13.)'
  },
  {
    id: 50,
    type: 'QRM',
    question: 'À propos du profil sauvage d\'Enterobacter spp. dans le tableau du cours, quelles propositions sont exactes ?',
    options: [
      { text: 'La céfalexine y est classée résistante.', correct: true, correction: 'Oui. Cette C1G est touchée par la céphalosporinase.' },
      { text: 'L\'amoxicilline seule y est classée résistante.', correct: true, correction: 'Oui. La céphalosporinase naturelle hydrolyse cette aminopénicilline.' },
      { text: 'Le céfotaxime peut sembler sensible dans le tableau de base, sans préjuger d\'une résistance émergente.', correct: true, correction: 'Oui. Le tableau décrit un bas niveau initial ; une expression AmpC accrue peut modifier la sensibilité sous traitement.' },
      { text: 'Le tableau suppose une carbapénémase constitutive.', correct: false, correction: 'Non. La carbapénémase ne fait pas partie du phénotype sauvage représenté.' },
      { text: 'L\'amoxicilline–acide clavulanique y reste classée résistante.', correct: true, correction: 'Oui. Le clavulanate n\'inhibe pas efficacement la céphalosporinase naturelle.' },
    ],
    explanation: 'Le profil de base de certaines espèces d\'Enterobacter, notamment le complexe E. cloacae, ne garantit pas la sécurité clinique d\'une C3G : une expression accrue d\'AmpC peut faire émerger la résistance. (Cours, p. 12–13 ; IDSA AMR Guidance, 2024.)'
  },
  {
    id: 51,
    type: 'QCM',
    question: 'Un E. coli initialement sensible à l\'amoxicilline acquiert une pénicillinase plasmidique à spectre étroit. À quel profil du tableau du cours se rapproche-t-il ?',
    options: [
      { text: 'Au profil d\'une carbapénémase : imipénème obligatoirement résistant.', correct: false, correction: 'Non. Une pénicillinase étroite n\'hydrolyse pas les carbapénèmes.' },
      { text: 'Au profil SARM : oxacilline résistante par PLP2a.', correct: false, correction: 'Non. PLP2a caractérise un mécanisme staphylococcique, sans rapport avec ce plasmide d\'E. coli.' },
      { text: 'Au profil sauvage de K. pneumoniae : amoxicilline résistante, céfotaxime possiblement sensible.', correct: true, correction: 'Oui. Une pénicillinase étroite modifie surtout les pénicillines, comme dans le groupe 2 du tableau.' },
      { text: 'Au profil du pneumocoque : résistance par PLP mosaïques.', correct: false, correction: 'Non. Le mécanisme décrit ici est une enzyme, non une modification des PLP pneumococciques.' },
      { text: 'Au profil d\'une BLSE : toutes les C3G nécessairement résistantes.', correct: false, correction: 'Non. La pénicillinase étroite n\'a pas, par définition, le spectre étendu d\'une BLSE.' },
    ],
    explanation: 'Une pénicillinase acquise peut faire converger le profil d\'E. coli vers celui de K. pneumoniae sauvage, sans rendre leurs histoires génétiques identiques. (Cours, p. 13.)'
  },
  {
    id: 52,
    type: 'QRM',
    question: 'Parmi les espèces suivantes, lesquelles appartiennent au groupe sauvage 0/1 du tableau du cours ?',
    options: [
      { text: 'Proteus mirabilis.', correct: true, correction: 'Oui. P. mirabilis est cité dans la même colonne.' },
      { text: 'Escherichia coli.', correct: true, correction: 'Oui. E. coli figure dans la colonne 0/1.' },
      { text: 'Shigella spp.', correct: true, correction: 'Oui. Shigella figure parmi les espèces du groupe 0/1.' },
      { text: 'Klebsiella pneumoniae.', correct: false, correction: 'Non. K. pneumoniae est l\'exemple du groupe 2, caractérisé par une pénicillinase naturelle.' },
      { text: 'Salmonella spp.', correct: true, correction: 'Oui. Le tableau classe Salmonella dans ce groupe.' },
    ],
    explanation: 'Le regroupement 0/1 décrit un profil β-lactamine de référence commun dans le tableau, sans présumer du résultat d\'un isolat clinique. (Cours, p. 12.)'
  },
  {
    id: 53,
    type: 'QCM',
    question: 'Une entérobactérie est résistante à l\'amoxicilline et à la ticarcilline, mais sensible à l\'amoxicilline–acide clavulanique, à la céfalexine et au céfotaxime. À quel groupe sauvage du tableau correspond ce profil ?',
    options: [
      { text: 'Au groupe 0/1 illustré par E. coli.', correct: false, correction: 'Non. Ce groupe est sensible à l\'amoxicilline et à la ticarcilline dans le tableau.' },
      { text: 'Au groupe 2 illustré par K. pneumoniae.', correct: true, correction: 'Oui. Une pénicillinase naturelle inactive les deux pénicillines, tandis que le clavulanate restaure l\'amoxicilline.' },
      { text: 'À une carbapénémase démontrée.', correct: false, correction: 'Non. Ce profil n\'exige pas de carbapénémase et ne renseigne pas à lui seul sur l\'imipénème.' },
      { text: 'Au phénotype SARM.', correct: false, correction: 'Non. SARM désigne Staphylococcus aureus, qui n\'est pas une entérobactérie.' },
      { text: 'Au groupe 3 illustré par Enterobacter spp.', correct: false, correction: 'Non. Ce groupe reste résistant à l\'amoxicilline–acide clavulanique et à la céfalexine.' },
    ],
    explanation: 'La restauration par le clavulanate et la sensibilité aux céphalosporines distinguent le groupe 2 du groupe 3. (Cours, p. 12–13, tableau.)'
  },
  {
    id: 54,
    type: 'QRM',
    question: 'Pour distinguer les groupes sauvages 2 et 3 du tableau, quelles propositions sont exactes ?',
    options: [
      { text: 'L\'amoxicilline seule ne les distingue pas : elle est résistante dans les deux.', correct: true, correction: 'Oui. Les deux mécanismes naturels rendent cette molécule inactive.' },
      { text: 'L\'amoxicilline–acide clavulanique les distingue dans ce schéma.', correct: true, correction: 'Oui. Elle est sensible pour le groupe 2 et résistante pour le groupe 3.' },
      { text: 'La ticarcilline les distingue dans ce schéma.', correct: true, correction: 'Oui. Elle est résistante pour le groupe 2 et sensible pour le groupe 3.' },
      { text: 'Le céfotaxime les distingue à lui seul dans ce tableau sauvage.', correct: false, correction: 'Non. Il est noté sensible dans les deux colonnes de référence.' },
      { text: 'La céfalexine les distingue dans ce schéma.', correct: true, correction: 'Oui. Elle reste sensible pour le groupe 2 mais pas pour le groupe 3.' },
    ],
    explanation: 'Un couple espèce–antibiotique est plus informatif qu\'un résultat isolé commun aux deux groupes. (Cours, p. 12, tableau.)'
  },
  {
    id: 55,
    type: 'QCM',
    question: 'Une entérobactérie est résistante à l\'amoxicilline, à l\'amoxicilline–acide clavulanique et à la céfalexine, mais sensible à la ticarcilline et au céfotaxime. Quel groupe sauvage du tableau reproduit ce profil ?',
    options: [
      { text: 'Le groupe 3, illustré par Enterobacter spp. et Serratia.', correct: true, correction: 'Oui. Une céphalosporinase de bas niveau explique ces résistances tout en épargnant ici ticarcilline et céfotaxime.' },
      { text: 'Une BLSE prouvée par ce seul profil.', correct: false, correction: 'Non. La sensibilité au céfotaxime et le profil intrinsèque du groupe 3 ne démontrent pas une BLSE.' },
      { text: 'Une souche de pneumocoque à PLP modifiées.', correct: false, correction: 'Non. Le pneumocoque ne fait pas partie des entérobactéries de ce tableau.' },
      { text: 'Le groupe 2, illustré par K. pneumoniae.', correct: false, correction: 'Non. Le groupe 2 reste sensible à amoxicilline–clavulanate et céfalexine, mais résistant à ticarcilline.' },
      { text: 'Le groupe 0/1, illustré par E. coli.', correct: false, correction: 'Non. Le groupe 0/1 est sensible aux trois premières molécules dans le tableau.' },
    ],
    explanation: 'L\'identification du groupe 3 s\'appuie surtout sur amoxicilline–clavulanate et céfalexine résistantes, avec céfotaxime encore sensible au niveau basal. (Cours, p. 12–13.)'
  },
  {
    id: 56,
    type: 'QRM',
    question: 'Concernant les molécules du tableau des entérobactéries, quelles classifications sont exactes ?',
    options: [
      { text: 'Le céfotaxime est une céphalosporine de troisième génération.', correct: true, correction: 'Oui. Il représente une C3G dans ce tableau.' },
      { text: 'L\'amoxicilline est une aminopénicilline.', correct: true, correction: 'Oui. Sa sous-famille est celle des aminopénicillines, malgré une coquille dans une ligne du support.' },
      { text: 'L\'acide clavulanique est une céphalosporine de troisième génération.', correct: false, correction: 'Non. C\'est un inhibiteur de certaines β-lactamases ajouté à une β-lactamine, pas une C3G.' },
      { text: 'La ticarcilline est une carboxypénicilline.', correct: true, correction: 'Oui. Elle appartient à cette sous-famille des pénicillines.' },
      { text: 'La céfalexine est une céphalosporine de première génération.', correct: true, correction: 'Oui. Le tableau la désigne comme C1G.' },
    ],
    explanation: 'Le support classe par erreur l\'amoxicilline avec les carboxypénicillines ; la nomenclature officielle la classe parmi les aminopénicillines. (Cours, p. 12 ; FDA, Penicillin classification.)'
  },
  {
    id: 57,
    type: 'QCM',
    question: 'Dans le tableau sauvage, pourquoi le céfotaxime ne permet-il pas, à lui seul, de reconnaître le groupe 0/1, 2 ou 3 ?',
    options: [
      { text: 'Il est noté sensible seulement dans les groupes 0/1 et 2.', correct: false, correction: 'Non. Le groupe 3 de bas niveau est lui aussi noté sensible au céfotaxime.' },
      { text: 'Il est noté sensible dans les trois colonnes de référence.', correct: true, correction: 'Oui. Ce résultat est commun aux trois groupes sauvages représentés.' },
      { text: 'Il est noté sensible seulement dans les groupes 0/1 et 3.', correct: false, correction: 'Non. Le groupe 2 avec pénicillinase naturelle reste lui aussi sensible à cette C3G.' },
      { text: 'Il est noté résistant dans les trois colonnes.', correct: false, correction: 'Non. Le tableau indique S pour chacun de ces groupes.' },
      { text: 'Il est noté sensible seulement dans le groupe 0/1.', correct: false, correction: 'Non. Les groupes 2 et 3 ont également S pour le céfotaxime dans le tableau sauvage.' },
    ],
    explanation: 'Un résultat identique dans plusieurs colonnes ne les discrimine pas ; il faut lire les autres β-lactamines du profil. (Cours, p. 12, tableau.)'
  },
  {
    id: 58,
    type: 'QRM',
    question: 'À propos de la lecture d\'un profil de S. aureus, quelles propositions sont justes ?',
    options: [
      { text: 'L\'acide clavulanique inverse la résistance à la méticilline en restaurant la cible bactérienne.', correct: false, correction: 'Non. Il inhibe certaines enzymes, sans corriger une cible modifiée.' },
      { text: 'Un SARM doit être considéré résistant à l\'oxacilline.', correct: true, correction: 'Oui. La résistance à la méticilline inclut ce marqueur phénotypique.' },
      { text: 'La pénicillinase seule rend la pénicilline G résistante sans imposer l\'oxacilline résistante.', correct: true, correction: 'Oui. Le tableau oppose ces deux résultats dans la colonne pénicillinase.' },
      { text: 'La résistance aux fluoroquinolones est prouvée par la seule résistance à l\'oxacilline.', correct: false, correction: 'Non. Une corésistance fréquente n\'est pas une déduction automatique pour un isolat donné.' },
      { text: 'Une céphalosporine comme la ceftaroline peut constituer une exception anti-SARM si la souche est sensible.', correct: true, correction: 'Oui. Son activité n\'est pas universelle et doit être vérifiée.' },
    ],
    explanation: 'Le tableau aide à séparer enzyme et résistance à la méticilline ; les autres familles ont leur propre antibiogramme. (Cours, p. 11.)'
  },
  {
    id: 59,
    type: 'QCM',
    question: 'Dans le groupe sauvage 0/1 du cours, quel couple d\'espèces est particulièrement cité comme cause d\'infections urinaires ?',
    options: [
      { text: 'E. coli et Proteus mirabilis.', correct: true, correction: 'Oui. Le texte les associe aux infections urinaires.' },
      { text: 'Serratia et S. aureus.', correct: false, correction: 'Non. Serratia appartient au groupe 3 du tableau et S. aureus est un staphylocoque.' },
      { text: 'S. aureus et Streptococcus pneumoniae.', correct: false, correction: 'Non. Ce ne sont pas les entérobactéries du groupe 0/1 visées par la question.' },
      { text: 'Salmonella et Shigella.', correct: false, correction: 'Non. Le texte cite ces deux espèces surtout pour les diarrhées communautaires.' },
      { text: 'K. pneumoniae et Enterobacter spp.', correct: false, correction: 'Non. Ces espèces sont rangées dans les groupes 2 et 3 du tableau, et non dans le couple demandé.' },
    ],
    explanation: 'Le groupe 0/1 réunit plusieurs espèces ; le support illustre ici leurs contextes cliniques fréquents sans les rendre exclusifs. (Cours, p. 12.)'
  },
  {
    id: 60,
    type: 'QRM',
    question: 'Quelles associations espèce–profil de référence sont conformes aux tableaux du cours ?',
    options: [
      { text: 'E. coli sauvage : amoxicilline sensible et céfotaxime sensible dans le schéma simplifié.', correct: true, correction: 'Oui. Ce sont deux cases S du groupe 0/1.' },
      { text: 'S. aureus producteur de pénicillinase sans résistance à la méticilline : pénicilline G résistante, oxacilline possiblement active.', correct: true, correction: 'Oui. La pénicillinase seule n\'inactive pas la pénicilline M.' },
      { text: 'SARM : toutes les β-lactamines et toutes les fluoroquinolones sont nécessairement résistantes.', correct: false, correction: 'Non. La ceftaroline peut faire exception parmi les β-lactamines et la corésistance aux fluoroquinolones n\'est pas universelle.' },
      { text: 'K. pneumoniae sauvage : amoxicilline résistante, amoxicilline–clavulanate sensible dans ce schéma.', correct: true, correction: 'Oui. Le clavulanate inhibe la pénicillinase de bas niveau illustrée.' },
      { text: 'Enterobacter spp. sauvage : amoxicilline–clavulanate résistante, céfotaxime sensible au niveau basal.', correct: true, correction: 'Oui. La céphalosporinase de bas niveau n\'est pas corrigée par le clavulanate ; le tableau note néanmoins le céfotaxime S.' },
    ],
    explanation: 'Le profil sauvage décrit une référence, pas l\'antibiogramme garanti d\'une souche clinique ; celui-ci doit être interprété séparément. (Cours, p. 11–13.)'
  },
  {
    id: 61,
    type: 'QCM',
    question: 'Que désigne une bactérie multirésistante (BMR) dans le cadre de ce cours ?',
    options: [
      { text: 'Toute bactérie naturellement insensible à un seul antibiotique', correct: false, correction: 'Non. Une résistance intrinsèque isolée ne suffit pas à décrire une multirésistance acquise.' },
      { text: 'Une bactérie qui ne peut être rencontrée qu\'à l\'hôpital', correct: false, correction: 'Non. Une BMR peut aussi circuler en communauté.' },
      { text: 'Une souche ayant accumulé des résistances à plusieurs familles d\'antibiotiques', correct: true, correction: 'Oui. La multirésistance associe plusieurs résistances et peut restreindre les options actives.' },
      { text: 'Une souche qui produit obligatoirement une carbapénémase', correct: false, correction: 'Non. Une BMR peut relever d\'autres mécanismes, comme mecA ou une BLSE.' },
      { text: 'Une bactérie devenue nécessairement insensible à tous les antibiotiques disponibles', correct: false, correction: 'Non. Multirésistante ne signifie pas automatiquement panrésistante.' },
    ],
    explanation: 'Le support définit les BMR par l\'accumulation de résistances à plusieurs familles et cite des exemples hospitaliers et communautaires. (Cours, p. 15)'
  },
  {
    id: 62,
    type: 'QRM',
    question: 'Quels exemples du cours peuvent relever des BMR ?',
    options: [
      { text: 'Toute souche sauvage d\'E. coli sans résistance acquise', correct: false, correction: 'Non. Le phénotype sauvage n\'est pas, en tant que tel, un exemple de multirésistance acquise.' },
      { text: 'Tout pneumocoque sensible aux β-lactamines testées', correct: false, correction: 'Non. La sensibilité ne définit pas une BMR.' },
      { text: 'Un Staphylococcus aureus résistant à la méticilline (SARM)', correct: true, correction: 'Oui. Le SARM est cité parmi les BMR surveillées.' },
      { text: 'Une entérobactérie productrice de BLSE', correct: true, correction: 'Oui. La résistance étendue aux β-lactamines et des co-résistances possibles expliquent son classement fréquent parmi les BMR.' },
      { text: 'Un Pseudomonas aeruginosa multirésistant', correct: true, correction: 'Oui. Le support le cite comme exemple possible de BMR.' },
    ],
    explanation: 'SARM, entérobactéries productrices de BLSE et certains bacilles non fermentants multirésistants figurent parmi les exemples du cours. (Cours, p. 15)'
  },
  {
    id: 63,
    type: 'QCM',
    question: 'Une entérobactérie productrice de BLSE est isolée lors d\'une infection urinaire acquise en ville. Quelle conclusion est justifiée ?',
    options: [
      { text: 'Toute infection urinaire communautaire à entérobactérie est due à une BLSE', correct: false, correction: 'Non. La possibilité d\'une BLSE ne signifie pas qu\'elle soit systématique.' },
      { text: 'Le lieu d\'acquisition permet à lui seul de déduire les antibiotiques auxquels la souche reste sensible', correct: false, correction: 'Non. La sensibilité dépend des mécanismes présents dans la souche et de l\'antibiogramme.' },
      { text: 'La découverte d\'une BLSE en ville prouve une transmission hospitalière récente', correct: false, correction: 'Non. Une acquisition communautaire ne permet pas d\'attribuer à elle seule la source de la souche.' },
      { text: 'Une BLSE peut être rencontrée en ville ; l\'antibiogramme de cette souche reste nécessaire', correct: true, correction: 'Oui. Le caractère communautaire n\'exclut pas une résistance acquise, et le profil réel se mesure sur l\'isolat.' },
      { text: 'Le contexte communautaire exclut une BLSE et rend le résultat de laboratoire impossible', correct: false, correction: 'Non. Le cours cite les BLSE aussi bien en ville qu\'à l\'hôpital.' },
    ],
    explanation: 'Une BMR peut être rencontrée à l\'hôpital ou en communauté ; son origine géographique ne remplace pas l\'étude de sensibilité. (Cours, p. 15)'
  },
  {
    id: 64,
    type: 'QRM',
    question: 'Une souche est décrite comme BMR sur le compte rendu. Quelles informations faut-il encore apprécier pour envisager un traitement ?',
    options: [
      { text: 'Le seul nom de l\'espèce, identique pour toutes ses souches', correct: false, correction: 'Non. Des souches de même espèce peuvent avoir des résistances acquises différentes.' },
      { text: 'Les antibiotiques pour lesquels la souche reste sensible sur l\'antibiogramme', correct: true, correction: 'Oui. La mention BMR ne détaille pas les molécules encore actives.' },
      { text: 'La seule étiquette BMR, qui signifie qu\'aucune molécule ne peut agir', correct: false, correction: 'Non. Multirésistance ne veut pas dire panrésistance.' },
      { text: 'La distinction entre infection à traiter et simple portage', correct: true, correction: 'Oui. Une BMR peut coloniser sans provoquer une infection nécessitant un antibiotique.' },
      { text: 'Le site de l\'infection et l\'exposition antibiotique qu\'on peut y obtenir', correct: true, correction: 'Oui. Une activité in vitro doit être confrontée au site et aux modalités d\'administration.' },
    ],
    explanation: 'L\'étiquette BMR signale un risque de choix difficile, mais l\'antibiogramme et le contexte clinique déterminent les options réelles. (Cours, p. 15)'
  },
  {
    id: 65,
    type: 'QCM',
    question: 'Quel support génétique porte habituellement mecA ou mecC dans le SARM décrit par le cours ?',
    options: [
      { text: 'Une séquence d\'ARN ribosomal modifiée par un gène erm', correct: false, correction: 'Non. Le système erm concerne la résistance aux macrolides-lincosamides, non les gènes mec.' },
      { text: 'Le plasmide BLSE d\'une entérobactérie transmis tel quel au staphylocoque', correct: false, correction: 'Non. Les BLSE plasmidiques et le système mec du SARM sont des déterminants distincts.' },
      { text: 'Une mutation isolée du gène de l\'ADN-gyrase', correct: false, correction: 'Non. Cette cible est surtout liée aux fluoroquinolones, pas à mecA/mecC.' },
      { text: 'Une cassette génétique intégrée au chromosome de S. aureus', correct: true, correction: 'Oui. Les gènes mec sont portés par la cassette chromosomique SCCmec et codent une PLP de faible affinité.' },
      { text: 'Un plasmide codant uniquement une carbapénémase d\'entérobactérie', correct: false, correction: 'Non. Une carbapénémase ne code pas la PLP2a/2c staphylococcique.' },
    ],
    explanation: 'Le cours situe mecA/mecC sur un élément intégré au chromosome, à distinguer des BLSE souvent plasmidiques. (Cours, p. 16)'
  },
  {
    id: 66,
    type: 'QRM',
    question: 'Chez un SARM portant mecA, quelles propositions expliquent sa résistance aux β-lactamines usuelles ?',
    options: [
      { text: 'mecA code une PLP2a dont l\'affinité pour de nombreuses β-lactamines est faible', correct: true, correction: 'Oui. La cible modifiée fixe mal ces antibiotiques.' },
      { text: 'mecA code une β-lactamase qui hydrolyse directement toutes les β-lactamines', correct: false, correction: 'Non. mecA code une protéine de liaison aux pénicillines et non une enzyme d\'hydrolyse.' },
      { text: 'mecA entraîne nécessairement une résistance aux glycopeptides', correct: false, correction: 'Non. La résistance à la méticilline ne prédit pas automatiquement celle aux glycopeptides.' },
      { text: 'La synthèse du peptidoglycane peut se poursuivre malgré l\'exposition aux β-lactamines usuelles', correct: true, correction: 'Oui. La PLP2a assure la fonction de transpeptidation alors que les PLP habituelles sont inhibées.' },
      { text: 'L\'acide clavulanique ne corrige pas à lui seul la faible affinité de cette PLP', correct: true, correction: 'Oui. Un inhibiteur de β-lactamase n\'annule pas une modification de la cible.' },
    ],
    explanation: 'La résistance à la méticilline repose ici sur une nouvelle cible de faible affinité, et non sur l\'hydrolyse des β-lactamines par une pénicillinase. (Cours, p. 16)'
  },
  {
    id: 67,
    type: 'QCM',
    question: 'Quel support génétique est fréquemment associé aux BLSE décrites dans ce cours ?',
    options: [
      { text: 'Des gènes portés par des plasmides transmissibles entre bactéries', correct: true, correction: 'Oui. La mobilité des plasmides facilite la diffusion de la résistance.' },
      { text: 'Le gène mecA porté par la cassette chromosomique SCCmec', correct: false, correction: 'Non. mecA code une PLP de faible affinité chez le staphylocoque, et non une BLSE d\'entérobactérie.' },
      { text: 'Exclusivement une mutation chromosomique des PLP, sans production enzymatique', correct: false, correction: 'Non. Une PLP modifiée change la cible des β-lactamines ; une BLSE est une enzyme codée par un gène bactérien.' },
      { text: 'Toujours une dérépression de la céphalosporinase chromosomique AmpC', correct: false, correction: 'Non. Une AmpC déréprimée et une BLSE sont deux mécanismes distincts ; les BLSE sont souvent codées par des plasmides.' },
      { text: 'Uniquement un gène chromosomique transmis verticalement à la descendance', correct: false, correction: 'Non. Le cours insiste sur la possibilité d\'un support plasmidique et d\'un transfert horizontal.' },
    ],
    explanation: 'Dans le schéma du cours, les gènes de BLSE sont souvent plasmidiques, ce qui contribue à leur transmission horizontale. (Cours, p. 16)'
  },
  {
    id: 68,
    type: 'QRM',
    question: 'Quelles propriétés sont compatibles avec une BLSE classique chez une entérobactérie ?',
    options: [
      { text: 'Son activité peut être mise en évidence par une synergie avec l\'acide clavulanique', correct: true, correction: 'Oui. La restauration locale de l\'activité d\'une C3G peut orienter vers une BLSE classique.' },
      { text: 'Toute BLSE inactive forcément chaque β-lactamine, y compris les carbapénèmes', correct: false, correction: 'Non. Cette généralisation du support serait fausse ; le spectre dépend de l\'enzyme et les carbapénèmes sont habituellement épargnés par une BLSE seule.' },
      { text: 'La BLSE seule n\'hydrolyse habituellement pas les carbapénèmes', correct: true, correction: 'Oui. La résistance aux carbapénèmes demande un autre mécanisme ou une association de mécanismes.' },
      { text: 'Elle peut hydrolyser des pénicillines et des céphalosporines de 3e génération', correct: true, correction: 'Oui. L\'extension du spectre enzymatique inclut ces familles.' },
      { text: 'Une co-résistance à d\'autres familles peut être présente', correct: true, correction: 'Oui. Des déterminants différents peuvent coexister sur une même souche ou un même plasmide.' },
    ],
    explanation: 'Une BLSE élargit l\'hydrolyse aux C3G, mais ne doit pas être confondue avec une carbapénémase. (Cours, p. 14 et 17)'
  },
  {
    id: 69,
    type: 'QCM',
    question: 'Sur un antibiogramme, quelle image évoque une BLSE classique en présence d\'une C3G et d\'acide clavulanique ?',
    options: [
      { text: 'Un aplatissement de la zone de la C3G au voisinage d\'un disque de céfoxitine', correct: false, correction: 'Non. Une image d\'antagonisme ou d\'induction évoque plutôt une céphalosporinase inductible qu\'une synergie avec le clavulanate.' },
      { text: 'Un élargissement de la zone d\'inhibition de la C3G vers le disque contenant du clavulanate', correct: true, correction: 'Oui. Cette synergie suggère que l\'inhibition enzymatique restaure localement l\'activité de la C3G.' },
      { text: 'Une diminution de la zone de la C3G du côté du clavulanate', correct: false, correction: 'Non. Une synergie se manifeste au contraire par l\'agrandissement de cette zone.' },
      { text: 'Une zone de C3G inchangée autour du disque de clavulanate malgré une céfoxitine résistante', correct: false, correction: 'Non. L\'absence de synergie et la résistance à une céphamycine orientent vers d\'autres mécanismes, notamment AmpC.' },
      { text: 'Une résistance isolée à l\'amoxicilline avec conservation d\'une large zone autour de la C3G', correct: false, correction: 'Non. Ce profil peut relever d\'une pénicillinase étroite et ne montre pas la synergie caractéristique d\'une BLSE.' },
    ],
    explanation: 'La figure du support montre une synergie entre acide clavulanique et céphalosporine de 3e génération, en faveur d\'une BLSE. (Cours, p. 17)'
  },
  {
    id: 70,
    type: 'QRM',
    question: 'À quoi sert la mesure d\'une CMI par bandelette en gradient pour les β-lactamines chez le pneumocoque ?',
    options: [
      { text: 'À distinguer des niveaux de sensibilité pouvant différer entre pénicilline G, amoxicilline et céfotaxime', correct: true, correction: 'Oui. Le cours cite ces trois molécules plutôt que d\'inférer l\'une à partir de l\'autre.' },
      { text: 'À identifier directement le gène de résistance par séquençage', correct: false, correction: 'Non. Le test en gradient mesure la croissance bactérienne, pas la séquence d\'ADN.' },
      { text: 'À garantir l\'efficacité clinique de toute posologie dès qu\'un halo est visible', correct: false, correction: 'Non. La catégorie clinique dépend de l\'exposition, du site et des seuils interprétatifs.' },
      { text: 'À interpréter le résultat avec les concentrations critiques appropriées', correct: true, correction: 'Oui. Une CMI brute doit être comparée aux seuils pertinents pour l\'espèce et l\'indication.' },
      { text: 'À obtenir une valeur de concentration minimale inhibitrice pour chaque antibiotique testé', correct: true, correction: 'Oui. La bandelette permet une lecture quantitative de la CMI.' },
    ],
    explanation: 'Le support propose des CMI individuelles pour plusieurs β-lactamines face au pneumocoque ; l\'interprétation clinique s\'appuie ensuite sur les seuils adaptés. (Cours, p. 15)'
  },
  {
    id: 71,
    type: 'QCM',
    question: 'Une souche est classée « I » pour un antibiotique selon EUCAST. Quelle décision respecte ce résultat si l\'on envisage de traiter une infection documentée ?',
    options: [
      { text: 'Ignorer la localisation de l\'infection dès que l\'antibiogramme porte la lettre I', correct: false, correction: 'Non. La concentration atteinte au site de l\'infection participe à l\'interprétation de I.' },
      { text: 'Exclure cet antibiotique dans tous les cas car I signifie résistant', correct: false, correction: 'Non. EUCAST classe I parmi les deux catégories sensibles ; R désigne la résistance.' },
      { text: 'Utiliser automatiquement une dose plus faible que la dose standard', correct: false, correction: 'Non. Une exposition augmentée peut au contraire nécessiter une adaptation du schéma thérapeutique.' },
      { text: 'Vérifier que le schéma d\'administration et le site infectieux permettent une exposition suffisante', correct: true, correction: 'Oui. La catégorie I correspond à une sensibilité sous exposition augmentée, qui dépend de la dose, de la voie et de la concentration au site.' },
      { text: 'Déduire la présence certaine d\'une BLSE à partir de la seule lettre I', correct: false, correction: 'Non. La catégorie I décrit une sensibilité clinique, pas un mécanisme précis.' },
    ],
    explanation: 'Le cours relie CMI et concentrations accessibles ; EUCAST définit I comme « sensible, exposition augmentée », à appliquer au site et au schéma envisagés. (Cours, p. 3 ; EUCAST, définitions S/I/R)'
  },
  {
    id: 72,
    type: 'QRM',
    question: 'Pour interpréter une CMI et un antibiogramme, quels éléments sont pertinents ?',
    options: [
      { text: 'La seule concentration sanguine maximale, sans autre donnée', correct: false, correction: 'Non. Ce raccourci du support ne suffit pas pour toutes les molécules et tous les sites d\'infection.' },
      { text: 'L\'espèce bactérienne et l\'antibiotique précis', correct: true, correction: 'Oui. Les concentrations critiques sont établies pour des couples bactérie–molécule.' },
      { text: 'Le diamètre du halo d\'une autre espèce bactérienne pour le même antibiotique', correct: false, correction: 'Non. Les seuils et les profils attendus dépendent de l\'espèce ; un résultat d\'une autre souche ne remplace pas celui de l\'isolat étudié.' },
      { text: 'Les seuils S/I/R actualisés du référentiel utilisé', correct: true, correction: 'Oui. Les catégories sont définies par des concentrations critiques mises à jour.' },
      { text: 'Le schéma d\'exposition et le site de l\'infection', correct: true, correction: 'Oui. L\'exposition au site ciblé participe à l\'interprétation clinique.' },
    ],
    explanation: 'La CMI est une mesure in vitro ; sa traduction clinique dépend des seuils, de l\'exposition et du site, au-delà de la seule concentration sanguine maximale. (Cours, p. 3 et 15 ; EUCAST)'
  },
  {
    id: 73,
    type: 'QCM',
    question: 'Laquelle des situations suivantes correspond à une catégorie de BHRe suivie en France ?',
    options: [
      { text: 'Tout pneumocoque sensible à la pénicilline', correct: false, correction: 'Non. Il ne correspond pas à la catégorie décrite.' },
      { text: 'Tout S. aureus sensible à la méticilline', correct: false, correction: 'Non. Ce n\'est ni un SARM ni une BHRe.' },
      { text: 'Une entérobactérie productrice d\'une carbapénémase', correct: true, correction: 'Oui. Les EPC font partie des bactéries hautement résistantes émergentes ciblées.' },
      { text: 'Tout E. coli produisant une pénicillinase simple', correct: false, correction: 'Non. Ce profil n\'est pas, à lui seul, une EPC ni une catégorie BHRe.' },
      { text: 'Toute souche d\'Enterobacter avec une céphalosporinase basale', correct: false, correction: 'Non. Ce phénotype intrinsèque n\'est pas équivalent à une EPC.' },
    ],
    explanation: 'Le cours cite les entérobactéries productrices de carbapénémase parmi les bactéries hautement résistantes ; la surveillance française les classe comme BHRe. (Cours, p. 17)'
  },
  {
    id: 74,
    type: 'QRM',
    question: 'Quelles catégories figurent parmi les BHRe surveillées spécifiquement en France ?',
    options: [
      { text: 'Toutes les entérobactéries produisant une BLSE', correct: false, correction: 'Non. Une BLSE ne suffit pas à classer la souche comme BHRe.' },
      { text: 'Tout Pseudomonas aeruginosa multirésistant', correct: false, correction: 'Non. Il peut être très difficile à traiter, mais n\'est pas automatiquement une BHRe dans cette définition française.' },
      { text: 'Enterococcus faecium résistant aux glycopeptides', correct: true, correction: 'Oui. Cette espèce résistante à la vancomycine/aux glycopeptides constitue l\'autre catégorie principale.' },
      { text: 'Les entérobactéries productrices de carbapénémases (EPC)', correct: true, correction: 'Oui. Elles constituent l\'une des deux grandes catégories BHRe du référentiel français.' },
      { text: 'Tous les SARM', correct: false, correction: 'Non. Le SARM est une BMR importante, sans appartenir à ces deux catégories BHRe.' },
    ],
    explanation: 'En France, la définition opérationnelle des BHRe cible les EPC et E. faecium résistant aux glycopeptides. (Cours, p. 17 ; Santé publique France)'
  },
  {
    id: 75,
    type: 'QCM',
    question: 'Un prélèvement de dépistage retrouve une EPC chez une personne sans signe d\'infection. Quelle interprétation est la plus juste ?',
    options: [
      { text: 'La culture positive prouve automatiquement une septicémie', correct: false, correction: 'Non. Un prélèvement de portage ne démontre pas une infection invasive.' },
      { text: 'La souche ne peut être transmise tant qu\'il n\'y a pas de fièvre', correct: false, correction: 'Non. Un porteur colonisé peut contribuer à la diffusion.' },
      { text: 'L\'absence de symptôme annule tout intérêt des mesures de prévention', correct: false, correction: 'Non. Le dépistage vise aussi à prévenir la transmission.' },
      { text: 'Une antibiothérapie est systématiquement nécessaire pour éradiquer la bactérie', correct: false, correction: 'Non. Le portage asymptomatique n\'entraîne pas automatiquement un traitement antibiotique.' },
      { text: 'Un portage est possible sans infection clinique ; sa découverte impose une évaluation et des mesures adaptées', correct: true, correction: 'Oui. Le dépistage peut identifier une colonisation, distincte d\'une infection symptomatique.' },
    ],
    explanation: 'Le support mentionne le portage ; la distinction colonisation–infection guide le traitement et les mesures de prévention des BHRe. (Cours, p. 16 ; HCSP, recommandations BHRe)'
  },
  {
    id: 76,
    type: 'QRM',
    question: 'Après l\'identification d\'une BHRe chez une personne porteuse ou infectée, quelles démarches générales sont pertinentes ?',
    options: [
      { text: 'Considérer toute BHRe comme automatiquement sensible à l\'amoxicilline', correct: false, correction: 'Non. La résistance élevée interdit cette déduction ; il faut un résultat de sensibilité.' },
      { text: 'Informer l\'équipe de prévention des infections selon le circuit local', correct: true, correction: 'Oui. La maîtrise de la diffusion nécessite une coordination adaptée.' },
      { text: 'Tenir compte du résultat microbiologique si une infection doit être traitée', correct: true, correction: 'Oui. Les possibilités thérapeutiques doivent être établies pour la souche et le site concernés.' },
      { text: 'Ignorer le portage si l\'antibiogramme ne montre qu\'une seule résistance', correct: false, correction: 'Non. Une BHRe confirmée demande une appréciation de prévention indépendamment d\'un raisonnement aussi sommaire.' },
      { text: 'Distinguer portage asymptomatique et infection à traiter', correct: true, correction: 'Oui. Un prélèvement positif ne signifie pas à lui seul maladie nécessitant un antibiotique.' },
    ],
    explanation: 'La distinction BMR/BHRe a aussi une portée de prévention de la transmission, en plus du choix d\'un traitement éventuel. (Cours, p. 15–17 ; HCSP)'
  },
  {
    id: 77,
    type: 'QCM',
    question: 'Une entérobactérie présente une sensibilité diminuée à un carbapénème. Quelle conclusion doit être évitée sans test complémentaire ?',
    options: [
      { text: 'Prendre en compte le résultat des autres β-lactamines testées', correct: false, correction: 'Non. Le profil global aide à orienter l\'analyse.' },
      { text: 'Comparer le résultat aux seuils interprétatifs appropriés', correct: false, correction: 'Non. Cette étape est nécessaire pour qualifier la sensibilité.' },
      { text: 'Considérer la possibilité de plusieurs mécanismes associés', correct: false, correction: 'Non. Une perte de porines avec d\'autres β-lactamases peut contribuer à la résistance.' },
      { text: 'Demander une analyse du mécanisme si le résultat le justifie', correct: false, correction: 'Non. C\'est au contraire une démarche pertinente.' },
      { text: 'Affirmer qu\'elle produit nécessairement une carbapénémase', correct: true, correction: 'Oui. D\'autres combinaisons de mécanismes peuvent réduire la sensibilité ; la production doit être confirmée.' },
    ],
    explanation: 'Une non-sensibilité à un carbapénème n\'identifie pas automatiquement une carbapénémase ; le phénotype et des tests dédiés précisent le mécanisme. (Cours, p. 14 et 17)'
  },
  {
    id: 78,
    type: 'QRM',
    question: 'Quelles distinctions entre BLSE et carbapénémase sont exactes ?',
    options: [
      { text: 'Une BLSE et une carbapénémase sont deux types différents de β-lactamases', correct: true, correction: 'Oui. Elles se distinguent notamment par leur spectre d\'hydrolyse.' },
      { text: 'Une BLSE isolée n\'explique pas à elle seule une hydrolyse des carbapénèmes', correct: true, correction: 'Oui. D\'autres mécanismes doivent être recherchés si la sensibilité aux carbapénèmes baisse.' },
      { text: 'Une synergie C3G–clavulanate prouve à elle seule une carbapénémase', correct: false, correction: 'Non. Elle oriente plutôt vers une BLSE classique, sans démontrer une carbapénémase.' },
      { text: 'Des gènes de résistance plasmidiques peuvent se diffuser horizontalement', correct: true, correction: 'Oui. Le support souligne cette voie de transmission pour plusieurs enzymes.' },
      { text: 'La détection d\'une carbapénémase peut modifier la catégorie de surveillance de l\'entérobactérie', correct: true, correction: 'Oui. Une EPC relève de la catégorie BHRe française.' },
    ],
    explanation: 'BLSE et carbapénémases ne sont pas interchangeables ; la seconde catégorie concerne les carbapénèmes et la surveillance BHRe. (Cours, p. 14 et 16–17)'
  },
  {
    id: 79,
    type: 'QCM',
    question: 'Pourquoi les pourcentages locaux de SARM et de BLSE cités dans le support ne doivent-ils pas être utilisés tels quels comme données actuelles pour tout établissement ?',
    options: [
      { text: 'Parce qu\'un taux régional suffit à prévoir la sensibilité de chaque nouvel isolat individuel', correct: false, correction: 'Non. Une proportion de surveillance ne remplace jamais l\'antibiogramme d\'une souche clinique.' },
      { text: 'Parce qu\'une proportion mesurée à l\'hôpital décrit nécessairement les mêmes patients qu\'une proportion communautaire', correct: false, correction: 'Non. Les populations et les contextes de prélèvement peuvent différer fortement.' },
      { text: 'Parce que les proportions locales restent fixes d\'une année à l\'autre dès que la méthode de laboratoire est stable', correct: false, correction: 'Non. L\'épidémiologie change au fil du temps, même avec une méthode identique.' },
      { text: 'La fréquence des résistances varie selon le lieu, la période et la population surveillée', correct: true, correction: 'Oui. Une donnée locale datée doit être remplacée par une surveillance adaptée au contexte actuel.' },
      { text: 'Parce qu\'une comparaison de deux taux peut ignorer leurs dénominateurs et leurs critères d\'inclusion', correct: false, correction: 'Non. Une comparaison valide demande de savoir quelles souches et quelles populations ont été comptées.' },
    ],
    explanation: 'Les taux donnés dans le cours sont des exemples régionaux et datés, non des constantes ; les données de surveillance locales actualisées sont nécessaires. (Cours, p. 11 et 15)'
  },
  {
    id: 80,
    type: 'QRM',
    question: 'Le cours qualifie de BHR des entérobactéries et des Pseudomonas producteurs de carbapénémase. Quelles distinctions respectent la définition française des BHRe ?',
    options: [
      { text: 'Une entérobactérie productrice de carbapénémase appartient à la catégorie BHRe', correct: true, correction: 'Oui. Les EPC font partie des deux groupes définis comme BHRe en France.' },
      { text: 'Une sensibilité diminuée à un carbapénème chez une entérobactérie ne prouve pas, à elle seule, la production d\'une carbapénémase', correct: true, correction: 'Oui. Une caractérisation microbiologique est nécessaire car d\'autres mécanismes peuvent réduire la sensibilité.' },
      { text: 'Un Pseudomonas aeruginosa producteur de carbapénémase peut être très résistant sans être automatiquement classé BHRe au sens de cette définition', correct: true, correction: 'Oui. La catégorie BHRe française ne s\'étend pas à tout bacille producteur de carbapénémase.' },
      { text: 'Toute bactérie productrice de carbapénémase, quelle que soit son espèce, devient automatiquement une BHRe en France', correct: false, correction: 'Non. La définition de surveillance française vise précisément les EPC et les E. faecium résistants aux glycopeptides.' },
      { text: 'Enterococcus faecium résistant aux glycopeptides appartient aussi à la catégorie BHRe', correct: true, correction: 'Oui. L\'ERG constitue l\'autre groupe ciblé par la définition française.' },
    ],
    explanation: 'Le terme général BHR employé dans le cours ne recouvre pas exactement la catégorie opérationnelle française BHRe ; cette dernière cible les EPC et les E. faecium résistants aux glycopeptides. (Cours, p. 15–17 ; Santé publique France)'
  },
]
