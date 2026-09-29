export const meta = {
  title: 'Maladies par expansion',
}

export default [
  {
    id: 1,
    type: 'QCM',
    question: 'Quelle anomalie moléculaire est responsable de la dystrophie myotonique de type 1, ou maladie de Steinert ?',
    options: [
      { text: 'Une expansion de CGG dans la région 5′ non traduite de DMPK', correct: false, correction: 'Non. Pour la DM1, retiens CTG et région 3′ non traduite, pas CGG et région 5′.' },
      { text: 'Une expansion de CAG dans la séquence codante de DMPK', correct: false, correction: 'Non chef. Tu changes à la fois le motif et sa localisation : la DM1 repose sur des CTG dans une région non traduite.' },
      { text: 'Une mutation ponctuelle transformant systématiquement un codon de DMPK en codon stop', correct: false, correction: 'Non chef. Le mécanisme présenté est dynamique : c’est le nombre de triplets répétés qui augmente.' },
      { text: 'Une expansion de CTG dans la région 3′ non traduite de DMPK', correct: true, correction: 'Oui boss 🧠 Le triplet CTG est répété dans la région 3′ UTR, qui ne code pas la séquence de la protéine.' },
      { text: 'Une délétion de la région codante de DMPK supprimant entièrement le gène', correct: false, correction: 'Faux. L’anomalie caractéristique étudiée est une expansion de répétitions, pas une suppression du gène entier.' },
    ],
    explanation: 'La DM1 est liée à une expansion du triplet CTG dans la région 3′ non traduite du gène DMPK, situé sur le chromosome 19. La localisation non codante est essentielle pour comprendre le mécanisme de toxicité de l’ARN. (Cours, p. 1)'
  },
  {
    id: 2,
    type: 'QRM',
    question: 'Quelles étapes participent au mécanisme de toxicité de l’ARN dans la DM1 ?',
    options: [
      { text: 'Les ARN à répétitions expansées peuvent séquestrer des facteurs d’épissage, notamment MBNL', correct: true, correction: 'Oui boss. Ces facteurs deviennent moins disponibles pour leurs cibles habituelles.' },
      { text: 'La maladie s’explique exclusivement par une absence totale de protéine DMPK', correct: false, correction: 'Non chef. Une perte de fonction de DMPK seule ne résume pas le mécanisme : le gain de fonction toxique de l’ARN est central.' },
      { text: 'Les ARN issus de l’allèle expansé peuvent s’accumuler dans le noyau', correct: true, correction: 'Exact 🧠 Le cours décrit une accumulation nucléaire des transcrits anormaux.' },
      { text: 'L’épissage alternatif de plusieurs autres transcrits est perturbé', correct: true, correction: 'Exact. Un seul locus expansé peut ainsi avoir des conséquences sur plusieurs fonctions cellulaires.' },
      { text: 'Les CTG de la région 3′ UTR deviennent directement une longue séquence de glutamines dans la protéine DMPK', correct: false, correction: 'Faux. Cette région n’appartient pas à la séquence codante de DMPK ; ce n’est pas le mécanisme de polyglutamines décrit ici.' },
    ],
    explanation: 'Le gain de fonction toxique des ARN expansés entraîne leur accumulation nucléaire et la perturbation de facteurs d’épissage, notamment MBNL. L’épissage de plusieurs transcrits est alors altéré, ce qui contribue à l’atteinte multisystémique. (Cours, p. 1–2 ; précision du facteur d’épissage)'
  },
  {
    id: 3,
    type: 'QCM',
    question: 'Dans la DM1, que désigne l’effet en trans des ARN toxiques sur l’épissage ?',
    options: [
      { text: 'Une perturbation d’autres transcrits par l’altération de facteurs d’épissage disponibles dans la cellule', correct: true, correction: 'Oui boss 🎯 L’ARN expansé perturbe des facteurs qui interviennent aussi sur des ARN produits par d’autres gènes.' },
      { text: 'Une augmentation directe du nombre de CTG dans tous les autres gènes de la cellule', correct: false, correction: 'Non chef. Les autres transcrits peuvent être mal épissés sans que leurs gènes acquièrent l’expansion CTG de DMPK.' },
      { text: 'Une augmentation de l’activité enzymatique de DMPK qui suffit à expliquer tous les défauts d’épissage', correct: false, correction: 'Non. L’effet en trans présenté repose sur l’ARN toxique et les facteurs d’épissage perturbés, pas sur une hyperactivité enzymatique de DMPK expliquant seule le tableau.' },
      { text: 'La transmission obligatoire de l’expansion du père à ses fils', correct: false, correction: 'Non chef. Trans décrit ici un effet moléculaire sur d’autres cibles, pas une direction de transmission familiale.' },
      { text: 'Une modification limitée à la séquence du seul allèle DMPK qui porte l’expansion', correct: false, correction: 'Faux. Un effet limité au locus porteur relève de la notion de cis, pas de l’action sur plusieurs autres transcrits.' },
    ],
    explanation: 'L’action en trans correspond aux conséquences de l’ARN expansé et des facteurs d’épissage perturbés sur d’autres transcrits. Le cours mentionne aussi des effets possibles en cis, au niveau du locus porteur ; ces notions ne décrivent pas le mode de transmission familiale. (Cours, p. 1–2)'
  },
  {
    id: 4,
    type: 'QRM',
    question: 'Quels transcrits sont cités dans le cours comme exemples de cibles dont l’épissage peut être altéré dans la DM1 ?',
    options: [
      { text: 'Uniquement l’ARN DMPK, sans retentissement sur les ARN d’autres gènes', correct: false, correction: 'Non chef. Le cours donne précisément plusieurs cibles autres que DMPK.' },
      { text: 'Le transcrit codant un canal chlore musculaire', correct: true, correction: 'Exact. Cet exemple illustre un retentissement sur la fonction musculaire.' },
      { text: 'Les trois protéines citées doivent nécessairement porter elles-mêmes une expansion CTG dans leur séquence codante', correct: false, correction: 'Faux. Le défaut d’épissage peut agir en trans ; il n’exige pas une expansion dans chacun des gènes cibles.' },
      { text: 'Le transcrit codant la troponine T cardiaque', correct: true, correction: 'Oui. La troponine T cardiaque est également citée parmi les cibles.' },
      { text: 'Le transcrit codant le récepteur de l’insuline', correct: true, correction: 'Oui boss 🧠 Le récepteur de l’insuline fait partie des exemples du support.' },
    ],
    explanation: 'Le cours cite la troponine T cardiaque, le récepteur de l’insuline et le canal chlore parmi les transcrits concernés. Ces exemples relient le mécanisme d’épissage aux manifestations dans différents organes. (Cours, p. 2)'
  },
  {
    id: 5,
    type: 'QCM',
    question: 'Un allèle DMPK comporte 20 répétitions CTG. À quelle catégorie appartient-il ?',
    options: [
      { text: 'À une prémutation, ou allèle normal mutable', correct: false, correction: 'Faux. Cette catégorie correspond à une plage plus élevée, de 35 à 49 répétitions.' },
      { text: 'À un allèle dont la présence seule permet de diagnostiquer une forme paucisymptomatique', correct: false, correction: 'Non chef. Un allèle normal à 20 CTG ne constitue pas l’expansion pathogène nécessaire au diagnostic moléculaire de DM1.' },
      { text: 'À un allèle normal', correct: true, correction: 'Oui boss 🎯 La plage normale de référence est de 5 à 34 répétitions CTG.' },
      { text: 'À une expansion définissant la forme congénitale', correct: false, correction: 'Non. Les formes congénitales sont associées à des expansions bien plus importantes ; 20 CTG restent normaux.' },
      { text: 'À une expansion pathogène de la DM1', correct: false, correction: 'Non chef. Vingt répétitions sont dans la plage normale, loin du seuil pathogène.' },
    ],
    explanation: 'Un allèle à 20 répétitions CTG appartient à la plage normale de 5 à 34. La borne supérieure normale du support, donnée à 35, doit être rectifiée : les allèles de 35 à 49 répétitions sont normaux mutables. (Cours, p. 2 ; seuil normal rectifié)'
  },
  {
    id: 6,
    type: 'QRM',
    question: 'Concernant les catégories d’allèles DMPK, quelles propositions sont exactes ? Les exemples sont volontairement éloignés des bornes.',
    options: [
      { text: 'Un allèle à 42 CTG appartient à la catégorie normale mutable, aussi appelée prémutation', correct: true, correction: 'Oui boss. Quarante-deux est dans la plage 35–49, associée à un risque d’expansion lors de la transmission.' },
      { text: 'Un allèle à 42 CTG suffit à affirmer une DM1 congénitale', correct: false, correction: 'Non chef. Il s’agit d’un allèle normal mutable, pas d’une expansion définissant une forme congénitale.' },
      { text: 'Un allèle à 80 CTG est normal tant qu’il reste inférieur à 3 000 répétitions', correct: false, correction: 'Faux. Trois mille n’est pas le seuil d’entrée dans la maladie, ni un plafond universel des expansions.' },
      { text: 'Un allèle à 20 CTG est normal', correct: true, correction: 'Exact 🧠 Il est compris dans la plage normale de 5 à 34 répétitions.' },
      { text: 'Un allèle à 80 CTG appartient à la catégorie des expansions pathogènes', correct: true, correction: 'Exact. Il dépasse le seuil de 50 répétitions ; cela ne fixe pas à lui seul l’âge de début ou la sévérité.' },
    ],
    explanation: 'Les catégories de référence sont : normal 5–34 CTG, normal mutable 35–49, expansion pathogène à partir de 50. La classification moléculaire ne doit pas être confondue avec une prédiction individuelle du phénotype. (Cours, p. 2 ; seuils rectifiés)'
  },
  {
    id: 7,
    type: 'QCM',
    question: 'Une personne sans manifestation de DM1 porte un allèle DMPK à 42 CTG. Quelle interprétation est la plus correcte ?',
    options: [
      { text: 'Il faut considérer l’allèle comme pathogène uniquement parce que le parent est adulte', correct: false, correction: 'Non. La catégorie dépend du nombre de répétitions ; l’âge adulte ne transforme pas 42 CTG en expansion pathogène.' },
      { text: 'L’absence de symptômes garantit une stabilité définitive de l’allèle dans la descendance', correct: false, correction: 'Non chef. Une absence de manifestations chez le parent n’empêche pas l’instabilité d’un allèle normal mutable.' },
      { text: 'L’allèle ne peut être transmis qu’à une fille', correct: false, correction: 'Non chef. DMPK est autosomique ; sa transmission n’est pas limitée aux filles.' },
      { text: 'L’allèle est normal mutable : il n’explique pas une DM1 chez ce porteur, mais peut augmenter lors de la transmission', correct: true, correction: 'Oui boss 🧠 Le point à retenir est la différence entre le phénotype du porteur et le risque d’une expansion plus grande chez un enfant.' },
      { text: 'Tous ses enfants auront nécessairement une forme congénitale', correct: false, correction: 'Faux. Transmission de l’allèle et augmentation de sa taille sont des événements distincts, sans cette certitude clinique.' },
    ],
    explanation: 'Les allèles normaux mutables de 35 à 49 CTG ne sont pas associés aux manifestations de DM1 chez leur porteur, mais peuvent donner lieu à une expansion plus grande lors de la transmission. La notion de risque ne signifie pas une évolution obligatoire à chaque génération. (Cours, p. 2 et 14 ; plage mutable rectifiée)'
  },
  {
    id: 8,
    type: 'QRM',
    question: 'Quelles affirmations décrivent correctement l’instabilité et l’anticipation dans la DM1 ?',
    options: [
      { text: 'Chaque transmission augmente obligatoirement le nombre de CTG et aggrave toujours le phénotype', correct: false, correction: 'Non chef. Il existe une variabilité des transmissions et de l’expression clinique ; la tendance n’est pas une obligation.' },
      { text: 'Une expansion peut augmenter lors de la transmission à la génération suivante', correct: true, correction: 'Oui boss 🧠 L’instabilité intergénérationnelle permet la transmission d’un allèle plus expansé.' },
      { text: 'La taille initiale de l’expansion et le sexe du parent transmetteur peuvent intervenir', correct: true, correction: 'Oui. Ces deux facteurs sont cités dans le cours pour l’instabilité méiotique.' },
      { text: 'Deux générations intermédiaires constituent une condition obligatoire pour toute forme congénitale', correct: false, correction: 'Faux. La remarque du cours sur les générations décrit une tendance familiale, pas une règle imposant un nombre minimal de générations.' },
      { text: 'Une maladie plus précoce ou plus sévère dans une génération suivante peut correspondre à une anticipation', correct: true, correction: 'Exact. L’anticipation décrit cette tendance clinique, pas une date de début calculable à l’avance.' },
    ],
    explanation: 'L’anticipation associe une instabilité des répétitions à une tendance vers un début plus précoce ou une expression plus sévère. La taille initiale et le parent transmetteur modulent cette instabilité. Aucune aggravation systématique ni nombre obligatoire de générations ne peut en être déduit. (Cours, p. 2)'
  },
  {
    id: 9,
    type: 'QCM',
    question: 'Deux personnes ont chacune une expansion DMPK mesurée autour de 120 CTG. Que permet d’affirmer ce résultat à lui seul ?',
    options: [
      { text: 'Elles auront exactement le même âge de début', correct: false, correction: 'Non chef. Le nombre de répétitions ne prédit pas précisément l’âge d’apparition chez une personne.' },
      { text: 'Les allèles sont dans la catégorie pathogène, mais leur expression clinique individuelle ne se déduit pas précisément de ce seul compte', correct: true, correction: 'Oui boss 🎯 La taille apporte une information moléculaire ; elle ne suffit pas à prédire exactement la forme, l’âge de début ou la sévérité.' },
      { text: 'Elles présenteront nécessairement toutes deux une forme congénitale', correct: false, correction: 'Faux. Ce résultat ne correspond pas à une signature suffisante de forme congénitale.' },
      { text: 'Une forme classique peut être exclue puisque 120 CTG est inférieur à 150', correct: false, correction: 'Non chef. Le support donne des plages qui se chevauchent : environ 50–150 pour la forme discrète et 100–1 000 pour la classique.' },
      { text: 'Elles auront obligatoirement une forme paucisymptomatique et aucune complication cardiaque', correct: false, correction: 'Non. Les plages des formes cliniques se chevauchent et le compte de CTG ne garantit pas une absence de complication.' },
    ],
    explanation: 'Il existe une corrélation statistique entre taille de l’expansion et expression clinique, mais les plages se chevauchent. Le cours précise que l’étude moléculaire seule ne permet pas de prédire exactement le début ni la sévérité de la maladie. (Cours, p. 2–4)'
  },
  {
    id: 10,
    type: 'QRM',
    question: 'Un parent est hétérozygote pour une expansion pathogène de DMPK ; l’autre parent possède deux allèles normaux. On suppose une ségrégation mendélienne, aucune néomutation et des grossesses indépendantes. Quelles règles de transmission de l’allèle expansé sont exactes ?',
    options: [
      { text: 'Si l’enfant est un garçon, le risque de recevoir cet allèle reste de 50 %', correct: true, correction: 'Exact. Le même raisonnement s’applique aux garçons.' },
      { text: 'Le risque de recevoir l’allèle expansé est de 50 % à chaque grossesse', correct: true, correction: 'Exact 🧠 Le parent hétérozygote transmet l’un de ses deux allèles avec une probabilité de 1/2.' },
      { text: 'Si l’enfant est une fille, le risque de recevoir cet allèle reste de 50 %', correct: true, correction: 'Oui boss. Le gène est autosomique ; être une fille ne modifie pas cette probabilité de transmission.' },
      { text: 'Un père hétérozygote peut transmettre l’expansion à un fils', correct: true, correction: 'Oui. DMPK est sur un autosome : il n’existe pas d’interdiction de transmission père-fils.' },
      { text: 'La probabilité devient nulle après la naissance d’un premier enfant ayant reçu l’allèle', correct: false, correction: 'Non chef. Les grossesses sont indépendantes dans le modèle posé ; il n’y a pas de quota d’enfants porteurs.' },
    ],
    explanation: 'La DM1 suit une transmission autosomique dominante. Avec un parent hétérozygote et l’autre non porteur, chaque enfant a un risque de 1/2 de recevoir l’allèle expansé, quel que soit son sexe. Cette probabilité concerne la transmission de l’allèle, sans fixer sa taille après transmission ni le phénotype futur. (Cours, p. 1–2 ; application des règles mendéliennes)'
  },
  {
    id: 11,
    type: 'QCM',
    question: 'Un père hétérozygote pour une expansion pathogène de DMPK et une mère non porteuse attendent un garçon. Sans néomutation, avec ségrégation mendélienne, quel est le risque que ce garçon reçoive l’allèle expansé paternel ?',
    options: [
      { text: '25 %, car il faut encore multiplier par la probabilité d’être un garçon', correct: false, correction: 'Faux. Le sexe est déjà donné : on calcule le risque conditionnel pour ce garçon, sans ajouter un facteur 1/2.' },
      { text: '75 %, car la maladie est dominante', correct: false, correction: 'Non. Dominante décrit l’expression de l’allèle ; cela ne change pas la ségrégation 1/2–1/2 chez un parent hétérozygote.' },
      { text: '0 %, puisque le père transmet son chromosome Y à un fils', correct: false, correction: 'Non chef. Le père transmet aussi des autosomes ; DMPK est sur le chromosome 19, pas sur l’X.' },
      { text: '50 %', correct: true, correction: 'Oui boss 🎯 Le père transmet son allèle DMPK expansé dans la moitié des cas, indépendamment du sexe de l’enfant.' },
      { text: '100 %, car le parent porteur est son père', correct: false, correction: 'Non chef. Le père possède aussi un allèle normal de DMPK qu’il peut transmettre.' },
    ],
    explanation: 'Conditionnellement au fait que l’enfant est un garçon, le risque de recevoir l’allèle DMPK expansé reste de 50 %. La transmission du chromosome Y n’empêche pas celle d’un allèle autosomique paternel. (Cours, p. 1 ; application des règles mendéliennes)'
  },
  {
    id: 12,
    type: 'QRM',
    question: 'Une mère hétérozygote pour une expansion pathogène de DMPK et un père non porteur ont déjà un enfant porteur. Pour la prochaine grossesse, on suppose sexes équiprobables, ségrégation mendélienne, aucune néomutation et indépendance des grossesses. Quelles propositions sont exactes ?',
    options: [
      { text: 'Le risque d’avoir un garçon recevant l’allèle expansé est de 25 % par grossesse', correct: true, correction: 'Exact. Ici, on combine 1/2 pour un garçon et 1/2 pour la transmission de l’allèle.' },
      { text: 'Le risque de recevoir l’allèle expansé à cette prochaine grossesse reste de 50 %', correct: true, correction: 'Oui boss 🧠 L’issue de la grossesse précédente ne modifie pas ce risque mendélien.' },
      { text: 'Le risque est de 25 % même lorsque l’on sait déjà que l’enfant est un garçon', correct: false, correction: 'Faux. Ce serait confondre le risque combiné par grossesse avec le risque de transmission conditionnel au sexe, qui reste de 50 %.' },
      { text: 'Si l’enfant à venir est une fille, son risque de recevoir l’allèle est de 50 %', correct: true, correction: 'Oui. Le sexe étant conditionné, on ne multiplie plus par sa probabilité de survenue.' },
      { text: 'Tout enfant recevant l’allèle aura nécessairement le même nombre de CTG que sa mère', correct: false, correction: 'Non chef. L’allèle peut être instable : la probabilité de transmission ne garantit pas une taille identique.' },
    ],
    explanation: 'Le risque de transmission reste de 1/2 à chaque grossesse indépendante. Avec des sexes équiprobables, le risque combiné garçon et allèle expansé est de 1/4. L’instabilité du nombre de répétitions et l’expression clinique sont des questions distinctes de ce calcul de transmission. (Cours, p. 1–2 ; application des règles mendéliennes)'
  },
  {
    id: 13,
    type: 'QCM',
    question: 'Dans une famille où une expansion DMPK est identifiée, un fœtus bouge peu et présente un excès de liquide amniotique. À la naissance, le bébé est très hypotonique et en détresse respiratoire. Quelle forme de DM1 ce tableau évoque-t-il en premier ?',
    options: [
      { text: 'La forme congénitale', correct: true, correction: 'Oui boss 🧠 Faibles mouvements fœtaux, excès de liquide amniotique, hypotonie et atteinte respiratoire néonatale sont des signes décrits.' },
      { text: 'La forme paucisymptomatique', correct: false, correction: 'Non chef. Cette forme est discrète et souvent reconnue plus tard, pas devant une atteinte sévère présente dès la naissance.' },
      { text: 'La forme infantile débutant après la période néonatale', correct: false, correction: 'Faux. Le début est ici prénatal puis néonatal, ce qui oriente vers la forme congénitale.' },
      { text: 'La forme classique de l’adolescent ou de l’adulte', correct: false, correction: 'Non. Le cours distingue précisément cette forme des manifestations présentes in utero et à la naissance.' },
      { text: 'Un allèle normal mutable, qui explique à lui seul ce tableau sévère', correct: false, correction: 'Non chef. La plage normale mutable n’est pas celle des expansions pathogènes responsables de ce tableau de DM1.' },
    ],
    explanation: 'La forme congénitale débute in utero ou à la naissance. Le cours décrit une diminution des mouvements fœtaux, un excès de liquide amniotique puis notamment une hypotonie et une détresse respiratoire néonatale. Le tableau clinique importe ; un compte de répétitions seul ne suffit pas à classer toutes les formes. (Cours, p. 3)'
  },
  {
    id: 14,
    type: 'QRM',
    question: 'Quels signes néonatals sont décrits dans la forme congénitale de DM1 ?',
    options: [
      { text: 'Une hypotonie et une pauvreté de la motricité spontanée', correct: true, correction: 'Exact 🧠 Le bébé peut être peu mobile et très hypotonique.' },
      { text: 'Des pieds bots ou équins', correct: true, correction: 'Oui. Ces anomalies font partie des signes cités dans le support.' },
      { text: 'Une détresse respiratoire', correct: true, correction: 'Exact. L’atteinte respiratoire participe au risque vital précoce.' },
      { text: 'Une conservation obligatoire d’une force et d’un tonus musculaires normaux', correct: false, correction: 'Non chef. Cela contredit l’hypotonie et la faiblesse caractéristiques de cette forme.' },
      { text: 'Une diplégie faciale avec des difficultés d’alimentation possibles', correct: true, correction: 'Oui boss. L’atteinte faciale peut contribuer aux difficultés alimentaires décrites.' },
    ],
    explanation: 'Le cours cite la diplégie faciale, l’hypotonie, la pauvreté des mouvements, les difficultés d’alimentation, la détresse respiratoire et les pieds bots ou équins. Leur présence et leur intensité varient ; les pourcentages du support ne définissent pas des obligations individuelles. (Cours, p. 3)'
  },
  {
    id: 15,
    type: 'QCM',
    question: 'Quelle affirmation décrit le mieux l’origine parentale de l’expansion dans la DM1 congénitale ?',
    options: [
      { text: 'La transmission est majoritairement maternelle, mais une transmission paternelle est possible', correct: true, correction: 'Oui boss 🎯 La prédominance maternelle est forte ; elle ne doit pas devenir une interdiction absolue de transmission par le père.' },
      { text: 'Une transmission maternelle implique nécessairement une forme congénitale chez tout enfant', correct: false, correction: 'Faux. La transmission de l’allèle n’impose pas automatiquement cette forme clinique.' },
      { text: 'Une forme congénitale exclut une expansion de DMPK si le père est le parent transmetteur', correct: false, correction: 'Non chef. Les transmissions paternelles sont rares mais possibles, donc ce contexte n’exclut pas la DM1.' },
      { text: 'La transmission est exclusivement paternelle', correct: false, correction: 'Non chef. C’est l’inverse de la prédominance décrite pour cette forme.' },
      { text: 'La prédominance maternelle prouve que DMPK est situé sur le chromosome X', correct: false, correction: 'Non. DMPK est autosomique, sur le chromosome 19 ; l’effet du parent transmetteur ne change pas sa localisation.' },
    ],
    explanation: 'La forme congénitale est majoritairement issue d’une transmission maternelle. Une transmission paternelle est possible ; aucun pourcentage isolé du support ne doit être utilisé comme estimation universelle du risque. (Cours, p. 3 et 14)'
  },
  {
    id: 16,
    type: 'QRM',
    question: 'Concernant le retentissement de la DM1 congénitale, quelles propositions correspondent au cours ?',
    options: [
      { text: 'Un retard moteur et une marche tardive peuvent faire partie de l’évolution', correct: true, correction: 'Oui boss. L’atteinte musculaire peut avoir un retentissement fonctionnel durable.' },
      { text: 'L’atteinte respiratoire peut engager le pronostic vital dans les premières semaines', correct: true, correction: 'Exact 🧠 Le cours place le risque respiratoire au premier plan pendant la période néonatale.' },
      { text: 'Une déficience intellectuelle peut être associée', correct: true, correction: 'Exact. Le pronostic ne concerne pas uniquement les muscles ; le développement intellectuel peut être touché.' },
      { text: 'La forme congénitale est définie par une cataracte isolée apparue chez le sujet âgé', correct: false, correction: 'Faux. Ce tableau discret et tardif évoque plutôt la forme paucisymptomatique présentée dans le cours.' },
      { text: 'La survie néonatale garantit ensuite une absence de retentissement fonctionnel', correct: false, correction: 'Non chef. Le risque vital précoce et les conséquences fonctionnelles ultérieures sont deux dimensions différentes.' },
    ],
    explanation: 'Le cours distingue le pronostic vital respiratoire précoce, puis le retentissement musculaire fonctionnel et le retentissement intellectuel. Un retard moteur, une marche tardive et une déficience intellectuelle peuvent accompagner l’évolution. (Cours, p. 3)'
  },
  {
    id: 17,
    type: 'QCM',
    question: 'Un enfant de 6 ans d’une famille atteinte de DM1 présente un visage allongé peu expressif, une lenteur motrice et des difficultés d’apprentissage. Les signes musculaires deviennent plus visibles ensuite. Quelle forme décrite dans le cours correspond le mieux à ce début ?',
    options: [
      { text: 'La forme paucisymptomatique du sujet âgé', correct: false, correction: 'Faux. Les manifestations scolaires et motrices de cet enfant ne correspondent pas au tableau tardif et discret présenté.' },
      { text: 'La forme congénitale, car toute manifestation dans l’enfance signifie un début dès la naissance', correct: false, correction: 'Non chef. L’âge du diagnostic et l’âge de début ne sont pas interchangeables ; le scénario décrit un début pendant l’enfance.' },
      { text: 'Une absence de DM1, puisque les difficultés scolaires précèdent la myotonie évidente', correct: false, correction: 'Non chef. Le cours précise que les signes musculaires peuvent devenir apparents plus tard dans la forme infantile.' },
      { text: 'La forme classique définie uniquement par le début à l’âge adulte', correct: false, correction: 'Non. Le scénario est celui de la forme infantile ; la forme classique regroupe ici l’adolescent et l’adulte.' },
      { text: 'La forme infantile', correct: true, correction: 'Oui boss 🧠 Le cours situe cette forme entre 1 et 10 ans, avec difficultés d’apprentissage et signes musculaires parfois plus tardifs.' },
    ],
    explanation: 'Dans la classification du cours, la forme infantile débute entre 1 et 10 ans. Elle peut associer hypotonie, retard moteur, lenteur, visage allongé peu expressif et difficultés d’apprentissage, avec des signes musculaires plus tardifs. (Cours, p. 2–3)'
  },
  {
    id: 18,
    type: 'QRM',
    question: 'Quelles propositions concernant la forme infantile de DM1 sont exactes ?',
    options: [
      { text: 'Elle exige une détresse respiratoire présente dès la naissance chez tous les enfants', correct: false, correction: 'Non chef. Tu imposes un signe de la forme congénitale à une forme dont le début est décrit pendant l’enfance.' },
      { text: 'Des atteintes cardiaques ou une cataracte peuvent s’y associer', correct: true, correction: 'Oui. Le cours rappelle aussi ces atteintes hors du muscle.' },
      { text: 'Les signes musculaires peuvent être plus tardifs que les premières difficultés développementales', correct: true, correction: 'Exact. Un tableau initial peu musculaire n’exclut donc pas cette forme.' },
      { text: 'Des difficultés scolaires ou des troubles de l’apprentissage peuvent être au premier plan', correct: true, correction: 'Oui boss. Ce sont des manifestations importantes dans la présentation infantile.' },
      { text: 'L’expansion peut être transmise par la mère ou par le père', correct: true, correction: 'Exact 🧠 Les deux origines parentales sont possibles dans cette forme.' },
    ],
    explanation: 'La forme infantile peut provenir des deux parents et comporter des difficultés développementales ou scolaires avant des signes musculaires plus visibles. Des atteintes cardiaques et ophtalmologiques sont également citées. (Cours, p. 3)'
  },
  {
    id: 19,
    type: 'QCM',
    question: 'Une personne de 28 ans, dont les premiers symptômes sont apparus à 22 ans, a une expansion pathogène de DMPK, une faiblesse musculaire distale, une difficulté à relâcher sa main après une contraction et une cataracte précoce. Quelle forme de DM1 ce tableau illustre-t-il le mieux dans le cours ?',
    options: [
      { text: 'Un allèle normal mutable sans maladie', correct: false, correction: 'Non. Le scénario précise une expansion pathogène et des signes compatibles, pas un allèle de la plage mutable sans manifestation.' },
      { text: 'La forme classique', correct: true, correction: 'Oui boss 🎯 Chez l’adolescent ou l’adulte, faiblesse distale, myotonie et cataracte précoce composent le tableau classique.' },
      { text: 'La forme congénitale', correct: false, correction: 'Non chef. Aucun début prénatal ou néonatal n’est décrit ici.' },
      { text: 'La forme infantile, quel que soit l’âge des premiers symptômes', correct: false, correction: 'Faux. Le support distingue le début de la forme infantile de celui de la présentation classique.' },
      { text: 'La forme paucisymptomatique à atteinte exclusivement oculaire', correct: false, correction: 'Non chef. Il existe ici une atteinte musculaire nette et une myotonie, typiques du tableau classique présenté.' },
    ],
    explanation: 'Le cours regroupe les présentations juvénile et adulte sous la forme classique. La faiblesse musculaire distale, la myotonie et la cataracte précoce sont des manifestations caractéristiques de cette forme. (Cours, p. 3–4)'
  },
  {
    id: 20,
    type: 'QRM',
    question: 'Quels signes sont décrits dans la forme classique de DM1 ?',
    options: [
      { text: 'Un déficit musculaire à prédominance distale', correct: true, correction: 'Exact 🧠 Le cours insiste sur cette distribution du déficit musculaire.' },
      { text: 'Une absence de manifestations hors du muscle, par définition', correct: false, correction: 'Non chef. La DM1 est multisystémique : œil, cœur, fonctions endocriniennes, digestion et sommeil peuvent être concernés.' },
      { text: 'Un visage allongé peu expressif et un ptosis possibles', correct: true, correction: 'Oui boss. Ces éléments font partie de la description physique.' },
      { text: 'Une hypersomnie diurne', correct: true, correction: 'Oui. Le retentissement sur le sommeil est cité parmi les signes classiques.' },
      { text: 'Une myotonie, avec relâchement musculaire lent après la contraction', correct: true, correction: 'Exact. Le problème concerne la décontraction, pas seulement la force musculaire.' },
    ],
    explanation: 'La forme classique peut associer atteinte faciale, faiblesse distale, myotonie et hypersomnie diurne. Elle s’inscrit dans une maladie multisystémique, dont les manifestations ne sont pas uniquement musculaires. (Cours, p. 4)'
  },
  {
    id: 21,
    type: 'QCM',
    question: 'Quelle situation correspond le mieux à la myotonie décrite dans le cours ?',
    options: [
      { text: 'Une faiblesse musculaire liée uniquement à une atteinte de la conduction cardiaque', correct: false, correction: 'Non chef. La myotonie est un phénomène musculaire de décontraction ; elle n’est pas définie par la conduction du cœur.' },
      { text: 'Une diminution du tonus au repos, sans difficulté à relâcher une contraction', correct: false, correction: 'Faux. Une baisse de tonus correspond à une hypotonie, pas à la définition de la myotonie.' },
      { text: 'Une difficulté à relâcher rapidement un muscle après une contraction volontaire', correct: true, correction: 'Oui boss 🧠 La myotonie est une décontraction lente et difficile, par exemple après avoir serré la main.' },
      { text: 'Une douleur musculaire isolée au repos', correct: false, correction: 'Non. Une douleur est une myalgie ; elle ne définit pas le relâchement lent caractéristique.' },
      { text: 'Une diminution du volume musculaire, sans information sur le relâchement', correct: false, correction: 'Non chef. Cela décrit une amyotrophie ; le signe distinctif de myotonie porte sur la décontraction.' },
    ],
    explanation: 'La myotonie correspond à un relâchement lent et difficile du muscle après une contraction volontaire. Le cours indique qu’elle peut être recherchée à l’électromyogramme. Elle doit être distinguée de la faiblesse, de l’hypotonie et de l’amyotrophie. (Cours, p. 4)'
  },
  {
    id: 22,
    type: 'QRM',
    question: 'Quelles associations entre manifestation de DM1 et système atteint sont correctes ?',
    options: [
      { text: 'Constipation, parfois diarrhée : manifestations digestives', correct: true, correction: 'Oui. Les troubles digestifs font partie du caractère multisystémique de la DM1.' },
      { text: 'Diabète ou hypofertilité : manifestations endocriniennes', correct: true, correction: 'Exact. Le cours range ces manifestations dans le retentissement endocrinien.' },
      { text: 'Cataracte précoce : atteinte ophtalmologique', correct: true, correction: 'Oui boss. La cataracte peut accompagner les signes musculaires ou être très visible dans une forme discrète.' },
      { text: 'Myotonie : diminution isolée du tonus musculaire au repos', correct: false, correction: 'Non chef. Une baisse de tonus est une hypotonie ; la myotonie correspond au relâchement lent après la contraction.' },
      { text: 'Troubles du rythme ou de la conduction : atteinte cardiaque', correct: true, correction: 'Exact 🧠 Ces deux types de troubles sont cités dans le cours.' },
    ],
    explanation: 'Le cours décrit des manifestations cardiaques, ophtalmologiques, endocriniennes et digestives en plus de l’atteinte musculaire. Cette diversité explique la qualification de maladie multisystémique. (Cours, p. 1 et 4)'
  },
  {
    id: 23,
    type: 'QCM',
    question: 'Après le diagnostic de DM1 chez un membre de sa famille, une personne âgée avec cataracte, calvitie précoce et très peu de signes musculaires est identifiée comme porteuse d’une expansion pathogène de DMPK. Quelle forme décrite dans le cours est la plus compatible ?',
    options: [
      { text: 'Une exclusion de DM1, car l’absence de faiblesse marquée suffit à l’écarter', correct: false, correction: 'Non chef. Le cours souligne justement que les formes paucisymptomatiques peuvent avoir peu de signes musculaires.' },
      { text: 'Une forme classique obligatoirement sévère puisque l’expansion est pathogène', correct: false, correction: 'Non. Pathogène ne signifie pas que la présentation soit nécessairement sévère ; une forme discrète est possible.' },
      { text: 'Une forme infantile définie par la seule existence d’un enfant atteint dans la famille', correct: false, correction: 'Faux. La forme concerne l’histoire clinique de cette personne, pas l’âge d’un autre membre de la famille.' },
      { text: 'Une forme congénitale nécessairement passée inaperçue', correct: false, correction: 'Non chef. Ce scénario ne décrit pas un début prénatal ou néonatal sévère.' },
      { text: 'Une forme paucisymptomatique', correct: true, correction: 'Oui boss 🎯 Une cataracte avec peu ou aucun signe musculaire peut révéler cette forme longtemps méconnue.' },
    ],
    explanation: 'La forme paucisymptomatique décrite est discrète, souvent reconnue chez un adulte âgé, avec cataracte, calvitie et peu de signes musculaires. Un diagnostic dans la famille peut faire reconnaître une atteinte jusque-là méconnue. (Cours, p. 4)'
  },
  {
    id: 24,
    type: 'QRM',
    question: 'Quelles conclusions sont correctes face à une famille présentant plusieurs formes de DM1 ?',
    options: [
      { text: 'Les interruptions non-CTG et la méthylation de régions adjacentes font partie des facteurs mentionnés dans le cours', correct: true, correction: 'Exact 🧠 Le support les cite pour rappeler que la taille seule ne résume pas toute la variabilité.' },
      { text: 'Les plages de répétitions des formes paucisymptomatique et classique se chevauchent', correct: true, correction: 'Oui. Le support donne environ 50–150 et 100–1 000 CTG : un chiffre dans le chevauchement ne classe pas à lui seul la personne.' },
      { text: 'Le nombre de CTG suffit à prévoir exactement tous les signes et leur âge d’apparition', correct: false, correction: 'Non chef. La corrélation est statistique ; elle ne fournit pas une prédiction individuelle exacte.' },
      { text: 'Des signes très discrets chez un parent n’excluent pas une forme plus marquée chez un enfant', correct: true, correction: 'Exact. Expression variable et instabilité intergénérationnelle peuvent produire des tableaux familiaux différents.' },
      { text: 'Le cours distingue quatre formes en tenant compte notamment de l’âge de début et de la présentation clinique', correct: true, correction: 'Oui boss 🧠 Il retient congénitale, infantile, classique et paucisymptomatique ; les présentations juvénile et adulte sont regroupées ici.' },
    ],
    explanation: 'Les quatre formes du cours organisent un ensemble de présentations variables. La taille des répétitions apporte une information importante, mais les chevauchements et d’autres facteurs empêchent une prédiction précise de l’histoire clinique d’une personne. (Cours, p. 2–4)'
  },
  {
    id: 25,
    type: 'QCM',
    question: 'Quelle association décrit correctement la base génétique de la maladie de Huntington ?',
    options: [
      { text: 'Transmission liée à l’X — expansion CGG dans FMR1', correct: false, correction: 'Faux. FMR1 et CGG concernent les affections liées à l’X fragile.' },
      { text: 'Transmission exclusivement paternelle — expansion CAG dans HTT', correct: false, correction: 'Non chef. Un homme comme une femme peut transmettre un allèle HTT concerné.' },
      { text: 'Transmission autosomique dominante — expansion CAG non traduite produisant directement une perte de frataxine', correct: false, correction: 'Non. Dans Huntington, l’expansion CAG est codante et concerne HTT, pas la frataxine.' },
      { text: 'Transmission autosomique récessive — expansion GAA dans l’intron 1 de FXN', correct: false, correction: 'Non chef. Cette association correspond à l’ataxie de Friedreich.' },
      { text: 'Transmission autosomique dominante — expansion CAG codante dans HTT — polyglutamine', correct: true, correction: 'Oui boss 🧠 Le motif CAG est traduit en glutamine dans la huntingtine.' },
    ],
    explanation: 'Huntington est une maladie autosomique dominante liée à une expansion CAG dans la séquence codante de HTT. Elle entraîne un allongement de la chaîne de glutamines de la huntingtine. (Cours, p. 5 et 14)'
  },
  {
    id: 26,
    type: 'QRM',
    question: 'Quels éléments cliniques ou anatomiques sont décrits dans la maladie de Huntington ?',
    options: [
      { text: 'Un âge de début fixé à 50 ans pour tous les patients porteurs de l’expansion', correct: false, correction: 'Non chef. L’âge moyen de 50 ans donné dans le cours n’est pas un âge de début imposé à chaque patient.' },
      { text: 'Une atteinte cognitive pouvant évoluer vers une démence', correct: true, correction: 'Exact. Elle participe au caractère neurodégénératif de la maladie.' },
      { text: 'Une atteinte du cortex et des noyaux gris centraux, notamment du noyau caudé et du putamen', correct: true, correction: 'Oui 🎯 Ces structures sont explicitement mentionnées.' },
      { text: 'Des mouvements choréiques, des troubles de l’équilibre ou une dysarthrie', correct: true, correction: 'Exact 🧠 Ce sont les manifestations motrices citées.' },
      { text: 'Des manifestations anxieuses ou dépressives et une irritabilité', correct: true, correction: 'Oui boss. Le tableau ne se limite pas aux mouvements anormaux.' },
    ],
    explanation: 'Le cours décrit des manifestations motrices, psychiatriques et cognitives, avec atteinte corticale et des noyaux gris centraux. Le repère moyen de début vers 50 ans ne constitue pas une échéance individuelle. (Cours, p. 5)'
  },
  {
    id: 27,
    type: 'QCM',
    question: 'Un allèle HTT comporte 38 répétitions CAG. Quelle interprétation de sa pénétrance est correcte ?',
    options: [
      { text: 'Il s’agit d’un allèle pathogène à pénétrance réduite, sans expression clinique obligatoire chez chaque porteur', correct: true, correction: 'Oui boss 🧠 La plage 36–39 ne doit pas être confondue avec la pleine pénétrance.' },
      { text: 'Il impose une maladie symptomatique dès la naissance', correct: false, correction: 'Faux. Le nombre de répétitions ne justifie pas cette certitude d’âge de début.' },
      { text: 'Il appartient à la catégorie intermédiaire de 27–35 répétitions', correct: false, correction: 'Non. 38 est au-dessus de cette plage intermédiaire.' },
      { text: 'Il permet d’exclure toute maladie de Huntington pendant la vie', correct: false, correction: 'Non chef. Une pénétrance réduite signifie un risque d’expression, pas une absence de risque.' },
      { text: 'Il s’agit d’un allèle normal, identique à un allèle de 20 répétitions', correct: false, correction: 'Non chef. 38 répétitions appartiennent à la plage pathogène à pénétrance réduite.' },
    ],
    explanation: 'Les allèles HTT de 36–39 CAG sont classés comme pathogènes à pénétrance réduite. Le seuil simplifié de la ronéo doit être distingué de cette classification. (Cours, p. 5 et 14 ; seuils rectifiés)'
  },
  {
    id: 28,
    type: 'QRM',
    question: 'Quelles classifications illustratives de la répétition CAG de HTT sont correctes ?',
    options: [
      { text: 'Tout allèle supérieur à 35 CAG impose exactement le même âge de début', correct: false, correction: 'Non chef. La taille de répétition contribue au risque et à l’âge de début sans imposer une trajectoire identique.' },
      { text: '42 CAG : catégorie pathogène à pleine pénétrance', correct: true, correction: 'Oui 🎯 La catégorie de pleine pénétrance commence à 40 CAG, dans une durée de vie habituelle.' },
      { text: '38 CAG : catégorie pathogène à pénétrance réduite', correct: true, correction: 'Exact. Elle correspond à la plage 36–39.' },
      { text: '20 CAG : catégorie normale', correct: true, correction: 'Exact 🧠 La catégorie normale comprend 26 répétitions ou moins.' },
      { text: '30 CAG : catégorie intermédiaire', correct: true, correction: 'Oui boss. La plage intermédiaire est 27–35.' },
    ],
    explanation: 'La classification de référence distingue normal ≤ 26, intermédiaire 27–35, pénétrance réduite 36–39 et pleine pénétrance ≥ 40 CAG. L’âge de début demeure variable. (Cours, p. 5 et 14 ; classification rectifiée)'
  },
  {
    id: 29,
    type: 'QCM',
    question: 'Un parent possède un allèle HTT associé à Huntington et un allèle normal. L’autre parent ne porte pas d’allèle pathogène. Quelle est la probabilité de recevoir la copie parentale concernée à chaque grossesse, avant son éventuelle variation de taille ?',
    options: [
      { text: '100 % pour chaque enfant', correct: false, correction: 'Faux. Le parent hétérozygote peut transmettre l’un ou l’autre de ses deux allèles.' },
      { text: 'Un risque qui devient nul dès qu’un premier enfant a reçu l’allèle', correct: false, correction: 'Non chef. Les grossesses sont des événements indépendants, pas un quota de transmissions.' },
      { text: '25 %, uniquement pour les garçons', correct: false, correction: 'Non chef. La transmission est autosomique dominante, sans ce partage lié au sexe.' },
      { text: '50 %, indépendamment du sexe de l’enfant', correct: true, correction: 'Oui boss 🎯 Chaque enfant reçoit l’une des deux copies du parent avec une probabilité de 1/2.' },
      { text: '0 % si le parent transmetteur est la mère', correct: false, correction: 'Non. La maladie peut être transmise par une femme comme par un homme.' },
    ],
    explanation: 'La probabilité mendélienne de recevoir la copie HTT concernée d’un parent hétérozygote est de 1/2 à chaque grossesse. Il faut distinguer cette transmission de la variation éventuelle de répétitions et de l’expression clinique. (Cours, p. 5 ; application de la transmission autosomique dominante)'
  },
  {
    id: 30,
    type: 'QRM',
    question: 'Concernant l’anticipation et les nouveaux cas de Huntington dans une famille, quelles propositions sont exactes ?',
    options: [
      { text: 'Un parent asymptomatique peut porter un allèle de pénétrance réduite ou ne pas encore avoir développé la maladie', correct: true, correction: 'Oui. L’absence de symptômes familiaux ne règle pas seule la question génétique.' },
      { text: 'Toute transmission paternelle entraîne obligatoirement une expansion et une maladie plus sévère chez l’enfant', correct: false, correction: 'Non chef. La taille transmise et l’évolution clinique sont variables.' },
      { text: 'Une augmentation intergénérationnelle de la répétition peut favoriser un début plus précoce', correct: true, correction: 'Exact 🧠 C’est le principe de l’anticipation dans les maladies à expansion.' },
      { text: 'Les expansions sont plus souvent importantes lors des transmissions paternelles, sans être garanties à chaque transmission', correct: true, correction: 'Oui boss. Une tendance paternelle ne signifie pas une règle absolue.' },
      { text: 'Un cas apparemment nouveau peut notamment résulter de l’expansion d’un allèle intermédiaire parental', correct: true, correction: 'Exact. L’affirmation de la ronéo excluant toute néomutation est trop absolue.' },
    ],
    explanation: 'L’anticipation est plus fréquente lors des transmissions paternelles de HTT, mais elle n’est pas automatique. Des cas nouveaux ou apparemment isolés sont possibles ; l’absence d’histoire familiale ne permet pas de les exclure. (Cours, p. 5 et 14 ; précisions de transmission)'
  },
  {
    id: 31,
    type: 'QCM',
    question: 'Quelle formulation décrit correctement l’instabilité somatique de HTT dans Huntington ?',
    options: [
      { text: 'Elle permet de dater exactement les symptômes à partir d’un seuil sanguin universel de 150 CAG', correct: false, correction: 'Non chef. Les valeurs du modèle neuronal présenté ne sont pas des seuils sanguins universels de diagnostic ou de datation.' },
      { text: 'La répétition peut s’allonger dans certaines cellules somatiques, y compris des neurones postmitotiques', correct: true, correction: 'Oui boss 🧠 Il ne faut pas limiter l’instabilité somatique aux cellules qui se divisent.' },
      { text: 'Elle impose une division cellulaire pour chaque allongement, ce qui exclut les neurones postmitotiques', correct: false, correction: 'Faux. Une expansion peut se produire dans des neurones postmitotiques, notamment par des processus liés à l’ADN qui ne nécessitent pas une division.' },
      { text: 'Elle impose exactement la même taille de répétition dans toutes les cellules', correct: false, correction: 'Non. Les tailles peuvent varier selon les cellules et les tissus.' },
      { text: 'Elle ne concerne que les gamètes et jamais les tissus du patient', correct: false, correction: 'Non chef. Somatique signifie précisément qu’elle concerne des cellules de l’organisme.' },
    ],
    explanation: 'L’instabilité somatique peut conduire à des expansions différentes selon les cellules, y compris dans les neurones postmitotiques. Les observations cellulaires du modèle évoqué par le cours ne doivent pas être transformées en seuils cliniques universels. (Cours, p. 5 ; mécanisme précisé)'
  },
  {
    id: 32,
    type: 'QRM',
    question: 'Quelles propositions distinguent correctement les dimensions germinale et somatique d’une expansion HTT ?',
    options: [
      { text: 'Les seuils de dérégulation neuronale évoqués dans le cours remplacent les catégories de répétitions utilisées pour interpréter un test HTT', correct: false, correction: 'Non chef. Un modèle cellulaire et une classification génétique clinique ne répondent pas à la même question.' },
      { text: 'Une variation somatique peut modifier la répétition dans des cellules du patient au cours de sa vie', correct: true, correction: 'Oui boss. Elle ne se limite pas aux gamètes.' },
      { text: 'La relation entre longueur de répétition et âge de début est une corrélation, pas une date individuelle certaine', correct: true, correction: 'Oui 🎯 D’autres facteurs participent aussi à la variabilité.' },
      { text: 'Une variation germinale peut modifier la taille de l’allèle transmis à un enfant', correct: true, correction: 'Exact 🧠 Elle intervient dans la transmission entre générations.' },
      { text: 'Des tailles différentes de répétition peuvent exister entre cellules d’un même individu', correct: true, correction: 'Exact. C’est une dimension de l’hétérogénéité somatique.' },
    ],
    explanation: 'Il faut distinguer variation transmise et évolution somatique. La taille de la répétition contribue au phénotype, mais les observations neuronales ne permettent pas une datation clinique certaine ni le remplacement des catégories du test génétique. (Cours, p. 5)'
  },
  {
    id: 33,
    type: 'QCM',
    question: 'Quelle définition correspond aux ataxies cérébelleuses dominantes présentées dans le cours ?',
    options: [
      { text: 'Une catégorie de maladies obligatoirement liées au chromosome X', correct: false, correction: 'Non. Le mode de transmission indiqué ici est autosomique dominant.' },
      { text: 'Un groupe de maladies neurologiques cliniquement et génétiquement hétérogènes à transmission autosomique dominante', correct: true, correction: 'Oui boss 🧠 Le pluriel est essentiel : il ne s’agit pas d’un gène et d’un tableau uniques.' },
      { text: 'Un groupe exclusivement constitué de maladies musculaires sans atteinte cérébelleuse', correct: false, correction: 'Faux. La dégénérescence cérébelleuse est au centre de la description.' },
      { text: 'Une maladie unique liée à FXN et toujours autosomique récessive', correct: false, correction: 'Non chef. FXN concerne Friedreich, distinct des ataxies dominantes présentées.' },
      { text: 'Un tableau identique chez tous les patients, indépendamment de la maladie', correct: false, correction: 'Non chef. Le cours insiste sur l’hétérogénéité clinique et génétique.' },
    ],
    explanation: 'Les SCAD regroupent des maladies neurologiques autosomiques dominantes hétérogènes. Une ataxie cérébelleuse progressive est un élément commun à la description du cours. (Cours, p. 5–6)'
  },
  {
    id: 34,
    type: 'QRM',
    question: 'Concernant le tableau des ataxies cérébelleuses dominantes, quelles propositions sont exactes ?',
    options: [
      { text: 'Toute ataxie cérébelleuse héréditaire est nécessairement autosomique dominante', correct: false, correction: 'Faux. L’ataxie de Friedreich fournit dans le cours un exemple autosomique récessif.' },
      { text: 'Tous les sous-types sont causés par un seul et même gène', correct: false, correction: 'Non chef. Le groupe est génétiquement hétérogène.' },
      { text: 'Une ataxie progressive est associée à l’atteinte cérébelleuse', correct: true, correction: 'Exact 🧠 C’est le fil conducteur clinique décrit.' },
      { text: 'Les manifestations peuvent différer selon le sous-type', correct: true, correction: 'Oui boss. L’hétérogénéité concerne aussi la clinique.' },
      { text: 'Le repère de début adulte vers 30–50 ans donné par le cours n’est pas une échéance universelle pour chaque patient', correct: true, correction: 'Exact. Un intervalle pédagogique ne supprime pas la variabilité des maladies et des individus.' },
    ],
    explanation: 'Les ataxies dominantes décrites ont une évolution progressive et une clinique variable selon le sous-type. Le mode dominant de ce groupe ne s’applique pas à toutes les ataxies héréditaires. (Cours, p. 5–6)'
  },
  {
    id: 35,
    type: 'QCM',
    question: 'Comment lire correctement les désignations SCA1, SCA2, SCA3 ou SCA8 utilisées dans le support ?',
    options: [
      { text: 'Ce sont nécessairement les noms officiels exacts de tous les gènes concernés', correct: false, correction: 'Non chef. Ces désignations nomment des sous-types de maladies ; elles ne remplacent pas systématiquement les symboles des gènes.' },
      { text: 'Ce sont des désignations de sous-types d’ataxies spinocérébelleuses', correct: true, correction: 'Oui boss 🎯 Il faut distinguer l’étiquette de maladie du nom du gène.' },
      { text: 'Ce sont les nombres obligatoires de répétitions pathologiques', correct: false, correction: 'Faux. Le chiffre du sous-type n’est pas le nombre de répétitions.' },
      { text: 'Ce sont quatre synonymes d’un même allèle FXN', correct: false, correction: 'Non. FXN est le gène de l’ataxie de Friedreich.' },
      { text: 'Ce sont des classes de taille du motif CGG de FMR1', correct: false, correction: 'Non chef. Les classifications FMR1 et les sous-types SCA sont différentes.' },
    ],
    explanation: 'SCA1, SCA2, SCA3 et SCA8 désignent des sous-types d’ataxies spinocérébelleuses. La liste du cours intitulée « gènes » doit être lue avec cette distinction de nomenclature. (Cours, p. 6 et 14)'
  },
  {
    id: 36,
    type: 'QRM',
    question: 'Quelles propositions concernant les expansions dans les ataxies spinocérébelleuses dominantes sont exactes ?',
    options: [
      { text: 'Plusieurs sous-types impliquent des expansions CAG', correct: true, correction: 'Exact 🧠 C’est le motif majoritairement évoqué dans le cours.' },
      { text: 'Leur transmission dominante impose que toutes les expansions soient situées sur le chromosome X', correct: false, correction: 'Faux. Autosomique dominant ne signifie pas lié à l’X.' },
      { text: 'Tous les sous-types ont obligatoirement la même stabilité de répétition', correct: false, correction: 'Non chef. Le cours distingue des situations de stabilité et d’instabilité différentes.' },
      { text: 'La localisation et les mécanismes des expansions ne sont pas identiques dans tous les sous-types', correct: true, correction: 'Oui boss. Le groupe ne doit pas être réduit à un mécanisme unique.' },
      { text: 'La liste comprenant SCA8 ne justifie pas d’affirmer que toutes ces ataxies sont de simples expansions CAG codantes à polyglutamine', correct: true, correction: 'Exact. SCA8 illustre une architecture et des mécanismes plus complexes ; la généralisation serait fausse.' },
    ],
    explanation: 'Les ataxies dominantes constituent un ensemble hétérogène. De nombreuses expansions sont de type CAG, mais ni leur localisation ni leur mécanisme ne doivent être généralisés à tous les sous-types, notamment SCA8. (Cours, p. 5–6 et 14 ; mécanismes précisés)'
  },
  {
    id: 37,
    type: 'QCM',
    question: 'Quelle association décrit le mécanisme principal de l’ataxie de Friedreich ?',
    options: [
      { text: 'Expansion GAA codante produisant directement une polyglutamine dans la frataxine', correct: false, correction: 'Non. L’expansion GAA de Friedreich est intronique, pas une chaîne polyglutamine traduite.' },
      { text: 'Transmission autosomique dominante par une expansion unique chez chaque patient', correct: false, correction: 'Non chef. Friedreich est une maladie autosomique récessive.' },
      { text: 'Expansion CGG en 5’ de FMR1 et atteinte de FMRP', correct: false, correction: 'Faux. Cette association concerne les affections liées à l’X fragile.' },
      { text: 'Expansion GAA dans l’intron 1 de FXN, réduisant l’expression de frataxine', correct: true, correction: 'Oui boss 🧠 L’expansion non codante entraîne une perte d’expression.' },
      { text: 'Expansion CAG codante dans HTT et allongement de la huntingtine', correct: false, correction: 'Non chef. Cette association correspond à Huntington.' },
    ],
    explanation: 'L’ataxie de Friedreich est autosomique récessive. Son mécanisme principal est une expansion GAA dans l’intron 1 de FXN, entraînant un déficit de frataxine, impliquée notamment dans le métabolisme mitochondrial du fer. (Cours, p. 6)'
  },
  {
    id: 38,
    type: 'QRM',
    question: 'Quelles manifestations peuvent appartenir au tableau de l’ataxie de Friedreich ?',
    options: [
      { text: 'Une atteinte exclusivement cérébelleuse, sans manifestation extracérébrale possible', correct: false, correction: 'Non chef. La maladie est multisystémique, notamment cardiaque et ostéoarticulaire.' },
      { text: 'Une ataxie avec atteinte sensitive profonde et signes pyramidaux', correct: true, correction: 'Exact 🧠 Le tableau neurologique peut associer plusieurs composantes.' },
      { text: 'Des pieds creux et une scoliose', correct: true, correction: 'Oui boss. Ce sont les manifestations ostéoarticulaires citées.' },
      { text: 'Un diabète, une surdité ou une atrophie optique', correct: true, correction: 'Oui 🎯 Ces autres atteintes sont mentionnées dans le cours.' },
      { text: 'Une cardiomyopathie, souvent hypertrophique', correct: true, correction: 'Exact. L’atteinte cardiaque ne doit pas être présentée comme exclusivement dilatée, contrairement à la simplification du support.' },
    ],
    explanation: 'Friedreich associe des manifestations neurologiques et extracérébrales : pieds creux, scoliose, cardiomyopathie et parfois troubles endocriniens ou sensoriels. La cardiomyopathie est souvent hypertrophique et n’est pas exclusivement dilatée. (Cours, p. 6 ; type cardiaque rectifié)'
  },
  {
    id: 39,
    type: 'QCM',
    question: 'Quel profil moléculaire peut être compatible avec le mécanisme principal de Friedreich ?',
    options: [
      { text: 'Deux expansions CAG de HTT, quel que soit le statut de FXN', correct: false, correction: 'Faux. HTT concerne Huntington, pas Friedreich.' },
      { text: 'Une expansion GAA devant obligatoirement être identique au nucléotide près sur les deux allèles', correct: false, correction: 'Non chef. Les deux tailles peuvent être différentes ; c’est précisément le sens d’un allèle plus court et d’un plus long.' },
      { text: 'Deux expansions GAA pathogènes de FXN, une sur chaque allèle, éventuellement de tailles différentes', correct: true, correction: 'Oui boss 🧠 Biallélique ne signifie pas que les deux expansions ont obligatoirement exactement la même taille.' },
      { text: 'Deux expansions GAA codantes produisant une longue chaîne de polyglutamine', correct: false, correction: 'Non chef. L’expansion GAA de Friedreich est intronique et réduit l’expression de la frataxine ; elle ne produit pas une chaîne de polyglutamine.' },
      { text: 'Une seule expansion FXN avec un second allèle normal, comme mécanisme dominant habituel', correct: false, correction: 'Non chef. Une seule copie pathogène ne décrit pas le mécanisme récessif habituel de Friedreich.' },
    ],
    explanation: 'Le mécanisme majoritaire comporte une expansion GAA sur chacun des deux allèles FXN. Les expansions peuvent différer en taille : il ne faut pas transformer le chiffre d’environ 96 % du cours en obligation d’identité exacte des deux allèles. (Cours, p. 6)'
  },
  {
    id: 40,
    type: 'QRM',
    question: 'Concernant les génotypes de Friedreich, quelles propositions sont exactes ?',
    options: [
      { text: 'Toute variation ponctuelle de FXN permet d’exclure Friedreich', correct: false, correction: 'Non chef. D’autres variants pathogènes peuvent compléter une expansion dans un génotype composite.' },
      { text: 'La présence de deux anomalies pathogènes sur une seule copie, avec l’autre copie normale, équivaut obligatoirement à deux allèles atteints', correct: false, correction: 'Faux. Des anomalies en cis sur une copie ne sont pas deux allèles pathogènes en trans.' },
      { text: 'Environ 96 % des patients présentent des expansions GAA bialléliques', correct: true, correction: 'Exact 🧠 Il s’agit d’expansions sur les deux copies du gène.' },
      { text: 'Une expansion pathogène sur un allèle avec un second allèle FXN normal correspond habituellement à un portage hétérozygote', correct: true, correction: 'Exact. La maladie est récessive, contrairement à Huntington.' },
      { text: 'Un patient peut être hétérozygote composite avec une expansion GAA et un autre variant pathogène de FXN', correct: true, correction: 'Oui boss. Les deux allèles peuvent porter des anomalies de types différents.' },
    ],
    explanation: 'Environ 96 % des patients ont des expansions bialléliques ; les autres peuvent notamment associer une expansion à un variant pathogène d’un autre type sur l’autre allèle. Un génotype composite doit être distingué d’un simple portage. (Cours, p. 6)'
  },
  {
    id: 41,
    type: 'QCM',
    question: 'Quelle classification illustrative de deux allèles FXN de 20 et de 500 répétitions GAA est correcte, sans conclure à elle seule au diagnostic clinique ?',
    options: [
      { text: 'La présence isolée de 500 GAA prouve une maladie dominante sans étudier l’autre allèle', correct: false, correction: 'Non chef. Friedreich est récessive ; l’interprétation doit intégrer les deux allèles et le contexte.' },
      { text: '20 GAA : expansion pathogène ; 500 GAA : allèle normal', correct: false, correction: 'Non chef. Les catégories sont inversées.' },
      { text: '20 et 500 GAA appartiennent tous deux à la catégorie intermédiaire', correct: false, correction: 'Faux. La plage intermédiaire de référence est 34–65 GAA.' },
      { text: '20 GAA : allèle normal ; 500 GAA : expansion dans la catégorie pathogène', correct: true, correction: 'Oui boss 🎯 Ces deux valeurs sont loin des zones frontières et illustrent les catégories.' },
      { text: 'Les catégories de ces allèles peuvent être déterminées en appliquant directement les seuils CAG de HTT', correct: false, correction: 'Non chef. Les seuils dépendent du locus et de la maladie ; ceux de HTT ne se transposent pas à FXN.' },
    ],
    explanation: 'La classification de référence de FXN distingue notamment normal 5–33, intermédiaire 34–65 et expansion pathogène à partir d’environ 66 GAA. Les exemples 20 et 500 évitent les interprétations de frontière ; le diagnostic ne repose pas sur un seul allèle isolé. (Cours, p. 6 et 14 ; catégories précisées)'
  },
  {
    id: 42,
    type: 'QRM',
    question: 'Quelles propositions corrigent l’affirmation du support selon laquelle les expansions GAA de Friedreich seraient toujours stables ?',
    options: [
      { text: 'Des expansions GAA peuvent varier lors de transmissions germinales', correct: true, correction: 'Exact 🧠 Une variation entre générations est possible.' },
      { text: 'Une maladie autosomique récessive ne peut jamais présenter une répétition instable', correct: false, correction: 'Faux. Le mode de transmission ne définit pas à lui seul la stabilité moléculaire.' },
      { text: 'Toutes les répétitions GAA gardent obligatoirement la même taille dans chaque cellule et chaque génération', correct: false, correction: 'Non chef. Cette affirmation absolue est contredite par les observations d’instabilité.' },
      { text: 'Une instabilité somatique des répétitions GAA a été observée', correct: true, correction: 'Oui boss. Les tailles peuvent aussi varier entre tissus ou au cours de la vie.' },
      { text: 'L’absence d’un schéma simple d’anticipation comparable à certaines maladies dominantes ne prouve pas une stabilité absolue', correct: true, correction: 'Exact. Anticipation clinique et instabilité moléculaire sont des notions différentes.' },
    ],
    explanation: 'Les expansions GAA de FXN peuvent présenter une instabilité germinale et somatique. La formulation « stable, aucune instabilité » du cours et de son corrigé doit donc être rectifiée, sans imposer un schéma d’anticipation clinique universel. (Cours, p. 6 et 14 ; instabilité rectifiée)'
  },
  {
    id: 43,
    type: 'QCM',
    question: 'Chez les patients ayant deux expansions GAA de FXN, comment interpréter la longueur de l’allèle le plus court ?',
    options: [
      { text: 'Plus l’allèle court est long, plus le début est obligatoirement tardif', correct: false, correction: 'Non. La tendance générale décrite est inverse pour l’âge de début.' },
      { text: 'Une expansion plus longue de l’allèle court est généralement associée à un début plus précoce, avec une variabilité individuelle', correct: true, correction: 'Oui boss 🧠 La taille contribue au phénotype mais ne détermine pas tout le parcours.' },
      { text: 'L’allèle court doit être identique à l’allèle long pour influencer le phénotype', correct: false, correction: 'Non chef. Les deux expansions peuvent être de tailles différentes.' },
      { text: 'Elle impose à elle seule le jour exact de début et toute la sévérité future', correct: false, correction: 'Non chef. Une corrélation n’est pas une prédiction individuelle complète.' },
      { text: 'Elle n’a aucune relation avec l’âge de début dans les études', correct: false, correction: 'Faux. Une relation inverse avec l’âge de début est décrite.' },
    ],
    explanation: 'La longueur de l’allèle FXN expansé le plus court contribue à la corrélation génotype-phénotype : une longueur plus élevée est généralement associée à un début plus précoce. Elle ne suffit pas à fixer précisément toutes les manifestations ou leur évolution. (Cours, p. 6)'
  },
  {
    id: 44,
    type: 'QRM',
    question: 'Concernant l’évolution de l’ataxie de Friedreich, quelles propositions sont exactes ?',
    options: [
      { text: 'Le nombre de GAA ne permet pas à lui seul de prévoir exactement l’âge de perte de marche ou de décès', correct: true, correction: 'Oui 🎯 La corrélation génétique ne résume pas toute l’évolution clinique.' },
      { text: 'Les complications cardiaques peuvent peser sur le pronostic', correct: true, correction: 'Oui boss. Il faut considérer les atteintes extracérébrales, pas seulement l’ataxie.' },
      { text: 'L’atteinte est progressive et peut compromettre la marche', correct: true, correction: 'Exact 🧠 La perte de mobilité fait partie des conséquences possibles de l’évolution.' },
      { text: 'Tous les patients perdent obligatoirement la marche à 15 ans et décèdent au même âge', correct: false, correction: 'Non chef. Les âges donnés de façon absolue dans la ronéo doivent être nuancés : les formes et les trajectoires sont variables.' },
      { text: 'Les manifestations et la vitesse d’évolution varient entre patients', correct: true, correction: 'Exact. Les repères du cours ne constituent pas un calendrier universel.' },
    ],
    explanation: 'Friedreich est une maladie progressive et multisystémique. L’évolution motrice et le pronostic sont variables ; une perte de marche à 15 ans et un décès précoce ne sont pas des échéances imposées à chaque patient. (Cours, p. 6)'
  },
  {
    id: 45,
    type: 'QCM',
    question: 'Quelle association distingue correctement les deux gènes cités pour les expansions de polyalanine ?',
    options: [
      { text: 'ARX et PHOX2B : exclusivement un ptosis et une dysphagie', correct: false, correction: 'Non chef. Ce tableau évoque plutôt la dystrophie musculaire oculopharyngée liée à PABPN1.' },
      { text: 'ARX : encéphalopathie épileptique et déficience intellectuelle ; PHOX2B : hypoventilation centrale congénitale', correct: true, correction: 'Oui boss 🎯 Même catégorie de répétitions, mais des conséquences cliniques différentes selon le gène.' },
      { text: 'ARX : syndrome d’Ondine ; PHOX2B : dystrophie oculopharyngée', correct: false, correction: 'Non chef. Ondine est associé à PHOX2B ; la dystrophie oculopharyngée implique PABPN1.' },
      { text: 'ARX : dystrophie myotonique de type 2 ; PHOX2B : épilepsie d’Unverricht-Lundborg', correct: false, correction: 'Non. Ces maladies concernent respectivement CNBP et CSTB.' },
      { text: 'ARX et PHOX2B : deux noms du même gène', correct: false, correction: 'Faux. Ce sont deux gènes distincts, avec des phénotypes différents.' },
    ],
    explanation: 'Le cours associe ARX à une encéphalopathie épileptique avec déficience intellectuelle et PHOX2B au syndrome d’hypoventilation centrale congénitale. La présentation respiratoire ne doit pas être généralisée à toutes les expansions de polyalanine. (Cours, p. 6–7)'
  },
  {
    id: 46,
    type: 'QRM',
    question: 'Concernant les expansions de polyalanine présentées dans le cours, quelles propositions sont exactes ?',
    options: [
      { text: 'Tous les gènes concernés entraînent obligatoirement le syndrome d’Ondine', correct: false, correction: 'Non chef. Le phénotype dépend du gène ; ARX est notamment associé à des manifestations neurologiques.' },
      { text: 'Les triplets GCG et, plus généralement, GCN codent l’alanine', correct: true, correction: 'Exact. Dans GCN, N peut être l’un des quatre nucléotides.' },
      { text: 'Elles peuvent augmenter la longueur d’une succession d’alanines dans une protéine', correct: true, correction: 'Oui boss 🧠 La répétition codante se traduit par davantage d’alanines.' },
      { text: 'Une expansion de polyalanine signifie une répétition de glutamines dans la protéine', correct: false, correction: 'Faux. Alanine et glutamine sont deux acides aminés différents.' },
      { text: 'Les expansions citées sont présentées comme relativement stables lors des transmissions', correct: true, correction: 'Oui 🎯 Elles ne doivent pas être automatiquement assimilées aux expansions très instables avec anticipation.' },
    ],
    explanation: 'Les expansions codantes de triplets d’alanine allongent un segment polyalanine. Le cours les présente comme stables et distingue les conséquences selon le gène. La stabilité de transmission est notamment documentée pour PHOX2B. (Cours, p. 6–7 ; vérification GeneReviews PHOX2B.)'
  },
  {
    id: 47,
    type: 'QCM',
    question: 'Quel mécanisme clinique caractérise le syndrome d’Ondine associé à PHOX2B ?',
    options: [
      { text: 'Une obstruction mécanique des voies aériennes comme mécanisme central de la maladie', correct: false, correction: 'Faux. Le mécanisme définissant Ondine est un trouble de la commande centrale de la ventilation, pas une obstruction respiratoire.' },
      { text: 'Un décès nécessaire dans tous les cas avant toute possibilité de diagnostic', correct: false, correction: 'Non chef. La maladie peut être grave, mais son diagnostic est possible et l’issue n’est pas obligatoirement celle décrite.' },
      { text: 'Une difficulté à avaler constituant son unique mécanisme', correct: false, correction: 'Non chef. Les difficultés de déglutition sont au premier plan dans la dystrophie oculopharyngée, pas dans la définition d’Ondine.' },
      { text: 'Une absence d’atteinte respiratoire tant que le patient dort', correct: false, correction: 'Non. Le sommeil est précisément une période importante de manifestation de l’hypoventilation.' },
      { text: 'Une perte de contrôle central de la ventilation, particulièrement manifeste pendant le sommeil', correct: true, correction: 'Oui boss 🎯 Le problème porte sur la commande respiratoire automatique.' },
    ],
    explanation: 'Le syndrome d’hypoventilation centrale congénitale lié à PHOX2B perturbe la commande autonome de la ventilation, notamment durant le sommeil. Les manifestations et leur sévérité sont variables. (Cours, p. 6–7 ; précision vérifiée dans GeneReviews PHOX2B.)'
  },
  {
    id: 48,
    type: 'QRM',
    question: 'Quelles propositions permettent d’interpréter correctement les exemples ARX et PHOX2B ?',
    options: [
      { text: 'La seule présence du mot « polyalanine » suffit à prédire tous les symptômes', correct: false, correction: 'Faux. La nature du gène et de la variation compte également.' },
      { text: 'Le nombre d’alanines supplémentaires et le nombre total d’alanines désignent toujours le même compte', correct: false, correction: 'Non chef. Un passage de 16 à 27 alanines représente 27 au total, et non 27 supplémentaires ; les formulations doivent préciser ce qui est compté.' },
      { text: 'Une déficience intellectuelle peut faire partie du tableau lié à ARX', correct: true, correction: 'Exact. Le cours l’associe à l’encéphalopathie épileptique.' },
      { text: 'Une expansion d’ARX peut être associée à une encéphalopathie épileptique', correct: true, correction: 'Oui boss 🧠 C’est le phénotype neurologique cité dans le cours.' },
      { text: 'PHOX2B est associé au syndrome d’hypoventilation centrale congénitale', correct: true, correction: 'Oui 🎯 Il ne faut pas attribuer automatiquement cette manifestation à ARX.' },
    ],
    explanation: 'Les manifestations diffèrent entre ARX et PHOX2B. La phrase « 27 alanines en plus des 16 » du support ne doit pas être reprise comme règle : l’exemple publié pour un segment d’ARX correspond à une augmentation de 16 à 27 alanines au total. (Cours, p. 7 ; correction vérifiée dans l’étude primaire d’ARX.)'
  },
  {
    id: 49,
    type: 'QCM',
    question: 'Quelle anomalie moléculaire est associée à la dystrophie musculaire oculopharyngée ?',
    options: [
      { text: 'Une expansion codante de triplets d’alanine dans PABPN1', correct: true, correction: 'Oui boss 🎯 L’expansion entraîne un allongement du segment polyalanine de la protéine.' },
      { text: 'Un raccourcissement des télomères comme mécanisme définissant PABPN1', correct: false, correction: 'Non chef. Le mécanisme présenté pour PABPN1 est une expansion codante, pas une téloméropathie.' },
      { text: 'Une expansion d’un dodécamère en amont de CSTB', correct: false, correction: 'Faux. Elle est associée à la maladie d’Unverricht-Lundborg.' },
      { text: 'Une expansion CCTG intronique de CNBP', correct: false, correction: 'Non chef. Cette association correspond à la dystrophie myotonique de type 2.' },
      { text: 'Une expansion GAA de l’intron 1 de FXN', correct: false, correction: 'Non. Cette anomalie est associée à l’ataxie de Friedreich.' },
    ],
    explanation: 'La dystrophie musculaire oculopharyngée est associée à une expansion de triplets codant l’alanine dans la séquence codante de PABPN1. (Cours, p. 7 et 13–15)'
  },
  {
    id: 50,
    type: 'QRM',
    question: 'Quelles manifestations sont décrites dans la dystrophie musculaire oculopharyngée ?',
    options: [
      { text: 'Une épilepsie myoclonique comme manifestation centrale définissant PABPN1', correct: false, correction: 'Faux. L’épilepsie myoclonique est l’exemple donné pour Unverricht-Lundborg.' },
      { text: 'Des difficultés de déglutition et d’alimentation', correct: true, correction: 'Exact. Elles correspondent à la composante pharyngée de la maladie.' },
      { text: 'Un ptosis', correct: true, correction: 'Oui boss 🧠 L’atteinte des muscles des paupières peut provoquer leur chute.' },
      { text: 'Une hypoventilation centrale congénitale comme manifestation définissant cette maladie', correct: false, correction: 'Non chef. Cette manifestation définit plutôt le syndrome d’Ondine lié à PHOX2B.' },
      { text: 'Des difficultés à parler liées à l’atteinte musculaire décrite', correct: true, correction: 'Oui 🎯 Le cours les cite également.' },
    ],
    explanation: 'Le cours décrit une atteinte oculaire et pharyngée avec ptosis, difficultés d’alimentation et de parole. Les difficultés à avaler font partie des manifestations caractéristiques. (Cours, p. 7)'
  },
  {
    id: 51,
    type: 'QCM',
    question: 'Quelle formulation du mode de transmission de la dystrophie musculaire oculopharyngée est la plus juste ?',
    options: [
      { text: 'Elle est exclusivement liée au chromosome X', correct: false, correction: 'Non chef. La transmission usuelle présentée est autosomique dominante.' },
      { text: 'Elle ne peut jamais être héréditaire si un seul parent est symptomatique', correct: false, correction: 'Faux. Un parent atteint peut transmettre un allèle responsable dans une forme dominante.' },
      { text: 'Elle est habituellement autosomique dominante, avec des formes autosomiques récessives plus rares', correct: true, correction: 'Oui boss 🎯 Le cours décrit la forme habituelle dominante ; il ne faut pas en déduire que toute forme est obligatoirement dominante.' },
      { text: 'Toutes ses formes sont obligatoirement récessives', correct: false, correction: 'Non. Le mode dominant est le mode habituel.' },
      { text: 'Elle est transmise seulement de père en fils par le chromosome Y', correct: false, correction: 'Non chef. Ce n’est pas une transmission holandrique.' },
    ],
    explanation: 'La dystrophie musculaire oculopharyngée est habituellement autosomique dominante. Des formes récessives existent, ce qui impose de nuancer une affirmation universelle. (Cours, p. 7 ; précision vérifiée dans GeneReviews OPMD.)'
  },
  {
    id: 52,
    type: 'QRM',
    question: 'Concernant l’expansion de PABPN1 et son interprétation, quelles propositions sont exactes ?',
    options: [
      { text: 'Elle allonge une succession d’alanines', correct: true, correction: 'Exact. Il s’agit d’une expansion polyalanine, pas polyglutamine.' },
      { text: 'Compter seulement les GCG ou compter tous les triplets GCN revient nécessairement au même décompte', correct: false, correction: 'Non chef. Les conventions peuvent compter une partie du motif ou l’ensemble des codons d’alanine ; les chiffres ne se comparent pas sans préciser l’unité.' },
      { text: 'L’expansion étudiée se situe dans une région codante', correct: true, correction: 'Oui boss 🧠 Elle modifie directement la longueur d’un segment de la protéine.' },
      { text: 'Le cours la présente comme stable et sans anticipation caractéristique', correct: true, correction: 'Oui 🎯 Une expansion ne signifie pas automatiquement une augmentation clinique à chaque génération.' },
      { text: 'Le motif CCTG de CNBP doit être utilisé pour interpréter les allèles PABPN1', correct: false, correction: 'Faux. CNBP et PABPN1 correspondent à deux gènes et deux types d’expansion différents.' },
    ],
    explanation: 'L’expansion codante de PABPN1 allonge une séquence polyalanine et est décrite comme stable. Les nombres issus de l’ancienne convention GCG ne doivent pas être confondus avec le compte total moderne GCN. (Cours, p. 7 et 15 ; clarification vérifiée dans GeneReviews OPMD.)'
  },
  {
    id: 53,
    type: 'QCM',
    question: 'Quelle association moléculaire correspond à la dystrophie myotonique de type 2 ?',
    options: [
      { text: 'CTG dans la région 3’ non traduite de DMPK', correct: false, correction: 'Non chef. Cette association correspond à la dystrophie myotonique de type 1.' },
      { text: 'GCN dans la séquence codante de PABPN1', correct: false, correction: 'Faux. Cette expansion est associée à la dystrophie oculopharyngée.' },
      { text: 'GAA dans l’intron 1 de FXN', correct: false, correction: 'Non. Cette expansion concerne l’ataxie de Friedreich.' },
      { text: 'CCTG dans l’intron 1 de CNBP, anciennement nommé ZNF9', correct: true, correction: 'Oui boss 🎯 Quadruplet CCTG, intron 1 et CNBP : c’est le trio de DM2.' },
      { text: 'Un dodécamère en amont de CSTB', correct: false, correction: 'Non chef. Cela correspond à Unverricht-Lundborg.' },
    ],
    explanation: 'La DM2 est associée à une expansion de CCTG dans l’intron 1 de CNBP. ZNF9 est l’ancien nom de ce même gène, employé dans le cours. (Cours, p. 7 ; nomenclature vérifiée dans GeneReviews DM2.)'
  },
  {
    id: 54,
    type: 'QRM',
    question: 'Quelles propositions décrivent correctement le mécanisme principal de la DM2 ?',
    options: [
      { text: 'La transmission dominante est compatible avec un effet toxique d’un allèle expansé', correct: true, correction: 'Oui 🎯 Une expansion sur un seul allèle peut être pathogène sans supprimer les deux copies du gène.' },
      { text: 'La localisation intronique exclut nécessairement tout effet pathogène', correct: false, correction: 'Non chef. Une expansion non codante peut agir par ses transcrits sans modifier directement une séquence protéique.' },
      { text: 'La maladie se résume obligatoirement à une absence de protéine CNBP', correct: false, correction: 'Faux. Cette présentation ne décrit pas correctement le mécanisme principal de DM2.' },
      { text: 'Les transcrits contenant l’expansion peuvent exercer un effet toxique', correct: true, correction: 'Oui boss 🧠 Le mécanisme central est un gain toxique de fonction de l’ARN.' },
      { text: 'Cet effet peut perturber la régulation de l’épissage d’autres ARN', correct: true, correction: 'Exact. La toxicité des répétitions affecte notamment des facteurs de maturation des ARN.' },
    ],
    explanation: 'La formulation de perte de fonction du cours doit être précisée : le mécanisme principal de DM2 est un effet toxique de l’ARN expansé, perturbant notamment l’épissage. (Cours, p. 7 ; correction vérifiée dans GeneReviews DM2 et une étude primaire de toxicité des ARN.)'
  },
  {
    id: 55,
    type: 'QCM',
    question: 'Quelle affirmation sur l’anticipation dans la DM2 est la plus juste ?',
    options: [
      { text: 'Elle survient nécessairement de façon identique à chaque transmission', correct: false, correction: 'Non. Cette affirmation universelle n’est pas établie pour DM2.' },
      { text: 'Elle est obligatoire parce que le motif comporte quatre nucléotides', correct: false, correction: 'Non chef. La longueur du motif ne suffit pas à démontrer une anticipation clinique.' },
      { text: 'Elle permet de prédire exactement l’âge de début à partir de la taille de l’expansion', correct: false, correction: 'Faux. Une telle prédiction individuelle ne peut pas être déduite du nombre de répétitions.' },
      { text: 'Elle est synonyme de transmission autosomique récessive', correct: false, correction: 'Non chef. L’anticipation et le mode de transmission sont deux notions différentes ; DM2 est dominante.' },
      { text: 'L’expansion est instable, mais une anticipation clinique de DM2 n’est pas confirmée', correct: true, correction: 'Oui boss 🎯 L’instabilité moléculaire ne démontre pas automatiquement une aggravation plus précoce à chaque génération.' },
    ],
    explanation: 'Le cours affirme une anticipation dans DM2, mais GeneReviews indique qu’elle n’est pas confirmée. Il faut distinguer variation de taille de l’expansion et anticipation clinique. (Cours, p. 7 ; correction vérifiée dans GeneReviews DM2.)'
  },
  {
    id: 56,
    type: 'QRM',
    question: 'Concernant les caractéristiques génétiques de DM2, quelles propositions sont exactes ?',
    options: [
      { text: 'La transmission est autosomique dominante', correct: true, correction: 'Oui boss 🧠 Le cours et sa correction indiquent ce mode de transmission.' },
      { text: 'CNBP et ZNF9 sont deux noms utilisés pour le même gène', correct: true, correction: 'Oui 🎯 ZNF9 correspond à la nomenclature ancienne du cours.' },
      { text: 'L’expansion est située dans une séquence codante de polyalanine', correct: false, correction: 'Non chef. Elle est intronique ; l’expansion codante de polyalanine concerne notamment PABPN1.' },
      { text: 'Toutes les maladies par expansion sont obligatoirement récessives', correct: false, correction: 'Faux. DM2 est justement un exemple de transmission dominante.' },
      { text: 'CCTG est un motif de quatre nucléotides', correct: true, correction: 'Exact. C’est un quadruplet, pas un triplet.' },
    ],
    explanation: 'DM2 est autosomique dominante et implique le quadruplet CCTG dans CNBP, anciennement ZNF9. Les maladies par expansion n’ont pas toutes le même mode de transmission ni la même localisation moléculaire. (Cours, p. 7 et 13–15)'
  },
  {
    id: 57,
    type: 'QCM',
    question: 'Quelle association correspond à la maladie d’Unverricht-Lundborg ?',
    options: [
      { text: 'FXN et ptosis comme définition de la maladie', correct: false, correction: 'Non chef. FXN correspond à l’ataxie de Friedreich ; le ptosis est notamment décrit dans la dystrophie oculopharyngée.' },
      { text: 'CNBP, anciennement ZNF9, et hypoventilation centrale', correct: false, correction: 'Non chef. CNBP concerne DM2 ; l’hypoventilation centrale est associée à PHOX2B.' },
      { text: 'CSTB, codant la cystatine B, et épilepsie myoclonique', correct: true, correction: 'Oui boss 🎯 C’est l’association moléculaire et clinique donnée dans le cours.' },
      { text: 'PABPN1 et encéphalopathie épileptique comme tableau principal', correct: false, correction: 'Faux. PABPN1 est associé à la dystrophie oculopharyngée.' },
      { text: 'PHOX2B et épilepsie myoclonique d’Unverricht-Lundborg', correct: false, correction: 'Non. Le gène de la maladie présentée est CSTB.' },
    ],
    explanation: 'La maladie d’Unverricht-Lundborg, ou EPM1, est une épilepsie myoclonique associée au gène CSTB, codant la cystatine B. (Cours, p. 7 et 13–15 ; nom CSTB vérifié dans GeneReviews EPM1.)'
  },
  {
    id: 58,
    type: 'QRM',
    question: 'Concernant l’expansion impliquée dans Unverricht-Lundborg, quelles propositions sont exactes ?',
    options: [
      { text: 'L’expansion se situe en amont de CSTB, dans sa région promotrice', correct: true, correction: 'Oui 🎯 Elle peut réduire l’expression du gène sans allonger directement la protéine.' },
      { text: 'Le motif présenté est CCCCGCCCCGCG', correct: true, correction: 'Exact. Sa longueur est différente de celle d’un triplet ou d’un quadruplet.' },
      { text: 'L’expansion produit nécessairement une succession de douze alanines dans la protéine', correct: false, correction: 'Non chef. Ici la répétition est en amont du gène, pas dans une séquence codante d’alanines.' },
      { text: 'Le motif répété comporte douze nucléotides', correct: true, correction: 'Oui boss 🧠 Dodécamère signifie un motif de douze nucléotides.' },
      { text: 'Le mécanisme est une perte de fonction de la cystatine B', correct: true, correction: 'Exact. Le cours associe l’expansion à une diminution de fonction.' },
    ],
    explanation: 'L’expansion du dodécamère CCCCGCCCCGCG dans la région promotrice de CSTB réduit son expression et entraîne une perte de fonction de la cystatine B. (Cours, p. 7 et 15 ; localisation précisée par GeneReviews EPM1.)'
  },
  {
    id: 59,
    type: 'QCM',
    question: 'Comment faut-il interpréter la mention de « 50 répétitions » dans l’exemple d’Unverricht-Lundborg ?',
    options: [
      { text: 'Le nombre prouve une transmission dominante', correct: false, correction: 'Non chef. Unverricht-Lundborg est autosomique récessive ; la taille de l’expansion ne définit pas à elle seule le mode de transmission.' },
      { text: 'Toute taille différente de 50 exclut immédiatement la maladie', correct: false, correction: 'Faux. Le diagnostic ne dépend pas d’un unique nombre identique chez tous les patients.' },
      { text: 'Tous les malades ont obligatoirement exactement 50 répétitions', correct: false, correction: 'Non chef. Les tailles des expansions pathogènes sont variables.' },
      { text: 'Le nombre correspond à 50 acides aminés ajoutés à la cystatine B', correct: false, correction: 'Non. Il s’agit du nombre de motifs d’ADN répétés en amont du gène, pas d’acides aminés ajoutés.' },
      { text: 'Le nombre illustre une expansion, sans définir une taille pathogène unique pour tous les cas', correct: true, correction: 'Oui boss 🎯 Il faut retenir le gène, le motif, sa localisation et la variabilité des expansions.' },
    ],
    explanation: 'Les allèles expansés de CSTB n’ont pas tous une taille identique. La formulation chiffrée du cours est un exemple et ne doit pas être transformée en critère universel. (Cours, p. 7 et 15 ; précision vérifiée dans GeneReviews EPM1.)'
  },
  {
    id: 60,
    type: 'QRM',
    question: 'Concernant la transmission et les variations de CSTB responsables d’Unverricht-Lundborg, quelles propositions sont exactes ?',
    options: [
      { text: 'La maladie peut être associée à des expansions pathogènes sur les deux allèles', correct: true, correction: 'Exact. C’est une configuration importante pour cette maladie.' },
      { text: 'Une expansion et une autre variation pathogène de CSTB sur l’autre allèle peuvent aussi être responsables', correct: true, correction: 'Oui 🎯 Toutes les configurations ne se limitent pas à deux expansions strictement identiques.' },
      { text: 'La maladie est toujours liée à une mutation du gène ZNF9', correct: false, correction: 'Faux. ZNF9 est l’ancien nom de CNBP, associé à DM2 ; Unverricht-Lundborg implique CSTB.' },
      { text: 'Un seul allèle expansé définit obligatoirement une maladie dominante', correct: false, correction: 'Non chef. Le mode de transmission décrit est récessif ; il faut distinguer portage et maladie.' },
      { text: 'La transmission est autosomique récessive', correct: true, correction: 'Oui boss 🧠 Deux allèles pathogènes sont impliqués dans le modèle récessif.' },
    ],
    explanation: 'EPM1 est autosomique récessive. Le diagnostic peut reposer sur deux expansions pathogènes de CSTB ou sur une expansion associée à une autre variation pathogène sur l’autre allèle. (Cours, p. 7 et 15 ; précision vérifiée dans GeneReviews EPM1.)'
  },
  {
    id: 61,
    type: 'QCM',
    question: 'Pourquoi les téloméropathies sont-elles citées dans l’aparté sur l’anticipation ?',
    options: [
      { text: 'Parce qu’un raccourcissement transmis des télomères peut contribuer à des manifestations plus précoces dans les générations suivantes', correct: true, correction: 'Oui boss 🎯 L’anticipation peut ici être liée à l’héritage de télomères courts, sans augmentation d’un motif pathogène.' },
      { text: 'Parce qu’elles sont toutes dues à PABPN1', correct: false, correction: 'Non. PABPN1 est associé à la dystrophie oculopharyngée.' },
      { text: 'Parce qu’elles touchent exclusivement les cellules qui ne se divisent jamais', correct: false, correction: 'Non chef. Le défaut d’entretien des télomères concerne notamment les conséquences des divisions cellulaires.' },
      { text: 'Parce que toute anticipation impose une expansion CAG codante', correct: false, correction: 'Non chef. Les téloméropathies montrent justement qu’un autre mécanisme est possible.' },
      { text: 'Parce que les télomères s’allongent nécessairement à chaque génération', correct: false, correction: 'Faux. L’aparté décrit au contraire la transmission de télomères raccourcis.' },
    ],
    explanation: 'Dans certaines téloméropathies, l’héritage de télomères courts contribue à une anticipation clinique. Ce mécanisme montre que l’anticipation n’est pas exclusive des maladies par expansion de répétitions. (Cours, p. 7–8 et 15)'
  },
  {
    id: 62,
    type: 'QRM',
    question: 'Quelles manifestations appartiennent au spectre des téloméropathies décrit dans le cours ?',
    options: [
      { text: 'Une cirrhose ou des cancers', correct: true, correction: 'Oui 🎯 Ces manifestations sont citées parmi les conséquences possibles.' },
      { text: 'Une canitie précoce ou des anomalies de pigmentation cutanée', correct: true, correction: 'Exact. Les cheveux et la peau peuvent également fournir des signes.' },
      { text: 'Une atteinte limitée à un seul symptôme identique chez tous les patients', correct: false, correction: 'Non chef. Le cours insiste au contraire sur un spectre large et variable.' },
      { text: 'Une fibrose pulmonaire', correct: true, correction: 'Oui boss 🧠 Les poumons font partie des organes potentiellement concernés.' },
      { text: 'Une insuffisance médullaire', correct: true, correction: 'Exact. L’atteinte de la moelle osseuse est un élément du spectre.' },
    ],
    explanation: 'Les téloméropathies ont un spectre clinique large : fibrose pulmonaire, insuffisance médullaire, cirrhose, cancers, canitie précoce et anomalies pigmentaires peuvent être observés, sans être tous obligatoires. (Cours, p. 8 et 13–15)'
  },
  {
    id: 63,
    type: 'QCM',
    question: 'Une personne transmet à sa descendance des télomères courts. Quelle affirmation est correcte ?',
    options: [
      { text: 'Des télomères courts peuvent être hérités sans transmission obligatoire de la variation familiale', correct: true, correction: 'Oui boss 🎯 Le cours distingue les deux transmissions : longueur déjà réduite et variation génétique éventuelle.' },
      { text: 'L’absence de la variation familiale garantit une longueur télomérique normale', correct: false, correction: 'Faux. Des télomères courts peuvent être hérités même sans la variation familiale.' },
      { text: 'L’enfant a nécessairement reçu la variation pathogène familiale', correct: false, correction: 'Non chef. L’héritage de télomères courts et celui de la variation ne sont pas obligatoirement identiques.' },
      { text: 'Le mécanisme correspond nécessairement à l’expansion intronique CCTG de CNBP', correct: false, correction: 'Non. Le raccourcissement télomérique et l’expansion responsable de DM2 sont deux mécanismes différents.' },
      { text: 'La longueur télomérique ne peut jamais être influencée par la transmission germinale', correct: false, correction: 'Non chef. Le cours explique précisément qu’une descendance peut avoir des télomères courts dès la conception.' },
    ],
    explanation: 'La descendance peut hériter de télomères déjà courts sans avoir nécessairement reçu la variation pathogène familiale. Si la variation est également héritée, elle peut en outre perturber l’entretien télomérique. (Cours, p. 7–8 et 15)'
  },
  {
    id: 64,
    type: 'QRM',
    question: 'Concernant les téloméropathies et leur transmission, quelles propositions sont exactes ?',
    options: [
      { text: 'Un défaut d’entretien des télomères peut entraîner des télomères anormalement courts', correct: true, correction: 'Oui boss 🧠 C’est le mécanisme général de l’aparté.' },
      { text: 'Les conséquences peuvent concerner plusieurs organes et varier entre personnes', correct: true, correction: 'Oui 🎯 Un même groupe de maladies peut donner un spectre très hétérogène.' },
      { text: 'Tout raccourcissement télomérique impose une expansion de triplets dans une séquence codante', correct: false, correction: 'Non chef. Une variation perturbant l’entretien télomérique n’est pas nécessairement une expansion.' },
      { text: 'Toutes les téloméropathies sont obligatoirement autosomiques dominantes', correct: false, correction: 'Faux. Ce mode existe, mais des formes autosomiques récessives ou liées à l’X sont également décrites.' },
      { text: 'La transmission peut être autosomique dominante, autosomique récessive ou liée à l’X selon le gène', correct: true, correction: 'Exact. Il n’existe pas un mode de transmission unique pour tout ce groupe.' },
    ],
    explanation: 'Les téloméropathies résultent de défauts de maintien des télomères. Leur transmission dépend du gène et peut être dominante, récessive ou liée à l’X ; les manifestations sont variables et multisystémiques. (Cours, p. 7–8 et 15 ; vérification GeneReviews des maladies de la biologie des télomères.)'
  },
  {
    id: 65,
    type: 'QCM',
    question: 'Une séquence contient exactement 75 copies consécutives du motif CCTG, sans interruption. Quelle longueur représente cette seule région répétée, sans compter les séquences qui l’entourent ?',
    options: [
      { text: '225 nucléotides', correct: false, correction: 'Faux. Ce résultat correspondrait à 75 copies d’un triplet ; CCTG est un quadruplet.' },
      { text: '900 nucléotides', correct: false, correction: 'Non. Tu as utilisé la longueur d’un dodécamère alors que CCTG contient quatre nucléotides.' },
      { text: '300 nucléotides', correct: true, correction: 'Oui boss 🎯 75 répétitions × 4 nucléotides par motif = 300 nucléotides.' },
      { text: '75 nucléotides', correct: false, correction: 'Non chef. 75 est le nombre de copies, et chacune contient quatre nucléotides.' },
      { text: 'Une longueur impossible à calculer même avec ces hypothèses', correct: false, correction: 'Non chef. Le nombre de copies et la longueur du motif suffisent dans cette séquence sans interruption.' },
    ],
    explanation: 'La taille du motif et son nombre de répétitions sont deux mesures distinctes. CCTG comporte quatre nucléotides : 75 copies occupent donc 300 nucléotides dans l’exemple précisé. (Cours, p. 7 ; application du calcul)'
  },
  {
    id: 66,
    type: 'QRM',
    question: 'Quelles propositions décrivent correctement la diversité des maladies par expansion étudiées ?',
    options: [
      { text: 'La localisation de l’expansion dans le gène intervient dans le mécanisme pathologique', correct: true, correction: 'Oui boss. Une région codante et une région non codante peuvent avoir des conséquences différentes.' },
      { text: 'Une expansion peut se trouver dans une région non codante', correct: true, correction: 'Exact. DMPK en 3’ non traduit et FXN dans un intron en sont des exemples.' },
      { text: 'Toutes ces maladies sont obligatoirement autosomiques dominantes', correct: false, correction: 'Non chef. Friedreich et Unverricht-Lundborg sont autosomiques récessives ; FMR1 est lié à l’X.' },
      { text: 'Tous les motifs étudiés comportent obligatoirement trois nucléotides', correct: false, correction: 'Faux. Le cours cite aussi CCTG et un motif de douze paires de bases.' },
      { text: 'La nature du motif répété intervient dans sa pathogénicité', correct: true, correction: 'Exact 🧠 CTG, CAG, GAA ou CCTG ne désignent pas une même séquence.' },
    ],
    explanation: 'Le motif, le nombre de répétitions et la localisation sont essentiels. Le cours décrit des motifs de longueurs différentes et plusieurs modes de transmission. (Cours, p. 6–7 et 9–10)'
  },
  {
    id: 67,
    type: 'QCM',
    question: 'Une femme XX hétérozygote conductrice d’un variant F8 a déjà un fils hémophile. Son conjoint XY est sain et non porteur. On suppose des grossesses indépendantes, des sexes équiprobables, aucune néomutation et une pénétrance complète chez les garçons porteurs. Quel est le risque d’avoir un garçon atteint à la grossesse suivante, avant de connaître son sexe ?',
    options: [
      { text: '50 %, car on ne doit jamais prendre le sexe en compte', correct: false, correction: 'Faux. 50 % est le risque sachant qu’il s’agit d’un garçon ; le sexe n’est pas encore connu ici.' },
      { text: '75 %, parce qu’un enfant a déjà été atteint', correct: false, correction: 'Non. Une naissance précédente ne modifie pas la ségrégation dans les hypothèses indiquées.' },
      { text: '100 %, puisque la mère est conductrice', correct: false, correction: 'Non chef. Elle peut transmettre son X sans le variant, et l’enfant peut aussi être une fille.' },
      { text: '0 %, car le variant a déjà été transmis au premier fils', correct: false, correction: 'Non chef. Les transmissions ne s’épuisent pas : chaque grossesse constitue un nouvel événement.' },
      { text: '25 %', correct: true, correction: 'Oui boss 🎯 1/2 d’avoir un garçon × 1/2 de lui transmettre l’X portant le variant = 1/4.' },
    ],
    explanation: 'Le risque d’un garçon atteint par grossesse est de 1/4 ; le risque conditionnel chez un garçon est de 1/2. L’indépendance des grossesses empêche de modifier le calcul à partir du résultat de la précédente. (Cours, p. 8 et 10 ; application familiale)'
  },
  {
    id: 68,
    type: 'QRM',
    question: 'Quels raisonnements sur l’hémophilie A sont conformes aux rappels du cours ?',
    options: [
      { text: 'Une femme hétérozygote peut présenter des manifestations cliniques', correct: true, correction: 'Exact. Le cours rappelle les conséquences possibles d’une inactivation biaisée de l’X.' },
      { text: 'Une anomalie de F8 peut être apparue de novo', correct: true, correction: 'Exact 🧠 L’absence d’antécédents ne supprime pas cette possibilité.' },
      { text: 'L’absence d’hémophilie connue dans la famille exclut une transmission liée à l’X', correct: false, correction: 'Non chef. Un variant peut être nouveau ou avoir circulé chez des conductrices peu symptomatiques.' },
      { text: 'Dans le modèle XX/XY, un père porteur transmet son X concerné à ses filles', correct: true, correction: 'Oui 🎯 La transmission du chromosome n’exige pas que toutes les filles aient le même phénotype.' },
      { text: 'Une mère conductrice peut avoir hérité du variant de sa propre mère', correct: true, correction: 'Oui boss. Le grand-père maternel n’est donc pas nécessairement atteint.' },
    ],
    explanation: 'Les rappels du support distinguent génotype, transmission et manifestations. Une famille sans antécédent connu peut comporter un variant de novo ou des conductrices auparavant non reconnues. (Cours, p. 9–11)'
  },
  {
    id: 69,
    type: 'QCM',
    question: 'Une analyse identifie un allèle FMR1 avec 100 répétitions CGG. Quelle interprétation de sa catégorie est correcte ?',
    options: [
      { text: 'Il s’agit d’un allèle intermédiaire de 45 à 54 répétitions', correct: false, correction: 'Faux. La valeur dépasse aussi la plage intermédiaire.' },
      { text: 'Il s’agit nécessairement d’une mutation complète de plus de 200 répétitions', correct: false, correction: 'Non. 100 ne dépasse pas 200.' },
      { text: 'Il s’agit d’un allèle normal de moins de 45 répétitions', correct: false, correction: 'Non chef. 100 est au-dessus de cette plage.' },
      { text: 'Cette valeur établit une expansion CTG de DMPK', correct: false, correction: 'Non chef. Le gène et le motif indiqués sont FMR1 et CGG, pas DMPK et CTG.' },
      { text: 'Il s’agit d’une prémutation, qui ne prouve pas à elle seule le syndrome classique de l’X fragile', correct: true, correction: 'Oui boss 🧠 100 se situe dans la plage de prémutation, environ 55–200 CGG.' },
    ],
    explanation: 'Une prémutation FMR1 comporte environ 55–200 répétitions CGG. Elle doit être distinguée de la mutation complète et de ses conséquences ; les seuils ne sont pas transposables d’un gène à l’autre. (Cours, p. 9–11)'
  },
  {
    id: 70,
    type: 'QRM',
    question: 'Une femme possède un allèle FMR1 normal et un allèle avec 90 répétitions CGG. Quelles propositions sont exactes dans le modèle mendélien simple ?',
    options: [
      { text: 'Chaque enfant a une probabilité de 1/2 de recevoir l’X portant l’allèle concerné, avant son éventuelle évolution de taille', correct: true, correction: 'Exact 🧠 La mère transmet l’un ou l’autre de ses deux X.' },
      { text: 'Cet X peut être transmis uniquement à ses fils', correct: false, correction: 'Faux. Une fille comme un garçon peut recevoir l’X maternel concerné.' },
      { text: 'Une expansion de cet allèle peut survenir lors de la transmission maternelle', correct: true, correction: 'Oui boss. La prémutation peut évoluer vers une mutation complète.' },
      { text: 'Tous ses enfants reçoivent nécessairement une mutation complète', correct: false, correction: 'Non chef. Certains reçoivent l’X normal, et une expansion complète n’est pas certaine chez ceux recevant l’autre X.' },
      { text: 'La transmission de l’X concerné ne signifie pas que chaque enfant receveur aura obligatoirement une mutation complète', correct: true, correction: 'Exact. L’allèle peut être transmis sans franchir le seuil de mutation complète.' },
    ],
    explanation: 'La transmission d’un X maternel, l’évolution du nombre de CGG et l’expression clinique sont trois événements à distinguer. La seule hétérozygotie ne donne pas un risque certain de mutation complète pour chaque enfant. (Cours, p. 10–11)'
  },
  {
    id: 71,
    type: 'QCM',
    question: 'Quel mécanisme est habituellement associé à une mutation complète FMR1, par exemple avec 300 répétitions CGG ?',
    options: [
      { text: 'Une perte d’expression de FMR1 avec déficit de FMRP', correct: true, correction: 'Oui boss 🧠 La mutation complète est habituellement associée à une extinction du gène par méthylation.' },
      { text: 'Une augmentation obligatoire et maximale de FMRP dans toutes les cellules', correct: false, correction: 'Faux. Le mécanisme habituel est au contraire un déficit de cette protéine.' },
      { text: 'Une expansion codante CAG allongeant directement une polyglutamine de FMRP', correct: false, correction: 'Non chef. Les CGG de FMR1 sont dans une région 5’ non traduite ; le modèle polyglutamine concerne notamment HTT.' },
      { text: 'Une disparition physique de tout le chromosome X', correct: false, correction: 'Non chef. L’expansion et l’extinction d’un gène ne font pas disparaître le chromosome.' },
      { text: 'Une diminution de frataxine par expansion GAA de FXN', correct: false, correction: 'Non. Ce mécanisme concerne Friedreich, pas FMR1.' },
    ],
    explanation: 'Les mécanismes comparés dans le cours sont distincts : la mutation complète FMR1 correspond habituellement à une perte d’expression, tandis que la prémutation peut avoir des effets liés à l’ARN. Des mosaïques moléculaires empêchent d’affirmer une extinction absolue dans toutes les cellules de chaque patient. (Cours, p. 10–12 ; mécanisme précisé)'
  },
  {
    id: 72,
    type: 'QRM',
    question: 'Quelles propositions décrivent correctement l’inactivation de l’X rappelée dans ce support ?',
    options: [
      { text: 'Elle peut contribuer à une expression clinique variable chez les femmes hétérozygotes', correct: true, correction: 'Exact. Les proportions de cellules exprimant chaque allèle peuvent être différentes.' },
      { text: 'Elle concerne généralement l’un des deux X dans une cellule somatique XX', correct: true, correction: 'Oui boss. Cela ne signifie pas que tous ses gènes sont éteints sans exception.' },
      { text: 'Elle impose exactement 50 % de chaque population cellulaire dans tous les tissus de chaque femme', correct: false, correction: 'Non chef. Aléatoire ne signifie pas un partage parfaitement équilibré partout ; un biais peut aussi exister.' },
      { text: 'Le chromosome inactivé reste physiquement présent dans la cellule', correct: true, correction: 'Oui 🎯 L’inactivation n’est ni une délétion ni une élimination du chromosome.' },
      { text: 'Elle participe à la compensation de dose de nombreux gènes liés à l’X', correct: true, correction: 'Exact 🧠 Le cours parle bien de compenser une partie de la différence de dose.' },
    ],
    explanation: 'Le rappel du cours associe compensation de dose, inactivation somatique et variabilité clinique. L’X inactivé demeure présent, et l’expression n’est pas nécessairement équilibrée entre tous les tissus. (Cours, p. 9 et 11)'
  },
  {
    id: 73,
    type: 'QCM',
    question: 'Quelle association gène–motif–localisation correspond à la maladie indiquée ?',
    options: [
      { text: 'X fragile : FMR1–GAA–intron 1', correct: false, correction: 'Non chef. FMR1 comporte une répétition CGG dans sa région 5’ non traduite.' },
      { text: 'Huntington : HTT–CTG–intron 1', correct: false, correction: 'Faux. Huntington implique CAG dans une séquence codante de HTT.' },
      { text: 'DM1 : DMPK–CAG–séquence codante', correct: false, correction: 'Non chef. DM1 correspond à CTG dans la région 3’ non traduite de DMPK.' },
      { text: 'Friedreich : FXN–GAA–intron 1', correct: true, correction: 'Oui boss 🎯 Ce motif intronique peut réduire l’expression de la frataxine lorsqu’il est expansé.' },
      { text: 'DM2 : CNBP–CGG–région 5’ non traduite', correct: false, correction: 'Non. DM2 implique CCTG dans l’intron 1 de CNBP, anciennement ZNF9.' },
    ],
    explanation: 'Identifier correctement le gène, le motif et la localisation évite de confondre des mécanismes pathologiques différents. La localisation intronique de l’expansion GAA est caractéristique de FXN dans Friedreich. (Cours, p. 1, 5–7 et 9–10)'
  },
  {
    id: 74,
    type: 'QRM',
    question: 'Quelles comparaisons des mécanismes moléculaires sont exactes ?',
    options: [
      { text: 'Une expansion CAG codante de HTT allonge une séquence de glutamines', correct: true, correction: 'Exact. C’est une expansion polyglutamine, distincte d’une polyalanine.' },
      { text: 'Une expansion codante de PABPN1 peut allonger une séquence de polyalanine', correct: true, correction: 'Oui 🎯 Le motif et l’acide aminé répété diffèrent du modèle HTT.' },
      { text: 'Une expansion non codante de FXN peut diminuer l’expression de frataxine', correct: true, correction: 'Oui boss. Non codant ne signifie pas sans conséquence fonctionnelle.' },
      { text: 'Dans DM1, l’ARN issu de l’allèle expansé peut perturber l’épissage de plusieurs autres transcrits', correct: true, correction: 'Exact 🧠 C’est un effet en trans de l’ARN toxique, pas seulement une anomalie de la protéine DMPK.' },
      { text: 'Une seule perte de fonction identique explique toutes les maladies du cours', correct: false, correction: 'Non chef. Perte d’expression, toxicité de l’ARN et conséquences sur une protéine doivent être distinguées.' },
    ],
    explanation: 'Le support présente plusieurs mécanismes : effets toxiques de l’ARN et de l’épissage, réduction d’expression et expansions de séquences protéiques. Le terme expansion ne suffit pas à préciser le mécanisme. (Cours, p. 1–2, 5–7 et 10)'
  },
  {
    id: 75,
    type: 'QCM',
    question: 'Deux parents sont chacun hétérozygotes pour un allèle FXN pathogène et un allèle normal. Dans un modèle autosomique récessif à ségrégation mendélienne, sans néomutation et avec pénétrance complète des génotypes bialléliques pathogènes, quelle est la probabilité d’un enfant atteint de Friedreich à chaque conception ?',
    options: [
      { text: '100 %, puisque tous les gamètes des deux parents sont pathogènes', correct: false, correction: 'Non chef. Chaque parent hétérozygote produit, dans ce modèle, moitié de gamètes avec l’allèle normal.' },
      { text: '25 %', correct: true, correction: 'Oui boss 🎯 1/2 de transmission par le premier parent × 1/2 par le second = 1/4.' },
      { text: '50 %, parce qu’un seul allèle pathogène suffit', correct: false, correction: 'Faux. Le modèle est récessif : recevoir un seul allèle correspond au portage hétérozygote.' },
      { text: '75 %, car trois génotypes sur quatre sont atteints', correct: false, correction: 'Non. Une seule des quatre combinaisons reçoit l’allèle pathogène de chacun des parents.' },
      { text: '0 %, parce que les deux parents sont asymptomatiques', correct: false, correction: 'Non chef. Deux porteurs peuvent transmettre chacun leur allèle pathogène au même enfant.' },
    ],
    explanation: 'Pour deux porteurs hétérozygotes d’une affection autosomique récessive, la probabilité d’hériter de deux allèles pathogènes est 1/4. Cette probabilité concerne chaque conception et ne prédit pas la sévérité individuelle. (Cours, p. 6 ; application des règles mendéliennes)'
  },
  {
    id: 76,
    type: 'QRM',
    question: 'Pour interpréter un résultat de nombre de répétitions, quelles précautions de raisonnement sont exactes ?',
    options: [
      { text: 'Cent répétitions ont nécessairement la même signification clinique pour tous les gènes', correct: false, correction: 'Non chef. Cent CGG de FMR1 correspondent à une prémutation ; le contexte n’est pas celui de cent CTG de DMPK.' },
      { text: 'La seule taille mesurée ne permet pas de déduire un mode de transmission commun à toutes les expansions', correct: true, correction: 'Exact. Friedreich est récessif alors que DM1 et Huntington sont dominants.' },
      { text: 'Il faut connaître le gène et le motif avant d’appliquer les seuils de ce gène', correct: true, correction: 'Exact 🧠 Les mêmes nombres n’ont pas le même sens dans DMPK, HTT ou FMR1.' },
      { text: 'Le statut allélique doit être distingué des symptômes observés au moment de l’analyse', correct: true, correction: 'Oui 🎯 L’expression peut être tardive, variable ou absente dans une catégorie intermédiaire.' },
      { text: 'Une corrélation entre taille et âge de début ne donne pas un calendrier certain pour une personne', correct: true, correction: 'Oui boss. Le cours insiste sur cette limite pour DM1.' },
    ],
    explanation: 'Les seuils sont propres au gène et s’interprètent avec le contexte. Le support distingue corrélations statistiques, catégories d’allèles et manifestations cliniques ; ces notions ne sont pas interchangeables. (Cours, p. 2, 5–6 et 9–11)'
  },
  {
    id: 77,
    type: 'QCM',
    question: 'Une variation génétique est présente dès la conception, mais les manifestations apparaissent à l’âge adulte. Quelle proposition est correcte ?',
    options: [
      { text: 'L’apparition tardive prouve une transmission non mendélienne', correct: false, correction: 'Faux. Une maladie autosomique dominante peut se manifester tardivement.' },
      { text: 'Les répétitions sont nécessairement identiques dans tous les tissus pendant toute la vie', correct: false, correction: 'Non chef. Certaines expansions présentent une instabilité somatique, comme le souligne le cours pour Huntington.' },
      { text: 'Un début tardif est compatible avec une maladie génétique, dont l’expression peut évoluer avec l’âge', correct: true, correction: 'Oui boss 🧠 Présence de l’allèle et moment d’apparition des symptômes sont deux choses différentes.' },
      { text: 'Le caractère génétique impose obligatoirement des symptômes à la naissance', correct: false, correction: 'Non chef. Huntington et certaines formes de DM1 montrent que ce n’est pas une règle.' },
      { text: 'Il faut attendre les premiers symptômes pour que l’allèle soit présent dans l’ADN', correct: false, correction: 'Non. L’allèle hérité est déjà présent ; c’est l’expression pathologique qui peut être retardée.' },
    ],
    explanation: 'Un allèle hérité peut être présent dès la conception sans symptômes immédiats. L’âge intervient dans l’expression clinique et, pour certaines maladies, dans l’évolution somatique de la répétition. (Cours, p. 2–5)'
  },
  {
    id: 78,
    type: 'QRM',
    question: 'Quelles propositions distinguent correctement expansion et anticipation ?',
    options: [
      { text: 'L’expansion désigne une augmentation du nombre de copies d’une séquence répétée', correct: true, correction: 'Exact 🧠 C’est une description moléculaire.' },
      { text: 'Une expansion n’impose pas à elle seule une anticipation clinique dans toutes les maladies', correct: true, correction: 'Exact. Le cours présente notamment des expansions de polyalanine sans anticipation habituelle.' },
      { text: 'L’anticipation signifie nécessairement que le nombre de chromosomes augmente à chaque génération', correct: false, correction: 'Non chef. Une expansion de motif et une aneuploïdie sont des événements différents.' },
      { text: 'Une anticipation peut aussi être observée dans certaines téloméropathies', correct: true, correction: 'Oui 🎯 Cet aparté montre que le phénomène n’est pas limité aux expansions de motifs.' },
      { text: 'L’anticipation désigne une tendance à une expression plus précoce ou plus sévère dans les générations suivantes', correct: true, correction: 'Oui boss. C’est une observation familiale, qui n’est pas garantie pour chaque enfant.' },
    ],
    explanation: 'L’expansion est une variation moléculaire ; l’anticipation est une tendance clinique entre générations. Le lien dépend de la maladie, et les téloméropathies apportent un autre mécanisme possible d’anticipation. (Cours, p. 2 et 6–8)'
  },
  {
    id: 79,
    type: 'QCM',
    question: 'Dans une famille, un grand-parent a une cataracte avec peu de signes musculaires, sa fille présente une myotonie et son nouveau-né une hypotonie sévère. Quel raisonnement correspond aux formes de DM1 présentées, sans prétendre poser le diagnostic sur ces seuls signes ?',
    options: [
      { text: 'Le nouveau-né ne peut pas avoir reçu l’allèle de sa mère', correct: false, correction: 'Non chef. La transmission maternelle est majoritaire dans la forme congénitale de DM1.' },
      { text: 'La cataracte du grand-parent exclut tout lien avec une maladie musculaire familiale', correct: false, correction: 'Non chef. Une forme paucisymptomatique de DM1 peut comporter une cataracte avec peu de signes musculaires.' },
      { text: 'Une DM1 familiale avec variation de l’expansion et anticipation est une hypothèse compatible', correct: true, correction: 'Oui boss 🧠 Les formes paucisymptomatique, classique et congénitale peuvent s’inscrire dans une histoire familiale ; cela reste une hypothèse à évaluer.' },
      { text: 'Les différences de sévérité imposent trois gènes responsables différents', correct: false, correction: 'Faux. Un même gène peut produire des formes cliniques différentes dans une famille.' },
      { text: 'Cette histoire prouve un nombre précis de CTG dans le sang de chaque personne', correct: false, correction: 'Non. Les signes ne donnent pas une mesure exacte de l’expansion.' },
    ],
    explanation: 'Le support souligne que les formes discrètes de DM1 sont parfois reconnues après une forme plus expressive chez un apparenté. Cette histoire est compatible avec une anticipation, sans certitude diagnostique ni prédiction exacte du nombre de CTG. (Cours, p. 2–4 ; application familiale)'
  },
  {
    id: 80,
    type: 'QRM',
    question: 'Quelles idées résument correctement les maladies par expansion du cours ?',
    options: [
      { text: 'Un début tardif et des manifestations différentes chez les apparentés restent compatibles avec une maladie génétique', correct: true, correction: 'Exact. Âge, expression et évolution de l’allèle peuvent intervenir.' },
      { text: 'Transmission d’un allèle, évolution de sa taille et sévérité clinique doivent être distinguées', correct: true, correction: 'Oui 🎯 Ces événements ne sont pas des certitudes équivalentes.' },
      { text: 'Le gène, le motif et la localisation sont nécessaires pour comprendre le mécanisme', correct: true, correction: 'Exact 🧠 Le seul mot expansion est insuffisant.' },
      { text: 'Un chiffre unique de répétitions suffit à prédire toutes les complications dans chaque maladie', correct: false, correction: 'Non chef. Les corrélations et les seuils ont des limites et dépendent de la maladie.' },
      { text: 'Des maladies dominantes, récessives et liées à l’X sont représentées', correct: true, correction: 'Oui boss. DM1, Friedreich et FMR1 illustrent cette diversité.' },
    ],
    explanation: 'Le cours relie les caractéristiques de l’expansion, les mécanismes moléculaires, la transmission et la variabilité clinique. La taille de la répétition constitue une information importante sans être une prédiction individuelle universelle. (Cours, p. 1–11)'
  },
]
