export const meta = {
  title: 'Physiopathologie des maladies infectieuses',
}

export default [
  {
    id: 1,
    type: 'QCM',
    question: 'Une fracture fermée provoque rougeur, chaleur et douleur sans agent microbien identifié. Quel phénomène décrit d’abord cette réaction de l’hôte ?',
    options: [
      { text: 'Une inflammation.', correct: true, correction: 'Vrai. Une agression non infectieuse peut déclencher les défenses de l’hôte.' },
      { text: 'Une dysbiose digestive.', correct: false, correction: 'Faux. Il ne s’agit pas d’un déséquilibre du microbiote intestinal.' },
      { text: 'Une infection prouvée.', correct: false, correction: 'Faux. La réaction inflammatoire seule ne prouve pas une infection.' },
      { text: 'Une colonisation bactérienne.', correct: false, correction: 'Faux. Aucun micro-organisme n’est ici mis en évidence.' },
      { text: 'Une bactériémie.', correct: false, correction: 'Faux. Aucune bactérie dans le sang n’est documentée.' },
    ],
    explanation: 'L’inflammation est une réponse de l’hôte à une agression ; elle peut être stérile, comme après une fracture. (Cours, p. 2)'
  },
  {
    id: 2,
    type: 'QRM',
    question: 'Selon la définition du cours, quelles situations ou propriétés peuvent correspondre à une inflammation ?',
    options: [
      { text: 'Une réaction possible au cours d’une infection.', correct: true, correction: 'Vrai. L’infection fait partie des causes possibles d’inflammation.' },
      { text: 'Une réaction observée dans un contexte de greffe.', correct: true, correction: 'Vrai. Une greffe figure parmi les exemples d’agression pouvant entraîner une inflammation.' },
      { text: 'La mise en jeu de défenses de l’hôte face à une agression.', correct: true, correction: 'Vrai. La réaction inflammatoire mobilise les systèmes de défense.' },
      { text: 'Une réaction survenant après une fracture.', correct: true, correction: 'Vrai. Le cours donne la fracture comme agression non infectieuse.' },
      { text: 'La preuve obligatoire qu’une bactérie doit être traitée.', correct: false, correction: 'Faux. Une inflammation ne démontre ni une cause bactérienne ni une indication antibiotique.' },
    ],
    explanation: 'L’inflammation décrit la réaction de l’hôte, quelle que soit la nature infectieuse ou non de l’agression. (Cours, p. 2)'
  },
  {
    id: 3,
    type: 'QCM',
    question: 'Une bactérie est présente sur une surface de l’organisme, sans réaction inflammatoire associée. Quel terme correspond à la définition donnée dans le cours ?',
    options: [
      { text: 'Virulence.', correct: false, correction: 'Faux. La virulence qualifie une propriété d’un agent, pas cet état de l’hôte.' },
      { text: 'Septicémie.', correct: false, correction: 'Faux. Ce terme renvoie à une infection systémique, non décrite ici.' },
      { text: 'Colonisation.', correct: true, correction: 'Vrai. La présence de micro-organismes sans réaction inflammatoire définit ici la colonisation.' },
      { text: 'Infection.', correct: false, correction: 'Faux. L’infection implique une réaction inflammatoire causée par le micro-organisme.' },
      { text: 'Inflammation stérile.', correct: false, correction: 'Faux. Un micro-organisme est présent et aucune inflammation n’est rapportée.' },
    ],
    explanation: 'La colonisation correspond à la présence d’un micro-organisme sans réaction inflammatoire dans la définition du support. (Cours, p. 2)'
  },
  {
    id: 4,
    type: 'QRM',
    question: 'Quelles affirmations distinguent correctement la colonisation de l’infection dans le cadre du cours ?',
    options: [
      { text: 'La colonisation n’entraîne pas de réaction inflammatoire selon la définition présentée.', correct: true, correction: 'Vrai. Cette absence la distingue de l’infection dans le cours.' },
      { text: 'Une colonisation comporte la présence d’un micro-organisme.', correct: true, correction: 'Vrai. C’est l’un des deux éléments de la définition.' },
      { text: 'Toute colonisation impose une antibiothérapie immédiate.', correct: false, correction: 'Faux. La présence d’un micro-organisme ne constitue pas, à elle seule, une indication d’antibiotiques.' },
      { text: 'Un micro-organisme retrouvé dans un écosystème normal est toujours pathogène.', correct: false, correction: 'Faux. Des bactéries appartiennent normalement aux microbiotes de l’hôte.' },
      { text: 'Une culture positive isolée ne suffit pas toujours à établir une infection.', correct: true, correction: 'Vrai. Il faut interpréter le résultat avec le contexte clinique et la réaction de l’hôte.' },
    ],
    explanation: 'La distinction repose sur la réaction de l’hôte et sur le contexte de présence du micro-organisme, pas sur sa seule détection. Les exemples de résultats microbiologiques isolés sont donnés à la page suivante. (Cours, p. 2-3)'
  },
  {
    id: 5,
    type: 'QCM',
    question: 'Quelle proposition restitue le mieux la définition pédagogique de l’infection donnée dans le cours ?',
    options: [
      { text: 'Toute présence de bactéries dans un prélèvement, même sans réaction de l’hôte.', correct: false, correction: 'Faux. La présence microbienne seule peut traduire une colonisation.' },
      { text: 'Toute colonisation cutanée par une bactérie habituelle.', correct: false, correction: 'Faux. Un portage sans réaction inflammatoire n’est pas une infection.' },
      { text: 'Un micro-organisme présent dans un site où il ne devrait pas se trouver et responsable d’une réaction inflammatoire.', correct: true, correction: 'Vrai. Le cours associe ces deux éléments dans sa définition de l’infection.' },
      { text: 'Un déséquilibre du microbiote, même sans agent responsable ni inflammation.', correct: false, correction: 'Faux. La dysbiose n’est pas synonyme de la définition de l’infection.' },
      { text: 'Toute rougeur, indépendamment de sa cause.', correct: false, correction: 'Faux. Une rougeur peut être liée à une agression non infectieuse.' },
    ],
    explanation: 'Le support relie l’infection à un micro-organisme causal et à une réaction inflammatoire dans un contexte où sa présence est anormale. (Cours, p. 3)'
  },
  {
    id: 6,
    type: 'QRM',
    question: 'Pour interpréter un prélèvement microbien, quels éléments aident à conclure à une infection plutôt qu’à une simple présence de micro-organismes ?',
    options: [
      { text: 'Le seul caractère positif d’une culture, quel que soit le patient.', correct: false, correction: 'Faux. Une culture positive peut refléter une colonisation ou un microbiote normal.' },
      { text: 'Le site anatomique où l’agent est retrouvé.', correct: true, correction: 'Vrai. La signification dépend notamment du lieu du prélèvement.' },
      { text: 'L’obligation de donner des antibiotiques dès qu’un microbe est nommé.', correct: false, correction: 'Faux. La décision thérapeutique exige une interprétation clinique.' },
      { text: 'La réaction inflammatoire attribuable à cet agent.', correct: true, correction: 'Vrai. Elle fait partie de la définition pédagogique de l’infection.' },
      { text: 'Les signes cliniques compatibles avec une atteinte de ce site.', correct: true, correction: 'Vrai. Le contexte clinique aide à distinguer infection et portage.' },
    ],
    explanation: 'Le cours oppose infection et colonisation pour rappeler qu’un résultat microbiologique n’est pas un diagnostic autonome. (Cours, p. 3)'
  },
  {
    id: 7,
    type: 'QCM',
    question: 'Un ECBU correctement prélevé chez une femme adulte non enceinte, sans symptôme urinaire et sans geste urologique invasif prévu, retrouve une bactérie. Quelle est l’interprétation la plus prudente ?',
    options: [
      { text: 'Cette détection ne prouve pas une infection urinaire symptomatique et ne justifie généralement pas d’antibiotique.', correct: true, correction: 'Vrai. Une bactérie isolée à l’ECBU sans symptôme compatible ne constitue pas, dans ce contexte, une indication automatique d’antibiothérapie.' },
      { text: 'Un ECBU positif prouve une inflammation rénale.', correct: false, correction: 'Faux. Ce résultat ne localise pas à lui seul une atteinte rénale.' },
      { text: 'Une infection urinaire symptomatique est prouvée par l’ECBU seul.', correct: false, correction: 'Faux. Une bactérie dans les urines ne suffit pas à établir une infection symptomatique.' },
      { text: 'Il faut traiter seulement si la bactérie est Escherichia coli, même sans symptôme.', correct: false, correction: 'Faux. L’espèce isolée ne rend pas automatique le traitement d’une bactériurie asymptomatique.' },
      { text: 'Il faut toujours traiter afin de stériliser les urines.', correct: false, correction: 'Faux. Le traitement systématique expose à des effets indésirables et n’est pas indiqué ici.' },
    ],
    explanation: 'Le cours utilise l’ECBU positif sans signe d’infection comme exemple de présence bactérienne à ne pas traiter automatiquement. Une seule culture positive doit aussi être interprétée selon sa qualité et le contexte ; grossesse et certains gestes urologiques invasifs relèvent d’exceptions prévues par les recommandations actuelles. (Cours, p. 3)'
  },
  {
    id: 8,
    type: 'QRM',
    question: 'À propos d’une bactériurie sans symptômes urinaires, quelles propositions respectent la nuance clinique actuelle ?',
    options: [
      { text: 'Un résultat positif ne suffit pas à diagnostiquer une infection urinaire symptomatique.', correct: true, correction: 'Vrai. Le résultat doit être rapproché des signes et du contexte.' },
      { text: 'Un acte endourologique invasif avec traumatisme muqueux prévu peut justifier une prise en charge spécifique.', correct: true, correction: 'Vrai. Une bactériurie asymptomatique est recherchée et traitée avant certains gestes urologiques invasifs.' },
      { text: 'L’absence de symptômes permet d’affirmer qu’aucun suivi clinique n’est jamais utile.', correct: false, correction: 'Faux. L’interprétation reste individualisée ; les exceptions empêchent cette règle absolue.' },
      { text: 'La grossesse est une situation particulière où le dépistage et le traitement peuvent être indiqués.', correct: true, correction: 'Vrai. La bactériurie asymptomatique de la femme enceinte relève d’une recommandation spécifique.' },
      { text: 'Toute bactériurie asymptomatique doit recevoir le même antibiotique pendant la même durée.', correct: false, correction: 'Faux. L’indication et le choix du traitement dépendent du contexte et des recommandations.' },
    ],
    explanation: 'La règle pédagogique du cours est d’éviter l’antibiothérapie automatique devant un ECBU positif isolé ; grossesse et certains actes urologiques invasifs sont des exceptions cliniques à connaître. (Cours, p. 3)'
  },
  {
    id: 9,
    type: 'QCM',
    question: 'Une analyse de selles signale Escherichia coli chez un patient sans tableau évocateur d’infection digestive. Quel raisonnement est correct ?',
    options: [
      { text: 'Toute détection d’E. coli dans les selles prouve une dysenterie.', correct: false, correction: 'Faux. La présence de l’espèce ne suffit pas à attribuer une maladie digestive.' },
      { text: 'Une bactériémie est démontrée par l’analyse de selles.', correct: false, correction: 'Faux. La présence dans les selles ne renseigne pas directement sur le sang.' },
      { text: 'Les selles doivent normalement être stériles.', correct: false, correction: 'Faux. Le tube digestif contient une flore microbienne abondante.' },
      { text: 'Une antibiothérapie probabiliste est systématiquement nécessaire.', correct: false, correction: 'Faux. Un portage habituel ne justifie pas d’antibiotique automatique.' },
      { text: 'Cette seule détection peut correspondre à la flore digestive habituelle.', correct: true, correction: 'Vrai. Le cours rappelle qu’E. coli est normalement présent dans le tube digestif des mammifères.' },
    ],
    explanation: 'L’exemple d’E. coli dans les selles montre que la présence d’un micro-organisme peut être physiologique et doit être interprétée selon le site. (Cours, p. 3)'
  },
  {
    id: 10,
    type: 'QRM',
    question: 'Quelles conclusions sont justifiées par la seule détection d’E. coli dans les selles d’un mammifère ?',
    options: [
      { text: 'Le résultat doit être interprété avec le tableau clinique avant de parler d’infection.', correct: true, correction: 'Vrai. Le site et les symptômes déterminent la signification du résultat.' },
      { text: 'E. coli peut faire partie du microbiote digestif habituel.', correct: true, correction: 'Vrai. Le cours souligne sa présence normale dans les selles des mammifères.' },
      { text: 'Une prescription antibiotique automatique serait un mauvais raisonnement.', correct: true, correction: 'Vrai. La présence habituelle de l’espèce ne constitue pas une indication thérapeutique.' },
      { text: 'Une infection invasive est démontrée.', correct: false, correction: 'Faux. Une analyse de selles positive ne prouve pas une invasion tissulaire.' },
      { text: 'Toutes les souches d’E. coli présentes dans les selles ont la même pathogénicité.', correct: false, correction: 'Faux. Le nom de l’espèce seul ne caractérise ni une souche pathogène ni un syndrome.' },
    ],
    explanation: 'L’exemple illustre la différence entre identifier une espèce dans son habitat habituel et démontrer qu’elle cause une maladie. (Cours, p. 3)'
  },
  {
    id: 11,
    type: 'QCM',
    question: 'Pourquoi le cours insiste-t-il sur la distinction entre colonisation et infection avant de prescrire un antibiotique ?',
    options: [
      { text: 'Pour éviter les antibiothérapies inutiles devant une simple présence bactérienne.', correct: true, correction: 'Vrai. C’est l’application pratique centrale du passage sur le bon usage des antibiotiques.' },
      { text: 'Parce que le microbiote digestif est stérile chez l’adulte.', correct: false, correction: 'Faux. Le microbiote digestif contient de très nombreux micro-organismes.' },
      { text: 'Parce que toute culture positive traduit une maladie transmissible.', correct: false, correction: 'Faux. Une culture positive peut refléter un portage sans maladie.' },
      { text: 'Pour remplacer l’examen clinique par l’ECBU.', correct: false, correction: 'Faux. Le cours demande au contraire de contextualiser le prélèvement.' },
      { text: 'Parce que toute inflammation se traite par antibiotique.', correct: false, correction: 'Faux. Une inflammation peut avoir une cause non infectieuse.' },
    ],
    explanation: 'Le slogan « les antibiotiques, ce n’est pas automatique » s’appuie ici sur une interprétation correcte de la présence microbienne. (Cours, p. 3)'
  },
  {
    id: 12,
    type: 'QRM',
    question: 'Dans une démarche de bon usage des antibiotiques, quelles pratiques sont cohérentes avec les exemples du cours ?',
    options: [
      { text: 'Tenir compte du fait qu’E. coli peut habiter normalement le tube digestif.', correct: true, correction: 'Vrai. Son identification dans les selles ne suffit pas à justifier un traitement.' },
      { text: 'Prescrire systématiquement si un laboratoire nomme une bactérie.', correct: false, correction: 'Faux. Le laboratoire ne remplace pas l’interprétation clinique.' },
      { text: 'Traiter chaque colonisation pour éviter de perturber le microbiote.', correct: false, correction: 'Faux. Traiter inutilement une colonisation peut au contraire perturber les écosystèmes microbiens.' },
      { text: 'Rechercher des signes compatibles avec une infection avant de traiter un ECBU positif.', correct: true, correction: 'Vrai. Le cours oppose bactérie détectée et infection urinaire clinique.' },
      { text: 'Distinguer l’inflammation non infectieuse de l’inflammation liée à un microbe.', correct: true, correction: 'Vrai. Une agression stérile peut susciter une réaction de l’hôte.' },
    ],
    explanation: 'Le diagnostic doit relier la microbiologie au site et à la clinique ; la seule détection d’un microbe ne commande pas une antibiothérapie. (Cours, p. 3)'
  },
  {
    id: 13,
    type: 'QCM',
    question: 'Quel personnage est associé dans le support aux quatre signes classiques « rubor, calor, dolor, tumor » ?',
    options: [
      { text: 'Bretonneau.', correct: false, correction: 'Faux. Bretonneau est lié à la spécificité des maladies infectieuses.' },
      { text: 'Celsus.', correct: true, correction: 'Vrai. Le cours lui attribue cette formulation des signes de l’inflammation.' },
      { text: 'Ehrlich.', correct: false, correction: 'Faux. Ehrlich est associé à la réponse immunitaire humorale spécifique.' },
      { text: 'Metchnikoff.', correct: false, correction: 'Faux. Metchnikoff est associé au rôle des globules blancs.' },
      { text: 'Pasteur.', correct: false, correction: 'Faux. Pasteur est ici associé au lien entre microbes et maladies et à la réfutation de la génération spontanée.' },
    ],
    explanation: 'Celsus a formulé les quatre signes classiques d’inflammation cités par le cours. (Cours, p. 2)'
  },
  {
    id: 14,
    type: 'QRM',
    question: 'Parmi les associations historiques suivantes, lesquelles correspondent au rappel du cours ?',
    options: [
      { text: 'Ehrlich — première culture microbienne.', correct: false, correction: 'Faux. Le cours attribue les premières cultures microbiennes à Spallanzani.' },
      { text: 'Hippocrate — premières descriptions de signes de l’inflammation.', correct: true, correction: 'Vrai. Le cours situe chez Hippocrate une première description de ces signes.' },
      { text: 'Pasteur — découverte du microscope.', correct: false, correction: 'Faux. Le microscope et la première description de microbes sont attribués à Van Leeuwenhoek dans le support.' },
      { text: 'Celsus — rougeur, chaleur, douleur et tuméfaction.', correct: true, correction: 'Vrai. Les termes latins rubor, calor, dolor et tumor lui sont attribués.' },
      { text: 'Galien — ajout de la perte de fonction, « functio laesa ».', correct: true, correction: 'Vrai. Le cours associe ce cinquième signe à Galien.' },
    ],
    explanation: 'Le rappel historique distingue la description clinique de l’inflammation des découvertes microbiologiques ultérieures. (Cours, p. 2)'
  },
  {
    id: 15,
    type: 'QCM',
    question: 'Dans le rappel historique, quelle contribution majeure le cours attribue-t-il à Bretonneau ?',
    options: [
      { text: 'La découverte du rôle des globules blancs.', correct: false, correction: 'Faux. Elle est attribuée à Metchnikoff.' },
      { text: 'La première description du microscope.', correct: false, correction: 'Faux. Le cours associe ce travail à Van Leeuwenhoek.' },
      { text: 'La première culture microbienne.', correct: false, correction: 'Faux. Cette contribution est attribuée à Spallanzani.' },
      { text: 'La théorie de la spécificité des maladies infectieuses.', correct: true, correction: 'Vrai. Le cours lui associe cette idée, importante pour concevoir chaque maladie infectieuse comme entité propre.' },
      { text: 'La formulation des quatre signes latins de l’inflammation.', correct: false, correction: 'Faux. Ces signes sont associés à Celsus.' },
    ],
    explanation: 'Bretonneau illustre l’émergence de l’idée que les maladies infectieuses possèdent une spécificité étiologique. (Cours, p. 2)'
  },
  {
    id: 16,
    type: 'QRM',
    question: 'Quelles associations du XIXe siècle sont exactes selon le support ?',
    options: [
      { text: 'Pasteur — réfutation de la génération spontanée et mise en évidence du lien entre microbes et maladies.', correct: true, correction: 'Vrai. Ces contributions lui sont attribuées dans le rappel historique.' },
      { text: 'Bretonneau — démonstration que toutes les maladies infectieuses sont une seule et même maladie.', correct: false, correction: 'Faux. Sa théorie porte au contraire sur leur spécificité.' },
      { text: 'Spallanzani — découverte de la vaccination au XIXe siècle.', correct: false, correction: 'Faux. Le support le situe plus tôt et lui attribue la première culture microbienne.' },
      { text: 'Ehrlich — réponse immunitaire spécifique humorale.', correct: true, correction: 'Vrai. Cette contribution figure dans le support.' },
      { text: 'Metchnikoff — rôle des globules blancs dans les défenses de l’organisme.', correct: true, correction: 'Vrai. Le cours le relie à cette découverte.' },
    ],
    explanation: 'Le cours retrace le passage des observations cliniques à l’identification des microbes et des mécanismes de défense. (Cours, p. 2)'
  },
  {
    id: 17,
    type: 'QCM',
    question: 'Après une greffe, un tissu présente une réaction inflammatoire sans argument pour une cause microbienne. Quelle conclusion découle des définitions du cours ?',
    options: [
      { text: 'L’absence de bactérie prouve une colonisation.', correct: false, correction: 'Faux. Une colonisation suppose la présence d’un micro-organisme.' },
      { text: 'Une infection bactérienne est prouvée par toute inflammation.', correct: false, correction: 'Faux. L’inflammation est une réponse non spécifique à diverses agressions.' },
      { text: 'La greffe exclut toute activation des défenses de l’hôte.', correct: false, correction: 'Faux. Elle peut précisément provoquer une réaction inflammatoire.' },
      { text: 'La prescription antibiotique est automatique dès qu’apparaît une rougeur.', correct: false, correction: 'Faux. Une rougeur n’établit pas à elle seule une infection bactérienne.' },
      { text: 'Une inflammation peut exister sans infection.', correct: true, correction: 'Vrai. La greffe fait partie des agressions non nécessairement infectieuses citées comme causes d’inflammation.' },
    ],
    explanation: 'Le cours cite la greffe parmi les situations où l’hôte peut réagir par inflammation sans que cela définisse automatiquement une infection. (Cours, p. 2)'
  },
  {
    id: 18,
    type: 'QRM',
    question: 'Un étudiant classe les situations suivantes. Quelles correspondances sont correctes selon les définitions pédagogiques du support ?',
    options: [
      { text: 'Microbe trouvé dans les selles — infection digestive prouvée.', correct: false, correction: 'Faux. Une espèce telle qu’E. coli peut relever du microbiote normal.' },
      { text: 'Présence microbienne sans réaction inflammatoire — colonisation.', correct: true, correction: 'Vrai. C’est la définition donnée de la colonisation.' },
      { text: 'Fracture sans microbe causal — inflammation possiblement stérile.', correct: true, correction: 'Vrai. Une fracture peut induire une réaction de l’hôte sans infection.' },
      { text: 'Micro-organisme causal dans un site anormal avec réaction inflammatoire — infection.', correct: true, correction: 'Vrai. Les éléments de la définition de l’infection sont réunis.' },
      { text: 'ECBU positif sans symptômes — infection urinaire symptomatique certaine.', correct: false, correction: 'Faux. La positivité du prélèvement ne suffit pas à conclure à une infection symptomatique.' },
    ],
    explanation: 'Ces trois situations illustrent que l’inflammation, la colonisation et l’infection ne sont pas interchangeables. (Cours, p. 2-3)'
  },
  {
    id: 19,
    type: 'QCM',
    question: 'Un prélèvement profond d’un site normalement stérile identifie un agent causal et une réaction inflammatoire locale lui est attribuée. Quelle catégorie correspond le mieux au tableau ?',
    options: [
      { text: 'Un microbiote digestif physiologique.', correct: false, correction: 'Faux. Le site est normalement stérile et n’est pas le tube digestif.' },
      { text: 'Une colonisation sans réaction de l’hôte.', correct: false, correction: 'Faux. Une réaction inflammatoire causée par l’agent est décrite.' },
      { text: 'Une simple détection sans signification clinique.', correct: false, correction: 'Faux. Le scénario précise le rôle causal de l’agent et une atteinte locale.' },
      { text: 'Une inflammation nécessairement stérile.', correct: false, correction: 'Faux. Un agent microbien causal est identifié.' },
      { text: 'Une infection.', correct: true, correction: 'Vrai. Le micro-organisme causal et la réaction inflammatoire dans ce site réunissent les critères du cours.' },
    ],
    explanation: 'Dans la définition du cours, l’infection associe la présence anormale d’un micro-organisme causal à une réaction inflammatoire. (Cours, p. 3)'
  },
  {
    id: 20,
    type: 'QRM',
    question: 'Concernant l’interprétation de résultats microbiologiques et la prescription d’antibiotiques, quelles propositions sont justes ?',
    options: [
      { text: 'Une réaction inflammatoire suffit à prouver que la cause est bactérienne.', correct: false, correction: 'Faux. Une fracture ou une greffe peuvent provoquer une inflammation non bactérienne.' },
      { text: 'Toute bactériurie asymptomatique, y compris pendant une grossesse, doit rester sans traitement.', correct: false, correction: 'Faux. Les recommandations prévoient des exceptions, dont la grossesse ; la règle du cours ne doit pas être absolutisée.' },
      { text: 'Une bactérie dans les urines sans symptôme attribuable n’équivaut pas à une infection urinaire symptomatique.', correct: true, correction: 'Vrai. Il faut distinguer bactériurie asymptomatique et infection clinique.' },
      { text: 'La présence d’E. coli dans les selles peut être normale.', correct: true, correction: 'Vrai. L’espèce appartient habituellement au microbiote digestif.' },
      { text: 'Traiter systématiquement un portage bactérien peut exposer à une prescription inutile.', correct: true, correction: 'Vrai. Le cours insiste sur le bon usage et les conséquences des antibiothérapies non justifiées.' },
    ],
    explanation: 'Les exemples d’ECBU et de selles montrent qu’une bactérie détectée doit être interprétée dans son contexte ; l’antibiothérapie d’une bactériurie asymptomatique n’est généralement pas indiquée, avec des exceptions cliniques. (Cours, p. 3)'
  },
  {
    id: 21,
    type: 'QCM',
    question: 'Quel ordre de grandeur le cours donne-t-il pour le nombre de bactéries hébergées par l\'être humain ?',
    options: [
      { text: 'Environ 10³ bactéries, beaucoup moins que les cellules humaines', correct: false, correction: 'Non : l\'estimation est de l\'ordre de 10¹³.' },
      { text: 'Environ 10¹³ bactéries, un ordre de grandeur voisin de celui des cellules humaines', correct: true, correction: 'Oui : le support donne environ 4 × 10¹³ bactéries et 3 × 10¹³ cellules humaines, à titre d\'estimations.' },
      { text: 'Environ 10²⁵ bactéries, des milliards de fois plus que les cellules humaines', correct: false, correction: 'Non : les deux effectifs sont présentés comme voisins en ordre de grandeur.' },
      { text: 'Exactement autant de bactéries que de cellules humaines chez toute personne', correct: false, correction: 'Non : il s\'agit d\'estimations, pas d\'une égalité individuelle fixe.' },
      { text: 'Aucune bactérie chez un sujet sain', correct: false, correction: 'Non : héberger des bactéries est une situation normale.' },
    ],
    explanation: 'Le cours compare des estimations, autour de 3 × 10¹³ cellules humaines et 4 × 10¹³ bactéries hébergées. Retenir l\'ordre de grandeur, pas des effectifs exacts pour chacun. (Cours, p. 3)'
  },
  {
    id: 22,
    type: 'QRM',
    question: 'À propos des écosystèmes microbiens du corps humain, quelles propositions sont compatibles avec le cours ?',
    options: [
      { text: 'La composition des communautés microbiennes varie selon les organes', correct: true, correction: 'Oui : chaque organe est décrit comme abritant un écosystème différent.' },
      { text: 'Une analyse de la bouche décrit nécessairement tous les microbiotes de l\'organisme', correct: false, correction: 'Non : un site ne représente pas tous les organes.' },
      { text: 'La peau et la bouche constituent des sites microbiens distincts', correct: true, correction: 'Oui : ces deux sites illustrent la diversité des écosystèmes.' },
      { text: 'La présence de bactéries sur la peau prouve à elle seule une infection', correct: false, correction: 'Non : la peau peut être colonisée sans réaction inflammatoire.' },
      { text: 'Les effectifs bactériens cités pour chaque site sont des ordres de grandeur', correct: true, correction: 'Oui : ils illustrent la colonisation des sites sans fixer une valeur universelle.' },
    ],
    explanation: 'Les microbiotes varient entre organes ; la peau et la bouche illustrent cette organisation en écosystèmes locaux. (Cours, p. 3)'
  },
  {
    id: 23,
    type: 'QCM',
    question: 'Quel ensemble reflète le mieux les organismes évoqués dans le microbiote digestif du cours ?',
    options: [
      { text: 'Bactéries, virus, champignons, parasites et phages', correct: true, correction: 'Oui : cette liste reprend la diversité citée ; les phages sont des virus de bactéries.' },
      { text: 'Des bactéries pathogènes uniquement', correct: false, correction: 'Non : un microbiote peut être présent sans infection.' },
      { text: 'Des bactéries seulement', correct: false, correction: 'Non : d\'autres micro-organismes sont aussi mentionnés.' },
      { text: 'Des cellules immunitaires humaines seulement', correct: false, correction: 'Non : elles appartiennent à l\'hôte.' },
      { text: 'Des champignons seulement', correct: false, correction: 'Non : ils ne sont qu\'une des catégories mentionnées.' },
    ],
    explanation: 'Le microbiote digestif n\'est pas réductible aux bactéries : le cours cite aussi virus, champignons, parasites et phages. (Cours, p. 3)'
  },
  {
    id: 24,
    type: 'QRM',
    question: 'Concernant la flore digestive décrite dans le cours, quelles affirmations sont justes ?',
    options: [
      { text: 'Le cours insiste sur une forte diversité d\'espèces', correct: true, correction: 'Oui : il évoque plus de 500 espèces, chiffre indicatif dépendant des méthodes et des populations.' },
      { text: 'Toute la flore digestive exige de l\'oxygène pour survivre', correct: false, correction: 'Non : le cours souligne au contraire la prédominance des anaérobies stricts.' },
      { text: 'Une très grande part est constituée d\'anaérobies stricts', correct: true, correction: 'Oui : le cours indique plus de 95 %, comme caractéristique générale de son exposé.' },
      { text: 'Une seule espèce bactérienne compose normalement tout le microbiote', correct: false, correction: 'Non : le support décrit une communauté très diverse.' },
      { text: 'Des groupes appelés Firmicutes et Bacteroidetes y sont cités', correct: true, correction: 'Oui : ce sont les noms employés dans le support.' },
    ],
    explanation: 'Le support décrit une flore digestive diverse et surtout anaérobie stricte ; Firmicutes et Bacteroidetes sont cités dans sa nomenclature. Les chiffres sont des ordres de grandeur. (Cours, p. 3)'
  },
  {
    id: 25,
    type: 'QCM',
    question: 'Dans le cours, quel type de micro-organismes domine la flore digestive ?',
    options: [
      { text: 'Les cellules épithéliales du côlon', correct: false, correction: 'Non : ce sont des cellules de l\'hôte, pas des microbes du microbiote.' },
      { text: 'Les anaérobies stricts', correct: true, correction: 'Oui : ils sont indiqués comme très majoritaires dans le support.' },
      { text: 'Les bactéries aérobies obligatoires', correct: false, correction: 'Non : la flore est décrite comme surtout anaérobie stricte.' },
      { text: 'Les parasites pluricellulaires', correct: false, correction: 'Non : les parasites ne sont pas présentés comme dominants.' },
      { text: 'Les champignons aérobies', correct: false, correction: 'Non : les champignons sont cités sans être la fraction majoritaire annoncée.' },
    ],
    explanation: 'Le cours caractérise la flore digestive par une forte prédominance d\'anaérobies stricts, indiquée comme supérieure à 95 % dans son exposé. (Cours, p. 3)'
  },
  {
    id: 26,
    type: 'QRM',
    question: 'Quels rôles du microbiote digestif sont explicitement mentionnés dans le cours ?',
    options: [
      { text: 'Une participation à la défense immunitaire', correct: true, correction: 'Oui : le cours lui attribue ce rôle.' },
      { text: 'La garantie qu\'aucun agent infectieux ne peut provoquer de maladie', correct: false, correction: 'Non : contribuer à la défense ne supprime pas tout risque infectieux.' },
      { text: 'Une contribution aux apports en nutriments, minéraux et vitamines', correct: true, correction: 'Oui : ces apports font partie des rôles décrits.' },
      { text: 'Une participation à la digestion', correct: true, correction: 'Oui : la digestion est citée parmi ses fonctions.' },
      { text: 'La production des globules rouges à la place de la moelle osseuse', correct: false, correction: 'Non : cette fonction ne lui est pas attribuée.' },
    ],
    explanation: 'Le microbiote digestif participe à la digestion, aux apports nutritionnels et aux défenses immunitaires ; ce sont des contributions, non des fonctions exclusives. (Cours, p. 3)'
  },
  {
    id: 27,
    type: 'QCM',
    question: 'Quel lien le cours établit-il entre microbiote digestif et immunité ?',
    options: [
      { text: 'Le microbiote remplace entièrement les cellules immunitaires', correct: false, correction: 'Non : il interagit avec l\'immunité sans la remplacer.' },
      { text: 'L\'immunité ne se développe qu\'après disparition du microbiote', correct: false, correction: 'Non : l\'interaction avec le microbiote est mise en avant.' },
      { text: 'Seuls les virus du microbiote interagissent avec l\'immunité', correct: false, correction: 'Non : le cours présente une communauté complexe en interaction avec l\'hôte.' },
      { text: 'Le microbiote empêche toute inflammation, quelle qu\'en soit la cause', correct: false, correction: 'Non : aucune protection absolue n\'est affirmée.' },
      { text: 'Le microbiote contribue à l\'éducation et à la maturation immunitaires', correct: true, correction: 'Oui : le cours dit qu\'il entraîne l\'immunité pour qu\'elle mûrisse.' },
    ],
    explanation: 'Le microbiote digestif participe à l\'apprentissage et à la maturation de l\'immunité. (Cours, p. 3)'
  },
  {
    id: 28,
    type: 'QRM',
    question: 'Quelles conclusions sont compatibles avec le caractère évolutif du microbiote décrit dans le cours ?',
    options: [
      { text: 'Un prélèvement réalisé un jour donne une photographie d\'un état à ce moment', correct: true, correction: 'Oui : il ne définit pas nécessairement un état permanent.' },
      { text: 'Toute variation impose automatiquement un antibiotique', correct: false, correction: 'Non : un changement de composition n\'est pas en soi une indication thérapeutique.' },
      { text: 'Sa composition peut changer au cours du temps', correct: true, correction: 'Oui : elle n\'est pas figée à vie.' },
      { text: 'Ses interactions avec l\'immunité s\'inscrivent dans cette évolution', correct: true, correction: 'Oui : le support rapproche l\'évolution du microbiote et la maturation immunitaire.' },
      { text: 'Une composition observée un jour est obligatoirement identique des décennies plus tard', correct: false, correction: 'Non : cela contredit le caractère évolutif.' },
    ],
    explanation: 'Le cours décrit un microbiote dynamique, lié notamment à la maturation de l\'immunité. Une observation ponctuelle n\'établit pas une composition permanente. (Cours, p. 3)'
  },
  {
    id: 29,
    type: 'QCM',
    question: 'Des prélèvements de l\'estomac et du côlon révèlent des profils microbiens différents. Quelle interprétation correspond au cours ?',
    options: [
      { text: 'Il s\'agit nécessairement d\'une erreur de laboratoire', correct: false, correction: 'Non : des profils différents sont attendus selon les sites.' },
      { text: 'Tout le tube digestif a normalement le même profil que les selles', correct: false, correction: 'Non : les selles n\'en captent qu\'une partie.' },
      { text: 'Le côlon devrait être stérile chez un sujet sain', correct: false, correction: 'Non : il possède un microbiote.' },
      { text: 'Les segments du tube digestif hébergent des communautés distinctes', correct: true, correction: 'Oui : estomac, intestin grêle et côlon sont explicitement distingués.' },
      { text: 'La différence prouve une maladie infectieuse dans l\'un des organes', correct: false, correction: 'Non : la variation selon le site est physiologique en elle-même.' },
    ],
    explanation: 'Le microbiote varie le long du tube digestif : estomac, intestin grêle et côlon ne sont pas interchangeables. (Cours, p. 3)'
  },
  {
    id: 30,
    type: 'QRM',
    question: 'Dans le côlon, quels compartiments le cours distingue-t-il du point de vue de leur microbiote ?',
    options: [
      { text: 'La lumière intestinale', correct: true, correction: 'Oui : elle est citée comme autre niche.' },
      { text: 'Une unique communauté homogène de la paroi à la lumière', correct: false, correction: 'Non : le cours souligne des différences locales.' },
      { text: 'Les cryptes', correct: true, correction: 'Oui : elles sont citées comme niche particulière.' },
      { text: 'Le tissu osseux du côlon', correct: false, correction: 'Non : ce n\'est pas un compartiment colique.' },
      { text: 'La muqueuse', correct: true, correction: 'Oui : le microbiote associé à la muqueuse est distingué.' },
    ],
    explanation: 'Même dans un seul organe, le côlon, le support distingue cryptes, muqueuse et lumière : le microbiote a une distribution locale. (Cours, p. 3)'
  },
  {
    id: 31,
    type: 'QCM',
    question: 'Une étude analyse uniquement des selles. Quelle conclusion respecte la limite méthodologique signalée dans le cours ?',
    options: [
      { text: 'Elle n\'apporte jamais aucune information sur le microbiote', correct: false, correction: 'Non : elle est utile, mais partielle.' },
      { text: 'Elle démontre que l\'estomac a les mêmes microbes que le côlon', correct: false, correction: 'Non : les sites digestifs diffèrent.' },
      { text: 'Elle donne une image partielle du microbiote digestif', correct: true, correction: 'Oui : le cours précise que les selles n\'en captent qu\'une partie.' },
      { text: 'Elle renseigne sans réserve sur chaque niche de l\'organisme', correct: false, correction: 'Non : un échantillon ne décrit pas toutes les niches.' },
      { text: 'Elle décrit parfaitement toutes les cryptes du côlon', correct: false, correction: 'Non : ces communautés ne sont pas entièrement représentées par les selles.' },
    ],
    explanation: 'Les analyses de selles renseignent sur une partie du microbiote sans représenter parfaitement tous les segments et toutes les niches du tube digestif. (Cours, p. 3)'
  },
  {
    id: 32,
    type: 'QRM',
    question: 'Pour interpréter une analyse fécale dans une étude du microbiote, quelles précautions sont justifiées par le cours ?',
    options: [
      { text: 'Préciser que l\'échantillon analysé provient des selles', correct: true, correction: 'Oui : sa provenance détermine la portée de l\'observation.' },
      { text: 'Éviter de généraliser automatiquement à l\'estomac et à l\'intestin grêle', correct: true, correction: 'Oui : leurs communautés diffèrent de celles du côlon.' },
      { text: 'Conclure que tous les micro-organismes digestifs ont été recensés exhaustivement', correct: false, correction: 'Non : l\'échantillonnage fécal est partiel.' },
      { text: 'Reconnaître que cryptes et muqueuse coliques peuvent être imparfaitement représentées', correct: true, correction: 'Oui : le microbiote de ces niches n\'est pas identique à celui de la lumière.' },
      { text: 'Déclarer une infection dès qu\'un micro-organisme est détecté dans les selles', correct: false, correction: 'Non : la détection isolée ne prouve pas une infection.' },
    ],
    explanation: 'Un résultat fécal doit être rapporté à son site de prélèvement ; les différences entre segments et niches interdisent d\'en déduire automatiquement la composition de tout le microbiote. (Cours, p. 3)'
  },
  {
    id: 33,
    type: 'QCM',
    question: 'Dans le vocabulaire du cours, que désigne une dysbiose ?',
    options: [
      { text: 'Une absence congénitale de toutes les cellules immunitaires', correct: false, correction: 'Non : la dysbiose concerne l\'équilibre de la flore.' },
      { text: 'La présence stable de micro-organismes sans déséquilibre', correct: false, correction: 'Non : la dysbiose suppose au contraire un déséquilibre.' },
      { text: 'Une augmentation obligatoire du nombre de bactéries dans tous les organes', correct: false, correction: 'Non : un déséquilibre ne se réduit pas à une augmentation globale de quantité.' },
      { text: 'Un déséquilibre de la flore microbienne', correct: true, correction: 'Oui : c\'est le sens donné explicitement par le cours.' },
      { text: 'Une infection prouvée dès qu\'une bactérie apparaît dans un prélèvement', correct: false, correction: 'Non : dysbiose et infection clinique sont distinctes.' },
    ],
    explanation: 'Le cours emploie « dysbiose » pour un déséquilibre de la flore ; ce terme ne signifie pas à lui seul une infection clinique. (Cours, p. 3)'
  },
  {
    id: 34,
    type: 'QRM',
    question: 'Un antibiotique est donné alors qu\'une simple colonisation cutanée ou urinaire ne justifie pas ce traitement. Quels effets possibles le cours met-il en avant ?',
    options: [
      { text: 'Une dysbiose', correct: true, correction: 'Oui : c\'est le risque décrit après perturbation de cet équilibre.' },
      { text: 'L\'absence garantie d\'effet sur les autres micro-organismes', correct: false, correction: 'Non : le cours souligne justement un effet possible sur les communautés microbiennes.' },
      { text: 'La preuve rétrospective que la colonisation était une infection', correct: false, correction: 'Non : donner un antibiotique ne change pas la situation initiale.' },
      { text: 'Une perturbation de l\'équilibre de l\'écosystème microbien', correct: true, correction: 'Oui : le traitement modifie une flore présente dans son écosystème.' },
      { text: 'Des effets secondaires associés à cette perturbation', correct: true, correction: 'Oui : le cours évoque des effets secondaires possibles.' },
    ],
    explanation: 'Le support relie l\'antibiothérapie inutile d\'une colonisation à la perturbation d\'un écosystème, avec risque de dysbiose et d\'effets secondaires. Les indications particulières dépendent du contexte clinique. (Cours, p. 3-4)'
  },
  {
    id: 35,
    type: 'QCM',
    question: 'D\'après les ordres de grandeur illustratifs du cours (peau : 10¹² ; bouche : 10¹⁰ bactéries), quel est le rapport approximatif peau/bouche ?',
    options: [
      { text: 'Environ 10', correct: false, correction: 'Non : un facteur 10 correspondrait à une différence d\'un seul ordre de grandeur.' },
      { text: 'Environ 2', correct: false, correction: 'Non : les exposants diffèrent de deux unités, ce qui donne un facteur 10², pas 2.' },
      { text: 'Environ 100', correct: true, correction: 'Oui : 10¹² ÷ 10¹⁰ = 10², soit environ 100 ; ces chiffres sont des estimations illustratives.' },
      { text: 'Environ 1 000', correct: false, correction: 'Non : un facteur 1 000 correspondrait à trois ordres de grandeur ; ici il y en a deux.' },
      { text: 'Environ 10¹²', correct: false, correction: 'Non : 10¹² est l\'estimation de l\'effectif cutané donnée dans le cours, pas le rapport entre les deux estimations.' },
    ],
    explanation: 'Le support donne environ 10¹² bactéries pour la peau et 10¹⁰ pour la bouche : leur rapport illustratif est donc de l\'ordre de 10², soit 100. Il ne faut pas interpréter ces valeurs comme des effectifs exacts chez chaque personne. (Cours, p. 3)'
  },
  {
    id: 36,
    type: 'QRM',
    question: 'Quelles propositions distinguent correctement une présence microbienne d\'une infection dans le raisonnement écologique du cours ?',
    options: [
      { text: 'Le microbiote est identique dans tous les organes', correct: false, correction: 'Non : les écosystèmes diffèrent selon les sites.' },
      { text: 'Une communauté microbienne peut exister sur un site sain', correct: true, correction: 'Oui : le cours décrit notamment les écosystèmes cutané et digestif.' },
      { text: 'Tout micro-organisme détecté doit être éliminé immédiatement', correct: false, correction: 'Non : cela confond colonisation physiologique et infection.' },
      { text: 'Une antibiothérapie injustifiée peut déstabiliser une communauté microbienne', correct: true, correction: 'Oui : c\'est le risque de dysbiose exposé.' },
      { text: 'Le site de prélèvement et le contexte clinique comptent pour interpréter une détection', correct: true, correction: 'Oui : la signification d\'un résultat varie selon le site et les signes associés.' },
    ],
    explanation: 'La signification d\'une détection dépend de la niche et du contexte clinique ; traiter sans indication une simple présence microbienne peut perturber l\'écosystème. (Cours, p. 3-4)'
  },
  {
    id: 37,
    type: 'QCM',
    question: 'Quelle affirmation résume le mieux les interactions entre microbiote et hôte présentées dans le cours ?',
    options: [
      { text: 'Elles ont toutes été complètement élucidées', correct: false, correction: 'Non : le cours souligne que la recherche se poursuit.' },
      { text: 'Elles sont identiques quel que soit le site anatomique', correct: false, correction: 'Non : les écosystèmes diffèrent entre organes et niches.' },
      { text: 'Elles se limitent à la digestion des lipides', correct: false, correction: 'Non : le rôle du microbiote est plus large, notamment immunitaire.' },
      { text: 'Elles sont multiples et interviennent dans des processus physiologiques et pathologiques', correct: true, correction: 'Oui : le support insiste sur leur complexité et leurs effets variés.' },
      { text: 'Elles n\'existent que lorsqu\'une infection est déclarée', correct: false, correction: 'Non : elles existent aussi à l\'état habituel.' },
    ],
    explanation: 'Le cours décrit des relations complexes entre micro-organismes et hôte, impliquées dans des phénomènes physiologiques comme pathologiques. (Cours, p. 3)'
  },
  {
    id: 38,
    type: 'QRM',
    question: 'Une équipe étudie le microbiote au moyen de méthodes génomiques. Quelles interprétations restent fidèles au cours ?',
    options: [
      { text: 'Ces méthodes ont fortement développé l\'étude des communautés microbiennes', correct: true, correction: 'Oui : le cours relie l\'essor de la génomique à l\'expansion des études du microbiote.' },
      { text: 'Une méthode génomique rend toute analyse de selles exhaustive pour le côlon', correct: false, correction: 'Non : une méthode performante ne supprime pas les limites du prélèvement.' },
      { text: 'Toute différence entre profils génomiques prouve une maladie infectieuse', correct: false, correction: 'Non : la composition peut varier selon les sites, les niches ou le temps.' },
      { text: 'Les liens entre microbiote et éducation immunitaire font encore l\'objet de découvertes', correct: true, correction: 'Oui : le support indique que la connaissance de ces liens reste en développement.' },
      { text: 'La complexité du microbiote impose de considérer les sites et niches étudiés', correct: true, correction: 'Oui : la variabilité entre organes et compartiments demeure importante.' },
    ],
    explanation: 'La génomique a enrichi l\'étude du microbiote, mais l\'interprétation reste tributaire de l\'échantillonnage et de l\'hétérogénéité spatiale et temporelle. (Cours, p. 3)'
  },
  {
    id: 39,
    type: 'QCM',
    question: 'Quel exemple le professeur utilise-t-il pour illustrer une application de la modification d\'un microbiote hors du tube digestif humain ?',
    options: [
      { text: 'La transformation du microbiote cutané humain en cellules sanguines', correct: false, correction: 'Non : le cours ne décrit pas une telle transformation.' },
      { text: 'La stérilisation des femelles moustiques par une analyse de selles humaines', correct: false, correction: 'Non : l\'exemple porte sur les mâles moustiques tigres et une modification de leur microbiote.' },
      { text: 'Le remplacement systématique des bactéries intestinales par des virus', correct: false, correction: 'Non : aucune stratégie de ce type n\'est présentée.' },
      { text: 'L\'élimination de tout microbiote chez les plantes par vaccination', correct: false, correction: 'Non : ce n\'est pas l\'exemple donné.' },
      { text: 'Une stratégie de stérilisation de moustiques tigres mâles en modifiant leur microbiote', correct: true, correction: 'Oui : c\'est l\'exemple d\'application évoqué dans le cours.' },
    ],
    explanation: 'Pour montrer que les écosystèmes microbiens ont des implications au-delà de la flore digestive humaine, le professeur cite une stratégie de stérilisation de moustiques tigres mâles par modification de leur microbiote. (Cours, p. 3)'
  },
  {
    id: 40,
    type: 'QRM',
    question: 'Un étudiant veut résumer le microbiote digestif. Quelles formulations sont correctes d\'après le cours ?',
    options: [
      { text: 'Un antibiotique donné sans indication ne peut pas affecter son équilibre', correct: false, correction: 'Non : le risque de déséquilibre et de dysbiose est mentionné.' },
      { text: 'C\'est une communauté diversifiée, majoritairement anaérobie dans le tube digestif', correct: true, correction: 'Oui : diversité et prédominance des anaérobies stricts sont soulignées.' },
      { text: 'Un prélèvement de selles restitue parfaitement toutes ses composantes', correct: false, correction: 'Non : il n\'en capte qu\'une partie.' },
      { text: 'Sa composition varie selon le segment digestif et, dans le côlon, selon la niche', correct: true, correction: 'Oui : estomac, grêle, côlon et compartiments coliques sont distingués.' },
      { text: 'Il participe à des fonctions métaboliques et immunitaires', correct: true, correction: 'Oui : digestion, apports nutritionnels et éducation immunitaire sont cités.' },
    ],
    explanation: 'Le microbiote digestif est divers, spatialement hétérogène, fonctionnel et dynamique. Les selles n\'en donnent qu\'un aperçu partiel, et une antibiothérapie injustifiée peut le perturber. (Cours, p. 3-4)'
  },
  {
    id: 41,
    type: 'QCM',
    question: 'Une maladie est dite infectieuse. Quelle affirmation interprète le plus justement sa capacité de transmission ?',
    options: [
      { text: 'Elle est nécessairement transmise par un insecte vecteur.', correct: false, correction: 'Les vecteurs ne concernent qu\'une partie des infections.' },
      { text: 'Sa voie de transmission est déduite uniquement de la présence d\'une inflammation.', correct: false, correction: 'L\'inflammation ne renseigne pas à elle seule sur le mode de transmission.' },
      { text: 'Elle peut être transmise par diverses voies ; une transmission directe d\'une personne à une autre n\'est pas obligatoire.', correct: true, correction: 'Une transmission peut impliquer un réservoir, un vecteur ou l\'environnement ; elle n\'est pas toujours directement interhumaine.' },
      { text: 'Elle ne peut jamais être transmise entre humains.', correct: false, correction: 'Certaines infections se transmettent bien entre humains ; ce n\'est simplement pas une règle universelle.' },
      { text: 'Elle se transmet nécessairement par contact direct entre deux personnes.', correct: false, correction: 'Le caractère infectieux n\'impose pas une transmission directe interhumaine.' },
    ],
    explanation: 'Le cours associe les maladies infectieuses à un ou plusieurs agents et à une capacité de transmission ; celle-ci doit être précisée pour chaque maladie, sans la réduire au contact direct interhumain. (Cours, p. 4)'
  },
  {
    id: 42,
    type: 'QRM',
    question: 'Parmi les groupes suivants, lesquels le cours cite-t-il comme grandes catégories d\'agents pouvant être à l\'origine de maladies infectieuses ?',
    options: [
      { text: 'Les champignons.', correct: true, correction: 'Les champignons sont explicitement mentionnés.' },
      { text: 'Les bactéries.', correct: true, correction: 'Les bactéries figurent parmi les catégories étiologiques citées.' },
      { text: 'Les parasites.', correct: true, correction: 'Les parasites sont également cités.' },
      { text: 'Les cellules tumorales de l\'hôte, à elles seules.', correct: false, correction: 'Une cellule tumorale n\'est pas, par elle-même, un agent infectieux de cette liste.' },
      { text: 'Les virus.', correct: true, correction: 'Les virus font partie des agents infectieux cités.' },
    ],
    explanation: 'La diversité étiologique importe : le cours énumère virus, bactéries, champignons et parasites, et évoque séparément les prions parmi les agents transmissibles non conventionnels. (Cours, p. 4-5)'
  },
  {
    id: 43,
    type: 'QCM',
    question: 'Devant plusieurs cas regroupés d\'une même infection, quelle information épidémiologique est la plus directement utile pour choisir une prévention adaptée ?',
    options: [
      { text: 'Le nombre de médecins disponibles, indépendamment de la chaîne de transmission.', correct: false, correction: 'Les moyens disponibles comptent pour l\'organisation, mais ne définissent pas le mécanisme de transmission.' },
      { text: 'La conviction que tous les cas résultent d\'un contact direct interhumain.', correct: false, correction: 'La voie de transmission doit être étudiée et ne peut pas être présumée.' },
      { text: 'La présence d\'une fièvre chez un cas, sans autre contexte.', correct: false, correction: 'Un symptôme isolé ne permet pas de choisir la stratégie de prévention d\'une flambée.' },
      { text: 'La seule couleur de la colonie observée en culture.', correct: false, correction: 'Cet aspect de laboratoire ne décrit pas à lui seul comment les personnes ont été exposées.' },
      { text: 'Le mode de transmission et les circonstances d\'exposition des cas.', correct: true, correction: 'Ces informations permettent de cibler les mesures qui interrompent la transmission.' },
    ],
    explanation: 'Le cours insiste sur la connaissance de l\'épidémiologie pour la prise en charge et la prévention ; identifier expositions et voies de transmission permet d\'agir sur la chaîne de contamination. (Cours, p. 4)'
  },
  {
    id: 44,
    type: 'QRM',
    question: 'Quels changements mentionnés dans le cours peuvent influencer l\'évolution des pathologies infectieuses ?',
    options: [
      { text: 'L\'évolution des populations hôtes.', correct: true, correction: 'Les caractéristiques des humains, animaux ou végétaux influencent les interactions infectieuses.' },
      { text: 'La modification des vecteurs et des niches écologiques.', correct: true, correction: 'Le cours cite ces deux dimensions environnementales.' },
      { text: 'L\'évolution des populations microbiennes.', correct: true, correction: 'La composition et les propriétés des microbes peuvent évoluer.' },
      { text: 'Uniquement la mutation de l\'agent, sans rôle de l\'hôte ni de l\'environnement.', correct: false, correction: 'Cette vision exclut deux composantes majeures de l\'approche présentée.' },
      { text: 'La pression des biocides dans l\'environnement.', correct: true, correction: 'Elle peut modifier les populations microbiennes et leur sélection.' },
    ],
    explanation: 'L\'évolution d\'une maladie infectieuse se comprend dans un système où interviennent microbes, hôtes, vecteurs et niches écologiques, ainsi que les pressions exercées sur cet environnement. (Cours, p. 4)'
  },
  {
    id: 45,
    type: 'QCM',
    question: 'Dans l\'exemple d\'Ebola donné par le cours, quel repère relie le mieux symptômes et risque de transmission interhumaine ?',
    options: [
      { text: 'La contagiosité dépend seulement de la région géographique du patient.', correct: false, correction: 'La localisation peut renseigner sur l\'exposition, mais ne remplace pas l\'évaluation clinique et épidémiologique.' },
      { text: 'La fièvre exclut la possibilité de transmission.', correct: false, correction: 'La fièvre est au contraire un symptôme qui motive l\'évaluation et les précautions.' },
      { text: 'Toute personne exposée transmet forcément le virus avant même l\'apparition des symptômes.', correct: false, correction: 'Une personne infectée n\'est pas considérée contagieuse avant l\'apparition des symptômes dans cet exemple.' },
      { text: 'La contagiosité commence toujours exactement 21 jours après l\'exposition.', correct: false, correction: 'Vingt et un jours correspondent à la borne supérieure usuelle d\'incubation, pas au début imposé de la contagiosité.' },
      { text: 'La personne devient contagieuse à partir de l\'apparition des symptômes, notamment lors de la phase aiguë.', correct: true, correction: 'C\'est le repère utilisé dans l\'exemple du cours et confirmé par les informations de santé publique sur Ebola.' },
    ],
    explanation: 'L\'exemple du cours utilise l\'apparition des symptômes pour déclencher les mesures visant à éviter une transmission ; l\'incubation peut durer jusqu\'à 21 jours. Il s\'agit d\'un repère propre à Ebola, à ne pas généraliser à tous les agents. (Cours, p. 4)'
  },
  {
    id: 46,
    type: 'QRM',
    question: 'Lorsqu\'une personne a eu un contact à risque avec un cas d\'Ebola, quelles propositions décrivent correctement l\'intérêt des repères épidémiologiques du cours ?',
    options: [
      { text: 'L\'apparition de symptômes compatibles chez un contact appelle une évaluation rapide et des précautions adaptées.', correct: true, correction: 'Le risque de transmission est lié à la phase symptomatique dans cet exemple.' },
      { text: 'Retrouver les personnes potentiellement exposées aide à organiser leur suivi.', correct: true, correction: 'La recherche des contacts permet de détecter rapidement une éventuelle maladie et d\'agir.' },
      { text: 'La période d\'incubation allant jusqu\'à 21 jours guide la durée habituelle de surveillance après la dernière exposition.', correct: true, correction: 'Le délai de 21 jours constitue le repère de suivi présenté dans le cours.' },
      { text: 'Un antibiotique administré aux contacts remplace la surveillance.', correct: false, correction: 'Ebola est une infection virale ; un antibiotique ne remplace pas la gestion des contacts.' },
      { text: 'Tout contact asymptomatique doit être déclaré contagieux et isolé systématiquement pendant 21 jours, quel que soit son niveau de risque.', correct: false, correction: 'Le suivi et les mesures restrictives dépendent de l\'évaluation de l\'exposition et des recommandations applicables ; le cours simplifie cet aspect.' },
    ],
    explanation: 'La connaissance de la transmission après début des symptômes et de l\'incubation jusqu\'à 21 jours rend possible une recherche et une surveillance des contacts adaptées. Le support simplifie la conduite à tenir ; il ne faut pas en déduire l\'isolement universel de tous les contacts. (Cours, p. 4)'
  },
  {
    id: 47,
    type: 'QCM',
    question: 'Quelle association résume l\'approche « One Health » présentée dans ce cours ?',
    options: [
      { text: 'Santé humaine, santé animale et santé environnementale sont étudiées ensemble.', correct: true, correction: 'Le cours décrit explicitement cette articulation entre les trois domaines.' },
      { text: 'Seuls les agents infectieux circulant dans les hôpitaux relèvent de One Health.', correct: false, correction: 'L\'approche inclut aussi les réservoirs, vecteurs et milieux extérieurs.' },
      { text: 'One Health ne concerne que les maladies déjà éradiquées.', correct: false, correction: 'Elle sert notamment à comprendre et prévenir les risques actuels et émergents.' },
      { text: 'La médecine humaine suffit, car les animaux et l\'environnement sont sans effet sur les infections.', correct: false, correction: 'Cette affirmation contredit la démarche One Health.' },
      { text: 'La médecine vétérinaire remplace toute mesure de santé humaine.', correct: false, correction: 'Les domaines sont complémentaires, et aucun ne remplace les autres.' },
    ],
    explanation: 'Le cours représente One Health comme un trio reliant médecine humaine, médecine vétérinaire et santé environnementale. (Cours, p. 4-5)'
  },
  {
    id: 48,
    type: 'QRM',
    question: 'Une équipe étudie l\'émergence d\'une infection vectorielle dans une région. Quels éléments relèvent de l\'approche intégrée décrite par le cours ?',
    options: [
      { text: 'Les changements de répartition du vecteur.', correct: true, correction: 'L\'évolution des vecteurs potentiels est un facteur explicitement cité.' },
      { text: 'Les transformations de l\'habitat et des niches écologiques.', correct: true, correction: 'L\'environnement peut modifier les contacts entre hôtes, vecteurs et agents.' },
      { text: 'L\'existence de réservoirs animaux possibles.', correct: true, correction: 'Les animaux peuvent intervenir dans les cycles de transmission et la santé vétérinaire fait partie de One Health.' },
      { text: 'La susceptibilité des populations humaines exposées.', correct: true, correction: 'Les caractéristiques des hôtes conditionnent aussi l\'effet d\'une exposition.' },
      { text: 'L\'idée que seul le nom du microbe suffit à prévoir toutes les conditions de transmission.', correct: false, correction: 'La transmission dépend de l\'ensemble hôte-agent-environnement.' },
    ],
    explanation: 'Le cours relie évolution des vecteurs, niches écologiques, hôtes et réservoirs. Une enquête intégrée examine ces composantes simultanément. (Cours, p. 4-5)'
  },
  {
    id: 49,
    type: 'QCM',
    question: 'Deux personnes sont exposées au même pathogène mais ne présentent pas la même évolution clinique. Quelle explication est la plus conforme à la partie « hôte » du cours ?',
    options: [
      { text: 'L\'état immunitaire ne joue de rôle que pour les infections bactériennes.', correct: false, correction: 'Le cours ne limite pas la susceptibilité de l\'hôte aux bactéries.' },
      { text: 'La présence d\'un réservoir exclut toute influence du terrain individuel.', correct: false, correction: 'Le réservoir concerne le cycle de transmission, pas l\'abolition des différences entre hôtes.' },
      { text: 'La virulence est obligatoirement nulle chez la personne ayant peu de symptômes.', correct: false, correction: 'Une présentation peu sévère ne suffit pas à attribuer une virulence nulle à l\'agent ; l\'hôte intervient aussi.' },
      { text: 'Leur susceptibilité, leur terrain et l\'efficacité de leur immunité peuvent différer.', correct: true, correction: 'Le cours indique que ces caractéristiques de l\'hôte modulent sa réponse au pathogène.' },
      { text: 'Un même pathogène impose toujours une évolution identique chez tous les hôtes.', correct: false, correction: 'Les caractéristiques de l\'hôte modifient la réponse à l\'agent.' },
    ],
    explanation: 'L\'issue d\'une exposition résulte aussi de la susceptibilité et du terrain de l\'hôte, dont la réponse immunitaire peut être plus ou moins efficace. (Cours, p. 5)'
  },
  {
    id: 50,
    type: 'QRM',
    question: 'Parmi les éléments suivants, lesquels concernent principalement la composante « hôte » dans l\'interaction hôte-pathogène-environnement ?',
    options: [
      { text: 'La présence d\'un vecteur dans le milieu extérieur.', correct: false, correction: 'Le vecteur appartient surtout au contexte de transmission environnemental.' },
      { text: 'La susceptibilité individuelle à l\'infection.', correct: true, correction: 'La susceptibilité est une propriété de l\'hôte décrite dans le cours.' },
      { text: 'Le terrain de la personne exposée, par exemple une immunodépression.', correct: true, correction: 'Le terrain peut modifier la capacité de l\'hôte à contrôler le pathogène.' },
      { text: 'L\'efficacité des défenses immunitaires de la personne exposée.', correct: true, correction: 'Le cours mentionne une immunité plus ou moins efficace selon l\'hôte.' },
      { text: 'La capacité intrinsèque d\'un agent à provoquer une infection.', correct: false, correction: 'Cette propriété correspond à la pathogénicité de l\'agent, non à celle de l\'hôte.' },
    ],
    explanation: 'Le cours distingue la susceptibilité, l\'immunité et le terrain de l\'hôte de la pathogénicité de l\'agent et des éléments de l\'environnement. (Cours, p. 5)'
  },
  {
    id: 51,
    type: 'QCM',
    question: 'Dans le vocabulaire utilisé par l\'enseignant, à quoi correspond la « pathogénicité » d\'un agent ?',
    options: [
      { text: 'À la capacité des antibiotiques à éliminer le microbiote.', correct: false, correction: 'Ce mécanisme concerne un traitement et son effet sur l\'écosystème, pas la pathogénicité.' },
      { text: 'Au nombre de jours d\'incubation d\'une infection.', correct: false, correction: 'La durée d\'incubation est un paramètre temporel distinct.' },
      { text: 'À sa capacité qualitative de provoquer ou non une infection.', correct: true, correction: 'Le cours oppose cette capacité qualitative à la virulence, décrite comme quantitative.' },
      { text: 'À la gravité nécessairement identique des infections chez tous les patients.', correct: false, correction: 'La gravité peut varier avec l\'agent et l\'hôte ; ce n\'est pas la définition de pathogénicité donnée.' },
      { text: 'À la fréquence de circulation du vecteur dans une région.', correct: false, correction: 'La fréquence du vecteur relève de l\'épidémiologie de la transmission.' },
    ],
    explanation: 'Le cours emploie pathogénicité pour répondre à la question qualitative « cet agent peut-il donner une infection ? ». (Cours, p. 5)'
  },
  {
    id: 52,
    type: 'QRM',
    question: 'Quelles propositions respectent la distinction faite dans le cours entre pathogénicité et virulence ?',
    options: [
      { text: 'Deux agents capables d\'infecter peuvent différer par leur virulence.', correct: true, correction: 'La capacité à infecter n\'implique pas une intensité identique des effets.' },
      { text: 'Pathogénicité et virulence sont strictement synonymes dans la terminologie du cours.', correct: false, correction: 'Le cours les distingue expressément.' },
      { text: 'La virulence décrit un aspect quantitatif du pouvoir pathogène.', correct: true, correction: 'Le cours oppose cet aspect quantitatif à la pathogénicité qualitative.' },
      { text: 'La virulence est uniquement le nom du réservoir animal de l\'agent.', correct: false, correction: 'Le réservoir concerne le maintien et la transmission de l\'agent ; ce n\'est pas la virulence.' },
      { text: 'La pathogénicité décrit qualitativement la possibilité de provoquer une infection.', correct: true, correction: 'C\'est le sens explicitement donné dans le cours.' },
    ],
    explanation: 'La pathogénicité est ici qualitative, alors que la virulence nuance quantitativement le pouvoir pathogène. Ces notions décrivent l\'agent, même si l\'évolution clinique dépend aussi de l\'hôte. (Cours, p. 5)'
  },
  {
    id: 53,
    type: 'QCM',
    question: 'Pourquoi le cours place-t-il réservoirs et vecteurs entre l\'hôte et le pathogène ?',
    options: [
      { text: 'Parce qu\'un réservoir et un vecteur désignent toujours la même chose.', correct: false, correction: 'Ce sont deux notions distinctes de l\'écologie d\'une infection.' },
      { text: 'Parce qu\'ils peuvent intervenir dans les conditions environnementales de maintien et de passage de l\'agent entre hôtes.', correct: true, correction: 'Ils participent au lien épidémiologique entre agent et hôte.' },
      { text: 'Parce qu\'ils déterminent seuls la gravité clinique, indépendamment de l\'hôte et de l\'agent.', correct: false, correction: 'La gravité ne peut pas être attribuée à ces seuls éléments.' },
      { text: 'Parce qu\'ils sont les seuls agents infectieux cités par le cours.', correct: false, correction: 'Les agents cités sont notamment bactéries, virus, champignons et parasites.' },
      { text: 'Parce qu\'ils rendent toute infection obligatoirement interhumaine directe.', correct: false, correction: 'Leur rôle peut au contraire impliquer une transmission indirecte.' },
    ],
    explanation: 'Le cours lie hôte et pathogène au contexte environnemental à travers les notions de réservoir et de vecteur, utiles pour comprendre les voies de transmission. (Cours, p. 5)'
  },
  {
    id: 54,
    type: 'QRM',
    question: 'Parmi les énoncés suivants, lesquels sont compatibles avec le rôle d\'un réservoir ou d\'un vecteur dans la transmission ?',
    options: [
      { text: 'Un réservoir peut contribuer au maintien d\'un agent infectieux dans un cycle de transmission.', correct: true, correction: 'C\'est l\'idée portée par la notion de réservoir.' },
      { text: 'Un vecteur est, par définition, un antibiotique administré au malade.', correct: false, correction: 'Un antibiotique est un médicament, pas un vecteur de transmission infectieuse.' },
      { text: 'Un réservoir est nécessairement une personne humaine symptomatique.', correct: false, correction: 'Un réservoir peut être animal ou environnemental ; il n\'est pas forcément un malade humain.' },
      { text: 'Un vecteur peut contribuer au passage d\'un agent d\'un hôte ou d\'un milieu vers un autre hôte.', correct: true, correction: 'Un vecteur peut participer à une transmission indirecte.' },
      { text: 'Étudier ces éléments peut aider à cibler la prévention.', correct: true, correction: 'La compréhension de la chaîne de transmission permet d\'adapter les mesures préventives.' },
    ],
    explanation: 'Réservoirs et vecteurs décrivent des éléments possibles de l\'écologie de transmission ; leur identification contribue à l\'épidémiologie et à la prévention. (Cours, p. 4-5)'
  },
  {
    id: 55,
    type: 'QCM',
    question: 'Le cours décrit des progrès historiques face à plusieurs infections entre 2000 et 2019. Quelle conclusion peut-on raisonnablement en tirer ?',
    options: [
      { text: 'La résistance aux antibiotiques a disparu au cours de cette période.', correct: false, correction: 'Elle est au contraire citée comme une difficulté persistante.' },
      { text: 'Des progrès ont eu lieu, mais ils n\'excluent ni émergences ni nouveaux obstacles à la prévention.', correct: true, correction: 'Le support présente des baisses passées puis souligne la fragilité des acquis.' },
      { text: 'L\'épidémiologie est devenue inutile une fois une baisse observée.', correct: false, correction: 'Elle reste essentielle à la surveillance et à la prévention.' },
      { text: 'Toutes les maladies infectieuses ont été éliminées avant 2020.', correct: false, correction: 'Le cours insiste sur leur persistance et sur les émergences.' },
      { text: 'Les chiffres de 2000 à 2019 prédisent exactement la mortalité de chaque année future.', correct: false, correction: 'Une tendance historique ne permet pas cette extrapolation.' },
    ],
    explanation: 'La présentation des tendances 2000–2019 est historique et le cours souligne leur fragilité face aux émergences, aux changements environnementaux et à la résistance aux antibiotiques. (Cours, p. 4-5)'
  },
  {
    id: 56,
    type: 'QRM',
    question: 'Quels éléments le cours cite-t-il comme pouvant fragiliser les progrès acquis contre les maladies infectieuses ?',
    options: [
      { text: 'Les changements climatiques pouvant modifier les émergences.', correct: true, correction: 'Le réchauffement climatique et les émergences sont associés dans le support.' },
      { text: 'L\'émergence d\'une nouvelle infection, illustrée par la Covid-19.', correct: true, correction: 'Le cours la donne comme exemple d\'émergence perturbant les acquis.' },
      { text: 'La modification des niches écologiques et des vecteurs.', correct: true, correction: 'Ces changements figurent dans la liste des facteurs environnementaux du cours.' },
      { text: 'La résistance aux antibiotiques.', correct: true, correction: 'Elle est explicitement citée comme menace pour le contrôle des infections.' },
      { text: 'La preuve qu\'un succès de prévention est définitivement irréversible.', correct: false, correction: 'Le cours décrit au contraire des acquis fragiles.' },
    ],
    explanation: 'Le cours insiste sur le caractère évolutif des risques infectieux : émergences, résistance aux antibiotiques et changements des milieux ou des vecteurs peuvent modifier la situation. (Cours, p. 4-5)'
  },
  {
    id: 57,
    type: 'QCM',
    question: 'Une maladie est associée à la fois à un virus et à une surinfection bactérienne. Quelle proposition est cohérente avec la définition étiologique donnée dans le cours ?',
    options: [
      { text: 'Seul l\'agent découvert en dernier peut participer à la maladie.', correct: false, correction: 'La chronologie de découverte n\'établit pas à elle seule la contribution causale.' },
      { text: 'La présence de deux agents exclut automatiquement le diagnostic de maladie infectieuse.', correct: false, correction: 'Une pluralité d\'agents est compatible avec la définition du cours.' },
      { text: 'Toute bactérie identifiée lors d\'une infection virale est nécessairement une surinfection causale.', correct: false, correction: 'Une bactérie identifiée peut aussi correspondre à une colonisation ; son rôle doit être évalué.' },
      { text: 'Une maladie infectieuse peut impliquer un ou plusieurs agents infectieux.', correct: true, correction: 'Le cours précise explicitement qu\'une étiologie peut comporter plusieurs agents.' },
      { text: 'Un virus n\'est jamais un agent infectieux.', correct: false, correction: 'Les virus figurent parmi les agents cités.' },
    ],
    explanation: 'La définition du cours admet un ou plusieurs agents étiologiques. En pratique, l\'identification d\'un micro-organisme doit être reliée au tableau clinique pour ne pas confondre infection et colonisation. (Cours, p. 3-4)'
  },
  {
    id: 58,
    type: 'QRM',
    question: 'Quelles utilisations de l\'épidémiologie correspondent à la logique de prévention exposée dans le cours ?',
    options: [
      { text: 'Rechercher les circonstances d\'exposition des cas.', correct: true, correction: 'Elles orientent l\'identification des sources et des personnes à suivre.' },
      { text: 'Tenir compte de l\'incubation pour organiser le suivi des personnes exposées.', correct: true, correction: 'L\'exemple d\'Ebola illustre cet usage d\'une donnée temporelle.' },
      { text: 'Remplacer systématiquement toute évaluation clinique et microbiologique par une simple carte de cas.', correct: false, correction: 'L\'épidémiologie complète l\'évaluation clinique et étiologique ; elle ne la remplace pas.' },
      { text: 'Identifier les voies plausibles de transmission.', correct: true, correction: 'Cela aide à choisir des mesures qui coupent la chaîne de transmission.' },
      { text: 'Adapter les mesures aux réservoirs ou vecteurs pertinents lorsqu\'ils existent.', correct: true, correction: 'Le cours relie réservoirs et vecteurs à l\'environnement de transmission.' },
    ],
    explanation: 'Connaître l\'épidémiologie aide à comprendre qui est exposé, comment et pendant quelle période ; ces données orientent la prise en charge collective et la prévention. (Cours, p. 4-5)'
  },
  {
    id: 59,
    type: 'QCM',
    question: 'Une souche est capable de provoquer une infection, mais l\'on ignore l\'intensité des atteintes qu\'elle peut entraîner. Quelle formulation est correcte selon la distinction du cours ?',
    options: [
      { text: 'Sa virulence est nécessairement maximale parce qu\'elle est pathogène.', correct: false, correction: 'La capacité à infecter n\'établit pas une intensité maximale.' },
      { text: 'Sa pathogénicité est établie ; cette seule information ne quantifie pas sa virulence.', correct: true, correction: 'Capacité à infecter et degré du pouvoir pathogène sont deux notions différentes.' },
      { text: 'Sa pathogénicité est forcément nulle dès lors que la virulence n\'est pas mesurée.', correct: false, correction: 'L\'absence de mesure quantitative ne fait pas disparaître la capacité qualitative.' },
      { text: 'La susceptibilité de l\'hôte et l\'environnement sont toujours sans influence sur l\'évolution.', correct: false, correction: 'Le cours présente aussi ces deux composantes de l\'interaction infectieuse.' },
      { text: 'On ne peut pas parler de pathogénicité pour un agent infectieux.', correct: false, correction: 'C\'est précisément une propriété de l\'agent évoquée dans le cours.' },
    ],
    explanation: 'Savoir qu\'un agent peut entraîner une infection renseigne sur sa pathogénicité au sens qualitatif du cours, mais ne mesure pas sa virulence. (Cours, p. 5)'
  },
  {
    id: 60,
    type: 'QRM',
    question: 'Une région observe davantage de cas d\'une infection après modification des habitats, déplacement d\'un vecteur et augmentation du nombre de personnes vulnérables. Quelles analyses suivent la logique du cours ?',
    options: [
      { text: 'Examiner les propriétés de l\'agent et leurs éventuelles évolutions.', correct: true, correction: 'La composante microbienne participe aussi à l\'évolution des maladies infectieuses.' },
      { text: 'Étudier la modification des niches écologiques.', correct: true, correction: 'Les niches écologiques font partie des facteurs environnementaux cités.' },
      { text: 'Étudier la répartition du vecteur.', correct: true, correction: 'Le changement des vecteurs peut modifier la transmission.' },
      { text: 'Conclure que la virulence seule explique nécessairement tous les nouveaux cas.', correct: false, correction: 'Une hausse des cas peut résulter de plusieurs facteurs, notamment environnementaux et liés aux hôtes.' },
      { text: 'Étudier la susceptibilité des hôtes exposés.', correct: true, correction: 'Le terrain et l\'immunité peuvent influencer la survenue ou l\'évolution des infections.' },
    ],
    explanation: 'Le cours présente les maladies infectieuses comme l\'effet d\'interactions entre agent, hôtes et environnement ; les changements de vecteurs et d\'habitats peuvent modifier la transmission sans qu\'il faille supposer une modification unique de la virulence. (Cours, p. 4-5)'
  },
  {
    id: 61,
    type: 'QCM',
    question: 'Parmi les acteurs infectieux cités dans le cours, quelle propriété caractérise une bactérie dans le modèle général présenté ?',
    options: [
      { text: 'C\'est toujours une particule acellulaire qui ne possède aucun métabolisme.', correct: false, correction: 'Non. Cette description évoque plutôt un virus ; une bactérie est une cellule.' },
      { text: 'Elle est nécessairement visible à l\'œil nu.', correct: false, correction: 'Non. Une bactérie individuelle est microscopique.' },
      { text: 'C\'est un organisme procaryote capable de se multiplier par division.', correct: true, correction: 'Oui. Les bactéries sont des cellules procaryotes qui se multiplient habituellement par division.' },
      { text: 'Elle ne contient jamais d\'ADN.', correct: false, correction: 'Non. L\'ADN constitue le matériel génétique bactérien.' },
      { text: 'Elle ne peut exister qu\'à l\'intérieur d\'une cellule humaine.', correct: false, correction: 'Non. De nombreuses bactéries vivent librement ; l\'obligation intracellulaire ne concerne que certains groupes.' },
    ],
    explanation: 'Le cours présente les bactéries comme des organismes procaryotes dotés d\'acides nucléiques et capables de multiplication par division. (Cours, p. 5)'
  },
  {
    id: 62,
    type: 'QRM',
    question: 'À propos de l\'organisation générale des bactéries, quelles propositions sont exactes ?',
    options: [
      { text: 'Beaucoup se divisent par scissiparité, sans mitose de cellule eucaryote.', correct: true, correction: 'Oui. La division bactérienne diffère de la mitose des cellules humaines.' },
      { text: 'Elles possèdent de l\'ADN et synthétisent de l\'ARN.', correct: true, correction: 'Oui. Le cours mentionne les deux types d\'acides nucléiques ; l\'ADN porte l\'information génétique.' },
      { text: 'Un chromosome circulaire est fréquent, mais sa forme et son nombre ne sont pas universels chez toutes les bactéries.', correct: true, correction: 'Oui. La formulation « unique et circulaire » du support décrit un modèle courant, pas une loi absolue.' },
      { text: 'Aucune bactérie ne possède de membrane cytoplasmique.', correct: false, correction: 'Non. Les bactéries possèdent une membrane cytoplasmique ; la paroi est une structure distincte.' },
      { text: 'Toutes les bactéries peuvent être identifiées directement au microscope optique sans technique particulière.', correct: false, correction: 'Non. L\'observation dépend notamment de la taille, de la coloration et de l\'espèce.' },
    ],
    explanation: 'Le modèle bactérien du cours associe cellule procaryote, ADN/ARN et division ; il faut éviter de transformer le schéma du chromosome unique circulaire en généralité universelle. (Cours, p. 5-6)'
  },
  {
    id: 63,
    type: 'QCM',
    question: 'Dans la classification morphologique du cours, quel terme désigne une bactérie incurvée en forme de virgule ?',
    options: [
      { text: 'Un spirochète.', correct: false, correction: 'Non. Un spirochète a une morphologie spiralée.' },
      { text: 'Un vibrion.', correct: true, correction: 'Oui. Le vibrion correspond à la forme incurvée décrite dans le cours.' },
      { text: 'Une spore.', correct: false, correction: 'Non. Une spore est une forme de résistance chez certaines bactéries, pas le nom d\'une bactérie incurvée.' },
      { text: 'Un coccus.', correct: false, correction: 'Non. Un coccus a une forme globalement sphérique.' },
      { text: 'Un bacille rectiligne.', correct: false, correction: 'Non. Un bacille est classiquement en bâtonnet.' },
    ],
    explanation: 'Le cours distingue les cocci sphériques, les bacilles en bâtonnets, les vibrions incurvés et les spirochètes spiralés. (Cours, p. 5)'
  },
  {
    id: 64,
    type: 'QRM',
    question: 'Un compte rendu décrit des « cocci Gram positifs », sans nom d’espèce ni tableau clinique. Quelles conclusions sont justifiées ?',
    options: [
      { text: 'Ce résultat démontre déjà une infection invasive chez le patient.', correct: false, correction: 'Non. La morphologie et le Gram ne suffisent pas à distinguer colonisation et infection.' },
      { text: 'Tous les cocci Gram positifs occupent obligatoirement la même niche écologique.', correct: false, correction: 'Non. Le cours distingue notamment peau, autres microbiotes et tube digestif selon le groupe.' },
      { text: 'Le terme « cocci » renseigne sur une forme globalement sphérique.', correct: true, correction: 'Oui. La morphologie coccoïde correspond à une forme arrondie.' },
      { text: 'Staphylocoques, streptocoques et entérocoques comptent parmi les groupes possibles cités dans le cours.', correct: true, correction: 'Oui. Ces trois groupes sont présentés parmi les cocci Gram positifs importants.' },
      { text: 'Le qualificatif « Gram positifs » renseigne sur la structure de la paroi, notamment un peptidoglycane généralement épais.', correct: true, correction: 'Oui. Le Gram décrit ici une propriété structurale distincte de la forme.' },
    ],
    explanation: 'La forme et le Gram décrivent la bactérie ; l’identification et la signification clinique demandent d’autres informations. (Cours, p. 5-6)'
  },
  {
    id: 65,
    type: 'QCM',
    question: 'Une bactérie présente une épaisse couche de peptidoglycane et pas de membrane externe typique des Gram négatifs. Quelle classification de paroi cela évoque-t-il ?',
    options: [
      { text: 'Champignon filamenteux.', correct: false, correction: 'Non. La paroi fongique n\'est pas définie par le peptidoglycane bactérien.' },
      { text: 'Gram négatif avec membrane externe.', correct: false, correction: 'Non. Les Gram négatifs ont une couche de peptidoglycane plus fine et une membrane externe.' },
      { text: 'Absence complète de paroi et de membrane.', correct: false, correction: 'Non. L\'énoncé décrit précisément une paroi épaisse ; une membrane cytoplasmique est aussi présente.' },
      { text: 'Virus enveloppé.', correct: false, correction: 'Non. Un virus ne possède pas de paroi de peptidoglycane.' },
      { text: 'Gram positif.', correct: true, correction: 'Oui. Dans la présentation du cours, l\'épaisseur du peptidoglycane caractérise la paroi Gram positive.' },
    ],
    explanation: 'La paroi Gram positive associe classiquement une épaisse couche de peptidoglycane sans membrane externe de type Gram négatif. (Cours, p. 6)'
  },
  {
    id: 66,
    type: 'QRM',
    question: 'À propos de la paroi bactérienne décrite dans le cours, quelles affirmations sont exactes ?',
    options: [
      { text: 'La présence d\'une membrane externe est la définition de tous les Gram positifs.', correct: false, correction: 'Non. Cette membrane externe est caractéristique des Gram négatifs classiques.' },
      { text: 'Les bactéries Gram positives ont généralement une couche de peptidoglycane épaisse.', correct: true, correction: 'Oui. C\'est le contraste structural principal retenu par le cours.' },
      { text: 'Une membrane externe caractérise les Gram négatifs dans le modèle classique.', correct: true, correction: 'Oui. Le cours l\'associe à la paroi Gram négative.' },
      { text: 'Les bactéries Gram négatives ont une couche de peptidoglycane plus mince.', correct: true, correction: 'Oui. Leur peptidoglycane est situé entre deux membranes.' },
      { text: 'Les Gram négatifs ne possèdent jamais de peptidoglycane.', correct: false, correction: 'Non. Leur couche de peptidoglycane est fine, mais bien présente dans le modèle classique.' },
    ],
    explanation: 'Le contraste Gram positif/Gram négatif porte ici sur l\'épaisseur du peptidoglycane et la présence d\'une membrane externe chez les Gram négatifs. (Cours, p. 6)'
  },
  {
    id: 67,
    type: 'QCM',
    question: 'Quel avantage une capsule peut-elle apporter à certaines bactéries face aux défenses de l\'hôte ?',
    options: [
      { text: 'L\'impossibilité absolue de déclencher une réponse immunitaire.', correct: false, correction: 'Non. La capsule peut aider à échapper à une défense, mais n\'abolit pas toutes les réponses immunitaires.' },
      { text: 'Une transformation obligatoire en virus.', correct: false, correction: 'Non. La capsule est une structure bactérienne, sans changement de nature de l\'agent.' },
      { text: 'Une protection partielle contre la phagocytose.', correct: true, correction: 'Oui. Le cours cite la capsule comme facteur pouvant limiter la phagocytose.' },
      { text: 'La disparition complète de leur ADN.', correct: false, correction: 'Non. La capsule n\'enlève pas le matériel génétique bactérien.' },
      { text: 'La production automatique d\'une spore par toutes les espèces.', correct: false, correction: 'Non. Capsule et sporulation sont deux caractères distincts, variables selon les espèces.' },
    ],
    explanation: 'La capsule, lorsqu\'elle est présente, peut contribuer à l\'échappement à la phagocytose. Elle n\'est ni universelle ni synonyme d\'absence de réponse immunitaire. (Cours, p. 6)'
  },
  {
    id: 68,
    type: 'QRM',
    question: 'Quels caractères peuvent différer entre espèces bactériennes et contribuer à leur identification ou à leur pouvoir pathogène ?',
    options: [
      { text: 'L\'obligation pour toutes les bactéries de posséder exactement ces quatre caractères.', correct: false, correction: 'Non. Leur présence varie selon le groupe bactérien.' },
      { text: 'La capacité à former des spores.', correct: true, correction: 'Oui. Certaines bactéries forment des spores, d\'autres non.' },
      { text: 'La présence ou l\'absence d\'une capsule.', correct: true, correction: 'Oui. Le cours note que la capsule n\'est présente que chez certaines bactéries.' },
      { text: 'La production d\'enzymes ou de toxines.', correct: true, correction: 'Oui. Ces produits peuvent participer à la physiopathologie et à la description de l\'espèce.' },
      { text: 'La présence de flagelles.', correct: true, correction: 'Oui. Les flagelles constituent un caractère variable mentionné dans le cours.' },
    ],
    explanation: 'Le cours présente capsule, spores, flagelles, enzymes et toxines comme des critères variables selon les espèces, utiles pour comprendre leurs interactions avec l\'hôte. (Cours, p. 6)'
  },
  {
    id: 69,
    type: 'QCM',
    question: 'Dans la défense précoce contre de nombreuses bactéries, quelles cellules le cours met-il surtout en avant ?',
    options: [
      { text: 'Uniquement les plaquettes.', correct: false, correction: 'Non. Le cours cite surtout les cellules phagocytaires de l\'immunité innée.' },
      { text: 'Uniquement les hématies.', correct: false, correction: 'Non. Les globules rouges transportent l\'oxygène et ne constituent pas les principaux phagocytes.' },
      { text: 'Aucune cellule de l\'hôte, car les bactéries ne déclenchent pas d\'inflammation.', correct: false, correction: 'Non. Une infection bactérienne peut déclencher une inflammation mobilisant l\'hôte.' },
      { text: 'Les polynucléaires neutrophiles et les macrophages.', correct: true, correction: 'Oui. Ils participent à la réponse innée et à la phagocytose bactérienne.' },
      { text: 'Seulement les lymphocytes mémoires, dès la première minute.', correct: false, correction: 'Non. Une réponse adaptative peut intervenir, mais la défense initiale décrite est surtout innée.' },
    ],
    explanation: 'La réponse innée antibactérienne met particulièrement en jeu polynucléaires neutrophiles et macrophages ; d\'autres réponses peuvent s\'y ajouter. (Cours, p. 6)'
  },
  {
    id: 70,
    type: 'QRM',
    question: 'À propos de la réponse de l\'hôte aux bactéries, quelles propositions sont compatibles avec le cours ?',
    options: [
      { text: 'Toutes les bactéries échappent toujours complètement aux macrophages.', correct: false, correction: 'Non. L\'échappement varie selon l\'espèce et ses facteurs de virulence.' },
      { text: 'La présence de pus suffit à identifier l\'espèce bactérienne sans aucun examen.', correct: false, correction: 'Non. Le pus traduit une réaction inflammatoire mais ne détermine pas, à lui seul, l\'étiologie exacte.' },
      { text: 'Les polynucléaires neutrophiles peuvent contribuer à la formation de pus.', correct: true, correction: 'Oui. Leur accumulation dans un foyer inflammatoire participe au pus.' },
      { text: 'L\'immunité innée peut intervenir avant une réponse adaptative spécifique.', correct: true, correction: 'Oui. Les phagocytes font partie des premières lignes de défense.' },
      { text: 'Une réponse humorale spécifique peut aussi participer à la défense contre certaines bactéries.', correct: true, correction: 'Oui. Le cours mentionne une composante spécifique, notamment humorale.' },
    ],
    explanation: 'Le cours distingue défense innée, particulièrement phagocytaire, et réponse adaptative ; la présence de pus n\'est pas un diagnostic d\'espèce. (Cours, p. 6)'
  },
  {
    id: 71,
    type: 'QCM',
    question: 'Une bactérie est qualifiée d\'anaérobie facultative. Que signifie ce qualificatif métabolique ?',
    options: [
      { text: 'Elle ne peut jamais être cultivée au laboratoire.', correct: false, correction: 'Non. Le caractère facultatif n\'empêche pas une culture adaptée.' },
      { text: 'Elle meurt nécessairement en l\'absence d\'oxygène.', correct: false, correction: 'Non. Ce serait incompatible avec la faculté de croître sans oxygène.' },
      { text: 'Elle ne peut se multiplier qu\'à l\'intérieur d\'une cellule humaine.', correct: false, correction: 'Non. L\'intracellularité est un autre critère biologique.' },
      { text: 'Elle peut se développer avec ou sans oxygène, selon les conditions.', correct: true, correction: 'Oui. « Facultative » indique une capacité à vivre dans les deux contextes.' },
      { text: 'Elle appartient obligatoirement au groupe des cocci Gram positifs.', correct: false, correction: 'Non. Le métabolisme de l\'oxygène n\'impose ni forme ni type de paroi.' },
    ],
    explanation: 'Le métabolisme vis-à-vis de l\'oxygène est un critère distinct de la morphologie et de la paroi ; le cours cite les catégories aérobies, anaérobies et intermédiaires. (Cours, p. 6)'
  },
  {
    id: 72,
    type: 'QRM',
    question: 'Quelles propositions décrivent correctement les catégories métaboliques utilisées pour classer des bactéries ?',
    options: [
      { text: 'Toute bactérie du tube digestif est nécessairement aérobie stricte.', correct: false, correction: 'Non. Le tube digestif abrite notamment beaucoup de bactéries anaérobies.' },
      { text: 'Une bactérie anaérobie stricte se développe en absence d\'oxygène.', correct: true, correction: 'Oui. Elle nécessite des conditions adaptées sans oxygène pour sa culture.' },
      { text: 'La coloration de Gram suffit toujours à déduire le besoin exact en oxygène.', correct: false, correction: 'Non. Paroi et métabolisme sont deux propriétés distinctes.' },
      { text: 'Une bactérie aérobie stricte dépend de l\'oxygène pour sa croissance.', correct: true, correction: 'Oui. L\'oxygène est nécessaire à sa croissance dans le modèle strict.' },
      { text: 'Une bactérie anaérobie facultative peut croître en présence ou en absence d\'oxygène.', correct: true, correction: 'Oui. Le qualificatif « facultative » exprime cette souplesse.' },
    ],
    explanation: 'Le cours distingue aérobies, anaérobies et métabolismes mixtes ; ce classement ne découle pas automatiquement du Gram. (Cours, p. 6)'
  },
  {
    id: 73,
    type: 'QCM',
    question: 'Quel groupe de cocci Gram positifs le cours associe surtout à la peau comme niche de colonisation ?',
    options: [
      { text: 'Les staphylocoques.', correct: true, correction: 'Oui. La peau est l\'une des niches habituelles de nombreux staphylocoques.' },
      { text: 'Les spirochètes en tant que famille de cocci.', correct: false, correction: 'Non. « Spirochète » décrit une forme spiralée, pas un groupe de cocci.' },
      { text: 'Les champignons filamenteux.', correct: false, correction: 'Non. Ce ne sont pas des bactéries Gram positives coccoïdes.' },
      { text: 'Les Entérobactérales.', correct: false, correction: 'Non. Elles sont classées ici parmi les bacilles Gram négatifs liés au tube digestif.' },
      { text: 'Les HACEK.', correct: false, correction: 'Non. Le cours les associe à la flore oropharyngée et aux petits bacilles Gram négatifs.' },
    ],
    explanation: 'Parmi les cocci Gram positifs majeurs du cours, les staphylocoques sont particulièrement liés à la peau ; leur présence sur la peau ne signifie pas automatiquement infection. (Cours, p. 6)'
  },
  {
    id: 74,
    type: 'QRM',
    question: 'À propos des grands groupes de cocci Gram positifs cités dans le cours, quelles associations sont justes ?',
    options: [
      { text: 'Les entérocoques sont liés notamment au tube digestif.', correct: true, correction: 'Oui. C\'est leur niche mise en avant dans le cours.' },
      { text: 'Les streptocoques regroupent des espèces présentes dans diverses flores humaines.', correct: true, correction: 'Oui. Le cours souligne leur présence dans plusieurs microbiotes.' },
      { text: 'Tous les cocci Gram positifs vivent exclusivement dans l\'eau environnementale.', correct: false, correction: 'Non. Plusieurs colonisent les tissus et muqueuses humains.' },
      { text: 'Trouver un staphylocoque sur peau saine prouve une infection invasive.', correct: false, correction: 'Non. Une colonisation cutanée peut être normale ; l\'infection exige une interprétation clinique.' },
      { text: 'Les staphylocoques peuvent faire partie du microbiote cutané.', correct: true, correction: 'Oui. La peau est une niche fréquente de ce groupe.' },
    ],
    explanation: 'Staphylocoques, streptocoques et entérocoques sont trois groupes importants de cocci Gram positifs ; leurs niches habituelles aident à interpréter un prélèvement. (Cours, p. 6)'
  },
  {
    id: 75,
    type: 'QCM',
    question: 'Dans le classement du cours, quel ensemble correspond à des bacilles Gram négatifs fermentants souvent liés au tube digestif des animaux ?',
    options: [
      { text: 'Les Entérobactérales.', correct: true, correction: 'Oui. Le cours les décrit comme bacilles Gram négatifs fermentants, à métabolisme aéro-anaérobie facultatif.' },
      { text: 'Les champignons du microbiote.', correct: false, correction: 'Non. Ce ne sont pas des bactéries.' },
      { text: 'Les virus entériques.', correct: false, correction: 'Non. Un virus n\'est pas un bacille bactérien.' },
      { text: 'Les staphylocoques.', correct: false, correction: 'Non. Ce sont des cocci Gram positifs, pas des bacilles Gram négatifs entériques.' },
      { text: 'Les spirochètes.', correct: false, correction: 'Non. Ils ont une morphologie spiralée et ne désignent pas ce groupe.' },
    ],
    explanation: 'Les Entérobactérales constituent le groupe de bacilles Gram négatifs fermentants et facultatifs lié au tube digestif dans le support. (Cours, p. 6)'
  },
  {
    id: 76,
    type: 'QRM',
    question: 'Au sujet des bacilles Gram négatifs non fermentants, quelles propositions sont raisonnables pour l\'exemple de Pseudomonas aeruginosa ?',
    options: [
      { text: 'Il s\'agit d\'un coccus Gram positif de la peau.', correct: false, correction: 'Non. Pseudomonas aeruginosa est un bacille Gram négatif non fermentant.' },
      { text: 'Toute souche est forcément résistante à tous les antibiotiques et antiseptiques.', correct: false, correction: 'Non. C\'est une généralisation erronée ; la résistance se vérifie selon l\'isolat et le produit.' },
      { text: 'Une résistance aux antibiotiques est possible, mais elle ne doit pas être supposée identique pour toutes les souches.', correct: true, correction: 'Oui. La sensibilité varie ; l\'affirmation du support « résistants à tous les antibiotiques » est excessive.' },
      { text: 'Il peut provoquer des infections associées aux soins chez des patients vulnérables.', correct: true, correction: 'Oui. Le cours souligne son importance en milieu hospitalier, notamment chez des patients fragiles.' },
      { text: 'Il peut être associé à des milieux humides et à l\'eau.', correct: true, correction: 'Oui. L\'environnement humide est une niche importante de Pseudomonas.' },
    ],
    explanation: 'Les non-fermentants environnementaux, dont Pseudomonas aeruginosa, peuvent poser problème en soins et présenter des résistances variables ; le caractère « toutes les souches résistantes à tout » du ronéo n\'est pas exact. (Cours, p. 6)'
  },
  {
    id: 77,
    type: 'QCM',
    question: 'Quel habitat le cours associe principalement au groupe HACEK et apparentés ?',
    options: [
      { text: 'La flore oropharyngée.', correct: true, correction: 'Oui. Le cours situe ce groupe de petits bacilles Gram négatifs dans l\'oropharynx.' },
      { text: 'L\'intérieur obligatoire des hématies.', correct: false, correction: 'Non. Le cours ne classe pas HACEK parmi les parasites des globules rouges.' },
      { text: 'Une absence totale de contact avec les muqueuses humaines.', correct: false, correction: 'Non. L\'oropharynx est précisément une région muqueuse humaine.' },
      { text: 'Uniquement les eaux hospitalières.', correct: false, correction: 'Non. Ce serait plutôt une piste pour certains non-fermentants environnementaux.' },
      { text: 'Exclusivement la lumière du côlon.', correct: false, correction: 'Non. Ce n\'est pas la niche décrite ici pour HACEK.' },
    ],
    explanation: 'HACEK et apparentés figurent dans les petits bacilles Gram négatifs associés à la flore oropharyngée. (Cours, p. 6)'
  },
  {
    id: 78,
    type: 'QRM',
    question: 'Quelles associations entre grands groupes bactériens et contexte du cours sont exactes ?',
    options: [
      { text: 'Les HACEK sont associés à la flore oropharyngée.', correct: true, correction: 'Oui. Ce groupe est présenté parmi les petits bacilles Gram négatifs de l\'oropharynx.' },
      { text: 'Pseudomonas aeruginosa est classé parmi les cocci Gram positifs du tube digestif.', correct: false, correction: 'Non. C\'est un bacille Gram négatif non fermentant, souvent environnemental.' },
      { text: 'Les Entérobactérales sont présentées comme bacilles Gram négatifs du tube digestif.', correct: true, correction: 'Oui. Le cours met en avant leur niche digestive et leur capacité de fermentation.' },
      { text: 'Les staphylocoques sont des virus se multipliant uniquement dans une cellule hôte.', correct: false, correction: 'Non. Ce sont des bactéries, classées ici parmi les cocci Gram positifs.' },
      { text: 'Clostridium et Fusobacterium sont cités parmi les bactéries anaérobies strictes.', correct: true, correction: 'Oui. Ce sont les exemples proposés pour ce groupe dans le support.' },
    ],
    explanation: 'Le cours regroupe les bactéries selon paroi, morphologie, métabolisme et niches : ces critères se complètent sans se confondre. (Cours, p. 6)'
  },
  {
    id: 79,
    type: 'QCM',
    question: 'Pourquoi une culture bactérienne ordinaire sans cellules hôtes ne convient-elle pas à l\'isolement de Chlamydia ?',
    options: [
      { text: 'Parce qu’il suffirait de prolonger quelques semaines une culture bactérienne ordinaire sans cellules hôtes.', correct: false, correction: 'Non. Prolonger l’incubation ne remplace pas les cellules vivantes indispensables à la multiplication de Chlamydia.' },
      { text: 'Parce que Chlamydia est une bactérie à multiplication obligatoirement intracellulaire.', correct: true, correction: 'Oui. Sa multiplication requiert des cellules hôtes vivantes ; une culture cellulaire ou un test moléculaire adapté est nécessaire.' },
      { text: 'Parce qu\'une bactérie ne possède jamais d\'acides nucléiques détectables.', correct: false, correction: 'Non. Chlamydia possède un génome bactérien ; des tests moléculaires peuvent le détecter.' },
      { text: 'Parce que Chlamydia est un champignon strictement anaérobie.', correct: false, correction: 'Non. Chlamydia est une bactérie, pas un champignon.' },
      { text: 'Parce que toute bactérie Gram négative est obligatoirement intracellulaire.', correct: false, correction: 'Non. La plupart des bacilles Gram négatifs peuvent se cultiver sans cellules hôtes sur des milieux adaptés.' },
    ],
    explanation: 'Chlamydia illustre les bactéries strictement intracellulaires du cours : leur isolement exige des cellules hôtes, contrairement aux cultures bactériennes ordinaires. (Cours, p. 6)'
  },
  {
    id: 80,
    type: 'QRM',
    question: 'Le support range ensemble Mycoplasma et Chlamydia parmi les bactéries « intracellulaires strictes ». Quelles corrections ou interprétations sont justes ?',
    options: [
      { text: 'Mycoplasma pneumoniae n\'est pas strictement intracellulaire : une culture sur milieu spécialisé est possible.', correct: true, correction: 'Oui. Le laboratoire peut le cultiver sans cellules hôtes, même si cette culture est lente et exigeante.' },
      { text: 'Mycoplasma et Chlamydia sont des virus et non des bactéries.', correct: false, correction: 'Non. Ce sont deux groupes bactériens aux propriétés différentes.' },
      { text: 'Mycoplasma pneumoniae ne possède pas la paroi rigide habituelle des bactéries Gram positives ou négatives.', correct: true, correction: 'Oui. L\'absence de paroi est une particularité importante de ce groupe.' },
      { text: 'Un résultat de culture bactérienne ordinaire négatif exclut toutes les infections à Chlamydia et à Mycoplasma.', correct: false, correction: 'Non. Il faut des méthodes diagnostiques adaptées à chacun de ces agents.' },
      { text: 'Chlamydia est bien un exemple de bactérie à multiplication obligatoirement intracellulaire.', correct: true, correction: 'Oui. Une culture cellulaire est nécessaire pour son isolement par culture.' },
    ],
    explanation: 'La rubrique du ronéo simplifie trop : Chlamydia est obligatoirement intracellulaire, tandis que Mycoplasma pneumoniae peut être cultivé sur un milieu spécial sans cellules hôtes et ne possède pas de paroi rigide. (Cours, p. 6)'
  },
]
