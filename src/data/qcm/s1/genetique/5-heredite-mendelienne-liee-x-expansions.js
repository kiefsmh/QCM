export const meta = {
  title: 'Hérédité mendélienne liée à l’X et maladies par expansion',
}

export default [
  {
    id: 1,
    type: 'QCM',
    question: 'Pour un gène du chromosome X situé hors des régions pseudo-autosomiques, pourquoi un homme de caryotype XY est-il qualifié d’hémizygote ?',
    options: [
      { text: 'Il possède deux allèles identiques de ce gène sur ses deux chromosomes X', correct: false, correction: 'Non chef. Un homme XY n’a qu’un chromosome X.' },
      { text: 'Son chromosome Y porte nécessairement une seconde copie normale du même gène', correct: false, correction: 'Non. La question concerne un locus de l’X hors des régions pseudo-autosomiques.' },
      { text: 'Il a inactivé ses deux chromosomes X pendant le développement', correct: false, correction: 'Non chef. Il ne possède pas deux X dans ce caryotype.' },
      { text: 'Il ne possède qu’une seule copie de ce gène lié à l’X', correct: true, correction: 'Oui boss 🧠 Une seule copie : on parle d’hémizygotie, pas d’homozygotie ou d’hétérozygotie.' },
      { text: 'Il possède obligatoirement deux allèles différents de ce gène', correct: false, correction: 'Faux. Deux allèles différents définiraient une hétérozygotie, ce qui n’est pas ce cas.' },
    ],
    explanation: 'Un individu XY est hémizygote pour les gènes de l’X ne possédant pas de copie correspondante sur l’Y. Un variant récessif peut donc s’exprimer sans second allèle normal à ce locus. (Cours, p. 3)'
  },
  {
    id: 2,
    type: 'QRM',
    question: 'Dans un couple femme XX–homme XY, pour un locus lié à l’X hors des régions pseudo-autosomiques, quelles règles de transmission sont exactes ?',
    options: [
      { text: 'Il n’y a pas de transmission directe père-fils du variant situé sur cet X paternel', correct: true, correction: 'Oui. Le père donne son Y à son fils, pas son X.' },
      { text: 'Le père transmet son chromosome X à ses filles', correct: true, correction: 'Oui boss 🧠 L’X paternel est reçu par les filles dans ce modèle.' },
      { text: 'Le père transmet son chromosome Y à ses fils', correct: true, correction: 'Exact. Le fils reçoit son X de sa mère.' },
      { text: 'La mère peut transmettre l’un de ses X aussi bien à une fille qu’à un garçon', correct: true, correction: 'Exact 🎯 Le sexe de l’enfant ne supprime pas la transmission maternelle de l’X.' },
      { text: 'L’absence de transmission père-fils signifie qu’un homme ne transmet jamais un variant lié à l’X', correct: false, correction: 'Non chef. Il peut le transmettre à ses filles.' },
    ],
    explanation: 'Dans le modèle XX/XY, les filles reçoivent l’X paternel et les garçons l’Y paternel. L’absence de transmission père-fils d’un locus lié à l’X ne signifie donc pas absence de transmission paternelle. (Cours, p. 3–4)'
  },
  {
    id: 3,
    type: 'QCM',
    question: 'Une mère XX est hétérozygote conductrice d’un variant récessif lié à l’X hors des régions pseudo-autosomiques. Le père XY est sain et non porteur de ce variant. On suppose une pénétrance complète chez les garçons porteurs, l’absence de néomutation et une ségrégation mendélienne. Si l’enfant est un garçon, quel est son risque d’être atteint ?',
    options: [
      { text: '0 %', correct: false, correction: 'Non chef. Le garçon peut recevoir l’X maternel portant le variant.' },
      { text: '100 %', correct: false, correction: 'Non chef. L’autre X maternel ne porte pas le variant.' },
      { text: '75 %', correct: false, correction: 'Non. Avec une mère hétérozygote, la transmission de son X muté reste de 1/2.' },
      { text: '25 %', correct: false, correction: 'Faux. Ce serait le risque par grossesse si les sexes sont équiprobables, pas le risque sachant que l’enfant est un garçon.' },
      { text: '50 %', correct: true, correction: 'Oui boss 🎯 Le garçon reçoit l’un des deux X maternels : un sur deux porte le variant.' },
    ],
    explanation: 'Le risque conditionnel chez un garçon est de 1/2, puisqu’il reçoit au hasard l’un des deux X maternels. Il ne faut pas le confondre avec le risque d’avoir un enfant atteint parmi toutes les grossesses. (Cours, p. 3)'
  },
  {
    id: 4,
    type: 'QRM',
    question: 'Une mère XX conductrice d’un variant récessif lié à l’X et un père XY sain non porteur ont un enfant. On suppose des sexes équiprobables, aucune néomutation, une ségrégation mendélienne, des garçons porteurs tous atteints et des filles hétérozygotes asymptomatiques dans ce modèle. Quels résultats par grossesse sont corrects ?',
    options: [
      { text: '25 % de probabilité d’avoir un garçon non porteur du variant', correct: true, correction: 'Exact. Il reçoit alors l’X maternel sans le variant.' },
      { text: '25 % de probabilité d’avoir une fille non porteuse du variant', correct: true, correction: 'Exact 🎯 Elle reçoit l’X normal de chacun de ses parents.' },
      { text: '25 % de probabilité d’avoir une fille conductrice', correct: true, correction: 'Oui. Elle reçoit l’X muté maternel et l’X normal paternel.' },
      { text: '25 % de probabilité d’avoir un garçon atteint', correct: true, correction: 'Oui boss 🧠 1/2 d’avoir un garçon × 1/2 de transmettre l’X muté = 1/4.' },
      { text: '50 % de probabilité d’avoir un enfant atteint, tous sexes confondus', correct: false, correction: 'Non chef. Dans ce modèle, le risque tous sexes confondus est de 25 %, pas de 50 %.' },
    ],
    explanation: 'Les quatre issues sont équiprobables dans ce croisement : garçon atteint, garçon non porteur, fille conductrice et fille non porteuse. L’hypothèse de filles hétérozygotes asymptomatiques est celle du modèle simplifié, pas une règle clinique absolue. (Cours, p. 3 et 5)'
  },
  {
    id: 5,
    type: 'QCM',
    question: 'Un père XY est atteint d’une maladie récessive liée à l’X. La mère XX ne porte pas le variant. Pour ce locus hors des régions pseudo-autosomiques, sans néomutation, avec pénétrance complète chez les garçons porteurs et filles hétérozygotes asymptomatiques dans le modèle, quelle proposition est correcte ?',
    options: [
      { text: 'Toutes les filles reçoivent le variant et sont conductrices', correct: true, correction: 'Oui boss 🧠 Le père transmet son X muté à chacune de ses filles, qui reçoit aussi un X normal maternel.' },
      { text: 'Tous les enfants sont atteints quel que soit leur sexe', correct: false, correction: 'Non chef. Les fils ne reçoivent pas cet X et les filles sont hétérozygotes dans ce modèle.' },
      { text: 'Tous les fils reçoivent le variant lié à l’X de leur père', correct: false, correction: 'Non chef. Les fils reçoivent l’Y paternel et un X maternel normal.' },
      { text: 'Aucune fille ne peut recevoir le variant paternel', correct: false, correction: 'Non. L’X paternel est justement transmis aux filles.' },
      { text: 'La moitié des filles sont homozygotes pour le variant', correct: false, correction: 'Faux. La mère n’est pas porteuse : chaque fille reçoit un X normal d’elle.' },
    ],
    explanation: 'Avec un père atteint et une mère non porteuse, toutes les filles reçoivent l’X pathogène paternel et deviennent conductrices ; les fils ne reçoivent pas ce variant de leur père. Ces conclusions dépendent du statut non porteur de la mère. (Cours, p. 3)'
  },
  {
    id: 6,
    type: 'QRM',
    question: 'Pour une maladie récessive liée à l’X, la mère XX est hétérozygote conductrice et le père XY est atteint. On suppose des sexes équiprobables, aucune néomutation, une ségrégation mendélienne, une pénétrance complète chez les hémizygotes et homozygotes porteurs et des hétérozygotes asymptomatiques. Quelles probabilités sont exactes ?',
    options: [
      { text: 'Sachant que l’enfant est une fille, son risque d’être homozygote atteinte est de 50 %', correct: true, correction: 'Exact. L’X paternel est muté et l’X maternel porte le variant une fois sur deux.' },
      { text: 'Sachant que l’enfant est un garçon, son risque d’être atteint est de 50 %', correct: true, correction: 'Oui boss 🧠 Son X vient de la mère, qui transmet le variant une fois sur deux.' },
      { text: 'Le risque reste obligatoirement de 25 % comme lorsque le père est non porteur', correct: false, correction: 'Non chef. Changer le statut du père modifie les issues possibles chez les filles.' },
      { text: 'Toutes les filles portent au moins une copie du variant', correct: true, correction: 'Oui. Elles reçoivent toutes l’X muté de leur père.' },
      { text: 'Le risque d’avoir un enfant atteint, tous sexes confondus, est de 50 %', correct: true, correction: 'Exact 🎯 Garçons et filles ont ici chacun un risque conditionnel de 1/2.' },
    ],
    explanation: 'Ce croisement diffère de celui d’une mère conductrice et d’un père sain : les filles peuvent recevoir deux copies du variant. Les probabilités découlent des génotypes parentaux et non du seul nom du mode de transmission. (Cours, p. 3 ; application des règles de transmission)'
  },
  {
    id: 7,
    type: 'QCM',
    question: 'Un homme atteint d’une maladie récessive liée à l’X a une fille avec une femme non porteuse. Cette fille a ensuite un enfant avec un homme sain non porteur. On suppose les caryotypes XX/XY, un locus hors des régions pseudo-autosomiques, des sexes équiprobables, aucune néomutation, une pénétrance complète chez les garçons porteurs et des hétérozygotes asymptomatiques. Quel est le risque d’un enfant atteint à cette nouvelle grossesse ?',
    options: [
      { text: '100 %', correct: false, correction: 'Non chef. Le variant n’est pas transmis à tous les enfants par la mère hétérozygote.' },
      { text: '50 %', correct: false, correction: 'Faux. 50 % est ici le risque conditionnel si l’enfant est un garçon, pas le risque par grossesse.' },
      { text: '0 %', correct: false, correction: 'Non chef. La fille a reçu l’X muté de son père et peut le transmettre.' },
      { text: '25 %', correct: true, correction: 'Oui boss 🎯 La mère est conductrice : 1/2 de garçon × 1/2 de transmission = 1/4.' },
      { text: '75 %', correct: false, correction: 'Non. Les quatre issues du croisement sont équiprobables et une seule correspond à un enfant atteint.' },
    ],
    explanation: 'Le grand-père atteint transmet son X pathogène à sa fille, qui est conductrice. Son petit-fils peut ensuite recevoir ce variant par sa mère : cela ne constitue pas une transmission directe père-fils. Le risque par grossesse est de 1/4 dans les hypothèses indiquées. (Cours, p. 3)'
  },
  {
    id: 8,
    type: 'QRM',
    question: 'Dans un pedigree compatible avec une transmission récessive liée à l’X hors des régions pseudo-autosomiques, on observe surtout des hommes atteints et des transmissions passant par des femmes apparemment saines. Quelles interprétations sont correctes ?',
    options: [
      { text: 'Un homme atteint peut transmettre son variant à ses filles', correct: true, correction: 'Exact. Elles reçoivent son chromosome X.' },
      { text: 'Un tel arbre démontre que les femmes ne peuvent jamais être atteintes', correct: false, correction: 'Non chef. Le tableau classique n’efface pas les exceptions, notamment liées à l’inactivation de l’X.' },
      { text: 'Le passage par une conductrice peut donner l’impression d’un saut de génération clinique', correct: true, correction: 'Oui. Le variant peut circuler sans symptômes visibles chez cette femme.' },
      { text: 'Une femme apparemment saine peut être hétérozygote conductrice', correct: true, correction: 'Oui boss 🧠 L’absence de symptômes ne suffit pas à exclure le portage.' },
      { text: 'L’absence de transmission directe père-fils est compatible avec ce mode', correct: true, correction: 'Exact 🎯 Les fils reçoivent l’Y paternel.' },
    ],
    explanation: 'Le pedigree classique met en évidence des hommes atteints, des femmes conductrices et l’absence de transmission directe père-fils. Il décrit une présentation habituelle et non l’impossibilité absolue d’une atteinte féminine. (Cours, p. 3 et 5)'
  },
  {
    id: 9,
    type: 'QCM',
    question: 'Une mère XX hétérozygote est atteinte d’une maladie dominante liée à l’X et le père XY est sain non porteur. On suppose un locus hors des régions pseudo-autosomiques, des sexes équiprobables, une ségrégation mendélienne, aucune néomutation et une pénétrance complète sans létalité. Quel est le risque d’un enfant atteint par grossesse ?',
    options: [
      { text: '50 %', correct: true, correction: 'Oui boss 🎯 La mère transmet le variant à un enfant sur deux, qu’il soit une fille ou un garçon.' },
      { text: '100 %', correct: false, correction: 'Non chef. L’autre X maternel est sans le variant.' },
      { text: '75 %', correct: false, correction: 'Non. Avec un père non porteur et une mère hétérozygote, une seule des deux copies maternelles porte le variant.' },
      { text: '25 %', correct: false, correction: 'Faux. Contrairement au modèle récessif précédent, les filles hétérozygotes sont également atteintes ici.' },
      { text: '0 %', correct: false, correction: 'Non chef. La mère peut transmettre son X portant le variant.' },
    ],
    explanation: 'Dans ce modèle dominant à pénétrance complète, le variant peut s’exprimer chez le garçon hémizygote comme chez la fille hétérozygote. La mère le transmet avec une probabilité de 1/2 à chaque enfant. (Cours, p. 4)'
  },
  {
    id: 10,
    type: 'QRM',
    question: 'Une mère XX hétérozygote pour un variant dominant lié à l’X et un père XY non porteur ont un enfant. On suppose des sexes équiprobables, des grossesses indépendantes, aucune néomutation, une ségrégation mendélienne et une pénétrance complète sans létalité. Quelles probabilités sont exactes ?',
    options: [
      { text: 'La probabilité d’avoir une fille atteinte, parmi toutes les grossesses, est de 25 %', correct: true, correction: 'Oui. 1/2 de fille × 1/2 de transmission = 1/4.' },
      { text: 'Après la naissance d’un enfant atteint, le risque pour la grossesse suivante reste de 50 %', correct: true, correction: 'Exact 🎯 Les grossesses sont indépendantes dans ces hypothèses.' },
      { text: 'Si l’enfant est un garçon, son risque d’être atteint est de 50 %', correct: true, correction: 'Oui boss 🧠 Il reçoit un des deux X maternels.' },
      { text: 'Un premier enfant atteint rend la transmission impossible à la grossesse suivante', correct: false, correction: 'Non chef. Les probabilités ne se compensent pas d’une grossesse à l’autre.' },
      { text: 'Si l’enfant est une fille, son risque d’être atteinte est de 50 %', correct: true, correction: 'Exact. L’hétérozygotie exprime ici le phénotype dominant.' },
    ],
    explanation: 'Le risque conditionnel est de 1/2 chez chaque sexe. Le risque d’un sexe donné et atteint est de 1/4 parmi toutes les grossesses. Une naissance précédente ne modifie pas la ségrégation à la grossesse suivante. (Cours, p. 4 ; application des règles de transmission)'
  },
  {
    id: 11,
    type: 'QCM',
    question: 'Un père XY est atteint d’une maladie dominante liée à l’X hors des régions pseudo-autosomiques, tandis que la mère XX est non porteuse. Sans néomutation, avec pénétrance complète et absence de létalité, quelle partition théorique des enfants est attendue ?',
    options: [
      { text: 'Toutes les filles sont atteintes et aucun fils ne reçoit ce variant paternel', correct: true, correction: 'Oui boss 🧠 Toutes les filles reçoivent l’X muté ; les fils reçoivent l’Y paternel.' },
      { text: 'Tous les enfants reçoivent le chromosome X paternel', correct: false, correction: 'Non chef. Les garçons reçoivent son Y.' },
      { text: 'La moitié des filles et la moitié des fils reçoivent l’X muté du père', correct: false, correction: 'Faux. L’X paternel va à toutes les filles et à aucun fils.' },
      { text: 'Tous les fils sont atteints et aucune fille ne reçoit le variant', correct: false, correction: 'Non chef. Tu inverses la transmission de l’X et de l’Y paternels.' },
      { text: 'Toutes les filles sont nécessairement conductrices asymptomatiques', correct: false, correction: 'Non. Le modèle est dominant à pénétrance complète : les filles hétérozygotes sont atteintes.' },
    ],
    explanation: 'Le père transmet son X à toutes ses filles et son Y à tous ses fils. Avec un variant dominant à pénétrance complète et une mère non porteuse, toutes les filles sont atteintes et aucun fils ne reçoit ce variant. (Cours, p. 4)'
  },
  {
    id: 12,
    type: 'QRM',
    question: 'Dans les modèles simples de maladies liées à l’X hors des régions pseudo-autosomiques, quelles comparaisons entre récessivité et dominance sont correctes ?',
    options: [
      { text: 'Dans le modèle dominant à pénétrance complète, ces filles sont atteintes', correct: true, correction: 'Oui. Le même schéma chromosomique donne ici une expression clinique différente.' },
      { text: 'Avec un père atteint et une mère non porteuse, toutes les filles reçoivent le variant paternel dans les deux modes', correct: true, correction: 'Oui boss 🧠 Le mode d’expression ne change pas la transmission de l’X paternel.' },
      { text: 'L’absence de transmission directe père-fils du locus lié à l’X concerne les deux modes', correct: true, correction: 'Exact 🎯 Récessif ou dominant, le père donne son Y à ses fils.' },
      { text: 'Une transmission dominante liée à l’X permet au père de donner cet X à ses fils', correct: false, correction: 'Non chef. Dominance et récessivité ne changent pas le chromosome transmis selon le sexe.' },
      { text: 'Dans le modèle récessif avec hétérozygotes asymptomatiques, ces filles sont conductrices', correct: true, correction: 'Exact. Elles possèdent également un X maternel normal.' },
    ],
    explanation: 'Dominance et récessivité concernent l’expression du phénotype. Les règles de transmission chromosomique restent les mêmes dans le modèle XX/XY : X paternel aux filles et Y paternel aux fils. (Cours, p. 3–4)'
  },
  {
    id: 13,
    type: 'QCM',
    question: 'Une femme hétérozygote pour un variant récessif lié à l’X présente des symptômes. Quel mécanisme du cours peut contribuer à expliquer cette situation ?',
    options: [
      { text: 'Un biais d’inactivation favorisant l’expression de l’X portant le variant dans des tissus concernés', correct: true, correction: 'Oui boss 🧠 Une proportion importante de cellules peut exprimer l’allèle pathogène.' },
      { text: 'La transformation automatique de tous les variants récessifs en variants dominants', correct: false, correction: 'Non. Une modification de l’expression cellulaire n’impose pas cette transformation du variant.' },
      { text: 'La transmission de l’Y paternel à toutes les filles', correct: false, correction: 'Faux. Ce mécanisme ne correspond pas au modèle XX ni à l’inactivation de l’X.' },
      { text: 'Une inactivation nécessairement identique et équilibrée dans tous les tissus', correct: false, correction: 'Non chef. Le cours insiste sur la variabilité tissulaire et les biais possibles.' },
      { text: 'L’obligation que toute femme hétérozygote soit totalement asymptomatique', correct: false, correction: 'Non chef. C’est justement une généralisation que les exceptions du cours remettent en cause.' },
    ],
    explanation: 'L’inactivation de l’X peut être biaisée et modifier la proportion de cellules exprimant chaque allèle selon les tissus. Cela peut contribuer à une atteinte chez une femme hétérozygote pour une maladie classiquement récessive liée à l’X. (Cours, p. 5)'
  },
  {
    id: 14,
    type: 'QRM',
    question: 'Quelles propositions concernant l’inactivation de l’X sont exactes ?',
    options: [
      { text: 'Elle peut produire une mosaïque de cellules exprimant préférentiellement des allèles différents', correct: true, correction: 'Oui. C’est le principe de la mosaïque fonctionnelle présentée.' },
      { text: 'Le choix de l’X inactivé est généralement aléatoire à l’échelle des cellules', correct: true, correction: 'Exact. Certaines cellules gardent actif l’un des X et d’autres l’autre.' },
      { text: 'Chaque femme inactive obligatoirement le même X dans toutes les cellules de tous ses tissus', correct: false, correction: 'Non chef. Cette idée contredit la mosaïque et la variabilité décrites.' },
      { text: 'La proportion des populations cellulaires peut varier et devenir déséquilibrée selon les tissus', correct: true, correction: 'Exact 🎯 Aléatoire ne signifie pas exactement 50/50 partout.' },
      { text: 'Elle se met en place précocement au cours du développement dans les lignées cellulaires somatiques', correct: true, correction: 'Oui boss 🧠 Le schéma du cours relie ce mécanisme au développement de populations cellulaires différentes.' },
    ],
    explanation: 'L’inactivation précoce d’un X dans les cellules somatiques crée une mosaïque fonctionnelle. Le choix est généralement aléatoire, mais les proportions cellulaires et les conséquences peuvent différer selon les tissus ou être biaisées. (Cours, p. 5)'
  },
  {
    id: 15,
    type: 'QCM',
    question: 'Quelle formulation évite une interprétation excessive de l’expression « chromosome X inactif » ?',
    options: [
      { text: 'L’X inactif est entièrement éliminé de la cellule', correct: false, correction: 'Faux. Inactivation et disparition physique du chromosome sont deux choses différentes.' },
      { text: 'Tous les gènes de ce chromosome sont obligatoirement silencieux sans aucune exception', correct: false, correction: 'Non chef. Une partie des gènes échappe à l’inactivation.' },
      { text: 'L’inactivation signifie que les deux X cessent totalement de fonctionner', correct: false, correction: 'Non. Ce n’est pas une extinction complète des deux chromosomes X.' },
      { text: 'De nombreux gènes sont réprimés, mais certains échappent à l’inactivation, y compris hors des régions pseudo-autosomiques', correct: true, correction: 'Oui boss 🧠 Il ne faut pas limiter toutes les exceptions aux seules régions PAR.' },
      { text: 'Les régions pseudo-autosomiques sont les seuls gènes actifs chez toutes les femmes', correct: false, correction: 'Non chef. L’X actif exprime de nombreux gènes, et certains gènes de l’autre X peuvent aussi échapper à l’inactivation.' },
    ],
    explanation: 'L’inactivation de l’X n’est pas une extinction totale de tous ses gènes. Le support mentionne les régions pseudo-autosomiques ; la précision nécessaire est que d’autres gènes peuvent également échapper à l’inactivation. (Cours, p. 5 ; formulation du support précisée)'
  },
  {
    id: 16,
    type: 'QRM',
    question: 'Une patiente présente un syndrome de Turner de caryotype 45,X. Pour un gène du X hors des régions pseudo-autosomiques, quelles affirmations sont exactes ?',
    options: [
      { text: 'Elle peut être qualifiée d’hémizygote pour ce locus', correct: true, correction: 'Exact. Le cours rapproche cette situation de l’hémizygotie des sujets XY.' },
      { text: 'Elle est nécessairement hétérozygote, puisqu’il s’agit d’une femme', correct: false, correction: 'Non chef. Le nombre de copies dépend du caryotype, pas du seul sexe.' },
      { text: 'Ce caryotype démontre que toute maladie récessive liée à l’X touche exclusivement les hommes', correct: false, correction: 'Faux. Il fournit justement un exemple de situation pouvant permettre une atteinte féminine.' },
      { text: 'Elle possède une seule copie chromosomique de ce gène', correct: true, correction: 'Oui boss 🧠 Le caryotype 45,X comporte un seul chromosome X.' },
      { text: 'Un variant récessif sur son unique X peut s’exprimer sans second allèle normal à ce locus', correct: true, correction: 'Oui. L’absence d’une seconde copie explique cette possibilité.' },
    ],
    explanation: 'Dans le caryotype 45,X considéré ici, une seule copie du locus lié à l’X est présente. La patiente est donc hémizygote pour ce gène et peut exprimer un variant récessif sans seconde copie normale. (Cours, p. 3 et 5)'
  },
  {
    id: 17,
    type: 'QCM',
    question: 'Un père XY porte un variant situé dans une région spécifique du chromosome Y, hors des régions pseudo-autosomiques, et peut concevoir un enfant avec une mère XX. On suppose une transmission mendélienne sans néomutation et une pénétrance complète. Si l’enfant est un garçon XY, quelle est la probabilité qu’il reçoive ce variant paternel ?',
    options: [
      { text: '25 %', correct: false, correction: 'Faux. Le calcul est conditionné au fait que l’enfant est un garçon.' },
      { text: '0 %', correct: false, correction: 'Non chef. Le garçon reçoit le chromosome Y paternel.' },
      { text: 'La probabilité dépend uniquement de l’X maternel', correct: false, correction: 'Non chef. Le variant étudié est sur l’Y du père, pas sur l’X de la mère.' },
      { text: '100 %', correct: true, correction: 'Oui boss 🎯 Le fils reçoit l’Y paternel portant ce variant.' },
      { text: '50 %', correct: false, correction: 'Non. Avec des sexes équiprobables, ce serait le risque de transmettre à un enfant de sexe non encore connu ; ici, on sait qu’il est un garçon.' },
    ],
    explanation: 'Dans ce modèle, un variant de la région spécifique de l’Y est transmis du père à tous ses fils XY. Le calcul est conditionnel à la naissance d’un garçon et ne correspond pas au risque parmi toutes les grossesses. (Cours, p. 6)'
  },
  {
    id: 18,
    type: 'QRM',
    question: 'Quelles propositions concernant l’hérédité holandrique sont correctes dans le modèle XX/XY et pour un locus de la région spécifique de l’Y ?',
    options: [
      { text: 'Les filles XX ne reçoivent pas cet Y paternel', correct: true, correction: 'Oui. Elles reçoivent l’X paternel dans ce modèle.' },
      { text: 'Le père transmet l’Y concerné à ses fils', correct: true, correction: 'Exact. C’est une transmission père-fils.' },
      { text: 'Une anomalie de l’Y réduisant la fertilité peut néanmoins être transmise dans certaines situations, notamment avec une assistance médicale à la procréation', correct: true, correction: 'Exact 🎯 Le cours mentionne cette possibilité ; troubles de fertilité ne signifie pas impossibilité universelle de transmission.' },
      { text: 'Toute anomalie de l’Y touchant la fertilité est nécessairement impossible à transmettre', correct: false, correction: 'Non chef. C’est une formulation trop absolue, contredite par la possibilité de transmission décrite.' },
      { text: 'Elle correspond à une transmission liée au chromosome Y', correct: true, correction: 'Oui boss 🧠 Holandrique est le nom donné à cette transmission.' },
    ],
    explanation: 'L’hérédité holandrique concerne les caractères de la région spécifique de l’Y, transmis du père aux fils. Des anomalies associées à des troubles de fertilité peuvent être transmises dans certaines conditions, notamment grâce à une assistance médicale à la procréation. (Cours, p. 6)'
  },
  {
    id: 19,
    type: 'QCM',
    question: 'Dans un modèle théorique XX/XY, un père atteint et une mère non porteuse ont toutes leurs filles atteintes et aucun fils atteint. On suppose un locus hors des régions pseudo-autosomiques, aucune néomutation, une pénétrance complète et aucune létalité ; pour le modèle récessif, les filles hétérozygotes sont supposées asymptomatiques. Quel mode prévoit directement cette partition ?',
    options: [
      { text: 'Une transmission liée à l’Y', correct: false, correction: 'Non chef. L’Y paternel va aux fils, pas aux filles.' },
      { text: 'Une transmission récessive liée à l’X avec mère non porteuse dans le modèle indiqué', correct: false, correction: 'Faux. Les filles seraient hétérozygotes conductrices asymptomatiques dans ce modèle.' },
      { text: 'Une transmission autosomique récessive avec une mère non porteuse', correct: false, correction: 'Non chef. Avec un père homozygote atteint et une mère non porteuse, les enfants seraient hétérozygotes non atteints dans le modèle récessif simple.' },
      { text: 'Une transmission autosomique dominante imposant toujours cette différence filles-fils', correct: false, correction: 'Non. La transmission autosomique dominante n’impose pas cette partition selon le sexe.' },
      { text: 'Une transmission dominante liée à l’X', correct: true, correction: 'Oui boss 🧠 Toutes les filles reçoivent l’X paternel porteur et expriment le phénotype dominant.' },
    ],
    explanation: 'La partition théorique toutes les filles atteintes et aucun fils atteint d’un père porteur est caractéristique du modèle dominant lié à l’X indiqué. Un petit pedigree réel ne suffit toutefois pas, à lui seul, à prouver un mode de transmission avec certitude. (Cours, p. 4 et 6)'
  },
  {
    id: 20,
    type: 'QRM',
    question: 'Quelles affirmations permettent de raisonner correctement sur une transmission liée aux chromosomes sexuels ?',
    options: [
      { text: 'La mosaïque liée à l’inactivation de l’X peut contribuer à une variabilité d’expression entre tissus', correct: true, correction: 'Exact 🎯 La seule connaissance du génotype ne décrit pas toujours l’expression dans chaque tissu.' },
      { text: 'Le seul terme lié à l’X impose toujours un risque de 25 % par grossesse', correct: false, correction: 'Non chef. Le risque dépend du croisement, de la dominance ou récessivité et des hypothèses d’expression.' },
      { text: 'Le statut génétique des deux parents est nécessaire pour calculer les risques', correct: true, correction: 'Exact. Les résultats diffèrent notamment selon que le père ou la mère porte le variant.' },
      { text: 'Une femme hétérozygote pour un variant récessif lié à l’X peut parfois présenter des symptômes', correct: true, correction: 'Oui. Le modèle classique des conductrices asymptomatiques admet des exceptions.' },
      { text: 'Un risque conditionnel chez les garçons ne doit pas être confondu avec le risque par grossesse', correct: true, correction: 'Oui boss 🧠 Il faut tenir compte de la probabilité du sexe lorsqu’il n’est pas connu.' },
    ],
    explanation: 'Les risques se calculent à partir des génotypes parentaux, du sexe éventuellement connu et des hypothèses de pénétrance ou de viabilité. Les exceptions liées à l’inactivation de l’X empêchent de transformer les schémas classiques en règles cliniques absolues. (Cours, p. 3–6)'
  },
  {
    id: 21,
    type: 'QCM',
    question: 'Quel déficit caractérise l’hémophilie A ?',
    options: [
      { text: 'Une diminution isolée des plaquettes comme anomalie définissant la maladie', correct: false, correction: 'Non chef. L’hémophilie A est un déficit en facteur de coagulation, pas une thrombopénie définissant la maladie.' },
      { text: 'Un déficit en dystrophine', correct: false, correction: 'Faux. La dystrophine est impliquée dans les dystrophinopathies comme Duchenne et Becker.' },
      { text: 'Un déficit en facteur VIII de la coagulation', correct: true, correction: 'Oui boss 🎯 Hémophilie A = déficit en facteur VIII.' },
      { text: 'Une perte urinaire excessive de phosphate', correct: false, correction: 'Non. Ce mécanisme est celui de l’hypophosphatémie liée à l’X présentée dans le cours.' },
      { text: 'Un déficit en facteur IX', correct: false, correction: 'Non chef. Le déficit en facteur IX correspond à l’hémophilie B.' },
    ],
    explanation: 'L’hémophilie A est liée à un déficit d’activité du facteur VIII de la coagulation. Elle doit être distinguée de l’hémophilie B, liée au facteur IX. (Cours, p. 6–7)'
  },
  {
    id: 22,
    type: 'QRM',
    question: 'Concernant les bases génétiques de l’hémophilie A, quelles propositions sont exactes ?',
    options: [
      { text: 'Les inversions des introns 22 et 1 font partie des variations citées', correct: true, correction: 'Exact. Ces inversions sont des anomalies importantes du gène F8.' },
      { text: 'Le gène F8 est situé en Xq28', correct: true, correction: 'Exact. C’est la localisation donnée dans le cours.' },
      { text: 'La transmission est classiquement récessive liée à l’X', correct: true, correction: 'Oui 🎯 Le cours classe l’hémophilie A parmi ces maladies.' },
      { text: 'Le gène responsable est F10 sur un autosome', correct: false, correction: 'Non chef. Il s’agit de F8 sur le chromosome X, pas de F10.' },
      { text: 'Le gène impliqué est F8', correct: true, correction: 'Oui boss 🧠 F8 code le facteur VIII.' },
    ],
    explanation: 'L’hémophilie A est classiquement récessive liée à l’X. F8 se situe en Xq28 ; le cours cite notamment les inversions des introns 22 et 1. (Cours, p. 6–7)'
  },
  {
    id: 23,
    type: 'QCM',
    question: 'Quel examen biologique évalue directement le déficit fonctionnel caractéristique de l’hémophilie A ?',
    options: [
      { text: 'Le dosage de l’activité du facteur VIII', correct: true, correction: 'Oui boss 🎯 Le bilan biologique met en évidence le déficit en facteur VIII ; l’étude de F8 apporte une information génétique complémentaire.' },
      { text: 'La mesure de la phosphaturie', correct: false, correction: 'Faux. Elle explore notamment les pertes urinaires de phosphate.' },
      { text: 'Un caryotype standard comme seul examen fonctionnel', correct: false, correction: 'Non. Un caryotype ne mesure pas l’activité du facteur de coagulation.' },
      { text: 'Le dosage de l’activité du facteur IX', correct: false, correction: 'Non chef. Le facteur IX est déficient dans l’hémophilie B ; l’hémophilie A concerne le facteur VIII.' },
      { text: 'Le dosage des CPK', correct: false, correction: 'Non chef. Les CPK renseignent sur une atteinte musculaire, pas sur l’activité du facteur VIII.' },
    ],
    explanation: 'Le diagnostic biologique d’hémophilie A repose notamment sur la mesure de l’activité du facteur VIII. L’analyse du gène F8 complète le bilan, en particulier pour le conseil génétique familial. (Cours, p. 7)'
  },
  {
    id: 24,
    type: 'QRM',
    question: 'Concernant les inversions de F8 et l’intérêt de l’étude moléculaire, quelles propositions sont exactes ?',
    options: [
      { text: 'Le mécanisme décrit implique une recombinaison intrachromosomique', correct: true, correction: 'Exact. Le réarrangement perturbe le gène F8.' },
      { text: 'L’inversion de l’intron 22 représente une cause importante de formes sévères', correct: true, correction: 'Oui boss 🧠 Le cours la présente comme une variation fréquente dans les formes sévères.' },
      { text: 'Identifier la variation familiale aide à rechercher les femmes hétérozygotes', correct: true, correction: 'Oui 🎯 C’est un intérêt central de l’étude génétique dans la famille.' },
      { text: 'La découverte d’un garçon atteint prouve que tous ses ascendants masculins étaient hémophiles', correct: false, correction: 'Faux. Une variation peut apparaître de novo ; le cours illustre notamment une inversion survenue lors d’une méiose ancestrale.' },
      { text: 'Une inversion de F8 augmente obligatoirement la production de facteur VIII fonctionnel', correct: false, correction: 'Non chef. Le réarrangement peut perturber le gène et provoquer un déficit en facteur VIII.' },
    ],
    explanation: 'Les inversions de F8 peuvent perturber le gène. L’identification de la variation familiale est utile pour le conseil génétique et l’étude des femmes hétérozygotes ; tous les ancêtres n’étaient pas nécessairement atteints. (Cours, p. 7)'
  },
  {
    id: 25,
    type: 'QCM',
    question: 'Quel tableau musculaire correspond classiquement à la dystrophie musculaire de Duchenne ?',
    options: [
      { text: 'Une faiblesse obligatoirement limitée aux mollets durant toute la vie', correct: false, correction: 'Non. Le déficit peut devenir généralisé et s’associer à d’autres atteintes, notamment cardiaques.' },
      { text: 'Une faiblesse qui disparaît spontanément après les premiers signes', correct: false, correction: 'Faux. Le cours décrit une dystrophie progressive, pas un trouble transitoire spontanément résolutif.' },
      { text: 'Une faiblesse uniquement distale, stable et sans progression', correct: false, correction: 'Non chef. Le cours décrit une prédominance proximale et une évolution progressive.' },
      { text: 'Une faiblesse progressive de l’enfant, d’abord à prédominance proximale puis plus généralisée', correct: true, correction: 'Oui boss 🎯 La maladie touche précocement les muscles proximaux et évolue progressivement.' },
      { text: 'Une maladie sans altération possible de la marche', correct: false, correction: 'Non chef. L’évolution peut entraîner une perte de la marche ; son calendrier n’est pas identique chez tous les patients.' },
    ],
    explanation: 'Duchenne est une dystrophie musculaire progressive de l’enfant, avec faiblesse principalement proximale puis généralisée. La mobilité se dégrade au cours de l’évolution, avec une variabilité individuelle et liée à la prise en charge. (Cours, p. 7)'
  },
  {
    id: 26,
    type: 'QRM',
    question: 'Concernant les manifestations et les marqueurs de Duchenne, quelles propositions sont exactes ?',
    options: [
      { text: 'Une élévation des CPK prouve à elle seule une inflammation spécifique de Duchenne', correct: false, correction: 'Non chef. Les CPK signalent une atteinte musculaire et ne sont spécifiques ni de l’inflammation ni de Duchenne.' },
      { text: 'Des manifestations cognitives peuvent être associées', correct: true, correction: 'Exact. Le cours indique qu’une atteinte cognitive est possible, sans qu’elle soit obligatoire.' },
      { text: 'Les CPK peuvent être fortement augmentées et témoignent d’une lésion musculaire', correct: true, correction: 'Oui boss 🧠 Leur élévation traduit une atteinte du muscle ; ce n’est pas une preuve spécifique d’inflammation.' },
      { text: 'Une atteinte cardiaque peut compliquer l’évolution', correct: true, correction: 'Oui 🎯 Elle est un élément important du suivi et du pronostic.' },
      { text: 'La pseudohypertrophie des mollets peut résulter d’un remplacement fibrograisseux du muscle', correct: true, correction: 'Exact. Le volume apparent ne signifie pas une augmentation de muscle fonctionnel ; l’explication uniquement par l’œdème est incorrecte.' },
    ],
    explanation: 'Duchenne peut associer une forte élévation des CPK, une pseudohypertrophie des mollets, une atteinte cardiaque et des manifestations cognitives. Les CPK reflètent une lésion musculaire ; la pseudohypertrophie relève notamment du remplacement fibrograisseux. (Cours, p. 7 ; clarification de deux formulations.)'
  },
  {
    id: 27,
    type: 'QCM',
    question: 'Un enfant se relève du sol en prenant appui avec ses mains sur ses cuisses. Quelle interprétation du signe de Gowers est correcte ?',
    options: [
      { text: 'Il exclut toute myopathie si les mollets sont volumineux', correct: false, correction: 'Non. Une pseudohypertrophie peut coexister avec une faiblesse musculaire.' },
      { text: 'Il témoigne d’une faiblesse musculaire proximale et doit être interprété avec le reste du bilan', correct: true, correction: 'Oui boss 🎯 Le nom correct est Gowers ; « Bowers » est une coquille du support.' },
      { text: 'Il prouve à lui seul une dystrophie de Duchenne', correct: false, correction: 'Non chef. Il indique une faiblesse proximale mais n’est pas spécifique de Duchenne.' },
      { text: 'Il démontre exclusivement une perte urinaire de phosphate', correct: false, correction: 'Faux. La manœuvre est un signe clinique de faiblesse musculaire, pas une mesure de phosphaturie.' },
      { text: 'Il indique exclusivement une faiblesse des muscles distaux des pieds', correct: false, correction: 'Non chef. Le signe traduit surtout une faiblesse proximale, notamment des muscles permettant de se redresser.' },
    ],
    explanation: 'Le signe de Gowers traduit une faiblesse musculaire proximale, notamment lors du redressement. Il ne suffit pas à diagnostiquer Duchenne. Le support emploie par erreur le nom « Bowers ». (Cours, p. 7, 23 et 25 ; correction du nom.)'
  },
  {
    id: 28,
    type: 'QRM',
    question: 'Concernant la dystrophie musculaire de Becker, quelles propositions sont exactes ?',
    options: [
      { text: 'Les CPK peuvent être augmentées', correct: true, correction: 'Exact. Le cours cite également leur élévation dans Becker.' },
      { text: 'Elle est généralement moins sévère que Duchenne', correct: true, correction: 'Oui boss 🧠 C’est la tendance clinique décrite, avec une variabilité entre patients.' },
      { text: 'Une atteinte cardiaque est possible', correct: true, correction: 'Oui 🎯 Une présentation moins sévère sur le plan moteur ne supprime pas le risque cardiaque.' },
      { text: 'Tous les patients perdent obligatoirement la marche au même âge', correct: false, correction: 'Non chef. La durée de maintien de la mobilité varie beaucoup d’une personne à l’autre.' },
      { text: 'Elle peut comporter une faiblesse progressive à prédominance proximale', correct: true, correction: 'Exact. Becker reste une dystrophie musculaire progressive.' },
    ],
    explanation: 'Becker est généralement moins sévère que Duchenne, avec faiblesse progressive, élévation des CPK et risque cardiaque. Le maintien de la marche est variable. (Cours, p. 9)'
  },
  {
    id: 29,
    type: 'QCM',
    question: 'Dans un modèle simple de séquence codante, sans modification de l’épissage, quel effet attend-on d’une délétion de six nucléotides ?',
    options: [
      { text: 'Une protéine nécessairement identique à la protéine normale', correct: false, correction: 'Non. Même si le cadre est conservé, la séquence protéique est modifiée par la délétion.' },
      { text: 'Le maintien du cadre de lecture en aval, six étant un multiple de trois', correct: true, correction: 'Oui boss 🎯 On raisonne sur les nucléotides codants, pas sur le seul nombre d’exons.' },
      { text: 'Un cadre nécessairement décalé parce que toute délétion le décale', correct: false, correction: 'Non chef. L’effet dépend notamment du nombre de nucléotides codants supprimés.' },
      { text: 'Un décalage obligatoire du cadre car six n’est pas un multiple de trois', correct: false, correction: 'Non chef. Six est bien un multiple de trois.' },
      { text: 'La suppression obligatoire de six exons entiers', correct: false, correction: 'Faux. Le nombre de nucléotides supprimés n’est pas le nombre d’exons supprimés.' },
    ],
    explanation: 'Dans le modèle simple, une délétion d’un nombre de nucléotides codants multiple de trois conserve le cadre en aval. Cela n’implique pas que la protéine produite soit normale ou pleinement fonctionnelle. (Cours, p. 9–10 ; application de la théorie du cadre.)'
  },
  {
    id: 30,
    type: 'QRM',
    question: 'Concernant la théorie du cadre de lecture dans les dystrophinopathies, quelles propositions sont exactes ?',
    options: [
      { text: 'Le cadre de lecture prédit sans exception toute la sévérité clinique', correct: false, correction: 'Faux. C’est une relation générale utile, pas une correspondance absolue pour chaque variation et chaque patient.' },
      { text: 'Un cadre conservé peut permettre la production d’une dystrophine plus courte, partiellement fonctionnelle', correct: true, correction: 'Exact. Cela explique une grande partie des phénotypes Becker.' },
      { text: 'Le respect du cadre garantit toujours une protéine normale et l’absence de symptômes', correct: false, correction: 'Non chef. Une protéine plus courte peut garder une fonction partielle tout en entraînant une maladie.' },
      { text: 'Le critère « multiple de trois » concerne les nucléotides codants retirés', correct: true, correction: 'Oui 🎯 Compter seulement les exons supprimés ne suffit pas pour conclure.' },
      { text: 'Une rupture du cadre est généralement associée à un phénotype Duchenne', correct: true, correction: 'Oui boss 🧠 C’est la règle générale présentée, avec des exceptions.' },
    ],
    explanation: 'La règle générale associe une rupture du cadre à Duchenne et un cadre conservé à Becker, avec production possible d’une dystrophine raccourcie. Des exceptions existent, et la fonction dépend aussi de la partie de protéine concernée. (Cours, p. 9–10 ; précision des limites de la règle.)'
  },
  {
    id: 31,
    type: 'QCM',
    question: 'Dans l’exemple précis illustré p. 11, une délétion de l’exon 50 met le transcrit hors phase. Quel effet est recherché en faisant sauter l’exon 51 ?',
    options: [
      { text: 'Réinsérer l’exon 50 dans l’ADN', correct: false, correction: 'Non chef. Le saut modifie l’épissage du transcrit ; il ne réinsère pas l’exon manquant dans le gène.' },
      { text: 'Produire une dystrophine fonctionnelle sans changer la composition du transcrit', correct: false, correction: 'Non. Le saut exclut précisément l’exon 51 du transcrit dans cet exemple afin de restaurer la phase.' },
      { text: 'Rétablir la phase dans le transcrit tout en produisant une dystrophine plus courte', correct: true, correction: 'Oui boss 🎯 Dans ce schéma, retirer aussi l’exon 51 rétablit la continuité du cadre et permet une protéine partiellement fonctionnelle.' },
      { text: 'Éliminer toute atteinte musculaire et cardiaque avec certitude', correct: false, correction: 'Non chef. Le but est de restaurer une fonction partielle, pas de garantir une guérison complète.' },
      { text: 'Produire obligatoirement une dystrophine de longueur normale', correct: false, correction: 'Faux. Des séquences restent absentes ; la protéine recherchée est raccourcie.' },
    ],
    explanation: 'Le schéma p. 11 montre spécifiquement qu’après la délétion de l’exon 50, le saut de l’exon 51 restaure la phase et permet une dystrophine raccourcie. Cet exemple ne constitue pas une stratégie universelle pour toutes les variations. (Cours, p. 11, schéma.)'
  },
  {
    id: 32,
    type: 'QRM',
    question: 'Concernant le principe du saut d’exon, quelles propositions sont exactes ?',
    options: [
      { text: 'Son intérêt dépend de la variation et de la structure du transcrit', correct: true, correction: 'Oui 🎯 Le même exon à sauter ne convient pas à toutes les variations.' },
      { text: 'Il corrige obligatoirement l’ADN familial et supprime toute possibilité de transmission', correct: false, correction: 'Faux. Modifier l’épissage d’un ARN ne signifie pas réparer la variation dans l’ADN transmis.' },
      { text: 'Il peut permettre de retrouver un cadre de lecture compatible avec une protéine partiellement fonctionnelle', correct: true, correction: 'Exact. L’objectif est d’améliorer la production de dystrophine utile.' },
      { text: 'Il vise à modifier l’épissage pour exclure un exon du transcrit', correct: true, correction: 'Oui boss 🧠 Le cours décrit une intervention sur la maturation de l’ARN.' },
      { text: 'Il assure une guérison complète chez tout patient Duchenne', correct: false, correction: 'Non chef. Le principe recherche une amélioration par fonction partielle, sans promesse de guérison universelle.' },
    ],
    explanation: 'Le saut d’exon cherche à restaurer un cadre de lecture par modification de l’épissage. Une dystrophine raccourcie peut être partiellement fonctionnelle ; l’approche dépend du génotype et ne garantit pas une guérison complète. (Cours, p. 10–11)'
  },
  {
    id: 33,
    type: 'QCM',
    question: 'Quelle proposition décrit correctement les femmes hétérozygotes pour une variation pathogène de DMD ?',
    options: [
      { text: 'Une absence de faiblesse musculaire exclut définitivement tout risque cardiaque', correct: false, correction: 'Non chef. Le risque cardiaque mérite une surveillance même sans symptôme musculaire évident.' },
      { text: 'Elles portent nécessairement deux copies pathogènes du gène DMD', correct: false, correction: 'Non. Hétérozygote signifie ici qu’une copie porte la variation et que l’autre ne porte pas cette variation ; des symptômes restent possibles.' },
      { text: 'Elles sont nécessairement toutes asymptomatiques durant toute leur vie', correct: false, correction: 'Non chef. Certaines peuvent avoir une atteinte musculaire, cardiaque ou cognitive.' },
      { text: 'Elles ont toutes exactement le même tableau clinique', correct: false, correction: 'Faux. Le cours insiste sur une grande hétérogénéité du phénotype.' },
      { text: 'Leur phénotype peut aller d’une absence de symptômes à une atteinte importante', correct: true, correction: 'Oui boss 🎯 Le terme « conductrice » ne signifie pas absence garantie de manifestations.' },
    ],
    explanation: 'Le phénotype des femmes hétérozygotes DMD est très variable. Des manifestations musculaires, cardiaques ou cognitives sont possibles ; toutes ne sont pas asymptomatiques. (Cours, p. 11)'
  },
  {
    id: 34,
    type: 'QRM',
    question: 'Concernant les manifestations et le suivi des femmes hétérozygotes DMD, quelles propositions sont exactes ?',
    options: [
      { text: 'Une atteinte cardiaque peut survenir', correct: true, correction: 'Exact. Elle n’est pas réservée aux garçons atteints.' },
      { text: 'Une atteinte cognitive est également mentionnée dans le cours', correct: true, correction: 'Exact. Elle fait partie de l’éventail possible, sans être systématique.' },
      { text: 'Une atteinte musculaire est possible', correct: true, correction: 'Oui boss 🧠 Certaines femmes présentent une faiblesse ou un tableau musculaire plus marqué.' },
      { text: 'Le mot « conductrice » garantit une absence totale de maladie', correct: false, correction: 'Non chef. Le cours décrit précisément des femmes hétérozygotes symptomatiques.' },
      { text: 'L’absence de symptômes ne dispense pas d’une surveillance cardiaque adaptée', correct: true, correction: 'Oui 🎯 Il ne faut pas attendre obligatoirement un symptôme ou un âge fixe pour envisager cette surveillance.' },
    ],
    explanation: 'Les femmes hétérozygotes DMD peuvent présenter des atteintes musculaires, cardiaques ou cognitives. Une surveillance cardiaque adaptée est importante, y compris en l’absence de symptômes ; l’âge de 40 ans du texte ne doit pas être interprété comme une règle imposant d’attendre. (Cours, p. 11 ; précision sur le suivi.)'
  },
  {
    id: 35,
    type: 'QCM',
    question: 'Quel mécanisme explique l’hypophosphatémie liée à l’X associée à PHEX ?',
    options: [
      { text: 'Un défaut exclusivement alimentaire de phosphate, sans perte rénale', correct: false, correction: 'Non chef. La forme liée à PHEX présentée dans le cours repose sur une fuite rénale de phosphate.' },
      { text: 'Un déficit en facteur VIII de la coagulation', correct: false, correction: 'Faux. Ce déficit caractérise l’hémophilie A, pas la maladie liée à PHEX.' },
      { text: 'Une absence de dystrophine comme mécanisme obligatoire', correct: false, correction: 'Non. PHEX est associé au métabolisme du phosphate ; la dystrophine relève de DMD.' },
      { text: 'Une perte excessive de phosphate dans les urines d’origine rénale', correct: true, correction: 'Oui boss 🎯 L’hyperphosphaturie entraîne une diminution du phosphate sanguin.' },
      { text: 'Une accumulation de phosphate dans le sang par absence d’élimination urinaire', correct: false, correction: 'Non chef. Le cours décrit au contraire une perte urinaire accrue et une hypophosphatémie.' },
    ],
    explanation: 'Les variations pathogènes de PHEX entraînent une perte rénale excessive de phosphate, responsable d’une hyperphosphaturie et d’une hypophosphatémie. (Cours, p. 11)'
  },
  {
    id: 36,
    type: 'QRM',
    question: 'Quelles atteintes sont décrites dans l’hypophosphatémie liée à l’X ?',
    options: [
      { text: 'Une atteinte osseuse avec rachitisme', correct: true, correction: 'Oui boss 🧠 Le cours emploie aussi le nom de rachitisme vitamine D-résistant.' },
      { text: 'Une mort obligatoire chez tous les garçons porteurs', correct: false, correction: 'Faux. Cette maladie liée à l’X n’est pas une affection à létalité masculine obligatoire.' },
      { text: 'Un déficit musculaire', correct: true, correction: 'Oui 🎯 Une faiblesse musculaire n’est donc pas synonyme de dystrophinopathie.' },
      { text: 'Une atteinte limitée à la coagulation, sans manifestation osseuse', correct: false, correction: 'Non chef. La maladie concerne notamment l’os, les dents et le muscle.' },
      { text: 'Des abcès dentaires', correct: true, correction: 'Exact. L’atteinte dentaire fait partie du tableau.' },
    ],
    explanation: 'L’hypophosphatémie liée à l’X associe notamment atteintes osseuses, dentaires et musculaires, avec rachitisme et abcès dentaires possibles. Elle peut affecter les garçons et les filles. (Cours, p. 11)'
  },
  {
    id: 37,
    type: 'QCM',
    question: 'Quelle association correspond à l’hypophosphatémie héréditaire présentée dans le cours ?',
    options: [
      { text: 'PHEX et transmission exclusivement par le chromosome Y', correct: false, correction: 'Non. Les femmes peuvent être atteintes et le gène est associé à une transmission liée à l’X.' },
      { text: 'PHEX et transmission dominante liée à l’X', correct: true, correction: 'Oui boss 🎯 C’est le gène et le mode de transmission donnés pour cette hypophosphatémie.' },
      { text: 'F8 et transmission récessive liée à l’X', correct: false, correction: 'Non chef. Cette association concerne l’hémophilie A.' },
      { text: 'DMD et transmission autosomique dominante', correct: false, correction: 'Faux. La maladie étudiée ici est liée à PHEX et au chromosome X.' },
      { text: 'PHEX et transmission récessive autosomique dans le modèle du cours', correct: false, correction: 'Non chef. Le support indique une transmission dominante liée à l’X.' },
    ],
    explanation: 'L’hypophosphatémie liée à l’X du cours est associée à PHEX et à une transmission dominante liée à l’X. Elle constitue un exemple différent des transmissions récessives de l’hémophilie A et des dystrophinopathies. (Cours, p. 6–7 et 11)'
  },
  {
    id: 38,
    type: 'QRM',
    question: 'Concernant les conséquences de la variation de PHEX présentée dans le cours, quelles propositions sont exactes ?',
    options: [
      { text: 'L’hyperphosphaturie correspond à une perte urinaire accrue de phosphate', correct: true, correction: 'Oui boss 🧠 Le préfixe « hyper » concerne ici l’élimination urinaire.' },
      { text: 'Cette perte peut entraîner une diminution du phosphate sanguin', correct: true, correction: 'Exact. Cela explique le terme hypophosphatémie.' },
      { text: 'Des manifestations osseuses, dentaires et musculaires peuvent être associées', correct: true, correction: 'Oui 🎯 Le retentissement ne se limite pas au résultat d’un dosage sanguin.' },
      { text: 'Le mécanisme est défini par une rupture du cadre de lecture de DMD', correct: false, correction: 'Faux. Tu confonds la dystrophinopathie avec la maladie liée à PHEX.' },
      { text: 'Une hypophosphatémie signifie une augmentation du phosphate dans le sang', correct: false, correction: 'Non chef. « Hypo » signifie une concentration sanguine diminuée.' },
    ],
    explanation: 'L’hyperphosphaturie liée à PHEX correspond à une fuite urinaire de phosphate, entraînant une hypophosphatémie et des manifestations notamment osseuses, dentaires et musculaires. (Cours, p. 11)'
  },
  {
    id: 39,
    type: 'QCM',
    question: 'Quelle association entre maladie et mécanisme est correcte ?',
    options: [
      { text: 'Hémophilie A : déficit en dystrophine ; Duchenne : déficit en facteur VIII', correct: false, correction: 'Non chef. Les deux mécanismes sont inversés.' },
      { text: 'Becker : protéine toujours totalement normale parce que le cadre est conservé', correct: false, correction: 'Non. Le cadre conservé peut permettre une dystrophine raccourcie, dont la fonction reste partielle.' },
      { text: 'Hémophilie A : déficit d’activité du facteur VIII ; dystrophinopathies : anomalie de dystrophine ; PHEX : fuite rénale de phosphate', correct: true, correction: 'Oui boss 🎯 Trois maladies liées à l’X, mais trois mécanismes différents.' },
      { text: 'Toutes ces maladies : même mécanisme de coagulation et même mode de transmission dominant', correct: false, correction: 'Non chef. Les protéines, les conséquences et les modes de transmission diffèrent.' },
      { text: 'Hypophosphatémie liée à l’X : augmentation obligatoire du phosphate sanguin', correct: false, correction: 'Faux. Elle se caractérise au contraire par une diminution du phosphate sanguin liée à des pertes urinaires.' },
    ],
    explanation: 'Le chromosome impliqué ne détermine pas à lui seul le mécanisme clinique : F8 concerne la coagulation, DMD la dystrophine et PHEX la régulation du phosphate. (Cours, p. 6–7 et 9–11)'
  },
  {
    id: 40,
    type: 'QRM',
    question: 'Dans le modèle mendélien classique, un père atteint d’hypophosphatémie dominante liée à l’X a des enfants avec une mère ne portant pas la variation familiale. Quelles propositions sont exactes ?',
    options: [
      { text: 'Tous ses fils reçoivent son X pathogène', correct: false, correction: 'Non chef. C’est impossible dans ce modèle : les fils reçoivent son chromosome Y.' },
      { text: 'Ses filles ne peuvent pas être atteintes parce qu’elles ont aussi un X maternel sans variation', correct: false, correction: 'Faux. La transmission est dominante liée à l’X ; la présence d’un X sans variation ne garantit pas l’absence de maladie.' },
      { text: 'Ses fils ne reçoivent pas de lui cette variation liée à l’X', correct: true, correction: 'Exact. Le père transmet son Y à ses fils, tandis que leur X vient de la mère.' },
      { text: 'Toutes ses filles reçoivent son chromosome X portant la variation', correct: true, correction: 'Oui boss 🧠 Le père transmet son X à ses filles.' },
      { text: 'Cet exemple ne suppose pas une létalité obligatoire des garçons porteurs', correct: true, correction: 'Oui 🎯 Un garçon peut vivre avec cette maladie ; le père atteint en est justement un exemple.' },
    ],
    explanation: 'Dans ce croisement, le père transmet son X portant la variation à toutes ses filles et son Y à tous ses fils. L’hypophosphatémie liée à PHEX est dominante liée à l’X et n’implique pas une létalité masculine obligatoire. (Cours, p. 11, arbre et texte ; application mendélienne.)'
  },
  {
    id: 41,
    type: 'QCM',
    question: 'Quel mode de transmission est illustré par l’incontinentia pigmenti dans le cours ?',
    options: [
      { text: 'Une transmission liée au chromosome Y', correct: false, correction: 'Faux. Cette maladie touche principalement des femmes ; elle n’est pas holandrique.' },
      { text: 'Une transmission dominante liée à l’X avec létalité habituelle des formes hémizygotes classiques', correct: true, correction: 'Oui boss 🧠 Le cours utilise cette maladie pour illustrer la létalité chez l’hémizygote.' },
      { text: 'Une infection transmise à chaque enfant par les lésions cutanées de sa mère', correct: false, correction: 'Non chef. Les lésions présentées ont une cause génétique, pas infectieuse.' },
      { text: 'Une transmission récessive autosomique limitée aux garçons', correct: false, correction: 'Non chef. Le gène est porté par l’X et la transmission décrite est dominante.' },
      { text: 'Une transmission dominante liée à l’X dont tous les garçons porteurs sont toujours sains', correct: false, correction: 'Non. Tu confonds avec le profil particulier de PCDH19 chez l’homme hémizygote non mosaïque.' },
    ],
    explanation: 'L’incontinentia pigmenti est un exemple de maladie dominante liée à l’X, avec létalité habituelle chez les garçons hémizygotes pour les variants classiques responsables de la maladie. Des exceptions masculines existent ; la règle ne doit pas devenir une impossibilité absolue. (Cours, p. 6 et 12–13)'
  },
  {
    id: 42,
    type: 'QRM',
    question: 'Concernant les manifestations cutanées d’incontinentia pigmenti décrites dans le cours, quelles propositions sont exactes ?',
    options: [
      { text: 'La phase bulleuse est suivie par une phase verruqueuse dans la succession classique', correct: true, correction: 'Exact. Le cours situe cette évolution après quelques semaines.' },
      { text: 'Les lésions démontrent nécessairement une infection bactérienne', correct: false, correction: 'Non chef. Le cours précise leur origine non infectieuse.' },
      { text: 'Les lésions peuvent suivre les lignes de Blaschko', correct: true, correction: 'Oui boss. Leur disposition reflète le développement cutané en mosaïque.' },
      { text: 'L’évolution classique commence par une hypopigmentation puis finit par les bulles néonatales', correct: false, correction: 'Faux. Cet ordre inverse la succession présentée.' },
      { text: 'Des lésions inflammatoires bulleuses peuvent apparaître dans les premières semaines', correct: true, correction: 'Exact 🧠 C’est la première phase présentée.' },
    ],
    explanation: 'Le cours présente des bulles inflammatoires précoces, suivant les lignes de Blaschko, puis des lésions verruqueuses. Il ne s’agit pas d’une infection cutanée. (Cours, p. 12–13)'
  },
  {
    id: 43,
    type: 'QCM',
    question: 'Quelle succession correspond aux quatre phases cutanées classiques d’incontinentia pigmenti ?',
    options: [
      { text: 'Hyperpigmentée → hypopigmentée → verruqueuse → bulleuse', correct: false, correction: 'Non chef. Les phases pigmentaires suivent les phases bulleuse et verruqueuse.' },
      { text: 'Bulleuse → hyperpigmentée → verruqueuse → hypopigmentée', correct: false, correction: 'Non chef. La phase verruqueuse précède l’hyperpigmentation.' },
      { text: 'Hypopigmentée → bulleuse → verruqueuse → hyperpigmentée', correct: false, correction: 'Faux. L’hypopigmentation correspond à la dernière phase de la succession du cours.' },
      { text: 'Verruqueuse → hypopigmentée → bulleuse → hyperpigmentée', correct: false, correction: 'Non. Les lésions inflammatoires bulleuses apparaissent au début.' },
      { text: 'Bulleuse → verruqueuse → hyperpigmentée → hypopigmentée', correct: true, correction: 'Oui boss 🎯 C’est l’ordre à retenir.' },
    ],
    explanation: 'La succession classique décrite est bulleuse, verruqueuse, hyperpigmentée puis hypopigmentée. Les lésions et leur expression peuvent varier d’une personne à l’autre. (Cours, p. 12–13)'
  },
  {
    id: 44,
    type: 'QRM',
    question: 'Quels signes associés à l’incontinentia pigmenti sont cités dans le cours ?',
    options: [
      { text: 'Des anomalies dentaires de forme ou d’implantation', correct: true, correction: 'Oui boss 🧠 L’atteinte ne se limite pas à la peau.' },
      { text: 'Une absence obligatoire de tout signe extracutané', correct: false, correction: 'Non chef. Plusieurs organes peuvent être concernés, même si leur atteinte est variable.' },
      { text: 'Des anomalies oculaires motivant un examen du fond d’œil', correct: true, correction: 'Oui 🎯 Le cours insiste sur cette évaluation.' },
      { text: 'Une épilepsie ou des troubles du développement possibles', correct: true, correction: 'Exact. Une atteinte neurologique peut être associée.' },
      { text: 'Des anomalies des ongles', correct: true, correction: 'Exact. Leur taille, leur épaisseur ou leur forme peuvent être anormales.' },
    ],
    explanation: 'Le cours cite des manifestations unguéales, dentaires, oculaires, neurologiques et squelettiques. L’évaluation du fond d’œil est présentée comme systématique. Ces atteintes ne sont pas toutes obligatoirement associées chez chaque personne. (Cours, p. 13)'
  },
  {
    id: 45,
    type: 'QCM',
    question: 'Quel gène est impliqué dans l’incontinentia pigmenti présentée ?',
    options: [
      { text: 'IKBKG', correct: true, correction: 'Oui boss 🎯 C’est le gène nommé pour l’incontinentia pigmenti.' },
      { text: 'PCDH19', correct: false, correction: 'Non. Ce gène est associé à l’encéphalopathie épileptique particulière décrite ensuite.' },
      { text: 'F8', correct: false, correction: 'Non chef. F8 est impliqué dans l’hémophilie A.' },
      { text: 'FMR1', correct: false, correction: 'Non chef. FMR1 est le gène du syndrome de l’X fragile et des troubles liés à sa prémutation.' },
      { text: 'DMD', correct: false, correction: 'Faux. DMD est le gène des dystrophinopathies.' },
    ],
    explanation: 'L’incontinentia pigmenti est liée à des variants pathogènes d’IKBKG. Le cours décrit une délétion récurrente de ce gène. (Cours, p. 13)'
  },
  {
    id: 46,
    type: 'QRM',
    question: 'Concernant la variabilité et la base génétique d’incontinentia pigmenti, quelles propositions sont exactes ?',
    options: [
      { text: 'Une néomutation peut expliquer un cas sans antécédent familial connu', correct: true, correction: 'Oui boss. Une absence d’histoire familiale n’exclut pas une cause génétique.' },
      { text: 'Une forme maternelle discrète peut être reconnue après le diagnostic chez une fille', correct: true, correction: 'Exact. Le cours donne cet exemple d’expression variable.' },
      { text: 'Tous les cas nécessitent une mère présentant les mêmes lésions avec la même intensité', correct: false, correction: 'Non chef. L’expression peut varier et un variant peut aussi survenir de novo.' },
      { text: 'L’absence de signes cutanés marqués chez une adulte prouve qu’aucun variant familial n’est possible', correct: false, correction: 'Faux. Une forme modérée peut avoir été méconnue ; l’évaluation dépend du dossier familial.' },
      { text: 'Une délétion récurrente d’environ 11,7 kb englobe les exons 4 à 10 d’IKBKG', correct: true, correction: 'Exact 🧠 Le cours donne cet exemple de variant fréquent.' },
    ],
    explanation: 'Le cours décrit différents variants, dont une délétion récurrente, ainsi que des néomutations. L’expression variable peut conduire à découvrir une atteinte maternelle discrète après le diagnostic chez une fille. (Cours, p. 13 et 15)'
  },
  {
    id: 47,
    type: 'QCM',
    question: 'Dans une famille d’incontinentia pigmenti classique, que peut expliquer la létalité du variant chez le garçon hémizygote ?',
    options: [
      { text: 'Des pertes fœtales et une absence de garçons atteints parmi les enfants vivants', correct: true, correction: 'Oui boss 🧠 C’est le profil familial présenté pour un variant létal chez l’hémizygote.' },
      { text: 'L’absence de filles atteintes dans toutes les générations', correct: false, correction: 'Faux. Les filles hétérozygotes peuvent être atteintes et transmettre le variant.' },
      { text: 'Une transmission obligatoire de l’allèle par le chromosome Y', correct: false, correction: 'Non chef. Le gène responsable est sur l’X.' },
      { text: 'Une impossibilité de transmission de mère à fils au moment de la conception', correct: false, correction: 'Non chef. Le variant peut être transmis à la conception, même si le fœtus atteint ne survit pas.' },
      { text: 'Une protection définitive de tous les garçons ayant reçu l’allèle pathogène', correct: false, correction: 'Non. Ici, l’absence de garçons atteints vivants s’explique par la létalité, pas par une protection.' },
    ],
    explanation: 'La létalité chez les garçons hémizygotes peut expliquer des fausses couches et un arbre surtout marqué par des femmes atteintes. Le risque de transmission à la conception doit être distingué de la répartition parmi les naissances vivantes. (Cours, p. 6 et 12–13)'
  },
  {
    id: 48,
    type: 'QRM',
    question: 'Dans un modèle simplifié, une femme hétérozygote pour un variant d’incontinentia pigmenti a un conjoint non porteur. Les sexes sont équiprobables ; tous les garçons ayant le variant décèdent avant la naissance et les autres conceptions survivent. Quelles probabilités sont exactes ?',
    options: [
      { text: 'Une conception sur quatre correspond à un garçon ayant reçu le variant', correct: true, correction: 'Oui boss. 1/2 pour un garçon × 1/2 pour le variant = 1/4.' },
      { text: 'Une conception sur deux reçoit le variant maternel', correct: true, correction: 'Exact 🧠 La mère transmet l’un de ses deux X avec une probabilité de 1/2.' },
      { text: 'Parmi les enfants vivants de ce modèle, un sur trois est une fille ayant reçu le variant', correct: true, correction: 'Exact 🎯 Les trois catégories survivantes ont le même poids : fille avec variant, fille sans variant et garçon sans variant.' },
      { text: 'Aucun garçon sans variant ne peut naître de ce couple', correct: false, correction: 'Faux. Un garçon recevant l’X maternel sans variant fait partie des conceptions survivantes.' },
      { text: 'La moitié des naissances vivantes correspond à des filles ayant le variant', correct: false, correction: 'Non chef. Il faut retirer les conceptions masculines létales du dénominateur : 1/4 divisé par 3/4 = 1/3.' },
    ],
    explanation: 'Au moment de la conception, les quatre combinaisons ont chacune une probabilité de 1/4. En retirant les garçons avec le variant selon les hypothèses posées, il reste trois catégories équiprobables parmi les enfants vivants. Ce calcul concerne ce modèle, sans décrire toutes les situations réelles. (Cours, p. 3–4, 6 et 12 ; application des règles)'
  },
  {
    id: 49,
    type: 'QCM',
    question: 'Quelle protéine est codée par PCDH19 dans le mécanisme présenté ?',
    options: [
      { text: 'La dystrophine', correct: false, correction: 'Faux. Elle est codée par DMD.' },
      { text: 'Une protocadhérine impliquée notamment dans l’adhésion neuronale', correct: true, correction: 'Oui boss 🧠 La protocadhérine 19 participe aux interactions entre cellules et au développement des connexions.' },
      { text: 'Le facteur VIII de coagulation', correct: false, correction: 'Non chef. Le facteur VIII correspond au gène F8.' },
      { text: 'La protéine NEMO codée par IKBKG', correct: false, correction: 'Non chef. NEMO correspond à IKBKG, le gène impliqué dans incontinentia pigmenti ; PCDH19 code une protocadhérine.' },
      { text: 'La protéine FMRP', correct: false, correction: 'Non. FMRP est codée par FMR1.' },
    ],
    explanation: 'PCDH19 code la protocadhérine 19, impliquée dans l’adhésion neuronale et l’organisation des connexions pendant le développement. (Cours, p. 15)'
  },
  {
    id: 50,
    type: 'QRM',
    question: 'Concernant le tableau d’encéphalopathie épileptique liée à PCDH19 décrit dans le cours, quelles propositions sont exactes ?',
    options: [
      { text: 'Un retard de développement ou une déficience intellectuelle peut être associé', correct: true, correction: 'Exact. Le retentissement neurodéveloppemental est important, mais variable.' },
      { text: 'Un début tardif avec tremblement d’action chez un grand-père définit cette encéphalopathie infantile', correct: false, correction: 'Non chef. Ce tableau tardif évoque le FXTAS décrit dans la partie FMR1, pas le tableau de PCDH19.' },
      { text: 'La fréquence des crises peut diminuer avec l’âge', correct: true, correction: 'Oui 🎯 Le cours décrit cette évolution possible.' },
      { text: 'Les crises peuvent être récurrentes et difficiles à traiter', correct: true, correction: 'Oui boss. Le terme réfractaire souligne cette difficulté.' },
      { text: 'L’épilepsie peut débuter dans les premières années de vie', correct: true, correction: 'Exact 🧠 Le début précoce fait partie du tableau.' },
    ],
    explanation: 'Le cours décrit une épilepsie précoce, récurrente et parfois réfractaire, avec un retentissement neurodéveloppemental. L’évolution et la sévérité ne sont pas identiques chez toutes les personnes. (Cours, p. 14)'
  },
  {
    id: 51,
    type: 'QCM',
    question: 'Un homme 46,XY non mosaïque porte un variant pathogène de PCDH19 et n’a pas d’épilepsie. Avec une femme non porteuse, quelle transmission du variant est attendue dans le modèle lié à l’X ?',
    options: [
      { text: 'À aucun enfant puisqu’il est asymptomatique', correct: false, correction: 'Non. Absence de manifestations et absence de variant transmissible sont deux notions différentes.' },
      { text: 'À toutes ses filles et à aucun de ses fils', correct: true, correction: 'Oui boss 🎯 Ses filles reçoivent son X portant le variant ; ses fils reçoivent son Y.' },
      { text: 'À la moitié de ses fils uniquement', correct: false, correction: 'Faux. Son X n’est pas transmis aux fils dans ce modèle.' },
      { text: 'À exactement un enfant choisi indépendamment de son sexe', correct: false, correction: 'Non chef. La transmission paternelle dépend ici du chromosome transmis, pas d’un quota familial.' },
      { text: 'À tous ses fils et à aucune de ses filles', correct: false, correction: 'Non chef. Le père transmet son Y aux fils et son X aux filles.' },
    ],
    explanation: 'Un homme hémizygote non mosaïque peut être habituellement asymptomatique dans les troubles liés à PCDH19, tout en transmettant son X à toutes ses filles. Les filles recevant le variant sont à risque de manifestations ; le phénotype ne doit pas être assimilé à une pénétrance absolue. (Cours, p. 14–15)'
  },
  {
    id: 52,
    type: 'QRM',
    question: 'Quelles situations expliquent une atteinte possible chez certains garçons pour les troubles liés à PCDH19 présentés ?',
    options: [
      { text: 'Un caryotype 47,XXY avec une variation pathogène de PCDH19 sur un seul des deux X', correct: true, correction: 'Oui boss. Cette hétérozygotie peut permettre des populations cellulaires d’expression différente ; le caryotype usuel de Klinefelter est 47,XXY.' },
      { text: 'Le seul fait d’être un homme hémizygote non mosaïque garantit toujours une encéphalopathie sévère', correct: false, correction: 'Non chef. C’est justement le profil habituellement épargné dans le modèle du cours.' },
      { text: 'Le syndrome de Tourette, qui remplace nécessairement le variant PCDH19', correct: false, correction: 'Faux. Tourette et Klinefelter sont des situations différentes ; le piège est corrigé dans le support.' },
      { text: 'Un contexte dans lequel des populations cellulaires n’expriment pas toutes la même forme de PCDH19', correct: true, correction: 'Exact. Cette coexistence rejoint le mécanisme d’interférence proposé.' },
      { text: 'Un mosaïsme postzygotique faisant coexister des cellules avec et sans le variant', correct: true, correction: 'Exact 🧠 Il peut produire deux populations cellulaires différentes.' },
    ],
    explanation: 'Le cours cite des garçons mosaïques et des garçons avec deux X, notamment 47,XXY. Ces situations peuvent faire coexister des cellules d’expression différente et permettre une interférence cellulaire. Elles ne signifient pas que chaque garçon concerné est obligatoirement malade. (Cours, p. 14–15 et 26)'
  },
  {
    id: 53,
    type: 'QCM',
    question: 'Quel mécanisme proposé explique le paradoxe d’expression de l’épilepsie liée à PCDH19 ?',
    options: [
      { text: 'L’interférence entre populations cellulaires exprimant différemment PCDH19', correct: true, correction: 'Oui boss 🧠 La coexistence de populations différentes peut désorganiser leurs interactions.' },
      { text: 'Une disparition automatique du variant dans les neurones de tous les hommes', correct: false, correction: 'Faux. Un homme hémizygote peut porter le variant sans le paradoxe de mosaïque d’expression attendu chez l’hétérozygote.' },
      { text: 'Une transmission du gène exclusivement par le chromosome Y', correct: false, correction: 'Non chef. PCDH19 est situé sur l’X.' },
      { text: 'Une perte de phosphate urinaire provoquée par PHEX', correct: false, correction: 'Non chef. Ce mécanisme appartient à l’hypophosphatémie liée à l’X.' },
      { text: 'Une multiplication d’un agent infectieux dans les cellules cérébrales', correct: false, correction: 'Non. Le cours présente un mécanisme génétique et cellulaire, pas une infection.' },
    ],
    explanation: 'Le modèle d’interférence cellulaire attribue la maladie aux interactions anormales entre populations exprimant différemment PCDH19. L’inactivation de l’X chez l’hétérozygote ou un mosaïsme postzygotique chez un garçon peut créer cette hétérogénéité. (Cours, p. 14–15)'
  },
  {
    id: 54,
    type: 'QRM',
    question: 'Concernant la mosaïque d’expression chez une femme hétérozygote pour un variant PCDH19, quelles propositions sont exactes ?',
    options: [
      { text: 'Un homme hémizygote non mosaïque peut avoir une expression plus homogène au locus', correct: true, correction: 'Exact. Ce contraste permet de comprendre le paradoxe du modèle.' },
      { text: 'Cette hétérogénéité d’expression peut perturber les interactions entre neurones', correct: true, correction: 'Oui boss. C’est le mécanisme d’interférence proposé.' },
      { text: 'Certaines cellules peuvent avoir l’X portant le variant actif et d’autres l’X sans variant actif', correct: true, correction: 'Exact 🧠 L’inactivation de l’X produit des populations d’expression différentes.' },
      { text: 'L’inactivation de l’X élimine physiquement l’allèle pathogène de l’ADN de chaque cellule', correct: false, correction: 'Faux. Elle modifie son expression sans supprimer sa séquence dans chaque cellule.' },
      { text: 'La présence du variant dans l’organisme suffit à expliquer toute différence entre sexes sans considérer la mosaïque', correct: false, correction: 'Non chef. Le cours insiste sur la coexistence de populations cellulaires, pas seulement sur la présence de l’allèle.' },
    ],
    explanation: 'L’inactivation de l’X crée une mosaïque d’expression chez l’hétérozygote. Elle ne supprime pas le variant de l’ADN. L’hétérogénéité des populations neuronales est au centre du modèle d’interférence cellulaire. (Cours, p. 5 et 15)'
  },
  {
    id: 55,
    type: 'QCM',
    question: 'Quelle distinction entre inactivation de l’X et mosaïsme postzygotique est correcte ?',
    options: [
      { text: 'Aucun de ces mécanismes ne peut modifier l’expression d’une maladie liée à l’X', correct: false, correction: 'Non chef. Les exemples du cours montrent précisément leur importance.' },
      { text: 'L’inactivation supprime un chromosome X entier dans chaque cellule tandis qu’une mutation postzygotique ne change que son expression', correct: false, correction: 'Non chef. L’inactivation est un mécanisme d’expression ; une mutation postzygotique peut modifier le génotype d’une lignée cellulaire.' },
      { text: 'L’inactivation peut créer des différences d’expression entre cellules ayant le même génotype, tandis qu’une mutation postzygotique peut créer des lignées de génotypes différents', correct: true, correction: 'Oui boss 🎯 Mosaïque d’expression et mosaïsme du variant ne désignent pas exactement le même phénomène.' },
      { text: 'Une mutation postzygotique est par définition présente dans toutes les cellules dès la fécondation', correct: false, correction: 'Non. Elle survient après la fécondation et peut n’affecter qu’une partie des descendants cellulaires.' },
      { text: 'Dans les deux cas, toutes les cellules ont nécessairement perdu le même gène de leur ADN', correct: false, correction: 'Faux. Une mosaïque d’expression n’implique pas une perte de gène et un mosaïsme mutationnel concerne seulement certaines lignées.' },
    ],
    explanation: 'Chez une femme hétérozygote, l’inactivation de l’X crée une mosaïque d’expression sans imposer des génotypes différents entre ses cellules. Un variant apparu après la fécondation peut, lui, créer des lignées avec et sans variant. (Cours, p. 5 et 14–15 ; distinction des mécanismes)'
  },
  {
    id: 56,
    type: 'QRM',
    question: 'Quelles comparaisons entre les exemples de maladies liées à l’X sont exactes ?',
    options: [
      { text: 'Tout homme porteur d’un variant dominant lié à l’X décède nécessairement in utero', correct: false, correction: 'Non chef. La létalité masculine n’est pas une règle de toutes les maladies dominantes liées à l’X.' },
      { text: 'L’absence de garçons atteints vivants dans une famille peut avoir des explications différentes selon la maladie', correct: true, correction: 'Oui boss 🧠 Létalité et absence habituelle de symptômes ne sont pas équivalentes.' },
      { text: 'Dans l’incontinentia pigmenti classique, une létalité fœtale masculine peut modifier l’arbre observé', correct: true, correction: 'Exact. Les conceptions et les enfants vivants n’ont alors pas la même répartition.' },
      { text: 'Dans le modèle PCDH19, un homme porteur non mosaïque habituellement sain peut transmettre le variant à ses filles', correct: true, correction: 'Oui 🎯 Il n’est pas nécessairement incapable de transmettre parce qu’il est asymptomatique.' },
      { text: 'L’inactivation de l’X et le mosaïsme peuvent contribuer à des expressions atypiques', correct: true, correction: 'Exact. Les catégories générales de transmission doivent être interprétées avec les mécanismes du cours.' },
    ],
    explanation: 'L’incontinentia pigmenti et les troubles liés à PCDH19 illustrent deux mécanismes distincts derrière des arbres pouvant surtout montrer des femmes atteintes. Il faut analyser transmission du variant, viabilité et expression clinique séparément. (Cours, p. 4–6 et 12–15)'
  },
  {
    id: 57,
    type: 'QCM',
    question: 'Quelle définition correspond à une expansion de motif répété ?',
    options: [
      { text: 'Une modification qui concerne obligatoirement un motif de trois nucléotides', correct: false, correction: 'Non chef. Les triplets sont fréquents, mais le cours cite aussi des motifs plus longs.' },
      { text: 'Une substitution unique d’un nucléotide sans modification du nombre de répétitions', correct: false, correction: 'Faux. Une substitution ponctuelle et une expansion sont des types de variation différents.' },
      { text: 'Une augmentation du nombre de copies d’un motif répété dans une région de l’ADN', correct: true, correction: 'Oui boss 🧠 C’est le nombre de répétitions du motif qui augmente.' },
      { text: 'Une augmentation du nombre de chromosomes X dans toutes les cellules', correct: false, correction: 'Non. L’expansion d’un motif ne correspond pas à une aneuploïdie.' },
      { text: 'La disparition obligatoire de tous les exons du gène', correct: false, correction: 'Non chef. Une expansion concerne des répétitions, pas nécessairement une délétion des exons.' },
    ],
    explanation: 'Une expansion augmente le nombre de répétitions d’un motif d’ADN. La longueur du motif et les seuils pertinents dépendent de la région et de la maladie considérées. (Cours, p. 16–17)'
  },
  {
    id: 58,
    type: 'QRM',
    question: 'Quelles propositions concernant la classification des maladies par expansion sont exactes ?',
    options: [
      { text: 'Leur transmission peut être liée à l’X, autosomique dominante ou autosomique récessive selon la maladie', correct: true, correction: 'Exact. Il n’existe pas un mode de transmission unique pour toutes les expansions.' },
      { text: 'Toutes les expansions non codantes entraînent obligatoirement le même mécanisme moléculaire', correct: false, correction: 'Non chef. Une perte d’expression et une toxicité de l’ARN sont deux mécanismes distincts possibles.' },
      { text: 'Une expansion peut se situer dans une séquence codante', correct: true, correction: 'Exact 🧠 Le cours cite notamment la maladie de Huntington.' },
      { text: 'Une expansion peut se situer dans une région non codante', correct: true, correction: 'Oui boss. FMR1 comporte une répétition CGG dans sa région 5’ non traduite.' },
      { text: 'Elles peuvent entraîner une perte de fonction ou un gain de propriété toxique', correct: true, correction: 'Oui 🎯 Les mécanismes dépendent du gène, du motif et de sa localisation.' },
    ],
    explanation: 'Les expansions se classent notamment selon leur localisation, leur stabilité, leurs effets fonctionnels et leur mode de transmission. Les mécanismes ne sont pas identiques dans toutes les maladies. (Cours, p. 16 et 18)'
  },
  {
    id: 59,
    type: 'QCM',
    question: 'Que signifie l’instabilité d’une répétition dans une mutation dynamique ?',
    options: [
      { text: 'L’instabilité rend impossible toute transmission familiale', correct: false, correction: 'Non chef. Ces variations sont précisément étudiées dans les familles.' },
      { text: 'Le motif doit obligatoirement changer de séquence à chaque génération', correct: false, correction: 'Non chef. L’instabilité étudiée concerne surtout le nombre de répétitions.' },
      { text: 'Le nombre de répétitions augmente obligatoirement lors de chaque grossesse', correct: false, correction: 'Non. Une tendance à l’expansion ne signifie pas une augmentation certaine dans chaque transmission.' },
      { text: 'Le nombre de répétitions est nécessairement identique dans chaque génération et chaque cellule', correct: false, correction: 'Faux. Cette constance décrit plutôt une répétition stable.' },
      { text: 'Le nombre de répétitions peut varier au cours des transmissions ou dans les cellules somatiques', correct: true, correction: 'Oui boss 🧠 Une expansion peut évoluer, sans imposer le même changement à chaque transmission.' },
    ],
    explanation: 'L’instabilité désigne la possibilité de variation du nombre de répétitions. Elle peut concerner les transmissions entre générations et les divisions somatiques, sans augmentation obligatoire à chaque grossesse. (Cours, p. 16–17)'
  },
  {
    id: 60,
    type: 'QRM',
    question: 'Concernant l’anticipation dans les maladies par expansion, quelles propositions sont exactes ?',
    options: [
      { text: 'Elle est inconstante et dépend de la maladie et du contexte de transmission', correct: true, correction: 'Exact. Il ne faut pas l’appliquer comme une règle automatique à chaque famille.' },
      { text: 'Elle peut se traduire par un âge de début plus précoce dans les générations suivantes', correct: true, correction: 'Exact 🧠 C’est une des manifestations de l’anticipation.' },
      { text: 'Elle garantit que chaque enfant sera plus sévèrement atteint que son parent', correct: false, correction: 'Non chef. Une tendance familiale ne constitue pas une certitude pour chaque individu.' },
      { text: 'Elle signifie que la maladie disparaît progressivement parce que les répétitions se raccourcissent toujours', correct: false, correction: 'Faux. Ce n’est pas la définition de l’anticipation.' },
      { text: 'Elle peut être associée à une aggravation de la sévérité au fil des générations', correct: true, correction: 'Oui boss. Le cours décrit aussi cette dimension.' },
    ],
    explanation: 'L’anticipation désigne une tendance à un début plus précoce et parfois à une plus grande sévérité dans les générations suivantes. Le cours précise qu’elle est inconstante. (Cours, p. 17)'
  },
  {
    id: 61,
    type: 'QCM',
    question: 'Quelle association entre motif répété et maladie est correcte ?',
    options: [
      { text: 'ATTCT dans ATXN10 — syndrome de l’X fragile', correct: false, correction: 'Faux. Cette expansion est associée à l’ataxie spinocérébelleuse de type 10.' },
      { text: 'CCTG dans FMR1 — ataxie spinocérébelleuse de type 10', correct: false, correction: 'Non chef. Le motif, le gène et la maladie sont ici mélangés.' },
      { text: 'Motif de 12 paires de bases dans CSTB — maladie de Huntington', correct: false, correction: 'Non. Le cours associe cette expansion à l’épilepsie myoclonique d’Unverricht-Lundborg.' },
      { text: 'CGG dans FMR1 — dystrophie myotonique de type 2', correct: false, correction: 'Non chef. Le motif CGG de FMR1 est associé aux affections liées à l’X fragile.' },
      { text: 'CCTG dans CNBP, anciennement appelé ZNF9 — dystrophie myotonique de type 2', correct: true, correction: 'Oui boss 🎯 Le cours utilise l’ancien nom ZNF9 ; le nom actuel est CNBP.' },
    ],
    explanation: 'La dystrophie myotonique de type 2 est associée à une expansion CCTG dans CNBP, dont l’ancien nom ZNF9 est utilisé dans le support. (Cours, p. 17)'
  },
  {
    id: 62,
    type: 'QRM',
    question: 'Quelles propositions illustrent correctement la diversité des motifs répétés ?',
    options: [
      { text: 'CCTG est un motif de quatre nucléotides associé à la dystrophie myotonique de type 2', correct: true, correction: 'Oui boss. Il s’agit du motif répété dans CNBP, anciennement ZNF9.' },
      { text: 'Le cours cite un motif de 12 paires de bases en amont de CSTB', correct: true, correction: 'Oui 🎯 Cet exemple montre que les expansions ne concernent pas seulement les triplets.' },
      { text: 'ATTCT est un motif de cinq nucléotides associé à ATXN10 dans la SCA10', correct: true, correction: 'Exact. Le nom E46L inscrit dans le support doit être corrigé en ATXN10.' },
      { text: 'CGG est un triplet associé à FMR1', correct: true, correction: 'Exact 🧠 Trois nucléotides composent le motif CGG.' },
      { text: 'Le nombre de nucléotides du motif et le nombre de répétitions sont la même mesure', correct: false, correction: 'Non chef. Un triplet peut être répété 30, 80 ou plusieurs centaines de fois : longueur du motif et nombre de copies sont distincts.' },
    ],
    explanation: 'Le cours cite des motifs de trois, quatre, cinq et douze paires de bases. La SCA10 concerne ATXN10, et non E46L comme indiqué par erreur dans le support. (Cours, p. 17)'
  },
  {
    id: 63,
    type: 'QCM',
    question: 'Quelle conséquence peut avoir une expansion dans une séquence codante ?',
    options: [
      { text: 'Elle est obligatoirement située en dehors de tous les exons codants', correct: false, correction: 'Non chef. La question concerne précisément une expansion dans une séquence codante.' },
      { text: 'Elle peut allonger une chaîne d’acides aminés, comme une polyglutamine, et conférer une propriété toxique à la protéine', correct: true, correction: 'Oui boss 🧠 Une protéine porteuse d’une expansion peut acquérir des propriétés délétères.' },
      { text: 'Elle donne nécessairement une protéine avec une chaîne de glutamates appelée polyQ', correct: false, correction: 'Non. PolyQ désigne des glutamines ; le glutamate n’est pas la glutamine.' },
      { text: 'Elle ne peut modifier ni la séquence ni les propriétés de la protéine', correct: false, correction: 'Faux. Une expansion codante peut modifier une chaîne d’acides aminés.' },
      { text: 'Elle entraîne toujours une absence complète de transcription par méthylation du promoteur', correct: false, correction: 'Non chef. Ce n’est pas le mécanisme unique des expansions codantes.' },
    ],
    explanation: 'Certaines expansions codantes entraînent un allongement d’une chaîne d’acides aminés et une toxicité protéique. Le terme polyglutamine, ou polyQ, doit remplacer « polyGlu » dans cet exemple du support ; des expansions de polyalanine sont aussi citées. (Cours, p. 16 et 18)'
  },
  {
    id: 64,
    type: 'QRM',
    question: 'Concernant les mécanismes des expansions non codantes, quelles propositions sont exactes ?',
    options: [
      { text: 'Elles provoquent nécessairement une expansion polyglutamine dans la protéine traduite', correct: false, correction: 'Faux. Une région non traduite ne code pas directement cette chaîne d’acides aminés.' },
      { text: 'Elles produisent toutes exactement le même mécanisme de perte de fonction', correct: false, correction: 'Non chef. Il existe plusieurs mécanismes ; une toxicité de l’ARN n’est pas une simple absence de protéine.' },
      { text: 'Elles peuvent diminuer l’expression du gène concerné', correct: true, correction: 'Exact 🧠 Le cours décrit un effet en cis réduisant la transcription et la quantité de protéine.' },
      { text: 'Certaines peuvent entraîner une toxicité de l’ARN', correct: true, correction: 'Oui boss. Ce mécanisme est notamment évoqué pour les dystrophies myotoniques et le FXTAS.' },
      { text: 'Une localisation non codante n’exclut pas une conséquence pathologique', correct: true, correction: 'Exact. Régulation de l’expression et effets de l’ARN peuvent être perturbés.' },
    ],
    explanation: 'Une expansion non codante peut modifier l’expression du gène ou produire des effets toxiques liés à l’ARN. Ces mécanismes doivent être distingués et ne sont pas universels pour toutes les expansions non codantes. (Cours, p. 16 et 18)'
  },
  {
    id: 65,
    type: 'QCM',
    question: 'Quelle est la localisation de la répétition CGG impliquée dans les affections liées à FMR1 ?',
    options: [
      { text: 'Dans une séquence codant directement une chaîne de glutamines de FMRP', correct: false, correction: 'Non chef. L’expansion CGG de FMR1 n’est pas une expansion polyglutamine codante.' },
      { text: 'Dans la région 3’ non traduite de CSTB', correct: false, correction: 'Non. Le motif CGG associé à l’X fragile concerne FMR1 en 5’.' },
      { text: 'Dans la région 5’ non traduite de FMR1', correct: true, correction: 'Oui boss 🎯 Le motif est dans une région non codante du transcrit.' },
      { text: 'Dans l’intron 9 d’ATXN10', correct: false, correction: 'Faux. Cet exemple concerne le motif ATTCT de la SCA10.' },
      { text: 'Dans une région du chromosome Y transmise de père en fils', correct: false, correction: 'Non chef. FMR1 est situé sur le chromosome X.' },
    ],
    explanation: 'Le gène FMR1 est porté par le chromosome X. La répétition CGG impliquée est située dans sa région 5’ non traduite ; FMR1 code la protéine FMRP. (Cours, p. 17 et 19)'
  },
  {
    id: 66,
    type: 'QRM',
    question: 'Quels éléments cliniques sont compatibles avec le syndrome de l’X fragile décrit dans le cours ?',
    options: [
      { text: 'Une macroorchidie surtout après la puberté', correct: true, correction: 'Exact 🎯 C’est le moment retenu dans la description clinique.' },
      { text: 'Une déficience intellectuelle et des troubles du langage, plus marqués chez les garçons en général', correct: true, correction: 'Exact 🧠 L’atteinte peut varier, notamment chez les filles.' },
      { text: 'Une dysmorphie faciale pouvant devenir plus nette avec l’âge', correct: true, correction: 'Oui boss. Le cours décrit notamment un visage allongé et de grandes oreilles.' },
      { text: 'Une déficience intellectuelle identique et obligatoire chez tous les garçons et toutes les filles', correct: false, correction: 'Non chef. Les manifestations et leur sévérité sont variables ; l’atteinte est généralement moins marquée chez les filles.' },
      { text: 'Des troubles du comportement, de l’anxiété ou des traits autistiques', correct: true, correction: 'Oui. Ces manifestations sont citées dans le tableau du garçon.' },
    ],
    explanation: 'Le cours décrit une atteinte du développement et du langage, des troubles comportementaux, une dysmorphie faciale évolutive et une macroorchidie après la puberté. Le phénotype est variable et généralement plus sévère chez les garçons. (Cours, p. 18–19)'
  },
  {
    id: 67,
    type: 'QCM',
    question: 'Un allèle de FMR1 comporte 80 répétitions CGG. À quelle catégorie appartient-il ?',
    options: [
      { text: 'Un allèle normal sans expansion', correct: false, correction: 'Non chef. 80 répétitions se situent dans la plage de prémutation.' },
      { text: 'Une prémutation', correct: true, correction: 'Oui boss 🎯 La prémutation correspond à environ 55–200 répétitions CGG.' },
      { text: 'Un allèle intermédiaire de 45 à 54 répétitions', correct: false, correction: 'Faux. 80 est au-dessus de la plage intermédiaire.' },
      { text: 'Une mutation complète avec plus de 200 répétitions', correct: false, correction: 'Non. 80 répétitions ne dépassent pas 200.' },
      { text: 'Une expansion qui prouve à elle seule le syndrome classique de l’X fragile', correct: false, correction: 'Non chef. Une prémutation doit être distinguée de la mutation complète et de ses conséquences.' },
    ],
    explanation: 'Un allèle de 80 CGG appartient à la catégorie des prémutations de FMR1. Le terme « prémunition » utilisé par erreur dans le support doit être remplacé par « prémutation ». Les plages de référence sont corrigées ici : normal < 45, intermédiaire 45–54, prémutation environ 55–200, mutation complète > 200. (Cours, p. 20–21)'
  },
  {
    id: 68,
    type: 'QRM',
    question: 'Quelles classifications de répétitions CGG de FMR1 sont correctes ?',
    options: [
      { text: '50 répétitions : allèle intermédiaire', correct: true, correction: 'Oui boss. 50 se situe dans la plage intermédiaire 45–54.' },
      { text: '30 répétitions : allèle normal', correct: true, correction: 'Exact 🧠 Cette valeur est inférieure à 45 répétitions.' },
      { text: '100 répétitions : prémutation', correct: true, correction: 'Exact 🎯 Cette valeur est dans la plage d’environ 55–200 répétitions.' },
      { text: 'Ces mêmes seuils numériques s’appliquent à toutes les maladies par expansion, quel que soit le gène', correct: false, correction: 'Non chef. Les seuils sont propres au gène et à la maladie concernés.' },
      { text: '300 répétitions : mutation complète', correct: true, correction: 'Oui. 300 répétitions dépassent le seuil de 200.' },
    ],
    explanation: 'Les valeurs illustratives permettent de distinguer allèle normal, intermédiaire, prémutation et mutation complète de FMR1. Ces catégories et leurs seuils ne doivent pas être transposés à toutes les autres expansions. (Cours, p. 16–17 et 20–21 ; plages de FMR1 rectifiées)'
  },
  {
    id: 69,
    type: 'QCM',
    question: 'Quel mécanisme est généralement associé à une mutation complète de FMR1 comportant plus de 200 répétitions CGG ?',
    options: [
      { text: 'La production garantie d’une quantité strictement nulle de FMRP dans chaque cellule de chaque patient', correct: false, correction: 'Non chef. Cette formulation est trop absolue, notamment en cas de mosaïcisme de taille ou de méthylation.' },
      { text: 'Une délétion obligatoire de l’ensemble du chromosome X', correct: false, correction: 'Non. Une expansion de répétitions n’est pas une disparition du chromosome.' },
      { text: 'Une augmentation obligatoire de FMRP liée à un promoteur toujours plus actif', correct: false, correction: 'Non chef. La mutation complète est habituellement associée à une extinction de l’expression.' },
      { text: 'Une hyperméthylation du promoteur, diminuant fortement l’expression de FMR1 et de FMRP', correct: true, correction: 'Oui boss 🧠 C’est le mécanisme habituel de perte de fonction ; les situations mosaïques imposent de nuancer les absolus.' },
      { text: 'Une toxicité protéique par chaîne polyglutamine codée par les CGG', correct: false, correction: 'Faux. Les CGG concernés sont dans une région non traduite.' },
    ],
    explanation: 'La mutation complète de FMR1 est habituellement associée à une hyperméthylation et à une forte diminution de l’expression de FMRP. Une extinction absolue dans toutes les cellules ne doit pas être affirmée pour chaque patient, notamment en présence de mosaïcisme. (Cours, p. 21)'
  },
  {
    id: 70,
    type: 'QRM',
    question: 'Quelles propositions distinguent correctement prémutation et mutation complète de FMR1 ?',
    options: [
      { text: 'La prémutation peut être associée à des effets toxiques liés à l’ARN', correct: true, correction: 'Exact 🧠 Le cours utilise ce mécanisme pour distinguer les manifestations de prémutation.' },
      { text: 'Les manifestations de prémutation peuvent différer du syndrome classique de l’X fragile', correct: true, correction: 'Exact. FXTAS et FXPOI sont des manifestations associées aux prémutations.' },
      { text: 'Toute prémutation rend la production de FMRP absolument nulle dans toutes les cellules', correct: false, correction: 'Non chef. Ce n’est pas le mécanisme général de la prémutation.' },
      { text: 'Une prémutation est nécessairement asymptomatique pendant toute la vie', correct: false, correction: 'Faux. Elle peut être associée notamment au FXTAS ou à une insuffisance ovarienne précoce.' },
      { text: 'La mutation complète entraîne habituellement une perte d’expression de FMRP', correct: true, correction: 'Oui boss. Le mécanisme classique est une perte de fonction liée à l’extinction du gène.' },
    ],
    explanation: 'Les prémutations peuvent s’accompagner de manifestations distinctes du syndrome de l’X fragile, notamment via des mécanismes liés à l’ARN. La mutation complète est classiquement associée à une perte d’expression de FMRP. (Cours, p. 21–22)'
  },
  {
    id: 71,
    type: 'QCM',
    question: 'Un homme porteur d’une prémutation FMR1 a des enfants avec une femme dont les deux allèles FMR1 sont normaux. Quelle transmission attend-on dans le modèle familial classique ?',
    options: [
      { text: 'La moitié de ses filles reçoivent son chromosome Y', correct: false, correction: 'Faux. Toutes ses filles reçoivent son chromosome X.' },
      { text: 'Tous ses enfants reçoivent directement une mutation complète de leur père', correct: false, correction: 'Non. Il faut distinguer transmission de la prémutation et expansion vers une mutation complète.' },
      { text: 'Toutes ses filles reçoivent la prémutation paternelle, et aucun de ses fils ne reçoit cet allèle paternel', correct: true, correction: 'Oui boss 🎯 Le père transmet son X à ses filles et son Y à ses fils.' },
      { text: 'Aucune de ses filles ne peut recevoir sa prémutation puisqu’il peut être asymptomatique', correct: false, correction: 'Non chef. L’absence de symptômes n’empêche pas la transmission de l’allèle.' },
      { text: 'Tous ses fils reçoivent sa prémutation sur le chromosome X paternel', correct: false, correction: 'Non chef. Un père transmet son chromosome Y à ses fils.' },
    ],
    explanation: 'Un père porteur d’une prémutation transmet son X à toutes ses filles et son Y à ses fils. La transmission paternelle d’une prémutation se distingue de son expansion en mutation complète, qui se produit classiquement lors de la transmission maternelle. (Cours, p. 20–21)'
  },
  {
    id: 72,
    type: 'QRM',
    question: 'Une femme possède un allèle FMR1 normal et un allèle prémuté. Quelles propositions sont exactes pour ses grossesses dans le modèle mendélien simple ?',
    options: [
      { text: 'La probabilité de transmettre cet X est exactement la même chose qu’un risque de 50 % de syndrome classique de l’X fragile', correct: false, correction: 'Non chef. Il faut aussi connaître l’évolution de l’allèle et l’expression du phénotype.' },
      { text: 'Une expansion en mutation complète peut survenir lors de la transmission maternelle', correct: true, correction: 'Oui boss. C’est la particularité de transmission soulignée pour FMR1.' },
      { text: 'Le risque d’expansion ne signifie pas qu’une mutation complète survient à chaque grossesse', correct: true, correction: 'Exact. Une possibilité d’expansion n’est pas une certitude pour chaque enfant.' },
      { text: 'Chaque enfant a une probabilité de 1/2 de recevoir le chromosome X portant l’allèle prémuté avant son éventuelle évolution de taille', correct: true, correction: 'Exact 🧠 La mère transmet l’un ou l’autre de ses deux chromosomes X.' },
      { text: 'Une prémutation maternelle ne peut être transmise qu’aux garçons', correct: false, correction: 'Faux. Un garçon comme une fille peut recevoir l’X maternel concerné.' },
    ],
    explanation: 'La mère hétérozygote transmet chacun de ses chromosomes X avec une probabilité de 1/2. Le risque d’expansion et le risque de manifestations cliniques sont des questions distinctes ; ils ne se déduisent pas du seul partage mendélien des X. (Cours, p. 20–22 ; application familiale)'
  },
  {
    id: 73,
    type: 'QCM',
    question: 'Quelle succession familiale peut expliquer le paradoxe de Sherman sans transmission directe père-fils ?',
    options: [
      { text: 'Une prémutation paternelle devient obligatoirement une mutation complète chez chaque fille', correct: false, correction: 'Faux. La transition vers la mutation complète est liée à la transmission maternelle.' },
      { text: 'Un grand-père transmet son chromosome X directement à tous ses fils', correct: false, correction: 'Non chef. Il transmet son chromosome Y à ses fils.' },
      { text: 'L’augmentation du risque s’explique uniquement par le nombre de garçons dans la famille, sans évolution de l’allèle', correct: false, correction: 'Non. L’expansion possible de la prémutation lors d’une transmission maternelle est une partie essentielle de l’explication.' },
      { text: 'La présence d’un homme asymptomatique exclut toute expansion dans ses descendants', correct: false, correction: 'Non chef. Un porteur de prémutation peut transmettre l’allèle malgré l’absence de syndrome classique.' },
      { text: 'Un grand-père prémuté transmet son X à sa fille, puis une expansion peut survenir lorsque celle-ci transmet cet allèle à son enfant', correct: true, correction: 'Oui boss 🧠 La transmission passe par la fille ; le grand-père ne transmet pas directement son X à un fils.' },
    ],
    explanation: 'Le paradoxe de Sherman s’explique notamment par des transmetteurs porteurs de prémutation, puis par l’expansion possible lors d’une transmission maternelle ultérieure. Cette succession ne constitue pas une transmission directe père-fils liée à l’X. (Cours, p. 20–21)'
  },
  {
    id: 74,
    type: 'QRM',
    question: 'Quelles propositions éclairent le risque familial dans les affections liées à FMR1 ?',
    options: [
      { text: 'Une personne porteuse de prémutation peut ne pas présenter le syndrome classique de l’X fragile', correct: true, correction: 'Exact 🧠 Le phénotype de prémutation diffère de celui de mutation complète.' },
      { text: 'Un homme asymptomatique ne peut jamais transmettre une prémutation à ses filles', correct: false, correction: 'Non chef. Il transmet son chromosome X à ses filles, quel que soit son statut clinique.' },
      { text: 'L’évolution de la taille de l’expansion peut modifier le risque d’atteinte dans les générations suivantes', correct: true, correction: 'Oui boss. Cela contribue au paradoxe familial présenté.' },
      { text: 'L’anticipation impose une augmentation identique du nombre de CGG dans chaque branche de chaque famille', correct: false, correction: 'Faux. L’instabilité et ses conséquences sont variables.' },
      { text: 'Le passage d’une prémutation à une mutation complète se produit classiquement par transmission maternelle', correct: true, correction: 'Exact 🎯 C’est la particularité mise en avant dans le support.' },
    ],
    explanation: 'Le risque familial dépend du statut de l’allèle, de son évolution et du parent transmetteur. Le paradoxe de Sherman ne supprime pas les règles de transmission des chromosomes X et Y. (Cours, p. 17 et 20–22)'
  },
  {
    id: 75,
    type: 'QCM',
    question: 'Quel tableau clinique correspond au FXTAS associé à une prémutation FMR1 ?',
    options: [
      { text: 'Une disparition définitive de tout risque neurologique dès que la puberté est passée', correct: false, correction: 'Non chef. Le risque de FXTAS concerne justement les âges plus avancés.' },
      { text: 'Une déficience intellectuelle néonatale identique chez tous les porteurs de prémutation', correct: false, correction: 'Non. Le FXTAS est tardif et n’atteint pas tous les porteurs.' },
      { text: 'Une macroorchidie isolée apparaissant obligatoirement chez le nourrisson', correct: false, correction: 'Non chef. Le FXTAS est un tableau neurologique tardif, distinct du syndrome classique de l’X fragile.' },
      { text: 'Une ataxie et un tremblement d’action d’apparition tardive et progressive', correct: true, correction: 'Oui boss 🧠 C’est le tableau principal décrit pour le FXTAS.' },
      { text: 'Une insuffisance ovarienne avant 40 ans chez toutes les personnes porteuses', correct: false, correction: 'Faux. L’insuffisance ovarienne correspond au FXPOI et concerne les femmes, avec une pénétrance incomplète.' },
    ],
    explanation: 'Le FXTAS est associé à une prémutation de FMR1. Le cours décrit une ataxie cérébelleuse et un tremblement d’action d’apparition tardive, avec une évolution progressive. (Cours, p. 21)'
  },
  {
    id: 76,
    type: 'QRM',
    question: 'Concernant le FXTAS, quelles propositions sont exactes ?',
    options: [
      { text: 'Il est plus fréquent chez les hommes, mais des femmes porteuses peuvent aussi être atteintes', correct: true, correction: 'Oui boss. La prédominance masculine n’exclut pas les femmes.' },
      { text: 'Sa pénétrance est incomplète et dépend notamment de l’âge', correct: true, correction: 'Exact 🧠 Tous les porteurs de prémutation ne développent pas ce syndrome.' },
      { text: 'Une histoire familiale d’X fragile peut orienter l’interrogatoire d’un patient présentant ce tableau tardif', correct: true, correction: 'Oui 🎯 Le support cite notamment les grands-pères d’enfants atteints.' },
      { text: 'Des troubles cognitifs peuvent accompagner les manifestations motrices', correct: true, correction: 'Exact. Le cours évoque aussi des troubles cognitifs ou une démence associée.' },
      { text: 'Il apparaît obligatoirement dès l’enfance chez chaque porteur de prémutation', correct: false, correction: 'Non chef. Le syndrome est décrit comme tardif, progressif et de pénétrance incomplète.' },
    ],
    explanation: 'Le FXTAS est une manifestation tardive de pénétrance incomplète, surtout observée chez les hommes mais aussi possible chez les femmes. Les antécédents familiaux peuvent relier ce tableau à FMR1. (Cours, p. 21–22)'
  },
  {
    id: 77,
    type: 'QCM',
    question: 'Quelle définition correspond au FXPOI ?',
    options: [
      { text: 'Une ataxie progressive liée à FMR1 chez un homme âgé', correct: false, correction: 'Non chef. Ce tableau évoque le FXTAS.' },
      { text: 'Une ménopause précoce obligatoire chez toutes les femmes porteuses d’une mutation complète', correct: false, correction: 'Non. Le FXPOI est associé à la prémutation et n’est pas systématique chez les porteuses.' },
      { text: 'Une insuffisance ovarienne précoce associée à une prémutation FMR1, avant 40 ans', correct: true, correction: 'Oui boss 🎯 FXPOI désigne l’insuffisance ovarienne primaire associée à l’X fragile.' },
      { text: 'Une absence de toute conséquence clinique possible d’une prémutation', correct: false, correction: 'Non chef. Le FXPOI illustre justement une manifestation possible de prémutation.' },
      { text: 'Une macroorchidie après la puberté', correct: false, correction: 'Faux. La macroorchidie est un signe du syndrome classique de l’X fragile.' },
    ],
    explanation: 'Le FXPOI correspond à une insuffisance ovarienne avant 40 ans associée à une prémutation FMR1. Sa pénétrance est incomplète : le cours évoque environ 20 % des femmes porteuses. (Cours, p. 22)'
  },
  {
    id: 78,
    type: 'QRM',
    question: 'Quelles propositions concernant les manifestations familiales de FMR1 sont exactes ?',
    options: [
      { text: 'Une femme porteuse de prémutation peut développer une insuffisance ovarienne précoce', correct: true, correction: 'Exact 🧠 C’est une possibilité de FXPOI, pas une certitude.' },
      { text: 'Tous les porteurs de prémutation développent obligatoirement FXTAS et FXPOI simultanément', correct: false, correction: 'Non chef. Ces manifestations ont une pénétrance incomplète et des contextes différents ; le FXPOI concerne les femmes.' },
      { text: 'Un homme porteur de prémutation peut présenter un tableau neurologique tardif de FXTAS', correct: true, correction: 'Oui boss. Le cours souligne l’intérêt d’interroger les générations plus âgées.' },
      { text: 'Un enfant porteur d’une mutation complète peut présenter le syndrome de l’X fragile', correct: true, correction: 'Exact. Le statut de mutation complète est associé au syndrome classique.' },
      { text: 'Des manifestations différentes dans une même famille peuvent être liées à des statuts d’allèle FMR1 différents', correct: true, correction: 'Oui 🎯 Prémutation et mutation complète n’ont pas les mêmes conséquences habituelles.' },
    ],
    explanation: 'Une même famille peut réunir un enfant atteint du syndrome de l’X fragile, une femme avec FXPOI et un adulte âgé avec FXTAS. Les manifestations ne sont pas obligatoires et dépendent notamment du statut de l’allèle, de l’âge et du sexe. (Cours, p. 21–22)'
  },
  {
    id: 79,
    type: 'QCM',
    question: 'Une famille comporte un garçon atteint d’X fragile, une mère porteuse de prémutation et un grand-père maternel présentant tardivement ataxie et tremblement d’action. Quelle hypothèse relie le mieux ces éléments ?',
    options: [
      { text: 'L’ataxie tardive exclut toute implication de FMR1', correct: false, correction: 'Non. Elle est compatible avec un FXTAS chez un porteur de prémutation.' },
      { text: 'Le grand-père et la mère ont obligatoirement une mutation complète identique à celle de l’enfant', correct: false, correction: 'Faux. Les statuts prémutation et mutation complète doivent être distingués.' },
      { text: 'L’atteinte du garçon prouve que sa mère aura nécessairement un FXPOI avant 40 ans', correct: false, correction: 'Non chef. Le FXPOI est un risque de pénétrance incomplète, pas une conséquence certaine.' },
      { text: 'Le grand-père a transmis directement son chromosome X au garçon', correct: false, correction: 'Non chef. La transmission familiale peut passer par la mère ; ce n’est pas une transmission directe grand-père-petit-fils.' },
      { text: 'Une prémutation familiale peut être associée à un FXTAS chez le grand-père et à une expansion maternelle chez l’enfant', correct: true, correction: 'Oui boss 🧠 Cette hypothèse rend les éléments compatibles ; elle doit être évaluée, pas affirmée par les symptômes seuls.' },
    ],
    explanation: 'Le cours souligne l’intérêt de relier les phénotypes de plusieurs générations. Un FXTAS chez un porteur de prémutation et une mutation complète apparue par transmission maternelle peuvent expliquer cette histoire familiale, sous réserve d’évaluation génétique. (Cours, p. 20–22)'
  },
  {
    id: 80,
    type: 'QRM',
    question: 'Quelles propositions résument correctement les affections liées aux expansions de FMR1 ?',
    options: [
      { text: 'Le passage d’une prémutation à une mutation complète relève classiquement de la transmission maternelle', correct: true, correction: 'Exact 🎯 C’est la particularité de transmission à retenir.' },
      { text: 'Le raisonnement familial doit distinguer transmission de l’allèle, expansion et expression clinique', correct: true, correction: 'Oui. Ces trois étapes ne sont pas trois certitudes équivalentes.' },
      { text: 'Une personne porteuse d’une prémutation est obligatoirement symptomatique et transmet une expansion plus longue à chaque enfant', correct: false, correction: 'Non chef. La pénétrance est incomplète et l’instabilité n’impose pas la même évolution à chaque transmission.' },
      { text: 'Elles concernent une répétition CGG dans une région 5’ non codante', correct: true, correction: 'Exact 🧠 Cette localisation distingue FMR1 d’une expansion codante polyglutamine.' },
      { text: 'Prémutation et mutation complète ont des mécanismes et des manifestations habituelles différents', correct: true, correction: 'Oui boss. Il ne faut pas confondre FXTAS ou FXPOI avec le syndrome classique de l’X fragile.' },
    ],
    explanation: 'Les affections liées à FMR1 reposent sur une répétition CGG non codante. L’interprétation doit intégrer la catégorie de l’allèle, les mécanismes moléculaires, le parent transmetteur et la variabilité des manifestations. (Cours, p. 19–22)'
  },
]
