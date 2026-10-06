export const meta = {
  title: 'Hérédité non mendélienne et exemples de pathologies',
}

export default [
  {
    id: 1,
    type: 'QCM',
    question: 'Dans une affection due à un variant pathogène de l\'ADN mitochondrial transmis par la mère, qui peut être atteint ?',
    options: [
      { text: 'Une fille comme un garçon, avec une expression clinique éventuellement différente', correct: true, correction: 'Oui boss 🧠 La transmission est maternelle, mais les deux sexes peuvent développer des symptômes.' },
      { text: 'Seulement les filles, car les garçons ne possèdent pas de mitochondries', correct: false, correction: 'Non chef. Les garçons possèdent aussi des mitochondries ; ils peuvent être atteints.' },
      { text: 'Uniquement les enfants qui ont hérité du chromosome Y maternel', correct: false, correction: 'Non. Une mère ne transmet pas de chromosome Y ; l\'ADNmt suit une autre voie.' },
      { text: 'Aucun enfant tant que la mère ne présente pas elle-même de symptômes', correct: false, correction: 'Non chef. Une mère porteuse peu symptomatique ou asymptomatique peut avoir un enfant atteint.' },
      { text: 'Seulement les garçons, comme dans une maladie récessive liée à l\'X', correct: false, correction: 'Faux. Le mode mitochondrial n\'est pas une transmission liée au chromosome X.' },
    ],
    explanation: 'Une transmission maternelle de l\'ADNmt peut conduire à une atteinte chez les filles et les garçons ; l\'absence de transmission habituelle par les hommes ne signifie pas que les hommes ne sont jamais malades. (Cours, p. 2 et 8–9 ; coquille corrigée)'
  },
  {
    id: 2,
    type: 'QRM',
    question: 'Quelles caractéristiques de la mitochondrie sont correctement représentées dans les schémas du cours ?',
    options: [
      { text: 'De nombreuses mitochondries peuvent fusionner et former un réseau cellulaire', correct: true, correction: 'Exact. Leur morphologie n\'est pas figée en « petits haricots ».' },
      { text: 'La fission peut fragmenter un réseau mitochondrial en unités plus petites', correct: true, correction: 'Oui 🧠 Fusion et fission contribuent à la dynamique de l\'organite.' },
      { text: 'Elle possède une membrane externe, une membrane interne et une matrice', correct: true, correction: 'Oui boss. Ces compartiments sont visibles dans le rappel anatomique.' },
      { text: 'La mitochondrie contribue à la production d\'ATP par phosphorylation oxydative', correct: true, correction: 'Exact. Cette fonction énergétique est centrale dans le cours.' },
      { text: 'L\'ADN mitochondrial se trouve dans le noyau de la cellule, jamais dans la mitochondrie', correct: false, correction: 'Non chef. L\'ADNmt est localisé dans la mitochondrie, notamment dans la matrice.' },
    ],
    explanation: 'La mitochondrie est un organite à double membrane, contenant de l\'ADNmt et capable de fusion et de fission ; elle participe notamment à la phosphorylation oxydative. (Cours, p. 2–3)'
  },
  {
    id: 3,
    type: 'QCM',
    question: 'Quel énoncé décrit correctement le génome mitochondrial humain de référence ?',
    options: [
      { text: 'Un ADN circulaire d\'environ 16 569 paires de bases, portant 13 gènes protéiques, 22 ARNt et 2 ARNr', correct: true, correction: 'Oui boss 🧬 Cela fait 37 gènes au total ; la ronéo inverse deux chiffres dans la longueur.' },
      { text: 'Un chromosome nucléaire linéaire de trois milliards de paires de bases', correct: false, correction: 'Non chef. Cette taille évoque plutôt l\'ensemble du génome nucléaire humain, pas l\'ADNmt.' },
      { text: 'Un ADN circulaire qui code toutes les protéines présentes dans la mitochondrie', correct: false, correction: 'Faux. La plupart des protéines mitochondriales sont codées par des gènes nucléaires.' },
      { text: 'Un ARN simple brin sans aucune copie d\'ADN dans l\'organite', correct: false, correction: 'Non chef. Il s\'agit d\'un ADN double brin présent en plusieurs copies.' },
      { text: 'Un génome constitué uniquement de 22 gènes codant des protéines', correct: false, correction: 'Non. Les 22 gènes en question codent des ARNt, et 13 gènes codent des protéines.' },
    ],
    explanation: 'L\'ADNmt humain de référence compte 16 569 paires de bases et 37 gènes : 13 protéines, 22 ARNt et 2 ARNr. La longueur « 16 659 » du support est une inversion de chiffres. (Cours, p. 4 ; chiffre corrigé)'
  },
  {
    id: 4,
    type: 'QRM',
    question: 'À propos de l\'expression des gènes mitochondriaux et de la chaîne respiratoire, quelles propositions sont exactes ?',
    options: [
      { text: 'Toutes les sous-unités du complexe II de la chaîne respiratoire sont codées par l\'ADN mitochondrial', correct: false, correction: 'Non chef. Le complexe II est au contraire entièrement codé par des gènes nucléaires.' },
      { text: 'La majorité des protéines mitochondriales nécessaires au fonctionnement cellulaire provient de gènes nucléaires', correct: true, correction: 'Oui. Le génome mitochondrial est petit et dépend de nombreux produits nucléaires.' },
      { text: 'Les gènes de l\'ADNmt rendent totalement inutile l\'import de protéines depuis le cytoplasme', correct: false, correction: 'Faux. De nombreuses protéines codées par le noyau sont importées dans la mitochondrie.' },
      { text: 'Dans les mitochondries humaines, UGA code le tryptophane alors qu\'il est un codon stop dans le code standard', correct: true, correction: 'Exact 🧠 C\'est l\'exemple le plus net donné par le support.' },
      { text: 'Le code génétique mitochondrial humain présente quelques différences par rapport au code nucléaire', correct: true, correction: 'Oui boss. La plupart des codons gardent leur sens, mais il existe des exceptions.' },
    ],
    explanation: 'L\'ADNmt et l\'ADN nucléaire coopèrent au fonctionnement mitochondrial ; le complexe II est nucléaire et le code mitochondrial diffère du code standard pour certains codons. (Cours, p. 4)'
  },
  {
    id: 5,
    type: 'QCM',
    question: 'Quelle distinction entre « maladie mitochondriale » et « hérédité mitochondriale » est correcte ?',
    options: [
      { text: 'Toute maladie touchant la mitochondrie suit forcément une transmission mère-enfant', correct: false, correction: 'Non chef. Un gène nucléaire mitochondrial peut suivre un mode autosomique ou lié à l\'X.' },
      { text: 'Une maladie due à l\'ADNmt suit en général une transmission maternelle, tandis qu\'une maladie de fonction mitochondriale peut venir d\'un gène nucléaire', correct: true, correction: 'Oui boss 🎯 Le dysfonctionnement de l\'organite ne renseigne pas, à lui seul, sur le génome atteint.' },
      { text: 'L\'hérédité mitochondriale signifie seulement qu\'une maladie atteint le muscle', correct: false, correction: 'Non chef. Elle décrit l\'origine et le mode de transmission de l\'ADN concerné, pas un seul tissu atteint.' },
      { text: 'Un gène nucléaire ne peut jamais coder une protéine destinée à la mitochondrie', correct: false, correction: 'Non. Beaucoup de protéines mitochondriales sont codées dans le noyau.' },
      { text: 'Un variant d\'ADNmt est normalement transmis par le père mais jamais par la mère', correct: false, correction: 'Faux. C\'est l\'inverse dans la transmission mitochondriale humaine habituelle.' },
    ],
    explanation: 'Une maladie du fonctionnement mitochondrial peut provenir d\'un variant de l\'ADNmt ou d\'un gène nucléaire ; seule la première catégorie suit typiquement la transmission de l\'ADNmt par la mère. (Cours, p. 4–5)'
  },
  {
    id: 6,
    type: 'QRM',
    question: 'Si une protéine nécessaire à la mitochondrie est codée par un gène nucléaire pathogène, quelles conséquences sont possibles ?',
    options: [
      { text: 'Une anomalie de maintenance de l\'ADNmt provoquée par un gène nucléaire', correct: true, correction: 'Exact 🧠 Des protéines codées par le noyau servent à répliquer ou entretenir l\'ADNmt.' },
      { text: 'Un mode autosomique récessif', correct: true, correction: 'Oui boss. C\'est une possibilité importante pour les gènes nucléaires.' },
      { text: 'Un mode autosomique dominant', correct: true, correction: 'Exact. Selon le gène et le mécanisme, cette transmission existe aussi.' },
      { text: 'Un mode lié au chromosome X', correct: true, correction: 'Oui. Certains gènes nucléaires de fonction mitochondriale sont liés à l\'X.' },
      { text: 'Une transmission maternelle obligatoire parce que la protéine agit dans la mitochondrie', correct: false, correction: 'Non chef. Le mode de transmission dépend du génome où se situe le gène, pas seulement de la destination de sa protéine.' },
    ],
    explanation: 'Les gènes nucléaires nécessaires à la fonction mitochondriale peuvent suivre les modes mendéliens et incluent des gènes de maintenance de l\'ADNmt. (Cours, p. 5)'
  },
  {
    id: 7,
    type: 'QCM',
    question: 'Une même variation pathogène m.7445A>G du gène mitochondrial MT-TS1 peut être associée à une surdité isolée ou à une surdité avec kératodermie. Que montre cet exemple ?',
    options: [
      { text: 'Le gène MT-TS1 se situe forcément sur le chromosome X', correct: false, correction: 'Non. Le préfixe MT signale ici un gène de l\'ADN mitochondrial.' },
      { text: 'Une atteinte cutanée exclut toute participation de l\'ADN mitochondrial', correct: false, correction: 'Non chef. Une maladie mitochondriale peut toucher plusieurs tissus.' },
      { text: 'Deux phénotypes différents prouvent que les variantes causales sont nécessairement différentes', correct: false, correction: 'Faux. La même variation m.7445A>G peut s\'exprimer différemment.' },
      { text: 'Un même génotype mitochondrial peut conduire à plusieurs phénotypes', correct: true, correction: 'Oui boss 🧠 La présence d\'un variant ne fixe pas toujours une présentation clinique unique.' },
      { text: 'Une surdité liée à MT-TS1 est toujours associée à une kératodermie', correct: false, correction: 'Non chef. L\'exemple compare précisément des atteintes avec ou sans manifestation cutanée.' },
    ],
    explanation: 'La variation m.7445A>G de MT-TS1 illustre une expressivité variable : surdité isolée ou associée à une kératodermie palmo-plantaire. (Cours, p. 6)'
  },
  {
    id: 8,
    type: 'QRM',
    question: 'Concernant le syndrome de Leigh, quelles affirmations respectent la diversité génétique du cours ?',
    options: [
      { text: 'Il peut aussi résulter d\'anomalies de gènes nucléaires', correct: true, correction: 'Exact. Le même syndrome clinique n\'implique pas toujours le même génome.' },
      { text: 'Il peut résulter d\'anomalies de l\'ADNmt', correct: true, correction: 'Oui boss. Certaines formes impliquent des gènes mitochondriaux.' },
      { text: 'Un tableau neurologique progressif avec régression d\'acquis peut faire partie du syndrome', correct: true, correction: 'Exact. Le support décrit cette présentation parmi les manifestations possibles.' },
      { text: 'Le mode de transmission familial dépend de la cause moléculaire identifiée', correct: true, correction: 'Oui 🧠 Une cause ADNmt et une cause nucléaire ne donnent pas le même conseil génétique.' },
      { text: 'Une seule mutation précise explique tous les patients atteints de ce syndrome', correct: false, correction: 'Non chef. C\'est un exemple d\'hétérogénéité génétique.' },
    ],
    explanation: 'Le syndrome de Leigh illustre l\'hétérogénéité génétique : des anomalies de l\'ADNmt ou du génome nucléaire peuvent aboutir à un tableau clinique proche. (Cours, p. 6–7)'
  },
  {
    id: 9,
    type: 'QCM',
    question: 'Dans la transmission habituelle de l\'ADN mitochondrial humain, que peut-on déduire pour les enfants d\'un homme atteint par un variant de son ADNmt ?',
    options: [
      { text: 'L\'absence de transmission paternelle prouve que les hommes ne peuvent jamais être symptomatiques', correct: false, correction: 'Non chef. Un garçon peut hériter du variant de sa mère, être atteint puis ne pas le transmettre à ses propres enfants.' },
      { text: 'Ils n\'héritent normalement pas de ce variant par leur père', correct: true, correction: 'Oui boss. Les mitochondries du zygote proviennent habituellement de l\'ovocyte ; il faut distinguer la transmission de l\'ADNmt de celle des gènes nucléaires paternels.' },
      { text: 'Ses fils héritent du variant, mais pas ses filles', correct: false, correction: 'Non chef. Le mode mitochondrial n\'est pas une transmission liée au chromosome Y.' },
      { text: 'Ses filles héritent du variant, mais pas ses fils', correct: false, correction: 'Faux. Ce serait une transmission père-fille, pas la transmission maternelle de l\'ADNmt.' },
      { text: 'Chaque enfant reçoit exactement la moitié de son ADNmt paternel', correct: false, correction: 'Non. Cette règle de moitié concerne surtout les génomes nucléaires, pas l\'ADNmt habituel.' },
    ],
    explanation: 'Les spermatozoïdes possèdent des mitochondries, mais leur ADNmt ne contribue normalement pas à celui des enfants ; un homme porteur peut donc être malade sans transmettre ce variant par sa lignée paternelle. (Cours, p. 8–9)'
  },
  {
    id: 10,
    type: 'QRM',
    question: 'Une femme porte un variant pathogène hétéroplasmique de l\'ADNmt et n\'a que peu de symptômes. Quelles propositions sont justes pour sa descendance ?',
    options: [
      { text: 'L\'absence de symptômes chez la mère n\'écarte pas un risque pour ses enfants', correct: true, correction: 'Exact 🧠 La pénétrance et la charge mutante peuvent différer dans la famille.' },
      { text: 'La proportion d\'ADNmt muté transmise peut varier d\'un enfant à l\'autre', correct: true, correction: 'Exact. La ségrégation et le goulot d\'étranglement germinal rendent la charge mutante variable.' },
      { text: 'Ses filles et ses garçons peuvent être exposés au variant', correct: true, correction: 'Oui boss. Le sexe de l\'enfant n\'empêche pas l\'héritage maternel de l\'ADNmt.' },
      { text: 'Tous les enfants auront nécessairement la même sévérité clinique que leur mère', correct: false, correction: 'Non chef. Une mère peu atteinte peut avoir des enfants très différents cliniquement.' },
      { text: 'Une fille porteuse peut à son tour transmettre le variant mitochondrial', correct: true, correction: 'Oui. La lignée maternelle peut se poursuivre par ses filles.' },
    ],
    explanation: 'Une mère porteuse d\'un variant hétéroplasmique expose ses enfants des deux sexes à un risque, mais la quantité de variant transmise et le phénotype peuvent varier fortement ; il n\'existe pas ici un simple risque mendélien de 50 %. (Cours, p. 8–11)'
  },
  {
    id: 11,
    type: 'QCM',
    question: 'Un homme perd progressivement la vision centrale et porte un variant d\'ADN mitochondrial associé à la neuropathie optique de Leber (LHON). Quelle interprétation est juste ?',
    options: [
      { text: 'Le variant peut avoir été transmis par sa mère, même si elle voit normalement', correct: true, correction: 'Oui boss. La transmission de l\'ADNmt est maternelle et la pénétrance de la LHON est incomplète.' },
      { text: 'Sa mère doit avoir perdu la vision avant lui pour lui transmettre le variant', correct: false, correction: 'Faux. Une mère porteuse peut rester asymptomatique.' },
      { text: 'Une atteinte plus fréquente chez les hommes prouve une transmission liée à l\'X', correct: false, correction: 'Non. Le biais d\'expression selon le sexe ne suffit pas à établir le mode de transmission ; ici, il est mitochondrial.' },
      { text: 'Son père lui a nécessairement transmis le variant puisqu\'il est un homme', correct: false, correction: 'Non chef. Le sexe du malade ne change pas l\'origine maternelle habituelle de son ADNmt.' },
      { text: 'Tous ses enfants hériteront du variant mitochondrial de leur père', correct: false, correction: 'Faux. Un homme atteint ne transmet habituellement pas son ADNmt à ses enfants.' },
    ],
    explanation: 'La LHON illustre une transmission maternelle avec pénétrance incomplète : une mère porteuse peut ne pas avoir de déficit visuel, tandis que son fils en développe un. (Cours, p. 9)'
  },
  {
    id: 12,
    type: 'QRM',
    question: 'À propos de l\'expression clinique de la neuropathie optique de Leber (LHON), quelles propositions sont exactes ?',
    options: [
      { text: 'Un porteur du variant peut ne jamais développer de baisse visuelle', correct: true, correction: 'Oui boss. Porter un variant associé à la LHON ne signifie pas nécessairement devenir symptomatique.' },
      { text: 'Les femmes porteuses sont toujours indemnes de symptômes', correct: false, correction: 'Non chef. Elles sont moins souvent atteintes, mais l\'atteinte féminine existe.' },
      { text: 'Le tabagisme fait partie des facteurs associés à un risque accru d\'expression', correct: true, correction: 'Oui. C\'est un modificateur pertinent, sans constituer une explication unique et certaine.' },
      { text: 'Des facteurs génétiques et environnementaux peuvent modifier le risque d\'expression', correct: true, correction: 'Exact. La pénétrance dépend de plusieurs facteurs et ne se résume pas à la présence du variant.' },
      { text: 'Un pourcentage identique de porteurs malades s\'applique à toutes les familles et à tous les variants', correct: false, correction: 'Faux. La pénétrance varie ; un chiffre unique ne permet pas de prédire chaque individu.' },
    ],
    explanation: 'Dans la LHON, la pénétrance est incomplète et dépend notamment du sexe, du contexte génétique et de facteurs environnementaux. Un variant ne prédit pas à lui seul l\'atteinte visuelle individuelle. (Cours, p. 9)'
  },
  {
    id: 13,
    type: 'QCM',
    question: 'Dans une cellule, que désigne précisément l\'hétéroplasmie mitochondriale ?',
    options: [
      { text: 'La coexistence obligatoire de deux allèles sur les deux chromosomes homologues', correct: false, correction: 'Faux. C\'est une logique de génétique nucléaire diploïde ; l\'ADNmt existe en nombreuses copies.' },
      { text: 'La présence du variant dans 100 % des copies d\'ADNmt', correct: false, correction: 'Faux. À 100 % pour le variant considéré, on parle d\'homoplasmie mutée.' },
      { text: 'La présence de mitochondries uniquement dans les tissus à forte demande énergétique', correct: false, correction: 'Non chef. Cela décrit plutôt une répartition ou une abondance d\'organites, pas l\'hétéroplasmie.' },
      { text: 'La présence du variant dans 0 % des copies d\'ADNmt', correct: false, correction: 'Non. À 0 %, il n\'y a pas de mélange pour ce variant ; ce n\'est pas une hétéroplasmie.' },
      { text: 'La coexistence d\'ADNmt avec et sans un variant donné', correct: true, correction: 'Oui boss. Les copies mutées et non mutées coexistent dans la population d\'ADNmt considérée.' },
    ],
    explanation: 'L\'hétéroplasmie correspond à un mélange de génomes mitochondriaux distincts dans une cellule ou un tissu. Les situations à 0 % ou 100 % d\'un variant ne sont pas hétéroplasmiques pour ce variant. (Cours, p. 10 ; terminologie corrigée)'
  },
  {
    id: 14,
    type: 'QRM',
    question: 'Une mère porte un variant pathogène de l\'ADNmt à l\'état hétéroplasmique. Quelles conséquences sont compatibles avec la ségrégation mitochondriale ?',
    options: [
      { text: 'Chaque grossesse a nécessairement 50 % de risque de recevoir le variant, comme pour un parent hétérozygote autosomique', correct: false, correction: 'Faux. Cette règle mendélienne ne décrit pas la transmission hétéroplasmique de l\'ADNmt.' },
      { text: 'Deux enfants de cette mère peuvent recevoir des proportions différentes du variant', correct: true, correction: 'Oui boss. Le goulot d\'étranglement germinal et la ségrégation rendent la charge mutée variable d\'un enfant à l\'autre.' },
      { text: 'La charge mesurée dans le sang maternel donne exactement celle de chaque ovocyte', correct: false, correction: 'Non chef. Une mesure sanguine ne photographie pas la composition de chaque ovocyte.' },
      { text: 'Le phénotype peut varier au sein d\'une même fratrie', correct: true, correction: 'Oui. Une charge mutée et une répartition tissulaire différentes peuvent contribuer à des manifestations différentes.' },
      { text: 'La proportion du variant peut différer entre les tissus d\'une même personne', correct: true, correction: 'Exact. Les copies d\'ADNmt se répartissent différemment au fil des divisions et selon les tissus.' },
    ],
    explanation: 'La ségrégation réplicative et le goulot d\'étranglement ovocytaire expliquent une variation de la proportion d\'ADNmt muté entre enfants et entre tissus. Le pourcentage sanguin maternel ne fixe pas une probabilité mendélienne simple. (Cours, p. 10–11)'
  },
  {
    id: 15,
    type: 'QCM',
    question: 'Que signifie l\'« effet seuil » évoqué pour certaines maladies liées à l\'ADNmt ?',
    options: [
      { text: 'Le franchissement d\'un seuil dans le sang prouve la même atteinte dans le cerveau', correct: false, correction: 'Faux. Les charges mutées et la vulnérabilité diffèrent selon les tissus.' },
      { text: 'Il s\'agit du nombre minimal de membres atteints pour déclarer la maladie familiale', correct: false, correction: 'Faux. Le seuil concerne ici la fonction cellulaire ou tissulaire, pas un effectif dans l\'arbre généalogique.' },
      { text: 'Tout variant d\'ADNmt devient symptomatique exactement à 50 % dans chaque tissu', correct: false, correction: 'Non chef. Il n\'existe pas de seuil universel de 50 % ; le seuil dépend du variant et du contexte tissulaire.' },
      { text: 'Un seuil veut dire qu\'aucun facteur autre que le pourcentage d\'ADNmt muté n\'intervient', correct: false, correction: 'Non. Le génotype nucléaire, l\'âge et d\'autres facteurs peuvent aussi moduler l\'expression.' },
      { text: 'Une altération fonctionnelle peut apparaître quand la charge mutée dépasse une valeur critique propre au variant et au tissu', correct: true, correction: 'Oui boss. Un tissu peut tolérer une certaine charge mutée avant que sa fonction soit suffisamment perturbée pour entraîner des signes.' },
    ],
    explanation: 'Le modèle à seuil relie, de manière variable selon le tissu et le variant, la proportion d\'ADNmt muté à une défaillance fonctionnelle. Il ne donne pas une valeur fixe applicable à toutes les maladies. (Cours, p. 11)'
  },
  {
    id: 16,
    type: 'QRM',
    question: 'Une suspicion clinique de maladie mitochondriale liée à l\'ADNmt persiste malgré une faible proportion de variant trouvée dans le sang. Quelles propositions sont justes ?',
    options: [
      { text: 'Une faible charge sanguine exclut systématiquement une charge élevée dans un autre tissu', correct: false, correction: 'Non chef. Les répartitions tissulaires peuvent être très différentes.' },
      { text: 'Un résultat sanguin peu contributif ne suffit pas à lui seul à écarter l\'hypothèse diagnostique', correct: true, correction: 'Oui. Il faut interpréter le résultat avec le phénotype, le variant et le tissu étudié.' },
      { text: 'Le choix d\'un autre prélèvement dépend notamment du variant recherché et de la situation clinique', correct: true, correction: 'Exact. Un autre tissu peut être informatif, mais sa pertinence se décide au cas par cas.' },
      { text: 'La proportion du variant peut différer dans le muscle, les cellules urinaires ou d\'autres tissus', correct: true, correction: 'Oui boss. L\'hétéroplasmie varie selon les tissus ; un résultat sanguin ne résume pas l\'organisme entier.' },
      { text: 'Une biopsie cérébrale doit être réalisée en première intention pour mesurer le variant', correct: false, correction: 'Faux. Ce n\'est pas un prélèvement de routine ; des tissus accessibles et des examens moins invasifs sont envisagés selon le contexte.' },
    ],
    explanation: 'L\'hétéroplasmie est variable entre tissus et peut changer avec l\'âge. Selon le variant, l\'étude d\'un tissu accessible autre que le sang peut aider ; aucune matrice n\'est systématiquement la meilleure. (Cours, p. 10–11)'
  },
  {
    id: 17,
    type: 'QCM',
    question: 'Le variant mitochondrial m.8993T>G de MT-ATP6 est retrouvé dans une famille. Quelle proposition relie correctement génotype et phénotype ?',
    options: [
      { text: 'Il constitue une preuve que les syndromes de Leigh sont toujours dus à un seul gène mitochondrial', correct: false, correction: 'Non. Leigh est génétiquement hétérogène, avec aussi de nombreuses causes nucléaires.' },
      { text: 'Il n\'a de conséquence que sur les globules rouges dépourvus de mitochondries', correct: false, correction: 'Faux. Les hématies matures n\'ont pas de mitochondries ; les tissus énergivores sont particulièrement concernés.' },
      { text: 'Il peut s\'associer au spectre NARP ou à un syndrome de Leigh, la charge mutée contribuant à la sévérité sans la prédire parfaitement', correct: true, correction: 'Oui boss. C\'est un exemple d\'expressivité variable avec une association entre proportion mutée et sévérité, mais sans frontière clinique absolue.' },
      { text: 'Il code un récepteur nucléaire transmis par le père à ses fils', correct: false, correction: 'Faux. MT-ATP6 est un gène mitochondrial ; la transmission habituelle de l\'ADNmt est maternelle.' },
      { text: 'Il provoque obligatoirement le même syndrome et la même sévérité chez tous les porteurs', correct: false, correction: 'Non chef. La charge mutée et le contexte individuel peuvent changer la présentation.' },
    ],
    explanation: 'Un même variant de MT-ATP6 peut participer à des tableaux NARP ou Leigh selon la charge mutée et d\'autres facteurs. Cette relation est utile mais ne permet pas une prédiction individuelle parfaite. (Cours, p. 8 et 11)'
  },
  {
    id: 18,
    type: 'QRM',
    question: 'Parmi ces associations entre syndromes et manifestations, lesquelles sont cohérentes avec les exemples du cours ?',
    options: [
      { text: 'La LHON peut se manifester par une neuropathie optique avec baisse de la vision centrale', correct: true, correction: 'Oui boss. C\'est le tableau cardinal de la neuropathie optique héréditaire de Leber.' },
      { text: 'Le syndrome MELAS peut comporter des épisodes ressemblant à des accidents vasculaires cérébraux', correct: true, correction: 'Oui. Les épisodes « stroke-like » font partie de la présentation, sans devoir être assimilés à un AVC vasculaire classique.' },
      { text: 'Le syndrome NARP associe notamment atteinte neurologique, ataxie et rétinite pigmentaire', correct: true, correction: 'Exact. L\'acronyme résume neuropathie, ataxie et rétinite pigmentaire.' },
      { text: 'La maladie de Leigh est toujours due à une mutation d\'ADNmt et jamais à un gène nucléaire', correct: false, correction: 'Non chef. Des variants nucléaires et mitochondriaux peuvent donner un spectre de Leigh.' },
      { text: 'Tous ces tableaux ont une présentation identique et limitée au seul système nerveux', correct: false, correction: 'Faux. Ils sont distincts et les maladies mitochondriales peuvent toucher plusieurs organes.' },
    ],
    explanation: 'Les phénotypes mitochondriaux sont variés : LHON, NARP, MELAS et Leigh illustrent des manifestations différentes, parfois multisystémiques. Leur mode de transmission dépend de la cause moléculaire. (Cours, p. 7–9)'
  },
  {
    id: 19,
    type: 'QCM',
    question: 'Une femme asymptomatique porte un variant pathogène hétéroplasmique de l\'ADNmt. Quelle phrase est la plus juste pour son conseil génétique ?',
    options: [
      { text: 'Chaque grossesse a exactement un risque de 50 % de variant pathogène, quelle que soit l\'hétéroplasmie', correct: false, correction: 'Non chef. Le modèle autosomique dominant à 50 % ne s\'applique pas tel quel à l\'ADNmt hétéroplasmique.' },
      { text: 'Ses enfants des deux sexes peuvent être concernés, mais la charge mutée et la sévérité individuelles ne se déduisent pas simplement de sa prise de sang', correct: true, correction: 'Oui boss. Il existe un risque de transmission maternelle aux deux sexes, avec une variabilité difficile à prédire.' },
      { text: 'L\'absence de symptômes maternels garantit que les enfants resteront asymptomatiques', correct: false, correction: 'Faux. Une mère peu ou pas symptomatique peut avoir un enfant plus atteint.' },
      { text: 'Seules ses filles peuvent porter le variant, puisqu\'elles seules ont des mitochondries', correct: false, correction: 'Non. Filles et garçons ont des mitochondries et peuvent recevoir l\'ADNmt maternel.' },
      { text: 'La valeur sanguine maternelle prédit exactement la charge mutée dans chaque organe de chaque enfant', correct: false, correction: 'Faux. La répartition dans les ovocytes puis les tissus est variable.' },
    ],
    explanation: 'Le conseil génétique d\'une femme porteuse d\'un variant de l\'ADNmt doit distinguer possibilité de transmission maternelle et prédiction du phénotype. L\'hétéroplasmie rend les charges mutées et la sévérité variables. (Cours, p. 11–13)'
  },
  {
    id: 20,
    type: 'QRM',
    question: 'Dans une famille avec variant pathogène d\'ADNmt identifié, quelles affirmations sur l\'évaluation du risque familial sont raisonnables ?',
    options: [
      { text: 'La discussion dépend du variant précis, de son niveau d\'hétéroplasmie et des données de la famille', correct: true, correction: 'Oui boss. Le conseil est individualisé : toutes les variantes ne se comportent pas de la même façon.' },
      { text: 'Une mesure unique dans un tissu prédit avec certitude la sévérité future dans tous les organes', correct: false, correction: 'Faux. La charge mutée peut varier entre tissus et le phénotype dépend d\'autres facteurs.' },
      { text: 'Une analyse prénatale peut être discutée dans certaines situations, avec des limites d\'interprétation liées notamment à l\'hétéroplasmie', correct: true, correction: 'Exact. Un prélèvement prénatal peut informer, mais ne garantit pas toujours une prédiction simple de l\'atteinte future.' },
      { text: 'Le diagnostic prénatal est toujours impossible pour les maladies de l\'ADNmt', correct: false, correction: 'Non. Certaines analyses sont possibles ; leur valeur prédictive dépend du variant et du contexte.' },
      { text: 'Toute analyse d\'un apparenté asymptomatique est inutile par définition', correct: false, correction: 'Non chef. Selon le variant et la question clinique, elle peut aider au diagnostic familial ou au conseil.' },
    ],
    explanation: 'Une fois la cause moléculaire identifiée, l\'évaluation familiale et prénatale peut être envisagée au cas par cas. Le type de variant, l\'hétéroplasmie et la variabilité tissulaire limitent parfois la prédiction clinique. (Cours, p. 11–12 ; absolu du support corrigé)'
  },
  {
    id: 21,
    type: 'QCM',
    question: 'Quelle formulation décrit le mieux une régulation épigénétique de l\'expression d\'un gène ?',
    options: [
      { text: 'Une transmission exclusivement paternelle de tout caractère', correct: false, correction: 'Non chef, l\'épigénétique ne se résume pas à une origine paternelle.' },
      { text: 'Une régulation de l\'expression sans changement nécessaire de la séquence d\'ADN', correct: true, correction: 'Oui boss 🧠 des marques comme la méthylation de l\'ADN ou les modifications d\'histones peuvent changer l\'activité d\'un gène.' },
      { text: 'La traduction d\'un ARN en protéine sans étape de transcription', correct: false, correction: 'Non chef, la traduction ne définit pas l\'épigénétique et requiert un ARN produit auparavant.' },
      { text: 'La perte systématique d\'un chromosome entier', correct: false, correction: 'Non chef, une anomalie du nombre de chromosomes n\'est pas la définition d\'un mécanisme épigénétique.' },
      { text: 'Une substitution obligatoire de bases dans la séquence codante', correct: false, correction: 'Non chef, une variation de séquence est génétique ; elle n\'est pas nécessaire pour modifier l\'expression par épigénétique.' },
    ],
    explanation: 'L\'épigénétique décrit des mécanismes de régulation de l\'expression génique qui n\'exigent pas de modification de la séquence d\'ADN. (Cours, p. 14)'
  },
  {
    id: 22,
    type: 'QRM',
    question: 'Quels mécanismes cités dans le cours peuvent participer à la régulation épigénétique ?',
    options: [
      { text: 'L\'acétylation ou la désacétylation des histones', correct: true, correction: 'Oui boss 🧠 ces modifications contribuent à moduler l\'état de la chromatine.' },
      { text: 'L\'établissement systématique des mêmes empreintes dans les ovocytes et les spermatozoïdes', correct: false, correction: 'Non chef, les marques d\'empreinte sont réétablies selon le sexe de la lignée germinale.' },
      { text: 'La méthylation de régions régulatrices de l\'ADN', correct: true, correction: 'Oui boss 🧠 l\'état de méthylation d\'une région peut modifier l\'accès à la transcription.' },
      { text: 'Une modification du nombre de chromosomes à chaque division', correct: false, correction: 'Non chef, une aneuploïdie n\'est pas un mécanisme épigénétique normal.' },
      { text: 'L\'action de certains ARN non codants', correct: true, correction: 'Oui boss 🧠 ils peuvent intervenir dans la régulation de l\'expression.' },
    ],
    explanation: 'La méthylation de l\'ADN, les modifications des histones et certains ARN non codants peuvent contribuer au contrôle de l\'expression. (Cours, p. 14)'
  },
  {
    id: 23,
    type: 'QCM',
    question: 'Dans le vocabulaire utilisé par ce cours, qu\'implique une « empreinte maternelle » pour un gène donné ?',
    options: [
      { text: 'Les deux allèles sont supprimés du génome de l\'enfant', correct: false, correction: 'Non chef, une empreinte change l\'expression, pas nécessairement le nombre de copies d\'ADN.' },
      { text: 'L\'allèle maternel est réprimé dans le contexte d\'expression considéré', correct: true, correction: 'Oui boss 🧠 l\'allèle actif est alors celui d\'origine paternelle dans le tissu concerné.' },
      { text: 'Le gène devient obligatoirement muté dans l\'ovocyte', correct: false, correction: 'Non chef, la marque d\'empreinte ne suppose pas de mutation de séquence.' },
      { text: 'L\'allèle paternel devient une copie du chromosome maternel', correct: false, correction: 'Non chef, cela ne fait pas partie de la définition de l\'empreinte.' },
      { text: 'L\'allèle transmis par la mère est toujours le seul exprimé', correct: false, correction: 'Non chef, le terme désigne ici la marque qui réprime l\'allèle d\'origine maternelle.' },
    ],
    explanation: 'Dans la terminologie du cours, « empreinte maternelle » signifie que l\'allèle d\'origine maternelle est réprimé ; l\'expression peut dépendre du tissu. (Cours, p. 14 et 17)'
  },
  {
    id: 24,
    type: 'QRM',
    question: 'Concernant les gènes soumis à empreinte parentale, quelles propositions sont exactes ?',
    options: [
      { text: 'Leur expression peut varier selon le tissu ou la période du développement', correct: true, correction: 'Oui boss 🧠 la lecture d\'une empreinte n\'est pas nécessairement identique dans toutes les cellules.' },
      { text: 'Ils peuvent présenter une hémizygotie fonctionnelle dans certains tissus', correct: true, correction: 'Oui boss 🧠 une seule des deux copies héritées y contribue alors à l\'expression.' },
      { text: 'Ils constituent obligatoirement la majorité des gènes humains', correct: false, correction: 'Non chef, seule une minorité des gènes est soumise à empreinte.' },
      { text: 'L\'allèle maternel est toujours inactif, quel que soit le gène', correct: false, correction: 'Non chef, selon le locus, l\'allèle actif peut être maternel ou paternel.' },
      { text: 'Leur expression peut dépendre du parent qui a transmis l\'allèle', correct: true, correction: 'Oui boss 🧠 c\'est le principe même de l\'empreinte parentale.' },
    ],
    explanation: 'Pour un gène soumis à empreinte, l\'origine parentale influence l\'expression ; cette expression peut aussi être spécifique d\'un tissu ou d\'un stade. (Cours, p. 14, 17 et 22)'
  },
  {
    id: 25,
    type: 'QCM',
    question: 'Que suggèrent les expériences où un embryon possède deux génomes d\'origine maternelle ou deux génomes d\'origine paternelle ?',
    options: [
      { text: 'Deux jeux chromosomiques d\'un même parent assurent toujours un développement embryonnaire normal', correct: false, correction: 'Non chef, ces expériences montrent justement que la diploïdie seule ne suffit pas.' },
      { text: 'Des contributions parentales différentes sont nécessaires au développement normal de certains tissus', correct: true, correction: 'Oui boss 🧠 les génomes maternel et paternel ne sont pas toujours fonctionnellement interchangeables.' },
      { text: 'Tous les gènes possèdent obligatoirement une empreinte parentale', correct: false, correction: 'Non chef, l\'observation concerne l\'effet de certains gènes soumis à empreinte, pas tous les gènes.' },
      { text: 'Un embryon diploïde ne peut jamais subir de variation épigénétique', correct: false, correction: 'Non chef, l\'origine des marques parentales peut modifier son développement.' },
      { text: 'Le génome paternel n\'intervient que dans la formation des gamètes', correct: false, correction: 'Non chef, ses contributions épigénétiques comptent aussi après la fécondation.' },
    ],
    explanation: 'Les embryons expérimentaux uniparentaux illustrent qu\'avoir deux jeux de chromosomes ne suffit pas si leur origine parentale est identique. (Cours, p. 15 à 17)'
  },
  {
    id: 26,
    type: 'QRM',
    question: 'À propos de la théorie du conflit parental présentée dans le cours, quels énoncés sont justes ?',
    options: [
      { text: 'Elle explique de façon démontrée et exhaustive l\'empreinte de chaque gène humain', correct: false, correction: 'Non chef, c\'est un modèle explicatif, pas une loi universelle couvrant tous les loci.' },
      { text: 'Elle exige que les deux allèles de tout gène soient toujours transcrits au même niveau', correct: false, correction: 'Non chef, l\'empreinte implique précisément une expression dépendante de l\'origine parentale.' },
      { text: 'Elle prédit, pour certains gènes, une tendance des allèles paternels exprimés à favoriser la croissance fœtale', correct: true, correction: 'Oui boss 🧠 ce rôle est proposé dans le cadre de cette théorie pour une partie des gènes concernés.' },
      { text: 'Elle s\'intéresse notamment aux gènes liés à la croissance et aux échanges materno-fœtaux', correct: true, correction: 'Oui boss 🧠 ces fonctions sont au centre de l\'hypothèse discutée.' },
      { text: 'Elle propose une tension évolutive autour des ressources maternelles allouées à la descendance', correct: true, correction: 'Oui boss 🧠 c\'est l\'idée générale du modèle présenté.' },
    ],
    explanation: 'La théorie du conflit parental propose une explication évolutive de certaines empreintes, surtout autour de la croissance et des ressources maternelles. (Cours, p. 17)'
  },
  {
    id: 27,
    type: 'QCM',
    question: 'À quoi sert principalement une région de contrôle d\'empreinte, ou ICR, dans un locus soumis à empreinte ?',
    options: [
      { text: 'À rendre obligatoirement identiques les marques des deux allèles parentaux', correct: false, correction: 'Non chef, elle présente souvent au contraire un état épigénétique différent selon l\'origine parentale.' },
      { text: 'À servir de promoteur codant unique pour tous les gènes du cluster', correct: false, correction: 'Non chef, une ICR est une région de contrôle ; elle ne remplace pas les séquences codantes des gènes.' },
      { text: 'À augmenter systématiquement le nombre de chromosomes du locus', correct: false, correction: 'Non chef, le nombre de copies chromosomiques n\'est pas la fonction d\'une ICR.' },
      { text: 'À coordonner l\'expression dépendante de l\'origine parentale de gènes d\'une région', correct: true, correction: 'Oui boss 🧠 une ICR peut piloter plusieurs gènes voisins soumis à empreinte.' },
      { text: 'À supprimer la nécessité de toute régulation dans les tissus somatiques', correct: false, correction: 'Non chef, sa marque est lue et peut entraîner une expression propre à certains tissus.' },
    ],
    explanation: 'Des gènes soumis à empreinte sont souvent regroupés en régions contrôlées par une ICR dont l\'état épigénétique dépend de l\'origine parentale. (Cours, p. 18)'
  },
  {
    id: 28,
    type: 'QRM',
    question: 'Dans le maintien et l\'établissement des marques de méthylation, quelles associations sont correctes ?',
    options: [
      { text: 'DNMT3A et DNMT3B — mise en place de méthylation de novo', correct: true, correction: 'Oui boss 🧠 ces enzymes sont associées à l\'établissement de nouvelles marques.' },
      { text: 'Une région différentiellement méthylée — état de méthylation distinct entre les copies parentales', correct: true, correction: 'Oui boss 🧠 cette différence peut participer à la lecture de l\'origine parentale.' },
      { text: 'DNMT1 — entretien de marques de méthylation après réplication', correct: true, correction: 'Oui boss 🧠 elle participe au maintien des profils de méthylation lors des divisions cellulaires.' },
      { text: 'DNMT1 — remplacement des cytosines par des adénines', correct: false, correction: 'Non chef, la méthylation modifie chimiquement l\'ADN sans changer nécessairement sa séquence.' },
      { text: 'Méthylation de l\'ADN — phénomène forcément perdu à chaque mitose somatique', correct: false, correction: 'Non chef, des mécanismes de maintenance permettent au contraire de propager certaines marques.' },
    ],
    explanation: 'Le cours distingue maintenance de la méthylation par DNMT1, établissement de novo par DNMT3A/3B et régions différentiellement méthylées. (Cours, p. 18)'
  },
  {
    id: 29,
    type: 'QCM',
    question: 'Pourquoi l\'énoncé « ADN méthylé = gène toujours éteint » est-il trop général ?',
    options: [
      { text: 'Parce qu\'aucune région promotrice ne peut être méthylée', correct: false, correction: 'Non chef, la méthylation d\'un promoteur est un mécanisme classique de répression.' },
      { text: 'Parce que la méthylation transforme toujours le gène en chromosome supplémentaire', correct: false, correction: 'Non chef, elle modifie une marque chimique, pas le nombre de chromosomes.' },
      { text: 'Parce que toute méthylation est une mutation irréversible de l\'ADN', correct: false, correction: 'Non chef, une marque épigénétique n\'est pas nécessairement un changement de séquence.' },
      { text: 'Parce que seule la traduction, jamais la transcription, est concernée', correct: false, correction: 'Non chef, la méthylation peut modifier directement la transcription.' },
      { text: 'Parce que la méthylation d\'un élément régulateur peut empêcher la fixation d\'un répresseur et favoriser l\'expression', correct: true, correction: 'Oui boss 🧠 l\'effet dépend de la séquence touchée et de la protéine qu\'elle recrute.' },
    ],
    explanation: 'La méthylation d\'un promoteur peut réprimer un gène, tandis que celle d\'un site régulateur peut empêcher la fixation d\'un inhibiteur et permettre l\'expression. (Cours, p. 19 et 20)'
  },
  {
    id: 30,
    type: 'QRM',
    question: 'Dans les schémas du cours comparant promoteur et séquence régulatrice, quelles affirmations sont correctes ?',
    options: [
      { text: 'Méthyler directement un promoteur peut diminuer la transcription du gène associé', correct: true, correction: 'Oui boss 🧠 c\'est le mécanisme simple représenté pour le promoteur.' },
      { text: 'L\'effet d\'une marque dépend de la fonction de la région d\'ADN sur laquelle elle se trouve', correct: true, correction: 'Oui boss 🧠 promoteur et séquence régulatrice ne se lisent pas de façon identique.' },
      { text: 'Méthyler un site de fixation d\'un répresseur peut, dans l\'exemple donné, favoriser la transcription', correct: true, correction: 'Oui boss 🧠 le répresseur ne se fixe alors plus sur ce site.' },
      { text: 'Une méthylation d\'ADN réprime obligatoirement tous les gènes du chromosome', correct: false, correction: 'Non chef, son effet se juge au locus et au contexte régulateur.' },
      { text: 'Une région régulatrice méthylée démontre nécessairement une disomie uniparentale', correct: false, correction: 'Non chef, la méthylation peut être normale ou altérée sans modification de l\'origine des chromosomes.' },
    ],
    explanation: 'Le même type de marque peut avoir des conséquences différentes selon qu\'il touche un promoteur ou un site régulateur occupé par un répresseur. (Cours, p. 19 et 20)'
  },
  {
    id: 31,
    type: 'QCM',
    question: 'Dans l’exemple d’isolateur sensible à la méthylation du cours, que fait la protéine CTCF sur la copie où l’ICR n’est pas méthylée ?',
    options: [
      { text: 'Elle efface définitivement tous les îlots CpG du génome', correct: false, correction: 'Non chef, la fixation locale de CTCF n\'efface pas les séquences d\'ADN.' },
      { text: 'Elle impose l\'expression simultanée et égale des deux allèles', correct: false, correction: 'Non chef, l\'isolateur contribue au contraire à une expression dépendante de l\'origine parentale.' },
      { text: 'Elle empêche directement toute méthylation sur les deux copies du chromosome', correct: false, correction: 'Non chef, sa fixation dépend d\'un état local de méthylation et n\'efface pas toutes les marques du chromosome.' },
      { text: 'Elle se fixe et peut empêcher un enhancer d\'activer l\'un des promoteurs', correct: true, correction: 'Oui boss 🧠 la fixation de CTCF interpose une barrière fonctionnelle entre enhancer et gène cible.' },
      { text: 'Elle duplique l\'ICR avant chaque mitose', correct: false, correction: 'Non chef, CTCF joue un rôle régulateur et architectural ; la duplication de l\'ADN relève de la réplication.' },
    ],
    explanation: 'Dans l\'exemple schématisé, l\'ICR non méthylée permet la fixation de CTCF, qui bloque l\'action d\'un enhancer sur un promoteur. (Cours, p. 20)'
  },
  {
    id: 32,
    type: 'QRM',
    question: 'À propos des ARN antisens ou non codants dans certains loci soumis à empreinte, quelles propositions sont prudentes et exactes ?',
    options: [
      { text: 'Ils remplacent dans tous les cas les régions de contrôle de l\'empreinte', correct: false, correction: 'Non chef, des ICR et des ARN non codants peuvent au contraire agir ensemble.' },
      { text: 'Tous répriment uniquement en formant un duplex stable avec l\'ARN sens', correct: false, correction: 'Non chef, les mécanismes diffèrent selon le locus ; la transcription antisens ou la chromatine peuvent aussi intervenir.' },
      { text: 'La méthylation d\'une région qui contrôle leur transcription peut modifier le gène exprimé', correct: true, correction: 'Oui boss 🧠 la marque régulatrice peut changer la production de l\'ARN antisens et l\'équilibre d\'expression.' },
      { text: 'Leur effet peut concerner des gènes situés sur le même chromosome', correct: true, correction: 'Oui boss 🧠 certains ARN d\'empreinte participent à une régulation locale en cis.' },
      { text: 'Leur transcription peut contribuer à réprimer l\'expression d\'un gène voisin', correct: true, correction: 'Oui boss 🧠 c\'est un des mécanismes de lecture de l\'empreinte décrits dans le cours.' },
    ],
    explanation: 'Le cours cite les ARN antisens parmi les mécanismes de lecture de l\'empreinte ; leur action réelle peut passer par plusieurs voies et n\'est pas toujours une simple neutralisation des ARN sens. (Cours, p. 19 à 21)'
  },
  {
    id: 33,
    type: 'QCM',
    question: 'Lors de la formation de la lignée germinale d\'un individu, qu\'advient-il des anciennes marques d\'empreinte parentale ?',
    options: [
      { text: 'Elles disparaissent seulement après la naissance de l\'enfant suivant', correct: false, correction: 'Non chef, l\'effacement et le rétablissement se déroulent pendant le développement de la lignée germinale.' },
      { text: 'Elles sont effacées uniquement sur les chromosomes hérités du père', correct: false, correction: 'Non chef, la reprogrammation germinale concerne les marques héritées des deux parents avant leur réétablissement.' },
      { text: 'Elles restent nécessairement inchangées dans tous les futurs gamètes, quel que soit leur sexe', correct: false, correction: 'Non chef, les marques d\'origine reçues de ses parents doivent être reprogrammées.' },
      { text: 'Elles sont copiées exclusivement dans les cellules somatiques puis deviennent des mutations', correct: false, correction: 'Non chef, la reprogrammation germinale est épigénétique, pas une mutation obligatoire.' },
      { text: 'Elles sont effacées puis des empreintes adaptées au sexe de la lignée germinale sont établies', correct: true, correction: 'Oui boss 🧠 les gamètes acquièrent ainsi les marques correspondant au parent qui les produira.' },
    ],
    explanation: 'Les anciennes empreintes sont effacées dans la lignée germinale, puis réétablies selon qu\'elle formera des ovocytes ou des spermatozoïdes. (Cours, p. 22 et 23)'
  },
  {
    id: 34,
    type: 'QRM',
    question: 'À propos du cycle de l\'empreinte entre gamètes et embryon, quelles propositions sont justes ?',
    options: [
      { text: 'À la fécondation, toutes les marques d\'empreinte doivent être effacées pour que l\'embryon se développe', correct: false, correction: 'Non chef, les marques germinales pertinentes sont généralement protégées pendant la reprogrammation embryonnaire.' },
      { text: 'L\'effacement germinal et la lecture somatique désignent la même étape dans la même cellule', correct: false, correction: 'Non chef, l\'une reprogramme les futures cellules reproductrices ; l\'autre régule l\'expression dans les tissus.' },
      { text: 'Des marques parentales sont établies dans la lignée germinale', correct: true, correction: 'Oui boss 🧠 elles participent à distinguer l\'origine maternelle ou paternelle après fécondation.' },
      { text: 'Certaines marques d\'empreinte sont maintenues au cours des divisions somatiques de l\'embryon', correct: true, correction: 'Oui boss 🧠 leur conservation rend possible une expression dépendante de l\'origine parentale.' },
      { text: 'La lecture de l\'empreinte peut varier selon le tissu ou le stade de développement', correct: true, correction: 'Oui boss 🧠 une marque stable n\'implique pas une expression identique dans toutes les cellules.' },
    ],
    explanation: 'Le cycle comprend établissement germinal, maintien de marques dans l\'embryon, lecture somatique et réinitialisation dans sa future lignée germinale. (Cours, p. 22 et 23)'
  },
  {
    id: 35,
    type: 'QCM',
    question: 'Quelle différence distingue une épimutation d\'une variation de séquence touchant un gène soumis à empreinte ?',
    options: [
      { text: 'Une variation de séquence est forcément sans conséquence sur l\'empreinte', correct: false, correction: 'Non chef, une variation dans un gène ou une région de contrôle peut perturber l\'expression.' },
      { text: 'Une épimutation impose toujours la perte complète du chromosome', correct: false, correction: 'Non chef, elle peut modifier une marque épigénétique sans perte chromosomique.' },
      { text: 'Une mutation ponctuelle efface obligatoirement les marques de tous les chromosomes', correct: false, correction: 'Non chef, une variation ponctuelle n\'a pas cet effet général.' },
      { text: 'Toute épimutation est exclusivement somatique et impossible à retrouver chez plusieurs apparentés', correct: false, correction: 'Non chef, le caractère transmissible dépend du mécanisme ; une anomalie d\'empreinte peut aussi être liée à une cause génétique.' },
      { text: 'L\'épimutation peut altérer une marque d\'empreinte sans modifier nécessairement la séquence d\'ADN', correct: true, correction: 'Oui boss 🧠 c\'est ce qui la distingue d\'une mutation ou d\'un réarrangement de séquence.' },
    ],
    explanation: 'Une épimutation touche une marque ou sa régulation sans changement nécessaire de la séquence ; une variation de séquence peut aussi perturber un locus soumis à empreinte. (Cours, p. 23 et 24)'
  },
  {
    id: 36,
    type: 'QRM',
    question: 'Parmi les mécanismes ou anomalies pouvant perturber l\'empreinte parentale, lesquels figurent dans le cours ?',
    options: [
      { text: 'La nécessité d\'une mutation de la séquence codante pour toute maladie d\'empreinte', correct: false, correction: 'Non chef, une épimutation ou une disomie uniparentale peut suffire sans variant codant.' },
      { text: 'Une délétion ou une variation d\'une région de contrôle d\'empreinte', correct: true, correction: 'Oui boss 🧠 une atteinte de l\'ICR peut empêcher sa fonction régulatrice.' },
      { text: 'Une disomie uniparentale d\'un chromosome portant des gènes soumis à empreinte', correct: true, correction: 'Oui boss 🧠 elle peut retirer la contribution du parent dont la copie était normalement active.' },
      { text: 'Une perte ou un gain anormal de méthylation dans une région d\'empreinte', correct: true, correction: 'Oui boss 🧠 le changement de marque peut modifier le nombre d\'allèles exprimés au locus.' },
      { text: 'L\'expression inévitablement biallélique de chaque gène soumis à empreinte normal', correct: false, correction: 'Non chef, l\'expression monoallélique dépendante de l\'origine parentale est justement le principe habituel.' },
    ],
    explanation: 'Les anomalies peuvent toucher les marques épigénétiques, les séquences qui les contrôlent ou l\'origine parentale des deux copies chromosomiques. (Cours, p. 23 et 24)'
  },
  {
    id: 37,
    type: 'QCM',
    question: 'Chez un enfant diploïde, quelle situation définit une disomie uniparentale pour un chromosome donné ?',
    options: [
      { text: 'Une seule copie du chromosome héritée du père', correct: false, correction: 'Non chef, il s\'agit d\'une monosomie pour ce chromosome.' },
      { text: 'Une copie maternelle et une copie paternelle de ce chromosome', correct: false, correction: 'Non chef, c\'est l\'héritage biparental habituel.' },
      { text: 'Trois copies du chromosome, dont deux maternelles', correct: false, correction: 'Non chef, cela définit d\'abord une trisomie, pas une disomie.' },
      { text: 'Deux copies du chromosome, toutes deux héritées du même parent', correct: true, correction: 'Oui boss 🧠 l\'autre parent ne fournit alors aucune copie de ce chromosome ou segment.' },
      { text: 'Un chromosome maternel et un chromosome paternel dont l\'empreinte est anormale', correct: false, correction: 'Non chef, cette situation reste biparentale pour l\'origine chromosomique ; un défaut d\'empreinte n\'est pas une disomie uniparentale.' },
    ],
    explanation: 'Une disomie uniparentale correspond à deux exemplaires d\'un chromosome ou segment provenant d\'un seul parent, malgré deux copies présentes. (Cours, p. 24)'
  },
  {
    id: 38,
    type: 'QRM',
    question: 'Un zygote a trois exemplaires d\'un chromosome : deux proviennent de la mère et un du père. Quelles issues d\'une correction de trisomie sont possibles ?',
    options: [
      { text: 'Après la correction, les deux chromosomes maternels restants sont toujours identiques sur toute leur longueur', correct: false, correction: 'Non chef, ils peuvent être homologues distincts ou comporter des segments recombinés.' },
      { text: 'La perte de la copie paternelle peut laisser deux copies maternelles', correct: true, correction: 'Oui boss 🧠 c\'est une voie vers une disomie uniparentale maternelle.' },
      { text: 'Une telle correction est un des mécanismes possibles de disomie uniparentale', correct: true, correction: 'Oui boss 🧠 la réduction d\'une trisomie peut modifier l\'origine parentale des deux chromosomes conservés.' },
      { text: 'Le retour à deux copies garantit à lui seul une origine biparentale', correct: false, correction: 'Non chef, la perte de la seule copie paternelle laisserait deux copies maternelles.' },
      { text: 'La perte d\'une des deux copies maternelles peut rétablir une contribution maternelle et paternelle', correct: true, correction: 'Oui boss 🧠 le zygote redevient alors biparental pour ce chromosome.' },
    ],
    explanation: 'Une correction de trisomie peut restaurer deux copies d\'origine biparentale ou laisser deux copies du parent initialement représenté deux fois. (Cours, p. 25 et 26)'
  },
  {
    id: 39,
    type: 'QCM',
    question: 'Un enfant reçoit deux copies d\'un même segment maternel portant un variant pathogène récessif de CFTR ; son père n\'a pas transmis ce segment. Quel mécanisme explique le mieux la maladie ?',
    options: [
      { text: 'Une mutation obligatoirement apparue indépendamment dans chacun des deux gamètes', correct: false, correction: 'Non chef, la duplication d\'un seul allèle parental suffit à expliquer cette homozygotie.' },
      { text: 'Une monosomie totale du chromosome 7', correct: false, correction: 'Non chef, l\'enfant possède bien deux copies du segment dans l\'énoncé.' },
      { text: 'Une isodisomie uniparentale maternelle rendant le variant homozygote au locus CFTR', correct: true, correction: 'Oui boss 🧠 le même allèle maternel pathogène est présent deux fois chez l\'enfant.' },
      { text: 'Une hétérodisomie maternelle conservant forcément les deux homologues maternels différents à CFTR', correct: false, correction: 'Non chef, la révélation du variant par double copie identique suppose une isodisomie au locus concerné.' },
      { text: 'Une simple marque de méthylation paternelle sans copie maternelle supplémentaire', correct: false, correction: 'Non chef, le scénario précise deux copies du même segment maternel porteur du variant.' },
    ],
    explanation: 'L\'isodisomie d\'un segment peut dupliquer un variant récessif porté par un parent hétérozygote ; le cours illustre ce mécanisme avec CFTR sur le chromosome 7. (Cours, p. 24 et 26)'
  },
  {
    id: 40,
    type: 'QRM',
    question: 'Quelles conclusions peut-on tirer avec prudence d\'une disomie uniparentale ?',
    options: [
      { text: 'Une hétérodisomie conserve deux homologues distincts du même parent dans la région considérée', correct: true, correction: 'Oui boss 🧠 elle s\'oppose à la copie deux fois d\'un même homologue.' },
      { text: 'Toute disomie uniparentale cause nécessairement une maladie', correct: false, correction: 'Non chef, certaines n\'affectent aucun locus sensible ni variant récessif pathogène.' },
      { text: 'Une isodisomie peut rendre homozygote un variant récessif porté par un seul parent', correct: true, correction: 'Oui boss 🧠 c\'est le risque particulier de dupliquer l\'homologue portant ce variant.' },
      { text: 'Les deux formes peuvent perturber un locus soumis à empreinte si la contribution parentale normalement active manque', correct: true, correction: 'Oui boss 🧠 le problème d\'empreinte dépend de l\'origine parentale au locus, pas seulement de l\'identité des homologues.' },
      { text: 'Une disomie maternelle éteint forcément tous les gènes du chromosome et une paternelle les exprime forcément tous en double', correct: false, correction: 'Non chef, l\'effet dépend du gène, du tissu et du parent normalement actif.' },
    ],
    explanation: 'Hétérodisomie et isodisomie diffèrent par l\'identité des homologues reçus ; leurs effets cliniques dépendent de l\'empreinte et des variants présents. (Cours, p. 24 à 27)'
  },
  {
    id: 41,
    type: 'QCM',
    question: 'Quel tableau évoque surtout le syndrome de Beckwith-Wiedemann chez un nouveau-né ?',
    options: [
      { text: 'Une cage thoracique étroite avec côtes en portemanteau.', correct: false, correction: 'Non : ce signe fait surtout penser à Kagami-Ogata.' },
      { text: 'Une croissance excessive avec macroglossie, parfois asymétrie corporelle et hypoglycémie néonatale.', correct: true, correction: 'Oui boss : cet ensemble reprend des signes classiques du spectre Beckwith-Wiedemann, sans exiger qu\'ils soient tous présents.' },
      { text: 'Une hypotonie majeure avec mauvaise succion puis, plus tard, hyperphagie.', correct: false, correction: 'Non : cette succession est typique de Prader-Willi.' },
      { text: 'Un déficit intellectuel sévère avec troubles de l\'équilibre et épilepsie, sans signe de surcroissance.', correct: false, correction: 'Non : on évoque plutôt Angelman.' },
      { text: 'Un retard de croissance anténatal avec macrocéphalie relative et difficultés alimentaires au premier plan.', correct: false, correction: 'Non chef : cela oriente davantage vers Silver-Russell.' },
    ],
    explanation: 'Beckwith-Wiedemann est un syndrome de surcroissance variable associant notamment macroglossie, croissance latéralisée et parfois hypoglycémie néonatale. (Cours, p. 39)'
  },
  {
    id: 42,
    type: 'QRM',
    question: 'Quelles propositions sur le syndrome de Beckwith-Wiedemann sont exactes ?',
    options: [
      { text: 'Tous les enfants ont exactement le même risque tumoral et le même protocole de dépistage, quel que soit le sous-type.', correct: false, correction: 'Non chef : le risque et les stratégies de surveillance dépendent du mécanisme et des recommandations suivies.' },
      { text: 'Une omphalocèle ou une viscéromégalie peuvent appartenir au tableau.', correct: true, correction: 'Oui : ce sont des manifestations possibles, pas des critères obligatoires chez chaque enfant.' },
      { text: 'La croissance reste nécessairement excessive et s\'accélère toute la vie adulte.', correct: false, correction: 'Non : l\'excès de croissance est surtout précoce ; sa trajectoire ultérieure est variable.' },
      { text: 'Le risque tumoral varie selon le mécanisme moléculaire sous-jacent.', correct: true, correction: 'Oui : tous les sous-types moléculaires n\'ont pas exactement le même risque.' },
      { text: 'Le risque de certaines tumeurs embryonnaires justifie d\'envisager une surveillance pédiatrique adaptée.', correct: true, correction: 'Oui boss : néphroblastome et hépatoblastome font partie des risques étudiés.' },
    ],
    explanation: 'Le cours décrit des signes de surcroissance et un risque tumoral infantile variable selon la cause moléculaire ; il ne faut pas transformer ses chiffres en règle universelle. (Cours, p. 39–40)'
  },
  {
    id: 43,
    type: 'QCM',
    question: 'Dans la région 11p15.5 normale, quelle association d\'empreinte et d\'expression est correcte ?',
    options: [
      { text: 'IC1 est méthylé du côté paternel, ce qui favorise l\'expression paternelle d\'IGF2.', correct: true, correction: 'Oui boss : l\'allèle maternel d\'IC1 est normalement non méthylé, avec expression de H19.' },
      { text: 'IC1 est normalement méthylé uniquement sur l\'allèle maternel, qui exprime IGF2.', correct: false, correction: 'Non chef : à IC1, le profil normal est inversé ; l\'IGF2 classique est paternel.' },
      { text: 'IC2 est normalement non méthylé sur l\'allèle maternel, ce qui éteint KCNQ1OT1.', correct: false, correction: 'Non : IC2 maternel est normalement méthylé, ce qui réprime KCNQ1OT1.' },
      { text: 'H19 et IGF2 sont toujours exprimés à parts égales par les deux allèles parentaux.', correct: false, correction: 'Non : leur expression est influencée par l\'empreinte d\'IC1.' },
      { text: 'CDKN1C n\'est exprimé que si les deux chromosomes 11 proviennent du père.', correct: false, correction: 'Non : CDKN1C est principalement exprimé depuis l\'allèle maternel.' },
    ],
    explanation: 'À 11p15.5, IC1 paternel est méthylé et favorise IGF2 ; IC1 maternel non méthylé favorise H19, tandis qu\'IC2 a un profil parental opposé. (Cours, p. 40)'
  },
  {
    id: 44,
    type: 'QRM',
    question: 'Quels mécanismes peuvent conduire à un syndrome de Beckwith-Wiedemann lié à 11p15.5 ?',
    options: [
      { text: 'Une perte de fonction de CDKN1C transmis par l\'allèle maternel.', correct: true, correction: 'Oui : elle diminue l\'effet d\'un frein de croissance normalement exprimé du côté maternel.' },
      { text: 'Une perte de méthylation d\'IC2 sur l\'allèle maternel.', correct: true, correction: 'Oui : elle peut réduire l\'expression maternelle de CDKN1C.' },
      { text: 'Un gain de méthylation d\'IC1 sur l\'allèle maternel.', correct: true, correction: 'Oui : c\'est l\'allèle normalement non méthylé ; le cours écrit par erreur « paternel » à cette ligne.' },
      { text: 'Un gain de méthylation d\'IC1 sur l\'allèle paternel, normalement dépourvu de méthylation.', correct: false, correction: 'Non chef : IC1 paternel est déjà normalement méthylé ; le gain pathogène de BWS concerne l\'allèle maternel.' },
      { text: 'Une disomie uniparentale paternelle de la région 11p15.5.', correct: true, correction: 'Oui boss : l\'excès de contribution paternelle peut dérégler les gènes de croissance.' },
    ],
    explanation: 'Les mécanismes comprennent IC2 maternel hypométhylé, IC1 maternel hyperméthylé, disomie paternelle et perte de fonction maternelle de CDKN1C ; la mention « IC1 paternel » du cours est une coquille. (Cours, p. 40)'
  },
  {
    id: 45,
    type: 'QCM',
    question: 'Quel portrait clinique correspond plutôt au syndrome de Silver-Russell ?',
    options: [
      { text: 'Une macrosomie avec macroglossie et omphalocèle au premier plan.', correct: false, correction: 'Non chef : ces signes évoquent plutôt Beckwith-Wiedemann.' },
      { text: 'Une brachydactylie isolée du quatrième métacarpien sans retard de croissance.', correct: false, correction: 'Non : cela renvoie à certains troubles liés à GNAS, pas au portrait typique Silver-Russell.' },
      { text: 'Une malformation costale en portemanteau qui définit à elle seule la maladie.', correct: false, correction: 'Non : cette image est surtout associée à Kagami-Ogata.' },
      { text: 'Une hyperphagie majeure dès la naissance après une croissance fœtale excessive.', correct: false, correction: 'Non : Prader-Willi débute plutôt par une hypotonie et des difficultés de succion ; Silver-Russell est un trouble de croissance insuffisante.' },
      { text: 'Un petit poids et une petite taille dès la vie fœtale, une macrocéphalie relative et des difficultés alimentaires.', correct: true, correction: 'Oui boss : la tête paraît grande par rapport au corps, sans devoir être anormalement volumineuse en valeur absolue.' },
    ],
    explanation: 'Silver-Russell associe souvent retard de croissance pré- et postnatal, macrocéphalie relative, front bombé et difficultés alimentaires, avec une variabilité individuelle. (Cours, p. 41)'
  },
  {
    id: 46,
    type: 'QRM',
    question: 'Quels mécanismes sont compatibles avec un syndrome de Silver-Russell ?',
    options: [
      { text: 'Une disomie uniparentale paternelle de 11p15.5 comme mécanisme majeur de Silver-Russell.', correct: false, correction: 'Non : la contribution paternelle excessive à ce locus oriente plutôt vers Beckwith-Wiedemann.' },
      { text: 'Dans de rares formes familiales, un gain de fonction de CDKN1C transmis par la mère.', correct: true, correction: 'Oui : renforcer un frein de croissance maternel peut contribuer au phénotype.' },
      { text: 'Une perte de méthylation d\'IC1 sur l\'allèle paternel de 11p15.5.', correct: true, correction: 'Oui : cela diminue l\'expression paternelle d\'IGF2 et favorise un défaut de croissance.' },
      { text: 'Une disomie uniparentale maternelle du chromosome 7.', correct: true, correction: 'Oui boss : un autre chromosome que le 11 peut produire ce phénotype.' },
      { text: 'Une perte de méthylation d\'IC2 maternel comme mécanisme habituel de Silver-Russell.', correct: false, correction: 'Non chef : ce mécanisme est surtout associé à Beckwith-Wiedemann.' },
    ],
    explanation: 'Silver-Russell peut résulter d\'une hypométhylation paternelle d\'IC1, d\'une disomie maternelle du chromosome 7 ou, plus rarement, d\'un variant de croissance transmis selon le parent. (Cours, p. 42)'
  },
  {
    id: 47,
    type: 'QCM',
    question: 'Pourquoi Beckwith-Wiedemann et Silver-Russell sont-ils parfois présentés comme des phénotypes « en miroir » ?',
    options: [
      { text: 'Le seul mécanisme de l\'un comme de l\'autre est une trisomie complète du chromosome 11.', correct: false, correction: 'Non : plusieurs anomalies épigénétiques, uniparentales ou géniques sont possibles.' },
      { text: 'Ils ont tous deux obligatoirement une mutation identique de l\'allèle paternel d\'UBE3A.', correct: false, correction: 'Non chef : UBE3A appartient à la région 15q liée à Angelman, pas à ce miroir 11p15.5.' },
      { text: 'Silver-Russell n\'implique jamais le chromosome 11, contrairement à Beckwith-Wiedemann.', correct: false, correction: 'Non : la région 11p15.5 peut intervenir dans les deux syndromes.' },
      { text: 'Des dérèglements de sens opposé des gènes de croissance de 11p15.5 peuvent favoriser surcroissance ou restriction de croissance.', correct: true, correction: 'Oui boss : le sens de l\'altération de l\'empreinte change l\'équilibre d\'expression de cette région.' },
      { text: 'Les deux se distinguent uniquement par le sexe de l\'enfant atteint.', correct: false, correction: 'Non : le mécanisme moléculaire et le phénotype de croissance sont en jeu, pas le sexe de l\'enfant.' },
    ],
    explanation: 'Le même domaine soumis à empreinte en 11p15.5 peut être associé à un excès ou à un défaut de croissance selon la contribution parentale et le gène touché. (Cours, p. 39–42)'
  },
  {
    id: 48,
    type: 'QRM',
    question: 'Quelles étapes de l\'évolution clinique du syndrome de Prader-Willi sont correctes ?',
    options: [
      { text: 'Une dysfonction hypothalamique peut s\'accompagner d\'atteintes hormonales.', correct: true, correction: 'Oui : le cours cite notamment hormone de croissance et hypogonadisme.' },
      { text: 'L\'hyperphagie intense est obligatoirement présente dès les premières heures de vie.', correct: false, correction: 'Non chef : le nouveau-né a plutôt des difficultés à s\'alimenter.' },
      { text: 'Le nourrisson présente souvent une hypotonie marquée et des difficultés de succion.', correct: true, correction: 'Oui : le début peut nécessiter une aide nutritionnelle.' },
      { text: 'Les signes observés pendant la grossesse sont constants et suffisent au diagnostic.', correct: false, correction: 'Non : les signes prénataux cités sont inconstants et peu spécifiques.' },
      { text: 'Plus tard, un défaut de satiété peut entraîner hyperphagie et prise de poids importante.', correct: true, correction: 'Oui boss : le tableau alimentaire change avec l\'âge.' },
    ],
    explanation: 'Prader-Willi évolue d\'une hypotonie avec difficultés alimentaires précoces vers un trouble de la satiété ; des atteintes endocriniennes sont possibles. (Cours, p. 43–45)'
  },
  {
    id: 49,
    type: 'QCM',
    question: 'Quelle perte d\'expression parentale définit le mécanisme général du syndrome de Prader-Willi ?',
    options: [
      { text: 'L\'absence isolée d\'UBE3A maternel dans les neurones.', correct: false, correction: 'Non chef : ce mécanisme central oriente vers Angelman.' },
      { text: 'La perte d\'expression paternelle de DLK1 sur 14q32 uniquement.', correct: false, correction: 'Non : ce domaine est associé notamment au syndrome de Temple.' },
      { text: 'Une perte de méthylation d\'IC2 maternel sur 11p15.5.', correct: false, correction: 'Non : ce mécanisme évoque plutôt Beckwith-Wiedemann.' },
      { text: 'Un excès d\'expression paternelle de PLAGL1 sur 6q24.', correct: false, correction: 'Non : cela est lié à une forme de diabète néonatal transitoire.' },
      { text: 'L\'absence d\'expression des gènes normalement actifs depuis l\'allèle paternel de 15q11.2-q13.', correct: true, correction: 'Oui boss : le problème commun est l\'absence de contribution fonctionnelle paternelle dans cette région.' },
    ],
    explanation: 'Prader-Willi résulte de l\'absence de l\'expression paternelle attendue dans la région 15q11.2-q13. (Cours, p. 45)'
  },
  {
    id: 50,
    type: 'QRM',
    question: 'Quels mécanismes peuvent produire l\'absence de contribution paternelle caractéristique de Prader-Willi ?',
    options: [
      { text: 'Un défaut du centre d\'empreinte donnant au chromosome paternel un profil maternel.', correct: true, correction: 'Oui : l\'allèle paternel peut être présent mais mal programmé.' },
      { text: 'Une variation perte de fonction d\'UBE3A maternel isolée comme mécanisme de Prader-Willi.', correct: false, correction: 'Non : UBE3A maternel concerne surtout Angelman.' },
      { text: 'Une délétion de la région critique sur le chromosome 15 paternel.', correct: true, correction: 'Oui : les gènes paternels normalement actifs sont alors absents.' },
      { text: 'Une disomie uniparentale maternelle du chromosome 15.', correct: true, correction: 'Oui boss : deux copies maternelles ne remplacent pas l\'expression paternelle attendue.' },
      { text: 'Une délétion maternelle de 15q11.2-q13 comme mécanisme habituel de Prader-Willi.', correct: false, correction: 'Non chef : une délétion maternelle de cette région oriente plutôt vers Angelman.' },
    ],
    explanation: 'Délétion paternelle, disomie maternelle et défaut du centre d\'empreinte convergent vers un profil 15q maternel seul dans Prader-Willi. (Cours, p. 45)'
  },
  {
    id: 51,
    type: 'QCM',
    question: 'Quel ensemble de signes évoque davantage le syndrome d\'Angelman que le syndrome de Prader-Willi ?',
    options: [
      { text: 'Une hypotonie néonatale avec difficultés de succion suivies d\'hyperphagie et d\'obésité.', correct: false, correction: 'Non chef : cette trajectoire évoque Prader-Willi.' },
      { text: 'Une résistance à la PTH associée à une brachydactylie de type E.', correct: false, correction: 'Non : on penserait plutôt à un trouble lié à GNAS.' },
      { text: 'Un trouble neurodéveloppemental sévère avec langage très limité, démarche instable et épilepsie possible.', correct: true, correction: 'Oui boss : ces signes sont typiques du tableau Angelman, avec une expression variable.' },
      { text: 'Une petite taille anténatale avec macrocéphalie relative et visage triangulaire.', correct: false, correction: 'Non : ce portrait correspond davantage à Silver-Russell.' },
      { text: 'Une croissance excessive avec macroglossie et omphalocèle.', correct: false, correction: 'Non : cela oriente vers Beckwith-Wiedemann.' },
    ],
    explanation: 'Angelman est un trouble neurodéveloppemental sévère avec langage très réduit, troubles de la marche/équilibre et parfois épilepsie ; sourire fréquent ne signifie pas maladie bénigne. (Cours, p. 45–46)'
  },
  {
    id: 52,
    type: 'QRM',
    question: 'Quels mécanismes peuvent provoquer un syndrome d\'Angelman par perte de la fonction maternelle d\'UBE3A dans les neurones ?',
    options: [
      { text: 'Une variation perte de fonction d\'UBE3A sur l\'allèle maternel.', correct: true, correction: 'Oui : c\'est un mécanisme d\'Angelman qui peut laisser l\'analyse de méthylation 15q normale.' },
      { text: 'Un défaut d\'empreinte qui donne au chromosome maternel un profil paternel.', correct: true, correction: 'Oui : l\'expression maternelle attendue peut être perdue.' },
      { text: 'Une variation d\'UBE3A sur le seul allèle paternel, qui est normalement le principal exprimé dans les neurones.', correct: false, correction: 'Non chef : l\'allèle maternel est le principal exprimé dans les neurones ; une variation paternelle isolée ne suit pas ce mécanisme.' },
      { text: 'Une disomie uniparentale paternelle du chromosome 15.', correct: true, correction: 'Oui boss : il manque alors l\'allèle maternel normalement actif dans les neurones.' },
      { text: 'Une délétion de la région critique sur le chromosome 15 maternel.', correct: true, correction: 'Oui : elle peut emporter l\'expression maternelle d\'UBE3A.' },
    ],
    explanation: 'La perte de fonction maternelle d\'UBE3A peut venir d\'une délétion, d\'une disomie paternelle, d\'un défaut d\'empreinte ou d\'un variant du gène ; ce dernier n\'implique pas nécessairement une méthylation anormale. (Cours, p. 46)'
  },
  {
    id: 53,
    type: 'QCM',
    question: 'Une délétion de la région 15q11.2-q13 peut conduire à deux syndromes différents. Qu\'est-ce qui oriente principalement le phénotype ?',
    options: [
      { text: 'Le sexe de l\'enfant, avec Prader-Willi chez les garçons et Angelman chez les filles.', correct: false, correction: 'Non : les deux syndromes peuvent toucher filles et garçons.' },
      { text: 'Uniquement la taille de la délétion, indépendamment du parent qui l\'a transmise.', correct: false, correction: 'Non chef : la taille compte parfois, mais l\'origine parentale est essentielle pour cette opposition.' },
      { text: 'La présence obligatoire d\'une disomie uniparentale en plus de chaque délétion.', correct: false, correction: 'Non : délétion et disomie sont des mécanismes alternatifs.' },
      { text: 'L\'origine parentale du chromosome délété : paternelle pour Prader-Willi, maternelle pour Angelman.', correct: true, correction: 'Oui boss : l\'empreinte rend les deux allèles non équivalents fonctionnellement.' },
      { text: 'Une mutation du seul chromosome 14 chez tous les enfants atteints.', correct: false, correction: 'Non : Prader-Willi et Angelman concernent ici la région 15q.' },
    ],
    explanation: 'Dans la région 15q11.2-q13, la perte paternelle évoque Prader-Willi et la perte maternelle Angelman : c\'est un exemple central d\'effet d\'origine parentale. (Cours, p. 45–46)'
  },
  {
    id: 54,
    type: 'QRM',
    question: 'À propos des syndromes de Temple et de Kagami-Ogata, quelles propositions sont exactes ?',
    options: [
      { text: 'Ils concernent tous deux la région soumise à empreinte 14q32.', correct: true, correction: 'Oui : ce sont deux expressions différentes d\'un déséquilibre du même domaine.' },
      { text: 'Les deux syndromes ont nécessairement le même tableau clinique, quelle que soit l\'origine parentale.', correct: false, correction: 'Non : les phénotypes de croissance et les malformations diffèrent.' },
      { text: 'Une disomie maternelle du chromosome 14 peut conduire à un syndrome de Temple.', correct: true, correction: 'Oui boss : la contribution maternelle domine alors le domaine 14q32.' },
      { text: 'Une disomie paternelle du chromosome 14 peut conduire à Kagami-Ogata.', correct: true, correction: 'Oui : c\'est le déséquilibre réciproque.' },
      { text: 'Une disomie paternelle 14 entraîne toujours le syndrome de Temple, et la maternelle Kagami-Ogata.', correct: false, correction: 'Non chef : les sens sont inversés.' },
    ],
    explanation: 'Temple est lié à une empreinte 14q32 de type maternel prédominant, tandis que Kagami-Ogata correspond à une empreinte paternelle prédominante. (Cours, p. 47)'
  },
  {
    id: 55,
    type: 'QCM',
    question: 'Quel parcours de croissance est décrit pour le syndrome de Temple ?',
    options: [
      { text: 'Des difficultés de croissance précoces rappelant Silver-Russell, puis parfois une tendance à la prise de poids rappelant Prader-Willi.', correct: true, correction: 'Oui boss : l\'évolution change avec l\'âge ; il ne s\'agit pas simplement d\'un Silver-Russell permanent.' },
      { text: 'Une absence de toute anomalie de croissance à tous les âges.', correct: false, correction: 'Non : le cours souligne au contraire une trajectoire de croissance particulière.' },
      { text: 'Une hyperglycémie néonatale isolée qui disparaît, sans autre particularité.', correct: false, correction: 'Non : cela rappelle plutôt le diabète néonatal transitoire lié à 6q24.' },
      { text: 'Une surcroissance permanente avec macroglossie et omphalocèle comme signes dominants.', correct: false, correction: 'Non chef : cela évoque plutôt Beckwith-Wiedemann.' },
      { text: 'Une cage thoracique très étroite avec côtes en portemanteau comme caractéristique de croissance majeure.', correct: false, correction: 'Non : ce signe est surtout celui de Kagami-Ogata.' },
    ],
    explanation: 'Temple peut débuter par un défaut de croissance de type Silver-Russell, puis évoluer vers une tendance à la prise de poids ou à l\'obésité. (Cours, p. 47)'
  },
  {
    id: 56,
    type: 'QRM',
    question: 'Quelles propositions décrivent le syndrome de Kagami-Ogata et sa différence avec Temple ?',
    options: [
      { text: 'Il est simplement le nom donné au syndrome de Temple à l\'âge adulte.', correct: false, correction: 'Non : ce sont deux maladies distinctes de l\'empreinte du chromosome 14.' },
      { text: 'Il résulte obligatoirement d\'une disomie maternelle du chromosome 7.', correct: false, correction: 'Non chef : la disomie maternelle 7 est associée à Silver-Russell, pas à Kagami-Ogata.' },
      { text: 'Des anomalies thoraciques et costales, dont les côtes dites en portemanteau, peuvent être observées.', correct: true, correction: 'Oui : c\'est un signe mis en avant par la figure du cours.' },
      { text: 'Une prédominance de la contribution paternelle de 14q32 est compatible avec son mécanisme.', correct: true, correction: 'Oui : disomie paternelle ou perte de contribution maternelle peuvent produire ce profil.' },
      { text: 'Son tableau peut être plus malformatif et son atteinte du développement plus marquée que dans Temple.', correct: true, correction: 'Oui boss : le cours insiste sur cette différence clinique.' },
    ],
    explanation: 'Kagami-Ogata correspond à un déséquilibre paternel de 14q32 et comporte notamment des anomalies costales et thoraciques, à l\'inverse de l\'évolution plus métabolique décrite pour Temple. (Cours, p. 47)'
  },
  {
    id: 57,
    type: 'QCM',
    question: 'Quelle région soumise à empreinte est associée à une forme de diabète néonatal transitoire ?',
    options: [
      { text: 'Le seul gène UBE3A maternel, par délétion conduisant à Angelman.', correct: false, correction: 'Non : Angelman est un trouble neurodéveloppemental distinct.' },
      { text: 'Le seul locus 20q13 GNAS, par résistance à la PTH.', correct: false, correction: 'Non : ce domaine est surtout cité pour les troubles de l\'inactivation de GNAS.' },
      { text: 'Le locus 14q32, par disomie paternelle caractéristique de Kagami-Ogata.', correct: false, correction: 'Non : ce mécanisme renvoie à Kagami-Ogata.' },
      { text: 'Le locus 15q11.2-q13, par perte d\'expression paternelle caractéristique de Prader-Willi.', correct: false, correction: 'Non chef : cette perte cause Prader-Willi, pas le diabète néonatal 6q24.' },
      { text: 'Le locus 6q24, dont l\'expression paternelle excessive peut être en cause.', correct: true, correction: 'Oui boss : le cours mentionne le chromosome 6 ; plus précisément, les anomalies 6q24 conduisent notamment à une surexpression de PLAGL1.' },
    ],
    explanation: 'Le support relie le diabète néonatal transitoire au chromosome 6 ; le locus causal classique est 6q24, avec surexpression paternelle de PLAGL1. (Cours, p. 48)'
  },
  {
    id: 58,
    type: 'QRM',
    question: 'Quelles manifestations peuvent appartenir au groupe des troubles liés au locus GNAS ?',
    options: [
      { text: 'Des ossifications hétérotopiques sous-cutanées dans certains phénotypes.', correct: true, correction: 'Oui : il ne faut pas les confondre avec une simple calcification passive due à la PTH.' },
      { text: 'Une brachydactylie de type E obligatoirement visible dès la naissance.', correct: false, correction: 'Non : elle peut devenir plus nette avec la croissance.' },
      { text: 'Exactement la même résistance hormonale et les mêmes signes osseux chez tous les porteurs d\'une anomalie GNAS.', correct: false, correction: 'Non chef : le locus donne plusieurs phénotypes selon le défaut et son origine parentale.' },
      { text: 'Une brachydactylie de type E avec raccourcissement de certains métacarpiens ou métatarsiens.', correct: true, correction: 'Oui boss : notamment les quatrième ou cinquième rayons selon le phénotype.' },
      { text: 'Une résistance à la parathormone dans certains sous-types.', correct: true, correction: 'Oui : c\'est le sens du terme pseudo-hypoparathyroïdie.' },
    ],
    explanation: 'Les troubles de GNAS peuvent associer, selon le sous-type, résistance à la PTH, brachydactylie et ossifications hétérotopiques ; aucun signe n\'est universel. (Cours, p. 48–49)'
  },
  {
    id: 59,
    type: 'QCM',
    question: 'Comment raisonner sur le risque familial d\'un syndrome d\'empreinte chez un enfant atteint ?',
    options: [
      { text: 'Il suffit d\'observer la taille de l\'enfant pour connaître le mode de transmission.', correct: false, correction: 'Non : un même phénotype peut venir de plusieurs mécanismes moléculaires.' },
      { text: 'Il est exactement nul pour tout enfant atteint d\'une anomalie de méthylation.', correct: false, correction: 'Non chef : certaines anomalies sont liées à un variant ou à un centre d\'empreinte transmissible.' },
      { text: 'Il dépend de la cause précise : beaucoup de cas sont sporadiques, mais un variant ou un remaniement transmissible peut créer un risque familial.', correct: true, correction: 'Oui boss : il faut caractériser le mécanisme avant de conseiller la famille.' },
      { text: 'Il dépend uniquement du sexe de l\'enfant malade et jamais du parent transmetteur.', correct: false, correction: 'Non : l\'origine parentale de l\'allèle transmis est essentielle.' },
      { text: 'Il est obligatoirement de 50 % pour chaque grossesse, quel que soit le mécanisme.', correct: false, correction: 'Non : délétion, disomie, épimutation et variant familial n\'ont pas le même conseil génétique.' },
    ],
    explanation: 'La plupart des cas sont sporadiques, mais des formes familiales existent ; le risque de récurrence et de transmission doit être déduit du mécanisme causal, et non d\'une règle unique. (Cours, p. 50)'
  },
  {
    id: 60,
    type: 'QRM',
    question: 'Pourquoi une anomalie du centre d\'empreinte peut-elle produire un tableau familial inhabituel ?',
    options: [
      { text: 'Un variant du centre d\'empreinte peut perturber la mise en place du profil parental attendu.', correct: true, correction: 'Oui boss : le chromosome transmis peut conserver ou acquérir une marque inadaptée.' },
      { text: 'Les marques d\'empreinte doivent normalement être effacées puis réétablies selon le sexe du parent qui produit les gamètes.', correct: true, correction: 'Oui : c\'est le principe du reparamétrage germinal.' },
      { text: 'L\'effet clinique d\'un même allèle peut changer selon qu\'il est transmis par le père ou par la mère.', correct: true, correction: 'Oui : c\'est justement la logique des arbres du cours.' },
      { text: 'Une anomalie du centre d\'empreinte équivaut toujours à une disomie uniparentale de tout le chromosome.', correct: false, correction: 'Non : l\'allèle peut être présent en deux origines normales, mais mal méthylé.' },
      { text: 'Le profil d\'empreinte hérité de ses propres parents reste toujours inchangé dans tous les gamètes, même sans anomalie.', correct: false, correction: 'Non chef : la reprogrammation selon le sexe du parent est normalement indispensable.' },
    ],
    explanation: 'Le centre d\'empreinte participe à l\'établissement des marques parentales ; un défaut transmissible peut faire varier l\'expression et le phénotype selon le parent transmetteur. (Cours, p. 50–51)'
  },
  {
    id: 61,
    type: 'QCM',
    question: 'Dans l\'exemple familial du cours, un homme transmet un chromosome 15 dont le centre d\'empreinte défectueux conserve un profil « maternel ». Quel syndrome peut apparaître chez l\'enfant qui reçoit cet allèle ?',
    options: [
      { text: 'Beckwith-Wiedemann, car un profil maternel de 15q provoque toujours une surcroissance.', correct: false, correction: 'Non : Beckwith-Wiedemann concerne surtout 11p15.5.' },
      { text: 'Temple, parce que toute anomalie d\'empreinte du chromosome 15 touche le chromosome 14.', correct: false, correction: 'Non : Temple concerne la région 14q32.' },
      { text: 'Prader-Willi, faute d\'expression paternelle attendue dans la région 15q11.2-q13.', correct: true, correction: 'Oui boss : un chromosome paternel au profil maternel ne fournit pas la contribution paternelle fonctionnelle requise.' },
      { text: 'Aucun syndrome possible puisque le chromosome transmis vient physiquement du père.', correct: false, correction: 'Non : c\'est son empreinte fonctionnelle, et pas seulement son origine physique, qui compte.' },
      { text: 'Angelman, car l\'enfant perd forcément les deux copies paternelles d\'UBE3A.', correct: false, correction: 'Non chef : ici le défaut est celui de l\'expression paternelle attendue, ce qui oriente vers Prader-Willi.' },
    ],
    explanation: 'Un défaut de reprogrammation peut donner à l\'allèle transmis par le père un profil maternel, aboutissant à l\'absence d\'expression paternelle et à Prader-Willi. (Cours, p. 50–51)'
  },
  {
    id: 62,
    type: 'QRM',
    question: 'Dans l\'exemple de délétion 14q32 du cours, quelles propositions montrent l\'effet du parent transmetteur ?',
    options: [
      { text: 'L\'origine parentale d\'une délétion d\'un domaine soumis à empreinte peut modifier le syndrome observé.', correct: true, correction: 'Oui : un même segment absent peut avoir des conséquences distinctes selon l\'allèle perdu.' },
      { text: 'Le sexe de l\'enfant suffit à déterminer Temple ou Kagami-Ogata, indépendamment du chromosome transmis.', correct: false, correction: 'Non : l\'origine parentale du chromosome atteint prime, pas le sexe de l\'enfant.' },
      { text: 'Une délétion 14q32 produit toujours exactement le même phénotype, qu\'elle vienne du père ou de la mère.', correct: false, correction: 'Non chef : les exemples Temple et Kagami-Ogata illustrent précisément l\'inverse.' },
      { text: 'La même délétion transmise ensuite par cette femme peut priver son enfant de contribution maternelle et produire Kagami-Ogata.', correct: true, correction: 'Oui boss : le chromosome transmis est devenu l\'allèle d\'origine maternelle de l\'enfant.' },
      { text: 'La perte de la contribution paternelle peut produire un syndrome de Temple.', correct: true, correction: 'Oui : c\'est le phénotype de la femme décrite avec une délétion sur son allèle paternel.' },
    ],
    explanation: 'Dans l\'arbre présenté, une délétion 14q32 d\'origine paternelle cause Temple chez la mère, puis sa transmission comme délétion maternelle peut causer Kagami-Ogata chez l\'enfant. (Cours, p. 52)'
  },
  {
    id: 63,
    type: 'QCM',
    question: 'Que signifie « trouble de l\'empreinte multilocus » (MLID) ?',
    options: [
      { text: 'Une perturbation de méthylation touchant plusieurs loci soumis à empreinte, sans exiger que tous les loci du génome soient atteints.', correct: true, correction: 'Oui boss : « multi » veut dire plusieurs, pas « tous ».' },
      { text: 'Une anomalie limitée à un seul locus soumis à empreinte, par définition.', correct: false, correction: 'Non chef : une atteinte unique est précisément l\'alternative au MLID.' },
      { text: 'Une disomie uniparentale obligatoire de tous les chromosomes.', correct: false, correction: 'Non : ce n\'est ni la définition ni le mécanisme universel du MLID.' },
      { text: 'Une absence complète de méthylation sur l\'ensemble des chromosomes dans chaque cellule.', correct: false, correction: 'Non : le MLID concerne plusieurs domaines imprimés, pas toute la méthylation génomique.' },
      { text: 'L\'addition de variants de faible effet sans anomalie d\'empreinte, comme dans une prédisposition multifactorielle.', correct: false, correction: 'Non : l\'hérédité multifactorielle décrite ensuite est différente d\'un trouble de méthylation à plusieurs loci imprimés.' },
    ],
    explanation: 'Le support décrit plusieurs loci atteints, mais sa formule « l\'ensemble des loci » est excessive : une altération à plusieurs loci suffit à parler de MLID. (Cours, p. 53)'
  },
  {
    id: 64,
    type: 'QRM',
    question: 'Quelles affirmations sur les troubles de l\'empreinte multilocus (MLID) sont exactes ?',
    options: [
      { text: 'Le diagnostic exige que tous les loci soumis à empreinte, connus ou inconnus, soient anormaux.', correct: false, correction: 'Non chef : plusieurs loci suffisent ; la phrase du cours « l\'ensemble » est trop absolue.' },
      { text: 'Une analyse ciblant un seul locus peut manquer les autres anomalies de méthylation.', correct: true, correction: 'Oui : une recherche multilocus est nécessaire pour mettre en évidence cette extension.' },
      { text: 'Des variants de gènes intervenant dans l\'établissement ou le maintien des marques d\'empreinte peuvent être en cause.', correct: true, correction: 'Oui boss : certains gènes d\'effet maternel ou trans-régulateurs en sont des exemples, sans expliquer tous les cas.' },
      { text: 'Le tableau clinique peut être atypique ou associer des traits de plusieurs syndromes d\'empreinte.', correct: true, correction: 'Oui : les loci atteints et le degré de mosaïque peuvent varier.' },
      { text: 'Chaque MLID provient obligatoirement du même variant génétique chez l\'enfant, avec un risque familial identique.', correct: false, correction: 'Non : les causes et les risques de récurrence varient ; il faut caractériser le mécanisme.' },
    ],
    explanation: 'Un MLID peut modifier plusieurs domaines imprimés et produire un phénotype variable ; ses causes comprennent certains défauts de mise en place ou de maintien des marques, sans mécanisme unique. (Cours, p. 53)'
  },
  {
    id: 65,
    type: 'QCM',
    question: 'Quel modèle explique le mieux une maladie multifactorielle dans ce cours ?',
    options: [
      { text: 'Un variant pathogène unique qui impose toujours la maladie, quel que soit le contexte', correct: false, correction: 'Non chef : cela décrit mal le modèle multifactoriel et confond prédisposition avec certitude.' },
      { text: 'Une atteinte due uniquement au milieu, sans possibilité de susceptibilité génétique', correct: false, correction: 'Non : le modèle multifactoriel inclut précisément une part génétique, d’importance variable.' },
      { text: 'L’effet conjoint de plusieurs facteurs génétiques de susceptibilité et de facteurs environnementaux', correct: true, correction: 'Oui boss 🧠 Les contributions génétiques et environnementales se combinent, avec une importance variable selon la maladie et la personne.' },
      { text: 'Une transmission exclusivement par l’ADN mitochondrial maternel', correct: false, correction: 'Non : l’hérédité mitochondriale est un autre modèle étudié dans le cours.' },
      { text: 'Une maladie qui ne peut jamais se regrouper dans une famille', correct: false, correction: 'Faux : une agrégation familiale peut justement faire suspecter une composante génétique complexe.' },
    ],
    explanation: 'Le cours définit la maladie multifactorielle par une susceptibilité génétique distribuée et des facteurs environnementaux. L’effet d’un facteur isolé ne permet généralement pas de prédire à lui seul le phénotype. (Cours, p. 53)'
  },
  {
    id: 66,
    type: 'QRM',
    question: 'À propos de la susceptibilité dans une maladie multifactorielle, quelles propositions sont exactes ?',
    options: [
      { text: 'Les facteurs environnementaux incluent au sens large les expositions, les habitudes et le milieu de vie', correct: true, correction: 'Exact : le cours emploie « environnement » dans un sens large.' },
      { text: 'Le risque de chaque enfant d’une personne atteinte est nécessairement de 25 %', correct: false, correction: 'Faux : ce pourcentage correspond à certains croisements mendéliens, pas à une règle du modèle multifactoriel.' },
      { text: 'La présence d’un seul allèle de susceptibilité établit toujours le diagnostic', correct: false, correction: 'Non chef : un facteur de risque n’est ni nécessaire ni suffisant dans toutes les situations.' },
      { text: 'La part génétique peut différer selon les maladies et entre personnes ayant la même maladie', correct: true, correction: 'Oui boss : la susceptibilité n’a pas la même importance dans toutes les situations.' },
      { text: 'Plusieurs variants à effet faible peuvent contribuer ensemble au risque', correct: true, correction: 'Exact 🧠 L’addition de contributions modestes est une base du modèle polygénique présenté.' },
    ],
    explanation: 'La susceptibilité génétique est variable et s’ajoute aux effets du milieu. Il faut distinguer ce modèle des rapports de ségrégation mendéliens simples. (Cours, p. 53)'
  },
  {
    id: 67,
    type: 'QCM',
    question: 'Une famille porte un variant pathogène de MC4R responsable d’une forme monogénique d’obésité, mais tous les porteurs ne sont pas obèses. Quel concept illustre surtout cette observation ?',
    options: [
      { text: 'Une disomie uniparentale démontrée par le seul poids des membres de la famille', correct: false, correction: 'Faux : un phénotype familial ne démontre pas une disomie uniparentale.' },
      { text: 'Une pénétrance obligatoirement complète de tous les variants MC4R', correct: false, correction: 'Non chef : l’observation est incompatible avec une pénétrance complète dans cette famille.' },
      { text: 'La pénétrance incomplète du variant', correct: true, correction: 'Oui boss 🎯 Un porteur peut ne pas présenter le phénotype ; l’effet dépend du variant et du contexte.' },
      { text: 'Une transmission exclusivement mitochondriale', correct: false, correction: 'Non : MC4R est un gène nucléaire et l’exemple ne relève pas de l’ADN mitochondrial.' },
      { text: 'L’absence de contribution génétique à l’obésité', correct: false, correction: 'Non chef : le variant peut augmenter le risque même si tous les porteurs ne sont pas atteints.' },
    ],
    explanation: 'Le cours place les formes liées à MC4R sur un continuum, incluant des variants à pénétrance incomplète. La présence d’un variant ne justifie pas une prédiction absolue de l’obésité. (Cours, p. 54)'
  },
  {
    id: 68,
    type: 'QRM',
    question: 'Concernant les différentes formes d’obésité présentées dans le cours, quelles propositions sont justes ?',
    options: [
      { text: 'Certains variants de MC4R peuvent être associés à une obésité monogénique avec transmission dominante', correct: true, correction: 'Exact : l’effet du variant et sa pénétrance doivent néanmoins être appréciés.' },
      { text: 'Des formes monogéniques récessives peuvent impliquer LEP, LEPR ou POMC', correct: true, correction: 'Oui 🧠 Le cours cite ces trois gènes dans la voie leptine–mélanocortine.' },
      { text: 'Une forme polygénique se reconnaît à une transmission fixe d’un enfant sur deux', correct: false, correction: 'Faux : le risque polygénique ne se déduit pas d’un rapport mendélien 1/2.' },
      { text: 'La plupart des situations d’obésité relèvent d’une susceptibilité polygénique influencée par l’environnement', correct: true, correction: 'Oui boss : le cours présente ces situations comme les plus fréquentes.' },
      { text: 'Tous les porteurs d’un variant de MC4R développeront nécessairement la même obésité', correct: false, correction: 'Non chef : la pénétrance et l’expression peuvent varier selon le variant et la personne.' },
    ],
    explanation: 'L’obésité illustre le passage de formes à fort effet génétique à des formes polygéniques. La phrase déterministe du support sur les variants monogéniques est trop générale : la pénétrance peut être variable. (Cours, p. 54)'
  },
  {
    id: 69,
    type: 'QCM',
    question: 'Plusieurs membres d’une famille ont la même maladie, sans schéma mendélien évident. Quelle conclusion est la plus solide ?',
    options: [
      { text: 'Cette agrégation familiale est compatible avec une susceptibilité génétique complexe, sans en prouver à elle seule le mécanisme', correct: true, correction: 'Oui boss 🧠 Des gènes et un environnement partagé peuvent tous deux contribuer à la ressemblance familiale.' },
      { text: 'Chaque apparenté du premier degré a exactement 50 % de risque d’être malade', correct: false, correction: 'Non : ce chiffre ne découle pas de la seule agrégation familiale.' },
      { text: 'L’agrégation prouve qu’aucun facteur environnemental n’intervient', correct: false, correction: 'Faux : les membres d’une famille partagent aussi une partie de leur environnement.' },
      { text: 'La maladie est obligatoirement autosomique dominante à pénétrance complète', correct: false, correction: 'Non chef : plusieurs cas familiaux ne suffisent pas à établir ce mode de transmission.' },
      { text: 'Le risque familial est forcément identique à la fréquence de la maladie dans la population générale', correct: false, correction: 'Faux : le cours présente justement une fréquence parfois plus élevée chez les apparentés.' },
    ],
    explanation: 'Une fréquence accrue chez les apparentés oriente vers une contribution familiale, mais ne permet pas de séparer sans autre étude les facteurs génétiques du milieu partagé. (Cours, p. 54–55, 57)'
  },
  {
    id: 70,
    type: 'QRM',
    question: 'Que peut-on conclure d’une concordance plus élevée chez des jumeaux monozygotes que chez des dizygotes pour une maladie complexe ?',
    options: [
      { text: 'Elle démontre qu’un seul gène suffit à expliquer tous les cas', correct: false, correction: 'Non chef : ce résultat ne distingue pas à lui seul un gène unique d’une susceptibilité polygénique.' },
      { text: 'Elle doit être interprétée en tenant compte du milieu partagé et des limites de l’étude', correct: true, correction: 'Exact 🧠 Les jumeaux peuvent aussi partager des expositions, y compris avant la naissance.' },
      { text: 'Elle soutient l’existence d’une contribution génétique au risque', correct: true, correction: 'Oui boss : les monozygotes partagent davantage de variants et une concordance supérieure peut signaler un effet génétique.' },
      { text: 'Si la concordance monozygote est inférieure à 100 %, des influences non génétiques ou stochastiques restent possibles', correct: true, correction: 'Oui : une identité génétique ne garantit pas forcément une identité de phénotype.' },
      { text: 'Les taux de concordance chiffrés du cours s’appliquent à toutes les maladies complexes', correct: false, correction: 'Faux : la concordance dépend de la maladie, de la population et de la méthode d’étude.' },
    ],
    explanation: 'La comparaison monozygotes/dizygotes apporte un argument génétique, avec une interprétation prudente à cause du milieu partagé. Les pourcentages du support ne sont pas des constantes universelles. (Cours, p. 55)'
  },
  {
    id: 71,
    type: 'QCM',
    question: 'Dans l’exemple illustratif du cours, le risque pour un apparenté est de 3 % et la fréquence en population générale de 0,1 %. Quel est leur rapport ?',
    options: [
      { text: '30', correct: true, correction: 'Oui boss 🎯 On calcule 3 % ÷ 0,1 % = 30 ; ce rapport ne transforme pas 3 % en 30 %.' },
      { text: '3', correct: false, correction: 'Non : il faut diviser 3 par 0,1, soit 30.' },
      { text: '10', correct: false, correction: 'Non chef : un rapport de 10 correspondrait par exemple à 1 % comparé à 0,1 %.' },
      { text: '300', correct: false, correction: 'Faux : 3 ÷ 0,1 = 30, pas 300.' },
      { text: '0,03', correct: false, correction: 'Faux : 0,03 est la valeur décimale de 3 %, pas le rapport des deux pourcentages.' },
    ],
    explanation: 'Le tableau du cours illustre le rapport entre fréquence familiale et fréquence générale avec la fente labiale. Les valeurs 3 % et 0,1 % sont utilisées ici seulement pour exercer le calcul ; elles ne sont pas des estimations universelles pour le conseil individuel. (Cours, p. 54–55)'
  },
  {
    id: 72,
    type: 'QRM',
    question: 'À propos du rapport entre risque familial et fréquence dans la population générale, quelles propositions sont exactes ?',
    options: [
      { text: 'Un rapport de 30 veut dire que chaque apparenté a 30 % de probabilité de maladie', correct: false, correction: 'Non chef : 30 est un rapport sans unité ; le risque absolu de l’exemple reste 3 %.' },
      { text: 'Ce rapport identifie à lui seul le variant causal exact chez chaque membre de la famille', correct: false, correction: 'Faux : un rapport épidémiologique ne caractérise pas un variant individuel.' },
      { text: 'Une fréquence familiale élevée peut refléter en partie un milieu familial commun', correct: true, correction: 'Oui 🧠 L’agrégation n’isole pas automatiquement la part strictement génétique.' },
      { text: 'Le rapport dépend aussi de la fréquence de référence choisie dans la population', correct: true, correction: 'Exact : changer la population ou la période de référence peut changer le résultat.' },
      { text: 'Un rapport de 30 peut coexister avec un risque absolu de 3 % si la fréquence générale est de 0,1 %', correct: true, correction: 'Oui boss : un risque relatif élevé n’implique pas nécessairement un risque absolu élevé.' },
    ],
    explanation: 'Le rapport familial/population est une mesure relative, différente de la probabilité absolue et insuffisante pour attribuer l’agrégation à un gène précis. Les chiffres du support sont des exemples, non des probabilités générales contemporaines. (Cours, p. 55, 57)'
  },
  {
    id: 73,
    type: 'QCM',
    question: 'Dans le modèle à seuil de susceptibilité d’une maladie multifactorielle, quand le phénotype apparaît-il ?',
    options: [
      { text: 'Uniquement après une disomie uniparentale', correct: false, correction: 'Faux : la disomie uniparentale relève d’un autre mécanisme étudié dans le support.' },
      { text: 'Seulement si les deux copies de chaque gène de susceptibilité sont mutées', correct: false, correction: 'Faux : le modèle ne se réduit pas à une homozygotie de tous les loci.' },
      { text: 'Dès qu’un facteur de risque quelconque est présent, quelle que soit sa force', correct: false, correction: 'Non chef : un facteur isolé peut être insuffisant.' },
      { text: 'Lorsque l’effet cumulé des facteurs de risque dépasse un seuil', correct: true, correction: 'Oui boss 🧠 Des contributions génétiques et environnementales peuvent ensemble franchir un seuil de manifestation.' },
      { text: 'Toujours exactement à la naissance, sans influence ultérieure du milieu', correct: false, correction: 'Non : le moment de manifestation dépend de la maladie et des expositions.' },
    ],
    explanation: 'Le seuil représente une charge globale de susceptibilité ; les contributions génétiques et environnementales peuvent s’additionner jusqu’à rendre le phénotype manifeste. (Cours, p. 55)'
  },
  {
    id: 74,
    type: 'QRM',
    question: 'À propos des anomalies de fermeture du tube neural et de l’acide folique, quelles propositions sont justes ?',
    options: [
      { text: 'L’acide folique pris seulement après la fermeture du tube neural corrige systématiquement une malformation déjà formée', correct: false, correction: 'Non chef : la prévention doit commencer assez tôt ; elle ne répare pas systématiquement une anomalie constituée.' },
      { text: 'La période avant la conception et le début de grossesse sont importantes pour la prévention', correct: true, correction: 'Oui boss : la fermeture du tube neural intervient très tôt, parfois avant la découverte de la grossesse.' },
      { text: 'Des facteurs génétiques et d’autres facteurs du milieu peuvent aussi contribuer au risque', correct: true, correction: 'Oui : c’est l’exemple multifactoriel choisi par le cours.' },
      { text: 'Une supplémentation prouve qu’aucun enfant ne pourra présenter de spina bifida', correct: false, correction: 'Faux : une réduction du risque n’est pas une garantie de risque nul.' },
      { text: 'Un apport adapté en acide folique réduit le risque de ces anomalies sans l’annuler complètement', correct: true, correction: 'Exact 🧠 La prévention diminue le risque, mais d’autres facteurs peuvent rester présents.' },
    ],
    explanation: 'Le cours utilise les anomalies du tube neural pour illustrer le modèle à seuil : l’acide folique est une mesure de prévention, mais ne suffit pas à supprimer tous les risques. Le calendrier préconceptionnel est confirmé par le CDC. (Cours, p. 55 ; CDC, Neural Tube Defects)'
  },
  {
    id: 75,
    type: 'QCM',
    question: 'Sur quoi repose principalement l’estimation du risque de récurrence d’une maladie multifactorielle dans une famille ?',
    options: [
      { text: 'Sur l’identification obligatoirement préalable d’un variant pathogène unique', correct: false, correction: 'Faux : les estimations empiriques restent utiles même sans variant unique responsable.' },
      { text: 'Sur une règle universelle de 1/2 pour chaque enfant de toute personne atteinte', correct: false, correction: 'Faux : cela reprendrait un schéma mendélien dominant qui ne s’applique pas automatiquement ici.' },
      { text: 'Des données épidémiologiques adaptées à la maladie, à la famille et à la population étudiée', correct: true, correction: 'Oui boss 🎯 Les estimations empiriques sont plus pertinentes qu’un unique rapport de ségrégation.' },
      { text: 'Sur une règle universelle de 1/4, quel que soit le phénotype', correct: false, correction: 'Non chef : 1/4 est un rapport possible pour une maladie autosomique récessive, pas pour toutes les maladies complexes.' },
      { text: 'Sur le seul nombre de garçons et de filles dans la fratrie', correct: false, correction: 'Non : la composition sexuée de la fratrie ne suffit pas à calculer ce risque.' },
    ],
    explanation: 'Le cours recommande des risques de récurrence empiriques tirés de l’épidémiologie pour les affections multifactorielles. Ils doivent être contextualisés, plutôt que remplacés par une proportion mendélienne fixe. (Cours, p. 56)'
  },
  {
    id: 76,
    type: 'QRM',
    question: 'Le continuum entre maladies monogéniques et polygéniques comprend quelles situations ?',
    options: [
      { text: 'Une maladie résultant de nombreuses petites susceptibilités réparties dans le génome', correct: true, correction: 'Oui boss : c’est l’extrémité polygénique décrite dans le tableau.' },
      { text: 'Une séparation absolue : aucune maladie monogénique n’est influencée par d’autres gènes', correct: false, correction: 'Non chef : cette affirmation contredit le rôle des modificateurs.' },
      { text: 'Une maladie polygénique dans laquelle un gène a un effet particulièrement important', correct: true, correction: 'Exact : un gène majeur peut coexister avec plusieurs autres contributions.' },
      { text: 'Une maladie due principalement à un gène, dont l’expression est modifiée par d’autres gènes', correct: true, correction: 'Oui 🧠 Les gènes modificateurs peuvent changer le phénotype d’une maladie monogénique.' },
      { text: 'La preuve qu’une maladie polygénique est toujours transmise par le même parent', correct: false, correction: 'Faux : le caractère polygénique ne définit pas une origine parentale unique.' },
    ],
    explanation: 'Le tableau du cours va du gène unique prédominant aux nombreuses petites contributions, en passant par les gènes modificateurs et les gènes majeurs de susceptibilité. (Cours, p. 56–57)'
  },
  {
    id: 77,
    type: 'QCM',
    question: 'Un variant de NOD2 est trouvé chez une personne saine. Quelle interprétation est correcte pour la maladie de Crohn ?',
    options: [
      { text: 'La présence du variant exclut tout rôle des facteurs environnementaux', correct: false, correction: 'Faux : la maladie de Crohn est complexe et le milieu peut aussi jouer un rôle.' },
      { text: 'Certains variants de NOD2 augmentent la susceptibilité, sans suffire à prédire que cette personne sera malade', correct: true, correction: 'Oui boss 🧠 Un variant de prédisposition peut être présent chez une personne qui ne développe jamais la maladie.' },
      { text: 'Tous les porteurs d’un variant NOD2 auront la maladie avant l’âge adulte', correct: false, correction: 'Faux : le risque n’est pas une certitude.' },
      { text: 'Le résultat démontre une transmission exclusivement maternelle', correct: false, correction: 'Non : NOD2 est un gène nucléaire et cet exemple n’est pas mitochondrial.' },
      { text: 'La maladie de Crohn est déjà diagnostiquée par ce seul résultat', correct: false, correction: 'Non chef : le diagnostic repose sur la clinique et les examens adaptés, pas sur ce seul variant.' },
    ],
    explanation: 'Le cours cite NOD2 comme facteur de susceptibilité à la maladie de Crohn, trouvé aussi chez des personnes saines. Les estimations chiffrées de fréquence varient selon les variants et les populations ; elles ne doivent pas être extrapolées à un individu. (Cours, p. 57)'
  },
  {
    id: 78,
    type: 'QRM',
    question: 'Concernant APOE et le risque de maladie d’Alzheimer, quelles propositions sont exactes ?',
    options: [
      { text: 'Deux copies d’APOE ε4 sont en général associées à un risque plus élevé qu’une seule', correct: true, correction: 'Exact 🧠 L’effet dépend néanmoins du contexte et les estimations varient selon les populations.' },
      { text: 'La présence d’APOE ε4 équivaut au diagnostic clinique de maladie d’Alzheimer', correct: false, correction: 'Non chef : le génotype de risque et le diagnostic de maladie sont deux choses distinctes.' },
      { text: 'L’estimation individuelle dépend du contexte, notamment de l’âge et de la population étudiée', correct: true, correction: 'Exact : un même rapport de risque n’est pas une probabilité individuelle universelle.' },
      { text: 'APOE ε4 est un allèle de susceptibilité, pas une preuve que la maladie surviendra', correct: true, correction: 'Oui boss : des porteurs d’ε4 ne développent pas la maladie.' },
      { text: 'APOE ε2 peut être associé à un effet relativement protecteur', correct: true, correction: 'Oui : le cours le situe du côté d’un risque plus faible, sans protection absolue.' },
    ],
    explanation: 'Le cours oppose APOE ε2, ε3 et ε4. L’ε4 augmente le risque sans rendre la maladie certaine ; les rapports numériques du support ne sont pas universels et varient selon le contexte. (Cours, p. 58 ; NIA, Alzheimer’s Disease Genetics Fact Sheet)'
  },
  {
    id: 79,
    type: 'QCM',
    question: 'Une personne asymptomatique est HLA-B27 positive. Quelle interprétation est la plus juste ?',
    options: [
      { text: 'Cette personne a nécessairement une spondylarthrite ankylosante', correct: false, correction: 'Non chef : HLA-B27 existe chez des personnes sans spondylarthrite.' },
      { text: 'Un résultat HLA-B27 négatif exclurait toute spondylarthrite ankylosante', correct: false, correction: 'Faux : la maladie existe aussi chez des personnes HLA-B27 négatives.' },
      { text: 'Le résultat prouve une transmission de l’ADN mitochondrial par le père', correct: false, correction: 'Faux : le système HLA relève du génome nucléaire et non de l’ADN mitochondrial.' },
      { text: 'HLA-B27 peut accroître la susceptibilité à la spondylarthrite ankylosante, mais la plupart des porteurs ne développeront pas la maladie', correct: true, correction: 'Oui boss 🎯 L’association est forte, sans être un diagnostic ni une prédiction certaine.' },
      { text: 'Le résultat démontre une anomalie de l’empreinte parentale', correct: false, correction: 'Non : une association HLA ne démontre pas un trouble de méthylation ou d’empreinte.' },
    ],
    explanation: 'L’association entre HLA-B27 et spondylarthrite ankylosante illustre un facteur de susceptibilité puissant mais non déterministe. Le risque chiffré du support varie avec la population et ne suffit pas à poser un diagnostic. (Cours, p. 58 ; MedlinePlus Genetics, Ankylosing spondylitis)'
  },
  {
    id: 80,
    type: 'QRM',
    question: 'Pour expliquer à une famille le risque d’une affection complexe, quelles formulations sont rigoureuses ?',
    options: [
      { text: 'Un facteur protecteur peut réduire un risque sans le rendre nécessairement nul', correct: true, correction: 'Oui : l’acide folique pour les anomalies du tube neural en est un exemple dans le cours.' },
      { text: 'Plusieurs facteurs génétiques et environnementaux peuvent contribuer au phénotype d’une même personne', correct: true, correction: 'Oui boss 🧠 Le modèle complexe combine des contributions plutôt qu’un seul déterminant certain.' },
      { text: 'Une agrégation familiale peut augmenter l’estimation de risque sans imposer une transmission mendélienne simple', correct: true, correction: 'Exact : l’histoire familiale informe le risque, mais ne démontre pas seule un modèle dominant ou récessif.' },
      { text: 'Un allèle de prédisposition comme APOE ε4 permet d’annoncer avec certitude si et quand la maladie surviendra', correct: false, correction: 'Non chef : une susceptibilité ne fixe ni l’apparition ni la date de la maladie chez un individu.' },
      { text: 'Le risque de récurrence est toujours exactement de 50 % dès qu’un parent est atteint', correct: false, correction: 'Faux : le conseil génétique d’une affection multifactorielle s’appuie sur des données adaptées au contexte.' },
    ],
    explanation: 'La synthèse du cours associe susceptibilité, milieu, histoire familiale, prévention et risque empirique. Aucun de ces éléments isolés ne justifie une certitude individuelle de maladie. (Cours, p. 53–58)'
  },
]
