export const meta = {
  title: 'Coagulation et fibrinolyse',
}

export default [
  {
    id: 1,
    type: 'QCM',
    question: 'Après la formation du clou plaquettaire, quel processus lui confère une résistance durable au saignement ?',
    options: [
      { text: 'La disparition immédiate des plaquettes activées', correct: false, correction: 'Les plaquettes restent dans le thrombus fibrino-plaquettaire.' },
      { text: 'La destruction du fibrinogène par la plasmine', correct: false, correction: 'La plasmine relève de la fibrinolyse, qui dissout le caillot.' },
      { text: 'L’inhibition de tous les facteurs de coagulation', correct: false, correction: 'Leur activation localisée est nécessaire pour former la fibrine.' },
      { text: 'La constitution d’un réseau de fibrine autour des plaquettes', correct: true, correction: 'La coagulation produit la fibrine qui consolide le clou plaquettaire.' },
      { text: 'La seule vasoconstriction réflexe', correct: false, correction: 'La vasoconstriction participe à l’hémostase initiale mais ne stabilise pas durablement le clou.' },
    ],
    explanation: 'L’hémostase primaire crée rapidement un thrombus plaquettaire encore fragile ; la coagulation le renforce par un maillage de fibrine. (Cours, p. 2)'
  },
  {
    id: 2,
    type: 'QRM',
    question: 'Quelles associations entre les étapes de l’hémostase et leur résultat sont exactes ?',
    options: [
      { text: 'Coagulation : transformation finale du fibrinogène en fibrine', correct: true, correction: 'La formation de fibrine consolide le clou plaquettaire.' },
      { text: 'Coagulation : disparition enzymatique de la fibrine', correct: false, correction: 'La disparition de la fibrine relève de la fibrinolyse.' },
      { text: 'Hémostase primaire : réticulation covalente de la fibrine', correct: false, correction: 'La réticulation de la fibrine est une étape de la coagulation, impliquant le facteur XIIIa.' },
      { text: 'Hémostase primaire : formation rapide d’un thrombus plaquettaire', correct: true, correction: 'C’est le résultat de l’hémostase primaire.' },
      { text: 'Fibrinolyse : dissolution du caillot après réparation du vaisseau', correct: true, correction: 'Elle participe au retour à la perméabilité vasculaire.' },
    ],
    explanation: 'Les trois composantes de l’hémostase sont coordonnées : formation du clou plaquettaire, renforcement par la fibrine, puis dissolution du caillot devenu inutile. (Cours, p. 2)'
  },
  {
    id: 3,
    type: 'QCM',
    question: 'Comment nomme-t-on le thrombus obtenu après consolidation du clou plaquettaire par la fibrine ?',
    options: [
      { text: 'Un thrombus fibrino-plaquettaire', correct: true, correction: 'Vrai — le réseau de fibrine consolide les plaquettes agrégées.' },
      { text: 'Un réseau composé uniquement de facteur tissulaire', correct: false, correction: 'Faux — le facteur tissulaire initie la coagulation mais ne constitue pas le réseau final.' },
      { text: 'Un amas de globules rouges activés', correct: false, correction: 'Faux — la structure décrite associe surtout plaquettes et fibrine.' },
      { text: 'Un thrombus exclusivement plaquettaire', correct: false, correction: 'Faux — cette expression désigne le clou encore fragile de l’hémostase primaire.' },
      { text: 'Un caillot de plasminogène', correct: false, correction: 'Faux — le plasminogène est le précurseur de la plasmine, enzyme de fibrinolyse.' },
    ],
    explanation: 'La coagulation transforme le clou plaquettaire en un thrombus fibrino-plaquettaire plus stable. (Cours, p. 2)'
  },
  {
    id: 4,
    type: 'QRM',
    question: 'Quelles propositions décrivent correctement deux rôles distincts du fibrinogène au cours de l’hémostase ?',
    options: [
      { text: 'Il peut relier deux plaquettes par leurs récepteurs GPIIb/IIIa', correct: true, correction: 'Il contribue ainsi à l’agrégation plaquettaire.' },
      { text: 'Il est le précurseur soluble de la fibrine', correct: true, correction: 'La thrombine le clive pour produire des monomères de fibrine.' },
      { text: 'Il dégrade les liaisons covalentes de la fibrine', correct: false, correction: 'La dégradation du réseau fibrineux relève de la plasmine, non du fibrinogène.' },
      { text: 'Il devient un réseau stabilisateur après sa conversion en fibrine', correct: true, correction: 'La fibrine forme le maillage qui renforce le thrombus.' },
      { text: 'Il est l’enzyme qui active directement le facteur VII', correct: false, correction: 'Le fibrinogène est un substrat de la thrombine, pas une enzyme d’activation du facteur VII.' },
    ],
    explanation: 'Le fibrinogène sert à la fois de pont entre plaquettes et de substrat pour la formation du réseau de fibrine. (Cours, p. 6–7)'
  },
  {
    id: 5,
    type: 'QCM',
    question: 'Dans un vaisseau intact, pourquoi le facteur tissulaire sous-endothélial ne déclenche-t-il pas constamment la coagulation ?',
    options: [
      { text: 'Il circule seulement sous forme de fibrine insoluble', correct: false, correction: 'Le facteur tissulaire est une protéine membranaire, distincte de la fibrine.' },
      { text: 'La paroi intacte le sépare des facteurs de coagulation circulants', correct: true, correction: 'Cette séparation empêche l’initiation intempestive de la coagulation.' },
      { text: 'La vitamine K inactive irréversiblement le facteur tissulaire', correct: false, correction: 'La vitamine K intervient dans la maturation de certains facteurs plasmatiques, pas dans cette inhibition.' },
      { text: 'Il est entièrement absent de la paroi vasculaire', correct: false, correction: 'Il est présent notamment dans les tissus périvasculaires.' },
      { text: 'Il ne se lie qu’à la plasmine', correct: false, correction: 'Son partenaire d’initiation est le facteur VII/VIIa.' },
    ],
    explanation: 'Le facteur tissulaire est normalement soustrait au contact du sang ; la lésion vasculaire l’expose aux facteurs circulants. (Cours, p. 3)'
  },
  {
    id: 6,
    type: 'QRM',
    question: 'Une brèche expose des tissus sous-endothéliaux au sang. Quelles conséquences immédiates sont cohérentes avec le rôle du facteur tissulaire ?',
    options: [
      { text: 'Un contact local entre le sang et un tissu procoagulant', correct: true, correction: 'Le sous-endothélium exposé rend le facteur tissulaire accessible.' },
      { text: 'L’impossibilité pour les plaquettes de s’activer', correct: false, correction: 'L’activation des plaquettes participe au contraire à l’hémostase au niveau de la brèche.' },
      { text: 'Le démarrage de réactions qui mèneront à la génération de thrombine', correct: true, correction: 'Le facteur tissulaire participe à l’initiation de cette cascade.' },
      { text: 'Une coagulation préférentiellement localisée au site lésé', correct: true, correction: 'La localisation de la réaction limite la coagulation indésirable ailleurs.' },
      { text: 'La transformation directe de la fibrine en fibrinogène par le facteur tissulaire', correct: false, correction: 'La coagulation suit le sens fibrinogène vers fibrine, sous l’action de la thrombine.' },
    ],
    explanation: 'L’exposition du facteur tissulaire au sang initie localement la coagulation et contribue à la génération de thrombine. (Cours, p. 3 et 6)'
  },
  {
    id: 7,
    type: 'QCM',
    question: 'Quel partenaire plasmatique actif s’associe au facteur tissulaire pour initier la cascade de coagulation ?',
    options: [
      { text: 'La plasmine', correct: false, correction: 'La plasmine est l’enzyme de dégradation de la fibrine.' },
      { text: 'Le facteur VIIa', correct: true, correction: 'Le complexe facteur tissulaire–VIIa initie la cascade.' },
      { text: 'Le facteur XIIIa', correct: false, correction: 'Le facteur XIIIa stabilise plus tardivement la fibrine.' },
      { text: 'Le facteur VIIIa seul', correct: false, correction: 'Le facteur VIIIa est un cofacteur de l’amplification, pas le partenaire initial du facteur tissulaire.' },
      { text: 'Le fibrinogène', correct: false, correction: 'Le fibrinogène est le substrat final de la thrombine.' },
    ],
    explanation: 'L’initiation repose sur l’association du facteur tissulaire exposé avec le facteur VII activé circulant. (Cours, p. 6)'
  },
  {
    id: 8,
    type: 'QRM',
    question: 'Une expression anormale de facteur tissulaire apparaît en dehors d’une brèche. Quelles affirmations sont justes ?',
    options: [
      { text: 'Des monocytes activés peuvent en exprimer', correct: true, correction: 'Le cours cite les monocytes activés dans les situations pathologiques.' },
      { text: 'Elle suppose nécessairement une carence en vitamine K', correct: false, correction: 'L’expression pathologique du facteur tissulaire ne dépend pas d’une telle carence.' },
      { text: 'Elle peut entraîner une génération de thrombine inappropriée', correct: true, correction: 'L’initiation de coagulation hors du site lésé peut devenir délétère.' },
      { text: 'Elle protège toujours contre la formation de thrombi', correct: false, correction: 'Elle peut au contraire favoriser une thrombose pathologique.' },
      { text: 'Ce mécanisme peut participer à une CIVD', correct: true, correction: 'L’excès de facteur tissulaire est présenté comme un point de départ de la CIVD.' },
    ],
    explanation: 'Hors d’une lésion, l’expression du facteur tissulaire par des cellules activées peut déclencher une coagulation inappropriée, notamment dans la CIVD. (Cours, p. 3 et 15)'
  },
  {
    id: 9,
    type: 'QCM',
    question: 'Quel organe assure la synthèse de la majorité des facteurs de coagulation ?',
    options: [
      { text: 'La moelle osseuse', correct: false, correction: 'Faux — elle produit les cellules sanguines, pas la majorité des facteurs plasmatiques.' },
      { text: 'Le poumon', correct: false, correction: 'Faux — le cours attribue cette synthèse majoritaire au foie.' },
      { text: 'La rate', correct: false, correction: 'Faux — elle n’est pas le principal organe de synthèse des facteurs de coagulation.' },
      { text: 'Le foie', correct: true, correction: 'Vrai — la majorité des facteurs de coagulation sont produits par le foie.' },
      { text: 'Le rein', correct: false, correction: 'Faux — il n’est pas la principale source des facteurs de coagulation.' },
    ],
    explanation: 'La synthèse des facteurs plasmatiques de coagulation est majoritairement hépatique ; le cours distingue notamment le cas du facteur VIII. (Cours, p. 3–4)'
  },
  {
    id: 10,
    type: 'QRM',
    question: 'Quelles correspondances entre facteurs de coagulation et fonctions ou pathologies sont exactes ?',
    options: [
      { text: 'Facteur IX : déficit responsable de l’hémophilie B', correct: true, correction: 'Le facteur IX est historiquement l’antihémophilique B.' },
      { text: 'Facteur II : prothrombine', correct: true, correction: 'La prothrombine est activée en thrombine.' },
      { text: 'Facteur XIII : stabilisation du réseau de fibrine', correct: true, correction: 'Le XIIIa réticule la fibrine.' },
      { text: 'Facteur VIII : déficit responsable de l’hémophilie B', correct: false, correction: 'Le déficit en VIII correspond à l’hémophilie A ; l’hémophilie B concerne le IX.' },
      { text: 'Facteur I : fibrinogène', correct: true, correction: 'Le fibrinogène porte le numéro I.' },
    ],
    explanation: 'Il faut distinguer les numéros, le rôle du XIII dans la stabilisation de la fibrine et les deux hémophilies classiques, A (VIII) et B (IX). (Cours, p. 4 et 7)'
  },
  {
    id: 11,
    type: 'QCM',
    question: 'Quel ensemble contient uniquement les quatre facteurs procoagulants vitamine K-dépendants enseignés dans ce cours ?',
    options: [
      { text: 'I, VII, XI et XIII', correct: false, correction: 'Seul le VII est commun avec la liste attendue.' },
      { text: 'II, V, VII et VIII', correct: false, correction: 'Les facteurs V et VIII ne sont pas vitamine K-dépendants.' },
      { text: 'I, II, V et XIII', correct: false, correction: 'Le fibrinogène, le V et le XIII ne figurent pas dans ce groupe.' },
      { text: 'II, VII, IX et X', correct: true, correction: 'Ce sont les quatre facteurs procoagulants concernés.' },
      { text: 'VII, VIII, IX et XII', correct: false, correction: 'Le VIII et le XII ne font pas partie de ce groupe ; II et X manquent.' },
    ],
    explanation: 'La vitamine K permet la maturation fonctionnelle des facteurs II, VII, IX et X par γ-carboxylation. (Cours, p. 4–5)'
  },
  {
    id: 12,
    type: 'QRM',
    question: 'Au sujet de la maturation des facteurs vitamine K-dépendants dans l’hépatocyte, quelles propositions sont exactes ?',
    options: [
      { text: 'Les facteurs II, VII, IX et X sont concernés', correct: true, correction: 'Ce sont les facteurs procoagulants cités comme vitamine K-dépendants.' },
      { text: 'La vitamine K sous forme réduite participe à la réaction', correct: true, correction: 'La forme réduite est le cofacteur actif de la carboxylation.' },
      { text: 'La réaction transforme directement le fibrinogène en fibrine', correct: false, correction: 'Cette transformation est catalysée plus tard par la thrombine.' },
      { text: 'Une γ-carboxylase modifie certains résidus glutamate', correct: true, correction: 'Elle forme des résidus γ-carboxyglutamate, ou Gla.' },
      { text: 'La γ-carboxylation retire toutes les charges négatives des facteurs', correct: false, correction: 'Elle apporte au contraire des groupements chargés négativement.' },
    ],
    explanation: 'La γ-carboxylation vitamine K-dépendante des facteurs II, VII, IX et X crée des domaines Gla capables de se lier au calcium et aux membranes procoagulantes. (Cours, p. 5)'
  },
  {
    id: 13,
    type: 'QCM',
    question: 'Quelle est la fonction de la vitamine K époxyde réductase dans le cycle de la vitamine K ?',
    options: [
      { text: 'Réticuler les monomères de fibrine', correct: false, correction: 'Cette stabilisation dépend du facteur XIIIa.' },
      { text: 'Cliver le fibrinogène en monomères de fibrine', correct: false, correction: 'C’est une action de la thrombine.' },
      { text: 'Régénérer une forme réduite active de la vitamine K', correct: true, correction: 'Cette forme alimente la réaction de γ-carboxylation.' },
      { text: 'Dégrader le facteur tissulaire exposé', correct: false, correction: 'L’enzyme participe au cycle de la vitamine K, pas à la destruction du facteur tissulaire.' },
      { text: 'Activer directement le plasminogène', correct: false, correction: 'Le t-PA active le plasminogène pendant la fibrinolyse.' },
    ],
    explanation: 'La vitamine K époxyde réductase recycle la vitamine K vers sa forme réduite, nécessaire à l’activité de la γ-carboxylase. (Cours, p. 5)'
  },
  {
    id: 14,
    type: 'QRM',
    question: 'Quelles situations citées dans le cours peuvent favoriser une carence en vitamine K ?',
    options: [
      { text: 'Une cholestase entraînant une malabsorption des vitamines liposolubles', correct: true, correction: 'La vitamine K est liposoluble ; sa mauvaise absorption favorise la carence.' },
      { text: 'Une exposition locale du facteur tissulaire après une brèche', correct: false, correction: 'Cette exposition initie la coagulation mais n’est pas une cause de carence vitaminique.' },
      { text: 'La période néonatale, avec des réserves limitées', correct: true, correction: 'Le nouveau-né est une situation à risque citée.' },
      { text: 'Une antibiothérapie à large spectre perturbant le microbiote', correct: true, correction: 'Elle peut réduire la contribution du microbiote et participer à la carence, selon le contexte.' },
      { text: 'Une dénutrition', correct: true, correction: 'Elle peut réduire les apports nutritionnels.' },
    ],
    explanation: 'Le cours retient des apports ou réserves faibles, une malabsorption, et une perturbation du microbiote parmi les contextes favorisant la carence en vitamine K. (Cours, p. 4)'
  },
  {
    id: 15,
    type: 'QCM',
    question: 'Quelle modification biochimique produit la γ-carboxylation des facteurs vitamine K-dépendants ?',
    options: [
      { text: 'La conversion de résidus glutamate en résidus Gla', correct: true, correction: 'L’ajout d’un groupement carboxyle forme le γ-carboxyglutamate.' },
      { text: 'La polymérisation spontanée du facteur VII', correct: false, correction: 'La polymérisation spontanée décrite concerne les monomères de fibrine.' },
      { text: 'La fixation d’un fibrinopeptide A sur le calcium', correct: false, correction: 'Les fibrinopeptides appartiennent au fibrinogène et sont clivés par la thrombine.' },
      { text: 'La suppression de leurs résidus glutamate', correct: false, correction: 'Les résidus glutamate sont modifiés, non supprimés.' },
      { text: 'La transformation de la prothrombine en plasmine', correct: false, correction: 'Prothrombine et plasminogène appartiennent à deux systèmes distincts.' },
    ],
    explanation: 'La γ-carboxylase ajoute un groupement carboxyle à certains glutamates, créant des résidus Gla chargés négativement. (Cours, p. 5)'
  },
  {
    id: 16,
    type: 'QRM',
    question: 'Comment les facteurs vitamine K-dépendants sont-ils concentrés sur la surface des plaquettes activées ?',
    options: [
      { text: 'Les plaquettes activées exposent des phospholipides anioniques', correct: true, correction: 'Leur changement de répartition membranaire crée une surface procoagulante.' },
      { text: 'L’ancrage requiert la disparition complète du calcium', correct: false, correction: 'Le calcium est au contraire indispensable au pont de liaison décrit.' },
      { text: 'Les domaines Gla des facteurs peuvent interagir avec le calcium', correct: true, correction: 'La γ-carboxylation rend possible cette liaison au calcium.' },
      { text: 'Ce regroupement accélère les réactions de génération de thrombine', correct: true, correction: 'La concentration locale des réactifs favorise la cascade.' },
      { text: 'Le calcium sert de pont entre facteurs carboxylés et membrane phospholipidique', correct: true, correction: 'Il facilite l’ancrage des facteurs sur la surface plaquettaire.' },
    ],
    explanation: 'La surface anionique des plaquettes et le calcium organisent localement les facteurs carboxylés, ce qui facilite la production rapide de thrombine. (Cours, p. 5–6)'
  },
  {
    id: 17,
    type: 'QCM',
    question: 'En cas d’échec de la γ-carboxylation, quelle fonction des facteurs II, VII, IX et X est directement compromise ?',
    options: [
      { text: 'Leur captation de l’oxygène par l’hémoglobine', correct: false, correction: 'Cette fonction appartient aux érythrocytes, sans rapport avec les facteurs.' },
      { text: 'Leur transformation en fibrinogène', correct: false, correction: 'Ces facteurs ne sont pas des précurseurs du fibrinogène.' },
      { text: 'La libération de t-PA par l’endothélium', correct: false, correction: 'C’est un mécanisme de fibrinolyse distinct de leur maturation.' },
      { text: 'Leur production d’anticorps spécifiques', correct: false, correction: 'Les facteurs de coagulation ne produisent pas d’anticorps.' },
      { text: 'Leur ancrage efficace aux membranes procoagulantes via le calcium', correct: true, correction: 'Les domaines Gla sont nécessaires à la liaison calcium–phospholipides.' },
    ],
    explanation: 'Sans carboxylation correcte, ces facteurs perdent leur aptitude à se fixer efficacement au calcium et à la surface phospholipidique, même s’ils peuvent être synthétisés. (Cours, p. 5–6)'
  },
  {
    id: 18,
    type: 'QRM',
    question: 'À propos de la localisation et de l’expression du facteur tissulaire, quelles propositions sont exactes ?',
    options: [
      { text: 'Des cellules endothéliales lésées ou activées peuvent en exprimer en situation pathologique', correct: true, correction: 'Vrai — cette expression favorise une coagulation inappropriée.' },
      { text: 'Certaines cellules d’organes peuvent en porter', correct: true, correction: 'Vrai — le cours le décrit dans plusieurs tissus extravasculaires.' },
      { text: 'On le trouve physiologiquement sur des fibroblastes de la paroi externe des vaisseaux', correct: true, correction: 'Vrai — cette localisation évite son contact direct avec le sang circulant.' },
      { text: 'Il tapisse normalement toute la face luminale de l’endothélium intact', correct: false, correction: 'Faux — en situation normale, le facteur tissulaire est séparé du sang circulant.' },
      { text: 'Il peut être présent dans des couches épithéliales', correct: true, correction: 'Vrai — elles font partie des localisations physiologiques indiquées.' },
    ],
    explanation: 'Le facteur tissulaire est surtout présent dans les tissus séparés du sang ; une expression endothéliale anormale peut survenir en pathologie. (Cours, p. 3)'
  },
  {
    id: 19,
    type: 'QCM',
    question: 'Le déficit congénital de quel facteur définit l’hémophilie A ?',
    options: [
      { text: 'Le facteur XI', correct: false, correction: 'Faux — son déficit ne correspond pas à l’hémophilie A.' },
      { text: 'Le facteur VII', correct: false, correction: 'Faux — le facteur VII ne définit pas l’hémophilie A.' },
      { text: 'Le facteur XII', correct: false, correction: 'Faux — son déficit ne définit pas l’hémophilie A.' },
      { text: 'Le facteur IX', correct: false, correction: 'Faux — son déficit définit l’hémophilie B.' },
      { text: 'Le facteur VIII', correct: true, correction: 'Vrai — l’hémophilie A congénitale est due à un déficit en facteur VIII.' },
    ],
    explanation: 'Il faut distinguer l’hémophilie A, liée au facteur VIII, de l’hémophilie B, liée au facteur IX. (Cours, p. 4 et 12)'
  },
  {
    id: 20,
    type: 'QRM',
    question: 'Concernant les sources et les caractéristiques de la vitamine K, quelles propositions sont exactes ?',
    options: [
      { text: 'Le microbiote intestinal peut contribuer à sa production', correct: true, correction: 'Vrai — c’est une source endogène indiquée dans le cours.' },
      { text: 'Elle peut provenir de l’alimentation, notamment des légumes verts', correct: true, correction: 'Vrai — le cours cite les légumes verts parmi ses apports exogènes.' },
      { text: 'Elle est fabriquée uniquement par les plaquettes activées', correct: false, correction: 'Faux — les plaquettes n’en sont pas l’unique source ; alimentation et microbiote contribuent aux apports.' },
      { text: 'Une alimentation dépourvue de vitamine K ne peut jamais modifier les réserves', correct: false, correction: 'Faux — de faibles apports participent au risque de carence.' },
      { text: 'Il s’agit d’une vitamine liposoluble', correct: true, correction: 'Vrai — cette propriété explique la sensibilité de son absorption à certains troubles digestifs ou biliaires.' },
    ],
    explanation: 'La vitamine K est liposoluble ; elle provient de l’alimentation et, selon le cours, également du microbiote intestinal. (Cours, p. 4)'
  },
  {
    id: 21,
    type: 'QCM',
    question: 'Quelle modification des plaquettes activées favorise directement l\'assemblage local des réactions de coagulation ?',
    options: [
      { text: 'L\'exposition de phospholipides chargés négativement sur leur face externe', correct: true, correction: 'Vrai — cette surface accueille les facteurs de coagulation et accélère la génération locale de thrombine.' },
      { text: 'L\'inactivation du calcium à la surface du clou plaquettaire', correct: false, correction: 'Faux — le calcium facilite la fixation des facteurs à la surface phospholipidique.' },
      { text: 'La libération du facteur tissulaire par toutes les plaquettes circulantes', correct: false, correction: 'Faux — le facteur tissulaire est surtout exposé par les tissus lésés, et non libéré par toutes les plaquettes.' },
      { text: 'La disparition des récepteurs GPIIb/IIIa de leur membrane', correct: false, correction: 'Faux — GPIIb/IIIa participe à l\'agrégation plaquettaire via le fibrinogène.' },
      { text: 'La transformation du fibrinogène en fibrine avant l\'apparition de thrombine', correct: false, correction: 'Faux — la thrombine permet cette transformation.' },
    ],
    explanation: 'L\'activation plaquettaire provoque un remaniement membranaire qui expose des phospholipides anioniques : les complexes de coagulation peuvent alors se former à proximité de la brèche. (Cours, p. 5)'
  },
  {
    id: 22,
    type: 'QRM',
    question: 'Au niveau d\'une brèche vasculaire, quelles propositions décrivent correctement le passage de l\'hémostase primaire à la coagulation ?',
    options: [
      { text: 'L\'agrégation plaquettaire n\'intervient qu\'après la formation du réseau de fibrine', correct: false, correction: 'Faux — l\'agrégation fait partie de l\'hémostase primaire et forme le clou que la fibrine consolide.' },
      { text: 'La lésion rend le facteur tissulaire accessible au sang', correct: true, correction: 'Vrai — son exposition contribue au déclenchement de la coagulation.' },
      { text: 'L\'agrégation plaquettaire peut être assurée par le fibrinogène fixé à GPIIb/IIIa', correct: true, correction: 'Vrai — le fibrinogène forme des ponts entre plaquettes via GPIIb/IIIa.' },
      { text: 'Le thrombus plaquettaire initial reste insuffisamment stable pour arrêter durablement le saignement', correct: true, correction: 'Vrai — il doit être consolidé par un réseau de fibrine.' },
      { text: 'Le facteur XIII dissout immédiatement le clou plaquettaire', correct: false, correction: 'Faux — le facteur XIII stabilise la fibrine ; la dissolution tardive du caillot relève de la fibrinolyse.' },
    ],
    explanation: 'La vasoconstriction, l\'adhésion, l\'activation puis l\'agrégation produisent un clou plaquettaire ; l\'exposition du facteur tissulaire favorise ensuite la génération de thrombine et de fibrine. (Cours, p. 6)'
  },
  {
    id: 23,
    type: 'QCM',
    question: 'Pourquoi une production importante de thrombine loin d\'une brèche vasculaire est-elle indésirable ?',
    options: [
      { text: 'Elle convertit les D-dimères en fibrinogène circulant', correct: false, correction: 'Faux — les D-dimères proviennent de la dégradation de fibrine stabilisée, sans retour en fibrinogène.' },
      { text: 'Elle empêche définitivement toute activation des plaquettes', correct: false, correction: 'Faux — la thrombine ne bloque pas définitivement l\'activation plaquettaire.' },
      { text: 'Elle détruit directement le réseau de fibrine déjà formé', correct: false, correction: 'Faux — la destruction de fibrine relève principalement de la plasmine.' },
      { text: 'Elle supprime le besoin de calcium pour les facteurs vitamine K-dépendants', correct: false, correction: 'Faux — le calcium garde son rôle dans leur fixation aux surfaces phospholipidiques.' },
      { text: 'Elle peut favoriser la formation de fibrine et une coagulation à un endroit inapproprié', correct: true, correction: 'Vrai — la thrombine transforme le fibrinogène en fibrine ; son activité doit rester localisée à la lésion.' },
    ],
    explanation: 'La génération de thrombine doit rester concentrée au site de la brèche, car elle produit de la fibrine et pourrait déclencher une coagulation indésirable ailleurs. (Cours, p. 6)'
  },
  {
    id: 24,
    type: 'QRM',
    question: 'À propos de la génération physiologique de thrombine, quelles propositions sont exactes ?',
    options: [
      { text: 'Une diffusion de la coagulation à tout le réseau vasculaire est nécessaire à l\'hémostase normale', correct: false, correction: 'Faux — la réaction doit être circonscrite à la lésion.' },
      { text: 'Le complexe facteur tissulaire–facteur VIIa participe au déclenchement de la cascade', correct: true, correction: 'Vrai — cette association permet d\'activer d\'autres facteurs de coagulation.' },
      { text: 'La génération de thrombine exige que le facteur tissulaire reste isolé du sang', correct: false, correction: 'Faux — l\'exposition du facteur tissulaire au sang est le signal initiateur décrit dans le cours.' },
      { text: 'Les phospholipides des plaquettes activées fournissent un support aux réactions enzymatiques', correct: true, correction: 'Vrai — ils contribuent à concentrer les réactions au site de la lésion.' },
      { text: 'La production de thrombine doit rester localisée à la brèche', correct: true, correction: 'Vrai — une génération à distance favoriserait une coagulation indésirable.' },
    ],
    explanation: 'L\'initiation par le facteur tissulaire et le facteur VIIa conduit à une génération de thrombine concentrée sur les surfaces plaquettaires activées près de la brèche. (Cours, p. 6)'
  },
  {
    id: 25,
    type: 'QCM',
    question: 'Quelle réaction de la phase terminale de coagulation est directement catalysée par la thrombine ?',
    options: [
      { text: 'La dégradation du réseau de fibrine en D-dimères', correct: false, correction: 'Faux — la dégradation de la fibrine relève principalement de la plasmine.' },
      { text: 'La transformation de la fibrine en fibrinogène', correct: false, correction: 'Faux — le sens de cette transformation est inversé.' },
      { text: 'L\'absorption intestinale de la vitamine K', correct: false, correction: 'Faux — l\'absorption de vitamine K n\'est pas une réaction catalysée par la thrombine.' },
      { text: 'Le clivage du fibrinogène conduisant aux monomères de fibrine', correct: true, correction: 'Vrai — la thrombine retire les fibrinopeptides du fibrinogène.' },
      { text: 'La conversion de la plasmine en plasminogène', correct: false, correction: 'Faux — la plasmine provient du plasminogène lors de la fibrinolyse.' },
    ],
    explanation: 'La thrombine clive le fibrinogène : les monomères de fibrine ainsi libérés peuvent ensuite polymériser. (Cours, p. 7)'
  },
  {
    id: 26,
    type: 'QRM',
    question: 'Concernant la formation des monomères de fibrine, quelles propositions sont justes ?',
    options: [
      { text: 'La thrombine clive les fibrinopeptides A et B du fibrinogène', correct: true, correction: 'Vrai — ce clivage permet d\'obtenir les monomères de fibrine.' },
      { text: 'Le fibrinogène est un produit de dégradation de la fibrine', correct: false, correction: 'Faux — le fibrinogène est le précurseur soluble de la fibrine.' },
      { text: 'Le facteur XIIIa est l\'enzyme qui clive les fibrinopeptides A et B', correct: false, correction: 'Faux — ce clivage est effectué par la thrombine ; XIIIa stabilise ensuite le réseau.' },
      { text: 'Le fibrinogène possède deux domaines D et un domaine central E', correct: true, correction: 'Vrai — c\'est l\'organisation du fibrinogène décrite dans le cours.' },
      { text: 'Les monomères de fibrine s\'assemblent spontanément après le clivage', correct: true, correction: 'Vrai — leur polymérisation forme un premier réseau de fibrine.' },
    ],
    explanation: 'Le fibrinogène possède des domaines D et E ; la thrombine en clive les fibrinopeptides A et B, ce qui permet la polymérisation des monomères de fibrine. (Cours, p. 7)'
  },
  {
    id: 27,
    type: 'QCM',
    question: 'Lors de la stabilisation de la fibrine, quel est le rôle direct du facteur XIII activé ?',
    options: [
      { text: 'Transformer le plasminogène en plasmine', correct: false, correction: 'Faux — cette activation relève notamment du t-PA dans la fibrinolyse.' },
      { text: 'Créer des liaisons covalentes qui renforcent le réseau de fibrine', correct: true, correction: 'Vrai — XIIIa réticule la fibrine et accroît la stabilité du caillot.' },
      { text: 'Cliver les fibrinopeptides A et B du fibrinogène', correct: false, correction: 'Faux — ce clivage est effectué par la thrombine.' },
      { text: 'Dissoudre immédiatement le thrombus plaquettaire', correct: false, correction: 'Faux — il stabilise le caillot au lieu de le dissoudre.' },
      { text: 'Exposer le facteur tissulaire dans le sous-endothélium', correct: false, correction: 'Faux — l\'exposition du facteur tissulaire résulte de la brèche vasculaire.' },
    ],
    explanation: 'Après sa propre activation par la thrombine, le facteur XIIIa établit des liaisons covalentes dans le réseau de fibrine déjà formé. (Cours, p. 7)'
  },
  {
    id: 28,
    type: 'QRM',
    question: 'Quelles étapes contribuent à obtenir un caillot fibrino-plaquettaire durable ?',
    options: [
      { text: 'La dissolution immédiate du réseau par la plasmine pendant la consolidation', correct: false, correction: 'Faux — la destruction du réseau s\'oppose à la stabilisation du caillot.' },
      { text: 'L\'activation du facteur XIII par la thrombine', correct: true, correction: 'Vrai — elle rend possible la stabilisation finale du réseau.' },
      { text: 'L\'absence complète de thrombine après la formation du clou plaquettaire', correct: false, correction: 'Faux — la thrombine est nécessaire pour produire la fibrine et activer XIII.' },
      { text: 'La polymérisation spontanée des monomères de fibrine après leur formation', correct: true, correction: 'Vrai — elle construit le réseau initial.' },
      { text: 'La formation de liaisons covalentes entre monomères de fibrine', correct: true, correction: 'Vrai — XIIIa renforce ainsi le réseau de fibrine.' },
    ],
    explanation: 'La thrombine forme les monomères de fibrine et active XIII ; la polymérisation puis les liaisons covalentes assurent la résistance du réseau. (Cours, p. 7)'
  },
  {
    id: 29,
    type: 'QCM',
    question: 'D\'après le cours, quelle origine des déficits de coagulation est la plus fréquente en pratique ?',
    options: [
      { text: 'Les déficits congénitaux, car tout déficit de coagulation apparaît dès l\'enfance', correct: false, correction: 'Faux — les déficits congénitaux sont rares et l\'âge d\'apparition n\'est pas une règle absolue.' },
      { text: 'Les déficits ne touchant que le facteur VII chez le nouveau-né', correct: false, correction: 'Faux — ce tableau particulier n\'est pas présenté comme la situation la plus fréquente.' },
      { text: 'Les déficits acquis, souvent associés à une maladie ou à un contexte survenu plus tard', correct: true, correction: 'Vrai — le cours indique qu\'ils sont plus fréquents et apparaissent souvent à l\'âge adulte.' },
      { text: 'Les déficits exclusivement liés à l\'absence de plaquettes', correct: false, correction: 'Faux — une thrombopénie relève de l\'hémostase primaire et n\'est pas un déficit en facteurs de coagulation.' },
      { text: 'Les déficits dus exclusivement à une nouvelle mutation du facteur XIII', correct: false, correction: 'Faux — une nouvelle mutation peut expliquer certaines formes congénitales, mais ne représente pas l\'origine la plus fréquente des déficits.' },
    ],
    explanation: 'Le cours précise que les déficits congénitaux sont rares tandis que les déficits acquis sont plus fréquents, souvent avec maladie sous-jacente et début à l\'âge adulte. (Cours, p. 8)'
  },
  {
    id: 30,
    type: 'QRM',
    question: 'Dans le déroulement local de la coagulation après une brèche, quelles relations causales sont correctes ?',
    options: [
      { text: 'Le facteur XIIIa renforce le réseau formé en créant des liaisons covalentes', correct: true, correction: 'Vrai — cette étape stabilise la fibrine polymérisée.' },
      { text: 'L\'exposition du facteur tissulaire au sang favorise l\'initiation de la cascade', correct: true, correction: 'Vrai — le facteur tissulaire devient accessible au sang lors de la brèche.' },
      { text: 'Les phospholipides exposés par les plaquettes activées concentrent les réactions enzymatiques', correct: true, correction: 'Vrai — ils fournissent un support à la génération de thrombine.' },
      { text: 'La plasmine produit les premiers monomères de fibrine avant la thrombine', correct: false, correction: 'Faux — la plasmine dégrade la fibrine lors de la fibrinolyse ; la thrombine produit les monomères.' },
      { text: 'La thrombine transforme le fibrinogène en monomères de fibrine', correct: true, correction: 'Vrai — elle clive les fibrinopeptides et permet ensuite la polymérisation.' },
    ],
    explanation: 'La brèche expose le facteur tissulaire ; la surface des plaquettes activées facilite la génération de thrombine, puis la fibrine se forme et XIIIa la stabilise. (Cours, p. 5-7)'
  },
  {
    id: 31,
    type: 'QCM',
    question: 'Quelle manifestation hémorragique oriente le plus vers un déficit de coagulation plutôt que vers un trouble de l\'hémostase primaire ?',
    options: [
      { text: 'Une épistaxis superficielle spontanée', correct: false, correction: 'Faux — un saignement muqueux spontané suggère plutôt l\'hémostase primaire.' },
      { text: 'Un saignement gingival spontané', correct: false, correction: 'Faux — le saignement muqueux est plus typique d\'une atteinte de l\'hémostase primaire.' },
      { text: 'Un purpura diffus', correct: false, correction: 'Faux — le purpura évoque plutôt une anomalie de l\'hémostase primaire.' },
      { text: 'Des pétéchies cutanées', correct: false, correction: 'Faux — ces petites lésions cutanées orientent plutôt vers un trouble plaquettaire ou vasculaire.' },
      { text: 'Une hémarthrose', correct: true, correction: 'Vrai — les saignements articulaires profonds sont caractéristiques d\'un trouble de la coagulation.' },
    ],
    explanation: 'Le cours oppose les saignements cutanéo-muqueux de l\'hémostase primaire aux hémorragies profondes, comme l\'hémarthrose, liées aux déficits de coagulation. (Cours, p. 8)'
  },
  {
    id: 32,
    type: 'QRM',
    question: 'Quels éléments cliniques sont classiquement en faveur d\'un trouble de la coagulation ?',
    options: [
      { text: 'Des saignements exclusivement cutanéo-muqueux spontanés', correct: false, correction: 'Faux — cette présentation oriente plutôt vers l\'hémostase primaire.' },
      { text: 'Un purpura cutané disséminé', correct: false, correction: 'Faux — il évoque plus volontiers une atteinte de l\'hémostase primaire.' },
      { text: 'Un saignement dans les tissus profonds', correct: true, correction: 'Vrai — les hémorragies profondes orientent vers une anomalie des facteurs de coagulation.' },
      { text: 'Une hémarthrose', correct: true, correction: 'Vrai — c\'est un exemple de saignement profond.' },
      { text: 'Une hémorragie après un traumatisme même minime', correct: true, correction: 'Vrai — le cours décrit des saignements souvent provoqués dans les troubles de coagulation.' },
    ],
    explanation: 'Une coagulopathie se manifeste typiquement par des hémorragies profondes, notamment articulaires, pouvant être révélées par un traumatisme minime. (Cours, p. 8)'
  },
  {
    id: 33,
    type: 'QCM',
    question: 'Quel ensemble de signes oriente d\'abord vers une anomalie de l\'hémostase primaire ?',
    options: [
      { text: 'Hémarthrose et hématome musculaire profond', correct: false, correction: 'Faux — ces saignements profonds orientent vers la coagulation.' },
      { text: 'Saignement profond retardé après un choc minime', correct: false, correction: 'Faux — ce profil est plus évocateur d\'une coagulopathie.' },
      { text: 'Purpura et saignements cutanéo-muqueux spontanés', correct: true, correction: 'Vrai — cette association est typique d\'une atteinte de l\'hémostase primaire.' },
      { text: 'Hémorragie articulaire isolée et récidivante', correct: false, correction: 'Faux — l\'hémarthrose oriente vers la coagulation.' },
      { text: 'Hématome profond après traumatisme et hémarthrose', correct: false, correction: 'Faux — elle suggère plutôt un déficit de coagulation.' },
    ],
    explanation: 'Le purpura et les manifestations cutanéo-muqueuses spontanées orientent vers une anomalie de l\'hémostase primaire. (Cours, p. 8)'
  },
  {
    id: 34,
    type: 'QRM',
    question: 'À propos de l\'origine congénitale ou acquise d\'un déficit de coagulation, quelles propositions sont exactes ?',
    options: [
      { text: 'L\'absence de cas familial exclut une hémophilie A', correct: false, correction: 'Faux — des mutations nouvelles peuvent être responsables d\'hémophilie A.' },
      { text: 'Un déficit révélé à l\'âge adulte avec maladie sous-jacente peut être acquis', correct: true, correction: 'Vrai — c\'est le profil fréquent des déficits acquis.' },
      { text: 'Des antécédents familiaux soutiennent l\'hypothèse congénitale sans être indispensables', correct: true, correction: 'Vrai — une mutation nouvelle peut expliquer l\'absence d\'antécédents.' },
      { text: 'Un début précoce dans la vie oriente vers un déficit congénital', correct: true, correction: 'Vrai — ces déficits se manifestent souvent dès le jeune âge.' },
      { text: 'Les déficits acquis se manifestent nécessairement dès l\'enfance', correct: false, correction: 'Faux — ils apparaissent plutôt chez l\'adulte selon le cours.' },
    ],
    explanation: 'Le moment de début, les antécédents familiaux et le contexte médical orientent l\'étiologie ; aucun antécédent familial n\'est obligatoire pour un déficit congénital. (Cours, p. 8)'
  },
  {
    id: 35,
    type: 'QCM',
    question: 'Quel contexte rend prioritaire l\'hypothèse d\'un déficit congénital de coagulation ?',
    options: [
      { text: 'Épisodes hémorragiques depuis l\'enfance avec plusieurs apparentés atteints', correct: true, correction: 'Vrai — début précoce et antécédents familiaux soutiennent une origine congénitale.' },
      { text: 'Saignement nouveau après instauration d\'un anticoagulant', correct: false, correction: 'Faux — une cause liée au traitement doit d\'abord être envisagée.' },
      { text: 'Saignement apparu seulement après une maladie hépatique diagnostiquée à l\'âge adulte', correct: false, correction: 'Faux — la maladie hépatique oriente plutôt vers un déficit acquis.' },
      { text: 'Purpura isolé apparu lors d\'une infection récente', correct: false, correction: 'Faux — ce tableau évoque surtout l\'hémostase primaire et un contexte acquis.' },
      { text: 'Apparition récente d\'hémorragies chez une personne âgée avec cancer connu', correct: false, correction: 'Faux — le contexte tardif associé à une maladie fait envisager une cause acquise.' },
    ],
    explanation: 'Les déficits congénitaux, rares, sont souvent révélés tôt et peuvent s\'accompagner d\'antécédents familiaux. (Cours, p. 8)'
  },
  {
    id: 36,
    type: 'QRM',
    question: 'Lors de l\'évaluation initiale d\'un syndrome hémorragique, quelles démarches sont pertinentes ?',
    options: [
      { text: 'Préciser à l\'interrogatoire l\'âge de début des saignements', correct: true, correction: 'Vrai — la précocité peut orienter vers un déficit congénital.' },
      { text: 'Rechercher des antécédents familiaux de saignement', correct: true, correction: 'Vrai — ils contribuent à l\'orientation, même si leur absence n\'exclut rien.' },
      { text: 'Se dispenser de bilan biologique dès que l\'interrogatoire est évocateur', correct: false, correction: 'Faux — un bilan biologique est souvent nécessaire pour caractériser le trouble.' },
      { text: 'Conclure à une origine acquise uniquement parce qu\'aucun apparenté n\'est atteint', correct: false, correction: 'Faux — des formes congénitales peuvent résulter d\'une mutation nouvelle.' },
      { text: 'Décrire à l\'examen clinique la localisation superficielle ou profonde des hémorragies', correct: true, correction: 'Vrai — ce profil aide à distinguer hémostase primaire et coagulation.' },
    ],
    explanation: 'Le diagnostic associe interrogatoire, examen clinique et analyses biologiques ; âge d\'apparition, histoire familiale et type de saignement guident l\'orientation. (Cours, p. 8)'
  },
  {
    id: 37,
    type: 'QCM',
    question: 'Dans le bilan initial d\'un syndrome hémorragique, quel examen renseigne directement sur le nombre de plaquettes ?',
    options: [
      { text: 'L\'INR', correct: false, correction: 'Faux — il sert notamment à la surveillance des AVK, pas au dénombrement plaquettaire.' },
      { text: 'L\'hémogramme', correct: true, correction: 'Vrai — il inclut notamment la numération des plaquettes.' },
      { text: 'Le TCA', correct: false, correction: 'Faux — il mesure un temps de coagulation et ne compte pas les plaquettes.' },
      { text: 'Le dosage des D-dimères', correct: false, correction: 'Faux — il renseigne sur la dégradation de la fibrine, pas sur le nombre de plaquettes.' },
      { text: 'Le temps de Quick', correct: false, correction: 'Faux — il explore la coagulation, sans mesurer la numération plaquettaire.' },
    ],
    explanation: 'L\'hémogramme vérifie notamment le nombre de plaquettes avant d\'interpréter les tests de coagulation. (Cours, p. 9)'
  },
  {
    id: 38,
    type: 'QRM',
    question: 'Quels examens font partie des données initiales utiles devant un syndrome hémorragique selon le cours ?',
    options: [
      { text: 'Un hémogramme pour vérifier la numération plaquettaire', correct: true, correction: 'Vrai — il permet d\'évaluer notamment le nombre de plaquettes.' },
      { text: 'Le temps de Quick ou TP', correct: true, correction: 'Vrai — c\'est l\'un des deux principaux tests de première intention de la coagulation.' },
      { text: 'Le dosage systématique de tous les facteurs sans tenir compte des tests de dépistage', correct: false, correction: 'Faux — le cours privilégie d\'abord les tests de dépistage pour orienter l\'exploration.' },
      { text: 'La recherche exclusive des D-dimères à la place du TP et du TCA', correct: false, correction: 'Faux — les D-dimères ne remplacent pas les tests initiaux de coagulation.' },
      { text: 'Le TCA', correct: true, correction: 'Vrai — il complète le TP dans l\'exploration initiale de la coagulation.' },
    ],
    explanation: 'L\'exploration initiale associe l\'hémogramme, qui renseigne sur les plaquettes, et les deux tests de dépistage de coagulation : TP et TCA. (Cours, p. 9)'
  },
  {
    id: 39,
    type: 'QCM',
    question: 'Quels repères indicatifs du temps de Quick et du TP sont donnés comme usuels dans le cours ?',
    options: [
      { text: 'Un temps de Quick d\'environ 12 secondes et un TP généralement d\'au moins 70 %', correct: true, correction: 'Vrai — ce sont les valeurs indicatives rapportées dans le cours.' },
      { text: 'Un temps de Quick d\'environ 60 secondes et un TP d\'au moins 70 %', correct: false, correction: 'Faux — le cours donne environ 12 secondes comme temps de Quick normal.' },
      { text: 'Un temps de Quick d\'environ 12 secondes et un TP inférieur à 20 %', correct: false, correction: 'Faux — un TP inférieur à 20 % n\'est pas présenté comme normal.' },
      { text: 'Un temps de Quick d\'environ 12 secondes et un TP exprimé obligatoirement en g/L', correct: false, correction: 'Faux — le TP est exprimé en pourcentage ; les g/L servent notamment au fibrinogène.' },
      { text: 'Un temps de Quick d\'environ 12 secondes et un TP exprimé comme un ratio normal inférieur à 1,2', correct: false, correction: 'Faux — le ratio inférieur à 1,2 est le repère donné pour le TCA chez l\'adulte.' },
    ],
    explanation: 'Le cours cite, à titre indicatif, un temps de Quick normal proche de 12 secondes et un TP normal généralement supérieur ou égal à 70 %. (Cours, p. 10)'
  },
  {
    id: 40,
    type: 'QRM',
    question: 'Un patient sous anticoagulant doit bénéficier d\'un bilan de coagulation. Quelles affirmations sont justes ?',
    options: [
      { text: 'La présence d\'un anticoagulant impose d\'annuler tout prélèvement de coagulation', correct: false, correction: 'Faux — le bilan n\'est pas interdit ; il faut simplement signaler le traitement.' },
      { text: 'Le traitement doit être connu de la personne qui interprète les résultats', correct: true, correction: 'Vrai — cette information est indispensable à l\'interprétation.' },
      { text: 'Il faut interpréter TP et TCA sans tenir compte du traitement', correct: false, correction: 'Faux — cela expose à une mauvaise interprétation.' },
      { text: 'La prise d\'anticoagulant peut modifier les tests de coagulation', correct: true, correction: 'Vrai — les résultats doivent être lus dans ce contexte thérapeutique.' },
      { text: 'Le bilan peut être réalisé malgré le traitement', correct: true, correction: 'Vrai — le cours précise qu\'un bilan reste réalisable sous anticoagulant.' },
    ],
    explanation: 'Les anticoagulants peuvent modifier le bilan : l\'analyse reste possible, à condition de connaître et transmettre précisément le traitement reçu. (Cours, p. 9)'
  },
  {
    id: 41,
    type: 'QCM',
    question: 'Quel énoncé décrit le principe du temps de Quick ?',
    options: [
      { text: 'Il mesure l\'agrégation des plaquettes dans le sang total exposé au collagène.', correct: false, correction: 'Le temps de Quick est un test de coagulation réalisé sur plasma, pas une mesure d\'agrégation plaquettaire.' },
      { text: 'Il dénombre les plaquettes après centrifugation du tube.', correct: false, correction: 'La numération plaquettaire relève de l\'hémogramme.' },
      { text: 'Il mesure la lyse d\'un caillot sous l\'action du t-PA.', correct: false, correction: 'La lyse du caillot relève de la fibrinolyse, et non du principe du temps de Quick.' },
      { text: 'Il déclenche la coagulation par un activateur de la phase contact sans facteur tissulaire.', correct: false, correction: 'Cette logique correspond au TCA ; le temps de Quick utilise du facteur tissulaire.' },
      { text: 'Il mesure le délai de formation de fibrine après ajout de facteur tissulaire, de phospholipides et de calcium à un plasma citraté.', correct: true, correction: 'Le réactif déclenche la coagulation du plasma citraté recalcifié ; l\'automate repère la formation de fibrine.' },
    ],
    explanation: 'Le temps de Quick explore la coagulation d\'un plasma citraté après apport du réactif contenant notamment facteur tissulaire, phospholipides et calcium. (Cours, p. 9)'
  },
  {
    id: 42,
    type: 'QRM',
    question: 'À propos des conditions pratiques et de l\'expression du temps de Quick, quelles propositions sont exactes ?',
    options: [
      { text: 'Des phospholipides sont apportés puisque le plasma analysé a été séparé des plaquettes.', correct: true, correction: 'La centrifugation retire les cellules ; le réactif fournit le support phospholipidique.' },
      { text: 'La valeur du TP est le nombre de plaquettes par litre de sang.', correct: false, correction: 'Le TP exprime le résultat d\'un test de coagulation ; le nombre de plaquettes provient de l\'hémogramme.' },
      { text: 'Le réactif apporte du calcium pour permettre la coagulation du plasma.', correct: true, correction: 'La recalcification est nécessaire après le prélèvement sur citrate.' },
      { text: 'En France, le résultat peut être exprimé en taux de prothrombine, en pourcentage.', correct: true, correction: 'Le cours présente le TP comme une façon d\'exprimer le même test.' },
      { text: 'Le prélèvement destiné au test est recueilli sur citrate.', correct: true, correction: 'Le citrate empêche la coagulation du prélèvement avant l\'analyse.' },
    ],
    explanation: 'Le temps de Quick est mesuré sur plasma citraté, recalcifié avec apport de facteur tissulaire et de phospholipides ; son résultat peut être converti en TP. (Cours, p. 9-10)'
  },
  {
    id: 43,
    type: 'QCM',
    question: 'Chez un patient sans traitement anticoagulant connu, un TP diminué avec TCA normal oriente d\'abord vers le dosage de quel facteur ?',
    options: [
      { text: 'Facteur VII', correct: true, correction: 'Le VII est exploré par le TP, sans appartenir aux facteurs de la voie explorée spécifiquement par le TCA.' },
      { text: 'Facteur XIII', correct: false, correction: 'Le XIII stabilise la fibrine ; un déficit isolé n\'est pas révélé par ce profil de TP/TCA.' },
      { text: 'Facteur IX', correct: false, correction: 'Le IX est principalement exploré par le TCA.' },
      { text: 'Facteur VIII', correct: false, correction: 'Un déficit en VIII oriente plutôt vers un TCA allongé isolé.' },
      { text: 'Facteur XII', correct: false, correction: 'Le XII est exploré par le TCA, sans être une cause attendue de baisse isolée du TP.' },
    ],
    explanation: 'Une baisse isolée du TP oriente vers le facteur VII, puis doit être confirmée par le contexte et un dosage spécifique. (Cours, p. 10-11)'
  },
  {
    id: 44,
    type: 'QRM',
    question: 'Quels facteurs font partie de ceux explorés par le TP selon le cours ?',
    options: [
      { text: 'Facteur VIII', correct: false, correction: 'Le VIII est exploré par le TCA, pas par le TP usuel.' },
      { text: 'Fibrinogène', correct: true, correction: 'La formation de fibrine à partir du fibrinogène est nécessaire au résultat du test.' },
      { text: 'Facteur VII', correct: true, correction: 'Le VII participe à la voie déclenchée par le facteur tissulaire.' },
      { text: 'Facteur V', correct: true, correction: 'Le V appartient à la voie commune explorée par le TP.' },
      { text: 'Facteur XI', correct: false, correction: 'Le XI est exploré par le TCA, pas par le TP usuel.' },
    ],
    explanation: 'Le TP explore principalement VII, X, V, II et fibrinogène. Parmi les options proposées, VII, V et fibrinogène sont donc corrects. (Cours, p. 10)'
  },
  {
    id: 45,
    type: 'QCM',
    question: 'Comment le résultat du TCA est-il présenté dans le cours pour un adulte de plus de 16 ans ?',
    options: [
      { text: 'Comme un pourcentage normal supérieur à 70 %.', correct: false, correction: 'Cette présentation correspond au TP.' },
      { text: 'Comme un ratio temps patient/temps témoin, normalement inférieur à 1,2.', correct: true, correction: 'C\'est le mode d\'expression et la limite indicative donnés dans le cours.' },
      { text: 'Comme un INR qui doit toujours être égal à 2.', correct: false, correction: 'L\'INR se rattache au temps de Quick, notamment pour le suivi des AVK.' },
      { text: 'Comme un nombre de plaquettes par microlitre.', correct: false, correction: 'Cela relève de l\'hémogramme, pas du TCA.' },
      { text: 'Comme une concentration en g/L, normalement comprise entre 2 et 4.', correct: false, correction: 'Cette unité et cet intervalle concernent le fibrinogène.' },
    ],
    explanation: 'Le TCA est rapporté au temps d\'un plasma témoin ; le cours indique un ratio usuel inférieur à 1,2 chez l\'adulte de plus de 16 ans. (Cours, p. 10)'
  },
  {
    id: 46,
    type: 'QRM',
    question: 'Parmi les facteurs suivants, lesquels sont spécifiquement explorés par le TCA plutôt que par le TP ?',
    options: [
      { text: 'Facteur IX', correct: true, correction: 'Le IX fait partie des facteurs explorés par le TCA.' },
      { text: 'Facteur XI', correct: true, correction: 'Le XI fait partie des facteurs explorés par le TCA.' },
      { text: 'Facteur XII', correct: true, correction: 'Le XII influe sur le TCA de laboratoire, même si son déficit n\'entraîne habituellement pas de saignement.' },
      { text: 'Facteur VIII', correct: true, correction: 'Un déficit en VIII peut allonger le TCA isolément.' },
      { text: 'Facteur VII', correct: false, correction: 'Le VII est exploré par le TP, non par le TCA usuel.' },
    ],
    explanation: 'Le TCA explore XII, XI, IX, VIII, puis les facteurs de la voie commune X, V et II. Le VII est propre au TP dans cette comparaison. (Cours, p. 10)'
  },
  {
    id: 47,
    type: 'QCM',
    question: 'Quel énoncé est exact à propos du facteur XIII et des tests de dépistage TP/TCA ?',
    options: [
      { text: 'Un TP et un TCA normaux n\'excluent pas un déficit en facteur XIII.', correct: true, correction: 'Le XIII stabilise la fibrine après l\'étape détectée par les tests de temps de coagulation.' },
      { text: 'Le facteur XIII est le principal déterminant d\'un TP diminué isolément.', correct: false, correction: 'Le TP diminué isolément oriente d\'abord vers VII ; XIII agit après la formation de fibrine.' },
      { text: 'Un déficit en facteur XIII entraîne toujours un TCA très allongé.', correct: false, correction: 'Le XIII n\'est pas exploré par le TCA de dépistage.' },
      { text: 'Le facteur XIII remplace le facteur tissulaire dans le réactif du TCA.', correct: false, correction: 'Le TCA utilise un activateur de contact ; XIII a un rôle de stabilisation de la fibrine.' },
      { text: 'Le facteur XIII se dose par la numération plaquettaire.', correct: false, correction: 'La numération plaquettaire n\'évalue pas l\'activité du XIII.' },
    ],
    explanation: 'Le XIII crée des liaisons covalentes stabilisant la fibrine ; cette étape n\'est pas détectée par les tests usuels qui chronomètrent sa formation. La liste « XIII » pour le TCA isolé en p. 11 est une coquille pour « VIII ». (Cours, p. 7, 10-11)'
  },
  {
    id: 48,
    type: 'QRM',
    question: 'Devant un TCA allongé isolément, quelles causes ou précautions sont pertinentes ?',
    options: [
      { text: 'Conclure d\'emblée à une hémophilie A acquise sans autre examen.', correct: false, correction: 'Le seul TCA allongé est insuffisant ; il faut confronter clinique, traitement, mélange et dosages.' },
      { text: 'Un déficit en XII peut allonger le TCA sans provoquer habituellement de syndrome hémorragique.', correct: true, correction: 'Le XII influe sur le test in vitro, mais pas sur l\'hémostase clinique habituelle.' },
      { text: 'Vérifier les traitements anticoagulants avant l\'interprétation.', correct: true, correction: 'Un médicament anticoagulant peut modifier le TCA et brouiller le raisonnement.' },
      { text: 'Envisager un inhibiteur circulant, puis préciser sa nature.', correct: true, correction: 'Un inhibiteur anti-facteur et un anticoagulant lupique n\'ont pas la même portée clinique.' },
      { text: 'Rechercher un déficit en facteur VIII ou IX selon le contexte.', correct: true, correction: 'Ces facteurs sont explorés par le TCA et leurs déficits peuvent être hémorragiques.' },
    ],
    explanation: 'Un TCA isolément allongé ouvre plusieurs pistes : déficit en VIII, IX, XI ou XII, inhibiteur ou interférence médicamenteuse. La clinique et des examens ciblés les départagent. (Cours, p. 9-12)'
  },
  {
    id: 49,
    type: 'QCM',
    question: 'En quoi consiste l\'épreuve du mélange réalisée pour explorer un TCA allongé ?',
    options: [
      { text: 'Ajouter 10 % de sérum du patient à 90 % de sérum témoin, puis doser les D-dimères.', correct: false, correction: 'Le test porte sur du plasma et réévalue un temps de coagulation.' },
      { text: 'Mélanger le sang du patient à un inhibiteur de la plasmine.', correct: false, correction: 'Le test n\'ajoute pas d\'antifibrinolytique ; il ajoute du plasma normal.' },
      { text: 'Mélanger à parts égales plasma du patient et plasma normal, puis mesurer à nouveau le TCA.', correct: true, correction: 'Le plasma témoin apporte des facteurs fonctionnels ; la correction ou son absence aide à orienter l\'enquête.' },
      { text: 'Réchauffer le fibrinogène du patient jusqu\'à sa dégradation complète.', correct: false, correction: 'Le mélange ne consiste pas à dégrader le fibrinogène.' },
      { text: 'Ajouter du facteur tissulaire pur au sang total et compter les plaquettes.', correct: false, correction: 'Ceci ne décrit ni les échantillons ni la mesure de l\'épreuve du mélange.' },
    ],
    explanation: 'L\'épreuve du mélange utilise 50 % de plasma patient et 50 % de plasma normal ; le TCA du mélange est comparé au TCA initial. (Cours, p. 11)'
  },
  {
    id: 50,
    type: 'QRM',
    question: 'Quelles interprétations de l\'épreuve du mélange sont justes, sous réserve du contexte clinique et thérapeutique ?',
    options: [
      { text: 'Une nette correction du TCA oriente vers un déficit en facteur(s).', correct: true, correction: 'Le plasma normal peut suppléer des facteurs manquants, mais une correction immédiate n\'exclut pas un inhibiteur à action retardée.' },
      { text: 'La prise d\'anticoagulants peut gêner l\'interprétation du mélange.', correct: true, correction: 'Une interférence médicamenteuse doit être recherchée avant de conclure.' },
      { text: 'Une absence de correction fait rechercher un inhibiteur circulant.', correct: true, correction: 'Un inhibiteur peut agir aussi sur les facteurs apportés par le plasma normal.' },
      { text: 'L\'absence de correction ne différencie pas à elle seule anticoagulant lupique et anti-facteur VIII.', correct: true, correction: 'Des investigations ciblées restent indispensables.' },
      { text: 'Toute absence de correction prouve une hémophilie A congénitale.', correct: false, correction: 'L\'hémophilie A congénitale est un déficit factoriel ; la non-correction n\'en est pas une preuve.' },
    ],
    explanation: 'La correction suggère un déficit ; l\'absence de correction fait rechercher un inhibiteur, sans en identifier la cible. Un anti-VIII temps-dépendant peut nécessiter une lecture après incubation et des dosages spécifiques ; les anticoagulants pris doivent aussi être vérifiés. (Cours, p. 9, 11-12)'
  },
  {
    id: 51,
    type: 'QCM',
    question: 'Un TCA isolément allongé ne se corrige pas au mélange chez une personne présentant des hémorragies récentes importantes. Quelle hypothèse est particulièrement à rechercher ?',
    options: [
      { text: 'Une thrombopénie isolée, nécessairement responsable du TCA.', correct: false, correction: 'La numération plaquettaire n\'explique pas à elle seule un TCA plasmatique allongé.' },
      { text: 'Un anticorps acquis dirigé contre le facteur VIII.', correct: true, correction: 'L\'inhibiteur anti-VIII peut donner un TCA non corrigé et un risque hémorragique sévère ; il faut le confirmer par des examens ciblés.' },
      { text: 'Un déficit isolé en facteur VII.', correct: false, correction: 'Un déficit en VII oriente d\'abord vers un TP abaissé, pas ce profil de TCA.' },
      { text: 'Un anticoagulant lupique comme explication certaine du saignement.', correct: false, correction: 'Le lupus anticoagulant est plutôt lié au risque thrombotique ; la non-correction ne suffit pas à l\'affirmer.' },
      { text: 'Un déficit isolé en facteur XIII prouvé par le TCA.', correct: false, correction: 'Le facteur XIII n\'est pas évalué par le TCA usuel.' },
    ],
    explanation: 'Dans un contexte de saignement et de TCA non corrigé, un inhibiteur spécifique anti-VIII doit être recherché, tout en tenant compte des traitements et des autres inhibiteurs possibles. (Cours, p. 11-12)'
  },
  {
    id: 52,
    type: 'QRM',
    question: 'Quelles propositions permettent de distinguer les grandes causes de TCA isolément allongé évoquées dans le cours ?',
    options: [
      { text: 'Un anticoagulant lupique s\'associe surtout à un risque thrombotique, malgré son effet sur les tests in vitro.', correct: true, correction: 'Il doit être différencié d\'un inhibiteur spécifique d\'un facteur hémorragique.' },
      { text: 'Une non-correction du mélange identifie à elle seule avec certitude l\'anticorps anti-VIII.', correct: false, correction: 'La non-correction indique un inhibiteur possible mais n\'en révèle pas la cible.' },
      { text: 'Un déficit en facteur XII entraîne classiquement des hémarthroses sévères.', correct: false, correction: 'Le déficit en XII allonge le TCA mais n\'est habituellement pas hémorragique.' },
      { text: 'L\'hémophilie A acquise peut être liée à un anticorps inhibiteur du facteur VIII.', correct: true, correction: 'Cet inhibiteur neutralise l\'activité du VIII et peut causer des hémorragies sévères.' },
      { text: 'L\'hémophilie A congénitale est liée à un déficit en facteur VIII.', correct: true, correction: 'Le facteur VIII est le facteur anti-hémophilique A.' },
    ],
    explanation: 'Le cours distingue déficit congénital en VIII, inhibiteur acquis anti-VIII et anticoagulant lupique ; leurs conséquences cliniques diffèrent malgré un TCA potentiellement allongé. (Cours, p. 10-12)'
  },
  {
    id: 53,
    type: 'QCM',
    question: 'Si le TP est abaissé et le TCA allongé, quelle famille de facteurs doit être examinée en priorité avec le fibrinogène ?',
    options: [
      { text: 'Le facteur XIII uniquement.', correct: false, correction: 'Le XIII n\'est pas exploré par les temps de coagulation de dépistage.' },
      { text: 'Les facteurs VIII, IX et XI seulement.', correct: false, correction: 'Ces facteurs orientent surtout vers un TCA isolément allongé.' },
      { text: 'Les facteurs II, V et X de la voie commune.', correct: true, correction: 'Leurs déficits peuvent perturber les deux tests ; le fibrinogène est également à doser.' },
      { text: 'Le facteur VII uniquement.', correct: false, correction: 'Le VII peut abaisser le TP sans allonger habituellement le TCA.' },
      { text: 'La GPIIb/IIIa plaquettaire uniquement.', correct: false, correction: 'GPIIb/IIIa relève de l\'agrégation plaquettaire, pas de la voie commune du TP/TCA.' },
    ],
    explanation: 'Une anomalie conjointe du TP et du TCA invite à doser notamment II, V, X et le fibrinogène, tout en recherchant aussi une cause acquise ou médicamenteuse. (Cours, p. 12)'
  },
  {
    id: 54,
    type: 'QRM',
    question: 'Dans le cadre d\'un TP abaissé et d\'un TCA allongé, quelles associations biologiques sont correctement interprétées ?',
    options: [
      { text: 'Facteur V normal : toute maladie du foie est définitivement exclue.', correct: false, correction: 'Un V préservé n\'exclut pas une hépatopathie modérée ni d\'autres contextes ; il n\'établit pas un diagnostic négatif absolu.' },
      { text: 'Facteurs II et X abaissés avec facteur V préservé : une carence en vitamine K fait partie des hypothèses.', correct: true, correction: 'II et X dépendent de la vitamine K, à la différence du V ; le profil doit être confronté au contexte.' },
      { text: 'Facteurs II, V et X abaissés : une atteinte hépatique sévère fait partie des hypothèses.', correct: true, correction: 'La baisse du V, non vitamine K-dépendant, appuie l\'hypothèse d\'une atteinte de synthèse plus étendue.' },
      { text: 'Facteur V bas isolément : il prouve à lui seul une CIVD.', correct: false, correction: 'Une CIVD nécessite une interprétation globale, notamment plaquettes, fibrinogène, D-dimères et contexte.' },
      { text: 'Un TP et un TCA perturbés suffisent à distinguer sans dosage une carence en vitamine K d\'une atteinte hépatique.', correct: false, correction: 'Les deux temps de dépistage ne suffisent pas ; les dosages spécifiques et la clinique orientent.' },
    ],
    explanation: 'Les dosages spécifiques affinent l\'orientation : II/X bas avec V conservé est compatible avec carence en vitamine K ou hépatopathie modérée ; II/V/X bas évoque entre autres une atteinte hépatique sévère. (Cours, p. 12-13)'
  },
  {
    id: 55,
    type: 'QCM',
    question: 'Pourquoi le facteur V aide-t-il à interpréter une baisse des facteurs II et X ?',
    options: [
      { text: 'Parce que le V n\'est synthétisé que par les plaquettes et jamais par le foie.', correct: false, correction: 'Le cours situe le V parmi les facteurs majoritairement synthétisés par le foie.' },
      { text: 'Parce qu\'une baisse du V avec II et X suggère une atteinte de synthèse plus large qu\'une seule carence en vitamine K.', correct: true, correction: 'Le V non vitamine K-dépendant peut aider à évoquer une hépatopathie sévère, sans être diagnostique à lui seul.' },
      { text: 'Parce qu\'un V bas suffit à exclure toute CIVD.', correct: false, correction: 'Le V peut également diminuer en contexte de consommation ; il n\'exclut pas une CIVD.' },
      { text: 'Parce que le V est exploré uniquement par le TCA et jamais par le TP.', correct: false, correction: 'Le V appartient aux facteurs explorés par les deux tests.' },
      { text: 'Parce que le facteur V est, comme II et X, strictement vitamine K-dépendant.', correct: false, correction: 'Le V n\'est pas dans la liste II, VII, IX et X des facteurs vitamine K-dépendants.' },
    ],
    explanation: 'Le V n\'est pas vitamine K-dépendant ; sa baisse associée à celles de II et X suggère un trouble plus large, notamment une atteinte hépatique sévère selon le cours. (Cours, p. 4, 12-13)'
  },
  {
    id: 56,
    type: 'QRM',
    question: 'Quelles propositions sur le dosage du fibrinogène et son interprétation sont exactes ?',
    options: [
      { text: 'Un fibrinogène abaissé peut également s\'observer dans une CIVD ou une hépatopathie sévère.', correct: true, correction: 'Ces causes acquises figurent dans l\'interprétation du cours.' },
      { text: 'Le cours donne une concentration usuelle de fibrinogène de 2 à 4 g/L.', correct: true, correction: 'C\'est l\'intervalle indicatif mentionné dans le cours.' },
      { text: 'Un fibrinogène bas prouve que les facteurs II, V et X sont nécessairement normaux.', correct: false, correction: 'Ces facteurs peuvent également être diminués, notamment en cas de CIVD ou de maladie hépatique sévère.' },
      { text: 'Un fibrinogène inférieur à 2 g/L avec II, V et X préservés peut orienter vers une anomalie du fibrinogène.', correct: true, correction: 'Le cours évoque une hypofibrinogénémie et la possibilité d\'une anomalie qualitative à explorer.' },
      { text: 'Une concentration abaissée permet à elle seule de démontrer une dysfibrinogénémie pure.', correct: false, correction: 'Une dysfibrinogénémie est qualitative ; il faut confronter dosages fonctionnel et antigénique, et le taux bas seul ne suffit pas.' },
    ],
    explanation: 'Le fibrinogène normal est donné à 2–4 g/L. Une valeur basse doit être interprétée avec les facteurs II/V/X et le contexte ; elle ne caractérise pas seule la cause ni le caractère qualitatif d\'une anomalie. (Cours, p. 12-13)'
  },
  {
    id: 57,
    type: 'QCM',
    question: 'Un TP à 45 % est-il normal selon les valeurs indicatives du cours ?',
    options: [
      { text: 'Non, car seul le TCA permet de conclure sur la normalité du TP.', correct: false, correction: 'Le TP a son propre intervalle de référence ; le TCA est un test complémentaire.' },
      { text: 'Oui, car le TP n\'est exprimé qu\'en secondes.', correct: false, correction: 'Le TP est présenté en pourcentage dans le cours ; le temps de Quick est exprimé en secondes.' },
      { text: 'Oui, car tout TP supérieur à 30 % est normal.', correct: false, correction: 'Le cours retient un TP usuel d\'au moins 70 %, pas 30 %.' },
      { text: 'Non, il est abaissé par rapport au seuil indicatif d\'au moins 70 %.', correct: true, correction: 'Oui. Un TP de 45 % est inférieur au seuil normal indicatif donné.' },
      { text: 'Oui, puisque le seuil normal du TP est inférieur à 1,2.', correct: false, correction: 'Le seuil de 1,2 concerne le rapport TCA patient/témoin, pas le TP.' },
    ],
    explanation: 'Le cours donne un TP normal généralement supérieur ou égal à 70 %. Une valeur de 45 % est donc abaissée et doit être interprétée selon le contexte et les traitements. (Cours, p. 10)'
  },
  {
    id: 58,
    type: 'QRM',
    question: 'Lors de l\'interprétation d\'un bilan de coagulation initial, quelles informations ou mesures sont pertinentes ?',
    options: [
      { text: 'Vérifier la numération plaquettaire par l\'hémogramme.', correct: true, correction: 'Le nombre de plaquettes complète l\'exploration d\'un syndrome hémorragique.' },
      { text: 'Interpréter les résultats sans les confronter aux manifestations cliniques.', correct: false, correction: 'L\'interrogatoire et l\'examen clinique sont essentiels à l\'orientation.' },
      { text: 'Considérer qu\'un TP abaissé désigne toujours une anomalie plaquettaire.', correct: false, correction: 'Le TP renseigne sur la coagulation plasmatique, pas directement sur le nombre ou la fonction des plaquettes.' },
      { text: 'Utiliser un plasma obtenu après prélèvement citraté pour TP et TCA.', correct: true, correction: 'Ces tests sont plasmatiques ; le citrate conserve l\'échantillon non coagulé jusqu\'à l\'analyse.' },
      { text: 'Connaître les anticoagulants pris par le patient.', correct: true, correction: 'Ces traitements peuvent modifier les temps de coagulation.' },
    ],
    explanation: 'Le bilan initial associe clinique, hémogramme, TP et TCA, avec prise en compte obligatoire des traitements anticoagulants ; les tests sont pratiqués sur plasma citraté. (Cours, p. 8-10)'
  },
  {
    id: 59,
    type: 'QCM',
    question: 'Quel profil clinique et biologique est compatible avec un déficit en facteur XII tel que décrit dans le cours ?',
    options: [
      { text: 'D-dimères toujours élevés avec TP normal.', correct: false, correction: 'Une hausse des D-dimères ne définit pas le déficit en XII.' },
      { text: 'TCA allongé et absence habituelle de saignement attribuable à ce déficit.', correct: true, correction: 'Le XII intervient dans le TCA de laboratoire, mais son déficit n\'est habituellement pas hémorragique.' },
      { text: 'TP abaissé isolément et hémarthroses caractéristiques.', correct: false, correction: 'Le facteur XII est exploré par le TCA, et son déficit ne donne habituellement pas de syndrome hémorragique.' },
      { text: 'Fibrinogène toujours inférieur à 2 g/L.', correct: false, correction: 'Le déficit en XII n\'impose pas une hypofibrinogénémie.' },
      { text: 'TCA normal imposant d\'éliminer tout déficit en facteur XII.', correct: false, correction: 'Un déficit en XII tend au contraire à allonger le TCA.' },
    ],
    explanation: 'Le cours souligne que le facteur XII est détecté par le TCA mais qu\'un déficit en XII n\'entraîne habituellement pas de trouble hémorragique clinique. (Cours, p. 10)'
  },
  {
    id: 60,
    type: 'QRM',
    question: 'Chez un patient dont le TP baisse, le TCA s\'allonge et le fibrinogène est bas, quels éléments aident à explorer une consommation de coagulation de type CIVD sans la conclure sur ces trois résultats seuls ?',
    options: [
      { text: 'L\'absence de tout autre examen puisque le fibrinogène bas prouve une CIVD.', correct: false, correction: 'Un fibrinogène bas a plusieurs causes et ne suffit pas au diagnostic.' },
      { text: 'La seule valeur du TP, suffisante pour établir la CIVD quelle que soit la clinique.', correct: false, correction: 'Le TP seul est non spécifique et ne démontre pas une CIVD.' },
      { text: 'Le contexte clinique et les dosages de facteurs, dont II, V et X.', correct: true, correction: 'Ils aident notamment à distinguer CIVD, atteinte hépatique sévère et autres causes.' },
      { text: 'Les D-dimères et autres marqueurs de dégradation de la fibrine.', correct: true, correction: 'Leur hausse peut accompagner l\'activation de la coagulation et de la fibrinolyse, sans être spécifique.' },
      { text: 'La numération plaquettaire.', correct: true, correction: 'Une consommation plaquettaire peut accompagner la CIVD.' },
    ],
    explanation: 'L\'association TP/TCA perturbés et fibrinogène bas peut se voir dans une CIVD ou une hépatopathie sévère. Plaquettes, marqueurs de fibrinolyse, dosages des facteurs et contexte affinent l\'orientation. (Cours, p. 12-15)'
  },
  {
    id: 61,
    type: 'QCM',
    question: 'Quelle est la fonction physiologique principale de la fibrinolyse après réparation d’une brèche vasculaire ?',
    options: [
      { text: 'Déclencher l’adhésion initiale des plaquettes', correct: false, correction: 'Non. L’adhésion plaquettaire appartient à l’hémostase primaire.' },
      { text: 'Stabiliser la fibrine par des liaisons covalentes', correct: false, correction: 'Non. C’est le rôle du facteur XIII activé.' },
      { text: 'Produire le facteur tissulaire dans le plasma', correct: false, correction: 'Non. Le facteur tissulaire est un déclencheur de la coagulation, pas le produit de la fibrinolyse.' },
      { text: 'Dissoudre le réseau de fibrine devenu inutile', correct: true, correction: 'Oui. La disparition du caillot restaure la perméabilité du vaisseau.' },
      { text: 'Transformer le fibrinogène en fibrine', correct: false, correction: 'Non. Cette réaction relève de la thrombine pendant la coagulation.' },
    ],
    explanation: 'La fibrinolyse retire le réseau de fibrine après son utilité hémostatique et permet le retour de la circulation dans le vaisseau réparé. (Cours, p. 13)'
  },
  {
    id: 62,
    type: 'QRM',
    question: 'Concernant le plasminogène et la plasmine, quelles propositions sont exactes ?',
    options: [
      { text: 'Le t-PA peut favoriser la conversion du plasminogène en plasmine', correct: true, correction: 'Oui. Le t-PA est l’activateur principal décrit dans le cours.' },
      { text: 'La plasmine dégrade la fibrine du caillot', correct: true, correction: 'Oui. La plasmine est l’enzyme effectrice de la fibrinolyse.' },
      { text: 'Le plasminogène est un précurseur circulant de la plasmine', correct: true, correction: 'Oui. Le plasminogène est la forme précurseur de l’enzyme fibrinolytique.' },
      { text: 'La plasmine polymérise les monomères de fibrine', correct: false, correction: 'Non. La polymérisation de la fibrine appartient à la formation du caillot.' },
      { text: 'Le plasminogène est l’inhibiteur direct de la plasmine', correct: false, correction: 'Non. L’inhibiteur direct cité est l’α2-antiplasmine.' },
    ],
    explanation: 'L’activation du plasminogène donne la plasmine, qui clive la fibrine; le t-PA est l’activateur majeur mentionné. (Cours, p. 13)'
  },
  {
    id: 63,
    type: 'QCM',
    question: 'Quelle cellule est présentée comme la source principale du t-PA vasculaire dans le cours ?',
    options: [
      { text: 'La plaquette au repos', correct: false, correction: 'Non. Les plaquettes participent à l’hémostase, mais ne sont pas la source principale de t-PA décrite.' },
      { text: 'Le fibroblaste sous-endothélial', correct: false, correction: 'Non. Le fibroblaste est surtout cité pour le facteur tissulaire.' },
      { text: 'Le mégacaryocyte médullaire', correct: false, correction: 'Non. Le cours situe la production de t-PA au niveau endothélial.' },
      { text: 'L’érythrocyte mature', correct: false, correction: 'Non. L’hématie n’est pas la source de t-PA présentée ici.' },
      { text: 'La cellule endothéliale', correct: true, correction: 'Oui. Les cellules endothéliales synthétisent et libèrent le t-PA.' },
    ],
    explanation: 'Le t-PA est synthétisé par les cellules endothéliales et libéré pour activer localement la fibrinolyse. (Cours, p. 13)'
  },
  {
    id: 64,
    type: 'QRM',
    question: 'Quels éléments freinent physiologiquement la fibrinolyse ?',
    options: [
      { text: 'Le PAI, qui inhibe les activateurs du plasminogène', correct: true, correction: 'Oui. PAI-1 freine notamment l’action du t-PA.' },
      { text: 'Les D-dimères, qui neutralisent directement la plasmine', correct: false, correction: 'Non. Les D-dimères sont des produits de dégradation, pas un frein direct.' },
      { text: 'L’α2-antiplasmine, qui inhibe directement la plasmine', correct: true, correction: 'Oui. Elle neutralise la plasmine déjà formée.' },
      { text: 'Le plasminogène, qui détruit les activateurs du plasminogène', correct: false, correction: 'Non. Le plasminogène est un substrat précurseur, pas l’inhibiteur cité.' },
      { text: 'La thrombine, en bloquant directement toute activité du t-PA', correct: false, correction: 'Non. Ce n’est pas le mécanisme inhibiteur décrit dans le cours.' },
    ],
    explanation: 'Le cours distingue le PAI, inhibiteur des activateurs comme le t-PA, et l’α2-antiplasmine, inhibiteur direct de la plasmine. (Cours, p. 13)'
  },
  {
    id: 65,
    type: 'QCM',
    question: 'Un D-dimère témoigne plus précisément de la dégradation de quel matériau ?',
    options: [
      { text: 'De fibrine préalablement stabilisée et réticulée', correct: true, correction: 'Oui. Les D-dimères proviennent de la dégradation de fibrine réticulée.' },
      { text: 'Du facteur tissulaire circulant', correct: false, correction: 'Non. Le facteur tissulaire initie la coagulation et ne produit pas de D-dimères.' },
      { text: 'Des phospholipides des plaquettes activées', correct: false, correction: 'Non. Les phospholipides forment une surface de réaction, pas la source des D-dimères.' },
      { text: 'De la membrane d’une hématie', correct: false, correction: 'Non. Ce marqueur est lié au renouvellement de la fibrine.' },
      { text: 'De fibrinogène libre uniquement', correct: false, correction: 'Non. Le D-dimère exige la formation préalable de fibrine réticulée.' },
    ],
    explanation: 'Les D-dimères appartiennent aux produits de dégradation de la fibrine après formation et réticulation du réseau; leur présence traduit une formation puis une lyse de fibrine. (Cours, p. 7 et 13)'
  },
  {
    id: 66,
    type: 'QRM',
    question: 'Au niveau d’un caillot de fibrine, quelles étapes appartiennent au scénario de la fibrinolyse décrit ?',
    options: [
      { text: 'La plasmine fragmente le réseau de fibrine', correct: true, correction: 'Oui. Elle est l’enzyme qui solubilise le caillot.' },
      { text: 'Le facteur XIII activé transforme la plasmine en plasminogène', correct: false, correction: 'Non. Le facteur XIII stabilise la fibrine; il ne catalyse pas cette réaction inverse.' },
      { text: 'Le t-PA et le plasminogène se fixent à la fibrine', correct: true, correction: 'Oui. Leur proximité sur la fibrine facilite l’activation du plasminogène.' },
      { text: 'Le PAI transforme directement la fibrine en fibrinogène', correct: false, correction: 'Non. Le PAI freine l’activation fibrinolytique, sans régénérer le fibrinogène.' },
      { text: 'Le plasminogène est converti en plasmine', correct: true, correction: 'Oui. Cette conversion précède la dégradation du caillot.' },
    ],
    explanation: 'Après libération endothéliale, le t-PA favorise la formation de plasmine au contact de la fibrine; la plasmine dégrade ensuite le réseau. (Cours, p. 13)'
  },
  {
    id: 67,
    type: 'QCM',
    question: 'Quelle interprétation est correcte devant un résultat de D-dimères élevé isolé ?',
    options: [
      { text: 'Il signe spécifiquement une CIVD', correct: false, correction: 'Non. Une CIVD peut l’élever, mais de nombreuses autres situations aussi.' },
      { text: 'Il impose que le fibrinogène soit inférieur à 2 g/L', correct: false, correction: 'Non. D-dimères et fibrinogène ne sont pas liés par une telle équivalence.' },
      { text: 'Il démontre une absence de fibrinolyse', correct: false, correction: 'Non. Le D-dimère est justement issu de la dégradation de fibrine.' },
      { text: 'Il indique une formation et dégradation de fibrine, sans prouver à lui seul une thrombose veineuse', correct: true, correction: 'Oui. Le marqueur est sensible à de nombreuses situations et manque de spécificité.' },
      { text: 'Il confirme à lui seul une thrombose veineuse profonde', correct: false, correction: 'Non. Un résultat élevé ne remplace pas l’évaluation clinique ni, si besoin, l’imagerie.' },
    ],
    explanation: 'Les D-dimères sont utiles dans une stratégie diagnostique adaptée, mais leur élévation isolée n’est pas spécifique d’une thrombose. (Cours, p. 14)'
  },
  {
    id: 68,
    type: 'QRM',
    question: 'Parmi les situations suivantes, lesquelles peuvent élever les D-dimères sans thrombose veineuse démontrée ?',
    options: [
      { text: 'Une infection', correct: true, correction: 'Oui. L’inflammation ou l’infection peut augmenter ce marqueur.' },
      { text: 'Un cancer', correct: true, correction: 'Oui. Le cancer figure parmi les causes de hausse non spécifiques.' },
      { text: 'Une grossesse', correct: true, correction: 'Oui. Une augmentation peut être observée au cours de la grossesse.' },
      { text: 'Une réduction isolée et totale de la fibrinolyse, sans formation de fibrine', correct: false, correction: 'Non. Sans formation puis dégradation de fibrine, on n’attend pas une production accrue de D-dimères.' },
      { text: 'Un âge avancé', correct: true, correction: 'Oui. Le taux physiologique tend à augmenter avec l’âge.' },
    ],
    explanation: 'L’âge, les infections, la grossesse et le cancer sont cités comme causes possibles d’élévation, ce qui limite la valeur confirmatoire du test. (Cours, p. 14)'
  },
  {
    id: 69,
    type: 'QCM',
    question: 'Quel seuil de D-dimères ajusté à l’âge est indiqué dans le cours pour une personne de 70 ans, avec un dosage exprimé en ng/mL FEU et un seuil standard de 500 ?',
    options: [
      { text: '500 ng/mL FEU, quel que soit l’âge', correct: false, correction: 'Non. Le cours présente un seuil ajusté après 50 ans.' },
      { text: '1 200 ng/mL FEU', correct: false, correction: 'Non. On ne calcule pas 500 + âge × 10.' },
      { text: '70 ng/mL FEU', correct: false, correction: 'Non. Il manque un facteur 10.' },
      { text: '700 ng/mL FEU', correct: true, correction: 'Oui. Au-delà de 50 ans, le seuil indicatif est âge × 10, soit 70 × 10.' },
      { text: '7 000 ng/mL FEU', correct: false, correction: 'Non. Le produit 70 × 10 vaut 700.' },
    ],
    explanation: 'Pour les dosages compatibles avec un seuil standard de 500 ng/mL FEU, le seuil ajusté après 50 ans est âge × 10; son emploi dépend de la stratégie clinique et du test utilisé. (Cours, p. 14)'
  },
  {
    id: 70,
    type: 'QRM',
    question: 'Dans quelles conditions un résultat de D-dimères négatif peut-il contribuer à exclure un premier épisode d’embolie pulmonaire suspectée ?',
    options: [
      { text: 'En tenant compte, si approprié, d’un seuil ajusté à l’âge après 50 ans', correct: true, correction: 'Oui. Cette stratégie peut améliorer la spécificité chez les personnes plus âgées.' },
      { text: 'Avec une probabilité clinique faible ou intermédiaire évaluée au préalable', correct: true, correction: 'Oui. La valeur d’exclusion dépend de la probabilité prétest.' },
      { text: 'Même avec une forte probabilité clinique, sans autre examen', correct: false, correction: 'Non. Un résultat négatif ne dispense pas d’une autre démarche si la probabilité clinique est forte.' },
      { text: 'En ignorant les unités FEU/DDU et les seuils du laboratoire', correct: false, correction: 'Non. Les unités et les seuils varient selon les dosages et conditionnent l’interprétation.' },
      { text: 'Avec un test suffisamment sensible et son seuil validé', correct: true, correction: 'Oui. Il faut respecter la méthode et ses unités.' },
    ],
    explanation: 'La valeur d’exclusion du test pour une première embolie pulmonaire dépend de la probabilité clinique prétest, de la sensibilité du dosage et d’un seuil adapté à sa méthode. (Cours, p. 14)'
  },
  {
    id: 71,
    type: 'QCM',
    question: 'Pourquoi les D-dimères peuvent-ils augmenter au cours d’une CIVD, même sans thrombose veineuse profonde isolée ?',
    options: [
      { text: 'Parce que toutes les plaquettes se transforment en D-dimères', correct: false, correction: 'Non. Les plaquettes sont consommées, mais ne constituent pas le matériau des D-dimères.' },
      { text: 'Parce que les D-dimères activent directement le facteur tissulaire', correct: false, correction: 'Non. Les D-dimères sont des produits de dégradation, pas l’initiateur de la coagulation.' },
      { text: 'Parce qu’une formation intravasculaire diffuse de fibrine est suivie de sa dégradation', correct: true, correction: 'Oui. La formation puis la lyse de fibrine disséminée libèrent des D-dimères.' },
      { text: 'Parce que le fibrinogène libre libère directement des D-dimères sans coagulation préalable', correct: false, correction: 'Non. Les D-dimères proviennent de fibrine réticulée après sa dégradation.' },
      { text: 'Parce que la CIVD bloque complètement la formation de fibrine', correct: false, correction: 'Non. La formation disséminée de fibrine est au cœur de la CIVD.' },
    ],
    explanation: 'La coagulation disséminée produit de la fibrine dans les vaisseaux; sa dégradation génère des D-dimères, sans signifier nécessairement une thrombose veineuse profonde isolée. (Cours, p. 15)'
  },
  {
    id: 72,
    type: 'QRM',
    question: 'Quelles affirmations décrivent correctement le dosage des D-dimères mentionné dans le cours ?',
    options: [
      { text: 'Il est préféré dans le cours au dosage historique des produits de dégradation de la fibrine', correct: true, correction: 'Oui. Le support précise que les PDF généraux sont moins dosés aujourd’hui.' },
      { text: 'Une méthode immunologique, notamment immunoenzymatique, peut être utilisée', correct: true, correction: 'Oui. Le cours cite la méthode immunoenzymatique.' },
      { text: 'Le résultat est toujours identique quel que soit le type d’unités utilisé', correct: false, correction: 'Non. Les unités FEU et DDU, entre autres, n’ont pas les mêmes seuils numériques.' },
      { text: 'Un résultat positif suffit à poser le diagnostic de thrombose veineuse', correct: false, correction: 'Non. La spécificité est insuffisante.' },
      { text: 'Il recherche des produits issus de la dégradation de la fibrine', correct: true, correction: 'Oui. Les D-dimères sont des fragments de fibrine réticulée.' },
    ],
    explanation: 'Les D-dimères sont des produits de dégradation de fibrine dosés par des méthodes immunologiques; leur intérêt dépend du contexte et de la méthode. (Cours, p. 14)'
  },
  {
    id: 73,
    type: 'QCM',
    question: 'Quel mécanisme explique principalement le risque hémorragique d’une hyperfibrinolyse pathologique ?',
    options: [
      { text: 'Une transformation de la plasmine en thrombine', correct: false, correction: 'Non. La plasmine et la thrombine ont des rôles distincts.' },
      { text: 'Une impossibilité des plaquettes à adhérer par absence de facteur tissulaire', correct: false, correction: 'Non. Le mécanisme central ici est l’activité fibrinolytique excessive.' },
      { text: 'Une stabilisation excessive de la fibrine par le facteur XIII', correct: false, correction: 'Non. Cela renforce le réseau au lieu de favoriser le saignement par lyse.' },
      { text: 'Une augmentation isolée des D-dimères qui détruit directement les plaquettes', correct: false, correction: 'Non. Les D-dimères sont des marqueurs, pas l’agent qui détruit les plaquettes.' },
      { text: 'La destruction trop rapide de la fibrine du caillot, avec parfois dégradation d’autres protéines hémostatiques', correct: true, correction: 'Oui. Le caillot est éliminé avant de stabiliser durablement l’hémostase.' },
    ],
    explanation: 'Une production excessive de plasmine peut dissoudre le caillot et contribuer à dégrader le fibrinogène et certains facteurs, favorisant le saignement. (Cours, p. 14)'
  },
  {
    id: 74,
    type: 'QRM',
    question: 'Quelles conséquences peuvent accompagner une hyperfibrinolyse importante selon le cours ?',
    options: [
      { text: 'Une atteinte possible de facteurs V et VIII', correct: true, correction: 'Oui. Ces protéines peuvent être dégradées dans le contexte décrit.' },
      { text: 'Une dégradation accrue de la fibrine', correct: true, correction: 'Oui. C’est le mécanisme même de l’hyperfibrinolyse.' },
      { text: 'Une diminution du fibrinogène si la protéolyse déborde la fibrine', correct: true, correction: 'Oui. Le support évoque une destruction du fibrinogène dans les formes importantes.' },
      { text: 'Une absence obligatoire de produits de dégradation de la fibrine', correct: false, correction: 'Non. La lyse du réseau produit au contraire de tels fragments.' },
      { text: 'Une protection absolue contre toute hémorragie', correct: false, correction: 'Non. L’excès de lyse expose au saignement.' },
    ],
    explanation: 'L’excès de fibrinolyse fragilise le caillot et peut s’accompagner d’une dégradation du fibrinogène ainsi que de facteurs V et VIII. (Cours, p. 14)'
  },
  {
    id: 75,
    type: 'QCM',
    question: 'Quel principe explique le risque hémorragique accepté lors d’un traitement thrombolytique ?',
    options: [
      { text: 'Le traitement bloque complètement la plasmine pour préserver tous les caillots', correct: false, correction: 'Non. Un thrombolytique cherche à favoriser la lyse.' },
      { text: 'Le traitement transforme directement les plaquettes en fibrinogène', correct: false, correction: 'Non. Ce n’est pas son mécanisme.' },
      { text: 'Le traitement accroît volontairement la formation de plasmine pour dissoudre un thrombus pathologique', correct: true, correction: 'Oui. L’effet recherché peut aussi lyser des caillots utiles et exposer au saignement.' },
      { text: 'Le traitement augmente exclusivement le facteur XIII', correct: false, correction: 'Non. Le facteur XIII stabilise la fibrine; ce n’est pas l’objectif de la thrombolyse.' },
      { text: 'Le traitement empêche toute production de D-dimères', correct: false, correction: 'Non. La dégradation de fibrine peut au contraire produire ces fragments.' },
    ],
    explanation: 'La thrombolyse induit une fibrinolyse thérapeutique par augmentation de l’activité plasminique; son bénéfice potentiel s’accompagne d’un risque de saignement. (Cours, p. 15)'
  },
  {
    id: 76,
    type: 'QRM',
    question: 'Au début d’une coagulation intravasculaire disséminée (CIVD), quels événements sont cohérents avec le mécanisme décrit ?',
    options: [
      { text: 'La disparition immédiate du risque thrombotique', correct: false, correction: 'Non. La formation de microthrombi est une composante majeure du syndrome.' },
      { text: 'Une inhibition systématique et complète de la thrombine dès le départ', correct: false, correction: 'Non. La CIVD implique au contraire une génération excessive de thrombine.' },
      { text: 'Une expression anormale ou excessive du facteur tissulaire', correct: true, correction: 'Oui. Le facteur tissulaire est le déclencheur mis en avant.' },
      { text: 'La formation de microthrombi dans la microcirculation', correct: true, correction: 'Oui. C’est une conséquence de la génération diffuse de thrombine et de fibrine.' },
      { text: 'Une activation non localisée de la coagulation dans les vaisseaux', correct: true, correction: 'Oui. La cascade n’est plus limitée à une brèche unique.' },
    ],
    explanation: 'Une expression inappropriée de facteur tissulaire peut provoquer une génération diffuse de thrombine et de fibrine, responsable de microthromboses. (Cours, p. 15)'
  },
  {
    id: 77,
    type: 'QCM',
    question: 'Pourquoi une CIVD peut-elle associer microthromboses et hémorragies ?',
    options: [
      { text: 'La thrombine n’est jamais générée dans la CIVD', correct: false, correction: 'Non. Elle est produite en excès.' },
      { text: 'Les plaquettes deviennent systématiquement plus nombreuses', correct: false, correction: 'Non. Leur consommation tend plutôt à entraîner une thrombopénie.' },
      { text: 'Le fibrinogène augmente obligatoirement à chaque stade', correct: false, correction: 'Non. Il peut diminuer par consommation, surtout dans les formes sévères.' },
      { text: 'La fibrinolyse disparaît totalement dans toutes les CIVD', correct: false, correction: 'Non. Son niveau varie selon le contexte; le cours décrit une augmentation des produits de dégradation.' },
      { text: 'La coagulation diffuse forme des microthrombi tout en consommant plaquettes et facteurs', correct: true, correction: 'Oui. La consommation hémostatique explique le risque de saignement sur fond de thromboses.' },
    ],
    explanation: 'La CIVD associe formation diffuse de fibrine et consommation des éléments nécessaires à l’hémostase, d’où des risques thrombotique et hémorragique simultanés. (Cours, p. 15)'
  },
  {
    id: 78,
    type: 'QRM',
    question: 'Quels résultats biologiques peuvent orienter vers une CIVD évoluée dans le contexte approprié ?',
    options: [
      { text: 'Une normalité obligatoire de tous les tests de coagulation', correct: false, correction: 'Non. Le bilan est souvent perturbé, même si le profil dépend du stade et de la maladie.' },
      { text: 'Des D-dimères augmentés', correct: true, correction: 'Oui. La formation puis la dégradation de fibrine augmente ces fragments.' },
      { text: 'Un fibrinogène abaissé', correct: true, correction: 'Oui. Il peut être consommé, surtout lorsque la CIVD est sévère.' },
      { text: 'Un TP abaissé ou un temps de Quick allongé', correct: true, correction: 'Oui. La consommation de facteurs peut altérer cette exploration.' },
      { text: 'Une numération plaquettaire diminuée', correct: true, correction: 'Oui. Les plaquettes sont consommées dans la coagulation diffuse.' },
    ],
    explanation: 'Le tableau biologique associe fréquemment thrombopénie, TP altéré, parfois TCA allongé, fibrinogène bas et D-dimères élevés; l’interprétation reste clinique et évolutive. (Cours, p. 15)'
  },
  {
    id: 79,
    type: 'QCM',
    question: 'Quel constat différencie une CIVD d’une hyperfibrinolyse isolée ?',
    options: [
      { text: 'La CIVD épargne toujours les plaquettes et les facteurs de coagulation', correct: false, correction: 'Non. Leur consommation participe au risque hémorragique.' },
      { text: 'Une hyperfibrinolyse isolée comporte nécessairement une production diffuse de thrombine', correct: false, correction: 'Non. Une activité fibrinolytique excessive ne signifie pas à elle seule une coagulation intravasculaire disséminée.' },
      { text: 'Dans la CIVD, une activation diffuse de la coagulation forme aussi des microthrombi', correct: true, correction: 'Oui. Cette production intravasculaire diffuse de fibrine distingue la CIVD, même si une fibrinolyse peut l’accompagner.' },
      { text: 'Dans la CIVD, la fibrine est uniquement détruite, sans être formée', correct: false, correction: 'Non. La formation de fibrine et de microthrombi est centrale.' },
      { text: 'La CIVD est définie par une absence complète de facteur tissulaire', correct: false, correction: 'Non. Le cours souligne au contraire son expression anormale ou excessive.' },
    ],
    explanation: 'La CIVD associe une activation intravasculaire diffuse de la coagulation et des microthrombi; elle peut s’accompagner d’une fibrinolyse dérégulée, contrairement à une hyperfibrinolyse isolée. (Cours, p. 14–15)'
  },
  {
    id: 80,
    type: 'QRM',
    question: 'Une personne atteinte d’une maladie sévère présente des microthrombi, des plaquettes en baisse, un TP abaissé et des D-dimères élevés. Quelles conclusions sont justifiées ?',
    options: [
      { text: 'Les D-dimères élevés identifient à eux seuls la cause précise de la maladie sévère', correct: false, correction: 'Non. Leur élévation n’est pas spécifique et ne détermine pas l’étiologie.' },
      { text: 'La génération de thrombine et la consommation des facteurs peuvent participer au tableau', correct: true, correction: 'Oui. C’est le mécanisme central décrit.' },
      { text: 'Le nombre de plaquettes doit nécessairement être augmenté', correct: false, correction: 'Non. La consommation entraîne habituellement une baisse.' },
      { text: 'Le profil est compatible avec une CIVD et doit être interprété dans son contexte clinique', correct: true, correction: 'Oui. Le regroupement des signes et tests est évocateur, sans suffire seul à caractériser toute la cause.' },
      { text: 'Un risque hémorragique peut coexister avec les microthromboses', correct: true, correction: 'Oui. La consommation des plaquettes et facteurs le rend possible.' },
    ],
    explanation: 'Ce faisceau d’arguments est compatible avec une CIVD : coagulation disséminée, consommation hémostatique et dégradation de fibrine, à confronter à la situation clinique. (Cours, p. 15)'
  },
]
